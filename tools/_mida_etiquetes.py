# -*- coding: utf-8 -*-
"""Mida efectiva, EN PIXELS DE PANTALLA, de les etiquetes de cada figura.

Aquesta es la comprovacio que hauria enxampat el defecte historic de les
"etiquetes a 7 px" sense necessitat d'ulls. El CSS diu:

    .figura        { max-width: min(100%, 20rem) }   -> 320 px al portatil
    .fig-etq       { font: 600 12px var(--mono) }
    .fig-etq.petita{ font-size: 10.5px }
    @media (max-width:520px) { .figura{max-width:100%} }

Un SVG s'escala perque el viewBox ompli l'amplada pintada, i el text de dins
s'escala amb ell. O sigui que una figura amb un viewBox de 476 px encongida a
320 px es queda a 0,67x, i les seves etiquetes "petita" de 10,5 px acaben a
7,1 px reals.

Compte amb un efecte contraintuitiu: al mobil el media query TREU el limit de
320 px, o sigui que la figura hi surt MES GRAN que al portatil. El dispositiu
objectiu (Chromebook) es el que rep la lletra petita.
"""
import collections
import re
import sys

sys.path.insert(0, "tests")
from comu import TOTS

CAP_PORTATIL = 320.0     # min(100%, 20rem) amb la columna de ~630 px
COL_MOBIL = 362.0        # 390 px de finestra menys els encoixinats
MIDA_NORMAL = 12.0
MIDA_PETITA = 10.5
LLINDAR = 9.0            # per sota d'aixo, mirar-ho amb ulls


def analitza():
    files = []
    for n in sorted(TOTS):
        for it in TOTS[n]:
            svg = it.get("figura")
            if not svg:
                continue
            m = re.search(r'viewBox="([\d.\-\s]+)"', svg)
            if not m:
                continue
            p = [float(x) for x in m.group(1).split()]
            W, H = p[2], p[3]
            if W <= 0:
                continue
            esc_p = min(CAP_PORTATIL, W) / W
            esc_m = min(COL_MOBIL, W) / W
            files.append(dict(
                full=n, id=it["id"], W=W, H=H, esc_p=esc_p, esc_m=esc_m,
                normal=MIDA_NORMAL * esc_p, petita=MIDA_PETITA * esc_p,
                petita_mobil=MIDA_PETITA * esc_m,
                n_normal=len(re.findall(r'class="[^"]*fig-etq(?![^"]*petita)', svg)),
                n_petita=len(re.findall(r'class="[^"]*fig-etq[^"]*petita', svg))))
    return files


def main():
    files = analitza()
    print("figures analitzades: %d\n" % len(files))

    b = collections.Counter()
    for f in files:
        v = f["petita"] if f["n_petita"] else f["normal"]
        k = ("<7 px" if v < 7 else "7-8 px" if v < 8 else "8-9 px" if v < 9
             else "9-10 px" if v < 10 else "10-12 px" if v < 12 else "sense reduir")
        b[k] += 1
    print("mida efectiva de l'etiqueta mes petita de cada figura (portatil):")
    for k in ["<7 px", "7-8 px", "8-9 px", "9-10 px", "10-12 px", "sense reduir"]:
        if b[k]:
            print("   %-14s %3d figures" % (k, b[k]))

    curts = [f for f in files
             if (f["petita"] if f["n_petita"] else f["normal"]) < LLINDAR]
    print("\nper sota de %.0f px -- s'han de mirar amb ulls: %d" % (LLINDAR, len(curts)))
    for f in sorted(curts, key=lambda x: x["petita"] if x["n_petita"] else x["normal"]):
        v = f["petita"] if f["n_petita"] else f["normal"]
        print("   full %-2s %-6s viewBox %dx%d  escala %.2f  ->  %.1f px  (%d+%d etiquetes)"
              % (f["full"], f["id"], f["W"], f["H"], f["esc_p"], v,
                 f["n_normal"], f["n_petita"]))

    grans = [f for f in files if f["esc_m"] > f["esc_p"] + 1e-9]
    print("\nfigures que es veuen MES GRANS al mobil que al portatil: %d de %d"
          % (len(grans), len(files)))


if __name__ == "__main__":
    main()
