# -*- coding: utf-8 -*-
"""figures.py — figures SVG per als enunciats que en necessiten.

MOTIU. Vint-i-dos exercicis de la font no s'han pogut transcriure perquè tota
la informació era al dibuix, i molts dels que sí que hi són s'han hagut de
descriure amb paraules («Quadrat de costat 4 cm, x és la diagonal») quan el
dibuix ho diria millor i més curt.

COM ESTAN FETES. Es GENEREN, no es dibuixen: cada funció rep les mesures i en
treu l'SVG. És el mateix criteri que la resta del projecte —les respostes es
calculen, no s'escriuen a mà— i té el mateix efecte: canviar el costat d'un
quadrat de 4 a 10 no demana redibuixar res.

CONVENCIONS, i val la pena respectar-les perquè el resultat sembli d'una peça:

- **Color**: `currentColor` per als traços i `--fig-plena` per als ompliments.
  Així la figura hereta el color del text i no cal mantenir dues paletes.
- **Mida**: `viewBox` amb coordenades pròpies i sense `width`/`height` fixos.
  El CSS li dona l'amplada; la figura s'hi adapta.
- **Text**: pla, mai LaTeX. Les etiquetes de dins d'un SVG no les toca KaTeX,
  i posar-hi `$...$` deixaria els dòlars a la vista.
- **Accessibilitat**: `role="img"` i un `<title>` que descrigui la figura amb
  paraules. Qui fa servir un lector de pantalla ha de poder resoldre
  l'exercici, i per això els enunciats continuen dient les mesures encara que
  hi hagi dibuix: **la figura acompanya l'enunciat, no el substitueix.**
"""

# Paleta: només dos tons, i tots dos definits al CSS del lloc.
OMPLERT = "var(--fig-plena, #E9F0F6)"
MARCA = "var(--fig-marca, #B3453C)"


def _svg(w, h, cos, titol):
    """Embolcall comú. `w` i `h` són les unitats del viewBox, no píxels."""
    return (
        '<svg class="figura" viewBox="0 0 %d %d" role="img" '
        'xmlns="http://www.w3.org/2000/svg"><title>%s</title>%s</svg>'
        % (w, h, titol, cos)
    )


def _text(x, y, s, ancora="middle", petit=False):
    return ('<text x="%g" y="%g" text-anchor="%s" class="fig-etq%s">%s</text>'
            % (x, y, ancora, " petita" if petit else "", s))


# ---------------------------------------------------------------------
def quadrat_diagonal(costat, etiqueta_costat=None, etiqueta_diagonal="x"):
    """Quadrat amb una diagonal marcada.

    quadrat_diagonal(4)  ->  quadrat de costat 4 cm amb la diagonal en roig
    """
    L = 120                      # el dibuix sempre fa el mateix; canvien les cotes
    m = 26                       # marge per a les etiquetes
    w = L + 2 * m
    lc = etiqueta_costat if etiqueta_costat is not None else "%g cm" % costat
    cos = (
        '<rect x="%d" y="%d" width="%d" height="%d" fill="%s" '
        'stroke="currentColor" stroke-width="2"/>'
        % (m, m, L, L, OMPLERT)
        + '<line x1="%d" y1="%d" x2="%d" y2="%d" stroke="%s" stroke-width="2.5"/>'
        % (m, m + L, m + L, m, MARCA)
        + _text(m + L / 2, m + L + 18, lc)
        + _text(m + L / 2 + 16, m + L / 2 - 6, etiqueta_diagonal)
    )
    return _svg(w, w, cos, "Quadrat de costat %s amb la diagonal marcada." % lc)


# ---------------------------------------------------------------------
def rectangle_diagonal(base, altura, etq_base=None, etq_altura=None,
                       etq_diagonal="x"):
    """Rectangle amb una diagonal marcada. Les proporcions del dibuix segueixen
    les de debò, però amb un topall: un rectangle de 100 × 1 quedaria
    il·legible, i el que importa és que s'entengui quina mesura és quina."""
    ample = 180.0
    alt = max(60.0, min(180.0, ample * float(altura) / float(base)))
    m = 26
    eb = etq_base if etq_base is not None else "%g cm" % base
    ea = etq_altura if etq_altura is not None else "%g cm" % altura
    cos = (
        '<rect x="%d" y="%d" width="%g" height="%g" fill="%s" '
        'stroke="currentColor" stroke-width="2"/>'
        % (m, m, ample, alt, OMPLERT)
        + '<line x1="%d" y1="%g" x2="%g" y2="%d" stroke="%s" stroke-width="2.5"/>'
        % (m, m + alt, m + ample, m, MARCA)
        + _text(m + ample / 2, m + alt + 18, eb)
        + _text(m - 8, m + alt / 2 + 4, ea, ancora="end")
        + _text(m + ample / 2 + 14, m + alt / 2 - 6, etq_diagonal)
    )
    return _svg(int(ample + 2 * m), int(alt + 2 * m), cos,
                "Rectangle de %s per %s amb la diagonal marcada." % (eb, ea))


# ---------------------------------------------------------------------
def triangle_rectangle(catet_a, catet_b, etq_a=None, etq_b=None,
                       etq_hip=None, marca_hip=True):
    """Triangle rectangle amb l'angle recte marcat amb el quadradet."""
    ample = 170.0
    alt = max(55.0, min(170.0, ample * float(catet_b) / float(catet_a)))
    m = 28
    ea = etq_a if etq_a is not None else "%g cm" % catet_a
    eb = etq_b if etq_b is not None else "%g cm" % catet_b
    x0, y0 = m, m + alt                       # vèrtex de l'angle recte
    cos = (
        '<polygon points="%g,%g %g,%g %g,%g" fill="%s" stroke="currentColor" '
        'stroke-width="2"/>'
        % (x0, y0, x0 + ample, y0, x0, y0 - alt, OMPLERT)
        + '<path d="M %g %g h 12 v -12" fill="none" stroke="currentColor" '
        'stroke-width="1.5"/>' % (x0, y0 - 0.5)
        + _text(x0 + ample / 2, y0 + 18, ea)
        + _text(x0 - 8, y0 - alt / 2 + 4, eb, ancora="end")
    )
    if etq_hip is not None:
        cos += ('<line x1="%g" y1="%g" x2="%g" y2="%g" stroke="%s" '
                'stroke-width="2.5"/>' % (x0 + ample, y0, x0, y0 - alt, MARCA)
                if marca_hip else "")
        cos += _text(x0 + ample / 2 + 10, y0 - alt / 2 - 4, etq_hip)
    return _svg(int(ample + 2 * m), int(alt + 2 * m), cos,
                "Triangle rectangle de catets %s i %s." % (ea, eb))


# ---------------------------------------------------------------------
def _poligon(cx, cy, r, n, gir=-90):
    from math import cos, sin, radians
    return [(cx + r * cos(radians(gir + 360.0 * k / n)),
             cy + r * sin(radians(gir + 360.0 * k / n))) for k in range(n)]


def prisma_regular(n, costat, altura, apotema=None, etq_costat=None,
                   etq_altura=None, etq_apotema=None):
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
                     etq_apotema or ("%g cm" % apotema), petit=True)
    cos += _text(cx, base[0][1] + 20, etq_costat or ("%g cm" % costat))
    xa = m + 2 * R + 14
    cos += ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="currentColor" '
            'stroke-width="1.2"/>' % (xa, base[0][1] - H, xa, base[0][1]))
    cos += _text(xa + 8, base[0][1] - H / 2 + 4,
                 etq_altura or ("%g cm" % altura), ancora="start")
    noms = {3: "triangular", 4: "quadrangular", 5: "pentagonal",
            6: "hexagonal", 8: "octogonal"}
    return _svg(int(2 * R + m + mx), int(base[0][1] + m),
                cos, "Prisma recte de base %s regular, dibuixat en perspectiva."
                % noms.get(n, "de %d costats" % n))


def cub(aresta, etq=None):
    """Cub en perspectiva cavallera, amb una sola aresta acotada."""
    L, d = 96.0, 34.0
    m = 26
    x, y = m, m + d
    e = etq or ("%g cm" % aresta)
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
def ortoedre(a, b, c, etq_a=None, etq_b=None, etq_c=None):
    """Prisma de base rectangular (ortoedre) en perspectiva cavallera, amb
    les tres arestes acotades. `a` és l'amplada, `b` la profunditat i `c`
    l'alçada."""
    esc = 110.0 / max(a, b, c)
    A, B, C = a * esc, min(b * esc, 46.0), c * esc
    m = 28
    x, y = m, m + B
    ea = etq_a if etq_a is not None else "%g cm" % a
    eb = etq_b if etq_b is not None else "%g cm" % b
    ec = etq_c if etq_c is not None else "%g cm" % c
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
