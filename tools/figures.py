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
