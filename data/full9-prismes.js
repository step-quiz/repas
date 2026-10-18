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
  "DIMENSIO_EXPONENT_MAL": "L'exponent no correspon a la dimensió: les àrees van al quadrat i els volums, al cub. Comprova també les unitats del resultat.",
  "DIVISIO_REPETIDA": "Has dividit dues vegades pel mateix nombre. Sol passar quan la fórmula ja porta la divisió incorporada i se li torna a aplicar al final: escriu la fórmula sencera i substitueix-hi els valors d'un sol cop.",
  "FACTOR_OBLIDAT": "T'has deixat pel camí un dels factors en combinar els exponents.",
  "N_MAL_COMPTAT": "Has fet servir un nombre de dades que no és el que toca. Compta'l bé: sovint la trampa és comptar només les dades conegudes i oblidar la que es busca.",
  "PAS_INTERMEDI_PER_RESPOSTA": "El valor que has triat és correcte, però és un pas intermedi, no el que et demanen. Torna a llegir la pregunta i mira quina magnitud has d'acabar donant: sovint només falta una operació més.",
  "POTENCIA_COM_PRODUCTE": "$x^2$ no és $2x$: és $x\\cdot x$. Prova-ho amb $x=3$, que dona $9$ i no $6$.",
  "POTENCIA_PRODUCTE_UN_FACTOR": "L'exponent afecta TOTS els factors del producte, no només un: $(a\\cdot b)^n=a^n\\cdot b^n$.",
  "PRODUCTE_MAL": "Has multiplicat els dos nombres que et donaven en comptes d'aïllar la incògnita amb els productes creuats.",
  "SIGNE_TERME_INDEPENDENT": "Revisa el signe del terme independent (el que no porta $x$): és fàcil perdre'l en sumar o restar.",
  "SUMA_DE_PARTS_INCOMPLETA": "L'àrea total d'un cos és la suma de TOTES les seves cares. Has calculat bé una part (la base, o la lateral) però encara falta sumar-hi l'altra.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau."
 },
 "items": [
  {
   "id": "363a",
   "ex": 363,
   "ap": "a",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula l'àrea total d'aquest cub. Recorda: té $6$ cares quadrades iguals, així que $A=6a^2$.",
   "enunciat": "Aresta $a=2$ cm.",
   "opcions": [
    "$24$ cm$^2$",
    "$4$ cm$^2$",
    "$8$ cm$^3$",
    "$12$ cm$^2$"
   ],
   "pistes": [
    "Una cara és un quadrat de costat $2$: $2^2=4$ cm$^2$.",
    "Hi ha $6$ cares: $6\\cdot4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJDQkIGNtJF4yJCDDqXMgVU5BIGNhcmEuIEVsIGN1YiBlbiB0w6kgJDYkLiBMJ8OgcmVhIHRvdGFsIGQndW4gY29zIMOpcyBsYSBzdW1hIGRlIFRPVEVTIGxlcyBzZXZlcyBjYXJlcy4gSGFzIGNhbGN1bGF0IGLDqSB1bmEgcGFydCAobGEgYmFzZSwgbyBsYSBsYXRlcmFsKSBwZXLDsiBlbmNhcmEgZmFsdGEgc3VtYXItaGkgbCdhbHRyYS4iLCAiSGFzIGNhbGN1bGF0IGVsIHZvbHVtLCAkYV4zJC4gTCfDoHJlYSDDqXMgbGEgc3VwZXJmw61jaWUgZGUgbGVzICQ2JCBjYXJlcywgaSB2YSBlbiBjbSReMiQuIiwgIkhhcyBmZXQgJDZcXGNkb3QyJDogY2FsIGVsZXZhciBsJ2FyZXN0YSBhbCBxdWFkcmF0LCAkMl4yPTQkLCBhYmFucyBkZSBtdWx0aXBsaWNhciBwZXIgJDYkLiJdLCAiZXJyIjogWyIiLCAiU1VNQV9ERV9QQVJUU19JTkNPTVBMRVRBIiwgIkRJTUVOU0lPX0VYUE9ORU5UX01BTCIsICJQT1RFTkNJQV9DT01fUFJPRFVDVEUiXSwgInJlcyI6IFsiJEE9NmFeMj02XFxjZG90Ml4yPTZcXGNkb3Q0PTI0JCBjbSReMiQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 158 191\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Cub d'aresta 2 cm, dibuixat en perspectiva.</title><g transform=\"translate(14.0,48.0)\"><polygon points=\"0.0,0.0 96.0,0.0 96.0,96.0 0.0,96.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,0.0 34.0,-34.0 130.0,-34.0 96.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"96.0,0.0 130.0,-34.0 130.0,62.0 96.0,96.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"96.0\" x2=\"34.0\" y2=\"62.0\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"34.0\" y1=\"62.0\" x2=\"34.0\" y2=\"-34.0\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"34.0\" y1=\"62.0\" x2=\"130.0\" y2=\"62.0\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"98.5\" x2=\"0.0\" y2=\"115.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"96.0\" y1=\"98.5\" x2=\"96.0\" y2=\"115.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"112.0\" x2=\"96.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"108.0\" x2=\"4.0\" y2=\"116.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"92.0\" y1=\"108.0\" x2=\"100.0\" y2=\"116.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"48\" y=\"126.4\" text-anchor=\"middle\" class=\"fig-etq\">2 cm</text></g></svg>"
  },
  {
   "id": "363b",
   "ex": 363,
   "ap": "b",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula l'àrea total d'aquest cub. Recorda: té $6$ cares quadrades iguals, així que $A=6a^2$.",
   "enunciat": "Aresta $a=5$ cm.",
   "opcions": [
    "$150$ cm$^2$",
    "$25$ cm$^2$",
    "$30$ cm$^2$",
    "$125$ cm$^3$"
   ],
   "pistes": [
    "Una cara és un quadrat de costat $5$: $5^2=25$ cm$^2$.",
    "Hi ha $6$ cares: $6\\cdot25$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJDI1JCBjbSReMiQgw6lzIFVOQSBjYXJhLiBFbCBjdWIgZW4gdMOpICQ2JC4gTCfDoHJlYSB0b3RhbCBkJ3VuIGNvcyDDqXMgbGEgc3VtYSBkZSBUT1RFUyBsZXMgc2V2ZXMgY2FyZXMuIEhhcyBjYWxjdWxhdCBiw6kgdW5hIHBhcnQgKGxhIGJhc2UsIG8gbGEgbGF0ZXJhbCkgcGVyw7IgZW5jYXJhIGZhbHRhIHN1bWFyLWhpIGwnYWx0cmEuIiwgIkhhcyBmZXQgJDZcXGNkb3Q1JDogY2FsIGVsZXZhciBsJ2FyZXN0YSBhbCBxdWFkcmF0LCAkNV4yPTI1JCwgYWJhbnMgZGUgbXVsdGlwbGljYXIgcGVyICQ2JC4iLCAiSGFzIGNhbGN1bGF0IGVsIHZvbHVtLCAkYV4zJC4gTCfDoHJlYSDDqXMgbGEgc3VwZXJmw61jaWUgZGUgbGVzICQ2JCBjYXJlcywgaSB2YSBlbiBjbSReMiQuIl0sICJlcnIiOiBbIiIsICJTVU1BX0RFX1BBUlRTX0lOQ09NUExFVEEiLCAiUE9URU5DSUFfQ09NX1BST0RVQ1RFIiwgIkRJTUVOU0lPX0VYUE9ORU5UX01BTCJdLCAicmVzIjogWyIkQT02YV4yPTZcXGNkb3Q1XjI9NlxcY2RvdDI1PTE1MCQgY20kXjIkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 158 191\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Cub d'aresta 5 cm, dibuixat en perspectiva.</title><g transform=\"translate(14.0,48.0)\"><polygon points=\"0.0,0.0 96.0,0.0 96.0,96.0 0.0,96.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,0.0 34.0,-34.0 130.0,-34.0 96.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"96.0,0.0 130.0,-34.0 130.0,62.0 96.0,96.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"96.0\" x2=\"34.0\" y2=\"62.0\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"34.0\" y1=\"62.0\" x2=\"34.0\" y2=\"-34.0\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"34.0\" y1=\"62.0\" x2=\"130.0\" y2=\"62.0\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"98.5\" x2=\"0.0\" y2=\"115.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"96.0\" y1=\"98.5\" x2=\"96.0\" y2=\"115.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"112.0\" x2=\"96.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"108.0\" x2=\"4.0\" y2=\"116.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"92.0\" y1=\"108.0\" x2=\"100.0\" y2=\"116.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"48\" y=\"126.4\" text-anchor=\"middle\" class=\"fig-etq\">5 cm</text></g></svg>"
  },
  {
   "id": "170a",
   "ex": 170,
   "ap": "a",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula l'àrea total d'aquest prisma recte:",
   "enunciat": "Calcula l'àrea total d'aquest prisma recte: un ortoedre (prisma recte de base rectangular) d'arestes $7$ cm, $2$ cm i $4$ cm.",
   "opcions": [
    "$50$ cm$^2$",
    "$56$ cm$^2$",
    "$100$ cm$^2$",
    "$112$ cm$^2$"
   ],
   "pistes": [
    "L'àrea total d'un ortoedre és la suma de les seves $6$ cares: $3$ parelles de rectangles iguals.",
    "$A=2(a\\cdot b+a\\cdot c+b\\cdot c)$, amb $a=7$, $b=2$, $c=4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3Qgw6lzIGVsIHJlc3VsdGF0IGRlICQ3XFxjZG90Mis3XFxjZG90NCsyXFxjZG90NCQgc2Vuc2UgbXVsdGlwbGljYXIgcGVyICQyJDogY2FkYSBjYXJhIGQndW4gb3J0b2VkcmUgw6lzIGlndWFsIGEgbGEgc2V2YSBvcG9zYWRhLCBhaXjDrSBxdWUgY2FsIGNvbXB0YXItbGVzIHRvdGVzIGR1ZXMuIiwgIlQnaGFzIGRlaXhhdCB1bmEgcGFyZWxsYSBkZSBjYXJlcyBwZWwgY2Ftw606IHVuIG9ydG9lZHJlIGVuIHTDqSBUUkVTIHBhcmVsbGVzIGRpZmVyZW50cyAoJDdcXHRpbWVzMiQsICQ3XFx0aW1lczQkIGkgJDJcXHRpbWVzNCQpLCBubyBub23DqXMgZHVlcy4iLCAiIiwgIk5vIGNvaW5jaWRlaXggYW1iICQyKDdcXGNkb3QyKzdcXGNkb3Q0KzJcXGNkb3Q0KSQ6IHJldmlzYSBlbCBwcm9kdWN0ZSBkZSBjYWRhIHBhcmVsbGEgZGUgY2FyZXMgcGVyIHNlcGFyYXQgYWJhbnMgZGUgc3VtYXItbGVzLiJdLCAiZXJyIjogWyJQT1RFTkNJQV9QUk9EVUNURV9VTl9GQUNUT1IiLCAiRkFDVE9SX09CTElEQVQiLCAiIiwgIlBST0RVQ1RFX01BTCJdLCAicmVzIjogWyIkQT0yKDdcXGNkb3QyKzdcXGNkb3Q0KzJcXGNkb3Q0KT0yKDE0KzI4KzgpJCIsICIkQT0yXFxjZG90NTA9MTAwJCBjbSReMiQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 249 156\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Ortoedre d'arestes 7 cm, 2 cm i 4 cm, en perspectiva.</title><g transform=\"translate(64.6,45.4)\"><polygon points=\"0.0,0.0 110.0,0.0 110.0,62.9 0.0,62.9\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,0.0 31.4,-31.4 141.4,-31.4 110.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"110.0,0.0 141.4,-31.4 141.4,31.4 110.0,62.9\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"65.4\" x2=\"0.0\" y2=\"82.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"110.0\" y1=\"65.4\" x2=\"110.0\" y2=\"82.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"78.9\" x2=\"110.0\" y2=\"78.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"74.9\" x2=\"4.0\" y2=\"82.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"106.0\" y1=\"74.9\" x2=\"114.0\" y2=\"82.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-19.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"62.9\" x2=\"-19.5\" y2=\"62.9\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-16.0\" y1=\"0.0\" x2=\"-16.0\" y2=\"62.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"-4.0\" x2=\"-20.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"58.9\" x2=\"-20.0\" y2=\"66.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"111.8\" y1=\"1.8\" x2=\"122.4\" y2=\"12.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"143.2\" y1=\"-29.7\" x2=\"153.8\" y2=\"-19.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"119.9\" y1=\"9.9\" x2=\"151.3\" y2=\"-21.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"114.2\" y1=\"9.9\" x2=\"125.6\" y2=\"9.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"145.7\" y1=\"-21.5\" x2=\"157.0\" y2=\"-21.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"55\" y=\"93.2\" text-anchor=\"middle\" class=\"fig-etq\">7 cm</text><text x=\"-36\" y=\"34.8\" text-anchor=\"middle\" class=\"fig-etq\">4 cm</text><text x=\"157.3\" y=\"3.7\" text-anchor=\"middle\" class=\"fig-etq petita\">2 cm</text></g></svg>"
  },
  {
   "id": "170b",
   "ex": 170,
   "ap": "b",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula l'àrea total d'aquest prisma recte:",
   "enunciat": "Calcula l'àrea total d'aquest prisma recte: un prisma de base triangular equilàtera de $5$ cm de costat i $9$ cm d'altura.",
   "opcions": [
    "$\\approx67{,}5$ cm$^2$",
    "$\\approx175{,}95$ cm$^2$",
    "$\\approx146{,}25$ cm$^2$",
    "$\\approx156{,}65$ cm$^2$"
   ],
   "pistes": [
    "L'àrea total d'un prisma és $2\\cdot A_{\\text{base}}+A_{\\text{lateral}}$, amb $A_{\\text{lateral}}=\\text{perímetre de la base}\\cdot\\text{altura}$. La base és un triangle equilàter: $A_{\\text{base}}=\\dfrac{c^2\\sqrt3}{4}$.",
    "$A_{\\text{base}}=\\dfrac{5^2\\sqrt3}{4}$ i $A_{\\text{lateral}}=(3\\cdot5)\\cdot9$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igbm9tw6lzIMOpcyBsJ8OgcmVhIGxhdGVyYWwgKCQxNVxcY2RvdDk6MiQsIGEgbcOpcyBhbWIgdW5hIGRpdmlzacOzIGRlIG3DqXMpOyBsJ8OgcmVhIGxhdGVyYWwgZCd1biBwcmlzbWEgbm8gZXMgZGl2aWRlaXggZW50cmUgJDIkLCBpIGVuY2FyYSBjYWwgc3VtYXItaGkgbGVzIGR1ZXMgYmFzZXMuIiwgIk5vIGNvaW5jaWRlaXggYW1iICQyXFxjZG90IEFfe1xcdGV4dHtiYXNlfX0rMTVcXGNkb3Q5JDogcmV2aXNhIHBlciBzZXBhcmF0IGwnw6ByZWEgZGVsIHRyaWFuZ2xlIGVxdWlsw6B0ZXIgaSBsJ8OgcmVhIGxhdGVyYWwuIiwgIkZhbHRhIGNvbXB0YXIgbGVzIERVRVMgYmFzZXMgdHJpYW5ndWxhcnMsIG5vIG5vbcOpcyB1bmE6IGwnw6ByZWEgdG90YWwgaW5jbG91ICQyXFxjZG90IEFfe1xcdGV4dHtiYXNlfX0kLCBubyAkMSQgc29sYS4iLCAiIl0sICJlcnIiOiBbIkRJVklTSU9fUkVQRVRJREEiLCAiUFJPRFVDVEVfTUFMIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiIl0sICJyZXMiOiBbIiRBX3tcXHRleHR7YmFzZX19PVxcZGZyYWN7NV4yXFxzcXJ0M317NH1cXGFwcHJveDEweyx9ODMkIGNtJF4yJCIsICIkQV97XFx0ZXh0e2xhdGVyYWx9fT0xNVxcY2RvdDk9MTM1JCBjbSReMiQiLCAiJEFfe1xcdGV4dHt0b3RhbH19PTJcXGNkb3QxMHssfTgzKzEzNVxcYXBwcm94MTU2eyx9NjUkIGNtJF4yJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 159 242\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Prisma recte de base triangular regular, dibuixat en perspectiva.</title><g transform=\"translate(53.8,183.3)\"><polygon points=\"0.0,-19.3 39.8,9.7 -39.8,9.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><polygon points=\"0.0,-19.3 39.8,9.7 39.8,-140.3 0.0,-169.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"39.8,9.7 -39.8,9.7 -39.8,-140.3 39.8,-140.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"-39.8,9.7 0.0,-19.3 0.0,-169.3 -39.8,-140.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-169.3 39.8,-140.3 -39.8,-140.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"55.8\" y1=\"-169.3\" x2=\"55.8\" y2=\"9.7\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"39.8\" y1=\"12.2\" x2=\"39.8\" y2=\"31.2\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-39.8\" y1=\"12.2\" x2=\"-39.8\" y2=\"31.2\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"39.8\" y1=\"27.7\" x2=\"-39.8\" y2=\"27.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"43.8\" y1=\"23.7\" x2=\"35.8\" y2=\"31.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-35.8\" y1=\"23.7\" x2=\"-43.8\" y2=\"31.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"75.8\" y=\"-76.5\" text-anchor=\"middle\" class=\"fig-etq\">9 cm</text><text x=\"0\" y=\"42\" text-anchor=\"middle\" class=\"fig-etq\">5 cm</text></g></svg>"
  },
  {
   "id": "170c",
   "ex": 170,
   "ap": "c",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula l'àrea total d'aquest prisma recte:",
   "enunciat": "Calcula l'àrea total d'aquest prisma recte: un prisma de base hexagonal regular de $6$ cm de costat i $5{,}2$ cm d'apotema, amb $8$ cm d'altura.",
   "opcions": [
    "$381{,}6$ cm$^2$",
    "$288$ cm$^2$",
    "$475{,}2$ cm$^2$",
    "$662{,}4$ cm$^2$"
   ],
   "pistes": [
    "L'àrea total d'un prisma és $2\\cdot A_{\\text{base}}+A_{\\text{lateral}}$, amb $A_{\\text{lateral}}=\\text{perímetre de la base}\\cdot\\text{altura}$. La base és un hexàgon regular: $A_{\\text{base}}=\\dfrac{\\text{perímetre}\\cdot\\text{apotema}}{2}$.",
    "Perímetre de la base: $6\\cdot6=36$ cm. Llavors $A_{\\text{base}}=\\dfrac{36\\cdot5{,}2}{2}$ i $A_{\\text{lateral}}=36\\cdot8$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJTZW1ibGEgcXVlIG5vbcOpcyBoYXMgY29tcHRhdCBVTkEgYmFzZSBoZXhhZ29uYWwgZW4gbGxvYyBkZSBkdWVzOiB1biBwcmlzbWEgc2VtcHJlIGVuIHTDqSBkdWVzLCB1bmEgYSBjYWRhIGV4dHJlbS4iLCAiQXF1ZXN0IHZhbG9yIMOpcyBub23DqXMgbCfDoHJlYSBsYXRlcmFsICgkMzZcXGNkb3Q4JCk6IGVuY2FyYSBmYWx0YSBzdW1hci1oaSBsZXMgZHVlcyBiYXNlcyBoZXhhZ29uYWxzLiIsICIiLCAiTm8gY29pbmNpZGVpeCBhbWIgJDJcXGNkb3Q5M3ssfTYrMzZcXGNkb3Q4JDogcmV2aXNhIHBlciBzZXBhcmF0IGwnw6ByZWEgZGUgbGEgYmFzZSBoZXhhZ29uYWwgaSBsJ8OgcmVhIGxhdGVyYWwuIl0sICJlcnIiOiBbIkZBQ1RPUl9PQkxJREFUIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiIiwgIlBST0RVQ1RFX01BTCJdLCAicmVzIjogWyIkQV97XFx0ZXh0e2Jhc2V9fT1cXGRmcmFjezM2XFxjZG90NXssfTJ9ezJ9PTkzeyx9NiQgY20kXjIkIiwgIiRBX3tcXHRleHR7bGF0ZXJhbH19PTM2XFxjZG90OD0yODgkIGNtJF4yJCIsICIkQV97XFx0ZXh0e3RvdGFsfX09MlxcY2RvdDkzeyx9NisyODg9NDc1eyx9MiQgY20kXjIkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 307 245\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Prisma recte de base hexagonal regular, dibuixat en perspectiva. Al costat, la base en veritable magnitud amb l'apotema.</title><g transform=\"translate(53.8,180.5)\"><polygon points=\"0.0,-19.3 39.8,-9.7 39.8,9.7 0.0,19.3 -39.8,9.7 -39.8,-9.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><polygon points=\"39.8,-9.7 39.8,9.7 39.8,-137.5 39.8,-156.9\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"39.8,9.7 0.0,19.3 0.0,-127.9 39.8,-137.5\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,19.3 -39.8,9.7 -39.8,-137.5 0.0,-127.9\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"-39.8,9.7 -39.8,-9.7 -39.8,-156.9 -39.8,-137.5\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-166.5 39.8,-156.9 39.8,-137.5 0.0,-127.9 -39.8,-137.5 -39.8,-156.9\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"55.8\" y1=\"-166.5\" x2=\"55.8\" y2=\"19.3\" stroke=\"currentColor\" stroke-width=\"1.2\"/><polygon points=\"157.8,19.3 121.8,19.3 103.8,-11.9 121.8,-43.0 157.8,-43.0 175.8,-11.9\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"139.8\" y1=\"-11.9\" x2=\"139.8\" y2=\"19.3\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"142.3\" y1=\"-11.9\" x2=\"197.3\" y2=\"-11.9\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"142.3\" y1=\"19.3\" x2=\"197.3\" y2=\"19.3\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"193.8\" y1=\"-11.9\" x2=\"193.8\" y2=\"19.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"189.8\" y1=\"-15.9\" x2=\"197.8\" y2=\"-7.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"189.8\" y1=\"15.3\" x2=\"197.8\" y2=\"23.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"157.8\" y1=\"21.8\" x2=\"157.8\" y2=\"36.8\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"121.8\" y1=\"21.8\" x2=\"121.8\" y2=\"36.8\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"157.8\" y1=\"33.3\" x2=\"121.8\" y2=\"33.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"161.8\" y1=\"29.3\" x2=\"153.8\" y2=\"37.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"125.8\" y1=\"29.3\" x2=\"117.8\" y2=\"37.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"75.8\" y=\"-70.2\" text-anchor=\"middle\" class=\"fig-etq\">8 cm</text><text x=\"219.8\" y=\"6.7\" text-anchor=\"middle\" class=\"fig-etq petita\">5,2 cm</text><text x=\"139.8\" y=\"47.7\" text-anchor=\"middle\" class=\"fig-etq\">6 cm</text><text x=\"139.8\" y=\"-18.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">base</text></g></svg>"
  },
  {
   "id": "170d",
   "ex": 170,
   "ap": "d",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula l'àrea total d'aquest prisma recte:",
   "enunciat": "Calcula l'àrea total d'aquest prisma recte: un prisma de base pentagonal regular de $5$ cm de costat i $3{,}44$ cm d'apotema, amb $12$ cm d'altura.",
   "opcions": [
    "$300$ cm$^2$",
    "$343$ cm$^2$",
    "$472$ cm$^2$",
    "$386$ cm$^2$"
   ],
   "pistes": [
    "L'àrea total d'un prisma és $2\\cdot A_{\\text{base}}+A_{\\text{lateral}}$, amb $A_{\\text{lateral}}=\\text{perímetre de la base}\\cdot\\text{altura}$. La base és un pentàgon regular: $A_{\\text{base}}=\\dfrac{\\text{perímetre}\\cdot\\text{apotema}}{2}$.",
    "Perímetre de la base: $5\\cdot5=25$ cm. Llavors $A_{\\text{base}}=\\dfrac{25\\cdot3{,}44}{2}$ i $A_{\\text{lateral}}=25\\cdot12$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igw6lzIG5vbcOpcyBsJ8OgcmVhIGxhdGVyYWwgKCQyNVxcY2RvdDEyJCk6IGVuY2FyYSBmYWx0YSBzdW1hci1oaSBsZXMgZHVlcyBiYXNlcyBwZW50YWdvbmFscy4iLCAiU2VtYmxhIHF1ZSBub23DqXMgaGFzIGNvbXB0YXQgVU5BIGJhc2UgcGVudGFnb25hbCBlbiBsbG9jIGRlIGR1ZXMuIiwgIk5vIGNvaW5jaWRlaXggYW1iICQyXFxjZG90NDMrMjVcXGNkb3QxMiQ6IHJldmlzYSBwZXIgc2VwYXJhdCBsJ8OgcmVhIGRlIGxhIGJhc2UgaSBsJ8OgcmVhIGxhdGVyYWwuIiwgIiJdLCAiZXJyIjogWyJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIkZBQ1RPUl9PQkxJREFUIiwgIlBST0RVQ1RFX01BTCIsICIiXSwgInJlcyI6IFsiJEFfe1xcdGV4dHtiYXNlfX09XFxkZnJhY3syNVxcY2RvdDN7LH00NH17Mn09NDMkIGNtJF4yJCIsICIkQV97XFx0ZXh0e2xhdGVyYWx9fT0yNVxcY2RvdDEyPTMwMCQgY20kXjIkIiwgIiRBX3tcXHRleHR7dG90YWx9fT0yXFxjZG90NDMrMzAwPTM4NiQgY20kXjIkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 318 244\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Prisma recte de base pentagonal regular, dibuixat en perspectiva. Al costat, la base en veritable magnitud amb l'apotema.</title><g transform=\"translate(57.7,183.3)\"><polygon points=\"0.0,-19.3 43.7,-6.0 27.0,15.6 -27.0,15.6 -43.7,-6.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><polygon points=\"43.7,-6.0 27.0,15.6 27.0,-134.4 43.7,-156.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"27.0,15.6 -27.0,15.6 -27.0,-134.4 27.0,-134.4\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"-27.0,15.6 -43.7,-6.0 -43.7,-156.0 -27.0,-134.4\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-169.3 43.7,-156.0 27.0,-134.4 -27.0,-134.4 -43.7,-156.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"59.7\" y1=\"-169.3\" x2=\"59.7\" y2=\"15.6\" stroke=\"currentColor\" stroke-width=\"1.2\"/><polygon points=\"164.9,15.6 122.6,15.6 109.5,-24.6 143.7,-49.5 178.0,-24.6\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"143.7\" y1=\"-13.5\" x2=\"143.7\" y2=\"15.6\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"146.2\" y1=\"-13.5\" x2=\"201.2\" y2=\"-13.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"146.2\" y1=\"15.6\" x2=\"201.2\" y2=\"15.6\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"197.7\" y1=\"-13.5\" x2=\"197.7\" y2=\"15.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"193.7\" y1=\"-17.5\" x2=\"201.7\" y2=\"-9.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"193.7\" y1=\"11.6\" x2=\"201.7\" y2=\"19.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"164.9\" y1=\"18.1\" x2=\"164.9\" y2=\"33.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"122.6\" y1=\"18.1\" x2=\"122.6\" y2=\"33.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"164.9\" y1=\"29.6\" x2=\"122.6\" y2=\"29.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"168.9\" y1=\"25.6\" x2=\"160.9\" y2=\"33.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"126.6\" y1=\"25.6\" x2=\"118.6\" y2=\"33.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"85.7\" y=\"-73.5\" text-anchor=\"middle\" class=\"fig-etq\">12 cm</text><text x=\"223.7\" y=\"4\" text-anchor=\"middle\" class=\"fig-etq petita\">3,44 cm</text><text x=\"143.7\" y=\"44\" text-anchor=\"middle\" class=\"fig-etq\">5 cm</text><text x=\"143.7\" y=\"-20.6\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">base</text></g></svg>"
  },
  {
   "id": "170e",
   "ex": 170,
   "ap": "e",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula l'àrea total d'aquest prisma recte:",
   "enunciat": "Calcula l'àrea total d'aquest prisma recte: un prisma de $5$ cm d'altura amb la base en forma de triangle rectangle de catets $6$ cm i $8$ cm.",
   "opcions": [
    "$168$ cm$^2$",
    "$158$ cm$^2$",
    "$216$ cm$^2$",
    "$120$ cm$^2$"
   ],
   "pistes": [
    "L'àrea total d'un prisma és $2\\cdot A_{\\text{base}}+A_{\\text{lateral}}$, amb $A_{\\text{lateral}}=\\text{perímetre de la base}\\cdot\\text{altura}$. La base és un triangle rectangle: per al perímetre et cal també la hipotenusa.",
    "Hipotenusa: $\\sqrt{6^2+8^2}$. Llavors $A_{\\text{base}}=\\dfrac{6\\cdot8}{2}$ i $A_{\\text{lateral}}=(6+8+\\text{hipotenusa})\\cdot5$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiTm8gaGFzIGZldCBzZXJ2aXIgbGEgaGlwb3RlbnVzYSAoJDEwJCBjbSwgcGVyIFBpdMOgZ29yZXMpIGVuIGVsIHBlcsOtbWV0cmUgZGUgbGEgYmFzZTogZWwgcGVyw61tZXRyZSBkZWwgdHJpYW5nbGUgcmVjdGFuZ2xlIMOpcyAkNis4KzEwPTI0JCBjbSwgbm8gJDYrOD0xNCQgY20uIiwgIk5vIGNvaW5jaWRlaXggYW1iICQyXFxjZG90MjQrMjRcXGNkb3Q1JDogcmV2aXNhIHBlciBzZXBhcmF0IGwnw6ByZWEgZGUgbGEgYmFzZSBpIGwnw6ByZWEgbGF0ZXJhbC4iLCAiQXF1ZXN0IHZhbG9yIMOpcyBub23DqXMgbCfDoHJlYSBsYXRlcmFsICgkMjRcXGNkb3Q1JCk6IGVuY2FyYSBmYWx0YSBzdW1hci1oaSBsZXMgZHVlcyBiYXNlcyB0cmlhbmd1bGFycy4iXSwgImVyciI6IFsiIiwgIlNJR05FX1RFUk1FX0lOREVQRU5ERU5UIiwgIlBST0RVQ1RFX01BTCIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIl0sICJyZXMiOiBbIiRBX3tcXHRleHR7YmFzZX19PVxcZGZyYWN7NlxcY2RvdDh9ezJ9PTI0JCBjbSReMiQiLCAiSGlwb3RlbnVzYTogJFxcc3FydHs2XjIrOF4yfT0xMCQgY207IHBlcsOtbWV0cmUgJD0yNCQgY20iLCAiJEFfe1xcdGV4dHt0b3RhbH19PTJcXGNkb3QyNCsyNFxcY2RvdDU9NDgrMTIwPTE2OCQgY20kXjIkIl19"
  },
  {
   "id": "170f",
   "ex": 170,
   "ap": "f",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula l'àrea total d'aquest prisma recte:",
   "enunciat": "Calcula l'àrea total d'aquest prisma recte: un cub d'aresta $7$ cm.",
   "opcions": [
    "$343$ cm$^2$",
    "$196$ cm$^2$",
    "$49$ cm$^2$",
    "$294$ cm$^2$"
   ],
   "pistes": [
    "Totes les cares d'un cub són quadrats iguals.",
    "Calcula l'àrea d'una cara i multiplica-la pel nombre de cares."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyIkN14zPTM0MyQgw6lzIGVsIFZPTFVNIGRlbCBjdWIuIEwnw6ByZWEgdG90YWwgdmEgYW1iIGVsIHF1YWRyYXQ6ICQ2XFxjZG90N14yJC4iLCAiU2VtYmxhIHF1ZSBoYXMgY29tcHRhdCBxdWF0cmUgY2FyZXMuIFVuIGN1YiBlbiB0w6kgc2lzOiBsZXMgcXVhdHJlIGxhdGVyYWxzIG3DqXMgbGEgZGUgZGFsdCBpIGxhIGRlIGJhaXguIiwgIkFxdWVzdGEgw6lzIGwnw6ByZWEgZCdVTkEgY2FyYS4gVW4gY3ViIGVuIHTDqSBzaXMsIHRvdGVzIGlndWFscy4iLCAiIl0sICJlcnIiOiBbIkRJTUVOU0lPX0VYUE9ORU5UX01BTCIsICJGQUNUT1JfT0JMSURBVCIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIiJdLCAicmVzIjogWyJDYWRhIGNhcmE6ICQ3XjI9NDkkIGNtJF4yJCIsICIkQV97XFx0ZXh0e3RvdGFsfX09NlxcY2RvdDQ5PTI5NCQgY20kXjIkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 158 191\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Cub d'aresta 7 cm, dibuixat en perspectiva.</title><g transform=\"translate(14.0,48.0)\"><polygon points=\"0.0,0.0 96.0,0.0 96.0,96.0 0.0,96.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,0.0 34.0,-34.0 130.0,-34.0 96.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"96.0,0.0 130.0,-34.0 130.0,62.0 96.0,96.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"96.0\" x2=\"34.0\" y2=\"62.0\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"34.0\" y1=\"62.0\" x2=\"34.0\" y2=\"-34.0\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"34.0\" y1=\"62.0\" x2=\"130.0\" y2=\"62.0\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"98.5\" x2=\"0.0\" y2=\"115.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"96.0\" y1=\"98.5\" x2=\"96.0\" y2=\"115.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"112.0\" x2=\"96.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"108.0\" x2=\"4.0\" y2=\"116.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"92.0\" y1=\"108.0\" x2=\"100.0\" y2=\"116.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"48\" y=\"126.4\" text-anchor=\"middle\" class=\"fig-etq\">7 cm</text></g></svg>"
  },
  {
   "id": "170g",
   "ex": 170,
   "ap": "g",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula l'àrea total d'aquest prisma recte:",
   "enunciat": "Calcula l'àrea total d'aquest prisma recte: un prisma de base hexagonal regular de $8$ cm de costat i $6{,}93$ cm d'apotema, amb $12$ cm d'altura.",
   "opcions": [
    "$576$ cm$^2$",
    "$908{,}64$ cm$^2$",
    "$742{,}32$ cm$^2$",
    "$332{,}64$ cm$^2$"
   ],
   "pistes": [
    "L'àrea total d'un prisma és $2\\cdot A_{\\text{base}}+A_{\\text{lateral}}$, amb $A_{\\text{lateral}}=\\text{perímetre de la base}\\cdot\\text{altura}$. La base és un hexàgon regular: $A_{\\text{base}}=\\dfrac{\\text{perímetre}\\cdot\\text{apotema}}{2}$.",
    "Perímetre de la base: $6\\cdot8=48$ cm. Llavors $A_{\\text{base}}=\\dfrac{48\\cdot6{,}93}{2}$ i $A_{\\text{lateral}}=48\\cdot12$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igw6lzIG5vbcOpcyBsJ8OgcmVhIGxhdGVyYWwgKCQ0OFxcY2RvdDEyJCk6IGZhbHRlbiBsZXMgZHVlcyBiYXNlcyBoZXhhZ29uYWxzLiIsICIiLCAiTm9tw6lzIGhhcyBjb21wdGF0IHVuYSBiYXNlLiBVbiBwcmlzbWEgZW4gdMOpIGR1ZXMsIHVuYSBhIGNhZGEgZXh0cmVtLiIsICJBcXVlc3RhIMOpcyBsJ8OgcmVhIGRlIGxlcyBkdWVzIGJhc2VzOiBlbmNhcmEgZmFsdGEgc3VtYXItaGkgbGEgbGF0ZXJhbC4iXSwgImVyciI6IFsiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiLCAiRkFDVE9SX09CTElEQVQiLCAiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiXSwgInJlcyI6IFsiJEFfe1xcdGV4dHtiYXNlfX09XFxkZnJhY3s0OFxcY2RvdDZ7LH05M317Mn09MTY2eyx9MzIkIGNtJF4yJCIsICIkQV97XFx0ZXh0e2xhdGVyYWx9fT00OFxcY2RvdDEyPTU3NiQgY20kXjIkIiwgIiRBX3tcXHRleHR7dG90YWx9fT0yXFxjZG90MTY2eyx9MzIrNTc2PTkwOHssfTY0JCBjbSReMiQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 311 248\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Prisma recte de base hexagonal regular, dibuixat en perspectiva. Al costat, la base en veritable magnitud amb l'apotema.</title><g transform=\"translate(53.8,183.3)\"><polygon points=\"0.0,-19.3 39.8,-9.7 39.8,9.7 0.0,19.3 -39.8,9.7 -39.8,-9.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><polygon points=\"39.8,-9.7 39.8,9.7 39.8,-140.3 39.8,-159.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"39.8,9.7 0.0,19.3 0.0,-130.7 39.8,-140.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,19.3 -39.8,9.7 -39.8,-140.3 0.0,-130.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"-39.8,9.7 -39.8,-9.7 -39.8,-159.7 -39.8,-140.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-169.3 39.8,-159.7 39.8,-140.3 0.0,-130.7 -39.8,-140.3 -39.8,-159.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"55.8\" y1=\"-169.3\" x2=\"55.8\" y2=\"19.3\" stroke=\"currentColor\" stroke-width=\"1.2\"/><polygon points=\"157.8,19.3 121.8,19.3 103.8,-11.9 121.8,-43.0 157.8,-43.0 175.8,-11.9\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"139.8\" y1=\"-11.9\" x2=\"139.8\" y2=\"19.3\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"142.3\" y1=\"-11.9\" x2=\"197.3\" y2=\"-11.9\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"142.3\" y1=\"19.3\" x2=\"197.3\" y2=\"19.3\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"193.8\" y1=\"-11.9\" x2=\"193.8\" y2=\"19.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"189.8\" y1=\"-15.9\" x2=\"197.8\" y2=\"-7.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"189.8\" y1=\"15.3\" x2=\"197.8\" y2=\"23.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"157.8\" y1=\"21.8\" x2=\"157.8\" y2=\"36.8\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"121.8\" y1=\"21.8\" x2=\"121.8\" y2=\"36.8\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"157.8\" y1=\"33.3\" x2=\"121.8\" y2=\"33.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"161.8\" y1=\"29.3\" x2=\"153.8\" y2=\"37.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"125.8\" y1=\"29.3\" x2=\"117.8\" y2=\"37.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"81.8\" y=\"-71.6\" text-anchor=\"middle\" class=\"fig-etq\">12 cm</text><text x=\"219.8\" y=\"6.7\" text-anchor=\"middle\" class=\"fig-etq petita\">6,93 cm</text><text x=\"139.8\" y=\"47.7\" text-anchor=\"middle\" class=\"fig-etq\">8 cm</text><text x=\"139.8\" y=\"-18.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">base</text></g></svg>"
  },
  {
   "id": "170h",
   "ex": 170,
   "ap": "h",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula l'àrea total d'aquest prisma recte:",
   "enunciat": "Calcula l'àrea total d'aquest prisma recte: un prisma de base hexagonal regular de $5$ cm de costat i $4{,}25$ cm d'apotema, amb $11$ cm d'altura.",
   "opcions": [
    "$330$ cm$^2$",
    "$457{,}5$ cm$^2$",
    "$127{,}5$ cm$^2$",
    "$393{,}75$ cm$^2$"
   ],
   "pistes": [
    "L'àrea total d'un prisma és $2\\cdot A_{\\text{base}}+A_{\\text{lateral}}$, amb $A_{\\text{lateral}}=\\text{perímetre de la base}\\cdot\\text{altura}$. La base és un hexàgon regular: $A_{\\text{base}}=\\dfrac{\\text{perímetre}\\cdot\\text{apotema}}{2}$.",
    "Perímetre de la base: $6\\cdot5=30$ cm. Llavors $A_{\\text{base}}=\\dfrac{30\\cdot4{,}25}{2}$ i $A_{\\text{lateral}}=30\\cdot11$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igw6lzIG5vbcOpcyBsJ8OgcmVhIGxhdGVyYWwgKCQzMFxcY2RvdDExJCkuIiwgIiIsICJBcXVlc3RhIMOpcyBsJ8OgcmVhIGRlIGxlcyBkdWVzIGJhc2VzLCBzZW5zZSBsYSBsYXRlcmFsLiIsICJOb23DqXMgaGFzIGNvbXB0YXQgdW5hIGJhc2UgaGV4YWdvbmFsIGVuIGxsb2MgZGUgZHVlcy4iXSwgImVyciI6IFsiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiLCAiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiLCAiRkFDVE9SX09CTElEQVQiXSwgInJlcyI6IFsiJEFfe1xcdGV4dHtiYXNlfX09XFxkZnJhY3szMFxcY2RvdDR7LH0yNX17Mn09NjN7LH03NSQgY20kXjIkIiwgIiRBX3tcXHRleHR7bGF0ZXJhbH19PTMwXFxjZG90MTE9MzMwJCBjbSReMiQiLCAiJEFfe1xcdGV4dHt0b3RhbH19PTJcXGNkb3Q2M3ssfTc1KzMzMD00NTd7LH01JCBjbSReMiQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 311 248\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Prisma recte de base hexagonal regular, dibuixat en perspectiva. Al costat, la base en veritable magnitud amb l'apotema.</title><g transform=\"translate(53.8,183.3)\"><polygon points=\"0.0,-19.3 39.8,-9.7 39.8,9.7 0.0,19.3 -39.8,9.7 -39.8,-9.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><polygon points=\"39.8,-9.7 39.8,9.7 39.8,-140.3 39.8,-159.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"39.8,9.7 0.0,19.3 0.0,-130.7 39.8,-140.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,19.3 -39.8,9.7 -39.8,-140.3 0.0,-130.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"-39.8,9.7 -39.8,-9.7 -39.8,-159.7 -39.8,-140.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-169.3 39.8,-159.7 39.8,-140.3 0.0,-130.7 -39.8,-140.3 -39.8,-159.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"55.8\" y1=\"-169.3\" x2=\"55.8\" y2=\"19.3\" stroke=\"currentColor\" stroke-width=\"1.2\"/><polygon points=\"157.8,19.3 121.8,19.3 103.8,-11.9 121.8,-43.0 157.8,-43.0 175.8,-11.9\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"139.8\" y1=\"-11.9\" x2=\"139.8\" y2=\"19.3\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"142.3\" y1=\"-11.9\" x2=\"197.3\" y2=\"-11.9\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"142.3\" y1=\"19.3\" x2=\"197.3\" y2=\"19.3\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"193.8\" y1=\"-11.9\" x2=\"193.8\" y2=\"19.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"189.8\" y1=\"-15.9\" x2=\"197.8\" y2=\"-7.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"189.8\" y1=\"15.3\" x2=\"197.8\" y2=\"23.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"157.8\" y1=\"21.8\" x2=\"157.8\" y2=\"36.8\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"121.8\" y1=\"21.8\" x2=\"121.8\" y2=\"36.8\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"157.8\" y1=\"33.3\" x2=\"121.8\" y2=\"33.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"161.8\" y1=\"29.3\" x2=\"153.8\" y2=\"37.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"125.8\" y1=\"29.3\" x2=\"117.8\" y2=\"37.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"81.8\" y=\"-71.6\" text-anchor=\"middle\" class=\"fig-etq\">11 cm</text><text x=\"219.8\" y=\"6.7\" text-anchor=\"middle\" class=\"fig-etq petita\">4,25 cm</text><text x=\"139.8\" y=\"47.7\" text-anchor=\"middle\" class=\"fig-etq\">5 cm</text><text x=\"139.8\" y=\"-18.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">base</text></g></svg>"
  },
  {
   "id": "170i",
   "ex": 170,
   "ap": "i",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula l'àrea total d'aquest prisma recte:",
   "enunciat": "Calcula l'àrea total d'aquest prisma recte: un prisma de base octogonal regular de $6$ cm de costat i $7{,}24$ cm d'apotema, amb $15$ cm d'altura.",
   "opcions": [
    "$720$ cm$^2$",
    "$1067{,}52$ cm$^2$",
    "$893{,}76$ cm$^2$",
    "$800{,}64$ cm$^2$"
   ],
   "pistes": [
    "L'àrea total d'un prisma és $2\\cdot A_{\\text{base}}+A_{\\text{lateral}}$, amb $A_{\\text{lateral}}=\\text{perímetre de la base}\\cdot\\text{altura}$. La base és un octàgon regular: $A_{\\text{base}}=\\dfrac{\\text{perímetre}\\cdot\\text{apotema}}{2}$.",
    "Un octàgon té VUIT costats: el perímetre és $8\\cdot6=48$ cm. Llavors $A_{\\text{base}}=\\dfrac{48\\cdot7{,}24}{2}$ i $A_{\\text{lateral}}=48\\cdot15$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igw6lzIG5vbcOpcyBsJ8OgcmVhIGxhdGVyYWwgKCQ0OFxcY2RvdDE1JCkuIiwgIiIsICJOb23DqXMgaGFzIGNvbXB0YXQgdW5hIGJhc2Ugb2N0b2dvbmFsIGVuIGxsb2MgZGUgZHVlcy4iLCAiU2VtYmxhIHF1ZSBoYXMgZmV0IHNlcnZpciBzaXMgY29zdGF0cyBlbiBjb21wdGVzIGRlIHZ1aXQ6IGVsIHBlcsOtbWV0cmUgZCd1biBvY3TDoGdvbiBkZSBjb3N0YXQgJDYkIMOpcyAkOFxcY2RvdDY9NDgkIGNtLiJdLCAiZXJyIjogWyJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIiIsICJGQUNUT1JfT0JMSURBVCIsICJOX01BTF9DT01QVEFUIl0sICJyZXMiOiBbIiRBX3tcXHRleHR7YmFzZX19PVxcZGZyYWN7NDhcXGNkb3Q3eyx9MjR9ezJ9PTE3M3ssfTc2JCBjbSReMiQiLCAiJEFfe1xcdGV4dHtsYXRlcmFsfX09NDhcXGNkb3QxNT03MjAkIGNtJF4yJCIsICIkQV97XFx0ZXh0e3RvdGFsfX09MlxcY2RvdDE3M3ssfTc2KzcyMD0xXFwsMDY3eyx9NTIkIGNtJF4yJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 323 248\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Prisma recte de base octogonal regular, dibuixat en perspectiva. Al costat, la base en veritable magnitud amb l'apotema.</title><g transform=\"translate(60.0,183.3)\"><polygon points=\"0.0,-19.3 32.5,-13.7 46.0,0.0 32.5,13.7 0.0,19.3 -32.5,13.7 -46.0,0.0 -32.5,-13.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><polygon points=\"46.0,0.0 32.5,13.7 32.5,-136.3 46.0,-150.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"32.5,13.7 0.0,19.3 0.0,-130.7 32.5,-136.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,19.3 -32.5,13.7 -32.5,-136.3 0.0,-130.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"-32.5,13.7 -46.0,0.0 -46.0,-150.0 -32.5,-136.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-169.3 32.5,-163.7 46.0,-150.0 32.5,-136.3 0.0,-130.7 -32.5,-136.3 -46.0,-150.0 -32.5,-163.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"62.0\" y1=\"-169.3\" x2=\"62.0\" y2=\"19.3\" stroke=\"currentColor\" stroke-width=\"1.2\"/><polygon points=\"159.8,19.3 132.2,19.3 112.7,-0.2 112.7,-27.7 132.2,-47.2 159.8,-47.2 179.3,-27.7 179.3,-0.2\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"146.0\" y1=\"-13.9\" x2=\"146.0\" y2=\"19.3\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"148.5\" y1=\"-13.9\" x2=\"203.5\" y2=\"-13.9\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"148.5\" y1=\"19.3\" x2=\"203.5\" y2=\"19.3\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"200.0\" y1=\"-13.9\" x2=\"200.0\" y2=\"19.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"196.0\" y1=\"-17.9\" x2=\"204.0\" y2=\"-9.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"196.0\" y1=\"15.3\" x2=\"204.0\" y2=\"23.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"159.8\" y1=\"21.8\" x2=\"159.8\" y2=\"36.8\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"132.2\" y1=\"21.8\" x2=\"132.2\" y2=\"36.8\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"159.8\" y1=\"33.3\" x2=\"132.2\" y2=\"33.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"163.8\" y1=\"29.3\" x2=\"155.8\" y2=\"37.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"136.2\" y1=\"29.3\" x2=\"128.2\" y2=\"37.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"88\" y=\"-71.6\" text-anchor=\"middle\" class=\"fig-etq\">15 cm</text><text x=\"226\" y=\"5.6\" text-anchor=\"middle\" class=\"fig-etq petita\">7,24 cm</text><text x=\"146\" y=\"47.7\" text-anchor=\"middle\" class=\"fig-etq\">6 cm</text><text x=\"146\" y=\"-21\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">base</text></g></svg>"
  },
  {
   "id": "171",
   "ex": 171,
   "ap": "",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Calcula l'àrea total d'un prisma recte de base triangular equilàtera de costat $2$ cm i altura $3$ cm.",
   "opcions": [
    "$\\approx19{,}73$ cm$^2$",
    "$\\approx18$ cm$^2$",
    "$\\approx24{,}93$ cm$^2$",
    "$\\approx21{,}46$ cm$^2$"
   ],
   "pistes": [
    "L'àrea total d'un prisma és $2\\cdot A_{\\text{base}}+A_{\\text{lateral}}$, amb $A_{\\text{lateral}}=\\text{perímetre de la base}\\cdot\\text{altura}$. La base és un triangle equilàter: $A_{\\text{base}}=\\dfrac{c^2\\sqrt3}{4}$.",
    "$A_{\\text{base}}=\\dfrac{2^2\\sqrt3}{4}$ i $A_{\\text{lateral}}=(3\\cdot2)\\cdot3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJTZW1ibGEgcXVlIG5vbcOpcyBoYXMgY29tcHRhdCBVTkEgYmFzZSB0cmlhbmd1bGFyIGVuIGxsb2MgZGUgZHVlczogdW4gcHJpc21hIHNlbXByZSBlbiB0w6kgZHVlcy4iLCAiQXF1ZXN0IHZhbG9yIMOpcyBub23DqXMgbCfDoHJlYSBsYXRlcmFsICgkNlxcY2RvdDMkKTogZW5jYXJhIGZhbHRhIHN1bWFyLWhpIGxlcyBkdWVzIGJhc2VzIHRyaWFuZ3VsYXJzLiIsICJObyBjb2luY2lkZWl4IGFtYiAkMlxcY2RvdDF7LH03Mys2XFxjZG90MyQ6IHJldmlzYSBwZXIgc2VwYXJhdCBsJ8OgcmVhIGRlIGxhIGJhc2UgaSBsJ8OgcmVhIGxhdGVyYWwuIiwgIiJdLCAiZXJyIjogWyJGQUNUT1JfT0JMSURBVCIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIlBST0RVQ1RFX01BTCIsICIiXSwgInJlcyI6IFsiJEFfe1xcdGV4dHtiYXNlfX09XFxkZnJhY3syXjJcXHNxcnQzfXs0fVxcYXBwcm94MXssfTczJCBjbSReMiQiLCAiJEFfe1xcdGV4dHtsYXRlcmFsfX09NlxcY2RvdDM9MTgkIGNtJF4yJCIsICIkQV97XFx0ZXh0e3RvdGFsfX1cXGFwcHJveDJcXGNkb3Qxeyx9NzMrMThcXGFwcHJveDIxeyx9NDYkIGNtJF4yJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 159 242\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Prisma recte de base triangular regular, dibuixat en perspectiva.</title><g transform=\"translate(53.8,183.3)\"><polygon points=\"0.0,-19.3 39.8,9.7 -39.8,9.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><polygon points=\"0.0,-19.3 39.8,9.7 39.8,-140.3 0.0,-169.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"39.8,9.7 -39.8,9.7 -39.8,-140.3 39.8,-140.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"-39.8,9.7 0.0,-19.3 0.0,-169.3 -39.8,-140.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-169.3 39.8,-140.3 -39.8,-140.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"55.8\" y1=\"-169.3\" x2=\"55.8\" y2=\"9.7\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"39.8\" y1=\"12.2\" x2=\"39.8\" y2=\"31.2\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-39.8\" y1=\"12.2\" x2=\"-39.8\" y2=\"31.2\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"39.8\" y1=\"27.7\" x2=\"-39.8\" y2=\"27.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"43.8\" y1=\"23.7\" x2=\"35.8\" y2=\"31.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-35.8\" y1=\"23.7\" x2=\"-43.8\" y2=\"31.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"75.8\" y=\"-76.5\" text-anchor=\"middle\" class=\"fig-etq\">3 cm</text><text x=\"0\" y=\"42\" text-anchor=\"middle\" class=\"fig-etq\">2 cm</text></g></svg>"
  },
  {
   "id": "172",
   "ex": 172,
   "ap": "",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Calcula l'àrea total d'un prisma hexagonal regular de costat $8$ cm i altura $10$ cm.",
   "opcions": [
    "$\\approx646{,}28$ cm$^2$",
    "$\\approx1042{,}11$ cm$^2$",
    "$\\approx812{,}55$ cm$^2$",
    "$\\approx480$ cm$^2$"
   ],
   "pistes": [
    "L'àrea total d'un prisma és $2\\cdot A_{\\text{base}}+A_{\\text{lateral}}$, amb $A_{\\text{lateral}}=\\text{perímetre de la base}\\cdot\\text{altura}$. Per a l'àrea de l'hexàgon et cal l'apotema, que no et donen: en un hexàgon regular de costat $c$, $a=\\dfrac{c\\sqrt3}{2}$.",
    "Aquí $a=\\dfrac{8\\sqrt3}{2}$ i el perímetre és $6\\cdot8=48$ cm. Llavors $A_{\\text{base}}=\\dfrac{48\\cdot a}{2}$ i $A_{\\text{lateral}}=48\\cdot10$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJTZW1ibGEgcXVlIG5vbcOpcyBoYXMgY29tcHRhdCBVTkEgYmFzZSBoZXhhZ29uYWwgZW4gbGxvYyBkZSBkdWVzLiIsICJMJ2Fwb3RlbWEgZCd1biBoZXjDoGdvbiByZWd1bGFyIGRlIGNvc3RhdCAkOCQgY20gw6lzICQ0XFxzcXJ0M1xcYXBwcm94NnssfTkzJCBjbSwgbm8gJDgkIGNtOiBhcG90ZW1hIGkgY29zdGF0IG5vbcOpcyBjb2luY2lkZWl4ZW4gZW4gZWwgY2FzIGRlbCBxdWFkcmF0LiIsICIiLCAiQXF1ZXN0IHZhbG9yIMOpcyBub23DqXMgbCfDoHJlYSBsYXRlcmFsICgkNDhcXGNkb3QxMCQpOiBlbmNhcmEgZmFsdGEgc3VtYXItaGkgbGVzIGR1ZXMgYmFzZXMgaGV4YWdvbmFscy4iXSwgImVyciI6IFsiRkFDVE9SX09CTElEQVQiLCAiU0lHTkVfVEVSTUVfSU5ERVBFTkRFTlQiLCAiIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iXSwgInJlcyI6IFsiJGE9XFxkZnJhY3s4XFxzcXJ0M317Mn1cXGFwcHJveDZ7LH05MyQgY20iLCAiJEFfe1xcdGV4dHtiYXNlfX09XFxkZnJhY3s0OFxcY2RvdDZ7LH05M317Mn1cXGFwcHJveDE2NnssfTI4JCBjbSReMiQiLCAiJEFfe1xcdGV4dHtsYXRlcmFsfX09NDhcXGNkb3QxMD00ODAkIGNtJF4yJCIsICIkQV97XFx0ZXh0e3RvdGFsfX1cXGFwcHJveDJcXGNkb3QxNjZ7LH0yOCs0ODBcXGFwcHJveDgxMnssfTU1JCBjbSReMiQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 168 237\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Prisma recte de base hexagonal regular, dibuixat en perspectiva.</title><g transform=\"translate(53.8,171.3)\"><polygon points=\"0.0,-19.3 39.8,-9.7 39.8,9.7 0.0,19.3 -39.8,9.7 -39.8,-9.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><polygon points=\"39.8,-9.7 39.8,9.7 39.8,-128.3 39.8,-147.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"39.8,9.7 0.0,19.3 0.0,-118.7 39.8,-128.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,19.3 -39.8,9.7 -39.8,-128.3 0.0,-118.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"-39.8,9.7 -39.8,-9.7 -39.8,-147.7 -39.8,-128.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-157.3 39.8,-147.7 39.8,-128.3 0.0,-118.7 -39.8,-128.3 -39.8,-147.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"55.8\" y1=\"-157.3\" x2=\"55.8\" y2=\"19.3\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"40.4\" y1=\"12.1\" x2=\"44.9\" y2=\"30.6\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.6\" y1=\"21.7\" x2=\"5.1\" y2=\"40.2\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"44.1\" y1=\"27.2\" x2=\"4.2\" y2=\"36.8\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"47.0\" y1=\"22.3\" x2=\"41.1\" y2=\"32.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"7.2\" y1=\"32.0\" x2=\"1.3\" y2=\"41.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"81.8\" y=\"-65.6\" text-anchor=\"middle\" class=\"fig-etq\">10 cm</text><text x=\"17.2\" y=\"48.4\" text-anchor=\"middle\" class=\"fig-etq\">8 cm</text></g></svg>"
  },
  {
   "id": "173",
   "ex": 173,
   "ap": "",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Calcula l'àrea total d'un prisma hexagonal regular de costat $6$ cm i altura $10$ cm.",
   "opcions": [
    "$\\approx576$ cm$^2$",
    "$\\approx360$ cm$^2$",
    "$\\approx453{,}53$ cm$^2$",
    "$\\approx547{,}06$ cm$^2$"
   ],
   "pistes": [
    "L'àrea total d'un prisma és $2\\cdot A_{\\text{base}}+A_{\\text{lateral}}$, amb $A_{\\text{lateral}}=\\text{perímetre de la base}\\cdot\\text{altura}$. Per a l'àrea de l'hexàgon et cal l'apotema, que no et donen: en un hexàgon regular de costat $c$, $a=\\dfrac{c\\sqrt3}{2}$.",
    "Aquí $a=\\dfrac{6\\sqrt3}{2}$ i el perímetre és $6\\cdot6=36$ cm. Llavors $A_{\\text{base}}=\\dfrac{36\\cdot a}{2}$ i $A_{\\text{lateral}}=36\\cdot10$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMJ2Fwb3RlbWEgZCd1biBoZXjDoGdvbiByZWd1bGFyIGRlIGNvc3RhdCAkNiQgY20gw6lzICQzXFxzcXJ0M1xcYXBwcm94NXssfTIkIGNtLCBubyAkNiQgY20uIiwgIkFxdWVzdCB2YWxvciDDqXMgbm9tw6lzIGwnw6ByZWEgbGF0ZXJhbCAoJDM2XFxjZG90MTAkKTogZW5jYXJhIGZhbHRhIHN1bWFyLWhpIGxlcyBkdWVzIGJhc2VzIGhleGFnb25hbHMuIiwgIlNlbWJsYSBxdWUgbm9tw6lzIGhhcyBjb21wdGF0IFVOQSBiYXNlIGhleGFnb25hbCBlbiBsbG9jIGRlIGR1ZXMuIiwgIiJdLCAiZXJyIjogWyJTSUdORV9URVJNRV9JTkRFUEVOREVOVCIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIkZBQ1RPUl9PQkxJREFUIiwgIiJdLCAicmVzIjogWyIkYT1cXGRmcmFjezZcXHNxcnQzfXsyfVxcYXBwcm94NXssfTIkIGNtIiwgIiRBX3tcXHRleHR7YmFzZX19PVxcZGZyYWN7MzZcXGNkb3Q1eyx9Mn17Mn1cXGFwcHJveDkzeyx9NTMkIGNtJF4yJCIsICIkQV97XFx0ZXh0e2xhdGVyYWx9fT0zNlxcY2RvdDEwPTM2MCQgY20kXjIkIiwgIiRBX3tcXHRleHR7dG90YWx9fVxcYXBwcm94MlxcY2RvdDkzeyx9NTMrMzYwXFxhcHByb3g1NDd7LH0wNiQgY20kXjIkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 168 249\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Prisma recte de base hexagonal regular, dibuixat en perspectiva.</title><g transform=\"translate(53.8,183.3)\"><polygon points=\"0.0,-19.3 39.8,-9.7 39.8,9.7 0.0,19.3 -39.8,9.7 -39.8,-9.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><polygon points=\"39.8,-9.7 39.8,9.7 39.8,-140.3 39.8,-159.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"39.8,9.7 0.0,19.3 0.0,-130.7 39.8,-140.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,19.3 -39.8,9.7 -39.8,-140.3 0.0,-130.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"-39.8,9.7 -39.8,-9.7 -39.8,-159.7 -39.8,-140.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-169.3 39.8,-159.7 39.8,-140.3 0.0,-130.7 -39.8,-140.3 -39.8,-159.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"55.8\" y1=\"-169.3\" x2=\"55.8\" y2=\"19.3\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"40.4\" y1=\"12.1\" x2=\"44.9\" y2=\"30.6\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.6\" y1=\"21.7\" x2=\"5.1\" y2=\"40.2\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"44.1\" y1=\"27.2\" x2=\"4.2\" y2=\"36.8\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"47.0\" y1=\"22.3\" x2=\"41.1\" y2=\"32.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"7.2\" y1=\"32.0\" x2=\"1.3\" y2=\"41.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"81.8\" y=\"-71.6\" text-anchor=\"middle\" class=\"fig-etq\">10 cm</text><text x=\"17.2\" y=\"48.4\" text-anchor=\"middle\" class=\"fig-etq\">6 cm</text></g></svg>"
  },
  {
   "id": "174",
   "ex": 174,
   "ap": "",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "L'àrea total d'un cub és $24$ cm$^2$. Calcula la longitud de la seva diagonal.",
   "opcions": [
    "$\\approx2{,}83$ cm",
    "$\\approx3{,}46$ cm",
    "$2$ cm",
    "$4$ cm"
   ],
   "pistes": [
    "Un cub té $6$ cares iguals, així que l'aresta compleix $6L^2=24 \\Rightarrow L^2=4 \\Rightarrow L=2$ cm.",
    "La diagonal del cub és $d=L\\sqrt3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3RhIMOpcyBsYSBkaWFnb25hbCBkJ3VuYSBDQVJBIGRlbCBjdWIgKCRMXFxzcXJ0MiQpLCBubyBsYSBkaWFnb25hbCBkZWwgY3ViIHNlbmNlciwgcXVlIHRyYXZlc3NhIGwnaW50ZXJpb3IgaSDDqXMgbcOpcyBsbGFyZ2E6ICRkPUxcXHNxcnQzJC4iLCAiIiwgIkFxdWVzdGEgw6lzIGwnYXJlc3RhIGRlbCBjdWIsIG5vIGxhIGRpYWdvbmFsOiBlbmNhcmEgZmFsdGEgbXVsdGlwbGljYXIgcGVyICRcXHNxcnQzJC4iLCAiU2VtYmxhIHF1ZSBoYXMgY29uZsOzcyBsYSBkaWFnb25hbCBkZWwgY3ViIGFtYiBsJ2FyZXN0YSBkZSBjYXJhIGFsIHF1YWRyYXQsIG8gaGFzIGZldCB1bmEgYXJyZWwgbWFsYW1lbnQ6IGNvbXByb3ZhIHByaW1lciAkTD1cXHNxcnR7MjQ6Nn09MiQgY20gaSBkZXNwcsOpcyBhcGxpY2EgJGQ9TFxcc3FydDMkLiJdLCAiZXJyIjogWyJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIiIsICJQQVNfSU5URVJNRURJX1BFUl9SRVNQT1NUQSIsICJBUlJFTF9NQUxfQVBMSUNBREEiXSwgInJlcyI6IFsiJEw9XFxzcXJ0ezI0OjZ9PVxcc3FydDQ9MiQgY20iLCAiJGQ9TFxcc3FydDM9Mlxcc3FydDNcXGFwcHJveDN7LH00NiQgY20iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 158 191\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Cub d'aresta a, dibuixat en perspectiva.</title><g transform=\"translate(14.0,48.0)\"><polygon points=\"0.0,0.0 96.0,0.0 96.0,96.0 0.0,96.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,0.0 34.0,-34.0 130.0,-34.0 96.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"96.0,0.0 130.0,-34.0 130.0,62.0 96.0,96.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"96.0\" x2=\"34.0\" y2=\"62.0\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"34.0\" y1=\"62.0\" x2=\"34.0\" y2=\"-34.0\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"34.0\" y1=\"62.0\" x2=\"130.0\" y2=\"62.0\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"98.5\" x2=\"0.0\" y2=\"115.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"96.0\" y1=\"98.5\" x2=\"96.0\" y2=\"115.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"112.0\" x2=\"96.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"108.0\" x2=\"4.0\" y2=\"116.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"92.0\" y1=\"108.0\" x2=\"100.0\" y2=\"116.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"48\" y=\"126.4\" text-anchor=\"middle\" class=\"fig-etq\">a</text></g></svg>"
  },
  {
   "id": "175",
   "ex": 175,
   "ap": "",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "L'àrea total d'un cub és $150$ m$^2$. Calcula la longitud de la seva diagonal.",
   "opcions": [
    "$\\approx7{,}07$ m",
    "$\\approx8{,}66$ m",
    "$25$ m",
    "$5$ m"
   ],
   "pistes": [
    "Aresta: $6L^2=150 \\Rightarrow L^2=25 \\Rightarrow L=5$ m.",
    "Diagonal: $d=L\\sqrt3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3RhIMOpcyBsYSBkaWFnb25hbCBkJ3VuYSBDQVJBIGRlbCBjdWIgKCRMXFxzcXJ0MiQpLCBubyBsYSBkaWFnb25hbCBkZWwgY3ViIHNlbmNlcjogY2FsICRkPUxcXHNxcnQzJC4iLCAiIiwgIk5vIGhhcyBmZXQgbCdhcnJlbCBxdWFkcmFkYSBkZSAkMTUwOjY9MjUkOiBsJ2FyZXN0YSDDqXMgJEw9XFxzcXJ0ezI1fT01JCBtLCBubyAkMjUkIG0uIiwgIkFxdWVzdGEgw6lzIGwnYXJlc3RhIGRlbCBjdWIsIG5vIGxhIGRpYWdvbmFsOiBlbmNhcmEgZmFsdGEgbXVsdGlwbGljYXIgcGVyICRcXHNxcnQzJC4iXSwgImVyciI6IFsiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiLCAiQVJSRUxfTUFMX0FQTElDQURBIiwgIlBBU19JTlRFUk1FRElfUEVSX1JFU1BPU1RBIl0sICJyZXMiOiBbIiRMPVxcc3FydHsxNTA6Nn09XFxzcXJ0ezI1fT01JCBtIiwgIiRkPUxcXHNxcnQzPTVcXHNxcnQzXFxhcHByb3g4eyx9NjYkIG0iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 158 191\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Cub d'aresta a, dibuixat en perspectiva.</title><g transform=\"translate(14.0,48.0)\"><polygon points=\"0.0,0.0 96.0,0.0 96.0,96.0 0.0,96.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,0.0 34.0,-34.0 130.0,-34.0 96.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"96.0,0.0 130.0,-34.0 130.0,62.0 96.0,96.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"96.0\" x2=\"34.0\" y2=\"62.0\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"34.0\" y1=\"62.0\" x2=\"34.0\" y2=\"-34.0\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"34.0\" y1=\"62.0\" x2=\"130.0\" y2=\"62.0\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"98.5\" x2=\"0.0\" y2=\"115.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"96.0\" y1=\"98.5\" x2=\"96.0\" y2=\"115.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"112.0\" x2=\"96.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"108.0\" x2=\"4.0\" y2=\"116.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"92.0\" y1=\"108.0\" x2=\"100.0\" y2=\"116.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"48\" y=\"126.4\" text-anchor=\"middle\" class=\"fig-etq\">a</text></g></svg>"
  },
  {
   "id": "176a",
   "ex": 176,
   "ap": "a",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "En un estudi d'arquitectura s'ha dissenyat un edifici que té forma de prisma recte, de $20$ m d'altura, amb una base triangular equilàtera de $6$ m de costat.",
   "enunciat": "En un estudi d'arquitectura s'ha dissenyat un edifici que té forma de prisma recte, de $20$ m d'altura, amb una base triangular equilàtera de $6$ m de costat. Quant mesura l'àrea lateral de l'edifici?",
   "opcions": [
    "$240$ m$^2$",
    "$\\approx15{,}59$ m$^2$",
    "$360$ m$^2$",
    "$\\approx391{,}18$ m$^2$"
   ],
   "pistes": [
    "El perímetre de la base triangular és $3\\cdot6=18$ m.",
    "Àrea lateral d'un prisma: perímetre de la base per l'altura."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJObyBjb2luY2lkZWl4IGFtYiAkMThcXGNkb3QyMCQ6IGNvbXByb3ZhIHF1ZSBlbCBwZXLDrW1ldHJlIGRlIGxhIGJhc2UgKCQzXFxjZG90Nj0xOCQgbSkgw6lzIGNvcnJlY3RlIGFiYW5zIGRlIG11bHRpcGxpY2FyLWxvIHBlciBsJ2FsdHVyYS4iLCAiQXF1ZXN0YSDDqXMgbCfDoHJlYSBkJ3VuYSBiYXNlIHRyaWFuZ3VsYXIsIG5vIGwnw6ByZWEgbGF0ZXJhbDogbCfDoHJlYSBsYXRlcmFsIMOpcyBwZXLDrW1ldHJlIHBlciBhbHR1cmEsIG5vIGRlcMOobiBkZSBsYSBmw7NybXVsYSBkZWwgdHJpYW5nbGUgZXF1aWzDoHRlci4iLCAiIiwgIkFxdWVzdCB2YWxvciBqYSBpbmNsb3UgbGVzIGR1ZXMgYmFzZXMgdHJpYW5ndWxhcnM6IGFxdcOtIG5vbcOpcyBlcyBkZW1hbmEgbCfDoHJlYSBMQVRFUkFMLCBzZW5zZSBsZXMgYmFzZXMuIl0sICJlcnIiOiBbIkZBQ1RPUl9PQkxJREFUIiwgIlBBU19JTlRFUk1FRElfUEVSX1JFU1BPU1RBIiwgIiIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIl0sICJyZXMiOiBbIiRBX3tcXHRleHR7bGF0ZXJhbH19PTE4XFxjZG90MjAkIiwgIiRBX3tcXHRleHR7bGF0ZXJhbH19PTM2MCQgbSReMiQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 159 242\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Prisma recte de base triangular regular, dibuixat en perspectiva.</title><g transform=\"translate(53.8,183.3)\"><polygon points=\"0.0,-19.3 39.8,9.7 -39.8,9.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><polygon points=\"0.0,-19.3 39.8,9.7 39.8,-140.3 0.0,-169.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"39.8,9.7 -39.8,9.7 -39.8,-140.3 39.8,-140.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"-39.8,9.7 0.0,-19.3 0.0,-169.3 -39.8,-140.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-169.3 39.8,-140.3 -39.8,-140.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"55.8\" y1=\"-169.3\" x2=\"55.8\" y2=\"9.7\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"39.8\" y1=\"12.2\" x2=\"39.8\" y2=\"31.2\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-39.8\" y1=\"12.2\" x2=\"-39.8\" y2=\"31.2\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"39.8\" y1=\"27.7\" x2=\"-39.8\" y2=\"27.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"43.8\" y1=\"23.7\" x2=\"35.8\" y2=\"31.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-35.8\" y1=\"23.7\" x2=\"-43.8\" y2=\"31.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"75.8\" y=\"-76.5\" text-anchor=\"middle\" class=\"fig-etq\">20 m</text><text x=\"0\" y=\"42\" text-anchor=\"middle\" class=\"fig-etq\">6 m</text></g></svg>"
  },
  {
   "id": "176b",
   "ex": 176,
   "ap": "b",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "En un estudi d'arquitectura s'ha dissenyat un edifici que té forma de prisma recte, de $20$ m d'altura, amb una base triangular equilàtera de $6$ m de costat.",
   "enunciat": "En un estudi d'arquitectura s'ha dissenyat un edifici que té forma de prisma recte, de $20$ m d'altura, amb una base triangular equilàtera de $6$ m de costat. Quant mesura l'àrea total de l'edifici?",
   "opcions": [
    "$\\approx406{,}59$ m$^2$",
    "$\\approx375{,}59$ m$^2$",
    "$360$ m$^2$",
    "$\\approx391{,}18$ m$^2$"
   ],
   "pistes": [
    "Àrea de la base: $A_{\\text{base}}=\\dfrac{6^2\\sqrt3}{4}\\approx15{,}59$ m$^2$.",
    "Àrea total $=$ àrea lateral (calculada abans, $360$ m$^2$) més les dues bases."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJObyBjb2luY2lkZWl4IGFtYiAkMzYwKzJcXGNkb3QxNXssfTU5JDogcmV2aXNhIGVsIHByb2R1Y3RlIGRlIGwnw6ByZWEgZGVsIHRyaWFuZ2xlIGVxdWlsw6B0ZXIgYWJhbnMgZGUgc3VtYXItbGEgZHVlcyB2ZWdhZGVzLiIsICJTZW1ibGEgcXVlIG5vbcOpcyBoYXMgY29tcHRhdCBVTkEgYmFzZSB0cmlhbmd1bGFyIGVuIGxsb2MgZGUgZHVlcy4iLCAiQXF1ZXN0IHZhbG9yIMOpcyBub23DqXMgbCfDoHJlYSBsYXRlcmFsIChsJ2FwYXJ0YXQgYW50ZXJpb3IpOiBlbmNhcmEgZmFsdGEgc3VtYXItaGkgbGVzIGR1ZXMgYmFzZXMgdHJpYW5ndWxhcnMuIiwgIiJdLCAiZXJyIjogWyJQUk9EVUNURV9NQUwiLCAiRkFDVE9SX09CTElEQVQiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiXSwgInJlcyI6IFsiJEFfe1xcdGV4dHtiYXNlfX09XFxkZnJhY3s2XjJcXHNxcnQzfXs0fVxcYXBwcm94MTV7LH01OSQgbSReMiQiLCAiJEFfe1xcdGV4dHt0b3RhbH19PTM2MCsyXFxjZG90MTV7LH01OVxcYXBwcm94Mzkxeyx9MTgkIG0kXjIkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 159 242\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Prisma recte de base triangular regular, dibuixat en perspectiva.</title><g transform=\"translate(53.8,183.3)\"><polygon points=\"0.0,-19.3 39.8,9.7 -39.8,9.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><polygon points=\"0.0,-19.3 39.8,9.7 39.8,-140.3 0.0,-169.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"39.8,9.7 -39.8,9.7 -39.8,-140.3 39.8,-140.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"-39.8,9.7 0.0,-19.3 0.0,-169.3 -39.8,-140.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-169.3 39.8,-140.3 -39.8,-140.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"55.8\" y1=\"-169.3\" x2=\"55.8\" y2=\"9.7\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"39.8\" y1=\"12.2\" x2=\"39.8\" y2=\"31.2\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-39.8\" y1=\"12.2\" x2=\"-39.8\" y2=\"31.2\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"39.8\" y1=\"27.7\" x2=\"-39.8\" y2=\"27.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"43.8\" y1=\"23.7\" x2=\"35.8\" y2=\"31.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-35.8\" y1=\"23.7\" x2=\"-43.8\" y2=\"31.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"75.8\" y=\"-76.5\" text-anchor=\"middle\" class=\"fig-etq\">20 m</text><text x=\"0\" y=\"42\" text-anchor=\"middle\" class=\"fig-etq\">6 m</text></g></svg>"
  }
 ]
};
