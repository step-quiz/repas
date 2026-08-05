# Analitzador: període sota demanda, dates, exemple i un error de recompte

**Puja aquests 7 fitxers sobre el teu repositori.** Substitueix qualsevol
paquet anterior d'aquesta tanda: aquest els conté tots.

| Fitxer | |
|---|---|
| `tools/analitzador-plantilla.html` · `analitzador-repas.html` | modificat / regenerat |
| `exemple-respostes.csv` · `tools/fes-exemple.js` · `EXEMPLE-LLEGEIX-ME.md` | nous |
| `README.md` · `HANDOVER.md` | modificats |

---

## 1. El període i la feina, sota demanda

La pestanya **Progrés del trimestre** demana les coses abans de calcular res:
període (amb presets de trimestre), setmanes amb feina i exercicis en total.
El càlcul el dispara el botó **Accepta i calcula**.

Si toques un paràmetre després de calcular, el botó es posa ambre i avisa;
les notes no es mouen fins que el prems. Sobre la taula queda escrit sempre
amb quines condicions s'han calculat:

> **20/09/2026 – 05/12/2026** · es demanen **11 setmanes** amb feina i
> **60 exercicis**, ponderats per dificultat · pesos 35/35/20/10

Avisa si falten dates, si estan a l'inrevés, i si ningú no ha enviat res entre
les dues (llavors diu quin rang cobreixen els codis de debò). Qui té codis al
full però cap dins del període hi surt amb un zero i l'etiqueta «res en aquest
període».

## 2. Format de data del formulari

`8/5/2026` es llegia com al 8 de maig quan el codi era del 5 d'agost. Ara es
detecta comparant-ho amb la data que el codi porta a dins, per majoria de tot
el full, i l'analitzador diu quin format ha triat.

## 3. Recompte inflat quan un alumne perd el navegador

**Aquest és el més important.** El progrés viu al `localStorage`: si l'alumne
esborra les dades, canvia de dispositiu o treballa en una finestra privada,
torna a començar de zero i el seu codi següent porta **menys** exercicis que
l'anterior.

La línia de base amb què es calculava la feina de cada període era l'últim
codi rebut. Després d'una pèrdua, això feia que tot el que l'alumne repetia es
tornés a comptar: en una simulació d'algú que va fer 40 exercicis, els va
perdre i en va refer 13, **l'analitzador en comptava 47**.

Ara la línia de base és **acumulativa**: la unió de tot el que s'ha vist. En
ús normal és exactament el mateix, perquè cada codi conté l'anterior; però
davant d'una pèrdua, el que es repeteix ja no es torna a comptar. La mateixa
simulació dona ara **40**, que és el correcte.

A més, la caiguda es detecta i s'avisa: hi ha un ⚠ a la fila de l'alumne, el
detall diu quan va passar i de quant a quant, i el resum de classe els llista
per si convé recordar-los que facin servir sempre el mateix navegador.

## 4. Full de respostes d'exemple

`exemple-respostes.csv`: 4 alumnes, 26 enviaments, del 20/9 al 5/12 de 2026.
Els codis són reals. Carrega'l, ves a **Progrés del trimestre**, posa del
`2026-09-20` al `2026-12-05` amb 11 setmanes i 60 exercicis, i prem el botó.
`EXEMPLE-LLEGEIX-ME.md` explica què representa cada alumne.
