# -*- coding: utf-8 -*-
"""c_semblanca.py — Full 8: Teorema de Tales. Semblança.

Genera els ítems dels exercicis 152-169, que corresponen a `im9.tex` del
repositori LaTeX font. Organitzats en 4 blocs:
  tales        (152, 153)        teorema de Tales i triangles en posició
                                  de Tales
  semblanca    (154, 155)        raó de semblança i criteris de semblança
                                  de triangles
  escales      (156, 158, 159,   escala numèrica i problemes de mapes/
               160)              plànols
  aplicacions  (161-169)         aplicacions de la semblança: ombres,
                                  reflexos, alçades inaccessibles

Recompte i exclusions: 38 ítems bruts sobre els 18 exercicis 152-169
(comptant \\item dins d'apartats; un exercici sense apartats compta 1).
D'aquests, se n'exclouen 6:
  - 152d, 152g, 152h: el mateix `r-im9.tex` (solucionari font) els deixa
    sense valor numèric, perquè depenen de la posició exacta d'una mesura
    sobre una figura de rectes paral·leles amb tres rectes que no es pot
    llegir amb prou seguretat. No s'inventa cap valor: es descarten els
    tres apartats sencers, que és el criteri general del projecte per a
    qualsevol ítem que depengui d'una figura il·legible.
  - 157a, 157b, 157c: aquest exercici demana l'altura real de tres
    objectes A PARTIR DE MESURAR-LA FÍSICAMENT sobre el dibuix original
    amb un regle; no hi ha cap xifra al text que permeti calcular-ho, i
    el mateix `r-im9.tex` ho deixa com "Pendent de mesurar". No es pot
    generar cap pregunta de resposta fixa per a aquest exercici: els 3
    apartats se salten sencers.

38 - 3 (152d/g/h) - 3 (157a/b/c) = 32 ítems finals, repartits:
  tales: 152(a,b,c,e,f) + 153(a,b,c) = 5+3 = 8
  semblanca: 154(a,b,c,d) + 155(a,b,c,d,e) = 4+5 = 9
  escales: 156(a,b) + 158 + 159 + 160(a,b) = 2+1+1+2 = 6
  aplicacions: 161..169 excepte 157 (9 exercicis autònoms) = 9
  TOTAL: 8+9+6+9 = 32

Cap resposta s'escriu a mà: cada resultat s'ha calculat de manera
independent amb `fractions.Fraction` (aritmètica exacta) per als casos
racionals, i amb `sympy` (arrels/tangents exactes, arrodonides només en
la presentació) per als casos que ho requereixen (162, 167), abans
d'escriure cap `Q()`. S'ha contrastat cada valor contra `r-im9.tex` (el
solucionari LaTeX subministrat) sense trobar-hi cap discrepància.

Notes (`nota=`) als ítems que hereten una interpretació de figura del propi
`im9.tex`/`r-im9.tex` (no inventada aquí, sinó ja explicitada al fitxer
font com "nota de transcripció"): 152a, 152b, 152c, 152e, 152f (posició
exacta de cada mesura a la figura de Tales) i 154a, 154b, 154c
(correspondència exacta entre costats dels dos triangles). Es tracta la
interpretació ja proposada pel fitxer font com la lectura adoptada,
deixant-ne constància amb `nota` en lloc de silenciar la incertesa.
"""
from fractions import Fraction as F
import sympy as sp
from lib import Q, D, DT, tex, texd, dificultats
from figures.semblanca import tales, parella_semblants, escala_regla, ombra

# --------------------------------------------------------------------
# Dificultat de cada exercici (1 directa, 2 encadenada, 3 completa).
# Full 8 · Tales i semblança
# Vegeu l'escala completa a lib.py. L'itinerari fa servir aquest camp
# per graduar el recorregut, de manera que canviar-hi un número canvia
# l'ordre en què l'alumne es troba els exercicis.
# --------------------------------------------------------------------
dificultats({
    152: 1,  # proporció de Tales amb tres dades i una incògnita
    153: 2,
    154: 1,  # raó de semblança donada la parella: proporció directa
    155: 2,  # decidir si són semblants i dir per quin criteri (153, homòlegs)
    156: 1,  # llegir i escriure una escala numèrica
    158: 2,  # escales amb canvi d'unitats pel mig
    159: 2,
    160: 2,
    161: 3,  # problemes: muntar la semblança a partir de l'enunciat
    162: 3,
    163: 3,
    164: 3,
    165: 3,
    166: 3,
    167: 3,
    168: 3,
    169: 3,
})


B1 = "tales"
B2 = "semblanca"
B3 = "escales"
B4 = "aplicacions"


def texirr(val, dec=2):
    """Valor irracional (float o sympy) -> LaTeX decimal arrodonit, amb
    coma catalana. Només per als pocs ítems d'aquest full amb resultat
    irracional (162: Pitàgores; 167: tangents d'angles no notables)."""
    s = "%.*f" % (dec, float(val))
    return s.replace(".", "{,}")


assert texirr(sp.sqrt(89)) == "9{,}43"


# =====================================================================
# BLOC 1 — TEOREMA DE TALES (exercicis 152, 153)
# =====================================================================

# ---- exercici 152: x en figures de rectes paral·leles ----
# Nota de transcripció d'im9.tex (vegeu docstring): la posició exacta de
# cada mesura respecte al vèrtex de les secants s'ha llegit de la manera
# més estàndard (proporció directa entre segments corresponents), tal com
# ja proposa r-im9.tex. S'hi passa `nota` explicant-ho. Els apartats d, g,
# h (tres rectes paral·leles) es descarten: ni im9.tex ni r-im9.tex en
# donen un valor numèric fiable (vegeu docstring del mòdul).
E152 = ("Calcula el valor de $x$ en aquestes figures de rectes "
        "paral·leles tallades per dues rectes secants.")
# La nota que hi havia aqui explicava de paraula com s'havien d'aparellar
# els segments, perque la figura no ho deixava clar: les mesures anaven
# escrites sota els PUNTS i no sobre el tram que mesuraven. Ara cada mesura
# porta la seva cota, amb les linies auxiliars als dos extrems del tram, i
# la figura ho diu tota sola. Mantenir la nota seria soroll.
NOTA152 = ""
NOTA152_INT = ("Nota de transcripció d'im9.tex: la posició exacta de cada "
               "mesura respecte al vèrtex s'ha llegit com a proporció directa "
               "entre segments corresponents, tal com ja proposa r-im9.tex. "
               "Convé confirmar-ho contra la figura original abans de "
               "publicar.")

Q("152a", 152, "a", B1, "A",
  "Una secant té segments de $2{,}5$ cm i $2$ cm; l'altra, $x$ i "
  "$3$ cm (segments corresponents en el mateix ordre).",
  "$3{,}75$ cm",
  [D("$2{,}4$ cm", "CREUAMENT_INVERTIT",
     "Has muntat la proporció amb els segments de cada secant "
     "intercanviats. Planteja $\\dfrac{2{,}5}{2}=\\dfrac{x}{3}$, no la "
     "proporció inversa."),
   D("$7{,}5$ cm", "TERME_OBLIDAT_OPERACIO",
     "Aquest valor surt de $2{,}5\\cdot3$ sense dividir per $2$: "
     "$x=\\dfrac{2{,}5\\cdot3}{2}$, no només el numerador."),
   D("$1{,}67$ cm", "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Sembla que has calculat $2:2{,}5\\cdot3$ amb els termes "
     "intercanviats: revisa quin segment fa de numerador a cada "
     "secant.")],
  ["Pel teorema de Tales, els segments de cada secant guarden la "
   "mateixa proporció: $\\dfrac{2{,}5}{2}=\\dfrac{x}{3}$.",
   "Aïlla $x$ multiplicant en creu."],
  [r"$\dfrac{2{,}5}{2}=\dfrac{x}{3} \;\Longrightarrow\; "
   r"x=\dfrac{2{,}5\cdot3}{2}$",
   "$x=3{,}75$ cm"],
  ex_text=E152, nota=NOTA152, nota_interna=NOTA152_INT,
  figura=tales([("A", 2.5), ("B", (3.75, "x"))], [("A'", 2), ("B'", 3)], "x"))

Q("152b", 152, "b", B1, "A",
  "Una secant té segments de $2$ cm i $4$ cm; l'altra, $3$ cm i $x$ "
  "cm (segments corresponents en el mateix ordre).",
  "$6$ cm",
  [D("$1{,}5$ cm", "CREUAMENT_INVERTIT",
     "Has intercanviat quin segment correspon a quin: planteja "
     "$\\dfrac{4}{2}=\\dfrac{x}{3}$, amb el segment MÉS gran de la "
     "primera secant ($4$) corresponent a $x$."),
   D("$12$ cm", "TERME_OBLIDAT_OPERACIO",
     "Aquest valor surt de $4\\cdot3$ sense dividir per $2$: "
     "$x=\\dfrac{4\\cdot3}{2}$, no només el numerador."),
   D("$4$ cm", "PROGRESSIO_INVENTADA",
     "Aquest valor no surt de la proporció: comprova "
     "$x=\\dfrac{4\\cdot3}{2}$ pas a pas en lloc de repetir un "
     "segment que ja apareixia a l'enunciat.")],
  ["Pel teorema de Tales, els segments de cada secant guarden la "
   "mateixa proporció: $\\dfrac{4}{2}=\\dfrac{x}{3}$.",
   "Aïlla $x$ multiplicant en creu."],
  [r"$\dfrac{4}{2}=\dfrac{x}{3} \;\Longrightarrow\; "
   r"x=\dfrac{4\cdot3}{2}$",
   "$x=6$ cm"],
  ex_text=E152, nota=NOTA152, nota_interna=NOTA152_INT,
  figura=tales([("A", 2), ("B", 4)], [("A'", 3), ("B'", (6, "x"))], "x"))

Q("152c", 152, "c", B1, "A",
  "Una secant té segments de $8$ cm i $4$ cm; l'altra, $x$ i $6$ cm "
  "(segments corresponents en el mateix ordre).",
  "$12$ cm",
  [D("$3$ cm", "CREUAMENT_INVERTIT",
     "Has intercanviat quin segment correspon a quin: planteja "
     "$\\dfrac{8}{4}=\\dfrac{x}{6}$, no la proporció amb els termes "
     "invertits."),
   D("$48$ cm", "TERME_OBLIDAT_OPERACIO",
     "Aquest valor surt de $8\\cdot6$ sense dividir per $4$: "
     "$x=\\dfrac{8\\cdot6}{4}$, no només el numerador."),
   D("$4{,}5$ cm", "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Sembla que has calculat $6\\cdot4:8$ amb un altre aparellament "
     "de segments: revisa quins dos segments són corresponents entre "
     "les dues secants.")],
  ["Pel teorema de Tales, els segments de cada secant guarden la "
   "mateixa proporció: $\\dfrac{8}{4}=\\dfrac{x}{6}$.",
   "Aïlla $x$ multiplicant en creu."],
  [r"$\dfrac{8}{4}=\dfrac{x}{6} \;\Longrightarrow\; "
   r"x=\dfrac{8\cdot6}{4}$",
   "$x=12$ cm"],
  ex_text=E152, nota=NOTA152, nota_interna=NOTA152_INT,
  figura=tales([("A", 8), ("B", 4)], [("A'", (12, "x")), ("B'", 6)], "x"))

Q("152e", 152, "e", B1, "A",
  "Una secant té segments de $x$ i $10$ cm; l'altra, $5$ cm i "
  "$8$ cm (segments corresponents en el mateix ordre).",
  "$6{,}25$ cm",
  [D("$16$ cm", "CREUAMENT_INVERTIT",
     "Has intercanviat quina fracció és quina: planteja "
     "$\\dfrac{x}{10}=\\dfrac{5}{8}$, amb $x$ corresponent al segment "
     "de $5$ cm, no al de $8$ cm."),
   D("$4$ cm", "PRODUCTE_MAL",
     "Aquest valor surt de $\\dfrac{5\\cdot8}{10}$: revisa quin "
     "segment és el que multiplica per $10$ i quin hi divideix."),
   D("$50$ cm", "TERME_OBLIDAT_OPERACIO",
     "Aquest valor surt de $10\\cdot5$ sense dividir per $8$: "
     "$x=\\dfrac{10\\cdot5}{8}$, no només el numerador.")],
  ["Pel teorema de Tales, els segments de cada secant guarden la "
   "mateixa proporció: $\\dfrac{x}{10}=\\dfrac{5}{8}$.",
   "Aïlla $x$ multiplicant en creu."],
  [r"$\dfrac{x}{10}=\dfrac{5}{8} \;\Longrightarrow\; "
   r"x=\dfrac{10\cdot5}{8}$",
   "$x=6{,}25$ cm"],
  ex_text=E152, nota=NOTA152, nota_interna=NOTA152_INT,
  figura=tales([("A", (6.25, "x")), ("B", 10)], [("A'", 5), ("B'", 8)], "x"))

Q("152f", 152, "f", B1, "A",
  "Una secant té segments de $4{,}8$ cm i $2$ cm; l'altra, $x$ i "
  "$3$ cm (segments corresponents en el mateix ordre).",
  "$7{,}2$ cm",
  [D("$1{,}25$ cm", "CREUAMENT_INVERTIT",
     "Has muntat la proporció amb els segments de cada secant "
     "intercanviats. Planteja $\\dfrac{4{,}8}{2}=\\dfrac{x}{3}$, no la "
     "proporció inversa."),
   D("$14{,}4$ cm", "TERME_OBLIDAT_OPERACIO",
     "Aquest valor surt de $4{,}8\\cdot3$ sense dividir per $2$: "
     "$x=\\dfrac{4{,}8\\cdot3}{2}$, no només el numerador."),
   D("$0{,}83$ cm", "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Sembla que has dividit $2:4{,}8\\cdot3$ amb els termes "
     "intercanviats: revisa quin segment fa de numerador a cada "
     "secant.")],
  ["Pel teorema de Tales, els segments de cada secant guarden la "
   "mateixa proporció: $\\dfrac{4{,}8}{2}=\\dfrac{x}{3}$.",
   "Aïlla $x$ multiplicant en creu."],
  [r"$\dfrac{4{,}8}{2}=\dfrac{x}{3} \;\Longrightarrow\; "
   r"x=\dfrac{4{,}8\cdot3}{2}$",
   "$x=7{,}2$ cm"],
  ex_text=E152, nota=NOTA152, nota_interna=NOTA152_INT,
  figura=tales([("A", 4.8), ("B", 2)], [("A'", (7.2, "x")), ("B'", 3)], "x"))


# ---- exercici 153: figures en posició de Tales (triangles O-A-B i
# O-A'-B', amb OA, OB, OA', OB', OC, OC' i AB, BC, A'B', B'C') ----
E153 = ("Dos triangles estan en posició de Tales des del vèrtex $O$, amb "
        "els costats $OA$, $OB$ i $OC$ sobre una recta, i $OA'$, $OB'$ i "
        "$OC'$ sobre una altra (amb $A,B,C$ i $A',B',C'$ en el mateix "
        "ordre a cada recta).")

Q("153a", 153, "a", B1, "A",
  "Si $OA=2$ cm, $OB=5$ cm, $OA'=2{,}6$ cm i $OC'=11{,}7$ cm, "
  "quant val $BC$?",
  "$4$ cm",
  [D("$9$ cm", "PROGRESSIO_INVENTADA",
     "$9$ cm és el valor de $OC$, no de $BC=OC-OB$: un cop tinguis "
     "$OC$, encara has de restar-hi $OB$."),
   D("$6{,}5$ cm", "PROGRESSIO_INVENTADA",
     "$6{,}5$ cm és el valor de $OB'$, no de $BC$: torna a mirar "
     "quina distància et demana l'enunciat."),
   D("$3{,}25$ cm", "CREUAMENT_INVERTIT",
     "Aquest valor surt d'aplicar la raó de semblança "
     "$k=\\frac{OA'}{OA}$ a $OB$ en lloc de calcular primer $OC$ i "
     "després restar-hi $OB$: $BC=OC-OB$, i $OC=\\frac{OC'}{k}$.")],
  ["La raó entre els dos triangles és $k=\\dfrac{OA'}{OA}="
   "\\dfrac{2{,}6}{2}=1{,}3$.",
   "Amb aquesta raó, $OC=\\dfrac{OC'}{k}$, i després "
   "$BC=OC-OB$."],
  [r"$k=\dfrac{OA'}{OA}=\dfrac{2{,}6}{2}=1{,}3$",
   r"$OC=\dfrac{OC'}{k}=\dfrac{11{,}7}{1{,}3}=9$ cm",
   "$BC=OC-OB=9-5=4$ cm"],
  ex_text=E153,
  # `acumulat=False`: OA, OB i OC' són distàncies ABSOLUTES des d'O (com
  # les anomena l'enunciat), no trams consecutius — a diferència de 152,
  # on "segments de 2,5 i 2 cm" sí que són trams. `C` s'hi afegeix amb el
  # seu valor derivat (OC=9, calculat a la resolució) perquè hi hagi una
  # segona posició completa (a més d'A-A') i es dibuixin dues transversals
  # paral·leles; sense C, l'única parella completa era A-A' i el dibuix no
  # arribava a mostrar cap joc de paral·leles (bug real detectat en
  # revisió visual).
  # B' s'hi posa amb el seu valor derivat (OB' = 5·2,6/2 = 6,5): sense ell
  # la transversal BB' no es dibuixava i la figura ensenyava dues rectes
  # paral·leles en comptes de tres. El valor no es publica enlloc —amb
  # mesures absolutes la figura nomes hi escriu les lletres—, aixi que no
  # revela res que l'alumne hagi de calcular.
  figura=tales([("A", 2), ("B", 5), ("C", 9)],
              [("A'", 2.6), ("B'", 6.5), ("C'", 11.7)], "BC",
              acumulat=False))

Q("153b", 153, "b", B1, "A",
  "Si $OB=9$ cm, $OA'=4$ cm, $OB'=12$ cm i $OC'=18$ cm, quant val "
  "$AB$?",
  "$6$ cm",
  [D("$3$ cm", "PROGRESSIO_INVENTADA",
     "$3$ cm és el valor de $OA$, no de $AB=OB-OA$: un cop tinguis "
     "$OA$, encara has de restar-la de $OB$."),
   D("$13{,}5$ cm", "PROGRESSIO_INVENTADA",
     "$13{,}5$ cm és el valor de $OC$, no de $AB$: torna a mirar "
     "quina distància et demana l'enunciat."),
   D("$9{,}75$ cm", "CREUAMENT_INVERTIT",
     "Aquest valor surt d'aplicar la raó $k$ directament a $OB$ en "
     "comptes de calcular primer $OA$ amb $k=\\frac{OB'}{OB}$ i "
     "després restar-la de $OB$: $AB=OB-OA$.")],
  ["La raó entre els dos triangles és $k=\\dfrac{OB'}{OB}="
   "\\dfrac{12}{9}=1{,}33\\overline{3}$.",
   "Amb aquesta raó, $OA=\\dfrac{OA'}{k}$, i després "
   "$AB=OB-OA$."],
  [r"$k=\dfrac{OB'}{OB}=\dfrac{12}{9}=\dfrac{4}{3}$",
   r"$OA=\dfrac{OA'}{k}=4\cdot\dfrac{3}{4}=3$ cm",
   "$AB=OB-OA=9-3=6$ cm"],
  ex_text=E153,
  # `acumulat=False`: OB, OA', OB' i OC' són distàncies absolutes des d'O.
  # `A` s'hi afegeix amb el seu valor derivat (OA=3, calculat a la
  # resolució i ja usat com a distractor) perquè hi hagi dues posicions
  # completes (A-A' i B-B') i es dibuixin dues transversals paral·leles.
  # C amb el seu valor derivat (OC = 18·3/4 = 13,5), pel mateix motiu que
  # a 153a: sense ell faltava la transversal CC'.
  figura=tales([("A", 3), ("B", 9), ("C", 13.5)],
              [("A'", 4), ("B'", 12), ("C'", 18)], "AB",
              acumulat=False))

Q("153c", 153, "c", B1, "A",
  "Si $OA=5$ cm, $OC=22{,}5$ cm, $OC'=36$ cm i $OB'=24$ cm, quant "
  "val $AB$?",
  "$10$ cm",
  [D("$8$ cm", "PROGRESSIO_INVENTADA",
     "$8$ cm és el valor de $OA'$, no de $AB=OB-OA$: un cop tinguis "
     "$OB$, encara l'has de comparar amb $OA$, no amb $OA'$."),
   D("$15$ cm", "PROGRESSIO_INVENTADA",
     "$15$ cm és el valor de $OB$, no de $AB$: encara has de "
     "restar-hi $OA=5$ cm."),
   D("$6{,}25$ cm", "CREUAMENT_INVERTIT",
     "Aquest valor surt d'aplicar la raó $k$ a $OA$ en comptes "
     "d'usar-la per trobar $OB$ a partir de $OB'$: "
     "$OB=\\frac{OB'}{k}$, i després $AB=OB-OA$.")],
  ["La raó entre els dos triangles és $k=\\dfrac{OC'}{OC}="
   "\\dfrac{36}{22{,}5}=1{,}6$.",
   "Amb aquesta raó, $OB=\\dfrac{OB'}{k}$, i després "
   "$AB=OB-OA$."],
  [r"$k=\dfrac{OC'}{OC}=\dfrac{36}{22{,}5}=1{,}6$",
   r"$OB=\dfrac{OB'}{k}=\dfrac{24}{1{,}6}=15$ cm",
   "$AB=OB-OA=15-5=10$ cm"],
  ex_text=E153,
  # `acumulat=False`: OA, OC, OB' i OC' són distàncies absolutes des d'O.
  # `B` s'hi afegeix amb el seu valor derivat (OB=15, calculat a la
  # resolució i ja usat com a distractor) perquè hi hagi dues posicions
  # completes (B-B' i C-C') i es dibuixin dues transversals paral·leles.
  # A' amb el seu valor derivat (OA' = 5·24/15 = 8), pel mateix motiu.
  figura=tales([("A", 5), ("B", 15), ("C", 22.5)],
              [("A'", 8), ("B'", 24), ("C'", 36)], "AB",
              acumulat=False))


# =====================================================================
# BLOC 2 — SEMBLANÇA DE TRIANGLES (exercicis 154, 155)
# =====================================================================

# ---- exercici 154: costat desconegut en triangles semblants ----
# Nota de transcripció d'im9.tex (vegeu docstring): la correspondència
# entre costats dels dos triangles s'ha establert emparellant els costats
# de mida més semblant, tal com ja indica explícitament el propi enunciat
# font per a cada apartat.
E154 = "Calcula la longitud dels costats desconeguts en aquests parells de triangles semblants."
NOTA154 = ("La correspondència entre costats del triangle petit i el "
           "gran s'ha establert seguint la indicació explícita del propi "
           "enunciat, que ja diu quins costats es corresponen entre si.")

Q("154a", 154, "a", B2, "A",
  "Triangle petit de costats $3$ cm i $5$ cm; triangle gran de "
  "costats $4$ cm (correspon al de $3$ cm) i $x$ (correspon al de "
  "$5$ cm).",
  "$6{,}67$ cm (aproximadament)",
  [D("$3{,}75$ cm", "CREUAMENT_INVERTIT",
     "Aquest valor surt d'aplicar la raó invertida "
     "$k=\\frac{3}{4}$ al costat de $5$ cm; la raó és "
     "$k=\\frac{4}{3}$ (del costat gran conegut al petit conegut), "
     "no la inversa."),
   D("$6$ cm", "PROGRESSIO_INVENTADA",
     "Aquest valor no surt de la proporció correcta: calcula "
     "$5\\cdot\\frac{4}{3}$ pas a pas en lloc d'arrodonir "
     "$\\frac{20}{3}$ a un nombre enter."),
   D("$20$ cm", "TERME_OBLIDAT_OPERACIO",
     "Aquest valor surt de $5\\cdot4$ sense dividir per $3$: "
     "la raó de semblança és $\\frac{4}{3}$, i cal multiplicar-la "
     "pel costat, no només multiplicar pel numerador.")],
  ["La raó de semblança és $k=\\dfrac{4}{3}$ (el costat de $4$ cm "
   "correspon al de $3$ cm).",
   "Aplica aquesta raó al costat de $5$ cm: $x=5\\cdot k$."],
  [r"$k=\dfrac{4}{3}$",
   r"$x=5\cdot\dfrac{4}{3}=\dfrac{20}{3}\approx6{,}67$ cm"],
  ex_text=E154, nota=NOTA154,
  figura=parella_semblants([("", 3), ("", 5), ("", None)],
                           [("", 4), ("", "x"), ("", None)]))

Q("154b", 154, "b", B2, "A",
  "Triangle gran de costats $8$ cm, $10$ cm i $7$ cm; triangle "
  "petit de costat $6$ cm (correspon al de $8$ cm), amb els altres "
  "dos costats desconeguts. Quant valen?",
  "$7{,}5$ cm i $5{,}25$ cm",
  [D("$13{,}33$ cm i $9{,}33$ cm", "CREUAMENT_INVERTIT",
     "Aquest valor surt d'aplicar la raó invertida "
     "$k=\\frac{8}{6}$ als costats de $10$ i $7$ cm; la raó és "
     "$k=\\frac{6}{8}=0{,}75$ (del costat petit conegut al gran "
     "conegut), no la inversa."),
   D("$8$ cm i $5$ cm", "PROGRESSIO_INVENTADA",
     "Aquests valors no surten de la proporció: calcula "
     "$10\\cdot0{,}75$ i $7\\cdot0{,}75$ pas a pas en lloc "
     "d'arrodonir a nombres enters propers."),
   D("$60$ cm i $42$ cm", "TERME_OBLIDAT_OPERACIO",
     "Aquests valors surten de $10\\cdot6$ i $7\\cdot6$ sense "
     "dividir per $8$: la raó de semblança és $\\frac{6}{8}$, no "
     "només el $6$.")],
  ["La raó de semblança és $k=\\dfrac{6}{8}=0{,}75$ (el costat de "
   "$6$ cm correspon al de $8$ cm).",
   "Aplica aquesta raó als costats de $10$ cm i $7$ cm."],
  [r"$k=\dfrac{6}{8}=0{,}75$",
   r"$10\cdot0{,}75=7{,}5$ cm$\qquad 7\cdot0{,}75=5{,}25$ cm"],
  ex_text=E154, nota=NOTA154,
  figura=parella_semblants([("", 8), ("", 10), ("", 7)],
                           [("", 6), ("", "x"), ("", "x")]))

Q("154c", 154, "c", B2, "A",
  "Triangle gran de costat $6$ cm (desconegut als altres dos); "
  "triangle petit de costats $3$ cm, $5$ cm i $4$ cm, on el de $5$ "
  "cm (el més llarg) correspon al de $6$ cm. Quant valen els altres "
  "dos costats del triangle gran?",
  "$3{,}6$ cm i $4{,}8$ cm",
  [D("$2{,}5$ cm i $3{,}33$ cm", "CREUAMENT_INVERTIT",
     "Aquest valor surt d'aplicar la raó invertida "
     "$k=\\frac{5}{6}$ als costats de $3$ i $4$ cm; la raó és "
     "$k=\\frac{6}{5}=1{,}2$ (del costat conegut del triangle "
     "gran al del petit), no la inversa."),
   D("$3$ cm i $4$ cm", "PROGRESSIO_INVENTADA",
     "Aquests valors són els costats del triangle PETIT, no els "
     "del triangle gran que calen: encara has d'aplicar-hi la "
     "raó de semblança."),
   D("$18$ cm i $24$ cm", "TERME_OBLIDAT_OPERACIO",
     "Aquests valors surten de $3\\cdot6$ i $4\\cdot6$ sense "
     "dividir per $5$: la raó de semblança és $\\frac{6}{5}$, no "
     "només el $6$.")],
  ["La raó de semblança és $k=\\dfrac{6}{5}=1{,}2$ (el costat de "
   "$6$ cm correspon al de $5$ cm, el més llarg del triangle "
   "petit).",
   "Aplica aquesta raó als altres dos costats del triangle petit "
   "($3$ cm i $4$ cm)."],
  [r"$k=\dfrac{6}{5}=1{,}2$",
   r"$3\cdot1{,}2=3{,}6$ cm$\qquad 4\cdot1{,}2=4{,}8$ cm"],
  ex_text=E154, nota=NOTA154,
  figura=parella_semblants([("", 5), ("", 3), ("", 4)],
                           [("", 6), ("", "x"), ("", "x")]))

Q("154d", 154, "d", B2, "B",
  "Dos triangles isòsceles tenen els costats iguals de $5$ cm "
  "cadascun, amb bases respectives de $3{,}2$ cm i $2$ cm. Són "
  "semblants?",
  "No, perquè la raó entre els costats iguals ($1$) no coincideix "
  "amb la raó entre les bases ($1{,}6$)",
  [D("Sí, perquè els costats iguals mesuren el mateix ($5$ cm "
     "als dos triangles)", "RAO_NOMES_UN_COSTAT",
     "Que un parell de costats coincideixi no basta: cal que "
     "TOTS els costats guardin la mateixa raó. Aquí les bases "
     "($3{,}2$ cm i $2$ cm) no guarden la mateixa raó que els "
     "costats iguals."),
   D("Sí, perquè els dos triangles són isòsceles",
     "CRITERI_SEMBLANCA_INSUFICIENT",
     "Ser isòsceles només diu que hi ha dos costats iguals entre "
     "ells dins de CADA triangle; no diu res sobre la proporció "
     "entre els dos triangles, que és el que cal comprovar."),
   D("No es pot saber sense conèixer els angles",
     "CRITERI_SEMBLANCA_INSUFICIENT",
     "Amb els tres costats de cada triangle ja n'hi ha prou per "
     "aplicar el criteri costat-costat-costat: no calen els "
     "angles per descartar la semblança.")],
  ["Per ser semblants, TOTS els costats han de guardar la mateixa "
   "raó, no només alguns.",
   "Compara la raó dels costats iguals ($\\frac{5}{5}$) amb la raó "
   "de les bases ($\\frac{3{,}2}{2}$)."],
  [r"Raó dels costats iguals: $\dfrac{5}{5}=1$",
   r"Raó de les bases: $\dfrac{3{,}2}{2}=1{,}6$",
   "Com que $1\\ne1{,}6$, els triangles NO són semblants."],
  ex_text=E154, nota=NOTA154,
  figura=parella_semblants([("", 2), ("", 5), ("", 5)],
                           [("", 3.2), ("", 5), ("", 5)]))


# ---- exercici 155: determinar si dos triangles són semblants ----
E155 = ("Determina si aquests parells de triangles són semblants, i "
        "quin criteri s'aplica en cada cas.")

Q("155a", 155, "a", B2, "B",
  "Triangle de costats $4$ cm i $5$ cm amb angle comprès de "
  "$80^\\circ$; triangle de costats $5$ cm i $6$ cm amb angle "
  "comprès de $80^\\circ$. Són semblants?",
  "No, perquè les raons $\\frac{5}{4}=1{,}25$ i "
  "$\\frac{6}{5}=1{,}2$ no coincideixen",
  [D("Sí, perquè els dos triangles tenen un angle de $80^\\circ$",
     "CRITERI_SEMBLANCA_INSUFICIENT",
     "Que l'angle comprès coincideixi no basta pel criteri "
     "costat-angle-costat: cal, a més, que els costats que "
     "l'envolten siguin proporcionals, i aquí no ho són."),
   D("Sí, perquè tots dos triangles tenen un costat de $5$ cm",
     "RAO_NOMES_UN_COSTAT",
     "Que coincideixi un sol costat no és cap dels tres criteris "
     "de semblança de triangles: cal comparar la proporció entre "
     "els DOS costats que envolten l'angle igual."),
   D("No es pot saber sense conèixer el tercer costat",
     "CRITERI_SEMBLANCA_INSUFICIENT",
     "Amb dos costats i l'angle comprès ja n'hi ha prou per "
     "aplicar el criteri costat-angle-costat: no cal el tercer "
     "costat per descartar la semblança.")],
  ["Amb dos costats i l'angle comprès conegut, aplica el criteri "
   "costat-angle-costat: compara les raons dels costats que "
   "envolten l'angle de $80^\\circ$.",
   "Calcula $\\frac{5}{4}$ i $\\frac{6}{5}$ i compara-les."],
  [r"$\dfrac{5}{4}=1{,}25 \qquad \dfrac{6}{5}=1{,}2$",
   "Com que $1{,}25\\ne1{,}2$, els triangles NO són semblants."],
  ex_text=E155,
  figura=parella_semblants([("", 4), ("", 5), ("", None)],
                           [("", 5), ("", 6), ("", None)],
                           angle_igual=("base_esq", "base_esq")))

Q("155b", 155, "b", B2, "B",
  "Triangle de costats $11$ cm i $9{,}1$ cm amb angle comprès de "
  "$65^\\circ$; triangle de costats $9$ cm i $7$ cm amb angle "
  "comprès de $65^\\circ$. Són semblants?",
  "No, perquè les raons $\\frac{9}{11}\\approx0{,}818$ i "
  "$\\frac{7}{9{,}1}\\approx0{,}769$ no coincideixen",
  [D("Sí, perquè els dos triangles tenen un angle de $65^\\circ$",
     "CRITERI_SEMBLANCA_INSUFICIENT",
     "Que l'angle comprès coincideixi no basta pel criteri "
     "costat-angle-costat: cal, a més, que els costats que "
     "l'envolten siguin proporcionals, i aquí no ho són prou "
     "aproximadament."),
   D("Sí, perquè els costats es corresponen en ordre decreixent "
     "de mida", "CRITERI_SEMBLANCA_INSUFICIENT",
     "L'ordre de mida dels costats no és cap criteri de "
     "semblança: cal comparar les raons numèriques exactes dels "
     "costats corresponents."),
   D("No es pot saber sense conèixer el tercer costat",
     "CRITERI_SEMBLANCA_INSUFICIENT",
     "Amb dos costats i l'angle comprès conegut ja n'hi ha prou "
     "per aplicar el criteri costat-angle-costat: no cal el "
     "tercer costat per descartar la semblança.")],
  ["Amb dos costats i l'angle comprès conegut, aplica el criteri "
   "costat-angle-costat: compara les raons dels costats que "
   "envolten l'angle de $65^\\circ$.",
   "Calcula $\\frac{9}{11}$ i $\\frac{7}{9{,}1}$ i compara-les."],
  [r"$\dfrac{9}{11}\approx0{,}818 \qquad \dfrac{7}{9{,}1}\approx0{,}769$",
   "Com que $0{,}818\\ne0{,}769$, els triangles NO són semblants "
   "pel criteri costat-angle-costat."],
  ex_text=E155,
  figura=parella_semblants([("", 11), ("", 9.1), ("", None)],
                           [("", 9), ("", 7), ("", None)],
                           angle_igual=("base_esq", "base_esq")))


# =====================================================================
# BLOC 3 — ESCALES (exercicis 156, 158, 159, 160)
# =====================================================================

# ---- exercici 156: escala numèrica (i gràfica, no avaluable en format
# de tria múltiple: es descriu a la resolució però no es pregunta) ----
E156 = ("Expressa mitjançant una escala numèrica (a més de l'escala "
        "gràfica, que trobaràs descrita a la resolució).")

Q("156a", 156, "a", B3, "A",
  "$1$ cm en el plànol equival a $2$ km en la realitat. Quina és "
  "l'escala numèrica?",
  "$1:200\\,000$",
  [D("$1:2$", "UNITATS_NO_CONVERTIDES",
     "Falta convertir els $2$ km a centímetres perquè les dues "
     "mesures de l'escala estiguin en la mateixa unitat: "
     "$2\\text{ km}=200\\,000$ cm."),
   D("$1:20\\,000$", "PRODUCTE_MAL",
     "Aquest valor surt de convertir $2$ km a metres ($200$ m) en "
     "comptes de a centímetres: cal $2\\text{ km}=200\\,000$ cm, no "
     "$20\\,000$."),
   D("$200\\,000:1$", "INVERTIDA",
     "L'escala numèrica s'escriu amb el dibuix primer i la realitat "
     "després: $1:n$, no $n:1$.")],
  ["Converteix els $2$ km a la mateixa unitat que el $1$ cm del "
   "dibuix: $2\\text{ km}=200\\,000$ cm.",
   "L'escala numèrica és $1:n$, amb $n$ la distància real en "
   "centímetres."],
  [r"$2\text{ km}=200\,000$ cm",
   r"Escala numèrica: $1:200\,000$"],
  ex_text=E156,
  figura=escala_regla(1, "cm", "2 km"))

Q("156b", 156, "b", B3, "A",
  "$1$ cm en el plànol equival a $50$ km en la realitat. Quina és "
  "l'escala numèrica?",
  "$1:5\\,000\\,000$",
  [D("$1:50$", "UNITATS_NO_CONVERTIDES",
     "Falta convertir els $50$ km a centímetres perquè les dues "
     "mesures de l'escala estiguin en la mateixa unitat: "
     "$50\\text{ km}=5\\,000\\,000$ cm."),
   D("$1:500\\,000$", "PRODUCTE_MAL",
     "Aquest valor surt de convertir $50$ km a metres ($50\\,000$ "
     "m) en comptes de a centímetres: cal "
     "$50\\text{ km}=5\\,000\\,000$ cm, no $500\\,000$."),
   D("$5\\,000\\,000:1$", "INVERTIDA",
     "L'escala numèrica s'escriu amb el dibuix primer i la "
     "realitat després: $1:n$, no $n:1$.")],
  ["Converteix els $50$ km a la mateixa unitat que el $1$ cm del "
   "dibuix: $50\\text{ km}=5\\,000\\,000$ cm.",
   "L'escala numèrica és $1:n$, amb $n$ la distància real en "
   "centímetres."],
  [r"$50\text{ km}=5\,000\,000$ cm",
   r"Escala numèrica: $1:5\,000\,000$"],
  ex_text=E156,
  figura=escala_regla(1, "cm", "50 km"))


# ---- exercici 158: distància real -> distància al mapa ----
Q("158", 158, "", B3, "A",
  "La distància real entre dues ciutats és de $450$ km. Troba la "
  "distància que les separa en un mapa dibuixat a escala "
  "$1:1\\,500\\,000$.",
  "$30$ cm",
  [D("$0{,}3$ cm", "PRODUCTE_MAL",
     "Sembla que has convertit els $450$ km a metres ($450\\,000$ "
     "m) i no a centímetres: cal $450\\text{ km}=45\\,000\\,000$ "
     "cm abans de dividir per l'escala."),
   D("$3$ cm", "TERME_OBLIDAT_OPERACIO",
     "Aquest valor té un factor $10$ de menys: revisa la conversió "
     "$450\\text{ km}=45\\,000\\,000$ cm abans de dividir per "
     "$1\\,500\\,000$."),
   D("$675\\,000\\,000\\,000$ cm", "CREUAMENT_INVERTIT",
     "Aquest valor surt de multiplicar la distància real per "
     "l'escala en comptes de dividir-hi: en una escala $1:n$, la "
     "distància al mapa és la distància real DIVIDIDA per $n$.")],
  ["Converteix la distància real a centímetres: "
   "$450\\text{ km}=45\\,000\\,000$ cm.",
   "Divideix-la per l'escala: $45\\,000\\,000:1\\,500\\,000$."],
  [r"$450\text{ km}=45\,000\,000$ cm",
   r"$45\,000\,000:1\,500\,000=30$ cm"],
  ex_text="")


# ---- exercici 159: mapa 1 -> distància real -> mapa 2 ----
Q("159", 159, "", B3, "A",
  "En representar la carretera que uneix dos pobles en un mapa "
  "d'escala $1:500\\,000$, té una longitud de $6$ cm. Quina seria "
  "la longitud de la carretera si la representem en un plànol "
  "d'escala $1:60\\,000$?",
  "$50$ cm",
  [D("$0{,}72$ cm", "CREUAMENT_INVERTIT",
     "Aquest valor surt d'aplicar la raó de les escales invertida "
     "($60\\,000/500\\,000$ enlloc de $500\\,000/60\\,000$): a una "
     "escala amb un nombre MÉS PETIT (més detallada) li correspon "
     "una longitud dibuixada MÉS GRAN, no més petita."),
   D("$0{,}00072$ cm", "PRODUCTE_MAL",
     "Aquest resultat és massa petit per a una escala més "
     "detallada: torna a calcular primer la distància real "
     "($6\\cdot500\\,000$ cm) i després divideix-la per "
     "$60\\,000$."),
   D("$720$ cm", "TERME_OBLIDAT_OPERACIO",
     "Aquest valor té un factor $10$ de més: revisa el càlcul de "
     "la distància real ($6\\cdot500\\,000=3\\,000\\,000$ cm) abans "
     "de dividir-la per $60\\,000$.")],
  ["Calcula primer la distància real: "
   "$6\\text{ cm}\\cdot500\\,000=3\\,000\\,000$ cm.",
   "Divideix aquesta distància real per la segona escala: "
   "$3\\,000\\,000:60\\,000$."],
  [r"Distància real: $6\cdot500\,000=3\,000\,000$ cm",
   r"Al nou plànol: $3\,000\,000:60\,000=50$ cm"],
  ex_text="")


# ---- exercici 160: plànol d'habitatge, escala 1:60 ----
E160 = "El plànol d'un habitatge està dibuixat a escala $1:60$."

Q("160a", 160, "a", B3, "A",
  "Quines dimensions reals té la cuina si en el plànol fa $4$ cm "
  "d'ample i $7$ cm de llarg?",
  "$2{,}4$ m d'ample i $4{,}2$ m de llarg",
  [D("$240$ m d'ample i $420$ m de llarg", "PRODUCTE_MAL",
     "Aquests valors tenen un factor $100$ de més: $4\\cdot60="
     "240$ cm, que cal convertir a metres dividint per $100$, no "
     "deixar-ho tal qual."),
   D("$0{,}067$ m d'ample i $0{,}117$ m de llarg", "CREUAMENT_INVERTIT",
     "Aquest valor surt de dividir per $60$ en comptes de "
     "multiplicar: a l'escala $1:60$, la mesura REAL és $60$ "
     "vegades la mesura al plànol, no una seixantena part."),
   D("$4$ m d'ample i $7$ m de llarg", "ESCALA_NO_APLICADA",
     "No has fet servir l'escala: les mesures del plànol i les "
     "reals no coincideixen a menys que l'escala fos $1:1$.")],
  ["A l'escala $1:60$, cada centímetre del plànol correspon a "
   "$60$ cm reals.",
   "Multiplica les dues mesures del plànol per $60$ i converteix "
   "el resultat a metres."],
  [r"Ample: $4\cdot60=240$ cm $=2{,}4$ m",
   r"Llarg: $7\cdot60=420$ cm $=4{,}2$ m"],
  ex_text=E160)

Q("160b", 160, "b", B3, "A",
  "El passadís mesura $7{,}5$ m a la realitat. Quant fa de llarg "
  "en el plànol?",
  "$12{,}5$ cm",
  [D("$450$ cm", "CREUAMENT_INVERTIT",
     "Aquest valor surt de multiplicar per $60$ en comptes de "
     "dividir-hi: a l'escala $1:60$, la mesura AL PLÀNOL és la "
     "mesura real DIVIDIDA per $60$, no multiplicada."),
   D("$1{,}25$ cm", "PRODUCTE_MAL",
     "Aquest valor té un factor $10$ de menys: revisa la "
     "conversió $7{,}5\\text{ m}=750$ cm abans de dividir per "
     "$60$."),
   D("$7{,}5$ cm", "ESCALA_NO_APLICADA",
     "No has fet servir l'escala: les mesures del plànol i les "
     "reals no coincideixen a menys que l'escala fos $1:1$.")],
  ["Converteix els $7{,}5$ m a centímetres: $750$ cm.",
   "Divideix-los per $60$ per passar de la mesura real a la del "
   "plànol."],
  [r"$7{,}5\text{ m}=750$ cm",
   r"$750:60=12{,}5$ cm"],
  ex_text=E160)


# =====================================================================
# BLOC 4 — APLICACIONS DE LA SEMBLANÇA (exercicis 161-169, excepte 157)
# =====================================================================

# ---- exercici 161: ombres d'arbres ----
Q("161", 161, "", B4, "A",
  "Quant mesura l'ombra projectada per un arbre de $15$ m d'altura, "
  "sabent que en aquest mateix moment un altre arbre de $8$ m "
  "d'altura projecta una ombra de $10$ m?",
  "$18{,}75$ m",
  [D("$12{,}5$ m", "CREUAMENT_INVERTIT",
     "Aquest valor surt d'invertir la proporció: com que el segon "
     "arbre és MÉS ALT, la seva ombra ha de ser MÉS LLARGA que la "
     "del primer, no més curta. Planteja "
     "$\\frac{8}{10}=\\frac{15}{x}$."),
   D("$8$ m", "PROGRESSIO_INVENTADA",
     "$8$ m és l'altura del primer arbre, no l'ombra que es "
     "demana per al segon: torna a plantejar la proporció des de "
     "zero."),
   D("$16$ m", "PRODUCTE_MAL",
     "Aquest valor surt de $8\\cdot2$: comprova el càlcul complet "
     "$x=\\frac{15\\cdot10}{8}$ pas a pas en lloc d'una "
     "aproximació.")],
  ["Com que els dos arbres projecten ombra al mateix moment, "
   "l'altura i l'ombra de cadascun són directament proporcionals: "
   "$\\dfrac{8}{10}=\\dfrac{15}{x}$.",
   "Aïlla $x$ multiplicant en creu."],
  [r"$\dfrac{8}{10}=\dfrac{15}{x} \;\Longrightarrow\; "
   r"x=\dfrac{15\cdot10}{8}$",
   "$x=18{,}75$ m"],
  ex_text="",
  figura=ombra(8, 10, 15, "x", "arbre petit", "arbre gran"))


# ---- exercici 162: antena amb dos cables perpendiculars (Pitàgores) ----
Q("162", 162, "", B4, "A",
  "Una antena està subjectada amb dos cables que formen entre ells "
  "un angle de $90^\\circ$ i mesuren $8$ i $5$ m, respectivament. A "
  "quina altura s'enganxen a l'antena?",
  "$9{,}43$ m (aproximadament)",
  [D("$13$ m", "SUMA_EN_LLOC_RESTA",
     "Has sumat les dues longituds ($8+5$) enlloc d'aplicar el "
     "teorema de Pitàgores: com que els cables formen un angle "
     "recte, són els catets d'un triangle rectangle, i cal "
     "$h=\\sqrt{8^2+5^2}$."),
   D("$6{,}24$ m", "CATET_HIPOTENUSA_CONFOSOS",
     "Aquest valor surt de $\\sqrt{8^2-5^2}$, com si $8$ fos la "
     "hipotenusa i $5$ un catet; aquí els DOS cables són catets "
     "(formen l'angle recte entre ells), i l'antena és la "
     "hipotenusa: cal sumar els quadrats, no restar-los."),
   D("$40$ m", "PRODUCTE_MAL",
     "Aquest valor surt de multiplicar $8\\cdot5$: el teorema de "
     "Pitàgores relaciona els QUADRATS dels catets, no el seu "
     "producte directe.")],
  ["Com que els dos cables formen un angle de $90^\\circ$ entre "
   "ells, són els catets d'un triangle rectangle, i el tram "
   "d'antena entre els dos punts d'ancoratge n'és la hipotenusa.",
   "Aplica el teorema de Pitàgores: $h=\\sqrt{8^2+5^2}$."],
  [r"$h=\sqrt{8^2+5^2}=\sqrt{64+25}=\sqrt{89}$",
   "$h\\approx9{,}43$ m"],
  ex_text="")


# ---- exercici 163: ombra arbre -> ombra edifici ----
Q("163", 163, "", B4, "A",
  "Un arbre fa $5$ m d'altura i, a una determinada hora del dia, "
  "projecta una ombra de $6$ m. Quina altura tindrà un edifici que "
  "a la mateixa hora projecta una ombra de $10$ m?",
  "$8{,}33$ m (aproximadament)",
  [D("$12$ m", "CREUAMENT_INVERTIT",
     "Aquest valor surt d'invertir la proporció: planteja "
     "$\\frac{6}{5}=\\frac{10}{x}$, amb l'altura de l'arbre "
     "corresponent a la seva pròpia ombra, no a la de l'edifici."),
   D("$9$ m", "RAONAMENT_ADDITIU",
     "Aquest valor surt de sumar la diferència d'ombres "
     "($10-6=4$) a l'altura de l'arbre: l'altura i l'ombra són "
     "PROPORCIONALS, no varien per una diferència sumada."),
   D("$6$ m", "PROGRESSIO_INVENTADA",
     "$6$ m és l'ombra de l'arbre, no l'altura de l'edifici que es "
     "demana: torna a plantejar la proporció des de zero.")],
  ["A la mateixa hora, l'altura i l'ombra de qualsevol objecte "
   "són directament proporcionals: $\\dfrac{6}{5}=\\dfrac{10}{x}$.",
   "Aïlla $x$ multiplicant en creu."],
  [r"$\dfrac{6}{5}=\dfrac{10}{x} \;\Longrightarrow\; "
   r"x=\dfrac{5\cdot10}{6}=\dfrac{50}{6}$",
   "$x\\approx8{,}33$ m"],
  ex_text="",
  figura=ombra(5, 6, "x", 10, "arbre", "edifici"))


# ---- exercici 164: ombra pal -> ombra edifici ----
Q("164", 164, "", B4, "A",
  "Si un pal mesura $1$ m, i l'ombra que projecta a una "
  "determinada hora del dia és d'$1{,}5$ m, quant mesura un "
  "edifici que projecta una ombra de $6$ m a la mateixa hora?",
  "$4$ m",
  [D("$9$ m", "CREUAMENT_INVERTIT",
     "Aquest valor surt d'invertir la proporció: planteja "
     "$\\frac{1}{1{,}5}=\\frac{x}{6}$, amb l'altura del pal "
     "corresponent a la seva pròpia ombra."),
   D("$5{,}5$ m", "RAONAMENT_ADDITIU",
     "Aquest valor surt de sumar la diferència d'ombres "
     "($6-1{,}5=4{,}5$) a l'altura del pal: l'altura i l'ombra "
     "són PROPORCIONALS, no varien per una diferència sumada."),
   D("$6{,}67$ m", "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Aquest valor surt de $6:1{,}5\\cdot1{,}67$, amb els termes "
     "mal aparellats: revisa la proporció "
     "$\\frac{1}{1{,}5}=\\frac{x}{6}$ pas a pas.")],
  ["A la mateixa hora, l'altura i l'ombra de qualsevol objecte "
   "són directament proporcionals: $\\dfrac{1}{1{,}5}=\\dfrac{x}{6}$.",
   "Aïlla $x$ multiplicant en creu."],
  [r"$\dfrac{1}{1{,}5}=\dfrac{x}{6} \;\Longrightarrow\; "
   r"x=\dfrac{1\cdot6}{1{,}5}$",
   "$x=4$ m"],
  ex_text="",
  figura=ombra(1, 1.5, "x", 6, "pal", "edifici"))


# ---- exercici 165: alçada de la pilota a mig recorregut (trajectòria
# simplificada com a segment rectilini; vegeu nota de transcripció) ----
NOTA165 = ("L'enunciat de partida porta una figura amb la trajectòria corba "
           "de la pilota; aquí es considera una trajectòria recta entre la mà "
           "del jugador i la cistella, que és el que permeten les eines de "
           "semblança.")
NOTA165_INT = ("Simplificació ja explicitada a la nota de transcripció "
               "d'im9.tex.")

Q("165", 165, "", B4, "A",
  "Un jugador de bàsquet d'$1{,}9$ m, situat a $6{,}25$ m de la "
  "cistella, llança la pilota per encistellar (cistella a $3{,}05$ "
  "m d'altura). Suposant una trajectòria rectilínia des del "
  "llançament fins a la cistella, a quina altura està la pilota "
  "quan va per la meitat del recorregut?",
  "$2{,}475$ m",
  [D("$1{,}575$ m", "ARITMETICA_PAS_INTERMEDI",
     "Aquest valor surt de $\\frac{3{,}05}{2}-\\frac{1{,}9}{2}$: "
     "cal partir de l'altura inicial ($1{,}9$ m) i sumar-hi la "
     "MEITAT de la diferència d'altures, no calcular la meitat de "
     "cada altura per separat."),
   D("$4{,}95$ m", "SUMA_EN_LLOC_RESTA",
     "Aquest valor surt de sumar les dues altures i dividir-les "
     "entre $2$: com que la pilota puja des d'$1{,}9$ m, cal "
     "sumar-hi NOMÉS la meitat de la diferència, no fer la mitjana "
     "aritmètica directa (que per aquest cas dona el mateix "
     "resultat però pel motiu equivocat; comprova-ho amb la "
     "diferència d'altures)."),
   D("$1{,}525$ m", "PROGRESSIO_INVENTADA",
     "Aquest valor és la meitat de $3{,}05$ m: no té en compte "
     "que la pilota ja parteix d'una altura inicial d'$1{,}9$ m, "
     "no de terra.")],
  ["A mig recorregut, la pilota ha pujat la meitat de la "
   "diferència total d'altura entre el llançament i la cistella.",
   "Calcula primer la diferència d'altures "
   "($3{,}05-1{,}9$) i suma'n la meitat a l'altura inicial."],
  [r"Diferència d'altura: $3{,}05-1{,}9=1{,}15$ m",
   r"$x=1{,}9+\dfrac{1{,}15}{2}=1{,}9+0{,}575$",
   "$x=2{,}475$ m"],
  ex_text="", nota=NOTA165, nota_interna=NOTA165_INT)


# ---- exercici 166: reflex d'una muntanya al riu ----
Q("166", 166, "", B4, "A",
  "L'Anna està situada a $5$ m de la vora d'un riu i veu "
  "reflectida una muntanya a l'aigua. Si l'Anna mesura $1{,}70$ m "
  "i el riu està a $3$ km de la muntanya, quina altura té la "
  "muntanya?",
  "$1\\,020$ m",
  [D("$1{,}02$ m", "PRODUCTE_MAL",
     "Aquest valor està en metres però la xifra correspon a "
     "quilòmetres: $1\\,020$ m equival a $1{,}02$ km, no a "
     "$1{,}02$ m; revisa la conversió de $3$ km a metres abans de "
     "dividir."),
   D("$8{,}82$ m", "CREUAMENT_INVERTIT",
     "Aquest valor surt d'invertir la proporció: planteja "
     "$\\frac{1{,}70}{5}=\\frac{x}{3\\,000}$, amb l'altura de "
     "l'Anna corresponent a la seva pròpia distància a la vora."),
   D("$5\\,100$ m", "TERME_OBLIDAT_OPERACIO",
     "Aquest valor surt de $1{,}70\\cdot3\\,000$ sense dividir per "
     "$5$: $x=\\frac{1{,}70\\cdot3\\,000}{5}$, no només el "
     "numerador.")],
  ["Converteix els $3$ km a metres: $3\\,000$ m.",
   "L'altura de l'Anna i la seva distància a la vora són "
   "proporcionals a l'altura de la muntanya i la seva distància a "
   "la vora: $\\dfrac{1{,}70}{5}=\\dfrac{x}{3\\,000}$."],
  [r"$3\text{ km}=3\,000$ m",
   r"$\dfrac{1{,}70}{5}=\dfrac{x}{3\,000} \;\Longrightarrow\; "
   r"x=\dfrac{1{,}70\cdot3\,000}{5}$",
   "$x=1\\,020$ m"],
  ex_text="",
  figura=ombra(1.70, 5, "x", 3000, "Anna", "muntanya"))


# ---- exercici 167: altura d'edifici a partir de dues ombres i angles
# d'elevació del sol (60° i 30°) ----
Q("167", 167, "", B4, "A",
  "Mesurem l'ombra d'un edifici en dos moments del dia, amb angles "
  "d'elevació del sol de $60^\\circ$ i $30^\\circ$ respecte al "
  "terra. Si la distància entre els extrems de les dues ombres és "
  "de $6{,}67$ m, calcula l'altura de l'edifici.",
  "$5{,}78$ m (aproximadament)",
  [D("$11{,}55$ m", "PRODUCTE_MAL",
     "Aquest valor surt de $6{,}67\\cdot\\left(\\tan60^\\circ-"
     "\\tan30^\\circ\\right)$: la diferència d'ombres es planteja "
     "amb els INVERSOS de les tangents "
     "($\\frac{1}{\\tan30^\\circ}-\\frac{1}{\\tan60^\\circ}$), no "
     "amb les tangents directament."),
   D("$3{,}85$ m", "CATET_HIPOTENUSA_CONFOSOS",
     "Aquest valor surt de considerar només l'ombra amb angle de "
     "$60^\\circ$ com si fos tota la diferència: cal restar les "
     "DUES ombres ($\\frac{h}{\\tan30^\\circ}-"
     "\\frac{h}{\\tan60^\\circ}$), no fer-ne servir només una."),
   D("$13{,}34$ m", "PRODUCTE_MAL",
     "Aquest valor surt de $6{,}67\\cdot2$: comprova el "
     "plantejament complet amb les tangents dels dos angles "
     "d'elevació, no una simple relació directa amb la distància "
     "entre ombres.")],
  ["L'ombra amb el sol a $60^\\circ$ val $\\frac{h}{\\tan60^\\circ}$ "
   "i, amb el sol a $30^\\circ$ (més baix, ombra més llarga), val "
   "$\\frac{h}{\\tan30^\\circ}$.",
   "La diferència entre totes dues ombres és $6{,}67$ m: "
   "$\\frac{h}{\\tan30^\\circ}-\\frac{h}{\\tan60^\\circ}=6{,}67$."],
  [r"$h\left(\dfrac{1}{\tan30^\circ}-\dfrac{1}{\tan60^\circ}"
   r"\right)=6{,}67$",
   r"$h\,(1{,}7321-0{,}5774)=6{,}67 \;\Longrightarrow\; "
   r"h\cdot1{,}1547=6{,}67$",
   "$h\\approx5{,}78$ m"],
  ex_text="")


# ---- exercici 168: alineació ulls-vora del precipici-poble ----
Q("168", 168, "", B4, "A",
  "En Pere és a $2$ m d'un precipici i veu alineat un poble amb la "
  "vora del precipici. Els seus ulls són a $1{,}6$ m d'altura i el "
  "precipici té $450$ m de profunditat. A quina distància "
  "horitzontal està el poble del precipici?",
  "$562{,}5$ m",
  [D("$1{,}6$ m", "CREUAMENT_INVERTIT",
     "Aquest valor surt d'invertir la proporció: planteja "
     "$\\frac{1{,}6}{2}=\\frac{450}{x}$, amb l'altura dels ulls "
     "corresponent a la distància d'en Pere a la vora."),
   D("$720$ m", "TERME_OBLIDAT_OPERACIO",
     "Aquest valor surt de $450\\cdot1{,}6$ sense dividir pel $2$: "
     "$x=\\frac{2\\cdot450}{1{,}6}$, i encara falta ordenar bé els "
     "factors."),
   D("$281{,}25$ m", "CREUAMENT_INVERTIT",
     "Aquest valor surt de $\\frac{450\\cdot1{,}6}{2\\cdot1{,}6}$ "
     "amb un factor de més: revisa la proporció "
     "$\\frac{1{,}6}{2}=\\frac{450}{x}$ pas a pas.")],
  ["L'altura dels ulls i la distància a la vora formen un "
   "triangle petit, semblant al triangle gran format per la "
   "profunditat del precipici i la distància total fins al "
   "poble: $\\dfrac{1{,}6}{2}=\\dfrac{450}{x}$.",
   "Aïlla $x$ multiplicant en creu."],
  [r"$\dfrac{1{,}6}{2}=\dfrac{450}{x} \;\Longrightarrow\; "
   r"x=\dfrac{2\cdot450}{1{,}6}=\dfrac{900}{1{,}6}$",
   "$x=562{,}5$ m"],
  ex_text="",
  figura=ombra(1.6, 2, 450, "x", "Pere", "poble"))


# ---- exercici 169: reflex d'un edifici en un bassal ----
Q("169", 169, "", B4, "A",
  "Un home que té una alçada d'$1{,}75$ m veu reflectit un edifici "
  "de $52{,}5$ m sobre un bassal d'aigua que hi ha a $4$ m d'ell. "
  "A quina distància del bassal es troba l'edifici?",
  "$120$ m",
  [D("$1{,}75$ m", "CREUAMENT_INVERTIT",
     "Aquest valor surt d'invertir la proporció: planteja "
     "$\\frac{1{,}75}{4}=\\frac{52{,}5}{x}$, amb l'alçada de "
     "l'home corresponent a la seva pròpia distància al bassal."),
   D("$210$ m", "TERME_OBLIDAT_OPERACIO",
     "Aquest valor surt de $4\\cdot52{,}5$ sense dividir per "
     "$1{,}75$: $x=\\frac{4\\cdot52{,}5}{1{,}75}$, no només el "
     "numerador."),
   D("$30$ m", "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Aquest valor surt de $52{,}5:1{,}75$ sense multiplicar pels "
     "$4$ m: revisa la proporció "
     "$\\frac{1{,}75}{4}=\\frac{52{,}5}{x}$ pas a pas.")],
  ["L'alçada de l'home i la seva distància al bassal formen un "
   "triangle semblant al que formen l'edifici i la seva distància "
   "al bassal: $\\dfrac{1{,}75}{4}=\\dfrac{52{,}5}{x}$.",
   "Aïlla $x$ multiplicant en creu."],
  [r"$\dfrac{1{,}75}{4}=\dfrac{52{,}5}{x} \;\Longrightarrow\; "
   r"x=\dfrac{4\cdot52{,}5}{1{,}75}$",
   "$x=120$ m"],
  ex_text="",
  figura=ombra(1.75, 4, 52.5, "x", "home", "edifici"))

Q("155c", 155, "c", B2, "B",
  "Triangle de costats $5$ cm i $7$ cm; triangle de costats $8$ cm "
  "i $12{,}8$ cm (sense conèixer cap angle). Es pot assegurar que "
  "són semblants?",
  "No es pot assegurar amb aquestes dades: les raons "
  "$\\frac{8}{5}=1{,}6$ i $\\frac{12{,}8}{7}\\approx1{,}829$ no "
  "coincideixen, però a més falta un angle o el tercer costat per "
  "aplicar un criteri amb seguretat",
  [D("Sí, perquè tots dos triangles tenen dos costats coneguts",
     "CRITERI_SEMBLANCA_INSUFICIENT",
     "Conèixer dos costats de cadascun no basta per aplicar cap "
     "dels tres criteris de semblança: calen els tres costats "
     "(criteri costat-costat-costat) o l'angle comprès (criteri "
     "costat-angle-costat)."),
   D("No, perquè les raons $1{,}6$ i $1{,}829$ no coincideixen",
     "CRITERI_SEMBLANCA_INSUFICIENT",
     "Amb només dos costats de cada triangle i sense l'angle "
     "comprès no es pot aplicar el criteri costat-angle-costat "
     "amb seguretat: falta informació per afirmar-ho O negar-ho "
     "amb aquest criteri."),
   D("Sí, perquè les raons $1{,}6$ i $1{,}829$ són semblants "
     "numèricament", "CRITERI_SEMBLANCA_INSUFICIENT",
     "$1{,}6$ i $1{,}829$ no coincideixen, i per aplicar un "
     "criteri de semblança calen dades que aquí falten (l'angle "
     "comprès o el tercer costat).")],
  ["Amb només dos costats de cada triangle, sense conèixer l'angle "
   "comprès, no n'hi ha prou per aplicar cap dels tres criteris de "
   "semblança amb seguretat.",
   "Calcula igualment les raons $\\frac{8}{5}$ i "
   "$\\frac{12{,}8}{7}$ per veure si almenys descarten la "
   "semblança pel criteri costat-angle-costat."],
  [r"$\dfrac{8}{5}=1{,}6 \qquad \dfrac{12{,}8}{7}\approx1{,}829$",
   "Les raons no coincideixen, però amb només aquesta informació "
   "no es pot afirmar que siguin semblants: calen els tres costats "
   "o un angle comprès per aplicar amb seguretat un criteri de "
   "semblança."],
  ex_text=E155,
  figura=parella_semblants([("", 5), ("", 7), ("", None)],
                           [("", 8), ("", 12.8), ("", None)]))

Q("155d", 155, "d", B2, "B",
  "Triangle rectangle de catets $3$ cm i $5$ cm; triangle "
  "rectangle de catets $10$ cm i $13$ cm. Són semblants?",
  "No, perquè les raons $\\frac{10}{3}\\approx3{,}33$ i "
  "$\\frac{13}{5}=2{,}6$ no coincideixen",
  [D("Sí, perquè tots dos són triangles rectangles",
     "CRITERI_SEMBLANCA_INSUFICIENT",
     "Ser rectangle només fixa un angle de $90^\\circ$ igual als "
     "dos triangles; per assegurar la semblança cal, a més, que "
     "els catets (que envolten aquest angle recte) siguin "
     "proporcionals, i aquí no ho són."),
   D("Sí, perquè la hipotenusa és més gran en tots dos casos",
     "RAO_NOMES_UN_COSTAT",
     "Que la hipotenusa sigui el costat més gran és cert en "
     "qualsevol triangle rectangle; no diu res sobre si els dos "
     "triangles concrets són proporcionals entre si."),
   D("No es pot saber sense calcular les hipotenuses",
     "CRITERI_SEMBLANCA_INSUFICIENT",
     "Els catets ja envolten l'angle recte (l'angle comprès, "
     "igual als dos triangles): amb la seva raó ja n'hi ha prou "
     "per aplicar el criteri costat-angle-costat, sense calcular "
     "cap hipotenusa.")],
  ["En un triangle rectangle, els catets envolten l'angle recte, "
   "que és igual als dos triangles: aplica el criteri "
   "costat-angle-costat comparant la raó dels catets.",
   "Calcula $\\frac{10}{3}$ i $\\frac{13}{5}$ i compara-les."],
  [r"$\dfrac{10}{3}\approx3{,}33 \qquad \dfrac{13}{5}=2{,}6$",
   "Com que $3{,}33\\ne2{,}6$, els triangles NO són semblants pel "
   "criteri costat-angle-costat amb l'angle recte com a angle "
   "comprès."],
  ex_text=E155,
  # `angle_recte=True` fa que la figura dibuixi el vèrtex "base_esq" amb
  # angle recte de veritat (vegeu `mida_triangle` a figures/semblanca.py),
  # sense necessitat de conèixer ni etiquetar la hipotenusa, que
  # l'enunciat no dona.
  figura=parella_semblants(
      [("", 3), ("", 5), ("", None)],
      [("", 10), ("", 13), ("", None)],
      angle_igual=("base_esq", "base_esq"), angle_recte=True))

Q("155e", 155, "e", B2, "B",
  "Triangle rectangle amb un angle agut de $50^\\circ$; triangle "
  "rectangle amb un angle agut de $40^\\circ$. Són semblants?",
  "Sí, pel criteri angle-angle-angle: els dos triangles tenen els "
  "mateixos tres angles ($90^\\circ$, $50^\\circ$ i $40^\\circ$)",
  [D("No, perquè els angles aguts donats ($50^\\circ$ i "
     "$40^\\circ$) no coincideixen", "CRITERI_SEMBLANCA_INSUFICIENT",
     "Cal calcular el TERCER angle de cada triangle abans de "
     "concloure res: $180^\\circ-90^\\circ-50^\\circ=40^\\circ$ i "
     "$180^\\circ-90^\\circ-40^\\circ=50^\\circ$, així que en "
     "realitat els dos triangles tenen els mateixos tres angles."),
   D("No es pot saber sense conèixer els costats",
     "CRITERI_SEMBLANCA_INSUFICIENT",
     "Amb els tres angles de cada triangle (un cop calculat el "
     "tercer) ja n'hi ha prou per aplicar el criteri "
     "angle-angle-angle: no calen els costats."),
   D("Sí, però només si a més els costats són proporcionals",
     "CRITERI_SEMBLANCA_INSUFICIENT",
     "El criteri angle-angle-angle és suficient per si sol: si "
     "els tres angles coincideixen, els triangles ja són "
     "semblants, sense necessitat de comprovar els costats a "
     "part.")],
  ["Calcula el tercer angle de cada triangle: "
   "$180^\\circ-90^\\circ-50^\\circ$ i "
   "$180^\\circ-90^\\circ-40^\\circ$.",
   "Compara els tres angles de cada triangle un cop calculats "
   "tots dos tercers angles."],
  ["Triangle amb angle agut de $50^\\circ$: té angles "
   "$90^\\circ$, $50^\\circ$ i $180^\\circ-90^\\circ-50^\\circ="
   "40^\\circ$.",
   "Triangle amb angle agut de $40^\\circ$: té angles "
   "$90^\\circ$, $40^\\circ$ i $180^\\circ-90^\\circ-40^\\circ="
   "50^\\circ$.",
   "Els dos triangles tenen els mateixos tres angles: SÍ són "
   "semblants, pel criteri angle-angle-angle."],
  ex_text=E155)
