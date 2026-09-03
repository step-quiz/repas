# -*- coding: utf-8 -*-
"""tests/test_opcions_distintes.py — cap distractor pot valer el mateix que
la resposta correcta.

PER QUÈ EXISTEIX AQUESTA PROVA

És el defecte més repetit de tota la història d'aquest projecte, i el més
difícil de veure llegint:

- L'auditoria inicial en va trobar **cinc** a mà: 12/257a (`3/6` contra
  `1/2`), 5/79e (`1281/159` contra `427/53`), 5/86c (`50/38` contra `25/19`),
  3/54c i 4/74g. Tres d'ells ho admetien a la seva pròpia retroacció.
- Al merge de les cinc vies en va aparèixer un de nou, 12/305b:
  `6/10·4/10` contra `4/10·6/10`. La retroacció deia literalment «el resultat
  numèric coincideix per casualitat en aquest cas».

Sempre és el mateix mal: **un alumne que calcula bé tria l'opció i se li diu
que s'ha equivocat.** I sempre ha calgut trobar-lo a mà, perquè `_valida()`
compara les opcions com a CADENES i dues cadenes diferents poden valer el
mateix número.

Aquesta prova compara VALORS. No pot cobrir-ho tot —moltes opcions són text,
o expressions algebraiques que no es redueixen a un número— però cobreix el
cas majoritari, que és el numèric, i és exactament on han sortit tots els
casos coneguts.

QUAN FALLI: no canviïs la prova, canvia el distractor. Si de veritat les dues
opcions han de valer el mateix (vegeu `EXCEPCIONS` més avall), documenta-hi
el motiu; si no en tens cap de bo, és que el distractor està malament.
"""
import os
import re
import sys
import unittest
from fractions import Fraction as F

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from comu import PLANS, TOTS  # noqa: E402

# id d'ítem -> número de full, per poder anomenar les fallades
FULL_DE = {it["id"]: n for n in TOTS for it in TOTS[n]}


# ---------------------------------------------------------------------
# Excepcions documentades
# ---------------------------------------------------------------------
# Un ítem només hi entra si el fet que dues opcions valguin igual ÉS
# l'exercici. Afegir-hi res sense aquesta justificació buida la prova.
EXCEPCIONS = {
    "1/20a": "L'enunciat demana la fracció IRREDUCTIBLE. 25/10 i 15/6 valen "
             "el mateix que 5/2 i són, precisament per això, respostes "
             "incorrectes: el que es practica és simplificar.",
}


def valor(text):
    r"""El número que l'alumne llegeix com a resultat d'una opció, o None.

    L'extracció és conservadora a posta. Una prova que salta quan no toca
    acaba desactivada, i llavors no cobreix res; val més mirar poques opcions
    i encertar-les que mirar-les totes i cridar el llop.

    S'accepta una opció només si:

    - comença per `$` (si comença amb text, la fórmula de dins és una
      referència, no el resultat: «No es pot simplificar, perquè $11$ és
      primer»);
    - té **exactament un** bloc `$...$` (dos blocs volen dir dues
      afirmacions, o un text explicatiu amb fórmula de referència);
    - el bloc no porta separadors d'enumeració `\;`, `\ ` o `;`, que
      indiquen que l'opció dona diversos valors alhora (`$x=2,\ y=0$`);
    - el que hi ha després de l'última igualtat és un número o una fracció
      neta, sense arrels, incògnites, potències ni parèntesis.

    El text explicatiu DESPRÉS del bloc no molesta, mentre no hi torni a
    haver fórmula: és el format habitual dels distractors
    (`$...=\dfrac{12}{25}$, comptant els dos ordres`), i és justament on han
    aparegut els defectes que aquesta prova busca.
    """
    if not text.lstrip().startswith("$"):
        return None
    blocs = re.findall(r"\$(.+?)\$", text, re.S)
    if len(blocs) != 1:
        return None
    e = blocs[0]
    if re.search(r"\\;|\\quad|\\qquad|;|\\ ", e):
        return None
    cua = e.rsplit("=", 1)[1] if "=" in e else e
    cua = cua.strip()
    # Ara sí: un cop aïllada la cua, es treuen les fraccions i la coma
    # decimal catalana, i el que quedi no pot portar res més.
    net = re.sub(r"\\d?frac\{[^{}]*\}\{[^{}]*\}", "", cua).replace("{,}", "")
    if re.search(r"[A-Za-z\\(),^]", net):
        return None
    m = re.fullmatch(r"(-?)\s*\\d?frac\{(-?\d+)\}\{(-?\d+)\}", cua)
    if m:
        if int(m.group(3)) == 0:
            return None
        v = F(int(m.group(2)), int(m.group(3)))
        if m.group(1) == "-":
            v = -v
    elif re.fullmatch(r"-?\d+(?:\{,\}\d+)?", cua):
        v = F(cua.replace("{,}", "."))
    else:
        return None

    # El número tot sol no identifica l'opció. Dues coses més la distingeixen
    # i s'han de comparar amb ell:
    #
    #  - El MEMBRE ESQUERRE: `$y=-3$` i `$x=-3$` són rectes diferents (una
    #    horitzontal i una vertical), i el 10/297c les fa servir com a clau i
    #    distractor.
    #  - La UNITAT que va DARRERE del bloc: `$4$ cm` i `$4$ m` són respostes
    #    diferents, i el 8/287a i el 8/294a s'hi basen.
    #
    # El text explicatiu que comença amb coma (`, canviant l'ordre`) NO
    # compta: és el format normal d'un distractor, i ignorar-lo és el que
    # permet detectar el cas que va motivar aquesta prova.
    # L'ETIQUETA: el que hi ha abans de la PRIMERA igualtat. Ha de ser la
    # primera i no l'última, perquè `$P=\dfrac{4}{10}\cdot\dfrac{6}{10}=...$`
    # i `$P=\dfrac{6}{10}\cdot\dfrac{4}{10}=...$` han de comptar com la
    # mateixa etiqueta (`P`): el que els distingeix és el camí de càlcul, i
    # justament dos camins que arriben al mateix número són el defecte que
    # es busca.
    esq = e.split("=", 1)[0].strip() if "=" in e else ""
    darrere = text.split("$")[-1].strip()
    unitat = "" if darrere.startswith(",") else re.sub(r"\s+", "", darrere)
    return (esq, v, unitat)


class CapDistractorValComLaClau(unittest.TestCase):

    def test_cap_distractor_val_el_mateix_que_la_resposta_correcta(self):
        fallades, comparats = [], 0
        for it in PLANS:
            vals = [valor(o) for o in it["opcions"]]
            k = vals[it["ok"]]
            if k is None:
                continue
            comparats += 1
            iguals = [i for i, v in enumerate(vals)
                      if i != it["ok"] and v is not None and v == k]
            if not iguals:
                continue
            marca = "%s/%s" % (FULL_DE[it["id"]], it["id"])
            if marca in EXCEPCIONS:
                continue
            fallades.append(
                "%s: totes dues opcions valen %s.\n"
                "      correcta:   %s\n      distractor: %s"
                % (marca, k[1],
                   it["opcions"][it["ok"]][:96], it["opcions"][iguals[0]][:96]))
        # Terra de cobertura. Ara se'n comparen 364 de 892 (41 %): la resta
        # són opcions de text, coordenades, arrels o expressions amb
        # incògnita, que aquest lector no sap reduir a un número. Si algun
        # canvi la fa caure gaire per sota, és que el lector s'ha trencat.
        self.assertGreater(comparats, 300,
                           "només s'han pogut comparar %d ítems de %d: el "
                           "lector de valors s'ha trencat" % (comparats, len(PLANS)))
        self.assertEqual(
            fallades, [],
            "\n\n  Un alumne que calculi bé triaria aquestes opcions i se li "
            "diria que s'ha equivocat:\n\n  " + "\n\n  ".join(fallades))

class DosDistractorsAmbElMateixValor(unittest.TestCase):
    """Més suau: dos distractors que valen igual no marquen res correcte com
    a incorrecte, però malgasten una de les tres opcions que hi ha per
    diagnosticar. Es reporta com a avís, amb un sostre generós."""

    def test_pocs_items_malgasten_una_opcio(self):
        malgastats = []
        for it in PLANS:
            vals = [valor(o) for i, o in enumerate(it["opcions"]) if i != it["ok"]]
            nn = [v for v in vals if v is not None]
            if len(nn) == 3 and len(set(nn)) < 3:
                malgastats.append(it["id"])
        # Trinquet: avui n'hi ha 1 (l'1/20a, documentat més amunt). El
        # marge és per no bloquejar contingut nou, però si puja gaire vol dir
        # que s'estan escrivint distractors que no distingeixen res.
        self.assertLessEqual(
            len(malgastats), 4,
            "%d ítems tenen dos distractors amb el mateix valor, i per tant "
            "només dues opcions útils: %s" % (len(malgastats), malgastats[:12]))


if __name__ == "__main__":
    unittest.main(verbosity=2)
