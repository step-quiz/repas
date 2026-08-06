# -*- coding: utf-8 -*-
"""tests/test_banc.py — proves sobre el banc ja compilat (`data/fullN.js`).

La diferència amb `test_lib.py` és que aquestes no miren el codi que genera
els ítems sinó el RESULTAT: carreguen els fitxers que es publiquen i els
comproven com ho faria algú de fora.

Les comprovacions de matemàtiques recalculen la resposta amb `Fraction` de la
biblioteca estàndard, sense fer servir res de `tools/`. És l'única manera que
serveixin de res: si per comprovar `lib.py` fes servir `lib.py`, una errada
al motor passaria per les dues bandes i no la veuria ningú.

    python3 -m unittest discover -s tests -v
"""
import base64
import json
import os
import re
import unittest
from collections import Counter
from fractions import Fraction as F

ARREL = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")


def carrega(n):
    ruta = os.path.join(ARREL, "data", "full%d.js" % n)
    with open(ruta, encoding="utf-8") as f:
        s = f.read()
    return json.loads(s[s.index("{"):s.rindex("}") + 1])


def items(n):
    d = carrega(n)
    out = []
    for it in d["items"]:
        k = json.loads(base64.b64decode(it["clau"]))
        out.append(dict(it, **k))
    return out


TOTS = {n: items(n) for n in range(1, 13)}
PLANS = [it for n in sorted(TOTS) for it in TOTS[n]]


def clau(it):
    return it["opcions"][it["ok"]]


def num(t):
    """Primer valor numèric d'una cadena LaTeX: fracció o decimal català."""
    t = t.replace("\\,", "").replace("\\ ", "")
    m = re.search(r"(-?)\\d?frac\{(-?\d+)\}\{(-?\d+)\}", t)
    if m:
        v = F(int(m.group(2)), int(m.group(3)))
        return -v if m.group(1) == "-" else v
    m = re.search(r"(-?\d+(?:\{,\}\d+)?)", t)
    return F(m.group(1).replace("{,}", ".")) if m else None


# ---------------------------------------------------------------- estructura

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


if __name__ == "__main__":
    unittest.main(verbosity=2)


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


class Figures(unittest.TestCase):
    """La canonada de figures (§3.5 del HANDOVER). Les regles no són d'estil:
    cadascuna evita que una figura trenqui alguna cosa que ja funciona."""

    def _amb_figura(self):
        return [it for it in PLANS if it.get("figura")]

    def test_hi_ha_figures(self):
        self.assertGreater(len(self._amb_figura()), 0,
                           "cap ítem amb figura: la canonada no s'està fent servir")

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
