# -*- coding: utf-8 -*-
r"""c_geometria.py — Full 7: Teorema de Pitàgores. Àrees.

Genera els ítems dels exercicis 119-151, que corresponen a `im8.tex` del
repositori LaTeX font. Organitzats en 4 blocs:
  triangles     (119-129)   angles, desigualtat triangular, triangles
                             rectangles i teorema de Pitàgores bàsic
  arees_pit     (130-139)   àrees de triangles i rectangles combinades
                             amb el teorema de Pitàgores
  arees_poli    (140-145)   àrees de trapezis, polígons regulars i
                             figures amb cercles
  problemes     (146-151)   problemes d'aplicació (ombres, escales,
                             camps, senyals, edificis, rosquilles)

Recompte: 33 exercicis / 58 ítems bruts (comptant \\item dins
d'apartats/apartatscols; un exercici sense apartats compta 1). Les figures
d'`im8.tex` porten les mesures transcrites al text de l'enunciat, amb
comentaris `% NOTA DE TRANSCRIPCIÓ` allà on la lectura de la imatge
original era incerta; el criteri d'exclusió aquí és només si `r-im8.tex`
arriba o no a un valor numèric complet, no l'existència d'una nota.

Exclusions (4 ítems, per manca de valor numèric a la font):
  - Exercici 139 sencer: la nota de `r-im8.tex` diu literalment "no es
    dona aquí un desenvolupament numèric complet" — la disposició de la
    figura (una zona ombrejada de rectangles) no s'ha pogut determinar,
    i no hi ha cap resposta correcta calculable per oferir.
  - Exercici 145, apartats a, b i d: mateix motiu (sense valor numèric a
    la font). Només l'apartat 145c (quadrat amb forat circular) arriba a
    un resultat complet i es conserva.
Els altres ítems amb nota de transcripció (144a, 144b, 151) SÍ arriben a
un valor numèric complet a partir d'una interpretació explícita i
raonable de la figura (semicercles concèntrics, sector circular, corona
circular), així que es conserven amb `nota=` explicant la interpretació
adoptada.

Total: 58 - 4 = 54 ítems pel recompte automàtic, MÉS 1 ítem addicional.
L'exercici 148 és una única \\problema{} en prosa que en realitat conté DUES
preguntes independents ("Quina és l'àrea del camp? Quant mesura el
costat?") sense fer servir \\begin{apartats}, així que el parser automàtic
el compta com 1 sol ítem quan en té 2 (patró d'"ítems amagats" descrit a
AUTHORING-GUIDE.md). Es desdobla en 148a (costat) i 148b (àrea), ja que el
motor de tria múltiple necessita una resposta correcta per ítem i totes
dues preguntes tenen respostes numèriques diferenciades i igualment
rellevants. Total final: 55 ítems, en 32 dels 33 exercicis originals (el
139 hi perd tots els seus ítems i el 145 en perd 3 dels 4).

Cap resposta s'escriu a mà: cada resultat s'ha calculat de manera
independent (aritmètica exacta amb `math.sqrt`/`Fraction` i, quan calia
simplificar una arrel, amb el helper `simplifica_arrel()` d'aquest
fitxer) abans d'escriure cap `Q()`, i s'ha contrastat contra `r-im8.tex`
(el solucionari LaTeX subministrat) sense trobar-hi cap discrepància en
cap dels 55 ítems conservats.

Nota d'estil (arrels quadrades): en aquest full la majoria de respostes
correctes són arrels quadrades irracionals (diagonals, altures,
hipotenuses...). SymPy no cal aquí: com que totes les operacions són
purament numèriques (mai simbòliques en `x`), n'hi ha prou amb els helpers
`simplifica_arrel()` / `arrel_tex_raw()` / `arrel_tex()` definits més
avall, en l'estil de `poli_tex_raw()`/`poli_tex()` de c_polinomis.py:
`arrel_tex()` retorna la cadena ja embolcallada amb `$...$` (segura com a
opció directa d'una `Q()`/`D()`, ja que `mathify()` a build.py no reconeix
`\\sqrt` com a "matemàtica pura" i no la delimitaria), mentre que
`arrel_tex_raw()` retorna la mateixa cadena sense `$...$`, per incrustar-la
dins d'una resolució o pista que ja porta els seus propis delimitadors.
"""
import math
from lib import Q, D, DT, tex, dificultats
from figures import quadrat_diagonal, rectangle_diagonal

# --------------------------------------------------------------------
# Dificultat de cada exercici (1 directa, 2 encadenada, 3 completa).
# Full 7 · Pitàgores i àrees
# Vegeu l'escala completa a lib.py. L'itinerari fa servir aquest camp
# per graduar el recorregut, de manera que canviar-hi un número canvia
# l'ordre en què l'alumne es troba els exercicis.
# --------------------------------------------------------------------
dificultats({
    119: 1,  # angles d'un triangle; 120, desigualtat triangular; 123, Pitàgores directe
    120: 1,
    121: 2,  # comprovar si es compleix el teorema, i concloure'n alguna cosa
    122: 2,
    123: 1,
    124: 2,  # Pitàgores dins d'una figura: cal veure quin triangle rectangle hi ha
    125: 2,
    126: 2,
    127: 2,
    128: 3,  # figura composta: cal descompondre-la
    129: 3,
    130: 3,  # a l'inrevés partint de l'àrea; 133, amb radical pel mig
    131: 2,  # àrea i un costat donats: Pitàgores per trobar el que falta
    132: 2,
    133: 3,
    134: 2,
    135: 2,
    136: 2,
    137: 2,
    138: 2,
    140: 2,  # àrees de polígons amb la fórmula corresponent
    141: 2,
    142: 2,
    143: 2,
    144: 3,  # àrees per diferència de figures
    145: 3,
    146: 3,  # problemes amb context
    147: 3,
    148: 3,
    149: 3,
    150: 3,
    151: 3,
})


B1 = "triangles"
B2 = "arees_pit"
B3 = "arees_poli"
B4 = "problemes"


# ---------------------------------------------------------------- renderitzat

def simplifica_arrel(n):
    """Enter positiu n -> (k, m) tals que sqrt(n) = k*sqrt(m), amb m sense
    factors quadrats (m "lliure de quadrats"). simplifica_arrel(32) -> (4, 2)."""
    n = int(n)
    k, m, d = 1, n, 2
    while d * d <= m:
        while m % (d * d) == 0:
            m //= d * d
            k *= d
        d += 1
    return k, m


def arrel_tex_raw(n, aprox=False, dec=2):
    """LaTeX de sqrt(n) simplificada, SENSE embolcallar amb $...$ (per
    incrustar dins d'una cadena LaTeX més gran ja delimitada). Si n és un
    quadrat perfecte, retorna l'enter tal qual (sense arrel). Amb
    aprox=True, hi afegeix \\approx i el valor decimal (coma catalana)."""
    k, m = simplifica_arrel(n)
    if m == 1:
        base = str(k)
    elif k == 1:
        base = r"\sqrt{%d}" % m
    else:
        base = r"%d\sqrt{%d}" % (k, m)
    if aprox and m != 1:
        val = math.sqrt(n)
        s = ("%.*f" % (dec, val)).replace(".", "{,}")
        base += r"\approx%s" % s
    return base


def arrel_tex(n, aprox=False, dec=2):
    """LaTeX de sqrt(n), embolcallat amb $...$: per fer-lo servir
    directament com a opció (correcta/distractor), ja que mathify() (a
    build.py) no reconeix \\sqrt com a "matemàtica pura" i no la
    delimitaria soles (vegeu la nota d'estil del docstring del mòdul)."""
    return "$%s$" % arrel_tex_raw(n, aprox, dec)


def pitagores_tex_raw(cateta, catetb, aprox=True, dec=2):
    """LaTeX del desenvolupament complet 'sqrt(a^2+b^2)=sqrt(suma)=resultat'
    per a la hipotenusa d'un triangle rectangle de catets enters cateta i
    catetb. SENSE $...$ (per incrustar en una resolució ja delimitada).
    Quan sqrt(suma) no es pot simplificar ni és un quadrat perfecte (per
    exemple suma=73), s'omet el pas intermedi redundant 'sqrt{73}=sqrt{73}'
    i es mostra directament 'sqrt{a^2+b^2}=sqrt{73}\\approx...'."""
    suma = cateta ** 2 + catetb ** 2
    k, m = simplifica_arrel(suma)
    if k == 1 and m != 1:
        return r"\sqrt{%d^2+%d^2}=%s" % (
            cateta, catetb, arrel_tex_raw(suma, aprox, dec))
    return r"\sqrt{%d^2+%d^2}=\sqrt{%d}=%s" % (
        cateta, catetb, suma, arrel_tex_raw(suma, aprox, dec))


def catet_tex_raw(hipotenusa, catet_conegut, aprox=True, dec=2):
    """LaTeX del desenvolupament 'sqrt(hip^2-catet^2)=sqrt(dif)=resultat'
    per a l'altre catet, coneixent la hipotenusa i un catet, tots dos
    enters. SENSE $...$. Mateix criteri anti-redundància que
    pitagores_tex_raw() (vegeu la seva docstring)."""
    dif = hipotenusa ** 2 - catet_conegut ** 2
    k, m = simplifica_arrel(dif)
    if k == 1 and m != 1:
        return r"\sqrt{%d^2-%d^2}=%s" % (
            hipotenusa, catet_conegut, arrel_tex_raw(dif, aprox, dec))
    return r"\sqrt{%d^2-%d^2}=\sqrt{%d}=%s" % (
        hipotenusa, catet_conegut, dif, arrel_tex_raw(dif, aprox, dec))


# =====================================================================
# BLOC 1 — TRIANGLES I TEOREMA DE PITÀGORES (exercicis 119-129)
# =====================================================================

# ---- exercici 119: angles d'un triangle isòsceles ----
Q("119", 119, "", B1, "A",
  "Un triangle isòsceles té l'angle desigual de $50^\\circ$. Quant "
  "mesuren els angles iguals?",
  "$65^\\circ$ cadascun",
  [D("$130^\\circ$ cadascun", "REPARTIMENT_ANGLES_MAL",
     "Aquest és el que sumen entre tots dos ($180^\\circ-50^\\circ$), no "
     "el que val cadascun: encara cal repartir-ho entre els dos angles "
     "iguals."),
   D("$25^\\circ$ cadascun", "SUMA_ANGLES_MAL",
     "Sembla que has repartit els $50^\\circ$ de l'angle desigual entre "
     "dos, en lloc de repartir el que queda dels $180^\\circ$ totals "
     "un cop tret l'angle desigual."),
   D("$115^\\circ$ cadascun", "SUMA_ANGLES_MAL",
     "Aquest valor no surt de $180^\\circ-50^\\circ$ repartit entre dos: "
     "revisa la resta abans de dividir-la per $2$.")],
  ["La suma dels tres angles d'un triangle sempre val $180^\\circ$.",
   "Resta l'angle desigual dels $180^\\circ$ i reparteix el que quedi "
   "entre els dos angles iguals."],
  [r"$180^\circ-50^\circ=130^\circ$ entre els dos angles iguals",
   r"$\dfrac{130^\circ}{2}=65^\circ$ cadascun"],
  ex_text="")

# ---- exercici 120: desigualtat triangular (a, b, c) ----
E120 = ("Analitza, en cada cas, les mesures i esbrina amb quines es pot "
        "formar un triangle.")

Q("120a", 120, "a", B1, "A",
  "$a=8$ cm, $b=7$ cm, $c=1$ cm",
  "No es pot formar cap triangle",
  [D("Sí que es pot formar un triangle", "DESIGUALTAT_NO_ESTRICTA",
     "Els dos costats més curts sumen exactament $7+1=8$, el mateix "
     "que el costat més llarg: la desigualtat triangular exigeix que "
     "la suma sigui ESTRICTAMENT més gran, no igual. Amb $7+1=8$ el "
     "\"triangle\" quedaria completament pla."),
   D("No es pot saber sense conèixer els angles", "ES_POT_DETERMINAR",
     "La desigualtat triangular es comprova només amb les tres "
     "longituds, sense necessitat de cap angle: la suma dels dos "
     "costats més curts ha de superar el més llarg."),
   D("Sí, perquè cap costat és més llarg que la suma dels altres dos",
     "DESIGUALTAT_NO_ESTRICTA",
     "$8$ SÍ que és igual (no menor) a la suma dels altres dos, "
     "$7+1=8$: la condició ha de complir-se en estricte, i aquí just "
     "falla per igualtat.")],
  ["La condició per formar un triangle és que la suma dels dos costats "
   "més curts sigui ESTRICTAMENT més gran que el costat més llarg.",
   "Compara $7+1$ amb $8$."],
  [r"Costats més curts: $7$ i $1$. $7+1=8$, que NO és estrictament "
   r"més gran que $8$ (hi és igual): no es forma cap triangle"],
  ex_text=E120)

Q("120b", 120, "b", B1, "A",
  "$a=6$ cm, $b=6$ cm, $c=13$ cm",
  "No es pot formar cap triangle",
  [D("Sí que es pot formar un triangle", "DESIGUALTAT_NO_ESTRICTA",
     "Els dos costats iguals sumen $6+6=12$, que és MÉS PETIT que el "
     "tercer costat ($13$): la desigualtat triangular falla clarament, "
     "no per un marge just."),
   D("Sí, perquè dos costats són iguals (és isòsceles)",
     "PROGRESSIO_INVENTADA",
     "Que dos costats siguin iguals no garanteix que es pugui formar "
     "un triangle: cal comprovar la desigualtat triangular igualment, "
     "i aquí no es compleix."),
   D("No es pot saber sense conèixer els angles", "ES_POT_DETERMINAR",
     "La desigualtat triangular es comprova només amb les tres "
     "longituds donades, sense cap angle.")],
  ["Compara la suma dels dos costats més curts amb el més llarg.",
   "$6+6$ i $13$: quin és més gran?"],
  [r"Costats iguals: $6$ i $6$. $6+6=12<13$: no es pot formar cap "
   r"triangle"],
  ex_text="")

Q("120c", 120, "c", B1, "A",
  "$a=12$ cm, $b=14$ cm, $c=6$ cm",
  "Sí que es pot formar un triangle",
  [D("No es pot formar cap triangle", "VEREDICTE_INVERTIT",
     "Comprova-ho: els costats més curts sumen $12+6=18$, que SÍ és "
     "més gran que $14$. La desigualtat triangular es compleix en "
     "aquest cas."),
   D("Només es pot saber comparant $12$ amb $14$, no cal mirar el $6$",
     "COSTATS_MAL_TRIATS",
     "Cal comprovar la desigualtat amb els DOS costats més curts "
     "sumats ($12+6$) contra el més llarg ($14$), no comparar dos "
     "costats qualssevol entre si."),
   D("No es pot saber sense conèixer els angles", "ES_POT_DETERMINAR",
     "La desigualtat triangular es comprova només amb les tres "
     "longituds donades, sense cap angle.")],
  ["Només cal comprovar-ho amb els dos costats més curts: $12$ i $6$.",
   "Compara $12+6$ amb $14$."],
  [r"Costats més curts: $12$ i $6$. $12+6=18>14$: es compleix la "
   r"desigualtat triangular, es pot formar un triangle"],
  ex_text="")

# ---- exercici 121: identificar triangles rectangles ----
E121 = ("Determina si els triangles són rectangles. En cas afirmatiu, "
        "indica la mesura de la seva hipotenusa i dels seus catets.")

Q("121a", 121, "a", B1, "A",
  "Triangle de costats 5 cm, 12 cm i 13 cm.",
  "Rectangle, amb hipotenusa $13$ cm i catets $5$ cm i $12$ cm",
  [D("No és rectangle", "VEREDICTE_INVERTIT",
     "Comprova-ho: $5^2+12^2=25+144=169$, i $13^2=169$ també. "
     "Coincideixen, així que sí que és rectangle."),
   D("Rectangle, amb hipotenusa $12$ cm i catets $5$ cm i $13$ cm",
     "HIPOTENUSA_MAL_IDENTIFICADA",
     "La hipotenusa és sempre el costat MÉS LLARG dels tres, que aquí "
     "és $13$ cm, no $12$ cm."),
   D("Rectangle, amb hipotenusa $13$ cm i catets $5$ cm i $13$ cm",
     "HIPOTENUSA_MAL_IDENTIFICADA",
     "La hipotenusa no pot repetir-se com a catet: els catets són els "
     "dos costats que NO són el més llarg, és a dir, $5$ i $12$.")],
  ["Compara el quadrat del costat més llarg amb la suma dels quadrats "
   "dels altres dos.",
   "$5^2+12^2$ i $13^2$: coincideixen?"],
  [r"$5^2+12^2=25+144=169=13^2$: coincideix, és rectangle, amb "
   r"hipotenusa $13$ cm i catets $5$ cm i $12$ cm"],
  ex_text=E121)

Q("121b", 121, "b", B1, "A",
  "Triangle de costats 6 cm, 8 cm i 12 cm.",
  "No és rectangle",
  [D("Rectangle, amb hipotenusa $12$ cm i catets $6$ cm i $8$ cm",
     "VEREDICTE_INVERTIT",
     "Comprova-ho: $6^2+8^2=36+64=100$, però $12^2=144$. NO "
     "coincideixen: aquest triangle no és rectangle."),
   D("Rectangle, amb hipotenusa $8$ cm i catets $6$ cm i $12$ cm",
     "HIPOTENUSA_MAL_IDENTIFICADA",
     "Encara que fos rectangle, la hipotenusa hauria de ser el costat "
     "més llarg ($12$ cm), no el $8$ cm; però de fet aquest triangle "
     "no és rectangle."),
   D("No es pot saber sense mesurar els angles directament",
     "ES_POT_DETERMINAR",
     "El teorema de Pitàgores permet saber-ho només amb les tres "
     "longituds, sense mesurar cap angle: només cal comparar "
     "$6^2+8^2$ amb $12^2$.")],
  ["Compara el quadrat del costat més llarg ($12$) amb la suma dels "
   "quadrats dels altres dos ($6$ i $8$).",
   "$6^2+8^2$ i $12^2$: coincideixen?"],
  [r"$6^2+8^2=36+64=100$, però $12^2=144$: NO coincideix, no és "
   r"rectangle"],
  ex_text="")

Q("121c", 121, "c", B1, "A",
  r"Triangle de costats 5 cm, 6 cm i $\sqrt{61}$ cm.",
  r"Rectangle, amb hipotenusa $\sqrt{61}$ cm i catets $5$ cm i $6$ cm",
  [D("No és rectangle", "VEREDICTE_INVERTIT",
     r"Comprova-ho: $5^2+6^2=25+36=61$, i $(\sqrt{61})^2=61$ també. "
     "Coincideixen, així que sí que és rectangle."),
   D(r"Rectangle, amb hipotenusa $6$ cm i catets $5$ cm i $\sqrt{61}$ cm",
     "HIPOTENUSA_MAL_IDENTIFICADA",
     r"La hipotenusa és el costat més llarg: com que $\sqrt{61}"
     r"\approx7{,}81$ cm, és més llarg que $6$ cm, i per tant és ell "
     "qui fa d'hipotenusa, no el $6$."),
   D(r"No es pot saber perquè un dels costats és una arrel, no un "
     r"nombre enter", "ES_POT_DETERMINAR",
     r"El teorema de Pitàgores funciona igual amb costats irracionals: "
     r"n'hi ha prou d'elevar $\sqrt{61}$ al quadrat, que dona "
     "exactament $61$.")],
  [r"Identifica primer el costat més llarg: com que "
   r"$\sqrt{61}\approx7{,}81$ cm, és ell qui podria ser la hipotenusa.",
   r"Comprova $5^2+6^2$ contra $(\sqrt{61})^2$."],
  [r"$5^2+6^2=25+36=61=(\sqrt{61})^2$: coincideix, és rectangle, amb "
   r"hipotenusa $\sqrt{61}$ cm i catets $5$ cm i $6$ cm"],
  ex_text="")

Q("121d", 121, "d", B1, "A",
  "Triangle de costats 7 cm, 24 cm i 25 cm.",
  "Rectangle, amb hipotenusa $25$ cm i catets $7$ cm i $24$ cm",
  [D("No és rectangle", "VEREDICTE_INVERTIT",
     "Comprova-ho: $7^2+24^2=49+576=625$, i $25^2=625$ també. "
     "Coincideixen, així que sí que és rectangle."),
   D("Rectangle, amb hipotenusa $24$ cm i catets $7$ cm i $25$ cm",
     "HIPOTENUSA_MAL_IDENTIFICADA",
     "La hipotenusa és el costat més llarg dels tres, que aquí és "
     "$25$ cm, no $24$ cm."),
   D("Rectangle, amb hipotenusa $25$ cm i catets $7$ cm i $7$ cm",
     "TERME_OBLIDAT_OPERACIO",
     "Els dos catets són els dos costats que NO fan d'hipotenusa: "
     "aquí són $7$ cm i $24$ cm, no dues vegades el mateix costat.")],
  ["Compara el quadrat del costat més llarg amb la suma dels quadrats "
   "dels altres dos.",
   "$7^2+24^2$ i $25^2$: coincideixen?"],
  [r"$7^2+24^2=49+576=625=25^2$: coincideix, és rectangle, amb "
   r"hipotenusa $25$ cm i catets $7$ cm i $24$ cm"],
  ex_text="")

# ---- exercici 122: classificar acutangle/obtusangle ----
Q("122", 122, "", B1, "A",
  "Classifica en acutangle o obtusangle el triangle de costats 5 cm, "
  "10 cm i 8 cm.",
  "Triangle obtusangle",
  [D("Triangle acutangle", "VEREDICTE_INVERTIT",
     "Compara $10^2=100$ amb $5^2+8^2=89$: com que $100>89$, l'angle "
     "oposat al costat més llarg és més obert que un angle recte, així "
     "que el triangle és obtusangle, no acutangle."),
   D("Triangle rectangle", "PARITAT_EXPONENT",
     r"$10^2=100$ i $5^2+8^2=89$ NO coincideixen (si coincidissin "
     "seria rectangle): com que $100$ és més gran que $89$, l'angle és "
     "més obert que un angle recte, és a dir, obtusangle."),
   D("No es pot classificar sense mesurar els angles directament",
     "ES_POT_DETERMINAR",
     "Comparant el quadrat del costat més llarg amb la suma dels "
     "quadrats dels altres dos ja n'hi ha prou per classificar-lo, "
     "sense necessitat de mesurar cap angle.")],
  ["Compara el quadrat del costat més llarg ($10$) amb la suma dels "
   "quadrats dels altres dos ($5$ i $8$).",
   "Si el quadrat del costat més llarg és més gran que la suma dels "
   "altres dos quadrats, el triangle és obtusangle; si és més petit, "
   "és acutangle; si coincideix, és rectangle."],
  [r"$10^2=100$, $\quad 5^2+8^2=25+64=89$",
   r"Com que $100>89$, el triangle és obtusangle"],
  ex_text="")

# ---- exercici 123: Pitàgores en quadrats i rectangles ----
E123 = "Calcula la longitud de $x$ en aquestes figures."

Q("123a", 123, "a", B1, "A",
  "Quadrat de costat 4 cm, $x$ és la diagonal.",
  # La figura ACOMPANYA l'enunciat: les mesures continuen dites amb
  # paraules perquè l'exercici es pugui fer amb un lector de pantalla.

  arrel_tex(32, aprox=True),
  [D(tex(4 + 4), "SUMA_CATETS_SENSE_QUADRAT",
     "Has sumat els dos costats directament ($4+4$) en lloc d'aplicar "
     "Pitàgores: cal elevar-los al quadrat, sumar-los, i fer l'arrel "
     "quadrada del resultat."),
   D(tex(32), "ARREL_OBLIDADA",
     r"Has calculat $4^2+4^2=32$ correctament, però t'has deixat "
     r"l'arrel quadrada final: la diagonal és $\sqrt{32}$, no $32$."),
   D(tex(4 * 4), "SUMA_CATETS_SENSE_QUADRAT",
     "Aquest és el producte dels dos costats ($4\\cdot4$), no la "
     "diagonal: cal aplicar Pitàgores, $x=\\sqrt{4^2+4^2}$.")],
  ["La diagonal d'un quadrat és la hipotenusa del triangle rectangle "
   "format per dos costats consecutius.",
   "Aplica Pitàgores: $x=\\sqrt{4^2+4^2}$."],
  [r"$x=%s$" % pitagores_tex_raw(4, 4)],
  figura=quadrat_diagonal(4),
  ex_text=E123)

Q("123b", 123, "b", B1, "A",
  "Quadrat de costat 10 cm, $x$ és la diagonal.",
  arrel_tex(200, aprox=True),
  [D(tex(10 + 10), "SUMA_CATETS_SENSE_QUADRAT",
     "Has sumat els dos costats directament ($10+10$) en lloc "
     "d'aplicar Pitàgores."),
   D(tex(200), "ARREL_OBLIDADA",
     r"Has calculat $10^2+10^2=200$ correctament, però t'has deixat "
     r"l'arrel quadrada final."),
   D(tex(10 * 10), "SUMA_CATETS_SENSE_QUADRAT",
     "Aquest és el producte dels dos costats ($10\\cdot10$), no la "
     "diagonal.")],
  ["La diagonal d'un quadrat és la hipotenusa del triangle rectangle "
   "format per dos costats consecutius.",
   "Aplica Pitàgores: $x=\\sqrt{10^2+10^2}$."],
  [r"$x=%s$" % pitagores_tex_raw(10, 10)],
  figura=quadrat_diagonal(10),
  ex_text="")

Q("123c", 123, "c", B1, "A",
  "Rectangle de costats 5 cm i 8 cm, $x$ és la diagonal.",
  arrel_tex(89, aprox=True),
  [D(tex(5 + 8), "SUMA_CATETS_SENSE_QUADRAT",
     "Has sumat els dos costats directament ($5+8$) en lloc d'aplicar "
     "Pitàgores."),
   D(tex(89), "ARREL_OBLIDADA",
     r"Has calculat $5^2+8^2=89$ correctament, però t'has deixat "
     r"l'arrel quadrada final."),
   D(tex(5 * 8), "SUMA_CATETS_SENSE_QUADRAT",
     "Aquest és el producte dels dos costats ($5\\cdot8$), no la "
     "diagonal.")],
  ["La diagonal d'un rectangle és la hipotenusa del triangle rectangle "
   "format per dos costats consecutius.",
   "Aplica Pitàgores: $x=\\sqrt{5^2+8^2}$."],
  [r"$x=%s$" % pitagores_tex_raw(5, 8)],
  figura=rectangle_diagonal(8, 5),
  ex_text="")

Q("123d", 123, "d", B1, "A",
  r"Rectangle de diagonal $\sqrt{117}$ cm i un costat de 9 cm, $x$ és "
  "l'altre costat.",
  "$6$ cm",
  [D("$\\sqrt{117+9^2}\\approx14{,}07$ cm", "SIGNE_PITAGORES",
     "Coneixent la diagonal i un costat, l'altre costat s'obté RESTANT "
     "el quadrat del costat conegut al quadrat de la diagonal, no "
     "sumant-lo: $x=\\sqrt{117-9^2}$, no $\\sqrt{117+9^2}$."),
   D("$36$ cm", "ARREL_OBLIDADA",
     r"Has calculat $117-9^2=36$ correctament, però t'has deixat "
     r"l'arrel quadrada final: l'altre costat és $\sqrt{36}=6$ cm, "
     "no $36$ cm."),
   D("$\\sqrt{81}=9$ cm", "CATET_MAL_IDENTIFICAT",
     "Aquest costat no pot coincidir amb el costat ja donat ($9$ cm): "
     "cal aïllar-lo de $117-9^2$, no repetir el costat conegut.")],
  ["La diagonal és la hipotenusa: coneixent-la i un costat, l'altre "
   "s'aïlla restant, no sumant.",
   "Aïlla l'altre costat: $x=\\sqrt{117-9^2}$."],
  [r"$x=\sqrt{117-9^2}=\sqrt{117-81}=\sqrt{36}=6$ cm"],
  figura=rectangle_diagonal(9, 6, etq_altura="x",
                     etq_diagonal="\u221a117 cm"),
  ex_text="")

# ---- exercici 124: Pitàgores en triangles isòsceles/equilàters ----
E124 = "Determina la longitud de $x$ en aquests triangles."

Q("124a", 124, "a", B1, "A",
  "Triangle equilàter de costat 10 cm; $x$ és l'alçada.",
  arrel_tex(75, aprox=True),
  [D(tex(10), "PROGRESSIO_INVENTADA",
     "L'alçada d'un triangle equilàter NO coincideix amb el costat: "
     "cal aplicar Pitàgores amb la semibase i el costat com a "
     "hipotenusa."),
   D("$0$ cm (perquè $10^2-10^2=0$)", "CATET_MAL_IDENTIFICAT",
     "Aquest plantejament fa servir el costat sencer ($10$) com a "
     "catet dues vegades, no la SEMIBASE (la meitat del costat, ja "
     "que l'alçada cau al punt mitjà de la base)."),
   D(tex(5), "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquesta és la semibase (la meitat del costat), no l'alçada: "
     "encara falta aplicar Pitàgores amb aquesta semibase i el costat "
     "com a hipotenusa.")],
  ["L'alçada d'un triangle equilàter cau al punt mitjà de la base i "
   "forma un triangle rectangle amb la semibase i el costat (com a "
   "hipotenusa).",
   "La semibase és $\\dfrac{10}{2}=5$ cm; aplica Pitàgores: "
   "$x=\\sqrt{10^2-5^2}$."],
  [r"Semibase: $\dfrac{10}{2}=5$ cm",
   r"$x=%s$" % catet_tex_raw(10, 5)],
  ex_text=E124)

Q("124b", 124, "b", B1, "A",
  r"Triangle isòsceles de base 8 cm i alçada $\sqrt{48}$ cm; $x$ és la "
  "longitud dels costats iguals.",
  "$8$ cm",
  [D(r"$\sqrt{48+4^2}\approx8{,}25$ cm", "SIGNE_PITAGORES",
     "El costat igual és la hipotenusa: s'obté SUMANT els quadrats de "
     "la semibase i l'alçada, i això sí és correcte aquí (no és una "
     "resta); comprova que has fet servir la semibase ($4$ cm, la "
     "meitat de $8$), no la base sencera."),
   D(r"$\sqrt{48+8^2}\approx10{,}77$ cm", "CATET_MAL_IDENTIFICAT",
     "Has fet servir la base sencera ($8$ cm) com a catet, en lloc de "
     "la SEMIBASE ($4$ cm, la meitat de la base, ja que l'alçada cau "
     "al punt mitjà)."),
   D("$%s$ cm" % tex(4), "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquesta és la semibase (la meitat de la base), no el costat "
     "igual que et demanen: encara falta aplicar Pitàgores.")],
  ["L'alçada divideix la base pel mig: la semibase és "
   "$\\dfrac{8}{2}=4$ cm.",
   r"El costat igual és la hipotenusa del triangle rectangle de "
   r"catets $4$ i $\sqrt{48}$: $x=\sqrt{4^2+(\sqrt{48})^2}$."],
  [r"Semibase: $\dfrac{8}{2}=4$ cm",
   r"$x=\sqrt{4^2+(\sqrt{48})^2}=\sqrt{16+48}=\sqrt{64}=8$ cm"],
  ex_text="")

Q("124c", 124, "c", B1, "A",
  "Triangle isòsceles de costats iguals 12 cm i base 7 cm; $x$ és "
  "l'alçada.",
  "$\\sqrt{131{,}75}\\approx11{,}48$ cm",
  [D("$\\sqrt{144-7^2}=\\sqrt{95}\\approx9{,}75$ cm", "CATET_MAL_IDENTIFICAT",
     "Has fet servir la base sencera ($7$ cm) com a catet, en lloc de "
     "la SEMIBASE ($3{,}5$ cm, la meitat de $7$, ja que l'alçada cau "
     "al punt mitjà de la base)."),
   D("$12-3{,}5=8{,}5$ cm", "SUMA_CATETS_SENSE_QUADRAT",
     "Has restat directament el costat i la semibase en lloc "
     "d'aplicar Pitàgores: cal elevar-los al quadrat, restar, i fer "
     "l'arrel quadrada."),
   D("$131{,}75$ cm", "ARREL_OBLIDADA",
     "Has calculat $12^2-3{,}5^2=131{,}75$ correctament, però t'has "
     "deixat l'arrel quadrada final.")],
  ["La semibase és $\\dfrac{7}{2}=3{,}5$ cm; l'alçada, la semibase i "
   "el costat igual (com a hipotenusa) formen un triangle rectangle.",
   "Aplica Pitàgores: $x=\\sqrt{12^2-3{,}5^2}$."],
  ["Semibase: $\\dfrac{7}{2}=3{,}5$ cm",
   "$x=\\sqrt{12^2-3{,}5^2}=\\sqrt{144-12{,}25}=\\sqrt{131{,}75}"
   "\\approx11{,}48$ cm"],
  ex_text="")

# ---- exercici 125: alçada de triangle equilàter donat el perímetre ----
Q("125", 125, "", B1, "A",
  "Troba l'altura d'un triangle equilàter de perímetre 48 cm.",
  arrel_tex(192, aprox=True),
  [D(arrel_tex(48 ** 2 - 24 ** 2, aprox=True),
     "COSTAT_NO_CALCULAT",
     "No has calculat primer el costat a partir del perímetre "
     "($48:3=16$ cm): sembla que has fet servir el perímetre sencer "
     "($48$) com si fos el costat, en lloc de dividir-lo entre 3 "
     "primer."),
   D(tex(16), "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquest és el costat del triangle ($48:3$), no l'alçada: encara "
     "cal aplicar Pitàgores amb la semibase."),
   D(tex(192), "ARREL_OBLIDADA",
     r"Has calculat $16^2-8^2=192$ correctament, però t'has deixat "
     r"l'arrel quadrada final.")],
  ["Calcula primer el costat: com que el perímetre és $48$ cm i els "
   "tres costats són iguals, cada costat val $\\dfrac{48}{3}=16$ cm.",
   "L'alçada, la semibase ($8$ cm) i el costat (com a hipotenusa) "
   "formen un triangle rectangle: $h=\\sqrt{16^2-8^2}$."],
  [r"Costat: $\dfrac{48}{3}=16$ cm",
   r"$h=%s$" % catet_tex_raw(16, 8)],
  ex_text="")

# ---- exercici 126: perímetre de figures ----
E126 = "Calcula el perímetre de les figures següents."

Q("126a", 126, "a", B1, "A",
  "Quadrilàter irregular de costats 25 cm, 28 cm, 18 cm i 10 cm.",
  "$81$ cm",
  [D("$71$ cm", "TERME_OBLIDAT_OPERACIO",
     "Aquest valor no inclou algun dels quatre costats: suma'ls tots "
     "quatre un per un."),
   D("$630$ cm", "SUMA_EN_LLOC_RESTA",
     "El perímetre és la SUMA dels costats, no el seu producte: "
     "$25\\cdot28\\cdot18\\cdot10$ no té sentit aquí."),
   D("$91$ cm", "TERME_OBLIDAT_OPERACIO",
     "Aquest valor no coincideix amb la suma dels quatre costats "
     "donats: torna a sumar-los amb calma.")],
  ["El perímetre d'un polígon és la suma de les longituds de tots els "
   "seus costats.",
   "Suma els quatre costats: $25+28+18+10$."],
  ["$25+28+18+10=81$ cm"],
  ex_text=E126)

Q("126b", 126, "b", B1, "A",
  "Hexàgon còncau (en forma de fletxa) de costats 12 cm, 14 cm, 28 cm, "
  "7 cm, 16 cm i 5 cm.",
  "$82$ cm",
  [D("$77$ cm", "TERME_OBLIDAT_OPERACIO",
     "Aquest valor no inclou algun dels sis costats: suma'ls tots sis "
     "un per un."),
   D("$70$ cm", "TERME_OBLIDAT_OPERACIO",
     "Aquest valor no coincideix amb la suma dels sis costats donats: "
     "torna a sumar-los amb calma."),
   D("$41$ cm", "PART_PEL_TOT",
     "Aquest valor sembla la meitat del perímetre real: el perímetre "
     "inclou els sis costats sencers, no la meitat de la suma.")],
  ["El perímetre és la suma de tots els costats, encara que la figura "
   "sigui còncava (en forma de fletxa): el criteri no canvia.",
   "Suma els sis costats: $12+14+28+7+16+5$."],
  ["$12+14+28+7+16+5=82$ cm"],
  ex_text="")

# ---- exercici 127: apotema d'un hexàgon regular ----
E127 = "Troba l'apotema d'un hexàgon regular el costat del qual mesura:"

Q("127a", 127, "a", B1, "A",
  "10 cm",
  arrel_tex(75, aprox=True) + " cm",
  [D("$%s$ cm" % tex(10), "APOTEMA_COSTAT_CONFOS",
     "L'apotema d'un hexàgon regular NO coincideix amb el costat: "
     "s'obté aplicant Pitàgores a un dels sis triangles equilàters en "
     "què el centre el divideix."),
   D("$5$ cm", "ARREL_FACTOR_OBLIDAT",
     "Aquest és el catet corresponent a la meitat del costat, però "
     "encara falta multiplicar per $\\sqrt{3}$: l'apotema és "
     "$\\dfrac{L\\sqrt3}{2}$, no només $\\dfrac{L}{2}$."),
   D("$%s$ cm" % tex(10 * 3), "POTENCIA_DE_SUMA",
     "Aquest valor no surt de la fórmula $\\dfrac{L\\sqrt3}{2}$: "
     "revisa que has multiplicat per $\\sqrt3$ (no per $3$) i has "
     "dividit per $2$.")],
  ["L'apotema d'un hexàgon regular és l'alçada d'un dels sis triangles "
   "equilàters de costat $L$ en què el centre el divideix.",
   "Fes servir la fórmula $a=\\dfrac{L\\sqrt3}{2}$, amb $L=10$ cm."],
  [r"$a=\dfrac{10\sqrt3}{2}=%s$" % arrel_tex_raw(75, aprox=True)],
  ex_text=E127)

Q("127b", 127, "b", B1, "A",
  "16 cm",
  arrel_tex(192, aprox=True) + " cm",
  [D("$%s$ cm" % tex(16), "APOTEMA_COSTAT_CONFOS",
     "L'apotema d'un hexàgon regular no coincideix amb el costat: cal "
     "aplicar la fórmula $a=\\dfrac{L\\sqrt3}{2}$."),
   D("$8$ cm", "ARREL_FACTOR_OBLIDAT",
     "Aquest és $\\dfrac{L}{2}$, però encara falta multiplicar per "
     "$\\sqrt{3}$."),
   D("$%s$ cm" % tex(16 * 3), "POTENCIA_DE_SUMA",
     "Aquest valor no surt de la fórmula $\\dfrac{L\\sqrt3}{2}$: "
     "revisa que has multiplicat per $\\sqrt3$ (no per $3$) i has "
     "dividit per $2$.")],
  ["Fes servir la fórmula $a=\\dfrac{L\\sqrt3}{2}$.",
   "Amb $L=16$ cm: $a=\\dfrac{16\\sqrt3}{2}$."],
  [r"$a=\dfrac{16\sqrt3}{2}=8\sqrt3=%s$" % arrel_tex_raw(192, aprox=True)],
  ex_text="")

Q("127c", 127, "c", B1, "A",
  "7 cm",
  "$\\dfrac{7\\sqrt3}{2}\\approx6{,}06$ cm",
  [D("$7$ cm", "APOTEMA_COSTAT_CONFOS",
     "L'apotema d'un hexàgon regular no coincideix amb el costat: cal "
     "aplicar la fórmula $a=\\dfrac{L\\sqrt3}{2}$."),
   D("$3{,}5$ cm", "ARREL_FACTOR_OBLIDAT",
     "Aquest és $\\dfrac{L}{2}$, però encara falta multiplicar per "
     "$\\sqrt{3}$."),
   D("$\\dfrac{7}{2\\sqrt3}\\approx2{,}02$ cm", "INVERTIDA",
     "Has invertit la posició de $\\sqrt3$: la fórmula és "
     "$\\dfrac{L\\sqrt3}{2}$ (multiplicant), no "
     "$\\dfrac{L}{2\\sqrt3}$ (dividint).")],
  ["Fes servir la fórmula $a=\\dfrac{L\\sqrt3}{2}$.",
   "Amb $L=7$ cm: $a=\\dfrac{7\\sqrt3}{2}$."],
  ["$a=\\dfrac{7\\sqrt3}{2}\\approx6{,}06$ cm"],
  ex_text="")

# ---- exercici 128: rombe inscrit en un rectangle ----
Q("128a", 128, "a", B1, "A",
  "Un rectangle té base $AB=12$ cm i altura $AC=16$ cm. Un rombe uneix "
  "els punts mitjans dels quatre costats del rectangle. Calcula el "
  "costat del rombe.",
  "$10$ cm",
  [D("$%s$ cm" % tex(6 + 8), "SUMA_CATETS_SENSE_QUADRAT",
     "Has sumat directament les meitats de base i altura ($6+8$) en "
     "lloc d'aplicar Pitàgores."),
   D("$%s$ cm" % tex(100), "ARREL_OBLIDADA",
     r"Has calculat $6^2+8^2=100$ correctament, però t'has deixat "
     r"l'arrel quadrada final."),
   D(arrel_tex(12 ** 2 + 16 ** 2, aprox=True) + " cm",
     "MEITAT_OBLIDADA",
     "Has fet servir la base i l'altura senceres ($12$ i $16$) en "
     "lloc de les seves MEITATS ($6$ i $8$): el costat del rombe és "
     "la hipotenusa del triangle format pels punts mitjans, no pel "
     "rectangle sencer.")],
  ["Cada costat del rombe és la hipotenusa d'un triangle rectangle de "
   "catets la meitat de la base i la meitat de l'altura del rectangle.",
   "Els catets són $\\dfrac{12}{2}=6$ cm i $\\dfrac{16}{2}=8$ cm; "
   "aplica Pitàgores."],
  ["Catets: $\\dfrac{12}{2}=6$ cm i $\\dfrac{16}{2}=8$ cm",
   r"Costat del rombe: $%s$" % pitagores_tex_raw(6, 8, aprox=False)],
  ex_text="")

Q("128b", 128, "b", B1, "A",
  "En un rectangle, dos costats consecutius es diuen $AB=12$ cm (la "
  "base) i $AC=16$ cm (l'altura), essent $A$, $B$ i $C$ tres dels "
  "vèrtexs del rectangle ($A$ i $B$ a la base, $C$ damunt de $A$). "
  "En el triangle rectangle $ABC$, quant valen el catet $AB$, el "
  "catet $AC$ i la hipotenusa $BC$?",
  "$AB=12$ cm, $AC=16$ cm, $BC=20$ cm",
  [D("$AB=12$ cm, $AC=16$ cm, $BC=28$ cm", "SUMA_CATETS_SENSE_QUADRAT",
     "$28$ surt de sumar $12+16$ directament: la hipotenusa s'obté "
     "aplicant Pitàgores ($\\sqrt{12^2+16^2}$), no sumant els catets."),
   D("$AB=12$ cm, $AC=16$ cm, $BC=\\sqrt{400}$ cm sense simplificar",
     "SIMPLIFICACIO_INCOMPLETA",
     r"$\sqrt{400}$ SÍ és correcte com a pas intermedi, però es "
     "simplifica exactament a $20$ cm (és un quadrat perfecte): cal "
     "acabar de simplificar l'arrel."),
   D("$AB=16$ cm, $AC=12$ cm, $BC=20$ cm", "CATET_MAL_IDENTIFICAT",
     "Has intercanviat quin costat és $AB$ i quin és $AC$: l'enunciat "
     "diu explícitament que la base $AB$ és $12$ cm i l'altura $AC$ "
     "és $16$ cm.")],
  ["Els catets del triangle rectangle $ABC$ són directament els "
   "costats donats del rectangle.",
   "La hipotenusa $BC$ s'obté amb Pitàgores: "
   "$BC=\\sqrt{AB^2+AC^2}$."],
  [r"$BC=%s$" % pitagores_tex_raw(12, 16, aprox=False)],
  ex_text="")

# ---- exercici 129: rectangle inscrit en circumferència ----
Q("129", 129, "", B1, "A",
  "Un rectangle de costats 15 cm i 20 cm està inscrit en una "
  "circumferència. Quant mesura el radi de la circumferència?",
  "$12{,}5$ cm",
  [D("$25$ cm", "MEITAT_OBLIDADA",
     "Aquest és el DIÀMETRE de la circumferència (la diagonal del "
     "rectangle), no el radi: el radi és la meitat del diàmetre."),
   D("$%s$ cm" % tex(15 + 20), "SUMA_CATETS_SENSE_QUADRAT",
     "Has sumat directament els dos costats ($15+20$) en lloc "
     "d'aplicar Pitàgores per trobar la diagonal."),
   D("$625$ cm", "ARREL_OBLIDADA",
     r"Has calculat $15^2+20^2=625$ correctament, però t'has deixat "
     r"l'arrel quadrada per trobar la diagonal (i encara faltaria "
     "dividir per $2$ per obtenir el radi).")],
  ["Quan un rectangle està inscrit en una circumferència, la seva "
   "diagonal coincideix amb un diàmetre.",
   "Calcula primer la diagonal amb Pitàgores, $d=\\sqrt{15^2+20^2}$, "
   "i després divideix-la per $2$ per obtenir el radi."],
  [r"Diagonal: $%s$" % pitagores_tex_raw(15, 20, aprox=False),
   "Radi: $\\dfrac{25}{2}=12{,}5$ cm"],
  ex_text="")


# =====================================================================
# BLOC 2 — ÀREES DE TRIANGLES AMB PITÀGORES (exercicis 130-138)
# =====================================================================
# Exercici 139 exclòs sencer: la figura (zona ombrejada de rectangles)
# no es pot determinar amb prou precisió a partir de la font, i
# r-im8.tex no arriba a cap valor numèric per a aquest ítem (vegeu la
# nota d'exclusions al docstring del mòdul).

Q("130", 130, "", B2, "A",
  "L'àrea d'un triangle isòsceles és $24$ m$^2$ i el costat desigual "
  "(la base) mesura $6$ m. Troba la longitud dels altres dos costats.",
  arrel_tex(73, aprox=True) + " m",
  [D("$8$ m", "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquesta és l'alçada del triangle (obtinguda de l'àrea), no el "
     "costat lateral que et demanen: encara falta aplicar Pitàgores "
     "amb la semibase."),
   D(tex(3 + 8) + " m", "SUMA_CATETS_SENSE_QUADRAT",
     "Has sumat directament la semibase i l'alçada ($3+8$) en lloc "
     "d'aplicar Pitàgores."),
   D(tex(73) + " m", "ARREL_OBLIDADA",
     r"Has calculat $3^2+8^2=73$ correctament, però t'has deixat "
     r"l'arrel quadrada final.")],
  ["Aïlla primer l'alçada a partir de l'àrea: "
   "$24=\\dfrac{6\\cdot h}{2}$.",
   "L'alçada, la semibase ($3$ m) i el costat lateral (com a "
   "hipotenusa) formen un triangle rectangle: aplica Pitàgores."],
  ["Alçada: $24=\\dfrac{6\\cdot h}{2}\\Rightarrow h=8$ m",
   r"Costat lateral: $%s$ m" % pitagores_tex_raw(3, 8)],
  ex_text="")

Q("131", 131, "", B2, "A",
  "L'àrea d'un triangle rectangle és $12$ cm$^2$ i un dels catets "
  "mesura $6$ cm. Calcula la longitud de la hipotenusa.",
  "$2\\sqrt{13}\\approx7{,}21$ cm",
  [D("$4$ cm", "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquest és l'altre catet (obtingut de l'àrea), no la hipotenusa "
     "que et demanen: encara falta aplicar Pitàgores."),
   D(tex(6 + 4) + " cm", "SUMA_CATETS_SENSE_QUADRAT",
     "Has sumat directament els dos catets ($6+4$) en lloc d'aplicar "
     "Pitàgores."),
   D(tex(52) + " cm", "ARREL_OBLIDADA",
     r"Has calculat $6^2+4^2=52$ correctament, però t'has deixat "
     r"l'arrel quadrada final.")],
  ["Aïlla primer l'altre catet a partir de l'àrea: "
   "$12=\\dfrac{6\\cdot c}{2}$.",
   "Un cop tinguis els dos catets, aplica Pitàgores per trobar la "
   "hipotenusa."],
  ["Altre catet: $12=\\dfrac{6\\cdot c}{2}\\Rightarrow c=4$ cm",
   r"Hipotenusa: $%s$ cm" % pitagores_tex_raw(6, 4)],
  ex_text="")

Q("132", 132, "", B2, "A",
  "Busca l'àrea d'un triangle equilàter de perímetre $90$ cm.",
  "$225\\sqrt3\\approx389{,}71$ cm$^2$",
  [D("$30$ cm$^2$", "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquest és el costat del triangle ($90:3$), no l'àrea: encara "
     "cal aplicar la fórmula de l'àrea del triangle equilàter."),
   D("$900$ cm$^2$", "POTENCIA_DE_SUMA",
     "Aquest valor no surt de la fórmula $A=\\dfrac{L^2\\sqrt3}{4}$: "
     "revisa que has elevat el costat al quadrat, multiplicat per "
     "$\\sqrt3$ i dividit per $4$."),
   D("$450$ cm$^2$", "ARREL_FACTOR_OBLIDAT",
     "Aquest valor no inclou el factor $\\sqrt3$ de la fórmula "
     "$A=\\dfrac{L^2\\sqrt3}{4}$: sembla que has calculat "
     "$\\dfrac{30^2}{2}$ en lloc de $\\dfrac{30^2\\sqrt3}{4}$.")],
  ["Calcula primer el costat: $\\dfrac{90}{3}=30$ cm.",
   "Fes servir la fórmula $A=\\dfrac{L^2\\sqrt3}{4}$."],
  ["Costat: $\\dfrac{90}{3}=30$ cm",
   "$A=\\dfrac{30^2\\sqrt3}{4}=\\dfrac{900\\sqrt3}{4}=225\\sqrt3"
   "\\approx389{,}71$ cm$^2$"],
  ex_text="")

Q("133", 133, "", B2, "A",
  "Si l'àrea d'un triangle equilàter és $30$ cm$^2$, troba la "
  "longitud del seu costat.",
  "$\\sqrt{40\\sqrt3}\\approx8{,}32$ cm",
  [D("$\\dfrac{30^2\\sqrt3}{4}$ cm", "INVERTIDA",
     "Aquesta expressió correspon a l'ÀREA a partir del costat (la "
     "fórmula original), no al costat a partir de l'àrea: cal aïllar "
     "$L$ de la fórmula, no aplicar-la tal qual amb $30$ com si fos "
     "el costat."),
   D("$\\sqrt{120}\\approx10{,}95$ cm", "ARREL_FACTOR_OBLIDAT",
     "En aïllar $L^2$ de $30=\\dfrac{L^2\\sqrt3}{4}$ no n'hi ha prou "
     "amb multiplicar per $4$ ($L^2=120$): encara cal dividir per "
     "$\\sqrt3$ abans de fer l'arrel."),
   D("$40\\sqrt3\\approx69{,}28$ cm", "ARREL_OBLIDADA",
     "Aquest és el valor de $L^2$ (encara al quadrat), no de $L$: "
     "et falta fer l'arrel quadrada final.")],
  ["Aïlla $L^2$ de la fórmula $A=\\dfrac{L^2\\sqrt3}{4}$: "
   "$L^2=\\dfrac{4A}{\\sqrt3}$.",
   "Amb $A=30$: $L^2=\\dfrac{120}{\\sqrt3}=40\\sqrt3$; després fes "
   "l'arrel quadrada."],
  ["$L^2=\\dfrac{4\\cdot30}{\\sqrt3}=\\dfrac{120}{\\sqrt3}=40\\sqrt3$",
   "$L=\\sqrt{40\\sqrt3}\\approx8{,}32$ cm"],
  ex_text="")

Q("134", 134, "", B2, "A",
  "Busca l'àrea d'un triangle rectangle d'hipotenusa $13$ cm, si un "
  "dels catets mesura $5$ cm.",
  "$30$ cm$^2$",
  [D("$12$ cm$^2$", "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquest és l'altre catet (obtingut amb Pitàgores), no l'àrea que "
     "et demanen: encara falta aplicar la fórmula de l'àrea del "
     "triangle."),
   D("$60$ cm$^2$", "ARREL_FACTOR_OBLIDAT",
     "Aquest valor no divideix per $2$ el producte dels catets: "
     "l'àrea d'un triangle és $\\dfrac{\\text{base}\\cdot\\text{alçada}}{2}"
     "$, no el producte sencer."),
   D("$32{,}5$ cm$^2$", "CATET_MAL_IDENTIFICAT",
     "Aquest valor sembla fet servir la hipotenusa ($13$) com si fos "
     "un catet: el segon catet s'ha d'obtenir amb Pitàgores a partir "
     "de la hipotenusa i el catet donat, $\\sqrt{13^2-5^2}$.")],
  ["Troba primer l'altre catet amb Pitàgores: "
   "$\\sqrt{13^2-5^2}$.",
   "L'àrea d'un triangle rectangle és "
   "$\\dfrac{\\text{catet}_1\\cdot\\text{catet}_2}{2}$."],
  [r"Altre catet: $%s$ cm" % catet_tex_raw(13, 5, aprox=False),
   "Àrea: $\\dfrac{5\\cdot12}{2}=30$ cm$^2$"],
  ex_text="")

Q("135", 135, "", B2, "A",
  "Calcula l'àrea d'un quadrat sabent que la seva diagonal mesura "
  "$7{,}07$ cm.",
  "$24{,}99$ cm$^2$",
  [D("$49{,}98$ cm$^2$", "ARREL_FACTOR_OBLIDAT",
     "Aquest valor no divideix per $2$: l'àrea d'un quadrat a partir "
     "de la diagonal és $\\dfrac{d^2}{2}$, no $d^2$ sencer."),
   D("$14{,}14$ cm$^2$", "SUMA_EN_LLOC_RESTA",
     "Aquest valor surt de duplicar la diagonal, no d'elevar-la al "
     "quadrat i dividir per $2$: revisa la fórmula "
     "$A=\\dfrac{d^2}{2}$."),
   D("$3{,}54$ cm$^2$", "INVERTIDA",
     "Aquest valor sembla la meitat de la diagonal, no l'àrea: cal "
     "elevar la diagonal al quadrat abans de dividir per $2$.")],
  ["La diagonal d'un quadrat es relaciona amb l'àrea per "
   "$A=\\dfrac{d^2}{2}$ (surt d'aplicar Pitàgores als dos triangles "
   "en què la diagonal el divideix).",
   "Calcula $\\dfrac{7{,}07^2}{2}$."],
  ["$A=\\dfrac{7{,}07^2}{2}=\\dfrac{49{,}9849}{2}\\approx24{,}99$ "
   "cm$^2$"],
  ex_text="")

Q("136", 136, "", B2, "A",
  "Troba l'àrea d'un rectangle de diagonal $\\sqrt{41}$ cm i un dels "
  "costats de $4$ cm.",
  "$20$ cm$^2$",
  [D("$5$ cm$^2$", "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquest és l'altre costat (obtingut amb Pitàgores), no l'àrea: "
     "encara falta multiplicar els dos costats."),
   D("$\\sqrt{41}$ cm$^2$", "CATET_MAL_IDENTIFICAT",
     "L'àrea no és la diagonal: cal trobar primer l'altre costat amb "
     "Pitàgores, $\\sqrt{41-4^2}$, i després multiplicar-lo pel "
     "costat de $4$ cm."),
   D("$9$ cm$^2$", "SUMA_EN_LLOC_RESTA",
     "Aquest valor surt de sumar $4$ i l'altre costat ($4+5$) en lloc "
     "de multiplicar-los: l'àrea d'un rectangle és el PRODUCTE dels "
     "dos costats, no la seva suma.")],
  ["Troba primer l'altre costat amb Pitàgores: "
   "$\\sqrt{41-4^2}$.",
   "L'àrea d'un rectangle és el producte dels dos costats."],
  ["Altre costat: $\\sqrt{41-4^2}=\\sqrt{25}=5$ cm",
   "Àrea: $4\\cdot5=20$ cm$^2$"],
  ex_text="")

Q("137", 137, "", B2, "A",
  "Calcula l'àrea d'un rectangle de $10$ cm de base i amb diagonal "
  "$\\sqrt{116}$ cm.",
  "$40$ cm$^2$",
  [D("$4$ cm$^2$", "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquesta és l'alçada (obtinguda amb Pitàgores), no l'àrea: "
     "encara falta multiplicar-la per la base."),
   D("$\\sqrt{116}$ cm$^2$", "CATET_MAL_IDENTIFICAT",
     "L'àrea no és la diagonal: cal trobar primer l'alçada amb "
     "Pitàgores, $\\sqrt{116-10^2}$, i després multiplicar-la per la "
     "base de $10$ cm."),
   D("$14$ cm$^2$", "SUMA_EN_LLOC_RESTA",
     "Aquest valor surt de sumar la base i l'alçada ($10+4$) en lloc "
     "de multiplicar-les: l'àrea d'un rectangle és el producte dels "
     "dos costats.")],
  ["Troba primer l'alçada amb Pitàgores: "
   "$\\sqrt{116-10^2}$.",
   "L'àrea d'un rectangle és base per alçada."],
  ["Alçada: $\\sqrt{116-10^2}=\\sqrt{16}=4$ cm",
   "Àrea: $10\\cdot4=40$ cm$^2$"],
  ex_text="")

Q("138", 138, "", B2, "A",
  "Determina l'àrea d'un rectangle de base $7$ cm i perímetre "
  "$24$ cm.",
  "$35$ cm$^2$",
  [D("$5$ cm$^2$", "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquesta és l'alçada (obtinguda del perímetre), no l'àrea: "
     "encara falta multiplicar-la per la base."),
   D("$8{,}5$ cm$^2$", "INVERTIDA",
     "Aquest valor surt de $\\dfrac{24}{2}-7$ malament calculat, o de "
     "no restar la base abans de dividir: el perímetre és "
     "$2(\\text{base}+\\text{alçada})$, així que "
     "$\\text{alçada}=\\dfrac{24}{2}-7$."),
   D("$168$ cm$^2$", "SUMA_EN_LLOC_RESTA",
     "Aquest valor surt de multiplicar la base pel perímetre sencer "
     "($7\\cdot24$), no per l'alçada: primer cal aïllar l'alçada del "
     "perímetre.")],
  ["El perímetre és $2(\\text{base}+\\text{alçada})$: aïlla "
   "l'alçada.",
   "Amb perímetre $24$ i base $7$: alçada $=\\dfrac{24}{2}-7$."],
  ["Alçada: $\\dfrac{24}{2}-7=12-7=5$ cm",
   "Àrea: $7\\cdot5=35$ cm$^2$"],
  ex_text="")


# =====================================================================
# BLOC 3 — ÀREES DE QUADRILÀTERS I POLÍGONS REGULARS (exercicis 140-145)
# =====================================================================
# Exercici 145: només es conserva l'apartat c (forat circular en un
# quadrat), que és l'únic amb valor numèric complet a r-im8.tex. Els
# apartats a, b i d ("figures esglaonades") s'exclouen perquè la
# disposició exacta no es pot reconstruir des de la font i no hi ha
# cap resultat numèric al solucionari.

E140 = "Troba l'àrea d'aquests trapezis isòsceles."

Q("140a", 140, "a", B3, "A",
  "Bases de $3$ cm i $10$ cm, alçada de $6$ cm.",
  "$39$ cm$^2$",
  [D("$78$ cm$^2$", "ARREL_FACTOR_OBLIDAT",
     "Aquest valor no divideix per $2$: l'àrea d'un trapezi és "
     "$\\dfrac{(B+b)\\cdot h}{2}$, no $(B+b)\\cdot h$ sencer."),
   D("$19$ cm$^2$", "DIVISIO_REPETIDA",
     "Aquest valor sembla dividir per $2$ dues vegades: revisa que "
     "has calculat $(3+10)\\cdot6$ abans de dividir per $2$, no "
     "$(3+10)$ dividit per $2$ i després multiplicat per $6$ dividit "
     "per $2$."),
   D("$60$ cm$^2$", "SUMA_EN_LLOC_RESTA",
     "Aquest valor surt de multiplicar només la base gran per "
     "l'alçada ($10\\cdot6$), sense tenir en compte la base petita.")],
  ["L'àrea d'un trapezi és $\\dfrac{(B+b)\\cdot h}{2}$, on $B$ i $b$ "
   "són les dues bases i $h$ l'alçada.",
   "Calcula $\\dfrac{(3+10)\\cdot6}{2}$."],
  ["$A=\\dfrac{(3+10)\\cdot6}{2}=\\dfrac{78}{2}=39$ cm$^2$"],
  ex_text=E140)

Q("140b", 140, "b", B3, "A",
  r"Bases de $16$ m i $24$ m, alçada de $\sqrt{164}$ m.",
  "$40\\sqrt{41}\\approx256{,}12$ m$^2$",
  [D("$20\\sqrt{41}\\approx128{,}06$ m$^2$", "ARREL_FACTOR_OBLIDAT",
     "Aquest valor divideix per $2$ una vegada de més: l'àrea és "
     "$\\dfrac{(16+24)\\cdot\\sqrt{164}}{2}$, i $\\dfrac{40}{2}=20$ ja "
     "és el resultat correcte de la primera divisió, no cal tornar-la "
     "a dividir."),
   D("$\\sqrt{164}$ m$^2$", "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquesta és només l'alçada, no l'àrea: encara falta multiplicar "
     "per la suma de les bases i dividir per $2$."),
   D("$164$ m$^2$", "CATET_MAL_IDENTIFICAT",
     r"Aquest valor confon $\sqrt{164}$ (l'alçada) amb $164$ (el "
     "nombre sota l'arrel), i no fa servir les bases per res: revisa "
     "la fórmula de l'àrea del trapezi.")],
  ["L'àrea d'un trapezi és $\\dfrac{(B+b)\\cdot h}{2}$.",
   r"Calcula $\dfrac{(16+24)\cdot\sqrt{164}}{2}$; simplifica "
   r"$\sqrt{164}=2\sqrt{41}$ abans de multiplicar si vols."],
  [r"$A=\dfrac{(16+24)\cdot\sqrt{164}}{2}=\dfrac{40\cdot2\sqrt{41}}{2}"
   r"=40\sqrt{41}\approx256{,}12$ m$^2$"],
  ex_text="")

Q("140c", 140, "c", B3, "A",
  "Bases de $3{,}5$ m i $4{,}13$ m, alçada de $7$ m.",
  "$26{,}705$ m$^2$",
  [D("$53{,}41$ m$^2$", "ARREL_FACTOR_OBLIDAT",
     "Aquest valor no divideix per $2$: l'àrea d'un trapezi és "
     "$\\dfrac{(B+b)\\cdot h}{2}$."),
   D("$29{,}75$ m$^2$", "TERME_OBLIDAT_OPERACIO",
     "Aquest valor sembla fet servir només una de les dues bases "
     "(la gran) amb l'alçada, i després dividit per $2$: cal sumar "
     "les DUES bases abans de multiplicar per l'alçada."),
   D("$5{,}345$ m$^2$", "FORMULA_INVERTIDA",
     "Aquest valor sembla la suma de les bases dividida per l'alçada, "
     "en lloc de multiplicada: revisa la fórmula "
     "$\\dfrac{(B+b)\\cdot h}{2}$.")],
  ["L'àrea d'un trapezi és $\\dfrac{(B+b)\\cdot h}{2}$.",
   "Calcula $\\dfrac{(3{,}5+4{,}13)\\cdot7}{2}$."],
  ["$A=\\dfrac{(3{,}5+4{,}13)\\cdot7}{2}=\\dfrac{53{,}41}{2}"
   "=26{,}705$ m$^2$"],
  ex_text="")

Q("140d", 140, "d", B3, "A",
  "Bases de $4$ m i $14$ m, alçada de $3$ m.",
  "$27$ m$^2$",
  [D("$54$ m$^2$", "ARREL_FACTOR_OBLIDAT",
     "Aquest valor no divideix per $2$: l'àrea d'un trapezi és "
     "$\\dfrac{(B+b)\\cdot h}{2}$."),
   D("$21$ m$^2$", "TERME_OBLIDAT_OPERACIO",
     "Aquest valor no coincideix amb $\\dfrac{(4+14)\\cdot3}{2}$: "
     "torna a comprovar la suma de les bases abans de multiplicar."),
   D("$42$ m$^2$", "SUMA_EN_LLOC_RESTA",
     "Aquest valor surt de multiplicar només la base gran per "
     "l'alçada ($14\\cdot3$), sense tenir en compte la base petita "
     "ni dividir per $2$.")],
  ["L'àrea d'un trapezi és $\\dfrac{(B+b)\\cdot h}{2}$.",
   "Calcula $\\dfrac{(4+14)\\cdot3}{2}$."],
  ["$A=\\dfrac{(4+14)\\cdot3}{2}=\\dfrac{54}{2}=27$ m$^2$"],
  ex_text="")

E141 = "Calcula l'àrea de:"

Q("141a", 141, "a", B3, "A",
  "Un hexàgon regular de costat $2$ cm.",
  "$6\\sqrt3\\approx10{,}39$ cm$^2$",
  [D("$2\\sqrt3\\approx3{,}46$ cm$^2$", "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquest valor és l'apotema, no l'àrea: encara falta multiplicar "
     "pel perímetre i dividir per $2$."),
   D("$12$ cm$^2$", "ARREL_FACTOR_OBLIDAT",
     "Aquest valor no inclou el factor $\\sqrt3$ que dona l'apotema: "
     "l'àrea d'un hexàgon regular és "
     "$\\dfrac{\\text{perímetre}\\cdot\\text{apotema}}{2}$, i "
     "l'apotema aquí val $\\sqrt3$, no $1$."),
   D("$24\\sqrt3\\approx41{,}57$ cm$^2$", "POTENCIA_DE_SUMA",
     "Aquest valor no divideix per $2$: revisa la fórmula "
     "$\\dfrac{\\text{perímetre}\\cdot\\text{apotema}}{2}$.")],
  ["Calcula primer l'apotema: $a=\\dfrac{L\\sqrt3}{2}=\\sqrt3$ cm "
   "(amb $L=2$).",
   "L'àrea d'un polígon regular és "
   "$\\dfrac{\\text{perímetre}\\cdot\\text{apotema}}{2}$, amb "
   "perímetre $=6\\cdot2=12$ cm."],
  ["Apotema: $a=\\dfrac{2\\sqrt3}{2}=\\sqrt3$ cm",
   "Perímetre: $6\\cdot2=12$ cm",
   "Àrea: $\\dfrac{12\\cdot\\sqrt3}{2}=6\\sqrt3\\approx10{,}39$ cm$^2$"],
  ex_text=E141)

Q("141b", 141, "b", B3, "A",
  "Un octàgon regular de perímetre $48$ cm.",
  "$72(1+\\sqrt2)\\approx173{,}82$ cm$^2$",
  [D("$6$ cm", "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquest és el costat de l'octàgon ($48:8$), no l'àrea: encara "
     "cal calcular l'apotema i aplicar la fórmula de l'àrea."),
   D("$288$ cm$^2$", "ARREL_FACTOR_OBLIDAT",
     "Aquest valor sembla fet $\\dfrac{48\\cdot12}{2}$ amb una "
     "apotema inventada de $12$: l'apotema d'un octàgon regular de "
     "costat $6$ cm és $3(1+\\sqrt2)\\approx7{,}24$ cm, no $12$ cm."),
   D("$144(1+\\sqrt2)\\approx347{,}64$ cm$^2$", "POTENCIA_DE_SUMA",
     "Aquest valor no divideix per $2$: revisa la fórmula "
     "$\\dfrac{\\text{perímetre}\\cdot\\text{apotema}}{2}$.")],
  ["Calcula primer el costat: $\\dfrac{48}{8}=6$ cm.",
   "L'apotema d'un octàgon regular de costat $L$ és "
   "$\\dfrac{L}{2}(1+\\sqrt2)$; aplica després "
   "$\\dfrac{\\text{perímetre}\\cdot\\text{apotema}}{2}$."],
  ["Costat: $\\dfrac{48}{8}=6$ cm",
   "Apotema: $\\dfrac{6}{2}(1+\\sqrt2)=3(1+\\sqrt2)\\approx7{,}24$ cm",
   "Àrea: $\\dfrac{48\\cdot3(1+\\sqrt2)}{2}=72(1+\\sqrt2)"
   "\\approx173{,}82$ cm$^2$"],
  ex_text="")

Q("142", 142, "", B3, "A",
  "Un hexàgon regular té el costat de $6$ cm. Troba la longitud de la "
  "diagonal que passa pel centre (la que uneix dos vèrtexs oposats).",
  "$12$ cm",
  [D("$6$ cm", "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquest és el costat de l'hexàgon, no la diagonal que passa pel "
     "centre: en un hexàgon regular, aquesta diagonal val el DOBLE "
     "del costat."),
   D("$6\\sqrt3\\approx10{,}39$ cm", "CATET_MAL_IDENTIFICAT",
     "Aquest valor correspon a una altra diagonal de l'hexàgon (la "
     "que uneix dos vèrtexs no oposats), no a la que passa pel centre "
     "unint dos vèrtexs oposats."),
   D("$3$ cm", "INVERTIDA",
     "Aquest valor és la meitat del costat, no el doble: la diagonal "
     "que passa pel centre d'un hexàgon regular val $2\\cdot L$, no "
     "$\\dfrac{L}{2}$.")],
  ["En un hexàgon regular, el centre equidista de tots els vèrtexs "
   "una distància igual al costat (l'hexàgon es descompon en 6 "
   "triangles equilàters).",
   "La diagonal que passa pel centre uneix dos vèrtexs oposats, i és "
   "per tant el doble del costat: $2\\cdot6$."],
  ["En un hexàgon regular, la distància del centre a cada vèrtex "
   "coincideix amb el costat ($6$ cm), perquè el polígon es "
   "descompon en $6$ triangles equilàters",
   "La diagonal que passa pel centre és $2\\cdot6=12$ cm"],
  ex_text="")

E143 = "Determina l'àrea dels triangles descrits a continuació."

Q("143a", 143, "a", B3, "A",
  "Un quadrat de costat $5$ cm queda dividit en dos triangles iguals "
  "per una diagonal. Quina és l'àrea d'un d'aquests triangles?",
  "$12{,}5$ cm$^2$",
  [D("$25$ cm$^2$", "PART_PEL_TOT",
     "Aquesta és l'àrea del QUADRAT sencer, no d'un dels dos triangles "
     "(la meitat): encara falta dividir per $2$."),
   D("$5$ cm$^2$", "ARREL_FACTOR_OBLIDAT",
     "Aquest valor no eleva el costat al quadrat: l'àrea del quadrat "
     "és $5^2=25$ cm$^2$, i el triangle n'és la meitat."),
   D("$50$ cm$^2$", "POTENCIA_DE_SUMA",
     "Aquest valor duplica l'àrea del quadrat en lloc de dividir-la "
     "per $2$: el triangle és la MEITAT del quadrat, no el doble.")],
  ["Una diagonal divideix un quadrat en dos triangles iguals: cada "
   "triangle és la meitat de l'àrea total del quadrat.",
   "Àrea del quadrat: $5^2=25$ cm$^2$; divideix-la per $2$."],
  ["Àrea del quadrat: $5^2=25$ cm$^2$",
   "Àrea del triangle: $\\dfrac{25}{2}=12{,}5$ cm$^2$"],
  ex_text=E143)

Q("143b", 143, "b", B3, "A",
  "Un pentàgon regular de costat $4$ cm i apotema "
  "$a\\approx2{,}75$ cm queda dividit en cinc triangles iguals unint "
  "el centre amb cada vèrtex. Quina és l'àrea d'un d'aquests "
  "triangles?",
  "$5{,}5$ cm$^2$",
  [D("$27{,}5$ cm$^2$", "PART_PEL_TOT",
     "Aquesta és l'àrea del PENTÀGON sencer (els $5$ triangles "
     "junts), no d'un sol triangle: divideix per $5$."),
   D("$11$ cm$^2$", "ARREL_FACTOR_OBLIDAT",
     "Aquest valor no divideix per $2$: l'àrea d'un dels triangles és "
     "$\\dfrac{\\text{costat}\\cdot\\text{apotema}}{2}$, no el "
     "producte sencer."),
   D("$1{,}375$ cm$^2$", "DIVISIO_REPETIDA",
     "Aquest valor sembla dividir per $2$ dues vegades: comprova que "
     "has calculat $4\\cdot2{,}75$ abans de dividir per $2$, no "
     "$2\\cdot1{,}375$.")],
  ["Cada triangle té com a base el costat del pentàgon i com a "
   "alçada l'apotema.",
   "Àrea del triangle: $\\dfrac{4\\cdot2{,}75}{2}$."],
  ["$A=\\dfrac{4\\cdot2{,}75}{2}=\\dfrac{11}{2}=5{,}5$ cm$^2$"],
  ex_text="")

Q("143c", 143, "c", B3, "A",
  "Un hexàgon regular de costat $3$ cm queda dividit en sis triangles "
  "equilàters iguals unint el centre amb cada vèrtex. Quina és "
  "l'àrea d'un d'aquests triangles?",
  "$\\dfrac{9\\sqrt3}{4}\\approx3{,}90$ cm$^2$",
  [D("$\\dfrac{27\\sqrt3}{2}\\approx23{,}38$ cm$^2$",
     "PART_PEL_TOT",
     "Aquesta és l'àrea de l'HEXÀGON sencer (els $6$ triangles "
     "junts), no d'un sol triangle: divideix-la per $6$."),
   D("$9\\sqrt3\\approx15{,}59$ cm$^2$", "ARREL_FACTOR_OBLIDAT",
     "Aquest valor no divideix per $4$: cada triangle equilàter de "
     "costat $L$ té àrea $\\dfrac{L^2\\sqrt3}{4}$, no $L^2\\sqrt3$."),
   D("$4{,}5$ cm$^2$", "POTENCIA_DE_SUMA",
     "Aquest valor no inclou el factor $\\sqrt3$: en un triangle "
     "equilàter, l'àrea no és $\\dfrac{L^2}{2}$.")],
  ["Els sis triangles en què el centre divideix un hexàgon regular "
   "són EQUILÀTERS de costat igual al de l'hexàgon.",
   "Àrea d'un triangle equilàter de costat $L$: "
   "$\\dfrac{L^2\\sqrt3}{4}$, amb $L=3$."],
  ["$A=\\dfrac{3^2\\sqrt3}{4}=\\dfrac{9\\sqrt3}{4}\\approx3{,}90$ "
   "cm$^2$"],
  ex_text="")

Q("143d", 143, "d", B3, "A",
  "Un octàgon regular de costat $3$ cm i apotema $5{,}54$ cm queda "
  "dividit en vuit triangles iguals unint el centre amb cada vèrtex. "
  "Quina és l'àrea d'un d'aquests triangles?",
  "$8{,}31$ cm$^2$",
  [D("$66{,}48$ cm$^2$", "PART_PEL_TOT",
     "Aquesta és l'àrea de l'OCTÀGON sencer (els $8$ triangles "
     "junts), no d'un sol triangle: divideix-la per $8$."),
   D("$16{,}62$ cm$^2$", "ARREL_FACTOR_OBLIDAT",
     "Aquest valor no divideix per $2$: l'àrea d'un dels triangles és "
     "$\\dfrac{\\text{costat}\\cdot\\text{apotema}}{2}$, no el "
     "producte sencer."),
   D("$4{,}155$ cm$^2$", "DIVISIO_REPETIDA",
     "Aquest valor sembla dividir per $2$ dues vegades: comprova que "
     "has calculat $3\\cdot5{,}54$ abans de dividir per $2$.")],
  ["Cada triangle té com a base el costat de l'octàgon i com a "
   "alçada l'apotema.",
   "Àrea del triangle: $\\dfrac{3\\cdot5{,}54}{2}$."],
  ["$A=\\dfrac{3\\cdot5{,}54}{2}=\\dfrac{16{,}62}{2}=8{,}31$ cm$^2$"],
  ex_text="")

E144 = "Calcula l'àrea de les figures següents."

Q("144a", 144, "a", B3, "A",
  "Una figura en forma de mitja lluna és la diferència entre un "
  "semicercle de $12$ cm de diàmetre i un semicercle interior de "
  "$6$ cm de diàmetre. Quina és la seva àrea?",
  "$\\dfrac{27\\pi}{2}\\approx42{,}41$ cm$^2$",
  [D("$18\\pi\\approx56{,}55$ cm$^2$", "FRACCIO_DE_CERCLE_MAL",
     "Aquest valor no divideix per $2$: cal calcular l'àrea de "
     "CADASCUN dels dos semicercles (ja dividida per $2$ respecte "
     "del cercle complet), no la diferència dels cercles complets."),
   D("$45\\pi\\approx141{,}37$ cm$^2$", "SUMA_EN_LLOC_RESTA",
     "Aquest valor SUMA les àrees dels dos semicercles en lloc de "
     "restar-les: la mitja lluna és la diferència entre el "
     "semicercle gran i el petit, no la suma."),
   D("$4{,}5\\pi\\approx14{,}14$ cm$^2$", "ARREL_FACTOR_OBLIDAT",
     "Aquest valor no fa servir els radis correctes: comprova que "
     "has usat radi $6$ cm (semicercle gran, diàmetre $12$) i radi "
     "$3$ cm (semicercle petit, diàmetre $6$), no els diàmetres "
     "directament.")],
  ["L'àrea d'un semicercle de radi $r$ és $\\dfrac{\\pi r^2}{2}$.",
   "Resta l'àrea del semicercle petit (radi $3$ cm) de la del gran "
   "(radi $6$ cm)."],
  ["Semicercle gran: $\\dfrac{\\pi\\cdot6^2}{2}=18\\pi$ cm$^2$",
   "Semicercle petit: $\\dfrac{\\pi\\cdot3^2}{2}=4{,}5\\pi$ cm$^2$",
   "Diferència: $18\\pi-4{,}5\\pi=13{,}5\\pi=\\dfrac{27\\pi}{2}"
   "\\approx42{,}41$ cm$^2$"],
  ex_text=E144,
  nota="La figura de partida no deixa clar el diàmetre de l'arc "
       "interior; aquí es pren $6$ cm, que és la meitat de l'exterior.",
  nota_interna="La imatge de la font no permet determinar el diàmetre "
               "interior amb seguretat; s'adopta la lectura explícita del "
               "solucionari (6 cm) per tenir un valor numèric complet. "
               "Vegeu la nota de transcripció de r-im8.tex.")

Q("144b", 144, "b", B3, "A",
  "D'un cercle de $4$ cm de diàmetre es retalla un sector de "
  "$90^\\circ$ (una quarta part, tipus \"Pac-Man\"). Quina és l'àrea "
  "de la part que queda?",
  "$3\\pi\\approx9{,}42$ cm$^2$",
  [D("$4\\pi\\approx12{,}57$ cm$^2$", "TERME_OBLIDAT_OPERACIO",
     "Aquesta és l'àrea del cercle complet, sense retallar el "
     "sector: recorda restar la porció retallada."),
   D("$\\pi\\approx3{,}14$ cm$^2$", "FRACCIO_DE_CERCLE_MAL",
     "Aquest valor és el sector RETALLAT (la quarta part), no el que "
     "queda de la figura: la figura és la resta del cercle un cop "
     "tret aquest sector."),
   D("$2\\pi\\approx6{,}28$ cm$^2$", "FRACCIO_DE_CERCLE_MAL",
     "Aquest valor correspon a la meitat del cercle, no a les tres "
     "quartes parts que queden després de retallar un sector de "
     "$90^\\circ$ (un quart de volta).")],
  ["El cercle complet, de radi $2$ cm, té àrea $\\pi\\cdot2^2=4\\pi$ "
   "cm$^2$.",
   "Un sector de $90^\\circ$ és $\\dfrac{90}{360}=\\dfrac14$ del "
   "cercle: la figura és les tres quartes parts restants."],
  ["Cercle complet: $\\pi\\cdot2^2=4\\pi$ cm$^2$",
   "Àrea final (tres quarts del cercle): "
   "$\\dfrac34\\cdot4\\pi=3\\pi\\approx9{,}42$ cm$^2$"],
  ex_text="",
  nota="La figura de partida no deixa clar quin angle abasta el sector "
       "retallat; aquí es pren un quart de volta ($90^\\circ$), que és el "
       "que ja diu l'enunciat.",
  nota_interna="La imatge de la font no permet determinar l'amplitud del "
               "sector amb seguretat; s'adopta la lectura explícita del "
               "solucionari (90°, forma de \"Pac-Man\"). Vegeu la nota de "
               "transcripció de r-im8.tex.")

Q("145c", 145, "c", B3, "A",
  "Un quadrat de costat $5$ cm té un forat circular de $2$ cm de "
  "diàmetre. Quina és l'àrea que queda un cop tret el forat?",
  "$25-\\pi\\approx21{,}86$ cm$^2$",
  [D("$25-2\\pi\\approx18{,}72$ cm$^2$", "CATET_MAL_IDENTIFICAT",
     "Has fet servir el diàmetre ($2$ cm) com si fos el radi a "
     "l'hora de calcular l'àrea del forat: el radi és la MEITAT del "
     "diàmetre, és a dir, $1$ cm, i l'àrea del cercle és "
     "$\\pi\\cdot1^2=\\pi$, no $\\pi\\cdot2$."),
   D("$25-4\\pi\\approx12{,}43$ cm$^2$", "CATET_MAL_IDENTIFICAT",
     "Has fet servir el diàmetre ($2$ cm) directament com a radi al "
     "quadrat: l'àrea del cercle és $\\pi\\cdot r^2$ amb "
     "$r=1$ cm (la meitat del diàmetre), és a dir, $\\pi$, no "
     "$\\pi\\cdot2^2$."),
   D("$23$ cm$^2$", "ARREL_FACTOR_OBLIDAT",
     "Aquest valor sembla restar el diàmetre directament ($5^2-2$) "
     "en lloc de restar l'àrea del cercle: cal calcular primer "
     "l'àrea del forat circular ($\\pi\\cdot r^2$), no restar-ne "
     "només la longitud del diàmetre.")],
  ["L'àrea de la figura és l'àrea del quadrat menys l'àrea del cercle "
   "del forat.",
   "El radi del forat és la meitat del diàmetre: $\\dfrac{2}{2}=1$ "
   "cm; àrea del quadrat $5^2=25$ cm$^2$."],
  ["Àrea del quadrat: $5^2=25$ cm$^2$",
   "Radi del forat: $\\dfrac{2}{2}=1$ cm; àrea del forat: "
   "$\\pi\\cdot1^2=\\pi$ cm$^2$",
   "Àrea de la figura: $25-\\pi\\approx21{,}86$ cm$^2$"],
  ex_text="Determina l'àrea de la figura descrita.",
  nota="D'aquest exercici només hi ha l'apartat c: els altres tres eren "
       "figures esglaonades en forma de L i de T que no es poden "
       "descriure sense el dibuix.",
  nota_interna="Apartats a, b i d exclosos: la imatge de la font no permet "
               "reconstruir la disposició de les peces i r-im8.tex no arriba "
               "a cap valor numèric per a ells. Es conserva només el c "
               "(quadrat amb forat circular), inequívoc i amb resultat "
               "numèric complet.")


# =====================================================================
# BLOC 4 — PROBLEMES D'APLICACIÓ: PITÀGORES I ÀREES (exercicis 146-151)
# =====================================================================

Q("146", 146, "", B4, "A",
  "Una torre fa 150 m d'alçada i la seva ombra s'estén 200 m pel "
  "terra pla. Quina distància hi ha des del punt més alt de la torre "
  "fins a l'extrem de l'ombra?",
  "$250$ m",
  [D(tex(150 + 200) + " m", "SUMA_CATETS_SENSE_QUADRAT",
     "Has sumat directament l'alçada i l'ombra ($150+200$) en lloc "
     "d'aplicar Pitàgores: la distància demanada és la hipotenusa "
     "d'un triangle rectangle, no la suma dels catets."),
   D(tex(150 ** 2 + 200 ** 2) + " m", "ARREL_OBLIDADA",
     r"Has calculat $150^2+200^2=62\,500$ correctament, però t'has "
     "deixat l'arrel quadrada final."),
   D(tex(200 - 150) + " m", "SIGNE_PITAGORES",
     "Aquest valor surt de restar l'ombra i l'alçada directament, "
     "sense elevar-les al quadrat ni fer l'arrel: cal aplicar "
     "Pitàgores amb els dos catets, no restar-los.")],
  ["L'alçada de la torre i l'ombra total formen els dos catets d'un "
   "triangle rectangle; la distància demanada n'és la hipotenusa.",
   "Aplica Pitàgores: $\\sqrt{150^2+200^2}$."],
  [r"$%s$ m" % pitagores_tex_raw(150, 200, aprox=False)],
  ex_text="")

Q("147", 147, "", B4, "A",
  "Una escala de 10 m de longitud està recolzada sobre una paret. El "
  "peu de l'escala dista 6 m de la paret. A quina altura arriba "
  "l'escala sobre la paret?",
  "$8$ m",
  [D(tex(10 + 6) + " m", "SUMA_CATETS_SENSE_QUADRAT",
     "Has sumat directament l'escala i la distància al peu "
     "($10+6$) en lloc d'aplicar Pitàgores."),
   D(tex(10 ** 2 + 6 ** 2) + " m", "SIGNE_PITAGORES",
     "L'escala (la longitud total) fa d'hipotenusa, i la distància "
     "del peu a la paret és un catet: cal RESTAR els seus quadrats "
     "per trobar l'altura, no sumar-los."),
   D(tex(64) + " m", "ARREL_OBLIDADA",
     r"Has calculat $10^2-6^2=64$ correctament, però t'has deixat "
     r"l'arrel quadrada final.")],
  ["L'escala fa d'hipotenusa; la distància del peu a la paret i "
   "l'altura on arriba són els dos catets.",
   "Aplica Pitàgores: $\\sqrt{10^2-6^2}$."],
  [r"$%s$ m" % catet_tex_raw(10, 6, aprox=False)],
  ex_text="")

Q("148a", 148, "a", B4, "A",
  "Als costats d'un camp quadrangular s'han plantat 32 arbres, "
  "separats 5 m entre ells. Quant mesura el costat del camp?",
  "$40$ m",
  [D("$32$ m", "CATET_MAL_IDENTIFICAT",
     "Aquest és el nombre d'arbres, no el costat: primer cal trobar "
     "el perímetre total ($32$ arbres $\\times5$ m de separació) i "
     "després dividir-lo entre els $4$ costats."),
   D("$5$ m", "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquesta és la separació entre arbres, no el costat del camp: "
     "encara falta calcular el perímetre total i dividir entre 4."),
   D("$160$ m", "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquest és el PERÍMETRE del camp ($32\\times5$), no el costat: "
     "encara falta dividir-lo entre els $4$ costats.")],
  ["Cada arbre marca una separació de $5$ m al voltant de tot el "
   "perímetre: perímetre $=32\\times5$.",
   "El camp és quadrangular (quadrat): costat "
   "$=\\dfrac{\\text{perímetre}}{4}$."],
  ["Perímetre: $32\\times5=160$ m",
   "Costat: $\\dfrac{160}{4}=40$ m"],
  ex_text="")

Q("148b", 148, "b", B4, "A",
  "Amb les mateixes dades de l'apartat anterior (32 arbres, separats "
  "5 m, camp quadrangular): quina és l'àrea del camp?",
  "$1\\,600$ m$^2$",
  [D("$160$ m$^2$", "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquest és el perímetre del camp, no l'àrea: encara falta "
     "elevar el costat al quadrat."),
   D("$80$ m$^2$", "ARREL_FACTOR_OBLIDAT",
     "Aquest valor no eleva el costat al quadrat: l'àrea d'un "
     "quadrat de costat $L$ és $L^2$, no $2L$."),
   D("$6\\,400$ m$^2$", "CATET_MAL_IDENTIFICAT",
     "Aquest valor eleva el perímetre al quadrat ($160^2$) en lloc "
     "del costat: primer cal trobar el costat ($160:4=40$) i després "
     "elevar-lo al quadrat.")],
  ["El costat del camp és $40$ m (perímetre $160$ m entre $4$).",
   "L'àrea d'un quadrat és costat al quadrat: $40^2$."],
  ["Costat: $\\dfrac{160}{4}=40$ m",
   "Àrea: $40^2=1\\,600$ m$^2$"],
  ex_text="")

Q("149", 149, "", B4, "A",
  "Un senyal de trànsit d'STOP té forma d'octàgon regular, amb una "
  "altura de 90 cm (distància entre costats oposats) i un costat de "
  "37 cm. Quina és la seva àrea?",
  "$6\\,660$ cm$^2$",
  [D("$3\\,330$ cm$^2$", "ARREL_FACTOR_OBLIDAT",
     "Aquest valor divideix per $2$ una vegada de més: un cop tens "
     "el perímetre i l'apotema, l'àrea és "
     "$\\dfrac{\\text{perímetre}\\cdot\\text{apotema}}{2}$, i ja has "
     "aplicat aquesta divisió si has fet $\\dfrac{296\\cdot45}{2}$ "
     "correctament — comprova que no l'has tornat a dividir per $2$."),
   D("$16\\,650$ cm$^2$", "CATET_MAL_IDENTIFICAT",
     "Aquest valor sembla fet servir l'alçada sencera ($90$ cm) com "
     "si fos l'apotema, en lloc de la seva meitat ($45$ cm): en un "
     "octàgon regular, l'alçada (distància entre costats oposats) és "
     "el DOBLE de l'apotema."),
   D("$1\\,665$ cm$^2$", "DIVISIO_REPETIDA",
     "Aquest valor sembla dividir per $2$ dues vegades més del "
     "compte: revisa el càlcul $\\dfrac{296\\cdot45}{2}$ pas a pas.")],
  ["L'apotema d'un octàgon regular és la meitat de l'alçada (la "
   "distància entre dos costats oposats): $\\dfrac{90}{2}=45$ cm.",
   "Perímetre: $8\\times37$; àrea: "
   "$\\dfrac{\\text{perímetre}\\cdot\\text{apotema}}{2}$."],
  ["Apotema: $\\dfrac{90}{2}=45$ cm",
   "Perímetre: $8\\times37=296$ cm",
   "Àrea: $\\dfrac{296\\times45}{2}=6\\,660$ cm$^2$"],
  ex_text="")

Q("150", 150, "", B4, "A",
  "Cada un dels 50 pisos d'un edifici té la planta d'un hexàgon "
  "regular de costat 30 m. Si el terra té una moqueta que costa "
  "20 €/m$^2$, calcula el preu total pagat per la moqueta de "
  "l'edifici.",
  "$2\\,338\\,268{,}59$ €",
  [D("$46\\,765{,}37$ €", "TERME_OBLIDAT_OPERACIO",
     "Aquest valor sembla el cost d'un sol pis (àrea $\\times20$ €), "
     "sense multiplicar pels $50$ pisos de l'edifici."),
   D("$1\\,350\\sqrt3\\approx2\\,338{,}27$ €", "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquest valor és l'àrea (en m$^2$) d'un sol pis, sense "
     "multiplicar-la ni pel preu del m$^2$ ni pels $50$ pisos."),
   D("$116\\,913{,}43$ €", "TERME_OBLIDAT_OPERACIO",
     "Aquest valor és el cost total de la moqueta d'un SOL pis "
     "($20$ €/m$^2$ inclosos), sense multiplicar pels $50$ pisos de "
     "l'edifici.")],
  ["Calcula primer l'àrea d'un pis (hexàgon regular de costat 30 m): "
   "$A=\\dfrac{3L^2\\sqrt3}{2}$.",
   "Multiplica l'àrea d'un pis pel preu del m$^2$ i pels $50$ pisos "
   "de l'edifici."],
  ["Àrea d'un pis: $\\dfrac{3\\cdot30^2\\sqrt3}{2}=1\\,350\\sqrt3"
   "\\approx2\\,338{,}27$ m$^2$",
   "Cost d'un pis: $2\\,338{,}27\\times20\\approx46\\,765{,}37$ €",
   "Cost total ($50$ pisos): $46\\,765{,}37\\times50"
   "\\approx2\\,338\\,268{,}59$ €"],
  ex_text="")

Q("151", 151, "", B4, "A",
  "Un pastisser ha cobert de sucre la part superior de 200 "
  "rosquilles: cadascuna té diàmetre exterior 6 cm i un forat central "
  "de diàmetre 5 cm. Si ha fet servir 5 kg de sucre, quants grams de "
  "sucre fan falta per cobrir cada centímetre quadrat de rosquilla?",
  "$\\approx2{,}89$ g/cm$^2$",
  [D("$\\approx0{,}91$ g/cm$^2$", "FACTOR_OBLIDAT",
     "Aquest valor sembla dividir els $5\\,000$ g entre l'àrea d'UNA "
     "sola rosquilla, no entre l'àrea total de les $200$ rosquilles."),
   D("$\\approx28{,}94$ g/cm$^2$", "TERME_OBLIDAT_OPERACIO",
     "Aquest valor no multiplica l'àrea d'una rosquilla per les "
     "$200$ unitats abans de dividir el sucre: revisa que has "
     "calculat l'àrea TOTAL, no la d'una sola rosquilla."),
   D("$\\approx1{,}45$ g/cm$^2$", "CATET_MAL_IDENTIFICAT",
     "Aquest valor sembla fet servir els diàmetres directament com a "
     "radis en calcular l'àrea de la corona circular: el radi és la "
     "MEITAT del diàmetre ($3$ cm i $2{,}5$ cm), no el diàmetre "
     "sencer ($6$ cm i $5$ cm).")],
  ["L'àrea de la part superior d'una rosquilla és una corona "
   "circular: àrea del cercle exterior (radi $3$ cm) menys la del "
   "forat (radi $2{,}5$ cm).",
   "Multiplica l'àrea d'una rosquilla per les $200$ unitats, i "
   "divideix els $5\\,000$ g de sucre entre aquesta àrea total."],
  ["Àrea d'una rosquilla: $\\pi\\cdot3^2-\\pi\\cdot2{,}5^2"
   "=8{,}64$ cm$^2$",
   "Àrea total ($200$ rosquilles): $8{,}64\\times200"
   "=1\\,727{,}88$ cm$^2$",
   "Sucre per cm$^2$: $\\dfrac{5\\,000}{1\\,727{,}88}"
   "\\approx2{,}89$ g/cm$^2$"],
  ex_text="",
  nota="La \"rosquilla\" es tracta com una corona circular plana (només "
       "la cara de dalt, que és la que es cobreix de sucre), no com un "
       "cos de tres dimensions: els $6$ cm i els $5$ cm són diàmetres, "
       "l'exterior i el del forat.",
  nota_interna="Lectura presa de la nota de transcripció de r-im8.tex.")
