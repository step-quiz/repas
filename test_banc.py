# -*- coding: utf-8 -*-
"""tests/test_banc.py — el banc compilat: estructura, presentació,
catàleg d'errors i coherència de les taules de recompte.

Les comprovacions de matemàtiques són a test_matematiques.py i les de
figures a test_figures.py."""
import os
import sys

# Perquè `python3 -m unittest tests.test_x` funcioni igual que la descoberta:
# `comu` és germà d'aquest fitxer, no del directori des d'on s'executa.
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import re
import unittest

from comu import ARREL, TOTS, PLANS, carrega, clau, num, per_id  # noqa: F401
from fractions import Fraction as F  # noqa: F401
from collections import Counter  # noqa: F401



class Estructura(unittest.TestCase):
    def test_tots_els_fulls_carreguen(self):
        self.assertEqual(len(TOTS), 12)
        self.assertGreater(len(PLANS), 800)

    def test_identificadors_unics_dins_de_cada_full(self):
        for n, its in TOTS.items():
            ids = [it["id"] for it in its]
            self.assertEqual(len(ids), len(set(ids)), "ids repetits al full %d" % n)

    def test_quatre_opcions_diferents_a_cada_item(self):
        for it in PLANS:
            o = [re.sub(r"\s+", "", x) for x in it["opcions"]]
            self.assertEqual(len(o), 4, "%s no té 4 opcions" % it["id"])
            self.assertEqual(len(set(o)), 4, "%s té opcions repetides: %s"
                             % (it["id"], it["opcions"]))

    def test_index_de_la_correcta_dins_de_rang(self):
        for it in PLANS:
            self.assertIn(it["ok"], (0, 1, 2, 3), "%s: ok fora de rang" % it["id"])

    def test_cada_distractor_te_diagnostic_i_etiqueta(self):
        for it in PLANS:
            for i in range(4):
                if i == it["ok"]:
                    continue
                self.assertTrue(it["diag"][i].strip(),
                                "%s: distractor %d sense diagnòstic" % (it["id"], i))
                self.assertTrue(it["err"][i].strip(),
                                "%s: distractor %d sense etiqueta" % (it["id"], i))

    def test_tots_els_items_tenen_dificultat(self):
        for it in PLANS:
            self.assertIn(it["dif"], (1, 2, 3), "%s sense dificultat" % it["id"])

    def test_tots_els_items_son_a_algun_bloc(self):
        for n, its in TOTS.items():
            d = carrega(n)
            en_blocs = set()
            for b in d["blocs"]:
                en_blocs |= set(b["items"])
            ids = {it["id"] for it in its}
            self.assertEqual(ids - en_blocs, set(), "full %d: ítems fora de bloc" % n)
            self.assertEqual(en_blocs - ids, set(), "full %d: blocs amb ítems fantasma" % n)


# ------------------------------------------------------------ presentació



class Presentacio(unittest.TestCase):
    """Errors de renderitzat que ja van arribar a producció un cop i que no
    hi han de tornar. Cadascuna d'aquestes proves correspon a una troballa
    real de l'auditoria."""

    def _tot_el_text(self, it):
        return ([it["enunciat"], it.get("encapcalament", ""), it.get("nota", "")]
                + list(it["opcions"]) + [str(r) for r in it["res"]]
                + [str(d) for d in it["diag"]])

    def test_cap_dolar_doble(self):
        """El bug de 4/64a-d: `$$[P(x)]$\\cdot...$`, amb els $ doblats."""
        for it in PLANS:
            for t in self._tot_el_text(it):
                self.assertNotIn("$$", t, "%s: dòlars doblats" % it["id"])

    def test_cap_doble_menys(self):
        """El `36--64` de les resolucions del discriminant."""
        for it in PLANS:
            for t in self._tot_el_text(it):
                self.assertIsNone(re.search(r"\d\s*--\s*\d", t),
                                  "%s: doble menys" % it["id"])

    def test_cap_coeficient_1x(self):
        for it in PLANS:
            self.assertIsNone(re.search(r"(?<![\d.\w])1x\b", it["enunciat"]),
                              "%s: coeficient 1x" % it["id"])

    def test_cap_opcio_amb_latex_sense_delimitadors(self):
        """Si una opció porta LaTeX sense $, es renderitza com a text pla i
        canta: l'alumne veu quina és la bona sense fer el problema."""
        for it in PLANS:
            for o in it["opcions"]:
                if "$" in o:
                    continue
                self.assertIsNone(re.search(r"\^\{|\\d?frac|\\cdot|\\sqrt|\^\d", o),
                                  "%s: opció amb LaTeX sense delimitadors: %r"
                                  % (it["id"], o))

    def test_cap_nota_visible_amb_rastres_interns(self):
        for it in PLANS:
            t = it.get("nota", "")
            self.assertIsNone(re.search(r"\.tex\b|abans de publicar|cal confirmar", t, re.I),
                              "%s: nota amb rastres interns" % it["id"])

    def test_tots_els_enunciats_diuen_alguna_cosa(self):
        """Els 170a-e del Full 9 tenien l'enunciat idèntic a l'encapçalament
        i no es podien resoldre: les dades només sortien a les pistes."""
        for it in PLANS:
            enc = (it.get("encapcalament") or "").strip()
            self.assertNotEqual(it["enunciat"].strip(), enc,
                                "%s: l'enunciat no diu res que no digui la capçalera"
                                % it["id"])


# --------------------------------------------------------------- contingut



class Etiquetes(unittest.TestCase):
    def test_cap_etiqueta_es_calaix_de_sastre(self):
        """SIMPLIFICACIO_INCOMPLETA va arribar a tenir 119 usos, dels quals
        només 7 tenien res a veure amb simplificar. El panell d'errors
        repetits agrupa per etiqueta, així que una etiqueta que ho vol dir
        tot no diu res. El llindar és generós a posta: no és una regla
        d'estil, és una alarma."""
        c = Counter(e for it in PLANS for e in it["err"] if e)
        total = sum(c.values())
        for etiqueta, n in c.most_common(5):
            self.assertLess(n / total, 0.09,
                            "%s té el %.0f %% de tots els distractors: sospita "
                            "de calaix de sastre" % (etiqueta, 100 * n / total))

    def test_cobertura_del_cataleg(self):
        import sys
        sys.path.insert(0, os.path.join(ARREL, "tools"))
        import lib
        c = Counter(e for it in PLANS for e in it["err"] if e)
        cob = sum(v for k, v in c.items() if k in lib.TAX)
        self.assertGreater(cob / sum(c.values()), 0.90,
                           "menys del 90 %% dels distractors tenen text de catàleg: "
                           "el panell d'errors repetits cau al diagnòstic d'un ítem")



class TaulesCoherents(unittest.TestCase):
    """La mateixa taula de recomptes viu a tres llocs: `HANDOVER.md` (que és
    la normativa), `README.md` i `js/inici.js` (que és el que veu l'alumne a
    la portada). Ja van desfasar-se un cop, i la portada va arribar a dir
    "0/21" d'un full que en tenia 48. Aquesta prova hi és perquè no torni a
    passar sense que ningú se n'adoni."""

    def _llegeix(self, ruta):
        with open(os.path.join(ARREL, ruta), encoding="utf-8") as f:
            return f.read()

    def test_el_readme_dona_el_total_de_cada_full(self):
        s = self._llegeix("README.md")
        for n, its in TOTS.items():
            m = re.search(r"^\|\s*%d\s*\|[^|]*\|\s*\d+\s*\|\s*(\d+)\s*\|" % n, s, re.M)
            self.assertIsNotNone(m, "el README no té fila per al full %d" % n)
            self.assertEqual(int(m.group(1)), len(its),
                             "README, full %d: diu %s i n'hi ha %d"
                             % (n, m.group(1), len(its)))

    def test_el_handover_dona_el_total_de_cada_full(self):
        s = self._llegeix("HANDOVER.md")
        for n, its in TOTS.items():
            m = re.search(r"^\|\s*%d\s*\|[^|]*\|[^|]*\|[^|]*\|\s*\d+\s*\|[^|]*\|\s*(\d+)\s*\|"
                          % n, s, re.M)
            self.assertIsNotNone(m, "el HANDOVER no té fila per al full %d" % n)
            self.assertEqual(int(m.group(1)), len(its),
                             "HANDOVER, full %d: diu %s i n'hi ha %d"
                             % (n, m.group(1), len(its)))

    def test_la_portada_no_torna_a_portar_els_totals_a_ma(self):
        """Ara es deriven de `RE_TAULES`. Si algú els hi torna a escriure,
        això ho atrapa abans que la portada torni a mentir."""
        s = self._llegeix("js/inici.js")
        self.assertNotRegex(s, r"total:\s*\d+\s*,",
                            "js/inici.js torna a tenir totals escrits a mà")
        self.assertIn("window.RE_TAULES", s)

    def test_el_readme_diu_el_total_del_projecte(self):
        s = self._llegeix("README.md")
        m = re.search(r"(\d+)\s+preguntes en total", s)
        self.assertIsNotNone(m)
        self.assertEqual(int(m.group(1)), len(PLANS))


if __name__ == "__main__":
    unittest.main(verbosity=2)
