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
  "CATET_MAL_IDENTIFICAT": "El costat que busques no és el que has triat. Fes un dibuix ràpid i marca quin costat coneixes i quin has d'aïllar abans de calcular.",
  "DIVISIO_REPETIDA": "Has dividit dues vegades pel mateix nombre. Sol passar quan la fórmula ja porta la divisió incorporada i se li torna a aplicar al final: escriu la fórmula sencera i substitueix-hi els valors d'un sol cop.",
  "FACTOR_OBLIDAT": "T'has deixat pel camí un dels factors en combinar els exponents.",
  "PAS_INTERMEDI_PER_RESPOSTA": "El valor que has triat és correcte, però és un pas intermedi, no el que et demanen. Torna a llegir la pregunta i mira quina magnitud has d'acabar donant: sovint només falta una operació més.",
  "SUMA_CATETS_SENSE_QUADRAT": "Has sumat els costats directament. Pitàgores diu que es sumen els seus QUADRATS, i al final es fa l'arrel del resultat.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau."
 },
 "items": [
  {
   "id": "146",
   "ex": 146,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Una torre fa 150 m d'alçada i la seva ombra s'estén 200 m pel terra pla. Quina distància hi ha des del punt més alt de la torre fins a l'extrem de l'ombra?",
   "opcions": [
    "350 m",
    "$250$ m",
    "50 m",
    "62500 m"
   ],
   "pistes": [
    "L'alçada de la torre i l'ombra total formen els dos catets d'un triangle rectangle; la distància demanada n'és la hipotenusa.",
    "Aplica Pitàgores: $\\sqrt{150^2+200^2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgc3VtYXQgZGlyZWN0YW1lbnQgbCdhbMOnYWRhIGkgbCdvbWJyYSAoJDE1MCsyMDAkKSBlbiBsbG9jIGQnYXBsaWNhciBQaXTDoGdvcmVzOiBsYSBkaXN0w6BuY2lhIGRlbWFuYWRhIMOpcyBsYSBoaXBvdGVudXNhIGQndW4gdHJpYW5nbGUgcmVjdGFuZ2xlLCBubyBsYSBzdW1hIGRlbHMgY2F0ZXRzLiIsICIiLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZGUgcmVzdGFyIGwnb21icmEgaSBsJ2Fsw6dhZGEgZGlyZWN0YW1lbnQsIHNlbnNlIGVsZXZhci1sZXMgYWwgcXVhZHJhdCBuaSBmZXIgbCdhcnJlbDogY2FsIGFwbGljYXIgUGl0w6Bnb3JlcyBhbWIgZWxzIGRvcyBjYXRldHMsIG5vIHJlc3Rhci1sb3MuIiwgIkhhcyBjYWxjdWxhdCAkMTUwXjIrMjAwXjI9NjJcXCw1MDAkIGNvcnJlY3RhbWVudCwgcGVyw7IgdCdoYXMgZGVpeGF0IGwnYXJyZWwgcXVhZHJhZGEgZmluYWwuIl0sICJlcnIiOiBbIlNVTUFfQ0FURVRTX1NFTlNFX1FVQURSQVQiLCAiIiwgIlNJR05FX1BJVEFHT1JFUyIsICJBUlJFTF9PQkxJREFEQSJdLCAicmVzIjogWyIkXFxzcXJ0ezE1MF4yKzIwMF4yfT1cXHNxcnR7NjI1MDB9PTI1MCQgbSJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 259 189\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Triangle rectangle de catets 200 m i 150 m.</title><g transform=\"translate(74.3,14.0)\"><polygon points=\"0.0,127.5 170.0,127.5 0.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M 12.0 127.5 L 12.0 115.5 L 0.0 115.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"130.0\" x2=\"0.0\" y2=\"147.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"170.0\" y1=\"130.0\" x2=\"170.0\" y2=\"147.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"143.5\" x2=\"170.0\" y2=\"143.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"139.5\" x2=\"4.0\" y2=\"147.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"166.0\" y1=\"139.5\" x2=\"174.0\" y2=\"147.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-19.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"127.5\" x2=\"-19.5\" y2=\"127.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-16.0\" y1=\"0.0\" x2=\"-16.0\" y2=\"127.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"-4.0\" x2=\"-20.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"123.5\" x2=\"-20.0\" y2=\"131.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"85\" y=\"157.9\" text-anchor=\"middle\" class=\"fig-etq\">200 m</text><text x=\"-42\" y=\"67.1\" text-anchor=\"middle\" class=\"fig-etq\">150 m</text></g></svg>"
  },
  {
   "id": "147",
   "ex": 147,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Una escala de 10 m de longitud està recolzada sobre una paret. El peu de l'escala dista 6 m de la paret. A quina altura arriba l'escala sobre la paret?",
   "opcions": [
    "64 m",
    "$8$ m",
    "16 m",
    "136 m"
   ],
   "pistes": [
    "L'escala fa d'hipotenusa; la distància del peu a la paret i l'altura on arriba són els dos catets.",
    "Aplica Pitàgores: $\\sqrt{10^2-6^2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgY2FsY3VsYXQgJDEwXjItNl4yPTY0JCBjb3JyZWN0YW1lbnQsIHBlcsOyIHQnaGFzIGRlaXhhdCBsJ2FycmVsIHF1YWRyYWRhIGZpbmFsLiIsICIiLCAiSGFzIHN1bWF0IGRpcmVjdGFtZW50IGwnZXNjYWxhIGkgbGEgZGlzdMOgbmNpYSBhbCBwZXUgKCQxMCs2JCkgZW4gbGxvYyBkJ2FwbGljYXIgUGl0w6Bnb3Jlcy4iLCAiTCdlc2NhbGEgKGxhIGxvbmdpdHVkIHRvdGFsKSBmYSBkJ2hpcG90ZW51c2EsIGkgbGEgZGlzdMOgbmNpYSBkZWwgcGV1IGEgbGEgcGFyZXQgw6lzIHVuIGNhdGV0OiBjYWwgUkVTVEFSIGVscyBzZXVzIHF1YWRyYXRzIHBlciB0cm9iYXIgbCdhbHR1cmEsIG5vIHN1bWFyLWxvcy4iXSwgImVyciI6IFsiQVJSRUxfT0JMSURBREEiLCAiIiwgIlNVTUFfQ0FURVRTX1NFTlNFX1FVQURSQVQiLCAiU0lHTkVfUElUQUdPUkVTIl0sICJyZXMiOiBbIiRcXHNxcnR7MTBeMi02XjJ9PVxcc3FydHs2NH09OCQgbSJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 229 231\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Triangle rectangle de catets 6 m i ?.</title><g transform=\"translate(44.7,14.0)\"><polygon points=\"0.0,170.0 170.0,170.0 0.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M 12.0 170.0 L 12.0 158.0 L 0.0 158.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"172.5\" x2=\"0.0\" y2=\"189.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"170.0\" y1=\"172.5\" x2=\"170.0\" y2=\"189.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"186.0\" x2=\"170.0\" y2=\"186.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"182.0\" x2=\"4.0\" y2=\"190.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"166.0\" y1=\"182.0\" x2=\"174.0\" y2=\"190.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-19.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"170.0\" x2=\"-19.5\" y2=\"170.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-16.0\" y1=\"0.0\" x2=\"-16.0\" y2=\"170.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"-4.0\" x2=\"-20.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"166.0\" x2=\"-20.0\" y2=\"174.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line x1=\"170.0\" y1=\"170.0\" x2=\"0.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2.5\"/><text x=\"85\" y=\"200.4\" text-anchor=\"middle\" class=\"fig-etq\">6 m</text><text x=\"-27\" y=\"88.4\" text-anchor=\"middle\" class=\"fig-etq\">?</text><text x=\"136.4\" y=\"118.6\" text-anchor=\"middle\" class=\"fig-etq\">10 m</text></g></svg>"
  },
  {
   "id": "148a",
   "ex": 148,
   "ap": "a",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Als costats d'un camp quadrangular s'han plantat 32 arbres, separats 5 m entre ells. Quant mesura el costat del camp?",
   "opcions": [
    "$40$ m",
    "$32$ m",
    "$160$ m",
    "$5$ m"
   ],
   "pistes": [
    "Cada arbre marca una separació de $5$ m al voltant de tot el perímetre: perímetre $=32\\times5$.",
    "El camp és quadrangular (quadrat): costat $=\\dfrac{\\text{perímetre}}{4}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0IMOpcyBlbCBub21icmUgZCdhcmJyZXMsIG5vIGVsIGNvc3RhdDogcHJpbWVyIGNhbCB0cm9iYXIgZWwgcGVyw61tZXRyZSB0b3RhbCAoJDMyJCBhcmJyZXMgJFxcdGltZXM1JCBtIGRlIHNlcGFyYWNpw7MpIGkgZGVzcHLDqXMgZGl2aWRpci1sbyBlbnRyZSBlbHMgJDQkIGNvc3RhdHMuIiwgIkFxdWVzdCDDqXMgZWwgUEVSw41NRVRSRSBkZWwgY2FtcCAoJDMyXFx0aW1lczUkKSwgbm8gZWwgY29zdGF0OiBlbmNhcmEgZmFsdGEgZGl2aWRpci1sbyBlbnRyZSBlbHMgJDQkIGNvc3RhdHMuIiwgIkFxdWVzdGEgw6lzIGxhIHNlcGFyYWNpw7MgZW50cmUgYXJicmVzLCBubyBlbCBjb3N0YXQgZGVsIGNhbXA6IGVuY2FyYSBmYWx0YSBjYWxjdWxhciBlbCBwZXLDrW1ldHJlIHRvdGFsIGkgZGl2aWRpciBlbnRyZSA0LiJdLCAiZXJyIjogWyIiLCAiQ0FURVRfTUFMX0lERU5USUZJQ0FUIiwgIlBBU19JTlRFUk1FRElfUEVSX1JFU1BPU1RBIiwgIlBBU19JTlRFUk1FRElfUEVSX1JFU1BPU1RBIl0sICJyZXMiOiBbIlBlcsOtbWV0cmU6ICQzMlxcdGltZXM1PTE2MCQgbSIsICJDb3N0YXQ6ICRcXGRmcmFjezE2MH17NH09NDAkIG0iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 156 156\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Quadrat de 4 costats.</title><g transform=\"translate(77.6,77.6)\"><polygon points=\"63.6,63.6 -63.6,63.6 -63.6,-63.6 63.6,-63.6\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/></g></svg>"
  },
  {
   "id": "148b",
   "ex": 148,
   "ap": "b",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Amb les mateixes dades de l'apartat anterior (32 arbres, separats 5 m, camp quadrangular): quina és l'àrea del camp?",
   "opcions": [
    "$80$ m$^2$",
    "$6\\,400$ m$^2$",
    "$160$ m$^2$",
    "$1\\,600$ m$^2$"
   ],
   "pistes": [
    "El costat del camp és $40$ m (perímetre $160$ m entre $4$).",
    "L'àrea d'un quadrat és costat al quadrat: $40^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igbm8gZWxldmEgZWwgY29zdGF0IGFsIHF1YWRyYXQ6IGwnw6ByZWEgZCd1biBxdWFkcmF0IGRlIGNvc3RhdCAkTCQgw6lzICRMXjIkLCBubyAkMkwkLiIsICJBcXVlc3QgdmFsb3IgZWxldmEgZWwgcGVyw61tZXRyZSBhbCBxdWFkcmF0ICgkMTYwXjIkKSBlbiBsbG9jIGRlbCBjb3N0YXQ6IHByaW1lciBjYWwgdHJvYmFyIGVsIGNvc3RhdCAoJDE2MDo0PTQwJCkgaSBkZXNwcsOpcyBlbGV2YXItbG8gYWwgcXVhZHJhdC4iLCAiQXF1ZXN0IMOpcyBlbCBwZXLDrW1ldHJlIGRlbCBjYW1wLCBubyBsJ8OgcmVhOiBlbmNhcmEgZmFsdGEgZWxldmFyIGVsIGNvc3RhdCBhbCBxdWFkcmF0LiIsICIiXSwgImVyciI6IFsiQVJSRUxfRkFDVE9SX09CTElEQVQiLCAiQ0FURVRfTUFMX0lERU5USUZJQ0FUIiwgIlBBU19JTlRFUk1FRElfUEVSX1JFU1BPU1RBIiwgIiJdLCAicmVzIjogWyJDb3N0YXQ6ICRcXGRmcmFjezE2MH17NH09NDAkIG0iLCAiw4ByZWE6ICQ0MF4yPTFcXCw2MDAkIG0kXjIkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 156 189\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Quadrat, costat 40 m.</title><g transform=\"translate(77.6,77.6)\"><polygon points=\"63.6,63.6 -63.6,63.6 -63.6,-63.6 63.6,-63.6\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"63.6\" y1=\"66.1\" x2=\"63.6\" y2=\"83.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-63.6\" y1=\"66.1\" x2=\"-63.6\" y2=\"83.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"63.6\" y1=\"79.6\" x2=\"-63.6\" y2=\"79.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"67.6\" y1=\"75.6\" x2=\"59.6\" y2=\"83.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-59.6\" y1=\"75.6\" x2=\"-67.6\" y2=\"83.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"0\" y=\"94\" text-anchor=\"middle\" class=\"fig-etq\">40 m</text></g></svg>"
  },
  {
   "id": "149",
   "ex": 149,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Un senyal de trànsit d'STOP té forma d'octàgon regular, amb una altura de 90 cm (distància entre costats oposats) i un costat de 37 cm. Quina és la seva àrea?",
   "opcions": [
    "$3\\,330$ cm$^2$",
    "$1\\,665$ cm$^2$",
    "$6\\,660$ cm$^2$",
    "$16\\,650$ cm$^2$"
   ],
   "pistes": [
    "L'apotema d'un octàgon regular és la meitat de l'alçada (la distància entre dos costats oposats): $\\dfrac{90}{2}=45$ cm.",
    "Perímetre: $8\\times37$; àrea: $\\dfrac{\\text{perímetre}\\cdot\\text{apotema}}{2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3QgdmFsb3IgZGl2aWRlaXggcGVyICQyJCB1bmEgdmVnYWRhIGRlIG3DqXM6IHVuIGNvcCB0ZW5zIGVsIHBlcsOtbWV0cmUgaSBsJ2Fwb3RlbWEsIGwnw6ByZWEgw6lzICRcXGRmcmFje1xcdGV4dHtwZXLDrW1ldHJlfVxcY2RvdFxcdGV4dHthcG90ZW1hfX17Mn0kLCBpIGphIGhhcyBhcGxpY2F0IGFxdWVzdGEgZGl2aXNpw7Mgc2kgaGFzIGZldCAkXFxkZnJhY3syOTZcXGNkb3Q0NX17Mn0kIGNvcnJlY3RhbWVudCDigJQgY29tcHJvdmEgcXVlIG5vIGwnaGFzIHRvcm5hdCBhIGRpdmlkaXIgcGVyICQyJC4iLCAiQXF1ZXN0IHZhbG9yIHNlbWJsYSBkaXZpZGlyIHBlciAkMiQgZHVlcyB2ZWdhZGVzIG3DqXMgZGVsIGNvbXB0ZTogcmV2aXNhIGVsIGPDoGxjdWwgJFxcZGZyYWN7Mjk2XFxjZG90NDV9ezJ9JCBwYXMgYSBwYXMuIiwgIiIsICJBcXVlc3QgdmFsb3Igc2VtYmxhIGZldCBzZXJ2aXIgbCdhbMOnYWRhIHNlbmNlcmEgKCQ5MCQgY20pIGNvbSBzaSBmb3MgbCdhcG90ZW1hLCBlbiBsbG9jIGRlIGxhIHNldmEgbWVpdGF0ICgkNDUkIGNtKTogZW4gdW4gb2N0w6Bnb24gcmVndWxhciwgbCdhbMOnYWRhIChkaXN0w6BuY2lhIGVudHJlIGNvc3RhdHMgb3Bvc2F0cykgw6lzIGVsIERPQkxFIGRlIGwnYXBvdGVtYS4iXSwgImVyciI6IFsiQVJSRUxfRkFDVE9SX09CTElEQVQiLCAiRElWSVNJT19SRVBFVElEQSIsICIiLCAiQ0FURVRfTUFMX0lERU5USUZJQ0FUIl0sICJyZXMiOiBbIkFwb3RlbWE6ICRcXGRmcmFjezkwfXsyfT00NSQgY20iLCAiUGVyw61tZXRyZTogJDhcXHRpbWVzMzc9Mjk2JCBjbSIsICLDgHJlYTogJFxcZGZyYWN7Mjk2XFx0aW1lczQ1fXsyfT02XFwsNjYwJCBjbSReMiQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 195 228\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Octàgon regular, costat 37 cm, amb l'apotema marcada.</title><g transform=\"translate(97.1,97.1)\"><polygon points=\"34.4,83.1 -34.4,83.1 -83.1,34.4 -83.1,-34.4 -34.4,-83.1 34.4,-83.1 83.1,-34.4 83.1,34.4\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"34.4\" y1=\"85.6\" x2=\"34.4\" y2=\"102.6\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-34.4\" y1=\"85.6\" x2=\"-34.4\" y2=\"102.6\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"34.4\" y1=\"99.1\" x2=\"-34.4\" y2=\"99.1\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"38.4\" y1=\"95.1\" x2=\"30.4\" y2=\"103.1\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-30.4\" y1=\"95.1\" x2=\"-38.4\" y2=\"103.1\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"0.0\" y2=\"83.1\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2.5\"/><path d=\"M 9.0 83.1 L 9.0 74.1 L 0.0 74.1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"0\" y=\"113.5\" text-anchor=\"middle\" class=\"fig-etq\">37 cm</text><text x=\"-26\" y=\"44.9\" text-anchor=\"middle\" class=\"fig-etq\">45 cm</text></g></svg>"
  },
  {
   "id": "150",
   "ex": 150,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Cada un dels 50 pisos d'un edifici té la planta d'un hexàgon regular de costat 30 m. Si el terra té una moqueta que costa 20 €/m$^2$, calcula el preu total pagat per la moqueta de l'edifici.",
   "opcions": [
    "$1\\,350\\sqrt3\\approx2\\,338{,}27$ €",
    "$116\\,913{,}43$ €",
    "$46\\,765{,}37$ €",
    "$2\\,338\\,268{,}59$ €"
   ],
   "pistes": [
    "Calcula primer l'àrea d'un pis (hexàgon regular de costat 30 m): $A=\\dfrac{3L^2\\sqrt3}{2}$.",
    "Multiplica l'àrea d'un pis pel preu del m$^2$ i pels $50$ pisos de l'edifici."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igw6lzIGwnw6ByZWEgKGVuIG0kXjIkKSBkJ3VuIHNvbCBwaXMsIHNlbnNlIG11bHRpcGxpY2FyLWxhIG5pIHBlbCBwcmV1IGRlbCBtJF4yJCBuaSBwZWxzICQ1MCQgcGlzb3MuIiwgIkFxdWVzdCB2YWxvciDDqXMgZWwgY29zdCB0b3RhbCBkZSBsYSBtb3F1ZXRhIGQndW4gU09MIHBpcyAoJDIwJCDigqwvbSReMiQgaW5jbG9zb3MpLCBzZW5zZSBtdWx0aXBsaWNhciBwZWxzICQ1MCQgcGlzb3MgZGUgbCdlZGlmaWNpLiIsICJBcXVlc3QgdmFsb3Igc2VtYmxhIGVsIGNvc3QgZCd1biBzb2wgcGlzICjDoHJlYSAkXFx0aW1lczIwJCDigqwpLCBzZW5zZSBtdWx0aXBsaWNhciBwZWxzICQ1MCQgcGlzb3MgZGUgbCdlZGlmaWNpLiIsICIiXSwgImVyciI6IFsiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIiJdLCAicmVzIjogWyLDgHJlYSBkJ3VuIHBpczogJFxcZGZyYWN7M1xcY2RvdDMwXjJcXHNxcnQzfXsyfT0xXFwsMzUwXFxzcXJ0M1xcYXBwcm94MlxcLDMzOHssfTI3JCBtJF4yJCIsICJDb3N0IGQndW4gcGlzOiAkMlxcLDMzOHssfTI3XFx0aW1lczIwXFxhcHByb3g0NlxcLDc2NXssfTM3JCDigqwiLCAiQ29zdCB0b3RhbCAoJDUwJCBwaXNvcyk6ICQ0NlxcLDc2NXssfTM3XFx0aW1lczUwXFxhcHByb3gyXFwsMzM4XFwsMjY4eyx9NTkkIOKCrCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 208 217\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Hexàgon regular, costat 30 m.</title><g transform=\"translate(104.0,91.9)\"><polygon points=\"45.0,77.9 -45.0,77.9 -90.0,0.0 -45.0,-77.9 45.0,-77.9 90.0,-0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"45.0\" y1=\"80.4\" x2=\"45.0\" y2=\"97.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-45.0\" y1=\"80.4\" x2=\"-45.0\" y2=\"97.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"45.0\" y1=\"93.9\" x2=\"-45.0\" y2=\"93.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"49.0\" y1=\"89.9\" x2=\"41.0\" y2=\"97.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-41.0\" y1=\"89.9\" x2=\"-49.0\" y2=\"97.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"0\" y=\"108.3\" text-anchor=\"middle\" class=\"fig-etq\">30 m</text></g></svg>"
  },
  {
   "id": "151",
   "ex": 151,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Un pastisser ha cobert de sucre la part superior de 200 rosquilles: cadascuna té diàmetre exterior 6 cm i un forat central de diàmetre 5 cm. Si ha fet servir 5 kg de sucre, quants grams de sucre fan falta per cobrir cada centímetre quadrat de rosquilla?",
   "opcions": [
    "$\\approx2{,}89$ g/cm$^2$",
    "$\\approx0{,}91$ g/cm$^2$",
    "$\\approx28{,}94$ g/cm$^2$",
    "$\\approx1{,}45$ g/cm$^2$"
   ],
   "pistes": [
    "L'àrea de la part superior d'una rosquilla és una corona circular: àrea del cercle exterior (radi $3$ cm) menys la del forat (radi $2{,}5$ cm).",
    "Multiplica l'àrea d'una rosquilla per les $200$ unitats, i divideix els $5\\,000$ g de sucre entre aquesta àrea total."
   ],
   "nota": "La \"rosquilla\" es tracta com una corona circular plana (només la cara de dalt, que és la que es cobreix de sucre), no com un cos de tres dimensions: els $6$ cm i els $5$ cm són diàmetres, l'exterior i el del forat.",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0IHZhbG9yIHNlbWJsYSBkaXZpZGlyIGVscyAkNVxcLDAwMCQgZyBlbnRyZSBsJ8OgcmVhIGQnVU5BIHNvbGEgcm9zcXVpbGxhLCBubyBlbnRyZSBsJ8OgcmVhIHRvdGFsIGRlIGxlcyAkMjAwJCByb3NxdWlsbGVzLiIsICJBcXVlc3QgdmFsb3Igbm8gbXVsdGlwbGljYSBsJ8OgcmVhIGQndW5hIHJvc3F1aWxsYSBwZXIgbGVzICQyMDAkIHVuaXRhdHMgYWJhbnMgZGUgZGl2aWRpciBlbCBzdWNyZTogcmV2aXNhIHF1ZSBoYXMgY2FsY3VsYXQgbCfDoHJlYSBUT1RBTCwgbm8gbGEgZCd1bmEgc29sYSByb3NxdWlsbGEuIiwgIkFxdWVzdCB2YWxvciBzZW1ibGEgZmV0IHNlcnZpciBlbHMgZGnDoG1ldHJlcyBkaXJlY3RhbWVudCBjb20gYSByYWRpcyBlbiBjYWxjdWxhciBsJ8OgcmVhIGRlIGxhIGNvcm9uYSBjaXJjdWxhcjogZWwgcmFkaSDDqXMgbGEgTUVJVEFUIGRlbCBkacOgbWV0cmUgKCQzJCBjbSBpICQyeyx9NSQgY20pLCBubyBlbCBkacOgbWV0cmUgc2VuY2VyICgkNiQgY20gaSAkNSQgY20pLiJdLCAiZXJyIjogWyIiLCAiRkFDVE9SX09CTElEQVQiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICJDQVRFVF9NQUxfSURFTlRJRklDQVQiXSwgInJlcyI6IFsiw4ByZWEgZCd1bmEgcm9zcXVpbGxhOiAkXFxwaVxcY2RvdDNeMi1cXHBpXFxjZG90MnssfTVeMj04eyx9NjQkIGNtJF4yJCIsICLDgHJlYSB0b3RhbCAoJDIwMCQgcm9zcXVpbGxlcyk6ICQ4eyx9NjRcXHRpbWVzMjAwPTFcXCw3Mjd7LH04OCQgY20kXjIkIiwgIlN1Y3JlIHBlciBjbSReMiQ6ICRcXGRmcmFjezVcXCwwMDB9ezFcXCw3Mjd7LH04OH1cXGFwcHJveDJ7LH04OSQgZy9jbSReMiQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 267 188\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Corona circular: radi exterior 3 cm, radi interior 2,5 cm.</title><g transform=\"translate(94.0,94.0)\"><path d=\"M0,0 m-80,0 a80,80 0 1,0 160,0 a80,80 0 1,0 -160,0 M0,0 m-66.6667,0 a66.6667,66.6667 0 1,0 133.333,0 a66.6667,66.6667 0 1,0 -133.333,0\" fill-rule=\"evenodd\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"66.7\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"-56.6\" y2=\"-56.6\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-crida\" x1=\"33.3\" y1=\"0.0\" x2=\"85.1\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/><text x=\"123.3\" y=\"2.9\" text-anchor=\"middle\" class=\"fig-etq petita\">int. 2,5 cm</text><text x=\"-3.1\" y=\"-36.9\" text-anchor=\"middle\" class=\"fig-etq petita\">ext. 3 cm</text></g></svg>"
  }
 ]
};
