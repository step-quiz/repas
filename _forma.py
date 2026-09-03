# -*- coding: utf-8 -*-
"""La forma que dibuixa la figura es la que anomena l'enunciat?

D'on surt: a 293b l'enunciat diu "Dues ESFERES semblants tenen volums de 8 i
216 cm3" i la figura dibuixa dos CUBS. A 293a diu "Dos TRIANGLES" i en dibuixa
dos QUADRATS. Son traçables: 293a comparteix dibuix byte a byte amb 291b, que
va de quadrats, i 293b amb 292b, que va de cubs. El generador reutilitza la
plantilla "dues figures semblants" sense mirar quina forma anomena el text.

Ni l'auditor ni les mesures ho poden veure: la figura esta ben dibuixada, ben
etiquetada i a la escala correcta. Nomes es un cub on hauria d'haver-hi una
esfera.

COM HO FA
---------
El <title> de cada SVG descriu el que s'hi dibuixa ("dos cubs", "dos
quadrats"). L'enunciat descriu el que s'hi hauria de veure. Es comparen els
noms de forma que apareixen a l'un i a l'altre, i es reporta quan els dos
conjunts no tenen res en comu.

LIMITS
------
* Nomes salta si TOTS DOS textos anomenen alguna forma. Un enunciat que diu
  "aquesta figura" sense mes no es pot comprovar.
* No entén sinonims ni jerarquies: un "rombe" dibuixat per a un "quadrat"
  saltaria, i un "poligon" per a un "hexagon" no.
* Un enunciat pot anomenar una forma que surt al problema pero no a la
  figura (p.ex. parlar d'una piscina rectangular i dibuixar-ne la seccio).
  Per aixo la sortida s'ha de repassar; a la practica en surten dos i tots
  dos son de debo.
"""
import re
import sys

sys.path.insert(0, "tests")
from comu import TOTS

FORMES = {
    r"esfer": "esfera", r"cubs?\b": "cub", r"triangl": "triangle",
    r"quadrat": "quadrat", r"rectangl": "rectangle", r"cercle": "cercle",
    r"circumfer": "cercle", r"cilindr": "cilindre", r"cons?\b": "con",
    r"prisma": "prisma", r"piràmide": "piràmide", r"hexàgon": "hexàgon",
    r"octàgon": "octàgon", r"pentàgon": "pentàgon", r"trapezi": "trapezi",
    r"rombe": "rombe", r"tetraedre": "tetraedre", r"ortoedre": "ortoedre",
}


def formes(text):
    """Les claus son expressions amb frontera de paraula.

    La primera versio buscava la subcadena "con recte" per detectar un con, i
    aixi "Un con te 4 cm de radi" no comptava: 188 sortia com si la figura
    dibuixes un con on l'enunciat demana un cercle, quan l'enunciat diu totes
    dues coses i es correcte. Amb "cons?\\b" ja hi encaixa. La mateixa cura
    cal amb "cub", que altrament apareix dins de "cubic".
    """
    t = text.lower()
    return {v for k, v in FORMES.items() if re.search(r"\b" + k, t)}


def main():
    items = [(n, it) for n in sorted(TOTS) for it in TOTS[n] if it.get("figura")]
    xocs = []
    comprovats = 0
    for n, it in items:
        m = re.search(r"<title[^>]*>(.*?)</title>", it["figura"], re.S)
        if not m:
            continue
        f_fig, f_txt = formes(m.group(1)), formes(it["enunciat"])
        if not f_fig or not f_txt:
            continue
        comprovats += 1
        if not (f_fig & f_txt):
            xocs.append((n, it["id"], sorted(f_fig), sorted(f_txt),
                         m.group(1), it["enunciat"]))
    print("figures al banc: %d" % len(items))
    print("amb forma anomenada al <title> I a l'enunciat: %d" % comprovats)
    print("on les formes no coincideixen: %d\n" % len(xocs))
    for n, i, ff, ft, titol, enun in xocs:
        print("  full %-2s %-6s" % (n, i))
        print("     figura   : %s   <- %s" % (ff, titol[:62]))
        print("     enunciat : %s   <- %s" % (ft, enun[:62]))
    if not xocs:
        print("  cap")


if __name__ == "__main__":
    main()
