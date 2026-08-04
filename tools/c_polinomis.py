# -*- coding: utf-8 -*-
"""c_polinomis.py — Full 4: Polinomis.

Genera els ítems dels exercicis 62-74, que corresponen a `im4.tex` del
repositori LaTeX font. Organitzats en 4 blocs:
  operacions   (62-64)  suma, resta i producte de polinomis
  divisio      (65-69)  divisió de polinomis i regla de Ruffini
  notables     (70-72)  igualtats notables (completar i factoritzar)
  factor_comu  (73-74)  factor comú i simplificació combinada

Cap resposta s'escriu a mà: cada polinomi resultant es calcula amb SymPy
(Poly/expand/factor) i es renderitza a LaTeX amb el helper propi
poli_tex(), en l'estil del projecte (sense espais sobrers, un terme
independent sempre amb signe explícit).

Recompte: 56 ítems bruts, 59 finals. L'exercici 69 (quatre taules de
Ruffini a completar, a-d) no porta \\begin{apartats} al fitxer font, així
que el recompte automàtic el veu com una sola pregunta; pedagògicament
són quatre activitats independents i es reformulen aquí com a 4 ítems
(69a-69d). És el mateix criteri que a l'exercici 59 del Full 3.
"""
from sympy import symbols, Poly, expand, factor, sqrt
from lib import Q, D, DT, ev, tex

B1 = "operacions"
B2 = "divisio"
B3 = "notables"
B4 = "factor_comu"

x = symbols("x")


def poli_tex_raw(expr):
    """LaTeX d'un polinomi en x, SENSE embolcallar amb $...$ (per
    incrustar dins d'una cadena LaTeX més gran ja delimitada). Sense
    espais sobrers, signe sempre explícit entre termes, coeficient 1
    implícit. Admet coeficients fraccionaris (\\dfrac)."""
    from fractions import Fraction as F
    p = Poly(expr, x)
    coefs = p.all_coeffs()
    n = len(coefs) - 1
    parts = []
    for i, c in enumerate(coefs):
        if c == 0:
            continue
        grau = n - i
        c = F(int(c.p), int(c.q)) if hasattr(c, "p") else F(c)
        signe = "-" if c < 0 else ("+" if parts else "")
        ac = abs(c)
        ac_str = str(ac.numerator) if ac.denominator == 1 else \
            (r"\dfrac{%d}{%d}" % (ac.numerator, ac.denominator))
        if grau == 0:
            terme = ac_str
        elif grau == 1:
            terme = ("" if ac == 1 else ac_str) + "x"
        else:
            terme = ("" if ac == 1 else ac_str) + ("x^{%d}" % grau)
        parts.append(signe + terme)
    return "".join(parts) if parts else "0"


def poli_tex(expr):
    """LaTeX d'un polinomi en x, embolcallat amb $...$: per fer-lo
    servir directament com a opció (correcta/distractor), ja que
    mathify() (a build.py) no reconeix expressions amb lletres com a
    "matemàtica pura" i no les delimitaria soles."""
    return "$%s$" % poli_tex_raw(expr)


def pol(*coefs_desc):
    """Construeix una expressió SymPy de x a partir dels coeficients de
    major a menor grau: pol(2,-3,0,1) -> 2x^3-3x^2+1."""
    n = len(coefs_desc) - 1
    return sum(c * x ** (n - i) for i, c in enumerate(coefs_desc))


# =====================================================================
# BLOC 1 — OPERACIONS AMB POLINOMIS (exercicis 62-64)
# =====================================================================

P62 = pol(2, -3, 7, -2, 3, -6)   # P(x) = 2x^5-3x^4+7x^3-2x^2+3x-6
Q62 = pol(3, -2, 5, -7, -1)      # Q(x) = 3x^4-2x^3+5x^2-7x-1
R62 = pol(3, -1, 1)              # R(x) = 3x^2-x+1
S62 = pol(2, 3)                  # S(x) = 2x+3

E62 = (r"Donats els polinomis $P(x)=2x^5-3x^4+7x^3-2x^2+3x-6$, "
       r"$Q(x)=3x^4-2x^3+5x^2-7x-1$, $R(x)=3x^2-x+1$ i $S(x)=2x+3$, calcula.")

Q("62a", 62, "a", B1, "A",
  r"$P(x)+Q(x)+R(x)+S(x)$",
  poli_tex(expand(P62 + Q62 + R62 + S62)),
  [D(poli_tex(expand(P62 - Q62 + R62 + S62)), "SIGNE_TERME_INDEPENDENT",
     "Has restat $Q(x)$ en lloc de sumar-lo: revisa l'enunciat, els quatre "
     "polinomis se sumen."),
   D(poli_tex(expand(P62 + Q62 + R62 - S62)), "TERME_OBLIDAT_OPERACIO",
     "Has restat $S(x)$ en lloc de sumar-lo."),
   D(poli_tex(expand(P62 + Q62 - R62 + S62)), "TERME_OBLIDAT_OPERACIO",
     "Has restat $R(x)$ en lloc de sumar-lo.")],
  ["Suma els quatre polinomis grau a grau: primer els termes de $x^5$, "
   "després els de $x^4$, i així successivament.",
   "Vigila els polinomis que no tenen tots els graus: $R(x)$ no té terme en "
   "$x^5$ ni $x^4$ ni $x^3$, i $S(x)$ només té fins a grau $1$."],
  [r"$P(x)+Q(x)+R(x)+S(x)=%s$" % poli_tex_raw(expand(P62 + Q62 + R62 + S62))],
  ex_text=E62)

Q("62b", 62, "b", B1, "A",
  r"$P(x)-R(x)+S(x)-Q(x)$",
  poli_tex(expand(P62 - R62 + S62 - Q62)),
  [D(poli_tex(expand(P62 - R62 + S62 + Q62)), "PARENTESI_NO_DISTRIBUIT_POLI",
     "Has sumat $Q(x)$ en lloc de restar-lo: revisa l'últim signe de "
     "l'enunciat."),
   D(poli_tex(expand(P62 + R62 + S62 - Q62)), "PARENTESI_NO_DISTRIBUIT_POLI",
     "Has sumat $R(x)$ en lloc de restar-lo."),
   D(poli_tex(expand(P62 - R62 - S62 - Q62)), "TERME_OBLIDAT_OPERACIO",
     "Has restat $S(x)$ en lloc de sumar-lo.")],
  ["Vigila l'ordre dels signes: $P(x)$ i $S(x)$ sumen, $R(x)$ i $Q(x)$ resten.",
   "Resta $R(x)$ de $P(x)$ primer, suma-hi $S(x)$, i finalment resta'n $Q(x)$."],
  [r"$P(x)-R(x)+S(x)-Q(x)=%s$" % poli_tex_raw(expand(P62 - R62 + S62 - Q62))],
  ex_text=E62)

Q("62c", 62, "c", B1, "A",
  r"$[P(x)+Q(x)]-[R(x)+Q(x)]$",
  poli_tex(expand((P62 + Q62) - (R62 + Q62))),
  [D(poli_tex(expand((P62 + Q62) + (R62 + Q62))), "PARENTESI_NO_DISTRIBUIT_POLI",
     "Has sumat els dos claudàtors en lloc de restar-los."),
   D(poli_tex(expand(P62 - R62 - Q62 - Q62)), "PARENTESI_NO_DISTRIBUIT_POLI",
     "En restar el segon claudàtor, has canviat el signe només d'un dels "
     "dos termes: $-[R(x)+Q(x)]=-R(x)-Q(x)$, els dos amb signe menys."),
   D(poli_tex(expand((P62 + Q62) - (R62 - Q62))), "GRAUS_MAL_AGRUPATS",
     "Al segon claudàtor hi ha $R(x)+Q(x)$, no $R(x)-Q(x)$: revisa "
     "l'enunciat.")],
  ["El $Q(x)$ apareix als dos claudàtors: en restar-los, es cancel·la. "
   "El resultat és, en realitat, $P(x)-R(x)$.",
   "$[P(x)+Q(x)]-[R(x)+Q(x)]=P(x)+Q(x)-R(x)-Q(x)=P(x)-R(x)$."],
  [r"$[P(x)+Q(x)]-[R(x)+Q(x)]=P(x)-R(x)=%s$"
   % poli_tex_raw(expand((P62 + Q62) - (R62 + Q62)))],
  ex_text=E62,
  nota="Aquest resultat coincideix amb el de l'apartat d) — no és una "
       "casualitat: en tots dos casos el $Q(x)$ es cancel·la i queda "
       "$P(x)-R(x)$. És intencionat: conviden a adonar-se que expressions "
       "amb aspecte diferent poden donar el mateix resultat.")

Q("62d", 62, "d", B1, "A",
  r"$[P(x)-Q(x)]-[R(x)-Q(x)]$",
  poli_tex(expand((P62 - Q62) - (R62 - Q62))),
  [D(poli_tex(expand((P62 - Q62) + (R62 - Q62))), "PARENTESI_NO_DISTRIBUIT_POLI",
     "Has sumat els dos claudàtors en lloc de restar-los."),
   D(poli_tex(expand(P62 - Q62 - R62 - Q62)), "PARENTESI_NO_DISTRIBUIT_POLI",
     "En restar el segon claudàtor, no has canviat el signe del $-Q(x)$ de "
     "dins: $-[R(x)-Q(x)]=-R(x)+Q(x)$."),
   D(poli_tex(expand(P62 - Q62 - R62)), "TERME_OBLIDAT_OPERACIO",
     "T'has deixat pel camí el $+Q(x)$ final: el segon claudàtor és "
     "$-[R(x)-Q(x)]=-R(x)+Q(x)$, no només $-R(x)$.")],
  ["El $Q(x)$ apareix (amb el mateix signe) als dos claudàtors: en "
   "restar-los, es cancel·la igualment.",
   "$[P(x)-Q(x)]-[R(x)-Q(x)]=P(x)-Q(x)-R(x)+Q(x)=P(x)-R(x)$."],
  [r"$[P(x)-Q(x)]-[R(x)-Q(x)]=P(x)-R(x)=%s$"
   % poli_tex_raw(expand((P62 - Q62) - (R62 - Q62)))],
  ex_text=E62)


P63 = pol(1, 2, -1)  # P(x) = x^2+2x-1

E63 = (r"Troba quin és el polinomi $Q(x)$ que s'ha de sumar a "
       r"$P(x)=x^2+2x-1$ per obtenir com a resultat $R(x)$.")


def item63(letra, R, enunciat_r):
    """Genera l'ítem 63<letra>: donat R(x), troba Q(x)=R(x)-P(x)."""
    correcta = expand(R - P63)
    return Q("63%s" % letra, 63, letra, B1, "A",
      r"$R(x)=%s$" % enunciat_r,
      poli_tex(correcta),
      [D(poli_tex(expand(R + P63)), "PARENTESI_NO_DISTRIBUIT_POLI",
         "Has sumat $P(x)$ en lloc de restar-lo: si $P(x)+Q(x)=R(x)$, "
         "aleshores $Q(x)=R(x)-P(x)$."),
       D(poli_tex(expand(P63 - R)), "ORDRE_RESTA",
         "Has restat en l'ordre equivocat: és $R(x)-P(x)$, no $P(x)-R(x)$."),
       D(poli_tex(expand(R - pol(1, 2, 1))), "SIGNE_TERME_INDEPENDENT",
         "Has canviat el signe del terme independent de $P(x)$: és $-1$, "
         "no $+1$.")],
      ["Si $P(x)+Q(x)=R(x)$, aïllant $Q(x)$ queda $Q(x)=R(x)-P(x)$.",
       "Resta $P(x)=x^2+2x-1$ de $R(x)$, terme a terme."],
      [r"$Q(x)=R(x)-P(x)=%s$" % poli_tex_raw(correcta)],
      ex_text=E63)


item63("a", pol(0, 1, -1), "x-1")
item63("b", pol(2, -1, -6), "2x^2-x-6")
item63("c", pol(5, -1, 1), "5x^2-x+1")
item63("d", pol(-7, -3, 0), "-7x^2-3x")
item63("e", pol(1, 0, -1, 0), "x^3-x")
item63("f", pol(1, -1, 0, 0), "x^3-x^2")


E64 = (r"Donats els polinomis $P(x)=2x^5-3x^4+7x^3-2x^2+3x-6$, "
       r"$Q(x)=3x^4-2x^3+5x^2-7x-1$, $R(x)=3x^2-x+1$ i $S(x)=2x+3$, calcula.")


def item64(letra, dins, ex_txt, dins_txt, correcta_extra_err=None):
    """Genera l'ítem 64<letra>: [dins] * S(x), amb distractors de
    distribució incompleta (només pel terme 2x, o només pel terme 3)."""
    correcta = expand(dins * S62)
    nomes_2x = expand(dins * 2 * x)
    nomes_3 = expand(dins * 3)
    return Q("64%s" % letra, 64, letra, B1, "A",
      ex_txt,
      poli_tex(correcta),
      [D(poli_tex(nomes_2x), "DISTRIBUCIO_INCOMPLETA",
         "Només has multiplicat pel terme $2x$ de $S(x)$: cal multiplicar "
         "també pel terme $3$."),
       D(poli_tex(nomes_3), "DISTRIBUCIO_INCOMPLETA",
         "Només has multiplicat pel terme $3$ de $S(x)$: cal multiplicar "
         "també pel terme $2x$."),
       D(poli_tex(expand(-dins * S62)), "SIGNE_TERME_INDEPENDENT",
         "El resultat té tots els signes canviats: revisa els signes de "
         "%s abans de multiplicar." % dins_txt)],
      ["Multiplica cada terme de %s per CADA terme de $S(x)=2x+3$: pel "
       "$2x$ i pel $3$." % dins_txt,
       "Un cop distribuït, agrupa els termes del mateix grau i suma'ls."],
      [r"$%s\cdot S(x)=%s$" % (dins_txt, poli_tex_raw(correcta))],
      ex_text=E64)


item64("a", P62 - Q62, r"$[P(x)-Q(x)]\cdot S(x)$", "$[P(x)-Q(x)]$")
item64("b", R62 - Q62, r"$[R(x)-Q(x)]\cdot S(x)$", "$[R(x)-Q(x)]$")
item64("c", P62 + Q62 + R62, r"$[P(x)+Q(x)+R(x)]\cdot S(x)$",
       "$[P(x)+Q(x)+R(x)]$")
item64("d", P62 + Q62 - R62, r"$[P(x)+Q(x)-R(x)]\cdot S(x)$",
       "$[P(x)+Q(x)-R(x)]$")


# =====================================================================
# BLOC 2 — DIVISIÓ DE POLINOMIS I REGLA DE RUFFINI (exercicis 65-69)
# =====================================================================

from sympy import div


def r_tex_raw(r):
    """LaTeX (sense $...$) d'un residu: constant o polinomi de grau
    >=1 (divisor no mònic)."""
    r = expand(r)
    if r.is_number:
        return tex(int(r)) if r == int(r) else tex(r)
    return poli_tex_raw(r)


def qr_tex(q, r):
    """LaTeX '$\\text{quocient: ...; residu: ...}$' per a una divisió
    de polinomis, com a opció completa (correcta/distractor)."""
    return r"$\text{quocient: }%s\text{; residu: }%s$" % (
        poli_tex_raw(q), r_tex_raw(r))


E65 = "Divideix."

D65a = pol(7, 4, 3, -5, 2, -1)
d65a = pol(1, 1, 0)
q65a, r65a = div(D65a, d65a, x)

Q("65a", 65, "a", B2, "A",
  r"$(7x^5+4x^4+3x^3-5x^2+2x-1):(x^2+x)$",
  qr_tex(q65a, r65a),
  [D(qr_tex(q65a, -r65a), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "El residu té el signe canviat: revisa l'últim pas de la divisió."),
   D(qr_tex(expand(q65a + 1), r65a), "TERME_OBLIDAT_OPERACIO",
     "El quocient no és correcte: revisa el terme independent del "
     "quocient, sobra un $+1$."),
   D(qr_tex(expand(q65a - x), r65a), "GRAUS_MAL_AGRUPATS",
     "El quocient no és correcte: revisa el terme de grau $1$.")],
  ["Divideix pas a pas: el primer terme del quocient surt de dividir "
   "$7x^5$ entre $x^2$.",
   "Continua restant i baixant termes fins que el residu tingui grau "
   "menor que el divisor (grau $2$)."],
  [r"Quocient $%s$ i residu $%s$" % (poli_tex_raw(q65a), poli_tex_raw(r65a))],
  ex_text=E65)

D65b = pol(1, -2, 1, -1, 3)
d65b = pol(1, 1, 1)
q65b, r65b = div(D65b, d65b, x)

Q("65b", 65, "b", B2, "A",
  r"$(x^4-2x^3+x^2-x+3):(x^2+x+1)$",
  qr_tex(q65b, r65b),
  [D(qr_tex(q65b, -r65b), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "El residu té el signe canviat: revisa l'últim pas de la divisió."),
   D(qr_tex(expand(q65b + pol(0, 1, 0)), r65b), "TERME_OBLIDAT_OPERACIO",
     "El quocient no és correcte: revisa el terme del mig."),
   D(qr_tex(q65b, 0), "RUFFINI_RESIDU_COM_QUOCIENT",
     "El residu no és $0$: aquesta divisió no és exacta.")],
  ["Divideix pas a pas: el primer terme del quocient surt de dividir "
   "$x^4$ entre $x^2$.",
   "Continua fins que el residu tingui grau menor que el divisor "
   "(grau $2$)."],
  [r"Quocient $%s$ i residu $%s$" % (poli_tex_raw(q65b), poli_tex_raw(r65b))],
  ex_text=E65)


E66 = "Calcula, aplicant la regla de Ruffini."


def divisor_tex(arrel):
    """LaTeX net del binomi divisor x-arrel: evita el doble signe quan
    arrel és negativa (x-(-2) es mostra com x+2, no x--2)."""
    if arrel >= 0:
        return "x-%d" % arrel if arrel != 0 else "x"
    return "x+%d" % (-arrel)


def item66(letra, coefs, arrel, ex_txt):
    """Genera l'ítem 66<letra>: (dividend):(x-arrel) per Ruffini.
    coefs són els coeficients del dividend de major a menor grau, ja
    reordenats."""
    dividend = pol(*coefs)
    divisor = pol(1, -arrel)
    q, r = div(dividend, divisor, x)
    correcta = qr_tex(q, r)
    dv_txt = divisor_tex(arrel)
    # Distractor 1: signe de l'arrel invertit (baixar multiplicant per
    # -arrel en lloc d'arrel)
    q_mal, r_mal = div(dividend, pol(1, arrel), x)
    d1 = qr_tex(q_mal, r_mal)
    # Distractor 2: residu amb signe canviat
    d2 = qr_tex(q, -r)
    # Distractor 3: quocient amb un grau de més (no s'ha avançat prou,
    # queda un terme de més barrejat)
    d3 = qr_tex(expand(q + x ** (len(coefs) - 2)), r)
    return Q("66%s" % letra, 66, letra, B2, "A",
      ex_txt,
      correcta,
      [D(d1, "RUFFINI_SIGNE_ARREL",
         "Si el divisor és $%s$, l'arrel amb què es multiplica a "
         "Ruffini és $%d$, no $%d$." % (dv_txt, arrel, -arrel)),
       D(d2, "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
         "El residu té el signe canviat: revisa l'última suma de la "
         "taula."),
       D(d3, "RUFFINI_QUOCIENT_GRAU",
         "El quocient té un grau de més: en dividir per $%s$ (grau "
         "$1$), el quocient ha de tenir un grau menys que el dividend."
         % dv_txt)],
      ["Escriu els coeficients del dividend (amb un $0$ als graus que no "
       "hi surten) i aplica Ruffini amb l'arrel $%d$." % arrel,
       "Baixa el primer coeficient, multiplica'l per $%d$ i suma'l al "
       "següent; repeteix fins al final. L'últim número és el residu."
       % arrel],
      [r"Quocient $%s$ i residu $%s$" % (poli_tex_raw(q), r_tex_raw(r))],
      ex_text=E66)


item66("a", [1, -1, -1, 1, 3, -7], 2,
       r"$(x^5-x^3+x^2-x^4+3x-7):(x-2)$")
item66("b", [1, 0, 2, -1, -3], -1,
       r"$(x^4+2x^2-x-3):(x+1)$")
item66("c", [2, -1, 0, 1, 3], 3,
       r"$(2x^4-x^3+x+3):(x-3)$")
item66("d", [1, 1, -8, -7], -2,
       r"$(x^3-8x+x^2-7):(x+2)$")
item66("e", [1, -4, 6, -9], -4,
       r"$(x^3-4x^2+6x-9):(x+4)$")


E67 = "Fes les divisions següents mitjançant la regla de Ruffini."

# 67a-c: divisor de la forma x-arrel (mateix patró que l'exercici 66)
item67_ab = item66  # mateixa lògica, reutilitzem el helper (canviant ex)


def item67_simple(letra, coefs, arrel, ex_txt):
    dividend = pol(*coefs)
    divisor = pol(1, -arrel)
    q, r = div(dividend, divisor, x)
    correcta = qr_tex(q, r)
    q_mal, r_mal = div(dividend, pol(1, arrel), x)
    d1 = qr_tex(q_mal, r_mal)
    # Si el residu és 0, canviar-li el signe no dona un distractor
    # diferent: fem servir residu +1 (error d'arrossegar malament l'últim
    # pas) en lloc de canviar-ne el signe.
    d2 = qr_tex(q, -r) if r != 0 else qr_tex(q, r + 1)
    err2 = "DIVISIO_QUOCIENT_RESIDU_CANVIATS" if r != 0 else "RUFFINI_PAS_MAL"
    fb2 = ("El residu té el signe canviat: revisa l'última suma de la "
           "taula.") if r != 0 else (
           "L'última suma de la taula no és correcta: revisa el darrer "
           "pas de Ruffini.")
    d3 = qr_tex(expand(q + x ** (len(coefs) - 2)), r)
    return Q("67%s" % letra, 67, letra, B2, "A",
      ex_txt,
      correcta,
      [D(d1, "RUFFINI_SIGNE_ARREL",
         "Si el divisor és $x-(%d)$, l'arrel amb què es multiplica a "
         "Ruffini és $%d$, no $%d$." % (arrel, arrel, -arrel)),
       D(d2, err2, fb2),
       D(d3, "RUFFINI_QUOCIENT_GRAU",
         "El quocient té un grau de més: en dividir per un binomi de "
         "grau $1$, el quocient ha de tenir un grau menys que el "
         "dividend.")],
      ["Escriu primer el dividend ordenat de grau més gran a més petit, "
       "amb un $0$ als graus que no hi surten.",
       "Aplica Ruffini amb l'arrel $%d$: baixa, multiplica, suma, i "
       "repeteix." % arrel],
      [r"Quocient $%s$ i residu $%s$" % (poli_tex_raw(q), r_tex_raw(r))],
      ex_text=E67)


item67_simple("a", [4, 0, 1, 0, -2, 0, 0, 0], -2,
              r"$(4x^7-2x^3+x^5):(x+2)$")
item67_simple("b", [-1, 0, 0, 0, 0, 1], 1,
              r"$(1-x^5):(x-1)$")
item67_simple("c", [6, -1, 0, 0, 2, 3, 0], -1,
              r"$(3x+2x^2-x^5+6x^6):(x+1)$")

# 67d: divisor 3-x, cal reescriure'l com -(x-3) abans d'aplicar Ruffini
D67d = pol(-1, 0, 9)
q67d, r67d = div(D67d, pol(-1, 3), x)

Q("67d", 67, "d", B2, "A",
  r"$(9-x^2):(3-x)$",
  qr_tex(q67d, r67d),
  [D(qr_tex(-q67d, r67d), "FACTOR_COMU_SIGNE",
     "El divisor és $3-x=-(x-3)$: cal aplicar Ruffini amb l'arrel $3$ "
     "sobre $x^2-9$ (l'oposat del dividend) i després tornar a canviar "
     "el signe del quocient. T'has deixat aquest segon canvi de signe."),
   D(qr_tex(expand(q67d + x), r67d), "RUFFINI_PAS_MAL",
     "El terme de grau $1$ del quocient no és correcte: revisa la "
     "taula de Ruffini pas a pas."),
   D(qr_tex(expand(q67d + 1), r67d), "RUFFINI_SIGNE_ARREL",
     "Has aplicat Ruffini amb l'arrel $-3$ en lloc de $3$: el divisor "
     "$3-x$ equival a $-(x-3)$, amb arrel $3$.")],
  [r"El divisor $3-x$ no és de la forma $x-a$ directa: reescriu-lo com "
   r"$3-x=-(x-3)$.",
   r"$(9-x^2):(3-x)=(x^2-9):(x-3)$ (el signe es cancel·la a numerador i "
   r"denominador). Aplica Ruffini amb l'arrel $3$."],
  [r"$(9-x^2):(3-x)=(x^2-9):(x-3)$, i per Ruffini amb arrel $3$ surt "
   r"quocient $%s$ i residu $%s$" % (poli_tex_raw(q67d), r_tex_raw(r67d))],
  ex_text=E67,
  nota="El divisor $3-x$ té el signe de $x$ canviat respecte a la forma "
       "habitual $x-a$: per fer-lo servir amb Ruffini cal reescriure'l "
       "primer com $-(x-3)$, dividint $9-x^2$ i $3-x$ pel mateix factor "
       "$-1$ (el quocient de la divisió no canvia).")

# 67e: divisor 2x-2 = 2(x-1), coeficient líder != 1
D67e = pol(1, 0, -2, 6)
q67e, r67e = div(D67e, pol(2, -2), x)
# via Ruffini amb (x-1), després dividir el quocient per 2
q_ruffini_e, r_ruffini_e = div(D67e, pol(1, -1), x)

Q("67e", 67, "e", B2, "A",
  r"$(x^3-2x+6):(2x-2)$",
  qr_tex(q67e, r67e),
  [D(qr_tex(q_ruffini_e, r_ruffini_e), "RUFFINI_DIVISOR_NO_MONIC",
     "Has aplicat Ruffini amb l'arrel $1$ (de $x-1$) però sense tenir en "
     "compte que el divisor és $2x-2=2(x-1)$, no $x-1$: el quocient "
     "final s'ha de dividir per $2$."),
   D(qr_tex(q67e, -r67e), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "El residu té el signe canviat."),
   D(qr_tex(expand(q_ruffini_e * -1), r_ruffini_e), "RUFFINI_SIGNE_ARREL",
     "Has aplicat Ruffini amb l'arrel $-1$ en lloc de $1$: el factor és "
     "$(x-1)$, no $(x+1)$.")],
  [r"El divisor $2x-2=2(x-1)$ no té coeficient líder $1$: treu-ne el "
   r"factor $2$ abans d'aplicar Ruffini.",
   r"Aplica Ruffini a $(x^3-2x+6):(x-1)$ amb arrel $1$, i divideix "
   r"després el quocient obtingut entre $2$ (el residu no canvia)."],
  [r"$(x^3-2x+6):(x-1)$ per Ruffini dona quocient $%s$ i residu $%s$; "
   r"com que el divisor real és el doble, $2x-2$, el quocient final es "
   r"divideix entre $2$: $%s$, residu $%s$"
   % (poli_tex_raw(q_ruffini_e), r_tex_raw(r_ruffini_e), poli_tex_raw(q67e), r_tex_raw(r67e))],
  ex_text=E67,
  nota="El divisor $2x-2$ té coeficient líder $2$, no $1$: la regla de "
       "Ruffini \"pura\" només s'aplica directament a divisors $x-a$. "
       "Es resol traient-ne el factor comú, $2x-2=2(x-1)$, aplicant "
       "Ruffini amb $(x-1)$, i dividint el quocient resultant entre "
       "$2$ (el residu es manté igual).")

# 67f: divisor 3x+6 = 3(x+2)
D67f = pol(-1, 0, 3, -1, 1)
q67f, r67f = div(D67f, pol(3, 6), x)
q_ruffini_f, r_ruffini_f = div(D67f, pol(1, 2), x)

Q("67f", 67, "f", B2, "A",
  r"$(-x^4+3x^2-x+1):(3x+6)$",
  qr_tex(q67f, r67f),
  [D(qr_tex(q_ruffini_f, r_ruffini_f), "RUFFINI_DIVISOR_NO_MONIC",
     "Has aplicat Ruffini amb l'arrel $-2$ (de $x+2$) però el divisor "
     "és $3x+6=3(x+2)$, no $x+2$: el quocient final s'ha de dividir "
     "per $3$."),
   D(qr_tex(q67f, -r67f), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "El residu té el signe canviat."),
   D(qr_tex(expand(q_ruffini_f * -1), r_ruffini_f), "RUFFINI_SIGNE_ARREL",
     "Has aplicat Ruffini amb l'arrel $2$ en lloc de $-2$: el factor és "
     "$(x+2)$, no $(x-2)$.")],
  [r"El divisor $3x+6=3(x+2)$ no té coeficient líder $1$: treu-ne el "
   r"factor $3$ abans d'aplicar Ruffini.",
   r"Aplica Ruffini amb arrel $-2$ i divideix després el quocient entre "
   r"$3$ (el residu no canvia)."],
  [r"$(-x^4+3x^2-x+1):(x+2)$ per Ruffini dona quocient $%s$ i residu "
   r"$%s$; dividit el quocient entre $3$ (divisor real $3x+6$): $%s$, "
   r"residu $%s$"
   % (poli_tex_raw(q_ruffini_f), r_tex_raw(r_ruffini_f), poli_tex_raw(q67f), r_tex_raw(r67f))],
  ex_text=E67,
  nota="Igual que a l'apartat e), el divisor $3x+6$ té coeficient líder "
       "$3$: es treu el factor comú, s'aplica Ruffini amb $(x+2)$, i el "
       "quocient final es divideix entre $3$.")


E68 = "Calcula el quocient i el residu de les divisions de polinomis següents."

# 68a: (7x^4-2x+x^3):(x-3), arrel 3
D68a = pol(7, 1, 0, -2, 0)
q68a, r68a = div(D68a, pol(1, -3), x)

Q("68a", 68, "a", B2, "A",
  r"$(7x^4-2x+x^3):(x-3)$",
  qr_tex(q68a, r68a),
  [D(qr_tex(*div(D68a, pol(1, 3), x)), "RUFFINI_SIGNE_ARREL",
     "Si el divisor és $x-3$, l'arrel per Ruffini és $3$, no $-3$."),
   D(qr_tex(q68a, -r68a), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "El residu té el signe canviat."),
   D(qr_tex(expand(q68a - x), r68a), "TERME_OBLIDAT_OPERACIO",
     "Revisa el terme de grau $1$ del quocient.")],
  ["Ordena primer el dividend: $x^4$, $x^3$, $x^2$ (que no hi surt, "
   "coeficient $0$), $x$ i terme independent.",
   "Aplica Ruffini amb l'arrel $3$."],
  [r"Quocient $%s$ i residu $%s$" % (poli_tex_raw(q68a), r_tex_raw(r68a))],
  ex_text=E68)

# 68b: (-3-x^5):(x+2), arrel -2
D68b = pol(-1, 0, 0, 0, 0, -3)
q68b, r68b = div(D68b, pol(1, 2), x)

Q("68b", 68, "b", B2, "A",
  r"$(-3-x^5):(x+2)$",
  qr_tex(q68b, r68b),
  [D(qr_tex(*div(D68b, pol(1, -2), x)), "RUFFINI_SIGNE_ARREL",
     "Si el divisor és $x+2$, l'arrel per Ruffini és $-2$, no $2$."),
   D(qr_tex(q68b, -r68b), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "El residu té el signe canviat."),
   D(qr_tex(expand(q68b + x ** 3), r68b), "RUFFINI_QUOCIENT_GRAU",
     "El quocient no és correcte: revisa el terme de grau $3$.")],
  ["El dividend $-3-x^5$ té molts coeficients $0$ (no hi ha termes en "
   "$x^4$, $x^3$, $x^2$, $x$): no te'ls saltis a la taula.",
   "Aplica Ruffini amb l'arrel $-2$."],
  [r"Quocient $%s$ i residu $%s$" % (poli_tex_raw(q68b), r_tex_raw(r68b))],
  ex_text=E68)

# 68c: (-3x^6+2x^5-x^4):(-x-1), divisor -(x+1)
D68c = pol(-3, 2, -1, 0, 0, 0, 0)
q68c, r68c = div(D68c, pol(-1, -1), x)
q68c_mal, r68c_mal = div(D68c, pol(1, 1), x)  # sense treure el signe -1

Q("68c", 68, "c", B2, "A",
  r"$(-3x^6+2x^5-x^4):(-x-1)$",
  qr_tex(q68c, r68c),
  [D(qr_tex(q68c_mal, r68c_mal), "FACTOR_COMU_SIGNE",
     "Has aplicat Ruffini directament amb l'arrel $-1$ sense reescriure "
     "abans el divisor $-x-1$ com $-(x+1)$: cal canviar de signe el "
     "dividend i el quocient final."),
   D(qr_tex(q68c, -r68c), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "El residu té el signe canviat."),
   D(qr_tex(*div(D68c, pol(-1, 1), x)), "RUFFINI_SIGNE_ARREL",
     "Has fet servir l'arrel $1$ en lloc de $-1$: el divisor $-x-1$ "
     "equival a $-(x+1)$, amb arrel $-1$.")],
  [r"El divisor $-x-1=-(x+1)$ no és de la forma $x-a$ directa: "
   r"reescriu-lo com $-(x+1)$.",
   r"Divideix $-3x^6+2x^5-x^4$ i $-x-1$ pel mateix factor $-1$: "
   r"$(3x^6-2x^5+x^4):(x+1)$, i aplica Ruffini amb l'arrel $-1$."],
  [r"$(-3x^6+2x^5-x^4):(-x-1)=(3x^6-2x^5+x^4):(x+1)$; per Ruffini amb "
   r"arrel $-1$: quocient $%s$ i residu $%s$" % (poli_tex_raw(q68c), r_tex_raw(r68c))],
  ex_text=E68,
  nota="El divisor $-x-1$ té el coeficient de $x$ negatiu: es reescriu "
       "com $-(x+1)$, dividint dividend i divisor pel mateix factor "
       "$-1$, i s'aplica Ruffini amb l'arrel $-1$.")

# 68d: (1+3x^3-6x^6-9x^2):(3-x), divisor 3-x
D68d = pol(-6, 0, 0, 3, -9, 0, 1)
q68d, r68d = div(D68d, pol(-1, 3), x)

Q("68d", 68, "d", B2, "A",
  r"$(1+3x^3-6x^6-9x^2):(3-x)$",
  qr_tex(q68d, r68d),
  [D(qr_tex(*div(D68d, pol(1, -3), x)), "FACTOR_COMU_SIGNE",
     "El divisor $3-x=-(x-3)$: has dividit directament sense reescriure "
     "el divisor, i t'has deixat el canvi de signe del quocient."),
   D(qr_tex(q68d, -r68d), "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "El residu té el signe canviat."),
   D(qr_tex(expand(q68d + x), r68d), "RUFFINI_PAS_MAL",
     "El terme de grau $1$ del quocient no és correcte: revisa el pas "
     "corresponent de la taula de Ruffini.")],
  [r"El divisor $3-x=-(x-3)$: reescriu-lo abans d'aplicar Ruffini.",
   r"$(1+3x^3-6x^6-9x^2):(3-x)=(6x^6-3x^3+9x^2-1):(x-3)$ (dividend i "
   r"divisor multiplicats per $-1$). Aplica Ruffini amb l'arrel $3$."],
  [r"Reescrivint el divisor, $(1+3x^3-6x^6-9x^2):(3-x)$ dona per Ruffini "
   r"quocient $%s$ i residu $%s$" % (poli_tex_raw(q68d), r_tex_raw(r68d))],
  ex_text=E68,
  nota="Igual que a l'apartat c) de l'exercici 67, el divisor $3-x$ té "
       "el signe de $x$ canviat: cal reescriure'l com $-(x-3)$ abans "
       "d'aplicar Ruffini.")


E69 = (r"A la taula de Ruffini següent hi manquen algunes dades "
       r"(marcades amb $\square$). Completa-la i indica el quocient i "
       r"el residu de la divisió corresponent.")


def ruffini_rows(coefs, arrel):
    """Retorna (fila_productes, fila_sumes) d'una taula de Ruffini
    completa, com les de la font r-im4.tex."""
    row_sum = [coefs[0]]
    row_prod = [None]
    for c in coefs[1:]:
        p = row_sum[-1] * arrel
        row_prod.append(p)
        row_sum.append(p + c)
    return row_prod, row_sum


# 69a: dividend 3,4,0,-1, arrel -1 (tot conegut, cal completar la taula)
coefs_a, arrel_a = [3, 4, 0, -1], -1
_, sumes_a = ruffini_rows(coefs_a, arrel_a)
q69a, r69a = sumes_a[:-1], sumes_a[-1]

Q("69a", 69, "a", B2, "A",
  (r"Dividend $%s$, divisor $x+1$:" % poli_tex_raw(pol(*coefs_a))),
  qr_tex(pol(*q69a), r69a),
  [D(qr_tex(*div(pol(*coefs_a), pol(1, -1), x)), "RUFFINI_SIGNE_ARREL",
     "Has multiplicat per $1$ a cada pas en lloc de per $-1$: si el "
     "divisor és $x+1=x-(-1)$, l'arrel per Ruffini és $-1$."),
   D(qr_tex(pol(*[coefs_a[0], coefs_a[1], q69a[2] + 1]), r69a),
     "RUFFINI_PAS_MAL",
     "Alguna suma intermèdia de la taula no és correcta: revisa el "
     "tercer pas (producte i suma corresponents)."),
   D(qr_tex(pol(3, 1, -1), 1), "RUFFINI_RESIDU_COM_QUOCIENT",
     "El residu no és $1$: la divisió és exacta (residu $0$), ja que "
     "l'últim pas de la taula dona $-1\\cdot(-1)+(-1)=0$.")],
  [r"Baixa el primer coeficient ($3$), multiplica'l per l'arrel "
   r"($-1$) i suma el resultat al següent coeficient; repeteix fins "
   r"al final.",
   r"L'últim número de la fila inferior és el residu; els altres, en "
   r"ordre, són els coeficients del quocient."],
  [r"Amb arrel $-1$: quocient $%s$ i residu $%s$"
   % (poli_tex_raw(pol(*q69a)), r_tex_raw(r69a))],
  ex_text=E69)

# 69b: dividend 4,3,2,1, arrel square; segona casella fila inferior = -1
# 4*a+3=-1 -> a=-1
coefs_b, arrel_b = [4, 3, 2, 1], -1
_, sumes_b = ruffini_rows(coefs_b, arrel_b)
q69b, r69b = sumes_b[:-1], sumes_b[-1]

Q("69b", 69, "b", B2, "A",
  (r"Dividend $%s$, arrel $\square$ (divisor desconegut); a la fila "
   r"inferior, la segona casella val $%d$:" % (poli_tex_raw(pol(*coefs_b)), sumes_b[1])),
  r"$\square=%d$; " % arrel_b + qr_tex(pol(*q69b), r69b),
  [D(r"$\square=1$; " + qr_tex(*div(pol(*coefs_b), pol(1, -1), x)),
     "RUFFINI_SIGNE_ARREL",
     "Si $4\\cdot\\square+3=-1$, aïllant surt $\\square=-1$, no $1$: "
     "revisa el signe en resoldre l'equació."),
   D(r"$\square=%d$; " % arrel_b + qr_tex(pol(*q69b), -r69b),
     "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "El valor de $\\square$ és correcte, però el residu té el signe "
     "canviat."),
   D(r"$\square=%d$; " % arrel_b + qr_tex(pol(q69b[0], q69b[1] + 2, q69b[2]), r69b),
     "RUFFINI_PAS_MAL",
     "El valor de $\\square$ és correcte, però algun pas posterior de "
     "la taula no s'ha completat bé.")],
  [r"La segona casella de la fila inferior és $4\cdot\square+3$: "
   r"iguala-la a $%d$ i aïlla $\square$." % sumes_b[1],
   r"Amb $\square=%d$, completa la resta de la taula de Ruffini com "
   r"sempre." % arrel_b],
  [r"De $4\cdot\square+3=%d$ surt $\square=%d$; amb aquesta arrel, "
   r"quocient $%s$ i residu $%s$"
   % (sumes_b[1], arrel_b, poli_tex_raw(pol(*q69b)), r_tex_raw(r69b))],
  ex_text=E69)

# 69c: dividend 1,0,-1,2, arrel square; residu final = 2 -> r^3-r=0
# r = -1, 0, 1; descartem 0 (divisió trivial); triem r=1 (com la font)
coefs_c, arrel_c = [1, 0, -1, 2], 1
_, sumes_c = ruffini_rows(coefs_c, arrel_c)
q69c, r69c = sumes_c[:-1], sumes_c[-1]

Q("69c", 69, "c", B2, "A",
  (r"Dividend $%s$, arrel $\square$ (divisor desconegut); el residu de "
   r"la divisió és $%d$:" % (poli_tex_raw(pol(*coefs_c)), r69c)),
  r"$\square=%d$; " % arrel_c + qr_tex(pol(*q69c), r69c),
  [D(r"$\square=-1$; " + qr_tex(*div(pol(*coefs_c), pol(1, 1), x)),
     "RUFFINI_PAS_MAL",
     "$\\square=-1$ també compleix l'equació $\\square^3-\\square=0$, "
     "però no és el valor que es tria aquí (es descarta $\\square=0$ "
     "per donar una divisió trivial, i entre $1$ i $-1$ es pren "
     "$\\square=1$)."),
   D(r"$\square=0$; " + qr_tex(pol(*coefs_c[:-1]), coefs_c[-1]),
     "RUFFINI_PAS_MAL",
     "$\\square=0$ també anul·la l'equació $\\square^3-\\square=0$, "
     "però donaria una divisió per $x$, un cas trivial poc habitual "
     "en aquest tipus d'exercici."),
   D(r"$\square=%d$; " % arrel_c + qr_tex(pol(*q69c), -r69c),
     "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "El valor de $\\square$ és correcte, però el residu té el signe "
     "canviat.")],
  [r"El residu final és $\square^3-\square$ (arrossegant els termes de "
   r"la taula): iguala'l a $%d$ i resol l'equació de tercer grau." % r69c,
   r"$\square^3-\square=0$ té tres solucions: $\square=-1,0,1$. "
   r"Descarta $\square=0$ (divisió trivial) i tria'n una de les "
   r"altres dues."],
  [r"De $\square^3-\square=0$ surten $\square=-1,0,1$; descartant $0$ "
   r"i triant $\square=%d$, la taula dona quocient $%s$ i residu $%s$"
   % (arrel_c, poli_tex_raw(pol(*q69c)), r_tex_raw(r69c))],
  ex_text=E69,
  nota="L'equació que determina $\\square$ té tres solucions vàlides "
       "($-1$, $0$ i $1$); es descarta $\\square=0$ perquè donaria una "
       "divisió trivial per $x$, i s'ha triat $\\square=1$ per "
       "completar la taula, seguint el mateix criteri del solucionari "
       "font.")

# 69d: dividend square,0,0,-3, arrel -4; segona casella fila inferior = 8
# square*(-4)=8 -> square=-2
arrel_d = -4
square_d = -2
coefs_d = [square_d, 0, 0, -3]
_, sumes_d = ruffini_rows(coefs_d, arrel_d)
q69d, r69d = sumes_d[:-1], sumes_d[-1]

# Distractor: si s'hagués resolt malament el signe, square=2
_, sumes_d_mal = ruffini_rows([2, 0, 0, -3], arrel_d)
q69d_mal, r69d_mal = sumes_d_mal[:-1], sumes_d_mal[-1]

Q("69d", 69, "d", B2, "A",
  (r"Dividend $\square x^3+0x^2+0x-3$, divisor $x+4$; a la fila "
   r"inferior, la segona casella val $%d$:" % sumes_d[1]),
  r"$\square=%d$; " % square_d + qr_tex(pol(*q69d), r69d),
  [D(r"$\square=2$; " + qr_tex(pol(*q69d_mal), r69d_mal),
     "RUFFINI_SIGNE_ARREL",
     "Si $\\square\\cdot(-4)=8$, aïllant surt $\\square=-2$, no $2$: "
     "revisa el signe en resoldre l'equació."),
   D(r"$\square=%d$; " % square_d + qr_tex(pol(*q69d), -r69d),
     "DIVISIO_QUOCIENT_RESIDU_CANVIATS",
     "El valor de $\\square$ és correcte, però el residu té el signe "
     "canviat."),
   D(r"$\square=%d$; " % square_d + qr_tex(pol(q69d[0], q69d[1] - 4, q69d[2]), r69d),
     "RUFFINI_PAS_MAL",
     "El valor de $\\square$ és correcte, però algun pas posterior de "
     "la taula no s'ha completat bé.")],
  [r"La segona casella de la fila inferior és $\square\cdot(-4)$: "
   r"iguala-la a $%d$ i aïlla $\square$." % sumes_d[1],
   r"Amb $\square=%d$, completa la resta de la taula de Ruffini com "
   r"sempre." % square_d],
  [r"De $\square\cdot(-4)=%d$ surt $\square=%d$; amb aquesta arrel, "
   r"quocient $%s$ i residu $%s$"
   % (sumes_d[1], square_d, poli_tex_raw(pol(*q69d)), r_tex_raw(r69d))],
  ex_text=E69)


# =====================================================================
# BLOC 3 — IGUALTATS NOTABLES (exercicis 70-72)
# =====================================================================

E70 = (r"Completa les igualtats notables següents, trobant els valors "
       r"que falten (marcats amb $\square$).")

# 70a: (2x+3)^2 = square + 12x + square -> 4x^2 i 9
Q("70a", 70, "a", B3, "A",
  r"$(2x+3)^2=\square+12x+\square$",
  r"$4x^2$ i $9$",
  [D(r"$2x^2$ i $9$", "IGUALTAT_NOTABLE_DOBLE_OBLIDAT",
     "El primer terme és el quadrat de $2x$, és a dir $(2x)^2=4x^2$, "
     "no $2x^2$."),
   D(r"$4x^2$ i $3$", "QUADRAT_INCOMPLET",
     "El segon terme és el quadrat de $3$, és a dir $3^2=9$, no $3$."),
   D(r"$2x$ i $9$", "IGUALTAT_NOTABLE_DOBLE_OBLIDAT",
     "El primer terme ha de ser el quadrat de $2x$, no $2x$ sense "
     "elevar al quadrat.")],
  [r"$(2x+3)^2=(2x)^2+2\cdot2x\cdot3+3^2$: el primer $\square$ és "
   r"$(2x)^2$ i el segon és $3^2$.",
   r"Comprova que el terme del mig, $2\cdot2x\cdot3=12x$, coincideix "
   r"amb el que ja hi ha a l'enunciat."],
  [r"$(2x+3)^2=4x^2+12x+9$: el primer $\square$ és $4x^2$ i el segon "
   r"és $9$"],
  ex_text=E70)

# 70b: (5-3x)^2 = 25 - square + square x^2 -> 30x i 9
Q("70b", 70, "b", B3, "A",
  r"$(5-3x)^2=25-\square+\square x^2$",
  r"$30x$ i $9$",
  [D(r"$15x$ i $9$", "IGUALTAT_NOTABLE_DOBLE_OBLIDAT",
     "El terme del mig és el DOBLE producte, $2\\cdot5\\cdot3x=30x$, "
     "no només $5\\cdot3x=15x$."),
   D(r"$30x$ i $3$", "QUADRAT_INCOMPLET",
     "El coeficient de $x^2$ és el quadrat de $3$, és a dir $3^2=9$, "
     "no $3$."),
   D(r"$30x$ i $-9$", "IGUALTAT_NOTABLE_SIGNE",
     "El terme en $x^2$ és sempre positiu (és un quadrat): "
     "$(3x)^2=9x^2$, amb signe $+$.")],
  [r"$(5-3x)^2=5^2-2\cdot5\cdot3x+(3x)^2$: el primer $\square$ és el "
   r"doble producte i el segon és el coeficient del quadrat de $3x$.",
   r"Recorda que en un quadrat d'una diferència el terme del mig és "
   r"negatiu, però el terme en $x^2$ sempre és positiu."],
  [r"$(5-3x)^2=25-30x+9x^2$: el primer $\square$ és $30x$ i el segon "
   r"és $9$"],
  ex_text=E70)

# 70c: (9+7x)(9-7x) = square - square -> 81 i 49x^2
Q("70c", 70, "c", B3, "A",
  r"$(9+7x)\cdot(9-7x)=\square-\square$",
  r"$81$ i $49x^2$",
  [D(r"$81$ i $7x^2$", "QUADRAT_INCOMPLET",
     "El segon terme és el quadrat de $7x$, és a dir $(7x)^2=49x^2$, "
     "no $7x^2$."),
   D(r"$9$ i $49x^2$", "QUADRAT_INCOMPLET",
     "El primer terme és el quadrat de $9$, és a dir $9^2=81$, no "
     "$9$."),
   D(r"$81$ i $63x$", "SUMA_PER_DIFERENCIA_MAL",
     "En una suma per diferència no queda cap terme en $x$ de grau "
     "$1$: el resultat és directament una resta de quadrats.")],
  [r"És una suma per diferència: $(a+b)(a-b)=a^2-b^2$, amb $a=9$ i "
   r"$b=7x$.",
   r"$(9+7x)(9-7x)=9^2-(7x)^2$."],
  [r"$(9+7x)(9-7x)=81-49x^2$: el primer $\square$ és $81$ i el segon "
   r"és $49x^2$"],
  ex_text=E70)

# 70d: (square+square)^2 = x^4+2x^3+x^2 -> x^2 i x
Q("70d", 70, "d", B3, "A",
  r"$(\square+\square)^2=x^4+2x^3+x^2$",
  r"$x^2$ i $x$",
  [D(r"$x^2$ i $x^2$", "QUADRAT_INCOMPLET",
     "Amb $(x^2+x^2)^2=(2x^2)^2=4x^4$, no coincideix amb $x^4$: revisa "
     "els dos termes per separat."),
   D(r"$x$ i $x$", "GRAU_PRODUCTE_MAL",
     "Amb $(x+x)^2=(2x)^2=4x^2$, que no té ni grau $4$ ni grau $3$: "
     "el primer terme ha de ser de grau més alt."),
   D(r"$x^3$ i $x$", "GRAU_PRODUCTE_MAL",
     "El quadrat de $x^3$ ja seria $x^6$, de grau massa alt per "
     "encaixar amb $x^4+2x^3+x^2$.")],
  [r"Busca dos termes $a$ i $b$ tals que $a^2=x^4$, $b^2=x^2$, i "
   r"$2ab=2x^3$.",
   r"Si $a=x^2$ i $b=x$: $a^2=x^4$ ✓, $b^2=x^2$ ✓, $2ab=2x^2\cdot x"
   r"=2x^3$ ✓."],
  [r"$x^4+2x^3+x^2=(x^2)^2+2\cdot x^2\cdot x+x^2=(x^2+x)^2$: els dos "
   r"$\square$ són $x^2$ i $x$"],
  ex_text=E70)


E71 = "Factoritza, reconeixent-hi una igualtat notable."


def item71(letra, expr, correcta_txt, dist_txts_amb_tag):
    """Genera l'ítem 71<letra>. dist_txts_amb_tag: llista de (text, tag,
    feedback)."""
    return Q("71%s" % letra, 71, letra, B3, "A",
      r"$%s$" % expr,
      r"$%s$" % correcta_txt,
      [D(r"$%s$" % t, tag, fb) for (t, tag, fb) in dist_txts_amb_tag],
      ["Comprova si l'expressió és una diferència de quadrats "
       "($a^2-b^2$) o el quadrat d'un binomi ($a^2\\pm2ab+b^2$).",
       "Un cop identificat el patró, escriu-lo com a producte de dos "
       "factors (o el quadrat d'un binomi)."],
      [r"$%s=%s$" % (expr, correcta_txt)],
      ex_text=E71)


item71("a", "x^2-16", "(x-4)(x+4)",
       [("(x-4)^2", "QUADRAT_INCOMPLET",
         "No és un quadrat perfecte (no hi ha terme en $x$ de grau $1$ "
         "a l'expressió original): és una diferència de quadrats, "
         "$x^2-4^2$."),
        ("(x-8)(x+8)", "DIFERENCIA_QUADRATS_MAL",
         "El segon nombre ha de ser l'arrel quadrada de $16$, que és "
         "$4$, no $8$."),
        ("(x-16)(x+16)", "DIFERENCIA_QUADRATS_MAL",
         "No es factoritza el $16$ tal qual: cal trobar-ne l'arrel "
         "quadrada, $4$.")])

item71("b", "x^4-36", "(x^2-6)(x^2+6)",
       [("(x^2-36)(x^2+36)", "DIFERENCIA_QUADRATS_MAL",
         "El segon nombre ha de ser l'arrel quadrada de $36$, que és "
         "$6$, no $36$."),
        ("(x-6)(x+6)", "GRAU_PRODUCTE_MAL",
         "El primer terme és $x^4=(x^2)^2$, no $x^2$: el primer factor "
         "ha de portar $x^2$, no $x$."),
        ("(x^2-6)^2", "QUADRAT_INCOMPLET",
         "No és un quadrat perfecte, sinó una diferència de quadrats: "
         "no hi ha terme del mig a l'expressió original.")])

item71("c", "4x^2-25", "(2x-5)(2x+5)",
       [("(4x-25)(4x+25)", "DIFERENCIA_QUADRATS_MAL",
         "El primer terme és $4x^2=(2x)^2$, no $(4x)^2$: revisa "
         "l'arrel quadrada de $4x^2$."),
        ("(2x-5)^2", "QUADRAT_INCOMPLET",
         "No és un quadrat perfecte: no hi ha terme del mig a "
         "l'expressió original, és una diferència de quadrats."),
        ("(2x-25)(2x+25)", "DIFERENCIA_QUADRATS_MAL",
         "El segon nombre ha de ser l'arrel quadrada de $25$, que és "
         "$5$, no $25$.")])

item71("d", "x^2-4x+4", "(x-2)^2",
       [("(x+2)^2", "IGUALTAT_NOTABLE_SIGNE",
         "El terme del mig, $-4x$, és negatiu: correspon a $(x-2)^2$, "
         "amb signe $-$ dins del parèntesi."),
        ("(x-4)(x+4)", "GRAUS_MAL_AGRUPATS",
         "Aquesta expressió té terme del mig ($-4x$): no és una "
         "diferència de quadrats, és un quadrat perfecte."),
        ("(x-2)(x+2)", "IGUALTAT_NOTABLE_SIGNE",
         "Els dos factors han de ser iguals (és un quadrat perfecte, "
         "$(x-2)^2$), no un de suma i un de resta.")])

item71("e", "16x^2-24xy+9y^2", "(4x-3y)^2",
       [("(4x+3y)^2", "IGUALTAT_NOTABLE_SIGNE",
         "El terme del mig, $-24xy$, és negatiu: correspon a "
         "$(4x-3y)^2$, amb signe $-$ dins del parèntesi."),
        ("(4x-3y)(4x+3y)", "GRAUS_MAL_AGRUPATS",
         "Aquesta expressió té terme del mig ($-24xy$): no és una "
         "diferència de quadrats, és un quadrat perfecte."),
        ("(4x-9y)^2", "QUADRAT_INCOMPLET",
         "El segon terme del binomi ha de ser l'arrel quadrada de "
         "$9y^2$, que és $3y$, no $9y$.")])

item71("f", "16x^4+24x^2+9", "(4x^2+3)^2",
       [("(4x^2-3)^2", "IGUALTAT_NOTABLE_SIGNE",
         "El terme del mig, $+24x^2$, és positiu: correspon a "
         "$(4x^2+3)^2$, amb signe $+$ dins del parèntesi."),
        ("(4x^2+3)(4x^2-3)", "GRAUS_MAL_AGRUPATS",
         "Aquesta expressió té terme del mig ($+24x^2$): no és una "
         "diferència de quadrats, és un quadrat perfecte."),
        ("(8x^2+3)^2", "QUADRAT_INCOMPLET",
         "El primer terme del binomi ha de ser l'arrel quadrada de "
         "$16x^4$, que és $4x^2$, no $8x^2$.")])


E72 = (r"Segueix el patró $[(x+2)+3]\cdot[(x+2)-3]=(x+2)^2-9$ per "
       r"escriure el producte com una resta de quadrats, sense "
       r"necessitat de desenvolupar-ho tot.")

Q("72a", 72, "a", B3, "A",
  r"$[(3x-y)+4]\cdot[(3x-y)-4]$",
  r"$(3x-y)^2-16$",
  [D(r"$(3x-y)^2-4$", "QUADRAT_INCOMPLET",
     "El segon terme s'ha d'elevar al quadrat: $4^2=16$, no $4$."),
   D(r"(3x-y)^2+16", "SUMA_PER_DIFERENCIA_MAL",
     "En una suma per diferència, el segon quadrat sempre resta, mai "
     "suma: $(a+b)(a-b)=a^2-b^2$."),
   D(r"9x^2-y^2-16", "GRAUS_MAL_AGRUPATS",
     "El primer terme s'ha de deixar com el quadrat de tot el binomi "
     "$(3x-y)$, no només de la $x$: $(3x-y)^2\\neq 9x^2-y^2$.")],
  [r"Identifica el \"primer terme\" comú als dos factors i el "
   r"\"segon\" que canvia de signe: aquí és $(3x-y)$ i $4$.",
   r"$[(3x-y)+4]\cdot[(3x-y)-4]=(3x-y)^2-4^2$."],
  [r"$[(3x-y)+4]\cdot[(3x-y)-4]=(3x-y)^2-16$ (desenvolupat del tot: "
   r"$9x^2-6xy+y^2-16$)"],
  ex_text=E72)

Q("72b", 72, "b", B3, "A",
  r"$[(a+b)+c]\cdot[(a+b)-c]$",
  r"$(a+b)^2-c^2$",
  [D(r"(a+b)^2-c", "QUADRAT_INCOMPLET",
     "El segon terme s'ha d'elevar al quadrat: és $c^2$, no $c$."),
   D(r"(a+b)^2+c^2", "SUMA_PER_DIFERENCIA_MAL",
     "En una suma per diferència, el segon quadrat sempre resta, mai "
     "suma."),
   D(r"a^2+b^2-c^2", "GRAUS_MAL_AGRUPATS",
     "El primer terme s'ha de deixar com el quadrat de tot el binomi "
     "$(a+b)$, no desenvolupat ni separat.")],
  [r"Identifica el \"primer terme\" comú i el \"segon\" que canvia de "
   r"signe: aquí són $(a+b)$ i $c$.",
   r"$[(a+b)+c]\cdot[(a+b)-c]=(a+b)^2-c^2$."],
  [r"$[(a+b)+c]\cdot[(a+b)-c]=(a+b)^2-c^2$ (desenvolupat del tot: "
   r"$a^2+2ab+b^2-c^2$)"],
  ex_text=E72)


# =====================================================================
# BLOC 4 — FACTOR COMÚ I SIMPLIFICACIÓ (exercicis 73-74)
# =====================================================================

E73 = "Treu factor comú."

Q("73a", 73, "a", B4, "A",
  r"$3x^2-4x$",
  r"$x(3x-4)$",
  [D(r"$x(3x-4x)$", "FACTOR_COMU_MAL_DIVIDIT",
     "En treure el factor $x$, el segon terme, $-4x$, s'ha de dividir "
     "també per $x$: queda $-4$, no $-4x$."),
   D(r"$3x(x-4)$", "FACTOR_COMU_INCOMPLET",
     "El factor comú dels dos termes és $x$, no $3x$: el $3$ només "
     "apareix al primer terme."),
   D(r"$x(3x^2-4x)$", "FACTOR_COMU_MAL_DIVIDIT",
     "Dins del parèntesi els termes no s'han dividit pel factor comú "
     "$x$: haurien de quedar $3x$ i $-4$.")],
  ["Busca què es repeteix als dos termes, $3x^2$ i $-4x$: el factor "
   "comú és $x$.",
   "Divideix cada terme pel factor comú i escriu el resultat dins del "
   "parèntesi."],
  [r"$3x^2-4x=x\cdot(3x-4)$"],
  ex_text=E73)

Q("73b", 73, "b", B4, "A",
  r"$(x+1)+3(x+1)$",
  r"$4(x+1)$",
  [D(r"$(x+1)(3x+3)$", "DISTRIBUCIO_INCOMPLETA",
     "Els dos termes són $(x+1)$ i $3(x+1)$: el factor comú $(x+1)$ "
     "es treu un sol cop, i queda $1+3=4$ dins de l'altre parèntesi."),
   D(r"$3(x+1)$", "TERME_OBLIDAT_OPERACIO",
     "T'has deixat el primer $(x+1)$ (que compta com $1$ vegada el "
     "binomi): el total és $1+3=4$ vegades $(x+1)$, no $3$."),
   D(r"$4x+1$", "DISTRIBUCIO_INCOMPLETA",
     "El $4$ ha de multiplicar TOT el binomi $(x+1)$, no només la "
     "$x$: és $4(x+1)=4x+4$.")],
  [r"El binomi $(x+1)$ es repeteix als dos termes: el primer és "
   r"$1\cdot(x+1)$ i el segon $3\cdot(x+1)$.",
   r"Treu $(x+1)$ com a factor comú: queda $(1+3)\cdot(x+1)$."],
  [r"$(x+1)+3(x+1)=(1+3)(x+1)=4(x+1)$"],
  ex_text=E73)

Q("73c", 73, "c", B4, "A",
  r"$xy-6xyz-5xyzt$",
  r"$xy(1-6z-5zt)$",
  [D(r"$xy(1-6zt-5zt)$", "FACTOR_COMU_MAL_DIVIDIT",
     "El segon terme dins del parèntesi ha de quedar $-6z$ (dividint "
     "$-6xyz$ per $xy$), no $-6zt$: revisa quin terme porta la $t$."),
   D(r"$xyz(1-6-5t)$", "FACTOR_COMU_INCOMPLET",
     "El primer terme, $xy$, no té el factor $z$: el factor comú als "
     "tres termes és $xy$, no $xyz$."),
   D(r"$xy(-1-6z-5zt)$", "FACTOR_COMU_SIGNE",
     "El primer terme dins del parèntesi ha de ser $+1$ (dividint "
     "$xy$ per $xy$), no $-1$.")],
  ["Busca el factor que es repeteix als tres termes: $xy$, $-6xyz$ i "
   "$-5xyzt$ tenen en comú $xy$.",
   "Divideix cada terme pel factor comú $xy$: queden $1$, $-6z$ i "
   "$-5zt$."],
  [r"$xy-6xyz-5xyzt=xy\cdot(1-6z-5zt)$"],
  ex_text=E73)

Q("73d", 73, "d", B4, "A",
  r"$3x-4x^2-6x^3$",
  r"$x(3-4x-6x^2)$",
  [D(r"$x(3-4x^2-6x^3)$", "FACTOR_COMU_MAL_DIVIDIT",
     "Els termes de dins del parèntesi s'han de dividir per $x$: "
     "$-4x^2:x=-4x$ i $-6x^3:x=-6x^2$, no es queden igual."),
   D(r"$x^3(3-4x-6x^2)$", "FACTOR_COMU_INCOMPLET",
     "El primer terme, $3x$, només té una $x$: el factor comú és $x$, "
     "no $x^3$."),
   D(r"$x(3x-4x^2-6x^3)$", "FACTOR_COMU_MAL_DIVIDIT",
     "El primer terme dins del parèntesi s'ha de dividir per $x$: "
     "$3x:x=3$, no $3x$.")],
  ["Busca el factor comú als tres termes: $3x$, $-4x^2$ i $-6x^3$ "
   "tenen en comú $x$.",
   "Divideix cada terme per $x$: queden $3$, $-4x$ i $-6x^2$."],
  [r"$3x-4x^2-6x^3=x\cdot(3-4x-6x^2)$"],
  ex_text=E73)


E74 = ("Simplifica al màxim, combinant factor comú i igualtats "
       "notables quan calgui.")

Q("74a", 74, "a", B4, "A",
  r"$7x^2-14x+7$",
  r"$7(x-1)^2$",
  [D(r"$7(x-1)$", "GRAU_PRODUCTE_MAL",
     "Un cop tret el factor $7$, queda $x^2-2x+1$, que és un quadrat "
     "perfecte, $(x-1)^2$: no es pot deixar sense el quadrat."),
   D(r"$7(x+1)^2$", "IGUALTAT_NOTABLE_SIGNE",
     "El terme del mig, $-14x$, és negatiu: correspon a $(x-1)^2$, "
     "amb signe $-$."),
   D(r"$(7x-7)^2$", "FACTOR_COMU_INCOMPLET",
     "El $7$ s'ha de treure com a factor comú abans de reconèixer el "
     "quadrat perfecte, no ficar-lo dins del quadrat.")],
  ["Treu primer el factor comú $7$: $7x^2-14x+7=7(x^2-2x+1)$.",
   "Un cop tret el $7$, reconeix que $x^2-2x+1$ és un quadrat "
   "perfecte, $(x-1)^2$."],
  [r"$7x^2-14x+7=7(x^2-2x+1)=7(x-1)^2$"],
  ex_text=E74)

Q("74b", 74, "b", B4, "A",
  r"$16x^2+64x+64$",
  r"$16(x+2)^2$",
  [D(r"$16(x+2)$", "GRAU_PRODUCTE_MAL",
     "Un cop tret el factor $16$, queda $x^2+4x+4$, que és un quadrat "
     "perfecte, $(x+2)^2$: no es pot deixar sense el quadrat."),
   D(r"$16(x-2)^2$", "IGUALTAT_NOTABLE_SIGNE",
     "El terme del mig, $+64x$, és positiu: correspon a $(x+2)^2$, "
     "amb signe $+$."),
   D(r"$8(x+2)^2$", "FACTOR_COMU_INCOMPLET",
     "El factor comú de $16$, $64$ i $64$ és $16$, no $8$.")],
  ["Treu primer el factor comú $16$: $16x^2+64x+64=16(x^2+4x+4)$.",
   "Un cop tret el $16$, reconeix que $x^2+4x+4$ és un quadrat "
   "perfecte, $(x+2)^2$."],
  [r"$16x^2+64x+64=16(x^2+4x+4)=16(x+2)^2$"],
  ex_text=E74)

Q("74c", 74, "c", B4, "A",
  r"$x^3-2x^2+x$",
  r"$x(x-1)^2$",
  [D(r"$x(x-1)$", "GRAU_PRODUCTE_MAL",
     "Un cop tret el factor $x$, queda $x^2-2x+1$, que és un quadrat "
     "perfecte, $(x-1)^2$: no es pot deixar sense el quadrat."),
   D(r"$x(x+1)^2$", "IGUALTAT_NOTABLE_SIGNE",
     "El terme del mig, $-2x^2$ (un cop tret el factor $x$, $-2x$), "
     "és negatiu: correspon a $(x-1)^2$, amb signe $-$."),
   D(r"$(x-1)^2$", "FACTOR_COMU_INCOMPLET",
     "T'has deixat el factor comú $x$: els tres termes ($x^3$, "
     "$-2x^2$, $x$) el tenen en comú.")],
  ["Treu primer el factor comú $x$: $x^3-2x^2+x=x(x^2-2x+1)$.",
   "Un cop tret l'$x$, reconeix que $x^2-2x+1$ és un quadrat "
   "perfecte, $(x-1)^2$."],
  [r"$x^3-2x^2+x=x(x^2-2x+1)=x(x-1)^2$"],
  ex_text=E74)

Q("74d", 74, "d", B4, "A",
  r"$18x^4-12x^2+2$",
  r"$2(3x^2-1)^2$",
  [D(r"$2(3x^2-1)$", "GRAU_PRODUCTE_MAL",
     "Un cop tret el factor $2$, queda $9x^4-6x^2+1$, que és un "
     "quadrat perfecte, $(3x^2-1)^2$: no es pot deixar sense el "
     "quadrat."),
   D(r"$2(3x^2+1)^2$", "IGUALTAT_NOTABLE_SIGNE",
     "El terme del mig, $-6x^2$ (un cop tret el $2$), és negatiu: "
     "correspon a $(3x^2-1)^2$, amb signe $-$."),
   D(r"$6(3x^2-1)^2$", "FACTOR_COMU_INCOMPLET",
     "El factor comú de $18$, $-12$ i $2$ és $2$, no $6$.")],
  ["Treu primer el factor comú $2$: $18x^4-12x^2+2=2(9x^4-6x^2+1)$.",
   "Un cop tret el $2$, reconeix que $9x^4-6x^2+1$ és un quadrat "
   "perfecte, $(3x^2-1)^2$."],
  [r"$18x^4-12x^2+2=2(9x^4-6x^2+1)=2(3x^2-1)^2$"],
  ex_text=E74)

Q("74e", 74, "e", B4, "A",
  r"$(2x+4)(x-2)$",
  r"$2(x-2)(x+2)$",
  [D(r"$2x^2-8$", "FACTOR_COMU_INCOMPLET",
     "El desenvolupament és correcte, però encara es pot factoritzar "
     "més: $2x^2-8=2(x^2-4)=2(x-2)(x+2)$."),
   D(r"$(x-2)(x+2)$", "FACTOR_COMU_INCOMPLET",
     "T'has deixat el factor comú $2$: el desenvolupament dona "
     "$2x^2-8=2(x^2-4)$, no $x^2-4$."),
   D(r"$2(x+2)^2$", "DIFERENCIA_QUADRATS_MAL",
     "Un cop desenvolupat i tret el factor $2$, queda $x^2-4$, que és "
     "una DIFERÈNCIA de quadrats, $(x-2)(x+2)$, no un quadrat "
     "perfecte.")],
  ["Desenvolupa primer el producte: "
   "$(2x+4)(x-2)=2x^2-4x+4x-8=2x^2-8$.",
   "Treu factor comú $2$ i reconeix la diferència de quadrats: "
   "$2(x^2-4)=2(x-2)(x+2)$."],
  [r"$(2x+4)(x-2)=2x^2-8=2(x^2-4)=2(x-2)(x+2)$"],
  ex_text=E74)

Q("74f", 74, "f", B4, "A",
  r"$(x-5)(x^2+5x)$",
  r"$x(x-5)(x+5)$",
  [D(r"$x^3-25x$", "FACTOR_COMU_INCOMPLET",
     "El desenvolupament és correcte, però encara es pot factoritzar "
     "més: $x^3-25x=x(x^2-25)=x(x-5)(x+5)$."),
   D(r"$(x-5)(x+5)$", "FACTOR_COMU_INCOMPLET",
     "T'has deixat el factor comú $x$: el desenvolupament dona "
     "$x^3-25x=x(x^2-25)$, no $x^2-25$."),
   D(r"$x(x-5)^2$", "DIFERENCIA_QUADRATS_MAL",
     "Un cop tret el factor $x$, queda $x^2-25$, que és una "
     "DIFERÈNCIA de quadrats, $(x-5)(x+5)$, no un quadrat perfecte.")],
  ["Desenvolupa primer el producte: "
   "$(x-5)(x^2+5x)=x^3+5x^2-5x^2-25x=x^3-25x$.",
   "Treu factor comú $x$ i reconeix la diferència de quadrats: "
   "$x(x^2-25)=x(x-5)(x+5)$."],
  [r"$(x-5)(x^2+5x)=x^3-25x=x(x^2-25)=x(x-5)(x+5)$"],
  ex_text=E74)

Q("74g", 74, "g", B4, "A",
  r"$(-x-7)(x-7)$",
  r"$(7-x)(7+x)$",
  [D(r"$(x-7)(x+7)$", "IGUALTAT_NOTABLE_SIGNE",
     "El primer factor és $-x-7=-(x+7)$, no $x-7$: el signe global "
     "canvia el resultat final."),
   D(r"$x^2-49$", "IGUALTAT_NOTABLE_SIGNE",
     "El desenvolupament correcte dona $49-x^2$, no $x^2-49$: revisa "
     "el signe global en treure el $-1$ comú del primer factor."),
   D(r"$-(x-7)(x+7)$", "FACTOR_COMU_SIGNE",
     "És una forma equivalent correcta abans de reorganitzar signes, "
     "però no és la manera més simplificada: $-(x-7)(x+7)=(7-x)(x+7)"
     "=(7-x)(7+x)$.")],
  [r"Treu primer el signe menys comú del primer factor: "
   r"$-x-7=-(x+7)$.",
   r"$(-x-7)(x-7)=-(x+7)(x-7)=-(x^2-49)=49-x^2=(7-x)(7+x)$."],
  [r"$(-x-7)(x-7)=-(x+7)(x-7)=49-x^2=(7-x)(7+x)$"],
  ex_text=E74)

Q("74h", 74, "h", B4, "A",
  r"$(-x^2+5)(-x^2-5)$",
  r"$x^4-25$",
  [D(r"$25-x^4$", "SUMA_PER_DIFERENCIA_MAL",
     "És una suma per diferència amb $a=-x^2$ i $b=5$: "
     "$a^2-b^2=(-x^2)^2-5^2=x^4-25$, no $25-x^4$."),
   D(r"$x^4+25$", "SUMA_PER_DIFERENCIA_MAL",
     "En una suma per diferència, el segon quadrat sempre resta, mai "
     "suma."),
   D(r"$(x^2-5)(x^2+5)$", "FACTOR_COMU_INCOMPLET",
     "Aquesta factorització també és vàlida, però encara es pot "
     "desenvolupar del tot com a diferència de quadrats numèrica: "
     "$(x^2-5)(x^2+5)=x^4-25$.")],
  [r"És una suma per diferència amb $a=-x^2$ i $b=5$: "
   r"$(-x^2+5)(-x^2-5)=(-x^2)^2-5^2$.",
   r"$(-x^2)^2=x^4$, així que el resultat és $x^4-25$."],
  [r"$(-x^2+5)(-x^2-5)=(-x^2)^2-5^2=x^4-25$ (equivalent a "
   r"$(x^2-5)(x^2+5)$, que no es pot factoritzar més amb enters)"],
  ex_text=E74)
