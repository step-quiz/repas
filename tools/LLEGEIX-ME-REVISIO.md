# Diff de la revisió — figures

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

## Què NO hi ha

Cap correcció de contingut. Els 22 ítems amb el dibuix desproporcionat, els
23 del full 9 que repeteixen l'enunciat i els `<title>` que diuen «Núvol de 1
punts» segueixen igual: són decisions de generador i encara no me les has
demanat.
