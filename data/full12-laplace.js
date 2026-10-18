/* Generat per tools/build.py — no editeu aquest fitxer a mà. */
window.FULL = {
 "full": 12,
 "titol": "Full 12 — Combinatòria i probabilitat",
 "subtitol": "Espais mostrals, diagrames d'arbre, freqüència relativa i regla de Laplace.",
 "blocs": [
  {
   "id": "espais_mostrals",
   "titol": "Espais mostrals i esdeveniments",
   "descripcio": "Espai mostral d'un experiment aleatori, esdeveniments elementals i impossibles, i comparació de probabilitats.",
   "items": [
    "374a",
    "374b",
    "236a",
    "236b",
    "236c",
    "236d",
    "236e",
    "236f",
    "236g",
    "237",
    "239a",
    "239b",
    "239c",
    "239d",
    "239e",
    "240a",
    "240b",
    "240c",
    "240d",
    "240e",
    "238a",
    "238b"
   ]
  },
  {
   "id": "combinatoria",
   "titol": "Combinatòria: principi multiplicatiu",
   "descripcio": "Diagrames d'arbre, mètode del producte, i variacions sense repetició.",
   "items": [
    "375a",
    "375b",
    "244",
    "243",
    "245",
    "247",
    "248a",
    "248b",
    "248c",
    "248d",
    "248e",
    "242",
    "246"
   ]
  },
  {
   "id": "laplace",
   "titol": "Regla de Laplace i freqüència relativa",
   "descripcio": "Probabilitat d'un esdeveniment, freqüència relativa i llei dels grans nombres.",
   "items": [
    "376a",
    "376b",
    "241a",
    "241b",
    "241c",
    "241d",
    "241e",
    "249a",
    "249b",
    "249c",
    "249d",
    "250a",
    "250b",
    "250c",
    "250d",
    "251a",
    "251b",
    "251c",
    "252a",
    "252b",
    "252c"
   ]
  },
  {
   "id": "esdeveniments",
   "titol": "Esdeveniments compostos",
   "descripcio": "Esdeveniments compatibles, incompatibles i contraris, unió i intersecció, i probabilitat condicionada senzilla.",
   "items": [
    "377a",
    "377b",
    "257a",
    "257b",
    "257c",
    "253a",
    "253b",
    "253c",
    "253d",
    "253e",
    "254a",
    "254b",
    "254c",
    "255",
    "256a",
    "256b",
    "256c",
    "258",
    "259"
   ]
  },
  {
   "id": "probabilitat_composta",
   "titol": "Probabilitat composta: dos experiments",
   "descripcio": "Experiments amb i sense reposició, diagrames d'arbre, i la probabilitat d'\"almenys un\" a través del contrari.",
   "items": [
    "378a",
    "378b",
    "305a",
    "305b",
    "305c",
    "308a",
    "308b",
    "306a",
    "306b",
    "306c",
    "309a",
    "309b",
    "311",
    "312",
    "307",
    "310a",
    "310b",
    "313"
   ]
  },
  {
   "id": "probabilitat_condicionada",
   "titol": "Probabilitat condicionada",
   "descripcio": "La probabilitat d'un esdeveniment quan ja se'n sap un altre: P(B|A), i per què no és el mateix que P(A|B).",
   "items": [
    "379a",
    "379b",
    "319",
    "314a",
    "314b",
    "314c",
    "316a",
    "316b",
    "315a",
    "315b",
    "315c",
    "317",
    "318",
    "320"
   ]
  }
 ],
 "errors": {
  "CASOS_FAVORABLES_MAL_COMPTATS": "Revisa un per un quins resultats de l'espai mostral compleixen la condició de l'esdeveniment: és fàcil oblidar un límit inclòs (\"igual o més gran que\") o comptar-ne un de més.",
  "CASOS_POSSIBLES_MAL_COMPTATS": "Revisa quants resultats TOTALS té l'experiment (els casos possibles): ha de ser el denominador de la probabilitat, no un altre nombre de l'enunciat.",
  "COMBINACIONS_MAL_COMPTADES": "Per triar quins $k$ elements d'entre $n$ compleixen una condició (sense importar l'ordre en què es trien), cal fer servir combinacions, $\\binom{n}{k}$, no una simple multiplicació o suma.",
  "ESDEVENIMENTS_INDEPENDENTS_MAL_COMBINATS": "Per combinar dos esdeveniments independents (per exemple, dos sortejos separats), el nombre de combinacions possibles es multiplica, no se suma.",
  "ESDEVENIMENT_CONTRARI_MAL_CALCULAT": "La probabilitat de l'esdeveniment contrari és $1$ menys la probabilitat de l'esdeveniment: $P(\\text{no }A)=1-P(A)$.",
  "ESPAI_MOSTRAL_MAL_COMPTAT": "L'espai mostral és el conjunt de resultats DIFERENTS i DISTINGIBLES d'un experiment aleatori: revisa que no en falti cap ni que n'hi hagi cap de sobrant o repetit.",
  "FREQ_RELATIVA_PROBABILITAT_CONFOSES": "La freqüència relativa és el resultat observat en repetir un experiment un nombre concret de vegades; la probabilitat teòrica és el valor que s'espera a llarg termini. Quan hi ha moltes repeticions, la freqüència relativa s'aproxima a la probabilitat, però es calculen amb les dades donades a cada cas.",
  "INVERTIDA": "Has invertit la fracció. Simplificar no canvia quin terme és a dalt i quin a baix.",
  "PRINCIPI_MULTIPLICATIU_MAL_APLICAT": "Quan es combinen diverses eleccions independents, el nombre total de resultats es MULTIPLICA (no se suma): si la primera elecció té $m$ opcions i la segona en té $n$, en total hi ha $m\\cdot n$ combinacions.",
  "RECOMPTE_MAL_FET": "Torna a comptar les dades una per una: és fàcil saltar-se'n alguna o comptar-ne alguna dues vegades en un recompte llarg.",
  "UNIO_DOBLE_COMPTADA": "En calcular la probabilitat d'una unió, els resultats que compleixen totes dues condicions a la vegada s'han comptat dues vegades si simplement se sumen les probabilitats individuals: cal restar la intersecció un cop, $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.",
  "UNIO_INTERSECCIO_CONFOSES": "La unió ($A\\cup B$) inclou els resultats que compleixen A, B, o totes dues alhora; la intersecció ($A\\cap B$) inclou només els que compleixen totes dues coses a la vegada.",
  "VEREDICTE_INVERTIT": "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del correcte: torna a comprovar la condició amb els valors concrets de l'enunciat."
 },
 "items": [
  {
   "id": "376a",
   "ex": 376,
   "ap": "a",
   "bloc": "laplace",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula aquesta probabilitat amb la regla de Laplace: casos favorables dividit per casos possibles.",
   "enunciat": "Llancem un dau de sis cares. Probabilitat de treure un $5$.",
   "opcions": [
    "$\\dfrac{1}{5}$",
    "$\\dfrac{1}{6}$",
    "$6$",
    "$\\dfrac{5}{6}$"
   ],
   "pistes": [
    "Quantes cares tenen un $5$? Quantes cares hi ha en total?",
    "$\\dfrac{\\text{favorables}}{\\text{possibles}}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBkYXUgdMOpICQ2JCBjYXJlcywgbm8gJDUkLiBSZXZpc2EgcXVhbnRzIHJlc3VsdGF0cyBUT1RBTFMgdMOpIGwnZXhwZXJpbWVudCAoZWxzIGNhc29zIHBvc3NpYmxlcyk6IGhhIGRlIHNlciBlbCBkZW5vbWluYWRvciBkZSBsYSBwcm9iYWJpbGl0YXQsIG5vIHVuIGFsdHJlIG5vbWJyZSBkZSBsJ2VudW5jaWF0LiIsICIiLCAiSGFzIGRpdmlkaXQgZWxzIHBvc3NpYmxlcyBlbnRyZSBlbHMgZmF2b3JhYmxlcy4gVW5hIHByb2JhYmlsaXRhdCBtYWkgbm8gw6lzIG3DqXMgZ3JhbiBxdWUgJDEkLiIsICIkXFxkZnJhYzU2JCDDqXMgbGEgcHJvYmFiaWxpdGF0IGRlIE5PIHRyZXVyZSB1biAkNSQuIFRyZXVyZSB1biAkNSQgw6lzIHVuIHNvbCBjYXMgZmF2b3JhYmxlLiJdLCAiZXJyIjogWyJDQVNPU19QT1NTSUJMRVNfTUFMX0NPTVBUQVRTIiwgIiIsICJJTlZFUlRJREEiLCAiRVNERVZFTklNRU5UX0NPTlRSQVJJX01BTF9DQUxDVUxBVCJdLCAicmVzIjogWyIkUCg1KT1cXGRmcmFjezF9ezZ9JCJdfQ=="
  },
  {
   "id": "376b",
   "ex": 376,
   "ap": "b",
   "bloc": "laplace",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula aquesta probabilitat amb la regla de Laplace: casos favorables dividit per casos possibles.",
   "enunciat": "Una bossa té $3$ boles vermelles i $7$ de blaves. Traiem una bola. Probabilitat que sigui vermella.",
   "opcions": [
    "$\\dfrac{7}{10}$",
    "$\\dfrac{3}{10}$",
    "$\\dfrac{10}{3}$",
    "$\\dfrac{3}{7}$"
   ],
   "pistes": [
    "Quantes boles hi ha en total?",
    "$\\dfrac{\\text{vermelles}}{\\text{total}}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3RhIMOpcyBsYSBwcm9iYWJpbGl0YXQgZGUgdHJldXJlIHVuYSBib2xhIEJMQVZBLiIsICIiLCAiSGFzIGRpdmlkaXQgZWxzIHBvc3NpYmxlcyBlbnRyZSBlbHMgZmF2b3JhYmxlcy4gVW5hIHByb2JhYmlsaXRhdCBtYWkgbm8gw6lzIG3DqXMgZ3JhbiBxdWUgJDEkLiIsICJIYXMgZGl2aWRpdCBwZXIgbGVzIGJsYXZlcy4gRWxzIGNhc29zIHBvc3NpYmxlcyBzw7NuIFRPVEVTIGxlcyBib2xlczogJDMrNz0xMCQuIl0sICJlcnIiOiBbIkNBU09TX0ZBVk9SQUJMRVNfTUFMX0NPTVBUQVRTIiwgIiIsICJJTlZFUlRJREEiLCAiQ0FTT1NfUE9TU0lCTEVTX01BTF9DT01QVEFUUyJdLCAicmVzIjogWyIkUChcXHRleHR7dmVybWVsbGF9KT1cXGRmcmFjezN9ezMrN309XFxkZnJhY3szfXsxMH0kIl19"
  },
  {
   "id": "241a",
   "ex": 241,
   "ap": "a",
   "bloc": "laplace",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "D'una baralla de 40 cartes traiem una carta. Calcula les probabilitats d'aquests esdeveniments.",
   "enunciat": "$A=$ «Obtenir ors»",
   "opcions": [
    "$P(A)=\\dfrac{1}{40}$, comptant només una carta d'ors",
    "$P(A)=\\dfrac{10}{40}=\\dfrac14$",
    "$P(A)=\\dfrac{4}{40}=\\dfrac1{10}$, comptant els $4$ colls",
    "$P(A)=\\dfrac{10}{4}$, invertint numerador i denominador"
   ],
   "pistes": [
    "Hi ha $10$ ors a la baralla de $40$ cartes.",
    "Aplica la regla de Laplace: casos favorables entre casos possibles."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJcIk9idGVuaXIgb3JzXCIgaW5jbG91IFFVQUxTRVZPTCBjYXJ0YSBkZWwgY29sbCBkJ29ycywgbm8gbm9tw6lzIHVuYSBlbiBjb25jcmV0OiBuJ2hpIGhhICQxMCQgY2FydGVzIGQnb3JzIGEgbGEgYmFyYWxsYS4iLCAiIiwgIiQ0JCDDqXMgZWwgbm9tYnJlIGRlIGNvbGxzIERJRkVSRU5UUywgbm8gZWwgbm9tYnJlIGRlIGNhcnRlcyBkJ29yczogZWwgY29sbCBkJ29ycyB0w6kgJDEwJCBjYXJ0ZXMsIG5vICQ0JC4iLCAiVW5hIHByb2JhYmlsaXRhdCBtYWkgcG90IHNlciBtw6lzIGdyYW4gcXVlICQxJDogZWwgbm9tYnJlIGRlIGNhc29zIGZhdm9yYWJsZXMgdmEgYWwgbnVtZXJhZG9yLCBpIGVsIGRlIGNhc29zIHBvc3NpYmxlcyAoZWwgdG90YWwgZGUgY2FydGVzKSBhbCBkZW5vbWluYWRvci4iXSwgImVyciI6IFsiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiLCAiIiwgIkNBU09TX0ZBVk9SQUJMRVNfTUFMX0NPTVBUQVRTIiwgIkNBU09TX0ZBVk9SQUJMRVNfTUFMX0NPTVBUQVRTIl0sICJyZXMiOiBbIkhpIGhhICQxMCQgb3JzLiAkUChBKT1cXGRmcmFjezEwfXs0MH09XFxkZnJhYzE0JCJdfQ=="
  },
  {
   "id": "241b",
   "ex": 241,
   "ap": "b",
   "bloc": "laplace",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "D'una baralla de 40 cartes traiem una carta. Calcula les probabilitats d'aquests esdeveniments.",
   "enunciat": "$B=$ «Obtenir el rei d'ors»",
   "opcions": [
    "$P(B)=\\dfrac{4}{40}=\\dfrac1{10}$, comptant els $4$ reis de la baralla",
    "$P(B)=\\dfrac{1}{40}$",
    "$P(B)=\\dfrac{10}{40}=\\dfrac14$, com si fos \"obtenir un or qualsevol\"",
    "$P(B)=\\dfrac{3}{40}$, comptant les $3$ figures d'ors"
   ],
   "pistes": [
    "El rei d'ors és una única carta a tota la baralla.",
    "Aplica la regla de Laplace amb $1$ cas favorable."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMJ2VzZGV2ZW5pbWVudCBkZW1hbmEgRVhBQ1RBTUVOVCBlbCByZWkgZCdvcnMsIG5vIHF1YWxzZXZvbCByZWkgZGUgcXVhbHNldm9sIGNvbGw6IG5vbcOpcyBjb21wdGEgbGEgY2FydGEgY29uY3JldGEgXCJyZWkgZCdvcnNcIiwgJDEkIGNhcyBmYXZvcmFibGUuIiwgIiIsICJcIkVsIHJlaSBkJ29yc1wiIMOpcyBVTkEgw7puaWNhIGNhcnRhIGNvbmNyZXRhLCBubyBxdWFsc2V2b2wgY2FydGEgZGVsIGNvbGwgZCdvcnM6IG5vbcOpcyBoaSBoYSAkMSQgY2FzIGZhdm9yYWJsZSwgbm8gJDEwJC4iLCAiTCdlc2RldmVuaW1lbnQgbm8gw6lzIFwib2J0ZW5pciBhbGd1bmEgZmlndXJhIGQnb3JzXCI6IMOpcyBvYnRlbmlyIEVYQUNUQU1FTlQgZWwgcmVpIGQnb3JzLCB1bmEgw7puaWNhIGNhcnRhLiJdLCAiZXJyIjogWyJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyIsICIiLCAiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiLCAiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiXSwgInJlcyI6IFsiRWwgcmVpIGQnb3JzIMOpcyB1bmEgw7puaWNhIGNhcnRhLiAkUChCKT1cXGRmcmFjezF9ezQwfSQiXX0="
  },
  {
   "id": "241c",
   "ex": 241,
   "ap": "c",
   "bloc": "laplace",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "D'una baralla de 40 cartes traiem una carta. Calcula les probabilitats d'aquests esdeveniments.",
   "enunciat": "$C=$ «Obtenir espases o copes»",
   "opcions": [
    "$P(C)=\\dfrac{40}{40}=1$, comptant tota la baralla",
    "$P(C)=\\dfrac{20}{40\\cdot2}=\\dfrac14$, dividint el denominador per error",
    "$P(C)=\\dfrac{10}{40}=\\dfrac14$, comptant només un coll",
    "$P(C)=\\dfrac{20}{40}=\\dfrac12$"
   ],
   "pistes": [
    "Espases i copes sumen quantes cartes en total?",
    "$10+10=20$ cartes favorables d'entre $40$ possibles."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJObyB0b3RlcyBsZXMgY2FydGVzIGRlIGxhIGJhcmFsbGEgc8OzbiBkJ2VzcGFzZXMgbyBjb3BlczogdGFtYsOpIG4naGkgaGEgZCdvcnMgaSBkZSBiYXN0b3MsIHF1ZSBubyBjb21wbGVpeGVuIGwnZXNkZXZlbmltZW50LiIsICJFbCBkZW5vbWluYWRvciBkZSBsYSBwcm9iYWJpbGl0YXQgw6lzIHNlbXByZSBlbCBub21icmUgVE9UQUwgZGUgY2FydGVzIGRlIGxhIGJhcmFsbGEsICQ0MCQsIG5vIGNhcCBtw7psdGlwbGUgZCdhcXVlc3Qgbm9tYnJlLiIsICJMJ2VzZGV2ZW5pbWVudCBpbmNsb3UgRE9TIGNvbGxzIChlc3Bhc2VzIEkgY29wZXMpLCBubyBub23DqXMgdW46IGNhbCBzdW1hciBsZXMgY2FydGVzIGRlIHRvdHMgZG9zLCAkMTArMTA9MjAkLiIsICIiXSwgImVyciI6IFsiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiLCAiQ0FTT1NfUE9TU0lCTEVTX01BTF9DT01QVEFUUyIsICJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyIsICIiXSwgInJlcyI6IFsiRXNwYXNlcyBpIGNvcGVzIHN1bWVuICQxMCsxMD0yMCQgY2FydGVzLiAkUChDKT1cXGRmcmFjezIwfXs0MH09XFxkZnJhYzEyJCJdfQ=="
  },
  {
   "id": "241d",
   "ex": 241,
   "ap": "d",
   "bloc": "laplace",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "D'una baralla de 40 cartes traiem una carta. Calcula les probabilitats d'aquests esdeveniments.",
   "enunciat": "$D=$ «Obtenir una figura»",
   "opcions": [
    "$P(D)=\\dfrac{12}{4}$, invertint numerador i denominador",
    "$P(D)=\\dfrac{3}{40}$, comptant només les figures d'un coll",
    "$P(D)=\\dfrac{12}{40}=\\dfrac{3}{10}$",
    "$P(D)=\\dfrac{4}{40}=\\dfrac1{10}$, comptant només els reis"
   ],
   "pistes": [
    "Cada coll té $3$ figures (sota, cavall, rei), i hi ha $4$ colls.",
    "Multiplica $3\\cdot4$ per obtenir el total de figures."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJVbmEgcHJvYmFiaWxpdGF0IG1haSBwb3Qgc2VyIG3DqXMgZ3JhbiBxdWUgJDEkOiBlbCBub21icmUgZGUgY2FydGVzIGZhdm9yYWJsZXMgdmEgYWwgbnVtZXJhZG9yLCBpIGVsIHRvdGFsIGRlIGxhIGJhcmFsbGEgYWwgZGVub21pbmFkb3IuIiwgIkNhZGEgY29sbCB0w6kgJDMkIGZpZ3VyZXMgKHNvdGEsIGNhdmFsbCwgcmVpKSwgcGVyw7IgaGkgaGEgJDQkIGNvbGxzIGRpZmVyZW50czogY2FsIG11bHRpcGxpY2FyICQzXFxjZG90ND0xMiQgZmlndXJlcyBlbiB0b3RhbCwgbm8gY29tcHRhciBub23DqXMgdW4gY29sbC4iLCAiIiwgIlwiRmlndXJhXCIgaW5jbG91IHNvdGVzLCBjYXZhbGxzIEkgcmVpcywgbm8gbm9tw6lzIGVscyByZWlzOiBjYWwgY29tcHRhciBsZXMgdHJlcyBmaWd1cmVzIGRlIGNhZGEgY29sbCwgJDNcXGNkb3Q0PTEyJC4iXSwgImVyciI6IFsiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiLCAiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiLCAiIiwgIkNBU09TX0ZBVk9SQUJMRVNfTUFMX0NPTVBUQVRTIl0sICJyZXMiOiBbIkxlcyBmaWd1cmVzIChzb3RhLCBjYXZhbGwsIHJlaSksICQzJCBwZXIgY29sbCBpICQ0JCBjb2xsczogJDNcXGNkb3Q0PTEyJCBmaWd1cmVzLiAkUChEKT1cXGRmcmFjezEyfXs0MH09XFxkZnJhY3szfXsxMH0kIl19"
  },
  {
   "id": "241e",
   "ex": 241,
   "ap": "e",
   "bloc": "laplace",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "D'una baralla de 40 cartes traiem una carta. Calcula les probabilitats d'aquests esdeveniments.",
   "enunciat": "$E=$ «Obtenir un as»",
   "opcions": [
    "$P(E)=\\dfrac{10}{40}=\\dfrac14$, com si fos \"obtenir un or\"",
    "$P(E)=\\dfrac{4}{40}=\\dfrac1{10}$",
    "$P(E)=\\dfrac{1}{40}$, comptant només un as",
    "$P(E)=\\dfrac{3}{40}$, comptant només $3$ colls"
   ],
   "pistes": [
    "Hi ha un as per coll, i quatre colls diferents.",
    "Suma els asos: $1+1+1+1=4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMJ2VzZGV2ZW5pbWVudCDDqXMgXCJvYnRlbmlyIHVuIGFzXCIgKGRlIHF1YWxzZXZvbCBjb2xsKSwgbm8gXCJvYnRlbmlyIHVuIG9yXCI6IG5vbcOpcyBjb21wdGVuIGVscyAkNCQgYXNvcywgdW4gcGVyIGNvbGwsIG5vIGxlcyAkMTAkIGNhcnRlcyBkJ3VuIGNvbGwgc2VuY2VyLiIsICIiLCAiSGkgaGEgdW4gYXMgcGVyIGNvbGwsIGkgJDQkIGNvbGxzIGRpZmVyZW50czogZW4gdG90YWwsICQ0JCBhc29zIGEgbGEgYmFyYWxsYSwgbm8gbm9tw6lzICQxJC4iLCAiSGkgaGEgJDQkIGNvbGxzIGEgbGEgYmFyYWxsYSBlc3BhbnlvbGEgKG9ycywgY29wZXMsIGVzcGFzZXMsIGJhc3RvcyksIG5vICQzJDogY2FkYSB1biB0w6kgZWwgc2V1IHByb3BpIGFzLiJdLCAiZXJyIjogWyJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyIsICIiLCAiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiLCAiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiXSwgInJlcyI6IFsiSGkgaGEgdW4gYXMgcGVyIGNvbGw6ICQ0JCBhc29zIGVuIHRvdGFsLiAkUChFKT1cXGRmcmFjezR9ezQwfT1cXGRmcmFjMXsxMH0kIl19"
  },
  {
   "id": "249a",
   "ex": 249,
   "ap": "a",
   "bloc": "laplace",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "En un bombo hi ha 10 boles numerades del 0 al 9. Es repeteix 100 vegades l'experiment de treure una bola i tornar-la al bombo. Els resultats: bola 0->7, 1->13, 2->11, 3->12, 4->8, 5->10, 6->12, 7->6, 8->10, 9->11. Esdeveniments: $A=$«Múltiple de 3», $B=$«Nombre senar», $C=$«Divisor de 6».",
   "enunciat": "Quina és la freqüència relativa de l'esdeveniment $A=$«Múltiple de $3$»?",
   "opcions": [
    "$\\dfrac{42}{100}=\\dfrac{21}{50}$",
    "$\\dfrac{4}{100}$, comptant només els valors de $A$ ($0,3,6,9$) com a $4$ boles",
    "$\\dfrac{9}{100}$, prenent només el valor $9$ com a representant de $A$",
    "$\\dfrac{30}{100}$, comptant només un subconjunt dels valors de $A$"
   ],
   "pistes": [
    "\"Múltiple de $3$\" agrupa les boles $0$, $3$, $6$ i $9$.",
    "Suma les seves freqüències: $7+12+12+11$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJEEkIGVzdMOgIGZvcm1hdCBwZXIgJDQkIHZhbG9ycyBESUZFUkVOVFMgKCQwLDMsNiw5JCksIHBlcsOyIGxhIGZyZXHDvMOobmNpYSByZWxhdGl2YSBzdW1hIGxlcyB2ZWdhZGVzIHF1ZSBoYSBTT1JUSVQgY2FkYXNjdW4gZCdlbGxzICgkNysxMisxMisxMT00MiQpLCBubyBub23DqXMgY29tcHRhIHF1YW50cyB2YWxvcnMgZGlmZXJlbnRzIGZvcm1lbiBsJ2VzZGV2ZW5pbWVudC4iLCAiXCJNw7psdGlwbGUgZGUgJDMkXCIgbm8gw6lzIG5vbcOpcyBlbCB2YWxvciAkOSQ6IHRhbWLDqSBpbmNsb3UgZWwgJDAkLCBlbCAkMyQgaSBlbCAkNiQuIENhbCBzdW1hciBsZXMgZnJlccO8w6huY2llcyBkZSB0b3RzIHF1YXRyZS4iLCAiJEE9JMKrTcO6bHRpcGxlIGRlICQzJMK7IGluY2xvdSBlbCAkMCQsIGVsICQzJCwgZWwgJDYkIGkgZWwgJDkkOiByZXZpc2EgcXVlIGhhcyBzdW1hdCBsZXMgZnJlccO8w6huY2llcyBkZWxzIHF1YXRyZSB2YWxvcnMsIG5vIG5vbcOpcyBkJ2FsZ3Vucy4iXSwgImVyciI6IFsiIiwgIkZSRVFfUkVMQVRJVkFfUFJPQkFCSUxJVEFUX0NPTkZPU0VTIiwgIkVTUEFJX01PU1RSQUxfTUFMX0NPTVBUQVQiLCAiUkVDT01QVEVfTUFMX0ZFVCJdLCAicmVzIjogWyIkQT1cXHswLDMsNiw5XFx9JDogJGZfQT03KzEyKzEyKzExPTQyJCIsICIkXFxkZnJhY3tmX0F9ezEwMH09XFxkZnJhY3s0Mn17MTAwfT1cXGRmcmFjezIxfXs1MH0kIl19"
  },
  {
   "id": "249b",
   "ex": 249,
   "ap": "b",
   "bloc": "laplace",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "En un bombo hi ha 10 boles numerades del 0 al 9. Es repeteix 100 vegades l'experiment de treure una bola i tornar-la al bombo. Els resultats: bola 0->7, 1->13, 2->11, 3->12, 4->8, 5->10, 6->12, 7->6, 8->10, 9->11. Esdeveniments: $A=$«Múltiple de 3», $B=$«Nombre senar», $C=$«Divisor de 6».",
   "enunciat": "Quina és la freqüència relativa de $A\\cup B$ (múltiple de $3$ o nombre senar)?",
   "opcions": [
    "$\\dfrac{94}{100}$, sumant directament les freqüències de $A$ i de $B$ sense ajustar res",
    "$\\dfrac{23}{100}$, calculant en realitat la intersecció $A\\cap B$",
    "$\\dfrac{52}{100}$, agafant només la freqüència de $B$",
    "$\\dfrac{71}{100}$"
   ],
   "pistes": [
    "$A\\cup B$ inclou totes les boles que compleixen $A$, $B$, o totes dues alhora: $\\{0,1,3,5,6,7,9\\}$, sense repetir el $3$ i el $9$.",
    "Suma les freqüències d'aquests $7$ valors, un sol cop cadascun."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJTdW1hciBkaXJlY3RhbWVudCAkZl9BK2ZfQiQgY29tcHRhIERVRVMgdmVnYWRlcyBsZXMgYm9sZXMgcXVlIGNvbXBsZWl4ZW4gdG90ZXMgZHVlcyBjb25kaWNpb25zIGFsaG9yYSAoZWwgJDMkIGkgZWwgJDkkLCBxdWUgc8OzbiBtw7psdGlwbGVzIGRlICQzJCBpIHNlbmFycyk6IGNhbCBubyByZXBldGlyLWxlcyBlbiBsYSB1bmnDsy4iLCAiJDIzJCDDqXMgbGEgZnJlccO8w6huY2lhIGRlIGxhIElOVEVSU0VDQ0nDkyAoJEFcXGNhcCBCJCwgYm9sZXMgcXVlIGNvbXBsZWl4ZW4gdG90ZXMgZHVlcyBjb25kaWNpb25zKSwgbm8gZGUgbGEgdW5pw7MgKGJvbGVzIHF1ZSBjb21wbGVpeGVuIGFsbWVueXMgdW5hIGRlIGxlcyBkdWVzKS4iLCAiJDUyJCDDqXMgbGEgZnJlccO8w6huY2lhIHJlbGF0aXZhIGRlICRCJCB0b3Qgc29sLCBubyBkZSBsYSB1bmnDsyAkQVxcY3VwIEIkOiBjYWwgY29tYmluYXItbGEgYW1iIGVscyB2YWxvcnMgcXVlIG5vbcOpcyBjb21wbGVpeGVuICRBJC4iLCAiIl0sICJlcnIiOiBbIlVOSU9fRE9CTEVfQ09NUFRBREEiLCAiVU5JT19JTlRFUlNFQ0NJT19DT05GT1NFUyIsICJVTklPX0lOVEVSU0VDQ0lPX0NPTkZPU0VTIiwgIiJdLCAicmVzIjogWyIkQVxcY3VwIEI9XFx7MCwxLDMsNSw2LDcsOVxcfSQgKHVuaW50ICRBJCBpICRCJCwgc2Vuc2UgcmVwZXRpciBlbCAkMyQgaSBlbCAkOSQsIHF1ZSBqYSBoaSBzw7NuIGEgdG90ZXMgZHVlcykiLCAiJGY9NysxMysxMisxMCsxMis2KzExPTcxXFxSaWdodGFycm93XFxkZnJhY3s3MX17MTAwfSQiXX0="
  },
  {
   "id": "249c",
   "ex": 249,
   "ap": "c",
   "bloc": "laplace",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "En un bombo hi ha 10 boles numerades del 0 al 9. Es repeteix 100 vegades l'experiment de treure una bola i tornar-la al bombo. Els resultats: bola 0->7, 1->13, 2->11, 3->12, 4->8, 5->10, 6->12, 7->6, 8->10, 9->11. Esdeveniments: $A=$«Múltiple de 3», $B=$«Nombre senar», $C=$«Divisor de 6».",
   "enunciat": "Quina és la freqüència relativa de $A\\cap B$ (múltiple de $3$ i, alhora, senar)?",
   "opcions": [
    "$\\dfrac{94}{100}$, sumant les freqüències de $A$ i $B$ sense ajustar res",
    "$\\dfrac{23}{100}$",
    "$\\dfrac{71}{100}$, calculant en realitat la unió $A\\cup B$",
    "$\\dfrac{42}{100}$, agafant només la freqüència de $A$"
   ],
   "pistes": [
    "$A\\cap B$ inclou només les boles que són múltiple de $3$ I senars alhora: revisa quins valors de $\\{0,3,6,9\\}$ són senars.",
    "Només el $3$ i el $9$ compleixen totes dues condicions."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJTdW1hciBkaXJlY3RhbWVudCAkZl9BK2ZfQiQgbm8gZG9uYSBsYSBpbnRlcnNlY2Npw7M6IGNhbCBpZGVudGlmaWNhciBxdWlucyB2YWxvcnMgY29tcGxlaXhlbiBUT1RFUyBEVUVTIGNvbmRpY2lvbnMgYWxob3JhICgkMyQgaSAkOSQpLCBpIHN1bWFyIG5vbcOpcyBsZXMgc2V2ZXMgZnJlccO8w6huY2llcy4iLCAiIiwgIiQ3MSQgw6lzIGxhIGZyZXHDvMOobmNpYSBkZSBsYSBVTknDkyAoJEFcXGN1cCBCJCwgYm9sZXMgcXVlIGNvbXBsZWl4ZW4gYWxtZW55cyB1bmEgY29uZGljacOzKSwgbm8gZGUgbGEgaW50ZXJzZWNjacOzIChib2xlcyBxdWUgY29tcGxlaXhlbiB0b3RlcyBkdWVzIGFsaG9yYSkuIiwgIiQ0MiQgw6lzIGxhIGZyZXHDvMOobmNpYSByZWxhdGl2YSBkZSAkQSQgdG90IHNvbCwgbm8gZGUgbGEgaW50ZXJzZWNjacOzICRBXFxjYXAgQiQ6IGNhbCBpZGVudGlmaWNhciBxdWlucyB2YWxvcnMgZGUgJEEkIHPDs24gVEFNQsOJIHNlbmFycy4iXSwgImVyciI6IFsiVU5JT19JTlRFUlNFQ0NJT19DT05GT1NFUyIsICIiLCAiVU5JT19JTlRFUlNFQ0NJT19DT05GT1NFUyIsICJVTklPX0lOVEVSU0VDQ0lPX0NPTkZPU0VTIl0sICJyZXMiOiBbIiRBXFxjYXAgQj1cXHszLDlcXH0kIChib2xlcyBxdWUgY29tcGxlaXhlbiBhbGhvcmEgc2VyIG3Dumx0aXBsZSBkZSAkMyQgaSBzZW5hcnMpIiwgIiRmPTEyKzExPTIzXFxSaWdodGFycm93XFxkZnJhY3syM317MTAwfSQiXX0="
  },
  {
   "id": "249d",
   "ex": 249,
   "ap": "d",
   "bloc": "laplace",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "En un bombo hi ha 10 boles numerades del 0 al 9. Es repeteix 100 vegades l'experiment de treure una bola i tornar-la al bombo. Els resultats: bola 0->7, 1->13, 2->11, 3->12, 4->8, 5->10, 6->12, 7->6, 8->10, 9->11. Esdeveniments: $A=$«Múltiple de 3», $B=$«Nombre senar», $C=$«Divisor de 6».",
   "enunciat": "Quina és la freqüència relativa de $A\\cup C$ (múltiple de $3$ o divisor de $6$)?",
   "opcions": [
    "$\\dfrac{24}{100}$, calculant la intersecció en comptes de la unió",
    "$\\dfrac{90}{100}$, sumant directament les freqüències de $A$ i de $C$ sense ajustar res",
    "$\\dfrac{48}{100}$, agafant només la freqüència de $C$",
    "$\\dfrac{66}{100}=\\dfrac{33}{50}$"
   ],
   "pistes": [
    "$A\\cup C$ inclou totes les boles que compleixen $A=\\{0,3,6,9\\}$, $C=\\{1,2,3,6\\}$, o totes dues alhora, sense repetir el $3$ i el $6$.",
    "Suma les freqüències d'aquests valors, un sol cop cadascun."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3QgdmFsb3IgY29ycmVzcG9uZHJpYSwgc2kgZGUgY2FzLCBhIGxhIGludGVyc2VjY2nDsyAkQVxcY2FwIEMkIChib2xlcyBtw7psdGlwbGVzIGRlICQzJCBpIGRpdmlzb3JzIGRlICQ2JCBhbGhvcmEpLCBubyBhIGxhIHVuacOzLCBxdWUgaW5jbG91IHRvdGVzIGxlcyBib2xlcyBxdWUgY29tcGxlaXhlbiBhbG1lbnlzIHVuYSBkZSBsZXMgZHVlcyBjb25kaWNpb25zLiIsICJTdW1hciBkaXJlY3RhbWVudCAkZl9BK2ZfQyQgY29tcHRhIERVRVMgdmVnYWRlcyBsZXMgYm9sZXMgcXVlIGNvbXBsZWl4ZW4gdG90ZXMgZHVlcyBjb25kaWNpb25zIGFsaG9yYSAoJDMkIGkgJDYkLCBxdWUgc8OzbiBtw7psdGlwbGVzIGRlICQzJCBpIGFsaG9yYSBkaXZpc29ycyBkZSAkNiQpOiBjYWwgbm8gcmVwZXRpci1sZXMgZW4gbGEgdW5pw7MuIiwgIiQ0OCQgw6lzIGxhIGZyZXHDvMOobmNpYSByZWxhdGl2YSBkZSAkQyQgdG90IHNvbCwgbm8gZGUgbGEgdW5pw7MgJEFcXGN1cCBDJDogY2FsIGNvbWJpbmFyLWxhIGFtYiBlbHMgdmFsb3JzIHF1ZSBub23DqXMgY29tcGxlaXhlbiAkQSQuIiwgIiJdLCAiZXJyIjogWyJVTklPX0lOVEVSU0VDQ0lPX0NPTkZPU0VTIiwgIlVOSU9fRE9CTEVfQ09NUFRBREEiLCAiVU5JT19JTlRFUlNFQ0NJT19DT05GT1NFUyIsICIiXSwgInJlcyI6IFsiJEFcXGN1cCBDPVxcezAsMSwyLDMsNiw5XFx9JCAoc2Vuc2UgcmVwZXRpciBlbCAkMyQgaSBlbCAkNiQsIHF1ZSBqYSBoaSBzw7NuIGEgdG90ZXMgZHVlcykiLCAiJGY9NysxMysxMSsxMisxMisxMT02NlxcUmlnaHRhcnJvd1xcZGZyYWN7NjZ9ezEwMH09XFxkZnJhY3szM317NTB9JCJdfQ=="
  },
  {
   "id": "250a",
   "ex": 250,
   "ap": "a",
   "bloc": "laplace",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Llancem 100 vegades un dau tetraèdric, anotem el nombre de la cara oculta: cara 1->28, cara 2->22, cara 3->30, cara 4->20.",
   "enunciat": "Quina és la freqüència relativa de l'esdeveniment «Múltiple de $3$»?",
   "opcions": [
    "$\\dfrac{50}{100}$, comptant també la cara $6$ com si el dau en tingués",
    "$\\dfrac{30}{100}=\\dfrac{3}{10}$",
    "$\\dfrac{3}{100}$, confonent el valor de la cara amb la seva freqüència",
    "$\\dfrac{100}{100}=1$, com si totes les cares fossin múltiples de $3$"
   ],
   "pistes": [
    "Aquest dau té només $4$ cares. Quina d'elles és múltiple de $3$?",
    "La freqüència relativa és el nombre de vegades que ha sortit aquella cara dividit pel total de tirades, $100$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3Qgw6lzIHVuIGRhdSBURVRSQcOIRFJJQzogbm9tw6lzIHTDqSAkNCQgY2FyZXMgKGRlIGwnJDEkIGFsICQ0JCksIG5vICQ2JCBjb20gdW4gZGF1IG5vcm1hbC4gTm9tw6lzIGxhIGNhcmEgJDMkIMOpcyBtw7psdGlwbGUgZGUgJDMkLiIsICIiLCAiXCJNw7psdGlwbGUgZGUgJDMkXCIgZW4gYXF1ZXN0IGRhdSAoY2FyZXMgJDEkIGEgJDQkKSBub23DqXMgbCfDqXMgbGEgY2FyYSAkMyQ6IGxhIGZyZXHDvMOobmNpYSByZWxhdGl2YSDDqXMgbGEgc2V2YSBmcmVxw7zDqG5jaWEgb2JzZXJ2YWRhICgkMzAkKSBlbnRyZSBlbCB0b3RhbCAoJDEwMCQpLCBubyBlbCBwcm9waSB2YWxvciAkMyQuIiwgIk5vbcOpcyBsYSBjYXJhICQzJCDDqXMgbcO6bHRpcGxlIGRlICQzJCBlbnRyZSBsZXMgJDQkIHBvc3NpYmxlcyAoJDEsMiwzLDQkKTogbm8gdG90ZXMgbGVzIHRpcmFkZXMgY29tcGxlaXhlbiBhcXVlc3RhIGNvbmRpY2nDsy4iXSwgImVyciI6IFsiRVNQQUlfTU9TVFJBTF9NQUxfQ09NUFRBVCIsICIiLCAiRlJFUV9SRUxBVElWQV9QUk9CQUJJTElUQVRfQ09ORk9TRVMiLCAiRVNQQUlfTU9TVFJBTF9NQUxfQ09NUFRBVCJdLCAicmVzIjogWyJNw7psdGlwbGUgZGUgJDMkIChub23DqXMgbGEgY2FyYSAkMyQpOiAkXFxkZnJhY3szMH17MTAwfT1cXGRmcmFjezN9ezEwfSQiXX0="
  },
  {
   "id": "250b",
   "ex": 250,
   "ap": "b",
   "bloc": "laplace",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Llancem 100 vegades un dau tetraèdric, anotem el nombre de la cara oculta: cara 1->28, cara 2->22, cara 3->30, cara 4->20.",
   "enunciat": "Quina és la freqüència relativa de l'esdeveniment «Múltiple de $2$»?",
   "opcions": [
    "$\\dfrac{22}{100}$, comptant només la cara $2$",
    "$\\dfrac{20}{100}$, comptant només la cara $4$",
    "$\\dfrac{72}{100}$, calculant en realitat \"més gran que $1$\"",
    "$\\dfrac{42}{100}=\\dfrac{21}{50}$"
   ],
   "pistes": [
    "Quines cares del $1$ al $4$ són múltiples de $2$?",
    "Les cares $2$ i $4$: suma les seves freqüències."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJcIk3Dumx0aXBsZSBkZSAkMiRcIiBubyDDqXMgbm9tw6lzIGxhIGNhcmEgJDIkOiBsYSBjYXJhICQ0JCB0YW1iw6kgaG8gw6lzLiBDYWwgc3VtYXIgbGVzIGZyZXHDvMOobmNpZXMgZGUgdG90ZXMgZHVlcy4iLCAiXCJNw7psdGlwbGUgZGUgJDIkXCIgbm8gw6lzIG5vbcOpcyBsYSBjYXJhICQ0JDogbGEgY2FyYSAkMiQgdGFtYsOpIGhvIMOpcy4gQ2FsIHN1bWFyIGxlcyBmcmVxw7zDqG5jaWVzIGRlIHRvdGVzIGR1ZXMuIiwgIkFxdWVzdCB2YWxvciBjb3JyZXNwb24gYSBsZXMgY2FyZXMgJDIkLCAkMyQgaSAkNCQgKG3DqXMgZ3JhbnMgcXVlICQxJCksIG5vIGEgbGVzIHF1ZSBzw7NuIG3Dumx0aXBsZXMgZGUgJDIkOiBlbnRyZSBhcXVlc3RlcywgZWwgJDMkIG5vIMOpcyBtw7psdGlwbGUgZGUgJDIkLiIsICIiXSwgImVyciI6IFsiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiLCAiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiLCAiRVNQQUlfTU9TVFJBTF9NQUxfQ09NUFRBVCIsICIiXSwgInJlcyI6IFsiTcO6bHRpcGxlIGRlICQyJCAoY2FyZXMgJDIkIGkgJDQkKTogJFxcZGZyYWN7MjIrMjB9ezEwMH09XFxkZnJhY3s0Mn17MTAwfT1cXGRmcmFjezIxfXs1MH0kIl19"
  },
  {
   "id": "250c",
   "ex": 250,
   "ap": "c",
   "bloc": "laplace",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Llancem 100 vegades un dau tetraèdric, anotem el nombre de la cara oculta: cara 1->28, cara 2->22, cara 3->30, cara 4->20.",
   "enunciat": "Quina és la freqüència relativa de l'esdeveniment «Cara més gran que $1$»?",
   "opcions": [
    "$\\dfrac{42}{100}$, comptant només les cares $2$ i $4$",
    "$\\dfrac{72}{100}=\\dfrac{18}{25}$",
    "$\\dfrac{100}{100}=1$, com si totes les cares complissin la condició",
    "$\\dfrac{28}{100}$, calculant en realitat el contrari (cara igual a $1$)"
   ],
   "pistes": [
    "\"Més gran que $1$\" inclou les cares $2$, $3$ i $4$.",
    "Suma les seves freqüències: $22+30+20$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJcIk3DqXMgZ3JhbiBxdWUgJDEkXCIgaW5jbG91IHRhbWLDqSBsYSBjYXJhICQzJCwgbm8gbm9tw6lzICQyJCBpICQ0JDogY2FsIHN1bWFyIGxlcyBmcmVxw7zDqG5jaWVzIGRlIGxlcyB0cmVzIGNhcmVzLiIsICIiLCAiTGEgY2FyYSAkMSQgTk8gw6lzIG3DqXMgZ3JhbiBxdWUgJDEkOiBubyB0b3RlcyBsZXMgJDQkIGNhcmVzIGNvbXBsZWl4ZW4gYXF1ZXN0YSBjb25kaWNpw7MsIG5vbcOpcyAkMyQgZCdlbGxlcy4iLCAiJDI4JCDDqXMgbGEgZnJlccO8w6huY2lhIGRlIGxhIGNhcmEgJDEkIChsJ2VzZGV2ZW5pbWVudCBDT05UUkFSSSksIG5vIGRlIGxlcyBjYXJlcyBtw6lzIGdyYW5zIHF1ZSAkMSQ6IGNhbCBzdW1hciBsZXMgZnJlccO8w6huY2llcyBkZSAkMiQsICQzJCBpICQ0JCwgbyBiw6kgcmVzdGFyICQyOCQgZGUgJDEwMCQuIl0sICJlcnIiOiBbIkNBU09TX0ZBVk9SQUJMRVNfTUFMX0NPTVBUQVRTIiwgIiIsICJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyIsICJFU0RFVkVOSU1FTlRfQ09OVFJBUklfTUFMX0NBTENVTEFUIl0sICJyZXMiOiBbIk3DqXMgZ3JhbiBxdWUgJDEkIChjYXJlcyAkMiQsICQzJCBpICQ0JCk6ICRcXGRmcmFjezIyKzMwKzIwfXsxMDB9PVxcZGZyYWN7NzJ9ezEwMH09XFxkZnJhY3sxOH17MjV9JCJdfQ=="
  },
  {
   "id": "250d",
   "ex": 250,
   "ap": "d",
   "bloc": "laplace",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Llancem 100 vegades un dau tetraèdric, anotem el nombre de la cara oculta: cara 1->28, cara 2->22, cara 3->30, cara 4->20.",
   "enunciat": "Quina és la freqüència relativa de l'esdeveniment «Cara més petita que $1$»?",
   "opcions": [
    "$\\dfrac{1}{100}$, com si hi hagués un únic cas favorable",
    "$\\dfrac{28}{100}$, confonent-lo amb la freqüència de la cara $1$",
    "Aquest esdeveniment no es pot calcular perquè no té sentit",
    "$0$ (esdeveniment impossible: cap cara del dau tetraèdric és més petita que $1$)"
   ],
   "pistes": [
    "El dau tetraèdric té cares numerades de l'$1$ al $4$: n'hi ha alguna més petita que $1$?",
    "Si cap cara no compleix la condició, quantes vegades ha passat l'esdeveniment en les $100$ tirades?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJObyBoaSBoYSBjYXAgY2FzIGZhdm9yYWJsZSwgbmkgdGFuIHNvbHMgdW46IGVsIGRhdSB0ZXRyYcOoZHJpYyBub23DqXMgdMOpIGNhcmVzIG51bWVyYWRlcyBkZSBsJyQxJCBhbCAkNCQsIGkgY2FwIGQnZWxsZXMgw6lzIG3DqXMgcGV0aXRhIHF1ZSAkMSQuIiwgIlwiTcOpcyBwZXRpdGEgcXVlICQxJFwiIE5PIGluY2xvdSBsYSBwcsOycGlhIGNhcmEgJDEkIChxdWUgw6lzIElHVUFMIGEgJDEkLCBubyBNw4lTIFBFVElUQSk6IGNhcCBjYXJhIGRlbCBkYXUgKG51bWVyYWRlcyBkZSBsJyQxJCBhbCAkNCQpIGNvbXBsZWl4IGFxdWVzdGEgY29uZGljacOzLiIsICJTw60gcXVlIHTDqSBzZW50aXQgY2FsY3VsYXItbG8sIGkgZG9uYSB1bmEgZnJlccO8w6huY2lhIHJlbGF0aXZhIGRlICQwJDogdW4gZXNkZXZlbmltZW50IGltcG9zc2libGUgdGFtYsOpIHTDqSB1bmEgcHJvYmFiaWxpdGF0IGJlbiBkZWZpbmlkYSwgcXVlIMOpcyAkMCQuIiwgIiJdLCAiZXJyIjogWyJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyIsICJFU0RFVkVOSU1FTlRfQ09OVFJBUklfTUFMX0NBTENVTEFUIiwgIkNBU09TX0ZBVk9SQUJMRVNfTUFMX0NPTVBUQVRTIiwgIiJdLCAicmVzIjogWyJDb20gcXVlIGVsIHRldHJhZWRyZSBub23DqXMgdMOpIGNhcmVzIGRlIGwnJDEkIGFsICQ0JCwgbm8gaGkgaGEgY2FwIHJlc3VsdGF0IG3DqXMgcGV0aXQgcXVlICQxJC4gJFxcZGZyYWN7MH17MTAwfT0wJCJdfQ=="
  },
  {
   "id": "251a",
   "ex": 251,
   "ap": "a",
   "bloc": "laplace",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Llancem 4 monedes iguals.",
   "enunciat": "Quina és la probabilitat d'obtenir $4$ cares?",
   "opcions": [
    "$P=\\dfrac12$, com si cada moneda contribuís independentment amb probabilitat $\\frac12$ sense combinar-les",
    "$P=\\dfrac{4}{16}=\\dfrac14$, com si hi haguessin $4$ maneres diferents d'obtenir $4$ cares",
    "$P=\\dfrac{1}{16}$",
    "$P=\\dfrac14$, com si cada moneda es tractés per separat i es multipliquessin per $4$"
   ],
   "pistes": [
    "Amb $4$ monedes hi ha $2^4=16$ resultats possibles en total, tots igualment probables.",
    "Només hi ha UNA manera d'obtenir $4$ cares (CCCC)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJMYSBwcm9iYWJpbGl0YXQgZGUgQ0FEQSBtb25lZGEgcGVyIHNlcGFyYXQgw6lzICRcXGZyYWMxMiQsIHBlcsOyIHBlciBjb21iaW5hci1sZXMgZW4gdW4gc29sIGVzZGV2ZW5pbWVudCAobGVzICQ0JCBjYXJlcyBhbGhvcmEpIGNhbCBtdWx0aXBsaWNhci1sZXMgdG90ZXMsIG5vIHF1ZWRhci1zZSBhbWIgbGEgcHJvYmFiaWxpdGF0IGQndW5hIHNvbGEgbW9uZWRhLiIsICJOb23DqXMgaGkgaGEgVU5BIG1hbmVyYSBkJ29idGVuaXIgJDQkIGNhcmVzIChDQ0NDKTogbGVzICQ0JCBtb25lZGVzIGhhbiBkZSBzb3J0aXIgdG90ZXMgY2FyYSBhbGhvcmEsIG5vIGhpIGhhIGNhcCBhbHRyYSBjb21iaW5hY2nDsyBxdWUgZG9uaSBhcXVlc3QgcmVzdWx0YXQuIiwgIiIsICJBbWIgJDQkIG1vbmVkZXMgaGkgaGEgJDJeND0xNiQgcmVzdWx0YXRzIHBvc3NpYmxlcyBlbiB0b3RhbCwgbm8gJDQkOiBjYWwgY29tcHRhciB0b3RzIGVscyByZXN1bHRhdHMgcG9zc2libGVzLCBubyBub23DqXMgZWwgbm9tYnJlIGRlIG1vbmVkZXMuIl0sICJlcnIiOiBbIkVTREVWRU5JTUVOVFNfSU5ERVBFTkRFTlRTX01BTF9DT01CSU5BVFMiLCAiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiLCAiIiwgIlBSSU5DSVBJX01VTFRJUExJQ0FUSVVfTUFMX0FQTElDQVQiXSwgInJlcyI6IFsiQW1iICQ0JCBtb25lZGVzOiAkMl40PTE2JCByZXN1bHRhdHMgcG9zc2libGVzIiwgIk5vbcOpcyBoaSBoYSB1bmEgbWFuZXJhIGQnb2J0ZW5pciAkNCQgY2FyZXMgKENDQ0MpOiAkUD1cXGRmcmFjezF9ezE2fSQiXX0="
  },
  {
   "id": "251b",
   "ex": 251,
   "ap": "b",
   "bloc": "laplace",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Llancem 4 monedes iguals.",
   "enunciat": "Quina és la probabilitat de NO obtenir cap cara (és a dir, totes creus)?",
   "opcions": [
    "$P=\\dfrac{4}{16}=\\dfrac14$, com si hi haguessin diverses maneres d'obtenir totes creus",
    "$P=\\dfrac{15}{16}$, calculant en realitat \"almenys una cara\"",
    "$P=0$, perquè sempre surt alguna cara amb $4$ monedes",
    "$P=\\dfrac{1}{16}$"
   ],
   "pistes": [
    "\"No obtenir cap cara\" equival a obtenir $4$ creus (XXXX).",
    "Igual que amb $4$ cares, només hi ha un resultat possible d'entre els $16$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJOb23DqXMgaGkgaGEgVU5BIG1hbmVyYSBkJ29idGVuaXIgJDQkIGNyZXVzIChYWFhYKTogbGVzICQ0JCBtb25lZGVzIGhhbiBkZSBzb3J0aXIgdG90ZXMgY3JldSBhbGhvcmEsIG5vIGhpIGhhIGNhcCBhbHRyYSBjb21iaW5hY2nDsyBxdWUgZG9uaSBhcXVlc3QgcmVzdWx0YXQuIiwgIkFxdWVzdCB2YWxvciBjb3JyZXNwb24gYSBsJ2VzZGV2ZW5pbWVudCBDT05UUkFSSSwgXCJvYnRlbmlyIGFsbWVueXMgdW5hIGNhcmFcIjogbGEgcHJlZ3VudGEgZGVtYW5hIFwiY2FwIGNhcmFcIiwgcXVlIMOpcyBsJ2VzZGV2ZW5pbWVudCBjb21wbGVtZW50YXJpLiIsICJObyDDqXMgaW1wb3NzaWJsZSBxdWUgc3VydGluICQ0JCBjcmV1cyBzZWd1aWRlczogw6lzIHBvYyBwcm9iYWJsZSwgcGVyw7IgcGVyZmVjdGFtZW50IHBvc3NpYmxlLiBMYSBwcm9iYWJpbGl0YXQgw6lzICRcXGZyYWN7MX17MTZ9JCwgbm8gJDAkLiIsICIiXSwgImVyciI6IFsiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiLCAiRVNERVZFTklNRU5UX0NPTlRSQVJJX01BTF9DQUxDVUxBVCIsICJWRVJFRElDVEVfSU5WRVJUSVQiLCAiIl0sICJyZXMiOiBbIlwiTm8gb2J0ZW5pciBjYXAgY2FyYVwiIGVxdWl2YWwgYSBvYnRlbmlyICQ0JCBjcmV1cyAoWFhYWCksIHRhbWLDqSB1biDDum5pYyByZXN1bHRhdDogJFA9XFxkZnJhY3sxfXsxNn0kIl19"
  },
  {
   "id": "251c",
   "ex": 251,
   "ap": "c",
   "bloc": "laplace",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Llancem 4 monedes iguals.",
   "enunciat": "Quin esdeveniment és més probable: obtenir $2$ cares, o obtenir almenys $3$ creus?",
   "opcions": [
    "Els dos esdeveniments són igual de probables, amb $P=\\dfrac{5}{16}$ cadascun",
    "És més probable obtenir $2$ cares ($P=\\frac{6}{16}=\\frac38$) que almenys $3$ creus ($P=\\frac{5}{16}$)",
    "És més probable obtenir almenys $3$ creus, perquè \"almenys\" sona a més casos possibles",
    "Els dos esdeveniments són igual de probables, amb $P=\\dfrac{6}{16}$ cadascun"
   ],
   "pistes": [
    "Compta els casos favorables de cada esdeveniment amb combinacions: $\\binom{4}{2}$ per a $2$ cares exactes, i $\\binom{4}{3}+\\binom{4}{4}$ per a almenys $3$ creus.",
    "Compara els dos numeradors sobre el mateix denominador, $16$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJObyB0ZW5lbiBsYSBtYXRlaXhhIHByb2JhYmlsaXRhdDogXCJleGFjdGFtZW50ICQyJCBjYXJlc1wiIHTDqSAkXFxiaW5vbXs0fXsyfT02JCBjYXNvcyBmYXZvcmFibGVzLCBtZW50cmUgcXVlIFwiYWxtZW55cyAkMyQgY3JldXNcIiBlbiB0w6kgJDUkLiBFbHMgZGVub21pbmFkb3JzIGNvaW5jaWRlaXhlbiAoJDE2JCksIHBlcsOyIGVscyBudW1lcmFkb3JzIG5vLiIsICIiLCAiXCJTb25hciBhIG3DqXMgY2Fzb3NcIiBubyDDqXMgdW4gY8OgbGN1bDogY29tcHRhbnQgYW1iIGN1cmEsIFwiYWxtZW55cyAkMyQgY3JldXNcIiB0w6kgJDUkIGNhc29zIGZhdm9yYWJsZXMgKCRcXGJpbm9tezR9ezN9K1xcYmlub217NH17NH09NCsxJCksIG1lbnRyZSBxdWUgXCJleGFjdGFtZW50ICQyJCBjYXJlc1wiIGVuIHTDqSAkNiQgKCRcXGJpbm9tezR9ezJ9JCk6IGVsIHNlZ29uIMOpcyBtw6lzIHByb2JhYmxlLiIsICIkXFxmcmFjezZ9ezE2fSQgw6lzIGxhIHByb2JhYmlsaXRhdCBkJ1wiZXhhY3RhbWVudCAkMiQgY2FyZXNcIiwgcGVyw7IgXCJhbG1lbnlzICQzJCBjcmV1c1wiIHTDqSB1bmEgcHJvYmFiaWxpdGF0IGRpZmVyZW50LCAkXFxmcmFjezV9ezE2fSQ6IG5vIGNvaW5jaWRlaXhlbi4iXSwgImVyciI6IFsiQ09NQklOQUNJT05TX01BTF9DT01QVEFERVMiLCAiIiwgIlZFUkVESUNURV9JTlZFUlRJVCIsICJDT01CSU5BQ0lPTlNfTUFMX0NPTVBUQURFUyJdLCAicmVzIjogWyIkMiQgY2FyZXMgZXhhY3RlczogJFxcYmlub217NH17Mn09NiQgcmVzdWx0YXRzLCAkUD1cXGRmcmFjezZ9ezE2fT1cXGRmcmFjMzgkIiwgIkFsbWVueXMgJDMkIGNyZXVzOiAkXFxiaW5vbXs0fXszfStcXGJpbm9tezR9ezR9PTQrMT01JCByZXN1bHRhdHMsICRQPVxcZGZyYWN7NX17MTZ9JCIsICJDb20gcXVlICRcXGRmcmFjezZ9ezE2fT5cXGRmcmFjezV9ezE2fSQsIMOpcyBtw6lzIHByb2JhYmxlIG9idGVuaXIgJDIkIGNhcmVzIl19"
  },
  {
   "id": "252a",
   "ex": 252,
   "ap": "a",
   "bloc": "laplace",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Un examen de tipus test consta de 5 preguntes, cada una de les quals té 3 respostes possibles.",
   "enunciat": "Calcula la probabilitat d'encertar exactament $3$ preguntes si contestes a l'atzar.",
   "opcions": [
    "$P=\\dfrac{1}{243}$, com si només hi hagués una manera d'encertar exactament $3$ preguntes",
    "$P=\\dfrac{10}{243}$, oblidant multiplicar les maneres de fallar les $2$ preguntes restants",
    "$P=\\dfrac{40}{243}$",
    "$P=\\dfrac{3}{5}$, dividint preguntes correctes entre preguntes totals"
   ],
   "pistes": [
    "El total de maneres de contestar l'examen és $3^5=243$.",
    "Per als casos favorables: tria quines $3$ preguntes s'encerten ($\\binom{5}{3}$), i per a les altres $2$, compta les maneres de fallar-les ($2$ cadascuna)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIaSBoYSBkaXZlcnNlcyBtYW5lcmVzIGRlIHRyaWFyIFFVSU5FUyAkMyQgcHJlZ3VudGVzIHMnZW5jZXJ0ZW4gKCRcXGJpbm9tezV9ezN9PTEwJCBtYW5lcmVzKSwgaSBwZXIgY2FkYXNjdW5hIGNhbCBjb25zaWRlcmFyIHRhbWLDqSBjb20gZXMgZmFsbGVuIGxlcyBhbHRyZXMgJDIkOiBubyDDqXMgdW4gw7puaWMgY2FzLiIsICJVbiBjb3AgdHJpYWRlcyBsZXMgJDMkIHByZWd1bnRlcyBxdWUgcydlbmNlcnRlbiAoJFxcYmlub217NX17M309MTAkIG1hbmVyZXMpLCBwZXIgYSBsZXMgJDIkIHByZWd1bnRlcyByZXN0YW50cyAocXVlIHMnaGFuIGRlIEZBTExBUikgaGkgaGEgJDIkIHJlc3Bvc3RlcyBpbmNvcnJlY3RlcyBwb3NzaWJsZXMgYSBjYWRhc2N1bmE6IGNhbCBtdWx0aXBsaWNhciBwZXIgJDJcXGNkb3QyPTQkLiIsICIiLCAiRWwgZGVub21pbmFkb3IgZGUgbGEgcHJvYmFiaWxpdGF0IGhhIGRlIHNlciBlbCBub21icmUgVE9UQUwgZGUgbWFuZXJlcyBkZSBjb250ZXN0YXIgbCdleGFtZW4gc2VuY2VyICgkM141PTI0MyQpLCBubyBlbCBub21icmUgZGUgcHJlZ3VudGVzLiJdLCAiZXJyIjogWyJDT01CSU5BQ0lPTlNfTUFMX0NPTVBUQURFUyIsICJDT01CSU5BQ0lPTlNfTUFMX0NPTVBUQURFUyIsICIiLCAiQ0FTT1NfUE9TU0lCTEVTX01BTF9DT01QVEFUUyJdLCAicmVzIjogWyJUb3RhbCBkZSBtYW5lcmVzIGRlIGNvbnRlc3RhcjogJDNeNT0yNDMkIiwgIkNhc29zIGZhdm9yYWJsZXM6ICRcXGJpbm9tezV9ezN9PTEwJCBtYW5lcmVzIGRlIHRyaWFyIHF1aW5lcyAkMyQgcydlbmNlcnRlbiwgaSAkMlxcY2RvdDI9NCQgbWFuZXJlcyBkZSBmYWxsYXIgbGVzIGFsdHJlcyAkMiQ6ICQxMFxcY2RvdDFcXGNkb3Q0PTQwJCIsICIkUChcXHRleHR7ZXhhY3RhbWVudCB9M1xcdGV4dHsgZW5jZXJ0c30pPVxcZGZyYWN7NDB9ezI0M30kIl19"
  },
  {
   "id": "252b",
   "ex": 252,
   "ap": "b",
   "bloc": "laplace",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Un examen de tipus test consta de 5 preguntes, cada una de les quals té 3 respostes possibles.",
   "enunciat": "Si per aprovar l'examen s'han de contestar almenys $3$ preguntes correctament, quina és la probabilitat d'aprovar?",
   "opcions": [
    "$P(\\text{aprovar})=\\dfrac{51}{243}=\\dfrac{17}{81}$",
    "$P(\\text{aprovar})=\\dfrac{3}{5}$, com si cada pregunta aportés $\\frac35$ de possibilitat d'aprovar",
    "$P(\\text{aprovar})=\\dfrac{40}{243}$, comptant només els casos d'encertar exactament $3$",
    "$P(\\text{aprovar})=\\dfrac{55}{243}$, sumant malament els casos de $3$, $4$ i $5$ encerts"
   ],
   "pistes": [
    "\"Almenys $3$\" inclou $3$, $4$ i $5$ encerts. Calcula els casos favorables de cada escenari per separat i suma'ls.",
    "Exactament $4$: $\\binom{5}{4}\\cdot1\\cdot2=10$. Exactament $5$: $\\binom{5}{5}=1$. Suma-ho amb els $40$ d'exactament $3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXByb3ZhciBkZXDDqG4gZGVsIHJlc3VsdGF0IENPTkpVTlQgZGUgbGVzICQ1JCBwcmVndW50ZXMsIG5vIGQndW5hIGZyYWNjacOzIGZpeGEgcGVyIHByZWd1bnRhOiBjYWwgY29tcHRhciB0b3RzIGVscyBjYXNvcyBmYXZvcmFibGVzIHNvYnJlIGVsIHRvdGFsIGRlICQyNDMkIG1hbmVyZXMgZGUgY29udGVzdGFyIGwnZXhhbWVuIHNlbmNlci4iLCAiXCJBbG1lbnlzICQzJFwiIGluY2xvdSB0YW1iw6kgZW5jZXJ0YXIgZXhhY3RhbWVudCAkNCQgbyBleGFjdGFtZW50ICQ1JCBwcmVndW50ZXMsIG5vIG5vbcOpcyAkMyQ6IGNhbCBzdW1hciBlbHMgY2Fzb3MgZmF2b3JhYmxlcyBkZWxzIHRyZXMgZXNjZW5hcmlzLiIsICJSZXZpc2EgZWwgcmVjb21wdGUgZGUgY2FkYSBlc2NlbmFyaSBwZXIgc2VwYXJhdDogZXhhY3RhbWVudCAkMyQgZW5jZXJ0cyAoJDQwJCBjYXNvcyksIGV4YWN0YW1lbnQgJDQkICgkMTAkIGNhc29zKSBpIGV4YWN0YW1lbnQgJDUkICgkMSQgY2FzKS4gTGEgc3VtYSBjb3JyZWN0YSDDqXMgJDUxJCwgbm8gJDU1JC4iXSwgImVyciI6IFsiIiwgIkNBU09TX1BPU1NJQkxFU19NQUxfQ09NUFRBVFMiLCAiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiLCAiQ09NQklOQUNJT05TX01BTF9DT01QVEFERVMiXSwgInJlcyI6IFsiRXhhY3RhbWVudCAkMyQgZW5jZXJ0czogJDQwJCBjYXNvcyAoYXBhcnRhdCBhbnRlcmlvcikiLCAiRXhhY3RhbWVudCAkNCQgZW5jZXJ0czogJFxcYmlub217NX17NH1cXGNkb3QxXFxjZG90Mj0xMCQgY2Fzb3MiLCAiRXhhY3RhbWVudCAkNSQgZW5jZXJ0czogJFxcYmlub217NX17NX09MSQgY2FzIiwgIkNhc29zIGZhdm9yYWJsZXMgcGVyIGFwcm92YXI6ICQ0MCsxMCsxPTUxJCIsICIkUChcXHRleHR7YXByb3Zhcn0pPVxcZGZyYWN7NTF9ezI0M309XFxkZnJhY3sxN317ODF9JCJdfQ=="
  },
  {
   "id": "252c",
   "ex": 252,
   "ap": "c",
   "bloc": "laplace",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Un examen de tipus test consta de 5 preguntes, cada una de les quals té 3 respostes possibles.",
   "enunciat": "I quina és la probabilitat de suspendre l'examen?",
   "opcions": [
    "$P(\\text{suspendre})=\\dfrac{17}{81}$, confonent-la amb la d'aprovar",
    "$P(\\text{suspendre})=1-\\dfrac{17}{81}=\\dfrac{64}{81}$",
    "$P(\\text{suspendre})=\\dfrac{192}{243}$, sense simplificar ni verificar contra $1-P(\\text{aprovar})$",
    "$P(\\text{suspendre})=1-51=-50$, restant els casos favorables en comptes de la probabilitat"
   ],
   "pistes": [
    "Suspendre és l'esdeveniment CONTRARI d'aprovar.",
    "$P(\\text{suspendre})=1-P(\\text{aprovar})$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3Qgw6lzIGVsIHZhbG9yIGRlICRQKFxcdGV4dHthcHJvdmFyfSkkLCBubyBkZSAkUChcXHRleHR7c3VzcGVuZHJlfSkkOiBjb20gcXVlIHN1c3BlbmRyZSDDqXMgbCdlc2RldmVuaW1lbnQgQ09OVFJBUkkgZCdhcHJvdmFyLCBjYWwgcmVzdGFyLWxvIGQnJDEkLCBubyByZXBldGlyLWxvLiIsICIiLCAiJFxcZnJhY3sxOTJ9ezI0M30kIG5vIGNvaW5jaWRlaXggYW1iICQxLVxcZnJhY3s1MX17MjQzfT1cXGZyYWN7MTkyfXsyNDN9JC4uLiB0b3JuYSBhIGZlciBsYSByZXN0YSBhbWIgY3VyYTogZWwgbnVtZXJhZG9yIGNvcnJlY3RlIGRlICQxLVxcZnJhY3s1MX17MjQzfSQgw6lzICQyNDMtNTE9MTkyJCwgcXVlIHNpbXBsaWZpY2F0IGRvbmEgJFxcZnJhY3s2NH17ODF9JCwgbm8gdW4gYWx0cmUgdmFsb3IuIiwgIkNhbCByZXN0YXIgbGEgUFJPQkFCSUxJVEFUICgkXFxmcmFjezE3fXs4MX0kLCB1biB2YWxvciBlbnRyZSAkMCQgaSAkMSQpIGRlICQxJCwgbm8gZWwgbm9tYnJlIGRlIGNhc29zIGZhdm9yYWJsZXMgKHF1ZSDDqXMgJDUxJCwgdW4gZW50ZXIpOiB1bmEgcHJvYmFiaWxpdGF0IG1haSBwb3Qgc2VyIG5lZ2F0aXZhLiJdLCAiZXJyIjogWyJFU0RFVkVOSU1FTlRfQ09OVFJBUklfTUFMX0NBTENVTEFUIiwgIiIsICJFU0RFVkVOSU1FTlRfQ09OVFJBUklfTUFMX0NBTENVTEFUIiwgIkVTREVWRU5JTUVOVF9DT05UUkFSSV9NQUxfQ0FMQ1VMQVQiXSwgInJlcyI6IFsiQ29tIHF1ZSBzdXNwZW5kcmUgw6lzIGVsIGNvbnRyYXJpIGQnYXByb3ZhcjogJFAoXFx0ZXh0e3N1c3BlbmRyZX0pPTEtXFxkZnJhY3sxN317ODF9PVxcZGZyYWN7NjR9ezgxfSQiXX0="
  }
 ]
};
