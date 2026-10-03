# Fer una prova escrita a partir del que l'alumne ha practicat

Guia per al professorat. Els altres documents del projecte (`README.md`,
`WORKFLOW-EXAMEN.md`, `HANDOVER.md`) estan escrits per a qui hi programa;
aquest és el que necessites tu per fer funcionar el cicle a classe.

---

## Què has de tenir

Dues coses, i **han d'anar sempre juntes, a la mateixa carpeta**:

- `analitzador-repas.html`
- la carpeta `vendor/katex/`

L'HTML porta a dins tota la lògica i els 951 exercicis: no necessita servidor,
ni instal·lar res, ni enviar cap dada enlloc. El que sí que necessita al
costat és `vendor/katex/`, que és qui pinta les fórmules. Si no hi és i no
tens internet, l'examen s'imprimeix amb el LaTeX en cru (`$3x-4x^2-6x^3$` en
comptes de la fórmula). **Si veus això a la pantalla, atura't i comprova la
carpeta abans d'imprimir.**

Un formulari de Google amb quatre camps: correu, classe, el codi enganxat i
—si el vols— un camp lliure de temes. Vegeu la secció «El formulari» més
avall.

---

## El cicle, en cinc passos

1. **L'alumne practica** a repàs-ESO. El progrés es desa al seu navegador.
2. **L'alumne prem el botó «Codi»** (a dalt a la dreta, a qualsevol pàgina on
   treballi), copia la cadena que li surt i l'enganxa al formulari.
3. **Tu reps la resposta** al full de càlcul del formulari.
4. **Generes la prova** amb l'analitzador (avall).
5. **Corregeixes a mà** amb el full de correcció que et surt imprès a part.

Després l'alumne segueix practicant i el cicle torna a començar. No cal que
esborri ni reiniciï res: **cada codi nou conté tot l'historial** i substitueix
l'anterior.

Els codis nous (els que comencen per **RC4**) porten, a més, la data en què
l'alumne va respondre per primer cop cada exercici de les últimes 12
setmanes. Per això n'hi ha prou amb l'últim codi de cadascú per saber què va
fer a cada tram. No esborris igualment les files antigues del full de
respostes: si algun alumne encara envia codis d'abans del canvi (RC3 o
anteriors), l'analitzador dedueix les dates comparant-los, com feia fins ara.

---

## Els dos modes d'examen

La pestanya **Prova escrita** pregunta, en entrar-hi, quin dels dos vols:

- **Mini-examen estàndard de 3 setmanes** — per a tot el grup de cop, sense
  que hagis de decidir quins temes entren a cadascú. És el de sota.
- **Examen personalitzat a un alumne** — un de sol, amb els temes i la mida
  que triïs tu. És el de tota la vida.

Un cop triat, se'n recorda mentre tinguis la pàgina oberta: canviar de
pestanya i tornar no et torna a preguntar. Per canviar de mode, el botó
**← Canvia de mode**.

---

## Generar una prova personalitzada

1. Obre el full de respostes del formulari a Google Sheets, `Ctrl+A`, `Ctrl+C`.
2. Obre `analitzador-repas.html` (doble clic), pestanya **Full de respostes**,
   enganxa-ho al quadre i prem **Llegeix**.
3. Ves a la pestanya **Prova escrita**, tria **Examen personalitzat** i tria
   l'alumne al desplegable. Si
   només tens una petició solta, pots enganxar el codi directament al camp del
   costat en comptes de carregar tot el full.
4. Ajusta, si vols:
   - **Mida**: curta (2 preguntes), mitjana (3) o llarga (4), repartides pels
     blocs en proporció a la feina feta, amb almenys una per bloc mentre hi
     càpiguen.
   - **Mínim per bloc**: un tema només s'ofereix si l'alumne hi ha fet almenys
     3 exercicis (editable).
   - **Les caselles dels blocs**: surten totes marcades. **Aquí és on decideixes
     de quins temes l'examines**: desmarca els que l'alumne no t'hagi demanat.
5. **Genera la prova.** Les preguntes es reparteixen entre els blocs marcats en
   proporció a la feina feta a cadascun, i tenen tendència a caure sobre els
   exercicis que li van costar més (fallats, després amb pista, després al
   segon intent).
6. Imprimeix. Hi ha **dos botons separats a propòsit**: un per a l'examen i un
   per al full de correcció. No els imprimeixis de seguit sense mirar la safata.

L'examen és de resposta oberta: surt l'enunciat sense les quatre opcions, i
l'alumne ha d'escriure la resolució. El full de correcció porta, per pregunta,
el bloc, l'identificador, com li va anar a la pràctica, la resposta correcta i
els passos de resolució.

---

## Generar els mini-exàmens de tota la classe

Pensat per a un ritme regular: cada tres setmanes, més o menys, entre 10 i 20
exercicis, i un examen per a cadascú **fet només amb aquella feina**.

1. Carrega el full de respostes igual que abans.
2. Pestanya **Prova escrita** › **Mini-examen estàndard**.
3. **Posa el tram que examines, amb dues dates**: *Del … al …*. No hi ha trams
   fixos ni setmanes de descans: pot ser del 14/9 al 4/10, del 21/9 al 4/10 o
   del 21/9 a l'11/10. Només compten els exercicis fets entre aquests dos
   dies, tots dos inclosos. En obrir la pestanya ja hi ha posades les tres
   setmanes que acaben l'últim dia que hi ha feina, i al costat diu de quin
   dia a quin dia hi ha exercicis als codis.
4. Prem **Genera els exàmens del grup**.
5. Imprimeix. Hi ha **dos botons separats**: tots els exàmens en un document
   i totes les solucions en un altre. **Baixa les notes (CSV)** et dona la
   nota de feina de tothom per passar-la al teu full de notes.

### Cada tram comença de zero

L'endemà de l'examen, l'alumnat **esborra els codis**: botó **Codi** ›
**Eliminar tots els codis**. El tram següent es fa amb el comptador a zero, i
el codi que t'enviïn només porta la feina d'aquelles tres setmanes.

Tu enganxa sempre el full de respostes sencer, amb els enviaments de tot el
curs. L'analitzador fa cada tram només amb el que és seu:

- Un exercici que l'alumne **torna a fer en un tram posterior** és feina
  d'aquell tram, amb el resultat que hi treu. El tram on l'havia fet abans no
  canvia: les notes d'un tram tancat no es mouen per res que s'enviï després.
- **Dins d'un mateix tram**, un exercici compta un sol cop, amb el primer
  resultat que t'ha arribat. Esborrar a mig tram i tornar-lo a fer no el
  millora.
- Si algú **s'oblida d'esborrar**, no passa res: cada exercici porta la seva
  data, i els del tram anterior no entren al nou.

### Quins exercicis compten

- **Només els fets entre les dues dates del tram**, tots dos dies inclosos,
  segons la data del primer intent, que porta el codi. Cap exercici d'abans o
  de després no pot sortir a l'examen.
- **Els codis sense dates no compten.** Són els de la versió anterior del lloc
  (RC3 i anteriors), que no diuen quan es va fer cada exercici. Qui només en
  tingui d'aquests surt a la taula amb zero exercicis i el motiu; n'hi ha prou
  que enviï el codi d'ara.
- **Només els 20 últims**, per ordre de quan es van fer. Si un alumne en fa
  25, els 5 primers no compten ni per a la nota ni per a l'examen: qui fa molta
  feina és avaluat de la més recent, no de la que va fer el primer dia del
  tram. La taula ho indica amb «compten els 20 últims».
- Cada apartat és un exercici: el 62a i el 62b en són dos.

### La nota de feina del tram

Cada exercici que compta aporta el seu valor sobre 10:

| Com l'ha resolt | Valor | Aporta |
|---|---|---|
| A la primera | 10 | 1 |
| Amb una pista | 9,5 | 0,95 |
| Amb dues pistes o més | 8,5 | 0,85 |
| Al segon intent | 7,5 | 0,75 |
| Fallat | 0 | 0 |

Amb la suma *x*: **nota = mín(10, 8·∛(x/10))**. Deu exercicis a la primera
fan un 8, i vint un 10. Un exercici fallat no suma però tampoc no resta:
mentre l'alumne no arriba a 20, provar-ne un de difícil no li pot fer baixar
la nota.

**Passat de 20, sí que pot baixar.** Com que compten els 20 últims, cada
exercici nou fa sortir el més antic dels que comptaven, i la nota puja o baixa
segons què entra i què surt. Vint exercicis a la primera són un 10; si després
se'n falla un, compten dinou a la primera i un de fallat, i és un 9,9.

Un encert **al segon intent** compta com a segon intent encara que l'alumne
hagi obert pistes. Si no fos així, obrir una pista just després d'equivocar-se
convertiria un 0,75 en un 0,95 i esborraria l'error.

Els tres valors del mig es poden canviar al panell, per si els vols ajustar.

### L'examen

L'examen pot ser **curt (2 preguntes), mitjà (3) o llarg (4)**, igual que la
prova personalitzada. Les preguntes es reparteixen pels blocs que l'alumne ha
treballat: primer una per bloc (si hi ha més blocs que preguntes, als que tenen
més exercicis), i la resta en proporció a la feina de cada bloc. Amb 10
exercicis del bloc A i 4 del B: curt 1+1, mitjà 2+1, llarg 2+2. Dins de cada
bloc surten a l'atzar d'entre els 20 exercicis que compten, sense repetir
exercici mare mentre n'hi hagi prou. Són de resposta oberta: l'enunciat
sense les opcions. Al full de correcció hi ha, per pregunta, quin dia el va fer,
com li va anar a la pràctica, la resposta i la resolució. A la capçalera hi ha
la feina del tram i la nota de feina.

**Ningú no queda bloquejat.** Si un alumne no arriba al mínim, l'examen se li
genera igualment amb el que tingui, i el motiu queda anotat al **full de
correcció**, mai al full que rep ell.

### L'examen valida la nota de feina

La nota de feina mesura **quanta** feina s'ha fet, no si s'ha après. Un alumne
que contestés a l'atzar vint exercicis en trauria de mitjana un **7,6** (deu a
l'atzar, un 6), i un que els fes amb la IA, un 10. Per això la nota de feina
**mai no compta sola**: la valida sempre l'examen presencial, amb aquesta regla.

| Examen | Diferència entre la feina i l'examen | Què compta |
|---|---|---|
| menys de 5 | qualsevol | només l'examen |
| 5 o més | més de 3 punts, per dalt o per baix | només l'examen |
| 5 o més | 3 punts o menys | la feina i l'examen |

Exemples:

- Feina 7,5 i examen 3: suspèn l'examen, només compta el 3.
- Feina 9,5 i examen 6: hi ha 3,5 punts de diferència, només compta el 6.
- Feina 8 i examen 6,5: hi ha 1,5 punts, compten totes dues.

L'analitzador no aplica la regla per tu: et dona la nota de feina (a la
capçalera del full de correcció i al CSV de notes) i la de l'examen la poses
tu en corregir-lo.

Aquesta regla és també el que fa innocu que les claus de respostes siguin
públiques (el repositori de GitHub és obert, vegeu `DESPLEGAMENT.md`): qui
copiï les respostes treu una nota de feina alta que l'examen invalida.

---

## El que veu l'alumne

El botó **Codi** li diu quants exercicis porta des de l'últim esborrat i que
se'n demanen entre 10 i 20 per a cada examen. Si en porta menys de 10, li ho
diu en to d'avís; si en porta més de 20, li diu que per a la nota i l'examen
només compten els 20 últims.

**El lloc no parla de trams.** No sap quines dates triaràs, i per això no diu
a quin tram s'és, ni avisa de cap tancament, ni parla de setmanes de descans.
Quan és l'examen i fins quin dia compta la feina ho has de dir tu a classe.

---

## Coses que et passaran

**«Aquest codi es llegeix, però el control d'integritat no quadra.»** No es
genera cap prova, i és volgut: el codi s'ha copiat a mitges o s'ha tocat.
Demana-li de nou a l'alumne; no cal cap altra investigació.

**«Eliminar tots els codis».** Des del botó **Codi**, l'alumne buida tot el seu
progrés (li demana confirmació, perquè no es pot desfer) i el codi torna a
zero. És el que els demanes l'endemà de cada examen. El que ja t'havia enviat
no es perd, perquè és als codis anteriors; el que no hagués enviat encara, sí.

**«Ha esborrat el progrés 2 vegades… se n'espera una».** (Full de respostes)
El codi porta un comptador de reinicis, que puja cada vegada que s'esborra tot
o es reinicia un full. Entre dos codis seguits ha de pujar un sol cop, que és
l'esborrat de després de l'examen, i la línia surt quan puja més. Pot ser un
full reiniciat per practicar, o un examen del qual no va enviar codi. També és
l'únic rastre que queda si algú fa els exercicis, en mira les solucions, ho
esborra i els torna a fer: val la pena preguntar-ho.

**Un alumne surt en ambre amb «sota 10».** (Estàndard) No ha arribat al mínim
d'exercicis al tram que s'examina. L'examen se li fa igual amb el que tingui, i
l'avís queda al full de correcció. Ell no el veu.

**A un alumne li baixa la nota de feina després de fer més exercicis.**
(Estàndard) Només li pot passar a qui ja en porta més de 20 al tram: compten
els 20 últims, i si els nous li han anat pitjor que els que surten del compte,
la nota baixa. No és cap error.

**«Té 30 exercicis en un codi sense dates».** (Estàndard) L'alumne només t'ha
enviat codis de la versió anterior del lloc, que no diuen quan es va fer cada
exercici, i per això no compten per a cap tram. Surt amb zero exercicis i
sense examen. Es resol així que envia el codi d'ara.

**«Té 12 exercicis amb data de fora del tram triat».** (Estàndard) Ha fet
feina, però en dies que no són entre les dues dates que has posat. L'avís diu
de quins dies són: si el tram t'ha quedat curt, canvia les dates i torna a
generar.

**«Han arribat sense data».** (Estàndard) El codi es va enviar més de 12
setmanes després de fer aquells exercicis. Com que no se sap de quin tram són,
no compten per a cap. Es resol demanant el codi al final de cada tram.

**«Les preguntes surten de només 2 problemes diferents.»** (Estàndard) La
feina d'aquell alumne en aquell tram es concentra en pocs exercicis amb molts
apartats. El sorteig no ho pot arreglar i per això ho diu.

**«Cap bloc arriba als 3 exercicis mínims.»** (Personalitzat) L'alumne encara
no té prou feina feta per examinar-lo d'un tema concret. Pots abaixar el llindar, però pensa
què vol dir el número: amb dos exercicis fets d'un bloc, la prova no mesura
res.

**El mateix codi sota dos correus.** L'analitzador ho marca. Sol voler dir que
han treballat al mateix navegador; val la pena preguntar-ho abans de donar-hi
més voltes.

**L'alumne no pot triar els temes quan genera el codi, i és a posta.** Un botó,
una fotografia sencera, cap decisió per part seva. El filtre per temes el fas
tu, al pas 4, amb les caselles.

---

## El formulari

Quatre camps, en aquest ordre:

1. **Correu** — activa «Recull adreces electròniques» perquè Google el posi
   sol. El lloc no demana mai el nom: el correu *és* la identitat.
2. **«Selecciona la classe»** — resposta curta o desplegable, amb els grups que
   facis servir.
3. **«Enganxa aquí el codi que has copiat»** — **paràgraf** (resposta llarga).
   Els codis d'un alumne amb molt historial passen dels 400 caràcters.
4. *(Opcional)* **«Quins temes vols que et pregunti?»** — text lliure. És el
   camp que et diu quines caselles has de deixar marcades al pas 4. Afegir-lo
   no trenca res: l'analitzador ignora les columnes que no coneix.

Enllaça el formulari a un full de càlcul (Respostes → icona verda de Sheets).
La capçalera que ve de fàbrica diu «step-quiz», un nom antic del projecte; és
cosmètic i no afecta res. L'analitzador troba la columna del codi encara que
la capçalera canviï, perquè busca cadenes que comencin per `RC`.
