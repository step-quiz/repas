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

Pensat per al ritme fix: cada 3 setmanes, entre 10 i 20 exercicis, i un
examen per a cadascú **fet només amb aquella feina**.

1. Carrega el full de respostes igual que abans.
2. Pestanya **Prova escrita** › **Mini-examen estàndard**.
3. **Les dates dels nou trams ja hi són posades**, no les has d'escriure:

   | | 1r trimestre | 2n trimestre | 3r trimestre |
   |---|---|---|---|
   | Tram 1 | 14/09 – 04/10 | 28/12 – 17/01 | 22/03 – 11/04 |
   | Tram 2 | 12/10 – 01/11 | 25/01 – 14/02 | 12/04 – 02/05 |
   | Tram 3 | 09/11 – 29/11 | 22/02 – 14/03 | 03/05 – 23/05 |

   Amb **Veure'l o canviar-lo** les pots modificar si un any el calendari
   canvia; **Torna a les del curs** les recupera. Si les canvies, canvia
   també les de `js/calendari.js`, que és d'on les llegeix el lloc de
   l'alumne.
4. Tria **quin tram examines** i prem **Genera els exàmens del grup**.
5. Imprimeix. Hi ha **dos botons separats**: tots els exàmens en un document
   i totes les solucions en un altre. **Baixa les notes (CSV)** et dona la
   nota de feina de tothom per passar-la al teu full de notes.

### Quins exercicis compten

- **Només els fets dins de les tres setmanes del tram**, segons la data del
  primer intent. Cap exercici d'un tram anterior no pot sortir a l'examen. La
  feina feta en una setmana de descans no és de cap tram.
- **Només els 20 primers**, per ordre de quan es van fer. Si un alumne en fa
  25, els 5 últims no compten ni per a la nota ni per a l'examen. La taula ho
  indica amb «compten els 20 primers».
- Cada apartat és un exercici: el 62a i el 62b en són dos.

### La nota de feina del tram

Cada exercici que compta aporta el seu valor sobre 10:

| Com l'ha resolt | Valor | Aporta |
|---|---|---|
| A la primera | 10 | 1 |
| Amb una pista | 9,5 | 0,95 |
| Amb dues pistes o més | 8 | 0,8 |
| Al segon intent | 7 | 0,7 |
| Fallat | 0 | 0 |

Amb la suma *x*: **nota = mín(10, 8·∛(x/10))**. Deu exercicis a la primera
fan un 8, i vint un 10. Un exercici fallat no suma però tampoc no resta, de
manera que provar-ne un de difícil no pot fer baixar mai la nota.

Un encert **al segon intent** compta com a segon intent encara que l'alumne
hagi obert pistes. Si no fos així, obrir una pista just després d'equivocar-se
convertiria un 0,7 en un 0,95 i esborraria l'error.

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

---

## L'avís que veu l'alumne

El botó **Codi** li diu quants exercicis porta al tram en curs i que se'n
demanen entre 10 i 20. En una setmana de descans, li diu que el que faci no
compta per a cap tram i quan comença el següent.

A més, quan falten **5 dies o menys** perquè es tanqui un tram, l'alumne que
entri al lloc hi troba un avís a dalt amb la data de tancament i quants
exercicis hi porta. Es mostra com a molt **dues vegades per tram, en dies
diferents**: un avís que surt cada dia deixa de llegir-se.

---

## Coses que et passaran

**«Aquest codi es llegeix, però el control d'integritat no quadra.»** No es
genera cap prova, i és volgut: el codi s'ha copiat a mitges o s'ha tocat.
Demana-li de nou a l'alumne; no cal cap altra investigació.

**Un alumne ha fet «Eliminar tots els codis».** Des del botó **Codi**, l'alumne
pot buidar tot el seu progrés (li demana confirmació, perquè no es pot desfer),
i el codi torna a zero. El que ja t'havia enviat no es perd: l'analitzador es
queda amb el primer resultat de cada exercici dels codis anteriors, de manera
que tornar a fer un exercici després de netejar no li millora la nota. El codi
següent porta el comptador de reinicis, i a l'analitzador ho veuràs com una
pèrdua de feina. El que no hagués enviat encara, sí que es perd.

**Un alumne surt en ambre amb «sota 10».** (Estàndard) No ha arribat al mínim
d'exercicis al tram que s'examina. L'examen se li fa igual amb el que tingui, i
l'avís queda al full de correcció. Ell no el veu.

**«Tenen la data deduïda dels enviaments».** (Estàndard) L'alumne ha enviat
codis d'abans del canvi, que no porten dates. L'analitzador les dedueix
comparant els seus enviaments, com feia abans, i ho avisa perquè algun
exercici podria ser d'un altre tram. Es resol sol així que envia un codi nou.

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
