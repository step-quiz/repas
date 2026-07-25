# -*- coding: utf-8 -*-
"""build.py — Compila el banc de preguntes.

Sortides:
  web/data/full1.js      dades del lloc (respostes ofuscades en base64)
  REVISIO-full1.html     clau de respostes completa, per revisar abans de publicar
"""

import base64
import html
import json
import os
import random
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import lib
import c_enters, c_divisibilitat, c_fraccions, c_decimals  # noqa: F401

ARREL = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
BANC = lib.banc()

BLOCS = [
    ("enters", "Nombres enters", "Operacions combinades, regla dels signes i jerarquia."),
    ("divisibilitat", "Divisibilitat", "Descomposició factorial, m.c.d., m.c.m. i problemes."),
    ("fraccions", "Fraccions", "Equivalència, simplificació i operacions combinades."),
    ("decimals", "Decimals", "Tipus de decimal i fracció generatriu."),
]

# ------------------------------------------------------ math vs text mixt
_NETEJA = re.compile(r"\\(dfrac|cdot|overline|operatorname|quad|mathbf|ne|rightarrow)")
_NOMES_MAT = re.compile(r"^[-+0-9\s{}^,.:()]*$")


def mathify(s):
    """Embolcalla amb $...$ el que és matemàtica pura; deixa igual el text mixt."""
    if "$" in s:
        return s
    if _NOMES_MAT.match(_NETEJA.sub("", s)):
        return "$%s$" % s
    return s


def b64(obj):
    return base64.b64encode(
        json.dumps(obj, ensure_ascii=False).encode("utf-8")).decode("ascii")


# ------------------------------------------------------------ validacions
def valida_global():
    ids = [it["id"] for it in BANC]
    assert len(ids) == len(set(ids)), "hi ha identificadors repetits"
    for it in BANC:
        assert it["bloc"] in dict((b[0], b[1]) for b in BLOCS), it["id"]
        for camp in ("enunciat", "correcta"):
            assert it[camp].strip(), "%s: %s buit" % (it["id"], camp)
    sospitosos = []
    for it in BANC:
        for o in [it["correcta"]] + [d["tex"] for d in it["distractors"]]:
            m = mathify(o)
            if "\\" in m and "$" not in m:
                sospitosos.append((it["id"], o))
    assert not sospitosos, "opcions amb LaTeX sense delimitar: %s" % sospitosos[:5]
    print("✓ %d ítems, %d identificadors únics" % (len(BANC), len(set(ids))))


# ------------------------------------------------------------ dades del web
def compila():
    items = []
    for it in BANC:
        opcions = [mathify(it["correcta"])] + [mathify(d["tex"]) for d in it["distractors"]]
        diag = [""] + [d["fb"] for d in it["distractors"]]
        etiq = [""] + [d["err"] for d in it["distractors"]]
        ordre = list(range(4))
        random.Random("repas-eso::" + it["id"]).shuffle(ordre)
        items.append({
            "id": it["id"],
            "ex": it["ex"],
            "ap": it["ap"],
            "bloc": it["bloc"],
            "tipus": it["tipus"],
            "encapcalament": it["ex_text"],
            "enunciat": it["enunciat"],
            "opcions": [opcions[i] for i in ordre],
            "pistes": it["pistes"],
            "nota": it["nota"],
            "clau": b64({
                "ok": ordre.index(0),
                "diag": [diag[i] for i in ordre],
                "err": [etiq[i] for i in ordre],
                "res": it["resolucio"],
            }),
        })

    blocs = [{"id": b, "titol": t, "descripcio": d,
              "items": [i["id"] for i in items if i["bloc"] == b]} for b, t, d in BLOCS]
    dades = {
        "full": 1,
        "titol": "Full 1 — Nombres enters, fraccions i decimals",
        "subtitol": "Operacions amb enters, divisibilitat, fraccions i pas de "
                    "decimal a fracció generatriu.",
        "blocs": blocs,
        "items": items,
    }
    os.makedirs(os.path.join(ARREL, "data"), exist_ok=True)
    ruta = os.path.join(ARREL, "data", "full1.js")
    with open(ruta, "w", encoding="utf-8") as f:
        f.write("/* Generat per tools/build.py — no editeu aquest fitxer a mà. */\n")
        f.write("window.FULL1 = ")
        json.dump(dades, f, ensure_ascii=False, indent=1)
        f.write(";\n")
    print("✓ %s (%.0f kB)" % (ruta, os.path.getsize(ruta) / 1024))
    return dades


# ------------------------------------------------------- full de revisió
CSS_REV = """
body{font:15px/1.55 -apple-system,Segoe UI,Roboto,sans-serif;color:#16202E;
 max-width:60rem;margin:0 auto;padding:2rem 1.2rem 6rem}
h1{font-size:1.5rem;margin:0 0 .2rem} h2{font-size:1.05rem;margin:2.2rem 0 .6rem;
 border-bottom:2px solid #16202E;padding-bottom:.25rem}
.meta{color:#5A6B80;margin:0 0 1.5rem}
.it{border:1px solid #D8DFE8;border-radius:8px;padding:.8rem 1rem;margin:.7rem 0;
 page-break-inside:avoid}
.cap{display:flex;gap:.6rem;align-items:baseline;margin-bottom:.35rem}
.cod{font:700 13px ui-monospace,monospace;background:#16202E;color:#fff;
 padding:.1rem .4rem;border-radius:4px}
.tip{font-size:11px;color:#5A6B80;text-transform:uppercase;letter-spacing:.06em}
.enun{margin:.2rem 0 .5rem}
ol.op{margin:.3rem 0;padding-left:1.4rem}
ol.op li{margin:.15rem 0}
.ok{background:#E4F3EC;font-weight:600;padding:.05rem .25rem;border-radius:3px}
.err{font:600 11px ui-monospace,monospace;color:#8C2F28;background:#FBEDEC;
 padding:.05rem .3rem;border-radius:3px;margin-right:.3rem}
.fb{color:#43506180}
.sec{color:#5A6B80;font-size:13px;margin:.4rem 0 0}
.res li{margin:.1rem 0}
.nota{background:#FFF6E5;border-left:3px solid #B06B00;padding:.4rem .6rem;
 margin:.5rem 0 0;font-size:13.5px}
.avis{background:#FBEDEC;border-left:3px solid #C4362F;padding:.8rem 1rem;
 margin:1rem 0 2rem;border-radius:0 6px 6px 0}
table{border-collapse:collapse;font-size:13px;width:100%}
td,th{border:1px solid #D8DFE8;padding:.3rem .5rem;text-align:left}
@media print{.it{border-color:#bbb}}
"""

KATEX = """
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"
 onload="renderMathInElement(document.body,{delimiters:[{left:'$',right:'$',display:false}],
 throwOnError:false})"></script>
"""


def revisio(dades):
    errors = {}
    for it in BANC:
        for d in it["distractors"]:
            errors.setdefault(d["err"], []).append(it["id"])

    p = ['<!DOCTYPE html><html lang="ca"><meta charset="utf-8">',
         '<meta name="viewport" content="width=device-width,initial-scale=1">',
         '<title>Revisió — Full 1</title>', KATEX, '<style>%s</style>' % CSS_REV,
         '<h1>Clau de respostes — Full 1</h1>',
         '<p class="meta">%d preguntes · generades i verificades amb Python/SymPy · '
         'pendents de revisió humana.</p>' % len(BANC),
         '<div class="avis"><strong>Com revisar-ho.</strong> Cada resposta correcta '
         's\'ha calculat amb aritmètica exacta de fraccions, no s\'ha escrit a mà, '
         'i cap distractor coincideix amb la resposta correcta (comprovat al build). '
         'El que convé revisar és: (1) que la interpretació de l\'enunciat sigui la '
         'que volíeu, sobretot als ítems marcats amb nota; (2) que els distractors '
         'siguin errors que realment cometen els vostres alumnes; (3) el to i la '
         'claredat del feedback i de les pistes.</div>']

    for b, titol, desc in BLOCS:
        items = [it for it in BANC if it["bloc"] == b]
        p.append('<h2>%s <span class="tip">· %d preguntes</span></h2>' % (titol, len(items)))
        ex_vist = None
        for it in items:
            if it["ex"] != ex_vist:
                ex_vist = it["ex"]
                p.append('<p class="sec"><strong>Exercici %d.</strong> %s</p>'
                         % (it["ex"], html.escape(it["ex_text"])))
            p.append('<div class="it"><div class="cap"><span class="cod">%s</span>'
                     '<span class="tip">tipus %s</span></div>'
                     % (it["id"], it["tipus"]))
            p.append('<div class="enun">%s</div>' % it["enunciat"])
            p.append('<ol class="op"><li><span class="ok">%s</span> — resposta correcta</li>'
                     % mathify(it["correcta"]))
            for d in it["distractors"]:
                p.append('<li>%s<br><span class="err">%s</span><span class="fb">%s</span></li>'
                         % (mathify(d["tex"]), d["err"], d["fb"]))
            p.append('</ol>')
            p.append('<p class="sec"><strong>Pistes:</strong></p><ol class="res">%s</ol>'
                     % "".join("<li>%s</li>" % x for x in it["pistes"]))
            p.append('<p class="sec"><strong>Resolució:</strong></p><ol class="res">%s</ol>'
                     % "".join("<li>%s</li>" % x for x in it["resolucio"]))
            if it["nota"]:
                p.append('<p class="nota"><strong>Nota:</strong> %s</p>' % it["nota"])
            p.append('</div>')

    p.append('<h2>Catàleg d\'errors utilitzats</h2><table><tr><th>Etiqueta</th>'
             '<th>Vegades</th><th>Preguntes</th></tr>')
    for e, ids in sorted(errors.items(), key=lambda x: -len(x[1])):
        p.append('<tr><td><code>%s</code></td><td>%d</td><td>%s</td></tr>'
                 % (e, len(ids), ", ".join(ids[:14]) + ("…" if len(ids) > 14 else "")))
    p.append('</table></html>')

    ruta = os.path.join(ARREL, "REVISIO-full1.html")
    open(ruta, "w", encoding="utf-8").write("\n".join(p))
    print("✓ %s (%d errors diferents al catàleg)" % (ruta, len(errors)))


if __name__ == "__main__":
    valida_global()
    revisio(compila())
