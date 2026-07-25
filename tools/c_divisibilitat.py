# -*- coding: utf-8 -*-
"""Bloc B — Divisibilitat: descomposició, m.c.d. i m.c.m.
Exercicis 5–17 del Full 1 (26 ítems)."""

from datetime import date, timedelta
from lib import Q, D, tria, mcd, mcm, tex_factors, fx, factors

B = "divisibilitat"

# ---------------------------------------------------------------- generadors

def _llista(ns):
    return ", ".join(("$%d$" % n) for n in ns)


def item_mcd(qid, ex, ap, ns, ex_text, enunciat):
    """Ítem de m.c.d. amb distractors del catàleg d'errors habituals."""
    c = mcd(*ns)
    m = mcm(*ns)
    prod = 1
    for n in ns:
        prod *= abs(n)
    comuns = set(p for p, _ in factors(ns[0]))
    for n in ns[1:]:
        comuns &= set(p for p, _ in factors(n))
    radical = 1
    for p in sorted(comuns):
        radical *= p
    cands = [
        D(m, "MCM_EN_LLOC_DE_MCD",
          "Això és el m.c.m., el múltiple més petit. El m.c.d. és un divisor: "
          "ha de ser més petit o igual que tots els nombres."),
        D(radical, "EXPONENT_MINIM",
          "Has agafat els factors comuns però amb exponent $1$. Cal agafar-los "
          "elevats al MENOR exponent amb què apareixen, que aquí no és $1$."),
        D(prod, "PRODUCTE",
          "Has multiplicat els nombres. El m.c.d. és el divisor comú més gran, "
          "no el producte."),
        D(min(abs(n) for n in ns), "EL_MES_PETIT",
          "El més petit dels nombres només és el m.c.d. si divideix tots els altres."),
        D(max(abs(n) for n in ns), "EL_MES_GRAN",
          "El m.c.d. ha de dividir tots els nombres: no pot ser el més gran de tots."),
    ]
    desc = " · ".join("$%d = %s$" % (abs(n), tex_factors(n, sign=False)) for n in ns)
    Q(qid, ex, ap, B, "A", enunciat, c, tria(c, cands),
      ["Descompon cada nombre en factors primers.",
       "Agafa NOMÉS els factors comuns, elevats al menor exponent."],
      ["Descomposicions: " + desc,
       "Factors comuns amb el menor exponent: $\\operatorname{m.c.d.} = %s$" % (
           tex_factors(c, sign=False) if c > 1 else "1"),
       "$\\operatorname{m.c.d.} = %d$" % c],
      ex_text=ex_text,
      nota="El signe no afecta el m.c.d.: es treballa amb els valors absoluts.")


def item_mcm(qid, ex, ap, ns, ex_text, enunciat):
    c = mcm(*ns)
    d = mcd(*ns)
    prod = 1
    for n in ns:
        prod *= abs(n)
    cands = [
        D(d, "MCD_EN_LLOC_DE_MCM",
          "Això és el m.c.d., el divisor comú més gran. El m.c.m. és un múltiple: "
          "ha de ser més gran o igual que tots els nombres."),
        D(prod, "PRODUCTE",
          "Multiplicar-los sempre dóna un múltiple comú, però no el més petit "
          "(només coincideix si el m.c.d. és $1$)."),
        D(max(abs(n) for n in ns), "EL_MES_GRAN",
          "El més gran només és el m.c.m. si és múltiple de tots els altres."),
        D(sum(abs(n) for n in ns), "SUMA",
          "Has sumat els nombres; el m.c.m. no té res a veure amb la suma."),
        D(min(abs(n) for n in ns), "EL_MES_PETIT",
          "El m.c.m. ha de ser múltiple de tots: no pot ser més petit que cap d'ells."),
    ]
    desc = " · ".join("$%d = %s$" % (abs(n), tex_factors(n, sign=False)) for n in ns)
    Q(qid, ex, ap, B, "A", enunciat, c, tria(c, cands),
      ["Descompon cada nombre en factors primers.",
       "Agafa TOTS els factors, comuns i no comuns, elevats al major exponent."],
      ["Descomposicions: " + desc,
       "Tots els factors amb el major exponent: $\\operatorname{m.c.m.} = %s$"
       % tex_factors(c, sign=False),
       "$\\operatorname{m.c.m.} = %d$" % c],
      ex_text=ex_text,
      nota="El signe no afecta el m.c.m.: es treballa amb els valors absoluts.")


# ================================================================ Exercici 5
E5 = "Fes la descomposició factorial de:"

_p1, _v1 = fx((2, 1), (5, 2), (7, 1), (11, 1))
assert _v1 == 3850
_d1a, _ = fx((2, 1), (5, 1), (7, 1), (11, 1))
_d1b, _ = fx((2, 2), (5, 2), (7, 1), (11, 1))
Q("5a", 5, "a", B, "A", r"$3850$", _p1,
  [D(_d1a, "EXPONENT_OBLIDAT",
     r"Falta un $5$: $3850$ es divideix dues vegades entre $5$, no una. "
     r"Comprova-ho multiplicant."),
   D(r"2\cdot 5^{2}\cdot 77", "FACTOR_NO_PRIMER",
     r"$77$ no és primer: $77 = 7\cdot 11$. La descomposició ha d'arribar a primers."),
   D(_d1b, "EXPONENT_EXCES",
     r"$3850$ només és parell una vegada: després de dividir entre $2$ queda $1925$, imparell.")],
  ["Divideix successivament pels primers més petits: $2$, $3$, $5$, $7$, $11$…",
   "$3850 : 2 = 1925$, i $1925$ acaba en $5$."],
  [r"$3850 = 2\cdot 1925$", r"$1925 = 5\cdot 385 = 5\cdot 5\cdot 77$",
   r"$77 = 7\cdot 11$", r"$3850 = 2\cdot 5^{2}\cdot 7\cdot 11$"],
  ex_text=E5)

_p2, _v2 = fx((2, 4), (3, 3))
assert _v2 == 432
_d2b, _ = fx((2, 3), (3, 4))
Q("5b", 5, "b", B, "A", r"$-432$", "-" + _p2,
  [D(_p2, "SIGNE_PERDUT",
     "El nombre és negatiu: la descomposició ha de dur el signe $-$ al davant, "
     "perquè cap factor primer és negatiu."),
   D("-" + _d2b, "EXPONENTS_INTERCANVIATS",
     r"Has intercanviat els exponents: $2^{3}\cdot 3^{4} = 648$, no $432$."),
   D(r"-2^{4}\cdot 9", "FACTOR_NO_PRIMER",
     r"$9$ no és primer: $9 = 3^{2}$. I a més en falta un: $432 = 2^{4}\cdot 3^{3}$.")],
  ["Treu primer el signe i descompon $432$.",
   "$432 : 2 = 216 : 2 = 108 : 2 = 54 : 2 = 27$."],
  [r"$432 = 2^{4}\cdot 27$", r"$27 = 3^{3}$",
   r"$-432 = -2^{4}\cdot 3^{3}$"],
  ex_text=E5)

_p3, _v3 = fx((3, 1), (11, 1), (17, 1))
assert _v3 == 561
Q("5c", 5, "c", B, "A", r"$-561$", "-" + _p3,
  [D(_p3, "SIGNE_PERDUT",
     "El nombre és negatiu: cal escriure el signe $-$ davant de la descomposició."),
   D(r"-3\cdot 187", "FACTOR_NO_PRIMER",
     r"$187$ no és primer: $187 = 11\cdot 17$."),
   D(r"-3\cdot 11\cdot 19", "PRIMER_INCORRECTE",
     r"$3\cdot 11\cdot 19 = 627$, no $561$. Comprova sempre multiplicant.")],
  ["$561$ no és parell; prova amb el $3$ (suma de xifres $5+6+1=12$).",
   "$561 : 3 = 187$, i $187$ es divideix entre $11$."],
  [r"$561 = 3\cdot 187$", r"$187 = 11\cdot 17$",
   r"$-561 = -3\cdot 11\cdot 17$"],
  ex_text=E5)

# ============================================================== Exercicis 6-7
E6 = "Calcula el màxim comú divisor de cada parell de nombres."
item_mcd("6a", 6, "a", [45, -27], E6, r"$45$ i $-27$")
item_mcd("6b", 6, "b", [-28, 21], E6, r"$-28$ i $21$")
item_mcd("6c", 6, "c", [-18, 12], E6, r"$-18$ i $12$")

E7 = "Troba el màxim comú divisor."
item_mcd("7a", 7, "a", [6, -8, 12], E7, r"$6$, $-8$, $12$")
item_mcd("7b", 7, "b", [16, 20, -28], E7, r"$16$, $20$, $-28$")
item_mcd("7c", 7, "c", [40, -10, 25], E7, r"$40$, $-10$, $25$")

# ================================================================ Exercici 8
assert mcd(18, 12) == 6 and mcd(12, 12) == 12 and mcd(24, 12) == 12 and mcd(9, 12) == 3
Q("8", 8, "", B, "B",
  r"Si $\operatorname{m.c.d.}(x, 12) = 6$, quin d'aquests valors pot tenir $x$?",
  "18",
  [D("12", "MULTIPLE_MASSA_GRAN",
     r"Amb $x=12$: $\operatorname{m.c.d.}(12,12) = 12$, no $6$."),
   D("24", "MULTIPLE_MASSA_GRAN",
     r"Amb $x=24$: com que $24$ és múltiple de $12$, el m.c.d. és $12$."),
   D("9", "NO_MULTIPLE_DE_6",
     r"Amb $x=9$: $\operatorname{m.c.d.}(9,12) = 3$. Perquè doni $6$, $x$ ha de ser múltiple de $6$.")],
  [r"$x$ ha de ser múltiple de $6$ (si no, el $6$ no el divideix).",
   r"Però $x$ no pot ser múltiple de $12$: llavors el m.c.d. seria $12$."],
  [r"$12 = 2^{2}\cdot 3$ i cal que el m.c.d. sigui $6 = 2\cdot 3$.",
   r"$x$ ha de tenir el factor $2$ i el factor $3$, però NO $2^{2}$.",
   r"Serveixen $x = 6, 18, 30, 42\dots$ (múltiples de $6$ que no ho són de $12$). "
   r"Amb $x = 18$: $\operatorname{m.c.d.}(18,12) = 6$."],
  ex_text="Divisibilitat: condicions sobre el m.c.d.",
  nota="Hi ha infinites solucions; l'exercici en demana una de vàlida.")

# ============================================================= Exercicis 9-10
E9 = "Calcula el mínim comú múltiple."
item_mcm("9a", 9, "a", [-12, 18], E9, r"$-12$ i $18$")
item_mcm("9b", 9, "b", [15, -45], E9, r"$15$ i $-45$")
item_mcm("9c", 9, "c", [27, -18], E9, r"$27$ i $-18$")
item_mcm("9d", 9, "d", [-42, 14], E9, r"$-42$ i $14$")

E10 = "Busca el mínim comú múltiple dels nombres següents."
item_mcm("10a", 10, "a", [12, -9, 10], E10, r"$12$, $-9$, $10$")
item_mcm("10b", 10, "b", [-4, 18, 27], E10, r"$-4$, $18$, $27$")
item_mcm("10c", 10, "c", [-8, 30, 24], E10, r"$-8$, $30$, $24$")
item_mcm("10d", 10, "d", [5, -10, 25], E10, r"$5$, $-10$, $25$")

# =============================================================== Exercici 11
assert (mcd(12, 18), mcm(12, 18)) == (6, 36)
assert (mcd(6, 12), mcm(6, 12)) == (6, 12)
assert mcd(18, 36) == 18
assert (mcd(6, 30), mcm(6, 30)) == (6, 30)
Q("11", 11, "", B, "B",
  r"Quin d'aquests parells de nombres té $\operatorname{m.c.d.} = 6$ i "
  r"$\operatorname{m.c.m.} = 36$?",
  r"$12$ i $18$",
  [D(r"$6$ i $12$", "MCM_INCORRECTE",
     r"El m.c.d. sí que és $6$, però el m.c.m. és $12$, no $36$."),
   D(r"$18$ i $36$", "MCD_INCORRECTE",
     r"El m.c.m. sí que és $36$, però el m.c.d. és $18$, no $6$."),
   D(r"$6$ i $30$", "CAP_DELS_DOS",
     r"El m.c.d. és $6$, però el m.c.m. és $30$: el $30$ no és múltiple de… "
     r"revisa que el m.c.m. ha de contenir $2^{2}\cdot 3^{2}$.")],
  [r"Es compleix sempre que $\operatorname{m.c.d.}\cdot\operatorname{m.c.m.} = a\cdot b$.",
   r"Aquí $6\cdot 36 = 216$, o sigui que el producte dels dos nombres ha de ser $216$."],
  [r"$\operatorname{m.c.d.}(a,b)\cdot \operatorname{m.c.m.}(a,b) = a\cdot b = 6\cdot 36 = 216$",
   r"$12\cdot 18 = 216$ \quad i \quad $\operatorname{m.c.d.}(12,18) = 6$, "
   r"$\operatorname{m.c.m.}(12,18) = 36$",
   r"També serveix el parell $6$ i $36$."],
  ex_text=r"Troba dos nombres amb $\operatorname{m.c.d.} = 6$ i $\operatorname{m.c.m.} = 36$.",
  nota="Hi ha més d'una solució vàlida: $12$ i $18$, o bé $6$ i $36$.")

# =============================================================== Exercici 12
E12 = "Resol aquests problemes."
item_mcd("12a", 12, "a", [4, 6, 9], E12,
         r"Volem tallar tres cordes de $4$, $6$ i $9$ m en trossos iguals. "
         r"Quina és la longitud, en metres, dels trossos més grans que es poden fer?")
item_mcm("12b", 12, "b", [4, 6, 9], E12,
         r"Els llibres d'una prestatgeria es poden col·locar en piles de $4$, $6$ i $9$ "
         r"llibres sense que en sobri cap. Quina és la quantitat més petita de llibres "
         r"que hi pot haver?")

# =============================================================== Exercici 13
_c13 = mcd(432, 128)
assert _c13 == 16 and (432 // 16) * (128 // 16) == 216
assert (432 // 8) * (128 // 8) == 864
assert (432 // 4) * (128 // 4) == 3456
Q("13", 13, "", B, "A",
  r"El passadís fa $432$ cm de llarg i $128$ cm d'ample. Hi volem posar rajoles "
  r"quadrades de la mida més gran possible, sense haver-ne de tallar cap. "
  r"Quina mida tenen i quantes en calen?",
  r"$16$ cm de costat; $216$ rajoles",
  [D(r"$8$ cm de costat; $864$ rajoles", "DIVISOR_NO_MAXIM",
     r"$8$ divideix els dos costats, però no és el divisor comú MÉS GRAN: el $16$ també hi cap."),
   D(r"$16$ cm de costat; $27$ rajoles", "NOMES_UNA_DIMENSIO",
     r"$27$ és el nombre de rajoles del llarg. Cal multiplicar-lo per les $8$ files de l'ample."),
   D(r"$4$ cm de costat; $3456$ rajoles", "DIVISOR_NO_MAXIM",
     r"$4$ és divisor comú, però n'hi ha de més grans: el màxim és $16$.")],
  [r"La mida de la rajola ha de dividir exactament els dos costats: busca el m.c.d.",
   r"$432 = 2^{4}\cdot 3^{3}$ i $128 = 2^{7}$."],
  [r"$\operatorname{m.c.d.}(432,128) = 2^{4} = 16$ cm de costat",
   r"Al llarg: $432:16 = 27$ rajoles. A l'ample: $128:16 = 8$ rajoles.",
   r"$27\cdot 8 = 216$ rajoles"],
  ex_text="Problema d'aplicació del m.c.d.")

# =============================================================== Exercici 14
assert mcm(8, 9, 12) == 72
Q("14", 14, "", B, "A",
  r"L'Àlex té aproximadament $150$ fotografies. Les pot enganxar en grups de $8$, "
  r"de $9$ o de $12$ sense que li'n sobri cap. Quantes fotografies té?",
  "144",
  [D("72", "PRIMER_MULTIPLE",
     r"$72$ és el m.c.m., però l'enunciat diu «aproximadament $150$»: cal el múltiple "
     r"de $72$ més proper a $150$."),
   D("216", "MULTIPLE_LLUNYA",
     r"$216$ també serveix com a múltiple comú, però $144$ és molt més a prop de $150$."),
   D("150", "LITERAL",
     r"$150$ no és múltiple de $8$ ni de $9$ ni de $12$: l'enunciat diu «aproximadament».")],
  [r"El nombre ha de ser múltiple de $8$, de $9$ i de $12$ alhora.",
   r"Calcula el m.c.m. i després busca'n el múltiple més proper a $150$."],
  [r"$8 = 2^{3}$, $9 = 3^{2}$, $12 = 2^{2}\cdot 3$",
   r"$\operatorname{m.c.m.} = 2^{3}\cdot 3^{2} = 72$",
   r"Múltiples de $72$: $72$, $144$, $216$… El més proper a $150$ és $144$."],
  ex_text="Problema d'aplicació del m.c.m.")

# =============================================================== Exercici 15
assert mcm(30, 18) == 90
Q("15", 15, "", B, "A",
  r"Per una via passa un tren cap a Girona cada $30$ minuts i un altre cap a València "
  r"cada $18$ minuts. Si s'han creuat a les $10{:}00$, a quina hora es tornaran a creuar?",
  r"$11{:}30$",
  [D(r"$10{:}06$", "MCD_EN_LLOC_DE_MCM",
     r"$6$ minuts és el m.c.d. Cal el primer instant que és múltiple dels dos períodes: el m.c.m."),
   D(r"$10{:}48$", "SUMA",
     r"Has sumat $30+18$. Els dos trens no se sincronitzen sumant els períodes."),
   D(r"$19{:}00$", "PRODUCTE",
     r"$30\cdot 18 = 540$ min sí que és un múltiple comú, però no el més petit.")],
  [r"Busca cada quants minuts coincideixen: ha de ser múltiple de $30$ i de $18$.",
   r"$\operatorname{m.c.m.}(30,18) = 90$ minuts."],
  [r"$30 = 2\cdot 3\cdot 5$ i $18 = 2\cdot 3^{2}$",
   r"$\operatorname{m.c.m.} = 2\cdot 3^{2}\cdot 5 = 90$ minuts $= 1$ h $30$ min",
   r"$10{:}00 + 1$ h $30$ min $= 11{:}30$"],
  ex_text="Problema d'aplicació del m.c.m.")

# =============================================================== Exercici 16
_d0 = date(2025, 10, 2)
_ok = _d0 + timedelta(days=mcm(15, 20))
_x1 = _d0 + timedelta(days=mcd(15, 20))
_x2 = _d0 + timedelta(days=35)
_x3 = _d0 + timedelta(days=300)
_MESOS = ["gener", "febrer", "març", "abril", "maig", "juny", "juliol",
          "agost", "setembre", "octubre", "novembre", "desembre"]
_fmt = lambda d: "%d d'%s" % (d.day, _MESOS[d.month - 1]) \
    if _MESOS[d.month - 1][0] in "aeiou" else "%d de %s" % (d.day, _MESOS[d.month - 1])
assert mcm(15, 20) == 60 and _fmt(_ok) == "1 de desembre"
Q("16", 16, "", B, "A",
  r"En Lluís viatja a Barcelona cada $15$ dies i la seva germana Marta cada $20$ dies. "
  r"Si l'última vegada que hi van coincidir va ser el $2$ d'octubre, quin dia hi "
  r"tornaran a coincidir?",
  _fmt(_ok),
  [D(_fmt(_x1), "MCD_EN_LLOC_DE_MCM",
     r"$5$ dies és el m.c.d. La coincidència arriba al cap d'un múltiple comú de $15$ i $20$."),
   D(_fmt(_x2), "SUMA",
     r"Has sumat $15+20 = 35$ dies, però $35$ no és múltiple de $20$."),
   D(_fmt(_x3), "PRODUCTE",
     r"$15\cdot 20 = 300$ dies és múltiple comú, però no el més petit.")],
  [r"Han de passar un nombre de dies que sigui múltiple de $15$ i de $20$.",
   r"$\operatorname{m.c.m.}(15,20) = 60$ dies."],
  [r"$15 = 3\cdot 5$ i $20 = 2^{2}\cdot 5$",
   r"$\operatorname{m.c.m.} = 2^{2}\cdot 3\cdot 5 = 60$ dies",
   r"$60$ dies després del $2$ d'octubre: $29$ dies fins al $31$ d'octubre, "
   r"$30$ més fins al $30$ de novembre i $1$ més $\rightarrow$ l'1 de desembre."],
  ex_text="Problema d'aplicació del m.c.m.")

# =============================================================== Exercici 17
item_mcm("17", 17, "", [12, 18],
         "Problema d'aplicació del m.c.m.",
         r"En una carretera hi ha fanals cada $12$ m en un lateral i cada $18$ m a "
         r"l'altre. El primer fanal de cada lateral està a la mateixa altura. Quants "
         r"metres cal recórrer per trobar dos fanals l'un davant de l'altre?")
