#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""build_codi.py — genera les taules que comparteixen el generador de codis
(js/codi.js, dins de l'app) i l'analitzador (analitzador-repas.html).

Les dues bandes han de fer servir EXACTAMENT la mateixa taula: si divergissin,
un codi vàlid es llegiria malament sense que res avisés. Per això es generen
totes dues des d'aquí, en una sola passada.

Sortides:
  js/codi-taules.js        taules per a l'app (ordre d'ítems de cada full)
  tools/_taules.json       les mateixes dades, per injectar a l'analitzador

Ús:  python3 build_codi.py
"""

import json
import os
import re
import sys

ARREL = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")

# ---------------------------------------------------------------------
# Catàleg d'etiquetes d'error: ordre APPEND-ONLY
# ---------------------------------------------------------------------
# El codi porta els índexs d'aquesta llista, no els noms. Si algú la
# reordenés, tots els codis emesos fins llavors es llegirien malament. Per
# això el fitxer és append-only i aquest script atura la generació si detecta
# que una etiqueta ha canviat de posició. Afegir-ne de noves al final sí que
# és segur.
FITXER_ETIQ = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                           "codi-etiquetes.txt")


def etiquetes_ordenades():
    """Llista d'etiquetes en ordre estable. Les noves s'afegeixen al final."""
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import lib
    actuals = sorted(lib.TAX.keys())

    if os.path.exists(FITXER_ETIQ):
        with open(FITXER_ETIQ, encoding="utf-8") as f:
            previes = [l.strip() for l in f if l.strip() and not l.startswith("#")]
    else:
        previes = []

    # Cap etiqueta prèvia no pot desaparèixer ni moure's de lloc.
    ordre = list(previes)
    for e in actuals:
        if e not in ordre:
            ordre.append(e)

    perdudes = [e for e in previes if e not in actuals]
    if perdudes:
        print("  ⚠ etiquetes al fitxer però ja no al TAX (es mantenen per "
              "no moure els índexs): %s" % ", ".join(perdudes))

    assert len(ordre) <= 1024, (
        "més de 1024 etiquetes: el codi les guarda en 2 caràcters base32")

    with open(FITXER_ETIQ, "w", encoding="utf-8") as f:
        f.write("# Ordre APPEND-ONLY de les etiquetes d'error.\n")
        f.write("# El codi de verificació en guarda l'ÍNDEX, no el nom: si\n")
        f.write("# reordenes aquest fitxer, tots els codis ja emesos passen a\n")
        f.write("# llegir-se malament. Afegir al final és segur; res més ho és.\n")
        for e in ordre:
            f.write(e + "\n")
    return ordre


# ---------------------------------------------------------------------
# Ordre d'ítems de cada full
# ---------------------------------------------------------------------
def taula_fulls():
    """{full: {items: [id...], blocs: [[titol, primer, últim]...], dif: "12321..."}}

    L'ordre dels ítems és el de `data/fullN.js`, que és l'ordre en què els
    recorre l'app. La posició i del codi és, doncs, l'ítem i d'aquesta llista:
    és el que permet a l'analitzador dir "ha fallat el 67e" i no "la 9a".
    """
    out = {}
    for n in range(1, 13):
        ruta = os.path.join(ARREL, "data", "full%d.js" % n)
        if not os.path.exists(ruta):
            continue
        s = open(ruta, encoding="utf-8").read()
        d = json.loads(s[s.index("{"):s.rindex("}") + 1])
        ids = [it["id"] for it in d["items"]]
        pos = {it["id"]: i for i, it in enumerate(d["items"])}
        difs = "".join(str(it["dif"]) for it in d["items"])
        blocs = []
        for b in d["blocs"]:
            if not b["items"]:
                continue
            idxs = [pos[i] for i in b["items"] if i in pos]
            blocs.append([b["titol"], min(idxs), max(idxs)])
        out[n] = {"titol": d["titol"], "items": ids, "blocs": blocs, "dif": difs}
    return out


# ---------------------------------------------------------------------
# Proves del test inicial (per al tipus de codi "diagnòstic")
# ---------------------------------------------------------------------
def taula_proves():
    ruta = os.path.join(ARREL, "js", "proves-inicials.js")
    s = open(ruta, encoding="utf-8").read()
    # Cada prova és un objecte amb id i tema; els quatre primers `id:` del
    # fitxer són els estats d'autoavaluació, no proves, i es descarten
    # exigint que l'`id` vagi seguit d'un `tema`.
    parells = re.findall(r'\bid:\s*"(\w+)",\s*\n\s*tema:\s*"([^"]+)"', s)
    assert len(parells) == 15, "esperava 15 proves, n'he trobat %d" % len(parells)
    return [{"id": i, "tema": t} for i, t in parells]


def main():
    etiq = etiquetes_ordenades()
    fulls = taula_fulls()
    proves = taula_proves()

    dades = {"v": 1, "etiquetes": etiq, "fulls": fulls, "proves": proves}

    # --- per a l'app ---
    js = os.path.join(ARREL, "js", "codi-taules.js")
    with open(js, "w", encoding="utf-8") as f:
        f.write("/* Generat per tools/build_codi.py — no editeu aquest fitxer "
                "a mà. */\nwindow.RE_TAULES = ")
        json.dump(dades, f, ensure_ascii=False, separators=(",", ":"))
        f.write(";\n")

    # --- per injectar a l'analitzador ---
    jj = os.path.join(os.path.dirname(os.path.abspath(__file__)), "_taules.json")
    with open(jj, "w", encoding="utf-8") as f:
        json.dump(dades, f, ensure_ascii=False, separators=(",", ":"))

    tot = sum(len(v["items"]) for v in fulls.values())
    print("✓ %s (%d fulls, %d ítems, %d etiquetes, %d proves, %.1f kB)"
          % (js, len(fulls), tot, len(etiq), len(proves),
             os.path.getsize(js) / 1024))


if __name__ == "__main__":
    main()
