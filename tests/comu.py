# -*- coding: utf-8 -*-
"""tests/comu.py — el que comparteixen totes les proves del banc.

Carrega els dotze `data/fullN.js` un sol cop i els deixa a `TOTS` (per full) i
`PLANS` (tots seguits). Els ajudants `clau()` i `num()` són per llegir la
resposta correcta d'un ítem.

IMPORTANT: aquí no s'importa RES de `tools/`. Les proves de matemàtiques han
de recalcular les respostes de zero; si comprovessin `lib.py` amb `lib.py`, una
errada del motor passaria per les dues bandes i no la veuria ningú. L'única
excepció és `lib.TAX`, que es carrega dins de la prova que el necessita.
"""
import base64
import json
import os
import re
from fractions import Fraction as F

ARREL = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")


def carrega(n):
    ruta = os.path.join(ARREL, "data", "full%d.js" % n)
    with open(ruta, encoding="utf-8") as f:
        s = f.read()
    return json.loads(s[s.index("{"):s.rindex("}") + 1])


def items(n):
    d = carrega(n)
    out = []
    for it in d["items"]:
        k = json.loads(base64.b64decode(it["clau"]))
        out.append(dict(it, **k))
    return out


TOTS = {n: items(n) for n in range(1, 13)}
PLANS = [it for n in sorted(TOTS) for it in TOTS[n]]


def clau(it):
    """La opció correcta d'un ítem (accepta l'ítem o el seu id dins d'un full)."""
    return it["opcions"][it["ok"]]


def per_id(n, qid):
    return [x for x in TOTS[n] if x["id"] == qid][0]


def num(t):
    """Primer valor numèric d'una cadena LaTeX: fracció o decimal català."""
    t = t.replace("\\,", "").replace("\\ ", "")
    m = re.search(r"(-?)\\d?frac\{(-?\d+)\}\{(-?\d+)\}", t)
    if m:
        v = F(int(m.group(2)), int(m.group(3)))
        return -v if m.group(1) == "-" else v
    m = re.search(r"(-?\d+(?:\{,\}\d+)?)", t)
    return F(m.group(1).replace("{,}", ".")) if m else None
