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
  "COMPATIBLE_INCOMPATIBLE_CONFOSOS": "Dos esdeveniments són incompatibles quan no tenen CAP resultat en comú (la seva intersecció és buida); si comparteixen encara que sigui un sol resultat, són compatibles.",
  "ESDEVENIMENT_CONTRARI_MAL_CALCULAT": "La probabilitat de l'esdeveniment contrari és $1$ menys la probabilitat de l'esdeveniment: $P(\\text{no }A)=1-P(A)$.",
  "INVERTIDA": "Has invertit la fracció. Simplificar no canvia quin terme és a dalt i quin a baix.",
  "PROBABILITAT_CONDICIONADA_MAL": "Quan es demana la probabilitat DINS d'un grup concret (no de tota la població), el denominador ha de ser la mida d'aquell grup, no el total de tots els casos.",
  "RECOMPTE_MAL_FET": "Torna a comptar les dades una per una: és fàcil saltar-se'n alguna o comptar-ne alguna dues vegades en un recompte llarg.",
  "UNIO_DOBLE_COMPTADA": "En calcular la probabilitat d'una unió, els resultats que compleixen totes dues condicions a la vegada s'han comptat dues vegades si simplement se sumen les probabilitats individuals: cal restar la intersecció un cop, $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.",
  "UNIO_INTERSECCIO_CONFOSES": "La unió ($A\\cup B$) inclou els resultats que compleixen A, B, o totes dues alhora; la intersecció ($A\\cap B$) inclou només els que compleixen totes dues coses a la vegada."
 },
 "items": [
  {
   "id": "377a",
   "ex": 377,
   "ap": "a",
   "bloc": "esdeveniments",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la probabilitat de l'esdeveniment contrari. Recorda: $P(\\text{no }A)=1-P(A)$.",
   "enunciat": "La probabilitat que plogui demà és $0{,}3$. Quina és la probabilitat que NO plogui?",
   "opcions": [
    "$0{,}7$",
    "$0{,}3$",
    "$-0{,}3$",
    "$1{,}3$"
   ],
   "pistes": [
    "Ploure i no ploure, entre totes dues, sumen $1$.",
    "$1-0{,}3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0YSDDqXMgbGEgcHJvYmFiaWxpdGF0IHF1ZSBTw40gcXVlIHBsb2d1aS4gTGEgZGVsIGNvbnRyYXJpIMOpcyBlbCBxdWUgZmFsdGEgZmlucyBhICQxJC4iLCAiSGFzIGNhbnZpYXQgZWwgc2lnbmUuIFVuYSBwcm9iYWJpbGl0YXQgbm8gcG90IHNlciBuZWdhdGl2YTogJDEtMHssfTMkLiIsICJIYXMgc3VtYXQgJDErMHssfTMkLiBVbmEgcHJvYmFiaWxpdGF0IG5vIHBvdCBwYXNzYXIgZCckMSQ6IGVzIHJlc3RhLiJdLCAiZXJyIjogWyIiLCAiRVNERVZFTklNRU5UX0NPTlRSQVJJX01BTF9DQUxDVUxBVCIsICJFU0RFVkVOSU1FTlRfQ09OVFJBUklfTUFMX0NBTENVTEFUIiwgIkVTREVWRU5JTUVOVF9DT05UUkFSSV9NQUxfQ0FMQ1VMQVQiXSwgInJlcyI6IFsiJFAoXFx0ZXh0e25vIHBsb3VyZX0pPTEtMHssfTM9MHssfTckIl19"
  },
  {
   "id": "377b",
   "ex": 377,
   "ap": "b",
   "bloc": "esdeveniments",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la probabilitat de l'esdeveniment contrari. Recorda: $P(\\text{no }A)=1-P(A)$.",
   "enunciat": "$P(A)=\\dfrac{1}{4}$. Calcula $P(\\text{no }A)$.",
   "opcions": [
    "$\\dfrac{1}{4}$",
    "$\\dfrac{3}{4}$",
    "$\\dfrac{5}{4}$",
    "$4$"
   ],
   "pistes": [
    "$A$ i «no $A$», entre totes dues, sumen $1$.",
    "$1-\\dfrac14=\\dfrac44-\\dfrac14$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3RhIMOpcyAkUChBKSQuIExhIGRlbCBjb250cmFyaSDDqXMgZWwgcXVlIGZhbHRhIGZpbnMgYSAkMSQuIiwgIiIsICJIYXMgc3VtYXQgJDErXFxkZnJhYzE0JC4gVW5hIHByb2JhYmlsaXRhdCBubyBwb3QgcGFzc2FyIGQnJDEkOiBlcyByZXN0YS4iLCAiSGFzIGludmVydGl0IGxhIGZyYWNjacOzLiBVbmEgcHJvYmFiaWxpdGF0IG5vIHBvdCBwYXNzYXIgZCckMSQ6ICQxLVxcZGZyYWMxNCQuIl0sICJlcnIiOiBbIkVTREVWRU5JTUVOVF9DT05UUkFSSV9NQUxfQ0FMQ1VMQVQiLCAiIiwgIkVTREVWRU5JTUVOVF9DT05UUkFSSV9NQUxfQ0FMQ1VMQVQiLCAiSU5WRVJUSURBIl0sICJyZXMiOiBbIiRQKFxcdGV4dHtubyB9QSk9MS1cXGRmcmFjezF9ezR9PVxcZGZyYWN7M317NH0kIl19"
  },
  {
   "id": "257a",
   "ex": 257,
   "ap": "a",
   "bloc": "esdeveniments",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "En Lluís i en Joan han de recollir l'habitació. En Lluís posa en una bossa 3 boles vermelles, 2 de verdes i 1 de blava, i proposa treure'n una: si és vermella, recull en Joan; si és blava, recull ell.",
   "enunciat": "Quina és la probabilitat de cada color de bola?",
   "opcions": [
    "$P(\\text{vermella})=\\dfrac35$, $P(\\text{verda})=\\dfrac25$, $P(\\text{blava})=\\dfrac15$",
    "$P(\\text{vermella})=\\dfrac13$, $P(\\text{verda})=\\dfrac12$, intercanviant vermella i verda",
    "$P(\\text{vermella})=\\dfrac12$, $P(\\text{verda})=\\dfrac13$, $P(\\text{blava})=\\dfrac16$",
    "Totes les boles tenen la mateixa probabilitat, $\\dfrac13$ cadascuna, perquè hi ha $3$ colors"
   ],
   "pistes": [
    "La bossa té $3+2+1=6$ boles en total: aquest és el nombre de casos possibles per als tres colors.",
    "Aplica la regla de Laplace a cada color per separat: casos favorables d'aquell color entre $6$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBkZW5vbWluYWRvciBoYSBkZSBzZXIgZWwgVE9UQUwgZGUgYm9sZXMgZGUgbGEgYm9zc2EsICQzKzIrMT02JCwgbm8gJDUkOiBzZW1ibGEgcXVlIHQnaGFzIGRlaXhhdCBsYSBib2xhIGJsYXZhIGVuIGNvbXB0YXItbGVzLiIsICJSZXZpc2EgcXVpbiBjb2xvciB0w6kgbcOpcyBib2xlczogbidoaSBoYSAkMyQgdmVybWVsbGVzIGkgbm9tw6lzICQyJCB2ZXJkZXMsIGFpeMOtIHF1ZSBsYSB2ZXJtZWxsYSBoYSBkZSB0ZW5pciBsYSBwcm9iYWJpbGl0YXQgbcOpcyBhbHRhLCBubyBsYSB2ZXJkYS4iLCAiIiwgIkVsIG5vbWJyZSBkZSBDT0xPUlMgZGlmZXJlbnRzICgkMyQpIG5vIGRldGVybWluYSBsYSBwcm9iYWJpbGl0YXQ6IGNhbCBjb21wdGFyIHF1YW50ZXMgYm9sZXMgdMOpIGNhZGEgY29sb3IsIGkgbm8gZW4gdMOpIGVsIG1hdGVpeCBub21icmUgY2FkYXNjdW4uIl0sICJlcnIiOiBbIkNBU09TX1BPU1NJQkxFU19NQUxfQ09NUFRBVFMiLCAiUkVDT01QVEVfTUFMX0ZFVCIsICIiLCAiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiXSwgInJlcyI6IFsiJFAoXFx0ZXh0e3Zlcm1lbGxhfSk9XFxkZnJhYzM2PVxcZGZyYWMxMiQsICRQKFxcdGV4dHt2ZXJkYX0pPVxcZGZyYWMyNj1cXGRmcmFjMTMkLCAkUChcXHRleHR7YmxhdmF9KT1cXGRmcmFjMTYkIl19"
  },
  {
   "id": "257b",
   "ex": 257,
   "ap": "b",
   "bloc": "esdeveniments",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "En Lluís i en Joan han de recollir l'habitació. En Lluís posa en una bossa 3 boles vermelles, 2 de verdes i 1 de blava, i proposa treure'n una: si és vermella, recull en Joan; si és blava, recull ell.",
   "enunciat": "És just el tracte que proposa en Lluís (vermella: recull en Joan; blava: recull en Lluís)?",
   "opcions": [
    "No és just: en Joan tindria una probabilitat de recollir molt més alta ($\\frac12$) que en Lluís ($\\frac16$)",
    "No es pot saber si és just sense conèixer el color favorit de cadascú",
    "Sí, és just, perquè només hi ha un color assignat a cada germà i no es repeteix cap",
    "Sí, és just, perquè cada germà té assignat un color diferent"
   ],
   "pistes": [
    "Compara la probabilitat que li toca a en Joan (vermella) amb la que li toca a en Lluís (blava).",
    "$P(\\text{vermella})=\\frac12$ enfront de $P(\\text{blava})=\\frac16$: són iguals?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiTGEganVzdMOtY2lhIGRlbCB0cmFjdGUgbm8gZGVww6huIGRlIHByZWZlcsOobmNpZXMgcGVyc29uYWxzIHBlbHMgY29sb3JzOiBkZXDDqG4gw7puaWNhbWVudCBkZSBzaSBsZXMgcHJvYmFiaWxpdGF0cyBhc3NpZ25hZGVzIGEgY2FkYSBnZXJtw6Agc8OzbiBpZ3VhbHMgbyBuby4iLCAiUXVlIGVscyBjb2xvcnMgbm8gZXMgcmVwZXRlaXhpbiBlbnRyZSBnZXJtYW5zIG5vIGdhcmFudGVpeCBxdWUgZWwgdHJhY3RlIHNpZ3VpIGp1c3Q6IGVsIHF1ZSBobyBkZXRlcm1pbmEgw6lzIHNpIGxlcyBwcm9iYWJpbGl0YXRzIGRlIHNvcnRpciBjYWRhIGNvbG9yIGFzc2lnbmF0IHPDs24gaWd1YWxzLCBpIG5vIGhvIHPDs24uIiwgIlRlbmlyIHVuIGNvbG9yIGFzc2lnbmF0IG5vIGZhIGVsIHRyYWN0ZSBqdXN0IHBlciBzaSBzb2w6IGNhbCBxdWUgbGEgUFJPQkFCSUxJVEFUIGRlIHNvcnRpciBhcXVlbGwgY29sb3Igc2lndWkgaWd1YWwgcGVyIGEgdG90cyBkb3MsIGkgYXF1w60gbm8gaG8gw6lzICgkXFxmcmFjMTIkIHBlciBsYSB2ZXJtZWxsYSBlbmZyb250IGRlICRcXGZyYWMxNiQgcGVyIGxhIGJsYXZhKS4iXSwgImVyciI6IFsiIiwgIlBST0JBQklMSVRBVF9DT05ESUNJT05BREFfTUFMIiwgIlBST0JBQklMSVRBVF9DT05ESUNJT05BREFfTUFMIiwgIlBST0JBQklMSVRBVF9DT05ESUNJT05BREFfTUFMIl0sICJyZXMiOiBbIkVuIEpvYW4gcmVjdWxsIHNpIHN1cnQgdmVybWVsbGEgKCRQPVxcZnJhYzEyJCksIGVuIExsdcOtcyBzaSBzdXJ0IGJsYXZhICgkUD1cXGZyYWMxNiQpLiBDb20gcXVlIGxlcyBwcm9iYWJpbGl0YXRzIG5vIHPDs24gaWd1YWxzLCBlbCB0cmFjdGUgTk8gw6lzIGp1c3QiXX0="
  },
  {
   "id": "257c",
   "ex": 257,
   "ap": "c",
   "bloc": "esdeveniments",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "En Lluís i en Joan han de recollir l'habitació. En Lluís posa en una bossa 3 boles vermelles, 2 de verdes i 1 de blava, i proposa treure'n una: si és vermella, recull en Joan; si és blava, recull ell.",
   "enunciat": "En Joan proposa un nou tracte: si surt vermell, recollirà ell; si surt blau o verd, recollirà en Lluís. És just aquest tracte?",
   "opcions": [
    "No és just, perquè en Joan té assignat un sol color i en Lluís dos colors diferents",
    "Sí, és just: totes dues probabilitats són $\\frac12$ ($P(\\text{vermella})=\\frac12$, $P(\\text{blava o verda})=\\frac16+\\frac13=\\frac12$)",
    "Sí, és just, però només per casualitat, ja que no es pot comprovar amb exactitud",
    "No és just, perquè la vermella té més boles que qualsevol altre color per separat"
   ],
   "pistes": [
    "Suma les probabilitats de \"blau o verd\": $\\frac16+\\frac13$.",
    "Compara aquest resultat amb $P(\\text{vermella})=\\frac12$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBub21icmUgZGUgY29sb3JzIGFzc2lnbmF0cyBhIGNhZGFzY8O6IG5vIGRldGVybWluYSBsYSBqdXN0w61jaWEgZGVsIHRyYWN0ZTogZWwgcXVlIGltcG9ydGEgw6lzIGxhIHByb2JhYmlsaXRhdCB0b3RhbCBkZSBjYWRhIGNvbWJpbmFjacOzLCBpIHN1bWFudCBibGF2YSBpIHZlcmRhICgkXFxmcmFjMTYrXFxmcmFjMTMkKSBzJ29idMOpIGV4YWN0YW1lbnQgJFxcZnJhYzEyJCwgaWd1YWwgcXVlIGxhIHZlcm1lbGxhLiIsICIiLCAiU8OtIHF1ZSBlcyBwb3QgY29tcHJvdmFyIGFtYiBleGFjdGl0dWQsIHN1bWFudCBsZXMgZnJhY2Npb25zIGNvcnJlc3BvbmVudHM6ICRcXGZyYWMxNitcXGZyYWMxMz1cXGZyYWMxMiQsIGV4YWN0YW1lbnQgaWd1YWwgcXVlICRQKFxcdGV4dHt2ZXJtZWxsYX0pPVxcZnJhYzEyJDogbm8gw6lzIGNhc3VhbGl0YXQsIMOpcyB1biBjw6BsY3VsIGV4YWN0ZS4iLCAiRW5jYXJhIHF1ZSBsYSB2ZXJtZWxsYSB0aW5ndWkgbcOpcyBib2xlcyBxdWUgZWwgYmxhdSBvIGVsIHZlcmQgcGVyIFNFUEFSQVQsIGVsIHF1ZSBjb21wdGEgw6lzIGxhIHByb2JhYmlsaXRhdCBDT01CSU5BREEgZGUgXCJibGF1IG8gdmVyZFwiLCBxdWUgc3VtYWRhIGFycmliYSBhbHMgbWF0ZWl4b3MgJFxcZnJhYzEyJCBxdWUgbGEgdmVybWVsbGEuIl0sICJlcnIiOiBbIlBST0JBQklMSVRBVF9DT05ESUNJT05BREFfTUFMIiwgIiIsICJQUk9CQUJJTElUQVRfQ09ORElDSU9OQURBX01BTCIsICJQUk9CQUJJTElUQVRfQ09ORElDSU9OQURBX01BTCJdLCAicmVzIjogWyJSZWN1bGwgZW4gSm9hbiBzaSBzdXJ0IHZlcm1lbGwgKCRQPVxcZnJhYzEyJCksIGkgZW4gTGx1w61zIHNpIHN1cnQgYmxhdSBvIHZlcmQgKCRQPVxcZnJhYzE2K1xcZnJhYzEzPVxcZnJhYzEyJCkuIENvbSBxdWUgdG90ZXMgZHVlcyBwcm9iYWJpbGl0YXRzIHPDs24gJFxcZnJhYzEyJCwgYXF1ZXN0IHRyYWN0ZSBTw40gw6lzIGp1c3QiXX0="
  },
  {
   "id": "253a",
   "ex": 253,
   "ap": "a",
   "bloc": "esdeveniments",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "En una urna hi ha 100 boles numerades de l'1 al 100. $A=$«múltiple de 5», $B=$«múltiple de 3», $C=$«divisible per 2», $D=$«divisible per 10», $F=$«divisible per 1».",
   "enunciat": "Quants esdeveniments elementals componen $B=$«múltiple de $3$», i quina és la seva probabilitat?",
   "opcions": [
    "$34$ esdeveniments elementals (comptant l'\"$1$\" com a múltiple)",
    "$33$ esdeveniments elementals; $P(B)=\\dfrac{33}{100}$",
    "$33$ esdeveniments elementals; $P(B)=\\dfrac{100}{33}$",
    "$30$ esdeveniments elementals, comptant només fins a $90$"
   ],
   "pistes": [
    "Divideix $100$ entre $3$ i queda't amb la part entera: aquest és el nombre de múltiples de $3$ entre $1$ i $100$.",
    "$\\left\\lfloor\\frac{100}{3}\\right\\rfloor=33$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMJyQxJCBubyDDqXMgbcO6bHRpcGxlIGRlICQzJDogZWwgbm9tYnJlIGRlIG3Dumx0aXBsZXMgZGUgJDMkIGVudHJlICQxJCBpICQxMDAkIMOpcyAkXFxsZWZ0XFxsZmxvb3JcXGZyYWN7MTAwfXszfVxccmlnaHRcXHJmbG9vcj0zMyQsIG5vICQzNCQuIiwgIiIsICJVbmEgcHJvYmFiaWxpdGF0IG1haSBwb3Qgc2VyIG3DqXMgZ3JhbiBxdWUgJDEkOiBlbCBub21icmUgZGUgbcO6bHRpcGxlcyBkZSAkMyQgdmEgYWwgbnVtZXJhZG9yLCBpIGVsIHRvdGFsIGRlIGJvbGVzICgkMTAwJCkgYWwgZGVub21pbmFkb3IsIG5vIGFsIHJldsOpcy4iLCAiVCdoYXMgZGVpeGF0IHBlbCBjYW3DrSBlbHMgbcO6bHRpcGxlcyBkZSAkMyQgZW50cmUgJDkxJCBpICQxMDAkIChjb20gZWwgJDkzJCwgZWwgJDk2JCBpIGVsICQ5OSQpOiBlbCByZWNvbXB0ZSBjb3JyZWN0ZSBkZXMgZCckMSQgZmlucyBhICQxMDAkIMOpcyAkMzMkLiJdLCAiZXJyIjogWyJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyIsICIiLCAiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiLCAiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiXSwgInJlcyI6IFsiJEIkOiBtw7psdGlwbGVzIGRlICQzJCwgZGVzIGRlICQzJCBmaW5zIGEgJDk5JDogJDMzJCBlc2RldmVuaW1lbnRzIGVsZW1lbnRhbHMgKCRcXGxmbG9vcjEwMC8zXFxyZmxvb3I9MzMkKS4gJFAoQik9XFxkZnJhY3szM317MTAwfSQiXX0="
  },
  {
   "id": "253b",
   "ex": 253,
   "ap": "b",
   "bloc": "esdeveniments",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "En una urna hi ha 100 boles numerades de l'1 al 100. $A=$«múltiple de 5», $B=$«múltiple de 3», $C=$«divisible per 2», $D=$«divisible per 10», $F=$«divisible per 1».",
   "enunciat": "Quina és la probabilitat de $D=$«divisible per $10$»?",
   "opcions": [
    "$P(D)=\\dfrac{10}{100}=\\dfrac1{10}$",
    "$P(D)=\\dfrac{50}{100}=\\dfrac12$, confonent-lo amb divisible per $2$",
    "$P(D)=\\dfrac{100}{100}=1$, com si tots els números ho complissin",
    "$P(D)=\\dfrac{20}{100}=\\dfrac15$, confonent-lo amb múltiple de $5$"
   ],
   "pistes": [
    "Compta els múltiples de $10$ entre $1$ i $100$: $10,20,\\ldots,100$.",
    "Divideix $100$ entre $10$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiXCJEaXZpc2libGUgcGVyICQxMCRcIiDDqXMgbcOpcyByZXN0cmljdGl1IHF1ZSBcImRpdmlzaWJsZSBwZXIgJDIkXCI6IG5vbcOpcyBjb21wbGVpeGVuIGxhIGNvbmRpY2nDsyAkMTAsIDIwLCBcXGxkb3RzLCAxMDAkLCBubyB0b3RzIGVscyBwYXJlbGxzLiIsICJObyB0b3RzIGVscyBuw7ptZXJvcyBkZSBsJyQxJCBhbCAkMTAwJCBzw7NuIGRpdmlzaWJsZXMgcGVyICQxMCQ6IG5vbcOpcyBobyBzw7NuICQxMCwgMjAsIDMwLFxcbGRvdHMsMTAwJCwgZW4gdG90YWwgJDEwJCBkJ2VsbHMuIiwgIlwiRGl2aXNpYmxlIHBlciAkMTAkXCIgw6lzIG3DqXMgcmVzdHJpY3RpdSBxdWUgXCJtw7psdGlwbGUgZGUgJDUkXCI6IHRvdHMgZWxzIG3Dumx0aXBsZXMgZGUgJDEwJCBobyBzw7NuIHRhbWLDqSBkZSAkNSQsIHBlcsOyIG5vIGFsIHJldsOpcyAoZWwgJDUkLCBlbCAkMTUkLi4uIHPDs24gbcO6bHRpcGxlcyBkZSAkNSQgcGVyw7Igbm8gZGUgJDEwJCkuIl0sICJlcnIiOiBbIiIsICJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyIsICJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyIsICJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyJdLCAicmVzIjogWyIkRCQ6IGRpdmlzaWJsZXMgcGVyICQxMCQsIGRlcyBkZSAkMTAkIGZpbnMgYSAkMTAwJDogJDEwJCBlc2RldmVuaW1lbnRzIGVsZW1lbnRhbHMuICRQKEQpPVxcZGZyYWN7MTB9ezEwMH09XFxkZnJhYzF7MTB9JCJdfQ=="
  },
  {
   "id": "253c",
   "ex": 253,
   "ap": "c",
   "bloc": "esdeveniments",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "En una urna hi ha 100 boles numerades de l'1 al 100. $A=$«múltiple de 5», $B=$«múltiple de 3», $C=$«divisible per 2», $D=$«divisible per 10», $F=$«divisible per 1».",
   "enunciat": "Quina és la probabilitat de $F=$«divisible per $1$»?",
   "opcions": [
    "$P(F)=1$ (és l'esdeveniment segur: tots els números són divisibles per $1$)",
    "$P(F)=0$, perquè \"divisible per $1$\" no és una condició real",
    "$P(F)=\\dfrac{1}{100}$, com si només un número ho complís",
    "$P(F)=\\dfrac{50}{100}=\\dfrac12$, confonent-lo amb divisible per $2$"
   ],
   "pistes": [
    "Quins nombres NO són divisibles per $1$?",
    "Compta quantes boles de l'$1$ al $100$ compleixen la condició i divideix entre $100$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiw4lzIHVuYSBjb25kaWNpw7MgcmVhbCwgaSBsYSBjb21wbGVpeGVuIGFic29sdXRhbWVudCB0b3RzIGVscyBub21icmVzOiBwZXIgYWl4w7IgbGEgc2V2YSBwcm9iYWJpbGl0YXQgw6lzICQxJCAoZXNkZXZlbmltZW50IHNlZ3VyKSwgbm8gJDAkIChpbXBvc3NpYmxlKS4iLCAiVE9UUyBlbHMgbm9tYnJlcyBlbnRlcnMgc8OzbiBkaXZpc2libGVzIHBlciAkMSQsIG5vIG5vbcOpcyB1bjogZWxzICQxMDAkIG5vbWJyZXMgZGUgbCd1cm5hIGNvbXBsZWl4ZW4gYXF1ZXN0YSBjb25kaWNpw7MuIiwgIlwiRGl2aXNpYmxlIHBlciAkMSRcIiBubyDDqXMgZWwgbWF0ZWl4IHF1ZSBcImRpdmlzaWJsZSBwZXIgJDIkXCI6IGFic29sdXRhbWVudCB0b3RzIGVscyBub21icmVzIGNvbXBsZWl4ZW4gbGEgcHJpbWVyYSBjb25kaWNpw7MsIG5vIG5vbcOpcyBsYSBtZWl0YXQuIl0sICJlcnIiOiBbIiIsICJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyIsICJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyIsICJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyJdLCAicmVzIjogWyIkRiQ6IGRpdmlzaWJsZXMgcGVyICQxJCwgw6lzIGEgZGlyLCB0b3RzIGVscyBuw7ptZXJvcyBkZSBsJyQxJCBhbCAkMTAwJDogJDEwMCQgZXNkZXZlbmltZW50cyBlbGVtZW50YWxzLiAkUChGKT1cXGRmcmFjezEwMH17MTAwfT0xJCAobCdlc2RldmVuaW1lbnQgc2VndXIpIl19"
  },
  {
   "id": "253d",
   "ex": 253,
   "ap": "d",
   "bloc": "esdeveniments",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "En una urna hi ha 100 boles numerades de l'1 al 100. $A=$«múltiple de 5», $B=$«múltiple de 3», $C=$«divisible per 2», $D=$«divisible per 10», $F=$«divisible per 1».",
   "enunciat": "«Hi ha algun parell d'esdeveniments incompatibles entre $A$, $B$, $C$, $D$ i $F$»",
   "opcions": [
    "Cert: $D$ i $C$ són incompatibles, perquè un múltiple de $10$ no pot ser parell",
    "Cert: $A$ i $B$ són incompatibles, perquè cap número és alhora múltiple de $5$ i de $3$",
    "Fals: cap parell d'aquests cinc esdeveniments és incompatible, perquè sempre hi ha algun número que compleix totes dues condicions alhora (per exemple, el $30$ compleix totes cinc condicions a la vegada)",
    "Cert: $F$ és incompatible amb tots els altres, perquè conté tots els números"
   ],
   "pistes": [
    "Dos esdeveniments són incompatibles quan no comparteixen CAP número en comú.",
    "Prova amb un número com el $30$: compleix múltiples condicions alhora?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJVbiBtw7psdGlwbGUgZGUgJDEwJCBTRU1QUkUgw6lzIHBhcmVsbCAodG90IG3Dumx0aXBsZSBkZSAkMTAkIGhvIMOpcyB0YW1iw6kgZGUgJDIkKTogJEQkIGkgJEMkIGNvbXBhcnRlaXhlbiBtb2x0cyBlbGVtZW50cywgbm8gZW4gdGVuZW4gemVybyBlbiBjb23Dui4iLCAiU8OtIHF1ZSBuJ2hpIGhhOiBwZXIgZXhlbXBsZSwgZWwgJDE1JCBpIGVsICQzMCQgc8OzbiBtw7psdGlwbGVzIGRlICQ1JCBpIGRlICQzJCBhbGhvcmEuICRBJCBpICRCJCBjb21wYXJ0ZWl4ZW4gZWxlbWVudHMsIG5vIHPDs24gaW5jb21wYXRpYmxlcy4iLCAiIiwgIlF1ZSAkRiQgY29udGluZ3VpIHRvdHMgZWxzIG7Dum1lcm9zIGZhIHByZWNpc2FtZW50IHF1ZSBDT01QQVJURUlYSSBlbGVtZW50cyBhbWIgcXVhbHNldm9sIGFsdHJlIGVzZGV2ZW5pbWVudCAodG90cyBlbHMgZCdhcXVlbGwgYWx0cmUgZXNkZXZlbmltZW50KTogYWl4w7IgZWwgZmEgY29tcGF0aWJsZSBhbWIgdG90cywgbm8gaW5jb21wYXRpYmxlLiJdLCAiZXJyIjogWyJDT01QQVRJQkxFX0lOQ09NUEFUSUJMRV9DT05GT1NPUyIsICJDT01QQVRJQkxFX0lOQ09NUEFUSUJMRV9DT05GT1NPUyIsICIiLCAiQ09NUEFUSUJMRV9JTkNPTVBBVElCTEVfQ09ORk9TT1MiXSwgInJlcyI6IFsiRWwgJDMwJCDDqXMgbcO6bHRpcGxlIGRlICQ1JCwgZGUgJDMkLCBwYXJlbGwsIG3Dumx0aXBsZSBkZSAkMTAkIGkgZGl2aXNpYmxlIHBlciAkMSQsIHRvdCBhIGxhIHZlZ2FkYTogY2FwIHBhcmVsbCBkJ2FxdWVzdHMgZXNkZXZlbmltZW50cyDDqXMgaW5jb21wYXRpYmxlIl19"
  },
  {
   "id": "253e",
   "ex": 253,
   "ap": "e",
   "bloc": "esdeveniments",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "En una urna hi ha 100 boles numerades de l'1 al 100. $A=$«múltiple de 5», $B=$«múltiple de 3», $C=$«divisible per 2», $D=$«divisible per 10», $F=$«divisible per 1».",
   "enunciat": "«Hi ha algun parell d'esdeveniments contraris entre $A$, $B$, $C$, $D$ i $F$»",
   "opcions": [
    "Fals: cap parell d'$A$, $B$, $C$, $D$, $F$ és contrari, ja que dos esdeveniments contraris han d'esgotar l'espai mostral sense superposar-se, i aquí tots els parells són compatibles (es superposen)",
    "Cert: $C$ (divisible per $2$) i $F$ (divisible per $1$) són contraris",
    "Cert: $B$ (múltiple de $3$) i $C$ (divisible per $2$) són contraris",
    "Cert: $A$ (múltiple de $5$) i $D$ (divisible per $10$) són contraris"
   ],
   "pistes": [
    "Dos esdeveniments contraris no comparteixen cap element I, junts, inclouen tots els resultats possibles.",
    "Comprova si cada parell comparteix algun número: si en comparteixen, no poden ser contraris."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJEMkIGkgJEYkIG5vIHPDs24gY29udHJhcmlzOiBkZSBmZXQsICRDJCBlc3TDoCBDT05USU5HVVQgZGlucyBkZSAkRiQgKHRvdCBtw7psdGlwbGUgZGUgJDIkIHRhbWLDqSDDqXMgZGl2aXNpYmxlIHBlciAkMSQpLCBpIGRvcyBlc2RldmVuaW1lbnRzIGNvbnRyYXJpcyBubyBwb2RlbiBjb21wYXJ0aXIgY2FwIGVsZW1lbnQuIiwgIiRCJCBpICRDJCBjb21wYXJ0ZWl4ZW4gZWxlbWVudHMgKGNvbSBlbCAkNiQsIG3Dumx0aXBsZSBkZSAkMyQgaSBkaXZpc2libGUgcGVyICQyJCBhbGhvcmEpOiBkb3MgZXNkZXZlbmltZW50cyBjb250cmFyaXMgbm8gcG9kZW4gdGVuaXIgY2FwIGVsZW1lbnQgZW4gY29tw7osIGFpeMOtIHF1ZSBubyBobyBzw7NuLiIsICIkQSQgaSAkRCQgbm8gc8OzbiBjb250cmFyaXM6IGRlIGZldCwgJEQkIGVzdMOgIENPTlRJTkdVVCBkaW5zIGRlICRBJCAodG90IG3Dumx0aXBsZSBkZSAkMTAkIHRhbWLDqSBobyDDqXMgZGUgJDUkKSwgaSBkb3MgZXNkZXZlbmltZW50cyBjb250cmFyaXMgbm8gcG9kZW4gY29tcGFydGlyIGNhcCBlbGVtZW50LiJdLCAiZXJyIjogWyIiLCAiQ09NUEFUSUJMRV9JTkNPTVBBVElCTEVfQ09ORk9TT1MiLCAiQ09NUEFUSUJMRV9JTkNPTVBBVElCTEVfQ09ORk9TT1MiLCAiQ09NUEFUSUJMRV9JTkNPTVBBVElCTEVfQ09ORk9TT1MiXSwgInJlcyI6IFsiVG90cyBlbHMgcGFyZWxscyBkJ2FxdWVzdHMgZXNkZXZlbmltZW50cyBjb21wYXJ0ZWl4ZW4gYWxndW4gbsO6bWVybyAoc8OzbiBjb21wYXRpYmxlcyk6IHBlciB0YW50LCBjYXAgcGFyZWxsIMOpcyBjb250cmFyaSwgamEgcXVlIGVscyBjb250cmFyaXMgbWFpIGNvbXBhcnRlaXhlbiBlbGVtZW50cyJdfQ=="
  },
  {
   "id": "254a",
   "ex": 254,
   "ap": "a",
   "bloc": "esdeveniments",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "En un dinar hi ha 28 homes i 32 dones. Han menjat carn 16 homes i 20 dones, i la resta, peix.",
   "enunciat": "Si escollim una persona a l'atzar, quina és la probabilitat que sigui home?",
   "opcions": [
    "$P(\\text{home})=\\dfrac{16}{60}$, comptant només els homes que han menjat carn",
    "$P(\\text{home})=\\dfrac{28}{32}$, comparant-lo amb el nombre de dones",
    "$P(\\text{home})=\\dfrac12$, com si hi haguessin el mateix nombre d'homes i dones",
    "$P(\\text{home})=\\dfrac{28}{60}=\\dfrac{7}{15}$"
   ],
   "pistes": [
    "El total de persones al dinar és $28+32=60$.",
    "La probabilitat de ser home és $\\dfrac{28}{60}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMYSBwcmVndW50YSBkZW1hbmEgbGEgcHJvYmFiaWxpdGF0IGRlIHNlciBob21lIEVOIEdFTkVSQUwsIG5vIGQnZW50cmUgZWxzIHF1ZSBoYW4gbWVuamF0IGNhcm46IGNhbCBlbCB0b3RhbCBkJ2hvbWVzICgkMjgkKSwgbm8gbm9tw6lzIGVscyAkMTYkIHF1ZSBoYW4gbWVuamF0IGNhcm4uIiwgIkVsIGRlbm9taW5hZG9yIGRlIGxhIHByb2JhYmlsaXRhdCBoYSBkZSBzZXIgZWwgVE9UQUwgZGUgcGVyc29uZXMgYWwgZGluYXIgKCQyOCszMj02MCQpLCBubyBlbCBub21icmUgZGUgZG9uZXMuIiwgIkhpIGhhICQyOCQgaG9tZXMgaSAkMzIkIGRvbmVzOiBubyBzw7NuIGVsIG1hdGVpeCBub21icmUsIGFpeMOtIHF1ZSBsYSBwcm9iYWJpbGl0YXQgbm8gw6lzIGV4YWN0YW1lbnQgJFxcZnJhYzEyJC4iLCAiIl0sICJlcnIiOiBbIlBST0JBQklMSVRBVF9DT05ESUNJT05BREFfTUFMIiwgIkNBU09TX1BPU1NJQkxFU19NQUxfQ09NUFRBVFMiLCAiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiLCAiIl0sICJyZXMiOiBbIkhpIGhhICQyOCQgaG9tZXMgZCdlbnRyZSAkNjAkIHBlcnNvbmVzOiAkUChcXHRleHR7aG9tZX0pPVxcZGZyYWN7Mjh9ezYwfT1cXGRmcmFjezd9ezE1fSQiXX0="
  },
  {
   "id": "254b",
   "ex": 254,
   "ap": "b",
   "bloc": "esdeveniments",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "En un dinar hi ha 28 homes i 32 dones. Han menjat carn 16 homes i 20 dones, i la resta, peix.",
   "enunciat": "Quina és la probabilitat que hagi menjat peix?",
   "opcions": [
    "$P(\\text{peix})=\\dfrac{20}{60}$, comptant només les dones que han menjat peix",
    "$P(\\text{peix})=\\dfrac{24}{60}=\\dfrac25$",
    "$P(\\text{peix})=\\dfrac{36}{60}$, calculant en realitat la probabilitat de menjar carn",
    "$P(\\text{peix})=\\dfrac{16}{60}$, comptant només els homes que han menjat peix"
   ],
   "pistes": [
    "Calcula primer quantes persones han menjat carn en total: $16+20=36$.",
    "Les que han menjat peix són la resta: $60-36$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyIkMjAkIMOpcyBlbCBub21icmUgZGUgZG9uZXMgcXVlIGhhbiBtZW5qYXQgQ0FSTiwgbm8gcGVpeDogY2FsIGNhbGN1bGFyIHByaW1lciBxdWkgaGEgbWVuamF0IHBlaXggKGxhIHJlc3RhLCAkNjAtMzY9MjQkIHBlcnNvbmVzIGVuIHRvdGFsKS4iLCAiIiwgIiQzNiQgw6lzIGVsIHRvdGFsIGRlIHBlcnNvbmVzIHF1ZSBoYW4gbWVuamF0IENBUk4gKCQxNisyMCQpLCBubyBwZWl4OiBsYSByZXN0YSwgJDYwLTM2PTI0JCwgw6lzIHF1aSBoYSBtZW5qYXQgcGVpeC4iLCAiTGEgcHJlZ3VudGEgZGVtYW5hIGxhIHByb2JhYmlsaXRhdCBkZSBtZW5qYXIgcGVpeCBFTiBHRU5FUkFMLCBubyBub23DqXMgZW50cmUgZWxzIGhvbWVzOiBjYWwgY29tcHRhciBob21lcyBJIGRvbmVzIHF1ZSBoYW4gbWVuamF0IHBlaXguIl0sICJlcnIiOiBbIlBST0JBQklMSVRBVF9DT05ESUNJT05BREFfTUFMIiwgIiIsICJFU0RFVkVOSU1FTlRfQ09OVFJBUklfTUFMX0NBTENVTEFUIiwgIlBST0JBQklMSVRBVF9DT05ESUNJT05BREFfTUFMIl0sICJyZXMiOiBbIkhhbiBtZW5qYXQgY2FybiAkMTYrMjA9MzYkIHBlcnNvbmVzLCBpIHBlciB0YW50IHBlaXgsICQ2MC0zNj0yNCQgcGVyc29uZXM6ICRQKFxcdGV4dHtwZWl4fSk9XFxkZnJhY3syNH17NjB9PVxcZGZyYWMyNSQiXX0="
  },
  {
   "id": "254c",
   "ex": 254,
   "ap": "c",
   "bloc": "esdeveniments",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "En un dinar hi ha 28 homes i 32 dones. Han menjat carn 16 homes i 20 dones, i la resta, peix.",
   "enunciat": "Quina és la probabilitat que sigui home I hagi menjat peix?",
   "opcions": [
    "$P(\\text{home i peix})=\\dfrac{12}{60}=\\dfrac15$",
    "$P(\\text{home i peix})=\\dfrac{28+24}{60}$, sumant les probabilitats individuals com si fos una unió",
    "$P(\\text{home i peix})=\\dfrac{28}{60}$, agafant només la probabilitat de ser home",
    "$P(\\text{home i peix})=\\dfrac{16}{60}$, comptant els homes que han menjat CARN"
   ],
   "pistes": [
    "Dels $28$ homes, quants han menjat peix (no carn)?",
    "$28-16=12$ homes han menjat peix: aquest és el numerador."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiXCJIb21lIEkgcGVpeFwiIChhbWIgbGEgSSkgw6lzIHVuYSBJTlRFUlNFQ0NJw5MsIG5vIHVuYSB1bmnDszogbm8gZXMgY291ZW4gc3VtYW50IGxlcyBwcm9iYWJpbGl0YXRzIGluZGl2aWR1YWxzLCBjYWwgY29tcHRhciBkaXJlY3RhbWVudCBxdWFudGVzIHBlcnNvbmVzIGNvbXBsZWl4ZW4gdG90ZXMgZHVlcyBjb25kaWNpb25zIGFsaG9yYS4iLCAiXCJIb21lIGkgcGVpeFwiIGRlbWFuYSB0b3RlcyBkdWVzIGNvbmRpY2lvbnMgQUxIT1JBLCBubyBub23DqXMgXCJzZXIgaG9tZVwiOiBjYWwgY29tcHRhciBxdWFudHMgaG9tZXMgY29uY3JldGFtZW50IGhhbiBtZW5qYXQgcGVpeCwgbm8gdG90cyBlbHMgaG9tZXMuIiwgIiQxNiQgaG9tZXMgdmFuIG1lbmphciBjYXJuLCBubyBwZWl4OiBkZWxzICQyOCQgaG9tZXMsIGVscyBxdWUgaGFuIG1lbmphdCBwZWl4IHPDs24gJDI4LTE2PTEyJC4iXSwgImVyciI6IFsiIiwgIlVOSU9fSU5URVJTRUNDSU9fQ09ORk9TRVMiLCAiVU5JT19JTlRFUlNFQ0NJT19DT05GT1NFUyIsICJVTklPX0lOVEVSU0VDQ0lPX0NPTkZPU0VTIl0sICJyZXMiOiBbIkhhbiBtZW5qYXQgcGVpeCBpLCBhIG3DqXMsIHPDs24gaG9tZXMsICQxMiQgcGVyc29uZXMgKCQyOC0xNj0xMiQpIGQnZW50cmUgJDYwJDogJFAoXFx0ZXh0e2hvbWUgaSBwZWl4fSk9XFxkZnJhY3sxMn17NjB9PVxcZGZyYWMxNSQiXX0="
  },
  {
   "id": "255",
   "ex": 255,
   "ap": "",
   "bloc": "esdeveniments",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "En una guarderia hi ha 20 nens i 16 nenes. La meitat dels nens i tres quartes parts de les nenes tenen els cabells negres, i la resta, rossos. Quina és la probabilitat que, si n'escollim un a l'atzar, sigui nen o tingui els cabells negres?",
   "opcions": [
    "$P=\\dfrac{10}{36}$, comptant només els nens amb cabells negres",
    "$P=\\dfrac{20}{36}=\\dfrac59$, comptant només \"ser nen\"",
    "$P=\\dfrac{32}{36}=\\dfrac89$",
    "$P=\\dfrac{20}{36}+\\dfrac{22}{36}$, sumant \"ser nen\" i \"tenir cabells negres\" sense evitar la doble comptabilitat"
   ],
   "pistes": [
    "Tots els nens (siguin del color de cabells que siguin) ja compleixen \"ser nen\": només cal afegir-hi les nenes de cabells negres, que encara no comptaves.",
    "Nenes de cabells negres: $16\\cdot\\frac34=12$. Suma-les als $20$ nens."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyIkMTAkIMOpcyBsYSBJTlRFUlNFQ0NJw5MgKG5lbnMgSSBjYWJlbGxzIG5lZ3JlcyBhbGhvcmEpLCBwZXLDsiBsYSBwcmVndW50YSBkZW1hbmEgbGEgVU5Jw5MgKFwibmVuIE8gY2FiZWxscyBuZWdyZXNcIiksIHF1ZSBpbmNsb3UgbW9sdGEgbcOpcyBnZW50OiB0b3RzIGVscyBuZW5zIChzaWd1aW4gcm9zc29zIG8gbm8pIGkgdG90ZXMgbGVzIG5lbmVzIGRlIGNhYmVsbHMgbmVncmVzLiIsICJcIk5lbiBvIGNhYmVsbHMgbmVncmVzXCIgaW5jbG91IG3DqXMgZ2VudCBxdWUgbm9tw6lzIFwic2VyIG5lblwiOiB0YW1iw6kgaGkgZW50cmVuIGxlcyBuZW5lcyBxdWUgdGVuZW4gZWxzIGNhYmVsbHMgbmVncmVzLCBlbmNhcmEgcXVlIG5vIHNpZ3VpbiBuZW5zLiIsICIiLCAiVG90cyBlbHMgbmVucyBhbWIgY2FiZWxscyBuZWdyZXMgKCQxMCQpIGphIGVzdGFuIGNvbXB0YXRzIGRpbnMgZGUgXCJzZXIgbmVuXCI6IHN1bWFyIGRpcmVjdGFtZW50IGxlcyBkdWVzIHByb2JhYmlsaXRhdHMgZWxzIGNvbXB0YSBkdWVzIHZlZ2FkZXMuIENhbCByZXN0YXIgbGEgaW50ZXJzZWNjacOzLCBvIGLDqSBzdW1hciBub23DqXMgbGVzIG5lbmVzIGRlIGNhYmVsbHMgbmVncmVzIGFscyBuZW5zIChxdWUgamEgaW5jbG91ZW4gdG90cyBlbHMgY29sb3JzKS4iXSwgImVyciI6IFsiVU5JT19JTlRFUlNFQ0NJT19DT05GT1NFUyIsICJVTklPX0lOVEVSU0VDQ0lPX0NPTkZPU0VTIiwgIiIsICJVTklPX0RPQkxFX0NPTVBUQURBIl0sICJyZXMiOiBbIkNhYmVsbHMgbmVncmVzOiAkMjBcXGNkb3RcXGZyYWMxMj0xMCQgbmVucyBpICQxNlxcY2RvdFxcZnJhYzM0PTEyJCBuZW5lcyIsICJDYXNvcyBmYXZvcmFibGVzOiB0b3RzIGVscyBuZW5zICgkMjAkKSBtw6lzIGxlcyBuZW5lcyBkZSBjYWJlbGxzIG5lZ3JlcyAoJDEyJCksIHNlbnNlIHN1cGVycG9zaWNpw7MgZW50cmUgXCJuZW5cIiBpIFwibmVuYVwiOiAkMjArMTI9MzIkIiwgIiRQKFxcdGV4dHtuZW4gbyBjYWJlbGxzIG5lZ3Jlc30pPVxcZGZyYWN7MzJ9ezM2fT1cXGRmcmFjODkkIl19"
  },
  {
   "id": "256a",
   "ex": 256,
   "ap": "a",
   "bloc": "esdeveniments",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "En una ciutat llegeixen el diari A el 30% dels habitants, el diari B el 20%, i el 7% llegeixen els dos diaris.",
   "enunciat": "Quina probabilitat hi ha que, si n'escollim un a l'atzar, llegeixi algun dels dos diaris?",
   "opcions": [
    "$P(A\\cup B)=0{,}57$, calculant en realitat \"cap diari\"",
    "$P(A\\cup B)=0{,}07$, agafant només la intersecció",
    "$P(A\\cup B)=0{,}43$",
    "$P(A\\cup B)=0{,}50$, sumant directament $0{,}30+0{,}20$ sense restar res"
   ],
   "pistes": [
    "Sumar les probabilitats individuals compta dues vegades les persones que llegeixen els dos diaris.",
    "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyIkMHssfTU3JCBjb3JyZXNwb25kcmlhLCBzaSBkZSBjYXMsIGEgbGEgcHJvYmFiaWxpdGF0IGNvbnRyw6ByaWEgKFwibm8gbGxlZ2lyIGNhcCBkaWFyaVwiKSwgbm8gYSBsYSBkZSBcImxsZWdpciBhbGd1biBkZWxzIGRvc1wiLiIsICIkMHssfTA3JCDDqXMgbGEgcHJvYmFiaWxpdGF0IGRlIGxsZWdpciBUT1RTIERPUyBkaWFyaXMgKGludGVyc2VjY2nDsyksIG5vIGQnYWxndW4gZGVscyBkb3MgKHVuacOzKSwgcXVlIMOpcyBtw6lzIGdyYW4uIiwgIiIsICJTdW1hciBkaXJlY3RhbWVudCAkUChBKStQKEIpJCBjb21wdGEgZHVlcyB2ZWdhZGVzIGxlcyBwZXJzb25lcyBxdWUgbGxlZ2VpeGVuIHRvdHMgZG9zIGRpYXJpczogY2FsIHJlc3Rhci1sb3MgdW4gY29wLCAkUChBKStQKEIpLVAoQVxcY2FwIEIpJC4iXSwgImVyciI6IFsiRVNERVZFTklNRU5UX0NPTlRSQVJJX01BTF9DQUxDVUxBVCIsICJVTklPX0lOVEVSU0VDQ0lPX0NPTkZPU0VTIiwgIiIsICJVTklPX0RPQkxFX0NPTVBUQURBIl0sICJyZXMiOiBbIiRQKEFcXGN1cCBCKT1QKEEpK1AoQiktUChBXFxjYXAgQik9MHssfTMwKzB7LH0yMC0weyx9MDc9MHssfTQzJCJdfQ=="
  },
  {
   "id": "256b",
   "ex": 256,
   "ap": "b",
   "bloc": "esdeveniments",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "En una ciutat llegeixen el diari A el 30% dels habitants, el diari B el 20%, i el 7% llegeixen els dos diaris.",
   "enunciat": "I quina probabilitat hi ha que no llegeixi cap dels dos diaris?",
   "opcions": [
    "$P(\\text{cap diari})=0{,}07$, confonent-la amb la intersecció",
    "$P(\\text{cap diari})=1-0{,}30-0{,}20=0{,}50$, sense tenir en compte la intersecció",
    "$P(\\text{cap diari})=0{,}43$, confonent-la amb \"llegir algun dels dos\"",
    "$P(\\text{cap diari})=1-0{,}43=0{,}57$"
   ],
   "pistes": [
    "\"No llegir cap diari\" és l'esdeveniment contrari de \"llegir algun dels dos\".",
    "$P(\\text{cap})=1-P(A\\cup B)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyIkMHssfTA3JCDDqXMgbGEgcHJvYmFiaWxpdGF0IGRlIGxsZWdpciBUT1RTIERPUyBkaWFyaXMgYWxob3JhLCBubyBkZSBubyBsbGVnaXItbmUgY2FwOiBzw7NuIGVzZGV2ZW5pbWVudHMgY29tcGxldGFtZW50IGRpZmVyZW50cy4iLCAiQ2FsIHJlc3RhciBsYSBwcm9iYWJpbGl0YXQgZGUgbGEgVU5Jw5MgKCRQKEFcXGN1cCBCKT0weyx9NDMkKSBkJyQxJCwgbm8gcmVzdGFyIGRpcmVjdGFtZW50ICRQKEEpJCBpICRQKEIpJCBwZXIgc2VwYXJhdCAoYWl4w7Igbm8gY29tcGVuc2EgY29ycmVjdGFtZW50IGxhIGludGVyc2VjY2nDsykuIiwgIkFxdWVzdCDDqXMgZWwgdmFsb3IgZGUgJFAoQVxcY3VwIEIpJCAobGxlZ2lyIGFsZ3VuIGRpYXJpKSwgbm8gZGUgXCJubyBsbGVnaXIgY2FwXCI6IGNhbCByZXN0YXItbG8gZCckMSQsIG5vIHJlcGV0aXItbG8uIiwgIiJdLCAiZXJyIjogWyJVTklPX0lOVEVSU0VDQ0lPX0NPTkZPU0VTIiwgIlVOSU9fRE9CTEVfQ09NUFRBREEiLCAiRVNERVZFTklNRU5UX0NPTlRSQVJJX01BTF9DQUxDVUxBVCIsICIiXSwgInJlcyI6IFsiTm8gbGxlZ2lyIGNhcCBkaWFyaSDDqXMgbCdlc2RldmVuaW1lbnQgY29udHJhcmkgZGUgXCJsbGVnaXIgYWxndW4gZGVscyBkb3NcIjogJFAoXFx0ZXh0e2NhcCBkaWFyaX0pPTEtUChBXFxjdXAgQik9MS0weyx9NDM9MHssfTU3JCJdfQ=="
  },
  {
   "id": "256c",
   "ex": 256,
   "ap": "c",
   "bloc": "esdeveniments",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "En una ciutat llegeixen el diari A el 30% dels habitants, el diari B el 20%, i el 7% llegeixen els dos diaris.",
   "enunciat": "Quina probabilitat hi ha que llegeixi exactament UN dels dos diaris (no els dos)?",
   "opcions": [
    "$P(\\text{exactament un})=0{,}36$",
    "$P(\\text{exactament un})=0{,}07$, agafant la intersecció en comptes de la resta",
    "$P(\\text{exactament un})=0{,}43$, confonent-la amb \"algun dels dos\"",
    "$P(\\text{exactament un})=0{,}50$, sumant $P(A)+P(B)$ sense restar la intersecció enlloc"
   ],
   "pistes": [
    "Resta la intersecció de cada probabilitat individual per obtenir \"només A\" i \"només B\" per separat.",
    "Suma els dos resultats: $(0{,}30-0{,}07)+(0{,}20-0{,}07)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJDB7LH0wNyQgw6lzIGxhIHByb2JhYmlsaXRhdCBkZSBsbGVnaXIgZWxzIERPUyBkaWFyaXMsIHF1ZSDDqXMgcHJlY2lzYW1lbnQgZWwgcXVlIGNhbCBFWENMT1VSRSBwZXIgY2FsY3VsYXIgXCJleGFjdGFtZW50IHVuXCIuIiwgIiQweyx9NDMkIGluY2xvdSB0YW1iw6kgZWxzIHF1ZSBlbiBsbGVnZWl4ZW4gZWxzIERPUzogXCJleGFjdGFtZW50IHVuXCIgaGEgZCdleGNsb3VyZSBhcXVlc3QgZ3J1cCwgcmVzdGFudC1sbyBkZSBjYWRhIGRpYXJpIHBlciBzZXBhcmF0LiIsICJTdW1hciAkMHssfTMwKzB7LH0yMCQgZGlyZWN0YW1lbnQgaW5jbG91IGR1ZXMgdmVnYWRlcyBxdWkgbGxlZ2VpeCBlbHMgZG9zIGRpYXJpczogY2FsIHJlc3Rhci1sb3MgZGUgY2FkYSBwcm9iYWJpbGl0YXQgYWJhbnMgZGUgc3VtYXItbGVzLCAkKDB7LH0zMC0weyx9MDcpKygweyx9MjAtMHssfTA3KSQuIl0sICJlcnIiOiBbIiIsICJVTklPX0lOVEVSU0VDQ0lPX0NPTkZPU0VTIiwgIlVOSU9fSU5URVJTRUNDSU9fQ09ORk9TRVMiLCAiVU5JT19ET0JMRV9DT01QVEFEQSJdLCAicmVzIjogWyJOb23DqXMgQTogJFAoQSktUChBXFxjYXAgQik9MHssfTMwLTB7LH0wNz0weyx9MjMkIiwgIk5vbcOpcyBCOiAkUChCKS1QKEFcXGNhcCBCKT0weyx9MjAtMHssfTA3PTB7LH0xMyQiLCAiRXhhY3RhbWVudCB1bjogJDB7LH0yMysweyx9MTM9MHssfTM2JCJdfQ=="
  },
  {
   "id": "258",
   "ex": 258,
   "ap": "",
   "bloc": "esdeveniments",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Si tinc 3 claus que obren els 3 panys d'una porta, però no sé quina és la que obre cada pany, quina és la probabilitat d'encertar, al primer intent, la clau d'un dels panys? I si tingués 3 claus i només 2 panys (una clau no obre cap pany)?",
   "opcions": [
    "Amb $3$ claus i $3$ panys, $P=\\dfrac13$; però amb $3$ claus i $2$ panys, $P=\\dfrac12$, perquè hi ha menys panys",
    "No es pot calcular sense saber en quin ordre es proven les claus",
    "Amb $3$ claus i $3$ panys, $P=\\dfrac33=1$, perquè totes les claus obren algun pany",
    "En tots dos casos, $P(\\text{encertar})=\\dfrac13$"
   ],
   "pistes": [
    "En tots dos casos, tens $3$ claus per triar a l'atzar.",
    "En tots dos casos, només $1$ de les $3$ claus obre el pany concret que proves."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCBxdWUgY29tcHRhIG5vIMOpcyBxdWFudHMgcGFueXMgaGkgaGEsIHNpbsOzIHF1YW50ZXMgQ0xBVVMgdGVucyBwZXIgdHJpYXIgKHNlbXByZSAkMyQpIGkgcXVhbnRlcyBkJ2VsbGVzIG9icmVuIGVsIHBhbnkgY29uY3JldCBxdWUgcHJvdmVzIChzZW1wcmUgbm9tw6lzICQxJCk6IGVsIHJlc3VsdGF0IG5vIGNhbnZpYSBlbmNhcmEgcXVlIGhpIGhhZ2kgbWVueXMgcGFueXMuIiwgIlPDrSBxdWUgZXMgcG90IGNhbGN1bGFyIHNlbnNlIGNvbsOoaXhlciBsJ29yZHJlOiBsYSBwcm9iYWJpbGl0YXQgZCdlbmNlcnRhciBhbCBwcmltZXIgaW50ZW50IG5vbcOpcyBkZXDDqG4gZGUgcXVhbnRlcyBjbGF1cyB0ZW5zIHBlciB0cmlhciBpIHF1YW50ZXMgc8OzbiB2w6BsaWRlcyBwZXIgYWwgcGFueSBxdWUgcHJvdmVzLiIsICJRdWUgdG90ZXMgbGVzIGNsYXVzIG9icmluIEFMR1VOIHBhbnkgbm8gdm9sIGRpciBxdWUgcXVhbHNldm9sIGNsYXUgb2JyaSBFTCBwYW55IGNvbmNyZXQgcXVlIGVzdMOgcyBwcm92YW50OiBub23DqXMgJDEkIGRlIGxlcyAkMyQgY2xhdXMgb2JyZSBhcXVlbGwgcGFueSBlbiBwYXJ0aWN1bGFyLiIsICIiXSwgImVyciI6IFsiQ0FTT1NfUE9TU0lCTEVTX01BTF9DT01QVEFUUyIsICJDQVNPU19QT1NTSUJMRVNfTUFMX0NPTVBUQVRTIiwgIkNBU09TX0ZBVk9SQUJMRVNfTUFMX0NPTVBUQVRTIiwgIiJdLCAicmVzIjogWyJBbWIgJDMkIGNsYXVzLCBjYWRhc2N1bmEgb2JyaW50IHVuIHBhbnkgZGlmZXJlbnQgZGVscyAkMyQ6ICRQKFxcdGV4dHtlbmNlcnRhcn0pPVxcZGZyYWMxMyQiLCAiQW1iICQzJCBjbGF1cyBwZXLDsiBub23DqXMgJDIkIHBhbnlzICh1bmEgbm8gb2JyZSByZXMpOiBzZWd1ZWl4ZXMgdGVuaW50ICQzJCBjbGF1cywgaSBub23DqXMgJDEkIG9icmUgZWwgcGFueSBjb25jcmV0OiAkUChcXHRleHR7ZW5jZXJ0YXJ9KT1cXGRmcmFjMTMkIGlndWFsbWVudCJdfQ=="
  },
  {
   "id": "259",
   "ex": 259,
   "ap": "",
   "bloc": "esdeveniments",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "La Paula va a una botiga 2 vegades per setmana, i en Robert hi treballa 4 dies a la setmana. Si el divendres és l'únic dia en què no hi va cap dels dos (i la botiga tanca els diumenges), quina és la probabilitat que coincideixin dos dies?",
   "opcions": [
    "$P=\\dfrac{6}{10}=\\dfrac35$, calculant-ho correctament però sobre un total mal comptat ($10$ en comptes de $50$)",
    "$P=1$, perquè en Robert treballa gairebé tots els dies i sempre hi hauria de coincidir",
    "$P=\\dfrac{2}{4}=\\dfrac12$, comparant directament els dies de cadascú sense combinatòria",
    "$P=\\dfrac{30}{50}=\\dfrac35$"
   ],
   "pistes": [
    "Els dos trien dies d'entre els mateixos $5$ dies (tots menys divendres i diumenge). Compta les combinacions possibles per a cadascun amb $\\binom{5}{2}$ i $\\binom{5}{4}$.",
    "Després, compta en quantes d'aquestes combinacions els $2$ dies de la Paula cauen tots dos dins dels $4$ dies d'en Robert."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCB0b3RhbCBkZSBjb21iaW5hY2lvbnMgcG9zc2libGVzIMOpcyAkXFxiaW5vbXs1fXsyfVxcY2RvdFxcYmlub217NX17NH09MTBcXGNkb3Q1PTUwJCwgbm8gJDEwJDogYXF1ZXN0IGRhcnJlciB2YWxvciDDqXMgbm9tw6lzIGVsIG5vbWJyZSBkZSB0cmllcyBkZSBsYSBQYXVsYSwgc2Vuc2UgY29tYmluYXItbG8gYW1iIGxlcyBkJ2VuIFJvYmVydC4iLCAiRW5jYXJhIHF1ZSBlbiBSb2JlcnQgdHJlYmFsbGkgJDQkIGRlbHMgJDUkIGRpZXMsIG5vIMOpcyBzZWd1ciBxdWUgZWxzICQyJCBkaWVzIGNvbmNyZXRzIGRlIGxhIFBhdWxhIGhpIGNvaW5jaWRlaXhpbiB0b3RzIGRvczogc2kgdW4gZCdlbGxzIMOpcyBqdXN0YW1lbnQgZWwgZGlhIGxsaXVyZSBkJ2VuIFJvYmVydCwgbm9tw6lzIGhpIGNvaW5jaWRpcsOgICQxJCBkaWEsIG5vICQyJC4iLCAiRWwgY8OgbGN1bCBubyDDqXMgdW5hIHNpbXBsZSBjb21wYXJhY2nDsyBkZSAkMiQgY29udHJhICQ0JDogY2FsIGNvbXB0YXIgZGUgcXVhbnRlcyBtYW5lcmVzIGVzIHBvZGVuIHRyaWFyIGVscyBkaWVzIGRlIGNhZGFzY8O6ICgkXFxiaW5vbXs1fXsyfSQgaSAkXFxiaW5vbXs1fXs0fSQpIGksIGQnZW50cmUgdG90ZXMgYXF1ZXN0ZXMgY29tYmluYWNpb25zLCBxdWFudGVzIGZhbiBxdWUgY29pbmNpZGVpeGluIGV4YWN0YW1lbnQgZWxzICQyJCBkaWVzIGRlIGxhIFBhdWxhLiIsICIiXSwgImVyciI6IFsiQ0FTT1NfUE9TU0lCTEVTX01BTF9DT01QVEFUUyIsICJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyIsICJDT01CSU5BQ0lPTlNfTUFMX0NPTVBUQURFUyIsICIiXSwgInJlcyI6IFsiTGEgUGF1bGEgdHJpYSAkMiQgZGllcyBkJ2VudHJlICQ1JDogJFxcYmlub217NX17Mn09MTAkIG1hbmVyZXMuIEVuIFJvYmVydCBlbiB0cmViYWxsYSAkNCQgKGxpJ24gZmFsdGEgdHJpYXIgJDEkIGRlIGxsaXVyZSk6ICRcXGJpbm9tezV9ezR9PTUkIG1hbmVyZXMiLCAiVG90YWwgZGUgY29tYmluYWNpb25zIHBvc3NpYmxlczogJDEwXFxjZG90NT01MCQiLCAiQ29pbmNpZMOobmNpYSBjb21wbGV0YSAoZWxzICQyJCBkaWVzIGRlIGxhIFBhdWxhIHPDs24gZGVscyAkNCQgZCdlbiBSb2JlcnQpIHF1YW4gZWxzIGRpZXMgZGUgbGEgUGF1bGEgbm8gaW5jbG91ZW4gZWwgZGlhIGxsaXVyZSBkJ2VuIFJvYmVydDogcGVyIGEgY2FkYSB1biBkZWxzICQ1JCBwb3NzaWJsZXMgZGllcyBsbGl1cmVzLCBoaSBoYSAkXFxiaW5vbXs0fXsyfT02JCBwYXJlbGxzIGRlIGxhIFBhdWxhIHF1ZSBubyBsJ2luY2xvdWVuOiAkNVxcY2RvdDY9MzAkIGNhc29zIiwgIiRQKFxcdGV4dHtjb2luY2lkaXIgfTJcXHRleHR7IGRpZXN9KT1cXGRmcmFjezMwfXs1MH09XFxkZnJhYzM1JCJdfQ=="
  }
 ]
};
