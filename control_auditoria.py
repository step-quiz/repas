# -*- coding: utf-8 -*-
"""Bateria de control de l'auditoria.

Despres d'afegir exempcions (capes de marc, quadricula, cotes, crides,
etiquetes de nom) cal comprovar que l'instrument encara mesura. Cada cas
injecta un defecte conegut i n'espera la deteccio; els dos ultims son
casos que s'han de TOLERAR.
"""
import sys

sys.path.append("/home/claude")
from auditoria import audita

CAP = ('<svg class="figura" viewBox="0 0 240 160" role="img" '
       'xmlns="http://www.w3.org/2000/svg"><title>Control.</title>')
FI = "</svg>"


def svg(cos):
    return CAP + cos + FI


LINIA = ('<line x1="30" y1="80" x2="210" y2="80" stroke="currentColor" '
         'stroke-width="2"/>')
VERTICAL = ('<line x1="120" y1="20" x2="120" y2="140" stroke="currentColor" '
            'stroke-width="2"/>')


def etq(x, y, txt, cls="fig-etq"):
    return ('<text x="%s" y="%s" text-anchor="middle" class="%s">%s</text>'
            % (x, y, cls, txt))


casos = [
    ("mesura damunt d'un trac",
     svg(LINIA + etq(120, 80, "5 cm")), "COL", True),
    ("mesura damunt d'un EIX",
     svg('<line class="fig-eix" x1="30" y1="80" x2="210" y2="80" '
         'stroke="currentColor" stroke-width="1.1"/>' + etq(120, 80, "5 cm")),
     "COL", True),
    ("nom damunt d'un trac",
     svg(LINIA + etq(120, 80, "V", "fig-etq fig-etq-nom")), "COL", True),
    ("etiqueta de marc damunt d'un trac",
     svg(LINIA + etq(120, 80, "-2", "fig-etq petita fig-etq-marc")),
     "COL", True),
    ("dues etiquetes que es trepitgen",
     svg(LINIA + etq(120, 60, "aaaa") + etq(126, 62, "bbbb")), "SOLAP", True),
    ("etiqueta fora del viewBox",
     svg(LINIA + etq(6, 80, "12345 cm")), "FORA", True),
    ("mesura despenjada de tot",
     svg(LINIA + etq(120, 20, "5 cm")), "ORFE", True),
    ("mesura equidistant de dos tracos",
     svg(LINIA + VERTICAL + etq(150, 62, "5 cm")), "AMBIG", True),
    # --- casos que s'han de TOLERAR
    ("text damunt la quadricula",
     svg('<line class="fig-graella" x1="30" y1="80" x2="210" y2="80" '
         'stroke="currentColor" stroke-width="0.5" opacity="0.18"/>'
         + LINIA.replace('y1="80"', 'y1="98"').replace('y2="80"', 'y2="98"')
         + etq(120, 80, "5 cm")), None, False),
    ("nom entre dos tracos (no mesura res)",
     svg(LINIA + VERTICAL + etq(150, 62, "V", "fig-etq fig-etq-nom")),
     None, False),
]

ok = 0
for nom, s, esperat, ha_de_sortir in casos:
    probs = audita(s)
    tipus = {p[0] for p in probs}
    if ha_de_sortir:
        passa = esperat in tipus
    else:
        passa = not probs
    ok += passa
    print("%-42s %-6s -> %-28s %s"
          % (nom, esperat or "(tolerar)", sorted(tipus) or "cap",
             "OK" if passa else "FALLA"))
print("\n%d/%d" % (ok, len(casos)))
sys.exit(0 if ok == len(casos) else 1)
