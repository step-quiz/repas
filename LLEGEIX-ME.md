# Analitzador: període i feina sota demanda, correcció de dates, i exemple

**Puja aquests 7 fitxers sobre el teu repositori.** Substitueix el paquet
anterior (`repas-correccio-dates.zip`) si encara no l'havies pujat: aquest ja
el conté.

| Fitxer | |
|---|---|
| `tools/analitzador-plantilla.html` | modificat |
| `analitzador-repas.html` | regenerat |
| `exemple-respostes.csv` | nou |
| `tools/fes-exemple.js` | nou |
| `EXEMPLE-LLEGEIX-ME.md` | nou |
| `README.md` · `HANDOVER.md` | modificats |

---

## 1. El període i la feina, sota demanda

La pestanya **Progrés del trimestre** ara demana les coses abans de calcular
res, i el càlcul el dispara un botó:

- **Període** — de quina data a quina, amb presets de trimestre. En obrir la
  pestanya proposa el rang que cobreixen els codis del full, però és una
  proposta: no calcula res fins que ho acceptes.
- **Quanta feina demanes** — setmanes amb feina nova i exercicis en total.
  Qui arribi a les dues xifres té el màxim d'aquests dos apartats.
- **Accepta i calcula** — recalcula totes les qualificacions.

Si toques qualsevol paràmetre després de calcular, **el botó es posa ambre** i
avisa que hi ha canvis sense aplicar; les notes de la taula no es mouen fins
que el prems. Posar una nota a algú no és una previsualització, i veure les
xifres ballar mentre s'escriu un any convida a mirar-se-les abans que
estiguin acabades.

Sobre la taula hi ha sempre una capçalera amb les condicions del càlcul:

> **20/09/2026 – 05/12/2026** · es demanen **11 setmanes** amb feina i
> **60 exercicis**, ponderats per dificultat · pesos 35/35/20/10

Una nota sense això al costat no vol dir res, i si en fas una captura o
n'exportes el CSV convé que hi consti.

**Casos que avisa:** falten dates, dates a l'inrevés, i —el més útil— quan
ningú no ha enviat res entre les dues dates: llavors et diu quin rang cobreixen
els codis de debò, que sol voler dir que t'has equivocat d'any.

**Qui té codis al full però cap dins del període hi surt amb un zero** i una
etiqueta «res en aquest període». No haver fet res durant el trimestre és una
nota, no una absència de dades.

---

## 2. La correcció del format de data

La teva fila deia `8/5/2026 10:50:45` i l'analitzador la llegia com al **8 de
maig**, quan el codi era del **5 d'agost**: el teu full exporta en
`mes/dia/any` i jo assumia `dia/mes/any`.

Ara es resol comparant la marca del formulari amb la data que el codi porta a
dins —entre generar-lo i enviar-lo passen minuts, no mesos— i es decideix per
majoria per a tot el full. L'analitzador diu quin format ha triat al costat de
«26 codis llegits».

La qualificació no se'n ressentia (fa servir la data de dins del codi) ni la
comprovació de temps (només en fa servir l'hora); només sortia malament la
columna «Enviat».

També hi ha ara, al detall de cada codi, el comptador **«Oberts i deixats»**:
els exercicis que l'alumne va obrir sense contestar. Al teu codi real n'hi
havia 8 i no apareixien enlloc. No compten ni per al volum ni per a la nota.

---

## 3. El full de respostes d'exemple

`exemple-respostes.csv`: 4 alumnes, 26 enviaments, del 20/9 al 5/12 de 2026,
amb les teves mateixes capçaleres. Els codis són reals.

Prova-ho: obre l'analitzador, carrega el CSV, ves a **Progrés del trimestre**,
posa del `2026-09-20` al `2026-12-05` amb **11 setmanes** i **60 exercicis**,
i prem **Accepta i calcula**.

`EXEMPLE-LLEGEIX-ME.md` explica què representa cada alumne i què hauries de
veure. En resum: la constant treu 9,9; el que s'ho empassa tot l'última
setmana treu 5,9 tot i fer 76 exercicis amb un 99 % d'encert.
