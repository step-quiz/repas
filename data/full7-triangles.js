/* Generat per tools/build.py — no editeu aquest fitxer a mà. */
window.FULL = {
 "full": 7,
 "titol": "Full 7 — Teorema de Pitàgores. Àrees",
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
  "ARREL_OBLIDADA": "T'has quedat amb el quadrat (o el cub) de la incògnita. De $x^2=k$ encara falta l'arrel per arribar a $x$: comprova sempre quina de les dues quantitats et demanen.",
  "CATET_HIPOTENUSA_CONFOSOS": "Has intercanviat un catet amb la hipotenusa. La hipotenusa és sempre el costat més llarg i va sola a un costat de la igualtat.",
  "CATET_MAL_IDENTIFICAT": "El costat que busques no és el que has triat. Fes un dibuix ràpid i marca quin costat coneixes i quin has d'aïllar abans de calcular.",
  "COSTATS_MAL_TRIATS": "El criteri és el bo, però l'has aplicat als costats que no toquen: torna a mirar quins dos costats has de comparar amb quin.",
  "ES_POT_DETERMINAR": "Has dit que no es pot saber, però amb les dades de l'enunciat n'hi ha prou. Abans de descartar una pregunta, mira si algun teorema o criteri et permet respondre-la amb el que ja tens.",
  "HIPOTENUSA_MAL_IDENTIFICADA": "La hipotenusa és sempre el costat MÉS LLARG del triangle rectangle, i és la que va sola a un costat de la igualtat.",
  "INVERTIDA": "Has invertit la fracció. Simplificar no canvia quin terme és a dalt i quin a baix.",
  "MEITAT_OBLIDADA": "Hi ha un factor $2$ pel mig que t'has deixat: radi i diàmetre, semibase i base, semidiagonal i diagonal. Comprova quina de les dues et demanen.",
  "PARITAT_EXPONENT": "Revisa la paritat de l'exponent: amb exponent parell, una base negativa dóna resultat positiu; amb exponent senar, el resultat es queda negatiu.",
  "PART_PEL_TOT": "Has donat el tot on et demanaven una part, o al revés. Compta quantes peces iguals hi ha a la figura i mira quantes n'entren a la resposta.",
  "PAS_INTERMEDI_PER_RESPOSTA": "El valor que has triat és correcte, però és un pas intermedi, no el que et demanen. Torna a llegir la pregunta i mira quina magnitud has d'acabar donant: sovint només falta una operació més.",
  "POTENCIA_DE_SUMA": "Aquí els dos nombres es MULTIPLIQUEN dins del parèntesi, no se sumen: la potència és d'un producte, $(a\\cdot b)^n$, no d'una suma, $(a+b)^n$.",
  "PROGRESSIO_INVENTADA": "El terme s'ha de calcular seguint estrictament la regla que defineix la successió (el terme general o la relació de recurrència), no un patró aproximat o inventat.",
  "SIMPLIFICACIO_INCOMPLETA": "Encara es pot simplificar més: busca el m.c.d. del numerador i el denominador i divideix-los pel m.c.d. d'un sol cop.",
  "SUMA_CATETS_SENSE_QUADRAT": "Has sumat els costats directament. Pitàgores diu que es sumen els seus QUADRATS, i al final es fa l'arrel del resultat.",
  "SUMA_EN_LLOC_RESTA": "Sumar un nombre negatiu és restar-lo.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau.",
  "VEREDICTE_INVERTIT": "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del correcte: torna a comprovar la condició amb els valors concrets de l'enunciat."
 },
 "items": [
  {
   "id": "357a",
   "ex": 357,
   "ap": "a",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la hipotenusa d'aquest triangle rectangle a partir dels dos catets. Recorda el teorema de Pitàgores: $h^2=c_1^2+c_2^2$.",
   "enunciat": "Catets de $6$ cm i $8$ cm.",
   "opcions": [
    "$14$ cm",
    "$\\sqrt{28}\\approx5{,}29$ cm",
    "$100$ cm",
    "$10$ cm"
   ],
   "pistes": [
    "Eleva cada catet al quadrat i suma: $6^2+8^2$.",
    "$36+64=100$. Falta l'arrel."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgc3VtYXQgZWxzIGNvc3RhdHMgZGlyZWN0YW1lbnQuIFBpdMOgZ29yZXMgZGl1IHF1ZSBlcyBzdW1lbiBlbHMgc2V1cyBRVUFEUkFUUywgaSBhbCBmaW5hbCBlcyBmYSBsJ2FycmVsIGRlbCByZXN1bHRhdC4iLCAiSGFzIHJlc3RhdCBlbHMgcXVhZHJhdHMsIHF1ZSDDqXMgZWwgcXVlIGVzIGZhIHBlciB0cm9iYXIgdW4gQ0FURVQuIEFxdcOtIGVzIGJ1c2NhIGxhIGhpcG90ZW51c2E6IHNlIHN1bWVuLiBIYXMgaW50ZXJjYW52aWF0IHVuIGNhdGV0IGFtYiBsYSBoaXBvdGVudXNhLiBMYSBoaXBvdGVudXNhIMOpcyBzZW1wcmUgZWwgY29zdGF0IG3DqXMgbGxhcmcgaSB2YSBzb2xhIGEgdW4gY29zdGF0IGRlIGxhIGlndWFsdGF0LiIsICIkMTAwJCDDqXMgJGheMiQuIFQnaGFzIHF1ZWRhdCBhbWIgZWwgcXVhZHJhdCAobyBlbCBjdWIpIGRlIGxhIGluY8OyZ25pdGEuIERlICR4XjI9ayQgZW5jYXJhIGZhbHRhIGwnYXJyZWwgcGVyIGFycmliYXIgYSAkeCQ6IGNvbXByb3ZhIHNlbXByZSBxdWluYSBkZSBsZXMgZHVlcyBxdWFudGl0YXRzIGV0IGRlbWFuZW4uIiwgIiJdLCAiZXJyIjogWyJTVU1BX0NBVEVUU19TRU5TRV9RVUFEUkFUIiwgIkNBVEVUX0hJUE9URU5VU0FfQ09ORk9TT1MiLCAiQVJSRUxfT0JMSURBREEiLCAiIl0sICJyZXMiOiBbIiRoXjI9Nl4yKzheMj0zNis2ND0xMDAkIiwgIiRoPVxcc3FydHsxMDB9PTEwJCBjbSJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 249 231\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Triangle rectangle de catets 6 cm i 8 cm.</title><g transform=\"translate(64.6,14.0)\"><polygon points=\"0.0,170.0 170.0,170.0 0.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M 12.0 170.0 L 12.0 158.0 L 0.0 158.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"172.5\" x2=\"0.0\" y2=\"189.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"170.0\" y1=\"172.5\" x2=\"170.0\" y2=\"189.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"186.0\" x2=\"170.0\" y2=\"186.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"182.0\" x2=\"4.0\" y2=\"190.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"166.0\" y1=\"182.0\" x2=\"174.0\" y2=\"190.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-19.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"170.0\" x2=\"-19.5\" y2=\"170.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-16.0\" y1=\"0.0\" x2=\"-16.0\" y2=\"170.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"-4.0\" x2=\"-20.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"166.0\" x2=\"-20.0\" y2=\"174.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line x1=\"170.0\" y1=\"170.0\" x2=\"0.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2.5\"/><text x=\"85\" y=\"200.4\" text-anchor=\"middle\" class=\"fig-etq\">6 cm</text><text x=\"-36\" y=\"88.4\" text-anchor=\"middle\" class=\"fig-etq\">8 cm</text><text x=\"92.8\" y=\"80.6\" text-anchor=\"middle\" class=\"fig-etq\">h</text></g></svg>"
  },
  {
   "id": "357b",
   "ex": 357,
   "ap": "b",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la hipotenusa d'aquest triangle rectangle a partir dels dos catets. Recorda el teorema de Pitàgores: $h^2=c_1^2+c_2^2$.",
   "enunciat": "Catets de $3$ m i $4$ m.",
   "opcions": [
    "$\\sqrt{7}\\approx2{,}65$ m",
    "$25$ m",
    "$5$ m",
    "$7$ m"
   ],
   "pistes": [
    "Eleva cada catet al quadrat i suma: $3^2+4^2$.",
    "$9+16=25$. Falta l'arrel."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgcmVzdGF0IGVscyBxdWFkcmF0cywgcXVlIMOpcyBlbCBxdWUgZXMgZmEgcGVyIHRyb2JhciB1biBDQVRFVC4gQXF1w60gZXMgYnVzY2EgbGEgaGlwb3RlbnVzYTogc2Ugc3VtZW4uIEhhcyBpbnRlcmNhbnZpYXQgdW4gY2F0ZXQgYW1iIGxhIGhpcG90ZW51c2EuIExhIGhpcG90ZW51c2Egw6lzIHNlbXByZSBlbCBjb3N0YXQgbcOpcyBsbGFyZyBpIHZhIHNvbGEgYSB1biBjb3N0YXQgZGUgbGEgaWd1YWx0YXQuIiwgIiQyNSQgw6lzICRoXjIkLiBUJ2hhcyBxdWVkYXQgYW1iIGVsIHF1YWRyYXQgKG8gZWwgY3ViKSBkZSBsYSBpbmPDsmduaXRhLiBEZSAkeF4yPWskIGVuY2FyYSBmYWx0YSBsJ2FycmVsIHBlciBhcnJpYmFyIGEgJHgkOiBjb21wcm92YSBzZW1wcmUgcXVpbmEgZGUgbGVzIGR1ZXMgcXVhbnRpdGF0cyBldCBkZW1hbmVuLiIsICIiLCAiSGFzIHN1bWF0IGVscyBjb3N0YXRzIGRpcmVjdGFtZW50LiBQaXTDoGdvcmVzIGRpdSBxdWUgZXMgc3VtZW4gZWxzIHNldXMgUVVBRFJBVFMsIGkgYWwgZmluYWwgZXMgZmEgbCdhcnJlbCBkZWwgcmVzdWx0YXQuIl0sICJlcnIiOiBbIkNBVEVUX0hJUE9URU5VU0FfQ09ORk9TT1MiLCAiQVJSRUxfT0JMSURBREEiLCAiIiwgIlNVTUFfQ0FURVRTX1NFTlNFX1FVQURSQVQiXSwgInJlcyI6IFsiJGheMj0zXjIrNF4yPTkrMTY9MjUkIiwgIiRoPVxcc3FydHsyNX09NSQgbSJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 240 231\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Triangle rectangle de catets 3 m i 4 m.</title><g transform=\"translate(56.0,14.0)\"><polygon points=\"0.0,170.0 170.0,170.0 0.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M 12.0 170.0 L 12.0 158.0 L 0.0 158.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"172.5\" x2=\"0.0\" y2=\"189.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"170.0\" y1=\"172.5\" x2=\"170.0\" y2=\"189.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"186.0\" x2=\"170.0\" y2=\"186.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"182.0\" x2=\"4.0\" y2=\"190.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"166.0\" y1=\"182.0\" x2=\"174.0\" y2=\"190.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-19.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"170.0\" x2=\"-19.5\" y2=\"170.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-16.0\" y1=\"0.0\" x2=\"-16.0\" y2=\"170.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"-4.0\" x2=\"-20.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"166.0\" x2=\"-20.0\" y2=\"174.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line x1=\"170.0\" y1=\"170.0\" x2=\"0.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2.5\"/><text x=\"85\" y=\"200.4\" text-anchor=\"middle\" class=\"fig-etq\">3 m</text><text x=\"-31\" y=\"88.4\" text-anchor=\"middle\" class=\"fig-etq\">4 m</text><text x=\"92.8\" y=\"80.6\" text-anchor=\"middle\" class=\"fig-etq\">h</text></g></svg>"
  },
  {
   "id": "119",
   "ex": 119,
   "ap": "",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "Un triangle isòsceles té l'angle desigual de $50^\\circ$. Quant mesuren els angles iguals?",
   "opcions": [
    "$65^\\circ$ cadascun",
    "$115^\\circ$ cadascun",
    "$130^\\circ$ cadascun",
    "$25^\\circ$ cadascun"
   ],
   "pistes": [
    "La suma dels tres angles d'un triangle sempre val $180^\\circ$.",
    "Resta l'angle desigual dels $180^\\circ$ i reparteix el que quedi entre els dos angles iguals."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0IHZhbG9yIG5vIHN1cnQgZGUgJDE4MF5cXGNpcmMtNTBeXFxjaXJjJCByZXBhcnRpdCBlbnRyZSBkb3M6IHJldmlzYSBsYSByZXN0YSBhYmFucyBkZSBkaXZpZGlyLWxhIHBlciAkMiQuIiwgIkFxdWVzdCDDqXMgZWwgcXVlIHN1bWVuIGVudHJlIHRvdHMgZG9zICgkMTgwXlxcY2lyYy01MF5cXGNpcmMkKSwgbm8gZWwgcXVlIHZhbCBjYWRhc2N1bjogZW5jYXJhIGNhbCByZXBhcnRpci1obyBlbnRyZSBlbHMgZG9zIGFuZ2xlcyBpZ3VhbHMuIiwgIlNlbWJsYSBxdWUgaGFzIHJlcGFydGl0IGVscyAkNTBeXFxjaXJjJCBkZSBsJ2FuZ2xlIGRlc2lndWFsIGVudHJlIGRvcywgZW4gbGxvYyBkZSByZXBhcnRpciBlbCBxdWUgcXVlZGEgZGVscyAkMTgwXlxcY2lyYyQgdG90YWxzIHVuIGNvcCB0cmV0IGwnYW5nbGUgZGVzaWd1YWwuIl0sICJlcnIiOiBbIiIsICJTVU1BX0FOR0xFU19NQUwiLCAiUkVQQVJUSU1FTlRfQU5HTEVTX01BTCIsICJTVU1BX0FOR0xFU19NQUwiXSwgInJlcyI6IFsiJDE4MF5cXGNpcmMtNTBeXFxjaXJjPTEzMF5cXGNpcmMkIGVudHJlIGVscyBkb3MgYW5nbGVzIGlndWFscyIsICIkXFxkZnJhY3sxMzBeXFxjaXJjfXsyfT02NV5cXGNpcmMkIGNhZGFzY3VuIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 222 234\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Triangle isòsceles amb l'angle de dalt (entre els costats iguals) de 50° marcat.</title><polygon points=\"26,208.283 196,208.283 111,26\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M101.702,45.9388 A22,22 0 0,0 120.298,45.9388\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><text x=\"111\" y=\"64\" text-anchor=\"middle\" class=\"fig-etq petita\">50°</text></svg>"
  },
  {
   "id": "120a",
   "ex": 120,
   "ap": "a",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Analitza, en cada cas, les mesures i esbrina amb quines es pot formar un triangle.",
   "enunciat": "$a=8$ cm, $b=7$ cm, $c=1$ cm",
   "opcions": [
    "Sí, perquè cap costat és més llarg que la suma dels altres dos",
    "Sí que es pot formar un triangle",
    "No es pot saber sense conèixer els angles",
    "No es pot formar cap triangle"
   ],
   "pistes": [
    "La condició per formar un triangle és que la suma dels dos costats més curts sigui ESTRICTAMENT més gran que el costat més llarg.",
    "Compara $7+1$ amb $8$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyIkOCQgU8ONIHF1ZSDDqXMgaWd1YWwgKG5vIG1lbm9yKSBhIGxhIHN1bWEgZGVscyBhbHRyZXMgZG9zLCAkNysxPTgkOiBsYSBjb25kaWNpw7MgaGEgZGUgY29tcGxpci1zZSBlbiBlc3RyaWN0ZSwgaSBhcXXDrSBqdXN0IGZhbGxhIHBlciBpZ3VhbHRhdC4iLCAiRWxzIGRvcyBjb3N0YXRzIG3DqXMgY3VydHMgc3VtZW4gZXhhY3RhbWVudCAkNysxPTgkLCBlbCBtYXRlaXggcXVlIGVsIGNvc3RhdCBtw6lzIGxsYXJnOiBsYSBkZXNpZ3VhbHRhdCB0cmlhbmd1bGFyIGV4aWdlaXggcXVlIGxhIHN1bWEgc2lndWkgRVNUUklDVEFNRU5UIG3DqXMgZ3Jhbiwgbm8gaWd1YWwuIEFtYiAkNysxPTgkIGVsIFwidHJpYW5nbGVcIiBxdWVkYXJpYSBjb21wbGV0YW1lbnQgcGxhLiIsICJMYSBkZXNpZ3VhbHRhdCB0cmlhbmd1bGFyIGVzIGNvbXByb3ZhIG5vbcOpcyBhbWIgbGVzIHRyZXMgbG9uZ2l0dWRzLCBzZW5zZSBuZWNlc3NpdGF0IGRlIGNhcCBhbmdsZTogbGEgc3VtYSBkZWxzIGRvcyBjb3N0YXRzIG3DqXMgY3VydHMgaGEgZGUgc3VwZXJhciBlbCBtw6lzIGxsYXJnLiIsICIiXSwgImVyciI6IFsiREVTSUdVQUxUQVRfTk9fRVNUUklDVEEiLCAiREVTSUdVQUxUQVRfTk9fRVNUUklDVEEiLCAiRVNfUE9UX0RFVEVSTUlOQVIiLCAiIl0sICJyZXMiOiBbIkNvc3RhdHMgbcOpcyBjdXJ0czogJDckIGkgJDEkLiAkNysxPTgkLCBxdWUgTk8gw6lzIGVzdHJpY3RhbWVudCBtw6lzIGdyYW4gcXVlICQ4JCAoaGkgw6lzIGlndWFsKTogbm8gZXMgZm9ybWEgY2FwIHRyaWFuZ2xlIl19"
  },
  {
   "id": "120b",
   "ex": 120,
   "ap": "b",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Analitza, en cada cas, les mesures i esbrina amb quines es pot formar un triangle.",
   "enunciat": "$a=6$ cm, $b=6$ cm, $c=13$ cm",
   "opcions": [
    "No es pot formar cap triangle",
    "No es pot saber sense conèixer els angles",
    "Sí que es pot formar un triangle",
    "Sí, perquè dos costats són iguals (és isòsceles)"
   ],
   "pistes": [
    "Compara la suma dels dos costats més curts amb el més llarg.",
    "$6+6$ i $13$: quin és més gran?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiTGEgZGVzaWd1YWx0YXQgdHJpYW5ndWxhciBlcyBjb21wcm92YSBub23DqXMgYW1iIGxlcyB0cmVzIGxvbmdpdHVkcyBkb25hZGVzLCBzZW5zZSBjYXAgYW5nbGUuIiwgIkVscyBkb3MgY29zdGF0cyBpZ3VhbHMgc3VtZW4gJDYrNj0xMiQsIHF1ZSDDqXMgTcOJUyBQRVRJVCBxdWUgZWwgdGVyY2VyIGNvc3RhdCAoJDEzJCk6IGxhIGRlc2lndWFsdGF0IHRyaWFuZ3VsYXIgZmFsbGEgY2xhcmFtZW50LCBubyBwZXIgdW4gbWFyZ2UganVzdC4iLCAiUXVlIGRvcyBjb3N0YXRzIHNpZ3VpbiBpZ3VhbHMgbm8gZ2FyYW50ZWl4IHF1ZSBlcyBwdWd1aSBmb3JtYXIgdW4gdHJpYW5nbGU6IGNhbCBjb21wcm92YXIgbGEgZGVzaWd1YWx0YXQgdHJpYW5ndWxhciBpZ3VhbG1lbnQsIGkgYXF1w60gbm8gZXMgY29tcGxlaXguIl0sICJlcnIiOiBbIiIsICJFU19QT1RfREVURVJNSU5BUiIsICJERVNJR1VBTFRBVF9OT19FU1RSSUNUQSIsICJQUk9HUkVTU0lPX0lOVkVOVEFEQSJdLCAicmVzIjogWyJDb3N0YXRzIGlndWFsczogJDYkIGkgJDYkLiAkNis2PTEyPDEzJDogbm8gZXMgcG90IGZvcm1hciBjYXAgdHJpYW5nbGUiXX0="
  },
  {
   "id": "120c",
   "ex": 120,
   "ap": "c",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Analitza, en cada cas, les mesures i esbrina amb quines es pot formar un triangle.",
   "enunciat": "$a=12$ cm, $b=14$ cm, $c=6$ cm",
   "opcions": [
    "No es pot saber sense conèixer els angles",
    "Només es pot saber comparant $12$ amb $14$, no cal mirar el $6$",
    "No es pot formar cap triangle",
    "Sí que es pot formar un triangle"
   ],
   "pistes": [
    "Només cal comprovar-ho amb els dos costats més curts: $12$ i $6$.",
    "Compara $12+6$ amb $14$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMYSBkZXNpZ3VhbHRhdCB0cmlhbmd1bGFyIGVzIGNvbXByb3ZhIG5vbcOpcyBhbWIgbGVzIHRyZXMgbG9uZ2l0dWRzIGRvbmFkZXMsIHNlbnNlIGNhcCBhbmdsZS4iLCAiQ2FsIGNvbXByb3ZhciBsYSBkZXNpZ3VhbHRhdCBhbWIgZWxzIERPUyBjb3N0YXRzIG3DqXMgY3VydHMgc3VtYXRzICgkMTIrNiQpIGNvbnRyYSBlbCBtw6lzIGxsYXJnICgkMTQkKSwgbm8gY29tcGFyYXIgZG9zIGNvc3RhdHMgcXVhbHNzZXZvbCBlbnRyZSBzaS4iLCAiQ29tcHJvdmEtaG86IGVscyBjb3N0YXRzIG3DqXMgY3VydHMgc3VtZW4gJDEyKzY9MTgkLCBxdWUgU8ONIMOpcyBtw6lzIGdyYW4gcXVlICQxNCQuIExhIGRlc2lndWFsdGF0IHRyaWFuZ3VsYXIgZXMgY29tcGxlaXggZW4gYXF1ZXN0IGNhcy4iLCAiIl0sICJlcnIiOiBbIkVTX1BPVF9ERVRFUk1JTkFSIiwgIkNPU1RBVFNfTUFMX1RSSUFUUyIsICJWRVJFRElDVEVfSU5WRVJUSVQiLCAiIl0sICJyZXMiOiBbIkNvc3RhdHMgbcOpcyBjdXJ0czogJDEyJCBpICQ2JC4gJDEyKzY9MTg+MTQkOiBlcyBjb21wbGVpeCBsYSBkZXNpZ3VhbHRhdCB0cmlhbmd1bGFyLCBlcyBwb3QgZm9ybWFyIHVuIHRyaWFuZ2xlIl19"
  },
  {
   "id": "123a",
   "ex": 123,
   "ap": "a",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula la longitud de $x$ en aquestes figures.",
   "enunciat": "Quadrat de costat 4 cm, $x$ és la diagonal.",
   "opcions": [
    "$8$",
    "$4\\sqrt{2}\\approx5{,}66$",
    "$32$",
    "$16$"
   ],
   "pistes": [
    "La diagonal d'un quadrat és la hipotenusa del triangle rectangle format per dos costats consecutius.",
    "Aplica Pitàgores: $x=\\sqrt{4^2+4^2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgc3VtYXQgZWxzIGRvcyBjb3N0YXRzIGRpcmVjdGFtZW50ICgkNCs0JCkgZW4gbGxvYyBkJ2FwbGljYXIgUGl0w6Bnb3JlczogY2FsIGVsZXZhci1sb3MgYWwgcXVhZHJhdCwgc3VtYXItbG9zLCBpIGZlciBsJ2FycmVsIHF1YWRyYWRhIGRlbCByZXN1bHRhdC4iLCAiIiwgIkhhcyBjYWxjdWxhdCAkNF4yKzReMj0zMiQgY29ycmVjdGFtZW50LCBwZXLDsiB0J2hhcyBkZWl4YXQgbCdhcnJlbCBxdWFkcmFkYSBmaW5hbDogbGEgZGlhZ29uYWwgw6lzICRcXHNxcnR7MzJ9JCwgbm8gJDMyJC4iLCAiQXF1ZXN0IMOpcyBlbCBwcm9kdWN0ZSBkZWxzIGRvcyBjb3N0YXRzICgkNFxcY2RvdDQkKSwgbm8gbGEgZGlhZ29uYWw6IGNhbCBhcGxpY2FyIFBpdMOgZ29yZXMsICR4PVxcc3FydHs0XjIrNF4yfSQuIl0sICJlcnIiOiBbIlNVTUFfQ0FURVRTX1NFTlNFX1FVQURSQVQiLCAiIiwgIkFSUkVMX09CTElEQURBIiwgIlNVTUFfQ0FURVRTX1NFTlNFX1FVQURSQVQiXSwgInJlcyI6IFsiJHg9XFxzcXJ0ezReMis0XjJ9PVxcc3FydHszMn09NFxcc3FydHsyfVxcYXBwcm94NXssfTY2JCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 148 181\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Quadrat de costat 4 cm amb la diagonal marcada.</title><g transform=\"translate(14.0,14.0)\"><polygon points=\"0.0,0.0 120.0,0.0 120.0,120.0 0.0,120.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"120.0\" x2=\"120.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"122.5\" x2=\"0.0\" y2=\"139.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"120.0\" y1=\"122.5\" x2=\"120.0\" y2=\"139.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"136.0\" x2=\"120.0\" y2=\"136.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"132.0\" x2=\"4.0\" y2=\"140.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"116.0\" y1=\"132.0\" x2=\"124.0\" y2=\"140.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"60\" y=\"150.4\" text-anchor=\"middle\" class=\"fig-etq\">4 cm</text><text x=\"67.8\" y=\"71.1\" text-anchor=\"middle\" class=\"fig-etq\">x</text></g></svg>"
  },
  {
   "id": "123b",
   "ex": 123,
   "ap": "b",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula la longitud de $x$ en aquestes figures.",
   "enunciat": "Quadrat de costat 10 cm, $x$ és la diagonal.",
   "opcions": [
    "$200$",
    "$20$",
    "$100$",
    "$10\\sqrt{2}\\approx14{,}14$"
   ],
   "pistes": [
    "La diagonal d'un quadrat és la hipotenusa del triangle rectangle format per dos costats consecutius.",
    "Aplica Pitàgores: $x=\\sqrt{10^2+10^2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgY2FsY3VsYXQgJDEwXjIrMTBeMj0yMDAkIGNvcnJlY3RhbWVudCwgcGVyw7IgdCdoYXMgZGVpeGF0IGwnYXJyZWwgcXVhZHJhZGEgZmluYWwuIiwgIkhhcyBzdW1hdCBlbHMgZG9zIGNvc3RhdHMgZGlyZWN0YW1lbnQgKCQxMCsxMCQpIGVuIGxsb2MgZCdhcGxpY2FyIFBpdMOgZ29yZXMuIiwgIkFxdWVzdCDDqXMgZWwgcHJvZHVjdGUgZGVscyBkb3MgY29zdGF0cyAoJDEwXFxjZG90MTAkKSwgbm8gbGEgZGlhZ29uYWwuIiwgIiJdLCAiZXJyIjogWyJBUlJFTF9PQkxJREFEQSIsICJTVU1BX0NBVEVUU19TRU5TRV9RVUFEUkFUIiwgIlNVTUFfQ0FURVRTX1NFTlNFX1FVQURSQVQiLCAiIl0sICJyZXMiOiBbIiR4PVxcc3FydHsxMF4yKzEwXjJ9PVxcc3FydHsyMDB9PTEwXFxzcXJ0ezJ9XFxhcHByb3gxNHssfTE0JCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 148 181\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Quadrat de costat 10 cm amb la diagonal marcada.</title><g transform=\"translate(14.0,14.0)\"><polygon points=\"0.0,0.0 120.0,0.0 120.0,120.0 0.0,120.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"120.0\" x2=\"120.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"122.5\" x2=\"0.0\" y2=\"139.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"120.0\" y1=\"122.5\" x2=\"120.0\" y2=\"139.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"136.0\" x2=\"120.0\" y2=\"136.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"132.0\" x2=\"4.0\" y2=\"140.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"116.0\" y1=\"132.0\" x2=\"124.0\" y2=\"140.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"60\" y=\"150.4\" text-anchor=\"middle\" class=\"fig-etq\">10 cm</text><text x=\"67.8\" y=\"71.1\" text-anchor=\"middle\" class=\"fig-etq\">x</text></g></svg>"
  },
  {
   "id": "123c",
   "ex": 123,
   "ap": "c",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula la longitud de $x$ en aquestes figures.",
   "enunciat": "Rectangle de costats 5 cm i 8 cm, $x$ és la diagonal.",
   "opcions": [
    "$40$",
    "$89$",
    "$\\sqrt{89}\\approx9{,}43$",
    "$13$"
   ],
   "pistes": [
    "La diagonal d'un rectangle és la hipotenusa del triangle rectangle format per dos costats consecutius.",
    "Aplica Pitàgores: $x=\\sqrt{5^2+8^2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3Qgw6lzIGVsIHByb2R1Y3RlIGRlbHMgZG9zIGNvc3RhdHMgKCQ1XFxjZG90OCQpLCBubyBsYSBkaWFnb25hbC4iLCAiSGFzIGNhbGN1bGF0ICQ1XjIrOF4yPTg5JCBjb3JyZWN0YW1lbnQsIHBlcsOyIHQnaGFzIGRlaXhhdCBsJ2FycmVsIHF1YWRyYWRhIGZpbmFsLiIsICIiLCAiSGFzIHN1bWF0IGVscyBkb3MgY29zdGF0cyBkaXJlY3RhbWVudCAoJDUrOCQpIGVuIGxsb2MgZCdhcGxpY2FyIFBpdMOgZ29yZXMuIl0sICJlcnIiOiBbIlNVTUFfQ0FURVRTX1NFTlNFX1FVQURSQVQiLCAiQVJSRUxfT0JMSURBREEiLCAiIiwgIlNVTUFfQ0FURVRTX1NFTlNFX1FVQURSQVQiXSwgInJlcyI6IFsiJHg9XFxzcXJ0ezVeMis4XjJ9PVxcc3FydHs4OX1cXGFwcHJveDl7LH00MyQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 259 174\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Rectangle de 8 cm per 5 cm amb la diagonal marcada.</title><g transform=\"translate(64.6,14.0)\"><polygon points=\"0.0,0.0 180.0,0.0 180.0,112.5 0.0,112.5\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"115.0\" x2=\"0.0\" y2=\"132.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"180.0\" y1=\"115.0\" x2=\"180.0\" y2=\"132.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"128.5\" x2=\"180.0\" y2=\"128.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"124.5\" x2=\"4.0\" y2=\"132.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"176.0\" y1=\"124.5\" x2=\"184.0\" y2=\"132.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-19.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"112.5\" x2=\"-19.5\" y2=\"112.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-16.0\" y1=\"0.0\" x2=\"-16.0\" y2=\"112.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"-4.0\" x2=\"-20.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"108.5\" x2=\"-20.0\" y2=\"116.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line x1=\"0.0\" y1=\"112.5\" x2=\"180.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><text x=\"90\" y=\"142.9\" text-anchor=\"middle\" class=\"fig-etq\">8 cm</text><text x=\"-36\" y=\"59.6\" text-anchor=\"middle\" class=\"fig-etq\">5 cm</text><text x=\"95.8\" y=\"68.9\" text-anchor=\"middle\" class=\"fig-etq\">x</text></g></svg>"
  },
  {
   "id": "123d",
   "ex": 123,
   "ap": "d",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula la longitud de $x$ en aquestes figures.",
   "enunciat": "Rectangle de diagonal $\\sqrt{117}$ cm i un costat de 9 cm, $x$ és l'altre costat.",
   "opcions": [
    "$36$ cm",
    "$\\sqrt{117+9^2}\\approx14{,}07$ cm",
    "$6$ cm",
    "$\\sqrt{81}=9$ cm"
   ],
   "pistes": [
    "La diagonal és la hipotenusa: coneixent-la i un costat, l'altre s'aïlla restant, no sumant.",
    "Aïlla l'altre costat: $x=\\sqrt{117-9^2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgY2FsY3VsYXQgJDExNy05XjI9MzYkIGNvcnJlY3RhbWVudCwgcGVyw7IgdCdoYXMgZGVpeGF0IGwnYXJyZWwgcXVhZHJhZGEgZmluYWw6IGwnYWx0cmUgY29zdGF0IMOpcyAkXFxzcXJ0ezM2fT02JCBjbSwgbm8gJDM2JCBjbS4iLCAiQ29uZWl4ZW50IGxhIGRpYWdvbmFsIGkgdW4gY29zdGF0LCBsJ2FsdHJlIGNvc3RhdCBzJ29idMOpIFJFU1RBTlQgZWwgcXVhZHJhdCBkZWwgY29zdGF0IGNvbmVndXQgYWwgcXVhZHJhdCBkZSBsYSBkaWFnb25hbCwgbm8gc3VtYW50LWxvOiAkeD1cXHNxcnR7MTE3LTleMn0kLCBubyAkXFxzcXJ0ezExNys5XjJ9JC4iLCAiIiwgIkFxdWVzdCBjb3N0YXQgbm8gcG90IGNvaW5jaWRpciBhbWIgZWwgY29zdGF0IGphIGRvbmF0ICgkOSQgY20pOiBjYWwgYcOvbGxhci1sbyBkZSAkMTE3LTleMiQsIG5vIHJlcGV0aXIgZWwgY29zdGF0IGNvbmVndXQuIl0sICJlcnIiOiBbIkFSUkVMX09CTElEQURBIiwgIlNJR05FX1BJVEFHT1JFUyIsICIiLCAiQ0FURVRfTUFMX0lERU5USUZJQ0FUIl0sICJyZXMiOiBbIiR4PVxcc3FydHsxMTctOV4yfT1cXHNxcnR7MTE3LTgxfT1cXHNxcnR7MzZ9PTYkIGNtIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 239 181\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Rectangle de 9 cm per x amb la diagonal marcada.</title><g transform=\"translate(44.7,14.0)\"><polygon points=\"0.0,0.0 180.0,0.0 180.0,120.0 0.0,120.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"122.5\" x2=\"0.0\" y2=\"139.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"180.0\" y1=\"122.5\" x2=\"180.0\" y2=\"139.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"136.0\" x2=\"180.0\" y2=\"136.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"132.0\" x2=\"4.0\" y2=\"140.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"176.0\" y1=\"132.0\" x2=\"184.0\" y2=\"140.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-19.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"120.0\" x2=\"-19.5\" y2=\"120.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-16.0\" y1=\"0.0\" x2=\"-16.0\" y2=\"120.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"-4.0\" x2=\"-20.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"116.0\" x2=\"-20.0\" y2=\"124.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line x1=\"0.0\" y1=\"120.0\" x2=\"180.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><text x=\"90\" y=\"150.4\" text-anchor=\"middle\" class=\"fig-etq\">9 cm</text><text x=\"-27\" y=\"63.4\" text-anchor=\"middle\" class=\"fig-etq\">x</text><text x=\"57.3\" y=\"61.1\" text-anchor=\"middle\" class=\"fig-etq\">√117 cm</text></g></svg>"
  },
  {
   "id": "121a",
   "ex": 121,
   "ap": "a",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Determina si els triangles són rectangles. En cas afirmatiu, indica la mesura de la seva hipotenusa i dels seus catets.",
   "enunciat": "Triangle de costats 5 cm, 12 cm i 13 cm.",
   "opcions": [
    "No és rectangle",
    "Rectangle, amb hipotenusa $13$ cm i catets $5$ cm i $12$ cm",
    "Rectangle, amb hipotenusa $12$ cm i catets $5$ cm i $13$ cm",
    "Rectangle, amb hipotenusa $13$ cm i catets $5$ cm i $13$ cm"
   ],
   "pistes": [
    "Compara el quadrat del costat més llarg amb la suma dels quadrats dels altres dos.",
    "$5^2+12^2$ i $13^2$: coincideixen?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJDb21wcm92YS1obzogJDVeMisxMl4yPTI1KzE0ND0xNjkkLCBpICQxM14yPTE2OSQgdGFtYsOpLiBDb2luY2lkZWl4ZW4sIGFpeMOtIHF1ZSBzw60gcXVlIMOpcyByZWN0YW5nbGUuIiwgIiIsICJMYSBoaXBvdGVudXNhIMOpcyBzZW1wcmUgZWwgY29zdGF0IE3DiVMgTExBUkcgZGVscyB0cmVzLCBxdWUgYXF1w60gw6lzICQxMyQgY20sIG5vICQxMiQgY20uIiwgIkxhIGhpcG90ZW51c2Egbm8gcG90IHJlcGV0aXItc2UgY29tIGEgY2F0ZXQ6IGVscyBjYXRldHMgc8OzbiBlbHMgZG9zIGNvc3RhdHMgcXVlIE5PIHPDs24gZWwgbcOpcyBsbGFyZywgw6lzIGEgZGlyLCAkNSQgaSAkMTIkLiJdLCAiZXJyIjogWyJWRVJFRElDVEVfSU5WRVJUSVQiLCAiIiwgIkhJUE9URU5VU0FfTUFMX0lERU5USUZJQ0FEQSIsICJISVBPVEVOVVNBX01BTF9JREVOVElGSUNBREEiXSwgInJlcyI6IFsiJDVeMisxMl4yPTI1KzE0ND0xNjk9MTNeMiQ6IGNvaW5jaWRlaXgsIMOpcyByZWN0YW5nbGUsIGFtYiBoaXBvdGVudXNhICQxMyQgY20gaSBjYXRldHMgJDUkIGNtIGkgJDEyJCBjbSJdfQ=="
  },
  {
   "id": "121b",
   "ex": 121,
   "ap": "b",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Determina si els triangles són rectangles. En cas afirmatiu, indica la mesura de la seva hipotenusa i dels seus catets.",
   "enunciat": "Triangle de costats 6 cm, 8 cm i 12 cm.",
   "opcions": [
    "Rectangle, amb hipotenusa $8$ cm i catets $6$ cm i $12$ cm",
    "No es pot saber sense mesurar els angles directament",
    "Rectangle, amb hipotenusa $12$ cm i catets $6$ cm i $8$ cm",
    "No és rectangle"
   ],
   "pistes": [
    "Compara el quadrat del costat més llarg ($12$) amb la suma dels quadrats dels altres dos ($6$ i $8$).",
    "$6^2+8^2$ i $12^2$: coincideixen?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbmNhcmEgcXVlIGZvcyByZWN0YW5nbGUsIGxhIGhpcG90ZW51c2EgaGF1cmlhIGRlIHNlciBlbCBjb3N0YXQgbcOpcyBsbGFyZyAoJDEyJCBjbSksIG5vIGVsICQ4JCBjbTsgcGVyw7IgZGUgZmV0IGFxdWVzdCB0cmlhbmdsZSBubyDDqXMgcmVjdGFuZ2xlLiIsICJFbCB0ZW9yZW1hIGRlIFBpdMOgZ29yZXMgcGVybWV0IHNhYmVyLWhvIG5vbcOpcyBhbWIgbGVzIHRyZXMgbG9uZ2l0dWRzLCBzZW5zZSBtZXN1cmFyIGNhcCBhbmdsZTogbm9tw6lzIGNhbCBjb21wYXJhciAkNl4yKzheMiQgYW1iICQxMl4yJC4iLCAiQ29tcHJvdmEtaG86ICQ2XjIrOF4yPTM2KzY0PTEwMCQsIHBlcsOyICQxMl4yPTE0NCQuIE5PIGNvaW5jaWRlaXhlbjogYXF1ZXN0IHRyaWFuZ2xlIG5vIMOpcyByZWN0YW5nbGUuIiwgIiJdLCAiZXJyIjogWyJISVBPVEVOVVNBX01BTF9JREVOVElGSUNBREEiLCAiRVNfUE9UX0RFVEVSTUlOQVIiLCAiVkVSRURJQ1RFX0lOVkVSVElUIiwgIiJdLCAicmVzIjogWyIkNl4yKzheMj0zNis2ND0xMDAkLCBwZXLDsiAkMTJeMj0xNDQkOiBOTyBjb2luY2lkZWl4LCBubyDDqXMgcmVjdGFuZ2xlIl19"
  },
  {
   "id": "121c",
   "ex": 121,
   "ap": "c",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Determina si els triangles són rectangles. En cas afirmatiu, indica la mesura de la seva hipotenusa i dels seus catets.",
   "enunciat": "Triangle de costats 5 cm, 6 cm i $\\sqrt{61}$ cm.",
   "opcions": [
    "No es pot saber perquè un dels costats és una arrel, no un nombre enter",
    "No és rectangle",
    "Rectangle, amb hipotenusa $6$ cm i catets $5$ cm i $\\sqrt{61}$ cm",
    "Rectangle, amb hipotenusa $\\sqrt{61}$ cm i catets $5$ cm i $6$ cm"
   ],
   "pistes": [
    "Identifica primer el costat més llarg: com que $\\sqrt{61}\\approx7{,}81$ cm, és ell qui podria ser la hipotenusa.",
    "Comprova $5^2+6^2$ contra $(\\sqrt{61})^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCB0ZW9yZW1hIGRlIFBpdMOgZ29yZXMgZnVuY2lvbmEgaWd1YWwgYW1iIGNvc3RhdHMgaXJyYWNpb25hbHM6IG4naGkgaGEgcHJvdSBkJ2VsZXZhciAkXFxzcXJ0ezYxfSQgYWwgcXVhZHJhdCwgcXVlIGRvbmEgZXhhY3RhbWVudCAkNjEkLiIsICJDb21wcm92YS1obzogJDVeMis2XjI9MjUrMzY9NjEkLCBpICQoXFxzcXJ0ezYxfSleMj02MSQgdGFtYsOpLiBDb2luY2lkZWl4ZW4sIGFpeMOtIHF1ZSBzw60gcXVlIMOpcyByZWN0YW5nbGUuIiwgIkxhIGhpcG90ZW51c2Egw6lzIGVsIGNvc3RhdCBtw6lzIGxsYXJnOiBjb20gcXVlICRcXHNxcnR7NjF9XFxhcHByb3g3eyx9ODEkIGNtLCDDqXMgbcOpcyBsbGFyZyBxdWUgJDYkIGNtLCBpIHBlciB0YW50IMOpcyBlbGwgcXVpIGZhIGQnaGlwb3RlbnVzYSwgbm8gZWwgJDYkLiIsICIiXSwgImVyciI6IFsiRVNfUE9UX0RFVEVSTUlOQVIiLCAiVkVSRURJQ1RFX0lOVkVSVElUIiwgIkhJUE9URU5VU0FfTUFMX0lERU5USUZJQ0FEQSIsICIiXSwgInJlcyI6IFsiJDVeMis2XjI9MjUrMzY9NjE9KFxcc3FydHs2MX0pXjIkOiBjb2luY2lkZWl4LCDDqXMgcmVjdGFuZ2xlLCBhbWIgaGlwb3RlbnVzYSAkXFxzcXJ0ezYxfSQgY20gaSBjYXRldHMgJDUkIGNtIGkgJDYkIGNtIl19"
  },
  {
   "id": "121d",
   "ex": 121,
   "ap": "d",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Determina si els triangles són rectangles. En cas afirmatiu, indica la mesura de la seva hipotenusa i dels seus catets.",
   "enunciat": "Triangle de costats 7 cm, 24 cm i 25 cm.",
   "opcions": [
    "Rectangle, amb hipotenusa $25$ cm i catets $7$ cm i $7$ cm",
    "Rectangle, amb hipotenusa $25$ cm i catets $7$ cm i $24$ cm",
    "Rectangle, amb hipotenusa $24$ cm i catets $7$ cm i $25$ cm",
    "No és rectangle"
   ],
   "pistes": [
    "Compara el quadrat del costat més llarg amb la suma dels quadrats dels altres dos.",
    "$7^2+24^2$ i $25^2$: coincideixen?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbHMgZG9zIGNhdGV0cyBzw7NuIGVscyBkb3MgY29zdGF0cyBxdWUgTk8gZmFuIGQnaGlwb3RlbnVzYTogYXF1w60gc8OzbiAkNyQgY20gaSAkMjQkIGNtLCBubyBkdWVzIHZlZ2FkZXMgZWwgbWF0ZWl4IGNvc3RhdC4iLCAiIiwgIkxhIGhpcG90ZW51c2Egw6lzIGVsIGNvc3RhdCBtw6lzIGxsYXJnIGRlbHMgdHJlcywgcXVlIGFxdcOtIMOpcyAkMjUkIGNtLCBubyAkMjQkIGNtLiIsICJDb21wcm92YS1obzogJDdeMisyNF4yPTQ5KzU3Nj02MjUkLCBpICQyNV4yPTYyNSQgdGFtYsOpLiBDb2luY2lkZWl4ZW4sIGFpeMOtIHF1ZSBzw60gcXVlIMOpcyByZWN0YW5nbGUuIl0sICJlcnIiOiBbIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiIiwgIkhJUE9URU5VU0FfTUFMX0lERU5USUZJQ0FEQSIsICJWRVJFRElDVEVfSU5WRVJUSVQiXSwgInJlcyI6IFsiJDdeMisyNF4yPTQ5KzU3Nj02MjU9MjVeMiQ6IGNvaW5jaWRlaXgsIMOpcyByZWN0YW5nbGUsIGFtYiBoaXBvdGVudXNhICQyNSQgY20gaSBjYXRldHMgJDckIGNtIGkgJDI0JCBjbSJdfQ=="
  },
  {
   "id": "122",
   "ex": 122,
   "ap": "",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Classifica en acutangle o obtusangle el triangle de costats 5 cm, 10 cm i 8 cm.",
   "opcions": [
    "No es pot classificar sense mesurar els angles directament",
    "Triangle acutangle",
    "Triangle rectangle",
    "Triangle obtusangle"
   ],
   "pistes": [
    "Compara el quadrat del costat més llarg ($10$) amb la suma dels quadrats dels altres dos ($5$ i $8$).",
    "Si el quadrat del costat més llarg és més gran que la suma dels altres dos quadrats, el triangle és obtusangle; si és més petit, és acutangle; si coincideix, és rectangle."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJDb21wYXJhbnQgZWwgcXVhZHJhdCBkZWwgY29zdGF0IG3DqXMgbGxhcmcgYW1iIGxhIHN1bWEgZGVscyBxdWFkcmF0cyBkZWxzIGFsdHJlcyBkb3MgamEgbidoaSBoYSBwcm91IHBlciBjbGFzc2lmaWNhci1sbywgc2Vuc2UgbmVjZXNzaXRhdCBkZSBtZXN1cmFyIGNhcCBhbmdsZS4iLCAiQ29tcGFyYSAkMTBeMj0xMDAkIGFtYiAkNV4yKzheMj04OSQ6IGNvbSBxdWUgJDEwMD44OSQsIGwnYW5nbGUgb3Bvc2F0IGFsIGNvc3RhdCBtw6lzIGxsYXJnIMOpcyBtw6lzIG9iZXJ0IHF1ZSB1biBhbmdsZSByZWN0ZSwgYWl4w60gcXVlIGVsIHRyaWFuZ2xlIMOpcyBvYnR1c2FuZ2xlLCBubyBhY3V0YW5nbGUuIiwgIiQxMF4yPTEwMCQgaSAkNV4yKzheMj04OSQgTk8gY29pbmNpZGVpeGVuIChzaSBjb2luY2lkaXNzaW4gc2VyaWEgcmVjdGFuZ2xlKTogY29tIHF1ZSAkMTAwJCDDqXMgbcOpcyBncmFuIHF1ZSAkODkkLCBsJ2FuZ2xlIMOpcyBtw6lzIG9iZXJ0IHF1ZSB1biBhbmdsZSByZWN0ZSwgw6lzIGEgZGlyLCBvYnR1c2FuZ2xlLiIsICIiXSwgImVyciI6IFsiRVNfUE9UX0RFVEVSTUlOQVIiLCAiVkVSRURJQ1RFX0lOVkVSVElUIiwgIlBBUklUQVRfRVhQT05FTlQiLCAiIl0sICJyZXMiOiBbIiQxMF4yPTEwMCQsICRcXHF1YWQgNV4yKzheMj0yNSs2ND04OSQiLCAiQ29tIHF1ZSAkMTAwPjg5JCwgZWwgdHJpYW5nbGUgw6lzIG9idHVzYW5nbGUiXX0="
  },
  {
   "id": "124a",
   "ex": 124,
   "ap": "a",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Determina la longitud de $x$ en aquests triangles.",
   "enunciat": "Triangle equilàter de costat 10 cm; $x$ és l'alçada.",
   "opcions": [
    "$10$",
    "$0$ cm (perquè $10^2-10^2=0$)",
    "$5\\sqrt{3}\\approx8{,}66$",
    "$5$"
   ],
   "pistes": [
    "L'alçada d'un triangle equilàter cau al punt mitjà de la base i forma un triangle rectangle amb la semibase i el costat (com a hipotenusa).",
    "La semibase és $\\dfrac{10}{2}=5$ cm; aplica Pitàgores: $x=\\sqrt{10^2-5^2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJMJ2Fsw6dhZGEgZCd1biB0cmlhbmdsZSBlcXVpbMOgdGVyIE5PIGNvaW5jaWRlaXggYW1iIGVsIGNvc3RhdDogY2FsIGFwbGljYXIgUGl0w6Bnb3JlcyBhbWIgbGEgc2VtaWJhc2UgaSBlbCBjb3N0YXQgY29tIGEgaGlwb3RlbnVzYS4iLCAiQXF1ZXN0IHBsYW50ZWphbWVudCBmYSBzZXJ2aXIgZWwgY29zdGF0IHNlbmNlciAoJDEwJCkgY29tIGEgY2F0ZXQgZHVlcyB2ZWdhZGVzLCBubyBsYSBTRU1JQkFTRSAobGEgbWVpdGF0IGRlbCBjb3N0YXQsIGphIHF1ZSBsJ2Fsw6dhZGEgY2F1IGFsIHB1bnQgbWl0asOgIGRlIGxhIGJhc2UpLiIsICIiLCAiQXF1ZXN0YSDDqXMgbGEgc2VtaWJhc2UgKGxhIG1laXRhdCBkZWwgY29zdGF0KSwgbm8gbCdhbMOnYWRhOiBlbmNhcmEgZmFsdGEgYXBsaWNhciBQaXTDoGdvcmVzIGFtYiBhcXVlc3RhIHNlbWliYXNlIGkgZWwgY29zdGF0IGNvbSBhIGhpcG90ZW51c2EuIl0sICJlcnIiOiBbIlBST0dSRVNTSU9fSU5WRU5UQURBIiwgIkNBVEVUX01BTF9JREVOVElGSUNBVCIsICIiLCAiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiXSwgInJlcyI6IFsiU2VtaWJhc2U6ICRcXGRmcmFjezEwfXsyfT01JCBjbSIsICIkeD1cXHNxcnR7MTBeMi01XjJ9PVxcc3FydHs3NX09NVxcc3FydHszfVxcYXBwcm94OHssfTY2JCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 198 209\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Triangle equilàter de base 10 cm, costats iguals 10 cm, alçada x.</title><g transform=\"translate(14.0,14.0)\"><polygon points=\"0.0,147.2 170.0,147.2 85.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"85.0\" y1=\"0.0\" x2=\"85.0\" y2=\"147.2\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><path d=\"M 94.0 147.2 L 94.0 138.2 L 85.0 138.2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"149.7\" x2=\"0.0\" y2=\"166.7\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"170.0\" y1=\"149.7\" x2=\"170.0\" y2=\"166.7\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"163.2\" x2=\"170.0\" y2=\"163.2\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"159.2\" x2=\"4.0\" y2=\"167.2\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"166.0\" y1=\"159.2\" x2=\"174.0\" y2=\"167.2\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"85\" y=\"177.6\" text-anchor=\"middle\" class=\"fig-etq\">10 cm</text><text x=\"39.4\" y=\"122.3\" text-anchor=\"middle\" class=\"fig-etq\">10 cm</text><text x=\"96\" y=\"77\" text-anchor=\"middle\" class=\"fig-etq\">x</text></g></svg>"
  },
  {
   "id": "124b",
   "ex": 124,
   "ap": "b",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Determina la longitud de $x$ en aquests triangles.",
   "enunciat": "Triangle isòsceles de base 8 cm i alçada $\\sqrt{48}$ cm; $x$ és la longitud dels costats iguals.",
   "opcions": [
    "$4$ cm",
    "$8$ cm",
    "$\\sqrt{48+4^2}\\approx8{,}25$ cm",
    "$\\sqrt{48+8^2}\\approx10{,}77$ cm"
   ],
   "pistes": [
    "L'alçada divideix la base pel mig: la semibase és $\\dfrac{8}{2}=4$ cm.",
    "El costat igual és la hipotenusa del triangle rectangle de catets $4$ i $\\sqrt{48}$: $x=\\sqrt{4^2+(\\sqrt{48})^2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3RhIMOpcyBsYSBzZW1pYmFzZSAobGEgbWVpdGF0IGRlIGxhIGJhc2UpLCBubyBlbCBjb3N0YXQgaWd1YWwgcXVlIGV0IGRlbWFuZW46IGVuY2FyYSBmYWx0YSBhcGxpY2FyIFBpdMOgZ29yZXMuIiwgIiIsICJFbCBjb3N0YXQgaWd1YWwgw6lzIGxhIGhpcG90ZW51c2E6IHMnb2J0w6kgU1VNQU5UIGVscyBxdWFkcmF0cyBkZSBsYSBzZW1pYmFzZSBpIGwnYWzDp2FkYSwgaSBhaXjDsiBzw60gw6lzIGNvcnJlY3RlIGFxdcOtIChubyDDqXMgdW5hIHJlc3RhKTsgY29tcHJvdmEgcXVlIGhhcyBmZXQgc2VydmlyIGxhIHNlbWliYXNlICgkNCQgY20sIGxhIG1laXRhdCBkZSAkOCQpLCBubyBsYSBiYXNlIHNlbmNlcmEuIiwgIkhhcyBmZXQgc2VydmlyIGxhIGJhc2Ugc2VuY2VyYSAoJDgkIGNtKSBjb20gYSBjYXRldCwgZW4gbGxvYyBkZSBsYSBTRU1JQkFTRSAoJDQkIGNtLCBsYSBtZWl0YXQgZGUgbGEgYmFzZSwgamEgcXVlIGwnYWzDp2FkYSBjYXUgYWwgcHVudCBtaXRqw6ApLiJdLCAiZXJyIjogWyJQQVNfSU5URVJNRURJX1BFUl9SRVNQT1NUQSIsICIiLCAiU0lHTkVfUElUQUdPUkVTIiwgIkNBVEVUX01BTF9JREVOVElGSUNBVCJdLCAicmVzIjogWyJTZW1pYmFzZTogJFxcZGZyYWN7OH17Mn09NCQgY20iLCAiJHg9XFxzcXJ0ezReMisoXFxzcXJ0ezQ4fSleMn09XFxzcXJ0ezE2KzQ4fT1cXHNxcnR7NjR9PTgkIGNtIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 198 209\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Triangle isòsceles de base 8 cm, costats iguals x, alçada √48 cm.</title><g transform=\"translate(14.0,14.0)\"><polygon points=\"0.0,147.2 170.0,147.2 85.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"85.0\" y1=\"0.0\" x2=\"85.0\" y2=\"147.2\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><path d=\"M 94.0 147.2 L 94.0 138.2 L 85.0 138.2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"149.7\" x2=\"0.0\" y2=\"166.7\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"170.0\" y1=\"149.7\" x2=\"170.0\" y2=\"166.7\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"163.2\" x2=\"170.0\" y2=\"163.2\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"159.2\" x2=\"4.0\" y2=\"167.2\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"166.0\" y1=\"159.2\" x2=\"174.0\" y2=\"167.2\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"85\" y=\"177.6\" text-anchor=\"middle\" class=\"fig-etq\">8 cm</text><text x=\"52\" y=\"82.5\" text-anchor=\"middle\" class=\"fig-etq\">x</text><text x=\"111\" y=\"112.3\" text-anchor=\"middle\" class=\"fig-etq\">√48 cm</text></g></svg>"
  },
  {
   "id": "124c",
   "ex": 124,
   "ap": "c",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Determina la longitud de $x$ en aquests triangles.",
   "enunciat": "Triangle isòsceles de costats iguals 12 cm i base 7 cm; $x$ és l'alçada.",
   "opcions": [
    "$\\sqrt{144-7^2}=\\sqrt{95}\\approx9{,}75$ cm",
    "$131{,}75$ cm",
    "$12-3{,}5=8{,}5$ cm",
    "$\\sqrt{131{,}75}\\approx11{,}48$ cm"
   ],
   "pistes": [
    "La semibase és $\\dfrac{7}{2}=3{,}5$ cm; l'alçada, la semibase i el costat igual (com a hipotenusa) formen un triangle rectangle.",
    "Aplica Pitàgores: $x=\\sqrt{12^2-3{,}5^2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgZmV0IHNlcnZpciBsYSBiYXNlIHNlbmNlcmEgKCQ3JCBjbSkgY29tIGEgY2F0ZXQsIGVuIGxsb2MgZGUgbGEgU0VNSUJBU0UgKCQzeyx9NSQgY20sIGxhIG1laXRhdCBkZSAkNyQsIGphIHF1ZSBsJ2Fsw6dhZGEgY2F1IGFsIHB1bnQgbWl0asOgIGRlIGxhIGJhc2UpLiIsICJIYXMgY2FsY3VsYXQgJDEyXjItM3ssfTVeMj0xMzF7LH03NSQgY29ycmVjdGFtZW50LCBwZXLDsiB0J2hhcyBkZWl4YXQgbCdhcnJlbCBxdWFkcmFkYSBmaW5hbC4iLCAiSGFzIHJlc3RhdCBkaXJlY3RhbWVudCBlbCBjb3N0YXQgaSBsYSBzZW1pYmFzZSBlbiBsbG9jIGQnYXBsaWNhciBQaXTDoGdvcmVzOiBjYWwgZWxldmFyLWxvcyBhbCBxdWFkcmF0LCByZXN0YXIsIGkgZmVyIGwnYXJyZWwgcXVhZHJhZGEuIiwgIiJdLCAiZXJyIjogWyJDQVRFVF9NQUxfSURFTlRJRklDQVQiLCAiQVJSRUxfT0JMSURBREEiLCAiU1VNQV9DQVRFVFNfU0VOU0VfUVVBRFJBVCIsICIiXSwgInJlcyI6IFsiU2VtaWJhc2U6ICRcXGRmcmFjezd9ezJ9PTN7LH01JCBjbSIsICIkeD1cXHNxcnR7MTJeMi0zeyx9NV4yfT1cXHNxcnR7MTQ0LTEyeyx9MjV9PVxcc3FydHsxMzF7LH03NX1cXGFwcHJveDExeyx9NDgkIGNtIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 198 221\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Triangle isòsceles de base 7 cm, costats iguals 12 cm, alçada x.</title><g transform=\"translate(14.0,14.0)\"><polygon points=\"0.0,160.0 170.0,160.0 85.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"85.0\" y1=\"0.0\" x2=\"85.0\" y2=\"160.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><path d=\"M 94.0 160.0 L 94.0 151.0 L 85.0 151.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"162.5\" x2=\"0.0\" y2=\"179.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"170.0\" y1=\"162.5\" x2=\"170.0\" y2=\"179.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"176.0\" x2=\"170.0\" y2=\"176.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"172.0\" x2=\"4.0\" y2=\"180.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"166.0\" y1=\"172.0\" x2=\"174.0\" y2=\"180.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"85\" y=\"190.4\" text-anchor=\"middle\" class=\"fig-etq\">7 cm</text><text x=\"50\" y=\"111.9\" text-anchor=\"middle\" class=\"fig-etq\">12 cm</text><text x=\"96\" y=\"83.4\" text-anchor=\"middle\" class=\"fig-etq\">x</text></g></svg>"
  },
  {
   "id": "125",
   "ex": 125,
   "ap": "",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Troba l'altura d'un triangle equilàter de perímetre 48 cm.",
   "opcions": [
    "$8\\sqrt{3}\\approx13{,}86$",
    "$16$",
    "$24\\sqrt{3}\\approx41{,}57$",
    "$192$"
   ],
   "pistes": [
    "Calcula primer el costat: com que el perímetre és $48$ cm i els tres costats són iguals, cada costat val $\\dfrac{48}{3}=16$ cm.",
    "L'alçada, la semibase ($8$ cm) i el costat (com a hipotenusa) formen un triangle rectangle: $h=\\sqrt{16^2-8^2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0IMOpcyBlbCBjb3N0YXQgZGVsIHRyaWFuZ2xlICgkNDg6MyQpLCBubyBsJ2Fsw6dhZGE6IGVuY2FyYSBjYWwgYXBsaWNhciBQaXTDoGdvcmVzIGFtYiBsYSBzZW1pYmFzZS4iLCAiTm8gaGFzIGNhbGN1bGF0IHByaW1lciBlbCBjb3N0YXQgYSBwYXJ0aXIgZGVsIHBlcsOtbWV0cmUgKCQ0ODozPTE2JCBjbSk6IHNlbWJsYSBxdWUgaGFzIGZldCBzZXJ2aXIgZWwgcGVyw61tZXRyZSBzZW5jZXIgKCQ0OCQpIGNvbSBzaSBmb3MgZWwgY29zdGF0LCBlbiBsbG9jIGRlIGRpdmlkaXItbG8gZW50cmUgMyBwcmltZXIuIiwgIkhhcyBjYWxjdWxhdCAkMTZeMi04XjI9MTkyJCBjb3JyZWN0YW1lbnQsIHBlcsOyIHQnaGFzIGRlaXhhdCBsJ2FycmVsIHF1YWRyYWRhIGZpbmFsLiJdLCAiZXJyIjogWyIiLCAiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiLCAiQ09TVEFUX05PX0NBTENVTEFUIiwgIkFSUkVMX09CTElEQURBIl0sICJyZXMiOiBbIkNvc3RhdDogJFxcZGZyYWN7NDh9ezN9PTE2JCBjbSIsICIkaD1cXHNxcnR7MTZeMi04XjJ9PVxcc3FydHsxOTJ9PThcXHNxcnR7M31cXGFwcHJveDEzeyx9ODYkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 198 209\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Triangle isòsceles de base 16 cm, costats iguals ?, alçada ?.</title><g transform=\"translate(14.0,14.0)\"><polygon points=\"0.0,147.2 170.0,147.2 85.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"85.0\" y1=\"0.0\" x2=\"85.0\" y2=\"147.2\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><path d=\"M 94.0 147.2 L 94.0 138.2 L 85.0 138.2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"149.7\" x2=\"0.0\" y2=\"166.7\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"170.0\" y1=\"149.7\" x2=\"170.0\" y2=\"166.7\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"163.2\" x2=\"170.0\" y2=\"163.2\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"159.2\" x2=\"4.0\" y2=\"167.2\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"166.0\" y1=\"159.2\" x2=\"174.0\" y2=\"167.2\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"85\" y=\"177.6\" text-anchor=\"middle\" class=\"fig-etq\">16 cm</text><text x=\"52\" y=\"82.5\" text-anchor=\"middle\" class=\"fig-etq\">?</text><text x=\"96\" y=\"77\" text-anchor=\"middle\" class=\"fig-etq\">?</text></g></svg>"
  },
  {
   "id": "126a",
   "ex": 126,
   "ap": "a",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula el perímetre de les figures següents.",
   "enunciat": "Quadrilàter irregular de costats 25 cm, 28 cm, 18 cm i 10 cm.",
   "opcions": [
    "$81$ cm",
    "$630$ cm",
    "$71$ cm",
    "$91$ cm"
   ],
   "pistes": [
    "El perímetre d'un polígon és la suma de les longituds de tots els seus costats.",
    "Suma els quatre costats: $25+28+18+10$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgcGVyw61tZXRyZSDDqXMgbGEgU1VNQSBkZWxzIGNvc3RhdHMsIG5vIGVsIHNldSBwcm9kdWN0ZTogJDI1XFxjZG90MjhcXGNkb3QxOFxcY2RvdDEwJCBubyB0w6kgc2VudGl0IGFxdcOtLiIsICJBcXVlc3QgdmFsb3Igbm8gaW5jbG91IGFsZ3VuIGRlbHMgcXVhdHJlIGNvc3RhdHM6IHN1bWEnbHMgdG90cyBxdWF0cmUgdW4gcGVyIHVuLiIsICJBcXVlc3QgdmFsb3Igbm8gY29pbmNpZGVpeCBhbWIgbGEgc3VtYSBkZWxzIHF1YXRyZSBjb3N0YXRzIGRvbmF0czogdG9ybmEgYSBzdW1hci1sb3MgYW1iIGNhbG1hLiJdLCAiZXJyIjogWyIiLCAiU1VNQV9FTl9MTE9DX1JFU1RBIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyJdLCAicmVzIjogWyIkMjUrMjgrMTgrMTA9ODEkIGNtIl19"
  },
  {
   "id": "126b",
   "ex": 126,
   "ap": "b",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula el perímetre de les figures següents.",
   "enunciat": "Hexàgon còncau (en forma de fletxa) de costats 12 cm, 14 cm, 28 cm, 7 cm, 16 cm i 5 cm.",
   "opcions": [
    "$77$ cm",
    "$70$ cm",
    "$82$ cm",
    "$41$ cm"
   ],
   "pistes": [
    "El perímetre és la suma de tots els costats, encara que la figura sigui còncava (en forma de fletxa): el criteri no canvia.",
    "Suma els sis costats: $12+14+28+7+16+5$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igbm8gaW5jbG91IGFsZ3VuIGRlbHMgc2lzIGNvc3RhdHM6IHN1bWEnbHMgdG90cyBzaXMgdW4gcGVyIHVuLiIsICJBcXVlc3QgdmFsb3Igbm8gY29pbmNpZGVpeCBhbWIgbGEgc3VtYSBkZWxzIHNpcyBjb3N0YXRzIGRvbmF0czogdG9ybmEgYSBzdW1hci1sb3MgYW1iIGNhbG1hLiIsICIiLCAiQXF1ZXN0IHZhbG9yIHNlbWJsYSBsYSBtZWl0YXQgZGVsIHBlcsOtbWV0cmUgcmVhbDogZWwgcGVyw61tZXRyZSBpbmNsb3UgZWxzIHNpcyBjb3N0YXRzIHNlbmNlcnMsIG5vIGxhIG1laXRhdCBkZSBsYSBzdW1hLiJdLCAiZXJyIjogWyJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiIiwgIlBBUlRfUEVMX1RPVCJdLCAicmVzIjogWyIkMTIrMTQrMjgrNysxNis1PTgyJCBjbSJdfQ=="
  },
  {
   "id": "127a",
   "ex": 127,
   "ap": "a",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Troba l'apotema d'un hexàgon regular el costat del qual mesura:",
   "enunciat": "10 cm",
   "opcions": [
    "$5$ cm",
    "$30$ cm",
    "$10$ cm",
    "$5\\sqrt{3}\\approx8{,}66$ cm"
   ],
   "pistes": [
    "L'apotema d'un hexàgon regular és l'alçada d'un dels sis triangles equilàters de costat $L$ en què el centre el divideix.",
    "Fes servir la fórmula $a=\\dfrac{L\\sqrt3}{2}$, amb $L=10$ cm."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3Qgw6lzIGVsIGNhdGV0IGNvcnJlc3BvbmVudCBhIGxhIG1laXRhdCBkZWwgY29zdGF0LCBwZXLDsiBlbmNhcmEgZmFsdGEgbXVsdGlwbGljYXIgcGVyICRcXHNxcnR7M30kOiBsJ2Fwb3RlbWEgw6lzICRcXGRmcmFje0xcXHNxcnQzfXsyfSQsIG5vIG5vbcOpcyAkXFxkZnJhY3tMfXsyfSQuIiwgIkFxdWVzdCB2YWxvciBubyBzdXJ0IGRlIGxhIGbDs3JtdWxhICRcXGRmcmFje0xcXHNxcnQzfXsyfSQ6IHJldmlzYSBxdWUgaGFzIG11bHRpcGxpY2F0IHBlciAkXFxzcXJ0MyQgKG5vIHBlciAkMyQpIGkgaGFzIGRpdmlkaXQgcGVyICQyJC4iLCAiTCdhcG90ZW1hIGQndW4gaGV4w6Bnb24gcmVndWxhciBOTyBjb2luY2lkZWl4IGFtYiBlbCBjb3N0YXQ6IHMnb2J0w6kgYXBsaWNhbnQgUGl0w6Bnb3JlcyBhIHVuIGRlbHMgc2lzIHRyaWFuZ2xlcyBlcXVpbMOgdGVycyBlbiBxdcOoIGVsIGNlbnRyZSBlbCBkaXZpZGVpeC4iLCAiIl0sICJlcnIiOiBbIkFSUkVMX0ZBQ1RPUl9PQkxJREFUIiwgIlBPVEVOQ0lBX0RFX1NVTUEiLCAiQVBPVEVNQV9DT1NUQVRfQ09ORk9TIiwgIiJdLCAicmVzIjogWyIkYT1cXGRmcmFjezEwXFxzcXJ0M317Mn09NVxcc3FydHszfVxcYXBwcm94OHssfTY2JCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 208 217\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Hexàgon regular, costat 10 cm, amb l'apotema marcada.</title><g transform=\"translate(104.0,91.9)\"><polygon points=\"45.0,77.9 -45.0,77.9 -90.0,0.0 -45.0,-77.9 45.0,-77.9 90.0,-0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"45.0\" y1=\"80.4\" x2=\"45.0\" y2=\"97.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-45.0\" y1=\"80.4\" x2=\"-45.0\" y2=\"97.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"45.0\" y1=\"93.9\" x2=\"-45.0\" y2=\"93.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"49.0\" y1=\"89.9\" x2=\"41.0\" y2=\"97.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-41.0\" y1=\"89.9\" x2=\"-49.0\" y2=\"97.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"0.0\" y2=\"77.9\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2.5\"/><path d=\"M 9.0 77.9 L 9.0 68.9 L 0.0 68.9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"0\" y=\"108.3\" text-anchor=\"middle\" class=\"fig-etq\">10 cm</text><text x=\"-11\" y=\"42.3\" text-anchor=\"middle\" class=\"fig-etq\">?</text></g></svg>"
  },
  {
   "id": "127b",
   "ex": 127,
   "ap": "b",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Troba l'apotema d'un hexàgon regular el costat del qual mesura:",
   "enunciat": "16 cm",
   "opcions": [
    "$8$ cm",
    "$16$ cm",
    "$8\\sqrt{3}\\approx13{,}86$ cm",
    "$48$ cm"
   ],
   "pistes": [
    "Fes servir la fórmula $a=\\dfrac{L\\sqrt3}{2}$.",
    "Amb $L=16$ cm: $a=\\dfrac{16\\sqrt3}{2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3Qgw6lzICRcXGRmcmFje0x9ezJ9JCwgcGVyw7IgZW5jYXJhIGZhbHRhIG11bHRpcGxpY2FyIHBlciAkXFxzcXJ0ezN9JC4iLCAiTCdhcG90ZW1hIGQndW4gaGV4w6Bnb24gcmVndWxhciBubyBjb2luY2lkZWl4IGFtYiBlbCBjb3N0YXQ6IGNhbCBhcGxpY2FyIGxhIGbDs3JtdWxhICRhPVxcZGZyYWN7TFxcc3FydDN9ezJ9JC4iLCAiIiwgIkFxdWVzdCB2YWxvciBubyBzdXJ0IGRlIGxhIGbDs3JtdWxhICRcXGRmcmFje0xcXHNxcnQzfXsyfSQ6IHJldmlzYSBxdWUgaGFzIG11bHRpcGxpY2F0IHBlciAkXFxzcXJ0MyQgKG5vIHBlciAkMyQpIGkgaGFzIGRpdmlkaXQgcGVyICQyJC4iXSwgImVyciI6IFsiQVJSRUxfRkFDVE9SX09CTElEQVQiLCAiQVBPVEVNQV9DT1NUQVRfQ09ORk9TIiwgIiIsICJQT1RFTkNJQV9ERV9TVU1BIl0sICJyZXMiOiBbIiRhPVxcZGZyYWN7MTZcXHNxcnQzfXsyfT04XFxzcXJ0Mz04XFxzcXJ0ezN9XFxhcHByb3gxM3ssfTg2JCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 208 217\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Hexàgon regular, costat 16 cm, amb l'apotema marcada.</title><g transform=\"translate(104.0,91.9)\"><polygon points=\"45.0,77.9 -45.0,77.9 -90.0,0.0 -45.0,-77.9 45.0,-77.9 90.0,-0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"45.0\" y1=\"80.4\" x2=\"45.0\" y2=\"97.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-45.0\" y1=\"80.4\" x2=\"-45.0\" y2=\"97.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"45.0\" y1=\"93.9\" x2=\"-45.0\" y2=\"93.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"49.0\" y1=\"89.9\" x2=\"41.0\" y2=\"97.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-41.0\" y1=\"89.9\" x2=\"-49.0\" y2=\"97.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"0.0\" y2=\"77.9\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2.5\"/><path d=\"M 9.0 77.9 L 9.0 68.9 L 0.0 68.9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"0\" y=\"108.3\" text-anchor=\"middle\" class=\"fig-etq\">16 cm</text><text x=\"-11\" y=\"42.3\" text-anchor=\"middle\" class=\"fig-etq\">?</text></g></svg>"
  },
  {
   "id": "127c",
   "ex": 127,
   "ap": "c",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Troba l'apotema d'un hexàgon regular el costat del qual mesura:",
   "enunciat": "7 cm",
   "opcions": [
    "$7$ cm",
    "$\\dfrac{7\\sqrt3}{2}\\approx6{,}06$ cm",
    "$\\dfrac{7}{2\\sqrt3}\\approx2{,}02$ cm",
    "$3{,}5$ cm"
   ],
   "pistes": [
    "Fes servir la fórmula $a=\\dfrac{L\\sqrt3}{2}$.",
    "Amb $L=7$ cm: $a=\\dfrac{7\\sqrt3}{2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMJ2Fwb3RlbWEgZCd1biBoZXjDoGdvbiByZWd1bGFyIG5vIGNvaW5jaWRlaXggYW1iIGVsIGNvc3RhdDogY2FsIGFwbGljYXIgbGEgZsOzcm11bGEgJGE9XFxkZnJhY3tMXFxzcXJ0M317Mn0kLiIsICIiLCAiSGFzIGludmVydGl0IGxhIHBvc2ljacOzIGRlICRcXHNxcnQzJDogbGEgZsOzcm11bGEgw6lzICRcXGRmcmFje0xcXHNxcnQzfXsyfSQgKG11bHRpcGxpY2FudCksIG5vICRcXGRmcmFje0x9ezJcXHNxcnQzfSQgKGRpdmlkaW50KS4iLCAiQXF1ZXN0IMOpcyAkXFxkZnJhY3tMfXsyfSQsIHBlcsOyIGVuY2FyYSBmYWx0YSBtdWx0aXBsaWNhciBwZXIgJFxcc3FydHszfSQuIl0sICJlcnIiOiBbIkFQT1RFTUFfQ09TVEFUX0NPTkZPUyIsICIiLCAiSU5WRVJUSURBIiwgIkFSUkVMX0ZBQ1RPUl9PQkxJREFUIl0sICJyZXMiOiBbIiRhPVxcZGZyYWN7N1xcc3FydDN9ezJ9XFxhcHByb3g2eyx9MDYkIGNtIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 208 217\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Hexàgon regular, costat 7 cm, amb l'apotema marcada.</title><g transform=\"translate(104.0,91.9)\"><polygon points=\"45.0,77.9 -45.0,77.9 -90.0,0.0 -45.0,-77.9 45.0,-77.9 90.0,-0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"45.0\" y1=\"80.4\" x2=\"45.0\" y2=\"97.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-45.0\" y1=\"80.4\" x2=\"-45.0\" y2=\"97.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"45.0\" y1=\"93.9\" x2=\"-45.0\" y2=\"93.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"49.0\" y1=\"89.9\" x2=\"41.0\" y2=\"97.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-41.0\" y1=\"89.9\" x2=\"-49.0\" y2=\"97.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"0.0\" y2=\"77.9\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2.5\"/><path d=\"M 9.0 77.9 L 9.0 68.9 L 0.0 68.9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"0\" y=\"108.3\" text-anchor=\"middle\" class=\"fig-etq\">7 cm</text><text x=\"-11\" y=\"42.3\" text-anchor=\"middle\" class=\"fig-etq\">?</text></g></svg>"
  },
  {
   "id": "128a",
   "ex": 128,
   "ap": "a",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Un rectangle té base $AB=12$ cm i altura $AC=16$ cm. Un rombe uneix els punts mitjans dels quatre costats del rectangle. Calcula el costat del rombe.",
   "opcions": [
    "$10$ cm",
    "$14$ cm",
    "$100$ cm",
    "$20$ cm"
   ],
   "pistes": [
    "Cada costat del rombe és la hipotenusa d'un triangle rectangle de catets la meitat de la base i la meitat de l'altura del rectangle.",
    "Els catets són $\\dfrac{12}{2}=6$ cm i $\\dfrac{16}{2}=8$ cm; aplica Pitàgores."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIHN1bWF0IGRpcmVjdGFtZW50IGxlcyBtZWl0YXRzIGRlIGJhc2UgaSBhbHR1cmEgKCQ2KzgkKSBlbiBsbG9jIGQnYXBsaWNhciBQaXTDoGdvcmVzLiIsICJIYXMgY2FsY3VsYXQgJDZeMis4XjI9MTAwJCBjb3JyZWN0YW1lbnQsIHBlcsOyIHQnaGFzIGRlaXhhdCBsJ2FycmVsIHF1YWRyYWRhIGZpbmFsLiIsICJIYXMgZmV0IHNlcnZpciBsYSBiYXNlIGkgbCdhbHR1cmEgc2VuY2VyZXMgKCQxMiQgaSAkMTYkKSBlbiBsbG9jIGRlIGxlcyBzZXZlcyBNRUlUQVRTICgkNiQgaSAkOCQpOiBlbCBjb3N0YXQgZGVsIHJvbWJlIMOpcyBsYSBoaXBvdGVudXNhIGRlbCB0cmlhbmdsZSBmb3JtYXQgcGVscyBwdW50cyBtaXRqYW5zLCBubyBwZWwgcmVjdGFuZ2xlIHNlbmNlci4iXSwgImVyciI6IFsiIiwgIlNVTUFfQ0FURVRTX1NFTlNFX1FVQURSQVQiLCAiQVJSRUxfT0JMSURBREEiLCAiTUVJVEFUX09CTElEQURBIl0sICJyZXMiOiBbIkNhdGV0czogJFxcZGZyYWN7MTJ9ezJ9PTYkIGNtIGkgJFxcZGZyYWN7MTZ9ezJ9PTgkIGNtIiwgIkNvc3RhdCBkZWwgcm9tYmU6ICRcXHNxcnR7Nl4yKzheMn09XFxzcXJ0ezEwMH09MTAkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 248 232\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Rectangle de AB = 12 cm per AC = 16 cm amb el rombe format unint els punts mitjans dels quatre costats.</title><rect x=\"87\" y=\"26\" width=\"135\" height=\"180\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><polygon points=\"154.5,26 222,116 154.5,206 87,116\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2.5\"/><text x=\"154.5\" y=\"224\" text-anchor=\"middle\" class=\"fig-etq\">AB = 12 cm</text><text x=\"79\" y=\"120\" text-anchor=\"end\" class=\"fig-etq\">AC = 16 cm</text></svg>"
  },
  {
   "id": "128b",
   "ex": 128,
   "ap": "b",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "En un rectangle, dos costats consecutius es diuen $AB=12$ cm (la base) i $AC=16$ cm (l'altura), essent $A$, $B$ i $C$ tres dels vèrtexs del rectangle ($A$ i $B$ a la base, $C$ damunt de $A$). En el triangle rectangle $ABC$, quant valen el catet $AB$, el catet $AC$ i la hipotenusa $BC$?",
   "opcions": [
    "$AB=16$ cm, $AC=12$ cm, $BC=20$ cm",
    "$AB=12$ cm, $AC=16$ cm, $BC=28$ cm",
    "$AB=12$ cm, $AC=16$ cm, $BC=\\sqrt{400}$ cm sense simplificar",
    "$AB=12$ cm, $AC=16$ cm, $BC=20$ cm"
   ],
   "pistes": [
    "Els catets del triangle rectangle $ABC$ són directament els costats donats del rectangle.",
    "La hipotenusa $BC$ s'obté amb Pitàgores: $BC=\\sqrt{AB^2+AC^2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgaW50ZXJjYW52aWF0IHF1aW4gY29zdGF0IMOpcyAkQUIkIGkgcXVpbiDDqXMgJEFDJDogbCdlbnVuY2lhdCBkaXUgZXhwbMOtY2l0YW1lbnQgcXVlIGxhIGJhc2UgJEFCJCDDqXMgJDEyJCBjbSBpIGwnYWx0dXJhICRBQyQgw6lzICQxNiQgY20uIiwgIiQyOCQgc3VydCBkZSBzdW1hciAkMTIrMTYkIGRpcmVjdGFtZW50OiBsYSBoaXBvdGVudXNhIHMnb2J0w6kgYXBsaWNhbnQgUGl0w6Bnb3JlcyAoJFxcc3FydHsxMl4yKzE2XjJ9JCksIG5vIHN1bWFudCBlbHMgY2F0ZXRzLiIsICIkXFxzcXJ0ezQwMH0kIFPDjSDDqXMgY29ycmVjdGUgY29tIGEgcGFzIGludGVybWVkaSwgcGVyw7IgZXMgc2ltcGxpZmljYSBleGFjdGFtZW50IGEgJDIwJCBjbSAow6lzIHVuIHF1YWRyYXQgcGVyZmVjdGUpOiBjYWwgYWNhYmFyIGRlIHNpbXBsaWZpY2FyIGwnYXJyZWwuIiwgIiJdLCAiZXJyIjogWyJDQVRFVF9NQUxfSURFTlRJRklDQVQiLCAiU1VNQV9DQVRFVFNfU0VOU0VfUVVBRFJBVCIsICJTSU1QTElGSUNBQ0lPX0lOQ09NUExFVEEiLCAiIl0sICJyZXMiOiBbIiRCQz1cXHNxcnR7MTJeMisxNl4yfT1cXHNxcnR7NDAwfT0yMCQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 257 241\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Rectangle de AB = 12 cm per AC = 16 cm amb la diagonal marcada.</title><g transform=\"translate(107.6,14.0)\"><polygon points=\"0.0,0.0 135.0,0.0 135.0,180.0 0.0,180.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"182.5\" x2=\"0.0\" y2=\"199.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"135.0\" y1=\"182.5\" x2=\"135.0\" y2=\"199.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"196.0\" x2=\"135.0\" y2=\"196.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"192.0\" x2=\"4.0\" y2=\"200.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"131.0\" y1=\"192.0\" x2=\"139.0\" y2=\"200.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-19.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"180.0\" x2=\"-19.5\" y2=\"180.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-16.0\" y1=\"0.0\" x2=\"-16.0\" y2=\"180.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"-4.0\" x2=\"-20.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"176.0\" x2=\"-20.0\" y2=\"184.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line x1=\"0.0\" y1=\"180.0\" x2=\"135.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><text x=\"67.5\" y=\"210.4\" text-anchor=\"middle\" class=\"fig-etq\">AB = 12 cm</text><text x=\"-57\" y=\"93.4\" text-anchor=\"middle\" class=\"fig-etq\">AC = 16 cm</text><text x=\"60.1\" y=\"121.6\" text-anchor=\"middle\" class=\"fig-etq\">BC</text></g></svg>"
  },
  {
   "id": "129",
   "ex": 129,
   "ap": "",
   "bloc": "triangles",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Un rectangle de costats 15 cm i 20 cm està inscrit en una circumferència. Quant mesura el radi de la circumferència?",
   "opcions": [
    "$12{,}5$ cm",
    "$25$ cm",
    "$625$ cm",
    "$35$ cm"
   ],
   "pistes": [
    "Quan un rectangle està inscrit en una circumferència, la seva diagonal coincideix amb un diàmetre.",
    "Calcula primer la diagonal amb Pitàgores, $d=\\sqrt{15^2+20^2}$, i després divideix-la per $2$ per obtenir el radi."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0IMOpcyBlbCBEScOATUVUUkUgZGUgbGEgY2lyY3VtZmVyw6huY2lhIChsYSBkaWFnb25hbCBkZWwgcmVjdGFuZ2xlKSwgbm8gZWwgcmFkaTogZWwgcmFkaSDDqXMgbGEgbWVpdGF0IGRlbCBkacOgbWV0cmUuIiwgIkhhcyBjYWxjdWxhdCAkMTVeMisyMF4yPTYyNSQgY29ycmVjdGFtZW50LCBwZXLDsiB0J2hhcyBkZWl4YXQgbCdhcnJlbCBxdWFkcmFkYSBwZXIgdHJvYmFyIGxhIGRpYWdvbmFsIChpIGVuY2FyYSBmYWx0YXJpYSBkaXZpZGlyIHBlciAkMiQgcGVyIG9idGVuaXIgZWwgcmFkaSkuIiwgIkhhcyBzdW1hdCBkaXJlY3RhbWVudCBlbHMgZG9zIGNvc3RhdHMgKCQxNSsyMCQpIGVuIGxsb2MgZCdhcGxpY2FyIFBpdMOgZ29yZXMgcGVyIHRyb2JhciBsYSBkaWFnb25hbC4iXSwgImVyciI6IFsiIiwgIk1FSVRBVF9PQkxJREFEQSIsICJBUlJFTF9PQkxJREFEQSIsICJTVU1BX0NBVEVUU19TRU5TRV9RVUFEUkFUIl0sICJyZXMiOiBbIkRpYWdvbmFsOiAkXFxzcXJ0ezE1XjIrMjBeMn09XFxzcXJ0ezYyNX09MjUkIiwgIlJhZGk6ICRcXGRmcmFjezI1fXsyfT0xMnssfTUkIGNtIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 269 196\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Rectangle de 20 cm per 15 cm amb la diagonal marcada.</title><g transform=\"translate(74.3,14.0)\"><polygon points=\"0.0,0.0 180.0,0.0 180.0,135.0 0.0,135.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"137.5\" x2=\"0.0\" y2=\"154.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"180.0\" y1=\"137.5\" x2=\"180.0\" y2=\"154.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"151.0\" x2=\"180.0\" y2=\"151.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"147.0\" x2=\"4.0\" y2=\"155.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"176.0\" y1=\"147.0\" x2=\"184.0\" y2=\"155.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-19.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"135.0\" x2=\"-19.5\" y2=\"135.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-16.0\" y1=\"0.0\" x2=\"-16.0\" y2=\"135.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"-4.0\" x2=\"-20.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"131.0\" x2=\"-20.0\" y2=\"139.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line x1=\"0.0\" y1=\"135.0\" x2=\"180.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><text x=\"90\" y=\"165.4\" text-anchor=\"middle\" class=\"fig-etq\">20 cm</text><text x=\"-42\" y=\"70.9\" text-anchor=\"middle\" class=\"fig-etq\">15 cm</text><text x=\"96.6\" y=\"79.7\" text-anchor=\"middle\" class=\"fig-etq\">x</text></g></svg>"
  }
 ]
};
