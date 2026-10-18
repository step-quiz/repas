/* Generat per tools/build.py — no editeu aquest fitxer a mà. */
window.FULL = {
 "full": 12,
 "titol": "Full 12 — Combinatòria i probabilitat",
 "subtitol": "Espais mostrals, diagrames d'arbre, freqüència relativa i regla de Laplace.",
 "blocs": [
  {
   "id": "espais_mostrals",
   "titol": "Espais mostrals i esdeveniments",
   "descripcio": "Espai mostral d'un experiment aleatori, esdeveniments elementals i impossibles, i comparació de probabilitats.",
   "items": [
    "374a",
    "374b",
    "236a",
    "236b",
    "236c",
    "236d",
    "236e",
    "236f",
    "236g",
    "237",
    "239a",
    "239b",
    "239c",
    "239d",
    "239e",
    "240a",
    "240b",
    "240c",
    "240d",
    "240e",
    "238a",
    "238b"
   ]
  },
  {
   "id": "combinatoria",
   "titol": "Combinatòria: principi multiplicatiu",
   "descripcio": "Diagrames d'arbre, mètode del producte, i variacions sense repetició.",
   "items": [
    "375a",
    "375b",
    "244",
    "243",
    "245",
    "247",
    "248a",
    "248b",
    "248c",
    "248d",
    "248e",
    "242",
    "246"
   ]
  },
  {
   "id": "laplace",
   "titol": "Regla de Laplace i freqüència relativa",
   "descripcio": "Probabilitat d'un esdeveniment, freqüència relativa i llei dels grans nombres.",
   "items": [
    "376a",
    "376b",
    "241a",
    "241b",
    "241c",
    "241d",
    "241e",
    "249a",
    "249b",
    "249c",
    "249d",
    "250a",
    "250b",
    "250c",
    "250d",
    "251a",
    "251b",
    "251c",
    "252a",
    "252b",
    "252c"
   ]
  },
  {
   "id": "esdeveniments",
   "titol": "Esdeveniments compostos",
   "descripcio": "Esdeveniments compatibles, incompatibles i contraris, unió i intersecció, i probabilitat condicionada senzilla.",
   "items": [
    "377a",
    "377b",
    "257a",
    "257b",
    "257c",
    "253a",
    "253b",
    "253c",
    "253d",
    "253e",
    "254a",
    "254b",
    "254c",
    "255",
    "256a",
    "256b",
    "256c",
    "258",
    "259"
   ]
  },
  {
   "id": "probabilitat_composta",
   "titol": "Probabilitat composta: dos experiments",
   "descripcio": "Experiments amb i sense reposició, diagrames d'arbre, i la probabilitat d'\"almenys un\" a través del contrari.",
   "items": [
    "378a",
    "378b",
    "305a",
    "305b",
    "305c",
    "308a",
    "308b",
    "306a",
    "306b",
    "306c",
    "309a",
    "309b",
    "311",
    "312",
    "307",
    "310a",
    "310b",
    "313"
   ]
  },
  {
   "id": "probabilitat_condicionada",
   "titol": "Probabilitat condicionada",
   "descripcio": "La probabilitat d'un esdeveniment quan ja se'n sap un altre: P(B|A), i per què no és el mateix que P(A|B).",
   "items": [
    "379a",
    "379b",
    "319",
    "314a",
    "314b",
    "314c",
    "316a",
    "316b",
    "315a",
    "315b",
    "315c",
    "317",
    "318",
    "320"
   ]
  }
 ],
 "errors": {
  "CASOS_FAVORABLES_MAL_COMPTATS": "Revisa un per un quins resultats de l'espai mostral compleixen la condició de l'esdeveniment: és fàcil oblidar un límit inclòs (\"igual o més gran que\") o comptar-ne un de més.",
  "CASOS_POSSIBLES_MAL_COMPTATS": "Revisa quants resultats TOTALS té l'experiment (els casos possibles): ha de ser el denominador de la probabilitat, no un altre nombre de l'enunciat.",
  "FACTORIAL_MAL_APLICAT": "El nombre de maneres d'ordenar $n$ elements diferents és $n!$ ($n$ factorial): revisa que estàs calculant permutacions dels elements correctes.",
  "PRINCIPI_MULTIPLICATIU_MAL_APLICAT": "Quan es combinen diverses eleccions independents, el nombre total de resultats es MULTIPLICA (no se suma): si la primera elecció té $m$ opcions i la segona en té $n$, en total hi ha $m\\cdot n$ combinacions.",
  "VARIACIONS_SENSE_REPETICIO_MAL": "Quan un element ja s'ha fet servir, no es pot tornar a triar: el nombre d'opcions disponibles disminueix a cada posició que es va omplint."
 },
 "items": [
  {
   "id": "375a",
   "ex": 375,
   "ap": "a",
   "bloc": "combinatoria",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Compta els resultats possibles fent servir el principi multiplicatiu: si una elecció té $m$ opcions i l'altra $n$, entre totes dues n'hi ha $m\\cdot n$.",
   "enunciat": "Tens $3$ samarretes i $2$ pantalons. Quantes combinacions diferents de samarreta i pantalons pots fer?",
   "opcions": [
    "$9$",
    "$5$",
    "$6$",
    "$8$"
   ],
   "pistes": [
    "Amb la primera samarreta, quantes combinacions pots fer?",
    "I amb les $3$ samarretes?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgZmV0ICQzXjIkLiBDYWRhIHNhbWFycmV0YSB2YSBhbWIgY2FkYSB1biBkZWxzICQyJCBwYW50YWxvbnM6ICQzXFxjZG90MiQuIiwgIkhhcyBzdW1hdCAkMysyJC4gUXVhbiBlcyBjb21iaW5lbiBkaXZlcnNlcyBlbGVjY2lvbnMgaW5kZXBlbmRlbnRzLCBlbCBub21icmUgdG90YWwgZGUgcmVzdWx0YXRzIGVzIE1VTFRJUExJQ0EgKG5vIHNlIHN1bWEpOiBzaSBsYSBwcmltZXJhIGVsZWNjacOzIHTDqSAkbSQgb3BjaW9ucyBpIGxhIHNlZ29uYSBlbiB0w6kgJG4kLCBlbiB0b3RhbCBoaSBoYSAkbVxcY2RvdCBuJCBjb21iaW5hY2lvbnMuIiwgIiIsICJIYXMgZmV0ICQyXjMkLiBDYWRhIHNhbWFycmV0YSB2YSBhbWIgY2FkYSB1biBkZWxzICQyJCBwYW50YWxvbnM6ICQzXFxjZG90MiQuIl0sICJlcnIiOiBbIlBSSU5DSVBJX01VTFRJUExJQ0FUSVVfTUFMX0FQTElDQVQiLCAiUFJJTkNJUElfTVVMVElQTElDQVRJVV9NQUxfQVBMSUNBVCIsICIiLCAiUFJJTkNJUElfTVVMVElQTElDQVRJVV9NQUxfQVBMSUNBVCJdLCAicmVzIjogWyIkM1xcY2RvdDI9NiQgY29tYmluYWNpb25zIl19"
  },
  {
   "id": "375b",
   "ex": 375,
   "ap": "b",
   "bloc": "combinatoria",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Compta els resultats possibles fent servir el principi multiplicatiu: si una elecció té $m$ opcions i l'altra $n$, entre totes dues n'hi ha $m\\cdot n$.",
   "enunciat": "Un menú té $4$ primers plats i $3$ segons. Quants menús diferents es poden fer amb un primer i un segon?",
   "opcions": [
    "$64$",
    "$24$",
    "$7$",
    "$12$"
   ],
   "pistes": [
    "Amb el primer plat número 1, quants menús pots fer?",
    "I amb els $4$ primers?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgZmV0ICQ0XjMkLiBDYWRhIHByaW1lciB2YSBhbWIgY2FkYSB1biBkZWxzICQzJCBzZWdvbnM6ICQ0XFxjZG90MyQuIiwgIkhhcyBmZXQgJDQhPTRcXGNkb3QzXFxjZG90MlxcY2RvdDEkLiBObyBzJ29yZGVuZW4gZWxzIHBsYXRzOiBlcyB0cmlhIHVuIHByaW1lciBpIHVuIHNlZ29uLCAkNFxcY2RvdDMkLiIsICJIYXMgc3VtYXQgJDQrMyQuIFF1YW4gZXMgY29tYmluZW4gZGl2ZXJzZXMgZWxlY2Npb25zIGluZGVwZW5kZW50cywgZWwgbm9tYnJlIHRvdGFsIGRlIHJlc3VsdGF0cyBlcyBNVUxUSVBMSUNBIChubyBzZSBzdW1hKTogc2kgbGEgcHJpbWVyYSBlbGVjY2nDsyB0w6kgJG0kIG9wY2lvbnMgaSBsYSBzZWdvbmEgZW4gdMOpICRuJCwgZW4gdG90YWwgaGkgaGEgJG1cXGNkb3QgbiQgY29tYmluYWNpb25zLiIsICIiXSwgImVyciI6IFsiUFJJTkNJUElfTVVMVElQTElDQVRJVV9NQUxfQVBMSUNBVCIsICJGQUNUT1JJQUxfTUFMX0FQTElDQVQiLCAiUFJJTkNJUElfTVVMVElQTElDQVRJVV9NQUxfQVBMSUNBVCIsICIiXSwgInJlcyI6IFsiJDRcXGNkb3QzPTEyJCBtZW7DunMiXX0="
  },
  {
   "id": "244",
   "ex": 244,
   "ap": "",
   "bloc": "combinatoria",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "Quants resultats possibles s'obtenen en llançar una moneda a l'aire i anotar el resultat de $10$ tirades?",
   "opcions": [
    "$10\\cdot2=20$ resultats possibles",
    "$2^{10}=1\\,024$ resultats possibles",
    "$2\\cdot10=20$ resultats possibles",
    "$100$ resultats possibles, per coincidència amb el nombre de vegades que apareix a altres exercicis del full"
   ],
   "pistes": [
    "Cada tirada té $2$ resultats (cara o creu). Amb $10$ tirades independents, el nombre de resultats es multiplica $10$ vegades.",
    "Calcula $2^{10}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJRdWFuIGVzIGNvbWJpbmVuICQxMCQgdGlyYWRlcyBpbmRlcGVuZGVudHMsIGNhZGFzY3VuYSBhbWIgJDIkIHJlc3VsdGF0cyBwb3NzaWJsZXMsIGVsIHRvdGFsIGVzIG11bHRpcGxpY2EgJDEwJCB2ZWdhZGVzIHNlZ3VpZGVzICgkMl57MTB9JCksIG5vIGVzIG11bHRpcGxpY2Egbm9tw6lzIHVuIGNvcCBwZWwgbm9tYnJlIGRlIHRpcmFkZXMuIiwgIiIsICJDYWRhIHRpcmFkYSBkb2JsYSBlbCBub21icmUgZGUgcmVzdWx0YXRzIHBvc3NpYmxlcyByZXNwZWN0ZSBhIGwnYW50ZXJpb3I6IGFtYiAkMTAkIHRpcmFkZXMgaW5kZXBlbmRlbnRzLCBjYWwgbXVsdGlwbGljYXIgJDIkIHBlciBzaSBtYXRlaXggJDEwJCB2ZWdhZGVzLCAkMl57MTB9JCwgbm8gZmVyIHVuIHNpbXBsZSBwcm9kdWN0ZSAkMlxcY2RvdDEwJC4iLCAiRWwgbm9tYnJlIGRlIHJlc3VsdGF0cyBkZXDDqG4gZGVsIG5vbWJyZSBkZSB0aXJhZGVzIGkgZCdvcGNpb25zIHBlciB0aXJhZGEgZCdBUVVFU1QgZXhwZXJpbWVudCBjb25jcmV0ICgkMl57MTB9JCksIG5vIGRlIHhpZnJlcyBxdWUgYXBhcmVndWluIGVuIGFsdHJlcyBleGVyY2ljaXMgZGlmZXJlbnRzLiJdLCAiZXJyIjogWyJQUklOQ0lQSV9NVUxUSVBMSUNBVElVX01BTF9BUExJQ0FUIiwgIiIsICJQUklOQ0lQSV9NVUxUSVBMSUNBVElVX01BTF9BUExJQ0FUIiwgIlBSSU5DSVBJX01VTFRJUExJQ0FUSVVfTUFMX0FQTElDQVQiXSwgInJlcyI6IFsiQ2FkYSB0aXJhZGEgZG9ibGEgZWwgbm9tYnJlIGRlIHJlc3VsdGF0cyBwb3NzaWJsZXMgcmVzcGVjdGUgYSBsJ2FudGVyaW9yOiBhbWIgJDEwJCB0aXJhZGVzLCAkMl57MTB9PTFcXCwwMjQkIHJlc3VsdGF0cyBwb3NzaWJsZXMiXX0="
  },
  {
   "id": "243",
   "ex": 243,
   "ap": "",
   "bloc": "combinatoria",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "La Susanna té a l'armari 2 faldilles, 3 parells de pantalons de diferents colors, 2 bruses, 3 samarretes i 3 barrets. Quantes combinacions diferents pot fer (una peça de la part de baix, una de la part de dalt i un barret)?",
   "opcions": [
    "$45$ combinacions, multiplicant $5\\cdot3\\cdot3$ sense agrupar bé la part de baix i la de dalt",
    "$10$ combinacions, sumant totes les peces ($2+3+2+3+3$)",
    "$18$ combinacions, comptant només faldilles, bruses i barrets (sense pantalons ni samarretes)",
    "$75$ combinacions"
   ],
   "pistes": [
    "Agrupa la roba en tres nivells: peça de baix (faldilla o pantalons), peça de dalt (brusa o samarreta) i barret.",
    "Compta les opcions de cada nivell per separat: $2+3=5$ (baix), $2+3=5$ (dalt), $3$ (barret). Multiplica-les."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJSZXZpc2EgcXVhbnRlcyBvcGNpb25zIGhpIGhhIGEgY2FkYSBuaXZlbGwgZGUgbCdhcmJyZTogbGEgcGFydCBkZSBiYWl4ICgkMiszPTUkIG9wY2lvbnMpIGkgbGEgcGFydCBkZSBkYWx0ICgkMiszPTUkIG9wY2lvbnMpIG5vIHRlbmVuIGVsIG1hdGVpeCBub21icmUgZCdvcGNpb25zIHBlciBjYXN1YWxpdGF0LCBjYWwgY2FsY3VsYXItbGVzIHBlciBzZXBhcmF0LiIsICJRdWFuIGVzIGNvbWJpbmVuIGRpdmVyc2VzIGVsZWNjaW9ucyBpbmRlcGVuZGVudHMgKHBhcnQgZGUgYmFpeCwgcGFydCBkZSBkYWx0LCBiYXJyZXQpLCBlbCBub21icmUgZGUgY29tYmluYWNpb25zIGVzIE1VTFRJUExJQ0EsIG5vIHNlIHN1bWEuIiwgIkwnYXJtYXJpIHRhbWLDqSBpbmNsb3UgcGFudGFsb25zIChwYXJ0IGRlIGJhaXgpIGkgc2FtYXJyZXRlcyAocGFydCBkZSBkYWx0KSBjb20gYSBhbHRlcm5hdGl2ZXM6IGNhbCBzdW1hci1sb3MgYSBsZXMgc2V2ZXMgY2F0ZWdvcmllcyByZXNwZWN0aXZlcywgbm8gaWdub3Jhci1sb3MuIiwgIiJdLCAiZXJyIjogWyJQUklOQ0lQSV9NVUxUSVBMSUNBVElVX01BTF9BUExJQ0FUIiwgIlBSSU5DSVBJX01VTFRJUExJQ0FUSVVfTUFMX0FQTElDQVQiLCAiUFJJTkNJUElfTVVMVElQTElDQVRJVV9NQUxfQVBMSUNBVCIsICIiXSwgInJlcyI6IFsiUGXDp2EgZGUgYmFpeDogJDIkIGZhbGRpbGxlcyAkKzMkIHBhbnRhbG9ucyAkPTUkIG9wY2lvbnMiLCAiUGXDp2EgZGUgZGFsdDogJDIkIGJydXNlcyAkKzMkIHNhbWFycmV0ZXMgJD01JCBvcGNpb25zIiwgIkJhcnJldDogJDMkIG9wY2lvbnMiLCAiUGVsIHByaW5jaXBpIG11bHRpcGxpY2F0aXU6ICQ1XFxjZG90NVxcY2RvdDM9NzUkIGNvbWJpbmFjaW9ucyJdfQ=="
  },
  {
   "id": "245",
   "ex": 245,
   "ap": "",
   "bloc": "combinatoria",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "En un restaurant, el menú del dia té $3$ primers plats, $3$ segons i $4$ postres. Quants menús diferents es poden confeccionar, triant un primer, un segon i unes postres?",
   "opcions": [
    "$9$ menús diferents, multiplicant només primers i segons ($3\\cdot3$)",
    "$36$ menús diferents",
    "$10$ menús diferents, sumant $3+3+4$",
    "$4$ menús diferents, un per cada opció de postres"
   ],
   "pistes": [
    "Cada client tria un plat de cada categoria de manera independent: primer, segon i postres.",
    "Aplica el mètode del producte: $3\\cdot3\\cdot4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJUJ2hhcyBkZWl4YXQgbGVzIHBvc3RyZXMgcGVsIGNhbcOtOiBjYWRhIG1lbsO6IHRhbWLDqSBpbmNsb3UgdW5hIGVsZWNjacOzIGRlIHBvc3RyZXMgKDQgb3BjaW9ucyksIHF1ZSBjYWwgbXVsdGlwbGljYXIgdGFtYsOpLiIsICIiLCAiUXVhbiBjYWRhIGNsaWVudCB0cmlhIHVuIHBsYXQgZGUgY2FkYSBjYXRlZ29yaWEgZGUgbWFuZXJhIGluZGVwZW5kZW50LCBlbCBub21icmUgZGUgY29tYmluYWNpb25zIGVzIE1VTFRJUExJQ0EsIG5vIHNlIHN1bWE6ICQzXFxjZG90M1xcY2RvdDQkLCBubyAkMyszKzQkLiIsICJDYWRhIG9wY2nDsyBkZSBwb3N0cmVzIGVzIHBvdCBjb21iaW5hciBhbWIgcXVhbHNldm9sIHByaW1lciBpIHF1YWxzZXZvbCBzZWdvbjogbm8gbidoaSBoYSBwcm91IGVuIGNvbXB0YXIgbm9tw6lzIGxlcyBwb3N0cmVzLCBjYWwgY29tYmluYXItbGVzIGFtYiB0b3RlcyBsZXMgYWx0cmVzIG9wY2lvbnMuIl0sICJlcnIiOiBbIlBSSU5DSVBJX01VTFRJUExJQ0FUSVVfTUFMX0FQTElDQVQiLCAiIiwgIlBSSU5DSVBJX01VTFRJUExJQ0FUSVVfTUFMX0FQTElDQVQiLCAiUFJJTkNJUElfTVVMVElQTElDQVRJVV9NQUxfQVBMSUNBVCJdLCAicmVzIjogWyJDYWRhIGNsaWVudCB0cmlhIHVuIHByaW1lciAoJDMkIG9wY2lvbnMpLCB1biBzZWdvbiAoJDMkIG9wY2lvbnMpIGkgdW5lcyBwb3N0cmVzICgkNCQgb3BjaW9ucyksIGRlIG1hbmVyYSBpbmRlcGVuZGVudCIsICJQZWwgbcOodG9kZSBkZWwgcHJvZHVjdGU6ICQzXFxjZG90M1xcY2RvdDQ9MzYkIG1lbsO6cyBkaWZlcmVudHMiXX0="
  },
  {
   "id": "247",
   "ex": 247,
   "ap": "",
   "bloc": "combinatoria",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "El codi PIN d'un telèfon mòbil està format per $4$ dígits. Troba el nombre de codis diferents que podem posar al telèfon.",
   "opcions": [
    "$4!=24$ codis diferents, com si es tractés d'ordenar $4$ dígits fixos",
    "$10^4=10\\,000$ codis diferents",
    "$10\\cdot4=40$ codis diferents",
    "$10\\cdot9\\cdot8\\cdot7$ codis diferents, sense poder repetir cap dígit"
   ],
   "pistes": [
    "Cada posició del PIN es tria de manera independent, entre $10$ dígits possibles (del $0$ al $9$), i es poden repetir.",
    "Amb $4$ posicions: aplica el principi multiplicatiu, $10^4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJObyBlcyB0cmFjdGEgZCdvcmRlbmFyICQ0JCBkw61naXRzIGphIHRyaWF0czogYSBjYWRhIHVuYSBkZSBsZXMgJDQkIHBvc2ljaW9ucyBlcyBwb3QgdHJpYXIgUVVBTFNFVk9MIGRlbHMgJDEwJCBkw61naXRzIHBvc3NpYmxlcywgaW5kZXBlbmRlbnRtZW50IGRlIGxlcyBhbHRyZXMgcG9zaWNpb25zLiIsICIiLCAiQW1iICQ0JCBwb3NpY2lvbnMgaW5kZXBlbmRlbnRzLCBjYWRhc2N1bmEgYW1iICQxMCQgb3BjaW9ucyAoZMOtZ2l0cyBkZWwgJDAkIGFsICQ5JCksIGVsIG5vbWJyZSBkZSBjb2RpcyBlcyBtdWx0aXBsaWNhICQ0JCB2ZWdhZGVzIHNlZ3VpZGVzICgkMTBeNCQpLCBubyBlcyBtdWx0aXBsaWNhIG5vbcOpcyB1biBjb3AgcGVsIG5vbWJyZSBkZSBwb3NpY2lvbnMuIiwgIkwnZW51bmNpYXQgbm8gcHJvaGliZWl4IHJlcGV0aXIgZMOtZ2l0cyBkaW5zIGRlbCBQSU46IGEgY2FkYSBwb3NpY2nDsyBoaSBoYSBzZW1wcmUgJDEwJCBvcGNpb25zIGRpc3BvbmlibGVzLCBlbmNhcmEgcXVlIGphIHMnaGFnaSBmZXQgc2VydmlyIGFxdWVsbCBkw61naXQgZW4gdW5hIHBvc2ljacOzIGFudGVyaW9yLiJdLCAiZXJyIjogWyJGQUNUT1JJQUxfTUFMX0FQTElDQVQiLCAiIiwgIlBSSU5DSVBJX01VTFRJUExJQ0FUSVVfTUFMX0FQTElDQVQiLCAiVkFSSUFDSU9OU19TRU5TRV9SRVBFVElDSU9fTUFMIl0sICJyZXMiOiBbIkNhZGEgZMOtZ2l0IGRlbCBQSU4gcG90IHByZW5kcmUgJDEwJCB2YWxvcnMgZGlmZXJlbnRzLCBpIGVzIHBvZGVuIHJlcGV0aXI6IGFtYiAkNCQgeGlmcmVzLCAkMTBcXGNkb3QxMFxcY2RvdDEwXFxjZG90MTA9MTBeND0xMFxcLDAwMCQgY29kaXMgZGlmZXJlbnRzIl19"
  },
  {
   "id": "248a",
   "ex": 248,
   "ap": "a",
   "bloc": "combinatoria",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Escriu totes les paraules de 3 lletres, amb o sense sentit, que es poden formar amb les lletres de la paraula HOLA (sense repetir cap lletra dins de la mateixa paraula).",
   "enunciat": "Quantes paraules de $3$ lletres es poden formar en total?",
   "opcions": [
    "$4!=24$... però calculat com $4\\cdot4\\cdot4$ per error",
    "$24$ paraules",
    "$4^3=64$ paraules, permetent repetir lletres",
    "$12$ paraules, la meitat per error de comptar només la meitat dels ordres"
   ],
   "pistes": [
    "HOLA té $4$ lletres totes diferents. Per a la primera posició hi ha $4$ opcions; per a la segona, com que ja se n'ha fet servir una, en queden $3$; per a la tercera, $2$.",
    "Multiplica $4\\cdot3\\cdot2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCByZXN1bHRhdCBmaW5hbCwgJDI0JCwgw6lzIGNvcnJlY3RlLCBwZXLDsiBubyBzJ29idMOpIG11bHRpcGxpY2FudCAkNCQgdHJlcyB2ZWdhZGVzIHNlZ3VpZGVzICgkNF4zPTY0JCk6IGNhbCBhbmFyIHJlZHVpbnQgbGVzIG9wY2lvbnMgZGlzcG9uaWJsZXMgYSBjYWRhIHBvc2ljacOzLCAkNFxcY2RvdDNcXGNkb3QyJC4iLCAiIiwgIkNhZGEgbGxldHJhIGRlIEhPTEEgbm9tw6lzIGFwYXJlaXggdW5hIHZlZ2FkYSBhIGxhIHBhcmF1bGEgb3JpZ2luYWw6IG5vIGVzIHBvdCByZXBldGlyIGNhcCBsbGV0cmEgZGlucyBkZSBsYSBtYXRlaXhhIHBhcmF1bGEgZGUgMyBsbGV0cmVzLCBhaXjDrSBxdWUgbGVzIG9wY2lvbnMgZGlzbWludWVpeGVuIGEgY2FkYSBwb3NpY2nDsyBlbiBjb21wdGVzIGRlIG1hbnRlbmlyLXNlIHNlbXByZSBlbiAkNCQuIiwgIlBlciBhIGNhZGEgdHJpYSBkZSAkMyQgbGxldHJlcyBkZSBsZXMgJDQkLCBjYWwgY29tcHRhciBUT1RTIGVscyBvcmRyZXMgcG9zc2libGVzIGVuIHF1w6ggZXMgcG9kZW4gY29swrdsb2Nhciwgbm8gbm9tw6lzIGxhIG1laXRhdC4iXSwgImVyciI6IFsiUFJJTkNJUElfTVVMVElQTElDQVRJVV9NQUxfQVBMSUNBVCIsICIiLCAiVkFSSUFDSU9OU19TRU5TRV9SRVBFVElDSU9fTUFMIiwgIlZBUklBQ0lPTlNfU0VOU0VfUkVQRVRJQ0lPX01BTCJdLCAicmVzIjogWyJQcmltZXJhIHBvc2ljacOzOiAkNCQgbGxldHJlcyBwb3NzaWJsZXM7IHNlZ29uYTogJDMkIChqYSBuJ2hlbSBmZXQgc2VydmlyIHVuYSk7IHRlcmNlcmE6ICQyJCIsICIkNFxcY2RvdDNcXGNkb3QyPTI0JCBwYXJhdWxlcyBkZSAkMyQgbGxldHJlcyBkaWZlcmVudHMiXX0="
  },
  {
   "id": "248b",
   "ex": 248,
   "ap": "b",
   "bloc": "combinatoria",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Escriu totes les paraules de 3 lletres, amb o sense sentit, que es poden formar amb les lletres de la paraula HOLA (sense repetir cap lletra dins de la mateixa paraula).",
   "enunciat": "Quantes d'aquestes paraules comencen amb la lletra H?",
   "opcions": [
    "$2$ paraules, com si només restés una posició per triar",
    "$24$ paraules, totes, perquè qualsevol ordre és vàlid",
    "$6$ paraules",
    "$3$ paraules, oblidant multiplicar les opcions de les dues últimes posicions"
   ],
   "pistes": [
    "Si la paraula comença per H, la primera posició ja està fixada (1 opció).",
    "Per a la segona posició queden $3$ lletres (O, L, A), i per a la tercera, $2$: multiplica-les."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBbWIgbGEgSCBmaXhhZGEsIGVuY2FyYSBxdWVkZW4gRFVFUyBwb3NpY2lvbnMgcGVyIG9tcGxpciAoc2Vnb25hIGkgdGVyY2VyYSBsbGV0cmEpLCBubyBub23DqXMgdW5hOiBjYWwgJDNcXGNkb3QyPTYkLCBubyBub23DqXMgbCdvcGNpw7MgZGUgbCfDumx0aW1hIHBvc2ljacOzLiIsICJObyB0b3RlcyBsZXMgJDI0JCBwYXJhdWxlcyBjb21lbmNlbiBwZXIgSDogZml4YXIgbGEgcHJpbWVyYSBsbGV0cmEgY29tIGEgSCByZWR1ZWl4IGxlcyBvcGNpb25zIHBlciBhIGxlcyBhbHRyZXMgZHVlcyBwb3NpY2lvbnMuIiwgIiIsICJBbWIgbGEgSCBmaXhhZGEgYSBsYSBwcmltZXJhIHBvc2ljacOzLCBlbmNhcmEgY2FsZW4gJDIkIHBvc2ljaW9ucyBtw6lzIHBlciB0cmlhciAoZW50cmUgTywgTCwgQSk6IGNhbCBtdWx0aXBsaWNhciBsZXMgc2V2ZXMgb3BjaW9ucywgJDNcXGNkb3QyJCwgbm8gY29tcHRhci1uZSBub23DqXMgdW5hLiJdLCAiZXJyIjogWyJQUklOQ0lQSV9NVUxUSVBMSUNBVElVX01BTF9BUExJQ0FUIiwgIlBSSU5DSVBJX01VTFRJUExJQ0FUSVVfTUFMX0FQTElDQVQiLCAiIiwgIlBSSU5DSVBJX01VTFRJUExJQ0FUSVVfTUFMX0FQTElDQVQiXSwgInJlcyI6IFsiUHJpbWVyYSBwb3NpY2nDsyBmaXhhZGEgZW4gSCAoMSBvcGNpw7MpOyBzZWdvbmE6ICQzJCBsbGV0cmVzIHJlc3RhbnRzOyB0ZXJjZXJhOiAkMiQiLCAiJDFcXGNkb3QzXFxjZG90Mj02JCBwYXJhdWxlcyBxdWUgY29tZW5jZW4gcGVyIEgiXX0="
  },
  {
   "id": "248c",
   "ex": 248,
   "ap": "c",
   "bloc": "combinatoria",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Escriu totes les paraules de 3 lletres, amb o sense sentit, que es poden formar amb les lletres de la paraula HOLA (sense repetir cap lletra dins de la mateixa paraula).",
   "enunciat": "I quantes paraules contenen alhora les lletres L i A (en qualsevol ordre)?",
   "opcions": [
    "$3$ paraules, un ordre per cada tercera lletra possible",
    "$24$ paraules, totes, perquè L i A hi són sempre",
    "$6$ paraules, oblidant que la tercera lletra pot ser H o O (2 opcions)",
    "$12$ paraules"
   ],
   "pistes": [
    "La tercera lletra (a més de L i A) ha de ser H o O: $2$ opcions.",
    "Un cop triades les $3$ lletres, es poden ordenar de $3!=6$ maneres. Multiplica $2\\cdot6$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJVbiBjb3AgdHJpYWRlcyBsZXMgJDMkIGxsZXRyZXMgKEwsIEEgaSBsYSB0ZXJjZXJhKSwgZXMgcG9kZW4gb3JkZW5hciBkZSAkMyE9NiQgbWFuZXJlcyBkaWZlcmVudHMsIG5vIGQndW5hIHNvbGE6IGNhbCBtdWx0aXBsaWNhciBsZXMgJDIkIG9wY2lvbnMgZGUgdGVyY2VyYSBsbGV0cmEgcGVyIGFxdWVzdGVzICQ2JCBvcmRlbmFjaW9ucy4iLCAiTm8gdG90ZXMgbGVzICQyNCQgcGFyYXVsZXMgY29udGVuZW4gYWxob3JhIEwgaSBBOiBtb2x0ZXMgY29tYmluYWNpb25zIG5vIGluY2xvdWVuIHRvdGVzIGR1ZXMgbGxldHJlcyBhIGxhIHZlZ2FkYSAocGVyIGV4ZW1wbGUsIEgtTy1MIG5vIHTDqSBsYSBBKS4iLCAiTGEgdGVyY2VyYSBsbGV0cmEgZGUgbGEgcGFyYXVsYSAoYSBtw6lzIGRlIEwgaSBBKSBwb3Qgc2VyIEggbyBPOiBkdWVzIG9wY2lvbnMgZGlmZXJlbnRzLCBubyBub23DqXMgdW5hLiBDYWwgbXVsdGlwbGljYXItaG8gcGVsIG5vbWJyZSBkJ29yZGVuYWNpb25zIHBvc3NpYmxlcy4iLCAiIl0sICJlcnIiOiBbIkZBQ1RPUklBTF9NQUxfQVBMSUNBVCIsICJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyIsICJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyIsICIiXSwgInJlcyI6IFsiTGEgdGVyY2VyYSBsbGV0cmEgaGEgZGUgc2VyIEggbyBPICgkMiQgb3BjaW9ucykuIFVuIGNvcCB0cmlhZGVzIGxlcyAkMyQgbGxldHJlcywgaGkgaGEgJDMhPTYkIG9yZGVuYWNpb25zIHBvc3NpYmxlcyIsICJFbiB0b3RhbDogJDJcXGNkb3Q2PTEyJCBwYXJhdWxlcyJdfQ=="
  },
  {
   "id": "248d",
   "ex": 248,
   "ap": "d",
   "bloc": "combinatoria",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Escriu totes les paraules de 3 lletres, amb o sense sentit, que es poden formar amb les lletres de la paraula HOLA (sense repetir cap lletra dins de la mateixa paraula).",
   "enunciat": "Quantes paraules acabaran amb la lletra O?",
   "opcions": [
    "$24$ paraules, totes, perquè qualsevol ordre és vàlid",
    "$6$ paraules",
    "$3$ paraules, oblidant multiplicar les opcions de les dues primeres posicions",
    "$2$ paraules, com si només restés una posició per triar"
   ],
   "pistes": [
    "Si la paraula acaba en O, l'última posició ja està fixada (1 opció).",
    "Per a la primera posició queden $3$ lletres (H, L, A), i per a la segona, $2$: multiplica-les."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJObyB0b3RlcyBsZXMgJDI0JCBwYXJhdWxlcyBhY2FiZW4gZW4gTzogZml4YXIgbCfDumx0aW1hIGxsZXRyYSBjb20gYSBPIHJlZHVlaXggbGVzIG9wY2lvbnMgcGVyIGEgbGVzIGFsdHJlcyBkdWVzIHBvc2ljaW9ucy4iLCAiIiwgIkFtYiBsYSBPIGZpeGFkYSBhIGwnw7psdGltYSBwb3NpY2nDsywgZW5jYXJhIGNhbGVuICQyJCBwb3NpY2lvbnMgbcOpcyBwZXIgdHJpYXIgKGVudHJlIEgsIEwsIEEpOiBjYWwgbXVsdGlwbGljYXIgbGVzIHNldmVzIG9wY2lvbnMsICQzXFxjZG90MiQsIG5vIGNvbXB0YXItbmUgbm9tw6lzIHVuYS4iLCAiQW1iIGxhIE8gZml4YWRhLCBlbmNhcmEgcXVlZGVuIERVRVMgcG9zaWNpb25zIHBlciBvbXBsaXIgKHByaW1lcmEgaSBzZWdvbmEgbGxldHJhKSwgbm8gbm9tw6lzIHVuYTogY2FsICQzXFxjZG90Mj02JC4iXSwgImVyciI6IFsiUFJJTkNJUElfTVVMVElQTElDQVRJVV9NQUxfQVBMSUNBVCIsICIiLCAiUFJJTkNJUElfTVVMVElQTElDQVRJVV9NQUxfQVBMSUNBVCIsICJQUklOQ0lQSV9NVUxUSVBMSUNBVElVX01BTF9BUExJQ0FUIl0sICJyZXMiOiBbIsOabHRpbWEgcG9zaWNpw7MgZml4YWRhIGVuIE8gKDEgb3BjacOzKTsgcHJpbWVyYTogJDMkIGxsZXRyZXMgcmVzdGFudHM7IHNlZ29uYTogJDIkIiwgIiQzXFxjZG90MlxcY2RvdDE9NiQgcGFyYXVsZXMgcXVlIGFjYWJlbiBlbiBPIl19"
  },
  {
   "id": "248e",
   "ex": 248,
   "ap": "e",
   "bloc": "combinatoria",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Escriu totes les paraules de 3 lletres, amb o sense sentit, que es poden formar amb les lletres de la paraula HOLA (sense repetir cap lletra dins de la mateixa paraula).",
   "enunciat": "Quantes paraules acabaran amb les lletres \"LO\" (penúltima L, última O)?",
   "opcions": [
    "$3$ paraules, comptant també la O com a possible primera lletra",
    "$1$ paraula, oblidant que la primera lletra pot ser H o A (2 opcions)",
    "$6$ paraules, com si només es fixés l'última lletra",
    "$2$ paraules"
   ],
   "pistes": [
    "Amb la L i la O ja fixades a les seves posicions, només queda triar la primera lletra.",
    "Quines lletres queden disponibles (sense repetir L ni O)?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMYSBsbGV0cmEgTyBqYSBzJ2hhIGZldCBzZXJ2aXIgYSBsJ8O6bHRpbWEgcG9zaWNpw7M6IG5vIGVzIHBvdCB0b3JuYXIgYSBmZXIgc2VydmlyIGEgbGEgcHJpbWVyYS4gTm9tw6lzIHF1ZWRlbiBIIGkgQSBkaXNwb25pYmxlcy4iLCAiVW4gY29wIGZpeGFkZXMgTCBpIE8gYSBsZXMgc2V2ZXMgcG9zaWNpb25zLCBlbmNhcmEgcXVlZGVuIGR1ZXMgbGxldHJlcyBwb3NzaWJsZXMgcGVyIGEgbGEgcHJpbWVyYSBwb3NpY2nDszogSCBvIEEsIG5vIG5vbcOpcyB1bmEuIiwgIkFxdcOtIGVzIGZpeGVuIERVRVMgcG9zaWNpb25zIChwZW7Dumx0aW1hIEwsIMO6bHRpbWEgTyksIG5vIG5vbcOpcyB1bmE6IG5vbcOpcyBxdWVkYSBwZXIgdHJpYXIgbGEgcHJpbWVyYSBsbGV0cmEsIGVudHJlIEggaSBBLiIsICIiXSwgImVyciI6IFsiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiLCAiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiLCAiUFJJTkNJUElfTVVMVElQTElDQVRJVV9NQUxfQVBMSUNBVCIsICIiXSwgInJlcyI6IFsiQW1iIFwiTE9cIiBmaXhhdCBhbCBmaW5hbCwgbm9tw6lzIGNhbCB0cmlhciBsYSBwcmltZXJhIGxsZXRyYSBlbnRyZSBIIGkgQTogJDIkIG9wY2lvbnMiXX0="
  },
  {
   "id": "242",
   "ex": 242,
   "ap": "",
   "bloc": "combinatoria",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Llancem un dau a l'aire i sumem els punts de totes les cares MENYS la de dalt. Calcula la probabilitat d'obtenir un nombre múltiple de $3$.",
   "opcions": [
    "$P=\\dfrac12$, comptant $3$ casos favorables",
    "$P=\\dfrac{3}{21}=\\dfrac17$, dividint pels punts totals del dau",
    "$P=\\dfrac16$, comptant només un cas favorable",
    "$P=\\dfrac13$ ($18$ i $15$ són $2$ casos favorables d'entre $6$)"
   ],
   "pistes": [
    "La suma de totes les cares d'un dau és $21$. Si la cara de dalt és $i$, la resta de cares suma $21-i$.",
    "Calcula aquesta suma per a cada valor de $i$ de l'$1$ al $6$, i mira quins resultats són múltiples de $3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJEZSBsZXMgc2lzIHN1bWVzIHBvc3NpYmxlcyAoJDE1LDE2LDE3LDE4LDE5LDIwJCksIG5vbcOpcyAkMTUkIGkgJDE4JCBzw7NuIG3Dumx0aXBsZXMgZGUgJDMkOiAkMiQgY2Fzb3MsIG5vICQzJC4iLCAiRWwgZGVub21pbmFkb3IgZGUgbGEgcHJvYmFiaWxpdGF0IGhhIGRlIHNlciBlbCBub21icmUgZGUgcmVzdWx0YXRzIFBPU1NJQkxFUyBkZSBsJ2V4cGVyaW1lbnQgKGxlcyAkNiQgY2FyZXMgcXVlIHBvZGVuIHF1ZWRhciBkZSBkYWx0KSwgbm8gbGEgc3VtYSB0b3RhbCBkZSBwdW50cyBkZWwgZGF1ICgkMSsyK1xcY2RvdHMrNj0yMSQpLiIsICJIaSBoYSBET1MgdmFsb3JzIG3Dumx0aXBsZXMgZGUgJDMkIGVudHJlIGxlcyBzaXMgc3VtZXMgcG9zc2libGVzICgkMTUkIGkgJDE4JCksIG5vIG5vbcOpcyB1bjogcmV2aXNhIGxhIHRhdWxhIGRlIHN1bWVzIHBlciBhIGNhZGEgY2FyYSBkZSBkYWx0LiIsICIiXSwgImVyciI6IFsiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiLCAiQ0FTT1NfUE9TU0lCTEVTX01BTF9DT01QVEFUUyIsICJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyIsICIiXSwgInJlcyI6IFsiU2kgbGEgY2FyYSBkZSBkYWx0IMOpcyAkaSQsIGxhIHN1bWEgZGUgbGEgcmVzdGEgw6lzICQyMS1pJDogcGVyICRpPTEsXFxsZG90cyw2JCBzJ29idMOpICQyMCwxOSwxOCwxNywxNiwxNSQiLCAiTCdlc3BhaSBtb3N0cmFsIGQnYXF1ZXN0YSBzdW1hIMOpcyAkXFx7MTUsMTYsMTcsMTgsMTksMjBcXH0kLCB1biByZXN1bHRhdCBwZXIgY2FkYSBjYXJhLCBjYWRhc2N1biBhbWIgcHJvYmFiaWxpdGF0ICRcXGZyYWMxNiQiLCAiTcO6bHRpcGxlcyBkZSAkMyQ6ICQxOCQgKGNhcmEgJDMkIGRlIGRhbHQpIGkgJDE1JCAoY2FyYSAkNiQgZGUgZGFsdCk6ICQyJCBjYXNvcyBkZSAkNiQsICRQPVxcZGZyYWN7Mn17Nn09XFxkZnJhYzEzJCJdfQ=="
  },
  {
   "id": "246",
   "ex": 246,
   "ap": "",
   "bloc": "combinatoria",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "La clau d'accés d'un ordinador consta de $4$ caràcters (només lletres o nombres) i distingeix entre lletres majúscules i minúscules. Calcula el nombre de possibilitats diferents que hi ha per escriure la clau.",
   "opcions": [
    "$62\\cdot4=248$ claus diferents",
    "$62^4=14\\,776\\,336$ claus diferents possibles",
    "$62\\cdot61\\cdot60\\cdot59$ claus diferents, sense poder repetir cap caràcter",
    "$36^4$ claus diferents, sense distingir majúscules de minúscules"
   ],
   "pistes": [
    "Compta quants caràcters diferents hi ha disponibles per a cada posició: $26$ majúscules $+26$ minúscules $+10$ dígits.",
    "Amb $4$ posicions independents (es poden repetir caràcters), aplica el principi multiplicatiu: $62^4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBbWIgJDQkIHBvc2ljaW9ucyBpbmRlcGVuZGVudHMsIGNhZGFzY3VuYSBhbWIgJDYyJCBvcGNpb25zLCBlbCBub21icmUgZGUgY2xhdXMgZXMgbXVsdGlwbGljYSAkNCQgdmVnYWRlcyBzZWd1aWRlcyAoJDYyXjQkKSwgbm8gZXMgbXVsdGlwbGljYSBub23DqXMgdW4gY29wIHBlbCBub21icmUgZGUgcG9zaWNpb25zLiIsICIiLCAiTCdlbnVuY2lhdCBubyBwcm9oaWJlaXggcmVwZXRpciBjYXLDoGN0ZXJzIGRpbnMgZGUgbGEgY2xhdSAobm8gZGl1IHF1ZSBoYWdpbiBkZSBzZXIgdG90cyBkaWZlcmVudHMpOiBhIGNhZGEgcG9zaWNpw7MgaGkgaGEgc2VtcHJlICQ2MiQgb3BjaW9ucyBkaXNwb25pYmxlcywgZW5jYXJhIHF1ZSBqYSBzJ2hhZ2kgZmV0IHNlcnZpciBhbGd1biBjYXLDoGN0ZXIgZW4gdW5hIHBvc2ljacOzIGFudGVyaW9yLiIsICJMJ2VudW5jaWF0IGRpdSBleHBsw61jaXRhbWVudCBxdWUgZXMgZGlzdGluZ2VpeGVuIG1hasO6c2N1bGVzIGkgbWluw7pzY3VsZXM6IGNhbCBjb21wdGFyLWxlcyBwZXIgc2VwYXJhdCAoJDI2KzI2PTUyJCBsbGV0cmVzKSwgbm8gY29tIHVuIHNvbCBncnVwIGRlICQyNiQuIl0sICJlcnIiOiBbIlBSSU5DSVBJX01VTFRJUExJQ0FUSVVfTUFMX0FQTElDQVQiLCAiIiwgIlZBUklBQ0lPTlNfU0VOU0VfUkVQRVRJQ0lPX01BTCIsICJDQVNPU19QT1NTSUJMRVNfTUFMX0NPTVBUQVRTIl0sICJyZXMiOiBbIkNhcsOgY3RlcnMgcG9zc2libGVzIHBlciBwb3NpY2nDszogJDI2JCBtYWrDunNjdWxlcyAkKzI2JCBtaW7DunNjdWxlcyAkKzEwJCBkw61naXRzICQ9NjIkIiwgIkFtYiAkNCQgcG9zaWNpb25zIGluZGVwZW5kZW50czogJDYyXFxjZG90NjJcXGNkb3Q2MlxcY2RvdDYyPTYyXjQ9MTRcXCw3NzZcXCwzMzYkIGNsYXVzIGRpZmVyZW50cyJdfQ=="
  }
 ]
};
