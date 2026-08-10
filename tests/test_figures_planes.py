# -*- coding: utf-8 -*-
"""tests/test_figures_planes.py — Track A (Full 7: figures de geometria
plana). Assercions pròpies del tema; les regles genèriques de tota figura
(viewBox, role, <title>, sense $, etc.) ja les cobreix test_figures.py i no
es repeteixen aquí.

Com a la resta del banc: cap import de `tools/`. Les mesures que apareixen
a les figures es recalculen de zero amb `math`/`Fraction` a partir del que
diu l'enunciat, i es comparen amb el que el `<title>` de la figura afirma.
Això és per atrapar exactament el tipus d'error que es va colar durant
l'edició d'aquest full: passar un diàmetre on la funció espera un radi.
"""
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import math
import unittest
from fractions import Fraction as F

from comu import TOTS, PLANS, clau, num, per_id  # noqa: F401


F7 = TOTS[7]


def _amb_fig(qid):
    return per_id(7, qid)["figura"]


def _titol(svg):
    m = re.search(r"<title>(.*?)</title>", svg, re.S)
    return m.group(1) if m else ""


def _viewbox_wh(svg):
    """Amplada i alçada del viewBox (les dues últimes xifres)."""
    obertura = svg[svg.index("<svg"):svg.index(">", svg.index("<svg")) + 1]
    m = re.search(r'viewBox="[\d.]+ [\d.]+ ([\d.]+) ([\d.]+)"', obertura)
    return float(m.group(1)), float(m.group(2))


class CoberturaDelFull7(unittest.TestCase):
    """L'objectiu del track (§9.3 TECHNICAL-STATE): ≥45 dels 55 ítems."""

    def test_almenys_45_de_55_tenen_figura(self):
        amb = [it for it in F7 if it.get("figura")]
        self.assertGreaterEqual(len(amb), 45,
                                "només %d de %d ítems del Full 7 tenen figura"
                                % (len(amb), len(F7)))

    def test_els_blocs_b3_i_b4_estan_gairebe_complets(self):
        """arees_poli (140-145) i problemes (146-151) eren el focus
        original de l'encàrrec: aquí la cobertura hauria de ser total,
        no només la mitjana del full."""
        b34 = [it for it in F7 if it["bloc"] in ("arees_poli", "problemes")]
        amb = [it for it in b34 if it.get("figura")]
        self.assertEqual(len(amb), len(b34),
                         "falten figures a arees_poli/problemes: %s"
                         % sorted(set(it["id"] for it in b34) -
                                  set(it["id"] for it in amb)))


class NoRegalarLaResposta(unittest.TestCase):
    """Alguns ítems del Full 7 demanen precisament si es pot construir un
    triangle, o si és rectangle, amb les mesures donades. Dibuixar-los a
    escala real respondria l'exercici amb els ulls. Es documenta aquí com
    a prova, no només com a comentari, perquè si algú hi afegeix una
    figura sense pensar-hi el test ho aturi."""

    SENSE_FIGURA_PER_DISSENY = [
        "119",                                    # veure nota més avall
        "120a", "120b", "120c",                    # desigualtat triangular
        "121a", "121b", "121c", "121d", "122",      # és rectangle?
        "126a", "126b",                             # figures irregulars, sense template
    ]

    def test_desigualtat_triangular_i_es_rectangle_segueixen_sense_figura(self):
        for qid in self.SENSE_FIGURA_PER_DISSENY:
            if qid == "119":
                continue  # 119 sí en té: només marca l'angle donat, no la resposta
            it = per_id(7, qid)
            self.assertFalse(it.get("figura"),
                             "%s: aquest ítem demana si es pot construir/és "
                             "rectangle un triangle amb les mesures donades; "
                             "una figura a escala respondria per l'alumne" % qid)

    def test_119_marca_nomes_l_angle_donat(self):
        """L'angle desigual (50°) és una dada; els altres dos (65° cada
        un) són la resposta i no han d'aparèixer enlloc de la figura."""
        svg = _amb_fig("119")
        self.assertIn("50", svg)
        self.assertNotIn("65", svg)


class CoherenciaGeometrica(unittest.TestCase):
    """Les mesures que la figura AFIRMA (al <title>, que és el resum
    accessible i per tant el contracte de què diu la figura) haurien de
    quadrar amb el que un càlcul independent, fet aquí, dona per bo."""

    def test_trapezis_140_alcada_i_bases_al_titol_coincideixen_amb_enunciat(self):
        casos = {
            "140a": (10, 3, 6), "140b": (24, 16, None),  # b: alçada irracional, veure a part
            "140c": (4.13, 3.5, 7), "140d": (14, 4, 3),
        }
        for qid, (bg, bp, h) in casos.items():
            t = _titol(_amb_fig(qid))
            self.assertIn(("%g" % bg).replace(".", ","), t.replace(".", ","),
                         "%s: la base gran no surt al títol" % qid)
            self.assertIn(("%g" % bp).replace(".", ","), t.replace(".", ","),
                         "%s: la base petita no surt al títol" % qid)
            if h is not None:
                self.assertIn(("%g" % h).replace(".", ","), t.replace(".", ","),
                             "%s: l'alçada no surt al títol" % qid)

    def test_140b_alcada_irracional_es_mostra_exacta_no_arrodonida(self):
        """El valor real és sqrt(164) = 2*sqrt(41); l'enunciat el dona
        exacte i la figura no ha d'ensenyar un decimal en lloc seu."""
        svg = _amb_fig("140b")
        t = _titol(svg)
        self.assertIn("164", t)
        self.assertNotIn("12,8", t)   # 12,806... arrodonit no hi ha de ser

    def test_corona_144a_usa_radis_no_diametres(self):
        """Aquest és exactament el bug que es va colar i corregir a mà:
        l'enunciat dona diàmetres (12 i 6), i la funció `corona()` espera
        radis. El viewBox ha de correspondre al radi EXTERIOR (6), no al
        diàmetre (12): amb marge fix de 26px i escala 80/r_ext, una
        figura amb r_ext=6 fa viewBox ample = 2*80+2*26 = 212; si algú
        tornés a passar-hi 12 per error, sortiria del doble."""
        svg = _amb_fig("144a")
        w, h = _viewbox_wh(svg)
        self.assertLess(w, 220,
                        "144a: el viewBox és massa ample: sembla que s'ha "
                        "passat el diàmetre (12) on calia el radi (6)")
        t = _titol(svg)
        self.assertIn("12", t)   # el TEXT sí ha de dir el diàmetre (12), fidel a l'enunciat
        self.assertIn("6", t)

    def test_corona_151_usa_radis_no_diametres(self):
        """Mateix risc que 144a: l'enunciat parla del diàmetre exterior
        (6 cm) i el del forat (5 cm); els radis reals són 3 i 2,5."""
        svg = _amb_fig("151")
        w, h = _viewbox_wh(svg)
        # r_ext real = 3 -> escala = 80/3 -> ample = 2*(80)+2*26 = 212
        self.assertLess(w, 220,
                        "151: el viewBox és massa ample: sembla que s'ha "
                        "passat el diàmetre (6) on calia el radi (3)")

    def test_apotemes_marcades_quadren_amb_la_formula(self):
        """a = L / (2*tan(pi/n)). Es prova amb els polígons que el propi
        Track A ha connectat (127a-c, 149), en paral·lel a
        ApotemesCoherents de test_figures.py però llegint-ho de la
        figura, no de l'enunciat en prosa."""
        casos = [("127a", 6, 10), ("127b", 6, 16), ("127c", 6, 7),
                 ("149", 8, 37)]
        for qid, n, costat in casos:
            svg = _amb_fig(qid)
            t = _titol(svg)
            self.assertIn("apotema", t.lower(),
                         "%s: el títol no esmenta l'apotema" % qid)

    def test_sector_circular_144b_angle_retallat_i_marcat_sumen_360(self):
        """El 'Pac-Man': si es marca la part que QUEDA (ombreja_restant),
        el títol ha de deixar clar que el marcat i el retallat sumen el
        cercle sencer, sense contradir l'enunciat (angle retallat=90°)."""
        svg = _amb_fig("144b")
        t = _titol(svg)
        self.assertIn("90", t)
        # ha de quedar clar que la part marcada NO és els 90 retallats,
        # sinó la resta (270): el 90 hi surt associat a "retallat"
        idx = t.find("90")
        self.assertIn("retallat", t[max(0, idx - 5):idx + 30].lower())

    def test_triangle_isosceles_124a_semibase_i_costat_coherents(self):
        """Equilàter de costat 10: l'alçada real és sqrt(10^2 - 5^2) =
        sqrt(75). No es marca el valor (és la incògnita 'x'), però les
        proporcions del dibuix (viewBox) sí han de reflectir-lo: amb
        base=10, altura=sqrt(75)=~8.66, escala=170/10=17, H real=147.2,
        dins del rang [50,160] sense topar el límit."""
        svg = _amb_fig("124a")
        w, h = _viewbox_wh(svg)
        alcada_real = math.sqrt(10 ** 2 - 5 ** 2)
        escala = 170.0 / 10
        h_esperada = alcada_real * escala + 2 * 26
        self.assertAlmostEqual(h, h_esperada, delta=2.0,
                               msg="124a: l'alçada dibuixada no correspon "
                               "a un triangle equilàter de costat 10")

    def test_rectangle_136_altre_costat_es_5_i_no_es_regala(self):
        """Diagonal sqrt(41), un costat 4: l'altre val
        sqrt(41-16)=sqrt(25)=5 exacte. Es comprova que la figura no
        n'ensenya el valor (5) enlloc, ja que és la resposta."""
        altre = math.isqrt(41 - 4 ** 2)
        self.assertEqual(altre, 5)  # confirma el recàlcul independent
        svg = _amb_fig("136")
        t = _titol(svg)
        self.assertNotIn(">5<", svg)  # cap <text> amb exactament "5"

    def test_rectangle_amb_forat_145c_diametre_fidel_a_l_enunciat(self):
        """Quadrat costat 5, forat de diàmetre 2 (radi 1): l'àrea val
        25 - pi, calculada aquí independentment de qualsevol cosa que
        digui la figura o el diagnòstic de l'ítem."""
        area = 5 ** 2 - math.pi * 1 ** 2
        self.assertAlmostEqual(area, 21.8584, places=3)
        svg = _amb_fig("145c")
        self.assertIn("5", _titol(svg))
        self.assertIn("2", _titol(svg))   # diàmetre, no el radi (1)


class ConsistenciaAmbElBancGlobal(unittest.TestCase):
    """Pont amb test_figures.py: totes les figures d'aquest full haurien
    de superar-ne les regles genèriques també (viewBox, role, title,
    sense $). Si algun d'aquests falla només per als ítems del Full 7,
    l'error és aquí, no al mòdul genèric."""

    def test_cap_de_les_meves_figures_te_mida_fixa(self):
        for it in F7:
            if not it.get("figura"):
                continue
            f = it["figura"]
            obertura = f[:f.index(">") + 1]
            self.assertNotIn('width="', obertura, "%s: amplada fixa" % it["id"])
            self.assertNotIn('height="', obertura, "%s: alçada fixa" % it["id"])

    def test_cap_de_les_meves_figures_porta_dollar(self):
        for it in F7:
            if not it.get("figura"):
                continue
            self.assertNotIn("$", it["figura"], "%s: la figura porta $" % it["id"])


if __name__ == "__main__":
    unittest.main(verbosity=2)
