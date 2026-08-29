# -*- coding: utf-8 -*-
"""figures/planes.py — figures planes.

Vegeu `figures/__init__.py` per a les convencions comunes: viewBox sense mida
fixa, `currentColor` als traços, `role="img"` amb `<title>`, i cap `$` a dins.
`lib._valida()` atura la compilació si alguna no es compleix.
"""
from . import OMPLERT, MARCA, _svg, _text, mesura

def quadrat_diagonal(costat, etiqueta_costat=None, etiqueta_diagonal="x", unitat="cm"):
    """Quadrat amb una diagonal marcada.

    quadrat_diagonal(4)  ->  quadrat de costat 4 cm amb la diagonal en roig
    """
    L = 120                      # el dibuix sempre fa el mateix; canvien les cotes
    m = 26                       # marge per a les etiquetes
    w = L + 2 * m
    lc = etiqueta_costat if etiqueta_costat is not None else mesura(costat, unitat)
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
                       etq_diagonal="x", mostra_diagonal=True, unitat="cm"):
    """Rectangle amb una diagonal marcada. Les proporcions del dibuix
    segueixen les de debò, escalades pel costat més llarg perquè cap
    rectangle surti quadrat per error (i sense estirar-se sense límit si
    la proporció és molt extrema). Amb `mostra_diagonal=False` es dibuixa
    el rectangle sense la diagonal (útil quan l'enunciat no la menciona i
    marcar-la seria afegir una dada que l'enunciat no dona)."""
    b, h = float(base), float(altura)
    costat_max = 180.0
    escala = costat_max / max(b, h)
    ample = max(60.0, b * escala)
    alt = max(60.0, h * escala)
    eb = etq_base if etq_base is not None else mesura(base, unitat)
    ea = etq_altura if etq_altura is not None else mesura(altura, unitat)
    # Marge esquerre dinàmic: l'etiqueta ea es dibuixa amb text-anchor="end"
    # cap a l'esquerra, així que un marge fix no li dona prou espai quan és
    # llarga (p. ex. "AC = 16 cm") i queda tallada pel viewBox (AUDITORIA
    # C4). ~7.3px/caràcter cobreix la font mono 12px 600 amb marge de sobra.
    m = max(26, int(len(ea) * 7.3) + 14)
    cos = (
        '<rect x="%d" y="%d" width="%g" height="%g" fill="%s" '
        'stroke="currentColor" stroke-width="2"/>'
        % (m, m, ample, alt, OMPLERT)
        + _text(m + ample / 2, m + alt + 18, eb)
        + _text(m - 8, m + alt / 2 + 4, ea, ancora="end")
    )
    titol_extra = ""
    if mostra_diagonal:
        cos += ('<line x1="%d" y1="%g" x2="%g" y2="%d" stroke="%s" '
                'stroke-width="2.5"/>'
                % (m, m + alt, m + ample, m, MARCA)
                + _text(m + ample / 2 + 14, m + alt / 2 - 6, etq_diagonal))
        titol_extra = " amb la diagonal marcada"
    return _svg(int(ample + 2 * m), int(alt + 2 * m), cos,
                "Rectangle de %s per %s%s." % (eb, ea, titol_extra))


# ---------------------------------------------------------------------
def triangle_rectangle(catet_a, catet_b, etq_a=None, etq_b=None,
                       etq_hip=None, marca_hip=True, unitat="cm"):
    """Triangle rectangle amb l'angle recte marcat amb el quadradet."""
    ample = 170.0
    alt = max(55.0, min(170.0, ample * float(catet_b) / float(catet_a)))
    ea = etq_a if etq_a is not None else mesura(catet_a, unitat)
    eb = etq_b if etq_b is not None else mesura(catet_b, unitat)
    # Marge esquerre dinàmic (vegeu rectangle_diagonal): eb es dibuixa amb
    # text-anchor="end" cap a l'esquerra i un marge fix el retallava per a
    # etiquetes llargues (AUDITORIA C4).
    m = max(28, int(len(eb) * 7.3) + 14)
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
def trapezi(base_gran, base_petita, altura, isosceles=True,
           etq_base_gran=None, etq_base_petita=None, etq_altura=None, unitat="cm"):
    """Trapezi (isòsceles per defecte) amb les tres mesures etiquetades.

    trapezi(10, 3, 6)  ->  trapezi de bases 10 i 3 cm, alçada 6 cm."""
    Bg, bp = float(base_gran), float(base_petita)
    ample_max = 190.0
    escala = ample_max / max(Bg, 1.0)
    Bg_px, bp_px = Bg * escala, bp * escala
    alt_px = max(45.0, min(150.0, altura * escala))
    m = 26
    despl = (Bg_px - bp_px) / 2.0        # isòsceles: centrat
    y_top, y_bot = m, m + alt_px
    x_bl, x_br = m, m + Bg_px            # base gran, a baix
    x_tl, x_tr = m + despl, m + despl + bp_px   # base petita, a dalt
    eBg = etq_base_gran if etq_base_gran is not None else mesura(base_gran, unitat)
    ebp = etq_base_petita if etq_base_petita is not None else mesura(base_petita, unitat)
    ea = etq_altura if etq_altura is not None else mesura(altura, unitat)
    cos = (
        '<polygon points="%g,%g %g,%g %g,%g %g,%g" fill="%s" '
        'stroke="currentColor" stroke-width="2"/>'
        % (x_bl, y_bot, x_br, y_bot, x_tr, y_top, x_tl, y_top, OMPLERT)
        # alçada, marcada com a segment vertical discontinu des del
        # vèrtex superior esquerre fins a la base gran
        + '<line x1="%g" y1="%g" x2="%g" y2="%g" stroke="%s" '
          'stroke-width="1.5" stroke-dasharray="4 3"/>'
          % (x_tl, y_top, x_tl, y_bot, MARCA)
        + _text((x_bl + x_br) / 2, y_bot + 18, eBg)
        + _text((x_tl + x_tr) / 2, y_top - 8, ebp)
        + _text(x_tl - 8, (y_top + y_bot) / 2, ea, ancora="end")
    )
    w = int(max(x_br, x_tr) + m)
    h = int(y_bot + m)
    tipus = "isòsceles" if isosceles else ""
    return _svg(w, h, cos,
                ("Trapezi %s de bases %s i %s, alçada %s."
                 % (tipus, eBg, ebp, ea)).replace("  ", " "))


# ---------------------------------------------------------------------
def poligon_regular(n, costat=None, apotema=None, diagonal=False,
                    etq_costat=None, etq_apotema=None, radi_marcat=False,
                    mostra_costat=True, triangle_central=False, unitat="cm"):
    """Polígon regular de n costats, orientat amb un costat horitzontal a
    baix. Marca l'apotema (segment centre-mig d'un costat) si `apotema` es
    dona, o la diagonal que passa pel centre (dos vèrtexs oposats, només
    per a n parell) si `diagonal=True`. Els dos són mútuament excloents.
    Amb `mostra_costat=False` no s'etiqueta el costat (útil quan l'enunciat
    dona el perímetre o una altra mesura derivada, i marcar-hi el costat
    individual seria informació que l'enunciat no dona directament).
    Amb `triangle_central=True` es dibuixen tots els radis (centre a cada
    vèrtex, en gris fi) i s'ombreja un dels N triangles resultants (el que
    fan servir el costat 0-1), per a exercicis del tipus "el polígon es
    divideix en N triangles unint el centre amb cada vèrtex".

    poligon_regular(6, costat=2)                    -> hexàgon, costat marcat
    poligon_regular(6, costat=6, diagonal=True)      -> hexàgon amb diagonal
    poligon_regular(8, costat=6, apotema=7.24)       -> octàgon amb apotema
    poligon_regular(8, costat=6, mostra_costat=False) -> octàgon sense etiqueta
    poligon_regular(6, costat=3, triangle_central=True) -> un triangle ombrejat
    """
    import math
    n = int(n)
    assert n >= 3, "un polígon necessita com a mínim 3 costats"
    R = 90.0                              # radi de dibuix, constant
    cx, cy = R + 30, R + 30
    # El punt mitjà (angular) del costat 0-1 ha de caure a baix (90° en
    # aquest sistema, on 0°=amunt i es creix en sentit horari): amb els
    # vèrtexs a gir + k*360/n, el punt mitjà del primer costat és a
    # gir + 180/n, així que cal gir = 90 - 180/n perquè hi càpiga.
    # Vàlid per qualsevol n (parell o senar): sense això, un polígon de
    # n senar surt cap per avall (comprovat amb n=3).
    gir = 90 - 180.0 / n
    punts = []
    for k in range(n):
        ang = math.radians(gir + k * 360.0 / n)
        punts.append((cx + R * math.cos(ang), cy + R * math.sin(ang)))
    pts_str = " ".join("%g,%g" % p for p in punts)
    cos = ('<polygon points="%s" fill="%s" stroke="currentColor" '
           'stroke-width="2"/>' % (pts_str, OMPLERT))

    if triangle_central:
        # tots els radis, en gris fi, per suggerir la subdivisió completa
        for (px, py) in punts:
            cos += ('<line x1="%g" y1="%g" x2="%g" y2="%g" '
                    'stroke="currentColor" stroke-width="0.75" '
                    'stroke-opacity="0.45"/>' % (cx, cy, px, py))
        # un dels N triangles (centre, vèrtex 0, vèrtex 1) ombrejat
        x0, y0 = punts[0]
        x1, y1 = punts[1]
        cos += ('<polygon points="%g,%g %g,%g %g,%g" fill="%s" '
                'stroke="currentColor" stroke-width="2"/>'
                % (cx, cy, x0, y0, x1, y1, MARCA))

    ec = None
    if mostra_costat:
        ec = etq_costat if etq_costat is not None else (
            mesura(costat, unitat) if costat is not None else None)
    if ec is not None:
        # etiqueta al mig del costat inferior (entre els vèrtexs 0 i 1,
        # que per construcció són els dos de baix)
        x0, y0 = punts[0]
        x1, y1 = punts[1]
        xm, ym = (x0 + x1) / 2, max(y0, y1)
        cos += _text(xm, ym + 18, ec)

    if diagonal:
        assert n % 2 == 0, "la diagonal pel centre només té sentit amb n parell"
        v_a, v_b = punts[0], punts[n // 2]
        cos += ('<line x1="%g" y1="%g" x2="%g" y2="%g" stroke="%s" '
                'stroke-width="2.5"/>' % (v_a[0], v_a[1], v_b[0], v_b[1], MARCA))
    elif apotema is not None:
        # peu de l'apotema: punt mig del costat 0-1; el centre ja és (cx, cy)
        x0, y0 = punts[0]
        x1, y1 = punts[1]
        xm, ym = (x0 + x1) / 2, (y0 + y1) / 2
        cos += ('<line x1="%g" y1="%g" x2="%g" y2="%g" stroke="%s" '
                'stroke-width="2.5"/>' % (cx, cy, xm, ym, MARCA))
        ea = etq_apotema if etq_apotema is not None else mesura(apotema, unitat)
        cos += _text((cx + xm) / 2 + 12, (cy + ym) / 2, ea)
    elif radi_marcat:
        cos += ('<line x1="%g" y1="%g" x2="%g" y2="%g" stroke="%s" '
                'stroke-width="2.5"/>' % (cx, cy, punts[0][0], punts[0][1], MARCA))

    w = h = int(2 * (R + 30))
    noms = {3: "triangle equilàter", 4: "quadrat", 5: "pentàgon regular",
            6: "hexàgon regular", 7: "heptàgon regular", 8: "octàgon regular",
            9: "eneàgon regular", 10: "decàgon regular", 12: "dodecàgon regular"}
    nom = noms.get(n, "polígon regular de %d costats" % n)
    detall = ""
    if ec is not None:
        detall += ", costat %s" % ec
    if diagonal:
        detall += ", amb la diagonal que passa pel centre marcada"
    elif apotema is not None:
        detall += ", amb l'apotema marcada"
    if triangle_central:
        detall += (", dividit en %d triangles unint el centre amb cada "
                   "vèrtex, un d'ells ombrejat" % n)
    if not detall:
        # Sense cap mesura marcada (per exemple mostra_costat=False i cap
        # altra opció activa), el nom sol no dona un <title> prou llarg
        # per a lectors de pantalla (ex.: "Quadrat." són 8 caràcters).
        detall = " de %d costats" % n
    return _svg(w, h, cos, ("%s%s." % (nom[0].upper() + nom[1:], detall)))


# ---------------------------------------------------------------------
def sector_circular(radi, angle, etq_radi=None, ombreja_restant=False, unitat="cm"):
    """Cercle amb un sector marcat (omplert), començant a les 12 en punt i
    en sentit horari. Per defecte marca el sector d'`angle` graus; amb
    `ombreja_restant=True` marca el sector COMPLEMENTARI (útil quan la
    pregunta és per la part que QUEDA després de retallar `angle` graus,
    com un "Pac-Man": el marcat són les 360-angle graus restants).

    sector_circular(2, 90)                      -> quart de cercle marcat
    sector_circular(2, 90, ombreja_restant=True) -> les tres quartes parts
    """
    import math
    r = 80.0
    m = 26
    cx, cy = m + r, m + r

    def punt(ang_graus):
        a = math.radians(ang_graus - 90)      # 0° = amunt, sentit horari
        return cx + r * math.cos(a), cy + r * math.sin(a)

    # El sector PINTAT va sempre de 0° fins a `ang_pintat`; si es demana
    # la part restant, això és simplement el complementari a 360°.
    ang_pintat = (360.0 - angle) if ombreja_restant else angle
    ang_retallat = angle          # el que l'enunciat anomena "retallat"

    x0, y0 = punt(0)
    xf, yf = punt(ang_pintat)
    gran_arc = 1 if ang_pintat > 180 else 0
    if ang_pintat >= 359.999:
        # cercle complet marcat: un únic <circle>, cap path calen
        cos = ('<circle cx="%g" cy="%g" r="%g" fill="%s" '
               'stroke="currentColor" stroke-width="2"/>' % (cx, cy, r, MARCA))
    else:
        sector = ('M%g,%g L%g,%g A%g,%g 0 %d,1 %g,%g Z'
                  % (cx, cy, x0, y0, r, r, gran_arc, xf, yf))
        cos = ('<circle cx="%g" cy="%g" r="%g" fill="%s" '
               'stroke="currentColor" stroke-width="2"/>' % (cx, cy, r, OMPLERT)
               + '<path d="%s" fill="%s" stroke="currentColor" '
                 'stroke-width="2" stroke-linejoin="round"/>' % (sector, MARCA))

    if ombreja_restant:
        descripcio = ("amb un sector de %g° retallat (la resta, "
                       "%g°, queda marcada)" % (ang_retallat, ang_pintat))
    else:
        descripcio = "amb un sector de %g° marcat" % angle

    er = etq_radi if etq_radi is not None else mesura(radi, unitat)
    cos += ('<line x1="%g" y1="%g" x2="%g" y2="%g" stroke="currentColor" '
            'stroke-width="1.5" stroke-dasharray="3 2"/>' % (cx, cy, x0, y0)
            + _text((cx + x0) / 2 + 10, (cy + y0) / 2, er, petit=True))

    w = h = int(2 * r + 2 * m)
    return _svg(w, h, cos, "Cercle de radi %s, %s." % (er, descripcio))


# ---------------------------------------------------------------------
def corona(r_ext, r_int, etq_ext=None, etq_int=None, mig=False, unitat="cm"):
    """Corona circular: dos cercles concèntrics, l'espai entre ells omplert.
    Amb `mig=True`, només la meitat superior (per a figures de tipus
    "mitja lluna" fetes amb dos semicercles).

    corona(3, 2.5)          -> anell complet, radis 3 i 2.5 cm
    corona(6, 3, mig=True)  -> mitja lluna (dos semicercles)
    """
    r1, r2 = float(r_ext), float(r_int)
    assert r1 > r2 > 0, "el radi exterior ha de ser més gran que l'interior"
    escala = 80.0 / r1
    R1, R2 = r1 * escala, r2 * escala
    m = 26
    cx = m + R1
    cy = m + R1 if not mig else m + R1
    eext = etq_ext if etq_ext is not None else mesura(r_ext, unitat)
    eint = etq_int if etq_int is not None else mesura(r_int, unitat)

    if not mig:
        # even-odd fill: cercle gran ple, cercle petit "buit" pel mateix path
        cos = ('<path d="M%g,%g m-%g,0 a%g,%g 0 1,0 %g,0 a%g,%g 0 1,0 -%g,0 '
               'M%g,%g m-%g,0 a%g,%g 0 1,0 %g,0 a%g,%g 0 1,0 -%g,0" '
               'fill-rule="evenodd" fill="%s" stroke="currentColor" '
               'stroke-width="2"/>'
               % (cx, cy, R1, R1, R1, 2 * R1, R1, R1, 2 * R1,
                  cx, cy, R2, R2, R2, 2 * R2, R2, R2, 2 * R2, OMPLERT))
        cos += _text(cx, cy + R1 + 16, "ext. %s" % eext)
        cos += _text(cx, cy + 4, "int. %s" % eint, petit=True)
        w = h = int(2 * R1 + 2 * m)
        titol = "Corona circular: radi exterior %s, radi interior %s." % (eext, eint)
    else:
        # Mig anell (creixent): un únic contorn tancat i simple —
        # arc gran per sobre (esquerra->dreta), línia recta enrere fins
        # a l'extrem del petit, arc petit per sobre en sentit invertit
        # (dreta->esquerra, sweep 0) per "excavar" la mossa, línia final
        # de tornada al punt d'inici. Sense evenodd: com que és un sol
        # contorn sense encreuar-se, el "fill" normal ja hi talla el forat.
        base_y = m + R1
        cos = ('<path d="M%g,%g A%g,%g 0 0,1 %g,%g L%g,%g '
               'A%g,%g 0 0,0 %g,%g Z" fill="%s" stroke="currentColor" '
               'stroke-width="2" stroke-linejoin="round"/>'
               % (cx - R1, base_y, R1, R1, cx + R1, base_y,
                  cx + R2, base_y,
                  R2, R2, cx - R2, base_y, OMPLERT))
        cos += _text(cx, base_y + 18, "diàm. ext. %s" % eext)
        cos += _text(cx, base_y - R2 - 8, "diàm. int. %s" % eint, petit=True)
        w = int(2 * R1 + 2 * m)
        h = int(R1 + 2 * m + 14)
        titol = ("Mitja lluna: semicercle exterior de diàmetre %s, "
                 "semicercle interior de diàmetre %s." % (eext, eint))
    return _svg(w, h, cos, titol)


# ---------------------------------------------------------------------
def rectangle_amb_forat(base, altura, radi_forat, cx_forat=None, cy_forat=None,
                        etq_base=None, etq_altura=None, etq_radi=None, unitat="cm"):
    """Rectangle (o quadrat, si base==altura) amb un forat circular a
    dins. Per defecte el forat és centrat.

    rectangle_amb_forat(5, 5, 1)   -> quadrat de costat 5 amb forat radi 1
    """
    ample_max = 170.0
    escala = ample_max / max(float(base), float(altura))
    B, A = float(base) * escala, float(altura) * escala
    r = float(radi_forat) * escala
    eb = etq_base if etq_base is not None else mesura(base, unitat)
    ea = etq_altura if etq_altura is not None else mesura(altura, unitat)
    er = etq_radi if etq_radi is not None else (
        "diàm. " + mesura(2 * radi_forat, unitat))
    # Marge esquerre dinàmic (vegeu rectangle_diagonal): ea es dibuixa amb
    # text-anchor="end" cap a l'esquerra i un marge fix el retallava per a
    # etiquetes llargues (AUDITORIA C4).
    m = max(28, int(len(ea) * 7.3) + 14)
    x0, y0 = m, m
    cx = cx_forat * escala + x0 if cx_forat is not None else x0 + B / 2
    cy = cy_forat * escala + y0 if cy_forat is not None else y0 + A / 2
    # even-odd: rectangle ple menys el cercle interior
    cos = ('<path d="M%g,%g h%g v%g h-%g Z '
           'M%g,%g m-%g,0 a%g,%g 0 1,0 %g,0 a%g,%g 0 1,0 -%g,0" '
           'fill-rule="evenodd" fill="%s" stroke="currentColor" '
           'stroke-width="2"/>'
           % (x0, y0, B, A, B,
              cx, cy, r, r, r, 2 * r, r, r, 2 * r, OMPLERT))
    cos += _text(x0 + B / 2, y0 + A + 18, eb)
    cos += _text(x0 - 8, y0 + A / 2, ea, ancora="end")
    cos += _text(cx, cy + 4, er, petit=True)
    w = int(B + 2 * m)
    h = int(A + 2 * m)
    forma = "Quadrat" if abs(base - altura) < 1e-9 else "Rectangle"
    return _svg(w, h, cos,
                "%s de %s per %s amb un forat circular de %s." % (forma, eb, ea, er))


# ---------------------------------------------------------------------
def triangle_isosceles(base, costat=None, altura=None,
                       etq_base=None, etq_costat=None, etq_altura=None,
                       mostra_altura=True, unitat="cm"):
    """Triangle isòsceles (o equilàter, si costat==base) amb la base i
    l'alçada marcades (l'alçada, en discontinu, des del vèrtex superior
    fins al punt mitjà de la base). Cal donar `costat` o `altura` (com a
    mínim un dels dos, per calcular les proporcions reals del dibuix).

    triangle_isosceles(10, costat=10)               -> equilàter
    triangle_isosceles(8, altura=6.93)               -> isòsceles, alçada
    triangle_isosceles(6, costat=12, mostra_altura=False) -> sense alçada
    """
    import math
    assert costat is not None or altura is not None, (
        "cal donar costat o altura (com a mínim un) per calcular el dibuix")
    b = float(base)
    if altura is not None:
        h_real = float(altura)
    else:
        c = float(costat)
        h_real = math.sqrt(max(c * c - (b / 2) ** 2, 0.0))
    ample_max = 170.0
    escala = ample_max / b
    B = b * escala
    H = max(50.0, min(160.0, h_real * escala))
    m = 26
    x0, y0 = m, m + H              # peu esquerre de la base
    xm = m + B / 2                 # peu de l'alçada / vèrtex superior
    cos = (
        '<polygon points="%g,%g %g,%g %g,%g" fill="%s" stroke="currentColor" '
        'stroke-width="2"/>'
        % (x0, y0, x0 + B, y0, xm, m, OMPLERT)
    )
    if mostra_altura:
        cos += ('<line x1="%g" y1="%g" x2="%g" y2="%g" stroke="%s" '
                'stroke-width="1.5" stroke-dasharray="4 3"/>'
                % (xm, m, xm, y0, MARCA))
    eb = etq_base if etq_base is not None else mesura(base, unitat)
    cos += _text(xm, y0 + 18, eb)
    ec = None
    if costat is not None or etq_costat is not None:
        ec = etq_costat if etq_costat is not None else mesura(costat, unitat)
        cos += _text(x0 + (xm - x0) / 2 - 14, m + (y0 - m) / 2, ec,
                    ancora="end")
    ea = None
    # Cal admetre `etq_altura` sense `altura` real: en exercicis com "troba
    # l'alçada", la crida vol marcar la línia discontínua amb un "x" o un
    # "?" sense revelar el valor numèric (que és precisament la resposta).
    # Exigir `altura is not None` per pintar l'etiqueta feia que aquesta
    # marca desaparegués sencera en aquests casos (124a, 124c, 125): la
    # línia discontínua hi era, però sense cap número ni incògnita al
    # costat, així que semblava una aresta sense mesurar.
    if mostra_altura and (altura is not None or etq_altura is not None):
        ea = etq_altura if etq_altura is not None else mesura(altura, unitat)
        cos += _text(xm + 8, m + (y0 - m) / 2, ea)
    w = int(B + 2 * m)
    hh = int(y0 + m)
    tipus = "equilàter" if (costat is not None and etq_costat is None
                            and abs(costat - base) < 1e-9) \
        else "isòsceles"
    detall = ""
    if ec is not None:
        detall += ", costats iguals %s" % ec
    if ea is not None:
        detall += ", alçada %s" % ea
    return _svg(w, hh, cos,
               ("Triangle %s de base %s%s." % (tipus, eb, detall)))


# ---------------------------------------------------------------------
def rectangle_amb_rombe(base, altura, etq_base=None, etq_altura=None, unitat="cm"):
    """Rectangle amb el rombe format unint els punts mitjans dels quatre
    costats. No etiqueta el costat del rombe (típicament és la incògnita
    de l'exercici).

    rectangle_amb_rombe(12, 16)  -> rectangle 12×16 amb el rombe intern
    """
    b, h = float(base), float(altura)
    costat_max = 180.0
    escala = costat_max / max(b, h)
    ample = b * escala
    alt = h * escala
    # Marge esquerre dinàmic: l'etiqueta de l'altura es dibuixa amb
    # text-anchor="end" cap a l'esquerra, així que si és llarga (per
    # exemple "AC = 16 cm") el marge fix de 26px no li dona prou espai
    # i queda tallada (AUDITORIA C4). ~7.3px/caràcter cobreix la font mono
    # 12px 600 amb marge de sobra (6.5px es quedava curt i encara tallava
    # el primer caràcter en etiquetes llargues).
    ea = etq_altura if etq_altura is not None else mesura(altura, unitat)
    m = max(26, int(len(ea) * 7.3) + 14)
    x0, y0 = m, 26
    eb = etq_base if etq_base is not None else mesura(base, unitat)
    # punts mitjans dels quatre costats, en sentit horari des de dalt
    p_dalt = (x0 + ample / 2, y0)
    p_dreta = (x0 + ample, y0 + alt / 2)
    p_baix = (x0 + ample / 2, y0 + alt)
    p_esq = (x0, y0 + alt / 2)
    cos = (
        '<rect x="%g" y="%g" width="%g" height="%g" fill="none" '
        'stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>'
        % (x0, y0, ample, alt)
        + '<polygon points="%g,%g %g,%g %g,%g %g,%g" fill="%s" '
          'stroke="%s" stroke-width="2.5"/>'
          % (p_dalt[0], p_dalt[1], p_dreta[0], p_dreta[1],
             p_baix[0], p_baix[1], p_esq[0], p_esq[1], OMPLERT, MARCA)
        + _text(x0 + ample / 2, y0 + alt + 18, eb)
        + _text(x0 - 8, y0 + alt / 2 + 4, ea, ancora="end")
    )
    return _svg(int(ample + x0 + 26), int(alt + y0 + 26), cos,
                "Rectangle de %s per %s amb el rombe format unint els "
                "punts mitjans dels quatre costats." % (eb, ea))


# ---------------------------------------------------------------------
def triangle_isosceles_angle(angle_desigual, etq_angle=None):
    """Triangle isòsceles dibuixat a partir del seu angle desigual (el
    del vèrtex de dalt, entre els dos costats iguals), amb un petit arc
    que el marca. No marca els altres dos angles (típicament la
    incògnita de l'exercici) ni cap mesura de costat.

    triangle_isosceles_angle(50)  -> triangle amb l'angle de dalt marcat
    """
    import math
    ang = float(angle_desigual)
    assert 0 < ang < 180, "l'angle desigual d'un triangle ha d'estar entre 0 i 180 graus"
    # Base fixa; l'alçada es calcula perquè el vèrtex de dalt tingui
    # exactament aquest angle: si la meitat de l'angle és alpha, i la
    # semibase és B, aleshores alt = B / tan(alpha).
    B = 85.0                          # semibase, en px
    alpha = math.radians(ang / 2.0)
    alt = B / math.tan(alpha) if math.tan(alpha) > 1e-6 else B * 6
    alt = max(45.0, min(190.0, alt))  # topall per a angles molt aguts/obtusos
    m = 26
    x0, y0 = m, m + alt               # peu esquerre de la base
    xm = m + B                        # vèrtex de dalt (centrat)
    x1 = m + 2 * B                    # peu dret de la base
    cos = (
        '<polygon points="%g,%g %g,%g %g,%g" fill="%s" stroke="currentColor" '
        'stroke-width="2"/>' % (x0, y0, x1, y0, xm, m, OMPLERT)
    )
    # arc que marca l'angle de dalt: petit sector centrat al vèrtex xm,m,
    # construït directament a partir dels vectors cap als dos peus de la
    # base (més robust que calcular angles amb atan2 i después reconvertir).
    r_arc = 22.0
    dir_esq = ((x0 - xm), (y0 - m))
    dir_dre = ((x1 - xm), (y0 - m))
    norm_esq = math.hypot(*dir_esq)
    norm_dre = math.hypot(*dir_dre)
    pa = (xm + r_arc * dir_esq[0] / norm_esq, m + r_arc * dir_esq[1] / norm_esq)
    pb = (xm + r_arc * dir_dre[0] / norm_dre, m + r_arc * dir_dre[1] / norm_dre)
    gran_arc = 1 if ang > 180 else 0
    cos += ('<path d="M%g,%g A%g,%g 0 %d,1 %g,%g" fill="none" '
            'stroke="%s" stroke-width="2"/>'
            % (pa[0], pa[1], r_arc, r_arc, gran_arc, pb[0], pb[1], MARCA))
    ea = etq_angle if etq_angle is not None else "%g°" % angle_desigual
    cos += _text(xm, m + r_arc + 16, ea, petit=True)
    w = int(2 * B + 2 * m)
    h = int(y0 + m)
    return _svg(w, h, cos,
                "Triangle isòsceles amb l'angle de dalt (entre els "
                "costats iguals) de %s marcat." % ea)