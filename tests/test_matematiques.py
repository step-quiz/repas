# -*- coding: utf-8 -*-
"""tests/test_matematiques.py — recàlcul independent de les respostes.

Cada classe recalcula de zero amb `Fraction` i sense importar res de
`tools/`. És l'única manera que serveixin de res.

QUI AFEGEIXI CONTINGUT NOU: afegeix aquí la teva classe, o crea
`test_<el_teu_tema>.py`; `unittest discover` els troba tots dos."""
import os
import sys

# Perquè `python3 -m unittest tests.test_x` funcioni igual que la descoberta:
# `comu` és germà d'aquest fitxer, no del directori des d'on s'executa.
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import re
import unittest

from comu import ARREL, TOTS, PLANS, carrega, clau, num, per_id  # noqa: F401
from fractions import Fraction as F  # noqa: F401



class MatematiquesFull1(unittest.TestCase):
    """Recàlcul independent d'una mostra ampla del Full 1. Es fa amb
    `Fraction` i prou: cap import de `tools/`."""

    def test_fraccions_generatrius(self):
        """Els ítems que van d'un decimal a la seva fracció (27, 28, 30)."""
        provats = 0
        for it in TOTS[1]:
            m = re.fullmatch(r"\$(-?)(\d+)\{,\}(\d*)(?:\\overline\{(\d+)\})?\$",
                             it["enunciat"].strip())
            if not m:
                continue
            esperat = num(clau(it))
            if esperat is None:
                continue
            sg, ent, ante, per = m.group(1), m.group(2), m.group(3) or "", m.group(4)
            if per is None:
                v = F(int(ent + ante), 10 ** len(ante))
            else:
                v = F(int(ent + ante + per) - int(ent + ante),
                      int("9" * len(per) + "0" * len(ante)))
            if sg:
                v = -v
            self.assertEqual(v, esperat, "%s: %s no val %s"
                             % (it["id"], it["enunciat"], clau(it)))
            provats += 1
        self.assertGreater(provats, 20, "esperava provar més generatrius")

    def test_descomposicions_factorials(self):
        provats = 0
        for it in TOTS[1]:
            if not it["id"].startswith("5"):
                continue
            m = re.fullmatch(r"\$(-?\d+)\$", it["enunciat"].strip())
            if not m:
                continue
            n = abs(int(m.group(1)))
            prod = 1
            for p, e in re.findall(r"(\d+)(?:\^\{(\d+)\})?", clau(it)):
                prod *= int(p) ** (int(e) if e else 1)
            self.assertEqual(prod, n, "%s: la descomposició no reconstrueix %d"
                             % (it["id"], n))
            provats += 1
        self.assertGreaterEqual(provats, 3)



class MatematiquesFull11(unittest.TestCase):
    """Els estadístics del bloc nou, recalculats de zero."""

    L260 = {"a": [3, 5, 5, 8, 9], "b": [6, 2, 7, 4, 6],
            "c": [5, 7, 7, 9, 2, 6], "d": [8, 3, 5, 5, 9]}
    L261 = {"a": [3, 6, 19, 2, 10], "b": [18, 4, 14, 12],
            "c": [14, 14, 15, 1, 8, 7, 18], "d": [9, 5, 17, 7, 2, 20]}
    L270 = {"a": [2, 4, 4, 4, 5, 5, 7, 9], "b": [10, 12, 14, 16, 18],
            "c": [4, 8, 6, 5, 3, 2, 8, 4]}

    def _it(self, i):
        return [x for x in TOTS[11] if x["id"] == i][0]

    def test_mitjanes(self):
        for a, v in self.L260.items():
            self.assertEqual(F(sum(v), len(v)), num(clau(self._it("260" + a))))

    def test_medianes(self):
        for a, v in self.L261.items():
            o, n = sorted(v), len(v)
            esp = F(o[n // 2]) if n % 2 else F(o[n // 2 - 1] + o[n // 2], 2)
            self.assertEqual(esp, num(clau(self._it("261" + a))))

    def test_variancies_i_desviacions(self):
        for a, v in self.L270.items():
            m = F(sum(v), len(v))
            var = F(sum((F(x) - m) ** 2 for x in v), len(v))
            t = clau(self._it("270" + a))
            mv = re.search(r"sigma\^2=([^,$]+)", t)
            ms = re.search(r"sigma\\approx([\d{},]+)", t)
            self.assertEqual(var, num("$" + mv.group(1) + "$"), "270%s variància" % a)
            self.assertEqual("%.2f" % (float(var) ** 0.5),
                             ms.group(1).replace("{,}", "."), "270%s desviació" % a)



class MatematiquesFull6(unittest.TestCase):
    """Percentatges: el factor multiplicador i les seves aplicacions."""

    def _it(self, i):
        return [x for x in TOTS[6] if x["id"] == i][0]

    def test_factors_multiplicadors(self):
        for a, p, puja in [("a", 20, True), ("b", 35, False),
                           ("c", 7, True), ("d", 4, False)]:
            esp = F(100 + p, 100) if puja else F(100 - p, 100)
            self.assertEqual(esp, num(clau(self._it("275" + a))))

    def test_variacio_inversa(self):
        """De quant costava abans: dividir pel factor, no fer la contrària."""
        for a, final, p, puja in [("a", 66, 10, True), ("b", 51, 15, False),
                                  ("c", 189, 10, False)]:
            f = F(100 + p, 100) if puja else F(100 - p, 100)
            self.assertEqual(F(final) / f, num(clau(self._it("277" + a))))

    def test_descomptes_encadenats_no_se_sumen(self):
        self.assertEqual(F(200) * F(8, 10) * F(9, 10), num(clau(self._it("280a"))))
        self.assertEqual(F(28), num(clau(self._it("280b"))))
        self.assertEqual(F(480), num(clau(self._it("284"))))



class MatematiquesFull8(unittest.TestCase):
    """Escales i raó de semblança."""

    def _it(self, i):
        return [x for x in TOTS[8] if x["id"] == i][0]

    def test_del_plano_a_la_realitat(self):
        for a, cm in [("a", 4), ("b", 12), ("c", 2.5), ("d", 30)]:
            esp = F(str(cm)) * 25000 / 100000
            self.assertEqual(esp, num(clau(self._it("286" + a))))

    def test_arees_van_amb_k_al_quadrat(self):
        for a, k, area in [("a", F(2), 15), ("b", F(3), 8), ("c", F(5, 2), 12)]:
            self.assertEqual(area * k ** 2, num(clau(self._it("291" + a))))

    def test_volums_van_amb_k_al_cub(self):
        for a, k, vol in [("a", F(2), 30), ("b", F(3), 5)]:
            self.assertEqual(vol * k ** 3, num(clau(self._it("292" + a))))


# ------------------------------------------------------- catàleg d'errors


if __name__ == "__main__":
    unittest.main(verbosity=2)
