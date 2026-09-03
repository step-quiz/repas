# -*- coding: utf-8 -*-
"""auditoria.py — mesura objectivament la qualitat de col·locació de les
etiquetes d'una figura SVG del projecte.

Cinc defectes, tots derivats de la mateixa dada: la caixa real del text
enfront dels traços reals del dibuix.

  COL      la caixa del text talla un traç
  SOLAP    dues caixes de text es trepitgen
  ORFE     la caixa és lluny de TOT traç (etiqueta despenjada, sense referent)
  FORA     la caixa surt del viewBox declarat
  AMBIG    hi ha un segon traç gairebé tan a prop com el primer
           (no es pot saber què etiqueta)
"""
import math
import re

# .fig-etq { font: 600 12px var(--mono) }  /  .petita { 10.5px }
# Monoespaiada: amplada = n_caràcters x avanç. Avanç ~= 0.61 em.
AVANC = 0.61
ASC, DESC = 0.78, 0.22          # fracció de l'em per damunt/sota la línia base

ORFE_PX = 30.0                  # més lluny que això de tot traç = despenjada
AMBIG_RATIO = 1.35              # 2n traç a menys d'1.35x la distància del 1r


# ---------------------------------------------------------------- geometria
def _dist_punt_segment(px, py, x1, y1, x2, y2):
    dx, dy = x2 - x1, y2 - y1
    den = dx * dx + dy * dy
    if den < 1e-12:
        return math.hypot(px - x1, py - y1)
    t = max(0.0, min(1.0, ((px - x1) * dx + (py - y1) * dy) / den))
    return math.hypot(px - (x1 + t * dx), py - (y1 + t * dy))


def _dist_caixa_segment(caixa, seg, n=48):
    """Distància mínima entre un rectangle i un segment (0 si es toquen)."""
    x0, y0, x1, y1 = caixa
    ax, ay, bx, by = seg
    millor = float("inf")
    for i in range(n + 1):
        t = i / n
        px, py = ax + (bx - ax) * t, ay + (by - ay) * t
        if x0 <= px <= x1 and y0 <= py <= y1:
            return 0.0
        d = math.hypot(max(x0 - px, 0, px - x1), max(y0 - py, 0, py - y1))
        millor = min(millor, d)
    return millor


def _caixes_es_toquen(a, b):
    return not (a[2] <= b[0] or b[2] <= a[0] or a[3] <= b[1] or b[3] <= a[1])


# ---------------------------------------------------------------- parsing
def caixa_text(x, y, ancora, text, petita):
    fs = 10.5 if petita else 12.0
    w = AVANC * fs * len(text)
    if ancora == "middle":
        x0, x1 = x - w / 2, x + w / 2
    elif ancora == "end":
        x0, x1 = x - w, x
    else:
        x0, x1 = x, x + w
    return (x0, y - ASC * fs, x1, y + DESC * fs)


def _arc_a_polilinia(x0, y0, rx, ry, gran, escombrat, x1, y1, n=28):
    """Polilínia que segueix un arc el·líptic de veritat.

    Abans aquí hi havia una aproximació de dues cordes (extrems més un punt
    mig desplaçat a ull). Per a un semicercle, aquestes cordes travessen
    l'interior del cercle de banda a banda, de manera que l'auditoria veia
    traços inexistents al mig de la figura i marcava col·lisions falses a
    qualsevol etiqueta que hi caigués a prop (la corona i la mitja lluna,
    per exemple). Ara es fa la conversió extrems -> centre de
    l'especificació SVG (F.6.5) i es mostreja l'arc real.
    """
    if abs(x0 - x1) < 1e-9 and abs(y0 - y1) < 1e-9:
        return [(x0, y0)]
    rx, ry = abs(rx), abs(ry)
    if rx < 1e-9 or ry < 1e-9:
        return [(x0, y0), (x1, y1)]
    dx2, dy2 = (x0 - x1) / 2.0, (y0 - y1) / 2.0
    # correcció de radis massa petits (F.6.6)
    lam = (dx2 * dx2) / (rx * rx) + (dy2 * dy2) / (ry * ry)
    if lam > 1:
        rx *= math.sqrt(lam)
        ry *= math.sqrt(lam)
    num = rx * rx * ry * ry - rx * rx * dy2 * dy2 - ry * ry * dx2 * dx2
    den = rx * rx * dy2 * dy2 + ry * ry * dx2 * dx2
    coef = math.sqrt(max(num / den, 0.0)) if den > 1e-12 else 0.0
    if bool(gran) == bool(escombrat):
        coef = -coef
    cxp = coef * rx * dy2 / ry
    cyp = -coef * ry * dx2 / rx
    cx = cxp + (x0 + x1) / 2.0
    cy = cyp + (y0 + y1) / 2.0

    def angle(ux, uy, vx, vy):
        na = math.hypot(ux, uy) * math.hypot(vx, vy)
        if na < 1e-12:
            return 0.0
        c = max(-1.0, min(1.0, (ux * vx + uy * vy) / na))
        a = math.acos(c)
        return -a if ux * vy - uy * vx < 0 else a

    t1 = angle(1, 0, (dx2 - cxp) / rx, (dy2 - cyp) / ry)
    dt = angle((dx2 - cxp) / rx, (dy2 - cyp) / ry,
               (-dx2 - cxp) / rx, (-dy2 - cyp) / ry)
    if not escombrat and dt > 0:
        dt -= 2 * math.pi
    elif escombrat and dt < 0:
        dt += 2 * math.pi
    return [(cx + rx * math.cos(t1 + dt * i / n),
             cy + ry * math.sin(t1 + dt * i / n)) for i in range(n + 1)]


def extreu(svg):
    """Retorna (viewBox, [segments], [etiquetes])."""
    vb = re.search(r'viewBox="0 0 ([\d.]+) ([\d.]+)"', svg)
    W, H = (float(vb.group(1)), float(vb.group(2))) if vb else (0.0, 0.0)

    # El motor d'etiquetatge embolcalla el cos en un translate; cal aplicar-lo
    # abans de comparar res amb el viewBox.
    tr = re.search(r'<g transform="translate\(([-\d.]+),([-\d.]+)\)"', svg)
    TX, TY = (float(tr.group(1)), float(tr.group(2))) if tr else (0.0, 0.0)

    segs = []               # CONTINGUT: el que una etiqueta pot mesurar
    anot = []               # anotació: cotes i línies de crida
    marc = []               # eixos: no fan de referent, però tapen
    for m in re.finditer(r'<line([^>]*)x1="([-\d.]+)"[^>]*y1="([-\d.]+)"'
                         r'[^>]*x2="([-\d.]+)"[^>]*y2="([-\d.]+)"', svg):
        atr = m.group(1)
        v = tuple(map(float, m.groups()[1:]))
        if "fig-crida" in atr or "fig-cota" in atr:
            anot.append(v)
        elif "fig-graella" in atr:
            pass            # quadrícula de fons: text per sobre és normal
        elif "fig-eix" in atr:
            marc.append(v)
        else:
            segs.append(v)

    for m in re.finditer(r'<polygon[^>]*points="([^"]+)"', svg):
        pts = [tuple(map(float, p.split(","))) for p in m.group(1).split()]
        for i in range(len(pts)):
            a, b = pts[i], pts[(i + 1) % len(pts)]
            segs.append((a[0], a[1], b[0], b[1]))

    for m in re.finditer(r'<rect[^>]*x="([-\d.]+)"[^>]*y="([-\d.]+)"'
                         r'[^>]*width="([-\d.]+)"[^>]*height="([-\d.]+)"', svg):
        x, y, w, h = map(float, m.groups())
        for a, b in (((x, y), (x + w, y)), ((x + w, y), (x + w, y + h)),
                     ((x + w, y + h), (x, y + h)), ((x, y + h), (x, y))):
            segs.append((a[0], a[1], b[0], b[1]))

    for m in re.finditer(r'<(circle|ellipse)[^>]*cx="([-\d.]+)"[^>]*cy="([-\d.]+)"'
                         r'[^>]*r(?:x)?="([-\d.]+)"(?:[^>]*ry="([-\d.]+)")?', svg):
        cx, cy = float(m.group(2)), float(m.group(3))
        rx = float(m.group(4))
        ry = float(m.group(5)) if m.group(5) else rx
        prev = None
        for i in range(33):
            a = 2 * math.pi * i / 32
            p = (cx + rx * math.cos(a), cy + ry * math.sin(a))
            if prev:
                segs.append((prev[0], prev[1], p[0], p[1]))
            prev = p

    # camins: M/L/l/h/v/A (els del projecte no en fan servir de més exòtics)
    for m in re.finditer(r'<path[^>]*\sd="([^"]+)"', svg):
        d = m.group(1)
        toks = re.findall(r'([MmLlHhVvAaZz])|(-?[\d.]+)', d)
        cur = None
        ini = None
        i = 0
        vals = []
        cmd = None
        seq = []
        for c, v in toks:
            if c:
                seq.append([c, []])
            elif seq:
                seq[-1][1].append(float(v))
        for cmd, vals in seq:
            if cmd in "Mm":
                for k in range(0, len(vals) - 1, 2):
                    p = (vals[k], vals[k + 1]) if cmd == "M" else \
                        (cur[0] + vals[k], cur[1] + vals[k + 1])
                    if k and cur:
                        segs.append((cur[0], cur[1], p[0], p[1]))
                    cur = p
                    if ini is None:
                        ini = p
            elif cmd in "Ll":
                for k in range(0, len(vals) - 1, 2):
                    p = (vals[k], vals[k + 1]) if cmd == "L" else \
                        (cur[0] + vals[k], cur[1] + vals[k + 1])
                    segs.append((cur[0], cur[1], p[0], p[1]))
                    cur = p
            elif cmd in "Hh":
                for v in vals:
                    p = (v, cur[1]) if cmd == "H" else (cur[0] + v, cur[1])
                    segs.append((cur[0], cur[1], p[0], p[1]))
                    cur = p
            elif cmd in "Vv":
                for v in vals:
                    p = (cur[0], v) if cmd == "V" else (cur[0], cur[1] + v)
                    segs.append((cur[0], cur[1], p[0], p[1]))
                    cur = p
            elif cmd in "Aa":
                for k in range(0, len(vals) - 6, 7):
                    rx, ry = vals[k], vals[k + 1]
                    gran, esc = vals[k + 3], vals[k + 4]
                    p = (vals[k + 5], vals[k + 6]) if cmd == "A" else \
                        (cur[0] + vals[k + 5], cur[1] + vals[k + 6])
                    pl = _arc_a_polilinia(cur[0], cur[1], rx, ry, gran, esc,
                                          p[0], p[1])
                    for j in range(len(pl) - 1):
                        segs.append((pl[j][0], pl[j][1],
                                     pl[j + 1][0], pl[j + 1][1]))
                    cur = p
            elif cmd in "Zz" and cur and ini:
                segs.append((cur[0], cur[1], ini[0], ini[1]))
                cur = ini

    # Els <text> poden portar `class` i `text-anchor` propis o heretar-los
    # d'un <g> que els embolcalla. Els números dels eixos s'emeten així
    # (`<g class="fig-etq petita" text-anchor="middle">`), de manera que un
    # patró que exigís els atributs a cada <text> no en veuria ni un: eren
    # invisibles per a l'auditoria.
    etqs = []

    def _afegeix(x, y, anc, cls, txt):
        if txt.strip():
            etqs.append({"text": txt,
                         "marc": "fig-etq-marc" in cls,
                         "nom": "fig-etq-nom" in cls,
                         "caixa": caixa_text(float(x), float(y), anc, txt,
                                             "petita" in cls)})

    consumits = []
    for g in re.finditer(r'<g([^>]*)>(.*?)</g>', svg, re.S):
        atr, dins = g.group(1), g.group(2)
        if "fig-etq" not in atr:
            continue
        cls_g = (re.search(r'class="([^"]*)"', atr) or [None, ""])[1] \
            if re.search(r'class="([^"]*)"', atr) else ""
        anc_g = (re.search(r'text-anchor="(\w+)"', atr).group(1)
                 if re.search(r'text-anchor="(\w+)"', atr) else "middle")
        consumits.append((g.start(), g.end()))
        for t in re.finditer(r'<text([^>]*)>([^<]*)</text>', dins):
            a, txt = t.group(1), t.group(2)
            mx = re.search(r'x="([-\d.]+)"', a)
            my = re.search(r'y="([-\d.]+)"', a)
            if not (mx and my):
                continue
            cls = (re.search(r'class="([^"]*)"', a).group(1)
                   if re.search(r'class="([^"]*)"', a) else cls_g)
            anc = (re.search(r'text-anchor="(\w+)"', a).group(1)
                   if re.search(r'text-anchor="(\w+)"', a) else anc_g)
            _afegeix(mx.group(1), my.group(1), anc, cls, txt)

    for m in re.finditer(r'<text([^>]*)>([^<]*)</text>', svg):
        if any(a <= m.start() < b for a, b in consumits):
            continue        # ja comptat dins d'un <g>
        a, txt = m.group(1), m.group(2)
        mx = re.search(r'x="([-\d.]+)"', a)
        my = re.search(r'y="([-\d.]+)"', a)
        if not (mx and my):
            continue
        cls = (re.search(r'class="([^"]*)"', a).group(1)
               if re.search(r'class="([^"]*)"', a) else "")
        anc = (re.search(r'text-anchor="(\w+)"', a).group(1)
               if re.search(r'text-anchor="(\w+)"', a) else "middle")
        _afegeix(mx.group(1), my.group(1), anc, cls, txt)

    if TX or TY:
        mou = lambda L: [(s[0] + TX, s[1] + TY, s[2] + TX, s[3] + TY)
                         for s in L]
        segs, anot, marc = mou(segs), mou(anot), mou(marc)
        for e in etqs:
            c = e["caixa"]
            e["caixa"] = (c[0] + TX, c[1] + TY, c[2] + TX, c[3] + TY)
    return (W, H), segs, etqs, anot, marc


# ---------------------------------------------------------------- auditoria
def _continuacio(s, t, tol=0.8):
    """Cert si `t` es la continuacio de `s`: comparteixen un extrem i van
    gairebe en la mateixa direccio.

    Serveix per no comptar com a "segon traç" els bocins d'una mateixa
    linia trencada (una corba mostrejada, el contorn d'un poligon vist a
    tocar d'un vertex). Abans aquest paper el feia un filtre per DISTANCIA
    ---nomes es mirava el segon traç si era 0,5 px mes lluny que el
    primer--- i tenia l'efecte contrari al buscat: quan una etiqueta queia
    exactament a la mateixa distancia de dos tracos ben diferents, que es
    el cas MAXIMAMENT ambigu, el filtre els descartava tots dos i no es
    deia res.
    """
    import math as _m
    ux, uy = s[2] - s[0], s[3] - s[1]
    vx, vy = t[2] - t[0], t[3] - t[1]
    nu, nv = _m.hypot(ux, uy), _m.hypot(vx, vy)

    # El mateix segment dibuixat dues vegades (passa quan una figura repinta
    # un traç per posar-lo per damunt d'un altre) no son dos referents.
    if (abs(s[0] - t[0]) < tol and abs(s[1] - t[1]) < tol
            and abs(s[2] - t[2]) < tol and abs(s[3] - t[3]) < tol):
        return True

    for a in ((s[0], s[1]), (s[2], s[3])):
        for b in ((t[0], t[1]), (t[2], t[3])):
            if _m.hypot(a[0] - b[0], a[1] - b[1]) < tol:
                if nu < 1e-9 or nv < 1e-9:
                    return True
                # Trossos d'una MARCA petita (la punta de fletxa d'un eix,
                # una marca de graduacio, un bocí d'arc): tots dos son el
                # mateix element grafic, no dues longituds diferents que
                # l'etiqueta pogues estar mesurant.
                if nu < 12.0 and nv < 12.0:
                    return True
                cos = abs(ux * vx + uy * vy) / (nu * nv)
                return cos > 0.94          # menys de ~20 graus de gir
    return False


def audita(svg, ident=""):
    (W, H), segs, etqs, anot, marc = extreu(svg)
    problemes = []

    for i, e in enumerate(etqs):
        c = e["caixa"]
        parells = sorted(((_dist_caixa_segment(c, s), s) for s in segs),
                         key=lambda t: t[0]) if segs else []
        dists = [d for d, _ in parells]
        d_anot = min((_dist_caixa_segment(c, s) for s in anot), default=1e9)
        d_marc = min((_dist_caixa_segment(c, s) for s in marc), default=1e9)

        # Etiqueta acotada: si la línia de cota (o de crida) que la porta és
        # més a prop que qualsevol traç del dibuix, el claudàtor ja diu què
        # mesura i la comprovació d'ambigüitat no hi té sentit.
        acotada = bool(dists) and d_anot <= dists[0] * 1.5
        # Els números dels eixos són etiquetes del MARC: van a la vora del
        # quadre, per construcció, i el que identifiquen és una posició de
        # l'eix, no cap traç del dibuix. Que quedin lluny del contingut no
        # és cap defecte —és on han d'anar— així que no se'ls apliquen ni
        # l'orfandat ni l'ambigüitat. Sí que se'ls comprova que no tapin res
        # ni es trepitgin entre elles, que en un eix atapeït sí que passa.
        if e.get("marc"):
            acotada = True
        # Una etiqueta de NOM (el nom d'un vertex, d'un node d'un arbre) no
        # designa cap longitud: no te sentit preguntar-se quin dels tracos
        # del voltant "mesura". Se li salta nomes l'ambiguitat; que no tapi
        # res i que no quedi despenjada del seu punt si que se li exigeix.
        es_nom = bool(e.get("nom"))
        txt = e["text"].strip()
        # Hi ha notacions que diuen ELLES MATEIXES que mesuren, i per tant
        # no depenen de la proximitat per desambiguar-se:
        #
        #  - una mesura d'ANGLE ("50°") pertany a un vertex, i un vertex te
        #    sempre dos costats a la mateixa distancia: exigir-li que en
        #    tingui un de mes proper que l'altre es demanar-li una cosa
        #    impossible per construccio;
        #  - una igualtat ("AB = 12 cm", "OA = 5 cm") ja nomena el segment
        #    que mesura, i el lector no necessita mirar quin traç te mes a
        #    prop per saber-ho.
        if txt.endswith("\u00b0") or "=" in txt:
            es_nom = True

        if (dists and dists[0] <= 0.0) or d_marc <= 0.0:
            problemes.append(("COL", e["text"]))
        elif (dists and dists[0] > ORFE_PX and not acotada
              and d_marc > ORFE_PX and not e.get("marc")):
            problemes.append(("ORFE", e["text"], round(dists[0], 1)))
        elif len(dists) > 1 and dists[0] > 0 and not acotada and not es_nom:
            # El segon traç nomes compta si es un traç DIFERENT, no la
            # continuacio del primer.
            prop = parells[0][1]
            altres = [d for d, s2 in parells[1:] if not _continuacio(prop, s2)]
            if altres and altres[0] < dists[0] * AMBIG_RATIO:
                problemes.append(("AMBIG", e["text"],
                                  round(dists[0], 1), round(altres[0], 1)))

        if c[0] < -0.5 or c[1] < -0.5 or c[2] > W + 0.5 or c[3] > H + 0.5:
            problemes.append(("FORA", e["text"]))

        for j in range(i + 1, len(etqs)):
            if _caixes_es_toquen(c, etqs[j]["caixa"]):
                problemes.append(("SOLAP", e["text"], etqs[j]["text"]))

    return problemes
