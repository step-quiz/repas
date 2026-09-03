# -*- coding: utf-8 -*-
"""c_successions.py — Full 3: Successions i progressions.

Genera els 50 ítems dels exercicis 47-61 del full font (im3.tex), organitzats
en 4 blocs:
  termes       (47-51)  terme general, successions recurrents, comprovar si
                         una successió és una progressió aritmètica
  aritmetiques (52-54)  terme general d'una PA, completar termes, diferència
  geometriques (55-58)  terme general d'una PG, completar termes
  aplicacions  (59-61)  triar el terme general correcte, trobar la posició
                         d'un terme donat el seu valor

Com a c_potencies.py: cap resposta s'escriu a mà — es calculen amb ev()
(Fraction exacte) o amb aritmètica normal de Python quan cal treballar amb
exponents variables (ratio^(n-1)), i es formaten amb tex()/llista().
"""
from fractions import Fraction as F
from lib import Q, D, DT, ev, tex, TAX, dificultats

# --------------------------------------------------------------------
# Dificultat de cada exercici (1 directa, 2 encadenada, 3 completa).
# Full 3 · successions i progressions
# Vegeu l'escala completa a lib.py. L'itinerari fa servir aquest camp
# per graduar el recorregut, de manera que canviar-hi un número canvia
# l'ordre en què l'alumne es troba els exercicis.
# --------------------------------------------------------------------
dificultats({
     47: 1,  # substituir n al terme general; 56, aplicar la fórmula de la PG
     48: 2,  # recurrència: cada terme depèn dels anteriors
     49: 2,  # trobar d i muntar el terme general
     50: 2,
     51: 2,
     52: 2,
     53: 3,  # omplir buits a l'interior de la progressió
     54: 2,  # cal decidir primer si és aritmètica o geomètrica
     55: 3,  # dos termes donats: primer la raó, després el terme general
     56: 1,
     57: 2,
     58: 3,
     59: 3,  # jutjar si una expressió és el terme general
     60: 3,  # a l'inrevés: quin lloc ocupa un terme del qual saps el valor
     61: 3,
})


B1 = "termes"
B2 = "aritmetiques"
B3 = "geometriques"
B4 = "aplicacions"


def llista(vals):
    """Una llista de valors (Fraction o int) en LaTeX, separats per comes."""
    return ", ".join(tex(v) for v in vals)


def llista_tex(vals):
    """Combina dues (o més) parts d'una mateixa resposta —cadascuna ja en
    LaTeX en cru (str) o un Fraction/int a formatar amb tex()— en una sola
    expressió, separades per un espai ample, tal com es fa a la resta del
    full amb '\\;\\;' entre 'd=...' i 'a_n=...'."""
    parts = [v if isinstance(v, str) else tex(v) for v in vals]
    return "$%s$" % r"\;\;\;\;".join(parts)


def pa_terme(a1, d, forma="a_1+(n-1)"):
    """LaTeX del terme general d'una PA: a_n = a1 + (n-1)d, ja simplificat
    numèricament quan es pot (el signe de d es mostra amb + o -)."""
    signe = "+" if d >= 0 else "-"
    return r"$a_n=%s%s(n-1)\cdot%s$" % (tex(a1), signe, tex(abs(d)))


def pg_terme(a1, r):
    """LaTeX del terme general d'una PG: a_n = a1 * r^(n-1)."""
    return r"$a_n=%s\cdot%s^{\,n-1}$" % (tex(a1), tex(r))


# =====================================================================
# BLOC 1 — TERMES D'UNA SUCCESSIÓ (exercicis 47-51)
# =====================================================================

E47 = ("Troba els cinc primers termes de la successió el terme general de "
       "la qual és:")

Q("47a", 47, "a", B1, "A",
  r"$a_n = 2^n$",
  llista([2, 4, 8, 16, 32]),
  [D(llista([2, 4, 6, 8, 10]), "EXPONENT_COM_PRODUCTE",
     "Has calculat $2\\cdot n$ en lloc de $2^n$: aquí l'exponent és $n$, no "
     "un factor."),
   D(llista([1, 2, 3, 4, 5]), "BASE_EXPONENT_INTERCANVIATS",
     "Has calculat $n^2$ en lloc de $2^n$: la base és $2$ (fixa) i "
     "l'exponent és $n$ (variable), no a l'inrevés."),
   D(llista([4, 8, 16, 32, 64]), "DESPLACAMENT_INDEX",
     "Has començat a $n=2$ en lloc de $n=1$: el primer terme és $a_1$, no "
     "$a_2$.")],
  ["Substitueix $n=1,2,3,4,5$ un per un a $a_n=2^n$.",
   "$a_1=2^1=2$, $a_2=2^2=4$, $a_3=2^3=8$, i així successivament."],
  ["$a_n=2^n\\Rightarrow a_1=2,\\;a_2=4,\\;a_3=8,\\;a_4=16,\\;a_5=32$"],
  ex_text=E47)

Q("47b", 47, "b", B1, "A",
  r"$a_n = (-3)^{n+2}$",
  llista([-27, 81, -243, 729, -2187]),
  [D(llista([-3, 9, -27, 81, -243]), "EXPONENT_SENSE_DESPLACAR",
     "Has calculat $(-3)^n$ en lloc de $(-3)^{n+2}$: no t'has quedat "
     "l'exponent $+2$ de l'enunciat."),
   D(llista([27, 81, 243, 729, 2187]), "BASE_SIGNE_PERDUT",
     "El resultat ha de conservar el signe de la base $-3$: com que "
     "l'exponent $n+2$ és a vegades senar, el resultat també ha de ser "
     "negatiu en aquests casos."),
   D(llista([-9, 81, -729, 6561, -59049]), "EXPONENT_MULTIPLICAT",
     "Has calculat $(-3)^{2n}$ en lloc de $(-3)^{n+2}$: l'exponent és "
     "$n+2$ (una suma), no $2n$ (un producte).")],
  ["Per a cada $n$, l'exponent és $n+2$: per $n=1$ és $3$; per $n=2$ és "
   "$4$, etc.",
   "$a_1=(-3)^3=-27$, $a_2=(-3)^4=81$, $a_3=(-3)^5=-243$..."],
  ["$a_n=(-3)^{n+2}\\Rightarrow a_1=(-3)^3=-27,\\;a_2=(-3)^4=81,\\;"
   "a_3=(-3)^5=-243,\\;a_4=(-3)^6=729,\\;a_5=(-3)^7=-2187$"],
  ex_text=E47)

Q("47c", 47, "c", B1, "A",
  r"$a_n = 5 - 3n$",
  llista([2, -1, -4, -7, -10]),
  [D(llista([2, -1, -3, -4, -5]), "PROGRESSIO_INVENTADA",
     "Els termes no s'han calculat un per un a partir de $a_n=5-3n$: "
     "revisa cada substitució per separat."),
   D(llista([4, 7, 10, 13, 16]), "SIGNE_PRODUCTE",
     "Has calculat $5+3n$ en lloc de $5-3n$: el terme $3n$ es resta, no "
     "se suma."),
   D(llista([-2, -5, -8, -11, -14]), "SIGNE_FINAL",
     "Cada terme té el signe canviat: revisa el càlcul de $5-3n$ per a "
     "cada $n$, sobretot quan $3n$ supera $5$.")],
  ["Substitueix $n=1,2,3,4,5$ a $5-3n$.",
   "$a_1=5-3=2$, $a_2=5-6=-1$, $a_3=5-9=-4$..."],
  ["$a_n=5-3n\\Rightarrow a_1=2,\\;a_2=-1,\\;a_3=-4,\\;a_4=-7,\\;a_5=-10$"],
  ex_text=E47)

Q("47d", 47, "d", B1, "A",
  r"$a_n = 2 + 4(n+1)$",
  llista([10, 14, 18, 22, 26]),
  [DT(llista([7, 11, 15, 19, 23]), "MENYS_PARENTESI",
      extra="Aquí amb un $+$: has distribuït el $4$ només al primer "
            "terme de dins del parèntesi ($4n$) i has deixat el $+1$ "
            "sense multiplicar."),
   D(llista([6, 10, 14, 18, 22]), "DESPLACAMENT_INDEX",
     "Has calculat $2+4n$ en lloc de $2+4(n+1)$: t'has deixat pel camí "
     "el $+1$ de dins del parèntesi."),
   D(llista([9, 13, 17, 21, 25]), "JERARQUIA",
     "Cal multiplicar $4$ per tot el parèntesi $(n+1)$ abans de sumar "
     "el $2$: repassa l'ordre de les operacions.")],
  ["Primer distribueix: $2+4(n+1)=2+4n+4=4n+6$.",
   "$a_1=4\\cdot1+6=10$, $a_2=4\\cdot2+6=14$, $a_3=4\\cdot3+6=18$..."],
  ["$a_n=2+4(n+1)=4n+6\\Rightarrow a_1=10,\\;a_2=14,\\;a_3=18,\\;"
   "a_4=22,\\;a_5=26$"],
  ex_text=E47)

Q("47e", 47, "e", B1, "A",
  r"$a_n = 2\cdot\left(\dfrac{1}{3}\right)^{n-1}$",
  llista([F(2, 1), F(2, 3), F(2, 9), F(2, 27), F(2, 81)]),
  [D(llista([F(2, 3), F(2, 9), F(2, 27), F(2, 81), F(2, 243)]),
     "DESPLACAMENT_INDEX",
     "Has començat a $n=2$ en lloc de $n=1$: per $n=1$ l'exponent és "
     "$n-1=0$, i qualsevol base elevada a $0$ val $1$."),
   D(llista([F(1, 3), F(1, 9), F(1, 27), F(1, 81), F(1, 243)]),
     "FACTOR_OBLIDAT",
     "T'has deixat pel camí el factor $2$ de davant: cada terme és "
     "$2\\cdot\\left(\\dfrac13\\right)^{n-1}$, no només la potència."),
   D(llista([2, 6, 18, 54, 162]), "FRACCIO_NO_INVERTIDA",
     "Has multiplicat per $3$ en lloc de per $\\dfrac13$ a cada pas: "
     "revisa quina és la base de la potència.")],
  ["Per $n=1$, l'exponent $n-1$ val $0$: $\\left(\\dfrac13\\right)^0=1$.",
   "$a_1=2\\cdot1=2$, $a_2=2\\cdot\\dfrac13=\\dfrac23$, "
   "$a_3=2\\cdot\\dfrac19=\\dfrac29$..."],
  ["$a_n=2\\cdot\\left(\\dfrac13\\right)^{n-1}\\Rightarrow "
   "a_1=2,\\;a_2=\\dfrac23,\\;a_3=\\dfrac29,\\;a_4=\\dfrac2{27},\\;"
   "a_5=\\dfrac2{81}$"],
  ex_text=E47)

Q("47f", 47, "f", B1, "A",
  r"$a_n = n^2 + 3n - 2$",
  llista([2, 8, 16, 26, 38]),
  [D(llista([2, 5, 10, 17, 26]), "PARENTESI_NO_DISTRIBUIT",
     "Has calculat $n^2+3n$ i has restat el $2$ només al primer terme: "
     "el $-2$ s'ha de restar a cada terme, no només al primer."),
   D(llista([2, 10, 24, 44, 70]), "JERARQUIA",
     "Revisa l'ordre de les operacions: primer $n^2$, després $3n$, i "
     "finalment sumes i restes — no multipliquis $n^2$ per $3$."),
   D(llista([0, 4, 10, 18, 28]), "DESPLACAMENT_INDEX",
     "Has calculat des de $n=0$ en lloc de $n=1$: el primer terme d'una "
     "successió és $a_1$.")],
  ["Substitueix $n=1,2,3,4,5$ a $n^2+3n-2$.",
   "$a_1=1+3-2=2$, $a_2=4+6-2=8$, $a_3=9+9-2=16$..."],
  ["$a_n=n^2+3n-2\\Rightarrow a_1=2,\\;a_2=8,\\;a_3=16,\\;a_4=26,\\;"
   "a_5=38$"],
  ex_text=E47)

Q("47g", 47, "g", B1, "A",
  r"$a_n = \dfrac{n+3}{n^2}$",
  llista([F(4, 1), F(5, 4), F(2, 3), F(7, 16), F(8, 25)]),
  [D(llista([F(4, 1), F(5, 4), F(2, 3), F(7, 16), F(8, 24)]),
     "SIMPLIFICACIO_INVENTADA",
     "Al cinquè terme, $\\dfrac{8}{25}$ ja està simplificat del tot: "
     "$8$ i $25$ no tenen cap factor comú, no es pot reduir més."),
   D(llista([F(4, 1), F(5, 2), F(2, 1), F(7, 4), F(8, 5)]),
     "ENTER_MULTIPLICA_DENOMINADOR",
     "Has dividit $n^2$ entre $n$ en lloc d'elevar-lo al quadrat: el "
     "denominador és $n^2$, no $n$."),
   D(llista([F(4, 1), F(1, 4), F(2, 9), F(7, 16), F(8, 25)]),
     "SIGNE_FINAL",
     "Revisa el segon terme: $\\dfrac{2+3}{2^2}=\\dfrac54$, no "
     "$\\dfrac14$.")],
  ["Calcula per separat numerador ($n+3$) i denominador ($n^2$) per a "
   "cada $n$.",
   "$a_1=\\dfrac{1+3}{1}=4$, $a_2=\\dfrac{2+3}{4}=\\dfrac54$, "
   "$a_3=\\dfrac{3+3}{9}=\\dfrac{6}{9}=\\dfrac23$..."],
  ["$a_n=\\dfrac{n+3}{n^2}\\Rightarrow a_1=4,\\;a_2=\\dfrac54,\\;"
   "a_3=\\dfrac23,\\;a_4=\\dfrac{7}{16},\\;a_5=\\dfrac{8}{25}$"],
  ex_text=E47)


E48 = "Busca els cinc primers termes de les successions recurrents següents."

Q("48a", 48, "a", B1, "A",
  r"$a_1=1,\;a_2=3,\;a_n=a_{n-2}-a_{n-1}$",
  llista([1, 3, -2, 5, -7]),
  [D(llista([1, 3, 4, 7, 11]), "REGLA_NOMES_QUOCIENT",
     "Has sumat els dos termes anteriors ($a_{n-2}+a_{n-1}$) en lloc de "
     "restar-los, tal com diu la fórmula $a_n=a_{n-2}-a_{n-1}$."),
   D(llista([1, 3, 2, -1, 3]), "ORDRE_RESTA",
     "Has restat en l'ordre equivocat, $a_{n-1}-a_{n-2}$: la fórmula diu "
     "$a_{n-2}-a_{n-1}$ (el terme més antic menys el més recent)."),
   D(llista([1, 3, -2, -5, -3]), "PROGRESSIO_INVENTADA",
     "A partir del tercer terme, cada nou terme s'ha de calcular amb "
     "$a_{n-2}-a_{n-1}$, no seguint cap altre patró.")],
  ["Cada terme nou és el terme de fa dues posicions menys el terme "
   "immediatament anterior.",
   "$a_3=a_1-a_2=1-3=-2$. $a_4=a_2-a_3=3-(-2)=5$. "
   "$a_5=a_3-a_4=-2-5=-7$."],
  ["$a_3=a_1-a_2=1-3=-2$", "$a_4=a_2-a_3=3-(-2)=5$",
   "$a_5=a_3-a_4=-2-5=-7$",
   "Els cinc primers termes són $1,\\;3,\\;-2,\\;5,\\;-7$"],
  ex_text=E48)

Q("48b", 48, "b", B1, "A",
  r"$b_1=2,\;b_2=4,\;b_n=\dfrac{b_{n-1}}{b_{n-2}}$",
  llista([2, 4, F(2, 1), F(1, 2), F(1, 4)]),
  [D(llista([2, 4, F(1, 2), 2, F(1, 4)]), "ORDRE_RESTA",
     "Has invertit quin terme va al numerador: la fórmula diu "
     "$\\dfrac{b_{n-1}}{b_{n-2}}$, el més recent a dalt."),
   D(llista([2, 4, 6, 10, 16]), "REGLA_NOMES_QUOCIENT",
     "Has sumat els dos termes anteriors en lloc de dividir-los, tal "
     "com diu la fórmula $b_n=\\dfrac{b_{n-1}}{b_{n-2}}$."),
   D(llista([2, 4, 2, F(1, 4), F(1, 8)]), "PROGRESSIO_INVENTADA",
     "El quart terme no segueix la fórmula: revisa'l fent "
     "$b_4=\\dfrac{b_3}{b_2}$ amb els valors ja calculats.")],
  ["Cada terme nou és el terme anterior dividit pel terme de fa dues "
   "posicions.",
   "$b_3=\\dfrac{b_2}{b_1}=\\dfrac42=2$. "
   "$b_4=\\dfrac{b_3}{b_2}=\\dfrac24=\\dfrac12$."],
  ["$b_3=\\dfrac{b_2}{b_1}=\\dfrac{4}{2}=2$",
   "$b_4=\\dfrac{b_3}{b_2}=\\dfrac{2}{4}=\\dfrac12$",
   "$b_5=\\dfrac{b_4}{b_3}=\\dfrac{1/2}{2}=\\dfrac14$",
   "Els cinc primers termes són $2,\\;4,\\;2,\\;\\dfrac12,\\;\\dfrac14$"],
  ex_text=E48)

Q("48c", 48, "c", B1, "A",
  r"$c_1=-1,\;c_2=0,\;c_3=1,\;c_n=c_{n-1}+c_{n-2}+c_{n-3}$",
  llista([-1, 0, 1, 0, 1]),
  [D(llista([-1, 0, 1, -2, 2]), "SIGNE_SUMA",
     "Revisa els signes en sumar els tres termes anteriors: "
     "$c_4=c_3+c_2+c_1=1+0+(-1)$."),
   D(llista([-1, 0, 1, 2, 3]), "FACTOR_OBLIDAT",
     "Falta sumar-hi un dels tres termes anteriors: la fórmula suma "
     "TRES termes, $c_{n-1}+c_{n-2}+c_{n-3}$, no només dos."),
   D(llista([-1, 0, 1, 1, 0]), "ORDRE_RESTA",
     "Revisa quin terme correspon a cada posició en sumar "
     "$c_{n-1}+c_{n-2}+c_{n-3}$: l'ordre de la suma no altera el "
     "resultat, però cal agafar els tres termes correctes.")],
  ["A partir del quart terme, cada nou terme és la suma dels tres "
   "anteriors.",
   "$c_4=c_3+c_2+c_1=1+0+(-1)=0$. $c_5=c_4+c_3+c_2=0+1+0=1$."],
  ["$c_4=c_3+c_2+c_1=1+0+(-1)=0$", "$c_5=c_4+c_3+c_2=0+1+0=1$",
   "Els cinc primers termes són $-1,\\;0,\\;1,\\;0,\\;1$"],
  ex_text=E48)

Q("48d", 48, "d", B1, "A",
  r"$d_1=2,\;d_n=d_{n-1}+n$",
  llista([2, 4, 7, 11, 16]),
  [D(llista([2, 3, 4, 5, 6]), "PROGRESSIO_INVENTADA",
     "Cada terme s'ha de calcular sumant l'índex $n$ al terme anterior, "
     "$d_n=d_{n-1}+n$; no és una llista de nombres consecutius."),
   D(llista([2, 5, 9, 14, 20]), "DESPLACAMENT_INDEX",
     "Has sumat $n+1$ en lloc de $n$ a cada pas: per calcular $d_2$ cal "
     "sumar $n=2$, no $n=3$."),
   D(llista([2, 4, 6, 8, 10]), "EXPONENT_COM_PRODUCTE",
     "Els termes no segueixen un patró de sumar sempre el mateix "
     "nombre: cada vegada se suma un $n$ diferent, més gran.")],
  ["Cada terme nou és el terme anterior més l'índex $n$ que li toca.",
   "$d_2=d_1+2=2+2=4$. $d_3=d_2+3=4+3=7$. $d_4=d_3+4=7+4=11$."],
  ["$d_2=d_1+2=2+2=4$", "$d_3=d_2+3=4+3=7$", "$d_4=d_3+4=7+4=11$",
   "$d_5=d_4+5=11+5=16$",
   "Els cinc primers termes són $2,\\;4,\\;7,\\;11,\\;16$"],
  ex_text=E48)


E49 = ("Troba la diferència i el terme general d'aquestes progressions "
       "aritmètiques.")

Q("49a", 49, "a", B1, "A",
  r"$10,\;7,\;4,\;1,\dots$",
  r"$d=-3,\;\;a_n=10-(n-1)\cdot3$",
  [DT(r"$d=3,\;\;a_n=10+(n-1)\cdot3$", "SIGNE_FINAL"),
   D(r"$d=-3,\;\;a_n=10-3n$", "DESPLACAMENT_INDEX",
     "El terme general d'una PA és $a_n=a_1+(n-1)d$, no $a_1+nd$: "
     "revisa l'exponent de $(n-1)$."),
   D(r"$d=7,\;\;a_n=10-(n-1)\cdot7$", "COMPARA_TERMES",
     "La diferència és el que se suma d'un terme AL SEGÜENT ($7-10$), "
     "no el primer terme en si.")],
  ["La diferència és qualsevol terme menys l'anterior: $7-10$.",
   "$d=7-10=-3$. El terme general és $a_n=a_1+(n-1)d=10+(n-1)\\cdot(-3)$."],
  ["$d=7-10=-3$ (es manté igual a la resta: $4-7=-3$, $1-4=-3$)",
   "$a_n=a_1+(n-1)d=10+(n-1)\\cdot(-3)=10-3(n-1)$"],
  ex_text=E49)

Q("49b", 49, "b", B1, "A",
  r"$\sqrt2,\;2\sqrt2,\;3\sqrt2,\;4\sqrt2,\dots$",
  r"$d=\sqrt2,\;\;a_n=n\sqrt2$",
  [D(r"$d=2,\;\;a_n=\sqrt2+(n-1)\cdot2$", "COMPARA_TERMES",
     "La diferència entre termes consecutius és $\\sqrt2$ (el factor "
     "que multiplica cada vegada), no el nombre $2$ que acompanya "
     "$\\sqrt2$."),
   D(r"$d=\sqrt2,\;\;a_n=\sqrt2+(n-1)$", "ENTER_AL_NUMERADOR",
     "Al terme general, la diferència $\\sqrt2$ ha de multiplicar tot "
     "el $(n-1)$, no sumar-s'hi soles."),
   D(r"$d=2\sqrt2,\;\;a_n=n\cdot2\sqrt2$", "DESPLACAMENT_INDEX",
     "$2\\sqrt2-\\sqrt2=\\sqrt2$, no $2\\sqrt2$: revisa la resta de dos "
     "termes consecutius.")],
  ["La diferència és un terme menys l'anterior: $2\\sqrt2-\\sqrt2$.",
   "$d=2\\sqrt2-\\sqrt2=\\sqrt2$. Com que $a_1=\\sqrt2$, "
   "$a_n=\\sqrt2+(n-1)\\sqrt2=n\\sqrt2$."],
  ["$d=2\\sqrt2-\\sqrt2=\\sqrt2$",
   "$a_n=a_1+(n-1)d=\\sqrt2+(n-1)\\sqrt2=\\sqrt2\\bigl(1+(n-1)\\bigr)"
   "=n\\sqrt2$"],
  ex_text=E49)

Q("49c", 49, "c", B1, "A",
  r"$7,\;2,\;-3,\;-8,\dots$",
  r"$d=-5,\;\;a_n=7-(n-1)\cdot5$",
  [DT(r"$d=5,\;\;a_n=7+(n-1)\cdot5$", "SIGNE_FINAL"),
   D(r"$d=-5,\;\;a_n=7-5n$", "DESPLACAMENT_INDEX",
     "El terme general és $a_1+(n-1)d$, no $a_1+nd$: revisa l'exponent "
     "de $(n-1)$."),
   D(r"$d=-9,\;\;a_n=7-(n-1)\cdot9$", "COMPARA_TERMES",
     "Has restat $2-11$ o un altre parell no consecutiu: la diferència "
     "es calcula entre termes seguits, $2-7$.")],
  ["La diferència és un terme menys l'anterior: $2-7$.",
   "$d=2-7=-5$. El terme general és $a_n=7+(n-1)\\cdot(-5)$."],
  ["$d=2-7=-5$ (es manté igual: $-3-2=-5$, $-8-(-3)=-5$)",
   "$a_n=a_1+(n-1)d=7+(n-1)\\cdot(-5)=7-5(n-1)$"],
  ex_text=E49)

Q("49d", 49, "d", B1, "A",
  r"$16,\;8,\;0,\;-8,\dots$",
  r"$d=-8,\;\;a_n=16-(n-1)\cdot8$",
  [D(r"$d=\dfrac12,\;\;a_n=16\cdot\left(\dfrac12\right)^{n-1}$", "PROGRESSIO_INVENTADA",
     "Encara que els primers termes es dividien per $2$, la successió "
     "completa no ho compleix: $0:8$ no dona $-8$. Comprova-ho restant "
     "termes consecutius, no dividint-los."),
   DT(r"$d=8,\;\;a_n=16+(n-1)\cdot8$", "SIGNE_FINAL"),
   D(r"$d=-8,\;\;a_n=16-8n$", "DESPLACAMENT_INDEX",
     "El terme general és $a_1+(n-1)d$, no $a_1+nd$: revisa l'exponent "
     "de $(n-1)$.")],
  ["La diferència és un terme menys l'anterior: $8-16$.",
   "$d=8-16=-8$. El terme general és $a_n=16+(n-1)\\cdot(-8)$."],
  ["$d=8-16=-8$ (es manté igual: $0-8=-8$, $-8-0=-8$)",
   "$a_n=a_1+(n-1)d=16+(n-1)\\cdot(-8)=16-8(n-1)$"],
  ex_text=E49)


Q("50a", 50, "a", B1, "B",
  r"És una progressió aritmètica la successió $2,\;4,\;6,\;8,\;10,\dots$?",
  "Sí, perquè la diferència entre termes consecutius és sempre la mateixa: "
  "$d=2$.",
  [D("No, perquè els termes van augmentant.", "VEREDICTE_INVERTIT",
     "Que els termes augmentin no impedeix que sigui una PA: el que "
     "defineix una PA és que la diferència entre termes consecutius "
     "sigui SEMPRE la mateixa, i aquí ho és ($d=2$)."),
   D("No, perquè els termes són tots parells.", "VEREDICTE_INVERTIT",
     "Que tots els termes siguin parells és una casualitat d'aquesta "
     "successió, no el motiu pel qual és o no és una PA."),
   D("Sí, perquè cada terme és el doble de la seva posició.", "RAONAMENT_ADDITIU",
     "Aquesta observació és certa ($a_n=2n$) però no és la definició "
     "de progressió aritmètica: cal comprovar que la diferència entre "
     "termes consecutius és constant.")],
  ["Calcula la diferència entre diversos parells de termes consecutius "
   "i comprova si sempre és la mateixa.",
   "$4-2=2$, $6-4=2$, $8-6=2$, $10-8=2$: la diferència és sempre $2$."],
  ["$4-2=2$, $6-4=2$, $8-6=2$, $10-8=2$: la diferència és constant, "
   "$d=2$, per tant sí que és una progressió aritmètica"],
  ex_text="Considera la successió $2,\\;4,\\;6,\\;8,\\;10,\\dots$")

Q("50b", 50, "b", B1, "A",
  r"Terme general de $2,\;4,\;6,\;8,\;10,\dots$",
  r"$a_n=2n$",
  [D(r"$a_n=2n-2$", "DESPLACAMENT_INDEX",
     "Aquesta fórmula dona $0,2,4,6,8\\dots$: va un lloc endarrerida. "
     "Comprova-la sempre amb $n=1$, que ha de tornar el primer terme "
     "($2$), i no $0$."),
   D(r"$a_n=2^n$", "EXPONENT_COM_PRODUCTE",
     "$2^n$ dona $2,4,8,16,32\\dots$: creix massa de pressa. Aquí cada "
     "terme suma sempre $2$ a l'anterior, és una progressió "
     "ARITMÈTICA, no una potència."),
   D(r"$a_n=n+1$", "PROGRESSIO_INVENTADA",
     "Aquesta fórmula dona $2,3,4,5,6\\dots$, que no coincideix amb la "
     "successió de l'enunciat a partir del segon terme.")],
  ["El primer terme és $a_1=2$ i la diferència és $d=2$.",
   "$a_n=a_1+(n-1)d=2+(n-1)\\cdot2=2+2n-2=2n$."],
  ["$a_n=a_1+(n-1)d=2+(n-1)\\cdot2=2+2n-2=2n$"],
  ex_text="Considera la successió $2,\\;4,\\;6,\\;8,\\;10,\\dots$")

Q("50c", 50, "c", B1, "A",
  r"Terme $a_{30}$ de $2,\;4,\;6,\;8,\;10,\dots$",
  ev("2*30"),
  [D(tex(ev("2*30-2")), "DESPLACAMENT_INDEX",
     "Has calculat $2\\cdot(30-1)$ en lloc de $2\\cdot30$: amb "
     "$a_n=2n$ no cal restar $1$ a l'índex."),
   D(tex(ev("2+30*2")), "ENTER_AL_NUMERADOR",
     "Has sumat el primer terme dues vegades: amb $a_n=2n$ només cal "
     "substituir $n=30$."),
   D(tex(ev("30**2")), "BASE_EXPONENT_INTERCANVIATS",
     "Has calculat $n^2$ en lloc de $2n$: el terme general d'aquesta "
     "PA és $a_n=2n$, no una potència.")],
  ["Amb $a_n=2n$, substitueix $n=30$.",
   "$a_{30}=2\\cdot30$."],
  ["$a_n=2n\\Rightarrow a_{30}=2\\cdot30=60$"],
  ex_text="Considera la successió $2,\\;4,\\;6,\\;8,\\;10,\\dots$")


Q("51a", 51, "a", B1, "B",
  # «Comprova que ... és una progressió aritmètica» afirma el que després
  # pregunta, i la resposta correcta és justament «Sí». Amb «Comprova si»
  # la pregunta queda oberta, que és el que l'exercici vol que es decideixi.
  r"Comprova si $\dfrac53,\;\dfrac43,\;1,\;\dfrac23,\;\dfrac13,\dots$ "
  r"és una progressió aritmètica.",
  "Sí, perquè la diferència entre termes consecutius és sempre la "
  "mateixa: $d=-\\dfrac13$.",
  [D("No, perquè els termes van disminuint.", "VEREDICTE_INVERTIT",
     "Que els termes disminueixin no impedeix que sigui una PA: una "
     "diferència negativa i constant també defineix una progressió "
     "aritmètica."),
   D("Sí, perquè tots els termes són fraccions amb denominador $3$.",
     "RAONAMENT_ADDITIU",
     "El fet que el denominador sigui $3$ és només una manera "
     "d'escriure els termes ($1=\\dfrac33$): el que cal comprovar és "
     "que la diferència entre termes consecutius sigui constant."),
   D("No, perquè $1-\\dfrac53=-\\dfrac23$, que no coincideix amb la "
     "diferència $-\\dfrac13$ dels altres termes.", "COMPARA_TERMES",
     "Estàs restant termes que no són consecutius: $1$ és el tercer "
     "terme i $\\dfrac53$ el primer, els separen dues posicions. "
     "Entre termes consecutius, com $\\dfrac43-\\dfrac53=-\\dfrac13$, "
     "la diferència sí que és constant.")],
  ["Calcula la diferència entre cada terme i el següent."],
  ["$\\dfrac43-\\dfrac53=-\\dfrac13$, $1-\\dfrac43=-\\dfrac13$, "
   "$\\dfrac23-1=-\\dfrac13$, $\\dfrac13-\\dfrac23=-\\dfrac13$: la "
   "diferència és constant, $d=-\\dfrac13$, per tant sí que és una "
   "progressió aritmètica"],
  ex_text=r"Donada la successió $\dfrac53,\;\dfrac43,\;1,\;\dfrac23,"
          r"\;\dfrac13,\dots$:")

Q("51b", 51, "b", B1, "A",
  r"Terme general de $\dfrac53,\;\dfrac43,\;1,\;\dfrac23,\;\dfrac13,"
  r"\dots$",
  r"$a_n=\dfrac53-(n-1)\cdot\dfrac13$",
  [DT(r"$a_n=\dfrac53+(n-1)\cdot\dfrac13$", "SIGNE_FINAL"),
   D(r"$a_n=\dfrac53-\dfrac{n}{3}$", "DESPLACAMENT_INDEX",
     "El terme general és $a_1+(n-1)d$, no $a_1+nd$: revisa l'exponent "
     "de $(n-1)$."),
   D(r"$a_n=\dfrac53-(n-1)\cdot3$", "INVERTIDA",
     "La diferència és $-\\dfrac13$, no $-3$: has invertit la fracció "
     "en calcular $d$.")],
  ["El primer terme és $a_1=\\dfrac53$ i la diferència és "
   "$d=-\\dfrac13$ (apartat anterior).",
   "$a_n=a_1+(n-1)d=\\dfrac53+(n-1)\\cdot\\left(-\\dfrac13\\right)$."],
  ["$a_n=a_1+(n-1)d=\\dfrac53-(n-1)\\cdot\\dfrac13$"],
  ex_text=r"Donada la successió $\dfrac53,\;\dfrac43,\;1,\;\dfrac23,"
          r"\;\dfrac13,\dots$:")


# =====================================================================
# BLOC 2 — PROGRESSIONS ARITMÈTIQUES (exercicis 52-54)
# =====================================================================

E52 = "Troba el terme general de les progressions aritmètiques següents."

Q("52a", 52, "a", B2, "A",
  r"$1{,}73;\;1{,}77;\;1{,}81;\;1{,}85;\dots$",
  r"$a_n=1{,}73+(n-1)\cdot0{,}04$",
  [DT(r"$a_n=1{,}73+(n-1)\cdot0{,}4$", "DESPLACAMENT_INDEX",
      extra="En realitat l'error és de posició decimal, no d'índex:"),
   D(r"$a_n=1{,}73+n\cdot0{,}04$", "DESPLACAMENT_INDEX",
     "El terme general és $a_1+(n-1)d$, no $a_1+nd$: revisa l'exponent "
     "de $(n-1)$."),
   D(r"$a_n=1{,}77+(n-1)\cdot0{,}04$", "COMPARA_TERMES",
     "El primer terme de la successió és $1{,}73$, no $1{,}77$ (aquest "
     "és el segon terme).")],
  ["La diferència és un terme menys l'anterior: $1{,}77-1{,}73$.",
   "$d=1{,}77-1{,}73=0{,}04$. El primer terme és $a_1=1{,}73$."],
  ["$d=1{,}77-1{,}73=0{,}04$ (es manté igual a la resta)",
   "$a_n=a_1+(n-1)d=1{,}73+(n-1)\\cdot0{,}04$"],
  ex_text=E52)

Q("52b", 52, "b", B2, "A",
  r"$5,\;2,\;-1,\;-4,\;-7,\dots$",
  r"$a_n=5-(n-1)\cdot3$",
  [DT(r"$a_n=5+(n-1)\cdot3$", "SIGNE_FINAL"),
   D(r"$a_n=5-3n$", "DESPLACAMENT_INDEX",
     "El terme general és $a_1+(n-1)d$, no $a_1+nd$: revisa l'exponent "
     "de $(n-1)$."),
   D(r"$a_n=2-(n-1)\cdot3$", "COMPARA_TERMES",
     "El primer terme de la successió és $5$, no $2$ (aquest és el "
     "segon terme).")],
  ["La diferència és un terme menys l'anterior: $2-5$.",
   "$d=2-5=-3$. El primer terme és $a_1=5$."],
  ["$d=2-5=-3$ (es manté igual: $-1-2=-3$, $-4-(-1)=-3$)",
   "$a_n=a_1+(n-1)d=5+(n-1)\\cdot(-3)=5-3(n-1)$"],
  ex_text=E52)

Q("52c", 52, "c", B2, "A",
  r"$\dfrac12,\;1,\;\dfrac32,\;2,\dots$",
  r"$a_n=\dfrac12+(n-1)\cdot\dfrac12$",
  [D(r"$a_n=\dfrac12+(n-1)\cdot2$", "INVERTIDA",
     "La diferència és $\\dfrac12$, no $2$: has invertit la fracció en "
     "calcular $d$."),
   D(r"$a_n=\dfrac12+n\cdot\dfrac12$", "DESPLACAMENT_INDEX",
     "Falta el $-1$ de l'exponent d'ordre: aquesta fórmula dona "
     "$1,\\dfrac32,2\\dots$, un lloc avançada. Comprova-la sempre amb "
     "$n=1$, que ha de tornar el primer terme ($\\dfrac12$)."),
   D(r"$a_n=1+(n-1)\cdot\dfrac12$", "COMPARA_TERMES",
     "El primer terme de la successió és $\\dfrac12$, no $1$ (aquest "
     "és el segon terme).")],
  ["La diferència és un terme menys l'anterior: $1-\\dfrac12$.",
   "$d=1-\\dfrac12=\\dfrac12$. El primer terme és $a_1=\\dfrac12$."],
  ["$d=1-\\dfrac12=\\dfrac12$ (es manté igual: $\\dfrac32-1=\\dfrac12$)",
   "$a_n=a_1+(n-1)d=\\dfrac12+(n-1)\\cdot\\dfrac12$"],
  ex_text=E52,
  nota="Si simplifiques et queda $a_n=\\dfrac{n}{2}$, que és igual de "
       "correcta i no la trobaràs entre les opcions: aquest exercici "
       "practica la forma $a_1+(n-1)d$, i és aquesta la que has de "
       "reconèixer.")

Q("52d", 52, "d", B2, "A",
  r"$\dfrac1a,\;\dfrac3a,\;\dfrac5a,\;\dfrac7a,\dots$",
  r"$a_n=\dfrac1a+(n-1)\cdot\dfrac2a$",
  [D(r"$a_n=\dfrac1a+(n-1)\cdot2a$", "ENTER_MULTIPLICA_DENOMINADOR",
     "La diferència és $\\dfrac2a$ (una fracció), no $2a$: revisa la "
     "resta $\\dfrac3a-\\dfrac1a$."),
   D(r"$a_n=\dfrac3a+(n-1)\cdot\dfrac2a$", "COMPARA_TERMES",
     "El primer terme de la successió és $\\dfrac1a$, no $\\dfrac3a$ "
     "(aquest és el segon terme)."),
   D(r"$a_n=\dfrac{1}{a}+n\cdot\dfrac2a$", "DESPLACAMENT_INDEX",
     "El terme general és $a_1+(n-1)d$, no $a_1+nd$: revisa l'exponent "
     "de $(n-1)$.")],
  ["La diferència és un terme menys l'anterior: $\\dfrac3a-\\dfrac1a$.",
   "$d=\\dfrac3a-\\dfrac1a=\\dfrac2a$. El primer terme és "
   "$a_1=\\dfrac1a$."],
  ["$d=\\dfrac3a-\\dfrac1a=\\dfrac2a$ (es manté igual a la resta)",
   "$a_n=a_1+(n-1)d=\\dfrac1a+(n-1)\\cdot\\dfrac2a$"],
  ex_text=E52)


E53 = ("Sabent que aquestes són progressions aritmètiques, completa a la "
       "llibreta els termes que falten.")

Q("53a", 53, "a", B2, "A",
  r"$\square,\;\dfrac12,\;\square,\;\dfrac56,\;\square,\;\square$",
  llista([F(1, 3), F(1, 2), F(2, 3), F(5, 6), F(1, 1), F(7, 6)]),
  [D(llista([F(1, 6), F(1, 2), F(2, 3), F(5, 6), F(1, 1), F(7, 6)]),
     "ENTER_AL_NUMERADOR",
     "El primer terme s'obté restant $d$ al segon terme, "
     "$\\dfrac12-\\dfrac16$, no dividint-lo."),
   D(llista([F(1, 3), F(1, 2), F(2, 3), F(5, 6), F(11, 12), F(1, 1)]),
     "TERME_MAL_CALCULAT",
     "Revisa el cinquè terme: $\\dfrac56+\\dfrac16=\\dfrac{6}{6}=1$, "
     "no $\\dfrac{11}{12}$."),
   D(llista([F(1, 3), F(1, 2), F(2, 3), F(5, 6), F(7, 6), F(4, 3)]),
     "DESPLACAMENT_INDEX",
     "Revisa la posició del cinquè terme: entre el quart ($\\dfrac56$) "
     "i el cinquè hi ha d'haver un pas de $d$, no dos.")],
  ["Els dos termes coneguts són a les posicions $2$ i $4$: la "
   "diferència entre ells és $2d$.",
   "$2d=\\dfrac56-\\dfrac12=\\dfrac13\\Rightarrow d=\\dfrac16$. "
   "A partir d'aquí, suma o resta $\\dfrac16$ per completar."],
  ["$2d=\\dfrac56-\\dfrac12=\\dfrac13\\Rightarrow d=\\dfrac16$",
   "$a_1=a_2-d=\\dfrac12-\\dfrac16=\\dfrac13$",
   "$a_3=a_2+d=\\dfrac12+\\dfrac16=\\dfrac23$",
   "$a_5=a_4+d=\\dfrac56+\\dfrac16=1$, $a_6=a_5+d=1+\\dfrac16="
   "\\dfrac76$",
   "Els sis termes són $\\dfrac13,\\;\\dfrac12,\\;\\dfrac23,\\;"
   "\\dfrac56,\\;1,\\;\\dfrac76$"],
  ex_text=E53)

Q("53b", 53, "b", B2, "A",
  r"$\square;\;1{,}5;\;\square;\;2{,}5;\;\square$",
  llista([F(1, 1), F(15, 10), F(2, 1), F(25, 10), F(3, 1)]),
  [D(llista([F(5, 10), F(15, 10), F(2, 1), F(25, 10), F(35, 10)]),
     "ENTER_AL_NUMERADOR",
     "El primer terme s'obté restant $d$ al segon terme, "
     "$1{,}5-0{,}5$, no dividint-lo."),
   D(llista([F(1, 1), F(15, 10), F(2, 1), F(25, 10), F(35, 10)]),
     "COMPARA_TERMES",
     "Revisa el darrer terme: $2{,}5+0{,}5=3$, no $3{,}5$."),
   D(llista([F(0, 1), F(15, 10), F(3, 1), F(25, 10), F(4, 1)]),
     "SIGNE_FINAL",
     "Revisa la diferència entre els dos termes coneguts: "
     "$2d=2{,}5-1{,}5=1\\Rightarrow d=0{,}5$, no $1{,}5$.")],
  ["Els dos termes coneguts són a les posicions $2$ i $4$: la "
   "diferència entre ells és $2d$.",
   "$2d=2{,}5-1{,}5=1\\Rightarrow d=0{,}5$. A partir d'aquí, suma o "
   "resta $0{,}5$ per completar."],
  ["$2d=2{,}5-1{,}5=1\\Rightarrow d=0{,}5$",
   "$a_1=a_2-d=1{,}5-0{,}5=1$",
   "$a_3=a_2+d=1{,}5+0{,}5=2$",
   "$a_5=a_4+d=2{,}5+0{,}5=3$",
   "Els cinc termes són $1,\\;1{,}5,\\;2,\\;2{,}5,\\;3$"],
  ex_text=E53)

Q("53c", 53, "c", B2, "A",
  r"$\square,\;\dfrac14,\;\square,\;\square,\;\dfrac12,\;\square$",
  llista([F(1, 6), F(1, 4), F(1, 3), F(5, 12), F(1, 2), F(7, 12)]),
  [D(llista([F(1, 12), F(1, 4), F(1, 3), F(5, 12), F(1, 2), F(7, 12)]),
     "ENTER_AL_NUMERADOR",
     "El primer terme s'obté restant $d$ al segon terme, "
     "$\\dfrac14-\\dfrac{1}{12}$, no dividint-lo."),
   D(llista([F(1, 6), F(1, 4), F(1, 3), F(5, 12), F(1, 2), F(2, 3)]),
     "SIGNE_FINAL",
     "Revisa el darrer terme: $\\dfrac12+\\dfrac{1}{12}=\\dfrac{7}{12}"
     "$, no $\\dfrac23$."),
   D(llista([F(1, 6), F(1, 4), F(3, 8), F(1, 2), F(1, 2), F(7, 12)]),
     "DESPLACAMENT_INDEX",
     "Revisa la posició del tercer terme: entre el segon "
     "($\\dfrac14$) i el cinquè ($\\dfrac12$) hi ha exactament tres "
     "passos de $d$, no dos.")],
  ["Els dos termes coneguts són a les posicions $2$ i $5$: la "
   "diferència entre ells és $3d$.",
   "$3d=\\dfrac12-\\dfrac14=\\dfrac14\\Rightarrow d=\\dfrac{1}{12}$. "
   "A partir d'aquí, suma o resta $\\dfrac{1}{12}$ per completar."],
  ["$3d=\\dfrac12-\\dfrac14=\\dfrac14\\Rightarrow d=\\dfrac{1}{12}$",
   "$a_1=a_2-d=\\dfrac14-\\dfrac{1}{12}=\\dfrac16$",
   "$a_3=a_2+d=\\dfrac14+\\dfrac{1}{12}=\\dfrac13$",
   "$a_4=a_3+d=\\dfrac13+\\dfrac{1}{12}=\\dfrac{5}{12}$",
   "$a_6=a_5+d=\\dfrac12+\\dfrac{1}{12}=\\dfrac{7}{12}$",
   "Els sis termes són $\\dfrac16,\\;\\dfrac14,\\;\\dfrac13,\\;"
   "\\dfrac{5}{12},\\;\\dfrac12,\\;\\dfrac{7}{12}$"],
  ex_text=E53)


E54 = ("Calcula la diferència o la raó de les progressions següents i "
       "troba'n el terme general.")

Q("54a", 54, "a", B2, "A",
  r"$3,\;6,\;12,\;24,\dots$",
  r"$r=2,\;\;a_n=3\cdot2^{\,n-1}$",
  [DT(r"$d=3,\;\;a_n=3+(n-1)\cdot3$", "PROGRESSIO_INVENTADA",
      extra="Els primers dos termes sí que sumarien $3$, però "
            "$12-6=6\\ne3$: la diferència no és constant, així que no "
            "és una progressió ARITMÈTICA."),
   D(r"$r=2,\;\;a_n=3+2^{\,n-1}$", "POTENCIA_DE_SUMA",
     "El terme general d'una PG és un PRODUCTE, $a_1\\cdot r^{n-1}$, "
     "no una suma."),
   D(r"$r=2,\;\;a_n=3\cdot2^{\,n}$", "DESPLACAMENT_INDEX",
     "L'exponent del terme general és $n-1$, no $n$: per $n=1$ "
     "l'exponent ha de ser $0$.")],
  ["Divideix cada terme entre l'anterior per veure si el quocient és "
   "sempre el mateix.",
   "$6:3=2$, $12:6=2$, $24:12=2$: la raó és constant, $r=2$, és una "
   "progressió GEOMÈTRICA."],
  ["$6:3=2$, $12:6=2$, $24:12=2$: raó constant, $r=2$",
   "$a_n=a_1\\cdot r^{\\,n-1}=3\\cdot2^{\\,n-1}$"],
  ex_text=E54)

Q("54b", 54, "b", B2, "A",
  r"$10,\;7,\;4,\;1,\dots$",
  r"$d=-3,\;\;a_n=10-(n-1)\cdot3$",
  [D(r"$r=\dfrac7{10},\;\;a_n=10\cdot\left(\dfrac7{10}\right)^{n-1}$",
     "PROGRESSIO_INVENTADA",
     "El quocient entre termes consecutius no és constant "
     "($4:7\\ne7:10$): no és una progressió GEOMÈTRICA. Ho és "
     "aritmètica, perquè la diferència sí que és constant."),
   DT(r"$d=3,\;\;a_n=10+(n-1)\cdot3$", "SIGNE_FINAL"),
   D(r"$d=-3,\;\;a_n=10-3n$", "DESPLACAMENT_INDEX",
     "El terme general és $a_1+(n-1)d$, no $a_1+nd$: revisa l'exponent "
     "de $(n-1)$.")],
  ["Comprova primer si la diferència entre termes consecutius és "
   "constant.",
   "$7-10=-3$, $4-7=-3$, $1-4=-3$: diferència constant, $d=-3$, és "
   "una progressió ARITMÈTICA."],
  ["$7-10=-3$, $4-7=-3$, $1-4=-3$: diferència constant, $d=-3$",
   "$a_n=a_1+(n-1)d=10+(n-1)\\cdot(-3)=10-3(n-1)$"],
  ex_text=E54)

Q("54c", 54, "c", B2, "A",
  r"$1,\;1,\;1,\;1,\dots$",
  r"$d=0,\;\;a_n=1$",
  [D(r"$d=0,\;\;a_n=n$", "PROGRESSIO_INVENTADA",
     "La diferència sí que és $0$, però llavors el terme general no "
     "pot dependre de $n$: $a_n=a_1+(n-1)\\cdot0=a_1$, sempre el "
     "mateix valor."),
   D(r"$d=1,\;\;a_n=n$", "COMPARA_TERMES",
     "El terme general ha de donar sempre $1$: $a_n=n$ dona "
     "$1,2,3,4\\dots$, que no coincideix amb la successió."),
   D(r"$d=0,\;\;a_n=0$", "TERME_MAL_CALCULAT",
     "El primer terme (i tots els altres) és $1$, no $0$: revisa la "
     "substitució a $a_n=a_1+(n-1)\\cdot0$.")],
  ["Calcula la diferència entre termes consecutius.",
   "$1-1=0$ sempre: diferència constant, $d=0$."],
  ["$1-1=0$ (i igual per a la resta): diferència constant, $d=0$",
   "$a_n=a_1+(n-1)d=1+(n-1)\\cdot0=1$"],
  ex_text=E54,
  # Sense nota: observava que una successió constant és alhora
  # aritmètica i geomètrica. És una remarca interessant, però va al
  # final de l'enunciat i distreu de la pregunta.
  )

Q("54d", 54, "d", B2, "A",
  r"$16,\;8,\;4,\;2,\;1,\dots$",
  r"$r=\dfrac12,\;\;a_n=16\cdot\left(\dfrac12\right)^{n-1}$",
  [DT(r"$d=-8,\;\;a_n=16-(n-1)\cdot8$", "PROGRESSIO_INVENTADA",
      extra="El primer parell de termes sí que resta $8$, però "
            "$4-8=-4\\ne-8$: la diferència no és constant, així que "
            "no és una progressió ARITMÈTICA."),
   D(r"$r=2,\;\;a_n=16\cdot2^{\,n-1}$", "INVERTIDA",
     "Has invertit la raó: la successió va disminuint, així que $r$ "
     "ha de ser més petita que $1$, no $2$."),
   D(r"$r=\dfrac12,\;\;a_n=16\cdot\left(\dfrac12\right)^{n}$", "DESPLACAMENT_INDEX",
     "L'exponent del terme general és $n-1$, no $n$: per $n=1$ "
     "l'exponent ha de ser $0$.")],
  ["Divideix cada terme entre l'anterior per veure si el quocient és "
   "sempre el mateix.",
   "$8:16=\\dfrac12$, $4:8=\\dfrac12$, $2:4=\\dfrac12$: raó constant, "
   "$r=\\dfrac12$, és una progressió GEOMÈTRICA."],
  ["$8:16=\\dfrac12$, $4:8=\\dfrac12$, $2:4=\\dfrac12$, "
   "$1:2=\\dfrac12$: raó constant, $r=\\dfrac12$",
   "$a_n=a_1\\cdot r^{\\,n-1}=16\\cdot\\left(\\dfrac12\\right)^{n-1}$"],
  ex_text=E54)

Q("54e", 54, "e", B2, "A",
  r"$16,\;8,\;0,\;-8,\dots$",
  r"$d=-8,\;\;a_n=16-(n-1)\cdot8$",
  [D(r"$r=\dfrac12,\;\;a_n=16\cdot\left(\dfrac12\right)^{n-1}$",
     "PROGRESSIO_INVENTADA",
     "El quocient entre termes consecutius no és constant "
     "($0:8=0$, però $8:16=\\dfrac12$): no és una progressió "
     "GEOMÈTRICA. Ho és aritmètica, perquè la diferència sí que és "
     "constant."),
   DT(r"$d=8,\;\;a_n=16+(n-1)\cdot8$", "SIGNE_FINAL"),
   D(r"$d=-8,\;\;a_n=16-8n$", "DESPLACAMENT_INDEX",
     "El terme general és $a_1+(n-1)d$, no $a_1+nd$: revisa l'exponent "
     "de $(n-1)$.")],
  ["Comprova primer si la diferència entre termes consecutius és "
   "constant.",
   "$8-16=-8$, $0-8=-8$, $-8-0=-8$: diferència constant, $d=-8$, és "
   "una progressió ARITMÈTICA."],
  ["$8-16=-8$, $0-8=-8$, $-8-0=-8$: diferència constant, $d=-8$",
   "$a_n=a_1+(n-1)d=16+(n-1)\\cdot(-8)=16-8(n-1)$"],
  ex_text=E54)

Q("54f", 54, "f", B2, "A",
  r"$3,\;9,\;15,\;21,\dots$",
  r"$d=6,\;\;a_n=3+(n-1)\cdot6$",
  [D(r"$r=3,\;\;a_n=3\cdot3^{\,n-1}$", "PROGRESSIO_INVENTADA",
     "El primer quocient sí que dona $3$, però $15:9\\ne3$: el "
     "quocient no és constant, així que no és una progressió "
     "GEOMÈTRICA. Ho és aritmètica, perquè la diferència sí que és "
     "constant."),
   DT(r"$d=-6,\;\;a_n=3-(n-1)\cdot6$", "SIGNE_FINAL"),
   D(r"$d=6,\;\;a_n=3+6n$", "DESPLACAMENT_INDEX",
     "El terme general és $a_1+(n-1)d$, no $a_1+nd$: revisa l'exponent "
     "de $(n-1)$.")],
  ["Comprova primer si la diferència entre termes consecutius és "
   "constant.",
   "$9-3=6$, $15-9=6$, $21-15=6$: diferència constant, $d=6$, és una "
   "progressió ARITMÈTICA."],
  ["$9-3=6$, $15-9=6$, $21-15=6$: diferència constant, $d=6$",
   "$a_n=a_1+(n-1)d=3+(n-1)\\cdot6$"],
  ex_text=E54)


# =====================================================================
# BLOC 3 — PROGRESSIONS GEOMÈTRIQUES (exercicis 55-58)
# =====================================================================

Q("55", 55, "", B3, "A",
  r"Terme general i $a_{20}$ d'una progressió geomètrica amb $a_1=4$ i "
  r"$a_2=3$",
  llista_tex([r"a_n=4\cdot\left(\dfrac34\right)^{n-1}",
              tex(F(1162261467, 68719476736))]),
  [D(llista_tex([r"a_n=4\cdot\left(\dfrac43\right)^{n-1}",
                 tex(F(4, 1) * F(4, 3) ** 19)]),
     "INVERTIDA",
     "La raó és $r=\\dfrac{a_2}{a_1}=\\dfrac34$, no $\\dfrac43$: has "
     "invertit el quocient en els dos càlculs."),
   D(llista_tex([r"a_n=4\cdot\left(\dfrac34\right)^{n}",
                 tex(F(4, 1) * F(3, 4) ** 20)]),
     "DESPLACAMENT_INDEX",
     "L'exponent del terme general és $n-1$, no $n$: per $n=1$ "
     "l'exponent ha de ser $0$, i per a $a_{20}$ l'exponent ha de "
     "ser $19$, no $20$."),
   D(llista_tex([r"a_n=3\cdot\left(\dfrac34\right)^{n-1}",
                 tex(F(3, 1) * F(3, 4) ** 19)]),
     "COMPARA_TERMES",
     "El primer terme de la progressió és $a_1=4$, no $3$ (aquest és "
     "$a_2$): el factor que va davant de la potència ha de ser $4$.")],
  ["La raó és el segon terme entre el primer: $r=\\dfrac{a_2}{a_1}$.",
   "$r=\\dfrac34$. El terme general és $a_n=a_1\\cdot r^{\\,n-1}"
   "=4\\cdot\\left(\\dfrac34\\right)^{n-1}$.",
   "Per a $a_{20}$, fes servir $n=20$: l'exponent és $19$."],
  ["$r=\\dfrac{a_2}{a_1}=\\dfrac34$",
   "$a_n=a_1\\cdot r^{\\,n-1}=4\\cdot\\left(\\dfrac34\\right)^{n-1}$",
   "$a_{20}=4\\cdot\\left(\\dfrac34\\right)^{19}"
   "=\\dfrac{1\\,162\\,261\\,467}{68\\,719\\,476\\,736}$",
   "És un nombre molt petit, més a prop de $0$ que de $1$: té sentit, "
   "perquè la raó $\\dfrac34$ és menor que $1$ i la successió va "
   "disminuint."],
  ex_text="En una progressió geomètrica, $a_1=4$ i $a_2=3$. Busca'n el "
          "terme general i $a_{20}$.",
  # Sense nota: comentava la mida del denominador de $a_{20}$, que no
  # ajuda a resoldre res.
  )


# L'encapçalament el comparteixen els tres apartats de l'exercici 56, o
# sigui que dir-hi el tipus de progressió una vegada resol 56b i 56c
# alhora: qui hi arribi directament ja no troba un «($a_1=3$, $r=5$)»
# sense cap context del qual deduir de què va.
E56 = "Calcula, en una progressió geomètrica amb $a_1=3$ i $r=5$."

Q("56a", 56, "a", B3, "A",
  r"Terme general amb $a_1=3$ i $r=5$",
  r"$a_n=3\cdot5^{\,n-1}$",
  [D(r"$a_n=3+(n-1)\cdot5$", "POTENCIA_DE_SUMA",
     "El terme general d'una PG és un producte amb una potència, "
     "$a_1\\cdot r^{n-1}$, no una suma com a una PA."),
   D(r"$a_n=3\cdot5^{\,n}$", "DESPLACAMENT_INDEX",
     "L'exponent del terme general és $n-1$, no $n$: per $n=1$ "
     "l'exponent ha de ser $0$."),
   D(r"$a_n=5\cdot3^{\,n-1}$", "ORDRE_RESTA",
     "Has intercanviat el primer terme i la raó: la base de la "
     "potència és la raó ($5$), i el factor que hi multiplica és "
     "$a_1$ ($3$).")],
  ["El terme general d'una PG és $a_n=a_1\\cdot r^{\\,n-1}$.",
   "$a_n=3\\cdot5^{\\,n-1}$."],
  ["$a_n=a_1\\cdot r^{\\,n-1}=3\\cdot5^{\\,n-1}$"],
  ex_text=E56)

Q("56b", 56, "b", B3, "A",
  r"Terme que ocupa el lloc $7$ ($a_1=3$, $r=5$)",
  ev("3*5**6"),
  [D(tex(ev("3*5**7")), "DESPLACAMENT_INDEX",
     "L'exponent que cal fer servir per a $a_7$ és $7-1=6$, no $7$."),
   D(tex(ev("3*7*5")), "POTENCIA_DE_SUMA",
     "Cal calcular una potència, $5^6$, i multiplicar-la per $3$; no "
     "es multipliquen directament $3$, $7$ i $5$."),
   D(tex(ev("(3*5)**6")), "POTENCIA_PRODUCTE_UN_FACTOR",
     "L'exponent afecta només la raó, no el primer terme: és "
     "$3\\cdot5^6$, no $(3\\cdot5)^6$.")],
  ["Fes servir $a_n=a_1\\cdot r^{\\,n-1}$ amb $n=7$: l'exponent és "
   "$6$.",
   "$a_7=3\\cdot5^6$."],
  ["$a_7=a_1\\cdot r^{6}=3\\cdot5^6=3\\cdot15\\,625=46\\,875$"],
  ex_text=E56)

Q("56c", 56, "c", B3, "A",
  r"Termes $a_{10}$ i $a_{11}$ ($a_1=3$, $r=5$)",
  llista([ev("3*5**9"), ev("3*5**10")]),
  [D(llista([ev("3*5**10"), ev("3*5**11")]), "DESPLACAMENT_INDEX",
     "L'exponent que cal fer servir per a $a_{10}$ és $10-1=9$, no "
     "$10$."),
   D(llista([ev("3*5**9"), ev("3*5**9*5*5")]), "EXPONENTS_MULTIPLICATS",
     "Per passar de $a_{10}$ a $a_{11}$ cal multiplicar per $r$ un "
     "sol cop, no dos."),
   D(llista([ev("3+5**9"), ev("3+5**10")]), "POTENCIA_DE_SUMA",
     "El terme general d'una PG és un producte amb una potència, no "
     "una suma.")],
  ["Fes servir $a_n=a_1\\cdot r^{\\,n-1}$ per a $n=10$ i $n=11$.",
   "$a_{10}=3\\cdot5^9$ i $a_{11}=3\\cdot5^{10}=a_{10}\\cdot5$."],
  ["$a_{10}=a_1\\cdot r^{9}=3\\cdot5^9=5\\,859\\,375$",
   "$a_{11}=a_{10}\\cdot r=5\\,859\\,375\\cdot5=29\\,296\\,875$"],
  ex_text=E56)


Q("57a", 57, "a", B3, "B",
  # Mateix cas que 51a: la resposta correcta és «Sí» i l'enunciat ja ho
  # afirmava abans de preguntar-ho.
  r"Comprova si $\dfrac23,\;\dfrac29,\;\dfrac2{27},\;\dfrac2{81},\dots$ "
  r"és una progressió geomètrica.",
  "Sí, perquè el quocient entre termes consecutius és sempre el mateix: "
  "$r=\\dfrac13$.",
  [D("No, perquè els termes van disminuint.", "VEREDICTE_INVERTIT",
     "Que els termes disminueixin no impedeix que sigui una PG: una "
     "raó menor que $1$ i constant també defineix una progressió "
     "geomètrica."),
   D("Sí, perquè tots els numeradors són iguals a $2$.", "RAONAMENT_ADDITIU",
     "Que el numerador es mantingui $2$ és una conseqüència d'aquesta "
     "successió concreta, no la definició de progressió geomètrica: "
     "cal comprovar que el quocient entre termes consecutius és "
     "constant."),
   D("No, perquè els denominadors no augmenten sempre la mateixa "
     "quantitat.", "VEREDICTE_INVERTIT",
     "En una PG els denominadors (o els valors) no han d'augmentar "
     "SUMANT sempre el mateix: han de multiplicar-se sempre pel "
     "mateix factor, i aquí és així ($\\times3$ cada vegada al "
     "denominador).")],
  ["Divideix cada terme entre l'anterior i comprova si el resultat és "
   "sempre el mateix.",
   "$\\dfrac{2/9}{2/3}=\\dfrac13$, $\\dfrac{2/27}{2/9}=\\dfrac13$, "
   "$\\dfrac{2/81}{2/27}=\\dfrac13$: sempre la mateixa."],
  ["$\\dfrac{2/9}{2/3}=\\dfrac13$, $\\dfrac{2/27}{2/9}=\\dfrac13$, "
   "$\\dfrac{2/81}{2/27}=\\dfrac13$: quocient constant, $r=\\dfrac13$, "
   "per tant sí que és una progressió geomètrica"],
  ex_text=r"Donada la successió $\dfrac23,\;\dfrac29,\;\dfrac2{27},"
          r"\;\dfrac2{81},\dots$:")

Q("57b", 57, "b", B3, "A",
  r"Terme $10$ de $\dfrac23,\;\dfrac29,\;\dfrac2{27},\;\dfrac2{81},"
  r"\dots$",
  tex(F(2, 59049)),
  [D(tex(F(2, 3) * F(1, 3) ** 10), "DESPLACAMENT_INDEX",
     "L'exponent que cal fer servir per a $a_{10}$ és $10-1=9$, no "
     "$10$."),
   D(tex(F(2, 3) * F(3, 1) ** 9), "INVERTIDA",
     "Has fet servir $r=3$ en lloc de $r=\\dfrac13$: la successió "
     "disminueix, la raó ha de ser menor que $1$."),
   D(tex(F(1, 3) ** 9), "FACTOR_OBLIDAT",
     "T'has deixat pel camí el factor $\\dfrac23$ de davant: cada "
     "terme és $\\dfrac23\\cdot\\left(\\dfrac13\\right)^{n-1}$, no "
     "només la potència.")],
  ["Fes servir $a_n=a_1\\cdot r^{\\,n-1}$ amb $n=10$: l'exponent és "
   "$9$.",
   "$a_{10}=\\dfrac23\\cdot\\left(\\dfrac13\\right)^9$."],
  ["$a_{10}=a_1\\cdot r^{9}=\\dfrac23\\cdot\\left(\\dfrac13\\right)^9"
   "=\\dfrac2{3^{10}}=\\dfrac{2}{59\\,049}$"],
  ex_text=r"Donada la successió $\dfrac23,\;\dfrac29,\;\dfrac2{27},"
          r"\;\dfrac2{81},\dots$:")

Q("57c", 57, "c", B3, "A",
  r"Termes $a_{100}$ i $a_{101}$ de $\dfrac23,\;\dfrac29,\;\dfrac2{27},"
  r"\;\dfrac2{81},\dots$",
  r"$a_{100}=\dfrac{2}{3^{100}},\;\;a_{101}=\dfrac{2}{3^{101}}$",
  [D(r"$a_{100}=\dfrac{2}{3^{101}},\;\;a_{101}=\dfrac{2}{3^{102}}$",
     "DESPLACAMENT_INDEX",
     "L'exponent que cal fer servir per a $a_{100}$ és $100-1=99$, "
     "que és el que dona $3^{100}$ al denominador un cop escrit amb "
     "$a_1=\\dfrac23$: revisa el desplaçament amb un cas petit "
     "abans, com $a_2=\\dfrac29=\\dfrac2{3^2}$."),
   D(r"$a_{100}=\dfrac{2}{3^{99}},\;\;a_{101}=\dfrac{2}{3^{100}}$",
     "FACTOR_OBLIDAT",
     "Falta comptar el factor $\\dfrac23$ inicial dins de la potència "
     "de $3$ del denominador: $a_2=\\dfrac23\\cdot\\dfrac13=\\dfrac2{"
     "3^2}$, no $\\dfrac2{3^1}$."),
   D(r"$a_{100}=3^{99},\;\;a_{101}=3^{100}$", "INVERTIDA",
     "Els termes de la successió van fent-se cada vegada més petits "
     "(la raó és $\\dfrac13$, menor que $1$): no poden valer nombres "
     "enters cada vegada més grans.")],
  ["Comprova primer el patró amb un terme petit: $a_2=\\dfrac29="
   "\\dfrac2{3^2}$, $a_3=\\dfrac2{27}=\\dfrac2{3^3}$.",
   "El patró és $a_n=\\dfrac{2}{3^{\\,n}}$: substitueix $n=100$ i "
   "$n=101$."],
  ["Com que $a_1=\\dfrac23=\\dfrac2{3^1}$, $a_2=\\dfrac2{3^2}$... el "
   "patró és $a_n=\\dfrac{2}{3^{\\,n}}$",
   "$a_{100}=\\dfrac{2}{3^{100}}$ i $a_{101}=\\dfrac{2}{3^{101}}$"],
  ex_text=r"Donada la successió $\dfrac23,\;\dfrac29,\;\dfrac2{27},"
          r"\;\dfrac2{81},\dots$:",
  # Sense nota: explicava que $3^{100}$ es deixa en forma de potència.
  # La forma de les opcions ja ho diu.
  )


E58 = "Troba els termes que falten a les progressions geomètriques següents."

Q("58a", 58, "a", B3, "A",
  r"$1;\;0{,}1;\;\square;\;0{,}001;\;\square$",
  llista([F(1, 1), F(1, 10), F(1, 100), F(1, 1000), F(1, 10000)]),
  [D(llista([F(1, 1), F(1, 10), F(1, 100), F(1, 1000), F(1, 100)]),
     "COMPARA_TERMES",
     "El cinquè terme ha de continuar el patró de dividir entre $10$: "
     "$0{,}001:10=0{,}0001$, no repetir el tercer terme."),
   D(llista([F(1, 1), F(1, 10), F(9, 100), F(1, 1000), F(8, 10000)]),
     "PROGRESSIO_INVENTADA",
     "Els termes que falten han de seguir estrictament la raó "
     "$r=0{,}1$, no anar disminuint una mica cada vegada de manera "
     "aproximada."),
   D(llista([F(1, 1), F(1, 10), F(1, 20), F(1, 1000), F(1, 2000)]),
     "RAO_MAL_APLICADA",
     "El tercer terme s'obté multiplicant per $r=0{,}1$, no dividint "
     "entre $2$: $0{,}1\\cdot0{,}1=0{,}01$, no $\\dfrac1{20}$.")],
  ["La raó és el quocient entre dos termes consecutius coneguts: "
   "$r=0{,}1:1$.",
   "$r=0{,}1$. Multiplica cada terme per $0{,}1$ per obtenir el "
   "següent."],
  ["$r=0{,}1:1=0{,}1$",
   "$a_3=a_2\\cdot r=0{,}1\\cdot0{,}1=0{,}01$",
   "$a_5=a_4\\cdot r=0{,}001\\cdot0{,}1=0{,}0001$",
   "Els cinc termes són $1,\\;0{,}1,\\;0{,}01,\\;0{,}001,\\;0{,}0001$"],
  ex_text=E58)

Q("58b", 58, "b", B3, "A",
  r"$\square,\;\dfrac12,\;\dfrac16,\;\square,\;\dfrac1{54},\;\square$",
  llista([F(3, 2), F(1, 2), F(1, 6), F(1, 18), F(1, 54), F(1, 162)]),
  [D(llista([F(3, 2), F(1, 2), F(1, 6), F(1, 18), F(1, 54), F(1, 108)]),
     "COMPARA_TERMES",
     "El sisè terme s'obté multiplicant el cinquè per $r=\\dfrac13$: "
     "$\\dfrac1{54}\\cdot\\dfrac13=\\dfrac1{162}$, no $\\dfrac1{108}$."),
   D(llista([F(1, 6), F(1, 2), F(1, 6), F(1, 18), F(1, 54), F(1, 162)]),
     "INVERTIDA",
     "Per anar cap enrere (del segon al primer terme) cal DIVIDIR "
     "entre la raó, $\\dfrac12:\\dfrac13$, no multiplicar-hi."),
   D(llista([F(3, 2), F(1, 2), F(1, 6), F(1, 12), F(1, 54), F(1, 162)]),
     "RAO_MAL_APLICADA",
     "El quart terme s'obté multiplicant el tercer per $r=\\dfrac13$: "
     "$\\dfrac16\\cdot\\dfrac13=\\dfrac1{18}$, no $\\dfrac1{12}$.")],
  ["La raó és el quocient entre dos termes consecutius coneguts: "
   "$r=\\dfrac{1/6}{1/2}$.",
   "$r=\\dfrac13$. Multiplica per $\\dfrac13$ per avançar; divideix "
   "per anar enrere."],
  ["$r=\\dfrac{1/6}{1/2}=\\dfrac13$",
   "$a_1=a_2:r=\\dfrac12:\\dfrac13=\\dfrac32$",
   "$a_4=a_3\\cdot r=\\dfrac16\\cdot\\dfrac13=\\dfrac1{18}$",
   "$a_6=a_5\\cdot r=\\dfrac1{54}\\cdot\\dfrac13=\\dfrac1{162}$",
   "Els sis termes són $\\dfrac32,\\;\\dfrac12,\\;\\dfrac16,\\;"
   "\\dfrac1{18},\\;\\dfrac1{54},\\;\\dfrac1{162}$"],
  ex_text=E58)

Q("58c", 58, "c", B3, "A",
  r"$\square,\;\dfrac13,\;\square,\;\dfrac1{12},\;\square$",
  llista([F(2, 3), F(1, 3), F(1, 6), F(1, 12), F(1, 24)]),
  [D(llista([F(-2, 3), F(1, 3), F(-1, 6), F(1, 12), F(-1, 24)]),
     "PARITAT_EXPONENT",
     "Amb $r^2=\\dfrac14$ hi ha dues raons possibles, $\\dfrac12$ i "
     "$-\\dfrac12$; es demana la solució amb raó positiva, coherent "
     "amb que tots els termes coneguts de l'enunciat ja són positius."),
   D(llista([F(4, 3), F(1, 3), F(1, 12), F(1, 12), F(1, 48)]),
     "DESPLACAMENT_INDEX",
     "Entre el segon terme ($\\dfrac13$) i el quart ($\\dfrac1{12}$) "
     "hi ha exactament DOS passos de $r$, no un."),
   D(llista([F(2, 3), F(1, 3), F(1, 9), F(1, 12), F(1, 36)]),
     "RAO_MAL_APLICADA",
     "El tercer terme s'obté multiplicant el segon per $r=\\dfrac12$: "
     "$\\dfrac13\\cdot\\dfrac12=\\dfrac16$, no $\\dfrac19$.")],
  ["Els dos termes coneguts són a les posicions $2$ i $4$: la relació "
   "entre ells és $r^2$.",
   "$r^2=\\dfrac{1/12}{1/3}=\\dfrac14\\Rightarrow r=\\dfrac12$ "
   "(prenem l'arrel positiva). A partir d'aquí, multiplica o divideix "
   "per $\\dfrac12$."],
  ["$r^2=\\dfrac{1/12}{1/3}=\\dfrac14\\Rightarrow r=\\dfrac12$",
   "$a_1=a_2:r=\\dfrac13:\\dfrac12=\\dfrac23$",
   "$a_3=a_2\\cdot r=\\dfrac13\\cdot\\dfrac12=\\dfrac16$",
   "$a_5=a_4\\cdot r=\\dfrac1{12}\\cdot\\dfrac12=\\dfrac1{24}$",
   "Els cinc termes són $\\dfrac23,\\;\\dfrac13,\\;\\dfrac16,\\;"
   "\\dfrac1{12},\\;\\dfrac1{24}$"],
  ex_text=E58,
  nota="De $r^2=\\dfrac14$ en surten dues raons possibles, "
       "$r=\\dfrac12$ i $r=-\\dfrac12$; es dona la solució amb raó "
       "positiva perquè manté el signe dels termes ja coneguts a "
       "l'enunciat.")

Q("58d", 58, "d", B3, "B",
  r"$\square,\;\dfrac32,\;\square,\;\square,\;\dfrac{81}4$",
  "La raó és $r=\\sqrt[3]{\\dfrac{27}{2}}=\\dfrac{3}{\\sqrt[3]{2}}$, un "
  "nombre irracional; per tant els termes que falten es deixen "
  "expressats en funció de $r$: $a_1=\\dfrac{3}{2r}$, "
  "$a_3=\\dfrac32\\,r$, $a_4=\\dfrac32\\,r^2$.",
  [D("La raó és $r=3$ i els termes que falten són "
     "$\\dfrac12,\\;\\dfrac92,\\;\\dfrac{27}2$.", "RAO_MAL_APLICADA",
     "Amb $r=3$ el cinquè terme donaria "
     "$\\dfrac32\\cdot3^3=\\dfrac32\\cdot27=\\dfrac{81}2$, no "
     "$\\dfrac{81}4$ (el valor real de l'enunciat): $r=3$ no "
     "compleix la relació $r^3=\\dfrac{81/4}{3/2}=\\dfrac{27}2$."),
   D("No es pot resoldre perquè la raó no és un nombre enter.",
     "VEREDICTE_INVERTIT",
     "Sí que es pot resoldre: la raó és $r=\\sqrt[3]{\\dfrac{27}2}$ "
     "(un nombre irracional però perfectament vàlid), i els termes "
     "que falten es poden expressar en funció d'aquest valor de "
     "$r$."),
   D("La raó és $r^3=\\dfrac{27}2$ i ja està, no cal continuar.",
     "PAS_INTERMEDI_PER_RESPOSTA",
     "$r^3=\\dfrac{27}2$ és un pas intermedi, no la raó: cal encara "
     "extreure l'arrel cúbica, $r=\\sqrt[3]{\\dfrac{27}2}$, i fer "
     "servir aquest valor per completar els termes que falten.")],
  ["Els dos termes coneguts són a les posicions $2$ i $5$: la relació "
   "entre ells és $r^3$.",
   "$r^3=\\dfrac{81/4}{3/2}=\\dfrac{27}2$. Aquesta vegada $r$ no surt "
   "un nombre senzill: cal deixar-lo com una arrel cúbica."],
  ["$r^3=\\dfrac{81/4}{3/2}=\\dfrac{81}4\\cdot\\dfrac23=\\dfrac{27}2"
   "\\Rightarrow r=\\sqrt[3]{\\dfrac{27}2}=\\dfrac{3}{\\sqrt[3]2}$",
   "Com que $r$ no és un nombre racional senzill, els termes que "
   "falten es deixen indicats en funció de $r$",
   "$a_1=a_2:r=\\dfrac32:r=\\dfrac3{2r}$",
   "$a_3=a_2\\cdot r=\\dfrac32\\,r$",
   "$a_4=a_3\\cdot r=\\dfrac32\\,r^2$"],
  ex_text=E58,
  # Sense nota: advertia que la raó d'aquest apartat no és entera, cosa
  # que l'alumne ha de descobrir ell resolent-lo.
  )


# =====================================================================
# BLOC 4 — APLICACIONS I IDENTIFICACIÓ (exercicis 59-61)
# =====================================================================

E59 = ("Donada la progressió $3,\\;6,\\;12,\\;24,\\dots$, digues si cada "
       "expressió n'és o no el terme general (o si l'afirmació és certa), "
       "i per què.")

Q("59a", 59, "a", B4, "B",
  r"$a_n = 3 + (n-1)\cdot 3$",
  "No, perquè aquesta fórmula és la d'una progressió ARITMÈTICA amb "
  "$d=3$: donaria $3,6,9,12\\dots$, que no coincideix amb la successió "
  "a partir del tercer terme.",
  [D("Sí, perquè el primer terme i el pas $3$ coincideixen amb la "
     "successió.", "VEREDICTE_INVERTIT",
     "Només coincideixen els dos primers termes per casualitat "
     "($3$ i $6$): a partir del tercer terme aquesta fórmula dona "
     "$9$, mentre que la successió continua amb $12$."),
   D("No, perquè el primer terme hauria de ser $0$, no $3$.",
     "COMPARA_TERMES",
     "El primer terme, $3$, sí que és correcte. El problema no és "
     "el primer terme, sinó que la successió no creix sumant "
     "sempre el mateix ($3, 6, 12, 24$ no té diferència constant)."),
   D("Sí, perquè totes les progressions es poden escriure amb "
     "aquesta forma.", "PROGRESSIO_INVENTADA",
     "Aquesta forma, $a_1+(n-1)d$, només serveix per a progressions "
     "ARITMÈTIQUES (diferència constant). Aquí la successió "
     "multiplica sempre pel mateix factor, és GEOMÈTRICA.")],
  ["Comprova si la diferència entre termes consecutius de la "
   "successió és realment constant.",
   "$6-3=3$, però $12-6=6\\ne3$: la diferència no és constant, no "
   "és una progressió aritmètica."],
  ["$6-3=3$, però $12-6=6$: la diferència no és constant",
   "Per tant $a_n=3+(n-1)\\cdot3$ no és el terme general d'aquesta "
   "successió"],
  ex_text=E59)

Q("59b", 59, "b", B4, "B",
  r"$a_n = 3\cdot 3^{\,n-1}$",
  "No, perquè fa servir raó $3$: donaria $3,9,27,81\\dots$, que no "
  "coincideix amb la successió a partir del segon terme.",
  [D("Sí, perquè el primer terme, $3$, coincideix amb l'enunciat.",
     "VEREDICTE_INVERTIT",
     "Que coincideixi el primer terme no és suficient: cal que TOTS "
     "els termes coincideixin, i des del segon ja no ho fan "
     "($9\\ne6$)."),
   D("Sí, perquè $3$ apareix dues vegades a la fórmula, com pertoca "
     "a una progressió geomètrica.", "RAONAMENT_ADDITIU",
     "Que el $3$ aparegui com a factor i com a base no garanteix "
     "que la raó sigui la correcta: cal comprovar-la calculant el "
     "quocient real entre termes consecutius de la successió."),
   D("No, perquè les progressions geomètriques no es poden escriure "
     "amb potències.", "VEREDICTE_INVERTIT",
     "Les progressions geomètriques SÍ que s'escriuen amb potències, "
     "$a_n=a_1\\cdot r^{\\,n-1}$: el problema no és la forma, és que "
     "aquí la raó no és $3$.")],
  ["Calcula la raó real de la successió dividint termes consecutius.",
   "$6:3=2$, no $3$: la raó d'aquesta successió és $2$, no $3$."],
  ["$6:3=2$, $12:6=2$, $24:12=2$: la raó real és $2$, no $3$",
   "Per tant $a_n=3\\cdot3^{\\,n-1}$ no és el terme general d'aquesta "
   "successió"],
  ex_text=E59)

Q("59c", 59, "c", B4, "B",
  r"$a_n = 3\cdot 2^{\,n-1}$",
  "Sí, perquè la successió té raó constant $r=2$ ($6:3=2$, $12:6=2$, "
  "$24:12=2$) i primer terme $a_1=3$: coincideix exactament.",
  [D("No, perquè l'exponent hauria de ser $n$, no $n-1$.",
     "DESPLACAMENT_INDEX",
     "L'exponent SÍ que ha de ser $n-1$: per $n=1$ dona "
     "$3\\cdot2^0=3$, el primer terme correcte. Amb exponent $n$ "
     "donaria $3\\cdot2^1=6$ per al primer terme, que seria "
     "incorrecte."),
   D("No, perquè la successió $3,6,12,24$ és aritmètica, no "
     "geomètrica.", "VEREDICTE_INVERTIT",
     "La successió és GEOMÈTRICA, no aritmètica: el que es manté "
     "constant és el quocient entre termes consecutius ($r=2$), no "
     "la diferència."),
   D("Sí, però només per als quatre primers termes.", "VEREDICTE_INVERTIT",
     "La fórmula val per a TOTS els termes, no només els quatre "
     "primers: un cop comprovada la raó constant, el terme general "
     "$a_n=a_1\\cdot r^{\\,n-1}$ es compleix sempre.")],
  ["Comprova la raó de la successió i compara-la amb l'exponent i el "
   "factor de la fórmula.",
   "$r=2$ i $a_1=3$: la fórmula $a_n=3\\cdot2^{\\,n-1}$ hi encaixa "
   "exactament."],
  ["$6:3=2$, $12:6=2$, $24:12=2$: raó constant, $r=2$",
   "$a_n=a_1\\cdot r^{\\,n-1}=3\\cdot2^{\\,n-1}$: coincideix amb "
   "aquesta expressió"],
  ex_text=E59)

Q("59d", 59, "d", B4, "B",
  "Algú afirma: «d'aquesta successió no se'n pot calcular el "
  "terme general». És cert?",
  "Fals: sí que es pot calcular, perquè la successió té raó constant "
  "$r=2$; és una progressió geomètrica amb terme general "
  "$a_n=3\\cdot2^{\\,n-1}$.",
  [D("Cert: com que $3,6,12,24$ no és ni una progressió aritmètica "
     "ni geomètrica, no té terme general.", "VEREDICTE_INVERTIT",
     "Sí que és una progressió geomètrica: el quocient entre termes "
     "consecutius és constant, $r=2$ ($6:3=2$, $12:6=2$, "
     "$12:24=2$)."),
   D("Cert: calen més de quatre termes per determinar el terme "
     "general amb seguretat.", "VEREDICTE_INVERTIT",
     "Amb quatre termes ja n'hi ha prou per comprovar que la raó és "
     "constant les tres vegades possibles: no calen més dades."),
   D("Fals: es pot calcular, però només aproximadament.",
     "VEREDICTE_INVERTIT",
     "Es pot calcular de manera EXACTA, no aproximada: el terme "
     "general $a_n=3\\cdot2^{\\,n-1}$ reprodueix tots els termes "
     "amb precisió.")],
  ["Comprova si la successió té una diferència o un quocient "
   "constant entre termes consecutius.",
   "$6:3=2$, $12:6=2$, $24:12=2$: raó constant, $r=2$, sí que es pot "
   "calcular el terme general."],
  ["$6:3=2$, $12:6=2$, $24:12=2$: raó constant, $r=2$",
   "$a_n=a_1\\cdot r^{\\,n-1}=3\\cdot2^{\\,n-1}$: sí que es pot "
   "calcular"],
  ex_text=E59)

Q("60", 60, "", B4, "A",
  # «PG» desplegat: l'abreviatura només s'entén havent llegit un altre
  # apartat, i cada ítem es carrega sol amb la seva URL.
  r"Terme d'una progressió geomètrica amb $a_1=7$, $r=3$ que val $3\,720\,087$",
  "13",
  [D("12", "DESPLACAMENT_INDEX",
     "$3^{12}=531\\,441$ (el resultat de dividir $3\\,720\\,087$ "
     "entre $7$), però l'exponent $12$ correspon a $n-1$, no a $n$: "
     "cal sumar-hi $1$ per trobar $n$."),
   D("531441", "COMPARA_TERMES",
     "Aquest és el valor de $r^{n-1}=3^{12}$, un pas intermedi del "
     "càlcul; el que es demana és la posició $n$ que ocupa el terme, "
     "no aquest valor."),
   D("18", "ORDRE_RESTA",
     "Revisa l'equació: cal aïllar $n$ de $3^{n-1}=531\\,441$ trobant "
     "quin exponent dona aquest resultat, no sumar exponents "
     "arbitraris.")],
  ["Iguala $a_n=7\\cdot3^{\\,n-1}$ a $3\\,720\\,087$ i aïlla la "
   "potència de $3$.",
   "$3^{\\,n-1}=3\\,720\\,087:7=531\\,441$. Comprova quina potència "
   "de $3$ dona aquest valor."],
  ["$7\\cdot3^{\\,n-1}=3\\,720\\,087\\Rightarrow3^{\\,n-1}="
   "3\\,720\\,087:7=531\\,441$",
   "$531\\,441=3^{12}$, per tant $n-1=12$",
   "$n=13$: és el tretzè terme"],
  ex_text=r"Un terme d'una progressió geomètrica val $3\,720\,087$. "
          r"Si el primer terme és $7$ i la raó és $3$, de quin terme "
          r"estem parlant?")

Q("61", 61, "", B4, "A",
  r"Posició de dos termes consecutius que valen $3$ i $4$, sabent que "
  r"$a_1=\dfrac{27}{16}$",
  r"$a_3=3,\;\;a_4=4$",
  [D(r"$a_1=3,\;\;a_2=4$", "COMPARA_TERMES",
     "El primer terme ja és conegut, $a_1=\\dfrac{27}{16}$, que no "
     "val $3$: cal buscar en QUINA posició apareixen els valors $3$ "
     "i $4$, no assumir que és al principi."),
   D(r"$a_2=3,\;\;a_3=4$", "DESPLACAMENT_INDEX",
     "Revisa el càlcul substituint $n=2$: "
     "$a_2=\\dfrac{27}{16}\\cdot\\dfrac43=\\dfrac94$, que no és $3$."),
   D(r"$a_4=3,\;\;a_5=4$", "DESPLACAMENT_INDEX",
     "Revisa el càlcul substituint $n=4$: "
     "$a_4=\\dfrac{27}{16}\\cdot\\left(\\dfrac43\\right)^3=4$, que ja "
     "és el valor $4$, no $3$: t'has avançat una posició.")],
  ["Primer troba la raó amb els dos termes coneguts, $3$ i $4$: "
   "$r=\\dfrac43$.",
   "Substitueix $a_n=\\dfrac{27}{16}\\cdot\\left(\\dfrac43\\right)"
   "^{n-1}$ per a $n=2,3,4\\dots$ fins trobar quan val $3$."],
  ["Els dos termes consecutius tenen raó $r=\\dfrac43$ (el quocient "
   "entre ells)",
   "$a_2=\\dfrac{27}{16}\\cdot\\dfrac43=\\dfrac94$",
   "$a_3=\\dfrac{27}{16}\\cdot\\left(\\dfrac43\\right)^2=3$",
   "$a_4=\\dfrac{27}{16}\\cdot\\left(\\dfrac43\\right)^3=4$",
   "Els termes que valen $3$ i $4$ ocupen les posicions $3$ i $4$"],
  ex_text=r"Dos termes consecutius d'una progressió geomètrica valen "
          r"$3$ i $4$. Esbrina quin lloc ocupen si "
          r"$a_1=\dfrac{27}{16}$.")
