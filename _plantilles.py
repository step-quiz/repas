# -*- coding: utf-8 -*-
"""Busca figures que son una PLANTILLA FIXA amb els numeros enganxats a sobre.

Si dues figures tenen la geometria EXACTAMENT igual pero etiquetes diferents,
el dibuix no pot representar les dades de totes dues. Un cilindre de 12 m x
5 m i un de 6 cm x 9 cm no poden ser el mateix dibuix.

Ara be, no tota reutilitzacio es dolenta, i la diferencia importa:

  LEGITIM   La forma no depen de la mida: un tetraedre regular d'aresta 3 cm
            i un de 9 cm tenen la mateixa forma, nomes canvia l'escala, que
            en un esquema es arbitraria. Igual per a un hexagon regular.
            Tambe es legitim si les DUES figures tenen la mateixa rao entre
            les seves mesures.

  DEFECTE   Les mesures etiquetades donen raons diferents. Aleshores el
            dibuix menteix com a minim en un dels dos casos, i a la practica
            sol mentir en tots dos, perque la plantilla te una rao fixa que
            no es la de ningu.

El programa separa els dos casos: nomes els del segon grup s'han de mirar.

FORAT CONEGUT -- fes servir _cotes.py per tapar-lo
--------------------------------------------------
Aqui es comparen els VALORS de les etiquetes, sense saber que mesura
cadascuna. A 193a les dues diuen "10 cm": rao 1,00, i el programa el dona
per bo. Pero una es el RADI i l'altra l'ALTURA, o sigui que la rao que
importa (diametre contra altura) es 2:1 i el dibuix la posa a 1:1. El mateix
passa a 193b i a 195c.

_cotes.py no cau en aixo perque mesura la linia de cota que porta cada
etiqueta en comptes de llegir-ne nomes el numero. Passa els dos programes:
aquest troba la reutilitzacio de plantilla entre figures, i l'altre la
incoherencia d'escala dins d'una figura.
"""
import collections
import re
import sys

sys.path.insert(0, "tests")
from comu import TOTS

MESURA = re.compile(r"^\s*([\d]+(?:[.,][\d]+)?)\s*(?:cm|mm|m|km|dm)\s*$")


def geometria(svg):
    """Totes les coordenades del dibuix, sense textos ni titol."""
    cos = re.sub(r"<text.*?</text>", "", svg, flags=re.S)
    cos = re.sub(r"<title.*?</title>", "", cos, flags=re.S)
    trossos = re.findall(r'(?:points|d)="([^"]+)"', cos)
    trossos += ["|".join(m) for m in re.findall(
        r'<ellipse[^>]*cx="([-\d.]+)"[^>]*cy="([-\d.]+)"'
        r'[^>]*rx="([\d.]+)"[^>]*ry="([\d.]+)"', cos)]
    trossos += ["|".join(m) for m in re.findall(
        r'<line[^>]*x1="([-\d.]+)" y1="([-\d.]+)"'
        r' x2="([-\d.]+)" y2="([-\d.]+)"', cos)]
    return "\n".join(trossos)


def etiquetes(svg):
    return tuple(re.findall(r'class="fig-etq[^"]*">([^<]*)</text>', svg))


def mesures(svg):
    out = []
    for e in etiquetes(svg):
        m = MESURA.match(e)
        if m:
            out.append(float(m.group(1).replace(",", ".")))
    return out


def main():
    items = [(n, it) for n in sorted(TOTS) for it in TOTS[n] if it.get("figura")]
    grups = collections.defaultdict(list)
    for n, it in items:
        grups[geometria(it["figura"])].append(
            (n, it["id"], etiquetes(it["figura"]), mesures(it["figura"])))

    defecte, legitim, sense_dades = [], [], []
    for v in grups.values():
        if len(v) < 2 or len(set(x[2] for x in v)) < 2:
            continue                       # unic, o be el mateix item repetit
        raons = [(i, round(max(ms[:2]) / min(ms[:2]), 3))
                 for _, i, _, ms in v if len(ms) >= 2]
        if len(raons) < 2:
            sense_dades.append(v)          # no hi ha prou mesures per decidir
        elif len(set(r for _, r in raons)) > 1:
            defecte.append((v, raons))
        else:
            legitim.append((v, raons))

    print("=== MATEIX DIBUIX, PROPORCIONS DIFERENTS (el dibuix menteix) ===\n")
    tot = 0
    for v, raons in defecte:
        tot += len(v)
        print("  %s" % [i for _, i, _, _ in v])
        print("      raons etiquetades: %s" % raons)
    print("\n  -> %d items\n" % tot)

    print("=== MATEIX DIBUIX, MATEIXA PROPORCIO (correcte) ===")
    for v, raons in legitim:
        print("  %s  rao %s" % ([i for _, i, _, _ in v], raons[0][1]))

    print("\n=== MATEIX DIBUIX, SENSE PROU MESURES PER DECIDIR ===")
    print("    (forma invariant d'escala, o etiquetes simboliques com 'x', 'r')")
    print("    NO vol dir correcte: vol dir no comprovat.")
    for v in sense_dades:
        print("  %s  etiquetes %s"
              % ([i for _, i, _, _ in v], [list(x[2]) for x in v]))


if __name__ == "__main__":
    main()
