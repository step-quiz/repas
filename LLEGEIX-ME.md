# Fases 0 i 1: xarxa de proves i antifrau honest

**Puja aquests 34 fitxers.** El paquet és autosuficient: inclou també el
contingut nou del punt 8 (fulls 6, 8, 10 i 11) per si encara no l'havies
pujat.

```sh
sh tests/executa.sh          # 107 comprovacions, sense instal·lar res
```

---

## Fase 0 — La xarxa

### Objectiu 1 · Suite de proves (7 fitxers nous a `tests/`)

**107 comprovacions**, sense dependències. Es fa servir `unittest` de la
biblioteca estàndard i no `pytest`: el projecte no en té cap, de dependència,
i afegir-ne una perquè les assercions siguin més boniques seria canviar una
propietat que val la pena per comoditat. Les de l'analitzador necessiten un
DOM; si `jsdom` no hi és, se salten amb un avís i la resta continua.

| Fitxer | | Comprova |
|---|---:|---|
| `test_lib.py` | 31 | Ajudants de `lib.py` i que `_valida()` aturi el que diu |
| `test_banc.py` | 30 | El banc compilat: estructura, matemàtiques i coherència de taules |
| `codi.test.js` | 22 | Format del codi: empaquetat, control, compatibilitat RC1 |
| `analitzador.test.js` | 24 | L'analitzador amb DOM real |

**Dues decisions que fan que serveixin de res.** Les de matemàtiques
**recalculen la resposta de zero**, amb `Fraction` i sense importar res de
`tools/`: comprovar `lib.py` amb `lib.py` no detectaria mai una errada del
motor. I cada prova de `Presentacio` **és una cicatriu**, no una regla d'estil
inventada: els `$$` doblats del 4/64a, el `36--64` del discriminant, les
opcions sense delimitadors del 4/72a, les notes amb rastres de `.tex`, els
170a–e sense enunciat.

> **Escrivint-les, la prova del `36--64` va atrapar un cas nou.** Al Full 11,
> el diagnòstic del 268c deia `$10--4$`: jo mateix havia reintroduït al punt 8
> el defecte que havia corregit al punt 9. Està corregit.

### Objectiu 2 · `.gitignore`

Per a `tools/_taules.json`, `__pycache__/` i `node_modules/` (que només
apareix si instal·les jsdom per a les proves).

Una correcció a l'informe: **el teu GitHub sí que és control de versions**. El
que passa és que el ZIP que exportes no porta `.git`, i qui l'analitzi des del
ZIP conclou que no n'hi ha.

### Objectiu 3 · Les taules de recompte

N'hi havia **tres**, no dues, i la tercera la veu l'alumne: `js/inici.js`
portava els totals escrits a mà i la portada deia **«0/21»** d'un full que en
té 48. Passava als quatre fulls que va créixer el punt 8.

- `js/inici.js` ara els **deriva de `RE_TAULES`**, que la portada ja carrega
  per al botó del codi. La còpia desapareix; el número escrit es queda només
  com a xarxa.
- El `HANDOVER` guanya les columnes **de la font / nous / total**, perquè els
  dos números que no quadraven comptaven coses diferents a posta.
- `TaulesCoherents` compara els tres llocs a cada execució de les proves.

---

## Fase 1 — Antifrau

### Objectiu 7 · El mateix codi sota alumnes diferents

Marca **⇄** quan una mateixa cadena apareix sota dos correus. Un codi és la
fotografia d'un navegador: si surt dues vegades, o se l'han passat o
comparteixen ordinador i sessió.

- **Que un alumne reenviï el seu no es marca.** Passa cada setmana amb qui
  envia dos cops per si de cas, i marcar-ho seria soroll.
- Hi ha resum a sobre de la taula (*«anna = bru»*) i filtre propi.
- **La integritat mana sobre l'origen**: un codi trencat surt com a ✗ encara
  que estigui repetit. Si el ⇄ tapés el ✗, es perdria la marca que de veritat
  diu que hi ha un problema. El ⇄ sí que s'acumula amb el `!`, perquè diuen
  coses diferents.

### Objectiu 9 · Què verifica el ✓ i què no

La pestanya d'ajuda ara ho diu sense embuts, amb els tres forats coneguts:

> **El que NO verifica: qui ha fet la feina.** El ✓ diu que el codi és
> autèntic, no que l'hagi guanyat qui l'envia.
>
> - Fer els exercicis **al navegador d'un altre**: cadascú se n'emporta un codi
>   diferent i el ⇄ no hi arriba.
> - **Fabricar un codi des de la consola**: tot el que cal és a `js/codi.js`,
>   que ha de ser públic perquè el botó funcioni. Amb servidor s'evitaria;
>   sense, no.
> - Fer els exercicis **amb ajuda al costat**: la forma de les dades és
>   idèntica a la de qui treballa sol.
>
> Serveixen per veure la feina i atrapar la còpia mandrosa, no per garantir
> l'autoria.

---

## El que NO he fet, i per què

Els objectius **2 i 3 del teu informe antifrau** (relleu progressiu, fabricar
codis des de la consola) i el **6** (fer-se arreglar els ítems fallats) **no
tenen solució** amb aquesta arquitectura. No és que siguin difícils: sense
servidor i sense un secret que el navegador de l'alumne no vegi, qualsevol
cosa que hi fes seria teatre. La decisió ha estat **documentar-ho a la cara**
en comptes de fingir que es tapa, i és el que fa l'objectiu 9.

Els objectius **8** (comparació de patrons entre alumnes) i **10** (agrupació
temporal) els he deixat fora d'aquesta fase a propòsit. Són més cars, tenen
fals positiu real, i abans de construir-los val la pena decidir fins on vols
que l'eina s'assembli a un sistema de vigilància: això és repàs formatiu, i
com més ho sembli, més canviarà el que els alumnes hi fan. El 7 val la pena
perquè és barat i atrapa el cas mandrós; el 8 i el 10 ja són una altra cosa.
