# -*- coding: utf-8 -*-
"""tests/test_figures_semblanca.py — proves de tools/figures/semblanca.py.

Es fa servir `unittest` de la biblioteca estàndard, seguint la convenció de
`test_lib.py`. S'executa amb:

    python3 -m unittest discover -s tests -v

QUÈ PROVEN: cadascuna de les 5 plantilles (`tales`, `parella_semblants`,
`escala_regla`, `figures_semblants_k`, `ombra`) directament, important-les de
`tools/figures/semblanca.py`, sense passar per la compilació del banc. Es
comprova:

  - Les 5 regles de `lib._valida()` (viewBox, sense mida fixa, role="img",
    <title>, cap "$"), replicades aquí amb `_assert_svg_valid` perquè
    aquestes proves no depenguin d'importar tot `lib.py`.
  - Un ventall de paràmetres per plantilla, incloent explícitament els casos
    extrems que demana el brief: una relació de Tales amb raó molt gran
    (152/153 hi arriben, per exemple 1:50) i una parella de triangles amb
    k>4 (el bloc 290-294 hi arriba, per exemple k=20).
  - La restricció més delicada del mòdul: `figures_semblants_k` no revela
    mai la relació d'àrees ($k^2$) ni de volums ($k^3$) al text de la
    figura, encara que el `tipus` sigui "quadrat" o "cub".
"""
import math
import os
import re
import sys
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                "..", "tools"))
from figures.semblanca import (  # noqa: E402
    tales, parella_semblants, escala_regla, figures_semblants_k, ombra,
)


def _assert_svg_valid(test, svg, missatge=""):
    """Replica les 5 regles de `lib._valida()` per a una figura aïllada,
    sense necessitat d'empaquetar-la dins d'un ítem complet ni d'importar
    `lib.py` sencer."""
    test.assertTrue(svg.lstrip().startswith("<svg"),
                    "%s: no comença per <svg" % missatge)
    obertura = svg[svg.index("<svg"):svg.index(">", svg.index("<svg")) + 1]
    test.assertIn("viewBox", obertura, "%s: sense viewBox" % missatge)
    test.assertNotIn('width="', obertura, "%s: amplada fixa" % missatge)
    test.assertNotIn('height="', obertura, "%s: alçada fixa" % missatge)
    test.assertIn('role="img"', svg, "%s: sense role=img" % missatge)
    test.assertIn("<title>", svg, "%s: sense <title>" % missatge)
    m = re.search(r"<title>(.*?)</title>", svg, re.S)
    test.assertGreater(len(m.group(1).strip()), 15,
                       "%s: el <title> no descriu res" % missatge)
    test.assertNotIn("$", svg, "%s: la figura porta $" % missatge)
    test.assertEqual(svg.count("<svg"), 1, "%s: més d'un <svg>" % missatge)
    test.assertEqual(svg.count("</svg>"), 1, "%s: tancament d'svg dubtós" % missatge)


class Tales(unittest.TestCase):
    """152 (proporció directa de dos punts) i 153 (posició de Tales amb
    tres punts, alguns no donats)."""

    def test_dos_punts_cas_basic(self):
        svg = tales([("A", 2.5), ("B", (3.75, "x"))], [("A'", 2), ("B'", 3)], "x")
        _assert_svg_valid(self, svg, "tales 2 punts")
        self.assertIn(">x<", svg, "la incògnita hauria d'aparèixer com a 'x'")
        # la incògnita porta el seu valor real intern (per fixar la
        # geometria correctament), però la seva etiqueta VISIBLE ha de
        # seguir sent "x", mai el número.
        self.assertNotIn(">3.75<", svg)
        self.assertNotIn(">3.75 cm<", svg)

    def test_tres_punts_amb_forats(self):
        """153a: cap de les dues secants dona els 3 punts complets."""
        svg = tales([("A", 2), ("B", 5), ("C", None)],
                   [("A'", 2.6), ("B'", None), ("C'", 11.7)], "BC")
        _assert_svg_valid(self, svg, "tales 3 punts amb forats")

    def test_nomes_un_punt_a_una_secant(self):
        """153b: la secant 'a' només dona un punt (B); A i C hi falten.
        Geomètricament n'hi ha prou (un punt, més O, ja fixa la recta), i
        la funció no ho hauria de rebutjar."""
        svg = tales([("A", None), ("B", 9), ("C", None)],
                   [("A'", 4), ("B'", 12), ("C'", 18)], "AB")
        _assert_svg_valid(self, svg, "tales un sol punt")

    def test_rao_extrema(self):
        """Un dels criteris d'acceptació del brief: una relació de Tales
        amb els dos costats molt allunyats en mida ha de continuar sent
        una figura llegible (viewBox raonable, no un segment invisible)."""
        svg = tales([("A", 1), ("B", (50, "x"))], [("A'", 1), ("B'", 50)], "x")
        _assert_svg_valid(self, svg, "tales raó extrema")
        # el viewBox no s'hauria de disparar a milers de px per un 1:50
        m = re.search(r'viewBox="0 0 (\d+) (\d+)"', svg)
        self.assertIsNotNone(m)
        amplada, alcada = int(m.group(1)), int(m.group(2))
        self.assertLess(amplada, 400, "viewBox massa ample per una raó 1:50")
        self.assertLess(alcada, 400, "viewBox massa alt per una raó 1:50")

    def test_nomes_una_incognita_permesa(self):
        with self.assertRaises(AssertionError):
            tales([("A", (5, "x")), ("B", 5)],
                 [("A'", (3, "x")), ("B'", 3)], "x")

    def test_calen_prou_punts_dibuixats(self):
        """Amb només 1 punt en total (0 a una secant, 1 a l'altra) no hi ha
        cap proporció per plantejar: la funció ho ha de rebutjar."""
        with self.assertRaises(AssertionError):
            tales([("A", None), ("B", None)], [("A'", 5), ("B'", None)], "x")

    def test_nombre_de_punts_ha_de_coincidir(self):
        with self.assertRaises(AssertionError):
            tales([("A", 2), ("B", 3)], [("A'", 2), ("B'", 3), ("C'", 4)], "x")

    def _pendents_transversals(self, svg):
        """Extreu el pendent de cada <line> que no surt d'O (les dues
        primeres línies del SVG són sempre les secants senceres des d'O;
        la resta són les transversals)."""
        coords = re.findall(
            r'<line x1="([-\d.]+)" y1="([-\d.]+)" x2="([-\d.]+)" y2="([-\d.]+)"',
            svg)
        pendents = []
        for x1, y1, x2, y2 in coords[2:]:  # salta les 2 secants
            x1, y1, x2, y2 = (float(v) for v in (x1, y1, x2, y2))
            dx = x2 - x1
            pendents.append((y2 - y1) / dx if abs(dx) > 1e-6 else float("inf"))
        return pendents

    def test_transversals_son_paral·leles_dos_punts(self):
        """LA comprovació central de tot el mòdul: aquesta és exactament la
        propietat que dona sentit a la figura ('Teorema de Tales' vol dir
        precisament que aquests dos segments són paral·lels). Amb el valor
        REAL de la incògnita (152a: x=3.75, ja que 2.5:2 = 3.75:3), el
        recíproc del teorema de Tales garanteix el paral·lelisme; si algú
        torna a escalar cada secant per separat o torna a posar-hi un
        valor inventat per a la incògnita, aquest test ha de detectar-ho."""
        svg = tales([("A", 2.5), ("B", (3.75, "x"))], [("A'", 2), ("B'", 3)], "x")
        pendents = self._pendents_transversals(svg)
        self.assertEqual(len(pendents), 2)
        self.assertAlmostEqual(pendents[0], pendents[1], places=2,
                              msg="les dues transversals no són paral·leles: "
                                  "pendents %r" % pendents)

    def test_transversals_son_paral·leles_tres_punts(self):
        """153a amb tres punts marcats (un forat a cada secant): només es
        dibuixa UNA transversal (A-A'; ni B tampoc C en porten, perquè B'
        no es dona i el forat trenca la parella), i per tant no hi ha res
        a comparar entre elles —el test només confirma que la funció no
        dibuixa cap transversal fantasma allà on falta un extrem."""
        svg = tales([("A", 2), ("B", 5), ("C", None)],
                   [("A'", 2.6), ("B'", None), ("C'", 11.7)], "BC")
        pendents = self._pendents_transversals(svg)
        self.assertEqual(len(pendents), 1,
                        "hauria d'haver-hi exactament una transversal "
                        "(A-A'); qualsevol altra seria fantasma")

    def test_transversal_nomes_on_hi_ha_els_dos_extrems(self):
        """153c: A i C coneguts a la secant a (B forat); B' i C' coneguts
        a la secant b (A' forat). Només C-C' té els dos extrems, així que
        només aquesta transversal s'ha de dibuixar."""
        svg = tales([("A", 5), ("B", None), ("C", 22.5)],
                   [("A'", None), ("B'", 24), ("C'", 36)], "AB")
        pendents = self._pendents_transversals(svg)
        self.assertEqual(len(pendents), 1,
                        "només C-C' té els dos extrems coneguts")

    def test_transversal_unica_quan_nomes_una_posicio_completa(self):
        """153b: només B (secant a) i B' (secant b) coincideixen amb els
        dos extrems coneguts a la mateixa posició (A i C hi falten a la
        secant a); ha de sortir exactament una transversal, B-B'."""
        svg = tales([("A", None), ("B", 9), ("C", None)],
                   [("A'", 4), ("B'", 12), ("C'", 18)], "AB")
        pendents = self._pendents_transversals(svg)
        self.assertEqual(len(pendents), 1, "només B-B' té els dos extrems")

    def test_incognita_amb_valor_real_incorrecte_trenca_paral·lelisme(self):
        """Comprovació negativa, per deixar constància del mecanisme: si
        algú passés un valor real fals per a la incògnita (que no
        compleixi la proporció autèntica), les transversals NO haurien de
        sortir paral·leles. Serveix per confirmar que el test positiu
        anterior comprova alguna cosa real i no passa per casualitat amb
        qualsevol valor."""
        # x real hauria de ser 3.75; hi poso 10 (fals) a posta.
        svg = tales([("A", 2.5), ("B", (10, "x"))], [("A'", 2), ("B'", 3)], "x")
        pendents = self._pendents_transversals(svg)
        self.assertNotAlmostEqual(pendents[0], pendents[1], places=1,
                                  msg="amb un valor fals per a la incògnita "
                                      "els pendents haurien de divergir, i "
                                      "no ha estat així: %r" % pendents)


class ParellaSemblants(unittest.TestCase):
    """154 (costat desconegut) i 155 (determinar si són semblants)."""

    def test_dos_costats_amb_incognita(self):
        svg = parella_semblants([("", 3), ("", 5), ("", None)],
                                [("", 4), ("", "x"), ("", None)])
        _assert_svg_valid(self, svg, "parella 2 costats")
        self.assertIn(">x<", svg)

    def test_tres_costats_complets(self):
        svg = parella_semblants([("AB", 4), ("BC", 6), ("CA", 5)],
                                [("DE", 6), ("EF", 9), ("FD", 7.5)])
        _assert_svg_valid(self, svg, "parella 3 costats")

    def test_dues_incognites_al_mateix_triangle(self):
        """154c: del triangle petit només se'n coneix un costat; els altres
        dos són el que cal calcular."""
        svg = parella_semblants([("", 5), ("", 3), ("", 4)],
                                [("", 6), ("", "x"), ("", "x")])
        _assert_svg_valid(self, svg, "parella 2 incognites")

    def test_angle_marcat_sense_forcar_recte(self):
        """155a/b: l'angle comprès és de 80°/65°, NO recte. angle_recte es
        deixa a False (el valor per defecte) i la marca no ha d'implicar
        cap valor concret."""
        svg = parella_semblants([("", 4), ("", 5), ("", None)],
                                [("", 5), ("", 6), ("", None)],
                                angle_igual=("base_esq", "base_esq"))
        _assert_svg_valid(self, svg, "parella angle marcat obliqu")
        self.assertIn("<path", svg, "l'arc de l'angle hauria de ser un <path>")

    def test_angle_recte_explicit(self):
        """155d: catets coneguts, hipotenusa no donada. Amb angle_recte=True
        el vèrtex s'ha de dibuixar perpendicular de veritat."""
        svg = parella_semblants([("", 3), ("", 5), ("", None)],
                                [("", 10), ("", 13), ("", None)],
                                angle_igual=("base_esq", "base_esq"),
                                angle_recte=True)
        _assert_svg_valid(self, svg, "parella angle recte")
        # cap etiqueta amb la hipotenusa calculada (5.83.., 16.40..): la
        # geometria es fixa internament, però no s'etiqueta cap valor que
        # l'enunciat no doni.
        self.assertNotIn("5.8", svg)
        self.assertNotIn("16.4", svg)

    def test_rao_molt_gran_es_capa_visualment(self):
        """Criteri d'acceptació del brief: k>4 no ha de fer que el triangle
        petit es torni il·legible. Es comprova indirectament: el viewBox
        total no creix proporcionalment a la raó real (20), senyal que
        s'ha aplicat el capat de mida visual."""
        svg_moderat = parella_semblants([("", 3), ("", 4), ("", 5)],
                                        [("", 6), ("", 8), ("", 10)])  # k=2
        svg_extrem = parella_semblants([("", 1), ("", 1.2), ("", 1.5)],
                                       [("", 20), ("", 24), ("", 30)])  # k=20
        _assert_svg_valid(self, svg_extrem, "parella k=20")

        def amplada(svg):
            m = re.search(r'viewBox="0 0 (\d+) ', svg)
            return int(m.group(1))
        # si no hi hagués capat, k=20 seria ~10 vegades més ample que k=2;
        # amb el capat a 1:3, la diferència ha de quedar molt per sota.
        self.assertLess(amplada(svg_extrem), amplada(svg_moderat) * 4,
                        "la figura amb k=20 sembla no tenir capat de mida")

    def test_calen_exactament_tres_costats(self):
        with self.assertRaises(AssertionError):
            parella_semblants([("", 3), ("", 4)], [("", 6), ("", 8), ("", 10)])

    def test_cap_costat_numeric_es_rebutja(self):
        with self.assertRaises(AssertionError):
            parella_semblants([("", "x"), ("", None), ("", None)],
                              [("", "x"), ("", None), ("", None)])


class EscalaRegla(unittest.TestCase):
    """156 (escala numèrica) i 285/288 (llegir o trobar una escala)."""

    def test_escala_basica(self):
        svg = escala_regla(1, "cm", "2 km")
        _assert_svg_valid(self, svg, "escala 1cm=2km")
        self.assertIn("2 km", svg)
        self.assertIn("1 cm", svg)

    def test_base_diferent_de_1(self):
        """288: el dibuix no sempre val 1 cm (per exemple, 8 cm al dibuix
        corresponen a 4 km reals)."""
        svg = escala_regla(8, "cm", "4 km")
        _assert_svg_valid(self, svg, "escala base 8")
        self.assertIn("8 cm", svg, "hauria de marcar el múltiple 8 cm")

    def test_mes_marques(self):
        svg = escala_regla(1, "cm", "50 km", marques=6)
        _assert_svg_valid(self, svg, "escala 6 marques")
        self.assertIn("6 cm", svg)

    def test_calen_almenys_dos_intervals(self):
        with self.assertRaises(AssertionError):
            escala_regla(1, "cm", "2 km", marques=1)


class FiguresSemblantsK(unittest.TestCase):
    """290 (raó pura), 291 (àrees), 292 (volums), 293 (invers), 294
    (maqueta completa): la restricció crítica és no revelar mai k^2 ni
    k^3, sigui quin sigui el tipus de figura."""

    def test_triangle_raó_pura(self):
        svg = figures_semblants_k(4, "triangle")
        _assert_svg_valid(self, svg, "fsk triangle")
        self.assertIn(">1<", svg)
        self.assertIn(">k<", svg)

    def test_quadrat_per_arees(self):
        svg = figures_semblants_k(2.5, "quadrat")
        _assert_svg_valid(self, svg, "fsk quadrat")

    def test_cub_per_volums(self):
        svg = figures_semblants_k(3, "cub")
        _assert_svg_valid(self, svg, "fsk cub")

    def test_rectangle(self):
        svg = figures_semblants_k(2, "rectangle")
        _assert_svg_valid(self, svg, "fsk rectangle")

    def test_rao_gran_es_capa(self):
        """Criteri d'acceptació del brief: k>4 (per exemple k=20, com a
        291/292 amb raons grans) no ha de desbordar el viewBox."""
        svg = figures_semblants_k(20, "quadrat")
        _assert_svg_valid(self, svg, "fsk k=20")
        m = re.search(r'viewBox="0 0 (\d+) (\d+)"', svg)
        amplada = int(m.group(1))
        self.assertLess(amplada, 600, "viewBox massa ample per k=20 capat")

    def test_rao_petita_tambe_funciona(self):
        """294: una maqueta a escala 1:50 és k=1/50, molt per sota de 1."""
        svg = figures_semblants_k(1 / 50, "cub")
        _assert_svg_valid(self, svg, "fsk k petit")

    def test_mai_revela_labels_darea_ni_volum(self):
        """LA restricció clau (regla 4 del brief): cap text de la figura,
        en cap tipus ni cap k, no pot contenir k^2, k^3, ni cap variant."""
        prohibides = ["k2", "k^2", "k²", "k3", "k^3", "k³", "àrea", "area",
                     "volum", "superfície", "superficie"]
        for tipus in ("triangle", "quadrat", "rectangle", "cub"):
            for k in (0.5, 1, 2, 3.5, 4, 10, 20):
                svg = figures_semblants_k(k, tipus)
                baix = svg.lower()
                for p in prohibides:
                    self.assertNotIn(p, baix,
                                    "fsk(%s, %r) conté %r: revela informació "
                                    "d'àrea/volum que l'exercici encara no ha "
                                    "donat" % (k, tipus, p))

    def test_tipus_desconegut_es_rebutja(self):
        with self.assertRaises(AssertionError):
            figures_semblants_k(2, "hexagon")

    def test_k_no_positiu_es_rebutja(self):
        with self.assertRaises(AssertionError):
            figures_semblants_k(0, "quadrat")
        with self.assertRaises(AssertionError):
            figures_semblants_k(-2, "quadrat")


class Ombra(unittest.TestCase):
    """161/163/164 (sol), 166 (reflex), 168/169 (alineació visual): el
    mateix patró geomètric amb un altre nom per a la diagonal."""

    def test_cas_basic_amb_noms(self):
        svg = ombra(8, 10, 15, "x", "arbre petit", "arbre gran")
        _assert_svg_valid(self, svg, "ombra bàsica")
        self.assertIn("arbre petit", svg)
        self.assertIn("arbre gran", svg)
        self.assertIn(">x<", svg)

    def test_sense_noms(self):
        svg = ombra(8, 10, 15, "x")
        _assert_svg_valid(self, svg, "ombra sense noms")

    def test_incognita_a_cada_posicio(self):
        """La incògnita pot ser qualsevol dels 4 valors, no només l'ombra
        del segon objecte."""
        for pos in range(4):
            valors = [8, 10, 15, 12]
            valors[pos] = "x"
            svg = ombra(*valors)
            _assert_svg_valid(self, svg, "ombra incognita posicio %d" % pos)
            self.assertIn(">x<", svg)

    def test_unitat_per_defecte_metres(self):
        """161-169 fan servir metres (fins i tot 166, que parteix de km
        convertits a m a l'enunciat): la unitat per defecte ha de ser 'm',
        no 'cm'."""
        svg = ombra(1.70, 5, "x", 3000, "Anna", "muntanya")
        self.assertIn(" m", svg)
        self.assertNotIn(" cm", svg)

    def test_rao_extrema_es_llegible(self):
        """168: 2 m i 450 m als dos costats horitzontals."""
        svg = ombra(1.6, 2, "x", 450, "Pere", "poble")
        _assert_svg_valid(self, svg, "ombra raó extrema")

    def test_linia_discontinua_per_defecte(self):
        """La diagonal (sol/reflex/visual) es dibuixa discontínua perquè
        no es confongui amb un costat real del triangle."""
        svg = ombra(8, 10, 15, "x")
        self.assertIn("stroke-dasharray", svg)

    def test_nomes_una_incognita_permesa(self):
        with self.assertRaises(AssertionError):
            ombra("x", 10, 15, "x")


if __name__ == "__main__":
    unittest.main(verbosity=2)
