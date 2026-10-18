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
  "ASIMETRIA_CONDICIONADA_MAL": "$P(B|A)$ i $P(A|B)$ es calculen sobre denominadors diferents ($A$ en un cas, $B$ en l'altre) i en general no valen el mateix. Que un dels dos sigui una probabilitat alta no vol dir que l'invers també ho sigui.",
  "CAMI_ARBRE_MAL_MULTIPLICAT": "La probabilitat d'arribar al final d'un camí de l'arbre és el PRODUCTE de les probabilitats de totes les branques que el formen, no la suma ni només la de l'última branca.",
  "CASOS_FAVORABLES_MAL_COMPTATS": "Revisa un per un quins resultats de l'espai mostral compleixen la condició de l'esdeveniment: és fàcil oblidar un límit inclòs (\"igual o més gran que\") o comptar-ne un de més.",
  "CASOS_POSSIBLES_MAL_COMPTATS": "Revisa quants resultats TOTALS té l'experiment (els casos possibles): ha de ser el denominador de la probabilitat, no un altre nombre de l'enunciat.",
  "CONDICIONADA_I_CONJUNTA_CONFOSES": "$P(A\\text{ i }B)$ (la intersecció, sobre el total de casos) i $P(B|A)$ (sobre els casos que ja compleixen $A$) responen preguntes diferents i normalment donen nombres diferents: revisa si et demanen la proporció sobre TOT o només sobre un grup ja fixat.",
  "ESDEVENIMENT_CONTRARI_MAL_CALCULAT": "La probabilitat de l'esdeveniment contrari és $1$ menys la probabilitat de l'esdeveniment: $P(\\text{no }A)=1-P(A)$.",
  "PROBABILITAT_CONDICIONADA_MAL": "Quan es demana la probabilitat DINS d'un grup concret (no de tota la població), el denominador ha de ser la mida d'aquell grup, no el total de tots els casos.",
  "UNIO_INTERSECCIO_CONFOSES": "La unió ($A\\cup B$) inclou els resultats que compleixen A, B, o totes dues alhora; la intersecció ($A\\cap B$) inclou només els que compleixen totes dues coses a la vegada."
 },
 "items": [
  {
   "id": "379a",
   "ex": 379,
   "ap": "a",
   "bloc": "probabilitat_condicionada",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula aquesta probabilitat condicionada: ja sabem de quin grup és la persona triada, així que només es compta dins d'aquest grup.",
   "enunciat": "En una classe de $20$ alumnes hi ha $10$ noies, i $4$ d'aquestes noies porten ulleres. Triem una NOIA a l'atzar. Quina és la probabilitat que porti ulleres?",
   "opcions": [
    "$\\dfrac{4}{20}=\\dfrac{1}{5}$",
    "$\\dfrac{10}{20}=\\dfrac{1}{2}$",
    "$\\dfrac{4}{10}=\\dfrac{2}{5}$",
    "$\\dfrac{6}{10}=\\dfrac{3}{5}$"
   ],
   "pistes": [
    "Quantes noies hi ha? Aquests són els casos possibles.",
    "D'aquestes noies, quantes porten ulleres?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJKYSBzYWJlbSBxdWUgw6lzIHVuYSBub2lhOiBlbCBkZW5vbWluYWRvciBzw7NuIGxlcyAkMTAkIG5vaWVzLCBubyBlbHMgJDIwJCBhbHVtbmVzLiBRdWFuIGVzIGRlbWFuYSBsYSBwcm9iYWJpbGl0YXQgRElOUyBkJ3VuIGdydXAgY29uY3JldCAobm8gZGUgdG90YSBsYSBwb2JsYWNpw7MpLCBlbCBkZW5vbWluYWRvciBoYSBkZSBzZXIgbGEgbWlkYSBkJ2FxdWVsbCBncnVwLCBubyBlbCB0b3RhbCBkZSB0b3RzIGVscyBjYXNvcy4iLCAiQXF1ZXN0YSDDqXMgbGEgcHJvYmFiaWxpdGF0IGRlIHRyaWFyIHVuYSBub2lhIGQnZW50cmUgdG90YSBsYSBjbGFzc2UuIEVzIGRlbWFuYSB1bmEgYWx0cmEgY29zYTogZCdlbnRyZSBsZXMgbm9pZXMsIHF1YW50ZXMgcG9ydGVuIHVsbGVyZXMuIiwgIiIsICIkNiQgc8OzbiBsZXMgbm9pZXMgcXVlIE5PIHBvcnRlbiB1bGxlcmVzLiJdLCAiZXJyIjogWyJQUk9CQUJJTElUQVRfQ09ORElDSU9OQURBX01BTCIsICJDT05ESUNJT05BREFfSV9DT05KVU5UQV9DT05GT1NFUyIsICIiLCAiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiXSwgInJlcyI6IFsiJFAoXFx0ZXh0e3VsbGVyZXN9XFxtaWRcXHRleHR7bm9pYX0pPVxcZGZyYWN7NH17MTB9PVxcZGZyYWN7Mn17NX0kIl19"
  },
  {
   "id": "379b",
   "ex": 379,
   "ap": "b",
   "bloc": "probabilitat_condicionada",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula aquesta probabilitat condicionada: ja sabem de quin grup és la persona triada, així que només es compta dins d'aquest grup.",
   "enunciat": "En un institut de $200$ alumnes, $50$ fan teatre, i $15$ d'aquests $50$ són de 4t. Triem a l'atzar un alumne que fa teatre. Quina és la probabilitat que sigui de 4t?",
   "opcions": [
    "$\\dfrac{15}{200}=\\dfrac{3}{40}$",
    "$\\dfrac{50}{200}=\\dfrac{1}{4}$",
    "$\\dfrac{35}{50}=\\dfrac{7}{10}$",
    "$\\dfrac{15}{50}=\\dfrac{3}{10}$"
   ],
   "pistes": [
    "Quants alumnes fan teatre? Aquests són els casos possibles.",
    "D'aquests, quants són de 4t?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJKYSBzYWJlbSBxdWUgZmEgdGVhdHJlOiBlbCBkZW5vbWluYWRvciBzw7NuIGVscyAkNTAkIGFsdW1uZXMgZGUgdGVhdHJlLCBubyBlbHMgJDIwMCQuIFF1YW4gZXMgZGVtYW5hIGxhIHByb2JhYmlsaXRhdCBESU5TIGQndW4gZ3J1cCBjb25jcmV0IChubyBkZSB0b3RhIGxhIHBvYmxhY2nDsyksIGVsIGRlbm9taW5hZG9yIGhhIGRlIHNlciBsYSBtaWRhIGQnYXF1ZWxsIGdydXAsIG5vIGVsIHRvdGFsIGRlIHRvdHMgZWxzIGNhc29zLiIsICJBcXVlc3RhIMOpcyBsYSBwcm9iYWJpbGl0YXQgcXVlIHVuIGFsdW1uZSBxdWFsc2V2b2wgZmFjaSB0ZWF0cmUuIEVzIGRlbWFuYSB1bmEgYWx0cmEgY29zYTogZCdlbnRyZSBlbHMgZGUgdGVhdHJlLCBxdWFudHMgc8OzbiBkZSA0dC4iLCAiJDM1JCBzw7NuIGVscyBhbHVtbmVzIGRlIHRlYXRyZSBxdWUgTk8gc8OzbiBkZSA0dC4iLCAiIl0sICJlcnIiOiBbIlBST0JBQklMSVRBVF9DT05ESUNJT05BREFfTUFMIiwgIkNPTkRJQ0lPTkFEQV9JX0NPTkpVTlRBX0NPTkZPU0VTIiwgIkNBU09TX0ZBVk9SQUJMRVNfTUFMX0NPTVBUQVRTIiwgIiJdLCAicmVzIjogWyIkUChcXHRleHR7NHR9XFxtaWRcXHRleHR7dGVhdHJlfSk9XFxkZnJhY3sxNX17NTB9PVxcZGZyYWN7M317MTB9JCJdfQ=="
  },
  {
   "id": "319",
   "ex": 319,
   "ap": "",
   "bloc": "probabilitat_condicionada",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "D'una població de 1000 persones, 10 tenen una malaltia poc freqüent. Hi ha un test per detectar-la: si la persona és malalta, el test dona positiu 9 de cada 10 vegades; si la persona és sana, el test dona positiu (fals positiu) 1 de cada 10 vegades.",
   "enunciat": "Segons l'enunciat, si la persona és malalta el test dona positiu $9$ de cada $10$ vegades. Quina és la probabilitat que el test doni positiu SABENT que la persona és malalta? (és a dir, $P(\\text{positiu}|\\text{malalt})$)",
   "opcions": [
    "$P(\\text{positiu}|\\text{malalt})=\\dfrac{9}{10}$",
    "$P(\\text{positiu}|\\text{malalt})=\\dfrac{9}{108}$, dividint pel total de positius en lloc del total de malalts",
    "$P(\\text{positiu}|\\text{malalt})=\\dfrac{1}{10}$, agafant la probabilitat de fals positiu per error",
    "$P(\\text{positiu}|\\text{malalt})=\\dfrac{9}{1000}$, dividint pel total de la població en lloc del total de malalts"
   ],
   "pistes": [
    "Aquesta dada la dona directament l'enunciat: la probabilitat de positiu entre els malalts.",
    "«Sabent que és malalta» vol dir que només mires els malalts. Compte a no agafar l'altra dada, la dels sans."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgZGVub21pbmFkb3IgcXVlIHRvY2EgYXF1w60gw6lzIGVsIGRlIE1BTEFMVFMgKCQxMCQpLCBwZXJxdcOoIGxhIGNvbmRpY2nDsyBkZSBsYSBwcmVndW50YSDDqXMgXCJzZXIgbWFsYWx0XCI7IGVsIHRvdGFsIGRlIHBvc2l0aXVzICgkMTA4JCkgw6lzIGVsIGRlbm9taW5hZG9yIGQndW5hIHByZWd1bnRhIGRpZmVyZW50LiIsICIkMS8xMCQgw6lzIGxhIHByb2JhYmlsaXRhdCBkZSBwb3NpdGl1IEVOVFJFIEVMUyBTQU5TIChlbCBmYWxzIHBvc2l0aXUpOiBlbnRyZSBlbHMgbWFsYWx0cywgbGEgcHJvYmFiaWxpdGF0IGRlIHBvc2l0aXUgw6lzICQ5LzEwJCwgbCdhbHRyYSBkYWRhIGRlIGwnZW51bmNpYXQuIiwgIlwiU2FiZW50IHF1ZSBsYSBwZXJzb25hIMOpcyBtYWxhbHRhXCIgZml4YSBlbCBncnVwIGVuIGxlcyAkMTAkIHBlcnNvbmVzIG1hbGFsdGVzLCBubyBlbiB0b3RhIGxhIHBvYmxhY2nDsyBkZSAkMTAwMCQ6IGVsIGRlbm9taW5hZG9yIGhhIGRlIHNlciAkMTAkLCBubyAkMTAwMCQuIl0sICJlcnIiOiBbIiIsICJDT05ESUNJT05BREFfSV9DT05KVU5UQV9DT05GT1NFUyIsICJBU0lNRVRSSUFfQ09ORElDSU9OQURBX01BTCIsICJQUk9CQUJJTElUQVRfQ09ORElDSU9OQURBX01BTCJdLCAicmVzIjogWyJMJ2VudW5jaWF0IGhvIGRpdSBkaXJlY3RhbWVudDogc2kgbGEgcGVyc29uYSDDqXMgbWFsYWx0YSwgZWwgdGVzdCBkb25hIHBvc2l0aXUgJDkkIGRlIGNhZGEgJDEwJCB2ZWdhZGVzLCAkUChcXHRleHR7cG9zaXRpdX18XFx0ZXh0e21hbGFsdH0pPVxcZGZyYWN7OX17MTB9JCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 274 156\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Taula de doble entrada: files Malalt, Sa, columnes Positiu, Negatiu, amb els totals de cada fila, cada columna i el total general.</title><rect x=\"14.0\" y=\"14.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\"></text><rect x=\"92.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Positiu</text><rect x=\"148.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Negatiu</text><rect x=\"204.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"14.0\" y=\"46.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Malalt</text><rect x=\"92.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">9</text><rect x=\"148.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">1</text><rect x=\"204.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">10</text><rect x=\"14.0\" y=\"78.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Sa</text><rect x=\"92.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">99</text><rect x=\"148.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">891</text><rect x=\"204.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">990</text><rect x=\"14.0\" y=\"110.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"92.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">108</text><rect x=\"148.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">892</text><rect x=\"204.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">1000</text></svg>"
  },
  {
   "id": "314a",
   "ex": 314,
   "ap": "a",
   "bloc": "probabilitat_condicionada",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "En el mateix dinar de l'exercici 254 (28 homes i 32 dones; 16 homes i 20 dones han menjat carn, i la resta, peix), ara ens fixem només en un grup cada vegada.",
   "enunciat": "D'entre els $28$ HOMES només, quina és la probabilitat que hagi menjat peix? (és a dir, $P(\\text{peix}|\\text{home})$)",
   "opcions": [
    "$P(\\text{peix}|\\text{home})=\\dfrac{12}{28}=\\dfrac{3}{7}$",
    "$P(\\text{peix}|\\text{home})=\\dfrac{12}{60}=\\dfrac{1}{5}$, dividint pel total de persones en lloc del total d'homes",
    "$P(\\text{peix}|\\text{home})=\\dfrac{12}{32}$, dividint pel total de dones en lloc del total d'homes",
    "$P(\\text{peix}|\\text{home})=\\dfrac{20}{28}$, agafant els homes que han menjat carn en lloc de peix"
   ],
   "pistes": [
    "\"D'entre els homes\" vol dir que el denominador és el total d'homes, $28$, no el total del dinar.",
    "Dels $28$ homes, $16$ han menjat carn i la resta, peix: $28-16=12$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiXCJEJ2VudHJlIGVscyBob21lc1wiIGZpeGEgZWwgZ3J1cCBkZSByZWZlcsOobmNpYSBlbiBlbHMgaG9tZXMgKCQyOCQgcGVyc29uZXMpLCBubyBlbiBlbCB0b3RhbCBkZWwgZGluYXIgKCQ2MCQpOiBlbCBkZW5vbWluYWRvciBoYSBkZSBzZXIgJDI4JC4gUXVhbiBlcyBkZW1hbmEgbGEgcHJvYmFiaWxpdGF0IERJTlMgZCd1biBncnVwIGNvbmNyZXQgKG5vIGRlIHRvdGEgbGEgcG9ibGFjacOzKSwgZWwgZGVub21pbmFkb3IgaGEgZGUgc2VyIGxhIG1pZGEgZCdhcXVlbGwgZ3J1cCwgbm8gZWwgdG90YWwgZGUgdG90cyBlbHMgY2Fzb3MuIiwgIkVsIGRlbm9taW5hZG9yIGhhIGRlIHNlciBlbCBub21icmUgZCdIT01FUyAoJDI4JCksIHF1ZSDDqXMgZWwgZ3J1cCBzb2JyZSBlbCBxdWFsIGVzIGRlbWFuYSBsYSBwcm9iYWJpbGl0YXQsIG5vIGVsIGRlIGRvbmVzLiIsICIkMjAkIMOpcyBlbCBub21icmUgZGUgRE9ORVMgcXVlIGhhbiBtZW5qYXQgY2FybjogZGVscyAkMjgkIGhvbWVzLCBlbHMgcXVlIGhhbiBtZW5qYXQgcGVpeCBzw7NuICQyOC0xNj0xMiQuIl0sICJlcnIiOiBbIiIsICJQUk9CQUJJTElUQVRfQ09ORElDSU9OQURBX01BTCIsICJDQVNPU19QT1NTSUJMRVNfTUFMX0NPTVBUQVRTIiwgIkVTREVWRU5JTUVOVF9DT05UUkFSSV9NQUxfQ0FMQ1VMQVQiXSwgInJlcyI6IFsiRGVscyAkMjgkIGhvbWVzLCAkMTIkIGhhbiBtZW5qYXQgcGVpeCAoJDI4LTE2JCk6ICRQKFxcdGV4dHtwZWl4fXxcXHRleHR7aG9tZX0pPVxcZGZyYWN7MTJ9ezI4fT1cXGRmcmFjezN9ezd9JCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 274 156\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Taula de doble entrada: files Homes, Dones, columnes Carn, Peix, amb els totals de cada fila, cada columna i el total general.</title><rect x=\"14.0\" y=\"14.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\"></text><rect x=\"92.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Carn</text><rect x=\"148.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Peix</text><rect x=\"204.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"14.0\" y=\"46.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Homes</text><rect x=\"92.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">16</text><rect x=\"148.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">12</text><rect x=\"204.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">28</text><rect x=\"14.0\" y=\"78.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Dones</text><rect x=\"92.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">20</text><rect x=\"148.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">12</text><rect x=\"204.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">32</text><rect x=\"14.0\" y=\"110.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"92.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">36</text><rect x=\"148.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">24</text><rect x=\"204.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">60</text></svg>"
  },
  {
   "id": "314b",
   "ex": 314,
   "ap": "b",
   "bloc": "probabilitat_condicionada",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "En el mateix dinar de l'exercici 254 (28 homes i 32 dones; 16 homes i 20 dones han menjat carn, i la resta, peix), ara ens fixem només en un grup cada vegada.",
   "enunciat": "D'entre les $24$ persones que han menjat PEIX, quina és la probabilitat que sigui home? (és a dir, $P(\\text{home}|\\text{peix})$)",
   "opcions": [
    "$P(\\text{home}|\\text{peix})=\\dfrac{12}{60}=\\dfrac{1}{5}$, dividint pel total de persones en lloc del total que ha menjat peix",
    "$P(\\text{home}|\\text{peix})=\\dfrac{12}{24}=\\dfrac{1}{2}$",
    "$P(\\text{home}|\\text{peix})=\\dfrac{12}{28}$, fent servir el denominador de l'apartat anterior per error",
    "$P(\\text{home}|\\text{peix})=\\dfrac{24}{60}$, calculant en realitat $P(\\text{peix})$"
   ],
   "pistes": [
    "El total de persones que han menjat peix és $24$ ($12$ homes + $12$ dones): aquest és el denominador.",
    "D'aquestes $24$, $12$ són homes."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJcIkQnZW50cmUgcXVpIGhhIG1lbmphdCBwZWl4XCIgZml4YSBlbCBncnVwIGVuIGxlcyBwZXJzb25lcyBxdWUgaGFuIG1lbmphdCBwZWl4ICgkMjQkKSwgbm8gZW4gZWwgdG90YWwgZGVsIGRpbmFyICgkNjAkKS4gUXVhbiBlcyBkZW1hbmEgbGEgcHJvYmFiaWxpdGF0IERJTlMgZCd1biBncnVwIGNvbmNyZXQgKG5vIGRlIHRvdGEgbGEgcG9ibGFjacOzKSwgZWwgZGVub21pbmFkb3IgaGEgZGUgc2VyIGxhIG1pZGEgZCdhcXVlbGwgZ3J1cCwgbm8gZWwgdG90YWwgZGUgdG90cyBlbHMgY2Fzb3MuIiwgIiIsICIkMjgkIMOpcyBlbCB0b3RhbCBkJ2hvbWVzLCBlbCBkZW5vbWluYWRvciBxdWUgdG9jYSBxdWFuIGxhIGNvbmRpY2nDsyDDqXMgXCJzZXIgaG9tZVwiLiBBcXXDrSBsYSBjb25kaWNpw7Mgw6lzIFwiaGF2ZXIgbWVuamF0IHBlaXhcIjogZWwgZGVub21pbmFkb3IgaGEgZGUgc2VyIGVsIHRvdGFsIGRlIHBlaXgsICQyNCQuIiwgIiRcXGRmcmFjezI0fXs2MH0kIMOpcyBsYSBwcm9iYWJpbGl0YXQgZGUgbWVuamFyIHBlaXggRU4gR0VORVJBTCwgbm8gbGEgZCfDqXNzZXIgaG9tZSBlbnRyZSBxdWkgaGEgbWVuamF0IHBlaXguIl0sICJlcnIiOiBbIlBST0JBQklMSVRBVF9DT05ESUNJT05BREFfTUFMIiwgIiIsICJDT05ESUNJT05BREFfSV9DT05KVU5UQV9DT05GT1NFUyIsICJDT05ESUNJT05BREFfSV9DT05KVU5UQV9DT05GT1NFUyJdLCAicmVzIjogWyJFbiB0b3RhbCBoYW4gbWVuamF0IHBlaXggJDI0JCBwZXJzb25lcywgZGUgbGVzIHF1YWxzICQxMiQgc8OzbiBob21lczogJFAoXFx0ZXh0e2hvbWV9fFxcdGV4dHtwZWl4fSk9XFxkZnJhY3sxMn17MjR9PVxcZGZyYWN7MX17Mn0kIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 274 156\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Taula de doble entrada: files Homes, Dones, columnes Carn, Peix, amb els totals de cada fila, cada columna i el total general.</title><rect x=\"14.0\" y=\"14.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\"></text><rect x=\"92.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Carn</text><rect x=\"148.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Peix</text><rect x=\"204.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"14.0\" y=\"46.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Homes</text><rect x=\"92.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">16</text><rect x=\"148.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">12</text><rect x=\"204.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">28</text><rect x=\"14.0\" y=\"78.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Dones</text><rect x=\"92.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">20</text><rect x=\"148.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">12</text><rect x=\"204.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">32</text><rect x=\"14.0\" y=\"110.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"92.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">36</text><rect x=\"148.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">24</text><rect x=\"204.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">60</text></svg>"
  },
  {
   "id": "314c",
   "ex": 314,
   "ap": "c",
   "bloc": "probabilitat_condicionada",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "En el mateix dinar de l'exercici 254 (28 homes i 32 dones; 16 homes i 20 dones han menjat carn, i la resta, peix), ara ens fixem només en un grup cada vegada.",
   "enunciat": "«En un dinar de $60$ persones, $P(\\text{peix}|\\text{home})$ i $P(\\text{home i peix})$ valen el mateix, perquè totes dues parlen d'homes que mengen peix»",
   "opcions": [
    "Cert: com que les dues fan referència als mateixos $12$ homes que han menjat peix, el resultat ha de ser idèntic",
    "Fals: $P(\\text{peix}|\\text{home})=\\dfrac{3}{7}$ es calcula només sobre els homes ($28$), mentre que $P(\\text{home i peix})=\\dfrac{12}{60}=\\dfrac{1}{5}$ es calcula sobre el total del dinar ($60$); són preguntes diferents i, de fet, donen resultats diferents",
    "Cert: totes dues probabilitats es calculen dividint per $60$, el total del dinar",
    "Fals, perquè en realitat val més $P(\\text{home i peix})$ que $P(\\text{peix}|\\text{home})$"
   ],
   "pistes": [
    "Calcula totes dues probabilitats per separat i compara-les.",
    "Fixa't especialment en el denominador que fa servir cadascuna."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBudW1lcmFkb3IgKCQxMiQpIHPDrSBxdWUgY29pbmNpZGVpeCwgcGVyw7IgZWwgZGVub21pbmFkb3Igbm86ICRQKFxcdGV4dHtwZWl4fXxcXHRleHR7aG9tZX0pJCBkaXZpZGVpeCBwZXIgJDI4JCAobm9tw6lzIGhvbWVzKSBpICRQKFxcdGV4dHtob21lIGkgcGVpeH0pJCBkaXZpZGVpeCBwZXIgJDYwJCAodG90aG9tKS4gRGVub21pbmFkb3JzIGRpZmVyZW50cyBkb25lbiByZXN1bHRhdHMgZGlmZXJlbnRzLiIsICIiLCAiJFAoXFx0ZXh0e3BlaXh9fFxcdGV4dHtob21lfSkkIE5PIGRpdmlkZWl4IHBlbCB0b3RhbCBkZWwgZGluYXI6IGNvbSBxdWUgamEgc2Ugc2FwIHF1ZSDDqXMgaG9tZSwgZWwgZGVub21pbmFkb3IgZXMgcmVzdHJpbmdlaXggYWxzICQyOCQgaG9tZXMsIG5vIGFscyAkNjAkIGNvbWVuc2Fscy4iLCAiw4lzIGFsIHJldsOpczogJFAoXFx0ZXh0e3BlaXh9fFxcdGV4dHtob21lfSk9My83XFxhcHByb3gweyx9NDMkIMOpcyBtw6lzIGdyYW4gcXVlICRQKFxcdGV4dHtob21lIGkgcGVpeH0pPTEvNT0weyx9MiQsIHBlcnF1w6ggZGl2aWRpciBwZXIgdW4gZ3J1cCBtw6lzIHBldGl0ICgkMjgkIGhvbWVzKSBkb25hIHVuIHJlc3VsdGF0IG3DqXMgZ3JhbiBxdWUgZGl2aWRpciBwZWwgdG90YWwgKCQ2MCQgcGVyc29uZXMpLiJdLCAiZXJyIjogWyJDT05ESUNJT05BREFfSV9DT05KVU5UQV9DT05GT1NFUyIsICIiLCAiUFJPQkFCSUxJVEFUX0NPTkRJQ0lPTkFEQV9NQUwiLCAiQ09ORElDSU9OQURBX0lfQ09OSlVOVEFfQ09ORk9TRVMiXSwgInJlcyI6IFsiJFAoXFx0ZXh0e3BlaXh9fFxcdGV4dHtob21lfSk9XFxkZnJhY3sxMn17Mjh9PVxcZGZyYWMzN1xcYXBwcm94MHssfTQzJCAoZGVub21pbmFkb3I6IG5vbcOpcyBob21lcykuICRQKFxcdGV4dHtob21lIGkgcGVpeH0pPVxcZGZyYWN7MTJ9ezYwfT1cXGRmcmFjMTU9MHssfTIkIChkZW5vbWluYWRvcjogdG90aG9tKS4gU8OzbiBkaWZlcmVudHMiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 274 156\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Taula de doble entrada: files Homes, Dones, columnes Carn, Peix, amb els totals de cada fila, cada columna i el total general.</title><rect x=\"14.0\" y=\"14.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\"></text><rect x=\"92.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Carn</text><rect x=\"148.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Peix</text><rect x=\"204.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"14.0\" y=\"46.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Homes</text><rect x=\"92.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">16</text><rect x=\"148.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">12</text><rect x=\"204.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">28</text><rect x=\"14.0\" y=\"78.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Dones</text><rect x=\"92.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">20</text><rect x=\"148.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">12</text><rect x=\"204.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">32</text><rect x=\"14.0\" y=\"110.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"92.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">36</text><rect x=\"148.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">24</text><rect x=\"204.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">60</text></svg>"
  },
  {
   "id": "316a",
   "ex": 316,
   "ap": "a",
   "bloc": "probabilitat_condicionada",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "En una revisió mèdica a 50 persones, 20 són fumadores. Tenen tos 14 de les fumadores i 9 de les no fumadores.",
   "enunciat": "D'entre les $50$ persones enquestades, quina és la probabilitat que una triada a l'atzar sigui fumadora I tingui tos?",
   "opcions": [
    "$P(\\text{F i T})=\\dfrac{9}{50}$, agafant les no fumadores amb tos per error",
    "$P(\\text{F i T})=\\dfrac{14}{50}=\\dfrac{7}{25}$",
    "$P(\\text{F i T})=\\dfrac{20}{50}+\\dfrac{23}{50}=\\dfrac{43}{50}$, sumant la probabilitat de fumar amb la de tenir tos",
    "$P(\\text{F i T})=\\dfrac{14}{20}=\\dfrac{7}{10}$, dividint pel total de fumadores en lloc del total de persones"
   ],
   "pistes": [
    "\"Fumadora i tos\" alhora: quantes persones compleixen totes dues coses?",
    "El denominador és el total de persones enquestades, $50$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyIkOSQgc8OzbiBsZXMgcGVyc29uZXMgTk8gZnVtYWRvcmVzIGFtYiB0b3M6IGxlcyBmdW1hZG9yZXMgYW1iIHRvcyBzw7NuICQxNCQuIiwgIiIsICJcIkZ1bWFkb3JhIEkgdG9zXCIgKGFtYiBsYSBJKSDDqXMgdW5hIGludGVyc2VjY2nDsywgbm8gdW5hIHVuacOzOiBubyBlcyBjb3VlbiBzdW1hbnQgbGVzIHByb2JhYmlsaXRhdHMgaW5kaXZpZHVhbHMsIGNhbCBjb21wdGFyIGRpcmVjdGFtZW50IHF1YW50ZXMgcGVyc29uZXMgY29tcGxlaXhlbiB0b3RlcyBkdWVzIGNvbmRpY2lvbnMgYWxob3JhLiIsICJcIlRyaWFkYSBhIGwnYXR6YXJcIiBzZW5zZSBjYXAgY29uZGljacOzIHByw6h2aWEgdm9sIGRpciBxdWUgZWwgZGVub21pbmFkb3Igw6lzIGVsIHRvdGFsIGRlIHBlcnNvbmVzIGVucXVlc3RhZGVzICgkNTAkKSwgbm8gbm9tw6lzIGVsIGRlIGZ1bWFkb3Jlcy4gUXVhbiBlcyBkZW1hbmEgbGEgcHJvYmFiaWxpdGF0IERJTlMgZCd1biBncnVwIGNvbmNyZXQgKG5vIGRlIHRvdGEgbGEgcG9ibGFjacOzKSwgZWwgZGVub21pbmFkb3IgaGEgZGUgc2VyIGxhIG1pZGEgZCdhcXVlbGwgZ3J1cCwgbm8gZWwgdG90YWwgZGUgdG90cyBlbHMgY2Fzb3MuIl0sICJlcnIiOiBbIkNBU09TX0ZBVk9SQUJMRVNfTUFMX0NPTVBUQVRTIiwgIiIsICJVTklPX0lOVEVSU0VDQ0lPX0NPTkZPU0VTIiwgIlBST0JBQklMSVRBVF9DT05ESUNJT05BREFfTUFMIl0sICJyZXMiOiBbIiQxNCQgZGUgbGVzICQ1MCQgcGVyc29uZXMgc8OzbiBmdW1hZG9yZXMgaSB0ZW5lbiB0b3M6ICRQKFxcdGV4dHtGIGkgVH0pPVxcZGZyYWN7MTR9ezUwfT1cXGRmcmFjezd9ezI1fSQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 274 156\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Taula de doble entrada: files Fumador, No fumador, columnes Tos, No tos, amb els totals de cada fila, cada columna i el total general.</title><rect x=\"14.0\" y=\"14.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\"></text><rect x=\"92.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Tos</text><rect x=\"148.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">No tos</text><rect x=\"204.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"14.0\" y=\"46.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Fumador</text><rect x=\"92.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">14</text><rect x=\"148.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">6</text><rect x=\"204.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">20</text><rect x=\"14.0\" y=\"78.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">No fumador</text><rect x=\"92.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">9</text><rect x=\"148.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">21</text><rect x=\"204.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">30</text><rect x=\"14.0\" y=\"110.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"92.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">23</text><rect x=\"148.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">27</text><rect x=\"204.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">50</text></svg>"
  },
  {
   "id": "316b",
   "ex": 316,
   "ap": "b",
   "bloc": "probabilitat_condicionada",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "En una revisió mèdica a 50 persones, 20 són fumadores. Tenen tos 14 de les fumadores i 9 de les no fumadores.",
   "enunciat": "D'entre les $20$ persones FUMADORES, quina és la probabilitat que tinguin tos?",
   "opcions": [
    "$P(\\text{T}|\\text{F})=\\dfrac{14}{23}$, dividint pel total de persones amb tos en lloc del total de fumadores",
    "$P(\\text{T}|\\text{F})=\\dfrac{14}{20}=\\dfrac{7}{10}$",
    "$P(\\text{T}|\\text{F})=\\dfrac{14}{50}=\\dfrac{7}{25}$, dividint pel total de persones en lloc del total de fumadores",
    "$P(\\text{T}|\\text{F})=\\dfrac{23}{50}$, calculant en realitat la probabilitat general de tenir tos"
   ],
   "pistes": [
    "El grup de referència són les $20$ fumadores: aquest és el denominador.",
    "D'aquestes $20$, en tenen tos $14$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyIkMjMkIMOpcyBlbCB0b3RhbCBkZSBwZXJzb25lcyBhbWIgdG9zIChmdW1hZG9yZXMgaSBubyBmdW1hZG9yZXMpOiBlbCBkZW5vbWluYWRvciBxdWUgdG9jYSBhcXXDrSDDqXMgZWwgZGUgZnVtYWRvcmVzLCAkMjAkLCBwZXJxdcOoIGxhIGNvbmRpY2nDsyDDqXMgXCJzZXIgZnVtYWRvcmFcIi4iLCAiIiwgIlwiRCdlbnRyZSBsZXMgZnVtYWRvcmVzXCIgZml4YSBlbCBncnVwIGVuIGxlcyAkMjAkIGZ1bWFkb3Jlcywgbm8gZW4gZWwgdG90YWwgZGUgbGVzICQ1MCQgcGVyc29uZXMgZW5xdWVzdGFkZXMuIFF1YW4gZXMgZGVtYW5hIGxhIHByb2JhYmlsaXRhdCBESU5TIGQndW4gZ3J1cCBjb25jcmV0IChubyBkZSB0b3RhIGxhIHBvYmxhY2nDsyksIGVsIGRlbm9taW5hZG9yIGhhIGRlIHNlciBsYSBtaWRhIGQnYXF1ZWxsIGdydXAsIG5vIGVsIHRvdGFsIGRlIHRvdHMgZWxzIGNhc29zLiIsICIkMjMvNTAkIMOpcyBsYSBwcm9iYWJpbGl0YXQgZGUgdGVuaXIgdG9zIEVOIEdFTkVSQUwgKHNlbnNlIHJlc3RyaW5naXItc2UgYSBsZXMgZnVtYWRvcmVzKTogYXF1w60gZXMgZGVtYW5hIG5vbcOpcyBkJ2VudHJlIGxlcyAkMjAkIGZ1bWFkb3Jlcy4iXSwgImVyciI6IFsiQ09ORElDSU9OQURBX0lfQ09OSlVOVEFfQ09ORk9TRVMiLCAiIiwgIlBST0JBQklMSVRBVF9DT05ESUNJT05BREFfTUFMIiwgIkNPTkRJQ0lPTkFEQV9JX0NPTkpVTlRBX0NPTkZPU0VTIl0sICJyZXMiOiBbIkRlIGxlcyAkMjAkIGZ1bWFkb3JlcywgZW4gdGVuZW4gdG9zICQxNCQ6ICRQKFxcdGV4dHtUfXxcXHRleHR7Rn0pPVxcZGZyYWN7MTR9ezIwfT1cXGRmcmFjezd9ezEwfSQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 274 156\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Taula de doble entrada: files Fumador, No fumador, columnes Tos, No tos, amb els totals de cada fila, cada columna i el total general.</title><rect x=\"14.0\" y=\"14.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\"></text><rect x=\"92.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Tos</text><rect x=\"148.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">No tos</text><rect x=\"204.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"14.0\" y=\"46.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Fumador</text><rect x=\"92.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">14</text><rect x=\"148.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">6</text><rect x=\"204.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">20</text><rect x=\"14.0\" y=\"78.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">No fumador</text><rect x=\"92.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">9</text><rect x=\"148.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">21</text><rect x=\"204.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">30</text><rect x=\"14.0\" y=\"110.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"92.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">23</text><rect x=\"148.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">27</text><rect x=\"204.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">50</text></svg>"
  },
  {
   "id": "315a",
   "ex": 315,
   "ap": "a",
   "bloc": "probabilitat_condicionada",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Hi ha dues caixes. La caixa A té 2 boles vermelles i 1 blava; la caixa B té 1 bola vermella i 3 de blaves. Triem una caixa a l'atzar (mateixa probabilitat per a totes dues) i, sense mirar quina és, en traiem una bola.",
   "enunciat": "La caixa A té $2$ boles vermelles i $1$ de blava. Quina és la probabilitat de triar la caixa A i treure'n una bola vermella?",
   "opcions": [
    "$P(A,V)=\\dfrac{2}{3}$, agafant només la probabilitat de la caixa A",
    "$P(A,V)=\\dfrac{1}{2}\\cdot\\dfrac{2}{3}=\\dfrac{1}{3}$",
    "$P(A,V)=\\dfrac{1}{2}+\\dfrac{2}{3}=\\dfrac{7}{6}$",
    "$P(A,V)=\\dfrac{1}{2}\\cdot\\dfrac{1}{4}=\\dfrac{1}{8}$, fent servir la proporció de vermelles de la caixa B per error"
   ],
   "pistes": [
    "Segueix el camí: primer la branca «Caixa A» ($1/2$), després la branca «V» que en penja ($2/3$).",
    "Al llarg d'un mateix camí les probabilitats es multipliquen; només se sumen quan s'ajunten camins diferents."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJDYWwgc2VndWlyIGVsIGNhbcOtIHNlbmNlcjogcHJpbWVyIHRyaWFyIGxhIGNhaXhhIEEgKCQxLzIkKSBpIGRlc3Byw6lzIHRyZXVyZSduIHVuYSB2ZXJtZWxsYSAoJDIvMyQpLCBtdWx0aXBsaWNhbnQtbGVzLiIsICIiLCAiTGEgcHJvYmFiaWxpdGF0IGQndW4gY2Ftw60gZGUgbCdhcmJyZSDDqXMgZWwgcHJvZHVjdGUgZGUgbGVzIHNldmVzIGJyYW5xdWVzLCBubyBsYSBzdW1hIChpIGVsIHJlc3VsdGF0LCBhIG3DqXMsIHNlcmlhIG3DqXMgZ3JhbiBxdWUgJDEkLCBjb3NhIGltcG9zc2libGUpLiIsICJMYSBicmFuY2EgwqtWwrsgcXVlIHRvY2Egw6lzIGxhIHF1ZSBwZW5qYSBkZSBsYSBjYWl4YSBBICgkMi8zJCwgcGVycXXDqCBoaSBoYSAkMiQgdmVybWVsbGVzIGRlICQzJCBib2xlcyksIG5vIGxhIGRlIGxhIGNhaXhhIEIgKCQxLzQkKS4iXSwgImVyciI6IFsiQ0FNSV9BUkJSRV9NQUxfTVVMVElQTElDQVQiLCAiIiwgIkNBTUlfQVJCUkVfTUFMX01VTFRJUExJQ0FUIiwgIkNBU09TX0ZBVk9SQUJMRVNfTUFMX0NPTVBUQVRTIl0sICJyZXMiOiBbIiRQKEEsVik9XFxkZnJhY3sxfXsyfVxcY2RvdFxcZGZyYWN7Mn17M309XFxkZnJhY3syfXs2fT1cXGRmcmFjezF9ezN9JCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 349 172\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Diagrama d'arbre de probabilitat de 2 nivells, amb les probabilitats donades sobre cada branca.</title><g transform=\"translate(-12.0,-32.0)\"><line x1=\"30.0\" y1=\"118.0\" x2=\"180.0\" y2=\"74.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"180.0\" cy=\"74.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"74.0\" x2=\"330.0\" y2=\"52.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"52.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"74.0\" x2=\"330.0\" y2=\"96.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"96.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"30.0\" y1=\"118.0\" x2=\"180.0\" y2=\"162.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"180.0\" cy=\"162.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"162.0\" x2=\"330.0\" y2=\"140.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"140.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"162.0\" x2=\"330.0\" y2=\"184.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"184.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"30.0\" cy=\"118.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"108.1\" y=\"109.5\" text-anchor=\"middle\" class=\"fig-etq petita\">1/2</text><text x=\"253.4\" y=\"55.1\" text-anchor=\"middle\" class=\"fig-etq petita\">2/3</text><text x=\"253.4\" y=\"98.8\" text-anchor=\"middle\" class=\"fig-etq petita\">1/3</text><text x=\"101.9\" y=\"153.5\" text-anchor=\"middle\" class=\"fig-etq petita\">1/2</text><text x=\"253.4\" y=\"143.1\" text-anchor=\"middle\" class=\"fig-etq petita\">1/4</text><text x=\"253.4\" y=\"186.8\" text-anchor=\"middle\" class=\"fig-etq petita\">3/4</text><text x=\"180\" y=\"63.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">Caixa A</text><text x=\"343\" y=\"55.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">V</text><text x=\"343\" y=\"99.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">B</text><text x=\"180\" y=\"148.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">Caixa B</text><text x=\"343\" y=\"143.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">V</text><text x=\"343\" y=\"187.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">B</text></g></svg>"
  },
  {
   "id": "315b",
   "ex": 315,
   "ap": "b",
   "bloc": "probabilitat_condicionada",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Hi ha dues caixes. La caixa A té 2 boles vermelles i 1 blava; la caixa B té 1 bola vermella i 3 de blaves. Triem una caixa a l'atzar (mateixa probabilitat per a totes dues) i, sense mirar quina és, en traiem una bola.",
   "enunciat": "Amb $P(A,V)=1/3$ ja calculat, i sabent que la caixa B dona una vermella amb probabilitat $1/4$, quina és la probabilitat, en total, de treure una bola vermella (sigui de la caixa que sigui)?",
   "opcions": [
    "$P(V)=\\dfrac{1}{3}+\\dfrac{1}{8}=\\dfrac{11}{24}$",
    "$P(V)=\\dfrac{1}{3}\\cdot\\dfrac{1}{8}=\\dfrac{1}{24}$, multiplicant els dos camins en lloc de sumar-los",
    "$P(V)=\\dfrac{2}{3}+\\dfrac{1}{4}=\\dfrac{11}{12}$, sumant les dues branques «V» directament, sense multiplicar-les abans per la probabilitat de triar cada caixa",
    "$P(V)=\\dfrac{1}{3}$, oblidant el camí que passa per la caixa B"
   ],
   "pistes": [
    "Hi ha dos camins que acaben en «vermella»: per la caixa A ($1/3$, calculat a l'apartat anterior) i per la caixa B.",
    "Calcula el camí per la caixa B: $\\dfrac{1}{2}\\cdot\\dfrac{1}{4}$.",
    "Suma els dos camins."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGkgaGEgZHVlcyBtYW5lcmVzIERJRkVSRU5UUyBpIGluY29tcGF0aWJsZXMgZCdhY2FiYXIgYW1iIHVuYSBib2xhIHZlcm1lbGxhIChwZXIgbGEgY2FpeGEgQSBvIHBlciBsYSBjYWl4YSBCKTogcXVhbiB1biByZXN1bHRhdCBlcyBwb3Qgb2J0ZW5pciBwZXIgY2FtaW5zIHF1ZSBleGNsb3VlbiBsJ2FsdHJlLCBsZXMgcHJvYmFiaWxpdGF0cyBzZSBzdW1lbi4iLCAiQWJhbnMgZGUgc3VtYXIgZWxzIGRvcyBjYW1pbnMsIGNhbCBjYWxjdWxhciBsYSBwcm9iYWJpbGl0YXQgZGUgQ0FEQSBjYW3DrSBzZW5jZXIgKHRyaWFyIGxhIGNhaXhhIEkgZGVzcHLDqXMgbGEgYm9sYSB2ZXJtZWxsYSksIG5vIG5vbcOpcyBsYSBicmFuY2EgZmluYWwgZGVsIGRhdS4iLCAiVW5hIGJvbGEgdmVybWVsbGEgdGFtYsOpIGVzIHBvdCB0cmV1cmUgdHJpYW50IGxhIGNhaXhhIEIgKGVuY2FyYSBxdWUgaGkgaGFnaSBtZW55cyBwcm9iYWJpbGl0YXQpOiBjYWwgc3VtYXItaGkgdGFtYsOpIGFxdWVzdCBjYW3DrSwgJDEvOCQuIl0sICJlcnIiOiBbIiIsICJVTklPX0lOVEVSU0VDQ0lPX0NPTkZPU0VTIiwgIkNBTUlfQVJCUkVfTUFMX01VTFRJUExJQ0FUIiwgIkNBU09TX0ZBVk9SQUJMRVNfTUFMX0NPTVBUQVRTIl0sICJyZXMiOiBbIkNhbcOtIHBlciBCOiAkUChCLFYpPVxcZGZyYWN7MX17Mn1cXGNkb3RcXGRmcmFjezF9ezR9PVxcZGZyYWN7MX17OH0kLiBTdW1hbnQtaGkgZWwgZGUgQSAoJDEvMyQpOiAkXFxkZnJhY3sxfXszfStcXGRmcmFjezF9ezh9PVxcZGZyYWN7OH17MjR9K1xcZGZyYWN7M317MjR9PVxcZGZyYWN7MTF9ezI0fSQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 349 172\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Diagrama d'arbre de probabilitat de 2 nivells, amb les probabilitats donades sobre cada branca.</title><g transform=\"translate(-12.0,-32.0)\"><line x1=\"30.0\" y1=\"118.0\" x2=\"180.0\" y2=\"74.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"180.0\" cy=\"74.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"74.0\" x2=\"330.0\" y2=\"52.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"52.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"74.0\" x2=\"330.0\" y2=\"96.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"96.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"30.0\" y1=\"118.0\" x2=\"180.0\" y2=\"162.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"180.0\" cy=\"162.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"162.0\" x2=\"330.0\" y2=\"140.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"140.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"162.0\" x2=\"330.0\" y2=\"184.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"184.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"30.0\" cy=\"118.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"108.1\" y=\"109.5\" text-anchor=\"middle\" class=\"fig-etq petita\">1/2</text><text x=\"253.4\" y=\"55.1\" text-anchor=\"middle\" class=\"fig-etq petita\">2/3</text><text x=\"253.4\" y=\"98.8\" text-anchor=\"middle\" class=\"fig-etq petita\">1/3</text><text x=\"101.9\" y=\"153.5\" text-anchor=\"middle\" class=\"fig-etq petita\">1/2</text><text x=\"253.4\" y=\"143.1\" text-anchor=\"middle\" class=\"fig-etq petita\">1/4</text><text x=\"253.4\" y=\"186.8\" text-anchor=\"middle\" class=\"fig-etq petita\">3/4</text><text x=\"180\" y=\"63.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">Caixa A</text><text x=\"343\" y=\"55.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">V</text><text x=\"343\" y=\"99.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">B</text><text x=\"180\" y=\"148.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">Caixa B</text><text x=\"343\" y=\"143.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">V</text><text x=\"343\" y=\"187.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">B</text></g></svg>"
  },
  {
   "id": "315c",
   "ex": 315,
   "ap": "c",
   "bloc": "probabilitat_condicionada",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Hi ha dues caixes. La caixa A té 2 boles vermelles i 1 blava; la caixa B té 1 bola vermella i 3 de blaves. Triem una caixa a l'atzar (mateixa probabilitat per a totes dues) i, sense mirar quina és, en traiem una bola.",
   "enunciat": "Sabent que la bola ha sortit vermella (amb $P(V)=11/24$ en total), quina és la probabilitat que vingués de la caixa A?",
   "opcions": [
    "$P(A|V)=\\dfrac{1}{2}$, com si un cop sabent el color, cada caixa tornés a tenir la mateixa probabilitat",
    "$P(A|V)=P(A,V)=\\dfrac{1}{3}$, confonent la condicionada amb la conjunta",
    "$P(A|V)=\\dfrac{2}{3}$, agafant la probabilitat de vermella dins la caixa A sense combinar-la amb res més",
    "$P(A|V)=\\dfrac{P(A,V)}{P(V)}=\\dfrac{1/3}{11/24}=\\dfrac{8}{11}$"
   ],
   "pistes": [
    "$P(A|V)$ es calcula dividint la probabilitat del camí «A i vermella» entre la probabilitat total de «vermella».",
    "Ja tens totes dues xifres dels apartats anteriors: $P(A,V)=1/3$ i $P(V)=11/24$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJTYWJlciBxdWUgbGEgYm9sYSDDqXMgdmVybWVsbGEgU8ONIHF1ZSBjYW52aWEgbGVzIHByb2JhYmlsaXRhdHM6IGxhIGNhaXhhIEEgdMOpIG3DqXMgdmVybWVsbGVzIHF1ZSBsYSBCLCBhaXjDrSBxdWUgw6lzIG3DqXMgcHJvYmFibGUgcXVlIGxhIGJvbGEgdmluZ3XDqXMgZCdBIHVuIGNvcCBzZSBzYXAgcXVlIMOpcyB2ZXJtZWxsYS4iLCAiJFAoQSxWKT0xLzMkIMOpcyBsYSBwcm9iYWJpbGl0YXQgZGUgXCJjYWl4YSBBIEkgdmVybWVsbGFcIiBzb2JyZSBUT1RTIGVscyBjYXNvcyBwb3NzaWJsZXM7ICRQKEF8VikkIHByZWd1bnRhIG5vbcOpcyBzb2JyZSBlbHMgY2Fzb3Mgb24gamEgaGEgc29ydGl0IHZlcm1lbGxhLCBpIHBlciBhaXjDsiBjYWwgZGl2aWRpciBwZXIgJFAoVikkLCBubyBkZWl4YXItaG8gdGFsIHF1YWwuIiwgIiQyLzMkIMOpcyAkUChWfEEpJCAobGEgcHJvYmFiaWxpdGF0IGRlIHZlcm1lbGxhIFNBQkVOVCBxdWUgw6lzIGxhIGNhaXhhIEEpLCBxdWUgw6lzIHVuYSBwcmVndW50YSBkaWZlcmVudCBkZSAkUChBfFYpJCAobGEgcHJvYmFiaWxpdGF0IHF1ZSBzaWd1aSBsYSBjYWl4YSBBIHNhYmVudCBxdWUgaGEgc29ydGl0IHZlcm1lbGxhKS4iLCAiIl0sICJlcnIiOiBbIkFTSU1FVFJJQV9DT05ESUNJT05BREFfTUFMIiwgIkNPTkRJQ0lPTkFEQV9JX0NPTkpVTlRBX0NPTkZPU0VTIiwgIkNPTkRJQ0lPTkFEQV9JX0NPTkpVTlRBX0NPTkZPU0VTIiwgIiJdLCAicmVzIjogWyIkUChBfFYpPVxcZGZyYWN7UChBLFYpfXtQKFYpfT1cXGRmcmFjezEvM317MTEvMjR9PVxcZGZyYWN7MX17M31cXGNkb3RcXGRmcmFjezI0fXsxMX09XFxkZnJhY3s4fXsxMX0kIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 349 172\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Diagrama d'arbre de probabilitat de 2 nivells, amb les probabilitats donades sobre cada branca.</title><g transform=\"translate(-12.0,-32.0)\"><line x1=\"30.0\" y1=\"118.0\" x2=\"180.0\" y2=\"74.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"180.0\" cy=\"74.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"74.0\" x2=\"330.0\" y2=\"52.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"52.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"74.0\" x2=\"330.0\" y2=\"96.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"96.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"30.0\" y1=\"118.0\" x2=\"180.0\" y2=\"162.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"180.0\" cy=\"162.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"162.0\" x2=\"330.0\" y2=\"140.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"140.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"162.0\" x2=\"330.0\" y2=\"184.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"184.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"30.0\" cy=\"118.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"108.1\" y=\"109.5\" text-anchor=\"middle\" class=\"fig-etq petita\">1/2</text><text x=\"253.4\" y=\"55.1\" text-anchor=\"middle\" class=\"fig-etq petita\">2/3</text><text x=\"253.4\" y=\"98.8\" text-anchor=\"middle\" class=\"fig-etq petita\">1/3</text><text x=\"101.9\" y=\"153.5\" text-anchor=\"middle\" class=\"fig-etq petita\">1/2</text><text x=\"253.4\" y=\"143.1\" text-anchor=\"middle\" class=\"fig-etq petita\">1/4</text><text x=\"253.4\" y=\"186.8\" text-anchor=\"middle\" class=\"fig-etq petita\">3/4</text><text x=\"180\" y=\"63.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">Caixa A</text><text x=\"343\" y=\"55.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">V</text><text x=\"343\" y=\"99.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">B</text><text x=\"180\" y=\"148.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">Caixa B</text><text x=\"343\" y=\"143.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">V</text><text x=\"343\" y=\"187.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">B</text></g></svg>"
  },
  {
   "id": "317",
   "ex": 317,
   "ap": "",
   "bloc": "probabilitat_condicionada",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "En una revisió mèdica a 50 persones, 20 són fumadores. Tenen tos 14 de les fumadores i 9 de les no fumadores.",
   "enunciat": "D'entre les $23$ persones que TENEN TOS, quina és la probabilitat que siguin fumadores? Compara el resultat amb el de l'apartat anterior.",
   "opcions": [
    "$P(\\text{F}|\\text{T})=\\dfrac{14}{50}$, dividint pel total de persones en lloc del total amb tos",
    "$P(\\text{F}|\\text{T})=\\dfrac{14}{23}$, diferent de $P(\\text{T}|\\text{F})=\\dfrac{7}{10}$ de l'exercici anterior",
    "$P(\\text{F}|\\text{T})=\\dfrac{7}{10}$, el mateix resultat que $P(\\text{T}|\\text{F})$",
    "$P(\\text{F}|\\text{T})=\\dfrac{9}{23}$, agafant les persones amb tos que NO fumen"
   ],
   "pistes": [
    "El total de persones amb tos és $14+9=23$: aquest és ara el denominador.",
    "D'aquestes $23$, quantes fumen?",
    "Compara aquest resultat amb $P(\\text{T}|\\text{F})=7/10$ de l'apartat anterior: són el mateix?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJcIkQnZW50cmUgcXVpIHTDqSB0b3NcIiBmaXhhIGVsIGdydXAgZW4gbGVzICQyMyQgcGVyc29uZXMgYW1iIHRvcywgbm8gZW4gZWwgdG90YWwgZGUgJDUwJC4iLCAiIiwgIiRQKFxcdGV4dHtGfXxcXHRleHR7VH0pJCBpICRQKFxcdGV4dHtUfXxcXHRleHR7Rn0pJCBlcyBjYWxjdWxlbiBzb2JyZSBkZW5vbWluYWRvcnMgZGlmZXJlbnRzIChwZXJzb25lcyBhbWIgdG9zIGVuIHVuIGNhcywgZnVtYWRvcmVzIGVuIGwnYWx0cmUpOiBubyBoaSBoYSBjYXAgbW90aXUgcGVycXXDqCBjb2luY2lkZWl4aW4uICRQKEJ8QSkkIGkgJFAoQXxCKSQgZXMgY2FsY3VsZW4gc29icmUgZGVub21pbmFkb3JzIGRpZmVyZW50cyAoJEEkIGVuIHVuIGNhcywgJEIkIGVuIGwnYWx0cmUpIGkgZW4gZ2VuZXJhbCBubyB2YWxlbiBlbCBtYXRlaXguIFF1ZSB1biBkZWxzIGRvcyBzaWd1aSB1bmEgcHJvYmFiaWxpdGF0IGFsdGEgbm8gdm9sIGRpciBxdWUgbCdpbnZlcnMgdGFtYsOpIGhvIHNpZ3VpLiIsICIkOSQgc8OzbiBsZXMgcGVyc29uZXMgYW1iIHRvcyBxdWUgTk8gZnVtZW46IGxlcyBxdWUgZnVtZW4gSSB0ZW5lbiB0b3Mgc8OzbiAkMTQkLCBubyAkOSQuIl0sICJlcnIiOiBbIlBST0JBQklMSVRBVF9DT05ESUNJT05BREFfTUFMIiwgIiIsICJBU0lNRVRSSUFfQ09ORElDSU9OQURBX01BTCIsICJFU0RFVkVOSU1FTlRfQ09OVFJBUklfTUFMX0NBTENVTEFUIl0sICJyZXMiOiBbIlRlbmVuIHRvcyAkMTQrOT0yMyQgcGVyc29uZXMsIGRlIGxlcyBxdWFscyAkMTQkIGZ1bWVuOiAkUChcXHRleHR7Rn18XFx0ZXh0e1R9KT1cXGRmcmFjezE0fXsyM31cXGFwcHJveDB7LH02MSQsIHF1ZSBubyBjb2luY2lkZWl4IGFtYiAkUChcXHRleHR7VH18XFx0ZXh0e0Z9KT1cXGRmcmFjezd9ezEwfT0weyx9NyQgZGUgbCdhcGFydGF0IGFudGVyaW9yOiBjYWRhc2N1bmEgZXMgY2FsY3VsYSBzb2JyZSB1biBncnVwIGRlIHJlZmVyw6huY2lhIGRpZmVyZW50Il19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 274 156\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Taula de doble entrada: files Fumador, No fumador, columnes Tos, No tos, amb els totals de cada fila, cada columna i el total general.</title><rect x=\"14.0\" y=\"14.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\"></text><rect x=\"92.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Tos</text><rect x=\"148.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">No tos</text><rect x=\"204.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"14.0\" y=\"46.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Fumador</text><rect x=\"92.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">14</text><rect x=\"148.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">6</text><rect x=\"204.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">20</text><rect x=\"14.0\" y=\"78.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">No fumador</text><rect x=\"92.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">9</text><rect x=\"148.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">21</text><rect x=\"204.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">30</text><rect x=\"14.0\" y=\"110.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"92.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">23</text><rect x=\"148.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">27</text><rect x=\"204.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">50</text></svg>"
  },
  {
   "id": "318",
   "ex": 318,
   "ap": "",
   "bloc": "probabilitat_condicionada",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Llancem dos daus. Sigui $A$ l'esdeveniment «el primer dau surt parell» i $B$ l'esdeveniment «la suma dels dos daus és $8$».",
   "enunciat": "Sabent que el primer dau ha sortit parell, quina és la probabilitat que la suma sigui $8$? (és a dir, $P(B|A)$)",
   "opcions": [
    "$P(B|A)=\\dfrac{1}{12}$, confonent-ho amb $P(A\\text{ i }B)$",
    "$P(B|A)=\\dfrac{2}{18}=\\dfrac{1}{9}$, oblidant-ne una de les tres parelles que sumen $8$",
    "$P(B|A)=\\dfrac{5}{36}$, calculant en realitat $P(B)$ sense fer servir la condició del primer dau",
    "$P(B|A)=\\dfrac{3}{18}=\\dfrac{1}{6}$"
   ],
   "pistes": [
    "Un cop sabem que el primer dau és parell, només queden $18$ resultats possibles (dels $36$ inicials).",
    "D'aquests $18$, quants tenen suma $8$? (primer dau $2$, $4$ o $6$, i el segon el que calgui per arribar a $8$)"
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyIkMS8xMiQgw6lzICRQKEFcXHRleHR7IGkgfUIpJCwgbGEgcHJvYmFiaWxpdGF0IHF1ZSBwYXNzaW4gdG90ZXMgZHVlcyBjb3NlcyBzb2JyZSBlbCB0b3RhbCBkZSAkMzYkIHJlc3VsdGF0cyBwb3NzaWJsZXMuICRQKEJ8QSkkIGphIHBhcnRlaXggZGVsIGZldCBxdWUgJEEkIHMnaGEgY29tcGxlcnQsIGkgZWwgZGVub21pbmFkb3IgaGEgZGUgc2VyIGVscyBjYXNvcyBhbWIgcHJpbWVyIGRhdSBwYXJlbGwgKCQxOCQpLCBubyBlbHMgJDM2JCBpbmljaWFscy4iLCAiRWwgZGVub21pbmFkb3IgKCQxOCQsIGVscyBjYXNvcyBhbWIgcHJpbWVyIGRhdSBwYXJlbGwpIMOpcyBjb3JyZWN0ZSwgcGVyw7IgYWwgbnVtZXJhZG9yIGZhbHRhIGNvbXB0YXIgJCgyLDYpJDogYW1iIHByaW1lciBkYXUgcGFyZWxsIGhpIGhhIHRyZXMgcGFyZWxsZXMgcXVlIHN1bWVuICQ4JCwgbm8gZHVlcyDigJQgJCgyLDYpJCwgJCg0LDQpJCBpICQoNiwyKSQuIiwgIiQ1LzM2JCDDqXMgbGEgcHJvYmFiaWxpdGF0IHF1ZSBsYSBzdW1hIHNpZ3VpICQ4JCBTRU5TRSBjYXAgY29uZGljacOzIHByw6h2aWEgKGhpIGhhICQ1JCBwYXJlbGxlcyBkZSAkMzYkIHF1ZSBzdW1lbiAkOCQpOiBhcXXDrSBqYSBzZSBzYXAgcXVlIGVsIHByaW1lciBkYXUgw6lzIHBhcmVsbCwgYWl4w60gcXVlIGVsIGRlbm9taW5hZG9yIHMnaGEgZGUgcmVzdHJpbmdpciBhIGFxdWVzdHMgY2Fzb3MuIFF1YW4gZXMgZGVtYW5hIGxhIHByb2JhYmlsaXRhdCBESU5TIGQndW4gZ3J1cCBjb25jcmV0IChubyBkZSB0b3RhIGxhIHBvYmxhY2nDsyksIGVsIGRlbm9taW5hZG9yIGhhIGRlIHNlciBsYSBtaWRhIGQnYXF1ZWxsIGdydXAsIG5vIGVsIHRvdGFsIGRlIHRvdHMgZWxzIGNhc29zLiIsICIiXSwgImVyciI6IFsiQ09ORElDSU9OQURBX0lfQ09OSlVOVEFfQ09ORk9TRVMiLCAiQ0FTT1NfUE9TU0lCTEVTX01BTF9DT01QVEFUUyIsICJQUk9CQUJJTElUQVRfQ09ORElDSU9OQURBX01BTCIsICIiXSwgInJlcyI6IFsiQW1iIGVsIHByaW1lciBkYXUgcGFyZWxsIGhpIGhhICQxOCQgcmVzdWx0YXRzIHBvc3NpYmxlcy4gRCdhcXVlc3RzLCBzdW1lbiAkOCQgbGVzIHBhcmVsbGVzICQoMiw2KSQsICQoNCw0KSQgaSAkKDYsMikkOiAkMyQgY2Fzb3MuICRQKEJ8QSk9XFxkZnJhY3szfXsxOH09XFxkZnJhYzE2JCJdfQ=="
  },
  {
   "id": "320",
   "ex": 320,
   "ap": "",
   "bloc": "probabilitat_condicionada",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "D'una població de 1000 persones, 10 tenen una malaltia poc freqüent. Hi ha un test per detectar-la: si la persona és malalta, el test dona positiu 9 de cada 10 vegades; si la persona és sana, el test dona positiu (fals positiu) 1 de cada 10 vegades.",
   "enunciat": "Recorda que el test dona positiu $9$ de cada $10$ vegades quan la persona és malalta, i $1$ de cada $10$ quan és sana (fals positiu). Ara al revés: si el test ha donat POSITIU, quina és la probabilitat que la persona realment estigui malalta? Compara-ho amb el resultat de l'exercici anterior.",
   "opcions": [
    "$P(\\text{malalt}|\\text{positiu})=\\dfrac{9}{108}=\\dfrac{1}{12}\\approx0{,}083$, molt més petita que $P(\\text{positiu}|\\text{malalt})=\\dfrac{9}{10}=0{,}9$ de l'exercici anterior",
    "$P(\\text{malalt}|\\text{positiu})=\\dfrac{9}{99}=\\dfrac{1}{11}$, comparant els malalts positius només amb els sans positius",
    "$P(\\text{malalt}|\\text{positiu})=\\dfrac{9}{10}$, el mateix resultat que $P(\\text{positiu}|\\text{malalt})$",
    "$P(\\text{malalt}|\\text{positiu})=\\dfrac{9}{1000}$, dividint pel total de la població en lloc del total de positius"
   ],
   "pistes": [
    "Primer, quantes persones en total donen positiu? (malalts positius més sans positius, és a dir, falsos positius)",
    "$9$ malalts donen positiu; dels $990$ sans, en donen positiu $990\\cdot\\dfrac{1}{10}=99$ (falsos positius).",
    "D'entre tots els positius, quina proporció són realment malalts?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgZGVub21pbmFkb3IgaGEgZGUgc2VyIGVsIHRvdGFsIGRlIFBFUlNPTkVTIGFtYiBwb3NpdGl1ICgkOTkkIHNhbnMgcG9zaXRpdXMgTcOJUyBlbHMgJDkkIG1hbGFsdHMgcG9zaXRpdXMsICQ5OSs5PTEwOCQpLCBubyBub23DqXMgZWxzIHNhbnMgcG9zaXRpdXMuIiwgIkVuY2FyYSBxdWUgZWwgdGVzdCBzaWd1aSBtb2x0IGZpYWJsZSAoXCJwb3NpdGl1IHNhYmVudCBxdWUgw6lzIG1hbGFsdFwiIHZhbCAkOS8xMCQpLCBhaXjDsiBubyB2b2wgZGlyIHF1ZSBcIm1hbGFsdCBzYWJlbnQgcXVlIMOpcyBwb3NpdGl1XCIgdmFsZ3VpIGVsIG1hdGVpeDogY29tIHF1ZSBsYSBtYWxhbHRpYSDDqXMgcG9jIGZyZXHDvGVudCwgbGEgbWFqb3JpYSBkZSBwb3NpdGl1cyBzw7NuIGZhbHNvcyBwb3NpdGl1cyBkZSBnZW50IHNhbmEuICRQKEJ8QSkkIGkgJFAoQXxCKSQgZXMgY2FsY3VsZW4gc29icmUgZGVub21pbmFkb3JzIGRpZmVyZW50cyAoJEEkIGVuIHVuIGNhcywgJEIkIGVuIGwnYWx0cmUpIGkgZW4gZ2VuZXJhbCBubyB2YWxlbiBlbCBtYXRlaXguIFF1ZSB1biBkZWxzIGRvcyBzaWd1aSB1bmEgcHJvYmFiaWxpdGF0IGFsdGEgbm8gdm9sIGRpciBxdWUgbCdpbnZlcnMgdGFtYsOpIGhvIHNpZ3VpLiIsICJcIlNhYmVudCBxdWUgZWwgdGVzdCBoYSBkb25hdCBwb3NpdGl1XCIgZml4YSBlbCBncnVwIGVuIGxlcyBwZXJzb25lcyBhbWIgcG9zaXRpdSAoJDkrOTk9MTA4JCksIG5vIGVuIHRvdGEgbGEgcG9ibGFjacOzICgkMTAwMCQpLiJdLCAiZXJyIjogWyIiLCAiQ0FTT1NfUE9TU0lCTEVTX01BTF9DT01QVEFUUyIsICJBU0lNRVRSSUFfQ09ORElDSU9OQURBX01BTCIsICJQUk9CQUJJTElUQVRfQ09ORElDSU9OQURBX01BTCJdLCAicmVzIjogWyJEb25lbiBwb3NpdGl1ICQ5JCBtYWxhbHRzIGkgJDk5MFxcY2RvdFxcZGZyYWN7MX17MTB9PTk5JCBzYW5zIChmYWxzb3MgcG9zaXRpdXMpOiBlbiB0b3RhbCwgJDkrOTk9MTA4JCBwb3NpdGl1cy4gRCdhcXVlc3RzLCBub23DqXMgJDkkIHPDs24gbWFsYWx0cyBkZSB2ZXJpdGF0OiAkUChcXHRleHR7bWFsYWx0fXxcXHRleHR7cG9zaXRpdX0pPVxcZGZyYWN7OX17MTA4fT1cXGRmcmFjezF9ezEyfVxcYXBwcm94MHssfTA4MyQuIMOJcyBtb2x0IG3DqXMgcGV0aXRhIHF1ZSAkUChcXHRleHR7cG9zaXRpdX18XFx0ZXh0e21hbGFsdH0pPTB7LH05JDogZW5jYXJhIHF1ZSBlbCB0ZXN0IHNpZ3VpIGZpYWJsZSBhbWIgZWxzIG1hbGFsdHMsIGNvbSBxdWUgaGkgaGEgcG9xdcOtc3NpbXMgbWFsYWx0cyBkZSB2ZXJpdGF0ICgkMTAkIGRlICQxMDAwJCksIGxhIG1ham9yaWEgZGUgcG9zaXRpdXMgYWNhYmVuIHNlbnQgZmFsc29zIHBvc2l0aXVzIGRlIGdlbnQgc2FuYSJdLCAiY29tIjogIkFxdWVzdCDDqXMgbCdleGVtcGxlIGNsw6Bzc2ljIHF1ZSBtb3N0cmEgcGVyIHF1w6ggJFAoQnxBKSQgaSAkUChBfEIpJCBwb2RlbiBzZXIgbW9sdCBkaWZlcmVudHM6IHVuIHRlc3QgbW9sdCBmaWFibGUgcG90IGRvbmFyLCB0b3QgaSBhaXjDrSwgbcOpcyBmYWxzb3MgcG9zaXRpdXMgcXVlIHBvc2l0aXVzIGNlcnRzIHF1YW4gbGEgY29uZGljacOzIHF1ZSBlcyBidXNjYSDDqXMgcG9jIGZyZXHDvGVudC4ifQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 274 156\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Taula de doble entrada: files Malalt, Sa, columnes Positiu, Negatiu, amb els totals de cada fila, cada columna i el total general.</title><rect x=\"14.0\" y=\"14.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\"></text><rect x=\"92.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Positiu</text><rect x=\"148.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Negatiu</text><rect x=\"204.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"14.0\" y=\"46.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Malalt</text><rect x=\"92.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">9</text><rect x=\"148.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">1</text><rect x=\"204.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">10</text><rect x=\"14.0\" y=\"78.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Sa</text><rect x=\"92.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">99</text><rect x=\"148.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">891</text><rect x=\"204.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">990</text><rect x=\"14.0\" y=\"110.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"92.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">108</text><rect x=\"148.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">892</text><rect x=\"204.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">1000</text></svg>"
  }
 ]
};
