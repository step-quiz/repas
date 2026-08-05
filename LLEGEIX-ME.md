# Sistema de codis — puja aquests 19 fitxers i ja està

**Puja'ls tots, tal com estan, sense pensar-hi.** El paquet és autosuficient:
tant se val si havies pujat una versió anterior del sistema de codis o no.

`data/` i els `REVISIO-*.html` **no** s'han tocat gens amb aquesta feina, per
això no hi són. La resta del projecte, tampoc.

308 kB en total. Cap fitxer passa dels 82 kB.

---

## Dos que has de pujar encara que semblin iguals

`js/hub.js` i `js/inici.js` **tornen a la versió d'abans del sistema de
codis**. Si vas pujar el ZIP anterior, ara mateix el teu repositori en té una
versió que crida una funció que ja no existeix (`RE_CODI_UI.pinta`), i la
pàgina d'un full peta en obrir-se. Pujant els d'aquest paquet queda arreglat.

Si no vas arribar a pujar aquell ZIP, aquests dos fitxers són idèntics als que
ja tens i pujar-los no fa res. En qualsevol cas: puja'ls.

---

## Els 18

**Nous (10)**

| Fitxer | Què és |
|---|---|
| `js/codi.js` | Generació **i** lectura del codi, al mateix fitxer |
| `js/codi-ui.js` | El botó flotant i la finestra del codi |
| `js/codi-taules.js` | GENERAT — ordre d'ítems, blocs i dificultats |
| `analitzador-repas.html` | GENERAT — l'eina del professorat, autònoma |
| `tools/build_codi.py` | Munta les taules a partir de `data/` |
| `tools/build_analitzador.py` | Incrusta taules + `js/codi.js` a la plantilla |
| `tools/analitzador-plantilla.html` | Plantilla de l'analitzador |
| `tools/build_tot.py` | Encadena tota la compilació en l'ordre correcte |
| `tools/codi-etiquetes.txt` | Ordre **append-only** de les etiquetes d'error |
| `CODIS.md` | Explicació completa del sistema |

**Modificats (9)**

| Fitxer | Canvi |
|---|---|
| `index.html` · `full.html` · `practica.html` · `itinerari.html` · `resultat.html` | Cinc `<script>` al final, perquè hi surti el botó |
| `js/hub.js` · `js/inici.js` | **Revertits**: el panell incrustat el substitueix el botó flotant |
| `README.md` | Secció «El codi per al professorat» + `build_tot.py` |
| `HANDOVER.md` | Secció 3.4 amb les decisions de disseny |

---

## Provar-ho

Obre `index.html` i mira a dalt a la dreta: hi ha d'haver el botó **Codi**.
Fes un exercici i el botó passarà a dir `Codi 1`.

Després obre `analitzador-repas.html` amb doble clic (no cal servidor ni
connexió) i prem **«Posa-hi un exemple»**: fabrica sis alumnes fictícis, un
amb el codi manipulat i un que l'ha enviat tard.

Per veure l'anàlisi de trimestre necessites codis de dies diferents del mateix
alumne, cosa que l'exemple no simula: fes-ho amb dades reals, o genera't uns
quants codis tu mateix al llarg d'uns dies.

## Recompilar

```
cd tools && python3 build_tot.py
```

Compila els dotze fulls, regenera `js/codi-taules.js` i torna a muntar
l'analitzador, en aquest ordre. Genera també `tools/_taules.json`, que és un
intermedi i no cal versionar.

## Dues coses per recordar

- **`js/codi.js` porta el generador i el lector junts**, i l'analitzador
  carrega aquest mateix fitxer, no una còpia. Si se separen, divergeixen i el
  símptoma és el pitjor possible: codis que es llegeixen malament sense que
  res avisi.
- **`tools/codi-etiquetes.txt` és append-only.** El codi guarda l'*índex* de
  l'etiqueta d'error, no el nom: reordenar-lo faria il·legibles tots els codis
  ja emesos. `build_codi.py` ho vigila i atura la compilació.

Tot això, explicat llarg, a `CODIS.md`.
