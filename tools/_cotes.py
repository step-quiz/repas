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
import collections
import math
import re
import sys

sys.path.insert(0, "tests")
from comu import TOTS

NUM = re.compile(r"^\s*([\d]+(?:[.,][\d]+)?)\s*(cm|mm|m|km|dm)\s*$")
ARREL = re.compile(r"^\s*\u221a\s*([\d]+)\s*(cm|mm|m|km|dm)\s*$")


def valor(text):
    """Numero d'una etiqueta, o None. Les figures escriuen les arrels amb el
    glif \u221a directament (\u221a164 m), que el patro numeric no reconeixia:
    aixi l'alcada de 140b quedava sense mesurar."""
    m = NUM.match(text)
    if m:
        return float(m.group(1).replace(",", "."))
    m = ARREL.match(text)
    if m:
        return math.sqrt(float(m.group(1)))
    return None
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


def _linies(svg, nomes_cota):
    pat = (r'<line class="fig-cota"[^>]*x1="(-?[\d.]+)" y1="(-?[\d.]+)"'
           r' x2="(-?[\d.]+)" y2="(-?[\d.]+)"') if nomes_cota else (
           r'<line(?![^>]*fig-cota)[^>]*x1="(-?[\d.]+)" y1="(-?[\d.]+)"'
           r' x2="(-?[\d.]+)" y2="(-?[\d.]+)"')
    out = []
    for m in re.finditer(pat, svg):
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


def _arestes(svg):
    """Costats dels poligons, com a candidats a rebre una etiqueta.

    Sense aixo, una etiqueta que anomena un COSTAT se l'emporta la linia de
    mesura mes propera. A 124c el "12 cm" del costat inclinat queia sobre la
    linia d'alcada i produia un fals x1,82. Amb el costat com a candidat,
    l'etiqueta hi va, queda classificada com a obliqua i surt de la
    comparacio del pla frontal, que es el que toca.
    """
    out = []
    for m in re.finditer(r'<polygon[^>]*points="([^"]+)"', svg):
        v = [float(x) for x in re.findall(r"-?\d+(?:\.\d+)?", m.group(1))]
        P = list(zip(v[0::2], v[1::2]))
        for i in range(len(P)):
            a, b = P[i], P[(i + 1) % len(P)]
            out.append((a, b, math.dist(a, b)))
    return out


def cotes(svg):
    """-> [(orientacio, llargada, etiqueta, valor, unitats_per_unitat, mena)]

    Mesura DOS tipus de linia:

      'cota'      el sistema de claudators <line class="fig-cota">.
      'auxiliar'  linies que marquen una mesura pero queden FORA d'aquell
                  sistema. N'hi ha de dues menes i totes dues portaven
                  defectes amagats:
                    - l'alcada dels trapezis i dels triangles isosceles,
                      discontinua i en vermell (140c, 124c);
                    - l'alcada dels prismes, una linia pelada al costat del
                      cos, sense extensions ni puntes (170b, 172, 173, 176a).
                  Mentre l'eina nomes mirava 'fig-cota', els quatre trapezis
                  donaven x1,00 perque nomes en veia les dues bases, que si
                  que concorden. 140c esta dibuixat a la meitat d'alcada i no
                  sortia.

    Les ARESTES OCULTES tambe son linies discontinues fora del sistema de
    cotes (170f, 180a), pero no mesuren res. No cal distingir-les pel gruix
    del trac, que seria fragil: no tenen cap etiqueta numerica a prop, o
    sigui que no reben assignacio i queden fora soles.
    """
    cota_totes = _linies(svg, True)
    mesura = [(s, "cota") for s in cota_totes
              if s[2] >= LLARG_MINIM and _es_linia_de_mesura(s, cota_totes)]
    mesura += [(s, "auxiliar") for s in _linies(svg, False) if s[2] >= LLARG_MINIM]
    mesura += [(s, "aresta") for s in _arestes(svg) if s[2] >= LLARG_MINIM]

    etqs = []
    for m in re.finditer(
            r'<text[^>]*x="(-?[\d.]+)"[^>]*y="(-?[\d.]+)"[^>]*>([^<]*)</text>', svg):
        v = valor(m.group(3))
        if v is not None:
            etqs.append((float(m.group(1)), float(m.group(2)), v, m.group(3)))
    fora = []
    for ex, ey, val, brut in etqs:
        if not mesura or val <= 0:
            continue
        cands = sorted(((_dist_punt_segment((ex, ey), s[0], s[1]), s, mena)
                        for s, mena in mesura), key=lambda t: t[0])
        d, seg, mena = cands[0]
        # empat tecnic: es prefereix el sistema de cotes, que es l'explicit
        for d2, s2, m2 in cands[1:]:
            if d2 <= d * 1.5 and m2 == "cota" and mena != "cota":
                d, seg, mena = d2, s2, m2
                break
        if d > DIST_MAXIMA:
            continue
        (x1, y1), (x2, y2), L = seg
        if abs(y2 - y1) < 1.0:
            ori = "horitzontal"
        elif abs(x2 - x1) < 1.0:
            ori = "vertical"
        else:
            ori = "obliqua"
        fora.append((ori, L, brut, val, L / val, mena, seg))
    return fora


def es_regla_graduada(cs):
    """Una REGLA D'ESCALA (156a, 285*, 288*) marca 1, 2, 3 i 4 cm a intervals
    IGUALS: es una escala grafica, no un dibuix a escala. Comparar-hi les
    unitats per centimetre no vol dir res, i en sortien 9 falsos positius.
    Es reconeix perque diverses cotes fan exactament la mateixa llargada amb
    valors diferents."""
    iguals = collections.Counter(round(c[1], 1) for c in cs)
    return any(n >= 3 for n in iguals.values()) and len({c[3] for c in cs}) >= 3


FULLS_MULTIESCALA = {8}        # tot el full de semblanca i Tales
RETOLS_VISTA = ("base", "una cara")


def te_mes_d_una_vista(full, it):
    """Hi ha figures que contenen DOS objectes a escales diferents a proposit,
    i alla una discrepancia no es cap defecte:

      - TOT el full 8, que va de semblanca i de Tales: alla dues escales
        diferents son el tema de l'exercici, no un error. Dins d'un unic
        objecte si que hi hauria d'haver una sola escala, pero l'eina no sap
        separar els objectes, o sigui que no s'hi pronuncia;
      - els prismes 170c-i, que dibuixen la base a part, retolada "base",
        com una vista de detall.

    Vaig provar d'separar-ho agrupant les cotes per proximitat, i el llindar
    em va menjar quatre troballes bones (170b, 171, 176a, 176b), o sigui que
    ho decideixo amb un criteri explicit i no amb una distancia. Aquestes
    figures no es descarten: es reporten a part, perque la discrepancia s'ha
    de mirar igualment, pero sabent que probablement es volguda.
    """
    if full in FULLS_MULTIESCALA:
        return True
    return any(">%s<" % r in it["figura"] or ">%s</text>" % r in it["figura"]
               for r in RETOLS_VISTA)


def main():
    items = [(n, it) for n in sorted(TOTS) for it in TOTS[n] if it.get("figura")]
    incoherents, multiples = [], []
    mesurats = regles = 0
    for n, it in items:
        cs = cotes(it["figura"])
        frontals = [c for c in cs if c[0] in ("horitzontal", "vertical")]
        if len(frontals) < 2:
            continue
        if es_regla_graduada(frontals):
            regles += 1
            continue
        mesurats += 1
        esc = [c[4] for c in frontals]
        desv = max(esc) / min(esc)
        if desv > TOLERANCIA:
            (multiples if te_mes_d_una_vista(n, it) else incoherents).append(
                (n, it["id"], frontals, desv))
    print("regles d'escala grafica saltades: %d" % regles)
    print("figures amb 2+ cotes comparables: %d" % mesurats)
    print("amb escales incoherents entre cotes: %d\n" % len(incoherents))
    for n, i, cs, d in sorted(incoherents, key=lambda x: -x[3]):
        det = "  ".join("%s[%s]=%.0fu -> %.2f u/u" % (c[2], c[0][:4], c[1], c[4])
                        for c in cs)
        print("  full %-2s %-6s x%.2f   %s" % (n, i, d, det))

    print("\n--- figures amb mes d'una vista o objecte: %d ---" % len(multiples))
    print("    (tot el full 8, i les bases dibuixades a part als 170c-i)")
    print("    Dues escales hi poden ser volgudes. L'eina no sap separar els")
    print("    objectes, o sigui que no s'hi pronuncia: mireu-les a ma.")
    for n, i, cs, d in sorted(multiples, key=lambda x: -x[3]):
        print("  full %-2s %-6s x%.2f" % (n, i, d))


if __name__ == "__main__":
    main()
