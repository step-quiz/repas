#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""fes-paquet-professorat.py — el zip que se li dona al professorat.

    python3 tools/fes-paquet-professorat.py

Fa un sol fitxer, `paquet-professorat.zip`, amb tres coses a dins:

    analitzador-repas.html
    vendor/katex/...
    GUIA-PROFESSORAT.md

Existeix per una raó concreta. L'analitzador porta incrustats el motor del
codi i els 892 exercicis, i per això es descriu sovint com un fitxer que
s'obre tot sol; però NO porta KaTeX. El demana en temps d'execució, primer a
`vendor/katex/` (ruta relativa al costat del fitxer) i, si no hi és, al CDN.
Com que 777 dels 892 ítems porten LaTeX a l'enunciat, un professor que només
rebi l'HTML i no tingui internet imprimirà `$3x-4x^2-6x^3$` a l'examen.
Enviar l'HTML sol és, doncs, un error silenciós i car: no peta res, només
surten els exàmens malament. Aquest script fa que no calgui recordar-ho.

Determinista: amb les mateixes entrades surt un zip byte a byte idèntic
(dates fixades i ordre de fitxers estable), com la resta de builds del
projecte.
"""

import os
import sys
import zipfile

AQUI = os.path.dirname(os.path.abspath(__file__))
ARREL = os.path.dirname(AQUI)
SORTIDA = os.path.join(ARREL, "paquet-professorat.zip")

# Data fixa dins del zip: el que importa és que dues execucions donin el
# mateix fitxer, no quin dia es va empaquetar.
DATA = (1980, 1, 1, 0, 0, 0)

IMPRESCINDIBLES = ["analitzador-repas.html", "GUIA-PROFESSORAT.md"]
CARPETA_KATEX = os.path.join("vendor", "katex")


def recull():
    """Llista de (ruta absoluta, nom dins del zip), ordenada."""
    peces = []
    for nom in IMPRESCINDIBLES:
        ruta = os.path.join(ARREL, nom)
        if not os.path.isfile(ruta):
            sys.exit("✗ falta %s: el paquet no es pot fer sense" % nom)
        peces.append((ruta, nom))

    base = os.path.join(ARREL, CARPETA_KATEX)
    if not os.path.isdir(base):
        sys.exit("✗ falta vendor/katex/: sense KaTeX els exàmens s'imprimeixen "
                 "amb el LaTeX en cru, que és justament el que aquest paquet evita")

    katex = []
    for drec, _, fitxers in os.walk(base):
        for f in fitxers:
            ruta = os.path.join(drec, f)
            katex.append((ruta, os.path.relpath(ruta, ARREL).replace(os.sep, "/")))
    if not any(n.endswith("katex.min.js") for _, n in katex):
        sys.exit("✗ vendor/katex/ hi és però no hi ha katex.min.js")

    return peces + sorted(katex, key=lambda x: x[1])


def main():
    peces = recull()
    with zipfile.ZipFile(SORTIDA, "w", zipfile.ZIP_DEFLATED) as z:
        for ruta, nom in peces:
            info = zipfile.ZipInfo(nom, date_time=DATA)
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o644 << 16
            with open(ruta, "rb") as f:
                z.writestr(info, f.read())

    mida = os.path.getsize(SORTIDA)
    fonts = sum(1 for _, n in peces if n.endswith(".woff2"))
    print("✓ %s (%d fitxers, %d fonts de KaTeX, %.1f MB)"
          % (SORTIDA, len(peces), fonts, mida / 1048576.0))
    print("  Dona'l sencer: si se'n descomprimeix només l'HTML, les fórmules "
          "no es pintaran sense internet.")


if __name__ == "__main__":
    main()
