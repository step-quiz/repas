/* Generat per tools/build.py — no editeu aquest fitxer a mà. */
window.FULL = {
 "full": 8,
 "titol": "Full 8 — Teorema de Tales. Semblança",
 "subtitol": "Teorema de Tales, triangles semblants, escales i aplicacions de la semblança a problemes d'altures i distàncies inaccessibles.",
 "blocs": [
  {
   "id": "tales",
   "titol": "Teorema de Tales",
   "descripcio": "Segments proporcionals entre rectes paral·leles i triangles en posició de Tales.",
   "items": [
    "358a",
    "358b",
    "152a",
    "152b",
    "152c",
    "152e",
    "152f",
    "153a",
    "153b",
    "153c"
   ]
  },
  {
   "id": "semblanca",
   "titol": "Semblança de triangles",
   "descripcio": "Raó de semblança i els tres criteris per determinar si dos triangles són semblants.",
   "items": [
    "359a",
    "359b",
    "154a",
    "154b",
    "154c",
    "154d",
    "155a",
    "155b",
    "155c",
    "155d",
    "155e"
   ]
  },
  {
   "id": "escales",
   "titol": "Escales",
   "descripcio": "Escala numèrica i problemes de mapes i plànols.",
   "items": [
    "360a",
    "360b",
    "156a",
    "156b",
    "158",
    "159",
    "160a",
    "160b"
   ]
  },
  {
   "id": "escales_calcul",
   "titol": "Càlcul amb escales",
   "descripcio": "Del plànol a la realitat i al revés, trobar l'escala, i escales amb canvi d'unitats.",
   "items": [
    "361a",
    "361b",
    "285a",
    "285b",
    "285c",
    "286a",
    "286b",
    "286c",
    "286d",
    "287a",
    "287b",
    "287c",
    "288a",
    "288b",
    "288c",
    "289"
   ]
  },
  {
   "id": "semblanca_arees",
   "titol": "Raó de semblança, àrees i volums",
   "descripcio": "Si les longituds es multipliquen per k, les àrees ho fan per k² i els volums per k³.",
   "items": [
    "362a",
    "362b",
    "290a",
    "290b",
    "290c",
    "291a",
    "291b",
    "291c",
    "292a",
    "292b",
    "293a",
    "293b",
    "294a",
    "294b",
    "294c"
   ]
  },
  {
   "id": "aplicacions",
   "titol": "Aplicacions de la semblança",
   "descripcio": "Ombres, reflexos i alçades o distàncies inaccessibles.",
   "items": [
    "161",
    "162",
    "163",
    "164",
    "165",
    "166",
    "167",
    "168",
    "169"
   ],
   "avancat": true
  }
 ],
 "errors": {
  "CREUAMENT_INVERTIT": "Has creuat els termes al revés en aïllar la incògnita.",
  "DIVISIO_QUOCIENT_RESIDU_CANVIATS": "Has intercanviat el quocient i el residu: el quocient és el polinomi que queda a la fila de baix (llevat de l'últim terme), i el residu és l'últim número, una constant.",
  "PRODUCTE_MAL": "Has multiplicat els dos nombres que et donaven en comptes d'aïllar la incògnita amb els productes creuats.",
  "PROGRESSIO_INVENTADA": "El terme s'ha de calcular seguint estrictament la regla que defineix la successió (el terme general o la relació de recurrència), no un patró aproximat o inventat.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau."
 },
 "items": [
  {
   "id": "358a",
   "ex": 358,
   "ap": "a",
   "bloc": "tales",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Les rectes que tallen aquestes dues secants són paral·leles. Fent servir el teorema de Tales, calcula la longitud $x$.",
   "enunciat": "Una secant té segments de $2$ cm i $6$ cm; l'altra, $3$ cm i $x$ (segments corresponents en el mateix ordre).",
   "opcions": [
    "$x=7$ cm",
    "$x=1$ cm",
    "$x=18$ cm",
    "$x=9$ cm"
   ],
   "pistes": [
    "Quantes vegades és més llarg el $6$ que el $2$?",
    "$\\dfrac{6}{2}=\\dfrac{x}{3}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgc3VtYXQgbGEgbWF0ZWl4YSBxdWFudGl0YXQgKCQ2LTI9NCQsIGkgJDMrND03JCkuIFRhbGVzIGRpdSBxdWUgZWxzIHNlZ21lbnRzIHPDs24gUFJPUE9SQ0lPTkFMUzogZWwgJDYkIMOpcyBlbCB0cmlwbGUgZGVsICQyJCwgYWl4w60gcXVlIGxhICR4JCDDqXMgZWwgdHJpcGxlIGRlbCAkMyQuIiwgIkhhcyBjcmV1YXQgZWxzIHRlcm1lcyBhbCByZXbDqXM6ICRcXGRmcmFjezJcXGNkb3QzfXs2fSQuIExhIHByb3BvcmNpw7Mgw6lzICRcXGRmcmFjezZ9ezJ9PVxcZGZyYWN7eH17M30kLiIsICJIYXMgZmV0ICQzXFxjZG90NiQgaSBubyBoYXMgZGl2aWRpdCBwZXIgJDIkOiAkeD1cXGRmcmFjezNcXGNkb3Q2fXsyfSQuIiwgIiJdLCAiZXJyIjogWyJQUk9HUkVTU0lPX0lOVkVOVEFEQSIsICJDUkVVQU1FTlRfSU5WRVJUSVQiLCAiUFJPRFVDVEVfTUFMIiwgIiJdLCAicmVzIjogWyIkXFxkZnJhY3s2fXsyfT1cXGRmcmFje3h9ezN9XFw7XFxMb25ncmlnaHRhcnJvd1xcO3g9XFxkZnJhY3s2XFxjZG90M317Mn09OSQgY20iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 203 135\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues rectes secants que surten d'un mateix punt O, tallades per un joc de rectes paral·leles, amb els punts x marcats.</title><g transform=\"translate(19.0,71.0)\"><line x1=\"0.0\" y1=\"0.0\" x2=\"112.8\" y2=\"25.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"169.2\" y2=\"-37.5\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"28.2\" y1=\"6.3\" x2=\"42.3\" y2=\"-9.4\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"112.8\" y1=\"25.0\" x2=\"169.2\" y2=\"-37.5\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"-0.5\" y1=\"2.4\" x2=\"-4.7\" y2=\"21.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"27.7\" y1=\"8.7\" x2=\"23.6\" y2=\"27.2\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-3.9\" y1=\"17.6\" x2=\"24.3\" y2=\"23.8\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-6.9\" y1=\"12.8\" x2=\"-0.9\" y2=\"22.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"21.3\" y1=\"19.1\" x2=\"27.3\" y2=\"28.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"27.7\" y1=\"8.7\" x2=\"23.6\" y2=\"27.2\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"112.3\" y1=\"27.5\" x2=\"108.2\" y2=\"46.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"24.3\" y1=\"23.8\" x2=\"108.9\" y2=\"42.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"21.3\" y1=\"19.1\" x2=\"27.3\" y2=\"28.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"105.9\" y1=\"37.8\" x2=\"112.0\" y2=\"47.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-0.5\" y1=\"-2.4\" x2=\"-4.7\" y2=\"-21.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"41.8\" y1=\"-11.8\" x2=\"37.7\" y2=\"-30.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-3.9\" y1=\"-17.6\" x2=\"38.4\" y2=\"-27.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-6.9\" y1=\"-12.8\" x2=\"-0.9\" y2=\"-22.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"35.4\" y1=\"-22.2\" x2=\"41.4\" y2=\"-31.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"41.8\" y1=\"-11.8\" x2=\"37.7\" y2=\"-30.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"168.7\" y1=\"-40.0\" x2=\"164.6\" y2=\"-58.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"38.4\" y1=\"-27.0\" x2=\"165.3\" y2=\"-55.1\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"35.4\" y1=\"-22.2\" x2=\"41.4\" y2=\"-31.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"162.3\" y1=\"-50.3\" x2=\"168.4\" y2=\"-59.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"7.8\" y=\"34.4\" text-anchor=\"middle\" class=\"fig-etq petita\">2 cm</text><text x=\"64.2\" y=\"46.9\" text-anchor=\"middle\" class=\"fig-etq petita\">6 cm</text><text x=\"14.9\" y=\"-30.1\" text-anchor=\"middle\" class=\"fig-etq petita\">3 cm</text><text x=\"99.5\" y=\"-48.8\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text></g></svg>"
  },
  {
   "id": "358b",
   "ex": 358,
   "ap": "b",
   "bloc": "tales",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Les rectes que tallen aquestes dues secants són paral·leles. Fent servir el teorema de Tales, calcula la longitud $x$.",
   "enunciat": "Una secant té segments de $5$ cm i $10$ cm; l'altra, $2$ cm i $x$ (segments corresponents en el mateix ordre).",
   "opcions": [
    "$x=7$ cm",
    "$x=4$ cm",
    "$x=1$ cm",
    "$x=20$ cm"
   ],
   "pistes": [
    "Quantes vegades és més llarg el $10$ que el $5$?",
    "$\\dfrac{10}{5}=\\dfrac{x}{2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgc3VtYXQgbGEgbWF0ZWl4YSBxdWFudGl0YXQgKCQxMC01PTUkLCBpICQyKzU9NyQpLiBUYWxlcyBkaXUgcXVlIGVscyBzZWdtZW50cyBzw7NuIFBST1BPUkNJT05BTFM6IGVsICQxMCQgw6lzIGVsIGRvYmxlIGRlbCAkNSQsIGFpeMOtIHF1ZSBsYSAkeCQgw6lzIGVsIGRvYmxlIGRlbCAkMiQuIiwgIiIsICJIYXMgY3JldWF0IGVscyB0ZXJtZXMgYWwgcmV2w6lzOiAkXFxkZnJhY3s1XFxjZG90Mn17MTB9JC4gTGEgcHJvcG9yY2nDsyDDqXMgJFxcZGZyYWN7MTB9ezV9PVxcZGZyYWN7eH17Mn0kLiIsICJIYXMgZmV0ICQyXFxjZG90MTAkIGkgbm8gaGFzIGRpdmlkaXQgcGVyICQ1JDogJHg9XFxkZnJhY3syXFxjZG90MTB9ezV9JC4iXSwgImVyciI6IFsiUFJPR1JFU1NJT19JTlZFTlRBREEiLCAiIiwgIkNSRVVBTUVOVF9JTlZFUlRJVCIsICJQUk9EVUNURV9NQUwiXSwgInJlcyI6IFsiJFxcZGZyYWN7MTB9ezV9PVxcZGZyYWN7eH17Mn1cXDtcXExvbmdyaWdodGFycm93XFw7eD1cXGRmcmFjezEwXFxjZG90Mn17NX09NCQgY20iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 225 135\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues rectes secants que surten d'un mateix punt O, tallades per un joc de rectes paral·leles, amb els punts x marcats.</title><g transform=\"translate(20.4,58.8)\"><line x1=\"0.0\" y1=\"0.0\" x2=\"190.4\" y2=\"42.2\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"76.2\" y2=\"-16.9\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"63.5\" y1=\"14.1\" x2=\"25.4\" y2=\"-5.6\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"190.4\" y1=\"42.2\" x2=\"76.2\" y2=\"-16.9\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"-0.5\" y1=\"2.4\" x2=\"-4.7\" y2=\"21.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"62.9\" y1=\"16.5\" x2=\"58.8\" y2=\"35.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-3.9\" y1=\"17.6\" x2=\"59.6\" y2=\"31.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-6.9\" y1=\"12.8\" x2=\"-0.9\" y2=\"22.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"56.5\" y1=\"26.9\" x2=\"62.6\" y2=\"36.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"62.9\" y1=\"16.5\" x2=\"58.8\" y2=\"35.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"189.8\" y1=\"44.6\" x2=\"185.7\" y2=\"63.2\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"59.6\" y1=\"31.6\" x2=\"186.5\" y2=\"59.8\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"56.5\" y1=\"26.9\" x2=\"62.6\" y2=\"36.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"183.4\" y1=\"55.0\" x2=\"189.5\" y2=\"64.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-0.5\" y1=\"-2.4\" x2=\"-4.7\" y2=\"-21.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"24.8\" y1=\"-8.1\" x2=\"20.7\" y2=\"-26.6\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-3.9\" y1=\"-17.6\" x2=\"21.5\" y2=\"-23.2\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-6.9\" y1=\"-12.8\" x2=\"-0.9\" y2=\"-22.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"18.4\" y1=\"-18.4\" x2=\"24.5\" y2=\"-28.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"24.8\" y1=\"-8.1\" x2=\"20.7\" y2=\"-26.6\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"75.6\" y1=\"-19.3\" x2=\"71.5\" y2=\"-37.9\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"21.5\" y1=\"-23.2\" x2=\"72.3\" y2=\"-34.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"18.4\" y1=\"-18.4\" x2=\"24.5\" y2=\"-28.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"69.2\" y1=\"-29.7\" x2=\"75.3\" y2=\"-39.2\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"25.5\" y=\"38.3\" text-anchor=\"middle\" class=\"fig-etq petita\">5 cm</text><text x=\"120.6\" y=\"59.4\" text-anchor=\"middle\" class=\"fig-etq petita\">10 cm</text><text x=\"6.4\" y=\"-28.2\" text-anchor=\"middle\" class=\"fig-etq petita\">2 cm</text><text x=\"44.5\" y=\"-36.6\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text></g></svg>"
  },
  {
   "id": "152a",
   "ex": 152,
   "ap": "a",
   "bloc": "tales",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula el valor de $x$ en aquestes figures de rectes paral·leles tallades per dues rectes secants.",
   "enunciat": "Una secant té segments de $2{,}5$ cm i $2$ cm; l'altra, $x$ i $3$ cm (segments corresponents en el mateix ordre).",
   "opcions": [
    "$2{,}4$ cm",
    "$1{,}67$ cm",
    "$7{,}5$ cm",
    "$3{,}75$ cm"
   ],
   "pistes": [
    "Els segments es corresponen en ordre: el primer d'una secant amb el primer de l'altra, i el segon amb el segon. Aquí el $2{,}5$ va amb la $x$, i el $2$ amb el $3$.",
    "Per Tales, totes dues secants queden dividides en la mateixa proporció: $\\dfrac{2{,}5}{2}=\\dfrac{x}{3}$. Aïlla $x$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgbXVudGF0IGxhIHByb3BvcmNpw7MgYW1iIGVscyBzZWdtZW50cyBkZSBjYWRhIHNlY2FudCBpbnRlcmNhbnZpYXRzLiBQbGFudGVqYSAkXFxkZnJhY3syeyx9NX17Mn09XFxkZnJhY3t4fXszfSQsIG5vIGxhIHByb3BvcmNpw7MgaW52ZXJzYS4iLCAiU2VtYmxhIHF1ZSBoYXMgY2FsY3VsYXQgJDI6MnssfTVcXGNkb3QzJCBhbWIgZWxzIHRlcm1lcyBpbnRlcmNhbnZpYXRzOiByZXZpc2EgcXVpbiBzZWdtZW50IGZhIGRlIG51bWVyYWRvciBhIGNhZGEgc2VjYW50LiIsICJBcXVlc3QgdmFsb3Igc3VydCBkZSAkMnssfTVcXGNkb3QzJCBzZW5zZSBkaXZpZGlyIHBlciAkMiQ6ICR4PVxcZGZyYWN7MnssfTVcXGNkb3QzfXsyfSQsIG5vIG5vbcOpcyBlbCBudW1lcmFkb3IuIiwgIiJdLCAiZXJyIjogWyJDUkVVQU1FTlRfSU5WRVJUSVQiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiXSwgInJlcyI6IFsiJFxcZGZyYWN7MnssfTV9ezJ9PVxcZGZyYWN7eH17M30gXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4PVxcZGZyYWN7MnssfTVcXGNkb3QzfXsyfSQiLCAiJHg9M3ssfTc1JCBjbSJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 240 155\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues rectes secants que surten d'un mateix punt O, tallades per un joc de rectes paral·leles, amb els punts x marcats.</title><g transform=\"translate(14.0,73.8)\"><line x1=\"0.0\" y1=\"0.0\" x2=\"211.5\" y2=\"46.9\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"169.2\" y2=\"-37.5\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"84.6\" y1=\"18.8\" x2=\"67.7\" y2=\"-15.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"211.5\" y1=\"46.9\" x2=\"169.2\" y2=\"-37.5\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"-0.5\" y1=\"2.4\" x2=\"-4.7\" y2=\"21.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"84.1\" y1=\"21.2\" x2=\"80.0\" y2=\"39.7\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-3.9\" y1=\"17.6\" x2=\"80.7\" y2=\"36.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-6.9\" y1=\"12.8\" x2=\"-0.9\" y2=\"22.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"77.7\" y1=\"31.6\" x2=\"83.8\" y2=\"41.1\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"84.1\" y1=\"21.2\" x2=\"80.0\" y2=\"39.7\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"211.0\" y1=\"49.3\" x2=\"206.9\" y2=\"67.9\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"80.7\" y1=\"36.3\" x2=\"207.6\" y2=\"64.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"77.7\" y1=\"31.6\" x2=\"83.8\" y2=\"41.1\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"204.6\" y1=\"59.7\" x2=\"210.7\" y2=\"69.2\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-0.5\" y1=\"-2.4\" x2=\"-4.7\" y2=\"-21.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"67.1\" y1=\"-17.4\" x2=\"63.0\" y2=\"-36.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-3.9\" y1=\"-17.6\" x2=\"63.8\" y2=\"-32.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-6.9\" y1=\"-12.8\" x2=\"-0.9\" y2=\"-22.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"60.8\" y1=\"-27.8\" x2=\"66.8\" y2=\"-37.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"67.1\" y1=\"-17.4\" x2=\"63.0\" y2=\"-36.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"168.7\" y1=\"-40.0\" x2=\"164.6\" y2=\"-58.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"63.8\" y1=\"-32.6\" x2=\"165.3\" y2=\"-55.1\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"60.8\" y1=\"-27.8\" x2=\"66.8\" y2=\"-37.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"162.3\" y1=\"-50.3\" x2=\"168.4\" y2=\"-59.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"25.9\" y=\"38.4\" text-anchor=\"middle\" class=\"fig-etq petita\">2,5 cm</text><text x=\"141.8\" y=\"64.1\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text><text x=\"27.6\" y=\"-32.9\" text-anchor=\"middle\" class=\"fig-etq petita\">2 cm</text><text x=\"112.2\" y=\"-51.6\" text-anchor=\"middle\" class=\"fig-etq petita\">3 cm</text></g></svg>"
  },
  {
   "id": "152b",
   "ex": 152,
   "ap": "b",
   "bloc": "tales",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula el valor de $x$ en aquestes figures de rectes paral·leles tallades per dues rectes secants.",
   "enunciat": "Una secant té segments de $2$ cm i $4$ cm; l'altra, $3$ cm i $x$ cm (segments corresponents en el mateix ordre).",
   "opcions": [
    "$1{,}5$ cm",
    "$4$ cm",
    "$6$ cm",
    "$12$ cm"
   ],
   "pistes": [
    "Els segments es corresponen en ordre: el primer d'una secant amb el primer de l'altra, i el segon amb el segon. Aquí el $2$ va amb el $3$, i el $4$ amb la $x$.",
    "Per Tales, totes dues secants queden dividides en la mateixa proporció: $\\dfrac{4}{2}=\\dfrac{x}{3}$. Aïlla $x$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgaW50ZXJjYW52aWF0IHF1aW4gc2VnbWVudCBjb3JyZXNwb24gYSBxdWluOiBwbGFudGVqYSAkXFxkZnJhY3s0fXsyfT1cXGRmcmFje3h9ezN9JCwgYW1iIGVsIHNlZ21lbnQgTcOJUyBncmFuIGRlIGxhIHByaW1lcmEgc2VjYW50ICgkNCQpIGNvcnJlc3BvbmVudCBhICR4JC4iLCAiQXF1ZXN0IHZhbG9yIG5vIHN1cnQgZGUgbGEgcHJvcG9yY2nDszogY29tcHJvdmEgJHg9XFxkZnJhY3s0XFxjZG90M317Mn0kIHBhcyBhIHBhcyBlbiBsbG9jIGRlIHJlcGV0aXIgdW4gc2VnbWVudCBxdWUgamEgYXBhcmVpeGlhIGEgbCdlbnVuY2lhdC4iLCAiIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGRlICQ0XFxjZG90MyQgc2Vuc2UgZGl2aWRpciBwZXIgJDIkOiAkeD1cXGRmcmFjezRcXGNkb3QzfXsyfSQsIG5vIG5vbcOpcyBlbCBudW1lcmFkb3IuIl0sICJlcnIiOiBbIkNSRVVBTUVOVF9JTlZFUlRJVCIsICJQUk9HUkVTU0lPX0lOVkVOVEFEQSIsICIiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyJdLCAicmVzIjogWyIkXFxkZnJhY3s0fXsyfT1cXGRmcmFje3h9ezN9IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgeD1cXGRmcmFjezRcXGNkb3QzfXsyfSQiLCAiJHg9NiQgY20iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 219 143\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues rectes secants que surten d'un mateix punt O, tallades per un joc de rectes paral·leles, amb els punts x marcats.</title><g transform=\"translate(14.0,75.7)\"><line x1=\"0.0\" y1=\"0.0\" x2=\"126.9\" y2=\"28.1\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"190.4\" y2=\"-42.2\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"42.3\" y1=\"9.4\" x2=\"63.5\" y2=\"-14.1\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"126.9\" y1=\"28.1\" x2=\"190.4\" y2=\"-42.2\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"-0.5\" y1=\"2.4\" x2=\"-4.7\" y2=\"21.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"41.8\" y1=\"11.8\" x2=\"37.7\" y2=\"30.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-3.9\" y1=\"17.6\" x2=\"38.4\" y2=\"27.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-6.9\" y1=\"12.8\" x2=\"-0.9\" y2=\"22.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"35.4\" y1=\"22.2\" x2=\"41.4\" y2=\"31.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"41.8\" y1=\"11.8\" x2=\"37.7\" y2=\"30.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"126.4\" y1=\"30.6\" x2=\"122.3\" y2=\"49.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"38.4\" y1=\"27.0\" x2=\"123.0\" y2=\"45.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"35.4\" y1=\"22.2\" x2=\"41.4\" y2=\"31.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"120.0\" y1=\"40.9\" x2=\"126.1\" y2=\"50.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-0.5\" y1=\"-2.4\" x2=\"-4.7\" y2=\"-21.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"62.9\" y1=\"-16.5\" x2=\"58.8\" y2=\"-35.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-3.9\" y1=\"-17.6\" x2=\"59.6\" y2=\"-31.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-6.9\" y1=\"-12.8\" x2=\"-0.9\" y2=\"-22.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"56.5\" y1=\"-26.9\" x2=\"62.6\" y2=\"-36.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"62.9\" y1=\"-16.5\" x2=\"58.8\" y2=\"-35.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"189.8\" y1=\"-44.6\" x2=\"185.7\" y2=\"-63.2\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"59.6\" y1=\"-31.6\" x2=\"186.5\" y2=\"-59.8\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"56.5\" y1=\"-26.9\" x2=\"62.6\" y2=\"-36.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"183.4\" y1=\"-55.0\" x2=\"189.5\" y2=\"-64.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"14.9\" y=\"35.9\" text-anchor=\"middle\" class=\"fig-etq petita\">2 cm</text><text x=\"78.3\" y=\"50\" text-anchor=\"middle\" class=\"fig-etq petita\">4 cm</text><text x=\"25.5\" y=\"-32.4\" text-anchor=\"middle\" class=\"fig-etq petita\">3 cm</text><text x=\"120.6\" y=\"-53.5\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text></g></svg>"
  },
  {
   "id": "152c",
   "ex": 152,
   "ap": "c",
   "bloc": "tales",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula el valor de $x$ en aquestes figures de rectes paral·leles tallades per dues rectes secants.",
   "enunciat": "Una secant té segments de $8$ cm i $4$ cm; l'altra, $x$ i $6$ cm (segments corresponents en el mateix ordre).",
   "opcions": [
    "$3$ cm",
    "$4{,}5$ cm",
    "$48$ cm",
    "$12$ cm"
   ],
   "pistes": [
    "Els segments es corresponen en ordre: el primer d'una secant amb el primer de l'altra, i el segon amb el segon. Aquí el $8$ va amb la $x$, i el $4$ amb el $6$.",
    "Per Tales, totes dues secants queden dividides en la mateixa proporció: $\\dfrac{8}{4}=\\dfrac{x}{6}$. Aïlla $x$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgaW50ZXJjYW52aWF0IHF1aW4gc2VnbWVudCBjb3JyZXNwb24gYSBxdWluOiBwbGFudGVqYSAkXFxkZnJhY3s4fXs0fT1cXGRmcmFje3h9ezZ9JCwgbm8gbGEgcHJvcG9yY2nDsyBhbWIgZWxzIHRlcm1lcyBpbnZlcnRpdHMuIiwgIlNlbWJsYSBxdWUgaGFzIGNhbGN1bGF0ICQ2XFxjZG90NDo4JCBhbWIgdW4gYWx0cmUgYXBhcmVsbGFtZW50IGRlIHNlZ21lbnRzOiByZXZpc2EgcXVpbnMgZG9zIHNlZ21lbnRzIHPDs24gY29ycmVzcG9uZW50cyBlbnRyZSBsZXMgZHVlcyBzZWNhbnRzLiIsICJBcXVlc3QgdmFsb3Igc3VydCBkZSAkOFxcY2RvdDYkIHNlbnNlIGRpdmlkaXIgcGVyICQ0JDogJHg9XFxkZnJhY3s4XFxjZG90Nn17NH0kLCBubyBub23DqXMgZWwgbnVtZXJhZG9yLiIsICIiXSwgImVyciI6IFsiQ1JFVUFNRU5UX0lOVkVSVElUIiwgIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiIl0sICJyZXMiOiBbIiRcXGRmcmFjezh9ezR9PVxcZGZyYWN7eH17Nn0gXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4PVxcZGZyYWN7OFxcY2RvdDZ9ezR9JCIsICIkeD0xMiQgY20iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 219 154\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues rectes secants que surten d'un mateix punt O, tallades per un joc de rectes paral·leles, amb els punts x marcats.</title><g transform=\"translate(14.0,82.7)\"><line x1=\"0.0\" y1=\"0.0\" x2=\"126.9\" y2=\"28.1\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"190.4\" y2=\"-42.2\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"84.6\" y1=\"18.8\" x2=\"126.9\" y2=\"-28.1\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line x1=\"126.9\" y1=\"28.1\" x2=\"190.4\" y2=\"-42.2\" stroke=\"currentColor\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"-0.5\" y1=\"2.4\" x2=\"-4.7\" y2=\"21.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"84.1\" y1=\"21.2\" x2=\"80.0\" y2=\"39.7\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-3.9\" y1=\"17.6\" x2=\"80.7\" y2=\"36.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-6.9\" y1=\"12.8\" x2=\"-0.9\" y2=\"22.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"77.7\" y1=\"31.6\" x2=\"83.8\" y2=\"41.1\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"84.1\" y1=\"21.2\" x2=\"80.0\" y2=\"39.7\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"126.4\" y1=\"30.6\" x2=\"122.3\" y2=\"49.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"80.7\" y1=\"36.3\" x2=\"123.0\" y2=\"45.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"77.7\" y1=\"31.6\" x2=\"83.8\" y2=\"41.1\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"120.0\" y1=\"40.9\" x2=\"126.1\" y2=\"50.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-0.5\" y1=\"-2.4\" x2=\"-4.7\" y2=\"-21.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"126.4\" y1=\"-30.6\" x2=\"122.3\" y2=\"-49.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-3.9\" y1=\"-17.6\" x2=\"123.0\" y2=\"-45.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-6.9\" y1=\"-12.8\" x2=\"-0.9\" y2=\"-22.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"120.0\" y1=\"-40.9\" x2=\"126.1\" y2=\"-50.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"126.4\" y1=\"-30.6\" x2=\"122.3\" y2=\"-49.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"189.8\" y1=\"-44.6\" x2=\"185.7\" y2=\"-63.2\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"123.0\" y1=\"-45.7\" x2=\"186.5\" y2=\"-59.8\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"120.0\" y1=\"-40.9\" x2=\"126.1\" y2=\"-50.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"183.4\" y1=\"-55.0\" x2=\"189.5\" y2=\"-64.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"36\" y=\"40.6\" text-anchor=\"middle\" class=\"fig-etq petita\">8 cm</text><text x=\"99.5\" y=\"54.7\" text-anchor=\"middle\" class=\"fig-etq petita\">4 cm</text><text x=\"57.2\" y=\"-39.4\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text><text x=\"152.4\" y=\"-60.5\" text-anchor=\"middle\" class=\"fig-etq petita\">6 cm</text></g></svg>"
  },
  {
   "id": "152e",
   "ex": 152,
   "ap": "e",
   "bloc": "tales",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula el valor de $x$ en aquestes figures de rectes paral·leles tallades per dues rectes secants.",
   "enunciat": "Una secant té segments de $x$ i $10$ cm; l'altra, $5$ cm i $8$ cm (segments corresponents en el mateix ordre).",
   "opcions": [
    "$16$ cm",
    "$6{,}25$ cm",
    "$50$ cm",
    "$4$ cm"
   ],
   "pistes": [
    "Els segments es corresponen en ordre: el primer d'una secant amb el primer de l'altra, i el segon amb el segon. Aquí la $x$ va amb el $5$, i el $10$ amb el $8$.",
    "Per Tales, totes dues secants queden dividides en la mateixa proporció: $\\dfrac{x}{10}=\\dfrac{5}{8}$. Aïlla $x$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgaW50ZXJjYW52aWF0IHF1aW5hIGZyYWNjacOzIMOpcyBxdWluYTogcGxhbnRlamEgJFxcZGZyYWN7eH17MTB9PVxcZGZyYWN7NX17OH0kLCBhbWIgJHgkIGNvcnJlc3BvbmVudCBhbCBzZWdtZW50IGRlICQ1JCBjbSwgbm8gYWwgZGUgJDgkIGNtLiIsICIiLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZGUgJDEwXFxjZG90NSQgc2Vuc2UgZGl2aWRpciBwZXIgJDgkOiAkeD1cXGRmcmFjezEwXFxjZG90NX17OH0kLCBubyBub23DqXMgZWwgbnVtZXJhZG9yLiIsICJBcXVlc3QgdmFsb3Igc3VydCBkZSAkXFxkZnJhY3s1XFxjZG90OH17MTB9JDogcmV2aXNhIHF1aW4gc2VnbWVudCDDqXMgZWwgcXVlIG11bHRpcGxpY2EgcGVyICQxMCQgaSBxdWluIGhpIGRpdmlkZWl4LiJdLCAiZXJyIjogWyJDUkVVQU1FTlRfSU5WRVJUSVQiLCAiIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiUFJPRFVDVEVfTUFMIl0sICJyZXMiOiBbIiRcXGRmcmFje3h9ezEwfT1cXGRmcmFjezV9ezh9IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgeD1cXGRmcmFjezEwXFxjZG90NX17OH0kIiwgIiR4PTZ7LH0yNSQgY20iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 235 153\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues rectes secants que surten d'un mateix punt O, tallades per un joc de rectes paral·leles, amb els punts x marcats.</title><g transform=\"translate(14.0,72.9)\"><line x1=\"0.0\" y1=\"0.0\" x2=\"206.2\" y2=\"45.7\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"165.0\" y2=\"-36.6\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"79.3\" y1=\"17.6\" x2=\"63.5\" y2=\"-14.1\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line x1=\"206.2\" y1=\"45.7\" x2=\"165.0\" y2=\"-36.6\" stroke=\"currentColor\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"-0.5\" y1=\"2.4\" x2=\"-4.7\" y2=\"21.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"78.8\" y1=\"20.0\" x2=\"74.7\" y2=\"38.6\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-3.9\" y1=\"17.6\" x2=\"75.4\" y2=\"35.2\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-6.9\" y1=\"12.8\" x2=\"-0.9\" y2=\"22.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"72.4\" y1=\"30.4\" x2=\"78.5\" y2=\"39.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"78.8\" y1=\"20.0\" x2=\"74.7\" y2=\"38.6\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"205.7\" y1=\"48.2\" x2=\"201.6\" y2=\"66.7\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"75.4\" y1=\"35.2\" x2=\"202.3\" y2=\"63.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"72.4\" y1=\"30.4\" x2=\"78.5\" y2=\"39.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"199.3\" y1=\"58.5\" x2=\"205.4\" y2=\"68.1\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-0.5\" y1=\"-2.4\" x2=\"-4.7\" y2=\"-21.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"62.9\" y1=\"-16.5\" x2=\"58.8\" y2=\"-35.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-3.9\" y1=\"-17.6\" x2=\"59.6\" y2=\"-31.6\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-6.9\" y1=\"-12.8\" x2=\"-0.9\" y2=\"-22.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"56.5\" y1=\"-26.9\" x2=\"62.6\" y2=\"-36.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"62.9\" y1=\"-16.5\" x2=\"58.8\" y2=\"-35.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"164.5\" y1=\"-39.0\" x2=\"160.3\" y2=\"-57.6\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"59.6\" y1=\"-31.6\" x2=\"161.1\" y2=\"-54.2\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"56.5\" y1=\"-26.9\" x2=\"62.6\" y2=\"-36.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"158.1\" y1=\"-49.4\" x2=\"164.1\" y2=\"-58.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"33.4\" y=\"40\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text><text x=\"136.5\" y=\"62.9\" text-anchor=\"middle\" class=\"fig-etq petita\">10 cm</text><text x=\"25.5\" y=\"-32.4\" text-anchor=\"middle\" class=\"fig-etq petita\">5 cm</text><text x=\"107.9\" y=\"-50.7\" text-anchor=\"middle\" class=\"fig-etq petita\">8 cm</text></g></svg>"
  },
  {
   "id": "152f",
   "ex": 152,
   "ap": "f",
   "bloc": "tales",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula el valor de $x$ en aquestes figures de rectes paral·leles tallades per dues rectes secants.",
   "enunciat": "Una secant té segments de $4{,}8$ cm i $2$ cm; l'altra, $x$ i $3$ cm (segments corresponents en el mateix ordre).",
   "opcions": [
    "$0{,}83$ cm",
    "$14{,}4$ cm",
    "$7{,}2$ cm",
    "$1{,}25$ cm"
   ],
   "pistes": [
    "Els segments es corresponen en ordre: el primer d'una secant amb el primer de l'altra, i el segon amb el segon. Aquí el $4{,}8$ va amb la $x$, i el $2$ amb el $3$.",
    "Per Tales, totes dues secants queden dividides en la mateixa proporció: $\\dfrac{4{,}8}{2}=\\dfrac{x}{3}$. Aïlla $x$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJTZW1ibGEgcXVlIGhhcyBkaXZpZGl0ICQyOjR7LH04XFxjZG90MyQgYW1iIGVscyB0ZXJtZXMgaW50ZXJjYW52aWF0czogcmV2aXNhIHF1aW4gc2VnbWVudCBmYSBkZSBudW1lcmFkb3IgYSBjYWRhIHNlY2FudC4iLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZGUgJDR7LH04XFxjZG90MyQgc2Vuc2UgZGl2aWRpciBwZXIgJDIkOiAkeD1cXGRmcmFjezR7LH04XFxjZG90M317Mn0kLCBubyBub23DqXMgZWwgbnVtZXJhZG9yLiIsICIiLCAiSGFzIG11bnRhdCBsYSBwcm9wb3JjacOzIGFtYiBlbHMgc2VnbWVudHMgZGUgY2FkYSBzZWNhbnQgaW50ZXJjYW52aWF0cy4gUGxhbnRlamEgJFxcZGZyYWN7NHssfTh9ezJ9PVxcZGZyYWN7eH17M30kLCBubyBsYSBwcm9wb3JjacOzIGludmVyc2EuIl0sICJlcnIiOiBbIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiIiwgIkNSRVVBTUVOVF9JTlZFUlRJVCJdLCAicmVzIjogWyIkXFxkZnJhY3s0eyx9OH17Mn09XFxkZnJhY3t4fXszfSBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9XFxkZnJhY3s0eyx9OFxcY2RvdDN9ezJ9JCIsICIkeD03eyx9MiQgY20iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 208 152\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues rectes secants que surten d'un mateix punt O, tallades per un joc de rectes paral·leles, amb els punts x marcats.</title><g transform=\"translate(14.0,81.6)\"><line x1=\"0.0\" y1=\"0.0\" x2=\"119.9\" y2=\"26.6\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"179.8\" y2=\"-39.9\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"84.6\" y1=\"18.8\" x2=\"126.9\" y2=\"-28.1\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line x1=\"119.9\" y1=\"26.6\" x2=\"179.8\" y2=\"-39.9\" stroke=\"currentColor\" stroke-width=\"2\"/><line class=\"fig-cota\" x1=\"-0.5\" y1=\"2.4\" x2=\"-4.7\" y2=\"21.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"84.1\" y1=\"21.2\" x2=\"80.0\" y2=\"39.7\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-3.9\" y1=\"17.6\" x2=\"80.7\" y2=\"36.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-6.9\" y1=\"12.8\" x2=\"-0.9\" y2=\"22.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"77.7\" y1=\"31.6\" x2=\"83.8\" y2=\"41.1\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"84.1\" y1=\"21.2\" x2=\"80.0\" y2=\"39.7\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"119.3\" y1=\"29.0\" x2=\"115.2\" y2=\"47.6\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"80.7\" y1=\"36.3\" x2=\"116.0\" y2=\"44.1\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"77.7\" y1=\"31.6\" x2=\"83.8\" y2=\"41.1\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"112.9\" y1=\"39.4\" x2=\"119.0\" y2=\"48.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-0.5\" y1=\"-2.4\" x2=\"-4.7\" y2=\"-21.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"126.4\" y1=\"-30.6\" x2=\"122.3\" y2=\"-49.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-3.9\" y1=\"-17.6\" x2=\"123.0\" y2=\"-45.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-6.9\" y1=\"-12.8\" x2=\"-0.9\" y2=\"-22.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"120.0\" y1=\"-40.9\" x2=\"126.1\" y2=\"-50.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"126.4\" y1=\"-30.6\" x2=\"122.3\" y2=\"-49.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"179.3\" y1=\"-42.3\" x2=\"175.1\" y2=\"-60.9\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"123.0\" y1=\"-45.7\" x2=\"175.9\" y2=\"-57.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"120.0\" y1=\"-40.9\" x2=\"126.1\" y2=\"-50.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"172.9\" y1=\"-52.7\" x2=\"178.9\" y2=\"-62.2\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"25.9\" y=\"38.4\" text-anchor=\"middle\" class=\"fig-etq petita\">4,8 cm</text><text x=\"96\" y=\"53.9\" text-anchor=\"middle\" class=\"fig-etq petita\">2 cm</text><text x=\"57.2\" y=\"-39.4\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text><text x=\"147.1\" y=\"-59.4\" text-anchor=\"middle\" class=\"fig-etq petita\">3 cm</text></g></svg>"
  },
  {
   "id": "153a",
   "ex": 153,
   "ap": "a",
   "bloc": "tales",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Dos triangles estan en posició de Tales des del vèrtex $O$, amb els costats $OA$, $OB$ i $OC$ sobre una recta, i $OA'$, $OB'$ i $OC'$ sobre una altra (amb $A,B,C$ i $A',B',C'$ en el mateix ordre a cada recta).",
   "enunciat": "Si $OA=2$ cm, $OB=5$ cm, $OA'=2{,}6$ cm i $OC'=11{,}7$ cm, quant val $BC$?",
   "opcions": [
    "$4$ cm",
    "$9$ cm",
    "$6{,}5$ cm",
    "$3{,}25$ cm"
   ],
   "pistes": [
    "La raó entre els dos triangles és $k=\\dfrac{OA'}{OA}=\\dfrac{2{,}6}{2}=1{,}3$.",
    "Amb aquesta raó, $OC=\\dfrac{OC'}{k}$, i després $BC=OC-OB$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJDkkIGNtIMOpcyBlbCB2YWxvciBkZSAkT0MkLCBubyBkZSAkQkM9T0MtT0IkOiB1biBjb3AgdGluZ3VpcyAkT0MkLCBlbmNhcmEgaGFzIGRlIHJlc3Rhci1oaSAkT0IkLiIsICIkNnssfTUkIGNtIMOpcyBlbCB2YWxvciBkZSAkT0InJCwgbm8gZGUgJEJDJDogdG9ybmEgYSBtaXJhciBxdWluYSBkaXN0w6BuY2lhIGV0IGRlbWFuYSBsJ2VudW5jaWF0LiIsICJBcXVlc3QgdmFsb3Igc3VydCBkJ2FwbGljYXIgbGEgcmHDsyBkZSBzZW1ibGFuw6dhICRrPVxcZnJhY3tPQSd9e09BfSQgYSAkT0IkIGVuIGxsb2MgZGUgY2FsY3VsYXIgcHJpbWVyICRPQyQgaSBkZXNwcsOpcyByZXN0YXItaGkgJE9CJDogJEJDPU9DLU9CJCwgaSAkT0M9XFxmcmFje09DJ317a30kLiJdLCAiZXJyIjogWyIiLCAiUFJPR1JFU1NJT19JTlZFTlRBREEiLCAiUFJPR1JFU1NJT19JTlZFTlRBREEiLCAiQ1JFVUFNRU5UX0lOVkVSVElUIl0sICJyZXMiOiBbIiRrPVxcZGZyYWN7T0EnfXtPQX09XFxkZnJhY3syeyx9Nn17Mn09MXssfTMkIiwgIiRPQz1cXGRmcmFje09DJ317a309XFxkZnJhY3sxMXssfTd9ezF7LH0zfT05JCBjbSIsICIkQkM9T0MtT0I9OS01PTQkIGNtIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 179 107\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues rectes secants que surten d'un mateix punt O, tallades per un joc de rectes paral·leles, amb els punts BC marcats.</title><g transform=\"translate(27.7,56.6)\"><line x1=\"0.0\" y1=\"0.0\" x2=\"97.6\" y2=\"21.6\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"126.9\" y2=\"-28.1\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"21.7\" y1=\"4.8\" x2=\"28.2\" y2=\"-6.3\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"54.2\" y1=\"12.0\" x2=\"70.5\" y2=\"-15.6\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"97.6\" y1=\"21.6\" x2=\"126.9\" y2=\"-28.1\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"-10\" y=\"3.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">O</text><text x=\"26.9\" y=\"19.7\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">A</text><text x=\"59.4\" y=\"26.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">B</text><text x=\"101.6\" y=\"33.8\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">C</text><text x=\"33.4\" y=\"-15.2\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">A'</text><text x=\"75.7\" y=\"-24.6\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">B'</text><text x=\"130.9\" y=\"-34.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">C'</text></g></svg>"
  },
  {
   "id": "153b",
   "ex": 153,
   "ap": "b",
   "bloc": "tales",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Dos triangles estan en posició de Tales des del vèrtex $O$, amb els costats $OA$, $OB$ i $OC$ sobre una recta, i $OA'$, $OB'$ i $OC'$ sobre una altra (amb $A,B,C$ i $A',B',C'$ en el mateix ordre a cada recta).",
   "enunciat": "Si $OB=9$ cm, $OA'=4$ cm, $OB'=12$ cm i $OC'=18$ cm, quant val $AB$?",
   "opcions": [
    "$6$ cm",
    "$13{,}5$ cm",
    "$3$ cm",
    "$9{,}75$ cm"
   ],
   "pistes": [
    "La raó entre els dos triangles és $k=\\dfrac{OB'}{OB}=\\dfrac{12}{9}=1{,}33\\overline{3}$.",
    "Amb aquesta raó, $OA=\\dfrac{OA'}{k}$, i després $AB=OB-OA$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJDEzeyx9NSQgY20gw6lzIGVsIHZhbG9yIGRlICRPQyQsIG5vIGRlICRBQiQ6IHRvcm5hIGEgbWlyYXIgcXVpbmEgZGlzdMOgbmNpYSBldCBkZW1hbmEgbCdlbnVuY2lhdC4iLCAiJDMkIGNtIMOpcyBlbCB2YWxvciBkZSAkT0EkLCBubyBkZSAkQUI9T0ItT0EkOiB1biBjb3AgdGluZ3VpcyAkT0EkLCBlbmNhcmEgaGFzIGRlIHJlc3Rhci1sYSBkZSAkT0IkLiIsICJBcXVlc3QgdmFsb3Igc3VydCBkJ2FwbGljYXIgbGEgcmHDsyAkayQgZGlyZWN0YW1lbnQgYSAkT0IkIGVuIGNvbXB0ZXMgZGUgY2FsY3VsYXIgcHJpbWVyICRPQSQgYW1iICRrPVxcZnJhY3tPQid9e09CfSQgaSBkZXNwcsOpcyByZXN0YXItbGEgZGUgJE9CJDogJEFCPU9CLU9BJC4iXSwgImVyciI6IFsiIiwgIlBST0dSRVNTSU9fSU5WRU5UQURBIiwgIlBST0dSRVNTSU9fSU5WRU5UQURBIiwgIkNSRVVBTUVOVF9JTlZFUlRJVCJdLCAicmVzIjogWyIkaz1cXGRmcmFje09CJ317T0J9PVxcZGZyYWN7MTJ9ezl9PVxcZGZyYWN7NH17M30kIiwgIiRPQT1cXGRmcmFje09BJ317a309NFxcY2RvdFxcZGZyYWN7M317NH09MyQgY20iLCAiJEFCPU9CLU9BPTktMz02JCBjbSJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 179 107\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues rectes secants que surten d'un mateix punt O, tallades per un joc de rectes paral·leles, amb els punts AB marcats.</title><g transform=\"translate(27.7,56.6)\"><line x1=\"0.0\" y1=\"0.0\" x2=\"95.2\" y2=\"21.1\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"126.9\" y2=\"-28.1\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"21.2\" y1=\"4.7\" x2=\"28.2\" y2=\"-6.3\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"63.5\" y1=\"14.1\" x2=\"84.6\" y2=\"-18.8\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"95.2\" y1=\"21.1\" x2=\"126.9\" y2=\"-28.1\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"-10\" y=\"3.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">O</text><text x=\"26.3\" y=\"19.6\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">A</text><text x=\"68.6\" y=\"28.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">B</text><text x=\"99.2\" y=\"33.2\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">C</text><text x=\"33.4\" y=\"-15.2\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">A'</text><text x=\"89.8\" y=\"-27.7\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">B'</text><text x=\"130.9\" y=\"-34.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">C'</text></g></svg>"
  },
  {
   "id": "153c",
   "ex": 153,
   "ap": "c",
   "bloc": "tales",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Dos triangles estan en posició de Tales des del vèrtex $O$, amb els costats $OA$, $OB$ i $OC$ sobre una recta, i $OA'$, $OB'$ i $OC'$ sobre una altra (amb $A,B,C$ i $A',B',C'$ en el mateix ordre a cada recta).",
   "enunciat": "Si $OA=5$ cm, $OC=22{,}5$ cm, $OC'=36$ cm i $OB'=24$ cm, quant val $AB$?",
   "opcions": [
    "$15$ cm",
    "$6{,}25$ cm",
    "$10$ cm",
    "$8$ cm"
   ],
   "pistes": [
    "La raó entre els dos triangles és $k=\\dfrac{OC'}{OC}=\\dfrac{36}{22{,}5}=1{,}6$.",
    "Amb aquesta raó, $OB=\\dfrac{OB'}{k}$, i després $AB=OB-OA$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyIkMTUkIGNtIMOpcyBlbCB2YWxvciBkZSAkT0IkLCBubyBkZSAkQUIkOiBlbmNhcmEgaGFzIGRlIHJlc3Rhci1oaSAkT0E9NSQgY20uIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGQnYXBsaWNhciBsYSByYcOzICRrJCBhICRPQSQgZW4gY29tcHRlcyBkJ3VzYXItbGEgcGVyIHRyb2JhciAkT0IkIGEgcGFydGlyIGRlICRPQickOiAkT0I9XFxmcmFje09CJ317a30kLCBpIGRlc3Byw6lzICRBQj1PQi1PQSQuIiwgIiIsICIkOCQgY20gw6lzIGVsIHZhbG9yIGRlICRPQSckLCBubyBkZSAkQUI9T0ItT0EkOiB1biBjb3AgdGluZ3VpcyAkT0IkLCBlbmNhcmEgbCdoYXMgZGUgY29tcGFyYXIgYW1iICRPQSQsIG5vIGFtYiAkT0EnJC4iXSwgImVyciI6IFsiUFJPR1JFU1NJT19JTlZFTlRBREEiLCAiQ1JFVUFNRU5UX0lOVkVSVElUIiwgIiIsICJQUk9HUkVTU0lPX0lOVkVOVEFEQSJdLCAicmVzIjogWyIkaz1cXGRmcmFje09DJ317T0N9PVxcZGZyYWN7MzZ9ezIyeyx9NX09MXssfTYkIiwgIiRPQj1cXGRmcmFje09CJ317a309XFxkZnJhY3syNH17MXssfTZ9PTE1JCBjbSIsICIkQUI9T0ItT0E9MTUtNT0xMCQgY20iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 179 103\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues rectes secants que surten d'un mateix punt O, tallades per un joc de rectes paral·leles, amb els punts AB marcats.</title><g transform=\"translate(27.7,56.6)\"><line x1=\"0.0\" y1=\"0.0\" x2=\"79.3\" y2=\"17.6\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"126.9\" y2=\"-28.1\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"17.6\" y1=\"3.9\" x2=\"28.2\" y2=\"-6.3\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"52.9\" y1=\"11.7\" x2=\"84.6\" y2=\"-18.8\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"79.3\" y1=\"17.6\" x2=\"126.9\" y2=\"-28.1\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"-10\" y=\"3.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">O</text><text x=\"22.8\" y=\"18.8\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">A</text><text x=\"58.1\" y=\"26.6\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">B</text><text x=\"83.3\" y=\"29.7\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">C</text><text x=\"33.4\" y=\"-15.2\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">A'</text><text x=\"89.8\" y=\"-27.7\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">B'</text><text x=\"130.9\" y=\"-34.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">C'</text></g></svg>"
  }
 ]
};
