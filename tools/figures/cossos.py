# -*- coding: utf-8 -*-
"""figures/cossos.py — cossos geomètrics en perspectiva cavallera.

Vegeu `figures/__init__.py` per a les convencions comunes: viewBox sense mida
fixa, `currentColor` als traços, `role="img"` amb `<title>`, i cap `$` a dins.
`lib._valida()` atura la compilació si alguna no es compleix.
"""
from . import OMPLERT, MARCA, _svg, _text, mesura

def _poligon(cx, cy, r, n, gir=-90):
    from math import cos, sin, radians
    return [(cx + r * cos(radians(gir + 360.0 * k / n)),
             cy + r * sin(radians(gir + 360.0 * k / n))) for k in range(n)]


def prisma_regular(n, costat, altura, apotema=None, etq_costat=None,
                   etq_altura=None, etq_apotema=None, unitat="cm"):
    """Prisma recte de base un polígon regular de n costats, dibuixat en
    perspectiva cavallera com al llibre: la base al davant, l'altura cap
    amunt i les arestes del darrere de traç discontinu.

    La base es dibuixa aplanada (el·lipse, no cercle) perquè es vegi que és
    horitzontal; és la convenció de qualsevol llibre de geometria i estalvia
    haver d'explicar què s'està mirant.
    """
    R = 46.0                      # radi de la base al dibuix
    APLANAT = 0.42                # com d'aixafada es veu la base
    H = max(70.0, min(150.0, R * 2.4 * float(altura) / max(float(costat), 1)))
    H = min(H, 160.0)
    m, mx = 34, 70                # marges (a la dreta hi caben les cotes)
    cx, cyb = m + R, m + H + R * APLANAT
    base = [(x, m + H + (y - cyb) * 1 + R * APLANAT) for x, y in
            [(cx + (px - cx), cyb + (py - cyb) * APLANAT)
             for px, py in _poligon(cx, cyb, R, n)]]
    dalt = [(x, y - H) for x, y in base]

    def poli(pts, extra=""):
        return ('<polygon points="%s" %s/>'
                % (" ".join("%.1f,%.1f" % p for p in pts), extra))

    ple = 'fill="%s" stroke="currentColor" stroke-width="2"' % OMPLERT
    cos = poli(dalt, ple)
    # cares laterals visibles: les de la meitat de davant
    for k in range(n):
        a, b = base[k], base[(k + 1) % n]
        if (a[1] + b[1]) / 2 < base[0][1] - 1 and n > 4:
            continue
        cos += poli([a, b, (b[0], b[1] - H), (a[0], a[1] - H)], ple)
    cos += poli(dalt, ple)        # el sostre, per damunt de les cares
    cos += poli(base, 'fill="none" stroke="currentColor" stroke-width="1.2" '
                      'stroke-dasharray="4 3"')
    if apotema is not None:
        cos += ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" '
                'stroke-width="2"/>' % (cx, base[0][1] - R * APLANAT, cx,
                                        base[0][1], MARCA))
        cos += _text(cx + 30, base[0][1] - 4,
                     etq_apotema or (mesura(apotema, unitat)), petit=True)
    cos += _text(cx, base[0][1] + 20, etq_costat or (mesura(costat, unitat)))
    xa = m + 2 * R + 14
    cos += ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="currentColor" '
            'stroke-width="1.2"/>' % (xa, base[0][1] - H, xa, base[0][1]))
    cos += _text(xa + 8, base[0][1] - H / 2 + 4,
                 etq_altura or (mesura(altura, unitat)), ancora="start")
    noms = {3: "triangular", 4: "quadrangular", 5: "pentagonal",
            6: "hexagonal", 8: "octogonal"}
    return _svg(int(2 * R + m + mx), int(base[0][1] + m),
                cos, "Prisma recte de base %s regular, dibuixat en perspectiva."
                % noms.get(n, "de %d costats" % n))


def cub(aresta, etq=None, unitat="cm"):
    """Cub en perspectiva cavallera, amb una sola aresta acotada."""
    L, d = 96.0, 34.0
    m = 26
    x, y = m, m + d
    e = etq or (mesura(aresta, unitat))
    q = lambda pts, extra: ('<polygon points="%s" %s/>'
                            % (" ".join("%.1f,%.1f" % p for p in pts), extra))
    ple = 'fill="%s" stroke="currentColor" stroke-width="2"' % OMPLERT
    cos = (q([(x, y), (x + L, y), (x + L, y + L), (x, y + L)], ple)
           + q([(x, y), (x + d, y - d), (x + L + d, y - d), (x + L, y)], ple)
           + q([(x + L, y), (x + L + d, y - d), (x + L + d, y + L - d), (x + L, y + L)], ple)
           + '<path d="M %.1f %.1f l %.1f %.1f M %.1f %.1f v %.1f M %.1f %.1f h %.1f" '
             'fill="none" stroke="currentColor" stroke-width="1.1" '
             'stroke-dasharray="4 3"/>'
             % (x, y + L, d, -d, x + d, y - d + L, -L + 0.0 + L, x + d, y + L - d, L)
           + _text(x + L / 2, y + L + 18, e))
    return _svg(int(L + d + 2 * m), int(L + d + 2 * m), cos,
                "Cub d'aresta %s, dibuixat en perspectiva." % e)


# ---------------------------------------------------------------------
def ortoedre(a, b, c, etq_a=None, etq_b=None, etq_c=None, unitat="cm"):
    """Prisma de base rectangular (ortoedre) en perspectiva cavallera, amb
    les tres arestes acotades. `a` és l'amplada, `b` la profunditat i `c`
    l'alçada."""
    esc = 110.0 / max(a, b, c)
    A, B, C = a * esc, min(b * esc, 46.0), c * esc
    ea = etq_a if etq_a is not None else mesura(a, unitat)
    eb = etq_b if etq_b is not None else mesura(b, unitat)
    ec = etq_c if etq_c is not None else mesura(c, unitat)
    # Marge esquerre dinàmic (vegeu planes.rectangle_diagonal): ec es
    # dibuixa amb text-anchor="end" cap a l'esquerra i un marge fix el
    # retallava per a etiquetes llargues (AUDITORIA C4).
    m = max(28, int(len(ec) * 7.3) + 14)
    x, y = m, m + B
    q = lambda pts: ('<polygon points="%s" fill="%s" stroke="currentColor" '
                     'stroke-width="2"/>'
                     % (" ".join("%.1f,%.1f" % p for p in pts), OMPLERT))
    cos = (q([(x, y), (x + A, y), (x + A, y + C), (x, y + C)])
           + q([(x, y), (x + B, y - B), (x + A + B, y - B), (x + A, y)])
           + q([(x + A, y), (x + A + B, y - B), (x + A + B, y + C - B), (x + A, y + C)])
           + _text(x + A / 2, y + C + 18, ea)
           + _text(x - 8, y + C / 2 + 4, ec, ancora="end")
           + _text(x + A + B / 2 + 12, y - B / 2 - 2, eb, ancora="start", petit=True))
    return _svg(int(A + B + 2 * m + 26), int(C + B + 2 * m),
                cos, "Ortoedre d'arestes %s, %s i %s, en perspectiva." % (ea, eb, ec))


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


def cilindre(radi=None, altura=None, diametre=None, etq_radi=None,
             etq_altura=None, unitat="cm"):
    """Cilindre recte. S'accepta radi o diàmetre: el que digui l'enunciat és
    el que s'ha d'acotar, perquè si l'alumne ha de convertir-lo abans de
    llegir la figura, la figura no l'ajuda."""
    R, H = 52.0, 104.0
    cx = _MARGE + R
    ydalt, ybaix = _MARGE + R * APLANAT, _MARGE + R * APLANAT + H
    cos = (_el·lipse(cx, ybaix, R, dalt_ple=False)
           + '<path d="M %.1f %.1f v %.1f M %.1f %.1f v %.1f" fill="none" '
             'stroke="currentColor" stroke-width="2"/>'
             % (cx - R, ydalt, H, cx + R, ydalt, H)
           + '<rect x="%.1f" y="%.1f" width="%.1f" height="%.1f" fill="%s" '
             'stroke="none"/>' % (cx - R, ydalt, 2 * R, H, OMPLERT)
           + '<path d="M %.1f %.1f v %.1f M %.1f %.1f v %.1f" fill="none" '
             'stroke="currentColor" stroke-width="2"/>'
             % (cx - R, ydalt, H, cx + R, ydalt, H)
           + _el·lipse(cx, ydalt, R))
    # Etiqueta per damunt del punt més alt de l'el·lipse superior (no del
    # seu centre `ydalt`): a `ydalt - 8` queda a sobre de l'el·lipse i el
    # seu traç la tallava per la meitat (AUDITORIA C4).
    y_etq = ydalt - R * APLANAT - 6
    if diametre is not None:
        e = etq_radi or (mesura(diametre, unitat))
        cos += ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" '
                'stroke-width="2"/>' % (cx - R, ydalt, cx + R, ydalt, MARCA)
                + _text(cx, y_etq, e, petit=True))
    elif radi is not None:
        e = etq_radi or (mesura(radi, unitat))
        cos += ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" '
                'stroke-width="2"/>' % (cx, ydalt, cx + R, ydalt, MARCA)
                + _text(cx + R / 2, y_etq, e, petit=True))
    if altura is not None:
        cos += _cota_vertical(cx + R + 16, ydalt, ybaix,
                              etq_altura or (mesura(altura, unitat)))
    return _svg(int(2 * R + _MARGE + 76), int(H + 2 * R * APLANAT + 2 * _MARGE),
                cos, "Cilindre recte, dibuixat en perspectiva.")


def con(radi=None, altura=None, generatriu=None, diametre=None,
        etq_radi=None, etq_altura=None, etq_generatriu=None, unitat="cm"):
    """Con recte. S'acoten només les mesures que es donin: un con amb el radi,
    l'altura i la generatriu marcats alhora ja regala Pitàgores."""
    R, H = 52.0, 112.0
    cx = _MARGE + R
    ybaix = _MARGE + H
    yapex = _MARGE
    cos = (_el·lipse(cx, ybaix, R, dalt_ple=False)
           + '<polygon points="%.1f,%.1f %.1f,%.1f %.1f,%.1f" fill="%s" '
             'stroke="currentColor" stroke-width="2"/>'
             % (cx, yapex, cx - R, ybaix, cx + R, ybaix, OMPLERT)
           + _el·lipse(cx, ybaix, R, dalt_ple=False))
    if diametre is not None:
        cos += ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" '
                'stroke-width="2"/>' % (cx - R, ybaix, cx + R, ybaix, MARCA)
                + _text(cx, ybaix + 20, etq_radi or (mesura(diametre, unitat))))
    elif radi is not None:
        cos += ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" '
                'stroke-width="2"/>' % (cx, ybaix, cx + R, ybaix, MARCA)
                + _text(cx + R / 2, ybaix + 20, etq_radi or (mesura(radi, unitat))))
    if altura is not None:
        cos += ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="currentColor" '
                'stroke-width="1.4" stroke-dasharray="4 3"/>' % (cx, yapex, cx, ybaix)
                + '<path d="M %.1f %.1f h 10 v -10" fill="none" stroke="currentColor" '
                  'stroke-width="1.2"/>' % (cx, ybaix)
                + _text(cx - 8, (yapex + ybaix) / 2, etq_altura or (mesura(altura, unitat)),
                        ancora="end", petit=True))
    if generatriu is not None:
        cos += _text(cx + R / 2 + 16, (yapex + ybaix) / 2 - 6,
                     etq_generatriu or (mesura(generatriu, unitat)), ancora="start")
    return _svg(int(2 * R + _MARGE + 80), int(H + R * APLANAT + 2 * _MARGE),
                cos, "Con recte, dibuixat en perspectiva.")


def esfera(radi=None, etq_radi=None, unitat="cm"):
    """Esfera amb l'equador insinuat i el radi acotat."""
    R = 58.0
    cx = cy = _MARGE + R
    cos = ('<circle cx="%.1f" cy="%.1f" r="%.1f" fill="%s" stroke="currentColor" '
           'stroke-width="2"/>' % (cx, cy, R, OMPLERT)
           + '<ellipse cx="%.1f" cy="%.1f" rx="%.1f" ry="%.1f" fill="none" '
             'stroke="currentColor" stroke-width="1.1" stroke-dasharray="4 3"/>'
             % (cx, cy, R, R * APLANAT))
    if radi is not None or etq_radi:
        cos += ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" '
                'stroke-width="2"/>' % (cx, cy, cx + R, cy, MARCA)
                + _text(cx + R / 2, cy - 8, etq_radi or (mesura(radi, unitat)), petit=True))
    return _svg(int(2 * R + 2 * _MARGE), int(2 * R + 2 * _MARGE), cos,
                "Esfera amb el radi marcat.")


def piramide_regular(n, costat, altura=None, apotema_piramide=None,
                     apotema_base=None, etq_costat=None, etq_altura=None,
                     etq_apotema=None, unitat="cm"):
    """Piràmide recta de base un polígon regular de n costats.

    S'acota l'altura o l'apotema de la piràmide, segons què digui l'enunciat.
    Distingir-les és justament el que costa a l'alumne —l'apotema de la
    piràmide és l'altura d'una CARA, no la del cos— i per això mai no es
    dibuixen totes dues alhora: es marca la que es dona.

    L'altura va de l'àpex al CENTRE de la base (vertical, cx). L'apotema de
    la piràmide va de l'àpex al PUNT MIG d'una aresta frontal de la base
    (sobre una cara lateral visible), que en general NO és vertical: només
    coincideix amb la vertical de l'àpex quan n és senar i hi ha una única
    aresta frontal centrada (n=3, 5). Calcular-los amb el mateix segment
    (cx, baix) —com si el punt més baix de la base fos sempre el punt mig
    d'una aresta— dibuixaria l'apotema exactament on va l'altura per a
    n=4, 6, 8, que és l'error que aquesta funció ha d'evitar.
    """
    from math import cos as _cos, sin as _sin, radians
    R = 50.0
    H = 112.0
    m = _MARGE
    cx = m + R
    cyb = m + H + R * APLANAT
    base = [(cx + R * _cos(radians(-90 + 360.0 * k / n)),
             cyb + R * APLANAT * _sin(radians(-90 + 360.0 * k / n)))
            for k in range(n)]
    apex = (cx, m)
    davant = [p for p in base if p[1] >= cyb - 0.5]
    cos_svg = ('<polygon points="%s" fill="%s" stroke="currentColor" '
               'stroke-width="1.1" stroke-dasharray="4 3"/>'
               % (" ".join("%.1f,%.1f" % p for p in base), OMPLERT))
    # Arestes frontals: les que formen una cara lateral VISIBLE (mateix
    # criteri que decideix quines cares es pinten més avall). Es guarden
    # perquè l'apotema de la piràmide s'ha de recolzar sobre una d'aquestes,
    # mai sobre una aresta del darrere.
    arestes_frontals = []
    for k in range(len(base)):
        a, b = base[k], base[(k + 1) % len(base)]
        if (a[1] + b[1]) / 2 < cyb - 1:
            continue
        arestes_frontals.append((a, b))
        cos_svg += ('<polygon points="%.1f,%.1f %.1f,%.1f %.1f,%.1f" fill="%s" '
                    'stroke="currentColor" stroke-width="2"/>'
                    % (apex[0], apex[1], a[0], a[1], b[0], b[1], OMPLERT))
    for p in davant:
        cos_svg += ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" '
                    'stroke="currentColor" stroke-width="2"/>'
                    % (apex[0], apex[1], p[0], p[1]))
    baix = max(p[1] for p in base)
    if altura is not None:
        cos_svg += ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" '
                    'stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>'
                    % (cx, apex[1], cx, cyb)
                    + '<path d="M %.1f %.1f h 10 v -10" fill="none" '
                      'stroke="currentColor" stroke-width="1.2"/>' % (cx, cyb)
                    + _text(cx - 8, (apex[1] + cyb) / 2, etq_altura or (mesura(altura, unitat)),
                            ancora="end", petit=True))
    if apotema_piramide is not None:
        # Punt mig de l'aresta frontal més centrada (la que queda més a
        # prop de la vertical de l'àpex). Amb un nombre parell de cares
        # visibles n'hi ha sempre dues d'igual de centrades, simètriques
        # a banda i banda de cx: es tria la de l'esquerra de manera
        # determinista, sense dependre de l'arrodoniment de coma flotant.
        mx_ap, my_ap = min(
            (((a[0] + b[0]) / 2, (a[1] + b[1]) / 2) for a, b in arestes_frontals),
            key=lambda p: (round(abs(p[0] - cx), 6), p[0]))
        cos_svg += ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" '
                    'stroke-width="2"/>' % (apex[0], apex[1], mx_ap, my_ap, MARCA)
                    + _text(max(apex[0], mx_ap) + 14, (apex[1] + my_ap) / 2,
                            etq_apotema or (mesura(apotema_piramide, unitat)),
                            ancora="start", petit=True))
    cos_svg += _text(cx, baix + 20, etq_costat or (mesura(costat, unitat)))
    noms = {3: "triangular", 4: "quadrangular", 5: "pentagonal",
            6: "hexagonal", 8: "octogonal"}
    return _svg(int(2 * R + 2 * m + 40), int(baix + m + 26), cos_svg,
                "Piràmide recta de base %s regular, en perspectiva."
                % noms.get(n, "de %d costats" % n))


def tetraedre(aresta, etq=None, unitat="cm"):
    """Tetraedre regular: quatre triangles equilàters. Es dibuixa amb una
    cara al davant i l'aresta del darrere discontínua."""
    L = 116.0
    m = _MARGE
    A = (m + L / 2, m)                       # vèrtex de dalt
    B = (m, m + L * 0.88)                    # base esquerra
    C = (m + L, m + L * 0.88)                # base dreta
    Dp = (m + L * 0.62, m + L * 0.60)        # vèrtex del darrere
    e = etq or (mesura(aresta, unitat))
    q = lambda pts: ('<polygon points="%s" fill="%s" stroke="currentColor" '
                     'stroke-width="2"/>'
                     % (" ".join("%.1f,%.1f" % p for p in pts), OMPLERT))
    cos = (q([A, B, C])
           + '<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="currentColor" '
             'stroke-width="1.1" stroke-dasharray="4 3"/>' % (A[0], A[1], Dp[0], Dp[1])
           + '<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="currentColor" '
             'stroke-width="1.1" stroke-dasharray="4 3"/>' % (B[0], B[1], Dp[0], Dp[1])
           + '<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="currentColor" '
             'stroke-width="1.1" stroke-dasharray="4 3"/>' % (C[0], C[1], Dp[0], Dp[1])
           + _text((B[0] + C[0]) / 2, C[1] + 20, e))
    return _svg(int(L + 2 * m), int(L * 0.88 + m + 30), cos,
                "Tetraedre regular d'aresta %s, en perspectiva." % e)
