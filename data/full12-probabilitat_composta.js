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
  "BRANCA_ARBRE_MAL_CALCULADA": "Les probabilitats de totes les branques que surten d'un mateix node han de sumar $1$. Si en falta una, es calcula restant les altres de $1$, no sumant-les ni deixant-la igual que una branca veïna.",
  "CAMI_ARBRE_MAL_MULTIPLICAT": "La probabilitat d'arribar al final d'un camí de l'arbre és el PRODUCTE de les probabilitats de totes les branques que el formen, no la suma ni només la de l'última branca.",
  "CASOS_FAVORABLES_MAL_COMPTATS": "Revisa un per un quins resultats de l'espai mostral compleixen la condició de l'esdeveniment: és fàcil oblidar un límit inclòs (\"igual o més gran que\") o comptar-ne un de més.",
  "CASOS_POSSIBLES_MAL_COMPTATS": "Revisa quants resultats TOTALS té l'experiment (els casos possibles): ha de ser el denominador de la probabilitat, no un altre nombre de l'enunciat.",
  "COMPLEMENT_ALMENYS_UN_MAL": "\"Almenys un\" es calcula com $1-P(\\text{cap})$, on $P(\\text{cap})$ és la probabilitat que NO passi cap vegada. No és el mateix que sumar les probabilitats de cada intent per separat, ni que multiplicar la probabilitat d'un sol èxit pel nombre d'intents.",
  "ESDEVENIMENT_CONTRARI_MAL_CALCULAT": "La probabilitat de l'esdeveniment contrari és $1$ menys la probabilitat de l'esdeveniment: $P(\\text{no }A)=1-P(A)$.",
  "INDEPENDENCIA_SUPOSADA_SENSE_MOTIU": "Multiplicar directament les dues probabilitats només val quan els esdeveniments són INDEPENDENTS (amb reposició, o dos experiments que no s'afecten). Si el segon depèn del que ha passat al primer (per exemple, sense reposar l'element extret), cal fer servir la probabilitat CONDICIONADA del segon esdeveniment, no la de partida.",
  "ORDRE_NO_CONSIDERAT": "Quan els dos elements combinats es poden distingir (per exemple, per color), l'ordre importa: el parell $(a,b)$ és un resultat diferent del $(b,a)$.",
  "ORDRE_NO_DEMANAT": "Has comptat els dos ordres possibles quan l'enunciat en demana un de concret. Cada camí de l'arbre és una seqüència: (V,B) i (B,V) són dos camins diferents, i sumar-los només val si la pregunta no distingeix l'ordre.",
  "PAS_INTERMEDI_PER_RESPOSTA": "El valor que has triat és correcte, però és un pas intermedi, no el que et demanen. Torna a llegir la pregunta i mira quina magnitud has d'acabar donant: sovint només falta una operació més.",
  "REEMPLACAMENT_MAL_CONSIDERAT": "Quan un element no es reposa, el nombre total de casos disminueix a la segona extracció (i el nombre de casos favorables, si l'element triat n'era un). Revisa si l'enunciat diu que es reposa o no abans de decidir el denominador de la segona branca.",
  "UNIO_INTERSECCIO_CONFOSES": "La unió ($A\\cup B$) inclou els resultats que compleixen A, B, o totes dues alhora; la intersecció ($A\\cap B$) inclou només els que compleixen totes dues coses a la vegada."
 },
 "items": [
  {
   "id": "378a",
   "ex": 378,
   "ap": "a",
   "bloc": "probabilitat_composta",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la probabilitat que passin totes dues coses. Els dos experiments són independents: es multipliquen les probabilitats.",
   "enunciat": "Llancem una moneda dues vegades. Probabilitat de treure cara les dues vegades.",
   "opcions": [
    "$\\dfrac{1}{3}$",
    "$1$",
    "$\\dfrac{1}{4}$",
    "$\\dfrac{1}{2}$"
   ],
   "pistes": [
    "La probabilitat de cara en una tirada és $\\dfrac12$.",
    "$\\dfrac12\\cdot\\dfrac12$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgY29tcHRhdCB0cmVzIHJlc3VsdGF0cyAoZHVlcyBjYXJlcywgZHVlcyBjcmV1cywgdW5hIGRlIGNhZGEpLiBQZXLDsiDCq3VuYSBkZSBjYWRhwrsgc8OzbiBkb3MgcmVzdWx0YXRzOiBjYXJhLWNyZXUgaSBjcmV1LWNhcmEuIE4naGkgaGEgcXVhdHJlLiIsICJIYXMgc3VtYXQgJFxcZGZyYWMxMitcXGRmcmFjMTIkLiBQZXJxdcOoIHBhc3NpbiBsZXMgZHVlcyBjb3NlcyBlcyBNVUxUSVBMSUNBLiIsICIiLCAiQXF1ZXN0YSDDqXMgbGEgcHJvYmFiaWxpdGF0IGQndW5hIHNvbGEgdGlyYWRhLiBFcyBkZW1hbmEgY2FyYSBJIGNhcmE6ICRcXGRmcmFjMTJcXGNkb3RcXGRmcmFjMTIkLiJdLCAiZXJyIjogWyJPUkRSRV9OT19DT05TSURFUkFUIiwgIkNBTUlfQVJCUkVfTUFMX01VTFRJUExJQ0FUIiwgIiIsICJQQVNfSU5URVJNRURJX1BFUl9SRVNQT1NUQSJdLCAicmVzIjogWyIkUChcXHRleHR7Q30sXFx0ZXh0e0N9KT1cXGRmcmFjezF9ezJ9XFxjZG90XFxkZnJhY3sxfXsyfT1cXGRmcmFjezF9ezR9JCJdfQ=="
  },
  {
   "id": "378b",
   "ex": 378,
   "ap": "b",
   "bloc": "probabilitat_composta",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la probabilitat que passin totes dues coses. Els dos experiments són independents: es multipliquen les probabilitats.",
   "enunciat": "Llancem un dau dues vegades. Probabilitat de treure un $6$ les dues vegades.",
   "opcions": [
    "$\\dfrac{1}{12}$",
    "$\\dfrac{1}{3}$",
    "$\\dfrac{1}{6}$",
    "$\\dfrac{1}{36}$"
   ],
   "pistes": [
    "La probabilitat de treure un $6$ en una tirada és $\\dfrac16$.",
    "$\\dfrac16\\cdot\\dfrac16$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgc3VtYXQgZWxzIGRlbm9taW5hZG9ycy4gRW4gbXVsdGlwbGljYXIgZnJhY2Npb25zIGVzIG11bHRpcGxpY2E6ICQ2XFxjZG90Nj0zNiQuIiwgIkhhcyBzdW1hdCAkXFxkZnJhYzE2K1xcZGZyYWMxNiQuIFBlcnF1w6ggcGFzc2luIGxlcyBkdWVzIGNvc2VzIGVzIE1VTFRJUExJQ0EuIiwgIkFxdWVzdGEgw6lzIGxhIHByb2JhYmlsaXRhdCBkJ3VuYSBzb2xhIHRpcmFkYS4gRXMgZGVtYW5hICQ2JCBJICQ2JDogJFxcZGZyYWMxNlxcY2RvdFxcZGZyYWMxNiQuIiwgIiJdLCAiZXJyIjogWyJDQU1JX0FSQlJFX01BTF9NVUxUSVBMSUNBVCIsICJDQU1JX0FSQlJFX01BTF9NVUxUSVBMSUNBVCIsICJQQVNfSU5URVJNRURJX1BFUl9SRVNQT1NUQSIsICIiXSwgInJlcyI6IFsiJFAoNiw2KT1cXGRmcmFjezF9ezZ9XFxjZG90XFxkZnJhY3sxfXs2fT1cXGRmcmFjezF9ezM2fSQiXX0="
  },
  {
   "id": "305a",
   "ex": 305,
   "ap": "a",
   "bloc": "probabilitat_composta",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Una bossa té 4 boles vermelles i 6 de blaves. En traiem una bola, apuntem el color, la TORNEM a la bossa, remenem, i en traiem una altra.",
   "enunciat": "Quina és la probabilitat que les dues boles siguin vermelles?",
   "opcions": [
    "$P(V,V)=\\dfrac{4}{10}\\cdot\\dfrac{3}{9}=\\dfrac{2}{15}$",
    "$P(V,V)=\\dfrac{4}{10}+\\dfrac{4}{10}=\\dfrac{8}{10}$",
    "$P(V,V)=\\dfrac{4}{10}\\cdot\\dfrac{4}{10}=\\dfrac{4}{25}$",
    "$P(V,V)=\\dfrac{4}{10}$, com si la segona extracció no comptés"
   ],
   "pistes": [
    "Com que la bola es reposa, les dues extraccions tenen exactament la mateixa probabilitat: $\\dfrac{4}{10}$ de vermella cada vegada.",
    "\"I\" (les dues coses alhora) es tradueix en multiplicar les probabilitats."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXXDrSBTw40gcXVlIGVzIHJlcG9zYSBsYSBib2xhOiBsYSBzZWdvbmEgZXh0cmFjY2nDsyB0b3JuYSBhIHRlbmlyICQxMCQgYm9sZXMgYSBsYSBib3NzYSwgJDQkIGRlIHZlcm1lbGxlcywgZXhhY3RhbWVudCBpZ3VhbCBxdWUgbGEgcHJpbWVyYS4gUXVhbiB1biBlbGVtZW50IG5vIGVzIHJlcG9zYSwgZWwgbm9tYnJlIHRvdGFsIGRlIGNhc29zIGRpc21pbnVlaXggYSBsYSBzZWdvbmEgZXh0cmFjY2nDsyAoaSBlbCBub21icmUgZGUgY2Fzb3MgZmF2b3JhYmxlcywgc2kgbCdlbGVtZW50IHRyaWF0IG4nZXJhIHVuKS4gUmV2aXNhIHNpIGwnZW51bmNpYXQgZGl1IHF1ZSBlcyByZXBvc2EgbyBubyBhYmFucyBkZSBkZWNpZGlyIGVsIGRlbm9taW5hZG9yIGRlIGxhIHNlZ29uYSBicmFuY2EuIiwgIkxhIHByb2JhYmlsaXRhdCBkZSBkb3MgZXNkZXZlbmltZW50cyBzZWd1aXRzIFwiaVwiIGVzIG11bHRpcGxpY2EsIG5vIHNlIHN1bWE6IHN1bWFyLWxlcyBkb25hcmlhIHVuYSBwcm9iYWJpbGl0YXQgbcOpcyBncmFuIHF1ZSBsYSBkZSB0cmV1cmUnbiBub23DqXMgdW5hLiIsICIiLCAiQ2FsIHRlbmlyIGVuIGNvbXB0ZSBUT1RFUyBEVUVTIGV4dHJhY2Npb25zLCBubyBub23DqXMgbGEgcHJpbWVyYTogbGEgcHJvYmFiaWxpdGF0IHF1ZSBwYXNzaW4gbGVzIGR1ZXMgY29zZXMgYWxob3JhIMOpcyBtw6lzIHBldGl0YSBxdWUgbGEgZCd1bmEgZGUgc29sYS4iXSwgImVyciI6IFsiUkVFTVBMQUNBTUVOVF9NQUxfQ09OU0lERVJBVCIsICJDQU1JX0FSQlJFX01BTF9NVUxUSVBMSUNBVCIsICIiLCAiQ0FNSV9BUkJSRV9NQUxfTVVMVElQTElDQVQiXSwgInJlcyI6IFsiQW1iIHJlcG9zaWNpw7MsIGNhZGEgZXh0cmFjY2nDsyDDqXMgaW5kZXBlbmRlbnQgZGUgbCdhbHRyYTogJFAoVixWKT1cXGRmcmFjezR9ezEwfVxcY2RvdFxcZGZyYWN7NH17MTB9PVxcZGZyYWN7MTZ9ezEwMH09XFxkZnJhY3s0fXsyNX0kIl19"
  },
  {
   "id": "305b",
   "ex": 305,
   "ap": "b",
   "bloc": "probabilitat_composta",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Una bossa té 4 boles vermelles i 6 de blaves. En traiem una bola, apuntem el color, la TORNEM a la bossa, remenem, i en traiem una altra.",
   "enunciat": "Quina és la probabilitat que la primera sigui vermella i la segona blava?",
   "opcions": [
    "$P(V,B)=2\\cdot\\dfrac{4}{10}\\cdot\\dfrac{6}{10}=\\dfrac{12}{25}$, comptant els dos ordres",
    "$P(V,B)=\\dfrac{4}{10}\\cdot\\dfrac{4}{10}=\\dfrac{4}{25}$, repetint la probabilitat de vermella",
    "$P(V,B)=\\dfrac{4}{10}\\cdot\\dfrac{6}{10}=\\dfrac{6}{25}$",
    "$P(V,B)=\\dfrac{4}{10}\\cdot\\dfrac{5}{9}=\\dfrac{2}{9}$"
   ],
   "pistes": [
    "La primera extracció (vermella) té probabilitat $4/10$.",
    "La segona (blava) té probabilitat $6/10$, i com que la bola s'ha reposat, aquesta xifra no canvia respecte de l'inici."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBaXjDsiDDqXMgbGEgcHJvYmFiaWxpdGF0IGRlIHRyZXVyZSB1bmEgZGUgY2FkYSBjb2xvciBlbiBRVUFMU0VWT0wgb3JkcmU6IHN1bWEgZWwgY2Ftw60gKFYsQikgaSBlbCBjYW3DrSAoQixWKS4gTCdlbnVuY2lhdCBlbiBkZW1hbmEgdW4gZGUgY29uY3JldCwgcHJpbWVyYSB2ZXJtZWxsYSBpIHNlZ29uYSBibGF2YSwgcXVlIMOpcyB1biBzb2wgY2Ftw60gZGUgbCdhcmJyZS4iLCAiTGEgc2Vnb25hIGJvbGEgaGEgZGUgc2VyIEJMQVZBLCBubyB2ZXJtZWxsYSB1bmEgYWx0cmEgdmVnYWRhOiBsYSBzZXZhIHByb2JhYmlsaXRhdCDDqXMgJDYvMTAkLCBubyAkNC8xMCQuIiwgIiIsICJMYSBib2xhIGVzIHJlcG9zYTogYSBsYSBzZWdvbmEgZXh0cmFjY2nDsyBoaSB0b3JuYSBhIGhhdmVyICQxMCQgYm9sZXMgZW4gdG90YWwsICQ2JCBkZSBibGF2ZXMsIGNvbSBhIGxhIHByaW1lcmEuIl0sICJlcnIiOiBbIk9SRFJFX05PX0RFTUFOQVQiLCAiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiLCAiIiwgIlJFRU1QTEFDQU1FTlRfTUFMX0NPTlNJREVSQVQiXSwgInJlcyI6IFsiJFAoVixCKT1cXGRmcmFjezR9ezEwfVxcY2RvdFxcZGZyYWN7Nn17MTB9PVxcZGZyYWN7MjR9ezEwMH09XFxkZnJhY3s2fXsyNX0kIl19"
  },
  {
   "id": "305c",
   "ex": 305,
   "ap": "c",
   "bloc": "probabilitat_composta",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Una bossa té 4 boles vermelles i 6 de blaves. En traiem una bola, apuntem el color, la TORNEM a la bossa, remenem, i en traiem una altra.",
   "enunciat": "Quina és la probabilitat que les dues boles siguin blaves?",
   "opcions": [
    "$P(B,B)=\\dfrac{6}{10}=0{,}6$, calculant només una extracció",
    "$P(B,B)=\\dfrac{6}{10}\\cdot\\dfrac{5}{9}=\\dfrac{1}{3}$",
    "$P(B,B)=1-\\dfrac{4}{25}=\\dfrac{21}{25}$, com si fos el contrari de l'apartat a)",
    "$P(B,B)=\\dfrac{6}{10}\\cdot\\dfrac{6}{10}=\\dfrac{9}{25}$"
   ],
   "pistes": [
    "Cada extracció té probabilitat $6/10$ de sortir blava, i com que es reposa, això no canvia a la segona.",
    "Multiplica-les: $\\dfrac{6}{10}\\cdot\\dfrac{6}{10}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJDYWwgcXVlIFRPVEVTIERVRVMgYm9sZXMgc2lndWluIGJsYXZlcywgbm8gbm9tw6lzIHVuYTogcydoYW4gZGUgbXVsdGlwbGljYXIgbGVzIHByb2JhYmlsaXRhdHMgZGUgbGVzIGR1ZXMgZXh0cmFjY2lvbnMuIiwgIkxhIGJvbGEgZXMgcmVwb3NhOiBsYSBzZWdvbmEgZXh0cmFjY2nDsyB0b3JuYSBhIHRlbmlyICQxMCQgYm9sZXMgZW4gdG90YWwsICQ2JCBkZSBibGF2ZXMuIFF1YW4gdW4gZWxlbWVudCBubyBlcyByZXBvc2EsIGVsIG5vbWJyZSB0b3RhbCBkZSBjYXNvcyBkaXNtaW51ZWl4IGEgbGEgc2Vnb25hIGV4dHJhY2Npw7MgKGkgZWwgbm9tYnJlIGRlIGNhc29zIGZhdm9yYWJsZXMsIHNpIGwnZWxlbWVudCB0cmlhdCBuJ2VyYSB1bikuIFJldmlzYSBzaSBsJ2VudW5jaWF0IGRpdSBxdWUgZXMgcmVwb3NhIG8gbm8gYWJhbnMgZGUgZGVjaWRpciBlbCBkZW5vbWluYWRvciBkZSBsYSBzZWdvbmEgYnJhbmNhLiIsICJcIkxlcyBkdWVzIGJsYXZlc1wiIG5vIMOpcyBlbCBjb250cmFyaSBkZSBcImxlcyBkdWVzIHZlcm1lbGxlc1wiOiBlbnRyZSBhcXVlc3RzIGRvcyBjYXNvcyBlbmNhcmEgaGkgaGEgbGVzIGNvbWJpbmFjaW9ucyBhbWIgdW4gY29sb3IgZGUgY2FkYS4iLCAiIl0sICJlcnIiOiBbIkNBTUlfQVJCUkVfTUFMX01VTFRJUExJQ0FUIiwgIlJFRU1QTEFDQU1FTlRfTUFMX0NPTlNJREVSQVQiLCAiQ09NUExFTUVOVF9BTE1FTllTX1VOX01BTCIsICIiXSwgInJlcyI6IFsiJFAoQixCKT1cXGRmcmFjezZ9ezEwfVxcY2RvdFxcZGZyYWN7Nn17MTB9PVxcZGZyYWN7MzZ9ezEwMH09XFxkZnJhY3s5fXsyNX0kIl19"
  },
  {
   "id": "308a",
   "ex": 308,
   "ap": "a",
   "bloc": "probabilitat_composta",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Llancem una moneda. Si surt cara, tirem un dau i mirem si surt el $6$. Si surt creu, tirem el dau i mirem si el resultat és parell. L'arbre mostra totes les probabilitats.",
   "enunciat": "Quina és la probabilitat de treure cara i després un $6$?",
   "opcions": [
    "$P(\\text{Cara},6)=\\dfrac16$, agafant només la branca del dau",
    "$P(\\text{Cara},6)=\\dfrac12+\\dfrac16=\\dfrac23$",
    "$P(\\text{Cara},6)=\\dfrac{1}{2}\\cdot\\dfrac{1}{6}=\\dfrac{1}{12}$",
    "$P(\\text{Cara},6)=\\dfrac12\\cdot\\dfrac56=\\dfrac{5}{12}$, agafant la branca de \"no surt 6\""
   ],
   "pistes": [
    "Segueix el camí de l'arbre: primer la branca \"Cara\", després la branca \"surt 6\".",
    "Al llarg d'un mateix camí les probabilitats es multipliquen; només se sumen quan s'ajunten camins diferents."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJDYWwgc2VndWlyIHRvdCBlbCBjYW3DrSBkZXMgZGUgbCdhcnJlbDogcHJpbWVyIGxhIGJyYW5jYSBkZSBcIkNhcmFcIiAoJDEvMiQpIGkgZGVzcHLDqXMgbGEgZGUgXCJzdXJ0IDZcIiAoJDEvNiQpLCBtdWx0aXBsaWNhbnQtbGVzIHRvdGVzIGR1ZXMuIiwgIkxhIHByb2JhYmlsaXRhdCBkJ3VuIGNhbcOtIGRlIGwnYXJicmUgKGNhcmEsIGkgZGVzcHLDqXMgdW4gJDYkKSDDqXMgZWwgUFJPRFVDVEUgZGUgbGVzIGR1ZXMgYnJhbnF1ZXMsIG5vIGxhIHNldmEgc3VtYS4iLCAiIiwgIkxhIHByZWd1bnRhIGRlbWFuYSBsYSBwcm9iYWJpbGl0YXQgcXVlIFNVUlRJIGVsICQ2JCwgcXVlIMOpcyBsYSBicmFuY2EgJDEvNiQsIG5vIGxhIGRlIFwibm8gc3VydCA2XCIgKCQ1LzYkKS4iXSwgImVyciI6IFsiQ0FNSV9BUkJSRV9NQUxfTVVMVElQTElDQVQiLCAiQ0FNSV9BUkJSRV9NQUxfTVVMVElQTElDQVQiLCAiIiwgIkNBU09TX0ZBVk9SQUJMRVNfTUFMX0NPTVBUQVRTIl0sICJyZXMiOiBbIiRQKFxcdGV4dHtDYXJhfSw2KT1cXGRmcmFjMTJcXGNkb3RcXGRmcmFjMTY9XFxkZnJhY3sxfXsxMn0kIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 407 186\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Diagrama d'arbre de probabilitat de 2 nivells, amb les probabilitats donades sobre cada branca.</title><g transform=\"translate(-12.0,-18.3)\"><line x1=\"30.0\" y1=\"118.0\" x2=\"180.0\" y2=\"74.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"180.0\" cy=\"74.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"74.0\" x2=\"330.0\" y2=\"52.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"52.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"74.0\" x2=\"330.0\" y2=\"96.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"96.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"30.0\" y1=\"118.0\" x2=\"180.0\" y2=\"162.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"180.0\" cy=\"162.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"162.0\" x2=\"330.0\" y2=\"140.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"140.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"162.0\" x2=\"330.0\" y2=\"184.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"184.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"30.0\" cy=\"118.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"108.1\" y=\"109.5\" text-anchor=\"middle\" class=\"fig-etq petita\">1/2</text><text x=\"253.4\" y=\"55.1\" text-anchor=\"middle\" class=\"fig-etq petita\">1/6</text><text x=\"253.4\" y=\"98.8\" text-anchor=\"middle\" class=\"fig-etq petita\">5/6</text><text x=\"101.9\" y=\"153.5\" text-anchor=\"middle\" class=\"fig-etq petita\">1/2</text><text x=\"253.4\" y=\"143.1\" text-anchor=\"middle\" class=\"fig-etq petita\">1/2</text><text x=\"253.4\" y=\"186.8\" text-anchor=\"middle\" class=\"fig-etq petita\">1/2</text><text x=\"180\" y=\"63.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">Cara</text><line class=\"fig-crida\" x1=\"330.0\" y1=\"52.0\" x2=\"338.3\" y2=\"41.9\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/><text x=\"361.1\" y=\"41.7\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">surt 6</text><line class=\"fig-crida\" x1=\"330.0\" y1=\"96.0\" x2=\"336.0\" y2=\"91.2\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/><text x=\"371.6\" y=\"93.3\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">no surt 6</text><text x=\"180\" y=\"151.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">Creu</text><line class=\"fig-crida\" x1=\"330.0\" y1=\"140.0\" x2=\"338.9\" y2=\"143.6\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/><text x=\"363.6\" y=\"148.3\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">parell</text><text x=\"357\" y=\"187.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">senar</text></g></svg>"
  },
  {
   "id": "308b",
   "ex": 308,
   "ap": "b",
   "bloc": "probabilitat_composta",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Llancem una moneda. Si surt cara, tirem un dau i mirem si surt el $6$. Si surt creu, tirem el dau i mirem si el resultat és parell. L'arbre mostra totes les probabilitats.",
   "enunciat": "Quina és la probabilitat de treure creu i després un número parell (de l'$1$ al $6$)?",
   "opcions": [
    "$P(\\text{Creu},\\text{parell})=\\dfrac{1}{2}\\cdot\\dfrac{1}{6}=\\dfrac{1}{12}$, seguint la branca del $6$ per error",
    "$P(\\text{Creu},\\text{parell})=\\dfrac12+\\dfrac12=1$",
    "$P(\\text{Creu},\\text{parell})=\\dfrac{1}{2}\\cdot\\dfrac{1}{2}=\\dfrac{1}{4}$",
    "$P(\\text{Creu},\\text{parell})=\\dfrac12$, agafant només la probabilitat de creu"
   ],
   "pistes": [
    "Un cop surt creu, la branca del dau que segueix és la de \"parell\".",
    "Multiplica la probabilitat de creu per la de \"parell\"."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJVbiBjb3Agc3VydCBDUkVVLCBsYSBicmFuY2EgZGVsIGRhdSBxdWUgdG9jYSDDqXMgbGEgZGUgXCJwYXJlbGxcIiAoJDEvMiQpLCBubyBsYSBkZSBcInN1cnQgNlwiICgkMS82JCk6IGFxdWVzdGEgw7psdGltYSBub23DqXMgcGVuamEgZGUgbGEgYnJhbmNhIGRlIFwiQ2FyYVwiLiIsICJMZXMgYnJhbnF1ZXMgZCd1biBtYXRlaXggY2Ftw60gZXMgbXVsdGlwbGlxdWVuLCBubyBzZSBzdW1lbjogc3VtYXItbGVzIG1haSBwb3QgZG9uYXIgbGEgcHJvYmFiaWxpdGF0IGQndW4gY2Ftw60gY29uY3JldC4iLCAiIiwgIkNhbCBjb21wbGV0YXIgZWwgY2Ftw60gc2VuY2VyIGZpbnMgYWwgZmluYWw6IGxhIHByb2JhYmlsaXRhdCBkZSBjcmV1ICgkMS8yJCkgbXVsdGlwbGljYWRhIHBlciBsYSBkZSBcInBhcmVsbFwiIHVuIGNvcCBoYSBzb3J0aXQgY3JldSAoJDEvMiQpLiJdLCAiZXJyIjogWyJDQU1JX0FSQlJFX01BTF9NVUxUSVBMSUNBVCIsICJDQU1JX0FSQlJFX01BTF9NVUxUSVBMSUNBVCIsICIiLCAiQ0FNSV9BUkJSRV9NQUxfTVVMVElQTElDQVQiXSwgInJlcyI6IFsiJFAoXFx0ZXh0e0NyZXV9LFxcdGV4dHtwYXJlbGx9KT1cXGRmcmFjMTJcXGNkb3RcXGRmcmFjMTI9XFxkZnJhYzE0JCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 407 186\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Diagrama d'arbre de probabilitat de 2 nivells, amb les probabilitats donades sobre cada branca.</title><g transform=\"translate(-12.0,-18.3)\"><line x1=\"30.0\" y1=\"118.0\" x2=\"180.0\" y2=\"74.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"180.0\" cy=\"74.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"74.0\" x2=\"330.0\" y2=\"52.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"52.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"74.0\" x2=\"330.0\" y2=\"96.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"96.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"30.0\" y1=\"118.0\" x2=\"180.0\" y2=\"162.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"180.0\" cy=\"162.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"162.0\" x2=\"330.0\" y2=\"140.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"140.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"162.0\" x2=\"330.0\" y2=\"184.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"184.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"30.0\" cy=\"118.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"108.1\" y=\"109.5\" text-anchor=\"middle\" class=\"fig-etq petita\">1/2</text><text x=\"253.4\" y=\"55.1\" text-anchor=\"middle\" class=\"fig-etq petita\">1/6</text><text x=\"253.4\" y=\"98.8\" text-anchor=\"middle\" class=\"fig-etq petita\">5/6</text><text x=\"101.9\" y=\"153.5\" text-anchor=\"middle\" class=\"fig-etq petita\">1/2</text><text x=\"253.4\" y=\"143.1\" text-anchor=\"middle\" class=\"fig-etq petita\">1/2</text><text x=\"253.4\" y=\"186.8\" text-anchor=\"middle\" class=\"fig-etq petita\">1/2</text><text x=\"180\" y=\"63.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">Cara</text><line class=\"fig-crida\" x1=\"330.0\" y1=\"52.0\" x2=\"338.3\" y2=\"41.9\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/><text x=\"361.1\" y=\"41.7\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">surt 6</text><line class=\"fig-crida\" x1=\"330.0\" y1=\"96.0\" x2=\"336.0\" y2=\"91.2\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/><text x=\"371.6\" y=\"93.3\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">no surt 6</text><text x=\"180\" y=\"151.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">Creu</text><line class=\"fig-crida\" x1=\"330.0\" y1=\"140.0\" x2=\"338.9\" y2=\"143.6\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/><text x=\"363.6\" y=\"148.3\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">parell</text><text x=\"357\" y=\"187.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">senar</text></g></svg>"
  },
  {
   "id": "306a",
   "ex": 306,
   "ap": "a",
   "bloc": "probabilitat_composta",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "La mateixa bossa, 4 boles vermelles i 6 de blaves. Ara en traiem una, apuntem el color, i SENSE tornar-la a la bossa, en traiem una altra.",
   "enunciat": "Quina és la probabilitat que la primera sigui vermella?",
   "opcions": [
    "$P(V_1)=\\dfrac{4}{9}$, ja descomptant la bola que encara no s'ha tret",
    "$P(V_1)=\\dfrac{4}{6}$, comparant-la amb les blaves",
    "$P(V_1)=\\dfrac{4}{10}=\\dfrac{2}{5}$",
    "$P(V_1)=\\dfrac{6}{10}$, calculant la de blava"
   ],
   "pistes": [
    "A la primera extracció encara hi ha totes les boles: $10$ en total, $4$ de vermelles.",
    "Aplica la regla de Laplace: casos favorables entre casos possibles. Que després no es torni la bola no afecta aquesta primera extracció."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJMYSBQUklNRVJBIGV4dHJhY2Npw7MgZW5jYXJhIGVzIGZhIGFtYiB0b3RlcyBsZXMgYm9sZXMgYSBsYSBib3NzYTogJDEwJCBlbiB0b3RhbCwgJDQkIGRlIHZlcm1lbGxlcy4gRWwgZGVub21pbmFkb3Igbm9tw6lzIGNhbnZpYSBhIHBhcnRpciBkZSBsYSBzZWdvbmEgZXh0cmFjY2nDsy4iLCAiRWwgZGVub21pbmFkb3IgaGEgZGUgc2VyIGVsIFRPVEFMIGRlIGJvbGVzIGEgbGEgYm9zc2EgKCQ0KzY9MTAkKSwgbm8gbm9tw6lzIGVsIG5vbWJyZSBkZSBibGF2ZXMuIiwgIiIsICJFcyBkZW1hbmEgbGEgcHJvYmFiaWxpdGF0IGRlIFZFUk1FTExBLCBpIG4naGkgaGEgJDQkIGRlICQxMCQ7ICQ2LzEwJCDDqXMgbGEgZGUgYmxhdmEuIl0sICJlcnIiOiBbIlJFRU1QTEFDQU1FTlRfTUFMX0NPTlNJREVSQVQiLCAiQ0FTT1NfUE9TU0lCTEVTX01BTF9DT01QVEFUUyIsICIiLCAiRVNERVZFTklNRU5UX0NPTlRSQVJJX01BTF9DQUxDVUxBVCJdLCAicmVzIjogWyIkUChWXzEpPVxcZGZyYWN7NH17MTB9PVxcZGZyYWMyNSQiXX0="
  },
  {
   "id": "306b",
   "ex": 306,
   "ap": "b",
   "bloc": "probabilitat_composta",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "La mateixa bossa, 4 boles vermelles i 6 de blaves. Ara en traiem una, apuntem el color, i SENSE tornar-la a la bossa, en traiem una altra.",
   "enunciat": "Si la primera ha sortit vermella, quina és ara la probabilitat que la segona també ho sigui?",
   "opcions": [
    "$P(V_2|V_1)=\\dfrac{3}{9}=\\dfrac{1}{3}$",
    "$P(V_2|V_1)=\\dfrac{3}{10}$, descomptant només el numerador",
    "$P(V_2|V_1)=\\dfrac{4}{10}$, com si res no hagués canviat",
    "$P(V_2|V_1)=\\dfrac{4}{9}$, sense descomptar la vermella ja treta"
   ],
   "pistes": [
    "Un cop treta la vermella, a la bossa ja no en queden $10$ boles, sinó $9$.",
    "De les $4$ vermelles inicials, ara en queden $3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiU2kgZXMgZGVzY29tcHRhIGxhIGJvbGEgdmVybWVsbGEgdHJldGEgZGVsIG51bWVyYWRvciAoJDRcXHRvMyQpLCB0YW1iw6kgY2FsIGRlc2NvbXB0YXItbGEgZGVsIHRvdGFsIGRlIGJvbGVzIGEgbGEgYm9zc2EgKCQxMFxcdG85JCk6IGVscyBkb3Mgbm9tYnJlcyBiYWl4ZW4gYWxob3JhLiIsICJFbCB0b3RhbCBkZSBib2xlcyBhIGxhIGJvc3NhIHRhbWLDqSBoYSBiYWl4YXQ6IGphIG5vIGVuIHF1ZWRlbiAkMTAkLCBzaW7DsyAkOSQsIHBlcnF1w6ggbidoZW0gdHJldCB1bmEgaSBubyBsJ2hlbSB0b3JuYWRhLiIsICJMYSBib2xhIHZlcm1lbGxhIHF1ZSBoYSBzb3J0aXQgcHJpbWVyIE5PIHRvcm5hIGEgbGEgYm9zc2E6IGRlIGxlcyAkNCQgdmVybWVsbGVzIGluaWNpYWxzLCBhcmEgZW4gcXVlZGVuICQzJC4gUXVhbiB1biBlbGVtZW50IG5vIGVzIHJlcG9zYSwgZWwgbm9tYnJlIHRvdGFsIGRlIGNhc29zIGRpc21pbnVlaXggYSBsYSBzZWdvbmEgZXh0cmFjY2nDsyAoaSBlbCBub21icmUgZGUgY2Fzb3MgZmF2b3JhYmxlcywgc2kgbCdlbGVtZW50IHRyaWF0IG4nZXJhIHVuKS4gUmV2aXNhIHNpIGwnZW51bmNpYXQgZGl1IHF1ZSBlcyByZXBvc2EgbyBubyBhYmFucyBkZSBkZWNpZGlyIGVsIGRlbm9taW5hZG9yIGRlIGxhIHNlZ29uYSBicmFuY2EuIl0sICJlcnIiOiBbIiIsICJSRUVNUExBQ0FNRU5UX01BTF9DT05TSURFUkFUIiwgIlJFRU1QTEFDQU1FTlRfTUFMX0NPTlNJREVSQVQiLCAiUkVFTVBMQUNBTUVOVF9NQUxfQ09OU0lERVJBVCJdLCAicmVzIjogWyJIYW4gcXVlZGF0ICQ5JCBib2xlcyBhIGxhIGJvc3NhLCAkMyQgZGUgdmVybWVsbGVzOiAkUChWXzJ8Vl8xKT1cXGRmcmFjezN9ezl9PVxcZGZyYWMxMyQiXX0="
  },
  {
   "id": "306c",
   "ex": 306,
   "ap": "c",
   "bloc": "probabilitat_composta",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "La mateixa bossa, 4 boles vermelles i 6 de blaves. Ara en traiem una, apuntem el color, i SENSE tornar-la a la bossa, en traiem una altra.",
   "enunciat": "Quina és la probabilitat que les dues boles siguin vermelles?",
   "opcions": [
    "$P(V,V)=\\dfrac{4}{10}+\\dfrac{3}{9}=\\dfrac{29}{30}$",
    "$P(V,V)=\\dfrac{3}{9}=\\dfrac13$, agafant només la segona probabilitat",
    "$P(V,V)=\\dfrac{4}{10}\\cdot\\dfrac{4}{10}=\\dfrac{4}{25}$",
    "$P(V,V)=\\dfrac{4}{10}\\cdot\\dfrac{3}{9}=\\dfrac{2}{15}$"
   ],
   "pistes": [
    "La primera extracció té probabilitat $4/10$.",
    "Un cop treta la vermella, la segona té probabilitat $3/9$.",
    "Multiplica-les."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJcIklcIiAobGVzIGR1ZXMgY29zZXMgYWxob3JhKSBlcyB0cmFkdWVpeCBlbiBtdWx0aXBsaWNhciBsZXMgcHJvYmFiaWxpdGF0cywgbm8gZW4gc3VtYXItbGVzLiIsICJDYWwgdGVuaXIgZW4gY29tcHRlIFRPVEVTIERVRVMgZXh0cmFjY2lvbnM6IGxhIHByb2JhYmlsaXRhdCBxdWUgbGEgcHJpbWVyYSB0YW1iw6kgc3VydGkgdmVybWVsbGEgcydoYSBkZSBtdWx0aXBsaWNhciwgbm8gZGVzY2FydGFyLiIsICJBcXXDrSBOTyBlcyByZXBvc2EgbGEgYm9sYTogbGEgc2Vnb25hIGV4dHJhY2Npw7MgZXMgZmEgYW1iIHVuYSBib2xhIHZlcm1lbGxhIG1lbnlzIGkgdW5hIGJvbGEgbWVueXMgZW4gdG90YWwsIGFpeMOtIHF1ZSBsYSBzZXZhIHByb2JhYmlsaXRhdCBubyDDqXMgbGEgbWF0ZWl4YSBxdWUgbGEgcHJpbWVyYS4gTXVsdGlwbGljYXIgZGlyZWN0YW1lbnQgbGVzIGR1ZXMgcHJvYmFiaWxpdGF0cyBub23DqXMgdmFsIHF1YW4gZWxzIGVzZGV2ZW5pbWVudHMgc8OzbiBJTkRFUEVOREVOVFMgKGFtYiByZXBvc2ljacOzLCBvIGRvcyBleHBlcmltZW50cyBxdWUgbm8gcydhZmVjdGVuKS4gU2kgZWwgc2Vnb24gZGVww6huIGRlbCBxdWUgaGEgcGFzc2F0IGFsIHByaW1lciAocGVyIGV4ZW1wbGUsIHNlbnNlIHJlcG9zYXIgbCdlbGVtZW50IGV4dHJldCksIGNhbCBmZXIgc2VydmlyIGxhIHByb2JhYmlsaXRhdCBDT05ESUNJT05BREEgZGVsIHNlZ29uIGVzZGV2ZW5pbWVudCwgbm8gbGEgZGUgcGFydGlkYS4iLCAiIl0sICJlcnIiOiBbIkNBTUlfQVJCUkVfTUFMX01VTFRJUExJQ0FUIiwgIkNBTUlfQVJCUkVfTUFMX01VTFRJUExJQ0FUIiwgIklOREVQRU5ERU5DSUFfU1VQT1NBREFfU0VOU0VfTU9USVUiLCAiIl0sICJyZXMiOiBbIiRQKFYsVik9XFxkZnJhY3s0fXsxMH1cXGNkb3RcXGRmcmFjezN9ezl9PVxcZGZyYWN7MTJ9ezkwfT1cXGRmcmFjezJ9ezE1fSQiXX0="
  },
  {
   "id": "309a",
   "ex": 309,
   "ap": "a",
   "bloc": "probabilitat_composta",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Una urna té 2 boles vermelles i 3 de blaves. En traiem una SENSE reposar-la i després una altra. A l'arbre falta una probabilitat, marcada amb un interrogant.",
   "enunciat": "Quina probabilitat falta a la branca marcada amb «?», sabent que la seva branca veïna (la de «B») val $3/4$?",
   "opcions": [
    "$P(V_2|V_1)=\\dfrac{2}{5}$, repetint la probabilitat de la primera extracció",
    "$P(V_2|V_1)=\\dfrac{3}{4}$, copiant la branca veïna «B» del mateix node",
    "$P(V_2|V_1)=\\dfrac{1}{5}$, com si només quedés 1 bola de cada 5",
    "$P(V_2|V_1)=\\dfrac{1}{4}$"
   ],
   "pistes": [
    "Les dues branques que surten d'un mateix node sumen $1$.",
    "La branca veïna («B» després de «V») val $3/4$: la que falta és $1-3/4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJVbiBjb3AgdHJldGEgdW5hIHZlcm1lbGxhIHNlbnNlIHJlcG9zYXItbGEsIGphIG5vIHF1ZWRlbiAkNSQgYm9sZXMgbmkgJDIkIHZlcm1lbGxlczogZW4gcXVlZGVuICQ0JCBlbiB0b3RhbCBpICQxJCB2ZXJtZWxsYS4iLCAiTGVzIGR1ZXMgYnJhbnF1ZXMgcXVlIHN1cnRlbiBkJ3VuIG1hdGVpeCBub2RlIGhhbiBkZSBzdW1hciAkMSQ6IHNpIGxhIGRlIMKrQsK7IMOpcyAkMy80JCwgbGEgZGUgwqtWwrsgaGEgZGUgc2VyICQxLTMvND0xLzQkLCBubyBsYSBtYXRlaXhhIHhpZnJhLiBMZXMgcHJvYmFiaWxpdGF0cyBkZSB0b3RlcyBsZXMgYnJhbnF1ZXMgcXVlIHN1cnRlbiBkJ3VuIG1hdGVpeCBub2RlIGhhbiBkZSBzdW1hciAkMSQuIFNpIGVuIGZhbHRhIHVuYSwgZXMgY2FsY3VsYSByZXN0YW50IGxlcyBhbHRyZXMgZGUgJDEkLCBubyBzdW1hbnQtbGVzIG5pIGRlaXhhbnQtbGEgaWd1YWwgcXVlIHVuYSBicmFuY2EgdmXDr25hLiIsICJVbiBjb3AgdHJldGEgbGEgcHJpbWVyYSBib2xhLCBlbiBxdWVkZW4gJDQkIGEgbCd1cm5hIChubyAkNSQpOiBkJ2FxdWVzdGVzICQ0JCwgZW4gcXVlZGEgJDEkIGRlIHZlcm1lbGxhLiIsICIiXSwgImVyciI6IFsiUkVFTVBMQUNBTUVOVF9NQUxfQ09OU0lERVJBVCIsICJCUkFOQ0FfQVJCUkVfTUFMX0NBTENVTEFEQSIsICJCUkFOQ0FfQVJCUkVfTUFMX0NBTENVTEFEQSIsICIiXSwgInJlcyI6IFsiTGVzIGJyYW5xdWVzIGQndW4gbm9kZSBzdW1lbiAkMSQ6ICQxLVxcZGZyYWN7M317NH09XFxkZnJhY3sxfXs0fSQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 349 172\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Diagrama d'arbre de probabilitat de 2 nivells, amb les probabilitats donades sobre cada branca.</title><g transform=\"translate(-12.0,-32.0)\"><line x1=\"30.0\" y1=\"118.0\" x2=\"180.0\" y2=\"74.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"180.0\" cy=\"74.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"74.0\" x2=\"330.0\" y2=\"52.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"52.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"74.0\" x2=\"330.0\" y2=\"96.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"96.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"30.0\" y1=\"118.0\" x2=\"180.0\" y2=\"162.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"180.0\" cy=\"162.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"162.0\" x2=\"330.0\" y2=\"140.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"140.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"162.0\" x2=\"330.0\" y2=\"184.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"184.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"30.0\" cy=\"118.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"108.1\" y=\"109.5\" text-anchor=\"middle\" class=\"fig-etq petita\">2/5</text><text x=\"253.4\" y=\"55.1\" text-anchor=\"middle\" class=\"fig-etq petita\">?</text><text x=\"253.4\" y=\"98.8\" text-anchor=\"middle\" class=\"fig-etq petita\">3/4</text><text x=\"101.9\" y=\"153.5\" text-anchor=\"middle\" class=\"fig-etq petita\">3/5</text><text x=\"253.4\" y=\"143.1\" text-anchor=\"middle\" class=\"fig-etq petita\">2/4</text><text x=\"253.4\" y=\"186.8\" text-anchor=\"middle\" class=\"fig-etq petita\">2/4</text><text x=\"180\" y=\"63.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">V</text><text x=\"343\" y=\"55.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">V</text><text x=\"343\" y=\"99.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">B</text><text x=\"180\" y=\"151.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">B</text><text x=\"343\" y=\"143.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">V</text><text x=\"343\" y=\"187.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">B</text></g></svg>"
  },
  {
   "id": "309b",
   "ex": 309,
   "ap": "b",
   "bloc": "probabilitat_composta",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Una urna té 2 boles vermelles i 3 de blaves. En traiem una SENSE reposar-la i després una altra. A l'arbre falta una probabilitat, marcada amb un interrogant.",
   "enunciat": "Sabent que $P(V_1)=2/5$ i que la branca que acabes de calcular val $1/4$, quina és la probabilitat de treure dues boles vermelles?",
   "opcions": [
    "$P(V,V)=\\dfrac{2}{5}+\\dfrac{1}{4}=\\dfrac{13}{20}$",
    "$P(V,V)=\\dfrac{2}{5}\\cdot\\dfrac{2}{5}=\\dfrac{4}{25}$, repetint la probabilitat inicial a la segona branca",
    "$P(V,V)=\\dfrac{2}{5}\\cdot\\dfrac{1}{4}=\\dfrac{1}{10}$",
    "$P(V,V)=\\dfrac{1}{4}$, agafant només la segona branca"
   ],
   "pistes": [
    "Segueix el camí sencer: la branca «V» inicial ($2/5$) i la branca «V» que acabes de calcular ($1/4$).",
    "Al llarg d'un mateix camí les probabilitats es multipliquen; només se sumen quan s'ajunten camins diferents."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJMYSBwcm9iYWJpbGl0YXQgZCd1biBjYW3DrSBkZSBsJ2FyYnJlIMOpcyBlbCBwcm9kdWN0ZSBkZSBsZXMgc2V2ZXMgYnJhbnF1ZXMsIG5vIGxhIHN1bWEuIiwgIkxhIHNlZ29uYSBwcm9iYWJpbGl0YXQsIHVuIGNvcCB0cmV0YSB1bmEgdmVybWVsbGEgc2Vuc2UgcmVwb3Nhci1sYSwgw6lzICQxLzQkIChsYSBxdWUgYWNhYmVzIGRlIGNhbGN1bGFyKSwgbm8gJDIvNSQgdW5hIGFsdHJhIHZlZ2FkYS4iLCAiIiwgIkNhbCBzZWd1aXIgZWwgY2Ftw60gc2VuY2VyIGRlcyBkZSBsJ2FycmVsOiBsYSBwcm9iYWJpbGl0YXQgZGUgbGEgcHJpbWVyYSB2ZXJtZWxsYSAoJDIvNSQpIHRhbWLDqSBjb21wdGEsIG11bHRpcGxpY2FkYSBwZXIgbGEgc2Vnb25hLiJdLCAiZXJyIjogWyJDQU1JX0FSQlJFX01BTF9NVUxUSVBMSUNBVCIsICJSRUVNUExBQ0FNRU5UX01BTF9DT05TSURFUkFUIiwgIiIsICJDQU1JX0FSQlJFX01BTF9NVUxUSVBMSUNBVCJdLCAicmVzIjogWyIkUChWLFYpPVxcZGZyYWMyNVxcY2RvdFxcZGZyYWMxND1cXGRmcmFjezJ9ezIwfT1cXGRmcmFjezF9ezEwfSQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 349 172\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Diagrama d'arbre de probabilitat de 2 nivells, amb les probabilitats donades sobre cada branca.</title><g transform=\"translate(-12.0,-32.0)\"><line x1=\"30.0\" y1=\"118.0\" x2=\"180.0\" y2=\"74.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"180.0\" cy=\"74.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"74.0\" x2=\"330.0\" y2=\"52.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"52.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"74.0\" x2=\"330.0\" y2=\"96.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"96.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"30.0\" y1=\"118.0\" x2=\"180.0\" y2=\"162.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"180.0\" cy=\"162.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"162.0\" x2=\"330.0\" y2=\"140.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"140.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"162.0\" x2=\"330.0\" y2=\"184.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"184.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"30.0\" cy=\"118.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"108.1\" y=\"109.5\" text-anchor=\"middle\" class=\"fig-etq petita\">2/5</text><text x=\"253.4\" y=\"55.1\" text-anchor=\"middle\" class=\"fig-etq petita\">?</text><text x=\"253.4\" y=\"98.8\" text-anchor=\"middle\" class=\"fig-etq petita\">3/4</text><text x=\"101.9\" y=\"153.5\" text-anchor=\"middle\" class=\"fig-etq petita\">3/5</text><text x=\"253.4\" y=\"143.1\" text-anchor=\"middle\" class=\"fig-etq petita\">2/4</text><text x=\"253.4\" y=\"186.8\" text-anchor=\"middle\" class=\"fig-etq petita\">2/4</text><text x=\"180\" y=\"63.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">V</text><text x=\"343\" y=\"55.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">V</text><text x=\"343\" y=\"99.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">B</text><text x=\"180\" y=\"151.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">B</text><text x=\"343\" y=\"143.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">V</text><text x=\"343\" y=\"187.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">B</text></g></svg>"
  },
  {
   "id": "311",
   "ex": 311,
   "ap": "",
   "bloc": "probabilitat_composta",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Llancem 3 monedes a l'aire.",
   "enunciat": "Quina és la probabilitat de treure almenys una cara?",
   "opcions": [
    "$P(\\text{almenys 1 cara})=3\\cdot\\dfrac12=\\dfrac32$, multiplicant la probabilitat d'una moneda pel nombre d'intents",
    "$P(\\text{almenys 1 cara})=P(\\text{cap cara})=\\dfrac18$, confonent l'esdeveniment amb el seu contrari",
    "$P(\\text{almenys 1 cara})=\\dfrac12+\\dfrac12+\\dfrac12=\\dfrac32$, sumant la probabilitat de cada moneda",
    "$P(\\text{almenys 1 cara})=1-P(\\text{cap cara})=1-\\dfrac{1}{8}=\\dfrac{7}{8}$"
   ],
   "pistes": [
    "El contrari de \"almenys una cara\" és \"cap cara\", és a dir, les tres monedes surten creu.",
    "$P(\\text{cap cara})=\\dfrac12\\cdot\\dfrac12\\cdot\\dfrac12=\\dfrac18$.",
    "$P(\\text{almenys 1 cara})=1-\\dfrac18$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3QgY8OgbGN1bCBkb25hIG3DqXMgZCckMSQsIGNvc2EgaW1wb3NzaWJsZSBwZXIgYSB1bmEgcHJvYmFiaWxpdGF0OiBcImFsbWVueXMgdW5cIiBubyBlcyBjYWxjdWxhIG11bHRpcGxpY2FudCBsYSBwcm9iYWJpbGl0YXQgZCd1biBzb2wgaW50ZW50IHBlbCBub21icmUgZCdpbnRlbnRzLiIsICIkMS84JCDDqXMgbGEgcHJvYmFiaWxpdGF0IHF1ZSBOTyBzdXJ0aSBjYXAgY2FyYSAobGVzIDMgY3JldXMpOiBsYSBxdWUgZXMgZGVtYW5hLCBcImFsbWVueXMgdW5hIGNhcmFcIiwgw6lzIHRvdCBlbCBjb250cmFyaSwgJDEkIG1lbnlzIGFxdWVzdGEgeGlmcmEuIiwgIlN1bWFyIGxlcyBwcm9iYWJpbGl0YXRzIGRlIGNhZGEgbW9uZWRhIHBlciBzZXBhcmF0IHRhbXBvYyBmdW5jaW9uYSAoaSB0b3JuYXJpYSBhIGRvbmFyIG3DqXMgZCckMSQpOiBjYWwgZmVyIHNlcnZpciBlbCBjb250cmFyaSwgXCJjYXAgY2FyYVwiLCBpIHJlc3Rhci1sbyBkJyQxJC4iLCAiIl0sICJlcnIiOiBbIkNPTVBMRU1FTlRfQUxNRU5ZU19VTl9NQUwiLCAiRVNERVZFTklNRU5UX0NPTlRSQVJJX01BTF9DQUxDVUxBVCIsICJDT01QTEVNRU5UX0FMTUVOWVNfVU5fTUFMIiwgIiJdLCAicmVzIjogWyJFbCBjb250cmFyaSBkZSBcImFsbWVueXMgdW5hIGNhcmFcIiDDqXMgcXVlIHN1cnRpbiBsZXMgdHJlcyBjcmV1czogJFAoXFx0ZXh0ezMgY3JldXN9KT1cXGxlZnQoXFxkZnJhYzEyXFxyaWdodCleMz1cXGRmcmFjMTgkLiAkUChcXHRleHR7YWxtZW55cyAxIGNhcmF9KT0xLVxcZGZyYWMxOD1cXGRmcmFjNzgkIl19"
  },
  {
   "id": "312",
   "ex": 312,
   "ap": "",
   "bloc": "probabilitat_composta",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Llancem un dau 2 vegades.",
   "enunciat": "Quina és la probabilitat de treure almenys un $6$?",
   "opcions": [
    "$P(\\text{almenys un }6)=\\dfrac56$, calculant només la probabilitat de NO treure un $6$ en una tirada",
    "$P(\\text{almenys un }6)=\\left(\\dfrac{1}{6}\\right)^2=\\dfrac{1}{36}$, calculant la probabilitat de treure DOS sisos",
    "$P(\\text{almenys un }6)=2\\cdot\\dfrac16=\\dfrac13$, multiplicant la probabilitat d'un $6$ pel nombre de tirades",
    "$P(\\text{almenys un }6)=1-\\left(\\dfrac{5}{6}\\right)^2=1-\\dfrac{25}{36}=\\dfrac{11}{36}$"
   ],
   "pistes": [
    "El contrari de \"almenys un $6$\" és \"cap 6 en cap de les dues tirades\".",
    "$P(\\text{cap }6)=\\dfrac56\\cdot\\dfrac56=\\dfrac{25}{36}$.",
    "$P(\\text{almenys un }6)=1-\\dfrac{25}{36}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyIkNS82JCDDqXMgbGEgcHJvYmFiaWxpdGF0IGRlIG5vIHRyZXVyZSB1biAkNiQgZW4gVU5BIHNvbGEgdGlyYWRhOiBmYWx0YSBlbGV2YXItaG8gYWwgcXVhZHJhdCBwZXIgYSBsZXMgZHVlcyB0aXJhZGVzLCBpIGRlc3Byw6lzIHJlc3Rhci1obyBkJyQxJC4iLCAiXCJBbG1lbnlzIHVuICQ2JFwiIGluY2xvdSB0YW1iw6kgZWwgY2FzIGRlIHRyZXVyZSduIG5vbcOpcyB1biAoaSBubyBkb3MpOiAkMS8zNiQgw6lzIGxhIHByb2JhYmlsaXRhdCBkZSBcImV4YWN0YW1lbnQgZG9zIHNpc29zXCIsIHVuYSBwb3NzaWJpbGl0YXQgbcOpcyByZXN0cmljdGl2YS4iLCAiXCJBbG1lbnlzIHVuXCIgbm8gZXMgY2FsY3VsYSBtdWx0aXBsaWNhbnQgbGEgcHJvYmFiaWxpdGF0IGQndW4gc29sIGludGVudCBwZWwgbm9tYnJlIGQnaW50ZW50czogY2FsIGZlciBzZXJ2aXIgZWwgY29udHJhcmksIFwiY2FwIDYgZW4gbGVzIGR1ZXMgdGlyYWRlc1wiLCBpIHJlc3Rhci1sbyBkJyQxJC4iLCAiIl0sICJlcnIiOiBbIkNPTVBMRU1FTlRfQUxNRU5ZU19VTl9NQUwiLCAiRVNERVZFTklNRU5UX0NPTlRSQVJJX01BTF9DQUxDVUxBVCIsICJDT01QTEVNRU5UX0FMTUVOWVNfVU5fTUFMIiwgIiJdLCAicmVzIjogWyIkUChcXHRleHR7Y2FwIH02XFx0ZXh0eyBlbiBsZXMgMiB0aXJhZGVzfSk9XFxsZWZ0KFxcZGZyYWM1NlxccmlnaHQpXjI9XFxkZnJhY3syNX17MzZ9JC4gJFAoXFx0ZXh0e2FsbWVueXMgdW4gfTYpPTEtXFxkZnJhY3syNX17MzZ9PVxcZGZyYWN7MTF9ezM2fSQiXX0="
  },
  {
   "id": "307",
   "ex": 307,
   "ap": "",
   "bloc": "probabilitat_composta",
   "tipus": "B",
   "dif": 4,
   "encapcalament": "Una bossa té 4 boles vermelles i 6 de blaves. En traiem una bola, apuntem el color, la TORNEM a la bossa, remenem, i en traiem una altra.",
   "enunciat": "«A la mateixa bossa de 4 vermelles i 6 blaves, la probabilitat de treure dues vermelles seguides val el mateix es reposi la bola o no»",
   "opcions": [
    "Cert: en tots dos casos la probabilitat de cada extracció és $4/10$",
    "Fals: amb reposició és $\\dfrac{4}{25}=0{,}16$ i sense reposició és $\\dfrac{2}{15}\\approx0{,}133$; sense reposició la segona probabilitat baixa (queden menys vermelles i menys boles en total), així que el producte final és més petit",
    "Cert: sense reposició la probabilitat és més gran, perquè hi ha menys boles entre les quals triar",
    "Fals: amb reposició dona $\\dfrac{2}{15}$ i sense reposició dona $\\dfrac{4}{25}$, al revés del que es podria pensar"
   ],
   "pistes": [
    "Calcula per separat el cas amb reposició ($4/10$ dues vegades) i el cas sense reposició ($4/10$ i després $3/9$).",
    "Compara els dos resultats en decimal si costa comparar les fraccions a ull."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBaXjDsiBub23DqXMgw6lzIHZlcml0YXQgYW1iIHJlcG9zaWNpw7MuIFNlbnNlIHJlcG9zaWNpw7MsIHVuIGNvcCB0cmV0YSBsYSBwcmltZXJhIHZlcm1lbGxhLCBlbiBxdWVkZW4gJDMkIGRlICQ5JCBib2xlcyBwZXIgYSBsYSBzZWdvbmEsIG5vICQ0JCBkZSAkMTAkLiIsICIiLCAiSGkgaGEgbWVueXMgYm9sZXMgRU4gVE9UQUwsIHBlcsOyIHRhbWLDqSBtZW55cyB2ZXJtZWxsZXMgKHNlIG4naGEgdHJldCB1bmEpOiBlbHMgZG9zIG5vbWJyZXMgYmFpeGVuIGEgbGEgdmVnYWRhLCBpIGVsIHJlc3VsdGF0IG5ldCDDqXMgdW5hIHByb2JhYmlsaXRhdCBtw6lzIHBldGl0YSwgbm8gbcOpcyBncmFuLiIsICLDiXMgYSBsJ2lucmV2w6lzOiBhbWIgcmVwb3NpY2nDsyBjYWRhIGV4dHJhY2Npw7MgbWFudMOpIGxhIG1hdGVpeGEgcHJvYmFiaWxpdGF0IGluaWNpYWwgKCQ0LzEwJCBsZXMgZHVlcyB2ZWdhZGVzKSwgcXVlIMOpcyBtw6lzIGdyYW4gcXVlIGxhIHNlZ29uYSBwcm9iYWJpbGl0YXQgcXVhbiBubyBlcyByZXBvc2EgKCQzLzkkKS4iXSwgImVyciI6IFsiSU5ERVBFTkRFTkNJQV9TVVBPU0FEQV9TRU5TRV9NT1RJVSIsICIiLCAiUkVFTVBMQUNBTUVOVF9NQUxfQ09OU0lERVJBVCIsICJSRUVNUExBQ0FNRU5UX01BTF9DT05TSURFUkFUIl0sICJyZXMiOiBbIkFtYiByZXBvc2ljacOzOiAkXFxkZnJhY3s0fXsxMH1cXGNkb3RcXGRmcmFjezR9ezEwfT1cXGRmcmFjezR9ezI1fT0weyx9MTYkLiBTZW5zZSByZXBvc2ljacOzOiAkXFxkZnJhY3s0fXsxMH1cXGNkb3RcXGRmcmFjezN9ezl9PVxcZGZyYWN7Mn17MTV9XFxhcHByb3gweyx9MTMzJC4gU8OzbiBkaWZlcmVudHMsIGkgbGEgc2Vnb25hIMOpcyBtw6lzIHBldGl0YSBwZXJxdcOoLCB1biBjb3AgdHJldGEgdW5hIHZlcm1lbGxhLCBlbiBxdWVkZW4gcmVsYXRpdmFtZW50IG1lbnlzIHBlciB0cmlhci1uZSB1bmEgYWx0cmEiXX0="
  },
  {
   "id": "310a",
   "ex": 310,
   "ap": "a",
   "bloc": "probabilitat_composta",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Un calaix té 5 mitjons negres i 3 de blancs, tots solts. Se'n treuen 2 SENSE reposar-los.",
   "enunciat": "Quina és la probabilitat que els dos mitjons siguin negres?",
   "opcions": [
    "$P(N,N)=\\dfrac58+\\dfrac47=\\dfrac{67}{56}$",
    "$P(N,N)=\\dfrac58\\cdot\\dfrac58=\\dfrac{25}{64}$",
    "$P(N,N)=\\dfrac{5}{8}\\cdot\\dfrac{4}{7}=\\dfrac{5}{14}$",
    "$P(N,N)=\\dfrac58\\cdot\\dfrac48=\\dfrac{5}{16}$, sense descomptar el total del calaix a la segona extracció"
   ],
   "pistes": [
    "Comença per la probabilitat de treure un mitjó negre d'entre $8$: $5/8$.",
    "Un cop tret, al calaix en queden $7$, dels quals $4$ són negres.",
    "Multiplica les dues probabilitats."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJcIklcIiAoZWxzIGRvcyBtaXRqb25zIGFsaG9yYSkgZXMgdHJhZHVlaXggZW4gbXVsdGlwbGljYXIgbGVzIHByb2JhYmlsaXRhdHMsIG5vIGVuIHN1bWFyLWxlcyAoaSBlbCByZXN1bHRhdCwgYSBtw6lzLCBzZXJpYSBtw6lzIGdyYW4gcXVlICQxJCwgY29zYSBpbXBvc3NpYmxlIHBlciBhIHVuYSBwcm9iYWJpbGl0YXQpLiIsICJFbHMgbWl0am9ucyBubyBlcyByZXBvc2VuOiB1biBjb3AgdHJldCB1biBtaXRqw7MgbmVncmUsIGVuIHF1ZWRlbiAkNCQgZGUgJDckIHBlciBhIGxhIHNlZ29uYSBleHRyYWNjacOzLCBubyAkNSQgZGUgJDgkIHVuYSBhbHRyYSB2ZWdhZGEuIE11bHRpcGxpY2FyIGRpcmVjdGFtZW50IGxlcyBkdWVzIHByb2JhYmlsaXRhdHMgbm9tw6lzIHZhbCBxdWFuIGVscyBlc2RldmVuaW1lbnRzIHPDs24gSU5ERVBFTkRFTlRTIChhbWIgcmVwb3NpY2nDsywgbyBkb3MgZXhwZXJpbWVudHMgcXVlIG5vIHMnYWZlY3RlbikuIFNpIGVsIHNlZ29uIGRlcMOobiBkZWwgcXVlIGhhIHBhc3NhdCBhbCBwcmltZXIgKHBlciBleGVtcGxlLCBzZW5zZSByZXBvc2FyIGwnZWxlbWVudCBleHRyZXQpLCBjYWwgZmVyIHNlcnZpciBsYSBwcm9iYWJpbGl0YXQgQ09ORElDSU9OQURBIGRlbCBzZWdvbiBlc2RldmVuaW1lbnQsIG5vIGxhIGRlIHBhcnRpZGEuIiwgIiIsICJVbiBjb3AgdHJldCB1biBtaXRqw7MsIGFsIGNhbGFpeCBqYSBubyBlbiBxdWVkZW4gJDgkLCBzaW7DsyAkNyQ6IGVsIGRlbm9taW5hZG9yIGRlIGxhIHNlZ29uYSBicmFuY2EgdGFtYsOpIGJhaXhhLiJdLCAiZXJyIjogWyJDQU1JX0FSQlJFX01BTF9NVUxUSVBMSUNBVCIsICJJTkRFUEVOREVOQ0lBX1NVUE9TQURBX1NFTlNFX01PVElVIiwgIiIsICJSRUVNUExBQ0FNRU5UX01BTF9DT05TSURFUkFUIl0sICJyZXMiOiBbIlByaW1lciBtaXRqw7MgbmVncmU6ICRcXGRmcmFjNTgkLiBTZWdvbiwgc2Vuc2UgcmVwb3Nhci1sbzogJFxcZGZyYWM0NyQgKGVuIHF1ZWRlbiAkNCQgbmVncmVzIGRlICQ3JCBlbiB0b3RhbCkuICRQKE4sTik9XFxkZnJhYzU4XFxjZG90XFxkZnJhYzQ3PVxcZGZyYWN7MjB9ezU2fT1cXGRmcmFjezV9ezE0fSQiXX0="
  },
  {
   "id": "310b",
   "ex": 310,
   "ap": "b",
   "bloc": "probabilitat_composta",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Un calaix té 5 mitjons negres i 3 de blancs, tots solts. Se'n treuen 2 SENSE reposar-los.",
   "enunciat": "Quina és la probabilitat que els dos mitjons siguin del mateix color?",
   "opcions": [
    "$P(N,N)+P(B,B)=\\dfrac{5}{14}+\\dfrac{3}{28}=\\dfrac{13}{28}$",
    "$P(B,B)=\\dfrac38\\cdot\\dfrac38=\\dfrac{9}{64}$, calculant-la com si es reposessin els mitjons",
    "$P(N,N)\\cdot P(B,B)=\\dfrac{5}{14}\\cdot\\dfrac{3}{28}=\\dfrac{15}{392}$, multiplicant els dos casos en lloc de sumar-los",
    "$P(N,N)=\\dfrac{5}{14}$ només, oblidant el cas dels dos blancs"
   ],
   "pistes": [
    "\"Del mateix color\" és «dos negres» o «dos blancs»: calcula les dues probabilitats per separat.",
    "$P(N,N)$ ja la tens de l'apartat anterior: $5/14$.",
    "$P(B,B)=\\dfrac38\\cdot\\dfrac27$: calcula-la i suma-la a l'anterior."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWxzIG1pdGpvbnMgbm8gZXMgcmVwb3NlbjogdW4gY29wIHRyZXQgdW4gbWl0asOzIGJsYW5jLCBlbiBxdWVkZW4gJDIkIGRlICQ3JCBwZXIgYSBsYSBzZWdvbmEgZXh0cmFjY2nDsywgbm8gJDMkIGRlICQ4JCB1bmEgYWx0cmEgdmVnYWRhLiIsICJcIkRlbCBtYXRlaXggY29sb3JcIiB2b2wgZGlyIMKrdG90cyBkb3MgbmVncmVzwrsgTyDCq3RvdHMgZG9zIGJsYW5jc8K7OiBjb20gcXVlIHPDs24gZHVlcyBtYW5lcmVzIGRpZmVyZW50cyAoaSBpbmNvbXBhdGlibGVzIGVudHJlIHNpKSBkJ2Fjb25zZWd1aXItaG8sIGxlcyBwcm9iYWJpbGl0YXRzIHNlIHN1bWVuLCBubyBlcyBtdWx0aXBsaXF1ZW4uIiwgIlwiRGVsIG1hdGVpeCBjb2xvclwiIGluY2xvdSBUT1RFUyBEVUVTIHBvc3NpYmlsaXRhdHM6IHF1ZSBzdXJ0aW4gZG9zIG1pdGpvbnMgbmVncmVzIG8gcXVlIGVuIHN1cnRpbiBkb3MgYmxhbmNzLCBubyBub23DqXMgbGEgcHJpbWVyYS4iXSwgImVyciI6IFsiIiwgIlJFRU1QTEFDQU1FTlRfTUFMX0NPTlNJREVSQVQiLCAiVU5JT19JTlRFUlNFQ0NJT19DT05GT1NFUyIsICJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyJdLCAicmVzIjogWyIkUChCLEIpPVxcZGZyYWMzOFxcY2RvdFxcZGZyYWMyNz1cXGRmcmFjezZ9ezU2fT1cXGRmcmFjezN9ezI4fSQuIFN1bWFudC1oaSAkUChOLE4pPVxcZGZyYWN7NX17MTR9PVxcZGZyYWN7MTB9ezI4fSQ6ICRcXGRmcmFjezEwfXsyOH0rXFxkZnJhY3szfXsyOH09XFxkZnJhY3sxM317Mjh9JCJdfQ=="
  },
  {
   "id": "313",
   "ex": 313,
   "ap": "",
   "bloc": "probabilitat_composta",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "D'una capsa amb 12 bombetes, 3 són defectuoses. Se'n trien 2 a l'atzar, SENSE reposar-les.",
   "enunciat": "Quina és la probabilitat que almenys una de les 2 bombetes sigui defectuosa?",
   "opcions": [
    "$P(\\text{almenys 1 defectuosa})=1-\\dfrac{9}{12}\\cdot\\dfrac{8}{11}=1-\\dfrac{6}{11}=\\dfrac{5}{11}$",
    "$P(\\text{almenys 1 defectuosa})=\\dfrac{3}{12}+\\dfrac{3}{12}=\\dfrac12$, sumant la probabilitat de cada extracció",
    "$P(\\text{almenys 1 defectuosa})=1-\\dfrac{9}{12}\\cdot\\dfrac{9}{12}=1-\\dfrac{9}{16}=\\dfrac{7}{16}$",
    "$P(\\text{almenys 1 defectuosa})=\\dfrac{9}{12}\\cdot\\dfrac{8}{11}=\\dfrac{6}{11}$, oblidant restar-ho d'$1$ al final"
   ],
   "pistes": [
    "El contrari de \"almenys una defectuosa\" és \"cap de les dues defectuosa\" (les dues bones).",
    "$P(\\text{cap defectuosa})=\\dfrac{9}{12}\\cdot\\dfrac{8}{11}$ (sense reposar-les).",
    "Resta el resultat d'$1$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiXCJBbG1lbnlzIHVuYVwiIGVzIGNhbGN1bGEgYW1iIGVsIGNvbnRyYXJpLCBcImNhcCBkZWZlY3R1b3NhXCIsIGkgcmVzdGFudC1sbyBkJyQxJDsgbm8gc3VtYW50IGRpcmVjdGFtZW50IGxhIHByb2JhYmlsaXRhdCBkZSBkZWZlY3R1b3NhIGEgY2FkYSBleHRyYWNjacOzLiIsICJMZXMgYm9tYmV0ZXMgbm8gZXMgcmVwb3NlbjogdW4gY29wIHRyaWFkYSBsYSBwcmltZXJhIGJvbmEsIGVuIHF1ZWRlbiAkOCQgZGUgYm9uZXMgaSAkMTEkIGVuIHRvdGFsIHBlciBhIGxhIHNlZ29uYSwgbm8gJDkkIGRlICQxMiQgdW5hIGFsdHJhIHZlZ2FkYS4gTXVsdGlwbGljYXIgZGlyZWN0YW1lbnQgbGVzIGR1ZXMgcHJvYmFiaWxpdGF0cyBub23DqXMgdmFsIHF1YW4gZWxzIGVzZGV2ZW5pbWVudHMgc8OzbiBJTkRFUEVOREVOVFMgKGFtYiByZXBvc2ljacOzLCBvIGRvcyBleHBlcmltZW50cyBxdWUgbm8gcydhZmVjdGVuKS4gU2kgZWwgc2Vnb24gZGVww6huIGRlbCBxdWUgaGEgcGFzc2F0IGFsIHByaW1lciAocGVyIGV4ZW1wbGUsIHNlbnNlIHJlcG9zYXIgbCdlbGVtZW50IGV4dHJldCksIGNhbCBmZXIgc2VydmlyIGxhIHByb2JhYmlsaXRhdCBDT05ESUNJT05BREEgZGVsIHNlZ29uIGVzZGV2ZW5pbWVudCwgbm8gbGEgZGUgcGFydGlkYS4iLCAiJFxcZGZyYWN7OX17MTJ9XFxjZG90XFxkZnJhY3s4fXsxMX09XFxkZnJhY3s2fXsxMX0kIMOpcyBsYSBwcm9iYWJpbGl0YXQgcXVlIENBUCBkZSBsZXMgZHVlcyBzaWd1aSBkZWZlY3R1b3NhIChsZXMgZHVlcyBib25lcyk6IGxhIHF1ZSBlcyBkZW1hbmEgw6lzIGVsIGNvbnRyYXJpLCBlbmNhcmEgZmFsdGEgcmVzdGFyLWxhIGQnJDEkLiJdLCAiZXJyIjogWyIiLCAiQ09NUExFTUVOVF9BTE1FTllTX1VOX01BTCIsICJJTkRFUEVOREVOQ0lBX1NVUE9TQURBX1NFTlNFX01PVElVIiwgIkNPTVBMRU1FTlRfQUxNRU5ZU19VTl9NQUwiXSwgInJlcyI6IFsiJFAoXFx0ZXh0e2NhcCBkZWZlY3R1b3NhfSk9XFxkZnJhY3s5fXsxMn1cXGNkb3RcXGRmcmFjezh9ezExfT1cXGRmcmFjezcyfXsxMzJ9PVxcZGZyYWN7Nn17MTF9JC4gJFAoXFx0ZXh0e2FsbWVueXMgMSBkZWZlY3R1b3NhfSk9MS1cXGRmcmFjezZ9ezExfT1cXGRmcmFjezV9ezExfSQiXX0="
  }
 ]
};
