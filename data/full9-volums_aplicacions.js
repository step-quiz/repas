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
  "ARRODONIMENT_CONTEXT": "El resultat exacte és aquest, però el context demana un nombre enter. Pensa si cal arrodonir cap amunt (pots de pintura, autocars, caixes) o cap avall (quantes peces senceres en surten).",
  "DIMENSIO_EXPONENT_MAL": "L'exponent no correspon a la dimensió: les àrees van al quadrat i els volums, al cub. Comprova també les unitats del resultat.",
  "FACTOR_OBLIDAT": "T'has deixat pel camí un dels factors en combinar els exponents.",
  "FACTOR_TRES_VOLUM": "El terç del volum va només amb piràmides i cons. Prismes, cilindres i cubs són base per altura, sense dividir.",
  "ORDRE_MULTIPLICACIO_DIVISIO": "La divisió i la multiplicació tenen la mateixa prioritat i es fan d'esquerra a dreta: no es pot agrupar la multiplicació primer perquè \"queda més bé\".",
  "PAS_INTERMEDI_PER_RESPOSTA": "El valor que has triat és correcte, però és un pas intermedi, no el que et demanen. Torna a llegir la pregunta i mira quina magnitud has d'acabar donant: sovint només falta una operació més.",
  "PRODUCTE_MAL": "Has multiplicat els dos nombres que et donaven en comptes d'aïllar la incògnita amb els productes creuats.",
  "PRODUCTE_PER_SUMA": "Has sumat on tocava multiplicar (o al revés). Torna a llegir quina operació es fa sobre les dades.",
  "SIGNE_TERME_INDEPENDENT": "Revisa el signe del terme independent (el que no porta $x$): és fàcil perdre'l en sumar o restar.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau."
 },
 "items": [
  {
   "id": "365a",
   "ex": 365,
   "ap": "a",
   "bloc": "volums_aplicacions",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el volum d'aquest ortoedre (prisma de base rectangular). Recorda: $V=a\\cdot b\\cdot c$.",
   "enunciat": "Arestes de $2$ cm, $3$ cm i $4$ cm.",
   "opcions": [
    "$9$ cm$^3$",
    "$8$ cm$^3$",
    "$24$ cm$^3$",
    "$52$ cm$^2$"
   ],
   "pistes": [
    "Multiplica les tres arestes.",
    "$2\\cdot3=6$, i $6\\cdot4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgc3VtYXQgbGVzIGFyZXN0ZXMuIEVsIHZvbHVtIMOpcyBlbCBQUk9EVUNURTogJDJcXGNkb3QzXFxjZG90NCQuIiwgIkhhcyBkaXZpZGl0IHBlciAkMyQuIEVsIHRlcsOnIGRlbCB2b2x1bSB2YSBub23DqXMgYW1iIHBpcsOgbWlkZXMgaSBjb25zLiBQcmlzbWVzLCBjaWxpbmRyZXMgaSBjdWJzIHPDs24gYmFzZSBwZXIgYWx0dXJhLCBzZW5zZSBkaXZpZGlyLiIsICIiLCAiSGFzIGNhbGN1bGF0IGwnw6ByZWEgdG90YWwgKGxhIHN1cGVyZsOtY2llIGRlIGxlcyBjYXJlcykuIEVzIGRlbWFuYSBlbCB2b2x1bSwgZW4gY20kXjMkLiJdLCAiZXJyIjogWyJQUk9EVUNURV9QRVJfU1VNQSIsICJGQUNUT1JfVFJFU19WT0xVTSIsICIiLCAiRElNRU5TSU9fRVhQT05FTlRfTUFMIl0sICJyZXMiOiBbIiRWPTJcXGNkb3QzXFxjZG90ND0yNCQgY20kXjMkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 180 231\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Ortoedre d'arestes 2 cm, 3 cm i 4 cm, en perspectiva.</title><g transform=\"translate(64.6,73.8)\"><polygon points=\"0.0,0.0 55.0,0.0 55.0,110.0 0.0,110.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,0.0 46.0,-46.0 101.0,-46.0 55.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"55.0,0.0 101.0,-46.0 101.0,64.0 55.0,110.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"112.5\" x2=\"0.0\" y2=\"129.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"55.0\" y1=\"112.5\" x2=\"55.0\" y2=\"129.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"126.0\" x2=\"55.0\" y2=\"126.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"122.0\" x2=\"4.0\" y2=\"130.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"51.0\" y1=\"122.0\" x2=\"59.0\" y2=\"130.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-19.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"110.0\" x2=\"-19.5\" y2=\"110.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-16.0\" y1=\"0.0\" x2=\"-16.0\" y2=\"110.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"-4.0\" x2=\"-20.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"106.0\" x2=\"-20.0\" y2=\"114.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"53.2\" y1=\"-1.8\" x2=\"42.6\" y2=\"-12.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"99.2\" y1=\"-47.8\" x2=\"88.6\" y2=\"-58.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"45.1\" y1=\"-9.9\" x2=\"91.1\" y2=\"-55.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"45.1\" y1=\"-4.2\" x2=\"45.1\" y2=\"-15.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"91.1\" y1=\"-50.2\" x2=\"91.1\" y2=\"-61.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"27.5\" y=\"140.4\" text-anchor=\"middle\" class=\"fig-etq\">2 cm</text><text x=\"-36\" y=\"58.4\" text-anchor=\"middle\" class=\"fig-etq\">4 cm</text><text x=\"68.5\" y=\"-51.6\" text-anchor=\"middle\" class=\"fig-etq petita\">3 cm</text></g></svg>"
  },
  {
   "id": "365b",
   "ex": 365,
   "ap": "b",
   "bloc": "volums_aplicacions",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el volum d'aquest ortoedre (prisma de base rectangular). Recorda: $V=a\\cdot b\\cdot c$.",
   "enunciat": "Arestes de $5$ cm, $2$ cm i $10$ cm.",
   "opcions": [
    "$\\approx33{,}33$ cm$^3$",
    "$100$ cm$^3$",
    "$160$ cm$^2$",
    "$17$ cm$^3$"
   ],
   "pistes": [
    "Multiplica les tres arestes.",
    "$5\\cdot2=10$, i $10\\cdot10$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgZGl2aWRpdCBwZXIgJDMkLiBFbCB0ZXLDpyBkZWwgdm9sdW0gdmEgbm9tw6lzIGFtYiBwaXLDoG1pZGVzIGkgY29ucy4gUHJpc21lcywgY2lsaW5kcmVzIGkgY3VicyBzw7NuIGJhc2UgcGVyIGFsdHVyYSwgc2Vuc2UgZGl2aWRpci4iLCAiIiwgIkhhcyBjYWxjdWxhdCBsJ8OgcmVhIHRvdGFsIChsYSBzdXBlcmbDrWNpZSBkZSBsZXMgY2FyZXMpLiBFcyBkZW1hbmEgZWwgdm9sdW0sIGVuIGNtJF4zJC4iLCAiSGFzIHN1bWF0IGxlcyBhcmVzdGVzLiBFbCB2b2x1bSDDqXMgZWwgUFJPRFVDVEU6ICQ1XFxjZG90MlxcY2RvdDEwJC4iXSwgImVyciI6IFsiRkFDVE9SX1RSRVNfVk9MVU0iLCAiIiwgIkRJTUVOU0lPX0VYUE9ORU5UX01BTCIsICJQUk9EVUNURV9QRVJfU1VNQSJdLCAicmVzIjogWyIkVj01XFxjZG90MlxcY2RvdDEwPTEwMCQgY20kXjMkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 166 208\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Ortoedre d'arestes 5 cm, 2 cm i 10 cm, en perspectiva.</title><g transform=\"translate(74.3,50.8)\"><polygon points=\"0.0,0.0 55.0,0.0 55.0,110.0 0.0,110.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,0.0 22.0,-22.0 77.0,-22.0 55.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"55.0,0.0 77.0,-22.0 77.0,88.0 55.0,110.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"112.5\" x2=\"0.0\" y2=\"129.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"55.0\" y1=\"112.5\" x2=\"55.0\" y2=\"129.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"126.0\" x2=\"55.0\" y2=\"126.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"122.0\" x2=\"4.0\" y2=\"130.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"51.0\" y1=\"122.0\" x2=\"59.0\" y2=\"130.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-19.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"110.0\" x2=\"-19.5\" y2=\"110.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-16.0\" y1=\"0.0\" x2=\"-16.0\" y2=\"110.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"-4.0\" x2=\"-20.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"106.0\" x2=\"-20.0\" y2=\"114.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"53.2\" y1=\"-1.8\" x2=\"42.6\" y2=\"-12.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"75.2\" y1=\"-23.8\" x2=\"64.6\" y2=\"-34.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"45.1\" y1=\"-9.9\" x2=\"67.1\" y2=\"-31.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"45.1\" y1=\"-4.2\" x2=\"45.1\" y2=\"-15.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"67.1\" y1=\"-26.2\" x2=\"67.1\" y2=\"-37.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"27.5\" y=\"140.4\" text-anchor=\"middle\" class=\"fig-etq\">5 cm</text><text x=\"-42\" y=\"58.4\" text-anchor=\"middle\" class=\"fig-etq\">10 cm</text><text x=\"45.5\" y=\"-28.6\" text-anchor=\"middle\" class=\"fig-etq petita\">2 cm</text></g></svg>"
  },
  {
   "id": "195a",
   "ex": 195,
   "ap": "a",
   "bloc": "volums_aplicacions",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula el volum d'aquest cos geomètric:",
   "enunciat": "Calcula el volum d'aquest cos geomètric: una piràmide quadrangular regular de costat de base $4$ cm i altura $2$ cm.",
   "opcions": [
    "$\\approx21{,}33$ cm$^3$",
    "$32$ cm$^3$",
    "$8$ cm$^3$",
    "$\\approx10{,}67$ cm$^3$"
   ],
   "pistes": [
    "Àrea de la base: $A_{\\text{base}}=4^2=16$ cm$^2$.",
    "Volum d'una piràmide: $V=\\dfrac{A_{\\text{base}}\\cdot h}{3}$."
   ],
   "nota": "D'aquest exercici hi ha els apartats a, c, e i f: els altres eren cossos que no es poden identificar amb seguretat sense la figura.",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJObyBjb2luY2lkZWl4IGFtYiAkXFxkZnJhY3sxNlxcY2RvdDJ9ezN9JDogc2VtYmxhIHF1ZSBoYXMgZGl2aWRpdCBwZXIgJDF7LH01JCBlbiBsbG9jIGRlIHBlciAkMyQuIiwgIk5vIGhhcyBkaXZpZGl0IGVudHJlICQzJDogZWwgdm9sdW0gZCd1bmEgcGlyw6BtaWRlIMOpcyAkVj1cXGRmcmFje0Ffe1xcdGV4dHtiYXNlfX1cXGNkb3QgaH17M30kLCBubyAkQV97XFx0ZXh0e2Jhc2V9fVxcY2RvdCBoJCBzZW5zZSBkaXZpZGlyLiIsICJMJ8OgcmVhIGRlIGxhIGJhc2UgZCd1biBxdWFkcmF0IGRlIGNvc3RhdCAkNCQgY20gw6lzICQxNiQgY20kXjIkLCBubyAkNCQgY20kXjIkOiBjb21wcm92YSBxdWUgaGFzIGVsZXZhdCBlbCBjb3N0YXQgYWwgcXVhZHJhdC4iLCAiIl0sICJlcnIiOiBbIk9SRFJFX01VTFRJUExJQ0FDSU9fRElWSVNJTyIsICJGQUNUT1JfVFJFU19WT0xVTSIsICJGQUNUT1JfT0JMSURBVCIsICIiXSwgInJlcyI6IFsiJFY9XFxkZnJhY3sxNlxcY2RvdDJ9ezN9JCIsICIkVlxcYXBwcm94MTB7LH02NyQgY20kXjMkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 174 184\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Piràmide recta de base quadrangular regular, en perspectiva.</title><g transform=\"translate(109.8,126.0)\"><polygon points=\"0.0,-15.0 50.0,0.0 0.0,15.0 -50.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><polygon points=\"0.0,-112.0 50.0,0.0 0.0,15.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-112.0 0.0,15.0 -50.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"0.0\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"-50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"0.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"1.6\"/><path d=\"M 11.0 0.0 L 11.0 -11.0 L 0.0 -11.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"-112.0\" x2=\"-71.5\" y2=\"-112.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-71.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-68.0\" y1=\"-112.0\" x2=\"-68.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-64.0\" y1=\"-116.0\" x2=\"-72.0\" y2=\"-108.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-64.0\" y1=\"-4.0\" x2=\"-72.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"50.7\" y1=\"2.4\" x2=\"55.6\" y2=\"18.7\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.7\" y1=\"17.4\" x2=\"5.6\" y2=\"33.7\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"54.6\" y1=\"15.3\" x2=\"4.6\" y2=\"30.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"57.3\" y1=\"10.3\" x2=\"51.9\" y2=\"20.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"7.3\" y1=\"25.3\" x2=\"1.9\" y2=\"35.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"-83\" y=\"-53.1\" text-anchor=\"middle\" class=\"fig-etq petita\">2 cm</text><text x=\"33.9\" y=\"40.6\" text-anchor=\"middle\" class=\"fig-etq\">4 cm</text></g></svg>"
  },
  {
   "id": "195c",
   "ex": 195,
   "ap": "c",
   "bloc": "volums_aplicacions",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula el volum d'aquest cos geomètric:",
   "enunciat": "Calcula el volum d'aquest cos geomètric: un cilindre de radi $4$ cm i altura $4$ cm.",
   "opcions": [
    "$\\approx200{,}96$ cm$^3$",
    "$\\approx401{,}92$ cm$^3$",
    "$\\approx66{,}99$ cm$^3$",
    "$\\approx50{,}24$ cm$^3$"
   ],
   "pistes": [
    "Àrea de la base: $A_{\\text{base}}=\\pi r^2\\approx50{,}24$ cm$^2$.",
    "Volum d'un cilindre: $V=A_{\\text{base}}\\cdot h$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRHVwbGljYSBlbCByZXN1bHRhdCBjb3JyZWN0ZTogcmV2aXNhIGVsIHByb2R1Y3RlICRcXHBpXFxjZG90NF4yXFxjZG90NCQgcGFzIGEgcGFzLiIsICJIYXMgZGl2aWRpdCBlbnRyZSAkMyQ6IGVsIHZvbHVtIGQndW4gQ0lMSU5EUkUgbm8gZXMgZGl2aWRlaXggZW50cmUgJDMkIChhaXjDsiBub23DqXMgcGFzc2EgYW1iIHBpcsOgbWlkZXMgaSBjb25zKS4iLCAiQXF1ZXN0IHZhbG9yIMOpcyBsJ8OgcmVhIGRlIGxhIGJhc2UsIG5vIGVsIHZvbHVtOiBlbmNhcmEgZmFsdGEgbXVsdGlwbGljYXItbGEgcGVyIGwnYWx0dXJhLiJdLCAiZXJyIjogWyIiLCAiUFJPRFVDVEVfTUFMIiwgIkZBQ1RPUl9UUkVTX1ZPTFVNIiwgIkZBQ1RPUl9PQkxJREFUIl0sICJyZXMiOiBbIiRWPVxccGlcXGNkb3Q0XjJcXGNkb3Q0JCIsICIkVlxcYXBwcm94MjAweyx9OTYkIGNtJF4zJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 187 164\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Cilindre recte, dibuixat en perspectiva.</title><g transform=\"translate(66.0,29.6)\"><path d=\"M -52.0 104.0 A 52.0 15.6 0 0 0 52.0 104.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M -52.0 104.0 A 52.0 15.6 0 0 1 52.0 104.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><rect x=\"-52.0\" y=\"0.0\" width=\"104.0\" height=\"104.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"none\"/><line x1=\"-52.0\" y1=\"0.0\" x2=\"-52.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"52.0\" y1=\"0.0\" x2=\"52.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"2\"/><ellipse cx=\"0.0\" cy=\"0.0\" rx=\"52.0\" ry=\"15.6\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"52.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"2.5\" x2=\"0.0\" y2=\"33.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"52.0\" y1=\"2.5\" x2=\"52.0\" y2=\"33.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"29.6\" x2=\"52.0\" y2=\"29.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"25.6\" x2=\"4.0\" y2=\"33.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"48.0\" y1=\"25.6\" x2=\"56.0\" y2=\"33.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"54.5\" y1=\"0.0\" x2=\"75.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"54.5\" y1=\"104.0\" x2=\"75.5\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"72.0\" y1=\"0.0\" x2=\"72.0\" y2=\"104.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"68.0\" y1=\"-4.0\" x2=\"76.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"68.0\" y1=\"100.0\" x2=\"76.0\" y2=\"108.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"26\" y=\"43.5\" text-anchor=\"middle\" class=\"fig-etq petita\">4 cm</text><text x=\"92\" y=\"55.4\" text-anchor=\"middle\" class=\"fig-etq\">4 cm</text></g></svg>"
  },
  {
   "id": "195e",
   "ex": 195,
   "ap": "e",
   "bloc": "volums_aplicacions",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula el volum d'aquest cos geomètric:",
   "enunciat": "Calcula el volum d'aquest cos geomètric: un con de radi $1{,}5$ cm i altura $5$ cm.",
   "opcions": [
    "$\\approx23{,}55$ cm$^3$",
    "$\\approx7{,}85$ cm$^3$",
    "$\\approx35{,}33$ cm$^3$",
    "$\\approx11{,}78$ cm$^3$"
   ],
   "pistes": [
    "Àrea de la base: $A_{\\text{base}}=\\pi r^2\\approx7{,}07$ cm$^2$.",
    "Volum d'un con: $V=\\dfrac{A_{\\text{base}}\\cdot h}{3}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJObyBjb2luY2lkZWl4IGFtYiAkXFxkZnJhY3tcXHBpXFxjZG90MXssfTVeMlxcY2RvdDV9ezN9JDogc2VtYmxhIHF1ZSB0J2hhcyBkZWl4YXQgZWwgZmFjdG9yICQzJCBkZWwgZGVub21pbmFkb3IgYSBtaXRnZXMuIiwgIkwnw6ByZWEgZGUgbGEgYmFzZSDDqXMgJFxccGlcXGNkb3Qxeyx9NV4yXFxhcHByb3g3eyx9MDckIGNtJF4yJCwgbm8gJFxccGlcXGNkb3Qxeyx9NVxcYXBwcm94NHssfTcxJCBjbSReMiQ6IGNvbXByb3ZhIHF1ZSBoYXMgZWxldmF0IGVsIHJhZGkgYWwgcXVhZHJhdC4iLCAiTm8gaGFzIGRpdmlkaXQgZW50cmUgJDMkOiBlbCB2b2x1bSBkJ3VuIGNvbiDDqXMgJFY9XFxkZnJhY3tBX3tcXHRleHR7YmFzZX19XFxjZG90IGh9ezN9JCwgbm8gJEFfe1xcdGV4dHtiYXNlfX1cXGNkb3QgaCQgc2Vuc2UgZGl2aWRpci4iLCAiIl0sICJlcnIiOiBbIk9SRFJFX01VTFRJUExJQ0FDSU9fRElWSVNJTyIsICJGQUNUT1JfT0JMSURBVCIsICJGQUNUT1JfVFJFU19WT0xVTSIsICIiXSwgInJlcyI6IFsiJFY9XFxkZnJhY3tcXHBpXFxjZG90MXssfTVeMlxcY2RvdDV9ezN9JCIsICIkVlxcYXBwcm94MTF7LH03OCQgY20kXjMkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 182 156\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Con recte, dibuixat en perspectiva.</title><g transform=\"translate(66.0,14.0)\"><path d=\"M -52.0 112.0 A 52.0 15.6 0 0 0 52.0 112.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M -52.0 112.0 A 52.0 15.6 0 0 1 52.0 112.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><polygon points=\"0.0,0.0 -52.0,112.0 52.0,112.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M -52.0 112.0 A 52.0 15.6 0 0 0 52.0 112.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M -52.0 112.0 A 52.0 15.6 0 0 1 52.0 112.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"0.0\" y1=\"112.0\" x2=\"52.0\" y2=\"112.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"109.5\" x2=\"0.0\" y2=\"78.9\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"52.0\" y1=\"109.5\" x2=\"52.0\" y2=\"78.9\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"82.4\" x2=\"52.0\" y2=\"82.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"86.4\" x2=\"4.0\" y2=\"78.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"48.0\" y1=\"86.4\" x2=\"56.0\" y2=\"78.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"0.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\"/><path d=\"M 11.0 112.0 L 11.0 101.0 L 0.0 101.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-21.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"112.0\" x2=\"-21.5\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-18.0\" y1=\"0.0\" x2=\"-18.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-14.0\" y1=\"-4.0\" x2=\"-22.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-14.0\" y1=\"108.0\" x2=\"-22.0\" y2=\"116.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-crida\" x1=\"26.0\" y1=\"82.4\" x2=\"59.4\" y2=\"115.6\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/><text x=\"79.7\" y=\"124.2\" text-anchor=\"middle\" class=\"fig-etq\">1,5 cm</text><text x=\"-33\" y=\"32.1\" text-anchor=\"middle\" class=\"fig-etq petita\">5 cm</text></g></svg>"
  },
  {
   "id": "195f",
   "ex": 195,
   "ap": "f",
   "bloc": "volums_aplicacions",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula el volum d'aquest cos geomètric:",
   "enunciat": "Calcula el volum d'aquest cos geomètric: un cub d'aresta $4$ cm.",
   "opcions": [
    "$96$ cm$^3$",
    "$64$ cm$^3$",
    "$48$ cm$^3$",
    "$16$ cm$^3$"
   ],
   "pistes": [
    "El volum d'un cub d'aresta $L$ és $V=L^3$.",
    "$4^3$ vol dir $4\\cdot4\\cdot4$. Compte: $4^2$ seria l'àrea d'una cara, i $6\\cdot4^2$, l'àrea de tot el cub."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJObyBjb2luY2lkZWl4IGFtYiAkNF4zJDogY29tcHJvdmEgZWwgY8OgbGN1bCBkZSBsYSBwb3TDqG5jaWEgcGFzIGEgcGFzLiIsICIiLCAiTm8gY29pbmNpZGVpeCBhbWIgJDRcXGNkb3Q0XFxjZG90NCQ6IHJldmlzYSBlbCBwcm9kdWN0ZSBkZWxzIHRyZXMgZmFjdG9ycy4iLCAiQXF1ZXN0IHZhbG9yIMOpcyAkNF4yJCwgbm8gJDReMyQ6IGVsIHZvbHVtIGQndW4gY3ViIMOpcyAkVj1MXjMkLCBubyAkTF4yJC4iXSwgImVyciI6IFsiUFJPRFVDVEVfTUFMIiwgIiIsICJPUkRSRV9NVUxUSVBMSUNBQ0lPX0RJVklTSU8iLCAiRElNRU5TSU9fRVhQT05FTlRfTUFMIl0sICJyZXMiOiBbIiRWPTReMz00XFxjZG90NFxcY2RvdDQkIiwgIiRWPTY0JCBjbSReMyQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 158 191\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Cub d'aresta 4 cm, dibuixat en perspectiva.</title><g transform=\"translate(14.0,48.0)\"><polygon points=\"0.0,0.0 96.0,0.0 96.0,96.0 0.0,96.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,0.0 34.0,-34.0 130.0,-34.0 96.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"96.0,0.0 130.0,-34.0 130.0,62.0 96.0,96.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"96.0\" x2=\"34.0\" y2=\"62.0\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"34.0\" y1=\"62.0\" x2=\"34.0\" y2=\"-34.0\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"34.0\" y1=\"62.0\" x2=\"130.0\" y2=\"62.0\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"98.5\" x2=\"0.0\" y2=\"115.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"96.0\" y1=\"98.5\" x2=\"96.0\" y2=\"115.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"112.0\" x2=\"96.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"108.0\" x2=\"4.0\" y2=\"116.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"92.0\" y1=\"108.0\" x2=\"100.0\" y2=\"116.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"48\" y=\"126.4\" text-anchor=\"middle\" class=\"fig-etq\">4 cm</text></g></svg>"
  },
  {
   "id": "196a",
   "ex": 196,
   "ap": "a",
   "bloc": "volums_aplicacions",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Es vol pintar una habitació de $4$ m per $6$ m i $3$ m d'altura, incloent-hi el sostre (però no el terra). Un pot de pintura cobreix $30$ m$^2$.",
   "enunciat": "Es vol pintar una habitació de $4$ m per $6$ m i $3$ m d'altura, incloent-hi el sostre (però no el terra). Un pot de pintura cobreix $30$ m$^2$. Quants pots de pintura calen com a mínim?",
   "opcions": [
    "$2{,}8$ pots",
    "$3$ pots",
    "$2$ pots",
    "$4$ pots"
   ],
   "pistes": [
    "Superfície de les parets: $2(4\\cdot3)+2(6\\cdot3)=60$ m$^2$.",
    "Superfície del sostre: $4\\cdot6=24$ m$^2$; total $84$ m$^2$ (el terra no es pinta).",
    "Nombre de pots: $84:30=2{,}8$, i com que amb $2$ pots no n'hi ha prou, cal arrodonir cap amunt."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBub21icmUgZGUgcG90cyBoYSBkZSBzZXIgdW4gbm9tYnJlIGVudGVyOiBjb20gcXVlICQyeyx9OCQgcG90cyBubyBiYXN0ZW4gcGVyIGNvYnJpciB0b3RhIGxhIHN1cGVyZsOtY2llLCBjYWwgYXJyb2RvbmlyIGNhcCBBTVVOVCwgYSAkMyQuIiwgIiIsICJBbWIgJDIkIHBvdHMgbm9tw6lzIGVzIGNvYnJlaXhlbiAkNjAkIG0kXjIkLCBpIGxhIHN1cGVyZsOtY2llIGEgcGludGFyIMOpcyBtw6lzIGdyYW4gcXVlIGFpeMOyOiB0b3JuYSBhIGNhbGN1bGFyIGwnw6ByZWEgdG90YWwgYWJhbnMgZGUgZGl2aWRpciBlbnRyZSAkMzAkLiIsICJTZW1ibGEgcXVlIGhhcyBjb21wdGF0IGFsZ3VuYSBzdXBlcmbDrWNpZSBkZSBtw6lzIChwZXIgZXhlbXBsZSwgZWwgdGVycmEsIHF1ZSBsJ2VudW5jaWF0IGV4Y2xvdSBleHBsw61jaXRhbWVudCk6IHJldmlzYSBxdWluZXMgY2FyZXMgcydoYW4gZGUgcGludGFyLiJdLCAiZXJyIjogWyJBUlJPRE9OSU1FTlRfQ09OVEVYVCIsICIiLCAiQVJSRUxfTUFMX0FQTElDQURBIiwgIkZBQ1RPUl9PQkxJREFUIl0sICJyZXMiOiBbIiRBX3tcXHRleHR7cGFyZXRzfX09Mig0XFxjZG90MykrMig2XFxjZG90Myk9NjAkIG0kXjIkIiwgIiRBX3tcXHRleHR7c29zdHJlfX09NFxcY2RvdDY9MjQkIG0kXjIkIiwgIiRBX3tcXHRleHR7dG90YWx9fT02MCsyND04NCQgbSReMiQiLCAiJDg0OjMwPTJ7LH04IFxcUmlnaHRhcnJvdyQgY2FsZW4gJDMkIHBvdHMiXX0="
  },
  {
   "id": "196b",
   "ex": 196,
   "ap": "b",
   "bloc": "volums_aplicacions",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Es vol pintar una habitació de $4$ m per $6$ m i $3$ m d'altura, incloent-hi el sostre (però no el terra). Un pot de pintura cobreix $30$ m$^2$.",
   "enunciat": "Es vol pintar una habitació de $4$ m per $6$ m i $3$ m d'altura, incloent-hi el sostre (però no el terra). Un pot de pintura cobreix $30$ m$^2$. Si finalment es fan servir $4$ pots per repartir-hi tota la superfície a parts iguals, quants metres quadrats cobrirà cada pot?",
   "opcions": [
    "$\\approx28$ m$^2$",
    "$6$ m$^2$",
    "$21$ m$^2$",
    "$30$ m$^2$"
   ],
   "pistes": [
    "La superfície total a pintar és $84$ m$^2$ (calculada a l'apartat anterior).",
    "Reparteix-la entre els $4$ pots: $84:4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJObyBjb2luY2lkZWl4IGFtYiAkODQ6NCQ6IGNvbXByb3ZhIHF1ZSBmYXMgc2VydmlyIGxhIHN1cGVyZsOtY2llIHRvdGFsICgkODQkIG0kXjIkKSwgbm8gbm9tw6lzIGxhIGRlIGxlcyBwYXJldHMgKCQ2MCQgbSReMiQpLiIsICJObyBjb2luY2lkZWl4IGFtYiAkODQ6NCQ6IHJldmlzYSBsYSBkaXZpc2nDsyBwYXMgYSBwYXMuIiwgIiIsICJBcXVlc3RhIMOpcyBsYSBjb2JlcnR1cmEgZXN0w6BuZGFyZCBkJ3VuIHBvdCAoJDMwJCBtJF4yJCksIG5vIGVsIHJlc3VsdGF0IGRlIHJlcGFydGlyIGVscyAkODQkIG0kXjIkIHRvdGFscyBlbnRyZSAkNCQgcG90cy4iXSwgImVyciI6IFsiRkFDVE9SX09CTElEQVQiLCAiT1JEUkVfTVVMVElQTElDQUNJT19ESVZJU0lPIiwgIiIsICJQQVNfSU5URVJNRURJX1BFUl9SRVNQT1NUQSJdLCAicmVzIjogWyIkODQ6ND0yMSQiLCAiJDIxJCBtJF4yJCBwZXIgcG90Il19"
  },
  {
   "id": "197",
   "ex": 197,
   "ap": "",
   "bloc": "volums_aplicacions",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "La piràmide de Kheops té una base quadrada d'aresta $215{,}25$ m i una apotema (de la piràmide) de $179{,}37$ m. Calcula la seva altura.",
   "opcions": [
    "$\\approx143{,}49$ m",
    "$71{,}75$ m",
    "$\\approx210{,}32$ m",
    "$\\approx122{,}85$ m"
   ],
   "pistes": [
    "L'apotema de la base és la meitat de l'aresta: $215{,}25:2=107{,}625$ m.",
    "L'altura, l'apotema de la base i l'apotema de la piràmide formen un triangle rectangle: $a_{\\text{piràmide}}^2=a_{\\text{base}}^2+h^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiTm8gaGFzIGZldCBzZXJ2aXIgbCdhcG90ZW1hIGRlIGxhIHBpcsOgbWlkZSAoJDE3OXssfTM3JCBtKSBlbiBlbCBjw6BsY3VsOiBhcXVlc3QgdmFsb3Igw6lzIG5vbcOpcyBsYSBtZWl0YXQgZGUgbCdhcmVzdGEgZGUgbGEgYmFzZS4iLCAiSGFzIHN1bWF0IGVuIGxsb2MgZGUgcmVzdGFyIGRpbnMgbCdhcnJlbDogbGEgcmVsYWNpw7MgcGl0YWfDsnJpY2EgZW50cmUgbCdhbHR1cmEsIGwnYXBvdGVtYSBkZSBsYSBiYXNlIGkgbCdhcG90ZW1hIGRlIGxhIHBpcsOgbWlkZSDDqXMgJGFfe1xcdGV4dHtwaXLDoG1pZGV9fV4yPWFfe1xcdGV4dHtiYXNlfX1eMitoXjIkLCBhaXjDrSBxdWUgY2FsIFJFU1RBUiAkYV97XFx0ZXh0e2Jhc2V9fV4yJCwgbm8gc3VtYXItbG8uIiwgIk5vIGNvaW5jaWRlaXggYW1iICRcXHNxcnR7MTc5eyx9MzdeMi0xMDd7LH02MjVeMn0kOiByZXZpc2EgcXVlIGwnYXBvdGVtYSBkZSBsYSBCQVNFIChsYSBtZWl0YXQgZGUgbCdhcmVzdGEsICQxMDd7LH02MjUkIG0pIMOpcyBlbCBjYXRldCBxdWUgZmFsdGEsIG5vIHVuIGFsdHJlIHZhbG9yLiJdLCAiZXJyIjogWyIiLCAiRkFDVE9SX09CTElEQVQiLCAiU0lHTkVfVEVSTUVfSU5ERVBFTkRFTlQiLCAiQVJSRUxfTUFMX0FQTElDQURBIl0sICJyZXMiOiBbIiRoPVxcc3FydHsxNzl7LH0zN14yLTEwN3ssfTYyNV4yfSQiLCAiJGhcXGFwcHJveDE0M3ssfTQ5JCBtIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 315 172\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Piràmide recta de base quadrangular regular, en perspectiva. Al costat, una cara lateral en veritable magnitud.</title><g transform=\"translate(64.0,126.0)\"><polygon points=\"0.0,-15.0 50.0,0.0 0.0,15.0 -50.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><polygon points=\"0.0,-112.0 50.0,0.0 0.0,15.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,-112.0 0.0,15.0 -50.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"0.0\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-112.0\" x2=\"-50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"116.0,-76.7 70.0,0.0 162.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"116.0\" y1=\"-76.7\" x2=\"116.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><path d=\"M 127.0 0.0 L 127.0 -11.0 L 116.0 -11.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"118.5\" y1=\"-76.7\" x2=\"181.5\" y2=\"-76.7\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"118.5\" y1=\"0.0\" x2=\"181.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"178.0\" y1=\"-76.7\" x2=\"178.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"174.0\" y1=\"-80.7\" x2=\"182.0\" y2=\"-72.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"174.0\" y1=\"-4.0\" x2=\"182.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"70.0\" y1=\"2.5\" x2=\"70.0\" y2=\"18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"162.0\" y1=\"2.5\" x2=\"162.0\" y2=\"18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"70.0\" y1=\"15.0\" x2=\"162.0\" y2=\"15.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"66.0\" y1=\"11.0\" x2=\"74.0\" y2=\"19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"158.0\" y1=\"11.0\" x2=\"166.0\" y2=\"19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"211\" y=\"-35.4\" text-anchor=\"middle\" class=\"fig-etq petita\">179,37 m</text><text x=\"116\" y=\"29.4\" text-anchor=\"middle\" class=\"fig-etq\">215,25 m</text><text x=\"116\" y=\"-83.7\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">una cara</text></g></svg>"
  },
  {
   "id": "198",
   "ex": 198,
   "ap": "",
   "bloc": "volums_aplicacions",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Una torre té la forma d'un cub de $10$ m d'aresta (sense la cara de dalt, que fa de base de la teulada) coronat per una teulada piramidal de base quadrada igual a la del cub i $12$ m d'altura. Calcula l'àrea total de la superfície exterior de la torre (parets del cub, terra del cub i teulada, sense la cara compartida entre cub i teulada).",
   "opcions": [
    "$760$ m$^2$",
    "$500$ m$^2$",
    "$1160$ m$^2$",
    "$\\approx660$ m$^2$"
   ],
   "pistes": [
    "Parets del cub (4 cares laterals): $4\\cdot10^2=400$ m$^2$; terra del cub: $10^2=100$ m$^2$.",
    "Apotema de la teulada (Pitàgores, amb altura $12$ m i apotema de la base $5$ m): $\\sqrt{12^2+5^2}=13$ m; àrea lateral de la teulada: $\\dfrac{40\\cdot13}{2}=260$ m$^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRmFsdGEgc3VtYXItaGkgbCfDoHJlYSBsYXRlcmFsIGRlbCBjdWIgKCQ0MDAkIG0kXjIkKSBvIGxhIGRlIGxhIHRldWxhZGEgKCQyNjAkIG0kXjIkKTogcmV2aXNhIHF1ZSBoaSBzaWd1aW4gbGVzIHRyZXMgcGVjZXMgKHBhcmV0cywgdGVycmEgaSB0ZXVsYWRhKS4iLCAiU2VtYmxhIHF1ZSBoYXMgY29tcHRhdCB0YW1iw6kgbGEgY2FyYSBkZSBkYWx0IGRlbCBjdWIgKHF1ZSBxdWVkYSB0YXBhZGEgcGVyIGxhIHRldWxhZGEgaSBubyBmb3JtYSBwYXJ0IGRlIGxhIHN1cGVyZsOtY2llIGV4dGVyaW9yKTogbCdlbnVuY2lhdCBkaXUgZXhwbMOtY2l0YW1lbnQgcXVlIG5vIHMnaGEgZGUgY29tcHRhci4iLCAiTm8gY29pbmNpZGVpeCBhbWIgbCfDoHJlYSBsYXRlcmFsIGRlIGxhIHRldWxhZGEgY2FsY3VsYWRhIGFtYiBQaXTDoGdvcmVzOiByZXZpc2EgcXVlIGwnYXBvdGVtYSBkZSBsYSBwaXLDoG1pZGUgc3VydCBkZSAkXFxzcXJ0ezEyXjIrNV4yfSQsIGFtYiBsJ2Fwb3RlbWEgZGUgbGEgYmFzZSAkNSQgbSAobGEgbWVpdGF0IGRlIGwnYXJlc3RhICQxMCQgbSkuIl0sICJlcnIiOiBbIiIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIkZBQ1RPUl9PQkxJREFUIiwgIkFSUkVMX01BTF9BUExJQ0FEQSJdLCAicmVzIjogWyIkQV97XFx0ZXh0e3BhcmV0c319PTRcXGNkb3QxMF4yPTQwMCQgbSReMiQiLCAiJEFfe1xcdGV4dHt0ZXJyYX19PTEwXjI9MTAwJCBtJF4yJCIsICIkYV97XFx0ZXh0e3RldWxhZGF9fT1cXHNxcnR7MTJeMis1XjJ9PTEzJCBtIiwgIiRBX3tcXHRleHR7dGV1bGFkYX19PVxcZGZyYWN7NDBcXGNkb3QxM317Mn09MjYwJCBtJF4yJCIsICIkQV97XFx0ZXh0e3RvdGFsfX09NDAwKzEwMCsyNjA9NzYwJCBtJF4yJCJdfQ=="
  },
  {
   "id": "199",
   "ex": 199,
   "ap": "",
   "bloc": "volums_aplicacions",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Un cub i una esfera tenen el mateix volum, $125$ cm$^3$. Es vol saber quin dels dos té l'àrea total més petita (és a dir, amb quina forma caldria menys material per construir un dipòsit d'aquest volum). Calcula l'àrea total del cub per començar a comparar-ho.",
   "opcions": [
    "$75$ cm$^2$",
    "$150$ cm$^2$",
    "$125$ cm$^2$",
    "$25$ cm$^2$"
   ],
   "pistes": [
    "Aresta del cub: $V=L^3=125 \\Rightarrow L=\\sqrt[3]{125}=5$ cm.",
    "Àrea total del cub: $A=6L^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJObyBjb2luY2lkZWl4IGFtYiAkNlxcY2RvdDVeMiQ6IHJldmlzYSBlbCBwcm9kdWN0ZSBwYXMgYSBwYXMuIiwgIiIsICJBcXVlc3Qgw6lzIGVsIHZvbHVtLCBubyBsJ8OgcmVhIHRvdGFsOiBwcmltZXIgY2FsIGHDr2xsYXIgbCdhcmVzdGEgJEw9XFxzcXJ0WzNdezEyNX09NSQgY20gaSBkZXNwcsOpcyBjYWxjdWxhciAkNkxeMiQuIiwgIkFxdWVzdGEgw6lzIGwnw6ByZWEgZCdVTkEgc29sYSBjYXJhICgkNV4yJCksIG5vIGRlIGxlcyAkNiQgY2FyZXMgZGVsIGN1Yi4iXSwgImVyciI6IFsiUFJPRFVDVEVfTUFMIiwgIiIsICJBUlJFTF9PQkxJREFEQSIsICJGQUNUT1JfT0JMSURBVCJdLCAicmVzIjogWyIkTD1cXHNxcnRbM117MTI1fT01JCBjbSIsICIkQT02XFxjZG90NV4yJCIsICIkQT0xNTAkIGNtJF4yJCIsICIoUGVyIGNvbXBhcmFyOiBsJ2VzZmVyYSBkZWwgbWF0ZWl4IHZvbHVtIHTDqSByYWRpICRyPVxcc3FydFszXXtcXGZyYWN7M1xcY2RvdDEyNX17NFxccGl9fVxcYXBwcm94M3ssfTEwJCBjbSBpIMOgcmVhICQ0XFxwaSByXjJcXGFwcHJveDEyMHssfTg4JCBjbSReMiQsIG1lbm9yIHF1ZSBsYSBkZWwgY3ViOiBhIGlndWFsdGF0IGRlIHZvbHVtLCBsJ2VzZmVyYSBuZWNlc3NpdGEgbWVueXMgbWF0ZXJpYWwuKSJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 158 191\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Cub d'aresta ?, dibuixat en perspectiva.</title><g transform=\"translate(14.0,48.0)\"><polygon points=\"0.0,0.0 96.0,0.0 96.0,96.0 0.0,96.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.0,0.0 34.0,-34.0 130.0,-34.0 96.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"96.0,0.0 130.0,-34.0 130.0,62.0 96.0,96.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"96.0\" x2=\"34.0\" y2=\"62.0\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"34.0\" y1=\"62.0\" x2=\"34.0\" y2=\"-34.0\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"34.0\" y1=\"62.0\" x2=\"130.0\" y2=\"62.0\" stroke=\"currentColor\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"98.5\" x2=\"0.0\" y2=\"115.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"96.0\" y1=\"98.5\" x2=\"96.0\" y2=\"115.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"112.0\" x2=\"96.0\" y2=\"112.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"108.0\" x2=\"4.0\" y2=\"116.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"92.0\" y1=\"108.0\" x2=\"100.0\" y2=\"116.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"48\" y=\"126.4\" text-anchor=\"middle\" class=\"fig-etq\">?</text></g></svg>"
  }
 ]
};
