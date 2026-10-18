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
  "CRITERI_AGRUPACIO_MAL": "El criteri per agrupar en intervals no és el nombre de dades sinó com estan repartides: si els valors són molt dispersos i gairebé no es repeteixen, una taula valor a valor no resumeix res.",
  "DISCRETA_CONTINUA_CONFOSES": "Una variable quantitativa és discreta quan només pot prendre valors aïllats (típicament un recompte), i contínua quan pot prendre qualsevol valor decimal dins d'un interval.",
  "ES_POT_DETERMINAR": "Has dit que no es pot saber, però amb les dades de l'enunciat n'hi ha prou. Abans de descartar una pregunta, mira si algun teorema o criteri et permet respondre-la amb el que ja tens.",
  "FREQ_ABSOLUTA_ACUMULADA_CONFOSES": "La freqüència absoluta $f_i$ és el recompte d'un valor concret; la freqüència absoluta acumulada $F_i$ és la suma de totes les freqüències fins a aquell valor, inclòs.",
  "FREQ_RELATIVA_MAL_CALCULADA": "La freqüència relativa d'un valor s'obté dividint la seva freqüència absoluta pel nombre TOTAL de dades, no per cap altre nombre.",
  "F_ACUMULADA_NO_CREIXENT": "La freqüència absoluta acumulada $F_i$ mai pot disminuir a mesura que $i$ creix: cada $F_i$ inclou totes les dades fins aquell punt, així que com a mínim es queda igual.",
  "ORDRE_MULTIPLICACIO_DIVISIO": "La divisió i la multiplicació tenen la mateixa prioritat i es fan d'esquerra a dreta: no es pot agrupar la multiplicació primer perquè \"queda més bé\".",
  "PERCENTATGE_MAL_CALCULAT": "El percentatge d'un valor s'obté multiplicant la seva freqüència relativa per $100$ (o, equivalentment, $\\frac{f_i}{N}\\cdot100$).",
  "QUALITATIVA_QUANTITATIVA_CONFOSES": "Una variable és quantitativa quan s'expressa amb un nombre (encara que no porti unitats), i qualitativa quan expressa una categoria o qualitat que no es mesura numèricament.",
  "RECOMPTE_MAL_FET": "Torna a comptar les dades una per una: és fàcil saltar-se'n alguna o comptar-ne alguna dues vegades en un recompte llarg.",
  "TOTAL_DADES_MAL_CALCULAT": "El nombre total de dades $N$ és la suma de totes les freqüències absolutes (o, equivalentment, l'última freqüència absoluta acumulada).",
  "VEREDICTE_INVERTIT": "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del correcte: torna a comprovar la condició amb els valors concrets de l'enunciat."
 },
 "items": [
  {
   "id": "370a",
   "ex": 370,
   "ap": "a",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Quina és la freqüència absoluta del valor que es demana? És el nombre de vegades que apareix a la llista de dades.",
   "enunciat": "Dades: $2,\\;3,\\;2,\\;5,\\;2,\\;3$. Valor: $2$.",
   "opcions": [
    "$\\dfrac{1}{2}$",
    "$3$",
    "$4$",
    "$6$"
   ],
   "pistes": [
    "Ratlla cada $2$ que trobis a la llista.",
    "Quants n'has ratllat?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBaXjDsiDDqXMgbGEgZnJlccO8w6huY2lhIFJFTEFUSVZBLCAkXFxkZnJhY3szfXs2fSQuIEwnYWJzb2x1dGEgw6lzIGVsIHJlY29tcHRlLCBzZW5zZSBkaXZpZGlyLiIsICIiLCAiVG9ybmEgYSBjb21wdGFyIGxlcyBkYWRlcyB1bmEgcGVyIHVuYTogw6lzIGbDoGNpbCBzYWx0YXItc2UnbiBhbGd1bmEgbyBjb21wdGFyLW5lIGFsZ3VuYSBkdWVzIHZlZ2FkZXMgZW4gdW4gcmVjb21wdGUgbGxhcmcuIiwgIiQ2JCDDqXMgZWwgbm9tYnJlIHRvdGFsIGRlIGRhZGVzLiBFcyBkZW1hbmEgcXVhbnRlcyB2ZWdhZGVzIHN1cnQgZWwgJDIkLiJdLCAiZXJyIjogWyJGUkVRX1JFTEFUSVZBX01BTF9DQUxDVUxBREEiLCAiIiwgIlJFQ09NUFRFX01BTF9GRVQiLCAiVE9UQUxfREFERVNfTUFMX0NBTENVTEFUIl0sICJyZXMiOiBbIiRcXHVuZGVybGluZXsyfSxcXDszLFxcO1xcdW5kZXJsaW5lezJ9LFxcOzUsXFw7XFx1bmRlcmxpbmV7Mn0sXFw7MyQ6IGVsICQyJCBzdXJ0ICQzJCB2ZWdhZGVzLiJdfQ=="
  },
  {
   "id": "370b",
   "ex": 370,
   "ap": "b",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Quina és la freqüència absoluta del valor que es demana? És el nombre de vegades que apareix a la llista de dades.",
   "enunciat": "Dades: $1,\\;4,\\;4,\\;1,\\;4,\\;0,\\;4$. Valor: $4$.",
   "opcions": [
    "$4$",
    "$\\dfrac{4}{7}$",
    "$7$",
    "$3$"
   ],
   "pistes": [
    "Ratlla cada $4$ que trobis a la llista.",
    "Quants n'has ratllat?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQWl4w7Igw6lzIGxhIGZyZXHDvMOobmNpYSBSRUxBVElWQS4gTCdhYnNvbHV0YSDDqXMgZWwgcmVjb21wdGUsIHNlbnNlIGRpdmlkaXIgcGVsIHRvdGFsLiIsICIkNyQgw6lzIGVsIG5vbWJyZSB0b3RhbCBkZSBkYWRlcy4gRXMgZGVtYW5hIHF1YW50ZXMgdmVnYWRlcyBzdXJ0IGVsICQ0JC4iLCAiVG9ybmEgYSBjb21wdGFyIGxlcyBkYWRlcyB1bmEgcGVyIHVuYTogw6lzIGbDoGNpbCBzYWx0YXItc2UnbiBhbGd1bmEgbyBjb21wdGFyLW5lIGFsZ3VuYSBkdWVzIHZlZ2FkZXMgZW4gdW4gcmVjb21wdGUgbGxhcmcuIl0sICJlcnIiOiBbIiIsICJGUkVRX1JFTEFUSVZBX01BTF9DQUxDVUxBREEiLCAiVE9UQUxfREFERVNfTUFMX0NBTENVTEFUIiwgIlJFQ09NUFRFX01BTF9GRVQiXSwgInJlcyI6IFsiJDEsXFw7XFx1bmRlcmxpbmV7NH0sXFw7XFx1bmRlcmxpbmV7NH0sXFw7MSxcXDtcXHVuZGVybGluZXs0fSxcXDswLFxcO1xcdW5kZXJsaW5lezR9JDogZWwgJDQkIHN1cnQgJDQkIHZlZ2FkZXMuIl19"
  },
  {
   "id": "220a",
   "ex": 220,
   "ap": "a",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "El nombre d'hores diàries d'estudi de 30 alumnes és: 3, 4, 3, 5, 5, 2, 1, 3, 2, 0, 1, 1, 1, 1, 2, 0, 3, 2, 2, 1, 3, 4, 5, 0, 2, 1, 2, 1, 4, 3.",
   "enunciat": "Quina és la freqüència absoluta del valor $x_i=1$ hora?",
   "opcions": [
    "$7$",
    "$3$",
    "$8$",
    "$30$"
   ],
   "pistes": [
    "Recorre la llista de $30$ dades i marca cada vegada que trobis un $1$.",
    "Per no perdre-te'n cap, ves de deu en deu dades. Per comprovar-ho, compta també els altres valors: tots junts han de sumar $30$."
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
   "dif": 2,
   "encapcalament": "El nombre d'hores diàries d'estudi de 30 alumnes és: 3, 4, 3, 5, 5, 2, 1, 3, 2, 0, 1, 1, 1, 1, 2, 0, 3, 2, 2, 1, 3, 4, 5, 0, 2, 1, 2, 1, 4, 3.",
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
   "dif": 2,
   "encapcalament": "El nombre d'hores diàries d'estudi de 30 alumnes és: 3, 4, 3, 5, 5, 2, 1, 3, 2, 0, 1, 1, 1, 1, 2, 0, 3, 2, 2, 1, 3, 4, 5, 0, 2, 1, 2, 1, 4, 3.",
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
   "id": "226a",
   "ex": 226,
   "ap": "a",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 2,
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
    "No cal fer cap càlcul: si divideixes entre $50$, obtens la freqüència relativa, que és una altra cosa."
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "id": "221a",
   "ex": 221,
   "ap": "a",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "id": "224a",
   "ex": 224,
   "ap": "a",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Per fer un estudi fem una enquesta entre el jovent d'un barri i els preguntem pel nombre de vegades que van al cinema cada setmana. Els resultats de l'enquesta (50 persones) són: 0, 0, 2, 3, 5, 1, 3, 2, 0, 0, 4, 1, 2, 4, 3, 1, 2, 3, 2, 2, 1, 1, 1, 3, 2, 1, 1, 1, 1, 1, 2, 1, 5, 4, 0, 0, 2, 2, 4, 1, 3, 5, 2, 3, 2, 2, 0, 1, 1, 1.",
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
   "dif": 3,
   "encapcalament": "Per fer un estudi fem una enquesta entre el jovent d'un barri i els preguntem pel nombre de vegades que van al cinema cada setmana. Els resultats de l'enquesta (50 persones) són: 0, 0, 2, 3, 5, 1, 3, 2, 0, 0, 4, 1, 2, 4, 3, 1, 2, 3, 2, 2, 1, 1, 1, 3, 2, 1, 1, 1, 1, 1, 2, 1, 5, 4, 0, 0, 2, 2, 4, 1, 3, 5, 2, 3, 2, 2, 0, 1, 1, 1.",
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
   "dif": 3,
   "encapcalament": "Per fer un estudi fem una enquesta entre el jovent d'un barri i els preguntem pel nombre de vegades que van al cinema cada setmana. Els resultats de l'enquesta (50 persones) són: 0, 0, 2, 3, 5, 1, 3, 2, 0, 0, 4, 1, 2, 4, 3, 1, 2, 3, 2, 2, 1, 1, 1, 3, 2, 1, 1, 1, 1, 1, 2, 1, 5, 4, 0, 0, 2, 2, 4, 1, 3, 5, 2, 3, 2, 2, 0, 1, 1, 1.",
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
   "dif": 3,
   "encapcalament": "Per fer un estudi fem una enquesta entre el jovent d'un barri i els preguntem pel nombre de vegades que van al cinema cada setmana. Els resultats de l'enquesta (50 persones) són: 0, 0, 2, 3, 5, 1, 3, 2, 0, 0, 4, 1, 2, 4, 3, 1, 2, 3, 2, 2, 1, 1, 1, 3, 2, 1, 1, 1, 1, 1, 2, 1, 5, 4, 0, 0, 2, 2, 4, 1, 3, 5, 2, 3, 2, 2, 0, 1, 1, 1.",
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
   "dif": 3,
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
   "dif": 3,
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
   "id": "235a",
   "ex": 235,
   "ap": "a",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 3,
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
   "dif": 3,
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
   "id": "234a",
   "ex": 234,
   "ap": "a",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 3,
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
   "dif": 3,
   "encapcalament": "El nombre de vegades que es va llogar cada mes la pista de tennis d'un poliesportiu: Gener $100$, Febrer $70$, Març $97$, Abril $60$, Maig $62$, Juny $120$, Juliol $100$, Agost $78$, Setembre $66$, Octubre $126$, Novembre $69$, Desembre $90$.",
   "enunciat": "En quin percentatge de mesos es va llogar la pista MÉS de $80$ vegades?",
   "opcions": [
    "$41{,}7\\,\\%$",
    "$6\\,\\%$",
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
   "id": "223a",
   "ex": 223,
   "ap": "a",
   "bloc": "frequencies",
   "tipus": "A",
   "dif": 4,
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
    "El $50\\,\\%$ és la meitat del total."
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
   "dif": 4,
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
   "dif": 4,
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
  }
 ]
};
