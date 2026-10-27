/* Generat per tools/build.py — no editeu aquest fitxer a mà. */
window.FULL = {
 "full": 9,
 "titol": "Full 9 — Cossos geomètrics",
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
  "DIMENSIO_EXPONENT_MAL": "L'exponent no correspon a la dimensió: les àrees van al quadrat i els volums, al cub. Comprova també les unitats del resultat.",
  "FACTOR_OBLIDAT": "T'has deixat pel camí un dels factors en combinar els exponents.",
  "MEITAT_OBLIDADA": "Hi ha un factor $2$ pel mig que t'has deixat: radi i diàmetre, semibase i base, semidiagonal i diagonal. Comprova quina de les dues et demanen.",
  "ORDRE_MULTIPLICACIO_DIVISIO": "La divisió i la multiplicació tenen la mateixa prioritat i es fan d'esquerra a dreta: no es pot agrupar la multiplicació primer perquè \"queda més bé\".",
  "PAPERS_INTERCANVIATS": "Has intercanviat les dues magnituds: torna a llegir quina depèn de quina a l'enunciat.",
  "PAS_INTERMEDI_PER_RESPOSTA": "El valor que has triat és correcte, però és un pas intermedi, no el que et demanen. Torna a llegir la pregunta i mira quina magnitud has d'acabar donant: sovint només falta una operació més.",
  "PI_OBLIDAT": "Falta $\\pi$: qualsevol longitud, àrea o volum que surti d'un cercle en porta. La circumferència és $2\\pi r$ i el cercle, $\\pi r^2$.",
  "PRODUCTE_MAL": "Has multiplicat els dos nombres que et donaven en comptes d'aïllar la incògnita amb els productes creuats.",
  "SIGNE_TERME_INDEPENDENT": "Revisa el signe del terme independent (el que no porta $x$): és fàcil perdre'l en sumar o restar.",
  "SUMA_DE_PARTS_INCOMPLETA": "L'àrea total d'un cos és la suma de TOTES les seves cares. Has calculat bé una part (la base, o la lateral) però encara falta sumar-hi l'altra.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau."
 },
 "items": [
  {
   "id": "364a",
   "ex": 364,
   "ap": "a",
   "bloc": "cossos_rodons",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula l'àrea lateral d'aquest cilindre. Recorda: $A_{\\text{lat}}=2\\pi r h$, i pren $\\pi\\approx3{,}14$.",
   "enunciat": "Radi $r=5$ cm; altura $h=10$ cm.",
   "opcions": [
    "$314$ cm$^2$",
    "$100$ cm$^2$",
    "$785$ cm$^3$",
    "$157$ cm$^2$"
   ],
   "pistes": [
    "$2\\cdot3{,}14\\cdot5\\cdot10$.",
    "$2\\cdot5\\cdot10=100$, i $100\\cdot3{,}14$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGZldCAkMlxcY2RvdDVcXGNkb3QxMCQuIEZhbHRhICRcXHBpJDogcXVhbHNldm9sIGxvbmdpdHVkLCDDoHJlYSBvIHZvbHVtIHF1ZSBzdXJ0aSBkJ3VuIGNlcmNsZSBlbiBwb3J0YS4gTGEgY2lyY3VtZmVyw6huY2lhIMOpcyAkMlxccGkgciQgaSBlbCBjZXJjbGUsICRcXHBpIHJeMiQuIiwgIkhhcyBjYWxjdWxhdCBlbCB2b2x1bSwgJFxccGkgcl4yIGgkLiBMJ8OgcmVhIGxhdGVyYWwgw6lzIGxhIHN1cGVyZsOtY2llIGRlbCBjb3N0YXQ6ICQyXFxwaSByIGgkLCBlbiBjbSReMiQuIiwgIkhhcyBmZXQgJFxccGkgciBoJDogbGEgZsOzcm11bGEgcG9ydGEgdW4gJDIkIGFsIGRhdmFudC4gSGkgaGEgdW4gZmFjdG9yICQyJCBwZWwgbWlnIHF1ZSB0J2hhcyBkZWl4YXQ6IHJhZGkgaSBkacOgbWV0cmUsIHNlbWliYXNlIGkgYmFzZSwgc2VtaWRpYWdvbmFsIGkgZGlhZ29uYWwuIENvbXByb3ZhIHF1aW5hIGRlIGxlcyBkdWVzIGV0IGRlbWFuZW4uIl0sICJlcnIiOiBbIiIsICJQSV9PQkxJREFUIiwgIkRJTUVOU0lPX0VYUE9ORU5UX01BTCIsICJNRUlUQVRfT0JMSURBREEiXSwgInJlcyI6IFsiJEFfe1xcdGV4dHtsYXR9fT0yXFxwaSByIGhcXGFwcHJveDJcXGNkb3Qzeyx9MTRcXGNkb3Q1XFxjZG90MTA9MzE0JCBjbSReMiQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 197 164\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Cilindre recte, dibuixat en perspectiva.</title><g transform=\"translate(66.0,29.6)\"><path d=\"M -52.0 104.0 A 52.0 15.6 0 0 0 52.0 104.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M -52.0 104.0 A 52.0 15.6 0 0 1 52.0 104.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><rect x=\"-52.0\" y=\"0.0\" width=\"104.0\" height=\"104.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"none\"/><line x1=\"-52.0\" y1=\"0.0\" x2=\"-52.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"52.0\" y1=\"0.0\" x2=\"52.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"2\"/><ellipse cx=\"0.0\" cy=\"0.0\" rx=\"52.0\" ry=\"15.6\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"52.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"2.5\" x2=\"0.0\" y2=\"33.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"52.0\" y1=\"2.5\" x2=\"52.0\" y2=\"33.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"29.6\" x2=\"52.0\" y2=\"29.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"25.6\" x2=\"4.0\" y2=\"33.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"48.0\" y1=\"25.6\" x2=\"56.0\" y2=\"33.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"54.5\" y1=\"0.0\" x2=\"75.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"54.5\" y1=\"104.0\" x2=\"75.5\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"72.0\" y1=\"0.0\" x2=\"72.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"68.0\" y1=\"-4.0\" x2=\"76.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"68.0\" y1=\"100.0\" x2=\"76.0\" y2=\"108.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"26\" y=\"43.5\" text-anchor=\"middle\" class=\"fig-etq petita\">5 cm</text><text x=\"98\" y=\"55.4\" text-anchor=\"middle\" class=\"fig-etq\">10 cm</text></g></svg>"
  },
  {
   "id": "364b",
   "ex": 364,
   "ap": "b",
   "bloc": "cossos_rodons",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula l'àrea lateral d'aquest cilindre. Recorda: $A_{\\text{lat}}=2\\pi r h$, i pren $\\pi\\approx3{,}14$.",
   "enunciat": "Radi $r=3$ cm; altura $h=10$ cm.",
   "opcions": [
    "$60$ cm$^2$",
    "$94{,}2$ cm$^2$",
    "$282{,}6$ cm$^3$",
    "$188{,}4$ cm$^2$"
   ],
   "pistes": [
    "$2\\cdot3{,}14\\cdot3\\cdot10$.",
    "$2\\cdot3\\cdot10=60$, i $60\\cdot3{,}14$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgZmV0ICQyXFxjZG90M1xcY2RvdDEwJC4gRmFsdGEgJFxccGkkOiBxdWFsc2V2b2wgbG9uZ2l0dWQsIMOgcmVhIG8gdm9sdW0gcXVlIHN1cnRpIGQndW4gY2VyY2xlIGVuIHBvcnRhLiBMYSBjaXJjdW1mZXLDqG5jaWEgw6lzICQyXFxwaSByJCBpIGVsIGNlcmNsZSwgJFxccGkgcl4yJC4iLCAiSGFzIGZldCAkXFxwaSByIGgkOiBsYSBmw7NybXVsYSBwb3J0YSB1biAkMiQgYWwgZGF2YW50LiBIaSBoYSB1biBmYWN0b3IgJDIkIHBlbCBtaWcgcXVlIHQnaGFzIGRlaXhhdDogcmFkaSBpIGRpw6BtZXRyZSwgc2VtaWJhc2UgaSBiYXNlLCBzZW1pZGlhZ29uYWwgaSBkaWFnb25hbC4gQ29tcHJvdmEgcXVpbmEgZGUgbGVzIGR1ZXMgZXQgZGVtYW5lbi4iLCAiSGFzIGNhbGN1bGF0IGVsIHZvbHVtLCAkXFxwaSByXjIgaCQuIEwnw6ByZWEgbGF0ZXJhbCDDqXMgbGEgc3VwZXJmw61jaWUgZGVsIGNvc3RhdDogJDJcXHBpIHIgaCQsIGVuIGNtJF4yJC4iLCAiIl0sICJlcnIiOiBbIlBJX09CTElEQVQiLCAiTUVJVEFUX09CTElEQURBIiwgIkRJTUVOU0lPX0VYUE9ORU5UX01BTCIsICIiXSwgInJlcyI6IFsiJEFfe1xcdGV4dHtsYXR9fT0yXFxwaSByIGhcXGFwcHJveDJcXGNkb3Qzeyx9MTRcXGNkb3QzXFxjZG90MTA9MTg4eyx9NCQgY20kXjIkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 197 164\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Cilindre recte, dibuixat en perspectiva.</title><g transform=\"translate(66.0,29.6)\"><path d=\"M -52.0 104.0 A 52.0 15.6 0 0 0 52.0 104.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M -52.0 104.0 A 52.0 15.6 0 0 1 52.0 104.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><rect x=\"-52.0\" y=\"0.0\" width=\"104.0\" height=\"104.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"none\"/><line x1=\"-52.0\" y1=\"0.0\" x2=\"-52.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"52.0\" y1=\"0.0\" x2=\"52.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"2\"/><ellipse cx=\"0.0\" cy=\"0.0\" rx=\"52.0\" ry=\"15.6\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"52.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"2.5\" x2=\"0.0\" y2=\"33.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"52.0\" y1=\"2.5\" x2=\"52.0\" y2=\"33.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"29.6\" x2=\"52.0\" y2=\"29.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"25.6\" x2=\"4.0\" y2=\"33.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"48.0\" y1=\"25.6\" x2=\"56.0\" y2=\"33.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"54.5\" y1=\"0.0\" x2=\"75.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"54.5\" y1=\"104.0\" x2=\"75.5\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"72.0\" y1=\"0.0\" x2=\"72.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"68.0\" y1=\"-4.0\" x2=\"76.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"68.0\" y1=\"100.0\" x2=\"76.0\" y2=\"108.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"26\" y=\"43.5\" text-anchor=\"middle\" class=\"fig-etq petita\">3 cm</text><text x=\"98\" y=\"55.4\" text-anchor=\"middle\" class=\"fig-etq\">10 cm</text></g></svg>"
  },
  {
   "id": "185a",
   "ex": 185,
   "ap": "a",
   "bloc": "cossos_rodons",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "Calcula l'àrea total d'un cilindre de radi $7$ m i altura $10$ m.",
   "opcions": [
    "$\\approx439{,}6$ m$^2$",
    "$\\approx747{,}32$ m$^2$",
    "$\\approx593{,}46$ m$^2$",
    "$\\approx373{,}66$ m$^2$"
   ],
   "pistes": [
    "Àrea de la base: $A_{\\text{base}}=\\pi r^2\\approx153{,}86$ m$^2$.",
    "Àrea lateral: $A_{\\text{lateral}}=2\\pi rh\\approx439{,}6$ m$^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igw6lzIG5vbcOpcyBsJ8OgcmVhIGxhdGVyYWw6IGVuY2FyYSBmYWx0YSBzdW1hci1oaSBsZXMgZHVlcyBiYXNlcyBjaXJjdWxhcnMuIiwgIiIsICJTZW1ibGEgcXVlIG5vbcOpcyBoYXMgY29tcHRhdCBVTkEgYmFzZSBjaXJjdWxhciBlbiBsbG9jIGRlIGR1ZXMuIiwgIk5vIGNvaW5jaWRlaXggYW1iICQyXFxwaVxcY2RvdDdeMisyXFxwaVxcY2RvdDdcXGNkb3QxMCQ6IHNlbWJsYSBxdWUgdCdoYXMgZGVpeGF0IHVuIGZhY3RvciAkMiQgZW4gYWxndW4gZGVscyBkb3MgdGVybWVzLiJdLCAiZXJyIjogWyJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIiIsICJGQUNUT1JfT0JMSURBVCIsICJPUkRSRV9NVUxUSVBMSUNBQ0lPX0RJVklTSU8iXSwgInJlcyI6IFsiJEFfe1xcdGV4dHtiYXNlfX09XFxwaVxcY2RvdDdeMlxcYXBwcm94MTUzeyx9ODYkIG0kXjIkIiwgIiRBX3tcXHRleHR7bGF0ZXJhbH19PTJcXHBpXFxjZG90N1xcY2RvdDEwXFxhcHByb3g0Mzl7LH02JCBtJF4yJCIsICIkQV97XFx0ZXh0e3RvdGFsfX1cXGFwcHJveDJcXGNkb3QxNTN7LH04Nis0Mzl7LH02XFxhcHByb3g3NDd7LH0zMiQgbSReMiQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 187 164\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Cilindre recte, dibuixat en perspectiva.</title><g transform=\"translate(66.0,29.6)\"><path d=\"M -52.0 104.0 A 52.0 15.6 0 0 0 52.0 104.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M -52.0 104.0 A 52.0 15.6 0 0 1 52.0 104.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><rect x=\"-52.0\" y=\"0.0\" width=\"104.0\" height=\"104.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"none\"/><line x1=\"-52.0\" y1=\"0.0\" x2=\"-52.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"52.0\" y1=\"0.0\" x2=\"52.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"2\"/><ellipse cx=\"0.0\" cy=\"0.0\" rx=\"52.0\" ry=\"15.6\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"52.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"2.5\" x2=\"0.0\" y2=\"33.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"52.0\" y1=\"2.5\" x2=\"52.0\" y2=\"33.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"29.6\" x2=\"52.0\" y2=\"29.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"25.6\" x2=\"4.0\" y2=\"33.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"48.0\" y1=\"25.6\" x2=\"56.0\" y2=\"33.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"54.5\" y1=\"0.0\" x2=\"75.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"54.5\" y1=\"104.0\" x2=\"75.5\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"72.0\" y1=\"0.0\" x2=\"72.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"68.0\" y1=\"-4.0\" x2=\"76.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"68.0\" y1=\"100.0\" x2=\"76.0\" y2=\"108.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"26\" y=\"43.5\" text-anchor=\"middle\" class=\"fig-etq petita\">7 m</text><text x=\"92\" y=\"55.4\" text-anchor=\"middle\" class=\"fig-etq\">10 m</text></g></svg>"
  },
  {
   "id": "185b",
   "ex": 185,
   "ap": "b",
   "bloc": "cossos_rodons",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "Calcula l'àrea total d'un cilindre de diàmetre de la base $12$ m i altura $5$ m.",
   "opcions": [
    "$\\approx188{,}4$ m$^2$",
    "$\\approx414{,}48$ m$^2$",
    "$\\approx301{,}44$ m$^2$",
    "$\\approx583{,}36$ m$^2$"
   ],
   "pistes": [
    "El radi és la meitat del diàmetre: $12:2=6$ m.",
    "Àrea de la base: $A_{\\text{base}}=\\pi r^2\\approx113{,}04$ m$^2$.",
    "Àrea lateral: $A_{\\text{lateral}}=2\\pi rh\\approx188{,}4$ m$^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igw6lzIG5vbcOpcyBsJ8OgcmVhIGxhdGVyYWw6IGVuY2FyYSBmYWx0YSBzdW1hci1oaSBsZXMgZHVlcyBiYXNlcyBjaXJjdWxhcnMuIiwgIiIsICJTZW1ibGEgcXVlIG5vbcOpcyBoYXMgY29tcHRhdCBVTkEgYmFzZSBjaXJjdWxhciBlbiBsbG9jIGRlIGR1ZXMuIiwgIlNlbWJsYSBxdWUgaGFzIGZldCBzZXJ2aXIgZWwgZGnDoG1ldHJlICgkMTIkIG0pIGRpcmVjdGFtZW50IGNvbSBhIHJhZGk6IGVsIHJhZGkgw6lzIGxhIG1laXRhdCBkZWwgZGnDoG1ldHJlLCAkNiQgbS4iXSwgImVyciI6IFsiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiLCAiRkFDVE9SX09CTElEQVQiLCAiU0lHTkVfVEVSTUVfSU5ERVBFTkRFTlQiXSwgInJlcyI6IFsiJHI9MTI6Mj02JCBtIiwgIiRBX3tcXHRleHR7YmFzZX19PVxccGlcXGNkb3Q2XjJcXGFwcHJveDExM3ssfTA0JCBtJF4yJCIsICIkQV97XFx0ZXh0e2xhdGVyYWx9fT0yXFxwaVxcY2RvdDZcXGNkb3Q1XFxhcHByb3gxODh7LH00JCBtJF4yJCIsICIkQV97XFx0ZXh0e3RvdGFsfX1cXGFwcHJveDJcXGNkb3QxMTN7LH0wNCsxODh7LH00XFxhcHByb3g0MTR7LH00OCQgbSReMiQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 178 164\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Cilindre recte, dibuixat en perspectiva.</title><g transform=\"translate(66.0,29.6)\"><path d=\"M -52.0 104.0 A 52.0 15.6 0 0 0 52.0 104.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M -52.0 104.0 A 52.0 15.6 0 0 1 52.0 104.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><rect x=\"-52.0\" y=\"0.0\" width=\"104.0\" height=\"104.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"none\"/><line x1=\"-52.0\" y1=\"0.0\" x2=\"-52.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"52.0\" y1=\"0.0\" x2=\"52.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"2\"/><ellipse cx=\"0.0\" cy=\"0.0\" rx=\"52.0\" ry=\"15.6\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"-52.0\" y1=\"0.0\" x2=\"52.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"-52.0\" y1=\"2.5\" x2=\"-52.0\" y2=\"33.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"52.0\" y1=\"2.5\" x2=\"52.0\" y2=\"33.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-52.0\" y1=\"29.6\" x2=\"52.0\" y2=\"29.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-56.0\" y1=\"25.6\" x2=\"-48.0\" y2=\"33.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"48.0\" y1=\"25.6\" x2=\"56.0\" y2=\"33.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"54.5\" y1=\"0.0\" x2=\"75.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"54.5\" y1=\"104.0\" x2=\"75.5\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"72.0\" y1=\"0.0\" x2=\"72.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"68.0\" y1=\"-4.0\" x2=\"76.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"68.0\" y1=\"100.0\" x2=\"76.0\" y2=\"108.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"0\" y=\"43.5\" text-anchor=\"middle\" class=\"fig-etq petita\">12 m</text><text x=\"87\" y=\"55.4\" text-anchor=\"middle\" class=\"fig-etq\">5 m</text></g></svg>"
  },
  {
   "id": "188",
   "ex": 188,
   "ap": "",
   "bloc": "cossos_rodons",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "Un con té $4$ cm de radi de la base i $15$ cm de generatriu. Calcula la longitud de l'arc que descriu la base en desplegar la superfície lateral del con (és a dir, la longitud de la circumferència de la base).",
   "opcions": [
    "$\\approx94{,}2$ cm",
    "$19$ cm",
    "$\\approx25{,}12$ cm",
    "$\\approx12{,}56$ cm"
   ],
   "pistes": [
    "La circumferència de la base d'un con té radi igual al radi del con, $4$ cm (la generatriu no hi intervé).",
    "Longitud: $L=2\\pi r$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3QgdmFsb3IgZmEgc2VydmlyIGxhIGdlbmVyYXRyaXUgKCQxNSQgY20pIGNvbSBhIHJhZGk6IGxhIGxvbmdpdHVkIGRlIGxhIGNpcmN1bWZlcsOobmNpYSBkZSBsYSBiYXNlIGRlcMOobiBkZWwgcmFkaSBkZSBsYSBiYXNlICgkNCQgY20pLCBubyBkZSBsYSBnZW5lcmF0cml1LiIsICJBcXVlc3QgdmFsb3Igbm8gZmEgc2VydmlyICRcXHBpJDogbGEgbG9uZ2l0dWQgZCd1bmEgY2lyY3VtZmVyw6huY2lhIHNlbXByZSDDqXMgJDJcXHBpIHIkLiIsICIiLCAiTm8gY29pbmNpZGVpeCBhbWIgJDJcXHBpXFxjZG90NCQ6IHJldmlzYSBlbCBwcm9kdWN0ZSBhbWIgJFxccGlcXGFwcHJveDN7LH0xNCQuIl0sICJlcnIiOiBbIkZBQ1RPUl9PQkxJREFUIiwgIlBJX09CTElEQVQiLCAiIiwgIlBST0RVQ1RFX01BTCJdLCAicmVzIjogWyIkTD0yXFxwaSByPTJcXGNkb3Qzeyx9MTRcXGNkb3Q0JCIsICIkTFxcYXBwcm94MjV7LH0xMiQgY20iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 168 156\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Con recte, dibuixat en perspectiva.</title><g transform=\"translate(66.0,14.0)\"><path d=\"M -52.0 112.0 A 52.0 15.6 0 0 0 52.0 112.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M -52.0 112.0 A 52.0 15.6 0 0 1 52.0 112.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><polygon points=\"0.0,0.0 -52.0,112.0 52.0,112.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M -52.0 112.0 A 52.0 15.6 0 0 0 52.0 112.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M -52.0 112.0 A 52.0 15.6 0 0 1 52.0 112.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"0.0\" y1=\"112.0\" x2=\"52.0\" y2=\"112.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"109.5\" x2=\"0.0\" y2=\"78.9\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"52.0\" y1=\"109.5\" x2=\"52.0\" y2=\"78.9\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"82.4\" x2=\"52.0\" y2=\"82.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"86.4\" x2=\"4.0\" y2=\"78.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"48.0\" y1=\"86.4\" x2=\"56.0\" y2=\"78.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"52.0\" y2=\"112.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-crida\" x1=\"26.0\" y1=\"82.4\" x2=\"58.8\" y2=\"110.9\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/><text x=\"73.2\" y=\"119.5\" text-anchor=\"middle\" class=\"fig-etq\">4 cm</text><text x=\"49.6\" y=\"48.4\" text-anchor=\"middle\" class=\"fig-etq\">15 cm</text></g></svg>"
  },
  {
   "id": "184",
   "ex": 184,
   "ap": "",
   "bloc": "cossos_rodons",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Un cilindre té $9$ cm d'altura i $6$ cm de diàmetre de la base. En dibuixar-ne el desenvolupament pla, el rectangle lateral té una amplada igual a la longitud de la circumferència de la base. Calcula aquesta longitud.",
   "opcions": [
    "$54$ cm",
    "$\\approx9{,}42$ cm",
    "$\\approx28{,}26$ cm",
    "$\\approx18{,}84$ cm"
   ],
   "pistes": [
    "El diàmetre és $6$ cm, així que el radi és $3$ cm.",
    "La longitud de la circumferència és $L=2\\pi r$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igbm8gZmEgc2VydmlyICRcXHBpJDogbGEgbG9uZ2l0dWQgZCd1bmEgY2lyY3VtZmVyw6huY2lhIHNlbXByZSDDqXMgJDJcXHBpIHIkLCBubyB1biBzaW1wbGUgcHJvZHVjdGUgZGUgbm9tYnJlcyBlbnRlcnMuIiwgIkhhcyBmZXQgc2VydmlyIGVsIHJhZGkgKCQzJCBjbSkgZW4gbGxvYyBkZWwgZGnDoG1ldHJlIGEgbGEgZsOzcm11bGE6IGxhIGxvbmdpdHVkIMOpcyAkTD0yXFxwaSByPVxccGkgZCQsIGNvbXByb3ZhIHF1ZSBtdWx0aXBsaXF1ZXMgcGVyICQyJCBlbCByYWRpLCBvIGRpcmVjdGFtZW50IHBlbCBkacOgbWV0cmUuIiwgIk5vIGNvaW5jaWRlaXggYW1iICQyXFxwaVxcY2RvdDMkOiByZXZpc2EgZWwgcHJvZHVjdGUgcGFzIGEgcGFzIGFtYiAkXFxwaVxcYXBwcm94M3ssfTE0JC4iLCAiIl0sICJlcnIiOiBbIlBJX09CTElEQVQiLCAiRkFDVE9SX09CTElEQVQiLCAiUFJPRFVDVEVfTUFMIiwgIiJdLCAicmVzIjogWyIkTD0yXFxwaSByPTJcXGNkb3Qzeyx9MTRcXGNkb3QzJCIsICIkTFxcYXBwcm94MTh7LH04NCQgY20iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 187 164\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Cilindre recte, dibuixat en perspectiva.</title><g transform=\"translate(66.0,29.6)\"><path d=\"M -52.0 104.0 A 52.0 15.6 0 0 0 52.0 104.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M -52.0 104.0 A 52.0 15.6 0 0 1 52.0 104.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><rect x=\"-52.0\" y=\"0.0\" width=\"104.0\" height=\"104.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"none\"/><line x1=\"-52.0\" y1=\"0.0\" x2=\"-52.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"52.0\" y1=\"0.0\" x2=\"52.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"2\"/><ellipse cx=\"0.0\" cy=\"0.0\" rx=\"52.0\" ry=\"15.6\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"-52.0\" y1=\"0.0\" x2=\"52.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"-52.0\" y1=\"2.5\" x2=\"-52.0\" y2=\"33.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"52.0\" y1=\"2.5\" x2=\"52.0\" y2=\"33.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-52.0\" y1=\"29.6\" x2=\"52.0\" y2=\"29.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-56.0\" y1=\"25.6\" x2=\"-48.0\" y2=\"33.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"48.0\" y1=\"25.6\" x2=\"56.0\" y2=\"33.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"54.5\" y1=\"0.0\" x2=\"75.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"54.5\" y1=\"104.0\" x2=\"75.5\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"72.0\" y1=\"0.0\" x2=\"72.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"68.0\" y1=\"-4.0\" x2=\"76.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"68.0\" y1=\"100.0\" x2=\"76.0\" y2=\"108.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"0\" y=\"43.5\" text-anchor=\"middle\" class=\"fig-etq petita\">6 cm</text><text x=\"92\" y=\"55.4\" text-anchor=\"middle\" class=\"fig-etq\">9 cm</text></g></svg>"
  },
  {
   "id": "189",
   "ex": 189,
   "ap": "",
   "bloc": "cossos_rodons",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Calcula l'àrea total d'un con de $8$ cm de diàmetre de la base i $12$ cm de generatriu.",
   "opcions": [
    "$\\approx200{,}96$ cm$^2$",
    "$\\approx50{,}24$ cm$^2$",
    "$\\approx552{,}64$ cm$^2$",
    "$\\approx150{,}72$ cm$^2$"
   ],
   "pistes": [
    "El radi de la base és la meitat del diàmetre: $4$ cm.",
    "$A_{\\text{base}}=\\pi r^2\\approx50{,}24$ cm$^2$; $A_{\\text{lateral}}=\\pi rg\\approx150{,}72$ cm$^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0YSDDqXMgbm9tw6lzIGwnw6ByZWEgZGUgbGEgYmFzZTogZW5jYXJhIGZhbHRhIHN1bWFyLWhpIGwnw6ByZWEgbGF0ZXJhbC4iLCAiU2VtYmxhIHF1ZSBoYXMgZmV0IHNlcnZpciBlbCBkacOgbWV0cmUgKCQ4JCBjbSkgZGlyZWN0YW1lbnQgY29tIGEgcmFkaTogZWwgcmFkaSBkZSBsYSBiYXNlIMOpcyBsYSBtZWl0YXQgZGVsIGRpw6BtZXRyZSwgJDQkIGNtLiIsICJBcXVlc3QgdmFsb3Igw6lzIG5vbcOpcyBsJ8OgcmVhIGxhdGVyYWw6IGVuY2FyYSBmYWx0YSBzdW1hci1oaSBsJ8OgcmVhIGRlIGxhIGJhc2UgY2lyY3VsYXIuIl0sICJlcnIiOiBbIiIsICJTVU1BX0RFX1BBUlRTX0lOQ09NUExFVEEiLCAiRkFDVE9SX09CTElEQVQiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyJdLCAicmVzIjogWyIkcj04OjI9NCQgY20iLCAiJEFfe1xcdGV4dHtiYXNlfX09XFxwaVxcY2RvdDReMlxcYXBwcm94NTB7LH0yNCQgY20kXjIkIiwgIiRBX3tcXHRleHR7bGF0ZXJhbH19PVxccGlcXGNkb3Q0XFxjZG90MTJcXGFwcHJveDE1MHssfTcyJCBjbSReMiQiLCAiJEFfe1xcdGV4dHt0b3RhbH19XFxhcHByb3g1MHssfTI0KzE1MHssfTcyXFxhcHByb3gyMDB7LH05NiQgY20kXjIkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 148 156\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Con recte, dibuixat en perspectiva.</title><g transform=\"translate(66.0,14.0)\"><path d=\"M -52.0 112.0 A 52.0 15.6 0 0 0 52.0 112.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M -52.0 112.0 A 52.0 15.6 0 0 1 52.0 112.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><polygon points=\"0.0,0.0 -52.0,112.0 52.0,112.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M -52.0 112.0 A 52.0 15.6 0 0 0 52.0 112.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M -52.0 112.0 A 52.0 15.6 0 0 1 52.0 112.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"-52.0\" y1=\"112.0\" x2=\"52.0\" y2=\"112.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"-52.0\" y1=\"109.5\" x2=\"-52.0\" y2=\"78.9\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"52.0\" y1=\"109.5\" x2=\"52.0\" y2=\"78.9\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-52.0\" y1=\"82.4\" x2=\"52.0\" y2=\"82.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-56.0\" y1=\"86.4\" x2=\"-48.0\" y2=\"78.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"48.0\" y1=\"86.4\" x2=\"56.0\" y2=\"78.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"52.0\" y2=\"112.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><text x=\"0\" y=\"74.8\" text-anchor=\"middle\" class=\"fig-etq\">8 cm</text><text x=\"49.6\" y=\"48.4\" text-anchor=\"middle\" class=\"fig-etq\">12 cm</text></g></svg>"
  },
  {
   "id": "190",
   "ex": 190,
   "ap": "",
   "bloc": "cossos_rodons",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Un con té $13$ cm de generatriu i $5$ cm de radi de la base. Calcula la seva altura.",
   "opcions": [
    "$\\approx13{,}93$ cm",
    "$8$ cm",
    "$12$ cm",
    "$18$ cm"
   ],
   "pistes": [
    "En un con, la generatriu $g$, el radi $r$ i l'altura $h$ compleixen $g^2=r^2+h^2$ (Pitàgores).",
    "Aïlla $h$: $h=\\sqrt{g^2-r^2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJObyBjb2luY2lkZWl4IGFtYiAkXFxzcXJ0ezEzXjItNV4yfSQ6IGNvbXByb3ZhIHF1ZSByZXN0ZXMgJHJeMiQgZGUgJGdeMiQgKG5vIHF1ZSBlbHMgc3VtaXMpIGFiYW5zIGRlIGZlciBsJ2FycmVsLiIsICJBcXVlc3QgdmFsb3Igc3VydCBkZSAkMTMtNSQ6IGxhIHJlbGFjacOzIGNvcnJlY3RhIGVudHJlIGFsdHVyYSwgcmFkaSBpIGdlbmVyYXRyaXUgw6lzIHBpdGFnw7JyaWNhLCAkZ14yPXJeMitoXjIkLCBubyB1bmEgc2ltcGxlIHJlc3RhLiIsICIiLCAiSGFzIHN1bWF0IGdlbmVyYXRyaXUgaSByYWRpICgkMTMrNSQpIGVuIGxsb2MgZCdhcGxpY2FyIFBpdMOgZ29yZXM6IGwnYWx0dXJhLCBlbCByYWRpIGkgbGEgZ2VuZXJhdHJpdSBmb3JtZW4gdW4gdHJpYW5nbGUgcmVjdGFuZ2xlIGFtYiBsYSBnZW5lcmF0cml1IGNvbSBhIGhpcG90ZW51c2EuIl0sICJlcnIiOiBbIkFSUkVMX01BTF9BUExJQ0FEQSIsICJTSUdORV9URVJNRV9JTkRFUEVOREVOVCIsICIiLCAiU0lHTkVfVEVSTUVfSU5ERVBFTkRFTlQiXSwgInJlcyI6IFsiJGg9XFxzcXJ0ezEzXjItNV4yfT1cXHNxcnR7MTY5LTI1fT1cXHNxcnR7MTQ0fSQiLCAiJGg9MTIkIGNtIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 168 156\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Con recte, dibuixat en perspectiva.</title><g transform=\"translate(66.0,14.0)\"><path d=\"M -52.0 112.0 A 52.0 15.6 0 0 0 52.0 112.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M -52.0 112.0 A 52.0 15.6 0 0 1 52.0 112.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><polygon points=\"0.0,0.0 -52.0,112.0 52.0,112.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M -52.0 112.0 A 52.0 15.6 0 0 0 52.0 112.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M -52.0 112.0 A 52.0 15.6 0 0 1 52.0 112.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"0.0\" y1=\"112.0\" x2=\"52.0\" y2=\"112.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"109.5\" x2=\"0.0\" y2=\"78.9\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"52.0\" y1=\"109.5\" x2=\"52.0\" y2=\"78.9\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"82.4\" x2=\"52.0\" y2=\"82.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"86.4\" x2=\"4.0\" y2=\"78.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"48.0\" y1=\"86.4\" x2=\"56.0\" y2=\"78.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"52.0\" y2=\"112.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-crida\" x1=\"26.0\" y1=\"82.4\" x2=\"58.8\" y2=\"110.9\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/><text x=\"73.2\" y=\"119.5\" text-anchor=\"middle\" class=\"fig-etq\">5 cm</text><text x=\"49.6\" y=\"48.4\" text-anchor=\"middle\" class=\"fig-etq\">13 cm</text></g></svg>"
  },
  {
   "id": "191",
   "ex": 191,
   "ap": "",
   "bloc": "cossos_rodons",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "L'àrea d'una esfera és $803{,}84$ cm$^2$. Calcula el seu radi.",
   "opcions": [
    "$\\approx15{,}98$ cm",
    "$8$ cm",
    "$64$ cm",
    "$\\approx200{,}96$ cm"
   ],
   "pistes": [
    "L'àrea d'una esfera és $A=4\\pi r^2$.",
    "Aïlla $r^2=\\dfrac{A}{4\\pi}$ i fes l'arrel quadrada."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJObyBjb2luY2lkZWl4IGFtYiBkaXZpZGlyIGVudHJlICQ0XFxwaSQ6IHNlbWJsYSBxdWUgbm9tw6lzIGhhcyBkaXZpZGl0IGVudHJlICRcXHBpJCwgc2Vuc2UgZWwgZmFjdG9yICQ0JCBkZSBsYSBmw7NybXVsYSBkZSBsJ8OgcmVhIGRlIGwnZXNmZXJhLiIsICIiLCAiQXF1ZXN0IMOpcyBlbCB2YWxvciBkZSAkcl4yJCAoJDgwM3ssfTg0OjRcXHBpJCksIG5vIGRlICRyJDogZW5jYXJhIGZhbHRhIGZlciBsJ2FycmVsIHF1YWRyYWRhLiIsICJObyBjb2luY2lkZWl4IGFtYiBhw69sbGFyICRyJCBkZSAkNFxccGkgcl4yPTgwM3ssfTg0JDogY29tcHJvdmEgcXVlIGRpdmlkZWl4ZXMgKG5vIG11bHRpcGxpcXVlcykgcGVyICQ0XFxwaSQuIl0sICJlcnIiOiBbIkZBQ1RPUl9PQkxJREFUIiwgIiIsICJBUlJFTF9PQkxJREFEQSIsICJPUkRSRV9NVUxUSVBMSUNBQ0lPX0RJVklTSU8iXSwgInJlcyI6IFsiJHJeMj1cXGRmcmFjezgwM3ssfTg0fXs0XFxjZG90M3ssfTE0fT02NCQiLCAiJHI9XFxzcXJ0ezY0fT04JCBjbSJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 161 144\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Esfera amb el radi marcat.</title><g transform=\"translate(72.0,72.0)\"><circle cx=\"0.0\" cy=\"0.0\" r=\"58.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><ellipse cx=\"0.0\" cy=\"0.0\" rx=\"58.0\" ry=\"17.4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"58.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-crida\" x1=\"29.0\" y1=\"0.0\" x2=\"64.8\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/><text x=\"71\" y=\"2.9\" text-anchor=\"middle\" class=\"fig-etq petita\">r</text></g></svg>"
  },
  {
   "id": "186",
   "ex": 186,
   "ap": "",
   "bloc": "cossos_rodons",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "L'àrea lateral d'un cilindre de radi $10$ cm és $756{,}6$ cm$^2$. Calcula la seva altura.",
   "opcions": [
    "$75{,}66$ cm",
    "$\\approx240{,}95$ cm",
    "$\\approx12{,}05$ cm",
    "$\\approx24{,}09$ cm"
   ],
   "pistes": [
    "L'àrea lateral d'un cilindre és $A_{\\text{lateral}}=2\\pi rh$.",
    "Aïlla $h$: $h=\\dfrac{A_{\\text{lateral}}}{2\\pi r}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJObyBoYXMgZGl2aWRpdCBwZWwgcHJvZHVjdGUgY29tcGxldCAkMlxccGkgciQ6IGNhbCBkaXZpZGlyICQ3NTZ7LH02JCBlbnRyZSAkMlxcY2RvdDN7LH0xNFxcY2RvdDEwJCwgbm8gbm9tw6lzIGVudHJlICQxMCQuIiwgIk5vIGNvaW5jaWRlaXggYW1iICQ3NTZ7LH02OigyXFxwaVxcY2RvdDEwKSQ6IHJldmlzYSBlbCBkZW5vbWluYWRvciBjb21wbGV0IGFiYW5zIGRlIGRpdmlkaXIuIiwgIiIsICJBcXVlc3QgdmFsb3Igc3VydCBkZSBkaXZpZGlyIG5vbcOpcyBlbnRyZSAkXFxwaSByJCBlbiBsbG9jIGRlICQyXFxwaSByJDogcmVjb3JkYSBlbCBmYWN0b3IgJDIkIGRlIGwnw6ByZWEgbGF0ZXJhbCBkZWwgY2lsaW5kcmUuIl0sICJlcnIiOiBbIk9SRFJFX01VTFRJUExJQ0FDSU9fRElWSVNJTyIsICJBUlJFTF9NQUxfQVBMSUNBREEiLCAiIiwgIkZBQ1RPUl9PQkxJREFUIl0sICJyZXMiOiBbIiRoPVxcZGZyYWN7NzU2eyx9Nn17MlxcY2RvdDN7LH0xNFxcY2RvdDEwfSQiLCAiJGhcXGFwcHJveDEyeyx9MDUkIGNtIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 167 164\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Cilindre recte, dibuixat en perspectiva.</title><g transform=\"translate(66.0,29.6)\"><path d=\"M -52.0 104.0 A 52.0 15.6 0 0 0 52.0 104.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M -52.0 104.0 A 52.0 15.6 0 0 1 52.0 104.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><rect x=\"-52.0\" y=\"0.0\" width=\"104.0\" height=\"104.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"none\"/><line x1=\"-52.0\" y1=\"0.0\" x2=\"-52.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"52.0\" y1=\"0.0\" x2=\"52.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"2\"/><ellipse cx=\"0.0\" cy=\"0.0\" rx=\"52.0\" ry=\"15.6\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"52.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"2.5\" x2=\"0.0\" y2=\"33.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"52.0\" y1=\"2.5\" x2=\"52.0\" y2=\"33.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"29.6\" x2=\"52.0\" y2=\"29.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"25.6\" x2=\"4.0\" y2=\"33.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"48.0\" y1=\"25.6\" x2=\"56.0\" y2=\"33.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"54.5\" y1=\"0.0\" x2=\"75.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"54.5\" y1=\"104.0\" x2=\"75.5\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"72.0\" y1=\"0.0\" x2=\"72.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"68.0\" y1=\"-4.0\" x2=\"76.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"68.0\" y1=\"100.0\" x2=\"76.0\" y2=\"108.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"26\" y=\"43.5\" text-anchor=\"middle\" class=\"fig-etq petita\">10 cm</text><text x=\"83\" y=\"55.4\" text-anchor=\"middle\" class=\"fig-etq\">h</text></g></svg>"
  },
  {
   "id": "187",
   "ex": 187,
   "ap": "",
   "bloc": "cossos_rodons",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "L'àrea total d'un cilindre és $471$ cm$^2$ i la seva altura és el doble del radi. Calcula el radi i l'altura del cilindre.",
   "opcions": [
    "$r=2{,}5$ cm, $h=5$ cm",
    "$r=5$ cm, $h=10$ cm",
    "$r=15{,}7$ cm, $h=31{,}4$ cm",
    "$r=10$ cm, $h=5$ cm"
   ],
   "pistes": [
    "Amb $h=2r$: $A_{\\text{total}}=2\\pi r^2+2\\pi r\\cdot2r=6\\pi r^2$.",
    "Aïlla $r^2=\\dfrac{471}{6\\pi}$ i fes l'arrel quadrada."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJTZW1ibGEgcXVlIHQnaGFzIGRlaXhhdCBhbGd1biBmYWN0b3IgZW4gc3Vic3RpdHVpciAkaD0yciQgZGlucyAkQV97XFx0ZXh0e3RvdGFsfX09MlxccGkgcl4yKzJcXHBpIHJoJDogcmV2aXNhIHF1ZSBxdWVkaSAkQV97XFx0ZXh0e3RvdGFsfX09NlxccGkgcl4yJC4iLCAiIiwgIk5vIGNvaW5jaWRlaXggYW1iIGHDr2xsYXIgJHIkIGRlICQ2XFxwaSByXjI9NDcxJDogY29tcHJvdmEgcXVlIGRpdmlkZWl4ZXMgcGVyICQ2XFxwaSQgKG5vIHBlciB1biBhbHRyZSBmYWN0b3IpIGFiYW5zIGRlIGZlciBsJ2FycmVsIHF1YWRyYWRhLiIsICJIYXMgaW50ZXJjYW52aWF0IGVscyBwYXBlcnMgZGVsIHJhZGkgaSBsJ2FsdHVyYTogbCdlbnVuY2lhdCBkaXUgcXVlIGwnYWx0dXJhIMOpcyBlbCBET0JMRSBkZWwgcmFkaSwgbm8gYWwgcmV2w6lzLiJdLCAiZXJyIjogWyJBUlJFTF9NQUxfQVBMSUNBREEiLCAiIiwgIk9SRFJFX01VTFRJUExJQ0FDSU9fRElWSVNJTyIsICJQQVBFUlNfSU5URVJDQU5WSUFUUyJdLCAicmVzIjogWyIkNlxccGkgcl4yPTQ3MSBcXFJpZ2h0YXJyb3cgcl4yPVxcZGZyYWN7NDcxfXs2XFxjZG90M3ssfTE0fT0yNSQiLCAiJHI9XFxzcXJ0ezI1fT01JCBjbSAkXFxSaWdodGFycm93IGg9MlxcY2RvdDU9MTAkIGNtIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 171 164\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Cilindre recte, dibuixat en perspectiva.</title><g transform=\"translate(66.0,29.6)\"><path d=\"M -52.0 104.0 A 52.0 15.6 0 0 0 52.0 104.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M -52.0 104.0 A 52.0 15.6 0 0 1 52.0 104.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><rect x=\"-52.0\" y=\"0.0\" width=\"104.0\" height=\"104.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"none\"/><line x1=\"-52.0\" y1=\"0.0\" x2=\"-52.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"52.0\" y1=\"0.0\" x2=\"52.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"2\"/><ellipse cx=\"0.0\" cy=\"0.0\" rx=\"52.0\" ry=\"15.6\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"52.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"2.5\" x2=\"0.0\" y2=\"33.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"52.0\" y1=\"2.5\" x2=\"52.0\" y2=\"33.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"29.6\" x2=\"52.0\" y2=\"29.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"25.6\" x2=\"4.0\" y2=\"33.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"48.0\" y1=\"25.6\" x2=\"56.0\" y2=\"33.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"54.5\" y1=\"0.0\" x2=\"75.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"54.5\" y1=\"104.0\" x2=\"75.5\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"72.0\" y1=\"0.0\" x2=\"72.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"68.0\" y1=\"-4.0\" x2=\"76.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"68.0\" y1=\"100.0\" x2=\"76.0\" y2=\"108.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"26\" y=\"43.5\" text-anchor=\"middle\" class=\"fig-etq petita\">r</text><text x=\"83\" y=\"55.4\" text-anchor=\"middle\" class=\"fig-etq\">2r</text></g></svg>"
  },
  {
   "id": "193a",
   "ex": 193,
   "ap": "a",
   "bloc": "cossos_rodons",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Un cilindre té radi $10$ cm i altura $10$ cm. Es vol construir un con amb el mateix radi de base.",
   "enunciat": "Un cilindre té radi $10$ cm i altura $10$ cm. Es vol construir un con amb el mateix radi de base. Quina generatriu ha de tenir el con perquè la seva àrea lateral coincideixi amb l'àrea lateral del cilindre?",
   "opcions": [
    "$20$ cm",
    "$40$ cm",
    "$\\approx31{,}85$ cm",
    "$10$ cm"
   ],
   "pistes": [
    "Àrea lateral del cilindre: $A_{\\text{lateral,cil}}=2\\pi rh\\approx628$ cm$^2$.",
    "Iguala-la a l'àrea lateral del con, $\\pi rg$, i aïlla $g$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRHVwbGljYSBlbCByZXN1bHRhdCBjb3JyZWN0ZTogcmV2aXNhIHF1ZSwgZW4gaWd1YWxhciAkMlxccGlcXGNkb3QxMFxcY2RvdDEwPVxccGlcXGNkb3QxMFxcY2RvdCBnJCwgZWwgZmFjdG9yICQyJCBkJ3VuIGNvc3RhdCBlcyBjYW5jZWzCt2xhIGNvcnJlY3RhbWVudCBhbWIgbCdhbHRyZS4iLCAiQXF1ZXN0IGV4ZXJjaWNpIG5vIG5lY2Vzc2l0YSBjYXAgYXJyZWwgcXVhZHJhZGE6IGwnw6ByZWEgbGF0ZXJhbCBkZWwgY29uIMOpcyBsaW5lYWwgZW4gJGckLCBubyBoaSBpbnRlcnbDqSBjYXAgUGl0w6Bnb3JlcyBlbiBhcXVlc3QgYXBhcnRhdC4iLCAiQXF1ZXN0IHZhbG9yIMOpcyBlbCByYWRpLCBubyBsYSBnZW5lcmF0cml1IHF1ZSBmYSBxdWUgY29pbmNpZGVpeGluIGxlcyDDoHJlZXMgbGF0ZXJhbHM6IGNhbCBpZ3VhbGFyICQyXFxwaSByaF97XFx0ZXh0e2NpbH19PVxccGkgcmckIGkgYcOvbGxhciAkZyQuIl0sICJlcnIiOiBbIiIsICJQUk9EVUNURV9NQUwiLCAiQVJSRUxfTUFMX0FQTElDQURBIiwgIlBBU19JTlRFUk1FRElfUEVSX1JFU1BPU1RBIl0sICJyZXMiOiBbIiQyXFxwaVxcY2RvdDEwXFxjZG90MTA9XFxwaVxcY2RvdDEwXFxjZG90IGckIiwgIiRnPVxcZGZyYWN7MlxcY2RvdDEwXFxjZG90MTB9ezEwfT0yMCQgY20iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 197 164\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Cilindre recte, dibuixat en perspectiva.</title><g transform=\"translate(66.0,29.6)\"><path d=\"M -52.0 104.0 A 52.0 15.6 0 0 0 52.0 104.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M -52.0 104.0 A 52.0 15.6 0 0 1 52.0 104.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><rect x=\"-52.0\" y=\"0.0\" width=\"104.0\" height=\"104.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"none\"/><line x1=\"-52.0\" y1=\"0.0\" x2=\"-52.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"52.0\" y1=\"0.0\" x2=\"52.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"2\"/><ellipse cx=\"0.0\" cy=\"0.0\" rx=\"52.0\" ry=\"15.6\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"52.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"2.5\" x2=\"0.0\" y2=\"33.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"52.0\" y1=\"2.5\" x2=\"52.0\" y2=\"33.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"29.6\" x2=\"52.0\" y2=\"29.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"25.6\" x2=\"4.0\" y2=\"33.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"48.0\" y1=\"25.6\" x2=\"56.0\" y2=\"33.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"54.5\" y1=\"0.0\" x2=\"75.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"54.5\" y1=\"104.0\" x2=\"75.5\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"72.0\" y1=\"0.0\" x2=\"72.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"68.0\" y1=\"-4.0\" x2=\"76.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"68.0\" y1=\"100.0\" x2=\"76.0\" y2=\"108.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"26\" y=\"43.5\" text-anchor=\"middle\" class=\"fig-etq petita\">10 cm</text><text x=\"98\" y=\"55.4\" text-anchor=\"middle\" class=\"fig-etq\">10 cm</text></g></svg>"
  },
  {
   "id": "193b",
   "ex": 193,
   "ap": "b",
   "bloc": "cossos_rodons",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Un cilindre té radi $10$ cm i altura $10$ cm. Es vol construir un con amb el mateix radi de base.",
   "enunciat": "Un cilindre té radi $10$ cm i altura $10$ cm. Es vol construir un con amb el mateix radi de base. Quina generatriu ha de tenir el con perquè la seva àrea total coincideixi amb l'àrea total del cilindre?",
   "opcions": [
    "$30$ cm",
    "$60$ cm",
    "$\\approx9{,}55$ cm",
    "$20$ cm"
   ],
   "pistes": [
    "Àrea total del cilindre: $A_{\\text{total,cil}}=2\\pi r^2+2\\pi rh\\approx1256$ cm$^2$.",
    "Iguala-la a l'àrea total del con, $\\pi r^2+\\pi rg$, i aïlla $g$: com que les dues tenen una base $\\pi r^2$ igual, es simplifica a $\\pi rg=2\\pi r^2+2\\pi rh-\\pi r^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRHVwbGljYSBlbCByZXN1bHRhdCBjb3JyZWN0ZTogcmV2aXNhIGVsIHBhcyBkJ2HDr2xsYXIgJGckIGRlc3Byw6lzIGRlIHNpbXBsaWZpY2FyICRyJCBhIGJhbmRhIGkgYmFuZGEgZGUgbCdlcXVhY2nDsy4iLCAiQ29tcHJvdmEgZWwgc2lnbmUgZW4gYcOvbGxhciAkZyQgZGUgJFxccGkgcl4yK1xccGkgcmc9MlxccGkgcl4yKzJcXHBpIHJoJDogbGEgYmFzZSBkZWwgY29uICgkXFxwaSByXjIkKSByZXN0YSBhIGJhbmRhIGkgYmFuZGEsIG5vIHNlIHN1bWEgZHVlcyB2ZWdhZGVzLiIsICJBcXVlc3Qgw6lzIGVsIHZhbG9yIGRlIGwnYXBhcnRhdCBhbnRlcmlvciAoaWd1YWxhbnQgbm9tw6lzIGxlcyDDoHJlZXMgbGF0ZXJhbHMpOiBhcXXDrSBjYWwgaWd1YWxhciBsZXMgw6ByZWVzIFRPVEFMUywgcXVlIHRhbWLDqSBpbmNsb3VlbiBsZXMgYmFzZXMgY2lyY3VsYXJzLiJdLCAiZXJyIjogWyIiLCAiUFJPRFVDVEVfTUFMIiwgIlNJR05FX1RFUk1FX0lOREVQRU5ERU5UIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iXSwgInJlcyI6IFsiJFxccGlcXGNkb3QxMF4yK1xccGlcXGNkb3QxMFxcY2RvdCBnPTJcXHBpXFxjZG90MTBeMisyXFxwaVxcY2RvdDEwXFxjZG90MTAkIiwgIiQxMGc9MlxcY2RvdDEwXjIrMlxcY2RvdDEwXFxjZG90MTAtMTBeMj0zMDAkIiwgIiRnPTMwJCBjbSJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 197 164\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Cilindre recte, dibuixat en perspectiva.</title><g transform=\"translate(66.0,29.6)\"><path d=\"M -52.0 104.0 A 52.0 15.6 0 0 0 52.0 104.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M -52.0 104.0 A 52.0 15.6 0 0 1 52.0 104.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><rect x=\"-52.0\" y=\"0.0\" width=\"104.0\" height=\"104.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"none\"/><line x1=\"-52.0\" y1=\"0.0\" x2=\"-52.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"52.0\" y1=\"0.0\" x2=\"52.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"2\"/><ellipse cx=\"0.0\" cy=\"0.0\" rx=\"52.0\" ry=\"15.6\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"52.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"2.5\" x2=\"0.0\" y2=\"33.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"52.0\" y1=\"2.5\" x2=\"52.0\" y2=\"33.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"29.6\" x2=\"52.0\" y2=\"29.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"25.6\" x2=\"4.0\" y2=\"33.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"48.0\" y1=\"25.6\" x2=\"56.0\" y2=\"33.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"54.5\" y1=\"0.0\" x2=\"75.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"54.5\" y1=\"104.0\" x2=\"75.5\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"72.0\" y1=\"0.0\" x2=\"72.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"68.0\" y1=\"-4.0\" x2=\"76.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"68.0\" y1=\"100.0\" x2=\"76.0\" y2=\"108.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"26\" y=\"43.5\" text-anchor=\"middle\" class=\"fig-etq petita\">10 cm</text><text x=\"98\" y=\"55.4\" text-anchor=\"middle\" class=\"fig-etq\">10 cm</text></g></svg>"
  }
 ]
};
