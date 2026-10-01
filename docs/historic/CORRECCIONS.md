# Correccions — punts 1 a 7 i 9 de l'auditoria

Aquest paquet conté **només** els fitxers nous o modificats, amb la mateixa
estructura de directoris que `repas-main/`. Copia'ls a sobre del projecte
original i queda aplicat.

Els fitxers de `data/` i els `REVISIO-*.html` **ja estan regenerats**: no cal
recompilar res. Si vols fer-ho igualment, `cd tools && for n in $(seq 1 12);
do python3 build.py $n; done` reprodueix exactament aquests fitxers (la
compilació segueix sent determinista).

`CANVIS.patch` és el diff unificat només dels fitxers font, per si prefereixes
revisar els canvis abans d'aplicar-los:

    patch -p1 < CANVIS.patch

Els punts 5 (dificultat explícita), 7 (catàleg d'errors) i 9 (neteja) toquen
els dotze fulls, i per això aquesta entrega inclou tot el `data/` i tots els
`REVISIO-*.html`.

Queda pendent només el punt 8 (contingut nou: mesures de centralització i
dispersió al Full 11, i més exercicis als Fulls 6 i 8).

## Què s'ha tocat

| Fitxer | Punt | Canvi |
|---|---|---|
| `tools/lib.py` | 4, 5, 7 | Escala de dificultat, `dificultats()` i validació; 58 etiquetes noves al `TAX` |
| `tools/build.py` | 5, 7 | Camp `dif` i mapa `errors` al JSON; dificultat i graduació al `REVISIO` |
| `tools/c_*.py` (els 15) | 5 | Taula `dificultats({...})` de cada full |
| `tools/c_geometria.py` | 7 | 41 distractors reetiquetats |
| `tools/c_cossos.py` | 1, 5, 7 | Enunciats de 170a–e; 24 distractors reetiquetats |
| `tools/c_equacions.py` | 3, 5, 7 | Distractors de 79e i 86c; 13 reetiquetats i el text de 76a–f reescrit |
| `tools/c_successions.py` | 2, 3, 5, 7 | Distractors de 50b, 52c i 54c; 8 reetiquetats |
| `tools/c_proporcionalitat.py` | 5, 7 | 9 distractors reetiquetats |
| `tools/c_estadistica.py` | 5, 7 | 6 distractors reetiquetats |
| `tools/c_semblanca.py` | 5, 7 | 5 distractors reetiquetats |
| `tools/c_fraccions.py` | 5, 7 | 1 distractor reetiquetat |
| `tools/c_polinomis.py` | 3, 5 | Distractor de 74g |
| `tools/c_probabilitat.py` | 3, 5 | Distractor i pistes de 257a |
| `tools/c_funcions.py` | 4, 5 | Reescriptura de 200b |
| `js/itinerari-dades.js` | 5 | L'itinerari ordena i tria per dificultat |
| `js/itinerari.js` | 6 | Estat buit desdoblat en dos missatges |
| `js/hub.js` | 7 | El panell d'errors fa servir el text del catàleg |
| `tools/c_geometria.py` | 7, 9 | Unitats a les opcions de 124b, 127a–b, 128a i 129; notes de 144–151; «cercle» a 144b |
| `tools/c_potencies.py`, `c_enters.py`, `c_divisibilitat.py`, `c_decimals.py`, `c_fraccions.py` | 5, 7, 9 | Taula de dificultat; notes de 30e/30f; nota de signes condicionada |
| `README.md` | 4, 5, 7 | Taula d'ítems amb nota; graduació i catàleg d'errors abans de publicar |
| `AUTHORING-GUIDE.md` | 5, 7 | Secció 4bis (graduar un full) i 4.4 (etiquetar bé) |
| `HANDOVER.md` | 5, 7 | Decisions 4, «longitud com a proxy» i el paper del `TAX` |

---

## Punt 1 — Ítems 170a–e sense dades

**Abans.** L'enunciat era literalment igual que l'encapçalament («Calcula
l'àrea total d'aquests prismes rectes.»). Les mesures només sortien a les
pistes i a la resolució: els cinc apartats eren irresolubles.

**Ara.** Cada apartat descriu el seu prisma a l'enunciat, seguint el mateix
criteri que ja feia servir l'exercici 195 del mateix full. La capçalera passa
a singular perquè la descripció hi encaixi:

    170a  … un ortoedre (prisma recte de base rectangular) d'arestes 7 cm, 2 cm i 4 cm.
    170b  … un prisma de base triangular equilàtera de 5 cm de costat i 9 cm d'altura.
    170c  … un prisma de base hexagonal regular de 8 cm de costat i 5,2 cm d'apotema,
            amb 6 cm d'altura.
    170d  … un prisma de base pentagonal regular de 5 cm de costat i 3,44 cm d'apotema,
            amb 12 cm d'altura.
    170e  … un prisma de 5 cm d'altura amb la base en forma de triangle rectangle
            de catets 6 cm i 8 cm.

Les respostes, els distractors i les resolucions no s'han tocat: ja eren
correctes, només els faltava l'enunciat. Efecte lateral: com que l'itinerari
ordena per longitud d'enunciat, aquests cinc ítems deixen d'encapçalar la cua
del bloc `prismes`.

## Punt 2 — La contradicció 50b ↔ 52c

Els dos ítems marcaven com a error la convenció que l'altre feia servir com a
resposta correcta. El criteri adoptat és el que ja deia la nota del 52c:
**cada exercici demana la forma que ell practica**, i cap dels dos ofereix
l'altra forma com a opció.

- **50b** (clau `aₙ=2n`): el distractor `aₙ=2+(n−1)·2` — que és la mateixa
  funció — se substitueix per `aₙ=2n−2`, un desplaçament d'índex real
  (`DESPLACAMENT_INDEX`), amb feedback que ensenya a comprovar la fórmula amb
  `n=1`.
- **52c** (clau `aₙ=½+(n−1)·½`): el distractor `aₙ=½·n` — també la mateixa
  funció — se substitueix per `aₙ=½+n·½` (`DESPLACAMENT_INDEX`).

La nota del 52c es manté i es reescriu: ara avisa l'alumne que si simplifica
obtindrà `n/2` i **no el trobarà entre les opcions**, en lloc de justificar
per què se li marcava malament.

## Punt 3 — Distractors numèricament iguals a la clau

Cinc casos en què la resposta marcada com a errònia valia exactament el
mateix que la correcta. En tres d'ells, el propi feedback de l'ítem admetia
que el distractor era vàlid.

| Ítem | Distractor retirat | Substitut | Etiqueta nova |
|---|---|---|---|
| 3/54c | `r=1, aₙ=1` (la nota deia «igualment vàlida») | `d=0, aₙ=n` | `PROGRESSIO_INVENTADA` |
| 4/74g | `−(x−7)(x+7)` (el feedback deia «forma equivalent correcta») | `−(7−x)(7+x)` | `FACTOR_COMU_SIGNE` |
| 5/79e | `x=1281/159` (= `427/53`) | `x=405/53` | `SIGNE_TERME_INDEPENDENT` |
| 5/86c | `x=50/38` (= `25/19`) | `y=−126/19` | `FACTOR_OBLIDAT` |
| 12/257a | `3/6, 2/6, 1/6` (= la clau) | `3/5, 2/5, 1/5` | `CASOS_POSSIBLES_MAL_COMPTATS` |

Tots els substituts corresponen a un error concret i versemblant, no a un
número a l'atzar: a 86c és no acabar d'aïllar la `y` (de `7y=−126/19` falta
dividir entre 7), i a 257a és comptar 5 boles en comptes de 6. A 54c la nota
es manté, però ara només explica el cas límit; ja no ha d'excusar una opció
mal puntuada. A 257a s'han retocat també les pistes, que parlaven de
simplificar quan ja no hi ha cap distractor de simplificació.

**No s'ha tocat 1/20a**, que sí que té distractors amb el mateix valor
(`25/10`, `15/6` contra `5/2`): allà l'enunciat demana explícitament la
*fracció irreductible*, o sigui que la forma sense simplificar és una
resposta genuïnament incorrecta a la pregunta que es fa.

## Punt 4 — Ítem 200b

**Abans.** «Cada mes de l'any i el seu nombre de dies.» La resposta marcada
bona deia que és una funció perquè «per a un mes fixat el nombre de dies és
sempre el mateix **o varia de manera predictible**», i la resolució afirmava
que «cada mes té sempre un únic nombre de dies determinat», que és fals per
al febrer. Sobre el domini dels dotze mesos, la relació **no** és una funció,
i el distractor que ho deia era l'argument correcte.

**Ara.** L'enunciat fixa el domini: *«Cada mes d'un any concret (per exemple,
el 2025) i el seu nombre de dies.»* Amb l'any fixat, sí que és una funció, i
la justificació ja no es contradiu.

L'ítem hi guanya, perquè el que estava mal resolt és precisament el que ara
ensenya: el distractor del febrer passa a portar l'etiqueta nova
`DOMINI_MAL_LLEGIT` i un feedback que explica que **tindria raó si el domini
fossin els mesos sense concretar l'any**. La resolució ho recull en dos
passos, i la nota de l'ítem documenta que l'enunciat s'ha desviat de la font
i per què.

## Punt 5 — Dificultat explícita

**Abans.** `ordenaPerDificultat` ordenava per `enunciat.length`. El proxy té
un biaix sistemàtic: **419 dels 739 ítems (57 %)** tenen l'encapçalament més
llarg que l'enunciat, i a 165 el context viu gairebé sencer a l'encapçalament.
Aquests ítems tenen enunciats artificialment curts i pujaven al davant
independentment de la seva dificultat.

**Ara.** Cada exercici porta un nivell, fixat a mà en una taula a dalt del seu
generador:

```python
dificultats({
      5: 1,  # descomposició factorial directa
      8: 2,  # a l'inrevés: donat el m.c.d., quin nombre encaixa
     12: 3,  # problemes amb context: cal decidir si toca m.c.d. o m.c.m.
})
```

Escala de tres graons, documentada a `lib.py`: **1 directa** (un pas, amb les
dades a punt), **2 encadenada** (dos o tres passos, o cal triar el mètode),
**3 completa** (context, plantejament, barreja de conceptes, o justificar).
Tres i prou: més graons no els sabríem distingir de manera fiable.

**Per exercici, no per ítem.** Els apartats d'un exercici solen ser variacions
de la mateixa feina, i tenir-ho en una taula permet revisar la graduació
sencera d'un full d'una ullada en lloc d'anar-la a buscar a seixanta llocs.
Si un apartat se surt del to del seu exercici, `dif=` al seu `Q()` mana.
`lib._valida()` atura la compilació si un exercici no és a la taula, i també
si es registra dues vegades amb valors diferents (el Full 1 el componen
quatre mòduls i la taula s'acumula entre tots).

Repartiment resultant: **206 ítems directes (28 %), 350 encadenats (47 %),
183 complets (25 %)**.

### Què canvia a l'itinerari

`ordenaPerDificultat` mira `dif` i deixa la longitud com a desempat (que és
també el que fa de xarxa si un `fullN.js` antic queda a la memòria cau del
navegador: sense el camp, tot cau a nivell 2 i es comporta com abans).

`triaAmbVarietat` s'ha refet. Abans agafava `quota` ítems d'una finestra dels
més curts, cosa que amb quotes de 2-4 per bloc volia dir sempre el graó
d'entrada. Ara agafa **un exercici de cada nivell que hi hagi al bloc** abans
de repetir-ne cap, i reparteix el sobrant pesant cap avall (3-2-1 per als
nivells 1-2-3), perquè qui ha de reconstruir un tema necessita més rodatge a
baix però la ruta ha de pujar. La variació entre rutes és sempre entre
exercicis del mateix graó, mai entre graons.

L'entrada canvia a **25 dels 46 blocs**. Els casos que motivaven la troballa:

| Bloc | Abans obria amb | Ara obre amb |
|---|---|---|
| Full 9 · prismes | 174, 175 (de l'àrea a la diagonal del cub) | 170a–e (àrea amb totes les dades) |
| Full 7 · triangles | 127c, 127a, 127b (apotema d'un hexàgon) | 120a–c, 123a (desigualtat triangular, Pitàgores directe) |
| Full 12 · espais mostrals | 239a, 240a (classificar esdeveniments) | 236a, 236d (escriure l'espai mostral) |
| Full 4 · divisió | 67b, 67d (Ruffini amb divisor no mònic) | 68b, 68a, 66b (Ruffini mònic) |
| Full 6 · directa/inversa | 105a, 105b (densitat) | 101, 104 (regla de tres directa) |
| Full 2 · combinades | 45c, 45h (bases diferents) | 44b, 44a |

I el cas invers, el que abans no arribava mai: un alumne que falla la prova de
paràboles ara rep una ruta que puja de 212 (obertura) → 217 (reduir termes) →
214 (trobar la constant) → **216a–d (talls, vèrtex i eix)** → 215 (muntar
l'expressió des del vèrtex). Els quatre apartats del 216, que són la feina de
debò del bloc, abans quedaven sempre fora.

### Revisió

El `REVISIO-fullN.html` ara diu la dificultat de cada ítem al costat del tipus,
i al peu hi ha una taula **«Graduació per bloc»** amb el recompte per nivell
que marca en vermell els blocs amb un sol nivell. En queden 9 de 46, i tots
són defensables: els sis blocs de problemes (Full 3 aplicacions, Full 5
problemes, Full 6 encadenats, Full 7 problemes, Full 8 aplicacions) són tot
nivell 3 per naturalesa, i Full 11 variables és tot nivell 1 perquè és el bloc
d'entrada de classificar variables.

---

## Punt 9 — Neteja

Dotze coses petites, cap de les quals canvia cap resposta. Van juntes perquè
totes són el mateix tipus de problema: coses que es veuen malament o que
diuen el que no toca.

### Renderitzat

- **4/64a–d.** La resolució sortia com `$$[P(x)-Q(x)]$\cdot S(x)=...$`, amb els
  `$` doblats: `dins_txt` ja porta delimitadors perquè a les pistes va enmig
  de text, i a la resolució es tornava a embolcallar. Ara s'hi treuen.
- **4/72a i 72b.** Cinc distractors sense `$...$` (`9x^2-y^2-16`,
  `(a+b)^2+c^2`…) es renderitzaven com a text pla amb accents circumflexos
  mentre la clau sortia ben composta. Era **una pista visual que regalava la
  resposta**.
- **10/208b, 208c, 208e, 208f i 212b, 212d.** `y=x/6+3` passa a
  `y=\dfrac{x}{6}+3`, com la resta del projecte.

### Notació que la pròpia resolució desaconsellava

- **Discriminant (5/80 i 5/81).** `disc_tex()` escrivia
  `$\Delta=(-6)^2-4\cdot-2\cdot(8)=36--64=100$`. Ara posa parèntesis només on
  calen i converteix la resta d'un negatiu en suma:
  `$\Delta=(-6)^2-4\cdot(-2)\cdot8=36+64=100$`.
- **Coeficients `1x` i denominadors `1`.** `-x^2+1x+1` → `-x^2+x+1` (a
  `eq2_tex`), i els enunciats de 5/76 passen de `\dfrac{1x}{5}` i
  `\dfrac{3x}{1}` a `\dfrac{x}{5}` i `3x`. La resolució i les pistes s'hi
  adapten: quan no hi ha denominador ja no diu «multiplica pel denominador»
  ni deixa un pas tautològic (`$3x=-5 \Longrightarrow 3x=-5$`).
- **Unitats (7/124b, 127a, 127b, 128a, 129).** Dins d'un mateix joc d'opcions
  n'hi havia amb «cm» i sense. A **128a** l'única opció amb unitat era la
  correcta.
- **7/144b.** «D'una circumferència es retalla un sector» → d'un **cercle**: la
  circumferència és la corba, no la regió.
- **10 — «funció lineal» per «funció afí».** El terme *afí* no apareixia ni
  una sola vegada al projecte, i els exercicis 207–209 tracten `y=-3x+6` com a
  «lineal». Al currículum de Catalunya *lineal* és `y=mx` i *afí* és `y=mx+n`,
  i a 1r es dona per sabuda. L'encapçalament del 207 ara ho diu explícitament,
  i el bloc passa a dir-se «Funcions lineals i afins».
- **6/113.** El preu final era `76,3848 €`. Ara la clau és `76,38 €` i la
  resolució hi afegeix el pas d'arrodonir a cèntims.
- **3/59d.** L'enunciat era literalment «No es pot calcular.», un fragment
  incomprensible fora de context. Ara: «Algú afirma: "d'aquesta successió no
  se'n pot calcular el terme general". És cert?».

### Notes internes que arribaven a l'alumne

Catorze ítems mostraven a `practica.html` frases com «vegeu NOTA DE
TRANSCRIPCIÓ IMPORTANT a **r-im8.tex**», «seguint la nota de transcripció del
propi **im9.tex**», «**cal confirmar-ho amb l'original**» o «convé
confirmar-ho contra la figura original **abans de publicar**».

En comptes de reescriure-les i prou, `Q()` guanya un paràmetre
**`nota_interna=`**: el `build.py` no l'emet a `data/`, només la pinta al
`REVISIO`. I `lib._valida()` atura la compilació si la nota **visible** parla
d'un fitxer `.tex`, diu «cal confirmar» o «abans de publicar» — el problema no
pot tornar per descuit.

Les catorze notes s'han partit en dues. Per exemple, a 7/144a:

```
visible  "La figura de partida no deixa clar el diàmetre de l'arc interior;
          aquí es pren 6 cm, que és la meitat de l'exterior."
interna  "La imatge de la font no permet determinar-lo amb seguretat;
          s'adopta la lectura del solucionari. Vegeu r-im8.tex."
```

També s'han tret les referències al «solucionari original» de 4/69c, 8/154a–d,
10/202c, 12/240c–d i 12/243, i s'ha corregit un «Es couen tots dos apartats»
(per «coure», cuinar) que era una relliscada de teclat a 12/240c–d.

### Notes fora de lloc

«El signe no afecta el m.c.d.: es treballa amb els valors absoluts» sortia
també a 1/12a, 12b i 17, que són problemes amb context on no hi ha cap nombre
negatiu. Ara la nota només apareix si algun dels nombres de l'exercici ho és.

### Cobertura documentada

Els onze exercicis absents (139, 157, 178, 192, 194, 204, 205, 210, 211, 213,
233) i els apartats saltats sí que estaven justificats, però només al
docstring dels generadors. El `README.md` ara porta una secció **«Què no hi
és»** amb la taula de què falta a cada full i per què, i el 9/195 —l'únic
exercici amb apartats saltats que no ho deia enlloc visible— guanya una nota.

---

## Punt 7 — Repartir `SIMPLIFICACIO_INCOMPLETA`

**Abans.** 119 distractors portaven aquesta etiqueta, i només 7 tenien res a
veure amb simplificar. Al Full 7 era el 25 % de tots els distractors i al
Full 9 el 19 %. Entre les coses que hi havia etiquetades: «no es pot saber
sense mesurar els angles» en un problema de triangles rectangles, «aquesta és
la semibase, no l'alçada», «no has dividit entre 3» en el volum d'una
piràmide, «$0{,}8\,\%=0{,}008$, no $0{,}08$».

Això importa perquè `hub.js` **agrega les respostes fallades per etiqueta** i
en pinta el panell «els errors que repeteixes». Amb un calaix de sastre, el
panell deia que busquessis el m.c.d. del numerador i el denominador a un
alumne que havia fallat cinc problemes de geometria.

**Ara.** 107 distractors reetiquetats i **58 etiquetes noves** al catàleg.
`SIMPLIFICACIO_INCOMPLETA` passa de 119 usos a 7, tots de fraccions o arrels
que de veritat es queden a mitges (1/20a, 5/78a, 5/80d, 5/84f, 5/86f, 7/128b),
i el seu comentari al `TAX` avisa de no tornar-hi.

Les etiquetes noves més usades, i què agrupen:

| Etiqueta | Usos | Què vol dir |
|---|---:|---|
| `PAS_INTERMEDI_PER_RESPOSTA` | 24 | El valor és correcte però és un pas del mig, no el que es demana |
| `ARREL_OBLIDADA` | 17 | S'ha quedat amb $x^2$ o $L^2$ sense fer l'arrel |
| `ES_POT_DETERMINAR` | 11 | «No es pot saber» quan les dades de l'enunciat basten |
| `PART_PEL_TOT` | 5 | Ha donat el polígon sencer on es demanava un dels triangles |
| `SUMA_DE_PARTS_INCOMPLETA` | 6 | Ha comptat la base o la lateral, però no totes dues |
| `DIVISIO_REPETIDA` | 5 | Ha dividit dues vegades pel mateix nombre |
| `RAO_MAL_APLICADA` | 4 | Ha dividit on la progressió geomètrica multiplica |
| `PERCENTATGE_DECIMAL_MAL` | 4 | $0{,}8\,\%$ passat a $0{,}08$ en lloc de $0{,}008$ |
| `FACTOR_TRES_VOLUM` | 3 | El terç del volum aplicat a un cilindre, o oblidat en un con |
| `FRACCIO_DE_CERCLE_MAL` | 3 | Mig cercle on tocava tres quarts, o el sector retallat pel que queda |

També s'ha reescrit el text dels distractors de **5/76a–f**: eren sis ítems
amb el mateix text de plantilla («no has acabat de simplificar la fracció
resultant») que no descrivia l'error, perquè allà no hi ha cap fracció a
simplificar. Ara diu el que passa de veritat: s'ha dividit pel coeficient
sense haver multiplicat abans pel denominador.

### El panell d'errors ara fa servir el catàleg

Reetiquetar sol no arreglava del tot el panell, perquè `hub.js` agafava com a
text representatiu el **diagnòstic del primer ítem del full** amb aquella
etiqueta: un text ple dels números d'un exercici concret, que com a resum de
cinc errors diferents no diu gran cosa. Ara `build.py` emet a cada
`data/fullN.js` un mapa `errors` amb el text de `TAX` de les etiquetes que el
full fa servir, i `hub.js` el prefereix (amb el comportament antic com a
xarxa, per si una etiqueta no és al catàleg).

Perquè això funcionés calia completar el catàleg: s'hi han afegit també 26
etiquetes que ja s'usaven molt i no hi eren (`TRACTAT_COM_EXACTE` amb 46 usos,
`NO_RESTA_ANTEPERIODE` amb 36, `ARREL_FACTOR_OBLIDAT` amb 21…). Cobertura
resultant: **2.084 dels 2.217 distractors (94 %)** tenen text de catàleg. El
133 restant són etiquetes d'un o dos usos —sobretot al Full 10, que en té 38
per a 135 distractors—, i per a aquestes tant se val: una etiqueta d'un sol
ús no pot sortir mai com a error *repetit*.

Comparació del que veu un alumne que ha fallat tres exercicis del Full 7 per
donar un pas intermedi com a resposta:

```
abans  "Aquesta és la semibase (la meitat del costat), no l'alçada: encara
        falta aplicar Pitàgores amb aquesta semibase i el costat com a
        hipotenusa."                                    (text de l'ítem 124a)

ara    "El valor que has triat és correcte, però és un pas intermedi, no el
        que et demanen. Torna a llegir la pregunta i mira quina magnitud has
        d'acabar donant: sovint només falta una operació més."
```

---

## Punt 6 — Estat buit de l'itinerari

**Abans.** `obtenIGenera` retorna una ruta buida en dos casos molt diferents
—no hi ha diagnòstic, o el diagnòstic no ha trobat res per repassar— i
`itinerari.html` mostrava el mateix missatge als dos: «Encara no tens cap
itinerari · Primer cal fer el test inicial», amb un botó per fer el test.
Qui encertava les 15 proves rebia una instrucció falsa.

**Ara.** `capItinerari()` consulta `RE_DIAG.llegeix()` i distingeix:

- **sense diagnòstic** → el missatge d'abans, intacte;
- **amb diagnòstic i cap tema recomanat** → «No et cal cap itinerari», amb
  l'aclariment que això només val per a les destreses que el test mesura, i
  dos camins de sortida (triar full, o tornar al resultat per repetir el test).

`RE_DIAG` ja estava carregat a `itinerari.html`, i el botó secundari fa
servir `.btn.buit`, que ja existia a `css/estil.css`: no calen canvis ni a
l'HTML ni al CSS.

---

## Verificació feta

- Compilació neta dels 12 fulls, sense assercions trencades: 739 ítems,
  identificadors únics, 4 opcions distintes per ítem, i els 739 amb dificultat
  assignada (si en faltés cap, el build s'aturaria).
- La compilació segueix sent **determinista**: dues passades seguides donen
  fitxers byte a byte idèntics.
- Es tornen a passar totes les comprovacions simbòliques de l'auditoria
  (SymPy/`Fraction`) sobre el banc regenerat: aritmètica dels fulls 1 i 2
  (87 ítems), fracció generatriu (26), operacions i divisions de polinomis
  (31, Ruffini inclòs), equacions i sistemes (49). Cap discrepància.
- Cerca automàtica de distractors amb el mateix valor que la clau: només hi
  queda 1/20a, que és legítim (l'enunciat demana la fracció irreductible).
- Comprovació dirigida que les correccions dels punts 1-7 segueixen al seu
  lloc després de regenerar-ho tot.
- Escombrada automàtica dels patrons del punt 9 sobre els 739 ítems
  regenerats: cap `$$` desbalancejat, cap `36--64`, cap `\cdot-2`, cap `1x`,
  cap opció amb LaTeX sense delimitadors, cap referència a fitxers `.tex` ni
  a feina pendent en cap nota visible.
- Simulació del panell «els errors que repeteixes» per als dotze fulls,
  comprovant que el text representatiu de cada etiqueta amb 3 o més usos
  descriu de veritat tot el grup.
- `node --check` dels dos JS, i simulacions amb el banc real: els tres estats
  de l'itinerari (sense diagnòstic / tot dominat / res dominat) i dues rutes
  completes de 24 passos, comprovant que els nivells pugen i que els
  exercicis de nivell 3 hi arriben.
