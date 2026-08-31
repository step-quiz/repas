# -*- coding: utf-8 -*-
"""Passa l'auditor d'etiquetes (tools/auditoria/auditoria.py) per les 185
figures reals del banc. El control_auditoria.py nomes prova l'instrument."""
import collections, os, sys
AQUI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(AQUI, "auditoria"))
sys.path.insert(0, os.path.join(os.path.dirname(AQUI), "tests"))
from auditoria import audita
from comu import TOTS

items = [(n, it) for n in sorted(TOTS) for it in TOTS[n] if it.get("figura")]
print("figures auditades: %d\n" % len(items))
per_tipus = collections.Counter()
per_item = []
errors = []
for n, it in items:
    try:
        probs = audita(it["figura"], it["id"])
    except Exception as e:
        errors.append((it["id"], "%s: %s" % (type(e).__name__, e)))
        continue
    if probs:
        per_item.append((n, it["id"], probs))
        for p in probs:
            per_tipus[p[0] if isinstance(p, (list, tuple)) else str(p)[:5]] += 1

print("ítems amb algun defecte d'etiqueta: %d de %d" % (len(per_item), len(items)))
print("per tipus:", dict(per_tipus))
if errors:
    print("\nfigures que han petat a l'auditor: %d" % len(errors))
    for i, e in errors[:10]:
        print("   ", i, e)
print()
for n, i, probs in per_item[:60]:
    print("  full %-2s %-6s %s" % (n, i, probs))
