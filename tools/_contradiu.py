# -*- coding: utf-8 -*-
"""El dibuix contradiu la resposta de l'exercici?

D'on surt: a 155a l'exercici pregunta "son semblants?", la resposta correcta
es "No, perque les raons 5/4 i 6/5 no coincideixen", i la figura dibuixa dos
triangles EXACTAMENT semblants: el segon es el primer multiplicat per 1,222 a
tots els costats. Qui raoni mirant la figura contesta "si", i les dues opcions
"Si" hi son. Passa igual a 155b i a 155c.

A 154a la cosa va al reves: l'enunciat parla d'un triangle petit i un de gran
amb k=4/3, i els dos poligons del dibuix son IDENTICS.

L'origen es un triangle base fix, [79,7 87,5 90,0], que es reutilitza escalat
sense mirar les mides etiquetades.

Aquesta es la comprovacio mes valuosa de totes les que he escrit, perque no
mira si la figura es maca ni si cap al marc: mira si diu la veritat.

COM HO FA
---------
Busca figures amb exactament DOS poligons del mateix nombre de vertexs,
compara les llargades ordenades dels costats i mira si l'un es l'altre
multiplicat per un factor constant. Despres ho contrasta amb el que afirma
l'opcio correcta.

LIMITS
------
* Nomes serveix per a figures amb dos poligons comparables. Els cossos en
  perspectiva (cubs dibuixats amb sis cares) queden fora, i tambe les
  figures amb cercles o el·lipses.
* Que dos poligons es dibuixin semblants no sempre es un error: si la
  resposta ES que son semblants, el dibuix fa be de mostrar-ho. Nomes es
  reporta quan el dibuix i la resposta van en direccions contraries.
* No sap llegir tots els enunciats. Si no reconeix que afirma la resposta,
  ho diu i no es pronuncia.
"""
import math
import re
import sys

sys.path.insert(0, "tests")
from comu import TOTS

TOL_SEMBLANTS = 0.03           # 3 % de variacio entre factors d'escala
TOL_CONGRUENTS = 0.02


def poligons(svg):
    fora = []
    for p in re.findall(r'<polygon[^>]*points="([^"]+)"', svg):
        v = [float(x) for x in re.findall(r"-?\d+(?:\.\d+)?", p)]
        P = list(zip(v[0::2], v[1::2]))
        if len(P) >= 3:
            fora.append(sorted(math.dist(P[i], P[(i + 1) % len(P)])
                               for i in range(len(P))))
    return fora


def relacio(a, b):
    """-> ('congruents'|'semblants'|'diferents', factor)"""
    if len(a) != len(b):
        return "diferents", None
    factors = [y / x for x, y in zip(a, b) if x > 0]
    if not factors:
        return "diferents", None
    k = sum(factors) / len(factors)
    if max(factors) / min(factors) > 1 + TOL_SEMBLANTS:
        return "diferents", k
    if abs(k - 1) <= TOL_CONGRUENTS:
        return "congruents", k
    return "semblants", k


def que_diu_la_resposta(it):
    """-> 'si' | 'no' | 'dubte' | None"""
    o = it["opcions"][it["ok"]].strip()
    if o.startswith("Sí"):
        return "si"
    if o.startswith("No es pot") or o.startswith("No es podria"):
        return "dubte"
    if o.startswith("No"):
        return "no"
    return None


def main():
    items = [(n, it) for n in sorted(TOTS) for it in TOTS[n] if it.get("figura")]
    xocs, comprovats = [], 0
    for n, it in items:
        pols = poligons(it["figura"])
        if len(pols) != 2 or len(pols[0]) != len(pols[1]):
            continue
        comprovats += 1
        rel, k = relacio(pols[0], pols[1])
        diu = que_diu_la_resposta(it)
        motiu = None
        if diu == "no" and rel in ("semblants", "congruents"):
            motiu = "la resposta diu que NO son semblants i el dibuix els fa semblants"
        elif diu == "si" and rel == "diferents":
            motiu = "la resposta diu que SI i el dibuix els fa diferents"
        elif diu == "dubte" and rel == "semblants":
            motiu = "la resposta diu que no es pot assegurar i el dibuix els fa semblants"
        elif diu is None and rel == "congruents" and re.search(
                r"petit|gran|maqueta|redu", it["enunciat"], re.I):
            motiu = "l'enunciat parla de gran i petit i el dibuix els fa iguals"
        if motiu:
            xocs.append((n, it["id"], rel, k, motiu, pols))
    print("figures amb dos poligons comparables: %d" % comprovats)
    print("on el dibuix contradiu la resposta: %d\n" % len(xocs))
    for n, i, rel, k, motiu, pols in xocs:
        print("  full %-2s %-6s  dibuixats %s (factor %.3f)" % (n, i, rel, k or 0))
        print("     %s" % motiu)
        print("     A %s" % [round(x, 1) for x in pols[0]])
        print("     B %s" % [round(x, 1) for x in pols[1]])
    if not xocs:
        print("  cap")


if __name__ == "__main__":
    main()
