/* Generat per tools/build.py — no editeu aquest fitxer a mà. */
window.FULL = {
 "full": 7,
 "titol": "Full 7 — Teorema de Pitàgores",
 "subtitol": "Triangles i teorema de Pitàgores, àrees de triangles, quadrilàters i polígons regulars, i problemes d'aplicació.",
 "blocs": [
  {
   "id": "triangles",
   "titol": "Triangles i teorema de Pitàgores",
   "descripcio": "Angles, desigualtat triangular, triangles rectangles i teorema de Pitàgores en quadrats, rectangles i polígons.",
   "items": [
    "357a",
    "357b",
    "119",
    "120a",
    "120b",
    "120c",
    "123a",
    "123b",
    "123c",
    "123d",
    "121a",
    "121b",
    "121c",
    "121d",
    "122",
    "124a",
    "124b",
    "124c",
    "125",
    "126a",
    "126b",
    "127a",
    "127b",
    "127c",
    "128a",
    "128b",
    "129"
   ]
  },
  {
   "id": "arees_pit",
   "titol": "Àrees amb el teorema de Pitàgores",
   "descripcio": "Àrees de triangles i rectangles combinades amb Pitàgores per trobar un costat, una alçada o una hipotenusa.",
   "items": [
    "332a",
    "332b",
    "332c",
    "131",
    "132",
    "134",
    "135",
    "136",
    "137",
    "138",
    "130",
    "133"
   ]
  },
  {
   "id": "arees_poli",
   "titol": "Àrees de quadrilàters i polígons regulars",
   "descripcio": "Trapezis, hexàgons, octàgons i figures amb superfícies circulars.",
   "items": [
    "333a",
    "333b",
    "333c",
    "333d",
    "140a",
    "140b",
    "140c",
    "140d",
    "141a",
    "141b",
    "142",
    "143a",
    "143b",
    "143c",
    "143d",
    "144a",
    "144b",
    "145c"
   ]
  },
  {
   "id": "problemes",
   "titol": "Problemes d'aplicació",
   "descripcio": "Ombres, escales, camps, senyals, edificis i altres problemes que combinen Pitàgores i àrees.",
   "items": [
    "146",
    "147",
    "148a",
    "148b",
    "149",
    "150",
    "151"
   ],
   "avancat": true
  }
 ],
 "errors": {
  "ARREL_FACTOR_OBLIDAT": "Has arribat al valor de dins de l'arrel però t'has deixat el factor que l'acompanya (sovint un $\\sqrt3$ o un $2$). Escriu la fórmula sencera abans de substituir-hi els números.",
  "CATET_MAL_IDENTIFICAT": "El costat que busques no és el que has triat. Fes un dibuix ràpid i marca quin costat coneixes i quin has d'aïllar abans de calcular.",
  "DIMENSIO_EXPONENT_MAL": "L'exponent no correspon a la dimensió: les àrees van al quadrat i els volums, al cub. Comprova també les unitats del resultat.",
  "DIVISIO_REPETIDA": "Has dividit dues vegades pel mateix nombre. Sol passar quan la fórmula ja porta la divisió incorporada i se li torna a aplicar al final: escriu la fórmula sencera i substitueix-hi els valors d'un sol cop.",
  "FORMULA_INVERTIDA": "Has dividit on la fórmula multiplica (o al revés). Escriu la fórmula sencera abans de substituir-hi els valors.",
  "FRACCIO_DE_CERCLE_MAL": "La porció de cercle no és la que toca: mig cercle, un quart, tres quarts... Mira quin angle abasta la figura i quina fracció de $360^\\circ$ representa.",
  "INVERTIDA": "Has invertit la fracció. Simplificar no canvia quin terme és a dalt i quin a baix.",
  "MEITAT_OBLIDADA": "Hi ha un factor $2$ pel mig que t'has deixat: radi i diàmetre, semibase i base, semidiagonal i diagonal. Comprova quina de les dues et demanen.",
  "PART_PEL_TOT": "Has donat el tot on et demanaven una part, o al revés. Compta quantes peces iguals hi ha a la figura i mira quantes n'entren a la resposta.",
  "PAS_INTERMEDI_PER_RESPOSTA": "El valor que has triat és correcte, però és un pas intermedi, no el que et demanen. Torna a llegir la pregunta i mira quina magnitud has d'acabar donant: sovint només falta una operació més.",
  "PERIMETRE_PER_AREA": "Has sumat els costats: això és el perímetre, no l'àrea. El perímetre és el que fa la vora i es mesura en cm o m; l'àrea és la superfície de dins i es mesura en cm² o m².",
  "POTENCIA_DE_SUMA": "Aquí els dos nombres es MULTIPLIQUEN dins del parèntesi, no se sumen: la potència és d'un producte, $(a\\cdot b)^n$, no d'una suma, $(a+b)^n$.",
  "SUMA_CATETS_SENSE_QUADRAT": "Has sumat els costats directament. Pitàgores diu que es sumen els seus QUADRATS, i al final es fa l'arrel del resultat.",
  "SUMA_EN_LLOC_RESTA": "Sumar un nombre negatiu és restar-lo.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau."
 },
 "items": [
  {
   "id": "333a",
   "ex": 333,
   "ap": "a",
   "bloc": "arees_poli",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula l'àrea d'aquestes figures, segons les dades següents.",
   "enunciat": "Rectangle de $7$ cm de base i $4$ cm d'altura.",
   "opcions": [
    "$11$ cm$^2$",
    "$14$ cm$^2$",
    "$28$ cm$^2$",
    "$22$ cm$^2$"
   ],
   "pistes": [
    "L'àrea del rectangle és base per altura.",
    "$A=7\\cdot 4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgc3VtYXQgJDcrNCQgZW4gbGxvYyBkZSBtdWx0aXBsaWNhci4gSGFzIHN1bWF0IGVscyBjb3N0YXRzIGRpcmVjdGFtZW50LiBQaXTDoGdvcmVzIGRpdSBxdWUgZXMgc3VtZW4gZWxzIHNldXMgUVVBRFJBVFMsIGkgYWwgZmluYWwgZXMgZmEgbCdhcnJlbCBkZWwgcmVzdWx0YXQuIiwgIkhhcyBkaXZpZGl0IHBlciAkMiQuIEVsIG1pZyDDqXMgZGUgbGEgZsOzcm11bGEgZGVsIHRyaWFuZ2xlOyBlbCByZWN0YW5nbGUgbm8gZW4gcG9ydGEuIEhhcyBkaXZpZGl0IG9uIGxhIGbDs3JtdWxhIG11bHRpcGxpY2EgKG8gYWwgcmV2w6lzKS4gRXNjcml1IGxhIGbDs3JtdWxhIHNlbmNlcmEgYWJhbnMgZGUgc3Vic3RpdHVpci1oaSBlbHMgdmFsb3JzLiIsICIiLCAiJDcrNCs3KzQ9MjIkIMOpcyBsYSB2b3JhLCBubyBsYSBzdXBlcmbDrWNpZS4gSGFzIHN1bWF0IGVscyBjb3N0YXRzOiBhaXjDsiDDqXMgZWwgcGVyw61tZXRyZSwgbm8gbCfDoHJlYS4gRWwgcGVyw61tZXRyZSDDqXMgZWwgcXVlIGZhIGxhIHZvcmEgaSBlcyBtZXN1cmEgZW4gY20gbyBtOyBsJ8OgcmVhIMOpcyBsYSBzdXBlcmbDrWNpZSBkZSBkaW5zIGkgZXMgbWVzdXJhIGVuIGNtwrIgbyBtwrIuIl0sICJlcnIiOiBbIlNVTUFfQ0FURVRTX1NFTlNFX1FVQURSQVQiLCAiRk9STVVMQV9JTlZFUlRJREEiLCAiIiwgIlBFUklNRVRSRV9QRVJfQVJFQSJdLCAicmVzIjogWyIkQT1iXFxjZG90IGg9N1xcY2RvdCA0PTI4JCBjbSReMiQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 259 164\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Rectangle de 7 cm per 4 cm.</title><g transform=\"translate(64.6,14.0)\"><polygon points=\"0.0,0.0 180.0,0.0 180.0,102.9 0.0,102.9\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"105.4\" x2=\"0.0\" y2=\"122.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"180.0\" y1=\"105.4\" x2=\"180.0\" y2=\"122.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"118.9\" x2=\"180.0\" y2=\"118.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"114.9\" x2=\"4.0\" y2=\"122.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"176.0\" y1=\"114.9\" x2=\"184.0\" y2=\"122.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-19.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"102.9\" x2=\"-19.5\" y2=\"102.9\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-16.0\" y1=\"0.0\" x2=\"-16.0\" y2=\"102.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"-4.0\" x2=\"-20.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"98.9\" x2=\"-20.0\" y2=\"106.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"90\" y=\"133.2\" text-anchor=\"middle\" class=\"fig-etq\">7 cm</text><text x=\"-36\" y=\"54.8\" text-anchor=\"middle\" class=\"fig-etq\">4 cm</text></g></svg>"
  },
  {
   "id": "333b",
   "ex": 333,
   "ap": "b",
   "bloc": "arees_poli",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula l'àrea d'aquestes figures, segons les dades següents.",
   "enunciat": "Quadrat de $9$ m de costat.",
   "opcions": [
    "$40{,}5$ m$^2$",
    "$36$ m$^2$",
    "$81$ m$^2$",
    "$18$ m$^2$"
   ],
   "pistes": [
    "Un quadrat és un rectangle amb la base i l'altura iguals.",
    "$A=9\\cdot 9=9^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgZGl2aWRpdCBwZXIgJDIkLCBpIGxhIGbDs3JtdWxhIGRlbCBxdWFkcmF0IG5vIGhvIHBvcnRhLiBIYXMgZGl2aWRpdCBvbiBsYSBmw7NybXVsYSBtdWx0aXBsaWNhIChvIGFsIHJldsOpcykuIEVzY3JpdSBsYSBmw7NybXVsYSBzZW5jZXJhIGFiYW5zIGRlIHN1YnN0aXR1aXItaGkgZWxzIHZhbG9ycy4iLCAiJDRcXGNkb3QgOT0zNiQgw6lzIGVsIHBlcsOtbWV0cmUuIEhhcyBzdW1hdCBlbHMgY29zdGF0czogYWl4w7Igw6lzIGVsIHBlcsOtbWV0cmUsIG5vIGwnw6ByZWEuIEVsIHBlcsOtbWV0cmUgw6lzIGVsIHF1ZSBmYSBsYSB2b3JhIGkgZXMgbWVzdXJhIGVuIGNtIG8gbTsgbCfDoHJlYSDDqXMgbGEgc3VwZXJmw61jaWUgZGUgZGlucyBpIGVzIG1lc3VyYSBlbiBjbcKyIG8gbcKyLiIsICIiLCAiSGFzIGNhbGN1bGF0ICQyXFxjZG90IDkkLiBFbCBxdWFkcmF0IGRlbCBjb3N0YXQgw6lzICQ5XFxjZG90IDkkLCBubyAkOSs5JC4gTCdleHBvbmVudCBubyBjb3JyZXNwb24gYSBsYSBkaW1lbnNpw7M6IGxlcyDDoHJlZXMgdmFuIGFsIHF1YWRyYXQgaSBlbHMgdm9sdW1zLCBhbCBjdWIuIENvbXByb3ZhIHRhbWLDqSBsZXMgdW5pdGF0cyBkZWwgcmVzdWx0YXQuIl0sICJlcnIiOiBbIkZPUk1VTEFfSU5WRVJUSURBIiwgIlBFUklNRVRSRV9QRVJfQVJFQSIsICIiLCAiRElNRU5TSU9fRVhQT05FTlRfTUFMIl0sICJyZXMiOiBbIiRBPUxeMj05XjI9ODEkIG0kXjIkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 168 201\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Quadrat de costat 9 m.</title><g transform=\"translate(14.0,14.0)\"><polygon points=\"0.0,0.0 140.0,0.0 140.0,140.0 0.0,140.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"142.5\" x2=\"0.0\" y2=\"159.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"140.0\" y1=\"142.5\" x2=\"140.0\" y2=\"159.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"156.0\" x2=\"140.0\" y2=\"156.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"152.0\" x2=\"4.0\" y2=\"160.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"136.0\" y1=\"152.0\" x2=\"144.0\" y2=\"160.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"70\" y=\"170.4\" text-anchor=\"middle\" class=\"fig-etq\">9 m</text></g></svg>"
  },
  {
   "id": "333c",
   "ex": 333,
   "ap": "c",
   "bloc": "arees_poli",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula l'àrea d'aquestes figures, segons les dades següents.",
   "enunciat": "Romboide de $10$ cm de base i $3$ cm d'altura.",
   "opcions": [
    "$15$ cm$^2$",
    "$13$ cm$^2$",
    "$26$ cm$^2$",
    "$30$ cm$^2$"
   ],
   "pistes": [
    "El romboide es converteix en un rectangle movent el triangle d'un costat a l'altre: l'àrea és base per altura.",
    "L'altura és el segment perpendicular de puntets, no el costat inclinat. $A=10\\cdot 3$."
   ],
   "nota": "L'altura d'un romboide és el segment perpendicular a la base (el de puntets), no el costat inclinat.",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXXDrSBwYXNzYSBhbCBjb250cmFyaSBkZWwgcXVlIMOpcyBoYWJpdHVhbDogaGFzIGRpdmlkaXQgcGVyICQyJCBxdWFuIE5PIHRvY2F2YS4gRWwgbWlnIMOpcyBkZSBsYSBmw7NybXVsYSBkZWwgdHJpYW5nbGU7IGVsIHJvbWJvaWRlLCBjb20gZWwgcmVjdGFuZ2xlLCDDqXMgYmFzZSBwZXIgYWx0dXJhLiBIaSBoYSB1biBmYWN0b3IgJDIkIHBlbCBtaWcgcXVlIHQnaGFzIGRlaXhhdDogcmFkaSBpIGRpw6BtZXRyZSwgc2VtaWJhc2UgaSBiYXNlLCBzZW1pZGlhZ29uYWwgaSBkaWFnb25hbC4gQ29tcHJvdmEgcXVpbmEgZGUgbGVzIGR1ZXMgZXQgZGVtYW5lbi4iLCAiSGFzIHN1bWF0ICQxMCszJCBlbiBsbG9jIGRlIG11bHRpcGxpY2FyLiBIYXMgc3VtYXQgZWxzIGNvc3RhdHMgZGlyZWN0YW1lbnQuIFBpdMOgZ29yZXMgZGl1IHF1ZSBlcyBzdW1lbiBlbHMgc2V1cyBRVUFEUkFUUywgaSBhbCBmaW5hbCBlcyBmYSBsJ2FycmVsIGRlbCByZXN1bHRhdC4iLCAiSGFzIHN1bWF0IGNvc3RhdHMuIEhhcyBzdW1hdCBlbHMgY29zdGF0czogYWl4w7Igw6lzIGVsIHBlcsOtbWV0cmUsIG5vIGwnw6ByZWEuIEVsIHBlcsOtbWV0cmUgw6lzIGVsIHF1ZSBmYSBsYSB2b3JhIGkgZXMgbWVzdXJhIGVuIGNtIG8gbTsgbCfDoHJlYSDDqXMgbGEgc3VwZXJmw61jaWUgZGUgZGlucyBpIGVzIG1lc3VyYSBlbiBjbcKyIG8gbcKyLiIsICIiXSwgImVyciI6IFsiTUVJVEFUX09CTElEQURBIiwgIlNVTUFfQ0FURVRTX1NFTlNFX1FVQURSQVQiLCAiUEVSSU1FVFJFX1BFUl9BUkVBIiwgIiJdLCAicmVzIjogWyIkQT1iXFxjZG90IGg9MTBcXGNkb3QgMz0zMCQgY20kXjIkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 196 116\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Romboide de base 10 cm i altura 3 cm. L'altura es dibuixa com un segment perpendicular a la base, no com el costat inclinat.</title><g transform=\"translate(14.0,14.0)\"><polygon points=\"0.0,55.0 150.0,55.0 167.6,0.0 17.6,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"17.6\" y1=\"0.0\" x2=\"17.6\" y2=\"55.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\"/><path d=\"M 26.6 55.0 L 26.6 46.0 L 17.6 46.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"57.5\" x2=\"0.0\" y2=\"74.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"150.0\" y1=\"57.5\" x2=\"150.0\" y2=\"74.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"71.0\" x2=\"150.0\" y2=\"71.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"67.0\" x2=\"4.0\" y2=\"75.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"146.0\" y1=\"67.0\" x2=\"154.0\" y2=\"75.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"75\" y=\"85.4\" text-anchor=\"middle\" class=\"fig-etq\">10 cm</text><text x=\"37.6\" y=\"30.9\" text-anchor=\"middle\" class=\"fig-etq\">3 cm</text></g></svg>"
  },
  {
   "id": "333d",
   "ex": 333,
   "ap": "d",
   "bloc": "arees_poli",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula l'àrea d'aquestes figures, segons les dades següents.",
   "enunciat": "Rombe de diagonals $8$ cm i $6$ cm.",
   "opcions": [
    "$48$ cm$^2$",
    "$28$ cm$^2$",
    "$14$ cm$^2$",
    "$24$ cm$^2$"
   ],
   "pistes": [
    "L'àrea del rombe és el producte de les diagonals partit per dos.",
    "$A=\\dfrac{8\\cdot 6}{2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyIkOFxcY2RvdCA2PTQ4JDsgbGEgZsOzcm11bGEgZGVsIHJvbWJlIHPDrSBxdWUgcG9ydGEgZWwgbWlnLiBIaSBoYSB1biBmYWN0b3IgJDIkIHBlbCBtaWcgcXVlIHQnaGFzIGRlaXhhdDogcmFkaSBpIGRpw6BtZXRyZSwgc2VtaWJhc2UgaSBiYXNlLCBzZW1pZGlhZ29uYWwgaSBkaWFnb25hbC4gQ29tcHJvdmEgcXVpbmEgZGUgbGVzIGR1ZXMgZXQgZGVtYW5lbi4iLCAiSGFzIGNvbmbDs3MgbGVzIGRpYWdvbmFscyBhbWIgZWxzIGNvc3RhdHMuIEhhcyBzdW1hdCBlbHMgY29zdGF0czogYWl4w7Igw6lzIGVsIHBlcsOtbWV0cmUsIG5vIGwnw6ByZWEuIEVsIHBlcsOtbWV0cmUgw6lzIGVsIHF1ZSBmYSBsYSB2b3JhIGkgZXMgbWVzdXJhIGVuIGNtIG8gbTsgbCfDoHJlYSDDqXMgbGEgc3VwZXJmw61jaWUgZGUgZGlucyBpIGVzIG1lc3VyYSBlbiBjbcKyIG8gbcKyLiIsICJIYXMgc3VtYXQgbGVzIGRpYWdvbmFscy4gSGFzIHN1bWF0IGVscyBjb3N0YXRzIGRpcmVjdGFtZW50LiBQaXTDoGdvcmVzIGRpdSBxdWUgZXMgc3VtZW4gZWxzIHNldXMgUVVBRFJBVFMsIGkgYWwgZmluYWwgZXMgZmEgbCdhcnJlbCBkZWwgcmVzdWx0YXQuIiwgIiJdLCAiZXJyIjogWyJNRUlUQVRfT0JMSURBREEiLCAiUEVSSU1FVFJFX1BFUl9BUkVBIiwgIlNVTUFfQ0FURVRTX1NFTlNFX1FVQURSQVQiLCAiIl0sICJyZXMiOiBbIiRBPVxcZGZyYWN7RFxcY2RvdCBkfXsyfT1cXGRmcmFjezhcXGNkb3QgNn17Mn09XFxkZnJhY3s0OH17Mn09MjQkIGNtJF4yJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 251 191\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Rombe amb les diagonals de 8 cm i 6 cm dibuixades.</title><g transform=\"translate(14.0,14.0)\"><polygon points=\"0.0,63.8 85.0,0.0 170.0,63.8 85.0,127.5\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"63.8\" x2=\"170.0\" y2=\"63.8\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\"/><line x1=\"85.0\" y1=\"0.0\" x2=\"85.0\" y2=\"127.5\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"66.2\" x2=\"0.0\" y2=\"149.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"170.0\" y1=\"66.2\" x2=\"170.0\" y2=\"149.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"145.5\" x2=\"170.0\" y2=\"145.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"141.5\" x2=\"4.0\" y2=\"149.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"166.0\" y1=\"141.5\" x2=\"174.0\" y2=\"149.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"87.5\" y1=\"0.0\" x2=\"191.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"87.5\" y1=\"127.5\" x2=\"191.5\" y2=\"127.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"188.0\" y1=\"0.0\" x2=\"188.0\" y2=\"127.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"184.0\" y1=\"-4.0\" x2=\"192.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"184.0\" y1=\"123.5\" x2=\"192.0\" y2=\"131.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"85\" y=\"159.9\" text-anchor=\"middle\" class=\"fig-etq\">8 cm</text><text x=\"208\" y=\"67.1\" text-anchor=\"middle\" class=\"fig-etq\">6 cm</text></g></svg>"
  },
  {
   "id": "140a",
   "ex": 140,
   "ap": "a",
   "bloc": "arees_poli",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Troba l'àrea d'aquests trapezis isòsceles.",
   "enunciat": "Bases de $3$ cm i $10$ cm, alçada de $6$ cm.",
   "opcions": [
    "$39$ cm$^2$",
    "$78$ cm$^2$",
    "$19$ cm$^2$",
    "$60$ cm$^2$"
   ],
   "pistes": [
    "L'àrea d'un trapezi és $\\dfrac{(B+b)\\cdot h}{2}$, on $B$ i $b$ són les dues bases i $h$ l'alçada.",
    "Calcula $\\dfrac{(3+10)\\cdot6}{2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0IHZhbG9yIG5vIGRpdmlkZWl4IHBlciAkMiQ6IGwnw6ByZWEgZCd1biB0cmFwZXppIMOpcyAkXFxkZnJhY3soQitiKVxcY2RvdCBofXsyfSQsIG5vICQoQitiKVxcY2RvdCBoJCBzZW5jZXIuIiwgIkFxdWVzdCB2YWxvciBzZW1ibGEgZGl2aWRpciBwZXIgJDIkIGR1ZXMgdmVnYWRlczogcmV2aXNhIHF1ZSBoYXMgY2FsY3VsYXQgJCgzKzEwKVxcY2RvdDYkIGFiYW5zIGRlIGRpdmlkaXIgcGVyICQyJCwgbm8gJCgzKzEwKSQgZGl2aWRpdCBwZXIgJDIkIGkgZGVzcHLDqXMgbXVsdGlwbGljYXQgcGVyICQ2JCBkaXZpZGl0IHBlciAkMiQuIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGRlIG11bHRpcGxpY2FyIG5vbcOpcyBsYSBiYXNlIGdyYW4gcGVyIGwnYWzDp2FkYSAoJDEwXFxjZG90NiQpLCBzZW5zZSB0ZW5pciBlbiBjb21wdGUgbGEgYmFzZSBwZXRpdGEuIl0sICJlcnIiOiBbIiIsICJBUlJFTF9GQUNUT1JfT0JMSURBVCIsICJESVZJU0lPX1JFUEVUSURBIiwgIlNVTUFfRU5fTExPQ19SRVNUQSJdLCAicmVzIjogWyIkQT1cXGRmcmFjeygzKzEwKVxcY2RvdDZ9ezJ9PVxcZGZyYWN7Nzh9ezJ9PTM5JCBjbSReMiQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 218 208\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Trapezi isòsceles de bases 10 cm i 3 cm, alçada 6 cm.</title><g transform=\"translate(14.0,47.0)\"><polygon points=\"0.0,114.0 190.0,114.0 123.5,0.0 66.5,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"66.5\" y1=\"0.0\" x2=\"66.5\" y2=\"114.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><path d=\"M 75.5 114.0 L 75.5 105.0 L 66.5 105.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"116.5\" x2=\"0.0\" y2=\"133.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"190.0\" y1=\"116.5\" x2=\"190.0\" y2=\"133.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"130.0\" x2=\"190.0\" y2=\"130.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"126.0\" x2=\"4.0\" y2=\"134.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"186.0\" y1=\"126.0\" x2=\"194.0\" y2=\"134.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"66.5\" y1=\"-2.5\" x2=\"66.5\" y2=\"-19.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"123.5\" y1=\"-2.5\" x2=\"123.5\" y2=\"-19.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"66.5\" y1=\"-16.0\" x2=\"123.5\" y2=\"-16.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"62.5\" y1=\"-12.0\" x2=\"70.5\" y2=\"-20.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"119.5\" y1=\"-12.0\" x2=\"127.5\" y2=\"-20.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"95\" y=\"144.4\" text-anchor=\"middle\" class=\"fig-etq\">10 cm</text><text x=\"95\" y=\"-23.6\" text-anchor=\"middle\" class=\"fig-etq\">3 cm</text><text x=\"86.5\" y=\"60.4\" text-anchor=\"middle\" class=\"fig-etq\">6 cm</text></g></svg>"
  },
  {
   "id": "140b",
   "ex": 140,
   "ap": "b",
   "bloc": "arees_poli",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Troba l'àrea d'aquests trapezis isòsceles.",
   "enunciat": "Bases de $16$ m i $24$ m, alçada de $\\sqrt{164}$ m.",
   "opcions": [
    "$\\sqrt{164}$ m$^2$",
    "$164$ m$^2$",
    "$40\\sqrt{41}\\approx256{,}12$ m$^2$",
    "$20\\sqrt{41}\\approx128{,}06$ m$^2$"
   ],
   "pistes": [
    "L'àrea d'un trapezi és $\\dfrac{(B+b)\\cdot h}{2}$.",
    "Calcula $\\dfrac{(16+24)\\cdot\\sqrt{164}}{2}$; simplifica $\\sqrt{164}=2\\sqrt{41}$ abans de multiplicar si vols."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3RhIMOpcyBub23DqXMgbCdhbMOnYWRhLCBubyBsJ8OgcmVhOiBlbmNhcmEgZmFsdGEgbXVsdGlwbGljYXIgcGVyIGxhIHN1bWEgZGUgbGVzIGJhc2VzIGkgZGl2aWRpciBwZXIgJDIkLiIsICJBcXVlc3QgdmFsb3IgY29uZm9uICRcXHNxcnR7MTY0fSQgKGwnYWzDp2FkYSkgYW1iICQxNjQkIChlbCBub21icmUgc290YSBsJ2FycmVsKSwgaSBubyBmYSBzZXJ2aXIgbGVzIGJhc2VzIHBlciByZXM6IHJldmlzYSBsYSBmw7NybXVsYSBkZSBsJ8OgcmVhIGRlbCB0cmFwZXppLiIsICIiLCAiQXF1ZXN0IHZhbG9yIGRpdmlkZWl4IHBlciAkMiQgdW5hIHZlZ2FkYSBkZSBtw6lzOiBsJ8OgcmVhIMOpcyAkXFxkZnJhY3soMTYrMjQpXFxjZG90XFxzcXJ0ezE2NH19ezJ9JCwgaSAkXFxkZnJhY3s0MH17Mn09MjAkIGphIMOpcyBlbCByZXN1bHRhdCBjb3JyZWN0ZSBkZSBsYSBwcmltZXJhIGRpdmlzacOzLCBubyBjYWwgdG9ybmFyLWxhIGEgZGl2aWRpci4iXSwgImVyciI6IFsiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiLCAiQ0FURVRfTUFMX0lERU5USUZJQ0FUIiwgIiIsICJBUlJFTF9GQUNUT1JfT0JMSURBVCJdLCAicmVzIjogWyIkQT1cXGRmcmFjeygxNisyNClcXGNkb3RcXHNxcnR7MTY0fX17Mn09XFxkZnJhY3s0MFxcY2RvdDJcXHNxcnR7NDF9fXsyfT00MFxcc3FydHs0MX1cXGFwcHJveDI1NnssfTEyJCBtJF4yJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 218 196\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Trapezi isòsceles de bases 24 m i 16 m, alçada √164 m.</title><g transform=\"translate(14.0,47.0)\"><polygon points=\"0.0,101.4 190.0,101.4 158.3,0.0 31.7,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"31.7\" y1=\"0.0\" x2=\"31.7\" y2=\"101.4\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><path d=\"M 40.7 101.4 L 40.7 92.4 L 31.7 92.4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"103.9\" x2=\"0.0\" y2=\"120.9\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"190.0\" y1=\"103.9\" x2=\"190.0\" y2=\"120.9\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"117.4\" x2=\"190.0\" y2=\"117.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"113.4\" x2=\"4.0\" y2=\"121.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"186.0\" y1=\"113.4\" x2=\"194.0\" y2=\"121.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"31.7\" y1=\"-2.5\" x2=\"31.7\" y2=\"-19.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"158.3\" y1=\"-2.5\" x2=\"158.3\" y2=\"-19.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"31.7\" y1=\"-16.0\" x2=\"158.3\" y2=\"-16.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"27.7\" y1=\"-12.0\" x2=\"35.7\" y2=\"-20.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"154.3\" y1=\"-12.0\" x2=\"162.3\" y2=\"-20.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"95\" y=\"131.7\" text-anchor=\"middle\" class=\"fig-etq\">24 m</text><text x=\"95\" y=\"-23.6\" text-anchor=\"middle\" class=\"fig-etq\">16 m</text><text x=\"57.7\" y=\"54.1\" text-anchor=\"middle\" class=\"fig-etq\">√164 m</text></g></svg>"
  },
  {
   "id": "140c",
   "ex": 140,
   "ap": "c",
   "bloc": "arees_poli",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Troba l'àrea d'aquests trapezis isòsceles.",
   "enunciat": "Bases de $3{,}5$ m i $4{,}13$ m, alçada de $7$ m.",
   "opcions": [
    "$29{,}75$ m$^2$",
    "$53{,}41$ m$^2$",
    "$5{,}345$ m$^2$",
    "$26{,}705$ m$^2$"
   ],
   "pistes": [
    "L'àrea d'un trapezi és $\\dfrac{(B+b)\\cdot h}{2}$.",
    "Calcula $\\dfrac{(3{,}5+4{,}13)\\cdot7}{2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igc2VtYmxhIGZldCBzZXJ2aXIgbm9tw6lzIHVuYSBkZSBsZXMgZHVlcyBiYXNlcyAobGEgZ3JhbikgYW1iIGwnYWzDp2FkYSwgaSBkZXNwcsOpcyBkaXZpZGl0IHBlciAkMiQ6IGNhbCBzdW1hciBsZXMgRFVFUyBiYXNlcyBhYmFucyBkZSBtdWx0aXBsaWNhciBwZXIgbCdhbMOnYWRhLiIsICJBcXVlc3QgdmFsb3Igbm8gZGl2aWRlaXggcGVyICQyJDogbCfDoHJlYSBkJ3VuIHRyYXBlemkgw6lzICRcXGRmcmFjeyhCK2IpXFxjZG90IGh9ezJ9JC4iLCAiQXF1ZXN0IHZhbG9yIHNlbWJsYSBsYSBzdW1hIGRlIGxlcyBiYXNlcyBkaXZpZGlkYSBwZXIgbCdhbMOnYWRhLCBlbiBsbG9jIGRlIG11bHRpcGxpY2FkYTogcmV2aXNhIGxhIGbDs3JtdWxhICRcXGRmcmFjeyhCK2IpXFxjZG90IGh9ezJ9JC4iLCAiIl0sICJlcnIiOiBbIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiQVJSRUxfRkFDVE9SX09CTElEQVQiLCAiRk9STVVMQV9JTlZFUlRJREEiLCAiIl0sICJyZXMiOiBbIiRBPVxcZGZyYWN7KDN7LH01KzR7LH0xMylcXGNkb3Q3fXsyfT1cXGRmcmFjezUzeyx9NDF9ezJ9PTI2eyx9NzA1JCBtJF4yJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 218 244\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Trapezi isòsceles de bases 4,13 m i 3,5 m, alçada 7 m.</title><g transform=\"translate(14.0,47.0)\"><polygon points=\"0.0,150.0 190.0,150.0 175.5,0.0 14.5,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"14.5\" y1=\"0.0\" x2=\"14.5\" y2=\"150.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><path d=\"M 23.5 150.0 L 23.5 141.0 L 14.5 141.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"152.5\" x2=\"0.0\" y2=\"169.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"190.0\" y1=\"152.5\" x2=\"190.0\" y2=\"169.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"166.0\" x2=\"190.0\" y2=\"166.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"162.0\" x2=\"4.0\" y2=\"170.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"186.0\" y1=\"162.0\" x2=\"194.0\" y2=\"170.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"14.5\" y1=\"-2.5\" x2=\"14.5\" y2=\"-19.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"175.5\" y1=\"-2.5\" x2=\"175.5\" y2=\"-19.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"14.5\" y1=\"-16.0\" x2=\"175.5\" y2=\"-16.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"10.5\" y1=\"-12.0\" x2=\"18.5\" y2=\"-20.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"171.5\" y1=\"-12.0\" x2=\"179.5\" y2=\"-20.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"95\" y=\"180.4\" text-anchor=\"middle\" class=\"fig-etq\">4,13 m</text><text x=\"95\" y=\"-23.6\" text-anchor=\"middle\" class=\"fig-etq\">3,5 m</text><text x=\"29.5\" y=\"78.4\" text-anchor=\"middle\" class=\"fig-etq\">7 m</text></g></svg>"
  },
  {
   "id": "140d",
   "ex": 140,
   "ap": "d",
   "bloc": "arees_poli",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Troba l'àrea d'aquests trapezis isòsceles.",
   "enunciat": "Bases de $4$ m i $14$ m, alçada de $3$ m.",
   "opcions": [
    "$54$ m$^2$",
    "$21$ m$^2$",
    "$27$ m$^2$",
    "$42$ m$^2$"
   ],
   "pistes": [
    "L'àrea d'un trapezi és $\\dfrac{(B+b)\\cdot h}{2}$.",
    "Calcula $\\dfrac{(4+14)\\cdot3}{2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igbm8gZGl2aWRlaXggcGVyICQyJDogbCfDoHJlYSBkJ3VuIHRyYXBlemkgw6lzICRcXGRmcmFjeyhCK2IpXFxjZG90IGh9ezJ9JC4iLCAiQXF1ZXN0IHZhbG9yIG5vIGNvaW5jaWRlaXggYW1iICRcXGRmcmFjeyg0KzE0KVxcY2RvdDN9ezJ9JDogdG9ybmEgYSBjb21wcm92YXIgbGEgc3VtYSBkZSBsZXMgYmFzZXMgYWJhbnMgZGUgbXVsdGlwbGljYXIuIiwgIiIsICJBcXVlc3QgdmFsb3Igc3VydCBkZSBtdWx0aXBsaWNhciBub23DqXMgbGEgYmFzZSBncmFuIHBlciBsJ2Fsw6dhZGEgKCQxNFxcY2RvdDMkKSwgc2Vuc2UgdGVuaXIgZW4gY29tcHRlIGxhIGJhc2UgcGV0aXRhIG5pIGRpdmlkaXIgcGVyICQyJC4iXSwgImVyciI6IFsiQVJSRUxfRkFDVE9SX09CTElEQVQiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiLCAiU1VNQV9FTl9MTE9DX1JFU1RBIl0sICJyZXMiOiBbIiRBPVxcZGZyYWN7KDQrMTQpXFxjZG90M317Mn09XFxkZnJhY3s1NH17Mn09MjckIG0kXjIkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 218 139\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Trapezi isòsceles de bases 14 m i 4 m, alçada 3 m.</title><g transform=\"translate(14.0,47.0)\"><polygon points=\"0.0,45.0 190.0,45.0 122.1,0.0 67.9,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"67.9\" y1=\"0.0\" x2=\"67.9\" y2=\"45.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><path d=\"M 76.9 45.0 L 76.9 36.0 L 67.9 36.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"47.5\" x2=\"0.0\" y2=\"64.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"190.0\" y1=\"47.5\" x2=\"190.0\" y2=\"64.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"61.0\" x2=\"190.0\" y2=\"61.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"57.0\" x2=\"4.0\" y2=\"65.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"186.0\" y1=\"57.0\" x2=\"194.0\" y2=\"65.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"67.9\" y1=\"-2.5\" x2=\"67.9\" y2=\"-19.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"122.1\" y1=\"-2.5\" x2=\"122.1\" y2=\"-19.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"67.9\" y1=\"-16.0\" x2=\"122.1\" y2=\"-16.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"63.9\" y1=\"-12.0\" x2=\"71.9\" y2=\"-20.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"118.1\" y1=\"-12.0\" x2=\"126.1\" y2=\"-20.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"95\" y=\"75.4\" text-anchor=\"middle\" class=\"fig-etq\">14 m</text><text x=\"95\" y=\"-23.6\" text-anchor=\"middle\" class=\"fig-etq\">4 m</text><text x=\"82.9\" y=\"25.9\" text-anchor=\"middle\" class=\"fig-etq\">3 m</text></g></svg>"
  },
  {
   "id": "141a",
   "ex": 141,
   "ap": "a",
   "bloc": "arees_poli",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula l'àrea de:",
   "enunciat": "Un hexàgon regular de costat $2$ cm.",
   "opcions": [
    "$12$ cm$^2$",
    "$24\\sqrt3\\approx41{,}57$ cm$^2$",
    "$2\\sqrt3\\approx3{,}46$ cm$^2$",
    "$6\\sqrt3\\approx10{,}39$ cm$^2$"
   ],
   "pistes": [
    "Calcula primer l'apotema: $a=\\dfrac{L\\sqrt3}{2}=\\sqrt3$ cm (amb $L=2$).",
    "L'àrea d'un polígon regular és $\\dfrac{\\text{perímetre}\\cdot\\text{apotema}}{2}$, amb perímetre $=6\\cdot2=12$ cm."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igbm8gaW5jbG91IGVsIGZhY3RvciAkXFxzcXJ0MyQgcXVlIGRvbmEgbCdhcG90ZW1hOiBsJ8OgcmVhIGQndW4gaGV4w6Bnb24gcmVndWxhciDDqXMgJFxcZGZyYWN7XFx0ZXh0e3BlcsOtbWV0cmV9XFxjZG90XFx0ZXh0e2Fwb3RlbWF9fXsyfSQsIGkgbCdhcG90ZW1hIGFxdcOtIHZhbCAkXFxzcXJ0MyQsIG5vICQxJC4iLCAiQXF1ZXN0IHZhbG9yIG5vIGRpdmlkZWl4IHBlciAkMiQ6IHJldmlzYSBsYSBmw7NybXVsYSAkXFxkZnJhY3tcXHRleHR7cGVyw61tZXRyZX1cXGNkb3RcXHRleHR7YXBvdGVtYX19ezJ9JC4iLCAiQXF1ZXN0IHZhbG9yIMOpcyBsJ2Fwb3RlbWEsIG5vIGwnw6ByZWE6IGVuY2FyYSBmYWx0YSBtdWx0aXBsaWNhciBwZWwgcGVyw61tZXRyZSBpIGRpdmlkaXIgcGVyICQyJC4iLCAiIl0sICJlcnIiOiBbIkFSUkVMX0ZBQ1RPUl9PQkxJREFUIiwgIlBPVEVOQ0lBX0RFX1NVTUEiLCAiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiLCAiIl0sICJyZXMiOiBbIkFwb3RlbWE6ICRhPVxcZGZyYWN7Mlxcc3FydDN9ezJ9PVxcc3FydDMkIGNtIiwgIlBlcsOtbWV0cmU6ICQ2XFxjZG90Mj0xMiQgY20iLCAiw4ByZWE6ICRcXGRmcmFjezEyXFxjZG90XFxzcXJ0M317Mn09Nlxcc3FydDNcXGFwcHJveDEweyx9MzkkIGNtJF4yJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 208 217\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Hexàgon regular, costat 2 cm.</title><g transform=\"translate(104.0,91.9)\"><polygon points=\"45.0,77.9 -45.0,77.9 -90.0,0.0 -45.0,-77.9 45.0,-77.9 90.0,-0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"45.0\" y1=\"80.4\" x2=\"45.0\" y2=\"97.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-45.0\" y1=\"80.4\" x2=\"-45.0\" y2=\"97.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"45.0\" y1=\"93.9\" x2=\"-45.0\" y2=\"93.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"49.0\" y1=\"89.9\" x2=\"41.0\" y2=\"97.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-41.0\" y1=\"89.9\" x2=\"-49.0\" y2=\"97.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"0\" y=\"108.3\" text-anchor=\"middle\" class=\"fig-etq\">2 cm</text></g></svg>"
  },
  {
   "id": "141b",
   "ex": 141,
   "ap": "b",
   "bloc": "arees_poli",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula l'àrea de:",
   "enunciat": "Un octàgon regular de perímetre $48$ cm.",
   "opcions": [
    "$6$ cm",
    "$144(1+\\sqrt2)\\approx347{,}64$ cm$^2$",
    "$288$ cm$^2$",
    "$72(1+\\sqrt2)\\approx173{,}82$ cm$^2$"
   ],
   "pistes": [
    "Calcula primer el costat: $\\dfrac{48}{8}=6$ cm.",
    "L'apotema d'un octàgon regular de costat $L$ és $\\dfrac{L}{2}(1+\\sqrt2)$; aplica després $\\dfrac{\\text{perímetre}\\cdot\\text{apotema}}{2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3Qgw6lzIGVsIGNvc3RhdCBkZSBsJ29jdMOgZ29uICgkNDg6OCQpLCBubyBsJ8OgcmVhOiBlbmNhcmEgY2FsIGNhbGN1bGFyIGwnYXBvdGVtYSBpIGFwbGljYXIgbGEgZsOzcm11bGEgZGUgbCfDoHJlYS4iLCAiQXF1ZXN0IHZhbG9yIG5vIGRpdmlkZWl4IHBlciAkMiQ6IHJldmlzYSBsYSBmw7NybXVsYSAkXFxkZnJhY3tcXHRleHR7cGVyw61tZXRyZX1cXGNkb3RcXHRleHR7YXBvdGVtYX19ezJ9JC4iLCAiQXF1ZXN0IHZhbG9yIHNlbWJsYSBmZXQgJFxcZGZyYWN7NDhcXGNkb3QxMn17Mn0kIGFtYiB1bmEgYXBvdGVtYSBpbnZlbnRhZGEgZGUgJDEyJDogbCdhcG90ZW1hIGQndW4gb2N0w6Bnb24gcmVndWxhciBkZSBjb3N0YXQgJDYkIGNtIMOpcyAkMygxK1xcc3FydDIpXFxhcHByb3g3eyx9MjQkIGNtLCBubyAkMTIkIGNtLiIsICIiXSwgImVyciI6IFsiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiLCAiUE9URU5DSUFfREVfU1VNQSIsICJBUlJFTF9GQUNUT1JfT0JMSURBVCIsICIiXSwgInJlcyI6IFsiQ29zdGF0OiAkXFxkZnJhY3s0OH17OH09NiQgY20iLCAiQXBvdGVtYTogJFxcZGZyYWN7Nn17Mn0oMStcXHNxcnQyKT0zKDErXFxzcXJ0MilcXGFwcHJveDd7LH0yNCQgY20iLCAiw4ByZWE6ICRcXGRmcmFjezQ4XFxjZG90MygxK1xcc3FydDIpfXsyfT03MigxK1xcc3FydDIpXFxhcHByb3gxNzN7LH04MiQgY20kXjIkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 195 195\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Octàgon regular de 8 costats.</title><g transform=\"translate(97.1,97.1)\"><polygon points=\"34.4,83.1 -34.4,83.1 -83.1,34.4 -83.1,-34.4 -34.4,-83.1 34.4,-83.1 83.1,-34.4 83.1,34.4\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/></g></svg>"
  },
  {
   "id": "142",
   "ex": 142,
   "ap": "",
   "bloc": "arees_poli",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Un hexàgon regular té el costat de $6$ cm. Troba la longitud de la diagonal que passa pel centre (la que uneix dos vèrtexs oposats).",
   "opcions": [
    "$6\\sqrt3\\approx10{,}39$ cm",
    "$12$ cm",
    "$3$ cm",
    "$6$ cm"
   ],
   "pistes": [
    "En un hexàgon regular, el centre equidista de tots els vèrtexs una distància igual al costat (l'hexàgon es descompon en 6 triangles equilàters).",
    "La diagonal que passa pel centre uneix dos vèrtexs oposats, i és per tant el doble del costat: $2\\cdot6$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3QgdmFsb3IgY29ycmVzcG9uIGEgdW5hIGFsdHJhIGRpYWdvbmFsIGRlIGwnaGV4w6Bnb24gKGxhIHF1ZSB1bmVpeCBkb3MgdsOocnRleHMgbm8gb3Bvc2F0cyksIG5vIGEgbGEgcXVlIHBhc3NhIHBlbCBjZW50cmUgdW5pbnQgZG9zIHbDqHJ0ZXhzIG9wb3NhdHMuIiwgIiIsICJBcXVlc3QgdmFsb3Igw6lzIGxhIG1laXRhdCBkZWwgY29zdGF0LCBubyBlbCBkb2JsZTogbGEgZGlhZ29uYWwgcXVlIHBhc3NhIHBlbCBjZW50cmUgZCd1biBoZXjDoGdvbiByZWd1bGFyIHZhbCAkMlxcY2RvdCBMJCwgbm8gJFxcZGZyYWN7TH17Mn0kLiIsICJBcXVlc3Qgw6lzIGVsIGNvc3RhdCBkZSBsJ2hleMOgZ29uLCBubyBsYSBkaWFnb25hbCBxdWUgcGFzc2EgcGVsIGNlbnRyZTogZW4gdW4gaGV4w6Bnb24gcmVndWxhciwgYXF1ZXN0YSBkaWFnb25hbCB2YWwgZWwgRE9CTEUgZGVsIGNvc3RhdC4iXSwgImVyciI6IFsiQ0FURVRfTUFMX0lERU5USUZJQ0FUIiwgIiIsICJJTlZFUlRJREEiLCAiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiXSwgInJlcyI6IFsiRW4gdW4gaGV4w6Bnb24gcmVndWxhciwgbGEgZGlzdMOgbmNpYSBkZWwgY2VudHJlIGEgY2FkYSB2w6hydGV4IGNvaW5jaWRlaXggYW1iIGVsIGNvc3RhdCAoJDYkIGNtKSwgcGVycXXDqCBlbCBwb2zDrWdvbiBlcyBkZXNjb21wb24gZW4gJDYkIHRyaWFuZ2xlcyBlcXVpbMOgdGVycyIsICJMYSBkaWFnb25hbCBxdWUgcGFzc2EgcGVsIGNlbnRyZSDDqXMgJDJcXGNkb3Q2PTEyJCBjbSJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 208 217\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Hexàgon regular, costat 6 cm, amb la diagonal que passa pel centre marcada.</title><g transform=\"translate(104.0,91.9)\"><polygon points=\"45.0,77.9 -45.0,77.9 -90.0,0.0 -45.0,-77.9 45.0,-77.9 90.0,-0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"45.0\" y1=\"80.4\" x2=\"45.0\" y2=\"97.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-45.0\" y1=\"80.4\" x2=\"-45.0\" y2=\"97.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"45.0\" y1=\"93.9\" x2=\"-45.0\" y2=\"93.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"49.0\" y1=\"89.9\" x2=\"41.0\" y2=\"97.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-41.0\" y1=\"89.9\" x2=\"-49.0\" y2=\"97.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line x1=\"45.0\" y1=\"77.9\" x2=\"-45.0\" y2=\"-77.9\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2.5\"/><text x=\"0\" y=\"108.3\" text-anchor=\"middle\" class=\"fig-etq\">6 cm</text></g></svg>"
  },
  {
   "id": "143a",
   "ex": 143,
   "ap": "a",
   "bloc": "arees_poli",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Determina l'àrea dels triangles descrits a continuació.",
   "enunciat": "Un quadrat de costat $5$ cm queda dividit en dos triangles iguals per una diagonal. Quina és l'àrea d'un d'aquests triangles?",
   "opcions": [
    "$5$ cm$^2$",
    "$25$ cm$^2$",
    "$50$ cm$^2$",
    "$12{,}5$ cm$^2$"
   ],
   "pistes": [
    "Una diagonal divideix un quadrat en dos triangles iguals: cada triangle és la meitat de l'àrea total del quadrat.",
    "Àrea del quadrat: $5^2=25$ cm$^2$; divideix-la per $2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igbm8gZWxldmEgZWwgY29zdGF0IGFsIHF1YWRyYXQ6IGwnw6ByZWEgZGVsIHF1YWRyYXQgw6lzICQ1XjI9MjUkIGNtJF4yJCwgaSBlbCB0cmlhbmdsZSBuJ8OpcyBsYSBtZWl0YXQuIiwgIkFxdWVzdGEgw6lzIGwnw6ByZWEgZGVsIFFVQURSQVQgc2VuY2VyLCBubyBkJ3VuIGRlbHMgZG9zIHRyaWFuZ2xlcyAobGEgbWVpdGF0KTogZW5jYXJhIGZhbHRhIGRpdmlkaXIgcGVyICQyJC4iLCAiQXF1ZXN0IHZhbG9yIGR1cGxpY2EgbCfDoHJlYSBkZWwgcXVhZHJhdCBlbiBsbG9jIGRlIGRpdmlkaXItbGEgcGVyICQyJDogZWwgdHJpYW5nbGUgw6lzIGxhIE1FSVRBVCBkZWwgcXVhZHJhdCwgbm8gZWwgZG9ibGUuIiwgIiJdLCAiZXJyIjogWyJBUlJFTF9GQUNUT1JfT0JMSURBVCIsICJQQVJUX1BFTF9UT1QiLCAiUE9URU5DSUFfREVfU1VNQSIsICIiXSwgInJlcyI6IFsiw4ByZWEgZGVsIHF1YWRyYXQ6ICQ1XjI9MjUkIGNtJF4yJCIsICLDgHJlYSBkZWwgdHJpYW5nbGU6ICRcXGRmcmFjezI1fXsyfT0xMnssfTUkIGNtJF4yJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 148 181\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Quadrat de costat 5 cm amb la diagonal marcada.</title><g transform=\"translate(14.0,14.0)\"><polygon points=\"0.0,0.0 120.0,0.0 120.0,120.0 0.0,120.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"120.0\" x2=\"120.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"122.5\" x2=\"0.0\" y2=\"139.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"120.0\" y1=\"122.5\" x2=\"120.0\" y2=\"139.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"136.0\" x2=\"120.0\" y2=\"136.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"132.0\" x2=\"4.0\" y2=\"140.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"116.0\" y1=\"132.0\" x2=\"124.0\" y2=\"140.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"60\" y=\"150.4\" text-anchor=\"middle\" class=\"fig-etq\">5 cm</text></g></svg>"
  },
  {
   "id": "143b",
   "ex": 143,
   "ap": "b",
   "bloc": "arees_poli",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Determina l'àrea dels triangles descrits a continuació.",
   "enunciat": "Un pentàgon regular de costat $4$ cm i apotema $a\\approx2{,}75$ cm queda dividit en cinc triangles iguals unint el centre amb cada vèrtex. Quina és l'àrea d'un d'aquests triangles?",
   "opcions": [
    "$27{,}5$ cm$^2$",
    "$1{,}375$ cm$^2$",
    "$11$ cm$^2$",
    "$5{,}5$ cm$^2$"
   ],
   "pistes": [
    "Cada triangle té com a base el costat del pentàgon i com a alçada l'apotema.",
    "Àrea del triangle: $\\dfrac{4\\cdot2{,}75}{2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3RhIMOpcyBsJ8OgcmVhIGRlbCBQRU5Uw4BHT04gc2VuY2VyIChlbHMgJDUkIHRyaWFuZ2xlcyBqdW50cyksIG5vIGQndW4gc29sIHRyaWFuZ2xlOiBkaXZpZGVpeCBwZXIgJDUkLiIsICJBcXVlc3QgdmFsb3Igc2VtYmxhIGRpdmlkaXIgcGVyICQyJCBkdWVzIHZlZ2FkZXM6IGNvbXByb3ZhIHF1ZSBoYXMgY2FsY3VsYXQgJDRcXGNkb3Qyeyx9NzUkIGFiYW5zIGRlIGRpdmlkaXIgcGVyICQyJCwgbm8gJDJcXGNkb3Qxeyx9Mzc1JC4iLCAiQXF1ZXN0IHZhbG9yIG5vIGRpdmlkZWl4IHBlciAkMiQ6IGwnw6ByZWEgZCd1biBkZWxzIHRyaWFuZ2xlcyDDqXMgJFxcZGZyYWN7XFx0ZXh0e2Nvc3RhdH1cXGNkb3RcXHRleHR7YXBvdGVtYX19ezJ9JCwgbm8gZWwgcHJvZHVjdGUgc2VuY2VyLiIsICIiXSwgImVyciI6IFsiUEFSVF9QRUxfVE9UIiwgIkRJVklTSU9fUkVQRVRJREEiLCAiQVJSRUxfRkFDVE9SX09CTElEQVQiLCAiIl0sICJyZXMiOiBbIiRBPVxcZGZyYWN7NFxcY2RvdDJ7LH03NX17Mn09XFxkZnJhY3sxMX17Mn09NXssfTUkIGNtJF4yJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 200 224\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Pentàgon regular, costat 4 cm, dividit en 5 triangles unint el centre amb cada vèrtex, un d'ells ombrejat.</title><g transform=\"translate(99.6,104.0)\"><polygon points=\"52.9,72.8 -52.9,72.8 -85.6,-27.8 -0.0,-90.0 85.6,-27.8\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0\" y1=\"0\" x2=\"52.9007\" y2=\"72.8115\" stroke=\"currentColor\" stroke-width=\"0.75\" stroke-opacity=\"0.45\"/><line x1=\"0\" y1=\"0\" x2=\"-52.9007\" y2=\"72.8115\" stroke=\"currentColor\" stroke-width=\"0.75\" stroke-opacity=\"0.45\"/><line x1=\"0\" y1=\"0\" x2=\"-85.5951\" y2=\"-27.8115\" stroke=\"currentColor\" stroke-width=\"0.75\" stroke-opacity=\"0.45\"/><line x1=\"0\" y1=\"0\" x2=\"-1.65327e-14\" y2=\"-90\" stroke=\"currentColor\" stroke-width=\"0.75\" stroke-opacity=\"0.45\"/><line x1=\"0\" y1=\"0\" x2=\"85.5951\" y2=\"-27.8115\" stroke=\"currentColor\" stroke-width=\"0.75\" stroke-opacity=\"0.45\"/><polygon points=\"0.0,0.0 52.9,72.8 -52.9,72.8\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"52.9\" y1=\"75.3\" x2=\"52.9\" y2=\"92.3\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-52.9\" y1=\"75.3\" x2=\"-52.9\" y2=\"92.3\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"52.9\" y1=\"88.8\" x2=\"-52.9\" y2=\"88.8\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"56.9\" y1=\"84.8\" x2=\"48.9\" y2=\"92.8\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-48.9\" y1=\"84.8\" x2=\"-56.9\" y2=\"92.8\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"0\" y=\"103.2\" text-anchor=\"middle\" class=\"fig-etq\">4 cm</text></g></svg>"
  },
  {
   "id": "143c",
   "ex": 143,
   "ap": "c",
   "bloc": "arees_poli",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Determina l'àrea dels triangles descrits a continuació.",
   "enunciat": "Un hexàgon regular de costat $3$ cm queda dividit en sis triangles equilàters iguals unint el centre amb cada vèrtex. Quina és l'àrea d'un d'aquests triangles?",
   "opcions": [
    "$\\dfrac{27\\sqrt3}{2}\\approx23{,}38$ cm$^2$",
    "$\\dfrac{9\\sqrt3}{4}\\approx3{,}90$ cm$^2$",
    "$4{,}5$ cm$^2$",
    "$9\\sqrt3\\approx15{,}59$ cm$^2$"
   ],
   "pistes": [
    "Els sis triangles en què el centre divideix un hexàgon regular són EQUILÀTERS de costat igual al de l'hexàgon.",
    "Àrea d'un triangle equilàter de costat $L$: $\\dfrac{L^2\\sqrt3}{4}$, amb $L=3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3RhIMOpcyBsJ8OgcmVhIGRlIGwnSEVYw4BHT04gc2VuY2VyIChlbHMgJDYkIHRyaWFuZ2xlcyBqdW50cyksIG5vIGQndW4gc29sIHRyaWFuZ2xlOiBkaXZpZGVpeC1sYSBwZXIgJDYkLiIsICIiLCAiQXF1ZXN0IHZhbG9yIG5vIGluY2xvdSBlbCBmYWN0b3IgJFxcc3FydDMkOiBlbiB1biB0cmlhbmdsZSBlcXVpbMOgdGVyLCBsJ8OgcmVhIG5vIMOpcyAkXFxkZnJhY3tMXjJ9ezJ9JC4iLCAiQXF1ZXN0IHZhbG9yIG5vIGRpdmlkZWl4IHBlciAkNCQ6IGNhZGEgdHJpYW5nbGUgZXF1aWzDoHRlciBkZSBjb3N0YXQgJEwkIHTDqSDDoHJlYSAkXFxkZnJhY3tMXjJcXHNxcnQzfXs0fSQsIG5vICRMXjJcXHNxcnQzJC4iXSwgImVyciI6IFsiUEFSVF9QRUxfVE9UIiwgIiIsICJQT1RFTkNJQV9ERV9TVU1BIiwgIkFSUkVMX0ZBQ1RPUl9PQkxJREFUIl0sICJyZXMiOiBbIiRBPVxcZGZyYWN7M14yXFxzcXJ0M317NH09XFxkZnJhY3s5XFxzcXJ0M317NH1cXGFwcHJveDN7LH05MCQgY20kXjIkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 208 217\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Hexàgon regular, costat 3 cm, dividit en 6 triangles unint el centre amb cada vèrtex, un d'ells ombrejat.</title><g transform=\"translate(104.0,91.9)\"><polygon points=\"45.0,77.9 -45.0,77.9 -90.0,0.0 -45.0,-77.9 45.0,-77.9 90.0,-0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0\" y1=\"0\" x2=\"45\" y2=\"77.9423\" stroke=\"currentColor\" stroke-width=\"0.75\" stroke-opacity=\"0.45\"/><line x1=\"0\" y1=\"0\" x2=\"-45\" y2=\"77.9423\" stroke=\"currentColor\" stroke-width=\"0.75\" stroke-opacity=\"0.45\"/><line x1=\"0\" y1=\"0\" x2=\"-90\" y2=\"1.10218e-14\" stroke=\"currentColor\" stroke-width=\"0.75\" stroke-opacity=\"0.45\"/><line x1=\"0\" y1=\"0\" x2=\"-45\" y2=\"-77.9423\" stroke=\"currentColor\" stroke-width=\"0.75\" stroke-opacity=\"0.45\"/><line x1=\"0\" y1=\"0\" x2=\"45\" y2=\"-77.9423\" stroke=\"currentColor\" stroke-width=\"0.75\" stroke-opacity=\"0.45\"/><line x1=\"0\" y1=\"0\" x2=\"90\" y2=\"-2.20436e-14\" stroke=\"currentColor\" stroke-width=\"0.75\" stroke-opacity=\"0.45\"/><polygon points=\"0.0,0.0 45.0,77.9 -45.0,77.9\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"45.0\" y1=\"80.4\" x2=\"45.0\" y2=\"97.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-45.0\" y1=\"80.4\" x2=\"-45.0\" y2=\"97.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"45.0\" y1=\"93.9\" x2=\"-45.0\" y2=\"93.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"49.0\" y1=\"89.9\" x2=\"41.0\" y2=\"97.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-41.0\" y1=\"89.9\" x2=\"-49.0\" y2=\"97.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"0\" y=\"108.3\" text-anchor=\"middle\" class=\"fig-etq\">3 cm</text></g></svg>"
  },
  {
   "id": "143d",
   "ex": 143,
   "ap": "d",
   "bloc": "arees_poli",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Determina l'àrea dels triangles descrits a continuació.",
   "enunciat": "Un octàgon regular de costat $3$ cm i apotema $3{,}62$ cm queda dividit en vuit triangles iguals unint el centre amb cada vèrtex. Quina és l'àrea d'un d'aquests triangles?",
   "opcions": [
    "$2{,}715$ cm$^2$",
    "$10{,}86$ cm$^2$",
    "$43{,}44$ cm$^2$",
    "$5{,}43$ cm$^2$"
   ],
   "pistes": [
    "Cada triangle té com a base el costat de l'octàgon i com a alçada l'apotema.",
    "Àrea del triangle: $\\dfrac{3\\cdot3{,}62}{2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igc2VtYmxhIGRpdmlkaXIgcGVyICQyJCBkdWVzIHZlZ2FkZXM6IGNvbXByb3ZhIHF1ZSBoYXMgY2FsY3VsYXQgJDNcXGNkb3Qzeyx9NjIkIGFiYW5zIGRlIGRpdmlkaXIgcGVyICQyJC4iLCAiQXF1ZXN0IHZhbG9yIG5vIGRpdmlkZWl4IHBlciAkMiQ6IGwnw6ByZWEgZCd1biBkZWxzIHRyaWFuZ2xlcyDDqXMgJFxcZGZyYWN7XFx0ZXh0e2Nvc3RhdH1cXGNkb3RcXHRleHR7YXBvdGVtYX19ezJ9JCwgbm8gZWwgcHJvZHVjdGUgc2VuY2VyLiIsICJBcXVlc3RhIMOpcyBsJ8OgcmVhIGRlIGwnT0NUw4BHT04gc2VuY2VyIChlbHMgJDgkIHRyaWFuZ2xlcyBqdW50cyksIG5vIGQndW4gc29sIHRyaWFuZ2xlOiBkaXZpZGVpeC1sYSBwZXIgJDgkLiIsICIiXSwgImVyciI6IFsiRElWSVNJT19SRVBFVElEQSIsICJBUlJFTF9GQUNUT1JfT0JMSURBVCIsICJQQVJUX1BFTF9UT1QiLCAiIl0sICJyZXMiOiBbIiRBPVxcZGZyYWN7M1xcY2RvdDN7LH02Mn17Mn09XFxkZnJhY3sxMHssfTg2fXsyfT01eyx9NDMkIGNtJF4yJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 195 228\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Octàgon regular, costat 3 cm, dividit en 8 triangles unint el centre amb cada vèrtex, un d'ells ombrejat.</title><g transform=\"translate(97.1,97.1)\"><polygon points=\"34.4,83.1 -34.4,83.1 -83.1,34.4 -83.1,-34.4 -34.4,-83.1 34.4,-83.1 83.1,-34.4 83.1,34.4\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0\" y1=\"0\" x2=\"34.4415\" y2=\"83.1492\" stroke=\"currentColor\" stroke-width=\"0.75\" stroke-opacity=\"0.45\"/><line x1=\"0\" y1=\"0\" x2=\"-34.4415\" y2=\"83.1492\" stroke=\"currentColor\" stroke-width=\"0.75\" stroke-opacity=\"0.45\"/><line x1=\"0\" y1=\"0\" x2=\"-83.1492\" y2=\"34.4415\" stroke=\"currentColor\" stroke-width=\"0.75\" stroke-opacity=\"0.45\"/><line x1=\"0\" y1=\"0\" x2=\"-83.1492\" y2=\"-34.4415\" stroke=\"currentColor\" stroke-width=\"0.75\" stroke-opacity=\"0.45\"/><line x1=\"0\" y1=\"0\" x2=\"-34.4415\" y2=\"-83.1492\" stroke=\"currentColor\" stroke-width=\"0.75\" stroke-opacity=\"0.45\"/><line x1=\"0\" y1=\"0\" x2=\"34.4415\" y2=\"-83.1492\" stroke=\"currentColor\" stroke-width=\"0.75\" stroke-opacity=\"0.45\"/><line x1=\"0\" y1=\"0\" x2=\"83.1492\" y2=\"-34.4415\" stroke=\"currentColor\" stroke-width=\"0.75\" stroke-opacity=\"0.45\"/><line x1=\"0\" y1=\"0\" x2=\"83.1492\" y2=\"34.4415\" stroke=\"currentColor\" stroke-width=\"0.75\" stroke-opacity=\"0.45\"/><polygon points=\"0.0,0.0 34.4,83.1 -34.4,83.1\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"34.4\" y1=\"85.6\" x2=\"34.4\" y2=\"102.6\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-34.4\" y1=\"85.6\" x2=\"-34.4\" y2=\"102.6\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"34.4\" y1=\"99.1\" x2=\"-34.4\" y2=\"99.1\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"38.4\" y1=\"95.1\" x2=\"30.4\" y2=\"103.1\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-30.4\" y1=\"95.1\" x2=\"-38.4\" y2=\"103.1\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"0\" y=\"113.5\" text-anchor=\"middle\" class=\"fig-etq\">3 cm</text></g></svg>"
  },
  {
   "id": "144a",
   "ex": 144,
   "ap": "a",
   "bloc": "arees_poli",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Calcula l'àrea de les figures següents.",
   "enunciat": "Una figura en forma de mitja lluna és la diferència entre un semicercle de $12$ cm de diàmetre i un semicercle interior de $6$ cm de diàmetre. Quina és la seva àrea?",
   "opcions": [
    "$\\dfrac{27\\pi}{2}\\approx42{,}41$ cm$^2$",
    "$18\\pi\\approx56{,}55$ cm$^2$",
    "$45\\pi\\approx141{,}37$ cm$^2$",
    "$4{,}5\\pi\\approx14{,}14$ cm$^2$"
   ],
   "pistes": [
    "L'àrea d'un semicercle de radi $r$ és $\\dfrac{\\pi r^2}{2}$.",
    "Resta l'àrea del semicercle petit (radi $3$ cm) de la del gran (radi $6$ cm)."
   ],
   "nota": "La figura de partida no deixa clar el diàmetre de l'arc interior; aquí es pren $6$ cm, que és la meitat de l'exterior.",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0IHZhbG9yIG5vIGRpdmlkZWl4IHBlciAkMiQ6IGNhbCBjYWxjdWxhciBsJ8OgcmVhIGRlIENBREFTQ1VOIGRlbHMgZG9zIHNlbWljZXJjbGVzIChqYSBkaXZpZGlkYSBwZXIgJDIkIHJlc3BlY3RlIGRlbCBjZXJjbGUgY29tcGxldCksIG5vIGxhIGRpZmVyw6huY2lhIGRlbHMgY2VyY2xlcyBjb21wbGV0cy4iLCAiQXF1ZXN0IHZhbG9yIFNVTUEgbGVzIMOgcmVlcyBkZWxzIGRvcyBzZW1pY2VyY2xlcyBlbiBsbG9jIGRlIHJlc3Rhci1sZXM6IGxhIG1pdGphIGxsdW5hIMOpcyBsYSBkaWZlcsOobmNpYSBlbnRyZSBlbCBzZW1pY2VyY2xlIGdyYW4gaSBlbCBwZXRpdCwgbm8gbGEgc3VtYS4iLCAiQXF1ZXN0IHZhbG9yIG5vIGZhIHNlcnZpciBlbHMgcmFkaXMgY29ycmVjdGVzOiBjb21wcm92YSBxdWUgaGFzIHVzYXQgcmFkaSAkNiQgY20gKHNlbWljZXJjbGUgZ3JhbiwgZGnDoG1ldHJlICQxMiQpIGkgcmFkaSAkMyQgY20gKHNlbWljZXJjbGUgcGV0aXQsIGRpw6BtZXRyZSAkNiQpLCBubyBlbHMgZGnDoG1ldHJlcyBkaXJlY3RhbWVudC4iXSwgImVyciI6IFsiIiwgIkZSQUNDSU9fREVfQ0VSQ0xFX01BTCIsICJTVU1BX0VOX0xMT0NfUkVTVEEiLCAiQVJSRUxfRkFDVE9SX09CTElEQVQiXSwgInJlcyI6IFsiU2VtaWNlcmNsZSBncmFuOiAkXFxkZnJhY3tcXHBpXFxjZG90Nl4yfXsyfT0xOFxccGkkIGNtJF4yJCIsICJTZW1pY2VyY2xlIHBldGl0OiAkXFxkZnJhY3tcXHBpXFxjZG90M14yfXsyfT00eyx9NVxccGkkIGNtJF4yJCIsICJEaWZlcsOobmNpYTogJDE4XFxwaS00eyx9NVxccGk9MTN7LH01XFxwaT1cXGRmcmFjezI3XFxwaX17Mn1cXGFwcHJveDQyeyx9NDEkIGNtJF4yJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 188 143\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Mitja lluna: semicercle exterior de diàmetre 12 cm, semicercle interior de diàmetre 6 cm.</title><g transform=\"translate(94.0,113.2)\"><path d=\"M-80,0 A80,80 0 0,1 80,0 L40,0 A40,40 0 0,0 -40,0 Z\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"/><line class=\"fig-cota\" x1=\"-40.0\" y1=\"-2.5\" x2=\"-40.0\" y2=\"-19.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"40.0\" y1=\"-2.5\" x2=\"40.0\" y2=\"-19.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-40.0\" y1=\"-16.0\" x2=\"40.0\" y2=\"-16.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-44.0\" y1=\"-12.0\" x2=\"-36.0\" y2=\"-20.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"36.0\" y1=\"-12.0\" x2=\"44.0\" y2=\"-20.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-80.0\" y1=\"-2.5\" x2=\"-80.0\" y2=\"-47.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"80.0\" y1=\"-2.5\" x2=\"80.0\" y2=\"-47.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-80.0\" y1=\"-44.0\" x2=\"80.0\" y2=\"-44.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-84.0\" y1=\"-40.0\" x2=\"-76.0\" y2=\"-48.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"76.0\" y1=\"-40.0\" x2=\"84.0\" y2=\"-48.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-crida\" x1=\"0.0\" y1=\"-16.0\" x2=\"0.0\" y2=\"1.8\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/><text x=\"0\" y=\"12.9\" text-anchor=\"middle\" class=\"fig-etq petita\">diàm. int. 6 cm</text><line class=\"fig-crida\" x1=\"0.0\" y1=\"-44.0\" x2=\"0.0\" y2=\"-85.8\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/><text x=\"0\" y=\"-91.1\" text-anchor=\"middle\" class=\"fig-etq petita\">diàm. ext. 12 cm</text></g></svg>"
  },
  {
   "id": "144b",
   "ex": 144,
   "ap": "b",
   "bloc": "arees_poli",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Calcula l'àrea de les figures següents.",
   "enunciat": "D'un cercle de $4$ cm de diàmetre es retalla un sector de $90^\\circ$ (una quarta part, tipus \"Pac-Man\"). Quina és l'àrea de la part que queda?",
   "opcions": [
    "$2\\pi\\approx6{,}28$ cm$^2$",
    "$4\\pi\\approx12{,}57$ cm$^2$",
    "$3\\pi\\approx9{,}42$ cm$^2$",
    "$\\pi\\approx3{,}14$ cm$^2$"
   ],
   "pistes": [
    "El cercle complet, de radi $2$ cm, té àrea $\\pi\\cdot2^2=4\\pi$ cm$^2$.",
    "Un sector de $90^\\circ$ és $\\dfrac{90}{360}=\\dfrac14$ del cercle: la figura és les tres quartes parts restants."
   ],
   "nota": "La figura de partida no deixa clar quin angle abasta el sector retallat; aquí es pren un quart de volta ($90^\\circ$), que és el que ja diu l'enunciat.",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3QgdmFsb3IgY29ycmVzcG9uIGEgbGEgbWVpdGF0IGRlbCBjZXJjbGUsIG5vIGEgbGVzIHRyZXMgcXVhcnRlcyBwYXJ0cyBxdWUgcXVlZGVuIGRlc3Byw6lzIGRlIHJldGFsbGFyIHVuIHNlY3RvciBkZSAkOTBeXFxjaXJjJCAodW4gcXVhcnQgZGUgdm9sdGEpLiIsICJBcXVlc3RhIMOpcyBsJ8OgcmVhIGRlbCBjZXJjbGUgY29tcGxldCwgc2Vuc2UgcmV0YWxsYXIgZWwgc2VjdG9yOiByZWNvcmRhIHJlc3RhciBsYSBwb3JjacOzIHJldGFsbGFkYS4iLCAiIiwgIkFxdWVzdCB2YWxvciDDqXMgZWwgc2VjdG9yIFJFVEFMTEFUIChsYSBxdWFydGEgcGFydCksIG5vIGVsIHF1ZSBxdWVkYSBkZSBsYSBmaWd1cmE6IGxhIGZpZ3VyYSDDqXMgbGEgcmVzdGEgZGVsIGNlcmNsZSB1biBjb3AgdHJldCBhcXVlc3Qgc2VjdG9yLiJdLCAiZXJyIjogWyJGUkFDQ0lPX0RFX0NFUkNMRV9NQUwiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiLCAiRlJBQ0NJT19ERV9DRVJDTEVfTUFMIl0sICJyZXMiOiBbIkNlcmNsZSBjb21wbGV0OiAkXFxwaVxcY2RvdDJeMj00XFxwaSQgY20kXjIkIiwgIsOAcmVhIGZpbmFsICh0cmVzIHF1YXJ0cyBkZWwgY2VyY2xlKTogJFxcZGZyYWMzNFxcY2RvdDRcXHBpPTNcXHBpXFxhcHByb3g5eyx9NDIkIGNtJF4yJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 188 188\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Cercle de radi 2 cm, amb un sector de 90° retallat (la resta, 270°, queda marcada).</title><g transform=\"translate(94.0,94.0)\"><circle cx=\"0\" cy=\"0\" r=\"80\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M0,0 L4.89859e-15,-80 A80,80 0 1,1 -80,9.79717e-15 Z\" fill=\"var(--fig-marca, #B3453C)\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"0.0\" y2=\"-80.0\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><text x=\"15\" y=\"-37.1\" text-anchor=\"middle\" class=\"fig-etq petita\">2 cm</text></g></svg>"
  },
  {
   "id": "145c",
   "ex": 145,
   "ap": "c",
   "bloc": "arees_poli",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Determina l'àrea de la figura descrita.",
   "enunciat": "Un quadrat de costat $5$ cm té un forat circular de $2$ cm de diàmetre. Quina és l'àrea que queda un cop tret el forat?",
   "opcions": [
    "$25-2\\pi\\approx18{,}72$ cm$^2$",
    "$25-\\pi\\approx21{,}86$ cm$^2$",
    "$25-4\\pi\\approx12{,}43$ cm$^2$",
    "$23$ cm$^2$"
   ],
   "pistes": [
    "L'àrea de la figura és l'àrea del quadrat menys l'àrea del cercle del forat.",
    "El radi del forat és la meitat del diàmetre: $\\dfrac{2}{2}=1$ cm; àrea del quadrat $5^2=25$ cm$^2$."
   ],
   "nota": "D'aquest exercici només hi ha l'apartat c: els altres tres eren figures esglaonades en forma de L i de T que no es poden descriure sense el dibuix.",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgZmV0IHNlcnZpciBlbCBkacOgbWV0cmUgKCQyJCBjbSkgY29tIHNpIGZvcyBlbCByYWRpIGEgbCdob3JhIGRlIGNhbGN1bGFyIGwnw6ByZWEgZGVsIGZvcmF0OiBlbCByYWRpIMOpcyBsYSBNRUlUQVQgZGVsIGRpw6BtZXRyZSwgw6lzIGEgZGlyLCAkMSQgY20sIGkgbCfDoHJlYSBkZWwgY2VyY2xlIMOpcyAkXFxwaVxcY2RvdDFeMj1cXHBpJCwgbm8gJFxccGlcXGNkb3QyJC4iLCAiIiwgIkhhcyBmZXQgc2VydmlyIGVsIGRpw6BtZXRyZSAoJDIkIGNtKSBkaXJlY3RhbWVudCBjb20gYSByYWRpIGFsIHF1YWRyYXQ6IGwnw6ByZWEgZGVsIGNlcmNsZSDDqXMgJFxccGlcXGNkb3Qgcl4yJCBhbWIgJHI9MSQgY20gKGxhIG1laXRhdCBkZWwgZGnDoG1ldHJlKSwgw6lzIGEgZGlyLCAkXFxwaSQsIG5vICRcXHBpXFxjZG90Ml4yJC4iLCAiQXF1ZXN0IHZhbG9yIHNlbWJsYSByZXN0YXIgZWwgZGnDoG1ldHJlIGRpcmVjdGFtZW50ICgkNV4yLTIkKSBlbiBsbG9jIGRlIHJlc3RhciBsJ8OgcmVhIGRlbCBjZXJjbGU6IGNhbCBjYWxjdWxhciBwcmltZXIgbCfDoHJlYSBkZWwgZm9yYXQgY2lyY3VsYXIgKCRcXHBpXFxjZG90IHJeMiQpLCBubyByZXN0YXItbmUgbm9tw6lzIGxhIGxvbmdpdHVkIGRlbCBkacOgbWV0cmUuIl0sICJlcnIiOiBbIkNBVEVUX01BTF9JREVOVElGSUNBVCIsICIiLCAiQ0FURVRfTUFMX0lERU5USUZJQ0FUIiwgIkFSUkVMX0ZBQ1RPUl9PQkxJREFUIl0sICJyZXMiOiBbIsOAcmVhIGRlbCBxdWFkcmF0OiAkNV4yPTI1JCBjbSReMiQiLCAiUmFkaSBkZWwgZm9yYXQ6ICRcXGRmcmFjezJ9ezJ9PTEkIGNtOyDDoHJlYSBkZWwgZm9yYXQ6ICRcXHBpXFxjZG90MV4yPVxccGkkIGNtJF4yJCIsICLDgHJlYSBkZSBsYSBmaWd1cmE6ICQyNS1cXHBpXFxhcHByb3gyMXssfTg2JCBjbSReMiQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 249 231\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Quadrat de 5 cm per 5 cm amb un forat circular de diàmetre 2 cm.</title><g transform=\"translate(64.6,14.0)\"><path d=\"M0,0 h170 v170 h-170 Z M85,85 m-34,0 a34,34 0 1,0 68,0 a34,34 0 1,0 -68,0\" fill-rule=\"evenodd\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"51.0\" y1=\"85.0\" x2=\"119.0\" y2=\"85.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"172.5\" x2=\"0.0\" y2=\"189.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"170.0\" y1=\"172.5\" x2=\"170.0\" y2=\"189.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"186.0\" x2=\"170.0\" y2=\"186.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"182.0\" x2=\"4.0\" y2=\"190.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"166.0\" y1=\"182.0\" x2=\"174.0\" y2=\"190.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-19.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"170.0\" x2=\"-19.5\" y2=\"170.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-16.0\" y1=\"0.0\" x2=\"-16.0\" y2=\"170.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"-4.0\" x2=\"-20.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"166.0\" x2=\"-20.0\" y2=\"174.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"85\" y=\"200.4\" text-anchor=\"middle\" class=\"fig-etq\">5 cm</text><text x=\"-36\" y=\"88.4\" text-anchor=\"middle\" class=\"fig-etq\">5 cm</text><line class=\"fig-crida\" x1=\"85.0\" y1=\"85.0\" x2=\"85.0\" y2=\"126.8\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/><text x=\"85\" y=\"137.9\" text-anchor=\"middle\" class=\"fig-etq petita\">diàmetre 2 cm</text></g></svg>"
  }
 ]
};
