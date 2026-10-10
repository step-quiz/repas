# Revisió de les pistes i dels enllaços T/V — anàlisi

**Data:** 10/10/2026 · **Abast:** les 951 fitxes dels 12 fulls (`data/fullN.js`),
`data/teoria.json` i `data/videos.json`.

Quatre objectius:

1. revisar (i millorar) la **pista 1**;
2. revisar (i millorar) la **pista 2**;
3. comprovar que els enllaços **T** (Teoria) van al lloc precís;
4. comprovar que els enllaços **V** (Vídeo) van al lloc precís.

Aquest document és **només l'anàlisi**: no s'ha tocat cap pista ni cap mapa. Les
propostes de cada secció estan pensades per aplicar-se després, a
`tools/c_<tema>.py` (pistes) i a `data/teoria.json` / `data/videos.json` (enllaços).

---

## 0. Resum

| | |
|---|---|
| Fitxes | 951 |
| Amb 2 pistes / 1 pista / 3 pistes | 888 / **50** / 13 |
| Fitxes amb un joc de pistes **idèntic** al d'una altra fitxa | **189** (el 20 %) |
| Fitxes del full 1 amb les dues pistes genèriques | 82 de 144 |
| Errors de contingut en una pista | **2** (§2.2) |
| Pistes que diuen la resposta (o la deixen a un pas trivial) | ~40 (§2.3) |
| Fitxes sense T / sense V | 56 (tot el full 3, a posta) / 773 |
| Destinacions T diferents / vídeos diferents | 32 / 22 |
| Destinacions T que **no encaixen** amb el contingut de la fitxa | 20 fitxes, més les 18 de `concepte_funcio` (§3.2) |
| Encaixos V discutibles / fitxes que podrien tenir vídeo i no en tenen | 5 grups / ~25 fitxes (§4) |

**El que NO s'ha pogut fer:** obrir el llibre (`llibre.step-quiz.net`) i YouTube.
Des d'aquest entorn el proxy de xarxa els bloqueja. Per tant, de la T i la V
s'ha comprovat **que la destinació encaixa amb el que demana la fitxa** (segons el
títol de l'activitat o del vídeo), però **no** que l'ancoratge `#udU-A` o
l'identificador de YouTube portin de debò a aquest contingut. Això últim queda en
dues llistes de comprovació manual (§3.4 i §4.4). Vegeu també §6 per a com
desbloquejar-ho.

Conclusions principals:

- **Pistes:** el nivell general és bo (fulls 2, 3, 6, 7, 11 i 12 molt bons). Els
  problemes són de tres tipus: **pistes genèriques copiades** a tots els apartats
  d'un exercici (sobretot fulls 1, 4, 5, 8 i 10), **pista 2 que regala la
  resposta**, i **44 fitxes del full 10 sense pista 2**.
- **T:** les destinacions són coherents per bloc, però hi ha fitxes que
  hereten el destí del bloc i no hi encaixen (angles i perímetres enviats a
  Pitàgores, una funció lineal enviada a la paràbola, problemes de sistemes
  enviats a equacions de 1r grau...). I hi ha una sospita forta: les equacions de
  2n grau van a **4t ESO aplicades** quan probablement són a **3r ESO U5 A6/A7**.
- **V:** els encaixos són bons. Hi ha 5 casos discutibles i un grapat de fitxes
  que fan exactament la destresa d'un vídeo existent i no l'enllacen.

---

## 1. Com funciona (el mínim per entendre les propostes)

- Les pistes s'escriuen a `tools/c_<tema>.py`, dins de cada crida `Q(...)`. El
  fitxer `data/fullN.js` és **generat**: no s'edita. Després de tocar un
  `c_<tema>.py` cal `cd tools && python3 build_tot.py`.
- Cada pista té cost per a la nota de feina: a la primera 1; **una pista 0,95;
  dues o més 0,85** (`js/codi.js`). Per tant la pista 1 ha de ser la «barata»
  (orienta) i la 2 la «cara» (fa el primer pas), però **cap de les dues no ha de
  donar la resposta**: si la dona, una fitxa feta amb dues pistes val 0,85 sense
  que l'alumne hagi resolt res.
- L'**itinerari** barreja exercicis de temes diferents: una pista que diu «com a
  l'exercici 295» o «exercici anterior» pot arribar a un alumne que no l'ha fet.
- T i V es busquen amb la mateixa cascada: ítem → exercici → bloc
  (`js/teoria.js`). Una fitxa sense entrada pròpia **hereta el destí del bloc**:
  és d'aquí que surten la majoria de desajustos de §3.2.

---

## 2. Pistes

### 2.1 Xifres per full

| Full | Fitxes | P1 compartida | P2 compartida | Totes dues compartides | 1 pista | 3 pistes |
|---:|---:|---:|---:|---:|---:|---:|
| 1 | 144 | 92 | 82 | **82** | 0 | 0 |
| 2 | 89 | 9 | 0 | 0 | 0 | 0 |
| 3 | 56 | 7 | 0 | 0 | 1 | 1 |
| 4 | 71 | 15 | 16 | 12 | 0 | 0 |
| 5 | 99 | 36 | 37 | **30** | 1 | 0 |
| 6 | 48 | 4 | 12 | 4 | 0 | 0 |
| 7 | 62 | 9 | 0 | 0 | 0 | 0 |
| 8 | 59 | 21 | 25 | 13 | 0 | 0 |
| 9 | 52 | 6 | 4 | 4 | 1 | 3 |
| 10 | 85 | 40 | 16 | 16 | **44** | 0 |
| 11 | 91 | 19 | 11 | 6 | 0 | 0 |
| 12 | 95 | 2 | 2 | 0 | 3 | 9 |

«Compartida» = el mateix text exacte apareix en una altra fitxa.

### 2.2 Errors de contingut (corregir primer)

**`236f` — fet fals sobre la baralla.** P2: «Un coll té les cartes de l'1 al 9
més una figura.» A la baralla espanyola de 40 cartes, cada coll té **de l'1 al 7 i
tres figures** (sota, cavall i rei). La mateixa errada és al retorn d'un
distractor de la mateixa fitxa («també inclou una figura a més dels valors de l'1
al 9»). I contradiu `241d`, que diu (bé) que hi ha 3 figures per coll.
Font: `tools/c_probabilitat.py:255-264`.

- P2 proposada: «A la baralla de 40 cartes, cada coll té les cartes de l'$1$ al
  $7$ i tres figures: sota, cavall i rei.»
- El distractor «9 resultats, de l'1 al 9, sense comptar la figura» s'hauria de
  canviar per «$7$ resultats, de l'$1$ al $7$» amb el retorn «T'has descomptat
  les tres figures: $7+3=10$».

**`295d` — notació incorrecta.** P2: «$3=-1\cdot-2+n$» (dos operadors seguits,
sense parèntesi). Ha de ser $3=-1\cdot(-2)+n$. La resolució de la mateixa fitxa ja
ho fa bé. És el format del generador (`tools/c_funcions_prod.py:80`): cal posar
`(%d)` com a la resolució; afecta qualsevol apartat amb $x_0<0$.

### 2.3 Pistes que donen la resposta

La pista 2 diu literalment la resposta, o la deixa a una operació trivial:

| Fitxa | Pista 2 actual | Problema |
|---|---|---|
| `56a` | $a_n=3\cdot5^{\,n-1}$. | És l'opció correcta, literal |
| `321d` | $10^{-2}=\dfrac1{10^2}=\dfrac1{100}$. | Literal |
| `40c` | Aïlla $a$: $a=8$. | Literal |
| `46b` | …la base que falta és $-3$. | Literal |
| `331a` | …el quocient és $1x-2$. | Literal |
| `72b` | …$=(a+b)^2-c^2$. | Literal |
| `74e`, `74f`, `74g` | …$=2(x-2)(x+2)$ / $x(x-5)(x+5)$ / $(7-x)(7+x)$ | Literal |
| `74a`–`74d` | «reconeix que $x^2-2x+1$ és … $(x-1)^2$» | P1 + P2 = resposta |
| `20c` | $121=11\cdot11$. | Amb la P1, resposta immediata |
| `39a`–`39f` | $\square=2^{8-3}$ | Queda restar dos nombres (fitxa de dif. 3) |
| `46c`, `43a`–`43e`, `323`, `324` | $(2^3)^4=2^{3\cdot4}$… | Queda una multiplicació |
| `336a`, `336c`, `337b`, `338c` | «davant de la $x$ hi ha un $3$», «$-x$ és $-1\cdot x$»… | Literal (dif. 1) |
| `250a`, `250d`, `253c` | «la seva freqüència relativa és $\frac{30}{100}$», «la freqüència és $0$», «Cap» | Literal |
| `263c` | La freqüència màxima és $7$. | Queda llegir la taula |
| `228b` | «Suma-les totes amb la de $[165,170)$, que és $5$.» | Queda sumar $2+4+6+5$ |

Criteri proposat: la P2 fa **el primer pas concret** i deixa a l'alumne **el pas
que dona la resposta**. Exemples a §2.10.

### 2.4 Fitxes amb una sola pista (50)

- **Full 10 (44):** `200a`, `200c`, `201a`–`201d`, `202a`–`202d`, `203a`–`203d`,
  `206a`–`206c`, `207a`–`207d`, `208a`–`208f`, `209a`–`209d`, `212a`–`212d`,
  `214a`–`214b`, `215`, `216a`–`216d`, `217a`–`217b` (`tools/c_funcions.py`).
- **Altres (6):** `51a`, `77a`, `195f`, `240d`, `306a`, `319`.

Al full 10 la P1 és, a més, la mateixa per a tots els apartats de cada exercici
(207, 208, 209, 212, 214, 216). La P2 nova hauria de ser **específica de
l'apartat** (per exemple, a `208e`: «Aquí el pendent és $-\frac{12}{5}$: mira'n el
signe»).

### 2.5 Pistes genèriques copiades a tots els apartats

189 fitxes comparteixen el joc sencer de pistes amb una altra. Les més
rellevants, per ordre de prioritat:

| Prioritat | Fitxes | Pistes actuals (P1 / P2) | Per què millorar-les |
|---|---|---|---|
| **Alta** | `12a`, `12b`, `17` | «Descompon en factors primers» / «Agafa NOMÉS (o TOTS) els factors…» | Són **problemes**: la dificultat és decidir si és m.c.d. o m.c.m., i la pista se la salta. A `12a` el m.c.d. és 1 i «agafa els factors comuns» confon (no n'hi ha) |
| **Alta** | `82a`–`82i` | «Treu factor comú $x$…» / «Un producte val zero…» | No encaixa a `82e` (ja ve factoritzada), `82g` i `82h` (cal passar-ho tot a un costat primer; a `82h` l'error típic és dividir per $x$ i perdre $x=0$) |
| **Alta** | `71a`–`71f` | «Comprova si és diferència de quadrats o quadrat d'un binomi» / «Un cop identificat el patró, escriu-lo com a producte» | La P2 no afegeix res. Cada apartat té un patró diferent |
| **Alta** | `76a`–`76d`, `76f` | «Multiplica pel denominador» / «Aïlla $x$ dividint pel nombre que l'acompanya» | A `76a` i `76b` ($\frac x5=3$, $\frac x2=-21$), després del primer pas la $x$ ja està sola: la P2 no té sentit |
| Mitjana | `80a`–`80g`, `81a`–`81g` | Regla del discriminant, la mateixa a 14 fitxes | Una P2 amb $a$, $b$, $c$ identificats ajuda sobretot a `80g` i `81b`/`81d` ($a<0$) |
| Mitjana | `26a`–`26f` | «Mira on comença la barra del període…» / «Un exacte s'acaba…» | A `26b` i `26f` (exactes) la P1 parla d'anteperíode, que no hi és |
| Mitjana | `28a`–`28l`, `30b`–`30f` (17) | Regla general del numerador / del denominador | La P2 podria dir, per a cada apartat, quin és el període i quin l'anteperíode (el generador `item_periodic` ja té les dades) |
| Mitjana | `22a`–`22e` | «Escriu l'enter com una fracció» / «Redueix a denominador comú» | `22b` i `22d` tenen un doble signe menys, que és la trampa real: la pista no el menciona |
| Mitjana | `24a`–`24f`, `25d` | «Primer la multiplicació» / «numerador per numerador…» | A `24b`, `24d` l'operació és enter × fracció (l'error catalogat és multiplicar també el denominador); a `24e` cal simplificar abans |
| Baixa | `6`, `7`, `9`, `10` | «Descompon…» / «Agafa NOMÉS / TOTS…» | Correctes. Podrien recordar que el signe no compta ($\operatorname{m.c.d.}(45,-27)$) |
| Baixa | `18`, `27`, `29`, `33`, `63`, `278`, `285`–`288`, `180`, `297`, `299`–`301` | Regla general | Correctes; millorables amb la dada concreta a la P2 |

### 2.6 Pistes buides (la P2 no aporta res)

`223a` «Calcula aquest producte.» · `231` «Suma-les totes.» · `220a` «Compta-les
totes abans de donar el resultat final.» · `226a` (repeteix la P1) · `308a`,
`309b`, `315a` «Multiplica-les.» · `306c`, `310a` (P3). No són errors, però fan
pagar 0,85 per res. Alternativa: substituir-les per una comprovació («Si et surt
més de 30, has comptat alguna dada dues vegades») o eliminar-les si la fitxa en té
una altra.

### 2.7 Pistes que remeten a un altre exercici

`296a`–`296c` («aïlla $n$ **com a l'exercici 295**»), `219d` («compara-ho amb
els diners gastats pels amics, **exercici anterior**»), `25b` («compara aquest
apartat amb l'anterior»), `239e` («compara-ho amb l'apartat c)»). Amb l'itinerari
i amb l'accés directe per bloc, l'alumne pot no haver-los vist. Les que ja
porten la dada (`51b`, `176b`, `196b`, `310b`, `315b`, `315c`, `317`) són
correctes.

### 2.8 Pista 1 massa forta

En alguns blocs la P1 ja dona tot el plantejament i la P2 només diu «aïlla»:

- `152a`–`152f`, `161`, `163`, `164`, `168`, `169`: la P1 escriu la proporció
  sencera ($\frac{2{,}5}{2}=\frac x3$); la P2 és «Aïlla $x$ multiplicant en creu».
  La dificultat real és **saber quin segment correspon a quin**: això hauria de
  ser la P1, i la proporció, la P2.
- Full 9 (`170b`–`170i`, `171`–`173`, `177`, `179`, `181`, `183`): la P1
  calcula l'àrea de la base i la P2 l'àrea lateral; a l'alumne només li queda
  sumar. Seria millor P1 = «àrea total = 2·base + lateral; la base és un…», P2 =
  les dues fórmules amb les dades.

### 2.9 Pistes que no encaixen amb la fitxa (a part de §2.5)

- `12a`: la P2 diu «agafa els factors comuns», i no n'hi ha cap (m.c.d. $=1$).
- `26b`, `26f`: la P1 parla de la barra del període en una fitxa d'exactes.
- `76a`, `76b`: vegeu §2.5.
- `82e`, `82g`, `82h`: vegeu §2.5.
- `297c` (recta horitzontal per $(7,-3)$): les pistes genèriques («el pendent diu
  quant puja…») no diuen el que importa: horitzontal → $m=0$ → $y$ constant.

### 2.10 Criteri proposat i exemples de reescriptura

**Criteri**

- **P1 — on mirar.** El concepte o la decisió clau de *aquesta* fitxa (quina
  fórmula, quin cas, quina trampa). No calcula res.
- **P2 — el primer pas.** Fet amb les dades de la fitxa, o identificant-ne les
  parts. **Mai** el resultat final ni el pas que el dona de seguida.
- Cap pista no remet a un altre exercici sense donar-ne la dada.
- Pista genèrica només quan l'apartat és procediment pur; fins i tot llavors, la
  P2 específica.

**Exemples** (text proposat; els números estan comprovats)

| Fitxa | P1 | P2 |
|---|---|---|
| `12a` (cordes de 4, 6 i 9 m) | Els trossos han de cabre un nombre exacte de vegades a cada corda: la longitud ha de **dividir** $4$, $6$ i $9$. El més gran possible és el m.c.d. | $4=2^2$, $6=2\cdot3$, $9=3^2$: hi ha cap factor primer que surti als tres? |
| `17` (fanals cada 12 i 18 m) | Els fanals tornen a coincidir a una distància que és **múltiple** de $12$ i de $18$ alhora: la primera vegada és el m.c.m. | $12=2^2\cdot3$ i $18=2\cdot3^2$: agafa cada primer amb l'exponent més gran. |
| `56a` | El terme general d'una PG és $a_n=a_1\cdot r^{\,n-1}$. | Substitueix-hi $a_1=3$ i $r=5$. Compte: la potència és de la raó, no del primer terme. |
| `71a` ($x^2-16$) | Dos termes restant-se i tots dos quadrats perfectes ($16=4^2$): és una diferència de quadrats. | $a^2-b^2=(a-b)(a+b)$. Aquí $a=x$ i $b=4$. |
| `71d` ($x^2-4x+4$) | Tres termes: mira si és el quadrat d'un binomi. $x^2=(x)^2$ i $4=2^2$; comprova que el del mig és $2\cdot x\cdot 2$. | El terme del mig és negatiu: és del tipus $a^2-2ab+b^2=(a-b)^2$. |
| `82h` ($4x^2=5x$) | Passa-ho tot a un costat: $4x^2-5x=0$. | Treu factor comú $x$ i iguala cada factor a zero. **No divideixis per $x$**: perdries la solució $x=0$. |
| `82e` ($16x(x-5)=0$) | Ja és un producte igualat a zero: no cal factoritzar res. | Iguala a zero cada factor que porta $x$: $16x=0$ i $x-5=0$. |
| `80g` ($-x^2-4x+5=0$) | Identifica $a$, $b$ i $c$ amb el seu signe: aquí $a=-1$, $b=-4$, $c=5$. | $\Delta=(-4)^2-4\cdot(-1)\cdot5$. Compte: si $a$ i $c$ tenen signes contraris, $-4ac$ és positiu. |
| `76a` ($\frac x5=3$) | Multiplica els dos costats per $5$ per treure el denominador. | $\frac x5=3$ vol dir que $x$ és $5$ vegades $3$. |
| `28b` ($5{,}9\overline{02}$) | (la general, ja és bona) | Aquí el període és «02» (2 xifres → dos 9) i l'anteperíode «9» (1 xifra → un 0). |
| `26b` (exacte amb 3 xifres) | Un decimal exacte no té barra: les xifres s'acaben. | Compta les xifres després de la coma: n'han de ser exactament $3$. |
| `152a` (Tales) | Els segments es corresponen en ordre: el primer d'una secant amb el primer de l'altra, i el segon amb el segon. | $\frac{2{,}5}{2}=\frac{x}{3}$. Aïlla $x$. |
| `296a` | Calcula el pendent: $m=\frac{y_2-y_1}{x_2-x_1}$. | Amb el pendent, substitueix un dels dos punts a $y=mx+n$ i aïlla $n$. |
| `208e` (P2 nova) | (la general) | Aquí el pendent és $-\frac{12}{5}$: mira'n el signe. |
| `201a` (P2 nova) | (la general) | Fixa't que $x$ i $-x$ donen la mateixa imatge, perquè $(-2)^2=2^2$. Comença per $f(2)=5\cdot4-1$. |
| `236f` | (la general) | Cada coll té les cartes de l'$1$ al $7$ i tres figures: sota, cavall i rei. |

---

## 3. Enllaços T (Teoria)

### 3.1 Què s'ha comprovat

Per a cada fitxa s'ha calculat la destinació que veu l'alumne (cascada ítem →
exercici → bloc) i s'ha comparat amb el que demana l'enunciat i la resolució.
**No** s'ha pogut obrir el llibre: el que diu aquesta secció és «el títol de
l'activitat no correspon al que fa la fitxa», no «l'ancoratge està trencat».

### 3.2 Destinacions que no encaixen (noves; no són a `REVISIO-TEORIA-PENDENTS.md`)

| Fitxes | Què demanen | Destí actual | Proposta |
|---|---|---|---|
| `119` | Angles d'un triangle isòsceles (suma 180°) | 2n · U5 · A4 «El teorema de Pitàgores» | Buscar al llibre una activitat d'angles/triangles i posar-hi una regla d'exercici. (Treure la icona d'una sola fitxa no es pot sense tocar `js/teoria.js`: una entrada buida cau al destí del bloc.) |
| `120a`–`120c` | Desigualtat triangular | 2n · U5 · A4 Pitàgores | Ídem |
| `126a`, `126b` | Perímetre d'un polígon | 2n · U5 · A4 Pitàgores | 2n · U5 · A2 «Àrea i perímetre» (regla d'exercici `126`) |
| `332a`–`332c` | Àrea d'un triangle rectangle amb els catets | 2n · U5 · A4 Pitàgores | 2n · U5 · A2 (regla `332`) |
| `138` | Àrea d'un rectangle amb base i perímetre | 2n · U5 · A4 Pitàgores | 2n · U5 · A2 (regla `138`) |
| `303a`–`303c` | Funció **lineal** $y=0{,}05x+12$ | 4t · U5 «La paràbola» | 3r · U6 (el destí de les rectes; regla `303`) |
| `91`, `93`, `98` | Problemes que **les mateixes pistes** resolen amb un sistema | 3r · U5 · A5 «Equacions de 1r grau» | 3r · U5 · A8 «Mètodes de resolució de sistemes» (regles `91`, `93`, `98`); el vídeo ja és de sistemes |
| `251c`, `252a`, `252b`, `259` | Fan servir nombres combinatoris $\binom nk$ | 3r · U2 «És una qüestió de sort?» | 4t · U10 «Combinatòria i probabilitat» |
| Bloc `10:concepte_funcio` (18) | Imatges de paràboles, cúbiques i arrels; domini i recorregut de corbes | 3r · U6 amb rètol «La funció més recta» | Ja anotat a §6 del document de pendents; proposta concreta: **treure el `titol`** (com es va fer amb `dispersio`), perquè el rètol diu «la funció més recta» i l'enllaç obre la unitat sencera |

### 3.3 Hipòtesis que cal comprovar al llibre

1. **Equacions de 2n grau (36 fitxes: blocs `formula_general` i
   `factoritzacio`)** van a «4t ESO (aplicades) · Unitat 5». Al currículum català
   es fan a 3r. A 3r ESO U5 el mapa fa servir A2, A3, A4, A5 (1r grau) i A8
   (sistemes): **A6 i A7 queden entremig i no es fan servir**. És molt probable
   que una d'elles sigui «Equacions de 2n grau». Si és així, és millor destí que
   4t d'aplicades.
2. **Escales.** `8:escales` i `8:escales_calcul` (20 fitxes) van a 2n · U2 · A4
   «Escales i síntesi», i `8:semblanca` a 2n · U5 · A3 «**Semblança i escales**».
   Dues activitats diuen «escales». Cal mirar quina explica l'escala numèrica
   $1:n$.
3. **Criteris de semblança** (`155a`–`155e`: CAC, AAA) van a 2n · U5 · A3. Podria
   ser millor 3r · U3 · A2 «Tales i els triangles semblants».
4. Les 7 destinacions **sense `act`** obren la unitat sencera: 2n U6 (74 fitxes),
   3r U2 (57), 3r U6 (53), 4t U5 (32), 4t U9 (17), 4t U10 (38) i 4t-apl U5 (36).
   Són més de 300 fitxes amb enllaç «gruixut». Si el llibre té activitats
   concretes per a mitjana/mediana/moda, Laplace, rectes, etc., val la pena
   afinar.

Pendents que ja estaven documentats a `docs/REVISIO-TEORIA-PENDENTS.md` i
continuen oberts: cilindres del full 9 (§1), activitat de dispersió (§2), `167`
amb trigonometria (§3), `95` mixt (§4), exponents negatius de `45` (§5), rètols
de `fraccions`, `divisio` i `concepte_funcio` (§6), `semblanca_arees` (§7), i la
`242` al bloc que no toca (§8). El full 3 continua sense teoria a posta.

### 3.4 Llista de comprovació manual (32 destinacions)

Obrir cada enllaç i confirmar que l'activitat parla del que diu la columna
«rètol». La columna «fitxes» diu quantes en depenen (com més, més prioritat).

| Enllaç | Rètol | Fitxes |
|---|---|---:|
| https://llibre.step-quiz.net/2eso.html#ud6 | Dades que parlen (unitat) | 74 |
| https://llibre.step-quiz.net/3eso.html#ud1-2 | Les regles del joc de les potències | 62 |
| https://llibre.step-quiz.net/3eso.html#ud2 | És una qüestió de sort? (unitat) | 57 |
| https://llibre.step-quiz.net/2eso.html#ud1-9 | Operacions combinades i pont fracció–decimal | 54 |
| https://llibre.step-quiz.net/3eso.html#ud6 | La funció més recta (unitat) | 53 |
| https://llibre.step-quiz.net/3eso.html#ud5-2 | Monomis i polinomis | 47 |
| https://llibre.step-quiz.net/3eso.html#ud3-4 | Àrees i volums dels cossos bàsics | 46 |
| https://llibre.step-quiz.net/2eso.html#ud1-8 | Fraccions: les quatre operacions | 41 |
| https://llibre.step-quiz.net/2eso.html#ud5-4 | El teorema de Pitàgores | 38 |
| https://llibre.step-quiz.net/3eso.html#ud5-5 | Equacions de 1r grau | 38 |
| https://llibre.step-quiz.net/4eso.html#ud10 | Combinatòria i probabilitat (unitat) | 38 |
| https://llibre.step-quiz.net/4eso-apl.html#ud5 | Equacions de 2n grau (unitat) | 36 |
| https://llibre.step-quiz.net/4eso.html#ud5 | La paràbola (unitat) | 32 |
| https://llibre.step-quiz.net/2eso.html#ud1-3 | Divisibilitat i factorització | 30 |
| https://llibre.step-quiz.net/3eso.html#ud1-3 | L'exponent negatiu i les arrels | 27 |
| https://llibre.step-quiz.net/3eso.html#ud5-8 | Mètodes de resolució de sistemes | 25 |
| https://llibre.step-quiz.net/2eso.html#ud5-2 | Àrea i perímetre | 23 |
| https://llibre.step-quiz.net/4eso.html#ud2-2 | El factor multiplicador, a fons | 23 |
| https://llibre.step-quiz.net/2eso.html#ud2-4 | Escales i síntesi | 20 |
| https://llibre.step-quiz.net/2eso.html#ud1-7 | Multiplicar, dividir i operacions combinades | 19 |
| https://llibre.step-quiz.net/3eso.html#ud3-5 | Con, esfera i l'efecte de la raó | 19 |
| https://llibre.step-quiz.net/4eso.html#ud9 | (sense rètol: «Unitat 9») | 17 |
| https://llibre.step-quiz.net/2eso.html#ud2-2 | Proporcional o no? | 12 |
| https://llibre.step-quiz.net/3eso.html#ud5-3 | Les identitats notables | 12 |
| https://llibre.step-quiz.net/3eso.html#ud5-4 | Factor comú i factoritzar | 12 |
| https://llibre.step-quiz.net/2eso.html#ud5-3 | Semblança i escales | 9 |
| https://llibre.step-quiz.net/3eso.html#ud3-2 | Tales i els triangles semblants | 8 |
| https://llibre.step-quiz.net/3eso.html#ud3-3 | Mesurar amb l'ombra | 8 |
| https://llibre.step-quiz.net/2eso.html#ud2-3 | Percentatges en context | 6 |
| https://llibre.step-quiz.net/1eso.html#ud4-7 | Percentatges | 5 |
| https://llibre.step-quiz.net/4eso.html#ud2-3 | Impostos, rebuts i interessos | 2 |
| https://llibre.step-quiz.net/4eso-apl.html#ud4-3 | El teorema de Pitàgores per mesurar | 2 |

I, a més, mirar **3r ESO U5 A6 i A7** (hipòtesi 1 de §3.3).

---

## 4. Enllaços V (Vídeo)

### 4.1 Què s'ha comprovat

Per a cada fitxa amb vídeo s'ha comparat el que demana amb el títol i les notes
del vídeo a `videos.json`. **No** s'ha pogut obrir YouTube: ni el títol real del
vídeo ni el número d'exercici de l'entrega en paper s'han pogut contrastar.

### 4.2 Encaixos discutibles

| Fitxes | Vídeo actual | Observació | Proposta |
|---|---|---|---|
| `89a`–`89d`, `86f` | Els 3 vídeos de mètode (ex. 11, 12, 13), heretats del bloc | Porten parèntesis (`89`) o denominadors (`86f`): és exactament el cas de l'ex. 14, que ja es fa servir per a `87` i `88` | Regles d'exercici `89` i d'ítem `86f` → ex. 14 «Sistemes amb parèntesis i denominadors» |
| `74a`–`74h`, `71a`–`71f` | ex. 1 amb rètol «**Desenvolupar** identitats notables» | Totes dues fitxes són de **factoritzar** (camí invers). La `71` ho diu a la `nota`, però l'alumne veu el rètol | Rètol «Identitats notables (per reconèixer-les)» o similar |
| `99` | ex. 15 + ex. 16 (problemes **amb sistema**) | Les pistes i la resolució de la mateixa fitxa la resolen amb **una** incògnita ($n-\frac n5=60$) | Deixar-ho, però sabent que el vídeo ensenya un altre camí; o treure-la |
| `76a`–`76f` | ex. 3 «Equacions amb parèntesis i denominadors» | $\frac x5=3$ és molt més simple que el vídeo | Acceptable; podria portar `avis` |
| `208a`–`208f` | ex. 20 «Representar una recta» | Només demanen creixent/decreixent | Acceptable |

### 4.3 Fitxes que fan la destresa d'un vídeo existent i no l'enllacen

| Fitxes | Destresa | Vídeo candidat |
|---|---|---|
| `331a` | Ruffini (quocient) | ex. 9 «La regla de Ruffini en acció» (ja el tenen `66`–`69`) |
| `336a`–`336d`, `337a`–`337b` | Pendent i ordenada de $y=mx+n$ | ex. 20 «Representar una recta» (ja el té `207`, que demana el mateix) |
| `339a`–`339c` | Vèrtex de $y=ax^2+c$ | ex. 21 «Representar una paràbola: vèrtex i talls» (ja el té `300`) |
| `83c`–`83f` | Producte igualat a zero | ex. 6 «Equacions de segon grau incompletes» (ja el tenen `83a`, `83b`) — si el vídeo fa el pas «producte = 0» |
| `123a`–`123d`, `121`, `128`, `129`, `162` | Pitàgores directe | ex. 17 «Resoldre triangles rectangles» (ja el tenen `146`, `147`) — amb l'`avis` de la trigonometria |
| `132`, `124b`, `124c` | Altura d'un triangle equilàter / isòsceles | ex. 18 (ja el tenen `124a`, `125`) |

### 4.4 Llista de comprovació manual (22 vídeos)

Per a cada vídeo: (1) obre i és el de l'exercici N de l'entrega; (2) el que s'hi
resol correspon al títol; (3) cap fitxa de la columna no queda fora de lloc.

| Ex. entrega | Enllaç | Títol al mapa | Fitxes |
|---:|---|---|---:|
| 1 | https://youtu.be/e15FLvrMIq4 | Desenvolupar identitats notables / Suma per diferència | 20 |
| 3 | https://youtu.be/U-6coyMXqIU | Equacions amb parèntesis i denominadors | 27 |
| 4 | https://youtu.be/UsnX5Prjbgw | Quantes solucions té, sense resoldre-la | 7 |
| 5 | https://youtu.be/Nhi-OTb2_aI | Equacions de segon grau amb la fórmula general | 14 |
| 6 | https://youtu.be/GfFx2OpcuEs | Equacions de segon grau incompletes | 11 |
| 7 | https://youtu.be/Gwxps3euP8M | Desenvolupar abans de resoldre | 7 |
| 9 | https://youtu.be/bBk_lYYa9SA | La regla de Ruffini en acció | 19 |
| 11 | https://youtu.be/8Y7N8bnxajs | Sistemes pel mètode de substitució | 18 |
| 12 | https://youtu.be/osQnlyt0Iy4 | Sistemes pel mètode d'igualació | 18 |
| 13 | https://youtu.be/T1JgKdH_5rM | Sistemes pel mètode de reducció | 18 |
| 14 | https://youtu.be/fK0MS4zOgAc | Sistemes amb parèntesis i denominadors | 7 |
| 15 | https://youtu.be/unNHdKasnHw | Problema de dues quantitats, amb un sistema | 4 |
| 16 | https://youtu.be/-hyfFvFSGvY | Problema de dos preus, amb un sistema | 4 |
| 17 | https://youtu.be/EXaBzQi-fAE | Resoldre triangles rectangles | 2 |
| 18 | https://youtu.be/6jVaspfGhTE | Altura d'un triangle equilàter | 2 |
| 20 | https://youtu.be/b5XstxknIT4 | Representar una recta | 24 |
| 21 | https://youtu.be/aaEgZhF9i_M | Representar una paràbola: vèrtex i talls | 8 |
| 23 | https://youtu.be/oLMIOMu0M0A | Calcular imatges d'una funció racional | 1 |
| 24 | https://youtu.be/iBeSAAJB7yc | Punts de tall amb els eixos | 7 |
| 25 | https://youtu.be/Sb0Idi9MoSE | Un augment i una rebaixa encadenats | 4 |
| 26 | https://youtu.be/zqqUlDUkuD8 | Rebaixes encadenades i descompte equivalent | 2 |
| 27 | https://youtu.be/EjYLG9mJKXs | Trobar el preu de partida / el total a partir d'una part | 5 |

Els vídeos 2, 8, 10, 19, 22 i 28–33 de l'entrega no tenen cap fitxa equivalent
al banc (ja documentat al `_llegiu-me` de `videos.json`).

---

## 5. Trobat de passada (no són pistes)

- `287c`: l'**enunciat** diu «$2.4$ m» amb punt decimal (ha de ser $2{,}4$). La
  resolució de `286c` també porta «$2.5\cdot25000$».
- `300c` (resolució): $2\cdot-1$ sense parèntesi.
- `285a`–`285c` (resolució): «$50{,}00 cm$» amb les unitats dins de la fórmula
  (KaTeX ho escriu en cursiva i enganxat) i dos decimals innecessaris.
- `291c` (resolució): $\dfrac52^2$ és ambigu; ha de ser $\left(\dfrac52\right)^2$.
- `82a`–`82i` (resolució): el primer pas és genèric («Factoritzem traient el
  factor comú corresponent…») i no mostra la factorització de cada apartat.
- `18c`, `18f` (resolució): «$\frac54$ val $\frac54$» — frase tautològica.

---

## 6. Pla de treball proposat

1. **Correccions segures (poques línies):** `236f` (pista i distractor),
   `295d` (format del generador), i les fitxes amb resposta literal a la P2
   (§2.3, primera meitat de la taula).
2. **P2 per a les 50 fitxes amb una sola pista** (§2.4), específica de cada
   apartat.
3. **Grups genèrics d'alta prioritat** (§2.5): `12a`/`12b`/`17`, `82`, `71`,
   `76`.
4. **Enllaços T sense dubte** (§3.2): `126`, `332`, `138`, `303`, `91`/`93`/`98`,
   `251c`/`252`/`259` → regles d'exercici a `teoria.json`; treure el `titol` de
   `concepte_funcio`.
5. **Enllaços V** (§4.2 i §4.3): `86f`, `89` → ex. 14; afegir `331`, `336`,
   `337`, `339`.
6. **Comprovació manual** amb les llistes §3.4 i §4.4 (o donant accés de xarxa,
   vegeu sota), i decidir les hipòtesis de §3.3.
7. Opcional: una prova automàtica que falli si una pista conté l'opció correcta
   literal, si remet a «exercici NNN», o si una fitxa té menys de 2 pistes.

### Seguiment

**Fase 1 — feta (10/10/2026).** Només s'han tocat textos de `tools/c_*.py`
(pistes, i a la baralla també distractors); l'ordre d'ítems, les etiquetes
d'error i `js/codi-taules.js` no canvien.

- Baralla espanyola: `236f` (pista 2, distractor i retorn) i, perquè hi havia la
  mateixa errada, el retorn d'un distractor de `236a` i de `239a`. A més, el
  distractor de `236a` deia «$48$ resultats, com en una baralla francesa»: la
  francesa en té $52$, i ara ho diu així.
- `295d`: $3=-1\cdot(-2)+n$ (pista i retorn del distractor, al generador) i
  $y=-x+n$ en lloc de $y=-1x+n$ a la pista 1.
- Pista 2 que donava la resposta, reescrita: `20c`, `40c`, `46b`, `56a`,
  `72a`, `72b`, `74a`–`74g`, `321d`, `331a` (també la P1, que deia «baixa el $1$
  del divisor»), `336a`, `336c`, `337b`, `338c`, `250a`, `250d`, `253c`.
- `72a`, `72b`: la pista 1 mostrava literalment `\"primer terme\"` (contrabarra
  visible); ara porta cometes «».

**Fase 2 — feta (10/10/2026).** Les 50 fitxes de §2.4 tenen ara pista 2, i
cap fitxa del banc no en té menys de dues. La pista nova és específica de cada
apartat, també als exercicis generats en bucle (`207`, `208`, `209`, `212`,
`214`, `216`, a `tools/c_funcions.py`), i fa el primer pas o assenyala la trampa
sense dir la resposta. Exemples: a `208b` explica que $\frac{x}{6}$ és
$\frac16\cdot x$; a `212a`–`212d` compara la paràbola amb $y=x^2$ a $x=1$; a
`216a`–`216d` dona la factorització i deixa els talls, l'eix i el vèrtex.

**Fase 3 — feta (10/10/2026).** Els quatre grups d'alta prioritat de §2.5:

- `12a`, `12b`, `17`: la pista 1 fa decidir si es busca un divisor (m.c.d.)
  o un múltiple (m.c.m.) a partir de la situació; la 2 dona les
  descomposicions. `item_mcd()` i `item_mcm()` accepten ara `pistes=`.
- `82a`–`82i`: pista 1 pròpia de cada apartat (`82e` ja ve factoritzada; `82g`
  i `82h` demanen passar-ho tot a un costat; `82h` avisa de no dividir per
  $x$). La resolució mostra ara la factorització de cada apartat.
- `71a`–`71f`: la pista 1 fa reconèixer el patró amb els termes de l'apartat;
  la 2 dona la fórmula (diferència de quadrats) o fa comprovar el doble
  producte i el signe (quadrat d'un binomi).
- `76a`–`76f`: la pista 1 diu per quin nombre multiplicar; la 2 s'adapta al
  cas (si la $x$ ja queda sola, no parla de dividir).

**Fase 4 — feta (10/10/2026).** Els enllaços T de §3.2 que no tenien dubte,
amb regles noves a `data/teoria.json` (cadascuna amb una `nota` que en diu el
motiu):

| Regla | Fitxes | Destí nou |
|---|---|---|
| exercicis `126`, `332`, `138` | 6 | 2n ESO · U5 · A2 «Àrea i perímetre» |
| exercici `303` | 3 | 3r ESO · U6, com la resta de rectes |
| exercicis `91`, `93`, `98` | 3 | 3r ESO · U5 · A8 «Mètodes de resolució de sistemes» |
| ítem `251c`, exercicis `252`, `259` | 5 | 4t ESO · U10 «Combinatòria i probabilitat» |
| bloc `concepte_funcio` | 18 | Mateixa unitat, sense rètol: ara diu «3r ESO · Unitat 6» |

`251a` i `251b` es queden a 3r (no fan servir nombres combinatoris). `119` i
`120` continuen a Pitàgores: al mapa no hi ha cap activitat d'angles ni de
desigualtat triangular, i cal trobar-la al llibre. `tools/_teoria.py` marca ara
`91`, `93`, `98` perquè l'enunciat no diu «sistema»: és un fals positiu (l'eina
només mira l'enunciat; les pistes i la resolució plantegen el sistema).

**Fase 5 — feta (10/10/2026).** Enllaços V de §4.2 i §4.3, a
`data/videos.json`:

| Regla | Fitxes | Vídeo |
|---|---|---|
| exercici `89`, ítem `86f` | 5 | ex. 14 «Sistemes amb parèntesis i denominadors» (abans, els tres de mètode del bloc) |
| exercici `331` | 1 | ex. 9 «La regla de Ruffini en acció» (nou) |
| exercicis `336`, `337` | 6 | ex. 20 «Representar una recta» (nou) |
| exercici `339` | 3 | ex. 21 «Representar una paràbola: vèrtex i talls» (nou) |
| exercicis `71`, `74` | 14 | mateix vídeo (ex. 1), amb un `avis` visible: el vídeo desenvolupa i la fitxa factoritza |

Fitxes amb vídeo: de 178 a 188. El títol de `71` i `74` no s'ha canviat perquè
ha de dir què fa el vídeo; l'avís diu que la fitxa hi va a l'inrevés. No s'han
afegit els candidats més dubtosos de §4.3 (`83c`–`83f`, Pitàgores, `132`): cal
mirar abans els vídeos.

**Fase 6 — feta (10/10/2026).** Pistes de prioritat mitjana:

- Grups genèrics de §2.5: `22a`–`22e` (la trampa del doble signe), `24a`–`24f`
  i `25d` (enter per fracció, simplificar abans de multiplicar), `26a`–`26f`
  (pur, mixt i exacte, cadascun amb la seva pista), `28a`–`28l` i `30b`–`30f`
  (la pista 2 diu quin és el període i l'anteperíode i quants $9$ i $0$
  porta el denominador), `80a`–`80g` i `81a`–`81g` (amb $a$, $b$, $c$ i
  $\Delta$ substituïts; a `80g` avisa que $2a$ és negatiu).
- Pistes que deixaven la resposta a un pas: `39a`–`39f`, `43a`, `43b`, `43d`,
  `43e`, `46c`, `323a`, `323b`, `324a`, `324b`, `336d`.
- Pistes 2 buides: `220a`, `223a`, `226a`, `231` (a la `231` la pista 1 ja no fa
  la suma).
- Referències a un altre exercici: `25b`, `219d`, `239e`, `296a`–`296c`.

Fitxes amb les dues pistes idèntiques a les d'una altra: de 167 (a l'anàlisi
inicial) a 103. Ara són sobretot apartats d'un mateix exercici que fan exactament
el mateix procediment (`6`, `7`, `9`, `10`, `18`, `27`, `29`, `33`, `63`,
`285`–`288`, `297`, `299`–`301`), on la prioritat era baixa.

Queden `263c` i `228b` (la pista 2 deixa la resposta a un pas) i els grups de
prioritat baixa de §2.5.

**Fase 7 — feta (10/10/2026).** Pistes de prioritat baixa (§2.5) i el que
quedava de §2.6 i §5:

- Grups genèrics: la pista 2 porta ara la dada concreta de l'apartat.
  - `6`, `7`, `9`, `10`: la 1 diu amb quins nombres es treballa quan n'hi ha
    de negatius; la 2 dona les descomposicions i la regla.
  - `18`: quins productes creuats cal comparar (i només suggereix simplificar
    si alguna fracció es pot simplificar).
  - `27`, `30a`: quantes xifres decimals hi ha i quin és el denominador.
  - `29`: què es repeteix, què no, i quants $9$ i $0$ porta el denominador.
  - `33a`–`33e`: la trampa de cada igualtat (el $1{,}\overline{9}$, no
    arrodonir, mixt contra pur…).
  - `63`: la resta escrita amb els parèntesis de l'apartat.
  - `278`: la part i el total, i una comprovació de sentit (més o menys del
    $50\,\%$).
  - `286`–`288`: la mesura de l'apartat i la conversió d'unitats que toca.
  - `180`: la $L$ de l'apartat i l'avís de l'arrel.
  - `297a`, `297b`: no intercanviar $m$ i $n$; avançar $4$ no és avançar $1$.
    `297c` té pistes pròpies: horitzontal → $m=0$ → $y$ constant.
  - `299`: l'equació de l'apartat (a `299c`, multiplicar per $2$).
  - `300`: $a$ i $b$ substituïts (a `300c`, l'avís de $a<0$).
  - `301`: el discriminant de l'apartat i el format $(x,0)$.
- Pista 2 que deixava la resposta a un pas: `263c` (ara avisa que la moda és
  el valor, no la freqüència) i `228b` (dona les tres primeres freqüències i
  deixa comptar la quarta, amb l'avís del $170$).
- Pistes 2 buides de §2.6: `308a`, `309b` i `315a` («Multiplica-les») diuen
  ara per què es multiplica i quan se suma. `306c` i `310a` es queden: és la
  tercera pista, i no costa res més que la segona.
- Trobat de passada i arreglat:
  - **`286a`–`286d`: un distractor era una resposta correcta.** A `286a` hi
    havia «$1000{,}0$ m» com a errònia, i $1$ km $=1000$ m. El retorn deia
    «el valor és correcte en centímetres»: el distractor havia de ser el
    nombre de centímetres amb la unitat equivocada, i ara ho és
    («$100000$ m»). Els altres dos distractors de la `286` i un de la `287`
    portaven zeros sobrers («$0{,}00100$ km», «$0{,}0400$ cm») que delataven
    la resposta bona, l'única sense.
  - Totes les de §5: `287c` («$2.4$ m»), `286c` («$2.5\cdot25000$»), `300c`
    ($2\cdot(-1)$), `285a`–`285c` («$0{,}5$ m», amb la unitat fora de la
    fórmula), `291c` ($\left(\frac52\right)^2$) i `18c`, `18f` (ja no diu
    «$\frac54$ val $\frac54$»). També `278` ($0{,}3$ en lloc de
    $0{,}3000$) i `299c` ($y=-2+6$ en lloc de $-1\cdot2+6$).

Fitxes amb les dues pistes idèntiques a les d'una altra: de 103 a 30. Les que
queden fan el mateix procediment amb les mateixes dades rellevants (`27a` i
`27c` tenen totes dues una xifra decimal) o són de lectura de concepte
(`285a`–`285c`), i no hi ha res de l'apartat que afegir-hi.

Queda oberta §2.8 (pista 1 massa forta a Tales i al full 9), que no era a la
llista de prioritats.

**Fase 8 — feta (10/10/2026).** Pista 1 massa forta (§2.8). La pista 1 diu
ara on mirar i la 2 fa el plantejament; cap de les dues no fa el càlcul.

- Tales (`152a`–`152f`): la pista 1 diu quin segment va amb quin («el
  $2{,}5$ va amb la $x$, i el $2$ amb el $3$»), que és la dificultat real;
  la proporció passa a la pista 2.
- Ombres i reflexos (`161`, `163`, `164`, `168`, `169`): la pista 1 diu quins
  són els dos triangles (o els dos objectes) i quines dades té cadascun; la
  2, la proporció. A `161`, a més, una comprovació de sentit (l'arbre més alt
  fa l'ombra més llarga). A `168` la pista 1 deia «la distància total fins
  al poble», i és la distància des de la vora.
- Full 9, prismes (`170b`–`170e`, `170g`–`170i`, `171`–`173`): la pista 1
  dona l'estructura, $2\cdot A_{\text{base}}+A_{\text{lateral}}$, i la
  fórmula de la base; la 2 hi posa les dades sense calcular. És l'error que
  recullen els distractors (una sola base, només la lateral). A `172` i
  `173` la pista 1 avisa que l'apotema no la donen.
- Full 9, piràmides (`177`, `179a`, `179b`, `181a`, `181b`, `183`): el mateix
  amb «una sola base». Quan l'enunciat dona l'altura i no l'apotema
  (`179b`, `181a`, `181b`), la pista 1 explica el triangle rectangle que les
  relaciona.
- `168`: tres retorns de distractor no descrivien l'error. $1{,}6$ m és una
  dada de l'enunciat, $720=450\cdot1{,}6$ i $281{,}25=450:1{,}6$; ara ho diuen.

Amb aquesta fase queden fetes totes les seccions de pistes de l'informe
(§2.2–§2.9). El que queda obert són els enllaços T i V (§3.3, §3.4 i §4.4),
que s'han de comprovar contra el llibre i els vídeos, i la prova automàtica
opcional del punt 7 del pla.

**Fase 9 — feta (10/10/2026).** Comprovació dels enllaços T i V amb accés de
xarxa a `llibre.step-quiz.net` i YouTube.

*Com s'ha fet (T).* El llibre carrega cada curs de
`contingut/<curs>/course.json` (unitats i activitats amb títol i subtítol) i
`contingut/<curs>/pdfs/manifest.json`. S'han baixat els cinc cursos i 67 PDF
d'activitat, se n'ha extret el text i s'ha comparat amb el que demana cada
bloc i cada exercici. Els enllaços s'han obert també en un navegador real.

*La troballa principal.* Un enllaç sense activitat (`2eso.html#ud6`) **no
obre «la unitat»**: el llibre desplega la unitat i n'obre **la primera
activitat** (`assets/js/app.js`, funció `objectiuDeLancora`), que sol ser la
introducció. Comprovat al navegador: `2eso#ud6` obre «Activitat 1 — Qüestió
d'estadística». Les set destinacions sense `act` (307 fitxes) duien l'alumne a
una pàgina d'introducció. El `_llegiu-me` de `teoria.json` deia el contrari i
ara està corregit.

*Canvis a `data/teoria.json`.* Ara cap entrada no queda sense `act`, i totes
les tocades porten una `nota` que diu què s'ha comprovat al text de
l'activitat. **375 fitxes** canvien de destinació (12 obrien ja la mateixa
pàgina, però ara el rètol ho diu). Les principals:

| Fitxes | Abans | Ara |
|---|---|---|
| Freqüències i gràfics (40) | 2n U6 (obria l'A1) | 2n U6 A2 «Organitzem les dades» |
| Mitjana, mediana i moda (20) | 2n U6 (A1) | 2n U6 A3 «Resumim la informació» |
| Dispersió (17) | 4t U9 (A1, dues variables) | 4t U9 A2 «Posició i dispersió» |
| Laplace i successos (52) | 3r U2 (A1) | 3r U2 A2–A5, segons si és vocabulari, espai mostral, freqüència relativa o Laplace; la unió amb intersecció (`256`), a 4t U10 A3 |
| Funcions i rectes (56) | 3r U6 (A1) | 3r U6 A2–A6, segons si és concepte, pendent, m i n, fórmula o punt de tall |
| Paràboles (29) | 4t U5 (A1) | 4t U5 A2 «L'efecte dels coeficients», A3 «Vèrtex, eix i punts de tall», A4 |
| Combinatòria i probabilitat (43) | 4t U10 (A1) | 4t U10 A2 «Comptar amb arbre», A3, A4 «Experiments compostos» |
| Equacions de 2n grau (36) | 4t apl. U5 (A1) | 4t apl. U5 A2 (incompletes) i A3 (factoritzades i fórmula) |
| m.c.d. i m.c.m. (23) | 2n U1 A3 | 2n U1 A4 «MCD i mcm» |
| Ruffini (20) | 3r U5 A2, que no parla de dividir | 4t apl. U11 A2, l'únic lloc del llibre on surt (és un apèndix opcional) |
| Classificar decimals (7) | 2n U1 A9 | 1r U5 A4 «De la fracció al decimal» |
| Exponent negatiu, `45` (8) | 3r U1 A2 | 3r U1 A3 |
| Criteris de semblança, `155` (5) | 2n U5 A3 | 3r U3 A2, que en dona els tres criteris |
| Angles i desigualtat triangular, `119`, `120` (4) | Pitàgores | 1r U6 A5 «Triangles» |
| `167` (angles d'elevació) | «Mesurar amb l'ombra» | 4t U7 A3 «Resoldre triangles rectangles» |
| `265` (mitjana ponderada) | 2n U6 | 4t U9 A3 |

*Hipòtesis de §3.3.* (1) **Falsa**: 3r U5 A6 i A7 no són de 2n grau («Aïllar
la incògnita que no és x» i «Per què cal un sistema»). (2) Les escales van bé
on anaven: 2n U2 A4 explica l'escala $1:n$ i el canvi d'unitats. (3)
**Certa**: aplicada (`155`). (4) Feta: no queda cap destinació sense `act`.

*El que el llibre no explica enlloc* (les fitxes van a l'activitat més
propera, i la `nota` ho diu): la fracció generatriu d'un decimal periòdic
(`28`, `29`, `31`–`33`), la divisió llarga de polinomis i el teorema del residu
(`65`, `329`, `330`), el polígon de freqüències i les freqüències acumulades,
el coeficient de variació (`273`), l'àrea lateral del con (`188`–`190`) i la
recta perpendicular (`298b`).

*Comprovació.* `tests/teoria.test.js`, executat contra una còpia dels
`course.json` i `manifest.json` del llibre: 11 comprovacions, 0 fallades
(curs, unitat, activitat, PDF i títol de totes les entrades).

*Vídeos (V).* Els 22 vídeos del mapa existeixen i són públics (oEmbed de
YouTube). Tots són de la sèrie «Matemàtiques en Acció» de Matemàtiques amb
Bogdan, i el tema del títol real encaixa amb el del mapa a tots 22
(«Identitats notables», «Equacions 1r & 2n grau», «Sistemes… Mètode
substitució», «Trigonometria», «Funcions - Gràfiques»…). El número del títol
de YouTube és el de la llista de reproducció del tema, no el de l'entrega: no
és una discrepància. **No s'ha pogut veure què resol cada vídeo**: YouTube
respon a les pàgines dels vídeos amb la pàgina antirobots de Google, i les
miniatures són a `i.ytimg.com`, que no és als dominis permesos. La comprovació
del contingut de §4.4 (i els candidats dubtosos de §4.3) continua sent a mà.
