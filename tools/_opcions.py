# -*- coding: utf-8 -*-
"""Indicis que delaten la resposta correcta sense fer matematiques.

Tres patrons trobats revisant els fulls 1, 8 i 12. Cap depen de renderitzar
res: es calculen del banc directament, o sigui que aixo es pot executar a
cada canvi.

  A  ODD ONE OUT. En un item de si/no, la correcta es l'unica opcio amb el
     seu prefix: tres "Si" i un "No", i el "No" es el bo.
  B  L'UNICA SENSE EXPLICACIO. Les tres dolentes porten una clausula que
     descriu l'error ("dividint pel total de positius en lloc del de
     malalts") i la bona va pelada.
  C  LA MES LLARGA. La correcta es la mes llarga de totes.

Cap dels tres es un error de contingut: totes les respostes son correctes i
els distractors modelen errors reals. El problema es que es poden encertar
sense saber el tema, i per tant l'exercici no mesura el que vol mesurar.

UN FALS POSITIU QUE VAIG PICAR
------------------------------
La primera versio de B buscava parentesis amb text llarg a dins, i el
`(positiu|malalt)` de la notacio LaTeX li encaixava: donava per "explicada"
una opcio que anava pelada, i 319 quedava fora de la llista. El recompte va
passar de 19 a 45 nomes traient les formules abans de mirar. Qualsevol
mesura sobre el text d'una opcio ha de descartar primer els trams $...$.
"""
import collections
import re
import sys

sys.path.insert(0, "tests")
from comu import TOTS

PREFIXOS = ("No es pot", "No es podria", "Sí", "Si ", "No", "Cert", "Fals",
            "Sempre", "Mai", "Depèn")
PROSA_MINIMA = 12              # caracters de text, sense formules
MARGE_LLARGADA = 1.0           # C: n'hi ha prou amb ser la mes llarga


def prosa(o):
    """El text d'una opcio sense cap formula. Veure la nota de dalt."""
    return re.sub(r"\$[^$]*\$", " ", o).strip(" ,.;:")


def prefix(o):
    t = o.strip()
    for p in PREFIXOS:
        if t.startswith(p):
            return p.strip()
    return None


def odd_one_out(it):
    ops = it["opcions"]
    if len(ops) < 3:
        return False
    pr = [prefix(o) for o in ops]
    if any(p is None for p in pr):
        return False
    return collections.Counter(pr)[pr[it["ok"]]] == 1


def unica_sense_explicacio(it):
    ops = it["opcions"]
    if len(ops) < 3:
        return False
    amb = [j for j, o in enumerate(ops) if len(prosa(o)) >= PROSA_MINIMA]
    return len(amb) == len(ops) - 1 and it["ok"] not in amb


def la_mes_llarga(it):
    ops = it["opcions"]
    if len(ops) < 3:
        return False
    L = [len(prosa(o)) for o in ops]
    if max(L) < 40:
        return False               # opcions numeriques: la llargada no diu res
    altres = [l for j, l in enumerate(L) if j != it["ok"]]
    return L[it["ok"]] > max(altres)


def main():
    items = [(n, it) for n in sorted(TOTS) for it in TOTS[n]]
    proves = [("A · odd one out (si/no)", odd_one_out),
              ("B · única sense explicació", unica_sense_explicacio),
              ("C · la més llarga", la_mes_llarga)]
    trobats = {nom: [] for nom, _ in proves}
    delatats = set()
    for n, it in items:
        for nom, fn in proves:
            # sense try/except: un error aqui ha de petar, no desapareixer.
            # La primera versio en tenia un i em va amagar una linia mal
            # escrita a la prova C, que donava 0 encerts en comptes de 76.
            if fn(it):
                trobats[nom].append((n, it["id"]))
                delatats.add((n, it["id"]))

    print("ítems al banc: %d\n" % len(items))
    for nom, _ in proves:
        v = trobats[nom]
        per = collections.Counter(n for n, _ in v)
        print("%-30s %3d ítems   %s" % (nom, len(v), dict(sorted(per.items()))))
    print("\nítems delatats per algun dels tres: %d (%.0f%% del banc)"
          % (len(delatats), 100.0 * len(delatats) / len(items)))

    # quant encerta qui nomes mira la llargada, sense entendre res
    amb_text = [(n, it) for n, it in items
                if len(it["opcions"]) >= 3
                and max(len(prosa(o)) for o in it["opcions"]) >= 40]
    encerts = sum(1 for _, it in amb_text
                  if max(range(len(it["opcions"])),
                         key=lambda j: len(prosa(it["opcions"][j]))) == it["ok"])
    print("\nestrategia \"tria la mes llarga\" sobre els %d items amb opcions de text:"
          % len(amb_text))
    print("   encerta %d (%.0f%%), contra el %.0f%% que donaria l'atzar"
          % (encerts, 100.0 * encerts / len(amb_text),
             100.0 / (sum(len(it["opcions"]) for _, it in amb_text) / len(amb_text))))

    per_full = collections.Counter(n for n, _ in delatats)
    tot_full = collections.Counter(n for n, _ in items)
    print("\nper full (delatats / total):")
    for n in sorted(tot_full):
        d = per_full.get(n, 0)
        print("   full %-2s  %3d / %3d   %4.0f%%%s"
              % (n, d, tot_full[n], 100.0 * d / tot_full[n],
                 "   <<<" if d >= 0.25 * tot_full[n] else ""))

    print("\n--- detall per prova ---")
    for nom, _ in proves:
        print("\n%s" % nom)
        per = collections.defaultdict(list)
        for n, i in trobats[nom]:
            per[n].append(i)
        for n in sorted(per):
            print("   full %-2s: %s" % (n, " ".join(per[n])))


if __name__ == "__main__":
    main()
