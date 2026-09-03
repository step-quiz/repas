# -*- coding: utf-8 -*-
"""L'etiqueta i la marca vermella son on toca?

Dues comprovacions que van sortir revisant el full 8:

  A  Una etiqueta numerica plantada a la cota d'un altre objecte.
  B  La linia vermella marca una cosa diferent de la que l'exercici pregunta.

TOTES DUES VAN NEIXER COM UNA IDEA PITJOR
-----------------------------------------
La primera versio d'A mesurava la SEPARACIO entre caixes d'etiqueta i
reportava les mes properes. Sortien quatre parells del bloc aplicacions
separats per 1 a 5 unitats, i no hi havia manera de dir quins eren un
defecte i quins nomes atapeits. Un llindar de proximitat no distingeix "va
just" de "va malament".

La formulacio bona no te llindar: una linia de cota nomes pot mesurar UNA
cosa. Si dues etiquetes numeriques resolen a la mateixa linia I a la figura
hi ha una altra linia de mesura sense cap etiqueta, l'etiqueta sobrant es a
la linia equivocada. A 169 «52,5 m», que es l'alcada de l'edifici, va a la
cota de 22 u de l'home, i la cota de 48 u de l'edifici es queda buida.

La primera versio de B reportava les marques vermelles sense cap etiqueta a
prop: 28 de 64, i la majoria eren correctes (una diagonal marcada no ha de
portar etiqueta si el que es demana es justament la seva llargada). La
formulacio bona compara: si la figura te una etiqueta «x», la marca hauria
de ser la linia mes propera a la «x». Aixi surten nomes les cinc de Tales,
on el vermell marca una de les dues paral·leles i la incognita es en una
altra banda.

UN LLINDAR QUE SI QUE IMPORTA
-----------------------------
_cotes.py descarta les linies de menys de 20 u perque a les cotes normals
aixo son les puntes. Aqui cal baixar-ho a 15: l'alcada de l'Anna a 166 es
una cota de 17,0 u, i amb el llindar de 20 quedava fora i «1,7 m» anava a
parar a la cota horitzontal. 166 sortia com a defecte i no ho es. La de 169
en fa 21,9, i per aixo aquella si que es conservava.
"""
import collections
import math
import re
import sys

sys.path.insert(0, "tools")
sys.path.insert(0, "tests")
import _cotes as C
from comu import TOTS

LLARG_MINIM = 15.0             # veure la nota de dalt sobre 166


def _linies_dibuix(svg):
    """Linies estructurals (no de cota), amb la marca identificada."""
    out = []
    for m in re.finditer(r"<line[^>]*>", svg):
        if "fig-cota" in m.group(0):
            continue
        c = [float(v) for v in re.findall(r'(?:x1|y1|x2|y2)="(-?[\d.]+)"', m.group(0))]
        if len(c) != 4:
            continue
        out.append((((c[0], c[1]), (c[2], c[3])), "fig-marca" in m.group(0)))
    return out


def etiqueta_a_la_cota_equivocada(it):
    """-> (etiquetes_duplicades, llargades_de_les_linies_orfenes) o None"""
    cs = C.cotes(it["figura"])
    if not cs:
        return None
    per = collections.defaultdict(list)
    for c in cs:
        per[c[6]].append(c[2])
    dobles = [e for s, e in per.items() if len(e) > 1]
    if not dobles:
        return None
    totes = C._linies(it["figura"], True)
    mesura = [s for s in totes
              if s[2] >= C.LLARG_MINIM and C._es_linia_de_mesura(s, totes)]
    orfes = [round(s[2]) for s in mesura if s not in per]
    if not orfes:
        return None                # cap linia lliure: l'assignacio es dubtosa
    return dobles, orfes


def marca_fora_de_la_incognita(it):
    """-> (dist_marca, dist_linia_normal) o None"""
    svg = it["figura"]
    incog = [(float(m.group(1)), float(m.group(2))) for m in re.finditer(
        r'<text[^>]*x="(-?[\d.]+)"[^>]*y="(-?[\d.]+)"[^>]*>\s*x\s*</text>', svg)]
    linies = _linies_dibuix(svg)
    roges = [s for s, r in linies if r]
    if not incog or not roges:
        return None
    p = incog[0]
    d = lambda s: C._dist_punt_segment(p, s[0], s[1])
    prop = min((s for s, _ in linies), key=d)
    if prop in roges:
        return None
    return min(d(r) for r in roges), d(prop)


def main():
    # _cotes.LLARG_MINIM es una variable de modul: si es canvia i prou, queda
    # canviada per a qualsevol altre que importi _cotes despres. Es guarda i
    # es torna a deixar com estava.
    anterior = C.LLARG_MINIM
    C.LLARG_MINIM = LLARG_MINIM
    try:
        _informe()
    finally:
        C.LLARG_MINIM = anterior


def _informe():
    items = [(n, it) for n in sorted(TOTS) for it in TOTS[n] if it.get("figura")]
    A, B = [], []
    for n, it in items:
        r = etiqueta_a_la_cota_equivocada(it)
        if r:
            A.append((n, it["id"]) + r)
        r = marca_fora_de_la_incognita(it)
        if r:
            B.append((n, it["id"]) + r)

    print("figures analitzades: %d\n" % len(items))
    print("A. ETIQUETA A LA COTA D'UN ALTRE OBJECTE: %d\n" % len(A))
    for n, i, dobles, orfes in A:
        print("   full %-2s %-6s  a la mateixa linia: %s" % (n, i, dobles))
        print("      linies de mesura sense cap etiqueta: %s u" % orfes)
    if not A:
        print("   cap")

    print("\nB. LA MARCA VERMELLA NO ES LA LINIA MES PROPERA A LA «x»: %d\n" % len(B))
    for n, i, dm, dn in B:
        print("   full %-2s %-6s  marca a %.0f u de la «x», pero hi ha una linia"
              " sense marcar a %.0f u" % (n, i, dm, dn))
    if not B:
        print("   cap")


if __name__ == "__main__":
    main()
