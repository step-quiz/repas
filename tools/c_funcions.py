# -*- coding: utf-8 -*-
"""c_funcions.py — Full 10: Funcions.

Genera els ítems dels exercicis 200-217, que corresponen a `im11.tex` del
repositori LaTeX font. Aquest fitxer conté TOT el temari de funcions
(concepte, domini i recorregut, creixement, rectes i paràboles) en un sol
full de 18 exercicis / 55 subapartats. Organitzats en 3 blocs:
  concepte_funcio      (200-203, 206)  concepte de funció, imatges, domini i
                                        recorregut, i estudi qualitatiu complet
  funcions_lineals     (207-209)       pendent i ordenada, monotonia sense
                                        representar, i equació des de dos punts
  funcions_quadratiques (212, 214-217) paràboles: obertura i amplada, vèrtex,
                                        talls amb els eixos i eix de simetria

Ítems exclosos (10 dels 55 subapartats), tots exercicis on la "resposta"
depèn essencialment de dibuixar o de llegir un número concret (1, 2, 3 o 4)
assignat a una gràfica dins d'una figura, no d'un càlcul ni d'una lectura
de forma qualitativa:
  204 (2 apartats) — "completa les gràfiques perquè siguin imparelles":
      exercici de dibuix pur, no hi ha resposta de tria múltiple.
  205 (1, sense apartats) — "completa la gràfica...explica com ho fas":
      dibuix + explicació oberta, mateix motiu que 204.
  210 (1, sense apartats) — "quina és la representació de y=-1/2x-1?"
      entre quatre gràfiques: cal identificar-la ENTRE QUATRE DIBUIXOS
      concrets que no tenim; reformular-ho com a pregunta purament
      algebraica trairia la naturalesa de l'exercici original.
  211 (4 apartats) — "relaciona cada expressió amb la seva gràfica" entre
      quatre rectes NUMERADES 1-4 en una figura: pitjor que 210, no hi ha
      cap manera honesta d'assignar els números 1-4 sense veure-la.
  213 (2 apartats) — "completa les paràboles" (dibuix) + "escriu
      l'expressió": la part de dibuix és clarament oberta, i la part
      algebraica depèn de llegir el valor exacte de vèrtex/obertura d'una
      gràfica que als dos apartats només es descriu qualitativament
      («per sobre de l'origen», sense la coordenada exacta), així que
      tampoc dona una resposta numèrica única i verificable.

Els 13 exercicis restants (45 subapartats) sí tenen una resposta calculable
o un judici de forma ben determinat pel text, i formen aquest banc.

Cap resposta s'escriu a mà. Els càlculs numèrics (imatges, pendents,
vèrtexs, talls amb els eixos) es fan amb Fraction exacte; les arrels no
exactes de l'exercici 202 es deixen com a aproximacions decimals explícites
(\\approx), tal com ja fa el solucionari font per aquests mateixos casos,
perquè no hi ha cap altra manera exacta de representar-les sense sortir del
domini racional del projecte.

Verificació prèvia: els 45 ítems s'han resolt de manera independent (Python
amb Fraction/aritmètica exacta, i pel cas de l'exercici 202c amb arrels
irracionals, math.sqrt per contrastar l'arrodoniment) contrastant contra
r-im11.tex abans d'escriure cap codi — coincidència exacta en els 45 casos,
sense cap error trobat al solucionari font.
"""
import math
from fractions import Fraction as F
from lib import Q, D, DT, tex, dificultats
from figures import grafica_recta, grafica_parabola, nuvol_de_punts, grafica_funcio

# --------------------------------------------------------------------
# Dificultat de cada exercici (1 directa, 2 encadenada, 3 completa).
# Full 10 · funcions
# Vegeu l'escala completa a lib.py. L'itinerari fa servir aquest camp
# per graduar el recorregut, de manera que canviar-hi un número canvia
# l'ordre en què l'alumne es troba els exercicis.
# --------------------------------------------------------------------
dificultats({
    200: 2,  # decidir si una relació és funció i justificar-ho
    201: 1,  # substituir valors i calcular imatges
    202: 1,
    203: 2,  # llegir domini i recorregut d'una gràfica descrita
    206: 3,  # estudi complet d'una gràfica
    207: 1,  # llegir el pendent i l'ordenada de l'expressió; 208, el signe del pendent
    208: 1,
    209: 2,  # muntar l'expressió de la recta a partir de dos punts
    212: 1,  # comparar obertures de paràboles a ull
    214: 2,  # a l'inrevés: quina constant dona aquest vèrtex
    215: 3,
    216: 3,  # talls, vèrtex i eix: tres càlculs encadenats sobre la mateixa paràbola
    217: 2,
})


B1 = "concepte_funcio"
B2 = "funcions_lineals"
B3 = "funcions_quadratiques"


# ---------------------------------------------------------------- renderitzat

def frac_tex(v):
    """Fraction/int -> LaTeX, sense $...$: enter tal qual, fracció amb
    \\dfrac i signe sempre al davant. Igual que lib.tex() però pensat per
    fer-lo servir directament dins d'altres cadenes ja delimitades."""
    v = F(v)
    if v.denominator == 1:
        return str(v.numerator)
    s = "-" if v.numerator < 0 else ""
    return r"%s\dfrac{%d}{%d}" % (s, abs(v.numerator), v.denominator)


def dec_tex(v, dec=2):
    """Decimal amb coma catalana, amb un nombre fix de decimals (per als
    valors arrodonits de l'exercici 202c/202d, que no són exactes)."""
    s = ("%.*f" % (dec, float(v))).replace(".", "{,}")
    return s


def punt_tex(x, y):
    """'(x,y)' per a un punt de coordenades exactes, sense $...$."""
    return r"(%s,\ %s)" % (frac_tex(x), frac_tex(y))


def mn_tex(m, n):
    """'m=..., n=...' (pendent i ordenada a l'origen), com a resposta
    empaquetada d'un sol ítem. Ja ve embolcallat en $...$ perquè conté
    lletres i mathify() no el reconeixeria com a matemàtica pura (vegeu
    el parany del mathify() (AUTHORING-GUIDE.md), i x_tex a
    c_equacions.py per al mateix patró amb sistemes)."""
    return r"$m=%s,\ n=%s$" % (frac_tex(m), frac_tex(n))


def recta_tex(m, n):
    """'y=mx+n' amb signes correctes, embolcallat en $...$."""
    if m == 1:
        mx = "x"
    elif m == -1:
        mx = "-x"
    else:
        mx = r"%sx" % frac_tex(m)
    if n == 0:
        cos = mx
    elif n > 0:
        cos = r"%s+%s" % (mx, frac_tex(n))
    else:
        cos = r"%s-%s" % (mx, frac_tex(-n))
    return "$y=%s$" % cos


def imatges_tex(vals):
    """'f(a)=v1, f(b)=v2, ...' per a la llista de 5-6 imatges d'un
    apartat de 201/202. `vals` és una llista de (entrada, valor); el
    valor pot ser Fraction (exacte) o una cadena LaTeX ja formatada (per
    als casos aproximats de 202c/202d). Embolcallat en $...$."""
    trossos = []
    for entrada, v in vals:
        vs = v if isinstance(v, str) else frac_tex(v)
        trossos.append(r"f(%s)=%s" % (frac_tex(entrada), vs))
    return "$%s$" % r",\ ".join(trossos)


def vertex_talls_tex(talls, eix_x, vertex):
    """Resposta empaquetada de l'exercici 216: talls amb els eixos, eix
    de simetria i vèrtex, tots junts com una sola cadena. `talls` és una
    llista de punts (x,y) en Fraction; `eix_x` i `vertex` són Fraction i
    (Fraction,Fraction) respectivament. Embolcallat en $...$."""
    talls_s = r",\ ".join(punt_tex(x, y) for x, y in talls)
    return (r"$\text{talls: }%s;\ \text{eix }x=%s;\ "
            r"\text{vèrtex }%s$"
            % (talls_s, frac_tex(eix_x), punt_tex(*vertex)))


# =====================================================================
# BLOC 1 — CONCEPTE DE FUNCIÓ (exercicis 200-203, 206)
# =====================================================================

# ---- exercici 200: relacions que són o no són funcions ----
E200 = "Raona quines de les relacions següents corresponen a funcions."

Q("200a", 200, "a", B1, "B",
  "La mida d'una paret i la quantitat de pintura necessària per pintar-la.",
  "SÍ és una funció: per a cada mida de paret (suposant un gruix de pintura "
  "fix) hi ha una única quantitat de pintura necessària.",
  [D("NO és una funció: la mateixa mida de paret podria necessitar "
     "quantitats de pintura diferents segons qui la pinti.",
     "VEREDICTE_INVERTIT",
     "Fixant el gruix de la pintura (com se sobreentén en un exercici "
     "d'aquest tipus), cada mida determina una única quantitat: SÍ és "
     "una funció, encara que a la pràctica hi puguin haver petites "
     "variacions per qui pinta."),
   D("NO és una funció: hi pot haver parets de la mateixa mida que "
     "necessitin diferent quantitat de pintura segons el color.",
     "VEREDICTE_INVERTIT",
     "El que fa que una relació sigui funció és que a cada mida li "
     "correspongui un únic valor de pintura sota les mateixes "
     "condicions (mateix gruix de capa): amb això fixat, SÍ és una "
     "funció."),
   D("Depèn: només és una funció si la paret és rectangular.",
     "VEREDICTE_INVERTIT",
     "La forma concreta de la paret no afecta si la relació és una "
     "funció: el que importa és que cada mida (àrea) determini una "
     "única quantitat de pintura, sigui quina sigui la forma.")],
  ["Una relació és una funció quan a cada valor de la primera magnitud "
   "li correspon un ÚNIC valor de la segona, mai més d'un."],
  ["Fixat el gruix de la pintura, cada mida de paret determina una "
   "única quantitat necessària: és una funció."],
  ex_text=E200)

Q("200b", 200, "b", B1, "B",
  "Cada mes de l'any i el seu nombre de dies.",
  "NO és una funció: el febrer no sempre té el mateix nombre de dies "
  "($28$ o $29$, segons l'any), així que un mateix mes té més d'un "
  "valor possible.",
  [D("SÍ és una funció: cada mes té un únic nombre de dies, determinat "
     "pel calendari.",
     "DOMINI_MAL_LLEGIT",
     "Això valdria si l'enunciat fixés un any concret. Tal com està, el "
     "conjunt de partida són els dotze mesos en abstracte, i el febrer "
     "pot valer $28$ o $29$: dues imatges per a un mateix element de "
     "partida."),
   D("NO és una funció: mesos diferents poden tenir el mateix nombre "
     "de dies (per exemple, abril i juny en tenen $30$ tots dos).",
     "VEREDICTE_INVERTIT",
     "El veredicte és correcte però el motiu no. Que dos elements "
     "DIFERENTS comparteixin imatge no trenca res: una funció ho pot "
     "fer. El que no pot passar és que un mateix element en tingui dues, "
     "i això és el que li passa al febrer."),
   D("Depèn: només és una funció si l'any no és de traspàs.",
     "DOMINI_MAL_LLEGIT",
     "Un cop fixat un any, sí que seria una funció, tant si és de "
     "traspàs com si no. Però l'enunciat no en fixa cap: parla dels "
     "mesos en general, i per això el febrer queda amb dos valors "
     "possibles.")],
  ["Comprova si algun mes podria tenir dos nombres de dies diferents.",
   "Fixa't en què és exactament el conjunt de partida: els dotze mesos, "
   "sense dir de quin any."],
  ["Per ser una funció, cada element del conjunt de partida ha de tenir "
   "una imatge i només una.",
   "El febrer en té dues de possibles, $28$ i $29$, perquè l'enunciat no "
   "diu de quin any parlem.",
   "N'hi ha prou amb un sol element que en tingui dues: la relació NO és "
   "una funció."],
  ex_text=E200,
  nota_interna="L'enunciat original diu «cada mes de l'any» i es manté "
               "així. Una versió anterior hi afegia «d'un any concret» "
               "per fer-la determinista, cosa que convertia la resposta "
               "en SÍ i esborrava justament el cas que l'exercici vol "
               "que es reconegui.")


Q("200c", 200, "c", B1, "B",
  "El radi d'una circumferència i la longitud del seu perímetre.",
  r"SÍ és una funció: cada radi determina una única longitud de "
  r"perímetre, mitjançant la fórmula $L=2\pi r$.",
  [D("NO és una funció: circumferències de radis diferents poden tenir "
     "perímetres semblants, així que no es pot saber amb certesa.",
     "VEREDICTE_INVERTIT",
     r"Que dos perímetres siguin \emph{semblants} no és el mateix que "
     r"iguals: la fórmula $L=2\pi r$ dona, per a cada radi concret, un "
     r"únic valor exacte de perímetre, sense ambigüitat."),
   D("NO és una funció: el perímetre depèn també del diàmetre, no "
     "només del radi.", "VEREDICTE_INVERTIT",
     r"El diàmetre és sempre el doble del radi ($d=2r$), així que no "
     r"és una magnitud independent: fixat el radi, el perímetre "
     r"$L=2\pi r$ queda completament determinat."),
   D("Depèn: només és una funció si es fa servir un valor aproximat "
     "de $\\pi$.", "VEREDICTE_INVERTIT",
     r"L'aproximació de $\pi$ que es faci servir no canvia que la "
     r"relació sigui una funció: per a cada radi hi ha un únic "
     r"perímetre corresponent, exacte o aproximat.")],
  [r"La fórmula del perímetre, $L=2\pi r$, assigna a cada radi un "
   r"únic valor de $L$."],
  [r"Per a cada radi $r$ hi ha un únic perímetre $L=2\pi r$: és una "
   r"funció."],
  ex_text=E200)


# ---- exercici 201: calcula les imatges (4 funcions, 6 valors cadascuna) ----
E201 = ("Calcula la imatge dels valors $x=2,\\ -2,\\ 3,\\ -3,\\ 1,\\ -1$ per "
        "a cada funció.")
_E201_ENTR = [2, -2, 3, -3, 1, -1]


def _im201(fn):
    return imatges_tex([(e, F(fn(e))) for e in _E201_ENTR])


def _im201_dist(fn):
    return imatges_tex([(e, F(fn(e))) for e in _E201_ENTR])


Q("201a", 201, "a", B1, "A",
  r"$f(x)=5x^2-1$",
  _im201(lambda x: 5 * x * x - 1),
  [D(_im201_dist(lambda x: 5 * (2 * x) - 1), "POTENCIA_COM_PRODUCTE",
     r"$x^2$ no és $2x$: per exemple, per $x=2$, $x^2=4$ (no $2\cdot 2=4$"
     r"... prova-ho amb $x=3$: $x^2=9\neq 6$)."),
   D(_im201_dist(lambda x: 5 * x * x), "TERME_OBLIDAT_OPERACIO",
     r"Falta restar l'$1$ final a cada imatge."),
   D(_im201_dist(lambda x: (-5 * x * x - 1) if x < 0 else (5 * x * x - 1)),
     "SIGNE_FINAL",
     r"$x^2$ sempre és positiu, tant si $x$ és positiu com negatiu: "
     r"$(-2)^2=4$, igual que $2^2=4$.")],
  [r"Substitueix cada valor de $x$ a l'expressió $5x^2-1$, calculant "
   r"primer el quadrat."],
  [r"Per a cada valor, calcula primer $x^2$ i després multiplica per "
   r"$5$ i resta $1$.",
   r"$f(2)=5\cdot 4-1=19$, $f(-2)=5\cdot 4-1=19$ (el quadrat elimina "
   r"el signe).",
   r"$f(3)=5\cdot 9-1=44$, $f(-3)=44$, $f(1)=4$, $f(-1)=4$."],
  ex_text=E201,
  # La resposta és la taula d'imatges (valors concrets de f(2), f(-2)...),
  # no la forma de la paràbola: dibuixar-la sense marques no en revela
  # cap valor, i com que l'expressió ja porta l'exponent, la corba no fa
  # més que il·lustrar-la, no substituir el càlcul.
  figura=grafica_parabola(5.0, 0.0, -1.0))

Q("201b", 201, "b", B1, "A",
  r"$f(x)=2x^2-x$",
  _im201(lambda x: 2 * x * x - x),
  [D(_im201_dist(lambda x: 2 * x * x + x), "SUMA_EN_LLOC_RESTA",
     r"Cal RESTAR $x$, no sumar-lo: $f(x)=2x^2-x$."),
   D(_im201_dist(lambda x: 2 * (2 * x) - x), "POTENCIA_COM_PRODUCTE",
     r"$x^2$ no és $2x$: comprova-ho amb $x=3$, on $x^2=9$ i no "
     r"$2\cdot 3=6$."),
   D(_im201_dist(lambda x: (2 * x) ** 2 - x), "POTENCIA_APLICADA_MALAMENT",
     r"El quadrat només afecta la $x$, no el $2x$ sencer: és $2\cdot "
     r"x^2$, no $(2x)^2$.")],
  [r"Substitueix cada valor de $x$ a $2x^2-x$, respectant l'ordre: "
   r"primer el quadrat, després la resta."],
  [r"Per a cada valor, calcula $x^2$, multiplica per $2$ i resta $x$.",
   r"$f(2)=2\cdot 4-2=6$, $f(-2)=2\cdot 4-(-2)=10$.",
   r"$f(3)=2\cdot 9-3=15$, $f(-3)=2\cdot 9-(-3)=21$, $f(1)=1$, "
   r"$f(-1)=3$."],
  ex_text=E201)

Q("201c", 201, "c", B1, "A",
  r"$f(x)=x^2-x-1$",
  _im201(lambda x: x * x - x - 1),
  [D(_im201_dist(lambda x: x * x + x - 1), "SIGNE_TERME_INDEPENDENT",
     r"El terme $-x$ té signe negatiu: cal RESTAR $x$, no sumar-lo."),
   D(_im201_dist(lambda x: x * x - x), "TERME_OBLIDAT_OPERACIO",
     r"Falta restar l'$1$ final a cada imatge."),
   D(_im201_dist(lambda x: 2 * x - x - 1), "POTENCIA_COM_PRODUCTE",
     r"$x^2$ no és $2x$: comprova-ho amb $x=3$, on $x^2=9$ i no "
     r"$2\cdot 3=6$.")],
  [r"Substitueix cada valor de $x$ a $x^2-x-1$."],
  [r"Per a cada valor, calcula $x^2$, resta $x$ i resta $1$.",
   r"$f(2)=4-2-1=1$, $f(-2)=4-(-2)-1=5$.",
   r"$f(3)=9-3-1=5$, $f(-3)=9-(-3)-1=11$, $f(1)=-1$, $f(-1)=1$."],
  ex_text=E201)

Q("201d", 201, "d", B1, "A",
  r"$f(x)=-x^2+1$",
  _im201(lambda x: -x * x + 1),
  [D(_im201_dist(lambda x: x * x + 1), "SIGNE_FINAL",
     r"El signe $-$ davant $x^2$ afecta sempre, també quan $x$ és "
     r"negatiu: $-(-2)^2=-4$, no $+4$."),
   D(_im201_dist(lambda x: -2 * x + 1), "POTENCIA_COM_PRODUCTE",
     r"$x^2$ no és $2x$: comprova-ho amb $x=3$, on $x^2=9$ i no "
     r"$2\cdot 3=6$."),
   D(_im201_dist(lambda x: -x * x - 1), "SIGNE_TERME_INDEPENDENT",
     r"El $+1$ final és positiu: cal SUMAR-lo, no restar-lo.")],
  [r"Substitueix cada valor de $x$ a $-x^2+1$: calcula primer $x^2$ "
   r"(sempre positiu) i després canvia'n el signe."],
  [r"Per a cada valor, calcula $x^2$, canvia'n el signe i suma $1$.",
   r"$f(2)=-4+1=-3$, $f(-2)=-4+1=-3$ (el quadrat elimina el signe "
   r"de $x$ abans de canviar-lo).",
   r"$f(3)=-8$, $f(-3)=-8$, $f(1)=0$, $f(-1)=0$."],
  ex_text=E201)


# ---- exercici 202: calcula les imatges (funcions més diverses, 5 valors) ----
E202 = ("Calcula la imatge dels valors $x=-2,\\ -1,\\ 0,\\ 1,\\ 2$ per a cada "
        "funció. Quan el resultat no sigui exacte, arrodoneix a les "
        "centèsimes.")
_E202_ENTR = [-2, -1, 0, 1, 2]


def _im202(vals):
    return imatges_tex(list(zip(_E202_ENTR, vals)))


Q("202a", 202, "a", B1, "A",
  r"$f(x)=x^3-1$",
  _im202([F(x) ** 3 - 1 for x in _E202_ENTR]),
  [D(_im202([x * 3 - 1 for x in _E202_ENTR]), "POTENCIA_COM_PRODUCTE",
     r"$x^3$ no és $3x$: per exemple, per $x=2$, $x^3=8$ (no $3\cdot "
     r"2=6$)."),
   D(_im202([F(x) ** 3 for x in _E202_ENTR]), "TERME_OBLIDAT_OPERACIO",
     r"Falta restar l'$1$ final a cada imatge."),
   D(_im202([abs(x) ** 3 - 1 for x in _E202_ENTR]),
     "POTENCIA_APLICADA_MALAMENT",
     r"El cub d'un nombre negatiu és negatiu: $(-2)^3=-8$, no $8$.")],
  [r"Substitueix cada valor a $x^3-1$, calculant primer el cub "
   r"(recorda que el cub d'un negatiu és negatiu)."],
  [r"Per a cada valor, calcula $x^3$ i resta $1$.",
   r"$f(-2)=(-2)^3-1=-8-1=-9$, $f(-1)=-1-1=-2$, $f(0)=-1$, $f(1)=0$, "
   r"$f(2)=8-1=7$."],
  ex_text=E202)

Q("202b", 202, "b", B1, "A",
  r"$f(x)=\dfrac{1}{x^2+2}$",
  _im202([F(1, x ** 2 + 2) for x in _E202_ENTR]),
  [D(_im202([F(x ** 2 + 2, 1) for x in _E202_ENTR]), "INVERTIDA",
     r"La fracció ha quedat invertida: la $f(x)$ correcta és "
     r"$\dfrac{1}{x^2+2}$, no $x^2+2$."),
   D(_im202([F(x ** 2, 1) for x in _E202_ENTR]),
     "TERME_OBLIDAT_OPERACIO",
     r"Falta sumar el $2$ del denominador i, sobretot, invertir la "
     r"fracció: el resultat és $\dfrac{1}{x^2+2}$, no $x^2$."),
   D(_im202([F(1, -x ** 2 + 2) if -x ** 2 + 2 != 0 else F(0)
              for x in _E202_ENTR]), "SIGNE_FINAL",
     r"El $x^2$ del denominador és sempre positiu i se suma (no es "
     r"resta): és $x^2+2$, no $-x^2+2$.")],
  [r"Calcula primer $x^2+2$ per a cada valor i després inverteix el "
   r"resultat."],
  [r"Per a cada valor, calcula $x^2+2$ i fes-ne la fracció inversa.",
   r"$f(-2)=\dfrac{1}{4+2}=\dfrac{1}{6}$, $f(-1)=\dfrac{1}{3}$, "
   r"$f(0)=\dfrac{1}{2}$, $f(1)=\dfrac{1}{3}$, $f(2)=\dfrac{1}{6}$."],
  ex_text=E202)

Q("202c", 202, "c", B1, "A",
  r"$f(x)=\sqrt{\dfrac{x}{2}+5}$",
  _im202([dec_tex((x / 2 + 5) ** 0.5) for x in _E202_ENTR]),
  [D(_im202([dec_tex((x + 5) ** 0.5) for x in _E202_ENTR]),
     "TERME_OBLIDAT_OPERACIO",
     r"Falta dividir la $x$ entre $2$ abans de sumar $5$: dins de "
     r"l'arrel hi ha $\dfrac{x}{2}+5$, no $x+5$."),
   D(_im202([dec_tex((x / 2 + 5) ** 2) for x in _E202_ENTR]),
     "OPERACIO_INVERSA",
     r"S'ha elevat al quadrat en lloc de fer l'arrel: per desfer una "
     r"arrel es calcula l'arrel, no el quadrat."),
   D(_im202([dec_tex(-((x / 2 + 5) ** 0.5)) for x in _E202_ENTR]),
     "SIGNE_FINAL",
     r"L'arrel quadrada d'un nombre positiu és sempre positiva.")],
  [r"Calcula primer el que hi ha dins l'arrel ($\dfrac{x}{2}+5$) i "
   r"després fes-ne l'arrel quadrada amb la calculadora."],
  [r"Per a cada valor, calcula $\dfrac{x}{2}+5$ i fes-ne l'arrel "
   r"quadrada, arrodonint a les centèsimes.",
   r"$f(-2)=\sqrt{4}=2{,}00$, $f(-1)=\sqrt{4{,}5}\approx 2{,}12$, "
   r"$f(0)=\sqrt{5}\approx 2{,}24$, $f(1)=\sqrt{5{,}5}\approx 2{,}35$, "
   r"$f(2)=\sqrt{6}\approx 2{,}45$."],
  ex_text=E202,
  # Sense nota: advertia de l'arrodoniment a les centèsimes, cosa que
  # l'encapçalament ja demana.
  )

Q("202d", 202, "d", B1, "A",
  r"$f(x)=\dfrac{x^2}{3}-2x+\dfrac{3}{5}$",
  _im202([F(x ** 2, 3) - 2 * x + F(3, 5) for x in _E202_ENTR]),
  [D(_im202([F(x ** 2, 3) + 2 * x + F(3, 5) for x in _E202_ENTR]),
     "SUMA_EN_LLOC_RESTA",
     r"El terme $2x$ se RESTA, no se suma: és $-2x$."),
   D(_im202([F(x ** 2) - 2 * x + F(3, 5) for x in _E202_ENTR]),
     "TERME_OBLIDAT_OPERACIO",
     r"Falta dividir $x^2$ entre $3$: el primer terme és "
     r"$\dfrac{x^2}{3}$, no $x^2$."),
   D(_im202([F(x ** 2, 3) - 2 * x - F(3, 5) for x in _E202_ENTR]),
     "SIGNE_TERME_INDEPENDENT",
     r"El terme $\dfrac{3}{5}$ és positiu i se suma, no se resta.")],
  [r"Substitueix cada valor a $\dfrac{x^2}{3}-2x+\dfrac{3}{5}$ i opera "
   r"amb fraccions, buscant denominador comú (15) al final."],
  [r"Calcula per separat $\dfrac{x^2}{3}$, $-2x$ i $\dfrac{3}{5}$, i "
   r"suma-ho tot amb denominador comú $15$.",
   r"$f(-2)=\dfrac{4}{3}+4+\dfrac{3}{5}=\dfrac{20+60+9}{15}="
   r"\dfrac{89}{15}$.",
   r"$f(-1)=\dfrac{44}{15}$, $f(0)=\dfrac{3}{5}$, $f(1)=-\dfrac{16}"
   r"{15}$, $f(2)=-\dfrac{31}{15}$."],
  ex_text=E202)


# ---- exercici 203: domini i recorregut ----
E203 = ("Indica el domini i el recorregut de cada funció, descrita per la "
        "seva gràfica.")

Q("203a", 203, "a", B1, "B",
  "Una gràfica formada per dues branques de corba que s'apropen sense "
  "arribar mai a la recta vertical $x=2$ ni a la recta horitzontal "
  "$y=0$.",
  r"Domini: $\mathbb{R}-\{2\}$ (tots els reals excepte $2$). "
  r"Recorregut: $\mathbb{R}-\{0\}$ (tots els reals excepte $0$).",
  [D(r"Domini: $\mathbb{R}-\{0\}$. Recorregut: $\mathbb{R}-\{2\}$.",
     "DOMINI_RECORREGUT_INTERCANVIATS",
     r"El domini és el conjunt de valors de $x$ (l'asímptota vertical "
     r"és $x=2$) i el recorregut el de $y$ (l'asímptota horitzontal "
     r"és $y=0$): estan intercanviats."),
   D(r"Domini: $[2,+\infty)$. Recorregut: $[0,+\infty)$.",
     "ASIMPTOTA_COM_LIMIT",
     r"$x=2$ i $y=0$ no són els extrems d'un interval, són valors que "
     r"la gràfica no arriba a tocar mai (asímptotes): el domini i el "
     r"recorregut són tots els reals excepte aquests dos valors, no "
     r"un interval que hi comenci."),
   D(r"Domini: $\mathbb{R}$. Recorregut: $\mathbb{R}-\{0\}$.",
     "RESTRICCIO_OBLIDADA",
     r"La gràfica tampoc arriba a tocar la recta $x=2$: cal excloure "
     r"aquest valor del domini, igual que s'exclou el $0$ del "
     r"recorregut.")],
  ["Busca els valors de $x$ i de $y$ que la gràfica no arriba mai a "
   "tocar (les asímptotes): aquests són els que cal excloure."],
  [r"La gràfica no toca mai la recta vertical $x=2$: el domini és "
   r"$\mathbb{R}-\{2\}$.",
   r"Tampoc toca mai la recta horitzontal $y=0$: el recorregut és "
   r"$\mathbb{R}-\{0\}$."],
  ex_text=E203,
  figura=grafica_funcio(
      lambda x: 1 / (x - 2), -3, 7, -5, 5,
      "Gràfica amb dues branques que s'apropen a x=2 i a y=0 sense "
      "tocar-les mai.",
      # Les branques arriben senceres als dos costats del quadre (no es
      # tallen abans per sortir del marge vertical): un tram discontinu
      # hi indica que continuen, perquè el domini no s'acaba on s'acaba
      # el dibuix (auditoria, punt E — abans no hi havia cap indicació
      # de continuïtat).
      continua_esq=True, continua_dreta=True))

Q("203b", 203, "b", B1, "B",
  "Una gràfica que només existeix entre $x=-3$ i $x=4$ (extrems "
  "inclosos), i que oscil·la entre una alçada mínima de $-2$ i una "
  "màxima de $3$.",
  r"Domini: $[-3,4]$. Recorregut: $[-2,3]$.",
  [D(r"Domini: $[-2,3]$. Recorregut: $[-3,4]$.",
     "DOMINI_RECORREGUT_INTERCANVIATS",
     r"El domini és l'interval de valors de $x$ ($-3$ a $4$) i el "
     r"recorregut el de $y$ ($-2$ a $3$): estan intercanviats."),
   D(r"Domini: $(-3,4)$. Recorregut: $(-2,3)$.",
     "EXTREMS_OBLIDATS",
     r"Els extrems $-3$, $4$, $-2$ i $3$ estan inclosos (la gràfica hi "
     r"arriba), així que els intervals són tancats, amb claudàtors "
     r"$[\ ]$, no oberts amb parèntesis."),
   D(r"Domini: $[-3,4]$. Recorregut: $[0,3]$.",
     "SIGNE_FINAL",
     r"L'alçada mínima de la gràfica és $-2$ (per sota de l'eix "
     r"horitzontal), no $0$: el recorregut comença a $-2$.")],
  ["El domini és l'interval de valors de $x$ on existeix la gràfica; "
   "el recorregut, l'interval d'alçades ($y$) que arriba a assolir."],
  [r"La gràfica va de $x=-3$ a $x=4$, amb els extrems inclosos: domini "
   r"$[-3,4]$.",
   r"L'alçada oscil·la entre $-2$ i $3$, també inclosos: recorregut "
   r"$[-2,3]$."],
  ex_text=E203,
  figura=grafica_funcio(
      lambda x: 0.5 + 2.5 * __import__("math").sin(1.15 * (x + 3)),
      -3, 4, -2.6, 3.6,
      "Gràfica definida entre x=-3 i x=4, oscil·lant entre -2 i 3.",
      # Els dos extrems són inclosos: l'enunciat ja ho diu en paraules
      # ("extrems inclosos"), així que marcar-los amb un punt ple no
      # afegeix cap dada nova, només l'il·lustra (auditoria, punt E).
      tancat_esq=True, tancat_dreta=True))

Q("203c", 203, "c", B1, "B",
  "Una gràfica que s'estén cap a l'esquerra i cap a la dreta sense "
  "límit, amb un punt més baix a alçada $-1$ i que a partir d'aquí "
  "puja indefinidament cap als dos costats.",
  r"Domini: $\mathbb{R}$ (tots els reals). Recorregut: $[-1,+\infty)$.",
  [D(r"Domini: $[-1,+\infty)$. Recorregut: $\mathbb{R}$.",
     "DOMINI_RECORREGUT_INTERCANVIATS",
     r"Que la gràfica s'estengui sense límit cap a l'esquerra i la "
     r"dreta descriu el domini (valors de $x$); que tingui un punt "
     r"més baix a alçada $-1$ descriu el recorregut (valors de $y$): "
     r"estan intercanviats."),
   D(r"Domini: $\mathbb{R}$. Recorregut: $(-\infty,-1]$.",
     "SIGNE_FINAL",
     r"La gràfica puja a partir del punt més baix, no baixa: els "
     r"valors de $y$ van des de $-1$ cap AMUNT, no cap avall."),
   D(r"Domini: $\mathbb{R}$. Recorregut: $(-1,+\infty)$.",
     "EXTREMS_OBLIDATS",
     r"El punt més baix, a alçada $-1$, sí forma part de la gràfica "
     r"(hi ha un mínim, no una asímptota): l'interval és tancat per "
     r"aquest costat, $[-1,+\infty)$, no obert.")],
  ["Si la gràfica s'estén sense límit cap als dos costats "
   "horitzontalment, el domini és tot $\\mathbb{R}$; fixa't en si el "
   "punt més baix forma part o no de la gràfica."],
  [r"La gràfica existeix per a qualsevol valor de $x$: domini "
   r"$\mathbb{R}$.",
   r"El valor més baix que assoleix $y$ és $-1$ (inclòs), i puja sense "
   r"límit: recorregut $[-1,+\infty)$."],
  ex_text=E203,
  figura=grafica_funcio(
      lambda x: x * x - 1, -4, 4, -2, 8,
      "Gràfica amb un punt més baix, que puja indefinidament cap als "
      "dos costats.",
      # La paràbola surt del marge vertical molt abans d'arribar a
      # x=-4/4 (puja de pressa): sense això es tallava a mitja figura
      # sense cap indicació que seguia, com si el domini s'acabés allà
      # (auditoria, punt E — l'enunciat ja diu "sense límit").
      continua_esq=True, continua_dreta=True))

Q("203d", 203, "d", B1, "B",
  "Una gràfica que només existeix per a valors de $x$ fins a $5$ "
  "(inclòs, cap a l'esquerra sense límit), amb un punt més baix a "
  "alçada $0$ (quan $x=5$) i que a partir d'aquí puja indefinidament "
  "com més ens allunyem cap a l'esquerra.",
  r"Domini: $(-\infty,5]$. Recorregut: $[0,+\infty)$.",
  [D(r"Domini: $[0,+\infty)$. Recorregut: $(-\infty,5]$.",
     "DOMINI_RECORREGUT_INTERCANVIATS",
     r"Que existeixi fins a $x=5$ descriu el domini (valors de $x$); "
     r"que tingui un punt més baix a $0$ descriu el recorregut (valors "
     r"de $y$): estan intercanviats."),
   D(r"Domini: $(-\infty,5)$. Recorregut: $[0,+\infty)$.",
     "EXTREMS_OBLIDATS",
     r"El $5$ està inclòs (la gràfica hi arriba): l'interval és "
     r"$(-\infty,5]$, tancat per aquest costat, no obert."),
   D(r"Domini: $[5,+\infty)$. Recorregut: $[0,+\infty)$.",
     "SIGNE_FINAL",
     r"La gràfica existeix cap a l'ESQUERRA de $x=5$ (sense límit "
     r"cap a l'esquerra), no cap a la dreta: és $(-\infty,5]$, no "
     r"$[5,+\infty)$.")],
  ["Fixa't cap a quin costat s'estén sense límit horitzontalment, i "
   "si l'extrem $x=5$ forma part o no de la gràfica."],
  [r"La gràfica existeix per a $x\leq 5$, amb el $5$ inclòs: domini "
   r"$(-\infty,5]$.",
   r"El valor més baix que assoleix $y$ és $0$ (a $x=5$, inclòs), i "
   r"puja sense límit com més s'allunya cap a l'esquerra: recorregut "
   r"$[0,+\infty)$."],
  ex_text=E203,
  figura=grafica_funcio(
      lambda x: math.sqrt(5 - x) if x <= 5 else None,
      -4, 6, -1, 6,
      "Gràfica que existeix fins a x=5, amb un punt més baix a "
      "alçada 0 en aquest extrem, pujant cap a l'esquerra."))


# ---- exercici 206: estudi qualitatiu complet (domini, recorregut, "
# "creixement i extrems) ----
E206 = ("Fes l'estudi complet (domini, recorregut, creixement/decreixement "
        "i extrems) de cada funció, descrita per la seva gràfica.")

Q("206a", 206, "a", B1, "B",
  "Una recta que travessa tot el pla, pujant sempre de manera "
  "constant, sense cap tram pla ni cap màxim o mínim.",
  r"Domini i recorregut: $\mathbb{R}$. És creixent a tot el domini. "
  r"No té cap màxim ni mínim.",
  [D(r"Domini i recorregut: $\mathbb{R}$. És decreixent a tot el "
     r"domini. No té cap màxim ni mínim.", "SIGNE_FINAL",
     r"Que pugi sempre vol dir que és CREIXENT, no decreixent: com "
     r"més gran és $x$, més gran és $y$."),
   D(r"Domini i recorregut: $\mathbb{R}$. És creixent a tot el domini. "
     r"Té un màxim on la recta talla l'eix vertical.",
     "TALL_COM_EXTREM",
     r"El punt on la recta talla un eix no és un màxim ni un mínim: "
     r"una recta que puja sempre no té cap punt on canviï de pujar a "
     r"baixar, per tant no té cap extrem."),
   D(r"Domini: $\mathbb{R}$. Recorregut: $[0,+\infty)$. És creixent a "
     r"tot el domini. No té cap màxim ni mínim.",
     "RESTRICCIO_INVENTADA",
     r"Una recta que travessa tot el pla sense cap límit arriba a "
     r"qualsevol valor de $y$, també als negatius: el recorregut és "
     r"tot $\mathbb{R}$, no només els positius.")],
  ["Una recta que puja sempre sense cap tram pla és creixent a tot "
   "arreu i no té cap punt on deixi de pujar (cap extrem)."],
  [r"La recta travessa tot el pla en totes direccions: domini i "
   r"recorregut $\mathbb{R}$.",
   r"Puja de manera constant, sense cap tram on baixi: és creixent a "
   r"tot el domini.",
   r"Com que no canvia mai de pujar a baixar, no té cap màxim ni "
   r"mínim."],
  # SENSE figura: l'enunciat d'aquest apartat és purament qualitatiu
  # (cap número), a diferència de 203a-d i 206b-c. Amb figura, un
  # lector de pantalla no podria resoldre l'exercici sense veure-la
  # (test_l_enunciat_es_resol_sense_veure_la_figura ho detecta).
  ex_text=E206)

Q("206b", 206, "b", B1, "B",
  "Una paràbola oberta cap amunt, amb el punt més baix al $(1,-3)$, "
  "que baixa fins a aquest punt i després torna a pujar, estenent-se "
  "sense límit cap als dos costats.",
  r"Domini: $\mathbb{R}$. Recorregut: $[-3,+\infty)$. És decreixent a "
  r"$(-\infty,1)$ i creixent a $(1,+\infty)$. Té un mínim absolut al "
  r"punt $(1,-3)$.",
  [D(r"Domini: $\mathbb{R}$. Recorregut: $[-3,+\infty)$. És creixent a "
     r"$(-\infty,1)$ i decreixent a $(1,+\infty)$. Té un mínim absolut "
     r"al punt $(1,-3)$.", "CREIXEMENT_INVERTIT",
     r"Abans d'arribar al punt més baix la funció BAIXA (decreix), i "
     r"només torna a pujar (creix) després: els dos trams estan "
     r"intercanviats."),
   D(r"Domini: $\mathbb{R}$. Recorregut: $[-3,+\infty)$. És decreixent "
     r"a $(-\infty,1)$ i creixent a $(1,+\infty)$. Té un màxim absolut "
     r"al punt $(1,-3)$.", "EXTREM_INVERTIT",
     r"El punt $(1,-3)$ és el punt més BAIX de la gràfica (la "
     r"paràbola és oberta cap amunt): és un mínim, no un màxim."),
   D(r"Domini: $[-3,+\infty)$. Recorregut: $\mathbb{R}$. És decreixent "
     r"a $(-\infty,1)$ i creixent a $(1,+\infty)$. Té un mínim absolut "
     r"al punt $(1,-3)$.", "DOMINI_RECORREGUT_INTERCANVIATS",
     r"La paràbola s'estén sense límit horitzontalment (domini "
     r"$\mathbb{R}$) però només arriba a $y=-3$ per avall "
     r"(recorregut $[-3,+\infty)$): estan intercanviats.")],
  ["El punt més baix d'una paràbola oberta cap amunt és sempre un "
   "mínim; abans d'arribar-hi, la funció decreix, i després creix."],
  [r"La paràbola s'estén sense límit horitzontalment: domini "
   r"$\mathbb{R}$.",
   r"Mai baixa de $y=-3$ (és el punt més baix): recorregut "
   r"$[-3,+\infty)$.",
   r"Decreix fins arribar al punt $(1,-3)$ i, a partir d'aquí, "
   r"creix: decreixent a $(-\infty,1)$, creixent a $(1,+\infty)$.",
   r"El punt $(1,-3)$, on canvia de decréixer a créixer, és un mínim "
   r"absolut."],
  ex_text=E206,
  figura=grafica_funcio(
      lambda x: (x - 1) ** 2 - 3, -3, 5, -4, 6,
      "Paràbola oberta cap amunt, que baixa fins a un punt i després "
      "torna a pujar."))

Q("206c", 206, "c", B1, "B",
  "Una gràfica que puja fins a un punt més alt en $(0,2)$, després "
  "baixa fins a un punt més baix en $(3,-1)$, i a partir d'aquí torna "
  "a pujar indefinidament.",
  r"És creixent a $(-\infty,0)$, decreixent a $(0,3)$ i creixent a "
  r"$(3,+\infty)$. Té un màxim relatiu al punt $(0,2)$ i un mínim "
  r"relatiu al punt $(3,-1)$.",
  [D(r"És decreixent a $(-\infty,0)$, creixent a $(0,3)$ i decreixent "
     r"a $(3,+\infty)$. Té un mínim relatiu al punt $(0,2)$ i un "
     r"màxim relatiu al punt $(3,-1)$.", "CREIXEMENT_INVERTIT",
     r"Cada tram de creixement i decreixement, i cada màxim i mínim, "
     r"estan invertits respecte a la descripció: la funció PUJA abans "
     r"de $(0,2)$ (és un màxim, no un mínim) i torna a pujar després "
     r"de $(3,-1)$ (és un mínim, no un màxim)."),
   D(r"És creixent a $(-\infty,0)$, decreixent a $(0,3)$ i creixent a "
     r"$(3,+\infty)$. Té un màxim absolut al punt $(0,2)$ i un mínim "
     r"absolut al punt $(3,-1)$.", "RELATIU_COM_ABSOLUT",
     r"Com que la gràfica torna a pujar sense límit després de "
     r"$(3,+\infty)$, hi ha valors de $y$ més grans que $2$ més "
     r"endavant: $(0,2)$ no és el punt més alt de TOTA la gràfica "
     r"(no és absolut), només ho és comparat amb els punts del "
     r"voltant (és relatiu). El mateix passa amb el mínim."),
   D(r"És creixent a $(-\infty,0)$, decreixent a $(0,3)$ i creixent a "
     r"$(3,+\infty)$. Té un màxim relatiu al punt $(2,0)$ i un mínim "
     r"relatiu al punt $(-1,3)$.", "COORDENADES_INTERCANVIADES",
     r"A cada punt, la primera coordenada és el valor de $x$ i la "
     r"segona el de $y$: els màxims i mínims són als punts $(0,2)$ i "
     r"$(3,-1)$, no $(2,0)$ i $(-1,3)$.")],
  ["Un màxim o mínim és RELATIU (no absolut) si la gràfica torna a "
   "superar-lo més endavant o més enrere; és absolut només si és el "
   "punt més alt (o baix) de TOTA la gràfica."],
  [r"Puja fins al punt $(0,2)$: creixent a $(-\infty,0)$; aquest punt "
   r"és un màxim.",
   r"Després baixa fins al punt $(3,-1)$: decreixent a $(0,3)$; "
   r"aquest punt és un mínim.",
   r"A partir d'aquí torna a pujar sense límit: creixent a "
   r"$(3,+\infty)$.",
   r"Com que a la dreta la gràfica puja sense límit, en algun moment "
   r"torna a superar $y=2$: el màxim $(0,2)$ no és el punt més alt de "
   r"tota la gràfica, només ho és localment (relatiu). I com que a "
   r"l'esquerra la gràfica ve creixent des de $-\infty$, abans "
   r"d'arribar a $(0,2)$ ja havia passat per valors per sota de "
   r"$y=-1$: el mínim $(3,-1)$ tampoc és el punt més baix de tota la "
   r"gràfica (també és relatiu)."],
  ex_text=E206,
  # Rang ajustat als dos extrems locals (no al comportament asimptòtic
  # sencer que la resposta llarga descriu): amb un rang més ample el
  # tram creixent de fora de [0,3] domina el dibuix i el màxim/mínim
  # locals deixen de distingir-se a ull. f(x)=(2/9)x³-x²+2 resol
  # f(0)=2, f(3)=-1, f'(0)=f'(3)=0 amb f''(0)<0<f''(3) (màxim i mínim,
  # no punts d'inflexió) — comprovat amb sympy abans d'integrar-ho.
  figura=grafica_funcio(
      lambda x: (2 / 9) * x ** 3 - x ** 2 + 2, -1.2, 4.2, -2.5, 3.5,
      "Gràfica que puja fins a un punt més alt, després baixa fins a "
      "un punt més baix, i torna a pujar."))


# =====================================================================
# BLOC 2 — FUNCIONS LINEALS (exercicis 207-209)
# =====================================================================

# ---- exercici 207: pendent i ordenada a l'origen ----
E207 = ("Indica el pendent i l'ordenada a l'origen de cada funció afí, "
        "donada per la seva expressió. Recorda que les que no tenen terme "
        "independent ($y=mx$) s'anomenen funcions lineals, i són el cas "
        "particular amb ordenada a l'origen $0$.")
_207 = {"a": (F(-3), F(6)), "b": (F(10), F(0)),
        "c": (F(-2), F(-5)), "d": (F(-9), F(0))}
_207_EXPR = {"a": "y=-3x+6", "b": "y=10x", "c": "y=-2x-5", "d": "y=-9x"}

for _ap, (_m, _n) in _207.items():
    if _n != 0:
        _d3 = D(mn_tex(_m, -_n), "SIGNE_ORDENADA_INVERTIT",
                r"L'ordenada a l'origen és el terme independent tal "
                r"com apareix a l'expressió (amb el seu signe): no "
                r"cal canviar-lo.")
    else:
        _d3 = D(mn_tex(_m, F(1)), "ORDENADA_NULA_OBLIDADA",
                r"Quan l'expressió no té cap terme independent escrit "
                r"(com $%s$), l'ordenada a l'origen és $0$, no $1$: "
                r"no hi ha cap terme que sumar." % _207_EXPR[_ap])
    Q("207%s" % _ap, 207, _ap, B2, "A",
      "$%s$" % _207_EXPR[_ap],
      mn_tex(_m, _n),
      [D(mn_tex(_n, _m), "PENDENT_ORDENADA_INTERCANVIATS",
         r"El pendent és el nombre que MULTIPLICA la $x$, i "
         r"l'ordenada a l'origen és el terme independent (sense $x$): "
         r"estan intercanviats."),
       D(mn_tex(-_m, _n), "SIGNE_PENDENT_INVERTIT",
         r"El pendent conserva el seu signe tal com apareix a "
         r"l'expressió: no cal canviar-lo."),
       _d3],
      [r"El pendent és el coeficient que acompanya la $x$; l'ordenada "
       r"a l'origen és el terme que no té $x$ (si no n'hi ha cap "
       r"d'escrit, l'ordenada és $0$)."],
      [r"A $y=mx+n$, el pendent és $m$ i l'ordenada a l'origen és $n$.",
       r"$%s$ té $m=%s$ i $n=%s$."
       % (_207_EXPR[_ap], frac_tex(_m), frac_tex(_n))],
      ex_text=E207,
      # m i n ja són explícits a l'expressió donada (no cal "llegir-los"
      # del dibuix): la figura només il·lustra una dada ja completa, a
      # diferència de 297, on m/n eren la incògnita descrita amb paraules.
      figura=grafica_recta(float(_m), float(_n)))


# ---- exercici 208: creixent o decreixent, sense representar ----
E208 = ("Indica, sense representar-la, si la funció afí és creixent o "
        "decreixent.")
# Les fraccions van amb \dfrac com a la resta del projecte: escrites amb
# barra inclinada quedaven diminutes al costat de la resta d'expressions.
_208 = {"a": ("y=12x-1", F(12)), "b": (r"y=\dfrac{x}{6}+3", F(1, 6)),
        "c": (r"y=\dfrac{x}{4}-2", F(1, 4)), "d": ("y=-7x+5", F(-7)),
        "e": (r"y=-\dfrac{12x}{5}+1", F(-12, 5)),
        "f": (r"y=\dfrac{7x}{10}", F(7, 10))}

for _ap, (_expr, _m) in _208.items():
    _creix = _m > 0
    Q("208%s" % _ap, 208, _ap, B2, "A",
      "$%s$" % _expr,
      "Creixent" if _creix else "Decreixent",
      [D("Decreixent" if _creix else "Creixent", "SIGNE_PENDENT_INVERTIT",
         r"El pendent és $%s$ (%s): la funció és %s, no %s."
         % (frac_tex(_m), "positiu" if _creix else "negatiu",
            "creixent" if _creix else "decreixent",
            "decreixent" if _creix else "creixent")),
       D("Constant", "PENDENT_COM_NUL",
         r"El pendent $%s$ no és $0$: una funció afí només és "
         r"constant quan el pendent és nul, i aquí no ho és."
         % frac_tex(_m)),
       D("No es pot saber sense representar-la", "REPRESENTACIO_INNECESSARIA",
         r"El signe del pendent ja determina si la funció és creixent "
         r"o decreixent, sense necessitat de representar-la.")],
      [r"A $y=mx+n$, si el pendent $m$ és positiu la funció és "
       r"creixent; si és negatiu, decreixent."],
      [r"El pendent de $%s$ és $m=%s$." % (_expr, frac_tex(_m)),
       r"Com que $m$ és %s, la funció és %s."
       % ("positiu" if _creix else "negatiu",
          "creixent" if _creix else "decreixent")],
      ex_text=E208)


# ---- exercici 209: equació de la recta a partir de dos punts ----
E209 = ("Calcula l'expressió algebraica de la funció afí que passa "
        "pels dos punts donats.")
_209 = {"a": ((0, -1), (1, 1)), "b": ((0, 1), (1, 3)),
        "c": ((0, 1), (2, 2)), "d": ((0, -1), (1, -3))}

for _ap, (_p1, _p2) in _209.items():
    _x1, _y1 = F(_p1[0]), F(_p1[1])
    _x2, _y2 = F(_p2[0]), F(_p2[1])
    _m = (_y2 - _y1) / (_x2 - _x1)
    _n = _y1 - _m * _x1
    Q("209%s" % _ap, 209, _ap, B2, "A",
      r"Passa pels punts $%s$ i $%s$." % (punt_tex(_x1, _y1),
                                            punt_tex(_x2, _y2)),
      recta_tex(_m, _n),
      [D(recta_tex(_m, _y2), "PUNT_ORDENADA_CONFOS",
         r"L'ordenada a l'origen és el valor de $y$ del punt on "
         r"$x=0$, és a dir, del punt $%s$ (que dona $n=%s$), no del "
         r"punt $%s$."
         % (punt_tex(_x1, _y1), frac_tex(_y1), punt_tex(_x2, _y2))),
       D(recta_tex(-_m, _n), "SIGNE_PENDENT_INVERTIT",
         r"El pendent es calcula com $m=\dfrac{y_2-y_1}{x_2-x_1}$, "
         r"restant sempre en el mateix ordre al numerador i al "
         r"denominador: si s'inverteix l'ordre en un dels dos, el "
         r"signe surt canviat."),
       D(recta_tex(_n, _m) if _m != _n else recta_tex(_n, _m + 1),
         "PENDENT_ORDENADA_INTERCANVIATS",
         r"El pendent és el coeficient que acompanya la $x$; "
         r"l'ordenada a l'origen és el terme independent: estan "
         r"intercanviats.")],
      [r"Com que un dels punts té $x=0$, la seva $y$ ja és "
       r"directament l'ordenada a l'origen $n$; només cal calcular el "
       r"pendent $m$ amb els dos punts."],
      [r"El pendent és $m=\dfrac{y_2-y_1}{x_2-x_1}="
       r"\dfrac{%s-(%s)}{%s-(%s)}=%s$."
       % (frac_tex(_y2), frac_tex(_y1), frac_tex(_x2), frac_tex(_x1),
          frac_tex(_m)),
       r"Com que el punt $%s$ té $x=0$, la seva $y$ ja és l'ordenada "
       r"a l'origen: $n=%s$." % (punt_tex(_x1, _y1), frac_tex(_n)),
       r"L'expressió és %s." % recta_tex(_m, _n)],
      ex_text=E209,
      # nuvol_de_punts, no grafica_recta: els dos punts són la dada i
      # la recta que els uneix és la incògnita (l'expressió y=mx+n
      # sencera). Traçar-hi la recta regalaria la resposta.
      figura=nuvol_de_punts([(float(_x1), float(_y1)),
                              (float(_x2), float(_y2))]))


# =====================================================================
# BLOC 3 — FUNCIONS QUADRÀTIQUES (exercicis 212, 214-217)
# =====================================================================

# ---- exercici 212: obertura i amplada relativa a y=x^2 ----
E212 = ("Sense representar-la, indica si la paràbola és més oberta cap "
        "amunt o cap avall, i si és més estreta o més ampla que "
        "$y=x^2$.")
_212 = {"a": ("y=2x^2", F(2)), "b": (r"y=\dfrac{x^2}{2}", F(1, 2)),
        "c": ("y=-2x^2", F(-2)), "d": (r"y=\dfrac{x^2}{4}", F(1, 4))}

for _ap, (_expr, _a) in _212.items():
    _obert = "amunt" if _a > 0 else "avall"
    _obert_c = "cap avall" if _a > 0 else "cap amunt"
    _ampla = "estreta" if abs(_a) > 1 else "ampla"
    _ampla_c = "ampla" if abs(_a) > 1 else "estreta"
    Q("212%s" % _ap, 212, _ap, B3, "A",
      "$%s$" % _expr,
      "Oberta cap %s i més %s que $y=x^2$." % (_obert, _ampla),
      [D("Oberta %s i més %s que $y=x^2$." % (_obert_c, _ampla),
         "OBERTURA_INVERTIDA",
         r"El signe de $a$ determina l'obertura: positiu és cap "
         r"amunt, negatiu cap avall. Aquí $a=%s$." % frac_tex(_a)),
       D("Oberta cap %s i més %s que $y=x^2$." % (_obert, _ampla_c),
         "AMPLADA_INVERTIDA",
         r"Com més gran és $|a|$, més ESTRETA és la paràbola (no més "
         r"ampla): aquí $|a|=%s$, que és %s que $1$."
         % (frac_tex(abs(_a)),
            "més gran" if abs(_a) > 1 else "més petit")),
       D("Oberta %s i més %s que $y=x^2$." % (_obert_c, _ampla_c),
         "OBERTURA_I_AMPLADA_INVERTIDES",
         r"Tant l'obertura com l'amplada estan invertides respecte a "
         r"$a=%s$." % frac_tex(_a))],
      [r"El signe de $a$ (a $y=ax^2$) determina l'obertura; el valor "
       r"absolut de $a$ comparat amb $1$ determina l'amplada."],
      [r"A $%s$, $a=%s$." % (_expr, frac_tex(_a)),
       r"Com que $a$ és %s, la paràbola és oberta cap %s."
       % ("positiu" if _a > 0 else "negatiu", _obert),
       r"Com que $|a|=%s$ és %s que $1$, la paràbola és més %s que "
       r"$y=x^2$."
       % (frac_tex(abs(_a)),
          "més gran" if abs(_a) > 1 else "més petit", _ampla)],
      ex_text=E212)


# ---- exercici 214: constant c a partir del vèrtex ----
E214 = ("Calcula quin és el valor de la constant $c$ en l'expressió "
        "$y=x^2+c$ d'aquestes paràboles.")
_214 = {"a": F(-1), "b": F(2)}

for _ap, _c in _214.items():
    Q("214%s" % _ap, 214, _ap, B3, "A",
      "Paràbola oberta cap amunt amb vèrtex en el punt $%s$."
      % punt_tex(0, _c),
      "$c=%s$" % frac_tex(_c),
      [D("$c=%s$" % frac_tex(-_c), "SIGNE_FINAL",
         r"El vèrtex de $y=x^2+c$ és sempre el punt $(0,c)$: si el "
         r"vèrtex donat és $%s$, el valor de $c$ és $%s$, amb el "
         r"mateix signe." % (punt_tex(0, _c), frac_tex(_c))),
       D("$c=0$", "TERME_INDEPENDENT_IGNORAT",
         r"$c$ no és $0$: el vèrtex de $y=x^2$ (sense sumar res) "
         r"seria $(0,0)$, i aquí el vèrtex donat és $%s$, no "
         r"l'origen." % punt_tex(0, _c)),
       D("$c=%s$" % frac_tex(_c * 2 if _c != 0 else F(1)),
         "VALOR_DUPLICAT",
         r"El vèrtex $%s$ dona directament $c=%s$, sense necessitat "
         r"de multiplicar-lo per cap altre nombre."
         % (punt_tex(0, _c), frac_tex(_c)))],
      [r"El vèrtex d'una paràbola $y=x^2+c$ és sempre el punt "
       r"$(0,c)$: la segona coordenada del vèrtex ÉS el valor de "
       r"$c$."],
      [r"Comparant $y=x^2+c$ amb $y=x^2$, sumar $c$ desplaça tota la "
       r"paràbola $c$ unitats amunt (si $c>0$) o avall (si $c<0$), "
       r"sense moure-la horitzontalment.",
       r"Per això el vèrtex passa de $(0,0)$ a $(0,c)$: si el vèrtex "
       r"donat és $%s$, aleshores $c=%s$."
       % (punt_tex(0, _c), frac_tex(_c))],
      ex_text=E214,
      # marca_vertex=True: el vèrtex (0,c) és la DADA (l'enunciat el
      # dona en paraules); la incògnita és el número c, no la posició
      # del vèrtex, així que marcar-lo no regala la resposta.
      figura=grafica_parabola(1, 0, float(_c), marca_vertex=True))


# ---- exercici 215: expressió d'una paràbola des del vèrtex i un punt ----
Q("215", 215, "", B3, "A",
  r"Paràbola oberta cap amunt, amb vèrtex en el punt $(0,1)$, que "
  r"passa pel punt $(1,2)$.",
  "$y=x^2+1$",
  [D("$y=x^2+2$", "VALOR_C_CONFOS",
     r"El vèrtex $(0,1)$ ja diu directament que $c=1$: el $2$ és la "
     r"$y$ del punt $(1,2)$, no el valor de $c$."),
   D("$y=2x^2+1$", "COEFICIENT_A_MAL_CALCULAT",
     r"Substituint el punt $(1,2)$ a $y=ax^2+1$: $2=a\cdot 1^2+1$, "
     r"que dona $a=1$, no $a=2$."),
   D("$y=x^2-1$", "SIGNE_FINAL",
     r"El vèrtex $(0,1)$ té la segona coordenada positiva: $c=1$, no "
     r"$c=-1$.")],
  [r"El vèrtex $(0,c)$ ja dona directament el valor de $c$; substitueix "
   r"l'altre punt a $y=ax^2+c$ per trobar $a$."],
  [r"El vèrtex $(0,1)$ dona $c=1$: l'expressió és $y=ax^2+1$.",
   r"Substituint el punt $(1,2)$: $2=a\cdot 1^2+1$, per tant $a=1$.",
   r"L'expressió és $y=x^2+1$."],
  ex_text="Calcula l'expressió algebraica de la paràbola.",
  # marca_vertex=True: (0,1) és una dada de l'enunciat, no la resposta
  # (la resposta és l'expressió y=x²+1 sencera, amb els coeficients a i c).
  figura=grafica_parabola(1, 0, 1, marca_vertex=True))


# ---- exercici 216: talls, vèrtex i eix de simetria ----
E216 = ("Troba els talls amb els eixos, el vèrtex i l'equació de l'eix de "
        "simetria d'aquestes paràboles.")
_216 = {"a": ("y=-x^2-3x", F(-1), F(-3)),
        "b": (r"y=x^2-\dfrac23x", F(1), F(-2, 3)),
        "c": (r"y=\dfrac32x^2-x", F(3, 2), F(-1)),
        "d": ("y=x^2+2x", F(1), F(2))}

for _ap, (_expr, _a, _b) in _216.items():
    _altre_arrel = -_b / _a
    _eix = _altre_arrel / 2
    _vy = _a * _eix ** 2 + _b * _eix
    _talls = [(F(0), F(0)), (_altre_arrel, F(0))]
    _correcta = vertex_talls_tex(_talls, _eix, (_eix, _vy))
    # distractor 1: oblida el tall a l'origen (només dona l'altra arrel)
    _d1 = vertex_talls_tex([(_altre_arrel, F(0))], _eix, (_eix, _vy))
    # distractor 2: eix de simetria = l'arrel no nul·la (en lloc del punt
    # mig entre les dues arrels)
    _eix_err = _altre_arrel
    _vy_err = _a * _eix_err ** 2 + _b * _eix_err
    _d2 = vertex_talls_tex(_talls, _eix_err, (_eix_err, _vy_err))
    # distractor 3: vèrtex amb la y calculada amb signe oposat
    _d3 = vertex_talls_tex(_talls, _eix, (_eix, -_vy if _vy != 0 else F(1)))
    Q("216%s" % _ap, 216, _ap, B3, "A",
      "$%s$" % _expr,
      _correcta,
      [D(_d1, "TALL_ORIGEN_OBLIDAT",
         r"Com que l'expressió no té terme independent (no hi ha "
         r"$+c$), la paràbola sempre passa per l'origen: $(0,0)$ "
         r"també és un tall amb els eixos, no només l'altra arrel."),
       D(_d2, "EIX_SIMETRIA_MAL_CALCULAT",
         r"L'eix de simetria passa pel PUNT MIG entre les dues "
         r"arrels, no per una de les arrels: com que una arrel és "
         r"$0$, el punt mig és la meitat de l'altra arrel."),
       D(_d3, "SIGNE_FINAL",
         r"La $y$ del vèrtex s'obté substituint la $x$ del vèrtex a "
         r"l'expressió original: cal calcular-la, no només canviar-ne "
         r"el signe.")],
      [r"Els talls amb l'eix $X$ són les solucions de l'equació de "
       r"segon grau (traient factor comú $x$, ja que no hi ha terme "
       r"independent); l'eix de simetria passa pel punt mig entre "
       r"aquestes dues solucions."],
      [r"Traient factor comú: $%s=x(%sx%s)$, que dona $x=0$ i "
       r"$x=%s$." % (_expr.replace("y=", ""),
                       ("" if _a == 1 else "-" if _a == -1
                        else frac_tex(_a)),
                       "+%s" % frac_tex(_b) if _b > 0
                       else "-%s" % frac_tex(-_b),
                       frac_tex(_altre_arrel)),
       r"Talls amb els eixos: $%s$ i $%s$."
       % (punt_tex(0, 0), punt_tex(_altre_arrel, 0)),
       r"L'eix de simetria passa pel punt mig de les arrels: "
       r"$x=%s$." % frac_tex(_eix),
       r"El vèrtex és $%s$, substituint $x=%s$ a l'expressió."
       % (punt_tex(_eix, _vy), frac_tex(_eix))],
      ex_text=E216,
      # SENSE marca_vertex ni marca_talls: aquí el vèrtex, els talls I
      # l'eix de simetria són exactament el que es demana calcular.
      # Una figura "més informativa" que els marqués respondria
      # l'exercici sencer pel dibuix (vegeu la nota al capdamunt del
      # mòdul grafics.py i el brief de l'agent xtec).
      figura=grafica_parabola(float(_a), float(_b), 0.0))


# ---- exercici 217: analitza sense representar ----
E217 = ("Analitza com serà la gràfica d'aquestes funcions polinòmiques "
        "sense representar-les.")

Q("217a", 217, "a", B3, "B",
  r"$y=x^2-3x^2+4$",
  r"Reduint termes semblants, $x^2-3x^2=-2x^2$: és la paràbola "
  r"$y=-2x^2+4$, oberta cap avall, més estreta que $y=x^2$, amb "
  r"vèrtex a $(0,4)$.",
  [D(r"És una paràbola $y=-2x^2+4x$: oberta cap avall, amb vèrtex "
     r"fora de l'eix $Y$.", "TERMES_NO_REDUITS",
     r"Els dos termes $x^2$ i $-3x^2$ són termes SEMBLANTS (tots dos "
     r"en $x^2$) i s'han de reduir junts, com un sol terme $-2x^2$; "
     r"a l'expressió original no hi ha cap terme en $x$ (a la "
     r"primera potència), així que no en pot quedar cap després de "
     r"reduir."),
   D(r"Reduint termes semblants, $x^2-3x^2=2x^2$: és la paràbola "
     r"$y=2x^2+4$, oberta cap amunt, més estreta que $y=x^2$, amb "
     r"vèrtex a $(0,4)$.", "SIGNE_FINAL",
     r"$x^2-3x^2$ és una resta on el segon terme és més gran: el "
     r"resultat és negatiu, $-2x^2$, no $2x^2$."),
   D(r"Reduint termes semblants, $x^2-3x^2=-2x^2$: és la paràbola "
     r"$y=-2x^2+4$, oberta cap avall, més AMPLA que $y=x^2$, amb "
     r"vèrtex a $(0,4)$.", "AMPLADA_INVERTIDA",
     r"El coeficient de $x^2$ és $-2$, i $|-2|=2>1$: la paràbola és "
     r"més ESTRETA que $y=x^2$, no més ampla.")],
  [r"Abans de decidir de quin tipus de funció es tracta, redueix els "
   r"termes semblants: $x^2$ i $-3x^2$ són tots dos termes en $x^2$."],
  [r"Reduint termes semblants: $x^2-3x^2=-2x^2$, així que l'expressió "
   r"és $y=-2x^2+4$.",
   r"És una paràbola (té terme en $x^2$), sense terme en $x$ (per "
   r"tant simètrica respecte a l'eix $Y$).",
   r"El coeficient de $x^2$ és $-2$: negatiu, oberta cap avall; "
   r"$|-2|>1$, més estreta que $y=x^2$.",
   r"El vèrtex és $(0,4)$, ja que no hi ha terme en $x$."],
  # SENSE FIGURA, decidit al merge: l'enunciat diu literalment «sense
  # representar-les», i posar-hi la gràfica el contradiu. L'exercici demana
  # deduir la forma de la corba del signe dels coeficients; ensenyar-la
  # converteix una deducció en una lectura.
  ex_text=E217)

Q("217b", 217, "b", B3, "B",
  r"$y=-x-3$",
  r"No té cap terme en $x^2$: és una recta (no una paràbola), amb "
  r"pendent $-1$ (decreixent) i ordenada a l'origen $-3$.",
  [D(r"No té cap terme en $x^2$ escrit, però és una paràbola amb "
     r"$a=0$: oberta cap avall, decreixent.", "PARABOLA_AMB_A_ZERO",
     r"Si el coeficient de $x^2$ és $0$, l'expressió deixa de ser una "
     r"paràbola: sense terme en $x^2$, és una recta (funció afí), "
     r"no una paràbola extremament oberta."),
   D(r"És una recta amb pendent $-1$, però creixent, i ordenada a "
     r"l'origen $-3$.", "SIGNE_PENDENT_INVERTIT",
     r"El pendent $-1$ és negatiu: la recta és decreixent, no "
     r"creixent."),
   D(r"És una recta amb pendent $-1$ (decreixent) i ordenada a "
     r"l'origen $3$.", "SIGNE_ORDENADA_INVERTIT",
     r"El terme independent de $-x-3$ és $-3$ (negatiu), no $3$: la "
     r"recta talla l'eix $Y$ en $(0,-3)$.")],
  [r"Si l'expressió no té cap terme en $x^2$, no és una paràbola: és "
   r"una recta."],
  [r"$y=-x-3$ no té terme en $x^2$: és una funció afí (recta), no "
   r"una paràbola.",
   r"El pendent és $-1$ (negatiu, per tant decreixent) i l'ordenada a "
   r"l'origen és $-3$."],
  # SENSE FIGURA, decidit al merge: l'enunciat diu literalment «sense
  # representar-les», i posar-hi la gràfica el contradiu. L'exercici demana
  # deduir la forma de la corba del signe dels coeficients; ensenyar-la
  # converteix una deducció en una lectura.
  ex_text=E217)
