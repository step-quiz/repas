# Punt 8 complet: contingut nou als Fulls 6, 8, 10 i 11

**Puja aquests 25 fitxers.** El paquet és autosuficient i substitueix
qualsevol dels anteriors: inclou també l'analitzador, el format RC2, el full
d'exemple i tota la resta que quedava pendent.

**121 exercicis nous.** El banc passa de 739 a **860 preguntes**.

| Full | Ex. | De → a | Blocs nous |
|---|---|---|---|
| 11 · Estadística | 260–274 | 52 → 91 | Mitjana, mediana i moda · Recorregut i desviació típica |
| 6 · Proporcionalitat | 275–284 | 21 → 48 | El factor multiplicador · Descomptes, IVA i interessos |
| 8 · Tales i semblança | 285–294 | 32 → 59 | Càlcul amb escales · Raó de semblança, àrees i volums |
| 10 · Funcions | 295–304 | 45 → 73 | Construir rectes · Construir paràboles i problemes |

---

## Full 11 — el buit més gros

No hi havia **cap** mesura de centralització ni de dispersió. Un alumne podia
fer el full sencer i sortir-ne sabent muntar taules de freqüències i sense
saber calcular una mitjana.

Els que expliquen per què serveix el bloc: el **272** (dos grups amb la
mateixa mitjana i dispersió oposada), el **266** (cinc amics que han llegit
3–7 llibres i n'arriba un amb 60: la mitjana gairebé es duplica, la mediana es
mou mig punt), el **269** (les desviacions sumen zero *sempre*, que és el
motiu de la variància) i el **264**, que no demana calcular sinó **triar** la
mesura.

Reutilitza les dades que ja surten al full: els viatges del 222, les talles
del 227.

## Full 6 — el factor multiplicador

El full tenia 21 preguntes. La idea que vertebra els blocs nous és que pujar
un 15 % és multiplicar per 1,15 i baixar-lo és multiplicar per 0,85: qui ho
interioritza deixa de sumar percentatges que no se sumen.

El **284** i el **280** ho diuen des de dos costats: pujar i baixar el mateix
tant per cent **sempre** deixa el preu per sota del de partida, i dos
descomptes del 20 % i el 10 % no fan un 30 % sinó un 28 %. El **277** ataca
l'error més habitual: per desfer una pujada del 10 % no es baixa un 10 %, es
divideix.

També hi ha IVA amb descompte, interès simple i repartiment proporcional.

## Full 8 — el que li passa a les àrees i als volums

El material no deia enlloc que si les longituds es multipliquen per *k*, les
àrees ho fan per *k*² i els volums per *k*³. És el malentès més tossut de tota
la semblança: mitja classe contesta que una maqueta a escala 1:2 té la meitat
de volum.

El **294** ho tanca amb una maqueta d'un edifici: la mateixa escala 1:50 dona
tres factors diferents (50, 2 500 i 125 000) segons si el que mesures té una,
dues o tres dimensions. I el **293** va a l'inrevés: de la raó d'àrees o de
volums a la de longituds, amb arrel quadrada o cúbica.

## Full 10 — producció, no reconeixement

De 45 preguntes, només 8 demanaven construir alguna cosa. Els 25 exercicis
nous són tots de producció: de dues dades a l'equació, d'una recta a la seva
paral·lela o perpendicular, de dues rectes al punt de tall, del vèrtex a
l'equació de la paràbola, i d'un enunciat en text a la funció que el descriu
(**303**, tarifa amb quota fixa; **304**, el corral amb màxima àrea, que és
un problema de 1r de batxillerat resolt sense derivades).

---

## El que també calia tocar

- **El tutor hi ha d'apuntar.** Un bloc nou no serveix de res si el test
  inicial no hi porta ningú. S'han ampliat les proves de percentatges,
  escales, paràboles i estadística; els blocs abastables pel tutor passen de
  34 a **42 de 54**.
- **La prova d'estadística del test inicial** ara és la mitjana des d'una
  taula de freqüències, que és la destresa pont: no la pots fer sense
  entendre què és una freqüència.
- **56 etiquetes d'error noves** al catàleg, més 25 de preexistents al Full 10
  que no en tenien. La cobertura del catàleg passa del 94 % al **97 %**.

## Els codis ja emesos segueixen valent

El codi de verificació guarda els estats **per posició**, i afegir exercicis a
un full podria desplaçar-los tots. Per això els mòduls nous van **els últims**
a la llista de mòduls de cada full. Comprovat als quatre:

```
full 6   21 -> 48   els 21 primers intactes
full 8   32 -> 59   els 32 primers intactes
full 10  45 -> 73   els 45 primers intactes
full 11  52 -> 91   els 52 primers intactes
```

I el codi de prova que em vas enviar es continua llegint igual, amb els seus
7 exercicis i els identificadors correctes.

## Verificació

- **77 comprovacions independents** dels fulls 6, 8 i 10, recalculant-ho tot
  de fora amb `Fraction` i SymPy i contrastant-ho amb el banc compilat:
  factors, percentatges inversos, variacions, descomptes encadenats, IVA,
  interessos, repartiments, escales, raons *k*/*k*²/*k*³, equacions de rectes,
  punts de tall, vèrtexs, talls amb els eixos i paràboles des del vèrtex.
- **29 comprovacions independents** del Full 11 (mitjanes, medianes, modes,
  recorreguts, variàncies, desviacions típiques, coeficient de variació).
- Les 110 comprovacions funcionals de sempre (botó, analitzador, integració,
  trimestre), totes en verd.
- Compilació determinista dels 12 fulls.

## Un avís

Aquests 121 exercicis són **material nou escrit per mi**, no transcrit de cap
font verificada. L'aritmètica està comprovada de manera independent, però la
redacció, la tria de distractors i el criteri pedagògic no els ha revisat
ningú més. Convindria que els llegissis abans de posar-los davant d'alumnes,
sobretot el 264, el 273, el 281b i el 304, que són els més interpretatius.
