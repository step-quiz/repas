# Enllaços de teoria: casos oberts

Acompanya el `repas-diff-11`, que arregla **28 fitxes** on la destinació era
demostrablement equivocada i hi havia una destinació millor **ja present al
mapa**. Aquí queda el que no es pot tancar sense veure el llibre, més tres
afirmacions que hem hagut de descartar.

---

## 1 · Els cilindres del full 9 — 5 fitxes

`9:cossos_rodons` va a **«Con, esfera i l'efecte de la raó»** (3r ESO · U3 ·
A5), i el bloc es diu *«Cilindres, cons i l'esfera»*. Cinc fitxes són de
cilindres i reben una activitat que no els anomena: `184`, `185a`, `185b`,
**`186`** i `187`.

**Compte amb l'argument fàcil.** Es podria dir que el repositori ja s'hi
contradiu, perquè el volum d'un cilindre (`195c`) va a l'A4 i l'àrea a l'A5.
Però això passa amb els tres cossos:

| cos | àrea | volum |
|---|---|---|
| cilindre | `184`–`187` → **A5** | `195c` → **A4** |
| con | `188`–`190` → **A5** | `195e` → **A4** |
| esfera | `191` → **A5** | `199` → **A4** |

El repartiment és **àrea contra volum**, i és consistent. No hi ha cap
contradicció, i per tant això **no demostra** que el destí correcte sigui l'A4.

**El que cal decidir:** si l'activitat 5 del llibre cobreix l'àrea del cilindre
o només la del con i l'esfera.

- Si la cobreix → el que falla és el títol de l'A5, no el mapa.
- Si no la cobreix → cal moure `184`, `185`, `186` i `187` a l'A4, amb quatre
  regles d'exercici (les d'exercici guanyen a les de bloc):

```json
"184": { "curs": "3eso", "ud": 3, "act": 4, "titol": "Àrees i volums dels cossos bàsics" },
"185": { "curs": "3eso", "ud": 3, "act": 4, "titol": "Àrees i volums dels cossos bàsics" },
"186": { "curs": "3eso", "ud": 3, "act": 4, "titol": "Àrees i volums dels cossos bàsics" },
"187": { "curs": "3eso", "ud": 3, "act": 4, "titol": "Àrees i volums dels cossos bàsics" }
```

A part: `193a` i `193b` comparen un cilindre amb un con, i `199` és un cub i una
esfera amb el mateix volum (necessita l'àrea de l'esfera, que és de l'A5, i ara
va a l'A4). Els dos casos són discutibles vagi on vagi.

---

## 2 · La dispersió del full 11 — 17 fitxes

`dispersio` va a **«Estadística de dues variables»** (4t ESO · U9). La
descripció del bloc a `build.py` és *«Com d'esteses estan les dades: recorregut,
variància, desviació típica i coeficient de variació»*, i les 17 fitxes
(`268a`–`274c`) són totes d'**una sola** variable. No hi ha ni correlació, ni
regressió, ni núvols de punts.

És l'error més gran per volum, i no s'ha arreglat perquè **no sabem quina
activitat del llibre cobreix la dispersió univariant**. Si a la U9 de 4t hi ha
una activitat de desviació típica, el canvi és una línia.

Nota: `273a` i `273b` parlen de «les dues variables», però comparen dos
conjunts per separat amb el coeficient de variació. Segueix sent univariant.

---

## 3 · La fitxa 167 — 1 fitxa

`167` («ombra d'un edifici amb angles d'elevació de 60° i 30°») estava a
«Mesurar amb l'ombra», que és de semblança. Amb angles d'elevació això és
**trigonometria**, i **al mapa no hi ha cap activitat de trigonometria**. Per
això no s'ha mogut: no hi havia on.

---

## 4 · La fitxa 95 — 1 fitxa

`95` (triangle rectangle de perímetre 24 amb un catet ¾ de l'altre) va a
«Equacions de 1r grau». La resolució del projecte fa servir Pitàgores per
treure la hipotenusa (`5/4·a`) i després resol `a + ¾a + 5/4a = 24`, que és
lineal. És un cas mixt: la classificació actual és defensable.

---

## 5 · Els exponents negatius dins de `2:combinades` — 8 fitxes

El bloc sencer s'ha mogut a «Les regles del joc de les potències» (3r ESO · U1
· A2), que és on ja van `basiques` i `verifica`. Però `45a`–`45h` porten
exponent negatiu, i el bloc `2:negatiu` va a l'A3, «L'exponent negatiu i les
arrels». Si vols afinar-ho, una regla per a l'exercici 45 ho resol.

---

## 6 · Tres blocs on el títol podria quedar-se curt — 52 fitxes

| bloc | fitxes | dubte |
|---|---|---|
| full 1 · `fraccions` → «Fraccions: les quatre operacions» | 13 (`18a`–`20c`) | Són equivalència i simplificació, no les quatre operacions |
| full 4 · `divisio` → «Monomis i polinomis» | 21 (`65a`–`69d`) | Són divisió llarga i Ruffini |
| full 10 · `concepte_funcio` → «La funció més recta» | 18 (`200a`–`206c`) | Són domini, recorregut i creixement de paràboles, hipèrboles i corbes lliures |

En tots tres el destí pot ser correcte si l'activitat del llibre és més ampla
que el seu títol. Cal mirar-ho.

---

## 7 · «Con, esfera i l'efecte de la raó» a `8:semblanca_arees` — 13 fitxes

El bloc va de com afecten la raó *k* les àrees i els volums, i «l'efecte de la
raó» és literalment això. Però cap de les 13 fitxes no parla d'un con, i només
`293b` d'una esfera: són quadrats, cubs, triangles i una maqueta d'edifici.

El destí sembla correcte i el que queda curt és el rètol que veu l'alumne. Ho
deixem obert perquè el títol és el del llibre i no el podem canviar des d'aquí.

---

## 8 · Dues coses que no són d'enllaços

**`284` no es pot resoldre.** L'`encapcalament` és **buit** i l'enunciat sencer
és *«Quin és el preu final?»*. Ni preu de partida ni percentatges. El 500 € i
la pujada i la baixada només surten a les opcions (`'$500$ €: torna al preu de
partida.'`) i a les pistes. L'enllaç sí que s'ha corregit —ara va al factor
multiplicador, com el `280`— però **la fitxa necessita que algú li reescrigui
l'enunciat**.

**`242` està al bloc que no toca.** «Llancem un dau i sumem totes les cares
menys la de dalt» és regla de Laplace pura, sense cap recompte combinatori, i
està al bloc `combinatoria`. S'ha corregit **l'enllaç** amb una regla
d'exercici, que és el canvi segur. La correcció de fons és moure la fitxa al
bloc `laplace` al generador del banc; llavors la regla d'exercici sobra i es pot
esborrar.

---

## 9 · Les 19 entrades amb títol d'activitat i sense `act`

Ometre `act` és **deliberat**: el `_llegiu-me` de `teoria.json` ho diu («val més
obrir la unitat que enviar l'alumne a una activitat que no parla del que
buscava»), i l'enllaç obre la unitat desplegada. No és cap defecte.

El que sí que val la pena mirar és doble:

1. **El rètol.** A l'alumne li surt «3r ESO · La funció més recta», que és el nom
   d'una **activitat**, i en clicar-hi arriba a la **unitat sencera**.
2. **No es validen mai contra el llibre.** `tests/teoria.test.js:137` fa
   `if (!d.act || !d.titol) return;`. Si el llibre canvia un títol, aquestes 19
   entrades no se n'assabenten. Una comprovació que, sense `act`, compari el
   `titol` amb el de la **unitat** ho taparia.

---

## 10 · Tres afirmacions descartades

Perquè no es tornin a aplicar.

**«El bloc `5:problemes` té fitxes que no són de primer grau.»** Fals per a tres
de les quatre. Les resolucions que porta cada fitxa ho desmenteixen:

| fitxa | afirmació | el camp `res` de la fitxa |
|---|---|---|
| `90` | «surt una equació de segon grau» | `(x+1)²−x² = 567 → 2x+1 = 567`. Els quadrats es cancel·len |
| `99` | «dues incògnites, sistema» | `n − n/5 = 60 → 4n = 300`. Una incògnita |
| `100` | «dues incògnites, sistema» | `2(2n)+3n = 8,75 → 7n = 8,75`. Una incògnita |

**«El repositori ja es contradiu amb els cilindres.»** No: el repartiment és per
àrea contra volum i és consistent per als tres cossos. Vegeu el punt 1.

**«El mapa té 57 regles.»** En té **65**: 0 a `items`, 13 a `exercicis` (ara 22)
i 52 a `blocs`.

---

## 11 · La comprovació que falta a `tools/_teoria.py`

L'eina en porta dues (conceptes del títol contra els enunciats, i entrades sense
`act`). N'hi havia d'haver una tercera: trobar dues destinacions separades per
dos cursos o més que rebin exercicis que demanen el mateix. El cas real és el
`109` («tres de cada cinc alumnes, en percentatge», 1r ESO) contra `278a` («quin
percentatge representa 18 de 60», 4t ESO).

Es va escriure comparant el vocabulari de les dues destinacions amb l'índex de
Jaccard i **no troba el cas**, ni tan sols amb el fitxer sense corregir: el `109`
és una sola fitxa d'una frase i la coincidència de mots amb les 26 del factor
multiplicador és massa baixa. Comparar vocabulari no és comparar significat.

S'ha tret en comptes de deixar-la fer bonic. Aquest tipus de contradicció
s'ha de buscar a mà.
