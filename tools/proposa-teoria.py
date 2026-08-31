#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""proposa-teoria.py — candidats per acabar d'omplir `data/teoria.json`.

No decideix res: proposa. Per a cada bloc o exercici que encara no té teoria
assignada, busca al llibre les activitats que hi tenen més paraules en comú i
les llista perquè una persona triï.

Això és a posta. Un aparellament automàtic per paraules encerta un 85% dels
casos i falla en la resta, i els errors no són innocus: un alumne que clica
«teoria» i troba un tema que no toca deixa de clicar-hi. Val més tenir la
meitat del mapa ben fet que tot el mapa a mitges.

    python3 tools/proposa-teoria.py                 # el que falta, per bloc
    python3 tools/proposa-teoria.py --exercicis     # exercici per exercici
    python3 tools/proposa-teoria.py --llibre ../llibre-main

Cal el repositori del llibre al costat i haver compilat (`build_tot.py`).
"""
import argparse
import json
import os
import re
import sys
import unicodedata

AQUI = os.path.dirname(os.path.abspath(__file__))
ARREL = os.path.dirname(AQUI)
STOP = set("de la el i les els un una amb per a en del al que es sentit "
           "com aquest aquesta seva seu on quan".split())


def norm(s):
    s = unicodedata.normalize("NFD", (s or "").lower())
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    return set(w for w in re.sub(r"[^a-z0-9]+", " ", s).split()
               if w and w not in STOP and len(w) > 2)


def carrega_llibre(base):
    cursos = []
    arrel = os.path.join(base, "contingut")
    for c in sorted(os.listdir(arrel)):
        f = os.path.join(arrel, c, "course.json")
        if not os.path.exists(f):
            continue
        d = json.load(open(f, encoding="utf-8"))
        for u in d["units"]:
            for a in u["activities"]:
                cursos.append({
                    "curs": d["course"], "ud": u["num"], "act": a["num"],
                    "titol": a["title"],
                    "paraules": norm(u["title"]) | norm(a["title"])
                    | norm(a.get("subtitle"))})
    return cursos


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--llibre", default="")
    ap.add_argument("--exercicis", action="store_true")
    ap.add_argument("--quants", type=int, default=3)
    args = ap.parse_args()

    base = args.llibre or next(
        (p for p in [os.path.join(ARREL, "..", "llibre-main"),
                     os.path.join(ARREL, "..", "llibre"),
                     os.path.join(ARREL, "..", "..", "llibre", "llibre-main")]
         if os.path.isdir(os.path.join(p, "contingut"))), "")
    if not base:
        sys.exit("✗ no s'ha trobat el llibre. Passa-hi --llibre CAMÍ")

    sys.path.insert(0, os.path.join(ARREL, "tests"))
    try:
        from comu import TOTS
    except Exception as e:
        sys.exit("✗ falta el banc compilat (%s). Executa `python3 tools/build_tot.py`" % e)

    mapa = json.load(open(os.path.join(ARREL, "data", "teoria.json"),
                          encoding="utf-8"))
    activitats = carrega_llibre(base)

    items = [it for n in sorted(TOTS) for it in TOTS[n]]

    def te_teoria(it):
        return (mapa["items"].get(it["id"]) or mapa["exercicis"].get(str(it["ex"]))
                or mapa["blocs"].get(it["bloc"]))

    if args.exercicis:
        pendents, vist = [], set()
        for it in items:
            if it["ex"] in vist or te_teoria(it):
                continue
            vist.add(it["ex"])
            pendents.append((str(it["ex"]), it["bloc"],
                             (it.get("encapcalament") or it["enunciat"])[:90]))
    else:
        pendents, vist = [], set()
        for it in items:
            if it["bloc"] in vist or te_teoria(it):
                continue
            vist.add(it["bloc"])
            mostra = [x["enunciat"] for x in items if x["bloc"] == it["bloc"]][:4]
            pendents.append((it["bloc"], it["bloc"], " ".join(mostra)[:400]))

    if not pendents:
        print("✓ tot mapat: no queda res per decidir")
        return 0

    print("%d %s sense teoria assignada.\n" % (
        len(pendents), "exercicis" if args.exercicis else "blocs"))
    for clau, bloc, text in pendents:
        p = norm(bloc.replace("_", " ")) | norm(text)
        cands = sorted(activitats, key=lambda a: -len(p & a["paraules"]))
        print('  "%s": { "curs": "?", "ud": 0, "act": 0, "titol": "?" },' % clau)
        for a in cands[:args.quants]:
            n = len(p & a["paraules"])
            print("        // %s UD%-2s act %-2s  %-46s  (%d en comú)"
                  % (a["curs"], a["ud"], a["act"], a["titol"][:44], n))
        print()
    print("Copia les línies que valguin a data/teoria.json, secció")
    print("«%s», i esborra els comentaris." % ("exercicis" if args.exercicis else "blocs"))
    return 0


if __name__ == "__main__":
    sys.exit(main())
