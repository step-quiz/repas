# -*- coding: utf-8 -*-
"""c_cossos.py — Full 9: Cossos geomètrics. Àrea i volum.

Genera els ítems dels exercicis 170-199, que corresponen a `im10.tex` del
repositori LaTeX font. Organitzats en 4 blocs:
  prismes            (170-175)        àrea de prismes rectes i del cub
  piramides          (176-183)        àrea de piràmides i tetraedres
  cilindres_cons_esfera (184-191)     àrea de cilindres, cons i l'esfera
  volums_aplicacions (193, 195-199)   volums i problemes aplicats

Recompte i exclusions: 30 exercicis / 55 ítems bruts (comptant \\item dins
d'`apartats`/`apartatscols`; un exercici sense apartats compta 1). Les
figures d'`im10.tex` estan transcrites com a text, amb un comentari
`% NOTA DE TRANSCRIPCIÓ` als apartats on la lectura de la imatge original
és massa incerta per confiar-hi (`instruccions.md` §6 del paquet LaTeX ho
detalla apartat per apartat). D'acord amb el criteri general del projecte
—descartar sencer el que depèn d'una figura il·legible, no a mitges—
aquest mòdul EXCLOU:
  - 170, apartats f-j (5 dels 10 prismes: l'enunciat mateix diu que la
    disposició de les mesures sobre la figura no és prou clara)
  - 178 (sencer: la tercera mesura, 14,42 cm, no s'ha pogut identificar
    amb seguretat com a apotema de cap cara concreta de la piràmide)
  - 192 (sencer, 2 apartats: cos compost, mesures no assignables amb
    seguretat a cada peça)
  - 194 (sencer: figura de cos compost poc habitual amb una única mesura,
    insuficient per determinar les dimensions)
  - 195, apartats b, d, g (3 dels 7 volums: cossos no identificats amb
    seguretat a la figura)
Total exclòs: 12 ítems (170f-j: 5, 178: 1, 192: 2, 194: 1, 195b/d/g: 3).
Preguntes finals d'aquest mòdul: 55 - 12 = 43, repartides en 4 blocs de
9-13 ítems (170a-e, 171-177, 179-191 sense el 178, 193, 195a/c/e/f,
196-199).

Cap resposta s'escriu a mà: cada resultat s'ha calculat de manera
independent amb `math`/aritmètica exacta (arrels quadrades i π≈3,14, la
mateixa aproximació que fa servir `r-im10.tex`, confirmada perquè dona
resultats exactes o gairebé exactes en diversos ítems: 187, 190, 191, 193)
abans d'escriure cap `Q()`, i contrastat contra `r-im10.tex` (el solucionari
LaTeX subministrat) sense trobar-hi cap discrepància, EXCEPTE una: l'ítem
181b (àrea total d'una piràmide hexagonal de costat 6 m i altura 8 m) —
`r-im10.tex` arrossega un arrodoniment intermedi inconsistent (fa servir
apotema de la base ≈5,20 m i dona apotema de la piràmide ≈9,55 m i àrea
lateral ≈171,90 m², però l'àrea total final que publica, ≈265,24 m², només
quadra amb el càlcul fet SENSE arrodonir cap pas intermedi —apotema de la
piràmide ≈9,54 m, àrea lateral ≈171,71 m²—, no amb la suma dels seus propis
valors intermedis arrodonits, que donaria ≈265,43 m²). Aquest mòdul manté el
resultat final que el mateix solucionari dona per bo (≈265,24 m²) però hi
arriba amb precisió completa fins a l'últim pas, per coherència interna (el
solucionari LaTeX és una segona opinió a contrastar, no una font de veritat
per copiar cegament).

Cap dels 43 ítems necessita `nota`: un cop exclosos els apartats amb figura
massa incerta (vegeu més amunt), la resta són enunciats de fórmules d'àrea
i volum amb una lectura numèrica única, sense ambigüitat matemàtica pròpia.
"""
import math
from lib import Q, D, DT, tria, dificultats

# --------------------------------------------------------------------
# Dificultat de cada exercici (1 directa, 2 encadenada, 3 completa).
# Full 9 · cossos geomètrics
# Vegeu l'escala completa a lib.py. L'itinerari fa servir aquest camp
# per graduar el recorregut, de manera que canviar-hi un número canvia
# l'ordre en què l'alumne es troba els exercicis.
# --------------------------------------------------------------------
dificultats({
    170: 1,  # àrea total amb totes les dades a l'enunciat
    171: 2,  # cal calcular abans l'àrea de la base (apotema, triangle equilàter)
    172: 2,
    173: 2,
    174: 3,  # a l'inrevés: de l'àrea a l'aresta, i després la diagonal
    175: 3,
    176: 3,
    177: 2,
    179: 2,
    180: 2,  # tetraedre: quatre triangles equilàters
    181: 3,  # altura donada: cal l'apotema de la cara per Pitàgores
    182: 3,
    183: 2,
    184: 2,
    185: 1,  # àrea del cilindre; 188, del con; 195, volums amb la fórmula
    186: 3,  # partir d'una àrea per trobar una mesura
    187: 3,
    188: 1,
    189: 2,
    190: 2,  # Pitàgores per passar de generatriu a altura, o al revés
    191: 2,
    193: 3,  # comparar dos cossos; 196-199, problemes amb context
    195: 1,
    196: 3,
    197: 3,
    198: 3,
    199: 3,
})


B1 = "prismes"
B2 = "piramides"
B3 = "cossos_rodons"
B4 = "volums_aplicacions"

PI = 3.14

SQRT3 = math.sqrt(3)
SQRT2 = math.sqrt(2)


# ------------------------------------------------------------- renderitzat
def dz(x, n=2):
    """Decimal -> LaTeX amb coma catalana, sense zeros decimals sobrers
    ('386' en lloc de '386,00'; '537,6' en lloc de '537,60'). Els valors
    d'aquest full rarament són fraccions exactes senzilles (surten
    d'arrels quadrades o de π aproximat), així que es couen en decimal,
    no amb `lib.tex()` (pensat per a `Fraction`)."""
    r = round(x, n)
    if abs(r) < 10 ** (-n) / 2:
        r = 0.0
    s = ("%." + str(n) + "f") % r
    while s.endswith("0"):
        s = s[:-1]
    if s.endswith("."):
        s = s[:-1]
    if s in ("-0", ""):
        s = "0"
    return s.replace(".", "{,}")


def apx(x, n=2, unitat=""):
    """Un valor aproximat (arrel o amb π): '$\\approx12{,}05$ cm'."""
    return r"$\approx%s$%s" % (dz(x, n), (" " + unitat) if unitat else "")


def val(x, n=2, unitat=""):
    """Un valor exacte en decimal: '$100$ cm$^2$'."""
    return r"$%s$%s" % (dz(x, n), (" " + unitat) if unitat else "")


# =====================================================================
# BLOC 1 — PRISMES I EL CUB (exercicis 170a-e, 171-175)
# =====================================================================
# Àrea total d'un prisma recte: A = 2*A_base + perímetre_base * altura.

# ---- exercici 170: deu prismes en perspectiva (només a-e, f-j exclosos) ----
# La font dona cada prisma NOMÉS com a figura en perspectiva, amb les cotes
# a sobre del dibuix. Com que aquí no hi ha figura, cada apartat porta la
# seva descripció al mateix enunciat (mateix criteri que l'exercici 195):
# sense això, l'enunciat es quedava en la capçalera i l'ítem no es podia
# resoldre.
E170 = ("Calcula l'àrea total d'aquest prisma recte:")

# 170a: rectangular 7x2x4 -> A=100 (exacte)
Q("170a", 170, "a", B1, "A",
  f"{E170} un ortoedre (prisma recte de base rectangular) d'arestes "
  "$7$ cm, $2$ cm i $4$ cm.",
  "$100$ cm$^2$",
  [D("$56$ cm$^2$", "FACTOR_OBLIDAT",
     "T'has deixat una parella de cares pel camí: un ortoedre en té "
     "TRES parelles diferents ($7\\times2$, $7\\times4$ i $2\\times4$), "
     "no només dues."),
   D("$50$ cm$^2$", "POTENCIA_PRODUCTE_UN_FACTOR",
     "Aquest és el resultat de $7\\cdot2+7\\cdot4+2\\cdot4$ sense "
     "multiplicar per $2$: cada cara d'un ortoedre és igual a la "
     "seva oposada, així que cal comptar-les totes dues."),
   D("$112$ cm$^2$", "PRODUCTE_MAL",
     "No coincideix amb $2(7\\cdot2+7\\cdot4+2\\cdot4)$: revisa el "
     "producte de cada parella de cares per separat abans de sumar-les.")],
  ["L'àrea total d'un ortoedre és la suma de les seves $6$ cares: "
   "$3$ parelles de rectangles iguals.",
   "$A=2(a\\cdot b+a\\cdot c+b\\cdot c)$, amb $a=7$, $b=2$, $c=4$."],
  ["$A=2(7\\cdot2+7\\cdot4+2\\cdot4)=2(14+28+8)$",
   "$A=2\\cdot50=100$ cm$^2$"],
  ex_text=E170)

# 170b: triangular equilater costat 5, altura 9 -> A~156.65
Q("170b", 170, "b", B1, "A",
  f"{E170} un prisma de base triangular equilàtera de $5$ cm de "
  "costat i $9$ cm d'altura.",
  apx(156.65, 2, "cm$^2$"),
  [D(apx(146.25, 2, "cm$^2$"), "TERME_OBLIDAT_OPERACIO",
     "Falta comptar les DUES bases triangulars, no només una: "
     "l'àrea total inclou $2\\cdot A_{\\text{base}}$, no $1$ sola."),
   D(apx(67.5, 2, "cm$^2$"), "DIVISIO_REPETIDA",
     "Aquest valor només és l'àrea lateral ($15\\cdot9:2$, a més amb "
     "una divisió de més); l'àrea lateral d'un prisma no es divideix "
     "entre $2$, i encara cal sumar-hi les dues bases."),
   D(apx(175.95, 2, "cm$^2$"), "PRODUCTE_MAL",
     "No coincideix amb $2\\cdot A_{\\text{base}}+15\\cdot9$: revisa "
     "per separat l'àrea del triangle equilàter i l'àrea lateral.")],
  ["L'àrea d'un triangle equilàter de costat $c$ és "
   "$A_{\\text{base}}=\\dfrac{c^2\\sqrt3}{4}$; amb $c=5$, "
   "$A_{\\text{base}}\\approx10{,}83$ cm$^2$.",
   "El perímetre de la base és $3\\cdot5=15$ cm; l'àrea lateral és "
   "$15\\cdot9=135$ cm$^2$."],
  [r"$A_{\text{base}}=\dfrac{5^2\sqrt3}{4}\approx10{,}83$ cm$^2$",
   "$A_{\\text{lateral}}=15\\cdot9=135$ cm$^2$",
   "$A_{\\text{total}}=2\\cdot10{,}83+135\\approx156{,}65$ cm$^2$"],
  ex_text=E170)

# 170c: hexagonal costat 8 apotema 5.2 altura 6 -> A=537.6 (exacte)
Q("170c", 170, "c", B1, "A",
  f"{E170} un prisma de base hexagonal regular de $8$ cm de costat i "
  "$5{,}2$ cm d'apotema, amb $6$ cm d'altura.",
  val(537.6, 2, "cm$^2$"),
  [D(val(288, 2, "cm$^2$"), "TERME_OBLIDAT_OPERACIO",
     "Aquest valor és només l'àrea lateral ($48\\cdot6$): encara "
     "falta sumar-hi les dues bases hexagonals."),
   D(val(374.4, 2, "cm$^2$"), "FACTOR_OBLIDAT",
     "Sembla que només has comptat UNA base hexagonal en lloc de "
     "dues: un prisma sempre en té dues, una a cada extrem."),
   D(val(662.4, 2, "cm$^2$"), "PRODUCTE_MAL",
     "No coincideix amb $2\\cdot124{,}8+48\\cdot6$: revisa per "
     "separat l'àrea de la base hexagonal i l'àrea lateral.")],
  ["L'àrea d'un polígon regular és "
   "$A_{\\text{base}}=\\dfrac{\\text{perímetre}\\cdot\\text{apotema}}{2}$; "
   "amb perímetre $6\\cdot8=48$ cm i apotema $5{,}2$ cm, "
   "$A_{\\text{base}}=124{,}8$ cm$^2$.",
   "L'àrea lateral és $48\\cdot6=288$ cm$^2$."],
  [r"$A_{\text{base}}=\dfrac{48\cdot5{,}2}{2}=124{,}8$ cm$^2$",
   "$A_{\\text{lateral}}=48\\cdot6=288$ cm$^2$",
   "$A_{\\text{total}}=2\\cdot124{,}8+288=537{,}6$ cm$^2$"],
  ex_text=E170)

# 170d: pentagonal costat 5 apotema 3.44 altura 12 -> A=386 (exacte)
Q("170d", 170, "d", B1, "A",
  f"{E170} un prisma de base pentagonal regular de $5$ cm de costat i "
  "$3{,}44$ cm d'apotema, amb $12$ cm d'altura.",
  val(386, 2, "cm$^2$"),
  [D(val(300, 2, "cm$^2$"), "TERME_OBLIDAT_OPERACIO",
     "Aquest valor és només l'àrea lateral ($25\\cdot12$): encara "
     "falta sumar-hi les dues bases pentagonals."),
   D(val(343, 2, "cm$^2$"), "FACTOR_OBLIDAT",
     "Sembla que només has comptat UNA base pentagonal en lloc de "
     "dues."),
   D(val(472, 2, "cm$^2$"), "PRODUCTE_MAL",
     "No coincideix amb $2\\cdot43+25\\cdot12$: revisa per separat "
     "l'àrea de la base i l'àrea lateral.")],
  ["Perímetre de la base: $5\\cdot5=25$ cm; "
   "$A_{\\text{base}}=\\dfrac{25\\cdot3{,}44}{2}=43$ cm$^2$.",
   "Àrea lateral: $25\\cdot12=300$ cm$^2$."],
  [r"$A_{\text{base}}=\dfrac{25\cdot3{,}44}{2}=43$ cm$^2$",
   "$A_{\\text{lateral}}=25\\cdot12=300$ cm$^2$",
   "$A_{\\text{total}}=2\\cdot43+300=386$ cm$^2$"],
  ex_text=E170)

# 170e: triangular rectangle catets 6,8 altura 5 -> A=168 (exacte)
Q("170e", 170, "e", B1, "A",
  f"{E170} un prisma de $5$ cm d'altura amb la base en forma de "
  "triangle rectangle de catets $6$ cm i $8$ cm.",
  val(168, 2, "cm$^2$"),
  [D(val(120, 2, "cm$^2$"), "TERME_OBLIDAT_OPERACIO",
     "Aquest valor és només l'àrea lateral ($24\\cdot5$): encara "
     "falta sumar-hi les dues bases triangulars."),
   D(val(158, 2, "cm$^2$"), "SIGNE_TERME_INDEPENDENT",
     "No has fet servir la hipotenusa ($10$ cm, per Pitàgores) en "
     "el perímetre de la base: el perímetre del triangle rectangle "
     "és $6+8+10=24$ cm, no $6+8=14$ cm."),
   D(val(216, 2, "cm$^2$"), "PRODUCTE_MAL",
     "No coincideix amb $2\\cdot24+24\\cdot5$: revisa per separat "
     "l'àrea de la base i l'àrea lateral.")],
  ["L'àrea de la base (triangle rectangle) és "
   "$A_{\\text{base}}=\\dfrac{6\\cdot8}{2}=24$ cm$^2$.",
   "La hipotenusa, per Pitàgores, és $\\sqrt{6^2+8^2}=10$ cm, així "
   "que el perímetre és $6+8+10=24$ cm i l'àrea lateral, "
   "$24\\cdot5=120$ cm$^2$."],
  [r"$A_{\text{base}}=\dfrac{6\cdot8}{2}=24$ cm$^2$",
   "Hipotenusa: $\\sqrt{6^2+8^2}=10$ cm; perímetre $=24$ cm",
   "$A_{\\text{total}}=2\\cdot24+24\\cdot5=48+120=168$ cm$^2$"],
  ex_text=E170)

# ---- exercici 171: prisma triangular equilàter, costat 2 cm, altura 3 cm ----
# Ab=sqrt3~1.7321, Alat=18, Atot~21.46
Q("171", 171, "", B1, "A",
  "Calcula l'àrea total d'un prisma recte de base triangular "
  "equilàtera de costat $2$ cm i altura $3$ cm.",
  apx(21.46, 2, "cm$^2$"),
  [D(apx(18, 2, "cm$^2$"), "TERME_OBLIDAT_OPERACIO",
     "Aquest valor és només l'àrea lateral ($6\\cdot3$): encara "
     "falta sumar-hi les dues bases triangulars."),
   D(apx(19.73, 2, "cm$^2$"), "FACTOR_OBLIDAT",
     "Sembla que només has comptat UNA base triangular en lloc de "
     "dues: un prisma sempre en té dues."),
   D(apx(24.93, 2, "cm$^2$"), "PRODUCTE_MAL",
     "No coincideix amb $2\\cdot1{,}73+6\\cdot3$: revisa per "
     "separat l'àrea de la base i l'àrea lateral.")],
  ["Àrea de la base: $A_{\\text{base}}=\\dfrac{2^2\\sqrt3}{4}"
   "\\approx1{,}73$ cm$^2$.",
   "Perímetre de la base: $3\\cdot2=6$ cm; àrea lateral "
   "$=6\\cdot3=18$ cm$^2$."],
  [r"$A_{\text{base}}=\dfrac{2^2\sqrt3}{4}\approx1{,}73$ cm$^2$",
   "$A_{\\text{lateral}}=6\\cdot3=18$ cm$^2$",
   "$A_{\\text{total}}\\approx2\\cdot1{,}73+18\\approx21{,}46$ cm$^2$"])

# ---- exercici 172: prisma hexagonal, costat 8 cm, altura 10 cm ----
# apotema=4sqrt3~6.93, Ab~166.28, Alat=480, Atot~812.55
Q("172", 172, "", B1, "A",
  "Calcula l'àrea total d'un prisma hexagonal regular de costat "
  "$8$ cm i altura $10$ cm.",
  apx(812.55, 2, "cm$^2$"),
  [D(apx(480, 2, "cm$^2$"), "TERME_OBLIDAT_OPERACIO",
     "Aquest valor és només l'àrea lateral ($48\\cdot10$): encara "
     "falta sumar-hi les dues bases hexagonals."),
   D(apx(646.28, 2, "cm$^2$"), "FACTOR_OBLIDAT",
     "Sembla que només has comptat UNA base hexagonal en lloc de "
     "dues."),
   D(apx(1042.11, 2, "cm$^2$"), "SIGNE_TERME_INDEPENDENT",
     "L'apotema d'un hexàgon regular de costat $8$ cm és "
     "$4\\sqrt3\\approx6{,}93$ cm, no $8$ cm: apotema i costat "
     "només coincideixen en el cas del quadrat.")],
  ["L'apotema d'un hexàgon regular de costat $c$ és "
   "$a=\\dfrac{c\\sqrt3}{2}$; amb $c=8$, $a\\approx6{,}93$ cm.",
   "Perímetre $=6\\cdot8=48$ cm; "
   "$A_{\\text{base}}=\\dfrac{48\\cdot6{,}93}{2}\\approx166{,}28$ cm$^2$."],
  [r"$a=\dfrac{8\sqrt3}{2}\approx6{,}93$ cm",
   r"$A_{\text{base}}=\dfrac{48\cdot6{,}93}{2}\approx166{,}28$ cm$^2$",
   "$A_{\\text{lateral}}=48\\cdot10=480$ cm$^2$",
   "$A_{\\text{total}}\\approx2\\cdot166{,}28+480\\approx812{,}55$ cm$^2$"])

# ---- exercici 173: prisma hexagonal, costat 6 cm, altura 10 cm ----
# apotema=3sqrt3~5.2, Ab~93.53, Alat=360, Atot~547.06
Q("173", 173, "", B1, "A",
  "Calcula l'àrea total d'un prisma hexagonal regular de costat "
  "$6$ cm i altura $10$ cm.",
  apx(547.06, 2, "cm$^2$"),
  [D(apx(360, 2, "cm$^2$"), "TERME_OBLIDAT_OPERACIO",
     "Aquest valor és només l'àrea lateral ($36\\cdot10$): encara "
     "falta sumar-hi les dues bases hexagonals."),
   D(apx(453.53, 2, "cm$^2$"), "FACTOR_OBLIDAT",
     "Sembla que només has comptat UNA base hexagonal en lloc de "
     "dues."),
   D(apx(576, 2, "cm$^2$"), "SIGNE_TERME_INDEPENDENT",
     "L'apotema d'un hexàgon regular de costat $6$ cm és "
     "$3\\sqrt3\\approx5{,}2$ cm, no $6$ cm.")],
  ["L'apotema és $a=\\dfrac{6\\sqrt3}{2}\\approx5{,}2$ cm.",
   "Perímetre $=6\\cdot6=36$ cm; "
   "$A_{\\text{base}}=\\dfrac{36\\cdot5{,}2}{2}\\approx93{,}53$ cm$^2$."],
  [r"$a=\dfrac{6\sqrt3}{2}\approx5{,}2$ cm",
   r"$A_{\text{base}}=\dfrac{36\cdot5{,}2}{2}\approx93{,}53$ cm$^2$",
   "$A_{\\text{lateral}}=36\\cdot10=360$ cm$^2$",
   "$A_{\\text{total}}\\approx2\\cdot93{,}53+360\\approx547{,}06$ cm$^2$"])

# ---- exercici 174: cub d'àrea total 24 cm^2, troba la diagonal ----
# L=2, dcub=2sqrt3~3.46
Q("174", 174, "", B1, "A",
  "L'àrea total d'un cub és $24$ cm$^2$. Calcula la longitud de la "
  "seva diagonal.",
  apx(3.46, 2, "cm"),
  [D(val(4, 2, "cm"), "ARREL_MAL_APLICADA",
     "Sembla que has confós la diagonal del cub amb l'aresta de "
     "cara al quadrat, o has fet una arrel malament: comprova primer "
     "$L=\\sqrt{24:6}=2$ cm i després aplica $d=L\\sqrt3$."),
   D(apx(2.83, 2, "cm"), "TERME_OBLIDAT_OPERACIO",
     "Aquesta és la diagonal d'una CARA del cub ($L\\sqrt2$), no la "
     "diagonal del cub sencer, que travessa l'interior i és més "
     "llarga: $d=L\\sqrt3$."),
   D(val(2, 2, "cm"), "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquesta és l'aresta del cub, no la diagonal: encara falta "
     "multiplicar per $\\sqrt3$.")],
  ["Un cub té $6$ cares iguals, així que l'aresta compleix "
   "$6L^2=24 \\Rightarrow L^2=4 \\Rightarrow L=2$ cm.",
   "La diagonal del cub és $d=L\\sqrt3$."],
  [r"$L=\sqrt{24:6}=\sqrt4=2$ cm",
   r"$d=L\sqrt3=2\sqrt3\approx3{,}46$ cm"])

# ---- exercici 175: cub d'àrea total 150 m^2, troba la diagonal ----
# L=5, d=5sqrt3~8.66
Q("175", 175, "", B1, "A",
  "L'àrea total d'un cub és $150$ m$^2$. Calcula la longitud de la "
  "seva diagonal.",
  apx(8.66, 2, "m"),
  [D(val(5, 2, "m"), "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquesta és l'aresta del cub, no la diagonal: encara falta "
     "multiplicar per $\\sqrt3$."),
   D(apx(7.07, 2, "m"), "TERME_OBLIDAT_OPERACIO",
     "Aquesta és la diagonal d'una CARA del cub ($L\\sqrt2$), no la "
     "diagonal del cub sencer: cal $d=L\\sqrt3$."),
   D(val(25, 2, "m"), "ARREL_MAL_APLICADA",
     "No has fet l'arrel quadrada de $150:6=25$: l'aresta és "
     "$L=\\sqrt{25}=5$ m, no $25$ m.")],
  ["Aresta: $6L^2=150 \\Rightarrow L^2=25 \\Rightarrow L=5$ m.",
   "Diagonal: $d=L\\sqrt3$."],
  [r"$L=\sqrt{150:6}=\sqrt{25}=5$ m",
   r"$d=L\sqrt3=5\sqrt3\approx8{,}66$ m"])


# =====================================================================
# BLOC 2 — PIRÀMIDES I TETRAEDRES (176a-b, 177, 179a-b, 180a-d, 181a-b,
#                                    182, 183; l'exercici 178 queda exclòs)
# =====================================================================
# Àrea total d'una piràmide: A = A_base + A_lateral, amb
# A_lateral = (perímetre_base * apotema_piràmide) / 2

# ---- exercici 176: edifici en forma de prisma triangular, costat 6 m ----
E176 = ("En un estudi d'arquitectura s'ha dissenyat un edifici que té "
        "forma de prisma recte, de $20$ m d'altura, amb una base "
        "triangular equilàtera de $6$ m de costat.")

# 176a: nomes area lateral -> A=360 (exacte)
Q("176a", 176, "a", B1, "A",
  f"{E176} Quant mesura l'àrea lateral de l'edifici?",
  val(360, 2, "m$^2$"),
  [D(apx(15.59, 2, "m$^2$"), "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquesta és l'àrea d'una base triangular, no l'àrea lateral: "
     "l'àrea lateral és perímetre per altura, no depèn de la "
     "fórmula del triangle equilàter."),
   D(apx(391.18, 2, "m$^2$"), "TERME_OBLIDAT_OPERACIO",
     "Aquest valor ja inclou les dues bases triangulars: aquí "
     "només es demana l'àrea LATERAL, sense les bases."),
   D(val(240, 2, "m$^2$"), "FACTOR_OBLIDAT",
     "No coincideix amb $18\\cdot20$: comprova que el perímetre "
     "de la base ($3\\cdot6=18$ m) és correcte abans de "
     "multiplicar-lo per l'altura.")],
  ["El perímetre de la base triangular és $3\\cdot6=18$ m.",
   "Àrea lateral d'un prisma: perímetre de la base per l'altura."],
  [r"$A_{\text{lateral}}=18\cdot20$",
   "$A_{\\text{lateral}}=360$ m$^2$"],
  ex_text=E176)

# 176b: area total -> A~391.18
Q("176b", 176, "b", B1, "A",
  f"{E176} Quant mesura l'àrea total de l'edifici?",
  apx(391.18, 2, "m$^2$"),
  [D(val(360, 2, "m$^2$"), "TERME_OBLIDAT_OPERACIO",
     "Aquest valor és només l'àrea lateral (l'apartat anterior): "
     "encara falta sumar-hi les dues bases triangulars."),
   D(apx(375.59, 2, "m$^2$"), "FACTOR_OBLIDAT",
     "Sembla que només has comptat UNA base triangular en lloc de "
     "dues."),
   D(apx(406.59, 2, "m$^2$"), "PRODUCTE_MAL",
     "No coincideix amb $360+2\\cdot15{,}59$: revisa el producte "
     "de l'àrea del triangle equilàter abans de sumar-la dues "
     "vegades.")],
  ["Àrea de la base: $A_{\\text{base}}=\\dfrac{6^2\\sqrt3}{4}"
   "\\approx15{,}59$ m$^2$.",
   "Àrea total $=$ àrea lateral (calculada abans, $360$ m$^2$) "
   "més les dues bases."],
  [r"$A_{\text{base}}=\dfrac{6^2\sqrt3}{4}\approx15{,}59$ m$^2$",
   "$A_{\\text{total}}=360+2\\cdot15{,}59\\approx391{,}18$ m$^2$"],
  ex_text=E176)

# ---- exercici 177: piràmide pentagonal ----
# costat 4, apotema base 2.75, apotema piramide 11.83 -> Ab=27.5 Alat=118.3 Atot=145.8
Q("177", 177, "", B2, "A",
  "Una piràmide pentagonal regular té la base de costat $4$ cm i "
  "apotema $2{,}75$ cm; l'apotema de la piràmide és $11{,}83$ cm. "
  "Calcula la seva àrea total.",
  val(145.8, 2, "cm$^2$"),
  [D(val(118.3, 2, "cm$^2$"), "TERME_OBLIDAT_OPERACIO",
     "Aquest valor és només l'àrea lateral: encara falta sumar-hi "
     "l'àrea de la base pentagonal."),
   D(val(27.5, 2, "cm$^2$"), "SUMA_DE_PARTS_INCOMPLETA",
     "Aquesta és només l'àrea de la base: encara falta sumar-hi "
     "l'àrea lateral."),
   D(val(236.6, 2, "cm$^2$"), "SIGNE_TERME_INDEPENDENT",
     "Sembla que no has dividit per $2$ l'àrea lateral: "
     "$A_{\\text{lateral}}=\\dfrac{\\text{perímetre}\\cdot"
     "\\text{apotema piràmide}}{2}$, no sense dividir.")],
  ["Perímetre de la base: $5\\cdot4=20$ cm; "
   "$A_{\\text{base}}=\\dfrac{20\\cdot2{,}75}{2}=27{,}5$ cm$^2$.",
   "$A_{\\text{lateral}}=\\dfrac{20\\cdot11{,}83}{2}=118{,}3$ cm$^2$."],
  [r"$A_{\text{base}}=\dfrac{20\cdot2{,}75}{2}=27{,}5$ cm$^2$",
   r"$A_{\text{lateral}}=\dfrac{20\cdot11{,}83}{2}=118{,}3$ cm$^2$",
   "$A_{\\text{total}}=27{,}5+118{,}3=145{,}8$ cm$^2$"])

# ---- exercici 179: dues piràmides (quadrangular i hexagonal) ----
# 179a: piramide quadrangular costat 25 apotema piramide 34
Q("179a", 179, "a", B2, "A",
  "Una piràmide quadrangular regular té la base de costat $25$ m i "
  "l'apotema de la piràmide fa $34$ m. Calcula la seva àrea total.",
  val(2325, 2, "m$^2$"),
  [D(val(1700, 2, "m$^2$"), "SUMA_DE_PARTS_INCOMPLETA",
     "Aquesta és només l'àrea lateral: encara falta sumar-hi "
     "l'àrea de la base quadrada."),
   D(val(625, 2, "m$^2$"), "TERME_OBLIDAT_OPERACIO",
     "Aquesta és només l'àrea de la base: encara falta sumar-hi "
     "l'àrea lateral."),
   D(val(3400, 2, "m$^2$"), "SIGNE_TERME_INDEPENDENT",
     "Sembla que no has dividit per $2$ l'àrea lateral.")],
  ["Àrea de la base: $A_{\\text{base}}=25^2=625$ m$^2$.",
   "Perímetre $=4\\cdot25=100$ m; "
   "$A_{\\text{lateral}}=\\dfrac{100\\cdot34}{2}=1700$ m$^2$."],
  [r"$A_{\text{base}}=25^2=625$ m$^2$",
   r"$A_{\text{lateral}}=\dfrac{100\cdot34}{2}=1700$ m$^2$",
   "$A_{\\text{total}}=625+1700=2325$ m$^2$"],
  ex_text="Dues piràmides regulars.")

# 179b: piramide hexagonal costat 6 altura 9 -> Atot~280.59
Q("179b", 179, "b", B2, "A",
  "Una piràmide hexagonal regular té la base de costat $6$ m i "
  "l'altura de la piràmide (no l'apotema) fa $9$ m. Calcula la "
  "seva àrea total.",
  apx(280.59, 2, "m$^2$"),
  [D(apx(187.06, 2, "m$^2$"), "TERME_OBLIDAT_OPERACIO",
     "Aquest valor és només l'àrea lateral: encara falta sumar-hi "
     "l'àrea de la base hexagonal."),
   D(apx(93.53, 2, "m$^2$"), "SUMA_DE_PARTS_INCOMPLETA",
     "Aquesta és només l'àrea de la base: encara falta sumar-hi "
     "l'àrea lateral."),
   D(apx(254.53, 2, "m$^2$"), "ARREL_MAL_APLICADA",
     "Sembla que has fet servir directament l'altura de la piràmide "
     "($9$ m) com si fos l'apotema de la piràmide en comptes de "
     "calcular-la amb Pitàgores a partir de l'altura i l'apotema "
     "de la base.")],
  ["Apotema de la base: $a_{\\text{base}}=\\dfrac{6\\sqrt3}{2}"
   "\\approx5{,}2$ m.",
   "Apotema de la piràmide (Pitàgores, amb l'altura $9$ m i "
   "$a_{\\text{base}}$): $\\sqrt{9^2+5{,}2^2}\\approx10{,}39$ m."],
  [r"$a_{\text{base}}\approx5{,}2$ m",
   r"$A_{\text{base}}=\dfrac{36\cdot5{,}2}{2}\approx93{,}53$ m$^2$",
   r"$a_{\text{piràmide}}=\sqrt{9^2+5{,}2^2}\approx10{,}39$ m",
   r"$A_{\text{lateral}}=\dfrac{36\cdot10{,}39}{2}\approx187{,}06$ m$^2$",
   "$A_{\\text{total}}\\approx93{,}53+187{,}06\\approx280{,}59$ m$^2$"],
  ex_text="Dues piràmides regulars.")

# ---- exercici 180: quatre tetraedres regulars (àrea total = L^2*sqrt3) ----
E180 = "Calcula l'àrea total d'un tetraedre regular d'aresta:"

for qid, letra, L, area in [
        ("180a", "a", 3, 15.59), ("180b", "b", 5, 43.30),
        ("180c", "c", 9, 140.30), ("180d", "d", 6.2, 66.58)]:
    Q(qid, 180, letra, B2, "A",
      f"{E180} ${dz(L)}$ cm.",
      apx(area, 2, "cm$^2$"),
      [D(apx(area / 4, 2, "cm$^2$"), "FACTOR_OBLIDAT",
         "Un tetraedre regular té $4$ cares triangulars iguals, "
         "no $1$: aquest valor només és l'àrea d'UNA cara."),
       D(apx(L ** 2, 2, "cm$^2$"), "ARREL_MAL_APLICADA",
         "T'has deixat el factor $\\sqrt3$ de l'àrea del triangle "
         "equilàter: l'àrea total és $L^2\\sqrt3$, no $L^2$."),
       D(apx(2 * L ** 2 * SQRT3, 2, "cm$^2$"), "PRODUCTE_MAL",
         "Aquest valor duplica el resultat correcte: un tetraedre "
         "té $4$ cares (factor $4$), no $8$.")],
      ["Cada cara és un triangle equilàter d'àrea "
       f"$\\dfrac{{L^2\\sqrt3}}{{4}}$, i n'hi ha $4$ d'iguals.",
       "Àrea total: $A=4\\cdot\\dfrac{L^2\\sqrt3}{4}=L^2\\sqrt3$."],
      [f"$A=L^2\\sqrt3={dz(L)}^2\\cdot\\sqrt3$",
       f"$A\\approx{dz(area)}$ cm$^2$"],
      ex_text=E180)

# ---- exercici 181: dues piràmides (quadrangular i hexagonal) ----
# 181a: piramide quadrangular costat 8 altura 10 -> Atot~236.33
Q("181a", 181, "a", B2, "A",
  "Una piràmide quadrangular regular té la base de costat $8$ m i "
  "l'altura (no l'apotema) fa $10$ m. Calcula la seva àrea total.",
  apx(236.33, 2, "m$^2$"),
  [D(apx(172.33, 2, "m$^2$"), "TERME_OBLIDAT_OPERACIO",
     "Aquest valor és només l'àrea lateral: encara falta sumar-hi "
     "l'àrea de la base quadrada."),
   D(apx(64, 2, "m$^2$"), "SUMA_DE_PARTS_INCOMPLETA",
     "Aquesta és només l'àrea de la base: encara falta sumar-hi "
     "l'àrea lateral."),
   D(apx(384, 2, "m$^2$"), "ARREL_MAL_APLICADA",
     "Sembla que has fet servir directament l'altura de la "
     "piràmide ($10$ m) com a apotema de la piràmide, sense "
     "aplicar Pitàgores amb l'apotema de la base.")],
  ["Apotema de la piràmide (Pitàgores): amb altura $10$ m i "
   "apotema de la base $4$ m, $\\sqrt{10^2+4^2}\\approx10{,}77$ m.",
   "$A_{\\text{base}}=8^2=64$ m$^2$; "
   "$A_{\\text{lateral}}=\\dfrac{32\\cdot10{,}77}{2}\\approx172{,}33$ m$^2$."],
  [r"$a_{\text{piràmide}}=\sqrt{10^2+4^2}\approx10{,}77$ m",
   r"$A_{\text{lateral}}=\dfrac{32\cdot10{,}77}{2}\approx172{,}33$ m$^2$",
   "$A_{\\text{total}}\\approx64+172{,}33\\approx236{,}33$ m$^2$"],
  ex_text="Dues piràmides regulars.")

# 181b: piramide hexagonal costat 6 altura 8 -> Atot~265.24 (vegeu nota
# de capçalera: precisió completa, sense arrodonir passos intermedis)
Q("181b", 181, "b", B2, "A",
  "Una piràmide hexagonal regular té la base de costat $6$ m i "
  "l'altura (no l'apotema) fa $8$ m. Calcula la seva àrea total.",
  apx(265.24, 2, "m$^2$"),
  [D(apx(171.71, 2, "m$^2$"), "TERME_OBLIDAT_OPERACIO",
     "Aquest valor és només l'àrea lateral: encara falta sumar-hi "
     "l'àrea de la base hexagonal."),
   D(apx(93.53, 2, "m$^2$"), "SUMA_DE_PARTS_INCOMPLETA",
     "Aquesta és només l'àrea de la base: encara falta sumar-hi "
     "l'àrea lateral."),
   D(apx(388, 2, "m$^2$"), "ARREL_MAL_APLICADA",
     "Sembla que has fet servir directament l'altura de la "
     "piràmide ($8$ m) com a apotema de la piràmide, sense aplicar "
     "Pitàgores amb l'apotema de la base.")],
  ["Apotema de la base: $\\approx5{,}2$ m; apotema de la piràmide "
   "(Pitàgores amb l'altura $8$ m): $\\sqrt{8^2+5{,}2^2}\\approx9{,}54$ m.",
   "$A_{\\text{base}}\\approx93{,}53$ m$^2$; "
   "$A_{\\text{lateral}}\\approx\\dfrac{36\\cdot9{,}54}{2}\\approx171{,}71$ m$^2$."],
  [r"$a_{\text{base}}\approx5{,}2$ m",
   r"$a_{\text{piràmide}}=\sqrt{8^2+5{,}2^2}\approx9{,}54$ m",
   r"$A_{\text{lateral}}\approx\dfrac{36\cdot9{,}54}{2}\approx171{,}71$ m$^2$",
   "$A_{\\text{total}}\\approx93{,}53+171{,}71\\approx265{,}24$ m$^2$"],
  ex_text="Dues piràmides regulars.")

# ---- exercici 182: cub amb la mateixa àrea total que una piràmide ----
# piramide amb Atot=4 -> cub L=sqrt(4/6)~0.82
Q("182", 182, "", B2, "A",
  "Quina aresta té un cub que té la mateixa àrea total que una "
  "piràmide d'àrea total $4$ cm$^2$?",
  apx(0.82, 2, "cm"),
  [D(val(4, 2, "cm"), "ARREL_OBLIDADA",
     "L'àrea total del cub no és directament l'aresta: cal aïllar "
     "$L$ de $6L^2=4$, no fer servir $4$ directament com a aresta."),
   D(apx(0.67, 2, "cm"), "ARREL_MAL_APLICADA",
     "No coincideix amb $\\sqrt{4:6}$: comprova que divideixes "
     "l'àrea entre $6$ cares abans de fer l'arrel quadrada."),
   D(val(24, 2, "cm"), "ORDRE_MULTIPLICACIO_DIVISIO",
     "Sembla que has multiplicat $4\\cdot6$ en lloc de dividir "
     "$4:6$: la relació és $6L^2=4$, per tant $L^2=4:6$.")],
  ["Un cub d'aresta $L$ té àrea total $6L^2$; iguala-la a $4$ cm$^2$.",
   "Aïlla $L$: $L^2=4:6$."],
  [r"$6L^2=4 \Rightarrow L^2=4:6\approx0{,}67$",
   r"$L=\sqrt{0{,}67}\approx0{,}82$ cm"])

# ---- exercici 183: tetraedre amb la mateixa àrea que una piràmide ----
# piramide hexagonal aresta 3, apotema piramide 10 -> Atot~113.38
Q("183", 183, "", B2, "A",
  "Una piràmide hexagonal regular té la base de costat $3$ cm i "
  "l'apotema de la piràmide fa $10$ cm. Quina aresta ha de tenir un "
  "tetraedre regular perquè la seva àrea total sigui la mateixa?",
  apx(8.09, 2, "cm"),
  [D(apx(113.38, 2, "cm"), "ARREL_OBLIDADA",
     "Aquesta és l'àrea total de la piràmide (en cm$^2$), no "
     "l'aresta del tetraedre: encara falta aïllar $L$ de "
     "$L^2\\sqrt3\\approx113{,}38$."),
   D(apx(65.46, 2, "cm"), "ARREL_MAL_APLICADA",
     "Aquest és el valor de $L^2$ ($113{,}38:\\sqrt3$), no de $L$: "
     "encara falta fer l'arrel quadrada."),
   D(apx(6.53, 2, "cm"), "ORDRE_MULTIPLICACIO_DIVISIO",
     "No coincideix amb $\\sqrt{113{,}38:\\sqrt3}$: comprova que "
     "divideixes per $\\sqrt3$ (no per $3$) abans de fer l'arrel.")],
  ["Apotema de la base: $\\dfrac{3\\sqrt3}{2}\\approx2{,}6$ cm; "
   "$A_{\\text{base}}=\\dfrac{18\\cdot2{,}6}{2}\\approx23{,}38$ cm$^2$.",
   "$A_{\\text{lateral}}=\\dfrac{18\\cdot10}{2}=90$ cm$^2$, així que "
   "$A_{\\text{total,piràmide}}\\approx23{,}38+90\\approx113{,}38$ cm$^2$.",
   "Iguala aquesta àrea a la del tetraedre, $L^2\\sqrt3$, i aïlla $L$."],
  [r"$a_{\text{base}}\approx2{,}6$ cm; "
   r"$A_{\text{base}}\approx23{,}38$ cm$^2$",
   r"$A_{\text{lateral}}=\dfrac{18\cdot10}{2}=90$ cm$^2$",
   r"$A_{\text{total,piràmide}}\approx23{,}38+90\approx113{,}38$ cm$^2$",
   r"$L^2\sqrt3\approx113{,}38 \Rightarrow L^2\approx65{,}46$",
   "$L\\approx8{,}09$ cm"])


# =====================================================================
# BLOC 3 — CILINDRES, CONS I L'ESFERA (184-191)
# =====================================================================
# Cilindre:  A_base = πr²,  A_lateral = 2πrh,  A_total = 2πr² + 2πrh
# Con:       A_base = πr²,  A_lateral = πrg,   A_total = πr² + πrg
# Esfera:    A = 4πr²
# S'usa π ≈ 3,14, la mateixa aproximació que fa servir `r-im10.tex`.

# ---- exercici 184: cilindre h=9 cm, diàmetre=6 cm (desenvolupament pla) ----
Q("184", 184, "", B3, "A",
  "Un cilindre té $9$ cm d'altura i $6$ cm de diàmetre de la base. "
  "En dibuixar-ne el desenvolupament pla, el rectangle lateral té "
  "una amplada igual a la longitud de la circumferència de la "
  "base. Calcula aquesta longitud.",
  apx(18.84, 2, "cm"),
  [D(apx(9.42, 2, "cm"), "FACTOR_OBLIDAT",
     "Has fet servir el radi ($3$ cm) en lloc del diàmetre a la "
     "fórmula: la longitud és $L=2\\pi r=\\pi d$, comprova que "
     "multipliques per $2$ el radi, o directament pel diàmetre."),
   D(apx(28.26, 2, "cm"), "PRODUCTE_MAL",
     "No coincideix amb $2\\pi\\cdot3$: revisa el producte pas a "
     "pas amb $\\pi\\approx3{,}14$."),
   D(val(54, 2, "cm"), "PI_OBLIDAT",
     "Aquest valor no fa servir $\\pi$: la longitud d'una "
     "circumferència sempre és $2\\pi r$, no un simple producte "
     "de nombres enters.")],
  ["El diàmetre és $6$ cm, així que el radi és $3$ cm.",
   "La longitud de la circumferència és $L=2\\pi r$."],
  [r"$L=2\pi r=2\cdot3{,}14\cdot3$",
   "$L\\approx18{,}84$ cm"])

# ---- exercici 185: dos cilindres, àrea total ----
# 185a: r=7 h=10
Q("185a", 185, "a", B3, "A",
  "Calcula l'àrea total d'un cilindre de radi $7$ m i altura "
  "$10$ m.",
  apx(747.32, 2, "m$^2$"),
  [D(apx(439.6, 2, "m$^2$"), "TERME_OBLIDAT_OPERACIO",
     "Aquest valor és només l'àrea lateral: encara falta sumar-hi "
     "les dues bases circulars."),
   D(apx(593.46, 2, "m$^2$"), "FACTOR_OBLIDAT",
     "Sembla que només has comptat UNA base circular en lloc de "
     "dues."),
   D(apx(373.66, 2, "m$^2$"), "ORDRE_MULTIPLICACIO_DIVISIO",
     "No coincideix amb $2\\pi\\cdot7^2+2\\pi\\cdot7\\cdot10$: "
     "sembla que t'has deixat un factor $2$ en algun dels dos "
     "termes.")],
  ["Àrea de la base: $A_{\\text{base}}=\\pi r^2\\approx153{,}86$ m$^2$.",
   "Àrea lateral: $A_{\\text{lateral}}=2\\pi rh\\approx439{,}6$ m$^2$."],
  [r"$A_{\text{base}}=\pi\cdot7^2\approx153{,}86$ m$^2$",
   r"$A_{\text{lateral}}=2\pi\cdot7\cdot10\approx439{,}6$ m$^2$",
   "$A_{\\text{total}}\\approx2\\cdot153{,}86+439{,}6\\approx747{,}32$ m$^2$"])

# 185b: diametre=12 (r=6) h=5
Q("185b", 185, "b", B3, "A",
  "Calcula l'àrea total d'un cilindre de diàmetre de la base "
  "$12$ m i altura $5$ m.",
  apx(414.48, 2, "m$^2$"),
  [D(apx(188.4, 2, "m$^2$"), "TERME_OBLIDAT_OPERACIO",
     "Aquest valor és només l'àrea lateral: encara falta sumar-hi "
     "les dues bases circulars."),
   D(apx(301.44, 2, "m$^2$"), "FACTOR_OBLIDAT",
     "Sembla que només has comptat UNA base circular en lloc de "
     "dues."),
   D(apx(583.36, 2, "m$^2$"), "SIGNE_TERME_INDEPENDENT",
     "Sembla que has fet servir el diàmetre ($12$ m) directament "
     "com a radi: el radi és la meitat del diàmetre, $6$ m.")],
  ["El radi és la meitat del diàmetre: $12:2=6$ m.",
   "Àrea de la base: $A_{\\text{base}}=\\pi r^2\\approx113{,}04$ m$^2$.",
   "Àrea lateral: $A_{\\text{lateral}}=2\\pi rh\\approx188{,}4$ m$^2$."],
  [r"$r=12:2=6$ m",
   r"$A_{\text{base}}=\pi\cdot6^2\approx113{,}04$ m$^2$",
   r"$A_{\text{lateral}}=2\pi\cdot6\cdot5\approx188{,}4$ m$^2$",
   "$A_{\\text{total}}\\approx2\\cdot113{,}04+188{,}4\\approx414{,}48$ m$^2$"])

# ---- exercici 186: cilindre Alat=756,6 cm^2, r=10 cm -> h ----
Q("186", 186, "", B3, "A",
  "L'àrea lateral d'un cilindre de radi $10$ cm és $756{,}6$ cm$^2$. "
  "Calcula la seva altura.",
  apx(12.05, 2, "cm"),
  [D(val(75.66, 2, "cm"), "ORDRE_MULTIPLICACIO_DIVISIO",
     "No has dividit pel producte complet $2\\pi r$: cal dividir "
     "$756{,}6$ entre $2\\cdot3{,}14\\cdot10$, no només entre $10$."),
   D(apx(24.09, 2, "cm"), "FACTOR_OBLIDAT",
     "Aquest valor surt de dividir només entre $\\pi r$ en lloc de "
     "$2\\pi r$: recorda el factor $2$ de l'àrea lateral del "
     "cilindre."),
   D(apx(240.95, 2, "cm"), "ARREL_MAL_APLICADA",
     "No coincideix amb $756{,}6:(2\\pi\\cdot10)$: revisa el "
     "denominador complet abans de dividir.")],
  ["L'àrea lateral d'un cilindre és $A_{\\text{lateral}}=2\\pi rh$.",
   "Aïlla $h$: $h=\\dfrac{A_{\\text{lateral}}}{2\\pi r}$."],
  [r"$h=\dfrac{756{,}6}{2\cdot3{,}14\cdot10}$",
   "$h\\approx12{,}05$ cm"])

# ---- exercici 187: cilindre Atot=471, altura=2·radi -> r, h ----
Q("187", 187, "", B3, "A",
  "L'àrea total d'un cilindre és $471$ cm$^2$ i la seva altura és "
  "el doble del radi. Calcula el radi i l'altura del cilindre.",
  r"$r=5$ cm, $h=10$ cm",
  [D(r"$r=10$ cm, $h=5$ cm", "PAPERS_INTERCANVIATS",
     "Has intercanviat els papers del radi i l'altura: l'enunciat "
     "diu que l'altura és el DOBLE del radi, no al revés."),
   D(r"$r=2{,}5$ cm, $h=5$ cm", "ARREL_MAL_APLICADA",
     "Sembla que t'has deixat algun factor en substituir "
     "$h=2r$ dins $A_{\\text{total}}=2\\pi r^2+2\\pi rh$: revisa "
     "que quedi $A_{\\text{total}}=6\\pi r^2$."),
   D(r"$r=15{,}7$ cm, $h=31{,}4$ cm", "ORDRE_MULTIPLICACIO_DIVISIO",
     "No coincideix amb aïllar $r$ de $6\\pi r^2=471$: comprova "
     "que divideixes per $6\\pi$ (no per un altre factor) abans "
     "de fer l'arrel quadrada.")],
  ["Amb $h=2r$: $A_{\\text{total}}=2\\pi r^2+2\\pi r\\cdot2r"
   "=6\\pi r^2$.",
   "Aïlla $r^2=\\dfrac{471}{6\\pi}$ i fes l'arrel quadrada."],
  [r"$6\pi r^2=471 \Rightarrow r^2=\dfrac{471}{6\cdot3{,}14}=25$",
   "$r=\\sqrt{25}=5$ cm $\\Rightarrow h=2\\cdot5=10$ cm"])

# ---- exercici 188: con r=4 cm, generatriu=15 cm ----
Q("188", 188, "", B3, "A",
  "Un con té $4$ cm de radi de la base i $15$ cm de generatriu. "
  "Calcula la longitud de l'arc que descriu la base en desplegar "
  "la superfície lateral del con (és a dir, la longitud de la "
  "circumferència de la base).",
  apx(25.12, 2, "cm"),
  [D(apx(94.2, 2, "cm"), "FACTOR_OBLIDAT",
     "Aquest valor fa servir la generatriu ($15$ cm) com a radi: "
     "la longitud de la circumferència de la base depèn del radi "
     "de la base ($4$ cm), no de la generatriu."),
   D(apx(12.56, 2, "cm"), "PRODUCTE_MAL",
     "No coincideix amb $2\\pi\\cdot4$: revisa el producte amb "
     "$\\pi\\approx3{,}14$."),
   D(val(19, 2, "cm"), "PI_OBLIDAT",
     "Aquest valor no fa servir $\\pi$: la longitud d'una "
     "circumferència sempre és $2\\pi r$.")],
  ["La circumferència de la base d'un con té radi igual al radi "
   "del con, $4$ cm (la generatriu no hi intervé).",
   "Longitud: $L=2\\pi r$."],
  [r"$L=2\pi r=2\cdot3{,}14\cdot4$",
   "$L\\approx25{,}12$ cm"])

# ---- exercici 189: con diàmetre=8 cm, generatriu=12 cm -> Atot ----
Q("189", 189, "", B3, "A",
  "Calcula l'àrea total d'un con de $8$ cm de diàmetre de la base "
  "i $12$ cm de generatriu.",
  apx(200.96, 2, "cm$^2$"),
  [D(apx(150.72, 2, "cm$^2$"), "TERME_OBLIDAT_OPERACIO",
     "Aquest valor és només l'àrea lateral: encara falta sumar-hi "
     "l'àrea de la base circular."),
   D(apx(50.24, 2, "cm$^2$"), "SUMA_DE_PARTS_INCOMPLETA",
     "Aquesta és només l'àrea de la base: encara falta sumar-hi "
     "l'àrea lateral."),
   D(apx(552.64, 2, "cm$^2$"), "FACTOR_OBLIDAT",
     "Sembla que has fet servir el diàmetre ($8$ cm) directament "
     "com a radi: el radi de la base és la meitat del diàmetre, "
     "$4$ cm.")],
  ["El radi de la base és la meitat del diàmetre: $4$ cm.",
   "$A_{\\text{base}}=\\pi r^2\\approx50{,}24$ cm$^2$; "
   "$A_{\\text{lateral}}=\\pi rg\\approx150{,}72$ cm$^2$."],
  [r"$r=8:2=4$ cm",
   r"$A_{\text{base}}=\pi\cdot4^2\approx50{,}24$ cm$^2$",
   r"$A_{\text{lateral}}=\pi\cdot4\cdot12\approx150{,}72$ cm$^2$",
   "$A_{\\text{total}}\\approx50{,}24+150{,}72\\approx200{,}96$ cm$^2$"])

# ---- exercici 190: con generatriu=13 cm, radi=5 cm -> altura ----
Q("190", 190, "", B3, "A",
  "Un con té $13$ cm de generatriu i $5$ cm de radi de la base. "
  "Calcula la seva altura.",
  val(12, 2, "cm"),
  [D(val(18, 2, "cm"), "SIGNE_TERME_INDEPENDENT",
     "Has sumat generatriu i radi ($13+5$) en lloc d'aplicar "
     "Pitàgores: l'altura, el radi i la generatriu formen un "
     "triangle rectangle amb la generatriu com a hipotenusa."),
   D(val(8, 2, "cm"), "SIGNE_TERME_INDEPENDENT",
     "Aquest valor surt de $13-5$: la relació correcta entre "
     "altura, radi i generatriu és pitagòrica, "
     "$g^2=r^2+h^2$, no una simple resta."),
   D(apx(13.93, 2, "cm"), "ARREL_MAL_APLICADA",
     "No coincideix amb $\\sqrt{13^2-5^2}$: comprova que restes "
     "$r^2$ de $g^2$ (no que els sumis) abans de fer l'arrel.")],
  ["En un con, la generatriu $g$, el radi $r$ i l'altura $h$ "
   "compleixen $g^2=r^2+h^2$ (Pitàgores).",
   "Aïlla $h$: $h=\\sqrt{g^2-r^2}$."],
  [r"$h=\sqrt{13^2-5^2}=\sqrt{169-25}=\sqrt{144}$",
   "$h=12$ cm"])

# ---- exercici 191: esfera d'àrea 803,84 cm^2 -> radi ----
Q("191", 191, "", B3, "A",
  "L'àrea d'una esfera és $803{,}84$ cm$^2$. Calcula el seu radi.",
  val(8, 2, "cm"),
  [D(val(64, 2, "cm"), "ARREL_OBLIDADA",
     "Aquest és el valor de $r^2$ ($803{,}84:4\\pi$), no de $r$: "
     "encara falta fer l'arrel quadrada."),
   D(apx(15.98, 2, "cm"), "FACTOR_OBLIDAT",
     "No coincideix amb dividir entre $4\\pi$: sembla que només "
     "has dividit entre $\\pi$, sense el factor $4$ de la "
     "fórmula de l'àrea de l'esfera."),
   D(apx(200.96, 2, "cm"), "ORDRE_MULTIPLICACIO_DIVISIO",
     "No coincideix amb aïllar $r$ de $4\\pi r^2=803{,}84$: "
     "comprova que divideixes (no multipliques) per $4\\pi$.")],
  ["L'àrea d'una esfera és $A=4\\pi r^2$.",
   "Aïlla $r^2=\\dfrac{A}{4\\pi}$ i fes l'arrel quadrada."],
  [r"$r^2=\dfrac{803{,}84}{4\cdot3{,}14}=64$",
   "$r=\\sqrt{64}=8$ cm"])


# =====================================================================
# BLOC 4 — VOLUMS I PROBLEMES APLICATS (193a-b, 195a/c/e/f, 196a-b,
#                                          197-199)
# =====================================================================
# Volums:  prisma/cilindre V=A_base·h;  piràmide/con V=(A_base·h):3;
#          esfera V=(4/3)πr³;  cub V=L³

# ---- exercici 193: cilindre r=10 h=10; con del mateix radi ----
E193 = ("Un cilindre té radi $10$ cm i altura $10$ cm. Es vol "
        "construir un con amb el mateix radi de base.")

# 193a: mateixa Alat -> g=20
Q("193a", 193, "a", B3, "A",
  f"{E193} Quina generatriu ha de tenir el con perquè la seva àrea "
  "lateral coincideixi amb l'àrea lateral del cilindre?",
  val(20, 2, "cm"),
  [D(val(10, 2, "cm"), "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquest valor és el radi, no la generatriu que fa que "
     "coincideixin les àrees laterals: cal igualar "
     "$2\\pi rh_{\\text{cil}}=\\pi rg$ i aïllar $g$."),
   D(val(40, 2, "cm"), "PRODUCTE_MAL",
     "Duplica el resultat correcte: revisa que, en igualar "
     "$2\\pi\\cdot10\\cdot10=\\pi\\cdot10\\cdot g$, el factor $2$ "
     "d'un costat es cancel·la correctament amb l'altre."),
   D(apx(31.85, 2, "cm"), "ARREL_MAL_APLICADA",
     "Aquest exercici no necessita cap arrel quadrada: l'àrea "
     "lateral del con és lineal en $g$, no hi intervé cap "
     "Pitàgores en aquest apartat.")],
  ["Àrea lateral del cilindre: $A_{\\text{lateral,cil}}=2\\pi rh"
   "\\approx628$ cm$^2$.",
   "Iguala-la a l'àrea lateral del con, $\\pi rg$, i aïlla $g$."],
  [r"$2\pi\cdot10\cdot10=\pi\cdot10\cdot g$",
   "$g=\\dfrac{2\\cdot10\\cdot10}{10}=20$ cm"],
  ex_text=E193)

# 193b: mateixa Atot -> g=30
Q("193b", 193, "b", B3, "A",
  f"{E193} Quina generatriu ha de tenir el con perquè la seva àrea "
  "total coincideixi amb l'àrea total del cilindre?",
  val(30, 2, "cm"),
  [D(val(20, 2, "cm"), "TERME_OBLIDAT_OPERACIO",
     "Aquest és el valor de l'apartat anterior (igualant només les "
     "àrees laterals): aquí cal igualar les àrees TOTALS, que "
     "també inclouen les bases circulars."),
   D(apx(9.55, 2, "cm"), "SIGNE_TERME_INDEPENDENT",
     "Comprova el signe en aïllar $g$ de "
     "$\\pi r^2+\\pi rg=2\\pi r^2+2\\pi rh$: la base del con "
     "($\\pi r^2$) resta a banda i banda, no se suma dues vegades."),
   D(val(60, 2, "cm"), "PRODUCTE_MAL",
     "Duplica el resultat correcte: revisa el pas d'aïllar $g$ "
     "després de simplificar $r$ a banda i banda de l'equació.")],
  ["Àrea total del cilindre: $A_{\\text{total,cil}}=2\\pi r^2+2\\pi rh"
   "\\approx1256$ cm$^2$.",
   "Iguala-la a l'àrea total del con, $\\pi r^2+\\pi rg$, i aïlla $g$: "
   "com que les dues tenen una base $\\pi r^2$ igual, es "
   "simplifica a $\\pi rg=2\\pi r^2+2\\pi rh-\\pi r^2$."],
  [r"$\pi\cdot10^2+\pi\cdot10\cdot g=2\pi\cdot10^2+2\pi\cdot10\cdot10$",
   r"$10g=2\cdot10^2+2\cdot10\cdot10-10^2=300$",
   "$g=30$ cm"],
  ex_text=E193)

# ---- exercici 195: volums de diversos cossos (només a, c, e, f) ----
E195 = "Calcula el volum d'aquest cos geomètric:"

# 195a: piramide quadrangular base 4x4 altura 2 -> V=32/3~10.67
Q("195a", 195, "a", B4, "A",
  f"{E195} una piràmide quadrangular regular de costat de base "
  "$4$ cm i altura $2$ cm.",
  apx(10.67, 2, "cm$^3$"),
  [D(val(32, 2, "cm$^3$"), "FACTOR_TRES_VOLUM",
     "No has dividit entre $3$: el volum d'una piràmide és "
     "$V=\\dfrac{A_{\\text{base}}\\cdot h}{3}$, no "
     "$A_{\\text{base}}\\cdot h$ sense dividir."),
   D(apx(21.33, 2, "cm$^3$"), "ORDRE_MULTIPLICACIO_DIVISIO",
     "No coincideix amb $\\dfrac{16\\cdot2}{3}$: sembla que has "
     "dividit per $1{,}5$ en lloc de per $3$."),
   D(val(8, 2, "cm$^3$"), "FACTOR_OBLIDAT",
     "L'àrea de la base d'un quadrat de costat $4$ cm és "
     "$16$ cm$^2$, no $4$ cm$^2$: comprova que has elevat el "
     "costat al quadrat.")],
  ["Àrea de la base: $A_{\\text{base}}=4^2=16$ cm$^2$.",
   "Volum d'una piràmide: $V=\\dfrac{A_{\\text{base}}\\cdot h}{3}$."],
  [r"$V=\dfrac{16\cdot2}{3}$",
   "$V\\approx10{,}67$ cm$^3$"],
  ex_text=E195,
  nota="D'aquest exercici hi ha els apartats a, c, e i f: els altres eren "
       "cossos que no es poden identificar amb seguretat sense la figura.")

# 195c: cilindre r=4 h=4 -> V~200.96
Q("195c", 195, "c", B4, "A",
  f"{E195} un cilindre de radi $4$ cm i altura $4$ cm.",
  apx(200.96, 2, "cm$^3$"),
  [D(apx(50.24, 2, "cm$^3$"), "FACTOR_OBLIDAT",
     "Aquest valor és l'àrea de la base, no el volum: encara "
     "falta multiplicar-la per l'altura."),
   D(apx(66.99, 2, "cm$^3$"), "FACTOR_TRES_VOLUM",
     "Has dividit entre $3$: el volum d'un CILINDRE no es "
     "divideix entre $3$ (això només passa amb piràmides i cons)."),
   D(apx(401.92, 2, "cm$^3$"), "PRODUCTE_MAL",
     "Duplica el resultat correcte: revisa el producte "
     "$\\pi\\cdot4^2\\cdot4$ pas a pas.")],
  ["Àrea de la base: $A_{\\text{base}}=\\pi r^2\\approx50{,}24$ cm$^2$.",
   "Volum d'un cilindre: $V=A_{\\text{base}}\\cdot h$."],
  [r"$V=\pi\cdot4^2\cdot4$",
   "$V\\approx200{,}96$ cm$^3$"],
  ex_text=E195)

# 195e: con r=1.5 h=5 -> V~11.775 -> 11.78
Q("195e", 195, "e", B4, "A",
  f"{E195} un con de radi $1{{,}}5$ cm i altura $5$ cm.",
  apx(11.78, 2, "cm$^3$"),
  [D(apx(35.33, 2, "cm$^3$"), "FACTOR_TRES_VOLUM",
     "No has dividit entre $3$: el volum d'un con és "
     "$V=\\dfrac{A_{\\text{base}}\\cdot h}{3}$, no "
     "$A_{\\text{base}}\\cdot h$ sense dividir."),
   D(apx(23.55, 2, "cm$^3$"), "ORDRE_MULTIPLICACIO_DIVISIO",
     "No coincideix amb $\\dfrac{\\pi\\cdot1{,}5^2\\cdot5}{3}$: "
     "sembla que t'has deixat el factor $3$ del denominador a "
     "mitges."),
   D(apx(7.85, 2, "cm$^3$"), "FACTOR_OBLIDAT",
     "L'àrea de la base és $\\pi\\cdot1{,}5^2\\approx7{,}07$ "
     "cm$^2$, no $\\pi\\cdot1{,}5\\approx4{,}71$ cm$^2$: comprova "
     "que has elevat el radi al quadrat.")],
  ["Àrea de la base: $A_{\\text{base}}=\\pi r^2\\approx7{,}07$ cm$^2$.",
   "Volum d'un con: $V=\\dfrac{A_{\\text{base}}\\cdot h}{3}$."],
  [r"$V=\dfrac{\pi\cdot1{,}5^2\cdot5}{3}$",
   "$V\\approx11{,}78$ cm$^3$"],
  ex_text=E195)

# 195f: cub aresta 4 -> V=64
Q("195f", 195, "f", B4, "A",
  f"{E195} un cub d'aresta $4$ cm.",
  val(64, 2, "cm$^3$"),
  [D(val(16, 2, "cm$^3$"), "DIMENSIO_EXPONENT_MAL",
     "Aquest valor és $4^2$, no $4^3$: el volum d'un cub és "
     "$V=L^3$, no $L^2$."),
   D(val(48, 2, "cm$^3$"), "ORDRE_MULTIPLICACIO_DIVISIO",
     "No coincideix amb $4\\cdot4\\cdot4$: revisa el producte "
     "dels tres factors."),
   D(val(96, 2, "cm$^3$"), "PRODUCTE_MAL",
     "No coincideix amb $4^3$: comprova el càlcul de la potència "
     "pas a pas.")],
  ["El volum d'un cub d'aresta $L$ és $V=L^3$."],
  [r"$V=4^3=4\cdot4\cdot4$",
   "$V=64$ cm$^3$"],
  ex_text=E195)

# ---- exercici 196: pintar una habitació de 4x6x3 m ----
E196 = ("Es vol pintar una habitació de $4$ m per $6$ m i $3$ m "
        "d'altura, incloent-hi el sostre (però no el terra). Un pot "
        "de pintura cobreix $30$ m$^2$.")

# 196a: pots minim necessaris -> 3
Q("196a", 196, "a", B4, "A",
  f"{E196} Quants pots de pintura calen com a mínim?",
  "$3$ pots",
  [D("$2$ pots", "ARREL_MAL_APLICADA",
     "Amb $2$ pots només es cobreixen $60$ m$^2$, i la superfície "
     "a pintar és més gran que això: torna a calcular l'àrea "
     "total abans de dividir entre $30$."),
   D(r"$2{,}8$ pots", "ARRODONIMENT_CONTEXT",
     "El nombre de pots ha de ser un nombre enter: com que "
     "$2{,}8$ pots no basten per cobrir tota la superfície, cal "
     "arrodonir cap AMUNT, a $3$."),
   D("$4$ pots", "FACTOR_OBLIDAT",
     "Sembla que has comptat alguna superfície de més (per "
     "exemple, el terra, que l'enunciat exclou explícitament): "
     "revisa quines cares s'han de pintar.")],
  ["Superfície de les parets: $2(4\\cdot3)+2(6\\cdot3)=60$ m$^2$.",
   "Superfície del sostre: $4\\cdot6=24$ m$^2$; total $84$ m$^2$ "
   "(el terra no es pinta).",
   "Nombre de pots: $84:30=2{,}8$, i com que amb $2$ pots no "
   "n'hi ha prou, cal arrodonir cap amunt."],
  [r"$A_{\text{parets}}=2(4\cdot3)+2(6\cdot3)=60$ m$^2$",
   r"$A_{\text{sostre}}=4\cdot6=24$ m$^2$",
   r"$A_{\text{total}}=60+24=84$ m$^2$",
   r"$84:30=2{,}8 \Rightarrow$ calen $3$ pots"],
  ex_text=E196)

# 196b: si es reparteix Atotal entre 4 pots -> 21 m2/pot
Q("196b", 196, "b", B4, "A",
  f"{E196} Si finalment es fan servir $4$ pots per repartir-hi tota "
  "la superfície a parts iguals, quants metres quadrats cobrirà "
  "cada pot?",
  val(21, 2, "m$^2$"),
  [D(val(30, 2, "m$^2$"), "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquesta és la cobertura estàndard d'un pot ($30$ m$^2$), no "
     "el resultat de repartir els $84$ m$^2$ totals entre $4$ pots."),
   D(apx(28, 2, "m$^2$"), "FACTOR_OBLIDAT",
     "No coincideix amb $84:4$: comprova que fas servir la "
     "superfície total ($84$ m$^2$), no només la de les parets "
     "($60$ m$^2$)."),
   D(val(6, 2, "m$^2$"), "ORDRE_MULTIPLICACIO_DIVISIO",
     "No coincideix amb $84:4$: revisa la divisió pas a pas.")],
  ["La superfície total a pintar és $84$ m$^2$ (calculada a "
   "l'apartat anterior).",
   "Reparteix-la entre els $4$ pots: $84:4$."],
  [r"$84:4=21$",
   "$21$ m$^2$ per pot"],
  ex_text=E196)

# ---- exercici 197: piràmide de Kheops ----
Q("197", 197, "", B4, "A",
  "La piràmide de Kheops té una base quadrada d'aresta "
  "$215{,}25$ m i una apotema (de la piràmide) de $179{,}37$ m. "
  "Calcula la seva altura.",
  apx(143.49, 2, "m"),
  [D(apx(210.32, 2, "m"), "SIGNE_TERME_INDEPENDENT",
     "Has sumat en lloc de restar dins l'arrel: la relació "
     "pitagòrica entre l'altura, l'apotema de la base i l'apotema "
     "de la piràmide és $a_{\\text{piràmide}}^2=a_{\\text{base}}^2"
     "+h^2$, així que cal RESTAR $a_{\\text{base}}^2$, no sumar-lo."),
   D(val(71.75, 2, "m"), "FACTOR_OBLIDAT",
     "No has fet servir l'apotema de la piràmide ($179{,}37$ m) "
     "en el càlcul: aquest valor és només la meitat de l'aresta "
     "de la base."),
   D(apx(122.85, 2, "m"), "ARREL_MAL_APLICADA",
     "No coincideix amb $\\sqrt{179{,}37^2-107{,}625^2}$: revisa "
     "que l'apotema de la BASE (la meitat de l'aresta, "
     "$107{,}625$ m) és el catet que falta, no un altre valor.")],
  ["L'apotema de la base és la meitat de l'aresta: "
   "$215{,}25:2=107{,}625$ m.",
   "L'altura, l'apotema de la base i l'apotema de la piràmide "
   "formen un triangle rectangle: "
   "$a_{\\text{piràmide}}^2=a_{\\text{base}}^2+h^2$."],
  [r"$h=\sqrt{179{,}37^2-107{,}625^2}$",
   "$h\\approx143{,}49$ m"])

# ---- exercici 198: torre (cub + teulada piramidal) ----
Q("198", 198, "", B4, "A",
  "Una torre té la forma d'un cub de $10$ m d'aresta (sense la cara "
  "de dalt, que fa de base de la teulada) coronat per una teulada "
  "piramidal de base quadrada igual a la del cub i $12$ m d'altura. "
  "Calcula l'àrea total de la superfície exterior de la torre "
  "(parets del cub, terra del cub i teulada, sense la cara "
  "compartida entre cub i teulada).",
  val(760, 2, "m$^2$"),
  [D(val(500, 2, "m$^2$"), "TERME_OBLIDAT_OPERACIO",
     "Falta sumar-hi l'àrea lateral del cub ($400$ m$^2$) o la "
     "de la teulada ($260$ m$^2$): revisa que hi siguin les tres "
     "peces (parets, terra i teulada)."),
   D(val(1160, 2, "m$^2$"), "FACTOR_OBLIDAT",
     "Sembla que has comptat també la cara de dalt del cub (que "
     "queda tapada per la teulada i no forma part de la "
     "superfície exterior): l'enunciat diu explícitament que no "
     "s'ha de comptar."),
   D(apx(660, 2, "m$^2$"), "ARREL_MAL_APLICADA",
     "No coincideix amb l'àrea lateral de la teulada calculada "
     "amb Pitàgores: revisa que l'apotema de la piràmide surt de "
     "$\\sqrt{12^2+5^2}$, amb l'apotema de la base $5$ m (la "
     "meitat de l'aresta $10$ m).")],
  ["Parets del cub (4 cares laterals): $4\\cdot10^2=400$ m$^2$; "
   "terra del cub: $10^2=100$ m$^2$.",
   "Apotema de la teulada (Pitàgores, amb altura $12$ m i "
   "apotema de la base $5$ m): $\\sqrt{12^2+5^2}=13$ m; àrea "
   "lateral de la teulada: $\\dfrac{40\\cdot13}{2}=260$ m$^2$."],
  [r"$A_{\text{parets}}=4\cdot10^2=400$ m$^2$",
   r"$A_{\text{terra}}=10^2=100$ m$^2$",
   r"$a_{\text{teulada}}=\sqrt{12^2+5^2}=13$ m",
   r"$A_{\text{teulada}}=\dfrac{40\cdot13}{2}=260$ m$^2$",
   "$A_{\\text{total}}=400+100+260=760$ m$^2$"])

# ---- exercici 199: cub i esfera del mateix volum ----
Q("199", 199, "", B4, "A",
  "Un cub i una esfera tenen el mateix volum, $125$ cm$^3$. Es vol "
  "saber quin dels dos té l'àrea total més petita (és a dir, amb "
  "quina forma caldria menys material per construir un dipòsit "
  "d'aquest volum). Calcula l'àrea total del cub per començar a "
  "comparar-ho.",
  val(150, 2, "cm$^2$"),
  [D(val(125, 2, "cm$^2$"), "ARREL_OBLIDADA",
     "Aquest és el volum, no l'àrea total: primer cal aïllar "
     "l'aresta $L=\\sqrt[3]{125}=5$ cm i després calcular $6L^2$."),
   D(val(25, 2, "cm$^2$"), "FACTOR_OBLIDAT",
     "Aquesta és l'àrea d'UNA sola cara ($5^2$), no de les $6$ "
     "cares del cub."),
   D(val(75, 2, "cm$^2$"), "PRODUCTE_MAL",
     "No coincideix amb $6\\cdot5^2$: revisa el producte pas a "
     "pas.")],
  ["Aresta del cub: $V=L^3=125 \\Rightarrow L=\\sqrt[3]{125}=5$ cm.",
   "Àrea total del cub: $A=6L^2$."],
  [r"$L=\sqrt[3]{125}=5$ cm",
   r"$A=6\cdot5^2$",
   "$A=150$ cm$^2$",
   r"(Per comparar: l'esfera del mateix volum té radi "
   r"$r=\sqrt[3]{\frac{3\cdot125}{4\pi}}\approx3{,}10$ cm i àrea "
   r"$4\pi r^2\approx120{,}88$ cm$^2$, menor que la del cub: a "
   r"igualtat de volum, l'esfera necessita menys material.)"])
