/* Generat per tools/build.py — no editeu aquest fitxer a mà. */
window.FULL = {
 "full": 9,
 "titol": "Full 9 — Cossos geomètrics. Àrea i volum",
 "subtitol": "Àrea total de prismes, piràmides, cilindres, cons i l'esfera, i càlcul de volums en problemes aplicats.",
 "blocs": [
  {
   "id": "prismes",
   "titol": "Prismes i el cub",
   "descripcio": "Àrea total de prismes rectes i del cub, incloent-hi la diagonal a partir de l'àrea.",
   "items": [
    "363a",
    "363b",
    "170a",
    "170b",
    "170c",
    "170d",
    "170e",
    "170f",
    "170g",
    "170h",
    "170i",
    "171",
    "172",
    "173",
    "174",
    "175",
    "176a",
    "176b"
   ]
  },
  {
   "id": "piramides",
   "titol": "Piràmides i tetraedres",
   "descripcio": "Àrea total de piràmides regulars i tetraedres, amb Pitàgores per trobar l'apotema quan cal.",
   "items": [
    "334a",
    "334b",
    "334c",
    "335a",
    "335b",
    "177",
    "179a",
    "179b",
    "180a",
    "180b",
    "180c",
    "180d",
    "183",
    "181a",
    "181b",
    "182"
   ]
  },
  {
   "id": "cossos_rodons",
   "titol": "Cilindres, cons i l'esfera",
   "descripcio": "Àrea total de cossos de revolució i problemes inversos per trobar radi, altura o generatriu. En aquest bloc prenem π ≈ 3,14.",
   "items": [
    "364a",
    "364b",
    "185a",
    "185b",
    "188",
    "184",
    "189",
    "190",
    "191",
    "186",
    "187",
    "193a",
    "193b"
   ]
  },
  {
   "id": "volums_aplicacions",
   "titol": "Volums i problemes aplicats",
   "descripcio": "Volum de prismes, piràmides, cilindres, cons, l'esfera i el cub, i problemes de la vida real. En els cossos rodons prenem π ≈ 3,14.",
   "items": [
    "365a",
    "365b",
    "195a",
    "195c",
    "195e",
    "195f",
    "196a",
    "196b",
    "197",
    "198",
    "199"
   ]
  }
 ],
 "errors": {
  "ARREL_MAL_APLICADA": "L'arrel no s'ha aplicat on tocava. Aïlla primer la quantitat que va sota l'arrel i fes-la al final, sobre el valor ja aïllat.",
  "ARREL_OBLIDADA": "T'has quedat amb el quadrat (o el cub) de la incògnita. De $x^2=k$ encara falta l'arrel per arribar a $x$: comprova sempre quina de les dues quantitats et demanen.",
  "FACTOR_OBLIDAT": "T'has deixat pel camí un dels factors en combinar els exponents.",
  "FACTOR_TRES_VOLUM": "El terç del volum va només amb piràmides i cons. Prismes, cilindres i cubs són base per altura, sense dividir.",
  "FORMULA_INVERTIDA": "Has dividit on la fórmula multiplica (o al revés). Escriu la fórmula sencera abans de substituir-hi els valors.",
  "MEITAT_OBLIDADA": "Hi ha un factor $2$ pel mig que t'has deixat: radi i diàmetre, semibase i base, semidiagonal i diagonal. Comprova quina de les dues et demanen.",
  "ORDRE_MULTIPLICACIO_DIVISIO": "La divisió i la multiplicació tenen la mateixa prioritat i es fan d'esquerra a dreta: no es pot agrupar la multiplicació primer perquè \"queda més bé\".",
  "PRODUCTE_MAL": "Has multiplicat els dos nombres que et donaven en comptes d'aïllar la incògnita amb els productes creuats.",
  "SIGNE_TERME_INDEPENDENT": "Revisa el signe del terme independent (el que no porta $x$): és fàcil perdre'l en sumar o restar.",
  "SUMA_DE_PARTS_INCOMPLETA": "L'àrea total d'un cos és la suma de TOTES les seves cares. Has calculat bé una part (la base, o la lateral) però encara falta sumar-hi l'altra.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau."
 },
 "items": [
  {
   "id": "334a",
   "ex": 334,
   "ap": "a",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el volum d'aquesta piràmide, a partir de les dades següents. Recorda: $V=\\dfrac{A_{\\text{base}}\\cdot h}{3}$.",
   "enunciat": "Àrea de la base $=12$ cm$^2$; altura $=5$ cm.",
   "opcions": [
    "$17$ cm$^3$",
    "$20$ cm$^3$",
    "$180$ cm$^3$",
    "$60$ cm$^3$"
   ],
   "pistes": [
    "L'àrea de la base ja te la donen: no l'has de calcular.",
    "$V=\\dfrac{12\\cdot 5}{3}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgc3VtYXQgJDEyKzUkIGVuIGxsb2MgZGUgbXVsdGlwbGljYXIuIEhhcyBkaXZpZGl0IG9uIGxhIGbDs3JtdWxhIG11bHRpcGxpY2EgKG8gYWwgcmV2w6lzKS4gRXNjcml1IGxhIGbDs3JtdWxhIHNlbmNlcmEgYWJhbnMgZGUgc3Vic3RpdHVpci1oaSBlbHMgdmFsb3JzLiIsICIiLCAiSGFzIG11bHRpcGxpY2F0IHBlciAkMyQgZW4gbGxvYyBkZSBkaXZpZGlyLiBMYSBwaXLDoG1pZGUgw6lzIE3DiVMgUEVUSVRBIHF1ZSBlbCBwcmlzbWEsIG5vIHRyZXMgdmVnYWRlcyBtw6lzIGdyYW4uIiwgIiQxMlxcY2RvdCA1PTYwJCDDqXMgZWwgdm9sdW0gZGVsIFBSSVNNQSBkZSBsYSBtYXRlaXhhIGJhc2UgaSBhbHR1cmEuIExhIHBpcsOgbWlkZSBuJ8OpcyBsYSB0ZXJjZXJhIHBhcnQuIEVsIHRlcsOnIGRlbCB2b2x1bSB2YSBub23DqXMgYW1iIHBpcsOgbWlkZXMgaSBjb25zLiBQcmlzbWVzLCBjaWxpbmRyZXMgaSBjdWJzIHPDs24gYmFzZSBwZXIgYWx0dXJhLCBzZW5zZSBkaXZpZGlyLiJdLCAiZXJyIjogWyJGT1JNVUxBX0lOVkVSVElEQSIsICIiLCAiRkFDVE9SX1RSRVNfVk9MVU0iLCAiRkFDVE9SX1RSRVNfVk9MVU0iXSwgInJlcyI6IFsiJFY9XFxkZnJhY3tBX3tcXHRleHR7YmFzZX19XFxjZG90IGh9ezN9PVxcZGZyYWN7MTJcXGNkb3QgNX17M309XFxkZnJhY3s2MH17M309MjAkIGNtJF4zJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 205 155\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Piràmide recta de base quadrangular regular, en perspectiva.</title><g transform=\"translate(140.6,126.0)\"><polygon points=\"0.0,-15.0 50.0,0.0 0.0,15.0 -50.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><polygon points=\"0.0,-112.0 50.0,0.0 0.0,15.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-112.0 0.0,15.0 -50.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"0.0\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"-50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"0.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"1.6\"/><path d=\"M 11.0 0.0 L 11.0 -11.0 L 0.0 -11.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"-112.0\" x2=\"-71.5\" y2=\"-112.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-71.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-68.0\" y1=\"-112.0\" x2=\"-68.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-64.0\" y1=\"-116.0\" x2=\"-72.0\" y2=\"-108.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-64.0\" y1=\"-4.0\" x2=\"-72.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"-101\" y=\"-53.1\" text-anchor=\"middle\" class=\"fig-etq petita\">h = 5 cm</text></g></svg>"
  },
  {
   "id": "334b",
   "ex": 334,
   "ap": "b",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el volum d'aquesta piràmide, a partir de les dades següents. Recorda: $V=\\dfrac{A_{\\text{base}}\\cdot h}{3}$.",
   "enunciat": "Àrea de la base $=30$ m$^2$; altura $=4$ m.",
   "opcions": [
    "$120$ m$^3$",
    "$360$ m$^3$",
    "$40$ m$^3$",
    "$34$ m$^3$"
   ],
   "pistes": [
    "$V=\\dfrac{A_{\\text{base}}\\cdot h}{3}$.",
    "$\\dfrac{30\\cdot 4}{3}=\\dfrac{120}{3}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJGYWx0YSBkaXZpZGlyIHBlciAkMyQuIEVsIHRlcsOnIGRlbCB2b2x1bSB2YSBub23DqXMgYW1iIHBpcsOgbWlkZXMgaSBjb25zLiBQcmlzbWVzLCBjaWxpbmRyZXMgaSBjdWJzIHPDs24gYmFzZSBwZXIgYWx0dXJhLCBzZW5zZSBkaXZpZGlyLiIsICJIYXMgbXVsdGlwbGljYXQgcGVyICQzJCBlbiBsbG9jIGRlIGRpdmlkaXIuIiwgIiIsICJIYXMgc3VtYXQgZW4gbGxvYyBkZSBtdWx0aXBsaWNhci4gSGFzIGRpdmlkaXQgb24gbGEgZsOzcm11bGEgbXVsdGlwbGljYSAobyBhbCByZXbDqXMpLiBFc2NyaXUgbGEgZsOzcm11bGEgc2VuY2VyYSBhYmFucyBkZSBzdWJzdGl0dWlyLWhpIGVscyB2YWxvcnMuIl0sICJlcnIiOiBbIkZBQ1RPUl9UUkVTX1ZPTFVNIiwgIkZBQ1RPUl9UUkVTX1ZPTFVNIiwgIiIsICJGT1JNVUxBX0lOVkVSVElEQSJdLCAicmVzIjogWyIkVj1cXGRmcmFjezMwXFxjZG90IDR9ezN9PVxcZGZyYWN7MTIwfXszfT00MCQgbSReMyQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 195 155\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Piràmide recta de base quadrangular regular, en perspectiva.</title><g transform=\"translate(130.4,126.0)\"><polygon points=\"0.0,-15.0 50.0,0.0 0.0,15.0 -50.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><polygon points=\"0.0,-112.0 50.0,0.0 0.0,15.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-112.0 0.0,15.0 -50.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"0.0\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"-50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"0.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"1.6\"/><path d=\"M 11.0 0.0 L 11.0 -11.0 L 0.0 -11.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"-112.0\" x2=\"-71.5\" y2=\"-112.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-71.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-68.0\" y1=\"-112.0\" x2=\"-68.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-64.0\" y1=\"-116.0\" x2=\"-72.0\" y2=\"-108.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-64.0\" y1=\"-4.0\" x2=\"-72.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"-94\" y=\"-53.1\" text-anchor=\"middle\" class=\"fig-etq petita\">h = 4 m</text></g></svg>"
  },
  {
   "id": "334c",
   "ex": 334,
   "ap": "c",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el volum d'aquesta piràmide, a partir de les dades següents. Recorda: $V=\\dfrac{A_{\\text{base}}\\cdot h}{3}$.",
   "enunciat": "Àrea de la base $=9$ cm$^2$; altura $=7$ cm.",
   "opcions": [
    "$63$ cm$^3$",
    "$189$ cm$^3$",
    "$16$ cm$^3$",
    "$21$ cm$^3$"
   ],
   "pistes": [
    "$V=\\dfrac{A_{\\text{base}}\\cdot h}{3}$.",
    "$\\dfrac{9\\cdot 7}{3}=\\dfrac{63}{3}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJGYWx0YSBkaXZpZGlyIHBlciAkMyQuIEVsIHRlcsOnIGRlbCB2b2x1bSB2YSBub23DqXMgYW1iIHBpcsOgbWlkZXMgaSBjb25zLiBQcmlzbWVzLCBjaWxpbmRyZXMgaSBjdWJzIHPDs24gYmFzZSBwZXIgYWx0dXJhLCBzZW5zZSBkaXZpZGlyLiIsICJIYXMgbXVsdGlwbGljYXQgcGVyICQzJCBlbiBsbG9jIGRlIGRpdmlkaXIuIiwgIkhhcyBzdW1hdCAkOSs3JC4gSGFzIGRpdmlkaXQgb24gbGEgZsOzcm11bGEgbXVsdGlwbGljYSAobyBhbCByZXbDqXMpLiBFc2NyaXUgbGEgZsOzcm11bGEgc2VuY2VyYSBhYmFucyBkZSBzdWJzdGl0dWlyLWhpIGVscyB2YWxvcnMuIiwgIiJdLCAiZXJyIjogWyJGQUNUT1JfVFJFU19WT0xVTSIsICJGQUNUT1JfVFJFU19WT0xVTSIsICJGT1JNVUxBX0lOVkVSVElEQSIsICIiXSwgInJlcyI6IFsiJFY9XFxkZnJhY3s5XFxjZG90IDd9ezN9PVxcZGZyYWN7NjN9ezN9PTIxJCBjbSReMyQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 205 155\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Piràmide recta de base quadrangular regular, en perspectiva.</title><g transform=\"translate(140.6,126.0)\"><polygon points=\"0.0,-15.0 50.0,0.0 0.0,15.0 -50.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><polygon points=\"0.0,-112.0 50.0,0.0 0.0,15.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-112.0 0.0,15.0 -50.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"0.0\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"-50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"0.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"1.6\"/><path d=\"M 11.0 0.0 L 11.0 -11.0 L 0.0 -11.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"-112.0\" x2=\"-71.5\" y2=\"-112.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-71.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-68.0\" y1=\"-112.0\" x2=\"-68.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-64.0\" y1=\"-116.0\" x2=\"-72.0\" y2=\"-108.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-64.0\" y1=\"-4.0\" x2=\"-72.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"-101\" y=\"-53.1\" text-anchor=\"middle\" class=\"fig-etq petita\">h = 7 cm</text></g></svg>"
  },
  {
   "id": "335a",
   "ex": 335,
   "ap": "a",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula l'àrea lateral d'aquesta piràmide de base quadrada, a partir de les dades següents. Recorda: $A_{\\text{lat}}=\\dfrac{P_{\\text{base}}\\cdot a_p}{2}$, on $a_p$ és l'apotema de la piràmide.",
   "enunciat": "Perímetre de la base $=20$ cm; apotema de la piràmide $=6$ cm.",
   "opcions": [
    "$40$ cm$^2$",
    "$60$ cm$^2$",
    "$26$ cm$^2$",
    "$120$ cm$^2$"
   ],
   "pistes": [
    "Les cares laterals són triangles: tots junts fan un sol triangle de base el perímetre.",
    "$A_{\\text{lat}}=\\dfrac{20\\cdot 6}{2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgZGl2aWRpdCBwZXIgJDMkLiBFbCAkMyQgw6lzIGRlIGxhIGbDs3JtdWxhIGRlbCBWT0xVTTsgYXF1w60gw6lzIHVuYSDDoHJlYSBpIGVsIHF1ZSBoaSB2YSDDqXMgZGl2aWRpciBwZXIgJDIkLiIsICIiLCAiSGFzIHN1bWF0ICQyMCs2JCBlbiBsbG9jIGRlIG11bHRpcGxpY2FyLiBIYXMgZGl2aWRpdCBvbiBsYSBmw7NybXVsYSBtdWx0aXBsaWNhIChvIGFsIHJldsOpcykuIEVzY3JpdSBsYSBmw7NybXVsYSBzZW5jZXJhIGFiYW5zIGRlIHN1YnN0aXR1aXItaGkgZWxzIHZhbG9ycy4iLCAiJDIwXFxjZG90IDY9MTIwJDsgZmFsdGEgZGl2aWRpciBwZXIgJDIkLiBMZXMgY2FyZXMgbGF0ZXJhbHMgc8OzbiB0cmlhbmdsZXMsIGkgY2FkYSB0cmlhbmdsZSBwb3J0YSBlbCBzZXUgbWlnLiBIaSBoYSB1biBmYWN0b3IgJDIkIHBlbCBtaWcgcXVlIHQnaGFzIGRlaXhhdDogcmFkaSBpIGRpw6BtZXRyZSwgc2VtaWJhc2UgaSBiYXNlLCBzZW1pZGlhZ29uYWwgaSBkaWFnb25hbC4gQ29tcHJvdmEgcXVpbmEgZGUgbGVzIGR1ZXMgZXQgZGVtYW5lbi4iXSwgImVyciI6IFsiRkFDVE9SX1RSRVNfVk9MVU0iLCAiIiwgIkZPUk1VTEFfSU5WRVJUSURBIiwgIk1FSVRBVF9PQkxJREFEQSJdLCAicmVzIjogWyIkQV97XFx0ZXh0e2xhdH19PVxcZGZyYWN7UFxcY2RvdCBhX3B9ezJ9PVxcZGZyYWN7MjBcXGNkb3QgNn17Mn09XFxkZnJhY3sxMjB9ezJ9PTYwJCBjbSReMiQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 315 169\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Piràmide recta de base quadrangular regular, en perspectiva. Al costat, una cara lateral en veritable magnitud.</title><g transform=\"translate(64.0,139.7)\"><polygon points=\"0.0,-15.0 50.0,0.0 0.0,15.0 -50.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><polygon points=\"0.0,-112.0 50.0,0.0 0.0,15.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-112.0 0.0,15.0 -50.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"0.0\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"-50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"116.0,-110.4 70.0,0.0 162.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"116.0\" y1=\"-110.4\" x2=\"116.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><path d=\"M 127.0 0.0 L 127.0 -11.0 L 116.0 -11.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"118.5\" y1=\"-110.4\" x2=\"181.5\" y2=\"-110.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"118.5\" y1=\"0.0\" x2=\"181.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"178.0\" y1=\"-110.4\" x2=\"178.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"174.0\" y1=\"-114.4\" x2=\"182.0\" y2=\"-106.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"174.0\" y1=\"-4.0\" x2=\"182.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"211\" y=\"-52.3\" text-anchor=\"middle\" class=\"fig-etq petita\">a = 6 cm</text><text x=\"116\" y=\"-117.5\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">una cara</text></g></svg>"
  },
  {
   "id": "335b",
   "ex": 335,
   "ap": "b",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula l'àrea lateral d'aquesta piràmide de base quadrada, a partir de les dades següents. Recorda: $A_{\\text{lat}}=\\dfrac{P_{\\text{base}}\\cdot a_p}{2}$, on $a_p$ és l'apotema de la piràmide.",
   "enunciat": "Perímetre de la base $=24$ m; apotema de la piràmide $=5$ m.",
   "opcions": [
    "$29$ m$^2$",
    "$120$ m$^2$",
    "$40$ m$^2$",
    "$60$ m$^2$"
   ],
   "pistes": [
    "$A_{\\text{lat}}=\\dfrac{P\\cdot a_p}{2}$.",
    "$\\dfrac{24\\cdot 5}{2}=\\dfrac{120}{2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgc3VtYXQgJDI0KzUkLiBIYXMgZGl2aWRpdCBvbiBsYSBmw7NybXVsYSBtdWx0aXBsaWNhIChvIGFsIHJldsOpcykuIEVzY3JpdSBsYSBmw7NybXVsYSBzZW5jZXJhIGFiYW5zIGRlIHN1YnN0aXR1aXItaGkgZWxzIHZhbG9ycy4iLCAiRmFsdGEgZGl2aWRpciBwZXIgJDIkLiBIaSBoYSB1biBmYWN0b3IgJDIkIHBlbCBtaWcgcXVlIHQnaGFzIGRlaXhhdDogcmFkaSBpIGRpw6BtZXRyZSwgc2VtaWJhc2UgaSBiYXNlLCBzZW1pZGlhZ29uYWwgaSBkaWFnb25hbC4gQ29tcHJvdmEgcXVpbmEgZGUgbGVzIGR1ZXMgZXQgZGVtYW5lbi4iLCAiSGFzIGRpdmlkaXQgcGVyICQzJCwgcXVlIMOpcyBlbCBkZSBsYSBmw7NybXVsYSBkZWwgdm9sdW0uIFBlciBhIHVuYSDDoHJlYSBsYXRlcmFsIGVzIGRpdmlkZWl4IHBlciAkMiQuIiwgIiJdLCAiZXJyIjogWyJGT1JNVUxBX0lOVkVSVElEQSIsICJNRUlUQVRfT0JMSURBREEiLCAiRkFDVE9SX1RSRVNfVk9MVU0iLCAiIl0sICJyZXMiOiBbIiRBX3tcXHRleHR7bGF0fX09XFxkZnJhY3syNFxcY2RvdCA1fXsyfT1cXGRmcmFjezEyMH17Mn09NjAkIG0kXjIkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 305 155\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Piràmide recta de base quadrangular regular, en perspectiva. Al costat, una cara lateral en veritable magnitud.</title><g transform=\"translate(64.0,126.0)\"><polygon points=\"0.0,-15.0 50.0,0.0 0.0,15.0 -50.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><polygon points=\"0.0,-112.0 50.0,0.0 0.0,15.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-112.0 0.0,15.0 -50.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"0.0\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"-50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"116.0,-76.7 70.0,0.0 162.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"116.0\" y1=\"-76.7\" x2=\"116.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><path d=\"M 127.0 0.0 L 127.0 -11.0 L 116.0 -11.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"118.5\" y1=\"-76.7\" x2=\"181.5\" y2=\"-76.7\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"118.5\" y1=\"0.0\" x2=\"181.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"178.0\" y1=\"-76.7\" x2=\"178.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"174.0\" y1=\"-80.7\" x2=\"182.0\" y2=\"-72.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"174.0\" y1=\"-4.0\" x2=\"182.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"204\" y=\"-35.4\" text-anchor=\"middle\" class=\"fig-etq petita\">a = 5 m</text><text x=\"116\" y=\"-83.7\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">una cara</text></g></svg>"
  },
  {
   "id": "177",
   "ex": 177,
   "ap": "",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Una piràmide pentagonal regular té la base de costat $4$ cm i apotema $2{,}75$ cm; l'apotema de la piràmide és $11{,}83$ cm. Calcula la seva àrea total.",
   "opcions": [
    "$118{,}3$ cm$^2$",
    "$145{,}8$ cm$^2$",
    "$27{,}5$ cm$^2$",
    "$236{,}6$ cm$^2$"
   ],
   "pistes": [
    "L'àrea total d'una piràmide és $A_{\\text{base}}+A_{\\text{lateral}}$ (una sola base), amb $A_{\\text{lateral}}=\\dfrac{\\text{perímetre de la base}\\cdot\\text{apotema de la piràmide}}{2}$.",
    "Perímetre de la base: $5\\cdot4=20$ cm. Llavors $A_{\\text{base}}=\\dfrac{20\\cdot2{,}75}{2}$ i $A_{\\text{lateral}}=\\dfrac{20\\cdot11{,}83}{2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igw6lzIG5vbcOpcyBsJ8OgcmVhIGxhdGVyYWw6IGVuY2FyYSBmYWx0YSBzdW1hci1oaSBsJ8OgcmVhIGRlIGxhIGJhc2UgcGVudGFnb25hbC4iLCAiIiwgIkFxdWVzdGEgw6lzIG5vbcOpcyBsJ8OgcmVhIGRlIGxhIGJhc2U6IGVuY2FyYSBmYWx0YSBzdW1hci1oaSBsJ8OgcmVhIGxhdGVyYWwuIiwgIlNlbWJsYSBxdWUgbm8gaGFzIGRpdmlkaXQgcGVyICQyJCBsJ8OgcmVhIGxhdGVyYWw6ICRBX3tcXHRleHR7bGF0ZXJhbH19PVxcZGZyYWN7XFx0ZXh0e3BlcsOtbWV0cmV9XFxjZG90XFx0ZXh0e2Fwb3RlbWEgcGlyw6BtaWRlfX17Mn0kLCBubyBzZW5zZSBkaXZpZGlyLiJdLCAiZXJyIjogWyJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIiIsICJTVU1BX0RFX1BBUlRTX0lOQ09NUExFVEEiLCAiU0lHTkVfVEVSTUVfSU5ERVBFTkRFTlQiXSwgInJlcyI6IFsiJEFfe1xcdGV4dHtiYXNlfX09XFxkZnJhY3syMFxcY2RvdDJ7LH03NX17Mn09Mjd7LH01JCBjbSReMiQiLCAiJEFfe1xcdGV4dHtsYXRlcmFsfX09XFxkZnJhY3syMFxcY2RvdDExeyx9ODN9ezJ9PTExOHssfTMkIGNtJF4yJCIsICIkQV97XFx0ZXh0e3RvdGFsfX09Mjd7LH01KzExOHssfTM9MTQ1eyx9OCQgY20kXjIkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 286 206\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Piràmide recta de base pentagonal regular, en perspectiva. Al costat, una cara lateral en veritable magnitud.</title><g transform=\"translate(61.6,159.2)\"><polygon points=\"0.0,-15.0 47.6,-4.6 29.4,12.1 -29.4,12.1 -47.6,-4.6\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><polygon points=\"0.0,-112.0 47.6,-4.6 29.4,12.1\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-112.0 29.4,12.1 -29.4,12.1\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-112.0 -29.4,12.1 -47.6,-4.6\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"29.4\" y2=\"12.1\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"-29.4\" y2=\"12.1\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"113.6,-130.0 91.6,0.0 135.5,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"113.6\" y1=\"-130.0\" x2=\"113.6\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><path d=\"M 124.6 0.0 L 124.6 -11.0 L 113.6 -11.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"116.1\" y1=\"-130.0\" x2=\"155.0\" y2=\"-130.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"116.1\" y1=\"0.0\" x2=\"155.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"151.5\" y1=\"-130.0\" x2=\"151.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"147.5\" y1=\"-134.0\" x2=\"155.5\" y2=\"-126.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"147.5\" y1=\"-4.0\" x2=\"155.5\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"91.6\" y1=\"2.5\" x2=\"91.6\" y2=\"18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"135.5\" y1=\"2.5\" x2=\"135.5\" y2=\"18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"91.6\" y1=\"15.0\" x2=\"135.5\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"87.6\" y1=\"11.0\" x2=\"95.6\" y2=\"19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"131.5\" y1=\"11.0\" x2=\"139.5\" y2=\"19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"184.5\" y=\"-62.1\" text-anchor=\"middle\" class=\"fig-etq petita\">11,83 cm</text><text x=\"113.6\" y=\"29.4\" text-anchor=\"middle\" class=\"fig-etq\">4 cm</text><text x=\"113.6\" y=\"-137.1\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">una cara</text></g></svg>"
  },
  {
   "id": "179a",
   "ex": 179,
   "ap": "a",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Dues piràmides regulars.",
   "enunciat": "Una piràmide quadrangular regular té la base de costat $25$ m i l'apotema de la piràmide fa $34$ m. Calcula la seva àrea total.",
   "opcions": [
    "$3400$ m$^2$",
    "$2325$ m$^2$",
    "$1700$ m$^2$",
    "$625$ m$^2$"
   ],
   "pistes": [
    "L'àrea total d'una piràmide és $A_{\\text{base}}+A_{\\text{lateral}}$ (una sola base), amb $A_{\\text{lateral}}=\\dfrac{\\text{perímetre de la base}\\cdot\\text{apotema de la piràmide}}{2}$.",
    "Perímetre de la base: $4\\cdot25=100$ m. Llavors $A_{\\text{base}}=25^2$ i $A_{\\text{lateral}}=\\dfrac{100\\cdot34}{2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJTZW1ibGEgcXVlIG5vIGhhcyBkaXZpZGl0IHBlciAkMiQgbCfDoHJlYSBsYXRlcmFsLiIsICIiLCAiQXF1ZXN0YSDDqXMgbm9tw6lzIGwnw6ByZWEgbGF0ZXJhbDogZW5jYXJhIGZhbHRhIHN1bWFyLWhpIGwnw6ByZWEgZGUgbGEgYmFzZSBxdWFkcmFkYS4iLCAiQXF1ZXN0YSDDqXMgbm9tw6lzIGwnw6ByZWEgZGUgbGEgYmFzZTogZW5jYXJhIGZhbHRhIHN1bWFyLWhpIGwnw6ByZWEgbGF0ZXJhbC4iXSwgImVyciI6IFsiU0lHTkVfVEVSTUVfSU5ERVBFTkRFTlQiLCAiIiwgIlNVTUFfREVfUEFSVFNfSU5DT01QTEVUQSIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIl0sICJyZXMiOiBbIiRBX3tcXHRleHR7YmFzZX19PTI1XjI9NjI1JCBtJF4yJCIsICIkQV97XFx0ZXh0e2xhdGVyYWx9fT1cXGRmcmFjezEwMFxcY2RvdDM0fXsyfT0xNzAwJCBtJF4yJCIsICIkQV97XFx0ZXh0e3RvdGFsfX09NjI1KzE3MDA9MjMyNSQgbSReMiQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 284 201\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Piràmide recta de base quadrangular regular, en perspectiva. Al costat, una cara lateral en veritable magnitud.</title><g transform=\"translate(64.0,154.4)\"><polygon points=\"0.0,-15.0 50.0,0.0 0.0,15.0 -50.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><polygon points=\"0.0,-112.0 50.0,0.0 0.0,15.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-112.0 0.0,15.0 -50.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"0.0\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"-50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"116.0,-125.1 70.0,0.0 162.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"116.0\" y1=\"-125.1\" x2=\"116.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><path d=\"M 127.0 0.0 L 127.0 -11.0 L 116.0 -11.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"118.5\" y1=\"-125.1\" x2=\"181.5\" y2=\"-125.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"118.5\" y1=\"0.0\" x2=\"181.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"178.0\" y1=\"-125.1\" x2=\"178.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"174.0\" y1=\"-129.1\" x2=\"182.0\" y2=\"-121.1\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"174.0\" y1=\"-4.0\" x2=\"182.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"70.0\" y1=\"2.5\" x2=\"70.0\" y2=\"18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"162.0\" y1=\"2.5\" x2=\"162.0\" y2=\"18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"70.0\" y1=\"15.0\" x2=\"162.0\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"66.0\" y1=\"11.0\" x2=\"74.0\" y2=\"19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"158.0\" y1=\"11.0\" x2=\"166.0\" y2=\"19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"193\" y=\"-59.6\" text-anchor=\"middle\" class=\"fig-etq petita\">34 m</text><text x=\"116\" y=\"29.4\" text-anchor=\"middle\" class=\"fig-etq\">25 m</text><text x=\"116\" y=\"-132.2\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">una cara</text></g></svg>"
  },
  {
   "id": "179b",
   "ex": 179,
   "ap": "b",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Dues piràmides regulars.",
   "enunciat": "Una piràmide hexagonal regular té la base de costat $6$ m i l'altura de la piràmide (no l'apotema) fa $9$ m. Calcula la seva àrea total.",
   "opcions": [
    "$\\approx254{,}53$ m$^2$",
    "$\\approx187{,}06$ m$^2$",
    "$\\approx280{,}59$ m$^2$",
    "$\\approx93{,}53$ m$^2$"
   ],
   "pistes": [
    "Et donen l'altura, no l'apotema de la piràmide. L'altura, l'apotema de la base i l'apotema de la piràmide formen un triangle rectangle, i l'apotema de la piràmide n'és la hipotenusa.",
    "Apotema de la base: $a_{\\text{base}}=\\dfrac{6\\sqrt3}{2}$. Apotema de la piràmide: $\\sqrt{9^2+a_{\\text{base}}^2}$. Després, $A_{\\text{base}}+A_{\\text{lateral}}$, amb perímetre $6\\cdot6=36$ m."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJTZW1ibGEgcXVlIGhhcyBmZXQgc2VydmlyIGRpcmVjdGFtZW50IGwnYWx0dXJhIGRlIGxhIHBpcsOgbWlkZSAoJDkkIG0pIGNvbSBzaSBmb3MgbCdhcG90ZW1hIGRlIGxhIHBpcsOgbWlkZSBlbiBjb21wdGVzIGRlIGNhbGN1bGFyLWxhIGFtYiBQaXTDoGdvcmVzIGEgcGFydGlyIGRlIGwnYWx0dXJhIGkgbCdhcG90ZW1hIGRlIGxhIGJhc2UuIiwgIkFxdWVzdCB2YWxvciDDqXMgbm9tw6lzIGwnw6ByZWEgbGF0ZXJhbDogZW5jYXJhIGZhbHRhIHN1bWFyLWhpIGwnw6ByZWEgZGUgbGEgYmFzZSBoZXhhZ29uYWwuIiwgIiIsICJBcXVlc3RhIMOpcyBub23DqXMgbCfDoHJlYSBkZSBsYSBiYXNlOiBlbmNhcmEgZmFsdGEgc3VtYXItaGkgbCfDoHJlYSBsYXRlcmFsLiJdLCAiZXJyIjogWyJBUlJFTF9NQUxfQVBMSUNBREEiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiLCAiU1VNQV9ERV9QQVJUU19JTkNPTVBMRVRBIl0sICJyZXMiOiBbIiRhX3tcXHRleHR7YmFzZX19XFxhcHByb3g1eyx9MiQgbSIsICIkQV97XFx0ZXh0e2Jhc2V9fT1cXGRmcmFjezM2XFxjZG90NXssfTJ9ezJ9XFxhcHByb3g5M3ssfTUzJCBtJF4yJCIsICIkYV97XFx0ZXh0e3BpcsOgbWlkZX19PVxcc3FydHs5XjIrNXssfTJeMn1cXGFwcHJveDEweyx9MzkkIG0iLCAiJEFfe1xcdGV4dHtsYXRlcmFsfX09XFxkZnJhY3szNlxcY2RvdDEweyx9Mzl9ezJ9XFxhcHByb3gxODd7LH0wNiQgbSReMiQiLCAiJEFfe1xcdGV4dHt0b3RhbH19XFxhcHByb3g5M3ssfTUzKzE4N3ssfTA2XFxhcHByb3gyODB7LH01OSQgbSReMiQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 164 184\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Piràmide recta de base hexagonal regular, en perspectiva.</title><g transform=\"translate(106.6,126.0)\"><polygon points=\"0.0,-15.0 43.3,-7.5 43.3,7.5 0.0,15.0 -43.3,7.5 -43.3,-7.5\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><polygon points=\"0.0,-112.0 43.3,-7.5 43.3,7.5\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-112.0 43.3,7.5 0.0,15.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-112.0 0.0,15.0 -43.3,7.5\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-112.0 -43.3,7.5 -43.3,-7.5\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"43.3\" y2=\"7.5\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"0.0\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"-43.3\" y2=\"7.5\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"0.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"1.6\"/><path d=\"M 11.0 0.0 L 11.0 -11.0 L 0.0 -11.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"-112.0\" x2=\"-71.5\" y2=\"-112.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-71.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-68.0\" y1=\"-112.0\" x2=\"-68.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-64.0\" y1=\"-116.0\" x2=\"-72.0\" y2=\"-108.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-64.0\" y1=\"-4.0\" x2=\"-72.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"43.7\" y1=\"10.0\" x2=\"46.6\" y2=\"26.7\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.4\" y1=\"17.5\" x2=\"3.3\" y2=\"34.2\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"46.0\" y1=\"23.3\" x2=\"2.7\" y2=\"30.8\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"49.3\" y1=\"18.6\" x2=\"42.8\" y2=\"27.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"6.0\" y1=\"26.1\" x2=\"-0.5\" y2=\"35.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"-83\" y=\"-53.1\" text-anchor=\"middle\" class=\"fig-etq petita\">9 m</text><text x=\"26.3\" y=\"41.2\" text-anchor=\"middle\" class=\"fig-etq\">6 m</text></g></svg>"
  },
  {
   "id": "180a",
   "ex": 180,
   "ap": "a",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula l'àrea total d'un tetraedre regular d'aresta:",
   "enunciat": "Calcula l'àrea total d'un tetraedre regular d'aresta: $3$ cm.",
   "opcions": [
    "$\\approx15{,}59$ cm$^2$",
    "$\\approx3{,}9$ cm$^2$",
    "$\\approx9$ cm$^2$",
    "$\\approx31{,}18$ cm$^2$"
   ],
   "pistes": [
    "Cada cara és un triangle equilàter d'àrea $\\dfrac{L^2\\sqrt3}{4}$, i n'hi ha $4$ d'iguals.",
    "Les quatre cares juntes: $A=4\\cdot\\dfrac{L^2\\sqrt3}{4}=L^2\\sqrt3$. Aquí $L=3$ cm: no t'oblidis de l'arrel."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiVW4gdGV0cmFlZHJlIHJlZ3VsYXIgdMOpICQ0JCBjYXJlcyB0cmlhbmd1bGFycyBpZ3VhbHMsIG5vICQxJDogYXF1ZXN0IHZhbG9yIG5vbcOpcyDDqXMgbCfDoHJlYSBkJ1VOQSBjYXJhLiIsICJUJ2hhcyBkZWl4YXQgZWwgZmFjdG9yICRcXHNxcnQzJCBkZSBsJ8OgcmVhIGRlbCB0cmlhbmdsZSBlcXVpbMOgdGVyOiBsJ8OgcmVhIHRvdGFsIMOpcyAkTF4yXFxzcXJ0MyQsIG5vICRMXjIkLiIsICJBcXVlc3QgdmFsb3IgZHVwbGljYSBlbCByZXN1bHRhdCBjb3JyZWN0ZTogdW4gdGV0cmFlZHJlIHTDqSAkNCQgY2FyZXMgKGZhY3RvciAkNCQpLCBubyAkOCQuIl0sICJlcnIiOiBbIiIsICJGQUNUT1JfT0JMSURBVCIsICJBUlJFTF9NQUxfQVBMSUNBREEiLCAiUFJPRFVDVEVfTUFMIl0sICJyZXMiOiBbIiRBPUxeMlxcc3FydDM9M14yXFxjZG90XFxzcXJ0MyQiLCAiJEFcXGFwcHJveDE1eyx9NTkkIGNtJF4yJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 144 162\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Tetraedre regular d'aresta 3 cm, en perspectiva.</title><g transform=\"translate(14.0,14.0)\"><polygon points=\"58.0,0.0 0.0,100.5 116.0,100.5\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"58.0\" y1=\"0.0\" x2=\"71.9\" y2=\"68.3\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"0.0\" y1=\"100.5\" x2=\"71.9\" y2=\"68.3\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"116.0\" y1=\"100.5\" x2=\"71.9\" y2=\"68.3\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"103.0\" x2=\"0.0\" y2=\"120.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"116.0\" y1=\"103.0\" x2=\"116.0\" y2=\"120.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"116.5\" x2=\"116.0\" y2=\"116.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"112.5\" x2=\"4.0\" y2=\"120.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"112.0\" y1=\"112.5\" x2=\"120.0\" y2=\"120.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"58\" y=\"130.8\" text-anchor=\"middle\" class=\"fig-etq\">3 cm</text></g></svg>"
  },
  {
   "id": "180b",
   "ex": 180,
   "ap": "b",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula l'àrea total d'un tetraedre regular d'aresta:",
   "enunciat": "Calcula l'àrea total d'un tetraedre regular d'aresta: $5$ cm.",
   "opcions": [
    "$\\approx10{,}82$ cm$^2$",
    "$\\approx43{,}3$ cm$^2$",
    "$\\approx25$ cm$^2$",
    "$\\approx86{,}6$ cm$^2$"
   ],
   "pistes": [
    "Cada cara és un triangle equilàter d'àrea $\\dfrac{L^2\\sqrt3}{4}$, i n'hi ha $4$ d'iguals.",
    "Les quatre cares juntes: $A=4\\cdot\\dfrac{L^2\\sqrt3}{4}=L^2\\sqrt3$. Aquí $L=5$ cm: no t'oblidis de l'arrel."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJVbiB0ZXRyYWVkcmUgcmVndWxhciB0w6kgJDQkIGNhcmVzIHRyaWFuZ3VsYXJzIGlndWFscywgbm8gJDEkOiBhcXVlc3QgdmFsb3Igbm9tw6lzIMOpcyBsJ8OgcmVhIGQnVU5BIGNhcmEuIiwgIiIsICJUJ2hhcyBkZWl4YXQgZWwgZmFjdG9yICRcXHNxcnQzJCBkZSBsJ8OgcmVhIGRlbCB0cmlhbmdsZSBlcXVpbMOgdGVyOiBsJ8OgcmVhIHRvdGFsIMOpcyAkTF4yXFxzcXJ0MyQsIG5vICRMXjIkLiIsICJBcXVlc3QgdmFsb3IgZHVwbGljYSBlbCByZXN1bHRhdCBjb3JyZWN0ZTogdW4gdGV0cmFlZHJlIHTDqSAkNCQgY2FyZXMgKGZhY3RvciAkNCQpLCBubyAkOCQuIl0sICJlcnIiOiBbIkZBQ1RPUl9PQkxJREFUIiwgIiIsICJBUlJFTF9NQUxfQVBMSUNBREEiLCAiUFJPRFVDVEVfTUFMIl0sICJyZXMiOiBbIiRBPUxeMlxcc3FydDM9NV4yXFxjZG90XFxzcXJ0MyQiLCAiJEFcXGFwcHJveDQzeyx9MyQgY20kXjIkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 144 162\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Tetraedre regular d'aresta 5 cm, en perspectiva.</title><g transform=\"translate(14.0,14.0)\"><polygon points=\"58.0,0.0 0.0,100.5 116.0,100.5\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"58.0\" y1=\"0.0\" x2=\"71.9\" y2=\"68.3\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"0.0\" y1=\"100.5\" x2=\"71.9\" y2=\"68.3\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"116.0\" y1=\"100.5\" x2=\"71.9\" y2=\"68.3\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"103.0\" x2=\"0.0\" y2=\"120.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"116.0\" y1=\"103.0\" x2=\"116.0\" y2=\"120.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"116.5\" x2=\"116.0\" y2=\"116.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"112.5\" x2=\"4.0\" y2=\"120.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"112.0\" y1=\"112.5\" x2=\"120.0\" y2=\"120.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"58\" y=\"130.8\" text-anchor=\"middle\" class=\"fig-etq\">5 cm</text></g></svg>"
  },
  {
   "id": "180c",
   "ex": 180,
   "ap": "c",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula l'àrea total d'un tetraedre regular d'aresta:",
   "enunciat": "Calcula l'àrea total d'un tetraedre regular d'aresta: $9$ cm.",
   "opcions": [
    "$\\approx35{,}08$ cm$^2$",
    "$\\approx140{,}3$ cm$^2$",
    "$\\approx280{,}59$ cm$^2$",
    "$\\approx81$ cm$^2$"
   ],
   "pistes": [
    "Cada cara és un triangle equilàter d'àrea $\\dfrac{L^2\\sqrt3}{4}$, i n'hi ha $4$ d'iguals.",
    "Les quatre cares juntes: $A=4\\cdot\\dfrac{L^2\\sqrt3}{4}=L^2\\sqrt3$. Aquí $L=9$ cm: no t'oblidis de l'arrel."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJVbiB0ZXRyYWVkcmUgcmVndWxhciB0w6kgJDQkIGNhcmVzIHRyaWFuZ3VsYXJzIGlndWFscywgbm8gJDEkOiBhcXVlc3QgdmFsb3Igbm9tw6lzIMOpcyBsJ8OgcmVhIGQnVU5BIGNhcmEuIiwgIiIsICJBcXVlc3QgdmFsb3IgZHVwbGljYSBlbCByZXN1bHRhdCBjb3JyZWN0ZTogdW4gdGV0cmFlZHJlIHTDqSAkNCQgY2FyZXMgKGZhY3RvciAkNCQpLCBubyAkOCQuIiwgIlQnaGFzIGRlaXhhdCBlbCBmYWN0b3IgJFxcc3FydDMkIGRlIGwnw6ByZWEgZGVsIHRyaWFuZ2xlIGVxdWlsw6B0ZXI6IGwnw6ByZWEgdG90YWwgw6lzICRMXjJcXHNxcnQzJCwgbm8gJExeMiQuIl0sICJlcnIiOiBbIkZBQ1RPUl9PQkxJREFUIiwgIiIsICJQUk9EVUNURV9NQUwiLCAiQVJSRUxfTUFMX0FQTElDQURBIl0sICJyZXMiOiBbIiRBPUxeMlxcc3FydDM9OV4yXFxjZG90XFxzcXJ0MyQiLCAiJEFcXGFwcHJveDE0MHssfTMkIGNtJF4yJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 144 162\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Tetraedre regular d'aresta 9 cm, en perspectiva.</title><g transform=\"translate(14.0,14.0)\"><polygon points=\"58.0,0.0 0.0,100.5 116.0,100.5\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"58.0\" y1=\"0.0\" x2=\"71.9\" y2=\"68.3\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"0.0\" y1=\"100.5\" x2=\"71.9\" y2=\"68.3\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"116.0\" y1=\"100.5\" x2=\"71.9\" y2=\"68.3\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"103.0\" x2=\"0.0\" y2=\"120.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"116.0\" y1=\"103.0\" x2=\"116.0\" y2=\"120.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"116.5\" x2=\"116.0\" y2=\"116.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"112.5\" x2=\"4.0\" y2=\"120.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"112.0\" y1=\"112.5\" x2=\"120.0\" y2=\"120.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"58\" y=\"130.8\" text-anchor=\"middle\" class=\"fig-etq\">9 cm</text></g></svg>"
  },
  {
   "id": "180d",
   "ex": 180,
   "ap": "d",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula l'àrea total d'un tetraedre regular d'aresta:",
   "enunciat": "Calcula l'àrea total d'un tetraedre regular d'aresta: $6{,}2$ cm.",
   "opcions": [
    "$\\approx133{,}16$ cm$^2$",
    "$\\approx38{,}44$ cm$^2$",
    "$\\approx66{,}58$ cm$^2$",
    "$\\approx16{,}64$ cm$^2$"
   ],
   "pistes": [
    "Cada cara és un triangle equilàter d'àrea $\\dfrac{L^2\\sqrt3}{4}$, i n'hi ha $4$ d'iguals.",
    "Les quatre cares juntes: $A=4\\cdot\\dfrac{L^2\\sqrt3}{4}=L^2\\sqrt3$. Aquí $L=6{,}2$ cm: no t'oblidis de l'arrel."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3QgdmFsb3IgZHVwbGljYSBlbCByZXN1bHRhdCBjb3JyZWN0ZTogdW4gdGV0cmFlZHJlIHTDqSAkNCQgY2FyZXMgKGZhY3RvciAkNCQpLCBubyAkOCQuIiwgIlQnaGFzIGRlaXhhdCBlbCBmYWN0b3IgJFxcc3FydDMkIGRlIGwnw6ByZWEgZGVsIHRyaWFuZ2xlIGVxdWlsw6B0ZXI6IGwnw6ByZWEgdG90YWwgw6lzICRMXjJcXHNxcnQzJCwgbm8gJExeMiQuIiwgIiIsICJVbiB0ZXRyYWVkcmUgcmVndWxhciB0w6kgJDQkIGNhcmVzIHRyaWFuZ3VsYXJzIGlndWFscywgbm8gJDEkOiBhcXVlc3QgdmFsb3Igbm9tw6lzIMOpcyBsJ8OgcmVhIGQnVU5BIGNhcmEuIl0sICJlcnIiOiBbIlBST0RVQ1RFX01BTCIsICJBUlJFTF9NQUxfQVBMSUNBREEiLCAiIiwgIkZBQ1RPUl9PQkxJREFUIl0sICJyZXMiOiBbIiRBPUxeMlxcc3FydDM9NnssfTJeMlxcY2RvdFxcc3FydDMkIiwgIiRBXFxhcHByb3g2NnssfTU4JCBjbSReMiQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 144 162\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Tetraedre regular d'aresta 6,2 cm, en perspectiva.</title><g transform=\"translate(14.0,14.0)\"><polygon points=\"58.0,0.0 0.0,100.5 116.0,100.5\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"58.0\" y1=\"0.0\" x2=\"71.9\" y2=\"68.3\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"0.0\" y1=\"100.5\" x2=\"71.9\" y2=\"68.3\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"116.0\" y1=\"100.5\" x2=\"71.9\" y2=\"68.3\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"103.0\" x2=\"0.0\" y2=\"120.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"116.0\" y1=\"103.0\" x2=\"116.0\" y2=\"120.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"116.5\" x2=\"116.0\" y2=\"116.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"112.5\" x2=\"4.0\" y2=\"120.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"112.0\" y1=\"112.5\" x2=\"120.0\" y2=\"120.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"58\" y=\"130.8\" text-anchor=\"middle\" class=\"fig-etq\">6,2 cm</text></g></svg>"
  },
  {
   "id": "183",
   "ex": 183,
   "ap": "",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Una piràmide hexagonal regular té la base de costat $3$ cm i l'apotema de la piràmide fa $10$ cm. Quina aresta ha de tenir un tetraedre regular perquè la seva àrea total sigui la mateixa?",
   "opcions": [
    "$\\approx6{,}53$ cm",
    "$\\approx113{,}38$ cm",
    "$\\approx8{,}09$ cm",
    "$\\approx65{,}46$ cm"
   ],
   "pistes": [
    "Primer calcula l'àrea total de la piràmide (base més lateral); després busca l'aresta $L$ del tetraedre que té aquesta mateixa àrea.",
    "Apotema de la base: $a_{\\text{base}}=\\dfrac{3\\sqrt3}{2}$; perímetre: $6\\cdot3=18$ cm. Llavors $A_{\\text{piràmide}}=\\dfrac{18\\cdot a_{\\text{base}}}{2}+\\dfrac{18\\cdot10}{2}$.",
    "Iguala aquesta àrea a la del tetraedre, $L^2\\sqrt3$, i aïlla $L$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJObyBjb2luY2lkZWl4IGFtYiAkXFxzcXJ0ezExM3ssfTM4Olxcc3FydDN9JDogY29tcHJvdmEgcXVlIGRpdmlkZWl4ZXMgcGVyICRcXHNxcnQzJCAobm8gcGVyICQzJCkgYWJhbnMgZGUgZmVyIGwnYXJyZWwuIiwgIkFxdWVzdGEgw6lzIGwnw6ByZWEgdG90YWwgZGUgbGEgcGlyw6BtaWRlIChlbiBjbSReMiQpLCBubyBsJ2FyZXN0YSBkZWwgdGV0cmFlZHJlOiBlbmNhcmEgZmFsdGEgYcOvbGxhciAkTCQgZGUgJExeMlxcc3FydDNcXGFwcHJveDExM3ssfTM4JC4iLCAiIiwgIkFxdWVzdCDDqXMgZWwgdmFsb3IgZGUgJExeMiQgKCQxMTN7LH0zODpcXHNxcnQzJCksIG5vIGRlICRMJDogZW5jYXJhIGZhbHRhIGZlciBsJ2FycmVsIHF1YWRyYWRhLiJdLCAiZXJyIjogWyJPUkRSRV9NVUxUSVBMSUNBQ0lPX0RJVklTSU8iLCAiQVJSRUxfT0JMSURBREEiLCAiIiwgIkFSUkVMX01BTF9BUExJQ0FEQSJdLCAicmVzIjogWyIkYV97XFx0ZXh0e2Jhc2V9fVxcYXBwcm94MnssfTYkIGNtOyAkQV97XFx0ZXh0e2Jhc2V9fVxcYXBwcm94MjN7LH0zOCQgY20kXjIkIiwgIiRBX3tcXHRleHR7bGF0ZXJhbH19PVxcZGZyYWN7MThcXGNkb3QxMH17Mn09OTAkIGNtJF4yJCIsICIkQV97XFx0ZXh0e3RvdGFsLHBpcsOgbWlkZX19XFxhcHByb3gyM3ssfTM4KzkwXFxhcHByb3gxMTN7LH0zOCQgY20kXjIkIiwgIiRMXjJcXHNxcnQzXFxhcHByb3gxMTN7LH0zOCBcXFJpZ2h0YXJyb3cgTF4yXFxhcHByb3g2NXssfTQ2JCIsICIkTFxcYXBwcm94OHssfTA5JCBjbSJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 253 206\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Piràmide recta de base hexagonal regular, en perspectiva. Al costat, una cara lateral en veritable magnitud.</title><g transform=\"translate(57.3,159.2)\"><polygon points=\"0.0,-15.0 43.3,-7.5 43.3,7.5 0.0,15.0 -43.3,7.5 -43.3,-7.5\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><polygon points=\"0.0,-112.0 43.3,-7.5 43.3,7.5\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-112.0 43.3,7.5 0.0,15.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-112.0 0.0,15.0 -43.3,7.5\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-112.0 -43.3,7.5 -43.3,-7.5\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"43.3\" y2=\"7.5\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"0.0\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"-43.3\" y2=\"7.5\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"109.3,-130.0 89.8,0.0 128.8,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"109.3\" y1=\"-130.0\" x2=\"109.3\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><path d=\"M 120.3 0.0 L 120.3 -11.0 L 109.3 -11.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"111.8\" y1=\"-130.0\" x2=\"148.3\" y2=\"-130.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"111.8\" y1=\"0.0\" x2=\"148.3\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"144.8\" y1=\"-130.0\" x2=\"144.8\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"140.8\" y1=\"-134.0\" x2=\"148.8\" y2=\"-126.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"140.8\" y1=\"-4.0\" x2=\"148.8\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"89.8\" y1=\"2.5\" x2=\"89.8\" y2=\"18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"128.8\" y1=\"2.5\" x2=\"128.8\" y2=\"18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"89.8\" y1=\"15.0\" x2=\"128.8\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"85.8\" y1=\"11.0\" x2=\"93.8\" y2=\"19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"124.8\" y1=\"11.0\" x2=\"132.8\" y2=\"19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"164.8\" y=\"-62.1\" text-anchor=\"middle\" class=\"fig-etq petita\">10 cm</text><text x=\"109.3\" y=\"29.4\" text-anchor=\"middle\" class=\"fig-etq\">3 cm</text><text x=\"109.3\" y=\"-137.1\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">una cara</text></g></svg>"
  },
  {
   "id": "181a",
   "ex": 181,
   "ap": "a",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Dues piràmides regulars.",
   "enunciat": "Una piràmide quadrangular regular té la base de costat $8$ m i l'altura (no l'apotema) fa $10$ m. Calcula la seva àrea total.",
   "opcions": [
    "$\\approx64$ m$^2$",
    "$\\approx236{,}33$ m$^2$",
    "$\\approx384$ m$^2$",
    "$\\approx172{,}33$ m$^2$"
   ],
   "pistes": [
    "Et donen l'altura, no l'apotema de la piràmide. L'altura, l'apotema de la base i l'apotema de la piràmide formen un triangle rectangle, i l'apotema de la piràmide n'és la hipotenusa.",
    "En una base quadrada, l'apotema és la meitat del costat: $4$ m. Apotema de la piràmide: $\\sqrt{10^2+4^2}$. Després, $A_{\\text{base}}+A_{\\text{lateral}}$, amb perímetre $4\\cdot8=32$ m."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3RhIMOpcyBub23DqXMgbCfDoHJlYSBkZSBsYSBiYXNlOiBlbmNhcmEgZmFsdGEgc3VtYXItaGkgbCfDoHJlYSBsYXRlcmFsLiIsICIiLCAiU2VtYmxhIHF1ZSBoYXMgZmV0IHNlcnZpciBkaXJlY3RhbWVudCBsJ2FsdHVyYSBkZSBsYSBwaXLDoG1pZGUgKCQxMCQgbSkgY29tIGEgYXBvdGVtYSBkZSBsYSBwaXLDoG1pZGUsIHNlbnNlIGFwbGljYXIgUGl0w6Bnb3JlcyBhbWIgbCdhcG90ZW1hIGRlIGxhIGJhc2UuIiwgIkFxdWVzdCB2YWxvciDDqXMgbm9tw6lzIGwnw6ByZWEgbGF0ZXJhbDogZW5jYXJhIGZhbHRhIHN1bWFyLWhpIGwnw6ByZWEgZGUgbGEgYmFzZSBxdWFkcmFkYS4iXSwgImVyciI6IFsiU1VNQV9ERV9QQVJUU19JTkNPTVBMRVRBIiwgIiIsICJBUlJFTF9NQUxfQVBMSUNBREEiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyJdLCAicmVzIjogWyIkYV97XFx0ZXh0e3BpcsOgbWlkZX19PVxcc3FydHsxMF4yKzReMn1cXGFwcHJveDEweyx9NzckIG0iLCAiJEFfe1xcdGV4dHtsYXRlcmFsfX09XFxkZnJhY3szMlxcY2RvdDEweyx9Nzd9ezJ9XFxhcHByb3gxNzJ7LH0zMyQgbSReMiQiLCAiJEFfe1xcdGV4dHt0b3RhbH19XFxhcHByb3g2NCsxNzJ7LH0zM1xcYXBwcm94MjM2eyx9MzMkIG0kXjIkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 174 180\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Piràmide recta de base quadrangular regular, en perspectiva.</title><g transform=\"translate(109.8,126.0)\"><polygon points=\"0.0,-15.0 50.0,0.0 0.0,15.0 -50.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><polygon points=\"0.0,-112.0 50.0,0.0 0.0,15.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-112.0 0.0,15.0 -50.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"0.0\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"-50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"0.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"1.6\"/><path d=\"M 11.0 0.0 L 11.0 -11.0 L 0.0 -11.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"-112.0\" x2=\"-71.5\" y2=\"-112.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-71.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-68.0\" y1=\"-112.0\" x2=\"-68.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-64.0\" y1=\"-116.0\" x2=\"-72.0\" y2=\"-108.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-64.0\" y1=\"-4.0\" x2=\"-72.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"50.7\" y1=\"2.4\" x2=\"55.6\" y2=\"18.7\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.7\" y1=\"17.4\" x2=\"5.6\" y2=\"33.7\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"54.6\" y1=\"15.3\" x2=\"4.6\" y2=\"30.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"57.3\" y1=\"10.3\" x2=\"51.9\" y2=\"20.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"7.3\" y1=\"25.3\" x2=\"1.9\" y2=\"35.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"-83\" y=\"-53.1\" text-anchor=\"middle\" class=\"fig-etq petita\">10 m</text><text x=\"32.8\" y=\"36.7\" text-anchor=\"middle\" class=\"fig-etq\">8 m</text></g></svg>"
  },
  {
   "id": "181b",
   "ex": 181,
   "ap": "b",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Dues piràmides regulars.",
   "enunciat": "Una piràmide hexagonal regular té la base de costat $6$ m i l'altura (no l'apotema) fa $8$ m. Calcula la seva àrea total.",
   "opcions": [
    "$\\approx265{,}24$ m$^2$",
    "$\\approx93{,}53$ m$^2$",
    "$\\approx388$ m$^2$",
    "$\\approx171{,}71$ m$^2$"
   ],
   "pistes": [
    "Et donen l'altura, no l'apotema de la piràmide. L'altura, l'apotema de la base i l'apotema de la piràmide formen un triangle rectangle, i l'apotema de la piràmide n'és la hipotenusa.",
    "Apotema de la base: $a_{\\text{base}}=\\dfrac{6\\sqrt3}{2}$. Apotema de la piràmide: $\\sqrt{8^2+a_{\\text{base}}^2}$. Després, $A_{\\text{base}}+A_{\\text{lateral}}$, amb perímetre $6\\cdot6=36$ m."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0YSDDqXMgbm9tw6lzIGwnw6ByZWEgZGUgbGEgYmFzZTogZW5jYXJhIGZhbHRhIHN1bWFyLWhpIGwnw6ByZWEgbGF0ZXJhbC4iLCAiU2VtYmxhIHF1ZSBoYXMgZmV0IHNlcnZpciBkaXJlY3RhbWVudCBsJ2FsdHVyYSBkZSBsYSBwaXLDoG1pZGUgKCQ4JCBtKSBjb20gYSBhcG90ZW1hIGRlIGxhIHBpcsOgbWlkZSwgc2Vuc2UgYXBsaWNhciBQaXTDoGdvcmVzIGFtYiBsJ2Fwb3RlbWEgZGUgbGEgYmFzZS4iLCAiQXF1ZXN0IHZhbG9yIMOpcyBub23DqXMgbCfDoHJlYSBsYXRlcmFsOiBlbmNhcmEgZmFsdGEgc3VtYXItaGkgbCfDoHJlYSBkZSBsYSBiYXNlIGhleGFnb25hbC4iXSwgImVyciI6IFsiIiwgIlNVTUFfREVfUEFSVFNfSU5DT01QTEVUQSIsICJBUlJFTF9NQUxfQVBMSUNBREEiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyJdLCAicmVzIjogWyIkYV97XFx0ZXh0e2Jhc2V9fVxcYXBwcm94NXssfTIkIG0iLCAiJGFfe1xcdGV4dHtwaXLDoG1pZGV9fT1cXHNxcnR7OF4yKzV7LH0yXjJ9XFxhcHByb3g5eyx9NTQkIG0iLCAiJEFfe1xcdGV4dHtsYXRlcmFsfX1cXGFwcHJveFxcZGZyYWN7MzZcXGNkb3Q5eyx9NTR9ezJ9XFxhcHByb3gxNzF7LH03MSQgbSReMiQiLCAiJEFfe1xcdGV4dHt0b3RhbH19XFxhcHByb3g5M3ssfTUzKzE3MXssfTcxXFxhcHByb3gyNjV7LH0yNCQgbSReMiQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 164 184\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Piràmide recta de base hexagonal regular, en perspectiva.</title><g transform=\"translate(106.6,126.0)\"><polygon points=\"0.0,-15.0 43.3,-7.5 43.3,7.5 0.0,15.0 -43.3,7.5 -43.3,-7.5\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><polygon points=\"0.0,-112.0 43.3,-7.5 43.3,7.5\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-112.0 43.3,7.5 0.0,15.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-112.0 0.0,15.0 -43.3,7.5\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-112.0 -43.3,7.5 -43.3,-7.5\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"43.3\" y2=\"7.5\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"0.0\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"-43.3\" y2=\"7.5\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"0.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"1.6\"/><path d=\"M 11.0 0.0 L 11.0 -11.0 L 0.0 -11.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"-112.0\" x2=\"-71.5\" y2=\"-112.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-71.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-68.0\" y1=\"-112.0\" x2=\"-68.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-64.0\" y1=\"-116.0\" x2=\"-72.0\" y2=\"-108.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-64.0\" y1=\"-4.0\" x2=\"-72.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"43.7\" y1=\"10.0\" x2=\"46.6\" y2=\"26.7\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.4\" y1=\"17.5\" x2=\"3.3\" y2=\"34.2\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"46.0\" y1=\"23.3\" x2=\"2.7\" y2=\"30.8\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"49.3\" y1=\"18.6\" x2=\"42.8\" y2=\"27.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"6.0\" y1=\"26.1\" x2=\"-0.5\" y2=\"35.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"-83\" y=\"-53.1\" text-anchor=\"middle\" class=\"fig-etq petita\">8 m</text><text x=\"26.3\" y=\"41.2\" text-anchor=\"middle\" class=\"fig-etq\">6 m</text></g></svg>"
  },
  {
   "id": "182",
   "ex": 182,
   "ap": "",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Quina aresta té un cub que té la mateixa àrea total que una piràmide d'àrea total $4$ cm$^2$?",
   "opcions": [
    "$\\approx0{,}82$ cm",
    "$4$ cm",
    "$\\approx0{,}67$ cm",
    "$24$ cm"
   ],
   "pistes": [
    "Un cub d'aresta $L$ té àrea total $6L^2$; iguala-la a $4$ cm$^2$.",
    "Aïlla $L$: $L^2=4:6$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiTCfDoHJlYSB0b3RhbCBkZWwgY3ViIG5vIMOpcyBkaXJlY3RhbWVudCBsJ2FyZXN0YTogY2FsIGHDr2xsYXIgJEwkIGRlICQ2TF4yPTQkLCBubyBmZXIgc2VydmlyICQ0JCBkaXJlY3RhbWVudCBjb20gYSBhcmVzdGEuIiwgIk5vIGNvaW5jaWRlaXggYW1iICRcXHNxcnR7NDo2fSQ6IGNvbXByb3ZhIHF1ZSBkaXZpZGVpeGVzIGwnw6ByZWEgZW50cmUgJDYkIGNhcmVzIGFiYW5zIGRlIGZlciBsJ2FycmVsIHF1YWRyYWRhLiIsICJTZW1ibGEgcXVlIGhhcyBtdWx0aXBsaWNhdCAkNFxcY2RvdDYkIGVuIGxsb2MgZGUgZGl2aWRpciAkNDo2JDogbGEgcmVsYWNpw7Mgw6lzICQ2TF4yPTQkLCBwZXIgdGFudCAkTF4yPTQ6NiQuIl0sICJlcnIiOiBbIiIsICJBUlJFTF9PQkxJREFEQSIsICJBUlJFTF9NQUxfQVBMSUNBREEiLCAiT1JEUkVfTVVMVElQTElDQUNJT19ESVZJU0lPIl0sICJyZXMiOiBbIiQ2TF4yPTQgXFxSaWdodGFycm93IExeMj00OjZcXGFwcHJveDB7LH02NyQiLCAiJEw9XFxzcXJ0ezB7LH02N31cXGFwcHJveDB7LH04MiQgY20iXX0="
  }
 ]
};
