# Fase 2: la canonada de figures

**Puja aquests 24 fitxers** sobre l'estat de les fases 0 i 1.

Aquesta fase **no dibuixa figures**: en munta el camí, d'extrem a extrem, i el
prova amb un cas real (els quatre apartats del 123). La feina de dibuixar-ne
quaranta és la fase 4, i sense això seria prematura.

---

## Què s'ha muntat

```
tools/figures.py  →  Q(figura=…)  →  data/fullN.js  →  practica.js
                                                    →  REVISIO-fullN.html
```

**`tools/figures.py`** (nou) genera els SVG amb paràmetres, no els dibuixa.
De moment hi ha tres plantilles: `quadrat_diagonal`, `rectangle_diagonal` i
`triangle_rectangle`. És el mateix criteri que la resta del projecte —les
respostes es calculen, no s'escriuen— i té el mateix efecte: canviar el costat
d'un quadrat de 4 a 10 no demana redibuixar res.

**`lib.Q()`** rep `figura=`, i **`lib._valida()`** atura la compilació si no
compleix cinc regles. Cadascuna evita que una figura trenqui alguna cosa que
ja funciona:

| Regla | Per què |
|---|---|
| `viewBox` i cap mida fixa a l'`<svg>` | El CSS li dona l'amplada; amb `width` fix no s'adapta al mòbil |
| `role="img"` i un `<title>` descriptiu | Sense això, amb un lector de pantalla no se sap què hi ha dibuixat |
| Cap `$` a dins | KaTeX no entra dins d'un SVG: els dòlars es veurien tal qual |
| `currentColor` als traços | La figura hereta el color del text; no cal mantenir dues paletes |
| **L'enunciat ha de seguir dient les mesures** | La figura ACOMPANYA l'enunciat, no el substitueix |

Aquesta última és la que més importa i té prova pròpia: qui faci servir un
lector de pantalla ha de poder resoldre l'exercici igualment.

## Els 123a–d, com a cas de prova

Quatre figures reals: dos quadrats amb la diagonal marcada i dos rectangles.
L'enunciat continua dient «Quadrat de costat 4 cm, $x$ és la diagonal»; el
dibuix hi és perquè s'entengui més de pressa.

Pots veure com queden obrint `mostra-figures.html`, que és una pàgina a part
amb les quatre.

## Detalls que val la pena saber

**Els fitxers de dades no han crescut.** La figura només s'escriu al JSON si
n'hi ha: guardar `"figura": ""` a cada ítem hauria fet créixer els dotze
fitxers per no dir res. Resultat: **només canvia `data/full7.js`**, i els
altres onze són byte a byte iguals.

**Cap codi de verificació deixa de valer.** `js/codi-taules.js` és idèntic:
les figures no toquen ni l'ordre ni el nombre d'ítems.

**Els dotze `REVISIO-*.html` canvien** perquè la plantilla porta el CSS de les
figures, encara que onze fulls no en tinguin cap. És inevitable i innocu.

## Proves noves

Sis a `test_lib.py` (què accepta i què rebutja la validació) i sis a
`test_banc.py` (què compleixen les figures que ja són al banc). La suite passa
de 107 a **119 comprovacions**.

## Què ve després

- **Fase 3** — recuperar els 22 ítems exclosos. És el millor retorn per esforç
  que queda: la feina d'interpretar les figures ja està raonada als comentaris
  d'exclusió, i les del PDF es poden llegir.
- **Fase 4** — ampliar `figures.py` amb les plantilles que falten (polígon
  regular amb apotema, prisma, piràmide, con, cilindre) i aplicar-les als ~40
  ítems d'alt benefici. El Full 9 primer: unes trenta figures són quatre
  plantilles amb paràmetres diferents.
