/* Generat per tools/build.py — no editeu aquest fitxer a mà. */
window.FULL = {
 "full": 5,
 "titol": "Full 5 — Equacions i sistemes",
 "subtitol": "Equacions de primer i segon grau, sistemes d'equacions lineals i problemes que es resolen plantejant-los.",
 "blocs": [
  {
   "id": "primer_grau",
   "titol": "Equacions de primer grau",
   "descripcio": "Equacions amb parèntesis i amb un o diversos denominadors.",
   "items": [
    "350a",
    "350b",
    "76a",
    "76b",
    "76c",
    "76d",
    "76e",
    "76f",
    "77a",
    "77b",
    "77c",
    "77d",
    "75a",
    "75b",
    "75c",
    "75d",
    "75e",
    "75f",
    "78a",
    "78b",
    "78c",
    "78d",
    "78e",
    "78f",
    "79a",
    "79b",
    "79c",
    "79d",
    "79e"
   ]
  },
  {
   "id": "formula_general",
   "titol": "Segon grau: fórmula i discriminant",
   "descripcio": "Fórmula general i nombre de solucions segons el discriminant.",
   "items": [
    "351a",
    "351b",
    "80a",
    "80b",
    "80c",
    "80d",
    "80e",
    "80f",
    "80g",
    "81a",
    "81b",
    "81c",
    "81d",
    "81e",
    "81f",
    "81g"
   ]
  },
  {
   "id": "factoritzacio",
   "titol": "Segon grau: factor comú i factorització",
   "descripcio": "Equacions incompletes, ja factoritzades i que cal reordenar.",
   "items": [
    "352a",
    "352b",
    "82a",
    "82b",
    "82c",
    "82d",
    "82e",
    "82f",
    "82g",
    "82h",
    "82i",
    "83a",
    "83b",
    "83c",
    "83d",
    "83e",
    "83f",
    "84a",
    "84b",
    "84c",
    "84d",
    "84e",
    "84f",
    "84g"
   ]
  },
  {
   "id": "sistemes",
   "titol": "Sistemes d'equacions",
   "descripcio": "Substitució, igualació i reducció, amb denominadors i parèntesis.",
   "items": [
    "353a",
    "353b",
    "85a",
    "85b",
    "85c",
    "85d",
    "85e",
    "85f",
    "85g",
    "85h",
    "86a",
    "86b",
    "86c",
    "86d",
    "86e",
    "86f",
    "88a",
    "88b",
    "88c",
    "88d",
    "88e",
    "88f",
    "89a",
    "89b",
    "89c",
    "89d",
    "87"
   ]
  },
  {
   "id": "problemes",
   "titol": "Problemes amb equacions i sistemes",
   "descripcio": "Problemes d'edats, nombres, preus i geometria que es plantegen amb una equació o un sistema.",
   "items": [
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "100"
   ],
   "avancat": true
  }
 ],
 "errors": {
  "ARREL_OBLIDADA": "T'has quedat amb el quadrat (o el cub) de la incògnita. De $x^2=k$ encara falta l'arrel per arribar a $x$: comprova sempre quina de les dues quantitats et demanen.",
  "DESPLACAMENT_INDEX": "Revisa a partir de quin valor de $n$ comences a substituir, o quin exponent li correspon: t'has desplaçat una posició.",
  "DIVISIO_QUOCIENT_RESIDU_CANVIATS": "Has intercanviat el quocient i el residu: el quocient és el polinomi que queda a la fila de baix (llevat de l'últim terme), i el residu és l'últim número, una constant.",
  "EXPONENT_MULTIPLICAT": "L'exponent que dona l'enunciat s'ha de fer servir tal qual, no multiplicat per un altre nombre.",
  "EXPONENT_SENSE_DESPLACAR": "T'has deixat pel camí una part de l'exponent: si l'enunciat diu $n+2$ (o similar), cal fer servir aquest exponent complet, no només la $n$.",
  "FACTOR_COMU_INCOMPLET": "No has tret tot el factor comú possible: revisa si encara hi ha algun nombre o alguna $x$ que es repeteixi a tots els termes.",
  "ORDRE_MULTIPLICACIO_DIVISIO": "La divisió i la multiplicació tenen la mateixa prioritat i es fan d'esquerra a dreta: no es pot agrupar la multiplicació primer perquè \"queda més bé\".",
  "ORDRE_RESTA": "Has restat en l'ordre equivocat: revisa quin terme ha d'anar primer.",
  "PROGRESSIO_INVENTADA": "El terme s'ha de calcular seguint estrictament la regla que defineix la successió (el terme general o la relació de recurrència), no un patró aproximat o inventat.",
  "SIGNE_FINAL": "El resultat té el signe canviat. Revisa quin dels dos termes és més gran en valor absolut.",
  "SIGNE_QUOCIENT": "Revisa la regla dels signes del quocient: signes diferents donen resultat negatiu.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau.",
  "VEREDICTE_INVERTIT": "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del correcte: torna a comprovar la condició amb els valors concrets de l'enunciat."
 },
 "items": [
  {
   "id": "90",
   "ex": 90,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Troba dos nombres consecutius, sabent que la diferència dels seus quadrats és 567.",
   "opcions": [
    "$282$ i $283$",
    "$283$ i $284$",
    "$283$ i $285$",
    "$567$ i $568$"
   ],
   "pistes": [
    "Anomena $x$ el primer nombre; el consecutiu és $x+1$.",
    "Planteja l'equació $(x+1)^2-x^2=567$ i observa que el terme $x^2$ es cancel·la en desenvolupar-la."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJDb21wcm92YS1obzogJDI4M14yLTI4Ml4yPTE2MVxcLDg0NS03OVxcLDUyNCQuLi4gbWlsbG9yIHRvcm5hIGEgcGxhbnRlamFyIGwnZXF1YWNpw7MgJCh4KzEpXjIteF4yPTU2NyQgaSByZXNvbC1sYSBkZXMgZGUgemVyby4iLCAiIiwgIlwiQ29uc2VjdXRpdXNcIiB2b2wgZGlyIHF1ZSBkaWZlcmVpeGVuIGVuICQxJCwgbm8gZW4gJDIkOiBzaSB1biDDqXMgJHgkLCBsJ2FsdHJlIMOpcyAkeCsxJC4iLCAiRWwgJDU2NyQgw6lzIGxhIGRpZmVyw6huY2lhIGRlIHF1YWRyYXRzIHF1ZSBkb25hIGwnZW51bmNpYXQsIG5vIHVuIGRlbHMgZG9zIG5vbWJyZXMgcXVlIGJ1c3F1ZXMuIl0sICJlcnIiOiBbIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiIiwgIkRFU1BMQUNBTUVOVF9JTkRFWCIsICJQUk9HUkVTU0lPX0lOVkVOVEFEQSJdLCAicmVzIjogWyIkKHgrMSleMi14XjI9NTY3IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgeF4yKzJ4KzEteF4yPTU2NyQiLCAiJDJ4KzE9NTY3IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgMng9NTY2IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgeD0yODMkIiwgIkVscyBkb3Mgbm9tYnJlcyBjb25zZWN1dGl1cyBzw7NuICQyODMkIGkgJDI4NCQuIl19"
  },
  {
   "id": "91",
   "ex": 91,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "El preu d'un anell i el seu estoig és de $10\\,200$ €, i l'anell val $10\\,000$ € més que l'estoig. Quin és el preu de cada article?",
   "opcions": [
    "L'anell val $10\\,100$ € i l'estoig, $10\\,000$ €",
    "L'anell val $10\\,100$ € i l'estoig, $100$ €",
    "L'anell val $5\\,100$ € i l'estoig, $5\\,100$ €",
    "L'anell val $10\\,000$ € i l'estoig, $200$ €"
   ],
   "pistes": [
    "Anomena $a$ el preu de l'anell i $e$ el de l'estoig, i planteja el sistema amb les dues condicions.",
    "Substitueix $a=e+10\\,000$ a la primera equació."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMYSBzdW1hIGRlbHMgZG9zIHByZXVzIGhhIGRlIGRvbmFyIGV4YWN0YW1lbnQgJDEwXFwsMjAwJCDigqw6IGNvbXByb3ZhLWhvIGFtYiBhcXVlc3RzIGRvcyB2YWxvcnMuIiwgIiIsICJMJ2VudW5jaWF0IGRpdSBxdWUgbCdhbmVsbCB2YWwgTcOJUyBxdWUgbCdlc3RvaWcgKHBlciAkMTBcXCwwMDAkIOKCrCksIG5vIHF1ZSB2YWxndWluIGVsIG1hdGVpeC4iLCAiQ29tcHJvdmEtaG8gYW1iIGxlcyBkdWVzIGNvbmRpY2lvbnM6ICQxMFxcLDAwMCsyMDA9MTBcXCwyMDAkIChoaSBxdWFkcmEpLCBwZXLDsiAkMTBcXCwwMDAtMjAwPTlcXCw4MDBcXG5lMTBcXCwwMDAkIChsYSBkaWZlcsOobmNpYSBubyDDqXMgbGEgcXVlIGRlbWFuYSBsJ2VudW5jaWF0KS4iXSwgImVyciI6IFsiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiLCAiVkVSRURJQ1RFX0lOVkVSVElUIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iXSwgInJlcyI6IFsiU2lzdGVtYTogJGErZT0xMFxcLDIwMCxcXHF1YWQgYT1lKzEwXFwsMDAwJCIsICJTdWJzdGl0dWludDogJChlKzEwXFwsMDAwKStlPTEwXFwsMjAwIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgMmU9MjAwIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgZT0xMDAkIiwgIiRhPTEwMCsxMFxcLDAwMD0xMFxcLDEwMCQiXX0="
  },
  {
   "id": "92",
   "ex": 92,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Una bodega va exportar al gener la meitat dels seus barrils i, al cap de dos mesos, un terç dels que li quedaven. Quants barrils tenia al començament si ara hi ha $40\\,000$ barrils?",
   "opcions": [
    "$60\\,000$ barrils",
    "$120\\,000$ barrils",
    "$180\\,000$ barrils",
    "$40\\,000$ barrils"
   ],
   "pistes": [
    "Anomena $B$ el nombre inicial de barrils. Després del gener en queden $\\frac{B}{2}$.",
    "Al cap de dos mesos n'exporta un terç DELS QUE LI QUEDAVEN: li'n queden els altres dos terços d'aquesta meitat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3Qgc2VyaWEgZWwgcmVzdWx0YXQgZGUgY29uc2lkZXJhciBub23DqXMgVU5BIGRlIGxlcyBkdWVzIGV4cG9ydGFjaW9uczsgbCdlbnVuY2lhdCBlbiBkZXNjcml1IGR1ZXMgc2VndWlkZXMuIiwgIiIsICJSZXZpc2EgcXVpbmEgZnJhY2Npw7MgbGkgcXVlZGEgZGVzcHLDqXMgZGUgbGVzIERVRVMgZXhwb3J0YWNpb25zIHNlZ3VpZGVzOiBsYSBtZWl0YXQsIGkgZGVzcHLDqXMgZG9zIHRlcsOnb3MgZCdhcXVlc3RhIG1laXRhdC4iLCAiJDQwXFwsMDAwJCDDqXMgZWwgbm9tYnJlIGRlIGJhcnJpbHMgQVJBLCBkZXNwcsOpcyBkZSBsZXMgZHVlcyBleHBvcnRhY2lvbnMsIG5vIGVsIG5vbWJyZSBpbmljaWFsIHF1ZSBlcyBkZW1hbmEuIl0sICJlcnIiOiBbIkVYUE9ORU5UX1NFTlNFX0RFU1BMQUNBUiIsICIiLCAiT1JEUkVfTVVMVElQTElDQUNJT19ESVZJU0lPIiwgIlBST0dSRVNTSU9fSU5WRU5UQURBIl0sICJyZXMiOiBbIkxpIHF1ZWRlbiAkXFxkZnJhY3tCfXsyfVxcY2RvdFxcZGZyYWN7Mn17M309XFxkZnJhY3tCfXszfSQiLCAiQ29tIHF1ZSBhcmEgaGkgaGEgJDQwXFwsMDAwJDogJFxcZGZyYWN7Qn17M309NDBcXCwwMDAkIiwgIiRCPTEyMFxcLDAwMCQgYmFycmlscyJdfQ=="
  },
  {
   "id": "93",
   "ex": 93,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "En Miquel té 4 anys més que el seu cosí Ignasi i, al cap de 3 anys, entre els dos sumaran 20 anys. Quants anys té cadascú?",
   "opcions": [
    "En Miquel té $10$ anys i l'Ignasi, $6$ anys",
    "En Miquel té $12$ anys i l'Ignasi, $8$ anys",
    "En Miquel té $8$ anys i l'Ignasi, $4$ anys",
    "En Miquel té $9$ anys i l'Ignasi, $5$ anys"
   ],
   "pistes": [
    "Anomena $m$ l'edat d'en Miquel i $i$ la de l'Ignasi. La primera condició dona $m=i+4$.",
    "La segona condició, \"al cap de 3 anys sumaran 20\", és $(m+3)+(i+3)=20$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJDb21wcm92YS1obzogZCdhcXXDrSBhIDMgYW55cyBzdW1hcmllbiAkMTMrOT0yMiQsIG5vICQyMCQ7IHJldmlzYSBsJ2VxdWFjacOzIHF1ZSBleHByZXNzYSBcImQnYXF1w60gYSAzIGFueXNcIi4iLCAiQ29tcHJvdmEgbGEgcHJpbWVyYSBjb25kaWNpw7M6ICQxMi04PTQkIChoaSBxdWFkcmEpLCBwZXLDsiByZXZpc2EgbGEgc2Vnb25hOiBkJ2FxdcOtIGEgMyBhbnlzIHN1bWFyaWVuICQxNSsxMT0yNiQsIG5vICQyMCQuIiwgIkNvbXByb3ZhLWhvOiBkJ2FxdcOtIGEgMyBhbnlzIHN1bWFyaWVuICQxMSs3PTE4JCwgbm8gJDIwJDsgcmV2aXNhIGVsIHBsYW50ZWphbWVudCBkZWwgc2lzdGVtYS4iLCAiIl0sICJlcnIiOiBbIkRFU1BMQUNBTUVOVF9JTkRFWCIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIlNJR05FX0ZJTkFMIiwgIiJdLCAicmVzIjogWyJTaXN0ZW1hOiAkbT1pKzQsXFxxdWFkIChtKzMpKyhpKzMpPTIwJCIsICJTdWJzdGl0dWludDogJChpKzQrMykrKGkrMyk9MjAgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAyaSsxMD0yMCQiLCAiJGk9NSQ7IHBlciB0YW50ICRtPTUrND05JCJdfQ=="
  },
  {
   "id": "94",
   "ex": 94,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Quina edat tinc ara si al cap de 12 anys tindré el triple de l'edat que tenia fa 6 anys?",
   "opcions": [
    "$9$ anys",
    "$15$ anys",
    "$21$ anys",
    "$30$ anys"
   ],
   "pistes": [
    "Anomena $e$ l'edat actual. \"Fa 6 anys\" és $e-6$; \"al cap de 12 anys\" és $e+12$.",
    "Planteja l'equació: $e+12=3(e-6)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJDb21wcm92YS1obzogZCdhcXXDrSBhIDEyIGFueXMgdGluZHJpYSAkMjEkLCBpIGZhIDYgYW55cyB0ZW5pYSAkMyQ7IGVsIHRyaXBsZSBkZSAkMyQgw6lzICQ5JCwgbm8gJDIxJC4iLCAiIiwgIkFxdWVzdGEgc2VyaWEgbCdlZGF0IGQnYXF1w60gYSAxMiBhbnlzIGFtYiBsYSByZXNwb3N0YSBjb3JyZWN0YSwgbm8gbCdlZGF0IEFDVFVBTCBxdWUgZGVtYW5hIGwnZW51bmNpYXQuIiwgIkNvbXByb3ZhLWhvOiBkJ2FxdcOtIGEgMTIgYW55cyB0aW5kcmlhICQ0MiQsIGkgZmEgNiBhbnlzIHRlbmlhICQyNCQ7IGVsIHRyaXBsZSBkZSAkMjQkIG5vIMOpcyAkNDIkLiJdLCAiZXJyIjogWyJERVNQTEFDQU1FTlRfSU5ERVgiLCAiIiwgIkVYUE9ORU5UX01VTFRJUExJQ0FUIiwgIk9SRFJFX1JFU1RBIl0sICJyZXMiOiBbIiRlKzEyPTMoZS02KSBcXDtcXExvbmdyaWdodGFycm93XFw7IGUrMTI9M2UtMTgkIiwgIiQxMisxOD0zZS1lIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgMzA9MmUkIiwgIiRlPTE1JCBhbnlzIl19"
  },
  {
   "id": "95",
   "ex": 95,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "En un triangle rectangle de 24 m de perímetre, la longitud d'un catet és igual als tres quarts de la longitud de l'altre. Troba'n les dimensions.",
   "opcions": [
    "Catets de $8$ m i $6$ m, i hipotenusa de $10$ m",
    "Catets de $10$ m i $7{,}5$ m, i hipotenusa de $6{,}5$ m",
    "Catets de $9$ m i $12$ m, i hipotenusa de $3$ m",
    "Catets de $8$ m i $6$ m, i hipotenusa de $16$ m"
   ],
   "pistes": [
    "Anomena $a$ el catet més llarg; l'altre val $\\frac{3}{4}a$. La hipotenusa és $\\sqrt{a^2+\\left(\\frac34a\\right)^2}$.",
    "Com que el perímetre és $24$, planteja $a+\\frac34a+\\sqrt{a^2+\\frac{9}{16}a^2}=24$ i simplifica l'arrel abans de resoldre."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgcGVyw61tZXRyZSBkJ2FxdWVzdGEgb3BjacOzIG5vIGRvbmEgJDI0JCBtICgkMTArN3ssfTUrNnssfTU9MjQkLCBzw60gcXVlIGhpIHF1YWRyYSBsYSBzdW1hLCBwZXLDsiBjb21wcm92YSBQaXTDoGdvcmVzOiAkMTBeMis3eyx9NV4yXFxuZTZ7LH01XjIkLCBhaXjDrSBxdWUgbm8gcG90IHNlciB1biB0cmlhbmdsZSByZWN0YW5nbGUgYW1iIGFxdWVzdHMgY29zdGF0cykuIiwgIkxhIGhpcG90ZW51c2EgaGEgZGUgc2VyIGVsIGNvc3RhdCBNw4lTIExMQVJHIGRlbCB0cmlhbmdsZSByZWN0YW5nbGUsIG1haSBlbCBtw6lzIGN1cnQ6IHJldmlzYSBxdWluIGRlbHMgdHJlcyB2YWxvcnMgc3VydCBkZSBsJ2FycmVsIHF1YWRyYWRhLiIsICJDb21wcm92YSBwZXIgUGl0w6Bnb3JlczogJDheMis2XjI9NjQrMzY9MTAwPTEwXjIkLCBubyAkMTZeMiQ7IHJldmlzYSBlbCBjw6BsY3VsIGRlIGwnYXJyZWwgcXVhZHJhZGEgZmluYWwuIl0sICJlcnIiOiBbIiIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIlZFUkVESUNURV9JTlZFUlRJVCIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIl0sICJyZXMiOiBbIkRpbnMgbCdhcnJlbDogJGFeMitcXGRmcmFjezl9ezE2fWFeMj1cXGRmcmFjezI1fXsxNn1hXjIkLCBpIGNvbSBxdWUgJGE+MCQ6ICRcXHNxcnR7XFxkZnJhY3syNX17MTZ9YV4yfT1cXGRmcmFjezV9ezR9YSQiLCAiTCdlcXVhY2nDsyBxdWVkYSAkYStcXGRmcmFjMzRhK1xcZGZyYWM1NGE9MjQgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAzYT0yNCBcXDtcXExvbmdyaWdodGFycm93XFw7IGE9OCQiLCAiQ2F0ZXQgY3VydDogJFxcZGZyYWMzNFxcY2RvdDg9NiQgbTsgaGlwb3RlbnVzYTogJFxcZGZyYWM1NFxcY2RvdDg9MTAkIG0iXX0="
  },
  {
   "id": "96",
   "ex": 96,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Per enrajolar una sala de 8 m de llarg per 6 m d'ample s'han fet servir 300 rajoles quadrades. Quant mesura el costat de les rajoles?",
   "opcions": [
    "$4$ m de costat",
    "$0{,}16$ m de costat",
    "$1{,}25$ m de costat",
    "$0{,}4$ m (és a dir, $40$ cm) de costat"
   ],
   "pistes": [
    "La superfície de la sala és $8\\cdot6=48$ m$^2$. Si $L$ és el costat d'una rajola, la seva àrea és $L^2$.",
    "Com que se n'han fet servir $300$ per cobrir tota la sala: $300\\cdot L^2=48$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJDb21wcm92YS1obzogdW5hIHJham9sYSBkZSAkNCQgbSBkZSBjb3N0YXQgdGluZHJpYSAkMTYkIG0kXjIkLCBtb2x0IG3DqXMgZ3JhbiBxdWUgdG90YSBsYSBzYWxhOyByZXZpc2EgbCdlcXVhY2nDsyAkMzAwXFxjZG90IExeMj00OCQuIiwgIkFxdWVzdCBzZXJpYSBlbCB2YWxvciBkZSAkTF4yJCAobCfDoHJlYSBkJ3VuYSByYWpvbGEpLCBubyBkZSAkTCQgKGVsIGNvc3RhdCk6IGVuY2FyYSBmYWx0YSBmZXIgbCdhcnJlbCBxdWFkcmFkYS4iLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZGUgZGl2aWRpciAkMzAwJCBlbnRyZSAkNDgkIGVubGxvYyBkZSAkNDgkIGVudHJlICQzMDAkIGRpbnMgZGUgbCdlcXVhY2nDsyAkMzAwXFxjZG90IExeMj00OCQuIiwgIiJdLCAiZXJyIjogWyJPUkRSRV9NVUxUSVBMSUNBQ0lPX0RJVklTSU8iLCAiQVJSRUxfT0JMSURBREEiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiIl0sICJyZXMiOiBbIiQzMDBcXGNkb3QgTF4yPTQ4IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgTF4yPVxcZGZyYWN7NDh9ezMwMH09XFxkZnJhY3s0fXsyNX0kIiwgIiRMPVxcc3FydHtcXGRmcmFjezR9ezI1fX09XFxkZnJhY3syfXs1fT0weyx9NCQgbSJdfQ=="
  },
  {
   "id": "97",
   "ex": 97,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "En Pau té 8 anys i la seva germana, 2 anys. Al cap de quants anys l'edat d'en Pau serà el doble que la de la seva germana?",
   "opcions": [
    "D'aquí a $4$ anys",
    "D'aquí a $6$ anys",
    "Ara mateix (0 anys)",
    "D'aquí a $2$ anys"
   ],
   "pistes": [
    "Anomena $x$ els anys que han de passar. En Pau tindrà $8+x$ anys, i la germana, $2+x$.",
    "Planteja l'equació \"el doble\": $8+x=2(2+x)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQ29tcHJvdmEtaG86IGQnYXF1w60gYSA2IGFueXMgZW4gUGF1IHRpbmRyaWEgJDE0JCBpIGxhIGdlcm1hbmEgJDgkOyAkMTQkIG5vIMOpcyBlbCBkb2JsZSBkZSAkOCQuIiwgIkFyYSBlbiBQYXUgdMOpICQ4JCBpIGxhIGdlcm1hbmEgJDIkOiAkOCQgw6lzIGVsIHF1w6BkcnVwbGUgZGUgJDIkLCBubyBlbCBkb2JsZTsgY2FsIHF1ZSBwYXNzaSB0ZW1wcyBwZXJxdcOoIGxhIHByb3BvcmNpw7MgY2FudmnDryBjYXAgYWwgZG9ibGUuIiwgIkNvbXByb3ZhLWhvOiBkJ2FxdcOtIGEgMiBhbnlzIGVuIFBhdSB0aW5kcmlhICQxMCQgaSBsYSBnZXJtYW5hICQ0JDsgJDEwJCBubyDDqXMgZWwgZG9ibGUgZGUgJDQkLiJdLCAiZXJyIjogWyIiLCAiT1JEUkVfUkVTVEEiLCAiVkVSRURJQ1RFX0lOVkVSVElUIiwgIlBST0dSRVNTSU9fSU5WRU5UQURBIl0sICJyZXMiOiBbIiQ4K3g9MigyK3gpIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgOCt4PTQrMngkIiwgIiQ4LTQ9MngteCQiLCAiJHg9NCQgYW55cyJdfQ=="
  },
  {
   "id": "98",
   "ex": 98,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "En Tomàs és 5 anys més gran que l'Elena i, fa 10 anys, l'edat d'en Tomàs era el doble de l'edat de l'Elena. Quina edat té en Tomàs?",
   "opcions": [
    "L'edat d'en Tomàs no es pot determinar amb aquestes dades",
    "En Tomàs té $25$ anys (i l'Elena, $20$)",
    "En Tomàs té $20$ anys (i l'Elena, $15$)",
    "En Tomàs té $15$ anys (i l'Elena, $10$)"
   ],
   "pistes": [
    "Anomena $t$ l'edat d'en Tomàs i $e$ la de l'Elena. La primera condició dona $t=e+5$.",
    "\"Fa 10 anys\" és $t-10$ i $e-10$; la segona condició diu que el primer és el doble del segon: $t-10=2(e-10)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBzaXN0ZW1hIGRlIGR1ZXMgZXF1YWNpb25zIChkaWZlcsOobmNpYSBkJ2VkYXRzIGkgcmVsYWNpw7MgXCJmYSAxMCBhbnlzXCIpIHTDqSBzb2x1Y2nDsyDDum5pY2E6IG5vIGNhbCBkZXNjYXJ0YXIgZWwgcHJvYmxlbWEuIiwgIkNvbXByb3ZhIGxhIHNlZ29uYSBjb25kaWNpw7M6IGZhIDEwIGFueXMgZW4gVG9tw6BzIHRlbmlhICQxNSQgaSBsJ0VsZW5hICQxMCQ7ICQxNSQgbm8gw6lzIGVsIGRvYmxlIGRlICQxMCQuIiwgIiIsICJDb21wcm92YSBsYSBzZWdvbmEgY29uZGljacOzOiBmYSAxMCBhbnlzIGVuIFRvbcOgcyB0ZW5pYSAkNSQgaSBsJ0VsZW5hICQwJDsgJDUkIG5vIMOpcyBlbCBkb2JsZSBkZSAkMCQgKGkgYSBtw6lzICQwJCBhbnlzIGZhIDEwIGFueXMgbm8gdMOpIHNlbnRpdCBhbWIgYXF1ZXN0ZXMgZGFkZXMpLiJdLCAiZXJyIjogWyJQUk9HUkVTU0lPX0lOVkVOVEFEQSIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIiIsICJERVNQTEFDQU1FTlRfSU5ERVgiXSwgInJlcyI6IFsiU2lzdGVtYTogJHQ9ZSs1LFxccXVhZCB0LTEwPTIoZS0xMCkkIiwgIlN1YnN0aXR1aW50OiAkKGUrNSktMTA9MihlLTEwKSBcXDtcXExvbmdyaWdodGFycm93XFw7IGUtNT0yZS0yMCQiLCAiJC01KzIwPTJlLWUgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyBlPTE1JDsgcGVyIHRhbnQgJHQ9MTUrNT0yMCQiXX0="
  },
  {
   "id": "99",
   "ex": 99,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Canviem el valor de diverses monedes d'1 cèntim d'euro per monedes de 5 cèntims, amb la qual cosa obtenim 60 monedes menys. Quantes monedes hi ha de cada classe?",
   "opcions": [
    "$60$ monedes d'1 cèntim, que es canvien per $12$ monedes de $5$ cèntims",
    "$100$ monedes d'1 cèntim, que es canvien per $20$ monedes de $5$ cèntims",
    "$75$ monedes d'1 cèntim, que es canvien per $15$ monedes de $5$ cèntims",
    "$300$ monedes d'1 cèntim, que es canvien per $60$ monedes de $5$ cèntims"
   ],
   "pistes": [
    "Anomena $n$ el nombre de monedes d'1 cèntim. Cada $5$ monedes originals es converteixen en $1$ moneda nova, així que en queden $\\frac{n}{5}$.",
    "La diferència de nombre de monedes és $60$: $n-\\frac{n}{5}=60$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJDb21wcm92YS1obzogJDYwLTEyPTQ4JCwgbm8gJDYwJDsgYXF1ZXN0YSBwYXJlbGxhIG5vIGNvbXBsZWl4IGxhIGNvbmRpY2nDsyBkZSBcIjYwIG1vbmVkZXMgbWVueXNcIi4iLCAiQ29tcHJvdmEtaG86ICQxMDAtMjA9ODAkLCBubyAkNjAkOyBhcXVlc3RhIHBhcmVsbGEgbm8gY29tcGxlaXggbGEgY29uZGljacOzIGV4YWN0YSBkZSBsJ2VudW5jaWF0LiIsICIiLCAiQ29tcHJvdmEtaG86ICQzMDAtNjA9MjQwJCwgbm8gJDYwJDsgcmV2aXNhIGwnZXF1YWNpw7MgJG4tXFxmcmFje259ezV9PTYwJC4iXSwgImVyciI6IFsiUFJPR1JFU1NJT19JTlZFTlRBREEiLCAiUFJPR1JFU1NJT19JTlZFTlRBREEiLCAiIiwgIlNJR05FX1FVT0NJRU5UIl0sICJyZXMiOiBbIiRuLVxcZGZyYWN7bn17NX09NjAkOyBtdWx0aXBsaXF1ZW0gcGVyICQ1JDogJDVuLW49MzAwIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgNG49MzAwJCIsICIkbj03NSQgbW9uZWRlcyBkJzEgY8OobnRpbSIsICJFcyBjb252ZXJ0ZWl4ZW4gZW4gJFxcZGZyYWN7NzV9ezV9PTE1JCBtb25lZGVzIGRlICQ1JCBjw6hudGltcyJdfQ=="
  },
  {
   "id": "100",
   "ex": 100,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Un matrimoni i els seus tres fills viatgen en tren. Si el bitllet d'adult costa el doble que el de nen i el cost total dels bitllets és de 8,75 €, quant ha costat cada bitllet?",
   "opcions": [
    "Bitllet de nen: $0{,}875$ €; bitllet d'adult: $1{,}75$ €",
    "Bitllet de nen: $2{,}5$ €; bitllet d'adult: $1{,}25$ €",
    "Bitllet de nen: $1{,}75$ €; bitllet d'adult: $3{,}5$ €",
    "Bitllet de nen: $1{,}25$ €; bitllet d'adult: $2{,}5$ €"
   ],
   "pistes": [
    "Anomena $n$ el preu del bitllet de nen; el d'adult val $2n$. Hi ha $2$ adults i $3$ nens.",
    "Planteja el cost total: $2\\cdot(2n)+3\\cdot n=8{,}75$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJSZXZpc2EgcXVhbnRzIGFkdWx0cyBpIHF1YW50cyBuZW5zIGhpIGhhOiAyIGFkdWx0cyBpIDMgbmVucywgbm8gMSBkZSBjYWRhLCBlbiBsJ2VxdWFjacOzIGRlbCBjb3N0IHRvdGFsLiIsICJMJ2VudW5jaWF0IGRpdSBxdWUgZWwgYml0bGxldCBkJ0FEVUxUIGNvc3RhIGVsIGRvYmxlIHF1ZSBlbCBkZSBORU4sIG5vIGFsIHJldsOpczogcmV2aXNhIHF1aW4gZGVscyBkb3MgdmFsb3JzIMOpcyBtw6lzIGdyYW4uIiwgIkNvbXByb3ZhLWhvOiAkMlxcY2RvdCgyXFxjZG90MXssfTc1KSszXFxjZG90MXssfTc1PTcrNXssfTI1PTEyeyx9MjUkIOKCrCwgbm8gJDh7LH03NSQg4oKsLiIsICIiXSwgImVyciI6IFsiRkFDVE9SX0NPTVVfSU5DT01QTEVUIiwgIlZFUkVESUNURV9JTlZFUlRJVCIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIiJdLCAicmVzIjogWyIkMlxcY2RvdCgybikrM249OHssfTc1IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgNG4rM249OHssfTc1JCIsICIkN249OHssfTc1IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgbj0xeyx9MjUkIiwgIkVsIGJpdGxsZXQgZCdhZHVsdCB2YWwgZWwgZG9ibGU6ICQyXFxjZG90MXssfTI1PTJ7LH01JCDigqwiXX0="
  }
 ]
};
