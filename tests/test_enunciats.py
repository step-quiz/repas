# -*- coding: utf-8 -*-
"""Comprovacions sobre el TEXT dels enunciats.

Tres classes d'error trobades en revisió humana, totes tres detectables
automàticament i totes tres invisibles per a l'auditoria de figures, que
només mira SVG.
"""
import re
import unittest

from comu import PLANS

CAMPS = ("enunciat", "encapcalament", "nota")


def _trossos_fora_de_math(text):
    """Els bocins de `text` que NO són dins de `$...$`."""
    parts = re.split(r"(\$[^$]*\$)", text or "")
    return [p for p in parts
            if not (p.startswith("$") and p.endswith("$"))]


class LatexNomesDinsDeModeMatematic(unittest.TestCase):
    """`\\,` (espai fi) i `\\%` són ordres de LaTeX: fora de `$...$` no es
    componen i l'alumne veu els caràcters literals.

    Va passar a l'enunciat de 91, on el preu es llegia "10\\,200 €" en
    comptes de "10 200 €", i a deu ítems més (92, 110-115, 118): tots
    separadors de milers i percentatges escrits en text corrent."""

    def test_cap_ordre_de_latex_en_text_pla(self):
        dolents = []
        for it in PLANS:
            for camp in CAMPS:
                for tros in _trossos_fora_de_math(it.get(camp)):
                    if "\\," in tros or "\\%" in tros:
                        dolents.append("%s (%s)" % (it["id"], camp))
                        break
        self.assertEqual(
            dolents, [],
            "ordres de LaTeX escrites fora de mode matemàtic, que es "
            "veuran literals: %s" % dolents[:8])


class CadaApartatPorlaLaSevaInstruccio(unittest.TestCase):
    """L'aplicació presenta els ítems d'un en un, no com un full imprès.

    Si la instrucció comuna ("Calcula el perímetre de les figures
    següents.") només la porta l'apartat `a`, els altres apareixen sense
    cap pregunta: a 121b l'alumne llegia "Triangle de costats 6 cm, 8 cm i
    12 cm." i prou. `build.compila()` la propaga a tot el grup; això ho
    comprova sobre el resultat compilat."""

    def test_cap_apartat_es_queda_sense_instruccio(self):
        per_ex = {}
        for it in PLANS:
            per_ex.setdefault((it.get("full"), it["ex"]), []).append(it)
        orfes = []
        for items in per_ex.values():
            if len(items) < 2:
                continue
            te = [i for i in items
                  if (i.get("encapcalament") or "").strip()]
            no_te = [i for i in items
                     if not (i.get("encapcalament") or "").strip()]
            if te and no_te:
                orfes += [i["id"] for i in no_te]
        self.assertEqual(
            orfes, [],
            "apartats sense instrucció, tot i que un germà seu en té una: "
            "%s" % orfes[:10])


class ElsBlocsMatematicsHanDePoderCabre(unittest.TestCase):
    """Un bloc `$...$` és una unitat tipogràfica indivisible: KaTeX no el
    parteix mai en dues línies. Si és molt llarg, surt de la targeta i
    queda tallat.

    Va passar a 228a/b/c, on la llista de 27 estatures anava dins d'un sol
    bloc de 107 caràcters. Les fórmules llargues de veritat (sistemes
    d'equacions, cadenes de fraccions) són inevitables i van a part; el
    que aquesta prova busca és el cas evitable: text o llistes de nombres
    ficats dins de mode matemàtic sense cap motiu."""

    LIMIT = 70
    # Fórmules de debò que no es poden escurçar: porten ordres de LaTeX.
    ORDRES = ("\\dfrac", "\\frac", "\\begin", "\\left", "\\sqrt", "\\cdot",
              "\\text", "\\overline", "\\sum")

    def test_cap_llista_o_text_llarg_dins_de_mode_matematic(self):
        dolents = []
        for it in PLANS:
            for camp in CAMPS:
                text = it.get(camp) or ""
                for m in re.finditer(r"\$([^$]+)\$", text):
                    cos = m.group(1)
                    if len(cos) <= self.LIMIT:
                        continue
                    if any(o in cos for o in self.ORDRES):
                        continue        # fórmula real
                    dolents.append("%s (%s, %d car.)"
                                   % (it["id"], camp, len(cos)))
        self.assertEqual(
            dolents, [],
            "blocs matemàtics llargs que no contenen cap fórmula: haurien "
            "d'anar en text pla perquè puguin partir de línia. %s"
            % dolents[:8])


if __name__ == "__main__":
    unittest.main()
