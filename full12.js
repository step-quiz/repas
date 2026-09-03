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
    "236a",
    "236b",
    "236c",
    "236d",
    "236e",
    "236f",
    "236g",
    "237",
    "238a",
    "238b",
    "239a",
    "239b",
    "239c",
    "239d",
    "239e",
    "240a",
    "240b",
    "240c",
    "240d",
    "240e"
   ]
  },
  {
   "id": "combinatoria",
   "titol": "Combinatòria: principi multiplicatiu",
   "descripcio": "Diagrames d'arbre, mètode del producte, i variacions sense repetició.",
   "items": [
    "242",
    "243",
    "244",
    "245",
    "246",
    "247",
    "248a",
    "248b",
    "248c",
    "248d",
    "248e"
   ]
  },
  {
   "id": "laplace",
   "titol": "Regla de Laplace i freqüència relativa",
   "descripcio": "Probabilitat d'un esdeveniment, freqüència relativa i llei dels grans nombres.",
   "items": [
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
    "257a",
    "257b",
    "257c",
    "258",
    "259"
   ]
  },
  {
   "id": "probabilitat_composta",
   "titol": "Probabilitat composta: dos experiments",
   "descripcio": "Experiments amb i sense reposició, diagrames d'arbre, i la probabilitat d'\"almenys un\" a través del contrari.",
   "items": [
    "305a",
    "305b",
    "305c",
    "306a",
    "306b",
    "306c",
    "307",
    "308a",
    "308b",
    "309a",
    "309b",
    "310a",
    "310b",
    "311",
    "312",
    "313"
   ]
  },
  {
   "id": "probabilitat_condicionada",
   "titol": "Probabilitat condicionada",
   "descripcio": "La probabilitat d'un esdeveniment quan ja se'n sap un altre: P(B|A), i per què no és el mateix que P(A|B).",
   "items": [
    "314a",
    "314b",
    "314c",
    "315a",
    "315b",
    "315c",
    "316a",
    "316b",
    "317",
    "318",
    "319",
    "320"
   ]
  }
 ],
 "errors": {
  "ASIMETRIA_CONDICIONADA_MAL": "$P(B|A)$ i $P(A|B)$ es calculen sobre denominadors diferents ($A$ en un cas, $B$ en l'altre) i en general no valen el mateix. Que un dels dos sigui una probabilitat alta no vol dir que l'invers també ho sigui.",
  "BRANCA_ARBRE_MAL_CALCULADA": "Les probabilitats de totes les branques que surten d'un mateix node han de sumar $1$. Si en falta una, es calcula restant les altres de $1$, no sumant-les ni deixant-la igual que una branca veïna.",
  "CAMI_ARBRE_MAL_MULTIPLICAT": "La probabilitat d'arribar al final d'un camí de l'arbre és el PRODUCTE de les probabilitats de totes les branques que el formen, no la suma ni només la de l'última branca.",
  "CARTES_REPETIDES_CONFOSES": "Revisa quantes cartes (o elements) diferents compleixen exactament la condició demanada: un esdeveniment és impossible només quan CAP resultat de l'espai mostral el compleix, no quan sembla poc habitual.",
  "CASOS_FAVORABLES_MAL_COMPTATS": "Revisa un per un quins resultats de l'espai mostral compleixen la condició de l'esdeveniment: és fàcil oblidar un límit inclòs (\"igual o més gran que\") o comptar-ne un de més.",
  "CASOS_POSSIBLES_MAL_COMPTATS": "Revisa quants resultats TOTALS té l'experiment (els casos possibles): ha de ser el denominador de la probabilitat, no un altre nombre de l'enunciat.",
  "COMBINACIONS_MAL_COMPTADES": "Per triar quins $k$ elements d'entre $n$ compleixen una condició (sense importar l'ordre en què es trien), cal fer servir combinacions, $\\binom{n}{k}$, no una simple multiplicació o suma.",
  "COMPATIBLE_INCOMPATIBLE_CONFOSOS": "Dos esdeveniments són incompatibles quan no tenen CAP resultat en comú (la seva intersecció és buida); si comparteixen encara que sigui un sol resultat, són compatibles.",
  "COMPLEMENT_ALMENYS_UN_MAL": "\"Almenys un\" es calcula com $1-P(\\text{cap})$, on $P(\\text{cap})$ és la probabilitat que NO passi cap vegada. No és el mateix que sumar les probabilitats de cada intent per separat, ni que multiplicar la probabilitat d'un sol èxit pel nombre d'intents.",
  "CONDICIONADA_I_CONJUNTA_CONFOSES": "$P(A\\text{ i }B)$ (la intersecció, sobre el total de casos) i $P(B|A)$ (sobre els casos que ja compleixen $A$) responen preguntes diferents i normalment donen nombres diferents: revisa si et demanen la proporció sobre TOT o només sobre un grup ja fixat.",
  "ELEMENTAL_NO_ELEMENTAL_CONFOSOS": "Un esdeveniment elemental és un ÚNIC resultat de l'espai mostral; un esdeveniment NO elemental n'agrupa diversos.",
  "ESDEVENIMENTS_INDEPENDENTS_MAL_COMBINATS": "Per combinar dos esdeveniments independents (per exemple, dos sortejos separats), el nombre de combinacions possibles es multiplica, no se suma.",
  "ESDEVENIMENT_CONTRARI_MAL_CALCULAT": "La probabilitat de l'esdeveniment contrari és $1$ menys la probabilitat de l'esdeveniment: $P(\\text{no }A)=1-P(A)$.",
  "ESPAI_MOSTRAL_MAL_COMPTAT": "L'espai mostral és el conjunt de resultats DIFERENTS i DISTINGIBLES d'un experiment aleatori: revisa que no en falti cap ni que n'hi hagi cap de sobrant o repetit.",
  "FACTORIAL_MAL_APLICAT": "El nombre de maneres d'ordenar $n$ elements diferents és $n!$ ($n$ factorial): revisa que estàs calculant permutacions dels elements correctes.",
  "FREQ_RELATIVA_PROBABILITAT_CONFOSES": "La freqüència relativa és el resultat observat en repetir un experiment un nombre concret de vegades; la probabilitat teòrica és el valor que s'espera a llarg termini. Quan hi ha moltes repeticions, la freqüència relativa s'aproxima a la probabilitat, però es calculen amb les dades donades a cada cas.",
  "INDEPENDENCIA_SUPOSADA_SENSE_MOTIU": "Multiplicar directament les dues probabilitats només val quan els esdeveniments són INDEPENDENTS (amb reposició, o dos experiments que no s'afecten). Si el segon depèn del que ha passat al primer (per exemple, sense reposar l'element extret), cal fer servir la probabilitat CONDICIONADA del segon esdeveniment, no la de partida.",
  "ORDRE_NO_CONSIDERAT": "Quan els dos elements combinats es poden distingir (per exemple, per color), l'ordre importa: el parell $(a,b)$ és un resultat diferent del $(b,a)$.",
  "ORDRE_NO_DEMANAT": "Has comptat els dos ordres possibles quan l'enunciat en demana un de concret. Cada camí de l'arbre és una seqüència: (V,B) i (B,V) són dos camins diferents, i sumar-los només val si la pregunta no distingeix l'ordre.",
  "PARELLS_VALORS_CONFOSOS": "No confonguis el nombre de PARELLS de resultats (per exemple, dels dos daus) amb el nombre de VALORS diferents que en resulten (com la seva suma o el seu producte): diversos parells poden donar el mateix valor final.",
  "PRINCIPI_MULTIPLICATIU_MAL_APLICAT": "Quan es combinen diverses eleccions independents, el nombre total de resultats es MULTIPLICA (no se suma): si la primera elecció té $m$ opcions i la segona en té $n$, en total hi ha $m\\cdot n$ combinacions.",
  "PROBABILITAT_CONDICIONADA_MAL": "Quan es demana la probabilitat DINS d'un grup concret (no de tota la població), el denominador ha de ser la mida d'aquell grup, no el total de tots els casos.",
  "RECOMPTE_MAL_FET": "Torna a comptar les dades una per una: és fàcil saltar-se'n alguna o comptar-ne alguna dues vegades en un recompte llarg.",
  "REEMPLACAMENT_MAL_CONSIDERAT": "Quan un element no es reposa, el nombre total de casos disminueix a la segona extracció (i el nombre de casos favorables, si l'element triat n'era un). Revisa si l'enunciat diu que es reposa o no abans de decidir el denominador de la segona branca.",
  "UNIO_DOBLE_COMPTADA": "En calcular la probabilitat d'una unió, els resultats que compleixen totes dues condicions a la vegada s'han comptat dues vegades si simplement se sumen les probabilitats individuals: cal restar la intersecció un cop, $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.",
  "UNIO_INTERSECCIO_CONFOSES": "La unió ($A\\cup B$) inclou els resultats que compleixen A, B, o totes dues alhora; la intersecció ($A\\cap B$) inclou només els que compleixen totes dues coses a la vegada.",
  "VARIACIONS_SENSE_REPETICIO_MAL": "Quan un element ja s'ha fet servir, no es pot tornar a triar: el nombre d'opcions disponibles disminueix a cada posició que es va omplint.",
  "VEREDICTE_INVERTIT": "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del correcte: torna a comprovar la condició amb els valors concrets de l'enunciat."
 },
 "items": [
  {
   "id": "236a",
   "ex": 236,
   "ap": "a",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Escriu l'espai mostral dels experiments aleatoris següents.",
   "enunciat": "Treure una carta de la baralla espanyola.",
   "opcions": [
    "L'espai mostral té $48$ resultats, com en una baralla francesa",
    "L'espai mostral té $10$ resultats, un per cada valor de l'$1$ al $9$ i la figura",
    "L'espai mostral té $4$ resultats (un per cada coll: ors, copes, espases i bastos)",
    "L'espai mostral té $40$ resultats (una carta per a cada combinació de coll i valor)"
   ],
   "pistes": [
    "Una baralla espanyola té $4$ colls (ors, copes, espases, bastos), cadascun amb $10$ cartes.",
    "L'espai mostral és el conjunt de totes les cartes possibles, no només els colls."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyIkNDgkIG5vIMOpcyBlbCBub21icmUgZGUgY2FydGVzIGQndW5hIGJhcmFsbGEgZXNwYW55b2xhOiBhcXVlc3RhIGVuIHTDqSAkNDAkIChxdWF0cmUgY29sbHMgZGUgJDEwJCBjYXJ0ZXMgY2FkYXNjdW4pLCBubyAkNDgkLiIsICIkMTAkIGNvbXB0YSBlbHMgdmFsb3JzIHBvc3NpYmxlcyBkJ1VOIHNvbCBjb2xsLCBwZXLDsiBsJ2VzcGFpIG1vc3RyYWwgZGUgXCJ0cmV1cmUgdW5hIGNhcnRhXCIgaGEgZCdpbmNsb3VyZSBsZXMgY2FydGVzIGRlIFRPVFMgZWxzIGNvbGxzLCBubyBub23DqXMgZCd1bi4iLCAiJDQkIGNvbXB0YSBub23DqXMgZWxzIGNvbGxzLCBubyBsZXMgY2FydGVzIGluZGl2aWR1YWxzOiBjYWRhIGNvbGwgdMOpICQxMCQgY2FydGVzIGRpZmVyZW50cyAoJDEkIGFsICQ5JCBpIHVuYSBmaWd1cmEpLCBhaXjDrSBxdWUgbCdlc3BhaSBtb3N0cmFsIGluY2xvdSB0b3RlcyBsZXMgY2FydGVzIGNvbmNyZXRlcywgbm8gbm9tw6lzIGVsIGNvbGwuIiwgIiJdLCAiZXJyIjogWyJFU1BBSV9NT1NUUkFMX01BTF9DT01QVEFUIiwgIkVTUEFJX01PU1RSQUxfTUFMX0NPTVBUQVQiLCAiRVNQQUlfTU9TVFJBTF9NQUxfQ09NUFRBVCIsICIiXSwgInJlcyI6IFsiTGEgYmFyYWxsYSBlc3BhbnlvbGEgdMOpICQ0JCBjb2xscyBkZSAkMTAkIGNhcnRlcyBjYWRhc2N1bjogJDRcXGNkb3QxMD00MCQgcmVzdWx0YXRzIHBvc3NpYmxlcyJdfQ=="
  },
  {
   "id": "236b",
   "ex": 236,
   "ap": "b",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Escriu l'espai mostral dels experiments aleatoris següents.",
   "enunciat": "Llançar una xinxeta i anotar la posició de caiguda.",
   "opcions": [
    "L'espai mostral té $1$ resultat, perquè sempre cau de la mateixa manera",
    "L'espai mostral és infinit, perquè pot caure en qualsevol angle",
    "L'espai mostral té $6$ resultats, com un dau",
    "L'espai mostral té $2$ resultats: $\\{\\text{punta amunt, de costat}\\}$"
   ],
   "pistes": [
    "Pensa en les dues úniques maneres físiques en què pot quedar una xinxeta en caure a terra.",
    "No confonguis \"totes les posicions possibles\" amb \"totes les categories que es demana anotar\"."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJVbmEgeGlueGV0YSBwb3QgY2F1cmUgZGUgZHVlcyBtYW5lcmVzIGRpZmVyZW50cyAoZGUgcHVudGEgY2FwIGFtdW50IG8gZGUgY29zdGF0KTogZWwgcmVzdWx0YXQgbm8gw6lzIHNlbXByZSBlbCBtYXRlaXgsIHBlciBhaXjDsiDDqXMgdW4gZXhwZXJpbWVudCBhbGVhdG9yaS4iLCAiRWwgcXVlIGVzIGRlbWFuYSBhbm90YXIgbm8gw6lzIGwnYW5nbGUgZXhhY3RlIGRlIGNhaWd1ZGEsIHNpbsOzIGxhIHBvc2ljacOzIChkZSBwdW50YSBvIGRlIGNvc3RhdCk6IGFtYiBhcXVlc3QgY3JpdGVyaSBub23DqXMgaGkgaGEgZG9zIHJlc3VsdGF0cyBwb3NzaWJsZXMuIiwgIlVuYSB4aW54ZXRhIG5vIMOpcyB1biBkYXU6IG5vbcOpcyB0w6kgZHVlcyBtYW5lcmVzIGbDrXNpcXVlcyBkZSBjYXVyZSwgbm8gc2lzLiIsICIiXSwgImVyciI6IFsiRVNQQUlfTU9TVFJBTF9NQUxfQ09NUFRBVCIsICJFU1BBSV9NT1NUUkFMX01BTF9DT01QVEFUIiwgIkVTUEFJX01PU1RSQUxfTUFMX0NPTVBUQVQiLCAiIl0sICJyZXMiOiBbIlVuYSB4aW54ZXRhIHBvdCBjYXVyZSBkZSBkdWVzIG1hbmVyZXM6IGRlIHB1bnRhIGNhcCBhbXVudCBvIGRlIGNvc3RhdC4gJEU9XFx7XFx0ZXh0e3B1bnRhIGFtdW50LCBkZSBjb3N0YXR9XFx9JCJdfQ=="
  },
  {
   "id": "236c",
   "ex": 236,
   "ap": "c",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Escriu l'espai mostral dels experiments aleatoris següents.",
   "enunciat": "Treure una bola d'una urna amb 5 boles vermelles, 3 de blaves i 2 de verdes.",
   "opcions": [
    "L'espai mostral té $10$ resultats, un per cada bola física de l'urna",
    "L'espai mostral té $3$ resultats: $\\{\\text{vermella, blava, verda}\\}$ (un per cada color possible)",
    "L'espai mostral té $5$ resultats, el nombre de boles del color més freqüent",
    "L'espai mostral té $2$ resultats, perquè normalment es distingeix només \"vermella\" o \"no vermella\""
   ],
   "pistes": [
    "Pensa en els resultats DIFERENTS que es poden distingir en treure una bola, no en el nombre total de boles.",
    "Hi ha $3$ colors a l'urna: vermell, blau i verd."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMJ2VzcGFpIG1vc3RyYWwgZXMgZGVzY3JpdSBwZWxzIHJlc3VsdGF0cyBESVNUSU5HSUJMRVMgZGUgbCdleHBlcmltZW50IChlbCBjb2xvciBvYnNlcnZhdCksIG5vIHBlciBjYWRhIGJvbGEgZsOtc2ljYTogZW5jYXJhIHF1ZSBoaSBoYWdpICQxMCQgYm9sZXMsIG5vbcOpcyBoaSBoYSAkMyQgY29sb3JzIGRpZmVyZW50cyBwb3NzaWJsZXMgY29tIGEgcmVzdWx0YXQuIiwgIiIsICJFbCBub21icmUgZGUgYm9sZXMgZCd1biBjb2xvciBjb25jcmV0IG5vIMOpcyBlbCBub21icmUgZGUgcmVzdWx0YXRzIHBvc3NpYmxlcyBkZSBsJ2V4cGVyaW1lbnQ6IGwnZXNwYWkgbW9zdHJhbCB0w6kgdW4gcmVzdWx0YXQgcGVyIGNhZGEgY29sb3IgZGlmZXJlbnQgcXVlIGVzIHBvdCBvYnRlbmlyLCBpIG4naGkgaGEgJDMkLiIsICJMJ2VudW5jaWF0IG5vIGRlbWFuYSBkaXN0aW5naXIgbm9tw6lzIHNpIMOpcyB2ZXJtZWxsYSBvIG5vOiBkZW1hbmEgZWwgY29sb3IgZGUgbGEgYm9sYSwgaSBoaSBoYSAkMyQgY29sb3JzIGRpZmVyZW50cyBhIGwndXJuYS4iXSwgImVyciI6IFsiRVNQQUlfTU9TVFJBTF9NQUxfQ09NUFRBVCIsICIiLCAiRVNQQUlfTU9TVFJBTF9NQUxfQ09NUFRBVCIsICJFU1BBSV9NT1NUUkFMX01BTF9DT01QVEFUIl0sICJyZXMiOiBbIkwndXJuYSB0w6kgJDUrMysyPTEwJCBib2xlcywgcGVyw7Igbm9tw6lzICQzJCBjb2xvcnMgZGlmZXJlbnRzOiAkRT1cXHtcXHRleHR7dmVybWVsbGEsIGJsYXZhLCB2ZXJkYX1cXH0kIl19"
  },
  {
   "id": "236d",
   "ex": 236,
   "ap": "d",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Escriu l'espai mostral dels experiments aleatoris següents.",
   "enunciat": "Llançar 2 daus i restar les cares superiors.",
   "opcions": [
    "L'espai mostral té $6$ resultats, com un sol dau",
    "L'espai mostral té $5$ resultats, només els positius",
    "L'espai mostral té $11$ resultats: $\\{-5,-4,-3,-2,-1,0,1,2,3,4,5\\}$",
    "L'espai mostral té $36$ resultats, un per cada parell de cares"
   ],
   "pistes": [
    "La resta de les cares superiors pot anar des de $1-6$ fins a $6-1$.",
    "Calcula el valor mínim i el màxim, i compta tots els enters entremig, incloent-hi el $0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBbWIgZG9zIGRhdXMgaSB1bmEgcmVzdGEsIGVscyByZXN1bHRhdHMgcG9zc2libGVzIG5vIGVzIGxpbWl0ZW4gYSBsJyQxJC0kNiQgZCd1biBzb2wgZGF1OiBwb2RlbiBzb3J0aXIgdmFsb3JzIG5lZ2F0aXVzIGkgZWwgJDAkLiIsICJMYSByZXN0YSBkZSBkdWVzIGNhcmVzIHRhbWLDqSBwb3QgZG9uYXIgJDAkIG8gdmFsb3JzIG5lZ2F0aXVzIChzaSBsYSBzZWdvbmEgY2FyYSDDqXMgbcOpcyBncmFuIHF1ZSBsYSBwcmltZXJhKTogbm8gZXMgcG90IGRlc2NhcnRhciBhcXVlc3RhIHBhcnQgZGUgbCdlc3BhaSBtb3N0cmFsLiIsICIiLCAiJDM2JCDDqXMgZWwgbm9tYnJlIGRlIFBBUkVMTFMgZGUgcmVzdWx0YXRzIGRlbHMgZG9zIGRhdXMsIG5vIGVsIG5vbWJyZSBkZSB2YWxvcnMgRElGRVJFTlRTIHF1ZSBwb3QgcHJlbmRyZSBsYSBzZXZhIHJlc3RhOiBkaXZlcnNvcyBwYXJlbGxzIGRvbmVuIGxhIG1hdGVpeGEgcmVzdGEgKHBlciBleGVtcGxlLCAkKDMsMSkkIGkgJCg0LDIpJCBkb25lbiB0b3RzIGRvcyAkMiQpLiJdLCAiZXJyIjogWyJFU1BBSV9NT1NUUkFMX01BTF9DT01QVEFUIiwgIkVTUEFJX01PU1RSQUxfTUFMX0NPTVBUQVQiLCAiIiwgIkVTUEFJX01PU1RSQUxfTUFMX0NPTVBUQVQiXSwgInJlcyI6IFsiTGEgcmVzdGEgdmEgZGUgJDEtNj0tNSQgZmlucyBhICQ2LTE9NSQ6ICRFPVxcey01LC00LC0zLC0yLC0xLDAsMSwyLDMsNCw1XFx9JCwgJDExJCByZXN1bHRhdHMiXX0="
  },
  {
   "id": "236e",
   "ex": 236,
   "ap": "e",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Escriu l'espai mostral dels experiments aleatoris següents.",
   "enunciat": "Llançar 2 daus i multiplicar les cares superiors.",
   "opcions": [
    "L'espai mostral té $36$ resultats, un per cada parell de cares",
    "L'espai mostral té $30$ resultats, tots els valors de $1$ a $30$",
    "L'espai mostral té $6$ resultats, un per cada valor d'un sol dau",
    "L'espai mostral té $18$ resultats: $\\{1,2,3,4,5,6,8,9,10,12,15,16,18,20,24,25,30,36\\}$"
   ],
   "pistes": [
    "El producte de les cares pot anar d'$1\\cdot1=1$ fins a $6\\cdot6=36$, però no tots els valors intermedis s'obtenen.",
    "Llista tots els productes possibles de $i\\cdot j$ amb $i,j\\in\\{1,\\ldots,6\\}$ i queda't només amb els valors diferents."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyIkMzYkIMOpcyBlbCBub21icmUgZGUgUEFSRUxMUyBkZSByZXN1bHRhdHMgZGVscyBkb3MgZGF1cywgbm8gZWwgbm9tYnJlIGRlIHZhbG9ycyBESUZFUkVOVFMgZGVsIHNldSBwcm9kdWN0ZTogZGl2ZXJzb3MgcGFyZWxscyBkb25lbiBlbCBtYXRlaXggcHJvZHVjdGUgKHBlciBleGVtcGxlLCAkMlxcY2RvdDM9NiQgaSAkM1xcY2RvdDI9NiQsIG8gJDJcXGNkb3Q2PTEyJCBpICQzXFxjZG90ND0xMiQpLiIsICJObyB0b3RzIGVscyBub21icmVzIGRlICQxJCBhICQzMCQgKG5pIGZpbnMgYSAkMzYkKSBzJ29idGVuZW4gY29tIGEgcHJvZHVjdGUgZGUgZHVlcyBjYXJlcyBkJ3VuIGRhdTogcGVyIGV4ZW1wbGUsIGwnJDExJCwgZWwgJDEzJCwgZWwgJDE0JCBvIGVsICQxNyQgbm8gZXMgcG9kZW4gb2J0ZW5pci4gQ2FsIGxsaXN0YXIgbm9tw6lzIGVscyBxdWUgcmVhbG1lbnQgcydvYnRlbmVuLiIsICJFbCBwcm9kdWN0ZSBkZSBkb3MgZGF1cyBkb25hIHZhbG9ycyBtb2x0IG3DqXMgZ3JhbnMgcXVlIGVscyBkJ3VuIHNvbCBkYXUgKGZpbnMgYSAkNlxcY2RvdDY9MzYkKTogbCdlc3BhaSBtb3N0cmFsIMOpcyBtb2x0IG3DqXMgYW1wbGkgcXVlIGVsIGQndW4gw7puaWMgZGF1LiIsICIiXSwgImVyciI6IFsiRVNQQUlfTU9TVFJBTF9NQUxfQ09NUFRBVCIsICJFU1BBSV9NT1NUUkFMX01BTF9DT01QVEFUIiwgIkVTUEFJX01PU1RSQUxfTUFMX0NPTVBUQVQiLCAiIl0sICJyZXMiOiBbIkVscyBwcm9kdWN0ZXMgcG9zc2libGVzLCBzZW5zZSByZXBldGlyIHZhbG9ycywgc8OzbiAkXFx7MSwyLDMsNCw1LDYsOCw5LDEwLDEyLDE1LDE2LDE4LDIwLDI0LDI1LDMwLDM2XFx9JDogJDE4JCByZXN1bHRhdHMiXX0="
  },
  {
   "id": "236f",
   "ex": 236,
   "ap": "f",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Escriu l'espai mostral dels experiments aleatoris següents.",
   "enunciat": "Considerar les espases de la baralla espanyola i treure una carta d'aquest grup.",
   "opcions": [
    "L'espai mostral té $4$ resultats, un per cada coll",
    "L'espai mostral té $40$ resultats, com tota la baralla",
    "L'espai mostral té $9$ resultats, de l'$1$ al $9$, sense comptar la figura",
    "L'espai mostral té $10$ resultats (les $10$ cartes del coll d'espases)"
   ],
   "pistes": [
    "Cada coll d'una baralla espanyola té el mateix nombre de cartes.",
    "Un coll té les cartes de l'$1$ al $9$ més una figura."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMJ2V4cGVyaW1lbnQgamEgZml4YSBlbCBjb2xsIChlc3Bhc2VzKTogZWwgcXVlIHZhcmlhIMOpcyBxdWluYSBjYXJ0YSBjb25jcmV0YSBkJ2VzcGFzZXMgc3VydCwgaSBuJ2hpIGhhICQxMCQsIG5vICQ0JC4iLCAiTCdlbnVuY2lhdCByZXN0cmluZ2VpeCBsJ2V4cGVyaW1lbnQgYSBVTiBzb2wgY29sbCAoZXNwYXNlcyksIG5vIGEgbGEgYmFyYWxsYSBzZW5jZXJhOiBub23DqXMgY29tcHRlbiBsZXMgJDEwJCBjYXJ0ZXMgZCdlc3Bhc2VzLiIsICJDYWRhIGNvbGwgZCd1bmEgYmFyYWxsYSBlc3BhbnlvbGEgdGFtYsOpIGluY2xvdSB1bmEgZmlndXJhIGEgbcOpcyBkZWxzIHZhbG9ycyBudW3DqHJpY3MgZGUgbCckMSQgYWwgJDkkOiBlbiB0b3RhbCwgJDEwJCBjYXJ0ZXMgcGVyIGNvbGwsIG5vICQ5JC4iLCAiIl0sICJlcnIiOiBbIkVTUEFJX01PU1RSQUxfTUFMX0NPTVBUQVQiLCAiRVNQQUlfTU9TVFJBTF9NQUxfQ09NUFRBVCIsICJFU1BBSV9NT1NUUkFMX01BTF9DT01QVEFUIiwgIiJdLCAicmVzIjogWyJFbCBjb2xsIGQnZXNwYXNlcyB0w6kgJDEwJCBjYXJ0ZXM6ICRFPVxcezFcXHRleHR7IGQnZXNwYXNlc30sIFxcbGRvdHMsXFx0ZXh0e3JlaSBkJ2VzcGFzZXN9XFx9JCJdfQ=="
  },
  {
   "id": "236g",
   "ex": 236,
   "ap": "g",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Escriu l'espai mostral dels experiments aleatoris següents.",
   "enunciat": "Escollir a l'atzar un país de la Unió Europea.",
   "opcions": [
    "L'espai mostral és infinit, perquè un país té molts habitants diferents",
    "L'espai mostral té $28$ resultats, incloent-hi el Regne Unit",
    "L'espai mostral té $50$ resultats, com els estats dels EUA",
    "L'espai mostral té $27$ resultats (els $27$ estats membres de la Unió Europea)"
   ],
   "pistes": [
    "Pensa en quants estats formen actualment la Unió Europea.",
    "No confonguis \"país\" amb \"habitant\": l'experiment tria un país sencer."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMJ2V4cGVyaW1lbnQgbm8gw6lzIFwidHJpYXIgdW4gaGFiaXRhbnRcIiwgw6lzIFwidHJpYXIgdW4gcGHDrXNcIjogZWxzIHBhw69zb3MgbWVtYnJlcyBkZSBsYSBVbmnDsyBFdXJvcGVhIHPDs24gdW4gbm9tYnJlIGZpbml0IGkgY29uY3JldC4iLCAiRWwgUmVnbmUgVW5pdCBqYSBubyDDqXMgZXN0YXQgbWVtYnJlIGRlIGxhIFVuacOzIEV1cm9wZWE6IGwnZXNwYWkgbW9zdHJhbCBkJ2FxdWVzdCBleHBlcmltZW50IHTDqSAkMjckIHBhw69zb3MsIG5vICQyOCQuIiwgIkwnZW51bmNpYXQgcGFybGEgZGUgbGEgVW5pw7MgRXVyb3BlYSwgbm8gZGVscyBFc3RhdHMgVW5pdHM6IGNhbCBlbCBub21icmUgZCdlc3RhdHMgbWVtYnJlcyBkZSBsYSBVRSwgcXVlIMOpcyAkMjckLCBubyAkNTAkLiIsICIiXSwgImVyciI6IFsiRVNQQUlfTU9TVFJBTF9NQUxfQ09NUFRBVCIsICJFU1BBSV9NT1NUUkFMX01BTF9DT01QVEFUIiwgIkVTUEFJX01PU1RSQUxfTUFMX0NPTVBUQVQiLCAiIl0sICJyZXMiOiBbIkxhIFVuacOzIEV1cm9wZWEgdMOpICQyNyQgZXN0YXRzIG1lbWJyZXM6ICRFPVxceyRlbHMgJDI3JCBwYcOvc29zIG1lbWJyZXMgZGUgbGEgVUUkXFx9JCJdfQ=="
  },
  {
   "id": "237",
   "ex": 237,
   "ap": "",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "Llancem 2 daus, un de vermell i un de blau. Quin és l'espai mostral d'aquest experiment?",
   "opcions": [
    "$E$ té $12$ resultats, la suma de les possibilitats de cada dau per separat",
    "$E$ té $21$ resultats, perquè no importa l'ordre dels daus",
    "$E=\\{(v,b):v,b\\in\\{1,\\ldots,6\\}\\}$, amb $36$ parells ordenats, ja que $(3,5)$ i $(5,3)$ són resultats diferents",
    "$E$ té $6$ resultats, perquè els dos daus donen el mateix conjunt de valors"
   ],
   "pistes": [
    "Com que els daus són de colors diferents, es pot distingir quin resultat prové de cada un: l'ordre importa.",
    "Per cada un dels $6$ resultats del dau vermell, el dau blau pot donar $6$ resultats més: aplica el principi multiplicatiu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJRdWFuIGRvcyBleHBlcmltZW50cyBpbmRlcGVuZGVudHMgZXMgY29tYmluZW4gKGFxdcOtLCBkb3MgZGF1cyksIGVsIG5vbWJyZSBkZSByZXN1bHRhdHMgZXMgTVVMVElQTElDQSwgbm8gc2Ugc3VtYTogJDZcXGNkb3Q2PTM2JCwgbm8gJDYrNj0xMiQuIiwgIkVscyBkb3MgZGF1cyBzw7NuIGRpZmVyZW50cyAodW4gdmVybWVsbCwgdW4gYmxhdSk6IGVsIHBhcmVsbCAkKDMsNSkkICh2ZXJtZWxsICQzJCwgYmxhdSAkNSQpIMOpcyB1biByZXN1bHRhdCBkaWZlcmVudCBkZWwgJCg1LDMpJCAodmVybWVsbCAkNSQsIGJsYXUgJDMkKS4gQ29tIHF1ZSBzw60gcXVlIGltcG9ydGEgbCdvcmRyZSwgbCdlc3BhaSBtb3N0cmFsIHTDqSAkMzYkIHJlc3VsdGF0cywgbm8gJDIxJC4iLCAiIiwgIkVuY2FyYSBxdWUgZWxzIGRvcyBkYXVzIHRpbmd1aW4gbGVzIG1hdGVpeGVzIGNhcmVzIHBvc3NpYmxlcyAoJDEkIGEgJDYkKSwgZWwgcmVzdWx0YXQgZGUgbCdleHBlcmltZW50IMOpcyBlbCBQQVJFTEwgZGUgdmFsb3JzICh1biBkZSBjYWRhIGRhdSksIG5vIHVuIMO6bmljIHZhbG9yOiBjYWwgY29tYmluYXItbG9zLiJdLCAiZXJyIjogWyJQUklOQ0lQSV9NVUxUSVBMSUNBVElVX01BTF9BUExJQ0FUIiwgIk9SRFJFX05PX0NPTlNJREVSQVQiLCAiIiwgIlBSSU5DSVBJX01VTFRJUExJQ0FUSVVfTUFMX0FQTElDQVQiXSwgInJlcyI6IFsiQ2FkYSBwYXJlbGwgJCh2LGIpJCBhbWIgJHYsYlxcaW5cXHsxLFxcbGRvdHMsNlxcfSQgw6lzIHVuIHJlc3VsdGF0IGRpZmVyZW50IiwgIlBlbCBwcmluY2lwaSBtdWx0aXBsaWNhdGl1OiAkNlxcY2RvdDY9MzYkIHBhcmVsbHMgb3JkZW5hdHMgcG9zc2libGVzIl19"
  },
  {
   "id": "238a",
   "ex": 238,
   "ap": "a",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Llancem 2 daus i multipliquem el nombre de punts obtingut a cada un.",
   "enunciat": "Quants resultats DIFERENTS es poden obtenir com a producte de les dues cares?",
   "opcions": [
    "$11$ resultats diferents",
    "$36$ resultats diferents",
    "$18$ resultats diferents",
    "$6$ resultats diferents"
   ],
   "pistes": [
    "Llista tots els productes possibles $i\\cdot j$ amb $i,j\\in\\{1,\\ldots,6\\}$ i queda't només amb els valors diferents.",
    "Recorda que diversos parells poden donar el mateix producte: no els comptis dues vegades."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyIkMTEkIMOpcyBlbCBub21icmUgZGUgcmVzdWx0YXRzIGRpZmVyZW50cyBkZSBSRVNUQVIgbGVzIGR1ZXMgY2FyZXMgKGV4ZXJjaWNpIGFudGVyaW9yKSwgbm8gZGUgbXVsdGlwbGljYXItbGVzOiBhbWIgZWwgcHJvZHVjdGUgcydvYnRlbmVuIG3DqXMgdmFsb3JzIGRpZmVyZW50cywgJDE4JC4iLCAiJDM2JCDDqXMgZWwgbm9tYnJlIGRlIFBBUkVMTFMgZGUgcmVzdWx0YXRzIHBvc3NpYmxlcyBkZWxzIGRvcyBkYXVzLCBubyBlbCBub21icmUgZGUgUFJPRFVDVEVTIGRpZmVyZW50czogZGl2ZXJzb3MgcGFyZWxscyBkb25lbiBlbCBtYXRlaXggcHJvZHVjdGUgKHBlciBleGVtcGxlLCAkMlxcY2RvdDM9NiQgaSAkM1xcY2RvdDI9NiQpLiIsICIiLCAiRWwgcHJvZHVjdGUgZGUgZG9zIGRhdXMgcG90IGRvbmFyIHZhbG9ycyBtb2x0IG3DqXMgZ3JhbnMgcXVlIGVscyBkJ3VuIHNvbCBkYXUgKGZpbnMgYSAkMzYkKTogbCdlc3BhaSBtb3N0cmFsIHTDqSBtw6lzIGRlICQ2JCByZXN1bHRhdHMuIl0sICJlcnIiOiBbIkVTUEFJX01PU1RSQUxfTUFMX0NPTVBUQVQiLCAiUEFSRUxMU19WQUxPUlNfQ09ORk9TT1MiLCAiIiwgIkVTUEFJX01PU1RSQUxfTUFMX0NPTVBUQVQiXSwgInJlcyI6IFsiRWxzIHByb2R1Y3RlcyBkaWZlcmVudHMgcXVlIHMnb2J0ZW5lbiBzw7NuICQxLDIsMyw0LDUsNiw4LDksMTAsMTIsMTUsMTYsMTgsMjAsMjQsMjUsMzAsMzYkOiBlbiB0b3RhbCwgJDE4JCByZXN1bHRhdHMiXX0="
  },
  {
   "id": "238b",
   "ex": 238,
   "ap": "b",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Llancem 2 daus i multipliquem el nombre de punts obtingut a cada un.",
   "enunciat": "Quin d'aquests és un exemple d'esdeveniment NO elemental (format per més d'un resultat) de l'espai mostral del producte de les dues cares?",
   "opcions": [
    "«Obtenir un producte més petit que $5$» (el formen els resultats $1,2,3,4$, quatre resultats de l'espai mostral)",
    "«Obtenir un producte igual a $12$» (un únic resultat de l'espai mostral)",
    "«Obtenir un producte que no sigui múltiple de cap número» (no correspon a cap resultat de l'espai mostral)",
    "«Obtenir el producte $36$» (un únic resultat de l'espai mostral)"
   ],
   "pistes": [
    "Un esdeveniment elemental és un ÚNIC resultat de l'espai mostral; un esdeveniment NO elemental n'agrupa diversos.",
    "Pensa quins resultats de l'espai mostral del producte $\\{1,2,3,4,5,6,8,\\ldots\\}$ compleixen \"ser més petit que $5$\"."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRW5jYXJhIHF1ZSBoaSBoYWdpIGRpdmVyc29zIFBBUkVMTFMgZGUgZGF1cyBxdWUgZG9uZW4gcHJvZHVjdGUgJDEyJCAoY29tICQoMiw2KSQgaSAkKDMsNCkkKSwgZGlucyBkZSBsJ0VTUEFJIE1PU1RSQUwgREVMIFBST0RVQ1RFIGVsIHZhbG9yICQxMiQgw6lzIHVuIMO6bmljIHJlc3VsdGF0OiBhcXVlc3QgZXNkZXZlbmltZW50IMOpcyBlbGVtZW50YWwsIG5vIGNvbXBvc3QgcGVyIGRpdmVyc29zIHJlc3VsdGF0cyBkZSBsJ2VzcGFpIG1vc3RyYWwgZGVsIHByb2R1Y3RlLiIsICJUb3QgbsO6bWVybyDDqXMgbcO6bHRpcGxlIGRlIHNpIG1hdGVpeCBpIGQnJDEkOiBhcXVlc3QgZXNkZXZlbmltZW50IG5vIGNvcnJlc3BvbiBhIGNhcCByZXN1bHRhdCB2w6BsaWQgZGUgbCdlc3BhaSBtb3N0cmFsLCBuaSBlbGVtZW50YWwgbmkgY29tcG9zdC4iLCAiJDM2JCDDqXMgdW4gw7puaWMgdmFsb3IgZGUgbCdlc3BhaSBtb3N0cmFsIGRlbCBwcm9kdWN0ZSAoJFxcezEsMixcXGxkb3RzLDM2XFx9JCBhbWIgZWxzIHZhbG9ycyBxdWUgcydoaSBwb2RlbiBvYnRlbmlyKTogYXF1ZXN0IGVzZGV2ZW5pbWVudCDDqXMgZWxlbWVudGFsLCBubyBmb3JtYXQgcGVyIGRpdmVyc29zIHJlc3VsdGF0cy4iXSwgImVyciI6IFsiIiwgIkVMRU1FTlRBTF9OT19FTEVNRU5UQUxfQ09ORk9TT1MiLCAiRUxFTUVOVEFMX05PX0VMRU1FTlRBTF9DT05GT1NPUyIsICJFTEVNRU5UQUxfTk9fRUxFTUVOVEFMX0NPTkZPU09TIl0sICJyZXMiOiBbIsKrT2J0ZW5pciB1biBwcm9kdWN0ZSBtw6lzIHBldGl0IHF1ZSAkNSTCuyBhZ3J1cGEgZWxzIHJlc3VsdGF0cyAkMSwyLDMsNCQgZGUgbCdlc3BhaSBtb3N0cmFsOiDDqXMgdW4gZXNkZXZlbmltZW50IE5PIGVsZW1lbnRhbCwgZm9ybWF0IHBlciAkNCQgcmVzdWx0YXRzIGRpZmVyZW50cyJdfQ=="
  },
  {
   "id": "239a",
   "ex": 239,
   "ap": "a",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Traiem dues cartes d'una baralla espanyola. Un esdeveniment impossible és:",
   "enunciat": "«Treure dos ors»",
   "opcions": [
    "Aquest esdeveniment és IMPOSSIBLE, perquè només hi ha un exemplar de cada carta",
    "Aquest esdeveniment és IMPOSSIBLE, perquè un cop treta una carta d'ors, no en queda cap altra",
    "Aquest esdeveniment és IMPOSSIBLE, perquè només es pot treure una carta d'ors per jugada",
    "Aquest esdeveniment és POSSIBLE: la baralla té $10$ ors, així que es poden treure dos"
   ],
   "pistes": [
    "Compta quantes cartes té el coll d'ors a una baralla espanyola.",
    "Un esdeveniment és impossible quan no hi ha CAP manera que passi, no quan és poc probable."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJRdWUgaGkgaGFnaSB1biDDum5pYyBleGVtcGxhciBkZSBDQURBIENBUlRBIENPTkNSRVRBIChjb20gZWwgcmVpIGQnb3JzKSBubyB2b2wgZGlyIHF1ZSBoaSBoYWdpIHVuIMO6bmljIGV4ZW1wbGFyIGRlIENBREEgQ09MTDogZWwgY29sbCBkJ29ycyB0w6kgJDEwJCBjYXJ0ZXMgZGlmZXJlbnRzLCBhaXjDrSBxdWUgc2UnbiBwb2RlbiB0cmV1cmUgZHVlcy4gUmV2aXNhIHF1YW50ZXMgY2FydGVzIChvIGVsZW1lbnRzKSBkaWZlcmVudHMgY29tcGxlaXhlbiBleGFjdGFtZW50IGxhIGNvbmRpY2nDsyBkZW1hbmFkYTogdW4gZXNkZXZlbmltZW50IMOpcyBpbXBvc3NpYmxlIG5vbcOpcyBxdWFuIENBUCByZXN1bHRhdCBkZSBsJ2VzcGFpIG1vc3RyYWwgZWwgY29tcGxlaXgsIG5vIHF1YW4gc2VtYmxhIHBvYyBoYWJpdHVhbC4iLCAiRWwgY29sbCBkJ29ycyB0w6kgJDEwJCBjYXJ0ZXMgZGlmZXJlbnRzIChkZSBsJyQxJCBhbCAkOSQgaSB1bmEgZmlndXJhKTogZGVzcHLDqXMgZGUgdHJldXJlJ24gdW5hLCBlbmNhcmEgZW4gcXVlZGVuICQ5JCBtw6lzIHBlciB0cmV1cmUgY29tIGEgc2Vnb25hIGNhcnRhLiIsICJMJ2VudW5jaWF0IHBhcmxhIGRlIHRyZXVyZSBEVUVTIGNhcnRlcyBlbiB0b3RhbCwgbm8gZCd1bmEganVnYWRhIGxpbWl0YWRhIGEgdW5hIGNhcnRhIHBlciBjb2xsOiDDqXMgcGVyZmVjdGFtZW50IHBvc3NpYmxlIHF1ZSB0b3RlcyBkdWVzIHNpZ3VpbiBkJ29ycy4iLCAiIl0sICJlcnIiOiBbIkNBUlRFU19SRVBFVElERVNfQ09ORk9TRVMiLCAiQ0FSVEVTX1JFUEVUSURFU19DT05GT1NFUyIsICJDQVJURVNfUkVQRVRJREVTX0NPTkZPU0VTIiwgIiJdLCAicmVzIjogWyJIaSBoYSAkMTAkIG9ycyBhIGxhIGJhcmFsbGEsIGFpeMOtIHF1ZSDDqXMgcGVyZmVjdGFtZW50IHBvc3NpYmxlIHRyZXVyZSduIGRvczogYXF1ZXN0IGVzZGV2ZW5pbWVudCBOTyDDqXMgaW1wb3NzaWJsZSJdfQ=="
  },
  {
   "id": "239b",
   "ex": 239,
   "ap": "b",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Traiem dues cartes d'una baralla espanyola. Un esdeveniment impossible és:",
   "enunciat": "«Treure dos cavalls de copes»",
   "opcions": [
    "Aquest esdeveniment és POSSIBLE, perquè hi ha diversos cavalls a la baralla",
    "Aquest esdeveniment és IMPOSSIBLE: només hi ha un cavall de copes a tota la baralla",
    "Aquest esdeveniment és POSSIBLE, perquè hi ha $4$ colls i cadascun té un cavall",
    "Aquest esdeveniment és POSSIBLE, perquè les cartes es tornen a barrejar entre extracció i extracció"
   ],
   "pistes": [
    "Compta quants \"cavalls de copes\" (exactament aquesta carta) hi ha a la baralla.",
    "Un cop treta l'única carta d'aquest tipus, no en queda cap altra igual per treure una segona vegada."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIaSBoYSBkaXZlcnNvcyBjYXZhbGxzIGEgbGEgYmFyYWxsYSAodW4gcGVyIGNvbGwpLCBwZXLDsiBlbCBcImNhdmFsbCBkZSBjb3Blc1wiIGNvbmNyZXQgw6lzIHVuYSDDum5pY2EgY2FydGE6IG5vIHNlJ24gcG9kZW4gdHJldXJlIGR1ZXMgZXhlbXBsYXJzIGlndWFscy4iLCAiIiwgIlF1ZSBoaSBoYWdpIHVuIGNhdmFsbCBwZXIgY29sbCBubyBhanVkYSBhcXXDrTogbCdlc2RldmVuaW1lbnQgZGVtYW5hIGVsIGNhdmFsbCBEJ1VOIFNPTCBjb2xsIChjb3BlcykgRE9TIGNvcHMsIGkgbm9tw6lzIG4naGkgaGEgdW4gZXhlbXBsYXIuIiwgIkwnZW51bmNpYXQgcGFybGEgZGUgdHJldXJlIGR1ZXMgY2FydGVzIChzZW5zZSBpbmRpY2FyIHF1ZSBlcyByZXRvcm5pbiBpIGVzIGJhcnJlZ2luIGVudHJlIG1pZyk6IGFtYiB1biDDum5pYyBjYXZhbGwgZGUgY29wZXMgYSBsYSBiYXJhbGxhLCBubyBzZSduIHBvZGVuIHRyZXVyZSBkb3MgZXhlbXBsYXJzIGRpZmVyZW50cyBlbiBsYSBtYXRlaXhhIGV4dHJhY2Npw7MuIl0sICJlcnIiOiBbIkNBUlRFU19SRVBFVElERVNfQ09ORk9TRVMiLCAiIiwgIkNBUlRFU19SRVBFVElERVNfQ09ORk9TRVMiLCAiQ0FSVEVTX1JFUEVUSURFU19DT05GT1NFUyJdLCAicmVzIjogWyJOb23DqXMgaGkgaGEgdW4gY2F2YWxsIGRlIGNvcGVzIGEgdG90YSBsYSBiYXJhbGxhOiB1biBjb3AgbCdoZW0gdHJldCwgbm8gZW4gcXVlZGEgY2FwIGFsdHJlIGlndWFsLiBBcXVlc3QgZXNkZXZlbmltZW50IMOpcyBJTVBPU1NJQkxFIl19"
  },
  {
   "id": "239c",
   "ex": 239,
   "ap": "c",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Traiem dues cartes d'una baralla espanyola. Un esdeveniment impossible és:",
   "enunciat": "«Treure dues cartes de coll diferent»",
   "opcions": [
    "Aquest esdeveniment és POSSIBLE: n'hi ha prou en treure, per exemple, un or i una copa",
    "Aquest esdeveniment és IMPOSSIBLE, perquè les dues cartes sempre acaben sent del mateix coll",
    "Aquest esdeveniment és IMPOSSIBLE, perquè cada coll té les seves pròpies cartes",
    "Aquest esdeveniment és IMPOSSIBLE, perquè la baralla només té un exemplar de cada carta"
   ],
   "pistes": [
    "Pensa en un exemple concret: pots treure un or i, després, una copa?",
    "Un esdeveniment és impossible només si no hi ha CAP manera que passi."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiTm8gaGkgaGEgY2FwIHJhw7MgcGVycXXDqCBkdWVzIGNhcnRlcyB0cmlhZGVzIGEgbCdhdHphciBoYWdpbiBkZSBjb2luY2lkaXIgZGUgY29sbDogw6lzLCBkZSBmZXQsIGVsIHJlc3VsdGF0IG3DqXMgZsOgY2lsIGQnYWNvbnNlZ3Vpci4iLCAiUXVlIGNhZGEgY29sbCB0aW5ndWkgbGVzIHNldmVzIHByw7JwaWVzIGNhcnRlcyBubyBpbXBlZGVpeCB0cmV1cmUnbiB1bmEgZGUgY2FkYTogcHJlY2lzYW1lbnQgcGVyIGFpeMOyIMOpcyBmw6BjaWwgYWNvbnNlZ3VpciBkdWVzIGNhcnRlcyBkZSBjb2xscyBkaWZlcmVudHMuIiwgIlF1ZSBjYWRhIGNhcnRhIGNvbmNyZXRhIHNpZ3VpIMO6bmljYSBubyBmYSBpbXBvc3NpYmxlIGFxdWVzdCBlc2RldmVuaW1lbnQ6IG5vIGVzIGRlbWFuYSByZXBldGlyIGNhcCBjYXJ0YSwgbm9tw6lzIHF1ZSBwcm92aW5ndWluIGRlIGNvbGxzIGRpZmVyZW50cy4iXSwgImVyciI6IFsiIiwgIkNBUlRFU19SRVBFVElERVNfQ09ORk9TRVMiLCAiQ0FSVEVTX1JFUEVUSURFU19DT05GT1NFUyIsICJDQVJURVNfUkVQRVRJREVTX0NPTkZPU0VTIl0sICJyZXMiOiBbIsOJcyBwb3NzaWJsZTogbidoaSBoYSBwcm91IGVuIHRyZXVyZSwgcGVyIGV4ZW1wbGUsIHVuIG9yIGkgdW5hIGNvcGEuIEFxdWVzdCBlc2RldmVuaW1lbnQgTk8gw6lzIGltcG9zc2libGUiXX0="
  },
  {
   "id": "239d",
   "ex": 239,
   "ap": "d",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Traiem dues cartes d'una baralla espanyola. Un esdeveniment impossible és:",
   "enunciat": "«Treure dues figures iguals del mateix coll»",
   "opcions": [
    "Aquest esdeveniment és POSSIBLE, perquè hi ha $4$ colls amb figures cadascun",
    "Aquest esdeveniment és IMPOSSIBLE: cada figura (sota, cavall, rei) només té un exemplar per coll",
    "Aquest esdeveniment és POSSIBLE, perquè les figures es poden confondre entre elles",
    "Aquest esdeveniment és POSSIBLE, perquè cada coll té tres figures (sota, cavall, rei)"
   ],
   "pistes": [
    "Compta quants \"reis d'ors\" (exactament aquesta carta) hi ha a la baralla.",
    "Cada figura concreta (sota, cavall o rei d'un coll determinat) és una única carta a tota la baralla."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJRdWUgaGkgaGFnaSBmaWd1cmVzIGEgY2FkYSBjb2xsIG5vIGFqdWRhOiBsJ2VzZGV2ZW5pbWVudCBkZW1hbmEgRFVFUyBmaWd1cmVzIElHVUFMUyAoY29tIGRvcyByZWlzIGQnb3JzKSBESU5TIERFTCBNQVRFSVggY29sbCwgaSBjYWRhIGZpZ3VyYSBub23DqXMgaGkgYXBhcmVpeCB1bmEgdmVnYWRhLiIsICIiLCAiTGVzIGZpZ3VyZXMgbm8gZXMgY29uZm9uZW46IGNhZGEgY2FydGEgw6lzIMO6bmljYSBpIGRpc3RpbmdpYmxlLiBFbCByZWkgZCdvcnMgw6lzIHVuYSDDum5pY2EgY2FydGEgYSB0b3RhIGxhIGJhcmFsbGEsIG5vIG4naGkgaGEgY2FwIGFsdHJhIGlndWFsLiIsICJRdWUgY2FkYSBjb2xsIHRpbmd1aSB0cmVzIGZpZ3VyZXMgRElGRVJFTlRTIG5vIHZvbCBkaXIgcXVlIGVuIHRpbmd1aSBkdWVzIGQnSUdVQUxTOiBwZXIgZXhlbXBsZSwgbm8gaGkgaGEgZG9zIHJlaXMgZCdvcnMgZGlmZXJlbnRzIGEgbGEgbWF0ZWl4YSBiYXJhbGxhLiJdLCAiZXJyIjogWyJDQVJURVNfUkVQRVRJREVTX0NPTkZPU0VTIiwgIiIsICJDQVJURVNfUkVQRVRJREVTX0NPTkZPU0VTIiwgIkNBUlRFU19SRVBFVElERVNfQ09ORk9TRVMiXSwgInJlcyI6IFsiQ2FkYSBmaWd1cmEgKHNvdGEsIGNhdmFsbCwgcmVpKSBub23DqXMgdMOpIHVuIGV4ZW1wbGFyIHBlciBjb2xsOiBubyBoaSBoYSwgcGVyIGV4ZW1wbGUsIGRvcyByZWlzIGQnb3JzIGRpZmVyZW50cy4gQXF1ZXN0IGVzZGV2ZW5pbWVudCDDqXMgSU1QT1NTSUJMRSJdfQ=="
  },
  {
   "id": "239e",
   "ex": 239,
   "ap": "e",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Traiem dues cartes d'una baralla espanyola. Un esdeveniment impossible és:",
   "enunciat": "«Treure un or i una copa»",
   "opcions": [
    "Aquest esdeveniment és IMPOSSIBLE, perquè només hi ha un or i una copa a tota la baralla",
    "Aquest esdeveniment és POSSIBLE: n'hi ha prou en treure un or seguit d'una copa",
    "Aquest esdeveniment és IMPOSSIBLE, pel mateix motiu que \"dos cavalls de copes\"",
    "Aquest esdeveniment és IMPOSSIBLE, perquè l'or i la copa mai es poden treure juntes"
   ],
   "pistes": [
    "Pensa en un exemple concret: pots treure un or i, després, una copa?",
    "Compara-ho amb l'apartat c): també és un cas de \"colls diferents\", que sí que és possible."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJDYWRhIGNvbGwgKG9ycywgY29wZXMpIHTDqSAkMTAkIGNhcnRlcyBkaWZlcmVudHMgYSBsYSBiYXJhbGxhLCBubyB1bmEgZGUgc29sYTogaGkgaGEgJDEwJCBvcnMgaSAkMTAkIGNvcGVzIHBvc3NpYmxlcyBwZXIgdHJpYXIuIiwgIiIsICJBcXXDrSBubyBlcyBkZW1hbmEgcmVwZXRpciBjYXAgY2FydGEgbmkgY2FwIGZpZ3VyYSBjb25jcmV0YTogZXMgZGVtYW5hIHVuYSBjYXJ0YSBkJ29ycyBpIHVuYSBkZSBjb3BlcywgY29sbHMgZGlmZXJlbnRzIGFtYiBtb2x0ZXMgY2FydGVzIGNhZGFzY3VuLiIsICJObyBoaSBoYSBjYXAgaW1wZWRpbWVudCBwZXIgdHJldXJlIHVuYSBjYXJ0YSBkJ29ycyBpIHVuYSBkZSBjb3BlcyBlbiBsYSBtYXRlaXhhIGV4dHJhY2Npw7MgZGUgZHVlcyBjYXJ0ZXM6IHPDs24gY29sbHMgZGlmZXJlbnRzIGFtYiBsZXMgc2V2ZXMgcHLDsnBpZXMgY2FydGVzLiJdLCAiZXJyIjogWyJDQVJURVNfUkVQRVRJREVTX0NPTkZPU0VTIiwgIiIsICJDQVJURVNfUkVQRVRJREVTX0NPTkZPU0VTIiwgIkNBUlRFU19SRVBFVElERVNfQ09ORk9TRVMiXSwgInJlcyI6IFsiw4lzIHBvc3NpYmxlOiBuJ2hpIGhhIHByb3UgZW4gdHJldXJlIHVuIG9yIHNlZ3VpdCBkJ3VuYSBjb3BhLiBBcXVlc3QgZXNkZXZlbmltZW50IE5PIMOpcyBpbXBvc3NpYmxlIl19"
  },
  {
   "id": "240a",
   "ex": 240,
   "ap": "a",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "En llançar un dau, ordena, de grau més petit a més gran de probabilitat, els esdeveniments següents.",
   "enunciat": "«Nombre imparell»",
   "opcions": [
    "$P=\\dfrac{3}{6}=\\dfrac12$ ($1$, $3$ i $5$ són $3$ casos favorables d'entre $6$ possibles)",
    "$P=\\dfrac{4}{6}=\\dfrac23$",
    "$P=1$, perquè sempre surt un nombre imparell o parell",
    "$P=\\dfrac{1}{6}$, perquè només compta un nombre imparell concret"
   ],
   "pistes": [
    "Els casos possibles en un dau són sempre $6$.",
    "Compta quants resultats del $1$ al $6$ són imparells: $1$, $3$ i $5$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiVW4gZGF1IG51bWVyYXQgZGUgbCckMSQgYWwgJDYkIHTDqSBleGFjdGFtZW50ICQzJCByZXN1bHRhdHMgaW1wYXJlbGxzICgkMSwzLDUkKSwgbm8gJDQkOiByZXZpc2EgZWwgcmVjb21wdGUuIiwgIkFxdWVzdCByYW9uYW1lbnQgY29uZm9uZHJpYSBsJ2VzZGV2ZW5pbWVudCBcImltcGFyZWxsIG8gcGFyZWxsXCIgKHF1ZSBzw60gw6lzIHNlZ3VyKSBhbWIgXCJpbXBhcmVsbFwiIHRvdCBzb2wsIHF1ZSBub23DqXMgY29tcGxlaXhlbiBsYSBtZWl0YXQgZGVscyByZXN1bHRhdHMuIiwgIkwnZXNkZXZlbmltZW50IFwibm9tYnJlIGltcGFyZWxsXCIgYWdydXBhIFRPVFMgZWxzIHJlc3VsdGF0cyBpbXBhcmVsbHMgZGVsIGRhdSAoJDEkLCAkMyQgaSAkNSQpLCBubyB1biBkZSBzb2w6IHPDs24gJDMkIGNhc29zIGZhdm9yYWJsZXMsIG5vICQxJC4iXSwgImVyciI6IFsiIiwgIkNBU09TX0ZBVk9SQUJMRVNfTUFMX0NPTVBUQVRTIiwgIlZFUkVESUNURV9JTlZFUlRJVCIsICJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyJdLCAicmVzIjogWyLCq05vbWJyZSBpbXBhcmVsbMK7OiAkMSwzLDUkIHPDs24gJDMkIGNhc29zIGZhdm9yYWJsZXMuICRQPVxcZGZyYWN7M317Nn09XFxkZnJhYzEyJCJdfQ=="
  },
  {
   "id": "240b",
   "ex": 240,
   "ap": "b",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "En llançar un dau, ordena, de grau més petit a més gran de probabilitat, els esdeveniments següents.",
   "enunciat": "«Nombre igual o més gran que $5$»",
   "opcions": [
    "$P=\\dfrac{5}{6}$, comptant tots els valors fins al $5$",
    "$P=\\dfrac{2}{6}=\\dfrac13$ ($5$ i $6$ són $2$ casos favorables d'entre $6$ possibles)",
    "$P=\\dfrac{3}{6}=\\dfrac12$, comptant $4$, $5$ i $6$",
    "$P=\\dfrac{1}{6}$, comptant només el $6$"
   ],
   "pistes": [
    "\"Igual o més gran que $5$\" inclou el mateix $5$: quins valors del $1$ al $6$ ho compleixen?",
    "Compta'ls: només en queden dos."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3QgcmVjb21wdGUgcmVzcG9uIGEgXCJtw6lzIHBldGl0IG8gaWd1YWwgcXVlICQ1JFwiLCBsJ2VzZGV2ZW5pbWVudCBjb250cmFyaSAoYXByb3hpbWFkYW1lbnQpIGRlbCBxdWUgZXMgZGVtYW5hOiBhcXXDrSBjYWwgXCJpZ3VhbCBvIG3DqXMgZ3JhbiBxdWUgJDUkXCIsIMOpcyBhIGRpciwgbm9tw6lzICQ1JCBpICQ2JC4iLCAiIiwgIkVsICQ0JCBubyBjb21wbGVpeCBcImlndWFsIG8gbcOpcyBncmFuIHF1ZSAkNSRcIjogbm9tw6lzIGVsICQ1JCBpIGVsICQ2JCBobyBjb21wbGVpeGVuLCAkMiQgY2Fzb3MsIG5vICQzJC4iLCAiXCJJZ3VhbCBvIG3DqXMgZ3JhbiBxdWUgJDUkXCIgaW5jbG91IGVsIHByb3BpICQ1JCwgbm8gbm9tw6lzIGVscyB2YWxvcnMgZXN0cmljdGFtZW50IG3DqXMgZ3JhbnM6IGNhbCBjb21wdGFyIHRhbnQgZWwgJDUkIGNvbSBlbCAkNiQuIl0sICJlcnIiOiBbIkNBU09TX0ZBVk9SQUJMRVNfTUFMX0NPTVBUQVRTIiwgIiIsICJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyIsICJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyJdLCAicmVzIjogWyLCq05vbWJyZSBpZ3VhbCBvIG3DqXMgZ3JhbiBxdWUgJDUkwrs6ICQ1LDYkIHPDs24gJDIkIGNhc29zIGZhdm9yYWJsZXMuICRQPVxcZGZyYWN7Mn17Nn09XFxkZnJhYzEzJCJdfQ=="
  },
  {
   "id": "240c",
   "ex": 240,
   "ap": "c",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "En llançar un dau, ordena, de grau més petit a més gran de probabilitat, els esdeveniments següents.",
   "enunciat": "«Nombre més petit que $7$»",
   "opcions": [
    "$P=\\dfrac{6}{6}=1$ (tots els resultats $1,2,3,4,5,6$ ho compleixen: és un esdeveniment segur)",
    "$P=\\dfrac{5}{6}$, perquè el $6$ no compta",
    "Aquest esdeveniment és impossible, $P=0$, perquè el dau no arriba a $7$",
    "$P=\\dfrac{1}{6}$, comptant només el valor $6$ com a límit"
   ],
   "pistes": [
    "Quins valors del $1$ al $6$ són més petits que $7$?",
    "Compara-ho amb els casos possibles totals del dau."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgJDYkIFPDjSDDqXMgbcOpcyBwZXRpdCBxdWUgJDckOiB0YW1iw6kgY29tcHRhIGNvbSBhIGNhcyBmYXZvcmFibGUuIFRvdHMgZWxzIHJlc3VsdGF0cyBkZWwgZGF1ICgkMSQgYSAkNiQpIGNvbXBsZWl4ZW4gYXF1ZXN0YSBjb25kaWNpw7MuIiwgIlF1ZSBlbCBkYXUgbm8gYXJyaWJpIGEgJDckIMOpcyBleGFjdGFtZW50IGVsIG1vdGl1IHBlbCBxdWFsIFRPVFMgZWxzIHNldXMgcmVzdWx0YXRzIHPDs24gbcOpcyBwZXRpdHMgcXVlICQ3JDogYXF1ZXN0IGVzZGV2ZW5pbWVudCDDqXMgc2VndXIgKCRQPTEkKSwgbm8gaW1wb3NzaWJsZS4iLCAiTCdlc2RldmVuaW1lbnQgbm8gZGVtYW5hIFwic2VyIGV4YWN0YW1lbnQgJDYkXCI6IGRlbWFuYSBcInNlciBtw6lzIHBldGl0IHF1ZSAkNyRcIiwgcXVlIGNvbXBsZWl4ZW4gdG90cyBlbHMgJDYkIHJlc3VsdGF0cyBwb3NzaWJsZXMgZGVsIGRhdS4iXSwgImVyciI6IFsiIiwgIkNBU09TX0ZBVk9SQUJMRVNfTUFMX0NPTVBUQVRTIiwgIlZFUkVESUNURV9JTlZFUlRJVCIsICJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyJdLCAicmVzIjogWyLCq05vbWJyZSBtw6lzIHBldGl0IHF1ZSAkNyTCuzogdG90cyBlbHMgcmVzdWx0YXRzICQxLDIsMyw0LDUsNiQgaG8gY29tcGxlaXhlbiwgJDYkIGNhc29zIGZhdm9yYWJsZXMuICRQPVxcZGZyYWN7Nn17Nn09MSQgKGVzZGV2ZW5pbWVudCBzZWd1cikiXX0="
  },
  {
   "id": "240d",
   "ex": 240,
   "ap": "d",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "En llançar un dau, ordena, de grau més petit a més gran de probabilitat, els esdeveniments següents.",
   "enunciat": "«Nombre més gran que $7$»",
   "opcions": [
    "$P=\\dfrac{1}{6}$, comptant el $6$ com a cas favorable",
    "$P=\\dfrac{0}{6}=0$ (cap resultat del dau, de l'$1$ al $6$, supera el $7$: és un esdeveniment impossible)",
    "$P=\\dfrac{1}{6}$, considerant el $7$ com un resultat possible del dau",
    "$P=\\dfrac{6}{6}=1$, perquè cap resultat compleix la condició i per tant és un esdeveniment segur"
   ],
   "pistes": [
    "Quins valors del $1$ al $6$ són més grans que $7$?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCAkNiQgTk8gw6lzIG3DqXMgZ3JhbiBxdWUgJDckOiBjYXAgcmVzdWx0YXQgZGVsIGRhdSBobyBjb21wbGVpeCwgc8OzbiAkMCQgY2Fzb3MgZmF2b3JhYmxlcywgbm8gJDEkLiIsICIiLCAiVW4gZGF1IG5vbcOpcyB0w6kgJDYkIGNhcmVzLCBudW1lcmFkZXMgZGUgbCckMSQgYWwgJDYkOiBlbCAkNyQgbm8gw6lzIGNhcCByZXN1bHRhdCBwb3NzaWJsZSwgbmkgY29tcHRhIGNvbSBhIGNhcyBmYXZvcmFibGUgbmkgY29tIGEgcG9zc2libGUuIiwgIlF1ZSBjYXAgcmVzdWx0YXQgZGVsIGRhdSBjb21wbGVpeGkgbGEgY29uZGljacOzIMOpcyBleGFjdGFtZW50IGVsIG1vdGl1IHBlbCBxdWFsIGFxdWVzdCBlc2RldmVuaW1lbnQgw6lzIElNUE9TU0lCTEUgKCRQPTAkKSwgbm8gc2VndXI6IHNpIGNhcCBjYXMgw6lzIGZhdm9yYWJsZSwgbGEgcHJvYmFiaWxpdGF0IMOpcyAkMCQsIG5vICQxJC4iXSwgImVyciI6IFsiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiLCAiIiwgIkNBU09TX1BPU1NJQkxFU19NQUxfQ09NUFRBVFMiLCAiVkVSRURJQ1RFX0lOVkVSVElUIl0sICJyZXMiOiBbIsKrTm9tYnJlIG3DqXMgZ3JhbiBxdWUgJDckwrs6IGNhcCByZXN1bHRhdCBkZWwgZGF1ICgkMSQgYSAkNiQpIGhvIGNvbXBsZWl4LCAkMCQgY2Fzb3MgZmF2b3JhYmxlcy4gJFA9XFxkZnJhY3swfXs2fT0wJCAoZXNkZXZlbmltZW50IGltcG9zc2libGUpIl19"
  },
  {
   "id": "240e",
   "ex": 240,
   "ap": "e",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "En llançar un dau, ordena, de grau més petit a més gran de probabilitat, els esdeveniments següents.",
   "enunciat": "«Nombre més gran o igual que $2$»",
   "opcions": [
    "$P=\\dfrac{5}{6}$ ($2,3,4,5,6$ són $5$ casos favorables d'entre $6$ possibles)",
    "$P=\\dfrac{6}{6}=1$, perquè gairebé tots els valors ho compleixen",
    "$P=\\dfrac{4}{6}=\\dfrac23$, sense comptar el propi $2$",
    "$P=\\dfrac{1}{6}$, comptant només el $2$"
   ],
   "pistes": [
    "\"Més gran o igual que $2$\" inclou el propi $2$: quins valors del $1$ al $6$ ho compleixen?",
    "Descarta només el $1$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgJDEkIE5PIGNvbXBsZWl4IFwibcOpcyBncmFuIG8gaWd1YWwgcXVlICQyJFwiOiBubyB0b3RzIGVscyAkNiQgcmVzdWx0YXRzIGRlbCBkYXUgaG8gZmFuLCBub23DqXMgJDUkIGQnZWxscy4iLCAiXCJNw6lzIGdyYW4gbyBpZ3VhbCBxdWUgJDIkXCIgaW5jbG91IGVsIHByb3BpICQyJCwgbm8gbm9tw6lzIGVscyB2YWxvcnMgZXN0cmljdGFtZW50IG3DqXMgZ3JhbnM6IGNhbCBjb21wdGFyLWxvIGNvbSBhIGNhcyBmYXZvcmFibGUuIiwgIkwnZXNkZXZlbmltZW50IG5vIGVzIGxpbWl0YSBhbCB2YWxvciAkMiQgZXhhY3RlOiBpbmNsb3UgdGFtYsOpIGVsICQzJCwgZWwgJDQkLCBlbCAkNSQgaSBlbCAkNiQsIHRvdHMgZWxscyBtw6lzIGdyYW5zIHF1ZSAkMiQuIl0sICJlcnIiOiBbIiIsICJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyIsICJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyIsICJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyJdLCAicmVzIjogWyLCq05vbWJyZSBtw6lzIGdyYW4gbyBpZ3VhbCBxdWUgJDIkwrs6ICQyLDMsNCw1LDYkIHPDs24gJDUkIGNhc29zIGZhdm9yYWJsZXMuICRQPVxcZGZyYWN7NX17Nn0kIl19"
  },
  {
   "id": "242",
   "ex": 242,
   "ap": "",
   "bloc": "combinatoria",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Llancem un dau a l'aire i sumem els punts de totes les cares MENYS la de dalt. Calcula la probabilitat d'obtenir un nombre múltiple de $3$.",
   "opcions": [
    "$P=\\dfrac12$, comptant $3$ casos favorables",
    "$P=\\dfrac{3}{21}=\\dfrac17$, dividint pels punts totals del dau",
    "$P=\\dfrac16$, comptant només un cas favorable",
    "$P=\\dfrac13$ ($18$ i $15$ són $2$ casos favorables d'entre $6$)"
   ],
   "pistes": [
    "La suma de totes les cares d'un dau és $21$. Si la cara de dalt és $i$, la resta de cares suma $21-i$.",
    "Calcula aquesta suma per a cada valor de $i$ de l'$1$ al $6$, i mira quins resultats són múltiples de $3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJEZSBsZXMgc2lzIHN1bWVzIHBvc3NpYmxlcyAoJDE1LDE2LDE3LDE4LDE5LDIwJCksIG5vbcOpcyAkMTUkIGkgJDE4JCBzw7NuIG3Dumx0aXBsZXMgZGUgJDMkOiAkMiQgY2Fzb3MsIG5vICQzJC4iLCAiRWwgZGVub21pbmFkb3IgZGUgbGEgcHJvYmFiaWxpdGF0IGhhIGRlIHNlciBlbCBub21icmUgZGUgcmVzdWx0YXRzIFBPU1NJQkxFUyBkZSBsJ2V4cGVyaW1lbnQgKGxlcyAkNiQgY2FyZXMgcXVlIHBvZGVuIHF1ZWRhciBkZSBkYWx0KSwgbm8gbGEgc3VtYSB0b3RhbCBkZSBwdW50cyBkZWwgZGF1ICgkMSsyK1xcY2RvdHMrNj0yMSQpLiIsICJIaSBoYSBET1MgdmFsb3JzIG3Dumx0aXBsZXMgZGUgJDMkIGVudHJlIGxlcyBzaXMgc3VtZXMgcG9zc2libGVzICgkMTUkIGkgJDE4JCksIG5vIG5vbcOpcyB1bjogcmV2aXNhIGxhIHRhdWxhIGRlIHN1bWVzIHBlciBhIGNhZGEgY2FyYSBkZSBkYWx0LiIsICIiXSwgImVyciI6IFsiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiLCAiQ0FTT1NfUE9TU0lCTEVTX01BTF9DT01QVEFUUyIsICJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyIsICIiXSwgInJlcyI6IFsiU2kgbGEgY2FyYSBkZSBkYWx0IMOpcyAkaSQsIGxhIHN1bWEgZGUgbGEgcmVzdGEgw6lzICQyMS1pJDogcGVyICRpPTEsXFxsZG90cyw2JCBzJ29idMOpICQyMCwxOSwxOCwxNywxNiwxNSQiLCAiTCdlc3BhaSBtb3N0cmFsIGQnYXF1ZXN0YSBzdW1hIMOpcyAkXFx7MTUsMTYsMTcsMTgsMTksMjBcXH0kLCB1biByZXN1bHRhdCBwZXIgY2FkYSBjYXJhLCBjYWRhc2N1biBhbWIgcHJvYmFiaWxpdGF0ICRcXGZyYWMxNiQiLCAiTcO6bHRpcGxlcyBkZSAkMyQ6ICQxOCQgKGNhcmEgJDMkIGRlIGRhbHQpIGkgJDE1JCAoY2FyYSAkNiQgZGUgZGFsdCk6ICQyJCBjYXNvcyBkZSAkNiQsICRQPVxcZGZyYWN7Mn17Nn09XFxkZnJhYzEzJCJdfQ=="
  },
  {
   "id": "243",
   "ex": 243,
   "ap": "",
   "bloc": "combinatoria",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "La Susanna té a l'armari 2 faldilles, 3 parells de pantalons de diferents colors, 2 bruses, 3 samarretes i 3 barrets. Quantes combinacions diferents pot fer (una peça de la part de baix, una de la part de dalt i un barret)?",
   "opcions": [
    "$45$ combinacions, multiplicant $5\\cdot3\\cdot3$ sense agrupar bé la part de baix i la de dalt",
    "$10$ combinacions, sumant totes les peces ($2+3+2+3+3$)",
    "$18$ combinacions, comptant només faldilles, bruses i barrets (sense pantalons ni samarretes)",
    "$75$ combinacions"
   ],
   "pistes": [
    "Agrupa la roba en tres nivells: peça de baix (faldilla o pantalons), peça de dalt (brusa o samarreta) i barret.",
    "Compta les opcions de cada nivell per separat: $2+3=5$ (baix), $2+3=5$ (dalt), $3$ (barret). Multiplica-les."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJSZXZpc2EgcXVhbnRlcyBvcGNpb25zIGhpIGhhIGEgY2FkYSBuaXZlbGwgZGUgbCdhcmJyZTogbGEgcGFydCBkZSBiYWl4ICgkMiszPTUkIG9wY2lvbnMpIGkgbGEgcGFydCBkZSBkYWx0ICgkMiszPTUkIG9wY2lvbnMpIG5vIHRlbmVuIGVsIG1hdGVpeCBub21icmUgZCdvcGNpb25zIHBlciBjYXN1YWxpdGF0LCBjYWwgY2FsY3VsYXItbGVzIHBlciBzZXBhcmF0LiIsICJRdWFuIGVzIGNvbWJpbmVuIGRpdmVyc2VzIGVsZWNjaW9ucyBpbmRlcGVuZGVudHMgKHBhcnQgZGUgYmFpeCwgcGFydCBkZSBkYWx0LCBiYXJyZXQpLCBlbCBub21icmUgZGUgY29tYmluYWNpb25zIGVzIE1VTFRJUExJQ0EsIG5vIHNlIHN1bWEuIiwgIkwnYXJtYXJpIHRhbWLDqSBpbmNsb3UgcGFudGFsb25zIChwYXJ0IGRlIGJhaXgpIGkgc2FtYXJyZXRlcyAocGFydCBkZSBkYWx0KSBjb20gYSBhbHRlcm5hdGl2ZXM6IGNhbCBzdW1hci1sb3MgYSBsZXMgc2V2ZXMgY2F0ZWdvcmllcyByZXNwZWN0aXZlcywgbm8gaWdub3Jhci1sb3MuIiwgIiJdLCAiZXJyIjogWyJQUklOQ0lQSV9NVUxUSVBMSUNBVElVX01BTF9BUExJQ0FUIiwgIlBSSU5DSVBJX01VTFRJUExJQ0FUSVVfTUFMX0FQTElDQVQiLCAiUFJJTkNJUElfTVVMVElQTElDQVRJVV9NQUxfQVBMSUNBVCIsICIiXSwgInJlcyI6IFsiUGXDp2EgZGUgYmFpeDogJDIkIGZhbGRpbGxlcyAkKzMkIHBhbnRhbG9ucyAkPTUkIG9wY2lvbnMiLCAiUGXDp2EgZGUgZGFsdDogJDIkIGJydXNlcyAkKzMkIHNhbWFycmV0ZXMgJD01JCBvcGNpb25zIiwgIkJhcnJldDogJDMkIG9wY2lvbnMiLCAiUGVsIHByaW5jaXBpIG11bHRpcGxpY2F0aXU6ICQ1XFxjZG90NVxcY2RvdDM9NzUkIGNvbWJpbmFjaW9ucyJdfQ=="
  },
  {
   "id": "244",
   "ex": 244,
   "ap": "",
   "bloc": "combinatoria",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "",
   "enunciat": "Quants resultats possibles s'obtenen en llançar una moneda a l'aire i anotar el resultat de $10$ tirades?",
   "opcions": [
    "$10\\cdot2=20$ resultats possibles",
    "$2^{10}=1\\,024$ resultats possibles",
    "$2\\cdot10=20$ resultats possibles",
    "$100$ resultats possibles, per coincidència amb el nombre de vegades que apareix a altres exercicis del full"
   ],
   "pistes": [
    "Cada tirada té $2$ resultats (cara o creu). Amb $10$ tirades independents, el nombre de resultats es multiplica $10$ vegades.",
    "Calcula $2^{10}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJRdWFuIGVzIGNvbWJpbmVuICQxMCQgdGlyYWRlcyBpbmRlcGVuZGVudHMsIGNhZGFzY3VuYSBhbWIgJDIkIHJlc3VsdGF0cyBwb3NzaWJsZXMsIGVsIHRvdGFsIGVzIG11bHRpcGxpY2EgJDEwJCB2ZWdhZGVzIHNlZ3VpZGVzICgkMl57MTB9JCksIG5vIGVzIG11bHRpcGxpY2Egbm9tw6lzIHVuIGNvcCBwZWwgbm9tYnJlIGRlIHRpcmFkZXMuIiwgIiIsICJDYWRhIHRpcmFkYSBkb2JsYSBlbCBub21icmUgZGUgcmVzdWx0YXRzIHBvc3NpYmxlcyByZXNwZWN0ZSBhIGwnYW50ZXJpb3I6IGFtYiAkMTAkIHRpcmFkZXMgaW5kZXBlbmRlbnRzLCBjYWwgbXVsdGlwbGljYXIgJDIkIHBlciBzaSBtYXRlaXggJDEwJCB2ZWdhZGVzLCAkMl57MTB9JCwgbm8gZmVyIHVuIHNpbXBsZSBwcm9kdWN0ZSAkMlxcY2RvdDEwJC4iLCAiRWwgbm9tYnJlIGRlIHJlc3VsdGF0cyBkZXDDqG4gZGVsIG5vbWJyZSBkZSB0aXJhZGVzIGkgZCdvcGNpb25zIHBlciB0aXJhZGEgZCdBUVVFU1QgZXhwZXJpbWVudCBjb25jcmV0ICgkMl57MTB9JCksIG5vIGRlIHhpZnJlcyBxdWUgYXBhcmVndWluIGVuIGFsdHJlcyBleGVyY2ljaXMgZGlmZXJlbnRzLiJdLCAiZXJyIjogWyJQUklOQ0lQSV9NVUxUSVBMSUNBVElVX01BTF9BUExJQ0FUIiwgIiIsICJQUklOQ0lQSV9NVUxUSVBMSUNBVElVX01BTF9BUExJQ0FUIiwgIlBSSU5DSVBJX01VTFRJUExJQ0FUSVVfTUFMX0FQTElDQVQiXSwgInJlcyI6IFsiQ2FkYSB0aXJhZGEgZG9ibGEgZWwgbm9tYnJlIGRlIHJlc3VsdGF0cyBwb3NzaWJsZXMgcmVzcGVjdGUgYSBsJ2FudGVyaW9yOiBhbWIgJDEwJCB0aXJhZGVzLCAkMl57MTB9PTFcXCwwMjQkIHJlc3VsdGF0cyBwb3NzaWJsZXMiXX0="
  },
  {
   "id": "245",
   "ex": 245,
   "ap": "",
   "bloc": "combinatoria",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "En un restaurant, el menú del dia té $3$ primers plats, $3$ segons i $4$ postres. Quants menús diferents es poden confeccionar, triant un primer, un segon i unes postres?",
   "opcions": [
    "$9$ menús diferents, multiplicant només primers i segons ($3\\cdot3$)",
    "$36$ menús diferents",
    "$10$ menús diferents, sumant $3+3+4$",
    "$4$ menús diferents, un per cada opció de postres"
   ],
   "pistes": [
    "Cada client tria un plat de cada categoria de manera independent: primer, segon i postres.",
    "Aplica el mètode del producte: $3\\cdot3\\cdot4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJUJ2hhcyBkZWl4YXQgbGVzIHBvc3RyZXMgcGVsIGNhbcOtOiBjYWRhIG1lbsO6IHRhbWLDqSBpbmNsb3UgdW5hIGVsZWNjacOzIGRlIHBvc3RyZXMgKDQgb3BjaW9ucyksIHF1ZSBjYWwgbXVsdGlwbGljYXIgdGFtYsOpLiIsICIiLCAiUXVhbiBjYWRhIGNsaWVudCB0cmlhIHVuIHBsYXQgZGUgY2FkYSBjYXRlZ29yaWEgZGUgbWFuZXJhIGluZGVwZW5kZW50LCBlbCBub21icmUgZGUgY29tYmluYWNpb25zIGVzIE1VTFRJUExJQ0EsIG5vIHNlIHN1bWE6ICQzXFxjZG90M1xcY2RvdDQkLCBubyAkMyszKzQkLiIsICJDYWRhIG9wY2nDsyBkZSBwb3N0cmVzIGVzIHBvdCBjb21iaW5hciBhbWIgcXVhbHNldm9sIHByaW1lciBpIHF1YWxzZXZvbCBzZWdvbjogbm8gbidoaSBoYSBwcm91IGVuIGNvbXB0YXIgbm9tw6lzIGxlcyBwb3N0cmVzLCBjYWwgY29tYmluYXItbGVzIGFtYiB0b3RlcyBsZXMgYWx0cmVzIG9wY2lvbnMuIl0sICJlcnIiOiBbIlBSSU5DSVBJX01VTFRJUExJQ0FUSVVfTUFMX0FQTElDQVQiLCAiIiwgIlBSSU5DSVBJX01VTFRJUExJQ0FUSVVfTUFMX0FQTElDQVQiLCAiUFJJTkNJUElfTVVMVElQTElDQVRJVV9NQUxfQVBMSUNBVCJdLCAicmVzIjogWyJDYWRhIGNsaWVudCB0cmlhIHVuIHByaW1lciAoJDMkIG9wY2lvbnMpLCB1biBzZWdvbiAoJDMkIG9wY2lvbnMpIGkgdW5lcyBwb3N0cmVzICgkNCQgb3BjaW9ucyksIGRlIG1hbmVyYSBpbmRlcGVuZGVudCIsICJQZWwgbcOodG9kZSBkZWwgcHJvZHVjdGU6ICQzXFxjZG90M1xcY2RvdDQ9MzYkIG1lbsO6cyBkaWZlcmVudHMiXX0="
  },
  {
   "id": "246",
   "ex": 246,
   "ap": "",
   "bloc": "combinatoria",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "La clau d'accés d'un ordinador consta de $4$ caràcters (només lletres o nombres) i distingeix entre lletres majúscules i minúscules. Calcula el nombre de possibilitats diferents que hi ha per escriure la clau.",
   "opcions": [
    "$62\\cdot4=248$ claus diferents",
    "$62^4=14\\,776\\,336$ claus diferents possibles",
    "$62\\cdot61\\cdot60\\cdot59$ claus diferents, sense poder repetir cap caràcter",
    "$36^4$ claus diferents, sense distingir majúscules de minúscules"
   ],
   "pistes": [
    "Compta quants caràcters diferents hi ha disponibles per a cada posició: $26$ majúscules $+26$ minúscules $+10$ dígits.",
    "Amb $4$ posicions independents (es poden repetir caràcters), aplica el principi multiplicatiu: $62^4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBbWIgJDQkIHBvc2ljaW9ucyBpbmRlcGVuZGVudHMsIGNhZGFzY3VuYSBhbWIgJDYyJCBvcGNpb25zLCBlbCBub21icmUgZGUgY2xhdXMgZXMgbXVsdGlwbGljYSAkNCQgdmVnYWRlcyBzZWd1aWRlcyAoJDYyXjQkKSwgbm8gZXMgbXVsdGlwbGljYSBub23DqXMgdW4gY29wIHBlbCBub21icmUgZGUgcG9zaWNpb25zLiIsICIiLCAiTCdlbnVuY2lhdCBubyBwcm9oaWJlaXggcmVwZXRpciBjYXLDoGN0ZXJzIGRpbnMgZGUgbGEgY2xhdSAobm8gZGl1IHF1ZSBoYWdpbiBkZSBzZXIgdG90cyBkaWZlcmVudHMpOiBhIGNhZGEgcG9zaWNpw7MgaGkgaGEgc2VtcHJlICQ2MiQgb3BjaW9ucyBkaXNwb25pYmxlcywgZW5jYXJhIHF1ZSBqYSBzJ2hhZ2kgZmV0IHNlcnZpciBhbGd1biBjYXLDoGN0ZXIgZW4gdW5hIHBvc2ljacOzIGFudGVyaW9yLiIsICJMJ2VudW5jaWF0IGRpdSBleHBsw61jaXRhbWVudCBxdWUgZXMgZGlzdGluZ2VpeGVuIG1hasO6c2N1bGVzIGkgbWluw7pzY3VsZXM6IGNhbCBjb21wdGFyLWxlcyBwZXIgc2VwYXJhdCAoJDI2KzI2PTUyJCBsbGV0cmVzKSwgbm8gY29tIHVuIHNvbCBncnVwIGRlICQyNiQuIl0sICJlcnIiOiBbIlBSSU5DSVBJX01VTFRJUExJQ0FUSVVfTUFMX0FQTElDQVQiLCAiIiwgIlZBUklBQ0lPTlNfU0VOU0VfUkVQRVRJQ0lPX01BTCIsICJDQVNPU19QT1NTSUJMRVNfTUFMX0NPTVBUQVRTIl0sICJyZXMiOiBbIkNhcsOgY3RlcnMgcG9zc2libGVzIHBlciBwb3NpY2nDszogJDI2JCBtYWrDunNjdWxlcyAkKzI2JCBtaW7DunNjdWxlcyAkKzEwJCBkw61naXRzICQ9NjIkIiwgIkFtYiAkNCQgcG9zaWNpb25zIGluZGVwZW5kZW50czogJDYyXFxjZG90NjJcXGNkb3Q2MlxcY2RvdDYyPTYyXjQ9MTRcXCw3NzZcXCwzMzYkIGNsYXVzIGRpZmVyZW50cyJdfQ=="
  },
  {
   "id": "247",
   "ex": 247,
   "ap": "",
   "bloc": "combinatoria",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "El codi PIN d'un telèfon mòbil està format per $4$ dígits. Troba el nombre de codis diferents que podem posar al telèfon.",
   "opcions": [
    "$4!=24$ codis diferents, com si es tractés d'ordenar $4$ dígits fixos",
    "$10^4=10\\,000$ codis diferents",
    "$10\\cdot4=40$ codis diferents",
    "$10\\cdot9\\cdot8\\cdot7$ codis diferents, sense poder repetir cap dígit"
   ],
   "pistes": [
    "Cada posició del PIN es tria de manera independent, entre $10$ dígits possibles (del $0$ al $9$), i es poden repetir.",
    "Amb $4$ posicions: aplica el principi multiplicatiu, $10^4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJObyBlcyB0cmFjdGEgZCdvcmRlbmFyICQ0JCBkw61naXRzIGphIHRyaWF0czogYSBjYWRhIHVuYSBkZSBsZXMgJDQkIHBvc2ljaW9ucyBlcyBwb3QgdHJpYXIgUVVBTFNFVk9MIGRlbHMgJDEwJCBkw61naXRzIHBvc3NpYmxlcywgaW5kZXBlbmRlbnRtZW50IGRlIGxlcyBhbHRyZXMgcG9zaWNpb25zLiIsICIiLCAiQW1iICQ0JCBwb3NpY2lvbnMgaW5kZXBlbmRlbnRzLCBjYWRhc2N1bmEgYW1iICQxMCQgb3BjaW9ucyAoZMOtZ2l0cyBkZWwgJDAkIGFsICQ5JCksIGVsIG5vbWJyZSBkZSBjb2RpcyBlcyBtdWx0aXBsaWNhICQ0JCB2ZWdhZGVzIHNlZ3VpZGVzICgkMTBeNCQpLCBubyBlcyBtdWx0aXBsaWNhIG5vbcOpcyB1biBjb3AgcGVsIG5vbWJyZSBkZSBwb3NpY2lvbnMuIiwgIkwnZW51bmNpYXQgbm8gcHJvaGliZWl4IHJlcGV0aXIgZMOtZ2l0cyBkaW5zIGRlbCBQSU46IGEgY2FkYSBwb3NpY2nDsyBoaSBoYSBzZW1wcmUgJDEwJCBvcGNpb25zIGRpc3BvbmlibGVzLCBlbmNhcmEgcXVlIGphIHMnaGFnaSBmZXQgc2VydmlyIGFxdWVsbCBkw61naXQgZW4gdW5hIHBvc2ljacOzIGFudGVyaW9yLiJdLCAiZXJyIjogWyJGQUNUT1JJQUxfTUFMX0FQTElDQVQiLCAiIiwgIlBSSU5DSVBJX01VTFRJUExJQ0FUSVVfTUFMX0FQTElDQVQiLCAiVkFSSUFDSU9OU19TRU5TRV9SRVBFVElDSU9fTUFMIl0sICJyZXMiOiBbIkNhZGEgZMOtZ2l0IGRlbCBQSU4gcG90IHByZW5kcmUgJDEwJCB2YWxvcnMgZGlmZXJlbnRzLCBpIGVzIHBvZGVuIHJlcGV0aXI6IGFtYiAkNCQgeGlmcmVzLCAkMTBcXGNkb3QxMFxcY2RvdDEwXFxjZG90MTA9MTBeND0xMFxcLDAwMCQgY29kaXMgZGlmZXJlbnRzIl19"
  },
  {
   "id": "248a",
   "ex": 248,
   "ap": "a",
   "bloc": "combinatoria",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Escriu totes les paraules de 3 lletres, amb o sense sentit, que es poden formar amb les lletres de la paraula HOLA (sense repetir cap lletra dins de la mateixa paraula).",
   "enunciat": "Quantes paraules de $3$ lletres es poden formar en total?",
   "opcions": [
    "$4!=24$... però calculat com $4\\cdot4\\cdot4$ per error",
    "$24$ paraules",
    "$4^3=64$ paraules, permetent repetir lletres",
    "$12$ paraules, la meitat per error de comptar només la meitat dels ordres"
   ],
   "pistes": [
    "HOLA té $4$ lletres totes diferents. Per a la primera posició hi ha $4$ opcions; per a la segona, com que ja se n'ha fet servir una, en queden $3$; per a la tercera, $2$.",
    "Multiplica $4\\cdot3\\cdot2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCByZXN1bHRhdCBmaW5hbCwgJDI0JCwgw6lzIGNvcnJlY3RlLCBwZXLDsiBubyBzJ29idMOpIG11bHRpcGxpY2FudCAkNCQgdHJlcyB2ZWdhZGVzIHNlZ3VpZGVzICgkNF4zPTY0JCk6IGNhbCBhbmFyIHJlZHVpbnQgbGVzIG9wY2lvbnMgZGlzcG9uaWJsZXMgYSBjYWRhIHBvc2ljacOzLCAkNFxcY2RvdDNcXGNkb3QyJC4iLCAiIiwgIkNhZGEgbGxldHJhIGRlIEhPTEEgbm9tw6lzIGFwYXJlaXggdW5hIHZlZ2FkYSBhIGxhIHBhcmF1bGEgb3JpZ2luYWw6IG5vIGVzIHBvdCByZXBldGlyIGNhcCBsbGV0cmEgZGlucyBkZSBsYSBtYXRlaXhhIHBhcmF1bGEgZGUgMyBsbGV0cmVzLCBhaXjDrSBxdWUgbGVzIG9wY2lvbnMgZGlzbWludWVpeGVuIGEgY2FkYSBwb3NpY2nDsyBlbiBjb21wdGVzIGRlIG1hbnRlbmlyLXNlIHNlbXByZSBlbiAkNCQuIiwgIlBlciBhIGNhZGEgdHJpYSBkZSAkMyQgbGxldHJlcyBkZSBsZXMgJDQkLCBjYWwgY29tcHRhciBUT1RTIGVscyBvcmRyZXMgcG9zc2libGVzIGVuIHF1w6ggZXMgcG9kZW4gY29swrdsb2Nhciwgbm8gbm9tw6lzIGxhIG1laXRhdC4iXSwgImVyciI6IFsiUFJJTkNJUElfTVVMVElQTElDQVRJVV9NQUxfQVBMSUNBVCIsICIiLCAiVkFSSUFDSU9OU19TRU5TRV9SRVBFVElDSU9fTUFMIiwgIlZBUklBQ0lPTlNfU0VOU0VfUkVQRVRJQ0lPX01BTCJdLCAicmVzIjogWyJQcmltZXJhIHBvc2ljacOzOiAkNCQgbGxldHJlcyBwb3NzaWJsZXM7IHNlZ29uYTogJDMkIChqYSBuJ2hlbSBmZXQgc2VydmlyIHVuYSk7IHRlcmNlcmE6ICQyJCIsICIkNFxcY2RvdDNcXGNkb3QyPTI0JCBwYXJhdWxlcyBkZSAkMyQgbGxldHJlcyBkaWZlcmVudHMiXX0="
  },
  {
   "id": "248b",
   "ex": 248,
   "ap": "b",
   "bloc": "combinatoria",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Escriu totes les paraules de 3 lletres, amb o sense sentit, que es poden formar amb les lletres de la paraula HOLA (sense repetir cap lletra dins de la mateixa paraula).",
   "enunciat": "Quantes d'aquestes paraules comencen amb la lletra H?",
   "opcions": [
    "$2$ paraules, com si només restés una posició per triar",
    "$24$ paraules, totes, perquè qualsevol ordre és vàlid",
    "$6$ paraules",
    "$3$ paraules, oblidant multiplicar les opcions de les dues últimes posicions"
   ],
   "pistes": [
    "Si la paraula comença per H, la primera posició ja està fixada (1 opció).",
    "Per a la segona posició queden $3$ lletres (O, L, A), i per a la tercera, $2$: multiplica-les."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBbWIgbGEgSCBmaXhhZGEsIGVuY2FyYSBxdWVkZW4gRFVFUyBwb3NpY2lvbnMgcGVyIG9tcGxpciAoc2Vnb25hIGkgdGVyY2VyYSBsbGV0cmEpLCBubyBub23DqXMgdW5hOiBjYWwgJDNcXGNkb3QyPTYkLCBubyBub23DqXMgbCdvcGNpw7MgZGUgbCfDumx0aW1hIHBvc2ljacOzLiIsICJObyB0b3RlcyBsZXMgJDI0JCBwYXJhdWxlcyBjb21lbmNlbiBwZXIgSDogZml4YXIgbGEgcHJpbWVyYSBsbGV0cmEgY29tIGEgSCByZWR1ZWl4IGxlcyBvcGNpb25zIHBlciBhIGxlcyBhbHRyZXMgZHVlcyBwb3NpY2lvbnMuIiwgIiIsICJBbWIgbGEgSCBmaXhhZGEgYSBsYSBwcmltZXJhIHBvc2ljacOzLCBlbmNhcmEgY2FsZW4gJDIkIHBvc2ljaW9ucyBtw6lzIHBlciB0cmlhciAoZW50cmUgTywgTCwgQSk6IGNhbCBtdWx0aXBsaWNhciBsZXMgc2V2ZXMgb3BjaW9ucywgJDNcXGNkb3QyJCwgbm8gY29tcHRhci1uZSBub23DqXMgdW5hLiJdLCAiZXJyIjogWyJQUklOQ0lQSV9NVUxUSVBMSUNBVElVX01BTF9BUExJQ0FUIiwgIlBSSU5DSVBJX01VTFRJUExJQ0FUSVVfTUFMX0FQTElDQVQiLCAiIiwgIlBSSU5DSVBJX01VTFRJUExJQ0FUSVVfTUFMX0FQTElDQVQiXSwgInJlcyI6IFsiUHJpbWVyYSBwb3NpY2nDsyBmaXhhZGEgZW4gSCAoMSBvcGNpw7MpOyBzZWdvbmE6ICQzJCBsbGV0cmVzIHJlc3RhbnRzOyB0ZXJjZXJhOiAkMiQiLCAiJDFcXGNkb3QzXFxjZG90Mj02JCBwYXJhdWxlcyBxdWUgY29tZW5jZW4gcGVyIEgiXX0="
  },
  {
   "id": "248c",
   "ex": 248,
   "ap": "c",
   "bloc": "combinatoria",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Escriu totes les paraules de 3 lletres, amb o sense sentit, que es poden formar amb les lletres de la paraula HOLA (sense repetir cap lletra dins de la mateixa paraula).",
   "enunciat": "I quantes paraules contenen alhora les lletres L i A (en qualsevol ordre)?",
   "opcions": [
    "$3$ paraules, un ordre per cada tercera lletra possible",
    "$24$ paraules, totes, perquè L i A hi són sempre",
    "$6$ paraules, oblidant que la tercera lletra pot ser H o O (2 opcions)",
    "$12$ paraules"
   ],
   "pistes": [
    "La tercera lletra (a més de L i A) ha de ser H o O: $2$ opcions.",
    "Un cop triades les $3$ lletres, es poden ordenar de $3!=6$ maneres. Multiplica $2\\cdot6$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJVbiBjb3AgdHJpYWRlcyBsZXMgJDMkIGxsZXRyZXMgKEwsIEEgaSBsYSB0ZXJjZXJhKSwgZXMgcG9kZW4gb3JkZW5hciBkZSAkMyE9NiQgbWFuZXJlcyBkaWZlcmVudHMsIG5vIGQndW5hIHNvbGE6IGNhbCBtdWx0aXBsaWNhciBsZXMgJDIkIG9wY2lvbnMgZGUgdGVyY2VyYSBsbGV0cmEgcGVyIGFxdWVzdGVzICQ2JCBvcmRlbmFjaW9ucy4iLCAiTm8gdG90ZXMgbGVzICQyNCQgcGFyYXVsZXMgY29udGVuZW4gYWxob3JhIEwgaSBBOiBtb2x0ZXMgY29tYmluYWNpb25zIG5vIGluY2xvdWVuIHRvdGVzIGR1ZXMgbGxldHJlcyBhIGxhIHZlZ2FkYSAocGVyIGV4ZW1wbGUsIEgtTy1MIG5vIHTDqSBsYSBBKS4iLCAiTGEgdGVyY2VyYSBsbGV0cmEgZGUgbGEgcGFyYXVsYSAoYSBtw6lzIGRlIEwgaSBBKSBwb3Qgc2VyIEggbyBPOiBkdWVzIG9wY2lvbnMgZGlmZXJlbnRzLCBubyBub23DqXMgdW5hLiBDYWwgbXVsdGlwbGljYXItaG8gcGVsIG5vbWJyZSBkJ29yZGVuYWNpb25zIHBvc3NpYmxlcy4iLCAiIl0sICJlcnIiOiBbIkZBQ1RPUklBTF9NQUxfQVBMSUNBVCIsICJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyIsICJDQVNPU19GQVZPUkFCTEVTX01BTF9DT01QVEFUUyIsICIiXSwgInJlcyI6IFsiTGEgdGVyY2VyYSBsbGV0cmEgaGEgZGUgc2VyIEggbyBPICgkMiQgb3BjaW9ucykuIFVuIGNvcCB0cmlhZGVzIGxlcyAkMyQgbGxldHJlcywgaGkgaGEgJDMhPTYkIG9yZGVuYWNpb25zIHBvc3NpYmxlcyIsICJFbiB0b3RhbDogJDJcXGNkb3Q2PTEyJCBwYXJhdWxlcyJdfQ=="
  },
  {
   "id": "248d",
   "ex": 248,
   "ap": "d",
   "bloc": "combinatoria",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Escriu totes les paraules de 3 lletres, amb o sense sentit, que es poden formar amb les lletres de la paraula HOLA (sense repetir cap lletra dins de la mateixa paraula).",
   "enunciat": "Quantes paraules acabaran amb la lletra O?",
   "opcions": [
    "$24$ paraules, totes, perquè qualsevol ordre és vàlid",
    "$6$ paraules",
    "$3$ paraules, oblidant multiplicar les opcions de les dues primeres posicions",
    "$2$ paraules, com si només restés una posició per triar"
   ],
   "pistes": [
    "Si la paraula acaba en O, l'última posició ja està fixada (1 opció).",
    "Per a la primera posició queden $3$ lletres (H, L, A), i per a la segona, $2$: multiplica-les."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJObyB0b3RlcyBsZXMgJDI0JCBwYXJhdWxlcyBhY2FiZW4gZW4gTzogZml4YXIgbCfDumx0aW1hIGxsZXRyYSBjb20gYSBPIHJlZHVlaXggbGVzIG9wY2lvbnMgcGVyIGEgbGVzIGFsdHJlcyBkdWVzIHBvc2ljaW9ucy4iLCAiIiwgIkFtYiBsYSBPIGZpeGFkYSBhIGwnw7psdGltYSBwb3NpY2nDsywgZW5jYXJhIGNhbGVuICQyJCBwb3NpY2lvbnMgbcOpcyBwZXIgdHJpYXIgKGVudHJlIEgsIEwsIEEpOiBjYWwgbXVsdGlwbGljYXIgbGVzIHNldmVzIG9wY2lvbnMsICQzXFxjZG90MiQsIG5vIGNvbXB0YXItbmUgbm9tw6lzIHVuYS4iLCAiQW1iIGxhIE8gZml4YWRhLCBlbmNhcmEgcXVlZGVuIERVRVMgcG9zaWNpb25zIHBlciBvbXBsaXIgKHByaW1lcmEgaSBzZWdvbmEgbGxldHJhKSwgbm8gbm9tw6lzIHVuYTogY2FsICQzXFxjZG90Mj02JC4iXSwgImVyciI6IFsiUFJJTkNJUElfTVVMVElQTElDQVRJVV9NQUxfQVBMSUNBVCIsICIiLCAiUFJJTkNJUElfTVVMVElQTElDQVRJVV9NQUxfQVBMSUNBVCIsICJQUklOQ0lQSV9NVUxUSVBMSUNBVElVX01BTF9BUExJQ0FUIl0sICJyZXMiOiBbIsOabHRpbWEgcG9zaWNpw7MgZml4YWRhIGVuIE8gKDEgb3BjacOzKTsgcHJpbWVyYTogJDMkIGxsZXRyZXMgcmVzdGFudHM7IHNlZ29uYTogJDIkIiwgIiQzXFxjZG90MlxcY2RvdDE9NiQgcGFyYXVsZXMgcXVlIGFjYWJlbiBlbiBPIl19"
  },
  {
   "id": "248e",
   "ex": 248,
   "ap": "e",
   "bloc": "combinatoria",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Escriu totes les paraules de 3 lletres, amb o sense sentit, que es poden formar amb les lletres de la paraula HOLA (sense repetir cap lletra dins de la mateixa paraula).",
   "enunciat": "Quantes paraules acabaran amb les lletres \"LO\" (penúltima L, última O)?",
   "opcions": [
    "$3$ paraules, comptant també la O com a possible primera lletra",
    "$1$ paraula, oblidant que la primera lletra pot ser H o A (2 opcions)",
    "$6$ paraules, com si només es fixés l'última lletra",
    "$2$ paraules"
   ],
   "pistes": [
    "Amb la L i la O ja fixades a les seves posicions, només queda triar la primera lletra.",
    "Quines lletres queden disponibles (sense repetir L ni O)?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMYSBsbGV0cmEgTyBqYSBzJ2hhIGZldCBzZXJ2aXIgYSBsJ8O6bHRpbWEgcG9zaWNpw7M6IG5vIGVzIHBvdCB0b3JuYXIgYSBmZXIgc2VydmlyIGEgbGEgcHJpbWVyYS4gTm9tw6lzIHF1ZWRlbiBIIGkgQSBkaXNwb25pYmxlcy4iLCAiVW4gY29wIGZpeGFkZXMgTCBpIE8gYSBsZXMgc2V2ZXMgcG9zaWNpb25zLCBlbmNhcmEgcXVlZGVuIGR1ZXMgbGxldHJlcyBwb3NzaWJsZXMgcGVyIGEgbGEgcHJpbWVyYSBwb3NpY2nDszogSCBvIEEsIG5vIG5vbcOpcyB1bmEuIiwgIkFxdcOtIGVzIGZpeGVuIERVRVMgcG9zaWNpb25zIChwZW7Dumx0aW1hIEwsIMO6bHRpbWEgTyksIG5vIG5vbcOpcyB1bmE6IG5vbcOpcyBxdWVkYSBwZXIgdHJpYXIgbGEgcHJpbWVyYSBsbGV0cmEsIGVudHJlIEggaSBBLiIsICIiXSwgImVyciI6IFsiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiLCAiQ0FTT1NfRkFWT1JBQkxFU19NQUxfQ09NUFRBVFMiLCAiUFJJTkNJUElfTVVMVElQTElDQVRJVV9NQUxfQVBMSUNBVCIsICIiXSwgInJlcyI6IFsiQW1iIFwiTE9cIiBmaXhhdCBhbCBmaW5hbCwgbm9tw6lzIGNhbCB0cmlhciBsYSBwcmltZXJhIGxsZXRyYSBlbnRyZSBIIGkgQTogJDIkIG9wY2lvbnMiXX0="
  },
  {
   "id": "241a",
   "ex": 241,
   "ap": "a",
   "bloc": "laplace",
   "tipus": "A",
   "dif": 1,
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
   "dif": 1,
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
   "dif": 1,
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
   "dif": 1,
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
   "dif": 1,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
    "Només la cara $3$: la seva freqüència relativa és $\\frac{30}{100}$."
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
    "Cap cara compleix aquesta condició: la freqüència és $0$."
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
  },
  {
   "id": "253a",
   "ex": 253,
   "ap": "a",
   "bloc": "esdeveniments",
   "tipus": "A",
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
    "Cap: tot nombre enter és divisible per $1$."
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "id": "257a",
   "ex": 257,
   "ap": "a",
   "bloc": "esdeveniments",
   "tipus": "A",
   "dif": 1,
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
   "dif": 1,
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
   "dif": 1,
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
   "id": "258",
   "ex": 258,
   "ap": "",
   "bloc": "esdeveniments",
   "tipus": "A",
   "dif": 3,
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
   "dif": 3,
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
  },
  {
   "id": "305a",
   "ex": 305,
   "ap": "a",
   "bloc": "probabilitat_composta",
   "tipus": "A",
   "dif": 1,
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
   "dif": 1,
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
   "dif": 1,
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
   "id": "306a",
   "ex": 306,
   "ap": "a",
   "bloc": "probabilitat_composta",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "La mateixa bossa, 4 boles vermelles i 6 de blaves. Ara en traiem una, apuntem el color, i SENSE tornar-la a la bossa, en traiem una altra.",
   "enunciat": "Quina és la probabilitat que la primera sigui vermella?",
   "opcions": [
    "$P(V_1)=\\dfrac{4}{9}$, ja descomptant la bola que encara no s'ha tret",
    "$P(V_1)=\\dfrac{4}{6}$, comparant-la amb les blaves",
    "$P(V_1)=\\dfrac{4}{10}=\\dfrac{2}{5}$",
    "$P(V_1)=\\dfrac{6}{10}$, calculant la de blava"
   ],
   "pistes": [
    "A la primera extracció encara hi ha totes les boles: $10$ en total, $4$ de vermelles."
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
   "dif": 2,
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
   "dif": 2,
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
   "id": "307",
   "ex": 307,
   "ap": "",
   "bloc": "probabilitat_composta",
   "tipus": "B",
   "dif": 3,
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
   "id": "308a",
   "ex": 308,
   "ap": "a",
   "bloc": "probabilitat_composta",
   "tipus": "A",
   "dif": 1,
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
    "Multiplica les dues probabilitats del camí."
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
   "dif": 1,
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
   "id": "309a",
   "ex": 309,
   "ap": "a",
   "bloc": "probabilitat_composta",
   "tipus": "A",
   "dif": 2,
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
   "dif": 2,
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
    "Multiplica-les."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJMYSBwcm9iYWJpbGl0YXQgZCd1biBjYW3DrSBkZSBsJ2FyYnJlIMOpcyBlbCBwcm9kdWN0ZSBkZSBsZXMgc2V2ZXMgYnJhbnF1ZXMsIG5vIGxhIHN1bWEuIiwgIkxhIHNlZ29uYSBwcm9iYWJpbGl0YXQsIHVuIGNvcCB0cmV0YSB1bmEgdmVybWVsbGEgc2Vuc2UgcmVwb3Nhci1sYSwgw6lzICQxLzQkIChsYSBxdWUgYWNhYmVzIGRlIGNhbGN1bGFyKSwgbm8gJDIvNSQgdW5hIGFsdHJhIHZlZ2FkYS4iLCAiIiwgIkNhbCBzZWd1aXIgZWwgY2Ftw60gc2VuY2VyIGRlcyBkZSBsJ2FycmVsOiBsYSBwcm9iYWJpbGl0YXQgZGUgbGEgcHJpbWVyYSB2ZXJtZWxsYSAoJDIvNSQpIHRhbWLDqSBjb21wdGEsIG11bHRpcGxpY2FkYSBwZXIgbGEgc2Vnb25hLiJdLCAiZXJyIjogWyJDQU1JX0FSQlJFX01BTF9NVUxUSVBMSUNBVCIsICJSRUVNUExBQ0FNRU5UX01BTF9DT05TSURFUkFUIiwgIiIsICJDQU1JX0FSQlJFX01BTF9NVUxUSVBMSUNBVCJdLCAicmVzIjogWyIkUChWLFYpPVxcZGZyYWMyNVxcY2RvdFxcZGZyYWMxND1cXGRmcmFjezJ9ezIwfT1cXGRmcmFjezF9ezEwfSQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 349 172\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Diagrama d'arbre de probabilitat de 2 nivells, amb les probabilitats donades sobre cada branca.</title><g transform=\"translate(-12.0,-32.0)\"><line x1=\"30.0\" y1=\"118.0\" x2=\"180.0\" y2=\"74.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"180.0\" cy=\"74.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"74.0\" x2=\"330.0\" y2=\"52.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"52.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"74.0\" x2=\"330.0\" y2=\"96.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"96.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"30.0\" y1=\"118.0\" x2=\"180.0\" y2=\"162.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"180.0\" cy=\"162.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"162.0\" x2=\"330.0\" y2=\"140.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"140.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"162.0\" x2=\"330.0\" y2=\"184.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"184.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"30.0\" cy=\"118.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"108.1\" y=\"109.5\" text-anchor=\"middle\" class=\"fig-etq petita\">2/5</text><text x=\"253.4\" y=\"55.1\" text-anchor=\"middle\" class=\"fig-etq petita\">?</text><text x=\"253.4\" y=\"98.8\" text-anchor=\"middle\" class=\"fig-etq petita\">3/4</text><text x=\"101.9\" y=\"153.5\" text-anchor=\"middle\" class=\"fig-etq petita\">3/5</text><text x=\"253.4\" y=\"143.1\" text-anchor=\"middle\" class=\"fig-etq petita\">2/4</text><text x=\"253.4\" y=\"186.8\" text-anchor=\"middle\" class=\"fig-etq petita\">2/4</text><text x=\"180\" y=\"63.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">V</text><text x=\"343\" y=\"55.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">V</text><text x=\"343\" y=\"99.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">B</text><text x=\"180\" y=\"151.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">B</text><text x=\"343\" y=\"143.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">V</text><text x=\"343\" y=\"187.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">B</text></g></svg>"
  },
  {
   "id": "310a",
   "ex": 310,
   "ap": "a",
   "bloc": "probabilitat_composta",
   "tipus": "A",
   "dif": 3,
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
   "dif": 3,
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
   "id": "311",
   "ex": 311,
   "ap": "",
   "bloc": "probabilitat_composta",
   "tipus": "A",
   "dif": 2,
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
   "dif": 2,
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
   "id": "313",
   "ex": 313,
   "ap": "",
   "bloc": "probabilitat_composta",
   "tipus": "A",
   "dif": 3,
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
  },
  {
   "id": "314a",
   "ex": 314,
   "ap": "a",
   "bloc": "probabilitat_condicionada",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "En el mateix dinar de l'exercici 254 (28 homes i 32 dones; 16 homes i 20 dones han menjat carn, i la resta, peix), ara ens fixem només en un grup cada vegada.",
   "enunciat": "D'entre els $28$ HOMES només, quina és la probabilitat que hagi menjat peix? (és a dir, $P(\\text{peix}|\\text{home})$)",
   "opcions": [
    "$P(\\text{peix}|\\text{home})=\\dfrac{12}{28}=\\dfrac{3}{7}$",
    "$P(\\text{peix}|\\text{home})=\\dfrac{12}{60}=\\dfrac{1}{5}$, dividint pel total de persones en lloc del total d'homes",
    "$P(\\text{peix}|\\text{home})=\\dfrac{12}{32}$, dividint pel total de dones en lloc del total d'homes",
    "$P(\\text{peix}|\\text{home})=\\dfrac{20}{28}$, agafant els homes que han menjat carn en lloc de peix"
   ],
   "pistes": [
    "\"D'entre els homes\" vol dir que el denominador és el total d'homes, $28$, no el total del dinar.",
    "Dels $28$ homes, $16$ han menjat carn i la resta, peix: $28-16=12$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiXCJEJ2VudHJlIGVscyBob21lc1wiIGZpeGEgZWwgZ3J1cCBkZSByZWZlcsOobmNpYSBlbiBlbHMgaG9tZXMgKCQyOCQgcGVyc29uZXMpLCBubyBlbiBlbCB0b3RhbCBkZWwgZGluYXIgKCQ2MCQpOiBlbCBkZW5vbWluYWRvciBoYSBkZSBzZXIgJDI4JC4gUXVhbiBlcyBkZW1hbmEgbGEgcHJvYmFiaWxpdGF0IERJTlMgZCd1biBncnVwIGNvbmNyZXQgKG5vIGRlIHRvdGEgbGEgcG9ibGFjacOzKSwgZWwgZGVub21pbmFkb3IgaGEgZGUgc2VyIGxhIG1pZGEgZCdhcXVlbGwgZ3J1cCwgbm8gZWwgdG90YWwgZGUgdG90cyBlbHMgY2Fzb3MuIiwgIkVsIGRlbm9taW5hZG9yIGhhIGRlIHNlciBlbCBub21icmUgZCdIT01FUyAoJDI4JCksIHF1ZSDDqXMgZWwgZ3J1cCBzb2JyZSBlbCBxdWFsIGVzIGRlbWFuYSBsYSBwcm9iYWJpbGl0YXQsIG5vIGVsIGRlIGRvbmVzLiIsICIkMjAkIMOpcyBlbCBub21icmUgZGUgRE9ORVMgcXVlIGhhbiBtZW5qYXQgY2FybjogZGVscyAkMjgkIGhvbWVzLCBlbHMgcXVlIGhhbiBtZW5qYXQgcGVpeCBzw7NuICQyOC0xNj0xMiQuIl0sICJlcnIiOiBbIiIsICJQUk9CQUJJTElUQVRfQ09ORElDSU9OQURBX01BTCIsICJDQVNPU19QT1NTSUJMRVNfTUFMX0NPTVBUQVRTIiwgIkVTREVWRU5JTUVOVF9DT05UUkFSSV9NQUxfQ0FMQ1VMQVQiXSwgInJlcyI6IFsiRGVscyAkMjgkIGhvbWVzLCAkMTIkIGhhbiBtZW5qYXQgcGVpeCAoJDI4LTE2JCk6ICRQKFxcdGV4dHtwZWl4fXxcXHRleHR7aG9tZX0pPVxcZGZyYWN7MTJ9ezI4fT1cXGRmcmFjezN9ezd9JCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 274 156\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Taula de doble entrada: files Homes, Dones, columnes Carn, Peix, amb els totals de cada fila, cada columna i el total general.</title><rect x=\"14.0\" y=\"14.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\"></text><rect x=\"92.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Carn</text><rect x=\"148.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Peix</text><rect x=\"204.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"14.0\" y=\"46.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Homes</text><rect x=\"92.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">16</text><rect x=\"148.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">12</text><rect x=\"204.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">28</text><rect x=\"14.0\" y=\"78.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Dones</text><rect x=\"92.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">20</text><rect x=\"148.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">12</text><rect x=\"204.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">32</text><rect x=\"14.0\" y=\"110.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"92.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">36</text><rect x=\"148.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">24</text><rect x=\"204.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">60</text></svg>"
  },
  {
   "id": "314b",
   "ex": 314,
   "ap": "b",
   "bloc": "probabilitat_condicionada",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "En el mateix dinar de l'exercici 254 (28 homes i 32 dones; 16 homes i 20 dones han menjat carn, i la resta, peix), ara ens fixem només en un grup cada vegada.",
   "enunciat": "D'entre les $24$ persones que han menjat PEIX, quina és la probabilitat que sigui home? (és a dir, $P(\\text{home}|\\text{peix})$)",
   "opcions": [
    "$P(\\text{home}|\\text{peix})=\\dfrac{12}{60}=\\dfrac{1}{5}$, dividint pel total de persones en lloc del total que ha menjat peix",
    "$P(\\text{home}|\\text{peix})=\\dfrac{12}{24}=\\dfrac{1}{2}$",
    "$P(\\text{home}|\\text{peix})=\\dfrac{12}{28}$, fent servir el denominador de l'apartat anterior per error",
    "$P(\\text{home}|\\text{peix})=\\dfrac{24}{60}$, calculant en realitat $P(\\text{peix})$"
   ],
   "pistes": [
    "El total de persones que han menjat peix és $24$ ($12$ homes + $12$ dones): aquest és el denominador.",
    "D'aquestes $24$, $12$ són homes."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJcIkQnZW50cmUgcXVpIGhhIG1lbmphdCBwZWl4XCIgZml4YSBlbCBncnVwIGVuIGxlcyBwZXJzb25lcyBxdWUgaGFuIG1lbmphdCBwZWl4ICgkMjQkKSwgbm8gZW4gZWwgdG90YWwgZGVsIGRpbmFyICgkNjAkKS4gUXVhbiBlcyBkZW1hbmEgbGEgcHJvYmFiaWxpdGF0IERJTlMgZCd1biBncnVwIGNvbmNyZXQgKG5vIGRlIHRvdGEgbGEgcG9ibGFjacOzKSwgZWwgZGVub21pbmFkb3IgaGEgZGUgc2VyIGxhIG1pZGEgZCdhcXVlbGwgZ3J1cCwgbm8gZWwgdG90YWwgZGUgdG90cyBlbHMgY2Fzb3MuIiwgIiIsICIkMjgkIMOpcyBlbCB0b3RhbCBkJ2hvbWVzLCBlbCBkZW5vbWluYWRvciBxdWUgdG9jYSBxdWFuIGxhIGNvbmRpY2nDsyDDqXMgXCJzZXIgaG9tZVwiLiBBcXXDrSBsYSBjb25kaWNpw7Mgw6lzIFwiaGF2ZXIgbWVuamF0IHBlaXhcIjogZWwgZGVub21pbmFkb3IgaGEgZGUgc2VyIGVsIHRvdGFsIGRlIHBlaXgsICQyNCQuIiwgIiRcXGRmcmFjezI0fXs2MH0kIMOpcyBsYSBwcm9iYWJpbGl0YXQgZGUgbWVuamFyIHBlaXggRU4gR0VORVJBTCwgbm8gbGEgZCfDqXNzZXIgaG9tZSBlbnRyZSBxdWkgaGEgbWVuamF0IHBlaXguIl0sICJlcnIiOiBbIlBST0JBQklMSVRBVF9DT05ESUNJT05BREFfTUFMIiwgIiIsICJDT05ESUNJT05BREFfSV9DT05KVU5UQV9DT05GT1NFUyIsICJDT05ESUNJT05BREFfSV9DT05KVU5UQV9DT05GT1NFUyJdLCAicmVzIjogWyJFbiB0b3RhbCBoYW4gbWVuamF0IHBlaXggJDI0JCBwZXJzb25lcywgZGUgbGVzIHF1YWxzICQxMiQgc8OzbiBob21lczogJFAoXFx0ZXh0e2hvbWV9fFxcdGV4dHtwZWl4fSk9XFxkZnJhY3sxMn17MjR9PVxcZGZyYWN7MX17Mn0kIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 274 156\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Taula de doble entrada: files Homes, Dones, columnes Carn, Peix, amb els totals de cada fila, cada columna i el total general.</title><rect x=\"14.0\" y=\"14.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\"></text><rect x=\"92.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Carn</text><rect x=\"148.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Peix</text><rect x=\"204.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"14.0\" y=\"46.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Homes</text><rect x=\"92.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">16</text><rect x=\"148.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">12</text><rect x=\"204.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">28</text><rect x=\"14.0\" y=\"78.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Dones</text><rect x=\"92.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">20</text><rect x=\"148.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">12</text><rect x=\"204.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">32</text><rect x=\"14.0\" y=\"110.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"92.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">36</text><rect x=\"148.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">24</text><rect x=\"204.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">60</text></svg>"
  },
  {
   "id": "314c",
   "ex": 314,
   "ap": "c",
   "bloc": "probabilitat_condicionada",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "En el mateix dinar de l'exercici 254 (28 homes i 32 dones; 16 homes i 20 dones han menjat carn, i la resta, peix), ara ens fixem només en un grup cada vegada.",
   "enunciat": "«En un dinar de $60$ persones, $P(\\text{peix}|\\text{home})$ i $P(\\text{home i peix})$ valen el mateix, perquè totes dues parlen d'homes que mengen peix»",
   "opcions": [
    "Cert: com que les dues fan referència als mateixos $12$ homes que han menjat peix, el resultat ha de ser idèntic",
    "Fals: $P(\\text{peix}|\\text{home})=\\dfrac{3}{7}$ es calcula només sobre els homes ($28$), mentre que $P(\\text{home i peix})=\\dfrac{12}{60}=\\dfrac{1}{5}$ es calcula sobre el total del dinar ($60$); són preguntes diferents i, de fet, donen resultats diferents",
    "Cert: totes dues probabilitats es calculen dividint per $60$, el total del dinar",
    "Fals, perquè en realitat val més $P(\\text{home i peix})$ que $P(\\text{peix}|\\text{home})$"
   ],
   "pistes": [
    "Calcula totes dues probabilitats per separat i compara-les.",
    "Fixa't especialment en el denominador que fa servir cadascuna."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBudW1lcmFkb3IgKCQxMiQpIHPDrSBxdWUgY29pbmNpZGVpeCwgcGVyw7IgZWwgZGVub21pbmFkb3Igbm86ICRQKFxcdGV4dHtwZWl4fXxcXHRleHR7aG9tZX0pJCBkaXZpZGVpeCBwZXIgJDI4JCAobm9tw6lzIGhvbWVzKSBpICRQKFxcdGV4dHtob21lIGkgcGVpeH0pJCBkaXZpZGVpeCBwZXIgJDYwJCAodG90aG9tKS4gRGVub21pbmFkb3JzIGRpZmVyZW50cyBkb25lbiByZXN1bHRhdHMgZGlmZXJlbnRzLiIsICIiLCAiJFAoXFx0ZXh0e3BlaXh9fFxcdGV4dHtob21lfSkkIE5PIGRpdmlkZWl4IHBlbCB0b3RhbCBkZWwgZGluYXI6IGNvbSBxdWUgamEgc2Ugc2FwIHF1ZSDDqXMgaG9tZSwgZWwgZGVub21pbmFkb3IgZXMgcmVzdHJpbmdlaXggYWxzICQyOCQgaG9tZXMsIG5vIGFscyAkNjAkIGNvbWVuc2Fscy4iLCAiw4lzIGFsIHJldsOpczogJFAoXFx0ZXh0e3BlaXh9fFxcdGV4dHtob21lfSk9My83XFxhcHByb3gweyx9NDMkIMOpcyBtw6lzIGdyYW4gcXVlICRQKFxcdGV4dHtob21lIGkgcGVpeH0pPTEvNT0weyx9MiQsIHBlcnF1w6ggZGl2aWRpciBwZXIgdW4gZ3J1cCBtw6lzIHBldGl0ICgkMjgkIGhvbWVzKSBkb25hIHVuIHJlc3VsdGF0IG3DqXMgZ3JhbiBxdWUgZGl2aWRpciBwZWwgdG90YWwgKCQ2MCQgcGVyc29uZXMpLiJdLCAiZXJyIjogWyJDT05ESUNJT05BREFfSV9DT05KVU5UQV9DT05GT1NFUyIsICIiLCAiUFJPQkFCSUxJVEFUX0NPTkRJQ0lPTkFEQV9NQUwiLCAiQ09ORElDSU9OQURBX0lfQ09OSlVOVEFfQ09ORk9TRVMiXSwgInJlcyI6IFsiJFAoXFx0ZXh0e3BlaXh9fFxcdGV4dHtob21lfSk9XFxkZnJhY3sxMn17Mjh9PVxcZGZyYWMzN1xcYXBwcm94MHssfTQzJCAoZGVub21pbmFkb3I6IG5vbcOpcyBob21lcykuICRQKFxcdGV4dHtob21lIGkgcGVpeH0pPVxcZGZyYWN7MTJ9ezYwfT1cXGRmcmFjMTU9MHssfTIkIChkZW5vbWluYWRvcjogdG90aG9tKS4gU8OzbiBkaWZlcmVudHMiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 274 156\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Taula de doble entrada: files Homes, Dones, columnes Carn, Peix, amb els totals de cada fila, cada columna i el total general.</title><rect x=\"14.0\" y=\"14.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\"></text><rect x=\"92.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Carn</text><rect x=\"148.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Peix</text><rect x=\"204.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"14.0\" y=\"46.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Homes</text><rect x=\"92.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">16</text><rect x=\"148.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">12</text><rect x=\"204.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">28</text><rect x=\"14.0\" y=\"78.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Dones</text><rect x=\"92.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">20</text><rect x=\"148.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">12</text><rect x=\"204.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">32</text><rect x=\"14.0\" y=\"110.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"92.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">36</text><rect x=\"148.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">24</text><rect x=\"204.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">60</text></svg>"
  },
  {
   "id": "315a",
   "ex": 315,
   "ap": "a",
   "bloc": "probabilitat_condicionada",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Hi ha dues caixes. La caixa A té 2 boles vermelles i 1 blava; la caixa B té 1 bola vermella i 3 de blaves. Triem una caixa a l'atzar (mateixa probabilitat per a totes dues) i, sense mirar quina és, en traiem una bola.",
   "enunciat": "La caixa A té $2$ boles vermelles i $1$ de blava. Quina és la probabilitat de triar la caixa A i treure'n una bola vermella?",
   "opcions": [
    "$P(A,V)=\\dfrac{2}{3}$, agafant només la probabilitat de la caixa A",
    "$P(A,V)=\\dfrac{1}{2}\\cdot\\dfrac{2}{3}=\\dfrac{1}{3}$",
    "$P(A,V)=\\dfrac{1}{2}+\\dfrac{2}{3}=\\dfrac{7}{6}$",
    "$P(A,V)=\\dfrac{1}{2}\\cdot\\dfrac{1}{4}=\\dfrac{1}{8}$, fent servir la proporció de vermelles de la caixa B per error"
   ],
   "pistes": [
    "Segueix el camí: primer la branca «Caixa A» ($1/2$), després la branca «V» que en penja ($2/3$).",
    "Multiplica-les."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJDYWwgc2VndWlyIGVsIGNhbcOtIHNlbmNlcjogcHJpbWVyIHRyaWFyIGxhIGNhaXhhIEEgKCQxLzIkKSBpIGRlc3Byw6lzIHRyZXVyZSduIHVuYSB2ZXJtZWxsYSAoJDIvMyQpLCBtdWx0aXBsaWNhbnQtbGVzLiIsICIiLCAiTGEgcHJvYmFiaWxpdGF0IGQndW4gY2Ftw60gZGUgbCdhcmJyZSDDqXMgZWwgcHJvZHVjdGUgZGUgbGVzIHNldmVzIGJyYW5xdWVzLCBubyBsYSBzdW1hIChpIGVsIHJlc3VsdGF0LCBhIG3DqXMsIHNlcmlhIG3DqXMgZ3JhbiBxdWUgJDEkLCBjb3NhIGltcG9zc2libGUpLiIsICJMYSBicmFuY2EgwqtWwrsgcXVlIHRvY2Egw6lzIGxhIHF1ZSBwZW5qYSBkZSBsYSBjYWl4YSBBICgkMi8zJCwgcGVycXXDqCBoaSBoYSAkMiQgdmVybWVsbGVzIGRlICQzJCBib2xlcyksIG5vIGxhIGRlIGxhIGNhaXhhIEIgKCQxLzQkKS4iXSwgImVyciI6IFsiQ0FNSV9BUkJSRV9NQUxfTVVMVElQTElDQVQiLCAiIiwgIkNBTUlfQVJCUkVfTUFMX01VTFRJUExJQ0FUIiwgIkNBU09TX0ZBVk9SQUJMRVNfTUFMX0NPTVBUQVRTIl0sICJyZXMiOiBbIiRQKEEsVik9XFxkZnJhY3sxfXsyfVxcY2RvdFxcZGZyYWN7Mn17M309XFxkZnJhY3syfXs2fT1cXGRmcmFjezF9ezN9JCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 349 172\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Diagrama d'arbre de probabilitat de 2 nivells, amb les probabilitats donades sobre cada branca.</title><g transform=\"translate(-12.0,-32.0)\"><line x1=\"30.0\" y1=\"118.0\" x2=\"180.0\" y2=\"74.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"180.0\" cy=\"74.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"74.0\" x2=\"330.0\" y2=\"52.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"52.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"74.0\" x2=\"330.0\" y2=\"96.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"96.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"30.0\" y1=\"118.0\" x2=\"180.0\" y2=\"162.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"180.0\" cy=\"162.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"162.0\" x2=\"330.0\" y2=\"140.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"140.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"162.0\" x2=\"330.0\" y2=\"184.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"184.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"30.0\" cy=\"118.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"108.1\" y=\"109.5\" text-anchor=\"middle\" class=\"fig-etq petita\">1/2</text><text x=\"253.4\" y=\"55.1\" text-anchor=\"middle\" class=\"fig-etq petita\">2/3</text><text x=\"253.4\" y=\"98.8\" text-anchor=\"middle\" class=\"fig-etq petita\">1/3</text><text x=\"101.9\" y=\"153.5\" text-anchor=\"middle\" class=\"fig-etq petita\">1/2</text><text x=\"253.4\" y=\"143.1\" text-anchor=\"middle\" class=\"fig-etq petita\">1/4</text><text x=\"253.4\" y=\"186.8\" text-anchor=\"middle\" class=\"fig-etq petita\">3/4</text><text x=\"180\" y=\"63.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">Caixa A</text><text x=\"343\" y=\"55.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">V</text><text x=\"343\" y=\"99.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">B</text><text x=\"180\" y=\"148.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">Caixa B</text><text x=\"343\" y=\"143.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">V</text><text x=\"343\" y=\"187.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">B</text></g></svg>"
  },
  {
   "id": "315b",
   "ex": 315,
   "ap": "b",
   "bloc": "probabilitat_condicionada",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Hi ha dues caixes. La caixa A té 2 boles vermelles i 1 blava; la caixa B té 1 bola vermella i 3 de blaves. Triem una caixa a l'atzar (mateixa probabilitat per a totes dues) i, sense mirar quina és, en traiem una bola.",
   "enunciat": "Amb $P(A,V)=1/3$ ja calculat, i sabent que la caixa B dona una vermella amb probabilitat $1/4$, quina és la probabilitat, en total, de treure una bola vermella (sigui de la caixa que sigui)?",
   "opcions": [
    "$P(V)=\\dfrac{1}{3}+\\dfrac{1}{8}=\\dfrac{11}{24}$",
    "$P(V)=\\dfrac{1}{3}\\cdot\\dfrac{1}{8}=\\dfrac{1}{24}$, multiplicant els dos camins en lloc de sumar-los",
    "$P(V)=\\dfrac{2}{3}+\\dfrac{1}{4}=\\dfrac{11}{12}$, sumant les dues branques «V» directament, sense multiplicar-les abans per la probabilitat de triar cada caixa",
    "$P(V)=\\dfrac{1}{3}$, oblidant el camí que passa per la caixa B"
   ],
   "pistes": [
    "Hi ha dos camins que acaben en «vermella»: per la caixa A ($1/3$, calculat a l'apartat anterior) i per la caixa B.",
    "Calcula el camí per la caixa B: $\\dfrac{1}{2}\\cdot\\dfrac{1}{4}$.",
    "Suma els dos camins."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGkgaGEgZHVlcyBtYW5lcmVzIERJRkVSRU5UUyBpIGluY29tcGF0aWJsZXMgZCdhY2FiYXIgYW1iIHVuYSBib2xhIHZlcm1lbGxhIChwZXIgbGEgY2FpeGEgQSBvIHBlciBsYSBjYWl4YSBCKTogcXVhbiB1biByZXN1bHRhdCBlcyBwb3Qgb2J0ZW5pciBwZXIgY2FtaW5zIHF1ZSBleGNsb3VlbiBsJ2FsdHJlLCBsZXMgcHJvYmFiaWxpdGF0cyBzZSBzdW1lbi4iLCAiQWJhbnMgZGUgc3VtYXIgZWxzIGRvcyBjYW1pbnMsIGNhbCBjYWxjdWxhciBsYSBwcm9iYWJpbGl0YXQgZGUgQ0FEQSBjYW3DrSBzZW5jZXIgKHRyaWFyIGxhIGNhaXhhIEkgZGVzcHLDqXMgbGEgYm9sYSB2ZXJtZWxsYSksIG5vIG5vbcOpcyBsYSBicmFuY2EgZmluYWwgZGVsIGRhdS4iLCAiVW5hIGJvbGEgdmVybWVsbGEgdGFtYsOpIGVzIHBvdCB0cmV1cmUgdHJpYW50IGxhIGNhaXhhIEIgKGVuY2FyYSBxdWUgaGkgaGFnaSBtZW55cyBwcm9iYWJpbGl0YXQpOiBjYWwgc3VtYXItaGkgdGFtYsOpIGFxdWVzdCBjYW3DrSwgJDEvOCQuIl0sICJlcnIiOiBbIiIsICJVTklPX0lOVEVSU0VDQ0lPX0NPTkZPU0VTIiwgIkNBTUlfQVJCUkVfTUFMX01VTFRJUExJQ0FUIiwgIkNBU09TX0ZBVk9SQUJMRVNfTUFMX0NPTVBUQVRTIl0sICJyZXMiOiBbIkNhbcOtIHBlciBCOiAkUChCLFYpPVxcZGZyYWN7MX17Mn1cXGNkb3RcXGRmcmFjezF9ezR9PVxcZGZyYWN7MX17OH0kLiBTdW1hbnQtaGkgZWwgZGUgQSAoJDEvMyQpOiAkXFxkZnJhY3sxfXszfStcXGRmcmFjezF9ezh9PVxcZGZyYWN7OH17MjR9K1xcZGZyYWN7M317MjR9PVxcZGZyYWN7MTF9ezI0fSQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 349 172\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Diagrama d'arbre de probabilitat de 2 nivells, amb les probabilitats donades sobre cada branca.</title><g transform=\"translate(-12.0,-32.0)\"><line x1=\"30.0\" y1=\"118.0\" x2=\"180.0\" y2=\"74.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"180.0\" cy=\"74.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"74.0\" x2=\"330.0\" y2=\"52.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"52.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"74.0\" x2=\"330.0\" y2=\"96.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"96.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"30.0\" y1=\"118.0\" x2=\"180.0\" y2=\"162.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"180.0\" cy=\"162.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"162.0\" x2=\"330.0\" y2=\"140.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"140.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"162.0\" x2=\"330.0\" y2=\"184.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"184.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"30.0\" cy=\"118.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"108.1\" y=\"109.5\" text-anchor=\"middle\" class=\"fig-etq petita\">1/2</text><text x=\"253.4\" y=\"55.1\" text-anchor=\"middle\" class=\"fig-etq petita\">2/3</text><text x=\"253.4\" y=\"98.8\" text-anchor=\"middle\" class=\"fig-etq petita\">1/3</text><text x=\"101.9\" y=\"153.5\" text-anchor=\"middle\" class=\"fig-etq petita\">1/2</text><text x=\"253.4\" y=\"143.1\" text-anchor=\"middle\" class=\"fig-etq petita\">1/4</text><text x=\"253.4\" y=\"186.8\" text-anchor=\"middle\" class=\"fig-etq petita\">3/4</text><text x=\"180\" y=\"63.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">Caixa A</text><text x=\"343\" y=\"55.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">V</text><text x=\"343\" y=\"99.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">B</text><text x=\"180\" y=\"148.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">Caixa B</text><text x=\"343\" y=\"143.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">V</text><text x=\"343\" y=\"187.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">B</text></g></svg>"
  },
  {
   "id": "315c",
   "ex": 315,
   "ap": "c",
   "bloc": "probabilitat_condicionada",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Hi ha dues caixes. La caixa A té 2 boles vermelles i 1 blava; la caixa B té 1 bola vermella i 3 de blaves. Triem una caixa a l'atzar (mateixa probabilitat per a totes dues) i, sense mirar quina és, en traiem una bola.",
   "enunciat": "Sabent que la bola ha sortit vermella (amb $P(V)=11/24$ en total), quina és la probabilitat que vingués de la caixa A?",
   "opcions": [
    "$P(A|V)=\\dfrac{1}{2}$, com si un cop sabent el color, cada caixa tornés a tenir la mateixa probabilitat",
    "$P(A|V)=P(A,V)=\\dfrac{1}{3}$, confonent la condicionada amb la conjunta",
    "$P(A|V)=\\dfrac{2}{3}$, agafant la probabilitat de vermella dins la caixa A sense combinar-la amb res més",
    "$P(A|V)=\\dfrac{P(A,V)}{P(V)}=\\dfrac{1/3}{11/24}=\\dfrac{8}{11}$"
   ],
   "pistes": [
    "$P(A|V)$ es calcula dividint la probabilitat del camí «A i vermella» entre la probabilitat total de «vermella».",
    "Ja tens totes dues xifres dels apartats anteriors: $P(A,V)=1/3$ i $P(V)=11/24$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJTYWJlciBxdWUgbGEgYm9sYSDDqXMgdmVybWVsbGEgU8ONIHF1ZSBjYW52aWEgbGVzIHByb2JhYmlsaXRhdHM6IGxhIGNhaXhhIEEgdMOpIG3DqXMgdmVybWVsbGVzIHF1ZSBsYSBCLCBhaXjDrSBxdWUgw6lzIG3DqXMgcHJvYmFibGUgcXVlIGxhIGJvbGEgdmluZ3XDqXMgZCdBIHVuIGNvcCBzZSBzYXAgcXVlIMOpcyB2ZXJtZWxsYS4iLCAiJFAoQSxWKT0xLzMkIMOpcyBsYSBwcm9iYWJpbGl0YXQgZGUgXCJjYWl4YSBBIEkgdmVybWVsbGFcIiBzb2JyZSBUT1RTIGVscyBjYXNvcyBwb3NzaWJsZXM7ICRQKEF8VikkIHByZWd1bnRhIG5vbcOpcyBzb2JyZSBlbHMgY2Fzb3Mgb24gamEgaGEgc29ydGl0IHZlcm1lbGxhLCBpIHBlciBhaXjDsiBjYWwgZGl2aWRpciBwZXIgJFAoVikkLCBubyBkZWl4YXItaG8gdGFsIHF1YWwuIiwgIiQyLzMkIMOpcyAkUChWfEEpJCAobGEgcHJvYmFiaWxpdGF0IGRlIHZlcm1lbGxhIFNBQkVOVCBxdWUgw6lzIGxhIGNhaXhhIEEpLCBxdWUgw6lzIHVuYSBwcmVndW50YSBkaWZlcmVudCBkZSAkUChBfFYpJCAobGEgcHJvYmFiaWxpdGF0IHF1ZSBzaWd1aSBsYSBjYWl4YSBBIHNhYmVudCBxdWUgaGEgc29ydGl0IHZlcm1lbGxhKS4iLCAiIl0sICJlcnIiOiBbIkFTSU1FVFJJQV9DT05ESUNJT05BREFfTUFMIiwgIkNPTkRJQ0lPTkFEQV9JX0NPTkpVTlRBX0NPTkZPU0VTIiwgIkNPTkRJQ0lPTkFEQV9JX0NPTkpVTlRBX0NPTkZPU0VTIiwgIiJdLCAicmVzIjogWyIkUChBfFYpPVxcZGZyYWN7UChBLFYpfXtQKFYpfT1cXGRmcmFjezEvM317MTEvMjR9PVxcZGZyYWN7MX17M31cXGNkb3RcXGRmcmFjezI0fXsxMX09XFxkZnJhY3s4fXsxMX0kIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 349 172\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Diagrama d'arbre de probabilitat de 2 nivells, amb les probabilitats donades sobre cada branca.</title><g transform=\"translate(-12.0,-32.0)\"><line x1=\"30.0\" y1=\"118.0\" x2=\"180.0\" y2=\"74.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"180.0\" cy=\"74.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"74.0\" x2=\"330.0\" y2=\"52.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"52.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"74.0\" x2=\"330.0\" y2=\"96.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"96.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"30.0\" y1=\"118.0\" x2=\"180.0\" y2=\"162.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"180.0\" cy=\"162.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"162.0\" x2=\"330.0\" y2=\"140.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"140.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><line x1=\"180.0\" y1=\"162.0\" x2=\"330.0\" y2=\"184.0\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"330.0\" cy=\"184.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><circle cx=\"30.0\" cy=\"118.0\" r=\"4.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1.3\"/><text x=\"108.1\" y=\"109.5\" text-anchor=\"middle\" class=\"fig-etq petita\">1/2</text><text x=\"253.4\" y=\"55.1\" text-anchor=\"middle\" class=\"fig-etq petita\">2/3</text><text x=\"253.4\" y=\"98.8\" text-anchor=\"middle\" class=\"fig-etq petita\">1/3</text><text x=\"101.9\" y=\"153.5\" text-anchor=\"middle\" class=\"fig-etq petita\">1/2</text><text x=\"253.4\" y=\"143.1\" text-anchor=\"middle\" class=\"fig-etq petita\">1/4</text><text x=\"253.4\" y=\"186.8\" text-anchor=\"middle\" class=\"fig-etq petita\">3/4</text><text x=\"180\" y=\"63.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">Caixa A</text><text x=\"343\" y=\"55.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">V</text><text x=\"343\" y=\"99.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">B</text><text x=\"180\" y=\"148.9\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">Caixa B</text><text x=\"343\" y=\"143.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">V</text><text x=\"343\" y=\"187.4\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">B</text></g></svg>"
  },
  {
   "id": "316a",
   "ex": 316,
   "ap": "a",
   "bloc": "probabilitat_condicionada",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "En una revisió mèdica a 50 persones, 20 són fumadores. Tenen tos 14 de les fumadores i 9 de les no fumadores.",
   "enunciat": "D'entre les $50$ persones enquestades, quina és la probabilitat que una triada a l'atzar sigui fumadora I tingui tos?",
   "opcions": [
    "$P(\\text{F i T})=\\dfrac{9}{50}$, agafant les no fumadores amb tos per error",
    "$P(\\text{F i T})=\\dfrac{14}{50}=\\dfrac{7}{25}$",
    "$P(\\text{F i T})=\\dfrac{20}{50}+\\dfrac{23}{50}=\\dfrac{43}{50}$, sumant la probabilitat de fumar amb la de tenir tos",
    "$P(\\text{F i T})=\\dfrac{14}{20}=\\dfrac{7}{10}$, dividint pel total de fumadores en lloc del total de persones"
   ],
   "pistes": [
    "\"Fumadora i tos\" alhora: quantes persones compleixen totes dues coses?",
    "El denominador és el total de persones enquestades, $50$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyIkOSQgc8OzbiBsZXMgcGVyc29uZXMgTk8gZnVtYWRvcmVzIGFtYiB0b3M6IGxlcyBmdW1hZG9yZXMgYW1iIHRvcyBzw7NuICQxNCQuIiwgIiIsICJcIkZ1bWFkb3JhIEkgdG9zXCIgKGFtYiBsYSBJKSDDqXMgdW5hIGludGVyc2VjY2nDsywgbm8gdW5hIHVuacOzOiBubyBlcyBjb3VlbiBzdW1hbnQgbGVzIHByb2JhYmlsaXRhdHMgaW5kaXZpZHVhbHMsIGNhbCBjb21wdGFyIGRpcmVjdGFtZW50IHF1YW50ZXMgcGVyc29uZXMgY29tcGxlaXhlbiB0b3RlcyBkdWVzIGNvbmRpY2lvbnMgYWxob3JhLiIsICJcIlRyaWFkYSBhIGwnYXR6YXJcIiBzZW5zZSBjYXAgY29uZGljacOzIHByw6h2aWEgdm9sIGRpciBxdWUgZWwgZGVub21pbmFkb3Igw6lzIGVsIHRvdGFsIGRlIHBlcnNvbmVzIGVucXVlc3RhZGVzICgkNTAkKSwgbm8gbm9tw6lzIGVsIGRlIGZ1bWFkb3Jlcy4gUXVhbiBlcyBkZW1hbmEgbGEgcHJvYmFiaWxpdGF0IERJTlMgZCd1biBncnVwIGNvbmNyZXQgKG5vIGRlIHRvdGEgbGEgcG9ibGFjacOzKSwgZWwgZGVub21pbmFkb3IgaGEgZGUgc2VyIGxhIG1pZGEgZCdhcXVlbGwgZ3J1cCwgbm8gZWwgdG90YWwgZGUgdG90cyBlbHMgY2Fzb3MuIl0sICJlcnIiOiBbIkNBU09TX0ZBVk9SQUJMRVNfTUFMX0NPTVBUQVRTIiwgIiIsICJVTklPX0lOVEVSU0VDQ0lPX0NPTkZPU0VTIiwgIlBST0JBQklMSVRBVF9DT05ESUNJT05BREFfTUFMIl0sICJyZXMiOiBbIiQxNCQgZGUgbGVzICQ1MCQgcGVyc29uZXMgc8OzbiBmdW1hZG9yZXMgaSB0ZW5lbiB0b3M6ICRQKFxcdGV4dHtGIGkgVH0pPVxcZGZyYWN7MTR9ezUwfT1cXGRmcmFjezd9ezI1fSQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 274 156\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Taula de doble entrada: files Fumador, No fumador, columnes Tos, No tos, amb els totals de cada fila, cada columna i el total general.</title><rect x=\"14.0\" y=\"14.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\"></text><rect x=\"92.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Tos</text><rect x=\"148.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">No tos</text><rect x=\"204.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"14.0\" y=\"46.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Fumador</text><rect x=\"92.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">14</text><rect x=\"148.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">6</text><rect x=\"204.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">20</text><rect x=\"14.0\" y=\"78.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">No fumador</text><rect x=\"92.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">9</text><rect x=\"148.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">21</text><rect x=\"204.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">30</text><rect x=\"14.0\" y=\"110.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"92.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">23</text><rect x=\"148.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">27</text><rect x=\"204.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">50</text></svg>"
  },
  {
   "id": "316b",
   "ex": 316,
   "ap": "b",
   "bloc": "probabilitat_condicionada",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "En una revisió mèdica a 50 persones, 20 són fumadores. Tenen tos 14 de les fumadores i 9 de les no fumadores.",
   "enunciat": "D'entre les $20$ persones FUMADORES, quina és la probabilitat que tinguin tos?",
   "opcions": [
    "$P(\\text{T}|\\text{F})=\\dfrac{14}{23}$, dividint pel total de persones amb tos en lloc del total de fumadores",
    "$P(\\text{T}|\\text{F})=\\dfrac{14}{20}=\\dfrac{7}{10}$",
    "$P(\\text{T}|\\text{F})=\\dfrac{14}{50}=\\dfrac{7}{25}$, dividint pel total de persones en lloc del total de fumadores",
    "$P(\\text{T}|\\text{F})=\\dfrac{23}{50}$, calculant en realitat la probabilitat general de tenir tos"
   ],
   "pistes": [
    "El grup de referència són les $20$ fumadores: aquest és el denominador.",
    "D'aquestes $20$, en tenen tos $14$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyIkMjMkIMOpcyBlbCB0b3RhbCBkZSBwZXJzb25lcyBhbWIgdG9zIChmdW1hZG9yZXMgaSBubyBmdW1hZG9yZXMpOiBlbCBkZW5vbWluYWRvciBxdWUgdG9jYSBhcXXDrSDDqXMgZWwgZGUgZnVtYWRvcmVzLCAkMjAkLCBwZXJxdcOoIGxhIGNvbmRpY2nDsyDDqXMgXCJzZXIgZnVtYWRvcmFcIi4iLCAiIiwgIlwiRCdlbnRyZSBsZXMgZnVtYWRvcmVzXCIgZml4YSBlbCBncnVwIGVuIGxlcyAkMjAkIGZ1bWFkb3Jlcywgbm8gZW4gZWwgdG90YWwgZGUgbGVzICQ1MCQgcGVyc29uZXMgZW5xdWVzdGFkZXMuIFF1YW4gZXMgZGVtYW5hIGxhIHByb2JhYmlsaXRhdCBESU5TIGQndW4gZ3J1cCBjb25jcmV0IChubyBkZSB0b3RhIGxhIHBvYmxhY2nDsyksIGVsIGRlbm9taW5hZG9yIGhhIGRlIHNlciBsYSBtaWRhIGQnYXF1ZWxsIGdydXAsIG5vIGVsIHRvdGFsIGRlIHRvdHMgZWxzIGNhc29zLiIsICIkMjMvNTAkIMOpcyBsYSBwcm9iYWJpbGl0YXQgZGUgdGVuaXIgdG9zIEVOIEdFTkVSQUwgKHNlbnNlIHJlc3RyaW5naXItc2UgYSBsZXMgZnVtYWRvcmVzKTogYXF1w60gZXMgZGVtYW5hIG5vbcOpcyBkJ2VudHJlIGxlcyAkMjAkIGZ1bWFkb3Jlcy4iXSwgImVyciI6IFsiQ09ORElDSU9OQURBX0lfQ09OSlVOVEFfQ09ORk9TRVMiLCAiIiwgIlBST0JBQklMSVRBVF9DT05ESUNJT05BREFfTUFMIiwgIkNPTkRJQ0lPTkFEQV9JX0NPTkpVTlRBX0NPTkZPU0VTIl0sICJyZXMiOiBbIkRlIGxlcyAkMjAkIGZ1bWFkb3JlcywgZW4gdGVuZW4gdG9zICQxNCQ6ICRQKFxcdGV4dHtUfXxcXHRleHR7Rn0pPVxcZGZyYWN7MTR9ezIwfT1cXGRmcmFjezd9ezEwfSQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 274 156\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Taula de doble entrada: files Fumador, No fumador, columnes Tos, No tos, amb els totals de cada fila, cada columna i el total general.</title><rect x=\"14.0\" y=\"14.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\"></text><rect x=\"92.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Tos</text><rect x=\"148.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">No tos</text><rect x=\"204.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"14.0\" y=\"46.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Fumador</text><rect x=\"92.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">14</text><rect x=\"148.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">6</text><rect x=\"204.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">20</text><rect x=\"14.0\" y=\"78.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">No fumador</text><rect x=\"92.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">9</text><rect x=\"148.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">21</text><rect x=\"204.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">30</text><rect x=\"14.0\" y=\"110.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"92.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">23</text><rect x=\"148.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">27</text><rect x=\"204.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">50</text></svg>"
  },
  {
   "id": "317",
   "ex": 317,
   "ap": "",
   "bloc": "probabilitat_condicionada",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "En una revisió mèdica a 50 persones, 20 són fumadores. Tenen tos 14 de les fumadores i 9 de les no fumadores.",
   "enunciat": "D'entre les $23$ persones que TENEN TOS, quina és la probabilitat que siguin fumadores? Compara el resultat amb el de l'apartat anterior.",
   "opcions": [
    "$P(\\text{F}|\\text{T})=\\dfrac{14}{50}$, dividint pel total de persones en lloc del total amb tos",
    "$P(\\text{F}|\\text{T})=\\dfrac{14}{23}$, diferent de $P(\\text{T}|\\text{F})=\\dfrac{7}{10}$ de l'exercici anterior",
    "$P(\\text{F}|\\text{T})=\\dfrac{7}{10}$, el mateix resultat que $P(\\text{T}|\\text{F})$",
    "$P(\\text{F}|\\text{T})=\\dfrac{9}{23}$, agafant les persones amb tos que NO fumen"
   ],
   "pistes": [
    "El total de persones amb tos és $14+9=23$: aquest és ara el denominador.",
    "D'aquestes $23$, quantes fumen?",
    "Compara aquest resultat amb $P(\\text{T}|\\text{F})=7/10$ de l'apartat anterior: són el mateix?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJcIkQnZW50cmUgcXVpIHTDqSB0b3NcIiBmaXhhIGVsIGdydXAgZW4gbGVzICQyMyQgcGVyc29uZXMgYW1iIHRvcywgbm8gZW4gZWwgdG90YWwgZGUgJDUwJC4iLCAiIiwgIiRQKFxcdGV4dHtGfXxcXHRleHR7VH0pJCBpICRQKFxcdGV4dHtUfXxcXHRleHR7Rn0pJCBlcyBjYWxjdWxlbiBzb2JyZSBkZW5vbWluYWRvcnMgZGlmZXJlbnRzIChwZXJzb25lcyBhbWIgdG9zIGVuIHVuIGNhcywgZnVtYWRvcmVzIGVuIGwnYWx0cmUpOiBubyBoaSBoYSBjYXAgbW90aXUgcGVycXXDqCBjb2luY2lkZWl4aW4uICRQKEJ8QSkkIGkgJFAoQXxCKSQgZXMgY2FsY3VsZW4gc29icmUgZGVub21pbmFkb3JzIGRpZmVyZW50cyAoJEEkIGVuIHVuIGNhcywgJEIkIGVuIGwnYWx0cmUpIGkgZW4gZ2VuZXJhbCBubyB2YWxlbiBlbCBtYXRlaXguIFF1ZSB1biBkZWxzIGRvcyBzaWd1aSB1bmEgcHJvYmFiaWxpdGF0IGFsdGEgbm8gdm9sIGRpciBxdWUgbCdpbnZlcnMgdGFtYsOpIGhvIHNpZ3VpLiIsICIkOSQgc8OzbiBsZXMgcGVyc29uZXMgYW1iIHRvcyBxdWUgTk8gZnVtZW46IGxlcyBxdWUgZnVtZW4gSSB0ZW5lbiB0b3Mgc8OzbiAkMTQkLCBubyAkOSQuIl0sICJlcnIiOiBbIlBST0JBQklMSVRBVF9DT05ESUNJT05BREFfTUFMIiwgIiIsICJBU0lNRVRSSUFfQ09ORElDSU9OQURBX01BTCIsICJFU0RFVkVOSU1FTlRfQ09OVFJBUklfTUFMX0NBTENVTEFUIl0sICJyZXMiOiBbIlRlbmVuIHRvcyAkMTQrOT0yMyQgcGVyc29uZXMsIGRlIGxlcyBxdWFscyAkMTQkIGZ1bWVuOiAkUChcXHRleHR7Rn18XFx0ZXh0e1R9KT1cXGRmcmFjezE0fXsyM31cXGFwcHJveDB7LH02MSQsIHF1ZSBubyBjb2luY2lkZWl4IGFtYiAkUChcXHRleHR7VH18XFx0ZXh0e0Z9KT1cXGRmcmFjezd9ezEwfT0weyx9NyQgZGUgbCdhcGFydGF0IGFudGVyaW9yOiBjYWRhc2N1bmEgZXMgY2FsY3VsYSBzb2JyZSB1biBncnVwIGRlIHJlZmVyw6huY2lhIGRpZmVyZW50Il19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 274 156\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Taula de doble entrada: files Fumador, No fumador, columnes Tos, No tos, amb els totals de cada fila, cada columna i el total general.</title><rect x=\"14.0\" y=\"14.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\"></text><rect x=\"92.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Tos</text><rect x=\"148.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">No tos</text><rect x=\"204.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"14.0\" y=\"46.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Fumador</text><rect x=\"92.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">14</text><rect x=\"148.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">6</text><rect x=\"204.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">20</text><rect x=\"14.0\" y=\"78.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">No fumador</text><rect x=\"92.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">9</text><rect x=\"148.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">21</text><rect x=\"204.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">30</text><rect x=\"14.0\" y=\"110.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"92.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">23</text><rect x=\"148.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">27</text><rect x=\"204.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">50</text></svg>"
  },
  {
   "id": "318",
   "ex": 318,
   "ap": "",
   "bloc": "probabilitat_condicionada",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Llancem dos daus. Sigui $A$ l'esdeveniment «el primer dau surt parell» i $B$ l'esdeveniment «la suma dels dos daus és $8$».",
   "enunciat": "Sabent que el primer dau ha sortit parell, quina és la probabilitat que la suma sigui $8$? (és a dir, $P(B|A)$)",
   "opcions": [
    "$P(B|A)=\\dfrac{1}{12}$, confonent-ho amb $P(A\\text{ i }B)$",
    "$P(B|A)=\\dfrac{2}{18}=\\dfrac{1}{9}$, oblidant-ne una de les tres parelles que sumen $8$",
    "$P(B|A)=\\dfrac{5}{36}$, calculant en realitat $P(B)$ sense fer servir la condició del primer dau",
    "$P(B|A)=\\dfrac{3}{18}=\\dfrac{1}{6}$"
   ],
   "pistes": [
    "Un cop sabem que el primer dau és parell, només queden $18$ resultats possibles (dels $36$ inicials).",
    "D'aquests $18$, quants tenen suma $8$? (primer dau $2$, $4$ o $6$, i el segon el que calgui per arribar a $8$)"
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyIkMS8xMiQgw6lzICRQKEFcXHRleHR7IGkgfUIpJCwgbGEgcHJvYmFiaWxpdGF0IHF1ZSBwYXNzaW4gdG90ZXMgZHVlcyBjb3NlcyBzb2JyZSBlbCB0b3RhbCBkZSAkMzYkIHJlc3VsdGF0cyBwb3NzaWJsZXMuICRQKEJ8QSkkIGphIHBhcnRlaXggZGVsIGZldCBxdWUgJEEkIHMnaGEgY29tcGxlcnQsIGkgZWwgZGVub21pbmFkb3IgaGEgZGUgc2VyIGVscyBjYXNvcyBhbWIgcHJpbWVyIGRhdSBwYXJlbGwgKCQxOCQpLCBubyBlbHMgJDM2JCBpbmljaWFscy4iLCAiRWwgZGVub21pbmFkb3IgKCQxOCQsIGVscyBjYXNvcyBhbWIgcHJpbWVyIGRhdSBwYXJlbGwpIMOpcyBjb3JyZWN0ZSwgcGVyw7IgYWwgbnVtZXJhZG9yIGZhbHRhIGNvbXB0YXIgJCgyLDYpJDogYW1iIHByaW1lciBkYXUgcGFyZWxsIGhpIGhhIHRyZXMgcGFyZWxsZXMgcXVlIHN1bWVuICQ4JCwgbm8gZHVlcyDigJQgJCgyLDYpJCwgJCg0LDQpJCBpICQoNiwyKSQuIiwgIiQ1LzM2JCDDqXMgbGEgcHJvYmFiaWxpdGF0IHF1ZSBsYSBzdW1hIHNpZ3VpICQ4JCBTRU5TRSBjYXAgY29uZGljacOzIHByw6h2aWEgKGhpIGhhICQ1JCBwYXJlbGxlcyBkZSAkMzYkIHF1ZSBzdW1lbiAkOCQpOiBhcXXDrSBqYSBzZSBzYXAgcXVlIGVsIHByaW1lciBkYXUgw6lzIHBhcmVsbCwgYWl4w60gcXVlIGVsIGRlbm9taW5hZG9yIHMnaGEgZGUgcmVzdHJpbmdpciBhIGFxdWVzdHMgY2Fzb3MuIFF1YW4gZXMgZGVtYW5hIGxhIHByb2JhYmlsaXRhdCBESU5TIGQndW4gZ3J1cCBjb25jcmV0IChubyBkZSB0b3RhIGxhIHBvYmxhY2nDsyksIGVsIGRlbm9taW5hZG9yIGhhIGRlIHNlciBsYSBtaWRhIGQnYXF1ZWxsIGdydXAsIG5vIGVsIHRvdGFsIGRlIHRvdHMgZWxzIGNhc29zLiIsICIiXSwgImVyciI6IFsiQ09ORElDSU9OQURBX0lfQ09OSlVOVEFfQ09ORk9TRVMiLCAiQ0FTT1NfUE9TU0lCTEVTX01BTF9DT01QVEFUUyIsICJQUk9CQUJJTElUQVRfQ09ORElDSU9OQURBX01BTCIsICIiXSwgInJlcyI6IFsiQW1iIGVsIHByaW1lciBkYXUgcGFyZWxsIGhpIGhhICQxOCQgcmVzdWx0YXRzIHBvc3NpYmxlcy4gRCdhcXVlc3RzLCBzdW1lbiAkOCQgbGVzIHBhcmVsbGVzICQoMiw2KSQsICQoNCw0KSQgaSAkKDYsMikkOiAkMyQgY2Fzb3MuICRQKEJ8QSk9XFxkZnJhY3szfXsxOH09XFxkZnJhYzE2JCJdfQ=="
  },
  {
   "id": "319",
   "ex": 319,
   "ap": "",
   "bloc": "probabilitat_condicionada",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "D'una població de 1000 persones, 10 tenen una malaltia poc freqüent. Hi ha un test per detectar-la: si la persona és malalta, el test dona positiu 9 de cada 10 vegades; si la persona és sana, el test dona positiu (fals positiu) 1 de cada 10 vegades.",
   "enunciat": "Segons l'enunciat, si la persona és malalta el test dona positiu $9$ de cada $10$ vegades. Quina és la probabilitat que el test doni positiu SABENT que la persona és malalta? (és a dir, $P(\\text{positiu}|\\text{malalt})$)",
   "opcions": [
    "$P(\\text{positiu}|\\text{malalt})=\\dfrac{9}{10}$",
    "$P(\\text{positiu}|\\text{malalt})=\\dfrac{9}{108}$, dividint pel total de positius en lloc del total de malalts",
    "$P(\\text{positiu}|\\text{malalt})=\\dfrac{1}{10}$, agafant la probabilitat de fals positiu per error",
    "$P(\\text{positiu}|\\text{malalt})=\\dfrac{9}{1000}$, dividint pel total de la població en lloc del total de malalts"
   ],
   "pistes": [
    "Aquesta dada la dona directament l'enunciat: la probabilitat de positiu entre els malalts."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgZGVub21pbmFkb3IgcXVlIHRvY2EgYXF1w60gw6lzIGVsIGRlIE1BTEFMVFMgKCQxMCQpLCBwZXJxdcOoIGxhIGNvbmRpY2nDsyBkZSBsYSBwcmVndW50YSDDqXMgXCJzZXIgbWFsYWx0XCI7IGVsIHRvdGFsIGRlIHBvc2l0aXVzICgkMTA4JCkgw6lzIGVsIGRlbm9taW5hZG9yIGQndW5hIHByZWd1bnRhIGRpZmVyZW50LiIsICIkMS8xMCQgw6lzIGxhIHByb2JhYmlsaXRhdCBkZSBwb3NpdGl1IEVOVFJFIEVMUyBTQU5TIChlbCBmYWxzIHBvc2l0aXUpOiBlbnRyZSBlbHMgbWFsYWx0cywgbGEgcHJvYmFiaWxpdGF0IGRlIHBvc2l0aXUgw6lzICQ5LzEwJCwgbCdhbHRyYSBkYWRhIGRlIGwnZW51bmNpYXQuIiwgIlwiU2FiZW50IHF1ZSBsYSBwZXJzb25hIMOpcyBtYWxhbHRhXCIgZml4YSBlbCBncnVwIGVuIGxlcyAkMTAkIHBlcnNvbmVzIG1hbGFsdGVzLCBubyBlbiB0b3RhIGxhIHBvYmxhY2nDsyBkZSAkMTAwMCQ6IGVsIGRlbm9taW5hZG9yIGhhIGRlIHNlciAkMTAkLCBubyAkMTAwMCQuIl0sICJlcnIiOiBbIiIsICJDT05ESUNJT05BREFfSV9DT05KVU5UQV9DT05GT1NFUyIsICJBU0lNRVRSSUFfQ09ORElDSU9OQURBX01BTCIsICJQUk9CQUJJTElUQVRfQ09ORElDSU9OQURBX01BTCJdLCAicmVzIjogWyJMJ2VudW5jaWF0IGhvIGRpdSBkaXJlY3RhbWVudDogc2kgbGEgcGVyc29uYSDDqXMgbWFsYWx0YSwgZWwgdGVzdCBkb25hIHBvc2l0aXUgJDkkIGRlIGNhZGEgJDEwJCB2ZWdhZGVzLCAkUChcXHRleHR7cG9zaXRpdX18XFx0ZXh0e21hbGFsdH0pPVxcZGZyYWN7OX17MTB9JCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 274 156\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Taula de doble entrada: files Malalt, Sa, columnes Positiu, Negatiu, amb els totals de cada fila, cada columna i el total general.</title><rect x=\"14.0\" y=\"14.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\"></text><rect x=\"92.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Positiu</text><rect x=\"148.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Negatiu</text><rect x=\"204.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"14.0\" y=\"46.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Malalt</text><rect x=\"92.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">9</text><rect x=\"148.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">1</text><rect x=\"204.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">10</text><rect x=\"14.0\" y=\"78.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Sa</text><rect x=\"92.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">99</text><rect x=\"148.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">891</text><rect x=\"204.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">990</text><rect x=\"14.0\" y=\"110.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"92.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">108</text><rect x=\"148.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">892</text><rect x=\"204.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">1000</text></svg>"
  },
  {
   "id": "320",
   "ex": 320,
   "ap": "",
   "bloc": "probabilitat_condicionada",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "D'una població de 1000 persones, 10 tenen una malaltia poc freqüent. Hi ha un test per detectar-la: si la persona és malalta, el test dona positiu 9 de cada 10 vegades; si la persona és sana, el test dona positiu (fals positiu) 1 de cada 10 vegades.",
   "enunciat": "Recorda que el test dona positiu $9$ de cada $10$ vegades quan la persona és malalta, i $1$ de cada $10$ quan és sana (fals positiu). Ara al revés: si el test ha donat POSITIU, quina és la probabilitat que la persona realment estigui malalta? Compara-ho amb el resultat de l'exercici anterior.",
   "opcions": [
    "$P(\\text{malalt}|\\text{positiu})=\\dfrac{9}{108}=\\dfrac{1}{12}\\approx0{,}083$, molt més petita que $P(\\text{positiu}|\\text{malalt})=\\dfrac{9}{10}=0{,}9$ de l'exercici anterior",
    "$P(\\text{malalt}|\\text{positiu})=\\dfrac{9}{99}=\\dfrac{1}{11}$, comparant els malalts positius només amb els sans positius",
    "$P(\\text{malalt}|\\text{positiu})=\\dfrac{9}{10}$, el mateix resultat que $P(\\text{positiu}|\\text{malalt})$",
    "$P(\\text{malalt}|\\text{positiu})=\\dfrac{9}{1000}$, dividint pel total de la població en lloc del total de positius"
   ],
   "pistes": [
    "Primer, quantes persones en total donen positiu? (malalts positius més sans positius, és a dir, falsos positius)",
    "$9$ malalts donen positiu; dels $990$ sans, en donen positiu $990\\cdot\\dfrac{1}{10}=99$ (falsos positius).",
    "D'entre tots els positius, quina proporció són realment malalts?"
   ],
   "nota": "Aquest és l'exemple clàssic que mostra per què $P(B|A)$ i $P(A|B)$ poden ser molt diferents: un test molt fiable pot donar, tot i així, més falsos positius que positius certs quan la condició que es busca és poc freqüent.",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgZGVub21pbmFkb3IgaGEgZGUgc2VyIGVsIHRvdGFsIGRlIFBFUlNPTkVTIGFtYiBwb3NpdGl1ICgkOTkkIHNhbnMgcG9zaXRpdXMgTcOJUyBlbHMgJDkkIG1hbGFsdHMgcG9zaXRpdXMsICQ5OSs5PTEwOCQpLCBubyBub23DqXMgZWxzIHNhbnMgcG9zaXRpdXMuIiwgIkVuY2FyYSBxdWUgZWwgdGVzdCBzaWd1aSBtb2x0IGZpYWJsZSAoXCJwb3NpdGl1IHNhYmVudCBxdWUgw6lzIG1hbGFsdFwiIHZhbCAkOS8xMCQpLCBhaXjDsiBubyB2b2wgZGlyIHF1ZSBcIm1hbGFsdCBzYWJlbnQgcXVlIMOpcyBwb3NpdGl1XCIgdmFsZ3VpIGVsIG1hdGVpeDogY29tIHF1ZSBsYSBtYWxhbHRpYSDDqXMgcG9jIGZyZXHDvGVudCwgbGEgbWFqb3JpYSBkZSBwb3NpdGl1cyBzw7NuIGZhbHNvcyBwb3NpdGl1cyBkZSBnZW50IHNhbmEuICRQKEJ8QSkkIGkgJFAoQXxCKSQgZXMgY2FsY3VsZW4gc29icmUgZGVub21pbmFkb3JzIGRpZmVyZW50cyAoJEEkIGVuIHVuIGNhcywgJEIkIGVuIGwnYWx0cmUpIGkgZW4gZ2VuZXJhbCBubyB2YWxlbiBlbCBtYXRlaXguIFF1ZSB1biBkZWxzIGRvcyBzaWd1aSB1bmEgcHJvYmFiaWxpdGF0IGFsdGEgbm8gdm9sIGRpciBxdWUgbCdpbnZlcnMgdGFtYsOpIGhvIHNpZ3VpLiIsICJcIlNhYmVudCBxdWUgZWwgdGVzdCBoYSBkb25hdCBwb3NpdGl1XCIgZml4YSBlbCBncnVwIGVuIGxlcyBwZXJzb25lcyBhbWIgcG9zaXRpdSAoJDkrOTk9MTA4JCksIG5vIGVuIHRvdGEgbGEgcG9ibGFjacOzICgkMTAwMCQpLiJdLCAiZXJyIjogWyIiLCAiQ0FTT1NfUE9TU0lCTEVTX01BTF9DT01QVEFUUyIsICJBU0lNRVRSSUFfQ09ORElDSU9OQURBX01BTCIsICJQUk9CQUJJTElUQVRfQ09ORElDSU9OQURBX01BTCJdLCAicmVzIjogWyJEb25lbiBwb3NpdGl1ICQ5JCBtYWxhbHRzIGkgJDk5MFxcY2RvdFxcZGZyYWN7MX17MTB9PTk5JCBzYW5zIChmYWxzb3MgcG9zaXRpdXMpOiBlbiB0b3RhbCwgJDkrOTk9MTA4JCBwb3NpdGl1cy4gRCdhcXVlc3RzLCBub23DqXMgJDkkIHPDs24gbWFsYWx0cyBkZSB2ZXJpdGF0OiAkUChcXHRleHR7bWFsYWx0fXxcXHRleHR7cG9zaXRpdX0pPVxcZGZyYWN7OX17MTA4fT1cXGRmcmFjezF9ezEyfVxcYXBwcm94MHssfTA4MyQuIMOJcyBtb2x0IG3DqXMgcGV0aXRhIHF1ZSAkUChcXHRleHR7cG9zaXRpdX18XFx0ZXh0e21hbGFsdH0pPTB7LH05JDogZW5jYXJhIHF1ZSBlbCB0ZXN0IHNpZ3VpIGZpYWJsZSBhbWIgZWxzIG1hbGFsdHMsIGNvbSBxdWUgaGkgaGEgcG9xdcOtc3NpbXMgbWFsYWx0cyBkZSB2ZXJpdGF0ICgkMTAkIGRlICQxMDAwJCksIGxhIG1ham9yaWEgZGUgcG9zaXRpdXMgYWNhYmVuIHNlbnQgZmFsc29zIHBvc2l0aXVzIGRlIGdlbnQgc2FuYSJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 274 156\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Taula de doble entrada: files Malalt, Sa, columnes Positiu, Negatiu, amb els totals de cada fila, cada columna i el total general.</title><rect x=\"14.0\" y=\"14.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\"></text><rect x=\"92.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Positiu</text><rect x=\"148.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Negatiu</text><rect x=\"204.0\" y=\"14.0\" width=\"56.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"34.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"14.0\" y=\"46.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Malalt</text><rect x=\"92.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">9</text><rect x=\"148.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">1</text><rect x=\"204.0\" y=\"46.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"66.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">10</text><rect x=\"14.0\" y=\"78.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Sa</text><rect x=\"92.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">99</text><rect x=\"148.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">891</text><rect x=\"204.0\" y=\"78.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"98.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">990</text><rect x=\"14.0\" y=\"110.0\" width=\"78.0\" height=\"32.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"53.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom\">Total</text><rect x=\"92.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"120.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">108</text><rect x=\"148.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"176.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">892</text><rect x=\"204.0\" y=\"110.0\" width=\"56.0\" height=\"32.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"232.0\" y=\"130.0\" text-anchor=\"middle\" class=\"fig-etq fig-etq-nom petita\">1000</text></svg>"
  }
 ]
};
