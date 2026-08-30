# Fer una prova escrita a partir del que l'alumne ha practicat

Guia per al professorat. Els altres documents del projecte (`README.md`,
`WORKFLOW-EXAMEN.md`, `HANDOVER.md`) estan escrits per a qui hi programa;
aquest és el que necessites tu per fer funcionar el cicle a classe.

---

## Què has de tenir

Dues coses, i **han d'anar sempre juntes, a la mateixa carpeta**:

- `analitzador-repas.html`
- la carpeta `vendor/katex/`

L'HTML porta a dins tota la lògica i els 892 exercicis: no necessita servidor,
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

Ara bé, això val per a l'alumne, no per a tu. Segons quin dels dos modes
facis servir, el que necessites del full de respostes és diferent:

- Al mode **personalitzat** només t'interessa l'últim codi de cadascú.
- Al mode **estàndard de 3 setmanes**, **no esborris ni sobreescriguis les
  files antigues del full de respostes.** Aquest mode reparteix les preguntes
  entre períodes, i per saber en quin període es va fer cada exercici ha de
  comparar els codis successius d'un mateix alumne: el codi porta la data en
  què es va generar, però no la data de cada exercici. Sense l'historial, tota
  la feina d'un alumne queda atribuïda al dia de l'últim enviament i el
  repartiment per períodes deixa de tenir sentit. Demana'ls un codi nou al
  final de cada període i deixa que el full del formulari s'ompli fila a fila.

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
   - **Mida**: 8, 14 o 20 preguntes.
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

Pensat per al ritme fix: cada 3 setmanes, 5 preguntes per a tothom. Cada 3
períodes (9 setmanes) comença un trimestre nou i el compte torna a zero, de
manera que el primer examen del trimestre següent només mira aquelles 3
setmanes.

1. Carrega el full de respostes igual que abans, **amb tot l'historial**
   d'enviaments (vegeu l'avís de més amunt).
2. Pestanya **Prova escrita** › **Mini-examen estàndard**.
3. Posa la **data d'inici del curs**. És l'única data que has de tocar: a
   partir d'aquí els períodes es numeren sols. La resta de camps ja porten els
   valors habituals (trams de 3 setmanes, 3 per trimestre, 5 preguntes, mínim
   de 10 exercicis) i normalment no cal canviar-los.
4. Tria **quin tram examines**. Surt marcat quin és el que toca avui; si
   generes l'examen uns dies tard, o mires dades d'un altre curs, pots triar
   qualsevol dels que tenen feina.
5. **Genera els exàmens del grup.** Surt una taula amb tota la classe: quants
   exercicis nous té cadascú al tram que s'examina, quants n'acumula al
   trimestre, i un avís ambre a qui no arriba al mínim. Clicant una fila en
   veus l'examen i el pots imprimir sol, que és el que et caldrà quan algú
   hagi faltat.
6. Imprimeix. Com al mode personalitzat, hi ha **dos botons separats**: tots
   els exàmens en un document i totes les solucions en un altre. Des del
   diàleg d'impressió pots desar cada un com a PDF.

Les 5 preguntes surten a l'atzar d'entre els exercicis que l'alumne ha fet,
però no totes amb la mateixa probabilitat: el tram que s'examina hi surt més
sovint que el penúltim, i el penúltim més que l'antepenúltim. Cap no queda
exclòs del tot, així que qualsevol combinació és possible; només que unes són
més probables que d'altres.

**Ningú no queda bloquejat.** Si un alumne no arriba al mínim d'exercicis,
l'examen se li genera igualment amb el que tingui, i el motiu queda anotat al
**full de correcció**, mai al full que rep ell.

---

## Coses que et passaran

**«Aquest codi es llegeix, però el control d'integritat no quadra.»** No es
genera cap prova, i és volgut: el codi s'ha copiat a mitges o s'ha tocat.
Demana-li de nou a l'alumne; no cal cap altra investigació.

**Un alumne surt en ambre amb «sota 10».** (Estàndard) No ha arribat al mínim
d'exercicis nous al tram que s'examina. L'examen se li fa igual, amb preguntes
de trams anteriors del mateix trimestre si cal, i l'avís queda al full de
correcció perquè ho tinguis present en corregir. Ell no el veu.

**«Només ha enviat 1 codi.»** (Estàndard) Sense almenys dos enviaments no es
pot saber en quin tram va fer cada exercici, i tot compta com a fet el dia de
l'enviament. L'examen es genera, però el repartiment per trams no vol dir res
en aquell alumne. Es resol demanant-li el codi cada 3 setmanes.

**«Les 5 preguntes surten de només 2 problemes diferents.»** (Estàndard) La
feina d'aquell alumne en aquell tram es concentra en pocs exercicis amb molts
apartats. El sorteig no ho pot arreglar —no hi ha res més d'on triar— i per
això ho diu: l'examen tindrà apartats del mateix problema.

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
la capçalera canviï, perquè busca cadenes que comencin per `RC1`/`RC2`.
