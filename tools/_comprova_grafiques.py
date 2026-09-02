# -*- coding: utf-8 -*-
"""Les grafiques del full 10 diuen la veritat?

Dues comprovacions:

  A  La corba dibuixada es de debo la funcio que declara el <title>.
  B  El tret que l'exercici DEMANA queda dins del tros dibuixat.

Del propi SVG en surt tot: les etiquetes numeriques dels eixos donen la
correspondencia px<->unitats i el <path> dona els punts.

TRES ERRORS MEUS, per si algu hi torna a caure
----------------------------------------------
1. La `y` d'un <text> es la LINIA BASE, uns 3,5 px per sota de la linia de
   graella que etiqueta. Calibrant amb la y del text surt un desplacament
   constant i totes les corbes semblen malament: 11 falsos positius.
   Cada etiqueta s'aparella amb la seva linia real.

2. Un <path> pot tenir MES D'UN SUBTRACAT. A 203a les dues branques de la
   hiperbola van dins del mateix element, separades per una segona M, que
   vol dir "aixeca la ploma". Ignorant les lletres i aparellant tots els
   numeros, les branques es fusionen: vaig concloure que hi havia una recta
   travessant l'asimptota x=2 i vaig anar a reportar-ho. La figura es
   correcta. Al banc nomes hi ha dos casos (151 i 203a), pero qualsevol
   comprovacio sobre continuitat o domini hi cauria.

3. Les marques dels eixos poden ser decimals ("0,5"). Amb un patro que
   nomes acceptava enters, 216b, 216c, 209a i 209c quedaven sense verificar.
   Amb els decimals admesos, la comprovacio A passa de 19 a 21 grafiques.
"""
import re
import sys

sys.path.insert(0, "tests")
from comu import TOTS

PAR = re.compile(r"Paràbola y = (-?[\d.,]+)·x² ([+-]) ([\d.,]+)·x ([+-]) ([\d.,]+)")
REC = re.compile(r"Recta de pendent (-?[\d.,]+) i ordenada a l'origen (-?[\d.,]+)")
DOS = re.compile(r"pendent (-?[\d.,]+) i ordenada (-?[\d.,]+); i pendent (-?[\d.,]+) i ordenada (-?[\d.,]+)")
TOLERANCIA = 0.15


def f(x):
    return float(x.replace(",", "."))


def eixos(svg):
    """Calibra px<->unitats aparellant cada etiqueta amb la seva linia."""
    horiz, verti = [], []
    for m in re.finditer(r'<line class="fig-(?:graella|eix)"[^>]*x1="([\d.]+)"'
                         r' y1="([\d.]+)" x2="([\d.]+)" y2="([\d.]+)"', svg):
        x1, y1, x2, y2 = (float(m.group(i)) for i in (1, 2, 3, 4))
        if abs(y1 - y2) < 0.5:
            horiz.append(y1)
        if abs(x1 - x2) < 0.5:
            verti.append(x1)
    xs, ys = [], []
    for m in re.finditer(r'<text x="([\d.]+)" y="202"[^>]*>(-?[\d,]+)</text>', svg):
        px = float(m.group(1))
        if verti:
            px = min(verti, key=lambda v: abs(v - px))
        xs.append((px, f(m.group(2))))
    for m in re.finditer(r'<text x="2[0-9](?:\.[0-9])?" y="([\d.]+)"[^>]*>(-?[\d,]+)</text>', svg):
        py = float(m.group(1))
        if horiz:
            py = min(horiz, key=lambda v: abs(v - py))
        ys.append((py, f(m.group(2))))
    if len(xs) < 2 or len(ys) < 2:
        return None
    xs.sort(); ys.sort()
    sx = (xs[-1][0] - xs[0][0]) / (xs[-1][1] - xs[0][1])
    sy = (ys[-1][0] - ys[0][0]) / (ys[-1][1] - ys[0][1])
    return xs[0][0] - xs[0][1] * sx, sx, ys[0][0] - ys[0][1] * sy, sy


def corbes(svg):
    """Cada subtracat (cada M) es una corba a part. Veure l'error 2 de dalt."""
    out = []
    for m in re.finditer(r'<path[^>]*d="([^"]+)"[^>]*>', svg):
        d = m.group(1)
        if re.search(r"[lvhzc]", d):
            continue                       # punta de fletxa dels eixos
        for tros in re.split(r"(?=M)", d):
            v = [float(x) for x in re.findall(r"-?\d+(?:\.\d+)?", tros)]
            if len(v) >= 12:
                out.append(list(zip(v[0::2], v[1::2])))
    return out


def funcions(titol):
    m = PAR.search(titol)
    if m:
        a = f(m.group(1))
        b = f(m.group(3)) * (1 if m.group(2) == "+" else -1)
        c = f(m.group(5)) * (1 if m.group(4) == "+" else -1)
        return [lambda x, a=a, b=b, c=c: a * x * x + b * x + c], (a, b, c)
    m = REC.search(titol)
    if m:
        p, q = f(m.group(1)), f(m.group(2))
        return [lambda x, p=p, q=q: p * x + q], None
    m = DOS.search(titol)
    if m:
        return [lambda x, p=f(m.group(1)), q=f(m.group(2)): p * x + q,
                lambda x, p=f(m.group(3)), q=f(m.group(4)): p * x + q], None
    return [], None


def extensio(svg):
    """(xmin, xmax, ymin, ymax) del que hi ha pintat, en unitats."""
    e, cs = eixos(svg), corbes(svg)
    if not e:
        return None
    px0, sx, py0, sy = e
    P = [((X - px0) / sx, (Y - py0) / sy) for c in cs for X, Y in c]
    for m in re.finditer(r'<circle[^>]*cx="(-?[\d.]+)"[^>]*cy="(-?[\d.]+)"', svg):
        P.append(((float(m.group(1)) - px0) / sx, (float(m.group(2)) - py0) / sy))
    if not P:
        return None
    xs = [p[0] for p in P]; ys = [p[1] for p in P]
    return min(xs), max(xs), min(ys), max(ys)


def trets_demanats(it, titol):
    """Punts que l'alumne ha de poder llegir al dibuix, segons la pregunta.

    D'on surt: a 299b l'exercici diu "Troba el punt de tall de les dues
    rectes", la resposta es (2,4), i les rectes van dibuixades nomes fins a
    x=1,6: al dibuix no es creuen mai. La comprovacio A no ho veu, perque
    totes dues rectes SI que encaixen amb la seva formula. El que falla no es
    el que s'ha dibuixat sino fins on.

    QUE NO ES UN DEFECTE, I PER QUE
    -------------------------------
    Nomes es miren trets que el dibuix CONTRADIRIA si no hi fossin. Dues
    rectes pintades sense tocar-se son una afirmacio visual que no es tallen,
    i aixo xoca amb una resposta que diu on ho fan.

    Vaig afegir-hi tambe els valors de "calcula la imatge dels valors x=..."
    i en sortien sis a 201a. NO ho es: alli l'enunciat dona la formula
    f(x)=5x^2-1 i les imatges es calculen, no es llegeixen del dibuix. Que la
    parabola nomes es vegi entre x=-1 i x=1 fa la figura poc util, pero no
    contradiu res. La regla es va treure.
    """
    h = (it.get("encapcalament") or "") + " " + it["enunciat"]
    fora = []
    m = DOS.search(titol)
    if m and re.search(r"punt de tall", h, re.I):
        p1, q1, p2, q2 = (f(m.group(i)) for i in (1, 2, 3, 4))
        if abs(p1 - p2) > 1e-9:
            x = (q2 - q1) / (p1 - p2)
            fora.append(("punt de tall", x, p1 * x + q1))
    m = PAR.search(titol)
    if m:
        a = f(m.group(1))
        b = f(m.group(3)) * (1 if m.group(2) == "+" else -1)
        c = f(m.group(5)) * (1 if m.group(4) == "+" else -1)
        if re.search(r"vèrtex", h, re.I):
            xv = -b / (2 * a)
            fora.append(("vèrtex", xv, a * xv * xv + b * xv + c))
        if re.search(r"talls amb els eixos", h, re.I):
            d = b * b - 4 * a * c
            if d >= 0:
                for r in ((-b + d ** 0.5) / (2 * a), (-b - d ** 0.5) / (2 * a)):
                    fora.append(("tall amb l'eix x", r, 0.0))
    m = REC.search(titol)
    if m and re.search(r"ordenada a l'origen", h, re.I):
        fora.append(("ordenada a l'origen", 0.0, f(m.group(2))))
    return fora


def main():
    items = [(n, it) for n in sorted(TOTS) for it in TOTS[n] if it.get("figura")]
    ok = bad = saltat = 0
    dolents, invisibles = [], []
    for n, it in items:
        svg = it["figura"]
        t = re.search(r"<title[^>]*>(.*?)</title>", svg, re.S)
        titol = t.group(1) if t else ""
        fns, _ = funcions(titol)
        e, cs = eixos(svg), corbes(svg)
        if fns:
            if not e or len(cs) < len(fns):
                saltat += 1
            else:
                px0, sx, py0, sy = e
                pitjor = 0.0
                for c in cs[:len(fns)]:
                    millor = 1e9
                    for fn in fns:
                        errs = [abs((Y - py0) / sy - fn((X - px0) / sx)) for X, Y in c]
                        if errs:
                            millor = min(millor, max(errs))
                    pitjor = max(pitjor, millor)
                if pitjor <= TOLERANCIA:
                    ok += 1
                else:
                    bad += 1
                    dolents.append((n, it["id"], titol[:56], pitjor))
        ext = extensio(svg)
        if ext:
            x0, x1, y0, y1 = ext
            for nom, x, y in trets_demanats(it, titol):
                if not (x0 - 0.1 <= x <= x1 + 0.1 and y0 - 0.1 <= y <= y1 + 0.1):
                    invisibles.append((n, it["id"], nom, x, y, ext))

    print("A. LA CORBA ENCAIXA AMB LA FORMULA DEL <title>")
    print("   grafiques amb formula: %d · encaixen: %d · no: %d · saltades: %d\n"
          % (ok + bad, ok, bad, saltat))
    for n, i, t, err in dolents:
        print("   !! full %s %-6s error maxim %.2f unitats - %s" % (n, i, err, t))

    print("\nB. EL TRET QUE L'EXERCICI DEMANA ES AL DIBUIX")
    print("   fora del tros dibuixat: %d\n" % len(invisibles))
    for n, i, nom, x, y, (x0, x1, y0, y1) in invisibles:
        print("   full %-2s %-6s  %s a (%g, %g)" % (n, i, nom, x, y))
        print("      pero nomes hi ha dibuixat x[%.1f, %.1f] y[%.1f, %.1f]"
              % (x0, x1, y0, y1))
    if not invisibles:
        print("   cap")


if __name__ == "__main__":
    main()
