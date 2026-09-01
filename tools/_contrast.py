# -*- coding: utf-8 -*-
"""Contrast real de cada etiqueta de figura contra el fons on cau.

D'on surt: a 144b el "2 cm" del radi cau damunt de l'ompliment vermell del
sector. Text --apagat rgb(90,107,128) sobre --fig-marca rgb(179,69,60): les
dues luminancies son gairebe iguals i l'etiqueta no es llegeix. Ni l'auditor
ni la capa 2 de la galeria ho veuen: totes dues miren posicions i mides, no
colors.

COM HO MESURA
-------------
Les posicions de les etiquetes surten del SVG, no dels pixels. Cada figura es
renderitza SOLA, omplint tot el llenc, o sigui que el viewBox es tradueix a
pixels amb una regla de tres i sense cap desplacament desconegut. Despres, per
a cada etiqueta, es mira el color dominant al seu voltant havent tret abans el
text i el seu halo.

TRES VERSIONS QUE VAIG LLENCAR, per si algu hi torna a caure
------------------------------------------------------------
1. Buscar el text pel color i mirar-ne el voltant immediat: el que surt es
   l'ANTIALIASING, grisos intermedis entre text i fons. 15 falsos positius.
2. Mirar un anell al voltant del text: salta qualsevol etiqueta que tingui una
   linia vermella a prop encara que reposi sobre paper. 30 falsos positius.
3. Filtrar els blocs de text per forma: els tracos del dibuix son del mateix
   --tinta que les etiquetes i no es distingeixen per color; filtrant per mida
   se'n van tambe les etiquetes curtes sobre fons dificil. Fals NEGATIU a
   144b, que es justament el cas que s'havia de trobar.

La lliso: no dedueixis del PNG on es el text si el SVG ja t'ho diu.

LLINDAR
-------
WCAG 2.1 demana 4,5:1 per a text petit. Les etiquetes fan 12 px i 10,5 px.
"""
import os
import re
import subprocess
import sys
import tempfile

try:
    import numpy as np
    from PIL import Image
except ImportError:
    sys.exit("calen Pillow i numpy")

sys.path.insert(0, "tests")
from comu import TOTS

TINTA = (22, 32, 46)
APAGAT = (90, 107, 128)
PALETA = {
    "--paper": (247, 248, 250),
    "blanc": (255, 255, 255),
    "--fig-plena": (233, 240, 246),
    "--fig-marca": (179, 69, 60),
}
LLINDAR = 4.5
AMPLE = 900                    # renderitzat gros: mes precisio de mostreig
RADI = 9                       # radi de mostreig al voltant de l'ancoratge

ARREL = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PLANTILLA = """<!DOCTYPE html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="css/estil.css">
<style>html,body{margin:0;padding:0;background:#fff}
svg.figura{max-width:none;width:%(ample)dpx;height:auto;display:block}</style>
</head><body>%(svg)s</body></html>"""


def _lum(c):
    def f(u):
        u /= 255.0
        return u / 12.92 if u <= 0.03928 else ((u + 0.055) / 1.055) ** 2.4
    return 0.2126 * f(c[0]) + 0.7152 * f(c[1]) + 0.0722 * f(c[2])


def contrast(a, b):
    la, lb = sorted((_lum(a), _lum(b)), reverse=True)
    return (la + 0.05) / (lb + 0.05)


ETIQ = re.compile(r'<text\b([^>]*)>([^<]*)</text>')


def _at(cadena, nom):
    m = re.search(r'\b%s="([^"]*)"' % nom, cadena)
    return m.group(1) if m else None


def etiquetes(svg):
    """-> [(x, y, es_petita, text)] en unitats de viewBox, ja transformades.

    L'ordre dels atributs de <text> no es fix (x, y, text-anchor, class), o
    sigui que no es pot llegir amb una regex posicional; es llegeix atribut a
    atribut. La primera versio ho feia posicionalment i no en trobava CAP.
    """
    fora = []
    trossos = []
    for gm in re.finditer(r'<g\b([^>]*)>(.*?)</g>', svg, re.S):
        t = re.search(r'translate\(\s*([-\d.]+)[, ]+([-\d.]+)\s*\)', gm.group(1))
        tx, ty = (float(t.group(1)), float(t.group(2))) if t else (0.0, 0.0)
        trossos.append((gm.group(2), tx, ty, gm.start(2), gm.end(2)))
    coberts = [(a, b) for _, _, _, a, b in trossos]
    trossos.append((svg, 0.0, 0.0, -1, -1))
    for cos, tx, ty, a, b in trossos:
        for m in ETIQ.finditer(cos):
            classe = _at(m.group(1), "class") or ""
            if "fig-etq" not in classe:
                continue
            if a == -1:                       # el pas global: salta els ja fets
                pos = m.start()
                if any(x <= pos < y for x, y in coberts):
                    continue
            x, y = _at(m.group(1), "x"), _at(m.group(1), "y")
            if x is None or y is None:
                continue
            fora.append((float(x) + tx, float(y) + ty,
                         "petita" in classe, m.group(2)))
    return fora


def renderitza(svg, desti):
    fd, tmp = tempfile.mkstemp(suffix=".html", dir=ARREL)
    with os.fdopen(fd, "w", encoding="utf-8") as f:
        f.write(PLANTILLA % {"svg": svg, "ample": AMPLE})
    subprocess.run(["wkhtmltoimage", "--enable-local-file-access",
                    "--width", str(AMPLE), "--disable-smart-width",
                    "--transparent" if False else "--quality", "94",
                    os.path.basename(tmp), desti],
                   cwd=ARREL, capture_output=True)
    os.remove(tmp)


def analitza(ident, svg):
    m = re.search(r'viewBox="([-\d.\s]+)"', svg)
    if not m:
        return []
    vx, vy, vw, vh = [float(v) for v in m.group(1).split()]
    etqs = etiquetes(svg)
    if not etqs:
        return []
    tmp_png = "/tmp/_contrast_%s.png" % ident
    renderitza(svg, tmp_png)
    if not os.path.exists(tmp_png):
        return []
    arr = np.array(Image.open(tmp_png).convert("RGB"))
    os.remove(tmp_png)
    H, W = arr.shape[:2]
    k = W / vw
    fora = []
    for x, y, petita, text in etqs:
        px, py = int((x - vx) * k), int((y - vy) * k)
        if not (0 <= px < W and 0 <= py < H):
            continue
        y0, y1 = max(0, py - RADI * 2), min(H, py + RADI)
        x0, x1 = max(0, px - RADI), min(W, px + RADI * 3)
        tros = arr[y0:y1, x0:x1].reshape(-1, 3)
        if len(tros) == 0:
            continue
        color = TINTA if not petita else APAGAT
        millor, n_millor = None, 0
        for nom, rgb in PALETA.items():
            n = int((np.abs(tros.astype(np.int16)
                            - np.array(rgb, dtype=np.int16)) <= 10).all(axis=1).sum())
            if n > n_millor:
                millor, n_millor = (nom, rgb), n
        if millor is None or n_millor < 0.25 * len(tros):
            continue
        fora.append((text, "--apagat" if petita else "--tinta",
                     millor[0], contrast(color, millor[1]), n_millor))
    return fora


def main():
    items = [(n, it) for n in sorted(TOTS) for it in TOTS[n] if it.get("figura")]
    dolents, tots = [], []
    for i, (n, it) in enumerate(items, 1):
        for r in analitza(it["id"], it["figura"]):
            tots.append((n, it["id"]) + r)
            if r[3] < LLINDAR:
                dolents.append((n, it["id"]) + r)
        if i % 40 == 0:
            print("  %d/%d" % (i, len(items)), file=sys.stderr)
    print("figures analitzades: %d · etiquetes mesurades: %d\n"
          % (len(items), len(tots)))
    print("per sota de %.1f:1 (WCAG AA, text petit): %d\n" % (LLINDAR, len(dolents)))
    for n, ident, text, col, fons, c, npx in sorted(dolents, key=lambda x: x[5]):
        print("  full %-2s %-6s  «%s»  %s sobre %s  ->  %.2f:1"
              % (n, ident, text.strip(), col, fons, c))
    if not dolents:
        print("  cap")
    print("\nles 6 amb menys marge de les que passen:")
    for n, ident, text, col, fons, c, npx in sorted(
            [t for t in tots if t[5] >= LLINDAR], key=lambda x: x[5])[:6]:
        print("  full %-2s %-6s  «%s»  %s sobre %s  ->  %.2f:1"
              % (n, ident, text.strip(), col, fons, c))


if __name__ == "__main__":
    main()
