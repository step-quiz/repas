# Correcció del format de data + full de respostes d'exemple

**Puja aquests 7 fitxers sobre el teu repositori.** La resta ja la tens bé:
he comprovat els 75 fitxers del teu GitHub i estaven tots correctes.

## Què hi ha

**Correcció (4 fitxers)**

| Fitxer | Canvi |
|---|---|
| `tools/analitzador-plantilla.html` | Detecció del format de data + comptador «Oberts i deixats» |
| `analitzador-repas.html` | Regenerat a partir de la plantilla |
| `HANDOVER.md` | Documenta la detecció del format |
| `README.md` | Esmenta el full d'exemple |

**Exemple (3 fitxers)**

| Fitxer | Què és |
|---|---|
| `exemple-respostes.csv` | 4 alumnes, 26 enviaments, 1r trimestre de 2026 |
| `tools/fes-exemple.js` | El generador, per si vols un altre escenari |
| `EXEMPLE-LLEGEIX-ME.md` | Què representa cada alumne i què hauries de veure |

## L'error que has trobat

La teva fila deia `8/5/2026 10:50:45` i l'analitzador la llegia com al **8 de
maig**, quan el codi s'havia generat el **5 d'agost**. El teu full exporta en
`mes/dia/any` i jo assumia `dia/mes/any`.

La qualificació del trimestre no se'n ressentia (fa servir la data que porta
el codi a dins, no la del formulari) i la marca de temps tampoc, perquè només
en fa servir l'hora. Però la columna «Enviat» sortia amb una data equivocada.

Amb dies de l'1 al 12 els dos formats són indistingibles mirant la data sola.
Ara es resolen comparant-la amb la data del codi —entre generar-lo i
enviar-lo passen minuts, no mesos— i es decideix **per majoria per a tot el
full**, que és molt més robust que fila a fila. L'analitzador et diu quin
format ha triat al costat de «26 codis llegits».

Provat amb els cinc casos: `m/d/Y` amb dia ambigu, `d/m/Y` amb dia ambigu,
dia més gran que 12 (sense ambigüitat), format ISO, i majoria amb diverses
files.

## De propina

Al detall de cada codi hi ha ara **«Oberts i deixats»**: els exercicis que
l'alumne va obrir i no va contestar. Al teu codi real n'hi havia 8, i no
apareixien enlloc. No compten ni per al volum ni per a la nota, però dir-ho
és informació útil.
