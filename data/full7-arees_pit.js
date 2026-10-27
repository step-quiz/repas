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
  "ARREL_OBLIDADA": "T'has quedat amb el quadrat (o el cub) de la incògnita. De $x^2=k$ encara falta l'arrel per arribar a $x$: comprova sempre quina de les dues quantitats et demanen.",
  "CATET_MAL_IDENTIFICAT": "El costat que busques no és el que has triat. Fes un dibuix ràpid i marca quin costat coneixes i quin has d'aïllar abans de calcular.",
  "HIPOTENUSA_PER_AREA": "Has calculat la hipotenusa, i el que es demanava era l'àrea. Torna a llegir la pregunta abans de començar: quan un triangle rectangle té els dos catets donats, ja els tens fets de base i altura i no cal cap Pitàgores.",
  "INVERTIDA": "Has invertit la fracció. Simplificar no canvia quin terme és a dalt i quin a baix.",
  "MEITAT_OBLIDADA": "Hi ha un factor $2$ pel mig que t'has deixat: radi i diàmetre, semibase i base, semidiagonal i diagonal. Comprova quina de les dues et demanen.",
  "PAS_INTERMEDI_PER_RESPOSTA": "El valor que has triat és correcte, però és un pas intermedi, no el que et demanen. Torna a llegir la pregunta i mira quina magnitud has d'acabar donant: sovint només falta una operació més.",
  "POTENCIA_DE_SUMA": "Aquí els dos nombres es MULTIPLIQUEN dins del parèntesi, no se sumen: la potència és d'un producte, $(a\\cdot b)^n$, no d'una suma, $(a+b)^n$.",
  "SUMA_CATETS_SENSE_QUADRAT": "Has sumat els costats directament. Pitàgores diu que es sumen els seus QUADRATS, i al final es fa l'arrel del resultat.",
  "SUMA_EN_LLOC_RESTA": "Sumar un nombre negatiu és restar-lo."
 },
 "items": [
  {
   "id": "332a",
   "ex": 332,
   "ap": "a",
   "bloc": "arees_pit",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula l'àrea d'aquest triangle rectangle, amb les dades següents.",
   "enunciat": "Els catets fan $3$ cm i $4$ cm.",
   "opcions": [
    "$6$ cm$^2$",
    "$7$ cm$^2$",
    "$12$ cm$^2$",
    "$5$ cm$^2$"
   ],
   "pistes": [
    "En un triangle rectangle, els dos catets ja fan de base i d'altura.",
    "$A=\\dfrac{3\\cdot 4}{2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIHN1bWF0ICQzKzQkLiBIYXMgc3VtYXQgZWxzIGNvc3RhdHMgZGlyZWN0YW1lbnQuIFBpdMOgZ29yZXMgZGl1IHF1ZSBlcyBzdW1lbiBlbHMgc2V1cyBRVUFEUkFUUywgaSBhbCBmaW5hbCBlcyBmYSBsJ2FycmVsIGRlbCByZXN1bHRhdC4iLCAiSGFzIG11bHRpcGxpY2F0IGVscyBjYXRldHMgaSBwcm91OiAkM1xcY2RvdCA0PTEyJC4gSGkgaGEgdW4gZmFjdG9yICQyJCBwZWwgbWlnIHF1ZSB0J2hhcyBkZWl4YXQ6IHJhZGkgaSBkacOgbWV0cmUsIHNlbWliYXNlIGkgYmFzZSwgc2VtaWRpYWdvbmFsIGkgZGlhZ29uYWwuIENvbXByb3ZhIHF1aW5hIGRlIGxlcyBkdWVzIGV0IGRlbWFuZW4uIiwgIkhhcyBjYWxjdWxhdCBsYSBoaXBvdGVudXNhLCBpIGVsIHF1ZSBlcyBkZW1hbmF2YSBlcmEgbCfDoHJlYS4gVG9ybmEgYSBsbGVnaXIgbGEgcHJlZ3VudGEgYWJhbnMgZGUgY29tZW7Dp2FyOiBxdWFuIHVuIHRyaWFuZ2xlIHJlY3RhbmdsZSB0w6kgZWxzIGRvcyBjYXRldHMgZG9uYXRzLCBqYSBlbHMgdGVucyBmZXRzIGRlIGJhc2UgaSBhbHR1cmEgaSBubyBjYWwgY2FwIFBpdMOgZ29yZXMuIl0sICJlcnIiOiBbIiIsICJTVU1BX0NBVEVUU19TRU5TRV9RVUFEUkFUIiwgIk1FSVRBVF9PQkxJREFEQSIsICJISVBPVEVOVVNBX1BFUl9BUkVBIl0sICJyZXMiOiBbIiRBPVxcZGZyYWN7YlxcY2RvdCBofXsyfT1cXGRmcmFjezNcXGNkb3QgNH17Mn09NiQgY20kXjIkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 249 231\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Triangle rectangle de catets 3 cm i 4 cm.</title><g transform=\"translate(64.6,14.0)\"><polygon points=\"0.0,170.0 170.0,170.0 0.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M 12.0 170.0 L 12.0 158.0 L 0.0 158.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"172.5\" x2=\"0.0\" y2=\"189.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"170.0\" y1=\"172.5\" x2=\"170.0\" y2=\"189.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"186.0\" x2=\"170.0\" y2=\"186.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"182.0\" x2=\"4.0\" y2=\"190.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"166.0\" y1=\"182.0\" x2=\"174.0\" y2=\"190.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-19.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"170.0\" x2=\"-19.5\" y2=\"170.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-16.0\" y1=\"0.0\" x2=\"-16.0\" y2=\"170.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"-4.0\" x2=\"-20.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"166.0\" x2=\"-20.0\" y2=\"174.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"85\" y=\"200.4\" text-anchor=\"middle\" class=\"fig-etq\">3 cm</text><text x=\"-36\" y=\"88.4\" text-anchor=\"middle\" class=\"fig-etq\">4 cm</text></g></svg>"
  },
  {
   "id": "332b",
   "ex": 332,
   "ap": "b",
   "bloc": "arees_pit",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula l'àrea d'aquest triangle rectangle, amb les dades següents.",
   "enunciat": "Els catets fan $6$ m i $8$ m.",
   "opcions": [
    "$10$ m$^2$",
    "$48$ m$^2$",
    "$14$ m$^2$",
    "$24$ m$^2$"
   ],
   "pistes": [
    "Els catets són la base i l'altura.",
    "$A=\\dfrac{6\\cdot 8}{2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgY2FsY3VsYXQgbGEgaGlwb3RlbnVzYSwgaSBlbCBxdWUgZXMgZGVtYW5hdmEgZXJhIGwnw6ByZWEuIFRvcm5hIGEgbGxlZ2lyIGxhIHByZWd1bnRhIGFiYW5zIGRlIGNvbWVuw6dhcjogcXVhbiB1biB0cmlhbmdsZSByZWN0YW5nbGUgdMOpIGVscyBkb3MgY2F0ZXRzIGRvbmF0cywgamEgZWxzIHRlbnMgZmV0cyBkZSBiYXNlIGkgYWx0dXJhIGkgbm8gY2FsIGNhcCBQaXTDoGdvcmVzLiIsICIkNlxcY2RvdCA4PTQ4JCwgaSBlbmNhcmEgZmFsdGEgZGl2aWRpciBwZXIgJDIkLiBIaSBoYSB1biBmYWN0b3IgJDIkIHBlbCBtaWcgcXVlIHQnaGFzIGRlaXhhdDogcmFkaSBpIGRpw6BtZXRyZSwgc2VtaWJhc2UgaSBiYXNlLCBzZW1pZGlhZ29uYWwgaSBkaWFnb25hbC4gQ29tcHJvdmEgcXVpbmEgZGUgbGVzIGR1ZXMgZXQgZGVtYW5lbi4iLCAiSGFzIHN1bWF0ICQ2KzgkLiBIYXMgc3VtYXQgZWxzIGNvc3RhdHMgZGlyZWN0YW1lbnQuIFBpdMOgZ29yZXMgZGl1IHF1ZSBlcyBzdW1lbiBlbHMgc2V1cyBRVUFEUkFUUywgaSBhbCBmaW5hbCBlcyBmYSBsJ2FycmVsIGRlbCByZXN1bHRhdC4iLCAiIl0sICJlcnIiOiBbIkhJUE9URU5VU0FfUEVSX0FSRUEiLCAiTUVJVEFUX09CTElEQURBIiwgIlNVTUFfQ0FURVRTX1NFTlNFX1FVQURSQVQiLCAiIl0sICJyZXMiOiBbIiRBPVxcZGZyYWN7NlxcY2RvdCA4fXsyfT1cXGRmcmFjezQ4fXsyfT0yNCQgbSReMiQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 240 231\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Triangle rectangle de catets 6 m i 8 m.</title><g transform=\"translate(56.0,14.0)\"><polygon points=\"0.0,170.0 170.0,170.0 0.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M 12.0 170.0 L 12.0 158.0 L 0.0 158.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"172.5\" x2=\"0.0\" y2=\"189.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"170.0\" y1=\"172.5\" x2=\"170.0\" y2=\"189.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"186.0\" x2=\"170.0\" y2=\"186.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"182.0\" x2=\"4.0\" y2=\"190.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"166.0\" y1=\"182.0\" x2=\"174.0\" y2=\"190.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-19.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"170.0\" x2=\"-19.5\" y2=\"170.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-16.0\" y1=\"0.0\" x2=\"-16.0\" y2=\"170.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"-4.0\" x2=\"-20.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"166.0\" x2=\"-20.0\" y2=\"174.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"85\" y=\"200.4\" text-anchor=\"middle\" class=\"fig-etq\">6 m</text><text x=\"-31\" y=\"88.4\" text-anchor=\"middle\" class=\"fig-etq\">8 m</text></g></svg>"
  },
  {
   "id": "332c",
   "ex": 332,
   "ap": "c",
   "bloc": "arees_pit",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula l'àrea d'aquest triangle rectangle, amb les dades següents.",
   "enunciat": "Els catets fan $5$ cm i $12$ cm.",
   "opcions": [
    "$30$ cm$^2$",
    "$60$ cm$^2$",
    "$13$ cm$^2$",
    "$17$ cm$^2$"
   ],
   "pistes": [
    "Els catets fan de base i d'altura.",
    "$A=\\dfrac{5\\cdot 12}{2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJDVcXGNkb3QgMTI9NjAkOyBmYWx0YSBsYSBtZWl0YXQuIEhpIGhhIHVuIGZhY3RvciAkMiQgcGVsIG1pZyBxdWUgdCdoYXMgZGVpeGF0OiByYWRpIGkgZGnDoG1ldHJlLCBzZW1pYmFzZSBpIGJhc2UsIHNlbWlkaWFnb25hbCBpIGRpYWdvbmFsLiBDb21wcm92YSBxdWluYSBkZSBsZXMgZHVlcyBldCBkZW1hbmVuLiIsICJIYXMgY2FsY3VsYXQgbGEgaGlwb3RlbnVzYSwgaSBlbCBxdWUgZXMgZGVtYW5hdmEgZXJhIGwnw6ByZWEuIFRvcm5hIGEgbGxlZ2lyIGxhIHByZWd1bnRhIGFiYW5zIGRlIGNvbWVuw6dhcjogcXVhbiB1biB0cmlhbmdsZSByZWN0YW5nbGUgdMOpIGVscyBkb3MgY2F0ZXRzIGRvbmF0cywgamEgZWxzIHRlbnMgZmV0cyBkZSBiYXNlIGkgYWx0dXJhIGkgbm8gY2FsIGNhcCBQaXTDoGdvcmVzLiIsICJIYXMgc3VtYXQgJDUrMTIkLiBIYXMgc3VtYXQgZWxzIGNvc3RhdHMgZGlyZWN0YW1lbnQuIFBpdMOgZ29yZXMgZGl1IHF1ZSBlcyBzdW1lbiBlbHMgc2V1cyBRVUFEUkFUUywgaSBhbCBmaW5hbCBlcyBmYSBsJ2FycmVsIGRlbCByZXN1bHRhdC4iXSwgImVyciI6IFsiIiwgIk1FSVRBVF9PQkxJREFEQSIsICJISVBPVEVOVVNBX1BFUl9BUkVBIiwgIlNVTUFfQ0FURVRTX1NFTlNFX1FVQURSQVQiXSwgInJlcyI6IFsiJEE9XFxkZnJhY3s1XFxjZG90IDEyfXsyfT1cXGRmcmFjezYwfXsyfT0zMCQgY20kXjIkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 259 231\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Triangle rectangle de catets 5 cm i 12 cm.</title><g transform=\"translate(74.3,14.0)\"><polygon points=\"0.0,170.0 170.0,170.0 0.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M 12.0 170.0 L 12.0 158.0 L 0.0 158.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"172.5\" x2=\"0.0\" y2=\"189.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"170.0\" y1=\"172.5\" x2=\"170.0\" y2=\"189.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"186.0\" x2=\"170.0\" y2=\"186.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"182.0\" x2=\"4.0\" y2=\"190.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"166.0\" y1=\"182.0\" x2=\"174.0\" y2=\"190.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-19.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"170.0\" x2=\"-19.5\" y2=\"170.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-16.0\" y1=\"0.0\" x2=\"-16.0\" y2=\"170.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"-4.0\" x2=\"-20.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"166.0\" x2=\"-20.0\" y2=\"174.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"85\" y=\"200.4\" text-anchor=\"middle\" class=\"fig-etq\">5 cm</text><text x=\"-42\" y=\"88.4\" text-anchor=\"middle\" class=\"fig-etq\">12 cm</text></g></svg>"
  },
  {
   "id": "131",
   "ex": 131,
   "ap": "",
   "bloc": "arees_pit",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "L'àrea d'un triangle rectangle és $12$ cm$^2$ i un dels catets mesura $6$ cm. Calcula la longitud de la hipotenusa.",
   "opcions": [
    "$4$ cm",
    "$2\\sqrt{13}\\approx7{,}21$ cm",
    "10 cm",
    "52 cm"
   ],
   "pistes": [
    "Aïlla primer l'altre catet a partir de l'àrea: $12=\\dfrac{6\\cdot c}{2}$.",
    "Un cop tinguis els dos catets, aplica Pitàgores per trobar la hipotenusa."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3Qgw6lzIGwnYWx0cmUgY2F0ZXQgKG9idGluZ3V0IGRlIGwnw6ByZWEpLCBubyBsYSBoaXBvdGVudXNhIHF1ZSBldCBkZW1hbmVuOiBlbmNhcmEgZmFsdGEgYXBsaWNhciBQaXTDoGdvcmVzLiIsICIiLCAiSGFzIHN1bWF0IGRpcmVjdGFtZW50IGVscyBkb3MgY2F0ZXRzICgkNis0JCkgZW4gbGxvYyBkJ2FwbGljYXIgUGl0w6Bnb3Jlcy4iLCAiSGFzIGNhbGN1bGF0ICQ2XjIrNF4yPTUyJCBjb3JyZWN0YW1lbnQsIHBlcsOyIHQnaGFzIGRlaXhhdCBsJ2FycmVsIHF1YWRyYWRhIGZpbmFsLiJdLCAiZXJyIjogWyJQQVNfSU5URVJNRURJX1BFUl9SRVNQT1NUQSIsICIiLCAiU1VNQV9DQVRFVFNfU0VOU0VfUVVBRFJBVCIsICJBUlJFTF9PQkxJREFEQSJdLCAicmVzIjogWyJBbHRyZSBjYXRldDogJDEyPVxcZGZyYWN7NlxcY2RvdCBjfXsyfVxcUmlnaHRhcnJvdyBjPTQkIGNtIiwgIkhpcG90ZW51c2E6ICRcXHNxcnR7Nl4yKzReMn09XFxzcXJ0ezUyfT0yXFxzcXJ0ezEzfVxcYXBwcm94N3ssfTIxJCBjbSJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 229 175\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Triangle rectangle de catets 6 cm i ?.</title><g transform=\"translate(44.7,14.0)\"><polygon points=\"0.0,113.3 170.0,113.3 0.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M 12.0 113.3 L 12.0 101.3 L 0.0 101.3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"115.8\" x2=\"0.0\" y2=\"132.8\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"170.0\" y1=\"115.8\" x2=\"170.0\" y2=\"132.8\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"129.3\" x2=\"170.0\" y2=\"129.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"125.3\" x2=\"4.0\" y2=\"133.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"166.0\" y1=\"125.3\" x2=\"174.0\" y2=\"133.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-19.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"113.3\" x2=\"-19.5\" y2=\"113.3\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-16.0\" y1=\"0.0\" x2=\"-16.0\" y2=\"113.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"-4.0\" x2=\"-20.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"109.3\" x2=\"-20.0\" y2=\"117.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line x1=\"170.0\" y1=\"113.3\" x2=\"0.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2.5\"/><text x=\"85\" y=\"143.7\" text-anchor=\"middle\" class=\"fig-etq\">6 cm</text><text x=\"-27\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq\">?</text><text x=\"91.1\" y=\"50.9\" text-anchor=\"middle\" class=\"fig-etq\">?</text></g></svg>"
  },
  {
   "id": "132",
   "ex": 132,
   "ap": "",
   "bloc": "arees_pit",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Busca l'àrea d'un triangle equilàter de perímetre $90$ cm.",
   "opcions": [
    "$900$ cm$^2$",
    "$30$ cm$^2$",
    "$450$ cm$^2$",
    "$225\\sqrt3\\approx389{,}71$ cm$^2$"
   ],
   "pistes": [
    "Calcula primer el costat: $\\dfrac{90}{3}=30$ cm.",
    "Fes servir la fórmula $A=\\dfrac{L^2\\sqrt3}{4}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igbm8gc3VydCBkZSBsYSBmw7NybXVsYSAkQT1cXGRmcmFje0xeMlxcc3FydDN9ezR9JDogcmV2aXNhIHF1ZSBoYXMgZWxldmF0IGVsIGNvc3RhdCBhbCBxdWFkcmF0LCBtdWx0aXBsaWNhdCBwZXIgJFxcc3FydDMkIGkgZGl2aWRpdCBwZXIgJDQkLiIsICJBcXVlc3Qgw6lzIGVsIGNvc3RhdCBkZWwgdHJpYW5nbGUgKCQ5MDozJCksIG5vIGwnw6ByZWE6IGVuY2FyYSBjYWwgYXBsaWNhciBsYSBmw7NybXVsYSBkZSBsJ8OgcmVhIGRlbCB0cmlhbmdsZSBlcXVpbMOgdGVyLiIsICJBcXVlc3QgdmFsb3Igbm8gaW5jbG91IGVsIGZhY3RvciAkXFxzcXJ0MyQgZGUgbGEgZsOzcm11bGEgJEE9XFxkZnJhY3tMXjJcXHNxcnQzfXs0fSQ6IHNlbWJsYSBxdWUgaGFzIGNhbGN1bGF0ICRcXGRmcmFjezMwXjJ9ezJ9JCBlbiBsbG9jIGRlICRcXGRmcmFjezMwXjJcXHNxcnQzfXs0fSQuIiwgIiJdLCAiZXJyIjogWyJQT1RFTkNJQV9ERV9TVU1BIiwgIlBBU19JTlRFUk1FRElfUEVSX1JFU1BPU1RBIiwgIkFSUkVMX0ZBQ1RPUl9PQkxJREFUIiwgIiJdLCAicmVzIjogWyJDb3N0YXQ6ICRcXGRmcmFjezkwfXszfT0zMCQgY20iLCAiJEE9XFxkZnJhY3szMF4yXFxzcXJ0M317NH09XFxkZnJhY3s5MDBcXHNxcnQzfXs0fT0yMjVcXHNxcnQzXFxhcHByb3gzODl7LH03MSQgY20kXjIkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 184 163\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Triangle equilàter de 3 costats.</title><g transform=\"translate(91.9,104.0)\"><polygon points=\"77.9,45.0 -77.9,45.0 -0.0,-90.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/></g></svg>"
  },
  {
   "id": "134",
   "ex": 134,
   "ap": "",
   "bloc": "arees_pit",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Busca l'àrea d'un triangle rectangle d'hipotenusa $13$ cm, si un dels catets mesura $5$ cm.",
   "opcions": [
    "$30$ cm$^2$",
    "$12$ cm$^2$",
    "$60$ cm$^2$",
    "$32{,}5$ cm$^2$"
   ],
   "pistes": [
    "Troba primer l'altre catet amb Pitàgores: $\\sqrt{13^2-5^2}$.",
    "L'àrea d'un triangle rectangle és $\\dfrac{\\text{catet}_1\\cdot\\text{catet}_2}{2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0IMOpcyBsJ2FsdHJlIGNhdGV0IChvYnRpbmd1dCBhbWIgUGl0w6Bnb3JlcyksIG5vIGwnw6ByZWEgcXVlIGV0IGRlbWFuZW46IGVuY2FyYSBmYWx0YSBhcGxpY2FyIGxhIGbDs3JtdWxhIGRlIGwnw6ByZWEgZGVsIHRyaWFuZ2xlLiIsICJBcXVlc3QgdmFsb3Igbm8gZGl2aWRlaXggcGVyICQyJCBlbCBwcm9kdWN0ZSBkZWxzIGNhdGV0czogbCfDoHJlYSBkJ3VuIHRyaWFuZ2xlIMOpcyAkXFxkZnJhY3tcXHRleHR7YmFzZX1cXGNkb3RcXHRleHR7YWzDp2FkYX19ezJ9JCwgbm8gZWwgcHJvZHVjdGUgc2VuY2VyLiIsICJBcXVlc3QgdmFsb3Igc2VtYmxhIGZldCBzZXJ2aXIgbGEgaGlwb3RlbnVzYSAoJDEzJCkgY29tIHNpIGZvcyB1biBjYXRldDogZWwgc2Vnb24gY2F0ZXQgcydoYSBkJ29idGVuaXIgYW1iIFBpdMOgZ29yZXMgYSBwYXJ0aXIgZGUgbGEgaGlwb3RlbnVzYSBpIGVsIGNhdGV0IGRvbmF0LCAkXFxzcXJ0ezEzXjItNV4yfSQuIl0sICJlcnIiOiBbIiIsICJQQVNfSU5URVJNRURJX1BFUl9SRVNQT1NUQSIsICJBUlJFTF9GQUNUT1JfT0JMSURBVCIsICJDQVRFVF9NQUxfSURFTlRJRklDQVQiXSwgInJlcyI6IFsiQWx0cmUgY2F0ZXQ6ICRcXHNxcnR7MTNeMi01XjJ9PVxcc3FydHsxNDR9PTEyJCBjbSIsICLDgHJlYTogJFxcZGZyYWN7NVxcY2RvdDEyfXsyfT0zMCQgY20kXjIkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 229 231\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Triangle rectangle de catets 5 cm i ?.</title><g transform=\"translate(44.7,14.0)\"><polygon points=\"0.0,170.0 170.0,170.0 0.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M 12.0 170.0 L 12.0 158.0 L 0.0 158.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"172.5\" x2=\"0.0\" y2=\"189.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"170.0\" y1=\"172.5\" x2=\"170.0\" y2=\"189.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"186.0\" x2=\"170.0\" y2=\"186.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"182.0\" x2=\"4.0\" y2=\"190.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"166.0\" y1=\"182.0\" x2=\"174.0\" y2=\"190.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-19.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"170.0\" x2=\"-19.5\" y2=\"170.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-16.0\" y1=\"0.0\" x2=\"-16.0\" y2=\"170.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"-4.0\" x2=\"-20.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"166.0\" x2=\"-20.0\" y2=\"174.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line x1=\"170.0\" y1=\"170.0\" x2=\"0.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2.5\"/><text x=\"85\" y=\"200.4\" text-anchor=\"middle\" class=\"fig-etq\">5 cm</text><text x=\"-27\" y=\"88.4\" text-anchor=\"middle\" class=\"fig-etq\">?</text><text x=\"99.1\" y=\"74.2\" text-anchor=\"middle\" class=\"fig-etq\">13 cm</text></g></svg>"
  },
  {
   "id": "135",
   "ex": 135,
   "ap": "",
   "bloc": "arees_pit",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Calcula l'àrea d'un quadrat sabent que la seva diagonal mesura $7{,}07$ cm.",
   "opcions": [
    "$3{,}54$ cm$^2$",
    "$24{,}99$ cm$^2$",
    "$49{,}98$ cm$^2$",
    "$14{,}14$ cm$^2$"
   ],
   "pistes": [
    "La diagonal d'un quadrat es relaciona amb l'àrea per $A=\\dfrac{d^2}{2}$ (surt d'aplicar Pitàgores als dos triangles en què la diagonal el divideix).",
    "Calcula $\\dfrac{7{,}07^2}{2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igc2VtYmxhIGxhIG1laXRhdCBkZSBsYSBkaWFnb25hbCwgbm8gbCfDoHJlYTogY2FsIGVsZXZhciBsYSBkaWFnb25hbCBhbCBxdWFkcmF0IGFiYW5zIGRlIGRpdmlkaXIgcGVyICQyJC4iLCAiIiwgIkFxdWVzdCB2YWxvciBubyBkaXZpZGVpeCBwZXIgJDIkOiBsJ8OgcmVhIGQndW4gcXVhZHJhdCBhIHBhcnRpciBkZSBsYSBkaWFnb25hbCDDqXMgJFxcZGZyYWN7ZF4yfXsyfSQsIG5vICRkXjIkIHNlbmNlci4iLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZGUgZHVwbGljYXIgbGEgZGlhZ29uYWwsIG5vIGQnZWxldmFyLWxhIGFsIHF1YWRyYXQgaSBkaXZpZGlyIHBlciAkMiQ6IHJldmlzYSBsYSBmw7NybXVsYSAkQT1cXGRmcmFje2ReMn17Mn0kLiJdLCAiZXJyIjogWyJJTlZFUlRJREEiLCAiIiwgIkFSUkVMX0ZBQ1RPUl9PQkxJREFUIiwgIlNVTUFfRU5fTExPQ19SRVNUQSJdLCAicmVzIjogWyIkQT1cXGRmcmFjezd7LH0wN14yfXsyfT1cXGRmcmFjezQ5eyx9OTg0OX17Mn1cXGFwcHJveDI0eyx9OTkkIGNtJF4yJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 148 181\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Quadrat de costat ? amb la diagonal marcada.</title><g transform=\"translate(14.0,14.0)\"><polygon points=\"0.0,0.0 120.0,0.0 120.0,120.0 0.0,120.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"120.0\" x2=\"120.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"122.5\" x2=\"0.0\" y2=\"139.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"120.0\" y1=\"122.5\" x2=\"120.0\" y2=\"139.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"136.0\" x2=\"120.0\" y2=\"136.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"132.0\" x2=\"4.0\" y2=\"140.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"116.0\" y1=\"132.0\" x2=\"124.0\" y2=\"140.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"60\" y=\"150.4\" text-anchor=\"middle\" class=\"fig-etq\">?</text><text x=\"78.4\" y=\"81.7\" text-anchor=\"middle\" class=\"fig-etq\">7,07 cm</text></g></svg>"
  },
  {
   "id": "136",
   "ex": 136,
   "ap": "",
   "bloc": "arees_pit",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Troba l'àrea d'un rectangle de diagonal $\\sqrt{41}$ cm i un dels costats de $4$ cm.",
   "opcions": [
    "$\\sqrt{41}$ cm$^2$",
    "$20$ cm$^2$",
    "$5$ cm$^2$",
    "$9$ cm$^2$"
   ],
   "pistes": [
    "Troba primer l'altre costat amb Pitàgores: $\\sqrt{41-4^2}$.",
    "L'àrea d'un rectangle és el producte dels dos costats."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMJ8OgcmVhIG5vIMOpcyBsYSBkaWFnb25hbDogY2FsIHRyb2JhciBwcmltZXIgbCdhbHRyZSBjb3N0YXQgYW1iIFBpdMOgZ29yZXMsICRcXHNxcnR7NDEtNF4yfSQsIGkgZGVzcHLDqXMgbXVsdGlwbGljYXItbG8gcGVsIGNvc3RhdCBkZSAkNCQgY20uIiwgIiIsICJBcXVlc3Qgw6lzIGwnYWx0cmUgY29zdGF0IChvYnRpbmd1dCBhbWIgUGl0w6Bnb3JlcyksIG5vIGwnw6ByZWE6IGVuY2FyYSBmYWx0YSBtdWx0aXBsaWNhciBlbHMgZG9zIGNvc3RhdHMuIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGRlIHN1bWFyICQ0JCBpIGwnYWx0cmUgY29zdGF0ICgkNCs1JCkgZW4gbGxvYyBkZSBtdWx0aXBsaWNhci1sb3M6IGwnw6ByZWEgZCd1biByZWN0YW5nbGUgw6lzIGVsIFBST0RVQ1RFIGRlbHMgZG9zIGNvc3RhdHMsIG5vIGxhIHNldmEgc3VtYS4iXSwgImVyciI6IFsiQ0FURVRfTUFMX0lERU5USUZJQ0FUIiwgIiIsICJQQVNfSU5URVJNRURJX1BFUl9SRVNQT1NUQSIsICJTVU1BX0VOX0xMT0NfUkVTVEEiXSwgInJlcyI6IFsiQWx0cmUgY29zdGF0OiAkXFxzcXJ0ezQxLTReMn09XFxzcXJ0ezI1fT01JCBjbSIsICLDgHJlYTogJDRcXGNkb3Q1PTIwJCBjbSReMiQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 203 241\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Rectangle de 4 cm per ? amb la diagonal marcada.</title><g transform=\"translate(44.7,14.0)\"><polygon points=\"0.0,0.0 144.0,0.0 144.0,180.0 0.0,180.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"182.5\" x2=\"0.0\" y2=\"199.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"144.0\" y1=\"182.5\" x2=\"144.0\" y2=\"199.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"196.0\" x2=\"144.0\" y2=\"196.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"192.0\" x2=\"4.0\" y2=\"200.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"140.0\" y1=\"192.0\" x2=\"148.0\" y2=\"200.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-19.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"180.0\" x2=\"-19.5\" y2=\"180.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-16.0\" y1=\"0.0\" x2=\"-16.0\" y2=\"180.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"-4.0\" x2=\"-20.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"176.0\" x2=\"-20.0\" y2=\"184.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line x1=\"0.0\" y1=\"180.0\" x2=\"144.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><text x=\"72\" y=\"210.4\" text-anchor=\"middle\" class=\"fig-etq\">4 cm</text><text x=\"-27\" y=\"93.4\" text-anchor=\"middle\" class=\"fig-etq\">?</text><text x=\"92.3\" y=\"109.6\" text-anchor=\"middle\" class=\"fig-etq\">√41 cm</text></g></svg>"
  },
  {
   "id": "137",
   "ex": 137,
   "ap": "",
   "bloc": "arees_pit",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Calcula l'àrea d'un rectangle de $10$ cm de base i amb diagonal $\\sqrt{116}$ cm.",
   "opcions": [
    "$40$ cm$^2$",
    "$4$ cm$^2$",
    "$\\sqrt{116}$ cm$^2$",
    "$14$ cm$^2$"
   ],
   "pistes": [
    "Troba primer l'alçada amb Pitàgores: $\\sqrt{116-10^2}$.",
    "L'àrea d'un rectangle és base per alçada."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0YSDDqXMgbCdhbMOnYWRhIChvYnRpbmd1ZGEgYW1iIFBpdMOgZ29yZXMpLCBubyBsJ8OgcmVhOiBlbmNhcmEgZmFsdGEgbXVsdGlwbGljYXItbGEgcGVyIGxhIGJhc2UuIiwgIkwnw6ByZWEgbm8gw6lzIGxhIGRpYWdvbmFsOiBjYWwgdHJvYmFyIHByaW1lciBsJ2Fsw6dhZGEgYW1iIFBpdMOgZ29yZXMsICRcXHNxcnR7MTE2LTEwXjJ9JCwgaSBkZXNwcsOpcyBtdWx0aXBsaWNhci1sYSBwZXIgbGEgYmFzZSBkZSAkMTAkIGNtLiIsICJBcXVlc3QgdmFsb3Igc3VydCBkZSBzdW1hciBsYSBiYXNlIGkgbCdhbMOnYWRhICgkMTArNCQpIGVuIGxsb2MgZGUgbXVsdGlwbGljYXItbGVzOiBsJ8OgcmVhIGQndW4gcmVjdGFuZ2xlIMOpcyBlbCBwcm9kdWN0ZSBkZWxzIGRvcyBjb3N0YXRzLiJdLCAiZXJyIjogWyIiLCAiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiLCAiQ0FURVRfTUFMX0lERU5USUZJQ0FUIiwgIlNVTUFfRU5fTExPQ19SRVNUQSJdLCAicmVzIjogWyJBbMOnYWRhOiAkXFxzcXJ0ezExNi0xMF4yfT1cXHNxcnR7MTZ9PTQkIGNtIiwgIsOAcmVhOiAkMTBcXGNkb3Q0PTQwJCBjbSReMiQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 239 133\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Rectangle de 10 cm per ? amb la diagonal marcada.</title><g transform=\"translate(44.7,14.0)\"><polygon points=\"0.0,0.0 180.0,0.0 180.0,72.0 0.0,72.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"74.5\" x2=\"0.0\" y2=\"91.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"180.0\" y1=\"74.5\" x2=\"180.0\" y2=\"91.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"88.0\" x2=\"180.0\" y2=\"88.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"84.0\" x2=\"4.0\" y2=\"92.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"176.0\" y1=\"84.0\" x2=\"184.0\" y2=\"92.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-19.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"72.0\" x2=\"-19.5\" y2=\"72.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-16.0\" y1=\"0.0\" x2=\"-16.0\" y2=\"72.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"-4.0\" x2=\"-20.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"68.0\" x2=\"-20.0\" y2=\"76.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line x1=\"0.0\" y1=\"72.0\" x2=\"180.0\" y2=\"0.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><text x=\"90\" y=\"102.4\" text-anchor=\"middle\" class=\"fig-etq\">10 cm</text><text x=\"-27\" y=\"39.4\" text-anchor=\"middle\" class=\"fig-etq\">?</text><text x=\"97.4\" y=\"57.9\" text-anchor=\"middle\" class=\"fig-etq\">√116 cm</text></g></svg>"
  },
  {
   "id": "138",
   "ex": 138,
   "ap": "",
   "bloc": "arees_pit",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Determina l'àrea d'un rectangle de base $7$ cm i perímetre $24$ cm.",
   "opcions": [
    "$8{,}5$ cm$^2$",
    "$5$ cm$^2$",
    "$168$ cm$^2$",
    "$35$ cm$^2$"
   ],
   "pistes": [
    "El perímetre és $2(\\text{base}+\\text{alçada})$: aïlla l'alçada.",
    "Amb perímetre $24$ i base $7$: alçada $=\\dfrac{24}{2}-7$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igc3VydCBkZSAkXFxkZnJhY3syNH17Mn0tNyQgbWFsYW1lbnQgY2FsY3VsYXQsIG8gZGUgbm8gcmVzdGFyIGxhIGJhc2UgYWJhbnMgZGUgZGl2aWRpcjogZWwgcGVyw61tZXRyZSDDqXMgJDIoXFx0ZXh0e2Jhc2V9K1xcdGV4dHthbMOnYWRhfSkkLCBhaXjDrSBxdWUgJFxcdGV4dHthbMOnYWRhfT1cXGRmcmFjezI0fXsyfS03JC4iLCAiQXF1ZXN0YSDDqXMgbCdhbMOnYWRhIChvYnRpbmd1ZGEgZGVsIHBlcsOtbWV0cmUpLCBubyBsJ8OgcmVhOiBlbmNhcmEgZmFsdGEgbXVsdGlwbGljYXItbGEgcGVyIGxhIGJhc2UuIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGRlIG11bHRpcGxpY2FyIGxhIGJhc2UgcGVsIHBlcsOtbWV0cmUgc2VuY2VyICgkN1xcY2RvdDI0JCksIG5vIHBlciBsJ2Fsw6dhZGE6IHByaW1lciBjYWwgYcOvbGxhciBsJ2Fsw6dhZGEgZGVsIHBlcsOtbWV0cmUuIiwgIiJdLCAiZXJyIjogWyJJTlZFUlRJREEiLCAiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiLCAiU1VNQV9FTl9MTE9DX1JFU1RBIiwgIiJdLCAicmVzIjogWyJBbMOnYWRhOiAkXFxkZnJhY3syNH17Mn0tNz0xMi03PTUkIGNtIiwgIsOAcmVhOiAkN1xcY2RvdDU9MzUkIGNtJF4yJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 239 190\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Rectangle de 7 cm per ?.</title><g transform=\"translate(44.7,14.0)\"><polygon points=\"0.0,0.0 180.0,0.0 180.0,128.6 0.0,128.6\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"131.1\" x2=\"0.0\" y2=\"148.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"180.0\" y1=\"131.1\" x2=\"180.0\" y2=\"148.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"144.6\" x2=\"180.0\" y2=\"144.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"140.6\" x2=\"4.0\" y2=\"148.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"176.0\" y1=\"140.6\" x2=\"184.0\" y2=\"148.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-19.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"128.6\" x2=\"-19.5\" y2=\"128.6\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-16.0\" y1=\"0.0\" x2=\"-16.0\" y2=\"128.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"-4.0\" x2=\"-20.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-12.0\" y1=\"124.6\" x2=\"-20.0\" y2=\"132.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"90\" y=\"158.9\" text-anchor=\"middle\" class=\"fig-etq\">7 cm</text><text x=\"-27\" y=\"67.6\" text-anchor=\"middle\" class=\"fig-etq\">?</text></g></svg>"
  },
  {
   "id": "130",
   "ex": 130,
   "ap": "",
   "bloc": "arees_pit",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "L'àrea d'un triangle isòsceles és $24$ m$^2$ i el costat desigual (la base) mesura $6$ m. Troba la longitud dels altres dos costats.",
   "opcions": [
    "$\\sqrt{73}\\approx8{,}54$ m",
    "11 m",
    "$8$ m",
    "73 m"
   ],
   "pistes": [
    "Aïlla primer l'alçada a partir de l'àrea: $24=\\dfrac{6\\cdot h}{2}$.",
    "L'alçada, la semibase ($3$ m) i el costat lateral (com a hipotenusa) formen un triangle rectangle: aplica Pitàgores."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIHN1bWF0IGRpcmVjdGFtZW50IGxhIHNlbWliYXNlIGkgbCdhbMOnYWRhICgkMys4JCkgZW4gbGxvYyBkJ2FwbGljYXIgUGl0w6Bnb3Jlcy4iLCAiQXF1ZXN0YSDDqXMgbCdhbMOnYWRhIGRlbCB0cmlhbmdsZSAob2J0aW5ndWRhIGRlIGwnw6ByZWEpLCBubyBlbCBjb3N0YXQgbGF0ZXJhbCBxdWUgZXQgZGVtYW5lbjogZW5jYXJhIGZhbHRhIGFwbGljYXIgUGl0w6Bnb3JlcyBhbWIgbGEgc2VtaWJhc2UuIiwgIkhhcyBjYWxjdWxhdCAkM14yKzheMj03MyQgY29ycmVjdGFtZW50LCBwZXLDsiB0J2hhcyBkZWl4YXQgbCdhcnJlbCBxdWFkcmFkYSBmaW5hbC4iXSwgImVyciI6IFsiIiwgIlNVTUFfQ0FURVRTX1NFTlNFX1FVQURSQVQiLCAiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiLCAiQVJSRUxfT0JMSURBREEiXSwgInJlcyI6IFsiQWzDp2FkYTogJDI0PVxcZGZyYWN7NlxcY2RvdCBofXsyfVxcUmlnaHRhcnJvdyBoPTgkIG0iLCAiQ29zdGF0IGxhdGVyYWw6ICRcXHNxcnR7M14yKzheMn09XFxzcXJ0ezczfVxcYXBwcm94OHssfTU0JCBtIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 198 221\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Triangle isòsceles de base 6 m, costats iguals ?, alçada ?.</title><g transform=\"translate(14.0,14.0)\"><polygon points=\"0.0,160.0 170.0,160.0 85.0,0.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"85.0\" y1=\"0.0\" x2=\"85.0\" y2=\"160.0\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><path d=\"M 94.0 160.0 L 94.0 151.0 L 85.0 151.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"162.5\" x2=\"0.0\" y2=\"179.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"170.0\" y1=\"162.5\" x2=\"170.0\" y2=\"179.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"176.0\" x2=\"170.0\" y2=\"176.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"172.0\" x2=\"4.0\" y2=\"180.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"166.0\" y1=\"172.0\" x2=\"174.0\" y2=\"180.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"85\" y=\"190.4\" text-anchor=\"middle\" class=\"fig-etq\">6 m</text><text x=\"52.2\" y=\"88.5\" text-anchor=\"middle\" class=\"fig-etq\">?</text><text x=\"96\" y=\"83.4\" text-anchor=\"middle\" class=\"fig-etq\">?</text></g></svg>"
  },
  {
   "id": "133",
   "ex": 133,
   "ap": "",
   "bloc": "arees_pit",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Si l'àrea d'un triangle equilàter és $30$ cm$^2$, troba la longitud del seu costat.",
   "opcions": [
    "$\\sqrt{120}\\approx10{,}95$ cm",
    "$\\sqrt{40\\sqrt3}\\approx8{,}32$ cm",
    "$\\dfrac{30^2\\sqrt3}{4}$ cm",
    "$40\\sqrt3\\approx69{,}28$ cm"
   ],
   "pistes": [
    "Aïlla $L^2$ de la fórmula $A=\\dfrac{L^2\\sqrt3}{4}$: $L^2=\\dfrac{4A}{\\sqrt3}$.",
    "Amb $A=30$: $L^2=\\dfrac{120}{\\sqrt3}=40\\sqrt3$; després fes l'arrel quadrada."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbiBhw69sbGFyICRMXjIkIGRlICQzMD1cXGRmcmFje0xeMlxcc3FydDN9ezR9JCBubyBuJ2hpIGhhIHByb3UgYW1iIG11bHRpcGxpY2FyIHBlciAkNCQgKCRMXjI9MTIwJCk6IGVuY2FyYSBjYWwgZGl2aWRpciBwZXIgJFxcc3FydDMkIGFiYW5zIGRlIGZlciBsJ2FycmVsLiIsICIiLCAiQXF1ZXN0YSBleHByZXNzacOzIGNvcnJlc3BvbiBhIGwnw4BSRUEgYSBwYXJ0aXIgZGVsIGNvc3RhdCAobGEgZsOzcm11bGEgb3JpZ2luYWwpLCBubyBhbCBjb3N0YXQgYSBwYXJ0aXIgZGUgbCfDoHJlYTogY2FsIGHDr2xsYXIgJEwkIGRlIGxhIGbDs3JtdWxhLCBubyBhcGxpY2FyLWxhIHRhbCBxdWFsIGFtYiAkMzAkIGNvbSBzaSBmb3MgZWwgY29zdGF0LiIsICJBcXVlc3Qgw6lzIGVsIHZhbG9yIGRlICRMXjIkIChlbmNhcmEgYWwgcXVhZHJhdCksIG5vIGRlICRMJDogZXQgZmFsdGEgZmVyIGwnYXJyZWwgcXVhZHJhZGEgZmluYWwuIl0sICJlcnIiOiBbIkFSUkVMX0ZBQ1RPUl9PQkxJREFUIiwgIiIsICJJTlZFUlRJREEiLCAiQVJSRUxfT0JMSURBREEiXSwgInJlcyI6IFsiJExeMj1cXGRmcmFjezRcXGNkb3QzMH17XFxzcXJ0M309XFxkZnJhY3sxMjB9e1xcc3FydDN9PTQwXFxzcXJ0MyQiLCAiJEw9XFxzcXJ0ezQwXFxzcXJ0M31cXGFwcHJveDh7LH0zMiQgY20iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 184 163\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Triangle equilàter de 3 costats.</title><g transform=\"translate(91.9,104.0)\"><polygon points=\"77.9,45.0 -77.9,45.0 -0.0,-90.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/></g></svg>"
  }
 ]
};
