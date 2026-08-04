# -*- coding: utf-8 -*-
"""Bloc C — Fraccions. Exercicis 18–25 del Full 1 (41 ítems)."""

from fractions import Fraction as F
from lib import Q, D, DT, TAX, ev, tex, mcd, dificultats

# --------------------------------------------------------------------
# Dificultat de cada exercici (1 directa, 2 encadenada, 3 completa).
# Full 1 · fraccions
# Vegeu l'escala completa a lib.py. L'itinerari fa servir aquest camp
# per graduar el recorregut, de manera que canviar-hi un número canvia
# l'ordre en què l'alumne es troba els exercicis.
# --------------------------------------------------------------------
dificultats({
     18: 1,  # comprovar equivalència; 20, simplificar; 22, enter ± fracció
     19: 2,  # a l'inrevés: quin nombre falta perquè siguin equivalents
     20: 1,
     21: 2,  # parèntesis niats, i 23-25 barregen suma, producte i enters
     22: 1,
     23: 2,
     24: 2,
     25: 2,
})


B = "fraccions"

TAX["CRITERI_FALS"] = (
    "Que dues fraccions es puguin simplificar no vol dir que siguin equivalents: "
    "cal que totes dues simplifiquin a la MATEIXA fracció irreductible.")
TAX["NO_SIMPLIFICABLE"] = (
    "Sí que es pot: encara que el denominador sigui primer, pot ser un factor "
    "del numerador. Comprova sempre si el denominador divideix el numerador.")


def fr(a, b):
    """LaTeX d'una fracció tal com surt al full (sense simplificar)."""
    return r"\dfrac{%d}{%d}" % (a, b)


def FQ(qid, ex, ap, enunciat, expr, parts, variants, pistes, ex_text, final=None):
    """Ítem de càlcul amb fraccions: la resposta i tots els distractors
    surten d'avaluar expressions, mai de teclejar el resultat."""
    c = ev(expr)
    res = []
    if parts:
        res.append("Calculem cada tros: " +
                   r" \quad ".join("$%s = %s$" % (l, tex(ev(p))) for l, p in parts))
    if final:
        res.append(final)
    res.append("Resultat: $%s$" % tex(c))
    Q(qid, ex, ap, B, "A", enunciat, c,
      [DT(ev(e), t, x) for e, t, x in variants], pistes, res, ex_text=ex_text)


# =============================================================== Exercici 18
E18 = "Digues si són equivalents els parells de fraccions següents."


def item_equiv(qid, ap, a, b, c, d):
    eq = a * d == b * c
    latex = "$%s$ i $%s$" % (fr(a, b), fr(c, d))
    if eq:
        correcta = r"Sí, perquè $%d\cdot %d = %d\cdot %d$." % (a, d, b, c)
        ds = [
            D(r"No, perquè els numeradors i els denominadors no coincideixen.",
              "COMPARA_TERMES", TAX["COMPARA_TERMES"]),
            D(r"No, perquè $%d\cdot %d \ne %d\cdot %d$." % (a, c, b, d),
              "PRODUCTES_MAL_CREUATS", TAX["PRODUCTES_MAL_CREUATS"]),
            D(r"No, perquè no s'hi suma el mateix als dos termes.",
              "RAONAMENT_ADDITIU", TAX["RAONAMENT_ADDITIU"]),
        ]
    else:
        correcta = r"No, perquè $%d\cdot %d \ne %d\cdot %d$." % (a, d, b, c)
        ds = [
            D(r"Sí, perquè els productes creuats donen el mateix.",
              "PRODUCTES_CREUATS",
              r"Comprova-ho: $%d\cdot %d = %d$ i $%d\cdot %d = %d$. No coincideixen."
              % (a, d, a * d, b, c, b * c)),
            D(r"Sí, perquè d'una a l'altra s'hi suma el mateix.",
              "RAONAMENT_ADDITIU", TAX["RAONAMENT_ADDITIU"]),
            D(r"Sí, perquè totes dues es poden simplificar.",
              "CRITERI_FALS", TAX["CRITERI_FALS"]),
        ]
    Q(qid, 18, ap, B, "B", latex, correcta, ds,
      ["Dues fraccions són equivalents si els productes creuats coincideixen: "
       r"$\dfrac{a}{b} = \dfrac{c}{d}$ quan $a\cdot d = b\cdot c$.",
       "També pots simplificar-les totes dues i comparar els resultats."],
      [r"Productes creuats: $%d\cdot %d = %d$ \quad i \quad $%d\cdot %d = %d$"
       % (a, d, a * d, b, c, b * c),
       (r"Coincideixen, o sigui que són equivalents: totes dues valen $%s$."
        % tex(F(a, b))) if eq else
       (r"No coincideixen: $%s$ val $%s$ i $%s$ val $%s$."
        % (fr(a, b), tex(F(a, b)), fr(c, d), tex(F(c, d))))],
      ex_text=E18)


item_equiv("18a", "a", 6, 3, 36, 48)
item_equiv("18b", "b", 15, 12, 60, 48)
item_equiv("18c", "c", 5, 4, 15, 8)
item_equiv("18d", "d", 8, 5, 24, 10)
item_equiv("18e", "e", 9, 13, 72, 104)
item_equiv("18f", "f", 72, 25, 123, 115)

# =============================================================== Exercici 19
E19 = "Calcula el nombre que falta perquè les fraccions siguin equivalents."

Q("19a", 19, "a", B, "A", r"$\dfrac{6}{\square} = \dfrac{9}{3}$", 2,
  [DT(ev("9*3/6"), "CREUAMENT_INVERTIT",
      r"De $6\cdot 3 = 9\cdot\square$ surt $\square = \dfrac{6\cdot 3}{9}$."),
   DT(ev("6*3"), "PRODUCTE_MAL", ""),
   DT(3, "COMPARA_TERMES",
      "Has copiat el denominador de l'altra fracció.")],
  [r"Aplica els productes creuats: $6\cdot 3 = 9\cdot\square$.",
   r"$\dfrac{9}{3}$ val $3$, o sigui que $\dfrac{6}{\square}$ també ha de valer $3$."],
  [r"$6\cdot 3 = 9\cdot \square \;\Rightarrow\; 18 = 9\cdot\square$",
   r"$\square = 18 : 9 = 2$",
   r"Comprovació: $\dfrac{6}{2} = 3 = \dfrac{9}{3}$"],
  ex_text=E19)

Q("19b", 19, "b", B, "A", r"$\dfrac{4}{5} = \dfrac{\square}{10}$", 8,
  [DT(9, "RAONAMENT_ADDITIU",
      r"De $5$ a $10$ no s'hi suma $5$: es multiplica per $2$."),
   DT(ev("4*10"), "PRODUCTE_MAL", ""),
   DT(ev("5*10/4"), "CREUAMENT_INVERTIT", "")],
  [r"De $5$ a $10$, per quant s'ha multiplicat el denominador?",
   "El que facis al denominador, fes-ho al numerador."],
  [r"$5\cdot 2 = 10$, o sigui que el numerador també es multiplica per $2$.",
   r"$\square = 4\cdot 2 = 8$",
   r"Comprovació: $\dfrac{8}{10} = \dfrac{4}{5}$"],
  ex_text=E19)

Q("19c", 19, "c", B, "A", r"$\dfrac{8}{12} = \dfrac{2}{\square}$", 3,
  [DT(6, "RAONAMENT_ADDITIU",
      r"De $8$ a $2$ no s'hi resta $6$: es divideix entre $4$."),
   DT(ev("2*12"), "PRODUCTE_MAL", ""),
   DT(ev("8*2/12"), "CREUAMENT_INVERTIT", "")],
  [r"De $8$ a $2$, per quant s'ha dividit el numerador?",
   "Divideix el denominador pel mateix nombre."],
  [r"$8 : 4 = 2$, o sigui que el denominador també es divideix entre $4$.",
   r"$\square = 12 : 4 = 3$",
   r"Comprovació: $\dfrac{2}{3} = \dfrac{8}{12}$"],
  ex_text=E19)

Q("19d", 19, "d", B, "A", r"$\dfrac{\square}{9} = \dfrac{8}{18}$", 4,
  [DT(ev("8*18/9"), "CREUAMENT_INVERTIT",
      r"De $\square\cdot 18 = 9\cdot 8$ surt $\square = \dfrac{9\cdot 8}{18}$."),
   DT(ev("8*9"), "PRODUCTE_MAL", ""),
   DT(ev("9*18/8"), "CREUAMENT_INVERTIT", "")],
  [r"$18$ és el doble de $9$: què li passa al numerador?",
   r"$\square\cdot 18 = 9\cdot 8$."],
  [r"$\square\cdot 18 = 9\cdot 8 = 72$",
   r"$\square = 72 : 18 = 4$",
   r"Comprovació: $\dfrac{4}{9} = \dfrac{8}{18}$"],
  ex_text=E19)

# =============================================================== Exercici 20
E20 = "Calcula la fracció irreductible."

Q("20a", 20, "a", B, "A", r"$\dfrac{75}{30}$", F(5, 2),
  [DT(r"\dfrac{25}{10}", "SIMPLIFICACIO_INCOMPLETA", "Has dividit només entre $3$."),
   DT(r"\dfrac{15}{6}", "SIMPLIFICACIO_INCOMPLETA", "Has dividit només entre $5$."),
   DT(F(2, 5), "INVERTIDA", "")],
  [r"Busca el $\operatorname{m.c.d.}(75, 30)$ i divideix-hi els dos termes.",
   r"$75 = 3\cdot 5^{2}$ i $30 = 2\cdot 3\cdot 5$, o sigui que el m.c.d. és $15$."],
  [r"$\operatorname{m.c.d.}(75,30) = 15$",
   r"$\dfrac{75:15}{30:15} = \dfrac{5}{2}$"],
  ex_text=E20)

Q("20b", 20, "b", B, "A", r"$\dfrac{182}{48}$", F(91, 24),
  [DT(F(91, 48), "SIMPLIFICA_NOMES_NUMERADOR", ""),
   DT(F(24, 91), "INVERTIDA", ""),
   DT(F(13, 24), "SIMPLIFICA_NOMES_NUMERADOR",
      r"Has dividit el numerador entre $7$, però $24$ no és múltiple de $7$.")],
  [r"$182$ i $48$ són parells: quin és el m.c.d.?",
   r"$182 = 2\cdot 7\cdot 13$ i $48 = 2^{4}\cdot 3$: només comparteixen un $2$."],
  [r"$\operatorname{m.c.d.}(182,48) = 2$",
   r"$\dfrac{182:2}{48:2} = \dfrac{91}{24}$",
   r"$91 = 7\cdot 13$ i $24 = 2^{3}\cdot 3$ ja no tenen factors comuns."],
  ex_text=E20)

Q("20c", 20, "c", B, "A", r"$\dfrac{121}{11}$", 11,
  [D(r"No es pot simplificar, perquè $11$ és primer.", "NO_SIMPLIFICABLE",
     TAX["NO_SIMPLIFICABLE"] + r" Aquí $121 = 11^{2}$."),
   DT(F(1, 11), "INVERTIDA", ""),
   DT(110, "SIMPLIFICAR_RESTANT",
      r"Has restat $121-11$. Simplificar és DIVIDIR els dos termes pel mateix nombre.")],
  [r"$121$ és una potència de $11$.",
   r"$121 = 11\cdot 11$."],
  [r"$\dfrac{121}{11} = \dfrac{11\cdot 11}{11} = 11$",
   r"El resultat és un enter: la fracció irreductible és $\dfrac{11}{1} = 11$."],
  ex_text=E20)

# =============================================================== Exercici 21
E21 = "Fes les operacions."
P21 = ["Resol primer cada parèntesi per separat.",
       "Redueix a denominador comú: multiplica cada numerador pel mateix nombre "
       "que el seu denominador."]

FQ("21a", 21, "a",
   r"$\left(\dfrac{1}{2} + \dfrac{3}{6}\right) - \left(\dfrac{4}{5} + \dfrac{7}{3}\right)$",
   "(1/2+3/6) - (4/5+7/3)",
   [(r"\dfrac{1}{2}+\dfrac{3}{6}", "1/2+3/6"), (r"\dfrac{4}{5}+\dfrac{7}{3}", "4/5+7/3")],
   [("(1/2+3/6) - 4/5 + 7/3", "MENYS_PARENTESI", ""),
    ("(1+3)/(2+6) - (4+7)/(5+3)", "SUMA_NUMERADORS", ""),
    ("(4/5+7/3) - (1/2+3/6)", "SIGNE_FINAL", "Has restat a l'inrevés.")],
   P21, E21, final=r"Queda $1 - \dfrac{47}{15}$.")

FQ("21b", 21, "b",
   r"$\left(\dfrac{7}{3} - \dfrac{4}{5}\right) + \left(\dfrac{6}{5} + \dfrac{2}{7}\right)$",
   "(7/3-4/5) + (6/5+2/7)",
   [(r"\dfrac{7}{3}-\dfrac{4}{5}", "7/3-4/5"), (r"\dfrac{6}{5}+\dfrac{2}{7}", "6/5+2/7")],
   [("(7-4)/(3-5) + (6+2)/(5+7)", "SUMA_NUMERADORS", ""),
    ("(23+52)/105", "NUMERADORS_SENSE_AJUSTAR",
     r"Amb denominador $105$: $\dfrac{23}{15} = \dfrac{161}{105}$, no $\dfrac{23}{105}$."),
    ("(7/3-4/5) - (6/5+2/7)", "SIGNE_FINAL", "El segon parèntesi se suma, no es resta.")],
   P21, E21)

FQ("21c", 21, "c",
   r"$2 - \left[\dfrac{4}{3} - \left(\dfrac{1}{2} + \dfrac{2}{5}\right) - \dfrac{1}{3}\right]$",
   "2 - (4/3 - (1/2+2/5) - 1/3)",
   [(r"\dfrac{1}{2}+\dfrac{2}{5}", "1/2+2/5"),
    (r"\dfrac{4}{3}-\dfrac{9}{10}-\dfrac{1}{3}", "4/3-9/10-1/3")],
   [("2 - (4/3 - 1/2 + 2/5 - 1/3)", "MENYS_PARENTESI", ""),
    ("2 - (4/3 - (1+2)/(2+5) - 1/3)", "SUMA_NUMERADORS", ""),
    ("2 + (4/3 - (1/2+2/5) - 1/3)", "SIGNE_FINAL",
     "El claudàtor se suma quan hauria de restar-se.")],
   ["Comença pel parèntesi de més endins.",
    r"$\dfrac{4}{3}$ i $-\dfrac{1}{3}$ es poden ajuntar de seguida."],
   E21, final=r"Queda $2 - \dfrac{1}{10}$.")

FQ("21d", 21, "d",
   r"$\left(\dfrac{5}{4} - \dfrac{1}{5}\right) + \left(\dfrac{-1}{3} + \dfrac{2}{5} - \dfrac{1}{4}\right)$",
   "(5/4-1/5) + (-1/3+2/5-1/4)",
   [(r"\dfrac{5}{4}-\dfrac{1}{5}", "5/4-1/5"),
    (r"\dfrac{-1}{3}+\dfrac{2}{5}-\dfrac{1}{4}", "-1/3+2/5-1/4")],
   [("(21-11)/60", "NUMERADORS_SENSE_AJUSTAR",
     r"Amb denominador $60$: $\dfrac{21}{20} = \dfrac{63}{60}$."),
    ("(5/4-1/5) + (-1/3+2/5+1/4)", "SIGNE_SUMA",
     r"L'últim terme del segon parèntesi és $-\dfrac{1}{4}$."),
    ("(5/4-1/5) + (-1+2-1)/(3+5+4)", "SUMA_NUMERADORS", "")],
   P21, E21)

FQ("21e", 21, "e",
   r"$\left(\dfrac{6}{5} - \dfrac{1}{15}\right) + 2 - \left(\dfrac{1}{2} - \dfrac{1}{3} + \dfrac{5}{6}\right)$",
   "(6/5-1/15) + 2 - (1/2-1/3+5/6)",
   [(r"\dfrac{6}{5}-\dfrac{1}{15}", "6/5-1/15"),
    (r"\dfrac{1}{2}-\dfrac{1}{3}+\dfrac{5}{6}", "1/2-1/3+5/6")],
   [("(6-1)/15 + 2 - (1/2-1/3+5/6)", "NUMERADORS_SENSE_AJUSTAR",
     r"Amb denominador $15$: $\dfrac{6}{5} = \dfrac{18}{15}$."),
    ("(6/5-1/15) + 2 + (1/2-1/3+5/6)", "SIGNE_FINAL",
     "L'últim parèntesi es resta."),
    ("(6/5-1/15) + 2 - (1+1+5)/(2+3+6)", "SUMA_NUMERADORS", "")],
   P21, E21)

FQ("21f", 21, "f",
   r"$\left(\dfrac{1}{3} + \dfrac{2}{5}\right) - \dfrac{1}{4} - \left(\dfrac{5}{6} - \dfrac{7}{6}\right)$",
   "(1/3+2/5) - 1/4 - (5/6-7/6)",
   [(r"\dfrac{1}{3}+\dfrac{2}{5}", "1/3+2/5"), (r"\dfrac{5}{6}-\dfrac{7}{6}", "5/6-7/6")],
   [("(1/3+2/5) - 1/4 - 5/6 - 7/6", "MENYS_PARENTESI", ""),
    ("(1+2)/(3+5) - 1/4 - (5/6-7/6)", "SUMA_NUMERADORS", ""),
    ("(1/3+2/5) - 1/4 + (5/6-7/6)", "SIGNE_FINAL",
     r"L'últim parèntesi val $-\dfrac{1}{3}$ i es resta: $-\left(-\dfrac{1}{3}\right) = +\dfrac{1}{3}$.")],
   ["L'últim parèntesi dóna un nombre negatiu: vigila el doble signe.",
    r"$\dfrac{5}{6}-\dfrac{7}{6} = -\dfrac{1}{3}$, i restar-lo és sumar $\dfrac{1}{3}$."],
   E21)

# =============================================================== Exercici 22
E22 = "Fes aquestes operacions."
P22 = ["Escriu l'enter com una fracció de denominador $1$.",
       "Redueix les dues fraccions a denominador comú i suma els numeradors."]

FQ("22a", 22, "a", r"$-3 + \dfrac{4}{9}$", "-3 + 4/9", [],
   [("(-3+4)/9", "ENTER_AL_NUMERADOR", ""),
    ("3 - 4/9", "SIGNE_FINAL", ""),
    ("-3 - 4/9", "SIGNE_SUMA", "")],
   P22, E22, final=r"$-3 = -\dfrac{27}{9}$, o sigui $-\dfrac{27}{9} + \dfrac{4}{9}$.")

FQ("22b", 22, "b", r"$8 - \left(-\dfrac{2}{5}\right)$", "8 - (-2/5)", [],
   [("8 - 2/5", "RESTA_NEGATIU", ""),
    ("(8-2)/5", "ENTER_AL_NUMERADOR", ""),
    ("-(8 + 2/5)", "SIGNE_FINAL", "")],
   P22, E22, final=r"Restar $-\dfrac{2}{5}$ és sumar $\dfrac{2}{5}$: $\dfrac{40}{5}+\dfrac{2}{5}$.")

FQ("22c", 22, "c", r"$\dfrac{-3}{7} + (-8)$", "-3/7 + (-8)", [],
   [("-3/7 + 8", "SIGNE_SUMA", ""),
    ("(-3-8)/7", "ENTER_AL_NUMERADOR", ""),
    ("3/7 + 8", "SIGNE_FINAL", "")],
   P22, E22, final=r"$-8 = -\dfrac{56}{7}$.")

FQ("22d", 22, "d", r"$\dfrac{5}{4} - (-7)$", "5/4 - (-7)", [],
   [("5/4 - 7", "RESTA_NEGATIU", ""),
    ("(5+7)/4", "ENTER_AL_NUMERADOR", ""),
    ("-(5/4 + 7)", "SIGNE_FINAL", "")],
   P22, E22, final=r"$7 = \dfrac{28}{4}$.")

FQ("22e", 22, "e", r"$\dfrac{-4}{3} + (-6)$", "-4/3 + (-6)", [],
   [("-4/3 + 6", "SIGNE_SUMA", ""),
    ("(-4-6)/3", "ENTER_AL_NUMERADOR", ""),
    ("4/3 + 6", "SIGNE_FINAL", "")],
   P22, E22, final=r"$-6 = -\dfrac{18}{3}$.")

FQ("22f", 22, "f", r"$-\left(\dfrac{-3}{4}\right) - 2$", "-(-3/4) - 2", [],
   [("-3/4 - 2", "DOBLE_NEGATIU", ""),
    ("(3-2)/4", "ENTER_AL_NUMERADOR", ""),
    ("-(3/4) + 2", "SIGNE_FINAL", "")],
   ["Comença desfent el doble signe menys.",
    r"$-\left(-\dfrac{3}{4}\right) = +\dfrac{3}{4}$."],
   E22, final=r"Queda $\dfrac{3}{4} - \dfrac{8}{4}$.")

# =============================================================== Exercici 23
E23 = "Opera."

FQ("23a", 23, "a", r"$\dfrac{1}{3} - 2 - \left(-\dfrac{4}{9}\right)$",
   "1/3 - 2 - (-4/9)", [],
   [("1/3 - 2 - 4/9", "RESTA_NEGATIU", ""),
    ("(1-2+4)/9", "ENTER_AL_NUMERADOR", ""),
    ("-(1/3 - 2 - (-4/9))", "SIGNE_FINAL", "")],
   ["Restar una fracció negativa és sumar-la.",
    r"Denominador comú $9$: $\dfrac{3}{9} - \dfrac{18}{9} + \dfrac{4}{9}$."],
   E23)

FQ("23b", 23, "b", r"$\dfrac{5}{2} - \left(-2 + \dfrac{3}{5}\right)$",
   "5/2 - (-2 + 3/5)", [(r"-2+\dfrac{3}{5}", "-2+3/5")],
   [("5/2 + 2 + 3/5", "MENYS_PARENTESI", ""),
    ("5/2 - 2 + 3/5", "PARENTESI_NO_DISTRIBUIT", ""),
    ("-(5/2 - (-2 + 3/5))", "SIGNE_FINAL", "")],
   ["Resol primer el parèntesi, o distribueix-hi el signe menys.",
    r"$-2+\dfrac{3}{5} = -\dfrac{7}{5}$, i restar-ho és sumar $\dfrac{7}{5}$."],
   E23)

FQ("23c", 23, "c", r"$4 - \left(\dfrac{2}{3} - \dfrac{1}{4}\right)$",
   "4 - (2/3 - 1/4)", [(r"\dfrac{2}{3}-\dfrac{1}{4}", "2/3-1/4")],
   [("4 - 2/3 - 1/4", "MENYS_PARENTESI", ""),
    ("4 - (2-1)/(3-4)", "SUMA_NUMERADORS", ""),
    ("-(4 - (2/3 - 1/4))", "SIGNE_FINAL", "")],
   ["Resol el parèntesi abans de restar-lo a $4$.",
    r"$\dfrac{2}{3}-\dfrac{1}{4} = \dfrac{8-3}{12}$."],
   E23)

FQ("23d", 23, "d", r"$-7 + \left(-\dfrac{3}{2} + \dfrac{1}{7}\right)$",
   "-7 + (-3/2 + 1/7)", [(r"-\dfrac{3}{2}+\dfrac{1}{7}", "-3/2+1/7")],
   [("-7 + 3/2 + 1/7", "SIGNE_SUMA", ""),
    ("-7 - 3/2 - 1/7", "SIGNE_SUMA",
     r"L'últim terme del parèntesi és $+\dfrac{1}{7}$."),
    ("-(-7 + (-3/2 + 1/7))", "SIGNE_FINAL", "")],
   ["El parèntesi va precedit d'un $+$: els signes de dins no canvien.",
    r"Denominador comú $14$."],
   E23)

# =============================================================== Exercici 24
E24 = "Efectua les operacions."
P24 = ["Primer la multiplicació, després la suma o la resta.",
       "Per multiplicar fraccions: numerador per numerador i denominador per denominador."]

FQ("24a", 24, "a", r"$\dfrac{5}{6} \cdot \dfrac{1}{3} - 2$", "5/6*1/3 - 2",
   [(r"\dfrac{5}{6}\cdot\dfrac{1}{3}", "5/6*1/3")],
   [("5/6*(1/3 - 2)", "JERARQUIA", ""),
    ("(5*3)/(6*1) - 2", "PRODUCTE_CREUAT", ""),
    ("-(5/6*1/3 - 2)", "SIGNE_FINAL", "")],
   P24, E24)

FQ("24b", 24, "b", r"$\dfrac{7}{2} - 3 \cdot \dfrac{4}{5}$", "7/2 - 3*4/5",
   [(r"3\cdot\dfrac{4}{5}", "3*4/5")],
   [("(7/2 - 3)*4/5", "JERARQUIA", ""),
    ("7/2 - 12/15", "ENTER_MULTIPLICA_DENOMINADOR", ""),
    ("-(7/2 - 3*4/5)", "SIGNE_FINAL", "")],
   P24, E24)

FQ("24c", 24, "c", r"$4 - \dfrac{3}{2} \cdot \dfrac{7}{9}$", "4 - 3/2*7/9",
   [(r"\dfrac{3}{2}\cdot\dfrac{7}{9}", "3/2*7/9")],
   [("(4 - 3/2)*7/9", "JERARQUIA", ""),
    ("4 - (3*9)/(2*7)", "PRODUCTE_CREUAT", ""),
    ("-(4 - 3/2*7/9)", "SIGNE_FINAL", "")],
   P24, E24)

FQ("24d", 24, "d", r"$\dfrac{5}{2} - 3 \cdot \dfrac{1}{4}$", "5/2 - 3*1/4",
   [(r"3\cdot\dfrac{1}{4}", "3*1/4")],
   [("(5/2 - 3)*1/4", "JERARQUIA", ""),
    ("5/2 - 3/12", "ENTER_MULTIPLICA_DENOMINADOR", ""),
    ("-(5/2 - 3*1/4)", "SIGNE_FINAL", "")],
   P24, E24)

FQ("24e", 24, "e",
   r"$\dfrac{4}{5} \cdot \dfrac{10}{8} + \left(\dfrac{-3}{2}\right)$",
   "4/5*10/8 + (-3/2)", [(r"\dfrac{4}{5}\cdot\dfrac{10}{8}", "4/5*10/8")],
   [("(4*8)/(5*10) + (-3/2)", "PRODUCTE_CREUAT", ""),
    ("4/5*10/8 + 3/2", "SUMA_EN_LLOC_RESTA", ""),
    ("-(4/5*10/8 + (-3/2))", "SIGNE_FINAL", "")],
   P24, E24)

FQ("24f", 24, "f",
   r"$\dfrac{7}{9} \cdot \left(\dfrac{-12}{5}\right) + \left(\dfrac{-3}{4}\right)$",
   "7/9*(-12/5) + (-3/4)", [(r"\dfrac{7}{9}\cdot\dfrac{-12}{5}", "7/9*(-12/5)")],
   [("7/9*(12/5) + (-3/4)", "SIGNE_PRODUCTE", ""),
    ("(7*5)/(9*(-12)) + (-3/4)", "PRODUCTE_CREUAT", ""),
    ("7/9*(-12/5) + 3/4", "SUMA_EN_LLOC_RESTA", "")],
   P24, E24)

# =============================================================== Exercici 25
E25 = "Fes les operacions següents."

FQ("25a", 25, "a",
   r"$\dfrac{5}{3} - \left(\dfrac{2}{5} \cdot \dfrac{7}{2}\right) - \dfrac{1}{3}$",
   "5/3 - (2/5*7/2) - 1/3", [(r"\dfrac{2}{5}\cdot\dfrac{7}{2}", "2/5*7/2")],
   [("(5/3 - 2/5)*7/2 - 1/3", "JERARQUIA", ""),
    ("5/3 - (2*2)/(5*7) - 1/3", "PRODUCTE_CREUAT", ""),
    ("-(5/3 - (2/5*7/2) - 1/3)", "SIGNE_FINAL", "")],
   [r"$\dfrac{5}{3}$ i $-\dfrac{1}{3}$ es poden ajuntar directament.",
    r"$\dfrac{2}{5}\cdot\dfrac{7}{2} = \dfrac{7}{5}$."],
   E25)

FQ("25b", 25, "b",
   r"$\dfrac{5}{3} - \left(\dfrac{2}{5} \cdot \dfrac{7}{2} - \dfrac{1}{3}\right)$",
   "5/3 - (2/5*7/2 - 1/3)",
   [(r"\dfrac{2}{5}\cdot\dfrac{7}{2}-\dfrac{1}{3}", "2/5*7/2-1/3")],
   [("5/3 - 2/5*7/2 - 1/3", "MENYS_PARENTESI",
     "Fixa't que aquest és exactament el resultat de l'apartat anterior: "
     "el parèntesi canvia el problema."),
    ("5/3 - (2*2)/(5*7) + 1/3", "PRODUCTE_CREUAT", ""),
    ("-(5/3 - (2/5*7/2 - 1/3))", "SIGNE_FINAL", "")],
   ["Compara aquest apartat amb l'anterior: només canvia on és el parèntesi.",
    r"El parèntesi val $\dfrac{7}{5}-\dfrac{1}{3} = \dfrac{16}{15}$."],
   E25)

FQ("25c", 25, "c",
   r"$\left(\dfrac{2}{3} \cdot 5 - \dfrac{3}{4}\right) \cdot \dfrac{7}{2}$",
   "(2/3*5 - 3/4)*7/2", [(r"\dfrac{2}{3}\cdot 5", "2/3*5"),
                         (r"\dfrac{10}{3}-\dfrac{3}{4}", "10/3-3/4")],
   [("2/3*(5 - 3/4)*7/2", "JERARQUIA", ""),
    ("(2/15 - 3/4)*7/2", "ENTER_MULTIPLICA_DENOMINADOR", ""),
    ("-((2/3*5 - 3/4)*7/2)", "SIGNE_FINAL", "")],
   ["Resol tot el parèntesi abans de multiplicar per la fracció de fora.",
    r"$\dfrac{2}{3}\cdot 5 = \dfrac{10}{3}$."],
   E25)

FQ("25d", 25, "d",
   r"$\left(\dfrac{-7}{3}\right) \cdot \dfrac{4}{5} - 2 \cdot \dfrac{5}{3}$",
   "(-7/3)*4/5 - 2*5/3",
   [(r"\dfrac{-7}{3}\cdot\dfrac{4}{5}", "(-7/3)*4/5"), (r"2\cdot\dfrac{5}{3}", "2*5/3")],
   [("(7/3)*4/5 - 2*5/3", "SIGNE_PRODUCTE", ""),
    ("(-7/3)*4/5 - 10/6", "ENTER_MULTIPLICA_DENOMINADOR", ""),
    ("-((-7/3)*4/5 - 2*5/3)", "SIGNE_FINAL", "")],
   P24, E25)

FQ("25e", 25, "e",
   r"$\left(\dfrac{5}{4} - \dfrac{3}{8} \cdot \dfrac{4}{9}\right) - \dfrac{4}{5} \cdot 2$",
   "(5/4 - 3/8*4/9) - 4/5*2",
   [(r"\dfrac{3}{8}\cdot\dfrac{4}{9}", "3/8*4/9"), (r"\dfrac{4}{5}\cdot 2", "4/5*2")],
   [("(5/4 - 3/8)*4/9 - 4/5*2", "JERARQUIA", ""),
    ("(5/4 - 3/8*4/9) - 8/10", "ENTER_MULTIPLICA_DENOMINADOR", ""),
    ("-((5/4 - 3/8*4/9) - 4/5*2)", "SIGNE_FINAL", "")],
   ["Dins del parèntesi, primer la multiplicació.",
    r"$\dfrac{3}{8}\cdot\dfrac{4}{9} = \dfrac{12}{72} = \dfrac{1}{6}$."],
   E25)

FQ("25f", 25, "f",
   r"$-3 \cdot \dfrac{4}{15} - \left(\dfrac{7}{8} \cdot 5 - 9\right)$",
   "-3*4/15 - (7/8*5 - 9)",
   [(r"-3\cdot\dfrac{4}{15}", "-3*4/15"), (r"\dfrac{7}{8}\cdot 5-9", "7/8*5-9")],
   [("-3*4/15 - 7/8*5 - 9", "MENYS_PARENTESI", ""),
    ("-3*4/15 - (7/40*5 - 9)", "ENTER_MULTIPLICA_DENOMINADOR", ""),
    ("-(-3*4/15 - (7/8*5 - 9))", "SIGNE_FINAL", "")],
   ["El parèntesi dóna un nombre negatiu: restar-lo és sumar-lo.",
    r"$\dfrac{7}{8}\cdot 5 - 9 = \dfrac{35}{8} - \dfrac{72}{8} = -\dfrac{37}{8}$."],
   E25)
