# -*- coding: utf-8 -*-
"""tax/tax_probabilitat.py — etiquetes d'error de la via «tarr».

Afegeix-hi les que necessitis. El text ha de ser GENÈRIC i sense números d'un
exercici concret: aquest text el llegeix l'alumne al panell «els errors que
repeteixes», on s'hi agreguen errors de diversos exercicis. El diagnòstic amb
els números concrets va al `D()` de cada ítem.

Si el nom que vols posar ja existeix a un altre mòdul amb un text diferent, la
compilació s'aturarà i et dirà on és. Reanomena'n un.
"""

TAX = {
    "INDEPENDENCIA_SUPOSADA_SENSE_MOTIU":
        "Multiplicar directament les dues probabilitats només val quan "
        "els esdeveniments són INDEPENDENTS (amb reposició, o dos "
        "experiments que no s'afecten). Si el segon depèn del que ha "
        "passat al primer (per exemple, sense reposar l'element "
        "extret), cal fer servir la probabilitat CONDICIONADA del "
        "segon esdeveniment, no la de partida.",
    "REEMPLACAMENT_MAL_CONSIDERAT":
        "Quan un element no es reposa, el nombre total de casos "
        "disminueix a la segona extracció (i el nombre de casos "
        "favorables, si l'element triat n'era un). Revisa si "
        "l'enunciat diu que es reposa o no abans de decidir el "
        "denominador de la segona branca.",
    "BRANCA_ARBRE_MAL_CALCULADA":
        "Les probabilitats de totes les branques que surten d'un "
        "mateix node han de sumar $1$. Si en falta una, es calcula "
        "restant les altres de $1$, no sumant-les ni deixant-la igual "
        "que una branca veïna.",
    "CAMI_ARBRE_MAL_MULTIPLICAT":
        "La probabilitat d'arribar al final d'un camí de l'arbre és "
        "el PRODUCTE de les probabilitats de totes les branques que el "
        "formen, no la suma ni només la de l'última branca.",
    "COMPLEMENT_ALMENYS_UN_MAL":
        "\"Almenys un\" es calcula com $1-P(\\text{cap})$, on "
        "$P(\\text{cap})$ és la probabilitat que NO passi cap vegada. "
        "No és el mateix que sumar les probabilitats de cada intent "
        "per separat, ni que multiplicar la probabilitat d'un sol "
        "èxit pel nombre d'intents.",
    "CONDICIONADA_I_CONJUNTA_CONFOSES":
        "$P(A\\text{ i }B)$ (la intersecció, sobre el total de casos) "
        "i $P(B|A)$ (sobre els casos que ja compleixen $A$) responen "
        "preguntes diferents i normalment donen nombres diferents: "
        "revisa si et demanen la proporció sobre TOT o només sobre un "
        "grup ja fixat.",
    "ASIMETRIA_CONDICIONADA_MAL": (
        "$P(B|A)$ i $P(A|B)$ es calculen sobre denominadors diferents "
        "($A$ en un cas, $B$ en l'altre) i en general no valen el "
        "mateix. Que un dels dos sigui una probabilitat alta no vol "
        "dir que l'invers també ho sigui."),
    "ORDRE_NO_DEMANAT":
        "Has comptat els dos ordres possibles quan l'enunciat en demana un "
        "de concret. Cada camí de l'arbre és una seqüència: (V,B) i (B,V) "
        "són dos camins diferents, i sumar-los només val si la pregunta no "
        "distingeix l'ordre.",
}
