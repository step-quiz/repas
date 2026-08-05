# Punt 8: centralització i dispersió al Full 11 (+ tot el pendent)

**Puja aquests 17 fitxers.** El paquet és autosuficient i substitueix
qualsevol dels anteriors d'aquesta tanda.

Inclou també tot el que quedava pendent de l'última tanda (període sota
demanda a l'analitzador, format de data, recompte inflat en perdre el
navegador, format RC2 i full d'exemple): si no havies pujat aquells paquets,
amb aquest n'hi ha prou.

---

## El buit que es tapa

El Full 11 no tenia **cap** mesura de centralització ni de dispersió: cap
mitjana, cap mediana, cap moda, cap desviació típica. Un alumne podia fer-lo
sencer i sortir-ne sabent muntar taules de freqüències i llegir gràfics, i
sense saber calcular una mitjana. És contingut de 4t d'ESO i el prerequisit
directe de l'estadística de 1r de batxillerat, sobretot a Ciències Socials.

**39 exercicis nous** en dos blocs. El full passa de 52 a 91 preguntes; el
projecte, de 739 a 778.

| Bloc | Exercicis | Què hi ha |
|---|---:|---|
| Mitjana, mediana i moda | 22 | Les tres mesures des d'una llista i des d'una taula de freqüències; mitjana ponderada; efecte d'un valor extrem; de la mitjana a la dada que falta; **quina mesura respon cada pregunta** |
| Recorregut i desviació típica | 17 | Recorregut; desviacions i per què sumen zero; variància i desviació típica; des de taula de freqüències; dos grups amb la mateixa mitjana; coeficient de variació; efecte de transformar les dades |

Numerats **260–274**: els números 1–259 són els de la font, i barrejar-hi
material nou faria impossible saber d'on surt cada cosa.

Sempre que es pot, els exercicis **reutilitzen les dades que ja surten al
full**: els viatges de l'exercici 222, les talles de calçat del 227. L'alumne
retroba dades que ja ha recomptat i veu que d'una mateixa taula en surten
preguntes noves.

## Els exercicis que expliquen per què serveix això

- **272** — dos grups amb la mateixa mitjana i dispersió molt diferent. És el
  motiu de ser del bloc sencer: la mitjana tota sola gairebé mai no descriu
  prou bé un conjunt de dades.
- **266** — cinc amics que han llegit 3, 4, 5, 6 i 7 llibres, i n'arriba un
  que n'ha llegit 60. La mitjana gairebé es duplica; la mediana es mou mig
  punt. Amb la nota de per què els sous i els preus dels pisos es donen amb la
  mediana.
- **269** — les desviacions sumen zero, sempre, amb qualsevol conjunt de
  dades. És exactament el motiu pel qual la variància les eleva al quadrat.
- **264** — un botiguer que ha de decidir quina talla encarrega. No demana
  calcular sinó **triar** la mesura.

## El que també calia tocar

- **El tutor no hi arribava.** La prova d'estadística del test inicial ara és
  la mitjana des d'una taula de freqüències, que és la destresa pont: no la
  pots fer sense entendre què és una freqüència. Apunta als quatre blocs del
  full. Els blocs abastables pel tutor passen de 34 a 36.
- **23 etiquetes d'error noves** al catàleg (`MEDIANA_SENSE_ORDENAR`,
  `DESVIACIONS_SENSE_QUADRAT`, `VARIANCIA_PER_DESVIACIO`, `CV_SENSE_DIVIDIR`,
  `CONSTANT_AFECTA_DISPERSIO`…). Totes amb text propi, de manera que el panell
  «els errors que repeteixes» funciona també als blocs nous.

## Els codis ja emesos segueixen valent

Això era el que més em preocupava: el codi de verificació guarda els estats
**per posició**, i afegir exercicis a un full podria desplaçar-los tots.

Per això `c_centralitzacio` va **l'últim** a la llista de mòduls del Full 11:
els ítems nous s'afegeixen al final. Comprovat:

- els 52 ítems que hi havia segueixen exactament a les mateixes posicions;
- cap dels altres 11 fulls no s'ha mogut;
- el codi de prova que em vas enviar es continua llegint igual, amb els seus
  7 exercicis i els seus identificadors correctes.

## Verificació

- **29 comprovacions independents** de tots els estadístics nous, recalculats
  amb `statistics` i `Fraction` i contrastats amb el banc compilat: mitjanes,
  medianes, modes, recorreguts, variàncies, desviacions típiques, la mitjana
  ponderada, la dada que falta i el coeficient de variació. Cap discrepància.
- Les 110 comprovacions funcionals de sempre, totes en verd.
- Compilació determinista dels 12 fulls.
