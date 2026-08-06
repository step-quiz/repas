# -*- coding: utf-8 -*-
"""c_escales.py — Full 8, blocs de càlcul amb escales i de raó de semblança
aplicada a àrees i volums.

CONTINGUT NOU, no transcrit de la font. El Full 8 tenia 32 preguntes i només
6 d'escales, i sobretot no deia enlloc què li passa a una àrea o a un volum
quan es multiplica la longitud. Aquest és el malentès més tossut de tota la
semblança —i el que després reapareix a física, a geometria analítica i cada
vegada que algú compara dues fotografies o dues maquetes— i el material no
l'arribava a tocar.

La idea central del segon bloc és que si les longituds es multipliquen per
$k$, les àrees ho fan per $k^2$ i els volums per $k^3$. Sembla òbvia escrita
i gairebé ningú no la té interioritzada: la meitat dels alumnes contesta que
una maqueta a escala 1:2 té la meitat de volum.

Exercicis 285–294. Tota l'aritmètica va amb `fractions.Fraction`.
"""
from fractions import Fraction as F
from lib import Q, D, tex, texd, dificultats

dificultats({
    285: 1,  # llegir què vol dir una escala
    286: 2,  # del plànol a la realitat
    287: 2,  # de la realitat al plànol
    288: 2,  # trobar l'escala a partir de dues mesures
    289: 3,  # escala amb canvi d'unitats pel mig
    290: 1,  # la raó de semblança entre dues figures
    291: 2,  # com queden les àrees
    292: 2,  # com queden els volums
    293: 3,  # a l'inrevés: de la raó d'àrees a la de longituds
    294: 3,  # problema complet amb maqueta
})

B1 = "escales_calcul"
B2 = "semblanca_arees"


def km_tex(cm):
    """Centímetres reals -> el múltiple que quedi més llegible."""
    if cm >= 100000:
        return "%s km" % texd(F(cm, 100000), 2)
    if cm >= 100:
        return "%s m" % texd(F(cm, 100), 2)
    return "%s cm" % texd(cm, 2)


# =============================================================== Exercici 285
E285 = "Què vol dir aquesta escala?"

_285 = [
    ("a", "1:50", 50, "reducció"),
    ("b", "1:25\\,000", 25000, "reducció"),
    ("c", "1:200", 200, "reducció"),
]
for _ap, _txt, _k, _tipus in _285:
    Q("285%s" % _ap, 285, _ap, B1, "B",
      "Escala $%s$." % _txt,
      "$1$ cm al plànol són $%d$ cm de debò." % _k,
      [D("$%d$ cm al plànol són $1$ cm de debò." % _k, "ESCALA_INVERTIDA",
         "És al revés. A l'escala $1:%d$, el $1$ és el que hi ha DIBUIXAT i "
         "el $%d$ és la realitat: el dibuix és més petit que l'original."
         % (_k, _k)),
       D("$1$ cm al plànol són $%d$ m de debò." % _k, "UNITATS_NO_CONVERTIDES",
         "L'escala relaciona mesures en la MATEIXA unitat: $1$ cm de plànol "
         "són $%d$ cm de realitat, que després es poden passar a metres si "
         "convé ($%s$)." % (_k, km_tex(_k))),
       D("El dibuix és $%d$ vegades més gran que la realitat." % _k,
         "ESCALA_INVERTIDA",
         "Una escala $1:%d$ és de REDUCCIÓ: el dibuix és més petit. Perquè "
         "fos d'ampliació, el primer nombre hauria de ser el més gran "
         "($%d:1$)." % (_k, _k))],
      ["A l'escala $a:b$, el primer nombre és el dibuix i el segon, la "
       "realitat.",
       "Les dues mesures van en la mateixa unitat."],
      ["$1:%d$ vol dir que cada $1$ cm del dibuix correspon a $%d$ cm reals"
       % (_k, _k),
       "És a dir, $%s$ de debò" % km_tex(_k)],
      ex_text=E285)


# =============================================================== Exercici 286
E286 = ("Un plànol està fet a escala $1:%s$. Quina distància real "
        "correspon a cada mesura del plànol?" % "25\\,000")

_286 = [("a", 4), ("b", 12), ("c", 2.5), ("d", 30)]
for _ap, _cm in _286:
    _real = F(_cm).limit_denominator() * 25000
    Q("286%s" % _ap, 286, _ap, B1, "A",
      "$%s$ cm al plànol." % texd(_cm, 2).rstrip("0").rstrip("{,}")
      if "{,}" in texd(_cm, 2) else "$%g$ cm al plànol." % _cm,
      "$%s$ km" % texd(F(_real, 100000), 3).rstrip("0").rstrip("{,}"),
      [D("$%s$ m" % texd(F(_real, 100), 1), "UNITATS_NO_CONVERTIDES",
         "El valor és correcte en centímetres, però la conversió no: "
         "$%s$ cm són $%s$ m, i això són $%s$ km."
         % (texd(_real, 0), texd(F(_real, 100), 1), texd(F(_real, 100000), 3))),
       D("$%s$ km" % texd(F(_real, 100000) / 25000 * 25000 / 1000, 5),
         "POTENCIA_10",
         "Has desplaçat malament la coma en passar de centímetres a "
         "quilòmetres. Recorda: $1$ km $=100\\,000$ cm."),
       D("$%s$ km" % texd(F(F(_cm).limit_denominator(), 25000) * 100000 / 100000, 6),
         "ESCALA_INVERTIDA",
         "Has dividit per l'escala en comptes de multiplicar. Com que el "
         "plànol és una reducció, la distància real ha de ser MÉS gran que "
         "la del plànol.")],
      ["Multiplica la mesura del plànol per $25\\,000$: dona centímetres "
       "reals.",
       "Després passa'ls a quilòmetres dividint entre $100\\,000$."],
      ["$%g\\cdot25000=%s$ cm" % (_cm, texd(_real, 0)),
       "$\\dfrac{%s}{100000}=%s$ km"
       % (texd(_real, 0), texd(F(_real, 100000), 3).rstrip("0").rstrip("{,}"))],
      ex_text=E286)


# =============================================================== Exercici 287
E287 = ("Un arquitecte dibuixa un plànol a escala $1:200$. Quina mesura ha "
        "de fer servir al plànol?")

_287 = [("a", 8, "m"), ("b", 14, "m"), ("c", 2.4, "m")]
for _ap, _m, _u in _287:
    _cm_real = F(_m).limit_denominator() * 100
    _plano = _cm_real / 200
    Q("287%s" % _ap, 287, _ap, B1, "A",
      "Una paret de $%g$ m." % _m,
      "$%s$ cm" % texd(_plano, 2).rstrip("0").rstrip("{,}"),
      [D("$%s$ cm" % texd(_cm_real * 200, 0), "ESCALA_INVERTIDA",
         "Has multiplicat per $200$. Per anar de la realitat al plànol cal "
         "DIVIDIR: el dibuix és més petit."),
       D("$%s$ cm" % texd(F(_m).limit_denominator() / 200, 4), "UNITATS_NO_CONVERTIDES",
         "Has dividit els metres directament. Primer cal passar-los a "
         "centímetres: $%g$ m $=%s$ cm." % (_m, texd(_cm_real, 0))),
       D("$%s$ m" % texd(_plano, 2).rstrip("0").rstrip("{,}"), "UNITATS_NO_CONVERTIDES",
         "El número és correcte, però les unitats no: al plànol es dibuixen "
         "centímetres, no metres.")],
      ["Passa la mesura real a centímetres.",
       "Divideix-la entre $200$."],
      ["$%g$ m $=%s$ cm" % (_m, texd(_cm_real, 0)),
       "$\\dfrac{%s}{200}=%s$ cm"
       % (texd(_cm_real, 0), texd(_plano, 2).rstrip("0").rstrip("{,}"))],
      ex_text=E287)


# =============================================================== Exercici 288
E288 = "Troba l'escala del dibuix."

# Els tres casos porten canvi d'unitats a propòsit: si el dibuix i la
# realitat vinguessin ja en la mateixa unitat, el distractor de "no he
# convertit" donaria el mateix que la resposta bona.
_288 = [
    ("a", 4, 2, "cm", "m"),         # 200 cm  -> 1:50
    ("b", 3, 12, "cm", "m"),        # 1200 cm -> 1:400
    ("c", 8, 4, "cm", "km"),        # 400000 cm -> 1:50000
]
for _ap, _dib, _real, _ud, _ur in _288:
    _fact = {"cm": 1, "m": 100, "km": 100000}[_ur]
    _cm = _real * _fact
    _k = F(_cm, _dib)
    Q("288%s" % _ap, 288, _ap, B1, "A",
      "$%g$ %s al dibuix corresponen a $%g$ %s de debò." % (_dib, _ud, _real, _ur),
      "$1:%s$" % texd(_k, 0),
      [D("$1:%g$" % (_real / _dib) if _ur == "cm" else "$1:%s$" % texd(F(_real, _dib), 2),
         "UNITATS_NO_CONVERTIDES",
         "Has comparat $%g$ amb $%g$ sense passar-ho tot a la mateixa unitat. "
         "$%g$ %s són $%s$ cm." % (_dib, _real, _real, _ur, texd(_cm, 0))),
       D("$%s:1$" % texd(_k, 0), "ESCALA_INVERTIDA",
         "L'has escrita del revés. A l'escala, el primer nombre és el DIBUIX "
         "(que aquí és més petit) i el segon, la realitat."),
       D("$1:%s$" % texd(_cm, 0), "DIVISIO_OBLIDADA",
         "Aquesta és la mesura real en centímetres, no l'escala. L'escala "
         "surt de dividir-la entre la mesura del dibuix.")],
      ["Passa les dues mesures a la mateixa unitat, normalment centímetres.",
       "Divideix la mesura real entre la del dibuix."],
      ["$%g$ %s $=%s$ cm" % (_real, _ur, texd(_cm, 0)),
       "$\\dfrac{%s}{%g}=%s$, o sigui escala $1:%s$"
       % (texd(_cm, 0), _dib, texd(_k, 0), texd(_k, 0))],
      ex_text=E288)


# =============================================================== Exercici 289
Q("289", 289, "", B1, "A",
  "En un mapa a escala $1:150\\,000$, dues poblacions estan a $6{,}4$ cm. "
  "Un ciclista fa el recorregut a $24$ km/h. Quant triga?",
  "$24$ min",
  [D("$9{,}6$ km", "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquesta és la distància real, que és el primer pas. Encara falta "
     "calcular el temps: $\\dfrac{9{,}6}{24}$ h."),
   D("$0{,}4$ h $=4$ min", "POTENCIA_10",
     "El temps en hores és $0{,}4$, i $0{,}4$ h no són $4$ min sinó "
     "$0{,}4\\cdot60=24$ min."),
   D("$2{,}5$ h", "INVERTIDA",
     "Has dividit al revés: el temps és $\\dfrac{\\text{distància}}"
     "{\\text{velocitat}}$, no a l'inrevés.")],
  ["Troba primer la distància real en quilòmetres.",
   "Després, temps $=\\dfrac{\\text{distància}}{\\text{velocitat}}$, i "
   "passa'l a minuts."],
  ["$6{,}4\\cdot150000=960\\,000$ cm",
   "$960000$ cm $=9{,}6$ km",
   "$t=\\dfrac{9{,}6}{24}=0{,}4$ h $=0{,}4\\cdot60=24$ min"],
  ex_text="",
  nota="Aquest exercici encadena escala, canvi d'unitats i velocitat: és el "
       "format en què les escales apareixen de debò fora de la classe de "
       "matemàtiques.")


# =============================================================== Exercici 290
E290 = ("Dues figures són semblants. Troba'n la raó de semblança $k$ (de la "
        "petita a la gran).")

_290 = [("a", 3, 12), ("b", 5, 20), ("c", 6, 9)]
for _ap, _a, _b in _290:
    _k = F(_b, _a)
    Q("290%s" % _ap, 290, _ap, B2, "A",
      "Un costat de la petita fa $%d$ cm i el corresponent de la gran, "
      "$%d$ cm." % (_a, _b),
      "$k=%s$" % tex(_k),
      [D("$k=%s$" % tex(F(_a, _b)), "INVERTIDA",
         "Aquesta és la raó de la gran a la petita. Com que es demana de la "
         "petita a la gran, $k$ ha de ser més gran que $1$."),
       D("$k=%d$" % (_b - _a), "RESTA_PER_QUOCIENT",
         "Has restat els dos costats. La raó de semblança és un QUOCIENT: "
         "diu quantes vegades és més gran, no quant més gran és."),
       D("$k=%d$" % (_a * _b), "PRODUCTE_PER_SUMA",
         "Els has multiplicat. La raó surt de dividir el costat de la gran "
         "entre el de la petita.")],
      ["La raó de semblança és el quocient entre dos costats corresponents.",
       "De la petita a la gran: $\\dfrac{%d}{%d}$." % (_b, _a)],
      ["$k=\\dfrac{%d}{%d}=%s$" % (_b, _a, tex(_k))],
      ex_text=E290)


# =============================================================== Exercici 291
E291 = ("Dos polígons són semblants amb raó $k$. Si l'àrea del petit és la "
        "que es diu, quina és la del gran?")

_291 = [("a", 2, 15), ("b", 3, 8), ("c", F(5, 2), 12)]
for _ap, _k, _area in _291:
    _k = F(_k)
    _gran = _area * _k ** 2
    Q("291%s" % _ap, 291, _ap, B2, "A",
      "$k=%s$ i àrea del petit $=%d$ cm$^2$." % (tex(_k), _area),
      "$%s$ cm$^2$" % texd(_gran, 2).rstrip("0").rstrip("{,}"),
      [D("$%s$ cm$^2$" % texd(_area * _k, 2).rstrip("0").rstrip("{,}"),
         "RAO_SENSE_QUADRAT",
         "Has multiplicat l'àrea per $k$. Les àrees es multipliquen per "
         "$k^2$, no per $k$: si les longituds es dupliquen, l'àrea es "
         "multiplica per $4$, no per $2$."),
       D("$%s$ cm$^2$" % texd(_area * _k ** 3, 2).rstrip("0").rstrip("{,}"),
         "RAO_AL_CUB",
         "El $k^3$ és per als VOLUMS. Una àrea té dues dimensions, i per això "
         "va amb $k^2$."),
       D("$%s$ cm$^2$" % texd(_area + _k, 2).rstrip("0").rstrip("{,}"),
         "PRODUCTE_PER_SUMA",
         "La raó multiplica, no suma.")],
      ["Les longituds es multipliquen per $k$; les àrees, per $k^2$.",
       "$k^2=%s$." % tex(_k ** 2)],
      ["$k^2=%s^2=%s$" % (tex(_k), tex(_k ** 2)),
       "Àrea gran $=%d\\cdot%s=%s$ cm$^2$"
       % (_area, tex(_k ** 2), texd(_gran, 2).rstrip("0").rstrip("{,}"))],
      ex_text=E291,
      nota=("Val la pena veure-ho amb un quadrat: si el costat passa de $1$ a "
            "$2$, l'àrea passa d'$1$ a $4$. Dues dimensions, dos factors "
            "$k$." if _ap == "a" else ""))


# =============================================================== Exercici 292
E292 = ("Dos cossos són semblants amb raó $k$. Si el volum del petit és el "
        "que es diu, quin és el del gran?")

_292 = [("a", 2, 30), ("b", 3, 5)]
for _ap, _k, _vol in _292:
    _k = F(_k)
    _gran = _vol * _k ** 3
    Q("292%s" % _ap, 292, _ap, B2, "A",
      "$k=%s$ i volum del petit $=%d$ cm$^3$." % (tex(_k), _vol),
      "$%s$ cm$^3$" % texd(_gran, 0),
      [D("$%s$ cm$^3$" % texd(_vol * _k, 0), "RAO_SENSE_QUADRAT",
         "Has multiplicat pel $k$ tot sol. Un volum té tres dimensions: si "
         "les longituds es multipliquen per $%s$, el volum ho fa per "
         "$%s^3=%s$." % (tex(_k), tex(_k), tex(_k ** 3))),
       D("$%s$ cm$^3$" % texd(_vol * _k ** 2, 0), "RAO_AL_QUADRAT",
         "El $k^2$ és per a les ÀREES. Els volums van amb $k^3$."),
       D("$%s$ cm$^3$" % texd(_vol + _k ** 3, 0), "PRODUCTE_PER_SUMA",
         "La raó multiplica el volum, no s'hi suma.")],
      ["Les longituds van amb $k$, les àrees amb $k^2$ i els volums amb $k^3$.",
       "$k^3=%s$." % tex(_k ** 3)],
      ["$k^3=%s^3=%s$" % (tex(_k), tex(_k ** 3)),
       "Volum gran $=%d\\cdot%s=%s$ cm$^3$" % (_vol, tex(_k ** 3), texd(_gran, 0))],
      ex_text=E292,
      nota=("Aquest és el que més sorprèn: doblar totes les mides multiplica "
            "el volum per $8$. És el motiu pel qual una maqueta a escala "
            "$1:2$ no pesa la meitat, sinó una vuitena part."
            if _ap == "a" else ""))


# =============================================================== Exercici 293
E293 = "A l'inrevés: del que saps de les àrees, dedueix la raó de longituds."

Q("293a", 293, "a", B2, "A",
  "Dos triangles semblants tenen àrees de $12$ cm$^2$ i $108$ cm$^2$. Quina "
  "és la raó entre els seus costats?",
  "$k=3$",
  [D("$k=9$", "RAO_AL_QUADRAT",
     "El $9$ és la raó entre les ÀREES ($108:12$). La raó entre els costats "
     "n'és l'arrel quadrada: $k=\\sqrt{9}=3$."),
   D("$k=96$", "RESTA_PER_QUOCIENT",
     "Has restat les àrees. La raó és un quocient."),
   D("$k=\\sqrt{108-12}$", "RESTA_PER_QUOCIENT",
     "Ni resta ni arrel de la resta: primer es divideixen les àrees i "
     "després es fa l'arrel del quocient.")],
  ["La raó entre les àrees és $k^2$.",
   "Divideix les àrees i fes l'arrel quadrada del resultat."],
  ["$\\dfrac{108}{12}=9$, i això és $k^2$",
   "$k=\\sqrt{9}=3$"],
  ex_text=E293)

Q("293b", 293, "b", B2, "A",
  "Dues esferes semblants tenen volums de $8$ cm$^3$ i $216$ cm$^3$. Quina "
  "és la raó entre els seus radis?",
  "$k=3$",
  [D("$k=27$", "RAO_AL_CUB",
     "El $27$ és la raó entre els VOLUMS ($216:8$). La raó entre els radis "
     "n'és l'arrel CÚBICA: $k=\\sqrt[3]{27}=3$."),
   D("$k=\\sqrt{27}$", "ARREL_MAL_APLICADA",
     "L'arrel quadrada serviria si comparéssim àrees. Amb volums cal l'arrel "
     "cúbica."),
   D("$k=208$", "RESTA_PER_QUOCIENT",
     "Has restat els volums en comptes de dividir-los.")],
  ["La raó entre els volums és $k^3$.",
   "Divideix els volums i fes-ne l'arrel cúbica."],
  ["$\\dfrac{216}{8}=27$, i això és $k^3$",
   "$k=\\sqrt[3]{27}=3$"],
  ex_text=E293)


# =============================================================== Exercici 294
E294 = ("Una maqueta d'un edifici està feta a escala $1:50$. L'edifici de "
        "debò fa $30$ m d'alçada, té una façana de $600$ m$^2$ i un volum "
        "de $9\\,000$ m$^3$.")

Q("294a", 294, "a", B2, "A",
  "Quina alçada fa la maqueta?",
  "$60$ cm",
  [D("$1\\,500$ m", "ESCALA_INVERTIDA",
     "Has multiplicat per $50$. La maqueta és una REDUCCIÓ: cal dividir."),
   D("$0{,}6$ m $=6$ cm", "POTENCIA_10",
     "$30:50=0{,}6$ m, i $0{,}6$ m són $60$ cm, no $6$."),
   D("$60$ m", "UNITATS_NO_CONVERTIDES",
     "El número és correcte però la unitat no: $0{,}6$ m són $60$ "
     "centímetres.")],
  ["Divideix l'alçada real entre $50$.",
   "Passa el resultat a centímetres."],
  ["$\\dfrac{30}{50}=0{,}6$ m",
   "$0{,}6$ m $=60$ cm"],
  ex_text=E294)

Q("294b", 294, "b", B2, "A",
  "I quina superfície té la façana de la maqueta?",
  "$0{,}24$ m$^2$ (és a dir, $2\\,400$ cm$^2$)",
  [D("$12$ m$^2$", "RAO_SENSE_QUADRAT",
     "Has dividit l'àrea entre $50$. Les àrees van amb $k^2$: cal dividir "
     "entre $50^2=2\\,500$."),
   D("$0{,}0048$ m$^2$", "RAO_AL_CUB",
     "Has dividit entre $50^3$. El cub és per als volums; una façana és una "
     "àrea i va amb el quadrat."),
   D("$600$ m$^2$", "PAS_INTERMEDI_PER_RESPOSTA",
     "Aquesta és la façana real, la que ja et donaven.")],
  ["La raó de longituds és $\\dfrac{1}{50}$; la d'àrees, "
   "$\\left(\\dfrac{1}{50}\\right)^2$.",
   "$50^2=2\\,500$."],
  ["$\\dfrac{600}{50^2}=\\dfrac{600}{2500}=0{,}24$ m$^2$",
   "$0{,}24$ m$^2=2\\,400$ cm$^2$"],
  ex_text=E294)

Q("294c", 294, "c", B2, "A",
  "I el volum?",
  "$0{,}072$ m$^3$ (és a dir, $72\\,000$ cm$^3$)",
  [D("$180$ m$^3$", "RAO_SENSE_QUADRAT",
     "Has dividit entre $50$. Els volums van amb $k^3$: entre "
     "$50^3=125\\,000$."),
   D("$3{,}6$ m$^3$", "RAO_AL_QUADRAT",
     "Has dividit entre $50^2$. El quadrat és per a les àrees."),
   D("$72$ m$^3$", "POTENCIA_10",
     "T'has desplaçat tres llocs: $\\dfrac{9000}{125000}=0{,}072$, no $72$.")],
  ["La raó de volums és $\\left(\\dfrac{1}{50}\\right)^3$.",
   "$50^3=125\\,000$."],
  ["$\\dfrac{9000}{50^3}=\\dfrac{9000}{125000}=0{,}072$ m$^3$",
   "$0{,}072$ m$^3=72\\,000$ cm$^3$",
   "La maqueta és $50$ vegades més curta, $2\\,500$ vegades més petita de "
   "façana i $125\\,000$ vegades més petita de volum"],
  ex_text=E294,
  nota="Els tres apartats junts són el resum del bloc: una sola escala, tres "
       "factors diferents segons si el que mesures té una, dues o tres "
       "dimensions.")
