# -*- coding: utf-8 -*-
"""c_percentatges.py — Full 6, blocs del factor multiplicador i aplicacions.

CONTINGUT NOU, no transcrit de la font. El Full 6 tenia 21 preguntes en total,
i els percentatges són el que més s'oblida i el que més surt després a física,
economia i a la vida. Aquí n'hi ha 24 més.

La idea que vertebra el bloc és el FACTOR MULTIPLICADOR: pujar un 15 % és
multiplicar per 1,15 i baixar-lo és multiplicar per 0,85. Qui ho interioritza
resol d'un cop coses que altrament demanen tres regles de tres, i sobretot
deixa de sumar percentatges que no se sumen. La resta del bloc és aquesta idea
aplicada: descomptes encadenats, IVA, variació percentual i interès.

Exercicis 275–284 (els números 1–259 són els de la font; 260–274, del Full 11).
Tota l'aritmètica va amb `fractions.Fraction`.
"""
from fractions import Fraction as F
from lib import Q, D, tex, texd, dificultats

dificultats({
    275: 1,  # el factor que correspon a cada variació
    276: 1,  # aplicar el factor: una sola operació
    277: 2,  # a l'inrevés: del preu final al de partida
    278: 2,  # quin percentatge representa una part del total
    279: 2,  # variació percentual entre dos valors
    280: 3,  # dos descomptes seguits i el descompte únic equivalent
    281: 3,  # IVA i descompte en el mateix problema
    282: 3,  # interès simple
    283: 3,  # repartiment proporcional
    284: 3,  # el parany de pujar i baixar el mateix percentatge
})

B1 = "factor_multiplicador"
B2 = "aplicacions_percentatge"


def pc(x, dec=2):
    """Percentatge amb coma catalana i sense zeros inútils."""
    return texd(x, dec).rstrip("0").rstrip("{,}") if "{,}" in texd(x, dec) else texd(x, dec)


# =============================================================== Exercici 275
E275 = ("Per quin nombre s'ha de multiplicar una quantitat per fer-hi "
        "aquesta variació?")

_275 = [
    ("a", "augmentar-la un $20\\,\\%$", F(120, 100), True, 20),
    ("b", "rebaixar-la un $35\\,\\%$", F(65, 100), False, 35),
    ("c", "augmentar-la un $7\\,\\%$", F(107, 100), True, 7),
    ("d", "rebaixar-la un $4\\,\\%$", F(96, 100), False, 4),
]
for _ap, _txt, _f, _puja, _p in _275:
    _cont = F(_p, 100)
    Q("275%s" % _ap, 275, _ap, B1, "A",
      _txt.capitalize() + ".",
      "$%s$" % texd(_f, 2),
      [D("$%s$" % texd(_cont, 2), "FACTOR_PER_PERCENTATGE",
         "Aquest factor et dona NOMÉS la part que puja o baixa, no la "
         "quantitat final. Per tenir el total cal %s: "
         "$%s$." % ("sumar-hi l'original" if _puja else "restar-la de l'original",
                    "1+%s=%s" % (texd(_cont, 2), texd(_f, 2)) if _puja
                    else "1-%s=%s" % (texd(_cont, 2), texd(_f, 2)))),
       D("$%s$" % texd(F(100 - _p, 100) if _puja else F(100 + _p, 100), 2),
         "VEREDICTE_INVERTIT",
         "Aquest és el factor de %s. Si la quantitat %s, el factor ha de ser "
         "%s que $1$." % ("rebaixar" if _puja else "augmentar",
                          "puja" if _puja else "baixa",
                          "més gran" if _puja else "més petit")),
       D("$%d$" % _p, "PERCENTATGE_DECIMAL_MAL",
         "El $%d$ és el tant per cent, no el factor. Per passar-lo a factor "
         "cal dividir-lo entre $100$ i %s a $1$."
         % (_p, "sumar-lo" if _puja else "restar-lo"))],
      ["Un percentatge es passa a decimal dividint-lo entre $100$: "
       "$%d\\,\\%%\\to%s$." % (_p, texd(_cont, 2)),
       "Si la quantitat puja, el factor és $1+$ aquest decimal; si baixa, "
       "és $1-$ aquest decimal."],
      ["$%d\\,\\%%=%s$" % (_p, texd(_cont, 2)),
       "Factor $=1%s%s=%s$" % ("+" if _puja else "-", texd(_cont, 2), texd(_f, 2))],
      ex_text=E275,
      nota=("Aquest és el bloc sencer resumit: el factor multiplicador és el "
            "nombre pel qual multipliques d'un sol cop. Puja un $20\\,\\%$ "
            "$\\to$ $\\times1{,}2$; baixa un $20\\,\\%$ $\\to$ "
            "$\\times0{,}8$." if _ap == "a" else ""))


# =============================================================== Exercici 276
E276 = "Aplica la variació amb un sol producte."

_276 = [
    ("a", 250, F(115, 100), "puja un $15\\,\\%$", 15, True),
    ("b", 80, F(75, 100), "baixa un $25\\,\\%$", 25, False),
    ("c", 1200, F(108, 100), "puja un $8\\,\\%$", 8, True),
    ("d", 45, F(60, 100), "baixa un $40\\,\\%$", 40, False),
]
for _ap, _q, _f, _txt, _p, _puja in _276:
    _res = _q * _f
    _part = _q * F(_p, 100)
    Q("276%s" % _ap, 276, _ap, B1, "A",
      "$%d$ €, i %s." % (_q, _txt),
      "$%s$ €" % texd(_res, 2),
      [D("$%s$ €" % texd(_part, 2), "FACTOR_PER_PERCENTATGE",
         "Això és només el que %s ($%d\\,\\%%$ de $%d$). El resultat és la "
         "quantitat final, no la variació."
         % ("puja" if _puja else "baixa", _p, _q)),
       D("$%s$ €" % texd(_q * (F(100 - _p, 100) if _puja else F(100 + _p, 100)), 2),
         "VEREDICTE_INVERTIT",
         "Has aplicat la variació al revés: si %s, el resultat ha de ser "
         "%s que $%d$." % ("puja" if _puja else "baixa",
                           "més gran" if _puja else "més petit", _q)),
       D("$%s$ €" % texd(_q + _p if _puja else _q - _p, 2), "PRODUCTE_PER_SUMA",
         "Has sumat o restat el $%d$ directament. El $%d$ és un tant per "
         "cent, no euros: cal calcular-ne el $%d\\,\\%%$ de $%d$."
         % (_p, _p, _p, _q))],
      ["Fes servir el factor multiplicador: $%s$." % texd(_f, 2),
       "Multiplica $%d$ per aquest factor, tot d'un cop." % _q],
      ["$%d\\cdot%s=%s$ €" % (_q, texd(_f, 2), texd(_res, 2))],
      ex_text=E276)


# =============================================================== Exercici 277
E277 = ("A l'inrevés: es coneix el preu DESPRÉS de la variació i es busca el "
        "de partida.")

_277 = [
    ("a", 66, F(110, 100), "després de pujar un $10\\,\\%$", 10, True),
    ("b", 51, F(85, 100), "després d'una rebaixa del $15\\,\\%$", 15, False),
    ("c", 189, F(90, 100), "després d'un descompte del $10\\,\\%$", 10, False),
]
for _ap, _final, _f, _txt, _p, _puja in _277:
    _ini = F(_final) / _f
    _mal = _final * (F(100 - _p, 100) if _puja else F(100 + _p, 100))
    Q("277%s" % _ap, 277, _ap, B1, "A",
      "Un article costa $%d$ € %s. Quant costava abans?" % (_final, _txt),
      "$%s$ €" % texd(_ini, 2),
      [D("$%s$ €" % texd(_mal, 2), "FACTOR_INVERS_OBLIDAT",
         "Has aplicat la variació contrària al preu final. Anar enrere no és "
         "%s el mateix percentatge: és DIVIDIR pel factor, "
         "$\\dfrac{%d}{%s}$." % ("restar" if _puja else "sumar", _final, texd(_f, 2))),
       D("$%s$ €" % texd(_final * _f, 2), "INVERTIDA",
         "Has tornat a multiplicar pel factor, i això et porta encara més "
         "lluny. Per desfer una multiplicació cal dividir."),
       D("$%d$ €" % _final, "PAS_INTERMEDI_PER_RESPOSTA",
         "Aquest és el preu que ja et donaven, el d'ara.")],
      ["El preu de partida, multiplicat pel factor $%s$, dona $%d$."
       % (texd(_f, 2), _final),
       "Per trobar el de partida, divideix: $\\dfrac{%d}{%s}$." % (_final, texd(_f, 2))],
      ["Si $x$ és el preu de partida: $x\\cdot%s=%d$" % (texd(_f, 2), _final),
       "$x=\\dfrac{%d}{%s}=%s$ €" % (_final, texd(_f, 2), texd(_ini, 2))],
      ex_text=E277,
      nota=("Aquest és l'error més habitual amb els percentatges: si un preu "
            "ha pujat un $10\\,\\%$, per tornar enrere NO es baixa un "
            "$10\\,\\%$. Comprova-ho: $60\\to66\\to59{,}4$, i no torna a "
            "$60$." if _ap == "a" else ""))


# =============================================================== Exercici 278
E278 = "Quin percentatge representa la primera quantitat de la segona?"

_278 = [("a", 18, 60), ("b", 7, 28), ("c", 45, 300), ("d", 12, 15)]
for _ap, _part, _tot in _278:
    _p = F(_part * 100, _tot)
    Q("278%s" % _ap, 278, _ap, B1, "A",
      "$%d$ de $%d$." % (_part, _tot),
      "$%s\\,\\%%$" % pc(_p),
      [D("$%s\\,\\%%$" % pc(F(_tot * 100, _part)), "INVERTIDA",
         "Has dividit al revés. El percentatge és "
         "$\\dfrac{\\text{part}}{\\text{total}}\\cdot100$, i la part va a dalt."),
       D("$%s\\,\\%%$" % pc(F(_part, _tot) * 1, 4), "PERCENTATGE_DECIMAL_MAL",
         "Aquest és el quocient en decimal: per passar-lo a percentatge "
         "encara falta multiplicar per $100$."),
       D("$%d\\,\\%%$" % (_tot - _part), "RESTA_PER_QUOCIENT",
         "Has restat les dues quantitats. Un percentatge surt d'una divisió, "
         "no d'una resta.")],
      ["Divideix la part entre el total.",
       "Multiplica el resultat per $100$ per expressar-lo en tant per cent."],
      ["$\\dfrac{%d}{%d}=%s$" % (_part, _tot, texd(F(_part, _tot), 4)),
       "$%s\\cdot100=%s\\,\\%%$" % (texd(F(_part, _tot), 4), pc(_p))],
      ex_text=E278)


# =============================================================== Exercici 279
E279 = ("Calcula la variació percentual entre els dos valors, i digues si és "
        "un augment o una disminució.")

_279 = [
    ("a", 40, 50),    # +25 %
    ("b", 80, 60),    # -25 %
    ("c", 120, 150),  # +25 %
]
for _ap, _v0, _v1 in _279:
    _var = F((_v1 - _v0) * 100, _v0)
    _puja = _v1 > _v0
    _mal = F((_v1 - _v0) * 100, _v1)
    Q("279%s" % _ap, 279, _ap, B1, "A",
      "De $%d$ a $%d$." % (_v0, _v1),
      "%s del $%s\\,\\%%$" % ("Augment" if _puja else "Disminució", pc(abs(_var))),
      [D("%s del $%s\\,\\%%$" % ("Augment" if _puja else "Disminució", pc(abs(_mal))),
         "BASE_MAL_TRIADA",
         "Has dividit entre el valor FINAL. La variació percentual sempre es "
         "mesura respecte del valor de PARTIDA, que aquí és $%d$." % _v0),
       D("%s del $%d\\,\\%%$" % ("Augment" if _puja else "Disminució", abs(_v1 - _v0)),
         "PERCENTATGE_MAL_CALCULAT",
         "El $%d$ és la diferència en unitats, no en tant per cent. Per "
         "passar-la a percentatge cal dividir-la entre el valor de partida i "
         "multiplicar per $100$." % abs(_v1 - _v0)),
       D("%s del $%s\\,\\%%$" % ("Disminució" if _puja else "Augment", pc(abs(_var))),
         "VEREDICTE_INVERTIT",
         "El percentatge és correcte, però el sentit no: de $%d$ a $%d$ la "
         "quantitat %s." % (_v0, _v1, "puja" if _puja else "baixa"))],
      ["Calcula primer la diferència: $%d-%d=%d$." % (_v1, _v0, _v1 - _v0),
       "Divideix-la entre el valor de PARTIDA i multiplica per $100$."],
      ["Diferència: $%d-%d=%d$" % (_v1, _v0, _v1 - _v0),
       "$\\dfrac{%d}{%d}\\cdot100=%s\\,\\%%$" % (_v1 - _v0, _v0, tex(_var)),
       "%s del $%s\\,\\%%$" % ("Augment" if _puja else "Disminució", pc(abs(_var)))],
      ex_text=E279)


# =============================================================== Exercici 280
E280 = ("Una botiga fa un $20\\,\\%$ de descompte i, damunt del preu ja "
        "rebaixat, un $10\\,\\%$ més per pagar en efectiu.")

Q("280a", 280, "a", B2, "A",
  "Un article de $200$ €, quant costa al final?",
  "$144$ €",
  [D("$140$ €", "PERCENTATGES_SUMATS",
     "Has sumat els dos descomptes com si fossin un $30\\,\\%$. El segon "
     "descompte s'aplica sobre $160$ €, no sobre $200$ €: "
     "$160\\cdot0{,}9=144$."),
   D("$160$ €", "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquest és el preu després del primer descompte. Encara falta aplicar-hi "
     "el segon."),
   D("$180$ €", "FACTOR_PER_PERCENTATGE",
     "Sembla que només has aplicat el $10\\,\\%$. Els descomptes són dos, un "
     "darrere l'altre.")],
  ["Aplica el primer descompte: $200\\cdot0{,}8$.",
   "Sobre el resultat, aplica el segon: $\\cdot\\,0{,}9$."],
  ["$200\\cdot0{,}8=160$ €",
   "$160\\cdot0{,}9=144$ €"],
  ex_text=E280)

Q("280b", 280, "b", B2, "A",
  "A quin descompte únic equival?",
  "Al $28\\,\\%$",
  [D("Al $30\\,\\%$", "PERCENTATGES_SUMATS",
     "Els percentatges encadenats no se sumen. El factor conjunt és "
     "$0{,}8\\cdot0{,}9=0{,}72$, i $1-0{,}72=0{,}28$, o sigui un "
     "$28\\,\\%$."),
   D("Al $72\\,\\%$", "FACTOR_PER_PERCENTATGE",
     "El $72\\,\\%$ és el que ES PAGA, no el que es descompta. El descompte "
     "és el que falta fins a $100$."),
   D("Al $2\\,\\%$", "PRODUCTE_PER_SUMA",
     "No és la diferència entre els dos descomptes: és el resultat "
     "d'aplicar-los tots dos.")],
  ["Multiplica els dos factors: $0{,}8\\cdot0{,}9$.",
   "El descompte és el que falta perquè el factor arribi a $1$."],
  ["Factor conjunt: $0{,}8\\cdot0{,}9=0{,}72$",
   "$1-0{,}72=0{,}28\\to28\\,\\%$",
   "Comprovació: $200\\cdot0{,}72=144$ €, el mateix d'abans"],
  ex_text=E280,
  nota="Que dos descomptes del $20\\,\\%$ i el $10\\,\\%$ no facin un "
       "$30\\,\\%$ és el motiu de ser del factor multiplicador. Amb factors "
       "es veu de seguida; sumant percentatges, mai.")


# =============================================================== Exercici 281
E281 = ("Un ordinador val $650$ € sense IVA. L'IVA és del $21\\,\\%$ i la "
        "botiga fa un $12\\,\\%$ de descompte sobre el preu sense IVA.")

_650 = F(650)
_amb_desc = _650 * F(88, 100)
_final281 = _amb_desc * F(121, 100)

Q("281a", 281, "a", B2, "A",
  "Quin és el preu final que paga el client?",
  "$%s$ €" % texd(_final281, 2),
  [D("$%s$ €" % texd(_650 * F(121, 100) * F(88, 100) * F(1, 1) * 0 + _650 * F(109, 100), 2),
     "PERCENTATGES_SUMATS",
     "Sembla que has fet $21-12=9$ i has aplicat un $9\\,\\%$. Els "
     "percentatges no se sumen ni es resten entre si: cada un multiplica pel "
     "seu factor."),
   D("$%s$ €" % texd(_amb_desc, 2), "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquest és el preu amb el descompte però sense IVA. Encara falta "
     "afegir-l'hi."),
   D("$%s$ €" % texd(_650 * F(121, 100), 2), "TERME_OBLIDAT_OPERACIO",
     "Has aplicat l'IVA però t'has deixat el descompte.")],
  ["Aplica primer el descompte sobre el preu sense IVA: $650\\cdot0{,}88$.",
   "Sobre el resultat, afegeix-hi l'IVA: $\\cdot\\,1{,}21$."],
  ["Amb descompte: $650\\cdot0{,}88=%s$ €" % texd(_amb_desc, 2),
   "Amb IVA: $%s\\cdot1{,}21=%s$ €" % (texd(_amb_desc, 2), texd(_final281, 2))],
  ex_text=E281)

Q("281b", 281, "b", B2, "B",
  "Si la botiga apliqués primer l'IVA i després el descompte, el client "
  "pagaria el mateix?",
  "Sí: multiplicar per $0{,}88$ i per $1{,}21$ dona el mateix en qualsevol "
  "ordre.",
  [D("No: sortiria més car, perquè el descompte s'aplicaria sobre una "
     "quantitat més gran.", "ORDRE_DELS_FACTORS",
     "El descompte s'aplicaria sobre una quantitat més gran, sí, però també "
     "seria un descompte més gran. El producte no depèn de l'ordre: "
     "$650\\cdot0{,}88\\cdot1{,}21=650\\cdot1{,}21\\cdot0{,}88$."),
   D("No: sortiria més barat.", "ORDRE_DELS_FACTORS",
     "La multiplicació és commutativa: canviar l'ordre dels factors no canvia "
     "el resultat."),
   D("Depèn de si l'IVA es calcula abans o després d'arrodonir.",
     "ES_POT_DETERMINAR",
     "L'arrodoniment pot moure algun cèntim, però la pregunta és sobre el "
     "càlcul: amb factors, l'ordre no hi fa res.")],
  ["Escriu les dues operacions com un producte de factors.",
   "La multiplicació, canvia si en canvies l'ordre?"],
  ["Ordre 1: $650\\cdot0{,}88\\cdot1{,}21$",
   "Ordre 2: $650\\cdot1{,}21\\cdot0{,}88$",
   "Són el mateix producte: $%s$ € en tots dos casos" % texd(_final281, 2)],
  ex_text=E281,
  # Sense nota: matisava quan val la regla de les variacions
  # encadenades. El matís s'explica a la resolució, que és on toca.
  )


# =============================================================== Exercici 282
E282 = ("En un compte que dona un $3\\,\\%$ d'interès simple anual s'hi "
        "ingressen $2\\,400$ €.")

Q("282a", 282, "a", B2, "A",
  "Quants interessos genera en un any?",
  "$72$ €",
  [D("$2\\,472$ €", "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquest és el capital final, no els interessos. Els interessos són "
     "només el que s'hi ha afegit."),
   D("$800$ €", "PERCENTATGE_MAL_CALCULAT",
     "Sembla que has dividit entre $3$. El $3\\,\\%$ és $\\dfrac{3}{100}$, "
     "no $\\dfrac{1}{3}$."),
   D("$7{,}2$ €", "PERCENTATGE_DECIMAL_MAL",
     "T'has desplaçat un lloc: $3\\,\\%$ de $2\\,400$ és "
     "$2400\\cdot0{,}03=72$, no $2400\\cdot0{,}003$.")],
  ["El $3\\,\\%$ de $2\\,400$ és $2400\\cdot0{,}03$.",
   "Els interessos són la part que s'afegeix, no el total."],
  ["$I=2400\\cdot0{,}03=72$ €"],
  ex_text=E282)

Q("282b", 282, "b", B2, "A",
  "I en $5$ anys, amb interès simple?",
  "$360$ €",
  [D("$%s$ €" % texd(F(2400) * (F(103, 100) ** 5 - 1), 2), "SIMPLE_PER_COMPOST",
     "Això és interès COMPOST, que és quan els interessos generen més "
     "interessos. Amb interès simple, cada any es genera el mateix: "
     "$72\\cdot5$."),
   D("$2\\,760$ €", "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquest és el capital final ($2400+360$), no els interessos."),
   D("$%s$ €" % texd(F(2400) * F(15, 100), 2) if False else "$1\\,080$ €",
     "PERCENTATGE_MAL_CALCULAT",
     "Sembla que has fet el $45\\,\\%$. Cinc anys al $3\\,\\%$ són un "
     "$15\\,\\%$ en total, no un $45\\,\\%$.")],
  ["Amb interès simple, cada any genera el mateix que el primer.",
   "Multiplica els interessos d'un any pel nombre d'anys."],
  ["$I=2400\\cdot0{,}03\\cdot5=360$ €"],
  ex_text=E282,
  # Sense nota: recordava què vol dir interès SIMPLE. Si l'alumne no ho
  # sap, ho ha de buscar; si ho sap, la nota li ocupa lloc.
  )


# =============================================================== Exercici 283
E283 = ("Tres socis han posat $3\\,000$ €, $5\\,000$ € i $2\\,000$ € en un "
        "negoci que ha donat $12\\,000$ € de benefici, que es reparteix "
        "proporcionalment al que ha posat cadascú.")

_cap = [3000, 5000, 2000]
_tot283 = sum(_cap)
_ben = [F(12000 * c, _tot283) for c in _cap]

Q("283a", 283, "a", B2, "A",
  "Quant li toca al que va posar $5\\,000$ €?",
  "$%s$ €" % texd(_ben[1], 0),
  [D("$4\\,000$ €", "REPARTIMENT_A_PARTS_IGUALS",
     "Això és repartir a parts iguals ($12000:3$). El repartiment és "
     "PROPORCIONAL: qui ha posat més, cobra més."),
   D("$5\\,000$ €", "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquests són els diners que va posar, no el que li toca de benefici."),
   D("$%s$ €" % texd(F(12000 * _cap[0], _tot283), 0), "PART_MAL_ASSIGNADA",
     "Aquest és el que li toca al que va posar $3\\,000$ €. Compte a quin "
     "soci correspon cada part.")],
  ["Calcula quina fracció del capital total va posar: "
   "$\\dfrac{5000}{10000}$.",
   "Aplica aquesta fracció als $12\\,000$ € de benefici."],
  ["Capital total: $3000+5000+2000=10\\,000$ €",
   "Li correspon $\\dfrac{5000}{10000}=\\dfrac{1}{2}$ del benefici",
   "$12000\\cdot\\dfrac{1}{2}=%s$ €" % texd(_ben[1], 0)],
  ex_text=E283)

Q("283b", 283, "b", B2, "A",
  "I quin percentatge del benefici li toca al que va posar $2\\,000$ €?",
  "El $20\\,\\%$",
  [D("El $2\\,\\%$", "PERCENTATGE_DECIMAL_MAL",
     "El $2$ de $2\\,000$ no és el percentatge. Cal comparar-lo amb el "
     "capital total: $\\dfrac{2000}{10000}$."),
   D("El $%s\\,\\%%$" % pc(F(100, 3), 1), "REPARTIMENT_A_PARTS_IGUALS",
     "Això seria si es repartís a parts iguals entre els tres socis. Aquí es "
     "reparteix segons el que ha posat cadascú."),
   D("El $50\\,\\%$", "PART_MAL_ASSIGNADA",
     "Aquest és el percentatge del soci que va posar $5\\,000$ €.")],
  ["Compara el que va posar amb el capital total.",
   "$\\dfrac{2000}{10000}$, passat a percentatge."],
  ["$\\dfrac{2000}{10000}=0{,}2\\to20\\,\\%$",
   "Comprovació: $12000\\cdot0{,}2=2\\,400$ €, i "
   "$6000+2400+3600=12\\,000$ €"],
  ex_text=E283)


# =============================================================== Exercici 284
E284 = ("Un preu de $500$ € puja un $20\\,\\%$ i, al cap d'un temps, el preu "
        "nou baixa un $20\\,\\%$.")

Q("284", 284, "", B2, "A",
  "Quin és el preu final?",
  "$480$ €: no torna als $500$ €",
  [D("$500$ €: torna al preu de partida.", "PERCENTATGES_SUMATS",
     "El $20\\,\\%$ de pujada es calcula sobre $500$ ($+100$ €), però el "
     "$20\\,\\%$ de baixada es calcula sobre $600$ ($-120$ €). Com que les "
     "bases són diferents, no es compensen."),
   D("$520$ €", "VEREDICTE_INVERTIT",
     "El preu final és més BAIX que el de partida, no més alt: la baixada "
     "s'aplica sobre una quantitat més gran que la pujada."),
   D("$400$ €", "PERCENTATGES_SUMATS",
     "Sembla que has restat un $20\\,\\%$ del preu original. La baixada és "
     "sobre $600$ €, no sobre $500$ €.")],
  ["Calcula el preu després de la pujada.",
   "Aplica la baixada sobre AQUEST preu nou, no sobre el de partida."],
  ["$500\\cdot1{,}2=600$ €",
   "$600\\cdot0{,}8=480$ €",
   "Amb factors es veu d'un cop: $1{,}2\\cdot0{,}8=0{,}96$, o sigui un "
   "$4\\,\\%$ de baixada neta"],
  ex_text="",
  # Sense nota: comentava que aquest exercici i el 280 diuen el mateix
  # des de dos costats. És una observació per al professorat, no per
  # a qui està resolent l'exercici.
  )
