# -*- coding: utf-8 -*-
"""figures/semblanca.py — configuracions de Tales i figures semblants.

Vegeu `figures/__init__.py` per a les convencions comunes: viewBox sense mida
fixa, `currentColor` als traços, `role="img"` amb `<title>`, i cap `$` a dins.
`lib._valida()` atura la compilació si alguna no es compleix.

Cinc plantilles, cadascuna pensada perquè el DIBUIX no faci la feina de
l'alumne: les mesures que calen per resoldre continuen només a l'enunciat en
paraules (§3.6 del TECHNICAL-STATE), i la figura hi afegeix la disposició
espacial, que és la part que costa d'imaginar sense veure-la.

  tales()               dues secants amb un vèrtex comú, tallades per un joc
                        de paral·leles — 152a-f, 153a-c
  parella_semblants()   dos triangles, costats homòlegs etiquetats — 154a-d,
                        155a-e
  escala_regla()        una barra d'escala gràfica — 156, 285
  figures_semblants_k() dues figures semblants amb la raó marcada, SENSE
                        revelar la raó d'àrees ni de volums — 290-294
  ombra()               dos triangles rectangles amb la mateixa inclinació
                        de diagonal — 161, 163, 164, 166, 168, 169 (162, 165
                        i 167 no hi encaixen: vegeu NOTES-sqr.md)
"""
import math

from . import OMPLERT, MARCA, _svg, _text


# ---------------------------------------------------------------------
# Ajudants interns
# ---------------------------------------------------------------------

def _fmt(v, unitat="cm"):
    """Nombre -> etiqueta curta amb la unitat donada, o la cadena tal qual
    si `v` ja n'és una (permet passar-hi `"x"` o una etiqueta feta a mida
    sense embolicar-la). La unitat per defecte és `cm`, la que fan servir
    tots els exercicis de triangles i Tales; `ombra()` l'exposa com a
    paràmetre perquè els seus exercicis (161-169) parlen de metres i
    quilòmetres convertits a metres, no de centímetres."""
    if isinstance(v, str):
        return v
    return "%g %s" % (v, unitat)


def _escalat(valors, minim, maxim, buit=None):
    """Reescala una llista de longituds REALS a longituds DE DIBUIX que
    caben entre `minim` i `maxim`, conservant l'ordre i les proporcions
    relatives però sense arribar mai a un tram il·legible.

    Aquest és el mecanisme que evita el problema dels apartats exclosos
    (152d/g/h): quan la font barreja un tram molt curt amb un de molt
    llarg, escalar-los linealment fa un dels dos invisible al dibuix. Aquí
    es normalitza dins d'un rang fix i es garanteix un mínim per tram, a
    costa de deixar de ser una reproducció a escala real —cosa que ja
    l'enunciat en paraules no pretenia ser.

    `buit` són posicions que no tenen valor numèric (la incògnita): se'ls
    dona sempre un tram de mida mitjana del rang de dibuix, tant si hi ha
    prou valors coneguts per triangular una "mitjana real" com si no
    (un sol valor conegut no permet cap escala relativa: el punt sense
    valor s'ha de dibuixar igualment en un lloc raonable).
    """
    mig_rang = (minim + maxim) / 2.0
    coneguts = [v for i, v in enumerate(valors) if buit is None or i not in buit]
    if not coneguts:
        return [mig_rang] * len(valors)
    lo, hi = min(coneguts), max(coneguts)
    out = []
    for i, v in enumerate(valors):
        if buit is not None and i in buit:
            out.append(mig_rang)
            continue
        if hi == lo:
            out.append(mig_rang)
        else:
            out.append(minim + (maxim - minim) * (v - lo) / (hi - lo))
    return out


def _punt(origen, angle_graus, distancia):
    ang = math.radians(angle_graus)
    return (origen[0] + distancia * math.cos(ang),
            origen[1] - distancia * math.sin(ang))


def _linia(p1, p2, color="currentColor", gruix=2, guions=False):
    extra = ' stroke-dasharray="4 3"' if guions else ""
    return ('<line x1="%.2f" y1="%.2f" x2="%.2f" y2="%.2f" stroke="%s" '
            'stroke-width="%s"%s/>' % (p1[0], p1[1], p2[0], p2[1], color,
                                       gruix, extra))


def _poligon(punts, ratlla=False, ompl=OMPLERT, gruix=2):
    """Un polígon ple de N vèrtexs (N>=3), amb la vora sempre
    `currentColor`. `ratlla=True` el marca amb un traç discontinu enlloc
    de continu (per exemple, per fer evident visualment quina de les dues
    figures semblants és la «petita» quan la mida real ja no ho deixa
    clar per si sola)."""
    assert len(punts) >= 3, "_poligon(): calen com a mínim 3 vèrtexs"
    extra = ' stroke-dasharray="5 4"' if ratlla else ""
    pts_str = " ".join("%.2f,%.2f" % (x, y) for x, y in punts)
    return ('<polygon points="%s" fill="%s" stroke="currentColor" '
            'stroke-width="%s"%s/>' % (pts_str, ompl, gruix, extra))


def _triangle(p1, p2, p3, ratlla=False, ompl=OMPLERT, gruix=2):
    """Un triangle ple: cas particular de `_poligon` amb 3 vèrtexs (queda
    com a funció pròpia perquè és, de llarg, el cas més freqüent i així
    les crides no necessiten empaquetar els punts en una llista)."""
    return _poligon((p1, p2, p3), ratlla=ratlla, ompl=ompl, gruix=gruix)


def _arc_angle(vertex, p_a, p_b, radi, color="currentColor"):
    """Un petit arc que marca l'angle a `vertex`, entre les direccions cap
    a `p_a` i cap a `p_b`. Fet servir per assenyalar quin parell d'angles
    és el que es dona igual entre els dos triangles (criteri AA)."""
    ang_a = math.atan2(-(p_a[1] - vertex[1]), p_a[0] - vertex[0])
    ang_b = math.atan2(-(p_b[1] - vertex[1]), p_b[0] - vertex[0])
    x1 = vertex[0] + radi * math.cos(ang_a)
    y1 = vertex[1] - radi * math.sin(ang_a)
    x2 = vertex[0] + radi * math.cos(ang_b)
    y2 = vertex[1] - radi * math.sin(ang_b)
    diff = (ang_b - ang_a) % (2 * math.pi)
    large = 1 if diff > math.pi else 0
    return ('<path d="M %.2f %.2f A %.2f %.2f 0 %d 0 %.2f %.2f" fill="none" '
            'stroke="%s" stroke-width="2"/>'
            % (x1, y1, radi, radi, large, x2, y2, color))


def _tercer_vertex(base, lat_esq, lat_dre):
    """Donada la base A(0,0)-B(base,0) i les longituds dels costats laterals
    des de A i des de B, calcula el tercer vèrtex C per la llei del cosinus
    (intersecció de dues circumferències). Si algun costat no es coneix
    (`None`), torna una forma per defecte —un triangle escalè agradable,
    ni isòsceles ni degenerat— perquè sempre hi hagi ALGUNA figura per
    dibuixar encara que l'exercici no fixi els 3 costats."""
    if lat_esq is None or lat_dre is None:
        return (base * 0.42, -base * 0.78)
    a, b, d = lat_esq, lat_dre, base
    x = (d * d + a * a - b * b) / (2 * d)
    y2 = a * a - x * x
    y = -math.sqrt(y2) if y2 > 1 else -0.6 * d
    return (x, y)


# ---------------------------------------------------------------------
def tales(segments_a, segments_b, incognita, angle=25):
    """Dues secants que surten d'un vèrtex comú `O`, tallades per un joc de
    rectes paral·leles: la configuració de Tales de 152/153.

    `segments_a` i `segments_b` descriuen els punts marcats a cada secant,
    en ordre des d'`O` cap enfora, com a llista de parells `(etiqueta,
    distancia_des_de_O)`. `distancia_des_de_O` pot ser:

    - un nombre: la distància real des d'`O` fins aquest punt, que
      s'etiqueta amb aquesta mateixa mesura;
    - `None`: el punt no es dibuixa (l'apartat no el fa servir);
    - una TUPLA `(valor_real, "x")`: és la incògnita. `valor_real` és el
      valor numèric autèntic (el que resol l'exercici), que la funció fa
      SERVIR PER SITUAR EL PUNT —imprescindible perquè la transversal que
      hi passa surti geomètricament paral·lela a les altres, seguint el
      recíproc del teorema de Tales— però que MAI apareix escrit enlloc
      de la figura: l'etiqueta que es dibuixa és sempre la cadena `"x"`
      (restricció 2 del brief: la incògnita queda sense mesura visible).
      Qui crida `tales()` ja coneix aquest valor perquè l'ha calculat per
      escriure la resolució de l'exercici.

    Com a màxim un punt per secant pot ser la incògnita, i a cada secant
    hi ha d'haver com a mínim dos punts DIBUIXATS (numèrics o la
    incògnita), per fixar-hi una recta identificable.

    Les paral·leles s'uneixen entre els punts que comparteixen POSICIÓ dins
    de la llista (el primer de `segments_a` amb el primer de `segments_b`,
    etc.), que és exactament l'aparellament que decideix la `nota` de
    152a-f: el primer amb el primer i el segon amb el segon, comptant des
    del vèrtex.

    `incognita` és l'etiqueta (per exemple `"x"`, `"BC"`) que apareix al
    `<title>` de la figura, per si l'enunciat parla de "quant val BC" i BC
    no és directament el nom d'un dels punts dibuixats sinó una resta de
    dos punts (153): la figura per si sola no pot marcar-la com a segment,
    però el títol deixa clar sobre quins punts cal treballar.

    tales([("A", 2.5), ("B", (3.75, "x"))], [("A'", 2), ("B'", 3)], "x")
        -> proporció directa de dos punts a cada secant, 152a. La
        incògnita val 3.75 (2.5:2 = 3.75:3), i és aquest valor —no un de
        triat a l'atzar— el que manté les dues transversals paral·leles.
    tales([("A", 2), ("B", 5), ("C", None)],
        [("A'", 2.6), ("B'", None), ("C'", 11.7)], "BC")
        -> posició de Tales des d'O amb tres punts per secant, 153a
    """
    assert len(segments_a) == len(segments_b) and len(segments_a) in (2, 3), \
        "tales(): calen 2 o 3 punts marcats, en el mateix nombre a cada secant"
    n = len(segments_a)

    def valors(seg):
        return [v for _, v in seg]

    def es_incognita(v):
        return isinstance(v, tuple) and len(v) == 2 and v[1] == "x"

    def valor_numeric(v):
        """El número real a fer servir per a la GEOMETRIA, tant si `v` és
        un número solt com si és la tupla `(num, "x")` de la incògnita."""
        return v[0] if es_incognita(v) else v

    def buits(seg):
        return {i for i, (_, v) in enumerate(seg) if v is None}

    def incog(seg):
        return {i for i, (_, v) in enumerate(seg) if es_incognita(v)}

    buit_a, buit_b = buits(segments_a), buits(segments_b)
    x_a, x_b = incog(segments_a), incog(segments_b)
    assert len(x_a) + len(x_b) <= 1, "tales(): com a màxim una incògnita"
    for seg in (segments_a, segments_b):
        for _, v in seg:
            assert v is None or isinstance(v, (int, float)) or es_incognita(v), \
                'tales(): cada valor ha de ser un nombre, None, o (nombre, "x")'
    # Cada secant necessita com a mínim UN punt dibuixat (a més d'O, que
    # ja és comú a totes dues) per quedar geomètricament definida: les
    # paral·leles uneixen punts d'una secant amb l'altra, no dos punts
    # dins la mateixa secant, així que no calen dos punts propis.
    assert n - len(buit_a) >= 1, \
        "tales(): cal com a mínim un punt dibuixat a la secant a"
    assert n - len(buit_b) >= 1, \
        "tales(): cal com a mínim un punt dibuixat a la secant b"
    assert (n - len(buit_a)) + (n - len(buit_b)) >= 3, \
        "tales(): calen com a mínim tres punts dibuixats en total, o no " \
        "hi ha prou parelles per fixar cap proporció"

    # Escala ÚNICA i purament multiplicativa (dibuix = k · real, sense
    # terme additiu) aplicada a TOTES DUES secants alhora, INCLOENT EL
    # VALOR REAL DE LA INCÒGNITA: és l'única manera de garantir que les
    # transversals surtin paral·leles de veritat, pel recíproc del
    # teorema de Tales (si OA/OA' = OB/OB' aleshores AB//A'B'). Una
    # escala afí (com fa `_escalat` en general, pensada per llegibilitat
    # visual en altres funcions) trenca la proporcionalitat; i assignar a
    # la incògnita una posició "raonable" en lloc del seu valor real
    # trenca la igualtat de raons que fa que el recíproc s'apliqui.
    #
    # (Bugs reals detectats en revisió visual de 152a: primer, escalant
    # cada secant per separat amb `_escalat`, els dos segments
    # transversals sortien amb pendents clarament diferents; després,
    # fins i tot amb un factor d'escala compartit, seguien sense
    # coincidir perquè la incògnita es dibuixava a una distància inventada
    # que no complia la proporció real de l'exercici.)
    tots_coneguts = [valor_numeric(v) for v in valors(segments_a) + valors(segments_b)
                     if v is not None]
    assert tots_coneguts, "tales(): cap valor numèric a cap secant"
    max_real = max(tots_coneguts)
    k = 130.0 / max_real

    def per_dibuix(seg):
        return [0 if v is None else valor_numeric(v) * k for v in valors(seg)]

    dibuix_a = per_dibuix(segments_a)
    dibuix_b = per_dibuix(segments_b)
    # un punt None es dibuixa igualment (a una distància per defecte)
    # perquè les paral·leles necessiten un extrem on ancorar-se, encara
    # que aquell punt en concret no s'etiqueti.

    # -------------------------------------------------------------
    # Fase 1: geometria pura, sense generar cap tros d'SVG encara.
    # La secant "b" sempre s'obre per sobre de la "a" (mig angle a cada
    # banda), i el marc final es calcula a POSTERIORI a partir de les
    # coordenades reals que s'acaben fent servir —punts i etiquetes—, en
    # lloc d'una fórmula a priori que hauria d'endevinar quant ocupa cada
    # combinació possible d'angle i longituds.
    # -------------------------------------------------------------
    ORIGEN = (0.0, 0.0)
    ang_a, ang_b = -angle / 2.0, angle / 2.0

    def acumula(dibuix, ang):
        pts, acc = [ORIGEN], 0.0
        for d in dibuix:
            acc += d
            pts.append(_punt(ORIGEN, ang, acc))
        return pts

    # Amb `dibuix_a`/`dibuix_b` ja escalats pel mateix factor `k` (fase
    # anterior), les distàncies acumulades des d'O preserven la proporció
    # real entre totes dues secants, i per tant els segments que uneixen
    # punts corresponents surten paral·lels de veritat: és la construcció
    # geomètrica pròpia de Tales, sense necessitat de forçar-ho amb cap
    # intersecció.
    pts_a = acumula(dibuix_a, ang_a)
    pts_b = acumula(dibuix_b, ang_b)

    def etiqueta_de(seg, i):
        """El text (posició, valor -> mida i contingut) de l'etiqueta pel
        punt i-èsim d'una secant, o `None` si aquell punt no se n'ha de
        posar (és un `None` de l'entrada). La incògnita es mostra sempre
        com a "x", encara que internament es faci servir el seu valor
        numèric real per situar el punt correctament."""
        _, v = seg[i]
        if v is None:
            return None
        return "x" if es_incognita(v) else _fmt(v)

    # Bounding box: el vèrtex O, els punts finals de cada secant, i cada
    # etiqueta (aproximant-ne l'amplada segons el nombre de caràcters).
    caixa_x = [ORIGEN[0], pts_a[-1][0], pts_b[-1][0]]
    caixa_y = [ORIGEN[1], pts_a[-1][1], pts_b[-1][1]]

    def afegeix_caixa_etiqueta(p, txt, signe):
        y = p[1] + signe * 14
        mig_ample = 2.4 * len(txt) + 2
        caixa_x.extend((p[0] - mig_ample, p[0] + mig_ample))
        caixa_y.extend((y - 8, y + 8))

    for i in range(n):
        txt = etiqueta_de(segments_a, i)
        if txt is not None:
            afegeix_caixa_etiqueta(pts_a[i + 1], txt, +1)
        txt = etiqueta_de(segments_b, i)
        if txt is not None:
            afegeix_caixa_etiqueta(pts_b[i + 1], txt, -1)
    # la lletra "O" al costat del vèrtex
    caixa_x.append(ORIGEN[0] - 16)
    caixa_y.extend((ORIGEN[1] - 8, ORIGEN[1] + 8))

    marge = 8
    despl = (marge - min(caixa_x), marge - min(caixa_y))
    amplada = max(caixa_x) - min(caixa_x) + 2 * marge
    alcada = max(caixa_y) - min(caixa_y) + 2 * marge

    def tr(p):
        return (p[0] + despl[0], p[1] + despl[1])

    O2 = tr(ORIGEN)
    pts_a = [tr(p) for p in pts_a]
    pts_b = [tr(p) for p in pts_b]

    # -------------------------------------------------------------
    # Fase 2: ara sí, generar el marcatge, amb totes les coordenades ja
    # definitives.
    # -------------------------------------------------------------
    cos = _linia(O2, pts_a[-1]) + _linia(O2, pts_b[-1])
    for i in range(1, n + 1):
        # Només es dibuixa la transversal si TOTS DOS extrems tenen un
        # valor real (conegut o la incògnita): si un dels dos és `None`,
        # la línia no representaria cap dada de l'exercici i només
        # confonia (bug real detectat en revisió: a 153a, la posició
        # buida B/B' es dibuixava igualment com una diagonal que no és
        # paral·lela a res, perquè no hi ha cap proporció darrere).
        if segments_a[i - 1][1] is None or segments_b[i - 1][1] is None:
            continue
        marcada = (i - 1 in x_a) or (i - 1 in x_b)
        cos += _linia(pts_a[i], pts_b[i],
                      color=MARCA if marcada else "currentColor")
    cos += _text(O2[0] - 6, O2[1] + 4, "O", ancora="end")

    for i in range(n):
        txt = etiqueta_de(segments_a, i)
        if txt is not None:
            p = pts_a[i + 1]
            cos += _text(p[0], p[1] + 14, txt, petit=True)
        txt = etiqueta_de(segments_b, i)
        if txt is not None:
            p = pts_b[i + 1]
            cos += _text(p[0], p[1] - 14, txt, petit=True)

    return _svg(int(math.ceil(amplada)), int(math.ceil(alcada)), cos,
                "Dues rectes secants que surten d'un mateix punt O, "
                "tallades per un joc de rectes paral·leles, amb els punts "
                "%s marcats." % incognita)


# ---------------------------------------------------------------------
def parella_semblants(costats_a, costats_b, angle_igual=None, angle_recte=False):
    """Dos triangles costat a costat amb els costats homòlegs etiquetats:
    la parella de triangles semblants de 154/155.

    `costats_a` i `costats_b` són cadascun una llista de 3 parells
    `(etiqueta, valor)` pel triangle petit i el gran respectivament, en
    l'ordre (base, lateral esquerre, lateral dret). `valor` pot ser:

    - un nombre: la mesura real d'aquell costat;
    - la cadena `"x"`: la incògnita (es dibuixa sense mesura);
    - `None`: no es coneix ni cal etiquetar-lo (per exemple, quan
      l'exercici només dona 2 costats de cada triangle).

    Els dos triangles es dibuixen a mides DIFERENTS quan la raó de
    semblança ho justifica, però amb un mínim garantit pel petit: la raó
    visual mai supera 1:3 encara que la raó real de l'exercici sigui molt
    més gran, perquè el triangle petit no acabi essent un traç
    il·legible (restricció 3 del brief). Aquest capat és només visual: la
    incògnita continua calculant-se amb la raó real, que és a l'enunciat.

    `angle_igual`, si es dona, és una parella `(vertex_a, vertex_b)` amb
    els noms `"base_esq"`, `"base_dre"` o `"cim"` que indica quins dos
    angles —un a cada triangle— són els que es marquen amb un mateix arc
    de color per fer visible el criteri AA. Es fa servir només quan
    l'enunciat esmenta explícitament que aquell angle és compartit; en cap
    cas s'hi afegeix un angle recte o una marca que l'enunciat no doni.

    `angle_recte`, independent de `angle_igual`, indica que el vèrtex
    `base_esq` de TOTS DOS triangles és, de veritat, de $90°$ (com als
    triangles rectangles de 155d): en aquest cas la figura el dibuixa
    perpendicular de veritat, en lloc de confiar en la forma aproximada
    que dona `_tercer_vertex` quan falta el tercer costat. Es fa servir
    NOMÉS quan l'enunciat diu explícitament que el triangle és rectangle
    per aquell vèrtex; amb `angle_igual` sol però `angle_recte=False`
    (el cas per defecte), l'arc marca l'angle compartit sense assumir cap
    valor concret —important per 155a/b, on l'angle comprès és de $80°$ o
    $65°$, no recte.

    parella_semblants([("", 2), ("", 3), ("", None)],
                       [("", 5), ("", "x"), ("", None)])
        -> dos costats coneguts a cada triangle, un per calcular, 154a
    parella_semblants([("AB", 4), ("BC", 6), ("CA", 5)],
                       [("DE", 6), ("EF", 9), ("FD", 7.5)])
        -> tots els costats coneguts, per decidir si són semblants, 155a
    parella_semblants([("", 3), ("", 5), ("", None)],
                       [("", 10), ("", 13), ("", None)],
                       angle_igual=("base_esq", "base_esq"), angle_recte=True)
        -> catets coneguts, angle recte compartit, hipotenusa no donada, 155d
    """
    assert len(costats_a) == 3 and len(costats_b) == 3, \
        "parella_semblants(): calen exactament 3 costats per triangle"

    def valors(costats):
        return [v for _, v in costats]

    v_a, v_b = valors(costats_a), valors(costats_b)
    coneguts = [v for v in v_a + v_b if isinstance(v, (int, float))]
    assert coneguts, "parella_semblants(): cap costat numèric a cap triangle"

    # Mida "de referència" per triangle: la mitjana dels costats numèrics
    # d'aquell triangle en concret (si no en té cap —tot None/"x", cas que
    # no hauria de donar-se en un exercici real—, es fa servir la mitjana
    # global perquè encara hi hagi ALGUNA proporció per triar).
    def referencia(vals):
        propis = [v for v in vals if isinstance(v, (int, float))]
        return sum(propis) / len(propis) if propis else sum(coneguts) / len(coneguts)

    ref_a, ref_b = referencia(v_a), referencia(v_b)
    # base de dibuix del triangle "a": sempre 90px. La del "b" segueix la
    # raó real ref_b/ref_a, però CAPADA a la banda [90/3, 90*3]: aquesta
    # és la restricció visual del brief.
    BASE_A = 90.0
    raó = ref_b / ref_a if ref_a else 1.0
    raó_visual = max(1 / 3.0, min(3.0, raó))
    BASE_B = BASE_A * raó_visual

    def mida_triangle(costats, base_dibuix, ref, angle_recte_a=False):
        """Retorna els 3 vèrtexs (A, B, C) del triangle a mida de dibuix.
        Si `angle_recte_a` és cert, l'angle a A es dibuixa exactament
        recte (C directament per damunt d'A) en lloc de confiar en la
        forma per defecte de `_tercer_vertex`: fa falta quan `angle_igual`
        marca aquest vèrtex com a recte però l'enunciat no dona el tercer
        costat (la hipotenusa) per fixar-ho per si sol —posar-hi la
        hipotenusa com a valor numèric la dibuixaria etiquetada, i
        l'enunciat no la dona."""
        (_, base_v), (_, esq_v), (_, dre_v) = costats
        # costats laterals a mida de dibuix: si són coneguts, escalats a
        # la mateixa raó que la base (base_real -> base_dibuix); si no,
        # `None` perquè `_tercer_vertex` triï una forma per defecte.
        factor = base_dibuix / ref if ref else 1.0

        def escala(v):
            return v * factor if isinstance(v, (int, float)) else None

        lat_esq_dibuix = escala(esq_v)
        lat_dre_dibuix = escala(dre_v)
        A = (0.0, 0.0)
        B = (base_dibuix, 0.0)
        if angle_recte_a and lat_esq_dibuix is not None:
            C = (0.0, -lat_esq_dibuix)
        else:
            C = _tercer_vertex(base_dibuix, lat_esq_dibuix, lat_dre_dibuix)
        return A, B, C

    recte_a = angle_recte and angle_igual is not None and angle_igual[0] == "base_esq"
    recte_b = angle_recte and angle_igual is not None and angle_igual[1] == "base_esq"
    A1, B1, C1 = mida_triangle(costats_a, BASE_A, ref_a, recte_a)
    A2, B2, C2 = mida_triangle(costats_b, BASE_B, ref_b, recte_b)

    # separació horitzontal entre els dos triangles: prou perquè les
    # etiquetes no es toquin, proporcional a les mides dels dos triangles.
    buit = 46 + 0.15 * (BASE_A + BASE_B)
    despl2 = BASE_A + buit - min(A2[0], B2[0], C2[0])
    A2 = (A2[0] + despl2, A2[1])
    B2 = (B2[0] + despl2, B2[1])
    C2 = (C2[0] + despl2, C2[1])

    cos = _triangle(A1, B1, C1) + _triangle(A2, B2, C2)

    def etiquetes_triangle(costats, A, B, C):
        out = ""
        caixes = []
        vertexs_costat = [(A, B), (A, C), (B, C)]
        for (etq, v), (p1, p2) in zip(costats, vertexs_costat):
            if v is None:
                continue
            mig = ((p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2)
            # desplaça l'etiqueta cap enfora del triangle (perpendicular
            # al costat, en la direcció oposada al tercer vèrtex): si el
            # vector (mig - tercer) ja té projecció positiva sobre la
            # normal (nx,ny), aquesta normal ja apunta cap enfora i no
            # s'ha d'invertir; si la projecció és negativa, apunta cap
            # endins i cal girar-la.
            altres = [q for q in (A, B, C) if q not in (p1, p2)]
            tercer = altres[0]
            vx, vy = p2[0] - p1[0], p2[1] - p1[1]
            norma = math.hypot(vx, vy) or 1
            nx, ny = -vy / norma, vx / norma
            apunta_endins = ((mig[0] - tercer[0]) * nx
                            + (mig[1] - tercer[1]) * ny) < 0
            if apunta_endins:
                nx, ny = -nx, -ny
            txt = "x" if v == "x" else _fmt(v)
            # L'ancoratge per defecte de `_text` és centrat: en un costat
            # que s'inclina cap a l'esquerra (normal amb nx clarament
            # negativa), un text centrat encara envaeix el triangle amb la
            # seva meitat dreta. S'ancora a "end" en aquest cas (tot el
            # text cau a l'esquerra del punt) i a "start" en el cas
            # simètric; en costats gairebé verticals o horitzontals es
            # deixa centrat, que ja queda bé.
            dist = 18
            if nx < -0.3:
                ancora, dist = "end", 20
            elif nx > 0.3:
                ancora, dist = "start", 20
            else:
                ancora = "middle"
            px, py = mig[0] + nx * dist, mig[1] + ny * dist + 4
            out += _text(px, py, txt, petit=True, ancora=ancora)
            # caixa aproximada del text, segons l'ancoratge real fet servir
            ample_txt = 5.2 * len(txt)
            if ancora == "start":
                caixes.append((px, px + ample_txt, py - 9, py + 3))
            elif ancora == "end":
                caixes.append((px - ample_txt, px, py - 9, py + 3))
            else:
                caixes.append((px - ample_txt / 2, px + ample_txt / 2,
                               py - 9, py + 3))
        return out, caixes

    svg_a, caixes_a = etiquetes_triangle(costats_a, A1, B1, C1)
    svg_b, caixes_b = etiquetes_triangle(costats_b, A2, B2, C2)
    cos += svg_a + svg_b

    if angle_igual is not None:
        nom_a, nom_b = angle_igual
        vertex_de = {"base_esq": ("A", "B", "C"), "base_dre": ("B", "A", "C"),
                     "cim": ("C", "A", "B")}
        mapa1 = {"A": A1, "B": B1, "C": C1}
        mapa2 = {"A": A2, "B": B2, "C": C2}
        v1, p1a, p1b = vertex_de[nom_a]
        v2, p2a, p2b = vertex_de[nom_b]
        cos += _arc_angle(mapa1[v1], mapa1[p1a], mapa1[p1b], 15, MARCA)
        cos += _arc_angle(mapa2[v2], mapa2[p2a], mapa2[p2b], 15, MARCA)

    caixa_x = [p[0] for p in (A1, B1, C1, A2, B2, C2)]
    caixa_y = [p[1] for p in (A1, B1, C1, A2, B2, C2)]
    for x0, x1, y0, y1 in caixes_a + caixes_b:
        caixa_x += [x0, x1]
        caixa_y += [y0, y1]
    marge = 12
    amplada = max(caixa_x) - min(caixa_x) + 2 * marge
    alcada = max(caixa_y) - min(caixa_y) + 2 * marge
    # Els vèrtexs es calculen amb A=(0,0) de cada triangle com a origen
    # local; com que el triangle pot pujar per sobre de y=0 (el cim va
    # amb y negativa) o el segon triangle pot començar en x>0, es
    # trasllada tot el grup un únic cop amb <g transform>, en lloc de
    # repintar cada coordenada ja generada.
    despl = (marge - min(caixa_x), marge - min(caixa_y))
    return _svg(int(math.ceil(amplada)), int(math.ceil(alcada)),
                '<g transform="translate(%.2f,%.2f)">%s</g>'
                % (despl[0], despl[1], cos),
                "Dos triangles semblants amb els costats corresponents "
                "marcats.")


# ---------------------------------------------------------------------
def escala_regla(unitat_dibuix_num, unitat_dibuix_text, valor_real_text,
                 marques=4):
    """Una barra d'escala gràfica: una regla graduada on cada interval
    representa `valor_real_text` de la realitat per cada
    `unitat_dibuix_num` `unitat_dibuix_text` del dibuix. Pensada per 156 i
    285, on l'exercici parla d'una escala numèrica ($1$ cm $\\to$ tants cm
    reals) i la figura la fa tangible mostrant-la com una regla, no només
    com un quocient.

    `unitat_dibuix_num` és el nombre (típicament `1`) i `unitat_dibuix_text`
    la unitat («cm», «mm»...) que hi va darrere: es mostren per separat
    perquè cada marca de la regla repeteix la unitat amb el seu propi
    múltiple (1 cm, 2 cm, 3 cm...), no el mateix text clonat sense sentit.
    `valor_real_text` ja ve formatat sencer (per exemple `"2 km"`), perquè
    la magnitud real pot canviar d'unitat i això no es pot deduir aquí.
    `marques` és el nombre d'intervals de la regla (per defecte 4, prou
    perquè es vegi com una escala repetida i no com una sola mesura
    aïllada).

    escala_regla(1, "cm", "2 km")
        -> 156a: 1 cm al plànol = 2 km reals
    """
    assert marques >= 2, "escala_regla(): calen com a mínim 2 intervals"
    pas = 44
    alt = 12
    y0 = 30
    x_ini = 20

    def x_de(i):
        return x_ini + i * pas

    # Barra: intervals alterns ombrejats perquè es llegeixi com una escala
    # gràfica real (blanc/ombra alternats) i no com una simple recta
    # graduada; les marques verticals i la línia base es dibuixen per
    # damunt de l'ombrejat.
    cos = ""
    for i in range(0, marques, 2):
        cos += ('<rect x="%.2f" y="%.2f" width="%.2f" height="%.2f" '
               'fill="%s"/>' % (x_de(i), y0 - alt, pas, 2 * alt, OMPLERT))
    for i in range(marques + 1):
        cos += _linia((x_de(i), y0 - alt), (x_de(i), y0 + alt))
    cos += _linia((x_de(0), y0), (x_de(marques), y0))

    cos += _text(x_de(0), y0 + alt + 18, "0", petit=True)
    for i in range(1, marques + 1):
        cos += _text(x_de(i), y0 + alt + 18,
                    "%g %s" % (i * unitat_dibuix_num, unitat_dibuix_text),
                    petit=True)
    cos += _text(x_de(marques) / 2, y0 - alt - 10,
                "cada interval = %s" % valor_real_text, petit=True)

    amplada = x_de(marques) + x_ini
    alcada = y0 + alt + 34
    return _svg(int(amplada), int(alcada), cos,
                "Regla d'escala gràfica: cada interval del dibuix, de "
                "%g %s, representa %s de la realitat."
                % (unitat_dibuix_num, unitat_dibuix_text, valor_real_text))


# ---------------------------------------------------------------------
def figures_semblants_k(k, tipus="quadrat"):
    """Dues figures semblants amb la raó `k` marcada en un parell de
    costats homòlegs: la parella de 290-294.

    RESTRICCIÓ CLAU (regla 4 del brief): la figura mostra `k`, la raó
    entre longituds, i PROU. Mai hi apareix el quocient d'àrees ($k^2$) ni
    de volums ($k^3$) enlloc —ni en una etiqueta, ni en la mida relativa
    exacta de les dues formes—: aquest bloc existeix perquè bona part de
    l'alumnat creu que una maqueta a escala $1:2$ té la meitat de volum, i
    una figura que ja respongués la pregunta desactivaria l'exercici. Per
    això, igual que a `parella_semblants`, la mida VISUAL de la segona
    figura es capa (mai passa de 3 vegades la primera, encara que `k`
    sigui més gran), i la mida no és mai el mitjà pel qual es podria
    deduir l'àrea o el volum: només hi ha una etiqueta de longitud a cada
    figura, amb el mateix valor simbòlic `1` i `k` —mai un número real de
    l'enunciat, que és el que canvia segons l'apartat i el que la figura
    no ha de fer visible.

    `tipus` tria la forma: `"quadrat"` o `"rectangle"` (dues dimensions,
    per als exercicis d'àrea, 290/291/293a) o `"cub"` (tres dimensions,
    dibuixat en perspectiva senzilla, per als de volum, 292/293b/294).
    `"triangle"` és la forma neutra per defecte quan l'exercici no parla
    encara ni d'àrea ni de volum (290, la raó tota sola).

    figures_semblants_k(3, "triangle")   -> 290a (només la raó)
    figures_semblants_k(2.5, "quadrat")  -> 291c (raó abans de l'àrea)
    figures_semblants_k(3, "cub")        -> 292a (raó abans del volum)
    """
    assert tipus in ("triangle", "quadrat", "rectangle", "cub"), \
        "figures_semblants_k(): tipus no reconegut"
    assert k > 0, "figures_semblants_k(): la raó ha de ser positiva"

    MIDA_A = 60.0
    raó_visual = max(1 / 3.0, min(3.0, k))
    MIDA_B = MIDA_A * raó_visual

    def cara_plana(mida, x0):
        """Vèrtexs d'una figura 2D (quadrat, rectangle o triangle) de mida
        `mida`, amb el cantó inferior esquerre a `x0` i base a y=0
        (creixent cap amunt en y negativa, com la resta del mòdul)."""
        if tipus == "triangle":
            return [(x0, 0), (x0 + mida, 0), (x0 + mida * 0.5, -mida * 0.85)]
        if tipus == "rectangle":
            alt = mida * 0.62
            return [(x0, 0), (x0 + mida, 0), (x0 + mida, -alt), (x0, -alt)]
        return [(x0, 0), (x0 + mida, 0), (x0 + mida, -mida), (x0, -mida)]  # quadrat

    def cares_cub(mida, x0):
        """Les tres cares visibles d'un cub en perspectiva senzilla: front
        (quadrat), superior i lateral dret (paral·lelograms desplaçats en
        diagonal). No pretén ser una projecció isomètrica exacta —això és
        cosa de `figures/cossos.py`, no d'aquí— només prou perquè es
        llegeixi com a volum d'un cop d'ull i es distingeixi clarament
        d'una figura plana. Torna també el conjunt de TOTS els vèrtexs,
        perquè qui crida pugui calcular-ne el bounding box real."""
        d = mida * 0.34
        A, B, C, D = (x0, 0), (x0 + mida, 0), (x0 + mida, -mida), (x0, -mida)
        A2 = (A[0] + d, A[1] - d)
        B2 = (B[0] + d, B[1] - d)
        C2 = (C[0] + d, C[1] - d)
        D2 = (D[0] + d, D[1] - d)
        front = [A, B, C, D]
        superior = [D, C, C2, D2]
        lateral = [B, C, C2, B2]
        tots = [A, B, C, D, A2, B2, C2, D2]
        return front, superior, lateral, tots

    def dibuixa(mida, x0):
        """Retorna (svg, (p1, p2), tots_els_vertexs) per a una figura
        —plana o cub— de mida `mida` amb origen `x0`. `(p1, p2)` és el
        costat que es marca amb la longitud simbòlica; `tots_els_vertexs`
        serveix per calcular el marc final."""
        if tipus != "cub":
            punts = cara_plana(mida, x0)
            return _poligon(punts), (punts[0], punts[1]), punts
        front, superior, lateral, tots = cares_cub(mida, x0)
        svg = (_poligon(lateral) + _poligon(superior) + _poligon(front))
        A, B = tots[0], tots[1]
        return svg, (A, B), tots

    svg_a, costat_a, verts_a = dibuixa(MIDA_A, 0)
    buit = 46 + 0.22 * (MIDA_A + MIDA_B)
    x0_b = MIDA_A + buit
    svg_b, costat_b, verts_b = dibuixa(MIDA_B, x0_b)

    cos = svg_a + svg_b

    # Etiqueta de longitud SIMBÒLICA a cada figura: "1" a la petita, "k" a
    # la gran. Mai un valor numèric real, perquè aquest bloc precisament
    # amaga la relació d'àrees/volums fins que l'alumne l'ha treballada.
    def etiqueta_costat(p1, p2, txt):
        mig = ((p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2)
        return _text(mig[0], mig[1] + 16, txt, petit=True)

    cos += etiqueta_costat(costat_a[0], costat_a[1], "1")
    cos += etiqueta_costat(costat_b[0], costat_b[1], "k")

    # Marc final a partir del bounding box REAL de tots els vèrtexs (de
    # totes dues figures) més un marge fix, incloent l'espai que ocupa
    # l'etiqueta per sota de la base (que és on sempre cauen: la base és
    # sempre y=0, el punt més avall de cada figura).
    tots_x = [p[0] for p in verts_a + verts_b]
    tots_y = [p[1] for p in verts_a + verts_b]
    marge = 16
    x_min, x_max = min(tots_x) - marge, max(tots_x) + marge
    y_min, y_max = min(tots_y) - marge, max(tots_y) + marge + 20  # +20: etiqueta sota la base
    amplada = x_max - x_min
    alcada = y_max - y_min
    despl = (-x_min, -y_min)

    return _svg(int(math.ceil(amplada)), int(math.ceil(alcada)),
                '<g transform="translate(%.2f,%.2f)">%s</g>'
                % (despl[0], despl[1], cos),
                "Dues figures semblants, amb la raó entre un parell de "
                "costats corresponents marcada.")


# ---------------------------------------------------------------------
def ombra(altura_1, ombra_1, altura_2, ombra_2, etq_1="", etq_2="",
         linia_solida=False, unitat="m"):
    """Dos triangles rectangles semblants formats per un costat vertical
    i un costat horitzontal, amb la mateixa inclinació de la diagonal als
    dos: el patró comú a 161/163/164 (ombra sota el mateix sol), però
    també a 166 (l'alçada d'un observador i la seva distància a la vora
    versus l'alçada de la muntanya reflectida i la seva distància) i a
    168/169 (una alineació visual o un reflex en aigua) —geomètricament
    són la mateixa figura amb un altre nom per a la diagonal, així que
    aquesta funció no assumeix que és «el sol»: dibuixa la diagonal com a
    traç discontinu perquè es llegeixi com una LÍNIA DE REFERÈNCIA
    (raig, visual o reflex) i no com un dels catets del triangle.

    `altura_1`/`ombra_1` són el costat vertical i l'horitzontal del
    primer triangle (el que sol donar-se complet a l'enunciat); `altura_2`
    /`ombra_2`, les del segon. Cada valor pot ser un nombre, o la cadena
    `"x"` per marcar la incògnita (sense mesura, igual que a `tales`).
    Només un dels quatre pot ser `"x"`.

    `etq_1`/`etq_2` són noms curts opcionals sota cada triangle (per
    exemple `"arbre"` / `"edifici"`, o `"Anna"` / `"muntanya"`); si es
    deixen buits no es dibuixa cap etiqueta de nom, només les mesures.

    `unitat` és la unitat que porten les etiquetes numèriques (`"m"` per
    defecte, perquè tots els exercicis 161-169 fan servir metres —fins i
    tot quan l'enunciat parteix de quilòmetres, com 166, ja els converteix
    a metres abans de plantejar la proporció).

    `linia_solida` es deixa a `False` per defecte (traç discontinu, el
    cas habitual: raig de sol, visual o reflex). No s'ha fet servir mai a
    `"True"` fins ara als exercicis d'aquesta via, però es deixa com a
    escapatòria per si un futur apartat volgués un costat real del
    triangle en comptes d'una línia de referència.

    ombra(8, 10, 15, "x", "arbre petit", "arbre gran")
        -> 161: mateixa hora, dos arbres, es demana l'ombra del segon
    ombra(1.70, 5, "x", 3000, "Anna", "muntanya")
        -> 166: mateix patró, però la diagonal és un reflex, no el sol
    """
    valors = [altura_1, ombra_1, altura_2, ombra_2]
    incognites = [v for v in valors if v == "x"]
    assert len(incognites) <= 1, "ombra(): com a màxim una incògnita"
    for v in valors:
        assert v == "x" or isinstance(v, (int, float)), \
            "ombra(): cada valor ha de ser un nombre o \"x\""

    # El pendent hipotenusa/base (alçada:ombra) és el MATEIX als dos
    # triangles (és tota la base matemàtica de l'exercici: dos triangles
    # rectangles semblants), així que primer es calcula el valor REAL de
    # la incògnita, si n'hi ha, a partir d'aquest pendent —mai un valor
    # "raonable" triat a ull—, i després es dibuixen els DOS triangles amb
    # el mateix pendent EXACTE. Reescalar alçades i ombres per separat amb
    # `_escalat` (com es feia abans) trenca el pendent perquè cada grup es
    # normalitza al seu propi rang, i és justament el pendent el que
    # l'enunciat i el <title> diuen que s'ha de poder comparar a cop d'ull.
    if altura_1 == "x":
        pendent = altura_2 / ombra_2
        altura_1_real, ombra_1_real = pendent * ombra_1, ombra_1
        altura_2_real, ombra_2_real = altura_2, ombra_2
    elif ombra_1 == "x":
        pendent = altura_2 / ombra_2
        altura_1_real, ombra_1_real = altura_1, altura_1 / pendent
        altura_2_real, ombra_2_real = altura_2, ombra_2
    elif altura_2 == "x":
        pendent = altura_1 / ombra_1
        altura_1_real, ombra_1_real = altura_1, ombra_1
        altura_2_real, ombra_2_real = pendent * ombra_2, ombra_2
    elif ombra_2 == "x":
        pendent = altura_1 / ombra_1
        altura_1_real, ombra_1_real = altura_1, ombra_1
        altura_2_real, ombra_2_real = altura_2, altura_2 / pendent
    else:
        pendent = altura_1 / ombra_1
        altura_1_real, ombra_1_real = altura_1, ombra_1
        altura_2_real, ombra_2_real = altura_2, ombra_2

    # Cada triangle es dimensiona per separat perquè quedi llegible encara
    # que els dos objectes reals siguin de mides molt diferents (una
    # muntanya i una persona, a 166): l'ombra de cada triangle es porta a
    # un rang de dibuix fix segons la seva mida REAL relativa a l'altra
    # ombra, i l'alçada de dibuix es DERIVA sempre d'aquesta ombra de
    # dibuix multiplicant pel `pendent` real —mai a l'inrevés—, que és el
    # que garanteix que els dos triangles surtin amb la mateixa inclinació.
    s1, s2 = _escalat([ombra_1_real, ombra_2_real], 50, 110)
    h1, h2 = s1 * pendent, s2 * pendent

    def triangle_ombra(h, s, x0):
        """Peu a (x0, 0), costat vertical fins a (x0, -h), costat
        horitzontal fins a (x0+s, 0): la diagonal que els uneix (discontínua)
        és la línia de referència —sol, visual o reflex, segons l'exercici."""
        peu = (x0, 0.0)
        cim = (x0, -h)
        extrem = (x0 + s, 0.0)
        svg = (_linia(peu, cim)          # el costat vertical
               + _linia(peu, extrem)     # el costat horitzontal
               + _linia(cim, extrem, guions=not linia_solida))  # la diagonal
        return svg, peu, cim, extrem

    buit = 40
    svg1, peu1, cim1, extrem1 = triangle_ombra(h1, s1, 0)
    svg2, peu2, cim2, extrem2 = triangle_ombra(h2, s2, extrem1[0] + buit)

    cos = svg1 + svg2

    def etiqueta_valor(p1, p2, v, sota=True):
        """Etiqueta el costat p1-p2 amb el seu valor (o `x`). Els costats
        verticals (l'alçada de l'objecte, p1[0]==p2[0]) es lleigen amb
        l'etiqueta desplaçada a l'esquerra de la línia; els horitzontals
        (l'ombra), centrada per sota."""
        mig = ((p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2)
        txt = "x" if v == "x" else _fmt(v, unitat)
        vertical = p1[0] == p2[0]
        if vertical:
            return _text(mig[0] - 10, mig[1] + 4, txt, petit=True, ancora="end")
        signe = 1 if sota else -1
        return _text(mig[0], mig[1] + signe * 15, txt, petit=True)

    cos += etiqueta_valor(peu1, cim1, altura_1)
    cos += etiqueta_valor(peu1, extrem1, ombra_1)
    cos += etiqueta_valor(peu2, cim2, altura_2)
    cos += etiqueta_valor(peu2, extrem2, ombra_2)

    if etq_1:
        cos += _text((peu1[0] + extrem1[0]) / 2, 34, etq_1, petit=True)
    if etq_2:
        cos += _text((peu2[0] + extrem2[0]) / 2, 34, etq_2, petit=True)

    marge = 30
    tots_x = [peu1[0], cim1[0], extrem1[0], peu2[0], cim2[0], extrem2[0]]
    tots_y = [peu1[1], cim1[1], extrem1[1], peu2[1], cim2[1], extrem2[1]]
    x_min, x_max = min(tots_x) - marge - 22, max(tots_x) + marge
    y_min, y_max = min(tots_y) - marge, max(tots_y) + marge + (18 if (etq_1 or etq_2) else 0)
    amplada = x_max - x_min
    alcada = y_max - y_min
    despl = (-x_min, -y_min)

    return _svg(int(math.ceil(amplada)), int(math.ceil(alcada)),
                '<g transform="translate(%.2f,%.2f)">%s</g>'
                % (despl[0], despl[1], cos),
                "Dos triangles rectangles semblants, cadascun amb un "
                "costat vertical i un costat horitzontal, units per una "
                "mateixa línia de referència amb la mateixa inclinació.")
