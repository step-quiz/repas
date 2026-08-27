# Desplegament i trampes

Aquest document explica dues coses que van juntes: **què es publica** i **què
passa quan un alumne intenta que el registre digui més del que ha fet**.

No promet integritat. El lloc funciona sense servidor i sense comptes a
posta, i això té una conseqüència que no té volta de full: qui vulgui, i sàpiga
com, es pot fabricar un codi des de la consola del navegador. El que sí que es
pot fer —i és el que s'ha fet— és que **cap trampa sigui gratuïta ni
accidental**, i que les que quedin deixin rastre.

---

## 1. Què es publica

    python3 tools/fes-paquet-alumnat.py          # carpeta public/
    python3 tools/fes-paquet-alumnat.py --zip    # i el zip

**Publica només `public/`.** No publiquis l'arrel del repositori.

A l'arrel hi conviuen el lloc i el material del professorat, i tres coses no
poden sortir a internet:

| Fitxer | Què és |
|---|---|
| `REVISIO-fullN.html` | La clau de respostes completa dels 12 fulls, amb resolucions |
| `analitzador-repas.html` | Porta el banc sencer i compon proves escrites amb solucionari |
| `tools/_banc.json` | El mateix banc, en format còmode |

Si es publica l'arrel tal qual a GitHub Pages, `REVISIO-full1.html` és una URL
que s'endevina. Cap alumne no necessita saber res de programació per a això:
li'n basta la barra d'adreces.

L'script comprova que al paquet no hi hagi cap fitxer amb aquests noms i
s'atura si n'hi troba, perquè d'aquí a un any algú afegirà un fitxer nou amb
respostes i no es recordarà d'aquesta llista.

L'analitzador se li dona al professorat amb
`python3 tools/fes-paquet-professorat.py`, que hi posa el KaTeX al costat.

**Això no fa secret el banc.** `data/fullN.js` continua sent públic i el camp
`clau` és base64: tres línies de consola en treuen totes les respostes. Sense
servidor no hi ha manera d'evitar-ho, i el codi ja ho diu on toca. El que
canvia és el cost: de "escriure una URL" a "saber què estàs fent".

---

## 2. El registre és d'una sola direcció

`js/nucli.js`. Un exercici **es tanca al primer desenllaç** —encert o segon
error— i el seu estat ja no canvia mai més. Els comptadors d'intents i de
pistes són **acumulats de totes les visites**, no de la sessió, i són ells els
que decideixen l'estat.

Tres trampes que abans funcionaven i ara no:

- **Fallar, mirar la resolució i refer l'exercici.** Ara torna a l'exercici i
  el pot refer tantes vegades com vulgui —això és bo i es compta a part com a
  repàs— però el registre continua dient com va anar la primera vegada.
- **Fallar el primer intent i recarregar la pàgina.** L'estat "fallat" es desa
  **al primer error**, no al segon. Marxar ja no neteja res, i si torna i
  l'encerta, el millor que pot treure és "al segon intent".
- **Obrir pistes, recarregar i respondre "sense pistes".** Les pistes obertes
  queden desades a l'instant i sobreviuen a la recàrrega.

El lloc ho diu a l'alumne abans que respongui, en comptes d'enxampar-lo
després: quan torna a un exercici tancat li surt una línia que ho explica, i
quan falla el primer intent el veredicte li avisa que l'error ja ha quedat
anotat.

Tot això està cobert per `tests/test_registre.js` (15 comprovacions). Cada
prova correspon a una trampa concreta: si alguna cau, la trampa ha tornat.

---

## 3. El codi diu com s'ha fet la feina, no només quina

Format **RC3** (`js/codi.js`). Els codis RC1 i RC2 es continuen llegint.

El bloc `META` hi afegeix cinc coses que abans eren invisibles:

- **minuts de feina activa** (el rellotge només corre amb la pestanya visible);
- **importacions de codi** i **quants exercicis en venen**;
- **repeticions** d'exercicis ja tancats;
- **vegades que s'ha reiniciat un full** (el comptador viu en una clau a part,
  que el botó de reiniciar no pot esborrar);
- si hi ha hagut importació, l'**empremta del codi d'origen** (dia + salt).

L'empremta és la peça important. Fins ara, importar el codi d'un company amb
"Afegeix el que em falti" i continuar a partir d'allà era **exactament
indistingible** d'haver fet la feina: la marca ⇄ només compara cadenes
idèntiques i, en bifurcar-se, deixa de saltar. Ara el codi que en surt porta
d'on ve, i l'analitzador ho creua amb els codis que ja té:

- l'origen és un codi del **mateix** alumne → recuperació normal, no diu res;
- l'origen és un codi d'**un altre** alumne → ho diu, i és un fet, no una
  sospita;
- l'origen no és al full → diu que hi ha feina importada i prou.

Recuperar la feina segueix sent una funció normal i necessària: en un carro de
Chromebooks compartits, un trimestre de feina desapareix sol. El que s'ha
tancat no és la funció, és que serveixi per fer passar la feina d'un altre per
pròpia sense que es noti.

---

## 4. L'analitzador: què mira ara

Pestanya **Full de respostes**, apartat *«Coses que val la pena mirar»*:

- feina importada d'un codi d'un altre alumne (amb nom);
- ritme de feina difícil d'explicar (exercicis per minut actiu);
- **errors que cap estat no justifica**: cada exercici pot justificar com a
  molt dos errors si va quedar fallat i un si va quedar en segon intent, amb
  pista o obert. Si el codi en declara més, hi ha hagut intents que no es veuen;
- fulls reiniciats;
- **dos alumnes amb pràcticament el mateix conjunt d'exercicis fets** (≥ 85 %
  de coincidència sobre 15 exercicis o més). És l'única manera de veure el
  repartiment de feina en grup: quatre alumnes que es reparteixen els
  exercicis i s'importen els codis creuats acaben amb quatre codis diferents,
  tots íntegres, i amb el mateix conjunt d'exercicis fets.

Tret de la primera, cap d'aquestes línies demostra res per si sola, i el text
de l'eina ho diu. Es resolen preguntant.

### Qualificació del trimestre

Dues mètriques es podien inflar sense fer feina i ja no:

- **Constància.** Una setmana només compta si porta un **mínim d'exercicis
  nous** (camp nou, per defecte 3). Amb el llindar a 1, degotar un exercici
  cada dilluns donava la constància màxima, que és el component que més pesa.
- **Progrés.** Obrir totes les pistes als primers vint exercicis i cap després
  saturava el component sense tocar l'encert: la manera òptima de puntuar era
  fer-se el fluix al principi. Ara la baixada de pistes no dona crèdit si a la
  primera meitat es demanava pista en més del 60 % dels exercicis, ni si
  l'encert ha baixat. Demanar menys pistes segueix comptant fins al mateix
  sostre de 20 punts; el que ja no compta és el trampolí.

### Prova escrita

- Casella nova per **incloure els exercicis oberts i no contestats**. Per
  defecte no hi entren, però ara es diu sempre quants n'hi ha: deixar-los fora
  en silenci vol dir que qui evita el que li fa por s'autodissenya un examen
  fàcil.
- Els oberts i no contestats van amb el **pes més alt** de la tria: són, per
  definició, el que menys clar es tenia.
- El full de correcció diu la **barreja de nivells** de la prova. No es pot
  examinar del que no s'ha practicat: si tota la feina és de nivell 1, la prova
  serà de nivell 1, i això no ho arregla el sorteig —només es pot dir.

---

## 5. El que segueix sense estar tapat

Val més tenir-ho escrit que descobrir-ho tard:

- **Fabricar un codi des de la consola.** `RE_CODI.genera()` és a la pàgina
  perquè el botó funcioni. Amb `opcions.ara` fins i tot es pot datar enrere.
  Inevitable sense servidor.
- **Editar el `localStorage` a mà.** Més fàcil encara: el codi el genera
  després el generador de veritat i surt íntegre.
- **Llegir les respostes de `data/fullN.js`.** Vegeu §1.
- **Treballar al navegador d'un altre** i emportar-se cada un el seu codi. Si
  acaben amb el mateix conjunt d'exercicis, el senyal de coincidència ho veu;
  si es reparteixen, no.
- **Fer els exercicis amb ajuda al costat.** La forma de les dades és la
  mateixa que la de qui treballa sol. Aquí no hi ha res a detectar, ni amb
  aquest sistema ni amb cap altre.

**El que de debò tanca el cercle no és cap d'aquestes marques**: és que la
nota del lloc i la de la prova escrita s'assemblin. Un codi inflat no fa
l'examen més fàcil —al contrari: amplia la llista d'exercicis d'on pot
sortir—, i un 8,5 al seguiment amb un 3 al paper ja s'explica sol.

Amb un matís que convé no perdre de vista: la prova escrita reutilitza els
**mateixos ítems amb els mateixos números**. Un alumne que s'estudiï de
memòria la resolució dels trenta exercicis que ha fet pot aprovar sense haver
après la destresa. La versió bona d'això és examinar de **germans no vistos**
del mateix bloc i nivell —o, millor, dels mateixos exercicis amb números nous,
que els generadors de `tools/c_*.py` ja saben fer. És el canvi de fons que
falta, i el que faria que gairebé tot el d'aquest document deixés d'importar.
