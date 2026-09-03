# -*- coding: utf-8 -*-
"""figures/cossos.py — cossos geomètrics en perspectiva cavallera.

Vegeu `figures/__init__.py` per a les convencions comunes: viewBox sense mida
fixa, `currentColor` als traços, `role="img"` amb `<title>`, i cap `$` a dins.
`lib._valida()` atura la compilació si alguna no es compleix.
"""
import math

from . import OMPLERT, MARCA, _svg, _text, mesura
from .etiquetatge import Escena


def _arc_segs(cx, cy, rx, ry, n=32):
    """Polilínia equivalent a un cercle o una el·lipse.

    El motor d'etiquetatge treballa amb segments; quan una figura dibuixa una
    corba amb SVG cru (`<circle>`, `<ellipse>`, `<path>`) cal passar-li aquesta
    aproximació perquè la corba compti a l'hora de buscar lloc per al text.
    """
    pts = [(cx + rx * math.cos(2 * math.pi * i / n),
            cy + ry * math.sin(2 * math.pi * i / n)) for i in range(n + 1)]
    return [(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1])
            for i in range(n)]


def _poligon(cx, cy, r, n, gir=-90):
    from math import cos, sin, radians
    return [(cx + r * cos(radians(gir + 360.0 * k / n)),
             cy + r * sin(radians(gir + 360.0 * k / n))) for k in range(n)]


def _aresta_frontal_mes_llarga(base, cx, cyb):
    """Aresta de la base bona per recolzar-hi l'apotema: la que es veu més
    de cara (punt mig clarament a la meitat del davant) i, entre aquestes,
    la que queda menys escurçada per la perspectiva, perquè el segment
    dibuixat sigui prou llarg per llegir-s'hi una cota."""
    millor, millor_l = None, -1.0
    for k in range(len(base)):
        a, b = base[k], base[(k + 1) % len(base)]
        mx_, my_ = (a[0] + b[0]) / 2, (a[1] + b[1]) / 2
        if my_ <= cyb + 1.0:            # aresta del darrere o vista de cantell
            continue
        L = math.hypot(mx_ - cx, my_ - cyb)
        if L > millor_l:
            millor, millor_l = ((a, b), (mx_, my_)), L
    return millor


def _planta_regular(e, n, cx, cy, R, etq_costat, etq_apotema):
    """Dibuixa la base del prisma en VERITABLE MAGNITUD al costat del sòlid.

    L'apotema d'una base no s'entén dins de la perspectiva: allà la base es
    veu aixafada (factor 0,42), l'apotema queda escurçada a 19-28 px i mig
    tapada pel cos, i cap posició de l'etiqueta no aconsegueix que es llegeixi
    com el que és. La solució de sempre als llibres és treure la base a part,
    sense escurçar, i acotar-la allà: el costat i l'apotema hi surten en la
    seva proporció real i la relació a = c/(2·tan(180/n)) es pot comprovar
    a ull.

    S'orienta amb una aresta horitzontal a baix (`gir = 90 - 180/n`), de
    manera que l'apotema cau vertical i el costat queda pla: les dues cotes
    més fàcils de llegir que hi ha.
    """
    gir = 90.0 - 180.0 / n
    pts = [(cx + R * math.cos(math.radians(gir + 360.0 * k / n)),
            cy + R * math.sin(math.radians(gir + 360.0 * k / n)))
           for k in range(n)]
    e.poligon(pts)
    k = max(range(n), key=lambda i: (pts[i][1] + pts[(i + 1) % n][1]) / 2)
    a, b = pts[k], pts[(k + 1) % n]
    mig = ((a[0] + b[0]) / 2, (a[1] + b[1]) / 2)
    e.marca((cx, cy), mig)
    e.cota((cx, cy), mig, etq_apotema, despl=R + 18, petit=True)
    e.cota(a, b, etq_costat, despl=14)
    e.etq_punt((cx, cy), "base", petit=True, direccio=(0, -1))


def prisma_regular(n, costat, altura, apotema=None, etq_costat=None,
                   etq_altura=None, etq_apotema=None, unitat="cm"):
    """Prisma recte de base un polígon regular de n costats, dibuixat en
    perspectiva cavallera com al llibre: la base al davant, l'altura cap
    amunt i les arestes del darrere de traç discontinu.

    Quan l'enunciat dona l'apotema, al costat s'hi afegeix la base en
    veritable magnitud i les cotes del costat i de l'apotema van allà: dins
    de la perspectiva totes dues queden escurçades i il·legibles. Vegeu
    `_planta_regular`.
    """
    R = 46.0                      # radi de la base al dibuix
    APLANAT = 0.42                # com d'aixafada es veu la base
    H = max(70.0, min(150.0, R * 2.4 * float(altura) / max(float(costat), 1)))
    H = min(H, 160.0)
    cx, cyb = 0.0, 0.0
    base = [(cx + R * math.cos(math.radians(-90 + 360.0 * k / n)),
             cyb + R * APLANAT * math.sin(math.radians(-90 + 360.0 * k / n)))
            for k in range(n)]
    dalt = [(x, y - H) for x, y in base]

    noms = {3: "triangular", 4: "quadrangular", 5: "pentagonal",
            6: "hexagonal", 8: "octogonal"}
    nom = noms.get(n, "de %d costats" % n)
    titol = "Prisma recte de base %s regular, dibuixat en perspectiva." % nom
    if apotema is not None:
        titol += " Al costat, la base en veritable magnitud amb l'apotema."
    e = Escena(titol)

    # Contorn de la base, discontinu: queda mig tapat pel cos del prisma.
    e.poligon(base, ple=True, discontinu=True, gruix=1.2)
    # Només les cares laterals que es veuen: les de la meitat del davant.
    # (Abans es pintaven totes, també les del darrere, i el sostre les
    # tapava a mitges.)
    frontals = []
    for k in range(n):
        a, b = base[k], base[(k + 1) % n]
        if (a[1] + b[1]) / 2 <= cyb - 1.0 and n > 4:
            continue
        frontals.append((a, b))
        e.poligon([a, b, (b[0], b[1] - H), (a[0], a[1] - H)])
    e.poligon(dalt)               # el sostre, per damunt de les cares

    # Cota de l'altura, a la dreta i fora del cos.
    xa = max(p[0] for p in base) + 16
    dalt_y, baix_y = min(p[1] for p in dalt), max(p[1] for p in base)
    e.segment((xa, dalt_y), (xa, baix_y), gruix=1.2)
    e.etq_segment((xa, dalt_y), (xa, baix_y),
                  etq_altura or mesura(altura, unitat), costat=-1)

    e_costat = etq_costat or mesura(costat, unitat)
    if apotema is not None:
        Rp = 36.0
        # mateixa línia de terra que el sòlid, perquè les dues vistes es
        # llegeixin com una sola figura i no com dos dibuixos solts
        cyp = max(p[1] for p in base) - Rp * math.cos(math.pi / n)
        _planta_regular(e, n, xa + 48 + Rp, cyp, Rp, e_costat,
                        etq_apotema or mesura(apotema, unitat))
    else:
        ar = max(frontals, key=lambda ab: abs(ab[0][0] - ab[1][0])) if frontals \
            else (base[0], base[1])
        e.cota(ar[0], ar[1], e_costat, despl=18)
    return e.svg()


def cub(aresta, etq=None, unitat="cm"):
    """Cub en perspectiva cavallera, amb una sola aresta acotada.

    Les tres arestes ocultes (les que concorren al vèrtex del darrere de
    baix a l'esquerra) van discontínues. Abans només se'n dibuixaven dues:
    la vertical sortia d'un `v (-L + 0.0 + L)`, que val `v 0` i per tant no
    pintava res, de manera que al cub li faltava una aresta.
    """
    L, d = 96.0, 34.0
    x, y = 0.0, 0.0
    e_txt = etq or (mesura(aresta, unitat))
    e = Escena("Cub d'aresta %s, dibuixat en perspectiva." % e_txt)
    e.poligon([(x, y), (x + L, y), (x + L, y + L), (x, y + L)])
    e.poligon([(x, y), (x + d, y - d), (x + L + d, y - d), (x + L, y)])
    e.poligon([(x + L, y), (x + L + d, y - d),
               (x + L + d, y + L - d), (x + L, y + L)])
    ocult = (x + d, y + L - d)                 # vèrtex del darrere, amagat
    e.segment((x, y + L), ocult, gruix=1.1, discontinu=True)
    e.segment(ocult, (x + d, y - d), gruix=1.1, discontinu=True)
    e.segment(ocult, (x + L + d, y + L - d), gruix=1.1, discontinu=True)
    e.cota((x, y + L), (x + L, y + L), e_txt, despl=16)
    return e.svg()


# ---------------------------------------------------------------------
def ortoedre(a, b, c, etq_a=None, etq_b=None, etq_c=None, unitat="cm"):
    """Prisma de base rectangular (ortoedre) en perspectiva cavallera, amb
    les tres arestes acotades. `a` és l'amplada, `b` la profunditat i `c`
    l'alçada.

    Les tres cotes van acotades amb línies auxiliars. La de la profunditat
    ho necessita especialment: és una aresta obliqua i curta, i qualsevol
    etiqueta escrita al seu costat queda o bé tallada per l'aresta vertical
    del darrere (que hi arrenca just al mig) o bé tan lluny que sembla que
    aculli l'aresta de dalt.
    """
    esc = 110.0 / max(a, b, c)
    A, B, C = a * esc, min(b * esc, 46.0), c * esc
    ea = etq_a if etq_a is not None else mesura(a, unitat)
    eb = etq_b if etq_b is not None else mesura(b, unitat)
    ec = etq_c if etq_c is not None else mesura(c, unitat)
    x, y = 0.0, 0.0
    e = Escena("Ortoedre d'arestes %s, %s i %s, en perspectiva."
               % (ea, eb, ec))
    e.poligon([(x, y), (x + A, y), (x + A, y + C), (x, y + C)])
    e.poligon([(x, y), (x + B, y - B), (x + A + B, y - B), (x + A, y)])
    e.poligon([(x + A, y), (x + A + B, y - B),
               (x + A + B, y + C - B), (x + A, y + C)])
    e.cota((x, y + C), (x + A, y + C), ea, despl=16)          # amplada, a sota
    e.cota((x, y), (x, y + C), ec, despl=16)                  # alçada, a l'esq.
    e.cota((x + A, y), (x + A + B, y - B), eb, despl=14,      # profunditat
           petit=True)
    return e.svg()


# ---------------------------------------------------------------------
# Cossos de revolució i piràmides
# ---------------------------------------------------------------------
# Tots segueixen la mateixa convenció que el prisma: perspectiva cavallera,
# base aplanada, arestes del darrere de traç discontinu. Es podrien dibuixar
# amb projeccions de debò, però el que ha d'entendre l'alumne és quina mesura
# és quina, no com es projecta un sòlid: la convenció del llibre de text
# comunica més i costa menys.

APLANAT = 0.30          # com d'aixafada es veu una base circular
_MARGE = 30


def _el·lipse(cx, cy, r, dalt_ple=True):
    """Base circular en perspectiva: la meitat de davant sempre plena, la del
    darrere discontínua si és la base de baix (queda tapada pel cos)."""
    ry = r * APLANAT
    if dalt_ple:
        return ('<ellipse cx="%.1f" cy="%.1f" rx="%.1f" ry="%.1f" fill="%s" '
                'stroke="currentColor" stroke-width="2"/>' % (cx, cy, r, ry, OMPLERT))
    return (
        '<path d="M %.1f %.1f A %.1f %.1f 0 0 0 %.1f %.1f" fill="none" '
        'stroke="currentColor" stroke-width="2"/>' % (cx - r, cy, r, ry, cx + r, cy)
        + '<path d="M %.1f %.1f A %.1f %.1f 0 0 1 %.1f %.1f" fill="none" '
          'stroke="currentColor" stroke-width="1.1" stroke-dasharray="4 3"/>'
          % (cx - r, cy, r, ry, cx + r, cy))


def _cota_vertical(x, y1, y2, etiqueta):
    return ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="currentColor" '
            'stroke-width="1.2"/>' % (x, y1, x, y2)
            + _text(x + 8, (y1 + y2) / 2 + 4, etiqueta, ancora="start"))


def _afegeix_ellipse(e, cx, cy, r, dalt_ple=True):
    """Dibuixa una base circular en perspectiva dins d'una escena i en
    registra el traç perquè el motor d'etiquetatge la tingui en compte."""
    ry = r * APLANAT
    segs = _arc_segs(cx, cy, r, ry)
    if dalt_ple:
        e.crua('<ellipse cx="%.1f" cy="%.1f" rx="%.1f" ry="%.1f" fill="%s" '
               'stroke="currentColor" stroke-width="2"/>'
               % (cx, cy, r, ry, OMPLERT), segs)
    else:
        e.crua('<path d="M %.1f %.1f A %.1f %.1f 0 0 0 %.1f %.1f" fill="none" '
               'stroke="currentColor" stroke-width="2"/>'
               % (cx - r, cy, r, ry, cx + r, cy)
               + '<path d="M %.1f %.1f A %.1f %.1f 0 0 1 %.1f %.1f" fill="none" '
                 'stroke="currentColor" stroke-width="1.1" stroke-dasharray="4 3"/>'
               % (cx - r, cy, r, ry, cx + r, cy), segs)


def cilindre(radi=None, altura=None, diametre=None, etq_radi=None,
             etq_altura=None, unitat="cm"):
    """Cilindre recte. S'accepta radi o diàmetre: el que digui l'enunciat és
    el que s'ha d'acotar, perquè si l'alumne ha de convertir-lo abans de
    llegir la figura, la figura no l'ajuda."""
    R, H = 52.0, 104.0
    cx = 0.0
    ydalt, ybaix = 0.0, H
    e = Escena("Cilindre recte, dibuixat en perspectiva.")
    _afegeix_ellipse(e, cx, ybaix, R, dalt_ple=False)
    e.crua('<rect x="%.1f" y="%.1f" width="%.1f" height="%.1f" fill="%s" '
           'stroke="none"/>' % (cx - R, ydalt, 2 * R, H, OMPLERT))
    e.segment((cx - R, ydalt), (cx - R, ybaix))
    e.segment((cx + R, ydalt), (cx + R, ybaix))
    _afegeix_ellipse(e, cx, ydalt, R)

    # El radi (o el diàmetre) s'acota sobre l'el·lipse de dalt, amb la cota
    # per damunt: és l'única banda on no hi ha ni el cos ni l'altra base.
    if diametre is not None:
        e.marca((cx - R, ydalt), (cx + R, ydalt))
        e.cota((cx - R, ydalt), (cx + R, ydalt),
               etq_radi or mesura(diametre, unitat), despl=R * APLANAT + 14,
               costat=1, petit=True)
    elif radi is not None:
        e.marca((cx, ydalt), (cx + R, ydalt))
        e.cota((cx, ydalt), (cx + R, ydalt),
               etq_radi or mesura(radi, unitat), despl=R * APLANAT + 14,
               costat=1, petit=True)
    if altura is not None:
        e.cota((cx + R, ydalt), (cx + R, ybaix),
               etq_altura or mesura(altura, unitat), despl=20, costat=-1)
    return e.svg()


def con(radi=None, altura=None, generatriu=None, diametre=None,
        etq_radi=None, etq_altura=None, etq_generatriu=None, unitat="cm"):
    """Con recte. S'acoten només les mesures que es donin: un con amb el radi,
    l'altura i la generatriu marcats alhora ja regala Pitàgores.

    Cada mesura va sobre el seu segment i en banda diferent: el radi a sota,
    l'altura a l'esquerra i la generatriu sobre la vora dreta, que ara es
    ressalta. Abans la generatriu només s'escrivia (un text solt a la dreta,
    sense cap segment marcat), de manera que res no deia a quina longitud es
    referia.
    """
    R, H = 52.0, 112.0
    cx = 0.0
    ybaix, yapex = H, 0.0
    apex, esq, dre = (cx, yapex), (cx - R, ybaix), (cx + R, ybaix)
    e = Escena("Con recte, dibuixat en perspectiva.")
    _afegeix_ellipse(e, cx, ybaix, R, dalt_ple=False)
    e.poligon([apex, esq, dre])
    _afegeix_ellipse(e, cx, ybaix, R, dalt_ple=False)

    if diametre is not None:
        e.marca(esq, dre)
        e.cota(esq, dre, etq_radi or mesura(diametre, unitat),
               despl=R * APLANAT + 14, costat=-1)
    elif radi is not None:
        e.marca((cx, ybaix), dre)
        e.cota((cx, ybaix), dre, etq_radi or mesura(radi, unitat),
               despl=R * APLANAT + 14, costat=-1)
    if altura is not None:
        e.segment(apex, (cx, ybaix), gruix=1.4, discontinu=True)
        e.angle_recte((cx, ybaix), (1, 0), (0, -1))
        e.cota(apex, (cx, ybaix), etq_altura or mesura(altura, unitat),
               despl=18, costat=1, petit=True)
    if generatriu is not None:
        e.marca(apex, dre)
        e.etq_segment(apex, dre,
                      etq_generatriu or mesura(generatriu, unitat), costat=-1)
    return e.svg()


def esfera(radi=None, etq_radi=None, unitat="cm"):
    """Esfera amb l'equador insinuat i el radi acotat."""
    R = 58.0
    cx = cy = 0.0
    e = Escena("Esfera amb el radi marcat.")
    e.crua('<circle cx="%.1f" cy="%.1f" r="%.1f" fill="%s" '
           'stroke="currentColor" stroke-width="2"/>' % (cx, cy, R, OMPLERT),
           _arc_segs(cx, cy, R, R))
    e.crua('<ellipse cx="%.1f" cy="%.1f" rx="%.1f" ry="%.1f" fill="none" '
           'stroke="currentColor" stroke-width="1.1" stroke-dasharray="4 3"/>'
           % (cx, cy, R, R * APLANAT), _arc_segs(cx, cy, R, R * APLANAT))
    if radi is not None or etq_radi:
        e.marca((cx, cy), (cx + R, cy))
        e.etq_segment((cx, cy), (cx + R, cy),
                      etq_radi or (mesura(radi, unitat)), petit=True)
    return e.svg()


def _cara_lateral(e, costat, apotema, x0, ybase, etq_costat, etq_apotema):
    """Una cara lateral de la piràmide, desplegada en veritable magnitud.

    És un triangle isòsceles de base el costat de la base i altura l'apotema
    de la piràmide. Dins de la perspectiva aquestes dues mesures no es poden
    acotar de manera honesta: la cara es veu inclinada i escurçada, i
    l'apotema hi surt com un segment obliqu qualsevol enmig del ventall
    d'arestes que baixen de l'àpex. Desplegada, l'apotema és literalment
    l'altura del triangle i el costat n'és la base, que és el que diu la
    fórmula de l'àrea lateral.
    """
    Lc = 92.0
    Ha = Lc * apotema / costat
    if Ha > 130.0:                     # piràmides molt punxegudes
        Ha, Lc = 130.0, 130.0 * costat / apotema
    A = (x0, ybase - Ha)
    B = (x0 - Lc / 2, ybase)
    C = (x0 + Lc / 2, ybase)
    e.poligon([A, B, C])
    e.marca(A, (x0, ybase))
    e.angle_recte((x0, ybase), (1, 0), (0, -1))
    e.cota(A, (x0, ybase), etq_apotema, despl=Lc / 2 + 16, costat=-1,
           petit=True)
    e.cota(B, C, etq_costat, despl=15)
    e.etq_punt(A, "una cara", petit=True, direccio=(0, -1))


def piramide_regular(n, costat, altura=None, apotema_piramide=None,
                     apotema_base=None, etq_costat=None, etq_altura=None,
                     etq_apotema=None, unitat="cm"):
    """Piràmide recta de base un polígon regular de n costats.

    S'acota l'altura o l'apotema de la piràmide, segons què digui l'enunciat.
    Distingir-les és justament el que costa a l'alumne —l'apotema de la
    piràmide és l'altura d'una CARA, no la del cos— i per això mai no es
    dibuixen totes dues alhora: es marca la que es dona.

    I com que són coses diferents, es dibuixen de manera diferent:

    * Si l'enunciat dona l'ALTURA, va acotada sobre l'eix del cos, que és on
      viu: vertical, de l'àpex al centre de la base, amb l'angle recte
      marcat. El costat s'acota sobre una aresta frontal de la base.
    * Si dona l'APOTEMA DE LA PIRÀMIDE, al costat s'hi desplega una cara
      lateral en veritable magnitud i allà s'hi acoten tant l'apotema com el
      costat. Dins de la perspectiva, l'apotema quedaria com un segment
      obliqu més entre les arestes que baixen de l'àpex, indistingible de
      l'aresta lateral que té al costat.

    La vista auxiliar només repeteix dades de l'enunciat. L'altura de la
    piràmide i l'apotema de la base no s'hi escriuen mai encara que es
    puguin deduir: en aquests exercicis són justament la feina de l'alumne.
    """
    R, H = 50.0, 112.0
    cx, cyb = 0.0, 0.0
    base = [(cx + R * math.cos(math.radians(-90 + 360.0 * k / n)),
             cyb + R * APLANAT * math.sin(math.radians(-90 + 360.0 * k / n)))
            for k in range(n)]
    apex = (cx, cyb - H)

    noms = {3: "triangular", 4: "quadrangular", 5: "pentagonal",
            6: "hexagonal", 8: "octogonal"}
    nom = noms.get(n, "de %d costats" % n)
    titol = "Piràmide recta de base %s regular, en perspectiva." % nom
    if apotema_piramide is not None:
        titol += " Al costat, una cara lateral en veritable magnitud."
    e = Escena(titol)

    e.poligon(base, discontinu=True, gruix=1.1)
    # Arestes frontals: les que formen una cara lateral VISIBLE. Es guarden
    # perquè el costat s'ha d'acotar sobre una d'aquestes, mai sobre una del
    # darrere.
    frontals = []
    for k in range(n):
        a, b = base[k], base[(k + 1) % n]
        if (a[1] + b[1]) / 2 < cyb - 1:
            continue
        frontals.append((a, b))
        e.poligon([apex, a, b])
    for p in base:
        if p[1] >= cyb - 0.5:
            e.segment(apex, p)

    e_costat = etq_costat or mesura(costat, unitat)
    if apotema_piramide is not None:
        _cara_lateral(e, costat, apotema_piramide,
                      max(p[0] for p in base) + 66, cyb, e_costat,
                      etq_apotema or mesura(apotema_piramide, unitat))
    else:
        if altura is not None:
            # L'eix va en color de marca, no en discontinu neutre. Amb un
            # nombre parell de costats, la base te un VERTEX al davant i
            # just al mig, de manera que l'aresta apex->vertex frontal cau
            # exactament sobre l'eix (totes dues son x = cx): l'altura hi
            # quedava amagada a sota i la marca d'angle recte semblava
            # penjada d'una linia que no es veia (179b). Amb el color de
            # marca es distingeix, i a mes es coherent amb la resta del
            # projecte, on el color de marca assenyala la mesura de la qual
            # parla l'enunciat.
            e.marca(apex, (cx, cyb), gruix=1.6)
            e.angle_recte((cx, cyb), (1, 0), (0, -1))
            e.cota(apex, (cx, cyb), etq_altura or mesura(altura, unitat),
                   despl=R + 18, costat=1, petit=True)
        ar = max(frontals, key=lambda ab: abs(ab[0][0] - ab[1][0])) if frontals \
            else (base[0], base[1])
        e.cota(ar[0], ar[1], e_costat, despl=16)
    return e.svg()


def tetraedre(aresta, etq=None, unitat="cm"):
    """Tetraedre regular: quatre triangles equilàters. Es dibuixa amb una
    cara al davant i les arestes cap al vèrtex del darrere discontínues.

    L'alçada de la cara frontal és L·√3/2, el valor exacte del triangle
    equilàter; abans hi havia un 0,88 aproximat que aplanava lleugerament
    la cara i li feia perdre la proporció.
    """
    L = 116.0
    h = L * math.sqrt(3) / 2                 # alçada del triangle equilàter
    A = (L / 2, 0.0)                         # vèrtex de dalt
    B = (0.0, h)                             # base esquerra
    C = (L, h)                               # base dreta
    Dp = (L * 0.62, h * 0.68)                # vèrtex del darrere, amagat
    e_txt = etq or (mesura(aresta, unitat))
    e = Escena("Tetraedre regular d'aresta %s, en perspectiva." % e_txt)
    e.poligon([A, B, C])
    for v in (A, B, C):
        e.segment(v, Dp, gruix=1.1, discontinu=True)
    e.cota(B, C, e_txt, despl=16)
    return e.svg()
