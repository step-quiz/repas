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


def Q(qid, ex, ap, bloc, tipus, enunciat,
      correcta, distractors, pistes, resolucio, ex_text="", nota=""):
    """Registra una pregunta al banc, validant-la."""
    item = {
        "id": qid,
        "ex": ex,
        "ap": ap,
        "bloc": bloc,
        "tipus": tipus,
        "ordre": len(_BANC),
        "ex_text": ex_text,
        "enunciat": enunciat,
        "correcta": tex(correcta),
        "distractors": distractors,
        "pistes": pistes if isinstance(pistes, list) else [pistes],
        "resolucio": resolucio if isinstance(resolucio, list) else [resolucio],
        "nota": nota,
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
