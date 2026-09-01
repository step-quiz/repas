# Diff de la revisió — figures

> **diff-01** (2026-08-31): correcció del `min()` + 6 eines.
> **diff-02** (2026-08-31): `_cotes.py` nou, i avís de forat a `_plantilles.py`.
> **diff-03** (2026-08-31): `_contrast.py` nou.
> **diff-04** (2026-09-01): `_cotes.py` reconeix les alçades fora del sistema de cotes.
> **diff-05** (2026-09-01): `_forma.py` i `_contradiu.py` nous.
> **diff-06** (2026-09-01): `_contradiu.py` passa d'una comprovació a quatre.
> **diff-07** (2026-09-01): `_etiquetes.py` nou.

## Fitxer MODIFICAT (1)

**`tools/fes-galeria.py`** — deu línies afegides a la plantilla HTML.

`wkhtmltoimage` 0.12.6 no implementa la funció CSS `min()` i descarta sencera
la declaració `.figura{max-width:min(100%,20rem)}` de `css/estil.css`. Sense
això la galeria pintava **totes** les figures a l'amplada sencera de la
columna (~638 px) en comptes dels 320 px que hi posa un navegador de debò.

Comprovació que ho demostra, amb un contenidor de 700 px:

| declaració | amplada pintada |
|---|---|
| `max-width: min(100%,20rem)` | 700 px |
| `max-width: 20rem` | 320 px |
| `max-width: min(100%,320px)` | 700 px |

El CSS del lloc és correcte: un Chromebook entén `min()`. El que fallava era
l'instrument. Amb la correcció, les 185 figures canvien i l'alçada mitjana de
la targeta baixa de 994 a 724 px.

Té una conseqüència que val la pena escriure: el defecte que `GALERIA.md`
posa com a exemple de troballa humana —etiquetes a 7 px perquè el CSS
encongia el dibuix— és exactament el que aquesta galeria **no podia veure**,
perquè no aplicava l'encongiment. És un tercer parany, germà dels dos que el
document ja documenta.

## Fitxers NOUS (6 eines + aquesta nota)

Cap toca el contingut. Són comprovacions de només lectura.

| fitxer | què mesura | resultat d'avui |
|---|---|---|
| `_mida_etiquetes.py` | mida efectiva de cada etiqueta en píxels de pantalla | 1 figura a 7,1 px; 19 per sota de 12 px |
| `_plantilles.py` | figures amb geometria idèntica i etiquetes diferents | 22 ítems on el dibuix menteix |
| `_escala_figures.py` | dibuix contra etiquetes dins d'un mateix polígon | 3 candidats, tots per repassar a mà |
| `_cotes.py` **(diff-02)** | mesura la línia de cota que porta cada etiqueta | 16 figures amb escales incoherents |
| `_contrast.py` **(diff-03)** | contrast WCAG de cada etiqueta contra el fons on cau | 663 etiquetes, 1 per sota de 4,5:1 |
| `_cotes.py` **(diff-04)** | ara també mesura alçades fora del sistema de cotes | 13 figures, 4 de noves |
| `_forma.py` **(diff-05)** | la forma dibuixada contra la que anomena l'enunciat | 84 comprovades, 2 xocs |
| `_contradiu.py` **(diff-06)** | quatre comprovacions de dibuix i encapçalament contra dades | 6 + 4 + 2 + 1 xocs |
| `_etiquetes.py` **(diff-07)** | etiqueta a la cota d'un altre objecte · marca vermella fora de la incògnita | 1 + 5 xocs |
| `_comprova_grafiques.py` | la corba dibuixada contra la fórmula del `<title>` | 19/19 correctes |
| `_audita_tot.py` | passa `auditoria/auditoria.py` per les 185 figures reals | 0 defectes d'etiqueta |
| `_verifica_full1.py` | claus de resposta del full 1 (de la revisió anterior) | 52 verificades, 0 errònies |

### Sobre els falsos positius

`_escala_figures.py` i `_plantilles.py` porten al capdamunt la llista de les
maneres en què m'han enganyat. Val la pena llegir-la abans de fer-los cas:

- `_escala_figures.py` en una primera versió donava 26 encerts de 32 i la
  majoria eren falsos (trapezis, perspectiva, i etiquetes damunt la
  hipotenusa a `134` i `147`). Ara és estricte i en dona 3.
- `_comprova_grafiques.py` va donar 11 gràfiques «errònies» que eren totes
  bones: la `y` d'un `<text>` és la línia base, 3,5 px per sota de la línia
  de graella que etiqueta, i calibrar amb ella introdueix un desplaçament
  constant. Ara s'aparella cada etiqueta amb la seva línia real.
- `_plantilles.py` separa la reutilització legítima (un tetraedre regular té
  la mateixa forma a qualsevol aresta) de la que és un defecte, i té un
  tercer grup, «sense prou mesures per decidir», que **no vol dir correcte:
  vol dir no comprovat**.

## Novetat del diff-02: `_cotes.py`

`_plantilles.py` compara els **valors** de les etiquetes i no sap què mesura
cadascuna. A `193a` les dues diuen «10 cm», raó 1,00, i el donava per bo:
però una és el radi i l'altra l'altura, o sigui que la raó real és 2:1 i el
dibuix la posa a 1:1. `_cotes.py` mesura la línia de cota, no llegeix el
número, i no hi cau. Els dos programes són complementaris: l'un troba la
plantilla reutilitzada entre figures, l'altre la incoherència dins d'una.

### El detall que el fa funcionar

La primera versió aparellava cada etiqueta amb la línia de cota més propera i
donava 21 encerts, dels quals quatre prismes hexagonals eren **falsos**. A
`170c` el «5,2 cm» anava a una línia d'extensió de 55 u en comptes de a la
cota real de 31,2 u, i en sortia un ×1,76 inexistent. La diferència de
distància entre les dues candidates era de **0,1 unitats**.

El criteri que ho resol és estructural, no de distància: una cota de mesura té
els **dos** extrems recolzats sobre altres línies de cota (les d'extensió, que
van de la figura fins a la cota); una línia d'extensió en té un de lliure. Amb
això `170c`, `170d`, `170g` i `170h` surten de la llista i `193a`, `193b` i
`195c` hi entren, que és exactament al revés del que passava.

### Límit que li queda

Una figura pot contenir dos objectes dibuixats a escales diferents a propòsit
—les de semblança del full 8, on hi ha una persona i un poble— i allà comparar
cotes no té sentit. `166`, `168`, `169`, `164`, `163` i `161` surten a la
llista per aquest motiu i **no són defectes**.

## Novetat del diff-03: `_contrast.py`

A `144b` el «2 cm» del radi cau damunt de l'ompliment vermell del sector. Text
`--apagat` rgb(90,107,128) sobre `--fig-marca` rgb(179,69,60): **1,00:1**. Les
dues luminàncies són pràcticament iguals i l'etiqueta no es llegeix. Ni
l'auditor ni la capa 2 ho veuen, perquè totes dues miren posicions i mides, no
colors.

L'eina mesura les 663 etiquetes de les 185 figures. Només aquesta baixa del
4,5:1 que demana WCAG AA per a text petit; la següent va a 4,74:1.

### Tres versions llençades, per si algú hi torna a caure

Vaig fer-ne tres de dolentes abans d'encertar-la, totes basades a trobar el
text pels píxels:

1. **Color dominant al voltant del glif** → el que surt és l'antialiàsing,
   grisos intermedis entre text i fons. 15 falsos positius.
2. **Anell al voltant del text** → salta qualsevol etiqueta amb una línia
   vermella a prop, encara que reposi sobre paper. 30 falsos positius.
3. **Filtrar els blocs per forma**, perquè els traços són del mateix
   `--tinta` que les etiquetes → se'n van també les etiquetes curtes sobre
   fons difícil. Fals **negatiu** justament a `144b`.

La tercera va ser el senyal d'alarma: estava ajustant llindars perquè sortís
el cas que ja sabia, que és la manera de construir un comprovador que no
serveix. La versió bona pren les posicions **del SVG**, que ja les té, i
renderitza cada figura sola omplint el llenç perquè el `viewBox` es tradueixi
a píxels amb una regla de tres i sense desplaçaments desconeguts.

Una quarta trampa, més tonta: l'ordre dels atributs de `<text>` no és fix
(`x`, `y`, `text-anchor`, `class`), i llegir-los amb una regex posicional no
en trobava **cap**. Es llegeixen atribut a atribut.

## Novetat del diff-04: `_cotes.py` veu les alçades soltes

Els quatre trapezis del full 7 donaven **x1,00** i semblaven perfectes. No ho
eren: `140c` està dibuixat a la meitat d'alçada. L'eina només en veia les dues
bases, que sí que concorden, perquè **l'alçada no és cap `fig-cota`**: és una
línia discontínua solta. El mateix passava als prismes triangulars del full 9,
on l'altura és una línia pelada al costat del cos.

Ara es mesuren tres menes de línia:

| mena | traç | exemple | compta? |
|---|---|---|---|
| `cota` | sistema de claudàtors | tots | sí |
| `auxiliar` | alçada de trapezi o triangle, discontínua vermella | `140c`, `124c` | sí |
| `auxiliar` | alçada de prisma, línia pelada | `170b`, `172` | sí |
| `auxiliar` | segment marcat, contínua vermella | `149` (apotema) | sí |
| — | **aresta oculta**, discontínua fina | `170f`, `180a` | **no** |

L'aresta oculta no es distingeix pel gruix del traç, que seria fràgil: no té
cap etiqueta numèrica a prop, o sigui que no rep assignació i queda fora sola.

### Troballes noves

`170b` ×1,25 · `171` ×1,50 · `176a` i `176b` ×1,48 · `140c` ×2,15 · `140d` ×1,11.
Cap d'aquestes sortia abans.

### Tres correccions que ha calgut fer pel camí

1. **Els costats dels polígons ara són candidats.** A `124c` el «12 cm» del
   costat inclinat se l'emportava la línia d'alçada i sortia un fals ×1,82.
   Amb el costat com a candidat, l'etiqueta hi va, queda classificada com a
   obliqua i surt de la comparació del pla frontal.
2. **Les arrels s'han de llegir.** L'alçada de `140b` és `√164 m`, amb el glif
   `√` directament, i el patró numèric no la reconeixia.
3. **Les regles d'escala gràfica no són dibuixos a escala.** `156a`, `285*` i
   `288*` marquen 1, 2, 3 i 4 cm a intervals iguals. Comparar-hi unitats per
   centímetre no vol dir res: 9 falsos positius. Es reconeixen perquè
   diverses cotes fan exactament la mateixa llargada amb valors diferents.

### Una decisió que has de conèixer

Hi ha figures amb **dos objectes a escales diferents a propòsit**: tot el full
8, on la semblança és el tema, i les bases dibuixades a part dels `170c`-`i`.
Vaig provar de separar-les agrupant les cotes per proximitat i **el llindar em
va menjar quatre troballes bones**. Ho he canviat per un criteri explícit, i
aquestes figures no es descarten: van a una segona llista, perquè s'han de
mirar igualment sabent que la discrepància probablement és volguda.

## Novetat del diff-05: dos comprovadors de contingut

Els altres miren si la figura està ben feta. Aquests dos miren si **diu la
veritat**, que és una altra cosa.

### `_forma.py` — la forma dibuixada contra la que diu l'enunciat

`293a` diu «Dos **triangles** semblants» i dibuixa dos **quadrats**.
`293b` diu «Dues **esferes** semblants» i dibuixa dos **cubs**.

Són traçables: `293a` comparteix dibuix byte a byte amb `291b`, que va de
quadrats, i `293b` amb `292b`, que va de cubs. El generador reutilitza la
plantilla «dues figures semblants» sense mirar quina forma anomena el text.
Ni l'auditor ni cap mesura ho poden veure: la figura està ben dibuixada, ben
etiquetada i a l'escala correcta. Només és un cub on hi hauria d'haver una
esfera.

84 figures comprovades de 185; les altres no anomenen cap forma a l'un o a
l'altre costat i no es poden comparar.

**Un fals positiu que vaig haver de matar:** buscava la subcadena `con recte`
per detectar un con, i «Un con té 4 cm de radi» no hi encaixava. `188` sortia
com si dibuixés un con on l'enunciat demana un cercle, quan l'enunciat diu
totes dues coses i és correcte. Les claus ara porten frontera de paraula.

### `_contradiu.py` — el dibuix contra la resposta

`155a` pregunta «són semblants?», la resposta correcta és **No**, i el dibuix
en mostra dos d'exactament semblants: el segon és el primer multiplicat per
1,222 a tots els costats. Qui raoni mirant la figura contesta «sí», i les dues
opcions «Sí» hi són. Igual a `155b` i `155c`. I a `154a` l'enunciat parla d'un
triangle petit i un de gran amb k = 4/3, i els dos polígons són idèntics.

L'origen és un triangle base fix, `[79,7 · 87,5 · 90,0]`, reutilitzat escalat
sense mirar les mides etiquetades.

Només salta quan el dibuix i la resposta van en direccions **contràries**. Que
dues figures es dibuixin semblants no és cap error si la resposta és que ho
són.

## Novetat del diff-06: `_contradiu.py` amb quatre comprovacions

La versió del diff-05 només mirava els ítems amb resposta de sí/no, i se li
escapaven `154b` i `154c`, on la resposta és numèrica. Ara en fa quatre.

**A · La forma dins d'un mateix triangle.** Dues arestes etiquetades «3 cm» i
«5 cm» han de mesurar unitats proporcionals a 3 i a 5. Sis casos, tots al
full 8:

| ítem | desviació | detall |
|---|---|---|
| `154d` | ×2,00 | «2 cm» dibuixat 90 u i «5 cm» 112 u |
| `154d` | ×1,38 | «3,2 cm» 99 u i «5 cm» 112 u |
| `154c` | ×1,25 | «5 cm» i «4 cm» dibuixats **tots dos 90 u** |
| `155d` | ×1,15 | «10 cm» 259 u i «13 cm» 292 u |
| `155b` | ×1,14 | «9 cm» 72 u i «7 cm» 63 u |
| `155b` | ×1,07 | «11 cm» 90 u i «9,1 cm» 80 u |

Les línies soltes (cotes, marques, alçades) entren com a candidates rivals: una
etiqueta que pertany a una cota no s'ha d'assignar a cap aresta. Sense aquesta
guarda, l'alçada dibuixada dins d'un triangle se l'enduia el costat més
proper.

**B · El dibuix contra una resposta de sí/no.** És la del diff-05. Quatre
casos: `154a`, `155a`, `155b`, `155c`.

**C · L'encapçalament els declara semblants i el dibuix no ho són.** Dos
casos, `154b` i `154c`: l'encapçalament diu «aquests parells de triangles
semblants» i les formes dibuixades són 1,43 i 1,13.

**D · L'encapçalament afirma el que la resposta nega.** Un cas a tot el banc:
`154d`. L'encapçalament diu «parells de triangles **semblants**», l'enunciat
pregunta «Són semblants?» i la resposta correcta és **No**. Com que cada ítem
es carrega sol (`practica.html?full=8&q=154d`, amb recàrrega completa),
l'alumne llegeix l'encapçalament sencer abans de respondre.

C i D es podrien trepitjar a `154d`. Quan salta D, C calla: allà el dolent és
l'encapçalament, no el dibuix, i reportar-ho dos cops despista.

## Novetat del diff-07: `_etiquetes.py`

**A · Una etiqueta plantada a la cota d'un altre objecte.** A `169` el
«52,5 m», que és l'alçada de l'edifici, va a la cota de 22 u de l'home, i la
cota de 48 u de l'edifici es queda buida. 1 cas de 185.

**B · La marca vermella no és la línia més propera a la «x».** Les cinc
figures de Tales marquen en vermell **una de les dues paral·leles** mentre la
incògnita és en una altra banda. Trenca la convenció del propi projecte
—a `123a` el vermell és la diagonal que es demana, a `185a` el radi, a `188`
la generatriu, a `127a` l'apotema— i ni tan sols marca les dues paral·leles.

### Totes dues van néixer com una idea pitjor

**A** mesurava al principi la **separació** entre caixes d'etiqueta. Sortien
quatre parells del bloc `aplicacions` separats per 1 a 5 unitats i no hi
havia manera de dir quins eren un defecte i quins només anaven justos. Un
llindar de proximitat no distingeix «va just» de «va malament».

La formulació bona no té llindar: **una línia de cota només pot mesurar una
cosa**. Si dues etiquetes numèriques resolen a la mateixa línia *i* la figura
té una altra línia de mesura sense cap etiqueta, la sobrant és a la línia
equivocada. Sense la condició de la línia òrfena sortien `154b`, `154c` i
`189`, que no ho són.

**B** reportava al principi les marques vermelles sense cap etiqueta a prop:
28 de 64, i la majoria correctes (una diagonal marcada no ha de portar
etiqueta si el que es demana és justament la seva llargada). La formulació
bona compara distàncies: si la figura té una «x», la marca hauria de ser la
línia més propera.

### Un llindar que sí que importa

`_cotes.py` descarta les línies de menys de 20 u perquè a les cotes normals
això són les puntes. Aquí cal baixar-ho a **15**: l'alçada de l'Anna a `166`
és una cota de **17,0 u**, i amb el llindar de 20 quedava fora i «1,7 m»
anava a parar a la cota horitzontal. `166` sortia com a defecte i **no ho és**.
La de `169` fa 21,9 u, i per això aquella sí que es conservava.

`_cotes.LLARG_MINIM` és una variable de mòdul: es guarda i es torna a deixar
com estava, perquè importar `_etiquetes` no canviï el comportament de
`_cotes` per a qui el faci servir després.

## Què NO hi ha

Cap correcció de contingut. Els 22 ítems amb el dibuix desproporcionat, els
23 del full 9 que repeteixen l'enunciat i els `<title>` que diuen «Núvol de 1
punts» segueixen igual: són decisions de generador i encara no me les has
demanat.
