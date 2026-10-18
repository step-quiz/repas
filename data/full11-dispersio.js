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
  "ARREL_MAL_APLICADA": "L'arrel no s'ha aplicat on tocava. Aïlla primer la quantitat que va sota l'arrel i fes-la al final, sobre el valor ja aïllat.",
  "ARREL_OBLIDADA": "T'has quedat amb el quadrat (o el cub) de la incògnita. De $x^2=k$ encara falta l'arrel per arribar a $x$: comprova sempre quina de les dues quantitats et demanen.",
  "CONSTANT_AFECTA_DISPERSIO": "SUMAR el mateix a totes les dades les desplaça totes igual: el centre es mou però les distàncies entre elles no, i la dispersió es manté. MULTIPLICAR, en canvi, sí que estira les distàncies i canvia la dispersió.",
  "CV_SENSE_DIVIDIR": "Has comparat dues desviacions típiques directament. Com que van en les unitats de cada variable, no es poden comparar entre magnituds diferents: cal dividir cada $\\sigma$ entre la seva mitjana (coeficient de variació).",
  "DESVIACIONS_AL_QUADRAT": "Has elevat al quadrat quan es demanaven les desviacions tal com són, amb el seu signe.",
  "DESVIACIONS_SENSE_QUADRAT": "Has sumat les desviacions sense elevar-les al quadrat, i per això et dona zero. Sempre dona zero, amb qualsevol conjunt de dades: és exactament el motiu pel qual la variància les eleva al quadrat.",
  "DIVISIO_OBLIDADA": "T'has quedat amb la suma sense dividir-la entre el nombre de dades. La variància és una MITJANA de quadrats, no una suma.",
  "EL_MES_GRAN": "El més gran dels nombres només és el m.c.m. si tots els altres el divideixen. Comprova-ho abans de donar-lo per bo.",
  "ES_POT_DETERMINAR": "Has dit que no es pot saber, però amb les dades de l'enunciat n'hi ha prou. Abans de descartar una pregunta, mira si algun teorema o criteri et permet respondre-la amb el que ja tens.",
  "EXTREM_SENSE_EFECTE": "Has donat per fet que una dada molt gran o molt petita no canvia res. La mitjana sí que se'n ressent, perquè surt de sumar-ho tot; la mediana molt menys, perquè només mira quin valor queda al mig.",
  "FREQUENCIA_NO_PONDERADA": "Amb una taula de freqüències, cada valor s'ha de multiplicar per la seva freqüència abans de sumar: $\\bar{x}=\\frac{\\sum x_i f_i}{N}$. Fer la mitjana només dels valors diferents ignora quantes vegades surt cadascun.",
  "INVERTIDA": "Has invertit la fracció. Simplificar no canvia quin terme és a dalt i quin a baix.",
  "MESURA_MAL_TRIADA": "El càlcul és correcte, però aquesta mesura no respon la pregunta que t'han fet. Abans de calcular, decideix si et pregunten on és el centre (mitjana, mediana), què es repeteix més (moda) o com d'esteses estan les dades (recorregut, desviació típica).",
  "MITJANA_NO_DIU_DISPERSIO": "La mitjana diu on és el centre, no com d'agrupades estan les dades al seu voltant. Dos conjunts amb la mateixa mitjana poden ser completament diferents: per això calen les mesures de dispersió.",
  "PAS_INTERMEDI_PER_RESPOSTA": "El valor que has triat és correcte, però és un pas intermedi, no el que et demanen. Torna a llegir la pregunta i mira quina magnitud has d'acabar donant: sovint només falta una operació més.",
  "PERCENTATGE_DECIMAL_MAL": "El pas de tant per cent a decimal no és correcte: es divideix per $100$, així que $0{,}8\\,\\%=0{,}008$ i $8\\,\\%=0{,}08$. Compta les xifres.",
  "PRODUCTE_PER_SUMA": "Has sumat on tocava multiplicar (o al revés). Torna a llegir quina operació es fa sobre les dades.",
  "RANG_PER_MEDIANA": "Has donat el recorregut on es demanava una mesura de centre. El recorregut diu com d'esteses estan les dades, no on és el mig.",
  "SIGNE_FINAL": "El resultat té el signe canviat. Revisa quin dels dos termes és més gran en valor absolut.",
  "VALOR_ABSOLUT_INDEGUT": "Has pres els valors absoluts on tocaven els valors amb signe (o al revés). Compte: el quadrat de $-3$ és $9$, no $3$.",
  "VARIANCIA_PER_DESVIACIO": "Has confós la variància amb la desviació típica. La desviació típica és l'ARREL de la variància, i va en les mateixes unitats que les dades.",
  "VEREDICTE_INVERTIT": "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del correcte: torna a comprovar la condició amb els valors concrets de l'enunciat."
 },
 "items": [
  {
   "id": "373a",
   "ex": 373,
   "ap": "a",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el recorregut (o rang) d'aquestes dades, que ja estan ordenades: la dada més gran menys la més petita.",
   "enunciat": "$2,\\;5,\\;11$",
   "opcions": [
    "$11$",
    "$5$",
    "$13$",
    "$9$"
   ],
   "pistes": [
    "Quina és la dada més gran? I la més petita?",
    "$11-2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyIkMTEkIMOpcyBsYSBkYWRhIG3DqXMgZ3Jhbi4gTGkgZmFsdGEgcmVzdGFyLWhpIGxhIG3DqXMgcGV0aXRhOiAkMTEtMiQuIiwgIiQ1JCDDqXMgbGEgZGFkYSBkZWwgbWlnLiBFbCByZWNvcnJlZ3V0IMOpcyBsYSBkaXN0w6BuY2lhIGVudHJlIGVscyBkb3MgZXh0cmVtczogJDExLTIkLiIsICJIYXMgc3VtYXQgZWxzIGV4dHJlbXMuIEVsIHJlY29ycmVndXQgw6lzIGxhIHNldmEgRElGRVLDiE5DSUE6ICQxMS0yJC4iLCAiIl0sICJlcnIiOiBbIkVMX01FU19HUkFOIiwgIlJBTkdfUEVSX01FRElBTkEiLCAiUFJPRFVDVEVfUEVSX1NVTUEiLCAiIl0sICJyZXMiOiBbIlJlY29ycmVndXQgJD0xMS0yPTkkIl19"
  },
  {
   "id": "373b",
   "ex": 373,
   "ap": "b",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el recorregut (o rang) d'aquestes dades, que ja estan ordenades: la dada més gran menys la més petita.",
   "enunciat": "$4,\\;6,\\;9,\\;14$",
   "opcions": [
    "$10$",
    "$7{,}5$",
    "$18$",
    "$14$"
   ],
   "pistes": [
    "Quina és la dada més gran? I la més petita?",
    "$14-4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJDd7LH01JCDDqXMgbGEgbWVkaWFuYSwgZWwgdmFsb3IgZGVsIG1pZy4gRWwgcmVjb3JyZWd1dCDDqXMgbGEgZGlzdMOgbmNpYSBlbnRyZSBlbHMgZG9zIGV4dHJlbXM6ICQxNC00JC4iLCAiSGFzIHN1bWF0IGVscyBleHRyZW1zLiBFbCByZWNvcnJlZ3V0IMOpcyBsYSBzZXZhIERJRkVSw4hOQ0lBOiAkMTQtNCQuIiwgIiQxNCQgw6lzIGxhIGRhZGEgbcOpcyBncmFuLiBMaSBmYWx0YSByZXN0YXItaGkgbGEgbcOpcyBwZXRpdGE6ICQxNC00JC4iXSwgImVyciI6IFsiIiwgIlJBTkdfUEVSX01FRElBTkEiLCAiUFJPRFVDVEVfUEVSX1NVTUEiLCAiRUxfTUVTX0dSQU4iXSwgInJlcyI6IFsiUmVjb3JyZWd1dCAkPTE0LTQ9MTAkIl19"
  },
  {
   "id": "268a",
   "ex": 268,
   "ap": "a",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 2,
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
   "dif": 2,
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
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3Qgw6lzIGVsIHZhbG9yIG3DqXMgZ3Jhbi4gRWwgcmVjb3JyZWd1dCDDqXMgbGEgZGlzdMOgbmNpYSBlbnRyZSBsJ2V4dHJlbSBkZSBkYWx0IGkgZWwgZGUgYmFpeDogJDMtMyQuIiwgIkVsIHJlY29ycmVndXQgw6lzIHVuYSBSRVNUQTogZWwgbcOpcyBncmFuIG1lbnlzIGVsIG3DqXMgcGV0aXQuIiwgIlPDrSBxdWUgZXMgcG90OiBzaSB0b3RlcyBsZXMgZGFkZXMgdmFsZW4gZWwgbWF0ZWl4LCBlbCBtw6lzIGdyYW4gaSBlbCBtw6lzIHBldGl0IGNvaW5jaWRlaXhlbiBpIGVsIHJlY29ycmVndXQgdmFsICQwJC4gWmVybyBubyB2b2wgZGlyIFwiaW1wb3NzaWJsZVwiLCB2b2wgZGlyIHF1ZSBubyBoaSBoYSBnZW5zIGRlIGRpc3BlcnNpw7MuIiwgIiJdLCAiZXJyIjogWyJQQVNfSU5URVJNRURJX1BFUl9SRVNQT1NUQSIsICJTSUdORV9GSU5BTCIsICJFU19QT1RfREVURVJNSU5BUiIsICIiXSwgInJlcyI6IFsiJFI9eF97XFxtYXh9LXhfe1xcbWlufT0zLTM9MCQiXX0="
  },
  {
   "id": "268c",
   "ex": 268,
   "ap": "c",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 2,
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
   "dif": 3,
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
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQWl4w7Igw6lzIGxhIHN1bWEgZGVscyB2YWxvcnMgYWJzb2x1dHMuIExlcyBkZXN2aWFjaW9ucyB2YW4gYW1iIHNpZ25lLCBpIGxlcyBuZWdhdGl2ZXMgY29tcGVuc2VuIGxlcyBwb3NpdGl2ZXMuIiwgIkFpeMOyIMOpcyBsYSBzdW1hIGRlbHMgcXVhZHJhdHMgZGUgbGVzIGRlc3ZpYWNpb25zLCBxdWUgw6lzIGVsIHBhcyBzZWfDvGVudC4gQXF1w60gZXMgZGVtYW5lbiBsZXMgZGVzdmlhY2lvbnMgdGFsIGNvbSBzw7NuLiIsICJBcXVlc3RhIMOpcyBsYSBzdW1hIGRlIGxlcyBkYWRlcywgbm8gbGEgZGUgbGVzIGRlc3ZpYWNpb25zLiJdLCAiZXJyIjogWyIiLCAiVkFMT1JfQUJTT0xVVF9JTkRFR1VUIiwgIkRFU1ZJQUNJT05TX0FMX1FVQURSQVQiLCAiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiXSwgInJlcyI6IFsiRGVzdmlhY2lvbnM6ICQtMyxcXDstMSxcXDstMSxcXDstMSxcXDsrMCxcXDsrMCxcXDsrMixcXDsrNCQiLCAiU3VtYTogJDAkLiBTZW1wcmUgZG9uYSB6ZXJvLCBpIHBlciBhaXjDsiBsZXMgZGVzdmlhY2lvbnMgbm8gc2VydmVpeGVuIGRpcmVjdGFtZW50IHBlciBtZXN1cmFyIGxhIGRpc3BlcnNpw7M6IGNhbCBlbGV2YXItbGVzIGFsIHF1YWRyYXQuIl19"
  },
  {
   "id": "269b",
   "ex": 269,
   "ap": "b",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "id": "272a",
   "ex": 272,
   "ap": "a",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Dos grups de $6$ alumnes han fet el mateix examen. Grup A: 5, 5, 5, 5, 5, 5. Grup B: 1, 3, 5, 5, 7, 9.",
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
   "dif": 3,
   "encapcalament": "Dos grups de $6$ alumnes han fet el mateix examen. Grup A: 5, 5, 5, 5, 5, 5. Grup B: 1, 3, 5, 5, 7, 9.",
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
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJTw60gcXVlIHNlJ24gcG90IHBvc2FyOiBsYSBkZXN2aWFjacOzIHTDrXBpY2Egw6lzIGV4YWN0YW1lbnQgZWwgbsO6bWVybyBxdWUgbWVzdXJhIGFpeMOyLiIsICIiLCAiTGEgbWl0amFuYSBkaXUgb24gw6lzIGVsIGNlbnRyZSwgbm8gY29tIGQnYWdydXBhZGVzIGVzdGFuIGxlcyBkYWRlcyBhbCBzZXUgdm9sdGFudC4gUGVyIGFpeMOyIGNhbGVuIGxlcyBtZXN1cmVzIGRlIGRpc3BlcnNpw7M6IGRvcyBncnVwcyBhbWIgbGEgbWF0ZWl4YSBtaXRqYW5hIHBvZGVuIHNlciBjb21wbGV0YW1lbnQgZGlmZXJlbnRzLiIsICJTZXIgcmVndWxhciB2b2wgZGlyIHF1ZSBsZXMgbm90ZXMgcydhc3NlbWJsZW4gZW50cmUgc2ksIG5vIHF1ZSBzaWd1aW4gYWx0ZXMuIEFsIGdydXAgQiB2YW4gZGUgbCckMSQgYWwgJDkkLiJdLCAiZXJyIjogWyJFU19QT1RfREVURVJNSU5BUiIsICIiLCAiTUlUSkFOQV9OT19ESVVfRElTUEVSU0lPIiwgIlZFUkVESUNURV9JTlZFUlRJVCJdLCAicmVzIjogWyJHcnVwIEE6IHRvdGVzIGxlcyBkZXN2aWFjaW9ucyBzw7NuICQwJCwgYWl4w60gcXVlICRcXHNpZ21hXjI9MCQgaSAkXFxzaWdtYT0wJCIsICJHcnVwIEI6ICRcXHNpZ21hXjI9XFxkZnJhY3syMH17M30kIGkgJFxcc2lnbWE9XFxzcXJ0e1xcZGZyYWN7MjB9ezN9fVxcYXBwcm94MnssfTU4JCIsICJDb20gbcOpcyBwZXRpdGEgw6lzICRcXHNpZ21hJCwgbcOpcyBhZ3J1cGFkZXMgZXN0YW4gbGVzIGRhZGVzOiBlbCBncnVwIEEgw6lzIHBlcmZlY3RhbWVudCByZWd1bGFyIl0sICJjb20iOiAiQXF1ZXN0IHBhcmVsbCBkJ2V4ZXJjaWNpcyDDqXMgZWwgbW90aXUgZGUgc2VyIGRlIHRvdCBlbCBibG9jOiBkdWVzIGRpc3RyaWJ1Y2lvbnMgcG9kZW4gdGVuaXIgbGEgbWF0ZWl4YSBtaXRqYW5hIGkgbm8gYXNzZW1ibGFyLXNlIGdlbnMuIExhIG1pdGphbmEgdG90YSBzb2xhIGdhaXJlYsOpIG1haSBubyBkZXNjcml1IHByb3UgYsOpIHVuIGNvbmp1bnQgZGUgZGFkZXMuIn0="
  },
  {
   "id": "271a",
   "ex": 271,
   "ap": "a",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 4,
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
   "dif": 4,
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
   "id": "273a",
   "ex": 273,
   "ap": "a",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 4,
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
   "dif": 4,
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
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCAkOCQgw6lzIGxhIGRlc3ZpYWNpw7MgdMOtcGljYSwgbm8gZWwgY29lZmljaWVudC4gRWwgY29lZmljaWVudCBzdXJ0IGRlIGRpdmlkaXItbGEgZW50cmUgbGEgbWl0amFuYS4iLCAiSGFzIGRpdmlkaXQgbGEgbWl0amFuYSBlbnRyZSBsYSBkZXN2aWFjacOzIHTDrXBpY2EuIEVsIGNvZWZpY2llbnQgZGUgdmFyaWFjacOzIMOpcyAkQ1Y9XFxkZnJhY3tcXHNpZ21hfXtcXGJhcnt4fX0kLCBubyBhbCByZXbDqXMuIiwgIiIsICJBcXVlc3RzIHPDs24gZWxzIHF1b2NpZW50cyBlbiBkZWNpbWFsOiBwZXIgcGFzc2FyLWxvcyBhIHBlcmNlbnRhdGdlIGVuY2FyYSBmYWx0YSBtdWx0aXBsaWNhciBwZXIgJDEwMCQuIl0sICJlcnIiOiBbIkNWX1NFTlNFX0RJVklESVIiLCAiSU5WRVJUSURBIiwgIiIsICJQRVJDRU5UQVRHRV9ERUNJTUFMX01BTCJdLCAicmVzIjogWyJBbMOnYWRhOiAkQ1Y9XFxkZnJhY3s4fXsxNzB9XFxjZG90MTAwXFxhcHByb3g0eyx9N1xcLFxcJSQiLCAiUGVzOiAkQ1Y9XFxkZnJhY3s4fXs2NX1cXGNkb3QxMDBcXGFwcHJveDEyeyx9M1xcLFxcJSQiLCAiRWwgcGVzIHZhcmlhIGdhaXJlYsOpIGVsIGRvYmxlLCBlbiB0ZXJtZXMgcmVsYXRpdXMiXSwgImNvbSI6ICJFbCBjb2VmaWNpZW50IGRlIHZhcmlhY2nDsyBubyB0w6kgdW5pdGF0cywgaSBwZXIgYWl4w7Igc2VydmVpeCBwZXIgY29tcGFyYXIgbGEgZGlzcGVyc2nDsyBkZSBjb3NlcyBxdWUgZXMgbWVzdXJlbiBlbiB1bml0YXRzIGRpZmVyZW50cy4gw4lzIGVsIHF1ZSBldCBwZXJtZXQgZGlyIHNpIHVuIGdydXAgw6lzIG3DqXMgaXJyZWd1bGFyIGVuIGFsw6dhZGEgbyBlbiBwZXMgc2Vuc2UgY29tcGFyYXIgY2VudMOtbWV0cmVzIGFtYiBxdWlsb2dyYW1zLiJ9"
  },
  {
   "id": "274a",
   "ex": 274,
   "ap": "a",
   "bloc": "dispersio",
   "tipus": "A",
   "dif": 4,
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
   "dif": 4,
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
   "dif": 4,
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
