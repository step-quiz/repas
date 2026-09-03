# -*- coding: utf-8 -*-
"""c_estadistica.py — Full 11: Estadística.

Genera els ítems dels exercicis 218-235, que corresponen a `im12.tex` del
repositori LaTeX font. Organitzats en 3 blocs:
  variables      (218-219)         tipus de variable (qualitativa/
                                    quantitativa, discreta/contínua) i
                                    mostra vs. població
  frequencies    (220-226, 235)    recompte de dades, taules de
                                    freqüències (absolutes, acumulades,
                                    relatives, percentatges)
  grafics        (227-232, 234)    diagrames de barres, polígons de
                                    freqüències, histogrames i gràfics de
                                    sectors: construcció i interpretació

Recompte: 18 exercicis / 48 ítems bruts (comptant \\item dins d'apartats;
un exercici sense apartats compta 1).

Exclusió: l'exercici 233 (venda de cotxes) depèn d'un gràfic de línies
sense valors numèrics exactes indicats, tal com confirma la nota de
transcripció del mateix `r-im12.tex` — no hi ha manera honesta d'inventar
les xifres mensuals. S'exclou sencer (2 preguntes).

Els exercicis 227, 228, 230, 231 i 234 en canvi SÍ es conserven, encara
que l'enunciat original demani "representa" un gràfic o parli d'un
"polígon de freqüències": totes les dades numèriques necessàries (la taula
de partida a 227/228/234, o les coordenades explícites dels punts a
230/231) són presents al text, així que es reformulen en preguntes de
lectura i càlcul sobre aquestes dades.

De 48 ítems bruts, 46 sobreviuen a l'exclusió del 233. El total real del
full és 52, perquè quatre exercicis amaguen més subpreguntes de les que
compta el parser automàtic i es desdoblen en subítems: 220 (2->3), 221
(1->4, una taula de freqüències amb quatre caselles a completar), 223
(2->3) i 228 (2->3). És el patró d'"ítems amagats" descrit a
AUTHORING-GUIDE.md: una taula amb diverses caselles buides és una
activitat per casella, no una de sola.

Cap resposta s'escriu a mà: cada resultat (recomptes de freqüència,
percentatges, freqüències acumulades...) s'ha calculat de manera
independent amb `fractions.Fraction` (aritmètica exacta) i s'ha
contrastat contra `r-im12.tex` (el solucionari LaTeX subministrat) sense
trobar-hi cap discrepància.
"""
from fractions import Fraction as F
from lib import Q, D, DT, tex, texd, TAX, dificultats

# --------------------------------------------------------------------
# Dificultat de cada exercici (1 directa, 2 encadenada, 3 completa).
# Full 11 · estadística
# Vegeu l'escala completa a lib.py. L'itinerari fa servir aquest camp
# per graduar el recorregut, de manera que canviar-hi un número canvia
# l'ordre en què l'alumne es troba els exercicis.
# --------------------------------------------------------------------
dificultats({
    218: 1,  # classificar la variable; 220 i 226-227, llegir una freqüència
    219: 1,
    220: 1,
    221: 2,  # completar una taula: freqüències acumulades i relatives
    222: 2,  # fer el recompte a partir de la llista de dades
    223: 3,  # percentatges encadenats abans d'arribar a les freqüències
    224: 2,
    225: 2,
    226: 1,
    227: 1,
    228: 3,  # agrupar en intervals i després llegir-hi les acumulades
    229: 2,  # passar de percentatge a angle del sector
    230: 2,  # jutjar afirmacions sobre un gràfic
    231: 2,
    232: 3,  # comparar dos gràfics i raonar-ne la relació
    234: 2,
    235: 2,
})


B1 = "variables"
B2 = "frequencies"
B3 = "grafics"


# =====================================================================
# BLOC 1 — VARIABLES ESTADÍSTIQUES (exercicis 218-219)
# =====================================================================

# ---- exercici 218: tipus de variable + mostra o població ----
E218 = ("Indica el tipus de variable estadística que estudiem i raona, en "
        "cada cas, si seria millor analitzar-ne una mostra o la població.")

# a) talla alumnat IES: quantitativa contínua, població (grup petit)
Q("218a", 218, "a", B1, "A",
  "La talla de l'alumnat d'un institut de Secundària.",
  "Variable quantitativa contínua; s'estudia tota la població (un IES "
  "té un nombre d'alumnes petit i accessible)",
  [D("Variable qualitativa; s'estudia tota la població",
     "QUALITATIVA_QUANTITATIVA_CONFOSES",
     "La talla és una mesura numèrica (es pot mesurar en centímetres, amb "
     "decimals): és quantitativa, no qualitativa."),
   D("Variable quantitativa discreta; s'estudia una mostra",
     "DISCRETA_CONTINUA_CONFOSES",
     "La talla pot prendre qualsevol valor decimal dins d'un interval "
     "(no només valors aïllats): és contínua. I com que un IES té un "
     "nombre d'alumnes abastable, es pot estudiar tota la població, no "
     "cal recórrer a una mostra."),
   D("Variable quantitativa contínua; s'estudia una mostra, perquè mesurar "
     "tothom seria massa feina", "MOSTRA_POBLACIO_INVERTIDES",
     "Quan la població és petita i accessible (com l'alumnat d'un sol "
     "IES), el criteri habitual és estudiar-la sencera; la mostra es "
     "reserva per a poblacions grans o inabastables.")],
  ["Pensa si la talla es pot mesurar amb decimals (contínua) o només "
   "amb valors aïllats (discreta).",
   "Un IES és un grup relativament petit: es pot mesurar tothom sense "
   "necessitat de mostra."],
  ["La talla és una mesura numèrica que admet qualsevol valor decimal: "
   "variable quantitativa contínua.",
   "Com que la població (l'alumnat d'un IES) és petita i accessible, "
   "és preferible estudiar-la tota, no només una mostra."],
  ex_text=E218)

# b) temperatura província: quantitativa contínua, mostra (inviable mesurar tot arreu)
Q("218b", 218, "b", B1, "A",
  "La temperatura de la teva província.",
  "Variable quantitativa contínua; s'estudia mitjançant una mostra "
  "(estacions meteorològiques representatives)",
  [D("Variable qualitativa; s'estudia mitjançant una mostra",
     "QUALITATIVA_QUANTITATIVA_CONFOSES",
     "La temperatura és una magnitud numèrica que es mesura en graus: "
     "és quantitativa, no qualitativa."),
   D("Variable quantitativa discreta; s'estudia tota la població",
     "DISCRETA_CONTINUA_CONFOSES",
     "La temperatura admet qualsevol valor decimal: és contínua, no "
     "discreta. I mesurar-la a cada punt exacte d'una província sencera "
     "és inviable: cal una mostra d'estacions representatives."),
   D("Variable quantitativa contínua; s'estudia tota la població, "
     "mesurant-la a tot arreu", "MOSTRA_POBLACIO_INVERTIDES",
     "Una província té infinites ubicacions possibles: mesurar-les "
     "totes és inviable. Per això s'utilitza una mostra d'estacions "
     "meteorològiques representatives, no tota la població.")],
  ["La temperatura admet qualsevol valor decimal: pensa si això la fa "
   "discreta o contínua.",
   "Una província té moltíssimes ubicacions: és realista mesurar-les "
   "totes, o convé triar-ne una mostra representativa?"],
  ["La temperatura pot prendre qualsevol valor decimal: variable "
   "quantitativa contínua.",
   "Mesurar-la contínuament a tota una província és inviable, per això "
   "s'estudia mitjançant una mostra (estacions representatives)."],
  ex_text=E218)

# c) edat habitants país: quantitativa discreta (anys complets), mostra (població gran)
Q("218c", 218, "c", B1, "A",
  "L'edat dels habitants d'un país.",
  "Variable quantitativa discreta (en anys complets); s'estudia "
  "mitjançant una mostra, perquè la població és molt gran",
  [D("Variable qualitativa; s'estudia mitjançant una mostra",
     "QUALITATIVA_QUANTITATIVA_CONFOSES",
     "L'edat és un nombre (anys): és una variable quantitativa, no "
     "qualitativa."),
   D("Variable quantitativa contínua; s'estudia mitjançant una mostra",
     "DISCRETA_CONTINUA_CONFOSES",
     "Si es mesura en anys complets (com és habitual), l'edat només pren "
     "valors aïllats ($0,1,2,\\ldots$): es considera discreta, no "
     "contínua."),
   D("Variable quantitativa discreta; s'estudia tota la població, perquè "
     "és una dada important", "MOSTRA_POBLACIO_INVERTIDES",
     "La importància de la dada no determina si cal mostra o població: "
     "el que ho determina és la mida. Un país té una població molt gran, "
     "així que s'estudia mitjançant una mostra.")],
  ["Si comptes l'edat en anys complets, quins valors pot prendre: "
   "aïllats o qualsevol decimal?",
   "Un país té una població enorme: és realista mesurar tothom?"],
  ["Comptada en anys complets, l'edat només pren valors aïllats: "
   "variable quantitativa discreta.",
   "La població d'un país és molt gran, així que s'estudia mitjançant "
   "una mostra."],
  ex_text=E218)

# d) sexe habitants poble: qualitativa, població (grup abastable)
Q("218d", 218, "d", B1, "A",
  "El sexe dels habitants d'un poble.",
  "Variable qualitativa; s'estudia tota la població (un poble sol tenir "
  "una població abastable)",
  [D("Variable quantitativa discreta; s'estudia tota la població",
     "QUALITATIVA_QUANTITATIVA_CONFOSES",
     "El sexe no és una quantitat que es pugui mesurar amb un nombre: "
     "expressa una categoria. És una variable qualitativa, no "
     "quantitativa."),
   D("Variable qualitativa; s'estudia mitjançant una mostra, perquè "
     "sempre convé estalviar feina", "MOSTRA_POBLACIO_INVERTIDES",
     "Un poble sol tenir una població prou petita i abastable com per "
     "estudiar-la sencera: no cal recórrer a una mostra només per "
     "estalviar feina."),
   D("Variable quantitativa contínua; s'estudia tota la població",
     "QUALITATIVA_QUANTITATIVA_CONFOSES",
     "El sexe no admet valors numèrics ni decimals: no és una variable "
     "quantitativa contínua, és qualitativa.")],
  ["El sexe s'expressa amb una categoria (home/dona), no amb un nombre.",
   "Un poble sol tenir una població petita i accessible: es pot "
   "estudiar sencera."],
  ["El sexe expressa una categoria, no una quantitat: variable "
   "qualitativa.",
   "Com que un poble té una població abastable, es pot estudiar tota, "
   "sense necessitat de mostra."],
  ex_text=E218)

# e) diners gastats amics: quantitativa contínua, població (grup petit)
Q("218e", 218, "e", B1, "A",
  "Els diners gastats a la setmana pels teus amics.",
  "Variable quantitativa contínua; s'estudia tota la població (el grup "
  "d'amics és petit)",
  [D("Variable qualitativa; s'estudia tota la població",
     "QUALITATIVA_QUANTITATIVA_CONFOSES",
     "Els diners gastats es mesuren amb un nombre (euros i cèntims): és "
     "una variable quantitativa, no qualitativa."),
   D("Variable quantitativa discreta; s'estudia tota la població",
     "DISCRETA_CONTINUA_CONFOSES",
     "Els diners es poden mesurar amb qualsevol precisió decimal "
     "(euros i cèntims): es considera contínua, no discreta."),
   D("Variable quantitativa contínua; s'estudia mitjançant una mostra",
     "MOSTRA_POBLACIO_INVERTIDES",
     "El grup d'amics és petit i accessible: es pot preguntar a "
     "tothom, no cal triar-ne només una mostra.")],
  ["Els diners es mesuren amb decimals (euros i cèntims): discreta o "
   "contínua?",
   "El grup d'amics és petit: és realista preguntar a tothom?"],
  ["Els diners gastats admeten qualsevol valor decimal: variable "
   "quantitativa contínua.",
   "Com que el grup d'amics és petit i accessible, es pot estudiar tot "
   "el grup, sense necessitat de mostra."],
  ex_text=E218)

# f) efectes medicament: qual./quant. segons com es miri, mostra (assaig clínic)
Q("218f", 218, "f", B1, "A",
  "Els efectes d'un nou medicament en l'ésser humà.",
  "Es pot estudiar amb variables qualitatives (tipus d'efecte) o "
  "quantitatives (intensitat); en qualsevol cas, sempre s'estudia "
  "mitjançant una mostra (assaig clínic)",
  [D("Sempre és una variable qualitativa; s'estudia tota la població",
     "MOSTRA_POBLACIO_INVERTIDES",
     "No es pot provar un medicament en tota la humanitat: "
     "necessàriament s'estudia mitjançant una mostra (un assaig "
     "clínic amb un grup de voluntaris)."),
   D("Sempre és una variable quantitativa; s'estudia tota la població",
     "MOSTRA_POBLACIO_INVERTIDES",
     "Encara que es mesuri la intensitat d'un efecte (quantitativa), "
     "no es pot estudiar tota la humanitat: cal una mostra, com en "
     "qualsevol assaig clínic."),
   D("Sempre és una variable qualitativa; s'estudia mitjançant una "
     "mostra", "QUALITATIVA_QUANTITATIVA_CONFOSES",
     "El tipus de dada no és sempre qualitativa: si es mesura la "
     "intensitat de l'efecte, la variable és quantitativa. Depèn de com "
     "es reculli la dada.")],
  ["Els efectes es poden descriure per tipus (categoria) o per "
   "intensitat (nombre): les dues lectures són possibles.",
   "Provar un medicament en tota la humanitat és impossible: pensa "
   "quin mètode s'utilitza en un assaig clínic real."],
  ["Segons com es reculli la dada, la variable pot ser qualitativa "
   "(tipus d'efecte) o quantitativa (intensitat).",
   "En cap cas es pot provar en tota la humanitat: sempre s'estudia "
   "mitjançant una mostra (un assaig clínic)."],
  ex_text=E218)

# g) color cabells companys classe: qualitativa, població (grup reduït)
Q("218g", 218, "g", B1, "A",
  "El color de cabells dels teus companys de classe.",
  "Variable qualitativa; s'estudia tota la població (una classe té un "
  "nombre reduït de companys)",
  [D("Variable quantitativa discreta; s'estudia tota la població",
     "QUALITATIVA_QUANTITATIVA_CONFOSES",
     "El color de cabells no s'expressa amb un nombre, sinó amb una "
     "categoria (ros, castany, negre...): és una variable qualitativa."),
   D("Variable qualitativa; s'estudia mitjançant una mostra",
     "MOSTRA_POBLACIO_INVERTIDES",
     "Una classe té un nombre reduït de companys, prou petit per "
     "estudiar-los tots: no cal recórrer a una mostra."),
   D("Variable quantitativa contínua; s'estudia tota la població",
     "QUALITATIVA_QUANTITATIVA_CONFOSES",
     "El color no admet valors numèrics ni decimals: no és "
     "quantitativa, és qualitativa.")],
  ["El color de cabells s'expressa amb una categoria, no amb un nombre.",
   "Una classe té pocs companys: es poden estudiar tots sense mostra."],
  ["El color de cabells expressa una categoria: variable qualitativa.",
   "Com que una classe té un nombre reduït d'alumnes, es pot estudiar "
   "tota la població."],
  ex_text=E218)


# ---- exercici 219: discreta o contínua ----
E219 = "De les variables següents, quines són discretes?"

Q("219a", 219, "a", B1, "A",
  "Nombre de mascotes.",
  "Discreta (només pot prendre valors aïllats: $0,1,2,3,\\ldots$)",
  [DT("Contínua (pot prendre qualsevol valor decimal)",
      "DISCRETA_CONTINUA_CONFOSES",
      "El nombre de mascotes és un recompte: no té sentit tenir "
      "\"$2{,}5$ mascotes\"."),
   D("Contínua, perquè el nombre de mascotes pot variar molt d'una "
     "persona a una altra", "DISCRETA_CONTINUA_CONFOSES",
     "El fet que el valor variï molt no la fa contínua: el que "
     "importa és si pot prendre valors intermedis. Un recompte de "
     "mascotes només admet nombres enters."),
   D("No és una variable estadística, perquè no es pot mesurar amb "
     "una unitat", "QUALITATIVA_QUANTITATIVA_CONFOSES",
     "Sí que és una variable estadística quantitativa: es pot comptar "
     "i expressar amb un nombre (encara que no porti unitats com "
     "metres o quilos).")],
  ["Pensa si té sentit un valor \"intermedi\", com $2{,}5$ mascotes.",
   "Un recompte (nombre de coses) sempre és discret."],
  ["El nombre de mascotes només pot ser $0,1,2,3,\\ldots$: no admet "
   "valors intermedis. És DISCRETA."],
  ex_text=E219)

Q("219b", 219, "b", B1, "A",
  "Talla de calçat.",
  "Discreta (pren un conjunt finit i aïllat de valors possibles, "
  "encara que hi hagi mitges talles)",
  [DT("Contínua (pot prendre qualsevol valor decimal, com el pes o "
      "l'alçada)", "DISCRETA_CONTINUA_CONFOSES",
      "Encara que sembli una mesura com el pes o l'alçada, la talla "
      "de calçat només pot prendre un conjunt finit de valors aïllats "
      "(les talles que fabriquen les marques), no qualsevol decimal."),
   D("Contínua, perquè existeixen mitges talles (com el $38{,}5$)",
     "DISCRETA_CONTINUA_CONFOSES",
     "Que hi hagi mitges talles no la converteix en contínua: continua "
     "sent un conjunt finit de valors aïllats ($37, 37{,}5, 38, "
     "38{,}5,\\ldots$), no qualsevol valor possible entre ells."),
   D("No es pot classificar sense saber la marca de sabates",
     "ES_POT_DETERMINAR",
     "El tipus de variable (discreta) no depèn de la marca: totes les "
     "escales de talles funcionen amb un conjunt finit de valors "
     "aïllats.")],
  ["Compara-ho amb el pes o l'alçada, que sí que admeten qualsevol "
   "decimal: la talla de calçat, no.",
   "Encara que hi hagi mitges talles, els valors possibles són un "
   "conjunt finit i aïllat."],
  ["Encara que inclogui mitges talles, la talla de calçat pren un "
   "conjunt finit de valors aïllats, no qualsevol decimal. És "
   "DISCRETA."],
  ex_text=E219)

Q("219c", 219, "c", B1, "A",
  "Perímetre cranial.",
  "Contínua (es pot mesurar amb qualsevol precisió decimal)",
  [DT("Discreta (només pren valors enters, en centímetres)",
      "DISCRETA_CONTINUA_CONFOSES",
      "Un perímetre és una longitud: es pot mesurar amb qualsevol "
      "precisió decimal (mil·límetres, dècimes...), no només amb "
      "nombres enters."),
   D("Discreta, perquè el perímetre cranial d'una persona no canvia",
     "DISCRETA_CONTINUA_CONFOSES",
     "Que el valor d'una persona concreta sigui fix no la fa discreta: "
     "el que compta és si, en principi, pot prendre qualsevol valor "
     "decimal dins d'un interval, i una longitud sí que pot."),
   D("Qualitativa, perquè depèn de la forma del cap de cada persona",
     "QUALITATIVA_QUANTITATIVA_CONFOSES",
     "El perímetre cranial és una longitud mesurable amb un nombre: "
     "és quantitativa, no qualitativa.")],
  ["El perímetre és una longitud: es pot mesurar amb qualsevol "
   "precisió decimal.",
   "Compara-la amb l'edat en anys complets (discreta) o amb el pes "
   "(continu): a quin grup s'assembla més?"],
  ["El perímetre cranial es pot mesurar amb qualsevol precisió "
   "decimal: és CONTÍNUA."],
  ex_text=E219)

Q("219d", 219, "d", B1, "A",
  "Ingressos diaris en una fruiteria.",
  "Contínua (es poden mesurar amb qualsevol precisió decimal: euros i "
  "cèntims)",
  [DT("Discreta (es compten en euros sencers)", "DISCRETA_CONTINUA_CONFOSES",
      "Els ingressos inclouen cèntims: es poden mesurar amb qualsevol "
      "precisió decimal, no només en euros sencers."),
   D("Discreta, perquè cada dia els ingressos són un únic valor "
     "concret", "DISCRETA_CONTINUA_CONFOSES",
     "Que cada dia doni un únic resultat no la fa discreta: el que "
     "compta és si aquell resultat pot ser qualsevol valor decimal "
     "(com $147{,}35$ €), i els diners sí que ho admeten."),
   D("Qualitativa, perquè depèn del tipus de producte venut",
     "QUALITATIVA_QUANTITATIVA_CONFOSES",
     "Els ingressos s'expressen amb un nombre (euros): és una "
     "variable quantitativa, no qualitativa.")],
  ["Els ingressos inclouen cèntims: pensa si admeten qualsevol valor "
   "decimal.",
   "Compara-ho amb els diners gastats pels amics (exercici anterior): "
   "mateix tipus de variable."],
  ["Els ingressos diaris es poden mesurar amb qualsevol precisió "
   "decimal (euros i cèntims): és CONTÍNUA."],
  ex_text=E219)

Q("219e", 219, "e", B1, "A",
  "Quilograms de carn consumits al menjador d'un institut durant una "
  "setmana.",
  "Contínua (es poden mesurar amb qualsevol precisió decimal)",
  [DT("Discreta (es mesuren en quilograms sencers)",
      "DISCRETA_CONTINUA_CONFOSES",
      "Un pes es pot mesurar amb qualsevol precisió decimal (grams, "
      "centèsimes de quilogram...), no només en quilograms sencers."),
   D("Discreta, perquè es tracta d'un total setmanal, un únic valor",
     "DISCRETA_CONTINUA_CONFOSES",
     "Que sigui un únic total no la fa discreta: el que compta és si "
     "aquell total pot prendre qualsevol valor decimal, i un pes "
     "sempre ho admet."),
   D("Qualitativa, perquè depèn del tipus de carn consumida",
     "QUALITATIVA_QUANTITATIVA_CONFOSES",
     "Els quilograms consumits s'expressen amb un nombre: és una "
     "variable quantitativa, no qualitativa.")],
  ["Un pes (quilograms) es pot mesurar amb qualsevol precisió "
   "decimal.",
   "No importa que sigui un total setmanal: el que compta és si el "
   "valor pot ser decimal."],
  ["Els quilograms de carn consumits es poden mesurar amb qualsevol "
   "precisió decimal: és CONTÍNUA."],
  ex_text=E219)


# =====================================================================
# BLOC 2 — TAULES DE FREQÜÈNCIES (exercicis 220-226, 235)
# =====================================================================

# ---- exercici 220: hores d'estudi (30 alumnes) ----
E220 = ("El nombre d'hores diàries d'estudi de 30 alumnes és: "
        "3, 4, 3, 5, 5, 2, 1, 3, 2, 0, 1, 1, 1, 1, 2, 0, 3, 2, 2, 1, 3, 4, "
        "5, 0, 2, 1, 2, 1, 4, 3.")

Q("220a", 220, "a", B2, "A",
  "Quina és la freqüència absoluta del valor $x_i=1$ hora?",
  "$8$",
  [D("$7$", "RECOMPTE_MAL_FET",
     "Torna a comptar quantes vegades apareix l'$1$ a la llista de "
     "$30$ dades: n'hi ha una més."),
   D("$3$", "FREQ_ABSOLUTA_ACUMULADA_CONFOSES",
     "$3$ és la freqüència absoluta de $x_i=0$, no de $x_i=1$: revisa "
     "quin valor toca comptar."),
   D("$30$", "TOTAL_DADES_MAL_CALCULAT",
     "$30$ és el nombre TOTAL de dades, no el recompte d'un valor "
     "concret. Compta només quantes vegades apareix l'$1$.")],
  ["Recorre la llista de $30$ dades i marca cada vegada que trobis un "
   "$1$.",
   "Compta-les totes abans de donar el resultat final."],
  ["Comptant les $30$ dades, l'$1$ apareix $8$ vegades: $f(1)=8$."],
  ex_text=E220)

Q("220b", 220, "b", B2, "A",
  "Quina és la freqüència absoluta acumulada $F_i$ del valor "
  "$x_i=2$ hores?",
  "$18$",
  [D("$7$", "FREQ_ABSOLUTA_ACUMULADA_CONFOSES",
     "$7$ és la freqüència absoluta (no acumulada) de $x_i=2$: la "
     "freqüència ACUMULADA suma també els valors anteriors ($0$ i "
     "$1$)."),
   D("$11$", "F_ACUMULADA_NO_CREIXENT",
     "$11$ és $F_i$ del valor anterior, $x_i=1$: per a $x_i=2$ cal "
     "sumar-hi també la freqüència absoluta del $2$."),
   D("$30$", "TOTAL_DADES_MAL_CALCULAT",
     "$30$ és el total de totes les dades, la $F_i$ de l'últim valor "
     "($x_i=5$), no la de $x_i=2$.")],
  ["La freqüència acumulada de $2$ suma les freqüències absolutes de "
   "$0$, $1$ i $2$.",
   "$f(0)=3$, $f(1)=8$, $f(2)=7$: suma-les."],
  ["$F(2)=f(0)+f(1)+f(2)=3+8+7=18$"],
  ex_text=E220)

Q("220c", 220, "c", B2, "A",
  "Què signifiquen les freqüències absolutes acumulades ($F_i$) "
  "d'aquesta taula?",
  "Que $F_i$ indica quants alumnes estudien com a màxim $x_i$ hores al "
  "dia; per exemple, $F(2)=18$ vol dir que $18$ dels $30$ alumnes "
  "estudien $2$ hores o menys al dia",
  [D("Que $F_i$ indica quants alumnes estudien exactament $x_i$ hores "
     "al dia", "FREQ_ABSOLUTA_ACUMULADA_CONFOSES",
     "Això és el que indica la freqüència absoluta SIMPLE, $f_i$, no "
     "l'acumulada: $F_i$ suma totes les freqüències fins a $x_i$, no "
     "només la d'aquell valor."),
   D("Que $F_i$ indica quants alumnes estudien més de $x_i$ hores al "
     "dia", "FREQ_ABSOLUTA_ACUMULADA_CONFOSES",
     "És al revés: $F_i$ acumula els valors petits, els que són $x_i$ "
     "o MENYS, no els que el superen."),
   D("Que $F_i$ és el percentatge d'alumnes que estudien $x_i$ hores "
     "al dia", "PERCENTATGE_MAL_CALCULAT",
     "$F_i$ és un recompte (un nombre d'alumnes), no un percentatge: "
     "el percentatge s'obtindria dividint $F_i$ entre $N$ i "
     "multiplicant per $100$.")],
  ["$F_i$ es construeix sumant freqüències absolutes fins a un valor: "
   "pensa què representa aquesta suma acumulada.",
   "Si $F(2)=18$, què diu això sobre els alumnes que estudien $0$, "
   "$1$ o $2$ hores, tots junts?"],
  ["$F_i$ suma totes les freqüències dels valors fins a $x_i$ inclòs: "
   "indica quants alumnes estudien com a màxim $x_i$ hores.",
   "Per exemple, $F(2)=18$ vol dir que $18$ dels $30$ alumnes "
   "estudien $2$ hores o menys al dia."],
  ex_text=E220)

# ---- exercici 221: completar taula a partir de relacions f/F ----
E221 = ("Copia i completa aquesta taula de freqüències: $x_i=10,20,"
        "30,40,50,60$; dades donades $F(10)=4$, $f(20)=5$, "
        "percentatge de $20$ és $10\\,\\%$, $F(30)=16$, $f(40)=10$, "
        "$F(50)=41$, percentatge de $60$ és $18\\,\\%$.")

Q("221a", 221, "a", B2, "A",
  "Quant val el total de dades $N$ d'aquesta taula?",
  "$50$",
  [D("$41$", "TOTAL_DADES_MAL_CALCULAT",
     "$41$ és $F(50)$, una freqüència acumulada intermèdia, no el "
     "total $N$ (que és sempre l'última freqüència acumulada, la de "
     "$x_i=60$)."),
   D("$100$", "PERCENTATGE_MAL_CALCULAT",
     "$100$ és el percentatge total (la suma de tots els "
     "percentatges), no el nombre de dades $N$."),
   D("$16$", "TOTAL_DADES_MAL_CALCULAT",
     "$16$ és $F(30)$, no el total de dades: el total és sempre "
     "l'última freqüència absoluta acumulada.")],
  ["Fes servir que $f(20)=5$ correspon a un $10\\,\\%$ del total: "
   "planteja $\\dfrac{5}{N}\\cdot100=10$.",
   "Aïlla $N$ d'aquesta equació."],
  [r"$\dfrac{5}{N}\cdot100=10 \;\Longrightarrow\; N=\dfrac{5\cdot100}{10}=50$"],
  ex_text=E221)

Q("221b", 221, "b", B2, "A",
  "Quant val $f_i$ (freqüència absoluta) del valor $x_i=30$?",
  "$7$",
  [D("$16$", "FREQ_ABSOLUTA_ACUMULADA_CONFOSES",
     "$16$ és $F(30)$ (l'acumulada), no $f(30)$: per obtenir la "
     "freqüència simple cal restar-li l'acumulada anterior, "
     "$F(20)$."),
   D("$9$", "F_ACUMULADA_NO_CREIXENT",
     "$9$ és $F(20)$, la freqüència acumulada anterior, no la que et "
     "demanen: calcula $F(30)-F(20)$, no copiïs $F(20)$."),
   D("$5$", "RECOMPTE_MAL_FET",
     "$5$ és $f(20)$, la freqüència absoluta del valor anterior, no "
     "de $x_i=30$.")],
  ["Primer cal $F(20)=F(10)+f(20)=4+5=9$.",
   "Després, $f(30)=F(30)-F(20)$."],
  ["$F(20)=F(10)+f(20)=4+5=9$",
   "$f(30)=F(30)-F(20)=16-9=7$"],
  ex_text=E221)

Q("221c", 221, "c", B2, "A",
  "Quant val $f_i$ (freqüència absoluta) del valor $x_i=50$?",
  "$15$",
  [D("$41$", "FREQ_ABSOLUTA_ACUMULADA_CONFOSES",
     "$41$ és $F(50)$ (l'acumulada), no $f(50)$: cal restar-li "
     "l'acumulada anterior, $F(40)$."),
   D("$26$", "F_ACUMULADA_NO_CREIXENT",
     "$26$ és $F(40)$, l'acumulada anterior, no la que et demanen: "
     "calcula $F(50)-F(40)$."),
   D("$10$", "RECOMPTE_MAL_FET",
     "$10$ és $f(40)$, la freqüència absoluta del valor anterior, no "
     "de $x_i=50$.")],
  ["Primer cal $F(40)=F(30)+f(40)=16+10=26$.",
   "Després, $f(50)=F(50)-F(40)$."],
  ["$F(40)=F(30)+f(40)=16+10=26$",
   "$f(50)=F(50)-F(40)=41-26=15$"],
  ex_text=E221)

Q("221d", 221, "d", B2, "A",
  "Quant val $f_i$ (freqüència absoluta) del valor $x_i=60$?",
  "$9$",
  [D("$18$", "PERCENTATGE_MAL_CALCULAT",
     "$18$ és el percentatge donat per a $x_i=60$ ($18\\,\\%$), no la "
     "seva freqüència absoluta: cal aplicar aquest percentatge sobre "
     "el total $N=50$."),
   D("$50$", "TOTAL_DADES_MAL_CALCULAT",
     "$50$ és el total de dades $N$, no la freqüència absoluta d'un "
     "valor concret: resta-hi $F(50)$ per obtenir $f(60)$."),
   D("$41$", "F_ACUMULADA_NO_CREIXENT",
     "$41$ és $F(50)$, l'acumulada del valor anterior, no la "
     "freqüència de $x_i=60$.")],
  ["Amb $N=50$ ja calculat, $f(60)=N-F(50)$.",
   "Comprova-ho amb el percentatge donat: $\\frac{f(60)}{50}\\cdot100$ "
   "hauria de donar $18$."],
  ["$f(60)=N-F(50)=50-41=9$",
   r"Comprovació: $\dfrac{9}{50}\cdot100=18\,\%$, que coincideix amb "
   "l'enunciat"],
  ex_text=E221)

# ---- exercici 222: viatges a l'estranger (20 persones) ----
E222 = ("En preguntar a 20 persones sobre el nombre de vegades que "
        "havien viatjat a l'estranger, el resultat va ser: "
        "$3,5,4,4,2,6,1,2,3,3,3,3,3,5,2,6,5,4,4,3$.")

Q("222a", 222, "a", B2, "A",
  "Fent el recompte de les $20$ dades, quantes persones han "
  "viatjat exactament $3$ vegades a l'estranger?",
  "$7$",
  [D("$4$", "RECOMPTE_MAL_FET",
     "Torna a comptar quantes vegades apareix el $3$ a la llista: "
     "n'hi ha més de $4$."),
   D("$20$", "TOTAL_DADES_MAL_CALCULAT",
     "$20$ és el total de persones enquestades, no el recompte de "
     "les que han viatjat exactament $3$ vegades."),
   D("$3$", "RECOMPTE_MAL_FET",
     "Aquest és el propi valor $x_i=3$, no el nombre de vegades que "
     "apareix a la llista.")],
  ["Recorre la llista de $20$ dades i marca cada vegada que trobis "
   "un $3$.",
   "Compta-les totes: n'hauries de trobar més de $6$."],
  ["Comptant les $20$ dades, el $3$ apareix $7$ vegades: $f(3)=7$."],
  ex_text=E222)

Q("222b", 222, "b", B2, "A",
  "Quina és la freqüència absoluta acumulada $F_i$ del valor "
  "$x_i=4$?",
  "$15$",
  [D("$4$", "FREQ_ABSOLUTA_ACUMULADA_CONFOSES",
     "$4$ és la freqüència absoluta simple de $x_i=4$ (no "
     "acumulada): cal sumar-hi també les freqüències de $1$, $2$ i "
     "$3$."),
   D("$11$", "F_ACUMULADA_NO_CREIXENT",
     "$11$ és $F(3)$, l'acumulada del valor anterior: per a $x_i=4$ "
     "cal sumar-hi també $f(4)$."),
   D("$20$", "TOTAL_DADES_MAL_CALCULAT",
     "$20$ és el total de dades, la $F_i$ de l'últim valor "
     "($x_i=6$), no la de $x_i=4$.")],
  ["Calcula les freqüències absolutes de $1$, $2$, $3$ i $4$: "
   "$1,3,7,4$.",
   "Suma-les totes: $F(4)=f(1)+f(2)+f(3)+f(4)$."],
  ["$f(1)=1$, $f(2)=3$, $f(3)=7$, $f(4)=4$",
   "$F(4)=1+3+7+4=15$"],
  ex_text=E222)

# ---- exercici 223: assignatures suspeses (30 alumnes, percentatges) ----
E223 = ("En una avaluació, dels 30 alumnes d'una classe, el $10\\,\\%$ "
        "ho va aprovar tot, el $20\\,\\%$ va suspendre una "
        "assignatura, el $50\\,\\%$ en va suspendre dues, la resta, "
        "més de dues assignatures.")

Q("223a", 223, "a", B2, "A",
  "Quants alumnes van suspendre exactament dues assignatures?",
  "$15$ alumnes",
  [D("$6$ alumnes", "PERCENTATGE_MAL_CALCULAT",
     "Aquest és el nombre d'alumnes que en van suspendre UNA "
     "($20\\,\\%$ de $30$), no dues: cal aplicar el $50\\,\\%$, no "
     "el $20\\,\\%$."),
   D("$50$ alumnes", "PERCENTATGE_MAL_CALCULAT",
     "$50$ és el percentatge donat ($50\\,\\%$), no el nombre "
     "d'alumnes: cal aplicar-lo sobre el total, $30\\cdot0{,}50$."),
   D("$3$ alumnes", "PERCENTATGE_MAL_CALCULAT",
     "Aquest és el nombre d'alumnes que ho van aprovar tot "
     "($10\\,\\%$ de $30$), no els que en van suspendre dues.")],
  ["El $50\\,\\%$ de $30$ alumnes és $30\\cdot0{,}50$.",
   "Calcula aquest producte."],
  ["$50\\,\\%$ de $30=30\\cdot0{,}50=15$ alumnes"],
  ex_text=E223)

Q("223b", 223, "b", B2, "A",
  "Quants alumnes van suspendre MÉS de dues assignatures?",
  "$6$ alumnes",
  [D("$15$ alumnes", "PERCENTATGE_MAL_CALCULAT",
     "$15$ és el nombre d'alumnes que en van suspendre exactament "
     "dues, no més de dues."),
   D("$0$ alumnes, perquè els percentatges ja sumen $100\\,\\%$ "
     "sense aquest grup", "TOTAL_DADES_MAL_CALCULAT",
     "$10\\,\\%+20\\,\\%+50\\,\\%=80\\,\\%$, no $100\\,\\%$: encara "
     "queda un $20\\,\\%$ (that is, $6$ alumnes) per al grup que en "
     "va suspendre més de dues."),
   D("$3$ alumnes", "PERCENTATGE_MAL_CALCULAT",
     "$3$ és el nombre d'alumnes que ho van aprovar tot, no els que "
     "en van suspendre més de dues.")],
  ["Suma els tres percentatges donats i resta'ls de $100\\,\\%$: "
   "$100-10-20-50$.",
   "Aplica aquest percentatge (o directament resta els alumnes ja "
   "comptats) sobre el total de $30$."],
  ["Alumnes ja comptats: $3+6+15=24$",
   "Resta: $30-24=6$ alumnes van suspendre més de dues assignatures"],
  ex_text=E223)

Q("223c", 223, "c", B2, "A",
  "Hi ha algun tipus de freqüència que respongui directament a la "
  "pregunta de quants alumnes van suspendre MENYS de dues "
  "assignatures?",
  "Sí: la freqüència absoluta acumulada del valor \"$1$ assignatura "
  "suspesa\" ($F_1=9$ alumnes), perquè acumula els que en van "
  "suspendre $0$ i $1$",
  [D("No, cap freqüència respon directament a aquesta pregunta: cal "
     "tornar a comptar les dades des de zero", "ES_POT_DETERMINAR",
     "Sí que n'hi ha una: la freqüència absoluta ACUMULADA d'un valor "
     "suma totes les que el precedeixen, que és exactament el que "
     "demana \"menys de dues\"."),
   D("Sí: la freqüència relativa del valor \"$2$ assignatures "
     "suspeses\"", "FREQ_ABSOLUTA_ACUMULADA_CONFOSES",
     "La freqüència relativa de \"$2$\" només parla dels alumnes que "
     "en van suspendre exactament $2$, no dels que en van suspendre "
     "menys de $2$."),
   D("Sí: la freqüència absoluta acumulada del valor \"$2$ "
     "assignatures suspeses\"", "FREQ_ABSOLUTA_ACUMULADA_CONFOSES",
     "La freqüència acumulada de \"$2$\" ($F_2$) inclou també els que "
     "en van suspendre exactament $2$, i la pregunta demana MENYS de "
     "dues, és a dir, només $0$ o $1$: cal l'acumulada de \"$1$\", "
     "no la de \"$2$\".")],
  ["\"Menys de dues\" vol dir $0$ o $1$ assignatures suspeses: quina "
   "freqüència ho suma tot d'un cop?",
   "La freqüència absoluta ACUMULADA d'un valor inclou tots els "
   "valors anteriors, fins aquell inclòs."],
  ["$F_1=f_0+f_1=3+6=9$: la freqüència absoluta acumulada del valor "
   "\"$1$\" respon exactament a la pregunta",
   "Per tant, sí, $9$ alumnes van suspendre menys de dues "
   "assignatures"],
  ex_text=E223)

# ---- exercici 224: cinema (50 dades) ----
# La llista de 50 dades va en TEXT PLA. Mateix motiu que a 228: un bloc
# `$...$` no es parteix mai de línia, i 99 caràcters seguits sobresurten de
# la targeta.
E224 = ("Per fer un estudi fem una enquesta entre el jovent d'un "
        "barri i els preguntem pel nombre de vegades que van al "
        "cinema cada setmana. Els resultats de l'enquesta (50 "
        "persones) són: 0, 0, 2, 3, 5, 1, 3, 2, 0, 0, 4, 1, 2, 4, 3, "
        "1, 2, 3, 2, 2, 1, 1, 1, 3, 2, 1, 1, 1, 1, 1, 2, 1, 5, 4, 0, "
        "0, 2, 2, 4, 1, 3, 5, 2, 3, 2, 2, 0, 1, 1, 1.")

Q("224a", 224, "a", B2, "A",
  "Quina i de quin tipus és la variable estadística que estem "
  "estudiant?",
  "El «nombre de vegades que es va al cinema per setmana»; és "
  "quantitativa discreta (només pren valors enters: $0,1,2,\\ldots$)",
  [D("El «nombre de vegades que es va al cinema»; és quantitativa "
     "contínua", "DISCRETA_CONTINUA_CONFOSES",
     "Un recompte de vegades només admet valors enters aïllats "
     "($0,1,2,\\ldots$), no qualsevol decimal: és discreta, no "
     "contínua."),
   D("El «jovent enquestat»; és una variable qualitativa",
     "QUALITATIVA_QUANTITATIVA_CONFOSES",
     "La variable no és \"qui és enquestat\", sinó la dada numèrica "
     "que se'ls demana: el nombre de vegades que van al cinema."),
   D("El «barri on viuen»; és una variable qualitativa",
     "QUALITATIVA_QUANTITATIVA_CONFOSES",
     "L'enunciat no pregunta pel barri de cadascú, sinó pel nombre de "
     "vegades que van al cinema: aquesta és la variable estudiada.")],
  ["Fixa't en què es demana a cada persona enquestada: un recompte "
   "de vegades.",
   "Un recompte només pot ser $0,1,2,\\ldots$: discret o continu?"],
  ["La variable és el nombre de vegades que es va al cinema per "
   "setmana: un recompte, així que és quantitativa discreta."],
  ex_text=E224)

Q("224b", 224, "b", B2, "A",
  "Quina és la freqüència absoluta del valor $x_i=1$ (una vegada per "
  "setmana)?",
  "$16$",
  [D("$7$", "RECOMPTE_MAL_FET",
     "$7$ és la freqüència de $x_i=0$, no de $x_i=1$: torna a "
     "comptar quantes vegades apareix l'$1$."),
   D("$13$", "RECOMPTE_MAL_FET",
     "$13$ és la freqüència de $x_i=2$, no de $x_i=1$."),
   D("$50$", "TOTAL_DADES_MAL_CALCULAT",
     "$50$ és el total de persones enquestades, no el recompte d'un "
     "valor concret.")],
  ["Recorre les $50$ dades i marca cada vegada que trobis un $1$.",
   "És el valor més freqüent de tots: n'hi ha bastants més que de "
   "cap altre."],
  ["Comptant les $50$ dades, l'$1$ apareix $16$ vegades: $f(1)=16$."],
  ex_text=E224)

Q("224c", 224, "c", B2, "A",
  "Quants joves van al cinema MÉS de dues vegades per setmana?",
  "$14$ joves",
  [D("$36$ joves", "F_ACUMULADA_NO_CREIXENT",
     "$36$ és la freqüència absoluta ACUMULADA fins a $x_i=2$ "
     "($F_2$), que compta els que hi van $2$ vegades o MENYS: és "
     "exactament el contrari del que demana la pregunta."),
   D("$13$ joves", "FREQ_ABSOLUTA_ACUMULADA_CONFOSES",
     "$13$ és només la freqüència de $x_i=2$ (dues vegades), no la "
     "suma dels que hi van MÉS de dues."),
   D("$43$ joves", "F_ACUMULADA_NO_CREIXENT",
     "$43$ és el nombre de joves que hi van almenys una vegada (el "
     "resultat de l'apartat següent), no els que hi van més de "
     "dues.")],
  ["\"Més de dues\" vol dir $x_i>2$, és a dir, $3$, $4$ o $5$ "
   "vegades.",
   "Suma les freqüències absolutes de $3$, $4$ i $5$: "
   "$7+4+3$."],
  ["Joves amb $x_i>2$: $f(3)+f(4)+f(5)=7+4+3=14$"],
  ex_text=E224)

Q("224d", 224, "d", B2, "A",
  "I quants joves van al cinema, com a mínim, una vegada per "
  "setmana?",
  "$43$ joves",
  [D("$16$ joves", "FREQ_ABSOLUTA_ACUMULADA_CONFOSES",
     "$16$ és només la freqüència de $x_i=1$ (exactament una "
     "vegada), no la suma de tots els que hi van una vegada o més."),
   D("$7$ joves", "F_ACUMULADA_NO_CREIXENT",
     "$7$ és el nombre de joves que NO hi van mai ($x_i=0$): la "
     "pregunta demana els que hi van almenys una vegada, és a dir, "
     "tots MENYS aquests."),
   D("$50$ joves", "TOTAL_DADES_MAL_CALCULAT",
     "$50$ és el total de joves enquestats, incloent-hi també els "
     "$7$ que no hi van mai; la pregunta exclou aquest grup.")],
  ["\"Com a mínim una vegada\" és tothom EXCEPTE els que hi van $0$ "
   "vegades.",
   "Calcula $50-f(0)$, o bé suma directament $f(1)+f(2)+f(3)+f(4)"
   "+f(5)$."],
  ["Joves que no hi van mai: $f(0)=7$",
   "Joves amb $x_i\\geq1$: $50-7=43$"],
  ex_text=E224)

# ---- exercici 225: treballadors botigues (35 dades) ----
E225 = ("Les dades següents corresponen al nombre de treballadors "
        "d'una cadena de botigues (35 botigues): "
        "$4,7,5,2,4,5,6,4,7,3,7,4,3,4,4,3,4,3,2,4,4,1,1,2,5,3,8,2,3,2,"
        "8,6,6,1,3$.")

Q("225a", 225, "a", B2, "A",
  "Indica quina és la variable i de quin tipus és.",
  "El «nombre de treballadors de cada botiga»; és quantitativa "
  "discreta",
  [D("El «nombre de treballadors»; és quantitativa contínua",
     "DISCRETA_CONTINUA_CONFOSES",
     "Un nombre de treballadors és un recompte de persones: només pot "
     "prendre valors enters, no qualsevol decimal. És discreta."),
   D("La «cadena de botigues»; és una variable qualitativa",
     "QUALITATIVA_QUANTITATIVA_CONFOSES",
     "La variable estudiada no és \"quina cadena\", sinó el nombre de "
     "treballadors que té cada botiga."),
   D("El «nombre de botigues»; és quantitativa discreta",
     "QUALITATIVA_QUANTITATIVA_CONFOSES",
     "El nombre de botigues ($35$) és una dada fixa de l'enunciat, no "
     "la variable que es mesura a cadascuna: el que varia d'una "
     "botiga a una altra és el seu nombre de treballadors.")],
  ["Cada dada de la llista correspon a UNA botiga: què representa "
   "aquest nombre?",
   "Un recompte de persones només admet valors enters: discreta o "
   "contínua?"],
  ["La variable és el nombre de treballadors de cada botiga: un "
   "recompte, per tant quantitativa discreta."],
  ex_text=E225)

Q("225b", 225, "b", B2, "A",
  "Fent el recompte de les $35$ dades, quina és la freqüència "
  "absoluta acumulada $F_i$ del valor $x_i=4$?",
  "$24$",
  [D("$9$", "FREQ_ABSOLUTA_ACUMULADA_CONFOSES",
     "$9$ és la freqüència absoluta simple de $x_i=4$ (no acumulada): "
     "cal sumar-hi també les freqüències de $1$, $2$ i $3$."),
   D("$15$", "F_ACUMULADA_NO_CREIXENT",
     "$15$ és $F(3)$, l'acumulada del valor anterior: per a $x_i=4$ "
     "cal sumar-hi també $f(4)$."),
   D("$35$", "TOTAL_DADES_MAL_CALCULAT",
     "$35$ és el total de botigues, la $F_i$ de l'últim valor "
     "($x_i=8$), no la de $x_i=4$.")],
  ["Calcula les freqüències absolutes d'$1$ a $4$: $3,5,7,9$.",
   "Suma-les totes: $F(4)=f(1)+f(2)+f(3)+f(4)$."],
  ["$f(1)=3$, $f(2)=5$, $f(3)=7$, $f(4)=9$",
   "$F(4)=3+5+7+9=24$"],
  ex_text=E225)

# ---- exercici 226: esport preferit (50 alumnes) ----
E226 = ("Hem preguntat a 50 alumnes quin és el seu esport preferit: "
        "16 han escollit futbol; 12, bàsquet; 6, handbol; 10, "
        "equitació; i 6, ciclisme.")

Q("226a", 226, "a", B2, "A",
  "Quina és la freqüència absoluta del bàsquet?",
  "$12$",
  [D("$0{,}24$", "FREQ_RELATIVA_MAL_CALCULADA",
     "$0{,}24$ és la freqüència RELATIVA del bàsquet "
     "($\\frac{12}{50}$), no l'absoluta: la freqüència absoluta és "
     "el recompte directe, sense dividir per res."),
   D("$24$", "PERCENTATGE_MAL_CALCULAT",
     "$24$ és el percentatge del bàsquet ($24\\,\\%$), no la "
     "freqüència absoluta (que és el nombre d'alumnes, $12$)."),
   D("$50$", "TOTAL_DADES_MAL_CALCULAT",
     "$50$ és el total d'alumnes enquestats (la suma de tots els "
     "esports), no els que han triat bàsquet en concret.")],
  ["La freqüència absoluta és directament el nombre d'alumnes que "
   "han triat cada esport, tal com dona l'enunciat.",
   "L'enunciat ja diu directament quants han triat bàsquet."],
  ["La freqüència absoluta del bàsquet és la que dona directament "
   "l'enunciat: $12$"],
  ex_text=E226)

Q("226b", 226, "b", B2, "A",
  "Quina freqüència absoluta representa el $20\\,\\%$ dels alumnes?",
  "$10$ alumnes",
  [D("$20$ alumnes", "PERCENTATGE_MAL_CALCULAT",
     "$20$ és el percentatge donat ($20\\,\\%$), no el nombre "
     "d'alumnes: cal aplicar-lo sobre el total, $50\\cdot0{,}20$."),
   D("$16$ alumnes", "PERCENTATGE_MAL_CALCULAT",
     "$16$ correspon al futbol, l'esport més triat, no al $20\\,\\%$ "
     "exacte que et demanen calcular."),
   D("$2{,}5$ alumnes", "ORDRE_MULTIPLICACIO_DIVISIO",
     "Aquest valor surt de dividir en comptes de multiplicar: cal "
     "$50\\cdot0{,}20$, no $20\\cdot0{,}05$ o similar.")],
  ["El $20\\,\\%$ de $50$ alumnes és $50\\cdot0{,}20$.",
   "Calcula aquest producte i compara'l amb les freqüències donades: "
   "coincideix amb un dels esports."],
  ["$20\\,\\%$ de $50=50\\cdot0{,}20=10$ alumnes",
   "Coincideix exactament amb els $10$ alumnes que han triat "
   "equitació"],
  ex_text=E226)

Q("226c", 226, "c", B2, "A",
  "Quina és la freqüència relativa de l'handbol?",
  "$\\dfrac{6}{50}=0{,}12$",
  [D("$6$", "FREQ_RELATIVA_MAL_CALCULADA",
     "Això és la freqüència ABSOLUTA de l'handbol, no la relativa: "
     "cal dividir-la pel total de $50$ alumnes."),
   D("$\\dfrac{6}{16}=0{,}375$", "FREQ_RELATIVA_MAL_CALCULADA",
     "El denominador ha de ser el total de dades, $50$ (el nombre "
     "total d'alumnes enquestats), no la freqüència del futbol, "
     "$16$."),
   D("$12\\,\\%$", "PERCENTATGE_MAL_CALCULAT",
     "Aquest és el percentatge del bàsquet, no la freqüència relativa "
     "de l'handbol. La freqüència relativa de l'handbol s'obté "
     "dividint la seva freqüència absoluta, $6$, pel total.")],
  ["La freqüència relativa s'obté dividint la freqüència absoluta "
   "d'un valor pel total de dades.",
   "Divideix $6$ (handbol) entre $50$ (el total d'alumnes)."],
  ["$f_{\\text{rel}}(\\text{handbol})=\\dfrac{6}{50}=0{,}12$"],
  ex_text=E226)

Q("226d", 226, "d", B2, "A",
  "Quina freqüència relativa representa el $32\\,\\%$?",
  "$0{,}32$, la del futbol",
  [D("$32$, la del futbol", "PERCENTATGE_MAL_CALCULAT",
     "La freqüència relativa és sempre un valor entre $0$ i $1$ "
     "(o una fracció), no el mateix nombre que el percentatge: cal "
     "dividir $32$ entre $100$."),
   D("$0{,}24$, la del bàsquet", "FREQ_RELATIVA_MAL_CALCULADA",
     "$0{,}24$ correspon a un $24\\,\\%$ (el del bàsquet), no al "
     "$32\\,\\%$ que et demanen."),
   D("$0{,}20$, l'equitació", "FREQ_RELATIVA_MAL_CALCULADA",
     "$0{,}20$ correspon a un $20\\,\\%$ (l'equitació), no al "
     "$32\\,\\%$ que et demanen.")],
  ["Passa el $32\\,\\%$ a freqüència relativa dividint entre $100$: "
   "$0{,}32$.",
   "Compara aquest valor amb les freqüències relatives calculades "
   "abans per a cada esport."],
  ["$32\\,\\%\\to0{,}32$, que és $\\dfrac{16}{50}$: correspon al "
   "futbol"],
  ex_text=E226)

# ---- exercici 235: sals ampolles d'aigua (22 dades) ----
E235 = ("Hem estudiat el contingut en sals de 22 ampolles d'aigua, i "
        "n'hem obtingut les dades següents, expressades en "
        "mil·ligrams: $46,25,27,30,48,40,27,44,37,62,56,29,76,75,49,"
        "59,33,52,54,45,66,69$.")

Q("235a", 235, "a", B2, "A",
  "Classifica la variable estadística estudiada.",
  "Variable quantitativa contínua (el contingut en sals pot prendre "
  "qualsevol valor decimal dins d'un rang)",
  [D("Variable quantitativa discreta, perquè totes les dades donades "
     "són nombres enters", "DISCRETA_CONTINUA_CONFOSES",
     "Que les dades s'hagin escrit com a nombres enters no vol dir "
     "que la variable sigui discreta: un contingut en mil·ligrams pot "
     "prendre, en principi, qualsevol valor decimal (per exemple, "
     "$46{,}3$ mg), simplement s'ha arrodonit en recollir-la."),
   D("Variable qualitativa, perquè depèn de la marca de cada ampolla",
     "QUALITATIVA_QUANTITATIVA_CONFOSES",
     "El contingut en sals s'expressa amb un nombre (mil·ligrams): és "
     "una variable quantitativa, no qualitativa."),
   D("Variable quantitativa discreta, perquè només hi ha $22$ dades",
     "DISCRETA_CONTINUA_CONFOSES",
     "El nombre de dades recollides ($22$) no té res a veure amb si "
     "la variable és discreta o contínua: el que ho determina és si "
     "el propi contingut en sals pot prendre valors decimals, i sí "
     "que en pot prendre.")],
  ["El contingut en sals és una mesura (mil·ligrams): pensa si admet "
   "valors decimals, encara que les dades donades siguin enters.",
   "Compara-ho amb altres mesures contínues, com el pes o l'alçada."],
  ["El contingut en sals és una mesura que pot prendre qualsevol "
   "valor decimal dins d'un rang: variable quantitativa contínua."],
  ex_text=E235)

Q("235b", 235, "b", B2, "A",
  "Amb aquestes $22$ dades disperses (de $25$ a $76$ mg, sense gaires "
  "valors repetits), convé fer una taula de freqüències amb cada "
  "valor per separat o agrupar-les en intervals? Per què?",
  "Convé agrupar-les en intervals, perquè amb tants valors diferents "
  "i poc repetits una taula sense agrupar (la majoria de freqüències "
  "serien $1$) no resumeix la informació",
  [D("Amb cada valor per separat, perquè així no es perd cap detall "
     "de les dades originals", "CRITERI_AGRUPACIO_MAL",
     "No perdre cap detall no és l'objectiu d'una taula de "
     "freqüències: l'objectiu és resumir. Amb valors tan dispersos i "
     "poc repetits, una taula sense agrupar seria gairebé tan llarga "
     "com la llista original i no aportaria cap resum útil."),
   D("Amb intervals, però només perquè hi ha poques dades ($22$)",
     "CRITERI_AGRUPACIO_MAL",
     "El motiu no és el nombre de dades en si, sinó que estan molt "
     "disperses i gairebé no es repeteixen: si els $22$ valors "
     "haguessin estat molt semblants entre ells, no calidria agrupar "
     "en intervals."),
   D("És indiferent: les dues maneres donen exactament la mateixa "
     "informació", "VEREDICTE_INVERTIT",
     "No és indiferent: agrupar en intervals sí que aporta un resum "
     "útil (quants valors cauen en cada franja), mentre que una "
     "taula sense agrupar amb dades tan disperses seria gairebé una "
     "còpia de la llista original.")],
  ["Compara quantes vegades es repeteix cada valor a la llista de "
   "$22$ dades.",
   "Si gairebé cap valor es repeteix, una taula sense agrupar no "
   "aporta cap resum: pensa en l'alternativa (agrupar en intervals)."],
  ["Amb un rang ampli ($25$ a $76$ mg) i poques repeticions, una "
   "taula sense agrupar donaria gairebé totes les freqüències "
   "iguals a $1$, i no resumiria res.",
   "Per això, en variables contínues com aquesta, s'agrupen les "
   "dades en intervals: així la taula sí que mostra patrons clars."],
  ex_text=E235)


# =====================================================================
# BLOC 3 — GRÀFICS I INTERPRETACIÓ (exercicis 227-232, 234)
# =====================================================================
# Nota: l'exercici 233 (venda de cotxes) queda EXCLÒS d'aquest bloc
# perquè les seves dades provenen d'un gràfic de línies sense valors
# numèrics indicats al text (vegeu la nota de transcripció del propi
# r-im12.tex); no hi ha manera fiable de formular-ne cap pregunta.

# ---- exercici 227: talles de calçat (20 dades), diagrama de barres ----
E227 = ("La talla de calçat que fan servir 20 alumnes en una classe "
        "d'Educació Física és: $37,40,39,37,38,38,38,41,42,37,43,40,"
        "38,38,38,40,37,37,38,38$. Representa el diagrama de barres i "
        "el polígon de freqüències.")

Q("227", 227, "", B3, "A",
  "Quina talla té la freqüència absoluta més alta, i quin valor pren "
  "aquesta freqüència?",
  "La talla $38$, amb freqüència $8$",
  [D("La talla $37$, amb freqüència $5$", "RECOMPTE_MAL_FET",
     "La talla $37$ sí que és bastant freqüent ($5$ vegades), però no "
     "és la que més es repeteix: torna a comptar la talla $38$."),
   D("La talla $43$, amb freqüència $1$", "RECOMPTE_MAL_FET",
     "La talla $43$ només apareix una vegada: és de les MENYS "
     "freqüents, no de les més freqüents."),
   D("La talla $40$, amb freqüència $3$", "RECOMPTE_MAL_FET",
     "La talla $40$ apareix $3$ vegades, però n'hi ha una altra amb "
     "una freqüència més alta: torna a comptar-les totes.")],
  ["Compta quantes vegades apareix cada talla a la llista de $20$ "
   "dades.",
   "La barra més alta del diagrama de barres és la que té la "
   "freqüència absoluta més gran."],
  ["Comptant les $20$ dades: $37\\to5$, $38\\to8$, $39\\to1$, "
   "$40\\to3$, $41\\to1$, $42\\to1$, $43\\to1$",
   "La freqüència més alta és $8$, per a la talla $38$"],
  ex_text=E227)

# ---- exercici 228: estatures (27 dades), intervals + histograma ----
# La llista de 27 dades va en TEXT PLA, no dins de `$...$`. Un bloc
# matemàtic és una unitat tipogràfica indivisible: KaTeX no el parteix mai,
# de manera que els 107 caràcters de la llista sortien en una sola línia i
# quedaven tallats per la vora de la targeta (228a). Aquí no hi ha res a
# compondre —són números separats per comes— així que en text pla es
# llegeixen igual i el paràgraf els reparteix en les línies que calgui.
E228 = ("Les estatures, en centímetres, d'un grup de 27 joves són: "
        "155, 178, 170, 165, 173, 168, 160, 166, 176, 169, 158, 170, "
        "179, 161, 164, 156, 170, 171, 167, 151, 163, 158, 164, 174, "
        "176, 164, 154. Fes servir intervals d'amplitud $5$ per formar "
        "una taula de freqüències.")

Q("228a", 228, "a", B3, "A",
  "Quants joves tenen una estatura dins de l'interval $[160,165)$ "
  "cm?",
  "$6$ joves",
  [D("$4$ joves", "INTERVAL_LIMIT_MAL_ASSIGNAT",
     "Revisa amb cura els límits de l'interval: recorda que el $160$ "
     "hi pertany, però el $165$ ja pertanyeria al següent interval; "
     "torna a comptar les dades una per una."),
   D("$5$ joves", "RECOMPTE_MAL_FET",
     "T'has deixat una dada pel camí en aquest interval: torna a "
     "comptar quantes estatures cauen entre $160$ (inclòs) i $165$ "
     "(exclòs)."),
   D("$27$ joves", "TOTAL_DADES_MAL_CALCULAT",
     "$27$ és el total de joves del grup sencer, no els que cauen "
     "dins d'aquest interval en concret.")],
  ["Amb intervals $[a,b)$, el límit inferior $a$ hi pertany, el "
   "superior $b$ no.",
   "Recorre la llista i marca les estatures que compleixin "
   "$160\\leq x<165$."],
  ["Estatures dins de $[160,165)$: $160,161,163,164,164,164$",
   "En total, $6$ joves"],
  ex_text=E228)

Q("228b", 228, "b", B3, "A",
  "Quina és la freqüència absoluta acumulada de l'interval "
  "$[165,170)$?",
  "$17$",
  [D("$5$", "FREQ_ABSOLUTA_ACUMULADA_CONFOSES",
     "$5$ és la freqüència absoluta simple d'aquest interval (no "
     "acumulada): cal sumar-hi també les freqüències dels intervals "
     "anteriors."),
   D("$12$", "F_ACUMULADA_NO_CREIXENT",
     "$12$ és l'acumulada de l'interval anterior, $[160,165)$: per a "
     "$[165,170)$ cal sumar-hi també la seva pròpia freqüència, $5$."),
   D("$27$", "TOTAL_DADES_MAL_CALCULAT",
     "$27$ és el total de joves, la freqüència acumulada de l'ÚLTIM "
     "interval, no la de $[165,170)$.")],
  ["Calcula les freqüències absolutes dels intervals anteriors: "
   "$[150,155)\\to2$, $[155,160)\\to4$, $[160,165)\\to6$.",
   "Suma-les totes amb la de $[165,170)$, que és $5$."],
  ["Freqüències: $2,4,6,5$ per als quatre primers intervals",
   "Acumulada de $[165,170)$: $2+4+6+5=17$"],
  ex_text=E228)

Q("228c", 228, "c", B3, "A",
  "Per representar aquestes dades agrupades en intervals, cal fer "
  "servir un diagrama de barres o un histograma? Per què?",
  "Un histograma, perquè la variable és contínua i les dades estan "
  "agrupades en intervals: les barres no porten separació entre "
  "elles",
  [D("Un diagrama de barres, perquè és el gràfic més habitual per a "
     "qualsevol tipus de dades", "DIAGRAMA_HISTOGRAMA_CONFOSOS",
     "El diagrama de barres (amb separació entre barres) s'utilitza "
     "per a variables discretes o qualitatives, no per a dades "
     "contínues agrupades en intervals."),
   D("Un diagrama de barres, perquè hi ha $6$ intervals diferents",
     "DIAGRAMA_HISTOGRAMA_CONFOSOS",
     "El nombre d'intervals no determina el tipus de gràfic: el que "
     "ho determina és que la variable (estatura) és contínua i les "
     "dades estan agrupades, que és exactament quan es fa servir "
     "l'histograma."),
   D("Cap dels dos: amb intervals no es pot representar cap gràfic",
     "DIAGRAMA_HISTOGRAMA_CONFOSOS",
     "Sí que es pot representar: precisament l'histograma és el "
     "gràfic pensat per a dades contínues agrupades en intervals.")],
  ["L'estatura és una variable contínua, agrupada en intervals: "
   "quin gràfic és el propi d'aquest cas?",
   "Recorda la diferència: el diagrama de barres deixa espai entre "
   "barres, l'histograma no."],
  ["Com que l'estatura és contínua i les dades estan agrupades en "
   "intervals, el gràfic adequat és l'histograma, amb barres "
   "contigües (sense separació)."],
  ex_text=E228)

# ---- exercici 229: sopar d'empresa (30 assistents, gràfic de sectors) ----
E229 = ("Dels 30 assistents a un sopar d'empresa, el $30\\,\\%$ va "
        "menjar vedella, el $40\\,\\%$, xai, i la resta va menjar "
        "peix. Representa les dades en un gràfic de sectors.")

Q("229", 229, "", B3, "A",
  "Quin angle ocupa el sector corresponent al xai en el gràfic de "
  "sectors?",
  "$144^\\circ$",
  [D("$40^\\circ$", "SECTOR_ANGLE_MAL_CALCULAT",
     "$40$ és el percentatge del xai, no l'angle del sector: cal "
     "multiplicar la freqüència relativa ($0{,}40$) pels $360^\\circ$ "
     "totals de la circumferència."),
   D("$120^\\circ$", "SECTOR_ANGLE_MAL_CALCULAT",
     "Aquest valor no surt de $0{,}40\\cdot360^\\circ$: torna a fer "
     "el càlcul amb cura."),
   D("$12^\\circ$", "PERCENTATGE_MAL_CALCULAT",
     "Això és el nombre de persones que van menjar xai "
     "($30\\cdot0{,}40$), no l'angle del seu sector al gràfic.")],
  ["L'angle d'un sector s'obté multiplicant la seva freqüència "
   "relativa (el percentatge en tant per u) pels $360^\\circ$ "
   "totals.",
   "Calcula $0{,}40\\cdot360^\\circ$."],
  ["Angle del xai: $0{,}40\\cdot360^\\circ=144^\\circ$"],
  ex_text=E229)

# ---- exercici 230: cert/fals a partir d'un polígon de freqüències ----
E230 = ("Observa aquest polígon de freqüències (amb els punts $(1,3)$, "
        "$(2,5)$, $(3,6)$, $(4,4)$ i $(5,2)$). Indica, raonadament, "
        "quines de les afirmacions següents són certes.")

Q("230a", 230, "a", B3, "B",
  r"La freqüència absoluta de $5$ és $0{,}3$.",
  "Fals: la freqüència absoluta de $x_i=5$ és el punt $(5,2)$, és a "
  "dir, $f(5)=2$ (un nombre enter, un recompte); $0{,}3$ seria, si "
  "de cas, una freqüència relativa aproximada, no l'absoluta.",
  [D("Cert: el punt $(5,2)$ del polígon dona directament la "
     "freqüència $0{,}3$", "FREQ_RELATIVA_MAL_CALCULADA",
     "El punt $(5,2)$ dona la freqüència ABSOLUTA, que és $2$ (un "
     "recompte enter), no $0{,}3$: la freqüència absoluta mai és un "
     "número entre $0$ i $1$."),
   D("Fals: la freqüència absoluta de $5$ és $10$, no $0{,}3$",
     "RECOMPTE_MAL_FET",
     "El veredicte (\"fals\") és correcte, però la freqüència "
     "absoluta de $5$ no és $10$: el propi punt del polígon, "
     "$(5,2)$, ja diu directament que és $2$."),
   D("Cert, perquè la freqüència relativa de $5$ i la seva absoluta "
     "són sempre el mateix valor", "FREQ_ABSOLUTA_ACUMULADA_CONFOSES",
     "La freqüència absoluta i la relativa d'un mateix valor gairebé "
     "mai coincideixen: l'absoluta és un recompte enter ($f(5)=2$), "
     "la relativa és aquest recompte dividit pel total "
     "($\\frac{2}{20}=0{,}10$).")],
  ["El polígon dona directament $f(5)$ amb el seu punt $(5,2)$: "
   "llegeix-lo tal qual.",
   "La freqüència absoluta és sempre un nombre enter (un recompte), "
   "mai un decimal com $0{,}3$."],
  ["El punt $(5,2)$ indica $f(5)=2$, no $0{,}3$: l'afirmació és "
   "FALSA"],
  ex_text=E230)

Q("230b", 230, "b", B3, "B",
  r"La freqüència absoluta acumulada de $4$ és $4$.",
  "Fals: la freqüència absoluta acumulada de $4$ és "
  "$F(4)=3+5+6+4=18$, no $4$ (que és, de fet, la seva freqüència "
  "absoluta SIMPLE, $f(4)$, no l'acumulada).",
  [D("Cert: el punt $(4,4)$ del polígon dona directament $F(4)=4$",
     "FREQ_ABSOLUTA_ACUMULADA_CONFOSES",
     "El punt $(4,4)$ dona la freqüència absoluta SIMPLE, $f(4)=4$, "
     "no l'acumulada: $F(4)$ s'obté sumant també les freqüències dels "
     "valors anteriors ($1$, $2$ i $3$)."),
   D("Fals: la freqüència absoluta acumulada de $4$ és $2$",
     "F_ACUMULADA_NO_CREIXENT",
     "El veredicte (\"fals\") és correcte, però $F(4)$ no pot ser "
     "$2$: l'acumulada creix (o es queda igual) a mesura que $x_i$ "
     "creix, i ja només amb $f(1)=3$ superaria aquest valor."),
   D("Cert, perquè totes les freqüències acumulades d'aquest polígon "
     "valen $4$", "F_ACUMULADA_NO_CREIXENT",
     "Les freqüències acumulades no poden ser totes iguals: van "
     "creixent progressivament a mesura que $x_i$ augmenta, des de "
     "$F(1)=3$ fins a $F(5)=20$.")],
  ["Calcula $F(4)$ sumant les freqüències absolutes de $1$, $2$, $3$ "
   "i $4$: $3+5+6+4$.",
   "No confonguis això amb el punt $(4,4)$, que dona $f(4)$, no "
   "$F(4)$."],
  ["$F(4)=f(1)+f(2)+f(3)+f(4)=3+5+6+4=18$, no $4$: l'afirmació és "
   "FALSA"],
  ex_text=E230)

Q("230c", 230, "c", B3, "B",
  r"La freqüència relativa de $5$ és $2$.",
  "Fals: la freqüència relativa de $5$ és "
  "$\\dfrac{f(5)}{N}=\\dfrac{2}{20}=0{,}10$, no $2$ (que és, de fet, "
  "la seva freqüència absoluta, no la relativa).",
  [D("Cert: la freqüència relativa i l'absoluta d'un valor són "
     "sempre iguals", "FREQ_ABSOLUTA_ACUMULADA_CONFOSES",
     "No són iguals: l'absoluta és un recompte enter ($f(5)=2$), la "
     "relativa és aquest recompte dividit pel total de dades "
     "($\\frac{2}{20}=0{,}10$)."),
   D("Fals: la freqüència relativa de $5$ és $20$", "FREQ_RELATIVA_MAL_CALCULADA",
     "El veredicte (\"fals\") és correcte, però la freqüència "
     "relativa mai és més gran que $1$: cal dividir $f(5)$ entre el "
     "total $N=20$, no multiplicar-lo."),
   D("Cert, perquè $N=20$ i $\\frac{20}{20}\\cdot2=2$",
     "FREQ_RELATIVA_MAL_CALCULADA",
     "Aquest càlcul no correspon a la definició de freqüència "
     "relativa: la freqüència relativa és $\\frac{f(5)}{N}$, no cap "
     "altra combinació dels nombres de l'enunciat.")],
  ["Calcula el total $N$ sumant totes les freqüències: "
   "$3+5+6+4+2$.",
   "La freqüència relativa de $5$ és $\\frac{f(5)}{N}$."],
  ["$N=3+5+6+4+2=20$",
   "$f_{\\text{rel}}(5)=\\dfrac{2}{20}=0{,}10$, no $2$: l'afirmació "
   "és FALSA"],
  ex_text=E230)

Q("230d", 230, "d", B3, "B",
  r"El percentatge de $4$ és $20\,\%$.",
  "Cert: amb $N=20$ dades, el percentatge de $4$ és "
  "$\\dfrac{f(4)}{N}\\cdot100=\\dfrac{4}{20}\\cdot100=20\\,\\%$.",
  [D("Fals: el percentatge de $4$ és $4\\,\\%$", "PERCENTATGE_MAL_CALCULAT",
     "El veredicte (\"fals\") no és correcte: fent el càlcul complet, "
     "$\\frac{4}{20}\\cdot100=20$, no $4$ (que seria el resultat "
     "d'oblidar-se de dividir per $N$ abans de multiplicar per "
     "$100$)."),
   D("Fals: el percentatge de $4$ és $80\\,\\%$", "PERCENTATGE_MAL_CALCULAT",
     "El veredicte no és correcte: $80\\,\\%$ no surt de "
     "$\\frac{4}{20}\\cdot100$; torna a fer el càlcul pas a pas."),
   D("Cert, però només perquè la suma de tots els percentatges dona "
     "$100\\,\\%$", "VEREDICTE_INVERTIT",
     "El veredicte (\"cert\") és correcte, però no per aquest motiu "
     "general: el percentatge de $4$ és $20\\,\\%$ perquè, "
     "concretament, $\\frac{4}{20}\\cdot100=20$.")],
  ["Calcula el total $N=20$ i la freqüència de $4$, que és $f(4)=4$.",
   "Percentatge $=\\dfrac{f(4)}{N}\\cdot100$."],
  ["$N=20$, $f(4)=4$",
   "Percentatge de $4$: $\\dfrac{4}{20}\\cdot100=20\\,\\%$: "
   "l'afirmació és CERTA"],
  ex_text=E230)

# ---- exercici 231: construir taula a partir d'un polígon ----
E231 = ("Construeix la taula de freqüències a partir del polígon de "
        "freqüències següent (amb els punts $(5,1)$, $(10,3)$, "
        "$(15,4)$, $(20,4)$, $(25,7)$ i $(30,6)$).")

Q("231", 231, "", B3, "A",
  "Quantes dades en total representa aquest polígon de freqüències?",
  "$25$ dades",
  [D("$30$ dades", "TOTAL_DADES_MAL_CALCULAT",
     "$30$ és l'últim valor de la variable ($x_i=30$), no el total "
     "de dades: el total és la suma de totes les freqüències, no el "
     "valor més gran de $x_i$."),
   D("$6$ dades", "TOTAL_DADES_MAL_CALCULAT",
     "$6$ és el nombre de punts (valors diferents de $x_i$) que té "
     "el polígon, no el total de dades: cal sumar les freqüències de "
     "cadascun."),
   D("$7$ dades", "RECOMPTE_MAL_FET",
     "$7$ és només la freqüència més alta d'entre els punts "
     "($f(25)=7$), no la suma de totes.")],
  ["El total de dades és la suma de totes les freqüències "
   "absolutes: $1+3+4+4+7+6$.",
   "Suma-les totes."],
  ["$N=1+3+4+4+7+6=25$"],
  ex_text=E231)

# ---- exercici 232: llançaments de dau (50 llançaments) ----
E232 = ("La taula següent mostra els resultats de llançar 50 vegades "
        "un dau: cara $1\\to8$, $2\\to12$, $3\\to5$, $4\\to9$, "
        "$5\\to6$, $6\\to10$.")

Q("232a", 232, "a", B3, "B",
  "En comparar el diagrama de barres de freqüències absolutes amb el "
  "de freqüències relatives d'aquest dau, què s'observa?",
  "Els dos diagrames tenen exactament la mateixa forma (les barres "
  "pugen i baixen igual); només canvia l'escala de l'eix vertical, "
  "perquè les relatives són les absolutes dividides pel mateix "
  "nombre ($50$) en tots els casos",
  [D("El diagrama de relatives té una barra menys, perquè la cara "
     "amb freqüència $5$ desapareix", "ESCALA_ALTERA_DADES",
     "Cap barra desapareix: dividir per $50$ no elimina cap valor, "
     "només n'escala l'alçada. La cara amb freqüència absoluta $5$ "
     "simplement passa a tenir una alçada relativa de $0{,}10$."),
   D("Les formes són diferents, perquè les freqüències relatives "
     "reordenen les cares de menys a més freqüent", "POLIGON_MAL_CONSTRUIT",
     "Les freqüències relatives no reordenen res: cada cara conserva "
     "la seva posició; només es divideix la seva alçada pel mateix "
     "nombre ($50$) a totes elles, així que la forma es manté "
     "idèntica."),
   D("No es poden comparar perquè estan en unitats diferents "
     "(vegades i tant per u)", "ES_POT_DETERMINAR",
     "Sí que es poden comparar directament: ambdós diagrames "
     "mostren la mateixa informació relativa entre cares, només amb "
     "una escala vertical diferent.")],
  ["Cada freqüència relativa s'obté dividint la seva absoluta pel "
   "mateix nombre, $50$: què li passa a la forma d'un gràfic quan "
   "totes les seves alçades es divideixen pel mateix valor?",
   "Compara, per exemple, quina cara té la barra més alta en cada "
   "diagrama."],
  ["Freqüències relatives: $\\frac{8}{50}=0{,}16$, "
   "$\\frac{12}{50}=0{,}24$, $\\frac{5}{50}=0{,}10$, "
   "$\\frac{9}{50}=0{,}18$, $\\frac{6}{50}=0{,}12$, "
   "$\\frac{10}{50}=0{,}20$",
   "Com que totes s'obtenen dividint per $50$, l'ordre i la forma de "
   "les barres es mantenen idèntics: només canvia l'escala vertical"],
  ex_text=E232)

Q("232b", 232, "b", B3, "A",
  "Com s'obté el polígon de freqüències a partir d'un diagrama de "
  "barres com el d'aquest dau?",
  "Unint amb segments els punts que marquen el capdamunt de cada "
  "barra, en l'ordre de les cares",
  [DT("Unint amb una corba suau tots els punts, evitant cantonades",
      "POLIGON_MAL_CONSTRUIT",
      "El polígon de freqüències s'obté unint amb segments RECTES "
      "els punts que marquen l'alçada de cada barra, en l'ordre dels "
      "valors de la variable."),
   D("Unint només els punts de les cares amb freqüència més alta i "
     "més baixa", "POLIGON_MAL_CONSTRUIT",
     "Cal unir TOTS els punts, en l'ordre dels valors de la "
     "variable, no només els extrems."),
   D("Dibuixant un cercle que passi pel capdamunt de totes les "
     "barres", "POLIGON_MAL_CONSTRUIT",
     "El polígon de freqüències no és una circumferència: és una "
     "línia trencada (segments rectes) que uneix els punts "
     "corresponents a cada valor.")],
  ["Pensa en \"polígon\" com una línia trencada, feta de segments "
   "rectes, no una corba ni un cercle.",
   "Cada segment uneix el punt d'una cara amb el de la següent, en "
   "l'ordre $1,2,3,4,5,6$."],
  ["El polígon de freqüències s'obté unint amb segments rectes els "
   "punts del capdamunt de cada barra, seguint l'ordre de les cares "
   "del dau."],
  ex_text=E232)

Q("232c", 232, "c", B3, "B",
  "Podries representar les dades d'aquest dau en un histograma?",
  "No, perquè un histograma es fa servir per a variables contínues "
  "agrupades en intervals, i el resultat de llançar un dau (les "
  "cares $1$ a $6$) és una variable discreta amb valors concrets i "
  "separats; el que correspon és un diagrama de barres",
  [D("Sí, un histograma sempre es pot fer servir en lloc d'un "
     "diagrama de barres", "DIAGRAMA_HISTOGRAMA_CONFOSOS",
     "No sempre: l'histograma és propi de variables contínues "
     "agrupades en intervals. Una variable discreta com el resultat "
     "d'un dau es representa amb un diagrama de barres, no amb un "
     "histograma."),
   D("Sí, perquè hi ha $6$ cares diferents i això ja és prou dades "
     "per fer un histograma", "DIAGRAMA_HISTOGRAMA_CONFOSOS",
     "El nombre de valors diferents no determina si es pot fer un "
     "histograma: el que ho determina és si la variable és contínua "
     "i les dades estan agrupades en intervals, i aquí no és el cas."),
   D("No, perquè amb un dau només es poden fer gràfics de sectors",
     "DIAGRAMA_HISTOGRAMA_CONFOSOS",
     "El veredicte (\"no\") a l'histograma és correcte, però no és "
     "l'únic gràfic possible: el diagrama de barres i el polígon de "
     "freqüències també són adequats per a aquesta variable "
     "discreta.")],
  ["Pensa si la variable \"resultat d'un dau\" és discreta o "
   "contínua.",
   "L'histograma és propi de variables contínues agrupades en "
   "intervals; per a una variable discreta com aquesta, el gràfic "
   "propi és un altre."],
  ["El resultat d'un dau és una variable discreta (valors $1$ a $6$, "
   "separats), no contínua: no correspon fer-hi un histograma, sinó "
   "un diagrama de barres"],
  ex_text=E232)

# ---- exercici 234: lloguer pista de tennis (12 mesos) ----
E234 = ("El nombre de vegades que es va llogar cada mes la pista de "
        "tennis d'un poliesportiu: Gener $100$, Febrer $70$, Març "
        "$97$, Abril $60$, Maig $62$, Juny $120$, Juliol $100$, "
        "Agost $78$, Setembre $66$, Octubre $126$, Novembre $69$, "
        "Desembre $90$.")

Q("234a", 234, "a", B2, "A",
  "Quin és el total de vegades que es va llogar la pista durant tot "
  "l'any?",
  "$1\\,038$",
  [D("$12$", "TOTAL_DADES_MAL_CALCULAT",
     "$12$ és el nombre de mesos de l'any, no el total de vegades que "
     "es va llogar la pista: cal sumar els lloguers de cada mes."),
   D("$126$", "RECOMPTE_MAL_FET",
     "$126$ és només el valor més alt d'un sol mes (octubre), no la "
     "suma de tots els mesos."),
   D("$86{,}5$", "PERCENTATGE_MAL_CALCULAT",
     "Aquest valor sembla sortir de fer una mitjana en comptes d'una "
     "suma: cal sumar els $12$ valors mensuals, no fer-ne la "
     "mitjana.")],
  ["Suma els lloguers dels $12$ mesos, un per un.",
   "$100+70+97+60+62+120+100+78+66+126+69+90$."],
  ["Total: "
   "$100+70+97+60+62+120+100+78+66+126+69+90=1\\,038$"],
  ex_text=E234)

Q("234b", 234, "b", B2, "A",
  "En quin percentatge de mesos es va llogar la pista MÉS de $80$ "
  "vegades?",
  "$50\\,\\%$",
  [D("$6\\,\\%$", "PERCENTATGE_MAL_CALCULAT",
     "$6$ és el NOMBRE de mesos amb més de $80$ lloguers, no el "
     "percentatge: cal dividir aquest $6$ entre el total de $12$ "
     "mesos i multiplicar per $100$."),
   D("$80\\,\\%$", "PERCENTATGE_MAL_CALCULAT",
     "$80$ és el llindar de lloguers de l'enunciat, no el "
     "percentatge de mesos que el superen: no confonguis el valor "
     "llindar amb el resultat del càlcul."),
   D("$41{,}7\\,\\%$", "RECOMPTE_MAL_FET",
     "Aquest percentatge no surt de comptar bé els mesos amb més de "
     "$80$ lloguers: revisa la llista mes a mes (gener, març, juny, "
     "juliol, octubre i desembre en tenen més de $80$).")],
  ["Compta quants mesos tenen més de $80$ lloguers: gener ($100$), "
   "març ($97$), juny ($120$), juliol ($100$), octubre ($126$) i "
   "desembre ($90$).",
   "Divideix aquest recompte entre els $12$ mesos totals i "
   "multiplica per $100$."],
  ["Mesos amb més de $80$ lloguers: gener, març, juny, juliol, "
   "octubre i desembre — $6$ mesos de $12$",
   "Percentatge: $\\dfrac{6}{12}\\cdot100=50\\,\\%$"],
  ex_text=E234)

Q("234c", 234, "c", B3, "A",
  "Com és el polígon de freqüències absolutes acumulades d'aquestes "
  "dades, mes a mes?",
  "Sempre creixent, des de $100$ (gener) fins a $1\\,038$ (desembre), "
  "perquè $F_i$ mai disminueix a mesura que avancen els mesos",
  [D("Creixent al principi i decreixent al final, perquè el nombre "
     "de lloguers baixa alguns mesos", "F_ACUMULADA_NO_CREIXENT",
     "Que la freqüència D'UN MES baixi respecte a l'anterior no fa "
     "baixar l'ACUMULADA: $F_i$ suma sempre els lloguers de tots els "
     "mesos anteriors, així que mai pot disminuir."),
   D("Igual que el polígon de freqüències absolutes SIMPLES (sense "
     "acumular)", "FREQ_ABSOLUTA_ACUMULADA_CONFOSES",
     "No és igual: el polígon de freqüències simples puja i baixa "
     "seguint els lloguers de cada mes per separat, mentre que "
     "l'acumulat només pot pujar o quedar-se igual, mai baixar."),
   D("Constant, perquè el total de lloguers de l'any no canvia",
     "F_ACUMULADA_NO_CREIXENT",
     "El total final ($1\\,038$) és fix, però el polígon mostra com "
     "es va ACUMULANT mes a mes, i aquest recorregut sí que puja "
     "progressivament, no és una línia plana des del principi.")],
  ["Pensa què representa $F_i$: la suma dels lloguers de tots els "
   "mesos fins aquell, inclòs.",
   "Una suma acumulada de valors positius, com creix a mesura que "
   "s'hi afegeixen més mesos?"],
  ["Com que cada $F_i$ suma els lloguers de tots els mesos anteriors "
   "més el propi, mai pot disminuir: el polígon és sempre creixent, "
   "des de $F(\\text{gener})=100$ fins a $F(\\text{desembre})="
   "1\\,038$"],
  ex_text=E234)
