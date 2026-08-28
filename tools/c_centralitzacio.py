# -*- coding: utf-8 -*-
"""c_centralitzacio.py — Full 11, blocs de centralització i dispersió.

CONTINGUT NOU, no transcrit de cap full de la font. El material de partida
no porta mitjana, mediana, moda ni desviació típica, i això és un buit gros:
són contingut de 4t d'ESO i el prerequisit directe del bloc d'estadística de
1r de batxillerat, sobretot a la modalitat de Ciències Socials. Un alumne que
faci el Full 11 sencer sortiria sabent muntar taules de freqüències i llegir
gràfics, i sense saber calcular una mitjana.

Per això els exercicis van numerats a partir del 260: els números 1–259 són
els de la font, i barrejar-hi material nou faria impossible saber d'on surt
cada cosa.

Sempre que es pot, els exercicis reutilitzen els conjunts de dades que ja
apareixen al full (els viatges del 222, les talles del 227, la plantilla del
225). Així l'alumne retroba dades que ja ha recomptat i veu que d'una mateixa
taula en surten preguntes noves; i de passada, aquests números ja estaven
verificats.

CONVENCIÓ: la variància i la desviació típica es calculen dividint per N (la
de la població), que és la que s'ensenya a l'ESO. La versió amb N-1 no surt
fins a batxillerat i aquí no s'hi entra.

Tota l'aritmètica va amb `fractions.Fraction`: les mitjanes i les variàncies
es guarden exactes i només s'arrodoneixen per escriure-les.
"""
from fractions import Fraction as F
from collections import Counter
from lib import Q, D, tex, texd, dificultats

# --------------------------------------------------------------------
# Dificultat de cada exercici (1 directa, 2 encadenada, 3 completa).
# Full 11 · centralització i dispersió
# --------------------------------------------------------------------
dificultats({
    260: 1,  # mitjana d'una llista curta: sumar i dividir
    261: 1,  # mediana: ordenar i buscar el del mig
    262: 1,  # moda: el valor que més es repeteix
    263: 2,  # les tres mesures a partir d'una taula de freqüències
    268: 1,  # recorregut: màxim menys mínim
    265: 2,  # mitjana ponderada: cada nota amb el seu pes
    269: 2,  # desviacions respecte de la mitjana
    270: 2,  # variància i desviació típica d'una llista curta
    272: 2,  # comparar dos grups amb la mateixa mitjana
    264: 3,  # decidir QUINA mesura respon la pregunta
    266: 3,  # com afecta un valor extrem a cada mesura
    267: 3,  # a l'inrevés: de la mitjana a la dada que falta
    271: 3,  # desviació típica des de la taula de freqüències
    273: 3,  # coeficient de variació: dispersió relativa
    274: 3,  # què li passa a cada mesura si es transformen les dades
})

B1 = "centralitzacio"
B2 = "dispersio"


# ---------------------------------------------------------------- utilitats
def mitjana(v):
    return F(sum(v), len(v))


def mediana(v):
    o, n = sorted(v), len(v)
    return F(o[n // 2]) if n % 2 else F(o[n // 2 - 1] + o[n // 2], 2)


def modes(v):
    c = Counter(v)
    m = max(c.values())
    return sorted(x for x, f in c.items() if f == m), m


def variancia(v):
    m = mitjana(v)
    return F(sum((F(x) - m) ** 2 for x in v), len(v))


def llista_tex(v):
    return "$" + ",\\;".join(str(x) for x in v) + "$"


def arrel_tex(q, dec=2):
    """Arrel d'un racional: sempre aproximada, perquè gairebé mai és exacta."""
    return texd(float(q) ** 0.5, dec)


# =============================================================== Exercici 260
E260 = ("Calcula la mitjana aritmètica de cada llista de dades. Si no dona "
        "exacta, deixa-la en forma de fracció.")

# Les llistes estan triades perquè la mitjana, la mediana, la suma i la
# "mitjana dels valors diferents" donin quatre nombres distints: si algun
# coincidís, dues opcions serien iguals i el _valida() de lib.py ho aturaria
# (i, pitjor, l'ítem no distingiria l'error que vol distingir).
_260 = {
    "a": [3, 5, 5, 8, 9],
    "b": [6, 2, 7, 4, 6],
    "c": [5, 7, 7, 9, 2, 6],
    "d": [8, 3, 5, 5, 9],
}
for _ap, _v in _260.items():
    _m = mitjana(_v)
    _n, _s = len(_v), sum(_v)
    Q("260%s" % _ap, 260, _ap, B1, "A",
      llista_tex(_v),
      "$%s$" % tex(_m),
      [D("$%s$" % tex(F(_s, len(set(_v)))), "DIVIDIT_PER_VALORS_DIFERENTS",
         "Has dividit pels valors DIFERENTS que hi ha ($%d$), no per les dades "
         "que hi ha ($%d$). A la mitjana, un valor repetit compta cada vegada "
         "que apareix." % (len(set(_v)), _n)),
       D("$%s$" % tex(mediana(_v)), "MEDIANA_PER_MITJANA",
         "Això és la mediana (el valor del mig un cop ordenades), no la "
         "mitjana. La mitjana surt de sumar-ho tot i dividir per $%d$." % _n),
       D("$%d$" % _s, "PAS_INTERMEDI_PER_RESPOSTA",
         "Aquesta és la suma de totes les dades: encara falta dividir-la "
         "per $%d$." % _n)],
      ["Suma totes les dades i divideix el resultat pel nombre de dades.",
       "Aquí hi ha $%d$ dades i sumen $%d$." % (_n, _s)],
      ["$\\bar{x}=\\dfrac{%s}{%d}=\\dfrac{%d}{%d}=%s$"
       % ("+".join(str(x) for x in _v), _n, _s, _n, tex(_m))],
      ex_text=E260)


# =============================================================== Exercici 261
E261 = ("Calcula la mediana de cada llista. Fixa't que les dades no venen "
        "ordenades.")

# Igual que a l'exercici 260, les llistes estan triades perquè les quatre
# opcions (mediana, "mediana" sense ordenar, mitjana i recorregut) donin
# quatre nombres enters i diferents. Que totes quatre siguin enteres importa:
# si tres fossin senceres i una fracció, la fracció cantaria.
_261 = {
    "a": [3, 6, 19, 2, 10],           # senar
    "b": [18, 4, 14, 12],             # parell: mitjana dels dos centrals
    "c": [14, 14, 15, 1, 8, 7, 18],   # senar amb repeticions
    "d": [9, 5, 17, 7, 2, 20],        # parell
}
for _ap, _v in _261.items():
    _o, _n = sorted(_v), len(_v)
    _md = mediana(_v)
    _senar = _n % 2 == 1
    _centre = ("el valor que ocupa el lloc $%d$" % (_n // 2 + 1) if _senar
               else "la mitjana dels que ocupen els llocs $%d$ i $%d$"
                    % (_n // 2, _n // 2 + 1))
    Q("261%s" % _ap, 261, _ap, B1, "A",
      llista_tex(_v),
      "$%s$" % tex(_md),
      [D("$%s$" % tex(F(_v[_n // 2]) if _senar else F(_v[_n // 2 - 1] + _v[_n // 2], 2)),
         "MEDIANA_SENSE_ORDENAR",
         "Has agafat el valor del mig de la llista TAL COM ve. La mediana es "
         "busca sobre les dades ORDENADES: $%s$."
         % ",\\;".join(str(x) for x in _o)),
       D("$%s$" % tex(mitjana(_v)), "MEDIANA_PER_MITJANA",
         "Això és la mitjana, no la mediana. La mediana no es calcula: es "
         "busca, un cop les dades estan ordenades."),
       D("$%d$" % (max(_v) - min(_v)), "RANG_PER_MEDIANA",
         "Això és el recorregut (el més gran menys el més petit), que mesura "
         "com d'esteses estan les dades, no on és el centre.")],
      ["Ordena primer les dades de menor a major.",
       "Ordenades queden $%s$. Com que n'hi ha $%d$, la mediana és %s."
       % (",\\;".join(str(x) for x in _o), _n, _centre)],
      ["Ordenades: $%s$" % ",\\;".join(str(x) for x in _o),
       "Hi ha $%d$ dades, així que la mediana és %s: $%s$"
       % (_n, _centre, tex(_md))],
      ex_text=E261)


# =============================================================== Exercici 262
E262 = "Quina és la moda de cada llista?"

# A cada llista, la moda, la seva freqüència, la mediana i el valor màxim
# han de ser quatre nombres diferents, o dues opcions coincidirien.
_262 = [
    ("a", [8, 4, 4, 5, 4, 5, 9], "$4$", None),
    ("b", [4, 4, 6, 6, 2, 9], "$4$ i $6$", "bimodal"),
    ("c", [1, 2, 3, 4, 5], "No en té: totes les dades surten una vegada",
     "amodal"),
    ("d", [9, 9, 2, 5, 2, 2, 7], "$2$", None),
]
for _ap, _v, _sol, _cas in _262:
    _md, _f = modes(_v)
    _c = Counter(_v)
    Q("262%s" % _ap, 262, _ap, B1, "A",
      llista_tex(_v),
      _sol,
      [D("$%d$" % _f, "MODA_PER_FREQUENCIA",
         "Has donat quantes vegades es repeteix, no QUIN valor es repeteix. "
         "La moda és la dada, no el seu recompte."),
       D("$%s$" % tex(mediana(_v)), "MEDIANA_PER_MODA",
         "Això és la mediana (el valor central un cop ordenades). La moda és "
         "el valor que surt més vegades, estigui on estigui."),
       D("$%d$" % max(_v), "EL_MES_GRAN",
         "El més gran de tots no té res a veure amb la moda: el que compta és "
         "quantes vegades surt cada valor, no com de gran és.")],
      ["Compta quantes vegades apareix cada valor.",
       "Recompte: %s." % ", ".join("$%d$ surt %d cop%s" % (k, _c[k], "s" if _c[k] > 1 else "")
                                   for k in sorted(_c))],
      ["Recompte: %s" % ", ".join("$%d\\to%d$" % (k, _c[k]) for k in sorted(_c)),
       ("Cap valor no destaca: la distribució és amodal" if _cas == "amodal"
        else ("Hi ha dos valors amb la freqüència màxima ($%d$): la distribució "
              "és bimodal" % _f if _cas == "bimodal"
              else "La freqüència màxima és $%d$, i li correspon el valor $%d$"
                   % (_f, _md[0])))],
      ex_text=E262,
      nota=("Una distribució pot tenir més d'una moda, o no tenir-ne cap. "
            "No és cap error del càlcul: és una propietat de les dades."
            if _cas else ""))


# =============================================================== Exercici 263
VIATGES = [3, 5, 4, 4, 2, 6, 1, 2, 3, 3, 3, 3, 3, 5, 2, 6, 5, 4, 4, 3]
_cv = Counter(VIATGES)
_taula = ", ".join("$x_i=%d$ amb $f_i=%d$" % (k, _cv[k]) for k in sorted(_cv))
E263 = ("Torna a l'exercici 222, el dels viatges que ha fet cada alumne. La "
        "taula de freqüències és: " + _taula + ". Calcula, a partir de la "
        "taula:")

_m263, _md263 = mitjana(VIATGES), mediana(VIATGES)
_mo263, _f263 = modes(VIATGES)
_prod = "+".join("%d\\cdot%d" % (k, _cv[k]) for k in sorted(_cv))

Q("263a", 263, "a", B1, "A",
  "La mitjana de viatges per alumne.",
  "$%s=%s$" % (tex(_m263), texd(_m263, 2)),
  [D("$%s$" % tex(F(sum(sorted(_cv)), len(_cv))), "FREQUENCIA_NO_PONDERADA",
     "Has fet la mitjana dels VALORS diferents ($1,2,3,4,5,6$) sense tenir en "
     "compte quantes vegades surt cadascun. Cada valor s'ha de multiplicar "
     "per la seva freqüència."),
   D("$%s$" % tex(_md263), "MEDIANA_PER_MITJANA",
     "Això és la mediana. La mitjana surt de $\\dfrac{\\sum x_i f_i}{N}$."),
   D("$%d$" % sum(VIATGES), "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquesta és la suma $\\sum x_i f_i$: encara falta dividir-la entre "
     "$N=20$.")],
  ["Amb una taula de freqüències, la mitjana és "
   "$\\bar{x}=\\dfrac{\\sum x_i f_i}{N}$.",
   "Multiplica cada valor per la seva freqüència, suma-ho tot i divideix "
   "entre $N=20$."],
  ["$\\sum x_i f_i=%s=%d$" % (_prod, sum(VIATGES)),
   "$\\bar{x}=\\dfrac{%d}{20}=%s=%s$ viatges"
   % (sum(VIATGES), tex(_m263), texd(_m263, 2))],
  ex_text=E263)

_ac, _acum = 0, []
for _k in sorted(_cv):
    _ac += _cv[_k]
    _acum.append("$F(%d)=%d$" % (_k, _ac))

Q("263b", 263, "b", B1, "A",
  "La mediana.",
  "$%s$" % tex(_md263),
  [D("$%s$" % tex(_m263), "MEDIANA_PER_MITJANA",
     "Això és la mitjana. La mediana és el valor que deixa la meitat de les "
     "dades a cada banda."),
   D("$4$", "ACUMULADA_MAL_LLEGIDA",
     "Amb $N=20$, la mediana és la mitjana de les dades que ocupen els llocs "
     "$10$ i $11$. Mira les freqüències acumulades: totes dues cauen dins "
     "del valor $3$, no del $4$."),
   D("$%d$" % _f263, "MODA_PER_FREQUENCIA",
     "Aquest és el nombre de vegades que es repeteix la moda, no cap dada.")],
  ["Amb $N=20$ (parell), la mediana és la mitjana de les dades que ocupen "
   "els llocs $10$ i $11$.",
   "Fes servir les freqüències acumulades per veure dins de quin valor cauen "
   "aquests dos llocs: %s." % ", ".join(_acum)],
  ["Acumulades: %s" % ", ".join(_acum),
   "Els llocs $10$ i $11$ cauen tots dos dins del valor $3$, "
   "així que la mediana és $3$"],
  ex_text=E263)

Q("263c", 263, "c", B1, "A",
  "La moda.",
  "$%d$" % _mo263[0],
  [D("$%d$" % _f263, "MODA_PER_FREQUENCIA",
     "Has donat la freqüència màxima ($%d$ alumnes), no el valor que la té." % _f263),
   D("$6$", "EL_MES_GRAN",
     "El $6$ és el nombre de viatges més alt, però només l'han fet $2$ "
     "alumnes. La moda és el valor MÉS REPETIT, no el més gran."),
   D("$%s$" % tex(_m263), "MEDIANA_PER_MODA",
     "Aquesta és la mitjana. La moda ha de ser un dels valors de la taula.")],
  ["Busca la freqüència més alta de la taula.",
   "La freqüència màxima és $%d$." % _f263],
  ["La freqüència més alta és $f_i=%d$, i li correspon el valor $x_i=%d$"
   % (_f263, _mo263[0])],
  ex_text=E263)


# =============================================================== Exercici 264
CALCAT = [37, 40, 39, 37, 38, 38, 38, 41, 42, 37, 43, 40, 38, 38, 38, 40,
          37, 37, 38, 38]
_mc, _mdc = mitjana(CALCAT), mediana(CALCAT)
_moc, _fc = modes(CALCAT)

Q("264", 264, "", B1, "B",
  "Una sabateria ha venut aquestes talles de calçat en una setmana: "
  + ",\\;".join(str(x) for x in sorted(CALCAT)) +
  ". El botiguer ha de decidir de quina talla encarrega més parells. "
  "Quina mesura l'ajuda a decidir-ho, i quin valor surt?",
  "La MODA: la talla $%d$, que és la que ha venut més vegades ($%d$ parells)."
  % (_moc[0], _fc),
  [D("La MITJANA: la talla $%s$." % texd(_mc, 1), "MESURA_MAL_TRIADA",
     "La mitjana val $%s$, i les talles són nombres sencers: no existeix "
     "aquesta talla i no en pot encarregar cap parell. Quan les dades són "
     "categories o valors sencers que no admeten mitges, la mesura que "
     "respon és la moda." % texd(_mc, 1)),
   D("La MEDIANA: la talla $%s$." % tex(_mdc), "MESURA_MAL_TRIADA",
     "La mediana parteix les vendes en dues meitats, però no diu quina talla "
     "s'ha venut més. Aquí coincideix que val $%s$, però hi arriba per un "
     "motiu que no és el que es pregunta." % tex(_mdc)),
   D("El RECORREGUT: $%d$ talles." % (max(CALCAT) - min(CALCAT)),
     "MESURA_MAL_TRIADA",
     "El recorregut diu quantes talles diferents abasta la venda, no quina "
     "s'ha de reposar.")],
  ["Pensa què vol saber el botiguer: no quin és el valor central, sinó quin "
   "és el que es repeteix més.",
   "Compta quantes vegades apareix cada talla."],
  ["Recompte: %s" % ", ".join("$%d\\to%d$" % (k, Counter(CALCAT)[k])
                              for k in sorted(set(CALCAT))),
   "La talla més venuda és la $%d$, amb $%d$ parells: aquesta és la moda"
   % (_moc[0], _fc),
   "La mitjana ($%s$) no serveix aquí perquè no hi ha talles decimals"
   % texd(_mc, 1)],
  ex_text="",
  nota="Aquest exercici no demana calcular sinó TRIAR. Les tres mesures es "
       "poden calcular sempre; la gràcia és saber quina respon la pregunta "
       "que t'han fet.")


# =============================================================== Exercici 265
E265 = ("A matemàtiques, la nota del trimestre surt de tres parts amb pesos "
        "diferents. Calcula la nota final.")

_265 = [
    ("a", [("proves", 6, 50), ("feina", 8, 30), ("actitud", 9, 20)]),
    ("b", [("proves", 4, 60), ("feina", 7, 25), ("actitud", 8, 15)]),
]
for _ap, _parts in _265:
    _tot = sum(F(n * p, 100) for _, n, p in _parts)
    _simple = mitjana([n for _, n, _p in _parts])
    _det = ", ".join("%s $%d$ (pes $%d\\,\\%%$)" % (nom, n, p) for nom, n, p in _parts)
    Q("265%s" % _ap, 265, _ap, B1, "A",
      _det + ".",
      "$%s$" % texd(_tot, 2),
      [D("$%s$" % texd(_simple, 2), "PES_IGNORAT",
         "Has fet la mitjana de les tres notes com si totes valguessin el "
         "mateix. Cada part té el seu pes: la de $%d\\,\\%%$ compta molt més "
         "que la de $%d\\,\\%%$." % (max(p for _, _n, p in _parts),
                                     min(p for _, _n, p in _parts))),
       D("$%s$" % texd(sum(F(n * p, 100) for _, n, p in _parts) * 3, 2),
         "DIVISIO_SOBRERA",
         "Amb pesos que sumen $100\\,\\%%$, la suma ponderada JA és la nota: "
         "no s'ha de tornar a dividir ni multiplicar per res."),
       D("$%s$" % texd(F(sum(n * p for _, n, p in _parts),
                         sum(p for _, _n, p in _parts)) * 0 +
                       F(sum(n for _, n, _p in _parts) *
                         max(p for _, _n, p in _parts), 100), 2),
         "PES_MAL_APLICAT",
         "Sembla que has aplicat el mateix pes a totes les notes. Cada nota "
         "va amb el seu.")],
      ["Passa cada pes a decimal ($50\\,\\%\\to0{,}5$) i multiplica'l per la "
       "seva nota.",
       "Suma els tres productes. Com que els pesos sumen $100\\,\\%$, el "
       "resultat ja és la nota final."],
      ["$" + "+".join(r"%d\cdot%s" % (n, texd(F(p, 100), 2))
                      for _, n, p in _parts) + "=%s$" % texd(_tot, 2)],
      ex_text=E265)


# =============================================================== Exercici 266
E266 = ("Un grup de $5$ amics compara quants llibres ha llegit l'últim any: "
        "$3,\\;4,\\;5,\\;6,\\;7$. S'hi afegeix un sisè amic que n'ha llegit "
        "$60$.")

_base = [3, 4, 5, 6, 7]
_ampl = _base + [60]

Q("266a", 266, "a", B1, "A",
  "Què li passa a la mitjana?",
  "Puja de $%s$ a $%s$: gairebé es triplica."
  % (tex(mitjana(_base)), texd(mitjana(_ampl), 2)),
  [D("Es queda pràcticament igual.", "EXTREM_SENSE_EFECTE",
     "La mitjana sí que se'n ressent, i molt: passa de $%s$ a $%s$. Com que "
     "surt de sumar-ho tot, una dada molt gran l'estira cap amunt."
     % (tex(mitjana(_base)), texd(mitjana(_ampl), 2))),
   D("Puja de $%s$ a $%d$." % (tex(mitjana(_base)), 60), "PAS_INTERMEDI_PER_RESPOSTA",
     "El $60$ és la dada nova, no la mitjana nova. La mitjana continua sent "
     "un valor entremig de totes les dades."),
   D("Baixa, perquè ara hi ha més dades.", "VEREDICTE_INVERTIT",
     "Tenir més dades no fa baixar la mitjana per si sol: depèn de si la dada "
     "nova és més gran o més petita que la mitjana que hi havia.")],
  ["Calcula la mitjana abans i després d'afegir el $60$.",
   "Abans: $\\dfrac{25}{5}$. Després: $\\dfrac{85}{6}$."],
  ["Abans: $\\bar{x}=\\dfrac{3+4+5+6+7}{5}=\\dfrac{25}{5}=5$",
   "Després: $\\bar{x}=\\dfrac{25+60}{6}=\\dfrac{85}{6}\\approx%s$"
   % texd(mitjana(_ampl), 2)],
  ex_text=E266)

Q("266b", 266, "b", B1, "A",
  "I què li passa a la mediana?",
  "Puja molt poc: de $5$ a $%s$." % tex(mediana(_ampl)),
  [D("Puja tant com la mitjana.", "EXTREM_SENSE_EFECTE",
     "La mediana només mira quin valor queda al mig: que l'últim sigui $8$ o "
     "$60$ no la mou. Per això es diu que és RESISTENT als valors extrems."),
   D("Es queda exactament a $5$.", "MEDIANA_SENSE_ORDENAR",
     "Gairebé: passar de $5$ a $6$ dades canvia com es busca el centre. Amb "
     "$6$ dades cal fer la mitjana de les dues centrals, $5$ i $6$."),
   D("Baixa a $4$.", "VEREDICTE_INVERTIT",
     "Afegir una dada per damunt de totes desplaça el centre cap amunt, no "
     "cap avall.")],
  ["Ordena les $6$ dades i busca el centre.",
   "Amb $6$ dades, la mediana és la mitjana de les que ocupen els llocs "
   "$3$ i $4$."],
  ["Ordenades: $3,\\;4,\\;5,\\;6,\\;7,\\;60$",
   "Mediana $=\\dfrac{5+6}{2}=%s$" % tex(mediana(_ampl)),
   "La mitjana s'ha mogut $%s$ punts i la mediana només $%s$: quan hi ha "
   "valors extrems, la mediana descriu millor el grup"
   % (texd(mitjana(_ampl) - mitjana(_base), 2),
      texd(mediana(_ampl) - mediana(_base), 1))],
  ex_text=E266,
  nota="Aquesta diferència és el motiu pel qual els sous o els preus dels "
       "pisos es donen sovint amb la mediana i no amb la mitjana: quatre "
       "valors molt alts poden desplaçar la mitjana i fer-la poc "
       "representativa del que li passa a la majoria.")


# =============================================================== Exercici 267
E267 = "Falta una dada. Esbrina-la a partir de la mitjana."

# Cal que la dada que falta no coincideixi amb cap dels tres distractors:
# la mitjana, la suma total i el resultat de multiplicar la mitjana només
# per les dades conegudes.
_267 = [
    ("a", [5, 6, 9, 4], 5, 7),        # falta 11
    ("b", [12, 8, 15, 11, 9], 6, 12), # falta 17
]
for _ap, _conegudes, _n, _mit in _267:
    _falta = _mit * _n - sum(_conegudes)
    Q("267%s" % _ap, 267, _ap, B1, "A",
      "La mitjana de $%d$ dades és $%d$. En coneixem $%d$: $%s$. Quina és "
      "l'altra?" % (_n, _mit, len(_conegudes),
                    ",\\;".join(str(x) for x in _conegudes)),
      "$%d$" % _falta,
      [D("$%d$" % (_mit * len(_conegudes) - sum(_conegudes)), "N_MAL_COMPTAT",
         "Has multiplicat la mitjana per les dades que ja coneixies ($%d$), "
         "no per totes les que hi ha ($%d$)." % (len(_conegudes), _n)),
       D("$%d$" % _mit, "PAS_INTERMEDI_PER_RESPOSTA",
         "Aquesta és la mitjana, que ja te la donaven. La dada que falta no "
         "té per què coincidir-hi."),
       D("$%d$" % (_mit * _n), "PAS_INTERMEDI_PER_RESPOSTA",
         "Aquesta és la suma de TOTES les dades: encara cal restar-hi les que "
         "ja coneixes.")],
      ["Si la mitjana de $%d$ dades és $%d$, la suma de totes ha de ser "
       "$%d\\cdot%d$." % (_n, _mit, _n, _mit),
       "Resta a aquesta suma el que ja sumen les dades conegudes."],
      ["Suma total: $%d\\cdot%d=%d$" % (_n, _mit, _n * _mit),
       "Suma coneguda: $%s=%d$" % ("+".join(str(x) for x in _conegudes),
                                   sum(_conegudes)),
       "Dada que falta: $%d-%d=%d$" % (_n * _mit, sum(_conegudes), _falta)],
      ex_text=E267)


# =============================================================== Exercici 268
E268 = ("Calcula el recorregut (o rang) de cada llista: la diferència entre "
        "la dada més gran i la més petita.")

_268 = {"a": [12, 5, 9, 20, 7], "b": [3, 3, 3, 3], "c": [-4, 10, 0, 6, -1]}
for _ap, _v in _268.items():
    _r = max(_v) - min(_v)
    Q("268%s" % _ap, 268, _ap, B2, "A",
      llista_tex(_v),
      "$%d$" % _r,
      [D("$%d$" % (max(_v) + min(_v)), "SIGNE_FINAL",
         "El recorregut és una RESTA: el més gran menys el més petit."),
       D("$%d$" % max(_v), "PAS_INTERMEDI_PER_RESPOSTA",
         # Amb un mínim negatiu, "%d-%d" escriuria "10--4". Els parèntesis
         # són obligatoris: és el mateix defecte que la resolució ja evita.
         "Aquest és el valor més gran. El recorregut és la distància entre "
         "l'extrem de dalt i el de baix: $%d-%s$."
         % (max(_v), ("(%d)" % min(_v)) if min(_v) < 0 else str(min(_v)))),
       # Amb totes les dades iguals, la mitjana val el mateix que el màxim i
       # no serveix de distractor; el parany que hi toca és un altre.
       (D("No es pot calcular: totes les dades són iguals.", "ES_POT_DETERMINAR",
          "Sí que es pot: si totes les dades valen el mateix, el més gran i el "
          "més petit coincideixen i el recorregut val $0$. Zero no vol dir "
          "\"impossible\", vol dir que no hi ha gens de dispersió.")
        if len(set(_v)) == 1 else
        D("$%s$" % tex(mitjana(_v)), "MESURA_MAL_TRIADA",
          "Això és la mitjana, que diu on és el centre. El recorregut diu com "
          "d'esteses estan les dades."))],
      ["Busca la dada més gran i la més petita.",
       "Aquí són $%d$ i $%d$." % (max(_v), min(_v))],
      ["$R=x_{\\max}-x_{\\min}=%d-(%d)=%d$" % (max(_v), min(_v), _r)
       if min(_v) < 0 else
       "$R=x_{\\max}-x_{\\min}=%d-%d=%d$" % (max(_v), min(_v), _r)],
      ex_text=E268,
      nota=("Totes les dades són iguals, així que no hi ha cap dispersió: el "
            "recorregut val $0$." if len(set(_v)) == 1 else ""))


# =============================================================== Exercici 269
E269 = ("Per a la llista $2,\\;4,\\;4,\\;4,\\;5,\\;5,\\;7,\\;9$, que té "
        "mitjana $\\bar{x}=5$:")

_269 = [2, 4, 4, 4, 5, 5, 7, 9]
_desv = [x - 5 for x in _269]

Q("269a", 269, "a", B2, "A",
  "Quant sumen les desviacions $x_i-\\bar{x}$?",
  "$0$",
  [D("$%d$" % sum(abs(d) for d in _desv), "VALOR_ABSOLUT_INDEGUT",
     "Això és la suma dels valors absoluts. Les desviacions van amb signe, i "
     "les negatives compensen les positives."),
   D("$%d$" % sum(_269), "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquesta és la suma de les dades, no la de les desviacions."),
   D("$%d$" % sum(d * d for d in _desv), "DESVIACIONS_AL_QUADRAT",
     "Això és la suma dels quadrats de les desviacions, que és el pas "
     "següent. Aquí es demanen les desviacions tal com són.")],
  ["Calcula $x_i-5$ per a cada dada i suma-ho tot.",
   "Fixa't en el signe de cada desviació: n'hi ha de negatives."],
  ["Desviacions: $%s$" % ",\\;".join(("%+d" % d) for d in _desv),
   "Suma: $0$. Sempre dona zero, i per això les desviacions no serveixen "
   "directament per mesurar la dispersió: cal elevar-les al quadrat."],
  ex_text=E269,
  nota="Que la suma de desviacions doni sempre $0$ no és casualitat d'aquesta "
       "llista: passa amb qualsevol conjunt de dades, perquè la mitjana és "
       "justament el punt que equilibra les desviacions. És el motiu pel qual "
       "la variància les eleva al quadrat.")

Q("269b", 269, "b", B2, "A",
  "I quant sumen els quadrats de les desviacions, $\\sum(x_i-\\bar{x})^2$?",
  "$%d$" % sum(d * d for d in _desv),
  [D("$0$", "DESVIACIONS_SENSE_QUADRAT",
     "Zero és la suma de les desviacions SENSE elevar al quadrat. En "
     "elevar-les, totes es tornen positives i ja no es compensen."),
   D("$%d$" % sum(abs(d) for d in _desv), "VALOR_ABSOLUT_INDEGUT",
     "Això és la suma dels valors absoluts. El quadrat de $-3$ és $9$, "
     "no $3$."),
   D("$%s$" % tex(F(sum(d * d for d in _desv), len(_269))), "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquesta ja és la variància (la suma dividida entre $N$). Aquí es demana "
     "només la suma.")],
  ["Eleva cada desviació al quadrat abans de sumar.",
   "Recorda que $(-3)^2=9$, no $-9$."],
  ["Quadrats: $%s$" % ",\\;".join(str(d * d) for d in _desv),
   "Suma: $%s=%d$" % ("+".join(str(d * d) for d in _desv),
                      sum(d * d for d in _desv))],
  ex_text=E269)


# =============================================================== Exercici 270
E270 = ("Calcula la variància i la desviació típica de cada llista. "
        "Arrodoneix la desviació típica a les centèsimes.")

_270 = {
    "a": [2, 4, 4, 4, 5, 5, 7, 9],
    "b": [10, 12, 14, 16, 18],
    "c": [4, 8, 6, 5, 3, 2, 8, 4],
}
for _ap, _v in _270.items():
    _m, _n = mitjana(_v), len(_v)
    _var = variancia(_v)
    _sd = arrel_tex(_var)
    _quads = [(F(x) - _m) ** 2 for x in _v]
    Q("270%s" % _ap, 270, _ap, B2, "A",
      llista_tex(_v),
      "$\\sigma^2=%s$, $\\sigma\\approx%s$" % (tex(_var), _sd),
      [D("$\\sigma^2=%s$, $\\sigma\\approx%s$"
         % (tex(_var), texd(_var, 2)), "ARREL_OBLIDADA",
         "La desviació típica és l'ARREL de la variància, no la variància "
         "una altra vegada: $\\sigma=\\sqrt{%s}$." % tex(_var)),
       D("$\\sigma^2=%s$, $\\sigma\\approx%s$"
         % (tex(_var * _n), arrel_tex(_var * _n)), "DIVISIO_OBLIDADA",
         "T'has quedat amb la suma dels quadrats sense dividir-la entre "
         "$N=%d$." % _n),
       D("$\\sigma^2=0$, $\\sigma=0$", "DESVIACIONS_SENSE_QUADRAT",
         "Si et dona zero és que has sumat les desviacions sense elevar-les "
         "al quadrat: aquesta suma sempre val zero.")],
      ["Calcula primer la mitjana: $\\bar{x}=%s$." % tex(_m),
       "Després $\\sigma^2=\\dfrac{\\sum(x_i-\\bar{x})^2}{N}$, i la desviació "
       "típica és l'arrel quadrada d'això."],
      ["$\\bar{x}=\\dfrac{%d}{%d}=%s$" % (sum(_v), _n, tex(_m)),
       "$\\sum(x_i-\\bar{x})^2=%s=%s$"
       % ("+".join(tex(q) for q in _quads), tex(sum(_quads))),
       "$\\sigma^2=\\dfrac{%s}{%d}=%s$" % (tex(sum(_quads)), _n, tex(_var)),
       "$\\sigma=\\sqrt{%s}\\approx%s$" % (tex(_var), _sd)],
      ex_text=E270)


# =============================================================== Exercici 271
_cc = Counter(CALCAT)
_taulac = ", ".join("$x_i=%d$ amb $f_i=%d$" % (k, _cc[k]) for k in sorted(_cc))
E271 = ("Torna a les talles de calçat de l'exercici 227. La taula és: "
        + _taulac + ", amb $N=20$ i $\\bar{x}=%s$." % texd(_mc, 1))

_varc = variancia(CALCAT)

Q("271a", 271, "a", B2, "A",
  "Calcula la variància.",
  "$%s$" % texd(_varc, 2),
  [D("$%s$" % texd(variancia(sorted(set(CALCAT))), 2), "FREQUENCIA_NO_PONDERADA",
     "Has fet servir els valors diferents sense pesar-los per la seva "
     "freqüència. Cada quadrat $(x_i-\\bar{x})^2$ s'ha de multiplicar per "
     "$f_i$ abans de sumar."),
   D("$%s$" % texd(_varc * 20, 2), "DIVISIO_OBLIDADA",
     "Aquesta és la suma $\\sum(x_i-\\bar{x})^2 f_i$ sense dividir entre "
     "$N=20$."),
   D("$%s$" % arrel_tex(_varc), "VARIANCIA_PER_DESVIACIO",
     "Això ja és la desviació típica. La variància és el valor abans de fer "
     "l'arrel.")],
  ["Amb taula de freqüències, $\\sigma^2=\\dfrac{\\sum(x_i-\\bar{x})^2 f_i}{N}$.",
   "Calcula $(x_i-%s)^2$ per a cada talla, multiplica'l per la seva "
   "freqüència i suma-ho tot." % texd(_mc, 1)],
  ["$\\sum(x_i-\\bar{x})^2 f_i=%s$" % texd(_varc * 20, 1),
   "$\\sigma^2=\\dfrac{%s}{20}=%s$" % (texd(_varc * 20, 1), texd(_varc, 2))],
  ex_text=E271)

Q("271b", 271, "b", B2, "A",
  "I la desviació típica?",
  "$\\approx%s$" % arrel_tex(_varc),
  [D("$%s$" % texd(_varc, 2), "VARIANCIA_PER_DESVIACIO",
     "Aquesta és la variància. La desviació típica n'és l'arrel quadrada."),
   D("$\\approx%s$" % texd(float(_varc) ** 2, 2), "ARREL_MAL_APLICADA",
     "Has elevat al quadrat en comptes de fer l'arrel: la desviació típica és "
     "més PETITA que la variància quan aquesta és més gran que $1$."),
   D("$%d$" % (max(CALCAT) - min(CALCAT)), "MESURA_MAL_TRIADA",
     "Això és el recorregut. També mesura dispersió, però no és la desviació "
     "típica.")],
  ["$\\sigma=\\sqrt{\\sigma^2}$.",
   "Fes l'arrel quadrada de $%s$." % texd(_varc, 2)],
  ["$\\sigma=\\sqrt{%s}\\approx%s$ talles" % (texd(_varc, 2), arrel_tex(_varc)),
   "Vol dir que, de mitjana, les talles venudes se separen poc més d'una "
   "talla de la mitjana"],
  ex_text=E271)


# =============================================================== Exercici 272
_A272 = [5, 5, 5, 5, 5, 5]
_B272 = [1, 3, 5, 5, 7, 9]
E272 = ("Dos grups de $6$ alumnes han fet el mateix examen. Grup A: "
        + ",\\;".join(str(x) for x in _A272) + ". Grup B: "
        + ",\\;".join(str(x) for x in _B272) + ".")

Q("272a", 272, "a", B2, "A",
  "Compara'n les mitjanes.",
  "Són iguals: totes dues valen $5$.",
  [D("La del grup A és més alta.", "VEREDICTE_INVERTIT",
     "Totes dues sumen $30$ entre $6$ alumnes: la mitjana és $5$ als dos "
     "grups."),
   D("La del grup B és més alta, perquè hi ha un $9$.", "EXTREM_SENSE_EFECTE",
     "El $9$ del grup B es compensa amb l'$1$: la suma continua sent $30$."),
   D("No es poden comparar perquè les dades són diferents.", "ES_POT_DETERMINAR",
     "Es poden comparar perfectament: per això serveixen les mesures de "
     "centralització.")],
  ["Calcula la mitjana de cada grup.",
   "Suma les notes de cada grup: totes dues sumen el mateix."],
  ["Grup A: $\\dfrac{30}{6}=5$", "Grup B: $\\dfrac{30}{6}=5$"],
  ex_text=E272)

Q("272b", 272, "b", B2, "A",
  "Quin grup és més regular, i com ho justifiques amb un número?",
  "El grup A: té $\\sigma=0$ i el B, $\\sigma\\approx%s$."
  % arrel_tex(variancia(_B272)),
  [D("El grup B, perquè té notes més altes.", "VEREDICTE_INVERTIT",
     "Ser regular vol dir que les notes s'assemblen entre si, no que siguin "
     "altes. Al grup B van de l'$1$ al $9$."),
   D("Són igual de regulars, perquè tenen la mateixa mitjana.",
     "MITJANA_NO_DIU_DISPERSIO",
     "La mitjana diu on és el centre, no com d'agrupades estan les dades al "
     "seu voltant. Per això calen les mesures de dispersió: dos grups amb la "
     "mateixa mitjana poden ser completament diferents."),
   D("El grup A, però no es pot posar cap número.", "ES_POT_DETERMINAR",
     "Sí que se'n pot posar: la desviació típica és exactament el número que "
     "mesura això.")],
  ["Calcula la desviació típica de cada grup.",
   "Al grup A totes les dades valen igual que la mitjana."],
  ["Grup A: totes les desviacions són $0$, així que $\\sigma^2=0$ i $\\sigma=0$",
   "Grup B: $\\sigma^2=%s$ i $\\sigma=\\sqrt{%s}\\approx%s$"
   % (tex(variancia(_B272)), tex(variancia(_B272)), arrel_tex(variancia(_B272))),
   "Com més petita és $\\sigma$, més agrupades estan les dades: el grup A és "
   "perfectament regular"],
  ex_text=E272,
  nota="Aquest parell d'exercicis és el motiu de ser de tot el bloc: dues "
       "distribucions poden tenir la mateixa mitjana i no assemblar-se gens. "
       "La mitjana tota sola gairebé mai no descriu prou bé un conjunt de "
       "dades.")


# =============================================================== Exercici 273
E273 = ("En un grup de persones s'han mesurat l'alçada (mitjana $170$ cm, "
        "$\\sigma=8$ cm) i el pes (mitjana $65$ kg, $\\sigma=8$ kg).")

Q("273a", 273, "a", B2, "A",
  "Les dues desviacions típiques valen $8$. Vol dir que les dues variables "
  "estan igual de disperses?",
  "No: $8$ cm sobre una mitjana de $170$ és molt menys, en proporció, que "
  "$8$ kg sobre una mitjana de $65$.",
  [D("Sí, perquè totes dues valen $8$.", "CV_SENSE_DIVIDIR",
     "La desviació típica va en les mateixes unitats que les dades, i per "
     "això no es poden comparar directament dues variables diferents. Cal "
     "mirar quant representa $\\sigma$ respecte de la seva mitjana."),
   D("No: el pes està menys dispers perquè la seva mitjana és més petita.",
     "VEREDICTE_INVERTIT",
     "És al revés: la mateixa desviació sobre una mitjana més petita "
     "representa una variació relativa MÉS gran."),
   D("No es pot saber sense les dades originals.", "ES_POT_DETERMINAR",
     "Amb la mitjana i la desviació típica ja n'hi ha prou: el coeficient de "
     "variació és $\\dfrac{\\sigma}{\\bar{x}}$.")],
  ["Pensa si $8$ cm de diferència en l'alçada d'una persona et sembla molt "
   "o poc, i compara-ho amb $8$ kg de diferència en el pes.",
   "Per comparar dispersions de magnituds diferents es divideix "
   "$\\sigma$ entre la mitjana."],
  ["Alçada: $\\dfrac{8}{170}\\approx%s$" % texd(F(8, 170), 4),
   "Pes: $\\dfrac{8}{65}\\approx%s$" % texd(F(8, 65), 4),
   "El pes està relativament més dispers, tot i tenir la mateixa $\\sigma$"],
  ex_text=E273)

Q("273b", 273, "b", B2, "A",
  "Calcula el coeficient de variació de cada variable, en percentatge.",
  "Alçada $\\approx%s\\,\\%%$, pes $\\approx%s\\,\\%%$"
  % (texd(F(800, 170), 1), texd(F(800, 65), 1)),
  [D("Alçada $\\approx%s\\,\\%%$, pes $\\approx%s\\,\\%%$"
     % (texd(F(17000, 8), 1), texd(F(6500, 8), 1)), "INVERTIDA",
     "Has dividit la mitjana entre la desviació típica. El coeficient de "
     "variació és $CV=\\dfrac{\\sigma}{\\bar{x}}$, no al revés."),
   D("Totes dues $\\approx8\\,\\%$", "CV_SENSE_DIVIDIR",
     "El $8$ és la desviació típica, no el coeficient. El coeficient surt de "
     "dividir-la entre la mitjana."),
   D("Alçada $\\approx%s\\,\\%%$, pes $\\approx%s\\,\\%%$"
     % (texd(F(8, 170), 3), texd(F(8, 65), 3)), "PERCENTATGE_DECIMAL_MAL",
     "Aquests són els quocients en decimal: per passar-los a percentatge "
     "encara falta multiplicar per $100$.")],
  ["$CV=\\dfrac{\\sigma}{\\bar{x}}$, i per posar-ho en percentatge es "
   "multiplica per $100$.",
   "Alçada: $\\dfrac{8}{170}$. Pes: $\\dfrac{8}{65}$."],
  ["Alçada: $CV=\\dfrac{8}{170}\\cdot100\\approx%s\\,\\%%$" % texd(F(800, 170), 1),
   "Pes: $CV=\\dfrac{8}{65}\\cdot100\\approx%s\\,\\%%$" % texd(F(800, 65), 1),
   "El pes varia gairebé el doble, en termes relatius"],
  ex_text=E273,
  nota="El coeficient de variació no té unitats, i per això serveix per "
       "comparar la dispersió de coses que es mesuren en unitats diferents. "
       "És el que et permet dir si un grup és més irregular en alçada o en "
       "pes sense comparar centímetres amb quilograms.")


# =============================================================== Exercici 274
E274 = ("Un conjunt de dades té mitjana $\\bar{x}=20$ i desviació típica "
        "$\\sigma=4$. Digues què passa en cada cas.")

Q("274a", 274, "a", B2, "A",
  "Sumem $5$ a totes les dades.",
  "La mitjana passa a $25$ i la desviació típica es queda a $4$.",
  [D("Totes dues pugen $5$: mitjana $25$ i $\\sigma=9$.",
     "CONSTANT_AFECTA_DISPERSIO",
     "Sumar el mateix a totes les dades les desplaça totes igual: les "
     "distàncies entre elles no canvien, i la dispersió tampoc."),
   D("La mitjana es queda a $20$ i $\\sigma$ passa a $9$.", "VEREDICTE_INVERTIT",
     "És just al revés: el que es mou és el centre, no l'amplada."),
   D("No canvia res.", "VEREDICTE_INVERTIT",
     "La mitjana sí que canvia: si totes les dades pugen $5$, el seu centre "
     "també.")],
  ["Imagina't les dades sobre una recta i desplaça-les totes $5$ unitats.",
   "La distància entre dues dades qualssevol, canvia?"],
  ["Nova mitjana: $20+5=25$",
   "Les desviacions $x_i-\\bar{x}$ no canvien, perquè les dades i la mitjana "
   "s'han mogut igual: $\\sigma$ es manté a $4$"],
  ex_text=E274)

Q("274b", 274, "b", B2, "A",
  "Multipliquem totes les dades per $3$.",
  "La mitjana passa a $60$ i la desviació típica, a $12$.",
  [D("Mitjana $60$ i $\\sigma=4$.", "CONSTANT_AFECTA_DISPERSIO",
     "Multiplicar sí que canvia la dispersió: si totes les dades s'estiren "
     "pel triple, les distàncies entre elles també."),
   D("Mitjana $60$ i $\\sigma=36$.", "VARIANCIA_PER_DESVIACIO",
     "El que queda multiplicat per $3^2=9$ és la VARIÀNCIA ($16\\to144$). La "
     "desviació típica queda multiplicada per $3$: $\\sigma=12$."),
   D("Mitjana $23$ i $\\sigma=7$.", "PRODUCTE_PER_SUMA",
     "Multiplicar per $3$ no és sumar $3$.")],
  ["Si totes les dades es multipliquen per $3$, on va a parar el centre?",
   "I les distàncies entre dades, què els passa?"],
  ["Nova mitjana: $20\\cdot3=60$",
   "Cada desviació queda multiplicada per $3$, i per tant $\\sigma$ també: "
   "$4\\cdot3=12$",
   "La variància, en canvi, queda multiplicada per $3^2=9$: "
   "$16\\cdot9=144=12^2$"],
  ex_text=E274)

Q("274c", 274, "c", B2, "A",
  "Afegim una dada nova que val exactament $20$.",
  "La mitjana es queda a $20$ i la desviació típica baixa una mica.",
  [D("No canvia res, ni la mitjana ni $\\sigma$.", "EXTREM_SENSE_EFECTE",
     "La mitjana no es mou, això és cert. Però ara hi ha una dada més que "
     "està exactament al centre, i això fa que, de mitjana, les dades "
     "estiguin una mica menys esteses: $\\sigma$ baixa."),
   D("La mitjana es queda a $20$ i $\\sigma$ puja.", "VEREDICTE_INVERTIT",
     "Afegir una dada que coincideix amb la mitjana no pot augmentar la "
     "dispersió: aporta una desviació de $0$."),
   D("La mitjana baixa i $\\sigma$ es queda igual.", "VEREDICTE_INVERTIT",
     "Afegir una dada igual a la mitjana no la mou en cap direcció.")],
  ["Quina desviació aporta una dada que val exactament el mateix que la "
   "mitjana?",
   "La suma dels quadrats no canvia, però el nombre de dades sí."],
  ["La dada nova aporta una desviació $20-20=0$, així que "
   "$\\sum(x_i-\\bar{x})^2$ no canvia",
   "En canvi $N$ augmenta en $1$, i com que la variància és aquesta suma "
   "dividida entre $N$, la variància baixa; i amb ella, $\\sigma$"],
  ex_text=E274)
