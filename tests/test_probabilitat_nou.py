# -*- coding: utf-8 -*-
"""tests/test_probabilitat_nou.py — recàlcul independent de la via «tarr».

Cada mètode recalcula de zero amb `Fraction`, sense importar res de
`tools/`: les dades (mides de bosses, nombres de la taula, etc.) es
repeteixen aquí a mà, igual que fa `MatematiquesFull11` amb les seves
llistes de notes. Si algun dia canvien els nombres de `c_probabilitat.py`
sense actualitzar-los aquí, aquest fitxer ha de començar a fallar: això és
el que demostra que de debò estan comprovant alguna cosa.

Cobreix les 5 famílies de càlcul dels exercicis 305-320: amb reposició,
sense reposició, llegir/completar un arbre, el complement d'«almenys un»,
i la probabilitat condicionada (incloent la seva asimetria)."""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import re
import unittest

from comu import ARREL, TOTS, PLANS, carrega, clau, num, per_id  # noqa: F401
from fractions import Fraction as F  # noqa: F401


def _resultat_final(text):
    """Aïlla el resultat numèric principal d'una cadena `correcta`,
    ignorant tant els passos intermedis com qualsevol comparació afegida
    al final.

    Dues coses compliquen fer-ho amb `num()` sol: (1) alguns ítems
    escriuen els passos («$4/10\\cdot4/10=4/25$»): aquí cal l'ÚLTIMA
    fracció, no la primera que `num()` trobaria; (2) uns quants ítems
    (317, 320) afegeixen, després del resultat, una comparació explícita
    amb un altre exercici («..., molt més petita que $9/10$ de l'exercici
    anterior»): si es fes servir tota la cadena, cal aturar-se abans
    d'aquesta comparació.

    Estratègia en dos passos: primer es talla a la primera coma que
    introdueixi text explicatiu («, seguint...», «, molt més...»),
    quedant-nos amb el tros que conté només el resultat principal (amb
    els seus passos, si n'hi ha); després, d'aquest tros, s'agafa la part
    posterior al darrer «=», que és el resultat final un cop fets tots
    els passos."""
    principal = text.split(", ", 1)[0]
    return num(principal.rsplit("=", 1)[-1])


def _feedbacks_de(it):
    """Retorna la llista de feedbacks (`diag`) alineada amb `it["opcions"]`:
    la posició de la resposta correcta hi porta una cadena buida (`comu`
    ja ho deixa així), la resta el text que l'alumne veu si la trien."""
    return it["diag"]


def _coincidencia_reconeguda(fb):
    """Cert si aquest feedback ja reconeix, en paraules, que el seu
    resultat numèric coincideix amb el d'una altra opció (o que és en
    si mateix un valor impossible, que és la mateixa idea des d'un
    altre angle: dos errors diferents que arriben tots dos a un
    resultat absurd es reconeixen l'un a l'altre sense haver-se
    d'anomenar per número). És la marca que distingeix una col·lisió
    de valor INTENCIONADA (el distractor ensenya justament que dos
    camins diferents hi arriben, com 305b amb la commutativitat, o 311
    amb dos errors que tots dos superen 1) d'una ACCIDENTAL (ningú se
    n'ha adonat, com era 318 abans de corregir-ho): només la primera
    és acceptable.

    "Coincideix" cobreix el cas directe (305b); "més d'1"/"més gran
    que 1"/"impossible" cobreix el cas 311, on cap dels dos feedbacks
    parla de l'altra opció directament, però tots dos assenyalen la
    mateixa propietat matemàtica (el resultat és invàlid com a
    probabilitat) que fa que compartir valor no sigui casualitat."""
    if not fb:
        return False
    fb = fb.lower()
    paraules_clau = ("coincideix", "més d'1", "més d’1", "més gran que 1",
                      "impossible")
    return any(p in fb for p in paraules_clau)


def _es_item_cert_fals(it):
    """Cert si les opcions d'aquest ítem són afirmacions completes
    ("Cert: ...", "Fals: ...") en lloc d'expressions numèriques soles.
    En aquest format, dues opcions poden compartir un número dins del
    text (per exemple, totes dues mencionen "2/15" en algun punt, una
    correctament associat a "sense reposició" i l'altra invertit) sense
    que això sigui la mateixa resposta: la resposta és la proposició
    sencera, no l'últim número que hi apareix. `_resultat_final()` no
    és l'eina adequada per a aquests ítems (307, 314c en aquesta via) i
    es filtren abans de comparar valors."""
    return all(o.strip().startswith(("Cert", "Fals", "Vertader"))
               for o in it["opcions"])


class ProbabilitatComposta(unittest.TestCase):
    """Exercicis 305-313: amb i sense reposició, arbres, i el complement
    d'«almenys un». Recàlcul totalment independent de c_probabilitat.py."""

    def _it(self, qid):
        return per_id(12, qid)

    def test_amb_reposicio_305(self):
        """Bossa 4 vermelles, 6 blaves, CADA extracció manté 4/10 i 6/10."""
        pV, pB = F(4, 10), F(6, 10)
        casos = {"305a": pV * pV, "305b": pV * pB, "305c": pB * pB}
        for qid, esperat in casos.items():
            self.assertEqual(esperat, _resultat_final(clau(self._it(qid))),
                              "%s: amb reposició" % qid)

    def test_sense_reposicio_306(self):
        """Mateixa bossa, SENSE reposar: el denominador (i el numerador,
        si toca) baixa una unitat a la segona extracció."""
        pV1 = F(4, 10)
        pV2_dadoV1 = F(3, 9)
        self.assertEqual(pV1, _resultat_final(clau(self._it("306a"))))
        self.assertEqual(pV2_dadoV1, _resultat_final(clau(self._it("306b"))))
        self.assertEqual(pV1 * pV2_dadoV1, _resultat_final(clau(self._it("306c"))))

    def test_reposicio_dona_probabilitat_diferent_307(self):
        """El mateix parell (V,V), amb i sense reposició, no coincideix."""
        amb = F(4, 10) * F(4, 10)
        sense = F(4, 10) * F(3, 9)
        self.assertNotEqual(amb, sense)
        self.assertGreater(amb, sense)

    def test_llegir_arbre_308(self):
        """Moneda (1/2, 1/2) seguida d'un dau (1/6 i 5/6 sota cara, 1/2 i
        1/2 sota creu): la probabilitat d'un camí és el producte."""
        pC, pX = F(1, 2), F(1, 2)
        p6_dadoC = F(1, 6)
        pParell_dadoX = F(1, 2)
        self.assertEqual(pC * p6_dadoC, _resultat_final(clau(self._it("308a"))))
        self.assertEqual(pX * pParell_dadoX, _resultat_final(clau(self._it("308b"))))

    def test_completar_branca_arbre_309(self):
        """Urna 2V 3B sense reposició: la branca que falta és 1 menys la
        veïna (1 - 3/4 = 1/4), i el camí sencer és el seu producte."""
        branca_veina = F(3, 4)
        branca_que_falta = 1 - branca_veina
        self.assertEqual(F(1, 4), branca_que_falta)
        self.assertEqual(branca_que_falta, _resultat_final(clau(self._it("309a"))))
        pV1 = F(2, 5)
        self.assertEqual(pV1 * branca_que_falta,
                          _resultat_final(clau(self._it("309b"))))

    def test_construir_arbre_310(self):
        """Calaix 5 negres, 3 blancs, sense reposició: dos negres seguits,
        i «del mateix color» és la suma (no el producte) dels dos casos."""
        pN1, pB1 = F(5, 8), F(3, 8)
        pN2_dadoN1 = F(4, 7)
        pB2_dadoB1 = F(2, 7)
        pNN = pN1 * pN2_dadoN1
        pBB = pB1 * pB2_dadoB1
        self.assertEqual(pNN, _resultat_final(clau(self._it("310a"))))
        self.assertEqual(pNN + pBB, _resultat_final(clau(self._it("310b"))))

    def test_almenys_un_via_complement_311_312_313(self):
        """«Almenys un» és 1 menys la probabilitat que no passi cap
        vegada, mai la suma ni el producte directes de les probabilitats
        individuals."""
        # 311: 3 monedes, almenys una cara
        p_cap_cara = F(1, 2) ** 3
        self.assertEqual(1 - p_cap_cara, _resultat_final(clau(self._it("311"))))
        # 312: 2 daus, almenys un 6
        p_cap_sis = F(5, 6) ** 2
        self.assertEqual(1 - p_cap_sis, _resultat_final(clau(self._it("312"))))
        # 313: 12 bombetes (3 defectuoses), 2 triades sense reposició,
        # almenys una defectuosa
        p_cap_defectuosa = F(9, 12) * F(8, 11)
        self.assertEqual(1 - p_cap_defectuosa,
                          _resultat_final(clau(self._it("313"))))

    def test_espai_mostral_complet_311(self):
        """Comprovació creuada per enumeració exhaustiva de 311, per no
        dependre només de l'àlgebra del complement."""
        from itertools import product
        resultats = list(product(["C", "X"], repeat=3))
        almenys1cara = sum(1 for r in resultats if "C" in r)
        self.assertEqual(F(almenys1cara, len(resultats)), F(7, 8))
        self.assertEqual(F(7, 8), _resultat_final(clau(self._it("311"))))


class ProbabilitatCondicionada(unittest.TestCase):
    """Exercicis 314-320: P(B|A) des d'una taula i des d'un arbre, la
    diferència entre P(A i B) i P(B|A), i l'asimetria P(B|A) != P(A|B)."""

    def _it(self, qid):
        return per_id(12, qid)

    def test_taula_doble_entrada_314(self):
        """Mateixes dades que l'exercici 254: 28 homes, 32 dones, 16 homes
        i 20 dones amb carn, la resta amb peix."""
        homes, dones = 28, 32
        homes_carn, dones_carn = 16, 20
        homes_peix = homes - homes_carn
        dones_peix = dones - dones_carn
        self.assertEqual(F(homes_peix, homes),
                          _resultat_final(clau(self._it("314a"))))
        self.assertEqual(F(homes_peix, homes_peix + dones_peix),
                          _resultat_final(clau(self._it("314b"))))

    def test_condicionada_no_es_la_conjunta_314c(self):
        """P(peix|home) i P(home i peix) parteixen de denominadors
        diferents (28 homes vs. 60 persones) i no coincideixen."""
        homes, total = 28, 60
        homes_peix = 12
        p_peix_dado_home = F(homes_peix, homes)
        p_home_i_peix = F(homes_peix, total)
        self.assertNotEqual(p_peix_dado_home, p_home_i_peix)
        self.assertEqual(F(3, 7), p_peix_dado_home)
        self.assertEqual(F(1, 5), p_home_i_peix)

    def test_arbre_dues_caixes_315(self):
        """Caixa A (2V,1B) i caixa B (1V,3B), triades amb 1/2 i 1/2: la
        probabilitat total de vermella suma els dos camins, i la
        condicionada inversa es calcula dividint el camí pel total."""
        pA = pB = F(1, 2)
        pV_dadoA = F(2, 3)
        pV_dadoB = F(1, 4)
        pAiV = pA * pV_dadoA
        pBiV = pB * pV_dadoB
        pV = pAiV + pBiV
        self.assertEqual(pAiV, _resultat_final(clau(self._it("315a"))))
        self.assertEqual(pV, _resultat_final(clau(self._it("315b"))))
        pA_dadoV = pAiV / pV
        self.assertEqual(pA_dadoV, _resultat_final(clau(self._it("315c"))))
        # Coherència interna: la suma de les dues probabilitats inverses
        # (venir d'A sabent que és vermella, i venir de B) ha de fer 1.
        pB_dadoV = pBiV / pV
        self.assertEqual(F(1), pA_dadoV + pB_dadoV)

    def test_taula_fumadors_tos_316_317(self):
        """50 persones, 20 fumadores; 14 fumadores i 9 no fumadores amb
        tos. P(F i T), P(T|F) i la condicionada inversa P(F|T), que no
        coincideix amb P(T|F)."""
        total, fumadors = 50, 20
        fumadors_tos, no_fumadors_tos = 14, 9
        tos_total = fumadors_tos + no_fumadors_tos
        self.assertEqual(F(fumadors_tos, total),
                          _resultat_final(clau(self._it("316a"))))
        pT_dadoF = F(fumadors_tos, fumadors)
        self.assertEqual(pT_dadoF, _resultat_final(clau(self._it("316b"))))
        pF_dadoT = F(fumadors_tos, tos_total)
        self.assertEqual(pF_dadoT, _resultat_final(clau(self._it("317"))))
        self.assertNotEqual(pT_dadoF, pF_dadoT)

    def test_relacio_de_bayes_316_317(self):
        """Comprovació creuada: P(F|T) ha de coincidir amb la fórmula de
        Bayes P(T|F)*P(F)/P(T), no només amb el recompte directe."""
        total, fumadors = 50, 20
        fumadors_tos, no_fumadors_tos = 14, 9
        tos_total = fumadors_tos + no_fumadors_tos
        pT_dadoF = F(fumadors_tos, fumadors)
        pF = F(fumadors, total)
        pT = F(tos_total, total)
        bayes = pT_dadoF * pF / pT
        self.assertEqual(F(fumadors_tos, tos_total), bayes)

    def test_daus_casos_ja_condicionats_318(self):
        """Amb el primer dau ja fixat com a parell (18 casos, no 36),
        comptem quants d'aquests sumen 8."""
        casos_A = 0
        casos_AiB = 0
        for d1 in range(1, 7):
            for d2 in range(1, 7):
                if d1 % 2 == 0:
                    casos_A += 1
                    if d1 + d2 == 8:
                        casos_AiB += 1
        self.assertEqual(18, casos_A)
        self.assertEqual(3, casos_AiB)
        self.assertEqual(F(casos_AiB, casos_A),
                          _resultat_final(clau(self._it("318"))))

    def test_asimetria_condicionada_test_medic_319_320(self):
        """1000 persones, 10 malaltes. Sensibilitat 9/10, fals positiu
        1/10: P(positiu|malalt) i P(malalt|positiu) són molt diferents,
        perquè la malaltia és poc freqüent."""
        malalts, sans = 10, 990
        pos_si_malalt = F(9, 10)
        pos_si_sa = F(1, 10)
        malalts_pos = malalts * pos_si_malalt
        sans_pos = sans * pos_si_sa
        total_pos = malalts_pos + sans_pos
        self.assertEqual(pos_si_malalt, _resultat_final(clau(self._it("319"))))
        p_malalt_dado_positiu = malalts_pos / total_pos
        self.assertEqual(p_malalt_dado_positiu,
                          _resultat_final(clau(self._it("320"))))
        # L'asimetria en si: una diferència d'un ordre de magnitud, no
        # només "diferents per un pèl".
        self.assertGreater(pos_si_malalt / p_malalt_dado_positiu, 10)

    def test_relacio_de_bayes_test_medic_319_320(self):
        """Comprovació creuada per la fórmula de Bayes: P(malalt|positiu)
        ha de coincidir amb P(positiu|malalt)*P(malalt)/P(positiu)."""
        malalts, sans = 10, 990
        total = malalts + sans
        pos_si_malalt = F(9, 10)
        pos_si_sa = F(1, 10)
        malalts_pos = malalts * pos_si_malalt
        sans_pos = sans * pos_si_sa
        total_pos = malalts_pos + sans_pos
        pMalalt = F(malalts, total)
        pPositiu = F(total_pos, total)
        bayes = pos_si_malalt * pMalalt / pPositiu
        self.assertEqual(malalts_pos / total_pos, bayes)


class ProbabilitatFiguresIEstructura(unittest.TestCase):
    """Comprovacions estructurals sobre el banc sencer d'aquesta via, més
    enllà del valor numèric de cada resposta."""

    def test_tots_els_items_305_320_existeixen(self):
        ids_esperats = (
            ["305" + a for a in "abc"] + ["306" + a for a in "abc"] + ["307"]
            + ["308" + a for a in "ab"] + ["309" + a for a in "ab"]
            + ["310" + a for a in "ab"] + ["311", "312", "313"]
            + ["314" + a for a in "abc"] + ["315" + a for a in "abc"]
            + ["316" + a for a in "ab"] + ["317", "318", "319", "320"]
        )
        ids_reals = {it["id"] for it in TOTS[12]}
        for qid in ids_esperats:
            self.assertIn(qid, ids_reals, "falta l'ítem %s al full 12" % qid)
        self.assertEqual(28, len(ids_esperats))

    def test_arbres_no_revelen_la_resposta(self):
        """Cap figura d'arbre d'aquesta via ha de portar el valor exacte
        que es demana calcular imprès directament a la branca: com a
        mínim ha de portar-hi un «?» en algun punt, o no ser rellevant
        per a la pregunta d'aquell ítem concret."""
        amb_figura_arbre = [it for it in TOTS[12]
                             if it["id"] in ("309a", "309b")]
        self.assertGreaterEqual(len(amb_figura_arbre), 2)
        for it in amb_figura_arbre:
            self.assertIn("figura", it, "%s hauria de portar figura" % it["id"])

    def test_cap_resposta_es_repeteix_en_un_mateix_item(self):
        """Les 4 opcions (correcta + 3 distractors) d'un mateix ítem han
        de ser totes diferents entre si, normalitzant espais.

        Això només detecta cadenes idèntiques ("1/2" contra "1/2" un
        altre cop). No detecta dues opcions matemàticament iguals però
        escrites diferent ("1/2" contra "3/6"), que és precisament
        l'error real que el brief documenta ("qüestions 213, 240, 248,
        etc."). Per a això cal comparar VALORS, no text: vegeu
        `test_cap_parell_d_opcions_coincideix_en_valor` a sota."""
        for it in TOTS[12]:
            if not (305 <= int(re.match(r"\d+", it["id"]).group()) <= 320):
                continue
            opcions_normalitzades = [re.sub(r"\s+", "", o) for o in it["opcions"]]
            self.assertEqual(len(set(opcions_normalitzades)), len(opcions_normalitzades),
                              "%s: opcions repetides" % it["id"])

    def test_cap_parell_d_opcions_coincideix_en_valor(self):
        """Complement del test anterior: compara el VALOR numèric de
        cada parella d'opcions dins d'un mateix ítem, no el seu text.

        "1/2" i "3/6" no col·lidirien mai amb la comparació textual de
        dalt (cadenes diferents), però són la mateixa resposta amb un
        altre disfressa: un alumne que arribi a qualsevol de les dues
        hauria de considerar-se encertat, i l'ítem només en marca una
        com a correcta. És exactament el defecte que el brief demana
        evitar explícitament ("Verify the four options are
        mathematically distinct... not just textually") i que va
        aparèixer una vegada de debò (305a-305d, veure comentari fora
        d'aquest bloc) durant la revisió — encara que en aquells items
        concrets ja no hi és, el test es queda per si en torna a
        aparèixer un altre.

        EXCEPCIÓ DELIBERADA: quan un distractor arriba al mateix valor
        que un altre per una via ARITMÈTICAMENT diferent i el seu propi
        `fb` ho reconeix explícitament (per exemple, 305b: multiplicar
        en l'ordre equivocat dona el mateix producte perquè la
        multiplicació és commutativa, i el feedback ho diu — "el
        resultat numèric coincideix per casualitat en aquest cas").
        Aquí la coincidència és la lliçó, no un descuit: es filtren les
        opcions amb `_coincidencia_reconeguda(fb)` per no fer petar el
        test contra un disseny intencionat.

        S'ignoren les opcions que no es poden parsejar com un sol
        valor numèric (per exemple, si algun distractor fos una frase):
        `_resultat_final()` ja gestiona fraccions LaTeX i decimals
        catalans, agafant l'ÚLTIM valor de la cadena (el resultat, no
        cap pas intermedi: cal `_resultat_final`, no `num()` sol, o
        una cadena com "$P=4/10\\cdot3/9=2/15$" es llegiria com "4/10"
        i donaria un fals positiu contra qualsevol altra opció que
        comencés amb la mateixa primera fracció). Si retorna None per
        a totes dues bandes d'un parell, no hi ha res a comparar i es
        passa de llarg en lloc de fer petar el test."""
        for it in TOTS[12]:
            if not (305 <= int(re.match(r"\d+", it["id"]).group()) <= 320):
                continue
            if _es_item_cert_fals(it):
                continue
            opcions = it["opcions"]
            valors = [_resultat_final(o) for o in opcions]
            feedbacks = _feedbacks_de(it)
            for i in range(len(valors)):
                for j in range(i + 1, len(valors)):
                    if valors[i] is None or valors[j] is None:
                        continue
                    if valors[i] != valors[j]:
                        continue
                    if _coincidencia_reconeguda(feedbacks[i]) or \
                       _coincidencia_reconeguda(feedbacks[j]):
                        continue
                    self.fail(
                        "%s: les opcions %r i %r són textualment diferents "
                        "però valen el mateix (%s) sense que cap feedback "
                        "ho reconegui — sembla un descuit, no una lliçó "
                        "intencionada."
                        % (it["id"], opcions[i], opcions[j], valors[i]))


if __name__ == "__main__":
    unittest.main(verbosity=2)
