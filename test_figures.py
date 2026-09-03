# -*- coding: utf-8 -*-
"""tests/test_figures.py — les figures del banc i la coherència
geomètrica dels enunciats que en donen mesures."""
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



class Figures(unittest.TestCase):
    """La canonada de figures (§3.5 del HANDOVER). Les regles no són d'estil:
    cadascuna evita que una figura trenqui alguna cosa que ja funciona."""

    def _amb_figura(self):
        return [it for it in PLANS if it.get("figura")]

    def test_hi_ha_figures(self):
        self.assertGreater(len(self._amb_figura()), 0,
                           "cap ítem amb figura: la canonada no s'està fent servir")

    def test_cobertura_del_full_9(self):
        """El Full 9 va de cossos geomètrics: gairebé tots els seus enunciats
        descriuen una figura amb paraules i guanyen molt amb el dibuix. Si la
        cobertura baixa, o s'ha perdut una figura o s'ha afegit un ítem sense
        pensar-hi."""
        f9 = TOTS[9]
        amb = [it for it in f9 if it.get("figura")]
        self.assertGreaterEqual(len(amb) / len(f9), 0.85,
                                "només %d de %d ítems del Full 9 tenen figura"
                                % (len(amb), len(f9)))

    def test_les_figures_no_es_repeteixen_per_error(self):
        """Dues figures idèntiques en ítems amb enunciats diferents solen ser
        un copiar-i-enganxar mal acabat. Es toleren les repeticions legítimes
        (el 176a i el 176b són el mateix edifici), però no gaires."""
        from collections import Counter
        c = Counter(it["figura"] for it in self._amb_figura())
        for fig, n in c.most_common(3):
            self.assertLessEqual(n, 3, "%d ítems comparteixen la mateixa figura"
                                       % n)

    def test_totes_son_svg_amb_viewbox_i_sense_mida_fixa(self):
        for it in self._amb_figura():
            f = it["figura"].lstrip()
            self.assertTrue(f.startswith("<svg"), "%s: no comença per <svg" % it["id"])
            obertura = f[:f.index(">") + 1]
            self.assertIn("viewBox", obertura, "%s: sense viewBox" % it["id"])
            self.assertNotIn('width="', obertura,
                             "%s: amplada fixa a l'<svg>, no s'adaptarà" % it["id"])

    def test_totes_tenen_alternativa_per_a_lectors_de_pantalla(self):
        for it in self._amb_figura():
            self.assertIn('role="img"', it["figura"], "%s: sense role" % it["id"])
            self.assertIn("<title>", it["figura"], "%s: sense <title>" % it["id"])
            m = re.search(r"<title>(.*?)</title>", it["figura"], re.S)
            self.assertGreater(len(m.group(1).strip()), 15,
                               "%s: el <title> no descriu res" % it["id"])

    def test_cap_figura_no_porta_latex(self):
        """Dins d'un SVG, KaTeX no hi entra: els $ es veurien tal qual."""
        for it in self._amb_figura():
            self.assertNotIn("$", it["figura"], "%s: la figura porta $" % it["id"])

    def test_l_enunciat_es_resol_sense_veure_la_figura(self):
        """La figura ACOMPANYA l'enunciat, no el substitueix: qui faci servir
        un lector de pantalla ha de poder resoldre l'exercici igualment. Es
        comprova que l'enunciat continuï portant els números."""
        for it in self._amb_figura():
            self.assertTrue(re.search(r"\d", it["enunciat"]),
                            "%s: l'enunciat no diu cap mesura i la figura sí; "
                            "sense veure-la no es pot resoldre" % it["id"])

    def test_les_figures_no_disparen_l_arrodoniment_del_json(self):
        """Comprovació de sanitat: la figura ha de tornar del JSON tal com
        va entrar-hi, sense que cap cometa la trenqui."""
        for it in self._amb_figura():
            self.assertEqual(it["figura"].count("<svg"), 1)
            self.assertEqual(it["figura"].count("</svg>"), 1)



class ApotemesCoherents(unittest.TestCase):
    """L'apotema d'un polígon regular és a = s / (2·tan(π/n)). Sempre que un
    enunciat en doni una, ha de quadrar amb la fórmula.

    Aquesta prova hi és perquè és la tècnica que va permetre llegir les
    figures escanejades sense endevinar: quan la lectura i la fórmula no
    quadren, la cota s'ha assignat malament. Va atrapar el 170c, transcrit
    com a hexàgon de costat 8 amb apotema 5,2 quan un hexàgon de costat 8 té
    apotema 6,93. La cota de 8 era l'altura.

    El marge del 3 % és per l'arrodoniment del llibre: el 170h dona 4,25 on
    la fórmula diu 4,33."""

    NOMS = {"triangular": 3, "quadrangular": 4, "pentagonal": 5,
            "hexagonal": 6, "octogonal": 8}

    def test_les_apotemes_dels_enunciats_quadren_amb_la_formula(self):
        import math
        provats = 0
        for it in PLANS:
            t = it["enunciat"]
            m = re.search(r"(\w+) regular de \$(\d+(?:\{,\}\d+)?)\$ cm de costat "
                          r"i\s*\$(\d+(?:\{,\}\d+)?)\$ cm d'apotema", t)
            if not m:
                continue
            n = self.NOMS.get(m.group(1))
            if not n:
                continue
            s = float(m.group(2).replace("{,}", "."))
            a = float(m.group(3).replace("{,}", "."))
            calc = s / (2 * math.tan(math.pi / n))
            self.assertLess(abs(calc - a) / a, 0.03,
                            "%s: %s regular de costat %g hauria de tenir apotema "
                            "%.2f, i l'enunciat en diu %.2f. O el polígon no és "
                            "el que diu, o les cotes estan intercanviades."
                            % (it["id"], m.group(1), s, calc, a))
            provats += 1
        self.assertGreaterEqual(provats, 5, "esperava trobar més apotemes a comprovar")


class ApotemaPiramideNoCoincideixAmbLAltura(unittest.TestCase):
    """L'apotema d'una piràmide (l'altura d'una CARA) i l'altura del cos
    (àpex al centre de la base) són dos segments diferents. Si es
    dibuixen amb el mateix segment, l'alumne veu una única línia amb dos
    noms i mai arriba a distingir-los —que és justament el que aquest
    apartat de la geometria vol que aprengui.

    COM ES GARANTEIX ARA. Abans l'apotema es dibuixava dins de la
    perspectiva, i llavors la comprovació era geomètrica: que el segment
    marcat no fos vertical, perquè vertical és on va l'altura. Aquella
    representació s'ha abandonat —dins de la perspectiva l'apotema queda
    escurçada i indistingible de l'aresta lateral que té al costat— i
    ara, quan l'enunciat dona l'apotema, es desplega una CARA LATERAL en
    veritable magnitud i s'hi acota allà. En aquesta vista l'apotema sí
    que és vertical, perquè és l'altura d'un triangle isòsceles dibuixat
    dret: comprovar que no ho sigui ja no vol dir res.

    La separació es garanteix d'una altra manera, més forta que abans:
    en aquests ítems no s'ha de dibuixar CAP altura del cos. Si no hi ha
    eix vertical des de l'àpex fins al centre de la base, no hi pot haver
    confusió possible entre els dos segments. Es comprova, doncs, que la
    figura porti la vista auxiliar i que no hi hagi l'eix del cos."""

    # Base parella coneguda a cada ítem, perquè la prova no hagi de
    # tornar a interpretar l'enunciat per endevinar quants costats té
    # la base: 179a i 197 són quadrangulars, 183 és hexagonal.
    BASE_PARELLA = {"179a": 4, "183": 6, "197": 4}

    def test_apotema_va_a_la_vista_auxiliar_i_no_es_dibuixa_cap_altura(self):
        f9 = TOTS[9]
        per_id_f9 = {it["id"]: it for it in f9}
        provats = 0
        for qid in self.BASE_PARELLA:
            it = per_id_f9.get(qid)
            if it is None or not it.get("figura"):
                continue
            fig = it["figura"]
            self.assertIn(
                "veritable magnitud", fig,
                "%s: l'enunciat dona l'apotema de la piràmide, així que la "
                "figura ha de portar la cara lateral desplegada en veritable "
                "magnitud; sense ella l'apotema torna a quedar dins de la "
                "perspectiva, on no es distingeix de l'aresta lateral." % qid)
            self.assertIsNotNone(
                re.search(r'stroke="var\(--fig-marca[^"]*"', fig),
                "%s: no s'hi troba cap segment d'apotema marcat "
                "(--fig-marca)" % qid)
            # Cap segment vertical discontinu: seria l'eix del cos, i
            # dibuixar-lo aquí tornaria a posar altura i apotema a la
            # mateixa figura.
            for m in re.finditer(
                    r'<line[^>]*x1="([\-\d.]+)" y1="([\-\d.]+)" '
                    r'x2="([\-\d.]+)" y2="([\-\d.]+)"[^>]*'
                    r'stroke-dasharray', fig):
                x1, y1, x2, y2 = (float(v) for v in m.groups())
                if abs(x1 - x2) < 0.1 and abs(y1 - y2) > 20:
                    self.fail(
                        "%s: hi ha un eix vertical discontinu (x=%.1f, de "
                        "y=%.1f a y=%.1f). En un ítem que dona l'apotema no "
                        "s'hi ha de dibuixar l'altura del cos: tenir-les "
                        "totes dues a la mateixa figura és el que fa que "
                        "l'alumne les confongui." % (qid, x1, y1, y2))
            provats += 1
        self.assertGreaterEqual(provats, 3,
                                "esperava comprovar els 3 ítems coneguts "
                                "amb base parella (179a, 183, 197)")


if __name__ == "__main__":
    unittest.main(verbosity=2)
