# Codi de verificació per a repàs-ESO

Sistema complet: l'alumne obté un codi, l'envia per un Google Form, i el
professorat l'enganxa a `analitzador-repas.html`.

Està fet a mida de repàs-ESO, no adaptat de cap altre projecte. Les
diferències respecte del que fa `operacions` es justifiquen totes a baix.

---

## Prova-ho en dos minuts

1. Obre `index.html`: a dalt a la dreta hi ha el botó **Codi**, fix i sempre
   visible a totes les pàgines.
2. Fes uns quants exercicis. El botó porta el compte al costat (`Codi 7`).
3. Clica'l: s'obre una finestra amb el resum, el codi i el botó de copiar.
4. Obre `analitzador-repas.html` (doble clic, no cal servidor), pestanya
   **Full de respostes**, i enganxa el codi. O prem **«Posa-hi un exemple»**,
   que en fabrica sis d'alumnes fictícis —un de manipulat i un enviat tard—
   per veure com es comporta.

---

## Què porta el codi

Una fotografia **completa** del progrés: quins exercicis s'han fet i com han
anat, un per un, amb els identificadors reals (`67e`, `216c`, `144b`).

```
RC1 SSS DD HH MMM  [per cada full: G + grups de 4]  [DIAG]  EEEEEEEEE  KK

RC1   marca i versió
SSS   salt aleatori
DD    dia (dies des de l'1/9/2025)
HH    hora (minuts/2 des de mitjanit)
MMM   màscara de fulls presents + si hi ha diagnòstic
G     nombre de grups d'aquest full
····  un grup = 7 exercicis en base 6
DIAG  les 15 destreses del test inicial (si n'hi ha)
EEEE  les 3 etiquetes d'error més repetides, amb el compte
KK    dos caràcters de control
```

Estat de cada exercici: `0` per fer · `1` a la primera · `2` al segon intent ·
`3` amb pista · `4` fallat · `5` començat sense respondre. Són exactament els
que `nucli.js` ja desava, així que no ha calgut instrumentar res de nou.

**Llargada real.** Un full de 59 exercicis fet a mitges: **45 caràcters**.
Els 739 exercicis dels dotze fulls més el diagnòstic: 490. Els grups finals
buits no s'escriuen, de manera que la llargada creix amb la feina feta i no
amb la mida del full.

---

## Quan i on s'ofereix

**Un sol botó, flotant, fix a dalt a la dreta, a totes les pàgines** on
l'alumne pot estar treballant: portada, full, exercici, itinerari i resultat
del test inicial. No depèn de l'itinerari ni de cap moment de tancament: està
sempre a mà.

**Un sol codi.** El botó dona sempre la fotografia sencera —tots els fulls més
el test inicial—, no el d'un full concret. Així l'alumne no ha de decidir res.

**El volum es veu de seguida.** El botó porta el compte d'exercicis al costat
(`Codi 23`), i la finestra diu quants n'ha fet, com li han anat i quin
percentatge del lloc representa. Per sota de deu exercicis avisa:

> Has fet **3** exercicis. El codi diu exactament quants n'has fet i quins,
> així que si el professorat t'ha demanat més feina, val més esperar a
> haver-la feta.

## Sis decisions, i per què

### 0. El volum ha de ser tan visible com la nota

La nota és un percentatge i no sap res del volum: qui fa **un** exercici i
l'encerta surt amb un **10**, i qui en fa quaranta amb un 6,6. Comparar-les
seria injust.

El codi ja porta el volum —diu exactament quants exercicis s'han fet i
quins—, però calia que a l'analitzador no es pogués passar per alt:

- Camp **«feina mínima demanada»** (per defecte 10). Qui no hi arriba surt amb
  el número en vermell i una barra de progrés.
- **La seva nota es pinta apagada i amb asterisc**, perquè no convidi a
  comparar-la.
- Filtre **«feina insuficient»** per aïllar-los, i un resum a sobre de la
  taula: *«1 de 3 no arriben als 10 exercicis: poc (3)»*.
- El CSV exportat porta les columnes `exercicis`, `minim` i `arriba`.

Posant el mínim a 0, tot això desapareix.

### 1. El codi és acumulatiu, no un tiquet de sessió

`operacions` són activitats d'una estona amb principi i final. Repàs-ESO és
treball propi durant setmanes, sense sessions. Un codi per estona obligaria
l'alumne a no perdre'n cap i el professorat a sumar-los.

Aquí **cada codi conté tot el que s'ha fet fins llavors i substitueix
l'anterior**. Si l'alumne se n'oblida un, el següent ja ho porta tot;
l'analitzador es queda l'últim de cada alumne i prou.

### 2. La nota no viatja dins del codi

Aquest és el forat clàssic d'aquesta mena de sistemes, i el vostre propi
`PROJECTS-TECHNICAL-REFERENCE.md` el té fitxat com a `P01`: si el codi porta
una nota *i* un detall pregunta a pregunta, i el control només cobreix la
nota, es pot retocar el detall sense trencar res.

Aquí **la nota es deriva del detall en llegir el codi**. No hi ha dos nombres
que puguin contradir-se, perquè només n'hi ha un. El forat no es tapa: no
existeix.

La fórmula és pública i està a `js/codi.js`: `net` 10 punts, `segon` 7,
`pista` 6, `fallat` 0. Els pesos els hauries de fixar tu; el que importa és
que siguin deterministes.

### 3. Dos caràcters de control, amb mòdul primer i pesos

La lletra del DNI és una suma mod 23 pensada per a **8 xifres**. Amb càrregues
de centenars de caràcters falla per dos costats:

- **Sense pesos, una transposició no es detecta mai.** Si en copiar
  s'intercanvien dos caràcters, la suma no es mou. Amb codis llargs això passa.
- **El mòdul ha de ser més gran que l'alfabet.** Amb 32 caràcters i mòdul 31,
  el `0` i la `Z` són congruents i confondre'ls no trencaria res. (Ho vaig
  trobar provant la primera versió: 10 de 837 mutacions d'un caràcter
  passaven, i totes eren `0`↔`Z`.)

La versió final: `K = Σ (i+1)·valor(car_i) mod 1021`, barrejat amb una
transformació afí abans d'escriure'l, en l'esperit de l'alfabet desordenat del
DNI. Mesurat sobre un codi de 208 caràcters:

| Manipulació | Passen el control |
|---|---|
| Substitució d'un caràcter (6.386 casos) | **0** |
| Transposició de dos caràcters (20.304 casos) | **0** |
| Mutació de 2 a 5 caràcters a l'atzar | 0,37 % |

Les dues primeres files són garantia matemàtica, no estadística: 1021 és
primer i més gran que qualsevol valor de caràcter i que la llargada del codi.

### 4. Alfabet sense `I`, `L`, `O` ni `U`

Perquè un codi es pugui llegir a mà, dictar per telèfon o teclejar sense
patir. A més, la lectura normalitza el que enganxa la gent: minúscules,
guions, espais, i les confusions típiques (`O`→`0`, `I`/`L`→`1`). Provat: un
codi passat per minúscules i amb totes les `0` canviades per `O` i les `1` per
`l` es llegeix igualment.

### 5. La posició del codi és un exercici concret

`operacions` genera les preguntes a l'atzar, així que la posició *i* només vol
dir «la i-èsima». A repàs-ESO els exercicis tenen identificadors estables i un
ordre fix, i l'analitzador porta la taula. Per això el professorat no llegeix
«ha fallat la 7a» sinó **«ha fallat el 67e, el 68c i el 69a, tots del bloc de
divisió de polinomis»**.

Això és el que fa que valgui la pena mirar-s'ho.

---

## Progrés del trimestre

Aquesta és la part que fa que el sistema serveixi per qualificar, i es recolza
tota en una propietat del format: **com que els codis són acumulatius, la
resta entre dos codis seguits d'un mateix alumne és exactament la feina feta
entremig**, amb el detall de com li ha anat. Sense això només es podria
mesurar l'estat final; amb això es mesura el camí.

L'alumne no dona mai cap dada al lloc; la identitat la posa el Google Form, i
el correu institucional és la primera columna del full.

### Què es mesura

| Component | Com |
|---|---|
| **Constància** | Setmanes amb feina **nova**, sobre les esperades |
| **Volum** | Exercicis fets durant el període, ponderats per dificultat |
| **Millora** | Variació d'encert i de dependència de pistes entre la primera i la segona meitat de la feina |
| **Encert** | Percentatge global d'exercicis resolts |

Quatre decisions que no són òbvies:

1. **Un enviament només compta com a dia de feina si porta exercicis nous.**
   Reenviar el mateix codi vint vegades no és constància, i queda marcat com a
   `1 (+6)` a la columna de dies.
2. **Les dues meitats es parteixen per volum acumulat, no pel calendari.** Si
   un alumne fa 40 exercicis el primer dia i 4 l'últim, partir pel mig del
   trimestre compararia 40 amb 4 i el soroll es menjaria el senyal.
3. **L'encert de la variació s'estandarditza per dificultat.** Es calcula per
   nivell i es recombina amb la barreja global. Sense això, qui passa dels
   exercicis directes als problemes semblaria que empitjora quan només s'ha
   posat amb coses més dures. Provat: un alumne que va de nivell 1 a nivell 3
   amb el mateix encert real surt amb variació 0, i el detall li diu que la
   segona meitat era més difícil.
4. **La feina anterior al trimestre no compta.** La línia de base és l'últim
   codi anterior al període.

Si no hi ha prou dades (menys de 20 exercicis o menys de 2 enviaments amb
feina), la millora surt com a *no mesurable* i el seu pes es reparteix entre
els altres components.

### La qualificació

`nota = 10 × (35 % constància + 35 % volum + 20 % progrés + 10 % encert)`

Els quatre pesos, les setmanes esperades i els exercicis esperats es toquen
des de la mateixa pàgina. Els trimestres tenen presets (set–des, gen–març,
abril–juny) que dedueixen l'any de les dades.

**L'encert va amb poc pes a propòsit.** Això és pràctica de repàs, no un
examen: si l'encert pesa molt, a l'alumne li surt a compte no obrir pistes i
evitar els exercicis de nivell 3, que és el contrari del que busca la
graduació per dificultat. La pàgina ho adverteix al costat dels controls.

### Com discrimina

Quatre perfils sintètics sobre un trimestre de 10 setmanes, amb objectiu de
60 exercicis:

| Perfil | Dies | Setm. | Exerc. | Encert | Millora | Nota |
|---|---|---|---|---|---|---|
| Regular, 6 exercicis cada setmana, millorant | 10 | 10 | 60 | 92 % | +17 pp · +17 pp | **9,9** |
| 60 exercicis en 3 dies d'una setmana | 3 | 1 | 60 | 100 % | 0 pp | **5,8** |
| Irregular, 3 sessions, sense millora | 3 | 3 | 27 | 67 % | −3 pp | **4,4** |
| 8 exercicis i 6 reenviaments del mateix codi | 1 (+6) | 1 | 8 | 100 % | no mesurable | **2,3** |

El segon perfil és el cas que et preocupava: fa tota la feina i té el 100 %
d'encert, però la fa de cop, i es queda per la meitat de la nota del primer.
A més, el resum de classe el llista a part: *«Feina concentrada en pocs dies
(molt volum, poca constància): bru (1 setmana). Han fet la feina, però de
cop.»*

## L'analitzador

`analitzador-repas.html` és **un sol fitxer**: es desa, s'obre amb doble clic i
funciona sense servidor ni connexió. No envia res enlloc.

Té quatre pestanyes: **Full de respostes**, **Progrés del trimestre**, **Un
sol codi** i **Com funciona**.

**Full de respostes.** Enganxa-hi el Google Sheet (Ctrl+A, Ctrl+C) o obre'n el
CSV. El correu es llegeix de la primera columna, que és on el posa el Google
Form; si no n'hi ha, es busca per capçalera o per la forma. La columna del
codi es detecta sola. Dona:

- **Per alumne** — l'últim codi de cadascú, amb els exercicis fets per full i
  la nota. Exportable a CSV.
- **Enviaments** — una fila per codi, amb la marca d'estat, el temps entre
  generar-lo i enviar-lo, i els punts de colors. Clica-hi i s'obre el detall
  complet: comptes, repartiment per nivell de dificultat, bloc a bloc amb els
  identificadors dels exercicis fallats i dels que han necessitat pista, les
  etiquetes d'error més repetides i el test inicial si el codi el porta.
- **Què falla més** — l'agregat de classe: en quins blocs s'encalla més gent,
  quins exercicis costen més i quins errors es repeteixen. És la vista que
  respon «què he de tornar a explicar dilluns».

**Un sol codi.** Per comprovar-ne un a mà.

**Marques d'estat:**

| | Vol dir |
|---|---|
| ✓ | Íntegre, i enviat poc després de generar-lo |
| ! | Íntegre, però han passat més de 30 minuts fins a enviar-lo |
| ✗ | El control no quadra: mal copiat o modificat |

L'avís de temps sol ser innocent (l'alumne el va desar i el va enviar més
tard), però és on es veuria un codi passat d'un company.

---

## Com està muntat

```
js/codi.js                    generació I lectura, al mateix fitxer
js/codi-ui.js                 el panell que veu l'alumne
js/codi-taules.js             GENERAT — ordre d'ítems, blocs, dificultats
analitzador-repas.html        GENERAT — eina del professorat, autònoma

tools/build_codi.py           munta les taules des de data/
tools/build_analitzador.py    incrusta taules + js/codi.js a la plantilla
tools/analitzador-plantilla.html
tools/codi-etiquetes.txt      ordre APPEND-ONLY de les etiquetes d'error
tools/build_tot.py            ho encadena tot en l'ordre correcte
```

Dues coses que val la pena saber si un dia s'hi torna:

- **`js/codi.js` porta el generador i el lector al mateix fitxer**, i
  l'analitzador **carrega aquest mateix fitxer** (no una còpia). Si viuen
  separats, tard o d'hora divergeixen, i el símptoma és el pitjor possible:
  codis que es llegeixen malament sense que res avisi.
- **`tools/codi-etiquetes.txt` és append-only.** El codi guarda l'*índex* de
  l'etiqueta d'error, no el nom. Reordenar el fitxer fa il·legibles tots els
  codis ja emesos. `build_codi.py` ho vigila i avisa.

Per recompilar-ho tot en l'ordre bo:

```
cd tools && python3 build_tot.py
```

---

## Una cosa que he decidit i pots voler canviar

**El panell de l'alumne no ensenya la nota.** Diu «20 exercicis: 12 a la
primera, 3 al segon intent, 2 amb pista, 3 fallats», i prou. La nota va dins
del codi i la veu el professorat.

El motiu: repàs-ESO és pràctica formativa. Si l'alumne veu una nota cada
vegada que genera un codi, deixarà d'obrir pistes i evitarà els exercicis de
nivell 3 — exactament el contrari del que buscava la graduació per dificultat.
Ensenyar volum i cobertura empeny cap a fer més feina; ensenyar nota empeny
cap a protegir el número.

Si prefereixes que la vegi, és una línia a `js/codi-ui.js`.

---

## Verificació feta

- 19 comprovacions de l'anàlisi de trimestre amb quatre perfils sintètics
  d'alumne, l'estandardització per dificultat i tots els controls.
- 25 comprovacions de l'analitzador amb un DOM real (jsdom): lectura del TSV,
  detecció d'un codi manipulat entre quatre, avís de temps, taula per alumne,
  detall amb identificadors, agregat de classe, filtres, lectura d'un codi
  solt, botó d'exemple i tot el bloc de feina mínima.
- 22 comprovacions del botó flotant: que hi és a les cinc pàgines amb tots els
  scripts, que es posa sol, que és fix, que compta, que avisa amb poca feina i
  que deixa d'avisar amb prou, i que no ensenya cap nota.
- 13 comprovacions de la integració a l'app: recollida des de `localStorage`,
  anada i tornada del codi amb estats i etiquetes idèntics.
- Anada i tornada exacta amb 739 exercicis, 12 fulls i el diagnòstic.
- Les proves de manipulació de la taula de més amunt.
- Compilació determinista: dues passades seguides donen fitxers idèntics.
