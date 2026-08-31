# -*- coding: utf-8 -*-
"""Mesura cada COTA d'una figura i comprova que totes facin servir la
mateixa escala.

Aquesta es la correccio del forat que tenia _plantilles.py, que comparava
els VALORS de les etiquetes sense saber que mesurava cadascuna. A 193a les
dues etiquetes diuen "10 cm" -- rao 1,00, aparentment coherent -- pero una
es el radi i l'altra l'altura, o sigui que la rao que importa (diametre
contra altura) es 2:1 i el dibuix la posa a 1:1.

Aqui no es mira l'etiqueta sola: es mesura la LINIA DE COTA que la porta.
Una cota que abasta 104 unitats etiquetada "12 m" dona 8,7 u/m; una que
n'abasta 52 etiquetada "5 m" dona 10,4 u/m. Si les dues son al mateix pla
del dibuix, han de coincidir.

LIMIT CONEGUT: en perspectiva obliqua nomes son de fiar les cotes del pla
frontal (verticals i horitzontals). Una cota sobre una aresta de fondaria
va escor\u00e7ada expressament i aqui sortiria com a incoherent. Per aixo el
programa separa les cotes per orientacio i nomes compara les que comparteixen
pla.
"""
import math
import re
import sys

sys.path.insert(0, "tests")
from comu import TOTS

NUM = re.compile(r"^\s*([\d]+(?:[.,][\d]+)?)\s*(cm|mm|m|km|dm)\s*$")
LLARG_MINIM = 20.0        # per sota d'aixo es una marca d'extrem, no la cota
DIST_MAXIMA = 45.0
TOLERANCIA = 1.08         # 8 %


def _dist_punt_segment(p, a, b):
    (px, py), (ax, ay), (bx, by) = p, a, b
    dx, dy = bx - ax, by - ay
    den = dx * dx + dy * dy
    if den < 1e-9:
        return math.hypot(px - ax, py - ay)
    t = max(0.0, min(1.0, ((px - ax) * dx + (py - ay) * dy) / den))
    return math.hypot(px - (ax + t * dx), py - (ay + t * dy))


def _totes_les_linies(svg):
    out = []
    for m in re.finditer(
            r'<line class="fig-cota"[^>]*x1="(-?[\d.]+)" y1="(-?[\d.]+)"'
            r' x2="(-?[\d.]+)" y2="(-?[\d.]+)"', svg):
        x1, y1, x2, y2 = (float(m.group(i)) for i in (1, 2, 3, 4))
        out.append(((x1, y1), (x2, y2), math.hypot(x2 - x1, y2 - y1)))
    return out


def _es_linia_de_mesura(seg, totes, tol=2.5):
    """Una cota de mesura te els DOS extrems recolzats sobre altres linies de
    cota (les d'extensio, que van de la figura fins a la cota). Una linia
    d'extensio, en canvi, te un extrem lliure.

    Sense aquesta distincio l'eina aparella l'etiqueta amb la linia
    d'extensio, que sol ser mes llarga. Em va passar a 170c: el "5,2 cm"
    anava a una extensio de 55 u en comptes de a la cota real de 31,2 u, i
    en va sortir un fals positiu de x1,76.
    """
    a, b, L = seg
    for punt in (a, b):
        if not any(altre is not seg
                   and _dist_punt_segment(punt, altre[0], altre[1]) <= tol
                   for altre in totes):
            return False
    return True


def cotes(svg):
    """-> [(orientacio, llargada, etiqueta, valor, unitats_per_unitat)]"""
    totes = _totes_les_linies(svg)
    mesura = [s for s in totes
              if s[2] >= LLARG_MINIM and _es_linia_de_mesura(s, totes)]
    etqs = []
    for m in re.finditer(
            r'<text[^>]*x="(-?[\d.]+)"[^>]*y="(-?[\d.]+)"[^>]*>([^<]*)</text>', svg):
        n = NUM.match(m.group(3))
        if n:
            etqs.append((float(m.group(1)), float(m.group(2)),
                         float(n.group(1).replace(",", ".")), m.group(3)))
    fora = []
    for ex, ey, val, brut in etqs:
        if not mesura:
            continue
        d, seg = min(((_dist_punt_segment((ex, ey), a, b), (a, b, L))
                      for a, b, L in mesura), key=lambda t: t[0])
        if d > DIST_MAXIMA or val <= 0:
            continue
        (x1, y1), (x2, y2), L = seg
        if abs(y2 - y1) < 1.0:
            ori = "horitzontal"
        elif abs(x2 - x1) < 1.0:
            ori = "vertical"
        else:
            ori = "obliqua"
        fora.append((ori, L, brut, val, L / val))
    return fora


def main():
    items = [(n, it) for n in sorted(TOTS) for it in TOTS[n] if it.get("figura")]
    incoherents = []
    mesurats = 0
    for n, it in items:
        cs = cotes(it["figura"])
        # nomes es comparen cotes del pla frontal entre elles
        frontals = [c for c in cs if c[0] in ("horitzontal", "vertical")]
        if len(frontals) < 2:
            continue
        mesurats += 1
        esc = [c[4] for c in frontals]
        desv = max(esc) / min(esc)
        if desv > TOLERANCIA:
            incoherents.append((n, it["id"], frontals, desv))
    print("figures amb 2+ cotes al pla frontal: %d" % mesurats)
    print("amb escales incoherents entre cotes: %d\n" % len(incoherents))
    for n, i, cs, d in sorted(incoherents, key=lambda x: -x[3]):
        det = "  ".join("%s[%s]=%.0fu -> %.2f u/u" % (c[2], c[0][:4], c[1], c[4])
                        for c in cs)
        print("  full %-2s %-6s x%.2f   %s" % (n, i, d, det))


if __name__ == "__main__":
    main()
