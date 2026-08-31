# -*- coding: utf-8 -*-
"""Comprova que la corba dibuixada a les grafiques del full 10 sigui de debo
la funcio que diu el <title>.

Del propi SVG en surt tot: les etiquetes numeriques dels eixos donen la
correspondencia px<->unitats, i la polilinia dona els punts. Es converteix
cada punt a coordenades matematiques i es compara amb la formula.
"""
import re, sys, math
sys.path.insert(0, "tests")
from comu import TOTS

def eixos(svg):
    """Calibra px<->unitats. IMPORTANT: la y de <text> es la LINIA BASE, que
    va uns 3,5 px per sota de la linia de graella que etiqueta. Si es fa
    servir la y del text directament, surt un desplacament constant que
    despres sembla que la corba estigui malament (ho vaig fer i em va donar
    11 falsos positius). Per aixo cada etiqueta s'aparella amb la linia
    horitzontal/vertical real mes propera."""
    horiz, verti = [], []
    for m in re.finditer(r'<line class="fig-(?:graella|eix)"[^>]*x1="([\d.]+)" y1="([\d.]+)" x2="([\d.]+)" y2="([\d.]+)"', svg):
        x1, y1, x2, y2 = (float(m.group(i)) for i in (1, 2, 3, 4))
        if abs(y1 - y2) < 0.5: horiz.append(y1)
        if abs(x1 - x2) < 0.5: verti.append(x1)
    xs, ys = [], []
    for m in re.finditer(r'<text x="([\d.]+)" y="202"[^>]*>(-?\d+)</text>', svg):
        px, val = float(m.group(1)), float(m.group(2))
        if verti:
            px = min(verti, key=lambda v: abs(v - px))
        xs.append((px, val))
    for m in re.finditer(r'<text x="24.0" y="([\d.]+)"[^>]*>(-?\d+)</text>', svg):
        py, val = float(m.group(1)), float(m.group(2))
        if horiz:
            py = min(horiz, key=lambda v: abs(v - py))
        ys.append((py, val))
    if len(xs) < 2 or len(ys) < 2:
        return None
    xs.sort(); ys.sort()
    sx = (xs[-1][0] - xs[0][0]) / (xs[-1][1] - xs[0][1])
    px0 = xs[0][0] - xs[0][1] * sx
    sy = (ys[-1][0] - ys[0][0]) / (ys[-1][1] - ys[0][1])
    py0 = ys[0][0] - ys[0][1] * sy
    return px0, sx, py0, sy

def corbes(svg):
    """Les corbes son <path d="M x y L x y L ...">. Es descarten les puntes
    de fletxa dels eixos, que fan servir comandes relatives (l/v/h)."""
    out = []
    for m in re.finditer(r'<path[^>]*d="([^"]+)"[^>]*>', svg):
        d = m.group(1)
        if re.search(r"[lvhz]", d):        # fletxa dels eixos
            continue
        v = [float(x) for x in re.findall(r"-?\d+(?:\.\d+)?", d)]
        if len(v) < 12:
            continue
        out.append(list(zip(v[0::2], v[1::2])))
    return out

PAR = re.compile(r"Paràbola y = (-?[\d.,]+)·x² ([+-]) ([\d.,]+)·x ([+-]) ([\d.,]+)")
REC = re.compile(r"Recta de pendent (-?[\d.,]+) i ordenada a l'origen (-?[\d.,]+)")
DOS = re.compile(r"pendent (-?[\d.,]+) i ordenada (-?[\d.,]+); i pendent (-?[\d.,]+) i ordenada (-?[\d.,]+)")
f = lambda s: float(s.replace(",", "."))

items = [(n, it) for n in sorted(TOTS) for it in TOTS[n] if it.get("figura")]
ok = bad = saltat = 0
problemes = []
for n, it in items:
    svg = it["figura"]
    t = re.search(r"<title[^>]*>(.*?)</title>", svg, re.S).group(1)
    funcs = []
    m = PAR.search(t)
    if m:
        a = f(m.group(1)); b = f(m.group(3)) * (1 if m.group(2) == "+" else -1)
        c = f(m.group(5)) * (1 if m.group(4) == "+" else -1)
        funcs = [lambda x, a=a, b=b, c=c: a*x*x + b*x + c]
    elif REC.search(t):
        m = REC.search(t); p, q = f(m.group(1)), f(m.group(2))
        funcs = [lambda x, p=p, q=q: p*x + q]
    elif DOS.search(t):
        m = DOS.search(t)
        funcs = [lambda x, p=f(m.group(1)), q=f(m.group(2)): p*x + q,
                 lambda x, p=f(m.group(3)), q=f(m.group(4)): p*x + q]
    if not funcs:
        saltat += 1; continue
    e = eixos(svg)
    cs = corbes(svg)
    if not e or len(cs) < len(funcs):
        saltat += 1; continue
    px0, sx, py0, sy = e
    encaixa_tot = True
    detall = []
    for c in cs[:len(funcs)]:
        millor = 1e9
        for fn in funcs:
            errs = []
            for X, Y in c:
                x = (X - px0) / sx
                y = (Y - py0) / sy
                try: errs.append(abs(y - fn(x)))
                except Exception: pass
            if errs: millor = min(millor, max(errs))
        detall.append(millor)
        if millor > 0.15: encaixa_tot = False
    if encaixa_tot: ok += 1
    else:
        bad += 1
        problemes.append((n, it["id"], t[:56], max(detall)))

print("gràfiques amb funció declarada al <title>: %d" % (ok + bad))
print("  la corba dibuixada encaixa amb la fórmula: %d" % ok)
print("  NO encaixa: %d" % bad)
print("  saltades (sense fórmula al títol o sense eixos): %d" % saltat)
for n, i, t, e in problemes:
    print("   !! full %s %-6s error màxim %.2f unitats — %s" % (n, i, e, t))
