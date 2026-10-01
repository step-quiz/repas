# NOTES-fase3-merge.md — Fusió de les 5 vies (uno, sqr, feina, tarr, xtec)

Fase 3 del pla, protocol de 8 passos de `BRIEF-xtec.md` §"Job 3", corregut
sencer i en ordre sobre les cinc vies de la Fase 2. Resultat: `sh
tests/executa.sh` en verd — 170 tests Python, 25 comprovacions JS de codi,
24 de l'analitzador (amb `jsdom` instal·lat). 892 ítems totals.

## Pas 1 — Disjunció

Confirmada entre les 5 vies (20 parelles), cap intersecció de fitxers. El
disseny fet abans de repartir els briefs (Fase 1) ha aguantat exactament
com estava previst també amb xtec inclòs.

## Pas 2 — Aplicar les fonts

Aplicada la font de xtec (`figures/grafics.py`, `c_funcions.py`,
`c_funcions_prod.py`, `test_figures_grafics.py`) sobre el conjunt dels
quatre agents ja fusionat en una sessió anterior. Confirmat amb `diff` que
només s'han tocat els fitxers propis de xtec.

## Pas 3 — Reconstruir des de zero

Compila net. **Cap `AssertionError`**, malgrat l'avís explícit del brief
("expect... at least one option collision"). 892 ítems, 252 etiquetes TAX
carregades sense col·lisió. Determinisme confirmat sobre el conjunt
sencer (dues execucions de `build_tot.py`, `diff -rq data/` idèntic), no
només full a full com en verificacions anteriors.

## Pas 4 — Unió de les suites

170 tests (151 dels quatre agents + 19 de xtec), tots OK. Cap fallada
creuada entre vies, també contra l'avís del brief ("expect some").

## Pas 5 — Les sis comprovacions creuades

**5a, ordre d'ítems.** Vaig haver de refer el parsejador dues vegades: la
primera versió (regex) confonia dues estructures diferents amb la clau
`"items"` dins del mateix fitxer compilat (la llista per bloc i una
llista plana d'objectes complets a l'arrel del JSON). Amb `json.loads`
real: els 11 fulls no tocats per cap de les 5 vies, idèntics; el Full 12,
amb els 67 ids originals intactes i els 28 de tarr afegits al final, cap
reordenació.

**5b, codis RC1.** Confirmat aïlladament amb `node --test`: un codi RC1
real i antic (`RC1DH-8AJA5-...`) encara decodifica exactament els mateixos
7 exercicis amb els mateixos identificadors.

**5c, etiquetes duplicades.** Vaig provocar una col·lisió real i
deliberada (un mòdul temporal amb `SIGNE_FINAL` redefinit amb text
diferent) per confirmar que `tax/__init__.py` avorta amb un missatge
comprensible: diu la clau, els dos mòduls d'origen, els dos textos, i el
perquè. No vaig donar per bo llegir el codi; ho vaig fer petar de veritat.

**5d, dificultat.** 0 ítems sense dificultat als 892. **3 blocs amb un sol
nivell trobats** (Full 6 "encadenats" i "aplicacions_percentatge", Full 11
"variables"), però **cap dels tres és de cap de les 5 vies**: confirmat
comparant contra el baseline original, on ja hi eren exactament igual.
Documentat com a defecte preexistent fora de l'abast d'aquesta ronda, no
corregit aquí.

**5e, recomptes.** 4/4 OK (ja corregits README/HANDOVER en una sessió
anterior).

**5f, determinisme.** Reconfirmat formalment (era part natural del pas 3).

## Pas 6 — Regenerar artefactes derivats

`node tools/fes-exemple.js > exemple-respostes.csv`. **El fitxer va
canviar substancialment** en regenerar-se (codis més curts, mateixa
estructura de camps). Vaig investigar-ho a fons abans de donar-ho per bo,
perquè un canvi de codi podria indicar un problema real d'estabilitat: la
primera línia decodificava a "4 fets" amb el fitxer antic i "0 fets" amb
el nou, per al mateix codi antic llegit contra l'estat actual del banc.
Resolt: aquest primer enviament és el diagnòstic inicial, no encara cap
exercici de full (`resum.fets` compta exercicis de fulls, zero és
correcte aquí). El test que sí protegeix la propietat real —un codi RC1
autèntic mantenint el mateix significat— ja s'havia confirmat al pas 5b i
segueix passant. El fitxer antic reflectia un estat del banc anterior a
xtec i tarr; el regenerat el reflecteix correctament.

## Pas 7 — Passada d'estil

**Un fals positiu propi, trobat i retirat.** Vaig detectar que 14
distractors de tarr contenien, literalment, el text sencer del `TAX`
corresponent a la seva pròpia etiqueta, i ho vaig llegir com una
duplicació que calia escurçar. Abans de tocar-hi res, vaig mirar la
implementació de `DT()` a `lib.py`: **concatena automàticament
`extra + " " + TAX[tag]`** — el tercer paràmetre no és per repetir el
text genèric, és per afegir-hi el detall concret de l'exercici, i el
sistema hi enganxa la part genèrica després. Els 14 casos eren `DT()`
funcionant exactament com dissenyat, no `D()` amb text copiat a mà.
Verificat comptant `d['fb'] == TAX[etq]` (fb idèntic al TAX sencer, sense
cap part específica): **0 casos**. Retirada la troballa.

**La diferència real de registre, mesurada i explicada.** La mitjana de
feedback de tarr (184 car.) és més llarga que les altres tres vies
(111–129), però desglossant per mecanisme: els distractors `D()` normals
de tarr fan mitjana 146 car. (comparable a la resta), i només els 14 que
usen `DT()` pugen la mitjana global (373 car.). La causa: **tarr és
l'única de les tres vies amb catàleg TAX propi** (`tax_geometria.py` i
`tax_semblanca.py` són buits — uno i sqr no n'han construït cap), i els
conceptes que hi ha codificat (independència, condicionada, asimetria de
Bayes) necessiten més paraules que "el signe és incorrecte" per quedar
precisos. No és un excés de verbositat, és infraestructura reutilitzable
que les altres dues vies no van construir.

**Registres d'introducció, diferents però no incoherents.** uno i sqr
comparteixen "Aquest valor..." com a fórmula introductòria dominant (63 i
48 ocurrències, de lluny la més freqüent en tots dos); tarr i xtec no en
tenen cap d'equivalent, van directes al concepte matemàtic ("El
pendent...", "La probabilitat..."). Mirant exemples costat a costat: totes
dues estratègies segueixen el mateix patró de tres parts (diagnosi → per
què → correcció) amb el mateix nivell de directesa. Es tracta de variació
estilística natural, no d'un trencament de coherència; no s'ha reescrit
res per aquest motiu.

**Etiquetes compartides entre vies, escrutinades una per una.** 7
etiquetes (`INVERTIDA`, `PAS_INTERMEDI_PER_RESPOSTA`, `PRODUCTE_PER_SUMA`,
`PROGRESSIO_INVENTADA`, `SUMA_EN_LLOC_RESTA`, `TERME_OBLIDAT_OPERACIO`,
`VEREDICTE_INVERTIT`) es reutilitzen entre 2 o 3 vies. Llegit el text real
de cada ocurrència: cap és un calaix de sastre — cadascuna manté el mateix
patró conceptual abstracte (p. ex. `INVERTIDA` sempre és "elements en la
posició equivocada d'una relació", aplicat a fórmules, notacions
d'escala, o fraccions algebraiques segons la via, però mai un compendi
d'errors sense relació entre si).

## Estat final

```
$ sh tests/executa.sh
  → Python: 170 tests, 0 fallades
  → JavaScript (codi de verificació): 25 comprovacions, 0 fallades
  → JavaScript (analitzador, amb jsdom): 24 comprovacions, 0 fallades
  → "✓ Tot en verd."
```

892 ítems, 12 fulls, 252 etiquetes d'error, determinisme confirmat sobre
el conjunt sencer. README i HANDOVER coherents amb les xifres reals.
`exemple-respostes.csv` regenerat i verificat contra l'estat actual.

## El que segueix pendent, fora de l'abast d'aquesta ronda

- **3 blocs amb un sol nivell de dificultat** (Full 6: "encadenats",
  "aplicacions_percentatge"; Full 11: "variables"), preexistents al
  baseline original, anteriors a qualsevol de les 5 vies de la Fase 2.
- Res més. Els 8 passos del protocol de merge s'han corregut sencers i en
  ordre; cap defecte real introduït per cap de les 5 vies segueix sense
  corregir.
