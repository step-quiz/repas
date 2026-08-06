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
# Tres nivells, i prou: més graons no els sabríem distingir de manera
# fiable i només farien soroll.
#
#   1  DIRECTA     un sol pas: aplicar una definició o una fórmula tal com
#                  s'acaba de veure, amb les dades ja a punt.
#   2  ENCADENADA  dos o tres passos, o cal triar el mètode abans de
#                  començar (quin cas notable és, quin sistema de
#                  resolució, si toca Ruffini o divisió llarga).
#   3  COMPLETA    problema amb context, o cal muntar l'expressió a partir
#                  d'un enunciat en paraules, o barreja diversos conceptes,
#                  o demana justificar / detectar un error.
#
# El nivell es fixa PER EXERCICI amb dificultats({num: nivell}) a dalt de
# cada c_<tema>.py, perquè així es pot revisar la graduació sencera d'un
# full d'una ullada en lloc d'anar-la a buscar a 60 llocs. Els apartats que
# se surten del to del seu exercici porten dif= al seu Q().
DIRECTA, ENCADENADA, COMPLETA = 1, 2, 3

_DIF = {}


def dificultats(taula):
    """Registra la taula de dificultat: {num_exercici: 1|2|3}.

    Acumula, no substitueix: el Full 1 el componen quatre mòduls i cadascun
    hi aporta els seus exercicis. Els números d'exercici són únics a tot el
    projecte, així que registrar-ne un dues vegades amb valors diferents és
    sempre un error, i s'atura."""
    for k, v in taula.items():
        assert v in (DIRECTA, ENCADENADA, COMPLETA), \
            f"exercici {k}: dificultat {v!r} fora de l'escala 1-3"
        assert _DIF.get(k, v) == v, \
            f"exercici {k}: dificultat registrada dues vegades ({_DIF[k]} i {v})"
    _DIF.update(taula)


def Q(qid, ex, ap, bloc, tipus, enunciat,
      correcta, distractors, pistes, resolucio, ex_text="", nota="", dif=None,
      nota_interna="", figura=""):
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
        # SVG que acompanya l'enunciat, generat per tools/figures.py. La
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
    assert it["dif"] in (DIRECTA, ENCADENADA, COMPLETA), (
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
# mateix malentès rep sempre la mateixa explicació a tot el lloc.

TAX = {
    "MENYS_PARENTESI":
        "El signe $-$ davant d'un parèntesi canvia el signe de TOTS els termes "
        "de dins, no només del primer.",
    "PARENTESI_NO_DISTRIBUIT":
        "No has canviat cap signe en treure el parèntesi. Restar un parèntesi "
        "vol dir restar-ne tots els termes.",
    "SUMA_NUMERADORS":
        "Has sumat numeradors amb numeradors i denominadors amb denominadors. "
        "Per sumar o restar fraccions cal reduir-les primer a denominador comú.",
    "NUMERADORS_SENSE_AJUSTAR":
        "Has posat el denominador comú correcte, però has copiat els numeradors "
        "tal qual. Cada numerador s'ha de multiplicar pel mateix nombre que el "
        "seu denominador.",
    "JERARQUIA":
        "Primer les multiplicacions i divisions; després, les sumes i restes.",
    "PRODUCTE_CREUAT":
        "Per multiplicar fraccions es fa numerador per numerador i denominador "
        "per denominador. Creuar-los és el que es fa per COMPARAR-les, no per "
        "multiplicar-les.",
    "ENTER_AL_NUMERADOR":
        "Has sumat l'enter directament al numerador. Un enter és una fracció de "
        "denominador $1$: cal reduir-lo a denominador comú abans de sumar.",
    "ENTER_MULTIPLICA_DENOMINADOR":
        "En multiplicar un enter per una fracció, l'enter multiplica NOMÉS el "
        "numerador; el denominador no canvia.",
    "SIGNE_FINAL":
        "El resultat té el signe canviat. Revisa quin dels dos termes és més "
        "gran en valor absolut.",
    "RESTA_NEGATIU":
        "Restar un nombre negatiu és sumar-ne l'oposat: $a-(-b) = a+b$.",
    "SIGNE_SUMA":
        "Revisa el signe del terme que se suma: sumar un negatiu fa disminuir.",
    "SIGNE_PRODUCTE":
        "Revisa la regla dels signes del producte: signes diferents donen "
        "resultat negatiu.",
    "DOBLE_NEGATIU":
        "Dos signes menys seguits es converteixen en un més: $-(-a) = +a$.",
    "SUMA_EN_LLOC_RESTA":
        "Sumar un nombre negatiu és restar-lo.",
    "INVERTIDA":
        "Has invertit la fracció. Simplificar no canvia quin terme és a dalt "
        "i quin a baix.",
    "SIMPLIFICA_NOMES_NUMERADOR":
        "Només has dividit el numerador. En simplificar cal dividir numerador "
        "I denominador pel mateix nombre.",
    # Aquesta etiqueta és NOMÉS per a fraccions o arrels que es queden a
    # mitges. Si el que passa és que l'alumne ha parat un pas abans d'acabar,
    # o ha donat una part pel tot, o ha aplicat malament una fórmula, hi ha
    # etiquetes específiques més avall: no la feu servir de calaix de sastre.
    "SIMPLIFICACIO_INCOMPLETA":
        "Encara es pot simplificar més: busca el m.c.d. del numerador i el "
        "denominador i divideix-los pel m.c.d. d'un sol cop.",
    "RAONAMENT_ADDITIU":
        "Has passat d'una fracció a l'altra sumant. Dues fraccions són "
        "equivalents quan es passa d'una a l'altra MULTIPLICANT els dos termes "
        "pel mateix nombre.",
    "PRODUCTES_CREUATS":
        "Els productes creuats no coincideixen; comprova'ls tornant-los a fer.",
    "PRODUCTES_MAL_CREUATS":
        "Has multiplicat numerador per numerador i denominador per denominador. "
        "Cal creuar-los: primer numerador per segon denominador.",
    "COMPARA_TERMES":
        "Dues fraccions equivalents gairebé mai tenen els mateixos termes: el "
        "que ha de coincidir és el valor, no les xifres.",
    "CREUAMENT_INVERTIT":
        "Has creuat els termes al revés en aïllar la incògnita.",
    "PRODUCTE_MAL":
        "Has multiplicat els dos nombres que et donaven en comptes d'aïllar la "
        "incògnita amb els productes creuats.",

    # ---- potències (Full 2) ----
    "EXPONENTS_MULTIPLICATS":
        "En multiplicar potències de la mateixa base, els exponents se SUMEN, no es "
        "multipliquen: $a^m\\cdot a^n=a^{m+n}$.",
    "EXPONENTS_SUMATS_QUOCIENT":
        "En dividir potències de la mateixa base, els exponents es RESTEN, no se sumen: "
        "$a^m:a^n=a^{m-n}$.",
    "EXPONENTS_RESTATS_PRODUCTE":
        "En multiplicar potències de la mateixa base, els exponents se sumen; restar-los "
        "és la regla del quocient, no la del producte.",
    "POTENCIA_POTENCIA_SUMADA":
        "En una potència d'una potència, els exponents es MULTIPLIQUEN, no se sumen: "
        "$(a^m)^n=a^{m\\cdot n}$.",
    "ORDRE_DIVISIONS":
        "El que hi ha entre claudàtors s'ha de resoldre primer: no es poden restar tots "
        "els exponents seguits com si no hi hagués claudàtor.",
    "ORDRE_MULTIPLICACIO_DIVISIO":
        "La divisió i la multiplicació tenen la mateixa prioritat i es fan d'esquerra a "
        "dreta: no es pot agrupar la multiplicació primer perquè \"queda més bé\".",
    "BASE_ALTERADA":
        "En combinar potències de la mateixa base, la base es queda tal qual; només "
        "canvia l'exponent.",
    "BASE_SIGNE_PERDUT":
        "El resultat ha de conservar la base tal com era, amb el seu signe.",
    "EXPONENT_ZERO":
        "Qualsevol nombre diferent de zero elevat a $0$ val $1$, no $0$.",
    "EXPONENT_NEGATIU_SIGNE":
        "Un exponent negatiu no fa que el resultat sigui negatiu: $a^{-n}=\\dfrac{1}{a^n}$ "
        "és l'invers del nombre, no el seu oposat.",
    "FRACCIO_NO_INVERTIDA":
        "Per elevar una fracció a un exponent negatiu cal INVERTIR la fracció i fer "
        "l'exponent positiu: $\\left(\\dfrac{a}{b}\\right)^{-n}=\\left(\\dfrac{b}{a}\\right)^n$.",
    "MENYS_SENSE_PARENTESI":
        "Sense parèntesi, el signe $-$ no forma part de la base: $-a^n$ és $-(a^n)$, no "
        "$(-a)^n$.",
    "PARITAT_EXPONENT":
        "Revisa la paritat de l'exponent: amb exponent parell, una base negativa dóna "
        "resultat positiu; amb exponent senar, el resultat es queda negatiu.",
    "POTENCIA_PRODUCTE_UN_FACTOR":
        "L'exponent afecta TOTS els factors del producte, no només un: "
        "$(a\\cdot b)^n=a^n\\cdot b^n$.",
    "POTENCIA_QUOCIENT_UN_FACTOR":
        "L'exponent afecta els dos termes del quocient, no només un: $(a:b)^n=a^n:b^n$.",
    "SIMPLIFICACIO_ABANS_OBLIDADA":
        "Simplifica la fracció abans d'elevar-la a la potència; si no, el resultat no "
        "queda reduït del tot.",
    "EXPONENT_APLICAT_A_TOT":
        "L'exponent només afecta el factor que l'acompanya: no es pot repartir cap a un "
        "altre factor que no en tenia.",
    "REGLA_NOMES_PRODUCTE":
        "La regla de sumar exponents només val per MULTIPLICAR potències de la mateixa "
        "base, no per sumar-les: quan se sumen, cal sumar els valors de cada potència.",
    "REGLA_NOMES_QUOCIENT":
        "La regla de restar exponents és per DIVIDIR potències de la mateixa base, no per "
        "restar-les: quan es resten, cal restar els valors de cada potència.",
    "EQUACIO_EXPONENT_MULTIPLICAT":
        "Per aïllar l'exponent en una igualtat de potències de la mateixa base, els "
        "exponents s'igualen i se sumen o es resten com en qualsevol equació; no es "
        "multipliquen.",
    "FACTOR_OBLIDAT":
        "T'has deixat pel camí un dels factors en combinar els exponents.",
    "ORDRE_RESTA":
        "Has restat en l'ordre equivocat: revisa quin terme ha d'anar primer.",
    "POTENCIA_DE_SUMA":
        "Aquí els dos nombres es MULTIPLIQUEN dins del parèntesi, no se sumen: la "
        "potència és d'un producte, $(a\\cdot b)^n$, no d'una suma, $(a+b)^n$.",
    "SIGNE_QUOCIENT":
        "Revisa la regla dels signes del quocient: signes diferents donen resultat "
        "negatiu.",
    "BASES_DIFERENTS_COMBINADES":
        "Les bases són diferents: la regla de combinar exponents (sumar-los o "
        "restar-los) només val quan la base és la mateixa als dos factors.",

    # ---- successions i progressions (Full 3) ----
    "DESPLACAMENT_INDEX":
        "Revisa a partir de quin valor de $n$ comences a substituir, o quin "
        "exponent li correspon: t'has desplaçat una posició.",
    "EXPONENT_COM_PRODUCTE":
        "En una expressió com $2^n$, l'exponent $n$ no és un factor que es "
        "multiplica per la base: cal calcular la potència, no un producte.",
    "EXPONENT_MULTIPLICAT":
        "L'exponent que dona l'enunciat s'ha de fer servir tal qual, no "
        "multiplicat per un altre nombre.",
    "EXPONENT_SENSE_DESPLACAR":
        "T'has deixat pel camí una part de l'exponent: si l'enunciat diu "
        "$n+2$ (o similar), cal fer servir aquest exponent complet, no "
        "només la $n$.",
    "BASE_EXPONENT_INTERCANVIATS":
        "Has canviat de lloc la base i l'exponent: no és el mateix "
        "$a^b$ que $b^a$.",
    "PROGRESSIO_INVENTADA":
        "El terme s'ha de calcular seguint estrictament la regla que "
        "defineix la successió (el terme general o la relació de "
        "recurrència), no un patró aproximat o inventat.",
    "VEREDICTE_INVERTIT":
        "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del "
        "correcte: torna a comprovar la condició amb els valors concrets "
        "de l'enunciat.",
    "DOMINI_MAL_LLEGIT":
        "Has decidit sense mirar bé quin és el conjunt de partida. Si una "
        "relació és funció o no depèn del domini: canviar-lo pot canviar la "
        "resposta, així que el primer que cal fixar és de què parteixes.",

    # ---- polinomis (Full 4) ----
    "PARENTESI_NO_DISTRIBUIT_POLI":
        "Restar un polinomi és restar-ne TOTS els termes, no només el primer. "
        "Revisa el signe de cada terme del polinomi que restes.",
    "TERME_OBLIDAT_OPERACIO":
        "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls "
        "tots un per un, grau a grau.",
    "GRAUS_MAL_AGRUPATS":
        "Només es poden sumar o restar termes del MATEIX grau: $x^3$ amb $x^3$, "
        "$x^2$ amb $x^2$... Revisa que has agrupat els termes correctes.",
    "SIGNE_TERME_INDEPENDENT":
        "Revisa el signe del terme independent (el que no porta $x$): és fàcil "
        "perdre'l en sumar o restar.",
    "DISTRIBUCIO_INCOMPLETA":
        "En multiplicar un polinomi per un altre, cada terme del primer s'ha de "
        "multiplicar per TOTS els termes del segon, no només per un.",
    "GRAU_PRODUCTE_MAL":
        "En multiplicar potències de $x$, els exponents se SUMEN: $x^a\\cdot "
        "x^b=x^{a+b}$. El grau del producte és la suma dels graus dels factors.",
    "RUFFINI_TERME_OBLIDAT":
        "T'has deixat un coeficient $0$ pel camí: cal escriure TOTS els graus "
        "del dividend, encara que el terme no aparegui a l'enunciat.",
    "RUFFINI_SIGNE_ARREL":
        "A la regla de Ruffini es fa servir l'oposat del terme independent del "
        "divisor: si el divisor és $x-a$, es baixa multiplicant per $a$, no per "
        "$-a$.",
    "RUFFINI_PAS_MAL":
        "A cada columna: multiplica el número de baix per l'arrel, i suma "
        "aquest producte al coeficient de la columna, no el restis.",
    "RUFFINI_QUOCIENT_GRAU":
        "El quocient d'una divisió de Ruffini té un grau menys que el dividend, "
        "no el mateix grau.",
    "RUFFINI_DIVISOR_NO_MONIC":
        "El divisor no és de la forma $x-a$ (el coeficient de $x$ no és $1$): "
        "cal treure'n el factor comú abans d'aplicar Ruffini directament, i "
        "dividir el quocient pel mateix factor al final.",
    "RUFFINI_RESIDU_COM_QUOCIENT":
        "Has confós el residu amb un terme del quocient: el residu és el darrer "
        "número de la fila, i és una constant, no un polinomi en $x$.",
    "DIVISIO_QUOCIENT_RESIDU_CANVIATS":
        "Has intercanviat el quocient i el residu: el quocient és el polinomi "
        "que queda a la fila de baix (llevat de l'últim terme), i el residu és "
        "l'últim número, una constant.",
    "IGUALTAT_NOTABLE_SIGNE":
        "Revisa el signe del terme del mig: $(a-b)^2=a^2-2ab+b^2$, amb el terme "
        "del mig NEGATIU, a diferència de $(a+b)^2$.",
    "IGUALTAT_NOTABLE_DOBLE_OBLIDAT":
        "Al quadrat d'una suma o d'una resta, el terme del mig és el DOBLE "
        "producte, $2ab$, no només $ab$.",
    "SUMA_PER_DIFERENCIA_MAL":
        "$(a+b)(a-b)=a^2-b^2$: el terme del mig s'anul·la sempre. No hi ha "
        "terme en $ab$ al resultat.",
    "QUADRAT_INCOMPLET":
        "Per reconèixer un quadrat perfecte calen els TRES termes: el quadrat "
        "del primer, el doble producte, i el quadrat del segon. Revisa que hi "
        "són tots.",
    "FACTOR_COMU_INCOMPLET":
        "No has tret tot el factor comú possible: revisa si encara hi ha algun "
        "nombre o alguna $x$ que es repeteixi a tots els termes.",
    "FACTOR_COMU_SIGNE":
        "Revisa el signe del factor comú: si tots els termes són negatius, sol "
        "convenir treure'l amb signe $-$ perquè el que quedi dins comenci en "
        "positiu.",
    "FACTOR_COMU_MAL_DIVIDIT":
        "En treure factor comú, cada terme s'ha de dividir pel factor comú: "
        "algun terme de dins del parèntesi no s'ha dividit correctament.",
    "DIFERENCIA_QUADRATS_MAL":
        "Una diferència de quadrats $a^2-b^2$ es factoritza com $(a-b)(a+b)$: "
        "revisa que els dos factors tinguin signes diferents.",

    # ---- estadística (Full 11) ----
    "QUALITATIVA_QUANTITATIVA_CONFOSES":
        "Una variable és quantitativa quan s'expressa amb un nombre "
        "(encara que no porti unitats), i qualitativa quan expressa una "
        "categoria o qualitat que no es mesura numèricament.",
    "DISCRETA_CONTINUA_CONFOSES":
        "Una variable quantitativa és discreta quan només pot prendre "
        "valors aïllats (típicament un recompte), i contínua quan pot "
        "prendre qualsevol valor decimal dins d'un interval.",
    "MOSTRA_POBLACIO_INVERTIDES":
        "Convé estudiar tota la població quan aquesta és petita i "
        "accessible; convé estudiar-ne una mostra quan és molt gran o "
        "inabastable en la seva totalitat.",
    "FREQ_ABSOLUTA_ACUMULADA_CONFOSES":
        "La freqüència absoluta $f_i$ és el recompte d'un valor concret; "
        "la freqüència absoluta acumulada $F_i$ és la suma de totes les "
        "freqüències fins a aquell valor, inclòs.",
    "FREQ_RELATIVA_MAL_CALCULADA":
        "La freqüència relativa d'un valor s'obté dividint la seva "
        "freqüència absoluta pel nombre TOTAL de dades, no per cap altre "
        "nombre.",
    "PERCENTATGE_MAL_CALCULAT":
        "El percentatge d'un valor s'obté multiplicant la seva freqüència "
        "relativa per $100$ (o, equivalentment, $\\frac{f_i}{N}\\cdot100$).",
    "F_ACUMULADA_NO_CREIXENT":
        "La freqüència absoluta acumulada $F_i$ mai pot disminuir a "
        "mesura que $i$ creix: cada $F_i$ inclou totes les dades fins "
        "aquell punt, així que com a mínim es queda igual.",
    "TOTAL_DADES_MAL_CALCULAT":
        "El nombre total de dades $N$ és la suma de totes les "
        "freqüències absolutes (o, equivalentment, l'última freqüència "
        "absoluta acumulada).",
    "RECOMPTE_MAL_FET":
        "Torna a comptar les dades una per una: és fàcil saltar-se'n "
        "alguna o comptar-ne alguna dues vegades en un recompte llarg.",
    "DIAGRAMA_HISTOGRAMA_CONFOSOS":
        "El diagrama de barres (amb separació entre barres) s'utilitza "
        "per a variables discretes o qualitatives; l'histograma (sense "
        "separació) s'utilitza per a variables contínues agrupades en "
        "intervals.",
    "POLIGON_MAL_CONSTRUIT":
        "El polígon de freqüències s'obté unint amb segments els punts "
        "que marquen l'alçada de cada barra, en l'ordre dels valors de "
        "la variable.",
    "SECTOR_ANGLE_MAL_CALCULAT":
        "L'angle de cada sector s'obté multiplicant la seva freqüència "
        "relativa pels $360^\\circ$ totals de la circumferència, no per "
        "cap altre nombre.",
    "INTERVAL_LIMIT_MAL_ASSIGNAT":
        "Revisa a quin interval pertany cada dada: amb intervals "
        "$[a,b)$, el límit inferior $a$ hi pertany però el superior $b$ "
        "no (pertany al següent interval).",

    # ---- combinatòria i probabilitat (Full 12) ----
    "ESPAI_MOSTRAL_MAL_COMPTAT":
        "L'espai mostral és el conjunt de resultats DIFERENTS i "
        "DISTINGIBLES d'un experiment aleatori: revisa que no en "
        "falti cap ni que n'hi hagi cap de sobrant o repetit.",
    "PARELLS_VALORS_CONFOSOS":
        "No confonguis el nombre de PARELLS de resultats (per "
        "exemple, dels dos daus) amb el nombre de VALORS diferents "
        "que en resulten (com la seva suma o el seu producte): "
        "diversos parells poden donar el mateix valor final.",
    "ORDRE_NO_CONSIDERAT":
        "Quan els dos elements combinats es poden distingir (per "
        "exemple, per color), l'ordre importa: el parell $(a,b)$ és "
        "un resultat diferent del $(b,a)$.",
    "PRINCIPI_MULTIPLICATIU_MAL_APLICAT":
        "Quan es combinen diverses eleccions independents, el nombre "
        "total de resultats es MULTIPLICA (no se suma): si la "
        "primera elecció té $m$ opcions i la segona en té $n$, en "
        "total hi ha $m\\cdot n$ combinacions.",
    "ELEMENTAL_NO_ELEMENTAL_CONFOSOS":
        "Un esdeveniment elemental és un ÚNIC resultat de l'espai "
        "mostral; un esdeveniment NO elemental n'agrupa diversos.",
    "CARTES_REPETIDES_CONFOSES":
        "Revisa quantes cartes (o elements) diferents compleixen "
        "exactament la condició demanada: un esdeveniment és "
        "impossible només quan CAP resultat de l'espai mostral el "
        "compleix, no quan sembla poc habitual.",
    "CASOS_FAVORABLES_MAL_COMPTATS":
        "Revisa un per un quins resultats de l'espai mostral "
        "compleixen la condició de l'esdeveniment: és fàcil oblidar "
        "un límit inclòs (\"igual o més gran que\") o comptar-ne un "
        "de més.",
    "VARIACIONS_SENSE_REPETICIO_MAL":
        "Quan un element ja s'ha fet servir, no es pot tornar a "
        "triar: el nombre d'opcions disponibles disminueix a cada "
        "posició que es va omplint.",
    "FACTORIAL_MAL_APLICAT":
        "El nombre de maneres d'ordenar $n$ elements diferents és "
        "$n!$ ($n$ factorial): revisa que estàs calculant "
        "permutacions dels elements correctes.",
    "FREQ_RELATIVA_PROBABILITAT_CONFOSES":
        "La freqüència relativa és el resultat observat en repetir "
        "un experiment un nombre concret de vegades; la probabilitat "
        "teòrica és el valor que s'espera a llarg termini. Quan hi "
        "ha moltes repeticions, la freqüència relativa s'aproxima a "
        "la probabilitat, però es calculen amb les dades donades a "
        "cada cas.",
    "CASOS_POSSIBLES_MAL_COMPTATS":
        "Revisa quants resultats TOTALS té l'experiment (els casos "
        "possibles): ha de ser el denominador de la probabilitat, no "
        "un altre nombre de l'enunciat.",
    "COMBINACIONS_MAL_COMPTADES":
        "Per triar quins $k$ elements d'entre $n$ compleixen una "
        "condició (sense importar l'ordre en què es trien), cal fer "
        "servir combinacions, $\\binom{n}{k}$, no una simple "
        "multiplicació o suma.",
    "ESDEVENIMENT_CONTRARI_MAL_CALCULAT":
        "La probabilitat de l'esdeveniment contrari és $1$ menys la "
        "probabilitat de l'esdeveniment: $P(\\text{no }A)=1-P(A)$.",
    "COMPATIBLE_INCOMPATIBLE_CONFOSOS":
        "Dos esdeveniments són incompatibles quan no tenen CAP "
        "resultat en comú (la seva intersecció és buida); si "
        "comparteixen encara que sigui un sol resultat, són "
        "compatibles.",
    "UNIO_INTERSECCIO_CONFOSES":
        "La unió ($A\\cup B$) inclou els resultats que compleixen "
        "A, B, o totes dues alhora; la intersecció ($A\\cap B$) "
        "inclou només els que compleixen totes dues coses a la "
        "vegada.",
    "UNIO_DOBLE_COMPTADA":
        "En calcular la probabilitat d'una unió, els resultats que "
        "compleixen totes dues condicions a la vegada s'han comptat "
        "dues vegades si simplement se sumen les probabilitats "
        "individuals: cal restar la intersecció un cop, "
        "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.",
    "PROBABILITAT_CONDICIONADA_MAL":
        "Quan es demana la probabilitat DINS d'un grup concret (no "
        "de tota la població), el denominador ha de ser la mida "
        "d'aquell grup, no el total de tots els casos.",
    "ESDEVENIMENTS_INDEPENDENTS_MAL_COMBINATS":
        "Per combinar dos esdeveniments independents (per exemple, "
        "dos sortejos separats), el nombre de combinacions "
        "possibles es multiplica, no se suma.",
    # ---- errors transversals — repartits des de SIMPLIFICACIO_INCOMPLETA ----
    "PAS_INTERMEDI_PER_RESPOSTA":
        "El valor que has triat és correcte, però és un pas intermedi, no el "
        "que et demanen. Torna a llegir la pregunta i mira quina magnitud has "
        "d'acabar donant: sovint només falta una operació més.",
    "PART_PEL_TOT":
        "Has donat el tot on et demanaven una part, o al revés. Compta quantes "
        "peces iguals hi ha a la figura i mira quantes n'entren a la resposta.",
    "SUMA_DE_PARTS_INCOMPLETA":
        "L'àrea total d'un cos és la suma de TOTES les seves cares. Has "
        "calculat bé una part (la base, o la lateral) però encara falta "
        "sumar-hi l'altra.",
    "MEITAT_OBLIDADA":
        "Hi ha un factor $2$ pel mig que t'has deixat: radi i diàmetre, "
        "semibase i base, semidiagonal i diagonal. Comprova quina de les dues "
        "et demanen.",
    "DIVISIO_REPETIDA":
        "Has dividit dues vegades pel mateix nombre. Sol passar quan la fórmula "
        "ja porta la divisió incorporada i se li torna a aplicar al final: "
        "escriu la fórmula sencera i substitueix-hi els valors d'un sol cop.",
    "ARREL_OBLIDADA":
        "T'has quedat amb el quadrat (o el cub) de la incògnita. De $x^2=k$ "
        "encara falta l'arrel per arribar a $x$: comprova sempre quina de les "
        "dues quantitats et demanen.",
    "ES_POT_DETERMINAR":
        "Has dit que no es pot saber, però amb les dades de l'enunciat n'hi ha "
        "prou. Abans de descartar una pregunta, mira si algun teorema o criteri "
        "et permet respondre-la amb el que ja tens.",
    "ARITMETICA_PAS_INTERMEDI":
        "El plantejament és bo, però hi ha un error de càlcul en un dels passos "
        "del mig. Refes l'operació pas a pas i comprova el resultat "
        "substituint-lo a l'enunciat original.",
    "UNITATS_NO_CONVERTIDES":
        "Has barrejat unitats diferents en la mateixa operació. Passa-ho tot a "
        "la mateixa unitat abans de calcular res.",

    # ---- equacions (Full 5) ----
    "AILLAMENT_INCOMPLET":
        "Has parat abans d'acabar d'aïllar la incògnita: encara queda una "
        "operació per desfer. Comprova-ho substituint el teu valor a l'equació "
        "original.",
    "DENOMINADOR_NO_ELIMINAT":
        "Has operat amb la fracció sense treure-li el denominador. Multiplica "
        "els dos membres pel denominador PRIMER, i només després aïlla la "
        "incògnita.",
    "AGRUPACIO_TERMES_MAL":
        "Els termes amb incògnita no s'han agrupat bé: torna a sumar-ne els "
        "coeficients un per un, amb el seu signe.",
    "EQUACIO_NO_SIMPLIFICADA":
        "Simplifica cada equació per separat (parèntesis, termes semblants, "
        "denominadors) ABANS de combinar-les: si no, el sistema que resols no "
        "és el de l'enunciat.",
    "ORDRE_ARREL_DIVISIO":
        "Has fet l'arrel abans de dividir. De $ax^2=k$ cal aïllar primer $x^2$ "
        "dividint per $a$, i fer l'arrel al final.",

    # ---- proporcionalitat i percentatges (Full 6) ----
    "MAGNITUD_NO_CONVERTIDA":
        "Has donat el mateix número per a dues magnituds diferents. Fes servir "
        "la constant que les relaciona (densitat, preu unitari, velocitat) per "
        "passar d'una a l'altra.",
    "PERCENTATGE_DECIMAL_MAL":
        "El pas de tant per cent a decimal no és correcte: es divideix per "
        "$100$, així que $0{,}8\\,\\%=0{,}008$ i $8\\,\\%=0{,}08$. Compta les "
        "xifres.",
    "FRACCIO_COM_PERCENTATGE":
        "Has pres el numerador de la fracció com si ja fos el percentatge. Per "
        "arribar-hi cal portar la fracció sencera a denominador $100$.",

    # ---- geometria plana (Full 7) ----
    "COSTATS_MAL_TRIATS":
        "El criteri és el bo, però l'has aplicat als costats que no toquen: "
        "torna a mirar quins dos costats has de comparar amb quin.",
    "FORMULA_INVERTIDA":
        "Has dividit on la fórmula multiplica (o al revés). Escriu la fórmula "
        "sencera abans de substituir-hi els valors.",
    "FRACCIO_DE_CERCLE_MAL":
        "La porció de cercle no és la que toca: mig cercle, un quart, tres "
        "quarts... Mira quin angle abasta la figura i quina fracció de "
        "$360^\\circ$ representa.",

    # ---- escales (Full 8) ----
    "ESCALA_NO_APLICADA":
        "Has donat la mesura tal com surt al plànol (o a la realitat) sense "
        "passar-la per l'escala. Les dues mesures només coincideixen si "
        "l'escala és $1:1$.",

    # ---- cossos geomètrics (Full 9) ----
    "PI_OBLIDAT":
        "Falta $\\pi$: qualsevol longitud, àrea o volum que surti d'un cercle "
        "en porta. La circumferència és $2\\pi r$ i el cercle, $\\pi r^2$.",
    "FACTOR_TRES_VOLUM":
        "El terç del volum va només amb piràmides i cons. Prismes, cilindres i "
        "cubs són base per altura, sense dividir.",
    "DIMENSIO_EXPONENT_MAL":
        "L'exponent no correspon a la dimensió: les àrees van al quadrat i els "
        "volums, al cub. Comprova també les unitats del resultat.",
    "ARRODONIMENT_CONTEXT":
        "El resultat exacte és aquest, però el context demana un nombre enter. "
        "Pensa si cal arrodonir cap amunt (pots de pintura, autocars, caixes) o "
        "cap avall (quantes peces senceres en surten).",
    "PAPERS_INTERCANVIATS":
        "Has intercanviat les dues magnituds: torna a llegir quina depèn de "
        "quina a l'enunciat.",

    # ---- successions (Full 3) — repartides des de SIMPLIFICACIO_INCOMPLETA ----
    "RAO_MAL_APLICADA":
        "Per passar d'un terme al següent s'ha de MULTIPLICAR per la raó. "
        "Comprova la raó amb dos termes consecutius que ja tinguis i aplica-la "
        "sempre igual.",
    "TERME_MAL_CALCULAT":
        "Un dels termes no surt: comprova'l substituint-lo al terme general o "
        "sumant-hi la diferència des de l'anterior.",
    "SIMPLIFICAR_RESTANT":
        "Simplificar és DIVIDIR el numerador i el denominador pel mateix "
        "nombre, no restar-los. Restant canvies el valor de la fracció.",
    "SIMPLIFICACIO_INVENTADA":
        "Has simplificat una fracció que ja era irreductible. Comprova que el "
        "numerador i el denominador tinguin algun factor comú abans de "
        "tocar-la.",

    # ---- estadística (Full 11) — repartides des de SIMPLIFICACIO_INCOMPLETA ----
    "CRITERI_AGRUPACIO_MAL":
        "El criteri per agrupar en intervals no és el nombre de dades sinó com "
        "estan repartides: si els valors són molt dispersos i gairebé no es "
        "repeteixen, una taula valor a valor no resumeix res.",
    "ESCALA_ALTERA_DADES":
        "Canviar l'escala vertical d'un gràfic no crea ni elimina cap dada: la "
        "forma es manté, només canvien els números de l'eix.",

    # ---- decimals (Full 1) — etiquetes ja en ús sense text de catàleg ----
    "TRACTAT_COM_EXACTE":
        "Has tractat un decimal periòdic com si fos exacte. Un període es "
        "repeteix sense fi: repetir una xifra dues o tres vegades i parar no és "
        "tenir període.",
    "TRACTAT_COM_PERIODIC":
        "Has tractat com a periòdic un decimal que s'acaba. Si les xifres "
        "decimals s'acaben, el decimal és exacte i la generatriu porta una "
        "potència de $10$ al denominador.",
    "PERIODE_MAL_IDENTIFICAT":
        "El període no és el que has marcat. Recorda que el període comença "
        "just on les xifres es comencen a repetir; el que hi hagi entre la coma "
        "i el període és l'anteperíode.",
    "NO_RESTA_ANTEPERIODE":
        "Al numerador de la generatriu cal RESTAR la part que no es repeteix: "
        "el nombre sencer sense coma, menys la part anterior al període.",
    "NOUS_I_ZEROS":
        "Al denominador van tants NOUS com xifres té el període i tants ZEROS "
        "com xifres té l'anteperíode, en aquest ordre. Compta'ls per separat.",
    "POTENCIA_10":
        "El denominador d'un decimal exacte és una potència de $10$ amb tants "
        "zeros com xifres decimals hi ha. Torna-les a comptar.",
    "PART_ENTERA_OBLIDADA":
        "T'has deixat la part entera. La generatriu ha de valer el nombre "
        "sencer, no només la part decimal.",

    # ---- divisibilitat (Full 1) — etiquetes ja en ús sense text de catàleg ----
    "MCD_EN_LLOC_DE_MCM":
        "Has donat el m.c.d. quan et demanaven el m.c.m. El m.c.m. és un "
        "MÚLTIPLE: ha de ser més gran o igual que tots els nombres.",
    "MCM_EN_LLOC_DE_MCD":
        "Has donat el m.c.m. quan et demanaven el m.c.d. El m.c.d. és un "
        "DIVISOR: ha de ser més petit o igual que tots els nombres.",
    "PRODUCTE":
        "Has multiplicat els nombres. Ni el m.c.d. ni el m.c.m. són el "
        "producte: descompon en factors primers i tria els factors amb el "
        "criteri que toqui.",
    "EL_MES_GRAN":
        "El més gran dels nombres només és el m.c.m. si tots els altres el "
        "divideixen. Comprova-ho abans de donar-lo per bo.",
    "EL_MES_PETIT":
        "El més petit dels nombres només és el m.c.d. si divideix tots els "
        "altres. Comprova-ho abans de donar-lo per bo.",

    # ---- troba l'error (Fulls 1 i 2) ----
    "CAP_ERROR":
        "Has dit que la cadena és correcta, però hi ha un pas equivocat. Que el "
        "resultat final surti bé no ho garanteix: dos errors es poden "
        "compensar. Comprova cada igualtat per separat.",

    # ---- geometria plana (Full 7) — etiquetes ja en ús sense text de catàleg ----
    "SUMA_CATETS_SENSE_QUADRAT":
        "Has sumat els costats directament. Pitàgores diu que es sumen els seus "
        "QUADRATS, i al final es fa l'arrel del resultat.",
    "HIPOTENUSA_MAL_IDENTIFICADA":
        "La hipotenusa és sempre el costat MÉS LLARG del triangle rectangle, i "
        "és la que va sola a un costat de la igualtat.",
    "CATET_MAL_IDENTIFICAT":
        "El costat que busques no és el que has triat. Fes un dibuix ràpid i "
        "marca quin costat coneixes i quin has d'aïllar abans de calcular.",
    "ARREL_FACTOR_OBLIDAT":
        "Has arribat al valor de dins de l'arrel però t'has deixat el factor "
        "que l'acompanya (sovint un $\\sqrt3$ o un $2$). Escriu la fórmula "
        "sencera abans de substituir-hi els números.",

    # ---- cossos geomètrics (Full 9) — etiqueta ja en ús sense text de catàleg ----
    "ARREL_MAL_APLICADA":
        "L'arrel no s'ha aplicat on tocava. Aïlla primer la quantitat que va "
        "sota l'arrel i fes-la al final, sobre el valor ja aïllat.",

    # ---- semblança (Full 8) — etiqueta ja en ús sense text de catàleg ----
    "CRITERI_SEMBLANCA_INSUFICIENT":
        "Has dit que falten dades, però el criteri que toca ja es pot aplicar "
        "amb el que dona l'enunciat: tres costats, o dos costats i l'angle que "
        "formen, o dos angles.",

    # ---- funcions (Full 10) — etiquetes ja en ús sense text de catàleg ----
    "PENDENT_ORDENADA_INTERCANVIATS":
        "El pendent és el nombre que MULTIPLICA la $x$; l'ordenada a l'origen "
        "és el terme independent, el que va sol. Els has intercanviat.",
    "SIGNE_PENDENT_INVERTIT":
        "El pendent conserva el signe amb què apareix a l'expressió: no cal "
        "canviar-l'hi en llegir-lo.",
    "PENDENT_COM_NUL":
        "Una funció afí només és constant si el pendent és $0$. Si el "
        "pendent és qualsevol altre nombre, la funció puja o baixa sempre.",
    "REPRESENTACIO_INNECESSARIA":
        "No cal dibuixar la gràfica: el signe del pendent ja diu si la funció "
        "creix o decreix, i el de $a$ si la paràbola s'obre amunt o avall.",
    "DOMINI_RECORREGUT_INTERCANVIATS":
        "El domini són els valors de $x$ i el recorregut els de $y$. Els has "
        "intercanviat: mira l'eix horitzontal per al domini i el vertical per "
        "al recorregut.",
    "AMPLADA_INVERTIDA":
        "Com més gran és $|a|$, més ESTRETA és la paràbola, no més ampla: el "
        "coeficient estira la corba cap amunt.",
    "POTENCIA_COM_PRODUCTE":
        "$x^2$ no és $2x$: és $x\\cdot x$. Prova-ho amb $x=3$, que dona $9$ i "
        "no $6$.",

    # ---- centralització i dispersió (Full 11) ----
    "MEDIANA_PER_MITJANA":
        "Has confós la mediana amb la mitjana. La mitjana es CALCULA (sumar-ho "
        "tot i dividir); la mediana es BUSCA (ordenar i mirar quina queda al "
        "mig).",
    "MEDIANA_PER_MODA":
        "Has confós la mediana amb la moda. La mediana és el valor central un "
        "cop ordenades; la moda és el que es repeteix més, estigui on estigui.",
    "MEDIANA_SENSE_ORDENAR":
        "Has agafat el valor del mig de la llista tal com venia. La mediana "
        "només té sentit sobre les dades ORDENADES: aquest és el primer pas, "
        "sempre.",
    "MODA_PER_FREQUENCIA":
        "Has donat quantes vegades es repeteix el valor, no quin valor és. La "
        "moda és una dada, no un recompte.",
    "RANG_PER_MEDIANA":
        "Has donat el recorregut on es demanava una mesura de centre. El "
        "recorregut diu com d'esteses estan les dades, no on és el mig.",
    "MESURA_MAL_TRIADA":
        "El càlcul és correcte, però aquesta mesura no respon la pregunta que "
        "t'han fet. Abans de calcular, decideix si et pregunten on és el centre "
        "(mitjana, mediana), què es repeteix més (moda) o com d'esteses estan "
        "les dades (recorregut, desviació típica).",
    "DIVIDIT_PER_VALORS_DIFERENTS":
        "Has dividit pel nombre de valors DIFERENTS en comptes de pel nombre de "
        "DADES. A la mitjana, un valor repetit compta tantes vegades com "
        "apareix.",
    "FREQUENCIA_NO_PONDERADA":
        "Amb una taula de freqüències, cada valor s'ha de multiplicar per la "
        "seva freqüència abans de sumar: $\\bar{x}=\\frac{\\sum x_i f_i}{N}$. "
        "Fer la mitjana només dels valors diferents ignora quantes vegades surt "
        "cadascun.",
    "ACUMULADA_MAL_LLEGIDA":
        "Has llegit malament la columna de freqüències acumulades. Busca dins "
        "de quin valor cau la posició que et fa falta, no quin valor té aquella "
        "freqüència.",
    "N_MAL_COMPTAT":
        "Has fet servir un nombre de dades que no és el que toca. Compta'l bé: "
        "sovint la trampa és comptar només les dades conegudes i oblidar la que "
        "es busca.",
    "PES_IGNORAT":
        "Has fet la mitjana simple, com si totes les parts valguessin el "
        "mateix. Amb pesos, cada valor es multiplica pel seu abans de sumar.",
    "PES_MAL_APLICAT":
        "Els pesos no s'han repartit bé: cada valor ha d'anar amb el SEU pes, "
        "no tots amb el mateix.",
    "EXTREM_SENSE_EFECTE":
        "Has donat per fet que una dada molt gran o molt petita no canvia res. "
        "La mitjana sí que se'n ressent, perquè surt de sumar-ho tot; la "
        "mediana molt menys, perquè només mira quin valor queda al mig.",
    "MITJANA_NO_DIU_DISPERSIO":
        "La mitjana diu on és el centre, no com d'agrupades estan les dades al "
        "seu voltant. Dos conjunts amb la mateixa mitjana poden ser "
        "completament diferents: per això calen les mesures de dispersió.",
    "DESVIACIONS_SENSE_QUADRAT":
        "Has sumat les desviacions sense elevar-les al quadrat, i per això et "
        "dona zero. Sempre dona zero, amb qualsevol conjunt de dades: és "
        "exactament el motiu pel qual la variància les eleva al quadrat.",
    "DESVIACIONS_AL_QUADRAT":
        "Has elevat al quadrat quan es demanaven les desviacions tal com són, "
        "amb el seu signe.",
    "VALOR_ABSOLUT_INDEGUT":
        "Has pres els valors absoluts on tocaven els valors amb signe (o al "
        "revés). Compte: el quadrat de $-3$ és $9$, no $3$.",
    "VARIANCIA_PER_DESVIACIO":
        "Has confós la variància amb la desviació típica. La desviació típica "
        "és l'ARREL de la variància, i va en les mateixes unitats que les "
        "dades.",
    "DIVISIO_OBLIDADA":
        "T'has quedat amb la suma sense dividir-la entre el nombre de dades. La "
        "variància és una MITJANA de quadrats, no una suma.",
    "CV_SENSE_DIVIDIR":
        "Has comparat dues desviacions típiques directament. Com que van en les "
        "unitats de cada variable, no es poden comparar entre magnituds "
        "diferents: cal dividir cada $\\sigma$ entre la seva mitjana "
        "(coeficient de variació).",
    "CONSTANT_AFECTA_DISPERSIO":
        "SUMAR el mateix a totes les dades les desplaça totes igual: el centre "
        "es mou però les distàncies entre elles no, i la dispersió es manté. "
        "MULTIPLICAR, en canvi, sí que estira les distàncies i canvia la "
        "dispersió.",
    "PRODUCTE_PER_SUMA":
        "Has sumat on tocava multiplicar (o al revés). Torna a llegir quina "
        "operació es fa sobre les dades.",
    "DIVISIO_SOBRERA":
        "Has tornat a dividir per alguna cosa que ja estava tinguda en compte. "
        "Escriu la fórmula sencera i substitueix-hi els valors d'un sol cop.",

    # ---- percentatges: el factor multiplicador (Full 6) ----
    "FACTOR_PER_PERCENTATGE":
        "Has donat NOMÉS la part que puja o baixa, no la quantitat final. El "
        "factor multiplicador és $1+p$ per augmentar i $1-p$ per rebaixar: d'un "
        "sol cop et dona el resultat, no la variació.",
    "FACTOR_INVERS_OBLIDAT":
        "Per desfer una variació percentual no es fa la contrària: es DIVIDEIX "
        "pel factor. Si un preu ha pujat un 10 %, baixar-lo un 10 % no el torna "
        "al punt de partida.",
    "PERCENTATGES_SUMATS":
        "Has sumat o restat els percentatges entre si. No se sumen mai: "
        "cadascun es calcula sobre una base diferent. El que sí que es pot fer "
        "és multiplicar els factors.",
    "BASE_MAL_TRIADA":
        "Has calculat el percentatge sobre la base que no toca. Una variació "
        "percentual sempre es mesura respecte del valor de PARTIDA.",
    "RESTA_PER_QUOCIENT":
        "Has restat les dues quantitats. Un percentatge i una raó surten d'una "
        "DIVISIÓ: diuen quantes vegades, no quant més.",
    "ORDRE_DELS_FACTORS":
        "Has donat per fet que l'ordre canvia el resultat. Quan les variacions "
        "s'encadenen com a factors, el producte és el mateix en qualsevol "
        "ordre.",
    "SIMPLE_PER_COMPOST":
        "Has fet servir interès compost on l'enunciat diu simple. Amb interès "
        "simple els interessos es calculen sempre sobre el capital inicial i "
        "cada període dona el mateix.",
    "REPARTIMENT_A_PARTS_IGUALS":
        "Has repartit a parts iguals. En un repartiment PROPORCIONAL, a cadascú "
        "li toca segons el que ha posat.",
    "PART_MAL_ASSIGNADA":
        "El càlcul és bo però l'has atribuït a qui no toca: comprova a quina "
        "part correspon cada resultat.",

    # ---- escales i semblança (Full 8) ----
    "ESCALA_INVERTIDA":
        "Has fet servir l'escala del revés. A l'escala $a:b$, el primer nombre "
        "és el DIBUIX i el segon la REALITAT: si és una reducció, la mesura "
        "real sempre surt més gran que la del plànol.",
    "RAO_SENSE_QUADRAT":
        "Has multiplicat per $k$ una àrea o un volum. Només les LONGITUDS van "
        "amb $k$: les àrees van amb $k^2$ i els volums amb $k^3$.",
    "RAO_AL_QUADRAT":
        "Has fet servir $k^2$ on tocava una altra potència. El quadrat és per a "
        "les àrees; les longituds van amb $k$ i els volums amb $k^3$.",
    "RAO_AL_CUB":
        "Has fet servir $k^3$ on tocava una altra potència. El cub és per als "
        "volums; les àrees van amb $k^2$.",

    # ---- construir rectes i paràboles (Full 10) ----
    "ORDENADA_PER_COORDENADA":
        "Has pres la $y$ d'un punt com a ordenada a l'origen. Només "
        "coincideixen si aquell punt és sobre l'eix $Y$, és a dir, si té $x=0$.",
    "PENDENT_INVERTIT":
        "Has calculat $\\frac{\\Delta x}{\\Delta y}$. El pendent és "
        "$\\frac{\\Delta y}{\\Delta x}$: el que puja entre el que avança.",
    "PENDENT_MAL_TRIAT":
        "El pendent que has fet servir no és el que toca. Si te'l donen, es "
        "col·loca tal com és; si no, es calcula amb dos punts.",
    "PENDENT_NOMES_CANVIAT_DE_SIGNE":
        "Per a una perpendicular no n'hi ha prou de canviar el signe del "
        "pendent: també cal invertir-lo, perquè el producte dels dos pendents "
        "ha de valer $-1$.",
    "PARALLELA_PER_PERPENDICULAR":
        "Has confós paral·lela amb perpendicular. Les paral·leles comparteixen "
        "pendent; les perpendiculars el tenen invers i canviat de signe.",
    "PARALLELA_MATEIXA_RECTA":
        "La recta que has donat és la de partida. Una paral·lela té el mateix "
        "pendent però una altra ordenada a l'origen, o serien la mateixa recta.",
    "RECTA_VERTICAL_CONFOSA":
        "Has confós una recta horitzontal amb una de vertical. Les horitzontals "
        "són $y=$ constant; les verticals, $x=$ constant, i aquestes no són "
        "funcions.",
    "COORDENADES_INTERCANVIADES":
        "Has posat les coordenades al revés. Un punt s'escriu $(x,y)$: primer "
        "l'horitzontal i després la vertical.",
    "ORDENADES_PER_TALL":
        "Has donat on talla cada recta l'eix $Y$. El punt de tall ENTRE dues "
        "rectes és on totes dues valen el mateix alhora.",
    "SUBSTITUCIO_MAL_FETA":
        "La primera part surt bé, però en substituir per trobar la segona hi ha "
        "un error. Comprova el resultat posant-lo a l'expressió original.",
    "SIGNE_VERTEX":
        "T'has deixat el signe menys de $x_v=\\frac{-b}{2a}$. És l'error més "
        "habitual amb el vèrtex, i es detecta de seguida mirant si el vèrtex "
        "cau on hauria de caure.",
    "VERTEX_COM_COEFICIENTS":
        "Has col·locat les coordenades del vèrtex com a coeficients de la "
        "funció. Per anar del vèrtex a l'equació cal la forma "
        "$y=a(x-x_v)^2+y_v$.",
    "VERTEX_PER_ARREL":
        "Has donat una arrel (on la funció val zero) en comptes del vèrtex (on "
        "arriba al màxim o al mínim). Són coses diferents.",
    "COEFICIENT_MAL_TRIAT":
        "El coeficient principal no es tria: es troba imposant que la corba "
        "passi pel punt que et donen.",
    "SIGNE_COEFICIENT_PRINCIPAL":
        "El signe de $a$ no encaixa amb la forma de la paràbola. Si $a>0$ "
        "s'obre cap amunt i el vèrtex és un mínim; si $a<0$, cap avall i és un "
        "màxim.",
    "SIGNE_ARRELS":
        "Les arrels tenen el signe canviat. Comprova-les substituint-les: han "
        "de fer que la funció valgui $0$.",
    "PART_FIXA_VARIABLE_BARREJADES":
        "Has barrejat la part fixa amb la variable. La que es paga sempre és el "
        "terme independent; la que depèn de la quantitat és el pendent.",
    "DADES_MAL_TRIADES":
        "Has fet servir una dada de l'enunciat que no és la que toca. Torna a "
        "llegir què representa cada número abans de col·locar-lo.",

    # ---- etiquetes ja en ús al Full 10 que no tenien text ----
    "OBERTURA_INVERTIDA":
        "Com més gran és $|a|$, més ESTRETA és la paràbola, no més ampla: el "
        "coeficient estira la corba cap amunt.",
    "OBERTURA_I_AMPLADA_INVERTIDES":
        "Has invertit la relació entre el coeficient i la forma de la corba: "
        "compara dues paràboles concretes ($y=x^2$ i $y=3x^2$) i mira quina és "
        "més estreta.",
    "EIX_SIMETRIA_MAL_CALCULAT":
        "L'eix de simetria és la recta vertical que passa pel vèrtex: "
        "$x=\\frac{-b}{2a}$. És una recta, no un número solt ni un punt.",
    "TALL_ORIGEN_OBLIDAT":
        "T'has deixat el tall amb un dels eixos. Amb l'eix $Y$ n'hi ha sempre "
        "un i només un: el valor de la funció a $x=0$.",
    "TALL_COM_EXTREM":
        "Has confós un tall amb l'eix amb el màxim o el mínim. Als talls la "
        "funció val zero; a l'extrem hi arriba al seu valor més alt o més baix.",
    "PUNT_ORDENADA_CONFOS":
        "Has confós un punt de la gràfica amb l'ordenada a l'origen. Només "
        "coincideixen si el punt té $x=0$.",
    "ORDENADA_NULA_OBLIDADA":
        "Quan la recta passa per l'origen, l'ordenada a l'origen val $0$ i el "
        "terme independent desapareix: $y=mx$.",
    "SIGNE_ORDENADA_INVERTIT":
        "L'ordenada a l'origen té el signe canviat: mira si la recta talla "
        "l'eix vertical per damunt o per sota del zero.",
    "TERME_INDEPENDENT_IGNORAT":
        "T'has deixat el terme independent. Encara que vagi sol, forma part de "
        "la funció.",
    "VALOR_C_CONFOS":
        "El terme independent $c$ és el valor de la funció a $x=0$, no cap "
        "altra cosa.",
    "COEFICIENT_A_MAL_CALCULAT":
        "El coeficient principal no encaixa: comprova'l imposant que la corba "
        "passi per un punt que en coneguis.",
    "PARABOLA_AMB_A_ZERO":
        "Si $a=0$ no hi ha terme en $x^2$ i allò no és cap paràbola, sinó una "
        "recta.",
    "CREIXEMENT_INVERTIT":
        "Has dit que creix on decreix, o al revés. Mira si la $y$ puja o baixa "
        "a mesura que la $x$ avança cap a la dreta.",
    "EXTREM_INVERTIT":
        "Has confós el màxim amb el mínim. Amb una paràbola ho decideix el "
        "signe de $a$: positiu, mínim; negatiu, màxim.",
    "EXTREMS_OBLIDATS":
        "T'has deixat els extrems de l'interval. Quan el domini està limitat, "
        "els valors dels extrems compten.",
    "RESTRICCIO_OBLIDADA":
        "T'has deixat una restricció del domini: hi ha valors de $x$ que la "
        "funció no admet.",
    "RESTRICCIO_INVENTADA":
        "Has exclòs valors que sí que són al domini. Comprova què impedeix de "
        "debò calcular la imatge.",
    "ASIMPTOTA_COM_LIMIT":
        "Has tractat una asímptota com un valor que la funció arriba a agafar. "
        "La corba s'hi acosta tant com vulguis, però no hi arriba.",
    "RELATIU_COM_ABSOLUT":
        "Has comparat valors absoluts on calia comparar-los en proporció, o al "
        "revés.",
    "OPERACIO_INVERSA":
        "Has fet l'operació contrària a la que tocava per desfer el pas "
        "anterior.",
    "POTENCIA_APLICADA_MALAMENT":
        "La potència no s'ha aplicat a tot el que havia d'afectar: mira bé què "
        "queda dins del parèntesi.",
    "TERMES_NO_REDUITS":
        "Falta reduir els termes semblants abans de treure conclusions: "
        "l'expressió encara es pot simplificar.",
    "VALOR_DUPLICAT":
        "Has comptat dues vegades el mateix valor. Quan dues condicions donen "
        "la mateixa solució, la solució és una de sola.",
    "RAO_NOMES_UN_COSTAT":
        "Has comprovat la proporció amb un sol parell de costats. La semblança "
        "demana que TOTS els costats corresponents guardin la mateixa raó.",
    "CATET_HIPOTENUSA_CONFOSOS":
        "Has intercanviat un catet amb la hipotenusa. La hipotenusa és sempre "
        "el costat més llarg i va sola a un costat de la igualtat.",

}

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
