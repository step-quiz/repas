# -*- coding: utf-8 -*-
"""c_probabilitat.py — Full 12: Combinatòria i probabilitat.

Genera els ítems dels exercicis 236-259, que corresponen a `im13.tex` del
repositori LaTeX font. Organitzats en 4 blocs:
  espais_mostrals  (236-240)         espai mostral d'un experiment
                                      aleatori, esdeveniments elementals,
                                      impossibles, i comparació de
                                      probabilitats sense calcular-les
  combinatoria     (242-248)         principi multiplicatiu, diagrames
                                      d'arbre, i comptar variacions sense
                                      repetició (paraules amb HOLA)
  laplace          (241, 249-252)    regla de Laplace, freqüència
                                      relativa i llei dels grans nombres
  esdeveniments    (253-259)         esdeveniments compatibles/
                                      incompatibles/contraris, unió i
                                      intersecció, probabilitat
                                      condicionada senzilla i problemes
                                      combinats

Recompte: 24 exercicis / 61 ítems bruts (comptant \\item dins d'apartats;
un exercici sense apartats compta 1). El total real del full és 67: quatre
exercicis amaguen més subpreguntes de les que compta el parser i es
desdoblen en subítems —249 (2->4), 252 (2->3), 253 (3->5) i 256 (2->3)—,
el patró d'"ítems amagats" descrit a AUTHORING-GUIDE.md. Cap exclusió: les
il·lustracions d'aquest full (daus, moneda, claus...) són decoratives i no
aporten cap dada que no sigui ja al text.

Dos exercicis necessiten una decisió explícita, ja documentada al mateix
`im13.tex`/`r-im13.tex`:
  - Exercici 240: els apartats c) i d) repeteixen literalment el mateix
    enunciat, «Nombre més petit que 7» (errata editorial molt probable,
    ja que un dau de l'1 al 6 no permet cap altre matís interessant amb
    aquest text). Es couen tal com apareixen: el 240d es converteix en
    una pregunta idèntica en contingut al 240c, ambdues amb resposta
    P=1. No es fusionen ni s'exclou cap dels dos, per mantenir la
    numeració d'apartats consistent amb l'original.
  - Exercici 243: l'enunciat no precisa com s'agrupa la roba en una
    "combinació"; s'adopta el mateix criteri que `r-im13.tex` (tres
    nivells: peça de baix, peça de dalt, barret), documentat amb
    `nota=` a l'ítem corresponent.

Cap resposta s'escriu a mà: cada resultat (espais mostrals, principi
multiplicatiu, combinacions, freqüències relatives i probabilitats de
Laplace) s'ha calculat de manera independent (aritmètica exacta amb
`fractions.Fraction`, i `math.comb` per als recomptes combinatoris) i
s'ha contrastat contra `r-im13.tex` (el solucionari LaTeX subministrat)
sense trobar-hi cap discrepància.
"""
from fractions import Fraction as F
from math import comb
from lib import Q, D, DT, tex, TAX, dificultats, blocs
from figures import arbre, taula_doble

# --------------------------------------------------------------------
# Dificultat de cada exercici (1 directa, 2 encadenada, 3 completa).
# Full 12 · probabilitat
# Vegeu l'escala completa a lib.py. L'itinerari fa servir aquest camp
# per graduar el recorregut, de manera que canviar-hi un número canvia
# l'ordre en què l'alumne es troba els exercicis.
# --------------------------------------------------------------------
dificultats({
    236: 1,  # escriure l'espai mostral; 241 i 257, Laplace amb el recompte a la vista
    237: 2,  # espai mostral de dos daus: cal veure que els resultats són parells
    238: 3,  # comptar resultats DIFERENTS, no parells: cal descartar repetits
    239: 2,  # classificar esdeveniments; 240, ordenar-los per probabilitat
    240: 2,
    241: 1,
    242: 3,
    243: 2,  # comptar combinacions amb el principi multiplicatiu
    244: 1,  # principi multiplicatiu amb dos experiments
    245: 2,
    246: 3,  # variacions amb repetició amb dos alfabets barrejats
    247: 2,
    248: 2,
    249: 2,  # freqüència relativa a partir d'una taula
    250: 2,
    251: 3,  # cal muntar l'espai mostral de 4 monedes abans de comptar
    252: 3,
    253: 2,  # esdeveniments dins d'un mateix espai; 254, taula de doble entrada
    254: 2,
    255: 3,  # diverses fraccions del total encadenades
    256: 3,  # unió d'esdeveniments no disjunts
    257: 1,
    258: 3,
    259: 3,
})


B1 = "espais_mostrals"
B2 = "combinatoria"
B3 = "laplace"
B4 = "esdeveniments"


# =====================================================================
# BLOC 1 — ESPAIS MOSTRALS I ESDEVENIMENTS (exercicis 236-240)
# =====================================================================

E236 = "Escriu l'espai mostral dels experiments aleatoris següents."

Q("236a", 236, "a", B1, "A",
  "Treure una carta de la baralla espanyola.",
  "L'espai mostral té $40$ resultats (una carta per a cada combinació "
  "de coll i valor)",
  [D("L'espai mostral té $4$ resultats (un per cada coll: ors, copes, "
     "espases i bastos)", "ESPAI_MOSTRAL_MAL_COMPTAT",
     "$4$ compta només els colls, no les cartes individuals: cada "
     "coll té $10$ cartes diferents ($1$ al $9$ i una figura), així "
     "que l'espai mostral inclou totes les cartes concretes, no "
     "només el coll."),
   D("L'espai mostral té $48$ resultats, com en una baralla francesa",
     "ESPAI_MOSTRAL_MAL_COMPTAT",
     "$48$ no és el nombre de cartes d'una baralla espanyola: aquesta "
     "en té $40$ (quatre colls de $10$ cartes cadascun), no "
     "$48$."),
   D("L'espai mostral té $10$ resultats, un per cada valor de l'$1$ "
     "al $9$ i la figura", "ESPAI_MOSTRAL_MAL_COMPTAT",
     "$10$ compta els valors possibles d'UN sol coll, però l'espai "
     "mostral de \"treure una carta\" ha d'incloure les cartes de "
     "TOTS els colls, no només d'un.")],
  ["Una baralla espanyola té $4$ colls (ors, copes, espases, bastos), "
   "cadascun amb $10$ cartes.",
   "L'espai mostral és el conjunt de totes les cartes possibles, no "
   "només els colls."],
  ["La baralla espanyola té $4$ colls de $10$ cartes cadascun: "
   "$4\\cdot10=40$ resultats possibles"],
  ex_text=E236)

Q("236b", 236, "b", B1, "A",
  "Llançar una xinxeta i anotar la posició de caiguda.",
  "L'espai mostral té $2$ resultats: $\\{\\text{punta amunt, de "
  "costat}\\}$",
  [D("L'espai mostral té $6$ resultats, com un dau", "ESPAI_MOSTRAL_MAL_COMPTAT",
     "Una xinxeta no és un dau: només té dues maneres físiques de "
     "caure, no sis."),
   D("L'espai mostral té $1$ resultat, perquè sempre cau de la "
     "mateixa manera", "ESPAI_MOSTRAL_MAL_COMPTAT",
     "Una xinxeta pot caure de dues maneres diferents (de punta cap "
     "amunt o de costat): el resultat no és sempre el mateix, per "
     "això és un experiment aleatori."),
   D("L'espai mostral és infinit, perquè pot caure en qualsevol "
     "angle", "ESPAI_MOSTRAL_MAL_COMPTAT",
     "El que es demana anotar no és l'angle exacte de caiguda, sinó "
     "la posició (de punta o de costat): amb aquest criteri només hi "
     "ha dos resultats possibles.")],
  ["Pensa en les dues úniques maneres físiques en què pot quedar una "
   "xinxeta en caure a terra.",
   "No confonguis \"totes les posicions possibles\" amb \"totes les "
   "categories que es demana anotar\"."],
  ["Una xinxeta pot caure de dues maneres: de punta cap amunt o de "
   "costat. $E=\\{\\text{punta amunt, de costat}\\}$"],
  ex_text=E236)

Q("236c", 236, "c", B1, "A",
  "Treure una bola d'una urna amb 5 boles vermelles, 3 de blaves i 2 "
  "de verdes.",
  "L'espai mostral té $3$ resultats: $\\{\\text{vermella, blava, "
  "verda}\\}$ (un per cada color possible)",
  [D("L'espai mostral té $10$ resultats, un per cada bola física de "
     "l'urna", "ESPAI_MOSTRAL_MAL_COMPTAT",
     "L'espai mostral es descriu pels resultats DISTINGIBLES de "
     "l'experiment (el color observat), no per cada bola física: "
     "encara que hi hagi $10$ boles, només hi ha $3$ colors "
     "diferents possibles com a resultat."),
   D("L'espai mostral té $5$ resultats, el nombre de boles del color "
     "més freqüent", "ESPAI_MOSTRAL_MAL_COMPTAT",
     "El nombre de boles d'un color concret no és el nombre de "
     "resultats possibles de l'experiment: l'espai mostral té un "
     "resultat per cada color diferent que es pot obtenir, i n'hi ha "
     "$3$."),
   D("L'espai mostral té $2$ resultats, perquè normalment es "
     "distingeix només \"vermella\" o \"no vermella\"", "ESPAI_MOSTRAL_MAL_COMPTAT",
     "L'enunciat no demana distingir només si és vermella o no: "
     "demana el color de la bola, i hi ha $3$ colors diferents a "
     "l'urna.")],
  ["Pensa en els resultats DIFERENTS que es poden distingir en "
   "treure una bola, no en el nombre total de boles.",
   "Hi ha $3$ colors a l'urna: vermell, blau i verd."],
  ["L'urna té $5+3+2=10$ boles, però només $3$ colors diferents: "
   "$E=\\{\\text{vermella, blava, verda}\\}$"],
  ex_text=E236)

Q("236d", 236, "d", B1, "A",
  "Llançar 2 daus i restar les cares superiors.",
  "L'espai mostral té $11$ resultats: $\\{-5,-4,-3,-2,-1,0,1,2,3,4,"
  "5\\}$",
  [D("L'espai mostral té $6$ resultats, com un sol dau",
     "ESPAI_MOSTRAL_MAL_COMPTAT",
     "Amb dos daus i una resta, els resultats possibles no es "
     "limiten a l'$1$-$6$ d'un sol dau: poden sortir valors negatius "
     "i el $0$."),
   D("L'espai mostral té $36$ resultats, un per cada parell de "
     "cares", "ESPAI_MOSTRAL_MAL_COMPTAT",
     "$36$ és el nombre de PARELLS de resultats dels dos daus, no el "
     "nombre de valors DIFERENTS que pot prendre la seva resta: "
     "diversos parells donen la mateixa resta (per exemple, $(3,1)$ "
     "i $(4,2)$ donen tots dos $2$)."),
   D("L'espai mostral té $5$ resultats, només els positius",
     "ESPAI_MOSTRAL_MAL_COMPTAT",
     "La resta de dues cares també pot donar $0$ o valors negatius "
     "(si la segona cara és més gran que la primera): no es pot "
     "descartar aquesta part de l'espai mostral.")],
  ["La resta de les cares superiors pot anar des de $1-6$ fins a "
   "$6-1$.",
   "Calcula el valor mínim i el màxim, i compta tots els enters "
   "entremig, incloent-hi el $0$."],
  ["La resta va de $1-6=-5$ fins a $6-1=5$: "
   "$E=\\{-5,-4,-3,-2,-1,0,1,2,3,4,5\\}$, $11$ resultats"],
  ex_text=E236)

Q("236e", 236, "e", B1, "A",
  "Llançar 2 daus i multiplicar les cares superiors.",
  "L'espai mostral té $18$ resultats: $\\{1,2,3,4,5,6,8,9,10,12,15,"
  "16,18,20,24,25,30,36\\}$",
  [D("L'espai mostral té $36$ resultats, un per cada parell de "
     "cares", "ESPAI_MOSTRAL_MAL_COMPTAT",
     "$36$ és el nombre de PARELLS de resultats dels dos daus, no el "
     "nombre de valors DIFERENTS del seu producte: diversos parells "
     "donen el mateix producte (per exemple, $2\\cdot3=6$ i "
     "$3\\cdot2=6$, o $2\\cdot6=12$ i $3\\cdot4=12$)."),
   D("L'espai mostral té $6$ resultats, un per cada valor d'un sol "
     "dau", "ESPAI_MOSTRAL_MAL_COMPTAT",
     "El producte de dos daus dona valors molt més grans que els "
     "d'un sol dau (fins a $6\\cdot6=36$): l'espai mostral és molt "
     "més ampli que el d'un únic dau."),
   D("L'espai mostral té $30$ resultats, tots els valors de $1$ a "
     "$30$", "ESPAI_MOSTRAL_MAL_COMPTAT",
     "No tots els nombres de $1$ a $30$ (ni fins a $36$) s'obtenen "
     "com a producte de dues cares d'un dau: per exemple, l'$11$, el "
     "$13$, el $14$ o el $17$ no es poden obtenir. Cal llistar "
     "només els que realment s'obtenen.")],
  ["El producte de les cares pot anar d'$1\\cdot1=1$ fins a "
   "$6\\cdot6=36$, però no tots els valors intermedis s'obtenen.",
   "Llista tots els productes possibles de $i\\cdot j$ amb "
   "$i,j\\in\\{1,\\ldots,6\\}$ i queda't només amb els valors "
   "diferents."],
  ["Els productes possibles, sense repetir valors, són "
   "$\\{1,2,3,4,5,6,8,9,10,12,15,16,18,20,24,25,30,36\\}$: "
   "$18$ resultats"],
  ex_text=E236)

Q("236f", 236, "f", B1, "A",
  "Considerar les espases de la baralla espanyola i treure una carta "
  "d'aquest grup.",
  "L'espai mostral té $10$ resultats (les $10$ cartes del coll "
  "d'espases)",
  [D("L'espai mostral té $40$ resultats, com tota la baralla",
     "ESPAI_MOSTRAL_MAL_COMPTAT",
     "L'enunciat restringeix l'experiment a UN sol coll (espases), "
     "no a la baralla sencera: només compten les $10$ cartes "
     "d'espases."),
   D("L'espai mostral té $4$ resultats, un per cada coll",
     "ESPAI_MOSTRAL_MAL_COMPTAT",
     "L'experiment ja fixa el coll (espases): el que varia és quina "
     "carta concreta d'espases surt, i n'hi ha $10$, no $4$."),
   D("L'espai mostral té $9$ resultats, de l'$1$ al $9$, sense "
     "comptar la figura", "ESPAI_MOSTRAL_MAL_COMPTAT",
     "Cada coll d'una baralla espanyola també inclou una figura a "
     "més dels valors numèrics de l'$1$ al $9$: en total, $10$ "
     "cartes per coll, no $9$.")],
  ["Cada coll d'una baralla espanyola té el mateix nombre de cartes.",
   "Un coll té les cartes de l'$1$ al $9$ més una figura."],
  ["El coll d'espases té $10$ cartes: $E=\\{1\\text{ d'espases}, "
   "\\ldots,\\text{rei d'espases}\\}$"],
  ex_text=E236)

Q("236g", 236, "g", B1, "A",
  "Escollir a l'atzar un país de la Unió Europea.",
  "L'espai mostral té $27$ resultats (els $27$ estats membres de la "
  "Unió Europea)",
  [D("L'espai mostral té $28$ resultats, incloent-hi el Regne Unit",
     "ESPAI_MOSTRAL_MAL_COMPTAT",
     "El Regne Unit ja no és estat membre de la Unió Europea: "
     "l'espai mostral d'aquest experiment té $27$ països, no "
     "$28$."),
   D("L'espai mostral és infinit, perquè un país té molts habitants "
     "diferents", "ESPAI_MOSTRAL_MAL_COMPTAT",
     "L'experiment no és \"triar un habitant\", és \"triar un país\": "
     "els països membres de la Unió Europea són un nombre finit i "
     "concret."),
   D("L'espai mostral té $50$ resultats, com els estats dels EUA",
     "ESPAI_MOSTRAL_MAL_COMPTAT",
     "L'enunciat parla de la Unió Europea, no dels Estats Units: cal "
     "el nombre d'estats membres de la UE, que és $27$, no $50$.")],
  ["Pensa en quants estats formen actualment la Unió Europea.",
   "No confonguis \"país\" amb \"habitant\": l'experiment tria un "
   "país sencer."],
  ["La Unió Europea té $27$ estats membres: $E=\\{$els $27$ països "
   "membres de la UE$\\}$"],
  ex_text=E236)

# ---- exercici 237: dos daus diferenciats per color ----
Q("237", 237, "", B1, "A",
  "Llancem 2 daus, un de vermell i un de blau. Quin és l'espai "
  "mostral d'aquest experiment?",
  "$E=\\{(v,b):v,b\\in\\{1,\\ldots,6\\}\\}$, amb $36$ parells "
  "ordenats, ja que $(3,5)$ i $(5,3)$ són resultats diferents",
  [D("$E$ té $21$ resultats, perquè no importa l'ordre dels daus",
     "ORDRE_NO_CONSIDERAT",
     "Els dos daus són diferents (un vermell, un blau): el parell "
     "$(3,5)$ (vermell $3$, blau $5$) és un resultat diferent del "
     "$(5,3)$ (vermell $5$, blau $3$). Com que sí que importa "
     "l'ordre, l'espai mostral té $36$ resultats, no $21$."),
   D("$E$ té $12$ resultats, la suma de les possibilitats de cada "
     "dau per separat", "PRINCIPI_MULTIPLICATIU_MAL_APLICAT",
     "Quan dos experiments independents es combinen (aquí, dos "
     "daus), el nombre de resultats es MULTIPLICA, no se suma: "
     "$6\\cdot6=36$, no $6+6=12$."),
   D("$E$ té $6$ resultats, perquè els dos daus donen el mateix "
     "conjunt de valors", "PRINCIPI_MULTIPLICATIU_MAL_APLICAT",
     "Encara que els dos daus tinguin les mateixes cares possibles "
     "($1$ a $6$), el resultat de l'experiment és el PARELL de "
     "valors (un de cada dau), no un únic valor: cal combinar-los.")],
  ["Com que els daus són de colors diferents, es pot distingir quin "
   "resultat prové de cada un: l'ordre importa.",
   "Per cada un dels $6$ resultats del dau vermell, el dau blau pot "
   "donar $6$ resultats més: aplica el principi multiplicatiu."],
  ["Cada parell $(v,b)$ amb $v,b\\in\\{1,\\ldots,6\\}$ és un "
   "resultat diferent",
   "Pel principi multiplicatiu: $6\\cdot6=36$ parells ordenats "
   "possibles"],
  ex_text="")

# ---- exercici 238: producte de dos daus, esdeveniments no elementals ----
E238 = "Llancem 2 daus i multipliquem el nombre de punts obtingut a cada un."

Q("238a", 238, "a", B1, "A",
  "Quants resultats DIFERENTS es poden obtenir com a producte de les "
  "dues cares?",
  "$18$ resultats diferents",
  [D("$36$ resultats diferents", "PARELLS_VALORS_CONFOSOS",
     "$36$ és el nombre de PARELLS de resultats possibles dels dos "
     "daus, no el nombre de PRODUCTES diferents: diversos parells "
     "donen el mateix producte (per exemple, $2\\cdot3=6$ i "
     "$3\\cdot2=6$)."),
   D("$11$ resultats diferents", "ESPAI_MOSTRAL_MAL_COMPTAT",
     "$11$ és el nombre de resultats diferents de RESTAR les dues "
     "cares (exercici anterior), no de multiplicar-les: amb el "
     "producte s'obtenen més valors diferents, $18$."),
   D("$6$ resultats diferents", "ESPAI_MOSTRAL_MAL_COMPTAT",
     "El producte de dos daus pot donar valors molt més grans que "
     "els d'un sol dau (fins a $36$): l'espai mostral té més de "
     "$6$ resultats.")],
  ["Llista tots els productes possibles $i\\cdot j$ amb "
   "$i,j\\in\\{1,\\ldots,6\\}$ i queda't només amb els valors "
   "diferents.",
   "Recorda que diversos parells poden donar el mateix producte: no "
   "els comptis dues vegades."],
  ["Els productes diferents que s'obtenen són "
   "$1,2,3,4,5,6,8,9,10,12,15,16,18,20,24,25,30,36$: en total, $18$ "
   "resultats"],
  ex_text=E238)

Q("238b", 238, "b", B1, "A",
  "Quin d'aquests és un exemple d'esdeveniment NO elemental (format "
  "per més d'un resultat) de l'espai mostral del producte de les "
  "dues cares?",
  "«Obtenir un producte més petit que $5$» (el formen els resultats "
  "$1,2,3,4$, quatre resultats de l'espai mostral)",
  [D("«Obtenir un producte igual a $12$» (un únic resultat de "
     "l'espai mostral)", "ELEMENTAL_NO_ELEMENTAL_CONFOSOS",
     "Encara que hi hagi diversos PARELLS de daus que donen "
     "producte $12$ (com $(2,6)$ i $(3,4)$), dins de l'ESPAI "
     "MOSTRAL DEL PRODUCTE el valor $12$ és un únic resultat: "
     "aquest esdeveniment és elemental, no compost per diversos "
     "resultats de l'espai mostral del producte."),
   D("«Obtenir el producte $36$» (un únic resultat de l'espai "
     "mostral)", "ELEMENTAL_NO_ELEMENTAL_CONFOSOS",
     "$36$ és un únic valor de l'espai mostral del producte "
     "($\\{1,2,\\ldots,36\\}$ amb els valors que s'hi poden obtenir): "
     "aquest esdeveniment és elemental, no format per diversos "
     "resultats."),
   D("«Obtenir un producte que no sigui múltiple de cap número» "
     "(no correspon a cap resultat de l'espai mostral)",
     "ELEMENTAL_NO_ELEMENTAL_CONFOSOS",
     "Tot número és múltiple de si mateix i d'$1$: aquest "
     "esdeveniment no correspon a cap resultat vàlid de l'espai "
     "mostral, ni elemental ni compost.")],
  ["Un esdeveniment elemental és un ÚNIC resultat de l'espai "
   "mostral; un esdeveniment NO elemental n'agrupa diversos.",
   "Pensa quins resultats de l'espai mostral del producte "
   "$\\{1,2,3,4,5,6,8,\\ldots\\}$ compleixen \"ser més petit que "
   "$5$\"."],
  ["«Obtenir un producte més petit que $5$» agrupa els resultats "
   "$1,2,3,4$ de l'espai mostral: és un esdeveniment NO elemental, "
   "format per $4$ resultats diferents"],
  ex_text=E238)

# ---- exercici 239: esdeveniment impossible (baralla espanyola) ----
E239 = "Traiem dues cartes d'una baralla espanyola. Un esdeveniment impossible és:"

Q("239a", 239, "a", B1, "A",
  "«Treure dos ors»",
  "Aquest esdeveniment és POSSIBLE: la baralla té $10$ ors, així que "
  "es poden treure dos",
  [DT("Aquest esdeveniment és IMPOSSIBLE, perquè només hi ha un exemplar "
      "de cada carta", "CARTES_REPETIDES_CONFOSES",
      "Que hi hagi un únic exemplar de CADA CARTA CONCRETA (com el rei "
      "d'ors) no vol dir que hi hagi un únic exemplar de CADA COLL: "
      "el coll d'ors té $10$ cartes diferents, així que se'n poden "
      "treure dues."),
   D("Aquest esdeveniment és IMPOSSIBLE, perquè només es pot treure "
     "una carta d'ors per jugada", "CARTES_REPETIDES_CONFOSES",
     "L'enunciat parla de treure DUES cartes en total, no d'una "
     "jugada limitada a una carta per coll: és perfectament possible "
     "que totes dues siguin d'ors."),
   D("Aquest esdeveniment és IMPOSSIBLE, perquè un cop treta una "
     "carta d'ors, no en queda cap altra", "CARTES_REPETIDES_CONFOSES",
     "El coll d'ors té $10$ cartes diferents (de l'$1$ al $9$ i una "
     "figura): després de treure'n una, encara en queden $9$ més "
     "per treure com a segona carta.")],
  ["Compta quantes cartes té el coll d'ors a una baralla espanyola.",
   "Un esdeveniment és impossible quan no hi ha CAP manera que "
   "passi, no quan és poc probable."],
  ["Hi ha $10$ ors a la baralla, així que és perfectament possible "
   "treure'n dos: aquest esdeveniment NO és impossible"],
  ex_text=E239)

Q("239b", 239, "b", B1, "A",
  "«Treure dos cavalls de copes»",
  "Aquest esdeveniment és IMPOSSIBLE: només hi ha un cavall de copes "
  "a tota la baralla",
  [D("Aquest esdeveniment és POSSIBLE, perquè hi ha diversos cavalls "
     "a la baralla", "CARTES_REPETIDES_CONFOSES",
     "Hi ha diversos cavalls a la baralla (un per coll), però el "
     "\"cavall de copes\" concret és una única carta: no se'n poden "
     "treure dues exemplars iguals."),
   D("Aquest esdeveniment és POSSIBLE, perquè les cartes es tornen a "
     "barrejar entre extracció i extracció", "CARTES_REPETIDES_CONFOSES",
     "L'enunciat parla de treure dues cartes (sense indicar que es "
     "retornin i es barregin entre mig): amb un únic cavall de "
     "copes a la baralla, no se'n poden treure dos exemplars "
     "diferents en la mateixa extracció."),
   D("Aquest esdeveniment és POSSIBLE, perquè hi ha $4$ colls i "
     "cadascun té un cavall", "CARTES_REPETIDES_CONFOSES",
     "Que hi hagi un cavall per coll no ajuda aquí: l'esdeveniment "
     "demana el cavall D'UN SOL coll (copes) DOS cops, i només n'hi "
     "ha un exemplar.")],
  ["Compta quants \"cavalls de copes\" (exactament aquesta carta) hi "
   "ha a la baralla.",
   "Un cop treta l'única carta d'aquest tipus, no en queda cap "
   "altra igual per treure una segona vegada."],
  ["Només hi ha un cavall de copes a tota la baralla: un cop l'hem "
   "tret, no en queda cap altre igual. Aquest esdeveniment és "
   "IMPOSSIBLE"],
  ex_text=E239)

Q("239c", 239, "c", B1, "A",
  "«Treure dues cartes de coll diferent»",
  "Aquest esdeveniment és POSSIBLE: n'hi ha prou en treure, per "
  "exemple, un or i una copa",
  [D("Aquest esdeveniment és IMPOSSIBLE, perquè cada coll té les "
     "seves pròpies cartes", "CARTES_REPETIDES_CONFOSES",
     "Que cada coll tingui les seves pròpies cartes no impedeix "
     "treure'n una de cada: precisament per això és fàcil aconseguir "
     "dues cartes de colls diferents."),
   D("Aquest esdeveniment és IMPOSSIBLE, perquè la baralla només té "
     "un exemplar de cada carta", "CARTES_REPETIDES_CONFOSES",
     "Que cada carta concreta sigui única no fa impossible aquest "
     "esdeveniment: no es demana repetir cap carta, només que "
     "provinguin de colls diferents."),
   D("Aquest esdeveniment és IMPOSSIBLE, perquè les dues cartes "
     "sempre acaben sent del mateix coll", "CARTES_REPETIDES_CONFOSES",
     "No hi ha cap raó perquè dues cartes triades a l'atzar hagin de "
     "coincidir de coll: és, de fet, el resultat més fàcil "
     "d'aconseguir.")],
  ["Pensa en un exemple concret: pots treure un or i, després, una "
   "copa?",
   "Un esdeveniment és impossible només si no hi ha CAP manera que "
   "passi."],
  ["És possible: n'hi ha prou en treure, per exemple, un or i una "
   "copa. Aquest esdeveniment NO és impossible"],
  ex_text=E239)

Q("239d", 239, "d", B1, "A",
  "«Treure dues figures iguals del mateix coll»",
  "Aquest esdeveniment és IMPOSSIBLE: cada figura (sota, cavall, "
  "rei) només té un exemplar per coll",
  [D("Aquest esdeveniment és POSSIBLE, perquè cada coll té tres "
     "figures (sota, cavall, rei)", "CARTES_REPETIDES_CONFOSES",
     "Que cada coll tingui tres figures DIFERENTS no vol dir que en "
     "tingui dues d'IGUALS: per exemple, no hi ha dos reis d'ors "
     "diferents a la mateixa baralla."),
   D("Aquest esdeveniment és POSSIBLE, perquè hi ha $4$ colls amb "
     "figures cadascun", "CARTES_REPETIDES_CONFOSES",
     "Que hi hagi figures a cada coll no ajuda: l'esdeveniment "
     "demana DUES figures IGUALS (com dos reis d'ors) DINS DEL "
     "MATEIX coll, i cada figura només hi apareix una vegada."),
   D("Aquest esdeveniment és POSSIBLE, perquè les figures es poden "
     "confondre entre elles", "CARTES_REPETIDES_CONFOSES",
     "Les figures no es confonen: cada carta és única i "
     "distingible. El rei d'ors és una única carta a tota la "
     "baralla, no n'hi ha cap altra igual.")],
  ["Compta quants \"reis d'ors\" (exactament aquesta carta) hi ha a "
   "la baralla.",
   "Cada figura concreta (sota, cavall o rei d'un coll determinat) "
   "és una única carta a tota la baralla."],
  ["Cada figura (sota, cavall, rei) només té un exemplar per coll: "
   "no hi ha, per exemple, dos reis d'ors diferents. Aquest "
   "esdeveniment és IMPOSSIBLE"],
  ex_text=E239)

Q("239e", 239, "e", B1, "A",
  "«Treure un or i una copa»",
  "Aquest esdeveniment és POSSIBLE: n'hi ha prou en treure un or "
  "seguit d'una copa",
  [D("Aquest esdeveniment és IMPOSSIBLE, perquè l'or i la copa mai "
     "es poden treure juntes", "CARTES_REPETIDES_CONFOSES",
     "No hi ha cap impediment per treure una carta d'ors i una de "
     "copes en la mateixa extracció de dues cartes: són colls "
     "diferents amb les seves pròpies cartes."),
   D("Aquest esdeveniment és IMPOSSIBLE, perquè només hi ha un or i "
     "una copa a tota la baralla", "CARTES_REPETIDES_CONFOSES",
     "Cada coll (ors, copes) té $10$ cartes diferents a la baralla, "
     "no una de sola: hi ha $10$ ors i $10$ copes possibles per "
     "triar."),
   D("Aquest esdeveniment és IMPOSSIBLE, pel mateix motiu que "
     "\"dos cavalls de copes\"", "CARTES_REPETIDES_CONFOSES",
     "Aquí no es demana repetir cap carta ni cap figura concreta: "
     "es demana una carta d'ors i una de copes, colls diferents amb "
     "moltes cartes cadascun.")],
  ["Pensa en un exemple concret: pots treure un or i, després, una "
   "copa?",
   "Compara-ho amb l'apartat c): també és un cas de \"colls "
   "diferents\", que sí que és possible."],
  ["És possible: n'hi ha prou en treure un or seguit d'una copa. "
   "Aquest esdeveniment NO és impossible"],
  ex_text=E239)

# ---- exercici 240: ordenar probabilitats sense calcular-les exactament ----
E240 = ("En llançar un dau, ordena, de grau més petit a més gran de "
        "probabilitat, els esdeveniments següents.")

Q("240a", 240, "a", B1, "A",
  "«Nombre imparell»",
  "$P=\\dfrac{3}{6}=\\dfrac12$ ($1$, $3$ i $5$ són $3$ casos "
  "favorables d'entre $6$ possibles)",
  [D("$P=\\dfrac{1}{6}$, perquè només compta un nombre imparell "
     "concret", "CASOS_FAVORABLES_MAL_COMPTATS",
     "L'esdeveniment \"nombre imparell\" agrupa TOTS els resultats "
     "imparells del dau ($1$, $3$ i $5$), no un de sol: són $3$ "
     "casos favorables, no $1$."),
   D("$P=\\dfrac{4}{6}=\\dfrac23$", "CASOS_FAVORABLES_MAL_COMPTATS",
     "Un dau numerat de l'$1$ al $6$ té exactament $3$ resultats "
     "imparells ($1,3,5$), no $4$: revisa el recompte."),
   D("$P=1$, perquè sempre surt un nombre imparell o parell",
     "VEREDICTE_INVERTIT",
     "Aquest raonament confondria l'esdeveniment \"imparell o "
     "parell\" (que sí és segur) amb \"imparell\" tot sol, que "
     "només compleixen la meitat dels resultats.")],
  ["Els casos possibles en un dau són sempre $6$.",
   "Compta quants resultats del $1$ al $6$ són imparells: $1$, "
   "$3$ i $5$."],
  ["«Nombre imparell»: $1,3,5$ són $3$ casos favorables. "
   "$P=\\dfrac{3}{6}=\\dfrac12$"],
  ex_text=E240)

Q("240b", 240, "b", B1, "A",
  "«Nombre igual o més gran que $5$»",
  "$P=\\dfrac{2}{6}=\\dfrac13$ ($5$ i $6$ són $2$ casos favorables "
  "d'entre $6$ possibles)",
  [D("$P=\\dfrac{1}{6}$, comptant només el $6$", "CASOS_FAVORABLES_MAL_COMPTATS",
     "\"Igual o més gran que $5$\" inclou el propi $5$, no només els "
     "valors estrictament més grans: cal comptar tant el $5$ com el "
     "$6$."),
   D("$P=\\dfrac{5}{6}$, comptant tots els valors fins al $5$",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "Aquest recompte respon a \"més petit o igual que $5$\", "
     "l'esdeveniment contrari (aproximadament) del que es demana: "
     "aquí cal \"igual o més gran que $5$\", és a dir, només $5$ i "
     "$6$."),
   D("$P=\\dfrac{3}{6}=\\dfrac12$, comptant $4$, $5$ i $6$",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "El $4$ no compleix \"igual o més gran que $5$\": només el $5$ "
     "i el $6$ ho compleixen, $2$ casos, no $3$.")],
  ["\"Igual o més gran que $5$\" inclou el mateix $5$: quins valors "
   "del $1$ al $6$ ho compleixen?",
   "Compta'ls: només en queden dos."],
  ["«Nombre igual o més gran que $5$»: $5,6$ són $2$ casos "
   "favorables. $P=\\dfrac{2}{6}=\\dfrac13$"],
  ex_text=E240)

Q("240c", 240, "c", B1, "A",
  "«Nombre més petit que $7$»",
  "$P=\\dfrac{6}{6}=1$ (tots els resultats $1,2,3,4,5,6$ ho "
  "compleixen: és un esdeveniment segur)",
  [D("$P=\\dfrac{5}{6}$, perquè el $6$ no compta",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "El $6$ SÍ és més petit que $7$: també compta com a cas "
     "favorable. Tots els resultats del dau ($1$ a $6$) compleixen "
     "aquesta condició."),
   D("$P=\\dfrac{1}{6}$, comptant només el valor $6$ com a límit",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "L'esdeveniment no demana \"ser exactament $6$\": demana \"ser "
     "més petit que $7$\", que compleixen tots els $6$ resultats "
     "possibles del dau."),
   D("Aquest esdeveniment és impossible, $P=0$, perquè el dau no "
     "arriba a $7$", "VEREDICTE_INVERTIT",
     "Que el dau no arribi a $7$ és exactament el motiu pel qual "
     "TOTS els seus resultats són més petits que $7$: aquest "
     "esdeveniment és segur ($P=1$), no impossible.")],
  ["Quins valors del $1$ al $6$ són més petits que $7$?",
   "Compara-ho amb els casos possibles totals del dau."],
  ["«Nombre més petit que $7$»: tots els resultats $1,2,3,4,5,6$ ho "
   "compleixen, $6$ casos favorables. $P=\\dfrac{6}{6}=1$ "
   "(esdeveniment segur)"],
  ex_text=E240,
  nota="Els apartats c) i d) tenen el mateix text al full de partida, "
       "«Nombre més petit que 7», i es conserven tots dos tal com "
       "estan: en un dau de l'1 al 6, tots els resultats el compleixen.",
  nota_interna="Molt probablement una errata editorial de la font (el "
               "text es repeteix literalment). Es mantenen els dos "
               "apartats amb el mateix esdeveniment, com fa r-im12.")

Q("240d", 240, "d", B1, "A",
  "«Nombre més petit que $7$»",
  "$P=\\dfrac{6}{6}=1$ (tots els resultats $1,2,3,4,5,6$ ho "
  "compleixen: és un esdeveniment segur)",
  [D("$P=\\dfrac{5}{6}$, perquè el $6$ no compta",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "El $6$ SÍ és més petit que $7$: també compta com a cas "
     "favorable. Tots els resultats del dau ($1$ a $6$) compleixen "
     "aquesta condició."),
   D("$P=\\dfrac{1}{6}$, comptant només el valor $6$ com a límit",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "L'esdeveniment no demana \"ser exactament $6$\": demana \"ser "
     "més petit que $7$\", que compleixen tots els $6$ resultats "
     "possibles del dau."),
   D("Aquest esdeveniment és impossible, $P=0$, perquè el dau no "
     "arriba a $7$", "VEREDICTE_INVERTIT",
     "Que el dau no arribi a $7$ és exactament el motiu pel qual "
     "TOTS els seus resultats són més petits que $7$: aquest "
     "esdeveniment és segur ($P=1$), no impossible.")],
  ["Aquest apartat repeteix literalment el mateix enunciat que "
   "l'anterior: el raonament és idèntic.",
   "Quins valors del $1$ al $6$ són més petits que $7$?"],
  ["«Nombre més petit que $7$»: tots els resultats $1,2,3,4,5,6$ ho "
   "compleixen, $6$ casos favorables. $P=\\dfrac{6}{6}=1$ "
   "(esdeveniment segur)"],
  ex_text=E240,
  nota="Aquest apartat té el mateix text que el c) al full de partida, "
       "i per tant la mateixa resposta: en un dau de l'1 al 6, cap "
       "resultat arriba a $7$.",
  nota_interna="Repetició literal del text del 240c a la font, "
               "probablement una errata editorial.")

Q("240e", 240, "e", B1, "A",
  "«Nombre més gran o igual que $2$»",
  "$P=\\dfrac{5}{6}$ ($2,3,4,5,6$ són $5$ casos favorables d'entre "
  "$6$ possibles)",
  [D("$P=\\dfrac{4}{6}=\\dfrac23$, sense comptar el propi $2$",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "\"Més gran o igual que $2$\" inclou el propi $2$, no només els "
     "valors estrictament més grans: cal comptar-lo com a cas "
     "favorable."),
   D("$P=\\dfrac{1}{6}$, comptant només el $2$", "CASOS_FAVORABLES_MAL_COMPTATS",
     "L'esdeveniment no es limita al valor $2$ exacte: inclou "
     "també el $3$, el $4$, el $5$ i el $6$, tots ells més grans que "
     "$2$."),
   D("$P=\\dfrac{6}{6}=1$, perquè gairebé tots els valors ho "
     "compleixen", "CASOS_FAVORABLES_MAL_COMPTATS",
     "El $1$ NO compleix \"més gran o igual que $2$\": no tots els "
     "$6$ resultats del dau ho fan, només $5$ d'ells.")],
  ["\"Més gran o igual que $2$\" inclou el propi $2$: quins valors "
   "del $1$ al $6$ ho compleixen?",
   "Descarta només el $1$."],
  ["«Nombre més gran o igual que $2$»: $2,3,4,5,6$ són $5$ casos "
   "favorables. $P=\\dfrac{5}{6}$"],
  ex_text=E240)


# =====================================================================
# BLOC 2 — COMBINATÒRIA: PRINCIPI MULTIPLICATIU (exercicis 242-248)
# =====================================================================

# ---- exercici 242: suma de la resta de les cares d'un dau ----
Q("242", 242, "", B2, "A",
  "Llancem un dau a l'aire i sumem els punts de totes les cares "
  "MENYS la de dalt. Calcula la probabilitat d'obtenir un nombre "
  "múltiple de $3$.",
  "$P=\\dfrac13$ ($18$ i $15$ són $2$ casos favorables d'entre $6$)",
  [D("$P=\\dfrac16$, comptant només un cas favorable",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "Hi ha DOS valors múltiples de $3$ entre les sis sumes "
     "possibles ($15$ i $18$), no només un: revisa la taula de "
     "sumes per a cada cara de dalt."),
   D("$P=\\dfrac12$, comptant $3$ casos favorables", "CASOS_FAVORABLES_MAL_COMPTATS",
     "De les sis sumes possibles ($15,16,17,18,19,20$), només $15$ "
     "i $18$ són múltiples de $3$: $2$ casos, no $3$."),
   D("$P=\\dfrac{3}{21}=\\dfrac17$, dividint pels punts totals del "
     "dau", "CASOS_POSSIBLES_MAL_COMPTATS",
     "El denominador de la probabilitat ha de ser el nombre de "
     "resultats POSSIBLES de l'experiment (les $6$ cares que poden "
     "quedar de dalt), no la suma total de punts del dau "
     "($1+2+\\cdots+6=21$).")],
  ["La suma de totes les cares d'un dau és $21$. Si la cara de dalt "
   "és $i$, la resta de cares suma $21-i$.",
   "Calcula aquesta suma per a cada valor de $i$ de l'$1$ al $6$, i "
   "mira quins resultats són múltiples de $3$."],
  ["Si la cara de dalt és $i$, la suma de la resta és $21-i$: per "
   "$i=1,\\ldots,6$ s'obté $20,19,18,17,16,15$",
   "L'espai mostral d'aquesta suma és $\\{15,16,17,18,19,20\\}$, un "
   "resultat per cada cara, cadascun amb probabilitat $\\frac16$",
   "Múltiples de $3$: $18$ (cara $3$ de dalt) i $15$ (cara $6$ de "
   "dalt): $2$ casos de $6$, $P=\\dfrac{2}{6}=\\dfrac13$"],
  ex_text="")

# ---- exercici 243: diagrama d'arbre roba (3 nivells) ----
Q("243", 243, "", B2, "A",
  "La Susanna té a l'armari 2 faldilles, 3 parells de pantalons de "
  "diferents colors, 2 bruses, 3 samarretes i 3 barrets. Quantes "
  "combinacions diferents pot fer (una peça de la part de baix, una "
  "de la part de dalt i un barret)?",
  "$75$ combinacions",
  [D("$10$ combinacions, sumant totes les peces ($2+3+2+3+3$)",
     "PRINCIPI_MULTIPLICATIU_MAL_APLICAT",
     "Quan es combinen diverses eleccions independents (part de "
     "baix, part de dalt, barret), el nombre de combinacions es "
     "MULTIPLICA, no se suma."),
   D("$45$ combinacions, multiplicant $5\\cdot3\\cdot3$ sense "
     "agrupar bé la part de baix i la de dalt", "PRINCIPI_MULTIPLICATIU_MAL_APLICAT",
     "Revisa quantes opcions hi ha a cada nivell de l'arbre: la "
     "part de baix ($2+3=5$ opcions) i la part de dalt ($2+3=5$ "
     "opcions) no tenen el mateix nombre d'opcions per casualitat, "
     "cal calcular-les per separat."),
   D("$18$ combinacions, comptant només faldilles, bruses i "
     "barrets (sense pantalons ni samarretes)", "PRINCIPI_MULTIPLICATIU_MAL_APLICAT",
     "L'armari també inclou pantalons (part de baix) i samarretes "
     "(part de dalt) com a alternatives: cal sumar-los a les seves "
     "categories respectives, no ignorar-los.")],
  ["Agrupa la roba en tres nivells: peça de baix (faldilla o "
   "pantalons), peça de dalt (brusa o samarreta) i barret.",
   "Compta les opcions de cada nivell per separat: "
   "$2+3=5$ (baix), $2+3=5$ (dalt), $3$ (barret). Multiplica-les."],
  ["Peça de baix: $2$ faldilles $+3$ pantalons $=5$ opcions",
   "Peça de dalt: $2$ bruses $+3$ samarretes $=5$ opcions",
   "Barret: $3$ opcions",
   "Pel principi multiplicatiu: $5\\cdot5\\cdot3=75$ combinacions"],
  ex_text="",
  nota="L'enunciat original no precisa com s'agrupen les peces en "
       "una \"combinació\" de roba. S'adopta el criteri més natural "
       "per a un diagrama d'arbre de tres nivells (una peça de la "
       "part de baix, una de la part de dalt i un barret), seguint "
       "que és el que fa el diagrama d'arbre habitual.")

# ---- exercici 244: 10 tirades d'una moneda ----
Q("244", 244, "", B2, "A",
  "Quants resultats possibles s'obtenen en llançar una moneda a "
  "l'aire i anotar el resultat de $10$ tirades?",
  "$2^{10}=1\\,024$ resultats possibles",
  [D("$10\\cdot2=20$ resultats possibles", "PRINCIPI_MULTIPLICATIU_MAL_APLICAT",
     "Quan es combinen $10$ tirades independents, cadascuna amb $2$ "
     "resultats possibles, el total es multiplica $10$ vegades "
     "seguides ($2^{10}$), no es multiplica només un cop pel nombre "
     "de tirades."),
   D("$2\\cdot10=20$ resultats possibles", "PRINCIPI_MULTIPLICATIU_MAL_APLICAT",
     "Cada tirada dobla el nombre de resultats possibles respecte a "
     "l'anterior: amb $10$ tirades independents, cal multiplicar "
     "$2$ per si mateix $10$ vegades, $2^{10}$, no fer un simple "
     "producte $2\\cdot10$."),
   D("$100$ resultats possibles, per coincidència amb el nombre de "
     "vegades que apareix a altres exercicis del full",
     "PRINCIPI_MULTIPLICATIU_MAL_APLICAT",
     "El nombre de resultats depèn del nombre de tirades i "
     "d'opcions per tirada d'AQUEST experiment concret ($2^{10}$), "
     "no de xifres que apareguin en altres exercicis diferents.")],
  ["Cada tirada té $2$ resultats (cara o creu). Amb $10$ tirades "
   "independents, el nombre de resultats es multiplica $10$ "
   "vegades.",
   "Calcula $2^{10}$."],
  ["Cada tirada dobla el nombre de resultats possibles respecte a "
   "l'anterior: amb $10$ tirades, $2^{10}=1\\,024$ resultats "
   "possibles"],
  ex_text="")

# ---- exercici 245: menú restaurant (3x3x4) ----
Q("245", 245, "", B2, "A",
  "En un restaurant, el menú del dia té $3$ primers plats, $3$ "
  "segons i $4$ postres. Quants menús diferents es poden "
  "confeccionar, triant un primer, un segon i unes postres?",
  "$36$ menús diferents",
  [D("$10$ menús diferents, sumant $3+3+4$", "PRINCIPI_MULTIPLICATIU_MAL_APLICAT",
     "Quan cada client tria un plat de cada categoria de manera "
     "independent, el nombre de combinacions es MULTIPLICA, no se "
     "suma: $3\\cdot3\\cdot4$, no $3+3+4$."),
   D("$9$ menús diferents, multiplicant només primers i segons "
     "($3\\cdot3$)", "PRINCIPI_MULTIPLICATIU_MAL_APLICAT",
     "T'has deixat les postres pel camí: cada menú també inclou una "
     "elecció de postres (4 opcions), que cal multiplicar també."),
   D("$4$ menús diferents, un per cada opció de postres",
     "PRINCIPI_MULTIPLICATIU_MAL_APLICAT",
     "Cada opció de postres es pot combinar amb qualsevol primer i "
     "qualsevol segon: no n'hi ha prou en comptar només les "
     "postres, cal combinar-les amb totes les altres opcions.")],
  ["Cada client tria un plat de cada categoria de manera "
   "independent: primer, segon i postres.",
   "Aplica el mètode del producte: $3\\cdot3\\cdot4$."],
  ["Cada client tria un primer ($3$ opcions), un segon ($3$ opcions) "
   "i unes postres ($4$ opcions), de manera independent",
   "Pel mètode del producte: $3\\cdot3\\cdot4=36$ menús diferents"],
  ex_text="")

# ---- exercici 246: clau accés 4 caràcters (62^4) ----
Q("246", 246, "", B2, "A",
  "La clau d'accés d'un ordinador consta de $4$ caràcters (només "
  "lletres o nombres) i distingeix entre lletres majúscules i "
  "minúscules. Calcula el nombre de possibilitats diferents que hi "
  "ha per escriure la clau.",
  "$62^4=14\\,776\\,336$ claus diferents possibles",
  [D("$36^4$ claus diferents, sense distingir majúscules de "
     "minúscules", "CASOS_POSSIBLES_MAL_COMPTATS",
     "L'enunciat diu explícitament que es distingeixen majúscules i "
     "minúscules: cal comptar-les per separat ($26+26=52$ lletres), "
     "no com un sol grup de $26$."),
   D("$62\\cdot4=248$ claus diferents", "PRINCIPI_MULTIPLICATIU_MAL_APLICAT",
     "Amb $4$ posicions independents, cadascuna amb $62$ opcions, el "
     "nombre de claus es multiplica $4$ vegades seguides ($62^4$), "
     "no es multiplica només un cop pel nombre de posicions."),
   D("$62\\cdot61\\cdot60\\cdot59$ claus diferents, sense poder "
     "repetir cap caràcter", "VARIACIONS_SENSE_REPETICIO_MAL",
     "L'enunciat no prohibeix repetir caràcters dins de la clau "
     "(no diu que hagin de ser tots diferents): a cada posició hi ha "
     "sempre $62$ opcions disponibles, encara que ja s'hagi fet "
     "servir algun caràcter en una posició anterior.")],
  ["Compta quants caràcters diferents hi ha disponibles per a cada "
   "posició: $26$ majúscules $+26$ minúscules $+10$ dígits.",
   "Amb $4$ posicions independents (es poden repetir caràcters), "
   "aplica el principi multiplicatiu: $62^4$."],
  ["Caràcters possibles per posició: $26$ majúscules $+26$ "
   "minúscules $+10$ dígits $=62$",
   "Amb $4$ posicions independents: $62\\cdot62\\cdot62\\cdot62="
   "62^4=14\\,776\\,336$ claus diferents"],
  ex_text="")

# ---- exercici 247: PIN 4 dígits ----
Q("247", 247, "", B2, "A",
  "El codi PIN d'un telèfon mòbil està format per $4$ dígits. Troba "
  "el nombre de codis diferents que podem posar al telèfon.",
  "$10^4=10\\,000$ codis diferents",
  [D("$10\\cdot4=40$ codis diferents", "PRINCIPI_MULTIPLICATIU_MAL_APLICAT",
     "Amb $4$ posicions independents, cadascuna amb $10$ opcions "
     "(dígits del $0$ al $9$), el nombre de codis es multiplica $4$ "
     "vegades seguides ($10^4$), no es multiplica només un cop pel "
     "nombre de posicions."),
   D("$10\\cdot9\\cdot8\\cdot7$ codis diferents, sense poder repetir "
     "cap dígit", "VARIACIONS_SENSE_REPETICIO_MAL",
     "L'enunciat no prohibeix repetir dígits dins del PIN: a cada "
     "posició hi ha sempre $10$ opcions disponibles, encara que ja "
     "s'hagi fet servir aquell dígit en una posició anterior."),
   D("$4!=24$ codis diferents, com si es tractés d'ordenar $4$ "
     "dígits fixos", "FACTORIAL_MAL_APLICAT",
     "No es tracta d'ordenar $4$ dígits ja triats: a cada una de "
     "les $4$ posicions es pot triar QUALSEVOL dels $10$ dígits "
     "possibles, independentment de les altres posicions.")],
  ["Cada posició del PIN es tria de manera independent, entre "
   "$10$ dígits possibles (del $0$ al $9$), i es poden repetir.",
   "Amb $4$ posicions: aplica el principi multiplicatiu, $10^4$."],
  ["Cada dígit del PIN pot prendre $10$ valors diferents, i es "
   "poden repetir: amb $4$ xifres, $10\\cdot10\\cdot10\\cdot10="
   "10^4=10\\,000$ codis diferents"],
  ex_text="")

# ---- exercici 248: paraules de 3 lletres amb HOLA ----
E248 = ("Escriu totes les paraules de 3 lletres, amb o sense sentit, "
        "que es poden formar amb les lletres de la paraula HOLA "
        "(sense repetir cap lletra dins de la mateixa paraula).")

Q("248a", 248, "a", B2, "A",
  "Quantes paraules de $3$ lletres es poden formar en total?",
  "$24$ paraules",
  [D("$12$ paraules, la meitat per error de comptar només la meitat "
     "dels ordres", "VARIACIONS_SENSE_REPETICIO_MAL",
     "Per a cada tria de $3$ lletres de les $4$, cal comptar TOTS "
     "els ordres possibles en què es poden col·locar, no només la "
     "meitat."),
   D("$4^3=64$ paraules, permetent repetir lletres",
     "VARIACIONS_SENSE_REPETICIO_MAL",
     "Cada lletra de HOLA només apareix una vegada a la paraula "
     "original: no es pot repetir cap lletra dins de la mateixa "
     "paraula de 3 lletres, així que les opcions disminueixen a "
     "cada posició en comptes de mantenir-se sempre en $4$."),
   D("$4!=24$... però calculat com $4\\cdot4\\cdot4$ per error",
     "PRINCIPI_MULTIPLICATIU_MAL_APLICAT",
     "El resultat final, $24$, és correcte, però no s'obté "
     "multiplicant $4$ tres vegades seguides ($4^3=64$): cal anar "
     "reduint les opcions disponibles a cada posició, "
     "$4\\cdot3\\cdot2$.")],
  ["HOLA té $4$ lletres totes diferents. Per a la primera posició "
   "hi ha $4$ opcions; per a la segona, com que ja se n'ha fet "
   "servir una, en queden $3$; per a la tercera, $2$.",
   "Multiplica $4\\cdot3\\cdot2$."],
  ["Primera posició: $4$ lletres possibles; segona: $3$ (ja "
   "n'hem fet servir una); tercera: $2$",
   "$4\\cdot3\\cdot2=24$ paraules de $3$ lletres diferents"],
  ex_text=E248)

Q("248b", 248, "b", B2, "A",
  "Quantes d'aquestes paraules comencen amb la lletra H?",
  "$6$ paraules",
  [D("$24$ paraules, totes, perquè qualsevol ordre és vàlid",
     "PRINCIPI_MULTIPLICATIU_MAL_APLICAT",
     "No totes les $24$ paraules comencen per H: fixar la primera "
     "lletra com a H redueix les opcions per a les altres dues "
     "posicions."),
   D("$3$ paraules, oblidant multiplicar les opcions de les dues "
     "últimes posicions", "PRINCIPI_MULTIPLICATIU_MAL_APLICAT",
     "Amb la H fixada a la primera posició, encara calen $2$ "
     "posicions més per triar (entre O, L, A): cal multiplicar les "
     "seves opcions, $3\\cdot2$, no comptar-ne només una."),
   D("$2$ paraules, com si només restés una posició per triar",
     "PRINCIPI_MULTIPLICATIU_MAL_APLICAT",
     "Amb la H fixada, encara queden DUES posicions per omplir "
     "(segona i tercera lletra), no només una: cal "
     "$3\\cdot2=6$, no només l'opció de l'última posició.")],
  ["Si la paraula comença per H, la primera posició ja està fixada "
   "(1 opció).",
   "Per a la segona posició queden $3$ lletres (O, L, A), i per a "
   "la tercera, $2$: multiplica-les."],
  ["Primera posició fixada en H (1 opció); segona: $3$ lletres "
   "restants; tercera: $2$",
   "$1\\cdot3\\cdot2=6$ paraules que comencen per H"],
  ex_text=E248)

Q("248c", 248, "c", B2, "A",
  "I quantes paraules contenen alhora les lletres L i A (en "
  "qualsevol ordre)?",
  "$12$ paraules",
  [D("$6$ paraules, oblidant que la tercera lletra pot ser H o O "
     "(2 opcions)", "CASOS_FAVORABLES_MAL_COMPTATS",
     "La tercera lletra de la paraula (a més de L i A) pot ser H o "
     "O: dues opcions diferents, no només una. Cal multiplicar-ho "
     "pel nombre d'ordenacions possibles."),
   D("$3$ paraules, un ordre per cada tercera lletra possible",
     "FACTORIAL_MAL_APLICAT",
     "Un cop triades les $3$ lletres (L, A i la tercera), es poden "
     "ordenar de $3!=6$ maneres diferents, no d'una sola: cal "
     "multiplicar les $2$ opcions de tercera lletra per aquestes "
     "$6$ ordenacions."),
   D("$24$ paraules, totes, perquè L i A hi són sempre",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "No totes les $24$ paraules contenen alhora L i A: moltes "
     "combinacions no inclouen totes dues lletres a la vegada "
     "(per exemple, H-O-L no té la A).")],
  ["La tercera lletra (a més de L i A) ha de ser H o O: $2$ "
   "opcions.",
   "Un cop triades les $3$ lletres, es poden ordenar de $3!=6$ "
   "maneres. Multiplica $2\\cdot6$."],
  ["La tercera lletra ha de ser H o O ($2$ opcions). Un cop triades "
   "les $3$ lletres, hi ha $3!=6$ ordenacions possibles",
   "En total: $2\\cdot6=12$ paraules"],
  ex_text=E248)

Q("248d", 248, "d", B2, "A",
  "Quantes paraules acabaran amb la lletra O?",
  "$6$ paraules",
  [D("$24$ paraules, totes, perquè qualsevol ordre és vàlid",
     "PRINCIPI_MULTIPLICATIU_MAL_APLICAT",
     "No totes les $24$ paraules acaben en O: fixar l'última "
     "lletra com a O redueix les opcions per a les altres dues "
     "posicions."),
   D("$3$ paraules, oblidant multiplicar les opcions de les dues "
     "primeres posicions", "PRINCIPI_MULTIPLICATIU_MAL_APLICAT",
     "Amb la O fixada a l'última posició, encara calen $2$ "
     "posicions més per triar (entre H, L, A): cal multiplicar les "
     "seves opcions, $3\\cdot2$, no comptar-ne només una."),
   D("$2$ paraules, com si només restés una posició per triar",
     "PRINCIPI_MULTIPLICATIU_MAL_APLICAT",
     "Amb la O fixada, encara queden DUES posicions per omplir "
     "(primera i segona lletra), no només una: cal "
     "$3\\cdot2=6$.")],
  ["Si la paraula acaba en O, l'última posició ja està fixada "
   "(1 opció).",
   "Per a la primera posició queden $3$ lletres (H, L, A), i per a "
   "la segona, $2$: multiplica-les."],
  ["Última posició fixada en O (1 opció); primera: $3$ lletres "
   "restants; segona: $2$",
   "$3\\cdot2\\cdot1=6$ paraules que acaben en O"],
  ex_text=E248)

Q("248e", 248, "e", B2, "A",
  "Quantes paraules acabaran amb les lletres \"LO\" (penúltima L, "
  "última O)?",
  "$2$ paraules",
  [D("$6$ paraules, com si només es fixés l'última lletra",
     "PRINCIPI_MULTIPLICATIU_MAL_APLICAT",
     "Aquí es fixen DUES posicions (penúltima L, última O), no "
     "només una: només queda per triar la primera lletra, entre "
     "H i A."),
   D("$1$ paraula, oblidant que la primera lletra pot ser H o A "
     "(2 opcions)", "CASOS_FAVORABLES_MAL_COMPTATS",
     "Un cop fixades L i O a les seves posicions, encara queden "
     "dues lletres possibles per a la primera posició: H o A, no "
     "només una."),
   D("$3$ paraules, comptant també la O com a possible primera "
     "lletra", "CASOS_FAVORABLES_MAL_COMPTATS",
     "La lletra O ja s'ha fet servir a l'última posició: no es pot "
     "tornar a fer servir a la primera. Només queden H i A "
     "disponibles.")],
  ["Amb la L i la O ja fixades a les seves posicions, només queda "
   "triar la primera lletra.",
   "Quines lletres queden disponibles (sense repetir L ni O)?"],
  ["Amb \"LO\" fixat al final, només cal triar la primera lletra "
   "entre H i A: $2$ opcions"],
  ex_text=E248)


# =====================================================================
# BLOC 3 — REGLA DE LAPLACE I FREQÜÈNCIA RELATIVA (241, 249-252)
# =====================================================================

# ---- exercici 241: probabilitats amb baralla de 40 cartes ----
E241 = ("D'una baralla de 40 cartes traiem una carta. Calcula les "
        "probabilitats d'aquests esdeveniments.")

Q("241a", 241, "a", B3, "A",
  "$A=$ «Obtenir ors»",
  "$P(A)=\\dfrac{10}{40}=\\dfrac14$",
  [D("$P(A)=\\dfrac{1}{40}$, comptant només una carta d'ors",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "\"Obtenir ors\" inclou QUALSEVOL carta del coll d'ors, no "
     "només una en concret: n'hi ha $10$ cartes d'ors a la "
     "baralla."),
   D("$P(A)=\\dfrac{4}{40}=\\dfrac1{10}$, comptant els $4$ colls",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "$4$ és el nombre de colls DIFERENTS, no el nombre de cartes "
     "d'ors: el coll d'ors té $10$ cartes, no $4$."),
   D("$P(A)=\\dfrac{10}{4}$, invertint numerador i denominador",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "Una probabilitat mai pot ser més gran que $1$: el nombre de "
     "casos favorables va al numerador, i el de casos possibles "
     "(el total de cartes) al denominador.")],
  ["Hi ha $10$ ors a la baralla de $40$ cartes.",
   "Aplica la regla de Laplace: casos favorables entre casos "
   "possibles."],
  ["Hi ha $10$ ors. $P(A)=\\dfrac{10}{40}=\\dfrac14$"],
  ex_text=E241)

Q("241b", 241, "b", B3, "A",
  "$B=$ «Obtenir el rei d'ors»",
  "$P(B)=\\dfrac{1}{40}$",
  [D("$P(B)=\\dfrac{10}{40}=\\dfrac14$, com si fos \"obtenir un or "
     "qualsevol\"", "CASOS_FAVORABLES_MAL_COMPTATS",
     "\"El rei d'ors\" és UNA única carta concreta, no qualsevol "
     "carta del coll d'ors: només hi ha $1$ cas favorable, no "
     "$10$."),
   D("$P(B)=\\dfrac{4}{40}=\\dfrac1{10}$, comptant els $4$ reis de "
     "la baralla", "CASOS_FAVORABLES_MAL_COMPTATS",
     "L'esdeveniment demana EXACTAMENT el rei d'ors, no qualsevol "
     "rei de qualsevol coll: només compta la carta concreta \"rei "
     "d'ors\", $1$ cas favorable."),
   D("$P(B)=\\dfrac{3}{40}$, comptant les $3$ figures d'ors",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "L'esdeveniment no és \"obtenir alguna figura d'ors\": és "
     "obtenir EXACTAMENT el rei d'ors, una única carta.")],
  ["El rei d'ors és una única carta a tota la baralla.",
   "Aplica la regla de Laplace amb $1$ cas favorable."],
  ["El rei d'ors és una única carta. $P(B)=\\dfrac{1}{40}$"],
  ex_text=E241)

Q("241c", 241, "c", B3, "A",
  "$C=$ «Obtenir espases o copes»",
  "$P(C)=\\dfrac{20}{40}=\\dfrac12$",
  [D("$P(C)=\\dfrac{10}{40}=\\dfrac14$, comptant només un coll",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "L'esdeveniment inclou DOS colls (espases I copes), no només "
     "un: cal sumar les cartes de tots dos, $10+10=20$."),
   D("$P(C)=\\dfrac{40}{40}=1$, comptant tota la baralla",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "No totes les cartes de la baralla són d'espases o copes: "
     "també n'hi ha d'ors i de bastos, que no compleixen "
     "l'esdeveniment."),
   D("$P(C)=\\dfrac{20}{40\\cdot2}=\\dfrac14$, dividint el "
     "denominador per error", "CASOS_POSSIBLES_MAL_COMPTATS",
     "El denominador de la probabilitat és sempre el nombre TOTAL "
     "de cartes de la baralla, $40$, no cap múltiple d'aquest "
     "nombre.")],
  ["Espases i copes sumen quantes cartes en total?",
   "$10+10=20$ cartes favorables d'entre $40$ possibles."],
  ["Espases i copes sumen $10+10=20$ cartes. "
   "$P(C)=\\dfrac{20}{40}=\\dfrac12$"],
  ex_text=E241)

Q("241d", 241, "d", B3, "A",
  "$D=$ «Obtenir una figura»",
  "$P(D)=\\dfrac{12}{40}=\\dfrac{3}{10}$",
  [D("$P(D)=\\dfrac{3}{40}$, comptant només les figures d'un coll",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "Cada coll té $3$ figures (sota, cavall, rei), però hi ha "
     "$4$ colls diferents: cal multiplicar $3\\cdot4=12$ figures "
     "en total, no comptar només un coll."),
   D("$P(D)=\\dfrac{4}{40}=\\dfrac1{10}$, comptant només els reis",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "\"Figura\" inclou sotes, cavalls I reis, no només els reis: "
     "cal comptar les tres figures de cada coll, $3\\cdot4=12$."),
   D("$P(D)=\\dfrac{12}{4}$, invertint numerador i denominador",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "Una probabilitat mai pot ser més gran que $1$: el nombre de "
     "cartes favorables va al numerador, i el total de la baralla "
     "al denominador.")],
  ["Cada coll té $3$ figures (sota, cavall, rei), i hi ha $4$ "
   "colls.",
   "Multiplica $3\\cdot4$ per obtenir el total de figures."],
  ["Les figures (sota, cavall, rei), $3$ per coll i $4$ colls: "
   "$3\\cdot4=12$ figures. $P(D)=\\dfrac{12}{40}=\\dfrac{3}{10}$"],
  ex_text=E241)

Q("241e", 241, "e", B3, "A",
  "$E=$ «Obtenir un as»",
  "$P(E)=\\dfrac{4}{40}=\\dfrac1{10}$",
  [D("$P(E)=\\dfrac{1}{40}$, comptant només un as", "CASOS_FAVORABLES_MAL_COMPTATS",
     "Hi ha un as per coll, i $4$ colls diferents: en total, $4$ "
     "asos a la baralla, no només $1$."),
   D("$P(E)=\\dfrac{10}{40}=\\dfrac14$, com si fos \"obtenir un or\"",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "L'esdeveniment és \"obtenir un as\" (de qualsevol coll), no "
     "\"obtenir un or\": només compten els $4$ asos, un per coll, no "
     "les $10$ cartes d'un coll sencer."),
   D("$P(E)=\\dfrac{3}{40}$, comptant només $3$ colls",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "Hi ha $4$ colls a la baralla espanyola (ors, copes, espases, "
     "bastos), no $3$: cada un té el seu propi as.")],
  ["Hi ha un as per coll, i quatre colls diferents.",
   "Suma els asos: $1+1+1+1=4$."],
  ["Hi ha un as per coll: $4$ asos en total. "
   "$P(E)=\\dfrac{4}{40}=\\dfrac1{10}$"],
  ex_text=E241)

# ---- exercici 249: bombo 0-9, freqüències relatives i probabilitat ----
E249 = ("En un bombo hi ha 10 boles numerades del 0 al 9. Es repeteix "
        "100 vegades l'experiment de treure una bola i tornar-la al "
        "bombo. Els resultats: bola 0->7, 1->13, 2->11, 3->12, 4->8, "
        "5->10, 6->12, 7->6, 8->10, 9->11. Esdeveniments: "
        "$A=$«Múltiple de 3», $B=$«Nombre senar», $C=$«Divisor de 6».")

Q("249a", 249, "a", B3, "A",
  "Quina és la freqüència relativa de l'esdeveniment $A=$«Múltiple "
  "de $3$»?",
  "$\\dfrac{42}{100}=\\dfrac{21}{50}$",
  [D("$\\dfrac{4}{100}$, comptant només els valors de $A$ "
     "($0,3,6,9$) com a $4$ boles", "FREQ_RELATIVA_PROBABILITAT_CONFOSES",
     "$A$ està format per $4$ valors DIFERENTS ($0,3,6,9$), però la "
     "freqüència relativa suma les vegades que ha SORTIT cadascun "
     "d'ells ($7+12+12+11=42$), no només compta quants valors "
     "diferents formen l'esdeveniment."),
   D("$\\dfrac{30}{100}$, comptant només un subconjunt dels valors "
     "de $A$", "RECOMPTE_MAL_FET",
     "$A=$«Múltiple de $3$» inclou el $0$, el $3$, el $6$ i el $9$: "
     "revisa que has sumat les freqüències dels quatre valors, no "
     "només d'alguns."),
   D("$\\dfrac{9}{100}$, prenent només el valor $9$ com a "
     "representant de $A$", "ESPAI_MOSTRAL_MAL_COMPTAT",
     "\"Múltiple de $3$\" no és només el valor $9$: també inclou el "
     "$0$, el $3$ i el $6$. Cal sumar les freqüències de tots "
     "quatre.")],
  ["\"Múltiple de $3$\" agrupa les boles $0$, $3$, $6$ i $9$.",
   "Suma les seves freqüències: $7+12+12+11$."],
  ["$A=\\{0,3,6,9\\}$: $f_A=7+12+12+11=42$",
   "$\\dfrac{f_A}{100}=\\dfrac{42}{100}=\\dfrac{21}{50}$"],
  ex_text=E249)

Q("249b", 249, "b", B3, "A",
  "Quina és la freqüència relativa de $A\\cup B$ (múltiple de $3$ "
  "o nombre senar)?",
  "$\\dfrac{71}{100}$",
  [D("$\\dfrac{94}{100}$, sumant directament les freqüències de $A$ "
     "i de $B$ sense ajustar res", "UNIO_DOBLE_COMPTADA",
     "Sumar directament $f_A+f_B$ compta DUES vegades les boles que "
     "compleixen totes dues condicions alhora (el $3$ i el $9$, que "
     "són múltiples de $3$ i senars): cal no repetir-les en la unió."),
   D("$\\dfrac{23}{100}$, calculant en realitat la intersecció "
     "$A\\cap B$", "UNIO_INTERSECCIO_CONFOSES",
     "$23$ és la freqüència de la INTERSECCIÓ ($A\\cap B$, boles que "
     "compleixen totes dues condicions), no de la unió (boles que "
     "compleixen almenys una de les dues)."),
   D("$\\dfrac{52}{100}$, agafant només la freqüència de $B$",
     "UNIO_INTERSECCIO_CONFOSES",
     "$52$ és la freqüència relativa de $B$ tot sol, no de la unió "
     "$A\\cup B$: cal combinar-la amb els valors que només "
     "compleixen $A$.")],
  ["$A\\cup B$ inclou totes les boles que compleixen $A$, $B$, o "
   "totes dues alhora: $\\{0,1,3,5,6,7,9\\}$, sense repetir el $3$ "
   "i el $9$.",
   "Suma les freqüències d'aquests $7$ valors, un sol cop cadascun."],
  ["$A\\cup B=\\{0,1,3,5,6,7,9\\}$ (unint $A$ i $B$, sense repetir "
   "el $3$ i el $9$, que ja hi són a totes dues)",
   "$f=7+13+12+10+12+6+11=71\\Rightarrow\\dfrac{71}{100}$"],
  ex_text=E249)

Q("249c", 249, "c", B3, "A",
  "Quina és la freqüència relativa de $A\\cap B$ (múltiple de $3$ "
  "i, alhora, senar)?",
  "$\\dfrac{23}{100}$",
  [D("$\\dfrac{71}{100}$, calculant en realitat la unió $A\\cup B$",
     "UNIO_INTERSECCIO_CONFOSES",
     "$71$ és la freqüència de la UNIÓ ($A\\cup B$, boles que "
     "compleixen almenys una condició), no de la intersecció (boles "
     "que compleixen totes dues alhora)."),
   D("$\\dfrac{94}{100}$, sumant les freqüències de $A$ i $B$ sense "
     "ajustar res", "UNIO_INTERSECCIO_CONFOSES",
     "Sumar directament $f_A+f_B$ no dona la intersecció: cal "
     "identificar quins valors compleixen TOTES DUES condicions "
     "alhora ($3$ i $9$), i sumar només les seves freqüències."),
   D("$\\dfrac{42}{100}$, agafant només la freqüència de $A$",
     "UNIO_INTERSECCIO_CONFOSES",
     "$42$ és la freqüència relativa de $A$ tot sol, no de la "
     "intersecció $A\\cap B$: cal identificar quins valors de $A$ "
     "són TAMBÉ senars.")],
  ["$A\\cap B$ inclou només les boles que són múltiple de $3$ I "
   "senars alhora: revisa quins valors de $\\{0,3,6,9\\}$ són "
   "senars.",
   "Només el $3$ i el $9$ compleixen totes dues condicions."],
  ["$A\\cap B=\\{3,9\\}$ (boles que compleixen alhora ser múltiple "
   "de $3$ i senars)",
   "$f=12+11=23\\Rightarrow\\dfrac{23}{100}$"],
  ex_text=E249)

Q("249d", 249, "d", B3, "A",
  "Quina és la freqüència relativa de $A\\cup C$ (múltiple de $3$ "
  "o divisor de $6$)?",
  "$\\dfrac{66}{100}=\\dfrac{33}{50}$",
  [D("$\\dfrac{90}{100}$, sumant directament les freqüències de $A$ "
     "i de $C$ sense ajustar res", "UNIO_DOBLE_COMPTADA",
     "Sumar directament $f_A+f_C$ compta DUES vegades les boles que "
     "compleixen totes dues condicions alhora ($3$ i $6$, que són "
     "múltiples de $3$ i alhora divisors de $6$): cal no "
     "repetir-les en la unió."),
   D("$\\dfrac{24}{100}$, calculant la intersecció en comptes de la "
     "unió", "UNIO_INTERSECCIO_CONFOSES",
     "Aquest valor correspondria, si de cas, a la intersecció "
     "$A\\cap C$ (boles múltiples de $3$ i divisors de $6$ alhora), "
     "no a la unió, que inclou totes les boles que compleixen "
     "almenys una de les dues condicions."),
   D("$\\dfrac{48}{100}$, agafant només la freqüència de $C$",
     "UNIO_INTERSECCIO_CONFOSES",
     "$48$ és la freqüència relativa de $C$ tot sol, no de la unió "
     "$A\\cup C$: cal combinar-la amb els valors que només "
     "compleixen $A$.")],
  ["$A\\cup C$ inclou totes les boles que compleixen $A=\\{0,3,6,"
   "9\\}$, $C=\\{1,2,3,6\\}$, o totes dues alhora, sense repetir "
   "el $3$ i el $6$.",
   "Suma les freqüències d'aquests valors, un sol cop cadascun."],
  ["$A\\cup C=\\{0,1,2,3,6,9\\}$ (sense repetir el $3$ i el $6$, "
   "que ja hi són a totes dues)",
   "$f=7+13+11+12+12+11=66\\Rightarrow\\dfrac{66}{100}=\\dfrac"
   "{33}{50}$"],
  ex_text=E249)

# ---- exercici 250: dau tetraèdric ----
E250 = ("Llancem 100 vegades un dau tetraèdric, anotem el nombre de "
        "la cara oculta: cara 1->28, cara 2->22, cara 3->30, "
        "cara 4->20.")

Q("250a", 250, "a", B3, "A",
  "Quina és la freqüència relativa de l'esdeveniment «Múltiple de "
  "$3$»?",
  "$\\dfrac{30}{100}=\\dfrac{3}{10}$",
  [D("$\\dfrac{3}{100}$, confonent el valor de la cara amb la seva "
     "freqüència", "FREQ_RELATIVA_PROBABILITAT_CONFOSES",
     "\"Múltiple de $3$\" en aquest dau (cares $1$ a $4$) només "
     "l'és la cara $3$: la freqüència relativa és la seva "
     "freqüència observada ($30$) entre el total ($100$), no el "
     "propi valor $3$."),
   D("$\\dfrac{50}{100}$, comptant també la cara $6$ com si el dau "
     "en tingués", "ESPAI_MOSTRAL_MAL_COMPTAT",
     "Aquest és un dau TETRAÈDRIC: només té $4$ cares (de l'$1$ al "
     "$4$), no $6$ com un dau normal. Només la cara $3$ és múltiple "
     "de $3$."),
   D("$\\dfrac{100}{100}=1$, com si totes les cares fossin "
     "múltiples de $3$", "ESPAI_MOSTRAL_MAL_COMPTAT",
     "Només la cara $3$ és múltiple de $3$ entre les $4$ possibles "
     "($1,2,3,4$): no totes les tirades compleixen aquesta "
     "condició.")],
  ["Aquest dau té només $4$ cares. Quina d'elles és múltiple de "
   "$3$?",
   "Només la cara $3$: la seva freqüència relativa és "
   "$\\frac{30}{100}$."],
  ["Múltiple de $3$ (només la cara $3$): "
   "$\\dfrac{30}{100}=\\dfrac{3}{10}$"],
  ex_text=E250)

Q("250b", 250, "b", B3, "A",
  "Quina és la freqüència relativa de l'esdeveniment «Múltiple de "
  "$2$»?",
  "$\\dfrac{42}{100}=\\dfrac{21}{50}$",
  [D("$\\dfrac{22}{100}$, comptant només la cara $2$",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "\"Múltiple de $2$\" no és només la cara $2$: la cara $4$ "
     "també ho és. Cal sumar les freqüències de totes dues."),
   D("$\\dfrac{20}{100}$, comptant només la cara $4$",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "\"Múltiple de $2$\" no és només la cara $4$: la cara $2$ "
     "també ho és. Cal sumar les freqüències de totes dues."),
   D("$\\dfrac{72}{100}$, calculant en realitat \"més gran que $1$\"",
     "ESPAI_MOSTRAL_MAL_COMPTAT",
     "Aquest valor correspon a les cares $2$, $3$ i $4$ (més grans "
     "que $1$), no a les que són múltiples de $2$: entre aquestes, "
     "el $3$ no és múltiple de $2$.")],
  ["Quines cares del $1$ al $4$ són múltiples de $2$?",
   "Les cares $2$ i $4$: suma les seves freqüències."],
  ["Múltiple de $2$ (cares $2$ i $4$): "
   "$\\dfrac{22+20}{100}=\\dfrac{42}{100}=\\dfrac{21}{50}$"],
  ex_text=E250)

Q("250c", 250, "c", B3, "A",
  "Quina és la freqüència relativa de l'esdeveniment «Cara més gran "
  "que $1$»?",
  "$\\dfrac{72}{100}=\\dfrac{18}{25}$",
  [D("$\\dfrac{28}{100}$, calculant en realitat el contrari (cara "
     "igual a $1$)", "ESDEVENIMENT_CONTRARI_MAL_CALCULAT",
     "$28$ és la freqüència de la cara $1$ (l'esdeveniment "
     "CONTRARI), no de les cares més grans que $1$: cal sumar les "
     "freqüències de $2$, $3$ i $4$, o bé restar $28$ de $100$."),
   D("$\\dfrac{42}{100}$, comptant només les cares $2$ i $4$",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "\"Més gran que $1$\" inclou també la cara $3$, no només $2$ "
     "i $4$: cal sumar les freqüències de les tres cares."),
   D("$\\dfrac{100}{100}=1$, com si totes les cares complissin la "
     "condició", "CASOS_FAVORABLES_MAL_COMPTATS",
     "La cara $1$ NO és més gran que $1$: no totes les $4$ cares "
     "compleixen aquesta condició, només $3$ d'elles.")],
  ["\"Més gran que $1$\" inclou les cares $2$, $3$ i $4$.",
   "Suma les seves freqüències: $22+30+20$."],
  ["Més gran que $1$ (cares $2$, $3$ i $4$): "
   "$\\dfrac{22+30+20}{100}=\\dfrac{72}{100}=\\dfrac{18}{25}$"],
  ex_text=E250)

Q("250d", 250, "d", B3, "A",
  "Quina és la freqüència relativa de l'esdeveniment «Cara més "
  "petita que $1$»?",
  "$0$ (esdeveniment impossible: cap cara del dau tetraèdric és més "
  "petita que $1$)",
  [D("$\\dfrac{28}{100}$, confonent-lo amb la freqüència de la cara "
     "$1$", "ESDEVENIMENT_CONTRARI_MAL_CALCULAT",
     "\"Més petita que $1$\" NO inclou la pròpia cara $1$ (que és "
     "IGUAL a $1$, no MÉS PETITA): cap cara del dau (numerades de "
     "l'$1$ al $4$) compleix aquesta condició."),
   D("$\\dfrac{1}{100}$, com si hi hagués un únic cas favorable",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "No hi ha cap cas favorable, ni tan sols un: el dau tetraèdric "
     "només té cares numerades de l'$1$ al $4$, i cap d'elles és "
     "més petita que $1$."),
   D("Aquest esdeveniment no es pot calcular perquè no té sentit",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "Sí que té sentit calcular-lo, i dona una freqüència relativa "
     "de $0$: un esdeveniment impossible també té una probabilitat "
     "ben definida, que és $0$.")],
  ["El dau tetraèdric té cares numerades de l'$1$ al $4$: n'hi ha "
   "alguna més petita que $1$?",
   "Cap cara compleix aquesta condició: la freqüència és $0$."],
  ["Com que el tetraedre només té cares de l'$1$ al $4$, no hi ha "
   "cap resultat més petit que $1$. $\\dfrac{0}{100}=0$"],
  ex_text=E250)

# ---- exercici 251: 4 monedes ----
E251 = "Llancem 4 monedes iguals."

Q("251a", 251, "a", B3, "A",
  "Quina és la probabilitat d'obtenir $4$ cares?",
  "$P=\\dfrac{1}{16}$",
  [D("$P=\\dfrac14$, com si cada moneda es tractés per separat i es "
     "multipliquessin per $4$", "PRINCIPI_MULTIPLICATIU_MAL_APLICAT",
     "Amb $4$ monedes hi ha $2^4=16$ resultats possibles en total, "
     "no $4$: cal comptar tots els resultats possibles, no només "
     "el nombre de monedes."),
   D("$P=\\dfrac{4}{16}=\\dfrac14$, com si hi haguessin $4$ maneres "
     "diferents d'obtenir $4$ cares", "CASOS_FAVORABLES_MAL_COMPTATS",
     "Només hi ha UNA manera d'obtenir $4$ cares (CCCC): les $4$ "
     "monedes han de sortir totes cara alhora, no hi ha cap altra "
     "combinació que doni aquest resultat."),
   D("$P=\\dfrac12$, com si cada moneda contribuís independentment "
     "amb probabilitat $\\frac12$ sense combinar-les",
     "ESDEVENIMENTS_INDEPENDENTS_MAL_COMBINATS",
     "La probabilitat de CADA moneda per separat és $\\frac12$, "
     "però per combinar-les en un sol esdeveniment (les $4$ cares "
     "alhora) cal multiplicar-les totes, no quedar-se amb la "
     "probabilitat d'una sola moneda.")],
  ["Amb $4$ monedes hi ha $2^4=16$ resultats possibles en total, "
   "tots igualment probables.",
   "Només hi ha UNA manera d'obtenir $4$ cares (CCCC)."],
  ["Amb $4$ monedes: $2^4=16$ resultats possibles",
   "Només hi ha una manera d'obtenir $4$ cares (CCCC): "
   "$P=\\dfrac{1}{16}$"],
  ex_text=E251)

Q("251b", 251, "b", B3, "A",
  "Quina és la probabilitat de NO obtenir cap cara (és a dir, "
  "totes creus)?",
  "$P=\\dfrac{1}{16}$",
  [D("$P=0$, perquè sempre surt alguna cara amb $4$ monedes",
     "VEREDICTE_INVERTIT",
     "No és impossible que surtin $4$ creus seguides: és poc "
     "probable, però perfectament possible. La probabilitat és "
     "$\\frac{1}{16}$, no $0$."),
   D("$P=\\dfrac{4}{16}=\\dfrac14$, com si hi haguessin diverses "
     "maneres d'obtenir totes creus", "CASOS_FAVORABLES_MAL_COMPTATS",
     "Només hi ha UNA manera d'obtenir $4$ creus (XXXX): les $4$ "
     "monedes han de sortir totes creu alhora, no hi ha cap altra "
     "combinació que doni aquest resultat."),
   D("$P=\\dfrac{15}{16}$, calculant en realitat \"almenys una "
     "cara\"", "ESDEVENIMENT_CONTRARI_MAL_CALCULAT",
     "Aquest valor correspon a l'esdeveniment CONTRARI, \"obtenir "
     "almenys una cara\": la pregunta demana \"cap cara\", que és "
     "l'esdeveniment complementari.")],
  ["\"No obtenir cap cara\" equival a obtenir $4$ creus (XXXX).",
   "Igual que amb $4$ cares, només hi ha un resultat possible "
   "d'entre els $16$."],
  ["\"No obtenir cap cara\" equival a obtenir $4$ creus (XXXX), "
   "també un únic resultat: $P=\\dfrac{1}{16}$"],
  ex_text=E251)

Q("251c", 251, "c", B3, "A",
  "Quin esdeveniment és més probable: obtenir $2$ cares, o obtenir "
  "almenys $3$ creus?",
  "És més probable obtenir $2$ cares ($P=\\frac{6}{16}=\\frac38$) "
  "que almenys $3$ creus ($P=\\frac{5}{16}$)",
  [D("És més probable obtenir almenys $3$ creus, perquè \"almenys\" "
     "sona a més casos possibles", "VEREDICTE_INVERTIT",
     "\"Sonar a més casos\" no és un càlcul: comptant amb cura, "
     "\"almenys $3$ creus\" té $5$ casos favorables "
     "($\\binom{4}{3}+\\binom{4}{4}=4+1$), mentre que \"exactament "
     "$2$ cares\" en té $6$ ($\\binom{4}{2}$): el segon és més "
     "probable."),
   D("Els dos esdeveniments són igual de probables, amb "
     "$P=\\dfrac{5}{16}$ cadascun", "COMBINACIONS_MAL_COMPTADES",
     "No tenen la mateixa probabilitat: \"exactament $2$ cares\" té "
     "$\\binom{4}{2}=6$ casos favorables, mentre que \"almenys $3$ "
     "creus\" en té $5$. Els denominadors coincideixen ($16$), però "
     "els numeradors no."),
   D("Els dos esdeveniments són igual de probables, amb "
     "$P=\\dfrac{6}{16}$ cadascun", "COMBINACIONS_MAL_COMPTADES",
     "$\\frac{6}{16}$ és la probabilitat d'\"exactament $2$ "
     "cares\", però \"almenys $3$ creus\" té una probabilitat "
     "diferent, $\\frac{5}{16}$: no coincideixen.")],
  ["Compta els casos favorables de cada esdeveniment amb "
   "combinacions: $\\binom{4}{2}$ per a $2$ cares exactes, i "
   "$\\binom{4}{3}+\\binom{4}{4}$ per a almenys $3$ creus.",
   "Compara els dos numeradors sobre el mateix denominador, $16$."],
  ["$2$ cares exactes: $\\binom{4}{2}=6$ resultats, "
   "$P=\\dfrac{6}{16}=\\dfrac38$",
   "Almenys $3$ creus: $\\binom{4}{3}+\\binom{4}{4}=4+1=5$ "
   "resultats, $P=\\dfrac{5}{16}$",
   "Com que $\\dfrac{6}{16}>\\dfrac{5}{16}$, és més probable "
   "obtenir $2$ cares"],
  ex_text=E251)

# ---- exercici 252: examen tipus test ----
E252 = ("Un examen de tipus test consta de 5 preguntes, cada una de "
        "les quals té 3 respostes possibles.")

Q("252a", 252, "a", B3, "A",
  "Calcula la probabilitat d'encertar exactament $3$ preguntes si "
  "contestes a l'atzar.",
  "$P=\\dfrac{40}{243}$",
  [D("$P=\\dfrac{10}{243}$, oblidant multiplicar les maneres de "
     "fallar les $2$ preguntes restants", "COMBINACIONS_MAL_COMPTADES",
     "Un cop triades les $3$ preguntes que s'encerten "
     "($\\binom{5}{3}=10$ maneres), per a les $2$ preguntes "
     "restants (que s'han de FALLAR) hi ha $2$ respostes "
     "incorrectes possibles a cadascuna: cal multiplicar per "
     "$2\\cdot2=4$."),
   D("$P=\\dfrac{1}{243}$, com si només hi hagués una manera "
     "d'encertar exactament $3$ preguntes", "COMBINACIONS_MAL_COMPTADES",
     "Hi ha diverses maneres de triar QUINES $3$ preguntes "
     "s'encerten ($\\binom{5}{3}=10$ maneres), i per cadascuna cal "
     "considerar també com es fallen les altres $2$: no és un únic "
     "cas."),
   D("$P=\\dfrac{3}{5}$, dividint preguntes correctes entre "
     "preguntes totals", "CASOS_POSSIBLES_MAL_COMPTATS",
     "El denominador de la probabilitat ha de ser el nombre TOTAL "
     "de maneres de contestar l'examen sencer ($3^5=243$), no el "
     "nombre de preguntes.")],
  ["El total de maneres de contestar l'examen és $3^5=243$.",
   "Per als casos favorables: tria quines $3$ preguntes s'encerten "
   "($\\binom{5}{3}$), i per a les altres $2$, compta les maneres "
   "de fallar-les ($2$ cadascuna)."],
  ["Total de maneres de contestar: $3^5=243$",
   "Casos favorables: $\\binom{5}{3}=10$ maneres de triar quines "
   "$3$ s'encerten, i $2\\cdot2=4$ maneres de fallar les altres "
   "$2$: $10\\cdot1\\cdot4=40$",
   "$P(\\text{exactament }3\\text{ encerts})=\\dfrac{40}{243}$"],
  ex_text=E252)

Q("252b", 252, "b", B3, "A",
  "Si per aprovar l'examen s'han de contestar almenys $3$ preguntes "
  "correctament, quina és la probabilitat d'aprovar?",
  "$P(\\text{aprovar})=\\dfrac{51}{243}=\\dfrac{17}{81}$",
  [D("$P(\\text{aprovar})=\\dfrac{40}{243}$, comptant només els "
     "casos d'encertar exactament $3$", "CASOS_FAVORABLES_MAL_COMPTATS",
     "\"Almenys $3$\" inclou també encertar exactament $4$ o "
     "exactament $5$ preguntes, no només $3$: cal sumar els casos "
     "favorables dels tres escenaris."),
   D("$P(\\text{aprovar})=\\dfrac{55}{243}$, sumant malament els "
     "casos de $3$, $4$ i $5$ encerts", "COMBINACIONS_MAL_COMPTADES",
     "Revisa el recompte de cada escenari per separat: exactament "
     "$3$ encerts ($40$ casos), exactament $4$ ($10$ casos) i "
     "exactament $5$ ($1$ cas). La suma correcta és $51$, no "
     "$55$."),
   D("$P(\\text{aprovar})=\\dfrac{3}{5}$, com si cada pregunta "
     "aportés $\\frac35$ de possibilitat d'aprovar",
     "CASOS_POSSIBLES_MAL_COMPTATS",
     "Aprovar depèn del resultat CONJUNT de les $5$ preguntes, no "
     "d'una fracció fixa per pregunta: cal comptar tots els casos "
     "favorables sobre el total de $243$ maneres de contestar "
     "l'examen sencer.")],
  ["\"Almenys $3$\" inclou $3$, $4$ i $5$ encerts. Calcula els "
   "casos favorables de cada escenari per separat i suma'ls.",
   "Exactament $4$: $\\binom{5}{4}\\cdot1\\cdot2=10$. Exactament "
   "$5$: $\\binom{5}{5}=1$. Suma-ho amb els $40$ d'exactament "
   "$3$."],
  ["Exactament $3$ encerts: $40$ casos (apartat anterior)",
   "Exactament $4$ encerts: $\\binom{5}{4}\\cdot1\\cdot2=10$ casos",
   "Exactament $5$ encerts: $\\binom{5}{5}=1$ cas",
   "Casos favorables per aprovar: $40+10+1=51$",
   "$P(\\text{aprovar})=\\dfrac{51}{243}=\\dfrac{17}{81}$"],
  ex_text=E252)

Q("252c", 252, "c", B3, "A",
  "I quina és la probabilitat de suspendre l'examen?",
  "$P(\\text{suspendre})=1-\\dfrac{17}{81}=\\dfrac{64}{81}$",
  [D("$P(\\text{suspendre})=\\dfrac{17}{81}$, confonent-la amb la "
     "d'aprovar", "ESDEVENIMENT_CONTRARI_MAL_CALCULAT",
     "Aquest és el valor de $P(\\text{aprovar})$, no de "
     "$P(\\text{suspendre})$: com que suspendre és l'esdeveniment "
     "CONTRARI d'aprovar, cal restar-lo d'$1$, no repetir-lo."),
   D("$P(\\text{suspendre})=1-51=-50$, restant els casos "
     "favorables en comptes de la probabilitat", "ESDEVENIMENT_CONTRARI_MAL_CALCULAT",
     "Cal restar la PROBABILITAT ($\\frac{17}{81}$, un valor entre "
     "$0$ i $1$) de $1$, no el nombre de casos favorables (que és "
     "$51$, un enter): una probabilitat mai pot ser negativa."),
   D("$P(\\text{suspendre})=\\dfrac{192}{243}$, sense simplificar "
     "ni verificar contra $1-P(\\text{aprovar})$",
     "ESDEVENIMENT_CONTRARI_MAL_CALCULAT",
     "$\\frac{192}{243}$ no coincideix amb $1-\\frac{51}{243}="
     "\\frac{192}{243}$... torna a fer la resta amb cura: el "
     "numerador correcte de $1-\\frac{51}{243}$ és $243-51=192$, "
     "que simplificat dona $\\frac{64}{81}$, no un altre valor.")],
  ["Suspendre és l'esdeveniment CONTRARI d'aprovar.",
   "$P(\\text{suspendre})=1-P(\\text{aprovar})$."],
  ["Com que suspendre és el contrari d'aprovar: "
   "$P(\\text{suspendre})=1-\\dfrac{17}{81}=\\dfrac{64}{81}$"],
  ex_text=E252)


# =====================================================================
# BLOC 4 — ESDEVENIMENTS: COMPATIBLES, UNIÓ, CONDICIONADA (253-259)
# =====================================================================

# ---- exercici 253: urna 100 boles, esdeveniments A,B,C,D,F ----
E253 = ("En una urna hi ha 100 boles numerades de l'1 al 100. "
        "$A=$«múltiple de 5», $B=$«múltiple de 3», $C=$«divisible "
        "per 2», $D=$«divisible per 10», $F=$«divisible per 1».")

Q("253a", 253, "a", B4, "A",
  "Quants esdeveniments elementals componen $B=$«múltiple de $3$», "
  "i quina és la seva probabilitat?",
  "$33$ esdeveniments elementals; $P(B)=\\dfrac{33}{100}$",
  [D("$33$ esdeveniments elementals; $P(B)=\\dfrac{100}{33}$",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "Una probabilitat mai pot ser més gran que $1$: el nombre de "
     "múltiples de $3$ va al numerador, i el total de boles ($100$) "
     "al denominador, no al revés."),
   D("$34$ esdeveniments elementals (comptant l'\"$1$\" com a "
     "múltiple)", "CASOS_FAVORABLES_MAL_COMPTATS",
     "L'$1$ no és múltiple de $3$: el nombre de múltiples de $3$ "
     "entre $1$ i $100$ és $\\left\\lfloor\\frac{100}{3}\\right"
     "\\rfloor=33$, no $34$."),
   D("$30$ esdeveniments elementals, comptant només fins a $90$",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "T'has deixat pel camí els múltiples de $3$ entre $91$ i "
     "$100$ (com el $93$, el $96$ i el $99$): el recompte correcte "
     "des d'$1$ fins a $100$ és $33$.")],
  ["Divideix $100$ entre $3$ i queda't amb la part entera: aquest "
   "és el nombre de múltiples de $3$ entre $1$ i $100$.",
   "$\\left\\lfloor\\frac{100}{3}\\right\\rfloor=33$."],
  ["$B$: múltiples de $3$, des de $3$ fins a $99$: $33$ "
   "esdeveniments elementals ($\\lfloor100/3\\rfloor=33$). "
   "$P(B)=\\dfrac{33}{100}$"],
  ex_text=E253)

Q("253b", 253, "b", B4, "A",
  "Quina és la probabilitat de $D=$«divisible per $10$»?",
  "$P(D)=\\dfrac{10}{100}=\\dfrac1{10}$",
  [D("$P(D)=\\dfrac{100}{100}=1$, com si tots els números ho "
     "complissin", "CASOS_FAVORABLES_MAL_COMPTATS",
     "No tots els números de l'$1$ al $100$ són divisibles per "
     "$10$: només ho són $10, 20, 30,\\ldots,100$, en total $10$ "
     "d'ells."),
   D("$P(D)=\\dfrac{50}{100}=\\dfrac12$, confonent-lo amb "
     "divisible per $2$", "CASOS_FAVORABLES_MAL_COMPTATS",
     "\"Divisible per $10$\" és més restrictiu que \"divisible per "
     "$2$\": només compleixen la condició $10, 20, \\ldots, 100$, "
     "no tots els parells."),
   D("$P(D)=\\dfrac{20}{100}=\\dfrac15$, confonent-lo amb "
     "múltiple de $5$", "CASOS_FAVORABLES_MAL_COMPTATS",
     "\"Divisible per $10$\" és més restrictiu que \"múltiple de "
     "$5$\": tots els múltiples de $10$ ho són també de $5$, però "
     "no al revés (el $5$, el $15$... són múltiples de $5$ però "
     "no de $10$).")],
  ["Compta els múltiples de $10$ entre $1$ i $100$: "
   "$10,20,\\ldots,100$.",
   "Divideix $100$ entre $10$."],
  ["$D$: divisibles per $10$, des de $10$ fins a $100$: $10$ "
   "esdeveniments elementals. $P(D)=\\dfrac{10}{100}=\\dfrac1{10}$"],
  ex_text=E253)

Q("253c", 253, "c", B4, "A",
  "Quina és la probabilitat de $F=$«divisible per $1$»?",
  "$P(F)=1$ (és l'esdeveniment segur: tots els números són "
  "divisibles per $1$)",
  [D("$P(F)=\\dfrac{1}{100}$, com si només un número ho complís",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "TOTS els nombres enters són divisibles per $1$, no només "
     "un: els $100$ nombres de l'urna compleixen aquesta condició."),
   D("$P(F)=0$, perquè \"divisible per $1$\" no és una condició "
     "real", "CASOS_FAVORABLES_MAL_COMPTATS",
     "És una condició real, i la compleixen absolutament tots els "
     "nombres: per això la seva probabilitat és $1$ (esdeveniment "
     "segur), no $0$ (impossible)."),
   D("$P(F)=\\dfrac{50}{100}=\\dfrac12$, confonent-lo amb "
     "divisible per $2$", "CASOS_FAVORABLES_MAL_COMPTATS",
     "\"Divisible per $1$\" no és el mateix que \"divisible per "
     "$2$\": absolutament tots els nombres compleixen la primera "
     "condició, no només la meitat.")],
  ["Quins nombres NO són divisibles per $1$?",
   "Cap: tot nombre enter és divisible per $1$."],
  ["$F$: divisibles per $1$, és a dir, tots els números de l'$1$ "
   "al $100$: $100$ esdeveniments elementals. "
   "$P(F)=\\dfrac{100}{100}=1$ (l'esdeveniment segur)"],
  ex_text=E253)

Q("253d", 253, "d", B4, "B",
  "«Hi ha algun parell d'esdeveniments incompatibles entre "
  "$A$, $B$, $C$, $D$ i $F$»",
  "Fals: cap parell d'aquests cinc esdeveniments és incompatible, "
  "perquè sempre hi ha algun número que compleix totes dues "
  "condicions alhora (per exemple, el $30$ compleix totes cinc "
  "condicions a la vegada)",
  [D("Cert: $D$ i $C$ són incompatibles, perquè un múltiple de "
     "$10$ no pot ser parell", "COMPATIBLE_INCOMPATIBLE_CONFOSOS",
     "Un múltiple de $10$ SEMPRE és parell (tot múltiple de $10$ ho "
     "és també de $2$): $D$ i $C$ comparteixen molts elements, no "
     "en tenen zero en comú."),
   D("Cert: $A$ i $B$ són incompatibles, perquè cap número és "
     "alhora múltiple de $5$ i de $3$", "COMPATIBLE_INCOMPATIBLE_CONFOSOS",
     "Sí que n'hi ha: per exemple, el $15$ i el $30$ són múltiples "
     "de $5$ i de $3$ alhora. $A$ i $B$ comparteixen elements, no "
     "són incompatibles."),
   D("Cert: $F$ és incompatible amb tots els altres, perquè conté "
     "tots els números", "COMPATIBLE_INCOMPATIBLE_CONFOSOS",
     "Que $F$ contingui tots els números fa precisament que "
     "COMPARTEIXI elements amb qualsevol altre esdeveniment (tots "
     "els d'aquell altre esdeveniment): això el fa compatible amb "
     "tots, no incompatible.")],
  ["Dos esdeveniments són incompatibles quan no comparteixen CAP "
   "número en comú.",
   "Prova amb un número com el $30$: compleix múltiples condicions "
   "alhora?"],
  ["El $30$ és múltiple de $5$, de $3$, parell, múltiple de $10$ i "
   "divisible per $1$, tot a la vegada: cap parell d'aquests "
   "esdeveniments és incompatible"],
  ex_text=E253)

Q("253e", 253, "e", B4, "B",
  "«Hi ha algun parell d'esdeveniments contraris entre $A$, $B$, "
  "$C$, $D$ i $F$»",
  "Fals: cap parell d'$A$, $B$, $C$, $D$, $F$ és contrari, ja que "
  "dos esdeveniments contraris han d'esgotar l'espai mostral sense "
  "superposar-se, i aquí tots els parells són compatibles (es "
  "superposen)",
  [D("Cert: $C$ (divisible per $2$) i $F$ (divisible per $1$) són "
     "contraris", "COMPATIBLE_INCOMPATIBLE_CONFOSOS",
     "$C$ i $F$ no són contraris: de fet, $C$ està CONTINGUT dins "
     "de $F$ (tot múltiple de $2$ també és divisible per $1$), i "
     "dos esdeveniments contraris no poden compartir cap element."),
   D("Cert: $A$ (múltiple de $5$) i $D$ (divisible per $10$) són "
     "contraris", "COMPATIBLE_INCOMPATIBLE_CONFOSOS",
     "$A$ i $D$ no són contraris: de fet, $D$ està CONTINGUT dins "
     "de $A$ (tot múltiple de $10$ també ho és de $5$), i dos "
     "esdeveniments contraris no poden compartir cap element."),
   D("Cert: $B$ (múltiple de $3$) i $C$ (divisible per $2$) són "
     "contraris", "COMPATIBLE_INCOMPATIBLE_CONFOSOS",
     "$B$ i $C$ comparteixen elements (com el $6$, múltiple de $3$ "
     "i divisible per $2$ alhora): dos esdeveniments contraris no "
     "poden tenir cap element en comú, així que no ho són.")],
  ["Dos esdeveniments contraris no comparteixen cap element I, "
   "junts, inclouen tots els resultats possibles.",
   "Comprova si cada parell comparteix algun número: si en "
   "comparteixen, no poden ser contraris."],
  ["Tots els parells d'aquests esdeveniments comparteixen algun "
   "número (són compatibles): per tant, cap parell és contrari, ja "
   "que els contraris mai comparteixen elements"],
  ex_text=E253)

# ---- exercici 254: dinar 60 persones, home/dona i carn/peix ----
E254 = ("En un dinar hi ha 28 homes i 32 dones. Han menjat carn 16 "
        "homes i 20 dones, i la resta, peix.")

Q("254a", 254, "a", B4, "A",
  "Si escollim una persona a l'atzar, quina és la probabilitat que "
  "sigui home?",
  "$P(\\text{home})=\\dfrac{28}{60}=\\dfrac{7}{15}$",
  [D("$P(\\text{home})=\\dfrac{16}{60}$, comptant només els homes "
     "que han menjat carn", "PROBABILITAT_CONDICIONADA_MAL",
     "La pregunta demana la probabilitat de ser home EN GENERAL, no "
     "d'entre els que han menjat carn: cal el total d'homes ($28$), "
     "no només els $16$ que han menjat carn."),
   D("$P(\\text{home})=\\dfrac{28}{32}$, comparant-lo amb el "
     "nombre de dones", "CASOS_POSSIBLES_MAL_COMPTATS",
     "El denominador de la probabilitat ha de ser el TOTAL de "
     "persones al dinar ($28+32=60$), no el nombre de dones."),
   D("$P(\\text{home})=\\dfrac12$, com si hi haguessin el mateix "
     "nombre d'homes i dones", "CASOS_FAVORABLES_MAL_COMPTATS",
     "Hi ha $28$ homes i $32$ dones: no són el mateix nombre, així "
     "que la probabilitat no és exactament $\\frac12$.")],
  ["El total de persones al dinar és $28+32=60$.",
   "La probabilitat de ser home és $\\dfrac{28}{60}$."],
  ["Hi ha $28$ homes d'entre $60$ persones: "
   "$P(\\text{home})=\\dfrac{28}{60}=\\dfrac{7}{15}$"],
  ex_text=E254)

Q("254b", 254, "b", B4, "A",
  "Quina és la probabilitat que hagi menjat peix?",
  "$P(\\text{peix})=\\dfrac{24}{60}=\\dfrac25$",
  [D("$P(\\text{peix})=\\dfrac{36}{60}$, calculant en realitat la "
     "probabilitat de menjar carn", "ESDEVENIMENT_CONTRARI_MAL_CALCULAT",
     "$36$ és el total de persones que han menjat CARN "
     "($16+20$), no peix: la resta, $60-36=24$, és qui ha menjat "
     "peix."),
   D("$P(\\text{peix})=\\dfrac{16}{60}$, comptant només els homes "
     "que han menjat peix", "PROBABILITAT_CONDICIONADA_MAL",
     "La pregunta demana la probabilitat de menjar peix EN GENERAL, "
     "no només entre els homes: cal comptar homes I dones que han "
     "menjat peix."),
   D("$P(\\text{peix})=\\dfrac{20}{60}$, comptant només les dones "
     "que han menjat peix", "PROBABILITAT_CONDICIONADA_MAL",
     "$20$ és el nombre de dones que han menjat CARN, no peix: cal "
     "calcular primer qui ha menjat peix (la resta, $60-36=24$ "
     "persones en total).")],
  ["Calcula primer quantes persones han menjat carn en total: "
   "$16+20=36$.",
   "Les que han menjat peix són la resta: $60-36$."],
  ["Han menjat carn $16+20=36$ persones, i per tant peix, "
   "$60-36=24$ persones: $P(\\text{peix})=\\dfrac{24}{60}=\\dfrac25$"],
  ex_text=E254)

Q("254c", 254, "c", B4, "A",
  "Quina és la probabilitat que sigui home I hagi menjat peix?",
  "$P(\\text{home i peix})=\\dfrac{12}{60}=\\dfrac15$",
  [D("$P(\\text{home i peix})=\\dfrac{28}{60}$, agafant només la "
     "probabilitat de ser home", "UNIO_INTERSECCIO_CONFOSES",
     "\"Home i peix\" demana totes dues condicions ALHORA, no "
     "només \"ser home\": cal comptar quants homes concretament han "
     "menjat peix, no tots els homes."),
   D("$P(\\text{home i peix})=\\dfrac{16}{60}$, comptant els homes "
     "que han menjat CARN", "UNIO_INTERSECCIO_CONFOSES",
     "$16$ homes van menjar carn, no peix: dels $28$ homes, els que "
     "han menjat peix són $28-16=12$."),
   D("$P(\\text{home i peix})=\\dfrac{28+24}{60}$, sumant les "
     "probabilitats individuals com si fos una unió", "UNIO_INTERSECCIO_CONFOSES",
     "\"Home I peix\" (amb la I) és una INTERSECCIÓ, no una unió: no "
     "es couen sumant les probabilitats individuals, cal comptar "
     "directament quantes persones compleixen totes dues condicions "
     "alhora.")],
  ["Dels $28$ homes, quants han menjat peix (no carn)?",
   "$28-16=12$ homes han menjat peix: aquest és el numerador."],
  ["Han menjat peix i, a més, són homes, $12$ persones "
   "($28-16=12$) d'entre $60$: "
   "$P(\\text{home i peix})=\\dfrac{12}{60}=\\dfrac15$"],
  ex_text=E254)

# ---- exercici 255: guarderia, nen o cabells negres ----
Q("255", 255, "", B4, "A",
  "En una guarderia hi ha 20 nens i 16 nenes. La meitat dels nens i "
  "tres quartes parts de les nenes tenen els cabells negres, i la "
  "resta, rossos. Quina és la probabilitat que, si n'escollim un a "
  "l'atzar, sigui nen o tingui els cabells negres?",
  "$P=\\dfrac{32}{36}=\\dfrac89$",
  [D("$P=\\dfrac{20}{36}+\\dfrac{22}{36}$, sumant \"ser nen\" i "
     "\"tenir cabells negres\" sense evitar la doble comptabilitat",
     "UNIO_DOBLE_COMPTADA",
     "Tots els nens amb cabells negres ($10$) ja estan comptats "
     "dins de \"ser nen\": sumar directament les dues probabilitats "
     "els compta dues vegades. Cal restar la intersecció, o bé "
     "sumar només les nenes de cabells negres als nens (que ja "
     "inclouen tots els colors)."),
   D("$P=\\dfrac{10}{36}$, comptant només els nens amb cabells "
     "negres", "UNIO_INTERSECCIO_CONFOSES",
     "$10$ és la INTERSECCIÓ (nens I cabells negres alhora), però "
     "la pregunta demana la UNIÓ (\"nen O cabells negres\"), que "
     "inclou molta més gent: tots els nens (siguin rossos o no) i "
     "totes les nenes de cabells negres."),
   D("$P=\\dfrac{20}{36}=\\dfrac59$, comptant només \"ser nen\"",
     "UNIO_INTERSECCIO_CONFOSES",
     "\"Nen o cabells negres\" inclou més gent que només \"ser "
     "nen\": també hi entren les nenes que tenen els cabells "
     "negres, encara que no siguin nens.")],
  ["Tots els nens (siguin del color de cabells que siguin) ja "
   "compleixen \"ser nen\": només cal afegir-hi les nenes de "
   "cabells negres, que encara no comptaves.",
   "Nenes de cabells negres: $16\\cdot\\frac34=12$. "
   "Suma-les als $20$ nens."],
  ["Cabells negres: $20\\cdot\\frac12=10$ nens i "
   "$16\\cdot\\frac34=12$ nenes",
   "Casos favorables: tots els nens ($20$) més les nenes de "
   "cabells negres ($12$), sense superposició entre \"nen\" i "
   "\"nena\": $20+12=32$",
   "$P(\\text{nen o cabells negres})=\\dfrac{32}{36}=\\dfrac89$"],
  ex_text="")

# ---- exercici 256: diaris A i B ----
E256 = ("En una ciutat llegeixen el diari A el 30% dels habitants, "
        "el diari B el 20%, i el 7% llegeixen els dos diaris.")

Q("256a", 256, "a", B4, "A",
  "Quina probabilitat hi ha que, si n'escollim un a l'atzar, "
  "llegeixi algun dels dos diaris?",
  "$P(A\\cup B)=0{,}43$",
  [D("$P(A\\cup B)=0{,}50$, sumant directament $0{,}30+0{,}20$ "
     "sense restar res", "UNIO_DOBLE_COMPTADA",
     "Sumar directament $P(A)+P(B)$ compta dues vegades les "
     "persones que llegeixen tots dos diaris: cal restar-los un "
     "cop, $P(A)+P(B)-P(A\\cap B)$."),
   D("$P(A\\cup B)=0{,}07$, agafant només la intersecció",
     "UNIO_INTERSECCIO_CONFOSES",
     "$0{,}07$ és la probabilitat de llegir TOTS DOS diaris "
     "(intersecció), no d'algun dels dos (unió), que és més gran."),
   D("$P(A\\cup B)=0{,}57$, calculant en realitat \"cap diari\"",
     "ESDEVENIMENT_CONTRARI_MAL_CALCULAT",
     "$0{,}57$ correspondria, si de cas, a la probabilitat contrària "
     "(\"no llegir cap diari\"), no a la de \"llegir algun dels "
     "dos\".")],
  ["Sumar les probabilitats individuals compta dues vegades les "
   "persones que llegeixen els dos diaris.",
   "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$."],
  ["$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=0{,}30+0{,}20-0{,}07="
   "0{,}43$"],
  ex_text=E256)

Q("256b", 256, "b", B4, "A",
  "I quina probabilitat hi ha que no llegeixi cap dels dos diaris?",
  "$P(\\text{cap diari})=1-0{,}43=0{,}57$",
  [D("$P(\\text{cap diari})=0{,}43$, confonent-la amb \"llegir "
     "algun dels dos\"", "ESDEVENIMENT_CONTRARI_MAL_CALCULAT",
     "Aquest és el valor de $P(A\\cup B)$ (llegir algun diari), no "
     "de \"no llegir cap\": cal restar-lo d'$1$, no repetir-lo."),
   D("$P(\\text{cap diari})=1-0{,}30-0{,}20=0{,}50$, sense tenir "
     "en compte la intersecció", "UNIO_DOBLE_COMPTADA",
     "Cal restar la probabilitat de la UNIÓ ($P(A\\cup B)=0{,}43$) "
     "d'$1$, no restar directament $P(A)$ i $P(B)$ per separat "
     "(això no compensa correctament la intersecció)."),
   D("$P(\\text{cap diari})=0{,}07$, confonent-la amb la "
     "intersecció", "UNIO_INTERSECCIO_CONFOSES",
     "$0{,}07$ és la probabilitat de llegir TOTS DOS diaris alhora, "
     "no de no llegir-ne cap: són esdeveniments completament "
     "diferents.")],
  ["\"No llegir cap diari\" és l'esdeveniment contrari de "
   "\"llegir algun dels dos\".",
   "$P(\\text{cap})=1-P(A\\cup B)$."],
  ["No llegir cap diari és l'esdeveniment contrari de \"llegir "
   "algun dels dos\": $P(\\text{cap diari})=1-P(A\\cup B)="
   "1-0{,}43=0{,}57$"],
  ex_text=E256)

Q("256c", 256, "c", B4, "A",
  "Quina probabilitat hi ha que llegeixi exactament UN dels dos "
  "diaris (no els dos)?",
  "$P(\\text{exactament un})=0{,}36$",
  [D("$P(\\text{exactament un})=0{,}43$, confonent-la amb \"algun "
     "dels dos\"", "UNIO_INTERSECCIO_CONFOSES",
     "$0{,}43$ inclou també els que en llegeixen els DOS: "
     "\"exactament un\" ha d'excloure aquest grup, restant-lo de "
     "cada diari per separat."),
   D("$P(\\text{exactament un})=0{,}50$, sumant $P(A)+P(B)$ sense "
     "restar la intersecció enlloc", "UNIO_DOBLE_COMPTADA",
     "Sumar $0{,}30+0{,}20$ directament inclou dues vegades qui "
     "llegeix els dos diaris: cal restar-los de cada probabilitat "
     "abans de sumar-les, $(0{,}30-0{,}07)+(0{,}20-0{,}07)$."),
   D("$P(\\text{exactament un})=0{,}07$, agafant la intersecció "
     "en comptes de la resta", "UNIO_INTERSECCIO_CONFOSES",
     "$0{,}07$ és la probabilitat de llegir els DOS diaris, que és "
     "precisament el que cal EXCLOURE per calcular \"exactament "
     "un\".")],
  ["Resta la intersecció de cada probabilitat individual per "
   "obtenir \"només A\" i \"només B\" per separat.",
   "Suma els dos resultats: "
   "$(0{,}30-0{,}07)+(0{,}20-0{,}07)$."],
  ["Només A: $P(A)-P(A\\cap B)=0{,}30-0{,}07=0{,}23$",
   "Només B: $P(B)-P(A\\cap B)=0{,}20-0{,}07=0{,}13$",
   "Exactament un: $0{,}23+0{,}13=0{,}36$"],
  ex_text=E256)

# ---- exercici 257: bosses de boles, repartiment de feines ----
E257 = ("En Lluís i en Joan han de recollir l'habitació. En Lluís "
        "posa en una bossa 3 boles vermelles, 2 de verdes i 1 de "
        "blava, i proposa treure'n una: si és vermella, recull en "
        "Joan; si és blava, recull ell.")

Q("257a", 257, "a", B4, "A",
  "Quina és la probabilitat de cada color de bola?",
  "$P(\\text{vermella})=\\dfrac12$, $P(\\text{verda})=\\dfrac13$, "
  "$P(\\text{blava})=\\dfrac16$",
  [D("$P(\\text{vermella})=\\dfrac35$, $P(\\text{verda})=\\dfrac25$, "
     "$P(\\text{blava})=\\dfrac15$",
     "CASOS_POSSIBLES_MAL_COMPTATS",
     "El denominador ha de ser el TOTAL de boles de la bossa, "
     "$3+2+1=6$, no $5$: sembla que t'has deixat la bola blava en "
     "comptar-les."),
   D("$P(\\text{vermella})=\\dfrac13$, $P(\\text{verda})=\\dfrac12$, "
     "intercanviant vermella i verda", "RECOMPTE_MAL_FET",
     "Revisa quin color té més boles: n'hi ha $3$ vermelles i "
     "només $2$ verdes, així que la vermella ha de tenir la "
     "probabilitat més alta, no la verda."),
   D("Totes les boles tenen la mateixa probabilitat, "
     "$\\dfrac13$ cadascuna, perquè hi ha $3$ colors",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "El nombre de COLORS diferents ($3$) no determina la "
     "probabilitat: cal comptar quantes boles té cada color, i no "
     "en té el mateix nombre cadascun.")],
  ["La bossa té $3+2+1=6$ boles en total: aquest és el nombre de "
   "casos possibles per als tres colors.",
   "Aplica la regla de Laplace a cada color per separat: casos "
   "favorables d'aquell color entre $6$."],
  ["$P(\\text{vermella})=\\dfrac36=\\dfrac12$, "
   "$P(\\text{verda})=\\dfrac26=\\dfrac13$, "
   "$P(\\text{blava})=\\dfrac16$"],
  ex_text=E257)

Q("257b", 257, "b", B4, "A",
  "És just el tracte que proposa en Lluís (vermella: recull en "
  "Joan; blava: recull en Lluís)?",
  "No és just: en Joan tindria una probabilitat de recollir molt "
  "més alta ($\\frac12$) que en Lluís ($\\frac16$)",
  [D("Sí, és just, perquè cada germà té assignat un color diferent",
     "PROBABILITAT_CONDICIONADA_MAL",
     "Tenir un color assignat no fa el tracte just per si sol: cal "
     "que la PROBABILITAT de sortir aquell color sigui igual per a "
     "tots dos, i aquí no ho és ($\\frac12$ per la vermella enfront "
     "de $\\frac16$ per la blava)."),
   D("Sí, és just, perquè només hi ha un color assignat a cada "
     "germà i no es repeteix cap", "PROBABILITAT_CONDICIONADA_MAL",
     "Que els colors no es repeteixin entre germans no garanteix "
     "que el tracte sigui just: el que ho determina és si les "
     "probabilitats de sortir cada color assignat són iguals, i no "
     "ho són."),
   D("No es pot saber si és just sense conèixer el color favorit "
     "de cadascú", "PROBABILITAT_CONDICIONADA_MAL",
     "La justícia del tracte no depèn de preferències personals "
     "pels colors: depèn únicament de si les probabilitats "
     "assignades a cada germà són iguals o no.")],
  ["Compara la probabilitat que li toca a en Joan (vermella) amb "
   "la que li toca a en Lluís (blava).",
   "$P(\\text{vermella})=\\frac12$ enfront de "
   "$P(\\text{blava})=\\frac16$: són iguals?"],
  ["En Joan recull si surt vermella ($P=\\frac12$), en Lluís si "
   "surt blava ($P=\\frac16$). Com que les probabilitats no són "
   "iguals, el tracte NO és just"],
  ex_text=E257)

Q("257c", 257, "c", B4, "A",
  "En Joan proposa un nou tracte: si surt vermell, recollirà ell; "
  "si surt blau o verd, recollirà en Lluís. És just aquest tracte?",
  "Sí, és just: totes dues probabilitats són $\\frac12$ "
  "($P(\\text{vermella})=\\frac12$, $P(\\text{blava o verda})="
  "\\frac16+\\frac13=\\frac12$)",
  [D("No és just, perquè en Joan té assignat un sol color i en "
     "Lluís dos colors diferents", "PROBABILITAT_CONDICIONADA_MAL",
     "El nombre de colors assignats a cadascú no determina la "
     "justícia del tracte: el que importa és la probabilitat total "
     "de cada combinació, i sumant blava i verda "
     "($\\frac16+\\frac13$) s'obté exactament $\\frac12$, igual "
     "que la vermella."),
   D("No és just, perquè la vermella té més boles que qualsevol "
     "altre color per separat", "PROBABILITAT_CONDICIONADA_MAL",
     "Encara que la vermella tingui més boles que el blau o el "
     "verd per SEPARAT, el que compta és la probabilitat "
     "COMBINADA de \"blau o verd\", que sumada arriba als mateixos "
     "$\\frac12$ que la vermella."),
   D("Sí, és just, però només per casualitat, ja que no es pot "
     "comprovar amb exactitud", "PROBABILITAT_CONDICIONADA_MAL",
     "Sí que es pot comprovar amb exactitud, sumant les fraccions "
     "corresponents: $\\frac16+\\frac13=\\frac12$, exactament igual "
     "que $P(\\text{vermella})=\\frac12$: no és casualitat, és un "
     "càlcul exacte.")],
  ["Suma les probabilitats de \"blau o verd\": "
   "$\\frac16+\\frac13$.",
   "Compara aquest resultat amb $P(\\text{vermella})=\\frac12$."],
  ["Recull en Joan si surt vermell ($P=\\frac12$), i en Lluís si "
   "surt blau o verd ($P=\\frac16+\\frac13=\\frac12$). Com que "
   "totes dues probabilitats són $\\frac12$, aquest tracte SÍ és "
   "just"],
  ex_text=E257)

# ---- exercici 258: claus i panys ----
Q("258", 258, "", B4, "A",
  "Si tinc 3 claus que obren els 3 panys d'una porta, però no sé "
  "quina és la que obre cada pany, quina és la probabilitat que "
  "encerti la combinació al primer intent? I si tingués 3 claus i "
  "només 2 panys (una clau no obre cap pany)?",
  "En tots dos casos, $P(\\text{encertar})=\\dfrac13$",
  [D("Amb $3$ claus i $3$ panys, $P=\\dfrac13$; però amb $3$ claus "
     "i $2$ panys, $P=\\dfrac12$, perquè hi ha menys panys",
     "CASOS_POSSIBLES_MAL_COMPTATS",
     "El que compta no és quants panys hi ha, sinó quantes CLAUS "
     "tens per triar (sempre $3$) i quantes d'elles obren el pany "
     "concret que proves (sempre només $1$): el resultat no canvia "
     "encara que hi hagi menys panys."),
   D("Amb $3$ claus i $3$ panys, $P=\\dfrac33=1$, perquè totes les "
     "claus obren algun pany", "CASOS_FAVORABLES_MAL_COMPTATS",
     "Que totes les claus obrin ALGUN pany no vol dir que qualsevol "
     "clau obri EL pany concret que estàs provant: només $1$ de "
     "les $3$ claus obre aquell pany en particular."),
   D("No es pot calcular sense saber en quin ordre es proven les "
     "claus", "CASOS_POSSIBLES_MAL_COMPTATS",
     "Sí que es pot calcular sense conèixer l'ordre: la probabilitat "
     "d'encertar al primer intent només depèn de quantes claus tens "
     "per triar i quantes són vàlides per al pany que proves.")],
  ["En tots dos casos, tens $3$ claus per triar a l'atzar.",
   "En tots dos casos, només $1$ de les $3$ claus obre el pany "
   "concret que proves."],
  ["Amb $3$ claus, cadascuna obrint un pany diferent dels $3$: "
   "$P(\\text{encertar})=\\dfrac13$",
   "Amb $3$ claus però només $2$ panys (una no obre res): segueixes "
   "tenint $3$ claus, i només $1$ obre el pany concret: "
   "$P(\\text{encertar})=\\dfrac13$ igualment"],
  ex_text="")

# ---- exercici 259: coincidència Paula/Robert a la botiga ----
Q("259", 259, "", B4, "A",
  "La Paula va a una botiga 2 vegades per setmana, i en Robert hi "
  "treballa 4 dies a la setmana. Si el divendres és l'únic dia en "
  "què no hi va cap dels dos (i la botiga tanca els diumenges), "
  "quina és la probabilitat que coincideixin dos dies?",
  "$P=\\dfrac{30}{50}=\\dfrac35$",
  [D("$P=\\dfrac{2}{4}=\\dfrac12$, comparant directament els dies "
     "de cadascú sense combinatòria", "COMBINACIONS_MAL_COMPTADES",
     "El càlcul no és una simple comparació de $2$ contra $4$: cal "
     "comptar de quantes maneres es poden triar els dies de "
     "cadascú ($\\binom{5}{2}$ i $\\binom{5}{4}$) i, d'entre totes "
     "aquestes combinacions, quantes fan que coincideixin "
     "exactament els $2$ dies de la Paula."),
   D("$P=\\dfrac{6}{10}=\\dfrac35$, calculant-ho correctament però "
     "sobre un total mal comptat ($10$ en comptes de $50$)",
     "CASOS_POSSIBLES_MAL_COMPTATS",
     "El total de combinacions possibles és "
     "$\\binom{5}{2}\\cdot\\binom{5}{4}=10\\cdot5=50$, no $10$: "
     "aquest darrer valor és només el nombre de tries de la Paula, "
     "sense combinar-lo amb les d'en Robert."),
   D("$P=1$, perquè en Robert treballa gairebé tots els dies i "
     "sempre hi hauria de coincidir", "CASOS_FAVORABLES_MAL_COMPTATS",
     "Encara que en Robert treballi $4$ dels $5$ dies, no és segur "
     "que els $2$ dies concrets de la Paula hi coincideixin "
     "tots dos: si un d'ells és justament el dia lliure d'en "
     "Robert, només hi coincidirà $1$ dia, no $2$.")],
  ["Els dos trien dies d'entre els mateixos $5$ dies (tots menys "
   "divendres i diumenge). Compta les combinacions possibles per a "
   "cadascun amb $\\binom{5}{2}$ i $\\binom{5}{4}$.",
   "Després, compta en quantes d'aquestes combinacions els $2$ "
   "dies de la Paula cauen tots dos dins dels $4$ dies d'en "
   "Robert."],
  ["La Paula tria $2$ dies d'entre $5$: $\\binom{5}{2}=10$ "
   "maneres. En Robert en treballa $4$ (li'n falta triar $1$ de "
   "lliure): $\\binom{5}{4}=5$ maneres",
   "Total de combinacions possibles: $10\\cdot5=50$",
   "Coincidència completa (els $2$ dies de la Paula són dels $4$ "
   "d'en Robert) quan els dies de la Paula no inclouen el dia "
   "lliure d'en Robert: per a cada un dels $5$ possibles dies "
   "lliures, hi ha $\\binom{4}{2}=6$ parells de la Paula que no "
   "l'inclouen: $5\\cdot6=30$ casos",
   "$P(\\text{coincidir }2\\text{ dies})=\\dfrac{30}{50}=\\dfrac35$"],
  ex_text="")

# =====================================================================
# CONTINGUT NOU — via «tarr» — probabilitat composta i condicionada
# =====================================================================
# Exercicis 305-320, numeració en exclusiva d'aquesta via (vegeu
# briefs/BRIEF-tarr.md). Dos blocs nous, declarats amb el registrador
# `blocs()` perquè aquest full ja existia abans del refactor R1-R5 i els
# seus 4 blocs originals encara viuen a `FULLS[12]["blocs"]` de build.py:
# aquests dos s'hi afegeixen darrere del bloc `esdeveniments`, sense tocar
# aquell fitxer.
#
# El full tenia un forat curricular real: cap ítem de probabilitat
# condicionada pròpiament dita, cap diagrama d'arbre, cap experiment sense
# reposició. Són contingut de 4t d'ESO i el prerequisit directe del bloc de
# probabilitat de 1r de batxillerat. Vegeu NOTES-tarr.md per a les
# decisions pedagògiques completes.
#
# Totes les respostes d'aquesta secció s'han calculat amb `fractions.Fraction`
# i s'han contrastat per una via independent (enumeració exhaustiva dels
# espais mostrals finits, o la relació de Bayes quan calia una condicionada
# inversa) abans d'escriure cap Q(). `tests/test_probabilitat_nou.py` en fa
# el mateix recàlcul, per separat i sense importar res d'aquest fitxer.

blocs([
    ("probabilitat_composta", "Probabilitat composta: dos experiments",
     "Experiments amb i sense reposició, diagrames d'arbre, i la "
     "probabilitat d'\"almenys un\" a través del contrari."),
    ("probabilitat_condicionada", "Probabilitat condicionada",
     "La probabilitat d'un esdeveniment quan ja se'n sap un altre: "
     "P(B|A), i per què no és el mateix que P(A|B)."),
], despres="esdeveniments")

dificultats({
    305: 1,  # amb reposició: aplicar P(A)·P(B) directament, dades a punt
    306: 2,  # sense reposició: cal veure que el denominador canvia
    307: 3,  # comparar amb/sense reposició i justificar per què difereixen
    308: 1,  # llegir un arbre ja fet i multiplicar el camí
    309: 2,  # completar la branca que falta (1-suma) i després multiplicar
    310: 3,  # construir l'arbre des de l'enunciat en paraules
    311: 2,  # almenys un via complement, cas clàssic (monedes)
    312: 2,  # almenys un via complement (daus)
    313: 3,  # almenys un via complement, sense reposició (dos passos)
    314: 2,  # taula de doble entrada donada, llegir files i columnes
    315: 3,  # arbre de dues caixes: cal muntar la probabilitat total
    316: 2,  # taula donada, aplicar les definicions de conjunta i condicionada
    317: 3,  # mateixes dades, un pas més (condicionada inversa)
    318: 3,  # daus: comptar casos afavorables ja condicionats
    319: 1,  # llegir la probabilitat donada directament de l'enunciat
    320: 3,  # combinar-ho tot per obtenir la probabilitat inversa
})

BC1 = "probabilitat_composta"
BC2 = "probabilitat_condicionada"

# =====================================================================
# BLOC: probabilitat_composta
# =====================================================================

# ---- exercici 305: amb reposició, dos experiments independents ----
E305 = ("Una bossa té 4 boles vermelles i 6 de blaves. En traiem una "
        "bola, apuntem el color, la TORNEM a la bossa, remenem, i en "
        "traiem una altra.")

Q("305a", 305, "a", BC1, "A",
  "Quina és la probabilitat que les dues boles siguin vermelles?",
  "$P(V,V)=\\dfrac{4}{10}\\cdot\\dfrac{4}{10}=\\dfrac{4}{25}$",
  [DT("$P(V,V)=\\dfrac{4}{10}\\cdot\\dfrac{3}{9}=\\dfrac{2}{15}$",
      "REEMPLACAMENT_MAL_CONSIDERAT",
      "Aquí SÍ que es reposa la bola: la segona extracció torna a "
      "tenir $10$ boles a la bossa, $4$ de vermelles, exactament "
      "igual que la primera."),
   D("$P(V,V)=\\dfrac{4}{10}+\\dfrac{4}{10}=\\dfrac{8}{10}$",
     "CAMI_ARBRE_MAL_MULTIPLICAT",
     "La probabilitat de dos esdeveniments seguits \"i\" es "
     "multiplica, no se suma: sumar-les donaria una probabilitat "
     "més gran que la de treure'n només una."),
   D("$P(V,V)=\\dfrac{4}{10}$, com si la segona extracció no "
     "comptés", "CAMI_ARBRE_MAL_MULTIPLICAT",
     "Cal tenir en compte TOTES DUES extraccions, no només la "
     "primera: la probabilitat que passin les dues coses alhora és "
     "més petita que la d'una de sola.")],
  ["Com que la bola es reposa, les dues extraccions tenen exactament "
   "la mateixa probabilitat: $\\dfrac{4}{10}$ de vermella cada "
   "vegada.",
   "\"I\" (les dues coses alhora) es tradueix en multiplicar les "
   "probabilitats."],
  ["Amb reposició, cada extracció és independent de l'altra: "
   "$P(V,V)=\\dfrac{4}{10}\\cdot\\dfrac{4}{10}=\\dfrac{16}{100}"
   "=\\dfrac{4}{25}$"],
  ex_text=E305)

Q("305b", 305, "b", BC1, "A",
  "Quina és la probabilitat que la primera sigui vermella i la "
  "segona blava?",
  "$P(V,B)=\\dfrac{4}{10}\\cdot\\dfrac{6}{10}=\\dfrac{6}{25}$",
  [D("$P(V,B)=\\dfrac{4}{10}\\cdot\\dfrac{5}{9}=\\dfrac{2}{9}$",
     "REEMPLACAMENT_MAL_CONSIDERAT",
     "La bola es reposa: a la segona extracció hi torna a haver "
     "$10$ boles en total, $6$ de blaves, com a la primera."),
   # SUBSTITUÏT AL MERGE. El distractor original era
   # $\frac{6}{10}\cdot\frac{4}{10}=\frac{6}{25}$ («canviant l'ordre»), i la
   # seva pròpia retroacció admetia que «el resultat numèric coincideix per
   # casualitat». Aquest és el defecte que l'auditoria del projecte va trobar
   # cinc vegades: una opció que val EXACTAMENT el mateix que la clau no es
   # pot marcar com a errònia, digui el que digui la retroacció, perquè
   # l'alumne que la tria ha calculat bé.
   #
   # A canvi, es modela un error que sí que dona un número diferent i que és
   # molt més freqüent: comptar els dos ordres quan l'enunciat en demana un.
   D("$P(V,B)=2\\cdot\\dfrac{4}{10}\\cdot\\dfrac{6}{10}=\\dfrac{12}{25}$, "
     "comptant els dos ordres",
     "ORDRE_NO_DEMANAT",
     "Això és la probabilitat de treure una de cada color en QUALSEVOL "
     "ordre: suma el camí (V,B) i el camí (B,V). L'enunciat en demana un "
     "de concret, primera vermella i segona blava, que és un sol camí de "
     "l'arbre."),
   D("$P(V,B)=\\dfrac{4}{10}\\cdot\\dfrac{4}{10}=\\dfrac{4}{25}$, "
     "repetint la probabilitat de vermella",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "La segona bola ha de ser BLAVA, no vermella una altra vegada: "
     "la seva probabilitat és $6/10$, no $4/10$.")],
  ["La primera extracció (vermella) té probabilitat $4/10$.",
   "La segona (blava) té probabilitat $6/10$, i com que la bola "
   "s'ha reposat, aquesta xifra no canvia respecte de l'inici."],
  ["$P(V,B)=\\dfrac{4}{10}\\cdot\\dfrac{6}{10}=\\dfrac{24}{100}"
   "=\\dfrac{6}{25}$"],
  ex_text=E305)

Q("305c", 305, "c", BC1, "A",
  "Quina és la probabilitat que les dues boles siguin blaves?",
  "$P(B,B)=\\dfrac{6}{10}\\cdot\\dfrac{6}{10}=\\dfrac{9}{25}$",
  [DT("$P(B,B)=\\dfrac{6}{10}\\cdot\\dfrac{5}{9}=\\dfrac{1}{3}$",
      "REEMPLACAMENT_MAL_CONSIDERAT",
      "La bola es reposa: la segona extracció torna a tenir $10$ "
      "boles en total, $6$ de blaves."),
   D("$P(B,B)=1-\\dfrac{4}{25}=\\dfrac{21}{25}$, com si fos el "
     "contrari de l'apartat a)", "COMPLEMENT_ALMENYS_UN_MAL",
     "\"Les dues blaves\" no és el contrari de \"les dues "
     "vermelles\": entre aquests dos casos encara hi ha les "
     "combinacions amb un color de cada."),
   D("$P(B,B)=\\dfrac{6}{10}=0{,}6$, calculant només una extracció",
     "CAMI_ARBRE_MAL_MULTIPLICAT",
     "Cal que TOTES DUES boles siguin blaves, no només una: "
     "s'han de multiplicar les probabilitats de les dues "
     "extraccions.")],
  ["Cada extracció té probabilitat $6/10$ de sortir blava, i com "
   "que es reposa, això no canvia a la segona.",
   "Multiplica-les: $\\dfrac{6}{10}\\cdot\\dfrac{6}{10}$."],
  ["$P(B,B)=\\dfrac{6}{10}\\cdot\\dfrac{6}{10}=\\dfrac{36}{100}"
   "=\\dfrac{9}{25}$"],
  ex_text=E305)

# ---- exercici 306: sense reposició, el denominador canvia ----
E306 = ("La mateixa bossa, 4 boles vermelles i 6 de blaves. Ara en "
        "traiem una, apuntem el color, i SENSE tornar-la a la bossa, "
        "en traiem una altra.")

Q("306a", 306, "a", BC1, "A",
  "Quina és la probabilitat que la primera sigui vermella?",
  "$P(V_1)=\\dfrac{4}{10}=\\dfrac{2}{5}$",
  [D("$P(V_1)=\\dfrac{4}{9}$, ja descomptant la bola que encara no "
     "s'ha tret", "REEMPLACAMENT_MAL_CONSIDERAT",
     "La PRIMERA extracció encara es fa amb totes les boles a la "
     "bossa: $10$ en total, $4$ de vermelles. El denominador només "
     "canvia a partir de la segona extracció."),
   D("$P(V_1)=\\dfrac{4}{6}$, comparant-la amb les blaves",
     "CASOS_POSSIBLES_MAL_COMPTATS",
     "El denominador ha de ser el TOTAL de boles a la bossa "
     "($4+6=10$), no només el nombre de blaves."),
   D("$P(V_1)=\\dfrac{6}{10}$, calculant la de blava",
     "ESDEVENIMENT_CONTRARI_MAL_CALCULAT",
     "Es demana la probabilitat de VERMELLA, i n'hi ha $4$ de $10$; "
     "$6/10$ és la de blava.")],
  ["A la primera extracció encara hi ha totes les boles: $10$ en "
   "total, $4$ de vermelles."],
  ["$P(V_1)=\\dfrac{4}{10}=\\dfrac25$"],
  ex_text=E306)

Q("306b", 306, "b", BC1, "A",
  "Si la primera ha sortit vermella, quina és ara la probabilitat "
  "que la segona també ho sigui?",
  "$P(V_2|V_1)=\\dfrac{3}{9}=\\dfrac{1}{3}$",
  [DT("$P(V_2|V_1)=\\dfrac{4}{9}$, sense descomptar la vermella ja "
      "treta", "REEMPLACAMENT_MAL_CONSIDERAT",
      "La bola vermella que ha sortit primer NO torna a la bossa: "
      "de les $4$ vermelles inicials, ara en queden $3$."),
   D("$P(V_2|V_1)=\\dfrac{4}{10}$, com si res no hagués canviat",
     "REEMPLACAMENT_MAL_CONSIDERAT",
     "El total de boles a la bossa també ha baixat: ja no en queden "
     "$10$, sinó $9$, perquè n'hem tret una i no l'hem tornada."),
   D("$P(V_2|V_1)=\\dfrac{3}{10}$, descomptant només el numerador",
     "REEMPLACAMENT_MAL_CONSIDERAT",
     "Si es descompta la bola vermella treta del numerador ($4\\to"
     "3$), també cal descomptar-la del total de boles a la bossa "
     "($10\\to9$): els dos nombres baixen alhora.")],
  ["Un cop treta la vermella, a la bossa ja no en queden $10$ "
   "boles, sinó $9$.",
   "De les $4$ vermelles inicials, ara en queden $3$."],
  ["Han quedat $9$ boles a la bossa, $3$ de vermelles: "
   "$P(V_2|V_1)=\\dfrac{3}{9}=\\dfrac13$"],
  ex_text=E306)

Q("306c", 306, "c", BC1, "A",
  "Quina és la probabilitat que les dues boles siguin vermelles?",
  "$P(V,V)=\\dfrac{4}{10}\\cdot\\dfrac{3}{9}=\\dfrac{2}{15}$",
  [DT("$P(V,V)=\\dfrac{4}{10}\\cdot\\dfrac{4}{10}=\\dfrac{4}{25}$",
      "INDEPENDENCIA_SUPOSADA_SENSE_MOTIU",
      "Aquí NO es reposa la bola: la segona extracció es fa amb "
      "una bola vermella menys i una bola menys en total, així que "
      "la seva probabilitat no és la mateixa que la primera."),
   D("$P(V,V)=\\dfrac{4}{10}+\\dfrac{3}{9}=\\dfrac{29}{30}$",
     "CAMI_ARBRE_MAL_MULTIPLICAT",
     "\"I\" (les dues coses alhora) es tradueix en multiplicar les "
     "probabilitats, no en sumar-les."),
   D("$P(V,V)=\\dfrac{3}{9}=\\dfrac13$, agafant només la segona "
     "probabilitat", "CAMI_ARBRE_MAL_MULTIPLICAT",
     "Cal tenir en compte TOTES DUES extraccions: la probabilitat "
     "que la primera també surti vermella s'ha de multiplicar, no "
     "descartar.")],
  ["La primera extracció té probabilitat $4/10$.",
   "Un cop treta la vermella, la segona té probabilitat $3/9$.",
   "Multiplica-les."],
  ["$P(V,V)=\\dfrac{4}{10}\\cdot\\dfrac{3}{9}=\\dfrac{12}{90}"
   "=\\dfrac{2}{15}$"],
  ex_text=E306)

# ---- exercici 307: comparar amb reposició i sense (conceptual) ----
Q("307", 307, "", BC1, "B",
  "«A la mateixa bossa de 4 vermelles i 6 blaves, la probabilitat de "
  "treure dues vermelles seguides val el mateix es reposi la bola o "
  "no»",
  "Fals: amb reposició és $\\dfrac{4}{25}=0{,}16$ i sense reposició "
  "és $\\dfrac{2}{15}\\approx0{,}133$; sense reposició la segona "
  "probabilitat baixa (queden menys vermelles i menys boles en "
  "total), així que el producte final és més petit",
  [D("Cert: en tots dos casos la probabilitat de cada extracció és "
     "$4/10$", "INDEPENDENCIA_SUPOSADA_SENSE_MOTIU",
     "Això només és veritat amb reposició. Sense reposició, un cop "
     "treta la primera vermella, en queden $3$ de $9$ boles per a "
     "la segona, no $4$ de $10$."),
   D("Cert: sense reposició la probabilitat és més gran, perquè hi "
     "ha menys boles entre les quals triar", "REEMPLACAMENT_MAL_CONSIDERAT",
     "Hi ha menys boles EN TOTAL, però també menys vermelles "
     "(se n'ha tret una): els dos nombres baixen a la vegada, i el "
     "resultat net és una probabilitat més petita, no més gran."),
   D("Fals: amb reposició dona $\\dfrac{2}{15}$ i sense reposició "
     "dona $\\dfrac{4}{25}$, al revés del que es podria pensar",
     "REEMPLACAMENT_MAL_CONSIDERAT",
     "És a l'inrevés: amb reposició cada extracció manté la "
     "mateixa probabilitat inicial ($4/10$ les dues vegades), que "
     "és més gran que la segona probabilitat quan no es reposa "
     "($3/9$).")],
  ["Calcula per separat el cas amb reposició ($4/10$ dues vegades) "
   "i el cas sense reposició ($4/10$ i després $3/9$).",
   "Compara els dos resultats en decimal si costa comparar les "
   "fraccions a ull."],
  ["Amb reposició: $\\dfrac{4}{10}\\cdot\\dfrac{4}{10}=\\dfrac{4}"
   "{25}=0{,}16$. Sense reposició: $\\dfrac{4}{10}\\cdot\\dfrac{3}"
   "{9}=\\dfrac{2}{15}\\approx0{,}133$. Són diferents, i la segona "
   "és més petita perquè, un cop treta una vermella, en queden "
   "relativament menys per triar-ne una altra"],
  ex_text=E305)

# ---- exercici 308: llegir un arbre ja fet (moneda + dau) ----
FIG308 = arbre([
    [{"etq": "Cara", "prob": "1/2"}, {"etq": "Creu", "prob": "1/2"}],
    [
        [{"etq": "surt 6", "prob": "1/6"}, {"etq": "no surt 6", "prob": "5/6"}],
        [{"etq": "parell", "prob": "1/2"}, {"etq": "senar", "prob": "1/2"}],
    ],
])

E308 = ("Llancem una moneda. Si surt cara, tirem un dau i mirem si "
        "surt el $6$. Si surt creu, tirem el dau i mirem si el "
        "resultat és parell. L'arbre mostra totes les probabilitats.")

Q("308a", 308, "a", BC1, "A",
  "Quina és la probabilitat de treure cara i després un $6$?",
  "$P(\\text{Cara},6)=\\dfrac{1}{2}\\cdot\\dfrac{1}{6}=\\dfrac{1}{12}$",
  [D("$P(\\text{Cara},6)=\\dfrac12+\\dfrac16=\\dfrac23$",
     "CAMI_ARBRE_MAL_MULTIPLICAT",
     "La probabilitat d'un camí de l'arbre (cara, i després un $6$) "
     "és el PRODUCTE de les dues branques, no la seva suma."),
   D("$P(\\text{Cara},6)=\\dfrac16$, agafant només la branca del "
     "dau", "CAMI_ARBRE_MAL_MULTIPLICAT",
     "Cal seguir tot el camí des de l'arrel: primer la branca de "
     "\"Cara\" ($1/2$) i després la de \"surt 6\" ($1/6$), "
     "multiplicant-les totes dues."),
   D("$P(\\text{Cara},6)=\\dfrac12\\cdot\\dfrac56=\\dfrac{5}{12}$, "
     "agafant la branca de \"no surt 6\"",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "La pregunta demana la probabilitat que SURTI el $6$, que és "
     "la branca $1/6$, no la de \"no surt 6\" ($5/6$).")],
  ["Segueix el camí de l'arbre: primer la branca \"Cara\", després "
   "la branca \"surt 6\".",
   "Multiplica les dues probabilitats del camí."],
  ["$P(\\text{Cara},6)=\\dfrac12\\cdot\\dfrac16=\\dfrac{1}{12}$"],
  figura=FIG308, ex_text=E308)

Q("308b", 308, "b", BC1, "A",
  "Quina és la probabilitat de treure creu i després un número "
  "parell (de l'$1$ al $6$)?",
  "$P(\\text{Creu},\\text{parell})=\\dfrac{1}{2}\\cdot\\dfrac{1}{2}"
  "=\\dfrac{1}{4}$",
  [D("$P(\\text{Creu},\\text{parell})=\\dfrac{1}{2}\\cdot\\dfrac{1}{6}"
     "=\\dfrac{1}{12}$, seguint la branca del $6$ per error",
     "CAMI_ARBRE_MAL_MULTIPLICAT",
     "Un cop surt CREU, la branca del dau que toca és la de "
     "\"parell\" ($1/2$), no la de \"surt 6\" ($1/6$): aquesta "
     "última només penja de la branca de \"Cara\"."),
   D("$P(\\text{Creu},\\text{parell})=\\dfrac12$, agafant només la "
     "probabilitat de creu", "CAMI_ARBRE_MAL_MULTIPLICAT",
     "Cal completar el camí sencer fins al final: la probabilitat "
     "de creu ($1/2$) multiplicada per la de \"parell\" un cop ha "
     "sortit creu ($1/2$)."),
   D("$P(\\text{Creu},\\text{parell})=\\dfrac12+\\dfrac12=1$",
     "CAMI_ARBRE_MAL_MULTIPLICAT",
     "Les branques d'un mateix camí es multipliquen, no se sumen: "
     "sumar-les mai pot donar la probabilitat d'un camí concret.")],
  ["Un cop surt creu, la branca del dau que segueix és la de "
   "\"parell\".",
   "Multiplica la probabilitat de creu per la de \"parell\"."],
  ["$P(\\text{Creu},\\text{parell})=\\dfrac12\\cdot\\dfrac12"
   "=\\dfrac14$"],
  figura=FIG308, ex_text=E308)

# ---- exercici 309: completar la branca que falta d'un arbre ----
FIG309 = arbre([
    [{"etq": "V", "prob": "2/5"}, {"etq": "B", "prob": "3/5"}],
    [
        [{"etq": "V", "prob": None}, {"etq": "B", "prob": "3/4"}],
        [{"etq": "V", "prob": "2/4"}, {"etq": "B", "prob": "2/4"}],
    ],
])

E309 = ("Una urna té 2 boles vermelles i 3 de blaves. En traiem una "
        "SENSE reposar-la i després una altra. A l'arbre falta una "
        "probabilitat, marcada amb un interrogant.")

Q("309a", 309, "a", BC1, "A",
  "Quina probabilitat falta a la branca marcada amb «?», sabent que "
  "la seva branca veïna (la de «B») val $3/4$?",
  "$P(V_2|V_1)=\\dfrac{1}{4}$",
  [DT("$P(V_2|V_1)=\\dfrac{3}{4}$, copiant la branca veïna «B» del "
      "mateix node", "BRANCA_ARBRE_MAL_CALCULADA",
      "Les dues branques que surten d'un mateix node han de sumar "
      "$1$: si la de «B» és $3/4$, la de «V» ha de ser "
      "$1-3/4=1/4$, no la mateixa xifra."),
   D("$P(V_2|V_1)=\\dfrac{2}{5}$, repetint la probabilitat de la "
     "primera extracció", "REEMPLACAMENT_MAL_CONSIDERAT",
     "Un cop treta una vermella sense reposar-la, ja no queden "
     "$5$ boles ni $2$ vermelles: en queden $4$ en total i $1$ "
     "vermella."),
   D("$P(V_2|V_1)=\\dfrac{1}{5}$, com si només quedés 1 bola de "
     "cada 5", "BRANCA_ARBRE_MAL_CALCULADA",
     "Un cop treta la primera bola, en queden $4$ a l'urna (no "
     "$5$): d'aquestes $4$, en queda $1$ de vermella.")],
  ["Les dues branques que surten d'un mateix node sumen $1$.",
   "La branca veïna («B» després de «V») val $3/4$: la que falta "
   "és $1-3/4$."],
  ["Les branques d'un node sumen $1$: $1-\\dfrac{3}{4}=\\dfrac{1}{4}$"],
  figura=FIG309, ex_text=E309)

Q("309b", 309, "b", BC1, "A",
  "Sabent que $P(V_1)=2/5$ i que la branca que acabes de calcular "
  "val $1/4$, quina és la probabilitat de treure dues boles "
  "vermelles?",
  "$P(V,V)=\\dfrac{2}{5}\\cdot\\dfrac{1}{4}=\\dfrac{1}{10}$",
  [D("$P(V,V)=\\dfrac{2}{5}\\cdot\\dfrac{2}{5}=\\dfrac{4}{25}$, "
     "repetint la probabilitat inicial a la segona branca",
     "REEMPLACAMENT_MAL_CONSIDERAT",
     "La segona probabilitat, un cop treta una vermella sense "
     "reposar-la, és $1/4$ (la que acabes de calcular), no $2/5$ "
     "una altra vegada."),
   D("$P(V,V)=\\dfrac{2}{5}+\\dfrac{1}{4}=\\dfrac{13}{20}$",
     "CAMI_ARBRE_MAL_MULTIPLICAT",
     "La probabilitat d'un camí de l'arbre és el producte de les "
     "seves branques, no la suma."),
   D("$P(V,V)=\\dfrac{1}{4}$, agafant només la segona branca",
     "CAMI_ARBRE_MAL_MULTIPLICAT",
     "Cal seguir el camí sencer des de l'arrel: la probabilitat de "
     "la primera vermella ($2/5$) també compta, multiplicada per "
     "la segona.")],
  ["Segueix el camí sencer: la branca «V» inicial ($2/5$) i la "
   "branca «V» que acabes de calcular ($1/4$).",
   "Multiplica-les."],
  ["$P(V,V)=\\dfrac25\\cdot\\dfrac14=\\dfrac{2}{20}=\\dfrac{1}{10}$"],
  figura=FIG309, ex_text=E309)

# ---- exercici 310: construir un arbre des de l'enunciat (sense figura, l'alumne l'ha de muntar) ----
E310 = ("Un calaix té 5 mitjons negres i 3 de blancs, tots solts. "
        "Se'n treuen 2 SENSE reposar-los.")

Q("310a", 310, "a", BC1, "A",
  "Quina és la probabilitat que els dos mitjons siguin negres?",
  "$P(N,N)=\\dfrac{5}{8}\\cdot\\dfrac{4}{7}=\\dfrac{5}{14}$",
  [DT("$P(N,N)=\\dfrac58\\cdot\\dfrac58=\\dfrac{25}{64}$",
      "INDEPENDENCIA_SUPOSADA_SENSE_MOTIU",
      "Els mitjons no es reposen: un cop tret un mitjó negre, en "
      "queden $4$ de $7$ per a la segona extracció, no $5$ de "
      "$8$ una altra vegada."),
   D("$P(N,N)=\\dfrac58\\cdot\\dfrac48=\\dfrac{5}{16}$, sense "
     "descomptar el total del calaix a la segona extracció",
     "REEMPLACAMENT_MAL_CONSIDERAT",
     "Un cop tret un mitjó, al calaix ja no en queden $8$, sinó "
     "$7$: el denominador de la segona branca també baixa."),
   D("$P(N,N)=\\dfrac58+\\dfrac47=\\dfrac{67}{56}$",
     "CAMI_ARBRE_MAL_MULTIPLICAT",
     "\"I\" (els dos mitjons alhora) es tradueix en multiplicar les "
     "probabilitats, no en sumar-les (i el resultat, a més, seria "
     "més gran que $1$, cosa impossible per a una probabilitat).")],
  ["Comença per la probabilitat de treure un mitjó negre d'entre "
   "$8$: $5/8$.",
   "Un cop tret, al calaix en queden $7$, dels quals $4$ són "
   "negres.",
   "Multiplica les dues probabilitats."],
  ["Primer mitjó negre: $\\dfrac58$. Segon, sense reposar-lo: "
   "$\\dfrac47$ (en queden $4$ negres de $7$ en total). "
   "$P(N,N)=\\dfrac58\\cdot\\dfrac47=\\dfrac{20}{56}=\\dfrac{5}{14}$"],
  ex_text=E310)

Q("310b", 310, "b", BC1, "A",
  "Quina és la probabilitat que els dos mitjons siguin del mateix "
  "color?",
  "$P(N,N)+P(B,B)=\\dfrac{5}{14}+\\dfrac{3}{28}=\\dfrac{13}{28}$",
  [D("$P(N,N)\\cdot P(B,B)=\\dfrac{5}{14}\\cdot\\dfrac{3}{28}"
     "=\\dfrac{15}{392}$, multiplicant els dos casos en lloc de "
     "sumar-los", "UNIO_INTERSECCIO_CONFOSES",
     "\"Del mateix color\" vol dir «tots dos negres» O «tots dos "
     "blancs»: com que són dues maneres diferents (i incompatibles "
     "entre si) d'aconseguir-ho, les probabilitats se sumen, no es "
     "multipliquen."),
   D("$P(N,N)=\\dfrac{5}{14}$ només, oblidant el cas dels dos "
     "blancs", "CASOS_FAVORABLES_MAL_COMPTATS",
     "\"Del mateix color\" inclou TOTES DUES possibilitats: que "
     "surtin dos mitjons negres o que en surtin dos blancs, no "
     "només la primera."),
   D("$P(B,B)=\\dfrac38\\cdot\\dfrac38=\\dfrac{9}{64}$, calculant-la "
     "com si es reposessin els mitjons",
     "REEMPLACAMENT_MAL_CONSIDERAT",
     "Els mitjons no es reposen: un cop tret un mitjó blanc, en "
     "queden $2$ de $7$ per a la segona extracció, no $3$ de "
     "$8$ una altra vegada.")],
  ["\"Del mateix color\" és «dos negres» o «dos blancs»: calcula "
   "les dues probabilitats per separat.",
   "$P(N,N)$ ja la tens de l'apartat anterior: $5/14$.",
   "$P(B,B)=\\dfrac38\\cdot\\dfrac27$: calcula-la i suma-la a "
   "l'anterior."],
  ["$P(B,B)=\\dfrac38\\cdot\\dfrac27=\\dfrac{6}{56}=\\dfrac{3}{28}$. "
   "Sumant-hi $P(N,N)=\\dfrac{5}{14}=\\dfrac{10}{28}$: "
   "$\\dfrac{10}{28}+\\dfrac{3}{28}=\\dfrac{13}{28}$"],
  ex_text=E310)

# ---- exercici 311: almenys un, cas clàssic (monedes) ----
E311 = ("Llancem 3 monedes a l'aire.")

Q("311", 311, "", BC1, "A",
  "Quina és la probabilitat de treure almenys una cara?",
  "$P(\\text{almenys 1 cara})=1-P(\\text{cap cara})=1-\\dfrac{1}{8}"
  "=\\dfrac{7}{8}$",
  [D("$P(\\text{almenys 1 cara})=3\\cdot\\dfrac12=\\dfrac32$, "
     "multiplicant la probabilitat d'una moneda pel nombre "
     "d'intents", "COMPLEMENT_ALMENYS_UN_MAL",
     "Aquest càlcul dona més d'$1$, cosa impossible per a una "
     "probabilitat: \"almenys un\" no es calcula multiplicant la "
     "probabilitat d'un sol intent pel nombre d'intents."),
   D("$P(\\text{almenys 1 cara})=\\dfrac12+\\dfrac12+\\dfrac12"
     "=\\dfrac32$, sumant la probabilitat de cada moneda",
     "COMPLEMENT_ALMENYS_UN_MAL",
     "Sumar les probabilitats de cada moneda per separat tampoc "
     "funciona (i tornaria a donar més d'$1$): cal fer servir el "
     "contrari, \"cap cara\", i restar-lo d'$1$."),
   D("$P(\\text{almenys 1 cara})=P(\\text{cap cara})=\\dfrac18$, "
     "confonent l'esdeveniment amb el seu contrari",
     "ESDEVENIMENT_CONTRARI_MAL_CALCULAT",
     "$1/8$ és la probabilitat que NO surti cap cara (les 3 "
     "creus): la que es demana, \"almenys una cara\", és tot el "
     "contrari, $1$ menys aquesta xifra.")],
  ["El contrari de \"almenys una cara\" és \"cap cara\", és a dir, "
   "les tres monedes surten creu.",
   "$P(\\text{cap cara})=\\dfrac12\\cdot\\dfrac12\\cdot\\dfrac12"
   "=\\dfrac18$.",
   "$P(\\text{almenys 1 cara})=1-\\dfrac18$."],
  ["El contrari de \"almenys una cara\" és que surtin les tres "
   "creus: $P(\\text{3 creus})=\\left(\\dfrac12\\right)^3=\\dfrac18$. "
   "$P(\\text{almenys 1 cara})=1-\\dfrac18=\\dfrac78$"],
  ex_text=E311)

# ---- exercici 312: almenys un, dos daus ----
E312 = ("Llancem un dau 2 vegades.")

Q("312", 312, "", BC1, "A",
  "Quina és la probabilitat de treure almenys un $6$?",
  "$P(\\text{almenys un }6)=1-\\left(\\dfrac{5}{6}\\right)^2"
  "=1-\\dfrac{25}{36}=\\dfrac{11}{36}$",
  [D("$P(\\text{almenys un }6)=2\\cdot\\dfrac16=\\dfrac13$, "
     "multiplicant la probabilitat d'un $6$ pel nombre de tirades",
     "COMPLEMENT_ALMENYS_UN_MAL",
     "\"Almenys un\" no es calcula multiplicant la probabilitat "
     "d'un sol intent pel nombre d'intents: cal fer servir el "
     "contrari, \"cap 6 en les dues tirades\", i restar-lo d'$1$."),
   D("$P(\\text{almenys un }6)=\\left(\\dfrac{1}{6}\\right)^2"
     "=\\dfrac{1}{36}$, calculant la probabilitat de treure DOS "
     "sisos", "ESDEVENIMENT_CONTRARI_MAL_CALCULAT",
     "\"Almenys un $6$\" inclou també el cas de treure'n només un "
     "(i no dos): $1/36$ és la probabilitat de \"exactament dos "
     "sisos\", una possibilitat més restrictiva."),
   D("$P(\\text{almenys un }6)=\\dfrac56$, calculant només la "
     "probabilitat de NO treure un $6$ en una tirada",
     "COMPLEMENT_ALMENYS_UN_MAL",
     "$5/6$ és la probabilitat de no treure un $6$ en UNA sola "
     "tirada: falta elevar-ho al quadrat per a les dues tirades, i "
     "després restar-ho d'$1$.")],
  ["El contrari de \"almenys un $6$\" és \"cap 6 en cap de les dues "
   "tirades\".",
   "$P(\\text{cap }6)=\\dfrac56\\cdot\\dfrac56=\\dfrac{25}{36}$.",
   "$P(\\text{almenys un }6)=1-\\dfrac{25}{36}$."],
  ["$P(\\text{cap }6\\text{ en les 2 tirades})=\\left(\\dfrac56"
   "\\right)^2=\\dfrac{25}{36}$. "
   "$P(\\text{almenys un }6)=1-\\dfrac{25}{36}=\\dfrac{11}{36}$"],
  ex_text=E312)

# ---- exercici 313: almenys un, sense reposició (dos passos) ----
E313 = ("D'una capsa amb 12 bombetes, 3 són defectuoses. Se'n trien "
        "2 a l'atzar, SENSE reposar-les.")

Q("313", 313, "", BC1, "A",
  "Quina és la probabilitat que almenys una de les 2 bombetes sigui "
  "defectuosa?",
  "$P(\\text{almenys 1 defectuosa})=1-\\dfrac{9}{12}\\cdot\\dfrac"
  "{8}{11}=1-\\dfrac{6}{11}=\\dfrac{5}{11}$",
  [DT("$P(\\text{almenys 1 defectuosa})=1-\\dfrac{9}{12}\\cdot"
      "\\dfrac{9}{12}=1-\\dfrac{9}{16}=\\dfrac{7}{16}$",
      "INDEPENDENCIA_SUPOSADA_SENSE_MOTIU",
      "Les bombetes no es reposen: un cop triada la primera bona, "
      "en queden $8$ de bones i $11$ en total per a la segona, "
      "no $9$ de $12$ una altra vegada."),
   D("$P(\\text{almenys 1 defectuosa})=\\dfrac{3}{12}+\\dfrac{3}{12}"
     "=\\dfrac12$, sumant la probabilitat de cada extracció",
     "COMPLEMENT_ALMENYS_UN_MAL",
     "\"Almenys una\" es calcula amb el contrari, \"cap "
     "defectuosa\", i restant-lo d'$1$; no sumant directament la "
     "probabilitat de defectuosa a cada extracció."),
   D("$P(\\text{almenys 1 defectuosa})=\\dfrac{9}{12}\\cdot\\dfrac"
     "{8}{11}=\\dfrac{6}{11}$, oblidant restar-ho d'$1$ al final",
     "COMPLEMENT_ALMENYS_UN_MAL",
     "$\\dfrac{9}{12}\\cdot\\dfrac{8}{11}=\\dfrac{6}{11}$ és la "
     "probabilitat que CAP de les dues sigui defectuosa (les dues "
     "bones): la que es demana és el contrari, encara falta "
     "restar-la d'$1$.")],
  ["El contrari de \"almenys una defectuosa\" és \"cap de les dues "
   "defectuosa\" (les dues bones).",
   "$P(\\text{cap defectuosa})=\\dfrac{9}{12}\\cdot\\dfrac{8}{11}$ "
   "(sense reposar-les).",
   "Resta el resultat d'$1$."],
  ["$P(\\text{cap defectuosa})=\\dfrac{9}{12}\\cdot\\dfrac{8}{11}"
   "=\\dfrac{72}{132}=\\dfrac{6}{11}$. "
   "$P(\\text{almenys 1 defectuosa})=1-\\dfrac{6}{11}=\\dfrac{5}"
   "{11}$"],
  ex_text=E313)

# =====================================================================
# BLOC: probabilitat_condicionada
# =====================================================================

# ---- exercici 314: P(B|A) a partir d'una taula de doble entrada ----
# Reutilitza EXACTAMENT les dades de l'exercici 254 (28 homes, 32 dones,
# 16 homes carn, 20 dones carn, per tant 12 homes peix i 12 dones peix):
# el mateix context, ara mirat des de la probabilitat condicionada.
FIG314 = taula_doble(["Homes", "Dones"], ["Carn", "Peix"],
                      [[16, 12], [20, 12]])

E314 = ("En el mateix dinar de l'exercici 254 (28 homes i 32 dones; "
        "16 homes i 20 dones han menjat carn, i la resta, peix), ara "
        "ens fixem només en un grup cada vegada.")

Q("314a", 314, "a", BC2, "A",
  "D'entre els $28$ HOMES només, quina és la probabilitat que hagi "
  "menjat peix? (és a dir, $P(\\text{peix}|\\text{home})$)",
  "$P(\\text{peix}|\\text{home})=\\dfrac{12}{28}=\\dfrac{3}{7}$",
  [DT("$P(\\text{peix}|\\text{home})=\\dfrac{12}{60}=\\dfrac{1}{5}$, "
      "dividint pel total de persones en lloc del total d'homes",
      "PROBABILITAT_CONDICIONADA_MAL",
      "\"D'entre els homes\" fixa el grup de referència en els "
      "homes ($28$ persones), no en el total del dinar ($60$): el "
      "denominador ha de ser $28$."),
   D("$P(\\text{peix}|\\text{home})=\\dfrac{20}{28}$, agafant els "
     "homes que han menjat carn en lloc de peix",
     "ESDEVENIMENT_CONTRARI_MAL_CALCULAT",
     "$20$ és el nombre de DONES que han menjat carn: dels $28$ "
     "homes, els que han menjat peix són $28-16=12$."),
   D("$P(\\text{peix}|\\text{home})=\\dfrac{12}{32}$, dividint pel "
     "total de dones en lloc del total d'homes",
     "CASOS_POSSIBLES_MAL_COMPTATS",
     "El denominador ha de ser el nombre d'HOMES ($28$), que és el "
     "grup sobre el qual es demana la probabilitat, no el de "
     "dones.")],
  ["\"D'entre els homes\" vol dir que el denominador és el total "
   "d'homes, $28$, no el total del dinar.",
   "Dels $28$ homes, $16$ han menjat carn i la resta, peix: "
   "$28-16=12$."],
  ["Dels $28$ homes, $12$ han menjat peix ($28-16$): "
   "$P(\\text{peix}|\\text{home})=\\dfrac{12}{28}=\\dfrac{3}{7}$"],
  figura=FIG314, ex_text=E314)

Q("314b", 314, "b", BC2, "A",
  "D'entre les $24$ persones que han menjat PEIX, quina és la "
  "probabilitat que sigui home? (és a dir, "
  "$P(\\text{home}|\\text{peix})$)",
  "$P(\\text{home}|\\text{peix})=\\dfrac{12}{24}=\\dfrac{1}{2}$",
  [DT("$P(\\text{home}|\\text{peix})=\\dfrac{12}{60}=\\dfrac{1}{5}$, "
      "dividint pel total de persones en lloc del total que ha "
      "menjat peix", "PROBABILITAT_CONDICIONADA_MAL",
      "\"D'entre qui ha menjat peix\" fixa el grup en les persones "
      "que han menjat peix ($24$), no en el total del dinar "
      "($60$)."),
   D("$P(\\text{home}|\\text{peix})=\\dfrac{12}{28}$, fent servir el "
     "denominador de l'apartat anterior per error",
     "CONDICIONADA_I_CONJUNTA_CONFOSES",
     "$28$ és el total d'homes, el denominador que toca quan la "
     "condició és \"ser home\". Aquí la condició és \"haver menjat "
     "peix\": el denominador ha de ser el total de peix, $24$."),
   D("$P(\\text{home}|\\text{peix})=\\dfrac{24}{60}$, calculant en "
     "realitat $P(\\text{peix})$",
     "CONDICIONADA_I_CONJUNTA_CONFOSES",
     "$\\dfrac{24}{60}$ és la probabilitat de menjar peix EN "
     "GENERAL, no la d'ésser home entre qui ha menjat peix.")],
  ["El total de persones que han menjat peix és $24$ ($12$ homes + "
   "$12$ dones): aquest és el denominador.",
   "D'aquestes $24$, $12$ són homes."],
  ["En total han menjat peix $24$ persones, de les quals $12$ són "
   "homes: $P(\\text{home}|\\text{peix})=\\dfrac{12}{24}=\\dfrac{1}{2}$"],
  figura=FIG314, ex_text=E314)

Q("314c", 314, "c", BC2, "B",
  "«En un dinar de $60$ persones, $P(\\text{peix}|\\text{home})$ i "
  "$P(\\text{home i peix})$ valen el mateix, perquè totes dues "
  "parlen d'homes que mengen peix»",
  "Fals: $P(\\text{peix}|\\text{home})=\\dfrac{3}{7}$ es calcula "
  "només sobre els homes ($28$), mentre que $P(\\text{home i "
  "peix})=\\dfrac{12}{60}=\\dfrac{1}{5}$ es calcula sobre el total "
  "del dinar ($60$); són preguntes diferents i, de fet, donen "
  "resultats diferents",
  [D("Cert: com que les dues fan referència als mateixos $12$ "
     "homes que han menjat peix, el resultat ha de ser idèntic",
     "CONDICIONADA_I_CONJUNTA_CONFOSES",
     "El numerador ($12$) sí que coincideix, però el denominador "
     "no: $P(\\text{peix}|\\text{home})$ divideix per $28$ (només "
     "homes) i $P(\\text{home i peix})$ divideix per $60$ (tothom). "
     "Denominadors diferents donen resultats diferents."),
   D("Cert: totes dues probabilitats es calculen dividint per $60$, "
     "el total del dinar", "PROBABILITAT_CONDICIONADA_MAL",
     "$P(\\text{peix}|\\text{home})$ NO divideix pel total del "
     "dinar: com que ja se sap que és home, el denominador es "
     "restringeix als $28$ homes, no als $60$ comensals."),
   D("Fals, perquè en realitat val més $P(\\text{home i peix})$ que "
     "$P(\\text{peix}|\\text{home})$", "CONDICIONADA_I_CONJUNTA_CONFOSES",
     "És al revés: $P(\\text{peix}|\\text{home})=3/7\\approx0{,}43$ "
     "és més gran que $P(\\text{home i peix})=1/5=0{,}2$, perquè "
     "dividir per un grup més petit ($28$ homes) dona un resultat "
     "més gran que dividir pel total ($60$ persones).")],
  ["Calcula totes dues probabilitats per separat i compara-les.",
   "Fixa't especialment en el denominador que fa servir cadascuna."],
  ["$P(\\text{peix}|\\text{home})=\\dfrac{12}{28}=\\dfrac37"
   "\\approx0{,}43$ (denominador: només homes). "
   "$P(\\text{home i peix})=\\dfrac{12}{60}=\\dfrac15=0{,}2$ "
   "(denominador: tothom). Són diferents"],
  figura=FIG314, ex_text=E314)

# ---- exercici 315: P(B|A) a partir d'un arbre (dues caixes) ----
FIG315 = arbre([
    [{"etq": "Caixa A", "prob": "1/2"}, {"etq": "Caixa B", "prob": "1/2"}],
    [
        [{"etq": "V", "prob": "2/3"}, {"etq": "B", "prob": "1/3"}],
        [{"etq": "V", "prob": "1/4"}, {"etq": "B", "prob": "3/4"}],
    ],
])

E315 = ("Hi ha dues caixes. La caixa A té 2 boles vermelles i 1 "
        "blava; la caixa B té 1 bola vermella i 3 de blaves. "
        "Triem una caixa a l'atzar (mateixa probabilitat per a "
        "totes dues) i, sense mirar quina és, en traiem una bola.")

Q("315a", 315, "a", BC2, "A",
  "La caixa A té $2$ boles vermelles i $1$ de blava. Quina és la "
  "probabilitat de triar la caixa A i treure'n una bola vermella?",
  "$P(A,V)=\\dfrac{1}{2}\\cdot\\dfrac{2}{3}=\\dfrac{1}{3}$",
  [D("$P(A,V)=\\dfrac{2}{3}$, agafant només la probabilitat de la "
     "caixa A", "CAMI_ARBRE_MAL_MULTIPLICAT",
     "Cal seguir el camí sencer: primer triar la caixa A ($1/2$) i "
     "després treure'n una vermella ($2/3$), multiplicant-les."),
   D("$P(A,V)=\\dfrac{1}{2}+\\dfrac{2}{3}=\\dfrac{7}{6}$",
     "CAMI_ARBRE_MAL_MULTIPLICAT",
     "La probabilitat d'un camí de l'arbre és el producte de les "
     "seves branques, no la suma (i el resultat, a més, seria més "
     "gran que $1$, cosa impossible)."),
   D("$P(A,V)=\\dfrac{1}{2}\\cdot\\dfrac{1}{4}=\\dfrac{1}{8}$, fent "
     "servir la proporció de vermelles de la caixa B per error",
     "CASOS_FAVORABLES_MAL_COMPTATS",
     "La branca «V» que toca és la que penja de la caixa A "
     "($2/3$, perquè hi ha $2$ vermelles de $3$ boles), no la de "
     "la caixa B ($1/4$).")],
  ["Segueix el camí: primer la branca «Caixa A» ($1/2$), després "
   "la branca «V» que en penja ($2/3$).",
   "Multiplica-les."],
  ["$P(A,V)=\\dfrac{1}{2}\\cdot\\dfrac{2}{3}=\\dfrac{2}{6}"
   "=\\dfrac{1}{3}$"],
  figura=FIG315, ex_text=E315)

Q("315b", 315, "b", BC2, "A",
  "Amb $P(A,V)=1/3$ ja calculat, i sabent que la caixa B dona una "
  "vermella amb probabilitat $1/4$, quina és la probabilitat, en "
  "total, de treure una bola vermella (sigui de la caixa que "
  "sigui)?",
  "$P(V)=\\dfrac{1}{3}+\\dfrac{1}{8}=\\dfrac{11}{24}$",
  [D("$P(V)=\\dfrac{2}{3}+\\dfrac{1}{4}=\\dfrac{11}{12}$, sumant "
     "les dues branques «V» directament, sense multiplicar-les "
     "abans per la probabilitat de triar cada caixa",
     "CAMI_ARBRE_MAL_MULTIPLICAT",
     "Abans de sumar els dos camins, cal calcular la probabilitat "
     "de CADA camí sencer (triar la caixa I després la bola "
     "vermella), no només la branca final del dau."),
   D("$P(V)=\\dfrac{1}{3}\\cdot\\dfrac{1}{8}=\\dfrac{1}{24}$, "
     "multiplicant els dos camins en lloc de sumar-los",
     "UNIO_INTERSECCIO_CONFOSES",
     "Hi ha dues maneres DIFERENTS i incompatibles d'acabar amb "
     "una bola vermella (per la caixa A o per la caixa B): quan un "
     "resultat es pot obtenir per camins que exclouen l'altre, les "
     "probabilitats se sumen."),
   D("$P(V)=\\dfrac{1}{3}$, oblidant el camí que passa per la "
     "caixa B", "CASOS_FAVORABLES_MAL_COMPTATS",
     "Una bola vermella també es pot treure triant la caixa B "
     "(encara que hi hagi menys probabilitat): cal sumar-hi també "
     "aquest camí, $1/8$.")],
  ["Hi ha dos camins que acaben en «vermella»: per la caixa A "
   "($1/3$, calculat a l'apartat anterior) i per la caixa B.",
   "Calcula el camí per la caixa B: $\\dfrac{1}{2}\\cdot"
   "\\dfrac{1}{4}$.",
   "Suma els dos camins."],
  ["Camí per B: $P(B,V)=\\dfrac{1}{2}\\cdot\\dfrac{1}{4}"
   "=\\dfrac{1}{8}$. Sumant-hi el de A ($1/3$): $\\dfrac{1}{3}"
   "+\\dfrac{1}{8}=\\dfrac{8}{24}+\\dfrac{3}{24}=\\dfrac{11}{24}$"],
  figura=FIG315, ex_text=E315)

Q("315c", 315, "c", BC2, "A",
  "Sabent que la bola ha sortit vermella (amb $P(V)=11/24$ en "
  "total), quina és la probabilitat que vingués de la caixa A?",
  "$P(A|V)=\\dfrac{P(A,V)}{P(V)}=\\dfrac{1/3}{11/24}=\\dfrac{8}{11}$",
  [D("$P(A|V)=\\dfrac{1}{2}$, com si un cop sabent el color, cada "
     "caixa tornés a tenir la mateixa probabilitat",
     "ASIMETRIA_CONDICIONADA_MAL",
     "Saber que la bola és vermella SÍ que canvia les "
     "probabilitats: la caixa A té més vermelles que la B, així "
     "que és més probable que la bola vingués d'A un cop se sap "
     "que és vermella."),
   D("$P(A|V)=P(A,V)=\\dfrac{1}{3}$, confonent la condicionada amb "
     "la conjunta", "CONDICIONADA_I_CONJUNTA_CONFOSES",
     "$P(A,V)=1/3$ és la probabilitat de \"caixa A I vermella\" "
     "sobre TOTS els casos possibles; $P(A|V)$ pregunta només "
     "sobre els casos on ja ha sortit vermella, i per això cal "
     "dividir per $P(V)$, no deixar-ho tal qual."),
   D("$P(A|V)=\\dfrac{2}{3}$, agafant la probabilitat de vermella "
     "dins la caixa A sense combinar-la amb res més",
     "CONDICIONADA_I_CONJUNTA_CONFOSES",
     "$2/3$ és $P(V|A)$ (la probabilitat de vermella SABENT que és "
     "la caixa A), que és una pregunta diferent de $P(A|V)$ (la "
     "probabilitat que sigui la caixa A sabent que ha sortit "
     "vermella).")],
  ["$P(A|V)$ es calcula dividint la probabilitat del camí «A i "
   "vermella» entre la probabilitat total de «vermella».",
   "Ja tens totes dues xifres dels apartats anteriors: "
   "$P(A,V)=1/3$ i $P(V)=11/24$."],
  ["$P(A|V)=\\dfrac{P(A,V)}{P(V)}=\\dfrac{1/3}{11/24}=\\dfrac{1}{3}"
   "\\cdot\\dfrac{24}{11}=\\dfrac{8}{11}$"],
  figura=FIG315, ex_text=E315)

# ---- exercici 316: P(A i B) vs P(B|A), taula fumadors/tos ----
FIG316 = taula_doble(["Fumador", "No fumador"], ["Tos", "No tos"],
                      [[14, 6], [9, 21]])

E316 = ("En una revisió mèdica a 50 persones, 20 són fumadores. "
        "Tenen tos 14 de les fumadores i 9 de les no fumadores.")

Q("316a", 316, "a", BC2, "A",
  "D'entre les $50$ persones enquestades, quina és la probabilitat "
  "que una triada a l'atzar sigui fumadora I tingui tos?",
  "$P(\\text{F i T})=\\dfrac{14}{50}=\\dfrac{7}{25}$",
  [DT("$P(\\text{F i T})=\\dfrac{14}{20}=\\dfrac{7}{10}$, dividint "
      "pel total de fumadores en lloc del total de persones",
      "PROBABILITAT_CONDICIONADA_MAL",
      "\"Triada a l'atzar\" sense cap condició prèvia vol dir que "
      "el denominador és el total de persones enquestades ($50$), "
      "no només el de fumadores."),
   D("$P(\\text{F i T})=\\dfrac{20}{50}+\\dfrac{23}{50}"
     "=\\dfrac{43}{50}$, sumant la probabilitat de fumar amb la "
     "de tenir tos", "UNIO_INTERSECCIO_CONFOSES",
     "\"Fumadora I tos\" (amb la I) és una intersecció, no una "
     "unió: no es couen sumant les probabilitats individuals, cal "
     "comptar directament quantes persones compleixen totes dues "
     "condicions alhora."),
   D("$P(\\text{F i T})=\\dfrac{9}{50}$, agafant les no fumadores "
     "amb tos per error", "CASOS_FAVORABLES_MAL_COMPTATS",
     "$9$ són les persones NO fumadores amb tos: les fumadores amb "
     "tos són $14$.")],
  ["\"Fumadora i tos\" alhora: quantes persones compleixen totes "
   "dues coses?",
   "El denominador és el total de persones enquestades, $50$."],
  ["$14$ de les $50$ persones són fumadores i tenen tos: "
   "$P(\\text{F i T})=\\dfrac{14}{50}=\\dfrac{7}{25}$"],
  figura=FIG316, ex_text=E316)

Q("316b", 316, "b", BC2, "A",
  "D'entre les $20$ persones FUMADORES, quina és la probabilitat "
  "que tinguin tos?",
  "$P(\\text{T}|\\text{F})=\\dfrac{14}{20}=\\dfrac{7}{10}$",
  [DT("$P(\\text{T}|\\text{F})=\\dfrac{14}{50}=\\dfrac{7}{25}$, "
      "dividint pel total de persones en lloc del total de "
      "fumadores", "PROBABILITAT_CONDICIONADA_MAL",
      "\"D'entre les fumadores\" fixa el grup en les $20$ "
      "fumadores, no en el total de les $50$ persones "
      "enquestades."),
   D("$P(\\text{T}|\\text{F})=\\dfrac{23}{50}$, calculant en "
     "realitat la probabilitat general de tenir tos",
     "CONDICIONADA_I_CONJUNTA_CONFOSES",
     "$23/50$ és la probabilitat de tenir tos EN GENERAL (sense "
     "restringir-se a les fumadores): aquí es demana només "
     "d'entre les $20$ fumadores."),
   D("$P(\\text{T}|\\text{F})=\\dfrac{14}{23}$, dividint pel total "
     "de persones amb tos en lloc del total de fumadores",
     "CONDICIONADA_I_CONJUNTA_CONFOSES",
     "$23$ és el total de persones amb tos (fumadores i no "
     "fumadores): el denominador que toca aquí és el de "
     "fumadores, $20$, perquè la condició és \"ser fumadora\".")],
  ["El grup de referència són les $20$ fumadores: aquest és el "
   "denominador.",
   "D'aquestes $20$, en tenen tos $14$."],
  ["De les $20$ fumadores, en tenen tos $14$: "
   "$P(\\text{T}|\\text{F})=\\dfrac{14}{20}=\\dfrac{7}{10}$"],
  figura=FIG316, ex_text=E316)

# ---- exercici 317: la condicionada inversa, mateixes dades ----
Q("317", 317, "", BC2, "A",
  "D'entre les $23$ persones que TENEN TOS, quina és la "
  "probabilitat que siguin fumadores? Compara el resultat amb el "
  "de l'apartat anterior.",
  "$P(\\text{F}|\\text{T})=\\dfrac{14}{23}$, diferent de "
  "$P(\\text{T}|\\text{F})=\\dfrac{7}{10}$ de l'exercici anterior",
  [DT("$P(\\text{F}|\\text{T})=\\dfrac{7}{10}$, el mateix resultat "
      "que $P(\\text{T}|\\text{F})$", "ASIMETRIA_CONDICIONADA_MAL",
      "$P(\\text{F}|\\text{T})$ i $P(\\text{T}|\\text{F})$ es "
      "calculen sobre denominadors diferents (persones amb tos en "
      "un cas, fumadores en l'altre): no hi ha cap motiu perquè "
      "coincideixin."),
   D("$P(\\text{F}|\\text{T})=\\dfrac{14}{50}$, dividint pel total "
     "de persones en lloc del total amb tos",
     "PROBABILITAT_CONDICIONADA_MAL",
     "\"D'entre qui té tos\" fixa el grup en les $23$ persones amb "
     "tos, no en el total de $50$."),
   D("$P(\\text{F}|\\text{T})=\\dfrac{9}{23}$, agafant les persones "
     "amb tos que NO fumen", "ESDEVENIMENT_CONTRARI_MAL_CALCULAT",
     "$9$ són les persones amb tos que NO fumen: les que fumen I "
     "tenen tos són $14$, no $9$.")],
  ["El total de persones amb tos és $14+9=23$: aquest és ara el "
   "denominador.",
   "D'aquestes $23$, quantes fumen?",
   "Compara aquest resultat amb $P(\\text{T}|\\text{F})=7/10$ de "
   "l'apartat anterior: són el mateix?"],
  ["Tenen tos $14+9=23$ persones, de les quals $14$ fumen: "
   "$P(\\text{F}|\\text{T})=\\dfrac{14}{23}\\approx0{,}61$, que no "
   "coincideix amb $P(\\text{T}|\\text{F})=\\dfrac{7}{10}=0{,}7$ de "
   "l'apartat anterior: cadascuna es calcula sobre un grup de "
   "referència diferent"],
  figura=FIG316, ex_text=E316)

# ---- exercici 318: comptar casos ja condicionats (dos daus) ----
E318 = ("Llancem dos daus. Sigui $A$ l'esdeveniment «el primer dau "
        "surt parell» i $B$ l'esdeveniment «la suma dels dos daus "
        "és $8$».")

Q("318", 318, "", BC2, "A",
  "Sabent que el primer dau ha sortit parell, quina és la "
  "probabilitat que la suma sigui $8$? (és a dir, $P(B|A)$)",
  "$P(B|A)=\\dfrac{3}{18}=\\dfrac{1}{6}$",
  [DT("$P(B|A)=\\dfrac{5}{36}$, calculant en realitat "
      "$P(B)$ sense fer servir la condició del primer dau",
      "PROBABILITAT_CONDICIONADA_MAL",
      "$5/36$ és la probabilitat que la suma sigui $8$ SENSE cap "
      "condició prèvia (hi ha $5$ parelles de $36$ que sumen $8$): "
      "aquí ja se sap que el primer dau és parell, així que el "
      "denominador s'ha de restringir a aquests casos."),
   D("$P(B|A)=\\dfrac{1}{12}$, confonent-ho amb $P(A\\text{ i }B)$",
     "CONDICIONADA_I_CONJUNTA_CONFOSES",
     "$1/12$ és $P(A\\text{ i }B)$, la probabilitat que passin "
     "totes dues coses sobre el total de $36$ resultats possibles. "
     "$P(B|A)$ ja parteix del fet que $A$ s'ha complert, i el "
     "denominador ha de ser els casos amb primer dau parell "
     "($18$), no els $36$ inicials."),
   D("$P(B|A)=\\dfrac{2}{18}=\\dfrac{1}{9}$, oblidant-ne una de les "
     "tres parelles que sumen $8$",
     "CASOS_POSSIBLES_MAL_COMPTATS",
     "El denominador ($18$, els casos amb primer dau parell) és "
     "correcte, però al numerador falta comptar $(2,6)$: amb "
     "primer dau parell hi ha tres parelles que sumen $8$, no dues "
     "— $(2,6)$, $(4,4)$ i $(6,2)$.")],
  ["Un cop sabem que el primer dau és parell, només queden $18$ "
   "resultats possibles (dels $36$ inicials).",
   "D'aquests $18$, quants tenen suma $8$? (primer dau $2$, $4$ o "
   "$6$, i el segon el que calgui per arribar a $8$)"],
  ["Amb el primer dau parell hi ha $18$ resultats possibles. "
   "D'aquests, sumen $8$ les parelles $(2,6)$, $(4,4)$ i $(6,2)$: "
   "$3$ casos. $P(B|A)=\\dfrac{3}{18}=\\dfrac16$"],
  ex_text=E318)

# ---- exercici 319-320: P(B|A) != P(A|B), test mèdic (asimetria forta) ----
FIG319 = taula_doble(["Malalt", "Sa"], ["Positiu", "Negatiu"],
                      [[9, 1], [99, 891]])

E319 = ("D'una població de 1000 persones, 10 tenen una malaltia "
        "poc freqüent. Hi ha un test per detectar-la: si la persona "
        "és malalta, el test dona positiu 9 de cada 10 vegades; si "
        "la persona és sana, el test dona positiu (fals positiu) 1 "
        "de cada 10 vegades.")

Q("319", 319, "", BC2, "A",
  "Segons l'enunciat, si la persona és malalta el test dona "
  "positiu $9$ de cada $10$ vegades. Quina és la probabilitat que "
  "el test doni positiu SABENT que la persona és malalta? (és a "
  "dir, $P(\\text{positiu}|\\text{malalt})$)",
  "$P(\\text{positiu}|\\text{malalt})=\\dfrac{9}{10}$",
  [D("$P(\\text{positiu}|\\text{malalt})=\\dfrac{9}{1000}$, "
     "dividint pel total de la població en lloc del total de "
     "malalts", "PROBABILITAT_CONDICIONADA_MAL",
     "\"Sabent que la persona és malalta\" fixa el grup en les "
     "$10$ persones malaltes, no en tota la població de $1000$: "
     "el denominador ha de ser $10$, no $1000$."),
   D("$P(\\text{positiu}|\\text{malalt})=\\dfrac{1}{10}$, agafant "
     "la probabilitat de fals positiu per error",
     "ASIMETRIA_CONDICIONADA_MAL",
     "$1/10$ és la probabilitat de positiu ENTRE ELS SANS (el fals "
     "positiu): entre els malalts, la probabilitat de positiu és "
     "$9/10$, l'altra dada de l'enunciat."),
   D("$P(\\text{positiu}|\\text{malalt})=\\dfrac{9}{108}$, dividint "
     "pel total de positius en lloc del total de malalts",
     "CONDICIONADA_I_CONJUNTA_CONFOSES",
     "El denominador que toca aquí és el de MALALTS ($10$), perquè "
     "la condició de la pregunta és \"ser malalt\"; el total de "
     "positius ($108$) és el denominador d'una pregunta diferent.")],
  ["Aquesta dada la dona directament l'enunciat: la probabilitat "
   "de positiu entre els malalts."],
  ["L'enunciat ho diu directament: si la persona és malalta, el "
   "test dona positiu $9$ de cada $10$ vegades, "
   "$P(\\text{positiu}|\\text{malalt})=\\dfrac{9}{10}$"],
  figura=FIG319, ex_text=E319)

Q("320", 320, "", BC2, "A",
  "Recorda que el test dona positiu $9$ de cada $10$ vegades quan "
  "la persona és malalta, i $1$ de cada $10$ quan és sana (fals "
  "positiu). Ara al revés: si el test ha donat POSITIU, quina és "
  "la probabilitat que la persona realment estigui malalta? "
  "Compara-ho amb el resultat de l'exercici anterior.",
  "$P(\\text{malalt}|\\text{positiu})=\\dfrac{9}{108}=\\dfrac{1}{12}"
  "\\approx0{,}083$, molt més petita que $P(\\text{positiu}|"
  "\\text{malalt})=\\dfrac{9}{10}=0{,}9$ de l'exercici anterior",
  [DT("$P(\\text{malalt}|\\text{positiu})=\\dfrac{9}{10}$, el mateix "
      "resultat que $P(\\text{positiu}|\\text{malalt})$",
      "ASIMETRIA_CONDICIONADA_MAL",
      "Encara que el test sigui molt fiable (\"positiu sabent que "
      "és malalt\" val $9/10$), això no vol dir que \"malalt sabent "
      "que és positiu\" valgui el mateix: com que la malaltia és "
      "poc freqüent, la majoria de positius són falsos positius "
      "de gent sana."),
   D("$P(\\text{malalt}|\\text{positiu})=\\dfrac{9}{1000}$, "
     "dividint pel total de la població en lloc del total de "
     "positius", "PROBABILITAT_CONDICIONADA_MAL",
     "\"Sabent que el test ha donat positiu\" fixa el grup en les "
     "persones amb positiu ($9+99=108$), no en tota la població "
     "($1000$)."),
   D("$P(\\text{malalt}|\\text{positiu})=\\dfrac{9}{99}=\\dfrac{1}{11}"
     "$, comparant els malalts positius només amb els sans "
     "positius", "CASOS_POSSIBLES_MAL_COMPTATS",
     "El denominador ha de ser el total de PERSONES amb positiu "
     "($99$ sans positius MÉS els $9$ malalts positius, "
     "$99+9=108$), no només els sans positius.")],
  ["Primer, quantes persones en total donen positiu? (malalts "
   "positius més sans positius, és a dir, falsos positius)",
   "$9$ malalts donen positiu; dels $990$ sans, en donen positiu "
   "$990\\cdot\\dfrac{1}{10}=99$ (falsos positius).",
   "D'entre tots els positius, quina proporció són realment "
   "malalts?"],
  ["Donen positiu $9$ malalts i $990\\cdot\\dfrac{1}{10}=99$ sans "
   "(falsos positius): en total, $9+99=108$ positius. D'aquests, "
   "només $9$ són malalts de veritat: "
   "$P(\\text{malalt}|\\text{positiu})=\\dfrac{9}{108}=\\dfrac{1}{12}"
   "\\approx0{,}083$. És molt més petita que "
   "$P(\\text{positiu}|\\text{malalt})=0{,}9$: encara que el test "
   "sigui fiable amb els malalts, com que hi ha poquíssims malalts "
   "de veritat ($10$ de $1000$), la majoria de positius acaben "
   "sent falsos positius de gent sana"],
  nota="Aquest és l'exemple clàssic que mostra per què $P(B|A)$ i "
       "$P(A|B)$ poden ser molt diferents: un test molt fiable pot "
       "donar, tot i així, més falsos positius que positius certs "
       "quan la condició que es busca és poc freqüent.",
  figura=FIG319, ex_text=E319)
