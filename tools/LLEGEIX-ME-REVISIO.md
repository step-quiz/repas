# Diff de la revisió — figures

> **diff-01** (2026-08-31): correcció del `min()` + 6 eines.
> **diff-02** (2026-08-31): `_cotes.py` nou, i avís de forat a `_plantilles.py`.
> **diff-03** (2026-08-31): `_contrast.py` nou.

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

## Què NO hi ha

Cap correcció de contingut. Els 22 ítems amb el dibuix desproporcionat, els
23 del full 9 que repeteixen l'enunciat i els `<title>` que diuen «Núvol de 1
punts» segueixen igual: són decisions de generador i encara no me les has
demanat.
