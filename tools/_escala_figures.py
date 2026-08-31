# -*- coding: utf-8 -*-
"""Comprova que dins d'UN mateix poligon el dibuix i les etiquetes facin
servir la mateixa escala.

Dues arestes del mateix triangle etiquetades "3 cm" i "5 cm" han de mesurar,
al viewBox, unitats proporcionals a 3 i a 5. Si no, la figura esta deformada
respecte del que diu, i l'alumne que raona mirant-la queda enganyat.

QUE NO FA, I PER QUE
--------------------
La primera versio aparellava cada etiqueta amb l'aresta mes propera i prou.
Donava 26 encerts sobre 32 poligons i la majoria eren FALSOS. Tres maneres
de fallar, totes comprovades a ma:

  * Trapezis: la base curta te la base llarga mes a prop que ella mateixa
    (a 140d la mateixa aresta de 190 u rebia "14 m" i "3 m").
  * Figures en perspectiva: un cilindre o un con no s'han de dibuixar amb
    les proporcions reals, la profunditat va escor\u00e7ada expressament.
  * Hipotenuses: a 134 i 147 l'etiqueta "13 cm" / "10 m" va sobre la
    hipotenusa i s'assignava al catet vertical.

Per aixo aqui nomes es miren TRIANGLES RECTANGLES amb els catets alineats
amb els eixos, s'exigeix que l'aresta mes propera ho sigui com a minim el
doble que la segona, i s'exclouen les figures en perspectiva. El resultat es
curt i de fiar; el preu es que no diu res de trapezis, poligons regulars ni
cossos. Per a aquests, mira _plantilles.py.
"""
import math
import re
import sys

sys.path.insert(0, "tests")
from comu import TOTS

NUM = re.compile(r"^\s*([\d]+(?:[.,][\d]+)?)\s*(cm|mm|m|km|dm)\s*$")
DESVIACIO_MAXIMA = 1.06
DIST_MAXIMA = 35.0
FACTOR_DUBTE = 2.0


def _punts(s):
    v = [float(x) for x in re.findall(r"-?\d+(?:\.\d+)?", s)]
    return list(zip(v[0::2], v[1::2]))


def _dist_punt_segment(p, a, b):
    (px, py), (ax, ay), (bx, by) = p, a, b
    dx, dy = bx - ax, by - ay
    den = dx * dx + dy * dy
    if den < 1e-9:
        return math.hypot(px - ax, py - ay)
    t = max(0.0, min(1.0, ((px - ax) * dx + (py - ay) * dy) / den))
    return math.hypot(px - (ax + t * dx), py - (ay + t * dy))


def analitza(svg):
    t = re.search(r"<title[^>]*>(.*?)</title>", svg, re.S)
    if t and "perspectiva" in t.group(1):
        return []
    etqs = []
    for m in re.finditer(
            r'<text[^>]*x="(-?[\d.]+)"[^>]*y="(-?[\d.]+)"[^>]*>([^<]*)</text>', svg):
        n = NUM.match(m.group(3))
        if n:
            etqs.append((float(m.group(1)), float(m.group(2)),
                         float(n.group(1).replace(",", ".")), m.group(3)))
    sortida = []
    for k, m in enumerate(re.finditer(r'<polygon[^>]*points="([^"]+)"', svg)):
        P = _punts(m.group(1))
        if len(P) != 3:
            continue
        arestes = [(P[i], P[(i + 1) % 3]) for i in range(3)]
        if len([e for e in arestes if abs(e[0][1] - e[1][1]) < 0.5]) != 1:
            continue
        if len([e for e in arestes if abs(e[0][0] - e[1][0]) < 0.5]) != 1:
            continue
        parells = []
        for ex, ey, val, brut in etqs:
            ds = sorted((_dist_punt_segment((ex, ey), a, b), j)
                        for j, (a, b) in enumerate(arestes))
            if ds[0][0] > DIST_MAXIMA or ds[1][0] < ds[0][0] * FACTOR_DUBTE:
                continue
            a, b = arestes[ds[0][1]]
            L = math.dist(a, b)
            if val > 0 and L > 1:
                parells.append((brut, L, L / val))
        if len(parells) >= 2:
            esc = [p[2] for p in parells]
            sortida.append((k, parells, max(esc) / min(esc)))
    return sortida


def main():
    items = [(n, it) for n in sorted(TOTS) for it in TOTS[n] if it.get("figura")]
    revisats, dolents = 0, []
    for n, it in items:
        for _, parells, desv in analitza(it["figura"]):
            revisats += 1
            if desv > DESVIACIO_MAXIMA:
                dolents.append((n, it["id"], parells, desv))
    print("figures al banc: %d" % len(items))
    print("triangles rectangles alineats amb 2+ costats sense dubte: %d" % revisats)
    print("amb escala interna incoherent: %d\n" % len(dolents))
    for n, i, parells, desv in sorted(dolents, key=lambda x: -x[3]):
        det = "   ".join("%s = %.1f u (%.1f u/cm)" % p for p in parells)
        print("  full %-2s %-6s x%.2f   %s" % (n, i, desv, det))
    if dolents:
        print("\nATENCIO: repassa cada cas a ma. Comprova sobretot que"
              " l'etiqueta no vagi sobre la hipotenusa.")


if __name__ == "__main__":
    main()
