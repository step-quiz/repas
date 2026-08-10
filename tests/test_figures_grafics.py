# -*- coding: utf-8 -*-
"""tests/test_figures_grafics.py — gràfiques de funcions del Full 10
(figures/grafics.py) i la coherència entre paràmetres i figura.

Via de l'agent «xtec». Igual que test_figures.py, aquest fitxer NO importa
res de tools/ per validar les respostes del banc (comu.py ja ho evita), però
SÍ importa tools/figures/grafics.py directament: aquí no es recalcula
l'aritmètica del banc, es comprova la canonada de figures pròpiament dita,
que és inseparable del codi que la genera.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import math
import re
import unittest

from comu import ARREL, TOTS, PLANS, carrega, clau, num, per_id  # noqa: F401

sys.path.insert(0, os.path.join(ARREL, "tools"))
from figures.grafics import (  # noqa: E402
    eixos, grafica_recta, grafica_parabola, nuvol_de_punts, _pas_graella,
    _mapa,
)


class PlantillesGrafics(unittest.TestCase):
    """Propietats que ha de complir QUALSEVOL figura generada per aquest
    mòdul, comprovades directament sobre les plantilles (no calen ítems al
    banc per a això: és el mateix codi que després crida c_funcions.py)."""

    def test_grafica_recta_es_svg_valid(self):
        s = grafica_recta(2, -3)
        self.assertTrue(s.startswith("<svg"))
        obertura = s[:s.index(">") + 1]
        self.assertIn("viewBox", obertura)
        self.assertNotIn('width="', obertura)
        self.assertNotIn('height="', obertura)
        self.assertIn('role="img"', s)
        self.assertIn("<title>", s)
        self.assertNotIn("$", s)

    def test_grafica_parabola_es_svg_valid(self):
        s = grafica_parabola(1, -3, 2)
        self.assertTrue(s.startswith("<svg"))
        self.assertIn('role="img"', s)
        self.assertIn("<title>", s)
        self.assertNotIn("$", s)

    def test_nuvol_de_punts_es_svg_valid(self):
        s = nuvol_de_punts([(0, -1), (1, 1)])
        self.assertTrue(s.startswith("<svg"))
        self.assertIn('role="img"', s)
        self.assertNotIn("$", s)

    def test_parabola_sense_marques_no_te_cap_punt_marcat(self):
        """Per defecte, marca_vertex i marca_talls són False: cap paràbola
        generada sense passar-los explícitament pot portar cap <circle>."""
        for a, b, c in [(1, -5, 6), (-1, 2, 3), (2, 4, -1), (1, 8, -9),
                        (3, -1, 0), (1, 0, -1)]:
            s = grafica_parabola(a, b, c)
            self.assertEqual(s.count("<circle"), 0,
                              "a=%s b=%s c=%s: %d cercles sense demanar-ne"
                              % (a, b, c, s.count("<circle")))

    def test_recta_sola_sense_punts_no_te_cap_punt_marcat(self):
        for m, n in [(2, -3), (-1, 5), (0.5, 0), (-3, 8)]:
            s = grafica_recta(m, n)
            self.assertEqual(s.count("<circle"), 0)

    def test_marca_vertex_activa_exactament_un_punt(self):
        s = grafica_parabola(1, 0, -1, marca_vertex=True)
        self.assertEqual(s.count("<circle"), 1)

    def test_marca_talls_activa_els_punts_correctes(self):
        # y = x^2 - 5x + 6, arrels a x=2 i x=3: dos talls diferents.
        s = grafica_parabola(1, -5, 6, marca_talls=True)
        self.assertEqual(s.count("<circle"), 2)
        # y = x^2 - 4x + 4 = (x-2)^2, arrel doble a x=2: un sol tall (no dos
        # cercles superposats, que és el que passaria si no es dedupliqués).
        s = grafica_parabola(1, -4, 4, marca_talls=True)
        self.assertEqual(s.count("<circle"), 1)
        # y = x^2 + 5, discriminant negatiu: cap tall real, cap cercle.
        s = grafica_parabola(1, 0, 5, marca_talls=True)
        self.assertEqual(s.count("<circle"), 0)

    def test_dues_rectes_dibuixa_totes_dues_sense_marcar_el_tall(self):
        s = grafica_recta(2, 1, -1, 7)  # es tallen a (2,5) -- 299a
        self.assertEqual(s.count("<circle"), 0,
                          "el punt de tall no s'ha de marcar: és la resposta")
        self.assertEqual(s.count('stroke="var(--fig-marca'), 2,
                          "haurien de dibuixar-se les dues rectes")

    def test_punts_marcats_sobre_una_recta_es_marquen_tots(self):
        s = grafica_recta(2, -3, punts_marcats=[(1, -1), (3, 3)])
        self.assertEqual(s.count("<circle"), 2)

    def test_nuvol_de_punts_marca_tots_els_punts_i_no_traca_cap_recta(self):
        s = nuvol_de_punts([(0, -1), (1, 1), (2, 3)])
        self.assertEqual(s.count("<circle"), 3)
        # Cap <path> hauria de tenir més de 2 comandes (les fletxes dels
        # eixos en tenen com a molt "M ... l ... z", una corba en tindria
        # moltes "L" seguides).
        for m in re.finditer(r'<path d="([^"]*)"', s):
            comandes = re.findall(r"[MLA]", m.group(1))
            self.assertLessEqual(len(comandes), 2,
                                  "un <path> amb %d comandes sembla una corba, "
                                  "no una fletxa d'eix" % len(comandes))


class GraellaEscalaAdaptativa(unittest.TestCase):
    """`_pas_graella` evita que una figura amb el vèrtex o l'ordenada lluny
    de l'origen infli l'SVG dibuixant una línia per cada enter (vegeu el
    comentari a `_pas_graella`). Es comprova que el nombre de línies es
    manté acotat independentment de l'amplada del rang."""

    def test_pas_graella_dona_un_nombre_acotat_de_linies(self):
        for rang in (2, 6, 10, 23, 46, 100, 500, 0.5, 5000):
            pas = _pas_graella(rang)
            n_linies = rang / pas
            self.assertLessEqual(n_linies, 12,
                                  "rang=%s pas=%s dona %.1f línies, massa"
                                  % (rang, pas, n_linies))
            self.assertGreaterEqual(n_linies, 2,
                                    "rang=%s pas=%s dona %.1f línies, massa poques"
                                    % (rang, pas, n_linies))

    def test_parabola_amb_vertex_allunyat_no_es_desproporcionada(self):
        """Regressió: abans d'acotar `_pas_graella`, un vèrtex a x=20
        arribava a inflar l'SVG fins a 78 KB (una línia de graella per
        cadascun dels ~46 enters del rang horitzontal)."""
        s = grafica_parabola(1, -40, 400)  # xv = 20
        self.assertLess(len(s), 6000,
                        "SVG de %d bytes: sembla que la graella no s'adapta "
                        "al rang" % len(s))

    def test_recta_amb_ordenada_gran_no_es_desproporcionada(self):
        s = grafica_recta(-3, 8, punts_marcats=[(1, 5)])
        self.assertLess(len(s), 6000)


class RectaSurtSenceraDinsElRang(unittest.TestCase):
    """Regressió: amb el rang per defecte fix (abans [-5,5]x[-5,5]), una
    recta amb pendent i ordenada realistes del banc (p. ex. 295b: m=-3,
    n=8) quedava sencera fora del quadre visible i el <path> sortia buit."""

    def _path_recta(self, svg):
        m = re.search(
            r'<path d="([^"]*)" fill="none" stroke="var\(--fig-marca[^)]*\)" '
            r'stroke-width="2\.2"', svg)
        return m.group(1) if m else ""

    def test_recta_amb_pendent_i_ordenada_grans_es_dibuixa(self):
        casos = [(-3, 8), (2, -3), (-9, 15), (0.5, -12), (5, 20)]
        for m, n in casos:
            s = grafica_recta(m, n)
            path = self._path_recta(s)
            self.assertIn("M", path, "m=%s n=%s: <path> buit, la recta no "
                                      "es veu" % (m, n))

    def test_recta_amb_punt_marcat_realista_del_295(self):
        # 295b: m=-3, punt (1,5) -> n = 5-(-3*1) = 8
        s = grafica_recta(-3, 8, punts_marcats=[(1, 5)])
        path = self._path_recta(s)
        self.assertIn("M", path)
        self.assertEqual(s.count("<circle"), 1)


class CoherenciaAmbElContingutDelBanc(unittest.TestCase):
    """Un cop compilat el Full 10, cada ítem amb figura ha de tenir una
    figura coherent amb els seus propis paràmetres: no n'hi ha prou que la
    plantilla sigui correcta en abstracte, cal que qui la crida li passi
    els valors que diu l'enunciat."""

    def test_full_10_te_prou_items_amb_figura(self):
        """Llindar de 38, no de 45.

        El 45 venia del brief de la via «xtec», i el brief s'equivocava:
        l'objectiu es va posar comptant ítems, abans de llegir els 73
        enunciats un per un. Fent-ho, resulta que més de la meitat del full
        diu literalment «sense representar-la» (208, 212, 217) o demana
        exactament el que una gràfica ensenyaria. El nombre d'ítems que en
        poden portar sense fer-se malbé és més baix.

        Al merge se'n van retirar cinc per aquest motiu:

        - **301a-c** (talls amb els eixos): la gràfica no marcava res, però
          amb la corba dibuixada s'eliminen dos dels tres distractors només
          mirant per quin costat creua els eixos. L'ítem passava de quatre
          opcions a dues sense fer cap operació.
        - **217a-b**: l'enunciat diu «sense representar-les», i posar-hi la
          gràfica el contradiu.

        El 38 és un trinquet: protegeix del que hi ha, sense tornar a fixar
        un objectiu que no s'aguanta.
        """
        f10 = TOTS[10]
        amb = [it for it in f10 if it.get("figura")]
        self.assertGreaterEqual(len(amb), 38,
                                "només %d de %d ítems del Full 10 tenen figura"
                                % (len(amb), len(f10)))

    def test_els_items_sense_representar_la_no_porten_grafica(self):
        """Si l'enunciat demana deduir sense dibuixar, la gràfica el
        contradiu: converteix una deducció en una lectura."""
        mal = []
        for it in TOTS[10]:
            t = (it.get("encapcalament", "") + " " + it["enunciat"]).lower()
            if ("sense representar" in t or "sense dibuixar" in t) and it.get("figura"):
                mal.append(it["id"])
        self.assertEqual(mal, [],
                         "aquests ítems diuen «sense representar-la» i porten "
                         "gràfica: %s" % mal)

    def test_216_300_301_no_marquen_la_incognita(self):
        """216 (vèrtex+talls), 300 (vèrtex) i 301 (talls) demanen calcular
        exactament el que aquí NO es pot marcar."""
        f10 = TOTS[10]
        for prefix in ("216", "300", "301"):
            items = [it for it in f10 if it["id"].startswith(prefix)]
            self.assertGreater(len(items), 0, "no s'ha trobat cap ítem %s" % prefix)
            for it in items:
                if it.get("figura"):
                    self.assertEqual(
                        it["figura"].count("<circle"), 0,
                        "%s: la figura marca un punt, però el vèrtex/talls "
                        "és la resposta que es demana" % it["id"])

    def test_299_no_marca_el_punt_de_tall(self):
        f10 = TOTS[10]
        items = [it for it in f10 if it["id"].startswith("299")]
        self.assertGreater(len(items), 0)
        for it in items:
            if it.get("figura"):
                self.assertEqual(it["figura"].count("<circle"), 0,
                                 "%s: el punt de tall no s'ha de marcar" % it["id"])

    def test_206c_no_marca_maxims_ni_minims(self):
        """El cas citat explícitament al brief: una figura amb els extrems
        marcats respondria l'exercici pel dibuix, sense que l'alumne faci
        cap càlcul ni cap lectura qualitativa."""
        f10 = TOTS[10]
        items = [it for it in f10 if it["id"] == "206c"]
        if items and items[0].get("figura"):
            self.assertEqual(items[0]["figura"].count("<circle"), 0,
                             "206c: la figura marca punts, però el bloc "
                             "d'aquest exercici és descripció textual, no "
                             "una gràfica generada amb valors concrets")


if __name__ == "__main__":
    unittest.main(verbosity=2)
