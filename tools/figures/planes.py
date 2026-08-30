# -*- coding: utf-8 -*-
"""figures/planes.py — figures planes.

Vegeu `figures/__init__.py` per a les convencions comunes: viewBox sense mida
fixa, `currentColor` als traços, `role="img"` amb `<title>`, i cap `$` a dins.
`lib._valida()` atura la compilació si alguna no es compleix.
"""
import math

from . import OMPLERT, MARCA, _svg, _text, mesura
from .etiquetatge import Escena

def quadrat_diagonal(costat, etiqueta_costat=None, etiqueta_diagonal="x", unitat="cm"):
    """Quadrat amb una diagonal marcada.

    quadrat_diagonal(4)  ->  quadrat de costat 4 cm amb la diagonal en roig
    """
    L = 120.0
    lc = etiqueta_costat if etiqueta_costat is not None else mesura(costat, unitat)
    e = Escena("Quadrat de costat %s amb la diagonal marcada." % lc)
    e.poligon([(0.0, 0.0), (L, 0.0), (L, L), (0.0, L)])
    e.marca((0.0, L), (L, 0.0))
    e.cota((0.0, L), (L, L), lc, despl=16)
    # L'etiqueta de la diagonal la col·loca el motor, perpendicularment al
    # seu segment. Abans anava a un desplaçament fix de (+16, -6), que és
    # gairebé PARAL·LEL a la diagonal d'un quadrat: el text hi queia al
    # damunt en comptes de quedar-hi al costat.
    e.etq_segment((0.0, L), (L, 0.0), etiqueta_diagonal)
    return e.svg()


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
    escala = 180.0 / max(b, h)
    ample = max(60.0, b * escala)
    alt = max(60.0, h * escala)
    eb = etq_base if etq_base is not None else mesura(base, unitat)
    ea = etq_altura if etq_altura is not None else mesura(altura, unitat)
    titol_extra = " amb la diagonal marcada" if mostra_diagonal else ""
    e = Escena("Rectangle de %s per %s%s." % (eb, ea, titol_extra))
    e.poligon([(0.0, 0.0), (ample, 0.0), (ample, alt), (0.0, alt)])
    e.cota((0.0, alt), (ample, alt), eb, despl=16)
    e.cota((0.0, 0.0), (0.0, alt), ea, despl=16)
    if mostra_diagonal:
        e.marca((0.0, alt), (ample, 0.0))
        # El desplaçament fix de (+14, -6) que hi havia abans és gairebé
        # paral·lel a la diagonal per a les proporcions habituals, i deixava
        # el text damunt del traç. El motor el col·loca perpendicularment.
        e.etq_segment((0.0, alt), (ample, 0.0), etq_diagonal)
    return e.svg()


# ---------------------------------------------------------------------
def triangle_rectangle(catet_a, catet_b, etq_a=None, etq_b=None,
                       etq_hip=None, marca_hip=True, unitat="cm"):
    """Triangle rectangle amb l'angle recte marcat amb el quadradet."""
    ample = 170.0
    alt = max(55.0, min(170.0, ample * float(catet_b) / float(catet_a)))
    ea = etq_a if etq_a is not None else mesura(catet_a, unitat)
    eb = etq_b if etq_b is not None else mesura(catet_b, unitat)
    x0, y0 = 0.0, alt                         # vèrtex de l'angle recte
    e = Escena("Triangle rectangle de catets %s i %s." % (ea, eb))
    e.poligon([(x0, y0), (x0 + ample, y0), (x0, y0 - alt)])
    e.angle_recte((x0, y0), (1, 0), (0, -1), mida=12)
    e.cota((x0, y0), (x0 + ample, y0), ea, despl=16)
    e.cota((x0, y0 - alt), (x0, y0), eb, despl=16)
    if etq_hip is not None:
        if marca_hip:
            e.marca((x0 + ample, y0), (x0, y0 - alt), gruix=2.5)
        # Perpendicular a la hipotenusa, no al costat: el desplaçament fix
        # de (+10, -4) que hi havia queia sobre el traç per a les
        # proporcions més freqüents (3-4-5 i 5-12-13).
        e.etq_segment((x0 + ample, y0), (x0, y0 - alt), etq_hip)
    return e.svg()


# ---------------------------------------------------------------------
def trapezi(base_gran, base_petita, altura, isosceles=True,
           etq_base_gran=None, etq_base_petita=None, etq_altura=None, unitat="cm"):
    """Trapezi (isòsceles per defecte) amb les tres mesures etiquetades.

    trapezi(10, 3, 6)  ->  trapezi de bases 10 i 3 cm, alçada 6 cm.

    L'alçada s'etiqueta per DINS del trapezi, a la dreta del segment
    discontinu. A l'esquerra hi passa el costat obliqu, que a mitja alçada
    cau a (base_gran - base_petita)/4 px del segment: just on queia el text
    abans, i per això el tallava.
    """
    Bg, bp = float(base_gran), float(base_petita)
    escala = 190.0 / max(Bg, 1.0)
    Bg_px, bp_px = Bg * escala, bp * escala
    alt_px = max(45.0, min(150.0, altura * escala))
    despl = (Bg_px - bp_px) / 2.0        # isòsceles: centrat
    y_top, y_bot = 0.0, alt_px
    x_bl, x_br = 0.0, Bg_px
    x_tl, x_tr = despl, despl + bp_px
    eBg = etq_base_gran if etq_base_gran is not None else mesura(base_gran, unitat)
    ebp = etq_base_petita if etq_base_petita is not None else mesura(base_petita, unitat)
    ea = etq_altura if etq_altura is not None else mesura(altura, unitat)
    tipus = "isòsceles" if isosceles else ""
    e = Escena(("Trapezi %s de bases %s i %s, alçada %s."
                % (tipus, eBg, ebp, ea)).replace("  ", " "))
    e.poligon([(x_bl, y_bot), (x_br, y_bot), (x_tr, y_top), (x_tl, y_top)])
    e.segment((x_tl, y_top), (x_tl, y_bot), gruix=1.5, discontinu=True,
              color=MARCA)
    e.angle_recte((x_tl, y_bot), (1, 0), (0, -1), mida=9)
    e.cota((x_bl, y_bot), (x_br, y_bot), eBg, despl=16)
    e.cota((x_tl, y_top), (x_tr, y_top), ebp, despl=16)
    e.etq_segment((x_tl, y_top), (x_tl, y_bot), ea, costat=-1)
    return e.svg()


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
    n = int(n)
    assert n >= 3, "un polígon necessita com a mínim 3 costats"
    R = 90.0                              # radi de dibuix, constant
    cx, cy = 0.0, 0.0
    # El punt mitjà (angular) del costat 0-1 ha de caure a baix (90° en
    # aquest sistema, on 0°=amunt i es creix en sentit horari): amb els
    # vèrtexs a gir + k*360/n, el punt mitjà del primer costat és a
    # gir + 180/n, així que cal gir = 90 - 180/n perquè hi càpiga.
    # Vàlid per qualsevol n (parell o senar): sense això, un polígon de
    # n senar surt cap per avall (comprovat amb n=3).
    gir = 90 - 180.0 / n
    punts = [(cx + R * math.cos(math.radians(gir + k * 360.0 / n)),
              cy + R * math.sin(math.radians(gir + k * 360.0 / n)))
             for k in range(n)]

    ec = None
    if mostra_costat:
        ec = etq_costat if etq_costat is not None else (
            mesura(costat, unitat) if costat is not None else None)

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
        # Sense cap mesura marcada el nom sol no dona un <title> prou llarg
        # per a lectors de pantalla (ex.: "Quadrat." són 8 caràcters).
        detall = " de %d costats" % n
    e = Escena("%s%s." % (nom[0].upper() + nom[1:], detall))
    e.poligon(punts)

    if triangle_central:
        for (px, py) in punts:
            e.crua('<line x1="%g" y1="%g" x2="%g" y2="%g" '
                   'stroke="currentColor" stroke-width="0.75" '
                   'stroke-opacity="0.45"/>' % (cx, cy, px, py),
                   [(cx, cy, px, py)])
        e.poligon([(cx, cy), punts[0], punts[1]], ple=False, color=MARCA)

    if ec is not None:
        # El costat 0-1 és per construcció el de baix.
        e.cota(punts[0], punts[1], ec, despl=16)

    if diagonal:
        assert n % 2 == 0, "la diagonal pel centre només té sentit amb n parell"
        e.marca(punts[0], punts[n // 2], gruix=2.5)
    elif apotema is not None:
        # Peu de l'apotema: punt mig del costat 0-1, que cau a baix, de
        # manera que l'apotema surt vertical. L'etiqueta ha d'anar-hi al
        # costat, i el desplaçament fix de +12 px que hi havia abans no
        # arriba a apartar-la: la caixa del text queda centrada gairebé
        # sobre el propi segment i el traç la creua pel mig.
        mig = ((punts[0][0] + punts[1][0]) / 2,
               (punts[0][1] + punts[1][1]) / 2)
        e.marca((cx, cy), mig, gruix=2.5)
        e.angle_recte(mig, (1, 0), (0, -1), mida=9)
        ea = etq_apotema if etq_apotema is not None else mesura(apotema, unitat)
        e.etq_segment((cx, cy), mig, ea)
    elif radi_marcat:
        e.marca((cx, cy), punts[0], gruix=2.5)
    return e.svg()


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
    r = 80.0
    cx, cy = 0.0, 0.0

    def punt(ang_graus):
        a = math.radians(ang_graus - 90)      # 0° = amunt, sentit horari
        return cx + r * math.cos(a), cy + r * math.sin(a)

    def arc_segs(a0, a1, n=40):
        pts = [punt(a0 + (a1 - a0) * i / n) for i in range(n + 1)]
        return [(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1])
                for i in range(n)]

    # El sector PINTAT va sempre de 0° fins a `ang_pintat`; si es demana
    # la part restant, això és simplement el complementari a 360°.
    ang_pintat = (360.0 - angle) if ombreja_restant else angle
    x0, y0 = punt(0)
    xf, yf = punt(ang_pintat)
    gran_arc = 1 if ang_pintat > 180 else 0

    if ombreja_restant:
        descripcio = ("amb un sector de %g° retallat (la resta, "
                      "%g°, queda marcada)" % (angle, ang_pintat))
    else:
        descripcio = "amb un sector de %g° marcat" % angle
    er = etq_radi if etq_radi is not None else mesura(radi, unitat)
    e = Escena("Cercle de radi %s, %s." % (er, descripcio))

    if ang_pintat >= 359.999:
        e.crua('<circle cx="%g" cy="%g" r="%g" fill="%s" '
               'stroke="currentColor" stroke-width="2"/>' % (cx, cy, r, MARCA),
               arc_segs(0, 360))
    else:
        e.crua('<circle cx="%g" cy="%g" r="%g" fill="%s" '
               'stroke="currentColor" stroke-width="2"/>' % (cx, cy, r, OMPLERT)
               + '<path d="M%g,%g L%g,%g A%g,%g 0 %d,1 %g,%g Z" fill="%s" '
                 'stroke="currentColor" stroke-width="2" '
                 'stroke-linejoin="round"/>'
                 % (cx, cy, x0, y0, r, r, gran_arc, xf, yf, MARCA),
               arc_segs(0, 360) + [(cx, cy, x0, y0), (cx, cy, xf, yf)])

    # El radi va del centre a les 12, o sigui vertical. El desplaçament fix
    # de (+10, 0) que hi havia abans deixava la caixa del text a cavall del
    # propi segment; el motor la col·loca perpendicular.
    e.segment((cx, cy), (x0, y0), gruix=1.5, discontinu=True)
    e.etq_segment((cx, cy), (x0, y0), er, petit=True)
    return e.svg()


# ---------------------------------------------------------------------
def corona(r_ext, r_int, etq_ext=None, etq_int=None, mig=False, unitat="cm"):
    """Corona circular: dos cercles concèntrics, l'espai entre ells omplert.
    Amb `mig=True`, només la meitat superior (per a figures de tipus
    "mitja lluna" fetes amb dos semicercles).

    corona(3, 2.5)          -> anell complet, radis 3 i 2.5 cm
    corona(6, 3, mig=True)  -> mitja lluna (dos semicercles)

    Cada mesura va lligada a un segment propi. A l'anell, els dos radis es
    dibuixen en direccions diferents; a la mitja lluna, els dos diàmetres
    porten cotes apilades a sota, cadascuna amb les seves línies auxiliars.
    Abans el radi interior s'escrivia al centre de la corona, equidistant
    de les dues circumferències i sense res que digués quina mesurava.
    """
    r1, r2 = float(r_ext), float(r_int)
    assert r1 > r2 > 0, "el radi exterior ha de ser més gran que l'interior"
    escala = 80.0 / r1
    R1, R2 = r1 * escala, r2 * escala
    cx = cy = 0.0
    eext = etq_ext if etq_ext is not None else mesura(r_ext, unitat)
    eint = etq_int if etq_int is not None else mesura(r_int, unitat)

    def cercle_segs(r, n=48):
        pts = [(cx + r * math.cos(2 * math.pi * i / n),
                cy + r * math.sin(2 * math.pi * i / n)) for i in range(n + 1)]
        return [(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1])
                for i in range(n)]

    if not mig:
        e = Escena("Corona circular: radi exterior %s, radi interior %s."
                   % (eext, eint))
        # even-odd fill: cercle gran ple, cercle petit "buit" pel mateix path
        e.crua('<path d="M%g,%g m-%g,0 a%g,%g 0 1,0 %g,0 a%g,%g 0 1,0 -%g,0 '
               'M%g,%g m-%g,0 a%g,%g 0 1,0 %g,0 a%g,%g 0 1,0 -%g,0" '
               'fill-rule="evenodd" fill="%s" stroke="currentColor" '
               'stroke-width="2"/>'
               % (cx, cy, R1, R1, R1, 2 * R1, R1, R1, 2 * R1,
                  cx, cy, R2, R2, R2, 2 * R2, R2, R2, 2 * R2, OMPLERT),
               cercle_segs(R1) + cercle_segs(R2))
        interior = (cx + R2, cy)
        exterior = (cx - R1 * 0.7071, cy - R1 * 0.7071)
        e.marca((cx, cy), interior)
        e.marca((cx, cy), exterior)
        e.etq_segment((cx, cy), interior, "int. %s" % eint, petit=True)
        e.etq_segment((cx, cy), exterior, "ext. %s" % eext, petit=True)
        return e.svg()

    # Mig anell (creixent): un únic contorn tancat i simple — arc gran per
    # sobre, línia recta enrere fins a l'extrem del petit, arc petit per
    # sobre en sentit invertit per "excavar" la mossa, i tornada a l'inici.
    e = Escena("Mitja lluna: semicercle exterior de diàmetre %s, "
               "semicercle interior de diàmetre %s." % (eext, eint))
    base_y = 0.0
    e.crua('<path d="M%g,%g A%g,%g 0 0,1 %g,%g L%g,%g '
           'A%g,%g 0 0,0 %g,%g Z" fill="%s" stroke="currentColor" '
           'stroke-width="2" stroke-linejoin="round"/>'
           % (cx - R1, base_y, R1, R1, cx + R1, base_y, cx + R2, base_y,
              R2, R2, cx - R2, base_y, OMPLERT),
           [s for s in cercle_segs(R1) if s[1] <= base_y and s[3] <= base_y]
           + [s for s in cercle_segs(R2) if s[1] <= base_y and s[3] <= base_y]
           + [(cx - R1, base_y, cx + R1, base_y)])
    # Cotes apilades: la interior a prop i l'exterior més avall, cadascuna
    # amb les seves línies auxiliars. Els dos diàmetres viuen sobre la
    # mateixa horitzontal, així que sense claudàtors serien indistingibles.
    e.cota((cx - R2, base_y), (cx + R2, base_y), "diàm. int. %s" % eint,
           despl=16, costat=-1, petit=True)
    e.cota((cx - R1, base_y), (cx + R1, base_y), "diàm. ext. %s" % eext,
           despl=44, costat=-1, petit=True)
    return e.svg()


# ---------------------------------------------------------------------
def rectangle_amb_forat(base, altura, radi_forat, cx_forat=None, cy_forat=None,
                        etq_base=None, etq_altura=None, etq_radi=None, unitat="cm"):
    """Rectangle (o quadrat, si base==altura) amb un forat circular a
    dins. Per defecte el forat és centrat.

    rectangle_amb_forat(5, 5, 1)   -> quadrat de costat 5 amb forat radi 1

    La mesura del forat s'acota sobre un DIÀMETRE dibuixat, no escrita al
    mig del forat: "diàm. 2 cm" fa uns 78 px i el forat només 34, així que
    el text sortia per tots dos costats i la circumferència el tallava.
    """
    escala = 170.0 / max(float(base), float(altura))
    B, A = float(base) * escala, float(altura) * escala
    r = float(radi_forat) * escala
    eb = etq_base if etq_base is not None else mesura(base, unitat)
    ea = etq_altura if etq_altura is not None else mesura(altura, unitat)
    er = etq_radi if etq_radi is not None else (
        "diàm. " + mesura(2 * radi_forat, unitat))
    x0, y0 = 0.0, 0.0
    cx = cx_forat * escala + x0 if cx_forat is not None else x0 + B / 2
    cy = cy_forat * escala + y0 if cy_forat is not None else y0 + A / 2

    def cercle_segs(n=40):
        pts = [(cx + r * math.cos(2 * math.pi * i / n),
                cy + r * math.sin(2 * math.pi * i / n)) for i in range(n + 1)]
        return [(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1])
                for i in range(n)]

    forma = "Quadrat" if abs(base - altura) < 1e-9 else "Rectangle"
    e = Escena("%s de %s per %s amb un forat circular de %s."
               % (forma, eb, ea, er))
    # even-odd: rectangle ple menys el cercle interior
    e.crua('<path d="M%g,%g h%g v%g h-%g Z '
           'M%g,%g m-%g,0 a%g,%g 0 1,0 %g,0 a%g,%g 0 1,0 -%g,0" '
           'fill-rule="evenodd" fill="%s" stroke="currentColor" '
           'stroke-width="2"/>'
           % (x0, y0, B, A, B, cx, cy, r, r, r, 2 * r, r, r, 2 * r, OMPLERT),
           [(x0, y0, x0 + B, y0), (x0 + B, y0, x0 + B, y0 + A),
            (x0 + B, y0 + A, x0, y0 + A), (x0, y0 + A, x0, y0)]
           + cercle_segs())
    e.marca((cx - r, cy), (cx + r, cy))
    e.cota((x0, y0 + A), (x0 + B, y0 + A), eb, despl=16)
    e.cota((x0, y0), (x0, y0 + A), ea, despl=16)
    e.etq_segment((cx - r, cy), (cx + r, cy), er, petit=True)
    return e.svg()


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

    L'etiqueta del costat va perpendicular al costat, no a un desplaçament
    fix cap a l'esquerra: amb triangles alts i estrets el costat s'inclina
    fins a passar per on queia el text.
    """
    assert costat is not None or altura is not None, (
        "cal donar costat o altura (com a mínim un) per calcular el dibuix")
    b = float(base)
    if altura is not None:
        h_real = float(altura)
    else:
        c = float(costat)
        h_real = math.sqrt(max(c * c - (b / 2) ** 2, 0.0))
    escala = 170.0 / b
    B = b * escala
    H = max(50.0, min(160.0, h_real * escala))
    x0, y0 = 0.0, H                # peu esquerre de la base
    xm = B / 2                     # peu de l'alçada / vèrtex superior
    cim = (xm, 0.0)

    eb = etq_base if etq_base is not None else mesura(base, unitat)
    ec = None
    if costat is not None or etq_costat is not None:
        ec = etq_costat if etq_costat is not None else mesura(costat, unitat)
    ea = None
    # Cal admetre `etq_altura` sense `altura` real: en exercicis com "troba
    # l'alçada", la crida vol marcar la línia discontínua amb un "x" o un
    # "?" sense revelar el valor numèric (que és precisament la resposta).
    if mostra_altura and (altura is not None or etq_altura is not None):
        ea = etq_altura if etq_altura is not None else mesura(altura, unitat)

    tipus = "equilàter" if (costat is not None and etq_costat is None
                            and abs(costat - base) < 1e-9) else "isòsceles"
    detall = ""
    if ec is not None:
        detall += ", costats iguals %s" % ec
    if ea is not None:
        detall += ", alçada %s" % ea
    e = Escena("Triangle %s de base %s%s." % (tipus, eb, detall))
    e.poligon([(x0, y0), (x0 + B, y0), cim])
    if mostra_altura:
        e.segment(cim, (xm, y0), gruix=1.5, discontinu=True, color=MARCA)
        e.angle_recte((xm, y0), (1, 0), (0, -1), mida=9)
    e.cota((x0, y0), (x0 + B, y0), eb, despl=16)
    if ec is not None:
        e.etq_segment((x0, y0), cim, ec)
    if ea is not None:
        e.etq_segment(cim, (xm, y0), ea, costat=-1)
    return e.svg()


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
    # Arc que marca l'angle de dalt. Aquí els vectors ja són en coordenades
    # de PANTALLA (y cap avall), i en aquest sistema `sweep=1` recorre l'arc
    # en sentit horari: sortint del peu esquerre, donava la volta per damunt
    # del vèrtex i dibuixava l'angle REFLEX —a 119 es veia una arcada sobre
    # el cim en comptes de l'angle. Amb `sweep=0` passa per sota, per dins
    # de l'angle, que és el que marca. L'angle d'un triangle sempre és
    # menor que 180°, així que l'arc mai no és el gran.
    r_arc = 22.0
    dir_esq = ((x0 - xm), (y0 - m))
    dir_dre = ((x1 - xm), (y0 - m))
    norm_esq = math.hypot(*dir_esq)
    norm_dre = math.hypot(*dir_dre)
    pa = (xm + r_arc * dir_esq[0] / norm_esq, m + r_arc * dir_esq[1] / norm_esq)
    pb = (xm + r_arc * dir_dre[0] / norm_dre, m + r_arc * dir_dre[1] / norm_dre)
    cos += ('<path d="M%g,%g A%g,%g 0 0,0 %g,%g" fill="none" '
            'stroke="%s" stroke-width="2"/>'
            % (pa[0], pa[1], r_arc, r_arc, pb[0], pb[1], MARCA))
    ea = etq_angle if etq_angle is not None else "%g°" % angle_desigual
    cos += _text(xm, m + r_arc + 16, ea, petit=True)
    w = int(2 * B + 2 * m)
    h = int(y0 + m)
    return _svg(w, h, cos,
                "Triangle isòsceles amb l'angle de dalt (entre els "
                "costats iguals) de %s marcat." % ea)