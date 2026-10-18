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
  "ARITMETICA_PAS_INTERMEDI": "El plantejament és bo, però hi ha un error de càlcul en un dels passos del mig. Refes l'operació pas a pas i comprova el resultat substituint-lo a l'enunciat original.",
  "CATET_HIPOTENUSA_CONFOSOS": "Has intercanviat un catet amb la hipotenusa. La hipotenusa és sempre el costat més llarg i va sola a un costat de la igualtat.",
  "CREUAMENT_INVERTIT": "Has creuat els termes al revés en aïllar la incògnita.",
  "DIVISIO_QUOCIENT_RESIDU_CANVIATS": "Has intercanviat el quocient i el residu: el quocient és el polinomi que queda a la fila de baix (llevat de l'últim terme), i el residu és l'últim número, una constant.",
  "PRODUCTE_MAL": "Has multiplicat els dos nombres que et donaven en comptes d'aïllar la incògnita amb els productes creuats.",
  "PROGRESSIO_INVENTADA": "El terme s'ha de calcular seguint estrictament la regla que defineix la successió (el terme general o la relació de recurrència), no un patró aproximat o inventat.",
  "RAONAMENT_ADDITIU": "Has passat d'una fracció a l'altra sumant. Dues fraccions són equivalents quan es passa d'una a l'altra MULTIPLICANT els dos termes pel mateix nombre.",
  "SUMA_EN_LLOC_RESTA": "Sumar un nombre negatiu és restar-lo.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau."
 },
 "items": [
  {
   "id": "161",
   "ex": 161,
   "ap": "",
   "bloc": "aplicacions",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Quant mesura l'ombra projectada per un arbre de $15$ m d'altura, sabent que en aquest mateix moment un altre arbre de $8$ m d'altura projecta una ombra de $10$ m?",
   "opcions": [
    "$16$ m",
    "$8$ m",
    "$12{,}5$ m",
    "$18{,}75$ m"
   ],
   "pistes": [
    "Al mateix moment, l'altura i l'ombra són proporcionals: cada arbre amb la seva ombra. Arbre petit: $8$ m d'altura i $10$ m d'ombra. Arbre gran: $15$ m d'altura i ombra $x$.",
    "$\\dfrac{8}{10}=\\dfrac{15}{x}$. Aïlla $x$: com que l'arbre gran és més alt, la seva ombra ha de sortir més llarga."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igc3VydCBkZSAkOFxcY2RvdDIkOiBjb21wcm92YSBlbCBjw6BsY3VsIGNvbXBsZXQgJHg9XFxmcmFjezE1XFxjZG90MTB9ezh9JCBwYXMgYSBwYXMgZW4gbGxvYyBkJ3VuYSBhcHJveGltYWNpw7MuIiwgIiQ4JCBtIMOpcyBsJ2FsdHVyYSBkZWwgcHJpbWVyIGFyYnJlLCBubyBsJ29tYnJhIHF1ZSBlcyBkZW1hbmEgcGVyIGFsIHNlZ29uOiB0b3JuYSBhIHBsYW50ZWphciBsYSBwcm9wb3JjacOzIGRlcyBkZSB6ZXJvLiIsICJBcXVlc3QgdmFsb3Igc3VydCBkJ2ludmVydGlyIGxhIHByb3BvcmNpw7M6IGNvbSBxdWUgZWwgc2Vnb24gYXJicmUgw6lzIE3DiVMgQUxULCBsYSBzZXZhIG9tYnJhIGhhIGRlIHNlciBNw4lTIExMQVJHQSBxdWUgbGEgZGVsIHByaW1lciwgbm8gbcOpcyBjdXJ0YS4gUGxhbnRlamEgJFxcZnJhY3s4fXsxMH09XFxmcmFjezE1fXt4fSQuIiwgIiJdLCAiZXJyIjogWyJQUk9EVUNURV9NQUwiLCAiUFJPR1JFU1NJT19JTlZFTlRBREEiLCAiQ1JFVUFNRU5UX0lOVkVSVElUIiwgIiJdLCAicmVzIjogWyIkXFxkZnJhY3s4fXsxMH09XFxkZnJhY3sxNX17eH0gXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4PVxcZGZyYWN7MTVcXGNkb3QxMH17OH0kIiwgIiR4PTE4eyx9NzUkIG0iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 268 132\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles rectangles semblants, cadascun amb un costat vertical i un costat horitzontal, units per una mateixa línia de referència amb la mateixa inclinació.</title><g transform=\"translate(53.6,102.0)\"><line x1=\"0.0\" y1=\"0.0\" x2=\"0.0\" y2=\"-40.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-40.0\" x2=\"50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line x1=\"90.0\" y1=\"0.0\" x2=\"90.0\" y2=\"-88.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90.0\" y1=\"0.0\" x2=\"200.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90.0\" y1=\"-88.0\" x2=\"200.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"-40.0\" x2=\"-18.5\" y2=\"-40.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-18.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-15.0\" y1=\"-40.0\" x2=\"-15.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-11.0\" y1=\"-44.0\" x2=\"-19.0\" y2=\"-36.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-11.0\" y1=\"-4.0\" x2=\"-19.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"-2.5\" x2=\"0.0\" y2=\"-18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"50.0\" y1=\"-2.5\" x2=\"50.0\" y2=\"-18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"-15.0\" x2=\"50.0\" y2=\"-15.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"-11.0\" x2=\"4.0\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"46.0\" y1=\"-11.0\" x2=\"54.0\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"87.5\" y1=\"-88.0\" x2=\"71.5\" y2=\"-88.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"87.5\" y1=\"0.0\" x2=\"71.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"75.0\" y1=\"-88.0\" x2=\"75.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"79.0\" y1=\"-92.0\" x2=\"71.0\" y2=\"-84.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"79.0\" y1=\"-4.0\" x2=\"71.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"90.0\" y1=\"-2.5\" x2=\"90.0\" y2=\"-18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"200.0\" y1=\"-2.5\" x2=\"200.0\" y2=\"-18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"90.0\" y1=\"-15.0\" x2=\"200.0\" y2=\"-15.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"86.0\" y1=\"-11.0\" x2=\"94.0\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"196.0\" y1=\"-11.0\" x2=\"204.0\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"-30\" y=\"-17.1\" text-anchor=\"middle\" class=\"fig-etq petita\">8 m</text><text x=\"37\" y=\"-27.1\" text-anchor=\"middle\" class=\"fig-etq petita\">10 m</text><text x=\"60\" y=\"-41.1\" text-anchor=\"middle\" class=\"fig-etq petita\">15 m</text><text x=\"145\" y=\"-23.1\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text><text x=\"25\" y=\"12.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">arbre petit</text><text x=\"145\" y=\"12.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">arbre gran</text></g></svg>"
  },
  {
   "id": "162",
   "ex": 162,
   "ap": "",
   "bloc": "aplicacions",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Una antena està subjectada amb dos cables que formen entre ells un angle de $90^\\circ$ i mesuren $8$ i $5$ m, respectivament. A quina altura s'enganxen a l'antena?",
   "opcions": [
    "$13$ m",
    "$6{,}24$ m",
    "$9{,}43$ m (aproximadament)",
    "$40$ m"
   ],
   "pistes": [
    "Com que els dos cables formen un angle de $90^\\circ$ entre ells, són els catets d'un triangle rectangle, i el tram d'antena entre els dos punts d'ancoratge n'és la hipotenusa.",
    "Aplica el teorema de Pitàgores: $h=\\sqrt{8^2+5^2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgc3VtYXQgbGVzIGR1ZXMgbG9uZ2l0dWRzICgkOCs1JCkgZW5sbG9jIGQnYXBsaWNhciBlbCB0ZW9yZW1hIGRlIFBpdMOgZ29yZXM6IGNvbSBxdWUgZWxzIGNhYmxlcyBmb3JtZW4gdW4gYW5nbGUgcmVjdGUsIHPDs24gZWxzIGNhdGV0cyBkJ3VuIHRyaWFuZ2xlIHJlY3RhbmdsZSwgaSBjYWwgJGg9XFxzcXJ0ezheMis1XjJ9JC4iLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZGUgJFxcc3FydHs4XjItNV4yfSQsIGNvbSBzaSAkOCQgZm9zIGxhIGhpcG90ZW51c2EgaSAkNSQgdW4gY2F0ZXQ7IGFxdcOtIGVscyBET1MgY2FibGVzIHPDs24gY2F0ZXRzIChmb3JtZW4gbCdhbmdsZSByZWN0ZSBlbnRyZSBlbGxzKSwgaSBsJ2FudGVuYSDDqXMgbGEgaGlwb3RlbnVzYTogY2FsIHN1bWFyIGVscyBxdWFkcmF0cywgbm8gcmVzdGFyLWxvcy4iLCAiIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGRlIG11bHRpcGxpY2FyICQ4XFxjZG90NSQ6IGVsIHRlb3JlbWEgZGUgUGl0w6Bnb3JlcyByZWxhY2lvbmEgZWxzIFFVQURSQVRTIGRlbHMgY2F0ZXRzLCBubyBlbCBzZXUgcHJvZHVjdGUgZGlyZWN0ZS4iXSwgImVyciI6IFsiU1VNQV9FTl9MTE9DX1JFU1RBIiwgIkNBVEVUX0hJUE9URU5VU0FfQ09ORk9TT1MiLCAiIiwgIlBST0RVQ1RFX01BTCJdLCAicmVzIjogWyIkaD1cXHNxcnR7OF4yKzVeMn09XFxzcXJ0ezY0KzI1fT1cXHNxcnR7ODl9JCIsICIkaFxcYXBwcm94OXssfTQzJCBtIl19"
  },
  {
   "id": "163",
   "ex": 163,
   "ap": "",
   "bloc": "aplicacions",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Un arbre fa $5$ m d'altura i, a una determinada hora del dia, projecta una ombra de $6$ m. Quina altura tindrà un edifici que a la mateixa hora projecta una ombra de $10$ m?",
   "opcions": [
    "$6$ m",
    "$12$ m",
    "$8{,}33$ m (aproximadament)",
    "$9$ m"
   ],
   "pistes": [
    "A la mateixa hora, l'altura i l'ombra són proporcionals: cada objecte amb la seva ombra. Arbre: $5$ m d'altura i $6$ m d'ombra. Edifici: altura $x$ i $10$ m d'ombra.",
    "Ombra entre altura dona el mateix per als dos: $\\dfrac{6}{5}=\\dfrac{10}{x}$. Aïlla $x$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyIkNiQgbSDDqXMgbCdvbWJyYSBkZSBsJ2FyYnJlLCBubyBsJ2FsdHVyYSBkZSBsJ2VkaWZpY2kgcXVlIGVzIGRlbWFuYTogdG9ybmEgYSBwbGFudGVqYXIgbGEgcHJvcG9yY2nDsyBkZXMgZGUgemVyby4iLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZCdpbnZlcnRpciBsYSBwcm9wb3JjacOzOiBwbGFudGVqYSAkXFxmcmFjezZ9ezV9PVxcZnJhY3sxMH17eH0kLCBhbWIgbCdhbHR1cmEgZGUgbCdhcmJyZSBjb3JyZXNwb25lbnQgYSBsYSBzZXZhIHByw7JwaWEgb21icmEsIG5vIGEgbGEgZGUgbCdlZGlmaWNpLiIsICIiLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZGUgc3VtYXIgbGEgZGlmZXLDqG5jaWEgZCdvbWJyZXMgKCQxMC02PTQkKSBhIGwnYWx0dXJhIGRlIGwnYXJicmU6IGwnYWx0dXJhIGkgbCdvbWJyYSBzw7NuIFBST1BPUkNJT05BTFMsIG5vIHZhcmllbiBwZXIgdW5hIGRpZmVyw6huY2lhIHN1bWFkYS4iXSwgImVyciI6IFsiUFJPR1JFU1NJT19JTlZFTlRBREEiLCAiQ1JFVUFNRU5UX0lOVkVSVElUIiwgIiIsICJSQU9OQU1FTlRfQURESVRJVSJdLCAicmVzIjogWyIkXFxkZnJhY3s2fXs1fT1cXGRmcmFjezEwfXt4fSBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9XFxkZnJhY3s1XFxjZG90MTB9ezZ9PVxcZGZyYWN7NTB9ezZ9JCIsICIkeFxcYXBwcm94OHssfTMzJCBtIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 268 135\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles rectangles semblants, cadascun amb un costat vertical i un costat horitzontal, units per una mateixa línia de referència amb la mateixa inclinació.</title><g transform=\"translate(53.6,105.7)\"><line x1=\"0.0\" y1=\"0.0\" x2=\"0.0\" y2=\"-41.7\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-41.7\" x2=\"50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line x1=\"90.0\" y1=\"0.0\" x2=\"90.0\" y2=\"-91.7\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90.0\" y1=\"0.0\" x2=\"200.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90.0\" y1=\"-91.7\" x2=\"200.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"-41.7\" x2=\"-18.5\" y2=\"-41.7\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-18.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-15.0\" y1=\"-41.7\" x2=\"-15.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-11.0\" y1=\"-45.7\" x2=\"-19.0\" y2=\"-37.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-11.0\" y1=\"-4.0\" x2=\"-19.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"-2.5\" x2=\"0.0\" y2=\"-18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"50.0\" y1=\"-2.5\" x2=\"50.0\" y2=\"-18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"-15.0\" x2=\"50.0\" y2=\"-15.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"-11.0\" x2=\"4.0\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"46.0\" y1=\"-11.0\" x2=\"54.0\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"87.5\" y1=\"-91.7\" x2=\"71.5\" y2=\"-91.7\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"87.5\" y1=\"0.0\" x2=\"71.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"75.0\" y1=\"-91.7\" x2=\"75.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"79.0\" y1=\"-95.7\" x2=\"71.0\" y2=\"-87.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"79.0\" y1=\"-4.0\" x2=\"71.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"90.0\" y1=\"-2.5\" x2=\"90.0\" y2=\"-18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"200.0\" y1=\"-2.5\" x2=\"200.0\" y2=\"-18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"90.0\" y1=\"-15.0\" x2=\"200.0\" y2=\"-15.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"86.0\" y1=\"-11.0\" x2=\"94.0\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"196.0\" y1=\"-11.0\" x2=\"204.0\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"-30\" y=\"-17.9\" text-anchor=\"middle\" class=\"fig-etq petita\">5 m</text><text x=\"37\" y=\"-27.1\" text-anchor=\"middle\" class=\"fig-etq petita\">6 m</text><text x=\"64\" y=\"-42.9\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text><text x=\"145\" y=\"-23.1\" text-anchor=\"middle\" class=\"fig-etq petita\">10 m</text><text x=\"25\" y=\"12.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">arbre</text><text x=\"145\" y=\"12.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">edifici</text></g></svg>"
  },
  {
   "id": "164",
   "ex": 164,
   "ap": "",
   "bloc": "aplicacions",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Si un pal mesura $1$ m, i l'ombra que projecta a una determinada hora del dia és d'$1{,}5$ m, quant mesura un edifici que projecta una ombra de $6$ m a la mateixa hora?",
   "opcions": [
    "$6{,}67$ m",
    "$4$ m",
    "$9$ m",
    "$5{,}5$ m"
   ],
   "pistes": [
    "A la mateixa hora, l'altura i l'ombra són proporcionals: cada objecte amb la seva ombra. Pal: $1$ m d'altura i $1{,}5$ m d'ombra. Edifici: altura $x$ i $6$ m d'ombra.",
    "Altura entre ombra dona el mateix per als dos: $\\dfrac{1}{1{,}5}=\\dfrac{x}{6}$. Aïlla $x$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igc3VydCBkZSAkNjoxeyx9NVxcY2RvdDF7LH02NyQsIGFtYiBlbHMgdGVybWVzIG1hbCBhcGFyZWxsYXRzOiByZXZpc2EgbGEgcHJvcG9yY2nDsyAkXFxmcmFjezF9ezF7LH01fT1cXGZyYWN7eH17Nn0kIHBhcyBhIHBhcy4iLCAiIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGQnaW52ZXJ0aXIgbGEgcHJvcG9yY2nDszogcGxhbnRlamEgJFxcZnJhY3sxfXsxeyx9NX09XFxmcmFje3h9ezZ9JCwgYW1iIGwnYWx0dXJhIGRlbCBwYWwgY29ycmVzcG9uZW50IGEgbGEgc2V2YSBwcsOycGlhIG9tYnJhLiIsICJBcXVlc3QgdmFsb3Igc3VydCBkZSBzdW1hciBsYSBkaWZlcsOobmNpYSBkJ29tYnJlcyAoJDYtMXssfTU9NHssfTUkKSBhIGwnYWx0dXJhIGRlbCBwYWw6IGwnYWx0dXJhIGkgbCdvbWJyYSBzw7NuIFBST1BPUkNJT05BTFMsIG5vIHZhcmllbiBwZXIgdW5hIGRpZmVyw6huY2lhIHN1bWFkYS4iXSwgImVyciI6IFsiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiIiwgIkNSRVVBTUVOVF9JTlZFUlRJVCIsICJSQU9OQU1FTlRfQURESVRJVSJdLCAicmVzIjogWyIkXFxkZnJhY3sxfXsxeyx9NX09XFxkZnJhY3t4fXs2fSBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9XFxkZnJhY3sxXFxjZG90Nn17MXssfTV9JCIsICIkeD00JCBtIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 268 117\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles rectangles semblants, cadascun amb un costat vertical i un costat horitzontal, units per una mateixa línia de referència amb la mateixa inclinació.</title><g transform=\"translate(53.6,87.3)\"><line x1=\"0.0\" y1=\"0.0\" x2=\"0.0\" y2=\"-33.3\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-33.3\" x2=\"50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line x1=\"90.0\" y1=\"0.0\" x2=\"90.0\" y2=\"-73.3\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90.0\" y1=\"0.0\" x2=\"200.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90.0\" y1=\"-73.3\" x2=\"200.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"-33.3\" x2=\"-18.5\" y2=\"-33.3\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-18.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-15.0\" y1=\"-33.3\" x2=\"-15.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-11.0\" y1=\"-37.3\" x2=\"-19.0\" y2=\"-29.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-11.0\" y1=\"-4.0\" x2=\"-19.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"-2.5\" x2=\"0.0\" y2=\"-18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"50.0\" y1=\"-2.5\" x2=\"50.0\" y2=\"-18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"-15.0\" x2=\"50.0\" y2=\"-15.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"-11.0\" x2=\"4.0\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"46.0\" y1=\"-11.0\" x2=\"54.0\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"87.5\" y1=\"-73.3\" x2=\"71.5\" y2=\"-73.3\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"87.5\" y1=\"0.0\" x2=\"71.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"75.0\" y1=\"-73.3\" x2=\"75.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"79.0\" y1=\"-77.3\" x2=\"71.0\" y2=\"-69.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"79.0\" y1=\"-4.0\" x2=\"71.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"90.0\" y1=\"-2.5\" x2=\"90.0\" y2=\"-18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"200.0\" y1=\"-2.5\" x2=\"200.0\" y2=\"-18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"90.0\" y1=\"-15.0\" x2=\"200.0\" y2=\"-15.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"86.0\" y1=\"-11.0\" x2=\"94.0\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"196.0\" y1=\"-11.0\" x2=\"204.0\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"-30\" y=\"-13.7\" text-anchor=\"middle\" class=\"fig-etq petita\">1 m</text><text x=\"37\" y=\"-27.1\" text-anchor=\"middle\" class=\"fig-etq petita\">1,5 m</text><text x=\"64\" y=\"-33.7\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text><text x=\"131.8\" y=\"-23.1\" text-anchor=\"middle\" class=\"fig-etq petita\">6 m</text><text x=\"25\" y=\"12.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">pal</text><text x=\"145\" y=\"12.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">edifici</text></g></svg>"
  },
  {
   "id": "165",
   "ex": 165,
   "ap": "",
   "bloc": "aplicacions",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Un jugador de bàsquet d'$1{,}9$ m, situat a $6{,}25$ m de la cistella, llança la pilota per encistellar (cistella a $3{,}05$ m d'altura). Suposant una trajectòria rectilínia des del llançament fins a la cistella, a quina altura està la pilota quan va per la meitat del recorregut?",
   "opcions": [
    "$1{,}525$ m",
    "$4{,}95$ m",
    "$1{,}575$ m",
    "$2{,}475$ m"
   ],
   "pistes": [
    "A mig recorregut, la pilota ha pujat la meitat de la diferència total d'altura entre el llançament i la cistella.",
    "Calcula primer la diferència d'altures ($3{,}05-1{,}9$) i suma'n la meitat a l'altura inicial."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igw6lzIGxhIG1laXRhdCBkZSAkM3ssfTA1JCBtOiBubyB0w6kgZW4gY29tcHRlIHF1ZSBsYSBwaWxvdGEgamEgcGFydGVpeCBkJ3VuYSBhbHR1cmEgaW5pY2lhbCBkJyQxeyx9OSQgbSwgbm8gZGUgdGVycmEuIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGRlIHN1bWFyIGxlcyBkdWVzIGFsdHVyZXMgaSBkaXZpZGlyLWxlcyBlbnRyZSAkMiQ6IGNvbSBxdWUgbGEgcGlsb3RhIHB1amEgZGVzIGQnJDF7LH05JCBtLCBjYWwgc3VtYXItaGkgTk9Nw4lTIGxhIG1laXRhdCBkZSBsYSBkaWZlcsOobmNpYSwgbm8gZmVyIGxhIG1pdGphbmEgYXJpdG3DqHRpY2EgZGlyZWN0YSAocXVlIHBlciBhcXVlc3QgY2FzIGRvbmEgZWwgbWF0ZWl4IHJlc3VsdGF0IHBlcsOyIHBlbCBtb3RpdSBlcXVpdm9jYXQ7IGNvbXByb3ZhLWhvIGFtYiBsYSBkaWZlcsOobmNpYSBkJ2FsdHVyZXMpLiIsICJBcXVlc3QgdmFsb3Igc3VydCBkZSAkXFxmcmFjezN7LH0wNX17Mn0tXFxmcmFjezF7LH05fXsyfSQ6IGNhbCBwYXJ0aXIgZGUgbCdhbHR1cmEgaW5pY2lhbCAoJDF7LH05JCBtKSBpIHN1bWFyLWhpIGxhIE1FSVRBVCBkZSBsYSBkaWZlcsOobmNpYSBkJ2FsdHVyZXMsIG5vIGNhbGN1bGFyIGxhIG1laXRhdCBkZSBjYWRhIGFsdHVyYSBwZXIgc2VwYXJhdC4iLCAiIl0sICJlcnIiOiBbIlBST0dSRVNTSU9fSU5WRU5UQURBIiwgIlNVTUFfRU5fTExPQ19SRVNUQSIsICJBUklUTUVUSUNBX1BBU19JTlRFUk1FREkiLCAiIl0sICJyZXMiOiBbIkRpZmVyw6huY2lhIGQnYWx0dXJhOiAkM3ssfTA1LTF7LH05PTF7LH0xNSQgbSIsICIkeD0xeyx9OStcXGRmcmFjezF7LH0xNX17Mn09MXssfTkrMHssfTU3NSQiLCAiJHg9MnssfTQ3NSQgbSJdfQ=="
  },
  {
   "id": "166",
   "ex": 166,
   "ap": "",
   "bloc": "aplicacions",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "L'Anna està situada a $5$ m de la vora d'un riu i veu reflectida una muntanya a l'aigua. Si l'Anna mesura $1{,}70$ m i el riu està a $3$ km de la muntanya, quina altura té la muntanya?",
   "opcions": [
    "$8{,}82$ m",
    "$5\\,100$ m",
    "$1{,}02$ m",
    "$1\\,020$ m"
   ],
   "pistes": [
    "Converteix els $3$ km a metres: $3\\,000$ m.",
    "L'altura de l'Anna i la seva distància a la vora són proporcionals a l'altura de la muntanya i la seva distància a la vora: $\\dfrac{1{,}70}{5}=\\dfrac{x}{3\\,000}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igc3VydCBkJ2ludmVydGlyIGxhIHByb3BvcmNpw7M6IHBsYW50ZWphICRcXGZyYWN7MXssfTcwfXs1fT1cXGZyYWN7eH17M1xcLDAwMH0kLCBhbWIgbCdhbHR1cmEgZGUgbCdBbm5hIGNvcnJlc3BvbmVudCBhIGxhIHNldmEgcHLDsnBpYSBkaXN0w6BuY2lhIGEgbGEgdm9yYS4iLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZGUgJDF7LH03MFxcY2RvdDNcXCwwMDAkIHNlbnNlIGRpdmlkaXIgcGVyICQ1JDogJHg9XFxmcmFjezF7LH03MFxcY2RvdDNcXCwwMDB9ezV9JCwgbm8gbm9tw6lzIGVsIG51bWVyYWRvci4iLCAiQXF1ZXN0IHZhbG9yIGVzdMOgIGVuIG1ldHJlcyBwZXLDsiBsYSB4aWZyYSBjb3JyZXNwb24gYSBxdWlsw7JtZXRyZXM6ICQxXFwsMDIwJCBtIGVxdWl2YWwgYSAkMXssfTAyJCBrbSwgbm8gYSAkMXssfTAyJCBtOyByZXZpc2EgbGEgY29udmVyc2nDsyBkZSAkMyQga20gYSBtZXRyZXMgYWJhbnMgZGUgZGl2aWRpci4iLCAiIl0sICJlcnIiOiBbIkNSRVVBTUVOVF9JTlZFUlRJVCIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIlBST0RVQ1RFX01BTCIsICIiXSwgInJlcyI6IFsiJDNcXHRleHR7IGttfT0zXFwsMDAwJCBtIiwgIiRcXGRmcmFjezF7LH03MH17NX09XFxkZnJhY3t4fXszXFwsMDAwfSBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9XFxkZnJhY3sxeyx9NzBcXGNkb3QzXFwsMDAwfXs1fSQiLCAiJHg9MVxcLDAyMCQgbSJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 280 81\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles rectangles semblants, cadascun amb un costat vertical i un costat horitzontal, units per una mateixa línia de referència amb la mateixa inclinació.</title><g transform=\"translate(65.0,51.4)\"><line x1=\"0.0\" y1=\"0.0\" x2=\"0.0\" y2=\"-17.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-17.0\" x2=\"50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line x1=\"90.0\" y1=\"0.0\" x2=\"90.0\" y2=\"-37.4\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90.0\" y1=\"0.0\" x2=\"200.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90.0\" y1=\"-37.4\" x2=\"200.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"-17.0\" x2=\"-18.5\" y2=\"-17.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-18.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-15.0\" y1=\"-17.0\" x2=\"-15.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-11.0\" y1=\"-21.0\" x2=\"-19.0\" y2=\"-13.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-11.0\" y1=\"-4.0\" x2=\"-19.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"-2.5\" x2=\"0.0\" y2=\"-18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"50.0\" y1=\"-2.5\" x2=\"50.0\" y2=\"-18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"-15.0\" x2=\"50.0\" y2=\"-15.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"-11.0\" x2=\"4.0\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"46.0\" y1=\"-11.0\" x2=\"54.0\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"87.5\" y1=\"-37.4\" x2=\"71.5\" y2=\"-37.4\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"87.5\" y1=\"0.0\" x2=\"71.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"75.0\" y1=\"-37.4\" x2=\"75.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"79.0\" y1=\"-41.4\" x2=\"71.0\" y2=\"-33.4\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"79.0\" y1=\"-4.0\" x2=\"71.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"90.0\" y1=\"-2.5\" x2=\"90.0\" y2=\"-18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"200.0\" y1=\"-2.5\" x2=\"200.0\" y2=\"-18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"90.0\" y1=\"-15.0\" x2=\"200.0\" y2=\"-15.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"86.0\" y1=\"-11.0\" x2=\"94.0\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"196.0\" y1=\"-11.0\" x2=\"204.0\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"-35\" y=\"-5.6\" text-anchor=\"middle\" class=\"fig-etq petita\">1,7 m</text><text x=\"25\" y=\"-23.1\" text-anchor=\"middle\" class=\"fig-etq petita\">5 m</text><text x=\"64\" y=\"-15.8\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text><text x=\"171.4\" y=\"-23.1\" text-anchor=\"middle\" class=\"fig-etq petita\">3000 m</text><text x=\"25\" y=\"12.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">Anna</text><text x=\"145\" y=\"12.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">muntanya</text></g></svg>"
  },
  {
   "id": "167",
   "ex": 167,
   "ap": "",
   "bloc": "aplicacions",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Mesurem l'ombra d'un edifici en dos moments del dia, amb angles d'elevació del sol de $60^\\circ$ i $30^\\circ$ respecte al terra. Si la distància entre els extrems de les dues ombres és de $6{,}67$ m, calcula l'altura de l'edifici.",
   "opcions": [
    "$5{,}78$ m (aproximadament)",
    "$3{,}85$ m",
    "$13{,}34$ m",
    "$11{,}55$ m"
   ],
   "pistes": [
    "L'ombra amb el sol a $60^\\circ$ val $\\frac{h}{\\tan60^\\circ}$ i, amb el sol a $30^\\circ$ (més baix, ombra més llarga), val $\\frac{h}{\\tan30^\\circ}$.",
    "La diferència entre totes dues ombres és $6{,}67$ m: $\\frac{h}{\\tan30^\\circ}-\\frac{h}{\\tan60^\\circ}=6{,}67$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZGUgY29uc2lkZXJhciBub23DqXMgbCdvbWJyYSBhbWIgYW5nbGUgZGUgJDYwXlxcY2lyYyQgY29tIHNpIGZvcyB0b3RhIGxhIGRpZmVyw6huY2lhOiBjYWwgcmVzdGFyIGxlcyBEVUVTIG9tYnJlcyAoJFxcZnJhY3tofXtcXHRhbjMwXlxcY2lyY30tXFxmcmFje2h9e1xcdGFuNjBeXFxjaXJjfSQpLCBubyBmZXItbmUgc2VydmlyIG5vbcOpcyB1bmEuIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGRlICQ2eyx9NjdcXGNkb3QyJDogY29tcHJvdmEgZWwgcGxhbnRlamFtZW50IGNvbXBsZXQgYW1iIGxlcyB0YW5nZW50cyBkZWxzIGRvcyBhbmdsZXMgZCdlbGV2YWNpw7MsIG5vIHVuYSBzaW1wbGUgcmVsYWNpw7MgZGlyZWN0YSBhbWIgbGEgZGlzdMOgbmNpYSBlbnRyZSBvbWJyZXMuIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGRlICQ2eyx9NjdcXGNkb3RcXGxlZnQoXFx0YW42MF5cXGNpcmMtXFx0YW4zMF5cXGNpcmNcXHJpZ2h0KSQ6IGxhIGRpZmVyw6huY2lhIGQnb21icmVzIGVzIHBsYW50ZWphIGFtYiBlbHMgSU5WRVJTT1MgZGUgbGVzIHRhbmdlbnRzICgkXFxmcmFjezF9e1xcdGFuMzBeXFxjaXJjfS1cXGZyYWN7MX17XFx0YW42MF5cXGNpcmN9JCksIG5vIGFtYiBsZXMgdGFuZ2VudHMgZGlyZWN0YW1lbnQuIl0sICJlcnIiOiBbIiIsICJDQVRFVF9ISVBPVEVOVVNBX0NPTkZPU09TIiwgIlBST0RVQ1RFX01BTCIsICJQUk9EVUNURV9NQUwiXSwgInJlcyI6IFsiJGhcXGxlZnQoXFxkZnJhY3sxfXtcXHRhbjMwXlxcY2lyY30tXFxkZnJhY3sxfXtcXHRhbjYwXlxcY2lyY31cXHJpZ2h0KT02eyx9NjckIiwgIiRoXFwsKDF7LH03MzIxLTB7LH01Nzc0KT02eyx9NjcgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyBoXFxjZG90MXssfTE1NDc9NnssfTY3JCIsICIkaFxcYXBwcm94NXssfTc4JCBtIl19"
  },
  {
   "id": "168",
   "ex": 168,
   "ap": "",
   "bloc": "aplicacions",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "En Pere és a $2$ m d'un precipici i veu alineat un poble amb la vora del precipici. Els seus ulls són a $1{,}6$ m d'altura i el precipici té $450$ m de profunditat. A quina distància horitzontal està el poble del precipici?",
   "opcions": [
    "$562{,}5$ m",
    "$1{,}6$ m",
    "$281{,}25$ m",
    "$720$ m"
   ],
   "pistes": [
    "Hi ha dos triangles semblants amb el vèrtex a la vora del precipici. El petit: l'altura dels ulls ($1{,}6$ m) i la distància d'en Pere a la vora ($2$ m). El gran: la profunditat ($450$ m) i la distància de la vora al poble ($x$).",
    "Vertical amb vertical i horitzontal amb horitzontal: $\\dfrac{1{,}6}{2}=\\dfrac{450}{x}$. Aïlla $x$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJDF7LH02JCBtIMOpcyBsJ2FsdHVyYSBkZWxzIHVsbHMgZCdlbiBQZXJlLCB1bmEgZGFkYSBkZSBsJ2VudW5jaWF0LiBMYSBkaXN0w6BuY2lhIGFsIHBvYmxlIGhhIGRlIHNlciBtb2x0IG3DqXMgZ3JhbjogZWwgdHJpYW5nbGUgZ3JhbiBmYSAkNDUwJCBtIGRlIGZvbmTDoHJpYS4iLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZGUgJFxcZnJhY3s0NTB9ezF7LH02fSQsIHNlbnNlIG11bHRpcGxpY2FyIHBlbHMgJDIkIG06IHJldmlzYSBsYSBwcm9wb3JjacOzICRcXGZyYWN7MXssfTZ9ezJ9PVxcZnJhY3s0NTB9e3h9JCBwYXMgYSBwYXMuIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGRlICQ0NTBcXGNkb3Qxeyx9NiQ6IGhhcyBtdWx0aXBsaWNhdCBlbHMgZG9zIGNvc3RhdHMgdmVydGljYWxzLiBDYWwgJHg9XFxmcmFjezJcXGNkb3Q0NTB9ezF7LH02fSQuIl0sICJlcnIiOiBbIiIsICJDUkVVQU1FTlRfSU5WRVJUSVQiLCAiQ1JFVUFNRU5UX0lOVkVSVElUIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iXSwgInJlcyI6IFsiJFxcZGZyYWN7MXssfTZ9ezJ9PVxcZGZyYWN7NDUwfXt4fSBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9XFxkZnJhY3syXFxjZG90NDUwfXsxeyx9Nn09XFxkZnJhY3s5MDB9ezF7LH02fSQiLCAiJHg9NTYyeyx9NSQgbSJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 280 132\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles rectangles semblants, cadascun amb un costat vertical i un costat horitzontal, units per una mateixa línia de referència amb la mateixa inclinació.</title><g transform=\"translate(65.0,102.0)\"><line x1=\"0.0\" y1=\"0.0\" x2=\"0.0\" y2=\"-40.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-40.0\" x2=\"50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line x1=\"90.0\" y1=\"0.0\" x2=\"90.0\" y2=\"-88.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90.0\" y1=\"0.0\" x2=\"200.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90.0\" y1=\"-88.0\" x2=\"200.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"-40.0\" x2=\"-18.5\" y2=\"-40.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-18.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-15.0\" y1=\"-40.0\" x2=\"-15.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-11.0\" y1=\"-44.0\" x2=\"-19.0\" y2=\"-36.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-11.0\" y1=\"-4.0\" x2=\"-19.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"-2.5\" x2=\"0.0\" y2=\"-18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"50.0\" y1=\"-2.5\" x2=\"50.0\" y2=\"-18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"-15.0\" x2=\"50.0\" y2=\"-15.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"-11.0\" x2=\"4.0\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"46.0\" y1=\"-11.0\" x2=\"54.0\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"87.5\" y1=\"-88.0\" x2=\"71.5\" y2=\"-88.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"87.5\" y1=\"0.0\" x2=\"71.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"75.0\" y1=\"-88.0\" x2=\"75.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"79.0\" y1=\"-92.0\" x2=\"71.0\" y2=\"-84.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"79.0\" y1=\"-4.0\" x2=\"71.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"90.0\" y1=\"-2.5\" x2=\"90.0\" y2=\"-18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"200.0\" y1=\"-2.5\" x2=\"200.0\" y2=\"-18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"90.0\" y1=\"-15.0\" x2=\"200.0\" y2=\"-15.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"86.0\" y1=\"-11.0\" x2=\"94.0\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"196.0\" y1=\"-11.0\" x2=\"204.0\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"-35\" y=\"-17.1\" text-anchor=\"middle\" class=\"fig-etq petita\">1,6 m</text><text x=\"37\" y=\"-27.1\" text-anchor=\"middle\" class=\"fig-etq petita\">2 m</text><text x=\"55\" y=\"-41.1\" text-anchor=\"middle\" class=\"fig-etq petita\">450 m</text><text x=\"145\" y=\"-23.1\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text><text x=\"25\" y=\"12.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">Pere</text><text x=\"145\" y=\"12.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">poble</text></g></svg>"
  },
  {
   "id": "169",
   "ex": 169,
   "ap": "",
   "bloc": "aplicacions",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Un home que té una alçada d'$1{,}75$ m veu reflectit un edifici de $52{,}5$ m sobre un bassal d'aigua que hi ha a $4$ m d'ell. A quina distància del bassal es troba l'edifici?",
   "opcions": [
    "$30$ m",
    "$1{,}75$ m",
    "$120$ m",
    "$210$ m"
   ],
   "pistes": [
    "El bassal fa de mirall: hi ha dos triangles semblants amb el vèrtex al bassal. El petit: l'alçada de l'home ($1{,}75$ m) i la seva distància al bassal ($4$ m). El gran: l'alçada de l'edifici ($52{,}5$ m) i la seva distància al bassal ($x$).",
    "Alçada entre distància dona el mateix als dos triangles: $\\dfrac{1{,}75}{4}=\\dfrac{52{,}5}{x}$. Aïlla $x$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igc3VydCBkZSAkNTJ7LH01OjF7LH03NSQgc2Vuc2UgbXVsdGlwbGljYXIgcGVscyAkNCQgbTogcmV2aXNhIGxhIHByb3BvcmNpw7MgJFxcZnJhY3sxeyx9NzV9ezR9PVxcZnJhY3s1MnssfTV9e3h9JCBwYXMgYSBwYXMuIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGQnaW52ZXJ0aXIgbGEgcHJvcG9yY2nDszogcGxhbnRlamEgJFxcZnJhY3sxeyx9NzV9ezR9PVxcZnJhY3s1MnssfTV9e3h9JCwgYW1iIGwnYWzDp2FkYSBkZSBsJ2hvbWUgY29ycmVzcG9uZW50IGEgbGEgc2V2YSBwcsOycGlhIGRpc3TDoG5jaWEgYWwgYmFzc2FsLiIsICIiLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZGUgJDRcXGNkb3Q1MnssfTUkIHNlbnNlIGRpdmlkaXIgcGVyICQxeyx9NzUkOiAkeD1cXGZyYWN7NFxcY2RvdDUyeyx9NX17MXssfTc1fSQsIG5vIG5vbcOpcyBlbCBudW1lcmFkb3IuIl0sICJlcnIiOiBbIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIkNSRVVBTUVOVF9JTlZFUlRJVCIsICIiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyJdLCAicmVzIjogWyIkXFxkZnJhY3sxeyx9NzV9ezR9PVxcZGZyYWN7NTJ7LH01fXt4fSBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9XFxkZnJhY3s0XFxjZG90NTJ7LH01fXsxeyx9NzV9JCIsICIkeD0xMjAkIG0iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 289 92\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles rectangles semblants, cadascun amb un costat vertical i un costat horitzontal, units per una mateixa línia de referència amb la mateixa inclinació.</title><g transform=\"translate(74.2,62.1)\"><line x1=\"0.0\" y1=\"0.0\" x2=\"0.0\" y2=\"-21.9\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"0.0\" x2=\"50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.0\" y1=\"-21.9\" x2=\"50.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line x1=\"90.0\" y1=\"0.0\" x2=\"90.0\" y2=\"-48.1\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90.0\" y1=\"0.0\" x2=\"200.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90.0\" y1=\"-48.1\" x2=\"200.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"-21.9\" x2=\"-18.5\" y2=\"-21.9\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-2.5\" y1=\"0.0\" x2=\"-18.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"-15.0\" y1=\"-21.9\" x2=\"-15.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-11.0\" y1=\"-25.9\" x2=\"-19.0\" y2=\"-17.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-11.0\" y1=\"-4.0\" x2=\"-19.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"-2.5\" x2=\"0.0\" y2=\"-18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"50.0\" y1=\"-2.5\" x2=\"50.0\" y2=\"-18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"0.0\" y1=\"-15.0\" x2=\"50.0\" y2=\"-15.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"-4.0\" y1=\"-11.0\" x2=\"4.0\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"46.0\" y1=\"-11.0\" x2=\"54.0\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"87.5\" y1=\"-48.1\" x2=\"71.5\" y2=\"-48.1\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"87.5\" y1=\"0.0\" x2=\"71.5\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"75.0\" y1=\"-48.1\" x2=\"75.0\" y2=\"0.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"79.0\" y1=\"-52.1\" x2=\"71.0\" y2=\"-44.1\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"79.0\" y1=\"-4.0\" x2=\"71.0\" y2=\"4.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"90.0\" y1=\"-2.5\" x2=\"90.0\" y2=\"-18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"200.0\" y1=\"-2.5\" x2=\"200.0\" y2=\"-18.5\" stroke=\"currentColor\" stroke-width=\"0.9\" stroke-opacity=\"0.65\"/><line class=\"fig-cota\" x1=\"90.0\" y1=\"-15.0\" x2=\"200.0\" y2=\"-15.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"86.0\" y1=\"-11.0\" x2=\"94.0\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-cota\" x1=\"196.0\" y1=\"-11.0\" x2=\"204.0\" y2=\"-19.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><text x=\"-41\" y=\"-8\" text-anchor=\"middle\" class=\"fig-etq petita\">1,75 m</text><text x=\"25\" y=\"-23.1\" text-anchor=\"middle\" class=\"fig-etq petita\">4 m</text><line class=\"fig-crida\" x1=\"75.0\" y1=\"-24.1\" x2=\"-0.8\" y2=\"-24.1\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/><text x=\"-23\" y=\"-21.1\" text-anchor=\"middle\" class=\"fig-etq petita\">52,5 m</text><text x=\"171.4\" y=\"-23.1\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text><text x=\"25\" y=\"12.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">home</text><text x=\"145\" y=\"12.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">edifici</text></g></svg>"
  }
 ]
};
