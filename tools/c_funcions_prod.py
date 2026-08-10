# -*- coding: utf-8 -*-
"""c_funcions_prod.py — Full 10, blocs de construir rectes i paràboles.

CONTINGUT NOU, no transcrit de la font. El Full 10 tenia 45 preguntes i, de
totes, només vuit demanaven CONSTRUIR alguna cosa: la resta era identificar
el pendent, dir si una paràbola és més ampla o més estreta, llegir una
gràfica. Tot reconeixement. I el que fa falta per a batxillerat és el
contrari: donar-te dades i que en surti l'expressió.

Aquests 25 exercicis són tots de producció: de dues dades a l'equació, d'una
recta a la seva paral·lela, de dues rectes al seu punt de tall, del vèrtex a
la paràbola, i d'una situació amb text a la funció que la descriu.

Exercicis 295–304. Tota l'aritmètica va amb `fractions.Fraction`.
"""
from fractions import Fraction as F
from lib import Q, D, tex, texd, dificultats
from figures import grafica_recta, grafica_parabola, nuvol_de_punts

dificultats({
    295: 2,  # recta a partir del pendent i un punt
    296: 2,  # recta a partir de dos punts
    297: 2,  # de la descripció de la gràfica a l'expressió
    298: 3,  # paral·lela i perpendicular per un punt
    299: 3,  # punt de tall de dues rectes
    300: 2,  # vèrtex d'una paràbola
    301: 3,  # talls amb els eixos d'una paràbola
    302: 3,  # paràbola a partir del vèrtex i un punt
    303: 3,  # problema amb quota fixa i part variable
    304: 3,  # problema amb paràbola: on és el màxim
})

B1 = "rectes_produccio"
B2 = "parabola_produccio"


def recta_tex(m, n):
    """y = mx + n, escrit com ho escriuria una persona."""
    if m == 0:
        return "y=%s" % tex(n)
    if m == 1:
        cos = "x"
    elif m == -1:
        cos = "-x"
    else:
        cos = "%sx" % tex(m) if F(m).denominator == 1 else r"\dfrac{%s}{%s}x" % (
            F(m).numerator, F(m).denominator) if F(m).numerator > 0 else \
            r"-\dfrac{%s}{%s}x" % (abs(F(m).numerator), F(m).denominator)
    if n == 0:
        return "y=%s" % cos
    return "y=%s%s%s" % (cos, "+" if n > 0 else "-", tex(abs(F(n))))


# =============================================================== Exercici 295
E295 = ("Escriu l'equació de la recta que té aquest pendent i passa per "
        "aquest punt.")

_295 = [
    ("a", F(2), (3, 1)),
    ("b", F(-3), (1, 5)),
    ("c", F(1, 2), (4, 0)),
    ("d", F(-1), (-2, 3)),
]
for _ap, _m, (_x0, _y0) in _295:
    _n = F(_y0) - _m * _x0
    Q("295%s" % _ap, 295, _ap, B1, "A",
      "Pendent $m=%s$, punt $(%d,%d)$." % (tex(_m), _x0, _y0),
      "$%s$" % recta_tex(_m, _n),
      [D("$%s$" % recta_tex(_m, F(_y0)), "ORDENADA_PER_COORDENADA",
         "Has posat la $y$ del punt com a ordenada a l'origen. El $%d$ és el "
         "valor de la funció a $x=%d$, no a $x=0$: cal aïllar $n$ de "
         "$%d=%s\\cdot%d+n$." % (_y0, _x0, _y0, tex(_m), _x0)),
       D("$%s$" % recta_tex(_m, -_n), "SIGNE_FINAL",
         "L'ordenada a l'origen té el signe canviat: revisa el pas d'aïllar "
         "$n$."),
       D("$%s$" % recta_tex(F(_x0) if _x0 else F(_m) + 1, _n), "PENDENT_MAL_TRIAT",
         "El pendent és el que et donaven, $m=%s$: no es calcula, es "
         "col·loca." % tex(_m))],
      ["Parteix de $y=mx+n$ amb el pendent que et donen: $y=%sx+n$." % tex(_m),
       "Substitueix-hi el punt i aïlla $n$: $%d=%s\\cdot%d+n$."
       % (_y0, tex(_m), _x0)],
      ["$%d=%s\\cdot(%d)+n$" % (_y0, tex(_m), _x0),
       "$n=%d-(%s)=%s$" % (_y0, tex(_m * _x0), tex(_n)),
       "$%s$" % recta_tex(_m, _n)],
      ex_text=E295,
      # El pendent i el punt fixen la recta sense ambigüitat: mostrar-la
      # ja construïda no revela res que l'enunciat no doni; el punt
      # donat es marca perquè és la dada de partida.
      figura=grafica_recta(float(_m), float(_n),
                            punts_marcats=[(float(_x0), float(_y0))]))


# =============================================================== Exercici 296
E296 = "Escriu l'equació de la recta que passa pels dos punts."

_296 = [
    ("a", (1, 2), (3, 8)),
    ("b", (-2, 5), (2, -3)),
    # Cap dels dos punts no pot ser sobre l'eix Y: si ho fos, l'ordenada a
    # l'origen coincidiria amb la seva y i el distractor de confondre-les
    # donaria la resposta bona.
    ("c", (2, -1), (6, 1)),
]
for _ap, (_x1, _y1), (_x2, _y2) in _296:
    _m = F(_y2 - _y1, _x2 - _x1)
    _n = F(_y1) - _m * _x1
    _minv = F(_x2 - _x1, _y2 - _y1)
    Q("296%s" % _ap, 296, _ap, B1, "A",
      "$(%d,%d)$ i $(%d,%d)$." % (_x1, _y1, _x2, _y2),
      "$%s$" % recta_tex(_m, _n),
      [D("$%s$" % recta_tex(_minv, F(_y1) - _minv * _x1), "PENDENT_INVERTIT",
         "Has calculat $\\dfrac{\\Delta x}{\\Delta y}$. El pendent és "
         "$\\dfrac{\\Delta y}{\\Delta x}$: el que puja entre el que avança."),
       D("$%s$" % recta_tex(-_m, _n), "SIGNE_PENDENT_INVERTIT",
         "El pendent té el signe canviat: comprova en quin sentit vas de "
         "$(%d,%d)$ a $(%d,%d)$." % (_x1, _y1, _x2, _y2)),
       D("$%s$" % recta_tex(_m, F(_y1)), "ORDENADA_PER_COORDENADA",
         "Has pres la $y$ del primer punt com a ordenada a l'origen. Només "
         "serviria si aquell punt fos a $x=0$.")],
      ["Calcula el pendent: $m=\\dfrac{y_2-y_1}{x_2-x_1}$.",
       "Amb el pendent i un dels dos punts, aïlla $n$ com a l'exercici 295."],
      ["$m=\\dfrac{%d-(%d)}{%d-(%d)}=\\dfrac{%d}{%d}=%s$"
       % (_y2, _y1, _x2, _x1, _y2 - _y1, _x2 - _x1, tex(_m)),
       "$%d=%s\\cdot(%d)+n\\;\\Longrightarrow\\;n=%s$" % (_y1, tex(_m), _x1, tex(_n)),
       "$%s$" % recta_tex(_m, _n)],
      ex_text=E296,
      # nuvol_de_punts, no grafica_recta: els dos punts són la dada, la
      # recta (m i n) és la incògnita que es demana calcular.
      figura=nuvol_de_punts([(float(_x1), float(_y1)),
                              (float(_x2), float(_y2))]))


# =============================================================== Exercici 297
E297 = ("D'una recta se'n sap això. Escriu-ne l'equació.")

_297 = [
    ("a", "Talla l'eix $Y$ a $-4$ i puja $3$ unitats cada vegada que avança $1$",
     F(3), F(-4)),
    ("b", "Talla l'eix $Y$ a $2$ i baixa $1$ unitat cada vegada que avança $4$",
     F(-1, 4), F(2)),
    ("c", "És horitzontal i passa per $(7,-3)$", F(0), F(-3)),
]
for _ap, _txt, _m, _n in _297:
    Q("297%s" % _ap, 297, _ap, B1, "A",
      _txt + ".",
      "$%s$" % recta_tex(_m, _n),
      [D("$%s$" % recta_tex(_n if _n != _m else _m + 1, _m),
         "PENDENT_ORDENADA_INTERCANVIATS",
         "Has intercanviat el pendent i l'ordenada a l'origen. El pendent és "
         "el que multiplica la $x$; l'ordenada, el terme que va sol."),
       D("$%s$" % recta_tex(-_m if _m != 0 else F(1), _n), "SIGNE_PENDENT_INVERTIT",
         "El pendent té el signe canviat: %s"
         % ("una recta horitzontal té pendent $0$, no $1$." if _m == 0
            else "si la recta puja, el pendent és positiu; si baixa, negatiu.")),
       D("$x=%s$" % tex(_n) if _m == 0 else "$%s$" % recta_tex(_m, -_n),
         "RECTA_VERTICAL_CONFOSA" if _m == 0 else "SIGNE_FINAL",
         "Una recta HORITZONTAL és $y=$ constant. La forma $x=$ constant és "
         "una recta vertical, i aquella no és cap funció."
         if _m == 0 else
         "L'ordenada a l'origen té el signe canviat.")],
      ["El pendent diu quant puja o baixa la $y$ per cada unitat que avança "
       "la $x$.",
       "L'ordenada a l'origen és el valor de $y$ quan $x=0$, és a dir, on "
       "talla l'eix vertical."],
      ["Pendent: $m=%s$" % tex(_m),
       "Ordenada a l'origen: $n=%s$" % tex(_n),
       "$%s$" % recta_tex(_m, _n)],
      ex_text=E297)


# =============================================================== Exercici 298
E298 = ("Donada la recta $r:\\;y=2x-3$, escriu l'equació de la recta "
        "demanada.")

Q("298a", 298, "a", B1, "A",
  "La paral·lela a $r$ que passa per $(1,4)$.",
  "$y=2x+2$",
  [D("$y=2x-3$", "PARALLELA_MATEIXA_RECTA",
     "Aquesta és la recta $r$ mateixa, que no passa per $(1,4)$. Una "
     "paral·lela té el mateix pendent però una altra ordenada a l'origen."),
   D("$y=-\\dfrac{1}{2}x+\\dfrac{9}{2}$", "PARALLELA_PER_PERPENDICULAR",
     "Aquesta és la PERPENDICULAR. Les paral·leles comparteixen pendent; les "
     "perpendiculars el tenen invers i canviat de signe."),
   D("$y=2x+4$", "ORDENADA_PER_COORDENADA",
     "Has posat el $4$ com a ordenada a l'origen, però és el valor de $y$ a "
     "$x=1$, no a $x=0$.")],
  ["Dues rectes són paral·leles quan tenen el MATEIX pendent: $m=2$.",
   "Amb $m=2$, substitueix $(1,4)$ a $y=2x+n$ i aïlla $n$."],
  ["Paral·lela $\\Rightarrow m=2$",
   "$4=2\\cdot1+n\\;\\Longrightarrow\\;n=2$",
   "$y=2x+2$"],
  ex_text=E298,
  # Es dibuixa NOMÉS r (la recta donada a l'enunciat, dada fixa), amb
  # el punt (1,4) marcat; la paral·lela demanada NO es dibuixa, és la
  # resposta.
  figura=grafica_recta(2, -3, punts_marcats=[(1, 4)]))

Q("298b", 298, "b", B1, "A",
  "La perpendicular a $r$ que passa per $(4,1)$.",
  "$y=-\\dfrac{1}{2}x+3$",
  [D("$y=2x-7$", "PARALLELA_PER_PERPENDICULAR",
     "Aquesta és una PARAL·LELA a $r$. Perquè sigui perpendicular, el "
     "pendent ha de ser $-\\dfrac{1}{2}$: l'invers de $2$ i canviat de "
     "signe."),
   D("$y=-2x+9$", "PENDENT_NOMES_CANVIAT_DE_SIGNE",
     "Només has canviat el signe del pendent. Per ser perpendicular cal "
     "invertir-lo TAMBÉ: de $2$ a $-\\dfrac{1}{2}$, perquè "
     "$2\\cdot\\left(-\\dfrac{1}{2}\\right)=-1$."),
   D("$y=\\dfrac{1}{2}x-1$", "SIGNE_PENDENT_INVERTIT",
     "Has invertit el pendent però no li has canviat el signe. El producte "
     "dels pendents de dues perpendiculars ha de valer $-1$.")],
  ["Dues rectes són perpendiculars quan el producte dels pendents val $-1$.",
   "Si $m_r=2$, el pendent que busques és $-\\dfrac{1}{2}$."],
  ["Perpendicular $\\Rightarrow m=-\\dfrac{1}{2}$ (perquè "
   "$2\\cdot\\left(-\\dfrac{1}{2}\\right)=-1$)",
   "$1=-\\dfrac{1}{2}\\cdot4+n\\;\\Longrightarrow\\;n=3$",
   "$y=-\\dfrac{1}{2}x+3$"],
  ex_text=E298,
  figura=grafica_recta(2, -3, punts_marcats=[(4, 1)]),
  nota="La condició de perpendicularitat ($m_1\\cdot m_2=-1$) no surt al "
       "material de partida i és de batxillerat, però va aquí perquè és el "
       "pas natural després de les paral·leles i costa poc d'afegir.")


# =============================================================== Exercici 299
E299 = "Troba el punt de tall de les dues rectes."

_299 = [
    ("a", F(2), F(1), F(-1), F(7)),    # 2x+1 = -x+7 -> x=2, y=5
    ("b", F(3), F(-2), F(1), F(2)),    # 3x-2 = x+2 -> x=2, y=4
    ("c", F(-1), F(6), F(1, 2), F(3)),  # -x+6 = x/2+3 -> x=2, y=4
]
for _ap, _m1, _n1, _m2, _n2 in _299:
    _x = F(_n2 - _n1, _m1 - _m2)
    _y = _m1 * _x + _n1
    Q("299%s" % _ap, 299, _ap, B1, "A",
      "$%s$ i $%s$." % (recta_tex(_m1, _n1), recta_tex(_m2, _n2)),
      "$(%s,%s)$" % (tex(_x), tex(_y)),
      [D("$(%s,%s)$" % (tex(_y), tex(_x)), "COORDENADES_INTERCANVIADES",
         "Has posat les coordenades al revés. Primer va la $x$ i després la "
         "$y$."),
       D("$(%s,%s)$" % (tex(_x), tex(_m2 * _x + _n2 + 1)), "SUBSTITUCIO_MAL_FETA",
         "La $x$ és correcta, però la $y$ no surt: substitueix-la a "
         "qualsevol de les dues rectes i comprova que dona el mateix a totes "
         "dues."),
       D("$(%s,%s)$" % (tex(_n1), tex(_n2)), "ORDENADES_PER_TALL",
         "Aquestes són les dues ordenades a l'origen, és a dir, on talla "
         "cada recta l'eix $Y$. El punt de tall entre elles és on les dues "
         "$y$ coincideixen.")],
      ["Al punt de tall les dues $y$ valen el mateix: iguala les dues "
       "expressions.",
       "Resol l'equació per trobar la $x$ i substitueix-la per trobar la $y$."],
      ["$%s=%s$" % (recta_tex(_m1, _n1).replace("y=", ""),
                    recta_tex(_m2, _n2).replace("y=", "")),
       "$x=%s$" % tex(_x),
       "$y=%s\\cdot%s%s%s=%s$" % (tex(_m1), tex(_x), "+" if _n1 > 0 else "-",
                                  tex(abs(_n1)), tex(_y)),
       "Punt de tall: $(%s,%s)$" % (tex(_x), tex(_y))],
      ex_text=E299,
      # Dues rectes dibuixades, SENSE marcar el punt de tall: és
      # exactament la resposta que es demana calcular.
      figura=grafica_recta(float(_m1), float(_n1), float(_m2), float(_n2)))


# =============================================================== Exercici 300
E300 = "Troba el vèrtex de cada paràbola."

_300 = [
    ("a", F(1), F(-6), F(5)),
    ("b", F(2), F(4), F(-1)),
    ("c", F(-1), F(2), F(3)),
    # Cap apartat pot tenir b=0: llavors x_v=0, la substitució dona el terme
    # independent i tres de les quatre opcions es tornen la mateixa.
    ("d", F(1), F(8), F(-9)),
]
for _ap, _a, _b, _c in _300:
    _xv = F(-_b, 2 * _a)
    _yv = _a * _xv ** 2 + _b * _xv + _c
    _mal = F(_b, 2 * _a)
    Q("300%s" % _ap, 300, _ap, B2, "A",
      "$y=%s$" % (("%sx^2" % ("" if _a == 1 else ("-" if _a == -1 else tex(_a))))
                  + (("%s%sx" % ("+" if _b > 0 else "-", tex(abs(_b)) if abs(_b) != 1 else "")) if _b else "")
                  + (("%s%s" % ("+" if _c > 0 else "-", tex(abs(_c)))) if _c else "")),
      "$(%s,%s)$" % (tex(_xv), tex(_yv)),
      [D("$(%s,%s)$" % (tex(_mal), tex(_a * _mal ** 2 + _b * _mal + _c)),
         "SIGNE_VERTEX",
         "T'has deixat el signe menys: $x_v=\\dfrac{-b}{2a}$, i aquí "
         "$b=%s$." % tex(_b)),
       D("$(%s,%s)$" % (tex(_yv), tex(_xv)), "COORDENADES_INTERCANVIADES",
         "Has posat les coordenades al revés: primer la $x$ del vèrtex i "
         "després la $y$."),
       D("$(%s,%s)$" % (tex(_xv), tex(_c)), "SUBSTITUCIO_MAL_FETA",
         "La $x$ del vèrtex és correcta, però la $y$ no és el terme "
         "independent: cal substituir $x_v$ a la funció.")],
      ["La $x$ del vèrtex és $x_v=\\dfrac{-b}{2a}$.",
       "La $y$ s'obté substituint aquest valor a la funció."],
      ["$x_v=\\dfrac{-(%s)}{2\\cdot%s}=%s$" % (tex(_b), tex(_a), tex(_xv)),
       "$y_v=%s$" % tex(_yv),
       "Vèrtex: $(%s,%s)$" % (tex(_xv), tex(_yv))],
      ex_text=E300,
      # SENSE marca_vertex: el vèrtex és exactament la resposta.
      figura=grafica_parabola(float(_a), float(_b), float(_c)))


# =============================================================== Exercici 301
E301 = "Troba els talls amb els eixos de cada paràbola."

_301 = [
    ("a", F(1), F(-5), F(6), [2, 3]),
    ("b", F(1), F(2), F(-8), [-4, 2]),
    ("c", F(1), F(-4), F(4), [2]),
]
for _ap, _a, _b, _c, _arrels in _301:
    _sx = ", ".join("$(%d,0)$" % r for r in _arrels)
    _txt = ("%sx^2" % ("" if _a == 1 else tex(_a))) \
        + (("%s%sx" % ("+" if _b > 0 else "-", tex(abs(_b)) if abs(_b) != 1 else "")) if _b else "") \
        + (("%s%s" % ("+" if _c > 0 else "-", tex(abs(_c)))) if _c else "")
    Q("301%s" % _ap, 301, _ap, B2, "A",
      "$y=%s$" % _txt,
      "Amb $X$: %s. Amb $Y$: $(0,%s)$."
      % (_sx, tex(_c)) + (" (l'arrel és doble)" if len(_arrels) == 1 else ""),
      [D("Amb $X$: %s. Amb $Y$: $(0,%s)$."
         % (", ".join("$(%d,0)$" % -r for r in _arrels), tex(_c)),
         "SIGNE_ARRELS",
         "Els talls amb l'eix $X$ tenen el signe canviat. Comprova'ls "
         "substituint-los: han de fer que $y$ valgui $0$."),
       D("Amb $X$: %s. Amb $Y$: $(0,%s)$." % (_sx, tex(-_c)), "SIGNE_FINAL",
         "El tall amb l'eix $Y$ és el valor de la funció a $x=0$, que és el "
         "terme independent tal com és: $%s$." % tex(_c)),
       D("Amb $X$: %s. Amb $Y$: $(0,%s)$."
         % (", ".join("$(0,%d)$" % r for r in _arrels), tex(_c)),
         "COORDENADES_INTERCANVIADES",
         "Els talls amb l'eix $X$ tenen la segona coordenada igual a $0$, no "
         "la primera: són de la forma $(x,0)$.")],
      ["Els talls amb l'eix $X$ surten de resoldre $y=0$.",
       "El tall amb l'eix $Y$ surt de substituir $x=0$: és el terme "
       "independent."],
      ["$%s=0$ dona $x=%s$" % (_txt, ",\\;".join(str(r) for r in _arrels)),
       "Talls amb $X$: %s" % _sx,
       "A $x=0$: $y=%s$, o sigui el punt $(0,%s)$" % (tex(_c), tex(_c))],
      ex_text=E301,
      nota=("Quan l'equació té una arrel doble, la paràbola no travessa "
            "l'eix $X$: només el toca, i justament al vèrtex."
            if len(_arrels) == 1 else ""))
# SENSE FIGURA, decidit al merge. La gràfica no marcava res, però amb la
# corba dibuixada dos dels tres distractors s'eliminen només mirant-la: el
# d'arrels negatives (es veu per quin costat creua l'eix X) i el del tall
# amb Y canviat de signe (es veu si creua per damunt o per sota de l'origen).
# L'ítem passava de quatre opcions a dues sense fer cap operació, i el que
# s'hi practica és justament resoldre l'equació.


# =============================================================== Exercici 302
Q("302a", 302, "a", B2, "A",
  "Una paràbola té el vèrtex a $(2,-1)$ i passa per $(0,3)$. Quina és la "
  "seva equació?",
  "$y=x^2-4x+3$",
  [D("$y=x^2+4x+3$", "SIGNE_VERTEX",
     "Amb aquest signe el vèrtex quedaria a $x=-2$, no a $x=2$. Comprova-ho "
     "amb $x_v=\\dfrac{-b}{2a}$."),
   D("$y=(x-2)^2-1$ però amb $a=4$: $y=4x^2-16x+15$", "COEFICIENT_MAL_TRIAT",
     "El coeficient $a$ no és $4$: se'l troba imposant que la paràbola passi "
     "per $(0,3)$, i surt $a=1$."),
   D("$y=x^2-2x-1$", "VERTEX_COM_COEFICIENTS",
     "Sembla que has col·locat el $2$ i el $-1$ del vèrtex directament com a "
     "coeficients. El vèrtex no són els coeficients: cal fer servir la forma "
     "$y=a(x-x_v)^2+y_v$.")],
  ["Comença per la forma de vèrtex: $y=a(x-2)^2-1$.",
   "Substitueix-hi el punt $(0,3)$ per trobar $a$, i després desenvolupa."],
  ["$y=a(x-2)^2-1$",
   "Amb $(0,3)$: $3=a(0-2)^2-1=4a-1\\;\\Longrightarrow\\;a=1$",
   "$y=(x-2)^2-1=x^2-4x+4-1=x^2-4x+3$"],
  ex_text="",
  # nuvol_de_punts, no grafica_parabola: encara no es coneix "a" (és
  # la incògnita), així que no es pot dibuixar la paràbola sencera.
  # Es marquen només els dos punts donats (el vèrtex i el punt de pas).
  figura=nuvol_de_punts([(2, -1), (0, 3)], etiquetes=["vèrtex", None]))

Q("302b", 302, "b", B2, "A",
  "I una amb el vèrtex a $(-1,4)$ que passa per $(1,0)$?",
  "$y=-x^2-2x+3$",
  [D("$y=x^2+2x+5$", "SIGNE_COEFICIENT_PRINCIPAL",
     "Amb $a>0$ la paràbola s'obre cap amunt i el vèrtex seria un mínim. "
     "Aquí el vèrtex ($y=4$) queda per damunt del punt ($y=0$), així que ha "
     "de ser un màxim i $a$ ha de ser negatiu."),
   D("$y=-x^2+2x+3$", "SIGNE_VERTEX",
     "Amb aquest signe el vèrtex quedaria a $x=1$, no a $x=-1$."),
   D("$y=-4x^2-8x$", "COEFICIENT_MAL_TRIAT",
     "El coeficient $a$ surt d'imposar el punt: $0=a(1+1)^2+4=4a+4$, o sigui "
     "$a=-1$.")],
  ["Forma de vèrtex: $y=a(x+1)^2+4$.",
   "Substitueix-hi $(1,0)$ i troba $a$."],
  ["$y=a(x+1)^2+4$",
   "Amb $(1,0)$: $0=a\\cdot4+4\\;\\Longrightarrow\\;a=-1$",
   "$y=-(x+1)^2+4=-(x^2+2x+1)+4=-x^2-2x+3$"],
  ex_text="",
  figura=nuvol_de_punts([(-1, 4), (1, 0)], etiquetes=["vèrtex", None]))


# =============================================================== Exercici 303
E303 = ("Una companyia de telèfon cobra $12$ € fixos al mes més $0{,}05$ € "
        "per minut de trucada.")

Q("303a", 303, "a", B2, "A",
  "Escriu la funció que dona el preu segons els minuts.",
  "$y=0{,}05x+12$",
  [D("$y=12x+0{,}05$", "PENDENT_ORDENADA_INTERCANVIATS",
     "Els has intercanviat. El que depèn dels minuts és el $0{,}05$ (per "
     "cada minut), i el $12$ es paga sempre, encara que no truquis: és "
     "l'ordenada a l'origen."),
   D("$y=12{,}05x$", "PART_FIXA_VARIABLE_BARREJADES",
     "Has sumat la quota fixa al preu per minut. La quota es paga un cop, no "
     "cada minut."),
   D("$y=0{,}05x$", "TERME_OBLIDAT_OPERACIO",
     "T'has deixat els $12$ € fixos: amb $0$ minuts la factura no és $0$.")],
  ["Quina part de la factura no depèn dels minuts?",
   "Aquesta part és el terme independent; el preu per minut és el pendent."],
  ["Part fixa: $12$ € $\\to$ ordenada a l'origen",
   "Part variable: $0{,}05$ € per minut $\\to$ pendent",
   "$y=0{,}05x+12$"],
  ex_text=E303)

Q("303b", 303, "b", B2, "A",
  "Quant paga algú que ha parlat $340$ minuts?",
  "$29$ €",
  [D("$17$ €", "TERME_OBLIDAT_OPERACIO",
     "Has calculat només la part variable ($340\\cdot0{,}05$). Falta sumar-hi "
     "els $12$ € fixos."),
   D("$4\\,092$ €", "PENDENT_ORDENADA_INTERCANVIATS",
     "Sembla que has multiplicat els minuts per $12$. El $12$ és fix; el que "
     "es multiplica pels minuts és $0{,}05$."),
   D("$352$ €", "PRODUCTE_PER_SUMA",
     "Has sumat els minuts als euros. Cal multiplicar-los primer pel preu "
     "per minut.")],
  ["Substitueix $x=340$ a la funció.",
   "$0{,}05\\cdot340+12$."],
  ["$y=0{,}05\\cdot340+12=17+12=29$ €"],
  ex_text=E303)

Q("303c", 303, "c", B2, "A",
  "Amb quants minuts la factura arriba a $30$ €?",
  "$360$ minuts",
  [D("$600$ minuts", "TERME_OBLIDAT_OPERACIO",
     "Has fet $\\dfrac{30}{0{,}05}$ sense restar abans els $12$ € fixos, que "
     "es paguen igualment."),
   D("$1{,}5$ minuts", "INVERTIDA",
     "Has dividit al revés en algun pas: comprova que $0{,}05\\cdot1{,}5+12$ "
     "no arriba a $30$."),
   D("$18$ minuts", "PAS_INTERMEDI_PER_RESPOSTA",
     "El $18$ és el que queda després de restar la quota ($30-12$), en "
     "EUROS. Encara falta dividir-lo entre el preu per minut.")],
  ["Planteja l'equació $0{,}05x+12=30$.",
   "Resta primer els $12$ i després divideix."],
  ["$0{,}05x+12=30$",
   "$0{,}05x=18$",
   "$x=\\dfrac{18}{0{,}05}=360$ minuts"],
  ex_text=E303)


# =============================================================== Exercici 304
Q("304", 304, "", B2, "A",
  "Es vol tancar un corral rectangular amb $40$ m de tanca, aprofitant un "
  "mur que ja hi ha com un dels costats llargs. Si un dels costats "
  "perpendiculars al mur fa $x$ metres, l'àrea és $A(x)=x(40-2x)$. Quina "
  "$x$ dona l'àrea més gran?",
  "$x=10$ m, amb una àrea de $200$ m$^2$",
  [D("$x=20$ m, amb una àrea de $400$ m$^2$", "VERTEX_PER_ARREL",
     "Amb $x=20$ l'altre costat val $40-40=0$: no hi ha corral. El $20$ és "
     "una de les arrels de la paràbola, on l'àrea val zero, no el vèrtex."),
   D("$x=10$ m, amb una àrea de $100$ m$^2$", "SUBSTITUCIO_MAL_FETA",
     "La $x$ és correcta, però l'àrea no: $A(10)=10\\cdot(40-20)=10\\cdot20"
     "=200$."),
   D("$x=40$ m", "DADES_MAL_TRIADES",
     "El $40$ és la tanca total, no un costat. Amb $x=40$ l'altre costat "
     "sortiria negatiu.")],
  ["Desenvolupa $A(x)=x(40-2x)$ i mira quina mena de funció és.",
   "És una paràbola amb $a<0$: el punt més alt és el vèrtex."],
  ["$A(x)=40x-2x^2$, o sigui $a=-2$ i $b=40$",
   "Com que $a<0$, la paràbola s'obre cap avall i el vèrtex és un MÀXIM",
   "$x_v=\\dfrac{-40}{2\\cdot(-2)}=10$",
   "$A(10)=10\\cdot(40-20)=200$ m$^2$"],
  ex_text="",
  nota="Aquest tipus de problema —muntar una funció a partir d'un enunciat i "
       "buscar-ne el màxim— és el que es fa a 1r de batxillerat amb "
       "derivades. Amb una paràbola no calen: n'hi ha prou amb el vèrtex.")
