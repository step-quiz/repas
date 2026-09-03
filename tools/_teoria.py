# -*- coding: utf-8 -*-
"""Comprova el mapa `data/teoria.json` sense necessitar el repositori del llibre.

`tests/teoria.test.js` ja valida l'estructura i que els blocs mapats existeixin
al banc, pero les comprovacions que necessiten el llibre se salten quan no el
troba al costat, que es el cas habitual. I cap prova, ni amb llibre ni sense,
mira si el TITOL de la fitxa te res a veure amb el que demanen els exercicis
que hi van a parar. Aquest forat es el que va deixar passar dos casos:

  * `9:cossos_rodons` va a «Con, esfera i l'efecte de la rao» i el bloc es diu
    «Cilindres, cons i l'esfera»: cinc fitxes de cilindres reben una fitxa que
    no els anomena.
  * `2:combinades` anava a «Operar i estimar amb nombres extrems», que es
    notacio cientifica, quan les 14 fitxes son potencia d'una potencia.

DUES COMPROVACIONS

  A  Conceptes del titol contra conceptes dels enunciats del bloc.
  C  Entrades amb `titol` d'activitat pero sense `act`.

LA COMPROVACIO QUE FALTA, I PER QUE NO HI ES
--------------------------------------------
Hi havia d'haver una B: trobar dues destinacions separades per dos cursos o
mes que rebessin exercicis que demanen el mateix. El cas real es 109 («tres
de cada cinc alumnes, en percentatge», 1r ESO) contra 278a («quin percentatge
representa 18 de 60», 4t ESO): la mateixa operacio amb tres cursos de
distancia.

La vaig escriure comparant el vocabulari de les dues destinacions amb
l'index de Jaccard, i NO troba el cas: el 109 es una sola fitxa d'una frase i
la coincidencia de mots amb les 26 del factor multiplicador es massa baixa.
Comparar vocabulari no es comparar significat. L'he treta en comptes de
deixar-la fer bonic: un comprovador que no detecta allo que promet dona
confianca falsa. Aquest cas s'ha de trobar a ma, i esta anotat a
REVISIO-TEORIA-PENDENTS.md.

LIMITS, I SON IMPORTANTS

Cap de les dues decideix res: totes dues son LLISTES PER MIRAR. La A no sap
que un prisma es un «cos basic» i per tant marcara coses que estan be; i la C
no es cap error, perque ometre
`act` es una decisio documentada al `_llegiu-me` («val mes obrir la unitat que
enviar l'alumne a una activitat que no parla del que buscava»). El que si que
val la pena de la C es que aquestes entrades NO es validen mai contra el
llibre: `teoria.test.js` fa `if (!d.act || !d.titol) return;`.
"""
import collections
import json
import os
import re
import sys

AQUI = os.path.dirname(os.path.abspath(__file__))
ARREL = os.path.dirname(AQUI)
sys.path.insert(0, os.path.join(ARREL, "tests"))
from comu import TOTS

CURS_NIVELL = {"1eso": 1, "2eso": 2, "3eso": 3, "4eso": 4, "4eso-apl": 4}

# Conceptes que, si els anomena el titol, han de sortir als enunciats.
CONCEPTES = {
    "cilindre": r"cilindr", "con": r"\bcons?\b", "esfera": r"esfer",
    "prisma": r"prisma", "piràmide": r"piràmide", "cub": r"\bcubs?\b",
    "tetraedre": r"tetraedre",
    # Els conceptes es poden anomenar amb paraules O amb notacio. Buscar
    # nomes la paraula donava falsos positius: les potencies s'escriuen
    # $3^4$ i un problema de Pitagores parla d'una torre i la seva ombra
    # sense dir-ne el nom.
    "pitàgores": r"pitàgores|hipotenusa|catet|triangle rectangle|perpendicular",
    "percentatge": r"percentatg|\\%", "escala": r"escala",
    "semblança": r"semblan", "tales": r"tales", "sistema": r"sistem",
    "polinomi": r"polinom|monomi",
    "potència": r"potènci|exponent|\^\{?-?\d|\^\\square",
    "fracció": r"fracci", "decimal": r"decimal",
    "dues variables": r"correlaci|regressi|núvol de punts|dispersió conjunta",
    "estimació": r"estim|aproxim|ordre de magnitud",
    "notació científica": r"notació científica|\\cdot 10\^",
}
MOTS = re.compile(r"[a-zà-ÿ]{5,}")


def carrega():
    return json.load(open(os.path.join(ARREL, "data", "teoria.json"),
                          encoding="utf-8"))


def destinacio(mapa, full, it):
    return (mapa["items"].get(str(it["id"]))
            or mapa["exercicis"].get(str(it["ex"]))
            or mapa["blocs"].get("%s:%s" % (full, it["bloc"]))
            or mapa["blocs"].get(it["bloc"]))


def text(it):
    return ((it.get("encapcalament") or "") + " " + it["enunciat"]).lower()


def comprova_A(mapa):
    """Conceptes que el titol anomena i que no surten enlloc dels enunciats."""
    per_dest = collections.defaultdict(list)
    for n in sorted(TOTS):
        for it in TOTS[n]:
            d = destinacio(mapa, n, it)
            if d:
                per_dest[(n, it["bloc"], d["titol"])].append(it)
    fora = []
    for (n, bloc, titol), items in sorted(per_dest.items()):
        anomena = {c for c, p in CONCEPTES.items() if re.search(p, titol.lower())}
        if not anomena:
            continue
        junts = " ".join(text(it) for it in items)
        absents = {c for c in anomena if not re.search(CONCEPTES[c], junts)}
        if absents:
            fora.append((n, bloc, titol, sorted(absents), len(items)))
    return fora


def comprova_C(mapa):
    fora = []
    for sec in ("items", "exercicis", "blocs"):
        for clau, d in mapa[sec].items():
            if d.get("titol") and not d.get("act"):
                fora.append((sec, clau, d["curs"], d["ud"], d["titol"]))
    return fora


def main():
    mapa = carrega()
    A, C = comprova_A(mapa), comprova_C(mapa)

    print("A. EL TITOL ANOMENA UN CONCEPTE QUE NO SURT ALS ENUNCIATS: %d\n" % len(A))
    for n, bloc, titol, absents, k in A:
        print("   full %-2s %-22s (%d fitxes)" % (n, bloc, k))
        print("      titol: «%s»" % titol)
        print("      no surt enlloc: %s" % ", ".join(absents))
    if not A:
        print("   cap")

    print("\nC. TITOL D'ACTIVITAT SENSE `act` (no es validen mai contra el llibre): %d\n"
          % len(C))
    for sec, clau, curs, ud, titol in C:
        print("   %-10s %-26s %s U%s · %s" % (sec, clau, curs, ud, titol))

    print("\nCap de les dues llistes decideix res: son llistes per mirar.")


if __name__ == "__main__":
    main()
