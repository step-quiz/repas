# Bug de UX/pedagogia: la resolució no s'ofereix sola

**Puja aquests 5 fitxers** sobre l'estat que ja tens publicat.

## El bug

A `js/practica.js`, dins de `$("#comprova").onclick`, quan l'exercici es
tancava:

```js
if (!encert) $("#veure").click();
```

Si l'últim intent era erroni, el propi codi **clicava el botó "Mostra la
resolució" en nom de l'alumne**. La resolució apareixia sense que ell
l'hagués demanada.

És un bug real, no d'estil, per dos motius:

- **Mirar la resolució ha de ser una decisió de l'alumne**, presa amb un
  gest propi — igual que demanar una pista és decisió seva. Que
  l'aplicació la mostri sola converteix «veure la resolució» en una cosa
  que li **passa** a l'alumne, no en una cosa que **ell fa**.
- **Trenca la simetria amb el cas d'encert.** Si respons bé, ningú et
  clica el botó per tu. Si falles els dos intents, sí. No hi ha cap raó
  pedagògica per al tracte diferent.

La línia ve de lluny —hi era ja abans del treball en paral·lel— i va
sobreviure perquè cap prova mirava aquest camí concret: `test_a11y.js`
audita el DOM de `practica.html` a fons, però comprova ATRIBUTS
(role, aria-checked, aria-live...), no el MOMENT en què es dispara
l'acció, i per això no el va atrapar.

## La correcció

Treure la línia i prou. El botó queda sempre visible i sempre per prémer;
mai premut per l'aplicació.

## Prova nova

`tests/test_flux_resolucio.js`, 15 comprovacions amb un DOM real
(jsdom), que fixen la propietat perquè no hi torni:

- `#resolucio` i `#veredicte` buits en obrir l'exercici
- Segueixen buits triant i comprovant una opció incorrecta (1r intent)
- **El punt clau**: quan l'exercici es tanca després del 2n intent
  erroni, el botó «Mostra la resolució» és visible però `#resolucio`
  **segueix buit** — ningú l'ha premut encara
- Només prement el botó explícitament apareix la resolució
- El mateix per al cas d'encert (simetria)

Reprodueix el bug del codi original abans d'arreglar-lo: amb la línia
`if (!encert) $("#veure").click();` posada, **2 de les 15 fallen**
exactament als punts que l'esperaven.

## De propina

`tests/test_a11y.js` (de l'agent d'accessibilitat) existia però **no
estava connectat** a `tests/executa.sh` — les seves 28 comprovacions no
corrien mai amb la resta. Ara sí. La suite completa puja de 173+49=222 a
**265 comprovacions**, totes en verd.

## Provar-ho

```sh
npm install --no-save jsdom     # si encara no hi és
sh tests/executa.sh
```
