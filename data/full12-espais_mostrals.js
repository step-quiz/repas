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
  "CARTES_REPETIDES_CONFOSES": "Revisa quantes cartes (o elements) diferents compleixen exactament la condició demanada: un esdeveniment és impossible només quan CAP resultat de l'espai mostral el compleix, no quan sembla poc habitual.",
  "CASOS_FAVORABLES_MAL_COMPTATS": "Revisa un per un quins resultats de l'espai mostral compleixen la condició de l'esdeveniment: és fàcil oblidar un límit inclòs (\"igual o més gran que\") o comptar-ne un de més.",
  "CASOS_POSSIBLES_MAL_COMPTATS": "Revisa quants resultats TOTALS té l'experiment (els casos possibles): ha de ser el denominador de la probabilitat, no un altre nombre de l'enunciat.",
  "ELEMENTAL_NO_ELEMENTAL_CONFOSOS": "Un esdeveniment elemental és un ÚNIC resultat de l'espai mostral; un esdeveniment NO elemental n'agrupa diversos.",
  "ESPAI_MOSTRAL_MAL_COMPTAT": "L'espai mostral és el conjunt de resultats DIFERENTS i DISTINGIBLES d'un experiment aleatori: revisa que no en falti cap ni que n'hi hagi cap de sobrant o repetit.",
  "ORDRE_NO_CONSIDERAT": "Quan els dos elements combinats es poden distingir (per exemple, per color), l'ordre importa: el parell $(a,b)$ és un resultat diferent del $(b,a)$.",
  "PARELLS_VALORS_CONFOSOS": "No confonguis el nombre de PARELLS de resultats (per exemple, dels dos daus) amb el nombre de VALORS diferents que en resulten (com la seva suma o el seu producte): diversos parells poden donar el mateix valor final.",
  "PRINCIPI_MULTIPLICATIU_MAL_APLICAT": "Quan es combinen diverses eleccions independents, el nombre total de resultats es MULTIPLICA (no se suma): si la primera elecció té $m$ opcions i la segona en té $n$, en total hi ha $m\\cdot n$ combinacions.",
  "VEREDICTE_INVERTIT": "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del correcte: torna a comprovar la condició amb els valors concrets de l'enunciat."
 },
 "items": [
  {
   "id": "374a",
   "ex": 374,
   "ap": "a",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Escriu l'espai mostral d'aquest experiment aleatori: el conjunt de TOTS els resultats possibles.",
   "enunciat": "Llancem un dau de sis cares i mirem el número de dalt.",
   "opcions": [
    "$E=\\{\\text{parell},\\text{senar}\\}$",
    "$E=\\{1,2,3,4,5,6\\}$",
    "$E=\\{0,1,2,3,4,5,6\\}$",
    "$E=\\{6\\}$"
   ],
   "pistes": [
    "Quins números poden sortir?",
    "Escriu-los tots, sense repetir-ne cap."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyLCq1BhcmVsbMK7IGkgwqtzZW5hcsK7IGFncnVwZW4gZGl2ZXJzb3MgcmVzdWx0YXRzIGNhZGFzY3VuLiBMJ2VzcGFpIG1vc3RyYWwgcmVjdWxsIGVscyByZXN1bHRhdHMgdW4gcGVyIHVuOiAkMSQsICQyJCwgJDMkLi4uIiwgIiIsICJVbiBkYXUgbm8gdMOpIGNhcCBjYXJhIGFtYiBlbCAkMCQuIiwgIkhhcyBlc2NyaXQgUVVBTlRTIHJlc3VsdGF0cyBoaSBoYSwgbyBub23DqXMgdW4uIEwnZXNwYWkgbW9zdHJhbCDDqXMgbGEgbGxpc3RhIGRlIFRPVFMgZWxzIHJlc3VsdGF0cy4iXSwgImVyciI6IFsiRUxFTUVOVEFMX05PX0VMRU1FTlRBTF9DT05GT1NPUyIsICIiLCAiRVNQQUlfTU9TVFJBTF9NQUxfQ09NUFRBVCIsICJFU1BBSV9NT1NUUkFMX01BTF9DT01QVEFUIl0sICJyZXMiOiBbIiRFPVxcezEsMiwzLDQsNSw2XFx9JDogc2lzIHJlc3VsdGF0cy4iXX0="
  },
  {
   "id": "374b",
   "ex": 374,
   "ap": "b",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Escriu l'espai mostral d'aquest experiment aleatori: el conjunt de TOTS els resultats possibles.",
   "enunciat": "Llancem una moneda i mirem quina cara queda a dalt.",
   "opcions": [
    "$E=\\{\\text{cara},\\text{creu},\\text{cara i creu}\\}$",
    "$E=\\{\\text{cara}\\}$",
    "$E=\\{\\text{cara},\\text{creu}\\}$",
    "$E=\\{2\\}$"
   ],
   "pistes": [
    "Què pot quedar a dalt?",
    "Escriu-ho tot, sense repetir res."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbiB1bmEgc29sYSB0aXJhZGEgbm8gcG9kZW4gcXVlZGFyIGEgZGFsdCB0b3RlcyBkdWVzIGNhcmVzIGFsaG9yYS4iLCAiTm9tw6lzIGhhcyBwb3NhdCB1biByZXN1bHRhdC4gTCdlc3BhaSBtb3N0cmFsIGVscyByZWN1bGwgVE9UUzogdGFtYsOpIHBvdCBzb3J0aXIgY3JldS4iLCAiIiwgIiQyJCDDqXMgUVVBTlRTIHJlc3VsdGF0cyBoaSBoYS4gTCdlc3BhaSBtb3N0cmFsIMOpcyBsYSBsbGlzdGEgZGVscyByZXN1bHRhdHMsIG5vIGVsIHNldSBub21icmUuIl0sICJlcnIiOiBbIkVTUEFJX01PU1RSQUxfTUFMX0NPTVBUQVQiLCAiRVNQQUlfTU9TVFJBTF9NQUxfQ09NUFRBVCIsICIiLCAiRVNQQUlfTU9TVFJBTF9NQUxfQ09NUFRBVCJdLCAicmVzIjogWyIkRT1cXHtcXHRleHR7Y2FyYX0sXFx0ZXh0e2NyZXV9XFx9JDogZG9zIHJlc3VsdGF0cy4iXX0="
  },
  {
   "id": "236a",
   "ex": 236,
   "ap": "a",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Escriu l'espai mostral dels experiments aleatoris següents.",
   "enunciat": "Treure una carta de la baralla espanyola.",
   "opcions": [
    "L'espai mostral té $52$ resultats, com en una baralla francesa",
    "L'espai mostral té $10$ resultats, les cartes d'un sol coll",
    "L'espai mostral té $4$ resultats (un per cada coll: ors, copes, espases i bastos)",
    "L'espai mostral té $40$ resultats (una carta per a cada combinació de coll i valor)"
   ],
   "pistes": [
    "Una baralla espanyola té $4$ colls (ors, copes, espases, bastos), cadascun amb $10$ cartes.",
    "L'espai mostral és el conjunt de totes les cartes possibles, no només els colls."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyIkNTIkIHPDs24gbGVzIGNhcnRlcyBkZSBsYSBiYXJhbGxhIGZyYW5jZXNhIChsYSBkZWwgcMOycXVlcikuIExhIGJhcmFsbGEgZXNwYW55b2xhIGVuIHTDqSAkNDAkOiBxdWF0cmUgY29sbHMgZGUgJDEwJCBjYXJ0ZXMgY2FkYXNjdW4uIiwgIiQxMCQgY29tcHRhIGVscyB2YWxvcnMgcG9zc2libGVzIGQnVU4gc29sIGNvbGwsIHBlcsOyIGwnZXNwYWkgbW9zdHJhbCBkZSBcInRyZXVyZSB1bmEgY2FydGFcIiBoYSBkJ2luY2xvdXJlIGxlcyBjYXJ0ZXMgZGUgVE9UUyBlbHMgY29sbHMsIG5vIG5vbcOpcyBkJ3VuLiIsICIkNCQgY29tcHRhIG5vbcOpcyBlbHMgY29sbHMsIG5vIGxlcyBjYXJ0ZXMgaW5kaXZpZHVhbHM6IGNhZGEgY29sbCB0w6kgJDEwJCBjYXJ0ZXMgZGlmZXJlbnRzIChkZSBsJyQxJCBhbCAkNyQgaSB0cmVzIGZpZ3VyZXM6IHNvdGEsIGNhdmFsbCBpIHJlaSksIGFpeMOtIHF1ZSBsJ2VzcGFpIG1vc3RyYWwgaW5jbG91IHRvdGVzIGxlcyBjYXJ0ZXMgY29uY3JldGVzLCBubyBub23DqXMgZWwgY29sbC4iLCAiIl0sICJlcnIiOiBbIkVTUEFJX01PU1RSQUxfTUFMX0NPTVBUQVQiLCAiRVNQQUlfTU9TVFJBTF9NQUxfQ09NUFRBVCIsICJFU1BBSV9NT1NUUkFMX01BTF9DT01QVEFUIiwgIiJdLCAicmVzIjogWyJMYSBiYXJhbGxhIGVzcGFueW9sYSB0w6kgJDQkIGNvbGxzIGRlICQxMCQgY2FydGVzIGNhZGFzY3VuOiAkNFxcY2RvdDEwPTQwJCByZXN1bHRhdHMgcG9zc2libGVzIl19"
  },
  {
   "id": "236b",
   "ex": 236,
   "ap": "b",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
   "encapcalament": "Escriu l'espai mostral dels experiments aleatoris següents.",
   "enunciat": "Considerar les espases de la baralla espanyola i treure una carta d'aquest grup.",
   "opcions": [
    "L'espai mostral té $4$ resultats, un per cada coll",
    "L'espai mostral té $40$ resultats, com tota la baralla",
    "L'espai mostral té $7$ resultats, de l'$1$ al $7$, sense comptar les figures",
    "L'espai mostral té $10$ resultats (les $10$ cartes del coll d'espases)"
   ],
   "pistes": [
    "Cada coll d'una baralla espanyola té el mateix nombre de cartes.",
    "La baralla té $40$ cartes repartides en $4$ colls iguals: quantes en toca a cada coll?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMJ2V4cGVyaW1lbnQgamEgZml4YSBlbCBjb2xsIChlc3Bhc2VzKTogZWwgcXVlIHZhcmlhIMOpcyBxdWluYSBjYXJ0YSBjb25jcmV0YSBkJ2VzcGFzZXMgc3VydCwgaSBuJ2hpIGhhICQxMCQsIG5vICQ0JC4iLCAiTCdlbnVuY2lhdCByZXN0cmluZ2VpeCBsJ2V4cGVyaW1lbnQgYSBVTiBzb2wgY29sbCAoZXNwYXNlcyksIG5vIGEgbGEgYmFyYWxsYSBzZW5jZXJhOiBub23DqXMgY29tcHRlbiBsZXMgJDEwJCBjYXJ0ZXMgZCdlc3Bhc2VzLiIsICJDYWRhIGNvbGwgdGFtYsOpIHTDqSB0cmVzIGZpZ3VyZXMgKHNvdGEsIGNhdmFsbCBpIHJlaSk6ICQ3KzM9MTAkIGNhcnRlcyBwZXIgY29sbCwgbm8gJDckLiIsICIiXSwgImVyciI6IFsiRVNQQUlfTU9TVFJBTF9NQUxfQ09NUFRBVCIsICJFU1BBSV9NT1NUUkFMX01BTF9DT01QVEFUIiwgIkVTUEFJX01PU1RSQUxfTUFMX0NPTVBUQVQiLCAiIl0sICJyZXMiOiBbIkVsIGNvbGwgZCdlc3Bhc2VzIHTDqSAkMTAkIGNhcnRlczogJEU9XFx7MVxcdGV4dHsgZCdlc3Bhc2VzfSwgXFxsZG90cyxcXHRleHR7cmVpIGQnZXNwYXNlc31cXH0kIl19"
  },
  {
   "id": "236g",
   "ex": 236,
   "ap": "g",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 2,
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
   "dif": 3,
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
   "id": "239a",
   "ex": 239,
   "ap": "a",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 3,
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
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJRdWUgaGkgaGFnaSB1biDDum5pYyBleGVtcGxhciBkZSBDQURBIENBUlRBIENPTkNSRVRBIChjb20gZWwgcmVpIGQnb3JzKSBubyB2b2wgZGlyIHF1ZSBoaSBoYWdpIHVuIMO6bmljIGV4ZW1wbGFyIGRlIENBREEgQ09MTDogZWwgY29sbCBkJ29ycyB0w6kgJDEwJCBjYXJ0ZXMgZGlmZXJlbnRzLCBhaXjDrSBxdWUgc2UnbiBwb2RlbiB0cmV1cmUgZHVlcy4gUmV2aXNhIHF1YW50ZXMgY2FydGVzIChvIGVsZW1lbnRzKSBkaWZlcmVudHMgY29tcGxlaXhlbiBleGFjdGFtZW50IGxhIGNvbmRpY2nDsyBkZW1hbmFkYTogdW4gZXNkZXZlbmltZW50IMOpcyBpbXBvc3NpYmxlIG5vbcOpcyBxdWFuIENBUCByZXN1bHRhdCBkZSBsJ2VzcGFpIG1vc3RyYWwgZWwgY29tcGxlaXgsIG5vIHF1YW4gc2VtYmxhIHBvYyBoYWJpdHVhbC4iLCAiRWwgY29sbCBkJ29ycyB0w6kgJDEwJCBjYXJ0ZXMgZGlmZXJlbnRzIChkZSBsJyQxJCBhbCAkNyQgaSB0cmVzIGZpZ3VyZXMpOiBkZXNwcsOpcyBkZSB0cmV1cmUnbiB1bmEsIGVuY2FyYSBlbiBxdWVkZW4gJDkkIG3DqXMgcGVyIHRyZXVyZSBjb20gYSBzZWdvbmEgY2FydGEuIiwgIkwnZW51bmNpYXQgcGFybGEgZGUgdHJldXJlIERVRVMgY2FydGVzIGVuIHRvdGFsLCBubyBkJ3VuYSBqdWdhZGEgbGltaXRhZGEgYSB1bmEgY2FydGEgcGVyIGNvbGw6IMOpcyBwZXJmZWN0YW1lbnQgcG9zc2libGUgcXVlIHRvdGVzIGR1ZXMgc2lndWluIGQnb3JzLiIsICIiXSwgImVyciI6IFsiQ0FSVEVTX1JFUEVUSURFU19DT05GT1NFUyIsICJDQVJURVNfUkVQRVRJREVTX0NPTkZPU0VTIiwgIkNBUlRFU19SRVBFVElERVNfQ09ORk9TRVMiLCAiIl0sICJyZXMiOiBbIkhpIGhhICQxMCQgb3JzIGEgbGEgYmFyYWxsYSwgYWl4w60gcXVlIMOpcyBwZXJmZWN0YW1lbnQgcG9zc2libGUgdHJldXJlJ24gZG9zOiBhcXVlc3QgZXNkZXZlbmltZW50IE5PIMOpcyBpbXBvc3NpYmxlIl19"
  },
  {
   "id": "239b",
   "ex": 239,
   "ap": "b",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
    "Un or i una copa són dues cartes diferents, de colls diferents: hi ha res que impedeixi treure-les totes dues?"
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
   "encapcalament": "En llançar un dau, ordena, de grau més petit a més gran de probabilitat, els esdeveniments següents.",
   "enunciat": "«Nombre més gran que $7$»",
   "opcions": [
    "$P=\\dfrac{1}{6}$, comptant el $6$ com a cas favorable",
    "$P=\\dfrac{0}{6}=0$ (cap resultat del dau, de l'$1$ al $6$, supera el $7$: és un esdeveniment impossible)",
    "$P=\\dfrac{1}{6}$, considerant el $7$ com un resultat possible del dau",
    "$P=\\dfrac{6}{6}=1$, perquè cap resultat compleix la condició i per tant és un esdeveniment segur"
   ],
   "pistes": [
    "Quins valors del $1$ al $6$ són més grans que $7$?",
    "Si no hi ha cap cas favorable, quant val el numerador de la regla de Laplace?"
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
   "dif": 3,
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
   "id": "238a",
   "ex": 238,
   "ap": "a",
   "bloc": "espais_mostrals",
   "tipus": "A",
   "dif": 4,
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
   "dif": 4,
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
  }
 ]
};
