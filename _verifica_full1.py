# -*- coding: utf-8 -*-
"""Verificacio matematica de la clau de respostes del full 1.

No forma part del projecte: es una comprovacio afegida per la revisio.
Converteix l'enunciat i les opcions de LaTeX a expressions exactes (Fraction)
i comprova tres coses per a cada item que es pugui avaluar:

  1. l'opcio marcada com a correcta val el que val l'enunciat,
  2. cap altra opcio val el mateix (distractor tambe correcte),
  3. les opcions son totes diferents entre elles.

El que no es pot avaluar automaticament (problemes amb text, "troba l'error",
tipus de decimal) queda marcat com a NO AVALUAT, no com a correcte.
"""
import json
import re
import sys
from fractions import Fraction

sys.path.insert(0, "tests")
from comu import TOTS


class NoAvaluable(Exception):
    pass


def _periodic(entera_i_ante, periode):
    """0,ab<cd> -> Fraction exacta. `entera_i_ante` es tot el que hi ha abans
    del periode, amb la coma; `periode` son les xifres que es repeteixen."""
    if "." in entera_i_ante:
        ent, ante = entera_i_ante.split(".", 1)
    else:
        ent, ante = entera_i_ante, ""
    ent = ent or "0"
    neg = ent.startswith("-")
    ent = ent.lstrip("-") or "0"
    a, p = len(ante), len(periode)
    # (ent.ante periode  -  ent.ante) / (10^a (10^p - 1))
    num = int(ent + ante + periode) - int(ent + ante or "0")
    den = (10 ** p - 1) * 10 ** a
    v = Fraction(num, den)
    return -v if neg else v


def latex_a_valor(s):
    """LaTeX -> Fraction. Aixeca NoAvaluable si no ho sap fer."""
    t = s.strip()
    if t.startswith("$") and t.endswith("$"):
        t = t[1:-1]
    t = t.replace("\\left", "").replace("\\right", "")
    t = t.replace("\\,", "").replace("\\ ", " ").replace("~", " ")
    t = t.replace("\\cdot", "*").replace("\\times", "*")
    t = t.replace("\\!", "")

    # decimals periodics: 3{,}2\overline{572}  /  0{,}\overline{8}
    def rep(m):
        return "PER(%s@%s)" % (m.group(1).replace("{,}", "."), m.group(2))
    t = re.sub(r"([0-9]*(?:\{,\}[0-9]*)?)\\overline\{([0-9]+)\}", rep, t)

    # fraccions
    for _ in range(8):
        nou = re.sub(r"\\[dt]?frac\{([^{}]*)\}\{([^{}]*)\}", r"((\1)/(\2))", t)
        if nou == t:
            break
        t = nou
    if "\\frac" in t or "\\dfrac" in t:
        raise NoAvaluable("fraccio imbricada")

    t = t.replace("{,}", ".").replace(",", ".")
    t = t.replace("[", "(").replace("]", ")")
    t = t.replace("^", "**")
    t = re.sub(r"(?<![:=<>])\s*:\s*", "/", t)      # ':' es divisio
    t = t.replace("{", "(").replace("}", ")")

    if re.search(r"[A-Za-z\\]", t.replace("PER", "")):
        raise NoAvaluable("simbols no numerics: %r" % t[:40])

    # numeros -> Fraction; PER(...) -> _periodic
    t = re.sub(r"PER\(([-0-9.]*)@([0-9]+)\)", r'_P("\1","\2")', t)
    t = re.sub(r"(?<![\w.\"])(\d+\.\d+|\d+)(?![\w.\"])", r'F("\1")', t)

    def F(x):
        return Fraction(x)

    try:
        return eval(t, {"__builtins__": {}}, {"F": F, "_P": _periodic,
                                              "Fraction": Fraction})
    except ZeroDivisionError:
        raise NoAvaluable("divisio per zero")
    except Exception as e:
        raise NoAvaluable("no avaluable (%s)" % type(e).__name__)


def main():
    f1 = TOTS[1]
    # nomes els blocs d'exercicis de calcul pur
    CALCUL = {"1", "2", "3", "21", "22", "23", "24", "25", "31", "32"}
    resultats = []
    for it in f1:
        ident = it["id"]
        ex = re.match(r"(\d+)", ident).group(1)
        k = it
        ok = k["ok"]
        ops = it["opcions"]
        if ex not in CALCUL:
            resultats.append((ident, "NO_AVALUAT", "no es calcul pur", ""))
            continue
        try:
            val = latex_a_valor(it["enunciat"])
        except NoAvaluable as e:
            resultats.append((ident, "NO_AVALUAT", "enunciat: %s" % e, ""))
            continue
        vops, fallats = [], 0
        for o in ops:
            try:
                vops.append(latex_a_valor(o))
            except NoAvaluable:
                vops.append(None)
                fallats += 1
        if vops[ok] is None:
            resultats.append((ident, "NO_AVALUAT", "opcio correcta no avaluable", ""))
            continue
        det = "enunciat=%s clau[%d]=%s" % (val, ok, vops[ok])
        if vops[ok] != val:
            resultats.append((ident, "CLAU_ERRONIA", det,
                              " | ".join(map(str, vops))))
            continue
        iguals = [i for i, v in enumerate(vops) if v is not None and v == val]
        if len(iguals) > 1:
            resultats.append((ident, "DISTRACTOR_CORRECTE",
                              "opcions %s valen totes %s" % (iguals, val), ""))
            continue
        resultats.append((ident, "OK", det, ""))

    print("=== VERIFICACIO MATEMATICA — full 1 ===\n")
    per_estat = {}
    for r in resultats:
        per_estat.setdefault(r[1], []).append(r)
    for est in ["CLAU_ERRONIA", "DISTRACTOR_CORRECTE", "OK", "NO_AVALUAT"]:
        rs = per_estat.get(est, [])
        print("%-22s %3d" % (est, len(rs)))
    print()
    for est in ["CLAU_ERRONIA", "DISTRACTOR_CORRECTE"]:
        for ident, _, det, extra in per_estat.get(est, []):
            print("  !! %-6s %s  %s  %s" % (ident, est, det, extra))
    print("\n--- no avaluats (motiu) ---")
    motius = {}
    for ident, est, det, _ in per_estat.get("NO_AVALUAT", []):
        motius.setdefault(det, []).append(ident)
    for m, ids in sorted(motius.items(), key=lambda x: -len(x[1])):
        print("  %-42s %3d  %s" % (m[:42], len(ids), " ".join(ids[:14])))


if __name__ == "__main__":
    main()
