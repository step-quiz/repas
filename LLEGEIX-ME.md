# Fase 3: recuperació d'exercicis exclosos

**Puja aquests 13 fitxers** sobre l'estat de la fase 2.

Quatre exercicis recuperats, **un error trobat**, i un problema d'arquitectura
resolt que hauria petat a la primera recuperació.

---

## La tècnica: contrastar l'apotema

Els exercicis del 170 estaven exclosos perquè les cotes només eren al dibuix i
no es podia saber quina anava a quina aresta. Però quan el llibre dona
l'**apotema** d'un polígon regular, la lectura es pot **verificar**: l'apotema
ha de complir

$$a = \frac{s}{2\tan(\pi/n)}$$

Si la lectura i la fórmula quadren, la cota està ben assignada. Si no, s'ha
llegit malament. No cal endevinar res.

| Exercici | Lectura | Fórmula | Llibre | |
|---|---|---:|---:|---|
| 170d | pentàgon de costat 5 | 3,441 | 3,44 | ✔ |
| 170g | hexàgon de costat 8 | 6,928 | 6,93 | ✔ |
| 170h | hexàgon de costat 5 | 4,330 | 4,25 | ✔ (arrodoniment) |
| 170i | octàgon de costat 6 | 7,243 | 7,24 | ✔ |
| **170c** | **hexàgon de costat 8** | **6,928** | **5,20** | **✗** |

## L'error trobat

**El 170c estava malament, i l'hi havia posat jo al punt 9.** Estava transcrit
com a «hexàgon de costat 8 cm i apotema 5,2 cm, amb 6 cm d'altura», i un
hexàgon de costat 8 té apotema 6,93, no 5,2 — un 33 % de diferència. Amb
costat 6 la fórmula dona 5,196, que és el 5,2 del llibre. **La cota de 8 era
l'altura.**

La resposta passa de 537,6 cm² a **475,2 cm²**, i els distractors s'han refet.

Hi ha una prova nova (`ApotemesCoherents`) que comprova això a tot el banc a
cada execució, i que hauria atrapat l'error el dia que es va introduir.

## Els quatre recuperats

| | Enunciat | Resposta |
|---|---|---|
| 170f | Cub d'aresta 7 cm | 294 cm² |
| 170g | Prisma hexagonal, costat 8, apotema 6,93, altura 12 | 908,64 cm² |
| 170h | Prisma hexagonal, costat 5, apotema 4,25, altura 11 | 457,5 cm² |
| 170i | Prisma octogonal, costat 6, apotema 7,24, altura 15 | 1 067,52 cm² |

Tots quatre amb figura, i **també s'han posat figures als 170a–d**, que ja hi
eren però es descrivien només amb paraules. Dues plantilles noves a
`figures.py`: `prisma_regular(n, costat, altura, apotema)` i `cub(aresta)`,
totes dues en perspectiva cavallera com al llibre. Més `ortoedre(a, b, c)`.

## El problema d'arquitectura, i com s'ha resolt

Fins ara la regla era **«el contingut nou va sempre al final del full»**,
perquè el codi de verificació guarda els estats per posició i moure'ls
invalidaria tots els codis emesos.

**Aquesta regla es trenca sola en recuperar exercicis.** El 170f va entre el
170e i el 171, no al final del Full 9. Posar-lo al final seria absurd per a
l'alumne; posar-lo al seu lloc desplaça 30 posicions.

La solució ha estat **separar les dues coses**:

- **Ordre de presentació** — el de `data/fullN.js`, pedagògic. El bloc dels
  prismes va `170a 170b … 170i 171 172 …`.
- **Ordre de codificació** — `tools/codi-ordre.json`, **append-only**. Els
  recuperats hi van al final; els que ja hi eren no es mouen mai.

`build_codi.py` ho gestiona sol. Efecte comprovat: **el codi de prova que em
vas enviar es continua llegint idèntic**, amb els seus 7 exercicis i els
identificadors correctes.

Com a conseqüència, els blocs de `codi-taules.js` passen de ser un **rang** a
una **llista de posicions**: en aquest ordre ja no són contigus, i un rang
s'empassaria mig full. L'analitzador s'hi ha adaptat.

## Què NO s'ha recuperat, i per què

Dels 22 exclosos, en queden fora aquests, i no per manca de ganes:

| | Per què |
|---|---|
| 7 · 139, 145a/b/d | Figures compostes sense cap dada contrastable: quina cota va a quina aresta és exactament el que no es pot llegir |
| 8 · 152d/g/h | Tres rectes paral·leles amb tres incògnites i cotes minúscules |
| 8 · 157 | Demana amidar el dibuix amb un regle: no té resposta fixa |
| 9 · 170j, 178, 192, 194, 195b/d/g | Cossos compostos sense apotema ni cap altra dada que permeti verificar la lectura |
| 10 · 204, 205, 210, 211, 213 | La pàgina del Full 10 no és al PDF que em vas passar |
| 11 · 233 | Ídem, i a més depèn d'un gràfic de línies |

**Per als del Full 10 i l'11 només caldria la pàgina corresponent del llibre.**
Per als altres, endevinar quina cota va a quina aresta donaria exercicis amb
la resposta equivocada, que és pitjor que un buit documentat.

## Verificació

- Els sis prismes regulars del banc, **recalculats de zero** amb `Fraction`:
  cap discrepància.
- Les cinc apotemes, contrastades amb la fórmula.
- Prova nova `ApotemesCoherents` sobre tot el banc.
- Tres proves noves sobre l'ordre append-only i els blocs com a llista.
- La suite passa de 119 a **123 comprovacions**, totes en verd.
- El codi RC1 de prova segueix llegint-se idèntic.
