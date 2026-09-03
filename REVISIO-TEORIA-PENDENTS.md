# Enllaços de teoria: casos oberts

Acompanya el `repas-diff-11`, que arregla **28 fitxes** on la destinació era
demostrablement equivocada i hi havia una destinació millor **ja present al
mapa**.

Una segona tanda n'ha tocat **22 més**, aquestes sense poder-les verificar del
tot: els cinc cilindres del full 9 (§1), les disset de dispersió del full 11
(§2, on el que s'ha tret és el rètol fals, no la destinació) i l'enunciat trencat
de la `284` (§8). Les dues primeres porten al `nota` de `teoria.json` la
comprovació concreta que les tanca.

Aquí queda el que segueix obert, més tres afirmacions que hem hagut de descartar.

---

## 1 · Els cilindres del full 9 — 5 fitxes · **APLICAT, a confirmar**

`9:cossos_rodons` anava a **«Con, esfera i l'efecte de la raó»** (3r ESO · U3 ·
A5), i el bloc es diu *«Cilindres, cons i l'esfera»*. Cinc fitxes són de
cilindres i rebien una activitat que no els anomena: `184`, `185a`, `185b`,
**`186`** i `187`.

S'han mogut a l'A4 amb quatre regles d'exercici (`184`, `185`, `186`, `187`).
Les de con i esfera (`188`–`191`) i les mixtes (`193a`, `193b`) es queden a l'A5.

**Sobre què ho sustenta, i què no.** Es va argumentar que el repositori ja s'hi
contradiu, perquè el volum d'un cilindre (`195c`) va a l'A4 i l'àrea a l'A5.
Aquest argument és **fals** i no s'ha de tornar a fer servir: el repartiment és
àrea contra volum i és consistent per als tres cossos.

| cos | àrea | volum |
|---|---|---|
| cilindre | `184`–`187` → A5 *(ara A4)* | `195c` → A4 |
| con | `188`–`190` → A5 | `195e` → A4 |
| esfera | `191` → A5 | `199` → A4 |

El que sí que sustenta el canvi és més modest: el títol de l'A5 enumera el con i
l'esfera i **no** el cilindre, i el de l'A4 diu «àrees i volums dels cossos
**bàsics**». Entre dues destinacions que no podem verificar, s'ha triat la que
almenys no contradiu l'enunciat que l'alumne acaba de llegir.

**La comprovació que ho tanca:** obrir l'A5 del llibre i mirar si hi surt l'àrea
lateral del cilindre. Si hi surt, esborrar les quatre regles d'exercici i el que
falla és el títol de l'A5.

A part: `193a` i `193b` comparen un cilindre amb un con, i `199` és un cub i una
esfera amb el mateix volum (necessita l'àrea de l'esfera, que és de l'A5, i va a
l'A4). Els dos casos són discutibles vagi on vagi.

---

## 2 · La dispersió del full 11 — 17 fitxes · **MIG TANCAT**

`dispersio` deia **«Estadística de dues variables»** (4t ESO · U9). La descripció
del bloc és *«Com d'esteses estan les dades: recorregut, variància, desviació
típica i coeficient de variació»*, i les 17 fitxes (`268a`–`274c`) són totes
d'**una sola** variable. No hi ha ni correlació, ni regressió, ni núvols de punts.

L'entrada **no té `act`**, o sigui que l'enllaç obre la U9 sencera i el títol era
només el rètol. La unitat pot ser perfectament la bona; el que era fals era el
rètol. S'ha tret el `titol`, i `js/teoria.js` hi posa «4t ESO · Unitat 9», que és
exactament el que l'enllaç fa.

Queda obert **quina activitat** de la U9 cobreix la dispersió univariant. Si n'hi
ha una de desviació típica, afegir-hi `act` i el seu títol; si la U9 no en té cap,
el que toca és treure l'entrada i deixar les 17 fitxes sense icona.

Nota: `273a` i `273b` parlen de «les dues variables», però comparen dos conjunts
per separat amb el coeficient de variació. Segueix sent univariant.

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

**`284` no es podia resoldre. Arreglat.** L'`encapcalament` era **buit** i
l'enunciat sencer, *«Quin és el preu final?»*: ni preu de partida ni percentatges.

No calia reescriure res. A `tools/c_percentatges.py` l'enunciat ja hi era, ben
escrit i sense fer servir: la constant `E284` («Un preu de $500$ € puja un
$20\,\%$ i, al cap d'un temps, el preu nou baixa un $20\,\%$») es definia i
tot seguit la crida a `Q()` passava `ex_text=""`. És l'única crida del fitxer amb
`ex_text` buit, i les altres catorze passen la seva constant. Un descuit de
teclat, no una fitxa a mig fer. Ara passa `ex_text=E284`.

**`242` està al bloc que no toca.** «Llancem un dau i sumem totes les cares
menys la de dalt» és regla de Laplace pura, sense cap recompte combinatori, i
està al bloc `combinatoria`. S'ha corregit **l'enllaç** amb una regla
d'exercici, que és el canvi segur. La correcció de fons és moure la fitxa al
bloc `laplace` al generador del banc; llavors la regla d'exercici sobra i es pot
esborrar.

---

## 9 · Les 18 entrades amb títol d'activitat i sense `act`

Ometre `act` és **deliberat**: el `_llegiu-me` de `teoria.json` ho diu («val més
obrir la unitat que enviar l'alumne a una activitat que no parla del que
buscava»), i l'enllaç obre la unitat desplegada. No és cap defecte.

El que sí que val la pena mirar és doble:

1. **El rètol.** A l'alumne li surt «3r ESO · La funció més recta», que és el nom
   d'una **activitat**, i en clicar-hi arriba a la **unitat sencera**.
2. **No es validen mai contra el llibre.** `tests/teoria.test.js:137` fa
   `if (!d.act || !d.titol) return;`. Si el llibre canvia un títol, aquestes 18
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
