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
   ]
  }
 ],
 "errors": {
  "ARITMETICA_PAS_INTERMEDI": "El plantejament és bo, però hi ha un error de càlcul en un dels passos del mig. Refes l'operació pas a pas i comprova el resultat substituint-lo a l'enunciat original.",
  "ARREL_MAL_APLICADA": "L'arrel no s'ha aplicat on tocava. Aïlla primer la quantitat que va sota l'arrel i fes-la al final, sobre el valor ja aïllat.",
  "CATET_HIPOTENUSA_CONFOSOS": "Has intercanviat un catet amb la hipotenusa. La hipotenusa és sempre el costat més llarg i va sola a un costat de la igualtat.",
  "CREUAMENT_INVERTIT": "Has creuat els termes al revés en aïllar la incògnita.",
  "CRITERI_SEMBLANCA_INSUFICIENT": "Has dit que falten dades, però el criteri que toca ja es pot aplicar amb el que dona l'enunciat: tres costats, o dos costats i l'angle que formen, o dos angles.",
  "DIVISIO_OBLIDADA": "T'has quedat amb la suma sense dividir-la entre el nombre de dades. La variància és una MITJANA de quadrats, no una suma.",
  "DIVISIO_QUOCIENT_RESIDU_CANVIATS": "Has intercanviat el quocient i el residu: el quocient és el polinomi que queda a la fila de baix (llevat de l'últim terme), i el residu és l'últim número, una constant.",
  "ESCALA_INVERTIDA": "Has fet servir l'escala del revés. A l'escala $a:b$, el primer nombre és el DIBUIX i el segon la REALITAT: si és una reducció, la mesura real sempre surt més gran que la del plànol.",
  "ESCALA_NO_APLICADA": "Has donat la mesura tal com surt al plànol (o a la realitat) sense passar-la per l'escala. Les dues mesures només coincideixen si l'escala és $1:1$.",
  "INVERTIDA": "Has invertit la fracció. Simplificar no canvia quin terme és a dalt i quin a baix.",
  "PAS_INTERMEDI_PER_RESPOSTA": "El valor que has triat és correcte, però és un pas intermedi, no el que et demanen. Torna a llegir la pregunta i mira quina magnitud has d'acabar donant: sovint només falta una operació més.",
  "POTENCIA_10": "El denominador d'un decimal exacte és una potència de $10$ amb tants zeros com xifres decimals hi ha. Torna-les a comptar.",
  "PRODUCTE_MAL": "Has multiplicat els dos nombres que et donaven en comptes d'aïllar la incògnita amb els productes creuats.",
  "PRODUCTE_PER_SUMA": "Has sumat on tocava multiplicar (o al revés). Torna a llegir quina operació es fa sobre les dades.",
  "PROGRESSIO_INVENTADA": "El terme s'ha de calcular seguint estrictament la regla que defineix la successió (el terme general o la relació de recurrència), no un patró aproximat o inventat.",
  "RAONAMENT_ADDITIU": "Has passat d'una fracció a l'altra sumant. Dues fraccions són equivalents quan es passa d'una a l'altra MULTIPLICANT els dos termes pel mateix nombre.",
  "RAO_AL_CUB": "Has fet servir $k^3$ on tocava una altra potència. El cub és per als volums; les àrees van amb $k^2$.",
  "RAO_AL_QUADRAT": "Has fet servir $k^2$ on tocava una altra potència. El quadrat és per a les àrees; les longituds van amb $k$ i els volums amb $k^3$.",
  "RAO_NOMES_UN_COSTAT": "Has comprovat la proporció amb un sol parell de costats. La semblança demana que TOTS els costats corresponents guardin la mateixa raó.",
  "RAO_SENSE_QUADRAT": "Has multiplicat per $k$ una àrea o un volum. Només les LONGITUDS van amb $k$: les àrees van amb $k^2$ i els volums amb $k^3$.",
  "RESTA_PER_QUOCIENT": "Has restat les dues quantitats. Un percentatge i una raó surten d'una DIVISIÓ: diuen quantes vegades, no quant més.",
  "SUMA_EN_LLOC_RESTA": "Sumar un nombre negatiu és restar-lo.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau.",
  "UNITATS_NO_CONVERTIDES": "Has barrejat unitats diferents en la mateixa operació. Passa-ho tot a la mateixa unitat abans de calcular res."
 },
 "items": [
  {
   "id": "152a",
   "ex": 152,
   "ap": "a",
   "bloc": "tales",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el valor de $x$ en aquestes figures de rectes paral·leles tallades per dues rectes secants.",
   "enunciat": "Una secant té segments de $2{,}5$ cm i $2$ cm; l'altra, $x$ i $3$ cm (segments corresponents en el mateix ordre).",
   "opcions": [
    "$2{,}4$ cm",
    "$1{,}67$ cm",
    "$7{,}5$ cm",
    "$3{,}75$ cm"
   ],
   "pistes": [
    "Pel teorema de Tales, els segments de cada secant guarden la mateixa proporció: $\\dfrac{2{,}5}{2}=\\dfrac{x}{3}$.",
    "Aïlla $x$ multiplicant en creu."
   ],
   "nota": "Els segments s'aparellen en el mateix ordre a les dues secants: el primer amb el primer i el segon amb el segon, comptant des del vèrtex. La figura de partida no ho deixa del tot clar, i aquesta és la lectura que s'ha pres.",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgbXVudGF0IGxhIHByb3BvcmNpw7MgYW1iIGVscyBzZWdtZW50cyBkZSBjYWRhIHNlY2FudCBpbnRlcmNhbnZpYXRzLiBQbGFudGVqYSAkXFxkZnJhY3syeyx9NX17Mn09XFxkZnJhY3t4fXszfSQsIG5vIGxhIHByb3BvcmNpw7MgaW52ZXJzYS4iLCAiU2VtYmxhIHF1ZSBoYXMgY2FsY3VsYXQgJDI6MnssfTVcXGNkb3QzJCBhbWIgZWxzIHRlcm1lcyBpbnRlcmNhbnZpYXRzOiByZXZpc2EgcXVpbiBzZWdtZW50IGZhIGRlIG51bWVyYWRvciBhIGNhZGEgc2VjYW50LiIsICJBcXVlc3QgdmFsb3Igc3VydCBkZSAkMnssfTVcXGNkb3QzJCBzZW5zZSBkaXZpZGlyIHBlciAkMiQ6ICR4PVxcZGZyYWN7MnssfTVcXGNkb3QzfXsyfSQsIG5vIG5vbcOpcyBlbCBudW1lcmFkb3IuIiwgIiJdLCAiZXJyIjogWyJDUkVVQU1FTlRfSU5WRVJUSVQiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiXSwgInJlcyI6IFsiJFxcZGZyYWN7MnssfTV9ezJ9PVxcZGZyYWN7eH17M30gXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4PVxcZGZyYWN7MnssfTVcXGNkb3QzfXsyfSQiLCAiJHg9M3ssfTc1JCBjbSJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 248 145\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues rectes secants que surten d'un mateix punt O, tallades per un joc de rectes paral·leles, amb els punts x marcats.</title><line x1=\"24.00\" y1=\"67.52\" x2=\"235.53\" y2=\"114.41\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"24.00\" y1=\"67.52\" x2=\"193.22\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"108.61\" y1=\"86.27\" x2=\"91.69\" y2=\"52.51\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"235.53\" y1=\"114.41\" x2=\"193.22\" y2=\"30.00\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><text x=\"18\" y=\"71.5162\" text-anchor=\"end\" class=\"fig-etq\">O</text><text x=\"108.612\" y=\"100.274\" text-anchor=\"middle\" class=\"fig-etq petita\">2,5 cm</text><text x=\"91.6899\" y=\"38.5097\" text-anchor=\"middle\" class=\"fig-etq petita\">2 cm</text><text x=\"235.531\" y=\"128.411\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text><text x=\"193.225\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">3 cm</text></svg>"
  },
  {
   "id": "152b",
   "ex": 152,
   "ap": "b",
   "bloc": "tales",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el valor de $x$ en aquestes figures de rectes paral·leles tallades per dues rectes secants.",
   "enunciat": "Una secant té segments de $2$ cm i $4$ cm; l'altra, $3$ cm i $x$ cm (segments corresponents en el mateix ordre).",
   "opcions": [
    "$1{,}5$ cm",
    "$4$ cm",
    "$6$ cm",
    "$12$ cm"
   ],
   "pistes": [
    "Pel teorema de Tales, els segments de cada secant guarden la mateixa proporció: $\\dfrac{4}{2}=\\dfrac{x}{3}$.",
    "Aïlla $x$ multiplicant en creu."
   ],
   "nota": "Els segments s'aparellen en el mateix ordre a les dues secants: el primer amb el primer i el segon amb el segon, comptant des del vèrtex. La figura de partida no ho deixa del tot clar, i aquesta és la lectura que s'ha pres.",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgaW50ZXJjYW52aWF0IHF1aW4gc2VnbWVudCBjb3JyZXNwb24gYSBxdWluOiBwbGFudGVqYSAkXFxkZnJhY3s0fXsyfT1cXGRmcmFje3h9ezN9JCwgYW1iIGVsIHNlZ21lbnQgTcOJUyBncmFuIGRlIGxhIHByaW1lcmEgc2VjYW50ICgkNCQpIGNvcnJlc3BvbmVudCBhICR4JC4iLCAiQXF1ZXN0IHZhbG9yIG5vIHN1cnQgZGUgbGEgcHJvcG9yY2nDszogY29tcHJvdmEgJHg9XFxkZnJhY3s0XFxjZG90M317Mn0kIHBhcyBhIHBhcyBlbiBsbG9jIGRlIHJlcGV0aXIgdW4gc2VnbWVudCBxdWUgamEgYXBhcmVpeGlhIGEgbCdlbnVuY2lhdC4iLCAiIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGRlICQ0XFxjZG90MyQgc2Vuc2UgZGl2aWRpciBwZXIgJDIkOiAkeD1cXGRmcmFjezRcXGNkb3QzfXsyfSQsIG5vIG5vbcOpcyBlbCBudW1lcmFkb3IuIl0sICJlcnIiOiBbIkNSRVVBTUVOVF9JTlZFUlRJVCIsICJQUk9HUkVTU0lPX0lOVkVOVEFEQSIsICIiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyJdLCAicmVzIjogWyIkXFxkZnJhY3s0fXsyfT1cXGRmcmFje3h9ezN9IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgeD1cXGRmcmFjezRcXGNkb3QzfXsyfSQiLCAiJHg9NiQgY20iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 227 131\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues rectes secants que surten d'un mateix punt O, tallades per un joc de rectes paral·leles, amb els punts x marcats.</title><line x1=\"24.00\" y1=\"72.21\" x2=\"150.92\" y2=\"100.34\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"24.00\" y1=\"72.21\" x2=\"214.38\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"66.31\" y1=\"81.58\" x2=\"87.46\" y2=\"58.14\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"150.92\" y1=\"100.34\" x2=\"214.38\" y2=\"30.00\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><text x=\"18\" y=\"76.2057\" text-anchor=\"end\" class=\"fig-etq\">O</text><text x=\"66.3062\" y=\"95.5848\" text-anchor=\"middle\" class=\"fig-etq petita\">2 cm</text><text x=\"87.4592\" y=\"44.1371\" text-anchor=\"middle\" class=\"fig-etq petita\">3 cm</text><text x=\"150.918\" y=\"114.343\" text-anchor=\"middle\" class=\"fig-etq petita\">4 cm</text><text x=\"214.378\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text></svg>"
  },
  {
   "id": "152c",
   "ex": 152,
   "ap": "c",
   "bloc": "tales",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el valor de $x$ en aquestes figures de rectes paral·leles tallades per dues rectes secants.",
   "enunciat": "Una secant té segments de $8$ cm i $4$ cm; l'altra, $x$ i $6$ cm (segments corresponents en el mateix ordre).",
   "opcions": [
    "$3$ cm",
    "$4{,}5$ cm",
    "$48$ cm",
    "$12$ cm"
   ],
   "pistes": [
    "Pel teorema de Tales, els segments de cada secant guarden la mateixa proporció: $\\dfrac{8}{4}=\\dfrac{x}{6}$.",
    "Aïlla $x$ multiplicant en creu."
   ],
   "nota": "Els segments s'aparellen en el mateix ordre a les dues secants: el primer amb el primer i el segon amb el segon, comptant des del vèrtex. La figura de partida no ho deixa del tot clar, i aquesta és la lectura que s'ha pres.",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgaW50ZXJjYW52aWF0IHF1aW4gc2VnbWVudCBjb3JyZXNwb24gYSBxdWluOiBwbGFudGVqYSAkXFxkZnJhY3s4fXs0fT1cXGRmcmFje3h9ezZ9JCwgbm8gbGEgcHJvcG9yY2nDsyBhbWIgZWxzIHRlcm1lcyBpbnZlcnRpdHMuIiwgIlNlbWJsYSBxdWUgaGFzIGNhbGN1bGF0ICQ2XFxjZG90NDo4JCBhbWIgdW4gYWx0cmUgYXBhcmVsbGFtZW50IGRlIHNlZ21lbnRzOiByZXZpc2EgcXVpbnMgZG9zIHNlZ21lbnRzIHPDs24gY29ycmVzcG9uZW50cyBlbnRyZSBsZXMgZHVlcyBzZWNhbnRzLiIsICJBcXVlc3QgdmFsb3Igc3VydCBkZSAkOFxcY2RvdDYkIHNlbnNlIGRpdmlkaXIgcGVyICQ0JDogJHg9XFxkZnJhY3s4XFxjZG90Nn17NH0kLCBubyBub23DqXMgZWwgbnVtZXJhZG9yLiIsICIiXSwgImVyciI6IFsiQ1JFVUFNRU5UX0lOVkVSVElUIiwgIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiIl0sICJyZXMiOiBbIiRcXGRmcmFjezh9ezR9PVxcZGZyYWN7eH17Nn0gXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4PVxcZGZyYWN7OFxcY2RvdDZ9ezR9JCIsICIkeD0xMiQgY20iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 234 131\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues rectes secants que surten d'un mateix punt O, tallades per un joc de rectes paral·leles, amb els punts x marcats.</title><line x1=\"24.00\" y1=\"72.21\" x2=\"150.92\" y2=\"100.34\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"24.00\" y1=\"72.21\" x2=\"214.38\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"108.61\" y1=\"90.96\" x2=\"150.92\" y2=\"44.07\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line x1=\"150.92\" y1=\"100.34\" x2=\"214.38\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"18\" y=\"76.2057\" text-anchor=\"end\" class=\"fig-etq\">O</text><text x=\"108.612\" y=\"104.964\" text-anchor=\"middle\" class=\"fig-etq petita\">8 cm</text><text x=\"150.918\" y=\"30.0686\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text><text x=\"150.918\" y=\"114.343\" text-anchor=\"middle\" class=\"fig-etq petita\">4 cm</text><text x=\"214.378\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">6 cm</text></svg>"
  },
  {
   "id": "152e",
   "ex": 152,
   "ap": "e",
   "bloc": "tales",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el valor de $x$ en aquestes figures de rectes paral·leles tallades per dues rectes secants.",
   "enunciat": "Una secant té segments de $x$ i $10$ cm; l'altra, $5$ cm i $8$ cm (segments corresponents en el mateix ordre).",
   "opcions": [
    "$16$ cm",
    "$6{,}25$ cm",
    "$50$ cm",
    "$4$ cm"
   ],
   "pistes": [
    "Pel teorema de Tales, els segments de cada secant guarden la mateixa proporció: $\\dfrac{x}{10}=\\dfrac{5}{8}$.",
    "Aïlla $x$ multiplicant en creu."
   ],
   "nota": "Els segments s'aparellen en el mateix ordre a les dues secants: el primer amb el primer i el segon amb el segon, comptant des del vèrtex. La figura de partida no ho deixa del tot clar, i aquesta és la lectura que s'ha pres.",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgaW50ZXJjYW52aWF0IHF1aW5hIGZyYWNjacOzIMOpcyBxdWluYTogcGxhbnRlamEgJFxcZGZyYWN7eH17MTB9PVxcZGZyYWN7NX17OH0kLCBhbWIgJHgkIGNvcnJlc3BvbmVudCBhbCBzZWdtZW50IGRlICQ1JCBjbSwgbm8gYWwgZGUgJDgkIGNtLiIsICIiLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZGUgJDEwXFxjZG90NSQgc2Vuc2UgZGl2aWRpciBwZXIgJDgkOiAkeD1cXGRmcmFjezEwXFxjZG90NX17OH0kLCBubyBub23DqXMgZWwgbnVtZXJhZG9yLiIsICJBcXVlc3QgdmFsb3Igc3VydCBkZSAkXFxkZnJhY3s1XFxjZG90OH17MTB9JDogcmV2aXNhIHF1aW4gc2VnbWVudCDDqXMgZWwgcXVlIG11bHRpcGxpY2EgcGVyICQxMCQgaSBxdWluIGhpIGRpdmlkZWl4LiJdLCAiZXJyIjogWyJDUkVVQU1FTlRfSU5WRVJUSVQiLCAiIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiUFJPRFVDVEVfTUFMIl0sICJyZXMiOiBbIiRcXGRmcmFje3h9ezEwfT1cXGRmcmFjezV9ezh9IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgeD1cXGRmcmFjezEwXFxjZG90NX17OH0kIiwgIiR4PTZ7LH0yNSQgY20iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 253 143\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues rectes secants que surten d'un mateix punt O, tallades per un joc de rectes paral·leles, amb els punts x marcats.</title><line x1=\"24.00\" y1=\"66.58\" x2=\"230.24\" y2=\"112.30\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"24.00\" y1=\"66.58\" x2=\"188.99\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"103.32\" y1=\"84.16\" x2=\"87.46\" y2=\"52.51\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line x1=\"230.24\" y1=\"112.30\" x2=\"188.99\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"18\" y=\"70.5783\" text-anchor=\"end\" class=\"fig-etq\">O</text><text x=\"103.324\" y=\"98.164\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text><text x=\"87.4592\" y=\"38.5097\" text-anchor=\"middle\" class=\"fig-etq petita\">5 cm</text><text x=\"230.243\" y=\"126.301\" text-anchor=\"middle\" class=\"fig-etq petita\">10 cm</text><text x=\"188.994\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">8 cm</text></svg>"
  },
  {
   "id": "152f",
   "ex": 152,
   "ap": "f",
   "bloc": "tales",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el valor de $x$ en aquestes figures de rectes paral·leles tallades per dues rectes secants.",
   "enunciat": "Una secant té segments de $4{,}8$ cm i $2$ cm; l'altra, $x$ i $3$ cm (segments corresponents en el mateix ordre).",
   "opcions": [
    "$0{,}83$ cm",
    "$14{,}4$ cm",
    "$7{,}2$ cm",
    "$1{,}25$ cm"
   ],
   "pistes": [
    "Pel teorema de Tales, els segments de cada secant guarden la mateixa proporció: $\\dfrac{4{,}8}{2}=\\dfrac{x}{3}$.",
    "Aïlla $x$ multiplicant en creu."
   ],
   "nota": "Els segments s'aparellen en el mateix ordre a les dues secants: el primer amb el primer i el segon amb el segon, comptant des del vèrtex. La figura de partida no ho deixa del tot clar, i aquesta és la lectura que s'ha pres.",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJTZW1ibGEgcXVlIGhhcyBkaXZpZGl0ICQyOjR7LH04XFxjZG90MyQgYW1iIGVscyB0ZXJtZXMgaW50ZXJjYW52aWF0czogcmV2aXNhIHF1aW4gc2VnbWVudCBmYSBkZSBudW1lcmFkb3IgYSBjYWRhIHNlY2FudC4iLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZGUgJDR7LH04XFxjZG90MyQgc2Vuc2UgZGl2aWRpciBwZXIgJDIkOiAkeD1cXGRmcmFjezR7LH04XFxjZG90M317Mn0kLCBubyBub23DqXMgZWwgbnVtZXJhZG9yLiIsICIiLCAiSGFzIG11bnRhdCBsYSBwcm9wb3JjacOzIGFtYiBlbHMgc2VnbWVudHMgZGUgY2FkYSBzZWNhbnQgaW50ZXJjYW52aWF0cy4gUGxhbnRlamEgJFxcZGZyYWN7NHssfTh9ezJ9PVxcZGZyYWN7eH17M30kLCBubyBsYSBwcm9wb3JjacOzIGludmVyc2EuIl0sICJlcnIiOiBbIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiIiwgIkNSRVVBTUVOVF9JTlZFUlRJVCJdLCAicmVzIjogWyIkXFxkZnJhY3s0eyx9OH17Mn09XFxkZnJhY3t4fXszfSBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9XFxkZnJhY3s0eyx9OFxcY2RvdDN9ezJ9JCIsICIkeD03eyx9MiQgY20iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 224 127\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues rectes secants que surten d'un mateix punt O, tallades per un joc de rectes paral·leles, amb els punts x marcats.</title><line x1=\"24.00\" y1=\"69.86\" x2=\"143.87\" y2=\"96.43\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"24.00\" y1=\"69.86\" x2=\"203.80\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"108.61\" y1=\"88.62\" x2=\"150.92\" y2=\"41.72\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><line x1=\"143.87\" y1=\"96.43\" x2=\"203.80\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"18\" y=\"73.861\" text-anchor=\"end\" class=\"fig-etq\">O</text><text x=\"108.612\" y=\"102.619\" text-anchor=\"middle\" class=\"fig-etq petita\">4,8 cm</text><text x=\"150.918\" y=\"27.7238\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text><text x=\"143.867\" y=\"110.435\" text-anchor=\"middle\" class=\"fig-etq petita\">2 cm</text><text x=\"203.801\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">3 cm</text></svg>"
  },
  {
   "id": "153a",
   "ex": 153,
   "ap": "a",
   "bloc": "tales",
   "tipus": "A",
   "dif": 2,
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
   "figura": "<svg class=\"figura\" viewBox=\"0 0 178 110\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues rectes secants que surten d'un mateix punt O, tallades per un joc de rectes paral·leles, amb els punts BC marcats.</title><line x1=\"24.00\" y1=\"58.14\" x2=\"121.63\" y2=\"79.78\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"24.00\" y1=\"58.14\" x2=\"150.92\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"45.70\" y1=\"62.95\" x2=\"52.20\" y2=\"51.88\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"121.63\" y1=\"79.78\" x2=\"150.92\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"18\" y=\"62.1371\" text-anchor=\"end\" class=\"fig-etq\">O</text><text x=\"45.6955\" y=\"76.9469\" text-anchor=\"middle\" class=\"fig-etq petita\">2 cm</text><text x=\"52.2041\" y=\"37.8844\" text-anchor=\"middle\" class=\"fig-etq petita\">2,6 cm</text><text x=\"78.2387\" y=\"84.1616\" text-anchor=\"middle\" class=\"fig-etq petita\">5 cm</text><text x=\"121.63\" y=\"93.7811\" text-anchor=\"middle\" class=\"fig-etq petita\">9 cm</text><text x=\"150.918\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">11,7 cm</text></svg>"
  },
  {
   "id": "153b",
   "ex": 153,
   "ap": "b",
   "bloc": "tales",
   "tipus": "A",
   "dif": 2,
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
   "figura": "<svg class=\"figura\" viewBox=\"0 0 173 103\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues rectes secants que surten d'un mateix punt O, tallades per un joc de rectes paral·leles, amb els punts AB marcats.</title><line x1=\"24.00\" y1=\"58.14\" x2=\"24.00\" y2=\"58.14\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"24.00\" y1=\"58.14\" x2=\"150.92\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"45.15\" y1=\"62.83\" x2=\"52.20\" y2=\"51.88\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"87.46\" y1=\"72.21\" x2=\"108.61\" y2=\"39.38\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"18\" y=\"62.1371\" text-anchor=\"end\" class=\"fig-etq\">O</text><text x=\"45.1531\" y=\"76.8267\" text-anchor=\"middle\" class=\"fig-etq petita\">3 cm</text><text x=\"52.2041\" y=\"37.8844\" text-anchor=\"middle\" class=\"fig-etq petita\">4 cm</text><text x=\"87.4592\" y=\"86.2057\" text-anchor=\"middle\" class=\"fig-etq petita\">9 cm</text><text x=\"108.612\" y=\"25.379\" text-anchor=\"middle\" class=\"fig-etq petita\">12 cm</text><text x=\"150.918\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">18 cm</text></svg>"
  },
  {
   "id": "153c",
   "ex": 153,
   "ap": "c",
   "bloc": "tales",
   "tipus": "A",
   "dif": 2,
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
   "figura": "<svg class=\"figura\" viewBox=\"0 0 173 106\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues rectes secants que surten d'un mateix punt O, tallades per un joc de rectes paral·leles, amb els punts AB marcats.</title><line x1=\"24.00\" y1=\"58.14\" x2=\"103.32\" y2=\"75.72\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"24.00\" y1=\"58.14\" x2=\"150.92\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"76.88\" y1=\"69.86\" x2=\"108.61\" y2=\"39.38\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"103.32\" y1=\"75.72\" x2=\"150.92\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"18\" y=\"62.1371\" text-anchor=\"end\" class=\"fig-etq\">O</text><text x=\"41.6276\" y=\"76.0451\" text-anchor=\"middle\" class=\"fig-etq petita\">5 cm</text><text x=\"76.8827\" y=\"83.861\" text-anchor=\"middle\" class=\"fig-etq petita\">15 cm</text><text x=\"108.612\" y=\"25.379\" text-anchor=\"middle\" class=\"fig-etq petita\">24 cm</text><text x=\"103.324\" y=\"89.7229\" text-anchor=\"middle\" class=\"fig-etq petita\">22,5 cm</text><text x=\"150.918\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">36 cm</text></svg>"
  },
  {
   "id": "154a",
   "ex": 154,
   "ap": "a",
   "bloc": "semblanca",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la longitud dels costats desconeguts en aquests parells de triangles semblants.",
   "enunciat": "Triangle petit de costats $3$ cm i $5$ cm; triangle gran de costats $4$ cm (correspon al de $3$ cm) i $x$ (correspon al de $5$ cm).",
   "opcions": [
    "$6$ cm",
    "$20$ cm",
    "$6{,}67$ cm (aproximadament)",
    "$3{,}75$ cm"
   ],
   "pistes": [
    "La raó de semblança és $k=\\dfrac{4}{3}$ (el costat de $4$ cm correspon al de $3$ cm).",
    "Aplica aquesta raó al costat de $5$ cm: $x=5\\cdot k$."
   ],
   "nota": "La correspondència entre costats del triangle petit i el gran s'ha establert seguint la indicació explícita del propi enunciat, que ja diu quins costats es corresponen entre si.",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igbm8gc3VydCBkZSBsYSBwcm9wb3JjacOzIGNvcnJlY3RhOiBjYWxjdWxhICQ1XFxjZG90XFxmcmFjezR9ezN9JCBwYXMgYSBwYXMgZW4gbGxvYyBkJ2Fycm9kb25pciAkXFxmcmFjezIwfXszfSQgYSB1biBub21icmUgZW50ZXIuIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGRlICQ1XFxjZG90NCQgc2Vuc2UgZGl2aWRpciBwZXIgJDMkOiBsYSByYcOzIGRlIHNlbWJsYW7Dp2Egw6lzICRcXGZyYWN7NH17M30kLCBpIGNhbCBtdWx0aXBsaWNhci1sYSBwZWwgY29zdGF0LCBubyBub23DqXMgbXVsdGlwbGljYXIgcGVsIG51bWVyYWRvci4iLCAiIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGQnYXBsaWNhciBsYSByYcOzIGludmVydGlkYSAkaz1cXGZyYWN7M317NH0kIGFsIGNvc3RhdCBkZSAkNSQgY207IGxhIHJhw7Mgw6lzICRrPVxcZnJhY3s0fXszfSQgKGRlbCBjb3N0YXQgZ3JhbiBjb25lZ3V0IGFsIHBldGl0IGNvbmVndXQpLCBubyBsYSBpbnZlcnNhLiJdLCAiZXJyIjogWyJQUk9HUkVTU0lPX0lOVkVOVEFEQSIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIiIsICJDUkVVQU1FTlRfSU5WRVJUSVQiXSwgInJlcyI6IFsiJGs9XFxkZnJhY3s0fXszfSQiLCAiJHg9NVxcY2RvdFxcZGZyYWN7NH17M309XFxkZnJhY3syMH17M31cXGFwcHJveDZ7LH02NyQgY20iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 297 120\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles amb els costats corresponents marcats.</title><g transform=\"translate(31.51,82.20)\"><polygon points=\"0.00,0.00 90.00,0.00 37.80,-70.20\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"163.00,0.00 253.00,0.00 200.80,-70.20\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"45\" y=\"22\" text-anchor=\"middle\" class=\"fig-etq petita\">3 cm</text><text x=\"1.29058\" y=\"-40.582\" text-anchor=\"end\" class=\"fig-etq petita\">5 cm</text><text x=\"208\" y=\"22\" text-anchor=\"middle\" class=\"fig-etq petita\">4 cm</text><text x=\"164.291\" y=\"-40.582\" text-anchor=\"end\" class=\"fig-etq petita\">x</text></g></svg>"
  },
  {
   "id": "154b",
   "ex": 154,
   "ap": "b",
   "bloc": "semblanca",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la longitud dels costats desconeguts en aquests parells de triangles semblants.",
   "enunciat": "Triangle gran de costats $8$ cm, $10$ cm i $7$ cm; triangle petit de costat $6$ cm (correspon al de $8$ cm), amb els altres dos costats desconeguts. Quant valen?",
   "opcions": [
    "$8$ cm i $5$ cm",
    "$7{,}5$ cm i $5{,}25$ cm",
    "$60$ cm i $42$ cm",
    "$13{,}33$ cm i $9{,}33$ cm"
   ],
   "pistes": [
    "La raó de semblança és $k=\\dfrac{6}{8}=0{,}75$ (el costat de $6$ cm correspon al de $8$ cm).",
    "Aplica aquesta raó als costats de $10$ cm i $7$ cm."
   ],
   "nota": "La correspondència entre costats del triangle petit i el gran s'ha establert seguint la indicació explícita del propi enunciat, que ja diu quins costats es corresponen entre si.",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3RzIHZhbG9ycyBubyBzdXJ0ZW4gZGUgbGEgcHJvcG9yY2nDszogY2FsY3VsYSAkMTBcXGNkb3Qweyx9NzUkIGkgJDdcXGNkb3Qweyx9NzUkIHBhcyBhIHBhcyBlbiBsbG9jIGQnYXJyb2RvbmlyIGEgbm9tYnJlcyBlbnRlcnMgcHJvcGVycy4iLCAiIiwgIkFxdWVzdHMgdmFsb3JzIHN1cnRlbiBkZSAkMTBcXGNkb3Q2JCBpICQ3XFxjZG90NiQgc2Vuc2UgZGl2aWRpciBwZXIgJDgkOiBsYSByYcOzIGRlIHNlbWJsYW7Dp2Egw6lzICRcXGZyYWN7Nn17OH0kLCBubyBub23DqXMgZWwgJDYkLiIsICJBcXVlc3QgdmFsb3Igc3VydCBkJ2FwbGljYXIgbGEgcmHDsyBpbnZlcnRpZGEgJGs9XFxmcmFjezh9ezZ9JCBhbHMgY29zdGF0cyBkZSAkMTAkIGkgJDckIGNtOyBsYSByYcOzIMOpcyAkaz1cXGZyYWN7Nn17OH09MHssfTc1JCAoZGVsIGNvc3RhdCBwZXRpdCBjb25lZ3V0IGFsIGdyYW4gY29uZWd1dCksIG5vIGxhIGludmVyc2EuIl0sICJlcnIiOiBbIlBST0dSRVNTSU9fSU5WRU5UQURBIiwgIiIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIkNSRVVBTUVOVF9JTlZFUlRJVCJdLCAicmVzIjogWyIkaz1cXGRmcmFjezZ9ezh9PTB7LH03NSQiLCAiJDEwXFxjZG90MHssfTc1PTd7LH01JCBjbSRcXHFxdWFkIDdcXGNkb3Qweyx9NzU9NXssfTI1JCBjbSJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 252 124\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles amb els costats corresponents marcats.</title><g transform=\"translate(12.80,86.65)\"><polygon points=\"0.00,0.00 90.00,0.00 78.05,-74.65\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"159.22,0.00 224.02,0.00 186.44,-50.54\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"45\" y=\"22\" text-anchor=\"middle\" class=\"fig-etq petita\">8 cm</text><text x=\"25.2001\" y=\"-47.778\" text-anchor=\"end\" class=\"fig-etq petita\">10 cm</text><text x=\"103.772\" y=\"-36.4865\" text-anchor=\"start\" class=\"fig-etq petita\">7 cm</text><text x=\"191.62\" y=\"22\" text-anchor=\"middle\" class=\"fig-etq petita\">6 cm</text><text x=\"155.219\" y=\"-30.754\" text-anchor=\"end\" class=\"fig-etq petita\">x</text><text x=\"221.277\" y=\"-33.2061\" text-anchor=\"start\" class=\"fig-etq petita\">x</text></g></svg>"
  },
  {
   "id": "154c",
   "ex": 154,
   "ap": "c",
   "bloc": "semblanca",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la longitud dels costats desconeguts en aquests parells de triangles semblants.",
   "enunciat": "Triangle gran de costat $6$ cm (desconegut als altres dos); triangle petit de costats $3$ cm, $5$ cm i $4$ cm, on el de $5$ cm (el més llarg) correspon al de $6$ cm. Quant valen els altres dos costats del triangle gran?",
   "opcions": [
    "$3$ cm i $4$ cm",
    "$2{,}5$ cm i $3{,}33$ cm",
    "$18$ cm i $24$ cm",
    "$3{,}6$ cm i $4{,}8$ cm"
   ],
   "pistes": [
    "La raó de semblança és $k=\\dfrac{6}{5}=1{,}2$ (el costat de $6$ cm correspon al de $5$ cm, el més llarg del triangle petit).",
    "Aplica aquesta raó als altres dos costats del triangle petit ($3$ cm i $4$ cm)."
   ],
   "nota": "La correspondència entre costats del triangle petit i el gran s'ha establert seguint la indicació explícita del propi enunciat, que ja diu quins costats es corresponen entre si.",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3RzIHZhbG9ycyBzw7NuIGVscyBjb3N0YXRzIGRlbCB0cmlhbmdsZSBQRVRJVCwgbm8gZWxzIGRlbCB0cmlhbmdsZSBncmFuIHF1ZSBjYWxlbjogZW5jYXJhIGhhcyBkJ2FwbGljYXItaGkgbGEgcmHDsyBkZSBzZW1ibGFuw6dhLiIsICJBcXVlc3QgdmFsb3Igc3VydCBkJ2FwbGljYXIgbGEgcmHDsyBpbnZlcnRpZGEgJGs9XFxmcmFjezV9ezZ9JCBhbHMgY29zdGF0cyBkZSAkMyQgaSAkNCQgY207IGxhIHJhw7Mgw6lzICRrPVxcZnJhY3s2fXs1fT0xeyx9MiQgKGRlbCBjb3N0YXQgY29uZWd1dCBkZWwgdHJpYW5nbGUgZ3JhbiBhbCBkZWwgcGV0aXQpLCBubyBsYSBpbnZlcnNhLiIsICJBcXVlc3RzIHZhbG9ycyBzdXJ0ZW4gZGUgJDNcXGNkb3Q2JCBpICQ0XFxjZG90NiQgc2Vuc2UgZGl2aWRpciBwZXIgJDUkOiBsYSByYcOzIGRlIHNlbWJsYW7Dp2Egw6lzICRcXGZyYWN7Nn17NX0kLCBubyBub23DqXMgZWwgJDYkLiIsICIiXSwgImVyciI6IFsiUFJPR1JFU1NJT19JTlZFTlRBREEiLCAiQ1JFVUFNRU5UX0lOVkVSVElUIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiIl0sICJyZXMiOiBbIiRrPVxcZGZyYWN7Nn17NX09MXssfTIkIiwgIiQzXFxjZG90MXssfTI9M3ssfTYkIGNtJFxccXF1YWQgNFxcY2RvdDF7LH0yPTR7LH04JCBjbSJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 356 155\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles amb els costats corresponents marcats.</title><g transform=\"translate(38.68,117.30)\"><polygon points=\"0.00,0.00 90.00,0.00 25.31,-62.57\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"169.75,0.00 304.75,0.00 226.45,-105.30\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"45\" y=\"22\" text-anchor=\"middle\" class=\"fig-etq petita\">5 cm</text><text x=\"-5.88425\" y=\"-34.7871\" text-anchor=\"end\" class=\"fig-etq petita\">3 cm</text><text x=\"71.5616\" y=\"-41.6621\" text-anchor=\"start\" class=\"fig-etq petita\">4 cm</text><text x=\"237.25\" y=\"22\" text-anchor=\"middle\" class=\"fig-etq petita\">6 cm</text><text x=\"180.491\" y=\"-58.132\" text-anchor=\"end\" class=\"fig-etq petita\">x</text><text x=\"281.649\" y=\"-60.5841\" text-anchor=\"start\" class=\"fig-etq petita\">x</text></g></svg>"
  },
  {
   "id": "154d",
   "ex": 154,
   "ap": "d",
   "bloc": "semblanca",
   "tipus": "B",
   "dif": 1,
   "encapcalament": "Calcula la longitud dels costats desconeguts en aquests parells de triangles semblants.",
   "enunciat": "Dos triangles isòsceles tenen els costats iguals de $5$ cm cadascun, amb bases respectives de $3{,}2$ cm i $2$ cm. Són semblants?",
   "opcions": [
    "No es pot saber sense conèixer els angles",
    "Sí, perquè els dos triangles són isòsceles",
    "No, perquè la raó entre els costats iguals ($1$) no coincideix amb la raó entre les bases ($1{,}6$)",
    "Sí, perquè els costats iguals mesuren el mateix ($5$ cm als dos triangles)"
   ],
   "pistes": [
    "Per ser semblants, TOTS els costats han de guardar la mateixa raó, no només alguns.",
    "Compara la raó dels costats iguals ($\\frac{5}{5}$) amb la raó de les bases ($\\frac{3{,}2}{2}$)."
   ],
   "nota": "La correspondència entre costats del triangle petit i el gran s'ha establert seguint la indicació explícita del propi enunciat, que ja diu quins costats es corresponen entre si.",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBbWIgZWxzIHRyZXMgY29zdGF0cyBkZSBjYWRhIHRyaWFuZ2xlIGphIG4naGkgaGEgcHJvdSBwZXIgYXBsaWNhciBlbCBjcml0ZXJpIGNvc3RhdC1jb3N0YXQtY29zdGF0OiBubyBjYWxlbiBlbHMgYW5nbGVzIHBlciBkZXNjYXJ0YXIgbGEgc2VtYmxhbsOnYS4iLCAiU2VyIGlzw7JzY2VsZXMgbm9tw6lzIGRpdSBxdWUgaGkgaGEgZG9zIGNvc3RhdHMgaWd1YWxzIGVudHJlIGVsbHMgZGlucyBkZSBDQURBIHRyaWFuZ2xlOyBubyBkaXUgcmVzIHNvYnJlIGxhIHByb3BvcmNpw7MgZW50cmUgZWxzIGRvcyB0cmlhbmdsZXMsIHF1ZSDDqXMgZWwgcXVlIGNhbCBjb21wcm92YXIuIiwgIiIsICJRdWUgdW4gcGFyZWxsIGRlIGNvc3RhdHMgY29pbmNpZGVpeGkgbm8gYmFzdGE6IGNhbCBxdWUgVE9UUyBlbHMgY29zdGF0cyBndWFyZGluIGxhIG1hdGVpeGEgcmHDsy4gQXF1w60gbGVzIGJhc2VzICgkM3ssfTIkIGNtIGkgJDIkIGNtKSBubyBndWFyZGVuIGxhIG1hdGVpeGEgcmHDsyBxdWUgZWxzIGNvc3RhdHMgaWd1YWxzLiJdLCAiZXJyIjogWyJDUklURVJJX1NFTUJMQU5DQV9JTlNVRklDSUVOVCIsICJDUklURVJJX1NFTUJMQU5DQV9JTlNVRklDSUVOVCIsICIiLCAiUkFPX05PTUVTX1VOX0NPU1RBVCJdLCAicmVzIjogWyJSYcOzIGRlbHMgY29zdGF0cyBpZ3VhbHM6ICRcXGRmcmFjezV9ezV9PTEkIiwgIlJhw7MgZGUgbGVzIGJhc2VzOiAkXFxkZnJhY3szeyx9Mn17Mn09MXssfTYkIiwgIkNvbSBxdWUgJDFcXG5lMXssfTYkLCBlbHMgdHJpYW5nbGVzIE5PIHPDs24gc2VtYmxhbnRzLiJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 318 153\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles amb els costats corresponents marcats.</title><g transform=\"translate(28.63,115.11)\"><polygon points=\"0.00,0.00 90.00,0.00 45.00,-103.11\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"164.35,0.00 263.35,0.00 213.85,-101.02\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"45\" y=\"22\" text-anchor=\"middle\" class=\"fig-etq petita\">2 cm</text><text x=\"4.1697\" y=\"-55.554\" text-anchor=\"end\" class=\"fig-etq petita\">5 cm</text><text x=\"85.8303\" y=\"-55.554\" text-anchor=\"start\" class=\"fig-etq petita\">5 cm</text><text x=\"213.85\" y=\"22\" text-anchor=\"middle\" class=\"fig-etq petita\">3,2 cm</text><text x=\"171.14\" y=\"-55.3124\" text-anchor=\"end\" class=\"fig-etq petita\">5 cm</text><text x=\"256.56\" y=\"-55.3124\" text-anchor=\"start\" class=\"fig-etq petita\">5 cm</text></g></svg>"
  },
  {
   "id": "155a",
   "ex": 155,
   "ap": "a",
   "bloc": "semblanca",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Determina si aquests parells de triangles són semblants, i quin criteri s'aplica en cada cas.",
   "enunciat": "Triangle de costats $4$ cm i $5$ cm amb angle comprès de $80^\\circ$; triangle de costats $5$ cm i $6$ cm amb angle comprès de $80^\\circ$. Són semblants?",
   "opcions": [
    "Sí, perquè els dos triangles tenen un angle de $80^\\circ$",
    "Sí, perquè tots dos triangles tenen un costat de $5$ cm",
    "No, perquè les raons $\\frac{5}{4}=1{,}25$ i $\\frac{6}{5}=1{,}2$ no coincideixen",
    "No es pot saber sense conèixer el tercer costat"
   ],
   "pistes": [
    "Amb dos costats i l'angle comprès conegut, aplica el criteri costat-angle-costat: compara les raons dels costats que envolten l'angle de $80^\\circ$.",
    "Calcula $\\frac{5}{4}$ i $\\frac{6}{5}$ i compara-les."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJRdWUgbCdhbmdsZSBjb21wcsOocyBjb2luY2lkZWl4aSBubyBiYXN0YSBwZWwgY3JpdGVyaSBjb3N0YXQtYW5nbGUtY29zdGF0OiBjYWwsIGEgbcOpcywgcXVlIGVscyBjb3N0YXRzIHF1ZSBsJ2Vudm9sdGVuIHNpZ3VpbiBwcm9wb3JjaW9uYWxzLCBpIGFxdcOtIG5vIGhvIHPDs24uIiwgIlF1ZSBjb2luY2lkZWl4aSB1biBzb2wgY29zdGF0IG5vIMOpcyBjYXAgZGVscyB0cmVzIGNyaXRlcmlzIGRlIHNlbWJsYW7Dp2EgZGUgdHJpYW5nbGVzOiBjYWwgY29tcGFyYXIgbGEgcHJvcG9yY2nDsyBlbnRyZSBlbHMgRE9TIGNvc3RhdHMgcXVlIGVudm9sdGVuIGwnYW5nbGUgaWd1YWwuIiwgIiIsICJBbWIgZG9zIGNvc3RhdHMgaSBsJ2FuZ2xlIGNvbXByw6hzIGphIG4naGkgaGEgcHJvdSBwZXIgYXBsaWNhciBlbCBjcml0ZXJpIGNvc3RhdC1hbmdsZS1jb3N0YXQ6IG5vIGNhbCBlbCB0ZXJjZXIgY29zdGF0IHBlciBkZXNjYXJ0YXIgbGEgc2VtYmxhbsOnYS4iXSwgImVyciI6IFsiQ1JJVEVSSV9TRU1CTEFOQ0FfSU5TVUZJQ0lFTlQiLCAiUkFPX05PTUVTX1VOX0NPU1RBVCIsICIiLCAiQ1JJVEVSSV9TRU1CTEFOQ0FfSU5TVUZJQ0lFTlQiXSwgInJlcyI6IFsiJFxcZGZyYWN7NX17NH09MXssfTI1IFxccXF1YWQgXFxkZnJhY3s2fXs1fT0xeyx9MiQiLCAiQ29tIHF1ZSAkMXssfTI1XFxuZTF7LH0yJCwgZWxzIHRyaWFuZ2xlcyBOTyBzw7NuIHNlbWJsYW50cy4iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 320 135\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles amb els costats corresponents marcats.</title><g transform=\"translate(31.51,97.80)\"><polygon points=\"0.00,0.00 90.00,0.00 37.80,-70.20\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"166.00,0.00 276.00,0.00 212.20,-85.80\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"45\" y=\"22\" text-anchor=\"middle\" class=\"fig-etq petita\">4 cm</text><text x=\"1.29058\" y=\"-40.582\" text-anchor=\"end\" class=\"fig-etq petita\">5 cm</text><text x=\"221\" y=\"22\" text-anchor=\"middle\" class=\"fig-etq petita\">5 cm</text><text x=\"171.491\" y=\"-48.382\" text-anchor=\"end\" class=\"fig-etq petita\">6 cm</text><path d=\"M 15.00 0.00 A 15.00 15.00 0 0 0 7.11 -13.21\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><path d=\"M 181.00 0.00 A 15.00 15.00 0 0 0 173.11 -13.21\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/></g></svg>"
  },
  {
   "id": "155b",
   "ex": 155,
   "ap": "b",
   "bloc": "semblanca",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Determina si aquests parells de triangles són semblants, i quin criteri s'aplica en cada cas.",
   "enunciat": "Triangle de costats $11$ cm i $9{,}1$ cm amb angle comprès de $65^\\circ$; triangle de costats $9$ cm i $7$ cm amb angle comprès de $65^\\circ$. Són semblants?",
   "opcions": [
    "No, perquè les raons $\\frac{9}{11}\\approx0{,}818$ i $\\frac{7}{9{,}1}\\approx0{,}769$ no coincideixen",
    "No es pot saber sense conèixer el tercer costat",
    "Sí, perquè els costats es corresponen en ordre decreixent de mida",
    "Sí, perquè els dos triangles tenen un angle de $65^\\circ$"
   ],
   "pistes": [
    "Amb dos costats i l'angle comprès conegut, aplica el criteri costat-angle-costat: compara les raons dels costats que envolten l'angle de $65^\\circ$.",
    "Calcula $\\frac{9}{11}$ i $\\frac{7}{9{,}1}$ i compara-les."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQW1iIGRvcyBjb3N0YXRzIGkgbCdhbmdsZSBjb21wcsOocyBjb25lZ3V0IGphIG4naGkgaGEgcHJvdSBwZXIgYXBsaWNhciBlbCBjcml0ZXJpIGNvc3RhdC1hbmdsZS1jb3N0YXQ6IG5vIGNhbCBlbCB0ZXJjZXIgY29zdGF0IHBlciBkZXNjYXJ0YXIgbGEgc2VtYmxhbsOnYS4iLCAiTCdvcmRyZSBkZSBtaWRhIGRlbHMgY29zdGF0cyBubyDDqXMgY2FwIGNyaXRlcmkgZGUgc2VtYmxhbsOnYTogY2FsIGNvbXBhcmFyIGxlcyByYW9ucyBudW3DqHJpcXVlcyBleGFjdGVzIGRlbHMgY29zdGF0cyBjb3JyZXNwb25lbnRzLiIsICJRdWUgbCdhbmdsZSBjb21wcsOocyBjb2luY2lkZWl4aSBubyBiYXN0YSBwZWwgY3JpdGVyaSBjb3N0YXQtYW5nbGUtY29zdGF0OiBjYWwsIGEgbcOpcywgcXVlIGVscyBjb3N0YXRzIHF1ZSBsJ2Vudm9sdGVuIHNpZ3VpbiBwcm9wb3JjaW9uYWxzLCBpIGFxdcOtIG5vIGhvIHPDs24gcHJvdSBhcHJveGltYWRhbWVudC4iXSwgImVyciI6IFsiIiwgIkNSSVRFUklfU0VNQkxBTkNBX0lOU1VGSUNJRU5UIiwgIkNSSVRFUklfU0VNQkxBTkNBX0lOU1VGSUNJRU5UIiwgIkNSSVRFUklfU0VNQkxBTkNBX0lOU1VGSUNJRU5UIl0sICJyZXMiOiBbIiRcXGRmcmFjezl9ezExfVxcYXBwcm94MHssfTgxOCBcXHFxdWFkIFxcZGZyYWN7N317OXssfTF9XFxhcHByb3gweyx9NzY5JCIsICJDb20gcXVlICQweyx9ODE4XFxuZTB7LH03NjkkLCBlbHMgdHJpYW5nbGVzIE5PIHPDs24gc2VtYmxhbnRzIHBlbCBjcml0ZXJpIGNvc3RhdC1hbmdsZS1jb3N0YXQuIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 286 120\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles amb els costats corresponents marcats.</title><g transform=\"translate(41.91,82.20)\"><polygon points=\"0.00,0.00 90.00,0.00 37.80,-70.20\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"160.25,0.00 231.89,0.00 190.34,-55.88\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"45\" y=\"22\" text-anchor=\"middle\" class=\"fig-etq petita\">11 cm</text><text x=\"1.29058\" y=\"-40.582\" text-anchor=\"end\" class=\"fig-etq petita\">9,1 cm</text><text x=\"196.067\" y=\"22\" text-anchor=\"middle\" class=\"fig-etq petita\">9 cm</text><text x=\"157.682\" y=\"-33.4223\" text-anchor=\"end\" class=\"fig-etq petita\">7 cm</text><path d=\"M 15.00 0.00 A 15.00 15.00 0 0 0 7.11 -13.21\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><path d=\"M 175.25 0.00 A 15.00 15.00 0 0 0 167.36 -13.21\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/></g></svg>"
  },
  {
   "id": "156a",
   "ex": 156,
   "ap": "a",
   "bloc": "escales",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Expressa mitjançant una escala numèrica (a més de l'escala gràfica, que trobaràs descrita a la resolució).",
   "enunciat": "$1$ cm en el plànol equival a $2$ km en la realitat. Quina és l'escala numèrica?",
   "opcions": [
    "$1:200\\,000$",
    "$1:2$",
    "$200\\,000:1$",
    "$1:20\\,000$"
   ],
   "pistes": [
    "Converteix els $2$ km a la mateixa unitat que el $1$ cm del dibuix: $2\\text{ km}=200\\,000$ cm.",
    "L'escala numèrica és $1:n$, amb $n$ la distància real en centímetres."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRmFsdGEgY29udmVydGlyIGVscyAkMiQga20gYSBjZW50w61tZXRyZXMgcGVycXXDqCBsZXMgZHVlcyBtZXN1cmVzIGRlIGwnZXNjYWxhIGVzdGlndWluIGVuIGxhIG1hdGVpeGEgdW5pdGF0OiAkMlxcdGV4dHsga219PTIwMFxcLDAwMCQgY20uIiwgIkwnZXNjYWxhIG51bcOocmljYSBzJ2VzY3JpdSBhbWIgZWwgZGlidWl4IHByaW1lciBpIGxhIHJlYWxpdGF0IGRlc3Byw6lzOiAkMTpuJCwgbm8gJG46MSQuIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGRlIGNvbnZlcnRpciAkMiQga20gYSBtZXRyZXMgKCQyMDAkIG0pIGVuIGNvbXB0ZXMgZGUgYSBjZW50w61tZXRyZXM6IGNhbCAkMlxcdGV4dHsga219PTIwMFxcLDAwMCQgY20sIG5vICQyMFxcLDAwMCQuIl0sICJlcnIiOiBbIiIsICJVTklUQVRTX05PX0NPTlZFUlRJREVTIiwgIklOVkVSVElEQSIsICJQUk9EVUNURV9NQUwiXSwgInJlcyI6IFsiJDJcXHRleHR7IGttfT0yMDBcXCwwMDAkIGNtIiwgIkVzY2FsYSBudW3DqHJpY2E6ICQxOjIwMFxcLDAwMCQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 216 76\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Regla d'escala gràfica: cada interval del dibuix, de 1 cm, representa 2 km de la realitat.</title><rect x=\"20.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><rect x=\"108.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><line x1=\"20.00\" y1=\"18.00\" x2=\"20.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"64.00\" y1=\"18.00\" x2=\"64.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"108.00\" y1=\"18.00\" x2=\"108.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"152.00\" y1=\"18.00\" x2=\"152.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"196.00\" y1=\"18.00\" x2=\"196.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"20.00\" y1=\"30.00\" x2=\"196.00\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"20\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">0</text><text x=\"64\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">1 cm</text><text x=\"108\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">2 cm</text><text x=\"152\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">3 cm</text><text x=\"196\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">4 cm</text><text x=\"98\" y=\"8\" text-anchor=\"middle\" class=\"fig-etq petita\">cada interval = 2 km</text></svg>"
  },
  {
   "id": "156b",
   "ex": 156,
   "ap": "b",
   "bloc": "escales",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Expressa mitjançant una escala numèrica (a més de l'escala gràfica, que trobaràs descrita a la resolució).",
   "enunciat": "$1$ cm en el plànol equival a $50$ km en la realitat. Quina és l'escala numèrica?",
   "opcions": [
    "$5\\,000\\,000:1$",
    "$1:500\\,000$",
    "$1:5\\,000\\,000$",
    "$1:50$"
   ],
   "pistes": [
    "Converteix els $50$ km a la mateixa unitat que el $1$ cm del dibuix: $50\\text{ km}=5\\,000\\,000$ cm.",
    "L'escala numèrica és $1:n$, amb $n$ la distància real en centímetres."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJMJ2VzY2FsYSBudW3DqHJpY2Egcydlc2NyaXUgYW1iIGVsIGRpYnVpeCBwcmltZXIgaSBsYSByZWFsaXRhdCBkZXNwcsOpczogJDE6biQsIG5vICRuOjEkLiIsICJBcXVlc3QgdmFsb3Igc3VydCBkZSBjb252ZXJ0aXIgJDUwJCBrbSBhIG1ldHJlcyAoJDUwXFwsMDAwJCBtKSBlbiBjb21wdGVzIGRlIGEgY2VudMOtbWV0cmVzOiBjYWwgJDUwXFx0ZXh0eyBrbX09NVxcLDAwMFxcLDAwMCQgY20sIG5vICQ1MDBcXCwwMDAkLiIsICIiLCAiRmFsdGEgY29udmVydGlyIGVscyAkNTAkIGttIGEgY2VudMOtbWV0cmVzIHBlcnF1w6ggbGVzIGR1ZXMgbWVzdXJlcyBkZSBsJ2VzY2FsYSBlc3RpZ3VpbiBlbiBsYSBtYXRlaXhhIHVuaXRhdDogJDUwXFx0ZXh0eyBrbX09NVxcLDAwMFxcLDAwMCQgY20uIl0sICJlcnIiOiBbIklOVkVSVElEQSIsICJQUk9EVUNURV9NQUwiLCAiIiwgIlVOSVRBVFNfTk9fQ09OVkVSVElERVMiXSwgInJlcyI6IFsiJDUwXFx0ZXh0eyBrbX09NVxcLDAwMFxcLDAwMCQgY20iLCAiRXNjYWxhIG51bcOocmljYTogJDE6NVxcLDAwMFxcLDAwMCQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 216 76\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Regla d'escala gràfica: cada interval del dibuix, de 1 cm, representa 50 km de la realitat.</title><rect x=\"20.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><rect x=\"108.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><line x1=\"20.00\" y1=\"18.00\" x2=\"20.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"64.00\" y1=\"18.00\" x2=\"64.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"108.00\" y1=\"18.00\" x2=\"108.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"152.00\" y1=\"18.00\" x2=\"152.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"196.00\" y1=\"18.00\" x2=\"196.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"20.00\" y1=\"30.00\" x2=\"196.00\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"20\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">0</text><text x=\"64\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">1 cm</text><text x=\"108\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">2 cm</text><text x=\"152\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">3 cm</text><text x=\"196\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">4 cm</text><text x=\"98\" y=\"8\" text-anchor=\"middle\" class=\"fig-etq petita\">cada interval = 50 km</text></svg>"
  },
  {
   "id": "158",
   "ex": 158,
   "ap": "",
   "bloc": "escales",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "La distància real entre dues ciutats és de $450$ km. Troba la distància que les separa en un mapa dibuixat a escala $1:1\\,500\\,000$.",
   "opcions": [
    "$3$ cm",
    "$30$ cm",
    "$675\\,000\\,000\\,000$ cm",
    "$0{,}3$ cm"
   ],
   "pistes": [
    "Converteix la distància real a centímetres: $450\\text{ km}=45\\,000\\,000$ cm.",
    "Divideix-la per l'escala: $45\\,000\\,000:1\\,500\\,000$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3QgdmFsb3IgdMOpIHVuIGZhY3RvciAkMTAkIGRlIG1lbnlzOiByZXZpc2EgbGEgY29udmVyc2nDsyAkNDUwXFx0ZXh0eyBrbX09NDVcXCwwMDBcXCwwMDAkIGNtIGFiYW5zIGRlIGRpdmlkaXIgcGVyICQxXFwsNTAwXFwsMDAwJC4iLCAiIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGRlIG11bHRpcGxpY2FyIGxhIGRpc3TDoG5jaWEgcmVhbCBwZXIgbCdlc2NhbGEgZW4gY29tcHRlcyBkZSBkaXZpZGlyLWhpOiBlbiB1bmEgZXNjYWxhICQxOm4kLCBsYSBkaXN0w6BuY2lhIGFsIG1hcGEgw6lzIGxhIGRpc3TDoG5jaWEgcmVhbCBESVZJRElEQSBwZXIgJG4kLiIsICJTZW1ibGEgcXVlIGhhcyBjb252ZXJ0aXQgZWxzICQ0NTAkIGttIGEgbWV0cmVzICgkNDUwXFwsMDAwJCBtKSBpIG5vIGEgY2VudMOtbWV0cmVzOiBjYWwgJDQ1MFxcdGV4dHsga219PTQ1XFwsMDAwXFwsMDAwJCBjbSBhYmFucyBkZSBkaXZpZGlyIHBlciBsJ2VzY2FsYS4iXSwgImVyciI6IFsiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiLCAiQ1JFVUFNRU5UX0lOVkVSVElUIiwgIlBST0RVQ1RFX01BTCJdLCAicmVzIjogWyIkNDUwXFx0ZXh0eyBrbX09NDVcXCwwMDBcXCwwMDAkIGNtIiwgIiQ0NVxcLDAwMFxcLDAwMDoxXFwsNTAwXFwsMDAwPTMwJCBjbSJdfQ=="
  },
  {
   "id": "159",
   "ex": 159,
   "ap": "",
   "bloc": "escales",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "En representar la carretera que uneix dos pobles en un mapa d'escala $1:500\\,000$, té una longitud de $6$ cm. Quina seria la longitud de la carretera si la representem en un plànol d'escala $1:60\\,000$?",
   "opcions": [
    "$0{,}72$ cm",
    "$0{,}00072$ cm",
    "$50$ cm",
    "$720$ cm"
   ],
   "pistes": [
    "Calcula primer la distància real: $6\\text{ cm}\\cdot500\\,000=3\\,000\\,000$ cm.",
    "Divideix aquesta distància real per la segona escala: $3\\,000\\,000:60\\,000$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igc3VydCBkJ2FwbGljYXIgbGEgcmHDsyBkZSBsZXMgZXNjYWxlcyBpbnZlcnRpZGEgKCQ2MFxcLDAwMC81MDBcXCwwMDAkIGVubGxvYyBkZSAkNTAwXFwsMDAwLzYwXFwsMDAwJCk6IGEgdW5hIGVzY2FsYSBhbWIgdW4gbm9tYnJlIE3DiVMgUEVUSVQgKG3DqXMgZGV0YWxsYWRhKSBsaSBjb3JyZXNwb24gdW5hIGxvbmdpdHVkIGRpYnVpeGFkYSBNw4lTIEdSQU4sIG5vIG3DqXMgcGV0aXRhLiIsICJBcXVlc3QgcmVzdWx0YXQgw6lzIG1hc3NhIHBldGl0IHBlciBhIHVuYSBlc2NhbGEgbcOpcyBkZXRhbGxhZGE6IHRvcm5hIGEgY2FsY3VsYXIgcHJpbWVyIGxhIGRpc3TDoG5jaWEgcmVhbCAoJDZcXGNkb3Q1MDBcXCwwMDAkIGNtKSBpIGRlc3Byw6lzIGRpdmlkZWl4LWxhIHBlciAkNjBcXCwwMDAkLiIsICIiLCAiQXF1ZXN0IHZhbG9yIHTDqSB1biBmYWN0b3IgJDEwJCBkZSBtw6lzOiByZXZpc2EgZWwgY8OgbGN1bCBkZSBsYSBkaXN0w6BuY2lhIHJlYWwgKCQ2XFxjZG90NTAwXFwsMDAwPTNcXCwwMDBcXCwwMDAkIGNtKSBhYmFucyBkZSBkaXZpZGlyLWxhIHBlciAkNjBcXCwwMDAkLiJdLCAiZXJyIjogWyJDUkVVQU1FTlRfSU5WRVJUSVQiLCAiUFJPRFVDVEVfTUFMIiwgIiIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIl0sICJyZXMiOiBbIkRpc3TDoG5jaWEgcmVhbDogJDZcXGNkb3Q1MDBcXCwwMDA9M1xcLDAwMFxcLDAwMCQgY20iLCAiQWwgbm91IHBsw6Bub2w6ICQzXFwsMDAwXFwsMDAwOjYwXFwsMDAwPTUwJCBjbSJdfQ=="
  },
  {
   "id": "160a",
   "ex": 160,
   "ap": "a",
   "bloc": "escales",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "El plànol d'un habitatge està dibuixat a escala $1:60$.",
   "enunciat": "Quines dimensions reals té la cuina si en el plànol fa $4$ cm d'ample i $7$ cm de llarg?",
   "opcions": [
    "$0{,}067$ m d'ample i $0{,}117$ m de llarg",
    "$4$ m d'ample i $7$ m de llarg",
    "$2{,}4$ m d'ample i $4{,}2$ m de llarg",
    "$240$ m d'ample i $420$ m de llarg"
   ],
   "pistes": [
    "A l'escala $1:60$, cada centímetre del plànol correspon a $60$ cm reals.",
    "Multiplica les dues mesures del plànol per $60$ i converteix el resultat a metres."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igc3VydCBkZSBkaXZpZGlyIHBlciAkNjAkIGVuIGNvbXB0ZXMgZGUgbXVsdGlwbGljYXI6IGEgbCdlc2NhbGEgJDE6NjAkLCBsYSBtZXN1cmEgUkVBTCDDqXMgJDYwJCB2ZWdhZGVzIGxhIG1lc3VyYSBhbCBwbMOgbm9sLCBubyB1bmEgc2VpeGFudGVuYSBwYXJ0LiIsICJObyBoYXMgZmV0IHNlcnZpciBsJ2VzY2FsYTogbGVzIG1lc3VyZXMgZGVsIHBsw6Bub2wgaSBsZXMgcmVhbHMgbm8gY29pbmNpZGVpeGVuIGEgbWVueXMgcXVlIGwnZXNjYWxhIGZvcyAkMToxJC4iLCAiIiwgIkFxdWVzdHMgdmFsb3JzIHRlbmVuIHVuIGZhY3RvciAkMTAwJCBkZSBtw6lzOiAkNFxcY2RvdDYwPTI0MCQgY20sIHF1ZSBjYWwgY29udmVydGlyIGEgbWV0cmVzIGRpdmlkaW50IHBlciAkMTAwJCwgbm8gZGVpeGFyLWhvIHRhbCBxdWFsLiJdLCAiZXJyIjogWyJDUkVVQU1FTlRfSU5WRVJUSVQiLCAiRVNDQUxBX05PX0FQTElDQURBIiwgIiIsICJQUk9EVUNURV9NQUwiXSwgInJlcyI6IFsiQW1wbGU6ICQ0XFxjZG90NjA9MjQwJCBjbSAkPTJ7LH00JCBtIiwgIkxsYXJnOiAkN1xcY2RvdDYwPTQyMCQgY20gJD00eyx9MiQgbSJdfQ=="
  },
  {
   "id": "160b",
   "ex": 160,
   "ap": "b",
   "bloc": "escales",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "El plànol d'un habitatge està dibuixat a escala $1:60$.",
   "enunciat": "El passadís mesura $7{,}5$ m a la realitat. Quant fa de llarg en el plànol?",
   "opcions": [
    "$7{,}5$ cm",
    "$12{,}5$ cm",
    "$1{,}25$ cm",
    "$450$ cm"
   ],
   "pistes": [
    "Converteix els $7{,}5$ m a centímetres: $750$ cm.",
    "Divideix-los per $60$ per passar de la mesura real a la del plànol."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJObyBoYXMgZmV0IHNlcnZpciBsJ2VzY2FsYTogbGVzIG1lc3VyZXMgZGVsIHBsw6Bub2wgaSBsZXMgcmVhbHMgbm8gY29pbmNpZGVpeGVuIGEgbWVueXMgcXVlIGwnZXNjYWxhIGZvcyAkMToxJC4iLCAiIiwgIkFxdWVzdCB2YWxvciB0w6kgdW4gZmFjdG9yICQxMCQgZGUgbWVueXM6IHJldmlzYSBsYSBjb252ZXJzacOzICQ3eyx9NVxcdGV4dHsgbX09NzUwJCBjbSBhYmFucyBkZSBkaXZpZGlyIHBlciAkNjAkLiIsICJBcXVlc3QgdmFsb3Igc3VydCBkZSBtdWx0aXBsaWNhciBwZXIgJDYwJCBlbiBjb21wdGVzIGRlIGRpdmlkaXItaGk6IGEgbCdlc2NhbGEgJDE6NjAkLCBsYSBtZXN1cmEgQUwgUEzDgE5PTCDDqXMgbGEgbWVzdXJhIHJlYWwgRElWSURJREEgcGVyICQ2MCQsIG5vIG11bHRpcGxpY2FkYS4iXSwgImVyciI6IFsiRVNDQUxBX05PX0FQTElDQURBIiwgIiIsICJQUk9EVUNURV9NQUwiLCAiQ1JFVUFNRU5UX0lOVkVSVElUIl0sICJyZXMiOiBbIiQ3eyx9NVxcdGV4dHsgbX09NzUwJCBjbSIsICIkNzUwOjYwPTEyeyx9NSQgY20iXX0="
  },
  {
   "id": "161",
   "ex": 161,
   "ap": "",
   "bloc": "aplicacions",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Quant mesura l'ombra projectada per un arbre de $15$ m d'altura, sabent que en aquest mateix moment un altre arbre de $8$ m d'altura projecta una ombra de $10$ m?",
   "opcions": [
    "$16$ m",
    "$8$ m",
    "$12{,}5$ m",
    "$18{,}75$ m"
   ],
   "pistes": [
    "Com que els dos arbres projecten ombra al mateix moment, l'altura i l'ombra de cadascun són directament proporcionals: $\\dfrac{8}{10}=\\dfrac{15}{x}$.",
    "Aïlla $x$ multiplicant en creu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igc3VydCBkZSAkOFxcY2RvdDIkOiBjb21wcm92YSBlbCBjw6BsY3VsIGNvbXBsZXQgJHg9XFxmcmFjezE1XFxjZG90MTB9ezh9JCBwYXMgYSBwYXMgZW4gbGxvYyBkJ3VuYSBhcHJveGltYWNpw7MuIiwgIiQ4JCBtIMOpcyBsJ2FsdHVyYSBkZWwgcHJpbWVyIGFyYnJlLCBubyBsJ29tYnJhIHF1ZSBlcyBkZW1hbmEgcGVyIGFsIHNlZ29uOiB0b3JuYSBhIHBsYW50ZWphciBsYSBwcm9wb3JjacOzIGRlcyBkZSB6ZXJvLiIsICJBcXVlc3QgdmFsb3Igc3VydCBkJ2ludmVydGlyIGxhIHByb3BvcmNpw7M6IGNvbSBxdWUgZWwgc2Vnb24gYXJicmUgw6lzIE3DiVMgQUxULCBsYSBzZXZhIG9tYnJhIGhhIGRlIHNlciBNw4lTIExMQVJHQSBxdWUgbGEgZGVsIHByaW1lciwgbm8gbcOpcyBjdXJ0YS4gUGxhbnRlamEgJFxcZnJhY3s4fXsxMH09XFxmcmFjezE1fXt4fSQuIiwgIiJdLCAiZXJyIjogWyJQUk9EVUNURV9NQUwiLCAiUFJPR1JFU1NJT19JTlZFTlRBREEiLCAiQ1JFVUFNRU5UX0lOVkVSVElUIiwgIiJdLCAicmVzIjogWyIkXFxkZnJhY3s4fXsxMH09XFxkZnJhY3sxNX17eH0gXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4PVxcZGZyYWN7MTVcXGNkb3QxMH17OH0kIiwgIiR4PTE4eyx9NzUkIG0iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 282 166\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles rectangles semblants, cadascun amb un costat vertical i un costat horitzontal, units per una mateixa línia de referència amb la mateixa inclinació.</title><g transform=\"translate(52.00,118.00)\"><line x1=\"0.00\" y1=\"0.00\" x2=\"0.00\" y2=\"-40.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.00\" y1=\"0.00\" x2=\"50.00\" y2=\"0.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.00\" y1=\"-40.00\" x2=\"50.00\" y2=\"0.00\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line x1=\"90.00\" y1=\"0.00\" x2=\"90.00\" y2=\"-88.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90.00\" y1=\"0.00\" x2=\"200.00\" y2=\"0.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90.00\" y1=\"-88.00\" x2=\"200.00\" y2=\"0.00\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><text x=\"-10\" y=\"-16\" text-anchor=\"end\" class=\"fig-etq petita\">8 m</text><text x=\"25\" y=\"15\" text-anchor=\"middle\" class=\"fig-etq petita\">10 m</text><text x=\"80\" y=\"-40\" text-anchor=\"end\" class=\"fig-etq petita\">15 m</text><text x=\"145\" y=\"15\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text><text x=\"25\" y=\"34\" text-anchor=\"middle\" class=\"fig-etq petita\">arbre petit</text><text x=\"145\" y=\"34\" text-anchor=\"middle\" class=\"fig-etq petita\">arbre gran</text></g></svg>"
  },
  {
   "id": "162",
   "ex": 162,
   "ap": "",
   "bloc": "aplicacions",
   "tipus": "A",
   "dif": 3,
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
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Un arbre fa $5$ m d'altura i, a una determinada hora del dia, projecta una ombra de $6$ m. Quina altura tindrà un edifici que a la mateixa hora projecta una ombra de $10$ m?",
   "opcions": [
    "$6$ m",
    "$12$ m",
    "$8{,}33$ m (aproximadament)",
    "$9$ m"
   ],
   "pistes": [
    "A la mateixa hora, l'altura i l'ombra de qualsevol objecte són directament proporcionals: $\\dfrac{6}{5}=\\dfrac{10}{x}$.",
    "Aïlla $x$ multiplicant en creu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyIkNiQgbSDDqXMgbCdvbWJyYSBkZSBsJ2FyYnJlLCBubyBsJ2FsdHVyYSBkZSBsJ2VkaWZpY2kgcXVlIGVzIGRlbWFuYTogdG9ybmEgYSBwbGFudGVqYXIgbGEgcHJvcG9yY2nDsyBkZXMgZGUgemVyby4iLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZCdpbnZlcnRpciBsYSBwcm9wb3JjacOzOiBwbGFudGVqYSAkXFxmcmFjezZ9ezV9PVxcZnJhY3sxMH17eH0kLCBhbWIgbCdhbHR1cmEgZGUgbCdhcmJyZSBjb3JyZXNwb25lbnQgYSBsYSBzZXZhIHByw7JwaWEgb21icmEsIG5vIGEgbGEgZGUgbCdlZGlmaWNpLiIsICIiLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZGUgc3VtYXIgbGEgZGlmZXLDqG5jaWEgZCdvbWJyZXMgKCQxMC02PTQkKSBhIGwnYWx0dXJhIGRlIGwnYXJicmU6IGwnYWx0dXJhIGkgbCdvbWJyYSBzw7NuIFBST1BPUkNJT05BTFMsIG5vIHZhcmllbiBwZXIgdW5hIGRpZmVyw6huY2lhIHN1bWFkYS4iXSwgImVyciI6IFsiUFJPR1JFU1NJT19JTlZFTlRBREEiLCAiQ1JFVUFNRU5UX0lOVkVSVElUIiwgIiIsICJSQU9OQU1FTlRfQURESVRJVSJdLCAicmVzIjogWyIkXFxkZnJhY3s2fXs1fT1cXGRmcmFjezEwfXt4fSBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9XFxkZnJhY3s1XFxjZG90MTB9ezZ9PVxcZGZyYWN7NTB9ezZ9JCIsICIkeFxcYXBwcm94OHssfTMzJCBtIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 282 170\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles rectangles semblants, cadascun amb un costat vertical i un costat horitzontal, units per una mateixa línia de referència amb la mateixa inclinació.</title><g transform=\"translate(52.00,121.67)\"><line x1=\"0.00\" y1=\"0.00\" x2=\"0.00\" y2=\"-41.67\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.00\" y1=\"0.00\" x2=\"50.00\" y2=\"0.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.00\" y1=\"-41.67\" x2=\"50.00\" y2=\"0.00\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line x1=\"90.00\" y1=\"0.00\" x2=\"90.00\" y2=\"-91.67\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90.00\" y1=\"0.00\" x2=\"200.00\" y2=\"0.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90.00\" y1=\"-91.67\" x2=\"200.00\" y2=\"0.00\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><text x=\"-10\" y=\"-16.8333\" text-anchor=\"end\" class=\"fig-etq petita\">5 m</text><text x=\"25\" y=\"15\" text-anchor=\"middle\" class=\"fig-etq petita\">6 m</text><text x=\"80\" y=\"-41.8333\" text-anchor=\"end\" class=\"fig-etq petita\">x</text><text x=\"145\" y=\"15\" text-anchor=\"middle\" class=\"fig-etq petita\">10 m</text><text x=\"25\" y=\"34\" text-anchor=\"middle\" class=\"fig-etq petita\">arbre</text><text x=\"145\" y=\"34\" text-anchor=\"middle\" class=\"fig-etq petita\">edifici</text></g></svg>"
  },
  {
   "id": "164",
   "ex": 164,
   "ap": "",
   "bloc": "aplicacions",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Si un pal mesura $1$ m, i l'ombra que projecta a una determinada hora del dia és d'$1{,}5$ m, quant mesura un edifici que projecta una ombra de $6$ m a la mateixa hora?",
   "opcions": [
    "$6{,}67$ m",
    "$4$ m",
    "$9$ m",
    "$5{,}5$ m"
   ],
   "pistes": [
    "A la mateixa hora, l'altura i l'ombra de qualsevol objecte són directament proporcionals: $\\dfrac{1}{1{,}5}=\\dfrac{x}{6}$.",
    "Aïlla $x$ multiplicant en creu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igc3VydCBkZSAkNjoxeyx9NVxcY2RvdDF7LH02NyQsIGFtYiBlbHMgdGVybWVzIG1hbCBhcGFyZWxsYXRzOiByZXZpc2EgbGEgcHJvcG9yY2nDsyAkXFxmcmFjezF9ezF7LH01fT1cXGZyYWN7eH17Nn0kIHBhcyBhIHBhcy4iLCAiIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGQnaW52ZXJ0aXIgbGEgcHJvcG9yY2nDszogcGxhbnRlamEgJFxcZnJhY3sxfXsxeyx9NX09XFxmcmFje3h9ezZ9JCwgYW1iIGwnYWx0dXJhIGRlbCBwYWwgY29ycmVzcG9uZW50IGEgbGEgc2V2YSBwcsOycGlhIG9tYnJhLiIsICJBcXVlc3QgdmFsb3Igc3VydCBkZSBzdW1hciBsYSBkaWZlcsOobmNpYSBkJ29tYnJlcyAoJDYtMXssfTU9NHssfTUkKSBhIGwnYWx0dXJhIGRlbCBwYWw6IGwnYWx0dXJhIGkgbCdvbWJyYSBzw7NuIFBST1BPUkNJT05BTFMsIG5vIHZhcmllbiBwZXIgdW5hIGRpZmVyw6huY2lhIHN1bWFkYS4iXSwgImVyciI6IFsiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiIiwgIkNSRVVBTUVOVF9JTlZFUlRJVCIsICJSQU9OQU1FTlRfQURESVRJVSJdLCAicmVzIjogWyIkXFxkZnJhY3sxfXsxeyx9NX09XFxkZnJhY3t4fXs2fSBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9XFxkZnJhY3sxXFxjZG90Nn17MXssfTV9JCIsICIkeD00JCBtIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 282 152\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles rectangles semblants, cadascun amb un costat vertical i un costat horitzontal, units per una mateixa línia de referència amb la mateixa inclinació.</title><g transform=\"translate(52.00,103.33)\"><line x1=\"0.00\" y1=\"0.00\" x2=\"0.00\" y2=\"-33.33\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.00\" y1=\"0.00\" x2=\"50.00\" y2=\"0.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.00\" y1=\"-33.33\" x2=\"50.00\" y2=\"0.00\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line x1=\"90.00\" y1=\"0.00\" x2=\"90.00\" y2=\"-73.33\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90.00\" y1=\"0.00\" x2=\"200.00\" y2=\"0.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90.00\" y1=\"-73.33\" x2=\"200.00\" y2=\"0.00\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><text x=\"-10\" y=\"-12.6667\" text-anchor=\"end\" class=\"fig-etq petita\">1 m</text><text x=\"25\" y=\"15\" text-anchor=\"middle\" class=\"fig-etq petita\">1,5 m</text><text x=\"80\" y=\"-32.6667\" text-anchor=\"end\" class=\"fig-etq petita\">x</text><text x=\"145\" y=\"15\" text-anchor=\"middle\" class=\"fig-etq petita\">6 m</text><text x=\"25\" y=\"34\" text-anchor=\"middle\" class=\"fig-etq petita\">pal</text><text x=\"145\" y=\"34\" text-anchor=\"middle\" class=\"fig-etq petita\">edifici</text></g></svg>"
  },
  {
   "id": "165",
   "ex": 165,
   "ap": "",
   "bloc": "aplicacions",
   "tipus": "A",
   "dif": 3,
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
   "nota": "L'enunciat de partida porta una figura amb la trajectòria corba de la pilota; aquí es considera una trajectòria recta entre la mà del jugador i la cistella, que és el que permeten les eines de semblança.",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igw6lzIGxhIG1laXRhdCBkZSAkM3ssfTA1JCBtOiBubyB0w6kgZW4gY29tcHRlIHF1ZSBsYSBwaWxvdGEgamEgcGFydGVpeCBkJ3VuYSBhbHR1cmEgaW5pY2lhbCBkJyQxeyx9OSQgbSwgbm8gZGUgdGVycmEuIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGRlIHN1bWFyIGxlcyBkdWVzIGFsdHVyZXMgaSBkaXZpZGlyLWxlcyBlbnRyZSAkMiQ6IGNvbSBxdWUgbGEgcGlsb3RhIHB1amEgZGVzIGQnJDF7LH05JCBtLCBjYWwgc3VtYXItaGkgTk9Nw4lTIGxhIG1laXRhdCBkZSBsYSBkaWZlcsOobmNpYSwgbm8gZmVyIGxhIG1pdGphbmEgYXJpdG3DqHRpY2EgZGlyZWN0YSAocXVlIHBlciBhcXVlc3QgY2FzIGRvbmEgZWwgbWF0ZWl4IHJlc3VsdGF0IHBlcsOyIHBlbCBtb3RpdSBlcXVpdm9jYXQ7IGNvbXByb3ZhLWhvIGFtYiBsYSBkaWZlcsOobmNpYSBkJ2FsdHVyZXMpLiIsICJBcXVlc3QgdmFsb3Igc3VydCBkZSAkXFxmcmFjezN7LH0wNX17Mn0tXFxmcmFjezF7LH05fXsyfSQ6IGNhbCBwYXJ0aXIgZGUgbCdhbHR1cmEgaW5pY2lhbCAoJDF7LH05JCBtKSBpIHN1bWFyLWhpIGxhIE1FSVRBVCBkZSBsYSBkaWZlcsOobmNpYSBkJ2FsdHVyZXMsIG5vIGNhbGN1bGFyIGxhIG1laXRhdCBkZSBjYWRhIGFsdHVyYSBwZXIgc2VwYXJhdC4iLCAiIl0sICJlcnIiOiBbIlBST0dSRVNTSU9fSU5WRU5UQURBIiwgIlNVTUFfRU5fTExPQ19SRVNUQSIsICJBUklUTUVUSUNBX1BBU19JTlRFUk1FREkiLCAiIl0sICJyZXMiOiBbIkRpZmVyw6huY2lhIGQnYWx0dXJhOiAkM3ssfTA1LTF7LH05PTF7LH0xNSQgbSIsICIkeD0xeyx9OStcXGRmcmFjezF7LH0xNX17Mn09MXssfTkrMHssfTU3NSQiLCAiJHg9MnssfTQ3NSQgbSJdfQ=="
  },
  {
   "id": "166",
   "ex": 166,
   "ap": "",
   "bloc": "aplicacions",
   "tipus": "A",
   "dif": 3,
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
   "figura": "<svg class=\"figura\" viewBox=\"0 0 282 116\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles rectangles semblants, cadascun amb un costat vertical i un costat horitzontal, units per una mateixa línia de referència amb la mateixa inclinació.</title><g transform=\"translate(52.00,67.40)\"><line x1=\"0.00\" y1=\"0.00\" x2=\"0.00\" y2=\"-17.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.00\" y1=\"0.00\" x2=\"50.00\" y2=\"0.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.00\" y1=\"-17.00\" x2=\"50.00\" y2=\"0.00\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line x1=\"90.00\" y1=\"0.00\" x2=\"90.00\" y2=\"-37.40\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90.00\" y1=\"0.00\" x2=\"200.00\" y2=\"0.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90.00\" y1=\"-37.40\" x2=\"200.00\" y2=\"0.00\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><text x=\"-10\" y=\"-4.5\" text-anchor=\"end\" class=\"fig-etq petita\">1,7 m</text><text x=\"25\" y=\"15\" text-anchor=\"middle\" class=\"fig-etq petita\">5 m</text><text x=\"80\" y=\"-14.7\" text-anchor=\"end\" class=\"fig-etq petita\">x</text><text x=\"145\" y=\"15\" text-anchor=\"middle\" class=\"fig-etq petita\">3000 m</text><text x=\"25\" y=\"34\" text-anchor=\"middle\" class=\"fig-etq petita\">Anna</text><text x=\"145\" y=\"34\" text-anchor=\"middle\" class=\"fig-etq petita\">muntanya</text></g></svg>"
  },
  {
   "id": "167",
   "ex": 167,
   "ap": "",
   "bloc": "aplicacions",
   "tipus": "A",
   "dif": 3,
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
   "dif": 3,
   "encapcalament": "",
   "enunciat": "En Pere és a $2$ m d'un precipici i veu alineat un poble amb la vora del precipici. Els seus ulls són a $1{,}6$ m d'altura i el precipici té $450$ m de profunditat. A quina distància horitzontal està el poble del precipici?",
   "opcions": [
    "$562{,}5$ m",
    "$1{,}6$ m",
    "$281{,}25$ m",
    "$720$ m"
   ],
   "pistes": [
    "L'altura dels ulls i la distància a la vora formen un triangle petit, semblant al triangle gran format per la profunditat del precipici i la distància total fins al poble: $\\dfrac{1{,}6}{2}=\\dfrac{450}{x}$.",
    "Aïlla $x$ multiplicant en creu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZCdpbnZlcnRpciBsYSBwcm9wb3JjacOzOiBwbGFudGVqYSAkXFxmcmFjezF7LH02fXsyfT1cXGZyYWN7NDUwfXt4fSQsIGFtYiBsJ2FsdHVyYSBkZWxzIHVsbHMgY29ycmVzcG9uZW50IGEgbGEgZGlzdMOgbmNpYSBkJ2VuIFBlcmUgYSBsYSB2b3JhLiIsICJBcXVlc3QgdmFsb3Igc3VydCBkZSAkXFxmcmFjezQ1MFxcY2RvdDF7LH02fXsyXFxjZG90MXssfTZ9JCBhbWIgdW4gZmFjdG9yIGRlIG3DqXM6IHJldmlzYSBsYSBwcm9wb3JjacOzICRcXGZyYWN7MXssfTZ9ezJ9PVxcZnJhY3s0NTB9e3h9JCBwYXMgYSBwYXMuIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGRlICQ0NTBcXGNkb3Qxeyx9NiQgc2Vuc2UgZGl2aWRpciBwZWwgJDIkOiAkeD1cXGZyYWN7MlxcY2RvdDQ1MH17MXssfTZ9JCwgaSBlbmNhcmEgZmFsdGEgb3JkZW5hciBiw6kgZWxzIGZhY3RvcnMuIl0sICJlcnIiOiBbIiIsICJDUkVVQU1FTlRfSU5WRVJUSVQiLCAiQ1JFVUFNRU5UX0lOVkVSVElUIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iXSwgInJlcyI6IFsiJFxcZGZyYWN7MXssfTZ9ezJ9PVxcZGZyYWN7NDUwfXt4fSBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9XFxkZnJhY3syXFxjZG90NDUwfXsxeyx9Nn09XFxkZnJhY3s5MDB9ezF7LH02fSQiLCAiJHg9NTYyeyx9NSQgbSJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 282 166\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles rectangles semblants, cadascun amb un costat vertical i un costat horitzontal, units per una mateixa línia de referència amb la mateixa inclinació.</title><g transform=\"translate(52.00,118.00)\"><line x1=\"0.00\" y1=\"0.00\" x2=\"0.00\" y2=\"-40.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.00\" y1=\"0.00\" x2=\"50.00\" y2=\"0.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.00\" y1=\"-40.00\" x2=\"50.00\" y2=\"0.00\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line x1=\"90.00\" y1=\"0.00\" x2=\"90.00\" y2=\"-88.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90.00\" y1=\"0.00\" x2=\"200.00\" y2=\"0.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90.00\" y1=\"-88.00\" x2=\"200.00\" y2=\"0.00\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><text x=\"-10\" y=\"-16\" text-anchor=\"end\" class=\"fig-etq petita\">1,6 m</text><text x=\"25\" y=\"15\" text-anchor=\"middle\" class=\"fig-etq petita\">2 m</text><text x=\"80\" y=\"-40\" text-anchor=\"end\" class=\"fig-etq petita\">450 m</text><text x=\"145\" y=\"15\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text><text x=\"25\" y=\"34\" text-anchor=\"middle\" class=\"fig-etq petita\">Pere</text><text x=\"145\" y=\"34\" text-anchor=\"middle\" class=\"fig-etq petita\">poble</text></g></svg>"
  },
  {
   "id": "169",
   "ex": 169,
   "ap": "",
   "bloc": "aplicacions",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Un home que té una alçada d'$1{,}75$ m veu reflectit un edifici de $52{,}5$ m sobre un bassal d'aigua que hi ha a $4$ m d'ell. A quina distància del bassal es troba l'edifici?",
   "opcions": [
    "$30$ m",
    "$1{,}75$ m",
    "$120$ m",
    "$210$ m"
   ],
   "pistes": [
    "L'alçada de l'home i la seva distància al bassal formen un triangle semblant al que formen l'edifici i la seva distància al bassal: $\\dfrac{1{,}75}{4}=\\dfrac{52{,}5}{x}$.",
    "Aïlla $x$ multiplicant en creu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igc3VydCBkZSAkNTJ7LH01OjF7LH03NSQgc2Vuc2UgbXVsdGlwbGljYXIgcGVscyAkNCQgbTogcmV2aXNhIGxhIHByb3BvcmNpw7MgJFxcZnJhY3sxeyx9NzV9ezR9PVxcZnJhY3s1MnssfTV9e3h9JCBwYXMgYSBwYXMuIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGQnaW52ZXJ0aXIgbGEgcHJvcG9yY2nDszogcGxhbnRlamEgJFxcZnJhY3sxeyx9NzV9ezR9PVxcZnJhY3s1MnssfTV9e3h9JCwgYW1iIGwnYWzDp2FkYSBkZSBsJ2hvbWUgY29ycmVzcG9uZW50IGEgbGEgc2V2YSBwcsOycGlhIGRpc3TDoG5jaWEgYWwgYmFzc2FsLiIsICIiLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZGUgJDRcXGNkb3Q1MnssfTUkIHNlbnNlIGRpdmlkaXIgcGVyICQxeyx9NzUkOiAkeD1cXGZyYWN7NFxcY2RvdDUyeyx9NX17MXssfTc1fSQsIG5vIG5vbcOpcyBlbCBudW1lcmFkb3IuIl0sICJlcnIiOiBbIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIkNSRVVBTUVOVF9JTlZFUlRJVCIsICIiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyJdLCAicmVzIjogWyIkXFxkZnJhY3sxeyx9NzV9ezR9PVxcZGZyYWN7NTJ7LH01fXt4fSBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9XFxkZnJhY3s0XFxjZG90NTJ7LH01fXsxeyx9NzV9JCIsICIkeD0xMjAkIG0iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 282 127\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles rectangles semblants, cadascun amb un costat vertical i un costat horitzontal, units per una mateixa línia de referència amb la mateixa inclinació.</title><g transform=\"translate(52.00,78.12)\"><line x1=\"0.00\" y1=\"0.00\" x2=\"0.00\" y2=\"-21.88\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.00\" y1=\"0.00\" x2=\"50.00\" y2=\"0.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"0.00\" y1=\"-21.88\" x2=\"50.00\" y2=\"0.00\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line x1=\"90.00\" y1=\"0.00\" x2=\"90.00\" y2=\"-48.12\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90.00\" y1=\"0.00\" x2=\"200.00\" y2=\"0.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90.00\" y1=\"-48.12\" x2=\"200.00\" y2=\"0.00\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><text x=\"-10\" y=\"-6.9375\" text-anchor=\"end\" class=\"fig-etq petita\">1,75 m</text><text x=\"25\" y=\"15\" text-anchor=\"middle\" class=\"fig-etq petita\">4 m</text><text x=\"80\" y=\"-20.0625\" text-anchor=\"end\" class=\"fig-etq petita\">52,5 m</text><text x=\"145\" y=\"15\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text><text x=\"25\" y=\"34\" text-anchor=\"middle\" class=\"fig-etq petita\">home</text><text x=\"145\" y=\"34\" text-anchor=\"middle\" class=\"fig-etq petita\">edifici</text></g></svg>"
  },
  {
   "id": "155c",
   "ex": 155,
   "ap": "c",
   "bloc": "semblanca",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Determina si aquests parells de triangles són semblants, i quin criteri s'aplica en cada cas.",
   "enunciat": "Triangle de costats $5$ cm i $7$ cm; triangle de costats $8$ cm i $12{,}8$ cm (sense conèixer cap angle). Es pot assegurar que són semblants?",
   "opcions": [
    "No, perquè les raons $1{,}6$ i $1{,}829$ no coincideixen",
    "Sí, perquè les raons $1{,}6$ i $1{,}829$ són semblants numèricament",
    "No es pot assegurar amb aquestes dades: les raons $\\frac{8}{5}=1{,}6$ i $\\frac{12{,}8}{7}\\approx1{,}829$ no coincideixen, però a més falta un angle o el tercer costat per aplicar un criteri amb seguretat",
    "Sí, perquè tots dos triangles tenen dos costats coneguts"
   ],
   "pistes": [
    "Amb només dos costats de cada triangle, sense conèixer l'angle comprès, no n'hi ha prou per aplicar cap dels tres criteris de semblança amb seguretat.",
    "Calcula igualment les raons $\\frac{8}{5}$ i $\\frac{12{,}8}{7}$ per veure si almenys descarten la semblança pel criteri costat-angle-costat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBbWIgbm9tw6lzIGRvcyBjb3N0YXRzIGRlIGNhZGEgdHJpYW5nbGUgaSBzZW5zZSBsJ2FuZ2xlIGNvbXByw6hzIG5vIGVzIHBvdCBhcGxpY2FyIGVsIGNyaXRlcmkgY29zdGF0LWFuZ2xlLWNvc3RhdCBhbWIgc2VndXJldGF0OiBmYWx0YSBpbmZvcm1hY2nDsyBwZXIgYWZpcm1hci1obyBPIG5lZ2FyLWhvIGFtYiBhcXVlc3QgY3JpdGVyaS4iLCAiJDF7LH02JCBpICQxeyx9ODI5JCBubyBjb2luY2lkZWl4ZW4sIGkgcGVyIGFwbGljYXIgdW4gY3JpdGVyaSBkZSBzZW1ibGFuw6dhIGNhbGVuIGRhZGVzIHF1ZSBhcXXDrSBmYWx0ZW4gKGwnYW5nbGUgY29tcHLDqHMgbyBlbCB0ZXJjZXIgY29zdGF0KS4iLCAiIiwgIkNvbsOoaXhlciBkb3MgY29zdGF0cyBkZSBjYWRhc2N1biBubyBiYXN0YSBwZXIgYXBsaWNhciBjYXAgZGVscyB0cmVzIGNyaXRlcmlzIGRlIHNlbWJsYW7Dp2E6IGNhbGVuIGVscyB0cmVzIGNvc3RhdHMgKGNyaXRlcmkgY29zdGF0LWNvc3RhdC1jb3N0YXQpIG8gbCdhbmdsZSBjb21wcsOocyAoY3JpdGVyaSBjb3N0YXQtYW5nbGUtY29zdGF0KS4iXSwgImVyciI6IFsiQ1JJVEVSSV9TRU1CTEFOQ0FfSU5TVUZJQ0lFTlQiLCAiQ1JJVEVSSV9TRU1CTEFOQ0FfSU5TVUZJQ0lFTlQiLCAiIiwgIkNSSVRFUklfU0VNQkxBTkNBX0lOU1VGSUNJRU5UIl0sICJyZXMiOiBbIiRcXGRmcmFjezh9ezV9PTF7LH02IFxccXF1YWQgXFxkZnJhY3sxMnssfTh9ezd9XFxhcHByb3gxeyx9ODI5JCIsICJMZXMgcmFvbnMgbm8gY29pbmNpZGVpeGVuLCBwZXLDsiBhbWIgbm9tw6lzIGFxdWVzdGEgaW5mb3JtYWNpw7Mgbm8gZXMgcG90IGFmaXJtYXIgcXVlIHNpZ3VpbiBzZW1ibGFudHM6IGNhbGVuIGVscyB0cmVzIGNvc3RhdHMgbyB1biBhbmdsZSBjb21wcsOocyBwZXIgYXBsaWNhciBhbWIgc2VndXJldGF0IHVuIGNyaXRlcmkgZGUgc2VtYmxhbsOnYS4iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 373 171\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles amb els costats corresponents marcats.</title><g transform=\"translate(31.51,133.68)\"><polygon points=\"0.00,0.00 90.00,0.00 37.80,-70.20\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"172.90,0.00 328.90,0.00 238.42,-121.68\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"45\" y=\"22\" text-anchor=\"middle\" class=\"fig-etq petita\">5 cm</text><text x=\"1.29058\" y=\"-40.582\" text-anchor=\"end\" class=\"fig-etq petita\">7 cm</text><text x=\"250.9\" y=\"22\" text-anchor=\"middle\" class=\"fig-etq petita\">8 cm</text><text x=\"188.051\" y=\"-66.322\" text-anchor=\"end\" class=\"fig-etq petita\">12,8 cm</text></g></svg>"
  },
  {
   "id": "155d",
   "ex": 155,
   "ap": "d",
   "bloc": "semblanca",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Determina si aquests parells de triangles són semblants, i quin criteri s'aplica en cada cas.",
   "enunciat": "Triangle rectangle de catets $3$ cm i $5$ cm; triangle rectangle de catets $10$ cm i $13$ cm. Són semblants?",
   "opcions": [
    "No es pot saber sense calcular les hipotenuses",
    "No, perquè les raons $\\frac{10}{3}\\approx3{,}33$ i $\\frac{13}{5}=2{,}6$ no coincideixen",
    "Sí, perquè tots dos són triangles rectangles",
    "Sí, perquè la hipotenusa és més gran en tots dos casos"
   ],
   "pistes": [
    "En un triangle rectangle, els catets envolten l'angle recte, que és igual als dos triangles: aplica el criteri costat-angle-costat comparant la raó dels catets.",
    "Calcula $\\frac{10}{3}$ i $\\frac{13}{5}$ i compara-les."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbHMgY2F0ZXRzIGphIGVudm9sdGVuIGwnYW5nbGUgcmVjdGUgKGwnYW5nbGUgY29tcHLDqHMsIGlndWFsIGFscyBkb3MgdHJpYW5nbGVzKTogYW1iIGxhIHNldmEgcmHDsyBqYSBuJ2hpIGhhIHByb3UgcGVyIGFwbGljYXIgZWwgY3JpdGVyaSBjb3N0YXQtYW5nbGUtY29zdGF0LCBzZW5zZSBjYWxjdWxhciBjYXAgaGlwb3RlbnVzYS4iLCAiIiwgIlNlciByZWN0YW5nbGUgbm9tw6lzIGZpeGEgdW4gYW5nbGUgZGUgJDkwXlxcY2lyYyQgaWd1YWwgYWxzIGRvcyB0cmlhbmdsZXM7IHBlciBhc3NlZ3VyYXIgbGEgc2VtYmxhbsOnYSBjYWwsIGEgbcOpcywgcXVlIGVscyBjYXRldHMgKHF1ZSBlbnZvbHRlbiBhcXVlc3QgYW5nbGUgcmVjdGUpIHNpZ3VpbiBwcm9wb3JjaW9uYWxzLCBpIGFxdcOtIG5vIGhvIHPDs24uIiwgIlF1ZSBsYSBoaXBvdGVudXNhIHNpZ3VpIGVsIGNvc3RhdCBtw6lzIGdyYW4gw6lzIGNlcnQgZW4gcXVhbHNldm9sIHRyaWFuZ2xlIHJlY3RhbmdsZTsgbm8gZGl1IHJlcyBzb2JyZSBzaSBlbHMgZG9zIHRyaWFuZ2xlcyBjb25jcmV0cyBzw7NuIHByb3BvcmNpb25hbHMgZW50cmUgc2kuIl0sICJlcnIiOiBbIkNSSVRFUklfU0VNQkxBTkNBX0lOU1VGSUNJRU5UIiwgIiIsICJDUklURVJJX1NFTUJMQU5DQV9JTlNVRklDSUVOVCIsICJSQU9fTk9NRVNfVU5fQ09TVEFUIl0sICJyZXMiOiBbIiRcXGRmcmFjezEwfXszfVxcYXBwcm94M3ssfTMzIFxccXF1YWQgXFxkZnJhY3sxM317NX09MnssfTYkIiwgIkNvbSBxdWUgJDN7LH0zM1xcbmUyeyx9NiQsIGVscyB0cmlhbmdsZXMgTk8gc8OzbiBzZW1ibGFudHMgcGVsIGNyaXRlcmkgY29zdGF0LWFuZ2xlLWNvc3RhdCBhbWIgbCdhbmdsZSByZWN0ZSBjb20gYSBhbmdsZSBjb21wcsOocy4iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 512 342\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles amb els costats corresponents marcats.</title><g transform=\"translate(52.80,304.50)\"><polygon points=\"0.00,0.00 90.00,0.00 0.00,-112.50\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"188.31,0.00 447.06,0.00 188.31,-292.50\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"45\" y=\"22\" text-anchor=\"middle\" class=\"fig-etq petita\">3 cm</text><text x=\"-20\" y=\"-52.25\" text-anchor=\"end\" class=\"fig-etq petita\">5 cm</text><text x=\"317.688\" y=\"22\" text-anchor=\"middle\" class=\"fig-etq petita\">10 cm</text><text x=\"168.312\" y=\"-142.25\" text-anchor=\"end\" class=\"fig-etq petita\">13 cm</text><path d=\"M 15.00 0.00 A 15.00 15.00 0 0 0 0.00 -15.00\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><path d=\"M 203.31 0.00 A 15.00 15.00 0 0 0 188.31 -15.00\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/></g></svg>"
  },
  {
   "id": "155e",
   "ex": 155,
   "ap": "e",
   "bloc": "semblanca",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Determina si aquests parells de triangles són semblants, i quin criteri s'aplica en cada cas.",
   "enunciat": "Triangle rectangle amb un angle agut de $50^\\circ$; triangle rectangle amb un angle agut de $40^\\circ$. Són semblants?",
   "opcions": [
    "Sí, però només si a més els costats són proporcionals",
    "No es pot saber sense conèixer els costats",
    "No, perquè els angles aguts donats ($50^\\circ$ i $40^\\circ$) no coincideixen",
    "Sí, pel criteri angle-angle-angle: els dos triangles tenen els mateixos tres angles ($90^\\circ$, $50^\\circ$ i $40^\\circ$)"
   ],
   "pistes": [
    "Calcula el tercer angle de cada triangle: $180^\\circ-90^\\circ-50^\\circ$ i $180^\\circ-90^\\circ-40^\\circ$.",
    "Compara els tres angles de cada triangle un cop calculats tots dos tercers angles."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCBjcml0ZXJpIGFuZ2xlLWFuZ2xlLWFuZ2xlIMOpcyBzdWZpY2llbnQgcGVyIHNpIHNvbDogc2kgZWxzIHRyZXMgYW5nbGVzIGNvaW5jaWRlaXhlbiwgZWxzIHRyaWFuZ2xlcyBqYSBzw7NuIHNlbWJsYW50cywgc2Vuc2UgbmVjZXNzaXRhdCBkZSBjb21wcm92YXIgZWxzIGNvc3RhdHMgYSBwYXJ0LiIsICJBbWIgZWxzIHRyZXMgYW5nbGVzIGRlIGNhZGEgdHJpYW5nbGUgKHVuIGNvcCBjYWxjdWxhdCBlbCB0ZXJjZXIpIGphIG4naGkgaGEgcHJvdSBwZXIgYXBsaWNhciBlbCBjcml0ZXJpIGFuZ2xlLWFuZ2xlLWFuZ2xlOiBubyBjYWxlbiBlbHMgY29zdGF0cy4iLCAiQ2FsIGNhbGN1bGFyIGVsIFRFUkNFUiBhbmdsZSBkZSBjYWRhIHRyaWFuZ2xlIGFiYW5zIGRlIGNvbmNsb3VyZSByZXM6ICQxODBeXFxjaXJjLTkwXlxcY2lyYy01MF5cXGNpcmM9NDBeXFxjaXJjJCBpICQxODBeXFxjaXJjLTkwXlxcY2lyYy00MF5cXGNpcmM9NTBeXFxjaXJjJCwgYWl4w60gcXVlIGVuIHJlYWxpdGF0IGVscyBkb3MgdHJpYW5nbGVzIHRlbmVuIGVscyBtYXRlaXhvcyB0cmVzIGFuZ2xlcy4iLCAiIl0sICJlcnIiOiBbIkNSSVRFUklfU0VNQkxBTkNBX0lOU1VGSUNJRU5UIiwgIkNSSVRFUklfU0VNQkxBTkNBX0lOU1VGSUNJRU5UIiwgIkNSSVRFUklfU0VNQkxBTkNBX0lOU1VGSUNJRU5UIiwgIiJdLCAicmVzIjogWyJUcmlhbmdsZSBhbWIgYW5nbGUgYWd1dCBkZSAkNTBeXFxjaXJjJDogdMOpIGFuZ2xlcyAkOTBeXFxjaXJjJCwgJDUwXlxcY2lyYyQgaSAkMTgwXlxcY2lyYy05MF5cXGNpcmMtNTBeXFxjaXJjPTQwXlxcY2lyYyQuIiwgIlRyaWFuZ2xlIGFtYiBhbmdsZSBhZ3V0IGRlICQ0MF5cXGNpcmMkOiB0w6kgYW5nbGVzICQ5MF5cXGNpcmMkLCAkNDBeXFxjaXJjJCBpICQxODBeXFxjaXJjLTkwXlxcY2lyYy00MF5cXGNpcmM9NTBeXFxjaXJjJC4iLCAiRWxzIGRvcyB0cmlhbmdsZXMgdGVuZW4gZWxzIG1hdGVpeG9zIHRyZXMgYW5nbGVzOiBTw40gc8OzbiBzZW1ibGFudHMsIHBlbCBjcml0ZXJpIGFuZ2xlLWFuZ2xlLWFuZ2xlLiJdfQ=="
  },
  {
   "id": "285a",
   "ex": 285,
   "ap": "a",
   "bloc": "escales_calcul",
   "tipus": "B",
   "dif": 1,
   "encapcalament": "Què vol dir aquesta escala?",
   "enunciat": "Escala $1:50$.",
   "opcions": [
    "$1$ cm al plànol són $50$ m de debò.",
    "$1$ cm al plànol són $50$ cm de debò.",
    "$50$ cm al plànol són $1$ cm de debò.",
    "El dibuix és $50$ vegades més gran que la realitat."
   ],
   "pistes": [
    "A l'escala $a:b$, el primer nombre és el dibuix i el segon, la realitat.",
    "Les dues mesures van en la mateixa unitat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMJ2VzY2FsYSByZWxhY2lvbmEgbWVzdXJlcyBlbiBsYSBNQVRFSVhBIHVuaXRhdDogJDEkIGNtIGRlIHBsw6Bub2wgc8OzbiAkNTAkIGNtIGRlIHJlYWxpdGF0LCBxdWUgZGVzcHLDqXMgZXMgcG9kZW4gcGFzc2FyIGEgbWV0cmVzIHNpIGNvbnbDqSAoJDUweyx9MDAgY20kKS4iLCAiIiwgIsOJcyBhbCByZXbDqXMuIEEgbCdlc2NhbGEgJDE6NTAkLCBlbCAkMSQgw6lzIGVsIHF1ZSBoaSBoYSBESUJVSVhBVCBpIGVsICQ1MCQgw6lzIGxhIHJlYWxpdGF0OiBlbCBkaWJ1aXggw6lzIG3DqXMgcGV0aXQgcXVlIGwnb3JpZ2luYWwuIiwgIlVuYSBlc2NhbGEgJDE6NTAkIMOpcyBkZSBSRURVQ0NJw5M6IGVsIGRpYnVpeCDDqXMgbcOpcyBwZXRpdC4gUGVycXXDqCBmb3MgZCdhbXBsaWFjacOzLCBlbCBwcmltZXIgbm9tYnJlIGhhdXJpYSBkZSBzZXIgZWwgbcOpcyBncmFuICgkNTA6MSQpLiJdLCAiZXJyIjogWyJVTklUQVRTX05PX0NPTlZFUlRJREVTIiwgIiIsICJFU0NBTEFfSU5WRVJUSURBIiwgIkVTQ0FMQV9JTlZFUlRJREEiXSwgInJlcyI6IFsiJDE6NTAkIHZvbCBkaXIgcXVlIGNhZGEgJDEkIGNtIGRlbCBkaWJ1aXggY29ycmVzcG9uIGEgJDUwJCBjbSByZWFscyIsICLDiXMgYSBkaXIsICQ1MHssfTAwIGNtJCBkZSBkZWLDsiJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 216 76\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Regla d'escala gràfica: cada interval del dibuix, de 1 cm, representa 50 cm de la realitat.</title><rect x=\"20.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><rect x=\"108.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><line x1=\"20.00\" y1=\"18.00\" x2=\"20.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"64.00\" y1=\"18.00\" x2=\"64.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"108.00\" y1=\"18.00\" x2=\"108.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"152.00\" y1=\"18.00\" x2=\"152.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"196.00\" y1=\"18.00\" x2=\"196.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"20.00\" y1=\"30.00\" x2=\"196.00\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"20\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">0</text><text x=\"64\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">1 cm</text><text x=\"108\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">2 cm</text><text x=\"152\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">3 cm</text><text x=\"196\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">4 cm</text><text x=\"98\" y=\"8\" text-anchor=\"middle\" class=\"fig-etq petita\">cada interval = 50 cm</text></svg>"
  },
  {
   "id": "285b",
   "ex": 285,
   "ap": "b",
   "bloc": "escales_calcul",
   "tipus": "B",
   "dif": 1,
   "encapcalament": "Què vol dir aquesta escala?",
   "enunciat": "Escala $1:25\\,000$.",
   "opcions": [
    "$1$ cm al plànol són $25000$ cm de debò.",
    "$25000$ cm al plànol són $1$ cm de debò.",
    "$1$ cm al plànol són $25000$ m de debò.",
    "El dibuix és $25000$ vegades més gran que la realitat."
   ],
   "pistes": [
    "A l'escala $a:b$, el primer nombre és el dibuix i el segon, la realitat.",
    "Les dues mesures van en la mateixa unitat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiw4lzIGFsIHJldsOpcy4gQSBsJ2VzY2FsYSAkMToyNTAwMCQsIGVsICQxJCDDqXMgZWwgcXVlIGhpIGhhIERJQlVJWEFUIGkgZWwgJDI1MDAwJCDDqXMgbGEgcmVhbGl0YXQ6IGVsIGRpYnVpeCDDqXMgbcOpcyBwZXRpdCBxdWUgbCdvcmlnaW5hbC4iLCAiTCdlc2NhbGEgcmVsYWNpb25hIG1lc3VyZXMgZW4gbGEgTUFURUlYQSB1bml0YXQ6ICQxJCBjbSBkZSBwbMOgbm9sIHPDs24gJDI1MDAwJCBjbSBkZSByZWFsaXRhdCwgcXVlIGRlc3Byw6lzIGVzIHBvZGVuIHBhc3NhciBhIG1ldHJlcyBzaSBjb252w6kgKCQyNTB7LH0wMCBtJCkuIiwgIlVuYSBlc2NhbGEgJDE6MjUwMDAkIMOpcyBkZSBSRURVQ0NJw5M6IGVsIGRpYnVpeCDDqXMgbcOpcyBwZXRpdC4gUGVycXXDqCBmb3MgZCdhbXBsaWFjacOzLCBlbCBwcmltZXIgbm9tYnJlIGhhdXJpYSBkZSBzZXIgZWwgbcOpcyBncmFuICgkMjUwMDA6MSQpLiJdLCAiZXJyIjogWyIiLCAiRVNDQUxBX0lOVkVSVElEQSIsICJVTklUQVRTX05PX0NPTlZFUlRJREVTIiwgIkVTQ0FMQV9JTlZFUlRJREEiXSwgInJlcyI6IFsiJDE6MjUwMDAkIHZvbCBkaXIgcXVlIGNhZGEgJDEkIGNtIGRlbCBkaWJ1aXggY29ycmVzcG9uIGEgJDI1MDAwJCBjbSByZWFscyIsICLDiXMgYSBkaXIsICQyNTB7LH0wMCBtJCBkZSBkZWLDsiJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 216 76\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Regla d'escala gràfica: cada interval del dibuix, de 1 cm, representa 250 m de la realitat.</title><rect x=\"20.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><rect x=\"108.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><line x1=\"20.00\" y1=\"18.00\" x2=\"20.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"64.00\" y1=\"18.00\" x2=\"64.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"108.00\" y1=\"18.00\" x2=\"108.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"152.00\" y1=\"18.00\" x2=\"152.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"196.00\" y1=\"18.00\" x2=\"196.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"20.00\" y1=\"30.00\" x2=\"196.00\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"20\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">0</text><text x=\"64\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">1 cm</text><text x=\"108\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">2 cm</text><text x=\"152\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">3 cm</text><text x=\"196\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">4 cm</text><text x=\"98\" y=\"8\" text-anchor=\"middle\" class=\"fig-etq petita\">cada interval = 250 m</text></svg>"
  },
  {
   "id": "285c",
   "ex": 285,
   "ap": "c",
   "bloc": "escales_calcul",
   "tipus": "B",
   "dif": 1,
   "encapcalament": "Què vol dir aquesta escala?",
   "enunciat": "Escala $1:200$.",
   "opcions": [
    "$1$ cm al plànol són $200$ m de debò.",
    "$200$ cm al plànol són $1$ cm de debò.",
    "$1$ cm al plànol són $200$ cm de debò.",
    "El dibuix és $200$ vegades més gran que la realitat."
   ],
   "pistes": [
    "A l'escala $a:b$, el primer nombre és el dibuix i el segon, la realitat.",
    "Les dues mesures van en la mateixa unitat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJMJ2VzY2FsYSByZWxhY2lvbmEgbWVzdXJlcyBlbiBsYSBNQVRFSVhBIHVuaXRhdDogJDEkIGNtIGRlIHBsw6Bub2wgc8OzbiAkMjAwJCBjbSBkZSByZWFsaXRhdCwgcXVlIGRlc3Byw6lzIGVzIHBvZGVuIHBhc3NhciBhIG1ldHJlcyBzaSBjb252w6kgKCQyeyx9MDAgbSQpLiIsICLDiXMgYWwgcmV2w6lzLiBBIGwnZXNjYWxhICQxOjIwMCQsIGVsICQxJCDDqXMgZWwgcXVlIGhpIGhhIERJQlVJWEFUIGkgZWwgJDIwMCQgw6lzIGxhIHJlYWxpdGF0OiBlbCBkaWJ1aXggw6lzIG3DqXMgcGV0aXQgcXVlIGwnb3JpZ2luYWwuIiwgIiIsICJVbmEgZXNjYWxhICQxOjIwMCQgw6lzIGRlIFJFRFVDQ0nDkzogZWwgZGlidWl4IMOpcyBtw6lzIHBldGl0LiBQZXJxdcOoIGZvcyBkJ2FtcGxpYWNpw7MsIGVsIHByaW1lciBub21icmUgaGF1cmlhIGRlIHNlciBlbCBtw6lzIGdyYW4gKCQyMDA6MSQpLiJdLCAiZXJyIjogWyJVTklUQVRTX05PX0NPTlZFUlRJREVTIiwgIkVTQ0FMQV9JTlZFUlRJREEiLCAiIiwgIkVTQ0FMQV9JTlZFUlRJREEiXSwgInJlcyI6IFsiJDE6MjAwJCB2b2wgZGlyIHF1ZSBjYWRhICQxJCBjbSBkZWwgZGlidWl4IGNvcnJlc3BvbiBhICQyMDAkIGNtIHJlYWxzIiwgIsOJcyBhIGRpciwgJDJ7LH0wMCBtJCBkZSBkZWLDsiJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 216 76\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Regla d'escala gràfica: cada interval del dibuix, de 1 cm, representa 2 m de la realitat.</title><rect x=\"20.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><rect x=\"108.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><line x1=\"20.00\" y1=\"18.00\" x2=\"20.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"64.00\" y1=\"18.00\" x2=\"64.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"108.00\" y1=\"18.00\" x2=\"108.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"152.00\" y1=\"18.00\" x2=\"152.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"196.00\" y1=\"18.00\" x2=\"196.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"20.00\" y1=\"30.00\" x2=\"196.00\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"20\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">0</text><text x=\"64\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">1 cm</text><text x=\"108\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">2 cm</text><text x=\"152\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">3 cm</text><text x=\"196\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">4 cm</text><text x=\"98\" y=\"8\" text-anchor=\"middle\" class=\"fig-etq petita\">cada interval = 2 m</text></svg>"
  },
  {
   "id": "286a",
   "ex": 286,
   "ap": "a",
   "bloc": "escales_calcul",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Un plànol està fet a escala $1:25\\,000$. Quina distància real correspon a cada mesura del plànol?",
   "enunciat": "$4$ cm al plànol.",
   "opcions": [
    "$0{,}000160$ km",
    "$0{,}00100$ km",
    "$1000{,}0$ m",
    "$1$ km"
   ],
   "pistes": [
    "Multiplica la mesura del plànol per $25\\,000$: dona centímetres reals.",
    "Després passa'ls a quilòmetres dividint entre $100\\,000$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgZGl2aWRpdCBwZXIgbCdlc2NhbGEgZW4gY29tcHRlcyBkZSBtdWx0aXBsaWNhci4gQ29tIHF1ZSBlbCBwbMOgbm9sIMOpcyB1bmEgcmVkdWNjacOzLCBsYSBkaXN0w6BuY2lhIHJlYWwgaGEgZGUgc2VyIE3DiVMgZ3JhbiBxdWUgbGEgZGVsIHBsw6Bub2wuIiwgIkhhcyBkZXNwbGHDp2F0IG1hbGFtZW50IGxhIGNvbWEgZW4gcGFzc2FyIGRlIGNlbnTDrW1ldHJlcyBhIHF1aWzDsm1ldHJlcy4gUmVjb3JkYTogJDEkIGttICQ9MTAwXFwsMDAwJCBjbS4iLCAiRWwgdmFsb3Igw6lzIGNvcnJlY3RlIGVuIGNlbnTDrW1ldHJlcywgcGVyw7IgbGEgY29udmVyc2nDsyBubzogJDEwMDAwMCQgY20gc8OzbiAkMTAwMHssfTAkIG0sIGkgYWl4w7Igc8OzbiAkMXssfTAwMCQga20uIiwgIiJdLCAiZXJyIjogWyJFU0NBTEFfSU5WRVJUSURBIiwgIlBPVEVOQ0lBXzEwIiwgIlVOSVRBVFNfTk9fQ09OVkVSVElERVMiLCAiIl0sICJyZXMiOiBbIiQ0XFxjZG90MjUwMDA9MTAwMDAwJCBjbSIsICIkXFxkZnJhY3sxMDAwMDB9ezEwMDAwMH09MSQga20iXX0="
  },
  {
   "id": "286b",
   "ex": 286,
   "ap": "b",
   "bloc": "escales_calcul",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Un plànol està fet a escala $1:25\\,000$. Quina distància real correspon a cada mesura del plànol?",
   "enunciat": "$12$ cm al plànol.",
   "opcions": [
    "$0{,}00300$ km",
    "$3$ km",
    "$3000{,}0$ m",
    "$0{,}000480$ km"
   ],
   "pistes": [
    "Multiplica la mesura del plànol per $25\\,000$: dona centímetres reals.",
    "Després passa'ls a quilòmetres dividint entre $100\\,000$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgZGVzcGxhw6dhdCBtYWxhbWVudCBsYSBjb21hIGVuIHBhc3NhciBkZSBjZW50w61tZXRyZXMgYSBxdWlsw7JtZXRyZXMuIFJlY29yZGE6ICQxJCBrbSAkPTEwMFxcLDAwMCQgY20uIiwgIiIsICJFbCB2YWxvciDDqXMgY29ycmVjdGUgZW4gY2VudMOtbWV0cmVzLCBwZXLDsiBsYSBjb252ZXJzacOzIG5vOiAkMzAwMDAwJCBjbSBzw7NuICQzMDAweyx9MCQgbSwgaSBhaXjDsiBzw7NuICQzeyx9MDAwJCBrbS4iLCAiSGFzIGRpdmlkaXQgcGVyIGwnZXNjYWxhIGVuIGNvbXB0ZXMgZGUgbXVsdGlwbGljYXIuIENvbSBxdWUgZWwgcGzDoG5vbCDDqXMgdW5hIHJlZHVjY2nDsywgbGEgZGlzdMOgbmNpYSByZWFsIGhhIGRlIHNlciBNw4lTIGdyYW4gcXVlIGxhIGRlbCBwbMOgbm9sLiJdLCAiZXJyIjogWyJQT1RFTkNJQV8xMCIsICIiLCAiVU5JVEFUU19OT19DT05WRVJUSURFUyIsICJFU0NBTEFfSU5WRVJUSURBIl0sICJyZXMiOiBbIiQxMlxcY2RvdDI1MDAwPTMwMDAwMCQgY20iLCAiJFxcZGZyYWN7MzAwMDAwfXsxMDAwMDB9PTMkIGttIl19"
  },
  {
   "id": "286c",
   "ex": 286,
   "ap": "c",
   "bloc": "escales_calcul",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Un plànol està fet a escala $1:25\\,000$. Quina distància real correspon a cada mesura del plànol?",
   "enunciat": "$2{,}5$ cm al plànol.",
   "opcions": [
    "$625{,}0$ m",
    "$0{,}625$ km",
    "$0{,}00063$ km",
    "$0{,}000100$ km"
   ],
   "pistes": [
    "Multiplica la mesura del plànol per $25\\,000$: dona centímetres reals.",
    "Després passa'ls a quilòmetres dividint entre $100\\,000$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCB2YWxvciDDqXMgY29ycmVjdGUgZW4gY2VudMOtbWV0cmVzLCBwZXLDsiBsYSBjb252ZXJzacOzIG5vOiAkNjI1MDAkIGNtIHPDs24gJDYyNXssfTAkIG0sIGkgYWl4w7Igc8OzbiAkMHssfTYyNSQga20uIiwgIiIsICJIYXMgZGVzcGxhw6dhdCBtYWxhbWVudCBsYSBjb21hIGVuIHBhc3NhciBkZSBjZW50w61tZXRyZXMgYSBxdWlsw7JtZXRyZXMuIFJlY29yZGE6ICQxJCBrbSAkPTEwMFxcLDAwMCQgY20uIiwgIkhhcyBkaXZpZGl0IHBlciBsJ2VzY2FsYSBlbiBjb21wdGVzIGRlIG11bHRpcGxpY2FyLiBDb20gcXVlIGVsIHBsw6Bub2wgw6lzIHVuYSByZWR1Y2Npw7MsIGxhIGRpc3TDoG5jaWEgcmVhbCBoYSBkZSBzZXIgTcOJUyBncmFuIHF1ZSBsYSBkZWwgcGzDoG5vbC4iXSwgImVyciI6IFsiVU5JVEFUU19OT19DT05WRVJUSURFUyIsICIiLCAiUE9URU5DSUFfMTAiLCAiRVNDQUxBX0lOVkVSVElEQSJdLCAicmVzIjogWyIkMi41XFxjZG90MjUwMDA9NjI1MDAkIGNtIiwgIiRcXGRmcmFjezYyNTAwfXsxMDAwMDB9PTB7LH02MjUkIGttIl19"
  },
  {
   "id": "286d",
   "ex": 286,
   "ap": "d",
   "bloc": "escales_calcul",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Un plànol està fet a escala $1:25\\,000$. Quina distància real correspon a cada mesura del plànol?",
   "enunciat": "$30$ cm al plànol.",
   "opcions": [
    "$0{,}00750$ km",
    "$0{,}001200$ km",
    "$7500{,}0$ m",
    "$7{,}5$ km"
   ],
   "pistes": [
    "Multiplica la mesura del plànol per $25\\,000$: dona centímetres reals.",
    "Després passa'ls a quilòmetres dividint entre $100\\,000$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgZGVzcGxhw6dhdCBtYWxhbWVudCBsYSBjb21hIGVuIHBhc3NhciBkZSBjZW50w61tZXRyZXMgYSBxdWlsw7JtZXRyZXMuIFJlY29yZGE6ICQxJCBrbSAkPTEwMFxcLDAwMCQgY20uIiwgIkhhcyBkaXZpZGl0IHBlciBsJ2VzY2FsYSBlbiBjb21wdGVzIGRlIG11bHRpcGxpY2FyLiBDb20gcXVlIGVsIHBsw6Bub2wgw6lzIHVuYSByZWR1Y2Npw7MsIGxhIGRpc3TDoG5jaWEgcmVhbCBoYSBkZSBzZXIgTcOJUyBncmFuIHF1ZSBsYSBkZWwgcGzDoG5vbC4iLCAiRWwgdmFsb3Igw6lzIGNvcnJlY3RlIGVuIGNlbnTDrW1ldHJlcywgcGVyw7IgbGEgY29udmVyc2nDsyBubzogJDc1MDAwMCQgY20gc8OzbiAkNzUwMHssfTAkIG0sIGkgYWl4w7Igc8OzbiAkN3ssfTUwMCQga20uIiwgIiJdLCAiZXJyIjogWyJQT1RFTkNJQV8xMCIsICJFU0NBTEFfSU5WRVJUSURBIiwgIlVOSVRBVFNfTk9fQ09OVkVSVElERVMiLCAiIl0sICJyZXMiOiBbIiQzMFxcY2RvdDI1MDAwPTc1MDAwMCQgY20iLCAiJFxcZGZyYWN7NzUwMDAwfXsxMDAwMDB9PTd7LH01JCBrbSJdfQ=="
  },
  {
   "id": "287a",
   "ex": 287,
   "ap": "a",
   "bloc": "escales_calcul",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Un arquitecte dibuixa un plànol a escala $1:200$. Quina mesura ha de fer servir al plànol?",
   "enunciat": "Una paret de $8$ m.",
   "opcions": [
    "$160000$ cm",
    "$4$ cm",
    "$4$ m",
    "$0{,}0400$ cm"
   ],
   "pistes": [
    "Passa la mesura real a centímetres.",
    "Divideix-la entre $200$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgbXVsdGlwbGljYXQgcGVyICQyMDAkLiBQZXIgYW5hciBkZSBsYSByZWFsaXRhdCBhbCBwbMOgbm9sIGNhbCBESVZJRElSOiBlbCBkaWJ1aXggw6lzIG3DqXMgcGV0aXQuIiwgIiIsICJFbCBuw7ptZXJvIMOpcyBjb3JyZWN0ZSwgcGVyw7IgbGVzIHVuaXRhdHMgbm86IGFsIHBsw6Bub2wgZXMgZGlidWl4ZW4gY2VudMOtbWV0cmVzLCBubyBtZXRyZXMuIiwgIkhhcyBkaXZpZGl0IGVscyBtZXRyZXMgZGlyZWN0YW1lbnQuIFByaW1lciBjYWwgcGFzc2FyLWxvcyBhIGNlbnTDrW1ldHJlczogJDgkIG0gJD04MDAkIGNtLiJdLCAiZXJyIjogWyJFU0NBTEFfSU5WRVJUSURBIiwgIiIsICJVTklUQVRTX05PX0NPTlZFUlRJREVTIiwgIlVOSVRBVFNfTk9fQ09OVkVSVElERVMiXSwgInJlcyI6IFsiJDgkIG0gJD04MDAkIGNtIiwgIiRcXGRmcmFjezgwMH17MjAwfT00JCBjbSJdfQ=="
  },
  {
   "id": "287b",
   "ex": 287,
   "ap": "b",
   "bloc": "escales_calcul",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Un arquitecte dibuixa un plànol a escala $1:200$. Quina mesura ha de fer servir al plànol?",
   "enunciat": "Una paret de $14$ m.",
   "opcions": [
    "$7$ m",
    "$0{,}0700$ cm",
    "$280000$ cm",
    "$7$ cm"
   ],
   "pistes": [
    "Passa la mesura real a centímetres.",
    "Divideix-la entre $200$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCBuw7ptZXJvIMOpcyBjb3JyZWN0ZSwgcGVyw7IgbGVzIHVuaXRhdHMgbm86IGFsIHBsw6Bub2wgZXMgZGlidWl4ZW4gY2VudMOtbWV0cmVzLCBubyBtZXRyZXMuIiwgIkhhcyBkaXZpZGl0IGVscyBtZXRyZXMgZGlyZWN0YW1lbnQuIFByaW1lciBjYWwgcGFzc2FyLWxvcyBhIGNlbnTDrW1ldHJlczogJDE0JCBtICQ9MTQwMCQgY20uIiwgIkhhcyBtdWx0aXBsaWNhdCBwZXIgJDIwMCQuIFBlciBhbmFyIGRlIGxhIHJlYWxpdGF0IGFsIHBsw6Bub2wgY2FsIERJVklESVI6IGVsIGRpYnVpeCDDqXMgbcOpcyBwZXRpdC4iLCAiIl0sICJlcnIiOiBbIlVOSVRBVFNfTk9fQ09OVkVSVElERVMiLCAiVU5JVEFUU19OT19DT05WRVJUSURFUyIsICJFU0NBTEFfSU5WRVJUSURBIiwgIiJdLCAicmVzIjogWyIkMTQkIG0gJD0xNDAwJCBjbSIsICIkXFxkZnJhY3sxNDAwfXsyMDB9PTckIGNtIl19"
  },
  {
   "id": "287c",
   "ex": 287,
   "ap": "c",
   "bloc": "escales_calcul",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Un arquitecte dibuixa un plànol a escala $1:200$. Quina mesura ha de fer servir al plànol?",
   "enunciat": "Una paret de $2.4$ m.",
   "opcions": [
    "$1{,}2$ cm",
    "$1{,}2$ m",
    "$48000$ cm",
    "$0{,}0120$ cm"
   ],
   "pistes": [
    "Passa la mesura real a centímetres.",
    "Divideix-la entre $200$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgbsO6bWVybyDDqXMgY29ycmVjdGUsIHBlcsOyIGxlcyB1bml0YXRzIG5vOiBhbCBwbMOgbm9sIGVzIGRpYnVpeGVuIGNlbnTDrW1ldHJlcywgbm8gbWV0cmVzLiIsICJIYXMgbXVsdGlwbGljYXQgcGVyICQyMDAkLiBQZXIgYW5hciBkZSBsYSByZWFsaXRhdCBhbCBwbMOgbm9sIGNhbCBESVZJRElSOiBlbCBkaWJ1aXggw6lzIG3DqXMgcGV0aXQuIiwgIkhhcyBkaXZpZGl0IGVscyBtZXRyZXMgZGlyZWN0YW1lbnQuIFByaW1lciBjYWwgcGFzc2FyLWxvcyBhIGNlbnTDrW1ldHJlczogJDIuNCQgbSAkPTI0MCQgY20uIl0sICJlcnIiOiBbIiIsICJVTklUQVRTX05PX0NPTlZFUlRJREVTIiwgIkVTQ0FMQV9JTlZFUlRJREEiLCAiVU5JVEFUU19OT19DT05WRVJUSURFUyJdLCAicmVzIjogWyIkMi40JCBtICQ9MjQwJCBjbSIsICIkXFxkZnJhY3syNDB9ezIwMH09MXssfTIkIGNtIl19"
  },
  {
   "id": "288a",
   "ex": 288,
   "ap": "a",
   "bloc": "escales_calcul",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Troba l'escala del dibuix.",
   "enunciat": "$4$ cm al dibuix corresponen a $2$ m de debò.",
   "opcions": [
    "$1:50$",
    "$1:200$",
    "$50:1$",
    "$1:0{,}50$"
   ],
   "pistes": [
    "Passa les dues mesures a la mateixa unitat, normalment centímetres.",
    "Divideix la mesura real entre la del dibuix."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0YSDDqXMgbGEgbWVzdXJhIHJlYWwgZW4gY2VudMOtbWV0cmVzLCBubyBsJ2VzY2FsYS4gTCdlc2NhbGEgc3VydCBkZSBkaXZpZGlyLWxhIGVudHJlIGxhIG1lc3VyYSBkZWwgZGlidWl4LiIsICJMJ2hhcyBlc2NyaXRhIGRlbCByZXbDqXMuIEEgbCdlc2NhbGEsIGVsIHByaW1lciBub21icmUgw6lzIGVsIERJQlVJWCAocXVlIGFxdcOtIMOpcyBtw6lzIHBldGl0KSBpIGVsIHNlZ29uLCBsYSByZWFsaXRhdC4iLCAiSGFzIGNvbXBhcmF0ICQ0JCBhbWIgJDIkIHNlbnNlIHBhc3Nhci1obyB0b3QgYSBsYSBtYXRlaXhhIHVuaXRhdC4gJDIkIG0gc8OzbiAkMjAwJCBjbS4iXSwgImVyciI6IFsiIiwgIkRJVklTSU9fT0JMSURBREEiLCAiRVNDQUxBX0lOVkVSVElEQSIsICJVTklUQVRTX05PX0NPTlZFUlRJREVTIl0sICJyZXMiOiBbIiQyJCBtICQ9MjAwJCBjbSIsICIkXFxkZnJhY3syMDB9ezR9PTUwJCwgbyBzaWd1aSBlc2NhbGEgJDE6NTAkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 216 76\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Regla d'escala gràfica: cada interval del dibuix, de 4 cm, representa 2 m de la realitat.</title><rect x=\"20.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><rect x=\"108.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><line x1=\"20.00\" y1=\"18.00\" x2=\"20.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"64.00\" y1=\"18.00\" x2=\"64.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"108.00\" y1=\"18.00\" x2=\"108.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"152.00\" y1=\"18.00\" x2=\"152.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"196.00\" y1=\"18.00\" x2=\"196.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"20.00\" y1=\"30.00\" x2=\"196.00\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"20\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">0</text><text x=\"64\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">4 cm</text><text x=\"108\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">8 cm</text><text x=\"152\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">12 cm</text><text x=\"196\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">16 cm</text><text x=\"98\" y=\"8\" text-anchor=\"middle\" class=\"fig-etq petita\">cada interval = 2 m</text></svg>"
  },
  {
   "id": "288b",
   "ex": 288,
   "ap": "b",
   "bloc": "escales_calcul",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Troba l'escala del dibuix.",
   "enunciat": "$3$ cm al dibuix corresponen a $12$ m de debò.",
   "opcions": [
    "$1:1200$",
    "$400:1$",
    "$1:400$",
    "$1:4{,}00$"
   ],
   "pistes": [
    "Passa les dues mesures a la mateixa unitat, normalment centímetres.",
    "Divideix la mesura real entre la del dibuix."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3RhIMOpcyBsYSBtZXN1cmEgcmVhbCBlbiBjZW50w61tZXRyZXMsIG5vIGwnZXNjYWxhLiBMJ2VzY2FsYSBzdXJ0IGRlIGRpdmlkaXItbGEgZW50cmUgbGEgbWVzdXJhIGRlbCBkaWJ1aXguIiwgIkwnaGFzIGVzY3JpdGEgZGVsIHJldsOpcy4gQSBsJ2VzY2FsYSwgZWwgcHJpbWVyIG5vbWJyZSDDqXMgZWwgRElCVUlYIChxdWUgYXF1w60gw6lzIG3DqXMgcGV0aXQpIGkgZWwgc2Vnb24sIGxhIHJlYWxpdGF0LiIsICIiLCAiSGFzIGNvbXBhcmF0ICQzJCBhbWIgJDEyJCBzZW5zZSBwYXNzYXItaG8gdG90IGEgbGEgbWF0ZWl4YSB1bml0YXQuICQxMiQgbSBzw7NuICQxMjAwJCBjbS4iXSwgImVyciI6IFsiRElWSVNJT19PQkxJREFEQSIsICJFU0NBTEFfSU5WRVJUSURBIiwgIiIsICJVTklUQVRTX05PX0NPTlZFUlRJREVTIl0sICJyZXMiOiBbIiQxMiQgbSAkPTEyMDAkIGNtIiwgIiRcXGRmcmFjezEyMDB9ezN9PTQwMCQsIG8gc2lndWkgZXNjYWxhICQxOjQwMCQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 216 76\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Regla d'escala gràfica: cada interval del dibuix, de 3 cm, representa 12 m de la realitat.</title><rect x=\"20.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><rect x=\"108.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><line x1=\"20.00\" y1=\"18.00\" x2=\"20.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"64.00\" y1=\"18.00\" x2=\"64.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"108.00\" y1=\"18.00\" x2=\"108.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"152.00\" y1=\"18.00\" x2=\"152.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"196.00\" y1=\"18.00\" x2=\"196.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"20.00\" y1=\"30.00\" x2=\"196.00\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"20\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">0</text><text x=\"64\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">3 cm</text><text x=\"108\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">6 cm</text><text x=\"152\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">9 cm</text><text x=\"196\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">12 cm</text><text x=\"98\" y=\"8\" text-anchor=\"middle\" class=\"fig-etq petita\">cada interval = 12 m</text></svg>"
  },
  {
   "id": "288c",
   "ex": 288,
   "ap": "c",
   "bloc": "escales_calcul",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Troba l'escala del dibuix.",
   "enunciat": "$8$ cm al dibuix corresponen a $4$ km de debò.",
   "opcions": [
    "$1:50000$",
    "$50000:1$",
    "$1:0{,}50$",
    "$1:400000$"
   ],
   "pistes": [
    "Passa les dues mesures a la mateixa unitat, normalment centímetres.",
    "Divideix la mesura real entre la del dibuix."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiTCdoYXMgZXNjcml0YSBkZWwgcmV2w6lzLiBBIGwnZXNjYWxhLCBlbCBwcmltZXIgbm9tYnJlIMOpcyBlbCBESUJVSVggKHF1ZSBhcXXDrSDDqXMgbcOpcyBwZXRpdCkgaSBlbCBzZWdvbiwgbGEgcmVhbGl0YXQuIiwgIkhhcyBjb21wYXJhdCAkOCQgYW1iICQ0JCBzZW5zZSBwYXNzYXItaG8gdG90IGEgbGEgbWF0ZWl4YSB1bml0YXQuICQ0JCBrbSBzw7NuICQ0MDAwMDAkIGNtLiIsICJBcXVlc3RhIMOpcyBsYSBtZXN1cmEgcmVhbCBlbiBjZW50w61tZXRyZXMsIG5vIGwnZXNjYWxhLiBMJ2VzY2FsYSBzdXJ0IGRlIGRpdmlkaXItbGEgZW50cmUgbGEgbWVzdXJhIGRlbCBkaWJ1aXguIl0sICJlcnIiOiBbIiIsICJFU0NBTEFfSU5WRVJUSURBIiwgIlVOSVRBVFNfTk9fQ09OVkVSVElERVMiLCAiRElWSVNJT19PQkxJREFEQSJdLCAicmVzIjogWyIkNCQga20gJD00MDAwMDAkIGNtIiwgIiRcXGRmcmFjezQwMDAwMH17OH09NTAwMDAkLCBvIHNpZ3VpIGVzY2FsYSAkMTo1MDAwMCQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 216 76\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Regla d'escala gràfica: cada interval del dibuix, de 8 cm, representa 4 km de la realitat.</title><rect x=\"20.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><rect x=\"108.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><line x1=\"20.00\" y1=\"18.00\" x2=\"20.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"64.00\" y1=\"18.00\" x2=\"64.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"108.00\" y1=\"18.00\" x2=\"108.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"152.00\" y1=\"18.00\" x2=\"152.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"196.00\" y1=\"18.00\" x2=\"196.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"20.00\" y1=\"30.00\" x2=\"196.00\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"20\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">0</text><text x=\"64\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">8 cm</text><text x=\"108\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">16 cm</text><text x=\"152\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">24 cm</text><text x=\"196\" y=\"60\" text-anchor=\"middle\" class=\"fig-etq petita\">32 cm</text><text x=\"98\" y=\"8\" text-anchor=\"middle\" class=\"fig-etq petita\">cada interval = 4 km</text></svg>"
  },
  {
   "id": "289",
   "ex": 289,
   "ap": "",
   "bloc": "escales_calcul",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "En un mapa a escala $1:150\\,000$, dues poblacions estan a $6{,}4$ cm. Un ciclista fa el recorregut a $24$ km/h. Quant triga?",
   "opcions": [
    "$2{,}5$ h",
    "$24$ min",
    "$9{,}6$ km",
    "$0{,}4$ h $=4$ min"
   ],
   "pistes": [
    "Troba primer la distància real en quilòmetres.",
    "Després, temps $=\\dfrac{\\text{distància}}{\\text{velocitat}}$, i passa'l a minuts."
   ],
   "nota": "Aquest exercici encadena escala, canvi d'unitats i velocitat: és el format en què les escales apareixen de debò fora de la classe de matemàtiques.",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgZGl2aWRpdCBhbCByZXbDqXM6IGVsIHRlbXBzIMOpcyAkXFxkZnJhY3tcXHRleHR7ZGlzdMOgbmNpYX19e1xcdGV4dHt2ZWxvY2l0YXR9fSQsIG5vIGEgbCdpbnJldsOpcy4iLCAiIiwgIkFxdWVzdGEgw6lzIGxhIGRpc3TDoG5jaWEgcmVhbCwgcXVlIMOpcyBlbCBwcmltZXIgcGFzLiBFbmNhcmEgZmFsdGEgY2FsY3VsYXIgZWwgdGVtcHM6ICRcXGRmcmFjezl7LH02fXsyNH0kIGguIiwgIkVsIHRlbXBzIGVuIGhvcmVzIMOpcyAkMHssfTQkLCBpICQweyx9NCQgaCBubyBzw7NuICQ0JCBtaW4gc2luw7MgJDB7LH00XFxjZG90NjA9MjQkIG1pbi4iXSwgImVyciI6IFsiSU5WRVJUSURBIiwgIiIsICJQQVNfSU5URVJNRURJX1BFUl9SRVNQT1NUQSIsICJQT1RFTkNJQV8xMCJdLCAicmVzIjogWyIkNnssfTRcXGNkb3QxNTAwMDA9OTYwXFwsMDAwJCBjbSIsICIkOTYwMDAwJCBjbSAkPTl7LH02JCBrbSIsICIkdD1cXGRmcmFjezl7LH02fXsyNH09MHssfTQkIGggJD0weyx9NFxcY2RvdDYwPTI0JCBtaW4iXX0="
  },
  {
   "id": "290a",
   "ex": 290,
   "ap": "a",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Dues figures són semblants. Troba'n la raó de semblança $k$ (de la petita a la gran).",
   "enunciat": "Un costat de la petita fa $3$ cm i el corresponent de la gran, $12$ cm.",
   "opcions": [
    "$k=9$",
    "$k=36$",
    "$k=\\dfrac{1}{4}$",
    "$k=4$"
   ],
   "pistes": [
    "La raó de semblança és el quocient entre dos costats corresponents.",
    "De la petita a la gran: $\\dfrac{12}{3}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgcmVzdGF0IGVscyBkb3MgY29zdGF0cy4gTGEgcmHDsyBkZSBzZW1ibGFuw6dhIMOpcyB1biBRVU9DSUVOVDogZGl1IHF1YW50ZXMgdmVnYWRlcyDDqXMgbcOpcyBncmFuLCBubyBxdWFudCBtw6lzIGdyYW4gw6lzLiIsICJFbHMgaGFzIG11bHRpcGxpY2F0LiBMYSByYcOzIHN1cnQgZGUgZGl2aWRpciBlbCBjb3N0YXQgZGUgbGEgZ3JhbiBlbnRyZSBlbCBkZSBsYSBwZXRpdGEuIiwgIkFxdWVzdGEgw6lzIGxhIHJhw7MgZGUgbGEgZ3JhbiBhIGxhIHBldGl0YS4gQ29tIHF1ZSBlcyBkZW1hbmEgZGUgbGEgcGV0aXRhIGEgbGEgZ3JhbiwgJGskIGhhIGRlIHNlciBtw6lzIGdyYW4gcXVlICQxJC4iLCAiIl0sICJlcnIiOiBbIlJFU1RBX1BFUl9RVU9DSUVOVCIsICJQUk9EVUNURV9QRVJfU1VNQSIsICJJTlZFUlRJREEiLCAiIl0sICJyZXMiOiBbIiRrPVxcZGZyYWN7MTJ9ezN9PTQkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 444 256\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre un parell de costats corresponents marcada.</title><g transform=\"translate(16.00,220.00)\"><polygon points=\"0.00,0.00 60.00,0.00 30.00,-51.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"172.00,0.00 412.00,0.00 292.00,-204.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"30\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">1</text><text x=\"292\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">k</text></g></svg>"
  },
  {
   "id": "290b",
   "ex": 290,
   "ap": "b",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Dues figures són semblants. Troba'n la raó de semblança $k$ (de la petita a la gran).",
   "enunciat": "Un costat de la petita fa $5$ cm i el corresponent de la gran, $20$ cm.",
   "opcions": [
    "$k=15$",
    "$k=100$",
    "$k=4$",
    "$k=\\dfrac{1}{4}$"
   ],
   "pistes": [
    "La raó de semblança és el quocient entre dos costats corresponents.",
    "De la petita a la gran: $\\dfrac{20}{5}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgcmVzdGF0IGVscyBkb3MgY29zdGF0cy4gTGEgcmHDsyBkZSBzZW1ibGFuw6dhIMOpcyB1biBRVU9DSUVOVDogZGl1IHF1YW50ZXMgdmVnYWRlcyDDqXMgbcOpcyBncmFuLCBubyBxdWFudCBtw6lzIGdyYW4gw6lzLiIsICJFbHMgaGFzIG11bHRpcGxpY2F0LiBMYSByYcOzIHN1cnQgZGUgZGl2aWRpciBlbCBjb3N0YXQgZGUgbGEgZ3JhbiBlbnRyZSBlbCBkZSBsYSBwZXRpdGEuIiwgIiIsICJBcXVlc3RhIMOpcyBsYSByYcOzIGRlIGxhIGdyYW4gYSBsYSBwZXRpdGEuIENvbSBxdWUgZXMgZGVtYW5hIGRlIGxhIHBldGl0YSBhIGxhIGdyYW4sICRrJCBoYSBkZSBzZXIgbcOpcyBncmFuIHF1ZSAkMSQuIl0sICJlcnIiOiBbIlJFU1RBX1BFUl9RVU9DSUVOVCIsICJQUk9EVUNURV9QRVJfU1VNQSIsICIiLCAiSU5WRVJUSURBIl0sICJyZXMiOiBbIiRrPVxcZGZyYWN7MjB9ezV9PTQkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 444 256\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre un parell de costats corresponents marcada.</title><g transform=\"translate(16.00,220.00)\"><polygon points=\"0.00,0.00 60.00,0.00 30.00,-51.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"172.00,0.00 412.00,0.00 292.00,-204.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"30\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">1</text><text x=\"292\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">k</text></g></svg>"
  },
  {
   "id": "290c",
   "ex": 290,
   "ap": "c",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Dues figures són semblants. Troba'n la raó de semblança $k$ (de la petita a la gran).",
   "enunciat": "Un costat de la petita fa $6$ cm i el corresponent de la gran, $9$ cm.",
   "opcions": [
    "$k=54$",
    "$k=3$",
    "$k=\\dfrac{2}{3}$",
    "$k=\\dfrac{3}{2}$"
   ],
   "pistes": [
    "La raó de semblança és el quocient entre dos costats corresponents.",
    "De la petita a la gran: $\\dfrac{9}{6}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbHMgaGFzIG11bHRpcGxpY2F0LiBMYSByYcOzIHN1cnQgZGUgZGl2aWRpciBlbCBjb3N0YXQgZGUgbGEgZ3JhbiBlbnRyZSBlbCBkZSBsYSBwZXRpdGEuIiwgIkhhcyByZXN0YXQgZWxzIGRvcyBjb3N0YXRzLiBMYSByYcOzIGRlIHNlbWJsYW7Dp2Egw6lzIHVuIFFVT0NJRU5UOiBkaXUgcXVhbnRlcyB2ZWdhZGVzIMOpcyBtw6lzIGdyYW4sIG5vIHF1YW50IG3DqXMgZ3JhbiDDqXMuIiwgIkFxdWVzdGEgw6lzIGxhIHJhw7MgZGUgbGEgZ3JhbiBhIGxhIHBldGl0YS4gQ29tIHF1ZSBlcyBkZW1hbmEgZGUgbGEgcGV0aXRhIGEgbGEgZ3JhbiwgJGskIGhhIGRlIHNlciBtw6lzIGdyYW4gcXVlICQxJC4iLCAiIl0sICJlcnIiOiBbIlBST0RVQ1RFX1BFUl9TVU1BIiwgIlJFU1RBX1BFUl9RVU9DSUVOVCIsICJJTlZFUlRJREEiLCAiIl0sICJyZXMiOiBbIiRrPVxcZGZyYWN7OX17Nn09XFxkZnJhY3szfXsyfSQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 261 129\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre un parell de costats corresponents marcada.</title><g transform=\"translate(16.00,92.50)\"><polygon points=\"0.00,0.00 60.00,0.00 30.00,-51.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"139.00,0.00 229.00,0.00 184.00,-76.50\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"30\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">1</text><text x=\"184\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">k</text></g></svg>"
  },
  {
   "id": "291a",
   "ex": 291,
   "ap": "a",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Dos polígons són semblants amb raó $k$. Si l'àrea del petit és la que es diu, quina és la del gran?",
   "enunciat": "$k=2$ i àrea del petit $=15$ cm$^2$.",
   "opcions": [
    "$120$ cm$^2$",
    "$17$ cm$^2$",
    "$60$ cm$^2$",
    "$30$ cm$^2$"
   ],
   "pistes": [
    "Les longituds es multipliquen per $k$; les àrees, per $k^2$.",
    "$k^2=4$."
   ],
   "nota": "Val la pena veure-ho amb un quadrat: si el costat passa de $1$ a $2$, l'àrea passa d'$1$ a $4$. Dues dimensions, dos factors $k$.",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCAka14zJCDDqXMgcGVyIGFscyBWT0xVTVMuIFVuYSDDoHJlYSB0w6kgZHVlcyBkaW1lbnNpb25zLCBpIHBlciBhaXjDsiB2YSBhbWIgJGteMiQuIiwgIkxhIHJhw7MgbXVsdGlwbGljYSwgbm8gc3VtYS4iLCAiIiwgIkhhcyBtdWx0aXBsaWNhdCBsJ8OgcmVhIHBlciAkayQuIExlcyDDoHJlZXMgZXMgbXVsdGlwbGlxdWVuIHBlciAka14yJCwgbm8gcGVyICRrJDogc2kgbGVzIGxvbmdpdHVkcyBlcyBkdXBsaXF1ZW4sIGwnw6ByZWEgZXMgbXVsdGlwbGljYSBwZXIgJDQkLCBubyBwZXIgJDIkLiJdLCAiZXJyIjogWyJSQU9fQUxfQ1VCIiwgIlBST0RVQ1RFX1BFUl9TVU1BIiwgIiIsICJSQU9fU0VOU0VfUVVBRFJBVCJdLCAicmVzIjogWyIka14yPTJeMj00JCIsICLDgHJlYSBncmFuICQ9MTVcXGNkb3Q0PTYwJCBjbSReMiQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 298 172\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre un parell de costats corresponents marcada.</title><g transform=\"translate(16.00,136.00)\"><polygon points=\"0.00,0.00 60.00,0.00 60.00,-60.00 0.00,-60.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"145.60,0.00 265.60,0.00 265.60,-120.00 145.60,-120.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"30\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">1</text><text x=\"205.6\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">k</text></g></svg>"
  },
  {
   "id": "291b",
   "ex": 291,
   "ap": "b",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Dos polígons són semblants amb raó $k$. Si l'àrea del petit és la que es diu, quina és la del gran?",
   "enunciat": "$k=3$ i àrea del petit $=8$ cm$^2$.",
   "opcions": [
    "$72$ cm$^2$",
    "$216$ cm$^2$",
    "$11$ cm$^2$",
    "$24$ cm$^2$"
   ],
   "pistes": [
    "Les longituds es multipliquen per $k$; les àrees, per $k^2$.",
    "$k^2=9$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgJGteMyQgw6lzIHBlciBhbHMgVk9MVU1TLiBVbmEgw6ByZWEgdMOpIGR1ZXMgZGltZW5zaW9ucywgaSBwZXIgYWl4w7IgdmEgYW1iICRrXjIkLiIsICJMYSByYcOzIG11bHRpcGxpY2EsIG5vIHN1bWEuIiwgIkhhcyBtdWx0aXBsaWNhdCBsJ8OgcmVhIHBlciAkayQuIExlcyDDoHJlZXMgZXMgbXVsdGlwbGlxdWVuIHBlciAka14yJCwgbm8gcGVyICRrJDogc2kgbGVzIGxvbmdpdHVkcyBlcyBkdXBsaXF1ZW4sIGwnw6ByZWEgZXMgbXVsdGlwbGljYSBwZXIgJDQkLCBubyBwZXIgJDIkLiJdLCAiZXJyIjogWyIiLCAiUkFPX0FMX0NVQiIsICJQUk9EVUNURV9QRVJfU1VNQSIsICJSQU9fU0VOU0VfUVVBRFJBVCJdLCAicmVzIjogWyIka14yPTNeMj05JCIsICLDgHJlYSBncmFuICQ9OFxcY2RvdDk9NzIkIGNtJF4yJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 371 232\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre un parell de costats corresponents marcada.</title><g transform=\"translate(16.00,196.00)\"><polygon points=\"0.00,0.00 60.00,0.00 60.00,-60.00 0.00,-60.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"158.80,0.00 338.80,0.00 338.80,-180.00 158.80,-180.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"30\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">1</text><text x=\"248.8\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">k</text></g></svg>"
  },
  {
   "id": "291c",
   "ex": 291,
   "ap": "c",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Dos polígons són semblants amb raó $k$. Si l'àrea del petit és la que es diu, quina és la del gran?",
   "enunciat": "$k=\\dfrac{5}{2}$ i àrea del petit $=12$ cm$^2$.",
   "opcions": [
    "$75$ cm$^2$",
    "$187{,}5$ cm$^2$",
    "$30$ cm$^2$",
    "$14{,}5$ cm$^2$"
   ],
   "pistes": [
    "Les longituds es multipliquen per $k$; les àrees, per $k^2$.",
    "$k^2=\\dfrac{25}{4}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgJGteMyQgw6lzIHBlciBhbHMgVk9MVU1TLiBVbmEgw6ByZWEgdMOpIGR1ZXMgZGltZW5zaW9ucywgaSBwZXIgYWl4w7IgdmEgYW1iICRrXjIkLiIsICJIYXMgbXVsdGlwbGljYXQgbCfDoHJlYSBwZXIgJGskLiBMZXMgw6ByZWVzIGVzIG11bHRpcGxpcXVlbiBwZXIgJGteMiQsIG5vIHBlciAkayQ6IHNpIGxlcyBsb25naXR1ZHMgZXMgZHVwbGlxdWVuLCBsJ8OgcmVhIGVzIG11bHRpcGxpY2EgcGVyICQ0JCwgbm8gcGVyICQyJC4iLCAiTGEgcmHDsyBtdWx0aXBsaWNhLCBubyBzdW1hLiJdLCAiZXJyIjogWyIiLCAiUkFPX0FMX0NVQiIsICJSQU9fU0VOU0VfUVVBRFJBVCIsICJQUk9EVUNURV9QRVJfU1VNQSJdLCAicmVzIjogWyIka14yPVxcZGZyYWN7NX17Mn1eMj1cXGRmcmFjezI1fXs0fSQiLCAiw4ByZWEgZ3JhbiAkPTEyXFxjZG90XFxkZnJhY3syNX17NH09NzUkIGNtJF4yJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 335 202\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre un parell de costats corresponents marcada.</title><g transform=\"translate(16.00,166.00)\"><polygon points=\"0.00,0.00 60.00,0.00 60.00,-60.00 0.00,-60.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"152.20,0.00 302.20,0.00 302.20,-150.00 152.20,-150.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"30\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">1</text><text x=\"227.2\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">k</text></g></svg>"
  },
  {
   "id": "292a",
   "ex": 292,
   "ap": "a",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Dos cossos són semblants amb raó $k$. Si el volum del petit és el que es diu, quin és el del gran?",
   "enunciat": "$k=2$ i volum del petit $=30$ cm$^3$.",
   "opcions": [
    "$240$ cm$^3$",
    "$120$ cm$^3$",
    "$38$ cm$^3$",
    "$60$ cm$^3$"
   ],
   "pistes": [
    "Les longituds van amb $k$, les àrees amb $k^2$ i els volums amb $k^3$.",
    "$k^3=8$."
   ],
   "nota": "Aquest és el que més sorprèn: doblar totes les mides multiplica el volum per $8$. És el motiu pel qual una maqueta a escala $1:2$ no pesa la meitat, sinó una vuitena part.",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgJGteMiQgw6lzIHBlciBhIGxlcyDDgFJFRVMuIEVscyB2b2x1bXMgdmFuIGFtYiAka14zJC4iLCAiTGEgcmHDsyBtdWx0aXBsaWNhIGVsIHZvbHVtLCBubyBzJ2hpIHN1bWEuIiwgIkhhcyBtdWx0aXBsaWNhdCBwZWwgJGskIHRvdCBzb2wuIFVuIHZvbHVtIHTDqSB0cmVzIGRpbWVuc2lvbnM6IHNpIGxlcyBsb25naXR1ZHMgZXMgbXVsdGlwbGlxdWVuIHBlciAkMiQsIGVsIHZvbHVtIGhvIGZhIHBlciAkMl4zPTgkLiJdLCAiZXJyIjogWyIiLCAiUkFPX0FMX1FVQURSQVQiLCAiUFJPRFVDVEVfUEVSX1NVTUEiLCAiUkFPX1NFTlNFX1FVQURSQVQiXSwgInJlcyI6IFsiJGteMz0yXjM9OCQiLCAiVm9sdW0gZ3JhbiAkPTMwXFxjZG90OD0yNDAkIGNtJF4zJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 339 213\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre un parell de costats corresponents marcada.</title><g transform=\"translate(16.00,176.80)\"><polygon points=\"60.00,0.00 60.00,-60.00 80.40,-80.40 80.40,-20.40\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.00,-60.00 60.00,-60.00 80.40,-80.40 20.40,-80.40\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.00,0.00 60.00,0.00 60.00,-60.00 0.00,-60.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"265.60,0.00 265.60,-120.00 306.40,-160.80 306.40,-40.80\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"145.60,-120.00 265.60,-120.00 306.40,-160.80 186.40,-160.80\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"145.60,0.00 265.60,0.00 265.60,-120.00 145.60,-120.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"30\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">1</text><text x=\"205.6\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">k</text></g></svg>"
  },
  {
   "id": "292b",
   "ex": 292,
   "ap": "b",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Dos cossos són semblants amb raó $k$. Si el volum del petit és el que es diu, quin és el del gran?",
   "enunciat": "$k=3$ i volum del petit $=5$ cm$^3$.",
   "opcions": [
    "$45$ cm$^3$",
    "$135$ cm$^3$",
    "$15$ cm$^3$",
    "$32$ cm$^3$"
   ],
   "pistes": [
    "Les longituds van amb $k$, les àrees amb $k^2$ i els volums amb $k^3$.",
    "$k^3=27$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCAka14yJCDDqXMgcGVyIGEgbGVzIMOAUkVFUy4gRWxzIHZvbHVtcyB2YW4gYW1iICRrXjMkLiIsICIiLCAiSGFzIG11bHRpcGxpY2F0IHBlbCAkayQgdG90IHNvbC4gVW4gdm9sdW0gdMOpIHRyZXMgZGltZW5zaW9uczogc2kgbGVzIGxvbmdpdHVkcyBlcyBtdWx0aXBsaXF1ZW4gcGVyICQzJCwgZWwgdm9sdW0gaG8gZmEgcGVyICQzXjM9MjckLiIsICJMYSByYcOzIG11bHRpcGxpY2EgZWwgdm9sdW0sIG5vIHMnaGkgc3VtYS4iXSwgImVyciI6IFsiUkFPX0FMX1FVQURSQVQiLCAiIiwgIlJBT19TRU5TRV9RVUFEUkFUIiwgIlBST0RVQ1RFX1BFUl9TVU1BIl0sICJyZXMiOiBbIiRrXjM9M14zPTI3JCIsICJWb2x1bSBncmFuICQ9NVxcY2RvdDI3PTEzNSQgY20kXjMkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 432 294\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre un parell de costats corresponents marcada.</title><g transform=\"translate(16.00,257.20)\"><polygon points=\"60.00,0.00 60.00,-60.00 80.40,-80.40 80.40,-20.40\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.00,-60.00 60.00,-60.00 80.40,-80.40 20.40,-80.40\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.00,0.00 60.00,0.00 60.00,-60.00 0.00,-60.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"338.80,0.00 338.80,-180.00 400.00,-241.20 400.00,-61.20\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"158.80,-180.00 338.80,-180.00 400.00,-241.20 220.00,-241.20\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"158.80,0.00 338.80,0.00 338.80,-180.00 158.80,-180.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"30\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">1</text><text x=\"248.8\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">k</text></g></svg>"
  },
  {
   "id": "293a",
   "ex": 293,
   "ap": "a",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "A l'inrevés: del que saps de les àrees, dedueix la raó de longituds.",
   "enunciat": "Dos triangles semblants tenen àrees de $12$ cm$^2$ i $108$ cm$^2$. Quina és la raó entre els seus costats?",
   "opcions": [
    "$k=96$",
    "$k=3$",
    "$k=9$",
    "$k=\\sqrt{108-12}$"
   ],
   "pistes": [
    "La raó entre les àrees és $k^2$.",
    "Divideix les àrees i fes l'arrel quadrada del resultat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgcmVzdGF0IGxlcyDDoHJlZXMuIExhIHJhw7Mgw6lzIHVuIHF1b2NpZW50LiIsICIiLCAiRWwgJDkkIMOpcyBsYSByYcOzIGVudHJlIGxlcyDDgFJFRVMgKCQxMDg6MTIkKS4gTGEgcmHDsyBlbnRyZSBlbHMgY29zdGF0cyBuJ8OpcyBsJ2FycmVsIHF1YWRyYWRhOiAkaz1cXHNxcnR7OX09MyQuIiwgIk5pIHJlc3RhIG5pIGFycmVsIGRlIGxhIHJlc3RhOiBwcmltZXIgZXMgZGl2aWRlaXhlbiBsZXMgw6ByZWVzIGkgZGVzcHLDqXMgZXMgZmEgbCdhcnJlbCBkZWwgcXVvY2llbnQuIl0sICJlcnIiOiBbIlJFU1RBX1BFUl9RVU9DSUVOVCIsICIiLCAiUkFPX0FMX1FVQURSQVQiLCAiUkVTVEFfUEVSX1FVT0NJRU5UIl0sICJyZXMiOiBbIiRcXGRmcmFjezEwOH17MTJ9PTkkLCBpIGFpeMOyIMOpcyAka14yJCIsICIkaz1cXHNxcnR7OX09MyQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 371 232\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre un parell de costats corresponents marcada.</title><g transform=\"translate(16.00,196.00)\"><polygon points=\"0.00,0.00 60.00,0.00 60.00,-60.00 0.00,-60.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"158.80,0.00 338.80,0.00 338.80,-180.00 158.80,-180.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"30\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">1</text><text x=\"248.8\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">k</text></g></svg>"
  },
  {
   "id": "293b",
   "ex": 293,
   "ap": "b",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "A l'inrevés: del que saps de les àrees, dedueix la raó de longituds.",
   "enunciat": "Dues esferes semblants tenen volums de $8$ cm$^3$ i $216$ cm$^3$. Quina és la raó entre els seus radis?",
   "opcions": [
    "$k=\\sqrt{27}$",
    "$k=27$",
    "$k=3$",
    "$k=208$"
   ],
   "pistes": [
    "La raó entre els volums és $k^3$.",
    "Divideix els volums i fes-ne l'arrel cúbica."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJMJ2FycmVsIHF1YWRyYWRhIHNlcnZpcmlhIHNpIGNvbXBhcsOpc3NpbSDDoHJlZXMuIEFtYiB2b2x1bXMgY2FsIGwnYXJyZWwgY8O6YmljYS4iLCAiRWwgJDI3JCDDqXMgbGEgcmHDsyBlbnRyZSBlbHMgVk9MVU1TICgkMjE2OjgkKS4gTGEgcmHDsyBlbnRyZSBlbHMgcmFkaXMgbifDqXMgbCdhcnJlbCBDw5pCSUNBOiAkaz1cXHNxcnRbM117Mjd9PTMkLiIsICIiLCAiSGFzIHJlc3RhdCBlbHMgdm9sdW1zIGVuIGNvbXB0ZXMgZGUgZGl2aWRpci1sb3MuIl0sICJlcnIiOiBbIkFSUkVMX01BTF9BUExJQ0FEQSIsICJSQU9fQUxfQ1VCIiwgIiIsICJSRVNUQV9QRVJfUVVPQ0lFTlQiXSwgInJlcyI6IFsiJFxcZGZyYWN7MjE2fXs4fT0yNyQsIGkgYWl4w7Igw6lzICRrXjMkIiwgIiRrPVxcc3FydFszXXsyN309MyQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 432 294\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre un parell de costats corresponents marcada.</title><g transform=\"translate(16.00,257.20)\"><polygon points=\"60.00,0.00 60.00,-60.00 80.40,-80.40 80.40,-20.40\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.00,-60.00 60.00,-60.00 80.40,-80.40 20.40,-80.40\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.00,0.00 60.00,0.00 60.00,-60.00 0.00,-60.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"338.80,0.00 338.80,-180.00 400.00,-241.20 400.00,-61.20\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"158.80,-180.00 338.80,-180.00 400.00,-241.20 220.00,-241.20\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"158.80,0.00 338.80,0.00 338.80,-180.00 158.80,-180.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"30\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">1</text><text x=\"248.8\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">k</text></g></svg>"
  },
  {
   "id": "294a",
   "ex": 294,
   "ap": "a",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Una maqueta d'un edifici està feta a escala $1:50$. L'edifici de debò fa $30$ m d'alçada, té una façana de $600$ m$^2$ i un volum de $9\\,000$ m$^3$.",
   "enunciat": "Amb l'escala $1:50$, quina alçada fa la maqueta si l'edifici real fa $30$ m?",
   "opcions": [
    "$1\\,500$ m",
    "$60$ m",
    "$0{,}6$ m $=6$ cm",
    "$60$ cm"
   ],
   "pistes": [
    "Divideix l'alçada real entre $50$.",
    "Passa el resultat a centímetres."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgbXVsdGlwbGljYXQgcGVyICQ1MCQuIExhIG1hcXVldGEgw6lzIHVuYSBSRURVQ0NJw5M6IGNhbCBkaXZpZGlyLiIsICJFbCBuw7ptZXJvIMOpcyBjb3JyZWN0ZSBwZXLDsiBsYSB1bml0YXQgbm86ICQweyx9NiQgbSBzw7NuICQ2MCQgY2VudMOtbWV0cmVzLiIsICIkMzA6NTA9MHssfTYkIG0sIGkgJDB7LH02JCBtIHPDs24gJDYwJCBjbSwgbm8gJDYkLiIsICIiXSwgImVyciI6IFsiRVNDQUxBX0lOVkVSVElEQSIsICJVTklUQVRTX05PX0NPTlZFUlRJREVTIiwgIlBPVEVOQ0lBXzEwIiwgIiJdLCAicmVzIjogWyIkXFxkZnJhY3szMH17NTB9PTB7LH02JCBtIiwgIiQweyx9NiQgbSAkPTYwJCBjbSJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 170 103\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre un parell de costats corresponents marcada.</title><g transform=\"translate(16.00,67.00)\"><polygon points=\"0.00,0.00 60.00,0.00 30.00,-51.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"122.50,0.00 137.50,0.00 130.00,-12.75\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"30\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">1</text><text x=\"130\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">k</text></g></svg>"
  },
  {
   "id": "294b",
   "ex": 294,
   "ap": "b",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Una maqueta d'un edifici està feta a escala $1:50$. L'edifici de debò fa $30$ m d'alçada, té una façana de $600$ m$^2$ i un volum de $9\\,000$ m$^3$.",
   "enunciat": "Amb la mateixa escala $1:50$, quina superfície té la façana de la maqueta, si la de l'edifici real és de $600$ m$^2$?",
   "opcions": [
    "$0{,}24$ m$^2$ (és a dir, $2\\,400$ cm$^2$)",
    "$0{,}0048$ m$^2$",
    "$600$ m$^2$",
    "$12$ m$^2$"
   ],
   "pistes": [
    "La raó de longituds és $\\dfrac{1}{50}$; la d'àrees, $\\left(\\dfrac{1}{50}\\right)^2$.",
    "$50^2=2\\,500$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGRpdmlkaXQgZW50cmUgJDUwXjMkLiBFbCBjdWIgw6lzIHBlciBhbHMgdm9sdW1zOyB1bmEgZmHDp2FuYSDDqXMgdW5hIMOgcmVhIGkgdmEgYW1iIGVsIHF1YWRyYXQuIiwgIkFxdWVzdGEgw6lzIGxhIGZhw6dhbmEgcmVhbCwgbGEgcXVlIGphIGV0IGRvbmF2ZW4uIiwgIkhhcyBkaXZpZGl0IGwnw6ByZWEgZW50cmUgJDUwJC4gTGVzIMOgcmVlcyB2YW4gYW1iICRrXjIkOiBjYWwgZGl2aWRpciBlbnRyZSAkNTBeMj0yXFwsNTAwJC4iXSwgImVyciI6IFsiIiwgIlJBT19BTF9DVUIiLCAiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiLCAiUkFPX1NFTlNFX1FVQURSQVQiXSwgInJlcyI6IFsiJFxcZGZyYWN7NjAwfXs1MF4yfT1cXGRmcmFjezYwMH17MjUwMH09MHssfTI0JCBtJF4yJCIsICIkMHssfTI0JCBtJF4yPTJcXCw0MDAkIGNtJF4yJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 170 112\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre un parell de costats corresponents marcada.</title><g transform=\"translate(16.00,76.00)\"><polygon points=\"0.00,0.00 60.00,0.00 60.00,-60.00 0.00,-60.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"122.50,0.00 137.50,0.00 137.50,-15.00 122.50,-15.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"30\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">1</text><text x=\"130\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">k</text></g></svg>"
  },
  {
   "id": "294c",
   "ex": 294,
   "ap": "c",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Una maqueta d'un edifici està feta a escala $1:50$. L'edifici de debò fa $30$ m d'alçada, té una façana de $600$ m$^2$ i un volum de $9\\,000$ m$^3$.",
   "enunciat": "Amb la mateixa escala $1:50$, quin volum té la maqueta, si l'edifici real en fa $9\\,000$ m$^3$?",
   "opcions": [
    "$180$ m$^3$",
    "$0{,}072$ m$^3$ (és a dir, $72\\,000$ cm$^3$)",
    "$3{,}6$ m$^3$",
    "$72$ m$^3$"
   ],
   "pistes": [
    "La raó de volums és $\\left(\\dfrac{1}{50}\\right)^3$.",
    "$50^3=125\\,000$."
   ],
   "nota": "Els tres apartats junts són el resum del bloc: una sola escala, tres factors diferents segons si el que mesures té una, dues o tres dimensions.",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgZGl2aWRpdCBlbnRyZSAkNTAkLiBFbHMgdm9sdW1zIHZhbiBhbWIgJGteMyQ6IGVudHJlICQ1MF4zPTEyNVxcLDAwMCQuIiwgIiIsICJIYXMgZGl2aWRpdCBlbnRyZSAkNTBeMiQuIEVsIHF1YWRyYXQgw6lzIHBlciBhIGxlcyDDoHJlZXMuIiwgIlQnaGFzIGRlc3BsYcOnYXQgdHJlcyBsbG9jczogJFxcZGZyYWN7OTAwMH17MTI1MDAwfT0weyx9MDcyJCwgbm8gJDcyJC4iXSwgImVyciI6IFsiUkFPX1NFTlNFX1FVQURSQVQiLCAiIiwgIlJBT19BTF9RVUFEUkFUIiwgIlBPVEVOQ0lBXzEwIl0sICJyZXMiOiBbIiRcXGRmcmFjezkwMDB9ezUwXjN9PVxcZGZyYWN7OTAwMH17MTI1MDAwfT0weyx9MDcyJCBtJF4zJCIsICIkMHssfTA3MiQgbSReMz03MlxcLDAwMCQgY20kXjMkIiwgIkxhIG1hcXVldGEgw6lzICQ1MCQgdmVnYWRlcyBtw6lzIGN1cnRhLCAkMlxcLDUwMCQgdmVnYWRlcyBtw6lzIHBldGl0YSBkZSBmYcOnYW5hIGkgJDEyNVxcLDAwMCQgdmVnYWRlcyBtw6lzIHBldGl0YSBkZSB2b2x1bSJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 175 133\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre un parell de costats corresponents marcada.</title><g transform=\"translate(16.00,96.40)\"><polygon points=\"60.00,0.00 60.00,-60.00 80.40,-80.40 80.40,-20.40\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.00,-60.00 60.00,-60.00 80.40,-80.40 20.40,-80.40\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.00,0.00 60.00,0.00 60.00,-60.00 0.00,-60.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"137.50,0.00 137.50,-15.00 142.60,-20.10 142.60,-5.10\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"122.50,-15.00 137.50,-15.00 142.60,-20.10 127.60,-20.10\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"122.50,0.00 137.50,0.00 137.50,-15.00 122.50,-15.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"30\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">1</text><text x=\"130\" y=\"16\" text-anchor=\"middle\" class=\"fig-etq petita\">k</text></g></svg>"
  }
 ]
};
