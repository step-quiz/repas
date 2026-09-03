#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""build_codi.py — genera les taules que comparteixen el generador de codis
(js/codi.js, dins de l'app) i l'analitzador (analitzador-repas.html).

Les dues bandes han de fer servir EXACTAMENT la mateixa taula: si divergissin,
un codi vàlid es llegiria malament sense que res avisés. Per això es generen
totes dues des d'aquí, en una sola passada.

Sortides:
  js/codi-taules.js        taules per a l'app (ordre d'ítems de cada full)
  tools/_taules.json       les mateixes dades, per injectar a l'analitzador

Ús:  python3 build_codi.py
"""

import json
import os
import re
import sys

ARREL = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")

# ---------------------------------------------------------------------
# Catàleg d'etiquetes d'error: ordre APPEND-ONLY
# ---------------------------------------------------------------------
# El codi porta els índexs d'aquesta llista, no els noms. Si algú la
# reordenés, tots els codis emesos fins llavors es llegirien malament. Per
# això el fitxer és append-only i aquest script atura la generació si detecta
# que una etiqueta ha canviat de posició. Afegir-ne de noves al final sí que
# és segur.
FITXER_ETIQ = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                           "codi-etiquetes.txt")


def etiquetes_ordenades():
    """Llista d'etiquetes en ordre estable. Les noves s'afegeixen al final."""
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import lib
    actuals = sorted(lib.TAX.keys())

    if os.path.exists(FITXER_ETIQ):
        with open(FITXER_ETIQ, encoding="utf-8") as f:
            previes = [l.strip() for l in f if l.strip() and not l.startswith("#")]
    else:
        previes = []

    # Cap etiqueta prèvia no pot desaparèixer ni moure's de lloc.
    ordre = list(previes)
    for e in actuals:
        if e not in ordre:
            ordre.append(e)

    perdudes = [e for e in previes if e not in actuals]
    if perdudes:
        print("  ⚠ etiquetes al fitxer però ja no al TAX (es mantenen per "
              "no moure els índexs): %s" % ", ".join(perdudes))

    assert len(ordre) <= 1024, (
        "més de 1024 etiquetes: el codi les guarda en 2 caràcters base32")

    with open(FITXER_ETIQ, "w", encoding="utf-8") as f:
        f.write("# Ordre APPEND-ONLY de les etiquetes d'error.\n")
        f.write("# El codi de verificació en guarda l'ÍNDEX, no el nom: si\n")
        f.write("# reordenes aquest fitxer, tots els codis ja emesos passen a\n")
        f.write("# llegir-se malament. Afegir al final és segur; res més ho és.\n")
        for e in ordre:
            f.write(e + "\n")
    return ordre


# ---------------------------------------------------------------------
# Ordre d'ítems de cada full
# ---------------------------------------------------------------------
FITXER_ORDRE = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                            "codi-ordre.json")


def ordre_estable(fulls_actuals):
    """Ordre APPEND-ONLY dels ítems de cada full, per al codi de verificació.

    El codi guarda l'estat de cada exercici per POSICIÓ. Si l'ordre canviés,
    tots els codis ja emesos passarien a llegir-se malament, i en silenci.

    Al principi això s'aconseguia amb una regla de disciplina —"el contingut
    nou va sempre al final del full"—, però la regla es trenca sola: quan es
    recupera un exercici que faltava, el seu lloc natural és entre els seus
    germans, no al final. El 170f va just després del 170e, i posar-lo al
    final del Full 9 seria absurd per a qui l'ha de fer.

    Per això l'ordre de CODIFICACIÓ es desa aquí i és append-only, separat de
    l'ordre de PRESENTACIÓ, que és el de `data/fullN.js`. Un exercici nou
    s'insereix on toca per a l'alumne i s'afegeix al final d'aquesta llista
    per al codi. Les dues coses deixen de dependre l'una de l'altra.
    """
    if os.path.exists(FITXER_ORDRE):
        with open(FITXER_ORDRE, encoding="utf-8") as f:
            previ = json.load(f)
    else:
        previ = {}

    ordre, avisos = {}, []
    for n, ids in fulls_actuals.items():
        k = str(n)
        anterior = previ.get(k, [])
        vius = set(ids)
        # Els que ja hi eren es queden EXACTAMENT on eren, encara que hagin
        # desaparegut del full: buidar-los mouria tota la resta.
        nou = list(anterior)
        for i in ids:
            if i not in nou:
                nou.append(i)
        morts = [i for i in anterior if i not in vius]
        if morts:
            avisos.append("full %s: %d ítems ja no hi són però es mantenen a "
                          "l'ordre per no moure la resta (%s)"
                          % (k, len(morts), ", ".join(morts[:5])))
        ordre[k] = nou

    with open(FITXER_ORDRE, "w", encoding="utf-8") as f:
        json.dump(ordre, f, ensure_ascii=False, indent=0)
    for a in avisos:
        print("  ⚠ " + a)
    return ordre


def taula_fulls():
    """{full: {items: [id...], blocs: [[titol, primer, últim]...], dif: "12321..."}}

    `items` va en l'ordre APPEND-ONLY de `codi-ordre.json`, no en el de
    `data/fullN.js`: vegeu ordre_estable().

    Cada bloc es dona com la LLISTA de posicions que li pertoquen, no com un
    rang. Un rang només valdria si els blocs fossin contigus en aquest ordre,
    i deixen de ser-ho tan bon punt es recupera un exercici: el 170f va al
    final de l'ordre de codificació però al bloc dels prismes, que comença a
    la posició 0. Amb rangs, aquell bloc s'empassaria mig full.
    """
    fulls, dades = {}, {}
    for n in range(1, 13):
        ruta = os.path.join(ARREL, "data", "full%d.js" % n)
        if not os.path.exists(ruta):
            continue
        with open(ruta, encoding="utf-8") as f:
            s = f.read()
        d = json.loads(s[s.index("{"):s.rindex("}") + 1])
        dades[n] = d
        fulls[n] = [it["id"] for it in d["items"]]

    ordre = ordre_estable(fulls)

    out = {}
    for n, d in dades.items():
        ids = ordre[str(n)]
        info = {it["id"]: it for it in d["items"]}
        pos = {i: k for k, i in enumerate(ids)}
        difs = "".join(str(info[i]["dif"]) if i in info else "1" for i in ids)
        blocs = []
        for b in d["blocs"]:
            idxs = sorted(pos[i] for i in b["items"] if i in pos)
            if idxs:
                blocs.append([b["titol"], idxs])
        out[n] = {"titol": d["titol"], "items": ids, "blocs": blocs, "dif": difs}
    return out, dades


# ---------------------------------------------------------------------
# Banc d'enunciats per a la pestanya "Prova escrita" de l'analitzador.
#
# RE_TAULES només porta l'ordre i l'estat per posició, que és el que viatja
# dins del codi; per compondre un examen en paper cal el text real de cada
# exercici. S'indexa per ID, no per posició dins del full: la posició depèn
# de quin dels dos ordres es miri (el de presentació de data/fullN.js o
# l'append-only de codi-ordre.json) i al Full 9 no coincideixen en 42 de 47
# posicions. Indexant per id, la pregunta que surt a la prova és sempre la
# que l'alumne va fer de veritat.
#
# `ex` (l'exercici mare del qual l'ítem és un apartat) hi va perquè la prova
# no reparteixi sis variants del mateix problema; `pistes`, `nota` i la resta
# no hi van perquè la prova no els fa servir.
# ---------------------------------------------------------------------
def taula_banc(dades):
    """{id: {ex, bloc, dif, encapcalament, enunciat, opcions, clau, figura?}}"""
    banc = {}
    for n, d in dades.items():
        # Un apartat pot no dur encapçalament perquè el porta el primer germà
        # del mateix exercici (ex_text=""): dins d'un full és indiferent,
        # perquè es llegeixen seguits, però en una prova on l'exercici surt
        # sol l'enunciat es queda en "16 cm" i no vol dir res. Aquí s'hereta
        # del primer germà que en tingui.
        cap_mare = {}
        for it in d["items"]:
            cap = (it.get("encapcalament") or "").strip()
            if cap and it["ex"] not in cap_mare:
                cap_mare[it["ex"]] = cap
        for it in d["items"]:
            entrada = {
                "ex": it["ex"], "bloc": it["bloc"], "dif": it["dif"],
                "encapcalament": (it.get("encapcalament") or "").strip()
                                 or cap_mare.get(it["ex"], ""),
                "enunciat": it["enunciat"],
                "opcions": it.get("opcions", []), "clau": it["clau"],
            }
            if it.get("figura"):
                entrada["figura"] = it["figura"]
            banc[it["id"]] = entrada
    return banc


# ---------------------------------------------------------------------
# Proves del test inicial (per al tipus de codi "diagnòstic")
# ---------------------------------------------------------------------
def taula_proves():
    ruta = os.path.join(ARREL, "js", "proves-inicials.js")
    s = open(ruta, encoding="utf-8").read()
    # Cada prova és un objecte amb id i tema; els quatre primers `id:` del
    # fitxer són els estats d'autoavaluació, no proves, i es descarten
    # exigint que l'`id` vagi seguit d'un `tema`.
    parells = re.findall(r'\bid:\s*"(\w+)",\s*\n\s*tema:\s*"([^"]+)"', s)
    assert len(parells) == 15, "esperava 15 proves, n'he trobat %d" % len(parells)
    return [{"id": i, "tema": t} for i, t in parells]


def main():
    etiq = etiquetes_ordenades()
    fulls, dades_fulls = taula_fulls()
    banc = taula_banc(dades_fulls)
    proves = taula_proves()

    dades = {"v": 1, "etiquetes": etiq, "fulls": fulls, "proves": proves}

    # --- per a l'app ---
    js = os.path.join(ARREL, "js", "codi-taules.js")
    with open(js, "w", encoding="utf-8") as f:
        f.write("/* Generat per tools/build_codi.py — no editeu aquest fitxer "
                "a mà. */\nwindow.RE_TAULES = ")
        json.dump(dades, f, ensure_ascii=False, separators=(",", ":"))
        f.write(";\n")

    # --- per injectar a l'analitzador ---
    jj = os.path.join(os.path.dirname(os.path.abspath(__file__)), "_taules.json")
    with open(jj, "w", encoding="utf-8") as f:
        json.dump(dades, f, ensure_ascii=False, separators=(",", ":"))

    # --- banc d'enunciats, també per injectar a l'analitzador ---
    bb = os.path.join(os.path.dirname(os.path.abspath(__file__)), "_banc.json")
    with open(bb, "w", encoding="utf-8") as f:
        json.dump(banc, f, ensure_ascii=False, separators=(",", ":"))

    tot = sum(len(v["items"]) for v in fulls.values())
    print("✓ %s (%d fulls, %d ítems, %d etiquetes, %d proves, %.1f kB)"
          % (js, len(fulls), tot, len(etiq), len(proves),
             os.path.getsize(js) / 1024))
    print("✓ %s (%d ítems, %.1f kB)" % (bb, len(banc), os.path.getsize(bb) / 1024))


if __name__ == "__main__":
    main()
