# -*- coding: utf-8 -*-
"""tax/tax_trivials.py — etiquetes que demanen els exercicis de nivell trivial.

Les tres que no tenien equivalent entre les 253 del catàleg. Totes tres
comparteixen una forma que abans no calia nomenar: a un exercici trivial, on
no hi ha passos on perdre's, l'error típic ja no és de càlcul sinó de
LECTURA — respondre una pregunta veïna a la que s'ha fet. Aquests distractors
no valen res si no es diuen amb aquestes paraules, perquè el que ha fallat no
és el procediment.

El text és genèric i sense números: el llegeix l'alumne al panell «els errors
que repeteixes», on s'hi agreguen errors de diversos exercicis. El diagnòstic
amb els números concrets va al `D()` de cada ítem.
"""

TAX = {
    "PRIMER_TERME_PER_DIFERENCIA":
        "Has donat el primer terme de la progressió, no la diferència. La "
        "diferència $d$ és el que se suma per passar d'un terme al següent: "
        "resta dos termes consecutius i la tindràs.",

    "HIPOTENUSA_PER_AREA":
        "Has calculat la hipotenusa, i el que es demanava era l'àrea. Torna "
        "a llegir la pregunta abans de començar: quan un triangle rectangle "
        "té els dos catets donats, ja els tens fets de base i altura i no "
        "cal cap Pitàgores.",

    "PERIMETRE_PER_AREA":
        "Has sumat els costats: això és el perímetre, no l'àrea. El perímetre "
        "és el que fa la vora i es mesura en cm o m; l'àrea és la superfície "
        "de dins i es mesura en cm² o m².",
}
