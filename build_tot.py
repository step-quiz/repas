#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""build_tot.py — compila el projecte sencer, en l'ordre que toca.

    python3 build_tot.py

1. Els dotze fulls (data/fullN.js i REVISIO-fullN.html).
2. Les taules del codi de verificació, que es llegeixen de data/.
3. L'analitzador, que incrusta aquelles taules i js/codi.js.

L'ordre importa: si es toca un generador i no es refan les taules, l'ordre
d'ítems del codi i el de l'app deixen de coincidir. Aquest script hi és
justament per no haver-ho de recordar.
"""

import os
import subprocess
import sys

AQUI = os.path.dirname(os.path.abspath(__file__))


def executa(args, etiqueta):
    r = subprocess.run([sys.executable] + args, cwd=AQUI,
                       capture_output=True, text=True)
    if r.returncode != 0:
        sys.stderr.write(r.stdout + r.stderr)
        sys.exit("✗ ha fallat: %s" % etiqueta)
    return r.stdout.strip()


def main():
    print("— Fulls —")
    for n in range(1, 13):
        for l in executa(["build.py", str(n)], "full %d" % n).splitlines():
            if l.startswith("✓ /"):
                print("  full %-2d %s" % (n, l.split("/")[-1]))

    print("— Codi de verificació —")
    print("  " + executa(["build_codi.py"], "taules del codi"))
    print("  " + executa(["build_analitzador.py"], "analitzador"))
    print("Fet.")


if __name__ == "__main__":
    main()
