# -*- coding: utf-8 -*-
"""El dibuix o l'encapcalament contradiuen les dades de l'exercici?

Quatre comprovacions:

  A  Dins d'UN mateix triangle, dues arestes etiquetades "3 cm" i "5 cm" han
     de mesurar unitats proporcionals a 3 i a 5.
  B  Quan la resposta es de si/no sobre semblanca, el dibuix no pot anar en
     direccio contraria.
  C  Quan l'encapcalament DECLARA que son semblants, el dibuix els ha de fer
     semblants.
  D  L'encapcalament no pot afirmar una propietat que la resposta nega.

La versio del diff-05 nomes tenia B, i se li escapaven 154b i 154c perque la
seva resposta es numerica, no de si/no. A i C ho tapen.

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

NUM = re.compile(r"^\s*([\d]+(?:[.,][\d]+)?)\s*(cm|mm|m|km|dm)\s*$")
DIST_MAXIMA = 30.0
FACTOR_DUBTE = 1.8
TOL_FORMA = 0.06


def _dist_punt_segment(p, a, b):
    (px, py), (ax, ay), (bx, by) = p, a, b
    dx, dy = bx - ax, by - ay
    den = dx * dx + dy * dy
    if den < 1e-9:
        return math.hypot(px - ax, py - ay)
    t = max(0.0, min(1.0, ((px - ax) * dx + (py - ay) * dy) / den))
    return math.hypot(px - (ax + t * dx), py - (ay + t * dy))


def _vertexs(svg):
    fora = []
    for p in re.findall(r'<polygon[^>]*points="([^"]+)"', svg):
        v = [float(x) for x in re.findall(r"-?\d+(?:\.\d+)?", p)]
        P = list(zip(v[0::2], v[1::2]))
        if len(P) == 3:
            fora.append(P)
    return fora


def _linies(svg):
    out = []
    for m in re.finditer(r'<line[^>]*x1="(-?[\d.]+)" y1="(-?[\d.]+)"'
                         r' x2="(-?[\d.]+)" y2="(-?[\d.]+)"', svg):
        a = (float(m.group(1)), float(m.group(2)))
        b = (float(m.group(3)), float(m.group(4)))
        if math.dist(a, b) >= 15:
            out.append((a, b))
    return out


def escales_dins_dun_triangle(svg):
    """Per a cada triangle, unitats de dibuix per unitat etiquetada a cada
    aresta que porti una etiqueta numerica.

    La comprovacio es simple i forta: dues arestes DEL MATEIX triangle
    etiquetades "3 cm" i "5 cm" han de mesurar, al viewBox, unitats
    proporcionals a 3 i a 5. Si no, el triangle no te la forma que diu.

    Les linies soltes (cotes, marques, alcades) entren com a candidates
    rivals: una etiqueta que en realitat pertany a una cota no s'ha
    d'assignar a cap aresta. Sense aquesta guarda, l'etiqueta d'una alcada
    dibuixada dins del triangle se l'enduia el costat mes proper.
    """
    etqs = []
    for m in re.finditer(
            r'<text[^>]*x="(-?[\d.]+)"[^>]*y="(-?[\d.]+)"[^>]*>([^<]*)</text>', svg):
        n = NUM.match(m.group(3))
        if n:
            etqs.append((float(m.group(1)), float(m.group(2)),
                         float(n.group(1).replace(",", ".")), m.group(3)))
    rivals = _linies(svg)
    fora = []
    for P in _vertexs(svg):
        arestes = [(P[i], P[(i + 1) % 3]) for i in range(3)]
        assign = []
        for ex, ey, val, brut in etqs:
            cands = [(_dist_punt_segment((ex, ey), a, b), "aresta", (a, b))
                     for a, b in arestes]
            cands += [(_dist_punt_segment((ex, ey), a, b), "linia", (a, b))
                      for a, b in rivals]
            cands.sort(key=lambda t: t[0])
            d, mena, seg = cands[0]
            if d > DIST_MAXIMA or mena != "aresta":
                continue
            altres = [c for c in cands[1:] if c[1] == "aresta"]
            if altres and altres[0][0] < d * FACTOR_DUBTE:
                continue                      # entre dues arestes, dubtos
            L = math.dist(seg[0], seg[1])
            if val > 0 and L > 1:
                assign.append((brut, L, L / val))
        if len(assign) >= 2:
            esc = [a[2] for a in assign]
            fora.append((assign, max(esc) / min(esc)))
    return fora


def afirma_semblants(it):
    h = it.get("encapcalament") or ""
    if re.search(r"determina si|digues si|comprova si|indica si", h, re.I):
        return False
    return bool(re.search(r"\bsemblants\b", h, re.I))

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


def encapcalament_nega_la_resposta(it):
    """L'encapcalament afirma una propietat que la resposta correcta nega.

    A 154d l'encapcalament diu "Calcula la longitud dels costats desconeguts
    en aquests parells de triangles SEMBLANTS", l'enunciat pregunta "Son
    semblants?" i la resposta correcta es "No". Com que cada item es carrega
    sol -- practica.html?full=8&q=154d, amb recarrega completa -- l'alumne
    llegeix l'encapcalament sencer abans de respondre.
    """
    h = it.get("encapcalament") or ""
    o = it["opcions"][it["ok"]].strip()
    if not o.startswith("No"):
        return None
    if re.search(r"determina si|digues si|comprova si|indica si", h, re.I):
        return None
    for w in ("semblants", "equivalents", "proporcionals"):
        if re.search(r"\b" + w + r"\b", h, re.I):
            return w
    return None


def main():
    items = [(n, it) for n in sorted(TOTS) for it in TOTS[n] if it.get("figura")]
    A, B, C, D = [], [], [], []
    n_pol = n_tri = 0
    for n, it in items:
        # --- A: forma dins d'un mateix triangle
        for assign, desv in escales_dins_dun_triangle(it["figura"]):
            n_tri += 1
            if desv > 1 + TOL_FORMA:
                A.append((n, it["id"], assign, desv))
        # --- B i C: relacio entre dos poligons
        pols = poligons(it["figura"])
        if len(pols) == 2 and len(pols[0]) == len(pols[1]):
            n_pol += 1
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
                B.append((n, it["id"], rel, k, motiu, pols))
            elif (afirma_semblants(it) and rel == "diferents"
                  and not encapcalament_nega_la_resposta(it)):
                # si l'encapcalament ja es contradiu amb la resposta, el cas
                # es de la comprovacio D: alli el dolent es l'encapcalament,
                # no el dibuix, i reportar-ho dos cops despista.
                C.append((n, it["id"], pols))
        # --- D: l'encapcalament nega la resposta
        w = encapcalament_nega_la_resposta(it)
        if w:
            D.append((n, it["id"], w, it.get("encapcalament"), it["opcions"][it["ok"]]))

    print("A. FORMA DINS D'UN TRIANGLE  (%d triangles amb 2+ costats etiquetats)" % n_tri)
    print("   les raons dibuixades no son les etiquetades: %d\n" % len(A))
    for n, i, assign, d in sorted(A, key=lambda x: -x[3]):
        det = "   ".join("%s = %.0fu (%.1f u/cm)" % a for a in assign)
        print("   full %-2s %-6s x%.2f   %s" % (n, i, d, det))

    print("\nB. DIBUIX CONTRA RESPOSTA DE SI/NO  (%d parells de poligons)" % n_pol)
    print("   contradiccions: %d\n" % len(B))
    for n, i, rel, k, motiu, pols in B:
        print("   full %-2s %-6s  dibuixats %s (factor %.3f)" % (n, i, rel, k or 0))
        print("      %s" % motiu)

    print("\nC. L'ENCAPCALAMENT ELS DECLARA SEMBLANTS I EL DIBUIX NO HO SON")
    print("   casos: %d\n" % len(C))
    for n, i, pols in C:
        r = [round(p[-1] / p[0], 2) for p in pols]
        print("   full %-2s %-6s  formes dibuixades %s" % (n, i, r))

    print("\nD. L'ENCAPCALAMENT AFIRMA EL QUE LA RESPOSTA NEGA")
    print("   casos: %d\n" % len(D))
    for n, i, w, h, o in D:
        print("   full %-2s %-6s  «%s»" % (n, i, w))
        print("      encapcalament: %s" % (h or "")[:74])
        print("      resposta     : %s" % o[:74])


if __name__ == "__main__":
    main()
