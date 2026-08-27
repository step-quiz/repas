#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""fes-paquet-alumnat.py — el que es publica per als alumnes, i NOMÉS això.

    python3 tools/fes-paquet-alumnat.py

Fa una carpeta `public/` (i, si es demana, `paquet-alumnat.zip`) amb el lloc
sencer i sense res del que no hi hauria de ser.

Per què existeix
────────────────
El repositori té, a la mateixa carpeta que `index.html`, tres coses que no són
per a l'alumnat:

    REVISIO-fullN.html      la clau de respostes completa: enunciat, quina
                            opció és bona, el diagnòstic de cada distractor i
                            la resolució pas a pas, dels dotze fulls
    analitzador-repas.html  porta el banc sencer incrustat i, a sobre,
                            compon proves escrites i n'imprimeix el full de
                            solucions
    tools/_banc.json        el mateix banc en format còmode

Si el lloc es publica fent `git push` d'aquesta carpeta a GitHub Pages —que és
la manera òbvia de publicar-lo— aquestes tres coses queden a una URL que
s'endevina. No cal obrir les eines de desenvolupador ni saber què és el
base64: n'hi ha prou d'escriure `REVISIO-full1.html` a la barra d'adreces.

Això no fa que el banc sigui secret. `data/fullN.js` continua sent públic i
les respostes se'n poden treure amb tres línies de consola; sense servidor
això és inevitable i el projecte ho diu obertament a diversos llocs. El que fa
és pujar el cost de zero a "cal saber què estàs fent", que és la diferència
entre una temptació que troba qualsevol i una que ja és una decisió.

L'analitzador se li dona al professorat pel seu canal, amb
`tools/fes-paquet-professorat.py`.

Determinista: amb les mateixes entrades surt el mateix resultat.
"""

import os
import shutil
import sys
import zipfile

AQUI = os.path.dirname(os.path.abspath(__file__))
ARREL = os.path.dirname(AQUI)
SORTIDA = os.path.join(ARREL, "public")

# Data fixa dins del zip: el que importa és que dues execucions donin el
# mateix fitxer, no quin dia es va empaquetar.
DATA = (1980, 1, 1, 0, 0, 0)

PAGINES = [
    "index.html", "full.html", "practica.html",
    "diagnostic.html", "resultat.html", "itinerari.html",
]
CARPETES = ["js", "css", "data", "vendor"]

# Es comprova que NO acabi al paquet. Si un dia algú afegeix un fitxer nou amb
# respostes i s'oblida d'aquesta llista, la comprovació de sota el troba
# igualment pel nom.
PROHIBIT = ("REVISIO-", "analitzador-", "_banc", "exemple-respostes")


def copia():
    if os.path.isdir(SORTIDA):
        shutil.rmtree(SORTIDA)
    os.makedirs(SORTIDA)

    for nom in PAGINES:
        ruta = os.path.join(ARREL, nom)
        if not os.path.isfile(ruta):
            sys.exit("✗ falta %s" % nom)
        shutil.copy2(ruta, os.path.join(SORTIDA, nom))

    for carp in CARPETES:
        base = os.path.join(ARREL, carp)
        if not os.path.isdir(base):
            sys.exit("✗ falta la carpeta %s/" % carp)
        shutil.copytree(base, os.path.join(SORTIDA, carp))


def comprova():
    """Cap fitxer del paquet no pot ser una clau de respostes."""
    dolents = []
    for drec, _, fitxers in os.walk(SORTIDA):
        for f in fitxers:
            if f.startswith(PROHIBIT):
                dolents.append(os.path.relpath(os.path.join(drec, f), SORTIDA))
    if dolents:
        sys.exit("✗ al paquet hi ha fitxers que no hi poden ser:\n  "
                 + "\n  ".join(sorted(dolents)))


def compta():
    n = 0
    for _, _, fitxers in os.walk(SORTIDA):
        n += len(fitxers)
    return n


def fes_zip():
    ruta = os.path.join(ARREL, "paquet-alumnat.zip")
    peces = []
    for drec, _, fitxers in os.walk(SORTIDA):
        for f in fitxers:
            abs_ = os.path.join(drec, f)
            peces.append((abs_, os.path.relpath(abs_, SORTIDA)))
    peces.sort(key=lambda x: x[1])
    with zipfile.ZipFile(ruta, "w", zipfile.ZIP_DEFLATED) as z:
        for abs_, dins in peces:
            info = zipfile.ZipInfo(dins, DATA)
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o644 << 16
            with open(abs_, "rb") as f:
                z.writestr(info, f.read())
    return ruta


def main():
    copia()
    comprova()
    print("✓ public/ (%d fitxers) — sense claus de respostes ni analitzador" % compta())
    if "--zip" in sys.argv:
        ruta = fes_zip()
        print("✓ %s (%.0f kB)" % (ruta, os.path.getsize(ruta) / 1024))
    print("  Publica NOMÉS aquesta carpeta. Vegeu DESPLEGAMENT.md.")


if __name__ == "__main__":
    main()
