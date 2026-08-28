# -*- coding: utf-8 -*-
"""figures/grafics.py — gràfiques de funcions amb eixos cartesians.

Vegeu `figures/__init__.py` per a les convencions comunes: viewBox sense mida
fixa, `currentColor` als traços, `role="img"` amb `<title>`, i cap `$` a dins.
`lib._valida()` atura la compilació si alguna no es compleix.

REGLA QUE NO ES NEGOCIA (§ briefs/BRIEF-xtec.md): cap gràfica marca per
defecte allò que l'exercici demana calcular. `marca_vertex`, `marca_talls`,
`continua_esq/dreta` i `tancat_esq/dreta` comencen sempre a `False`: qui
crida la plantilla ha de decidir activar-los explícitament, i només ho fa
quan el fet que marquen és una DADA de l'enunciat (214, 215, 203b...), mai
quan és la INCÒGNITA (216, 300, 301, 295...). Un ítem "més informatiu" que
dibuixa la resposta no és una millora, és una fuita.

SISTEMA DE COORDENADES. Totes les funcions reben l'escala matemàtica
(xmin, xmax, ymin, ymax) i la mapegen internament a coordenades SVG: l'eix Y
de l'SVG creix cap avall, així que cal invertir-lo. `_mapa()` ho encapsula
perquè cap plantilla l'hagi de repetir.

NÚMEROS ALS EIXOS I ESCALA COMUNA (auditoria, punt E). Abans cap gràfica
portava cap número: només hi havia línies de graella i les etiquetes "x"/"y"
a la punta de fletxa. A més, X i Y s'escalaven de manera INDEPENDENT (el
rang de cada eix es calculava per separat), cosa que distorsiona qualsevol
lectura que depengui de comparar els dos eixos — el cas més flagrant era un
pendent de 10 dibuixat a 45°, indistingible d'un pendent de ±1 (207b/207d).
Ara `eixos()` sempre hi afegeix els números de cada línia de graella (a la
vora inferior per a X, a la vora esquerra per a Y: així no xoquen amb la
corba, que pot passar per qualsevol punt del quadre), i `grafica_recta` i
`nuvol_de_punts` trien un ÚNIC radi (mateixes unitats als dos eixos) perquè
un pendent es vegi amb el seu angle real. A `grafica_parabola` una escala
1:1 no sempre té sentit (una paràbola oberta pot pujar molt més del que
avança en X), així que en comptes d'imposar-la es limita la finestra amb
què es calcula el marge vertical perquè un vèrtex real però superficial no
quedi aixafat contra l'eix X i sembli una arrel doble que no ho és
(216b, 216c).
"""
import math

from . import OMPLERT, MARCA, _svg, _text

# Mida del quadre de dibuix en unitats de viewBox (constant per a totes les
# gràfiques: el que canvia és l'escala matemàtica que hi mapegem a dins, no
# la mida del dibuix).
_W, _H = 220, 220
_M = 30  # marge per a les etiquetes dels eixos


def _mapa(xmin, xmax, ymin, ymax):
    ample, alt = _W - 2 * _M, _H - 2 * _M

    def f(x, y):
        px = _M + (x - xmin) / (xmax - xmin) * ample
        py = _M + alt - (y - ymin) / (ymax - ymin) * alt
        return (px, py)
    return f


def _pas_graella(rang, objectiu=8):
    """Tria un pas "rodó" (1, 2 o 5 per la potència de deu que toqui) que
    doni aproximadament `objectiu` línies de graella. Sense això, un rang
    calculat automàticament (com el d'una paràbola amb el vèrtex lluny de
    l'origen) pot demanar centenars de línies i inflar l'SVG."""
    brut = rang / objectiu
    if brut <= 0:
        return 1
    exp = math.floor(math.log10(brut))
    base = brut / (10 ** exp)
    for cand in (1, 2, 5, 10):
        if base <= cand:
            return cand * (10 ** exp)
    return 10 * (10 ** exp)


def _fmt_graella(v):
    """Formata un valor de línia de graella com a etiqueta d'eix: enter
    sense decimals, decimal amb coma catalana (mai amb punt: mateix criteri
    que `mesura()` a __init__.py), i mai "-0" per l'arrodoniment de punt
    flotant."""
    v = round(v, 6)
    if abs(v) < 1e-9:
        return "0"
    if abs(v - round(v)) < 1e-6:
        return "%d" % round(v)
    return ("%g" % v).replace(".", ",")


def eixos(xmin, xmax, ymin, ymax, graella=True, etq_x="x", etq_y="y"):
    mapa = _mapa(xmin, xmax, ymin, ymax)
    cos = ""
    etq_x_baix, etq_y_esq = [], []
    if graella:
        pas_x = _pas_graella(xmax - xmin)
        x0 = math.ceil(xmin / pas_x) * pas_x
        while x0 <= xmax + 1e-9:
            if abs(x0) > 1e-9:
                p1, p2 = mapa(x0, ymin), mapa(x0, ymax)
                cos += ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" '
                        'stroke="currentColor" stroke-width="0.5" '
                        'opacity="0.18"/>' % (p1[0], p1[1], p2[0], p2[1]))
            etq_x_baix.append((mapa(x0, ymin)[0], x0))
            x0 += pas_x
        pas_y = _pas_graella(ymax - ymin)
        y0 = math.ceil(ymin / pas_y) * pas_y
        while y0 <= ymax + 1e-9:
            if abs(y0) > 1e-9:
                p1, p2 = mapa(xmin, y0), mapa(xmax, y0)
                cos += ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" '
                        'stroke="currentColor" stroke-width="0.5" '
                        'opacity="0.18"/>' % (p1[0], p1[1], p2[0], p2[1]))
            etq_y_esq.append((mapa(xmin, y0)[1], y0))
            y0 += pas_y
    ox1, ox2 = mapa(xmin, 0), mapa(xmax, 0)
    oy1, oy2 = mapa(0, ymin), mapa(0, ymax)
    cos += ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" '
            'stroke="currentColor" stroke-width="1.1"/>'
            % (ox1[0], ox1[1], ox2[0], ox2[1]))
    cos += ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" '
            'stroke="currentColor" stroke-width="1.1"/>'
            % (oy1[0], oy1[1], oy2[0], oy2[1]))
    cos += ('<path d="M %.1f %.1f l -6 -3 v 6 z" fill="currentColor"/>'
            % (ox2[0] + 6, ox2[1]))
    cos += ('<path d="M %.1f %.1f l -3 6 h 6 z" fill="currentColor"/>'
            % (oy2[0], oy2[1] - 6))
    cos += _text(ox2[0] - 4, ox2[1] + 14, etq_x, ancora="end", petit=True)
    cos += _text(oy2[0] + 8, oy2[1] + 4, etq_y, ancora="start", petit=True)
    # Números de la graella: a la vora del quadre (inferior per a X,
    # esquerra per a Y), no directament sobre la línia de l'eix — que pot
    # caure enmig del dibuix i xocar amb la corba. Agrupats en un <g> amb
    # la classe i l'ancoratge perquè cada <text> no l'hagi de repetir.
    if etq_x_baix:
        cos += '<g class="fig-etq petita" text-anchor="middle">'
        for px, valor in etq_x_baix:
            cos += '<text x="%.1f" y="%d">%s</text>' % (
                px, _H - _M + 12, _fmt_graella(valor))
        cos += "</g>"
    if etq_y_esq:
        cos += '<g class="fig-etq petita" text-anchor="end">'
        for py, valor in etq_y_esq:
            cos += '<text x="%d" y="%.1f">%s</text>' % (
                _M - 6, py + 3.5, _fmt_graella(valor))
        cos += "</g>"
    return cos


def _mostres(mapa, f, xmin, xmax, ymin, ymax, n):
    """Mostreja `f` en `n+1` punts equiespaiats i en torna els punts SVG ja
    mapejats (o `None` on la funció no existeix o surt del marge vertical
    del 15 %). `_corba()` en construeix el `<path>`; `_cua_continuacio()`
    reutilitza aquesta mateixa llista per saber on s'atura de debò cada
    tram, encara que sigui abans d'arribar a xmin/xmax."""
    punts = []
    marge = (ymax - ymin) * 0.15
    for i in range(n + 1):
        x = xmin + (xmax - xmin) * i / n
        y = f(x)
        if y is not None and ymin - marge <= y <= ymax + marge:
            punts.append(mapa(x, y))
        else:
            punts.append(None)
    return punts


def _path_de_mostres(punts):
    trossos, dins = [], False
    for p in punts:
        if p is None:
            dins = False
            continue
        trossos.append(("M" if not dins else "L") + " %.1f %.1f" % p)
        dins = True
    return " ".join(trossos)


def _corba(mapa, f, xmin, xmax, ymin, ymax, n=60):
    punts = _mostres(mapa, f, xmin, xmax, ymin, ymax, n)
    return '<path d="%s" fill="none" stroke="%s" stroke-width="2.2"/>' % (
        _path_de_mostres(punts), MARCA)


def _cua_continuacio(punts):
    """Tram curt, discontinu i semitransparent que s'allarga des de
    l'ÚLTIM punt vàlid de `punts` en la direcció que ja hi portava la
    corba: indica que segueix més enllà del quadre encara que el tram
    dibuixat s'aturi abans d'arribar a la vora (una funció pot sortir del
    marge vertical abans d'arribar a xmax: vegeu 203c a l'auditoria, on
    una paràbola molt oberta es tallava a mitja figura sense cap
    indicació que continuava). Per l'extrem esquerre es crida amb la
    llista invertida."""
    vistos = [p for p in punts if p is not None]
    if len(vistos) < 2:
        return ""
    (x1, y1), (x2, y2) = vistos[-2], vistos[-1]
    dx, dy = x2 - x1, y2 - y1
    d = math.hypot(dx, dy)
    if d < 1e-6:
        return ""
    ux, uy = dx / d, dy / d
    llarg = 13
    fi = (x2 + ux * llarg, y2 + uy * llarg)
    return ('<path d="M %.1f %.1f L %.1f %.1f" fill="none" stroke="%s" '
            'stroke-width="2.2" stroke-linecap="round" '
            'stroke-dasharray="1,3.2" opacity="0.5"/>'
            % (x2, y2, fi[0], fi[1], MARCA))


def _punt(mapa, x, y, etq=None, ancora="middle", dy=-9):
    px, py = mapa(x, y)
    cos = '<circle cx="%.1f" cy="%.1f" r="3.6" fill="%s"/>' % (px, py, MARCA)
    if etq:
        cos += _text(px, py + dy, etq, ancora=ancora)
    return cos


def grafica_recta(m, n, m2=None, n2=None, xmin=None, xmax=None, ymin=None,
                   ymax=None, punts_marcats=None, graella=True):
    m, n = float(m), float(n)
    dues = m2 is not None and n2 is not None
    if dues:
        m2, n2 = float(m2), float(n2)
    if xmin is None or xmax is None or ymin is None or ymax is None:
        # Punts d'interès: l'origen, l'ordenada i l'abscissa a l'origen de
        # cada recta (aquesta última només si no és horitzontal) i els
        # punts marcats. Un ÚNIC radi, calculat a partir de tots ells i
        # aplicat per igual als dos eixos, garanteix escala 1:1: el quadre
        # de dibuix és quadrat en píxels, així que el mateix nombre
        # d'unitats a cada eix hi ocupa els mateixos píxels, i un pendent
        # es veu amb el seu angle real (vegeu la nota d'escala comuna al
        # capdamunt del mòdul).
        xs, ys = {0.0}, {0.0, n}
        if m != 0:
            xs.add(-n / m)
        if dues:
            ys.add(n2)
            if m2 != 0:
                xs.add(-n2 / m2)
        for (px, py) in (punts_marcats or []):
            xs.add(float(px))
            ys.add(float(py))
        cx, cy = (min(xs) + max(xs)) / 2, (min(ys) + max(ys)) / 2
        radi = max(max(xs) - cx, cx - min(xs),
                   max(ys) - cy, cy - min(ys), 1.8) * 1.4
        if xmin is None:
            xmin = cx - radi
        if xmax is None:
            xmax = cx + radi
        if ymin is None:
            ymin = cy - radi
        if ymax is None:
            ymax = cy + radi
    mapa = _mapa(xmin, xmax, ymin, ymax)
    cos = eixos(xmin, xmax, ymin, ymax, graella=graella)
    # n=60, no 2: amb l'escala 1:1, un pendent gran pot travessar el
    # quadre en només una petita franja d'x (207b: m=10 hi entra i en
    # surt en menys d'un 10 % de l'amplada). Amb només 3 mostres (n=2),
    # les dues dels extrems cauen fora del marge vertical i no en queda
    # cap parella per traçar cap segment: la recta desapareixia sencera.
    cos += _corba(mapa, lambda x: m * x + n, xmin, xmax, ymin, ymax)
    if dues:
        cos += _corba(mapa, lambda x: m2 * x + n2, xmin, xmax, ymin, ymax)
    if punts_marcats:
        for (px, py) in punts_marcats:
            cos += _punt(mapa, float(px), float(py))
    titol = "Recta de pendent %s i ordenada a l'origen %s." % (
        _fmt_graella(m), _fmt_graella(n))
    if dues:
        titol = ("Dues rectes: pendent %s i ordenada %s; i pendent %s i "
                  "ordenada %s.") % (_fmt_graella(m), _fmt_graella(n),
                                      _fmt_graella(m2), _fmt_graella(n2))
    return _svg(_W, _H, cos, titol)


def grafica_parabola(a, b, c, xmin=None, xmax=None, ymin=None, ymax=None,
                      marca_vertex=False, marca_talls=False, graella=True):
    a, b, c = float(a), float(b), float(c)
    xv = -b / (2 * a) if a else 0.0
    yv = a * xv * xv + b * xv + c
    if xmin is None or xmax is None:
        radi_x = max(3.0, abs(xv) + 3.0)
        xmin, xmax = xv - radi_x, xv + radi_x
    if ymin is None or ymax is None:
        # El marge vertical NOMÉS s'avalua a prop del vèrtex (radi acotat,
        # encara que xmin/xmax siguin molt més lluny), no a tot
        # [xmin, xmax]: avaluar la funció als extrems d'un rang horitzontal
        # ample fa pujar tant els valors que, al costat seu, un vèrtex real
        # però superficial (216b: -1/9; 216c: -1/6) queda aixafat contra
        # l'eix X i sembla tangent — dues arrels que en realitat són
        # diferents (vegeu l'auditoria).
        disc = b * b - 4 * a * c
        if a and disc >= 0:
            arrel = math.sqrt(disc) / (2 * abs(a))
            zona = max(arrel * 2.0, 0.5)
        else:
            zona = 2.0
        radi_y = min(xmax - xv, xv - xmin, zona)
        mostres = (xv, xv - radi_y, xv + radi_y,
                   xv - radi_y / 2, xv + radi_y / 2)
        vals = [a * x * x + b * x + c for x in mostres] + [yv]
        ymin, ymax = min(vals), max(vals)
        marge = max(0.4, (ymax - ymin) * 0.15)
        ymin, ymax = ymin - marge, ymax + marge
        # L'eix X ha de quedar sempre visible: si el vèrtex real (no la
        # finestra local) fa que 0 quedi fora, s'hi allarga el costat que
        # calgui amb el mateix marge ja calculat.
        if ymin > 0:
            ymin = -marge
        elif ymax < 0:
            ymax = marge
    mapa = _mapa(xmin, xmax, ymin, ymax)
    cos = eixos(xmin, xmax, ymin, ymax, graella=graella)
    cos += _corba(mapa, lambda x: a * x * x + b * x + c, xmin, xmax, ymin,
                   ymax)
    if marca_vertex:
        cos += _punt(mapa, xv, yv)
    if marca_talls:
        disc = b * b - 4 * a * c
        if disc > 1e-9:
            arrel = math.sqrt(disc)
            for x in ((-b - arrel) / (2 * a), (-b + arrel) / (2 * a)):
                cos += _punt(mapa, x, 0.0)
        elif abs(disc) <= 1e-9:
            cos += _punt(mapa, -b / (2 * a), 0.0)
    titol = "Paràbola y = %s·x² %s %s·x %s %s." % (
        _fmt_graella(a),
        "+" if b >= 0 else "-", _fmt_graella(abs(b)),
        "+" if c >= 0 else "-", _fmt_graella(abs(c)))
    return _svg(_W, _H, cos, titol)


def grafica_funcio(f, xmin, xmax, ymin, ymax, titol, f2=None, graella=True,
                    continua_esq=False, continua_dreta=False,
                    tancat_esq=False, tancat_dreta=False):
    """xmin, xmax, ymin, ymax i titol són sempre obligatoris: aquí no hi ha
    manera raonable de deduir-los automàticament a partir de `f`.

    `continua_esq`/`continua_dreta` (per defecte False) hi afegeixen un
    tram curt i discontinu que indica que la corba segueix més enllà del
    quadre — només quan el domini de debò s'hi estén, una dada que sap qui
    crida, no aquesta funció (203a, 203c: domini ℝ o ℝ-{2}, ho diu
    l'enunciat en paraules).

    `tancat_esq`/`tancat_dreta` (per defecte False) hi afegeixen un punt
    ple a x=xmin i/o x=xmax — només quan aquell costat del domini ÉS un
    extrem inclòs (203b: domini [-3,4], "extrems inclosos" ja ho diu
    l'enunciat), mai per marcar un tall arbitrari del quadre de dibuix.
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
    branques = [_segura(f)] + ([_segura(f2)] if f2 is not None else [])
    mostres_branques = []
    for g in branques:
        punts = _mostres(mapa, g, xmin, xmax, ymin, ymax, 120)
        cos += '<path d="%s" fill="none" stroke="%s" stroke-width="2.2"/>' \
            % (_path_de_mostres(punts), MARCA)
        mostres_branques.append(punts)
    if continua_esq:
        for punts in mostres_branques:
            cos += _cua_continuacio(list(reversed(punts)))
    if continua_dreta:
        for punts in mostres_branques:
            cos += _cua_continuacio(punts)
    if tancat_esq:
        y0 = _segura(f)(xmin)
        if y0 is not None:
            cos += _punt(mapa, xmin, y0)
    if tancat_dreta:
        y1 = _segura(f)(xmax)
        if y1 is not None:
            cos += _punt(mapa, xmax, y1)
    return _svg(_W, _H, cos, titol)


def nuvol_de_punts(punts, xmin=None, xmax=None, ymin=None, ymax=None,
                    graella=True, etiquetes=None):
    xs = [float(p[0]) for p in punts]
    ys = [float(p[1]) for p in punts]
    if xmin is None or xmax is None or ymin is None or ymax is None:
        # Com a grafica_recta: un ÚNIC radi (mateixes unitats en X i en Y)
        # perquè, si els punts insinuen un pendent, es vegi amb el seu
        # angle real. L'origen hi compta sempre com a referència (encara
        # que no es marqui) perquè els eixos quedin dins del quadre: sense
        # això, un núvol allunyat de l'origen el deixava fora, amb un eix
        # invisible.
        xs_ref, ys_ref = xs + [0.0], ys + [0.0]
        cx = (min(xs_ref) + max(xs_ref)) / 2
        cy = (min(ys_ref) + max(ys_ref)) / 2
        radi = max(max(xs_ref) - cx, cx - min(xs_ref),
                   max(ys_ref) - cy, cy - min(ys_ref), 1.3) * 1.5
        if xmin is None:
            xmin = cx - radi
        if xmax is None:
            xmax = cx + radi
        if ymin is None:
            ymin = cy - radi
        if ymax is None:
            ymax = cy + radi
    mapa = _mapa(xmin, xmax, ymin, ymax)
    cos = eixos(xmin, xmax, ymin, ymax, graella=graella)
    for i, (x, y) in enumerate(punts):
        etq = etiquetes[i] if etiquetes and i < len(etiquetes) else None
        cos += _punt(mapa, x, y, etq=etq)
    titol = "Núvol de %d punts." % len(punts)
    return _svg(_W, _H, cos, titol)
