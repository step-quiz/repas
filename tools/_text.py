# -*- coding: utf-8 -*-
"""Dos defectes de text que no depenen de cap figura.

  A  Comandes de LaTeX escrites FORA de $...$. Es renderitzen com a text
     literal, i si no hi ha espais on trencar, la linia se surt de la
     targeta.
  B  Demostratius que apunten a una figura que l'item no te.

Tots dos van sortir del full 11, i tots dos son barats: llegeixen el banc i
no renderitzen res.

D'ON SURT A
-----------
L'item 264 escriu la llista de dades aixi, sense cap $:

    37,\\;37,\\;37,\\;37,\\;37,\\;38,\\;38,\\;...

Els \\; son ordres d'espaiat de LaTeX. Fora de $...$ KaTeX no els toca i
surten tal qual. Pitjor: com que no hi ha cap espai de debo entre els
numeros, el navegador no te on trencar la linia, i la targeta creix fins a
880 px quan la columna en fa 704. Es l'unic item del banc que vessa, i la
capa 2 de la galeria el va enxampar; aquesta comprovacio l'hauria trobat
sense haver de renderitzar res.

D'ON SURT B
-----------
El bloc `grafics` del full 11 te 14 items sobre llegir diagrames de barres,
poligons de frequencies i histogrames, i CAP figura: les dades van descrites
entre parentesis. Cinc d'ells hi apunten igualment amb un demostratiu:

    "Observa aquest poligon de frequencies (amb els punts (1,3), (2,5)...)"
    "Construeix la taula a partir del poligon de frequencies seguent"

L'exercici es responible, perque les dades hi son, pero el text promet una
imatge que no arriba.
"""
import collections
import re
import sys

sys.path.insert(0, "tests")
from comu import TOTS

# ordres de LaTeX que nomes tenen sentit dins de $...$
ORDRES = re.compile(r"\\(;|,|:|!|dfrac|frac|sqrt|cdot|times|overline|text"
                    r"|mathbb|infty|approx|neq|leq|geq|left|right|square)")
NOMS_FIGURA = r"(polígon|diagrama|gràfic|gràfica|histograma|figura|dibuix|esquema)"
DEIXI = [
    re.compile(r"aquest\w*\s+" + NOMS_FIGURA, re.I),
    re.compile(NOMS_FIGURA + r"\s+(següent|anterior)", re.I),
    re.compile(r"(observa|mira|fixa't en)\s+(el|la|els|les)\s+" + NOMS_FIGURA, re.I),
]


def fora_de_formula(t):
    """El text amb els trams $...$ buidats."""
    return re.sub(r"\$[^$]*\$", " ", t)


def main():
    items = [(n, it) for n in sorted(TOTS) for it in TOTS[n]]
    A, B = [], []
    for n, it in items:
        for camp in ("enunciat", "encapcalament"):
            t = it.get(camp) or ""
            fora = fora_de_formula(t)
            m = ORDRES.search(fora)
            if m:
                A.append((n, it["id"], camp, m.group(0), fora.strip()[:70]))
        if not it.get("figura"):
            t = (it.get("encapcalament") or "") + " " + it["enunciat"]
            for p in DEIXI:
                m = p.search(t)
                if m:
                    B.append((n, it["id"], m.group(0)))
                    break

    print("ítems al banc: %d\n" % len(items))

    print("A. ORDRES DE LATEX FORA DE $...$: %d\n" % len(A))
    for n, i, camp, ordre, frag in A:
        print("   full %-2s %-6s [%s] «%s»" % (n, i, camp, ordre))
        print("      %s" % frag)
    if not A:
        print("   cap")

    print("\nB. APUNTEN A UNA FIGURA QUE NO HI ÉS: %d\n" % len(B))
    per = collections.defaultdict(list)
    for n, i, frag in B:
        per[(n, frag.lower())].append(i)
    for (n, frag), ids in sorted(per.items()):
        print("   full %-2s «%s»  →  %s" % (n, frag, " ".join(ids)))
    if not B:
        print("   cap")


if __name__ == "__main__":
    main()
