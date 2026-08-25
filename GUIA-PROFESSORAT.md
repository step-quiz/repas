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
l'anterior, així que a tu només t'interessa l'últim que t'ha enviat.

---

## Generar la prova

1. Obre el full de respostes del formulari a Google Sheets, `Ctrl+A`, `Ctrl+C`.
2. Obre `analitzador-repas.html` (doble clic), pestanya **Full de respostes**,
   enganxa-ho al quadre i prem **Llegeix**.
3. Ves a la pestanya **Prova escrita** i tria l'alumne al desplegable. Si
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

## Coses que et passaran

**«Aquest codi es llegeix, però el control d'integritat no quadra.»** No es
genera cap prova, i és volgut: el codi s'ha copiat a mitges o s'ha tocat.
Demana-li de nou a l'alumne; no cal cap altra investigació.

**«Cap bloc arriba als 3 exercicis mínims.»** L'alumne encara no té prou feina
feta per examinar-lo d'un tema concret. Pots abaixar el llindar, però pensa
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
