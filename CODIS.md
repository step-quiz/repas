# Codi de verificació per a repàs-ESO

Sistema complet: l'alumne obté un codi, l'envia per un Google Form, i el
professorat l'enganxa a `analitzador-repas.html`.

Està fet a mida de repàs-ESO, no adaptat de cap altre projecte. Les
diferències respecte del que fa `operacions` es justifiquen totes a baix.

---

## Prova-ho en dos minuts

1. Obre `index.html`, ves a un full i fes uns quants exercicis.
2. Torna a la pàgina del full: al final hi ha **«Codi d'aquest full»**.
   A la portada hi ha **«Codi de tota la teva feina»**.
3. Obre `analitzador-repas.html` (doble clic, no cal servidor), pestanya
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

## Cinc decisions, i per què

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

## L'analitzador

`analitzador-repas.html` és **un sol fitxer**: es desa, s'obre amb doble clic i
funciona sense servidor ni connexió. No envia res enlloc.

**Full de respostes.** Enganxa-hi el Google Sheet (Ctrl+A, Ctrl+C) o obre'n el
CSV. Detecta sol les columnes; si les capçaleres no ajuden, busca la columna
que conté un codi (comencen per `RC1`). Dona:

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

- 19 comprovacions automàtiques de l'analitzador amb un DOM real (jsdom):
  lectura del TSV, detecció d'un codi manipulat entre quatre, avís de temps,
  taula per alumne, detall amb identificadors, agregat de classe, filtres,
  lectura d'un codi solt i el botó d'exemple.
- 11 comprovacions de la integració a l'app: recollida des de `localStorage`,
  anada i tornada del codi amb estats i etiquetes idèntics, panell amb feina i
  panell sense feina.
- Anada i tornada exacta amb 739 exercicis, 12 fulls i el diagnòstic.
- Les proves de manipulació de la taula de més amunt.
- Compilació determinista: dues passades seguides donen fitxers idèntics.
