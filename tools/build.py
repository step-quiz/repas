# -*- coding: utf-8 -*-
"""build.py — Compila el banc de preguntes d'UN full.

    python3 build.py        compila el full 1 (per defecte)
    python3 build.py 2      compila el full 2

    python3 build.py 12     compila el full 12

Sortides (relatives a l'arrel del repositori, no a tools/):
  data/fullN.js           dades del lloc (respostes ofuscades en base64)
  REVISIO-fullN.html      clau de respostes completa, per revisar abans de publicar

Cada full es compila en un procés Python separat a propòsit: lib._BANC és
una llista de mòdul, i si s'importessin els mòduls de dos fulls al mateix
procés els ítems es barrejarien en un sol banc.
"""

import base64
import html
import importlib
import json
import os
import random
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import lib

# ------------------------------------------------------- configuració per full
FULLS = {
    1: {
        "titol": "Full 1 — Nombres enters, fraccions i decimals",
        "subtitol": "Operacions amb enters, divisibilitat, fraccions i pas de "
                    "decimal a fracció generatriu.",
        "moduls": ["c_enters", "c_divisibilitat", "c_fraccions", "c_decimals"],
        "blocs": [
            ("enters", "Nombres enters", "Operacions combinades, regla dels signes i jerarquia."),
            ("divisibilitat", "Divisibilitat", "Descomposició factorial, m.c.d., m.c.m. i problemes."),
            ("fraccions", "Fraccions", "Equivalència, simplificació i operacions combinades."),
            ("decimals", "Decimals", "Tipus de decimal i fracció generatriu."),
        ],
    },
    2: {
        "titol": "Full 2 — Potències",
        "subtitol": "Propietats de les potències, exponent negatiu i potència d'una potència.",
        "moduls": ["c_potencies"],
        "blocs": [
            ("basiques", "Càlcul de potències",
             "Potències de la mateixa base i potència d'un producte o un quocient."),
            ("negatiu", "Exponent negatiu i equacions",
             "Exponents negatius i aïllar l'exponent en una igualtat."),
            ("verifica", "Verifica, corregeix i simplifica",
             "Troba l'error, cert o fals, i expressa-ho com una sola potència."),
            ("combinades", "Combina potències",
             "Potència d'una potència i productes de bases diferents."),
        ],
    },
    3: {
        "titol": "Full 3 — Successions i progressions",
        "subtitol": "Terme general, successions recurrents i progressions "
                    "aritmètiques i geomètriques.",
        "moduls": ["c_successions"],
        "blocs": [
            ("termes", "Termes d'una successió",
             "Terme general, successions recurrents i comprovar si és una progressió aritmètica."),
            ("aritmetiques", "Progressions aritmètiques",
             "Diferència, terme general i termes que falten."),
            ("geometriques", "Progressions geomètriques",
             "Raó, terme general i termes que falten."),
            ("aplicacions", "Aplicacions",
             "Triar el terme general correcte i trobar la posició d'un terme."),
        ],
    },
    4: {
        "titol": "Full 4 — Polinomis",
        "subtitol": "Operacions, divisió i regla de Ruffini, igualtats notables i "
                    "factorització de polinomis.",
        "moduls": ["c_polinomis"],
        "blocs": [
            ("operacions", "Operacions amb polinomis",
             "Suma, resta i producte de polinomis."),
            ("divisio", "Divisió de polinomis i regla de Ruffini",
             "Divisió llarga, Ruffini i taules de Ruffini a completar."),
            ("notables", "Igualtats notables",
             "Completar i reconèixer quadrats de binomis i sumes per diferències."),
            ("factor_comu", "Factor comú i simplificació",
             "Factor comú i combinació amb igualtats notables."),
        ],
    },
    5: {
        "titol": "Full 5 — Equacions i sistemes",
        "subtitol": "Equacions de primer i segon grau, sistemes d'equacions "
                    "lineals i problemes que es resolen plantejant-los.",
        "moduls": ["c_equacions"],
        "blocs": [
            ("primer_grau", "Equacions de primer grau",
             "Equacions amb parèntesis i amb un o diversos denominadors."),
            ("formula_general", "Segon grau: fórmula i discriminant",
             "Fórmula general i nombre de solucions segons el discriminant."),
            ("factoritzacio", "Segon grau: factor comú i factorització",
             "Equacions incompletes, ja factoritzades i que cal reordenar."),
            ("sistemes", "Sistemes d'equacions",
             "Substitució, igualació i reducció, amb denominadors i parèntesis."),
            ("problemes", "Problemes amb equacions i sistemes",
             "Problemes d'edats, nombres, preus i geometria que es plantegen "
             "amb una equació o un sistema."),
        ],
    },
    6: {
        "titol": "Full 6 — Proporcionalitat i percentatges",
        "subtitol": "Proporcionalitat directa i inversa, i problemes de "
                    "percentatges, augments i disminucions encadenats.",
        # c_percentatges va l'últim: contingut nou, i els seus ítems s'han
        # d'afegir al final perquè els codis de verificació ja emesos
        # segueixin llegint-se bé (guarden els estats per posició).
        "moduls": ["c_proporcionalitat", "c_percentatges"],
        "blocs": [
            ("directa_inversa", "Proporcionalitat directa i inversa",
             "Regla de tres directa i inversa amb repartiments i problemes."),
            ("percentatges", "Percentatges",
             "Percentatge d'una quantitat, i trobar el total o la quantitat "
             "original a partir d'un percentatge."),
            ("factor_multiplicador", "El factor multiplicador",
             "Pujar un 15 % és multiplicar per 1,15 i baixar-lo, per 0,85: "
             "una sola operació per a cada variació, i com desfer-la."),
            ("aplicacions_percentatge", "Descomptes, IVA i interessos",
             "Descomptes encadenats, IVA, interès simple i repartiments "
             "proporcionals."),
            ("encadenats", "Augments i disminucions encadenats",
             "Augments i rebaixes percentuals aplicats seguits, i "
             "comparacions \"en proporció\"."),
        ],
    },
    7: {
        "titol": "Full 7 — Teorema de Pitàgores. Àrees",
        "subtitol": "Triangles i teorema de Pitàgores, àrees de triangles, "
                    "quadrilàters i polígons regulars, i problemes "
                    "d'aplicació.",
        "moduls": ["c_geometria"],
        "blocs": [
            ("triangles", "Triangles i teorema de Pitàgores",
             "Angles, desigualtat triangular, triangles rectangles i "
             "teorema de Pitàgores en quadrats, rectangles i polígons."),
            ("arees_pit", "Àrees amb el teorema de Pitàgores",
             "Àrees de triangles i rectangles combinades amb Pitàgores per "
             "trobar un costat, una alçada o una hipotenusa."),
            ("arees_poli", "Àrees de quadrilàters i polígons regulars",
             "Trapezis, hexàgons, octàgons i figures amb superfícies "
             "circulars."),
            ("problemes", "Problemes d'aplicació",
             "Ombres, escales, camps, senyals, edificis i altres problemes "
             "que combinen Pitàgores i àrees."),
        ],
    },
    8: {
        "titol": "Full 8 — Teorema de Tales. Semblança",
        "subtitol": "Teorema de Tales, triangles semblants, escales i "
                    "aplicacions de la semblança a problemes d'altures i "
                    "distàncies inaccessibles.",
        # c_escales va l'últim: contingut nou, ítems al final del banc.
        "moduls": ["c_semblanca", "c_escales"],
        "blocs": [
            ("tales", "Teorema de Tales",
             "Segments proporcionals entre rectes paral·leles i triangles "
             "en posició de Tales."),
            ("semblanca", "Semblança de triangles",
             "Raó de semblança i els tres criteris per determinar si dos "
             "triangles són semblants."),
            ("escales", "Escales",
             "Escala numèrica i problemes de mapes i plànols."),
            ("escales_calcul", "Càlcul amb escales",
             "Del plànol a la realitat i al revés, trobar l'escala, i "
             "escales amb canvi d'unitats."),
            ("semblanca_arees", "Raó de semblança, àrees i volums",
             "Si les longituds es multipliquen per k, les àrees ho fan per "
             "k² i els volums per k³."),
            ("aplicacions", "Aplicacions de la semblança",
             "Ombres, reflexos i alçades o distàncies inaccessibles."),
        ],
    },
    9: {
        "titol": "Full 9 — Cossos geomètrics. Àrea i volum",
        "subtitol": "Àrea total de prismes, piràmides, cilindres, cons i "
                    "l'esfera, i càlcul de volums en problemes aplicats.",
        "moduls": ["c_cossos"],
        "blocs": [
            ("prismes", "Prismes i el cub",
             "Àrea total de prismes rectes i del cub, incloent-hi la "
             "diagonal a partir de l'àrea."),
            ("piramides", "Piràmides i tetraedres",
             "Àrea total de piràmides regulars i tetraedres, amb "
             "Pitàgores per trobar l'apotema quan cal."),
            # DEUTE CONEGUT: els valors aproximats d'aquest bloc i del
            # següent es van calcular amb π = 3,14, i alguns enunciats estan
            # construïts a l'inrevés perquè amb aquest valor surti un número
            # rodó (l'esfera de 803,84 cm² dona radi 8 exacte amb 3,14 i
            # 7,998 amb la π de la calculadora). Mentre no es regeneri el
            # full amb math.pi, el conveni s'ha de dir explícitament: si no,
            # l'alumne que fa servir la calculadora no reconeix la seva
            # resposta a cap opció. Vegeu tools/c_cossos.py.
            ("cossos_rodons", "Cilindres, cons i l'esfera",
             "Àrea total de cossos de revolució i problemes inversos "
             "per trobar radi, altura o generatriu. "
             "En aquest bloc prenem π ≈ 3,14."),
            ("volums_aplicacions", "Volums i problemes aplicats",
             "Volum de prismes, piràmides, cilindres, cons, l'esfera i "
             "el cub, i problemes de la vida real. "
             "En els cossos rodons prenem π ≈ 3,14."),
        ],
    },
    10: {
        "titol": "Full 10 — Funcions",
        "subtitol": "Concepte de funció, domini i recorregut, creixement, "
                    "i funcions lineals i quadràtiques.",
        # c_funcions_prod va l'últim: contingut nou, ítems al final del banc.
        "moduls": ["c_funcions", "c_funcions_prod"],
        "blocs": [
            ("concepte_funcio", "Concepte de funció",
             "Relacions que són o no funcions, càlcul d'imatges, i "
             "domini, recorregut i creixement llegits d'una gràfica."),
            ("funcions_lineals", "Funcions lineals i afins",
             "Pendent i ordenada a l'origen, creixement sense "
             "representar, i equació de la recta a partir de dos punts."),
            ("rectes_produccio", "Construir rectes",
             "De les dades a l'equació: pendent i punt, dos punts, "
             "paral·leles i perpendiculars, i punts de tall."),
            ("parabola_produccio", "Construir paràboles i problemes",
             "Vèrtex, talls amb els eixos, l'equació a partir del vèrtex, "
             "i problemes que es resolen muntant la funció."),
            ("funcions_quadratiques", "Funcions quadràtiques",
             "Obertura i amplada de la paràbola, vèrtex, talls amb els "
             "eixos i eix de simetria."),
        ],
    },
    11: {
        "titol": "Full 11 — Estadística",
        "subtitol": "Variables estadístiques, taules de freqüències i "
                    "representacions gràfiques. Mesures de centralització "
                    "i de dispersió.",
        # c_centralitzacio va SEMPRE l'últim: els seus ítems s'afegeixen al
        # final del banc, i això és el que fa que els codis de verificació ja
        # emesos segueixin llegint-se bé (les posicions anteriors no es mouen).
        "moduls": ["c_estadistica", "c_centralitzacio"],
        "blocs": [
            ("variables", "Variables estadístiques",
             "Tipus de variable (qualitativa/quantitativa, discreta/"
             "contínua) i mostra o població."),
            ("frequencies", "Taules de freqüències",
             "Recompte de dades i freqüències absolutes, acumulades, "
             "relatives i percentatges."),
            ("grafics", "Gràfics estadístics",
             "Diagrames de barres, histogrames, polígons de freqüències "
             "i gràfics de sectors."),
            ("centralitzacio", "Mitjana, mediana i moda",
             "Les tres mesures de centralització, des d'una llista i des "
             "d'una taula de freqüències, i quina respon cada pregunta."),
            ("dispersio", "Recorregut i desviació típica",
             "Com d'esteses estan les dades: recorregut, variància, "
             "desviació típica i coeficient de variació."),
        ],
    },
    12: {
        "titol": "Full 12 — Combinatòria i probabilitat",
        "subtitol": "Espais mostrals, diagrames d'arbre, freqüència "
                    "relativa i regla de Laplace.",
        "moduls": ["c_probabilitat"],
        "blocs": [
            ("espais_mostrals", "Espais mostrals i esdeveniments",
             "Espai mostral d'un experiment aleatori, esdeveniments "
             "elementals i impossibles, i comparació de probabilitats."),
            ("combinatoria", "Combinatòria: principi multiplicatiu",
             "Diagrames d'arbre, mètode del producte, i variacions "
             "sense repetició."),
            ("laplace", "Regla de Laplace i freqüència relativa",
             "Probabilitat d'un esdeveniment, freqüència relativa i "
             "llei dels grans nombres."),
            ("esdeveniments", "Esdeveniments compostos",
             "Esdeveniments compatibles, incompatibles i contraris, "
             "unió i intersecció, i probabilitat condicionada senzilla."),
        ],
    },
}

def _full_demanat(args):
    """El número de full, validat. `build.py 13` feia un KeyError cru i
    `build.py foo` un ValueError: cap dels dos deia què s'havia de fer."""
    if not args:
        return 1
    try:
        n = int(args[0])
    except ValueError:
        sys.exit("✗ «%s» no és un número de full. Ús: python3 build.py [1-%d]"
                 % (args[0], max(FULLS)))
    if n not in FULLS:
        sys.exit("✗ no hi ha cap full %d. Els que hi ha: %s"
                 % (n, ", ".join(str(k) for k in sorted(FULLS))))
    return n


FULL_N = _full_demanat(sys.argv[1:])
CFG = FULLS[FULL_N]
for _m in CFG["moduls"]:
    importlib.import_module(_m)

ARREL = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
BANC = lib.banc()
def _fusiona_blocs(central, registrats):
    """Els blocs de FULLS[N] més els que hagin declarat els mòduls.

    Es fa DESPRÉS d'importar-los, perquè fins llavors no s'han registrat. Un
    bloc registrat amb `despres="x"` s'insereix just darrere del bloc `x`;
    sense `despres`, va al final. Si el bloc de referència no existeix, s'atura:
    val més un build trencat que un full amb els blocs desordenats sense que
    ningú se n'adoni.
    """
    out = list(central)
    for despres, llista in registrats:
        if despres is None:
            out.extend(llista)
            continue
        ids = [b[0] for b in out]
        assert despres in ids, (
            "un mòdul vol col·locar blocs darrere de %r, que no existeix en "
            "aquest full. Blocs disponibles: %s" % (despres, ", ".join(ids)))
        k = ids.index(despres) + 1
        out[k:k] = llista
    vist = set()
    for b in out:
        assert b[0] not in vist, "bloc declarat dues vegades: %s" % b[0]
        vist.add(b[0])
    return out


BLOCS = _fusiona_blocs(CFG["blocs"], lib.blocs_registrats())

# ------------------------------------------------------ math vs text mixt
_NETEJA = re.compile(r"\\(dfrac|cdot|overline|operatorname|quad|mathbf|ne|rightarrow)")
_NOMES_MAT = re.compile(r"^[-+0-9\s{}^,.:()]*$")
TRIVIAL, DIRECTA = lib.TRIVIAL, lib.DIRECTA
ENCADENADA, COMPLETA = lib.ENCADENADA, lib.COMPLETA


def mathify(s):
    """Embolcalla amb $...$ el que és matemàtica pura; deixa igual el text mixt."""
    if "$" in s:
        return s
    if _NOMES_MAT.match(_NETEJA.sub("", s)):
        return "$%s$" % s
    return s


def b64(obj):
    return base64.b64encode(
        json.dumps(obj, ensure_ascii=False).encode("utf-8")).decode("ascii")


# ------------------------------------------------------------ validacions
def valida_global():
    ids = [it["id"] for it in BANC]
    assert len(ids) == len(set(ids)), "hi ha identificadors repetits"
    for it in BANC:
        assert it["bloc"] in dict((b[0], b[1]) for b in BLOCS), it["id"]
        for camp in ("enunciat", "correcta"):
            assert it[camp].strip(), "%s: %s buit" % (it["id"], camp)
    sospitosos = []
    for it in BANC:
        for o in [it["correcta"]] + [d["tex"] for d in it["distractors"]]:
            m = mathify(o)
            if "\\" in m and "$" not in m:
                sospitosos.append((it["id"], o))
    assert not sospitosos, "opcions amb LaTeX sense delimitar: %s" % sospitosos[:5]
    print("✓ %d ítems, %d identificadors únics" % (len(BANC), len(set(ids))))


# ------------------------------------------------------------ dades del web
def _hereta_encapcalaments():
    """Cada apartat d'un exercici ha de portar la instrucció comuna.

    L'`ex_text` ("Calcula el perímetre de les figures següents.", "Determina
    si els triangles són rectangles…") normalment només s'escriu a
    l'apartat `a`, perquè en un full imprès surt un sol cop damunt del grup.
    Però l'aplicació presenta els ítems D'UN EN UN ("90 de 99"), i llavors
    l'apartat `b` apareix sense cap instrucció: a 121b l'alumne només llegia
    "Triangle de costats 6 cm, 8 cm i 12 cm." i a 126b, "Hexàgon còncau…",
    sense que res li digués què n'havia de fer. Afectava 21 ítems.

    Es propaga la primera instrucció no buida del grup (mateix full i mateix
    número d'exercici) als apartats que no en tenen. Els grups on cap
    apartat no en té es deixen com estan: no hi ha res a heretar.
    """
    per_ex = {}
    for it in BANC:
        per_ex.setdefault(it["ex"], []).append(it)
    heretats = 0
    for items in per_ex.values():
        if len(items) < 2:
            continue
        text = next((i["ex_text"] for i in items
                     if (i["ex_text"] or "").strip()), "")
        if not text:
            continue
        for i in items:
            if not (i["ex_text"] or "").strip():
                i["ex_text"] = text
                heretats += 1
    return heretats


def _gradua(banc):
    """Ordena els ítems per presentar-los de més senzill a més complet.

    ── PER QUÈ ─────────────────────────────────────────────────────────────

    Fins aquí l'ordre de presentació era l'ordre en què s'havien escrit els
    Q(), que és l'ordre de numeració del material font: 55 blocs de 56 anaven
    estrictament per número d'exercici creixent. Però el llibre no gradua res
    dins d'un apartat, només enumera, i el resultat era que l'alumne es
    trobava de cara el primer exercici que el llibre havia decidit posar
    primer, que sovint és dels més durs:

      · Full 5, primer exercici de tot el full: 6(x+11) = 40 + 6(x+2),
        que és una equació SENSE SOLUCIÓ. El primer x/5 = 3 era el setè.
      · Full 4, primer exercici: sumar quatre polinomis de fins a grau 5.
      · Full 12, primer de combinatòria: un nivell 3.
      · Full 2, «Verifica i corregeix»: catorze nivells 3 abans del primer
        nivell 1.

    L'itinerari del tutor ja feia això bé (`ordenaPerDificultat` a
    js/itinerari-dades.js ordena per (dif, llargada de l'enunciat)). El que
    no ho feia era el camí normal, que és per on passa la majoria.

    ── QUÈ FA, EXACTAMENT ──────────────────────────────────────────────────

    Dues coses, i cap més:

    1. Agrupa els ítems per bloc, en l'ordre en què el full declara els
       blocs. Abans no era així a quatre fulls: al Full 8 el bloc
       «Aplicacions de la semblança» (tot nivell 3) queia entre «Escales» i
       «Càlcul amb escales», de manera que qui anava fent «Següent exercici»
       topava amb el bloc més dur a l'exercici 24 i després tornava enrere.

    2. Dins de cada bloc, ordena per nivell de dificultat amb una ordenació
       ESTABLE: dins d'un mateix nivell l'ordre del llibre es manté intacte.
       Això és deliberat i és el mínim que arregla el problema: no vol
       barrejar exercicis que es construeixen l'un damunt de l'altre (les
       taules de Ruffini, les sèries d'apartats encadenats), només que el
       bloc obri per on es pot obrir.

    Els apartats d'un mateix exercici es mouen SEMPRE junts i en el seu
    ordre. Es pot fer perquè cap exercici del banc no té apartats de
    dificultat diferent (són 309 exercicis i 0 casos), ja que `dificultats()`
    es declara per exercici; i cal fer-ho perquè un apartat que digui «16 cm»
    no vol dir res separat dels seus germans.

    ── QUÈ NO TOCA ─────────────────────────────────────────────────────────

    Els codis de verificació ja emesos. L'ordre que el codi fa servir viu a
    `tools/codi-ordre.json`, és append-only i està indexat per id; aquesta
    funció només toca l'ordre de PRESENTACIÓ. Que les dues coses fossin
    independents era precisament per a què es va separar (vegeu
    build_codi.py), i aquest és el primer canvi que se n'aprofita.
    """
    ordre_bloc = {b[0]: i for i, b in enumerate(BLOCS)}

    # Els apartats d'un exercici viatgen junts. La clau inclou el bloc perquè
    # hi ha un exercici del banc repartit en dos blocs.
    grups, ordre_grups = {}, []
    for pos, it in enumerate(banc):
        k = (it["bloc"], it["ex"])
        if k not in grups:
            grups[k] = {"pos": pos, "dif": it["dif"], "items": []}
            ordre_grups.append(k)
        grups[k]["items"].append(it)
        # Un grup pren el nivell del seu apartat més senzill. Avui no passa
        # mai (cap exercici té apartats de nivells diferents), però si algun
        # dia en posa un amb `dif=` al Q(), el criteri ha d'estar escrit.
        grups[k]["dif"] = min(grups[k]["dif"], it["dif"])

    ordenats = sorted(
        ordre_grups,
        key=lambda k: (ordre_bloc.get(k[0], len(ordre_bloc)),
                       grups[k]["dif"],
                       grups[k]["pos"]))

    out = []
    for k in ordenats:
        out.extend(grups[k]["items"])

    moguts = sum(1 for a, b in zip(banc, out) if a["id"] != b["id"])
    return out, moguts


def _informa_graduacio(banc):
    """Diu per quin graó obre cada bloc, i separa TRES casos que demanen
    coses diferents. Després de `_gradua()` un bloc sempre obre pel seu
    nivell més baix disponible, de manera que l'única pregunta que queda és
    quin és aquest nivell:

      · min == TRIVIAL. El bloc té graó d'entrada. Res a dir.

      · min == DIRECTA. No té trivial encara, però obre per on obria tot el
        projecte abans que el trivial existís. Es compta, no s'avisa: el
        trivial s'està introduint bloc a bloc, i avisar dels 46 blocs que
        encara no en tenen convertiria l'avís en soroll i ningú no llegiria
        els que sí que importen. Això va passar la primera vegada que es va
        desplaçar l'escala.

      · min >= ENCADENADA amb més d'un nivell. Aquí sí. El bloc té escala
        però el seu graó més baix ja demana encadenar passos: obre pel mig
        d'una cosa que té, i ordenar no ho pot arreglar perquè el contingut
        no hi és. Aquests són els que necessiten exercicis nous.

    I a part, els blocs enterament de COMPLETA, que no estan mal graduats
    sinó que són blocs de problemes; els marca `compila()` com a avançats i
    no surten per aquí.
    """
    avancats, mal_graduats, sense_trivial = [], [], []
    for b, titol, _d in BLOCS:
        difs = [it["dif"] for it in banc if it["bloc"] == b]
        if not difs:
            continue
        m = min(difs)
        if m == TRIVIAL:
            continue
        if set(difs) == {COMPLETA}:
            avancats.append((titol, len(difs), m))
        elif m >= ENCADENADA:
            mal_graduats.append((titol, len(difs), m))
        else:
            sense_trivial.append((titol, len(difs), m))
    if mal_graduats:
        print("  ⚠ %d bloc(s) OBREN PEL MIG: tenen escala però el seu graó "
              "més baix ja encadena passos" % len(mal_graduats))
        for titol, k, m in mal_graduats:
            print("      · %s (%d ítems, el més fàcil és nivell %d %s)"
                  % (titol, k, m, lib.NOM_NIVELL[m]))
    if sense_trivial:
        print("  · %d bloc(s) encara sense exercici trivial (obren a directa, "
              "com abans que el nivell 1 existís)" % len(sense_trivial))
    return mal_graduats, avancats


def compila():
    heretats = _hereta_encapcalaments()
    if heretats:
        print("  · %d apartats hereten la instrucció del seu exercici"
              % heretats)
    ordenat, moguts = _gradua(BANC)
    if moguts:
        print("  · graduació: %d ítems canvien de posició perquè cada bloc "
              "obri pel seu nivell més senzill" % moguts)
    # S'aplica al BANC mateix, no a una còpia: així el `REVISIO-fullN.html`
    # surt en el mateix ordre que veu l'alumne. Revisar la clau de respostes
    # en un ordre i publicar-ne un altre seria demanar que se'ns escapi algun
    # salt de graduació.
    BANC[:] = ordenat
    _informa_graduacio(BANC)
    items = []
    for it in BANC:
        opcions = [mathify(it["correcta"])] + [mathify(d["tex"]) for d in it["distractors"]]
        diag = [""] + [d["fb"] for d in it["distractors"]]
        etiq = [""] + [d["err"] for d in it["distractors"]]
        ordre = list(range(4))
        random.Random("repas-eso::" + it["id"]).shuffle(ordre)
        item = {
            "id": it["id"],
            "ex": it["ex"],
            "ap": it["ap"],
            "bloc": it["bloc"],
            "tipus": it["tipus"],
            "dif": it["dif"],
            "encapcalament": it["ex_text"],
            "enunciat": it["enunciat"],
            "opcions": [opcions[i] for i in ordre],
            "pistes": it["pistes"],
            "nota": it["nota"],
            "clau": b64({
                "ok": ordre.index(0),
                "diag": [diag[i] for i in ordre],
                "err": [etiq[i] for i in ordre],
                "res": it["resolucio"],
            }),
        }
        # La figura només hi va si n'hi ha. Guardar-hi `"figura": ""` a cada
        # ítem faria créixer els dotze fitxers de dades per no dir res, i
        # deixaria de ser cert que un full sense figures compila igual que
        # abans d'existir aquest camp.
        if it["figura"]:
            item["figura"] = it["figura"]
        items.append(item)

    info_dif = {it["id"]: it["dif"] for it in BANC}

    blocs = [{"id": b, "titol": t, "descripcio": d,
              "items": [i["id"] for i in items if i["bloc"] == b]} for b, t, d in BLOCS]
    # ── Blocs de nivell avançat ──────────────────────────────────────────
    # Un bloc en què TOTS els exercicis són del nivell més alt no és un bloc
    # mal graduat: és un bloc de problemes, i està bé que ho sigui. El que no
    # està bé és que l'alumne hi entri sense saber-ho i es pensi que la resta
    # del full serà igual.
    #
    # La marca es DERIVA del contingut, no es declara a mà: un bloc deixa de
    # ser avançat tot sol el dia que se li afegeixi un exercici més senzill,
    # i no queda una etiqueta vella dient el contrari.
    for b in blocs:
        difs = {info_dif[i] for i in b["items"]} if b["items"] else set()
        if difs == {COMPLETA}:
            b["avancat"] = True
    avancats = [b["titol"] for b in blocs if b.get("avancat")]
    if avancats:
        print("  · nivell avançat (tot el bloc al nivell més alt): %s"
              % ", ".join(avancats))
    # Text genèric de cada etiqueta d'error que apareix en aquest full. El
    # panell "els errors que repeteixes" agrega per etiqueta, i el que hi toca
    # és la descripció del malentès, no el diagnòstic d'un exercici concret
    # (que parla de números que l'alumne potser no recorda). Només s'hi posen
    # les etiquetes usades al full: no cal enviar el catàleg sencer.
    usades = sorted({d["err"] for it in BANC for d in it["distractors"]})
    errors_tex = {e: mathify(lib.TAX[e]) for e in usades if e in lib.TAX}

    dades = {
        "full": FULL_N,
        "titol": CFG["titol"],
        "subtitol": CFG["subtitol"],
        "blocs": blocs,
        "errors": errors_tex,
        "items": items,
    }
    os.makedirs(os.path.join(ARREL, "data"), exist_ok=True)
    ruta = os.path.join(ARREL, "data", "full%d.js" % FULL_N)
    with open(ruta, "w", encoding="utf-8") as f:
        f.write("/* Generat per tools/build.py — no editeu aquest fitxer a mà. */\n")
        f.write("window.FULL = ")  # global genèric: cada pàgina en carrega un full a la vegada
        json.dump(dades, f, ensure_ascii=False, indent=1)
        f.write(";\n")
    print("✓ %s (%.0f kB)" % (ruta, os.path.getsize(ruta) / 1024))
    return dades


# ------------------------------------------------------- full de revisió
CSS_REV = """
body{font:15px/1.55 -apple-system,Segoe UI,Roboto,sans-serif;color:#16202E;
 max-width:60rem;margin:0 auto;padding:2rem 1.2rem 6rem}
h1{font-size:1.5rem;margin:0 0 .2rem} h2{font-size:1.05rem;margin:2.2rem 0 .6rem;
 border-bottom:2px solid #16202E;padding-bottom:.25rem}
.meta{color:#5A6B80;margin:0 0 1.5rem}
.it{border:1px solid #D8DFE8;border-radius:8px;padding:.8rem 1rem;margin:.7rem 0;
 page-break-inside:avoid}
.cap{display:flex;gap:.6rem;align-items:baseline;margin-bottom:.35rem}
.cod{font:700 13px ui-monospace,monospace;background:#16202E;color:#fff;
 padding:.1rem .4rem;border-radius:4px}
.tip{font-size:11px;color:#5A6B80;text-transform:uppercase;letter-spacing:.06em}
.enun{margin:.2rem 0 .5rem}
ol.op{margin:.3rem 0;padding-left:1.4rem}
ol.op li{margin:.15rem 0}
.ok{background:#E4F3EC;font-weight:600;padding:.05rem .25rem;border-radius:3px}
.err{font:600 11px ui-monospace,monospace;color:#8C2F28;background:#FBEDEC;
 padding:.05rem .3rem;border-radius:3px;margin-right:.3rem}
.fb{color:#43506180}
.sec{color:#5A6B80;font-size:13px;margin:.4rem 0 0}
.res li{margin:.1rem 0}
.nota{background:#FFF6E5;border-left:3px solid #B06B00;padding:.4rem .6rem;
 margin:.5rem 0 0;font-size:13.5px}
.avis{background:#FBEDEC;border-left:3px solid #C4362F;padding:.8rem 1rem;
 margin:1rem 0 2rem;border-radius:0 6px 6px 0}
table{border-collapse:collapse;font-size:13px;width:100%}
td,th{border:1px solid #D8DFE8;padding:.3rem .5rem;text-align:left}
@media print{.it{border-color:#bbb}}
.fig{margin:.6rem 0;text-align:center}
.fig svg{max-width:18rem;height:auto;color:#243447;overflow:visible}
.fig .fig-etq{font:600 12px ui-monospace,Menlo,Consolas,monospace;fill:#243447}
.fig .fig-etq.petita{font-size:10.5px;fill:#6B7480}
:root{--fig-plena:#E9F0F6;--fig-marca:#B3453C}
"""

# KaTeX es serveix des de `vendor/katex/`, no des d'un CDN. Motiu: a molts
# centres el filtre de contingut bloqueja jsdelivr, i la degradació "elegant"
# a LaTeX en cru ($\\dfrac{2}{3}$) no és llegible per a un alumne d'ESO.
# Amb la còpia local el lloc també funciona sense connexió, i cap IP d'alumne
# viatja a un tercer. Per actualitzar la versió: `npm pack katex@X` i copiar
# katex.min.{js,css}, contrib/auto-render.min.js i fonts/*.woff2 a vendor/katex/.
KATEX = """
<link rel="stylesheet" href="vendor/katex/katex.min.css">
<script defer src="vendor/katex/katex.min.js"></script>
<script defer src="vendor/katex/contrib/auto-render.min.js"
 onload="renderMathInElement(document.body,{delimiters:[{left:'$',right:'$',display:false}],
 throwOnError:false})"></script>
"""


def revisio(dades):
    errors = {}
    for it in BANC:
        for d in it["distractors"]:
            errors.setdefault(d["err"], []).append(it["id"])

    p = ['<!DOCTYPE html><html lang="ca"><meta charset="utf-8">',
         '<meta name="viewport" content="width=device-width,initial-scale=1">',
         '<title>Revisió — Full %d</title>' % FULL_N, KATEX, '<style>%s</style>' % CSS_REV,
         '<h1>Clau de respostes — Full %d</h1>' % FULL_N,
         '<p class="meta">%d preguntes · generades i verificades amb Python/SymPy · '
         'pendents de revisió humana.</p>' % len(BANC),
         '<div class="avis"><strong>Com revisar-ho.</strong> Cada resposta correcta '
         's\'ha calculat amb aritmètica exacta de fraccions, no s\'ha escrit a mà, '
         'i cap distractor coincideix amb la resposta correcta (comprovat al build). '
         'El que convé revisar és: (1) que la interpretació de l\'enunciat sigui la '
         'que volíeu, sobretot als ítems marcats amb nota; (2) que els distractors '
         'siguin errors que realment cometen els vostres alumnes; (3) el to i la '
         'claredat del feedback i de les pistes.</div>']

    for b, titol, desc in BLOCS:
        items = [it for it in BANC if it["bloc"] == b]
        # Els blocs enterament del nivell més alt es marquen també aquí: el
        # professorat ha de revisar-los sabent que l'alumne els veurà
        # etiquetats com a avançats a l'app.
        avancat = (' <span class="err">nivell avançat</span>'
                   if items and {it["dif"] for it in items} == {COMPLETA} else '')
        p.append('<h2>%s%s <span class="tip">· %d preguntes</span></h2>'
                 % (titol, avancat, len(items)))
        ex_vist = None
        for it in items:
            if it["ex"] != ex_vist:
                ex_vist = it["ex"]
                p.append('<p class="sec"><strong>Exercici %d.</strong> %s</p>'
                         % (it["ex"], html.escape(it["ex_text"])))
            p.append('<div class="it"><div class="cap"><span class="cod">%s</span>'
                     '<span class="tip">tipus %s · dificultat %d (%s)</span></div>'
                     % (it["id"], it["tipus"], it["dif"],
                        lib.NOM_NIVELL[it["dif"]]))
            p.append('<div class="enun">%s</div>' % it["enunciat"])
            if it["figura"]:
                p.append('<div class="fig">%s</div>' % it["figura"])
            p.append('<ol class="op"><li><span class="ok">%s</span> — resposta correcta</li>'
                     % mathify(it["correcta"]))
            for d in it["distractors"]:
                p.append('<li>%s<br><span class="err">%s</span><span class="fb">%s</span></li>'
                         % (mathify(d["tex"]), d["err"], d["fb"]))
            p.append('</ol>')
            p.append('<p class="sec"><strong>Pistes:</strong></p><ol class="res">%s</ol>'
                     % "".join("<li>%s</li>" % x for x in it["pistes"]))
            p.append('<p class="sec"><strong>Resolució:</strong></p><ol class="res">%s</ol>'
                     % "".join("<li>%s</li>" % x for x in it["resolucio"]))
            if it["nota"]:
                p.append('<p class="nota"><strong>Nota:</strong> %s</p>' % it["nota"])
            if it["nota_interna"]:
                p.append('<p class="nota"><strong>Nota interna '
                         '(no es publica):</strong> %s</p>' % it["nota_interna"])
            p.append('</div>')

    p.append('<h2>Graduació per bloc</h2><table><tr><th>Bloc</th>'
             + "".join('<th>%d %s</th>' % (n, lib.NOM_NIVELL[n]) for n in lib.NIVELLS)
             + '<th>Obre a</th></tr>')
    for b, t, _d in BLOCS:
        dels = [it for it in BANC if it["bloc"] == b]
        if not dels:
            continue
        c = [sum(1 for it in dels if it["dif"] == n) for n in lib.NIVELLS]
        nivells_presents = [n for n in lib.NIVELLS if c[n - 1]]
        # Dos avisos diferents, perquè demanen coses oposades: un bloc
        # enterament del nivell més alt és un bloc de problemes i està bé
        # que ho sigui (l'app el marca com a avançat); un bloc amb escala
        # però que no obre pel primer graó és el que li falta contingut.
        if nivells_presents == [lib.COMPLETA]:
            marca = ' <span class="tip">nivell avançat</span>'
            obre = 'avançat a posta'
        elif nivells_presents[0] != lib.TRIVIAL:
            marca = ' <span class="err">obre pel mig</span>'
            obre = '<span class="err">%s</span>' % lib.NOM_NIVELL[nivells_presents[0]]
        else:
            marca = ''
            obre = lib.NOM_NIVELL[nivells_presents[0]]
        p.append('<tr><td>%s%s</td>%s<td>%s</td></tr>'
                 % (html.escape(t), marca,
                    "".join('<td>%d</td>' % x for x in c), obre))
    p.append('</table>')

    p.append('<h2>Catàleg d\'errors utilitzats</h2><table><tr><th>Etiqueta</th>'
             '<th>Vegades</th><th>Preguntes</th></tr>')
    for e, ids in sorted(errors.items(), key=lambda x: -len(x[1])):
        p.append('<tr><td><code>%s</code></td><td>%d</td><td>%s</td></tr>'
                 % (e, len(ids), ", ".join(ids[:14]) + ("…" if len(ids) > 14 else "")))
    p.append('</table></html>')

    ruta = os.path.join(ARREL, "REVISIO-full%d.html" % FULL_N)
    open(ruta, "w", encoding="utf-8").write("\n".join(p))
    print("✓ %s (%d errors diferents al catàleg)" % (ruta, len(errors)))


if __name__ == "__main__":
    valida_global()
    revisio(compila())
