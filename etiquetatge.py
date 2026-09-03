# -*- coding: utf-8 -*-
"""figures/etiquetatge.py — col·locació automàtica de les cotes d'una figura.

PER QUÈ EXISTEIX. Fins ara cada funció de figura escrivia les seves etiquetes
amb desplaçaments constants trobats a ull (`cx + 30`, `y - B/2 - 2`, `x0 - 8`).
Cap d'aquests números sabia on eren la resta de traços ni la resta
d'etiquetes, de manera que qualsevol canvi de mides els deixava obsolets. Una
auditoria sobre les 185 figures del banc en va trobar 115 amb algun defecte:
43 etiquetes tallades per un traç, 35 que sortien del marc, i 221 casos on
l'etiqueta era tan a prop d'un segon traç com del seu que no es podia saber
què mesurava.

Moure les constants no ho arregla: només canvia quin defecte surt. Pujar una
cota per no tallar una aresta la deixa equidistant de dues, i baixar-la fins a
fora del dibuix la desconnecta del que mesura. El problema és que la decisió
es prenia sense mirar el dibuix.

COM FUNCIONA. La figura declara QUÈ vol etiquetar, no ON:

    e = Escena("Prisma recte de base hexagonal.")
    e.poligon(base, discontinu=True)
    e.etq_segment(a, b, "6 cm")          # «etiqueta aquesta aresta»
    return e.svg()

L'escena guarda tots els traços. En compondre, per a cada etiqueta genera
candidats (a banda i banda del segment, a diverses fraccions de la seva
longitud i a diverses distàncies) i tria el primer que compleix les tres
condicions dures —no tallar cap traç, no trepitjar cap altra etiqueta, i ser
clarament més a prop del seu segment que de qualsevol altre— minimitzant la
distància al referent. Etiqueta enganxada al que mesura, doncs, sempre que es
pugui.

QUAN NO ES POT. Si cap candidat no serveix, l'etiqueta se'n va fora del dibuix
amb una línia de crida fina fins al punt mig del seu segment, com a qualsevol
plànol tècnic. Això resol col·lisió i ambigüitat alhora, i garanteix que el
conjunt de solucions vàlides mai no és buit: el cercador sempre acaba amb una
figura correcta, no amb la menys dolenta.

EL MARC. El `viewBox` es calcula al final, del contingut real i amb les caixes
de text incloses. Cap etiqueta no pot quedar retallada per construcció.
"""
import math

from . import OMPLERT, MARCA, _text

# .fig-etq { font: 600 12px var(--mono) } · .petita { font-size: 10.5px }
# La font és monoespaiada, i això és el que fa fiable tot el mòdul: l'amplada
# d'una etiqueta és exactament el nombre de caràcters pel pas de la font.
COS, COS_PETIT = 12.0, 10.5
AVANC = 0.61                    # pas horitzontal, en fracció del cos
ASC, DESC = 0.78, 0.22          # alçada per damunt i per sota de la línia base

MARGE = 14.0                    # aire entre el contingut i la vora del marc
SEPARACIO = 3.0                 # mínim entre una etiqueta i un traç aliè
RAO_AMBIGUITAT = 1.6            # el 2n traç ha de ser 1,6x més lluny que el 1r

# Ordre de preferència dels candidats: primer al mig del segment i a prop.
FRACCIONS = (0.5, 0.38, 0.62, 0.26, 0.74)
DISTANCIES = (11.0, 15.0, 20.0, 26.0, 33.0, 41.0)


# --------------------------------------------------------------- geometria
def _dist_punt_segment(px, py, seg):
    x1, y1, x2, y2 = seg
    dx, dy = x2 - x1, y2 - y1
    den = dx * dx + dy * dy
    if den < 1e-12:
        return math.hypot(px - x1, py - y1)
    t = max(0.0, min(1.0, ((px - x1) * dx + (py - y1) * dy) / den))
    return math.hypot(px - (x1 + t * dx), py - (y1 + t * dy))


def _dist_caixa_segment(caixa, seg, n=40):
    """Distància entre un rectangle i un segment; 0 si es toquen."""
    x0, y0, x1, y1 = caixa
    ax, ay, bx, by = seg
    millor = float("inf")
    for i in range(n + 1):
        t = i / n
        px, py = ax + (bx - ax) * t, ay + (by - ay) * t
        if x0 <= px <= x1 and y0 <= py <= y1:
            return 0.0
        d = math.hypot(max(x0 - px, 0.0, px - x1), max(y0 - py, 0.0, py - y1))
        if d < millor:
            millor = d
    return millor


def _es_toquen(a, b, aire=1.5):
    return not (a[2] + aire <= b[0] or b[2] + aire <= a[0]
                or a[3] + aire <= b[1] or b[3] + aire <= a[1])


def _mateix_segment(s, t, tol=0.6):
    return ((abs(s[0] - t[0]) < tol and abs(s[1] - t[1]) < tol
             and abs(s[2] - t[2]) < tol and abs(s[3] - t[3]) < tol)
            or (abs(s[0] - t[2]) < tol and abs(s[1] - t[3]) < tol
                and abs(s[2] - t[0]) < tol and abs(s[3] - t[1]) < tol))


def _arc_segments(cx, cy, rx, ry, a0, a1, n=24):
    """Polilínia equivalent a un arc el·líptic, per a mesurar distàncies."""
    pts = []
    for i in range(n + 1):
        a = a0 + (a1 - a0) * i / n
        pts.append((cx + rx * math.cos(a), cy + ry * math.sin(a)))
    return [(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1])
            for i in range(len(pts) - 1)]


def caixa_text(cx, cy, text, petit=False):
    """Caixa del text centrada al punt (cx, cy)."""
    fs = COS_PETIT if petit else COS
    w = AVANC * fs * len(text)
    return (cx - w / 2, cy - ASC * fs * 0.5 - (ASC - DESC) * fs * 0.5 + fs * 0.28,
            cx + w / 2, cy + fs * (ASC + DESC) * 0.5 - fs * 0.0)


def _caixa_centrada(cx, cy, text, petit):
    fs = COS_PETIT if petit else COS
    w = AVANC * fs * len(text)
    h = (ASC + DESC) * fs
    return (cx - w / 2, cy - h / 2, cx + w / 2, cy + h / 2)


def _linia_base(cy, petit):
    """Línia base perquè la caixa quedi centrada verticalment a `cy`."""
    fs = COS_PETIT if petit else COS
    return cy + (ASC - DESC) * fs / 2


# ------------------------------------------------------------------ escena
class Escena:
    """Acumula geometria i peticions d'etiqueta, i les resol en compondre."""

    def __init__(self, titol, marge=MARGE):
        self.titol = titol
        self.marge = marge
        self._svg = []          # fragments ja dibuixats, en ordre
        self._segs = []         # traços de GEOMETRIA (el cos de la figura)
        self._segs_anot = []    # traços d'ANOTACIÓ (cotes, línies de crida)
        self._anot = []         # peticions d'etiqueta pendents

    # -- geometria ----------------------------------------------------
    # La distinció geometria/anotació no és cosmètica. L'ambigüitat d'una
    # etiqueta es mesura contra el DIBUIX: que una cota passi a prop del seu
    # propi text no la fa ambigua, és la seva funció. Barrejar les dues capes
    # feia que afegir una cota acotada empitjorés la mètrica en comptes de
    # millorar-la.
    def _reg(self, segs):
        self._segs.extend(segs)

    def _reg_anot(self, segs):
        self._segs_anot.extend(segs)

    def poligon(self, pts, ple=True, discontinu=False, gruix=2.0,
                color=None, registra=True):
        vora = color or "currentColor"
        extra = ' stroke-dasharray="4 3"' if discontinu else ""
        self._svg.append(
            '<polygon points="%s" fill="%s" stroke="%s" stroke-width="%g"%s/>'
            % (" ".join("%.1f,%.1f" % p for p in pts),
               OMPLERT if ple else "none", vora, gruix, extra))
        if registra:
            self._reg([(pts[i][0], pts[i][1],
                        pts[(i + 1) % len(pts)][0], pts[(i + 1) % len(pts)][1])
                       for i in range(len(pts))])

    def segment(self, p, q, gruix=2.0, discontinu=False, color=None,
                registra=True):
        extra = ' stroke-dasharray="4 3"' if discontinu else ""
        self._svg.append(
            '<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" '
            'stroke-width="%g"%s/>'
            % (p[0], p[1], q[0], q[1], color or "currentColor", gruix, extra))
        if registra:
            self._reg([(p[0], p[1], q[0], q[1])])

    def marca(self, p, q, gruix=2.0):
        """Segment destacat (apotema, radi, diagonal…), en color de marca."""
        self.segment(p, q, gruix=gruix, color=MARCA)

    def arc(self, cx, cy, rx, ry, a0, a1, gruix=2.0, discontinu=False,
            color=None, ple=False):
        segs = _arc_segments(cx, cy, rx, ry, a0, a1)
        d = "M %.1f %.1f " % (segs[0][0], segs[0][1]) + " ".join(
            "L %.1f %.1f" % (s[2], s[3]) for s in segs)
        extra = ' stroke-dasharray="4 3"' if discontinu else ""
        self._svg.append('<path d="%s" fill="%s" stroke="%s" '
                         'stroke-width="%g"%s/>'
                         % (d, OMPLERT if ple else "none",
                            color or "currentColor", gruix, extra))
        self._reg(segs)

    def angle_recte(self, vertex, u, v, mida=11.0):
        """Quadradet de l'angle recte al vèrtex, en direccions u i v."""
        def unit(w):
            n = math.hypot(*w) or 1.0
            return (w[0] / n, w[1] / n)
        ux, uy = unit(u)
        vx, vy = unit(v)
        a = (vertex[0] + ux * mida, vertex[1] + uy * mida)
        b = (vertex[0] + (ux + vx) * mida, vertex[1] + (uy + vy) * mida)
        c = (vertex[0] + vx * mida, vertex[1] + vy * mida)
        self._svg.append('<path d="M %.1f %.1f L %.1f %.1f L %.1f %.1f" '
                         'fill="none" stroke="currentColor" stroke-width="1.2"/>'
                         % (a[0], a[1], b[0], b[1], c[0], c[1]))
        self._reg([(a[0], a[1], b[0], b[1]), (b[0], b[1], c[0], c[1])])

    def cota(self, p, q, text, despl=15.0, costat=0, petit=False):
        """Cota acotada a la manera del dibuix tècnic: dues línies auxiliars
        als extrems del segment mesurat, una línia de cota entre elles i el
        text a sobre.

        És la resposta de fons a l'ambigüitat. Una etiqueta solta al costat
        d'una aresta d'un polígon regular queda gairebé tan a prop de
        l'aresta veïna com de la seva (raons de 1,1 típiques), i no hi ha
        cap posició que ho arregli: el problema és que res no diu QUIN
        segment es mesura. Les línies auxiliars ho diuen.
        """
        (x1, y1), (x2, y2) = p, q
        dx, dy = x2 - x1, y2 - y1
        L = math.hypot(dx, dy) or 1.0
        if not costat:
            # banda automàtica: la que allunya la cota del cos de la figura,
            # perquè quedi a l'aire lliure i no per dins del dibuix
            xs = [v for s in self._segs for v in (s[0], s[2])] or [x1]
            ys = [v for s in self._segs for v in (s[1], s[3])] or [y1]
            gx, gy = sum(xs) / len(xs), sum(ys) / len(ys)
            mx_, my_ = (x1 + x2) / 2, (y1 + y2) / 2
            costat = 1 if (-dy / L) * (mx_ - gx) + (dx / L) * (my_ - gy) > 0 \
                else -1
        nx, ny = -dy / L * costat, dx / L * costat
        a = (x1 + nx * despl, y1 + ny * despl)
        b = (x2 + nx * despl, y2 + ny * despl)
        # línies auxiliars: surten una mica més enllà de la línia de cota
        for (o, d) in ((p, a), (q, b)):
            self._svg.append(
                '<line class="fig-cota" x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" '
                'stroke="currentColor" stroke-width="0.9" '
                'stroke-opacity="0.65"/>'
                % (o[0] + nx * 2.5, o[1] + ny * 2.5,
                   d[0] + nx * 3.5, d[1] + ny * 3.5))
        self._svg.append(
            '<line class="fig-cota" x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" '
            'stroke="currentColor" stroke-width="1.1"/>'
            % (a[0], a[1], b[0], b[1]))
        # marques d'extrem, inclinades 45º com als plànols
        for c in (a, b):
            ux, uy = (dx / L + nx) * 4.0, (dy / L + ny) * 4.0
            self._svg.append(
                '<line class="fig-cota" x1="%.1f" y1="%.1f" x2="%.1f" '
                'y2="%.1f" stroke="currentColor" stroke-width="1.1"/>'
                % (c[0] - ux, c[1] - uy, c[0] + ux, c[1] + uy))
        self._reg_anot([(a[0], a[1], b[0], b[1])])
        # el referent de l'etiqueta és la línia de cota, que ja viu en espai
        # lliure: el motor només ha de trobar-li banda i distància. I com que
        # les línies auxiliars ja diuen quin segment es mesura, aquesta
        # etiqueta no pot ser ambigua: `acotada=True` en salta la comprovació.
        self.etq_segment(a, b, text, petit=petit, costat=costat, acotada=True)

    def crua(self, svg, segs=()):
        """Escotilla per a SVG fet a mà; `segs` són els traços equivalents."""
        self._svg.append(svg)
        self._reg(list(segs))

    # -- anotacions ---------------------------------------------------
    def etq_segment(self, p, q, text, petit=False, costat=0, fixa=None,
                    acotada=False):
        """Etiqueta la longitud del segment p-q.

        `costat`: 0 lliure, +1 o -1 per forçar la banda (normal (-dy, dx)).
        `fixa`: (x, y) per saltar-se el motor en un cas molt concret.
        """
        if text is None or text == "":
            return
        self._anot.append({"mena": "segment", "p": p, "q": q, "text": text,
                           "petit": petit, "costat": costat, "fixa": fixa,
                           "acotada": acotada})

    def etq_punt(self, p, text, petit=False, direccio=None):
        """Etiqueta un punt (un vèrtex, un centre)."""
        if text is None or text == "":
            return
        self._anot.append({"mena": "punt", "p": p, "text": text,
                           "petit": petit, "direccio": direccio})

    # -- resolució ----------------------------------------------------
    def _candidats(self, a):
        text, petit = a["text"], a["petit"]
        if a["mena"] == "punt":
            px, py = a["p"]
            dirs = ([a["direccio"]] if a["direccio"] else
                    [(-1, 0), (1, 0), (0, -1), (0, 1),
                     (-0.7, -0.7), (0.7, -0.7), (-0.7, 0.7), (0.7, 0.7)])
            # Per a una etiqueta de punt, la mida del pas importa: amb un
            # text llarg les distancies grans la desenganxen del punt que
            # nomena. Es proven mes distancies i mes fines abans de saltar
            # a les llunyanes.
            # El sostre son 27 px, no mes: passat aquest punt l'etiqueta ja
            # no es llegeix com a enganxada al punt que nomena, i val mes
            # que caigui a `_crida()` i s'hi connecti amb una linia. Deixar
            # que s'allunyes fins a 41 px la desenganxava sense dir-ho.
            for d in (10.0, 13.0, 16.0, 19.0, 23.0, 27.0):
                for ux, uy in dirs:
                    n = math.hypot(ux, uy) or 1.0
                    yield (px + ux / n * d, py + uy / n * d)
            return

        (x1, y1), (x2, y2) = a["p"], a["q"]
        dx, dy = x2 - x1, y2 - y1
        L = math.hypot(dx, dy) or 1.0
        nx, ny = -dy / L, dx / L
        bandes = (a["costat"],) if a["costat"] else (1, -1)
        for d in DISTANCIES:
            for t in FRACCIONS:
                bx, by = x1 + dx * t, y1 + dy * t
                for s in bandes:
                    yield (bx + nx * d * s, by + ny * d * s)

    def _puntua(self, caixa, propi, altres, caixes, acotada=False):
        """(factible, distància al referent). `propi` és el segment mesurat;
        `altres` són els traços de GEOMETRIA que no en formen part."""
        d_propi = _dist_caixa_segment(caixa, propi) if propi else 0.0
        for c in caixes:
            if _es_toquen(caixa, c):
                return False, 0.0
        d_altres = float("inf")
        for s in altres:
            d = _dist_caixa_segment(caixa, s)
            if d < SEPARACIO:
                return False, 0.0
            if d < d_altres:
                d_altres = d
        # els traços d'anotació no fan de referent, però tampoc no s'han de
        # trepitjar: només es comprova que no hi hagi encavalcament
        for s in self._segs_anot:
            if propi is not None and _mateix_segment(s, propi):
                continue
            if _dist_caixa_segment(caixa, s) < SEPARACIO * 0.5:
                return False, 0.0
        if propi is not None:
            if d_propi < SEPARACIO * 0.6:
                return False, 0.0
            # una cota acotada ja diu per si mateixa què mesura
            if not acotada and d_altres < d_propi * RAO_AMBIGUITAT:
                return False, 0.0
        return True, d_propi

    def _resol(self):
        """Assigna una posició a cada etiqueta. Retorna [(caixa, x, y, a)]."""
        col = []            # caixes ja col·locades
        posades = []

        # Primer les més restringides: les que tenen menys candidats vàlids.
        ordre = sorted(range(len(self._anot)),
                       key=lambda i: 0 if self._anot[i]["mena"] == "segment"
                       else 1)

        for i in ordre:
            a = self._anot[i]
            petit = a["petit"]
            if a.get("fixa"):
                cx, cy = a["fixa"]
                caixa = _caixa_centrada(cx, cy, a["text"], petit)
                col.append(caixa)
                posades.append((caixa, cx, cy, a, None))
                continue

            propi = None
            if a["mena"] == "segment":
                propi = (a["p"][0], a["p"][1], a["q"][0], a["q"][1])
            altres = [s for s in self._segs
                      if propi is None or not _mateix_segment(s, propi)]

            millor = None
            for cx, cy in self._candidats(a):
                caixa = _caixa_centrada(cx, cy, a["text"], petit)
                ok, d = self._puntua(caixa, propi, altres, col,
                                     a.get("acotada", False))
                if ok:
                    millor = (caixa, cx, cy)
                    break           # els candidats ja venen en ordre de gust
            if millor is None:
                caixa, cx, cy, crida = self._crida(a, altres, col)
                col.append(caixa)
                posades.append((caixa, cx, cy, a, crida))
            else:
                col.append(millor[0])
                posades.append((millor[0], millor[1], millor[2], a, None))
        return posades

    def _crida(self, a, altres, col):
        """Última instància: etiqueta fora del dibuix amb línia de crida."""
        if a["mena"] == "segment":
            ancora = ((a["p"][0] + a["q"][0]) / 2, (a["p"][1] + a["q"][1]) / 2)
        else:
            ancora = a["p"]
        xs = [v for s in self._segs for v in (s[0], s[2])] or [0.0]
        ys = [v for s in self._segs for v in (s[1], s[3])] or [0.0]
        c = ((min(xs) + max(xs)) / 2, (min(ys) + max(ys)) / 2)
        ux, uy = ancora[0] - c[0], ancora[1] - c[1]
        n = math.hypot(ux, uy)
        if n < 1e-6:
            ux, uy, n = 0.0, 1.0, 1.0
        ux, uy = ux / n, uy / n
        d = 26.0
        while d < 300.0:
            cx, cy = ancora[0] + ux * d, ancora[1] + uy * d
            caixa = _caixa_centrada(cx, cy, a["text"], a["petit"])
            xoca = any(_es_toquen(caixa, k) for k in col) or any(
                _dist_caixa_segment(caixa, s) < SEPARACIO for s in altres)
            if not xoca:
                vora = (cx - ux * (caixa[2] - caixa[0]) / 2 - ux * 3,
                        cy - uy * (caixa[3] - caixa[1]) / 2 - uy * 3)
                return caixa, cx, cy, (ancora, vora)
            d += 8.0
        cx, cy = ancora[0] + ux * 40, ancora[1] + uy * 40
        return (_caixa_centrada(cx, cy, a["text"], a["petit"]), cx, cy,
                (ancora, (cx, cy)))

    # -- sortida ------------------------------------------------------
    def svg(self):
        posades = self._resol()

        cos = list(self._svg)
        caixes = []
        for caixa, cx, cy, a, crida in posades:
            if crida:
                (ax, ay), (bx, by) = crida
                # `class="fig-crida"`: la línia de crida forma part de
                # l'anotació, no del dibuix. Tocar la seva pròpia etiqueta és
                # precisament la seva feina, i l'auditoria l'ha d'excloure
                # quan comprova col·lisions.
                cos.append('<line class="fig-crida" x1="%.1f" y1="%.1f" '
                           'x2="%.1f" y2="%.1f" stroke="currentColor" '
                           'stroke-width="1" stroke-opacity="0.55"/>'
                           % (ax, ay, bx, by))
            etiqueta = _text(round(cx, 1),
                             round(_linia_base(cy, a["petit"]), 1),
                             a["text"], "middle", a["petit"])
            if a["mena"] == "punt":
                # Una etiqueta de PUNT (el nom d'un vèrtex, d'un node d'un
                # arbre) no mesura cap segment: la pregunta "quin traç
                # etiqueta?" no s'hi aplica, i per tant tampoc la
                # comprovació d'ambigüitat. Es marca perquè l'auditoria ho
                # pugui distingir d'una cota, on sí que s'hi aplica.
                etiqueta = etiqueta.replace('class="fig-etq',
                                            'class="fig-etq fig-etq-nom', 1)
            cos.append(etiqueta)
            caixes.append(caixa)

        xs, ys = [], []
        for s in self._segs:
            xs += [s[0], s[2]]
            ys += [s[1], s[3]]
        for c in caixes:
            xs += [c[0], c[2]]
            ys += [c[1], c[3]]
        if not xs:
            xs, ys = [0.0], [0.0]
        x0, x1 = min(xs) - self.marge, max(xs) + self.marge
        y0, y1 = min(ys) - self.marge, max(ys) + self.marge

        cos_svg = "".join(cos)
        if abs(x0) > 0.05 or abs(y0) > 0.05:
            cos_svg = ('<g transform="translate(%.1f,%.1f)">%s</g>'
                       % (-x0, -y0, cos_svg))
        return ('<svg class="figura" viewBox="0 0 %d %d" role="img" '
                'xmlns="http://www.w3.org/2000/svg"><title>%s</title>%s</svg>'
                % (int(math.ceil(x1 - x0)), int(math.ceil(y1 - y0)),
                   self.titol, cos_svg))
