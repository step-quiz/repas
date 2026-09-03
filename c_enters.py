# -*- coding: utf-8 -*-
"""Bloc A — Nombres enters. Exercicis 1–4 del Full 1 (19 ítems)."""

from lib import Q, D, ev, tex, F, dificultats

# --------------------------------------------------------------------
# Dificultat de cada exercici (1 directa, 2 encadenada, 3 completa).
# Full 1 · nombres enters
# Vegeu l'escala completa a lib.py. L'itinerari fa servir aquest camp
# per graduar el recorregut, de manera que canviar-hi un número canvia
# l'ordre en què l'alumne es troba els exercicis.
# --------------------------------------------------------------------
dificultats({
      1: 1,  # cadena d'operacions amb signes, en una línia
      2: 2,  # parèntesis i claudàtors: cal respectar la jerarquia
      3: 2,  # hi entren potències, a més dels claudàtors
      4: 3,  # troba el pas equivocat i justifica'l
})


B = "enters"

# ================================================================ Exercici 1
E1 = "Resol les operacions següents."

P_SIGNES = ("Recorda la regla dels signes del producte i del quocient: "
            "iguals donen $+$, diferents donen $-$.")

Q("1a", 1, "a", B, "A", r"$(-13) \cdot (+3) - (-12) \cdot (+7)$",
  ev("(-13)*3 - (-12)*7"),
  [D(ev("(-13)*3 - 12*7"), "RESTA_PRODUCTE_NEGATIU",
     "Has restat $84$ en comptes de sumar-lo. El segon producte és $-84$, "
     "i restar-lo, $-(-84)$, vol dir sumar $84$."),
   D(ev("13*3 - (-12)*7"), "SIGNE_PRODUCTE",
     "$(-13)\\cdot(+3)$ no és $+39$: el producte d'un negatiu per un positiu és negatiu."),
   D(ev("13*3 - 12*7"), "SIGNES_INVERTITS",
     "Has aplicat la regla dels signes a l'inrevés als dos productes alhora.")],
  ["Fes primer els dos productes per separat i escriu-los amb el seu signe.",
   "Et queda $-39 - (-84)$. Restar un nombre negatiu és sumar el seu oposat."],
  [r"$(-13)\cdot(+3) = -39$ \quad i \quad $(-12)\cdot(+7) = -84$",
   r"$-39 - (-84) = -39 + 84$",
   r"$= 45$"],
  ex_text=E1)

Q("1b", 1, "b", B, "A", r"$(-3) \cdot (-12) - (-15) \cdot (-4)$",
  ev("(-3)*(-12) - (-15)*(-4)"),
  [D(ev("(-3)*(-12) + (-15)*(-4)"), "MENYS_PER_MENYS",
     "Has fet $(-15)\\cdot(-4) = -60$. Menys per menys dóna més: és $+60$, i cal restar-lo."),
   D(ev("-(3*12) - (-15)*(-4)"), "MENYS_PER_MENYS_PRIMER",
     "$(-3)\\cdot(-12)$ és $+36$, no $-36$: els dos factors són negatius."),
   D(ev("(-15)*(-4) - (-3)*(-12)"), "ORDRE_RESTA",
     "Has restat a l'inrevés ($60 - 36$). La resta no és commutativa.")],
  ["Els dos productes tenen els dos factors negatius: quin signe tindran?",
   "Queda $36 - 60$, i $60$ és més gran que $36$."],
  [r"$(-3)\cdot(-12) = +36$ \quad i \quad $(-15)\cdot(-4) = +60$",
   r"$36 - 60 = -24$"],
  ex_text=E1)

Q("1c", 1, "c", B, "A", r"$(-35) : (-7) + (-54) : (+9)$",
  ev("(-35)/(-7) + (-54)/9"),
  [D(ev("-(35/7) + (-54)/9"), "MENYS_ENTRE_MENYS",
     "$(-35):(-7)$ és $+5$: dos negatius donen quocient positiu."),
   D(ev("(-35)/(-7) + 54/9"), "SIGNE_QUOCIENT",
     "$(-54):(+9)$ és $-6$: signes diferents donen quocient negatiu."),
   D(ev("54/9 - (-35)/(-7)"), "SUMA_VALORS_ABSOLUTS",
     "Has calculat $6-5$. Suma $5 + (-6)$: quan el negatiu és més gran en "
     "valor absolut, el resultat és negatiu.")],
  ["La regla dels signes val igual per a la divisió que per al producte.",
   "Et queda $5 + (-6)$."],
  [r"$(-35):(-7) = +5$ \quad i \quad $(-54):(+9) = -6$",
   r"$5 + (-6) = -1$"],
  ex_text=E1)

Q("1d", 1, "d", B, "A", r"$[(-25) + 5 - (-4)] : (-8)$",
  ev("((-25) + 5 + 4)/(-8)"),
  [D(ev("((-25) + 5 - 4)/(-8)"), "RESTA_NEGATIU",
     "Dins del claudàtor, $-(-4)$ és $+4$, no $-4$."),
   D(ev("((-25) + 5 + 4)/8"), "MENYS_ENTRE_MENYS",
     "$-16$ dividit entre $-8$ dóna $+2$: dos negatius, quocient positiu."),
   D(ev("((-25) + 5 - 4)/8"), "RESTA_NEGATIU_I_QUOCIENT",
     "Dos errors alhora: $-(-4)$ és $+4$, i un negatiu entre un negatiu dóna positiu.")],
  ["Resol primer tot el que hi ha dins del claudàtor.",
   "Dins queda $-25 + 5 + 4 = -16$, i després divideix entre $-8$."],
  [r"$[(-25) + 5 - (-4)] = -25 + 5 + 4 = -16$",
   r"$(-16) : (-8) = 2$"],
  ex_text=E1)

Q("1e", 1, "e", B, "A", r"$[(-16) + (-9) + 5] : (-4)$",
  ev("((-16) + (-9) + 5)/(-4)"),
  [D(ev("((-16) + (-9) + 5)/4"), "MENYS_ENTRE_MENYS",
     "$-20$ entre $-4$ dóna $+5$, no $-5$."),
   D(ev("((-16) - (-9) + 5)/(-4)"), "SUMA_NEGATIU",
     "$+(-9)$ vol dir restar $9$, no sumar-lo."),
   D(ev("(-(16 + 9 + 5))/(-4)"), "SIGNE_ENGLOBAT",
     "El $+5$ no és negatiu: només ho són el $-16$ i el $-9$.")],
  ["Suma primer els tres nombres del claudàtor respectant-ne els signes.",
   "Dins queda $-20$."],
  [r"$[(-16) + (-9) + 5] = -20$",
   r"$(-20) : (-4) = 5$"],
  ex_text=E1)

Q("1f", 1, "f", B, "A", r"$[(-4) + (-3) \cdot (-6)] : 7$",
  ev("((-4) + (-3)*(-6))/7"),
  [D(ev("((-4) + (-3)*6)/7"), "MENYS_PER_MENYS",
     "$(-3)\\cdot(-6)$ és $+18$: menys per menys dóna més."),
   D(ev("((-4) + (-3))*(-6)/7"), "JERARQUIA",
     "Dins del claudàtor, la multiplicació va abans que la suma: "
     "no es fa $(-4)+(-3)$ primer."),
   D(ev("(4 + (-3)*(-6))/7"), "SIGNE_PRIMER_TERME",
     "El primer terme del claudàtor és $-4$, no $+4$.")],
  ["Dins del claudàtor, primer la multiplicació.",
   "$(-3)\\cdot(-6) = 18$, i després $-4 + 18$."],
  [r"$(-3)\cdot(-6) = +18$",
   r"$[-4 + 18] = 14$",
   r"$14 : 7 = 2$"],
  ex_text=E1)

# ================================================================ Exercici 2
E2 = "Resol les operacions."

Q("2a", 2, "a", B, "A", r"$(-11) \cdot (10 + (-7)) + 36 \cdot [(-1) - (-10)]$",
  ev("(-11)*(10 + (-7)) + 36*((-1) - (-10))"),
  [D(ev("(-11)*(10 + (-7)) + 36*((-1) - 10)"), "RESTA_NEGATIU",
     "Al segon claudàtor, $-(-10)$ és $+10$: queda $-1+10 = 9$."),
   D(ev("11*(10 + (-7)) + 36*((-1) - (-10))"), "SIGNE_PRODUCTE",
     "$(-11)\\cdot 3$ és $-33$: el primer factor és negatiu."),
   D(ev("(-11)*(10 - (-7)) + 36*((-1) - (-10))"), "SUMA_NEGATIU",
     "Al primer parèntesi, $10 + (-7)$ és $3$, no $17$.")],
  ["Resol primer els dos parèntesis; després, les dues multiplicacions.",
   "$10 + (-7) = 3$ i $(-1) - (-10) = 9$."],
  [r"$(10 + (-7)) = 3$ \quad i \quad $[(-1) - (-10)] = 9$",
   r"$(-11)\cdot 3 + 36 \cdot 9 = -33 + 324$",
   r"$= 291$"],
  ex_text=E2)

Q("2b", 2, "b", B, "A", r"$(-8) \cdot [5 - (-2)] - 48 : [6 + (-14)]$",
  ev("(-8)*(5 - (-2)) - 48/(6 + (-14))"),
  [D(ev("(-8)*(5 - 2) - 48/(6 + (-14))"), "RESTA_NEGATIU",
     "$5 - (-2)$ és $7$, no $3$: restar un negatiu és sumar."),
   D(ev("(-8)*(5 - (-2)) - 48/(-(6 + (-14)))"), "SIGNE_QUOCIENT",
     "$48 : (-8)$ és $-6$, i restar $-6$ és sumar $6$."),
   D(ev("8*(5 - (-2)) - 48/(6 + (-14))"), "SIGNE_PRODUCTE",
     "$(-8)\\cdot 7$ és $-56$: no perdis el signe del $-8$.")],
  ["Resol els dos claudàtors abans de multiplicar i dividir.",
   "$[5-(-2)] = 7$ i $[6+(-14)] = -8$."],
  [r"$[5 - (-2)] = 7$ \quad i \quad $[6 + (-14)] = -8$",
   r"$(-8)\cdot 7 - 48 : (-8) = -56 - (-6)$",
   r"$= -56 + 6 = -50$"],
  ex_text=E2)

Q("2c", 2, "c", B, "A", r"$42 : [(-6) - (-3)] + 28 : [-6 - (-8)]$",
  ev("42/((-6) - (-3)) + 28/(-6 - (-8))"),
  [D(ev("-(42/((-6) - (-3))) + 28/(-6 - (-8))"), "SIGNE_QUOCIENT",
     "$42 : (-3)$ és $-14$: signes diferents, quocient negatiu."),
   D(ev("42/((-6) - (-3)) + 28/(-6 - 8)"), "RESTA_NEGATIU",
     "Al segon claudàtor, $-6 - (-8)$ és $+2$, no $-14$."),
   D(ev("42/((-6) - 3) + 28/(-6 - (-8))"), "RESTA_NEGATIU_PRIMER",
     "Al primer claudàtor, $(-6)-(-3)$ és $-3$, no $-9$.")],
  ["Cada claudàtor primer: fixa't que hi ha dues restes de nombres negatius.",
   "$[(-6)-(-3)] = -3$ i $[-6-(-8)] = 2$."],
  [r"$[(-6) - (-3)] = -3$ \quad i \quad $[-6 - (-8)] = 2$",
   r"$42 : (-3) + 28 : 2 = -14 + 14$",
   r"$= 0$"],
  ex_text=E2)

Q("2d", 2, "d", B, "A", r"$32 \cdot [(-19) + 3] - 24 : [(-11) - (-5)]$",
  ev("32*((-19) + 3) - 24/((-11) - (-5))"),
  [D(ev("32*((-19) + 3) + 24/((-11) - (-5))"), "SIGNE_QUOCIENT",
     "$24 : (-6)$ és $-4$, i restar $-4$ és sumar $4$."),
   D(ev("32*(-(19 + 3)) - 24/((-11) - (-5))"), "SIGNE_ENGLOBAT",
     "$(-19) + 3$ és $-16$: sumar $3$ a un negatiu l'apropa a zero."),
   D(ev("-(32*((-19) + 3)) - 24/((-11) - (-5))"), "SIGNE_PRODUCTE",
     "$32 \\cdot (-16)$ és $-512$: un positiu per un negatiu dóna negatiu.")],
  ["Resol els dos claudàtors i vigila el signe del quocient.",
   "$[(-19)+3] = -16$ i $[(-11)-(-5)] = -6$."],
  [r"$[(-19) + 3] = -16$ \quad i \quad $[(-11) - (-5)] = -6$",
   r"$32 \cdot (-16) - 24 : (-6) = -512 - (-4)$",
   r"$= -512 + 4 = -508$"],
  ex_text=E2)

# ================================================================ Exercici 3
E3 = "Efectua aquestes operacions combinades."

Q("3a", 3, "a", B, "A", r"$(-5)^2 \cdot [3 + 28 \cdot (-4)]$",
  ev("(-5)**2 * (3 + 28*(-4))"),
  [D(ev("-(5**2) * (3 + 28*(-4))"), "POTENCIA_BASE_NEGATIVA",
     "$(-5)^2 = +25$: l'exponent parell fa desaparèixer el signe. "
     "$-5^2$ (sense parèntesis) sí que seria $-25$."),
   D(ev("(-5)**2 * ((3 + 28)*(-4))"), "JERARQUIA",
     "Dins del claudàtor va primer la multiplicació: $28\\cdot(-4)$, no $3+28$."),
   D(ev("(-5)**2 * (-(3 + 112))"), "SUMA_VALORS_ABSOLUTS",
     "$3 + (-112)$ és $-109$, no $-115$: els signes són diferents, cal restar.")],
  ["Comença per la potència i per la multiplicació de dins del claudàtor.",
   "$(-5)^2 = 25$ i dins queda $3 - 112$."],
  [r"$(-5)^2 = 25$ \quad i \quad $28\cdot(-4) = -112$",
   r"$[3 + (-112)] = -109$",
   r"$25 \cdot (-109) = -2725$"],
  ex_text=E3)

Q("3b", 3, "b", B, "A", r"$(+2)^2 \cdot [-5 \cdot 2 - 32 : (-8)]$",
  ev("(2)**2 * (-5*2 - 32/(-8))"),
  [D(ev("(2)**2 * (-5*2 - 32/8)"), "SIGNE_QUOCIENT",
     "$32 : (-8)$ és $-4$, i restar $-4$ és sumar $4$."),
   D(ev("(2)**2 * ((-5*2 - 32)/(-8))"), "JERARQUIA",
     "El $-32:(-8)$ només afecta el $32$, no tot el que hi ha davant."),
   D(ev("(2)**2 * (-(-10 + 4))"), "SIGNE_SUMA",
     "$-10 + 4$ és $-6$, no $+6$.")],
  ["Dins del claudàtor: primer el producte i el quocient, després la resta.",
   "$-5\\cdot 2 = -10$ i $32:(-8) = -4$, o sigui $-10 - (-4)$."],
  [r"$-5\cdot 2 = -10$ \quad i \quad $32 : (-8) = -4$",
   r"$[-10 - (-4)] = -10 + 4 = -6$",
   r"$4 \cdot (-6) = -24$"],
  ex_text=E3)

Q("3c", 3, "c", B, "A", r"$(+3)^3 : [-5 + (-7) \cdot (-2)]$",
  ev("27/(-5 + (-7)*(-2))"),
  [D(ev("9/(-5 + (-7)*(-2))"), "POTENCIA_MULTIPLICA",
     "$3^3$ és $3\\cdot 3\\cdot 3 = 27$, no $3\\cdot 3 = 9$ ni $3\\cdot 3$ vegades l'exponent."),
   D(ev("27/(-(14 - 5))"), "SIGNE_SUMA",
     "$-5 + 14$ és $+9$: el positiu és més gran en valor absolut."),
   D(ev("9/27"), "DIVISIO_INVERTIDA",
     "Has dividit al revés: és $27 : 9$, no $9 : 27$.")],
  ["Recorda que $(-7)\\cdot(-2)$ és positiu.",
   "Dins del claudàtor queda $-5 + 14$."],
  [r"$(+3)^3 = 27$ \quad i \quad $(-7)\cdot(-2) = +14$",
   r"$[-5 + 14] = 9$",
   r"$27 : 9 = 3$"],
  ex_text=E3)

Q("3d", 3, "d", B, "A", r"$(-4)^3 : [(-15) : 5 - (-45) \cdot (-9)]$",
  ev("(-4)**3/((-15)/5 - (-45)*(-9))"),
  [D(ev("(4)**3/((-15)/5 - (-45)*(-9))"), "POTENCIA_BASE_NEGATIVA",
     "$(-4)^3 = -64$: amb exponent senar, el signe negatiu es manté."),
   D(ev("(-4)**3/((-15)/5 + 405)"), "MENYS_PER_MENYS",
     "$(-45)\\cdot(-9) = +405$, i restar-lo dóna $-3 - 405$."),
   D(ev("(-4)**3/(3 - (-45)*(-9))"), "SIGNE_QUOCIENT",
     "$(-15):5$ és $-3$, no $+3$.")],
  ["Calcula la potència i, dins del claudàtor, el quocient i el producte.",
   "$(-4)^3 = -64$ i dins queda $-3 - 405$."],
  [r"$(-4)^3 = -64$",
   r"$(-15):5 = -3$ \quad i \quad $(-45)\cdot(-9) = +405$",
   r"$[-3 - 405] = -408$",
   r"$(-64) : (-408) = \dfrac{8}{51}$"],
  ex_text=E3)

# ================================================================ Exercici 4
E4 = ("Troba l'error. En cada cadena d'igualtats hi ha un pas equivocat: "
      "tria quin és.")

Q("4a", 4, "a", B, "B",
  r"$(-3) + (-5) - (-8) = -3 - 5 - 8 = -8 - 8 = -(8-8) = 0$",
  r"En treure els parèntesis: $-(-8)$ s'ha escrit $-8$ i hauria de ser $+8$.",
  [D(r"En treure els parèntesis: $+(-5)$ s'ha escrit $-5$ i hauria de ser $+5$.",
     "PARENTESI_SUMA",
     "$+(-5)$ sí que és $-5$: sumar un negatiu és restar. Aquest pas és correcte."),
   D(r"A l'últim pas: $-(8-8)$ hauria de ser $-(8+8) = -16$.",
     "ERROR_TARDA",
     "L'últim pas ja arrossega l'error anterior. El primer pas equivocat és abans, "
     "quan es treuen els parèntesis."),
   D(r"No hi ha cap error: el resultat és $0$.",
     "CAP_ERROR",
     "El resultat $0$ sí que és correcte, però s'hi ha arribat per casualitat: "
     "hi ha un pas equivocat pel camí.")],
  ["Escriu tu l'expressió sense parèntesis i compara-la amb la del full.",
   "Restar un nombre negatiu és sumar-lo: $-(-8) = +8$."],
  [r"$(-3) + (-5) - (-8) = -3 - 5 + 8$",
   r"$= -8 + 8 = 0$",
   r"El resultat final coincideix, però el desenvolupament del full és incorrecte: "
   r"escriu $-8$ on hi ha d'anar $+8$."],
  ex_text=E4)

Q("4b", 4, "b", B, "B",
  r"$-9 - (-8) - (-7 - 2) = -9 + 8 + 7 - 2 = -1 + 7 - 2 = -6 - 2 = -8$",
  r"En canviar el signe del parèntesi, el $-2$ ha de passar a $+2$.",
  [D(r"$-(-8)$ hauria de ser $-8$.", "RESTA_NEGATIU",
     "$-(-8) = +8$ és correcte: restar un negatiu és sumar."),
   D(r"Calia calcular primer $(-7-2) = -5$.", "SUMA_NEGATIUS",
     "$-7-2$ és $-9$, no $-5$: els dos termes són negatius i se sumen en valor absolut."),
   D(r"No hi ha cap error: el resultat és $-8$.", "CAP_ERROR",
     "El canvi de signe del parèntesi és incomplet, i això canvia el resultat.")],
  ["El signe $-$ davant d'un parèntesi canvia el signe de tots els termes de dins.",
   "$-(-7-2)$ és $+7+2$, no $+7-2$."],
  [r"$-(-7 - 2) = +7 + 2$",
   r"$-9 + 8 + 7 + 2 = 8$",
   r"El resultat correcte és $8$, no $-8$."],
  ex_text=E4)

Q("4c", 4, "c", B, "B",
  r"$5 - [-6 + 7 - (-2)] = 5 + 6 - 7 + 2 = 11 - 5 = 6$",
  r"En treure el claudàtor, el $-(-2)$ de dins es converteix en $-2$ fora, no en $+2$.",
  [D(r"$-(-6)$ hauria de ser $-6$.", "RESTA_NEGATIU",
     "$5 - [-6 + \\dots]$ dóna $+6$: el signe de fora canvia el $-6$ a $+6$."),
   D(r"Calia calcular primer $7 - (-2) = 5$.", "RESTA_NEGATIU_2",
     "$7-(-2)$ és $9$, no $5$."),
   D(r"No hi ha cap error: el resultat és $6$.", "CAP_ERROR",
     "Un dels termes canvia de signe malament, i el resultat correcte és $2$.")],
  ["Resol primer el claudàtor sencer i després resta'l a $5$.",
   "Dins: $-6 + 7 + 2 = 3$."],
  [r"$[-6 + 7 - (-2)] = -6 + 7 + 2 = 3$",
   r"$5 - 3 = 2$",
   r"Traient el claudàtor: $5 + 6 - 7 - 2 = 2$. El terme $-(-2)$ passa a $-2$."],
  ex_text=E4)

Q("4d", 4, "d", B, "B",
  r"$4 \cdot (-3) + (-5) \cdot (-2) = -12 - 10 = -22$",
  r"$(-5)\cdot(-2)$ és $+10$: menys per menys dóna més.",
  [D(r"$4\cdot(-3)$ hauria de ser $+12$.", "SIGNE_PRODUCTE",
     "$4\\cdot(-3) = -12$ és correcte: signes diferents, producte negatiu."),
   D(r"Calia sumar $4 + (-3)$ abans de multiplicar.", "JERARQUIA",
     "La multiplicació sempre va abans que la suma."),
   D(r"No hi ha cap error: el resultat és $-22$.", "CAP_ERROR",
     "El segon producte té el signe canviat; el resultat correcte és $-2$.")],
  ["Mira el signe de cada un dels dos productes per separat.",
   "$(-5)\\cdot(-2) = +10$."],
  [r"$4\cdot(-3) = -12$ \quad i \quad $(-5)\cdot(-2) = +10$",
   r"$-12 + 10 = -2$"],
  ex_text=E4)

Q("4e", 4, "e", B, "B",
  r"$4 - 5 \cdot (-2) = (-1) \cdot (-2) = 2$",
  r"S'ha fet $4-5$ abans de multiplicar; la multiplicació va primer.",
  [D(r"$(-1)\cdot(-2)$ hauria de ser $-2$.", "MENYS_PER_MENYS",
     "$(-1)\\cdot(-2) = +2$ està ben calculat; el problema és d'on surt aquest $-1$."),
   D(r"$5\cdot(-2) = -10$ i després $4 - (-10) = -6$.", "RESTA_NEGATIU",
     "El producte està bé, però $4-(-10)$ és $4+10 = 14$."),
   D(r"No hi ha cap error: el resultat és $2$.", "CAP_ERROR",
     "S'ha alterat l'ordre de les operacions; el resultat correcte és $14$.")],
  ["Quina operació s'ha de fer primer en $4 - 5\\cdot(-2)$?",
   "Primer $5\\cdot(-2) = -10$; després la resta."],
  [r"$5\cdot(-2) = -10$",
   r"$4 - (-10) = 4 + 10 = 14$"],
  ex_text=E4)
