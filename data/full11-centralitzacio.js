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
    "369a",
    "369b",
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
    "370a",
    "370b",
    "220a",
    "220b",
    "220c",
    "226a",
    "226b",
    "226c",
    "226d",
    "221a",
    "221b",
    "221c",
    "221d",
    "222a",
    "222b",
    "224a",
    "224b",
    "224c",
    "224d",
    "225a",
    "225b",
    "235a",
    "235b",
    "234a",
    "234b",
    "223a",
    "223b",
    "223c"
   ]
  },
  {
   "id": "grafics",
   "titol": "Gràfics estadístics",
   "descripcio": "Diagrames de barres, histogrames, polígons de freqüències i gràfics de sectors.",
   "items": [
    "371a",
    "371b",
    "227",
    "229",
    "230a",
    "230b",
    "230c",
    "230d",
    "231",
    "234c",
    "228a",
    "228b",
    "228c",
    "232a",
    "232b",
    "232c"
   ]
  },
  {
   "id": "centralitzacio",
   "titol": "Mitjana, mediana i moda",
   "descripcio": "Les tres mesures de centralització, des d'una llista i des d'una taula de freqüències, i quina respon cada pregunta.",
   "items": [
    "372a",
    "372b",
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
    "265a",
    "265b",
    "264",
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
    "373a",
    "373b",
    "268a",
    "268b",
    "268c",
    "269a",
    "269b",
    "270a",
    "270b",
    "270c",
    "272a",
    "272b",
    "271a",
    "271b",
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
  "DIVIDIT_PER_VALORS_DIFERENTS": "Has dividit pel nombre de valors DIFERENTS en comptes de pel nombre de DADES. A la mitjana, un valor repetit compta tantes vegades com apareix.",
  "DIVISIO_OBLIDADA": "T'has quedat amb la suma sense dividir-la entre el nombre de dades. La variància és una MITJANA de quadrats, no una suma.",
  "DIVISIO_SOBRERA": "Has tornat a dividir per alguna cosa que ja estava tinguda en compte. Escriu la fórmula sencera i substitueix-hi els valors d'un sol cop.",
  "EL_MES_GRAN": "El més gran dels nombres només és el m.c.m. si tots els altres el divideixen. Comprova-ho abans de donar-lo per bo.",
  "EXTREM_SENSE_EFECTE": "Has donat per fet que una dada molt gran o molt petita no canvia res. La mitjana sí que se'n ressent, perquè surt de sumar-ho tot; la mediana molt menys, perquè només mira quin valor queda al mig.",
  "FREQUENCIA_NO_PONDERADA": "Amb una taula de freqüències, cada valor s'ha de multiplicar per la seva freqüència abans de sumar: $\\bar{x}=\\frac{\\sum x_i f_i}{N}$. Fer la mitjana només dels valors diferents ignora quantes vegades surt cadascun.",
  "MEDIANA_PER_MITJANA": "Has confós la mediana amb la mitjana. La mitjana es CALCULA (sumar-ho tot i dividir); la mediana es BUSCA (ordenar i mirar quina queda al mig).",
  "MEDIANA_PER_MODA": "Has confós la mediana amb la moda. La mediana és el valor central un cop ordenades; la moda és el que es repeteix més, estigui on estigui.",
  "MEDIANA_SENSE_ORDENAR": "Has agafat el valor del mig de la llista tal com venia. La mediana només té sentit sobre les dades ORDENADES: aquest és el primer pas, sempre.",
  "MESURA_MAL_TRIADA": "El càlcul és correcte, però aquesta mesura no respon la pregunta que t'han fet. Abans de calcular, decideix si et pregunten on és el centre (mitjana, mediana), què es repeteix més (moda) o com d'esteses estan les dades (recorregut, desviació típica).",
  "MODA_PER_FREQUENCIA": "Has donat quantes vegades es repeteix el valor, no quin valor és. La moda és una dada, no un recompte.",
  "N_MAL_COMPTAT": "Has fet servir un nombre de dades que no és el que toca. Compta'l bé: sovint la trampa és comptar només les dades conegudes i oblidar la que es busca.",
  "PAS_INTERMEDI_PER_RESPOSTA": "El valor que has triat és correcte, però és un pas intermedi, no el que et demanen. Torna a llegir la pregunta i mira quina magnitud has d'acabar donant: sovint només falta una operació més.",
  "PES_IGNORAT": "Has fet la mitjana simple, com si totes les parts valguessin el mateix. Amb pesos, cada valor es multiplica pel seu abans de sumar.",
  "PES_MAL_APLICAT": "Els pesos no s'han repartit bé: cada valor ha d'anar amb el SEU pes, no tots amb el mateix.",
  "RANG_PER_MEDIANA": "Has donat el recorregut on es demanava una mesura de centre. El recorregut diu com d'esteses estan les dades, no on és el mig.",
  "VEREDICTE_INVERTIT": "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del correcte: torna a comprovar la condició amb els valors concrets de l'enunciat."
 },
 "items": [
  {
   "id": "372a",
   "ex": 372,
   "ap": "a",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la mitjana aritmètica d'aquestes dades. Recorda: és la suma de totes les dades dividida pel nombre de dades.",
   "enunciat": "$2,\\;4,\\;9$",
   "opcions": [
    "$4$",
    "$15$",
    "$5$",
    "$9$"
   ],
   "pistes": [
    "Suma les tres dades.",
    "$2+4+9=15$. Divideix per $3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyIkNCQgw6lzIGxhIGRhZGEgZGVsIG1pZywgbGEgbWVkaWFuYS4gTGEgbWl0amFuYSBlcyBjYWxjdWxhOiBzdW1hIGkgZGl2aWRlaXguIiwgIiQxNSQgw6lzIGxhIHN1bWEuIEZhbHRhIGRpdmlkaXItbGEgcGVsIG5vbWJyZSBkZSBkYWRlcywgJDMkLiIsICIiLCAiJDkkIMOpcyBsYSBkYWRhIG3DqXMgZ3Jhbi4gTGEgbWl0amFuYSDDqXMgZWwgdmFsb3IgcXVlIGVzIHJlcGFydGlyaWEgaWd1YWwgZW50cmUgdG90ZXM6IHN1bWEgaSBkaXZpZGVpeC4iXSwgImVyciI6IFsiTUVESUFOQV9QRVJfTUlUSkFOQSIsICJESVZJU0lPX09CTElEQURBIiwgIiIsICJFTF9NRVNfR1JBTiJdLCAicmVzIjogWyIkXFxiYXIgeD1cXGRmcmFjezIrNCs5fXszfT1cXGRmcmFjezE1fXszfT01JCJdfQ=="
  },
  {
   "id": "372b",
   "ex": 372,
   "ap": "b",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la mitjana aritmètica d'aquestes dades. Recorda: és la suma de totes les dades dividida pel nombre de dades.",
   "enunciat": "$1,\\;5,\\;6$",
   "opcions": [
    "$5$",
    "$6$",
    "$4$",
    "$12$"
   ],
   "pistes": [
    "Suma les tres dades.",
    "$1+5+6=12$. Divideix per $3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyIkNSQgw6lzIGxhIGRhZGEgZGVsIG1pZywgbGEgbWVkaWFuYS4gTGEgbWl0amFuYSBlcyBjYWxjdWxhOiBzdW1hIGkgZGl2aWRlaXguIiwgIiQ2JCDDqXMgbGEgZGFkYSBtw6lzIGdyYW4uIExhIG1pdGphbmEgw6lzIGVsIHZhbG9yIHF1ZSBlcyByZXBhcnRpcmlhIGlndWFsIGVudHJlIHRvdGVzOiBzdW1hIGkgZGl2aWRlaXguIiwgIiIsICIkMTIkIMOpcyBsYSBzdW1hLiBGYWx0YSBkaXZpZGlyLWxhIHBlbCBub21icmUgZGUgZGFkZXMsICQzJC4iXSwgImVyciI6IFsiTUVESUFOQV9QRVJfTUlUSkFOQSIsICJFTF9NRVNfR1JBTiIsICIiLCAiRElWSVNJT19PQkxJREFEQSJdLCAicmVzIjogWyIkXFxiYXIgeD1cXGRmcmFjezErNSs2fXszfT1cXGRmcmFjezEyfXszfT00JCJdfQ=="
  },
  {
   "id": "260a",
   "ex": 260,
   "ap": "a",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBtw6lzIGdyYW4gZGUgdG90cyBubyB0w6kgcmVzIGEgdmV1cmUgYW1iIGxhIG1vZGE6IGVsIHF1ZSBjb21wdGEgw6lzIHF1YW50ZXMgdmVnYWRlcyBzdXJ0IGNhZGEgdmFsb3IsIG5vIGNvbSBkZSBncmFuIMOpcy4iLCAiIiwgIkhhcyBkb25hdCBxdWFudGVzIHZlZ2FkZXMgZXMgcmVwZXRlaXgsIG5vIFFVSU4gdmFsb3IgZXMgcmVwZXRlaXguIExhIG1vZGEgw6lzIGxhIGRhZGEsIG5vIGVsIHNldSByZWNvbXB0ZS4iLCAiQWl4w7Igw6lzIGxhIG1lZGlhbmEgKGVsIHZhbG9yIGNlbnRyYWwgdW4gY29wIG9yZGVuYWRlcykuIExhIG1vZGEgw6lzIGVsIHZhbG9yIHF1ZSBzdXJ0IG3DqXMgdmVnYWRlcywgZXN0aWd1aSBvbiBlc3RpZ3VpLiJdLCAiZXJyIjogWyJFTF9NRVNfR1JBTiIsICIiLCAiTU9EQV9QRVJfRlJFUVVFTkNJQSIsICJNRURJQU5BX1BFUl9NT0RBIl0sICJyZXMiOiBbIlJlY29tcHRlOiAkMlxcdG8xJCwgJDRcXHRvMiQsICQ2XFx0bzIkLCAkOVxcdG8xJCIsICJIaSBoYSBkb3MgdmFsb3JzIGFtYiBsYSBmcmVxw7zDqG5jaWEgbcOgeGltYSAoJDIkKTogbGEgZGlzdHJpYnVjacOzIMOpcyBiaW1vZGFsIl0sICJjb20iOiAiVW5hIGRpc3RyaWJ1Y2nDsyBwb3QgdGVuaXIgbcOpcyBkJ3VuYSBtb2RhLCBvIG5vIHRlbmlyLW5lIGNhcC4gTm8gw6lzIGNhcCBlcnJvciBkZWwgY8OgbGN1bDogw6lzIHVuYSBwcm9waWV0YXQgZGUgbGVzIGRhZGVzLiJ9"
  },
  {
   "id": "262c",
   "ex": 262,
   "ap": "c",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 2,
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
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQWl4w7Igw6lzIGxhIG1lZGlhbmEgKGVsIHZhbG9yIGNlbnRyYWwgdW4gY29wIG9yZGVuYWRlcykuIExhIG1vZGEgw6lzIGVsIHZhbG9yIHF1ZSBzdXJ0IG3DqXMgdmVnYWRlcywgZXN0aWd1aSBvbiBlc3RpZ3VpLiIsICJIYXMgZG9uYXQgcXVhbnRlcyB2ZWdhZGVzIGVzIHJlcGV0ZWl4LCBubyBRVUlOIHZhbG9yIGVzIHJlcGV0ZWl4LiBMYSBtb2RhIMOpcyBsYSBkYWRhLCBubyBlbCBzZXUgcmVjb21wdGUuIiwgIkVsIG3DqXMgZ3JhbiBkZSB0b3RzIG5vIHTDqSByZXMgYSB2ZXVyZSBhbWIgbGEgbW9kYTogZWwgcXVlIGNvbXB0YSDDqXMgcXVhbnRlcyB2ZWdhZGVzIHN1cnQgY2FkYSB2YWxvciwgbm8gY29tIGRlIGdyYW4gw6lzLiJdLCAiZXJyIjogWyIiLCAiTUVESUFOQV9QRVJfTU9EQSIsICJNT0RBX1BFUl9GUkVRVUVOQ0lBIiwgIkVMX01FU19HUkFOIl0sICJyZXMiOiBbIlJlY29tcHRlOiAkMVxcdG8xJCwgJDJcXHRvMSQsICQzXFx0bzEkLCAkNFxcdG8xJCwgJDVcXHRvMSQiLCAiQ2FwIHZhbG9yIG5vIGRlc3RhY2E6IGxhIGRpc3RyaWJ1Y2nDsyDDqXMgYW1vZGFsIl0sICJjb20iOiAiVW5hIGRpc3RyaWJ1Y2nDsyBwb3QgdGVuaXIgbcOpcyBkJ3VuYSBtb2RhLCBvIG5vIHRlbmlyLW5lIGNhcC4gTm8gw6lzIGNhcCBlcnJvciBkZWwgY8OgbGN1bDogw6lzIHVuYSBwcm9waWV0YXQgZGUgbGVzIGRhZGVzLiJ9"
  },
  {
   "id": "262d",
   "ex": 262,
   "ap": "d",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 2,
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
   "dif": 3,
   "encapcalament": "En un grup d'alumnes s'ha comptat quants viatges ha fet cadascun. La taula de freqüències és: $x_i=1$ amb $f_i=1$, $x_i=2$ amb $f_i=3$, $x_i=3$ amb $f_i=7$, $x_i=4$ amb $f_i=4$, $x_i=5$ amb $f_i=3$, $x_i=6$ amb $f_i=2$. Calcula, a partir de la taula:",
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
   "dif": 3,
   "encapcalament": "En un grup d'alumnes s'ha comptat quants viatges ha fet cadascun. La taula de freqüències és: $x_i=1$ amb $f_i=1$, $x_i=2$ amb $f_i=3$, $x_i=3$ amb $f_i=7$, $x_i=4$ amb $f_i=4$, $x_i=5$ amb $f_i=3$, $x_i=6$ amb $f_i=2$. Calcula, a partir de la taula:",
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
   "dif": 3,
   "encapcalament": "En un grup d'alumnes s'ha comptat quants viatges ha fet cadascun. La taula de freqüències és: $x_i=1$ amb $f_i=1$, $x_i=2$ amb $f_i=3$, $x_i=3$ amb $f_i=7$, $x_i=4$ amb $f_i=4$, $x_i=5$ amb $f_i=3$, $x_i=6$ amb $f_i=2$. Calcula, a partir de la taula:",
   "enunciat": "La moda.",
   "opcions": [
    "$7$",
    "$\\dfrac{71}{20}$",
    "$3$",
    "$6$"
   ],
   "pistes": [
    "Busca la freqüència més alta de la taula.",
    "Compte: la moda és el valor $x_i$ que té aquesta freqüència, no la freqüència mateixa."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgZG9uYXQgbGEgZnJlccO8w6huY2lhIG3DoHhpbWEgKCQ3JCBhbHVtbmVzKSwgbm8gZWwgdmFsb3IgcXVlIGxhIHTDqS4iLCAiQXF1ZXN0YSDDqXMgbGEgbWl0amFuYS4gTGEgbW9kYSBoYSBkZSBzZXIgdW4gZGVscyB2YWxvcnMgZGUgbGEgdGF1bGEuIiwgIiIsICJFbCAkNiQgw6lzIGVsIG5vbWJyZSBkZSB2aWF0Z2VzIG3DqXMgYWx0LCBwZXLDsiBub23DqXMgbCdoYW4gZmV0ICQyJCBhbHVtbmVzLiBMYSBtb2RhIMOpcyBlbCB2YWxvciBNw4lTIFJFUEVUSVQsIG5vIGVsIG3DqXMgZ3Jhbi4iXSwgImVyciI6IFsiTU9EQV9QRVJfRlJFUVVFTkNJQSIsICJNRURJQU5BX1BFUl9NT0RBIiwgIiIsICJFTF9NRVNfR1JBTiJdLCAicmVzIjogWyJMYSBmcmVxw7zDqG5jaWEgbcOpcyBhbHRhIMOpcyAkZl9pPTckLCBpIGxpIGNvcnJlc3BvbiBlbCB2YWxvciAkeF9pPTMkIl19"
  },
  {
   "id": "265a",
   "ex": 265,
   "ap": "a",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 3,
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
   "dif": 3,
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
   "id": "264",
   "ex": 264,
   "ap": "",
   "bloc": "centralitzacio",
   "tipus": "B",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Una sabateria ha venut aquestes talles de calçat en una setmana: 37, 37, 37, 37, 37, 38, 38, 38, 38, 38, 38, 38, 38, 39, 40, 40, 40, 41, 42, 43. El botiguer ha de decidir de quina talla encarrega més parells. Quina mesura l'ajuda a decidir-ho, i quin valor surt?",
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
   "id": "266a",
   "ex": 266,
   "ap": "a",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Un grup de $5$ amics compara quants llibres ha llegit l'últim any: $3,\\;4,\\;5,\\;6,\\;7$. S'hi afegeix un sisè amic que n'ha llegit $60$.",
   "enunciat": "Què li passa a la mitjana?",
   "opcions": [
    "Puja de $5$ a $60$.",
    "Es queda pràcticament igual.",
    "Puja de $5$ a $14{,}17$: gairebé es triplica.",
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
   "dif": 4,
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
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBZmVnaXIgdW5hIGRhZGEgcGVyIGRhbXVudCBkZSB0b3RlcyBkZXNwbGHDp2EgZWwgY2VudHJlIGNhcCBhbXVudCwgbm8gY2FwIGF2YWxsLiIsICJHYWlyZWLDqTogcGFzc2FyIGRlICQ1JCBhICQ2JCBkYWRlcyBjYW52aWEgY29tIGVzIGJ1c2NhIGVsIGNlbnRyZS4gQW1iICQ2JCBkYWRlcyBjYWwgZmVyIGxhIG1pdGphbmEgZGUgbGVzIGR1ZXMgY2VudHJhbHMsICQ1JCBpICQ2JC4iLCAiTGEgbWVkaWFuYSBub23DqXMgbWlyYSBxdWluIHZhbG9yIHF1ZWRhIGFsIG1pZzogcXVlIGwnw7psdGltIHNpZ3VpICQ4JCBvICQ2MCQgbm8gbGEgbW91LiBQZXIgYWl4w7IgZXMgZGl1IHF1ZSDDqXMgUkVTSVNURU5UIGFscyB2YWxvcnMgZXh0cmVtcy4iLCAiIl0sICJlcnIiOiBbIlZFUkVESUNURV9JTlZFUlRJVCIsICJNRURJQU5BX1NFTlNFX09SREVOQVIiLCAiRVhUUkVNX1NFTlNFX0VGRUNURSIsICIiXSwgInJlcyI6IFsiT3JkZW5hZGVzOiAkMyxcXDs0LFxcOzUsXFw7NixcXDs3LFxcOzYwJCIsICJNZWRpYW5hICQ9XFxkZnJhY3s1KzZ9ezJ9PVxcZGZyYWN7MTF9ezJ9JCIsICJMYSBtaXRqYW5hIHMnaGEgbW9ndXQgJDl7LH0xNyQgcHVudHMgaSBsYSBtZWRpYW5hIG5vbcOpcyAkMHssfTUkOiBxdWFuIGhpIGhhIHZhbG9ycyBleHRyZW1zLCBsYSBtZWRpYW5hIGRlc2NyaXUgbWlsbG9yIGVsIGdydXAiXSwgImNvbSI6ICJBcXVlc3RhIGRpZmVyw6huY2lhIMOpcyBlbCBtb3RpdSBwZWwgcXVhbCBlbHMgc291cyBvIGVscyBwcmV1cyBkZWxzIHBpc29zIGVzIGRvbmVuIHNvdmludCBhbWIgbGEgbWVkaWFuYSBpIG5vIGFtYiBsYSBtaXRqYW5hOiBxdWF0cmUgdmFsb3JzIG1vbHQgYWx0cyBwb2RlbiBkZXNwbGHDp2FyIGxhIG1pdGphbmEgaSBmZXItbGEgcG9jIHJlcHJlc2VudGF0aXZhIGRlbCBxdWUgbGkgcGFzc2EgYSBsYSBtYWpvcmlhLiJ9"
  },
  {
   "id": "267a",
   "ex": 267,
   "ap": "a",
   "bloc": "centralitzacio",
   "tipus": "A",
   "dif": 4,
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
   "dif": 4,
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
  }
 ]
};
