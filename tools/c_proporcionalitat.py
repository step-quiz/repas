# -*- coding: utf-8 -*-
"""c_proporcionalitat.py — Full 6: Proporcionalitat i percentatges.

Genera els ítems dels exercicis 101-118, que corresponen a `im7.tex` del
repositori LaTeX font. Organitzats en 3 blocs:
  directa_inversa   (101-108)   regla de tres directa i inversa
  percentatges      (109-112)   percentatge d'una quantitat, càlcul del
                                 total i de la comissió/quantitat original
  encadenats        (113-118)   augments/disminucions percentuals
                                 encadenats i comparacions "en proporció"

Recompte: 18 exercicis / 21 ítems (comptant \\item dins d'apartats; un
exercici sense apartats compta 1). Els exercicis 105, 106 i 112 tenen 2
apartats cadascun (a/b); la resta són autònoms. Cap exclusió: tots els
enunciats porten al text les dades que calen.

Cap resposta s'escriu a mà: cada resultat s'ha calculat de manera
independent amb `fractions.Fraction` (aritmètica exacta, sense passar per
floats) abans d'escriure cap `Q()`, i s'ha contrastat contra `r-im7.tex`
(el solucionari LaTeX subministrat) sense trobar-hi cap discrepància —
els 21 resultats hi coincideixen exactament (incloent-hi els valors
arrodonits que el mateix solucionari presenta com a aproximats, p. ex.
105a, 106b).

Cap dels 21 ítems necessita `nota`: tots els enunciats són problemes
verbals amb una lectura única i sense ambigüitat matemàtica.
"""
from lib import Q, D, dificultats

# --------------------------------------------------------------------
# Dificultat de cada exercici (1 directa, 2 encadenada, 3 completa).
# Full 6 · proporcionalitat i percentatges
# Vegeu l'escala completa a lib.py. L'itinerari fa servir aquest camp
# per graduar el recorregut, de manera que canviar-hi un número canvia
# l'ordre en què l'alumne es troba els exercicis.
# --------------------------------------------------------------------
dificultats({
    101: 1,  # regla de tres directa; 109 i 110, percentatge directe
    102: 2,
    103: 2,  # proporcionalitat inversa: cal adonar-se que ho és
    104: 1,
    105: 2,
    106: 2,
    107: 2,
    108: 3,  # proporcionalitat composta
    109: 1,
    110: 1,
    111: 2,  # a l'inrevés: saps la part i el tant per cent, busques el total
    112: 2,
    113: 3,  # percentatges encadenats, que no se sumen
    114: 3,
    115: 3,
    116: 3,  # comparar dos augments expressats en unitats diferents
    117: 3,
    118: 3,
})


B1 = "directa_inversa"
B2 = "percentatges"
B3 = "encadenats"


# =====================================================================
# BLOC 1 — PROPORCIONALITAT DIRECTA I INVERSA (exercicis 101-108)
# =====================================================================

# ---- exercici 101: recepta (directa) ----
Q("101", 101, "", B1, "A",
  "Per elaborar una recepta per a 6 persones es necessiten 240 g de "
  "salmó. Esbrina quina quantitat de salmó necessito per a 8 persones.",
  "$320$ g",
  [D("$180$ g", "CREUAMENT_INVERTIT",
     "Has fet servir la regla de tres al revés: a MÉS persones els "
     "correspon MÉS salmó, no menys. Planteja "
     "$\\frac{6}{240}=\\frac{8}{x}$, no la fracció invertida."),
   D("$7\\,\\dfrac{1}{2}$ g", "PRODUCTE_MAL",
     "Sembla que has calculat $240:8\\cdot6$ o similar; el que cal és "
     "$\\dfrac{240\\cdot8}{6}$: la quantitat de salmó creix amb el "
     "nombre de persones, no en el sentit contrari."),
   D("$300$ g", "PROGRESSIO_INVENTADA",
     "Aquest valor no surt de la proporció donada: comprova-ho amb la "
     "regla de tres $\\frac{6}{240}=\\frac{8}{x}$ en comptes d'estimar-lo.")],
  ["Persones i quantitat de salmó són magnituds directament "
   "proporcionals: a més persones, més salmó.",
   "Planteja la regla de tres directa "
   "$\\dfrac{6\\text{ persones}}{240\\text{ g}}="
   "\\dfrac{8\\text{ persones}}{x}$."],
  [r"$\dfrac{6}{240}=\dfrac{8}{x} \;\Longrightarrow\; "
   r"x=\dfrac{240\cdot8}{6}$",
   "$x=320$ g de salmó"],
  ex_text="")

# ---- exercici 102: pots de pintura (inversa) ----
Q("102", 102, "", B1, "A",
  "En Carles va pintar la seva habitació amb 6 pots, de 4 kg de "
  "pintura cada un, però ara només venen pots de 3 kg. Quants pots de "
  "pintura necessita per tornar-la a pintar?",
  "$8$ pots",
  [D("$4\\,\\dfrac{1}{2}$ pots", "CREUAMENT_INVERTIT",
     "Has plantejat la proporció com si fos directa. Aquí la mida del "
     "pot i el nombre de pots són INVERSAMENT proporcionals: a pots "
     "més petits, en calen més, no menys."),
   D("$18$ pots", "ORDRE_MULTIPLICACIO_DIVISIO",
     "Aquest valor surt de multiplicar $6\\cdot3$ en comptes de "
     "dividir la pintura total ($24$ kg) entre la mida del pot nou."),
   D("$2$ pots", "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Sembla que has dividit $3:24$ en comptes de $24:3$: la "
     "quantitat total de pintura es reparteix entre la mida de cada "
     "pot nou, no al revés.")],
  ["Calcula primer la pintura total: $6$ pots de $4$ kg són "
   "$6\\cdot4=24$ kg.",
   "El nombre de pots i la seva mida són inversament proporcionals: "
   "reparteix els $24$ kg entre pots de $3$ kg dividint directament."],
  ["Pintura total: $6\\cdot4=24$ kg",
   r"$\dfrac{24}{3}=8$ pots de $3$ kg"],
  ex_text="")

# ---- exercici 103: diners diaris (inversa) ----
Q("103", 103, "", B1, "A",
  "Amb els diners que tinc puc gastar 15 € diaris durant 6 dies. Si "
  "vull que em durin 9 dies, quant puc gastar cada dia?",
  "$10$ €",
  [D("$22{,}5$ €", "CREUAMENT_INVERTIT",
     "Has tractat dies i despesa diària com a magnituds directament "
     "proporcionals; aquí són INVERSAMENT proporcionals: si vols que "
     "et durin més dies, has de gastar menys cada dia."),
   D("$13{,}5$ €", "TERME_OBLIDAT_OPERACIO",
     "No surt de repartir els diners totals entre els 9 dies nous: "
     "calcula primer el total ($15\\cdot6=90$ €) i després "
     "$90:9$."),
   D("$1{,}67$ €", "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Sembla que has dividit $9:15$ en comptes de repartir els $90$ € "
     "totals entre els $9$ dies.")],
  ["Calcula primer els diners totals de què disposes: "
   "$15\\cdot6=90$ €.",
   "Dies i despesa diària són inversament proporcionals: reparteix "
   "els $90$ € entre els $9$ dies nous dividint directament."],
  ["Diners totals: $15\\cdot6=90$ €",
   r"$\dfrac{90}{9}=10$ € diaris"],
  ex_text="")

# ---- exercici 104: coet (directa) ----
Q("104", 104, "", B1, "A",
  "Un coet espacial tarda 2 minuts a assolir una velocitat de "
  "$30\\,000$ km/h. A aquest mateix ritme, quina velocitat pot assolir "
  "en 5 minuts?",
  "$75\\,000$ km/h",
  [D("$12\\,000$ km/h", "CREUAMENT_INVERTIT",
     "Has invertit la proporció: a MÉS temps accelerant, MÉS "
     "velocitat s'assoleix, no menys. Planteja "
     "$\\frac{2}{30\\,000}=\\frac{5}{x}$."),
   D("$60\\,000$ km/h", "PROGRESSIO_INVENTADA",
     "Aquest valor no surt de la regla de tres donada: comprova "
     "$x=\\dfrac{30\\,000\\cdot5}{2}$ pas a pas."),
   D("$45\\,000$ km/h", "TERME_OBLIDAT_OPERACIO",
     "No coincideix amb $\\dfrac{30\\,000\\cdot5}{2}$: revisa "
     "el producte i la divisió per separat.")],
  ["Temps i velocitat assolida són directament proporcionals: el coet "
   "accelera a ritme constant.",
   "Planteja la regla de tres directa "
   "$\\dfrac{2\\text{ min}}{30\\,000\\text{ km/h}}="
   "\\dfrac{5\\text{ min}}{x}$."],
  [r"$\dfrac{2}{30\,000}=\dfrac{5}{x} \;\Longrightarrow\; "
   r"x=\dfrac{30\,000\cdot5}{2}$",
   "$x=75\\,000$ km/h"],
  ex_text="")

# ---- exercici 105: densitat (directa, dues preguntes independents) ----
E105 = "La densitat mitjana del cos humà és d'1,15 kg/ℓ."

# 105a: V = m/d, m=65 -> V ≈ 56,52 ℓ (valor no exacte al solucionari: es
# presenta arrodonit a 2 decimals, igual que r-im7.tex)
Q("105a", 105, "a", B1, "A",
  "Quin és el volum d'una persona que pesa 65 kg?",
  "$56{,}52$ ℓ (aproximadament)",
  [D("$74{,}75$ ℓ", "CREUAMENT_INVERTIT",
     "Aquest valor surt de multiplicar $65\\cdot1{,}15$ en comptes de "
     "dividir: per aïllar el volum de $d=\\frac{m}{V}$ cal fer "
     "$V=\\frac{m}{d}$, no $m\\cdot d$."),
   D("$0{,}018$ ℓ", "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Sembla que has calculat $1{,}15:65$ en comptes de $65:1{,}15$: "
     "la massa es divideix entre la densitat, no al revés."),
   D("$65$ ℓ", "MAGNITUD_NO_CONVERTIDA",
     "No has fet servir la densitat per convertir la massa en volum: "
     "$65$ kg i $65$ ℓ no representen el mateix a menys que la "
     "densitat fos exactament $1$ kg/ℓ.")],
  ["La densitat relaciona massa i volum: $d=\\dfrac{m}{V}$, amb "
   "$d=1{,}15$ kg/ℓ.",
   "Aïlla el volum: $V=\\dfrac{m}{d}$, i substitueix $m=65$ kg."],
  [r"$V=\dfrac{m}{d}=\dfrac{65}{1{,}15}$",
   "$V\\approx56{,}52$ ℓ"],
  ex_text=E105)

# 105b: m = d*V, V=42 -> 48,3 kg (exacte)
Q("105b", 105, "b", B1, "A",
  "Quant pesarà una persona que té un volum de 42 ℓ?",
  "$48{,}3$ kg",
  [D("$36{,}52$ kg", "CREUAMENT_INVERTIT",
     "Aquest valor surt de dividir $42:1{,}15$ en comptes de "
     "multiplicar: per trobar la massa a partir del volum cal "
     "$m=d\\cdot V$, no $\\frac{V}{d}$."),
   D("$43{,}15$ kg", "TERME_OBLIDAT_OPERACIO",
     "No coincideix amb $1{,}15\\cdot42$: torna a fer el producte "
     "xifra a xifra."),
   D("$42$ kg", "MAGNITUD_NO_CONVERTIDA",
     "No has fet servir la densitat per convertir el volum en massa: "
     "$42$ ℓ i $42$ kg no representen el mateix a menys que la "
     "densitat fos exactament $1$ kg/ℓ.")],
  ["Aïlla la massa de la mateixa fórmula: $m=d\\cdot V$.",
   "Substitueix $d=1{,}15$ kg/ℓ i $V=42$ ℓ."],
  ["$m=d\\cdot V=1{,}15\\cdot42$",
   "$m=48{,}3$ kg"],
  ex_text=E105)

# ---- exercici 106: eco (directa, dues preguntes independents) ----
E106 = ("Una persona està situada a 50 m d'una paret i rep l'eco de la "
        "seva veu 3 dècimes de segon després d'haver cridat.")

# 106a: 50m->0,3s ; 80m -> x = 0,48s (exacte)
Q("106a", 106, "a", B1, "A",
  "Si es col·loca a 80 m de distància, quant de temps tardarà a "
  "sentir l'eco?",
  "$0{,}48$ s",
  [D("$0{,}1875$ s", "CREUAMENT_INVERTIT",
     "Aquest valor surt d'invertir la proporció: a MÉS distància, "
     "l'eco triga MÉS a arribar, no menys. Planteja "
     "$\\frac{50}{0{,}3}=\\frac{80}{x}$."),
   D("$0{,}3$ s", "PROGRESSIO_INVENTADA",
     "Aquest és el temps de l'eco a $50$ m, no a $80$ m: la distància "
     "ha canviat, així que el temps també ha de canviar en la "
     "mateixa proporció."),
   D("$1{,}33$ s", "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Sembla que has dividit $80:0{,}3\\cdot50$ en un ordre "
     "equivocat: revisa la regla de tres $\\frac{50}{0{,}3}="
     "\\frac{80}{x}$ pas a pas.")],
  ["Distància i temps de l'eco són directament proporcionals: a $50$ "
   "m corresponen $0{,}3$ s.",
   "Planteja la regla de tres directa "
   "$\\dfrac{50\\text{ m}}{0{,}3\\text{ s}}=\\dfrac{80\\text{ m}}{x}$."],
  [r"$\dfrac{50}{0{,}3}=\dfrac{80}{x} \;\Longrightarrow\; "
   r"x=\dfrac{0{,}3\cdot80}{50}$",
   "$x=0{,}48$ s"],
  ex_text=E106)

# 106b: 50m->0,3s ; 1s -> x = 500/3 ≈ 166,67 m (no exacte, com al solucionari)
Q("106b", 106, "b", B1, "A",
  "A quina distància s'haurà de col·locar per sentir l'eco després "
  "d'1 segon?",
  "$166{,}67$ m (aproximadament)",
  [D("$0{,}006$ m", "CREUAMENT_INVERTIT",
     "Aquest valor surt d'invertir la proporció: cal "
     "$\\frac{50}{0{,}3}=\\frac{x}{1}$, no la fracció al revés."),
   D("$15$ m", "ORDRE_MULTIPLICACIO_DIVISIO",
     "No coincideix amb $\\dfrac{50\\cdot1}{0{,}3}$: comprova que has "
     "dividit per $0{,}3$ i no que hi has multiplicat."),
   D("$50{,}3$ m", "SUMA_EN_LLOC_RESTA",
     "Has sumat $50$ i $0{,}3$ en comptes de plantejar la regla de "
     "tres $\\frac{50}{0{,}3}=\\frac{x}{1}$.")],
  ["Fes servir la mateixa proporció directa: "
   "$\\dfrac{50\\text{ m}}{0{,}3\\text{ s}}=\\dfrac{x}{1\\text{ s}}$.",
   "Aïlla $x$ multiplicant en creu."],
  [r"$\dfrac{50}{0{,}3}=\dfrac{x}{1} \;\Longrightarrow\; "
   r"x=\dfrac{50\cdot1}{0{,}3}=\dfrac{500}{3}$",
   "$x\\approx166{,}67$ m"],
  ex_text=E106)

# ---- exercici 107: camió (inversa) ----
Q("107", 107, "", B1, "A",
  "Un camió pot transportar 9 caixes que pesen 200 kg cada una. Si es "
  "carreguen caixes de 150 kg, quantes caixes pot portar?",
  "$12$ caixes",
  [D("$6{,}75$ caixes", "CREUAMENT_INVERTIT",
     "Has tractat el pes de la caixa i el nombre de caixes com a "
     "magnituds directament proporcionals; aquí són INVERSAMENT "
     "proporcionals: a caixes més lleugeres, en caben més."),
   D("$1\\,350$ caixes", "ORDRE_MULTIPLICACIO_DIVISIO",
     "Aquest valor surt de multiplicar $9\\cdot150$ en comptes de "
     "repartir el pes total ($1\\,800$ kg) entre el pes de cada "
     "caixa nova."),
   D("$0{,}08$ caixes", "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Sembla que has dividit $150:1\\,800$ en comptes de "
     "$1\\,800:150$.")],
  ["Calcula primer el pes total que pot transportar el camió: "
   "$9\\cdot200=1\\,800$ kg.",
   "El nombre de caixes i el pes de cada caixa són inversament "
   "proporcionals: reparteix el pes total entre caixes de $150$ kg."],
  ["Pes total: $9\\cdot200=1\\,800$ kg",
   r"$\dfrac{1\,800}{150}=12$ caixes"],
  ex_text="")

# ---- exercici 108: pensió (inversa) ----
Q("108", 108, "", B1, "A",
  "La propietària d'una pensió disposa de menjar per alimentar els "
  "seus 18 hostes durant 12 dies. A última hora, el nombre d'hostes "
  "ha augmentat en 6 persones. Per a quants dies tindrà menjar?",
  "$9$ dies",
  [D("$16$ dies", "CREUAMENT_INVERTIT",
     "Has tractat hostes i dies com a magnituds directament "
     "proporcionals; aquí són INVERSAMENT proporcionals: a MÉS "
     "hostes, el menjar dura MENYS dies, no més."),
   D("$8$ dies", "TERME_OBLIDAT_OPERACIO",
     "Revisa el nombre total d'hostes: ara n'hi ha $18+6=24$, no "
     "$18+6+1=25$ ni cap altra xifra; reparteix els $216$ dies-hoste "
     "entre $24$ hostes."),
   D("$3$ dies", "ORDRE_MULTIPLICACIO_DIVISIO",
     "Aquest valor no surt de repartir el total de dies-hoste ($216$) "
     "entre els $24$ hostes actuals: revisa el càlcul "
     "$216:24$.")],
  ["Calcula primer la quantitat total de menjar en «dies-hoste»: "
   "$18\\cdot12=216$.",
   "Ara hi ha $18+6=24$ hostes. Hostes i dies són inversament "
   "proporcionals: reparteix el total entre els $24$ hostes."],
  ["Menjar total: $18\\cdot12=216$ dies-hoste",
   "Hostes actuals: $18+6=24$",
   r"$\dfrac{216}{24}=9$ dies"],
  ex_text="")


# =====================================================================
# BLOC 2 — PERCENTATGES (exercicis 109-112)
# =====================================================================

# ---- exercici 109: fracció a percentatge ----
Q("109", 109, "", B2, "A",
  "Tres de cada cinc alumnes han tingut la grip durant el mes de "
  "gener. Expressa aquesta dada en forma de percentatge.",
  "$60\\,\\%$",
  [D("$35\\,\\%$", "PRODUCTE_MAL",
     "Sembla que has ajuntat les xifres $3$ i $5$ en comptes de "
     "convertir la fracció $\\frac{3}{5}$ a denominador $100$."),
   D("$53\\,\\%$", "ORDRE_MULTIPLICACIO_DIVISIO",
     "Torna a convertir la fracció: $\\frac{3}{5}=\\frac{3\\cdot20}"
     "{5\\cdot20}=\\frac{60}{100}$, no una combinació directa de les "
     "xifres $5$ i $3$."),
   D("$3\\,\\%$", "FRACCIO_COM_PERCENTATGE",
     "Has agafat només el numerador de la fracció com si ja fos el "
     "percentatge: cal convertir la fracció sencera a denominador "
     "$100$.")],
  ["Escriu la dada com una fracció: $\\frac{3}{5}$ dels alumnes.",
   "Converteix-la a una fracció equivalent de denominador $100$."],
  [r"$\dfrac{3}{5}=\dfrac{3\cdot20}{5\cdot20}=\dfrac{60}{100}$",
   "$\\dfrac{60}{100}=60\\,\\%$"],
  ex_text="")

# ---- exercici 110: descompte ----
Q("110", 110, "", B2, "A",
  "Per un CD que costa 21 € em fan un 15\\,\\% de descompte. Quants "
  "diners m'estalvio?",
  "$3{,}15$ €",
  [D("$17{,}85$ €", "VEREDICTE_INVERTIT",
     "Aquest és el preu final DESPRÉS del descompte, no l'estalvi "
     "(els diners que et descompten): l'enunciat pregunta quant "
     "t'estalvies, no quant pagues."),
   D("$1{,}4$ €", "ORDRE_MULTIPLICACIO_DIVISIO",
     "No coincideix amb $21\\cdot\\dfrac{15}{100}$: revisa el "
     "producte pas a pas, sense arrodonir abans d'hora."),
   D("$6$ €", "PROGRESSIO_INVENTADA",
     "Aquest valor no surt de calcular el $15\\,\\%$ de $21$: fes "
     "$21\\cdot\\dfrac{15}{100}$ i comprova el resultat.")],
  ["L'estalvi és el $15\\,\\%$ del preu original, $21$ €.",
   "Calcula'l com $21\\cdot\\dfrac{15}{100}$."],
  [r"$21\cdot\dfrac{15}{100}=21\cdot0{,}15$",
   "$3{,}15$ €"],
  ex_text="")

# ---- exercici 111: trobar el total a partir d'un percentatge ----
Q("111", 111, "", B2, "A",
  "En un institut, 63 alumnes, que són el 15\\,\\% del total, han "
  "viatjat a l'estranger. Quants alumnes té l'institut?",
  "$420$ alumnes",
  [D("$9{,}45$ alumnes", "CREUAMENT_INVERTIT",
     "Aquest valor surt de multiplicar $63\\cdot0{,}15$ en comptes de "
     "dividir: com que $63$ és el $15\\,\\%$ (una part), cal dividir "
     "$63$ entre $0{,}15$ per trobar el total, no multiplicar."),
   D("$78$ alumnes", "SUMA_EN_LLOC_RESTA",
     "Sembla que has sumat $63+15$ en comptes de plantejar "
     "l'equació $0{,}15\\cdot T=63$ i aïllar $T$."),
   D("$630$ alumnes", "ORDRE_MULTIPLICACIO_DIVISIO",
     "No coincideix amb $\\dfrac{63}{0{,}15}$: revisa la divisió, "
     "sobretot la posició de la coma.")],
  ["Anomena $T$ el total d'alumnes de l'institut. Els $63$ que han "
   "viatjat són el $15\\,\\%$ d'aquest total: $0{,}15\\cdot T=63$.",
   "Aïlla $T$ dividint: $T=\\dfrac{63}{0{,}15}$."],
  [r"$0{,}15\cdot T=63 \;\Longrightarrow\; T=\dfrac{63}{0{,}15}$",
   "$T=420$ alumnes"],
  ex_text="")

# ---- exercici 112: comissió (dues preguntes independents) ----
E112 = "Un venedor de cotxes rep com a comissió el 0,8\\,\\% de les vendes que fa."

# 112a: 0,008*V=300 -> V=37500
Q("112a", 112, "a", B2, "A",
  "Si en un mes va rebre 300 € de comissió, quines vendes va fer?",
  "$37\\,500$ €",
  [D("$2{,}4$ €", "CREUAMENT_INVERTIT",
     "Aquest valor surt de multiplicar $300\\cdot0{,}008$ en comptes "
     "de dividir: com que $300$ és el resultat d'aplicar el "
     "$0{,}8\\,\\%$ a les vendes, cal dividir $300$ entre $0{,}008$."),
   D("$375$ €", "PERCENTATGE_DECIMAL_MAL",
     "No coincideix amb $\\dfrac{300}{0{,}008}$: revisa que has "
     "passat correctament el $0{,}8\\,\\%$ a la seva forma decimal "
     "($0{,}008$, no $0{,}08$)."),
   D("$3\\,750$ €", "PERCENTATGE_DECIMAL_MAL",
     "T'has deixat una xifra pel camí en convertir el $0{,}8\\,\\%$ a "
     "decimal: $0{,}8\\,\\%=0{,}008$, no $0{,}08$; revisa la divisió "
     "$300:0{,}008$ amb aquest valor.")],
  ["Anomena $V$ les vendes del mes. La comissió és el $0{,}8\\,\\%$ "
   "de $V$: $0{,}008\\cdot V=300$.",
   "Aïlla $V$ dividint: $V=\\dfrac{300}{0{,}008}$."],
  [r"$0{,}008\cdot V=300 \;\Longrightarrow\; V=\dfrac{300}{0{,}008}$",
   "$V=37\\,500$ €"],
  ex_text=E112)

# 112b: 0,008*45000=360
Q("112b", 112, "b", B2, "A",
  "Si el mes següent va vendre per valor de 45\\,000 €, quina "
  "comissió va obtenir?",
  "$360$ €",
  [D("$3\\,600$ €", "PERCENTATGE_DECIMAL_MAL",
     "T'has deixat una xifra pel camí en convertir el $0{,}8\\,\\%$ a "
     "decimal: $0{,}8\\,\\%=0{,}008$, no $0{,}08$; multiplica de nou "
     "$45\\,000\\cdot0{,}008$."),
   D("$56{,}25$ €", "CREUAMENT_INVERTIT",
     "Aquest valor surt de dividir $45\\,000:0{,}008$ en comptes de "
     "multiplicar: aquí es demana la comissió a partir de les "
     "vendes, així que cal $0{,}008\\cdot45\\,000$."),
   D("$36$ €", "PERCENTATGE_DECIMAL_MAL",
     "T'has deixat una xifra pel camí en convertir el $0{,}8\\,\\%$ a "
     "decimal: revisa que $0{,}8\\,\\%=0{,}008$, i multiplica de nou.")],
  ["La comissió és el $0{,}8\\,\\%$ de les vendes: "
   "$0{,}008\\cdot45\\,000$.",
   "Multiplica amb cura la posició de la coma decimal."],
  ["$0{,}008\\cdot45\\,000$",
   "$360$ €"],
  ex_text=E112)


# =====================================================================
# BLOC 3 — AUGMENTS I DISMINUCIONS ENCADENATS (exercicis 113-118)
# =====================================================================

# ---- exercici 113: dos augments del 3% seguits ----
Q("113", 113, "", B3, "A",
  "Un comerciant decideix apujar el preu d'una mercaderia, que era "
  "de 72 €, un 3\\,\\%, i a la setmana següent, un 3\\,\\% més sobre "
  "l'últim preu. Quin és el preu final de venda?",
  "$76{,}38$ €",
  [D("$76{,}32$ €", "SUMA_EN_LLOC_RESTA",
     "Aquest valor surt de sumar els dos augments ($6\\,\\%$ de cop) "
     "en comptes d'aplicar-los seguits: el segon $3\\,\\%$ s'ha de "
     "calcular sobre el preu JA apujat, no sobre el preu original."),
   D("$74{,}16$ €", "TERME_OBLIDAT_OPERACIO",
     "Aquest és el preu després NOMÉS del primer augment: encara "
     "falta aplicar el segon $3\\,\\%$ sobre aquest nou preu, no "
     "aturar-se aquí."),
   D("$78{,}48$ €", "PROGRESSIO_INVENTADA",
     "No coincideix amb aplicar el factor $1{,}03$ dues vegades "
     "seguides sobre $72$: torna a fer el càlcul pas a pas.")],
  ["Apujar un preu un $3\\,\\%$ equival a multiplicar-lo per "
   "$1{,}03$.",
   "El segon augment es calcula sobre el preu JA apujat: cal "
   "multiplicar per $1{,}03$ una segona vegada, no sobre el preu "
   "original."],
  ["Preu després del primer augment: $72\\cdot1{,}03=74{,}16$ €",
   "Preu després del segon augment (sobre $74{,}16$ €): "
   "$74{,}16\\cdot1{,}03=76{,}3848$ €",
   "Arrodonit a cèntims, que és com s'expressen els preus: "
   "$76{,}38$ €"],
  ex_text="")

# ---- exercici 114: percentatge global d'increments encadenats ----
Q("114", 114, "", B3, "A",
  "En dues setmanes consecutives s'han aplicat al preu d'un article "
  "augments del 2\\,\\% i del 5\\,\\%. En quin percentatge s'ha "
  "incrementat l'article sobre el seu preu original?",
  "$7{,}1\\,\\%$",
  [D("$7\\,\\%$", "SUMA_EN_LLOC_RESTA",
     "Sumar $2+5$ només seria correcte si el segon augment es "
     "calculés sobre el preu ORIGINAL; com que es calcula sobre el "
     "preu ja incrementat la primera setmana, els factors "
     "s'han de MULTIPLICAR, no sumar."),
   D("$10{,}0\\,\\%$", "PRODUCTE_MAL",
     "Aquest valor no surt de multiplicar els factors "
     "$1{,}02\\cdot1{,}05$: revisa el producte i resta-hi $1$ al "
     "final per obtenir el percentatge d'increment."),
   D("$1{,}071\\,\\%$", "ORDRE_MULTIPLICACIO_DIVISIO",
     "El factor global és $1{,}071$, però el percentatge d'increment "
     "és $(1{,}071-1)\\cdot100=7{,}1\\,\\%$, no el factor tal qual "
     "llegit com a percentatge.")],
  ["Cada augment equival a multiplicar pel factor "
   "$1+\\frac{\\%}{100}$; com que el segon s'aplica sobre el preu ja "
   "incrementat, els factors es multipliquen entre si.",
   "Calcula $1{,}02\\cdot1{,}05$ i compara el resultat amb $1$ per "
   "trobar el percentatge d'increment."],
  ["Factor global: $1{,}02\\cdot1{,}05=1{,}071$",
   "Percentatge d'increment: $(1{,}071-1)\\cdot100=7{,}1\\,\\%$ "
   "(i no simplement $2+5=7\\,\\%$, perquè el segon augment es "
   "calcula sobre una quantitat ja més gran)"],
  ex_text="")

# ---- exercici 115: augment i disminució del mateix % no es compensen ----
Q("115", 115, "", B3, "A",
  "En una botiga apugen el preu d'un producte de 200 € un 10\\,\\%. A "
  "la setmana següent decideixen rebaixar-lo un 10\\,\\% del preu que "
  "té en aquell moment. Què ha passat amb el preu?",
  "El preu final és $198$ €, $2$ € menys que el preu inicial de "
  "$200$ €",
  [D("El preu torna a ser exactament $200$ €, els mateixos que a "
     "l'inici", "VEREDICTE_INVERTIT",
     "Encara que l'augment i la rebaixa semblin del mateix "
     "$10\\,\\%$, no es compensen: el $10\\,\\%$ que es rebaixa es "
     "calcula sobre una quantitat MÉS GRAN ($220$ €) que la que es "
     "va apujar ($200$ €)."),
   D("El preu final és $220$ €, $20$ € més que el preu inicial",
     "TERME_OBLIDAT_OPERACIO",
     "Aquest és el preu just DESPRÉS de l'augment, abans d'aplicar "
     "la rebaixa del $10\\,\\%$ que ve tot seguit: encara falta "
     "aquest segon pas."),
   D("El preu final és $180$ €, $20$ € menys que el preu inicial",
     "ORDRE_MULTIPLICACIO_DIVISIO",
     "No coincideix amb aplicar primer el factor $1{,}10$ i després "
     "el factor $0{,}90$ sobre el preu ja apujat: torna a fer els "
     "dos passos per separat.")],
  ["Apujar un $10\\,\\%$ multiplica per $1{,}10$; rebaixar un "
   "$10\\,\\%$ (sobre el preu ja apujat) multiplica per $0{,}90$.",
   "Aplica els dos factors seguits, sobre el preu que resulti de "
   "cada pas, no tots dos sobre el preu original."],
  ["Preu després de l'augment: $200\\cdot1{,}10=220$ €",
   "Preu després de la rebaixa (sobre $220$ €): "
   "$220\\cdot0{,}90=198$ €",
   "El preu ha quedat $2$ € per sota de l'original: augment i "
   "rebaixa del mateix percentatge NO es compensen, perquè es "
   "calculen sobre quantitats diferents"],
  ex_text="")

# ---- exercici 116: comparar increments en proporció, no en euros ----
Q("116", 116, "", B3, "A",
  "La carn de xai, durant el Nadal, va augmentar el seu preu de "
  "8,85 €/kg a 11,55 €/kg. Un altre producte que s'ha encarit ha "
  "estat el raïm, de 2,10 €/kg a 3,95 €/kg. Quin producte s'ha "
  "incrementat més en proporció?",
  "El raïm s'ha incrementat més en proporció (uns $88{,}1\\,\\%$ "
  "enfront d'un $30{,}5\\,\\%$ del xai)",
  [D("El xai, perquè ha pujat més en euros per quilo ($2{,}70$ € "
     "enfront d'$1{,}85$ €)", "VEREDICTE_INVERTIT",
     "L'enunciat pregunta quin s'ha incrementat més EN PROPORCIÓ "
     "(percentualment), no en euros absoluts: cal comparar "
     "$\\frac{2{,}70}{8{,}85}$ amb $\\frac{1{,}85}{2{,}10}$, no "
     "$2{,}70$ amb $1{,}85$."),
   D("Els dos productes s'han incrementat exactament igual en "
     "proporció", "PROGRESSIO_INVENTADA",
     "Calcula els dos percentatges d'augment per separat "
     "($\\approx30{,}5\\,\\%$ el xai, $\\approx88{,}1\\,\\%$ el "
     "raïm) i comprova que no coincideixen."),
   D("El xai, perquè el seu percentatge d'augment és "
     "$\\dfrac{11{,}55}{8{,}85}\\approx1{,}305$", "PRODUCTE_MAL",
     "Aquest valor ($1{,}305$) és el factor de preu final, no "
     "l'augment relatiu: l'increment percentual és "
     "$\\frac{11{,}55-8{,}85}{8{,}85}\\approx30{,}5\\,\\%$, i encara "
     "cal comparar-lo amb el del raïm per saber quin ha pujat més.")],
  ["Per comparar «en proporció» cal calcular el percentatge "
   "d'augment de cada producte respecte al seu preu INICIAL, no la "
   "diferència en euros.",
   "Calcula per separat "
   "$\\frac{11{,}55-8{,}85}{8{,}85}$ (xai) i "
   "$\\frac{3{,}95-2{,}10}{2{,}10}$ (raïm), i compara els dos "
   "resultats."],
  [r"Xai: augment relatiu $\dfrac{11{,}55-8{,}85}{8{,}85}="
   r"\dfrac{2{,}70}{8{,}85}\approx0{,}3051\Rightarrow30{,}5\,\%$",
   r"Raïm: augment relatiu $\dfrac{3{,}95-2{,}10}{2{,}10}="
   r"\dfrac{1{,}85}{2{,}10}\approx0{,}8810\Rightarrow88{,}1\,\%$",
   "Encara que el xai ha pujat més en euros per quilo, el raïm "
   "s'ha encarit molt més en proporció"],
  ex_text="")

# ---- exercici 117: comparar dilatacions com a factor, no com a diferència ----
Q("117", 117, "", B3, "A",
  "En escalfar una barra de metall d'1 m a $200^\\circ$C, s'ha "
  "dilatat fins a mesurar 1,04 m. Una barra de 60 cm d'un altre "
  "metall, en escalfar-la a la mateixa temperatura, s'ha dilatat "
  "fins a mesurar 61,9 cm. Quin metall es dilata menys?",
  "El segon metall (el de $60$ cm) es dilata menys",
  [D("El primer metall (l'$1$ m), perquè el seu factor de dilatació, "
     "$1{,}04$, és més petit que $61{,}9$", "COMPARA_TERMES",
     "$61{,}9$ no és un factor de dilatació: cal dividir la longitud "
     "final entre la inicial EN LES MATEIXES UNITATS "
     "($\\frac{61{,}9}{60}\\approx1{,}0317$) per obtenir-ne un, i "
     "comparar-lo amb $1{,}04$."),
   D("Els dos metalls es dilaten exactament igual, perquè tots dos "
     "han augmentat uns 2 o 4 centèsimes per unitat", "PROGRESSIO_INVENTADA",
     "Compara els factors de dilatació exactes "
     "($1{,}04$ i $\\approx1{,}0317$), no una impressió aproximada "
     "de la diferència absoluta."),
   D("No es pot saber quin es dilata menys perquè les mesures estan "
     "en unitats diferents (m i cm)", "ES_POT_DETERMINAR",
     "El factor de dilatació (longitud final entre inicial) no "
     "depèn de la unitat que facis servir, mentre siguis "
     "consistent en cada barra per separat: es pot comparar "
     "perfectament.")],
  ["Per comparar la dilatació cal fixar-nos en el FACTOR pel qual es "
   "multiplica la longitud original, no en l'augment absolut.",
   "Calcula per separat $\\frac{1{,}04}{1}$ i "
   "$\\frac{61{,}9}{60}$, cadascun en les seves pròpies unitats."],
  [r"Primer metall: factor $\dfrac{1{,}04}{1}=1{,}04$",
   r"Segon metall: factor $\dfrac{61{,}9}{60}\approx1{,}0317$",
   "Com que $1{,}0317<1{,}04$, el segon metall s'ha dilatat "
   "proporcionalment menys"],
  ex_text="")

# ---- exercici 118: comprovar un percentatge anunciat ----
Q("118", 118, "", B3, "A",
  "En un envàs de galetes anuncien que conté un 25\\,\\% més de "
  "galetes pel mateix preu. Els envasos antics pesaven 1 kg i "
  "l'envàs actual amb l'oferta pesa 1,2 kg. És certa la publicitat?",
  "No: l'envàs només conté un $20\\,\\%$ més de galetes, no un "
  "$25\\,\\%$",
  [D("Sí: el pes ha passat d'$1$ kg a $1{,}2$ kg, i $1{,}2$ és "
     "exactament un $25\\,\\%$ més que $1$", "PRODUCTE_MAL",
     "Comprova-ho amb un $25\\,\\%$ real: $1\\cdot1{,}25=1{,}25$ kg, "
     "no $1{,}2$ kg. El pes anunciat no coincideix amb un increment "
     "del $25\\,\\%$."),
   D("Sí, perquè $1{,}2-1=0{,}2$ i $0{,}2\\cdot100=25$",
     "ORDRE_MULTIPLICACIO_DIVISIO",
     "$0{,}2\\cdot100=20$, no $25$: revisa aquest darrer pas del "
     "càlcul del percentatge real d'increment."),
   D("No es pot saber sense conèixer el pes exacte d'una galeta",
     "ES_POT_DETERMINAR",
     "Si el pes de cada galeta es manté constant (com dona a "
     "entendre l'enunciat), el percentatge d'augment de PES i el de "
     "NOMBRE de galetes coincideixen: no cal conèixer el pes d'una "
     "galeta per respondre.")],
  ["Si el pes de cada galeta no canvia, un $25\\,\\%$ més de galetes "
   "hauria de suposar exactament un $25\\,\\%$ més de pes.",
   "Comprova quin percentatge d'augment dona realment el pes: "
   "$\\frac{1{,}2-1}{1}$."],
  [r"Un $25\,\%$ real donaria $1\cdot1{,}25=1{,}25$ kg, però "
   r"l'envàs actual pesa només $1{,}2$ kg",
   r"Increment real: $\dfrac{1{,}2-1}{1}=0{,}20\Rightarrow20\,\%$",
   "Per tant el pes (i el nombre de galetes, si cada una pesa "
   "igual) només ha augmentat un $20\\,\\%$, no un $25\\,\\%$"],
  ex_text="")
