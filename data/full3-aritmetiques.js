/* Generat per tools/build.py — no editeu aquest fitxer a mà. */
window.FULL = {
 "full": 3,
 "titol": "Full 3 — Successions i progressions",
 "subtitol": "Terme general, successions recurrents i progressions aritmètiques i geomètriques.",
 "blocs": [
  {
   "id": "termes",
   "titol": "Termes d'una successió",
   "descripcio": "Terme general, successions recurrents i comprovar si és una progressió aritmètica.",
   "items": [
    "346a",
    "346b",
    "47a",
    "47b",
    "47c",
    "47d",
    "47e",
    "47f",
    "47g",
    "48a",
    "48b",
    "48c",
    "48d",
    "49a",
    "49b",
    "49c",
    "49d",
    "50a",
    "50b",
    "50c",
    "51a",
    "51b"
   ]
  },
  {
   "id": "aritmetiques",
   "titol": "Progressions aritmètiques",
   "descripcio": "Diferència, terme general i termes que falten.",
   "items": [
    "325a",
    "325b",
    "325c",
    "326a",
    "326b",
    "326c",
    "52a",
    "52b",
    "52c",
    "52d",
    "54a",
    "54b",
    "54c",
    "54d",
    "54e",
    "54f",
    "53a",
    "53b",
    "53c"
   ]
  },
  {
   "id": "geometriques",
   "titol": "Progressions geomètriques",
   "descripcio": "Raó, terme general i termes que falten.",
   "items": [
    "347a",
    "347b",
    "56a",
    "56b",
    "56c",
    "57a",
    "57b",
    "57c",
    "55",
    "58a",
    "58b",
    "58c",
    "58d"
   ]
  },
  {
   "id": "aplicacions",
   "titol": "Aplicacions",
   "descripcio": "Triar el terme general correcte i trobar la posició d'un terme.",
   "items": [
    "59a",
    "59b",
    "59c",
    "59d",
    "60",
    "61"
   ],
   "avancat": true
  }
 ],
 "errors": {
  "COMPARA_TERMES": "Dues fraccions equivalents gairebé mai tenen els mateixos termes: el que ha de coincidir és el valor, no les xifres.",
  "DESPLACAMENT_INDEX": "Revisa a partir de quin valor de $n$ comences a substituir, o quin exponent li correspon: t'has desplaçat una posició.",
  "ENTER_AL_NUMERADOR": "Has sumat l'enter directament al numerador. Un enter és una fracció de denominador $1$: cal reduir-lo a denominador comú abans de sumar.",
  "ENTER_MULTIPLICA_DENOMINADOR": "En multiplicar un enter per una fracció, l'enter multiplica NOMÉS el numerador; el denominador no canvia.",
  "INVERTIDA": "Has invertit la fracció. Simplificar no canvia quin terme és a dalt i quin a baix.",
  "ORDRE_RESTA": "Has restat en l'ordre equivocat: revisa quin terme ha d'anar primer.",
  "PAS_INTERMEDI_PER_RESPOSTA": "El valor que has triat és correcte, però és un pas intermedi, no el que et demanen. Torna a llegir la pregunta i mira quina magnitud has d'acabar donant: sovint només falta una operació més.",
  "POTENCIA_DE_SUMA": "Aquí els dos nombres es MULTIPLIQUEN dins del parèntesi, no se sumen: la potència és d'un producte, $(a\\cdot b)^n$, no d'una suma, $(a+b)^n$.",
  "PRIMER_TERME_PER_DIFERENCIA": "Has donat el primer terme de la progressió, no la diferència. La diferència $d$ és el que se suma per passar d'un terme al següent: resta dos termes consecutius i la tindràs.",
  "PROGRESSIO_INVENTADA": "El terme s'ha de calcular seguint estrictament la regla que defineix la successió (el terme general o la relació de recurrència), no un patró aproximat o inventat.",
  "RAONAMENT_ADDITIU": "Has passat d'una fracció a l'altra sumant. Dues fraccions són equivalents quan es passa d'una a l'altra MULTIPLICANT els dos termes pel mateix nombre.",
  "RAO_MAL_APLICADA": "Per passar d'un terme al següent s'ha de MULTIPLICAR per la raó. Comprova la raó amb dos termes consecutius que ja tinguis i aplica-la sempre igual.",
  "RESTA_NEGATIU": "Restar un nombre negatiu és sumar-ne l'oposat: $a-(-b) = a+b$.",
  "SIGNE_FINAL": "El resultat té el signe canviat. Revisa quin dels dos termes és més gran en valor absolut.",
  "TERME_MAL_CALCULAT": "Un dels termes no surt: comprova'l substituint-lo al terme general o sumant-hi la diferència des de l'anterior."
 },
 "items": [
  {
   "id": "325a",
   "ex": 325,
   "ap": "a",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Aquesta progressió sabem que és aritmètica. Quina és la seva diferència $d$?",
   "enunciat": "$3,\\;7,\\;11,\\;15,\\;\\dots$",
   "opcions": [
    "$d=4$",
    "$d=3$",
    "$d=-4$",
    "$d=7$"
   ],
   "pistes": [
    "La diferència és el que se suma per passar d'un terme al següent.",
    "Resta dos termes consecutius: $7-3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1w60gJDMkIMOpcyAkYV8xJC4gSGFzIGRvbmF0IGVsIHByaW1lciB0ZXJtZSBkZSBsYSBwcm9ncmVzc2nDsywgbm8gbGEgZGlmZXLDqG5jaWEuIExhIGRpZmVyw6huY2lhICRkJCDDqXMgZWwgcXVlIHNlIHN1bWEgcGVyIHBhc3NhciBkJ3VuIHRlcm1lIGFsIHNlZ8O8ZW50OiByZXN0YSBkb3MgdGVybWVzIGNvbnNlY3V0aXVzIGkgbGEgdGluZHLDoHMuIiwgIkhhcyByZXN0YXQgYSBsJ2lucmV2w6lzOiDDqXMgZWwgdGVybWUgU0VHw5xFTlQgbWVueXMgbCdhbnRlcmlvciwgJDctMyQsIG5vICQzLTckLiBMYSBwcm9ncmVzc2nDsyBjcmVpeCwgZGUgbWFuZXJhIHF1ZSAkZCQgaGEgZGUgc2VyIHBvc2l0aXZhLiIsICJIYXMgYWdhZmF0IGVsIHNlZ29uIHRlcm1lIGVuIGxsb2MgZGUgbGEgZGlmZXLDqG5jaWEgZW50cmUgZG9zIHRlcm1lcy4iXSwgImVyciI6IFsiIiwgIlBSSU1FUl9URVJNRV9QRVJfRElGRVJFTkNJQSIsICJPUkRSRV9SRVNUQSIsICJDT01QQVJBX1RFUk1FUyJdLCAicmVzIjogWyIkZD03LTM9NCQgKGkgZXMgY29tcHJvdmE6ICQxMS03PTQkLCAkMTUtMTE9NCQpIl19"
  },
  {
   "id": "325b",
   "ex": 325,
   "ap": "b",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Aquesta progressió sabem que és aritmètica. Quina és la seva diferència $d$?",
   "enunciat": "$10,\\;7,\\;4,\\;1,\\;\\dots$",
   "opcions": [
    "$d=3$",
    "$d=-7$",
    "$d=-3$",
    "$d=10$"
   ],
   "pistes": [
    "Sempre és el terme següent menys l'anterior, en aquest ordre.",
    "$7-10$ dona un número negatiu, i és el que toca: la progressió baixa."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgcmVzdGF0IGVsIGdyYW4gbWVueXMgZWwgcGV0aXQuIExhIHByb2dyZXNzacOzIERFQ1JFSVgsIGkgYWl4w7Igdm9sIGRpciBxdWUgJGQkIMOpcyBuZWdhdGl2YTogJDctMTA9LTMkLiIsICJIYXMgY2FudmlhdCBkZSBzaWduZSBlbCBzZWdvbiB0ZXJtZSBlbiBsbG9jIGRlIHJlc3Rhci1uZSBkb3MgZGUgY29uc2VjdXRpdXMuIiwgIiIsICJIYXMgZG9uYXQgZWwgcHJpbWVyIHRlcm1lIGRlIGxhIHByb2dyZXNzacOzLCBubyBsYSBkaWZlcsOobmNpYS4gTGEgZGlmZXLDqG5jaWEgJGQkIMOpcyBlbCBxdWUgc2Ugc3VtYSBwZXIgcGFzc2FyIGQndW4gdGVybWUgYWwgc2Vnw7xlbnQ6IHJlc3RhIGRvcyB0ZXJtZXMgY29uc2VjdXRpdXMgaSBsYSB0aW5kcsOgcy4iXSwgImVyciI6IFsiT1JEUkVfUkVTVEEiLCAiQ09NUEFSQV9URVJNRVMiLCAiIiwgIlBSSU1FUl9URVJNRV9QRVJfRElGRVJFTkNJQSJdLCAicmVzIjogWyIkZD03LTEwPS0zJCAoaSBlcyBjb21wcm92YTogJDQtNz0tMyQsICQxLTQ9LTMkKSJdfQ=="
  },
  {
   "id": "325c",
   "ex": 325,
   "ap": "c",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Aquesta progressió sabem que és aritmètica. Quina és la seva diferència $d$?",
   "enunciat": "$-5,\\;-3,\\;-1,\\;1,\\;\\dots$",
   "opcions": [
    "$d=-8$",
    "$d=2$",
    "$d=3$",
    "$d=-2$"
   ],
   "pistes": [
    "Compte amb els signes: és $a_2-a_1=(-3)-(-5)$.",
    "Restar un número negatiu és el mateix que sumar-lo canviat de signe."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgY2FsY3VsYXQgJC01LTMkLiBFbCBxdWUgY2FsIHJlc3RhciDDqXMgJC0zLSgtNSkkLCBpIHJlc3RhciB1biBuZWdhdGl1IMOpcyBzdW1hcjogJC0zKzU9MiQuIiwgIiIsICJIYXMgYWdhZmF0IGVsIHZhbG9yIGFic29sdXQgZGVsIHNlZ29uIHRlcm1lLiIsICJIYXMgcmVzdGF0IGEgbCdpbnJldsOpcy4gRWxzIHRlcm1lcyB2YW4gY2FwIGFtdW50ICgkLTUkLCAkLTMkLCAkLTEkLCAkMSQpLCBvIHNpZ3VpIHF1ZSAkZCQgw6lzIHBvc2l0aXZhLiJdLCAiZXJyIjogWyJSRVNUQV9ORUdBVElVIiwgIiIsICJDT01QQVJBX1RFUk1FUyIsICJPUkRSRV9SRVNUQSJdLCAicmVzIjogWyIkZD0oLTMpLSgtNSk9LTMrNT0yJCJdfQ=="
  },
  {
   "id": "326a",
   "ex": 326,
   "ap": "a",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "En aquesta progressió aritmètica, escriu quant val el terme següent.",
   "enunciat": "$2,\\;6,\\;10,\\;14,\\;\\dots$",
   "opcions": [
    "$18$",
    "$20$",
    "$16$",
    "$28$"
   ],
   "pistes": [
    "Primer troba la diferència restant dos termes consecutius.",
    "$d=4$; ara suma-la a l'últim terme que et donen."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIHN1bWF0ICQ2JC4gTGEgZGlmZXLDqG5jaWEgY29uc3RhbnQgw6lzICQ0JC4iLCAiTGEgZGlmZXLDqG5jaWEgw6lzICQ0JCwgbm8gJDIkOiBtaXJhICQ2LTIkLCAkMTAtNiQsICQxNC0xMCQuIiwgIkhhcyBtdWx0aXBsaWNhdCBwZXIgJDIkLiBBaXjDsiBzZXJpYSB1bmEgcHJvZ3Jlc3Npw7MgR0VPTcOIVFJJQ0E7IGVuIHVuYSBhcml0bcOodGljYSBlcyBTVU1BIHNlbXByZSBlbCBtYXRlaXgsIGkgYXF1w60gc2Ugc3VtZW4gJDQkLiJdLCAiZXJyIjogWyIiLCAiVEVSTUVfTUFMX0NBTENVTEFUIiwgIlRFUk1FX01BTF9DQUxDVUxBVCIsICJSQU9OQU1FTlRfQURESVRJVSJdLCAicmVzIjogWyIkZD02LTI9NCQ7ICRhXzU9MTQrND0xOCQiXX0="
  },
  {
   "id": "326b",
   "ex": 326,
   "ap": "b",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "En aquesta progressió aritmètica, escriu quant val el terme següent.",
   "enunciat": "$20,\\;17,\\;14,\\;\\dots$",
   "opcions": [
    "$12$",
    "$17$",
    "$11$",
    "$10$"
   ],
   "pistes": [
    "La progressió baixa: la diferència és negativa.",
    "$d=-3$; suma-la a $14$ (o resta-li $3$, que és el mateix)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgcmVzdGF0ICQyJC4gTGEgZGlmZXLDqG5jaWEgw6lzICQtMyQ6ICQxNy0yMD0tMyQuIiwgIkhhcyByZXBldGl0IHVuIHRlcm1lIHF1ZSBqYSBoaSBlcmEuIEVsIHF1ZSBlcyBkZW1hbmEgw6lzIGVsIHNlZ8O8ZW50LiIsICIiLCAiSGFzIHJlc3RhdCAkNCQgZW4gbGxvYyBkZSAkMyQuIl0sICJlcnIiOiBbIlRFUk1FX01BTF9DQUxDVUxBVCIsICJQQVNfSU5URVJNRURJX1BFUl9SRVNQT1NUQSIsICIiLCAiVEVSTUVfTUFMX0NBTENVTEFUIl0sICJyZXMiOiBbIiRkPTE3LTIwPS0zJDsgJGFfND0xNCsoLTMpPTExJCJdfQ=="
  },
  {
   "id": "326c",
   "ex": 326,
   "ap": "c",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "En aquesta progressió aritmètica, escriu quant val el terme següent.",
   "enunciat": "Una progressió aritmètica té $a_1=5$ i $d=3$. Quant val $a_2$?",
   "opcions": [
    "$5$",
    "$8$",
    "$15$",
    "$3$"
   ],
   "pistes": [
    "Per passar d'un terme al següent se suma $d$.",
    "$a_2=a_1+d=5+3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgcmVwZXRpdCAkYV8xJC4gRWwgcXVlIGVzIGRlbWFuYSDDqXMgZWwgdGVybWUgc2Vnw7xlbnQuIiwgIiIsICJIYXMgbXVsdGlwbGljYXQgJDVcXGNkb3QgMyQuIEVuIHVuYSBwcm9ncmVzc2nDsyBhcml0bcOodGljYSBsYSBkaWZlcsOobmNpYSBzZSBTVU1BOyBtdWx0aXBsaWNhciBzZXJpYSB1bmEgZGUgZ2VvbcOodHJpY2EuIiwgIkFxdcOtIHBhc3NhIGFsIGNvbnRyYXJpOiBoYXMgZG9uYXQgJGQkIGVuIGxsb2MgZGVsIHRlcm1lLiBIYXMgZG9uYXQgZWwgcHJpbWVyIHRlcm1lIGRlIGxhIHByb2dyZXNzacOzLCBubyBsYSBkaWZlcsOobmNpYS4gTGEgZGlmZXLDqG5jaWEgJGQkIMOpcyBlbCBxdWUgc2Ugc3VtYSBwZXIgcGFzc2FyIGQndW4gdGVybWUgYWwgc2Vnw7xlbnQ6IHJlc3RhIGRvcyB0ZXJtZXMgY29uc2VjdXRpdXMgaSBsYSB0aW5kcsOgcy4iXSwgImVyciI6IFsiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiLCAiIiwgIlJBT19NQUxfQVBMSUNBREEiLCAiUFJJTUVSX1RFUk1FX1BFUl9ESUZFUkVOQ0lBIl0sICJyZXMiOiBbIiRhXzI9YV8xK2Q9NSszPTgkIl19"
  },
  {
   "id": "52a",
   "ex": 52,
   "ap": "a",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Troba el terme general de les progressions aritmètiques següents.",
   "enunciat": "$1{,}73;\\;1{,}77;\\;1{,}81;\\;1{,}85;\\dots$",
   "opcions": [
    "$a_n=1{,}77+(n-1)\\cdot0{,}04$",
    "$a_n=1{,}73+(n-1)\\cdot0{,}04$",
    "$a_n=1{,}73+(n-1)\\cdot0{,}4$",
    "$a_n=1{,}73+n\\cdot0{,}04$"
   ],
   "pistes": [
    "La diferència és un terme menys l'anterior: $1{,}77-1{,}73$.",
    "$d=1{,}77-1{,}73=0{,}04$. El primer terme és $a_1=1{,}73$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBwcmltZXIgdGVybWUgZGUgbGEgc3VjY2Vzc2nDsyDDqXMgJDF7LH03MyQsIG5vICQxeyx9NzckIChhcXVlc3Qgw6lzIGVsIHNlZ29uIHRlcm1lKS4iLCAiIiwgIkVuIHJlYWxpdGF0IGwnZXJyb3Igw6lzIGRlIHBvc2ljacOzIGRlY2ltYWwsIG5vIGQnw61uZGV4OiBSZXZpc2EgYSBwYXJ0aXIgZGUgcXVpbiB2YWxvciBkZSAkbiQgY29tZW5jZXMgYSBzdWJzdGl0dWlyLCBvIHF1aW4gZXhwb25lbnQgbGkgY29ycmVzcG9uOiB0J2hhcyBkZXNwbGHDp2F0IHVuYSBwb3NpY2nDsy4iLCAiRWwgdGVybWUgZ2VuZXJhbCDDqXMgJGFfMSsobi0xKWQkLCBubyAkYV8xK25kJDogcmV2aXNhIGwnZXhwb25lbnQgZGUgJChuLTEpJC4iXSwgImVyciI6IFsiQ09NUEFSQV9URVJNRVMiLCAiIiwgIkRFU1BMQUNBTUVOVF9JTkRFWCIsICJERVNQTEFDQU1FTlRfSU5ERVgiXSwgInJlcyI6IFsiJGQ9MXssfTc3LTF7LH03Mz0weyx9MDQkIChlcyBtYW50w6kgaWd1YWwgYSBsYSByZXN0YSkiLCAiJGFfbj1hXzErKG4tMSlkPTF7LH03Mysobi0xKVxcY2RvdDB7LH0wNCQiXX0="
  },
  {
   "id": "52b",
   "ex": 52,
   "ap": "b",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Troba el terme general de les progressions aritmètiques següents.",
   "enunciat": "$5,\\;2,\\;-1,\\;-4,\\;-7,\\dots$",
   "opcions": [
    "$a_n=5+(n-1)\\cdot3$",
    "$a_n=5-3n$",
    "$a_n=2-(n-1)\\cdot3$",
    "$a_n=5-(n-1)\\cdot3$"
   ],
   "pistes": [
    "La diferència és un terme menys l'anterior: $2-5$.",
    "$d=2-5=-3$. El primer terme és $a_1=5$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCByZXN1bHRhdCB0w6kgZWwgc2lnbmUgY2FudmlhdC4gUmV2aXNhIHF1aW4gZGVscyBkb3MgdGVybWVzIMOpcyBtw6lzIGdyYW4gZW4gdmFsb3IgYWJzb2x1dC4iLCAiRWwgdGVybWUgZ2VuZXJhbCDDqXMgJGFfMSsobi0xKWQkLCBubyAkYV8xK25kJDogcmV2aXNhIGwnZXhwb25lbnQgZGUgJChuLTEpJC4iLCAiRWwgcHJpbWVyIHRlcm1lIGRlIGxhIHN1Y2Nlc3Npw7Mgw6lzICQ1JCwgbm8gJDIkIChhcXVlc3Qgw6lzIGVsIHNlZ29uIHRlcm1lKS4iLCAiIl0sICJlcnIiOiBbIlNJR05FX0ZJTkFMIiwgIkRFU1BMQUNBTUVOVF9JTkRFWCIsICJDT01QQVJBX1RFUk1FUyIsICIiXSwgInJlcyI6IFsiJGQ9Mi01PS0zJCAoZXMgbWFudMOpIGlndWFsOiAkLTEtMj0tMyQsICQtNC0oLTEpPS0zJCkiLCAiJGFfbj1hXzErKG4tMSlkPTUrKG4tMSlcXGNkb3QoLTMpPTUtMyhuLTEpJCJdfQ=="
  },
  {
   "id": "52c",
   "ex": 52,
   "ap": "c",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Troba el terme general de les progressions aritmètiques següents.",
   "enunciat": "$\\dfrac12,\\;1,\\;\\dfrac32,\\;2,\\dots$",
   "opcions": [
    "$a_n=\\dfrac12+(n-1)\\cdot2$",
    "$a_n=\\dfrac12+n\\cdot\\dfrac12$",
    "$a_n=1+(n-1)\\cdot\\dfrac12$",
    "$a_n=\\dfrac12+(n-1)\\cdot\\dfrac12$"
   ],
   "pistes": [
    "La diferència és un terme menys l'anterior: $1-\\dfrac12$.",
    "$d=1-\\dfrac12=\\dfrac12$. El primer terme és $a_1=\\dfrac12$."
   ],
   "nota": "Dona el terme general en la forma $a_n=a_1+(n-1)\\cdot d$, sense simplificar: és la forma que practica aquest exercici i la que trobaràs entre les opcions.",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMYSBkaWZlcsOobmNpYSDDqXMgJFxcZGZyYWMxMiQsIG5vICQyJDogaGFzIGludmVydGl0IGxhIGZyYWNjacOzIGVuIGNhbGN1bGFyICRkJC4iLCAiRmFsdGEgZWwgJC0xJCBkZSBsJ2V4cG9uZW50IGQnb3JkcmU6IGFxdWVzdGEgZsOzcm11bGEgZG9uYSAkMSxcXGRmcmFjMzIsMlxcZG90cyQsIHVuIGxsb2MgYXZhbsOnYWRhLiBDb21wcm92YS1sYSBzZW1wcmUgYW1iICRuPTEkLCBxdWUgaGEgZGUgdG9ybmFyIGVsIHByaW1lciB0ZXJtZSAoJFxcZGZyYWMxMiQpLiIsICJFbCBwcmltZXIgdGVybWUgZGUgbGEgc3VjY2Vzc2nDsyDDqXMgJFxcZGZyYWMxMiQsIG5vICQxJCAoYXF1ZXN0IMOpcyBlbCBzZWdvbiB0ZXJtZSkuIiwgIiJdLCAiZXJyIjogWyJJTlZFUlRJREEiLCAiREVTUExBQ0FNRU5UX0lOREVYIiwgIkNPTVBBUkFfVEVSTUVTIiwgIiJdLCAicmVzIjogWyIkZD0xLVxcZGZyYWMxMj1cXGRmcmFjMTIkIChlcyBtYW50w6kgaWd1YWw6ICRcXGRmcmFjMzItMT1cXGRmcmFjMTIkKSIsICIkYV9uPWFfMSsobi0xKWQ9XFxkZnJhYzEyKyhuLTEpXFxjZG90XFxkZnJhYzEyJCJdLCAiY29tIjogIlNpIHNpbXBsaWZpcXVlcyBldCBxdWVkYSAkYV9uPVxcZGZyYWN7bn17Mn0kLCBxdWUgw6lzIGlndWFsIGRlIGNvcnJlY3RhLiBDb21wcm92YS1obyBhbWIgJG49MSQgaSAkbj0yJDogZG9uYSAkXFxkZnJhYzEyJCBpICQxJCwgZWxzIGRvcyBwcmltZXJzIHRlcm1lcy4ifQ=="
  },
  {
   "id": "52d",
   "ex": 52,
   "ap": "d",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Troba el terme general de les progressions aritmètiques següents.",
   "enunciat": "$\\dfrac1a,\\;\\dfrac3a,\\;\\dfrac5a,\\;\\dfrac7a,\\dots$",
   "opcions": [
    "$a_n=\\dfrac3a+(n-1)\\cdot\\dfrac2a$",
    "$a_n=\\dfrac1a+(n-1)\\cdot2a$",
    "$a_n=\\dfrac{1}{a}+n\\cdot\\dfrac2a$",
    "$a_n=\\dfrac1a+(n-1)\\cdot\\dfrac2a$"
   ],
   "pistes": [
    "La diferència és un terme menys l'anterior: $\\dfrac3a-\\dfrac1a$.",
    "$d=\\dfrac3a-\\dfrac1a=\\dfrac2a$. El primer terme és $a_1=\\dfrac1a$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCBwcmltZXIgdGVybWUgZGUgbGEgc3VjY2Vzc2nDsyDDqXMgJFxcZGZyYWMxYSQsIG5vICRcXGRmcmFjM2EkIChhcXVlc3Qgw6lzIGVsIHNlZ29uIHRlcm1lKS4iLCAiTGEgZGlmZXLDqG5jaWEgw6lzICRcXGRmcmFjMmEkICh1bmEgZnJhY2Npw7MpLCBubyAkMmEkOiByZXZpc2EgbGEgcmVzdGEgJFxcZGZyYWMzYS1cXGRmcmFjMWEkLiIsICJFbCB0ZXJtZSBnZW5lcmFsIMOpcyAkYV8xKyhuLTEpZCQsIG5vICRhXzErbmQkOiByZXZpc2EgbCdleHBvbmVudCBkZSAkKG4tMSkkLiIsICIiXSwgImVyciI6IFsiQ09NUEFSQV9URVJNRVMiLCAiRU5URVJfTVVMVElQTElDQV9ERU5PTUlOQURPUiIsICJERVNQTEFDQU1FTlRfSU5ERVgiLCAiIl0sICJyZXMiOiBbIiRkPVxcZGZyYWMzYS1cXGRmcmFjMWE9XFxkZnJhYzJhJCAoZXMgbWFudMOpIGlndWFsIGEgbGEgcmVzdGEpIiwgIiRhX249YV8xKyhuLTEpZD1cXGRmcmFjMWErKG4tMSlcXGNkb3RcXGRmcmFjMmEkIl19"
  },
  {
   "id": "54a",
   "ex": 54,
   "ap": "a",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula la diferència o la raó de les progressions següents i troba'n el terme general.",
   "enunciat": "$3,\\;6,\\;12,\\;24,\\dots$",
   "opcions": [
    "$d=3,\\;\\;a_n=3+(n-1)\\cdot3$",
    "$r=2,\\;\\;a_n=3+2^{\\,n-1}$",
    "$r=2,\\;\\;a_n=3\\cdot2^{\\,n}$",
    "$r=2,\\;\\;a_n=3\\cdot2^{\\,n-1}$"
   ],
   "pistes": [
    "Divideix cada terme entre l'anterior per veure si el quocient és sempre el mateix.",
    "$6:3=2$, $12:6=2$, $24:12=2$: la raó és constant, $r=2$, és una progressió GEOMÈTRICA."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbHMgcHJpbWVycyBkb3MgdGVybWVzIHPDrSBxdWUgc3VtYXJpZW4gJDMkLCBwZXLDsiAkMTItNj02XFxuZTMkOiBsYSBkaWZlcsOobmNpYSBubyDDqXMgY29uc3RhbnQsIGFpeMOtIHF1ZSBubyDDqXMgdW5hIHByb2dyZXNzacOzIEFSSVRNw4hUSUNBLiBFbCB0ZXJtZSBzJ2hhIGRlIGNhbGN1bGFyIHNlZ3VpbnQgZXN0cmljdGFtZW50IGxhIHJlZ2xhIHF1ZSBkZWZpbmVpeCBsYSBzdWNjZXNzacOzIChlbCB0ZXJtZSBnZW5lcmFsIG8gbGEgcmVsYWNpw7MgZGUgcmVjdXJyw6huY2lhKSwgbm8gdW4gcGF0csOzIGFwcm94aW1hdCBvIGludmVudGF0LiIsICJFbCB0ZXJtZSBnZW5lcmFsIGQndW5hIFBHIMOpcyB1biBQUk9EVUNURSwgJGFfMVxcY2RvdCByXntuLTF9JCwgbm8gdW5hIHN1bWEuIiwgIkwnZXhwb25lbnQgZGVsIHRlcm1lIGdlbmVyYWwgw6lzICRuLTEkLCBubyAkbiQ6IHBlciAkbj0xJCBsJ2V4cG9uZW50IGhhIGRlIHNlciAkMCQuIiwgIiJdLCAiZXJyIjogWyJQUk9HUkVTU0lPX0lOVkVOVEFEQSIsICJQT1RFTkNJQV9ERV9TVU1BIiwgIkRFU1BMQUNBTUVOVF9JTkRFWCIsICIiXSwgInJlcyI6IFsiJDY6Mz0yJCwgJDEyOjY9MiQsICQyNDoxMj0yJDogcmHDsyBjb25zdGFudCwgJHI9MiQiLCAiJGFfbj1hXzFcXGNkb3Qgcl57XFwsbi0xfT0zXFxjZG90Ml57XFwsbi0xfSQiXX0="
  },
  {
   "id": "54b",
   "ex": 54,
   "ap": "b",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula la diferència o la raó de les progressions següents i troba'n el terme general.",
   "enunciat": "$10,\\;7,\\;4,\\;1,\\dots$",
   "opcions": [
    "$d=-3,\\;\\;a_n=10-(n-1)\\cdot3$",
    "$d=-3,\\;\\;a_n=10-3n$",
    "$r=\\dfrac7{10},\\;\\;a_n=10\\cdot\\left(\\dfrac7{10}\\right)^{n-1}$",
    "$d=3,\\;\\;a_n=10+(n-1)\\cdot3$"
   ],
   "pistes": [
    "Comprova primer si la diferència entre termes consecutius és constant.",
    "$7-10=-3$, $4-7=-3$, $1-4=-3$: diferència constant, $d=-3$, és una progressió ARITMÈTICA."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgdGVybWUgZ2VuZXJhbCDDqXMgJGFfMSsobi0xKWQkLCBubyAkYV8xK25kJDogcmV2aXNhIGwnZXhwb25lbnQgZGUgJChuLTEpJC4iLCAiRWwgcXVvY2llbnQgZW50cmUgdGVybWVzIGNvbnNlY3V0aXVzIG5vIMOpcyBjb25zdGFudCAoJDQ6N1xcbmU3OjEwJCk6IG5vIMOpcyB1bmEgcHJvZ3Jlc3Npw7MgR0VPTcOIVFJJQ0EuIEhvIMOpcyBhcml0bcOodGljYSwgcGVycXXDqCBsYSBkaWZlcsOobmNpYSBzw60gcXVlIMOpcyBjb25zdGFudC4iLCAiRWwgcmVzdWx0YXQgdMOpIGVsIHNpZ25lIGNhbnZpYXQuIFJldmlzYSBxdWluIGRlbHMgZG9zIHRlcm1lcyDDqXMgbcOpcyBncmFuIGVuIHZhbG9yIGFic29sdXQuIl0sICJlcnIiOiBbIiIsICJERVNQTEFDQU1FTlRfSU5ERVgiLCAiUFJPR1JFU1NJT19JTlZFTlRBREEiLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiJDctMTA9LTMkLCAkNC03PS0zJCwgJDEtND0tMyQ6IGRpZmVyw6huY2lhIGNvbnN0YW50LCAkZD0tMyQiLCAiJGFfbj1hXzErKG4tMSlkPTEwKyhuLTEpXFxjZG90KC0zKT0xMC0zKG4tMSkkIl19"
  },
  {
   "id": "54c",
   "ex": 54,
   "ap": "c",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula la diferència o la raó de les progressions següents i troba'n el terme general.",
   "enunciat": "$1,\\;1,\\;1,\\;1,\\dots$",
   "opcions": [
    "$d=1,\\;\\;a_n=n$",
    "$d=0,\\;\\;a_n=0$",
    "$d=0,\\;\\;a_n=1$",
    "$d=0,\\;\\;a_n=n$"
   ],
   "pistes": [
    "Calcula la diferència entre termes consecutius.",
    "$1-1=0$ sempre: diferència constant, $d=0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCB0ZXJtZSBnZW5lcmFsIGhhIGRlIGRvbmFyIHNlbXByZSAkMSQ6ICRhX249biQgZG9uYSAkMSwyLDMsNFxcZG90cyQsIHF1ZSBubyBjb2luY2lkZWl4IGFtYiBsYSBzdWNjZXNzacOzLiIsICJFbCBwcmltZXIgdGVybWUgKGkgdG90cyBlbHMgYWx0cmVzKSDDqXMgJDEkLCBubyAkMCQ6IHJldmlzYSBsYSBzdWJzdGl0dWNpw7MgYSAkYV9uPWFfMSsobi0xKVxcY2RvdDAkLiIsICIiLCAiTGEgZGlmZXLDqG5jaWEgc8OtIHF1ZSDDqXMgJDAkLCBwZXLDsiBsbGF2b3JzIGVsIHRlcm1lIGdlbmVyYWwgbm8gcG90IGRlcGVuZHJlIGRlICRuJDogJGFfbj1hXzErKG4tMSlcXGNkb3QwPWFfMSQsIHNlbXByZSBlbCBtYXRlaXggdmFsb3IuIl0sICJlcnIiOiBbIkNPTVBBUkFfVEVSTUVTIiwgIlRFUk1FX01BTF9DQUxDVUxBVCIsICIiLCAiUFJPR1JFU1NJT19JTlZFTlRBREEiXSwgInJlcyI6IFsiJDEtMT0wJCAoaSBpZ3VhbCBwZXIgYSBsYSByZXN0YSk6IGRpZmVyw6huY2lhIGNvbnN0YW50LCAkZD0wJCIsICIkYV9uPWFfMSsobi0xKWQ9MSsobi0xKVxcY2RvdDA9MSQiXX0="
  },
  {
   "id": "54d",
   "ex": 54,
   "ap": "d",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula la diferència o la raó de les progressions següents i troba'n el terme general.",
   "enunciat": "$16,\\;8,\\;4,\\;2,\\;1,\\dots$",
   "opcions": [
    "$d=-8,\\;\\;a_n=16-(n-1)\\cdot8$",
    "$r=2,\\;\\;a_n=16\\cdot2^{\\,n-1}$",
    "$r=\\dfrac12,\\;\\;a_n=16\\cdot\\left(\\dfrac12\\right)^{n-1}$",
    "$r=\\dfrac12,\\;\\;a_n=16\\cdot\\left(\\dfrac12\\right)^{n}$"
   ],
   "pistes": [
    "Divideix cada terme entre l'anterior per veure si el quocient és sempre el mateix.",
    "$8:16=\\dfrac12$, $4:8=\\dfrac12$, $2:4=\\dfrac12$: raó constant, $r=\\dfrac12$, és una progressió GEOMÈTRICA."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBwcmltZXIgcGFyZWxsIGRlIHRlcm1lcyBzw60gcXVlIHJlc3RhICQ4JCwgcGVyw7IgJDQtOD0tNFxcbmUtOCQ6IGxhIGRpZmVyw6huY2lhIG5vIMOpcyBjb25zdGFudCwgYWl4w60gcXVlIG5vIMOpcyB1bmEgcHJvZ3Jlc3Npw7MgQVJJVE3DiFRJQ0EuIEVsIHRlcm1lIHMnaGEgZGUgY2FsY3VsYXIgc2VndWludCBlc3RyaWN0YW1lbnQgbGEgcmVnbGEgcXVlIGRlZmluZWl4IGxhIHN1Y2Nlc3Npw7MgKGVsIHRlcm1lIGdlbmVyYWwgbyBsYSByZWxhY2nDsyBkZSByZWN1cnLDqG5jaWEpLCBubyB1biBwYXRyw7MgYXByb3hpbWF0IG8gaW52ZW50YXQuIiwgIkhhcyBpbnZlcnRpdCBsYSByYcOzOiBsYSBzdWNjZXNzacOzIHZhIGRpc21pbnVpbnQsIGFpeMOtIHF1ZSAkciQgaGEgZGUgc2VyIG3DqXMgcGV0aXRhIHF1ZSAkMSQsIG5vICQyJC4iLCAiIiwgIkwnZXhwb25lbnQgZGVsIHRlcm1lIGdlbmVyYWwgw6lzICRuLTEkLCBubyAkbiQ6IHBlciAkbj0xJCBsJ2V4cG9uZW50IGhhIGRlIHNlciAkMCQuIl0sICJlcnIiOiBbIlBST0dSRVNTSU9fSU5WRU5UQURBIiwgIklOVkVSVElEQSIsICIiLCAiREVTUExBQ0FNRU5UX0lOREVYIl0sICJyZXMiOiBbIiQ4OjE2PVxcZGZyYWMxMiQsICQ0Ojg9XFxkZnJhYzEyJCwgJDI6ND1cXGRmcmFjMTIkLCAkMToyPVxcZGZyYWMxMiQ6IHJhw7MgY29uc3RhbnQsICRyPVxcZGZyYWMxMiQiLCAiJGFfbj1hXzFcXGNkb3Qgcl57XFwsbi0xfT0xNlxcY2RvdFxcbGVmdChcXGRmcmFjMTJcXHJpZ2h0KV57bi0xfSQiXX0="
  },
  {
   "id": "54e",
   "ex": 54,
   "ap": "e",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula la diferència o la raó de les progressions següents i troba'n el terme general.",
   "enunciat": "$16,\\;8,\\;0,\\;-8,\\dots$",
   "opcions": [
    "$r=\\dfrac12,\\;\\;a_n=16\\cdot\\left(\\dfrac12\\right)^{n-1}$",
    "$d=-8,\\;\\;a_n=16-8n$",
    "$d=-8,\\;\\;a_n=16-(n-1)\\cdot8$",
    "$d=8,\\;\\;a_n=16+(n-1)\\cdot8$"
   ],
   "pistes": [
    "Comprova primer si la diferència entre termes consecutius és constant.",
    "$8-16=-8$, $0-8=-8$, $-8-0=-8$: diferència constant, $d=-8$, és una progressió ARITMÈTICA."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBxdW9jaWVudCBlbnRyZSB0ZXJtZXMgY29uc2VjdXRpdXMgbm8gw6lzIGNvbnN0YW50ICgkMDo4PTAkLCBwZXLDsiAkODoxNj1cXGRmcmFjMTIkKTogbm8gw6lzIHVuYSBwcm9ncmVzc2nDsyBHRU9Nw4hUUklDQS4gSG8gw6lzIGFyaXRtw6h0aWNhLCBwZXJxdcOoIGxhIGRpZmVyw6huY2lhIHPDrSBxdWUgw6lzIGNvbnN0YW50LiIsICJFbCB0ZXJtZSBnZW5lcmFsIMOpcyAkYV8xKyhuLTEpZCQsIG5vICRhXzErbmQkOiByZXZpc2EgbCdleHBvbmVudCBkZSAkKG4tMSkkLiIsICIiLCAiRWwgcmVzdWx0YXQgdMOpIGVsIHNpZ25lIGNhbnZpYXQuIFJldmlzYSBxdWluIGRlbHMgZG9zIHRlcm1lcyDDqXMgbcOpcyBncmFuIGVuIHZhbG9yIGFic29sdXQuIl0sICJlcnIiOiBbIlBST0dSRVNTSU9fSU5WRU5UQURBIiwgIkRFU1BMQUNBTUVOVF9JTkRFWCIsICIiLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiJDgtMTY9LTgkLCAkMC04PS04JCwgJC04LTA9LTgkOiBkaWZlcsOobmNpYSBjb25zdGFudCwgJGQ9LTgkIiwgIiRhX249YV8xKyhuLTEpZD0xNisobi0xKVxcY2RvdCgtOCk9MTYtOChuLTEpJCJdfQ=="
  },
  {
   "id": "54f",
   "ex": 54,
   "ap": "f",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula la diferència o la raó de les progressions següents i troba'n el terme general.",
   "enunciat": "$3,\\;9,\\;15,\\;21,\\dots$",
   "opcions": [
    "$d=6,\\;\\;a_n=3+6n$",
    "$d=-6,\\;\\;a_n=3-(n-1)\\cdot6$",
    "$r=3,\\;\\;a_n=3\\cdot3^{\\,n-1}$",
    "$d=6,\\;\\;a_n=3+(n-1)\\cdot6$"
   ],
   "pistes": [
    "Comprova primer si la diferència entre termes consecutius és constant.",
    "$9-3=6$, $15-9=6$, $21-15=6$: diferència constant, $d=6$, és una progressió ARITMÈTICA."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCB0ZXJtZSBnZW5lcmFsIMOpcyAkYV8xKyhuLTEpZCQsIG5vICRhXzErbmQkOiByZXZpc2EgbCdleHBvbmVudCBkZSAkKG4tMSkkLiIsICJFbCByZXN1bHRhdCB0w6kgZWwgc2lnbmUgY2FudmlhdC4gUmV2aXNhIHF1aW4gZGVscyBkb3MgdGVybWVzIMOpcyBtw6lzIGdyYW4gZW4gdmFsb3IgYWJzb2x1dC4iLCAiRWwgcHJpbWVyIHF1b2NpZW50IHPDrSBxdWUgZG9uYSAkMyQsIHBlcsOyICQxNTo5XFxuZTMkOiBlbCBxdW9jaWVudCBubyDDqXMgY29uc3RhbnQsIGFpeMOtIHF1ZSBubyDDqXMgdW5hIHByb2dyZXNzacOzIEdFT03DiFRSSUNBLiBIbyDDqXMgYXJpdG3DqHRpY2EsIHBlcnF1w6ggbGEgZGlmZXLDqG5jaWEgc8OtIHF1ZSDDqXMgY29uc3RhbnQuIiwgIiJdLCAiZXJyIjogWyJERVNQTEFDQU1FTlRfSU5ERVgiLCAiU0lHTkVfRklOQUwiLCAiUFJPR1JFU1NJT19JTlZFTlRBREEiLCAiIl0sICJyZXMiOiBbIiQ5LTM9NiQsICQxNS05PTYkLCAkMjEtMTU9NiQ6IGRpZmVyw6huY2lhIGNvbnN0YW50LCAkZD02JCIsICIkYV9uPWFfMSsobi0xKWQ9Mysobi0xKVxcY2RvdDYkIl19"
  },
  {
   "id": "53a",
   "ex": 53,
   "ap": "a",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Sabent que aquestes són progressions aritmètiques, completa a la llibreta els termes que falten.",
   "enunciat": "$\\square,\\;\\dfrac12,\\;\\square,\\;\\dfrac56,\\;\\square,\\;\\square$",
   "opcions": [
    "$\\dfrac{1}{3}, \\dfrac{1}{2}, \\dfrac{2}{3}, \\dfrac{5}{6}, 1, \\dfrac{7}{6}$",
    "$\\dfrac{1}{6}, \\dfrac{1}{2}, \\dfrac{2}{3}, \\dfrac{5}{6}, 1, \\dfrac{7}{6}$",
    "$\\dfrac{1}{3}, \\dfrac{1}{2}, \\dfrac{2}{3}, \\dfrac{5}{6}, \\dfrac{7}{6}, \\dfrac{4}{3}$",
    "$\\dfrac{1}{3}, \\dfrac{1}{2}, \\dfrac{2}{3}, \\dfrac{5}{6}, \\dfrac{11}{12}, 1$"
   ],
   "pistes": [
    "Els dos termes coneguts són a les posicions $2$ i $4$: la diferència entre ells és $2d$.",
    "$2d=\\dfrac56-\\dfrac12=\\dfrac13\\Rightarrow d=\\dfrac16$. A partir d'aquí, suma o resta $\\dfrac16$ per completar."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgcHJpbWVyIHRlcm1lIHMnb2J0w6kgcmVzdGFudCAkZCQgYWwgc2Vnb24gdGVybWUsICRcXGRmcmFjMTItXFxkZnJhYzE2JCwgbm8gZGl2aWRpbnQtbG8uIiwgIlJldmlzYSBsYSBwb3NpY2nDsyBkZWwgY2lucXXDqCB0ZXJtZTogZW50cmUgZWwgcXVhcnQgKCRcXGRmcmFjNTYkKSBpIGVsIGNpbnF1w6ggaGkgaGEgZCdoYXZlciB1biBwYXMgZGUgJGQkLCBubyBkb3MuIiwgIlJldmlzYSBlbCBjaW5xdcOoIHRlcm1lOiAkXFxkZnJhYzU2K1xcZGZyYWMxNj1cXGRmcmFjezZ9ezZ9PTEkLCBubyAkXFxkZnJhY3sxMX17MTJ9JC4iXSwgImVyciI6IFsiIiwgIkVOVEVSX0FMX05VTUVSQURPUiIsICJERVNQTEFDQU1FTlRfSU5ERVgiLCAiVEVSTUVfTUFMX0NBTENVTEFUIl0sICJyZXMiOiBbIiQyZD1cXGRmcmFjNTYtXFxkZnJhYzEyPVxcZGZyYWMxM1xcUmlnaHRhcnJvdyBkPVxcZGZyYWMxNiQiLCAiJGFfMT1hXzItZD1cXGRmcmFjMTItXFxkZnJhYzE2PVxcZGZyYWMxMyQiLCAiJGFfMz1hXzIrZD1cXGRmcmFjMTIrXFxkZnJhYzE2PVxcZGZyYWMyMyQiLCAiJGFfNT1hXzQrZD1cXGRmcmFjNTYrXFxkZnJhYzE2PTEkLCAkYV82PWFfNStkPTErXFxkZnJhYzE2PVxcZGZyYWM3NiQiLCAiRWxzIHNpcyB0ZXJtZXMgc8OzbiAkXFxkZnJhYzEzLFxcO1xcZGZyYWMxMixcXDtcXGRmcmFjMjMsXFw7XFxkZnJhYzU2LFxcOzEsXFw7XFxkZnJhYzc2JCJdfQ=="
  },
  {
   "id": "53b",
   "ex": 53,
   "ap": "b",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Sabent que aquestes són progressions aritmètiques, completa a la llibreta els termes que falten.",
   "enunciat": "$\\square;\\;1{,}5;\\;\\square;\\;2{,}5;\\;\\square$",
   "opcions": [
    "$1, \\dfrac{3}{2}, 2, \\dfrac{5}{2}, 3$",
    "$1, \\dfrac{3}{2}, 2, \\dfrac{5}{2}, \\dfrac{7}{2}$",
    "$\\dfrac{1}{2}, \\dfrac{3}{2}, 2, \\dfrac{5}{2}, \\dfrac{7}{2}$",
    "$0, \\dfrac{3}{2}, 3, \\dfrac{5}{2}, 4$"
   ],
   "pistes": [
    "Els dos termes coneguts són a les posicions $2$ i $4$: la diferència entre ells és $2d$.",
    "$2d=2{,}5-1{,}5=1\\Rightarrow d=0{,}5$. A partir d'aquí, suma o resta $0{,}5$ per completar."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUmV2aXNhIGVsIGRhcnJlciB0ZXJtZTogJDJ7LH01KzB7LH01PTMkLCBubyAkM3ssfTUkLiIsICJFbCBwcmltZXIgdGVybWUgcydvYnTDqSByZXN0YW50ICRkJCBhbCBzZWdvbiB0ZXJtZSwgJDF7LH01LTB7LH01JCwgbm8gZGl2aWRpbnQtbG8uIiwgIlJldmlzYSBsYSBkaWZlcsOobmNpYSBlbnRyZSBlbHMgZG9zIHRlcm1lcyBjb25lZ3V0czogJDJkPTJ7LH01LTF7LH01PTFcXFJpZ2h0YXJyb3cgZD0weyx9NSQsIG5vICQxeyx9NSQuIl0sICJlcnIiOiBbIiIsICJDT01QQVJBX1RFUk1FUyIsICJFTlRFUl9BTF9OVU1FUkFET1IiLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiJDJkPTJ7LH01LTF7LH01PTFcXFJpZ2h0YXJyb3cgZD0weyx9NSQiLCAiJGFfMT1hXzItZD0xeyx9NS0weyx9NT0xJCIsICIkYV8zPWFfMitkPTF7LH01KzB7LH01PTIkIiwgIiRhXzU9YV80K2Q9MnssfTUrMHssfTU9MyQiLCAiRWxzIGNpbmMgdGVybWVzIHPDs24gJDEsXFw7MXssfTUsXFw7MixcXDsyeyx9NSxcXDszJCJdfQ=="
  },
  {
   "id": "53c",
   "ex": 53,
   "ap": "c",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Sabent que aquestes són progressions aritmètiques, completa a la llibreta els termes que falten.",
   "enunciat": "$\\square,\\;\\dfrac14,\\;\\square,\\;\\square,\\;\\dfrac12,\\;\\square$",
   "opcions": [
    "$\\dfrac{1}{6}, \\dfrac{1}{4}, \\dfrac{3}{8}, \\dfrac{1}{2}, \\dfrac{1}{2}, \\dfrac{7}{12}$",
    "$\\dfrac{1}{12}, \\dfrac{1}{4}, \\dfrac{1}{3}, \\dfrac{5}{12}, \\dfrac{1}{2}, \\dfrac{7}{12}$",
    "$\\dfrac{1}{6}, \\dfrac{1}{4}, \\dfrac{1}{3}, \\dfrac{5}{12}, \\dfrac{1}{2}, \\dfrac{7}{12}$",
    "$\\dfrac{1}{6}, \\dfrac{1}{4}, \\dfrac{1}{3}, \\dfrac{5}{12}, \\dfrac{1}{2}, \\dfrac{2}{3}$"
   ],
   "pistes": [
    "Els dos termes coneguts són a les posicions $2$ i $5$: la diferència entre ells és $3d$.",
    "$3d=\\dfrac12-\\dfrac14=\\dfrac14\\Rightarrow d=\\dfrac{1}{12}$. A partir d'aquí, suma o resta $\\dfrac{1}{12}$ per completar."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgbGEgcG9zaWNpw7MgZGVsIHRlcmNlciB0ZXJtZTogZW50cmUgZWwgc2Vnb24gKCRcXGRmcmFjMTQkKSBpIGVsIGNpbnF1w6ggKCRcXGRmcmFjMTIkKSBoaSBoYSBleGFjdGFtZW50IHRyZXMgcGFzc29zIGRlICRkJCwgbm8gZG9zLiIsICJFbCBwcmltZXIgdGVybWUgcydvYnTDqSByZXN0YW50ICRkJCBhbCBzZWdvbiB0ZXJtZSwgJFxcZGZyYWMxNC1cXGRmcmFjezF9ezEyfSQsIG5vIGRpdmlkaW50LWxvLiIsICIiLCAiUmV2aXNhIGVsIGRhcnJlciB0ZXJtZTogJFxcZGZyYWMxMitcXGRmcmFjezF9ezEyfT1cXGRmcmFjezd9ezEyfSQsIG5vICRcXGRmcmFjMjMkLiJdLCAiZXJyIjogWyJERVNQTEFDQU1FTlRfSU5ERVgiLCAiRU5URVJfQUxfTlVNRVJBRE9SIiwgIiIsICJTSUdORV9GSU5BTCJdLCAicmVzIjogWyIkM2Q9XFxkZnJhYzEyLVxcZGZyYWMxND1cXGRmcmFjMTRcXFJpZ2h0YXJyb3cgZD1cXGRmcmFjezF9ezEyfSQiLCAiJGFfMT1hXzItZD1cXGRmcmFjMTQtXFxkZnJhY3sxfXsxMn09XFxkZnJhYzE2JCIsICIkYV8zPWFfMitkPVxcZGZyYWMxNCtcXGRmcmFjezF9ezEyfT1cXGRmcmFjMTMkIiwgIiRhXzQ9YV8zK2Q9XFxkZnJhYzEzK1xcZGZyYWN7MX17MTJ9PVxcZGZyYWN7NX17MTJ9JCIsICIkYV82PWFfNStkPVxcZGZyYWMxMitcXGRmcmFjezF9ezEyfT1cXGRmcmFjezd9ezEyfSQiLCAiRWxzIHNpcyB0ZXJtZXMgc8OzbiAkXFxkZnJhYzE2LFxcO1xcZGZyYWMxNCxcXDtcXGRmcmFjMTMsXFw7XFxkZnJhY3s1fXsxMn0sXFw7XFxkZnJhYzEyLFxcO1xcZGZyYWN7N317MTJ9JCJdfQ=="
  }
 ]
};
