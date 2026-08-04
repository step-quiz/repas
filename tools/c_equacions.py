# -*- coding: utf-8 -*-
"""c_equacions.py — Full 5: Equacions i sistemes.

Genera els ítems dels exercicis 75-100, que corresponen a la fusió de dos
fitxers font del repositori LaTeX (im5.tex + im6.tex), organitzats en 5
blocs:
  primer_grau      (75-79)   equacions de primer grau i amb denominadors
  formula_general   (80-81)   segon grau: fórmula general i discriminant
  factoritzacio     (82-84)   segon grau: incompletes, factor comú i producte
  sistemes          (85-89)   sistemes d'equacions lineals (2 incògnites)
  problemes         (90-100)  problemes que es resolen amb equació o sistema

Font: aquest full recull DOS fitxers LaTeX, im5.tex (exercicis 75-84,
equacions de primer i segon grau) i im6.tex (exercicis 85-100, sistemes i
problemes) — 10+16 = 26 exercicis, 63+36 = 99 ítems. És l'únic full del
lloc que ajunta dos fitxers font, i el motiu que a partir del Full 6 el
número de full vagi un per sota del número de fitxer.

Com als fulls anteriors: cap resposta s'escriu a mà — cada solució es
calcula amb sympy.solve() sobre l'equació/sistema simbòlic i es renderitza
a LaTeX amb els helpers propis d'aquest fitxer, en l'estil del projecte
(sense espais sobrers, signe sempre explícit, coeficient 1 implícit).

Verificació prèvia: els 99 items s'han resolt de manera independent amb
SymPy (Eq/solve) contrastant contra r-im5.tex i r-im6.tex (el solucionari
LaTeX subministrat, no generat per aquest projecte) abans d'escriure cap
codi — coincidència exacta en els 99 casos, sense cap error trobat als
solucionaris font (a diferència del que va passar a Full 4, on
r-im4.tex sí que portava un error, vegeu AUTHORING-GUIDE.md).
"""
from fractions import Fraction as F
from sympy import symbols, Eq, solve, Rational, sqrt, expand, nsimplify
from lib import Q, D, DT, ev, tex

B1 = "primer_grau"
B2 = "formula_general"
B3 = "factoritzacio"
B4 = "sistemes"
B5 = "problemes"

x, y = symbols("x y")


# ---------------------------------------------------------------- renderitzat

def frac_tex(v):
    """Fraction -> LaTeX, sense $...$: enter tal qual, fracció amb \\dfrac i
    signe sempre al davant. Igual que lib.tex() però accepta Fraction/int
    directament sense passar per SymPy."""
    v = F(v)
    if v.denominator == 1:
        return str(v.numerator)
    s = "-" if v.numerator < 0 else ""
    return r"%s\dfrac{%d}{%d}" % (s, abs(v.numerator), v.denominator)


def x_tex(v):
    """'x=valor', valor com a Fraction. Ja ve embolcallat en $...$ perquè
    conté una lletra (x) i mathify() no el reconeixeria com a matemàtica
    pura (vegeu el parany del mathify() a AUTHORING-GUIDE.md)."""
    return "$x=%s$" % frac_tex(v)


def xy_tex(vx, vy):
    """'x=a, y=b', per a la solució d'un sistema. Embolcallat en $...$."""
    return r"$x=%s,\ y=%s$" % (frac_tex(vx), frac_tex(vy))


def x_multi_tex(vals):
    """'x=a, x=b[, x=c]', per a una equació de segon grau amb més d'una
    solució. `vals` ja ve ordenat tal com s'ha de mostrar. Embolcallat."""
    return "$x=%s$" % r",\ ".join(frac_tex(v) for v in vals)


def x_doble_tex(v):
    """Una solució doble (segon grau amb discriminant 0)."""
    return "$x=%s$ (doble)" % frac_tex(v)


def sense_solucio_tex():
    return "Sense solució"


def sense_reals_tex():
    return "Sense solucions reals"


def disc_tex(a, b, c):
    """LaTeX del càlcul del discriminant Δ=b²-4ac amb els valors concrets,
    sense $...$ (per incrustar dins d'una cadena ja delimitada, com una
    pista o una resolució)."""
    b2 = b * b
    quatre_ac = 4 * a * c
    return r"\Delta=(%s)^2-4\cdot%s\cdot(%s)=%s-%s=%s" % (
        b, a, c, b2, quatre_ac, b2 - quatre_ac)


def eq2_tex(a, b, c):
    """'ax^2+bx+c=0' amb signes correctes, sense $...$."""
    parts = []
    if a == 1:
        parts.append("x^2")
    elif a == -1:
        parts.append("-x^2")
    else:
        parts.append("%dx^2" % a)
    if b != 0:
        parts.append(("+%dx" % b) if b > 0 else ("-%dx" % -b))
    if c != 0:
        parts.append(("+%d" % c) if c > 0 else ("-%d" % -c))
    return "".join(parts) + "=0"


def solve_lin(eq):
    """Resol una equació de primer grau en x. Torna un Fraction exacte."""
    sol = solve(eq, x)
    assert len(sol) == 1, "esperava exactament 1 solució: %s -> %s" % (eq, sol)
    r = Rational(sol[0])
    return F(int(r.p), int(r.q))


def solve_sis(eq1, eq2):
    """Resol un sistema 2x2 en x,y. Torna (Fraction, Fraction) exacte."""
    sol = solve((eq1, eq2), (x, y))
    rx, ry = Rational(sol[x]), Rational(sol[y])
    return F(int(rx.p), int(rx.q)), F(int(ry.p), int(ry.q))


def disc(a, b, c):
    return b * b - 4 * a * c


def solve_quad(a, b, c):
    """Resol ax²+bx+c=0. Torna la llista de solucions (Fraction), ordenada
    de menor a major, o [] si Δ<0. Si Δ=0 torna una llista d'un element."""
    d = disc(a, b, c)
    if d < 0:
        return []
    from math import isqrt
    if d == 0:
        return [F(-b, 2 * a)]
    arrel = isqrt(d)
    if arrel * arrel == d:
        r1 = F(-b - arrel, 2 * a)
        r2 = F(-b + arrel, 2 * a)
    else:
        # discriminant no quadrat perfecte: no hauria de passar en aquest
        # banc (tots els items estan triats/verificats perquè en surti un
        # de racional), però ho deixem explícit per si algun cas nou el
        # trenqués en comptes de fallar en silenci.
        raise ValueError("discriminant no quadrat perfecte: %d" % d)
    return sorted([r1, r2])


# =====================================================================
# BLOC 1 — EQUACIONS DE PRIMER GRAU (exercicis 75-79)
# =====================================================================

# ---- exercici 75: equacions amb parèntesis ----
E75 = "Resol."

# 75a: 6(x+11) = 40+6(x+2) — sense solució (identitat falsa)
Q("75a", 75, "a", B1, "A",
  r"$6(x+11) = 40 + 6(x+2)$",
  sense_solucio_tex(),
  [D(x_tex(F(-52, 6)), "PARENTESI_NO_DISTRIBUIT",
     "Si tot just canviessis de banda sense distribuir bé el parèntesi et "
     "sortiria un valor, però revisa: en desenvolupar els dos parèntesis, "
     "els termes amb $x$ es cancel·len i queda una igualtat numèrica "
     "falsa ($66\\ne52$), així que l'equació no té solució."),
   D(x_tex(F(0, 1)), "TERME_OBLIDAT_OPERACIO",
     "$x=0$ no compleix l'equació original: substitueix-lo i comprova que "
     "els dos costats no coincideixen. En realitat els termes amb $x$ es "
     "cancel·len i queda una igualtat falsa: no hi ha solució."),
   D(x_tex(F(52, 66)), "JERARQUIA",
     "Has operat els números abans de distribuir correctament els "
     "parèntesis. Desenvolupa primer $6(x+11)$ i $6(x+2)$ per separat; "
     "veuràs que els termes amb $x$ s'anul·len i queda una igualtat falsa.")],
  ["Distribueix el $6$ a dins de cada parèntesi abans de res.",
   "Un cop distribuïts els parèntesis, agrupa els termes amb $x$ a un "
   "costat i els números a l'altre."],
  ["$6(x+11)=40+6(x+2) \\;\\Longrightarrow\\; 6x+66=40+6x+12$",
   "$6x+66=6x+52$: els termes amb $x$ es cancel·len i queda $66=52$, "
   "una igualtat numèrica falsa.",
   "Com que no hi ha cap valor de $x$ que faci certa aquesta igualtat, "
   "l'equació no té solució."],
  ex_text=E75)

# 75b: 2(x-17) = x-3(12-2x) -> x=2/5
Q("75b", 75, "b", B1, "A",
  r"$2(x-17) = x - 3(12-2x)$",
  x_tex(F(2, 5)),
  [D(x_tex(F(-2, 5)), "SIGNE_FINAL",
     "El resultat final té el signe canviat: revisa el pas en què "
     "agrupes els termes independents a un costat."),
   D(x_tex(F(2, 11)), "MENYS_PARENTESI",
     "En distribuir $-3(12-2x)$ el signe $-$ ha d'afectar els DOS "
     "termes de dins: $-3\\cdot12=-36$ i $-3\\cdot(-2x)=+6x$."),
   D(x_tex(F(70, 5)), "TERME_OBLIDAT_OPERACIO",
     "S'ha perdut algun terme en agrupar; revisa que has passat TOTS "
     "els termes amb $x$ a un costat i tots els números a l'altre.")],
  ["Distribueix els dos parèntesis: el de l'esquerra ($2$) i el de la "
   "dreta, on el $-3$ afecta els dos termes de dins.",
   "Un cop sense parèntesis, agrupa els termes amb $x$ a un costat i "
   "els números a l'altre."],
  ["$2(x-17)=x-3(12-2x) \\;\\Longrightarrow\\; 2x-34=x-36+6x$",
   "$2x-34=7x-36 \\;\\Longrightarrow\\; -34+36=7x-2x \\;\\Longrightarrow\\; 2=5x$",
   "$x=\\dfrac{2}{5}$"],
  ex_text=E75)

# 75c: x-5(x-2)=6 -> x=1
Q("75c", 75, "c", B1, "A",
  r"$x - 5(x-2) = 6$",
  x_tex(F(1, 1)),
  [D(x_tex(F(-4, 1)), "MENYS_PARENTESI",
     "El $-5$ ha d'afectar els DOS termes de dins del parèntesi: "
     "$-5\\cdot x=-5x$ i $-5\\cdot(-2)=+10$, no només el primer."),
   D(x_tex(F(2, 1)), "SIGNE_TERME_INDEPENDENT",
     "Revisa el signe del $10$ que surt de distribuir $-5(x-2)$: "
     "com que $-5\\cdot(-2)=+10$, el terme independent és positiu."),
   D(x_tex(F(-1, 4)), "PRODUCTE_CREUAT",
     "Aquesta equació no té denominadors: no cal creuar res, només "
     "distribuir el parèntesi i aïllar $x$.")],
  ["Distribueix $-5(x-2)$: el signe $-$ afecta els dos termes de dins.",
   "Agrupa els termes amb $x$ a un costat i els números a l'altre."],
  ["$x-5(x-2)=6 \\;\\Longrightarrow\\; x-5x+10=6$",
   "$-4x=6-10 \\;\\Longrightarrow\\; -4x=-4$",
   "$x=1$"],
  ex_text=E75)

# 75d: 120 = 2x-(15-7x) -> x=15
Q("75d", 75, "d", B1, "A",
  r"$120 = 2x - (15-7x)$",
  x_tex(F(15, 1)),
  [D(x_tex(F(15, 9)), "SIMPLIFICACIO_INCOMPLETA",
     "Has arribat a $135=9x$ però encara no has dividit els dos "
     "costats per $9$: falta l'últim pas."),
   D(x_tex(F(-15, 1)), "MENYS_PARENTESI",
     "Revisa el signe: $-(15-7x)=-15+7x$, el $-$ canvia el signe "
     "dels DOS termes de dins, no només del primer."),
   D(x_tex(F(105, 9)), "TERME_OBLIDAT_OPERACIO",
     "S'ha perdut un terme en agrupar; revisa un per un els números "
     "que passen a l'altre costat.")],
  ["El $-$ davant del parèntesi $(15-7x)$ afecta els dos termes de dins.",
   "Un cop distribuït, agrupa tots els termes amb $x$ a un costat."],
  ["$120=2x-(15-7x) \\;\\Longrightarrow\\; 120=2x-15+7x$",
   "$120+15=9x \\;\\Longrightarrow\\; 135=9x$",
   "$x=15$"],
  ex_text=E75)

# 75e: 5(x+4)=7(x-2) -> x=17
Q("75e", 75, "e", B1, "A",
  r"$5(x+4) = 7(x-2)$",
  x_tex(F(17, 1)),
  [D(x_tex(F(-17, 1)), "SIGNE_FINAL",
     "El resultat té el signe canviat: revisa a quin costat has "
     "passat els termes amb $x$ i quin signe els correspon."),
   D(x_tex(F(6, 2)), "TERME_OBLIDAT_OPERACIO",
     "Revisa que has distribuït bé els DOS parèntesis abans "
     "d'agrupar: $5(x+4)=5x+20$ i $7(x-2)=7x-14$."),
   D(x_tex(F(34, 12)), "GRAUS_MAL_AGRUPATS",
     "Has agrupat malament els termes amb $x$ amb els termes "
     "independents; revisa quins van junts a cada costat.")],
  ["Distribueix els dos parèntesis per separat.",
   "Agrupa els termes amb $x$ a un costat i els números a l'altre."],
  ["$5(x+4)=7(x-2) \\;\\Longrightarrow\\; 5x+20=7x-14$",
   "$20+14=7x-5x \\;\\Longrightarrow\\; 34=2x$",
   "$x=17$"],
  ex_text=E75)

# 75f: 3(x+7)-6=2(x+8) -> x=1
Q("75f", 75, "f", B1, "A",
  r"$3(x+7) - 6 = 2(x+8)$",
  x_tex(F(1, 1)),
  [D(x_tex(F(31, 1)), "SIGNE_TERME_INDEPENDENT",
     "Revisa el signe del $-6$: no forma part del parèntesi, ja ve "
     "restant directament i s'ha de mantenir tal qual en agrupar."),
   D(x_tex(F(-1, 1)), "SIGNE_FINAL",
     "El resultat té el signe canviat: torna a revisar el pas final, "
     "$3x-2x=16-15$."),
   D(x_tex(F(37, 5)), "TERME_OBLIDAT_OPERACIO",
     "S'ha perdut algun terme independent pel camí; revisa'ls tots "
     "un per un abans d'aïllar $x$.")],
  ["Distribueix el parèntesi de l'esquerra ($3$) i el de la dreta ($2$).",
   "El $-6$ no forma part de cap parèntesi: es queda tal qual en agrupar."],
  ["$3(x+7)-6=2(x+8) \\;\\Longrightarrow\\; 3x+21-6=2x+16$",
   "$3x+15=2x+16 \\;\\Longrightarrow\\; 3x-2x=16-15$",
   "$x=1$"],
  ex_text=E75)


# ---- exercici 76: equacions amb un sol denominador ----
E76 = "Resol aquestes equacions."

casos_76 = [
    ("a", F(4, 20), F(3, 1), F(15, 1)),
    ("b", F(3, 6), F(-21, 1), F(-42, 1)),
    ("c", F(-2, 3), F(4, 1), F(-6, 1)),
    ("d", F(7, 4), F(28, 1), F(16, 1)),
    ("e", F(9, 3), F(-5, 1), F(-5, 3)),
    ("f", F(-3, 2), F(-25, 1), F(50, 3)),
]
for letra, coef, dreta, correcta in casos_76:
    num, den = coef.numerator, coef.denominator
    enun = r"$\dfrac{%dx}{%d} = %d$" % (num, den, dreta.numerator) \
        if dreta.denominator == 1 else r"$\dfrac{%dx}{%d} = %s$" % (num, den, frac_tex(dreta))
    # distractor: oblidar multiplicar per dreta*den (queda dreta/num en lloc de dreta*den/num)
    dist1 = dreta / F(num)
    # distractor: dividir per den en lloc de num (invertir quin nombre és el "coeficient")
    dist2 = (dreta * den) / F(den) if den != num else (dreta * den) / F(num + 1)
    dist2 = (dreta * den) / F(den)
    # distractor: signe canviat
    dist3 = -correcta
    cands = [dist1, dist2, dist3]
    cands = [c for c in cands if c != correcta]
    # assegurem 3 distractors únics entre si i diferents de la correcta
    extra_pool = [dreta, correcta + 1, correcta - 1, dreta * -1, dreta / den]
    seen = {correcta}
    finals = []
    for c in cands:
        if c not in seen:
            seen.add(c)
            finals.append(c)
    i = 0
    while len(finals) < 3:
        cand = extra_pool[i]
        i += 1
        if cand not in seen:
            seen.add(cand)
            finals.append(cand)
    d1, d2, d3 = finals[:3]
    Q("76" + letra, 76, letra, B1, "A", enun, x_tex(correcta),
      [D(x_tex(d1), "SIMPLIFICACIO_INCOMPLETA",
         "Has multiplicat en creu però no has acabat de simplificar la "
         "fracció resultant: divideix numerador i denominador pel m.c.d."),
       D(x_tex(d2), "ENTER_MULTIPLICA_DENOMINADOR",
         "En passar el denominador a l'altre costat, multiplica TOT el "
         "membre de la dreta, no només una part."),
       D(x_tex(d3), "SIGNE_FINAL",
         "Revisa els signes: si el numerador del coeficient de $x$ és "
         "negatiu, el resultat final n'hereta el signe segons la regla "
         "dels signes del quocient.")],
      ["Multiplica els dos costats pel denominador per fer-lo desaparèixer.",
       "Aïlla $x$ dividint pel nombre que l'acompanya."],
      [r"$\dfrac{%dx}{%d}=%s \;\Longrightarrow\; %dx=%s$"
       % (num, den, frac_tex(dreta), num, frac_tex(dreta * den)),
       "$x=%s$" % frac_tex(correcta)],
      ex_text=E76)


# ---- exercici 77: equacions amb denominador afectant tota una banda ----
E77 = "Resol."

Q("77a", 77, "a", B1, "A",
  r"$\dfrac{x-2}{5} = 1$",
  x_tex(F(7, 1)),
  [D(x_tex(F(3, 1)), "PRODUCTE_CREUAT",
     "Per treure el denominador cal multiplicar els DOS costats per $5$: "
     "$x-2=5$, no dividir el $2$ per $5$."),
   D(x_tex(F(-3, 1)), "SIGNE_FINAL",
     "Revisa el signe en aïllar $x$: de $x-2=5$ es passa el $-2$ "
     "sumant a l'altre costat."),
   D(x_tex(F(1, 5)), "INVERTIDA",
     "No cal invertir res: multiplica els dos costats per $5$ per "
     "eliminar el denominador i després aïlla $x$.")],
  ["Multiplica els dos costats per $5$ per eliminar el denominador."],
  [r"$\dfrac{x-2}{5}=1 \;\Longrightarrow\; x-2=5$", "$x=7$"],
  ex_text=E77)

Q("77b", 77, "b", B1, "A",
  r"$\dfrac{3x+15}{6} = -7$",
  x_tex(F(-19, 1)),
  [D(x_tex(F(-9, 1)), "TERME_OBLIDAT_OPERACIO",
     "En passar el $15$ a l'altre costat, revisa el signe: "
     "$3x=-42-15$."),
   D(x_tex(F(19, 1)), "SIGNE_FINAL",
     "El resultat té el signe canviat: revisa el pas final, "
     "$3x=-57$ dona una $x$ negativa."),
   D(x_tex(F(-3, 1)), "ENTER_MULTIPLICA_DENOMINADOR",
     "Quan multipliques els dos costats per $6$, el $-7$ de la dreta "
     "també es multiplica sencer: $6\\cdot(-7)=-42$.")],
  ["Multiplica els dos costats per $6$ per eliminar el denominador.",
   "Aïlla $x$: primer passa el $15$ a l'altre costat, després divideix."],
  [r"$\dfrac{3x+15}{6}=-7 \;\Longrightarrow\; 3x+15=-42$",
   "$3x=-57$", "$x=-19$"],
  ex_text=E77)

Q("77c", 77, "c", B1, "A",
  r"$\dfrac{3x}{2} + 20 = x + 25$",
  x_tex(F(10, 1)),
  [D(x_tex(F(90, 1)), "TERME_OBLIDAT_OPERACIO",
     "En multiplicar tota l'equació pel m.c.m., cal multiplicar CADA "
     "terme, incloent-hi els que ja no tenen denominador."),
   D(x_tex(F(-10, 1)), "SIGNE_FINAL",
     "Revisa el signe final: de $x=50-40$ surt un resultat positiu."),
   D(x_tex(F(2, 1)), "SIMPLIFICACIO_INCOMPLETA",
     "Després de multiplicar per $2$ i agrupar, revisa l'aritmètica "
     "del pas $3x-2x=50-40$.")],
  ["Multiplica tota l'equació pel m.c.m.$(2,1)=2$ per eliminar el "
   "denominador.",
   "Un cop sense fraccions, agrupa termes amb $x$ i números per separat."],
  [r"Multipliquem per $2$: $\dfrac{3x}{2}+20=x+25 \;\Longrightarrow\; "
   r"3x+40=2x+50$",
   "$3x-2x=50-40$", "$x=10$"],
  ex_text=E77)

Q("77d", 77, "d", B1, "A",
  r"$\dfrac{3x}{4} - 1 = 12 - 3x$",
  x_tex(F(52, 15)),
  [D(x_tex(F(52, 3)), "FACTOR_COMU_INCOMPLET",
     "Després d'agrupar tens $15x=52$: el $15$ prové de $3+12$, "
     "revisa aquest pas de suma dels coeficients de $x$."),
   D(x_tex(F(13, 3)), "SIGNE_TERME_INDEPENDENT",
     "Revisa el signe en passar el $-4$ i el $48$ al mateix costat: "
     "$48+4=52$."),
   D(x_tex(F(-52, 15)), "SIGNE_FINAL",
     "El resultat té el signe canviat; revisa que els dos costats "
     "de l'equació $15x=52$ siguin positius.")],
  ["Multiplica tota l'equació pel m.c.m.$(4,1)=4$.",
   "Agrupa tots els termes amb $x$ a un costat (compte amb el $-3x$ "
   "de la dreta, que passa sumant)."],
  [r"Multipliquem per $4$: $\dfrac{3x}{4}-1=12-3x \;\Longrightarrow\; "
   r"3x-4=48-12x$",
   "$3x+12x=48+4 \\;\\Longrightarrow\\; 15x=52$",
   r"$x=\dfrac{52}{15}$"],
  ex_text=E77)


# ---- exercici 78: equacions amb dos denominadors, m.c.m. ----
E78 = "Calcula el valor de $x$."

Q("78a", 78, "a", B1, "A",
  r"$\dfrac{3x}{5} + 7 = \dfrac{2x}{6} + 9$",
  x_tex(F(15, 2)),
  [D(x_tex(F(1, 2)), "NUMERADORS_SENSE_AJUSTAR",
     "En passar de denominador $5$ (o $6$) al comú $30$, cada "
     "numerador s'ha de multiplicar pel mateix factor que el seu "
     "denominador: $\\frac{3x}{5}\\to\\frac{18x}{30}$, no $\\frac{3x}{30}$."),
   D(x_tex(F(60, 28)), "SIMPLIFICACIO_INCOMPLETA",
     "Has arribat a $8x=60$, però encara no has simplificat la "
     "fracció $\\frac{60}{8}$ al màxim: divideix numerador i "
     "denominador entre $4$."),
   D(x_tex(F(-15, 2)), "SIGNE_FINAL",
     "El resultat té el signe canviat: $8x=60$ dona una $x$ positiva.")],
  ["El m.c.m.$(5,6)=30$: multiplica tota l'equació per $30$.",
   "Un cop sense denominadors, agrupa termes amb $x$ i números."],
  [r"M.c.m.$(5,6)=30$: $\dfrac{3x}{5}+7=\dfrac{2x}{6}+9 "
   r"\;\Longrightarrow\; 18x+210=10x+270$",
   "$18x-10x=270-210 \\;\\Longrightarrow\\; 8x=60$",
   r"$x=\dfrac{60}{8}=\dfrac{15}{2}$"],
  ex_text=E78)

Q("78b", 78, "b", B1, "A",
  r"$\dfrac{x+2}{3} = 5x - 46$",
  x_tex(F(10, 1)),
  [D(x_tex(F(140, 16)), "GRAU_PRODUCTE_MAL",
     "Revisa quants termes amb $x$ queden en total a la dreta: "
     "$15x-x=14x$, no $16x$."),
   D(x_tex(F(-10, 1)), "SIGNE_TERME_INDEPENDENT",
     "Revisa el signe del $138$: en multiplicar $3\\cdot(5x-46)$ el "
     "resultat és $15x-138$, i aquest $-138$ passa sumant a l'esquerra."),
   D(x_tex(F(136, 14)), "SIMPLIFICACIO_INCOMPLETA",
     "Revisa l'aritmètica final: $2+138=140$, i $140:14=10$ exacte.")],
  ["Multiplica els dos costats per $3$ per eliminar el denominador.",
   "Agrupa tots els termes amb $x$ a un costat."],
  [r"$\dfrac{x+2}{3}=5x-46 \;\Longrightarrow\; x+2=15x-138$",
   "$2+138=15x-x \\;\\Longrightarrow\\; 140=14x$", "$x=10$"],
  ex_text=E78)

Q("78c", 78, "c", B1, "A",
  r"$x - \dfrac{x+4}{5} = 1 + \dfrac{x}{2}$",
  x_tex(F(6, 1)),
  [D(x_tex(F(18, 13)), "SIMPLIFICACIO_INCOMPLETA",
     "Revisa que has agrupat bé els termes amb $x$: $10x-2x-5x=3x$, "
     "no un altre coeficient."),
   D(x_tex(F(-6, 1)), "SIGNE_FINAL",
     "El resultat té el signe canviat: $3x=18$ dona una $x$ positiva."),
   D(x_tex(F(2, 1)), "NUMERADORS_SENSE_AJUSTAR",
     "En multiplicar pel m.c.m.$(5,2)=10$, cada terme s'ha de "
     "multiplicar pel factor que li correspon segons el seu propi "
     "denominador, no tots pel mateix nombre.")],
  ["El m.c.m.$(5,2)=10$: multiplica tota l'equació per $10$.",
   "Compte amb el signe: $-\\frac{x+4}{5}$ multiplicat per $10$ dona "
   "$-2(x+4)$, i el parèntesi s'ha de distribuir sencer."],
  [r"M.c.m.$(5,2)=10$: $x-\dfrac{x+4}{5}=1+\dfrac{x}{2} "
   r"\;\Longrightarrow\; 10x-2(x+4)=10+5x$",
   "$10x-2x-8=10+5x \\;\\Longrightarrow\\; 8x-5x=10+8$",
   "$3x=18 \\;\\Longrightarrow\\; x=6$"],
  ex_text=E78)

Q("78d", 78, "d", B1, "A",
  r"$\dfrac{x+8}{2} - \dfrac{x-4}{6} = 2$",
  x_tex(F(-8, 1)),
  [D(x_tex(F(8, 1)), "SIGNE_FINAL",
     "Revisa el signe final: de $2x=-16$ surt una $x$ negativa."),
   D(x_tex(F(-4, 1)), "MENYS_PARENTESI",
     "En distribuir $-(x-4)$ (que ve de $-\\frac{x-4}{6}\\cdot6$), el "
     "signe $-$ afecta els dos termes: $-x+4$, no només el primer."),
   D(x_tex(F(2, 1)), "TERME_OBLIDAT_OPERACIO",
     "Revisa que has passat TOTS els números a l'esquerra: "
     "$12-28=-16$, no un altre valor.")],
  ["El m.c.m.$(2,6)=6$: multiplica tota l'equació per $6$.",
   "El $-\\frac{x-4}{6}$ es converteix en $-(x-4)$: distribueix el "
   "signe menys als dos termes."],
  [r"M.c.m.$(2,6)=6$: $\dfrac{x+8}{2}-\dfrac{x-4}{6}=2 "
   r"\;\Longrightarrow\; 3(x+8)-(x-4)=12$",
   "$3x+24-x+4=12 \\;\\Longrightarrow\\; 2x=12-28$",
   "$2x=-16 \\;\\Longrightarrow\\; x=-8$"],
  ex_text=E78)

Q("78e", 78, "e", B1, "A",
  r"$\dfrac{x-5}{5} + \dfrac{8-x}{2} + \dfrac{2x-10}{2} = 3$",
  x_tex(F(50, 7)),
  [D(x_tex(F(-50, 7)), "SIGNE_FINAL",
     "Revisa el signe final: $7x=50$ dona una $x$ positiva."),
   D(x_tex(F(30, 7)), "TERME_OBLIDAT_OPERACIO",
     "En agrupar els números de l'esquerra revisa un a un: "
     "$-10+40-50=-20$, no un altre valor."),
   D(x_tex(F(50, 17)), "GRAUS_MAL_AGRUPATS",
     "Revisa la suma dels coeficients de $x$: $2x-5x+10x=7x$, no un "
     "altre coeficient.")],
  ["El m.c.m.$(5,2,2)=10$: multiplica tota l'equació per $10$.",
   "Un cop sense denominadors, agrupa per separat els termes amb "
   "$x$ i els números."],
  [r"M.c.m.$(5,2,2)=10$: multipliquem cada terme pel factor que li "
   r"correspon: $2(x-5)+5(8-x)+5(2x-10)=30$",
   "$2x-10+40-5x+10x-50=30 \\;\\Longrightarrow\\; 7x-20=30$",
   r"$7x=50 \;\Longrightarrow\; x=\dfrac{50}{7}$"],
  ex_text=E78)

Q("78f", 78, "f", B1, "A",
  r"$\dfrac{x-10}{2} - \dfrac{x-20}{4} - \dfrac{x-30}{3} = 5$",
  x_tex(F(60, 1)),
  [D(x_tex(F(-60, 1)), "SIGNE_FINAL",
     "Revisa el signe final: de $-x=-60$ surt una $x$ positiva."),
   D(x_tex(F(180, 1)), "SIMPLIFICACIO_INCOMPLETA",
     "Revisa el pas $-x+120=60$: el $120$ ha de restar a banda i "
     "banda, no sumar-se dues vegades."),
   D(x_tex(F(20, 1)), "MENYS_PARENTESI",
     "Quan distribueixes $-3(x-20)$ i $-4(x-30)$, el signe $-$ ha "
     "d'afectar els dos termes de cada parèntesi.")],
  ["El m.c.m.$(2,4,3)=12$: multiplica tota l'equació per $12$.",
   "Compte amb els signes en distribuir cada parèntesi que resulta "
   "de multiplicar pel m.c.m."],
  [r"M.c.m.$(2,4,3)=12$: $6(x-10)-3(x-20)-4(x-30)=60$",
   "$6x-60-3x+60-4x+120=60 \\;\\Longrightarrow\\; -x+120=60$",
   "$-x=-60 \\;\\Longrightarrow\\; x=60$"],
  ex_text=E78)


# ---- exercici 79: equacions amb denominadors, més complexes ----
E79 = "Busca la solució d'aquestes equacions."

Q("79a", 79, "a", B1, "A",
  r"$\dfrac{2x-10}{3} - \dfrac{3(x-12)}{4} = -1$",
  x_tex(F(80, 1)),
  [D(x_tex(F(-80, 1)), "SIGNE_FINAL",
     "Revisa el signe final: de $-x=-80$ surt una $x$ positiva."),
   D(x_tex(F(148, 4)), "DISTRIBUCIO_INCOMPLETA",
     "En distribuir $-3\\cdot3(x-12)$, el factor $9$ ha de "
     "multiplicar els DOS termes del parèntesi: $9x-108$."),
   D(x_tex(F(48, 1)), "TERME_OBLIDAT_OPERACIO",
     "Revisa el pas $-x+68=-12$: cal aïllar correctament passant "
     "el $68$ a l'altre costat.")],
  ["El m.c.m.$(3,4)=12$: multiplica tota l'equació per $12$.",
   "Distribueix amb cura: el $-3(x-12)$ multiplicat per $3$ dona "
   "$-9(x-12)=-9x+108$."],
  [r"M.c.m.$(3,4)=12$: $4(2x-10)-3\cdot3(x-12)=-12$",
   "$8x-40-9x+108=-12 \\;\\Longrightarrow\\; -x+68=-12$",
   "$-x=-80 \\;\\Longrightarrow\\; x=80$"],
  ex_text=E79)

Q("79b", 79, "b", B1, "A",
  r"$\dfrac{-3x-3}{5} = 3 - 4(x+2)$",
  x_tex(F(-22, 17)),
  [D(x_tex(F(22, 17)), "SIGNE_FINAL",
     "Revisa el signe: $17x=-22$ dona una $x$ negativa."),
   D(x_tex(F(-28, 17)), "MENYS_PARENTESI",
     "En distribuir $-4(x+2)$, el signe $-$ afecta els dos termes: "
     "$-4x-8$, no només el primer."),
   D(x_tex(F(-22, 23)), "GRAUS_MAL_AGRUPATS",
     "Revisa la suma final dels coeficients de $x$: "
     "$-3x+20x=17x$, no un altre coeficient.")],
  ["Multiplica els dos costats per $5$ per eliminar el denominador.",
   "Distribueix $5\\cdot(3-4(x+2))$ amb cura: primer el $-4(x+2)$, "
   "després el $5$ per tot."],
  [r"Multipliquem per $5$: $-3x-3=5(3-4x-8)$",
   "$-3x-3=15-20x-40 \\;\\Longrightarrow\\; -3x-3=-20x-25$",
   r"$-3x+20x=-25+3 \;\Longrightarrow\; 17x=-22 \;\Longrightarrow\; "
   r"x=-\dfrac{22}{17}$"],
  ex_text=E79)

Q("79c", 79, "c", B1, "A",
  r"$\dfrac{2x-5}{5} + \dfrac{x+1}{4} = 20 - x$",
  x_tex(F(415, 33)),
  [D(x_tex(F(-415, 33)), "SIGNE_FINAL",
     "Revisa el signe final: $33x=415$ dona una $x$ positiva."),
   D(x_tex(F(400, 33)), "TERME_OBLIDAT_OPERACIO",
     "Revisa la suma dels números a l'esquerra: $-20+5=-15$, i "
     "després $400+15=415$."),
   D(x_tex(F(415, 13)), "GRAUS_MAL_AGRUPATS",
     "Revisa la suma dels coeficients de $x$ al pas final: "
     "$13x+20x=33x$, no un altre coeficient.")],
  ["El m.c.m.$(5,4)=20$: multiplica tota l'equació per $20$.",
   "Un cop sense denominadors, passa tots els termes amb $x$ a un "
   "costat i els números a l'altre."],
  [r"M.c.m.$(5,4)=20$: $4(2x-5)+5(x+1)=20(20-x)$",
   "$8x-20+5x+5=400-20x \\;\\Longrightarrow\\; 13x-15=400-20x$",
   r"$13x+20x=400+15 \;\Longrightarrow\; 33x=415 \;\Longrightarrow\; "
   r"x=\dfrac{415}{33}$"],
  ex_text=E79)

Q("79d", 79, "d", B1, "A",
  r"$\dfrac{3-x}{7} - x = \dfrac{3+2(x-1)}{14}$",
  x_tex(F(5, 18)),
  [D(x_tex(F(-5, 18)), "SIGNE_FINAL",
     "Revisa el signe final: $-18x=-5$ dona una $x$ positiva."),
   D(x_tex(F(5, 14)), "DISTRIBUCIO_INCOMPLETA",
     "Revisa el terme $2(x-1)$ dins del numerador de la dreta: "
     "$2x-2$, i després $3+2x-2=2x+1$."),
   D(x_tex(F(1, 18)), "TERME_OBLIDAT_OPERACIO",
     "Revisa la suma final: $1-6=-5$, no un altre valor.")],
  ["El m.c.m.$(7,14)=14$: multiplica tota l'equació per $14$.",
   "El numerador de la dreta ja porta un parèntesi a dins, "
   "$3+2(x-1)$: distribueix-lo abans de simplificar."],
  [r"M.c.m.$(7,14)=14$: $2(3-x)-14x=3+2(x-1)$",
   "$6-2x-14x=3+2x-2 \\;\\Longrightarrow\\; 6-16x=1+2x$",
   r"$-16x-2x=1-6 \;\Longrightarrow\; -18x=-5 \;\Longrightarrow\; "
   r"x=\dfrac{5}{18}$"],
  ex_text=E79)

Q("79e", 79, "e", B1, "A",
  r"$\dfrac{4x-6}{10} + 2x = 21 - \dfrac{3(x+1)}{12}$",
  x_tex(F(427, 53)),
  [D(x_tex(F(-427, 53)), "SIGNE_FINAL",
     "Revisa el signe final: $159x=1281$ dona una $x$ positiva."),
   D("$x=\\dfrac{1281}{159}$", "SIMPLIFICACIO_INCOMPLETA",
     "El resultat $\\frac{1281}{159}$ encara es pot simplificar "
     "dividint numerador i denominador pel seu m.c.d. ($3$), i "
     "arribar a $\\frac{427}{53}$."),
   D("$x=\\dfrac{427}{159}$", "SIMPLIFICACIO_PARCIAL",
     "Has simplificat només el numerador i no el denominador (o a "
     "l'inrevés): $\\frac{1281}{159}$ s'ha de dividir per $3$ als "
     "DOS costats de la fracció per arribar a $\\frac{427}{53}$.")],
  ["El m.c.m.$(10,1,12)=60$: multiplica tota l'equació per $60$.",
   "Un cop sense denominadors, agrupa termes amb $x$ i números, i "
   "simplifica la fracció final al màxim."],
  [r"M.c.m.$(10,1,12)=60$: $6(4x-6)+120x=1260-15(x+1)$",
   "$24x-36+120x=1260-15x-15 \\;\\Longrightarrow\\; 144x-36=1245-15x$",
   r"$144x+15x=1245+36 \;\Longrightarrow\; 159x=1281 \;\Longrightarrow\; "
   r"x=\dfrac{1281}{159}=\dfrac{427}{53}$"],
  ex_text=E79)


# =====================================================================
# BLOC 2 — SEGON GRAU: FÓRMULA GENERAL I DISCRIMINANT (exercicis 80-81)
# =====================================================================

# ---- exercici 80: fórmula general ----
E80 = "Resol les equacions de segon grau aplicant-hi la fórmula general."

def _q80(letra, a, b, c, correcta, dists):
    """Helper intern només per registrar l'exercici 80, cas a cas, sense
    generació condicional: cada cas es defineix explícitament més avall
    perquè els distractors siguin sempre valors concrets i verificats,
    no expressions genèriques que puguin coincidir per casualitat amb
    la resposta correcta (com va passar en un primer intent amb 80a)."""
    enun = r"$%s$" % eq2_tex(a, b, c)
    Q("80" + letra, 80, letra, B2, "A", enun, correcta, dists,
      ["Identifica $a$, $b$ i $c$ i calcula primer el discriminant "
       "$\\Delta=b^2-4ac$.",
       "El signe de $\\Delta$ et diu quantes solucions reals hi ha "
       "abans d'aplicar la fórmula sencera."],
      [r"$a=%d,\ b=%d,\ c=%d$: $%s$" % (a, b, c, disc_tex(a, b, c))]
      + ([r"Com que $\Delta<0$, l'equació no té solucions reals."]
         if disc(a, b, c) < 0 else
         [r"$x=\dfrac{%d\pm\sqrt{%d}}{%d}$" % (-b, disc(a, b, c), 2 * a),
          correcta]),
      ex_text=E80)


# 80a: x^2-5x+6=0 -> Δ=1, x=2,3
_q80("a", 1, -5, 6, x_multi_tex([F(2), F(3)]),
     [D(x_multi_tex([F(-2), F(-3)]), "SIGNE_QUOCIENT",
        "Revisa el signe de $-b$ al numerador: amb $b=-5$, el "
        "numerador de la fórmula porta $+5$, i les dues solucions "
        "surten positives."),
      D(x_doble_tex(F(3)), "VEREDICTE_INVERTIT",
        "El discriminant $\\Delta=1$ és positiu (no zero): hi ha "
        "DUES solucions diferents, no una de doble."),
      D(x_multi_tex([F(1), F(6)]), "PRODUCTE_CREUAT",
        "Revisa la fórmula: no n'hi ha prou de descompondre $6$ com "
        "a producte de dos factors, cal aplicar "
        "$x=\\frac{-b\\pm\\sqrt\\Delta}{2a}$.")])

# 80b: 2x^2-4x+13=0 -> Δ=-88 <0
_q80("b", 2, -4, 13, sense_reals_tex(),
     [D(x_doble_tex(F(1)), "PARITAT_EXPONENT",
        "Un discriminant negatiu vol dir que NO hi ha cap solució "
        "real, ni tan sols una de doble: torna a calcular "
        "$\\Delta=b^2-4ac$."),
      D(x_multi_tex([F(-1), F(1)]), "SIGNE_PRODUCTE",
        "Revisa el càlcul del discriminant amb cura: "
        "$\\Delta=(-4)^2-4\\cdot2\\cdot13=16-104=-88$, negatiu."),
      D(sense_solucio_tex(), "VEREDICTE_INVERTIT",
        "\"Sense solucions reals\" no és el mateix que \"sense "
        "solució\": aquí ens referim a nombres reals, i el "
        "discriminant negatiu ho confirma.")])

# 80c: x^2+8x+16=0 -> Δ=0, x=-4 (doble)
_q80("c", 1, 8, 16, x_doble_tex(F(-4)),
     [D(x_multi_tex([F(-4), F(4)]), "SIGNE_QUOCIENT",
        "Quan $\\Delta=0$ només hi ha UNA solució (doble), no dues "
        "de signe oposat: revisa el signe de $-b$ al numerador."),
      D(sense_reals_tex(), "VEREDICTE_INVERTIT",
        "$\\Delta=0$ no vol dir que no hi hagi solucions reals: "
        "vol dir que n'hi ha exactament una (doble)."),
      D(x_doble_tex(F(-8)), "ORDRE_MULTIPLICACIO_DIVISIO",
        "Revisa la divisió final entre $2a=2$: el numerador "
        "$-8\\pm0$ es divideix TOT entre $2$, no es queda sense "
        "dividir.")])

# 80d: 3x^2+2x-16=0 -> Δ=196, x=-8/3, 2
_q80("d", 3, 2, -16, x_multi_tex([F(-8, 3), F(2)]),
     [D(x_multi_tex([F(8, 3), F(-2)]), "SIGNE_QUOCIENT",
        "Revisa el signe de $-b$ al numerador: amb $b=2$, el "
        "numerador porta $-2$."),
      D(x_multi_tex([F(-8, 6), F(2, 6)]), "SIMPLIFICACIO_INCOMPLETA",
        "Les fraccions finals encara es poden simplificar dividint "
        "numerador i denominador entre $2$."),
      D(x_multi_tex([F(-8, 3), F(-2)]), "SIGNE_FINAL",
        "Revisa el signe de la segona solució: "
        "$\\frac{-2+14}{6}=\\frac{12}{6}=2$, positiu.")])

# 80e: x^2-2x+1=0 -> Δ=0, x=1 (doble)
_q80("e", 1, -2, 1, x_doble_tex(F(1)),
     [D(x_multi_tex([F(1), F(-1)]), "SIGNE_QUOCIENT",
        "Quan $\\Delta=0$ només hi ha UNA solució (doble): revisa "
        "el signe de $-b$ al numerador, amb $b=-2$ el numerador "
        "porta $+2$."),
      D(sense_reals_tex(), "VEREDICTE_INVERTIT",
        "$\\Delta=0$ no vol dir que no hi hagi solucions reals: "
        "vol dir que n'hi ha exactament una (doble)."),
      D(x_doble_tex(F(2)), "ORDRE_MULTIPLICACIO_DIVISIO",
        "Revisa la divisió final entre $2a=2$: el numerador "
        "$2\\pm0$ es divideix entre $2$, i dona $1$, no $2$.")])

# 80f: 7x^2-3x+1=0 -> Δ=-19 <0
_q80("f", 7, -3, 1, sense_reals_tex(),
     [D(x_doble_tex(F(3, 14)), "PARITAT_EXPONENT",
        "Un discriminant negatiu vol dir que NO hi ha cap solució "
        "real, ni tan sols una de doble: torna a calcular "
        "$\\Delta=b^2-4ac$."),
      D(x_multi_tex([F(-3, 14), F(3, 14)]), "SIGNE_PRODUCTE",
        "Revisa el càlcul del discriminant: "
        "$\\Delta=(-3)^2-4\\cdot7\\cdot1=9-28=-19$, negatiu."),
      D(sense_solucio_tex(), "VEREDICTE_INVERTIT",
        "\"Sense solucions reals\" no és el mateix que \"sense "
        "solució\": el discriminant negatiu confirma que no n'hi ha "
        "cap de real.")])

# 80g: -x^2-4x+5=0 -> Δ=36, x=-5, 1
_q80("g", -1, -4, 5, x_multi_tex([F(-5), F(1)]),
     [D(x_multi_tex([F(5), F(-1)]), "SIGNE_QUOCIENT",
        "Revisa el signe de $-b$ al numerador: amb $b=-4$, el "
        "numerador porta $+4$; i el denominador $2a=-2$ és "
        "negatiu, cosa que també afecta el signe final."),
      D(x_multi_tex([F(-1), F(5)]), "SIGNE_FINAL",
        "Revisa quin dels dos casos del $\\pm$ dona cada solució: "
        "$\\frac{4+6}{-2}=-5$ i $\\frac{4-6}{-2}=1$."),
      D(x_multi_tex([F(-9), F(5)]), "ORDRE_MULTIPLICACIO_DIVISIO",
        "Revisa l'aritmètica del numerador abans de dividir: "
        "$4+\\sqrt{36}=4+6=10$, no un altre valor.")])


# ---- exercici 81: nombre de solucions (sense resoldre) ----
E81 = "Sense resoldre-les, esbrina el nombre de solucions d'aquestes equacions."

casos_81 = [
    ("a", 1, 5, 6), ("b", -2, -6, 8), ("c", 1, -8, 16), ("d", -1, 1, 1),
    ("e", 1, 8, 16), ("f", 2, -4, 13), ("g", 7, -3, 1),
]
for letra, a, b, c in casos_81:
    d = disc(a, b, c)
    if d > 0:
        correcta = "2 solucions"
        dists_vals = ["1 solució (doble)", "Cap solució real",
                      "3 solucions"]
        dists_tags = ["VEREDICTE_INVERTIT", "SIGNE_PRODUCTE", "PARITAT_EXPONENT"]
    elif d == 0:
        correcta = "1 solució (doble)"
        dists_vals = ["2 solucions", "Cap solució real", "0 solucions"]
        dists_tags = ["VEREDICTE_INVERTIT", "SIGNE_PRODUCTE", "VEREDICTE_INVERTIT"]
    else:
        correcta = "Cap solució real"
        dists_vals = ["2 solucions", "1 solució (doble)", "Infinites solucions"]
        dists_tags = ["SIGNE_PRODUCTE", "VEREDICTE_INVERTIT", "SIGNE_PRODUCTE"]
    fb = {
        "VEREDICTE_INVERTIT": "El veredicte no coincideix amb el signe real del "
            "discriminant que has (o hauries d'haver) calculat: torna-hi a mirar.",
        "SIGNE_PRODUCTE": "Revisa el càlcul de $\\Delta=b^2-4ac$ amb els signes "
            "correctes de $a$, $b$ i $c$: un error de signe aquí canvia "
            "completament el veredicte.",
        "PARITAT_EXPONENT": "Una equació de segon grau (grau 2) té com a molt "
            "2 solucions reals, mai 3: revisa que has identificat bé el grau.",
    }
    Q("81" + letra, 81, letra, B2, "A",
      r"$%s$" % eq2_tex(a, b, c), correcta,
      [D(v, t, fb[t]) for v, t in zip(dists_vals, dists_tags)],
      ["No cal resoldre l'equació: només calcula el discriminant "
       "$\\Delta=b^2-4ac$ i mira'n el signe.",
       "$\\Delta>0$: dues solucions. $\\Delta=0$: una (doble). "
       "$\\Delta<0$: cap de real."],
      [r"$a=%d,\ b=%d,\ c=%d$: $%s$" % (a, b, c, disc_tex(a, b, c)),
       "%s $\\Rightarrow$ %s" % (
           ("$\\Delta>0$" if d > 0 else ("$\\Delta=0$" if d == 0 else "$\\Delta<0$")),
           correcta)],
      ex_text=E81)


# =====================================================================
# BLOC 3 — SEGON GRAU: FACTOR COMÚ I FACTORITZACIÓ (exercicis 82-84)
# =====================================================================

# ---- exercici 82: incompletes (sense terme independent), factor comú x ----
E82 = "Resol."

casos_82 = [
    ("a", 1, -7, [F(0), F(7)]),
    ("b", 1, 3, [F(0), F(-3)]),
    ("c", 1, -25, [F(0), F(25)]),
    ("d", 1, -10, [F(0), F(10)]),
    ("e", 16, -80, [F(0), F(5)]),   # 16x(x-5)=0
    ("f", 3, -12, [F(0), F(4)]),
    ("g", 4, -5, [F(0), F(5, 4)]),  # 3x=4x^2-2x -> 4x^2-5x=0
    ("h", 4, -5, [F(0), F(5, 4)]),  # 4x^2=5x -> 4x^2-5x=0 (mateix resultat, enunciat diferent)
    ("i", 25, -100, [F(0), F(4)]),
]
enuncs_82 = {
    "a": r"$x^2-7x=0$", "b": r"$x^2+3x=0$", "c": r"$x^2-25x=0$",
    "d": r"$x^2-10x=0$", "e": r"$16x(x-5)=0$", "f": r"$3x^2-12x=0$",
    "g": r"$3x = 4x^2-2x$", "h": r"$4x^2=5x$", "i": r"$25x^2-100x=0$",
}
for letra, a, b, sols in casos_82:
    correcta = x_multi_tex(sols)
    zero, altra = sols[0], sols[1]
    dists = [
        D(x_tex(altra), "FACTOR_COMU_INCOMPLET",
          "En treure factor comú $x$, l'equació té DUES solucions "
          "(una és sempre $x=0$): no la descartis."),
        D(x_multi_tex([-altra, F(0)]) if altra != 0 else x_multi_tex([F(1)]),
          "SIGNE_FINAL",
          "Revisa el signe de la segona solució: iguala cada factor a "
          "zero per separat i aïlla $x$ amb cura."),
        D(x_multi_tex([zero, altra * 2]) if altra != 0 else x_multi_tex([F(-1), F(0)]),
          "FACTOR_COMU_MAL_DIVIDIT",
          "En dividir pel factor comú, revisa que cada terme quedi "
          "dividit correctament, no només un.")]
    Q("82" + letra, 82, letra, B3, "A", enuncs_82[letra], correcta, dists,
      ["Treu factor comú $x$ (o el factor comú que correspongui) per "
       "convertir-ho en un producte igualat a zero.",
       "Un producte val zero quan algun dels seus factors ho és: "
       "iguala cada factor a zero per separat."],
      ["Factoritzem traient el factor comú corresponent i igualem "
       "cada factor a zero.",
       correcta],
      ex_text=E82)


# ---- exercici 83: ja factoritzada, producte de factors = 0 ----
E83 = "Calcula sense aplicar-hi la fórmula general."

Q("83a", 83, "a", B3, "A",
  r"$(x+2)(x-2) = 0$",
  x_multi_tex([F(-2), F(2)]),
  [D(x_tex(F(-2)), "FACTOR_COMU_INCOMPLET",
     "Un producte de dos factors igualat a zero té DUES solucions, "
     "una per cada factor: no en descartis cap."),
   D(x_tex(F(2)), "FACTOR_COMU_INCOMPLET",
     "Un producte de dos factors igualat a zero té DUES solucions, "
     "una per cada factor: no en descartis cap."),
   D(x_tex(F(4)), "POTENCIA_DE_SUMA",
     "No cal desenvolupar el producte com $x^2-4=0$ i després "
     "\"sumar\" res: amb els factors ja donats, iguala cadascun a "
     "zero directament.")],
  ["Un producte val zero quan algun dels seus factors ho és.",
   "Iguala cada factor a zero per separat i aïlla $x$."],
  ["$(x+2)(x-2)=0 \\;\\Longrightarrow\\; x+2=0$ o $x-2=0$",
   "$x=-2$ o $x=2$"],
  ex_text=E83)

Q("83b", 83, "b", B3, "A",
  r"$(x-3)(x+3) = 0$",
  x_multi_tex([F(-3), F(3)]),
  [D(x_tex(F(3)), "FACTOR_COMU_INCOMPLET",
     "Aquest producte té DUES solucions, una per cada factor: no en "
     "descartis cap."),
   D(x_tex(F(-3)), "FACTOR_COMU_INCOMPLET",
     "Aquest producte té DUES solucions, una per cada factor: no en "
     "descartis cap."),
   D(x_tex(F(9)), "POTENCIA_DE_SUMA",
     "No cal calcular cap quadrat: amb els factors ja donats, iguala "
     "cadascun a zero directament.")],
  ["Un producte val zero quan algun dels seus factors ho és.",
   "Iguala cada factor a zero per separat."],
  ["$(x-3)(x+3)=0 \\;\\Longrightarrow\\; x-3=0$ o $x+3=0$",
   "$x=3$ o $x=-3$"],
  ex_text=E83)

Q("83c", 83, "c", B3, "A",
  r"$(x+3)(2x-5)\left(5 - \dfrac{x}{2}\right) = 0$",
  x_multi_tex([F(-3), F(5, 2), F(10)]),
  [D(x_multi_tex([F(-3), F(5, 2)]), "FACTOR_COMU_INCOMPLET",
     "Hi ha TRES factors en aquest producte, no dos: el tercer, "
     "$5-\\frac{x}{2}$, també aporta la seva solució."),
   D(x_multi_tex([F(3), F(-5, 2), F(-10)]), "SIGNE_FINAL",
     "Revisa el signe de cada solució per separat en aïllar $x$ a "
     "cada factor."),
   D(x_multi_tex([F(-3), F(5, 2), F(-10)]), "SIGNE_QUOCIENT",
     "Revisa el tercer factor: $5-\\frac{x}{2}=0 \\Rightarrow "
     "\\frac{x}{2}=5 \\Rightarrow x=10$, amb signe positiu.")],
  ["Aquí hi ha tres factors: n'hi ha prou que un sigui zero.",
   "Iguala cadascun dels tres factors a zero per separat."],
  ["$x+3=0 \\Rightarrow x=-3$",
   r"$2x-5=0 \Rightarrow x=\dfrac{5}{2}$",
   r"$5-\dfrac{x}{2}=0 \Rightarrow x=10$"],
  ex_text=E83)

Q("83d", 83, "d", B3, "A",
  r"$(x-5)^2 = 0$",
  x_doble_tex(F(5)),
  [D(x_multi_tex([F(5), F(-5)]), "IGUALTAT_NOTABLE_SIGNE",
     "Un quadrat $(x-5)^2$ només val zero quan la base val zero: "
     "$x-5=0$, una única solució (doble), no dues de signe oposat."),
   D(x_doble_tex(F(-5)), "SIGNE_FINAL",
     "Revisa el signe: de $x-5=0$ s'aïlla $x=5$, no $x=-5$."),
   D(x_tex(F(25)), "QUADRAT_INCOMPLET",
     "No cal desenvolupar el quadrat: com que ja ve factoritzat, "
     "n'hi ha prou d'igualar la base a zero.")],
  ["Un quadrat només val zero quan la base val zero.",
   "Iguala la base a zero: és una solució doble."],
  ["$(x-5)^2=0 \\;\\Longrightarrow\\; x-5=0$",
   "$x=5$ (solució doble)"],
  ex_text=E83)

Q("83e", 83, "e", B3, "A",
  r"$(x-2)^2 + x = x$",
  x_doble_tex(F(2)),
  [D(x_multi_tex([F(2), F(0)]), "TERME_OBLIDAT_OPERACIO",
     "La $x$ dels dos costats es cancel·la primer ($+x=x$), "
     "deixant només $(x-2)^2=0$: no hi ha una segona solució $x=0$."),
   D(x_doble_tex(F(-2)), "SIGNE_FINAL",
     "Revisa el signe: de $x-2=0$ s'aïlla $x=2$, no $x=-2$."),
   D(x_tex(F(4)), "QUADRAT_INCOMPLET",
     "No cal desenvolupar el quadrat; simplifica primer cancel·lant "
     "la $x$ dels dos costats i iguala la base a zero.")],
  ["Simplifica primer: la $x$ apareix als dos costats i es cancel·la.",
   "Un cop simplificat queda un quadrat igualat a zero."],
  ["La $x$ dels dos costats es cancel·la: $(x-2)^2+x=x "
   "\\;\\Longrightarrow\\; (x-2)^2=0$",
   "$x=2$ (solució doble)"],
  ex_text=E83)

Q("83f", 83, "f", B3, "A",
  r"$x\left(\dfrac{3x}{4} - \dfrac{4}{5}\right)^2 = 0$",
  x_multi_tex([F(0), F(16, 15)]),
  [D(x_tex(F(16, 15)), "FACTOR_COMU_INCOMPLET",
     "Aquest producte té DOS factors ($x$ i el quadrat): la solució "
     "$x=0$ del primer factor també compta, no només la de dins del "
     "quadrat."),
   D(x_multi_tex([F(0), F(-16, 15)]), "SIGNE_FINAL",
     "Revisa el signe en aïllar $x$ dins del segon factor: "
     "$\\frac{3x}{4}=\\frac{4}{5} \\Rightarrow x=\\frac{16}{15}$, "
     "positiu."),
   D(x_multi_tex([F(0), F(4, 5)]), "SIMPLIFICACIO_INCOMPLETA",
     "Un cop aïllada $\\frac{3x}{4}=\\frac{4}{5}$, encara falta "
     "multiplicar per $\\frac{4}{3}$ per acabar d'aïllar $x$.")],
  ["Un producte val zero quan algun dels seus factors ho és: aquí "
   "hi ha el factor $x$ i el factor al quadrat.",
   "El factor al quadrat compta com una única solució, no cal "
   "repetir-la."],
  ["$x=0$ o $\\left(\\dfrac{3x}{4}-\\dfrac{4}{5}\\right)^2=0$",
   r"Del segon factor: $\dfrac{3x}{4}=\dfrac{4}{5} "
   r"\Rightarrow x=\dfrac{16}{15}$"],
  ex_text=E83)


# ---- exercici 84: cal desenvolupar/reordenar abans de resoldre ----
E84 = "Resol les equacions següents."

Q("84a", 84, "a", B3, "A",
  r"$(x+1)(x-3) + 3 = 0$",
  x_multi_tex([F(0), F(2)]),
  [D(x_multi_tex([F(-1), F(3)]), "FACTOR_COMU_INCOMPLET",
     "Aquests serien els valors que anul·len $(x+1)$ i $(x-3)$ per "
     "separat, però l'equació té un $+3$ addicional que canvia el "
     "resultat: primer cal desenvolupar i simplificar."),
   D(x_multi_tex([F(-2), F(0)]), "SIGNE_FINAL",
     "Revisa el signe de la segona solució: de $x(x-2)=0$ surt "
     "$x=0$ o $x=2$, no $x=-2$."),
   D(x_multi_tex([F(0), F(-2)]), "DISTRIBUCIO_INCOMPLETA",
     "Revisa el desenvolupament de $(x+1)(x-3)$: el terme en $x$ "
     "surt de $-3x+x=-2x$, i sumant el $+3$ final el terme "
     "independent s'anul·la.")],
  ["Desenvolupa el producte $(x+1)(x-3)$ i simplifica sumant-hi el $3$.",
   "Un cop simplificat, hauria de quedar una equació incompleta "
   "(sense terme independent)."],
  ["$(x+1)(x-3)+3=0 \\;\\Longrightarrow\\; x^2-3x+x-3+3=0$",
   "$x^2-2x=0 \\;\\Longrightarrow\\; x(x-2)=0$",
   "$x=0$ o $x=2$"],
  ex_text=E84)

Q("84b", 84, "b", B3, "A",
  r"$(x+9)(x-9) = 3(x-27)$",
  x_multi_tex([F(0), F(3)]),
  [D(x_multi_tex([F(-9), F(9)]), "TERME_OBLIDAT_OPERACIO",
     "Aquests serien els valors que anul·len el costat esquerre tot "
     "sol, però l'equació té un costat dret que cal desenvolupar i "
     "passar a l'esquerra abans de resoldre."),
   D(x_multi_tex([F(0), F(-3)]), "SIGNE_FINAL",
     "Revisa el signe: de $x(x-3)=0$ surt $x=0$ o $x=3$, no $x=-3$."),
   D(x_multi_tex([F(0), F(9)]), "DISTRIBUCIO_INCOMPLETA",
     "Revisa el pas $x^2-81=3x-81$: el $-81$ es cancel·la als dos "
     "costats, i queda $x^2=3x$, no $x^2=9x$.")],
  ["Desenvolupa $(x+9)(x-9)$ com a diferència de quadrats i el "
   "costat dret per separat.",
   "Passa tot a un costat: hauria de quedar una equació incompleta."],
  ["$(x+9)(x-9)=3(x-27) \\;\\Longrightarrow\\; x^2-81=3x-81$",
   "$x^2-3x=0 \\;\\Longrightarrow\\; x(x-3)=0$",
   "$x=0$ o $x=3$"],
  ex_text=E84)

Q("84c", 84, "c", B3, "A",
  r"$x(3x-2) = 65$",
  x_multi_tex([F(-13, 3), F(5)]),
  [D(x_multi_tex([F(13, 3), F(-5)]), "SIGNE_QUOCIENT",
     "Revisa el signe de $-b$ al numerador de la fórmula general: "
     "l'equació és $3x^2-2x-65=0$, amb $b=-2$."),
   D(x_multi_tex([F(-2, 6), F(1)]), "ORDRE_DIVISIONS",
     "Revisa el discriminant: $\\Delta=(-2)^2-4\\cdot3\\cdot(-65)"
     "=4+780=784$, i $\\sqrt{784}=28$, no un valor més petit."),
   D(x_multi_tex([F(13, 3), F(5)]), "SIGNE_FINAL",
     "Una de les dues solucions és negativa: revisa els dos casos "
     "del $\\pm$ per separat.")],
  ["Desenvolupa el producte per obtenir una equació de la forma "
   "$ax^2+bx+c=0$.",
   "Aplica la fórmula general amb $a=3,\\ b=-2,\\ c=-65$."],
  ["$x(3x-2)=65 \\;\\Longrightarrow\\; 3x^2-2x-65=0$",
   r"$\Delta=(-2)^2-4\cdot3\cdot(-65)=4+780=784$, $\sqrt{784}=28$",
   r"$x=\dfrac{2\pm28}{6} \;\Longrightarrow\; x=5$ o "
   r"$x=\dfrac{-26}{6}=-\dfrac{13}{3}$"],
  ex_text=E84)

Q("84d", 84, "d", B3, "A",
  r"$4x - (x^2-4) = 2x - 4$",
  x_multi_tex([F(-2), F(4)]),
  [D(x_multi_tex([F(2), F(-4)]), "SIGNE_QUOCIENT",
     "Revisa el signe de $-b$ al numerador: l'equació reordenada és "
     "$-x^2+2x+8=0$, amb $b=2$, així que el numerador porta $-2$."),
   D(x_multi_tex([F(-8), F(1)]), "MENYS_PARENTESI",
     "Revisa el signe en distribuir $-(x^2-4)$: el $-$ afecta els "
     "dos termes, donant $-x^2+4$, no només el primer."),
   D(x_multi_tex([F(2), F(4)]), "TERME_OBLIDAT_OPERACIO",
     "Revisa que has passat TOTS els termes a un costat: "
     "$4x-x^2+4-2x+4=0$ dona $-x^2+2x+8=0$.")],
  ["Distribueix el $-(x^2-4)$ i passa tots els termes a un costat.",
   "Aplica la fórmula general amb $a=-1,\\ b=2,\\ c=8$."],
  ["$4x-(x^2-4)=2x-4 \\;\\Longrightarrow\\; 4x-x^2+4=2x-4$",
   "$-x^2+4x-2x+4+4=0 \\;\\Longrightarrow\\; -x^2+2x+8=0$",
   r"$\Delta=2^2-4\cdot(-1)\cdot8=4+32=36$, $\sqrt{36}=6$: "
   r"$x=\dfrac{-2\pm6}{-2} \;\Longrightarrow\; x=-2$ o $x=4$"],
  ex_text=E84)

Q("84e", 84, "e", B3, "A",
  r"$(2x+3)(2x-3) = 135$",
  x_multi_tex([F(-6), F(6)]),
  [D(x_tex(F(6)), "FACTOR_COMU_INCOMPLET",
     "Un quadrat $x^2=36$ té DUES solucions, $x=6$ i $x=-6$: no en "
     "descartis cap arran de l'arrel quadrada."),
   D(x_multi_tex([F(-72), F(72)]), "SIMPLIFICACIO_INCOMPLETA",
     "Revisa el pas $4x^2=144 \\Rightarrow x^2=36$: cal dividir "
     "entre $4$ abans de fer l'arrel quadrada, no fer-la directament "
     "sobre $144$."),
   D(x_multi_tex([F(-3), F(3)]), "QUADRAT_INCOMPLET",
     "Revisa el desenvolupament $(2x+3)(2x-3)=4x^2-9$: el terme en "
     "$x$ va multiplicat per $4$, no per $1$.")],
  ["Desenvolupa el producte com a diferència de quadrats: "
   "$(2x+3)(2x-3)=4x^2-9$.",
   "Aïlla $x^2$ i fes l'arrel quadrada als dos costats (recorda el "
   "$\\pm$)."],
  ["$(2x+3)(2x-3)=135 \\;\\Longrightarrow\\; 4x^2-9=135$",
   "$4x^2=144 \\;\\Longrightarrow\\; x^2=36$",
   "$x=\\pm6$"],
  ex_text=E84)

Q("84f", 84, "f", B3, "A",
  r"$x^2 - \dfrac{23}{4}x = 18$",
  x_multi_tex([F(-9, 4), F(8)]),
  [D(x_multi_tex([F(9, 4), F(-8)]), "SIGNE_QUOCIENT",
     "Revisa el signe de $-b$ al numerador: amb $b=-23$, el "
     "numerador porta $+23$."),
   D(x_multi_tex([F(-9, 8), F(4)]), "ORDRE_DIVISIONS",
     "Al final cal dividir entre $2a=8$, no entre un altre valor: "
     "revisa el denominador de les dues solucions."),
   D(x_multi_tex([F(-72, 4), F(64, 4)]), "SIMPLIFICACIO_INCOMPLETA",
     "Les fraccions finals encara es poden simplificar: revisa el "
     "m.c.d. de numerador i denominador a cada solució.")],
  ["Multiplica tota l'equació per $4$ per eliminar el denominador i "
   "obtenir una equació de segon grau amb coeficients enters.",
   "Aplica la fórmula general amb $a=4,\\ b=-23,\\ c=-72$."],
  [r"Multipliquem per $4$: $4x^2-23x=72 \;\Longrightarrow\; "
   r"4x^2-23x-72=0$",
   r"$\Delta=(-23)^2-4\cdot4\cdot(-72)=529+1152=1681$, "
   r"$\sqrt{1681}=41$",
   r"$x=\dfrac{23\pm41}{8} \;\Longrightarrow\; x=8$ o "
   r"$x=\dfrac{-18}{8}=-\dfrac{9}{4}$"],
  ex_text=E84)

Q("84g", 84, "g", B3, "A",
  r"$x^2 - 7x + \dfrac{13}{4} = 0$",
  x_multi_tex([F(1, 2), F(13, 2)]),
  [D(x_multi_tex([F(-1, 2), F(-13, 2)]), "SIGNE_QUOCIENT",
     "Revisa el signe de $-b$ al numerador: amb $b=-7$, el "
     "numerador porta $+7$, i el resultat final és positiu."),
   D(x_multi_tex([F(1, 4), F(13, 4)]), "ORDRE_DIVISIONS",
     "Al final cal dividir entre $2a=2$ (perquè $a=1$), no entre "
     "$4$: revisa el denominador de les dues solucions."),
   D(x_multi_tex([F(1, 2), F(6)]), "SIMPLIFICACIO_INCOMPLETA",
     "Revisa la segona solució: $\\dfrac{13}{2}$ no es simplifica "
     "a $6$; comprova la divisió $\\dfrac{7+6}{2}$.")],
  ["El terme independent ja és una fracció: pots deixar l'equació "
   "tal qual i aplicar la fórmula directament amb $c=\\frac{13}{4}$.",
   "Aplica la fórmula general amb $a=1,\\ b=-7,\\ c=\\frac{13}{4}$."],
  [r"$a=1,\ b=-7,\ c=\dfrac{13}{4}$: "
   r"$\Delta=(-7)^2-4\cdot1\cdot\dfrac{13}{4}=49-13=36$",
   r"$\sqrt{36}=6$: $x=\dfrac{7\pm6}{2}$",
   r"$x=\dfrac{13}{2}$ o $x=\dfrac{1}{2}$"],
  ex_text=E84)


# =====================================================================
# BLOC 4 — SISTEMES D'EQUACIONS (exercicis 85-89)
# =====================================================================

E85 = "Resol pel mètode més adequat."

Q("85a", 85, "a", B4, "A",
  r"$\left.\begin{array}{r}x+y=2\\ x-y=6\end{array}\right\}$",
  xy_tex(F(4), F(-2)),
  [D(xy_tex(F(-2), F(4)), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Has intercanviat els valors de $x$ i $y$: torna a substituir "
     "el valor trobat a una de les equacions originals per "
     "comprovar quin és quin."),
   D(xy_tex(F(4), F(2)), "SIGNE_FINAL",
     "Un cop trobat $x=4$, substitueix-lo a $x+y=2$ amb cura amb "
     "els signes: $4+y=2 \\Rightarrow y=-2$."),
   D(xy_tex(F(8), F(-6)), "FACTOR_COMU_MAL_DIVIDIT",
     "Després de sumar les dues equacions t'ha de quedar $2x=8$: "
     "encara falta dividir entre $2$ per aïllar $x$.")],
  ["Suma les dues equacions directament: els termes en $y$ són "
   "oposats i s'anul·len (mètode de reducció).",
   "Un cop trobada $x$, substitueix-la a qualsevol de les dues "
   "equacions per trobar $y$."],
  ["Sumant les dues equacions, la $y$ s'elimina: "
   r"$\begin{array}{r}x+y=2\\x-y=6\\\hline 2x=8\end{array}$",
   "$x=4$", "$y=2-4=-2$"],
  ex_text=E85)

Q("85b", 85, "b", B4, "A",
  r"$\left.\begin{array}{r}2x+3y=4\\ 2x-3y=4\end{array}\right\}$",
  xy_tex(F(2), F(0)),
  [D(xy_tex(F(0), F(2)), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Has intercanviat els valors de $x$ i $y$: torna a substituir "
     "a una equació original per confirmar quin valor és de quina "
     "incògnita."),
   D(xy_tex(F(4), F(0)), "FACTOR_COMU_MAL_DIVIDIT",
     "Després de sumar les equacions t'ha de quedar $4x=8$: encara "
     "falta dividir entre $4$ per aïllar $x$."),
   D(xy_tex(F(2), F(4, 3)), "SIGNE_FINAL",
     "Un cop $x=2$, substitueix a $2x+3y=4$: "
     "$4+3y=4 \\Rightarrow 3y=0 \\Rightarrow y=0$.")],
  ["Els coeficients de $y$ ja són oposats: suma les dues equacions "
   "directament (reducció).",
   "Un cop trobada $x$, substitueix per trobar $y$."],
  ["Sumant les equacions, la $y$ s'elimina: "
   r"$\begin{array}{r}2x+3y=4\\2x-3y=4\\\hline 4x=8\end{array}$",
   "$x=2$", "$3y=4-2\\cdot2=0 \\Rightarrow y=0$"],
  ex_text=E85)

Q("85c", 85, "c", B4, "A",
  r"$\left.\begin{array}{r}x+2y=5\\ 2x+5y=11\end{array}\right\}$",
  xy_tex(F(3), F(1)),
  [D(xy_tex(F(1), F(3)), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Has intercanviat $x$ i $y$: substitueix a l'equació original "
     "per comprovar quin valor correspon a quina incògnita."),
   D(xy_tex(F(3), F(-1)), "SIGNE_FINAL",
     "Un cop $y=1$, substitueix a $x+2y=5$ amb cura: "
     "$x+2\\cdot1=5 \\Rightarrow x=3$."),
   D(xy_tex(F(-5), F(1)), "ENTER_MULTIPLICA_DENOMINADOR",
     "En multiplicar la primera equació per $-2$, TOTS els seus "
     "termes es multipliquen, incloent-hi el $5$ de la dreta.")],
  ["Multiplica la primera equació per $-2$ perquè els coeficients "
   "de $x$ es cancel·lin en sumar (reducció).",
   "Un cop trobada $y$, substitueix a qualsevol equació original "
   "per trobar $x$."],
  ["Multipliquem la primera per $-2$: "
   r"$\begin{array}{r}-2x-4y=-10\\2x+5y=11\\\hline y=1\end{array}$",
   "Amb $y=1$: $x+2\\cdot1=5 \\Rightarrow x=3$"],
  ex_text=E85)

Q("85d", 85, "d", B4, "A",
  r"$\left.\begin{array}{r}2x+3y=8\\ x+2y=3\end{array}\right\}$",
  xy_tex(F(7), F(-2)),
  [D(xy_tex(F(-2), F(7)), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Has intercanviat $x$ i $y$: comprova-ho substituint a "
     "l'equació original."),
   D(xy_tex(F(7), F(2)), "SIGNE_FINAL",
     "Un cop $x=7$, substitueix a $x+2y=3$: "
     "$7+2y=3 \\Rightarrow y=-2$, amb signe negatiu."),
   D(xy_tex(F(1), F(2)), "ENTER_MULTIPLICA_DENOMINADOR",
     "En multiplicar la segona equació per $-2$, TOTS els seus "
     "termes es multipliquen, incloent-hi el $3$ de la dreta.")],
  ["Multiplica la segona equació per $-2$ perquè els coeficients "
   "de $x$ es cancel·lin en sumar.",
   "Un cop trobada $y$, substitueix a qualsevol equació original."],
  ["Multipliquem la segona per $-2$: "
   r"$\begin{array}{r}2x+3y=8\\-2x-4y=-6\\\hline -y=2\end{array}$",
   "$y=-2$; substituint: $x+2\\cdot(-2)=3 \\Rightarrow x=7$"],
  ex_text=E85)

Q("85e", 85, "e", B4, "A",
  r"$\left.\begin{array}{r}x+y=9\\ 20x-3y=-4\end{array}\right\}$",
  xy_tex(F(1), F(8)),
  [D(xy_tex(F(8), F(1)), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Has intercanviat $x$ i $y$: substitueix a l'equació original "
     "per comprovar-ho."),
   D(xy_tex(F(-1), F(10)), "SIGNE_FINAL",
     "Revisa el signe en aïllar $y$ de la segona equació: "
     "$-23y=-184 \\Rightarrow y=8$, no un altre valor."),
   D(xy_tex(F(1), F(-8)), "TERME_OBLIDAT_OPERACIO",
     "Un cop $y=8$, substitueix a $x+y=9$: "
     "$x=9-8=1$, amb signe positiu.")],
  ["Aïlla $x=9-y$ de la primera equació (substitució).",
   "Substitueix aquesta expressió a la segona equació i resol per $y$."],
  ["Aïllem $x=9-y$ i ho posem a la segona: "
   "$20(9-y)-3y=-4 \\;\\Longrightarrow\\; 180-20y-3y=-4$",
   "$-23y=-184 \\Rightarrow y=8$", "$x=9-8=1$"],
  ex_text=E85)

Q("85f", 85, "f", B4, "A",
  r"$\left.\begin{array}{r}2x-3y=-25\\ 12x-3y=75\end{array}\right\}$",
  xy_tex(F(10), F(15)),
  [D(xy_tex(F(15), F(10)), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Has intercanviat $x$ i $y$: comprova-ho substituint a "
     "l'equació original."),
   D(xy_tex(F(-10), F(15)), "SIGNE_FINAL",
     "Revisa el signe en aïllar $x$: $-10x=-100 \\Rightarrow x=10$, "
     "positiu."),
   D(xy_tex(F(10), F(-15)), "SIGNE_FINAL",
     "Un cop $x=10$, substitueix a $2x-3y=-25$: "
     "$20-3y=-25 \\Rightarrow y=15$, amb signe positiu.")],
  ["Resta la segona equació de la primera: el coeficient de $y$ "
   "coincideix i s'anul·la (reducció).",
   "Un cop trobada $x$, substitueix a qualsevol equació original."],
  ["Restant, la $y$ s'elimina: "
   r"$\begin{array}{r}2x-3y=-25\\12x-3y=75\\\hline -10x=-100\end{array}$",
   "$x=10$; substituint: $20-3y=-25 \\Rightarrow y=15$"],
  ex_text=E85)

Q("85g", 85, "g", B4, "A",
  r"$\left.\begin{array}{r}x+2y=5\\ 2x+y=7\end{array}\right\}$",
  xy_tex(F(3), F(1)),
  [D(xy_tex(F(1), F(3)), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Has intercanviat $x$ i $y$: comprova-ho substituint a "
     "l'equació original."),
   D(xy_tex(F(3), F(-1)), "SIGNE_FINAL",
     "Un cop $x=3$, substitueix a $x+2y=5$: "
     "$3+2y=5 \\Rightarrow y=1$, positiu."),
   D(xy_tex(F(9), F(-2)), "ENTER_MULTIPLICA_DENOMINADOR",
     "En multiplicar la segona equació per $-2$, TOTS els seus "
     "termes es multipliquen, incloent-hi el $7$ de la dreta.")],
  ["Multiplica la segona equació per $-2$ perquè els coeficients "
   "de $x$ es cancel·lin en sumar.",
   "Un cop trobada $x$, substitueix a qualsevol equació original."],
  ["Multipliquem la segona per $-2$: "
   r"$\begin{array}{r}x+2y=5\\-4x-2y=-14\\\hline -3x=-9\end{array}$",
   "$x=3$; substituint: $3+2y=5 \\Rightarrow y=1$"],
  ex_text=E85)

Q("85h", 85, "h", B4, "A",
  r"$\left.\begin{array}{r}5x-y=23\\ -9x+5y=13\end{array}\right\}$",
  xy_tex(F(8), F(17)),
  [D(xy_tex(F(17), F(8)), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Has intercanviat $x$ i $y$: comprova-ho substituint a "
     "l'equació original."),
   D(xy_tex(F(-8), F(-17)), "SIGNE_FINAL",
     "Revisa el signe en aïllar $x$: $16x=128 \\Rightarrow x=8$, "
     "positiu."),
   D(xy_tex(F(8), F(-17)), "SIGNE_FINAL",
     "Un cop $x=8$, substitueix a $y=5x-23$: "
     "$y=5\\cdot8-23=17$, amb signe positiu.")],
  ["Aïlla $y=5x-23$ de la primera equació (substitució).",
   "Substitueix aquesta expressió a la segona equació."],
  ["Aïllem $y=5x-23$ i ho posem a la segona: "
   "$-9x+5(5x-23)=13 \\;\\Longrightarrow\\; -9x+25x-115=13$",
   "$16x=128 \\Rightarrow x=8$", "$y=5\\cdot8-23=17$"],
  ex_text=E85)


E86 = "Resol amb el mètode més adequat."

Q("86a", 86, "a", B4, "A",
  r"$\left.\begin{array}{r}x-3y=4\\ 2x-5y=8\end{array}\right\}$",
  xy_tex(F(4), F(0)),
  [D(xy_tex(F(0), F(4)), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Has intercanviat $x$ i $y$: comprova-ho substituint a "
     "l'equació original."),
   D(xy_tex(F(-4), F(0)), "SIGNE_FINAL",
     "Un cop $y=0$, substitueix a $x-3y=4$: "
     "$x-0=4 \\Rightarrow x=4$, positiu."),
   D(xy_tex(F(4), F(-8)), "TERME_OBLIDAT_OPERACIO",
     "Revisa el resultat de sumar les dues equacions "
     "transformades: hauria de quedar $y=0$, no un altre valor.")],
  ["Multiplica la primera equació per $-2$ perquè els coeficients "
   "de $x$ es cancel·lin (reducció).",
   "Un cop trobada $y$, substitueix a qualsevol equació original."],
  ["Multipliquem la primera per $-2$: "
   r"$\begin{array}{r}-2x+6y=-8\\2x-5y=8\\\hline y=0\end{array}$",
   "Amb $y=0$: $x-3\\cdot0=4 \\Rightarrow x=4$"],
  ex_text=E86)

Q("86b", 86, "b", B4, "A",
  r"$\left.\begin{array}{r}3x+y=3\\ 6x-y=0\end{array}\right\}$",
  xy_tex(F(1, 3), F(2)),
  [D(xy_tex(F(2), F(1, 3)), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Has intercanviat $x$ i $y$: comprova-ho substituint a "
     "l'equació original."),
   D(xy_tex(F(-1, 3), F(2)), "SIGNE_FINAL",
     "Revisa el signe en resoldre $9x=3$: $x=\\frac13$, positiu."),
   D(xy_tex(F(1, 3), F(-2)), "SIGNE_FINAL",
     "Un cop $x=\\frac13$, substitueix a $y=3-3x$: "
     "$y=3-3\\cdot\\frac13=2$, amb signe positiu.")],
  ["Aïlla $y=3-3x$ de la primera equació (substitució).",
   "Substitueix aquesta expressió a la segona equació."],
  ["Aïllem $y=3-3x$ i ho posem a la segona: "
   "$6x-(3-3x)=0 \\;\\Longrightarrow\\; 6x-3+3x=0$",
   r"$9x=3 \Rightarrow x=\dfrac{1}{3}$",
   r"$y=3-3\cdot\dfrac13=2$"],
  ex_text=E86)

Q("86c", 86, "c", B4, "A",
  r"$\left.\begin{array}{r}4x-5y=10\\ 2x+7y=-4\end{array}\right\}$",
  xy_tex(F(25, 19), F(-18, 19)),
  [D(xy_tex(F(-18, 19), F(25, 19)), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Has intercanviat $x$ i $y$: comprova-ho substituint a "
     "l'equació original."),
   D(xy_tex(F(25, 19), F(18, 19)), "SIGNE_FINAL",
     "Revisa el signe final de $y$: substituint a "
     "$2x+7y=-4$ surt un valor negatiu."),
   D(r"$x=\dfrac{50}{38},\ y=-\dfrac{18}{19}$", "SIMPLIFICACIO_INCOMPLETA",
     "$\\frac{50}{38}$ encara es pot simplificar dividint numerador "
     "i denominador entre $2$, i arribar a $\\frac{25}{19}$.")],
  ["Multiplica la primera equació per $7$ i la segona per $5$ per "
   "igualar el coeficient de $y$ (reducció).",
   "Un cop trobada $x$, substitueix a qualsevol equació original i "
   "aïlla $y$."],
  ["Multipliquem per $7$ i per $5$: "
   r"$\begin{array}{r}28x-35y=70\\10x+35y=-20\\\hline 38x=50\end{array}$",
   r"$x=\dfrac{50}{38}=\dfrac{25}{19}$",
   r"Substituint a $2x+7y=-4$: $7y=-4-\dfrac{50}{19}"
   r"=\dfrac{-126}{19} \Rightarrow y=-\dfrac{18}{19}$"],
  ex_text=E86)

Q("86d", 86, "d", B4, "A",
  r"$\left.\begin{array}{r}x-3y=13\\ 5x-2y=26\end{array}\right\}$",
  xy_tex(F(4), F(-3)),
  [D(xy_tex(F(-3), F(4)), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Has intercanviat $x$ i $y$: comprova-ho substituint a "
     "l'equació original."),
   D(xy_tex(F(4), F(3)), "SIGNE_FINAL",
     "Revisa el signe de $y$: $13y=-39 \\Rightarrow y=-3$, negatiu."),
   D(xy_tex(F(-4), F(-3)), "SIGNE_FINAL",
     "Un cop $y=-3$, substitueix a $x-3y=13$: "
     "$x+9=13 \\Rightarrow x=4$, positiu.")],
  ["Multiplica la primera equació per $-5$ perquè els coeficients "
   "de $x$ es cancel·lin (reducció).",
   "Un cop trobada $y$, substitueix a qualsevol equació original."],
  ["Multipliquem la primera per $-5$: "
   r"$\begin{array}{r}-5x+15y=-65\\5x-2y=26\\\hline 13y=-39\end{array}$",
   "$y=-3$; substituint: $x-3\\cdot(-3)=13 \\Rightarrow x=4$"],
  ex_text=E86)

Q("86e", 86, "e", B4, "A",
  r"$\left.\begin{array}{r}8x+14y=-6\\ x+y=0\end{array}\right\}$",
  xy_tex(F(1), F(-1)),
  [D(xy_tex(F(-1), F(1)), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Has intercanviat $x$ i $y$: comprova-ho substituint a "
     "l'equació original."),
   D(xy_tex(F(-1), F(-1)), "SIGNE_FINAL",
     "Revisa el signe de $y$: $6y=-6 \\Rightarrow y=-1$."),
   D(xy_tex(F(1), F(1)), "TERME_OBLIDAT_OPERACIO",
     "Un cop $y=-1$, substitueix a $x=-y$: "
     "$x=-(-1)=1$, amb signe positiu.")],
  ["Aïlla $x=-y$ de la segona equació (substitució).",
   "Substitueix aquesta expressió a la primera equació."],
  ["Aïllem $x=-y$ i ho posem a la primera: "
   "$8(-y)+14y=-6 \\;\\Longrightarrow\\; 6y=-6$",
   "$y=-1$", "$x=-(-1)=1$"],
  ex_text=E86)

Q("86f", 86, "f", B4, "A",
  r"$\left.\begin{array}{r}3x-\dfrac{4}{5}y=13\\[4pt] "
  r"\dfrac{8}{3}x-y=-4\end{array}\right\}$",
  xy_tex(F(243, 13), F(700, 13)),
  [D(xy_tex(F(700, 13), F(243, 13)), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Has intercanviat $x$ i $y$: comprova-ho substituint a "
     "l'equació original."),
   D(xy_tex(F(-243, 13), F(700, 13)), "SIGNE_FINAL",
     "Revisa el signe de $x$: $65x=1215$ dona un valor positiu."),
   D(xy_tex(F(1215, 65), F(700, 13)) if F(1215,65) != F(243,13) else
     xy_tex(F(1215, 60), F(700, 13)), "SIMPLIFICACIO_INCOMPLETA",
     "$\\frac{1215}{65}$ encara es pot simplificar dividint "
     "numerador i denominador pel seu m.c.d.")],
  ["Multiplica cada equació pel denominador del seu terme "
   "fraccionari (m.c.m.$(5,1)=5$ i m.c.m.$(3,1)=3$) per treure "
   "denominadors.",
   "Un cop sense fraccions, multiplica per igualar un dels "
   "coeficients i aplica reducció."],
  [r"Multiplicant per treure denominadors: "
   r"$45x-12y=195$ i $40x-15y=-60$",
   r"Multipliquem la primera per $5$ i la segona per $4$: "
   r"$\begin{array}{r}225x-60y=975\\160x-60y=-240\\\hline "
   r"65x=1215\end{array}$",
   r"$x=\dfrac{1215}{65}=\dfrac{243}{13}$; substituint: "
   r"$12y=45\cdot\dfrac{243}{13}-195=\dfrac{8400}{13} "
   r"\Rightarrow y=\dfrac{700}{13}$"],
  ex_text=E86)


E87 = "Resol:"

Q("87", 87, "", B4, "A",
  r"$\left.\begin{array}{r}2(x-2)-3(y+1)+6=17\\[4pt] "
  r"4(x-y)-\dfrac{x}{3}+\dfrac{y}{2}=25\end{array}\right\}$",
  xy_tex(F(3), F(-4)),
  [D(xy_tex(F(-4), F(3)), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Has intercanviat $x$ i $y$: comprova-ho substituint a una de "
     "les equacions originals."),
   D(xy_tex(F(-3), F(4)), "SIGNE_FINAL",
     "Revisa el signe en resoldre $8x=24$: $x=3$, positiu."),
   D(xy_tex(F(3), F(4)), "SIGNE_FINAL",
     "Un cop $x=3$, substitueix a $2x-3y=18$: "
     "$6-3y=18 \\Rightarrow y=-4$, amb signe negatiu.")],
  ["Simplifica cada equació per separat (distribueix parèntesis, "
   "treu denominadors) fins deixar-les en la forma $ax+by=c$.",
   "Un cop simplificades, resol el sistema per reducció."],
  ["Simplificant la primera: $2(x-2)-3(y+1)+6=17 "
   "\\;\\Longrightarrow\\; 2x-3y=18$",
   "Simplificant la segona (multiplicant per $6$): "
   "$22x-21y=150$",
   r"Multipliquem la primera per $-7$: "
   r"$\begin{array}{r}-14x+21y=-126\\22x-21y=150\\\hline "
   r"8x=24\end{array}$",
   "$x=3$; substituint: $6-3y=18 \\Rightarrow y=-4$"],
  ex_text=E87)


E88 = "Resol aquests sistemes."

Q("88a", 88, "a", B4, "A",
  r"$\left.\begin{array}{r}2x+3y=5+x+2y\\ x-2y-3=3-4y\end{array}\right\}$",
  xy_tex(F(4), F(1)),
  [D(xy_tex(F(1), F(4)), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Has intercanviat $x$ i $y$: comprova-ho substituint a una "
     "equació original."),
   D(xy_tex(F(4), F(-1)), "SIGNE_FINAL",
     "Un cop $y=1$, substitueix a $x+y=5$: "
     "$x+1=5 \\Rightarrow x=4$, positiu."),
   D(xy_tex(F(5), F(0)), "TERME_OBLIDAT_OPERACIO",
     "Revisa que has agrupat bé els termes en simplificar cada "
     "equació abans de resoldre el sistema.")],
  ["Simplifica cada equació agrupant termes amb $x$/$y$ a "
   "l'esquerra i números a la dreta.",
   "Un cop simplificades, resta-les per eliminar la $x$ (reducció)."],
  ["Simplificant: $x+y=5$ i $x+2y=6$",
   "Restant la primera de la segona: $y=1$",
   "Substituint: $x+1=5 \\Rightarrow x=4$"],
  ex_text=E88)

Q("88b", 88, "b", B4, "A",
  r"$\left.\begin{array}{r}2y-x-1=4-y-2x\\ 2x-y=1+x\end{array}\right\}$",
  xy_tex(F(2), F(1)),
  [D(xy_tex(F(1), F(2)), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Has intercanviat $x$ i $y$: comprova-ho substituint a una "
     "equació original."),
   D(xy_tex(F(2), F(-1)), "SIGNE_FINAL",
     "Un cop $y=1$, substitueix a $x-y=1$: "
     "$x-1=1 \\Rightarrow x=2$, positiu."),
   D(xy_tex(F(0), F(1, 3)), "SIMPLIFICACIO_INCOMPLETA",
     "Revisa la simplificació de cada equació per separat abans de "
     "combinar-les.")],
  ["Simplifica cada equació: agrupa termes amb $x$/$y$ a "
   "l'esquerra.",
   "Un cop simplificades ($x+3y=5$ i $x-y=1$), resta-les per "
   "eliminar la $x$."],
  ["Simplificant: $x+3y=5$ i $x-y=1$",
   "Restant: $(x+3y)-(x-y)=5-1 \\Rightarrow 4y=4 \\Rightarrow y=1$",
   "Substituint: $x-1=1 \\Rightarrow x=2$"],
  ex_text=E88)

Q("88c", 88, "c", B4, "A",
  r"$\left.\begin{array}{r}3y-2=x-2(x+y)\\ "
  r"(x+4)+2\cdot(y-2)=18-x-y\end{array}\right\}$",
  xy_tex(F(12), F(-2)),
  [D(xy_tex(F(-2), F(12)), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Has intercanviat $x$ i $y$: comprova-ho substituint a una "
     "equació original."),
   D(xy_tex(F(12), F(2)), "SIGNE_FINAL",
     "Revisa el signe de $y$: $-7y=14 \\Rightarrow y=-2$, negatiu."),
   D(xy_tex(F(-12), F(-2)), "SIGNE_FINAL",
     "Un cop $y=-2$, substitueix a $x+5y=2$: "
     "$x-10=2 \\Rightarrow x=12$, positiu.")],
  ["Simplifica cada equació distribuint els parèntesis.",
   "Un cop simplificades ($x+5y=2$ i $2x+3y=18$), aplica reducció."],
  ["Simplificant: $x+5y=2$ i $2x+3y=18$",
   r"Multipliquem la primera per $-2$: "
   r"$\begin{array}{r}-2x-10y=-4\\2x+3y=18\\\hline -7y=14\end{array}$",
   "$y=-2$; substituint: $x-10=2 \\Rightarrow x=12$"],
  ex_text=E88)

Q("88d", 88, "d", B4, "A",
  r"$\left.\begin{array}{r}3x-2(y-1)=y-x+1\\ "
  r"2x-y=x+y-9\end{array}\right\}$",
  xy_tex(F(5), F(7)),
  [D(xy_tex(F(7), F(5)), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Has intercanviat $x$ i $y$: comprova-ho substituint a una "
     "equació original."),
   D(xy_tex(F(5), F(-7)), "SIGNE_FINAL",
     "Un cop $y=7$, substitueix a $x-2y=-9$: "
     "$x-14=-9 \\Rightarrow x=5$, positiu."),
   D(xy_tex(F(-1), F(-2)), "SIMPLIFICACIO_INCOMPLETA",
     "Revisa la simplificació de cada equació per separat abans de "
     "combinar-les.")],
  ["Simplifica cada equació distribuint el parèntesi i agrupant "
   "termes.",
   "Un cop simplificades ($4x-3y=-1$ i $x-2y=-9$), aplica reducció."],
  ["Simplificant: $4x-3y=-1$ i $x-2y=-9$",
   r"Multipliquem la segona per $-4$: "
   r"$\begin{array}{r}4x-3y=-1\\-4x+8y=36\\\hline 5y=35\end{array}$",
   "$y=7$; substituint a $x-2y=-9$: $x-14=-9 \\Rightarrow x=5$"],
  ex_text=E88)

Q("88e", 88, "e", B4, "A",
  r"$\left.\begin{array}{r}\dfrac{x}{2}-\dfrac{y}{5}=\dfrac{11}{5}\\[4pt] "
  r"\dfrac{4x-5y}{2}=2\end{array}\right\}$",
  xy_tex(F(6), F(4)),
  [D(xy_tex(F(4), F(6)), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Has intercanviat $x$ i $y$: comprova-ho substituint a una "
     "equació original."),
   D(xy_tex(F(-6), F(4)), "SIGNE_FINAL",
     "Revisa el signe de $x$: $17x=102 \\Rightarrow x=6$, positiu."),
   D(xy_tex(F(6), F(-4)), "SIGNE_FINAL",
     "Un cop $x=6$, substitueix a $5x-2y=22$: "
     "$30-2y=22 \\Rightarrow y=4$, positiu.")],
  ["Multiplica cada equació pel seu denominador per treure "
   "fraccions.",
   "Un cop en forma $ax+by=c$, iguala un dels coeficients i aplica "
   "reducció."],
  ["Traient denominadors: $5x-2y=22$ i $4x-5y=4$",
   r"Multipliquem la primera per $5$ i la segona per $-2$: "
   r"$\begin{array}{r}25x-10y=110\\-8x+10y=-8\\\hline "
   r"17x=102\end{array}$",
   "$x=6$; substituint: $30-2y=22 \\Rightarrow y=4$"],
  ex_text=E88)

Q("88f", 88, "f", B4, "A",
  r"$\left.\begin{array}{r}\dfrac{x+4y}{3}+\dfrac{x-y}{5}=\dfrac{2}{3}\\[4pt] "
  r"-x+5y=13\end{array}\right\}$",
  xy_tex(F(-3), F(2)),
  [D(xy_tex(F(2), F(-3)), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Has intercanviat $x$ i $y$: comprova-ho substituint a una "
     "equació original."),
   D(xy_tex(F(3), F(2)), "SIGNE_FINAL",
     "Revisa el signe de $x$: substituint a $-x+5y=13$ amb $y=2$ "
     "surt $x=-3$, negatiu."),
   D(xy_tex(F(-3), F(-2)), "SIGNE_FINAL",
     "Revisa el signe de $y$: $57y=114 \\Rightarrow y=2$, positiu.")],
  ["Multiplica la primera equació pel m.c.m. dels seus "
   "denominadors ($15$) per eliminar-los.",
   "Un cop simplificada, iguala el coeficient de $x$ amb la segona "
   "equació i aplica reducció."],
  ["Multiplicant la primera per $15$: $8x+17y=10$",
   r"Multipliquem la segona per $8$: "
   r"$\begin{array}{r}8x+17y=10\\-8x+40y=104\\\hline "
   r"57y=114\end{array}$",
   "$y=2$; substituint a $-x+5y=13$: $-x+10=13 \\Rightarrow x=-3$"],
  ex_text=E88)


E89 = "Resol amb el mètode que consideris més adequat."

Q("89a", 89, "a", B4, "A",
  r"$\left.\begin{array}{r}-2(x-2)=y-4\\ 3y-2x=0\end{array}\right\}$",
  xy_tex(F(3), F(2)),
  [D(xy_tex(F(2), F(3)), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Has intercanviat $x$ i $y$: comprova-ho substituint a una "
     "equació original."),
   D(xy_tex(F(-3), F(2)), "SIGNE_FINAL",
     "Un cop $y=2$, substitueix a $2x+y=8$: "
     "$2x+2=8 \\Rightarrow x=3$, positiu."),
   D(xy_tex(F(3), F(-2)), "SIGNE_FINAL",
     "Revisa el signe de $y$: $4y=8 \\Rightarrow y=2$, positiu.")],
  ["Distribueix el parèntesi de la primera equació.",
   "Un cop en forma $2x+y=8$ i $-2x+3y=0$, suma-les (reducció)."],
  ["Simplificant la primera: $-2(x-2)=y-4 \\;\\Longrightarrow\\; "
   "2x+y=8$",
   r"Sumant amb $-2x+3y=0$: "
   r"$\begin{array}{r}2x+y=8\\-2x+3y=0\\\hline 4y=8\end{array}$",
   "$y=2$; substituint: $2x+2=8 \\Rightarrow x=3$"],
  ex_text=E89)

Q("89b", 89, "b", B4, "A",
  r"$\left.\begin{array}{r}-5(y-2)=x-2\\ x-3y=-4\end{array}\right\}$",
  xy_tex(F(2), F(2)),
  [D(xy_tex(F(-2), F(2)), "SIGNE_FINAL",
     "Revisa el signe de $x$: $x-3\\cdot2=-4 \\Rightarrow x=2$, "
     "positiu."),
   D(xy_tex(F(2), F(-2)), "SIGNE_FINAL",
     "Revisa el signe de $y$: $8y=16 \\Rightarrow y=2$, positiu."),
   D(xy_tex(F(12), F(2)), "SIMPLIFICACIO_INCOMPLETA",
     "Revisa la simplificació de la primera equació abans de "
     "combinar-la amb la segona.")],
  ["Distribueix el parèntesi de la primera equació.",
   "Un cop en forma $x+5y=12$ i $x-3y=-4$, resta-les (reducció)."],
  ["Simplificant la primera: $-5(y-2)=x-2 \\;\\Longrightarrow\\; "
   "x+5y=12$",
   r"Restant amb $x-3y=-4$: "
   r"$\begin{array}{r}x+5y=12\\x-3y=-4\\\hline 8y=16\end{array}$",
   "$y=2$; substituint: $x-3\\cdot2=-4 \\Rightarrow x=2$"],
  ex_text=E89)

Q("89c", 89, "c", B4, "A",
  r"$\left.\begin{array}{r}3(x+y)-x+2y=15\\ 2x-(y+8)=-11\end{array}\right\}$",
  xy_tex(F(0), F(3)),
  [D(xy_tex(F(3), F(0)), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Has intercanviat $x$ i $y$: comprova-ho substituint a una "
     "equació original."),
   D(xy_tex(F(0), F(-3)), "SIGNE_FINAL",
     "Revisa el signe de $y$: $6y=18 \\Rightarrow y=3$, positiu."),
   D(xy_tex(F(-3), F(3)), "SIGNE_FINAL",
     "Un cop $y=3$, substitueix a $2x-y=-3$: "
     "$2x-3=-3 \\Rightarrow x=0$.")],
  ["Simplifica cada equació distribuint parèntesis.",
   "Un cop en forma $2x+5y=15$ i $2x-y=-3$, resta-les (reducció, "
   "ja que el coeficient de $x$ coincideix)."],
  ["Simplificant: $2x+5y=15$ i $2x-y=-3$",
   r"Restant: "
   r"$\begin{array}{r}2x+5y=15\\2x-y=-3\\\hline 6y=18\end{array}$",
   "$y=3$; substituint: $2x-3=-3 \\Rightarrow x=0$"],
  ex_text=E89)

Q("89d", 89, "d", B4, "A",
  r"$\left.\begin{array}{r}3(x+2)-7(x+y)=5\\ 5(x+1)-y=14\end{array}\right\}$",
  xy_tex(F(64, 39), F(-31, 39)),
  [D(xy_tex(F(-31, 39), F(64, 39)), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Has intercanviat $x$ i $y$: comprova-ho substituint a una "
     "equació original."),
   D(xy_tex(F(-64, 39), F(31, 39)), "SIGNE_FINAL",
     "Revisa el signe de $x$: $-39x=-64 \\Rightarrow x=\\frac{64}{39}$, "
     "positiu."),
   D(xy_tex(F(64, 39), F(31, 39)), "SIGNE_FINAL",
     "Un cop $x=\\frac{64}{39}$, substitueix a $y=5x-9$: el "
     "resultat surt negatiu perquè $5x<9$.")],
  ["Distribueix els parèntesis de les dues equacions per deixar-les "
   "en forma $ax+by=c$.",
   "Un cop simplificades ($-4x-7y=-1$ i $5x-y=9$), aïlla $y$ de la "
   "segona i substitueix a la primera."],
  ["Simplificant: $-4x-7y=-1$ i $5x-y=9$",
   "Aïllem $y=5x-9$ de la segona i ho posem a la primera: "
   "$-4x-7(5x-9)=-1 \\;\\Longrightarrow\\; -4x-35x+63=-1$",
   r"$-39x=-64 \Rightarrow x=\dfrac{64}{39}$; "
   r"$y=5\cdot\dfrac{64}{39}-9=\dfrac{320-351}{39}=-\dfrac{31}{39}$"],
  ex_text=E89)


# =====================================================================
# BLOC 5 — PROBLEMES AMB EQUACIONS I SISTEMES (exercicis 90-100)
# =====================================================================

Q("90", 90, "", B5, "A",
  "Troba dos nombres consecutius, sabent que la diferència dels seus "
  "quadrats és 567.",
  "$283$ i $284$",
  [D("$282$ i $283$", "TERME_OBLIDAT_OPERACIO",
     "Comprova-ho: $283^2-282^2=161\\,845-79\\,524$... millor "
     "torna a plantejar l'equació $(x+1)^2-x^2=567$ i resol-la des "
     "de zero."),
   D("$283$ i $285$", "DESPLACAMENT_INDEX",
     "\"Consecutius\" vol dir que difereixen en $1$, no en $2$: si "
     "un és $x$, l'altre és $x+1$."),
   D("$567$ i $568$", "PROGRESSIO_INVENTADA",
     "El $567$ és la diferència de quadrats que dona l'enunciat, "
     "no un dels dos nombres que busques.")],
  ["Anomena $x$ el primer nombre; el consecutiu és $x+1$.",
   "Planteja l'equació $(x+1)^2-x^2=567$ i observa que el terme "
   "$x^2$ es cancel·la en desenvolupar-la."],
  ["$(x+1)^2-x^2=567 \\;\\Longrightarrow\\; x^2+2x+1-x^2=567$",
   "$2x+1=567 \\;\\Longrightarrow\\; 2x=566 \\;\\Longrightarrow\\; x=283$",
   "Els dos nombres consecutius són $283$ i $284$."],
  ex_text="")

Q("91", 91, "", B5, "A",
  "El preu d'un anell i el seu estoig és de 10\\,200 €, i l'anell val "
  "10\\,000 € més que l'estoig. Quin és el preu de cada article?",
  "L'anell val $10\\,100$ € i l'estoig, $100$ €",
  [D("L'anell val $10\\,000$ € i l'estoig, $200$ €",
     "TERME_OBLIDAT_OPERACIO",
     "Comprova-ho amb les dues condicions: $10\\,000+200=10\\,200$ "
     "(hi quadra), però $10\\,000-200=9\\,800\\ne10\\,000$ (la "
     "diferència no és la que demana l'enunciat)."),
   D("L'anell val $10\\,100$ € i l'estoig, $10\\,000$ €",
     "TERME_OBLIDAT_OPERACIO",
     "La suma dels dos preus ha de donar exactament $10\\,200$ €: "
     "comprova-ho amb aquests dos valors."),
   D("L'anell val $5\\,100$ € i l'estoig, $5\\,100$ €",
     "VEREDICTE_INVERTIT",
     "L'enunciat diu que l'anell val MÉS que l'estoig (per "
     "$10\\,000$ €), no que valguin el mateix.")],
  ["Anomena $a$ el preu de l'anell i $e$ el de l'estoig, i planteja "
   "el sistema amb les dues condicions.",
   "Substitueix $a=e+10\\,000$ a la primera equació."],
  ["Sistema: $a+e=10\\,200,\\quad a=e+10\\,000$",
   "Substituint: $(e+10\\,000)+e=10\\,200 \\;\\Longrightarrow\\; "
   "2e=200 \\;\\Longrightarrow\\; e=100$",
   "$a=100+10\\,000=10\\,100$"],
  ex_text="")

Q("92", 92, "", B5, "A",
  "Una bodega va exportar al gener la meitat dels seus barrils i, al "
  "cap de dos mesos, un terç dels que li quedaven. Quants barrils "
  "tenia al començament si ara hi ha 40\\,000 barrils?",
  "$120\\,000$ barrils",
  [D("$60\\,000$ barrils", "EXPONENT_SENSE_DESPLACAR",
     "Aquest seria el resultat de considerar només UNA de les dues "
     "exportacions; l'enunciat en descriu dues seguides."),
   D("$180\\,000$ barrils", "ORDRE_MULTIPLICACIO_DIVISIO",
     "Revisa quina fracció li queda després de les DUES "
     "exportacions seguides: la meitat, i després dos terços "
     "d'aquesta meitat."),
   D("$40\\,000$ barrils", "PROGRESSIO_INVENTADA",
     "$40\\,000$ és el nombre de barrils ARA, després de les dues "
     "exportacions, no el nombre inicial que es demana.")],
  ["Anomena $B$ el nombre inicial de barrils. Després del gener en "
   "queden $\\frac{B}{2}$.",
   "Al cap de dos mesos n'exporta un terç DELS QUE LI QUEDAVEN: "
   "li'n queden els altres dos terços d'aquesta meitat."],
  [r"Li queden $\dfrac{B}{2}\cdot\dfrac{2}{3}=\dfrac{B}{3}$",
   r"Com que ara hi ha $40\,000$: $\dfrac{B}{3}=40\,000$",
   "$B=120\\,000$ barrils"],
  ex_text="")

Q("93", 93, "", B5, "A",
  "En Miquel té 4 anys més que el seu cosí Ignasi i, al cap de 3 "
  "anys, entre els dos sumaran 20 anys. Quants anys té cadascú?",
  "En Miquel té $9$ anys i l'Ignasi, $5$ anys",
  [D("En Miquel té $12$ anys i l'Ignasi, $8$ anys", "TERME_OBLIDAT_OPERACIO",
     "Comprova la primera condició: $12-8=4$ (hi quadra), però "
     "revisa la segona: d'aquí a 3 anys sumarien $15+11=26$, no $20$."),
   D("En Miquel té $8$ anys i l'Ignasi, $4$ anys", "SIGNE_FINAL",
     "Comprova-ho: d'aquí a 3 anys sumarien $11+7=18$, no $20$; "
     "revisa el plantejament del sistema."),
   D("En Miquel té $10$ anys i l'Ignasi, $6$ anys", "DESPLACAMENT_INDEX",
     "Comprova-ho: d'aquí a 3 anys sumarien $13+9=22$, no $20$; "
     "revisa l'equació que expressa \"d'aquí a 3 anys\".")],
  ["Anomena $m$ l'edat d'en Miquel i $i$ la de l'Ignasi. La primera "
   "condició dona $m=i+4$.",
   "La segona condició, \"al cap de 3 anys sumaran 20\", és "
   "$(m+3)+(i+3)=20$."],
  ["Sistema: $m=i+4,\\quad (m+3)+(i+3)=20$",
   "Substituint: $(i+4+3)+(i+3)=20 \\;\\Longrightarrow\\; 2i+10=20$",
   "$i=5$; per tant $m=5+4=9$"],
  ex_text="")

Q("94", 94, "", B5, "A",
  "Quina edat tinc ara si al cap de 12 anys tindré el triple de "
  "l'edat que tenia fa 6 anys?",
  "$15$ anys",
  [D("$9$ anys", "DESPLACAMENT_INDEX",
     "Comprova-ho: d'aquí a 12 anys tindria $21$, i fa 6 anys "
     "tenia $3$; el triple de $3$ és $9$, no $21$."),
   D("$21$ anys", "EXPONENT_MULTIPLICAT",
     "Aquesta seria l'edat d'aquí a 12 anys amb la resposta "
     "correcta, no l'edat ACTUAL que demana l'enunciat."),
   D("$30$ anys", "ORDRE_RESTA",
     "Comprova-ho: d'aquí a 12 anys tindria $42$, i fa 6 anys "
     "tenia $24$; el triple de $24$ no és $42$.")],
  ["Anomena $e$ l'edat actual. \"Fa 6 anys\" és $e-6$; \"al cap de "
   "12 anys\" és $e+12$.",
   "Planteja l'equació: $e+12=3(e-6)$."],
  ["$e+12=3(e-6) \\;\\Longrightarrow\\; e+12=3e-18$",
   "$12+18=3e-e \\;\\Longrightarrow\\; 30=2e$", "$e=15$ anys"],
  ex_text="")

Q("95", 95, "", B5, "A",
  "En un triangle rectangle de 24 m de perímetre, la longitud d'un "
  "catet és igual als tres quarts de la longitud de l'altre. Troba'n "
  "les dimensions.",
  "Catets de $8$ m i $6$ m, i hipotenusa de $10$ m",
  [D("Catets de $9$ m i $12$ m, i hipotenusa de $3$ m", "VEREDICTE_INVERTIT",
     "La hipotenusa ha de ser el costat MÉS LLARG del triangle "
     "rectangle, mai el més curt: revisa quin dels tres valors "
     "surt de l'arrel quadrada."),
   D("Catets de $8$ m i $6$ m, i hipotenusa de $16$ m", "TERME_OBLIDAT_OPERACIO",
     "Comprova per Pitàgores: $8^2+6^2=64+36=100=10^2$, no $16^2$; "
     "revisa el càlcul de l'arrel quadrada final."),
   D("Catets de $10$ m i $7{,}5$ m, i hipotenusa de $6{,}5$ m",
     "TERME_OBLIDAT_OPERACIO",
     "El perímetre d'aquesta opció no dona $24$ m "
     "($10+7{,}5+6{,}5=24$, sí que hi quadra la suma, però "
     "comprova Pitàgores: $10^2+7{,}5^2\\ne6{,}5^2$, així que no "
     "pot ser un triangle rectangle amb aquests costats).")],
  ["Anomena $a$ el catet més llarg; l'altre val $\\frac{3}{4}a$. "
   "La hipotenusa és $\\sqrt{a^2+\\left(\\frac34a\\right)^2}$.",
   "Com que el perímetre és $24$, planteja "
   "$a+\\frac34a+\\sqrt{a^2+\\frac{9}{16}a^2}=24$ i simplifica "
   "l'arrel abans de resoldre."],
  [r"Dins l'arrel: $a^2+\dfrac{9}{16}a^2=\dfrac{25}{16}a^2$, i com "
   r"que $a>0$: $\sqrt{\dfrac{25}{16}a^2}=\dfrac{5}{4}a$",
   r"L'equació queda $a+\dfrac34a+\dfrac54a=24 "
   r"\;\Longrightarrow\; 3a=24 \;\Longrightarrow\; a=8$",
   r"Catet curt: $\dfrac34\cdot8=6$ m; hipotenusa: "
   r"$\dfrac54\cdot8=10$ m"],
  ex_text="")

Q("96", 96, "", B5, "A",
  "Per enrajolar una sala de 8 m de llarg per 6 m d'ample s'han fet "
  "servir 300 rajoles quadrades. Quant mesura el costat de les "
  "rajoles?",
  "$0{,}4$ m (és a dir, $40$ cm) de costat",
  [D("$0{,}16$ m de costat", "SIMPLIFICACIO_INCOMPLETA",
     "Aquest seria el valor de $L^2$ (l'àrea d'una rajola), no de "
     "$L$ (el costat): encara falta fer l'arrel quadrada."),
   D("$4$ m de costat", "ORDRE_MULTIPLICACIO_DIVISIO",
     "Comprova-ho: una rajola de $4$ m de costat tindria $16$ "
     "m$^2$, molt més gran que tota la sala; revisa l'equació "
     "$300\\cdot L^2=48$."),
   D("$1{,}25$ m de costat", "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "Aquest valor surt de dividir $300$ entre $48$ enlloc de $48$ "
     "entre $300$ dins de l'equació $300\\cdot L^2=48$.")],
  ["La superfície de la sala és $8\\cdot6=48$ m$^2$. Si $L$ és el "
   "costat d'una rajola, la seva àrea és $L^2$.",
   "Com que se n'han fet servir $300$ per cobrir tota la sala: "
   "$300\\cdot L^2=48$."],
  [r"$300\cdot L^2=48 \;\Longrightarrow\; L^2=\dfrac{48}{300}"
   r"=\dfrac{4}{25}$",
   r"$L=\sqrt{\dfrac{4}{25}}=\dfrac{2}{5}=0{,}4$ m"],
  ex_text="")

Q("97", 97, "", B5, "A",
  "En Pau té 8 anys i la seva germana, 2 anys. Al cap de quants anys "
  "l'edat d'en Pau serà el doble que la de la seva germana?",
  "D'aquí a $4$ anys",
  [D("D'aquí a $2$ anys", "PROGRESSIO_INVENTADA",
     "Comprova-ho: d'aquí a 2 anys en Pau tindria $10$ i la "
     "germana $4$; $10$ no és el doble de $4$."),
   D("D'aquí a $6$ anys", "ORDRE_RESTA",
     "Comprova-ho: d'aquí a 6 anys en Pau tindria $14$ i la "
     "germana $8$; $14$ no és el doble de $8$."),
   D("Ara mateix (0 anys)", "VEREDICTE_INVERTIT",
     "Ara en Pau té $8$ i la germana $2$: $8$ és el quàdruple de "
     "$2$, no el doble; cal que passi temps perquè la proporció "
     "canviï cap al doble.")],
  ["Anomena $x$ els anys que han de passar. En Pau tindrà $8+x$ "
   "anys, i la germana, $2+x$.",
   "Planteja l'equació \"el doble\": $8+x=2(2+x)$."],
  ["$8+x=2(2+x) \\;\\Longrightarrow\\; 8+x=4+2x$",
   "$8-4=2x-x$", "$x=4$ anys"],
  ex_text="")

Q("98", 98, "", B5, "A",
  "En Tomàs és 5 anys més gran que l'Elena i, fa 10 anys, l'edat d'en "
  "Tomàs era el doble de l'edat de l'Elena. Quina edat té en Tomàs?",
  "En Tomàs té $20$ anys (i l'Elena, $15$)",
  [D("En Tomàs té $15$ anys (i l'Elena, $10$)", "DESPLACAMENT_INDEX",
     "Comprova la segona condició: fa 10 anys en Tomàs tenia $5$ i "
     "l'Elena $0$; $5$ no és el doble de $0$ (i a més $0$ anys fa "
     "10 anys no té sentit amb aquestes dades)."),
   D("En Tomàs té $25$ anys (i l'Elena, $20$)", "TERME_OBLIDAT_OPERACIO",
     "Comprova la segona condició: fa 10 anys en Tomàs tenia $15$ "
     "i l'Elena $10$; $15$ no és el doble de $10$."),
   D("L'edat d'en Tomàs no es pot determinar amb aquestes dades",
     "PROGRESSIO_INVENTADA",
     "El sistema de dues equacions (diferència d'edats i relació "
     "\"fa 10 anys\") té solució única: no cal descartar el "
     "problema.")],
  ["Anomena $t$ l'edat d'en Tomàs i $e$ la de l'Elena. La primera "
   "condició dona $t=e+5$.",
   "\"Fa 10 anys\" és $t-10$ i $e-10$; la segona condició diu que "
   "el primer és el doble del segon: $t-10=2(e-10)$."],
  ["Sistema: $t=e+5,\\quad t-10=2(e-10)$",
   "Substituint: $(e+5)-10=2(e-10) \\;\\Longrightarrow\\; "
   "e-5=2e-20$",
   "$-5+20=2e-e \\;\\Longrightarrow\\; e=15$; per tant $t=15+5=20$"],
  ex_text="")

Q("99", 99, "", B5, "A",
  "Canviem el valor de diverses monedes d'1 cèntim d'euro per "
  "monedes de 5 cèntims, amb la qual cosa obtenim 60 monedes menys. "
  "Quantes monedes hi ha de cada classe?",
  "$75$ monedes d'1 cèntim, que es canvien per $15$ monedes de $5$ cèntims",
  [D("$60$ monedes d'1 cèntim, que es canvien per $12$ monedes de $5$ cèntims",
     "PROGRESSIO_INVENTADA",
     "Comprova-ho: $60-12=48$, no $60$; aquesta parella no compleix "
     "la condició de \"60 monedes menys\"."),
   D("$300$ monedes d'1 cèntim, que es canvien per $60$ monedes de $5$ cèntims",
     "SIGNE_QUOCIENT",
     "Comprova-ho: $300-60=240$, no $60$; revisa l'equació "
     "$n-\\frac{n}{5}=60$."),
   D("$100$ monedes d'1 cèntim, que es canvien per $20$ monedes de $5$ cèntims",
     "PROGRESSIO_INVENTADA",
     "Comprova-ho: $100-20=80$, no $60$; aquesta parella no "
     "compleix la condició exacta de l'enunciat.")],
  ["Anomena $n$ el nombre de monedes d'1 cèntim. Cada $5$ monedes "
   "originals es converteixen en $1$ moneda nova, així que en "
   "queden $\\frac{n}{5}$.",
   "La diferència de nombre de monedes és $60$: "
   "$n-\\frac{n}{5}=60$."],
  [r"$n-\dfrac{n}{5}=60$; multipliquem per $5$: "
   r"$5n-n=300 \;\Longrightarrow\; 4n=300$",
   "$n=75$ monedes d'1 cèntim",
   r"Es converteixen en $\dfrac{75}{5}=15$ monedes de $5$ cèntims"],
  ex_text="")

Q("100", 100, "", B5, "A",
  "Un matrimoni i els seus tres fills viatgen en tren. Si el bitllet "
  "d'adult costa el doble que el de nen i el cost total dels "
  "bitllets és de 8,75 €, quant ha costat cada bitllet?",
  "Bitllet de nen: $1{,}25$ €; bitllet d'adult: $2{,}5$ €",
  [D("Bitllet de nen: $1{,}75$ €; bitllet d'adult: $3{,}5$ €",
     "TERME_OBLIDAT_OPERACIO",
     "Comprova-ho: $2\\cdot(2\\cdot1{,}75)+3\\cdot1{,}75=7+5{,}25"
     "=12{,}25$ €, no $8{,}75$ €."),
   D("Bitllet de nen: $2{,}5$ €; bitllet d'adult: $1{,}25$ €",
     "VEREDICTE_INVERTIT",
     "L'enunciat diu que el bitllet d'ADULT costa el doble que el "
     "de NEN, no al revés: revisa quin dels dos valors és més gran."),
   D("Bitllet de nen: $0{,}875$ €; bitllet d'adult: $1{,}75$ €",
     "FACTOR_COMU_INCOMPLET",
     "Revisa quants adults i quants nens hi ha: 2 adults i 3 "
     "nens, no 1 de cada, en l'equació del cost total.")],
  ["Anomena $n$ el preu del bitllet de nen; el d'adult val $2n$. "
   "Hi ha $2$ adults i $3$ nens.",
   "Planteja el cost total: $2\\cdot(2n)+3\\cdot n=8{,}75$."],
  ["$2\\cdot(2n)+3n=8{,}75 \\;\\Longrightarrow\\; 4n+3n=8{,}75$",
   "$7n=8{,}75 \\;\\Longrightarrow\\; n=1{,}25$",
   "El bitllet d'adult val el doble: $2\\cdot1{,}25=2{,}5$ €"],
  ex_text="")
