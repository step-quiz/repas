/* Generat per tools/build.py — no editeu aquest fitxer a mà. */
window.FULL = {
 "full": 11,
 "titol": "Full 11 — Estadística",
 "subtitol": "Variables estadístiques, taules de freqüències i representacions gràfiques. Mesures de centralització i de dispersió.",
 "blocs": [
  {
   "id": "variables",
   "titol": "Variables estadístiques",
   "descripcio": "Tipus de variable (qualitativa/quantitativa, discreta/contínua) i mostra o població.",
   "items": [
    "218a",
    "218b",
    "218c",
    "218d",
    "218e",
    "218f",
    "218g",
    "219a",
    "219b",
    "219c",
    "219d",
    "219e"
   ]
  },
  {
   "id": "frequencies",
   "titol": "Taules de freqüències",
   "descripcio": "Recompte de dades i freqüències absolutes, acumulades, relatives i percentatges.",
   "items": [
    "220a",
    "220b",
    "220c",
    "221a",
    "221b",
    "221c",
    "221d",
    "222a",
    "222b",
    "223a",
    "223b",
    "223c",
    "224a",
    "224b",
    "224c",
    "224d",
    "225a",
    "225b",
    "226a",
    "226b",
    "226c",
    "226d",
    "235a",
    "235b",
    "234a",
    "234b"
   ]
  },
  {
   "id": "grafics",
   "titol": "Gràfics estadístics",
   "descripcio": "Diagrames de barres, histogrames, polígons de freqüències i gràfics de sectors.",
   "items": [
    "227",
    "228a",
    "228b",
    "228c",
    "229",
    "230a",
    "230b",
    "230c",
    "230d",
    "231",
    "232a",
    "232b",
    "232c",
    "234c"
   ]
  },
  {
   "id": "centralitzacio",
   "titol": "Mitjana, mediana i moda",
   "descripcio": "Les tres mesures de centralització, des d'una llista i des d'una taula de freqüències, i quina respon cada pregunta.",
   "items": [
    "260a",
    "260b",
    "260c",
    "260d",
    "261a",
    "261b",
    "261c",
    "261d",
    "262a",
    "262b",
    "262c",
    "262d",
    "263a",
    "263b",
    "263c",
    "264",
    "265a",
    "265b",
    "266a",
    "266b",
    "267a",
    "267b"
   ]
  },
  {
   "id": "dispersio",
   "titol": "Recorregut i desviació típica",
   "descripcio": "Com d'esteses estan les dades: recorregut, variància, desviació típica i coeficient de variació.",
   "items": [
    "268a",
    "268b",
    "268c",
    "269a",
    "269b",
    "270a",
    "270b",
    "270c",
    "271a",
    "271b",
    "272a",
    "272b",
    "273a",
    "273b",
    "274a",
    "274b",
    "274c"
   ]
  }
 ],
 "errors": {
  "ACUMULADA_MAL_LLEGIDA": "Has llegit malament la columna de freqüències acumulades. Busca dins de quin valor cau la posició que et fa falta, no quin valor té aquella freqüència.",
  "ARREL_MAL_APLICADA": "L'arrel no s'ha aplicat on tocava. Aïlla primer la quantitat que va sota l'arrel i fes-la al final, sobre el valor ja aïllat.",
  "ARREL_OBLIDADA": "T'has quedat amb el quadrat (o el cub) de la incògnita. De $x^2=k$ encara falta l'arrel per arribar a $x$: comprova sempre quina de les dues quantitats et demanen.",
  "CONSTANT_AFECTA_DISPERSIO": "SUMAR el mateix a totes les dades les desplaça totes igual: el centre es mou però les distàncies entre elles no, i la dispersió es manté. MULTIPLICAR, en canvi, sí que estira les distàncies i canvia la dispersió.",
  "CRITERI_AGRUPACIO_MAL": "El criteri per agrupar en intervals no és el nombre de dades sinó com estan repartides: si els valors són molt dispersos i gairebé no es repeteixen, una taula valor a valor no resumeix res.",
  "CV_SENSE_DIVIDIR": "Has comparat dues desviacions típiques directament. Com que van en les unitats de cada variable, no es poden comparar entre magnituds diferents: cal dividir cada $\\sigma$ entre la seva mitjana (coeficient de variació).",
  "DESVIACIONS_AL_QUADRAT": "Has elevat al quadrat quan es demanaven les desviacions tal com són, amb el seu signe.",
  "DESVIACIONS_SENSE_QUADRAT": "Has sumat les desviacions sense elevar-les al quadrat, i per això et dona zero. Sempre dona zero, amb qualsevol conjunt de dades: és exactament el motiu pel qual la variància les eleva al quadrat.",
  "DIAGRAMA_HISTOGRAMA_CONFOSOS": "El diagrama de barres (amb separació entre barres) s'utilitza per a variables discretes o qualitatives; l'histograma (sense separació) s'utilitza per a variables contínues agrupades en intervals.",
  "DISCRETA_CONTINUA_CONFOSES": "Una variable quantitativa és discreta quan només pot prendre valors aïllats (típicament un recompte), i contínua quan pot prendre qualsevol valor decimal dins d'un interval.",
  "DIVIDIT_PER_VALORS_DIFERENTS": "Has dividit pel nombre de valors DIFERENTS en comptes de pel nombre de DADES. A la mitjana, un valor repetit compta tantes vegades com apareix.",
  "DIVISIO_OBLIDADA": "T'has quedat amb la suma sense dividir-la entre el nombre de dades. La variància és una MITJANA de quadrats, no una suma.",
  "DIVISIO_SOBRERA": "Has tornat a dividir per alguna cosa que ja estava tinguda en compte. Escriu la fórmula sencera i substitueix-hi els valors d'un sol cop.",
  "EL_MES_GRAN": "El més gran dels nombres només és el m.c.m. si tots els altres el divideixen. Comprova-ho abans de donar-lo per bo.",
  "ESCALA_ALTERA_DADES": "Canviar l'escala vertical d'un gràfic no crea ni elimina cap dada: la forma es manté, només canvien els números de l'eix.",
  "ES_POT_DETERMINAR": "Has dit que no es pot saber, però amb les dades de l'enunciat n'hi ha prou. Abans de descartar una pregunta, mira si algun teorema o criteri et permet respondre-la amb el que ja tens.",
  "EXTREM_SENSE_EFECTE": "Has donat per fet que una dada molt gran o molt petita no canvia res. La mitjana sí que se'n ressent, perquè surt de sumar-ho tot; la mediana molt menys, perquè només mira quin valor queda al mig.",
  "FREQUENCIA_NO_PONDERADA": "Amb una taula de freqüències, cada valor s'ha de multiplicar per la seva freqüència abans de sumar: $\\bar{x}=\\frac{\\sum x_i f_i}{N}$. Fer la mitjana només dels valors diferents ignora quantes vegades surt cadascun.",
  "FREQ_ABSOLUTA_ACUMULADA_CONFOSES": "La freqüència absoluta $f_i$ és el recompte d'un valor concret; la freqüència absoluta acumulada $F_i$ és la suma de totes les freqüències fins a aquell valor, inclòs.",
  "FREQ_RELATIVA_MAL_CALCULADA": "La freqüència relativa d'un valor s'obté dividint la seva freqüència absoluta pel nombre TOTAL de dades, no per cap altre nombre.",
  "F_ACUMULADA_NO_CREIXENT": "La freqüència absoluta acumulada $F_i$ mai pot disminuir a mesura que $i$ creix: cada $F_i$ inclou totes les dades fins aquell punt, així que com a mínim es queda igual.",
  "INTERVAL_LIMIT_MAL_ASSIGNAT": "Revisa a quin interval pertany cada dada: amb intervals $[a,b)$, el límit inferior $a$ hi pertany però el superior $b$ no (pertany al següent interval).",
  "INVERTIDA": "Has invertit la fracció. Simplificar no canvia quin terme és a dalt i quin a baix.",
  "MEDIANA_PER_MITJANA": "Has confós la mediana amb la mitjana. La mitjana es CALCULA (sumar-ho tot i dividir); la mediana es BUSCA (ordenar i mirar quina queda al mig).",
  "MEDIANA_PER_MODA": "Has confós la mediana amb la moda. La mediana és el valor central un cop ordenades; la moda és el que es repeteix més, estigui on estigui.",
  "MEDIANA_SENSE_ORDENAR": "Has agafat el valor del mig de la llista tal com venia. La mediana només té sentit sobre les dades ORDENADES: aquest és el primer pas, sempre.",
  "MESURA_MAL_TRIADA": "El càlcul és correcte, però aquesta mesura no respon la pregunta que t'han fet. Abans de calcular, decideix si et pregunten on és el centre (mitjana, mediana), què es repeteix més (moda) o com d'esteses estan les dades (recorregut, desviació típica).",
  "MITJANA_NO_DIU_DISPERSIO": "La mitjana diu on és el centre, no com d'agrupades estan les dades al seu voltant. Dos conjunts amb la mateixa mitjana poden ser completament diferents: per això calen les mesures de dispersió.",
  "MODA_PER_FREQUENCIA": "Has donat quantes vegades es repeteix el valor, no quin valor és. La moda és una dada, no un recompte.",
  "MOSTRA_POBLACIO_INVERTIDES": "Convé estudiar tota la població quan aquesta és petita i accessible; convé estudiar-ne una mostra quan és molt gran o inabastable en la seva totalitat.",
  "N_MAL_COMPTAT": "Has fet servir un nombre de dades que no és el que toca. Compta'l bé: sovint la trampa és comptar només les dades conegudes i oblidar la que es busca.",
  "ORDRE_MULTIPLICACIO_DIVISIO": "La divisió i la multiplicació tenen la mateixa prioritat i es fan d'esquerra a dreta: no es pot agrupar la multiplicació primer perquè \"queda més bé\".",
  "PAS_INTERMEDI_PER_RESPOSTA": "El valor que has triat és correcte, però és un pas intermedi, no el que et demanen. Torna a llegir la pregunta i mira quina magnitud has d'acabar donant: sovint només falta una operació més.",
  "PERCENTATGE_DECIMAL_MAL": "El pas de tant per cent a decimal no és correcte: es divideix per $100$, així que $0{,}8\\,\\%=0{,}008$ i $8\\,\\%=0{,}08$. Compta les xifres.",
  "PERCENTATGE_MAL_CALCULAT": "El percentatge d'un valor s'obté multiplicant la seva freqüència relativa per $100$ (o, equivalentment, $\\frac{f_i}{N}\\cdot100$).",
  "PES_IGNORAT": "Has fet la mitjana simple, com si totes les parts valguessin el mateix. Amb pesos, cada valor es multiplica pel seu abans de sumar.",
  "PES_MAL_APLICAT": "Els pesos no s'han repartit bé: cada valor ha d'anar amb el SEU pes, no tots amb el mateix.",
  "POLIGON_MAL_CONSTRUIT": "El polígon de freqüències s'obté unint amb segments els punts que marquen l'alçada de cada barra, en l'ordre dels valors de la variable.",
  "PRODUCTE_PER_SUMA": "Has sumat on tocava multiplicar (o al revés). Torna a llegir quina operació es fa sobre les dades.",
  "QUALITATIVA_QUANTITATIVA_CONFOSES": "Una variable és quantitativa quan s'expressa amb un nombre (encara que no porti unitats), i qualitativa quan expressa una categoria o qualitat que no es mesura numèricament.",
  "RANG_PER_MEDIANA": "Has donat el recorregut on es demanava una mesura de centre. El recorregut diu com d'esteses estan les dades, no on és el mig.",
  "RECOMPTE_MAL_FET": "Torna a comptar les dades una per una: és fàcil saltar-se'n alguna o comptar-ne alguna dues vegades en un recompte llarg.",
  "SECTOR_ANGLE_MAL_CALCULAT": "L'angle de cada sector s'obté multiplicant la seva freqüència relativa pels $360^\\circ$ totals de la circumferència, no per cap altre nombre.",
  "SIGNE_FINAL": "El resultat té el signe canviat. Revisa quin dels dos termes és més gran en valor absolut.",
  "TOTAL_DADES_MAL_CALCULAT": "El nombre total de dades $N$ és la suma de totes les freqüències absolutes (o, equivalentment, l'última freqüència absoluta acumulada).",
  "VALOR_ABSOLUT_INDEGUT": "Has pres els valors absoluts on tocaven els valors amb signe (o al revés). Compte: el quadrat de $-3$ és $9$, no $3$.",
  "VARIANCIA_PER_DESVIACIO": "Has confós la variància amb la desviació típica. La desviació típica és l'ARREL de la variància, i va en les mateixes unitats que les dades.",
  "VEREDICTE_INVERTIT": "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del correcte: torna a comprovar la condició amb els valors concrets de l'enunciat."
 },
 "items": [
  {
   "id": "218a",
   "ex": 218,
   "ap": "a",
   "bloc": "variables",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Indica el tipus de variable estadística que estudiem i raona, en cada cas, si seria millor analitzar-ne una mostra o la població.",
   "enunciat": "La talla de l'alumnat d'un IES.",
   "opcions": [
    "Variable quantitativa contínua; s'estudia tota la població (un IES té un nombre d'alumnes petit i accessible)",
    "Variable quantitativa contínua; s'estudia una mostra, perquè mesurar tothom seria massa feina",
    "Variable quantitativa discreta; s'estudia una mostra",
    "Variable qualitativa; s'estudia tota la població"
   ],
   "pistes": [
    "Pensa si la talla es pot mesurar amb decimals (contínua) o només amb valors aïllats (discreta).",
    "Un IES és un grup relativament petit: es pot mesurar tothom sense necessitat de mostra."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUXVhbiBsYSBwb2JsYWNpw7Mgw6lzIHBldGl0YSBpIGFjY2Vzc2libGUgKGNvbSBsJ2FsdW1uYXQgZCd1biBzb2wgSUVTKSwgZWwgY3JpdGVyaSBoYWJpdHVhbCDDqXMgZXN0dWRpYXItbGEgc2VuY2VyYTsgbGEgbW9zdHJhIGVzIHJlc2VydmEgcGVyIGEgcG9ibGFjaW9ucyBncmFucyBvIGluYWJhc3RhYmxlcy4iLCAiTGEgdGFsbGEgcG90IHByZW5kcmUgcXVhbHNldm9sIHZhbG9yIGRlY2ltYWwgZGlucyBkJ3VuIGludGVydmFsIChubyBub23DqXMgdmFsb3JzIGHDr2xsYXRzKTogw6lzIGNvbnTDrW51YS4gSSBjb20gcXVlIHVuIElFUyB0w6kgdW4gbm9tYnJlIGQnYWx1bW5lcyBhYmFzdGFibGUsIGVzIHBvdCBlc3R1ZGlhciB0b3RhIGxhIHBvYmxhY2nDsywgbm8gY2FsIHJlY8OzcnJlciBhIHVuYSBtb3N0cmEuIiwgIkxhIHRhbGxhIMOpcyB1bmEgbWVzdXJhIG51bcOocmljYSAoZXMgcG90IG1lc3VyYXIgZW4gY2VudMOtbWV0cmVzLCBhbWIgZGVjaW1hbHMpOiDDqXMgcXVhbnRpdGF0aXZhLCBubyBxdWFsaXRhdGl2YS4iXSwgImVyciI6IFsiIiwgIk1PU1RSQV9QT0JMQUNJT19JTlZFUlRJREVTIiwgIkRJU0NSRVRBX0NPTlRJTlVBX0NPTkZPU0VTIiwgIlFVQUxJVEFUSVZBX1FVQU5USVRBVElWQV9DT05GT1NFUyJdLCAicmVzIjogWyJMYSB0YWxsYSDDqXMgdW5hIG1lc3VyYSBudW3DqHJpY2EgcXVlIGFkbWV0IHF1YWxzZXZvbCB2YWxvciBkZWNpbWFsOiB2YXJpYWJsZSBxdWFudGl0YXRpdmEgY29udMOtbnVhLiIsICJDb20gcXVlIGxhIHBvYmxhY2nDsyAobCdhbHVtbmF0IGQndW4gSUVTKSDDqXMgcGV0aXRhIGkgYWNjZXNzaWJsZSwgw6lzIHByZWZlcmlibGUgZXN0dWRpYXItbGEgdG90YSwgbm8gbm9tw6lzIHVuYSBtb3N0cmEuIl19"
  },
  {
   "id": "218b",
   "ex": 218,
   "ap": "b",
   "bloc": "variables",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Indica el tipus de variable estadística que estudiem i raona, en cada cas, si seria millor analitzar-ne una mostra o la població.",
   "enunciat": "La temperatura de la teva província.",
   "opcions": [
    "Variable quantitativa contínua; s'estudia tota la població, mesurant-la a tot arreu",
    "Variable quantitativa discreta; s'estudia tota la població",
    "Variable quantitativa contínua; s'estudia mitjançant una mostra (estacions meteorològiques representatives)",
    "Variable qualitativa; s'estudia mitjançant una mostra"
   ],
   "pistes": [
    "La temperatura admet qualsevol valor decimal: pensa si això la fa discreta o contínua.",
    "Una província té moltíssimes ubicacions: és realista mesurar-les totes, o convé triar-ne una mostra representativa?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJVbmEgcHJvdsOtbmNpYSB0w6kgaW5maW5pdGVzIHViaWNhY2lvbnMgcG9zc2libGVzOiBtZXN1cmFyLWxlcyB0b3RlcyDDqXMgaW52aWFibGUuIFBlciBhaXjDsiBzJ3V0aWxpdHphIHVuYSBtb3N0cmEgZCdlc3RhY2lvbnMgbWV0ZW9yb2zDsmdpcXVlcyByZXByZXNlbnRhdGl2ZXMsIG5vIHRvdGEgbGEgcG9ibGFjacOzLiIsICJMYSB0ZW1wZXJhdHVyYSBhZG1ldCBxdWFsc2V2b2wgdmFsb3IgZGVjaW1hbDogw6lzIGNvbnTDrW51YSwgbm8gZGlzY3JldGEuIEkgbWVzdXJhci1sYSBhIGNhZGEgcHVudCBleGFjdGUgZCd1bmEgcHJvdsOtbmNpYSBzZW5jZXJhIMOpcyBpbnZpYWJsZTogY2FsIHVuYSBtb3N0cmEgZCdlc3RhY2lvbnMgcmVwcmVzZW50YXRpdmVzLiIsICIiLCAiTGEgdGVtcGVyYXR1cmEgw6lzIHVuYSBtYWduaXR1ZCBudW3DqHJpY2EgcXVlIGVzIG1lc3VyYSBlbiBncmF1czogw6lzIHF1YW50aXRhdGl2YSwgbm8gcXVhbGl0YXRpdmEuIl0sICJlcnIiOiBbIk1PU1RSQV9QT0JMQUNJT19JTlZFUlRJREVTIiwgIkRJU0NSRVRBX0NPTlRJTlVBX0NPTkZPU0VTIiwgIiIsICJRVUFMSVRBVElWQV9RVUFOVElUQVRJVkFfQ09ORk9TRVMiXSwgInJlcyI6IFsiTGEgdGVtcGVyYXR1cmEgcG90IHByZW5kcmUgcXVhbHNldm9sIHZhbG9yIGRlY2ltYWw6IHZhcmlhYmxlIHF1YW50aXRhdGl2YSBjb250w61udWEuIiwgIk1lc3VyYXItbGEgY29udMOtbnVhbWVudCBhIHRvdGEgdW5hIHByb3bDrW5jaWEgw6lzIGludmlhYmxlLCBwZXIgYWl4w7Igcydlc3R1ZGlhIG1pdGphbsOnYW50IHVuYSBtb3N0cmEgKGVzdGFjaW9ucyByZXByZXNlbnRhdGl2ZXMpLiJdfQ=="
  },
  {
   "id": "218c",
   "ex": 218,
   "ap": "c",
   "bloc": "variables",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Indica el tipus de variable estadística que estudiem i raona, en cada cas, si seria millor analitzar-ne una mostra o la població.",
   "enunciat": "L'edat dels habitants d'un país.",
   "opcions": [
    "Variable quantitativa discreta (en anys complets); s'estudia mitjançant una mostra, perquè la població és molt gran",
    "Variable qualitativa; s'estudia mitjançant una mostra",
    "Variable quantitativa contínua; s'estudia mitjançant una mostra",
    "Variable quantitativa discreta; s'estudia tota la població, perquè és una dada important"
   ],
   "pistes": [
    "Si comptes l'edat en anys complets, quins valors pot prendre: aïllats o qualsevol decimal?",
    "Un país té una població enorme: és realista mesurar tothom?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiTCdlZGF0IMOpcyB1biBub21icmUgKGFueXMpOiDDqXMgdW5hIHZhcmlhYmxlIHF1YW50aXRhdGl2YSwgbm8gcXVhbGl0YXRpdmEuIiwgIlNpIGVzIG1lc3VyYSBlbiBhbnlzIGNvbXBsZXRzIChjb20gw6lzIGhhYml0dWFsKSwgbCdlZGF0IG5vbcOpcyBwcmVuIHZhbG9ycyBhw69sbGF0cyAoJDAsMSwyLFxcbGRvdHMkKTogZXMgY29uc2lkZXJhIGRpc2NyZXRhLCBubyBjb250w61udWEuIiwgIkxhIGltcG9ydMOgbmNpYSBkZSBsYSBkYWRhIG5vIGRldGVybWluYSBzaSBjYWwgbW9zdHJhIG8gcG9ibGFjacOzOiBlbCBxdWUgaG8gZGV0ZXJtaW5hIMOpcyBsYSBtaWRhLiBVbiBwYcOtcyB0w6kgdW5hIHBvYmxhY2nDsyBtb2x0IGdyYW4sIGFpeMOtIHF1ZSBzJ2VzdHVkaWEgbWl0amFuw6dhbnQgdW5hIG1vc3RyYS4iXSwgImVyciI6IFsiIiwgIlFVQUxJVEFUSVZBX1FVQU5USVRBVElWQV9DT05GT1NFUyIsICJESVNDUkVUQV9DT05USU5VQV9DT05GT1NFUyIsICJNT1NUUkFfUE9CTEFDSU9fSU5WRVJUSURFUyJdLCAicmVzIjogWyJDb21wdGFkYSBlbiBhbnlzIGNvbXBsZXRzLCBsJ2VkYXQgbm9tw6lzIHByZW4gdmFsb3JzIGHDr2xsYXRzOiB2YXJpYWJsZSBxdWFudGl0YXRpdmEgZGlzY3JldGEuIiwgIkxhIHBvYmxhY2nDsyBkJ3VuIHBhw61zIMOpcyBtb2x0IGdyYW4sIGFpeMOtIHF1ZSBzJ2VzdHVkaWEgbWl0amFuw6dhbnQgdW5hIG1vc3RyYS4iXX0="
  },
  {
   "id": "218d",
   "ex": 218,
   "ap": "d",
   "bloc": "variables",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Indica el tipus de variable estadística que estudiem i raona, en cada cas, si seria millor analitzar-ne una mostra o la població.",
   "enunciat": "El sexe dels habitants d'un poble.",
   "opcions": [
    "Variable qualitativa; s'estudia mitjançant una mostra, perquè sempre convé estalviar feina",
    "Variable qualitativa; s'estudia tota la població (un poble sol tenir una població abastable)",
    "Variable quantitativa discreta; s'estudia tota la població",
    "Variable quantitativa contínua; s'estudia tota la població"
   ],
   "pistes": [
    "El sexe s'expressa amb una categoria (home/dona), no amb un nombre.",
    "Un poble sol tenir una població petita i accessible: es pot estudiar sencera."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJVbiBwb2JsZSBzb2wgdGVuaXIgdW5hIHBvYmxhY2nDsyBwcm91IHBldGl0YSBpIGFiYXN0YWJsZSBjb20gcGVyIGVzdHVkaWFyLWxhIHNlbmNlcmE6IG5vIGNhbCByZWPDs3JyZXIgYSB1bmEgbW9zdHJhIG5vbcOpcyBwZXIgZXN0YWx2aWFyIGZlaW5hLiIsICIiLCAiRWwgc2V4ZSBubyDDqXMgdW5hIHF1YW50aXRhdCBxdWUgZXMgcHVndWkgbWVzdXJhciBhbWIgdW4gbm9tYnJlOiBleHByZXNzYSB1bmEgY2F0ZWdvcmlhLiDDiXMgdW5hIHZhcmlhYmxlIHF1YWxpdGF0aXZhLCBubyBxdWFudGl0YXRpdmEuIiwgIkVsIHNleGUgbm8gYWRtZXQgdmFsb3JzIG51bcOocmljcyBuaSBkZWNpbWFsczogbm8gw6lzIHVuYSB2YXJpYWJsZSBxdWFudGl0YXRpdmEgY29udMOtbnVhLCDDqXMgcXVhbGl0YXRpdmEuIl0sICJlcnIiOiBbIk1PU1RSQV9QT0JMQUNJT19JTlZFUlRJREVTIiwgIiIsICJRVUFMSVRBVElWQV9RVUFOVElUQVRJVkFfQ09ORk9TRVMiLCAiUVVBTElUQVRJVkFfUVVBTlRJVEFUSVZBX0NPTkZPU0VTIl0sICJyZXMiOiBbIkVsIHNleGUgZXhwcmVzc2EgdW5hIGNhdGVnb3JpYSwgbm8gdW5hIHF1YW50aXRhdDogdmFyaWFibGUgcXVhbGl0YXRpdmEuIiwgIkNvbSBxdWUgdW4gcG9ibGUgdMOpIHVuYSBwb2JsYWNpw7MgYWJhc3RhYmxlLCBlcyBwb3QgZXN0dWRpYXIgdG90YSwgc2Vuc2UgbmVjZXNzaXRhdCBkZSBtb3N0cmEuIl19"
  },
  {
   "id": "218e",
   "ex": 218,
   "ap": "e",
   "bloc": "variables",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Indica el tipus de variable estadística que estudiem i raona, en cada cas, si seria millor analitzar-ne una mostra o la població.",
   "enunciat": "Els diners gastats a la setmana pels teus amics.",
   "opcions": [
    "Variable quantitativa contínua; s'estudia mitjançant una mostra",
    "Variable qualitativa; s'estudia tota la població",
    "Variable quantitativa discreta; s'estudia tota la població",
    "Variable quantitativa contínua; s'estudia tota la població (el grup d'amics és petit)"
   ],
   "pistes": [
    "Els diners es mesuren amb decimals (euros i cèntims): discreta o contínua?",
    "El grup d'amics és petit: és realista preguntar a tothom?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCBncnVwIGQnYW1pY3Mgw6lzIHBldGl0IGkgYWNjZXNzaWJsZTogZXMgcG90IHByZWd1bnRhciBhIHRvdGhvbSwgbm8gY2FsIHRyaWFyLW5lIG5vbcOpcyB1bmEgbW9zdHJhLiIsICJFbHMgZGluZXJzIGdhc3RhdHMgZXMgbWVzdXJlbiBhbWIgdW4gbm9tYnJlIChldXJvcyBpIGPDqG50aW1zKTogw6lzIHVuYSB2YXJpYWJsZSBxdWFudGl0YXRpdmEsIG5vIHF1YWxpdGF0aXZhLiIsICJFbHMgZGluZXJzIGVzIHBvZGVuIG1lc3VyYXIgYW1iIHF1YWxzZXZvbCBwcmVjaXNpw7MgZGVjaW1hbCAoZXVyb3MgaSBjw6hudGltcyk6IGVzIGNvbnNpZGVyYSBjb250w61udWEsIG5vIGRpc2NyZXRhLiIsICIiXSwgImVyciI6IFsiTU9TVFJBX1BPQkxBQ0lPX0lOVkVSVElERVMiLCAiUVVBTElUQVRJVkFfUVVBTlRJVEFUSVZBX0NPTkZPU0VTIiwgIkRJU0NSRVRBX0NPTlRJTlVBX0NPTkZPU0VTIiwgIiJdLCAicmVzIjogWyJFbHMgZGluZXJzIGdhc3RhdHMgYWRtZXRlbiBxdWFsc2V2b2wgdmFsb3IgZGVjaW1hbDogdmFyaWFibGUgcXVhbnRpdGF0aXZhIGNvbnTDrW51YS4iLCAiQ29tIHF1ZSBlbCBncnVwIGQnYW1pY3Mgw6lzIHBldGl0IGkgYWNjZXNzaWJsZSwgZXMgcG90IGVzdHVkaWFyIHRvdCBlbCBncnVwLCBzZW5zZSBuZWNlc3NpdGF0IGRlIG1vc3RyYS4iXX0="
  },
  {
   "id": "218f",
   "ex": 218,
   "ap": "f",
   "bloc": "variables",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Indica el tipus de variable estadística que estudiem i raona, en cada cas, si seria millor analitzar-ne una mostra o la població.",
   "enunciat": "Els efectes d'un nou medicament en l'ésser humà.",
   "opcions": [
    "Sempre és una variable quantitativa; s'estudia tota la població",
    "Es pot estudiar amb variables qualitatives (tipus d'efecte) o quantitatives (intensitat); en qualsevol cas, sempre s'estudia mitjançant una mostra (assaig clínic)",
    "Sempre és una variable qualitativa; s'estudia tota la població",
    "Sempre és una variable qualitativa; s'estudia mitjançant una mostra"
   ],
   "pistes": [
    "Els efectes es poden descriure per tipus (categoria) o per intensitat (nombre): les dues lectures són possibles.",
    "Provar un medicament en tota la humanitat és impossible: pensa quin mètode s'utilitza en un assaig clínic real."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbmNhcmEgcXVlIGVzIG1lc3VyaSBsYSBpbnRlbnNpdGF0IGQndW4gZWZlY3RlIChxdWFudGl0YXRpdmEpLCBubyBlcyBwb3QgZXN0dWRpYXIgdG90YSBsYSBodW1hbml0YXQ6IGNhbCB1bmEgbW9zdHJhLCBjb20gZW4gcXVhbHNldm9sIGFzc2FpZyBjbMOtbmljLiIsICIiLCAiTm8gZXMgcG90IHByb3ZhciB1biBtZWRpY2FtZW50IGVuIHRvdGEgbGEgaHVtYW5pdGF0OiBuZWNlc3PDoHJpYW1lbnQgcydlc3R1ZGlhIG1pdGphbsOnYW50IHVuYSBtb3N0cmEgKHVuIGFzc2FpZyBjbMOtbmljIGFtYiB1biBncnVwIGRlIHZvbHVudGFyaXMpLiIsICJFbCB0aXB1cyBkZSBkYWRhIG5vIMOpcyBzZW1wcmUgcXVhbGl0YXRpdmE6IHNpIGVzIG1lc3VyYSBsYSBpbnRlbnNpdGF0IGRlIGwnZWZlY3RlLCBsYSB2YXJpYWJsZSDDqXMgcXVhbnRpdGF0aXZhLiBEZXDDqG4gZGUgY29tIGVzIHJlY3VsbGkgbGEgZGFkYS4iXSwgImVyciI6IFsiTU9TVFJBX1BPQkxBQ0lPX0lOVkVSVElERVMiLCAiIiwgIk1PU1RSQV9QT0JMQUNJT19JTlZFUlRJREVTIiwgIlFVQUxJVEFUSVZBX1FVQU5USVRBVElWQV9DT05GT1NFUyJdLCAicmVzIjogWyJTZWdvbnMgY29tIGVzIHJlY3VsbGkgbGEgZGFkYSwgbGEgdmFyaWFibGUgcG90IHNlciBxdWFsaXRhdGl2YSAodGlwdXMgZCdlZmVjdGUpIG8gcXVhbnRpdGF0aXZhIChpbnRlbnNpdGF0KS4iLCAiRW4gY2FwIGNhcyBlcyBwb3QgcHJvdmFyIGVuIHRvdGEgbGEgaHVtYW5pdGF0OiBzZW1wcmUgcydlc3R1ZGlhIG1pdGphbsOnYW50IHVuYSBtb3N0cmEgKHVuIGFzc2FpZyBjbMOtbmljKS4iXX0="
  },
  {
   "id": "218g",
   "ex": 218,
   "ap": "g",
   "bloc": "variables",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Indica el tipus de variable estadística que estudiem i raona, en cada cas, si seria millor analitzar-ne una mostra o la població.",
   "enunciat": "El color de cabells dels teus companys de classe.",
   "opcions": [
    "Variable qualitativa; s'estudia mitjançant una mostra",
    "Variable quantitativa contínua; s'estudia tota la població",
    "Variable quantitativa discreta; s'estudia tota la població",
    "Variable qualitativa; s'estudia tota la població (una classe té un nombre reduït de companys)"
   ],
   "pistes": [
    "El color de cabells s'expressa amb una categoria, no amb un nombre.",
    "Una classe té pocs companys: es poden estudiar tots sense mostra."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJVbmEgY2xhc3NlIHTDqSB1biBub21icmUgcmVkdcOvdCBkZSBjb21wYW55cywgcHJvdSBwZXRpdCBwZXIgZXN0dWRpYXItbG9zIHRvdHM6IG5vIGNhbCByZWPDs3JyZXIgYSB1bmEgbW9zdHJhLiIsICJFbCBjb2xvciBubyBhZG1ldCB2YWxvcnMgbnVtw6hyaWNzIG5pIGRlY2ltYWxzOiBubyDDqXMgcXVhbnRpdGF0aXZhLCDDqXMgcXVhbGl0YXRpdmEuIiwgIkVsIGNvbG9yIGRlIGNhYmVsbHMgbm8gcydleHByZXNzYSBhbWIgdW4gbm9tYnJlLCBzaW7DsyBhbWIgdW5hIGNhdGVnb3JpYSAocm9zLCBjYXN0YW55LCBuZWdyZS4uLik6IMOpcyB1bmEgdmFyaWFibGUgcXVhbGl0YXRpdmEuIiwgIiJdLCAiZXJyIjogWyJNT1NUUkFfUE9CTEFDSU9fSU5WRVJUSURFUyIsICJRVUFMSVRBVElWQV9RVUFOVElUQVRJVkFfQ09ORk9TRVMiLCAiUVVBTElUQVRJVkFfUVVBTlRJVEFUSVZBX0NPTkZPU0VTIiwgIiJdLCAicmVzIjogWyJFbCBjb2xvciBkZSBjYWJlbGxzIGV4cHJlc3NhIHVuYSBjYXRlZ29yaWE6IHZhcmlhYmxlIHF1YWxpdGF0aXZhLiIsICJDb20gcXVlIHVuYSBjbGFzc2UgdMOpIHVuIG5vbWJyZSByZWR1w690IGQnYWx1bW5lcywgZXMgcG90IGVzdHVkaWFyIHRvdGEgbGEgcG9ibGFjacOzLiJdfQ=="
  },
  {
   "id": "219a",
   "ex": 219,
   "ap": "a",
   "bloc": "variables",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "De les variables següents, quines són discretes?",
   "enunciat": "Nombre de mascotes.",
   "opcions": [
    "No és una variable estadística, perquè no es pot mesurar amb una unitat",
    "Contínua (pot prendre qualsevol valor decimal)",
    "Discreta (només pot prendre valors aïllats: $0,1,2,3,\\ldots$)",
    "Contínua, perquè el nombre de mascotes pot variar molt d'una persona a una altra"
   ],
   "pistes": [
    "Pensa si té sentit un valor \"intermedi\", com $2{,}5$ mascotes.",
    "Un recompte (nombre de coses) sempre és discret."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJTw60gcXVlIMOpcyB1bmEgdmFyaWFibGUgZXN0YWTDrXN0aWNhIHF1YW50aXRhdGl2YTogZXMgcG90IGNvbXB0YXIgaSBleHByZXNzYXIgYW1iIHVuIG5vbWJyZSAoZW5jYXJhIHF1ZSBubyBwb3J0aSB1bml0YXRzIGNvbSBtZXRyZXMgbyBxdWlsb3MpLiIsICJFbCBub21icmUgZGUgbWFzY290ZXMgw6lzIHVuIHJlY29tcHRlOiBubyB0w6kgc2VudGl0IHRlbmlyIFwiJDJ7LH01JCBtYXNjb3Rlc1wiLiBVbmEgdmFyaWFibGUgcXVhbnRpdGF0aXZhIMOpcyBkaXNjcmV0YSBxdWFuIG5vbcOpcyBwb3QgcHJlbmRyZSB2YWxvcnMgYcOvbGxhdHMgKHTDrXBpY2FtZW50IHVuIHJlY29tcHRlKSwgaSBjb250w61udWEgcXVhbiBwb3QgcHJlbmRyZSBxdWFsc2V2b2wgdmFsb3IgZGVjaW1hbCBkaW5zIGQndW4gaW50ZXJ2YWwuIiwgIiIsICJFbCBmZXQgcXVlIGVsIHZhbG9yIHZhcmnDryBtb2x0IG5vIGxhIGZhIGNvbnTDrW51YTogZWwgcXVlIGltcG9ydGEgw6lzIHNpIHBvdCBwcmVuZHJlIHZhbG9ycyBpbnRlcm1lZGlzLiBVbiByZWNvbXB0ZSBkZSBtYXNjb3RlcyBub23DqXMgYWRtZXQgbm9tYnJlcyBlbnRlcnMuIl0sICJlcnIiOiBbIlFVQUxJVEFUSVZBX1FVQU5USVRBVElWQV9DT05GT1NFUyIsICJESVNDUkVUQV9DT05USU5VQV9DT05GT1NFUyIsICIiLCAiRElTQ1JFVEFfQ09OVElOVUFfQ09ORk9TRVMiXSwgInJlcyI6IFsiRWwgbm9tYnJlIGRlIG1hc2NvdGVzIG5vbcOpcyBwb3Qgc2VyICQwLDEsMiwzLFxcbGRvdHMkOiBubyBhZG1ldCB2YWxvcnMgaW50ZXJtZWRpcy4gw4lzIERJU0NSRVRBLiJdfQ=="
  },
  {
   "id": "219b",
   "ex": 219,
   "ap": "b",
   "bloc": "variables",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "De les variables següents, quines són discretes?",
   "enunciat": "Talla de calçat.",
   "opcions": [
    "Discreta (pren un conjunt finit i aïllat de valors possibles, encara que hi hagi mitges talles)",
    "Contínua, perquè existeixen mitges talles (com el $38{,}5$)",
    "No es pot classificar sense saber la marca de sabates",
    "Contínua (pot prendre qualsevol valor decimal, com el pes o l'alçada)"
   ],
   "pistes": [
    "Compara-ho amb el pes o l'alçada, que sí que admeten qualsevol decimal: la talla de calçat, no.",
    "Encara que hi hagi mitges talles, els valors possibles són un conjunt finit i aïllat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUXVlIGhpIGhhZ2kgbWl0Z2VzIHRhbGxlcyBubyBsYSBjb252ZXJ0ZWl4IGVuIGNvbnTDrW51YTogY29udGludWEgc2VudCB1biBjb25qdW50IGZpbml0IGRlIHZhbG9ycyBhw69sbGF0cyAoJDM3LCAzN3ssfTUsIDM4LCAzOHssfTUsXFxsZG90cyQpLCBubyBxdWFsc2V2b2wgdmFsb3IgcG9zc2libGUgZW50cmUgZWxscy4iLCAiRWwgdGlwdXMgZGUgdmFyaWFibGUgKGRpc2NyZXRhKSBubyBkZXDDqG4gZGUgbGEgbWFyY2E6IHRvdGVzIGxlcyBlc2NhbGVzIGRlIHRhbGxlcyBmdW5jaW9uZW4gYW1iIHVuIGNvbmp1bnQgZmluaXQgZGUgdmFsb3JzIGHDr2xsYXRzLiIsICJFbmNhcmEgcXVlIHNlbWJsaSB1bmEgbWVzdXJhIGNvbSBlbCBwZXMgbyBsJ2Fsw6dhZGEsIGxhIHRhbGxhIGRlIGNhbMOnYXQgbm9tw6lzIHBvdCBwcmVuZHJlIHVuIGNvbmp1bnQgZmluaXQgZGUgdmFsb3JzIGHDr2xsYXRzIChsZXMgdGFsbGVzIHF1ZSBmYWJyaXF1ZW4gbGVzIG1hcnF1ZXMpLCBubyBxdWFsc2V2b2wgZGVjaW1hbC4gVW5hIHZhcmlhYmxlIHF1YW50aXRhdGl2YSDDqXMgZGlzY3JldGEgcXVhbiBub23DqXMgcG90IHByZW5kcmUgdmFsb3JzIGHDr2xsYXRzICh0w61waWNhbWVudCB1biByZWNvbXB0ZSksIGkgY29udMOtbnVhIHF1YW4gcG90IHByZW5kcmUgcXVhbHNldm9sIHZhbG9yIGRlY2ltYWwgZGlucyBkJ3VuIGludGVydmFsLiJdLCAiZXJyIjogWyIiLCAiRElTQ1JFVEFfQ09OVElOVUFfQ09ORk9TRVMiLCAiRVNfUE9UX0RFVEVSTUlOQVIiLCAiRElTQ1JFVEFfQ09OVElOVUFfQ09ORk9TRVMiXSwgInJlcyI6IFsiRW5jYXJhIHF1ZSBpbmNsb2d1aSBtaXRnZXMgdGFsbGVzLCBsYSB0YWxsYSBkZSBjYWzDp2F0IHByZW4gdW4gY29uanVudCBmaW5pdCBkZSB2YWxvcnMgYcOvbGxhdHMsIG5vIHF1YWxzZXZvbCBkZWNpbWFsLiDDiXMgRElTQ1JFVEEuIl19"
  },
  {
   "id": "219c",
   "ex": 219,
   "ap": "c",
   "bloc": "variables",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "De les variables següents, quines són discretes?",
   "enunciat": "Perímetre cranial.",
   "opcions": [
    "Discreta (només pren valors enters, en centímetres)",
    "Qualitativa, perquè depèn de la forma del cap de cada persona",
    "Discreta, perquè el perímetre cranial d'una persona no canvia",
    "Contínua (es pot mesurar amb qualsevol precisió decimal)"
   ],
   "pistes": [
    "El perímetre és una longitud: es pot mesurar amb qualsevol precisió decimal.",
    "Compara-la amb l'edat en anys complets (discreta) o amb el pes (continu): a quin grup s'assembla més?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJVbiBwZXLDrW1ldHJlIMOpcyB1bmEgbG9uZ2l0dWQ6IGVzIHBvdCBtZXN1cmFyIGFtYiBxdWFsc2V2b2wgcHJlY2lzacOzIGRlY2ltYWwgKG1pbMK3bMOtbWV0cmVzLCBkw6hjaW1lcy4uLiksIG5vIG5vbcOpcyBhbWIgbm9tYnJlcyBlbnRlcnMuIFVuYSB2YXJpYWJsZSBxdWFudGl0YXRpdmEgw6lzIGRpc2NyZXRhIHF1YW4gbm9tw6lzIHBvdCBwcmVuZHJlIHZhbG9ycyBhw69sbGF0cyAodMOtcGljYW1lbnQgdW4gcmVjb21wdGUpLCBpIGNvbnTDrW51YSBxdWFuIHBvdCBwcmVuZHJlIHF1YWxzZXZvbCB2YWxvciBkZWNpbWFsIGRpbnMgZCd1biBpbnRlcnZhbC4iLCAiRWwgcGVyw61tZXRyZSBjcmFuaWFsIMOpcyB1bmEgbG9uZ2l0dWQgbWVzdXJhYmxlIGFtYiB1biBub21icmU6IMOpcyBxdWFudGl0YXRpdmEsIG5vIHF1YWxpdGF0aXZhLiIsICJRdWUgZWwgdmFsb3IgZCd1bmEgcGVyc29uYSBjb25jcmV0YSBzaWd1aSBmaXggbm8gbGEgZmEgZGlzY3JldGE6IGVsIHF1ZSBjb21wdGEgw6lzIHNpLCBlbiBwcmluY2lwaSwgcG90IHByZW5kcmUgcXVhbHNldm9sIHZhbG9yIGRlY2ltYWwgZGlucyBkJ3VuIGludGVydmFsLCBpIHVuYSBsb25naXR1ZCBzw60gcXVlIHBvdC4iLCAiIl0sICJlcnIiOiBbIkRJU0NSRVRBX0NPTlRJTlVBX0NPTkZPU0VTIiwgIlFVQUxJVEFUSVZBX1FVQU5USVRBVElWQV9DT05GT1NFUyIsICJESVNDUkVUQV9DT05USU5VQV9DT05GT1NFUyIsICIiXSwgInJlcyI6IFsiRWwgcGVyw61tZXRyZSBjcmFuaWFsIGVzIHBvdCBtZXN1cmFyIGFtYiBxdWFsc2V2b2wgcHJlY2lzacOzIGRlY2ltYWw6IMOpcyBDT05Uw41OVUEuIl19"
  },
  {
   "id": "219d",
   "ex": 219,
   "ap": "d",
   "bloc": "variables",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "De les variables següents, quines són discretes?",
   "enunciat": "Ingressos diaris en una fruiteria.",
   "opcions": [
    "Contínua (es poden mesurar amb qualsevol precisió decimal: euros i cèntims)",
    "Discreta (es compten en euros sencers)",
    "Qualitativa, perquè depèn del tipus de producte venut",
    "Discreta, perquè cada dia els ingressos són un únic valor concret"
   ],
   "pistes": [
    "Els ingressos inclouen cèntims: pensa si admeten qualsevol valor decimal.",
    "Compara-ho amb els diners gastats pels amics (exercici anterior): mateix tipus de variable."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWxzIGluZ3Jlc3NvcyBpbmNsb3VlbiBjw6hudGltczogZXMgcG9kZW4gbWVzdXJhciBhbWIgcXVhbHNldm9sIHByZWNpc2nDsyBkZWNpbWFsLCBubyBub23DqXMgZW4gZXVyb3Mgc2VuY2Vycy4gVW5hIHZhcmlhYmxlIHF1YW50aXRhdGl2YSDDqXMgZGlzY3JldGEgcXVhbiBub23DqXMgcG90IHByZW5kcmUgdmFsb3JzIGHDr2xsYXRzICh0w61waWNhbWVudCB1biByZWNvbXB0ZSksIGkgY29udMOtbnVhIHF1YW4gcG90IHByZW5kcmUgcXVhbHNldm9sIHZhbG9yIGRlY2ltYWwgZGlucyBkJ3VuIGludGVydmFsLiIsICJFbHMgaW5ncmVzc29zIHMnZXhwcmVzc2VuIGFtYiB1biBub21icmUgKGV1cm9zKTogw6lzIHVuYSB2YXJpYWJsZSBxdWFudGl0YXRpdmEsIG5vIHF1YWxpdGF0aXZhLiIsICJRdWUgY2FkYSBkaWEgZG9uaSB1biDDum5pYyByZXN1bHRhdCBubyBsYSBmYSBkaXNjcmV0YTogZWwgcXVlIGNvbXB0YSDDqXMgc2kgYXF1ZWxsIHJlc3VsdGF0IHBvdCBzZXIgcXVhbHNldm9sIHZhbG9yIGRlY2ltYWwgKGNvbSAkMTQ3eyx9MzUkIOKCrCksIGkgZWxzIGRpbmVycyBzw60gcXVlIGhvIGFkbWV0ZW4uIl0sICJlcnIiOiBbIiIsICJESVNDUkVUQV9DT05USU5VQV9DT05GT1NFUyIsICJRVUFMSVRBVElWQV9RVUFOVElUQVRJVkFfQ09ORk9TRVMiLCAiRElTQ1JFVEFfQ09OVElOVUFfQ09ORk9TRVMiXSwgInJlcyI6IFsiRWxzIGluZ3Jlc3NvcyBkaWFyaXMgZXMgcG9kZW4gbWVzdXJhciBhbWIgcXVhbHNldm9sIHByZWNpc2nDsyBkZWNpbWFsIChldXJvcyBpIGPDqG50aW1zKTogw6lzIENPTlTDjU5VQS4iXX0="
  },
  {
   "id": "219e",
   "ex": 219,
   "ap": "e",
   "bloc": "variables",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "De les variables següents, quines són discretes?",
   "enunciat": "Quilograms de carn consumits al menjador d'un institut durant una setmana.",
   "opcions": [
    "Discreta, perquè es tracta d'un total setmanal, un únic valor",
    "Qualitativa, perquè depèn del tipus de carn consumida",
    "Discreta (es mesuren en quilograms sencers)",
    "Contínua (es poden mesurar amb qualsevol precisió decimal)"
   ],
   "pistes": [
    "Un pes (quilograms) es pot mesurar amb qualsevol precisió decimal.",
    "No importa que sigui un total setmanal: el que compta és si el valor pot ser decimal."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJRdWUgc2lndWkgdW4gw7puaWMgdG90YWwgbm8gbGEgZmEgZGlzY3JldGE6IGVsIHF1ZSBjb21wdGEgw6lzIHNpIGFxdWVsbCB0b3RhbCBwb3QgcHJlbmRyZSBxdWFsc2V2b2wgdmFsb3IgZGVjaW1hbCwgaSB1biBwZXMgc2VtcHJlIGhvIGFkbWV0LiIsICJFbHMgcXVpbG9ncmFtcyBjb25zdW1pdHMgcydleHByZXNzZW4gYW1iIHVuIG5vbWJyZTogw6lzIHVuYSB2YXJpYWJsZSBxdWFudGl0YXRpdmEsIG5vIHF1YWxpdGF0aXZhLiIsICJVbiBwZXMgZXMgcG90IG1lc3VyYXIgYW1iIHF1YWxzZXZvbCBwcmVjaXNpw7MgZGVjaW1hbCAoZ3JhbXMsIGNlbnTDqHNpbWVzIGRlIHF1aWxvZ3JhbS4uLiksIG5vIG5vbcOpcyBlbiBxdWlsb2dyYW1zIHNlbmNlcnMuIFVuYSB2YXJpYWJsZSBxdWFudGl0YXRpdmEgw6lzIGRpc2NyZXRhIHF1YW4gbm9tw6lzIHBvdCBwcmVuZHJlIHZhbG9ycyBhw69sbGF0cyAodMOtcGljYW1lbnQgdW4gcmVjb21wdGUpLCBpIGNvbnTDrW51YSBxdWFuIHBvdCBwcmVuZHJlIHF1YWxzZXZvbCB2YWxvciBkZWNpbWFsIGRpbnMgZCd1biBpbnRlcnZhbC4iLCAiIl0sICJlcnIiOiBbIkRJU0NSRVRBX0NPTlRJTlVBX0NPTkZPU0VTIiwgIlFVQUxJVEFUSVZBX1FVQU5USVRBVElWQV9DT05GT1NFUyIsICJESVNDUkVUQV9DT05USU5VQV9DT05GT1NFUyIsICIiXSwgInJlcyI6IFsiRWxzIHF1aWxvZ3JhbXMgZGUgY2FybiBjb25zdW1pdHMgZXMgcG9kZW4gbWVzdXJhciBhbWIgcXVhbHNldm9sIHByZWNpc2nDsyBkZWNpbWFsOiDDqXMgQ09OVMONTlVBLiJdfQ=="
  },
  {
   "id": "220a",
   "ex": 220,
   "ap": "a",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "El nombre d'hores diàries d'estudi de 30 alumnes és: $3,4,3,5,5,2,1,3,2,0,1,1,1,1,2,0,3,2,2,1,3,4,5,0,2,1,2,1,4,3$.",
   "enunciat": "Quina és la freqüència absoluta del valor $x_i=1$ hora?",
   "opcions": [
    "$7$",
    "$3$",
    "$8$",
    "$30$"
   ],
   "pistes": [
    "Recorre la llista de $30$ dades i marca cada vegada que trobis un $1$.",
    "Compta-les totes abans de donar el resultat final."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJUb3JuYSBhIGNvbXB0YXIgcXVhbnRlcyB2ZWdhZGVzIGFwYXJlaXggbCckMSQgYSBsYSBsbGlzdGEgZGUgJDMwJCBkYWRlczogbidoaSBoYSB1bmEgbcOpcy4iLCAiJDMkIMOpcyBsYSBmcmVxw7zDqG5jaWEgYWJzb2x1dGEgZGUgJHhfaT0wJCwgbm8gZGUgJHhfaT0xJDogcmV2aXNhIHF1aW4gdmFsb3IgdG9jYSBjb21wdGFyLiIsICIiLCAiJDMwJCDDqXMgZWwgbm9tYnJlIFRPVEFMIGRlIGRhZGVzLCBubyBlbCByZWNvbXB0ZSBkJ3VuIHZhbG9yIGNvbmNyZXQuIENvbXB0YSBub23DqXMgcXVhbnRlcyB2ZWdhZGVzIGFwYXJlaXggbCckMSQuIl0sICJlcnIiOiBbIlJFQ09NUFRFX01BTF9GRVQiLCAiRlJFUV9BQlNPTFVUQV9BQ1VNVUxBREFfQ09ORk9TRVMiLCAiIiwgIlRPVEFMX0RBREVTX01BTF9DQUxDVUxBVCJdLCAicmVzIjogWyJDb21wdGFudCBsZXMgJDMwJCBkYWRlcywgbCckMSQgYXBhcmVpeCAkOCQgdmVnYWRlczogJGYoMSk9OCQuIl19"
  },
  {
   "id": "220b",
   "ex": 220,
   "ap": "b",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "El nombre d'hores diàries d'estudi de 30 alumnes és: $3,4,3,5,5,2,1,3,2,0,1,1,1,1,2,0,3,2,2,1,3,4,5,0,2,1,2,1,4,3$.",
   "enunciat": "Quina és la freqüència absoluta acumulada $F_i$ del valor $x_i=2$ hores?",
   "opcions": [
    "$11$",
    "$18$",
    "$7$",
    "$30$"
   ],
   "pistes": [
    "La freqüència acumulada de $2$ suma les freqüències absolutes de $0$, $1$ i $2$.",
    "$f(0)=3$, $f(1)=8$, $f(2)=7$: suma-les."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyIkMTEkIMOpcyAkRl9pJCBkZWwgdmFsb3IgYW50ZXJpb3IsICR4X2k9MSQ6IHBlciBhICR4X2k9MiQgY2FsIHN1bWFyLWhpIHRhbWLDqSBsYSBmcmVxw7zDqG5jaWEgYWJzb2x1dGEgZGVsICQyJC4iLCAiIiwgIiQ3JCDDqXMgbGEgZnJlccO8w6huY2lhIGFic29sdXRhIChubyBhY3VtdWxhZGEpIGRlICR4X2k9MiQ6IGxhIGZyZXHDvMOobmNpYSBBQ1VNVUxBREEgc3VtYSB0YW1iw6kgZWxzIHZhbG9ycyBhbnRlcmlvcnMgKCQwJCBpICQxJCkuIiwgIiQzMCQgw6lzIGVsIHRvdGFsIGRlIHRvdGVzIGxlcyBkYWRlcywgbGEgJEZfaSQgZGUgbCfDumx0aW0gdmFsb3IgKCR4X2k9NSQpLCBubyBsYSBkZSAkeF9pPTIkLiJdLCAiZXJyIjogWyJGX0FDVU1VTEFEQV9OT19DUkVJWEVOVCIsICIiLCAiRlJFUV9BQlNPTFVUQV9BQ1VNVUxBREFfQ09ORk9TRVMiLCAiVE9UQUxfREFERVNfTUFMX0NBTENVTEFUIl0sICJyZXMiOiBbIiRGKDIpPWYoMCkrZigxKStmKDIpPTMrOCs3PTE4JCJdfQ=="
  },
  {
   "id": "220c",
   "ex": 220,
   "ap": "c",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "El nombre d'hores diàries d'estudi de 30 alumnes és: $3,4,3,5,5,2,1,3,2,0,1,1,1,1,2,0,3,2,2,1,3,4,5,0,2,1,2,1,4,3$.",
   "enunciat": "Què signifiquen les freqüències absolutes acumulades ($F_i$) d'aquesta taula?",
   "opcions": [
    "Que $F_i$ indica quants alumnes estudien exactament $x_i$ hores al dia",
    "Que $F_i$ és el percentatge d'alumnes que estudien $x_i$ hores al dia",
    "Que $F_i$ indica quants alumnes estudien més de $x_i$ hores al dia",
    "Que $F_i$ indica quants alumnes estudien com a màxim $x_i$ hores al dia; per exemple, $F(2)=18$ vol dir que $18$ dels $30$ alumnes estudien $2$ hores o menys al dia"
   ],
   "pistes": [
    "$F_i$ es construeix sumant freqüències absolutes fins a un valor: pensa què representa aquesta suma acumulada.",
    "Si $F(2)=18$, què diu això sobre els alumnes que estudien $0$, $1$ o $2$ hores, tots junts?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBaXjDsiDDqXMgZWwgcXVlIGluZGljYSBsYSBmcmVxw7zDqG5jaWEgYWJzb2x1dGEgU0lNUExFLCAkZl9pJCwgbm8gbCdhY3VtdWxhZGE6ICRGX2kkIHN1bWEgdG90ZXMgbGVzIGZyZXHDvMOobmNpZXMgZmlucyBhICR4X2kkLCBubyBub23DqXMgbGEgZCdhcXVlbGwgdmFsb3IuIiwgIiRGX2kkIMOpcyB1biByZWNvbXB0ZSAodW4gbm9tYnJlIGQnYWx1bW5lcyksIG5vIHVuIHBlcmNlbnRhdGdlOiBlbCBwZXJjZW50YXRnZSBzJ29idGluZHJpYSBkaXZpZGludCAkRl9pJCBlbnRyZSAkTiQgaSBtdWx0aXBsaWNhbnQgcGVyICQxMDAkLiIsICLDiXMgYWwgcmV2w6lzOiAkRl9pJCBhY3VtdWxhIGVscyB2YWxvcnMgcGV0aXRzLCBlbHMgcXVlIHPDs24gJHhfaSQgbyBNRU5ZUywgbm8gZWxzIHF1ZSBlbCBzdXBlcmVuLiIsICIiXSwgImVyciI6IFsiRlJFUV9BQlNPTFVUQV9BQ1VNVUxBREFfQ09ORk9TRVMiLCAiUEVSQ0VOVEFUR0VfTUFMX0NBTENVTEFUIiwgIkZSRVFfQUJTT0xVVEFfQUNVTVVMQURBX0NPTkZPU0VTIiwgIiJdLCAicmVzIjogWyIkRl9pJCBzdW1hIHRvdGVzIGxlcyBmcmVxw7zDqG5jaWVzIGRlbHMgdmFsb3JzIGZpbnMgYSAkeF9pJCBpbmNsw7JzOiBpbmRpY2EgcXVhbnRzIGFsdW1uZXMgZXN0dWRpZW4gY29tIGEgbcOgeGltICR4X2kkIGhvcmVzLiIsICJQZXIgZXhlbXBsZSwgJEYoMik9MTgkIHZvbCBkaXIgcXVlICQxOCQgZGVscyAkMzAkIGFsdW1uZXMgZXN0dWRpZW4gJDIkIGhvcmVzIG8gbWVueXMgYWwgZGlhLiJdfQ=="
  },
  {
   "id": "221a",
   "ex": 221,
   "ap": "a",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Copia i completa aquesta taula de freqüències: $x_i=10,20,30,40,50,60$; dades donades $F(10)=4$, $f(20)=5$, percentatge de $20$ és $10\\,\\%$, $F(30)=16$, $f(40)=10$, $F(50)=41$, percentatge de $60$ és $18\\,\\%$.",
   "enunciat": "Quant val el total de dades $N$ d'aquesta taula?",
   "opcions": [
    "$50$",
    "$100$",
    "$16$",
    "$41$"
   ],
   "pistes": [
    "Fes servir que $f(20)=5$ correspon a un $10\\,\\%$ del total: planteja $\\dfrac{5}{N}\\cdot100=10$.",
    "Aïlla $N$ d'aquesta equació."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJDEwMCQgw6lzIGVsIHBlcmNlbnRhdGdlIHRvdGFsIChsYSBzdW1hIGRlIHRvdHMgZWxzIHBlcmNlbnRhdGdlcyksIG5vIGVsIG5vbWJyZSBkZSBkYWRlcyAkTiQuIiwgIiQxNiQgw6lzICRGKDMwKSQsIG5vIGVsIHRvdGFsIGRlIGRhZGVzOiBlbCB0b3RhbCDDqXMgc2VtcHJlIGwnw7psdGltYSBmcmVxw7zDqG5jaWEgYWJzb2x1dGEgYWN1bXVsYWRhLiIsICIkNDEkIMOpcyAkRig1MCkkLCB1bmEgZnJlccO8w6huY2lhIGFjdW11bGFkYSBpbnRlcm3DqGRpYSwgbm8gZWwgdG90YWwgJE4kIChxdWUgw6lzIHNlbXByZSBsJ8O6bHRpbWEgZnJlccO8w6huY2lhIGFjdW11bGFkYSwgbGEgZGUgJHhfaT02MCQpLiJdLCAiZXJyIjogWyIiLCAiUEVSQ0VOVEFUR0VfTUFMX0NBTENVTEFUIiwgIlRPVEFMX0RBREVTX01BTF9DQUxDVUxBVCIsICJUT1RBTF9EQURFU19NQUxfQ0FMQ1VMQVQiXSwgInJlcyI6IFsiJFxcZGZyYWN7NX17Tn1cXGNkb3QxMDA9MTAgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyBOPVxcZGZyYWN7NVxcY2RvdDEwMH17MTB9PTUwJCJdfQ=="
  },
  {
   "id": "221b",
   "ex": 221,
   "ap": "b",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Copia i completa aquesta taula de freqüències: $x_i=10,20,30,40,50,60$; dades donades $F(10)=4$, $f(20)=5$, percentatge de $20$ és $10\\,\\%$, $F(30)=16$, $f(40)=10$, $F(50)=41$, percentatge de $60$ és $18\\,\\%$.",
   "enunciat": "Quant val $f_i$ (freqüència absoluta) del valor $x_i=30$?",
   "opcions": [
    "$5$",
    "$7$",
    "$16$",
    "$9$"
   ],
   "pistes": [
    "Primer cal $F(20)=F(10)+f(20)=4+5=9$.",
    "Després, $f(30)=F(30)-F(20)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyIkNSQgw6lzICRmKDIwKSQsIGxhIGZyZXHDvMOobmNpYSBhYnNvbHV0YSBkZWwgdmFsb3IgYW50ZXJpb3IsIG5vIGRlICR4X2k9MzAkLiIsICIiLCAiJDE2JCDDqXMgJEYoMzApJCAobCdhY3VtdWxhZGEpLCBubyAkZigzMCkkOiBwZXIgb2J0ZW5pciBsYSBmcmVxw7zDqG5jaWEgc2ltcGxlIGNhbCByZXN0YXItbGkgbCdhY3VtdWxhZGEgYW50ZXJpb3IsICRGKDIwKSQuIiwgIiQ5JCDDqXMgJEYoMjApJCwgbGEgZnJlccO8w6huY2lhIGFjdW11bGFkYSBhbnRlcmlvciwgbm8gbGEgcXVlIGV0IGRlbWFuZW46IGNhbGN1bGEgJEYoMzApLUYoMjApJCwgbm8gY29wacOvcyAkRigyMCkkLiJdLCAiZXJyIjogWyJSRUNPTVBURV9NQUxfRkVUIiwgIiIsICJGUkVRX0FCU09MVVRBX0FDVU1VTEFEQV9DT05GT1NFUyIsICJGX0FDVU1VTEFEQV9OT19DUkVJWEVOVCJdLCAicmVzIjogWyIkRigyMCk9RigxMCkrZigyMCk9NCs1PTkkIiwgIiRmKDMwKT1GKDMwKS1GKDIwKT0xNi05PTckIl19"
  },
  {
   "id": "221c",
   "ex": 221,
   "ap": "c",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Copia i completa aquesta taula de freqüències: $x_i=10,20,30,40,50,60$; dades donades $F(10)=4$, $f(20)=5$, percentatge de $20$ és $10\\,\\%$, $F(30)=16$, $f(40)=10$, $F(50)=41$, percentatge de $60$ és $18\\,\\%$.",
   "enunciat": "Quant val $f_i$ (freqüència absoluta) del valor $x_i=50$?",
   "opcions": [
    "$15$",
    "$26$",
    "$41$",
    "$10$"
   ],
   "pistes": [
    "Primer cal $F(40)=F(30)+f(40)=16+10=26$.",
    "Després, $f(50)=F(50)-F(40)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJDI2JCDDqXMgJEYoNDApJCwgbCdhY3VtdWxhZGEgYW50ZXJpb3IsIG5vIGxhIHF1ZSBldCBkZW1hbmVuOiBjYWxjdWxhICRGKDUwKS1GKDQwKSQuIiwgIiQ0MSQgw6lzICRGKDUwKSQgKGwnYWN1bXVsYWRhKSwgbm8gJGYoNTApJDogY2FsIHJlc3Rhci1saSBsJ2FjdW11bGFkYSBhbnRlcmlvciwgJEYoNDApJC4iLCAiJDEwJCDDqXMgJGYoNDApJCwgbGEgZnJlccO8w6huY2lhIGFic29sdXRhIGRlbCB2YWxvciBhbnRlcmlvciwgbm8gZGUgJHhfaT01MCQuIl0sICJlcnIiOiBbIiIsICJGX0FDVU1VTEFEQV9OT19DUkVJWEVOVCIsICJGUkVRX0FCU09MVVRBX0FDVU1VTEFEQV9DT05GT1NFUyIsICJSRUNPTVBURV9NQUxfRkVUIl0sICJyZXMiOiBbIiRGKDQwKT1GKDMwKStmKDQwKT0xNisxMD0yNiQiLCAiJGYoNTApPUYoNTApLUYoNDApPTQxLTI2PTE1JCJdfQ=="
  },
  {
   "id": "221d",
   "ex": 221,
   "ap": "d",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Copia i completa aquesta taula de freqüències: $x_i=10,20,30,40,50,60$; dades donades $F(10)=4$, $f(20)=5$, percentatge de $20$ és $10\\,\\%$, $F(30)=16$, $f(40)=10$, $F(50)=41$, percentatge de $60$ és $18\\,\\%$.",
   "enunciat": "Quant val $f_i$ (freqüència absoluta) del valor $x_i=60$?",
   "opcions": [
    "$50$",
    "$18$",
    "$41$",
    "$9$"
   ],
   "pistes": [
    "Amb $N=50$ ja calculat, $f(60)=N-F(50)$.",
    "Comprova-ho amb el percentatge donat: $\\frac{f(60)}{50}\\cdot100$ hauria de donar $18$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyIkNTAkIMOpcyBlbCB0b3RhbCBkZSBkYWRlcyAkTiQsIG5vIGxhIGZyZXHDvMOobmNpYSBhYnNvbHV0YSBkJ3VuIHZhbG9yIGNvbmNyZXQ6IHJlc3RhLWhpICRGKDUwKSQgcGVyIG9idGVuaXIgJGYoNjApJC4iLCAiJDE4JCDDqXMgZWwgcGVyY2VudGF0Z2UgZG9uYXQgcGVyIGEgJHhfaT02MCQgKCQxOFxcLFxcJSQpLCBubyBsYSBzZXZhIGZyZXHDvMOobmNpYSBhYnNvbHV0YTogY2FsIGFwbGljYXIgYXF1ZXN0IHBlcmNlbnRhdGdlIHNvYnJlIGVsIHRvdGFsICROPTUwJC4iLCAiJDQxJCDDqXMgJEYoNTApJCwgbCdhY3VtdWxhZGEgZGVsIHZhbG9yIGFudGVyaW9yLCBubyBsYSBmcmVxw7zDqG5jaWEgZGUgJHhfaT02MCQuIiwgIiJdLCAiZXJyIjogWyJUT1RBTF9EQURFU19NQUxfQ0FMQ1VMQVQiLCAiUEVSQ0VOVEFUR0VfTUFMX0NBTENVTEFUIiwgIkZfQUNVTVVMQURBX05PX0NSRUlYRU5UIiwgIiJdLCAicmVzIjogWyIkZig2MCk9Ti1GKDUwKT01MC00MT05JCIsICJDb21wcm92YWNpw7M6ICRcXGRmcmFjezl9ezUwfVxcY2RvdDEwMD0xOFxcLFxcJSQsIHF1ZSBjb2luY2lkZWl4IGFtYiBsJ2VudW5jaWF0Il19"
  },
  {
   "id": "222a",
   "ex": 222,
   "ap": "a",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "En preguntar a 20 persones sobre el nombre de vegades que havien viatjat a l'estranger, el resultat va ser: $3,5,4,4,2,6,1,2,3,3,3,3,3,5,2,6,5,4,4,3$.",
   "enunciat": "Fent el recompte de les $20$ dades, quantes persones han viatjat exactament $3$ vegades a l'estranger?",
   "opcions": [
    "$3$",
    "$20$",
    "$7$",
    "$4$"
   ],
   "pistes": [
    "Recorre la llista de $20$ dades i marca cada vegada que trobis un $3$.",
    "Compta-les totes: n'hauries de trobar més de $6$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3Qgw6lzIGVsIHByb3BpIHZhbG9yICR4X2k9MyQsIG5vIGVsIG5vbWJyZSBkZSB2ZWdhZGVzIHF1ZSBhcGFyZWl4IGEgbGEgbGxpc3RhLiIsICIkMjAkIMOpcyBlbCB0b3RhbCBkZSBwZXJzb25lcyBlbnF1ZXN0YWRlcywgbm8gZWwgcmVjb21wdGUgZGUgbGVzIHF1ZSBoYW4gdmlhdGphdCBleGFjdGFtZW50ICQzJCB2ZWdhZGVzLiIsICIiLCAiVG9ybmEgYSBjb21wdGFyIHF1YW50ZXMgdmVnYWRlcyBhcGFyZWl4IGVsICQzJCBhIGxhIGxsaXN0YTogbidoaSBoYSBtw6lzIGRlICQ0JC4iXSwgImVyciI6IFsiUkVDT01QVEVfTUFMX0ZFVCIsICJUT1RBTF9EQURFU19NQUxfQ0FMQ1VMQVQiLCAiIiwgIlJFQ09NUFRFX01BTF9GRVQiXSwgInJlcyI6IFsiQ29tcHRhbnQgbGVzICQyMCQgZGFkZXMsIGVsICQzJCBhcGFyZWl4ICQ3JCB2ZWdhZGVzOiAkZigzKT03JC4iXX0="
  },
  {
   "id": "222b",
   "ex": 222,
   "ap": "b",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "En preguntar a 20 persones sobre el nombre de vegades que havien viatjat a l'estranger, el resultat va ser: $3,5,4,4,2,6,1,2,3,3,3,3,3,5,2,6,5,4,4,3$.",
   "enunciat": "Quina és la freqüència absoluta acumulada $F_i$ del valor $x_i=4$?",
   "opcions": [
    "$11$",
    "$4$",
    "$15$",
    "$20$"
   ],
   "pistes": [
    "Calcula les freqüències absolutes de $1$, $2$, $3$ i $4$: $1,3,7,4$.",
    "Suma-les totes: $F(4)=f(1)+f(2)+f(3)+f(4)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyIkMTEkIMOpcyAkRigzKSQsIGwnYWN1bXVsYWRhIGRlbCB2YWxvciBhbnRlcmlvcjogcGVyIGEgJHhfaT00JCBjYWwgc3VtYXItaGkgdGFtYsOpICRmKDQpJC4iLCAiJDQkIMOpcyBsYSBmcmVxw7zDqG5jaWEgYWJzb2x1dGEgc2ltcGxlIGRlICR4X2k9NCQgKG5vIGFjdW11bGFkYSk6IGNhbCBzdW1hci1oaSB0YW1iw6kgbGVzIGZyZXHDvMOobmNpZXMgZGUgJDEkLCAkMiQgaSAkMyQuIiwgIiIsICIkMjAkIMOpcyBlbCB0b3RhbCBkZSBkYWRlcywgbGEgJEZfaSQgZGUgbCfDumx0aW0gdmFsb3IgKCR4X2k9NiQpLCBubyBsYSBkZSAkeF9pPTQkLiJdLCAiZXJyIjogWyJGX0FDVU1VTEFEQV9OT19DUkVJWEVOVCIsICJGUkVRX0FCU09MVVRBX0FDVU1VTEFEQV9DT05GT1NFUyIsICIiLCAiVE9UQUxfREFERVNfTUFMX0NBTENVTEFUIl0sICJyZXMiOiBbIiRmKDEpPTEkLCAkZigyKT0zJCwgJGYoMyk9NyQsICRmKDQpPTQkIiwgIiRGKDQpPTErMys3KzQ9MTUkIl19"
  },
  {
   "id": "223a",
   "ex": 223,
   "ap": "a",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "En una avaluació, dels 30 alumnes d'una classe, el $10\\,\\%$ ho va aprovar tot, el $20\\,\\%$ va suspendre una assignatura, el $50\\,\\%$ en va suspendre dues, la resta, més de dues assignatures.",
   "enunciat": "Quants alumnes van suspendre exactament dues assignatures?",
   "opcions": [
    "$3$ alumnes",
    "$6$ alumnes",
    "$15$ alumnes",
    "$50$ alumnes"
   ],
   "pistes": [
    "El $50\\,\\%$ de $30$ alumnes és $30\\cdot0{,}50$.",
    "Calcula aquest producte."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3Qgw6lzIGVsIG5vbWJyZSBkJ2FsdW1uZXMgcXVlIGhvIHZhbiBhcHJvdmFyIHRvdCAoJDEwXFwsXFwlJCBkZSAkMzAkKSwgbm8gZWxzIHF1ZSBlbiB2YW4gc3VzcGVuZHJlIGR1ZXMuIiwgIkFxdWVzdCDDqXMgZWwgbm9tYnJlIGQnYWx1bW5lcyBxdWUgZW4gdmFuIHN1c3BlbmRyZSBVTkEgKCQyMFxcLFxcJSQgZGUgJDMwJCksIG5vIGR1ZXM6IGNhbCBhcGxpY2FyIGVsICQ1MFxcLFxcJSQsIG5vIGVsICQyMFxcLFxcJSQuIiwgIiIsICIkNTAkIMOpcyBlbCBwZXJjZW50YXRnZSBkb25hdCAoJDUwXFwsXFwlJCksIG5vIGVsIG5vbWJyZSBkJ2FsdW1uZXM6IGNhbCBhcGxpY2FyLWxvIHNvYnJlIGVsIHRvdGFsLCAkMzBcXGNkb3Qweyx9NTAkLiJdLCAiZXJyIjogWyJQRVJDRU5UQVRHRV9NQUxfQ0FMQ1VMQVQiLCAiUEVSQ0VOVEFUR0VfTUFMX0NBTENVTEFUIiwgIiIsICJQRVJDRU5UQVRHRV9NQUxfQ0FMQ1VMQVQiXSwgInJlcyI6IFsiJDUwXFwsXFwlJCBkZSAkMzA9MzBcXGNkb3Qweyx9NTA9MTUkIGFsdW1uZXMiXX0="
  },
  {
   "id": "223b",
   "ex": 223,
   "ap": "b",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "En una avaluació, dels 30 alumnes d'una classe, el $10\\,\\%$ ho va aprovar tot, el $20\\,\\%$ va suspendre una assignatura, el $50\\,\\%$ en va suspendre dues, la resta, més de dues assignatures.",
   "enunciat": "Quants alumnes van suspendre MÉS de dues assignatures?",
   "opcions": [
    "$15$ alumnes",
    "$0$ alumnes, perquè els percentatges ja sumen $100\\,\\%$ sense aquest grup",
    "$6$ alumnes",
    "$3$ alumnes"
   ],
   "pistes": [
    "Suma els tres percentatges donats i resta'ls de $100\\,\\%$: $100-10-20-50$.",
    "Aplica aquest percentatge (o directament resta els alumnes ja comptats) sobre el total de $30$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyIkMTUkIMOpcyBlbCBub21icmUgZCdhbHVtbmVzIHF1ZSBlbiB2YW4gc3VzcGVuZHJlIGV4YWN0YW1lbnQgZHVlcywgbm8gbcOpcyBkZSBkdWVzLiIsICIkMTBcXCxcXCUrMjBcXCxcXCUrNTBcXCxcXCU9ODBcXCxcXCUkLCBubyAkMTAwXFwsXFwlJDogZW5jYXJhIHF1ZWRhIHVuICQyMFxcLFxcJSQgKHRoYXQgaXMsICQ2JCBhbHVtbmVzKSBwZXIgYWwgZ3J1cCBxdWUgZW4gdmEgc3VzcGVuZHJlIG3DqXMgZGUgZHVlcy4iLCAiIiwgIiQzJCDDqXMgZWwgbm9tYnJlIGQnYWx1bW5lcyBxdWUgaG8gdmFuIGFwcm92YXIgdG90LCBubyBlbHMgcXVlIGVuIHZhbiBzdXNwZW5kcmUgbcOpcyBkZSBkdWVzLiJdLCAiZXJyIjogWyJQRVJDRU5UQVRHRV9NQUxfQ0FMQ1VMQVQiLCAiVE9UQUxfREFERVNfTUFMX0NBTENVTEFUIiwgIiIsICJQRVJDRU5UQVRHRV9NQUxfQ0FMQ1VMQVQiXSwgInJlcyI6IFsiQWx1bW5lcyBqYSBjb21wdGF0czogJDMrNisxNT0yNCQiLCAiUmVzdGE6ICQzMC0yND02JCBhbHVtbmVzIHZhbiBzdXNwZW5kcmUgbcOpcyBkZSBkdWVzIGFzc2lnbmF0dXJlcyJdfQ=="
  },
  {
   "id": "223c",
   "ex": 223,
   "ap": "c",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "En una avaluació, dels 30 alumnes d'una classe, el $10\\,\\%$ ho va aprovar tot, el $20\\,\\%$ va suspendre una assignatura, el $50\\,\\%$ en va suspendre dues, la resta, més de dues assignatures.",
   "enunciat": "Hi ha algun tipus de freqüència que respongui directament a la pregunta de quants alumnes van suspendre MENYS de dues assignatures?",
   "opcions": [
    "Sí: la freqüència relativa del valor \"$2$ assignatures suspeses\"",
    "Sí: la freqüència absoluta acumulada del valor \"$2$ assignatures suspeses\"",
    "Sí: la freqüència absoluta acumulada del valor \"$1$ assignatura suspesa\" ($F_1=9$ alumnes), perquè acumula els que en van suspendre $0$ i $1$",
    "No, cap freqüència respon directament a aquesta pregunta: cal tornar a comptar les dades des de zero"
   ],
   "pistes": [
    "\"Menys de dues\" vol dir $0$ o $1$ assignatures suspeses: quina freqüència ho suma tot d'un cop?",
    "La freqüència absoluta ACUMULADA d'un valor inclou tots els valors anteriors, fins aquell inclòs."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJMYSBmcmVxw7zDqG5jaWEgcmVsYXRpdmEgZGUgXCIkMiRcIiBub23DqXMgcGFybGEgZGVscyBhbHVtbmVzIHF1ZSBlbiB2YW4gc3VzcGVuZHJlIGV4YWN0YW1lbnQgJDIkLCBubyBkZWxzIHF1ZSBlbiB2YW4gc3VzcGVuZHJlIG1lbnlzIGRlICQyJC4iLCAiTGEgZnJlccO8w6huY2lhIGFjdW11bGFkYSBkZSBcIiQyJFwiICgkRl8yJCkgaW5jbG91IHRhbWLDqSBlbHMgcXVlIGVuIHZhbiBzdXNwZW5kcmUgZXhhY3RhbWVudCAkMiQsIGkgbGEgcHJlZ3VudGEgZGVtYW5hIE1FTllTIGRlIGR1ZXMsIMOpcyBhIGRpciwgbm9tw6lzICQwJCBvICQxJDogY2FsIGwnYWN1bXVsYWRhIGRlIFwiJDEkXCIsIG5vIGxhIGRlIFwiJDIkXCIuIiwgIiIsICJTw60gcXVlIG4naGkgaGEgdW5hOiBsYSBmcmVxw7zDqG5jaWEgYWJzb2x1dGEgQUNVTVVMQURBIGQndW4gdmFsb3Igc3VtYSB0b3RlcyBsZXMgcXVlIGVsIHByZWNlZGVpeGVuLCBxdWUgw6lzIGV4YWN0YW1lbnQgZWwgcXVlIGRlbWFuYSBcIm1lbnlzIGRlIGR1ZXNcIi4iXSwgImVyciI6IFsiRlJFUV9BQlNPTFVUQV9BQ1VNVUxBREFfQ09ORk9TRVMiLCAiRlJFUV9BQlNPTFVUQV9BQ1VNVUxBREFfQ09ORk9TRVMiLCAiIiwgIkVTX1BPVF9ERVRFUk1JTkFSIl0sICJyZXMiOiBbIiRGXzE9Zl8wK2ZfMT0zKzY9OSQ6IGxhIGZyZXHDvMOobmNpYSBhYnNvbHV0YSBhY3VtdWxhZGEgZGVsIHZhbG9yIFwiJDEkXCIgcmVzcG9uIGV4YWN0YW1lbnQgYSBsYSBwcmVndW50YSIsICJQZXIgdGFudCwgc8OtLCAkOSQgYWx1bW5lcyB2YW4gc3VzcGVuZHJlIG1lbnlzIGRlIGR1ZXMgYXNzaWduYXR1cmVzIl19"
  },
  {
   "id": "224a",
   "ex": 224,
   "ap": "a",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Per fer un estudi fem una enquesta entre el jovent d'un barri i els preguntem pel nombre de vegades que van al cinema cada setmana. Els resultats de l'enquesta (50 persones) són: $0,0,2,3,5,1,3,2,0,0,4,1,2,4,3,1,2,3,2,2,1,1,1,3,2,1,1,1,1,1,2,1,5,4,0,0,2,2,4,1,3,5,2,3,2,2,0,1,1,1$.",
   "enunciat": "Quina i de quin tipus és la variable estadística que estem estudiant?",
   "opcions": [
    "El «nombre de vegades que es va al cinema»; és quantitativa contínua",
    "El «barri on viuen»; és una variable qualitativa",
    "El «nombre de vegades que es va al cinema per setmana»; és quantitativa discreta (només pren valors enters: $0,1,2,\\ldots$)",
    "El «jovent enquestat»; és una variable qualitativa"
   ],
   "pistes": [
    "Fixa't en què es demana a cada persona enquestada: un recompte de vegades.",
    "Un recompte només pot ser $0,1,2,\\ldots$: discret o continu?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJVbiByZWNvbXB0ZSBkZSB2ZWdhZGVzIG5vbcOpcyBhZG1ldCB2YWxvcnMgZW50ZXJzIGHDr2xsYXRzICgkMCwxLDIsXFxsZG90cyQpLCBubyBxdWFsc2V2b2wgZGVjaW1hbDogw6lzIGRpc2NyZXRhLCBubyBjb250w61udWEuIiwgIkwnZW51bmNpYXQgbm8gcHJlZ3VudGEgcGVsIGJhcnJpIGRlIGNhZGFzY8O6LCBzaW7DsyBwZWwgbm9tYnJlIGRlIHZlZ2FkZXMgcXVlIHZhbiBhbCBjaW5lbWE6IGFxdWVzdGEgw6lzIGxhIHZhcmlhYmxlIGVzdHVkaWFkYS4iLCAiIiwgIkxhIHZhcmlhYmxlIG5vIMOpcyBcInF1aSDDqXMgZW5xdWVzdGF0XCIsIHNpbsOzIGxhIGRhZGEgbnVtw6hyaWNhIHF1ZSBzZSdscyBkZW1hbmE6IGVsIG5vbWJyZSBkZSB2ZWdhZGVzIHF1ZSB2YW4gYWwgY2luZW1hLiJdLCAiZXJyIjogWyJESVNDUkVUQV9DT05USU5VQV9DT05GT1NFUyIsICJRVUFMSVRBVElWQV9RVUFOVElUQVRJVkFfQ09ORk9TRVMiLCAiIiwgIlFVQUxJVEFUSVZBX1FVQU5USVRBVElWQV9DT05GT1NFUyJdLCAicmVzIjogWyJMYSB2YXJpYWJsZSDDqXMgZWwgbm9tYnJlIGRlIHZlZ2FkZXMgcXVlIGVzIHZhIGFsIGNpbmVtYSBwZXIgc2V0bWFuYTogdW4gcmVjb21wdGUsIGFpeMOtIHF1ZSDDqXMgcXVhbnRpdGF0aXZhIGRpc2NyZXRhLiJdfQ=="
  },
  {
   "id": "224b",
   "ex": 224,
   "ap": "b",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Per fer un estudi fem una enquesta entre el jovent d'un barri i els preguntem pel nombre de vegades que van al cinema cada setmana. Els resultats de l'enquesta (50 persones) són: $0,0,2,3,5,1,3,2,0,0,4,1,2,4,3,1,2,3,2,2,1,1,1,3,2,1,1,1,1,1,2,1,5,4,0,0,2,2,4,1,3,5,2,3,2,2,0,1,1,1$.",
   "enunciat": "Quina és la freqüència absoluta del valor $x_i=1$ (una vegada per setmana)?",
   "opcions": [
    "$13$",
    "$16$",
    "$50$",
    "$7$"
   ],
   "pistes": [
    "Recorre les $50$ dades i marca cada vegada que trobis un $1$.",
    "És el valor més freqüent de tots: n'hi ha bastants més que de cap altre."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyIkMTMkIMOpcyBsYSBmcmVxw7zDqG5jaWEgZGUgJHhfaT0yJCwgbm8gZGUgJHhfaT0xJC4iLCAiIiwgIiQ1MCQgw6lzIGVsIHRvdGFsIGRlIHBlcnNvbmVzIGVucXVlc3RhZGVzLCBubyBlbCByZWNvbXB0ZSBkJ3VuIHZhbG9yIGNvbmNyZXQuIiwgIiQ3JCDDqXMgbGEgZnJlccO8w6huY2lhIGRlICR4X2k9MCQsIG5vIGRlICR4X2k9MSQ6IHRvcm5hIGEgY29tcHRhciBxdWFudGVzIHZlZ2FkZXMgYXBhcmVpeCBsJyQxJC4iXSwgImVyciI6IFsiUkVDT01QVEVfTUFMX0ZFVCIsICIiLCAiVE9UQUxfREFERVNfTUFMX0NBTENVTEFUIiwgIlJFQ09NUFRFX01BTF9GRVQiXSwgInJlcyI6IFsiQ29tcHRhbnQgbGVzICQ1MCQgZGFkZXMsIGwnJDEkIGFwYXJlaXggJDE2JCB2ZWdhZGVzOiAkZigxKT0xNiQuIl19"
  },
  {
   "id": "224c",
   "ex": 224,
   "ap": "c",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Per fer un estudi fem una enquesta entre el jovent d'un barri i els preguntem pel nombre de vegades que van al cinema cada setmana. Els resultats de l'enquesta (50 persones) són: $0,0,2,3,5,1,3,2,0,0,4,1,2,4,3,1,2,3,2,2,1,1,1,3,2,1,1,1,1,1,2,1,5,4,0,0,2,2,4,1,3,5,2,3,2,2,0,1,1,1$.",
   "enunciat": "Quants joves van al cinema MÉS de dues vegades per setmana?",
   "opcions": [
    "$43$ joves",
    "$36$ joves",
    "$13$ joves",
    "$14$ joves"
   ],
   "pistes": [
    "\"Més de dues\" vol dir $x_i>2$, és a dir, $3$, $4$ o $5$ vegades.",
    "Suma les freqüències absolutes de $3$, $4$ i $5$: $7+4+3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyIkNDMkIMOpcyBlbCBub21icmUgZGUgam92ZXMgcXVlIGhpIHZhbiBhbG1lbnlzIHVuYSB2ZWdhZGEgKGVsIHJlc3VsdGF0IGRlIGwnYXBhcnRhdCBzZWfDvGVudCksIG5vIGVscyBxdWUgaGkgdmFuIG3DqXMgZGUgZHVlcy4iLCAiJDM2JCDDqXMgbGEgZnJlccO8w6huY2lhIGFic29sdXRhIEFDVU1VTEFEQSBmaW5zIGEgJHhfaT0yJCAoJEZfMiQpLCBxdWUgY29tcHRhIGVscyBxdWUgaGkgdmFuICQyJCB2ZWdhZGVzIG8gTUVOWVM6IMOpcyBleGFjdGFtZW50IGVsIGNvbnRyYXJpIGRlbCBxdWUgZGVtYW5hIGxhIHByZWd1bnRhLiIsICIkMTMkIMOpcyBub23DqXMgbGEgZnJlccO8w6huY2lhIGRlICR4X2k9MiQgKGR1ZXMgdmVnYWRlcyksIG5vIGxhIHN1bWEgZGVscyBxdWUgaGkgdmFuIE3DiVMgZGUgZHVlcy4iLCAiIl0sICJlcnIiOiBbIkZfQUNVTVVMQURBX05PX0NSRUlYRU5UIiwgIkZfQUNVTVVMQURBX05PX0NSRUlYRU5UIiwgIkZSRVFfQUJTT0xVVEFfQUNVTVVMQURBX0NPTkZPU0VTIiwgIiJdLCAicmVzIjogWyJKb3ZlcyBhbWIgJHhfaT4yJDogJGYoMykrZig0KStmKDUpPTcrNCszPTE0JCJdfQ=="
  },
  {
   "id": "224d",
   "ex": 224,
   "ap": "d",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Per fer un estudi fem una enquesta entre el jovent d'un barri i els preguntem pel nombre de vegades que van al cinema cada setmana. Els resultats de l'enquesta (50 persones) són: $0,0,2,3,5,1,3,2,0,0,4,1,2,4,3,1,2,3,2,2,1,1,1,3,2,1,1,1,1,1,2,1,5,4,0,0,2,2,4,1,3,5,2,3,2,2,0,1,1,1$.",
   "enunciat": "I quants joves van al cinema, com a mínim, una vegada per setmana?",
   "opcions": [
    "$16$ joves",
    "$50$ joves",
    "$7$ joves",
    "$43$ joves"
   ],
   "pistes": [
    "\"Com a mínim una vegada\" és tothom EXCEPTE els que hi van $0$ vegades.",
    "Calcula $50-f(0)$, o bé suma directament $f(1)+f(2)+f(3)+f(4)+f(5)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyIkMTYkIMOpcyBub23DqXMgbGEgZnJlccO8w6huY2lhIGRlICR4X2k9MSQgKGV4YWN0YW1lbnQgdW5hIHZlZ2FkYSksIG5vIGxhIHN1bWEgZGUgdG90cyBlbHMgcXVlIGhpIHZhbiB1bmEgdmVnYWRhIG8gbcOpcy4iLCAiJDUwJCDDqXMgZWwgdG90YWwgZGUgam92ZXMgZW5xdWVzdGF0cywgaW5jbG9lbnQtaGkgdGFtYsOpIGVscyAkNyQgcXVlIG5vIGhpIHZhbiBtYWk7IGxhIHByZWd1bnRhIGV4Y2xvdSBhcXVlc3QgZ3J1cC4iLCAiJDckIMOpcyBlbCBub21icmUgZGUgam92ZXMgcXVlIE5PIGhpIHZhbiBtYWkgKCR4X2k9MCQpOiBsYSBwcmVndW50YSBkZW1hbmEgZWxzIHF1ZSBoaSB2YW4gYWxtZW55cyB1bmEgdmVnYWRhLCDDqXMgYSBkaXIsIHRvdHMgTUVOWVMgYXF1ZXN0cy4iLCAiIl0sICJlcnIiOiBbIkZSRVFfQUJTT0xVVEFfQUNVTVVMQURBX0NPTkZPU0VTIiwgIlRPVEFMX0RBREVTX01BTF9DQUxDVUxBVCIsICJGX0FDVU1VTEFEQV9OT19DUkVJWEVOVCIsICIiXSwgInJlcyI6IFsiSm92ZXMgcXVlIG5vIGhpIHZhbiBtYWk6ICRmKDApPTckIiwgIkpvdmVzIGFtYiAkeF9pXFxnZXExJDogJDUwLTc9NDMkIl19"
  },
  {
   "id": "225a",
   "ex": 225,
   "ap": "a",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Les dades següents corresponen al nombre de treballadors d'una cadena de botigues (35 botigues): $4,7,5,2,4,5,6,4,7,3,7,4,3,4,4,3,4,3,2,4,4,1,1,2,5,3,8,2,3,2,8,6,6,1,3$.",
   "enunciat": "Indica quina és la variable i de quin tipus és.",
   "opcions": [
    "El «nombre de botigues»; és quantitativa discreta",
    "El «nombre de treballadors de cada botiga»; és quantitativa discreta",
    "La «cadena de botigues»; és una variable qualitativa",
    "El «nombre de treballadors»; és quantitativa contínua"
   ],
   "pistes": [
    "Cada dada de la llista correspon a UNA botiga: què representa aquest nombre?",
    "Un recompte de persones només admet valors enters: discreta o contínua?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBub21icmUgZGUgYm90aWd1ZXMgKCQzNSQpIMOpcyB1bmEgZGFkYSBmaXhhIGRlIGwnZW51bmNpYXQsIG5vIGxhIHZhcmlhYmxlIHF1ZSBlcyBtZXN1cmEgYSBjYWRhc2N1bmE6IGVsIHF1ZSB2YXJpYSBkJ3VuYSBib3RpZ2EgYSB1bmEgYWx0cmEgw6lzIGVsIHNldSBub21icmUgZGUgdHJlYmFsbGFkb3JzLiIsICIiLCAiTGEgdmFyaWFibGUgZXN0dWRpYWRhIG5vIMOpcyBcInF1aW5hIGNhZGVuYVwiLCBzaW7DsyBlbCBub21icmUgZGUgdHJlYmFsbGFkb3JzIHF1ZSB0w6kgY2FkYSBib3RpZ2EuIiwgIlVuIG5vbWJyZSBkZSB0cmViYWxsYWRvcnMgw6lzIHVuIHJlY29tcHRlIGRlIHBlcnNvbmVzOiBub23DqXMgcG90IHByZW5kcmUgdmFsb3JzIGVudGVycywgbm8gcXVhbHNldm9sIGRlY2ltYWwuIMOJcyBkaXNjcmV0YS4iXSwgImVyciI6IFsiUVVBTElUQVRJVkFfUVVBTlRJVEFUSVZBX0NPTkZPU0VTIiwgIiIsICJRVUFMSVRBVElWQV9RVUFOVElUQVRJVkFfQ09ORk9TRVMiLCAiRElTQ1JFVEFfQ09OVElOVUFfQ09ORk9TRVMiXSwgInJlcyI6IFsiTGEgdmFyaWFibGUgw6lzIGVsIG5vbWJyZSBkZSB0cmViYWxsYWRvcnMgZGUgY2FkYSBib3RpZ2E6IHVuIHJlY29tcHRlLCBwZXIgdGFudCBxdWFudGl0YXRpdmEgZGlzY3JldGEuIl19"
  },
  {
   "id": "225b",
   "ex": 225,
   "ap": "b",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Les dades següents corresponen al nombre de treballadors d'una cadena de botigues (35 botigues): $4,7,5,2,4,5,6,4,7,3,7,4,3,4,4,3,4,3,2,4,4,1,1,2,5,3,8,2,3,2,8,6,6,1,3$.",
   "enunciat": "Fent el recompte de les $35$ dades, quina és la freqüència absoluta acumulada $F_i$ del valor $x_i=4$?",
   "opcions": [
    "$9$",
    "$15$",
    "$24$",
    "$35$"
   ],
   "pistes": [
    "Calcula les freqüències absolutes d'$1$ a $4$: $3,5,7,9$.",
    "Suma-les totes: $F(4)=f(1)+f(2)+f(3)+f(4)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyIkOSQgw6lzIGxhIGZyZXHDvMOobmNpYSBhYnNvbHV0YSBzaW1wbGUgZGUgJHhfaT00JCAobm8gYWN1bXVsYWRhKTogY2FsIHN1bWFyLWhpIHRhbWLDqSBsZXMgZnJlccO8w6huY2llcyBkZSAkMSQsICQyJCBpICQzJC4iLCAiJDE1JCDDqXMgJEYoMykkLCBsJ2FjdW11bGFkYSBkZWwgdmFsb3IgYW50ZXJpb3I6IHBlciBhICR4X2k9NCQgY2FsIHN1bWFyLWhpIHRhbWLDqSAkZig0KSQuIiwgIiIsICIkMzUkIMOpcyBlbCB0b3RhbCBkZSBib3RpZ3VlcywgbGEgJEZfaSQgZGUgbCfDumx0aW0gdmFsb3IgKCR4X2k9OCQpLCBubyBsYSBkZSAkeF9pPTQkLiJdLCAiZXJyIjogWyJGUkVRX0FCU09MVVRBX0FDVU1VTEFEQV9DT05GT1NFUyIsICJGX0FDVU1VTEFEQV9OT19DUkVJWEVOVCIsICIiLCAiVE9UQUxfREFERVNfTUFMX0NBTENVTEFUIl0sICJyZXMiOiBbIiRmKDEpPTMkLCAkZigyKT01JCwgJGYoMyk9NyQsICRmKDQpPTkkIiwgIiRGKDQpPTMrNSs3Kzk9MjQkIl19"
  },
  {
   "id": "226a",
   "ex": 226,
   "ap": "a",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Hem preguntat a 50 alumnes quin és el seu esport preferit: 16 han escollit futbol; 12, bàsquet; 6, handbol; 10, equitació; i 6, ciclisme.",
   "enunciat": "Quina és la freqüència absoluta del bàsquet?",
   "opcions": [
    "$24$",
    "$0{,}24$",
    "$12$",
    "$50$"
   ],
   "pistes": [
    "La freqüència absoluta és directament el nombre d'alumnes que han triat cada esport, tal com dona l'enunciat.",
    "L'enunciat ja diu directament quants han triat bàsquet."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyIkMjQkIMOpcyBlbCBwZXJjZW50YXRnZSBkZWwgYsOgc3F1ZXQgKCQyNFxcLFxcJSQpLCBubyBsYSBmcmVxw7zDqG5jaWEgYWJzb2x1dGEgKHF1ZSDDqXMgZWwgbm9tYnJlIGQnYWx1bW5lcywgJDEyJCkuIiwgIiQweyx9MjQkIMOpcyBsYSBmcmVxw7zDqG5jaWEgUkVMQVRJVkEgZGVsIGLDoHNxdWV0ICgkXFxmcmFjezEyfXs1MH0kKSwgbm8gbCdhYnNvbHV0YTogbGEgZnJlccO8w6huY2lhIGFic29sdXRhIMOpcyBlbCByZWNvbXB0ZSBkaXJlY3RlLCBzZW5zZSBkaXZpZGlyIHBlciByZXMuIiwgIiIsICIkNTAkIMOpcyBlbCB0b3RhbCBkJ2FsdW1uZXMgZW5xdWVzdGF0cyAobGEgc3VtYSBkZSB0b3RzIGVscyBlc3BvcnRzKSwgbm8gZWxzIHF1ZSBoYW4gdHJpYXQgYsOgc3F1ZXQgZW4gY29uY3JldC4iXSwgImVyciI6IFsiUEVSQ0VOVEFUR0VfTUFMX0NBTENVTEFUIiwgIkZSRVFfUkVMQVRJVkFfTUFMX0NBTENVTEFEQSIsICIiLCAiVE9UQUxfREFERVNfTUFMX0NBTENVTEFUIl0sICJyZXMiOiBbIkxhIGZyZXHDvMOobmNpYSBhYnNvbHV0YSBkZWwgYsOgc3F1ZXQgw6lzIGxhIHF1ZSBkb25hIGRpcmVjdGFtZW50IGwnZW51bmNpYXQ6ICQxMiQiXX0="
  },
  {
   "id": "226b",
   "ex": 226,
   "ap": "b",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Hem preguntat a 50 alumnes quin és el seu esport preferit: 16 han escollit futbol; 12, bàsquet; 6, handbol; 10, equitació; i 6, ciclisme.",
   "enunciat": "Quina freqüència absoluta representa el $20\\,\\%$ dels alumnes?",
   "opcions": [
    "$20$ alumnes",
    "$10$ alumnes",
    "$16$ alumnes",
    "$2{,}5$ alumnes"
   ],
   "pistes": [
    "El $20\\,\\%$ de $50$ alumnes és $50\\cdot0{,}20$.",
    "Calcula aquest producte i compara'l amb les freqüències donades: coincideix amb un dels esports."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyIkMjAkIMOpcyBlbCBwZXJjZW50YXRnZSBkb25hdCAoJDIwXFwsXFwlJCksIG5vIGVsIG5vbWJyZSBkJ2FsdW1uZXM6IGNhbCBhcGxpY2FyLWxvIHNvYnJlIGVsIHRvdGFsLCAkNTBcXGNkb3Qweyx9MjAkLiIsICIiLCAiJDE2JCBjb3JyZXNwb24gYWwgZnV0Ym9sLCBsJ2VzcG9ydCBtw6lzIHRyaWF0LCBubyBhbCAkMjBcXCxcXCUkIGV4YWN0ZSBxdWUgZXQgZGVtYW5lbiBjYWxjdWxhci4iLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZGUgZGl2aWRpciBlbiBjb21wdGVzIGRlIG11bHRpcGxpY2FyOiBjYWwgJDUwXFxjZG90MHssfTIwJCwgbm8gJDIwXFxjZG90MHssfTA1JCBvIHNpbWlsYXIuIl0sICJlcnIiOiBbIlBFUkNFTlRBVEdFX01BTF9DQUxDVUxBVCIsICIiLCAiUEVSQ0VOVEFUR0VfTUFMX0NBTENVTEFUIiwgIk9SRFJFX01VTFRJUExJQ0FDSU9fRElWSVNJTyJdLCAicmVzIjogWyIkMjBcXCxcXCUkIGRlICQ1MD01MFxcY2RvdDB7LH0yMD0xMCQgYWx1bW5lcyIsICJDb2luY2lkZWl4IGV4YWN0YW1lbnQgYW1iIGVscyAkMTAkIGFsdW1uZXMgcXVlIGhhbiB0cmlhdCBlcXVpdGFjacOzIl19"
  },
  {
   "id": "226c",
   "ex": 226,
   "ap": "c",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Hem preguntat a 50 alumnes quin és el seu esport preferit: 16 han escollit futbol; 12, bàsquet; 6, handbol; 10, equitació; i 6, ciclisme.",
   "enunciat": "Quina és la freqüència relativa de l'handbol?",
   "opcions": [
    "$6$",
    "$\\dfrac{6}{16}=0{,}375$",
    "$12\\,\\%$",
    "$\\dfrac{6}{50}=0{,}12$"
   ],
   "pistes": [
    "La freqüència relativa s'obté dividint la freqüència absoluta d'un valor pel total de dades.",
    "Divideix $6$ (handbol) entre $50$ (el total d'alumnes)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBaXjDsiDDqXMgbGEgZnJlccO8w6huY2lhIEFCU09MVVRBIGRlIGwnaGFuZGJvbCwgbm8gbGEgcmVsYXRpdmE6IGNhbCBkaXZpZGlyLWxhIHBlbCB0b3RhbCBkZSAkNTAkIGFsdW1uZXMuIiwgIkVsIGRlbm9taW5hZG9yIGhhIGRlIHNlciBlbCB0b3RhbCBkZSBkYWRlcywgJDUwJCAoZWwgbm9tYnJlIHRvdGFsIGQnYWx1bW5lcyBlbnF1ZXN0YXRzKSwgbm8gbGEgZnJlccO8w6huY2lhIGRlbCBmdXRib2wsICQxNiQuIiwgIkFxdWVzdCDDqXMgZWwgcGVyY2VudGF0Z2UgZGVsIGLDoHNxdWV0LCBubyBsYSBmcmVxw7zDqG5jaWEgcmVsYXRpdmEgZGUgbCdoYW5kYm9sLiBMYSBmcmVxw7zDqG5jaWEgcmVsYXRpdmEgZGUgbCdoYW5kYm9sIHMnb2J0w6kgZGl2aWRpbnQgbGEgc2V2YSBmcmVxw7zDqG5jaWEgYWJzb2x1dGEsICQ2JCwgcGVsIHRvdGFsLiIsICIiXSwgImVyciI6IFsiRlJFUV9SRUxBVElWQV9NQUxfQ0FMQ1VMQURBIiwgIkZSRVFfUkVMQVRJVkFfTUFMX0NBTENVTEFEQSIsICJQRVJDRU5UQVRHRV9NQUxfQ0FMQ1VMQVQiLCAiIl0sICJyZXMiOiBbIiRmX3tcXHRleHR7cmVsfX0oXFx0ZXh0e2hhbmRib2x9KT1cXGRmcmFjezZ9ezUwfT0weyx9MTIkIl19"
  },
  {
   "id": "226d",
   "ex": 226,
   "ap": "d",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Hem preguntat a 50 alumnes quin és el seu esport preferit: 16 han escollit futbol; 12, bàsquet; 6, handbol; 10, equitació; i 6, ciclisme.",
   "enunciat": "Quina freqüència relativa representa el $32\\,\\%$?",
   "opcions": [
    "$32$, la del futbol",
    "$0{,}20$, l'equitació",
    "$0{,}32$, la del futbol",
    "$0{,}24$, la del bàsquet"
   ],
   "pistes": [
    "Passa el $32\\,\\%$ a freqüència relativa dividint entre $100$: $0{,}32$.",
    "Compara aquest valor amb les freqüències relatives calculades abans per a cada esport."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJMYSBmcmVxw7zDqG5jaWEgcmVsYXRpdmEgw6lzIHNlbXByZSB1biB2YWxvciBlbnRyZSAkMCQgaSAkMSQgKG8gdW5hIGZyYWNjacOzKSwgbm8gZWwgbWF0ZWl4IG5vbWJyZSBxdWUgZWwgcGVyY2VudGF0Z2U6IGNhbCBkaXZpZGlyICQzMiQgZW50cmUgJDEwMCQuIiwgIiQweyx9MjAkIGNvcnJlc3BvbiBhIHVuICQyMFxcLFxcJSQgKGwnZXF1aXRhY2nDsyksIG5vIGFsICQzMlxcLFxcJSQgcXVlIGV0IGRlbWFuZW4uIiwgIiIsICIkMHssfTI0JCBjb3JyZXNwb24gYSB1biAkMjRcXCxcXCUkIChlbCBkZWwgYsOgc3F1ZXQpLCBubyBhbCAkMzJcXCxcXCUkIHF1ZSBldCBkZW1hbmVuLiJdLCAiZXJyIjogWyJQRVJDRU5UQVRHRV9NQUxfQ0FMQ1VMQVQiLCAiRlJFUV9SRUxBVElWQV9NQUxfQ0FMQ1VMQURBIiwgIiIsICJGUkVRX1JFTEFUSVZBX01BTF9DQUxDVUxBREEiXSwgInJlcyI6IFsiJDMyXFwsXFwlXFx0bzB7LH0zMiQsIHF1ZSDDqXMgJFxcZGZyYWN7MTZ9ezUwfSQ6IGNvcnJlc3BvbiBhbCBmdXRib2wiXX0="
  },
  {
   "id": "235a",
   "ex": 235,
   "ap": "a",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Hem estudiat el contingut en sals de 22 ampolles d'aigua, i n'hem obtingut les dades següents, expressades en mil·ligrams: $46,25,27,30,48,40,27,44,37,62,56,29,76,75,49,59,33,52,54,45,66,69$.",
   "enunciat": "Classifica la variable estadística estudiada.",
   "opcions": [
    "Variable qualitativa, perquè depèn de la marca de cada ampolla",
    "Variable quantitativa discreta, perquè només hi ha $22$ dades",
    "Variable quantitativa discreta, perquè totes les dades donades són nombres enters",
    "Variable quantitativa contínua (el contingut en sals pot prendre qualsevol valor decimal dins d'un rang)"
   ],
   "pistes": [
    "El contingut en sals és una mesura (mil·ligrams): pensa si admet valors decimals, encara que les dades donades siguin enters.",
    "Compara-ho amb altres mesures contínues, com el pes o l'alçada."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCBjb250aW5ndXQgZW4gc2FscyBzJ2V4cHJlc3NhIGFtYiB1biBub21icmUgKG1pbMK3bGlncmFtcyk6IMOpcyB1bmEgdmFyaWFibGUgcXVhbnRpdGF0aXZhLCBubyBxdWFsaXRhdGl2YS4iLCAiRWwgbm9tYnJlIGRlIGRhZGVzIHJlY29sbGlkZXMgKCQyMiQpIG5vIHTDqSByZXMgYSB2ZXVyZSBhbWIgc2kgbGEgdmFyaWFibGUgw6lzIGRpc2NyZXRhIG8gY29udMOtbnVhOiBlbCBxdWUgaG8gZGV0ZXJtaW5hIMOpcyBzaSBlbCBwcm9waSBjb250aW5ndXQgZW4gc2FscyBwb3QgcHJlbmRyZSB2YWxvcnMgZGVjaW1hbHMsIGkgc8OtIHF1ZSBlbiBwb3QgcHJlbmRyZS4iLCAiUXVlIGxlcyBkYWRlcyBzJ2hhZ2luIGVzY3JpdCBjb20gYSBub21icmVzIGVudGVycyBubyB2b2wgZGlyIHF1ZSBsYSB2YXJpYWJsZSBzaWd1aSBkaXNjcmV0YTogdW4gY29udGluZ3V0IGVuIG1pbMK3bGlncmFtcyBwb3QgcHJlbmRyZSwgZW4gcHJpbmNpcGksIHF1YWxzZXZvbCB2YWxvciBkZWNpbWFsIChwZXIgZXhlbXBsZSwgJDQ2eyx9MyQgbWcpLCBzaW1wbGVtZW50IHMnaGEgYXJyb2Rvbml0IGVuIHJlY29sbGlyLWxhLiIsICIiXSwgImVyciI6IFsiUVVBTElUQVRJVkFfUVVBTlRJVEFUSVZBX0NPTkZPU0VTIiwgIkRJU0NSRVRBX0NPTlRJTlVBX0NPTkZPU0VTIiwgIkRJU0NSRVRBX0NPTlRJTlVBX0NPTkZPU0VTIiwgIiJdLCAicmVzIjogWyJFbCBjb250aW5ndXQgZW4gc2FscyDDqXMgdW5hIG1lc3VyYSBxdWUgcG90IHByZW5kcmUgcXVhbHNldm9sIHZhbG9yIGRlY2ltYWwgZGlucyBkJ3VuIHJhbmc6IHZhcmlhYmxlIHF1YW50aXRhdGl2YSBjb250w61udWEuIl19"
  },
  {
   "id": "235b",
   "ex": 235,
   "ap": "b",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Hem estudiat el contingut en sals de 22 ampolles d'aigua, i n'hem obtingut les dades següents, expressades en mil·ligrams: $46,25,27,30,48,40,27,44,37,62,56,29,76,75,49,59,33,52,54,45,66,69$.",
   "enunciat": "Amb aquestes $22$ dades disperses (de $25$ a $76$ mg, sense gaires valors repetits), convé fer una taula de freqüències amb cada valor per separat o agrupar-les en intervals? Per què?",
   "opcions": [
    "Convé agrupar-les en intervals, perquè amb tants valors diferents i poc repetits una taula sense agrupar (la majoria de freqüències serien $1$) no resumeix la informació",
    "Amb intervals, però només perquè hi ha poques dades ($22$)",
    "És indiferent: les dues maneres donen exactament la mateixa informació",
    "Amb cada valor per separat, perquè així no es perd cap detall de les dades originals"
   ],
   "pistes": [
    "Compara quantes vegades es repeteix cada valor a la llista de $22$ dades.",
    "Si gairebé cap valor es repeteix, una taula sense agrupar no aporta cap resum: pensa en l'alternativa (agrupar en intervals)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgbW90aXUgbm8gw6lzIGVsIG5vbWJyZSBkZSBkYWRlcyBlbiBzaSwgc2luw7MgcXVlIGVzdGFuIG1vbHQgZGlzcGVyc2VzIGkgZ2FpcmViw6kgbm8gZXMgcmVwZXRlaXhlbjogc2kgZWxzICQyMiQgdmFsb3JzIGhhZ3Vlc3NpbiBlc3RhdCBtb2x0IHNlbWJsYW50cyBlbnRyZSBlbGxzLCBubyBjYWxpZHJpYSBhZ3J1cGFyIGVuIGludGVydmFscy4iLCAiTm8gw6lzIGluZGlmZXJlbnQ6IGFncnVwYXIgZW4gaW50ZXJ2YWxzIHPDrSBxdWUgYXBvcnRhIHVuIHJlc3VtIMO6dGlsIChxdWFudHMgdmFsb3JzIGNhdWVuIGVuIGNhZGEgZnJhbmphKSwgbWVudHJlIHF1ZSB1bmEgdGF1bGEgc2Vuc2UgYWdydXBhciBhbWIgZGFkZXMgdGFuIGRpc3BlcnNlcyBzZXJpYSBnYWlyZWLDqSB1bmEgY8OycGlhIGRlIGxhIGxsaXN0YSBvcmlnaW5hbC4iLCAiTm8gcGVyZHJlIGNhcCBkZXRhbGwgbm8gw6lzIGwnb2JqZWN0aXUgZCd1bmEgdGF1bGEgZGUgZnJlccO8w6huY2llczogbCdvYmplY3RpdSDDqXMgcmVzdW1pci4gQW1iIHZhbG9ycyB0YW4gZGlzcGVyc29zIGkgcG9jIHJlcGV0aXRzLCB1bmEgdGF1bGEgc2Vuc2UgYWdydXBhciBzZXJpYSBnYWlyZWLDqSB0YW4gbGxhcmdhIGNvbSBsYSBsbGlzdGEgb3JpZ2luYWwgaSBubyBhcG9ydGFyaWEgY2FwIHJlc3VtIMO6dGlsLiJdLCAiZXJyIjogWyIiLCAiQ1JJVEVSSV9BR1JVUEFDSU9fTUFMIiwgIlZFUkVESUNURV9JTlZFUlRJVCIsICJDUklURVJJX0FHUlVQQUNJT19NQUwiXSwgInJlcyI6IFsiQW1iIHVuIHJhbmcgYW1wbGkgKCQyNSQgYSAkNzYkIG1nKSBpIHBvcXVlcyByZXBldGljaW9ucywgdW5hIHRhdWxhIHNlbnNlIGFncnVwYXIgZG9uYXJpYSBnYWlyZWLDqSB0b3RlcyBsZXMgZnJlccO8w6huY2llcyBpZ3VhbHMgYSAkMSQsIGkgbm8gcmVzdW1pcmlhIHJlcy4iLCAiUGVyIGFpeMOyLCBlbiB2YXJpYWJsZXMgY29udMOtbnVlcyBjb20gYXF1ZXN0YSwgcydhZ3J1cGVuIGxlcyBkYWRlcyBlbiBpbnRlcnZhbHM6IGFpeMOtIGxhIHRhdWxhIHPDrSBxdWUgbW9zdHJhIHBhdHJvbnMgY2xhcnMuIl19"
  },
  {
   "id": "227",
   "ex": 227,
   "ap": "",
   "bloc": "grafics",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "La talla de calçat que fan servir 20 alumnes en una classe d'Educació Física és: $37,40,39,37,38,38,38,41,42,37,43,40,38,38,38,40,37,37,38,38$. Representa el diagrama de barres i el polígon de freqüències.",
   "enunciat": "Quina talla té la freqüència absoluta més alta, i quin valor pren aquesta freqüència?",
   "opcions": [
    "La talla $38$, amb freqüència $8$",
    "La talla $37$, amb freqüència $5$",
    "La talla $40$, amb freqüència $3$",
    "La talla $43$, amb freqüència $1$"
   ],
   "pistes": [
    "Compta quantes vegades apareix cada talla a la llista de $20$ dades.",
    "La barra més alta del diagrama de barres és la que té la freqüència absoluta més gran."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiTGEgdGFsbGEgJDM3JCBzw60gcXVlIMOpcyBiYXN0YW50IGZyZXHDvGVudCAoJDUkIHZlZ2FkZXMpLCBwZXLDsiBubyDDqXMgbGEgcXVlIG3DqXMgZXMgcmVwZXRlaXg6IHRvcm5hIGEgY29tcHRhciBsYSB0YWxsYSAkMzgkLiIsICJMYSB0YWxsYSAkNDAkIGFwYXJlaXggJDMkIHZlZ2FkZXMsIHBlcsOyIG4naGkgaGEgdW5hIGFsdHJhIGFtYiB1bmEgZnJlccO8w6huY2lhIG3DqXMgYWx0YTogdG9ybmEgYSBjb21wdGFyLWxlcyB0b3Rlcy4iLCAiTGEgdGFsbGEgJDQzJCBub23DqXMgYXBhcmVpeCB1bmEgdmVnYWRhOiDDqXMgZGUgbGVzIE1FTllTIGZyZXHDvGVudHMsIG5vIGRlIGxlcyBtw6lzIGZyZXHDvGVudHMuIl0sICJlcnIiOiBbIiIsICJSRUNPTVBURV9NQUxfRkVUIiwgIlJFQ09NUFRFX01BTF9GRVQiLCAiUkVDT01QVEVfTUFMX0ZFVCJdLCAicmVzIjogWyJDb21wdGFudCBsZXMgJDIwJCBkYWRlczogJDM3XFx0bzUkLCAkMzhcXHRvOCQsICQzOVxcdG8xJCwgJDQwXFx0bzMkLCAkNDFcXHRvMSQsICQ0MlxcdG8xJCwgJDQzXFx0bzEkIiwgIkxhIGZyZXHDvMOobmNpYSBtw6lzIGFsdGEgw6lzICQ4JCwgcGVyIGEgbGEgdGFsbGEgJDM4JCJdfQ=="
  },
  {
   "id": "228a",
   "ex": 228,
   "ap": "a",
   "bloc": "grafics",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Les estatures, en centímetres, d'un grup de 27 joves són: $155,178,170,165,173,168,160,166,176,169,158,170,179,161,164,156,170,171,167,151,163,158,164,174,176,164,154$. Fes servir intervals d'amplitud $5$ per formar una taula de freqüències.",
   "enunciat": "Quants joves tenen una estatura dins de l'interval $[160,165)$ cm?",
   "opcions": [
    "$4$ joves",
    "$5$ joves",
    "$27$ joves",
    "$6$ joves"
   ],
   "pistes": [
    "Amb intervals $[a,b)$, el límit inferior $a$ hi pertany, el superior $b$ no.",
    "Recorre la llista i marca les estatures que compleixin $160\\leq x<165$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJSZXZpc2EgYW1iIGN1cmEgZWxzIGzDrW1pdHMgZGUgbCdpbnRlcnZhbDogcmVjb3JkYSBxdWUgZWwgJDE2MCQgaGkgcGVydGFueSwgcGVyw7IgZWwgJDE2NSQgamEgcGVydGFueWVyaWEgYWwgc2Vnw7xlbnQgaW50ZXJ2YWw7IHRvcm5hIGEgY29tcHRhciBsZXMgZGFkZXMgdW5hIHBlciB1bmEuIiwgIlQnaGFzIGRlaXhhdCB1bmEgZGFkYSBwZWwgY2Ftw60gZW4gYXF1ZXN0IGludGVydmFsOiB0b3JuYSBhIGNvbXB0YXIgcXVhbnRlcyBlc3RhdHVyZXMgY2F1ZW4gZW50cmUgJDE2MCQgKGluY2zDsnMpIGkgJDE2NSQgKGV4Y2zDsnMpLiIsICIkMjckIMOpcyBlbCB0b3RhbCBkZSBqb3ZlcyBkZWwgZ3J1cCBzZW5jZXIsIG5vIGVscyBxdWUgY2F1ZW4gZGlucyBkJ2FxdWVzdCBpbnRlcnZhbCBlbiBjb25jcmV0LiIsICIiXSwgImVyciI6IFsiSU5URVJWQUxfTElNSVRfTUFMX0FTU0lHTkFUIiwgIlJFQ09NUFRFX01BTF9GRVQiLCAiVE9UQUxfREFERVNfTUFMX0NBTENVTEFUIiwgIiJdLCAicmVzIjogWyJFc3RhdHVyZXMgZGlucyBkZSAkWzE2MCwxNjUpJDogJDE2MCwxNjEsMTYzLDE2NCwxNjQsMTY0JCIsICJFbiB0b3RhbCwgJDYkIGpvdmVzIl19"
  },
  {
   "id": "228b",
   "ex": 228,
   "ap": "b",
   "bloc": "grafics",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Les estatures, en centímetres, d'un grup de 27 joves són: $155,178,170,165,173,168,160,166,176,169,158,170,179,161,164,156,170,171,167,151,163,158,164,174,176,164,154$. Fes servir intervals d'amplitud $5$ per formar una taula de freqüències.",
   "enunciat": "Quina és la freqüència absoluta acumulada de l'interval $[165,170)$?",
   "opcions": [
    "$12$",
    "$17$",
    "$5$",
    "$27$"
   ],
   "pistes": [
    "Calcula les freqüències absolutes dels intervals anteriors: $[150,155)\\to2$, $[155,160)\\to4$, $[160,165)\\to6$.",
    "Suma-les totes amb la de $[165,170)$, que és $5$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyIkMTIkIMOpcyBsJ2FjdW11bGFkYSBkZSBsJ2ludGVydmFsIGFudGVyaW9yLCAkWzE2MCwxNjUpJDogcGVyIGEgJFsxNjUsMTcwKSQgY2FsIHN1bWFyLWhpIHRhbWLDqSBsYSBzZXZhIHByw7JwaWEgZnJlccO8w6huY2lhLCAkNSQuIiwgIiIsICIkNSQgw6lzIGxhIGZyZXHDvMOobmNpYSBhYnNvbHV0YSBzaW1wbGUgZCdhcXVlc3QgaW50ZXJ2YWwgKG5vIGFjdW11bGFkYSk6IGNhbCBzdW1hci1oaSB0YW1iw6kgbGVzIGZyZXHDvMOobmNpZXMgZGVscyBpbnRlcnZhbHMgYW50ZXJpb3JzLiIsICIkMjckIMOpcyBlbCB0b3RhbCBkZSBqb3ZlcywgbGEgZnJlccO8w6huY2lhIGFjdW11bGFkYSBkZSBsJ8OaTFRJTSBpbnRlcnZhbCwgbm8gbGEgZGUgJFsxNjUsMTcwKSQuIl0sICJlcnIiOiBbIkZfQUNVTVVMQURBX05PX0NSRUlYRU5UIiwgIiIsICJGUkVRX0FCU09MVVRBX0FDVU1VTEFEQV9DT05GT1NFUyIsICJUT1RBTF9EQURFU19NQUxfQ0FMQ1VMQVQiXSwgInJlcyI6IFsiRnJlccO8w6huY2llczogJDIsNCw2LDUkIHBlciBhbHMgcXVhdHJlIHByaW1lcnMgaW50ZXJ2YWxzIiwgIkFjdW11bGFkYSBkZSAkWzE2NSwxNzApJDogJDIrNCs2KzU9MTckIl19"
  },
  {
   "id": "228c",
   "ex": 228,
   "ap": "c",
   "bloc": "grafics",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Les estatures, en centímetres, d'un grup de 27 joves són: $155,178,170,165,173,168,160,166,176,169,158,170,179,161,164,156,170,171,167,151,163,158,164,174,176,164,154$. Fes servir intervals d'amplitud $5$ per formar una taula de freqüències.",
   "enunciat": "Per representar aquestes dades agrupades en intervals, cal fer servir un diagrama de barres o un histograma? Per què?",
   "opcions": [
    "Un histograma, perquè la variable és contínua i les dades estan agrupades en intervals: les barres no porten separació entre elles",
    "Un diagrama de barres, perquè hi ha $6$ intervals diferents",
    "Cap dels dos: amb intervals no es pot representar cap gràfic",
    "Un diagrama de barres, perquè és el gràfic més habitual per a qualsevol tipus de dades"
   ],
   "pistes": [
    "L'estatura és una variable contínua, agrupada en intervals: quin gràfic és el propi d'aquest cas?",
    "Recorda la diferència: el diagrama de barres deixa espai entre barres, l'histograma no."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgbm9tYnJlIGQnaW50ZXJ2YWxzIG5vIGRldGVybWluYSBlbCB0aXB1cyBkZSBncsOgZmljOiBlbCBxdWUgaG8gZGV0ZXJtaW5hIMOpcyBxdWUgbGEgdmFyaWFibGUgKGVzdGF0dXJhKSDDqXMgY29udMOtbnVhIGkgbGVzIGRhZGVzIGVzdGFuIGFncnVwYWRlcywgcXVlIMOpcyBleGFjdGFtZW50IHF1YW4gZXMgZmEgc2VydmlyIGwnaGlzdG9ncmFtYS4iLCAiU8OtIHF1ZSBlcyBwb3QgcmVwcmVzZW50YXI6IHByZWNpc2FtZW50IGwnaGlzdG9ncmFtYSDDqXMgZWwgZ3LDoGZpYyBwZW5zYXQgcGVyIGEgZGFkZXMgY29udMOtbnVlcyBhZ3J1cGFkZXMgZW4gaW50ZXJ2YWxzLiIsICJFbCBkaWFncmFtYSBkZSBiYXJyZXMgKGFtYiBzZXBhcmFjacOzIGVudHJlIGJhcnJlcykgcyd1dGlsaXR6YSBwZXIgYSB2YXJpYWJsZXMgZGlzY3JldGVzIG8gcXVhbGl0YXRpdmVzLCBubyBwZXIgYSBkYWRlcyBjb250w61udWVzIGFncnVwYWRlcyBlbiBpbnRlcnZhbHMuIl0sICJlcnIiOiBbIiIsICJESUFHUkFNQV9ISVNUT0dSQU1BX0NPTkZPU09TIiwgIkRJQUdSQU1BX0hJU1RPR1JBTUFfQ09ORk9TT1MiLCAiRElBR1JBTUFfSElTVE9HUkFNQV9DT05GT1NPUyJdLCAicmVzIjogWyJDb20gcXVlIGwnZXN0YXR1cmEgw6lzIGNvbnTDrW51YSBpIGxlcyBkYWRlcyBlc3RhbiBhZ3J1cGFkZXMgZW4gaW50ZXJ2YWxzLCBlbCBncsOgZmljIGFkZXF1YXQgw6lzIGwnaGlzdG9ncmFtYSwgYW1iIGJhcnJlcyBjb250aWfDvGVzIChzZW5zZSBzZXBhcmFjacOzKS4iXX0="
  },
  {
   "id": "229",
   "ex": 229,
   "ap": "",
   "bloc": "grafics",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Dels 30 assistents a un sopar d'empresa, el $30\\,\\%$ va menjar vedella, el $40\\,\\%$, xai, i la resta va menjar peix. Representa les dades en un gràfic de sectors.",
   "enunciat": "Quin angle ocupa el sector corresponent al xai en el gràfic de sectors?",
   "opcions": [
    "$144^\\circ$",
    "$12$ persones",
    "$120^\\circ$",
    "$40^\\circ$"
   ],
   "pistes": [
    "L'angle d'un sector s'obté multiplicant la seva freqüència relativa (el percentatge en tant per u) pels $360^\\circ$ totals.",
    "Calcula $0{,}40\\cdot360^\\circ$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQWl4w7Igw6lzIGVsIG5vbWJyZSBkZSBwZXJzb25lcyBxdWUgdmFuIG1lbmphciB4YWkgKCQzMFxcY2RvdDB7LH00MCQpLCBubyBsJ2FuZ2xlIGRlbCBzZXUgc2VjdG9yIGFsIGdyw6BmaWMuIiwgIkFxdWVzdCB2YWxvciBubyBzdXJ0IGRlICQweyx9NDBcXGNkb3QzNjBeXFxjaXJjJDogdG9ybmEgYSBmZXIgZWwgY8OgbGN1bCBhbWIgY3VyYS4iLCAiJDQwJCDDqXMgZWwgcGVyY2VudGF0Z2UgZGVsIHhhaSwgbm8gbCdhbmdsZSBkZWwgc2VjdG9yOiBjYWwgbXVsdGlwbGljYXIgbGEgZnJlccO8w6huY2lhIHJlbGF0aXZhICgkMHssfTQwJCkgcGVscyAkMzYwXlxcY2lyYyQgdG90YWxzIGRlIGxhIGNpcmN1bWZlcsOobmNpYS4iXSwgImVyciI6IFsiIiwgIlBFUkNFTlRBVEdFX01BTF9DQUxDVUxBVCIsICJTRUNUT1JfQU5HTEVfTUFMX0NBTENVTEFUIiwgIlNFQ1RPUl9BTkdMRV9NQUxfQ0FMQ1VMQVQiXSwgInJlcyI6IFsiQW5nbGUgZGVsIHhhaTogJDB7LH00MFxcY2RvdDM2MF5cXGNpcmM9MTQ0XlxcY2lyYyQiXX0="
  },
  {
   "id": "230a",
   "ex": 230,
   "ap": "a",
   "bloc": "grafics",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Observa aquest polígon de freqüències (amb els punts $(1,3)$, $(2,5)$, $(3,6)$, $(4,4)$ i $(5,2)$). Indica, raonadament, quines de les afirmacions següents són certes.",
   "enunciat": "La freqüència absoluta de $5$ és $0{,}3$.",
   "opcions": [
    "Fals: la freqüència absoluta de $5$ és $10$, no $0{,}3$",
    "Fals: la freqüència absoluta de $x_i=5$ és el punt $(5,2)$, és a dir, $f(5)=2$ (un nombre enter, un recompte); $0{,}3$ seria, si de cas, una freqüència relativa aproximada, no l'absoluta.",
    "Cert: el punt $(5,2)$ del polígon dona directament la freqüència $0{,}3$",
    "Cert, perquè la freqüència relativa de $5$ i la seva absoluta són sempre el mateix valor"
   ],
   "pistes": [
    "El polígon dona directament $f(5)$ amb el seu punt $(5,2)$: llegeix-lo tal qual.",
    "La freqüència absoluta és sempre un nombre enter (un recompte), mai un decimal com $0{,}3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCB2ZXJlZGljdGUgKFwiZmFsc1wiKSDDqXMgY29ycmVjdGUsIHBlcsOyIGxhIGZyZXHDvMOobmNpYSBhYnNvbHV0YSBkZSAkNSQgbm8gw6lzICQxMCQ6IGVsIHByb3BpIHB1bnQgZGVsIHBvbMOtZ29uLCAkKDUsMikkLCBqYSBkaXUgZGlyZWN0YW1lbnQgcXVlIMOpcyAkMiQuIiwgIiIsICJFbCBwdW50ICQoNSwyKSQgZG9uYSBsYSBmcmVxw7zDqG5jaWEgQUJTT0xVVEEsIHF1ZSDDqXMgJDIkICh1biByZWNvbXB0ZSBlbnRlciksIG5vICQweyx9MyQ6IGxhIGZyZXHDvMOobmNpYSBhYnNvbHV0YSBtYWkgw6lzIHVuIG7Dum1lcm8gZW50cmUgJDAkIGkgJDEkLiIsICJMYSBmcmVxw7zDqG5jaWEgYWJzb2x1dGEgaSBsYSByZWxhdGl2YSBkJ3VuIG1hdGVpeCB2YWxvciBnYWlyZWLDqSBtYWkgY29pbmNpZGVpeGVuOiBsJ2Fic29sdXRhIMOpcyB1biByZWNvbXB0ZSBlbnRlciAoJGYoNSk9MiQpLCBsYSByZWxhdGl2YSDDqXMgYXF1ZXN0IHJlY29tcHRlIGRpdmlkaXQgcGVsIHRvdGFsICgkXFxmcmFjezJ9ezIwfT0weyx9MTAkKS4iXSwgImVyciI6IFsiUkVDT01QVEVfTUFMX0ZFVCIsICIiLCAiRlJFUV9SRUxBVElWQV9NQUxfQ0FMQ1VMQURBIiwgIkZSRVFfQUJTT0xVVEFfQUNVTVVMQURBX0NPTkZPU0VTIl0sICJyZXMiOiBbIkVsIHB1bnQgJCg1LDIpJCBpbmRpY2EgJGYoNSk9MiQsIG5vICQweyx9MyQ6IGwnYWZpcm1hY2nDsyDDqXMgRkFMU0EiXX0="
  },
  {
   "id": "230b",
   "ex": 230,
   "ap": "b",
   "bloc": "grafics",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Observa aquest polígon de freqüències (amb els punts $(1,3)$, $(2,5)$, $(3,6)$, $(4,4)$ i $(5,2)$). Indica, raonadament, quines de les afirmacions següents són certes.",
   "enunciat": "La freqüència absoluta acumulada de $4$ és $4$.",
   "opcions": [
    "Fals: la freqüència absoluta acumulada de $4$ és $F(4)=3+5+6+4=18$, no $4$ (que és, de fet, la seva freqüència absoluta SIMPLE, $f(4)$, no l'acumulada).",
    "Cert, perquè totes les freqüències acumulades d'aquest polígon valen $4$",
    "Fals: la freqüència absoluta acumulada de $4$ és $2$",
    "Cert: el punt $(4,4)$ del polígon dona directament $F(4)=4$"
   ],
   "pistes": [
    "Calcula $F(4)$ sumant les freqüències absolutes de $1$, $2$, $3$ i $4$: $3+5+6+4$.",
    "No confonguis això amb el punt $(4,4)$, que dona $f(4)$, no $F(4)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiTGVzIGZyZXHDvMOobmNpZXMgYWN1bXVsYWRlcyBubyBwb2RlbiBzZXIgdG90ZXMgaWd1YWxzOiB2YW4gY3JlaXhlbnQgcHJvZ3Jlc3NpdmFtZW50IGEgbWVzdXJhIHF1ZSAkeF9pJCBhdWdtZW50YSwgZGVzIGRlICRGKDEpPTMkIGZpbnMgYSAkRig1KT0yMCQuIiwgIkVsIHZlcmVkaWN0ZSAoXCJmYWxzXCIpIMOpcyBjb3JyZWN0ZSwgcGVyw7IgJEYoNCkkIG5vIHBvdCBzZXIgJDIkOiBsJ2FjdW11bGFkYSBjcmVpeCAobyBlcyBxdWVkYSBpZ3VhbCkgYSBtZXN1cmEgcXVlICR4X2kkIGNyZWl4LCBpIGphIG5vbcOpcyBhbWIgJGYoMSk9MyQgc3VwZXJhcmlhIGFxdWVzdCB2YWxvci4iLCAiRWwgcHVudCAkKDQsNCkkIGRvbmEgbGEgZnJlccO8w6huY2lhIGFic29sdXRhIFNJTVBMRSwgJGYoNCk9NCQsIG5vIGwnYWN1bXVsYWRhOiAkRig0KSQgcydvYnTDqSBzdW1hbnQgdGFtYsOpIGxlcyBmcmVxw7zDqG5jaWVzIGRlbHMgdmFsb3JzIGFudGVyaW9ycyAoJDEkLCAkMiQgaSAkMyQpLiJdLCAiZXJyIjogWyIiLCAiRl9BQ1VNVUxBREFfTk9fQ1JFSVhFTlQiLCAiRl9BQ1VNVUxBREFfTk9fQ1JFSVhFTlQiLCAiRlJFUV9BQlNPTFVUQV9BQ1VNVUxBREFfQ09ORk9TRVMiXSwgInJlcyI6IFsiJEYoNCk9ZigxKStmKDIpK2YoMykrZig0KT0zKzUrNis0PTE4JCwgbm8gJDQkOiBsJ2FmaXJtYWNpw7Mgw6lzIEZBTFNBIl19"
  },
  {
   "id": "230c",
   "ex": 230,
   "ap": "c",
   "bloc": "grafics",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Observa aquest polígon de freqüències (amb els punts $(1,3)$, $(2,5)$, $(3,6)$, $(4,4)$ i $(5,2)$). Indica, raonadament, quines de les afirmacions següents són certes.",
   "enunciat": "La freqüència relativa de $5$ és $2$.",
   "opcions": [
    "Fals: la freqüència relativa de $5$ és $20$",
    "Cert, perquè $N=20$ i $\\frac{20}{20}\\cdot2=2$",
    "Cert: la freqüència relativa i l'absoluta d'un valor són sempre iguals",
    "Fals: la freqüència relativa de $5$ és $\\dfrac{f(5)}{N}=\\dfrac{2}{20}=0{,}10$, no $2$ (que és, de fet, la seva freqüència absoluta, no la relativa)."
   ],
   "pistes": [
    "Calcula el total $N$ sumant totes les freqüències: $3+5+6+4+2$.",
    "La freqüència relativa de $5$ és $\\frac{f(5)}{N}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCB2ZXJlZGljdGUgKFwiZmFsc1wiKSDDqXMgY29ycmVjdGUsIHBlcsOyIGxhIGZyZXHDvMOobmNpYSByZWxhdGl2YSBtYWkgw6lzIG3DqXMgZ3JhbiBxdWUgJDEkOiBjYWwgZGl2aWRpciAkZig1KSQgZW50cmUgZWwgdG90YWwgJE49MjAkLCBubyBtdWx0aXBsaWNhci1sby4iLCAiQXF1ZXN0IGPDoGxjdWwgbm8gY29ycmVzcG9uIGEgbGEgZGVmaW5pY2nDsyBkZSBmcmVxw7zDqG5jaWEgcmVsYXRpdmE6IGxhIGZyZXHDvMOobmNpYSByZWxhdGl2YSDDqXMgJFxcZnJhY3tmKDUpfXtOfSQsIG5vIGNhcCBhbHRyYSBjb21iaW5hY2nDsyBkZWxzIG5vbWJyZXMgZGUgbCdlbnVuY2lhdC4iLCAiTm8gc8OzbiBpZ3VhbHM6IGwnYWJzb2x1dGEgw6lzIHVuIHJlY29tcHRlIGVudGVyICgkZig1KT0yJCksIGxhIHJlbGF0aXZhIMOpcyBhcXVlc3QgcmVjb21wdGUgZGl2aWRpdCBwZWwgdG90YWwgZGUgZGFkZXMgKCRcXGZyYWN7Mn17MjB9PTB7LH0xMCQpLiIsICIiXSwgImVyciI6IFsiRlJFUV9SRUxBVElWQV9NQUxfQ0FMQ1VMQURBIiwgIkZSRVFfUkVMQVRJVkFfTUFMX0NBTENVTEFEQSIsICJGUkVRX0FCU09MVVRBX0FDVU1VTEFEQV9DT05GT1NFUyIsICIiXSwgInJlcyI6IFsiJE49Mys1KzYrNCsyPTIwJCIsICIkZl97XFx0ZXh0e3JlbH19KDUpPVxcZGZyYWN7Mn17MjB9PTB7LH0xMCQsIG5vICQyJDogbCdhZmlybWFjacOzIMOpcyBGQUxTQSJdfQ=="
  },
  {
   "id": "230d",
   "ex": 230,
   "ap": "d",
   "bloc": "grafics",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Observa aquest polígon de freqüències (amb els punts $(1,3)$, $(2,5)$, $(3,6)$, $(4,4)$ i $(5,2)$). Indica, raonadament, quines de les afirmacions següents són certes.",
   "enunciat": "El percentatge de $4$ és $20\\,\\%$.",
   "opcions": [
    "Cert: amb $N=20$ dades, el percentatge de $4$ és $\\dfrac{f(4)}{N}\\cdot100=\\dfrac{4}{20}\\cdot100=20\\,\\%$.",
    "Fals: el percentatge de $4$ és $4\\,\\%$",
    "Cert, però només perquè la suma de tots els percentatges dona $100\\,\\%$",
    "Fals: el percentatge de $4$ és $80\\,\\%$"
   ],
   "pistes": [
    "Calcula el total $N=20$ i la freqüència de $4$, que és $f(4)=4$.",
    "Percentatge $=\\dfrac{f(4)}{N}\\cdot100$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgdmVyZWRpY3RlIChcImZhbHNcIikgbm8gw6lzIGNvcnJlY3RlOiBmZW50IGVsIGPDoGxjdWwgY29tcGxldCwgJFxcZnJhY3s0fXsyMH1cXGNkb3QxMDA9MjAkLCBubyAkNCQgKHF1ZSBzZXJpYSBlbCByZXN1bHRhdCBkJ29ibGlkYXItc2UgZGUgZGl2aWRpciBwZXIgJE4kIGFiYW5zIGRlIG11bHRpcGxpY2FyIHBlciAkMTAwJCkuIiwgIkVsIHZlcmVkaWN0ZSAoXCJjZXJ0XCIpIMOpcyBjb3JyZWN0ZSwgcGVyw7Igbm8gcGVyIGFxdWVzdCBtb3RpdSBnZW5lcmFsOiBlbCBwZXJjZW50YXRnZSBkZSAkNCQgw6lzICQyMFxcLFxcJSQgcGVycXXDqCwgY29uY3JldGFtZW50LCAkXFxmcmFjezR9ezIwfVxcY2RvdDEwMD0yMCQuIiwgIkVsIHZlcmVkaWN0ZSBubyDDqXMgY29ycmVjdGU6ICQ4MFxcLFxcJSQgbm8gc3VydCBkZSAkXFxmcmFjezR9ezIwfVxcY2RvdDEwMCQ7IHRvcm5hIGEgZmVyIGVsIGPDoGxjdWwgcGFzIGEgcGFzLiJdLCAiZXJyIjogWyIiLCAiUEVSQ0VOVEFUR0VfTUFMX0NBTENVTEFUIiwgIlZFUkVESUNURV9JTlZFUlRJVCIsICJQRVJDRU5UQVRHRV9NQUxfQ0FMQ1VMQVQiXSwgInJlcyI6IFsiJE49MjAkLCAkZig0KT00JCIsICJQZXJjZW50YXRnZSBkZSAkNCQ6ICRcXGRmcmFjezR9ezIwfVxcY2RvdDEwMD0yMFxcLFxcJSQ6IGwnYWZpcm1hY2nDsyDDqXMgQ0VSVEEiXX0="
  },
  {
   "id": "231",
   "ex": 231,
   "ap": "",
   "bloc": "grafics",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Construeix la taula de freqüències a partir del polígon de freqüències següent (amb els punts $(5,1)$, $(10,3)$, $(15,4)$, $(20,4)$, $(25,7)$ i $(30,6)$).",
   "enunciat": "Quantes dades en total representa aquest polígon de freqüències?",
   "opcions": [
    "$6$ dades",
    "$25$ dades",
    "$7$ dades",
    "$30$ dades"
   ],
   "pistes": [
    "El total de dades és la suma de totes les freqüències absolutes: $1+3+4+4+7+6$.",
    "Suma-les totes."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyIkNiQgw6lzIGVsIG5vbWJyZSBkZSBwdW50cyAodmFsb3JzIGRpZmVyZW50cyBkZSAkeF9pJCkgcXVlIHTDqSBlbCBwb2zDrWdvbiwgbm8gZWwgdG90YWwgZGUgZGFkZXM6IGNhbCBzdW1hciBsZXMgZnJlccO8w6huY2llcyBkZSBjYWRhc2N1bi4iLCAiIiwgIiQ3JCDDqXMgbm9tw6lzIGxhIGZyZXHDvMOobmNpYSBtw6lzIGFsdGEgZCdlbnRyZSBlbHMgcHVudHMgKCRmKDI1KT03JCksIG5vIGxhIHN1bWEgZGUgdG90ZXMuIiwgIiQzMCQgw6lzIGwnw7psdGltIHZhbG9yIGRlIGxhIHZhcmlhYmxlICgkeF9pPTMwJCksIG5vIGVsIHRvdGFsIGRlIGRhZGVzOiBlbCB0b3RhbCDDqXMgbGEgc3VtYSBkZSB0b3RlcyBsZXMgZnJlccO8w6huY2llcywgbm8gZWwgdmFsb3IgbcOpcyBncmFuIGRlICR4X2kkLiJdLCAiZXJyIjogWyJUT1RBTF9EQURFU19NQUxfQ0FMQ1VMQVQiLCAiIiwgIlJFQ09NUFRFX01BTF9GRVQiLCAiVE9UQUxfREFERVNfTUFMX0NBTENVTEFUIl0sICJyZXMiOiBbIiROPTErMys0KzQrNys2PTI1JCJdfQ=="
  },
  {
   "id": "232a",
   "ex": 232,
   "ap": "a",
   "bloc": "grafics",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "La taula següent mostra els resultats de llançar 50 vegades un dau: cara $1\\to8$, $2\\to12$, $3\\to5$, $4\\to9$, $5\\to6$, $6\\to10$.",
   "enunciat": "En comparar el diagrama de barres de freqüències absolutes amb el de freqüències relatives d'aquest dau, què s'observa?",
   "opcions": [
    "Els dos diagrames tenen exactament la mateixa forma (les barres pugen i baixen igual); només canvia l'escala de l'eix vertical, perquè les relatives són les absolutes dividides pel mateix nombre ($50$) en tots els casos",
    "No es poden comparar perquè estan en unitats diferents (vegades i tant per u)",
    "Les formes són diferents, perquè les freqüències relatives reordenen les cares de menys a més freqüent",
    "El diagrama de relatives té una barra menys, perquè la cara amb freqüència $5$ desapareix"
   ],
   "pistes": [
    "Cada freqüència relativa s'obté dividint la seva absoluta pel mateix nombre, $50$: què li passa a la forma d'un gràfic quan totes les seves alçades es divideixen pel mateix valor?",
    "Compara, per exemple, quina cara té la barra més alta en cada diagrama."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiU8OtIHF1ZSBlcyBwb2RlbiBjb21wYXJhciBkaXJlY3RhbWVudDogYW1iZMOzcyBkaWFncmFtZXMgbW9zdHJlbiBsYSBtYXRlaXhhIGluZm9ybWFjacOzIHJlbGF0aXZhIGVudHJlIGNhcmVzLCBub23DqXMgYW1iIHVuYSBlc2NhbGEgdmVydGljYWwgZGlmZXJlbnQuIiwgIkxlcyBmcmVxw7zDqG5jaWVzIHJlbGF0aXZlcyBubyByZW9yZGVuZW4gcmVzOiBjYWRhIGNhcmEgY29uc2VydmEgbGEgc2V2YSBwb3NpY2nDszsgbm9tw6lzIGVzIGRpdmlkZWl4IGxhIHNldmEgYWzDp2FkYSBwZWwgbWF0ZWl4IG5vbWJyZSAoJDUwJCkgYSB0b3RlcyBlbGxlcywgYWl4w60gcXVlIGxhIGZvcm1hIGVzIG1hbnTDqSBpZMOobnRpY2EuIiwgIkNhcCBiYXJyYSBkZXNhcGFyZWl4OiBkaXZpZGlyIHBlciAkNTAkIG5vIGVsaW1pbmEgY2FwIHZhbG9yLCBub23DqXMgbidlc2NhbGEgbCdhbMOnYWRhLiBMYSBjYXJhIGFtYiBmcmVxw7zDqG5jaWEgYWJzb2x1dGEgJDUkIHNpbXBsZW1lbnQgcGFzc2EgYSB0ZW5pciB1bmEgYWzDp2FkYSByZWxhdGl2YSBkZSAkMHssfTEwJC4iXSwgImVyciI6IFsiIiwgIkVTX1BPVF9ERVRFUk1JTkFSIiwgIlBPTElHT05fTUFMX0NPTlNUUlVJVCIsICJFU0NBTEFfQUxURVJBX0RBREVTIl0sICJyZXMiOiBbIkZyZXHDvMOobmNpZXMgcmVsYXRpdmVzOiAkXFxmcmFjezh9ezUwfT0weyx9MTYkLCAkXFxmcmFjezEyfXs1MH09MHssfTI0JCwgJFxcZnJhY3s1fXs1MH09MHssfTEwJCwgJFxcZnJhY3s5fXs1MH09MHssfTE4JCwgJFxcZnJhY3s2fXs1MH09MHssfTEyJCwgJFxcZnJhY3sxMH17NTB9PTB7LH0yMCQiLCAiQ29tIHF1ZSB0b3RlcyBzJ29idGVuZW4gZGl2aWRpbnQgcGVyICQ1MCQsIGwnb3JkcmUgaSBsYSBmb3JtYSBkZSBsZXMgYmFycmVzIGVzIG1hbnRlbmVuIGlkw6hudGljczogbm9tw6lzIGNhbnZpYSBsJ2VzY2FsYSB2ZXJ0aWNhbCJdfQ=="
  },
  {
   "id": "232b",
   "ex": 232,
   "ap": "b",
   "bloc": "grafics",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "La taula següent mostra els resultats de llançar 50 vegades un dau: cara $1\\to8$, $2\\to12$, $3\\to5$, $4\\to9$, $5\\to6$, $6\\to10$.",
   "enunciat": "Com s'obté el polígon de freqüències a partir d'un diagrama de barres com el d'aquest dau?",
   "opcions": [
    "Unint amb una corba suau tots els punts, evitant cantonades",
    "Dibuixant un cercle que passi pel capdamunt de totes les barres",
    "Unint només els punts de les cares amb freqüència més alta i més baixa",
    "Unint amb segments els punts que marquen el capdamunt de cada barra, en l'ordre de les cares"
   ],
   "pistes": [
    "Pensa en \"polígon\" com una línia trencada, feta de segments rectes, no una corba ni un cercle.",
    "Cada segment uneix el punt d'una cara amb el de la següent, en l'ordre $1,2,3,4,5,6$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCBwb2zDrWdvbiBkZSBmcmVxw7zDqG5jaWVzIHMnb2J0w6kgdW5pbnQgYW1iIHNlZ21lbnRzIFJFQ1RFUyBlbHMgcHVudHMgcXVlIG1hcnF1ZW4gbCdhbMOnYWRhIGRlIGNhZGEgYmFycmEsIGVuIGwnb3JkcmUgZGVscyB2YWxvcnMgZGUgbGEgdmFyaWFibGUuIEVsIHBvbMOtZ29uIGRlIGZyZXHDvMOobmNpZXMgcydvYnTDqSB1bmludCBhbWIgc2VnbWVudHMgZWxzIHB1bnRzIHF1ZSBtYXJxdWVuIGwnYWzDp2FkYSBkZSBjYWRhIGJhcnJhLCBlbiBsJ29yZHJlIGRlbHMgdmFsb3JzIGRlIGxhIHZhcmlhYmxlLiIsICJFbCBwb2zDrWdvbiBkZSBmcmVxw7zDqG5jaWVzIG5vIMOpcyB1bmEgY2lyY3VtZmVyw6huY2lhOiDDqXMgdW5hIGzDrW5pYSB0cmVuY2FkYSAoc2VnbWVudHMgcmVjdGVzKSBxdWUgdW5laXggZWxzIHB1bnRzIGNvcnJlc3BvbmVudHMgYSBjYWRhIHZhbG9yLiIsICJDYWwgdW5pciBUT1RTIGVscyBwdW50cywgZW4gbCdvcmRyZSBkZWxzIHZhbG9ycyBkZSBsYSB2YXJpYWJsZSwgbm8gbm9tw6lzIGVscyBleHRyZW1zLiIsICIiXSwgImVyciI6IFsiUE9MSUdPTl9NQUxfQ09OU1RSVUlUIiwgIlBPTElHT05fTUFMX0NPTlNUUlVJVCIsICJQT0xJR09OX01BTF9DT05TVFJVSVQiLCAiIl0sICJyZXMiOiBbIkVsIHBvbMOtZ29uIGRlIGZyZXHDvMOobmNpZXMgcydvYnTDqSB1bmludCBhbWIgc2VnbWVudHMgcmVjdGVzIGVscyBwdW50cyBkZWwgY2FwZGFtdW50IGRlIGNhZGEgYmFycmEsIHNlZ3VpbnQgbCdvcmRyZSBkZSBsZXMgY2FyZXMgZGVsIGRhdS4iXX0="
  },
  {
   "id": "232c",
   "ex": 232,
   "ap": "c",
   "bloc": "grafics",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "La taula següent mostra els resultats de llançar 50 vegades un dau: cara $1\\to8$, $2\\to12$, $3\\to5$, $4\\to9$, $5\\to6$, $6\\to10$.",
   "enunciat": "Podries representar les dades d'aquest dau en un histograma?",
   "opcions": [
    "No, perquè un histograma es fa servir per a variables contínues agrupades en intervals, i el resultat de llançar un dau (les cares $1$ a $6$) és una variable discreta amb valors concrets i separats; el que correspon és un diagrama de barres",
    "Sí, un histograma sempre es pot fer servir en lloc d'un diagrama de barres",
    "No, perquè amb un dau només es poden fer gràfics de sectors",
    "Sí, perquè hi ha $6$ cares diferents i això ja és prou dades per fer un histograma"
   ],
   "pistes": [
    "Pensa si la variable \"resultat d'un dau\" és discreta o contínua.",
    "L'histograma és propi de variables contínues agrupades en intervals; per a una variable discreta com aquesta, el gràfic propi és un altre."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiTm8gc2VtcHJlOiBsJ2hpc3RvZ3JhbWEgw6lzIHByb3BpIGRlIHZhcmlhYmxlcyBjb250w61udWVzIGFncnVwYWRlcyBlbiBpbnRlcnZhbHMuIFVuYSB2YXJpYWJsZSBkaXNjcmV0YSBjb20gZWwgcmVzdWx0YXQgZCd1biBkYXUgZXMgcmVwcmVzZW50YSBhbWIgdW4gZGlhZ3JhbWEgZGUgYmFycmVzLCBubyBhbWIgdW4gaGlzdG9ncmFtYS4iLCAiRWwgdmVyZWRpY3RlIChcIm5vXCIpIGEgbCdoaXN0b2dyYW1hIMOpcyBjb3JyZWN0ZSwgcGVyw7Igbm8gw6lzIGwnw7puaWMgZ3LDoGZpYyBwb3NzaWJsZTogZWwgZGlhZ3JhbWEgZGUgYmFycmVzIGkgZWwgcG9sw61nb24gZGUgZnJlccO8w6huY2llcyB0YW1iw6kgc8OzbiBhZGVxdWF0cyBwZXIgYSBhcXVlc3RhIHZhcmlhYmxlIGRpc2NyZXRhLiIsICJFbCBub21icmUgZGUgdmFsb3JzIGRpZmVyZW50cyBubyBkZXRlcm1pbmEgc2kgZXMgcG90IGZlciB1biBoaXN0b2dyYW1hOiBlbCBxdWUgaG8gZGV0ZXJtaW5hIMOpcyBzaSBsYSB2YXJpYWJsZSDDqXMgY29udMOtbnVhIGkgbGVzIGRhZGVzIGVzdGFuIGFncnVwYWRlcyBlbiBpbnRlcnZhbHMsIGkgYXF1w60gbm8gw6lzIGVsIGNhcy4iXSwgImVyciI6IFsiIiwgIkRJQUdSQU1BX0hJU1RPR1JBTUFfQ09ORk9TT1MiLCAiRElBR1JBTUFfSElTVE9HUkFNQV9DT05GT1NPUyIsICJESUFHUkFNQV9ISVNUT0dSQU1BX0NPTkZPU09TIl0sICJyZXMiOiBbIkVsIHJlc3VsdGF0IGQndW4gZGF1IMOpcyB1bmEgdmFyaWFibGUgZGlzY3JldGEgKHZhbG9ycyAkMSQgYSAkNiQsIHNlcGFyYXRzKSwgbm8gY29udMOtbnVhOiBubyBjb3JyZXNwb24gZmVyLWhpIHVuIGhpc3RvZ3JhbWEsIHNpbsOzIHVuIGRpYWdyYW1hIGRlIGJhcnJlcyJdfQ=="
  },
  {
   "id": "234a",
   "ex": 234,
   "ap": "a",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "El nombre de vegades que es va llogar cada mes la pista de tennis d'un poliesportiu: Gener $100$, Febrer $70$, Març $97$, Abril $60$, Maig $62$, Juny $120$, Juliol $100$, Agost $78$, Setembre $66$, Octubre $126$, Novembre $69$, Desembre $90$.",
   "enunciat": "Quin és el total de vegades que es va llogar la pista durant tot l'any?",
   "opcions": [
    "$1\\,038$",
    "$12$",
    "$126$",
    "$86{,}5$"
   ],
   "pistes": [
    "Suma els lloguers dels $12$ mesos, un per un.",
    "$100+70+97+60+62+120+100+78+66+126+69+90$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJDEyJCDDqXMgZWwgbm9tYnJlIGRlIG1lc29zIGRlIGwnYW55LCBubyBlbCB0b3RhbCBkZSB2ZWdhZGVzIHF1ZSBlcyB2YSBsbG9nYXIgbGEgcGlzdGE6IGNhbCBzdW1hciBlbHMgbGxvZ3VlcnMgZGUgY2FkYSBtZXMuIiwgIiQxMjYkIMOpcyBub23DqXMgZWwgdmFsb3IgbcOpcyBhbHQgZCd1biBzb2wgbWVzIChvY3R1YnJlKSwgbm8gbGEgc3VtYSBkZSB0b3RzIGVscyBtZXNvcy4iLCAiQXF1ZXN0IHZhbG9yIHNlbWJsYSBzb3J0aXIgZGUgZmVyIHVuYSBtaXRqYW5hIGVuIGNvbXB0ZXMgZCd1bmEgc3VtYTogY2FsIHN1bWFyIGVscyAkMTIkIHZhbG9ycyBtZW5zdWFscywgbm8gZmVyLW5lIGxhIG1pdGphbmEuIl0sICJlcnIiOiBbIiIsICJUT1RBTF9EQURFU19NQUxfQ0FMQ1VMQVQiLCAiUkVDT01QVEVfTUFMX0ZFVCIsICJQRVJDRU5UQVRHRV9NQUxfQ0FMQ1VMQVQiXSwgInJlcyI6IFsiVG90YWw6ICQxMDArNzArOTcrNjArNjIrMTIwKzEwMCs3OCs2NisxMjYrNjkrOTA9MVxcLDAzOCQiXX0="
  },
  {
   "id": "234b",
   "ex": 234,
   "ap": "b",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "El nombre de vegades que es va llogar cada mes la pista de tennis d'un poliesportiu: Gener $100$, Febrer $70$, Març $97$, Abril $60$, Maig $62$, Juny $120$, Juliol $100$, Agost $78$, Setembre $66$, Octubre $126$, Novembre $69$, Desembre $90$.",
   "enunciat": "En quin percentatge de mesos es va llogar la pista MÉS de $80$ vegades?",
   "opcions": [
    "$41{,}7\\,\\%$",
    "$6$",
    "$80\\,\\%$",
    "$50\\,\\%$"
   ],
   "pistes": [
    "Compta quants mesos tenen més de $80$ lloguers: gener ($100$), març ($97$), juny ($120$), juliol ($100$), octubre ($126$) i desembre ($90$).",
    "Divideix aquest recompte entre els $12$ mesos totals i multiplica per $100$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3QgcGVyY2VudGF0Z2Ugbm8gc3VydCBkZSBjb21wdGFyIGLDqSBlbHMgbWVzb3MgYW1iIG3DqXMgZGUgJDgwJCBsbG9ndWVyczogcmV2aXNhIGxhIGxsaXN0YSBtZXMgYSBtZXMgKGdlbmVyLCBtYXLDpywganVueSwganVsaW9sLCBvY3R1YnJlIGkgZGVzZW1icmUgZW4gdGVuZW4gbcOpcyBkZSAkODAkKS4iLCAiJDYkIMOpcyBlbCBOT01CUkUgZGUgbWVzb3MgYW1iIG3DqXMgZGUgJDgwJCBsbG9ndWVycywgbm8gZWwgcGVyY2VudGF0Z2U6IGNhbCBkaXZpZGlyIGFxdWVzdCAkNiQgZW50cmUgZWwgdG90YWwgZGUgJDEyJCBtZXNvcyBpIG11bHRpcGxpY2FyIHBlciAkMTAwJC4iLCAiJDgwJCDDqXMgZWwgbGxpbmRhciBkZSBsbG9ndWVycyBkZSBsJ2VudW5jaWF0LCBubyBlbCBwZXJjZW50YXRnZSBkZSBtZXNvcyBxdWUgZWwgc3VwZXJlbjogbm8gY29uZm9uZ3VpcyBlbCB2YWxvciBsbGluZGFyIGFtYiBlbCByZXN1bHRhdCBkZWwgY8OgbGN1bC4iLCAiIl0sICJlcnIiOiBbIlJFQ09NUFRFX01BTF9GRVQiLCAiUEVSQ0VOVEFUR0VfTUFMX0NBTENVTEFUIiwgIlBFUkNFTlRBVEdFX01BTF9DQUxDVUxBVCIsICIiXSwgInJlcyI6IFsiTWVzb3MgYW1iIG3DqXMgZGUgJDgwJCBsbG9ndWVyczogZ2VuZXIsIG1hcsOnLCBqdW55LCBqdWxpb2wsIG9jdHVicmUgaSBkZXNlbWJyZSDigJQgJDYkIG1lc29zIGRlICQxMiQiLCAiUGVyY2VudGF0Z2U6ICRcXGRmcmFjezZ9ezEyfVxcY2RvdDEwMD01MFxcLFxcJSQiXX0="
  },
  {
   "id": "234c",
   "ex": 234,
   "ap": "c",
   "bloc": "grafics",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "El nombre de vegades que es va llogar cada mes la pista de tennis d'un poliesportiu: Gener $100$, Febrer $70$, Març $97$, Abril $60$, Maig $62$, Juny $120$, Juliol $100$, Agost $78$, Setembre $66$, Octubre $126$, Novembre $69$, Desembre $90$.",
   "enunciat": "Com és el polígon de freqüències absolutes acumulades d'aquestes dades, mes a mes?",
   "opcions": [
    "Creixent al principi i decreixent al final, perquè el nombre de lloguers baixa alguns mesos",
    "Constant, perquè el total de lloguers de l'any no canvia",
    "Igual que el polígon de freqüències absolutes SIMPLES (sense acumular)",
    "Sempre creixent, des de $100$ (gener) fins a $1\\,038$ (desembre), perquè $F_i$ mai disminueix a mesura que avancen els mesos"
   ],
   "pistes": [
    "Pensa què representa $F_i$: la suma dels lloguers de tots els mesos fins aquell, inclòs.",
    "Una suma acumulada de valors positius, com creix a mesura que s'hi afegeixen més mesos?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJRdWUgbGEgZnJlccO8w6huY2lhIEQnVU4gTUVTIGJhaXhpIHJlc3BlY3RlIGEgbCdhbnRlcmlvciBubyBmYSBiYWl4YXIgbCdBQ1VNVUxBREE6ICRGX2kkIHN1bWEgc2VtcHJlIGVscyBsbG9ndWVycyBkZSB0b3RzIGVscyBtZXNvcyBhbnRlcmlvcnMsIGFpeMOtIHF1ZSBtYWkgcG90IGRpc21pbnVpci4iLCAiRWwgdG90YWwgZmluYWwgKCQxXFwsMDM4JCkgw6lzIGZpeCwgcGVyw7IgZWwgcG9sw61nb24gbW9zdHJhIGNvbSBlcyB2YSBBQ1VNVUxBTlQgbWVzIGEgbWVzLCBpIGFxdWVzdCByZWNvcnJlZ3V0IHPDrSBxdWUgcHVqYSBwcm9ncmVzc2l2YW1lbnQsIG5vIMOpcyB1bmEgbMOtbmlhIHBsYW5hIGRlcyBkZWwgcHJpbmNpcGkuIiwgIk5vIMOpcyBpZ3VhbDogZWwgcG9sw61nb24gZGUgZnJlccO8w6huY2llcyBzaW1wbGVzIHB1amEgaSBiYWl4YSBzZWd1aW50IGVscyBsbG9ndWVycyBkZSBjYWRhIG1lcyBwZXIgc2VwYXJhdCwgbWVudHJlIHF1ZSBsJ2FjdW11bGF0IG5vbcOpcyBwb3QgcHVqYXIgbyBxdWVkYXItc2UgaWd1YWwsIG1haSBiYWl4YXIuIiwgIiJdLCAiZXJyIjogWyJGX0FDVU1VTEFEQV9OT19DUkVJWEVOVCIsICJGX0FDVU1VTEFEQV9OT19DUkVJWEVOVCIsICJGUkVRX0FCU09MVVRBX0FDVU1VTEFEQV9DT05GT1NFUyIsICIiXSwgInJlcyI6IFsiQ29tIHF1ZSBjYWRhICRGX2kkIHN1bWEgZWxzIGxsb2d1ZXJzIGRlIHRvdHMgZWxzIG1lc29zIGFudGVyaW9ycyBtw6lzIGVsIHByb3BpLCBtYWkgcG90IGRpc21pbnVpcjogZWwgcG9sw61nb24gw6lzIHNlbXByZSBjcmVpeGVudCwgZGVzIGRlICRGKFxcdGV4dHtnZW5lcn0pPTEwMCQgZmlucyBhICRGKFxcdGV4dHtkZXNlbWJyZX0pPTFcXCwwMzgkIl19"
  },
  {
   "id": "260a",
   "ex": 260,
   "ap": "a",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la mitjana aritmètica de cada llista de dades. Si no dona exacta, deixa-la en forma de fracció.",
   "enunciat": "$3,\\;5,\\;5,\\;8,\\;9$",
   "opcions": [
    "$30$",
    "$\\dfrac{15}{2}$",
    "$6$",
    "$5$"
   ],
   "pistes": [
    "Suma totes les dades i divideix el resultat pel nombre de dades.",
    "Aquí hi ha $5$ dades i sumen $30$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3RhIMOpcyBsYSBzdW1hIGRlIHRvdGVzIGxlcyBkYWRlczogZW5jYXJhIGZhbHRhIGRpdmlkaXItbGEgcGVyICQ1JC4iLCAiSGFzIGRpdmlkaXQgcGVscyB2YWxvcnMgRElGRVJFTlRTIHF1ZSBoaSBoYSAoJDQkKSwgbm8gcGVyIGxlcyBkYWRlcyBxdWUgaGkgaGEgKCQ1JCkuIEEgbGEgbWl0amFuYSwgdW4gdmFsb3IgcmVwZXRpdCBjb21wdGEgY2FkYSB2ZWdhZGEgcXVlIGFwYXJlaXguIiwgIiIsICJBaXjDsiDDqXMgbGEgbWVkaWFuYSAoZWwgdmFsb3IgZGVsIG1pZyB1biBjb3Agb3JkZW5hZGVzKSwgbm8gbGEgbWl0amFuYS4gTGEgbWl0amFuYSBzdXJ0IGRlIHN1bWFyLWhvIHRvdCBpIGRpdmlkaXIgcGVyICQ1JC4iXSwgImVyciI6IFsiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiLCAiRElWSURJVF9QRVJfVkFMT1JTX0RJRkVSRU5UUyIsICIiLCAiTUVESUFOQV9QRVJfTUlUSkFOQSJdLCAicmVzIjogWyIkXFxiYXJ7eH09XFxkZnJhY3szKzUrNSs4Kzl9ezV9PVxcZGZyYWN7MzB9ezV9PTYkIl19"
  },
  {
   "id": "260b",
   "ex": 260,
   "ap": "b",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la mitjana aritmètica de cada llista de dades. Si no dona exacta, deixa-la en forma de fracció.",
   "enunciat": "$6,\\;2,\\;7,\\;4,\\;6$",
   "opcions": [
    "$6$",
    "$\\dfrac{25}{4}$",
    "$25$",
    "$5$"
   ],
   "pistes": [
    "Suma totes les dades i divideix el resultat pel nombre de dades.",
    "Aquí hi ha $5$ dades i sumen $25$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBaXjDsiDDqXMgbGEgbWVkaWFuYSAoZWwgdmFsb3IgZGVsIG1pZyB1biBjb3Agb3JkZW5hZGVzKSwgbm8gbGEgbWl0amFuYS4gTGEgbWl0amFuYSBzdXJ0IGRlIHN1bWFyLWhvIHRvdCBpIGRpdmlkaXIgcGVyICQ1JC4iLCAiSGFzIGRpdmlkaXQgcGVscyB2YWxvcnMgRElGRVJFTlRTIHF1ZSBoaSBoYSAoJDQkKSwgbm8gcGVyIGxlcyBkYWRlcyBxdWUgaGkgaGEgKCQ1JCkuIEEgbGEgbWl0amFuYSwgdW4gdmFsb3IgcmVwZXRpdCBjb21wdGEgY2FkYSB2ZWdhZGEgcXVlIGFwYXJlaXguIiwgIkFxdWVzdGEgw6lzIGxhIHN1bWEgZGUgdG90ZXMgbGVzIGRhZGVzOiBlbmNhcmEgZmFsdGEgZGl2aWRpci1sYSBwZXIgJDUkLiIsICIiXSwgImVyciI6IFsiTUVESUFOQV9QRVJfTUlUSkFOQSIsICJESVZJRElUX1BFUl9WQUxPUlNfRElGRVJFTlRTIiwgIlBBU19JTlRFUk1FRElfUEVSX1JFU1BPU1RBIiwgIiJdLCAicmVzIjogWyIkXFxiYXJ7eH09XFxkZnJhY3s2KzIrNys0KzZ9ezV9PVxcZGZyYWN7MjV9ezV9PTUkIl19"
  },
  {
   "id": "260c",
   "ex": 260,
   "ap": "c",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la mitjana aritmètica de cada llista de dades. Si no dona exacta, deixa-la en forma de fracció.",
   "enunciat": "$5,\\;7,\\;7,\\;9,\\;2,\\;6$",
   "opcions": [
    "$6$",
    "$36$",
    "$\\dfrac{36}{5}$",
    "$\\dfrac{13}{2}$"
   ],
   "pistes": [
    "Suma totes les dades i divideix el resultat pel nombre de dades.",
    "Aquí hi ha $6$ dades i sumen $36$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0YSDDqXMgbGEgc3VtYSBkZSB0b3RlcyBsZXMgZGFkZXM6IGVuY2FyYSBmYWx0YSBkaXZpZGlyLWxhIHBlciAkNiQuIiwgIkhhcyBkaXZpZGl0IHBlbHMgdmFsb3JzIERJRkVSRU5UUyBxdWUgaGkgaGEgKCQ1JCksIG5vIHBlciBsZXMgZGFkZXMgcXVlIGhpIGhhICgkNiQpLiBBIGxhIG1pdGphbmEsIHVuIHZhbG9yIHJlcGV0aXQgY29tcHRhIGNhZGEgdmVnYWRhIHF1ZSBhcGFyZWl4LiIsICJBaXjDsiDDqXMgbGEgbWVkaWFuYSAoZWwgdmFsb3IgZGVsIG1pZyB1biBjb3Agb3JkZW5hZGVzKSwgbm8gbGEgbWl0amFuYS4gTGEgbWl0amFuYSBzdXJ0IGRlIHN1bWFyLWhvIHRvdCBpIGRpdmlkaXIgcGVyICQ2JC4iXSwgImVyciI6IFsiIiwgIlBBU19JTlRFUk1FRElfUEVSX1JFU1BPU1RBIiwgIkRJVklESVRfUEVSX1ZBTE9SU19ESUZFUkVOVFMiLCAiTUVESUFOQV9QRVJfTUlUSkFOQSJdLCAicmVzIjogWyIkXFxiYXJ7eH09XFxkZnJhY3s1KzcrNys5KzIrNn17Nn09XFxkZnJhY3szNn17Nn09NiQiXX0="
  },
  {
   "id": "260d",
   "ex": 260,
   "ap": "d",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la mitjana aritmètica de cada llista de dades. Si no dona exacta, deixa-la en forma de fracció.",
   "enunciat": "$8,\\;3,\\;5,\\;5,\\;9$",
   "opcions": [
    "$\\dfrac{15}{2}$",
    "$30$",
    "$5$",
    "$6$"
   ],
   "pistes": [
    "Suma totes les dades i divideix el resultat pel nombre de dades.",
    "Aquí hi ha $5$ dades i sumen $30$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgZGl2aWRpdCBwZWxzIHZhbG9ycyBESUZFUkVOVFMgcXVlIGhpIGhhICgkNCQpLCBubyBwZXIgbGVzIGRhZGVzIHF1ZSBoaSBoYSAoJDUkKS4gQSBsYSBtaXRqYW5hLCB1biB2YWxvciByZXBldGl0IGNvbXB0YSBjYWRhIHZlZ2FkYSBxdWUgYXBhcmVpeC4iLCAiQXF1ZXN0YSDDqXMgbGEgc3VtYSBkZSB0b3RlcyBsZXMgZGFkZXM6IGVuY2FyYSBmYWx0YSBkaXZpZGlyLWxhIHBlciAkNSQuIiwgIkFpeMOyIMOpcyBsYSBtZWRpYW5hIChlbCB2YWxvciBkZWwgbWlnIHVuIGNvcCBvcmRlbmFkZXMpLCBubyBsYSBtaXRqYW5hLiBMYSBtaXRqYW5hIHN1cnQgZGUgc3VtYXItaG8gdG90IGkgZGl2aWRpciBwZXIgJDUkLiIsICIiXSwgImVyciI6IFsiRElWSURJVF9QRVJfVkFMT1JTX0RJRkVSRU5UUyIsICJQQVNfSU5URVJNRURJX1BFUl9SRVNQT1NUQSIsICJNRURJQU5BX1BFUl9NSVRKQU5BIiwgIiJdLCAicmVzIjogWyIkXFxiYXJ7eH09XFxkZnJhY3s4KzMrNSs1Kzl9ezV9PVxcZGZyYWN7MzB9ezV9PTYkIl19"
  },
  {
   "id": "261a",
   "ex": 261,
   "ap": "a",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la mediana de cada llista. Fixa't que les dades no venen ordenades.",
   "enunciat": "$3,\\;6,\\;19,\\;2,\\;10$",
   "opcions": [
    "$19$",
    "$17$",
    "$8$",
    "$6$"
   ],
   "pistes": [
    "Ordena primer les dades de menor a major.",
    "Ordenades queden $2,\\;3,\\;6,\\;10,\\;19$. Com que n'hi ha $5$, la mediana és el valor que ocupa el lloc $3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgYWdhZmF0IGVsIHZhbG9yIGRlbCBtaWcgZGUgbGEgbGxpc3RhIFRBTCBDT00gdmUuIExhIG1lZGlhbmEgZXMgYnVzY2Egc29icmUgbGVzIGRhZGVzIE9SREVOQURFUzogJDIsXFw7MyxcXDs2LFxcOzEwLFxcOzE5JC4iLCAiQWl4w7Igw6lzIGVsIHJlY29ycmVndXQgKGVsIG3DqXMgZ3JhbiBtZW55cyBlbCBtw6lzIHBldGl0KSwgcXVlIG1lc3VyYSBjb20gZCdlc3Rlc2VzIGVzdGFuIGxlcyBkYWRlcywgbm8gb24gw6lzIGVsIGNlbnRyZS4iLCAiQWl4w7Igw6lzIGxhIG1pdGphbmEsIG5vIGxhIG1lZGlhbmEuIExhIG1lZGlhbmEgbm8gZXMgY2FsY3VsYTogZXMgYnVzY2EsIHVuIGNvcCBsZXMgZGFkZXMgZXN0YW4gb3JkZW5hZGVzLiIsICIiXSwgImVyciI6IFsiTUVESUFOQV9TRU5TRV9PUkRFTkFSIiwgIlJBTkdfUEVSX01FRElBTkEiLCAiTUVESUFOQV9QRVJfTUlUSkFOQSIsICIiXSwgInJlcyI6IFsiT3JkZW5hZGVzOiAkMixcXDszLFxcOzYsXFw7MTAsXFw7MTkkIiwgIkhpIGhhICQ1JCBkYWRlcywgYWl4w60gcXVlIGxhIG1lZGlhbmEgw6lzIGVsIHZhbG9yIHF1ZSBvY3VwYSBlbCBsbG9jICQzJDogJDYkIl19"
  },
  {
   "id": "261b",
   "ex": 261,
   "ap": "b",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la mediana de cada llista. Fixa't que les dades no venen ordenades.",
   "enunciat": "$18,\\;4,\\;14,\\;12$",
   "opcions": [
    "$13$",
    "$12$",
    "$14$",
    "$9$"
   ],
   "pistes": [
    "Ordena primer les dades de menor a major.",
    "Ordenades queden $4,\\;12,\\;14,\\;18$. Com que n'hi ha $4$, la mediana és la mitjana dels que ocupen els llocs $2$ i $3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQWl4w7Igw6lzIGxhIG1pdGphbmEsIG5vIGxhIG1lZGlhbmEuIExhIG1lZGlhbmEgbm8gZXMgY2FsY3VsYTogZXMgYnVzY2EsIHVuIGNvcCBsZXMgZGFkZXMgZXN0YW4gb3JkZW5hZGVzLiIsICJBaXjDsiDDqXMgZWwgcmVjb3JyZWd1dCAoZWwgbcOpcyBncmFuIG1lbnlzIGVsIG3DqXMgcGV0aXQpLCBxdWUgbWVzdXJhIGNvbSBkJ2VzdGVzZXMgZXN0YW4gbGVzIGRhZGVzLCBubyBvbiDDqXMgZWwgY2VudHJlLiIsICJIYXMgYWdhZmF0IGVsIHZhbG9yIGRlbCBtaWcgZGUgbGEgbGxpc3RhIFRBTCBDT00gdmUuIExhIG1lZGlhbmEgZXMgYnVzY2Egc29icmUgbGVzIGRhZGVzIE9SREVOQURFUzogJDQsXFw7MTIsXFw7MTQsXFw7MTgkLiJdLCAiZXJyIjogWyIiLCAiTUVESUFOQV9QRVJfTUlUSkFOQSIsICJSQU5HX1BFUl9NRURJQU5BIiwgIk1FRElBTkFfU0VOU0VfT1JERU5BUiJdLCAicmVzIjogWyJPcmRlbmFkZXM6ICQ0LFxcOzEyLFxcOzE0LFxcOzE4JCIsICJIaSBoYSAkNCQgZGFkZXMsIGFpeMOtIHF1ZSBsYSBtZWRpYW5hIMOpcyBsYSBtaXRqYW5hIGRlbHMgcXVlIG9jdXBlbiBlbHMgbGxvY3MgJDIkIGkgJDMkOiAkMTMkIl19"
  },
  {
   "id": "261c",
   "ex": 261,
   "ap": "c",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la mediana de cada llista. Fixa't que les dades no venen ordenades.",
   "enunciat": "$14,\\;14,\\;15,\\;1,\\;8,\\;7,\\;18$",
   "opcions": [
    "$1$",
    "$14$",
    "$17$",
    "$11$"
   ],
   "pistes": [
    "Ordena primer les dades de menor a major.",
    "Ordenades queden $1,\\;7,\\;8,\\;14,\\;14,\\;15,\\;18$. Com que n'hi ha $7$, la mediana és el valor que ocupa el lloc $4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgYWdhZmF0IGVsIHZhbG9yIGRlbCBtaWcgZGUgbGEgbGxpc3RhIFRBTCBDT00gdmUuIExhIG1lZGlhbmEgZXMgYnVzY2Egc29icmUgbGVzIGRhZGVzIE9SREVOQURFUzogJDEsXFw7NyxcXDs4LFxcOzE0LFxcOzE0LFxcOzE1LFxcOzE4JC4iLCAiIiwgIkFpeMOyIMOpcyBlbCByZWNvcnJlZ3V0IChlbCBtw6lzIGdyYW4gbWVueXMgZWwgbcOpcyBwZXRpdCksIHF1ZSBtZXN1cmEgY29tIGQnZXN0ZXNlcyBlc3RhbiBsZXMgZGFkZXMsIG5vIG9uIMOpcyBlbCBjZW50cmUuIiwgIkFpeMOyIMOpcyBsYSBtaXRqYW5hLCBubyBsYSBtZWRpYW5hLiBMYSBtZWRpYW5hIG5vIGVzIGNhbGN1bGE6IGVzIGJ1c2NhLCB1biBjb3AgbGVzIGRhZGVzIGVzdGFuIG9yZGVuYWRlcy4iXSwgImVyciI6IFsiTUVESUFOQV9TRU5TRV9PUkRFTkFSIiwgIiIsICJSQU5HX1BFUl9NRURJQU5BIiwgIk1FRElBTkFfUEVSX01JVEpBTkEiXSwgInJlcyI6IFsiT3JkZW5hZGVzOiAkMSxcXDs3LFxcOzgsXFw7MTQsXFw7MTQsXFw7MTUsXFw7MTgkIiwgIkhpIGhhICQ3JCBkYWRlcywgYWl4w60gcXVlIGxhIG1lZGlhbmEgw6lzIGVsIHZhbG9yIHF1ZSBvY3VwYSBlbCBsbG9jICQ0JDogJDE0JCJdfQ=="
  },
  {
   "id": "261d",
   "ex": 261,
   "ap": "d",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la mediana de cada llista. Fixa't que les dades no venen ordenades.",
   "enunciat": "$9,\\;5,\\;17,\\;7,\\;2,\\;20$",
   "opcions": [
    "$12$",
    "$18$",
    "$10$",
    "$8$"
   ],
   "pistes": [
    "Ordena primer les dades de menor a major.",
    "Ordenades queden $2,\\;5,\\;7,\\;9,\\;17,\\;20$. Com que n'hi ha $6$, la mediana és la mitjana dels que ocupen els llocs $3$ i $4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgYWdhZmF0IGVsIHZhbG9yIGRlbCBtaWcgZGUgbGEgbGxpc3RhIFRBTCBDT00gdmUuIExhIG1lZGlhbmEgZXMgYnVzY2Egc29icmUgbGVzIGRhZGVzIE9SREVOQURFUzogJDIsXFw7NSxcXDs3LFxcOzksXFw7MTcsXFw7MjAkLiIsICJBaXjDsiDDqXMgZWwgcmVjb3JyZWd1dCAoZWwgbcOpcyBncmFuIG1lbnlzIGVsIG3DqXMgcGV0aXQpLCBxdWUgbWVzdXJhIGNvbSBkJ2VzdGVzZXMgZXN0YW4gbGVzIGRhZGVzLCBubyBvbiDDqXMgZWwgY2VudHJlLiIsICJBaXjDsiDDqXMgbGEgbWl0amFuYSwgbm8gbGEgbWVkaWFuYS4gTGEgbWVkaWFuYSBubyBlcyBjYWxjdWxhOiBlcyBidXNjYSwgdW4gY29wIGxlcyBkYWRlcyBlc3RhbiBvcmRlbmFkZXMuIiwgIiJdLCAiZXJyIjogWyJNRURJQU5BX1NFTlNFX09SREVOQVIiLCAiUkFOR19QRVJfTUVESUFOQSIsICJNRURJQU5BX1BFUl9NSVRKQU5BIiwgIiJdLCAicmVzIjogWyJPcmRlbmFkZXM6ICQyLFxcOzUsXFw7NyxcXDs5LFxcOzE3LFxcOzIwJCIsICJIaSBoYSAkNiQgZGFkZXMsIGFpeMOtIHF1ZSBsYSBtZWRpYW5hIMOpcyBsYSBtaXRqYW5hIGRlbHMgcXVlIG9jdXBlbiBlbHMgbGxvY3MgJDMkIGkgJDQkOiAkOCQiXX0="
  },
  {
   "id": "262a",
   "ex": 262,
   "ap": "a",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Quina és la moda de cada llista?",
   "enunciat": "$8,\\;4,\\;4,\\;5,\\;4,\\;5,\\;9$",
   "opcions": [
    "$9$",
    "$4$",
    "$3$",
    "$5$"
   ],
   "pistes": [
    "Compta quantes vegades apareix cada valor.",
    "Recompte: $4$ surt 3 cops, $5$ surt 2 cops, $8$ surt 1 cop, $9$ surt 1 cop."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBtw6lzIGdyYW4gZGUgdG90cyBubyB0w6kgcmVzIGEgdmV1cmUgYW1iIGxhIG1vZGE6IGVsIHF1ZSBjb21wdGEgw6lzIHF1YW50ZXMgdmVnYWRlcyBzdXJ0IGNhZGEgdmFsb3IsIG5vIGNvbSBkZSBncmFuIMOpcy4iLCAiIiwgIkhhcyBkb25hdCBxdWFudGVzIHZlZ2FkZXMgZXMgcmVwZXRlaXgsIG5vIFFVSU4gdmFsb3IgZXMgcmVwZXRlaXguIExhIG1vZGEgw6lzIGxhIGRhZGEsIG5vIGVsIHNldSByZWNvbXB0ZS4iLCAiQWl4w7Igw6lzIGxhIG1lZGlhbmEgKGVsIHZhbG9yIGNlbnRyYWwgdW4gY29wIG9yZGVuYWRlcykuIExhIG1vZGEgw6lzIGVsIHZhbG9yIHF1ZSBzdXJ0IG3DqXMgdmVnYWRlcywgZXN0aWd1aSBvbiBlc3RpZ3VpLiJdLCAiZXJyIjogWyJFTF9NRVNfR1JBTiIsICIiLCAiTU9EQV9QRVJfRlJFUVVFTkNJQSIsICJNRURJQU5BX1BFUl9NT0RBIl0sICJyZXMiOiBbIlJlY29tcHRlOiAkNFxcdG8zJCwgJDVcXHRvMiQsICQ4XFx0bzEkLCAkOVxcdG8xJCIsICJMYSBmcmVxw7zDqG5jaWEgbcOgeGltYSDDqXMgJDMkLCBpIGxpIGNvcnJlc3BvbiBlbCB2YWxvciAkNCQiXX0="
  },
  {
   "id": "262b",
   "ex": 262,
   "ap": "b",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Quina és la moda de cada llista?",
   "enunciat": "$4,\\;4,\\;6,\\;6,\\;2,\\;9$",
   "opcions": [
    "$9$",
    "$4$ i $6$",
    "$2$",
    "$5$"
   ],
   "pistes": [
    "Compta quantes vegades apareix cada valor.",
    "Recompte: $2$ surt 1 cop, $4$ surt 2 cops, $6$ surt 2 cops, $9$ surt 1 cop."
   ],
   "nota": "Una distribució pot tenir més d'una moda, o no tenir-ne cap. No és cap error del càlcul: és una propietat de les dades.",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBtw6lzIGdyYW4gZGUgdG90cyBubyB0w6kgcmVzIGEgdmV1cmUgYW1iIGxhIG1vZGE6IGVsIHF1ZSBjb21wdGEgw6lzIHF1YW50ZXMgdmVnYWRlcyBzdXJ0IGNhZGEgdmFsb3IsIG5vIGNvbSBkZSBncmFuIMOpcy4iLCAiIiwgIkhhcyBkb25hdCBxdWFudGVzIHZlZ2FkZXMgZXMgcmVwZXRlaXgsIG5vIFFVSU4gdmFsb3IgZXMgcmVwZXRlaXguIExhIG1vZGEgw6lzIGxhIGRhZGEsIG5vIGVsIHNldSByZWNvbXB0ZS4iLCAiQWl4w7Igw6lzIGxhIG1lZGlhbmEgKGVsIHZhbG9yIGNlbnRyYWwgdW4gY29wIG9yZGVuYWRlcykuIExhIG1vZGEgw6lzIGVsIHZhbG9yIHF1ZSBzdXJ0IG3DqXMgdmVnYWRlcywgZXN0aWd1aSBvbiBlc3RpZ3VpLiJdLCAiZXJyIjogWyJFTF9NRVNfR1JBTiIsICIiLCAiTU9EQV9QRVJfRlJFUVVFTkNJQSIsICJNRURJQU5BX1BFUl9NT0RBIl0sICJyZXMiOiBbIlJlY29tcHRlOiAkMlxcdG8xJCwgJDRcXHRvMiQsICQ2XFx0bzIkLCAkOVxcdG8xJCIsICJIaSBoYSBkb3MgdmFsb3JzIGFtYiBsYSBmcmVxw7zDqG5jaWEgbcOgeGltYSAoJDIkKTogbGEgZGlzdHJpYnVjacOzIMOpcyBiaW1vZGFsIl19"
  },
  {
   "id": "262c",
   "ex": 262,
   "ap": "c",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Quina és la moda de cada llista?",
   "enunciat": "$1,\\;2,\\;3,\\;4,\\;5$",
   "opcions": [
    "No en té: totes les dades surten una vegada",
    "$3$",
    "$1$",
    "$5$"
   ],
   "pistes": [
    "Compta quantes vegades apareix cada valor.",
    "Recompte: $1$ surt 1 cop, $2$ surt 1 cop, $3$ surt 1 cop, $4$ surt 1 cop, $5$ surt 1 cop."
   ],
   "nota": "Una distribució pot tenir més d'una moda, o no tenir-ne cap. No és cap error del càlcul: és una propietat de les dades.",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQWl4w7Igw6lzIGxhIG1lZGlhbmEgKGVsIHZhbG9yIGNlbnRyYWwgdW4gY29wIG9yZGVuYWRlcykuIExhIG1vZGEgw6lzIGVsIHZhbG9yIHF1ZSBzdXJ0IG3DqXMgdmVnYWRlcywgZXN0aWd1aSBvbiBlc3RpZ3VpLiIsICJIYXMgZG9uYXQgcXVhbnRlcyB2ZWdhZGVzIGVzIHJlcGV0ZWl4LCBubyBRVUlOIHZhbG9yIGVzIHJlcGV0ZWl4LiBMYSBtb2RhIMOpcyBsYSBkYWRhLCBubyBlbCBzZXUgcmVjb21wdGUuIiwgIkVsIG3DqXMgZ3JhbiBkZSB0b3RzIG5vIHTDqSByZXMgYSB2ZXVyZSBhbWIgbGEgbW9kYTogZWwgcXVlIGNvbXB0YSDDqXMgcXVhbnRlcyB2ZWdhZGVzIHN1cnQgY2FkYSB2YWxvciwgbm8gY29tIGRlIGdyYW4gw6lzLiJdLCAiZXJyIjogWyIiLCAiTUVESUFOQV9QRVJfTU9EQSIsICJNT0RBX1BFUl9GUkVRVUVOQ0lBIiwgIkVMX01FU19HUkFOIl0sICJyZXMiOiBbIlJlY29tcHRlOiAkMVxcdG8xJCwgJDJcXHRvMSQsICQzXFx0bzEkLCAkNFxcdG8xJCwgJDVcXHRvMSQiLCAiQ2FwIHZhbG9yIG5vIGRlc3RhY2E6IGxhIGRpc3RyaWJ1Y2nDsyDDqXMgYW1vZGFsIl19"
  },
  {
   "id": "262d",
   "ex": 262,
   "ap": "d",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Quina és la moda de cada llista?",
   "enunciat": "$9,\\;9,\\;2,\\;5,\\;2,\\;2,\\;7$",
   "opcions": [
    "$2$",
    "$5$",
    "$3$",
    "$9$"
   ],
   "pistes": [
    "Compta quantes vegades apareix cada valor.",
    "Recompte: $2$ surt 3 cops, $5$ surt 1 cop, $7$ surt 1 cop, $9$ surt 2 cops."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQWl4w7Igw6lzIGxhIG1lZGlhbmEgKGVsIHZhbG9yIGNlbnRyYWwgdW4gY29wIG9yZGVuYWRlcykuIExhIG1vZGEgw6lzIGVsIHZhbG9yIHF1ZSBzdXJ0IG3DqXMgdmVnYWRlcywgZXN0aWd1aSBvbiBlc3RpZ3VpLiIsICJIYXMgZG9uYXQgcXVhbnRlcyB2ZWdhZGVzIGVzIHJlcGV0ZWl4LCBubyBRVUlOIHZhbG9yIGVzIHJlcGV0ZWl4LiBMYSBtb2RhIMOpcyBsYSBkYWRhLCBubyBlbCBzZXUgcmVjb21wdGUuIiwgIkVsIG3DqXMgZ3JhbiBkZSB0b3RzIG5vIHTDqSByZXMgYSB2ZXVyZSBhbWIgbGEgbW9kYTogZWwgcXVlIGNvbXB0YSDDqXMgcXVhbnRlcyB2ZWdhZGVzIHN1cnQgY2FkYSB2YWxvciwgbm8gY29tIGRlIGdyYW4gw6lzLiJdLCAiZXJyIjogWyIiLCAiTUVESUFOQV9QRVJfTU9EQSIsICJNT0RBX1BFUl9GUkVRVUVOQ0lBIiwgIkVMX01FU19HUkFOIl0sICJyZXMiOiBbIlJlY29tcHRlOiAkMlxcdG8zJCwgJDVcXHRvMSQsICQ3XFx0bzEkLCAkOVxcdG8yJCIsICJMYSBmcmVxw7zDqG5jaWEgbcOgeGltYSDDqXMgJDMkLCBpIGxpIGNvcnJlc3BvbiBlbCB2YWxvciAkMiQiXX0="
  },
  {
   "id": "263a",
   "ex": 263,
   "ap": "a",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Torna a l'exercici 222, el dels viatges que ha fet cada alumne. La taula de freqüències és: $x_i=1$ amb $f_i=1$, $x_i=2$ amb $f_i=3$, $x_i=3$ amb $f_i=7$, $x_i=4$ amb $f_i=4$, $x_i=5$ amb $f_i=3$, $x_i=6$ amb $f_i=2$. Calcula, a partir de la taula:",
   "enunciat": "La mitjana de viatges per alumne.",
   "opcions": [
    "$3$",
    "$71$",
    "$\\dfrac{7}{2}$",
    "$\\dfrac{71}{20}=3{,}55$"
   ],
   "pistes": [
    "Amb una taula de freqüències, la mitjana és $\\bar{x}=\\dfrac{\\sum x_i f_i}{N}$.",
    "Multiplica cada valor per la seva freqüència, suma-ho tot i divideix entre $N=20$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBaXjDsiDDqXMgbGEgbWVkaWFuYS4gTGEgbWl0amFuYSBzdXJ0IGRlICRcXGRmcmFje1xcc3VtIHhfaSBmX2l9e059JC4iLCAiQXF1ZXN0YSDDqXMgbGEgc3VtYSAkXFxzdW0geF9pIGZfaSQ6IGVuY2FyYSBmYWx0YSBkaXZpZGlyLWxhIGVudHJlICROPTIwJC4iLCAiSGFzIGZldCBsYSBtaXRqYW5hIGRlbHMgVkFMT1JTIGRpZmVyZW50cyAoJDEsMiwzLDQsNSw2JCkgc2Vuc2UgdGVuaXIgZW4gY29tcHRlIHF1YW50ZXMgdmVnYWRlcyBzdXJ0IGNhZGFzY3VuLiBDYWRhIHZhbG9yIHMnaGEgZGUgbXVsdGlwbGljYXIgcGVyIGxhIHNldmEgZnJlccO8w6huY2lhLiIsICIiXSwgImVyciI6IFsiTUVESUFOQV9QRVJfTUlUSkFOQSIsICJQQVNfSU5URVJNRURJX1BFUl9SRVNQT1NUQSIsICJGUkVRVUVOQ0lBX05PX1BPTkRFUkFEQSIsICIiXSwgInJlcyI6IFsiJFxcc3VtIHhfaSBmX2k9MVxcY2RvdDErMlxcY2RvdDMrM1xcY2RvdDcrNFxcY2RvdDQrNVxcY2RvdDMrNlxcY2RvdDI9NzEkIiwgIiRcXGJhcnt4fT1cXGRmcmFjezcxfXsyMH09XFxkZnJhY3s3MX17MjB9PTN7LH01NSQgdmlhdGdlcyJdfQ=="
  },
  {
   "id": "263b",
   "ex": 263,
   "ap": "b",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Torna a l'exercici 222, el dels viatges que ha fet cada alumne. La taula de freqüències és: $x_i=1$ amb $f_i=1$, $x_i=2$ amb $f_i=3$, $x_i=3$ amb $f_i=7$, $x_i=4$ amb $f_i=4$, $x_i=5$ amb $f_i=3$, $x_i=6$ amb $f_i=2$. Calcula, a partir de la taula:",
   "enunciat": "La mediana.",
   "opcions": [
    "$\\dfrac{71}{20}$",
    "$7$",
    "$3$",
    "$4$"
   ],
   "pistes": [
    "Amb $N=20$ (parell), la mediana és la mitjana de les dades que ocupen els llocs $10$ i $11$.",
    "Fes servir les freqüències acumulades per veure dins de quin valor cauen aquests dos llocs: $F(1)=1$, $F(2)=4$, $F(3)=11$, $F(4)=15$, $F(5)=18$, $F(6)=20$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBaXjDsiDDqXMgbGEgbWl0amFuYS4gTGEgbWVkaWFuYSDDqXMgZWwgdmFsb3IgcXVlIGRlaXhhIGxhIG1laXRhdCBkZSBsZXMgZGFkZXMgYSBjYWRhIGJhbmRhLiIsICJBcXVlc3Qgw6lzIGVsIG5vbWJyZSBkZSB2ZWdhZGVzIHF1ZSBlcyByZXBldGVpeCBsYSBtb2RhLCBubyBjYXAgZGFkYS4iLCAiIiwgIkFtYiAkTj0yMCQsIGxhIG1lZGlhbmEgw6lzIGxhIG1pdGphbmEgZGUgbGVzIGRhZGVzIHF1ZSBvY3VwZW4gZWxzIGxsb2NzICQxMCQgaSAkMTEkLiBNaXJhIGxlcyBmcmVxw7zDqG5jaWVzIGFjdW11bGFkZXM6IHRvdGVzIGR1ZXMgY2F1ZW4gZGlucyBkZWwgdmFsb3IgJDMkLCBubyBkZWwgJDQkLiJdLCAiZXJyIjogWyJNRURJQU5BX1BFUl9NSVRKQU5BIiwgIk1PREFfUEVSX0ZSRVFVRU5DSUEiLCAiIiwgIkFDVU1VTEFEQV9NQUxfTExFR0lEQSJdLCAicmVzIjogWyJBY3VtdWxhZGVzOiAkRigxKT0xJCwgJEYoMik9NCQsICRGKDMpPTExJCwgJEYoNCk9MTUkLCAkRig1KT0xOCQsICRGKDYpPTIwJCIsICJFbHMgbGxvY3MgJDEwJCBpICQxMSQgY2F1ZW4gdG90cyBkb3MgZGlucyBkZWwgdmFsb3IgJDMkLCBhaXjDrSBxdWUgbGEgbWVkaWFuYSDDqXMgJDMkIl19"
  },
  {
   "id": "263c",
   "ex": 263,
   "ap": "c",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Torna a l'exercici 222, el dels viatges que ha fet cada alumne. La taula de freqüències és: $x_i=1$ amb $f_i=1$, $x_i=2$ amb $f_i=3$, $x_i=3$ amb $f_i=7$, $x_i=4$ amb $f_i=4$, $x_i=5$ amb $f_i=3$, $x_i=6$ amb $f_i=2$. Calcula, a partir de la taula:",
   "enunciat": "La moda.",
   "opcions": [
    "$7$",
    "$\\dfrac{71}{20}$",
    "$3$",
    "$6$"
   ],
   "pistes": [
    "Busca la freqüència més alta de la taula.",
    "La freqüència màxima és $7$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgZG9uYXQgbGEgZnJlccO8w6huY2lhIG3DoHhpbWEgKCQ3JCBhbHVtbmVzKSwgbm8gZWwgdmFsb3IgcXVlIGxhIHTDqS4iLCAiQXF1ZXN0YSDDqXMgbGEgbWl0amFuYS4gTGEgbW9kYSBoYSBkZSBzZXIgdW4gZGVscyB2YWxvcnMgZGUgbGEgdGF1bGEuIiwgIiIsICJFbCAkNiQgw6lzIGVsIG5vbWJyZSBkZSB2aWF0Z2VzIG3DqXMgYWx0LCBwZXLDsiBub23DqXMgbCdoYW4gZmV0ICQyJCBhbHVtbmVzLiBMYSBtb2RhIMOpcyBlbCB2YWxvciBNw4lTIFJFUEVUSVQsIG5vIGVsIG3DqXMgZ3Jhbi4iXSwgImVyciI6IFsiTU9EQV9QRVJfRlJFUVVFTkNJQSIsICJNRURJQU5BX1BFUl9NT0RBIiwgIiIsICJFTF9NRVNfR1JBTiJdLCAicmVzIjogWyJMYSBmcmVxw7zDqG5jaWEgbcOpcyBhbHRhIMOpcyAkZl9pPTckLCBpIGxpIGNvcnJlc3BvbiBlbCB2YWxvciAkeF9pPTMkIl19"
  },
  {
   "id": "264",
   "ex": 264,
   "ap": "",
   "bloc": "centralitzacio",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Una sabateria ha venut aquestes talles de calçat en una setmana: 37,\\;37,\\;37,\\;37,\\;37,\\;38,\\;38,\\;38,\\;38,\\;38,\\;38,\\;38,\\;38,\\;39,\\;40,\\;40,\\;40,\\;41,\\;42,\\;43. El botiguer ha de decidir de quina talla encarrega més parells. Quina mesura l'ajuda a decidir-ho, i quin valor surt?",
   "opcions": [
    "El RECORREGUT: $6$ talles.",
    "La MEDIANA: la talla $38$.",
    "La MITJANA: la talla $38{,}7$.",
    "La MODA: la talla $38$, que és la que ha venut més vegades ($8$ parells)."
   ],
   "pistes": [
    "Pensa què vol saber el botiguer: no quin és el valor central, sinó quin és el que es repeteix més.",
    "Compta quantes vegades apareix cada talla."
   ],
   "nota": "Aquest exercici no demana calcular sinó TRIAR. Les tres mesures es poden calcular sempre; la gràcia és saber quina respon la pregunta que t'han fet.",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCByZWNvcnJlZ3V0IGRpdSBxdWFudGVzIHRhbGxlcyBkaWZlcmVudHMgYWJhc3RhIGxhIHZlbmRhLCBubyBxdWluYSBzJ2hhIGRlIHJlcG9zYXIuIiwgIkxhIG1lZGlhbmEgcGFydGVpeCBsZXMgdmVuZGVzIGVuIGR1ZXMgbWVpdGF0cywgcGVyw7Igbm8gZGl1IHF1aW5hIHRhbGxhIHMnaGEgdmVudXQgbcOpcy4gQXF1w60gY29pbmNpZGVpeCBxdWUgdmFsICQzOCQsIHBlcsOyIGhpIGFycmliYSBwZXIgdW4gbW90aXUgcXVlIG5vIMOpcyBlbCBxdWUgZXMgcHJlZ3VudGEuIiwgIkxhIG1pdGphbmEgdmFsICQzOHssfTckLCBpIGxlcyB0YWxsZXMgc8OzbiBub21icmVzIHNlbmNlcnM6IG5vIGV4aXN0ZWl4IGFxdWVzdGEgdGFsbGEgaSBubyBlbiBwb3QgZW5jYXJyZWdhciBjYXAgcGFyZWxsLiBRdWFuIGxlcyBkYWRlcyBzw7NuIGNhdGVnb3JpZXMgbyB2YWxvcnMgc2VuY2VycyBxdWUgbm8gYWRtZXRlbiBtaXRnZXMsIGxhIG1lc3VyYSBxdWUgcmVzcG9uIMOpcyBsYSBtb2RhLiIsICIiXSwgImVyciI6IFsiTUVTVVJBX01BTF9UUklBREEiLCAiTUVTVVJBX01BTF9UUklBREEiLCAiTUVTVVJBX01BTF9UUklBREEiLCAiIl0sICJyZXMiOiBbIlJlY29tcHRlOiAkMzdcXHRvNSQsICQzOFxcdG84JCwgJDM5XFx0bzEkLCAkNDBcXHRvMyQsICQ0MVxcdG8xJCwgJDQyXFx0bzEkLCAkNDNcXHRvMSQiLCAiTGEgdGFsbGEgbcOpcyB2ZW51ZGEgw6lzIGxhICQzOCQsIGFtYiAkOCQgcGFyZWxsczogYXF1ZXN0YSDDqXMgbGEgbW9kYSIsICJMYSBtaXRqYW5hICgkMzh7LH03JCkgbm8gc2VydmVpeCBhcXXDrSBwZXJxdcOoIG5vIGhpIGhhIHRhbGxlcyBkZWNpbWFscyJdfQ=="
  },
  {
   "id": "265a",
   "ex": 265,
   "ap": "a",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "A matemàtiques, la nota del trimestre surt de tres parts amb pesos diferents. Calcula la nota final.",
   "enunciat": "proves $6$ (pes $50\\,\\%$), feina $8$ (pes $30\\,\\%$), actitud $9$ (pes $20\\,\\%$).",
   "opcions": [
    "$7{,}20$",
    "$21{,}60$",
    "$11{,}50$",
    "$7{,}67$"
   ],
   "pistes": [
    "Passa cada pes a decimal ($50\\,\\%\\to0{,}5$) i multiplica'l per la seva nota.",
    "Suma els tres productes. Com que els pesos sumen $100\\,\\%$, el resultat ja és la nota final."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQW1iIHBlc29zIHF1ZSBzdW1lbiAkMTAwXFwsXFwlJSQsIGxhIHN1bWEgcG9uZGVyYWRhIEpBIMOpcyBsYSBub3RhOiBubyBzJ2hhIGRlIHRvcm5hciBhIGRpdmlkaXIgbmkgbXVsdGlwbGljYXIgcGVyIHJlcy4iLCAiU2VtYmxhIHF1ZSBoYXMgYXBsaWNhdCBlbCBtYXRlaXggcGVzIGEgdG90ZXMgbGVzIG5vdGVzLiBDYWRhIG5vdGEgdmEgYW1iIGVsIHNldS4iLCAiSGFzIGZldCBsYSBtaXRqYW5hIGRlIGxlcyB0cmVzIG5vdGVzIGNvbSBzaSB0b3RlcyB2YWxndWVzc2luIGVsIG1hdGVpeC4gQ2FkYSBwYXJ0IHTDqSBlbCBzZXUgcGVzOiBsYSBkZSAkNTBcXCxcXCUkIGNvbXB0YSBtb2x0IG3DqXMgcXVlIGxhIGRlICQyMFxcLFxcJSQuIl0sICJlcnIiOiBbIiIsICJESVZJU0lPX1NPQlJFUkEiLCAiUEVTX01BTF9BUExJQ0FUIiwgIlBFU19JR05PUkFUIl0sICJyZXMiOiBbIiQ2XFxjZG90MHssfTUwKzhcXGNkb3Qweyx9MzArOVxcY2RvdDB7LH0yMD03eyx9MjAkIl19"
  },
  {
   "id": "265b",
   "ex": 265,
   "ap": "b",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "A matemàtiques, la nota del trimestre surt de tres parts amb pesos diferents. Calcula la nota final.",
   "enunciat": "proves $4$ (pes $60\\,\\%$), feina $7$ (pes $25\\,\\%$), actitud $8$ (pes $15\\,\\%$).",
   "opcions": [
    "$16{,}05$",
    "$6{,}33$",
    "$5{,}35$",
    "$11{,}40$"
   ],
   "pistes": [
    "Passa cada pes a decimal ($50\\,\\%\\to0{,}5$) i multiplica'l per la seva nota.",
    "Suma els tres productes. Com que els pesos sumen $100\\,\\%$, el resultat ja és la nota final."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBbWIgcGVzb3MgcXVlIHN1bWVuICQxMDBcXCxcXCUlJCwgbGEgc3VtYSBwb25kZXJhZGEgSkEgw6lzIGxhIG5vdGE6IG5vIHMnaGEgZGUgdG9ybmFyIGEgZGl2aWRpciBuaSBtdWx0aXBsaWNhciBwZXIgcmVzLiIsICJIYXMgZmV0IGxhIG1pdGphbmEgZGUgbGVzIHRyZXMgbm90ZXMgY29tIHNpIHRvdGVzIHZhbGd1ZXNzaW4gZWwgbWF0ZWl4LiBDYWRhIHBhcnQgdMOpIGVsIHNldSBwZXM6IGxhIGRlICQ2MFxcLFxcJSQgY29tcHRhIG1vbHQgbcOpcyBxdWUgbGEgZGUgJDE1XFwsXFwlJC4iLCAiIiwgIlNlbWJsYSBxdWUgaGFzIGFwbGljYXQgZWwgbWF0ZWl4IHBlcyBhIHRvdGVzIGxlcyBub3Rlcy4gQ2FkYSBub3RhIHZhIGFtYiBlbCBzZXUuIl0sICJlcnIiOiBbIkRJVklTSU9fU09CUkVSQSIsICJQRVNfSUdOT1JBVCIsICIiLCAiUEVTX01BTF9BUExJQ0FUIl0sICJyZXMiOiBbIiQ0XFxjZG90MHssfTYwKzdcXGNkb3Qweyx9MjUrOFxcY2RvdDB7LH0xNT01eyx9MzUkIl19"
  },
  {
   "id": "266a",
   "ex": 266,
   "ap": "a",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Un grup de $5$ amics compara quants llibres ha llegit l'últim any: $3,\\;4,\\;5,\\;6,\\;7$. S'hi afegeix un sisè amic que n'ha llegit $60$.",
   "enunciat": "Què li passa a la mitjana?",
   "opcions": [
    "Puja de $5$ a $60$.",
    "Es queda pràcticament igual.",
    "Puja de $5$ a $14{,}17$: gairebé es duplica.",
    "Baixa, perquè ara hi ha més dades."
   ],
   "pistes": [
    "Calcula la mitjana abans i després d'afegir el $60$.",
    "Abans: $\\dfrac{25}{5}$. Després: $\\dfrac{85}{6}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCAkNjAkIMOpcyBsYSBkYWRhIG5vdmEsIG5vIGxhIG1pdGphbmEgbm92YS4gTGEgbWl0amFuYSBjb250aW51YSBzZW50IHVuIHZhbG9yIGVudHJlbWlnIGRlIHRvdGVzIGxlcyBkYWRlcy4iLCAiTGEgbWl0amFuYSBzw60gcXVlIHNlJ24gcmVzc2VudCwgaSBtb2x0OiBwYXNzYSBkZSAkNSQgYSAkMTR7LH0xNyQuIENvbSBxdWUgc3VydCBkZSBzdW1hci1obyB0b3QsIHVuYSBkYWRhIG1vbHQgZ3JhbiBsJ2VzdGlyYSBjYXAgYW11bnQuIiwgIiIsICJUZW5pciBtw6lzIGRhZGVzIG5vIGZhIGJhaXhhciBsYSBtaXRqYW5hIHBlciBzaSBzb2w6IGRlcMOobiBkZSBzaSBsYSBkYWRhIG5vdmEgw6lzIG3DqXMgZ3JhbiBvIG3DqXMgcGV0aXRhIHF1ZSBsYSBtaXRqYW5hIHF1ZSBoaSBoYXZpYS4iXSwgImVyciI6IFsiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiLCAiRVhUUkVNX1NFTlNFX0VGRUNURSIsICIiLCAiVkVSRURJQ1RFX0lOVkVSVElUIl0sICJyZXMiOiBbIkFiYW5zOiAkXFxiYXJ7eH09XFxkZnJhY3szKzQrNSs2Kzd9ezV9PVxcZGZyYWN7MjV9ezV9PTUkIiwgIkRlc3Byw6lzOiAkXFxiYXJ7eH09XFxkZnJhY3syNSs2MH17Nn09XFxkZnJhY3s4NX17Nn1cXGFwcHJveDE0eyx9MTckIl19"
  },
  {
   "id": "266b",
   "ex": 266,
   "ap": "b",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Un grup de $5$ amics compara quants llibres ha llegit l'últim any: $3,\\;4,\\;5,\\;6,\\;7$. S'hi afegeix un sisè amic que n'ha llegit $60$.",
   "enunciat": "I què li passa a la mediana?",
   "opcions": [
    "Baixa a $4$.",
    "Es queda exactament a $5$.",
    "Puja tant com la mitjana.",
    "Puja molt poc: de $5$ a $\\dfrac{11}{2}$."
   ],
   "pistes": [
    "Ordena les $6$ dades i busca el centre.",
    "Amb $6$ dades, la mediana és la mitjana de les que ocupen els llocs $3$ i $4$."
   ],
   "nota": "Aquesta diferència és el motiu pel qual els sous o els preus dels pisos es donen sovint amb la mediana i no amb la mitjana: quatre valors molt alts poden desplaçar la mitjana i fer-la poc representativa del que li passa a la majoria.",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBZmVnaXIgdW5hIGRhZGEgcGVyIGRhbXVudCBkZSB0b3RlcyBkZXNwbGHDp2EgZWwgY2VudHJlIGNhcCBhbXVudCwgbm8gY2FwIGF2YWxsLiIsICJHYWlyZWLDqTogcGFzc2FyIGRlICQ1JCBhICQ2JCBkYWRlcyBjYW52aWEgY29tIGVzIGJ1c2NhIGVsIGNlbnRyZS4gQW1iICQ2JCBkYWRlcyBjYWwgZmVyIGxhIG1pdGphbmEgZGUgbGVzIGR1ZXMgY2VudHJhbHMsICQ1JCBpICQ2JC4iLCAiTGEgbWVkaWFuYSBub23DqXMgbWlyYSBxdWluIHZhbG9yIHF1ZWRhIGFsIG1pZzogcXVlIGwnw7psdGltIHNpZ3VpICQ4JCBvICQ2MCQgbm8gbGEgbW91LiBQZXIgYWl4w7IgZXMgZGl1IHF1ZSDDqXMgUkVTSVNURU5UIGFscyB2YWxvcnMgZXh0cmVtcy4iLCAiIl0sICJlcnIiOiBbIlZFUkVESUNURV9JTlZFUlRJVCIsICJNRURJQU5BX1NFTlNFX09SREVOQVIiLCAiRVhUUkVNX1NFTlNFX0VGRUNURSIsICIiXSwgInJlcyI6IFsiT3JkZW5hZGVzOiAkMyxcXDs0LFxcOzUsXFw7NixcXDs3LFxcOzYwJCIsICJNZWRpYW5hICQ9XFxkZnJhY3s1KzZ9ezJ9PVxcZGZyYWN7MTF9ezJ9JCIsICJMYSBtaXRqYW5hIHMnaGEgbW9ndXQgJDl7LH0xNyQgcHVudHMgaSBsYSBtZWRpYW5hIG5vbcOpcyAkMHssfTUkOiBxdWFuIGhpIGhhIHZhbG9ycyBleHRyZW1zLCBsYSBtZWRpYW5hIGRlc2NyaXUgbWlsbG9yIGVsIGdydXAiXX0="
  },
  {
   "id": "267a",
   "ex": 267,
   "ap": "a",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Falta una dada. Esbrina-la a partir de la mitjana.",
   "enunciat": "La mitjana de $5$ dades és $7$. En coneixem $4$: $5,\\;6,\\;9,\\;4$. Quina és l'altra?",
   "opcions": [
    "$7$",
    "$11$",
    "$4$",
    "$35$"
   ],
   "pistes": [
    "Si la mitjana de $5$ dades és $7$, la suma de totes ha de ser $5\\cdot7$.",
    "Resta a aquesta suma el que ja sumen les dades conegudes."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3RhIMOpcyBsYSBtaXRqYW5hLCBxdWUgamEgdGUgbGEgZG9uYXZlbi4gTGEgZGFkYSBxdWUgZmFsdGEgbm8gdMOpIHBlciBxdcOoIGNvaW5jaWRpci1oaS4iLCAiIiwgIkhhcyBtdWx0aXBsaWNhdCBsYSBtaXRqYW5hIHBlciBsZXMgZGFkZXMgcXVlIGphIGNvbmVpeGllcyAoJDQkKSwgbm8gcGVyIHRvdGVzIGxlcyBxdWUgaGkgaGEgKCQ1JCkuIiwgIkFxdWVzdGEgw6lzIGxhIHN1bWEgZGUgVE9URVMgbGVzIGRhZGVzOiBlbmNhcmEgY2FsIHJlc3Rhci1oaSBsZXMgcXVlIGphIGNvbmVpeGVzLiJdLCAiZXJyIjogWyJQQVNfSU5URVJNRURJX1BFUl9SRVNQT1NUQSIsICIiLCAiTl9NQUxfQ09NUFRBVCIsICJQQVNfSU5URVJNRURJX1BFUl9SRVNQT1NUQSJdLCAicmVzIjogWyJTdW1hIHRvdGFsOiAkNVxcY2RvdDc9MzUkIiwgIlN1bWEgY29uZWd1ZGE6ICQ1KzYrOSs0PTI0JCIsICJEYWRhIHF1ZSBmYWx0YTogJDM1LTI0PTExJCJdfQ=="
  },
  {
   "id": "267b",
   "ex": 267,
   "ap": "b",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Falta una dada. Esbrina-la a partir de la mitjana.",
   "enunciat": "La mitjana de $6$ dades és $12$. En coneixem $5$: $12,\\;8,\\;15,\\;11,\\;9$. Quina és l'altra?",
   "opcions": [
    "$17$",
    "$72$",
    "$5$",
    "$12$"
   ],
   "pistes": [
    "Si la mitjana de $6$ dades és $12$, la suma de totes ha de ser $6\\cdot12$.",
    "Resta a aquesta suma el que ja sumen les dades conegudes."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0YSDDqXMgbGEgc3VtYSBkZSBUT1RFUyBsZXMgZGFkZXM6IGVuY2FyYSBjYWwgcmVzdGFyLWhpIGxlcyBxdWUgamEgY29uZWl4ZXMuIiwgIkhhcyBtdWx0aXBsaWNhdCBsYSBtaXRqYW5hIHBlciBsZXMgZGFkZXMgcXVlIGphIGNvbmVpeGllcyAoJDUkKSwgbm8gcGVyIHRvdGVzIGxlcyBxdWUgaGkgaGEgKCQ2JCkuIiwgIkFxdWVzdGEgw6lzIGxhIG1pdGphbmEsIHF1ZSBqYSB0ZSBsYSBkb25hdmVuLiBMYSBkYWRhIHF1ZSBmYWx0YSBubyB0w6kgcGVyIHF1w6ggY29pbmNpZGlyLWhpLiJdLCAiZXJyIjogWyIiLCAiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiLCAiTl9NQUxfQ09NUFRBVCIsICJQQVNfSU5URVJNRURJX1BFUl9SRVNQT1NUQSJdLCAicmVzIjogWyJTdW1hIHRvdGFsOiAkNlxcY2RvdDEyPTcyJCIsICJTdW1hIGNvbmVndWRhOiAkMTIrOCsxNSsxMSs5PTU1JCIsICJEYWRhIHF1ZSBmYWx0YTogJDcyLTU1PTE3JCJdfQ=="
  },
  {
   "id": "268a",
   "ex": 268,
   "ap": "a",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el recorregut (o rang) de cada llista: la diferència entre la dada més gran i la més petita.",
   "enunciat": "$12,\\;5,\\;9,\\;20,\\;7$",
   "opcions": [
    "$15$",
    "$\\dfrac{53}{5}$",
    "$20$",
    "$25$"
   ],
   "pistes": [
    "Busca la dada més gran i la més petita.",
    "Aquí són $20$ i $5$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQWl4w7Igw6lzIGxhIG1pdGphbmEsIHF1ZSBkaXUgb24gw6lzIGVsIGNlbnRyZS4gRWwgcmVjb3JyZWd1dCBkaXUgY29tIGQnZXN0ZXNlcyBlc3RhbiBsZXMgZGFkZXMuIiwgIkFxdWVzdCDDqXMgZWwgdmFsb3IgbcOpcyBncmFuLiBFbCByZWNvcnJlZ3V0IMOpcyBsYSBkaXN0w6BuY2lhIGVudHJlIGwnZXh0cmVtIGRlIGRhbHQgaSBlbCBkZSBiYWl4OiAkMjAtNSQuIiwgIkVsIHJlY29ycmVndXQgw6lzIHVuYSBSRVNUQTogZWwgbcOpcyBncmFuIG1lbnlzIGVsIG3DqXMgcGV0aXQuIl0sICJlcnIiOiBbIiIsICJNRVNVUkFfTUFMX1RSSUFEQSIsICJQQVNfSU5URVJNRURJX1BFUl9SRVNQT1NUQSIsICJTSUdORV9GSU5BTCJdLCAicmVzIjogWyIkUj14X3tcXG1heH0teF97XFxtaW59PTIwLTU9MTUkIl19"
  },
  {
   "id": "268b",
   "ex": 268,
   "ap": "b",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el recorregut (o rang) de cada llista: la diferència entre la dada més gran i la més petita.",
   "enunciat": "$3,\\;3,\\;3,\\;3$",
   "opcions": [
    "$3$",
    "$6$",
    "No es pot calcular: totes les dades són iguals.",
    "$0$"
   ],
   "pistes": [
    "Busca la dada més gran i la més petita.",
    "Aquí són $3$ i $3$."
   ],
   "nota": "Totes les dades són iguals, així que no hi ha cap dispersió: el recorregut val $0$.",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3Qgw6lzIGVsIHZhbG9yIG3DqXMgZ3Jhbi4gRWwgcmVjb3JyZWd1dCDDqXMgbGEgZGlzdMOgbmNpYSBlbnRyZSBsJ2V4dHJlbSBkZSBkYWx0IGkgZWwgZGUgYmFpeDogJDMtMyQuIiwgIkVsIHJlY29ycmVndXQgw6lzIHVuYSBSRVNUQTogZWwgbcOpcyBncmFuIG1lbnlzIGVsIG3DqXMgcGV0aXQuIiwgIlPDrSBxdWUgZXMgcG90OiBzaSB0b3RlcyBsZXMgZGFkZXMgdmFsZW4gZWwgbWF0ZWl4LCBlbCBtw6lzIGdyYW4gaSBlbCBtw6lzIHBldGl0IGNvaW5jaWRlaXhlbiBpIGVsIHJlY29ycmVndXQgdmFsICQwJC4gWmVybyBubyB2b2wgZGlyIFwiaW1wb3NzaWJsZVwiLCB2b2wgZGlyIHF1ZSBubyBoaSBoYSBnZW5zIGRlIGRpc3BlcnNpw7MuIiwgIiJdLCAiZXJyIjogWyJQQVNfSU5URVJNRURJX1BFUl9SRVNQT1NUQSIsICJTSUdORV9GSU5BTCIsICJFU19QT1RfREVURVJNSU5BUiIsICIiXSwgInJlcyI6IFsiJFI9eF97XFxtYXh9LXhfe1xcbWlufT0zLTM9MCQiXX0="
  },
  {
   "id": "268c",
   "ex": 268,
   "ap": "c",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el recorregut (o rang) de cada llista: la diferència entre la dada més gran i la més petita.",
   "enunciat": "$-4,\\;10,\\;0,\\;6,\\;-1$",
   "opcions": [
    "$6$",
    "$10$",
    "$14$",
    "$\\dfrac{11}{5}$"
   ],
   "pistes": [
    "Busca la dada més gran i la més petita.",
    "Aquí són $10$ i $-4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCByZWNvcnJlZ3V0IMOpcyB1bmEgUkVTVEE6IGVsIG3DqXMgZ3JhbiBtZW55cyBlbCBtw6lzIHBldGl0LiIsICJBcXVlc3Qgw6lzIGVsIHZhbG9yIG3DqXMgZ3Jhbi4gRWwgcmVjb3JyZWd1dCDDqXMgbGEgZGlzdMOgbmNpYSBlbnRyZSBsJ2V4dHJlbSBkZSBkYWx0IGkgZWwgZGUgYmFpeDogJDEwLSgtNCkkLiIsICIiLCAiQWl4w7Igw6lzIGxhIG1pdGphbmEsIHF1ZSBkaXUgb24gw6lzIGVsIGNlbnRyZS4gRWwgcmVjb3JyZWd1dCBkaXUgY29tIGQnZXN0ZXNlcyBlc3RhbiBsZXMgZGFkZXMuIl0sICJlcnIiOiBbIlNJR05FX0ZJTkFMIiwgIlBBU19JTlRFUk1FRElfUEVSX1JFU1BPU1RBIiwgIiIsICJNRVNVUkFfTUFMX1RSSUFEQSJdLCAicmVzIjogWyIkUj14X3tcXG1heH0teF97XFxtaW59PTEwLSgtNCk9MTQkIl19"
  },
  {
   "id": "269a",
   "ex": 269,
   "ap": "a",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Per a la llista $2,\\;4,\\;4,\\;4,\\;5,\\;5,\\;7,\\;9$, que té mitjana $\\bar{x}=5$:",
   "enunciat": "Quant sumen les desviacions $x_i-\\bar{x}$?",
   "opcions": [
    "$0$",
    "$12$",
    "$32$",
    "$40$"
   ],
   "pistes": [
    "Calcula $x_i-5$ per a cada dada i suma-ho tot.",
    "Fixa't en el signe de cada desviació: n'hi ha de negatives."
   ],
   "nota": "Que la suma de desviacions doni sempre $0$ no és casualitat d'aquesta llista: passa amb qualsevol conjunt de dades, perquè la mitjana és justament el punt que equilibra les desviacions. És el motiu pel qual la variància les eleva al quadrat.",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQWl4w7Igw6lzIGxhIHN1bWEgZGVscyB2YWxvcnMgYWJzb2x1dHMuIExlcyBkZXN2aWFjaW9ucyB2YW4gYW1iIHNpZ25lLCBpIGxlcyBuZWdhdGl2ZXMgY29tcGVuc2VuIGxlcyBwb3NpdGl2ZXMuIiwgIkFpeMOyIMOpcyBsYSBzdW1hIGRlbHMgcXVhZHJhdHMgZGUgbGVzIGRlc3ZpYWNpb25zLCBxdWUgw6lzIGVsIHBhcyBzZWfDvGVudC4gQXF1w60gZXMgZGVtYW5lbiBsZXMgZGVzdmlhY2lvbnMgdGFsIGNvbSBzw7NuLiIsICJBcXVlc3RhIMOpcyBsYSBzdW1hIGRlIGxlcyBkYWRlcywgbm8gbGEgZGUgbGVzIGRlc3ZpYWNpb25zLiJdLCAiZXJyIjogWyIiLCAiVkFMT1JfQUJTT0xVVF9JTkRFR1VUIiwgIkRFU1ZJQUNJT05TX0FMX1FVQURSQVQiLCAiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiXSwgInJlcyI6IFsiRGVzdmlhY2lvbnM6ICQtMyxcXDstMSxcXDstMSxcXDstMSxcXDsrMCxcXDsrMCxcXDsrMixcXDsrNCQiLCAiU3VtYTogJDAkLiBTZW1wcmUgZG9uYSB6ZXJvLCBpIHBlciBhaXjDsiBsZXMgZGVzdmlhY2lvbnMgbm8gc2VydmVpeGVuIGRpcmVjdGFtZW50IHBlciBtZXN1cmFyIGxhIGRpc3BlcnNpw7M6IGNhbCBlbGV2YXItbGVzIGFsIHF1YWRyYXQuIl19"
  },
  {
   "id": "269b",
   "ex": 269,
   "ap": "b",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Per a la llista $2,\\;4,\\;4,\\;4,\\;5,\\;5,\\;7,\\;9$, que té mitjana $\\bar{x}=5$:",
   "enunciat": "I quant sumen els quadrats de les desviacions, $\\sum(x_i-\\bar{x})^2$?",
   "opcions": [
    "$4$",
    "$32$",
    "$0$",
    "$12$"
   ],
   "pistes": [
    "Eleva cada desviació al quadrat abans de sumar.",
    "Recorda que $(-3)^2=9$, no $-9$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3RhIGphIMOpcyBsYSB2YXJpw6BuY2lhIChsYSBzdW1hIGRpdmlkaWRhIGVudHJlICROJCkuIEFxdcOtIGVzIGRlbWFuYSBub23DqXMgbGEgc3VtYS4iLCAiIiwgIlplcm8gw6lzIGxhIHN1bWEgZGUgbGVzIGRlc3ZpYWNpb25zIFNFTlNFIGVsZXZhciBhbCBxdWFkcmF0LiBFbiBlbGV2YXItbGVzLCB0b3RlcyBlcyB0b3JuZW4gcG9zaXRpdmVzIGkgamEgbm8gZXMgY29tcGVuc2VuLiIsICJBaXjDsiDDqXMgbGEgc3VtYSBkZWxzIHZhbG9ycyBhYnNvbHV0cy4gRWwgcXVhZHJhdCBkZSAkLTMkIMOpcyAkOSQsIG5vICQzJC4iXSwgImVyciI6IFsiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiLCAiIiwgIkRFU1ZJQUNJT05TX1NFTlNFX1FVQURSQVQiLCAiVkFMT1JfQUJTT0xVVF9JTkRFR1VUIl0sICJyZXMiOiBbIlF1YWRyYXRzOiAkOSxcXDsxLFxcOzEsXFw7MSxcXDswLFxcOzAsXFw7NCxcXDsxNiQiLCAiU3VtYTogJDkrMSsxKzErMCswKzQrMTY9MzIkIl19"
  },
  {
   "id": "270a",
   "ex": 270,
   "ap": "a",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula la variància i la desviació típica de cada llista. Arrodoneix la desviació típica a les centèsimes.",
   "enunciat": "$2,\\;4,\\;4,\\;4,\\;5,\\;5,\\;7,\\;9$",
   "opcions": [
    "$\\sigma^2=4$, $\\sigma\\approx4{,}00$",
    "$\\sigma^2=32$, $\\sigma\\approx5{,}66$",
    "$\\sigma^2=4$, $\\sigma\\approx2{,}00$",
    "$\\sigma^2=0$, $\\sigma=0$"
   ],
   "pistes": [
    "Calcula primer la mitjana: $\\bar{x}=5$.",
    "Després $\\sigma^2=\\dfrac{\\sum(x_i-\\bar{x})^2}{N}$, i la desviació típica és l'arrel quadrada d'això."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJMYSBkZXN2aWFjacOzIHTDrXBpY2Egw6lzIGwnQVJSRUwgZGUgbGEgdmFyacOgbmNpYSwgbm8gbGEgdmFyacOgbmNpYSB1bmEgYWx0cmEgdmVnYWRhOiAkXFxzaWdtYT1cXHNxcnR7NH0kLiIsICJUJ2hhcyBxdWVkYXQgYW1iIGxhIHN1bWEgZGVscyBxdWFkcmF0cyBzZW5zZSBkaXZpZGlyLWxhIGVudHJlICROPTgkLiIsICIiLCAiU2kgZXQgZG9uYSB6ZXJvIMOpcyBxdWUgaGFzIHN1bWF0IGxlcyBkZXN2aWFjaW9ucyBzZW5zZSBlbGV2YXItbGVzIGFsIHF1YWRyYXQ6IGFxdWVzdGEgc3VtYSBzZW1wcmUgdmFsIHplcm8uIl0sICJlcnIiOiBbIkFSUkVMX09CTElEQURBIiwgIkRJVklTSU9fT0JMSURBREEiLCAiIiwgIkRFU1ZJQUNJT05TX1NFTlNFX1FVQURSQVQiXSwgInJlcyI6IFsiJFxcYmFye3h9PVxcZGZyYWN7NDB9ezh9PTUkIiwgIiRcXHN1bSh4X2ktXFxiYXJ7eH0pXjI9OSsxKzErMSswKzArNCsxNj0zMiQiLCAiJFxcc2lnbWFeMj1cXGRmcmFjezMyfXs4fT00JCIsICIkXFxzaWdtYT1cXHNxcnR7NH1cXGFwcHJveDJ7LH0wMCQiXX0="
  },
  {
   "id": "270b",
   "ex": 270,
   "ap": "b",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula la variància i la desviació típica de cada llista. Arrodoneix la desviació típica a les centèsimes.",
   "enunciat": "$10,\\;12,\\;14,\\;16,\\;18$",
   "opcions": [
    "$\\sigma^2=8$, $\\sigma\\approx8{,}00$",
    "$\\sigma^2=40$, $\\sigma\\approx6{,}32$",
    "$\\sigma^2=0$, $\\sigma=0$",
    "$\\sigma^2=8$, $\\sigma\\approx2{,}83$"
   ],
   "pistes": [
    "Calcula primer la mitjana: $\\bar{x}=14$.",
    "Després $\\sigma^2=\\dfrac{\\sum(x_i-\\bar{x})^2}{N}$, i la desviació típica és l'arrel quadrada d'això."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMYSBkZXN2aWFjacOzIHTDrXBpY2Egw6lzIGwnQVJSRUwgZGUgbGEgdmFyacOgbmNpYSwgbm8gbGEgdmFyacOgbmNpYSB1bmEgYWx0cmEgdmVnYWRhOiAkXFxzaWdtYT1cXHNxcnR7OH0kLiIsICJUJ2hhcyBxdWVkYXQgYW1iIGxhIHN1bWEgZGVscyBxdWFkcmF0cyBzZW5zZSBkaXZpZGlyLWxhIGVudHJlICROPTUkLiIsICJTaSBldCBkb25hIHplcm8gw6lzIHF1ZSBoYXMgc3VtYXQgbGVzIGRlc3ZpYWNpb25zIHNlbnNlIGVsZXZhci1sZXMgYWwgcXVhZHJhdDogYXF1ZXN0YSBzdW1hIHNlbXByZSB2YWwgemVyby4iLCAiIl0sICJlcnIiOiBbIkFSUkVMX09CTElEQURBIiwgIkRJVklTSU9fT0JMSURBREEiLCAiREVTVklBQ0lPTlNfU0VOU0VfUVVBRFJBVCIsICIiXSwgInJlcyI6IFsiJFxcYmFye3h9PVxcZGZyYWN7NzB9ezV9PTE0JCIsICIkXFxzdW0oeF9pLVxcYmFye3h9KV4yPTE2KzQrMCs0KzE2PTQwJCIsICIkXFxzaWdtYV4yPVxcZGZyYWN7NDB9ezV9PTgkIiwgIiRcXHNpZ21hPVxcc3FydHs4fVxcYXBwcm94MnssfTgzJCJdfQ=="
  },
  {
   "id": "270c",
   "ex": 270,
   "ap": "c",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula la variància i la desviació típica de cada llista. Arrodoneix la desviació típica a les centèsimes.",
   "enunciat": "$4,\\;8,\\;6,\\;5,\\;3,\\;2,\\;8,\\;4$",
   "opcions": [
    "$\\sigma^2=\\dfrac{17}{4}$, $\\sigma\\approx2{,}06$",
    "$\\sigma^2=34$, $\\sigma\\approx5{,}83$",
    "$\\sigma^2=0$, $\\sigma=0$",
    "$\\sigma^2=\\dfrac{17}{4}$, $\\sigma\\approx4{,}25$"
   ],
   "pistes": [
    "Calcula primer la mitjana: $\\bar{x}=5$.",
    "Després $\\sigma^2=\\dfrac{\\sum(x_i-\\bar{x})^2}{N}$, i la desviació típica és l'arrel quadrada d'això."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiVCdoYXMgcXVlZGF0IGFtYiBsYSBzdW1hIGRlbHMgcXVhZHJhdHMgc2Vuc2UgZGl2aWRpci1sYSBlbnRyZSAkTj04JC4iLCAiU2kgZXQgZG9uYSB6ZXJvIMOpcyBxdWUgaGFzIHN1bWF0IGxlcyBkZXN2aWFjaW9ucyBzZW5zZSBlbGV2YXItbGVzIGFsIHF1YWRyYXQ6IGFxdWVzdGEgc3VtYSBzZW1wcmUgdmFsIHplcm8uIiwgIkxhIGRlc3ZpYWNpw7MgdMOtcGljYSDDqXMgbCdBUlJFTCBkZSBsYSB2YXJpw6BuY2lhLCBubyBsYSB2YXJpw6BuY2lhIHVuYSBhbHRyYSB2ZWdhZGE6ICRcXHNpZ21hPVxcc3FydHtcXGRmcmFjezE3fXs0fX0kLiJdLCAiZXJyIjogWyIiLCAiRElWSVNJT19PQkxJREFEQSIsICJERVNWSUFDSU9OU19TRU5TRV9RVUFEUkFUIiwgIkFSUkVMX09CTElEQURBIl0sICJyZXMiOiBbIiRcXGJhcnt4fT1cXGRmcmFjezQwfXs4fT01JCIsICIkXFxzdW0oeF9pLVxcYmFye3h9KV4yPTErOSsxKzArNCs5KzkrMT0zNCQiLCAiJFxcc2lnbWFeMj1cXGRmcmFjezM0fXs4fT1cXGRmcmFjezE3fXs0fSQiLCAiJFxcc2lnbWE9XFxzcXJ0e1xcZGZyYWN7MTd9ezR9fVxcYXBwcm94MnssfTA2JCJdfQ=="
  },
  {
   "id": "271a",
   "ex": 271,
   "ap": "a",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Torna a les talles de calçat de l'exercici 227. La taula és: $x_i=37$ amb $f_i=5$, $x_i=38$ amb $f_i=8$, $x_i=39$ amb $f_i=1$, $x_i=40$ amb $f_i=3$, $x_i=41$ amb $f_i=1$, $x_i=42$ amb $f_i=1$, $x_i=43$ amb $f_i=1$, amb $N=20$ i $\\bar{x}=38{,}7$.",
   "enunciat": "Calcula la variància.",
   "opcions": [
    "$58{,}20$",
    "$1{,}71$",
    "$4{,}00$",
    "$2{,}91$"
   ],
   "pistes": [
    "Amb taula de freqüències, $\\sigma^2=\\dfrac{\\sum(x_i-\\bar{x})^2 f_i}{N}$.",
    "Calcula $(x_i-38{,}7)^2$ per a cada talla, multiplica'l per la seva freqüència i suma-ho tot."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3RhIMOpcyBsYSBzdW1hICRcXHN1bSh4X2ktXFxiYXJ7eH0pXjIgZl9pJCBzZW5zZSBkaXZpZGlyIGVudHJlICROPTIwJC4iLCAiQWl4w7IgamEgw6lzIGxhIGRlc3ZpYWNpw7MgdMOtcGljYS4gTGEgdmFyacOgbmNpYSDDqXMgZWwgdmFsb3IgYWJhbnMgZGUgZmVyIGwnYXJyZWwuIiwgIkhhcyBmZXQgc2VydmlyIGVscyB2YWxvcnMgZGlmZXJlbnRzIHNlbnNlIHBlc2FyLWxvcyBwZXIgbGEgc2V2YSBmcmVxw7zDqG5jaWEuIENhZGEgcXVhZHJhdCAkKHhfaS1cXGJhcnt4fSleMiQgcydoYSBkZSBtdWx0aXBsaWNhciBwZXIgJGZfaSQgYWJhbnMgZGUgc3VtYXIuIiwgIiJdLCAiZXJyIjogWyJESVZJU0lPX09CTElEQURBIiwgIlZBUklBTkNJQV9QRVJfREVTVklBQ0lPIiwgIkZSRVFVRU5DSUFfTk9fUE9OREVSQURBIiwgIiJdLCAicmVzIjogWyIkXFxzdW0oeF9pLVxcYmFye3h9KV4yIGZfaT01OHssfTIkIiwgIiRcXHNpZ21hXjI9XFxkZnJhY3s1OHssfTJ9ezIwfT0yeyx9OTEkIl19"
  },
  {
   "id": "271b",
   "ex": 271,
   "ap": "b",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Torna a les talles de calçat de l'exercici 227. La taula és: $x_i=37$ amb $f_i=5$, $x_i=38$ amb $f_i=8$, $x_i=39$ amb $f_i=1$, $x_i=40$ amb $f_i=3$, $x_i=41$ amb $f_i=1$, $x_i=42$ amb $f_i=1$, $x_i=43$ amb $f_i=1$, amb $N=20$ i $\\bar{x}=38{,}7$.",
   "enunciat": "I la desviació típica?",
   "opcions": [
    "$\\approx8{,}47$",
    "$\\approx1{,}71$",
    "$6$",
    "$2{,}91$"
   ],
   "pistes": [
    "$\\sigma=\\sqrt{\\sigma^2}$.",
    "Fes l'arrel quadrada de $2{,}91$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgZWxldmF0IGFsIHF1YWRyYXQgZW4gY29tcHRlcyBkZSBmZXIgbCdhcnJlbDogbGEgZGVzdmlhY2nDsyB0w61waWNhIMOpcyBtw6lzIFBFVElUQSBxdWUgbGEgdmFyacOgbmNpYSBxdWFuIGFxdWVzdGEgw6lzIG3DqXMgZ3JhbiBxdWUgJDEkLiIsICIiLCAiQWl4w7Igw6lzIGVsIHJlY29ycmVndXQuIFRhbWLDqSBtZXN1cmEgZGlzcGVyc2nDsywgcGVyw7Igbm8gw6lzIGxhIGRlc3ZpYWNpw7MgdMOtcGljYS4iLCAiQXF1ZXN0YSDDqXMgbGEgdmFyacOgbmNpYS4gTGEgZGVzdmlhY2nDsyB0w61waWNhIG4nw6lzIGwnYXJyZWwgcXVhZHJhZGEuIl0sICJlcnIiOiBbIkFSUkVMX01BTF9BUExJQ0FEQSIsICIiLCAiTUVTVVJBX01BTF9UUklBREEiLCAiVkFSSUFOQ0lBX1BFUl9ERVNWSUFDSU8iXSwgInJlcyI6IFsiJFxcc2lnbWE9XFxzcXJ0ezJ7LH05MX1cXGFwcHJveDF7LH03MSQgdGFsbGVzIiwgIlZvbCBkaXIgcXVlLCBkZSBtaXRqYW5hLCBsZXMgdGFsbGVzIHZlbnVkZXMgc2Ugc2VwYXJlbiBwb2MgbcOpcyBkJ3VuYSB0YWxsYSBkZSBsYSBtaXRqYW5hIl19"
  },
  {
   "id": "272a",
   "ex": 272,
   "ap": "a",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Dos grups de $6$ alumnes han fet el mateix examen. Grup A: 5,\\;5,\\;5,\\;5,\\;5,\\;5. Grup B: 1,\\;3,\\;5,\\;5,\\;7,\\;9.",
   "enunciat": "Compara'n les mitjanes.",
   "opcions": [
    "La del grup A és més alta.",
    "La del grup B és més alta, perquè hi ha un $9$.",
    "No es poden comparar perquè les dades són diferents.",
    "Són iguals: totes dues valen $5$."
   ],
   "pistes": [
    "Calcula la mitjana de cada grup.",
    "Suma les notes de cada grup: totes dues sumen el mateix."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJUb3RlcyBkdWVzIHN1bWVuICQzMCQgZW50cmUgJDYkIGFsdW1uZXM6IGxhIG1pdGphbmEgw6lzICQ1JCBhbHMgZG9zIGdydXBzLiIsICJFbCAkOSQgZGVsIGdydXAgQiBlcyBjb21wZW5zYSBhbWIgbCckMSQ6IGxhIHN1bWEgY29udGludWEgc2VudCAkMzAkLiIsICJFcyBwb2RlbiBjb21wYXJhciBwZXJmZWN0YW1lbnQ6IHBlciBhaXjDsiBzZXJ2ZWl4ZW4gbGVzIG1lc3VyZXMgZGUgY2VudHJhbGl0emFjacOzLiIsICIiXSwgImVyciI6IFsiVkVSRURJQ1RFX0lOVkVSVElUIiwgIkVYVFJFTV9TRU5TRV9FRkVDVEUiLCAiRVNfUE9UX0RFVEVSTUlOQVIiLCAiIl0sICJyZXMiOiBbIkdydXAgQTogJFxcZGZyYWN7MzB9ezZ9PTUkIiwgIkdydXAgQjogJFxcZGZyYWN7MzB9ezZ9PTUkIl19"
  },
  {
   "id": "272b",
   "ex": 272,
   "ap": "b",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Dos grups de $6$ alumnes han fet el mateix examen. Grup A: 5,\\;5,\\;5,\\;5,\\;5,\\;5. Grup B: 1,\\;3,\\;5,\\;5,\\;7,\\;9.",
   "enunciat": "Quin grup és més regular, i com ho justifiques amb un número?",
   "opcions": [
    "El grup A, però no es pot posar cap número.",
    "El grup A: té $\\sigma=0$ i el B, $\\sigma\\approx2{,}58$.",
    "Són igual de regulars, perquè tenen la mateixa mitjana.",
    "El grup B, perquè té notes més altes."
   ],
   "pistes": [
    "Calcula la desviació típica de cada grup.",
    "Al grup A totes les dades valen igual que la mitjana."
   ],
   "nota": "Aquest parell d'exercicis és el motiu de ser de tot el bloc: dues distribucions poden tenir la mateixa mitjana i no assemblar-se gens. La mitjana tota sola gairebé mai no descriu prou bé un conjunt de dades.",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJTw60gcXVlIHNlJ24gcG90IHBvc2FyOiBsYSBkZXN2aWFjacOzIHTDrXBpY2Egw6lzIGV4YWN0YW1lbnQgZWwgbsO6bWVybyBxdWUgbWVzdXJhIGFpeMOyLiIsICIiLCAiTGEgbWl0amFuYSBkaXUgb24gw6lzIGVsIGNlbnRyZSwgbm8gY29tIGQnYWdydXBhZGVzIGVzdGFuIGxlcyBkYWRlcyBhbCBzZXUgdm9sdGFudC4gUGVyIGFpeMOyIGNhbGVuIGxlcyBtZXN1cmVzIGRlIGRpc3BlcnNpw7M6IGRvcyBncnVwcyBhbWIgbGEgbWF0ZWl4YSBtaXRqYW5hIHBvZGVuIHNlciBjb21wbGV0YW1lbnQgZGlmZXJlbnRzLiIsICJTZXIgcmVndWxhciB2b2wgZGlyIHF1ZSBsZXMgbm90ZXMgcydhc3NlbWJsZW4gZW50cmUgc2ksIG5vIHF1ZSBzaWd1aW4gYWx0ZXMuIEFsIGdydXAgQiB2YW4gZGUgbCckMSQgYWwgJDkkLiJdLCAiZXJyIjogWyJFU19QT1RfREVURVJNSU5BUiIsICIiLCAiTUlUSkFOQV9OT19ESVVfRElTUEVSU0lPIiwgIlZFUkVESUNURV9JTlZFUlRJVCJdLCAicmVzIjogWyJHcnVwIEE6IHRvdGVzIGxlcyBkZXN2aWFjaW9ucyBzw7NuICQwJCwgYWl4w60gcXVlICRcXHNpZ21hXjI9MCQgaSAkXFxzaWdtYT0wJCIsICJHcnVwIEI6ICRcXHNpZ21hXjI9XFxkZnJhY3syMH17M30kIGkgJFxcc2lnbWE9XFxzcXJ0e1xcZGZyYWN7MjB9ezN9fVxcYXBwcm94MnssfTU4JCIsICJDb20gbcOpcyBwZXRpdGEgw6lzICRcXHNpZ21hJCwgbcOpcyBhZ3J1cGFkZXMgZXN0YW4gbGVzIGRhZGVzOiBlbCBncnVwIEEgw6lzIHBlcmZlY3RhbWVudCByZWd1bGFyIl19"
  },
  {
   "id": "273a",
   "ex": 273,
   "ap": "a",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "En un grup de persones s'han mesurat l'alçada (mitjana $170$ cm, $\\sigma=8$ cm) i el pes (mitjana $65$ kg, $\\sigma=8$ kg).",
   "enunciat": "Les dues desviacions típiques valen $8$. Vol dir que les dues variables estan igual de disperses?",
   "opcions": [
    "No: el pes està menys dispers perquè la seva mitjana és més petita.",
    "No: $8$ cm sobre una mitjana de $170$ és molt menys, en proporció, que $8$ kg sobre una mitjana de $65$.",
    "No es pot saber sense les dades originals.",
    "Sí, perquè totes dues valen $8$."
   ],
   "pistes": [
    "Pensa si $8$ cm de diferència en l'alçada d'una persona et sembla molt o poc, i compara-ho amb $8$ kg de diferència en el pes.",
    "Per comparar dispersions de magnituds diferents es divideix $\\sigma$ entre la mitjana."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyLDiXMgYWwgcmV2w6lzOiBsYSBtYXRlaXhhIGRlc3ZpYWNpw7Mgc29icmUgdW5hIG1pdGphbmEgbcOpcyBwZXRpdGEgcmVwcmVzZW50YSB1bmEgdmFyaWFjacOzIHJlbGF0aXZhIE3DiVMgZ3Jhbi4iLCAiIiwgIkFtYiBsYSBtaXRqYW5hIGkgbGEgZGVzdmlhY2nDsyB0w61waWNhIGphIG4naGkgaGEgcHJvdTogZWwgY29lZmljaWVudCBkZSB2YXJpYWNpw7Mgw6lzICRcXGRmcmFje1xcc2lnbWF9e1xcYmFye3h9fSQuIiwgIkxhIGRlc3ZpYWNpw7MgdMOtcGljYSB2YSBlbiBsZXMgbWF0ZWl4ZXMgdW5pdGF0cyBxdWUgbGVzIGRhZGVzLCBpIHBlciBhaXjDsiBubyBlcyBwb2RlbiBjb21wYXJhciBkaXJlY3RhbWVudCBkdWVzIHZhcmlhYmxlcyBkaWZlcmVudHMuIENhbCBtaXJhciBxdWFudCByZXByZXNlbnRhICRcXHNpZ21hJCByZXNwZWN0ZSBkZSBsYSBzZXZhIG1pdGphbmEuIl0sICJlcnIiOiBbIlZFUkVESUNURV9JTlZFUlRJVCIsICIiLCAiRVNfUE9UX0RFVEVSTUlOQVIiLCAiQ1ZfU0VOU0VfRElWSURJUiJdLCAicmVzIjogWyJBbMOnYWRhOiAkXFxkZnJhY3s4fXsxNzB9XFxhcHByb3gweyx9MDQ3MSQiLCAiUGVzOiAkXFxkZnJhY3s4fXs2NX1cXGFwcHJveDB7LH0xMjMxJCIsICJFbCBwZXMgZXN0w6AgcmVsYXRpdmFtZW50IG3DqXMgZGlzcGVycywgdG90IGkgdGVuaXIgbGEgbWF0ZWl4YSAkXFxzaWdtYSQiXX0="
  },
  {
   "id": "273b",
   "ex": 273,
   "ap": "b",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "En un grup de persones s'han mesurat l'alçada (mitjana $170$ cm, $\\sigma=8$ cm) i el pes (mitjana $65$ kg, $\\sigma=8$ kg).",
   "enunciat": "Calcula el coeficient de variació de cada variable, en percentatge.",
   "opcions": [
    "Totes dues $\\approx8\\,\\%$",
    "Alçada $\\approx2125{,}0\\,\\%$, pes $\\approx812{,}5\\,\\%$",
    "Alçada $\\approx4{,}7\\,\\%$, pes $\\approx12{,}3\\,\\%$",
    "Alçada $\\approx0{,}047\\,\\%$, pes $\\approx0{,}123\\,\\%$"
   ],
   "pistes": [
    "$CV=\\dfrac{\\sigma}{\\bar{x}}$, i per posar-ho en percentatge es multiplica per $100$.",
    "Alçada: $\\dfrac{8}{170}$. Pes: $\\dfrac{8}{65}$."
   ],
   "nota": "El coeficient de variació no té unitats, i per això serveix per comparar la dispersió de coses que es mesuren en unitats diferents. És el que et permet dir si un grup és més irregular en alçada o en pes sense comparar centímetres amb quilograms.",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCAkOCQgw6lzIGxhIGRlc3ZpYWNpw7MgdMOtcGljYSwgbm8gZWwgY29lZmljaWVudC4gRWwgY29lZmljaWVudCBzdXJ0IGRlIGRpdmlkaXItbGEgZW50cmUgbGEgbWl0amFuYS4iLCAiSGFzIGRpdmlkaXQgbGEgbWl0amFuYSBlbnRyZSBsYSBkZXN2aWFjacOzIHTDrXBpY2EuIEVsIGNvZWZpY2llbnQgZGUgdmFyaWFjacOzIMOpcyAkQ1Y9XFxkZnJhY3tcXHNpZ21hfXtcXGJhcnt4fX0kLCBubyBhbCByZXbDqXMuIiwgIiIsICJBcXVlc3RzIHPDs24gZWxzIHF1b2NpZW50cyBlbiBkZWNpbWFsOiBwZXIgcGFzc2FyLWxvcyBhIHBlcmNlbnRhdGdlIGVuY2FyYSBmYWx0YSBtdWx0aXBsaWNhciBwZXIgJDEwMCQuIl0sICJlcnIiOiBbIkNWX1NFTlNFX0RJVklESVIiLCAiSU5WRVJUSURBIiwgIiIsICJQRVJDRU5UQVRHRV9ERUNJTUFMX01BTCJdLCAicmVzIjogWyJBbMOnYWRhOiAkQ1Y9XFxkZnJhY3s4fXsxNzB9XFxjZG90MTAwXFxhcHByb3g0eyx9N1xcLFxcJSQiLCAiUGVzOiAkQ1Y9XFxkZnJhY3s4fXs2NX1cXGNkb3QxMDBcXGFwcHJveDEyeyx9M1xcLFxcJSQiLCAiRWwgcGVzIHZhcmlhIGdhaXJlYsOpIGVsIGRvYmxlLCBlbiB0ZXJtZXMgcmVsYXRpdXMiXX0="
  },
  {
   "id": "274a",
   "ex": 274,
   "ap": "a",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Un conjunt de dades té mitjana $\\bar{x}=20$ i desviació típica $\\sigma=4$. Digues què passa en cada cas.",
   "enunciat": "Sumem $5$ a totes les dades.",
   "opcions": [
    "La mitjana passa a $25$ i la desviació típica es queda a $4$.",
    "Totes dues pugen $5$: mitjana $25$ i $\\sigma=9$.",
    "La mitjana es queda a $20$ i $\\sigma$ passa a $9$.",
    "No canvia res."
   ],
   "pistes": [
    "Imagina't les dades sobre una recta i desplaça-les totes $5$ unitats.",
    "La distància entre dues dades qualssevol, canvia?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiU3VtYXIgZWwgbWF0ZWl4IGEgdG90ZXMgbGVzIGRhZGVzIGxlcyBkZXNwbGHDp2EgdG90ZXMgaWd1YWw6IGxlcyBkaXN0w6BuY2llcyBlbnRyZSBlbGxlcyBubyBjYW52aWVuLCBpIGxhIGRpc3BlcnNpw7MgdGFtcG9jLiIsICLDiXMganVzdCBhbCByZXbDqXM6IGVsIHF1ZSBlcyBtb3Ugw6lzIGVsIGNlbnRyZSwgbm8gbCdhbXBsYWRhLiIsICJMYSBtaXRqYW5hIHPDrSBxdWUgY2FudmlhOiBzaSB0b3RlcyBsZXMgZGFkZXMgcHVnZW4gJDUkLCBlbCBzZXUgY2VudHJlIHRhbWLDqS4iXSwgImVyciI6IFsiIiwgIkNPTlNUQU5UX0FGRUNUQV9ESVNQRVJTSU8iLCAiVkVSRURJQ1RFX0lOVkVSVElUIiwgIlZFUkVESUNURV9JTlZFUlRJVCJdLCAicmVzIjogWyJOb3ZhIG1pdGphbmE6ICQyMCs1PTI1JCIsICJMZXMgZGVzdmlhY2lvbnMgJHhfaS1cXGJhcnt4fSQgbm8gY2FudmllbiwgcGVycXXDqCBsZXMgZGFkZXMgaSBsYSBtaXRqYW5hIHMnaGFuIG1vZ3V0IGlndWFsOiAkXFxzaWdtYSQgZXMgbWFudMOpIGEgJDQkIl19"
  },
  {
   "id": "274b",
   "ex": 274,
   "ap": "b",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Un conjunt de dades té mitjana $\\bar{x}=20$ i desviació típica $\\sigma=4$. Digues què passa en cada cas.",
   "enunciat": "Multipliquem totes les dades per $3$.",
   "opcions": [
    "Mitjana $23$ i $\\sigma=7$.",
    "La mitjana passa a $60$ i la desviació típica, a $12$.",
    "Mitjana $60$ i $\\sigma=4$.",
    "Mitjana $60$ i $\\sigma=36$."
   ],
   "pistes": [
    "Si totes les dades es multipliquen per $3$, on va a parar el centre?",
    "I les distàncies entre dades, què els passa?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJNdWx0aXBsaWNhciBwZXIgJDMkIG5vIMOpcyBzdW1hciAkMyQuIiwgIiIsICJNdWx0aXBsaWNhciBzw60gcXVlIGNhbnZpYSBsYSBkaXNwZXJzacOzOiBzaSB0b3RlcyBsZXMgZGFkZXMgcydlc3RpcmVuIHBlbCB0cmlwbGUsIGxlcyBkaXN0w6BuY2llcyBlbnRyZSBlbGxlcyB0YW1iw6kuIiwgIkVsIHF1ZSBxdWVkYSBtdWx0aXBsaWNhdCBwZXIgJDNeMj05JCDDqXMgbGEgVkFSScOATkNJQSAoJDE2XFx0bzE0NCQpLiBMYSBkZXN2aWFjacOzIHTDrXBpY2EgcXVlZGEgbXVsdGlwbGljYWRhIHBlciAkMyQ6ICRcXHNpZ21hPTEyJC4iXSwgImVyciI6IFsiUFJPRFVDVEVfUEVSX1NVTUEiLCAiIiwgIkNPTlNUQU5UX0FGRUNUQV9ESVNQRVJTSU8iLCAiVkFSSUFOQ0lBX1BFUl9ERVNWSUFDSU8iXSwgInJlcyI6IFsiTm92YSBtaXRqYW5hOiAkMjBcXGNkb3QzPTYwJCIsICJDYWRhIGRlc3ZpYWNpw7MgcXVlZGEgbXVsdGlwbGljYWRhIHBlciAkMyQsIGkgcGVyIHRhbnQgJFxcc2lnbWEkIHRhbWLDqTogJDRcXGNkb3QzPTEyJCIsICJMYSB2YXJpw6BuY2lhLCBlbiBjYW52aSwgcXVlZGEgbXVsdGlwbGljYWRhIHBlciAkM14yPTkkOiAkMTZcXGNkb3Q5PTE0ND0xMl4yJCJdfQ=="
  },
  {
   "id": "274c",
   "ex": 274,
   "ap": "c",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Un conjunt de dades té mitjana $\\bar{x}=20$ i desviació típica $\\sigma=4$. Digues què passa en cada cas.",
   "enunciat": "Afegim una dada nova que val exactament $20$.",
   "opcions": [
    "La mitjana baixa i $\\sigma$ es queda igual.",
    "La mitjana es queda a $20$ i $\\sigma$ puja.",
    "No canvia res, ni la mitjana ni $\\sigma$.",
    "La mitjana es queda a $20$ i la desviació típica baixa una mica."
   ],
   "pistes": [
    "Quina desviació aporta una dada que val exactament el mateix que la mitjana?",
    "La suma dels quadrats no canvia, però el nombre de dades sí."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBZmVnaXIgdW5hIGRhZGEgaWd1YWwgYSBsYSBtaXRqYW5hIG5vIGxhIG1vdSBlbiBjYXAgZGlyZWNjacOzLiIsICJBZmVnaXIgdW5hIGRhZGEgcXVlIGNvaW5jaWRlaXggYW1iIGxhIG1pdGphbmEgbm8gcG90IGF1Z21lbnRhciBsYSBkaXNwZXJzacOzOiBhcG9ydGEgdW5hIGRlc3ZpYWNpw7MgZGUgJDAkLiIsICJMYSBtaXRqYW5hIG5vIGVzIG1vdSwgYWl4w7Igw6lzIGNlcnQuIFBlcsOyIGFyYSBoaSBoYSB1bmEgZGFkYSBtw6lzIHF1ZSBlc3TDoCBleGFjdGFtZW50IGFsIGNlbnRyZSwgaSBhaXjDsiBmYSBxdWUsIGRlIG1pdGphbmEsIGxlcyBkYWRlcyBlc3RpZ3VpbiB1bmEgbWljYSBtZW55cyBlc3Rlc2VzOiAkXFxzaWdtYSQgYmFpeGEuIiwgIiJdLCAiZXJyIjogWyJWRVJFRElDVEVfSU5WRVJUSVQiLCAiVkVSRURJQ1RFX0lOVkVSVElUIiwgIkVYVFJFTV9TRU5TRV9FRkVDVEUiLCAiIl0sICJyZXMiOiBbIkxhIGRhZGEgbm92YSBhcG9ydGEgdW5hIGRlc3ZpYWNpw7MgJDIwLTIwPTAkLCBhaXjDrSBxdWUgJFxcc3VtKHhfaS1cXGJhcnt4fSleMiQgbm8gY2FudmlhIiwgIkVuIGNhbnZpICROJCBhdWdtZW50YSBlbiAkMSQsIGkgY29tIHF1ZSBsYSB2YXJpw6BuY2lhIMOpcyBhcXVlc3RhIHN1bWEgZGl2aWRpZGEgZW50cmUgJE4kLCBsYSB2YXJpw6BuY2lhIGJhaXhhOyBpIGFtYiBlbGxhLCAkXFxzaWdtYSQiXX0="
  }
 ]
};
