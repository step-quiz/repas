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
  "DIAGRAMA_HISTOGRAMA_CONFOSOS": "El diagrama de barres (amb separació entre barres) s'utilitza per a variables discretes o qualitatives; l'histograma (sense separació) s'utilitza per a variables contínues agrupades en intervals.",
  "ESCALA_ALTERA_DADES": "Canviar l'escala vertical d'un gràfic no crea ni elimina cap dada: la forma es manté, només canvien els números de l'eix.",
  "ES_POT_DETERMINAR": "Has dit que no es pot saber, però amb les dades de l'enunciat n'hi ha prou. Abans de descartar una pregunta, mira si algun teorema o criteri et permet respondre-la amb el que ja tens.",
  "FREQ_ABSOLUTA_ACUMULADA_CONFOSES": "La freqüència absoluta $f_i$ és el recompte d'un valor concret; la freqüència absoluta acumulada $F_i$ és la suma de totes les freqüències fins a aquell valor, inclòs.",
  "FREQ_RELATIVA_MAL_CALCULADA": "La freqüència relativa d'un valor s'obté dividint la seva freqüència absoluta pel nombre TOTAL de dades, no per cap altre nombre.",
  "F_ACUMULADA_NO_CREIXENT": "La freqüència absoluta acumulada $F_i$ mai pot disminuir a mesura que $i$ creix: cada $F_i$ inclou totes les dades fins aquell punt, així que com a mínim es queda igual.",
  "INTERVAL_LIMIT_MAL_ASSIGNAT": "Revisa a quin interval pertany cada dada: amb intervals $[a,b)$, el límit inferior $a$ hi pertany però el superior $b$ no (pertany al següent interval).",
  "PERCENTATGE_MAL_CALCULAT": "El percentatge d'un valor s'obté multiplicant la seva freqüència relativa per $100$ (o, equivalentment, $\\frac{f_i}{N}\\cdot100$).",
  "POLIGON_MAL_CONSTRUIT": "El polígon de freqüències s'obté unint amb segments els punts que marquen l'alçada de cada barra, en l'ordre dels valors de la variable.",
  "RECOMPTE_MAL_FET": "Torna a comptar les dades una per una: és fàcil saltar-se'n alguna o comptar-ne alguna dues vegades en un recompte llarg.",
  "SECTOR_ANGLE_MAL_CALCULAT": "L'angle de cada sector s'obté multiplicant la seva freqüència relativa pels $360^\\circ$ totals de la circumferència, no per cap altre nombre.",
  "TOTAL_DADES_MAL_CALCULAT": "El nombre total de dades $N$ és la suma de totes les freqüències absolutes (o, equivalentment, l'última freqüència absoluta acumulada).",
  "VEREDICTE_INVERTIT": "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del correcte: torna a comprovar la condició amb els valors concrets de l'enunciat."
 },
 "items": [
  {
   "id": "371a",
   "ex": 371,
   "ap": "a",
   "bloc": "grafics",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula l'angle del sector que correspon a aquesta categoria en un gràfic de sectors. Tot el cercle són $360^\\circ$.",
   "enunciat": "La categoria és la meitat de les dades ($50\\,\\%$).",
   "opcions": [
    "$180^\\circ$",
    "$50^\\circ$",
    "$90^\\circ$",
    "$360^\\circ$"
   ],
   "pistes": [
    "La meitat de les dades és la meitat del cercle.",
    "$360:2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIHBvc2F0IGVsIHBlcmNlbnRhdGdlIGNvbSBzaSBmb3NzaW4gZ3JhdXMuIEwnYW5nbGUgZGUgY2FkYSBzZWN0b3IgcydvYnTDqSBtdWx0aXBsaWNhbnQgbGEgc2V2YSBmcmVxw7zDqG5jaWEgcmVsYXRpdmEgcGVscyAkMzYwXlxcY2lyYyQgdG90YWxzIGRlIGxhIGNpcmN1bWZlcsOobmNpYSwgbm8gcGVyIGNhcCBhbHRyZSBub21icmUuIiwgIiQ5MF5cXGNpcmMkIMOpcyB1biBxdWFydCBkZSBjZXJjbGUuIExhIG1laXRhdCBkZSAkMzYwXlxcY2lyYyQgw6lzICQxODBeXFxjaXJjJC4iLCAiJDM2MF5cXGNpcmMkIMOpcyB0b3QgZWwgY2VyY2xlLiBBcXVlc3RhIGNhdGVnb3JpYSBub23DqXMgbifDqXMgbGEgbWVpdGF0LiJdLCAiZXJyIjogWyIiLCAiU0VDVE9SX0FOR0xFX01BTF9DQUxDVUxBVCIsICJTRUNUT1JfQU5HTEVfTUFMX0NBTENVTEFUIiwgIlNFQ1RPUl9BTkdMRV9NQUxfQ0FMQ1VMQVQiXSwgInJlcyI6IFsiJFxcZGZyYWN7MX17Mn1cXGNkb3QzNjBeXFxjaXJjPTE4MF5cXGNpcmMkIl19"
  },
  {
   "id": "371b",
   "ex": 371,
   "ap": "b",
   "bloc": "grafics",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula l'angle del sector que correspon a aquesta categoria en un gràfic de sectors. Tot el cercle són $360^\\circ$.",
   "enunciat": "La categoria és la quarta part de les dades ($25\\,\\%$).",
   "opcions": [
    "$100^\\circ$",
    "$90^\\circ$",
    "$25^\\circ$",
    "$45^\\circ$"
   ],
   "pistes": [
    "La quarta part de les dades és la quarta part del cercle.",
    "$360:4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgZmV0ICQyNVxcY2RvdDQkLiBFcyBkaXZpZGVpeCBlbCBjZXJjbGUgZW4gcXVhdHJlOiAkMzYwOjQkLiIsICIiLCAiSGFzIHBvc2F0IGVsIHBlcmNlbnRhdGdlIGNvbSBzaSBmb3NzaW4gZ3JhdXMuIEwnYW5nbGUgZGUgY2FkYSBzZWN0b3IgcydvYnTDqSBtdWx0aXBsaWNhbnQgbGEgc2V2YSBmcmVxw7zDqG5jaWEgcmVsYXRpdmEgcGVscyAkMzYwXlxcY2lyYyQgdG90YWxzIGRlIGxhIGNpcmN1bWZlcsOobmNpYSwgbm8gcGVyIGNhcCBhbHRyZSBub21icmUuIiwgIkhhcyBwcmVzICQxODBeXFxjaXJjJCBjb20gc2kgZm9zIGVsIGNlcmNsZSBzZW5jZXIuIFRvdCBlbCBjZXJjbGUgc8OzbiAkMzYwXlxcY2lyYyQ6ICQzNjA6ND05MCQuIl0sICJlcnIiOiBbIlNFQ1RPUl9BTkdMRV9NQUxfQ0FMQ1VMQVQiLCAiIiwgIlNFQ1RPUl9BTkdMRV9NQUxfQ0FMQ1VMQVQiLCAiU0VDVE9SX0FOR0xFX01BTF9DQUxDVUxBVCJdLCAicmVzIjogWyIkXFxkZnJhY3sxfXs0fVxcY2RvdDM2MF5cXGNpcmM9OTBeXFxjaXJjJCJdfQ=="
  },
  {
   "id": "227",
   "ex": 227,
   "ap": "",
   "bloc": "grafics",
   "tipus": "A",
   "dif": 2,
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
   "id": "229",
   "ex": 229,
   "ap": "",
   "bloc": "grafics",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Dels 30 assistents a un sopar d'empresa, el $30\\,\\%$ va menjar vedella, el $40\\,\\%$, xai, i la resta va menjar peix. Representa les dades en un gràfic de sectors.",
   "enunciat": "Quin angle ocupa el sector corresponent al xai en el gràfic de sectors?",
   "opcions": [
    "$144^\\circ$",
    "$12^\\circ$",
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
   "encapcalament": "Construeix la taula de freqüències a partir del polígon de freqüències següent (amb els punts $(5,1)$, $(10,3)$, $(15,4)$, $(20,4)$, $(25,7)$ i $(30,6)$).",
   "enunciat": "Quantes dades en total representa aquest polígon de freqüències?",
   "opcions": [
    "$6$ dades",
    "$25$ dades",
    "$7$ dades",
    "$30$ dades"
   ],
   "pistes": [
    "El total de dades és la suma de totes les freqüències absolutes.",
    "Les freqüències són la segona coordenada de cada punt del polígon (les alçades), no els valors $5$, $10$, $15$…"
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyIkNiQgw6lzIGVsIG5vbWJyZSBkZSBwdW50cyAodmFsb3JzIGRpZmVyZW50cyBkZSAkeF9pJCkgcXVlIHTDqSBlbCBwb2zDrWdvbiwgbm8gZWwgdG90YWwgZGUgZGFkZXM6IGNhbCBzdW1hciBsZXMgZnJlccO8w6huY2llcyBkZSBjYWRhc2N1bi4iLCAiIiwgIiQ3JCDDqXMgbm9tw6lzIGxhIGZyZXHDvMOobmNpYSBtw6lzIGFsdGEgZCdlbnRyZSBlbHMgcHVudHMgKCRmKDI1KT03JCksIG5vIGxhIHN1bWEgZGUgdG90ZXMuIiwgIiQzMCQgw6lzIGwnw7psdGltIHZhbG9yIGRlIGxhIHZhcmlhYmxlICgkeF9pPTMwJCksIG5vIGVsIHRvdGFsIGRlIGRhZGVzOiBlbCB0b3RhbCDDqXMgbGEgc3VtYSBkZSB0b3RlcyBsZXMgZnJlccO8w6huY2llcywgbm8gZWwgdmFsb3IgbcOpcyBncmFuIGRlICR4X2kkLiJdLCAiZXJyIjogWyJUT1RBTF9EQURFU19NQUxfQ0FMQ1VMQVQiLCAiIiwgIlJFQ09NUFRFX01BTF9GRVQiLCAiVE9UQUxfREFERVNfTUFMX0NBTENVTEFUIl0sICJyZXMiOiBbIiROPTErMys0KzQrNys2PTI1JCJdfQ=="
  },
  {
   "id": "234c",
   "ex": 234,
   "ap": "c",
   "bloc": "grafics",
   "tipus": "A",
   "dif": 3,
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
   "id": "228a",
   "ex": 228,
   "ap": "a",
   "bloc": "grafics",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Les estatures, en centímetres, d'un grup de 27 joves són: 155, 178, 170, 165, 173, 168, 160, 166, 176, 169, 158, 170, 179, 161, 164, 156, 170, 171, 167, 151, 163, 158, 164, 174, 176, 164, 154. Fes servir intervals d'amplitud $5$ per formar una taula de freqüències.",
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
   "dif": 4,
   "encapcalament": "Les estatures, en centímetres, d'un grup de 27 joves són: 155, 178, 170, 165, 173, 168, 160, 166, 176, 169, 158, 170, 179, 161, 164, 156, 170, 171, 167, 151, 163, 158, 164, 174, 176, 164, 154. Fes servir intervals d'amplitud $5$ per formar una taula de freqüències.",
   "enunciat": "Quina és la freqüència absoluta acumulada de l'interval $[165,170)$?",
   "opcions": [
    "$12$",
    "$17$",
    "$5$",
    "$27$"
   ],
   "pistes": [
    "L'acumulada d'un interval és la seva freqüència més les de tots els intervals anteriors.",
    "Els anteriors tenen $2$, $4$ i $6$ joves. Falta comptar els de $[165,170)$: el $170$ ja no hi entra."
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
   "dif": 4,
   "encapcalament": "Les estatures, en centímetres, d'un grup de 27 joves són: 155, 178, 170, 165, 173, 168, 160, 166, 176, 169, 158, 170, 179, 161, 164, 156, 170, 171, 167, 151, 163, 158, 164, 174, 176, 164, 154. Fes servir intervals d'amplitud $5$ per formar una taula de freqüències.",
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
   "id": "232a",
   "ex": 232,
   "ap": "a",
   "bloc": "grafics",
   "tipus": "B",
   "dif": 4,
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
   "dif": 4,
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
   "dif": 4,
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
  }
 ]
};
