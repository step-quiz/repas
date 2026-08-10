# -*- coding: utf-8 -*-
"""figures/grafics.py — gràfiques de funcions amb eixos cartesians.

Vegeu `figures/__init__.py` per a les convencions comunes: viewBox sense mida
fixa, `currentColor` als traços, `role="img"` amb `<title>`, i cap `$` a dins.
`lib._valida()` atura la compilació si alguna no es compleix.

REGLA QUE NO ES NEGOCIA (§ briefs/BRIEF-xtec.md): cap gràfica marca per
defecte allò que l'exercici demana calcular. `marca_vertex` i `marca_talls`
comencen sempre a `False`: qui crida la plantilla ha de decidir activar-los
explícitament, i només ho fa quan el vèrtex o els talls són una DADA de
l'enunciat (214, 215), mai quan són la INCÒGNITA (216, 300, 301). Un ítem
"més informatiu" que dibuixa la resposta no és una millora, és una fuita.

SISTEMA DE COORDENADES. Totes les funcions reben l'escala matemàtica
(xmin, xmax, ymin, ymax) i la mapegen internament a coordenades SVG: l'eix Y
de l'SVG creix cap avall, així que cal invertir-lo. `_mapa()` ho encapsula
perquè cap plantilla l'hagi de repetir.
"""
import math

from . import OMPLERT, MARCA, _svg, _text

# Mida del quadre de dibuix en unitats de viewBox (constant per a totes les
# gràfiques: el que canvia és l'escala matemàtica que hi mapegem a dins, no
# la mida del dibuix).
_W, _H = 220, 220
_M = 30  # marge per a les etiquetes dels eixos


def _mapa(xmin, xmax, ymin, ymax):
    """Retorna una funció (x, y) -> (px, py) que passa de coordenades
    matemàtiques a coordenades SVG dins del quadre (_M, _M)-(_W-_M, _H-_M),
    amb l'eix Y invertit (a SVG, y creix cap avall)."""
    ample = (_W - 2 * _M)
    alt = (_H - 2 * _M)

    def f(x, y):
        px = _M + (float(x) - xmin) / (xmax - xmin) * ample
        py = _M + alt - (float(y) - ymin) / (ymax - ymin) * alt
        return px, py
    return f


def _pas_graella(rang, objectiu=8):
    """Tria un pas "bonic" (1, 2, 5, 10, 20, 50...) perquè el nombre de
    línies de graella dins de `rang` unitats es quedi a prop d'`objectiu`,
    independentment de com d'ample sigui el rang. Sense això, una paràbola
    amb el vèrtex lluny de l'origen (p. ex. xv=20) dibuixaria una línia per
    cada enter i inflaria l'SVG en comptes de fer-lo més llegible."""
    brut = rang / objectiu
    if brut <= 0:
        return 1
    exp = math.floor(math.log10(brut))
    base = brut / (10 ** exp)
    for cand in (1, 2, 5, 10):
        if base <= cand:
            return cand * (10 ** exp)
    return 10 * (10 ** exp)


def eixos(xmin, xmax, ymin, ymax, graella=True, etq_x="x", etq_y="y"):
    """Parell d'eixos cartesians amb fletxes i graella opcional de fons.

    No es fa servir sola (no és cap plantilla registrable per si mateixa a
    un enunciat, perquè un parell d'eixos buits no respon res): és
    l'embolcall que fan servir `grafica_recta`, `grafica_parabola` i
    `nuvol_de_punts`. Retorna només el cos SVG (sense `<svg>` embolcallant),
    perquè les altres funcions hi puguin superposar la corba o els punts
    abans de tancar la figura.
    """
    mapa = _mapa(xmin, xmax, ymin, ymax)
    cos = ""
    if graella:
        # El pas s'adapta a l'amplada del rang (vegeu `_pas_graella`): en
        # gris fluix (currentColor amb opacitat baixa) perquè no competeixi
        # amb la corba.
        pas_x = _pas_graella(xmax - xmin)
        x0 = math.ceil(xmin / pas_x) * pas_x
        while x0 <= xmax + 1e-9:
            if abs(x0) > 1e-9:
                p1 = mapa(x0, ymin)
                p2 = mapa(x0, ymax)
                cos += ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" '
                        'stroke="currentColor" stroke-width="0.5" opacity="0.18"/>'
                        % (p1[0], p1[1], p2[0], p2[1]))
            x0 += pas_x
        pas_y = _pas_graella(ymax - ymin)
        y0 = math.ceil(ymin / pas_y) * pas_y
        while y0 <= ymax + 1e-9:
            if abs(y0) > 1e-9:
                p1 = mapa(xmin, y0)
                p2 = mapa(xmax, y0)
                cos += ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" '
                        'stroke="currentColor" stroke-width="0.5" opacity="0.18"/>'
                        % (p1[0], p1[1], p2[0], p2[1]))
            y0 += pas_y
    # Eix X
    ox1 = mapa(xmin, 0)
    ox2 = mapa(xmax, 0)
    # Eix Y
    oy1 = mapa(0, ymin)
    oy2 = mapa(0, ymax)
    cos += ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="currentColor" '
            'stroke-width="1.3"/>' % (ox1[0], ox1[1], ox2[0], ox2[1]))
    cos += ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="currentColor" '
            'stroke-width="1.3"/>' % (oy1[0], oy1[1], oy2[0], oy2[1]))
    # Fletxes (petit triangle) als extrems positius de cada eix
    cos += ('<path d="M %.1f %.1f l -6 -3 v 6 z" fill="currentColor"/>'
            % (ox2[0], ox2[1]))
    cos += ('<path d="M %.1f %.1f l -3 6 h 6 z" fill="currentColor"/>'
            % (oy2[0], oy2[1]))
    cos += _text(ox2[0] - 4, ox2[1] + 14, etq_x, ancora="end", petit=True)
    cos += _text(oy2[0] + 10, oy2[1] + 4, etq_y, ancora="start", petit=True)
    return cos


def _corba(mapa, f, xmin, xmax, ymin, ymax, n=60):
    """Mostreja `f` en `n` punts entre xmin i xmax i en torna un <path> amb
    trams rectes curts (prou fins per semblar corba a la mida del dibuix).
    Els punts fora del rang vertical es tallen (la corba surt del quadre en
    lloc de deformar-se cap a un pic fora d'escala)."""
    punts = []
    marge = (ymax - ymin) * 0.15
    for i in range(n + 1):
        x = xmin + (xmax - xmin) * i / n
        y = f(x)
        if y is not None and ymin - marge <= y <= ymax + marge:
            punts.append(mapa(x, y))
        else:
            punts.append(None)
    trossos = []
    dins = False
    for p in punts:
        if p is None:
            dins = False
            continue
        if not dins:
            trossos.append("M %.1f %.1f" % p)
            dins = True
        else:
            trossos.append("L %.1f %.1f" % p)
    return '<path d="%s" fill="none" stroke="%s" stroke-width="2.2"/>' % (
        " ".join(trossos), MARCA)


def _punt(mapa, x, y, etq=None, ancora="middle", dy=-9):
    px, py = mapa(x, y)
    cos = '<circle cx="%.1f" cy="%.1f" r="3.2" fill="%s"/>' % (px, py, MARCA)
    if etq:
        cos += _text(px, py + dy, etq, ancora=ancora, petit=True)
    return cos


def grafica_recta(m, n, m2=None, n2=None, xmin=None, xmax=None, ymin=None,
                   ymax=None, punts_marcats=None, graella=True):
    """Una recta y = mx + n sobre uns eixos, o dues si es dona `m2, n2`.

    grafica_recta(2, -3)                            una recta
    grafica_recta(2, -3, punts_marcats=[(1,4)])     amb un punt destacat
    grafica_recta(2, 1, -1, 7)                      dues rectes (299)

    `punts_marcats` il·lustra UN punt donat sobre una recta ja coneguda
    (p. ex. 295, on el pendent i el punt són la dada i l'equació és la
    incògnita). Quan els punts són la dada i la RECTA és la incògnita (209,
    298a-b), es fa servir `nuvol_de_punts` en lloc d'aquesta funció, sense
    traçar-hi cap recta.

    `m2, n2` són per al cas 299 (punt de tall de dues rectes): totes dues es
    dibuixen, però el punt on es creuen NO es marca (és la resposta que es
    demana calcular; vegeu la regla al capdamunt del mòdul).

    Si no es donen límits explícits, es calculen en dos passos: primer
    l'horitzontal, centrat en els punts d'interès (l'origen i els
    `punts_marcats`); després el vertical, avaluant la o les rectes mateixes
    als extrems d'aquest rang horitzontal. Cal fer-ho en aquest ordre perquè
    un marge vertical fix (p. ex. ±5) no s'adapta al pendent: amb m=-3 i un
    rang horitzontal de 10 unitats calen 30 unitats verticals per no tallar
    la recta, no 10. `grafica_parabola` fa el mateix amb el vèrtex.
    """
    m, n = float(m), float(n)
    dues = m2 is not None and n2 is not None
    if dues:
        m2, n2 = float(m2), float(n2)
    if xmin is None or xmax is None:
        xs = [0.0] + [float(p[0]) for p in (punts_marcats or [])]
        cx = sum(xs) / len(xs)
        if xmin is None:
            xmin = cx - 5
        if xmax is None:
            xmax = cx + 5
    if ymin is None or ymax is None:
        vals = [m * xmin + n, m * xmax + n, n] + \
            [float(p[1]) for p in (punts_marcats or [])]
        if dues:
            vals += [m2 * xmin + n2, m2 * xmax + n2, n2]
        vmin, vmax = min(vals), max(vals)
        marge = max(1.0, (vmax - vmin) * 0.15)
        if ymin is None:
            ymin = vmin - marge
        if ymax is None:
            ymax = vmax + marge
    mapa = _mapa(xmin, xmax, ymin, ymax)
    cos = eixos(xmin, xmax, ymin, ymax, graella=graella)
    cos += _corba(mapa, lambda x: m * x + n, xmin, xmax, ymin, ymax, n=2)
    if dues:
        cos += _corba(mapa, lambda x: m2 * x + n2, xmin, xmax, ymin, ymax, n=2)
    if punts_marcats:
        for (px, py) in punts_marcats:
            cos += _punt(mapa, px, py)
    if dues:
        titol = ("Dues rectes: una amb pendent %g i ordenada a l'origen "
                  "%g; l'altra amb pendent %g i ordenada a l'origen %g."
                  % (m, n, m2, n2))
    elif punts_marcats:
        titol = ("Recta amb pendent %g i ordenada a l'origen %g, amb el "
                  "punt %s marcat."
                  % (m, n, "; ".join("(%g, %g)" % (px, py)
                                      for px, py in punts_marcats)))
    else:
        titol = "Recta amb pendent %g i ordenada a l'origen %g." % (m, n)
    return _svg(_W, _H, cos, titol)


def grafica_parabola(a, b, c, xmin=None, xmax=None, ymin=None, ymax=None,
                      marca_vertex=False, marca_talls=False, graella=True):
    """Paràbola y = ax^2 + bx + c sobre uns eixos.

    Per defecte NO marca res (vegeu la regla al capdamunt del mòdul).
    Activar `marca_vertex` o `marca_talls` només quan aquell valor sigui una
    DADA de l'enunciat, mai quan sigui la resposta que es demana calcular.

    Si no es donen límits explícits, es calculen a partir del vèrtex perquè
    la paràbola hi surti sencera i centrada, amb un marge proporcional.
    """
    a, b, c = float(a), float(b), float(c)
    xv = -b / (2 * a) if a else 0.0
    yv = a * xv * xv + b * xv + c
    if xmin is None or xmax is None:
        radi_x = max(3.0, abs(xv) + 3.0)
        xmin, xmax = xv - radi_x, xv + radi_x
    if ymin is None or ymax is None:
        # El quadre vertical s'ajusta a l'obertura de la paràbola dins de
        # [xmin, xmax], no a una constant, perquè una paràbola molt oberta
        # (a gran) no quedi aplanada ni una de molt plana surti minúscula.
        vals = [a * x * x + b * x + c
                for x in (xmin, xmax, xv, (xmin + xv) / 2, (xmax + xv) / 2)]
        ymin, ymax = min(vals + [yv]), max(vals + [yv])
        marge = max(1.0, (ymax - ymin) * 0.15)
        ymin, ymax = ymin - marge, ymax + marge
    mapa = _mapa(xmin, xmax, ymin, ymax)
    cos = eixos(xmin, xmax, ymin, ymax, graella=graella)
    cos += _corba(mapa, lambda x: a * x * x + b * x + c, xmin, xmax, ymin, ymax)
    despcs = []
    if marca_vertex:
        cos += _punt(mapa, xv, yv, dy=-9 if a > 0 else 14)
        despcs.append("el vèrtex marcat")
    if marca_talls:
        disc = b * b - 4 * a * c
        if disc >= 0:
            r1 = (-b - math.sqrt(disc)) / (2 * a)
            r2 = (-b + math.sqrt(disc)) / (2 * a)
            for r in {round(r1, 6), round(r2, 6)}:
                cos += _punt(mapa, r, 0, dy=14)
        despcs.append("els talls amb l'eix X marcats")
    # El títol sempre inclou els coeficients (ja explícits a l'enunciat
    # en forma d'expressió algebraica: repetir-los no revela res nou),
    # però mai les coordenades del vèrtex ni dels talls en text pla quan
    # no estan marcats explícitament: donar-los aquí seria una via
    # diferent per revelar la mateixa resposta que el dibuix amaga.
    titol = "Paràbola amb a=%g, b=%g, c=%g" % (a, b, c)
    titol += (", amb " + " i ".join(despcs) + "." if despcs else ".")
    return _svg(_W, _H, cos, titol)


def grafica_funcio(f, xmin, xmax, ymin, ymax, titol, f2=None, graella=True):
    """Gràfica d'una funció Python arbitrària `f(x) -> y`, per als casos on
    l'enunciat descriu la corba amb PARAULES (203, 206) i no hi ha cap
    fórmula tancada y=mx+n ni y=ax²+bx+c que la representi exactament: una
    corba amb asímptotes, una amb un tram tancat, o una amb dos canvis de
    monotonia no encaixen a `grafica_recta` ni a `grafica_parabola`.

    A diferència de les altres plantilles d'aquest mòdul, aquí `xmin`,
    `xmax`, `ymin`, `ymax` i `titol` són sempre obligatoris: en no haver-hi
    cap paràmetre algebraic (m, n, a, b, c) del qual derivar-los, no hi ha
    manera de calcular-los automàticament ni de generar una descripció.

    `f` pot retornar `None` en un punt (o llançar ZeroDivisionError/
    ValueError, que aquesta funció ja capta) per representar una asímptota:
    la corba s'hi interromp en lloc de dibuixar un salt vertical fals.

    `f2` és per a corbes que no són el graf d'una funció y=f(x) (per a un
    mateix x hi ha més d'un y): una paràbola "de costat" com x=5-y² es
    dibuixa com dues branques, `f` i `f2`, cadascuna sí funció de x.

    IMPORTANT: com que aquí la corba es tria a mà punt per punt, aquesta
    plantilla NO és per a exercicis on el vèrtex, els talls o un extrem
    concrets siguin la resposta a calcular (aquests fan servir
    `grafica_parabola` amb `marca_vertex`/`marca_talls` en `False`, que
    almenys garanteix que la posició ve d'un càlcul real, no d'un dibuix a
    ull): és només per a 203 i 206, on la gràfica ÉS l'enunciat.
    """
    def _segura(g):
        def g_segura(x):
            try:
                return g(x)
            except (ZeroDivisionError, ValueError):
                return None
        return g_segura

    mapa = _mapa(xmin, xmax, ymin, ymax)
    cos = eixos(xmin, xmax, ymin, ymax, graella=graella)
    cos += _corba(mapa, _segura(f), xmin, xmax, ymin, ymax, n=120)
    if f2 is not None:
        cos += _corba(mapa, _segura(f2), xmin, xmax, ymin, ymax, n=120)
    return _svg(_W, _H, cos, titol)


def nuvol_de_punts(punts, xmin=None, xmax=None, ymin=None, ymax=None,
                    graella=True, etiquetes=None):
    """Un o més punts marcats sobre uns eixos, SENSE cap recta ni corba
    traçada. Pensat per als exercicis on els punts són la dada i la recta
    (o l'expressió) que els relaciona és la incògnita: 209, 298a-b.

    nuvol_de_punts([(0,-1), (1,1)])
    nuvol_de_punts([(1,4)], etiquetes=["P"])
    """
    xs = [float(p[0]) for p in punts]
    ys = [float(p[1]) for p in punts]
    if xmin is None or xmax is None:
        marge_x = max(2.0, (max(xs) - min(xs)) * 0.6 + 1.0)
        xmin, xmax = min(xs) - marge_x, max(xs) + marge_x
    if ymin is None or ymax is None:
        marge_y = max(2.0, (max(ys) - min(ys)) * 0.6 + 1.0)
        ymin, ymax = min(ys) - marge_y, max(ys) + marge_y
    mapa = _mapa(xmin, xmax, ymin, ymax)
    cos = eixos(xmin, xmax, ymin, ymax, graella=graella)
    for i, (px, py) in enumerate(punts):
        etq = etiquetes[i] if etiquetes and i < len(etiquetes) else None
        cos += _punt(mapa, px, py, etq=etq)
    desc = "; ".join("(%g, %g)" % (px, py) for px, py in punts)
    return _svg(_W, _H, cos, "Punts marcats: %s." % desc)
