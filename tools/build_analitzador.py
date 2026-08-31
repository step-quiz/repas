#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""build_analitzador.py — munta `analitzador-repas.html`, un fitxer únic que
el professorat pot desar i obrir sense servidor ni connexió.

Hi injecta les mateixes taules, el mateix `js/codi.js` i el banc d'enunciats
que fa servir l'app. No és una còpia paral·lela: és literalment el mateix
codi, de manera que un canvi al format no pot deixar l'analitzador enrere.

El banc (`_banc.json`, indexat per id d'ítem) hi va perquè la pestanya "Prova
escrita" necessita el text real de cada exercici, i no només el recompte que
ja porten les taules.

Executeu build_codi.py abans (o feu `python3 build_tot.py`, que ho encadena).
"""

import os
import sys

AQUI = os.path.dirname(os.path.abspath(__file__))
ARREL = os.path.join(AQUI, "..")


def main():
    plantilla = open(os.path.join(AQUI, "analitzador-plantilla.html"),
                     encoding="utf-8").read()

    ruta_taules = os.path.join(AQUI, "_taules.json")
    if not os.path.exists(ruta_taules):
        sys.exit("✗ falta tools/_taules.json: executeu abans `python3 "
                 "build_codi.py` (o directament `python3 build_tot.py`, que "
                 "ho encadena tot en l'ordre correcte).")
    ruta_banc = os.path.join(AQUI, "_banc.json")
    if not os.path.exists(ruta_banc):
        sys.exit("✗ falta tools/_banc.json: executeu abans `python3 "
                 "build_codi.py` (o directament `python3 build_tot.py`).")
    taules = open(ruta_taules, encoding="utf-8").read()
    banc = open(ruta_banc, encoding="utf-8").read()
    codi = open(os.path.join(ARREL, "js", "codi.js"), encoding="utf-8").read()
    # El calendari dels trams viu a `js/calendari.js` i el comparteixen el
    # lloc de l'alumne i l'analitzador: si es dupliqués, un dia les dues
    # còpies dirien coses diferents.
    calendari = open(os.path.join(ARREL, "js", "calendari.js"),
                     encoding="utf-8").read()

    assert plantilla.count("/*__TAULES__*/") == 1
    assert plantilla.count("/*__CODI__*/") == 1
    assert plantilla.count("/*__CALENDARI__*/") == 1
    assert plantilla.count("/*__BANC__*/") == 1

    html = plantilla.replace(
        "/*__TAULES__*/", "window.RE_TAULES = " + taules + ";"
    ).replace("/*__CODI__*/", codi).replace(
        "/*__CALENDARI__*/", calendari).replace(
        "/*__BANC__*/", "window.RE_BANC = " + banc + ";")

    ruta = os.path.join(ARREL, "analitzador-repas.html")
    with open(ruta, "w", encoding="utf-8") as f:
        f.write(html)
    print("✓ %s (%.0f kB)" % (ruta, os.path.getsize(ruta) / 1024))


if __name__ == "__main__":
    main()
