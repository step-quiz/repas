# -*- coding: utf-8 -*-
"""c_potencies.py — Full 2: Potències.

Genera els 76 ítems dels exercicis 35-46 del full font (im2.tex), organitzats
en 4 blocs:
  basiques    (35-37)  potències de la mateixa base i potència d'un producte
  negatiu     (38-40)  exponent negatiu i equacions amb potències
  verifica    (41-43)  troba l'error, cert o fals, potència d'una potència
  combinades  (44-46)  potència d'una potència combinada i bases diferents

Com a c_enters.py: cap resposta s'escriu a mà — es calculen amb ev() (Fraction
exacte) o, quan la tasca demana "una sola potència" i no un valor, l'exponent
final es calcula amb aritmètica normal de Python i es formata amb pot().
"""
from lib import Q, D, DT, ev, tex, dificultats

# --------------------------------------------------------------------
# Dificultat de cada exercici (1 directa, 2 encadenada, 3 completa).
# Full 2 · potències
# Vegeu l'escala completa a lib.py. L'itinerari fa servir aquest camp
# per graduar el recorregut, de manera que canviar-hi un número canvia
# l'ordre en què l'alumne es troba els exercicis.
# --------------------------------------------------------------------
dificultats({
     35: 1,  # una sola propietat, base repetida; 43, potència d'una potència
     36: 2,  # encadena producte i quocient de potències
     37: 2,  # potència d'un producte i d'un quocient, amb fraccions i decimals
     38: 2,  # exponents negatius encadenats
     39: 2,  # a l'inrevés: quina potència falta perquè la igualtat sigui certa
     40: 3,  # a l'inrevés i amb incògnita a l'exponent: cal plantejar una equació
     41: 3,  # trobar l'error d'una cadena i corregir-lo
     42: 2,  # decidir si la igualtat és certa i dir per què
     43: 1,
     44: 2,
     45: 3,  # cal unificar bases diferents abans d'aplicar cap propietat
     46: 3,  # incògnita dins d'una cadena de dues propietats
})


B1 = "basiques"
B2 = "negatiu"
B3 = "verifica"
B4 = "combinades"


def pot(base, exp, bare=None):
    """LaTeX d'una potència única base^exp (exp és un enter, pot ser negatiu
    o 0). Si exp==1, es mostra només la base — o `bare`, si la versió sense
    parèntesi és diferent (com als exercicis amb base fraccionària)."""
    if exp == 1:
        return bare if bare is not None else base
    return r"%s^{%d}" % (base, exp)


# =====================================================================
# BLOC 1 — CÀLCUL DE POTÈNCIES (exercicis 35-37)
# =====================================================================

E35 = "Troba el valor d'aquestes potències."

Q("35a", 35, "a", B1, "A",
  r"$2^5\cdot 2^3$",
  ev("2**5*2**3"),
  [DT(ev("2**15"), "EXPONENTS_MULTIPLICATS"),
   D(tex(ev("8**2")), "BASE_EXPONENT_INTERCANVIATS",
     "Has canviat de lloc la base i l'exponent: no és el mateix $2^8$ que $8^2$."),
   DT(ev("2**(5-3)"), "EXPONENTS_RESTATS_PRODUCTE")],
  ["És un producte de potències de la mateixa base: els exponents se sumen.",
   "$2^5\\cdot 2^3=2^{5+3}=2^8$. Ara calcula $2^8$."],
  ["$2^5\\cdot 2^3=2^{5+3}=2^8=256$"],
  ex_text=E35)

Q("35b", 35, "b", B1, "A",
  r"$2^5:2^3$",
  ev("2**5/2**3"),
  [DT(ev("2**8"), "EXPONENTS_SUMATS_QUOCIENT"),
   D(tex(ev("2**(3-5)")), "ORDRE_RESTA",
     "Has restat l'exponent del divisor menys el del dividend, i és a l'inrevés."),
   D(tex(ev("1**2")), "BASE_ALTERADA",
     "La base es queda igual, $2$; no es divideixen les bases entre elles.")],
  ["És un quocient de potències de la mateixa base: els exponents es resten.",
   "$2^5:2^3=2^{5-3}=2^2$. Ara calcula $2^2$."],
  ["$2^5:2^3=2^{5-3}=2^2=4$"],
  ex_text=E35)

Q("35c", 35, "c", B1, "A",
  r"$3^7\cdot 3^2\cdot 3^4$",
  ev("3**7*3**2*3**4"),
  [DT(ev("3**(7+(2*4))"), "EXPONENTS_MULTIPLICATS",
      extra="Almenys en un dels factors."),
   DT(ev("3**(7+2)"), "FACTOR_OBLIDAT",
      extra="T'has deixat pel camí el factor $3^4$."),
   D(tex(ev("13**3")), "BASE_EXPONENT_INTERCANVIATS",
     "Un cop simplificat a $3^{13}$, has canviat de lloc la base i l'exponent: $3^{13}\\ne 13^3$.")],
  ["Els tres factors tenen la mateixa base: suma els tres exponents.",
   "$3^7\\cdot 3^2\\cdot 3^4=3^{7+2+4}=3^{13}$. Ara calcula $3^{13}$."],
  ["$3^7\\cdot 3^2\\cdot 3^4=3^{7+2+4}=3^{13}=1\\,594\\,323$"],
  ex_text=E35)

Q("35d", 35, "d", B1, "A",
  r"$(-4)^9\cdot(-4)^5\cdot(-4)$",
  ev("(-4)**9*(-4)**5*(-4)"),
  [D(tex(ev("(-4)**(9+5)")), "FACTOR_OBLIDAT",
     "T'has deixat pel camí el tercer factor, $(-4)^1$: sense ell l'exponent final no és correcte."),
   DT(ev("4**15"), "PARITAT_EXPONENT"),
   D(tex(ev("15**-4")), "BASE_EXPONENT_INTERCANVIATS",
     "Un cop simplificat a $(-4)^{15}$, has canviat de lloc la base i l'exponent.")],
  ["El tercer factor és $(-4)^1$, no te l'oblidis en sumar els exponents.",
   "$(-4)^9\\cdot(-4)^5\\cdot(-4)^1=(-4)^{15}$. Com que l'exponent és senar, el resultat és negatiu."],
  ["$(-4)^9\\cdot(-4)^5\\cdot(-4)=(-4)^{9+5+1}=(-4)^{15}=-1\\,073\\,741\\,824$"],
  ex_text=E35)

Q("35e", 35, "e", B1, "A",
  r"$(-4)^9:(-4)^5:(-4)$",
  ev("(-4)**9/(-4)**5/(-4)"),
  [DT(ev("(-4)**5"), "ORDRE_DIVISIONS",
      extra="Has calculat $(-4)^5:(-4)^4$ primer, com si el segon i el tercer terme "
            "anessin junts."),
   DT(ev("(-4)**15"), "EXPONENTS_SUMATS_QUOCIENT"),
   DT(ev("4**3"), "PARITAT_EXPONENT")],
  ["Divisió de potències de la mateixa base seguida: resta els exponents "
   "d'esquerra a dreta, $9-5-1$.",
   "$(-4)^9:(-4)^5:(-4)=(-4)^{9-5-1}=(-4)^3$. Com que l'exponent és senar, el resultat és negatiu."],
  ["$(-4)^9:(-4)^5:(-4)=(-4)^{9-5-1}=(-4)^3=-64$"],
  ex_text=E35)

Q("35f", 35, "f", B1, "A",
  r"$(7\cdot 4)^0$",
  ev("(7*4)**0"),
  [DT(0, "EXPONENT_ZERO"),
   D(tex(ev("7*4")), "EXPONENT_IGNORAT",
     "Has ignorat l'exponent $0$ i has calculat només $7\\cdot 4$. Qualsevol base "
     "diferent de zero elevada a $0$ val $1$, sigui quina sigui la base."),
   DT(7, "POTENCIA_PRODUCTE_UN_FACTOR")],
  ["No cal multiplicar $7\\cdot 4$ per a res: mira bé l'exponent.",
   "Qualsevol nombre (diferent de zero) elevat a $0$ val $1$."],
  ["$(7\\cdot 4)^0=1$, perquè qualsevol nombre diferent de zero elevat a $0$ val $1$"],
  ex_text=E35)


E36 = "Expressa el resultat amb una sola potència."

Q("36a", 36, "a", B1, "A",
  r"$(3^3\cdot 3^4\cdot 3^9):3^6$",
  pot("3", 3 + 4 + 9 - 6),
  [DT(pot("3", 3 + 4 + 9 + 6), "EXPONENTS_SUMATS_QUOCIENT"),
   DT(pot("3", 3 + 4 - 6), "FACTOR_OBLIDAT",
      extra="T'has deixat pel camí el factor $3^9$."),
   DT(pot("3", (3 * 4 * 9) - 6), "EXPONENTS_MULTIPLICATS",
      extra="Als factors del numerador.")],
  ["Multiplicar i dividir potències de la mateixa base: suma els exponents "
   "del numerador i resta el del divisor.",
   "$3^3\\cdot 3^4\\cdot 3^9=3^{3+4+9}=3^{16}$, i després $3^{16}:3^6=3^{16-6}$."],
  [r"$(3^3\cdot 3^4\cdot 3^9):3^6=3^{3+4+9-6}=3^{10}$"],
  ex_text=E36)

Q("36b", 36, "b", B1, "A",
  r"$(-2)^4\cdot(-2)^6\cdot(-2)^5$",
  pot("(-2)", 4 + 6 + 5),
  [D(r"2^{15}", "BASE_SIGNE_PERDUT",
     "El resultat ha de conservar la base tal com era, $(-2)$, no $2$."),
   DT(pot("(-2)", 4 * 6 * 5), "EXPONENTS_MULTIPLICATS"),
   DT(pot("(-2)", 4 + 6), "FACTOR_OBLIDAT",
      extra="T'has deixat pel camí el factor $(-2)^5$.")],
  ["Els tres factors tenen la mateixa base, $(-2)$: suma els tres exponents.",
   "$(-2)^4\\cdot(-2)^6\\cdot(-2)^5=(-2)^{4+6+5}$."],
  [r"$(-2)^4\cdot(-2)^6\cdot(-2)^5=(-2)^{4+6+5}=(-2)^{15}$"],
  ex_text=E36)

Q("36c", 36, "c", B1, "A",
  r"$(-7)^8:(-7)^4\cdot(-7)^2$",
  pot("(-7)", 8 - 4 + 2),
  [DT(pot("(-7)", 8 - (4 + 2)), "ORDRE_MULTIPLICACIO_DIVISIO"),
   DT(pot("(-7)", 8 + 4 + 2), "EXPONENTS_SUMATS_QUOCIENT"),
   DT(pot("(-7)", 8 - 4), "FACTOR_OBLIDAT",
      extra="Has comptat el factor $(-7)^2$ com si no hi fos.")],
  ["La divisió i la multiplicació tenen la mateixa prioritat: d'esquerra a dreta.",
   "$(-7)^8:(-7)^4\\cdot(-7)^2=(-7)^{8-4}\\cdot(-7)^2=(-7)^4\\cdot(-7)^2$."],
  [r"$(-7)^8:(-7)^4\cdot(-7)^2=(-7)^{8-4+2}=(-7)^{6}$"],
  ex_text=E36)

Q("36d", 36, "d", B1, "A",
  r"$\left(\dfrac{5}{2}\right)^4\cdot\left(\dfrac{5}{2}\right)^3:\left(\dfrac{5}{2}\right)^6$",
  pot(r"(\dfrac{5}{2})", 4 + 3 - 6, bare=r"\dfrac{5}{2}"),
  [DT(pot(r"(\dfrac{5}{2})", 4 + 3 + 6), "EXPONENTS_SUMATS_QUOCIENT"),
   DT(pot(r"(\dfrac{5}{2})", 4 * 3 - 6), "EXPONENTS_MULTIPLICATS",
      extra="Als dos primers factors."),
   DT(pot(r"(\dfrac{5}{2})", 4 - 6), "FACTOR_OBLIDAT",
      extra="T'has deixat pel camí el factor $\\left(\\dfrac{5}{2}\\right)^3$.")],
  ["Suma els exponents dels factors que multipliquen i resta el del que divideix.",
   "$4+3-6=1$: la potència amb exponent $1$ és la base tal qual."],
  [r"$\left(\dfrac{5}{2}\right)^4\cdot\left(\dfrac{5}{2}\right)^3:\left(\dfrac{5}{2}\right)^6"
   r"=\left(\dfrac{5}{2}\right)^{4+3-6}=\left(\dfrac{5}{2}\right)^1=\dfrac{5}{2}$"],
  ex_text=E36)

BASE_E = r"(-\dfrac{1}{9})"
Q("36e", 36, "e", B1, "A",
  r"$\left[\left(-\dfrac{1}{9}\right)^2\cdot\left(-\dfrac{1}{9}\right)^3\right]"
  r":\left[\left(-\dfrac{1}{9}\right)^4:\left(-\dfrac{1}{9}\right)\right]$",
  pot(BASE_E, 2),
  [DT(pot(BASE_E, 2 + 3 - 4 - 1), "ORDRE_DIVISIONS",
      extra="No has resolt el claudàtor del denominador abans de dividir: "
            "$4:1$ és una potència entre una altra, no es resta com si no hi hagués claudàtor."),
   DT(pot(BASE_E, (2 * 3) - (4 - 1)), "EXPONENTS_MULTIPLICATS",
      extra="Al claudàtor del numerador."),
   DT(pot(BASE_E, (2 + 3) - 4), "FACTOR_OBLIDAT",
      extra="Al claudàtor del denominador t'has deixat pel camí $:\\left(-\\dfrac19\\right)^1$.")],
  ["Resol primer cada claudàtor per separat i després combina els resultats.",
   "Numerador: $2+3=5$. Denominador: $4-1=3$. Resultat: $5-3=2$."],
  [r"Numerador: $\left(-\dfrac19\right)^2\cdot\left(-\dfrac19\right)^3=\left(-\dfrac19\right)^5$. "
   r"Denominador: $\left(-\dfrac19\right)^4:\left(-\dfrac19\right)=\left(-\dfrac19\right)^3$. "
   r"Resultat: $\left(-\dfrac19\right)^5:\left(-\dfrac19\right)^3=\left(-\dfrac19\right)^2$"],
  ex_text=E36)

Q("36f", 36, "f", B1, "A",
  r"$(-5)^8:\left[(-5)^3:(-5)^2\right]$",
  pot("(-5)", 8 - (3 - 2)),
  [DT(pot("(-5)", 8 - 3 - 2), "ORDRE_DIVISIONS"),
   DT(pot("(-5)", 8 + (3 - 2)), "EXPONENTS_SUMATS_QUOCIENT"),
   D(r"5^{7}", "BASE_SIGNE_PERDUT",
     "El resultat ha de conservar la base tal com era, $(-5)$, no $5$.")],
  ["Resol primer el claudàtor: $(-5)^3:(-5)^2$.",
   "El claudàtor val $(-5)^1$. Després, $8-1=7$."],
  [r"$(-5)^3:(-5)^2=(-5)^1$, i $(-5)^8:(-5)^1=(-5)^{8-1}=(-5)^{7}$"],
  ex_text=E36)

Q("36g", 36, "g", B1, "A",
  r"$\left[6^9\cdot 6^5\right]:\left[6^4\cdot 6^7\right]$",
  pot("6", (9 + 5) - (4 + 7)),
  [DT(pot("6", (9 + 5) - 4 + 7), "ORDRE_DIVISIONS",
      extra="No has resolt el claudàtor del denominador abans de dividir."),
   DT(pot("6", (9 + 5) - (4 * 7)), "EXPONENTS_MULTIPLICATS",
      extra="Al claudàtor del denominador."),
   DT(pot("6", (9 + 5) - 4), "FACTOR_OBLIDAT",
      extra="Al claudàtor del denominador t'has deixat pel camí el factor $6^7$.")],
  ["Resol primer cada claudàtor per separat i després resta els exponents.",
   "Numerador: $9+5=14$. Denominador: $4+7=11$. Resultat: $14-11=3$."],
  [r"$6^9\cdot 6^5=6^{14}$ i $6^4\cdot 6^7=6^{11}$; $6^{14}:6^{11}=6^{14-11}=6^{3}$"],
  ex_text=E36)


E37 = "Aplica les propietats de les potències per resoldre les expressions."

Q("37a", 37, "a", B1, "A",
  r"$(7\cdot 3)^4$",
  ev("(7*3)**4"),
  [DT(ev("7*3**4"), "POTENCIA_PRODUCTE_UN_FACTOR"),
   DT(ev("(7+3)**4"), "POTENCIA_DE_SUMA"),
   D(tex(ev("7*3")), "EXPONENT_OBLIDAT",
     "T'has deixat l'exponent pel camí: cal elevar el producte a la quarta potència, "
     "no deixar-lo tal qual.")],
  ["L'exponent afecta tots dos factors del producte: $(a\\cdot b)^n=a^n\\cdot b^n$.",
   "$(7\\cdot 3)^4=7^4\\cdot 3^4$, o directament $21^4$."],
  ["$(7\\cdot 3)^4=21^4=194\\,481$"],
  ex_text=E37)

Q("37b", 37, "b", B1, "A",
  r"$\left[(-5)\cdot 3\right]^5$",
  ev("((-5)*3)**5"),
  [DT(ev("(-5)*3**5"), "POTENCIA_PRODUCTE_UN_FACTOR"),
   D(tex(ev("759375")), "PARITAT_EXPONENT",
     "L'exponent $5$ és senar: el resultat s'ha de quedar negatiu."),
   DT(ev("((-5)+3)**5"), "POTENCIA_DE_SUMA")],
  ["L'exponent afecta els dos factors del producte, i l'exponent $5$ és senar: "
   "el resultat és negatiu.",
   "$[(-5)\\cdot 3]^5=(-15)^5$."],
  ["$[(-5)\\cdot 3]^5=(-15)^5=-759\\,375$"],
  ex_text=E37)

Q("37c", 37, "c", B1, "A",
  r"$\left[\dfrac{4}{3}\cdot\left(-\dfrac{8}{6}\right)\right]^3$",
  ev("(4/3*(-8/6))**3"),
  [DT(ev("4/3*(-8/6)**3"), "POTENCIA_PRODUCTE_UN_FACTOR"),
   DT(ev("(4/3*(8/6))**3"), "SIGNE_PRODUCTE"),
   DT(ev("(4/3+(-8/6))**3"), "POTENCIA_DE_SUMA")],
  ["Multiplica primer el que hi ha dins del claudàtor: $\\dfrac43\\cdot\\left(-\\dfrac86\\right)$.",
   "$\\dfrac43\\cdot\\left(-\\dfrac86\\right)=-\\dfrac{16}{9}$. Ara eleva-ho al cub."],
  [r"$\dfrac43\cdot\left(-\dfrac86\right)=-\dfrac{16}{9}$, i "
   r"$\left(-\dfrac{16}{9}\right)^3=-\dfrac{4096}{729}$"],
  ex_text=E37)

Q("37d", 37, "d", B1, "A",
  r"$\left[(-8):5\right]^3$",
  ev("((-8)/5)**3"),
  [DT(ev("(-8)/5**3"), "POTENCIA_QUOCIENT_UN_FACTOR"),
   DT(ev("(8/5)**3"), "SIGNE_QUOCIENT"),
   DT(ev("(5/(-8))**3"), "INVERTIDA")],
  ["L'exponent afecta els dos termes del quocient, i l'exponent $3$ és senar: "
   "el resultat es queda negatiu.",
   "$[(-8):5]^3=\\left(-\\dfrac85\\right)^3$."],
  [r"$[(-8):5]^3=\left(-\dfrac85\right)^3=-\dfrac{512}{125}$"],
  ex_text=E37)

Q("37e", 37, "e", B1, "A",
  r"$\left[(0{,}16):(-3)\right]^2$",
  ev("(4/25/(-3))**2"),
  [DT(ev("(4/25/(-3)**2)"), "POTENCIA_QUOCIENT_UN_FACTOR"),
   D(tex(ev("(16/10/(-3))**2")), "COMA_DECIMAL_DESPLAÇADA",
     "Un decimal amb dues xifres darrere la coma és sobre $100$, no sobre $10$: "
     "$0{,}16=\\dfrac{16}{100}$, no $\\dfrac{16}{10}$."),
   DT(ev("((-3)/(4/25))**2"), "INVERTIDA")],
  ["$0{,}16$ és la fracció $\\dfrac{16}{100}=\\dfrac{4}{25}$.",
   "$\\dfrac{4}{25}:(-3)=-\\dfrac{4}{75}$. Ara eleva-ho al quadrat (el resultat surt positiu)."],
  [r"$0{,}16=\dfrac{4}{25}$; $\dfrac{4}{25}:(-3)=-\dfrac{4}{75}$; "
   r"$\left(-\dfrac{4}{75}\right)^2=\dfrac{16}{5625}$"],
  ex_text=E37)

Q("37f", 37, "f", B1, "A",
  r"$\left[\dfrac{4}{6}\cdot\left(-\dfrac{7}{3}\right)\right]^5$",
  ev("(4/6*(-7/3))**5"),
  [DT(ev("4/6*(-7/3)**5"), "POTENCIA_PRODUCTE_UN_FACTOR"),
   DT(ev("(4/6*(7/3))**5"), "SIGNE_PRODUCTE"),
   DT(ev("(4/6+(-7/3))**5"), "POTENCIA_DE_SUMA")],
  ["Multiplica primer el que hi ha dins del claudàtor: $\\dfrac46\\cdot\\left(-\\dfrac73\\right)$.",
   "$\\dfrac46\\cdot\\left(-\\dfrac73\\right)=-\\dfrac{14}{9}$. Ara eleva-ho a la cinquena potència."],
  [r"$\dfrac46\cdot\left(-\dfrac73\right)=-\dfrac{14}{9}$, i "
   r"$\left(-\dfrac{14}{9}\right)^5=-\dfrac{537824}{59049}$"],
  ex_text=E37)

Q("37g", 37, "g", B1, "A",
  r"$(-6)^2\cdot(-6)^4\cdot(-6)^{12}$",
  ev("(-6)**2*(-6)**4*(-6)**12"),
  [DT(ev("(-6)**6"), "FACTOR_OBLIDAT",
      extra="T'has deixat pel camí el factor $(-6)^{12}$."),
   DT(ev("(-6)**20"), "EXPONENTS_MULTIPLICATS",
      extra="En algun dels factors."),
   DT(ev("(-6)**-6"), "EXPONENTS_RESTATS_PRODUCTE")],
  ["Els tres factors tenen la mateixa base: suma els tres exponents ($2+4+12$).",
   "$(-6)^2\\cdot(-6)^4\\cdot(-6)^{12}=(-6)^{18}$. L'exponent és parell: el resultat és positiu."],
  ["$(-6)^2\\cdot(-6)^4\\cdot(-6)^{12}=(-6)^{2+4+12}=(-6)^{18}=101\\,559\\,956\\,668\\,416$"],
  ex_text=E37)

Q("37h", 37, "h", B1, "A",
  r"$(0{,}3)^2\cdot(0{,}3)^4$",
  ev("(3/10)**2*(3/10)**4"),
  [DT(ev("(3/10)**8"), "EXPONENTS_MULTIPLICATS"),
   D(tex(ev("(3/100)**6")), "COMA_DECIMAL_DESPLAÇADA",
     "Un decimal amb una xifra darrere la coma és sobre $10$, no sobre $100$: "
     "$0{,}3=\\dfrac{3}{10}$, no $\\dfrac{3}{100}$."),
   DT(ev("(3/10)**4"), "FACTOR_OBLIDAT",
      extra="T'has deixat pel camí el factor $(0{,}3)^2$.")],
  ["$0{,}3$ és la fracció $\\dfrac{3}{10}$.",
   "$(0{,}3)^2\\cdot(0{,}3)^4=(0{,}3)^{2+4}=(0{,}3)^6$."],
  [r"$0{,}3=\dfrac{3}{10}$; $\left(\dfrac{3}{10}\right)^2\cdot\left(\dfrac{3}{10}\right)^4"
   r"=\left(\dfrac{3}{10}\right)^{6}=\dfrac{729}{1\,000\,000}$"],
  ex_text=E37)

Q("37i", 37, "i", B1, "A",
  r"$(-0{,}5)^6\cdot(-0{,}5)^{13}\cdot(-0{,}5)^{11}$",
  ev("(-1/2)**6*(-1/2)**13*(-1/2)**11"),
  [DT(ev("(-1/2)**19"), "FACTOR_OBLIDAT",
      extra="T'has deixat pel camí el factor $(-0{,}5)^{11}$."),
   DT(ev("(-1/2)**4"), "EXPONENTS_RESTATS_PRODUCTE"),
   D(tex(ev("-1/1073741824")), "PARITAT_EXPONENT",
     "L'exponent final, $30$, és parell: el resultat és positiu, encara que hi hagi tres "
     "factors negatius.")],
  ["$-0{,}5$ és la fracció $-\\dfrac12$. Suma els tres exponents: $6+13+11$.",
   "L'exponent final és $30$, que és parell: el resultat és positiu."],
  [r"$-0{,}5=-\dfrac12$; $6+13+11=30$; $\left(-\dfrac12\right)^{30}=\dfrac{1}{1\,073\,741\,824}$"],
  ex_text=E37)

Q("37j", 37, "j", B1, "A",
  r"$\left(-\dfrac{3}{6}\right)^3\cdot\left(-\dfrac{3}{6}\right)^2$",
  ev("(-3/6)**3*(-3/6)**2"),
  [DT(ev("(-1/2)**6"), "EXPONENTS_MULTIPLICATS"),
   DT(ev("(-1/2)**3"), "FACTOR_OBLIDAT",
      extra="T'has deixat pel camí el factor $\\left(-\\dfrac36\\right)^2$."),
   DT(ev("1/32"), "PARITAT_EXPONENT",
      extra="L'exponent final, $5$, és senar: el resultat s'ha de quedar negatiu.")],
  ["Simplifica primer la base: $-\\dfrac36=-\\dfrac12$.",
   "Suma els exponents: $3+2=5$, que és senar, de manera que el resultat és negatiu."],
  [r"$-\dfrac36=-\dfrac12$; $\left(-\dfrac12\right)^3\cdot\left(-\dfrac12\right)^2"
   r"=\left(-\dfrac12\right)^{5}=-\dfrac{1}{32}$"],
  ex_text=E37)


# =====================================================================
# BLOC 2 — EXPONENT NEGATIU I EQUACIONS (exercicis 38-40)
# =====================================================================

E38 = "Resol les operacions."

Q("38a", 38, "a", B2, "A",
  r"$2^4\cdot 2^{-2}\cdot 2^3$",
  ev("2**4*2**-2*2**3"),
  [DT(ev("2**4*-(2**2)*2**3"), "EXPONENT_NEGATIU_SIGNE",
      extra="Has tractat $2^{-2}$ com $-2^2=-4$."),
   D(tex(ev("2**9")), "EXPONENT_NEGATIU_SIGNE",
     "Has ignorat el signe menys de l'exponent $-2$ en sumar: $4+2+3=9$ en comptes "
     "de $4-2+3=5$."),
   DT(ev("2**(-4*-2+3)"), "EXPONENTS_MULTIPLICATS",
      extra="Al primer parell de factors.")],
  ["Suma els exponents tenint en compte el signe: $4+(-2)+3$.",
   "$2^4\\cdot 2^{-2}\\cdot 2^3=2^{4-2+3}=2^5$."],
  ["$2^4\\cdot 2^{-2}\\cdot 2^3=2^{4-2+3}=2^5=32$"],
  ex_text=E38)

Q("38b", 38, "b", B2, "A",
  r"$(2^{-2})^3\cdot 2^{-4}$",
  ev("(2**-2)**3*2**-4"),
  [DT(ev("2**(-2+3-4)"), "POTENCIA_POTENCIA_SUMADA"),
   D(tex(ev("(2**-2)**3*2**4")), "EXPONENT_NEGATIU_SIGNE",
     "Has ignorat el signe menys de l'exponent $-4$ del segon factor."),
   DT(ev("(2**-2)**3"), "FACTOR_OBLIDAT",
      extra="T'has deixat pel camí el factor $2^{-4}$.")],
  ["Potència d'una potència: multiplica els exponents, $-2\\cdot 3$.",
   "$(2^{-2})^3=2^{-6}$. Després, $2^{-6}\\cdot 2^{-4}=2^{-6-4}=2^{-10}$."],
  ["$(2^{-2})^3\\cdot 2^{-4}=2^{-6}\\cdot 2^{-4}=2^{-10}=\\dfrac{1}{1024}$"],
  ex_text=E38)

Q("38c", 38, "c", B2, "A",
  r"$(-3)^{-5}:(-3)^2\cdot(-3)^4$",
  ev("(-3)**-5/(-3)**2*(-3)**4"),
  [DT(ev("(-3)**(5-2+4)"), "EXPONENT_NEGATIU_SIGNE",
      extra="Has ignorat el signe menys de l'exponent $-5$."),
   DT(ev("(-3)**(-5+2+4)"), "EXPONENTS_SUMATS_QUOCIENT"),
   DT(ev("(-3)**(-5-2-4)"), "REGLA_NOMES_QUOCIENT",
      extra="Has restat també l'últim exponent, però aquell factor multiplica, no divideix.")],
  ["Combina els exponents amb el seu signe: $-5-2+4$.",
   "$(-3)^{-5}:(-3)^2\\cdot(-3)^4=(-3)^{-5-2+4}=(-3)^{-3}$."],
  ["$(-3)^{-5}:(-3)^2\\cdot(-3)^4=(-3)^{-5-2+4}=(-3)^{-3}=-\\dfrac{1}{27}$"],
  ex_text=E38)

Q("38d", 38, "d", B2, "A",
  r"$\left[(-3)^{-2}\right]^{-4}:(-3)^5$",
  ev("((-3)**-2)**-4/(-3)**5"),
  [DT(ev("(-3)**(-2-4-5)"), "POTENCIA_POTENCIA_SUMADA",
      extra="I també has restat el darrer exponent en lloc de fer-ho amb el resultat "
            "de la potència de potència."),
   D(tex(ev("(-3)**(-2*4)/(-3)**5")), "EXPONENT_NEGATIU_SIGNE",
     "Has ignorat el signe menys de l'exponent exterior, $-4$: $(-2)\\cdot(-4)=8$, no $-2\\cdot4=-8$."),
   DT(ev("(-3)**(-2*-4+5)"), "EXPONENTS_SUMATS_QUOCIENT")],
  ["Potència d'una potència primer: $(-2)\\cdot(-4)$.",
   "$[(-3)^{-2}]^{-4}=(-3)^{8}$. Després, $(-3)^{8}:(-3)^5=(-3)^{8-5}$."],
  ["$[(-3)^{-2}]^{-4}=(-3)^{8}$, i $(-3)^{8}:(-3)^5=(-3)^{3}=-27$"],
  ex_text=E38)

Q("38e", 38, "e", B2, "A",
  r"$\left(\dfrac{1}{3}\right)^{-2}\cdot\left(\dfrac{1}{3}\right)^5:\left(\dfrac{1}{3}\right)^{-6}$",
  ev("(1/3)**-2*(1/3)**5/(1/3)**-6"),
  [D(tex(ev("(1/3)**(2+5+6)")), "EXPONENT_NEGATIU_SIGNE",
     "Has ignorat el signe menys del primer exponent, $-2$."),
   DT(ev("(1/3)**(2+5-6)"), "EXPONENT_NEGATIU_SIGNE",
      extra="Aquest cop l'has ignorat només al primer exponent i no al de dividir."),
   DT(ev("(1/3)**(-2+5-6)"), "REGLA_NOMES_QUOCIENT",
      extra="Dividir per una potència d'exponent negatiu equival a sumar el seu "
            "exponent canviat de signe, no a restar-lo tal qual.")],
  ["Dividir per una potència d'exponent negatiu equival a sumar-ne l'exponent canviat "
   "de signe: $-(-6)=+6$.",
   "$-2+5-(-6)=-2+5+6=9$."],
  [r"$\left(\dfrac13\right)^{-2}\cdot\left(\dfrac13\right)^5:\left(\dfrac13\right)^{-6}"
   r"=\left(\dfrac13\right)^{-2+5+6}=\left(\dfrac13\right)^{9}=\dfrac{1}{19\,683}$"],
  ex_text=E38)

Q("38f", 38, "f", B2, "A",
  r"$\left(-\dfrac{1}{4}\right)^{-6}:\left[\left(-\dfrac{1}{4}\right)^2\right]^{-3}$",
  ev("(-1/4)**-6/((-1/4)**2)**-3"),
  [DT(ev("(-1/4)**(-6-(2+-3))"), "POTENCIA_POTENCIA_SUMADA",
      extra="Al claudàtor: has sumat $2$ i $-3$ en lloc de multiplicar-los."),
   DT(ev("(-1/4)**(-6+(2*-3))"), "EXPONENTS_SUMATS_QUOCIENT"),
   DT(ev("(-1/4)**(2*-3)"), "FACTOR_OBLIDAT",
      extra="T'has deixat pel camí el primer factor, $\\left(-\\dfrac14\\right)^{-6}$.")],
  ["Potència d'una potència al claudàtor: $2\\cdot(-3)=-6$.",
   "$\\left[\\left(-\\dfrac14\\right)^2\\right]^{-3}=\\left(-\\dfrac14\\right)^{-6}$. Ara "
   "divideix-ho per si mateix."],
  [r"$\left[\left(-\dfrac14\right)^2\right]^{-3}=\left(-\dfrac14\right)^{-6}$, i "
   r"$\left(-\dfrac14\right)^{-6}:\left(-\dfrac14\right)^{-6}=\left(-\dfrac14\right)^{0}=1$"],
  ex_text=E38)

Q("38g", 38, "g", B2, "A",
  r"$3^{-6}:3^{-7}\cdot 3^2$",
  ev("3**-6/3**-7*3**2"),
  [DT(ev("3**(-6-7+2)"), "REGLA_NOMES_QUOCIENT",
      extra="Dividir per una potència d'exponent negatiu equival a sumar-ne l'exponent "
            "canviat de signe, no a restar-lo tal qual."),
   D(tex(ev("3**(6-7+2)")), "EXPONENT_NEGATIU_SIGNE",
     "Has ignorat el signe menys del primer exponent, $-6$."),
   D(tex(ev("3**(-6+7-2)")), "ORDRE_RESTA",
     "Has canviat quin dels dos últims exponents se suma i quin es resta.")],
  ["Dividir per $3^{-7}$ equival a sumar-ne l'exponent canviat de signe: $-(-7)=+7$.",
   "$-6-(-7)+2=-6+7+2=3$."],
  ["$3^{-6}:3^{-7}\\cdot 3^2=3^{-6+7+2}=3^{3}=27$"],
  ex_text=E38)

Q("38h", 38, "h", B2, "A",
  r"$(-5)^6:(-5)^{-2}:(-5)^{-1}$",
  ev("(-5)**6/(-5)**-2/(-5)**-1"),
  [D(tex(ev("(-5)**(6-(-2))")), "FACTOR_OBLIDAT",
     "T'has deixat pel camí la darrera divisió, per $(-5)^{-1}$."),
   DT(ev("(-5)**(6-2-1)"), "REGLA_NOMES_QUOCIENT",
      extra="Dividir per una potència d'exponent negatiu equival a sumar-ne l'exponent "
            "canviat de signe, no a restar-lo tal qual."),
   D(tex(ev("(-5)**(6-2+1)")), "ORDRE_RESTA",
     "Has canviat de signe només l'últim exponent, i cal fer-ho amb tots dos.")],
  ["Dividir per una potència d'exponent negatiu equival a sumar-ne l'exponent canviat "
   "de signe.",
   "$6-(-2)-(-1)=6+2+1=9$."],
  ["$(-5)^6:(-5)^{-2}:(-5)^{-1}=(-5)^{6+2+1}=(-5)^{9}=-1\\,953\\,125$"],
  ex_text=E38)

Q("38i", 38, "i", B2, "A",
  r"$\left[(-6)^3\right]^{-5}\cdot\left[(-6)^{-5}\right]^4$",
  ev("((-6)**3)**-5*((-6)**-5)**4"),
  [DT(ev("(-6)**((3+-5)+(-5+4))"), "POTENCIA_POTENCIA_SUMADA",
      extra="A tots dos claudàtors."),
   DT(ev("((-6)**3)**-5"), "FACTOR_OBLIDAT",
      extra="T'has deixat pel camí el segon factor, $\\left[(-6)^{-5}\\right]^4$."),
   DT(ev("(-6)**((3*-5)-(-5*4))"), "EXPONENTS_RESTATS_PRODUCTE")],
  ["Potència d'una potència a cada claudàtor: multiplica els exponents de cada un.",
   "$[(-6)^3]^{-5}=(-6)^{-15}$ i $[(-6)^{-5}]^4=(-6)^{-20}$. Suma'ls: $-15+(-20)$."],
  [r"$[(-6)^3]^{-5}=(-6)^{-15}$, $[(-6)^{-5}]^4=(-6)^{-20}$, i "
   r"$(-6)^{-15}\cdot(-6)^{-20}=(-6)^{-35}$"],
  ex_text=E38)


E39 = "Completa amb la potència que falta perquè la igualtat sigui certa."

Q("39a", 39, "a", B2, "A",
  r"$2^3\cdot\square=2^8$",
  pot("2", 8 - 3),
  [DT(pot("2", 8 + 3), "EXPONENTS_SUMATS_QUOCIENT",
      extra="Per aïllar el factor que falta cal restar, no sumar."),
   DT(pot("2", 8), "FACTOR_OBLIDAT",
      extra="Has copiat el segon membre tal qual, sense tenir en compte el factor $2^3$ que ja hi és."),
   DT(pot("2", 3 - 8), "ORDRE_RESTA")],
  ["Si $2^3\\cdot\\square=2^8$, aleshores $\\square=2^8:2^3$.",
   "$\\square=2^{8-3}$."],
  [r"$\square=2^8:2^3=2^{8-3}=2^5$"],
  ex_text=E39)

Q("39b", 39, "b", B2, "A",
  r"$(-4)^5\cdot\square=(-4)^{10}$",
  pot("(-4)", 10 - 5),
  [DT(pot("(-4)", 10 + 5), "EXPONENTS_SUMATS_QUOCIENT",
      extra="Per aïllar el factor que falta cal restar, no sumar."),
   DT(pot("(-4)", 10), "FACTOR_OBLIDAT",
      extra="Has copiat el segon membre tal qual, sense tenir en compte el factor $(-4)^5$ que ja hi és."),
   D(r"4^{5}", "BASE_SIGNE_PERDUT",
     "El factor que falta ha de conservar la base tal com era, $(-4)$, no $4$.")],
  ["Si $(-4)^5\\cdot\\square=(-4)^{10}$, aleshores $\\square=(-4)^{10}:(-4)^5$.",
   "$\\square=(-4)^{10-5}$."],
  [r"$\square=(-4)^{10}:(-4)^5=(-4)^{10-5}=(-4)^5$"],
  ex_text=E39)

Q("39c", 39, "c", B2, "A",
  r"$\left(\dfrac{7}{2}\right)^6\cdot\square=\left(\dfrac{7}{2}\right)^7$",
  pot(r"(\dfrac{7}{2})", 7 - 6, bare=r"\dfrac{7}{2}"),
  [DT(pot(r"(\dfrac{7}{2})", 7 + 6), "EXPONENTS_SUMATS_QUOCIENT",
      extra="Per aïllar el factor que falta cal restar, no sumar."),
   DT(pot(r"(\dfrac{7}{2})", 7), "FACTOR_OBLIDAT",
      extra="Has copiat el segon membre tal qual, sense tenir en compte el factor "
            "$\\left(\\dfrac72\\right)^6$ que ja hi és."),
   DT(pot(r"(\dfrac{7}{2})", 6 - 7), "ORDRE_RESTA")],
  ["Si $\\left(\\dfrac72\\right)^6\\cdot\\square=\\left(\\dfrac72\\right)^7$, aleshores "
   "$\\square=\\left(\\dfrac72\\right)^7:\\left(\\dfrac72\\right)^6$.",
   "$\\square=\\left(\\dfrac72\\right)^{7-6}=\\left(\\dfrac72\\right)^1$."],
  [r"$\square=\left(\dfrac72\right)^{7-6}=\left(\dfrac72\right)^1=\dfrac72$"],
  ex_text=E39)

Q("39d", 39, "d", B2, "A",
  r"$(-3)^{12}:\square=(-3)^6$",
  pot("(-3)", 12 - 6),
  [DT(pot("(-3)", 12 + 6), "EXPONENTS_SUMATS_QUOCIENT",
      extra="Per aïllar el divisor que falta cal restar exponents, no sumar-los."),
   DT(pot("(-3)", 12), "FACTOR_OBLIDAT",
      extra="Has copiat el dividend tal qual, sense tenir en compte el resultat, $(-3)^6$."),
   DT(pot("(-3)", 6 - 12), "ORDRE_RESTA")],
  ["Si $(-3)^{12}:\\square=(-3)^6$, aleshores $\\square=(-3)^{12}:(-3)^6$.",
   "$\\square=(-3)^{12-6}$."],
  [r"$\square=(-3)^{12}:(-3)^6=(-3)^{12-6}=(-3)^6$"],
  ex_text=E39)

Q("39e", 39, "e", B2, "A",
  r"$\square:5^6=5$",
  pot("5", 6 + 1),
  [DT(pot("5", 6), "FACTOR_OBLIDAT",
      extra="Has copiat el divisor tal qual, sense tenir en compte el resultat, $5^1$."),
   D(r"5^{-5}", "OPERACIO_INVERTIDA",
     "Per aïllar el dividend cal multiplicar $5^6\\cdot 5$, no dividir."),
   DT(pot("5", 6 - 1), "ORDRE_RESTA")],
  ["Si $\\square:5^6=5$, aleshores $\\square=5^6\\cdot 5$.",
   "$\\square=5^{6+1}$."],
  [r"$\square=5^6\cdot 5^1=5^{6+1}=5^7$"],
  ex_text=E39)

Q("39f", 39, "f", B2, "A",
  r"$\square:\left(-\dfrac{1}{3}\right)^6=\left(-\dfrac{1}{3}\right)^3$",
  pot(r"(-\dfrac{1}{3})", 6 + 3),
  [DT(pot(r"(-\dfrac{1}{3})", 3), "FACTOR_OBLIDAT",
      extra="Has copiat el resultat tal qual, sense tenir en compte el divisor, "
            "$\\left(-\\dfrac13\\right)^6$."),
   DT(pot(r"(-\dfrac{1}{3})", 3 - 6), "ORDRE_RESTA"),
   D(r"(\dfrac{1}{3})^{9}", "BASE_SIGNE_PERDUT",
     "El factor que falta ha de conservar la base tal com era, $-\\dfrac13$, no $\\dfrac13$.")],
  ["Si $\\square:\\left(-\\dfrac13\\right)^6=\\left(-\\dfrac13\\right)^3$, aleshores "
   "$\\square=\\left(-\\dfrac13\\right)^3\\cdot\\left(-\\dfrac13\\right)^6$.",
   "$\\square=\\left(-\\dfrac13\\right)^{3+6}$."],
  [r"$\square=\left(-\dfrac13\right)^3\cdot\left(-\dfrac13\right)^6"
   r"=\left(-\dfrac13\right)^{3+6}=\left(-\dfrac13\right)^9$"],
  ex_text=E39)


E40 = "Esbrina el valor de $a$ perquè cada igualtat sigui certa."

Q("40a", 40, "a", B2, "A",
  r"$5^a\cdot 5^3=5^6$",
  3,
  [DT(2, "EQUACIO_EXPONENT_MULTIPLICAT"),
   D("6", "FACTOR_OBLIDAT",
     "Has agafat l'exponent del segon membre directament, sense tenir en compte que "
     "ja hi ha un factor $5^3$ al primer membre."),
   D("-3", "ORDRE_RESTA",
     "Has plantejat l'equació a l'inrevés: és $a+3=6$, no $3-6=a$.")],
  ["Si les bases són iguals, els exponents han de complir $a+3=6$.",
   "Aïlla $a$: $a=6-3$."],
  ["$a+3=6\\Rightarrow a=6-3=3$"],
  ex_text=E40)

Q("40b", 40, "b", B2, "A",
  r"$(-2)^{5a}:(-2)^{2a}=(-2)^6$",
  2,
  [D(tex(ev("6/5")), "FACTOR_OBLIDAT",
     "Has plantejat $5a=6$, oblidant restar-hi el $2a$ del divisor."),
   D(tex(ev("6/7")), "EXPONENTS_SUMATS_QUOCIENT",
     "Has sumat els dos exponents en lloc de restar-los: és $5a-2a=6$, no $5a+2a=6$."),
   D("-2", "ORDRE_RESTA",
     "Has plantejat l'equació a l'inrevés: és $5a-2a=6$, no $2a-5a=6$.")],
  ["Si les bases són iguals, els exponents han de complir $5a-2a=6$.",
   "$5a-2a=3a$. Aïlla $a$: $3a=6$."],
  ["$5a-2a=6\\Rightarrow 3a=6\\Rightarrow a=2$"],
  ex_text=E40)

Q("40c", 40, "c", B2, "A",
  r"$(-6)^a:(-6)^8=(-6)^0$",
  8,
  [DT(0, "EXPONENT_ZERO",
      extra="Que el resultat sigui $(-6)^0$ no vol dir que $a$ hagi de ser $0$: cal "
            "resoldre l'equació dels exponents."),
   D("-8", "ORDRE_RESTA",
     "Has plantejat l'equació a l'inrevés: és $a-8=0$, no $8-a=0$."),
   D("16", "EQUACIO_EXPONENT_MULTIPLICAT",
     "Has doblat l'exponent $8$ en lloc de plantejar l'equació $a-8=0$.")],
  ["Si les bases són iguals, els exponents han de complir $a-8=0$.",
   "Aïlla $a$: $a=8$."],
  ["$a-8=0\\Rightarrow a=8$"],
  ex_text=E40)

Q("40d", 40, "d", B2, "A",
  r"$\left(\dfrac{5}{3}\right)^3\cdot\left(\dfrac{5}{3}\right)^{2a}=\left(\dfrac{5}{3}\right)^9$",
  3,
  [D(tex(ev("3/2")), "EQUACIO_EXPONENT_MULTIPLICAT",
     "Has plantejat $3\\cdot 2a=9$ en lloc de $3+2a=9$."),
   D(tex(ev("9/2")), "FACTOR_OBLIDAT",
     "Has plantejat $2a=9$, oblidant-te del $3$ que ja hi ha al primer membre."),
   D("-3", "ORDRE_RESTA",
     "Has plantejat l'equació a l'inrevés.")],
  ["Si les bases són iguals, els exponents han de complir $3+2a=9$.",
   "$2a=9-3=6$. Aïlla $a$: $a=6:2$."],
  ["$3+2a=9\\Rightarrow 2a=6\\Rightarrow a=3$"],
  ex_text=E40)


# =====================================================================
# BLOC 3 — VERIFICA, CORREGEIX I SIMPLIFICA (exercicis 41-43)
# =====================================================================

E41 = ("Cada igualtat amaga un error. Troba'l i digues quin hauria de ser "
       "el resultat correcte.")

Q("41a", 41, "a", B3, "B",
  r"$3^2+3^3+3^5=3^{2+3+5}=3^{10}$",
  "La regla de sumar exponents és per MULTIPLICAR potències de la mateixa base, no "
  "per sumar-les: aquí les potències se sumen, així que cal sumar els seus valors. "
  "$3^2+3^3+3^5=9+27+243=279$.",
  [D("L'error és el pas $3^{2+3+5}$: hauria de ser $3^{2+3+5}=3^{9}$, no $3^{10}$.",
     "SUMA_MAL_FETA",
     "El problema no és la suma dels exponents ($2+3+5=10$ sí és correcta): el "
     "problema és que aquí no es poden sumar exponents, perquè les potències "
     "s'estan sumant, no multiplicant."),
   D("No hi ha cap error: el resultat és $3^{10}=59\\,049$.", "CAP_ERROR",
     "Sí que hi ha un error: $3^2+3^3+3^5$ és una suma, no un producte, i la regla "
     "de sumar exponents només val per a productes de potències de la mateixa base."),
   D("L'error és que la base final hauria de ser $9$ (la suma de $3+3+3$), no $3$.",
     "BASE_ALTERADA",
     "La base no és el problema: es queda com estava, $3$. El problema és que "
     "s'ha aplicat la regla del producte a una suma.")],
  ["Comprova primer si les tres potències se sumen o es multipliquen a l'enunciat.",
   "La regla \"suma els exponents\" només val quan multipliques potències de la "
   "mateixa base. Aquí se sumen: cal calcular cada potència i sumar els resultats."],
  ["$3^2+3^3+3^5=9+27+243=279$"],
  ex_text=E41)

Q("41b", 41, "b", B3, "B",
  r"$3^2\cdot 3^3-3^5=3^{2+3}-3^5=3^5-3^5=3^0=1$",
  "L'error és l'últim pas: $3^5-3^5=0$ (és la resta d'un nombre per ell mateix), no "
  "$3^{5-5}=3^0$. La regla de restar exponents és per DIVIDIR potències de la "
  "mateixa base, no per restar-les.",
  [D("L'error és el primer pas: $3^2\\cdot 3^3$ hauria de ser $3^{2\\cdot 3}=3^6$, "
     "no $3^{2+3}=3^5$.", "EXPONENTS_MULTIPLICATS",
     "Aquest pas és correcte: en multiplicar potències de la mateixa base, els "
     "exponents se sumen. L'error és més endavant."),
   D("No hi ha cap error: el resultat és $1$.", "CAP_ERROR",
     "Sí que hi ha un error: restar una potència d'ella mateixa dóna $0$, no "
     "$3^0=1$. La regla de restar exponents és per a divisions, no per a restes."),
   D("L'error és que $3^0$ val $0$, no $1$.", "EXPONENT_ZERO",
     "$3^0$ sí que val $1$: aquesta part és certa. L'error és haver arribat fins "
     "aquí, perquè $3^5-3^5$ no es converteix en $3^0$.")],
  ["El primer pas ($3^2\\cdot 3^3=3^5$) és correcte. Mira bé el segon.",
   "$3^5-3^5$ és una resta d'un nombre per ell mateix: sempre val $0$."],
  ["$3^2\\cdot 3^3-3^5=3^5-3^5=0$"],
  ex_text=E41)

Q("41c", 41, "c", B3, "B",
  r"$4^9:4^2\cdot 4^4=4^9:4^{2+4}=4^9:4^6=4^{9-6}=4^3$",
  "L'error és el segon pas: la divisió i la multiplicació tenen la mateixa "
  "prioritat i es fan d'esquerra a dreta. $4^9:4^2\\cdot 4^4$ és "
  "$(4^9:4^2)\\cdot 4^4$, no $4^9:(4^2\\cdot 4^4)$.",
  [D("L'error és el primer pas: no es poden combinar $4^9$, $4^2$ i $4^4$ perquè "
     "hi ha una divisió pel mig.", "REGLA_NOMES_PRODUCTE",
     "Sí que es poden combinar: la divisió i la multiplicació de potències de la "
     "mateixa base també es couen amb exponents, sumant o restant. El problema és "
     "l'ordre en què s'han agrupat."),
   D("No hi ha cap error: el resultat és $4^3=64$.", "CAP_ERROR",
     "Sí que hi ha un error: s'ha agrupat $4^2\\cdot 4^4$ com si anessin junts, "
     "quan en realitat cal fer les operacions d'esquerra a dreta."),
   D("L'error és l'últim pas: $4^{9-6}$ hauria de ser $4^{9-6}=4^{15}$, no $4^3$.",
     "EXPONENTS_SUMATS_QUOCIENT",
     "$9-6=3$ és correcte: aquest pas no té error. L'error és més amunt, en com "
     "s'han agrupat les operacions.")],
  ["La divisió i la multiplicació tenen la mateixa prioritat. Com s'han "
   "d'agrupar d'esquerra a dreta?",
   "$4^9:4^2\\cdot 4^4=(4^9:4^2)\\cdot 4^4=4^7\\cdot 4^4$."],
  ["$4^9:4^2\\cdot 4^4=(4^9:4^2)\\cdot 4^4=4^{7}\\cdot 4^{4}=4^{11}$"],
  ex_text=E41)

Q("41d", 41, "d", B3, "B",
  r"$(-2)^6\cdot(-2)^3=\left[(-2)\cdot(-2)\right]^{6+3}=4^9$",
  "L'error és haver canviat la base: en multiplicar potències de la mateixa base, "
  "la base es queda igual. És $(-2)^{6+3}=(-2)^9$, no es converteix en cap altre "
  "nombre.",
  [D("L'error és l'exponent: hauria de ser $(-2)^{6\\cdot 3}$, no $(-2)^{6+3}$.",
     "POTENCIA_POTENCIA_SUMADA",
     "Sumar els exponents és correcte aquí: és un producte de potències de la "
     "mateixa base, no una potència d'una potència. L'error és a la base."),
   D("No hi ha cap error: el resultat és $4^9=262\\,144$.", "CAP_ERROR",
     "Sí que hi ha un error: la base $-2$ s'ha convertit en $4$ sense cap motiu. "
     "En multiplicar potències de la mateixa base, la base no canvia."),
   D("L'error és que l'exponent final hauria de ser positiu perquè les dues bases "
     "són negatives: $(-4)^9$.", "PARITAT_EXPONENT",
     "El problema no és el signe de la base combinada: és que no s'ha de combinar "
     "cap base. La base es queda tal com era, $-2$.")],
  ["En multiplicar potències de la mateixa base, què li passa a la base?",
   "La base es queda igual, $-2$; només se sumen els exponents."],
  ["$(-2)^6\\cdot(-2)^3=(-2)^{6+3}=(-2)^9=-512$"],
  ex_text=E41)

Q("41e", 41, "e", B3, "B",
  r"$-3^2\cdot 3^2=(-3)^{2+2}=(-3)^4=3^4$",
  "L'error és el primer pas: $-3^2$ vol dir $-(3^2)=-9$, no $(-3)^2=9$, perquè no "
  "hi ha parèntesi al voltant del $-3$. El resultat final ha de conservar el "
  "signe negatiu: $-3^4$, no $3^4$.",
  [D("L'error és l'exponent final: hauria de ser $(-3)^{2\\cdot 2}$, no "
     "$(-3)^{2+2}$.", "EXPONENTS_MULTIPLICATS",
     "Sumar els exponents és correcte quan multipliques potències de la mateixa "
     "base. L'error és més amunt, en com s'ha llegit la primera potència."),
   D("No hi ha cap error: el resultat és $3^4=81$.", "CAP_ERROR",
     "Sí que hi ha un error: $-3^2$ és $-9$, no $9$, perquè el signe menys no "
     "forma part de la base. El resultat final s'ha de quedar negatiu."),
   D("L'error és que el resultat final hauria de ser $9^4$, combinant les dues "
     "bases.", "BASE_ALTERADA",
     "La base no s'ha de combinar amb cap altre nombre: el problema és de signe, "
     "no de base.")],
  ["Sense parèntesi, el signe menys no forma part de la base: $-3^2=-(3^2)$.",
   "$-3^2\\cdot 3^2=(-9)\\cdot 9=-81$."],
  ["$-3^2\\cdot 3^2=(-9)\\cdot 9=-81=-3^4$"],
  ex_text=E41)

Q("41f", 41, "f", B3, "B",
  r"$2\cdot(-3)^2=\left[2\cdot(-3)\right]^2=(-6)^2=6^2$",
  "L'error és el segon pas: l'exponent $2$ només afecta el $(-3)$, perquè és "
  "l'únic que l'acompanyava a l'enunciat. No es pot repartir cap al $2$, que no "
  "en tenia.",
  [D("L'error és el primer pas: $(-3)^2$ hauria de ser $-9$, no $9$.",
     "PARITAT_EXPONENT",
     "$(-3)^2=9$ sí que és correcte: l'exponent $2$ és parell. L'error és a un "
     "altre pas."),
   D("No hi ha cap error: el resultat és $6^2=36$.", "CAP_ERROR",
     "Sí que hi ha un error: l'exponent de $(-3)^2$ s'ha repartit cap al $2$, que "
     "no en tenia. El $2$ i el $(-3)^2$ s'han de multiplicar tal com estan."),
   D("L'error és que el resultat final s'hauria d'escriure com $-6^2$, amb el "
     "signe negatiu fora.", "MENYS_SENSE_PARENTESI",
     "El problema no és de signe: és que l'exponent mai hauria d'haver-se "
     "repartit cap al $2$.")],
  ["L'exponent $2$ només afecta el número que té just al costat: el $(-3)$.",
   "Calcula primer $(-3)^2=9$. Després multiplica per $2$."],
  ["$2\\cdot(-3)^2=2\\cdot 9=18$"],
  ex_text=E41)

Q("41g", 41, "g", B3, "B",
  r"$8^5\cdot 8^7=(8+8)^{5+7}=16^{12}$",
  "L'error és haver canviat la base: en multiplicar potències de la mateixa base, "
  "la base es queda igual. És $8^{5+7}=8^{12}$, no es converteix en $16$.",
  [D("L'error és l'exponent: hauria de ser $8^{5\\cdot 7}$, no $8^{5+7}$.",
     "POTENCIA_POTENCIA_SUMADA",
     "Sumar els exponents és correcte aquí: és un producte de potències de la "
     "mateixa base. L'error és a la base."),
   D("No hi ha cap error: el resultat és $16^{12}$.", "CAP_ERROR",
     "Sí que hi ha un error: la base $8$ s'ha convertit en $16$ sense cap motiu. "
     "En multiplicar potències de la mateixa base, la base no canvia."),
   D("L'error és que els exponents s'haurien de restar, no sumar: $8^{5-7}$.",
     "REGLA_NOMES_QUOCIENT",
     "Sumar els exponents és correcte quan multipliques potències de la mateixa "
     "base. El problema és a la base, no als exponents.")],
  ["En multiplicar potències de la mateixa base, què li passa a la base?",
   "La base es queda igual, $8$; només se sumen els exponents."],
  ["$8^5\\cdot 8^7=8^{5+7}=8^{12}$"],
  ex_text=E41)

Q("41h", 41, "h", B3, "B",
  r"$3^1\cdot 3^0=3^{1\cdot 0}=3^0=1$",
  "L'error és el primer pas: en multiplicar potències de la mateixa base, els "
  "exponents se SUMEN, no es multipliquen. És $3^{1+0}=3^1$, no $3^{1\\cdot 0}$.",
  [D("L'error és que $3^0$ val $0$, no $1$.", "EXPONENT_ZERO",
     "$3^0=1$ sí que és correcte: aquesta part és certa. L'error és més amunt, "
     "en com s'han combinat els exponents."),
   D("No hi ha cap error: el resultat és $1$.", "CAP_ERROR",
     "Sí que hi ha un error: els exponents s'han multiplicat en lloc de sumar-se. "
     "$3^1\\cdot 3^0=3^{1+0}=3^1=3$, no $1$."),
   D("L'error és la base: hauria de quedar $9^1$, no $3^0$.", "BASE_ALTERADA",
     "La base no és el problema: es queda igual, $3$. El problema és l'operació "
     "que s'ha fet amb els exponents.")],
  ["Quan multipliques potències de la mateixa base, què els fas als exponents: "
   "sumar-los o multiplicar-los?",
   "$3^1\\cdot 3^0=3^{1+0}=3^1$."],
  ["$3^1\\cdot 3^0=3^{1+0}=3^1=3$"],
  ex_text=E41)


E42 = "Digues si cada igualtat és certa o falsa, i per què."

Q("42a", 42, "a", B3, "B",
  r"$9^{-1}=-9$",
  "Fals: $9^{-1}=\\dfrac19$, l'invers de $9$, no el seu oposat $-9$.",
  [D("Cert: un exponent negatiu fa que el resultat sigui negatiu.",
     "EXPONENT_NEGATIU_SIGNE",
     "Un exponent negatiu no fa que el resultat sigui negatiu, sinó que en fa "
     "l'invers: $9^{-1}=\\dfrac19$, un nombre positiu."),
   D("Fals: $9^{-1}=0$, perquè un exponent negatiu sempre dóna $0$.",
     "VEREDICTE_INVERTIT",
     "El veredicte (\"fals\") és correcte, però no per aquest motiu: "
     "$9^{-1}=\\dfrac19$, no $0$."),
   D("Fals: $9^{-1}=-\\dfrac19$, l'oposat de l'invers de $9$.",
     "VEREDICTE_INVERTIT",
     "El veredicte és correcte, però $9^{-1}$ és l'invers de $9$ ($\\dfrac19$), "
     "sense canviar-li el signe.")],
  ["Un exponent negatiu no fa \"negatiu\" el resultat: en fa l'invers.",
   "$9^{-1}=\\dfrac{1}{9^1}=\\dfrac19$."],
  ["$9^{-1}=\\dfrac19$, que no és $-9$: la igualtat és falsa"],
  ex_text=E42)

Q("42b", 42, "b", B3, "B",
  r"$(-2)^{-4}=2^4$",
  "Fals: $(-2)^{-4}=\\dfrac{1}{(-2)^4}=\\dfrac1{16}$, i $2^4=16$: ni el valor ni "
  "si és invers o no coincideixen.",
  [D("Cert: com que l'exponent $-4$ és parell, els dos costats donen el mateix.",
     "VEREDICTE_INVERTIT",
     "Que l'exponent sigui parell fa que $(-2)^{-4}$ sigui positiu, però continua "
     "sent l'invers de $16$ ($\\dfrac1{16}$), no $16$."),
   D("Fals: $(-2)^{-4}=-16$, i $2^4=16$; els signes són diferents.",
     "EXPONENT_NEGATIU_SIGNE",
     "El veredicte (\"fals\") és correcte, però no pel signe: $(-2)^{-4}$ és "
     "positiu, $\\dfrac1{16}$, no $-16$. El problema és que un és invers i "
     "l'altre no."),
   D("Cert: $(-2)^{-4}$ i $2^4$ tenen la mateixa base en valor absolut, i "
     "l'exponent no hi afecta.", "VEREDICTE_INVERTIT",
     "L'exponent sí que hi afecta: $-4$ fa que el resultat sigui l'invers de "
     "$16$, no $16$.")],
  ["Calcula per separat cada costat: $(-2)^{-4}$ i $2^4$.",
   "$(-2)^{-4}=\\dfrac{1}{(-2)^4}=\\dfrac1{16}$, mentre que $2^4=16$."],
  ["$(-2)^{-4}=\\dfrac1{16}$ i $2^4=16$: no són iguals, la igualtat és falsa"],
  ex_text=E42)

Q("42c", 42, "c", B3, "B",
  r"$(-3)^{-6}=3^{-6}$",
  "Cert: l'exponent $6$ és parell, així que $(-3)^{-6}=\\dfrac{1}{(-3)^6}"
  "=\\dfrac{1}{3^6}=3^{-6}$.",
  [D("Fals: $(-3)^{-6}$ és negatiu perquè la base és negativa, i $3^{-6}$ és "
     "positiu.", "PARITAT_EXPONENT",
     "$(-3)^{-6}$ no és negatiu: com que $6$ és parell, $(-3)^6$ ja és positiu, "
     "i el seu invers també ho és."),
   D("Fals: un exponent negatiu sempre canvia el signe del resultat, així que "
     "no poden ser iguals.", "EXPONENT_NEGATIU_SIGNE",
     "Un exponent negatiu no canvia el signe del resultat: en fa l'invers. Aquí "
     "els dos costats donen el mateix nombre positiu, $\\dfrac1{729}$."),
   D("Cert, però només perquè els dos costats donen $0$.", "VEREDICTE_INVERTIT",
     "El veredicte (\"cert\") és correcte, però no perquè donin $0$: tots dos "
     "costats valen $\\dfrac{1}{729}$.")],
  ["Calcula per separat cada costat, tenint en compte que $6$ és parell.",
   "$(-3)^{-6}=\\dfrac1{(-3)^6}$, i $(-3)^6=3^6$ perquè l'exponent és parell."],
  ["$(-3)^{-6}=\\dfrac1{(-3)^6}=\\dfrac1{3^6}=3^{-6}$: la igualtat és certa"],
  ex_text=E42)

Q("42d", 42, "d", B3, "B",
  r"$(-3)^{-3}=(-3)^{-2}\cdot 3^{-1}$",
  "Fals: $(-3)^{-3}=-\\dfrac1{27}$, però $(-3)^{-2}\\cdot 3^{-1}=\\dfrac19\\cdot"
  "\\dfrac13=\\dfrac1{27}$ (positiu): els signes no coincideixen perquè el segon "
  "factor de la dreta té base $3$, no $-3$.",
  [D("Cert: com que $-2$ i $-1$ sumen $-3$, la igualtat es compleix per la regla "
     "del producte de potències.", "BASES_DIFERENTS_COMBINADES",
     "La regla de sumar exponents només val si la base és la mateixa als dos "
     "factors, i aquí una és $-3$ i l'altra és $3$: no es poden combinar així."),
   D("Fals: perquè $-2$ i $-1$ no sumen $-3$.", "VEREDICTE_INVERTIT",
     "El veredicte (\"fals\") és correcte, però $-2+(-1)$ sí que fa $-3$: el "
     "problema no és aquesta suma, és que les bases dels dos factors no coincideixen."),
   D("Cert: totes dues bases són $-3$, encara que una es vegi escrita com $3$.",
     "VEREDICTE_INVERTIT",
     "Les bases no són iguals: una és $-3$ i l'altra és $3$, i això sí que "
     "importa per al signe del resultat.")],
  ["Calcula per separat cada costat: no donis per fet que les bases de la dreta "
   "són totes $-3$.",
   "$(-3)^{-3}=-\\dfrac1{27}$. $(-3)^{-2}\\cdot 3^{-1}=\\dfrac19\\cdot\\dfrac13"
   "=\\dfrac1{27}$."],
  ["$(-3)^{-3}=-\\dfrac1{27}$ i $(-3)^{-2}\\cdot 3^{-1}=\\dfrac1{27}$: els "
   "signes no coincideixen, la igualtat és falsa"],
  ex_text=E42)

Q("42e", 42, "e", B3, "B",
  r"$4^{-3}=(-4)^{-1}\cdot(-4)^4$",
  "Fals: $4^{-3}=\\dfrac1{64}$, però $(-4)^{-1}\\cdot(-4)^4=(-4)^{-1+4}=(-4)^3"
  "=-64$: ni el signe ni el valor coincideixen.",
  [D("Cert: com que $-1+4=3$ i l'enunciat també té exponent $-3$, els dos "
     "costats es couen igual.", "VEREDICTE_INVERTIT",
     "$3$ i $-3$ no són el mateix exponent: la dreta dóna $(-4)^3=-64$, i "
     "l'esquerra dóna $4^{-3}=\\dfrac1{64}$."),
   D("Fals: perquè les bases $4$ i $-4$ no es poden combinar entre elles amb la "
     "regla de les potències.", "BASES_DIFERENTS_COMBINADES",
     "El veredicte (\"fals\") és correcte, però els dos factors de la dreta "
     "comparteixen base ($-4$) i sí que es poden combinar entre ells; el "
     "problema és que el resultat no coincideix amb el de l'esquerra, que té "
     "base $4$."),
   D("Cert: totes dues expressions donen un nombre negatiu.", "VEREDICTE_INVERTIT",
     "$4^{-3}=\\dfrac1{64}$ és positiu, no negatiu: les dues expressions ni "
     "tan sols tenen el mateix signe.")],
  ["Calcula per separat cada costat.",
   "$4^{-3}=\\dfrac1{64}$. $(-4)^{-1}\\cdot(-4)^4=(-4)^{-1+4}=(-4)^3=-64$."],
  ["$4^{-3}=\\dfrac1{64}$ i $(-4)^{-1}\\cdot(-4)^4=-64$: no coincideixen, la "
   "igualtat és falsa"],
  ex_text=E42)

Q("42f", 42, "f", B3, "B",
  r"$(2^{-5})^{-1}=2^{-6}$",
  "Fals: $(2^{-5})^{-1}=2^{(-5)\\cdot(-1)}=2^5=32$, no $2^{-6}$: en una potència "
  "d'una potència els exponents es multipliquen, no se sumen.",
  [D("Cert: $(-5)+(-1)=-6$, que coincideix amb l'exponent del segon membre.",
     "POTENCIA_POTENCIA_SUMADA",
     "En una potència d'una potència els exponents es multipliquen, no se "
     "sumen: $(-5)\\cdot(-1)=5$, no $-6$."),
   D("Fals: perquè cap potència amb exponent negatiu es pot elevar a un altre "
     "exponent negatiu.", "VEREDICTE_INVERTIT",
     "El veredicte (\"fals\") és correcte, però sí que es pot elevar una "
     "potència d'exponent negatiu a un altre exponent negatiu: dóna "
     "$(2^{-5})^{-1}=2^5=32$."),
   D("Cert: els dos exponents negatius es couen i el resultat es queda "
     "negatiu.", "VEREDICTE_INVERTIT",
     "El resultat no es queda negatiu: $(2^{-5})^{-1}=2^5=32$, un nombre "
     "positiu.")],
  ["En una potència d'una potència, què es fa amb els exponents: sumar-los o "
   "multiplicar-los?",
   "$(2^{-5})^{-1}=2^{(-5)\\cdot(-1)}=2^5$."],
  ["$(2^{-5})^{-1}=2^{(-5)\\cdot(-1)}=2^5=32$, no $2^{-6}$: la igualtat és falsa"],
  ex_text=E42)


Q("43a", 43, "a", B3, "A",
  r"$(2^3)^4$",
  pot("2", 3 * 4),
  [DT(pot("2", 3 + 4), "POTENCIA_POTENCIA_SUMADA"),
   DT(pot("2", 3), "FACTOR_OBLIDAT",
      extra="Has ignorat l'exponent exterior, $4$."),
   D(tex(ev("12**2")), "BASE_EXPONENT_INTERCANVIATS",
     "Un cop simplificat a $2^{12}$, has canviat de lloc la base i l'exponent.")],
  ["Potència d'una potència: multiplica els exponents, no els sumis.",
   "$(2^3)^4=2^{3\\cdot 4}$."],
  ["$(2^3)^4=2^{3\\cdot 4}=2^{12}$"],
  ex_text="Expressa com a potència única.")

Q("43b", 43, "b", B3, "A",
  r"$\left[(-3)^3\right]^2$",
  pot("(-3)", 3 * 2),
  [DT(pot("(-3)", 3 + 2), "POTENCIA_POTENCIA_SUMADA"),
   DT(pot("(-3)", 3), "FACTOR_OBLIDAT",
      extra="Has ignorat l'exponent exterior, $2$."),
   D(r"(-3)^{9}", "POTENCIA_POTENCIA_SUMADA",
     "Has calculat l'exponent nou com $3^2=9$ en lloc de $3\\cdot 2=6$: als "
     "exponents es couen com un producte normal, $3\\cdot 2$, no com una altra potència.")],
  ["Potència d'una potència: multiplica els exponents, no els sumis.",
   "$[(-3)^3]^2=(-3)^{3\\cdot 2}$."],
  ["$[(-3)^3]^2=(-3)^{3\\cdot 2}=(-3)^{6}$"],
  ex_text="Expressa com a potència única.")

Q("43c", 43, "c", B3, "A",
  r"$\left[-6^4\right]^3$",
  r"-6^{12}",
  [D(r"6^{12}", "MENYS_SENSE_PARENTESI",
     "Sense parèntesi, el $-6^4$ de dins vol dir $-(6^4)$, no $(-6)^4$: la base és "
     "$6$, i el signe menys és apart. Com que l'exponent exterior és senar, el "
     "resultat final s'ha de quedar negatiu."),
   DT(r"-6^{7}", "POTENCIA_POTENCIA_SUMADA"),
   DT(r"-6^{4}", "FACTOR_OBLIDAT",
      extra="Has ignorat l'exponent exterior, $3$.")],
  ["$-6^4$ vol dir $-(6^4)$: la base és $6$, amb un signe menys al davant.",
   "$\\left[-(6^4)\\right]^3=-\\left[(6^4)^3\\right]=-6^{4\\cdot 3}$ (l'exponent exterior "
   "és senar, així que el signe es queda)."],
  [r"$-6^4=-(6^4)$; $\left[-(6^4)\right]^3=-\left(6^{4\cdot 3}\right)=-6^{12}$"],
  ex_text="Expressa com a potència única.")

Q("43d", 43, "d", B3, "A",
  r"$\left[\left(\dfrac{1}{3}\right)^2\right]^4$",
  pot(r"(\dfrac{1}{3})", 2 * 4),
  [DT(pot(r"(\dfrac{1}{3})", 2 + 4), "POTENCIA_POTENCIA_SUMADA"),
   DT(pot(r"(\dfrac{1}{3})", 2), "FACTOR_OBLIDAT",
      extra="Has ignorat l'exponent exterior, $4$."),
   D(r"3^{8}", "INVERTIDA",
     "Has invertit la fracció de la base: es queda $\\dfrac13$, no es converteix "
     "en $3$.")],
  ["Potència d'una potència: multiplica els exponents, no els sumis.",
   "$\\left[\\left(\\dfrac13\\right)^2\\right]^4=\\left(\\dfrac13\\right)^{2\\cdot 4}$."],
  [r"$\left[\left(\dfrac13\right)^2\right]^4=\left(\dfrac13\right)^{2\cdot 4}"
   r"=\left(\dfrac13\right)^{8}$"],
  ex_text="Expressa com a potència única.")

Q("43e", 43, "e", B3, "A",
  r"$\left[\left(-\dfrac{3}{5}\right)^3\right]^5$",
  pot(r"(-\dfrac{3}{5})", 3 * 5),
  [DT(pot(r"(-\dfrac{3}{5})", 3 + 5), "POTENCIA_POTENCIA_SUMADA"),
   DT(pot(r"(-\dfrac{3}{5})", 3), "FACTOR_OBLIDAT",
      extra="Has ignorat l'exponent exterior, $5$."),
   D(r"(\dfrac{3}{5})^{15}", "BASE_SIGNE_PERDUT",
     "El resultat ha de conservar la base tal com era, $-\\dfrac35$, no $\\dfrac35$: "
     "l'exponent final, $15$, és senar.")],
  ["Potència d'una potència: multiplica els exponents, no els sumis.",
   "$\\left[\\left(-\\dfrac35\\right)^3\\right]^5=\\left(-\\dfrac35\\right)^{3\\cdot 5}$."],
  [r"$\left[\left(-\dfrac35\right)^3\right]^5=\left(-\dfrac35\right)^{3\cdot 5}"
   r"=\left(-\dfrac35\right)^{15}$"],
  ex_text="Expressa com a potència única.")

Q("43f", 43, "f", B3, "A",
  r"$\left[-5^2\right]^4$",
  r"5^{8}",
  [D(r"-5^{8}", "PARITAT_EXPONENT",
     "$-5^2$ val $-(5^2)$, un nombre negatiu, però l'exponent exterior, $4$, és "
     "parell: el signe negatiu desapareix en elevar-lo a un exponent parell."),
   DT(r"-5^{2}", "FACTOR_OBLIDAT",
      extra="Has ignorat l'exponent exterior, $4$."),
   DT(r"-5^{6}", "POTENCIA_POTENCIA_SUMADA")],
  ["$-5^2$ vol dir $-(5^2)$, un nombre negatiu. L'exponent exterior, $4$, és "
   "parell.",
   "Un nombre negatiu elevat a un exponent parell dóna positiu: el signe "
   "desapareix."],
  [r"$-5^2=-(5^2)$, negatiu; $\left[-(5^2)\right]^4$ té exponent exterior parell, "
   r"així que el resultat és positiu: $5^{2\cdot 4}=5^{8}$"],
  ex_text="Expressa com a potència única.")


# =====================================================================
# BLOC 4 — COMBINA POTÈNCIES (exercicis 44-46)
# =====================================================================

E44 = "Calcula el valor de cada expressió."

Q("44a", 44, "a", B4, "A",
  r"$\left[(-3)^2\right]^2\cdot\left[(-3)^3\right]^3$",
  ev("((-3)**2)**2*((-3)**3)**3"),
  [DT(ev("(-3)**(2+2)*(-3)**(3+3)"), "POTENCIA_POTENCIA_SUMADA"),
   DT(ev("((-3)**3)**3"), "FACTOR_OBLIDAT",
      extra="T'has deixat pel camí el factor $\\left[(-3)^2\\right]^2$."),
   DT(ev("3**(2*2+3*3)"), "BASE_SIGNE_PERDUT")],
  ["Potència d'una potència a cada claudàtor: multiplica els exponents de cada un.",
   "$[(-3)^2]^2=(-3)^4$ i $[(-3)^3]^3=(-3)^9$. Multiplica'ls: suma els exponents, "
   "$4+9=13$, senar."],
  [r"$[(-3)^2]^2=(-3)^4$, $[(-3)^3]^3=(-3)^9$, i "
   r"$(-3)^4\cdot(-3)^9=(-3)^{13}=-1\,594\,323$"],
  ex_text=E44)

Q("44b", 44, "b", B4, "A",
  r"$\left[5^8\right]^2:\left[(-5)^4\right]^3$",
  ev("(5**8)**2/((-5)**4)**3"),
  [DT(ev("5**(8+2)/(-5)**(4+3)"), "POTENCIA_POTENCIA_SUMADA"),
   DT(ev("(5**8)**2"), "FACTOR_OBLIDAT",
      extra="T'has deixat pel camí el divisor, $\\left[(-5)^4\\right]^3$."),
   DT(ev("5**((8*2)+(4*3))"), "EXPONENTS_SUMATS_QUOCIENT")],
  ["Potència d'una potència a cada claudàtor: multiplica els exponents de cada un.",
   "$[5^8]^2=5^{16}$ i $[(-5)^4]^3=(-5)^{12}=5^{12}$ (l'exponent $12$ és parell). "
   "Divideix: resta els exponents."],
  [r"$[5^8]^2=5^{16}$, $[(-5)^4]^3=(-5)^{12}=5^{12}$, i $5^{16}:5^{12}=5^{4}=625$"],
  ex_text=E44)


E45 = "Resol."

Q("45a", 45, "a", B4, "A",
  r"$(-2)^{-4}\cdot\left[(-2)^2\right]^3$",
  ev("(-2)**-4*((-2)**2)**3"),
  [D(tex(ev("-(2**4)*((-2)**2)**3")), "EXPONENT_NEGATIU_SIGNE",
     "Has tractat $(-2)^{-4}$ com $-(2^4)=-16$, en lloc de com l'invers, "
     "$\\dfrac{1}{16}$."),
   DT(ev("((-2)**2)**3"), "FACTOR_OBLIDAT",
      extra="T'has deixat pel camí el primer factor, $(-2)^{-4}$."),
   D(tex(ev("(-2)**(-4+2+3)")), "POTENCIA_POTENCIA_SUMADA",
     "Al claudàtor has sumat els exponents $2$ i $3$ en lloc de multiplicar-los "
     "primer.")],
  ["Potència d'una potència primer: $\\left[(-2)^2\\right]^3=(-2)^{2\\cdot 3}=(-2)^6$.",
   "$(-2)^{-4}\\cdot(-2)^6=(-2)^{-4+6}=(-2)^2$."],
  [r"$\left[(-2)^2\right]^3=(-2)^6$, i $(-2)^{-4}\cdot(-2)^6=(-2)^{2}=4$"],
  ex_text=E45)

Q("45b", 45, "b", B4, "A",
  r"$3^4\cdot\left[(-3)^2\right]^{-2}$",
  ev("3**4*((-3)**2)**-2"),
  [D(tex(ev("3**4*-(((-3)**2)**2)")), "EXPONENT_NEGATIU_SIGNE",
     "Has tractat $\\left[(-3)^2\\right]^{-2}$ com l'oposat de $\\left[(-3)^2\\right]^2$, "
     "en lloc de com el seu invers."),
   D(tex(ev("3**4*(-3)**(2+-2)")), "POTENCIA_POTENCIA_SUMADA",
     "Al claudàtor has sumat els exponents $2$ i $-2$ en lloc de multiplicar-los."),
   DT(ev("((-3)**2)**-2"), "FACTOR_OBLIDAT",
      extra="T'has deixat pel camí el primer factor, $3^4$.")],
  ["Potència d'una potència primer: $\\left[(-3)^2\\right]^{-2}=(-3)^{2\\cdot(-2)}=(-3)^{-4}$.",
   "$3^4\\cdot(-3)^{-4}$: com que $(-3)^{-4}=3^{-4}$ (exponent $-4$, parell), "
   "$3^4\\cdot 3^{-4}=3^0$."],
  [r"$\left[(-3)^2\right]^{-2}=(-3)^{-4}=3^{-4}$, i $3^4\cdot 3^{-4}=3^{0}=1$"],
  ex_text=E45)

Q("45c", 45, "c", B4, "A",
  r"$(-8)^3\cdot 2^{-4}$",
  ev("(-8)**3*2**-4"),
  [D(tex(ev("-(2**4)*(-8)**3")), "EXPONENT_NEGATIU_SIGNE",
     "Has tractat $2^{-4}$ com $-(2^4)=-16$, en lloc de com l'invers, "
     "$\\dfrac{1}{16}$."),
   D(tex(ev("512*2**-4")), "PARITAT_EXPONENT",
     "$(-8)^3$ es queda negatiu: l'exponent $3$ és senar, així que el signe no "
     "desapareix."),
   DT(ev("(-8*2)**(3-4)"), "BASES_DIFERENTS_COMBINADES")],
  ["$-8$ i $2$ són bases diferents: no es poden combinar amb la regla de les "
   "potències. Calcula cada potència per separat.",
   "$(-8)^3=-512$ (l'exponent $3$ és senar). $2^{-4}=\\dfrac1{16}$."],
  ["$(-8)^3=-512$ i $2^{-4}=\\dfrac1{16}$; $-512\\cdot\\dfrac1{16}=-32$"],
  ex_text=E45)

Q("45d", 45, "d", B4, "A",
  r"$(-2)^{-3}\cdot 2^{-3}$",
  ev("(-2)**-3*2**-3"),
  [D(tex(ev("-((-2)**3)*-(2**3)")), "EXPONENT_NEGATIU_SIGNE",
     "Has tractat els exponents negatius com un canvi de signe del valor, en "
     "lloc de com l'invers."),
   DT(ev("((-2)*2)**(-3-3)"), "BASES_DIFERENTS_COMBINADES"),
   DT(ev("(-2)**-3"), "FACTOR_OBLIDAT",
      extra="T'has deixat pel camí el segon factor, $2^{-3}$.")],
  ["$-2$ i $2$ són bases diferents: calcula cada potència per separat.",
   "$(-2)^{-3}=-\\dfrac18$ (l'exponent $3$ de dins és senar). $2^{-3}=\\dfrac18$."],
  ["$(-2)^{-3}=-\\dfrac18$ i $2^{-3}=\\dfrac18$; $-\\dfrac18\\cdot\\dfrac18=-\\dfrac1{64}$"],
  ex_text=E45)

Q("45e", 45, "e", B4, "A",
  r"$-2^{-3}\cdot\left(-2^{-4}\right)$",
  ev("-(2**-3)*-(2**-4)"),
  [D(tex(ev("-(2**-3)*(-2)**-4")), "MENYS_SENSE_PARENTESI",
     "Al segon factor, $-2^{-4}$ vol dir $-(2^{-4})$: la base és $2$, i el signe "
     "menys és apart, no forma part de la base."),
   D(tex(ev("-(2**3)*-(2**-4)")), "EXPONENT_NEGATIU_SIGNE",
     "Has tractat $2^{-3}$ com $2^3$, oblidant que un exponent negatiu vol dir "
     "l'invers."),
   DT(ev("-(2**-3)"), "FACTOR_OBLIDAT",
      extra="T'has deixat pel camí el segon factor, $-2^{-4}$.")],
  ["$-2^{-3}$ i $-2^{-4}$ volen dir $-(2^{-3})$ i $-(2^{-4})$: la base és $2$ als "
   "dos, amb un signe menys apart.",
   "$-(2^{-3})=-\\dfrac18$ i $-(2^{-4})=-\\dfrac1{16}$. El producte de dos "
   "negatius és positiu."],
  [r"$-2^{-3}=-\dfrac18$ i $-2^{-4}=-\dfrac1{16}$; "
   r"$\left(-\dfrac18\right)\cdot\left(-\dfrac1{16}\right)=\dfrac1{128}$"],
  ex_text=E45)

Q("45f", 45, "f", B4, "A",
  r"$\left(-2^6\right)\cdot\left(-2^{-6}\right)$",
  ev("-(2**6)*-(2**-6)"),
  [D(tex(ev("(-2)**6*-(2**-6)")), "MENYS_SENSE_PARENTESI",
     "Al primer factor, $-2^6$ vol dir $-(2^6)$: la base és $2$, i el signe "
     "menys és apart, no forma part de la base."),
   D(tex(ev("-(2**6)*-(2**6)")), "EXPONENT_NEGATIU_SIGNE",
     "Has tractat $2^{-6}$ com $2^6$, oblidant que un exponent negatiu vol dir "
     "l'invers."),
   DT(ev("-(2**6)"), "FACTOR_OBLIDAT",
      extra="T'has deixat pel camí el segon factor, $-2^{-6}$.")],
  ["$-2^6$ i $-2^{-6}$ volen dir $-(2^6)$ i $-(2^{-6})$: la base és $2$ als dos.",
   "$-(2^6)=-64$ i $-(2^{-6})=-\\dfrac1{64}$. El producte de dos negatius és "
   "positiu."],
  [r"$-2^6=-64$ i $-2^{-6}=-\dfrac1{64}$; $(-64)\cdot\left(-\dfrac1{64}\right)=1$"],
  ex_text=E45)

Q("45g", 45, "g", B4, "A",
  r"$(-3)^4\cdot\left(-3^4\right)$",
  ev("(-3)**4*-(3**4)"),
  [D(tex(ev("(-3)**4*(-3)**4")), "MENYS_SENSE_PARENTESI",
     "Al segon factor, $-3^4$ vol dir $-(3^4)$: la base és $3$, i el signe "
     "menys és apart. No és el mateix que $(-3)^4$."),
   DT(ev("-(3**4)"), "FACTOR_OBLIDAT",
      extra="T'has deixat pel camí el primer factor, $(-3)^4$."),
   DT(ev("(-3)**4"), "FACTOR_OBLIDAT",
      extra="T'has deixat pel camí el segon factor, $-3^4$.")],
  ["$(-3)^4$ té la base $-3$ (amb parèntesi); $-3^4$ vol dir $-(3^4)$, base $3$ "
   "amb un signe menys apart.",
   "$(-3)^4=81$ (positiu, exponent parell). $-3^4=-81$ (negatiu)."],
  ["$(-3)^4=81$ i $-3^4=-81$; $81\\cdot(-81)=-6561$"],
  ex_text=E45)

Q("45h", 45, "h", B4, "A",
  r"$4^{-3}\cdot 2^{-2}$",
  ev("4**-3*2**-2"),
  [D(tex(ev("-(4**3)*-(2**2)")), "EXPONENT_NEGATIU_SIGNE",
     "Has tractat els exponents negatius com un canvi de signe del valor, en "
     "lloc de com l'invers."),
   DT(ev("(4*2)**(-3-2)"), "BASES_DIFERENTS_COMBINADES"),
   DT(ev("4**-3"), "FACTOR_OBLIDAT",
      extra="T'has deixat pel camí el segon factor, $2^{-2}$.")],
  ["$4$ i $2$ són bases diferents: calcula cada potència per separat.",
   "$4^{-3}=\\dfrac1{64}$. $2^{-2}=\\dfrac14$."],
  ["$4^{-3}=\\dfrac1{64}$ i $2^{-2}=\\dfrac14$; $\\dfrac1{64}\\cdot\\dfrac14=\\dfrac1{256}$"],
  ex_text=E45)


E46 = "Completa les igualtats."

Q("46a", 46, "a", B4, "A",
  r"$\left[(-5)^3\right]^{\square}:(-5)^7=(-5)^5$",
  4,
  [D("9", "POTENCIA_POTENCIA_SUMADA",
     "Has plantejat l'exponent del claudàtor com $3+\\square$ en lloc de "
     "$3\\cdot\\square$: en una potència d'una potència, els exponents es "
     "multipliquen."),
   D(tex(ev("5/3")), "FACTOR_OBLIDAT",
     "Has plantejat $3\\square=5$, oblidant restar-hi el $7$ del divisor."),
   D(tex(ev("2/3")), "ORDRE_RESTA",
     "Has plantejat l'equació a l'inrevés: és $3\\square-7=5$, no $7-5=3\\square$.")],
  ["Potència d'una potència: l'exponent del claudàtor és $3\\cdot\\square$. "
   "Planteja l'equació dels exponents: $3\\square-7=5$.",
   "$3\\square=5+7=12$. Aïlla $\\square$: $\\square=12:3$."],
  ["$3\\square-7=5\\Rightarrow 3\\square=12\\Rightarrow \\square=4$"],
  ex_text=E46)

Q("46b", 46, "b", B4, "A",
  r"$(\square^2)^5\cdot\square^4=(-3)^{14}$",
  -3,
  [D("3", "PARITAT_EXPONENT",
     "L'exponent final, $14$, és parell, però això no vol dir que la base "
     "hagi de ser positiva: la base ha de coincidir amb la del segon membre, "
     "$-3$."),
   D("-14", "BASE_EXPONENT_INTERCANVIATS",
     "Has confós l'exponent final, $14$, amb la base que falta."),
   D("14", "BASE_EXPONENT_INTERCANVIATS",
     "Has confós l'exponent final, $14$, amb la base que falta.")],
  ["$(\\square^2)^5\\cdot\\square^4=\\square^{10}\\cdot\\square^4=\\square^{14}$.",
   "$\\square^{14}=(-3)^{14}$: la base que falta és $-3$."],
  ["$(\\square^2)^5\\cdot\\square^4=\\square^{10+4}=\\square^{14}=(-3)^{14}\\Rightarrow"
   "\\square=-3$"],
  ex_text=E46,
  nota="Numèricament, $3^{14}=(-3)^{14}$ també compliria la igualtat (l'exponent "
       "$14$ és parell). Interpretem que l'exercici demana identificar la base "
       "que apareix al segon membre, $-3$, no totes les solucions numèriques "
       "possibles.")

Q("46c", 46, "c", B4, "A",
  r"$\left(7^3\right)^5:7^{\square}=1$",
  15,
  [DT(0, "EXPONENT_ZERO",
      extra="Que el resultat sigui $1$ no vol dir que $\\square$ hagi de ser $0$: "
            "cal resoldre l'equació dels exponents."),
   D("3", "FACTOR_OBLIDAT",
     "Has ignorat l'exponent exterior del claudàtor, $5$: $(7^3)^5=7^{15}$, no "
     "$7^3$."),
   D("8", "POTENCIA_POTENCIA_SUMADA",
     "Has calculat l'exponent del claudàtor com $3+5=8$ en lloc de $3\\cdot 5=15$.")],
  ["Potència d'una potència: $(7^3)^5=7^{15}$.",
   "$7^{15}:7^{\\square}=7^0=1$ (perquè és $1$). Planteja $15-\\square=0$."],
  ["$(7^3)^5=7^{15}$; $15-\\square=0\\Rightarrow \\square=15$"],
  ex_text=E46)

Q("46d", 46, "d", B4, "A",
  r"$11^9\cdot\left(11^2\right)^3=11^{\square}$",
  15,
  [D("14", "POTENCIA_POTENCIA_SUMADA",
     "Has calculat l'exponent del claudàtor com $2+3=5$ en lloc de $2\\cdot 3=6$."),
   D("54", "EXPONENTS_MULTIPLICATS",
     "Has multiplicat $9$ pels $6$ del claudàtor en lloc de sumar-los."),
   D("6", "FACTOR_OBLIDAT",
     "T'has deixat pel camí el primer factor, $11^9$.")],
  ["Potència d'una potència primer: $(11^2)^3=11^{2\\cdot 3}=11^6$.",
   "$11^9\\cdot 11^6=11^{9+6}$."],
  ["$(11^2)^3=11^6$; $11^9\\cdot 11^6=11^{9+6}=11^{15}\\Rightarrow \\square=15$"],
  ex_text=E46)
