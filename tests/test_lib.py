# -*- coding: utf-8 -*-
"""tests/test_lib.py — proves dels ajudants de tools/lib.py.

Es fan servir `unittest` de la biblioteca estàndard i no `pytest`, perquè el
projecte no té dependències i afegir-ne una només per a les proves aniria en
contra del que és. S'executa amb:

    python3 -m unittest discover -s tests -v

o, més senzill, amb `tests/executa.sh`, que a més passa les de JavaScript.

QUÈ PROVEN: els ajudants de càlcul i renderitzat, un per un, amb valors
calculats a mà o amb `Fraction` de la biblioteca estàndard. La gràcia és
justament NO fer servir la lògica de `lib.py` per comprovar `lib.py`: si una
prova es limités a comparar la funció amb ella mateixa no detectaria res.
"""
import os
import sys
import unittest
from fractions import Fraction as F

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                "..", "tools"))
import lib  # noqa: E402


class Aritmetica(unittest.TestCase):
    def test_ev_divideix_exacte(self):
        """ev() no ha de perdre precisió: les divisions són racionals."""
        self.assertEqual(lib.ev("(-54)/9"), F(-6))
        self.assertEqual(lib.ev("1/3+2/5"), F(11, 15))
        self.assertEqual(lib.ev("2/6"), F(1, 3))
        # el perill que justifica la funció: amb float, 0.1+0.2 != 0.3
        self.assertEqual(lib.ev("1/10+2/10"), F(3, 10))

    def test_mcd_i_mcm(self):
        self.assertEqual(lib.mcd(45, 27), 9)
        self.assertEqual(lib.mcd(6, 8, 12), 2)
        self.assertEqual(lib.mcm(12, 18), 36)
        self.assertEqual(lib.mcm(2, 3, 5), 30)

    def test_mcd_i_mcm_ignoren_el_signe(self):
        """Els fulls tenen exercicis amb negatius i la nota diu que el signe
        no hi afecta: cal que el codi hi estigui d'acord."""
        self.assertEqual(lib.mcd(45, -27), 9)
        self.assertEqual(lib.mcm(-12, 18), 36)

    def test_factors(self):
        self.assertEqual(lib.factors(3850), [(2, 1), (5, 2), (7, 1), (11, 1)])
        self.assertEqual(lib.factors(97), [(97, 1)])       # primer
        self.assertEqual(lib.factors(64), [(2, 6)])
        self.assertEqual(lib.factors(-12), [(2, 2), (3, 1)])

    def test_factors_reconstrueixen_el_nombre(self):
        for n in (12, 100, 3850, 999, 1024, 7919):
            prod = 1
            for p, e in lib.factors(n):
                prod *= p ** e
            self.assertEqual(prod, n, "la descomposició de %d no el reconstrueix" % n)


class Renderitzat(unittest.TestCase):
    def test_tex_enters_i_fraccions(self):
        self.assertEqual(lib.tex(5), "5")
        self.assertEqual(lib.tex(-5), "-5")
        self.assertEqual(lib.tex(F(3, 4)), r"\dfrac{3}{4}")

    def test_tex_posa_el_signe_al_davant(self):
        """Convenció del quadern: -3/4 i no 3/-4 ni \\dfrac{-3}{4}."""
        self.assertEqual(lib.tex(F(-3, 4)), r"-\dfrac{3}{4}")
        self.assertEqual(lib.tex(F(3, -4)), r"-\dfrac{3}{4}")

    def test_tex_simplifica(self):
        self.assertEqual(lib.tex(F(2, 4)), r"\dfrac{1}{2}")
        self.assertEqual(lib.tex(F(4, 2)), "2")

    def test_texd_coma_catalana(self):
        self.assertEqual(lib.texd(F(1, 2)), "0{,}5")
        self.assertEqual(lib.texd(F(1, 3), 2), "0{,}33")
        self.assertEqual(lib.texd(5), "5")
        self.assertNotIn(".", lib.texd(F(22, 7), 4))

    def test_tex_factors(self):
        self.assertEqual(lib.tex_factors(432), r"2^{4}\cdot 3^{3}")
        self.assertEqual(lib.tex_factors(-432), r"-2^{4}\cdot 3^{3}")
        self.assertEqual(lib.tex_factors(-432, sign=False), r"2^{4}\cdot 3^{3}")


class Decimals(unittest.TestCase):
    def test_dec_ex(self):
        self.assertEqual(lib.dec_ex("5,25"), F(21, 4))
        self.assertEqual(lib.dec_ex("5{,}25"), F(21, 4))
        self.assertEqual(lib.dec_ex("-0,5"), F(-1, 2))
        self.assertEqual(lib.dec_ex("7"), F(7))

    def test_per_frac(self):
        self.assertEqual(lib.per_frac(3, "", "5"), F(32, 9))          # 3,5̅
        self.assertEqual(lib.per_frac(5, "9", "02"), F(5843, 990))    # 5,902̅
        self.assertEqual(lib.per_frac(0, "", "3"), F(1, 3))           # 0,3̅

    def test_per_frac_el_cas_famos(self):
        """0,9̅ = 1 i 1,9̅ = 2. Si això falla, tot el bloc de decimals cau."""
        self.assertEqual(lib.per_frac(0, "", "9"), F(1))
        self.assertEqual(lib.per_frac(1, "", "9"), F(2))
        self.assertEqual(lib.per_frac(12, "9", "9"), F(13))

    def test_per_frac_anada_i_tornada(self):
        """La fracció generatriu ha de reproduir el decimal que la genera.
        Es comprova desenvolupant la divisió a mà fins a prou xifres."""
        casos = [(3, "", "5"), (5, "9", "02"), (15, "3", "2"), (0, "", "142857")]
        for ent, ante, per in casos:
            q = lib.per_frac(ent, ante, per)
            # xifres decimals esperades: anteperíode + període repetit
            esperat = (ante + per * 25)[:20]
            obtingut = ""
            r = (q - int(q)) if q >= 0 else None
            for _ in range(20):
                r *= 10
                obtingut += str(int(r))
                r -= int(r)
            self.assertEqual(obtingut, esperat,
                             "%s no desenvolupa com %s,%s(%s)" % (q, ent, ante, per))

    def test_den_gen(self):
        self.assertEqual(lib.den_gen("", "5"), 9)
        self.assertEqual(lib.den_gen("9", "02"), 990)
        self.assertEqual(lib.den_gen("", "142857"), 999999)


class Distractors(unittest.TestCase):
    def test_tria_descarta_els_que_valen_com_la_clau(self):
        cands = [lib.D("5", "A", "f"), lib.D("6", "B", "f"),
                 lib.D("7", "C", "f"), lib.D("8", "D", "f")]
        out = lib.tria(5, cands, n=3)
        self.assertEqual([c["tex"] for c in out], ["6", "7", "8"])

    def test_tria_descarta_els_repetits_entre_ells(self):
        cands = [lib.D("6", "A", "f"), lib.D("6", "B", "f"),
                 lib.D("7", "C", "f"), lib.D("8", "D", "f")]
        out = lib.tria(5, cands, n=3)
        self.assertEqual([c["tex"] for c in out], ["6", "7", "8"])

    def test_tria_es_queixa_si_no_n_hi_ha_prou(self):
        cands = [lib.D("6", "A", "f"), lib.D("6", "B", "f")]
        with self.assertRaises(AssertionError):
            lib.tria(5, cands, n=3)

    def test_fx(self):
        latex, val = lib.fx((2, 4), (3, 3))
        self.assertEqual(val, 432)
        self.assertEqual(latex, r"2^{4}\cdot 3^{3}")


class Validacio(unittest.TestCase):
    """_valida() és l'única xarxa que hi havia abans d'aquestes proves.
    Val la pena comprovar que de veritat atura el que diu que atura."""

    def _item(self, **canvis):
        base = dict(qid="99z", ex=99, ap="z", bloc="b", tipus="A",
                    enunciat="$1+1$", correcta="$2$",
                    distractors=[lib.D("$3$", "E1", "f"), lib.D("$4$", "E2", "f"),
                                 lib.D("$5$", "E3", "f")],
                    pistes=["p"], resolucio=["r"], ex_text="", nota="",
                    dif=1, nota_interna="")
        base.update(canvis)
        it = dict(base)
        it["id"] = it.pop("qid")
        it["opcions"] = [it["correcta"]] + [d["tex"] for d in it["distractors"]]
        return it

    def test_accepta_un_item_ben_format(self):
        lib._valida(self._item())

    def test_rebutja_menys_de_tres_distractors(self):
        it = self._item(distractors=[lib.D("$3$", "E", "f")])
        it["opcions"] = [it["correcta"]] + ["$3$"]
        with self.assertRaises(AssertionError):
            lib._valida(it)

    def test_rebutja_opcions_repetides(self):
        """_valida() reconstrueix les opcions des de `correcta` +
        `distractors`, així que el duplicat s'ha de provocar aquí."""
        it = self._item(distractors=[lib.D("$3$", "E1", "f"), lib.D("$3$", "E2", "f"),
                                     lib.D("$5$", "E3", "f")])
        with self.assertRaises(AssertionError):
            lib._valida(it)

    def test_rebutja_un_distractor_igual_que_la_clau(self):
        """El cas que va aparèixer de debò a l'auditoria: un distractor que
        val exactament el mateix que la resposta correcta."""
        it = self._item(distractors=[lib.D("$2$", "E1", "f"), lib.D("$4$", "E2", "f"),
                                     lib.D("$5$", "E3", "f")])
        with self.assertRaises(AssertionError):
            lib._valida(it)

    def test_rebutja_un_distractor_sense_feedback(self):
        it = self._item(distractors=[lib.D("$3$", "E1", ""), lib.D("$4$", "E2", "f"),
                                     lib.D("$5$", "E3", "f")])
        with self.assertRaises(AssertionError):
            lib._valida(it)

    def test_rebutja_sense_dificultat(self):
        with self.assertRaises(AssertionError):
            lib._valida(self._item(dif=None))

    def test_rebutja_una_nota_visible_amb_rastres_interns(self):
        """Aquesta regla existeix perquè van arribar a producció catorze notes
        que parlaven de fitxers .tex i de feina pendent."""
        for text in ["vegeu r-im8.tex", "cal confirmar-ho", "abans de publicar"]:
            with self.assertRaises(AssertionError):
                lib._valida(self._item(nota=text))

    def test_deixa_passar_aquests_rastres_a_la_nota_interna(self):
        lib._valida(self._item(nota_interna="vegeu r-im8.tex, cal confirmar"))


class Dificultats(unittest.TestCase):
    def test_rebutja_un_nivell_fora_d_escala(self):
        with self.assertRaises(AssertionError):
            lib.dificultats({999: 4})

    def test_rebutja_registrar_dues_vegades_amb_valors_diferents(self):
        """El Full 1 el componen quatre mòduls i la taula s'acumula: registrar
        el mateix exercici amb dos nivells diferents ha de petar."""
        lib.dificultats({998: 1})
        lib.dificultats({998: 1})          # repetir amb el mateix valor és lícit
        with self.assertRaises(AssertionError):
            lib.dificultats({998: 3})


class Catalog(unittest.TestCase):
    def test_les_etiquetes_del_tax_tenen_forma_d_etiqueta(self):
        for k in lib.TAX:
            self.assertRegex(k, r"^[A-Z][A-Z0-9_]*$", "etiqueta rara: %s" % k)

    def test_cap_text_del_tax_es_buit_ni_minuscul(self):
        for k, v in lib.TAX.items():
            self.assertTrue(v.strip(), "%s no té text" % k)
            self.assertGreater(len(v), 30, "%s té un text massa curt per servir" % k)


if __name__ == "__main__":
    unittest.main(verbosity=2)
