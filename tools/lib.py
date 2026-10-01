# -*- coding: utf-8 -*-
"""
lib.py — Motor de contingut del banc de preguntes.

Principi de disseny: cap resposta s'escriu a mà. Tota opció (correcta o
distractor) prové d'un càlcul exacte amb Fraction/SymPy. Els distractors
es generen SIMULANT un error concret amb nom (model DistractorLib), de
manera que triar-lo diu a l'alumne QUIN error ha comès.
"""

from fractions import Fraction as F
from sympy import sympify, Integer, Rational
from math import gcd
import json
import base64
import re
import random

# ---------------------------------------------------------------- càlcul

def ev(expr):
    """Avalua una expressió aritmètica en racionals exactes.

    Les divisions són exactes: ev('(-54)/9') -> -6, ev('1/3+2/5') -> 11/15.
    """
    v = sympify(str(expr), rational=True)
    v = Rational(v)
    return F(int(v.p), int(v.q))


def mcd(*ns):
    r = 0
    for n in ns:
        r = gcd(r, abs(int(n)))
    return r


def mcm(*ns):
    r = 1
    for n in ns:
        n = abs(int(n))
        r = r * n // gcd(r, n)
    return r


def factors(n):
    """Descomposició factorial: 3850 -> [(2,1),(5,2),(7,1),(11,1)]"""
    n = abs(int(n))
    out, d = [], 2
    while d * d <= n:
        e = 0
        while n % d == 0:
            n //= d
            e += 1
        if e:
            out.append((d, e))
        d += 1 if d == 2 else 2
    if n > 1:
        out.append((n, 1))
    return out


# ------------------------------------------------------------ renderitzat

def tex(x):
    """Racional -> LaTeX. Enters tal qual; fraccions amb \\dfrac i el
    signe sempre al davant (convenció del quadern)."""
    if isinstance(x, str):
        return x
    x = F(x)
    if x.denominator == 1:
        return str(x.numerator)
    s = "-" if x.numerator < 0 else ""
    return r"%s\dfrac{%d}{%d}" % (s, abs(x.numerator), x.denominator)


def texd(x, dec=None):
    """Racional -> decimal amb coma catalana."""
    v = float(x)
    s = ("%g" % v) if dec is None else ("%.*f" % (dec, v))
    return s.replace(".", "{,}")


def tex_factors(n, sign=True):
    """Descomposició factorial en LaTeX: -432 -> -2^{4}\\cdot 3^{3}"""
    ps = factors(n)
    cos = r"\cdot ".join(
        (r"%d^{%d}" % (p, e)) if e > 1 else str(p) for p, e in ps
    )
    return ("-" if (sign and int(n) < 0) else "") + cos


# ---------------------------------------------- decimals i fracció generatriu

def dec_ex(s):
    """Decimal exacte escrit a la catalana -> Fraction. '5,25' -> 21/4"""
    s = s.replace("{,}", ",").replace(".", ",")
    neg = s.startswith("-")
    s = s.lstrip("-")
    if "," in s:
        ent, d = s.split(",")
    else:
        ent, d = s, ""
    v = F(int(ent + d) if (ent + d) else 0, 10 ** len(d))
    return -v if neg else v


def per_frac(ent, ante="", per=""):
    """Fracció generatriu d'un decimal periòdic.

    per_frac(3, '', '5')    -> 32/9      (3,5^ = 3,555...)
    per_frac(5, '9', '02')  -> 5843/990  (5,902^ = 5,90202...)
    """
    ent, ante, per = str(ent), str(ante), str(per)
    tot = int(ent + ante + per)
    cap = int(ent + ante)
    den = int("9" * len(per) + "0" * len(ante))
    return F(tot - cap, den)


def per_tex(ent, ante="", per=""):
    """Decimal periòdic en LaTeX amb barra sobre el període."""
    ent, ante, per = str(ent), str(ante), str(per)
    return r"%s{,}%s\overline{%s}" % (ent, ante, per)


def den_gen(ante, per):
    """El denominador de la fracció generatriu: nous i zeros."""
    return int("9" * len(str(per)) + "0" * len(str(ante)))


# ------------------------------------------------------------ model d'ítem

_BANC = []
_ERRORS = {}


def D(valor, error, feedback):
    """Un distractor: valor (racional o LaTeX), etiqueta d'error, feedback."""
    return {"tex": tex(valor), "err": error, "fb": feedback}


# ---------------------------------------------------------------------
# Dificultat
# ---------------------------------------------------------------------
# Quatre nivells.
#
#   1  TRIVIAL     una sola aplicació d'una sola definició, amb totes les
#                  dades explícites i en l'ordre que la fórmula les demana,
#                  números que es fan de cap i res a triar. La prova del
#                  cotó: si l'alumne sap la definició, encerta; si no la
#                  sap, falla; i no hi ha cap tercera cosa que pugui anar
#                  malament. Un trivial no és un exercici fàcil, és un
#                  DIAGNÒSTIC: serveix per saber si la definició hi és
#                  abans de penjar-hi res a sobre.
#   2  DIRECTA     un sol concepte, però ja hi ha un pas intermedi, o cal
#                  triar entre dues fórmules, o els números no es fan de
#                  cap.
#   3  ENCADENADA  dos o tres passos lligats, o cal decidir el mètode abans
#                  de començar (quin cas notable és, quin sistema de
#                  resolució, si toca Ruffini o divisió llarga).
#   4  COMPLETA    problema amb context, o cal muntar l'expressió a partir
#                  d'un enunciat en paraules, o barreja diversos conceptes,
#                  o demana justificar / detectar un error.
#
# PER QUÈ EL TRIVIAL ÉS UN NIVELL I NO UN «DIRECTA FÀCIL». Abans l'escala
# començava a DIRECTA, i el resultat era que 10 blocs obrien amb el primer
# exercici que el material font havia decidit posar primer: el Full 4
# començava sumant quatre polinomis de grau 5 i el Full 5, amb una equació
# sense solució. Ordenar no ho podia arreglar perquè el graó no existia.
#
# ON ÉS LA FRONTERA. 6x³:2x és trivial; (x⁴-2x³+x²-x+3):(x²+x+1) és
# completa. L'àrea d'un triangle rectangle amb els dos catets donats és
# trivial; amb l'àrea i un catet, troba l'altre, és directa; l'isòsceles
# d'àrea 24 i base 6 és encadenada.
#
# El nivell es fixa PER EXERCICI amb dificultats({num: nivell}) a dalt de
# cada c_<tema>.py, perquè així es pot revisar la graduació sencera d'un
# full d'una ullada en lloc d'anar-la a buscar a 60 llocs. Els apartats que
# se surten del to del seu exercici porten dif= al seu Q().
TRIVIAL, DIRECTA, ENCADENADA, COMPLETA = 1, 2, 3, 4
NIVELLS = (TRIVIAL, DIRECTA, ENCADENADA, COMPLETA)
NOM_NIVELL = {TRIVIAL: "trivial", DIRECTA: "directa",
              ENCADENADA: "encadenada", COMPLETA: "completa"}

_DIF = {}


# ---------------------------------------------------------------------
# Blocs
# ---------------------------------------------------------------------
# Un full es divideix en blocs, i fins ara la llista vivia centralitzada a
# `FULLS[N]["blocs"]` de build.py. Això obliga tothom qui afegeix contingut a
# tocar el mateix fitxer, que és exactament el que fa impossible treballar en
# paral·lel.
#
# Amb aquest registrador, un mòdul de contingut declara els blocs que aporta i
# build.py els recull. La llista central segueix funcionant igual per a tot el
# que ja hi és: els registrats s'hi afegeixen, no la substitueixen.
_BLOCS = []


def blocs(llista, despres=None):
    """Declara els blocs que aporta aquest mòdul.

        blocs([("factor_multiplicador", "El factor multiplicador",
                "Pujar un 15 % és multiplicar per 1,15...")],
              despres="percentatges")

    `despres` és l'id del bloc darrere el qual s'han de col·locar. L'ordre dels
    blocs és el que veu l'alumne al full, i sovint importa: el factor
    multiplicador va després dels percentatges i abans dels encadenats, no al
    final. Sense `despres`, s'afegeixen al final.
    """
    for b in llista:
        assert len(b) == 3, "cada bloc és (id, títol, descripció): %r" % (b,)
        assert b[0] and b[1] and b[2], "cap camp del bloc pot ser buit: %r" % (b,)
    _BLOCS.append((despres, list(llista)))


def blocs_registrats():
    """Ho crida build.py; no ho cridis des d'un mòdul de contingut."""
    return list(_BLOCS)


def dificultats(taula):
    """Registra la taula de dificultat: {num_exercici: 1|2|3|4}.

    Acumula, no substitueix: el Full 1 el componen quatre mòduls i cadascun
    hi aporta els seus exercicis. Els números d'exercici són únics a tot el
    projecte, així que registrar-ne un dues vegades amb valors diferents és
    sempre un error, i s'atura."""
    for k, v in taula.items():
        assert v in NIVELLS, \
            f"exercici {k}: dificultat {v!r} fora de l'escala 1-4 " \
            f"(1 trivial, 2 directa, 3 encadenada, 4 completa)"
        assert _DIF.get(k, v) == v, \
            f"exercici {k}: dificultat registrada dues vegades ({_DIF[k]} i {v})"
    _DIF.update(taula)


def Q(qid, ex, ap, bloc, tipus, enunciat,
      correcta, distractors, pistes, resolucio, ex_text="", nota="", dif=None,
      nota_interna="", figura="", comentari=""):
    """Registra una pregunta al banc, validant-la."""
    item = {
        "id": qid,
        "ex": ex,
        "ap": ap,
        "bloc": bloc,
        "tipus": tipus,
        "dif": dif if dif is not None else _DIF.get(ex),
        "ordre": len(_BANC),
        "ex_text": ex_text,
        "enunciat": enunciat,
        "correcta": tex(correcta),
        "distractors": distractors,
        "pistes": pistes if isinstance(pistes, list) else [pistes],
        "resolucio": resolucio if isinstance(resolucio, list) else [resolucio],
        # `nota` la veu l'alumne a practica.html: ha d'explicar-li una decisió
        # d'interpretació en termes que li serveixin per resoldre l'exercici.
        # `nota_interna` només surt al REVISIO: hi van les referències als
        # fitxers de la font, els dubtes de transcripció i la feina pendent,
        # que a l'alumne no li diuen res i el desconcerten.
        "nota": nota,
        "nota_interna": nota_interna,
        # `comentari` també el veu l'alumne, però DESPRÉS de respondre: surt
        # amb la resolució i viatja dins de la `clau`, no en clar. Hi va el
        # que fa pensar un cop resolt (la idea del bloc, el parany, el cas
        # que sorprèn). La `nota` surt amb l'enunciat i, per tant, no pot
        # dir res que acosti a la resposta; _valida() ho vigila.
        "comentari": comentari,
        # SVG que acompanya l'enunciat, generat per tools/figures/. La
        # figura ACOMPANYA l'enunciat, no el substitueix: les mesures han de
        # continuar dites amb paraules perquè l'exercici es pugui resoldre
        # amb un lector de pantalla. _valida() ho comprova.
        "figura": figura,
    }
    _valida(item)
    _BANC.append(item)
    for d in distractors:
        _ERRORS.setdefault(d["err"], []).append(qid)
    return item


def _pla(t):
    """Forma plana d'un text LaTeX per comparar-ne el contingut matemàtic:
    sense espais, coma catalana pelada i sense zeros decimals de farciment
    (1{,}20 i 1{,}2 són el mateix nombre i han de coincidir). Els dòlars
    queden com a `|`, perquè encara cal saber on comença i acaba una
    fórmula."""
    t = re.sub(r"\\(?:text|mathrm|operatorname)\{([^}]*)\}", r"\1", t)
    t = re.sub(r"\\d?frac", "frac", t)
    t = re.sub(r"\\[,;!: ]|\\quad|\\left|\\right|\s+", "", t).replace("$", "|")
    t = t.replace("{,}", ",").replace("\\%", "%")
    t = re.sub(r"(\d,\d*?)0+(?!\d)", r"\1", t)
    return re.sub(r"(\d),(?!\d)", r"\1", t)


def nota_revela(nota, correcta):
    """Diu si la `nota` visible conté la resposta correcta.

    La nota es pinta al costat de l'enunciat, abans de les opcions. El 275a
    duia «Puja un 20 % → ×1,2» a la nota d'un exercici que preguntava per
    quin nombre es multiplica per pujar un 20 %, i el 277a hi duia
    «60 → 66 → 59,4» quan la resposta era 60. Es compara el valor sencer
    de la resposta i, si porta unitats, el número que hi ha dins dels
    dòlars; sempre com a nombre sencer, perquè «12» no s'ha de trobar dins
    de «120» ni «8» dins de «-8». Una resposta d'una sola xifra només compta
    si a la nota és una fórmula sencera ($0$): l'«1» de $\\dfrac{1}{9999}$
    no diu res de cap resposta."""
    if not nota:
        return False
    text = _pla(nota)
    trossos = [m for m in re.findall(r"\$([^$]*)\$", correcta)
               if not re.fullmatch(r"\^\{?\d\}?", m.strip())]
    candidats = {_pla(correcta).strip("|")}
    if len(trossos) == 1:
        candidats.add(_pla(trossos[0]))
    for c in candidats:
        if not c:
            continue
        if len(c) == 1:
            if "|%s|" % c in text:
                return True
            continue
        for m in re.finditer(re.escape(c), text):
            abans = text[m.start() - 1] if m.start() else ""
            despres = text[m.end():m.end() + 2]
            if re.match(r"[\d,.]", abans) or (abans == "-" and not c.startswith("-")):
                continue
            if re.match(r"\d|[,.]\d", despres):
                continue
            return True
    return False


def _valida(it):
    qid = it["id"]
    ds = it["distractors"]
    assert len(ds) == 3, f"{qid}: calen exactament 3 distractors, n'hi ha {len(ds)}"
    opcions = [it["correcta"]] + [d["tex"] for d in ds]
    norm = [re.sub(r"\s+", "", o) for o in opcions]
    assert len(set(norm)) == 4, f"{qid}: opcions repetides -> {opcions}"
    for d in ds:
        assert d["fb"].strip(), f"{qid}: distractor {d['err']} sense feedback"
        assert d["err"].isupper() or "_" in d["err"], f"{qid}: etiqueta d'error dubtosa"
    assert it["pistes"] and all(p.strip() for p in it["pistes"]), f"{qid}: sense pistes"
    assert it["resolucio"] and all(str(r).strip() for r in it["resolucio"]), f"{qid}: sense resolució"
    assert it["tipus"] in "ABC", f"{qid}: tipus desconegut"
    fuita = re.search(r"\.tex\b|abans de publicar|cal confirmar|per revisar",
                      it["nota"], re.I)
    assert not fuita, (
        f"{qid}: la nota visible parla de la font o de feina pendent "
        f"({fuita.group(0)!r}); això va a nota_interna=")
    assert not nota_revela(it["nota"], it["correcta"]), (
        f"{qid}: la nota surt amb l'enunciat i conté la resposta correcta "
        f"({it['correcta']!r}); el que s'ha de llegir després de respondre "
        f"va a comentari=")
    fig = it["figura"]
    if fig:
        assert fig.lstrip().startswith("<svg"), f"{qid}: la figura no és un SVG"
        assert "role=\"img\"" in fig and "<title>" in fig, (
            f"{qid}: la figura no té role=\"img\" ni <title>: amb un lector de "
            f"pantalla no es podria saber què hi ha dibuixat")
        assert "$" not in fig, (
            f"{qid}: la figura porta $: dins d'un SVG, KaTeX no hi entra i els "
            f"dòlars es veurien tal qual")
        # L'amplada fixa es mira NOMÉS a l'etiqueta <svg> d'obertura: els
        # <rect> de dins en porten, i han de portar-ne.
        obertura = fig[fig.index("<svg"):fig.index(">", fig.index("<svg")) + 1]
        assert "viewBox" in obertura, f"{qid}: la figura no porta viewBox"
        assert 'width="' not in obertura and 'height="' not in obertura, (
            f"{qid}: la figura porta amplada o alçada fixa a l'etiqueta <svg>; "
            f"amb viewBox tota sola s'adapta a la pantalla")
    assert it["dif"] in NIVELLS, (
        f"{qid}: sense dificultat (l'exercici {it['ex']} no és a la taula "
        f"dificultats() del full, i el Q() no porta dif=)")


def tria(correcta, candidats, n=3):
    """Tria els n primers candidats vàlids: descarta els que coincideixen
    amb la resposta correcta o entre ells. Cada candidat és un D()."""
    vist = {re.sub(r"\s+", "", tex(correcta))}
    out = []
    for c in candidats:
        k = re.sub(r"\s+", "", c["tex"])
        if k in vist:
            continue
        vist.add(k)
        out.append(c)
        if len(out) == n:
            break
    assert len(out) == n, f"només {len(out)} candidats vàlids de {len(candidats)}"
    return out


def fx(*parells):
    """Descomposició en LaTeX a partir de parells (primer, exponent).
    Retorna (latex, valor) perquè el contingut pugui comprovar el producte."""
    val = 1
    trossos = []
    for p, e in parells:
        val *= p ** e
        trossos.append((r"%d^{%d}" % (p, e)) if e > 1 else str(p))
    return r"\cdot ".join(trossos), val



# --------------------------------------------------- taxonomia d'errors
# El feedback s'escriu UN cop per error, no un cop per pregunta: així el

# ---------------------------------------------------------------------
# Catàleg d'errors
# ---------------------------------------------------------------------
# Viu a `tools/tax/`, repartit en mòduls per tema i fusionat allà. Es
# reexporta aquí perquè tot el projecte el demana com a `lib.TAX` i no val la
# pena canviar-ho a trenta llocs.
from tax import TAX          # noqa: E402,F401

def DT(valor, tag, extra=""):
    """Distractor a partir d'una etiqueta de la taxonomia."""
    fb = TAX[tag]
    if extra:
        fb = extra + " " + fb
    return {"tex": tex(valor), "err": tag, "fb": fb}


def banc():
    return _BANC


def errors():
    return _ERRORS
