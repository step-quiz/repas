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
  "ORDRE_RESTA": "Has restat en l'ordre equivocat: revisa quin terme ha d'anar primer.",
  "PROGRESSIO_INVENTADA": "El terme s'ha de calcular seguint estrictament la regla que defineix la successió (el terme general o la relació de recurrència), no un patró aproximat o inventat.",
  "RAONAMENT_ADDITIU": "Has passat d'una fracció a l'altra sumant. Dues fraccions són equivalents quan es passa d'una a l'altra MULTIPLICANT els dos termes pel mateix nombre.",
  "VEREDICTE_INVERTIT": "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del correcte: torna a comprovar la condició amb els valors concrets de l'enunciat."
 },
 "items": [
  {
   "id": "59a",
   "ex": 59,
   "ap": "a",
   "bloc": "aplicacions",
   "tipus": "B",
   "dif": 4,
   "encapcalament": "Donada la progressió $3,\\;6,\\;12,\\;24,\\dots$, digues si cada expressió n'és o no el terme general (o si l'afirmació és certa), i per què.",
   "enunciat": "$a_n = 3 + (n-1)\\cdot 3$",
   "opcions": [
    "No, perquè el primer terme hauria de ser $0$, no $3$.",
    "No, perquè aquesta fórmula és la d'una progressió ARITMÈTICA amb $d=3$: donaria $3,6,9,12\\dots$, que no coincideix amb la successió a partir del tercer terme.",
    "Sí, perquè totes les progressions es poden escriure amb aquesta forma.",
    "Sí, perquè el primer terme i el pas $3$ coincideixen amb la successió."
   ],
   "pistes": [
    "Comprova si la diferència entre termes consecutius de la successió és realment constant.",
    "$6-3=3$, però $12-6=6\\ne3$: la diferència no és constant, no és una progressió aritmètica."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBwcmltZXIgdGVybWUsICQzJCwgc8OtIHF1ZSDDqXMgY29ycmVjdGUuIEVsIHByb2JsZW1hIG5vIMOpcyBlbCBwcmltZXIgdGVybWUsIHNpbsOzIHF1ZSBsYSBzdWNjZXNzacOzIG5vIGNyZWl4IHN1bWFudCBzZW1wcmUgZWwgbWF0ZWl4ICgkMywgNiwgMTIsIDI0JCBubyB0w6kgZGlmZXLDqG5jaWEgY29uc3RhbnQpLiIsICIiLCAiQXF1ZXN0YSBmb3JtYSwgJGFfMSsobi0xKWQkLCBub23DqXMgc2VydmVpeCBwZXIgYSBwcm9ncmVzc2lvbnMgQVJJVE3DiFRJUVVFUyAoZGlmZXLDqG5jaWEgY29uc3RhbnQpLiBBcXXDrSBsYSBzdWNjZXNzacOzIG11bHRpcGxpY2Egc2VtcHJlIHBlbCBtYXRlaXggZmFjdG9yLCDDqXMgR0VPTcOIVFJJQ0EuIiwgIk5vbcOpcyBjb2luY2lkZWl4ZW4gZWxzIGRvcyBwcmltZXJzIHRlcm1lcyBwZXIgY2FzdWFsaXRhdCAoJDMkIGkgJDYkKTogYSBwYXJ0aXIgZGVsIHRlcmNlciB0ZXJtZSBhcXVlc3RhIGbDs3JtdWxhIGRvbmEgJDkkLCBtZW50cmUgcXVlIGxhIHN1Y2Nlc3Npw7MgY29udGludWEgYW1iICQxMiQuIl0sICJlcnIiOiBbIkNPTVBBUkFfVEVSTUVTIiwgIiIsICJQUk9HUkVTU0lPX0lOVkVOVEFEQSIsICJWRVJFRElDVEVfSU5WRVJUSVQiXSwgInJlcyI6IFsiJDYtMz0zJCwgcGVyw7IgJDEyLTY9NiQ6IGxhIGRpZmVyw6huY2lhIG5vIMOpcyBjb25zdGFudCIsICJQZXIgdGFudCAkYV9uPTMrKG4tMSlcXGNkb3QzJCBubyDDqXMgZWwgdGVybWUgZ2VuZXJhbCBkJ2FxdWVzdGEgc3VjY2Vzc2nDsyJdfQ=="
  },
  {
   "id": "59b",
   "ex": 59,
   "ap": "b",
   "bloc": "aplicacions",
   "tipus": "B",
   "dif": 4,
   "encapcalament": "Donada la progressió $3,\\;6,\\;12,\\;24,\\dots$, digues si cada expressió n'és o no el terme general (o si l'afirmació és certa), i per què.",
   "enunciat": "$a_n = 3\\cdot 3^{\\,n-1}$",
   "opcions": [
    "No, perquè les progressions geomètriques no es poden escriure amb potències.",
    "No, perquè fa servir raó $3$: donaria $3,9,27,81\\dots$, que no coincideix amb la successió a partir del segon terme.",
    "Sí, perquè el primer terme, $3$, coincideix amb l'enunciat.",
    "Sí, perquè $3$ apareix dues vegades a la fórmula, com pertoca a una progressió geomètrica."
   ],
   "pistes": [
    "Calcula la raó real de la successió dividint termes consecutius.",
    "$6:3=2$, no $3$: la raó d'aquesta successió és $2$, no $3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMZXMgcHJvZ3Jlc3Npb25zIGdlb23DqHRyaXF1ZXMgU8ONIHF1ZSBzJ2VzY3JpdWVuIGFtYiBwb3TDqG5jaWVzLCAkYV9uPWFfMVxcY2RvdCByXntcXCxuLTF9JDogZWwgcHJvYmxlbWEgbm8gw6lzIGxhIGZvcm1hLCDDqXMgcXVlIGFxdcOtIGxhIHJhw7Mgbm8gw6lzICQzJC4iLCAiIiwgIlF1ZSBjb2luY2lkZWl4aSBlbCBwcmltZXIgdGVybWUgbm8gw6lzIHN1ZmljaWVudDogY2FsIHF1ZSBUT1RTIGVscyB0ZXJtZXMgY29pbmNpZGVpeGluLCBpIGRlcyBkZWwgc2Vnb24gamEgbm8gaG8gZmFuICgkOVxcbmU2JCkuIiwgIlF1ZSBlbCAkMyQgYXBhcmVndWkgY29tIGEgZmFjdG9yIGkgY29tIGEgYmFzZSBubyBnYXJhbnRlaXggcXVlIGxhIHJhw7Mgc2lndWkgbGEgY29ycmVjdGE6IGNhbCBjb21wcm92YXItbGEgY2FsY3VsYW50IGVsIHF1b2NpZW50IHJlYWwgZW50cmUgdGVybWVzIGNvbnNlY3V0aXVzIGRlIGxhIHN1Y2Nlc3Npw7MuIl0sICJlcnIiOiBbIlZFUkVESUNURV9JTlZFUlRJVCIsICIiLCAiVkVSRURJQ1RFX0lOVkVSVElUIiwgIlJBT05BTUVOVF9BRERJVElVIl0sICJyZXMiOiBbIiQ2OjM9MiQsICQxMjo2PTIkLCAkMjQ6MTI9MiQ6IGxhIHJhw7MgcmVhbCDDqXMgJDIkLCBubyAkMyQiLCAiUGVyIHRhbnQgJGFfbj0zXFxjZG90M157XFwsbi0xfSQgbm8gw6lzIGVsIHRlcm1lIGdlbmVyYWwgZCdhcXVlc3RhIHN1Y2Nlc3Npw7MiXX0="
  },
  {
   "id": "59c",
   "ex": 59,
   "ap": "c",
   "bloc": "aplicacions",
   "tipus": "B",
   "dif": 4,
   "encapcalament": "Donada la progressió $3,\\;6,\\;12,\\;24,\\dots$, digues si cada expressió n'és o no el terme general (o si l'afirmació és certa), i per què.",
   "enunciat": "$a_n = 3\\cdot 2^{\\,n-1}$",
   "opcions": [
    "No, perquè l'exponent hauria de ser $n$, no $n-1$.",
    "Sí, perquè la successió té raó constant $r=2$ ($6:3=2$, $12:6=2$, $24:12=2$) i primer terme $a_1=3$: coincideix exactament.",
    "No, perquè la successió $3,6,12,24$ és aritmètica, no geomètrica.",
    "Sí, però només per als quatre primers termes."
   ],
   "pistes": [
    "Comprova la raó de la successió i compara-la amb l'exponent i el factor de la fórmula.",
    "$r=2$ i $a_1=3$: la fórmula $a_n=3\\cdot2^{\\,n-1}$ hi encaixa exactament."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMJ2V4cG9uZW50IFPDjSBxdWUgaGEgZGUgc2VyICRuLTEkOiBwZXIgJG49MSQgZG9uYSAkM1xcY2RvdDJeMD0zJCwgZWwgcHJpbWVyIHRlcm1lIGNvcnJlY3RlLiBBbWIgZXhwb25lbnQgJG4kIGRvbmFyaWEgJDNcXGNkb3QyXjE9NiQgcGVyIGFsIHByaW1lciB0ZXJtZSwgcXVlIHNlcmlhIGluY29ycmVjdGUuIiwgIiIsICJMYSBzdWNjZXNzacOzIMOpcyBHRU9Nw4hUUklDQSwgbm8gYXJpdG3DqHRpY2E6IGVsIHF1ZSBlcyBtYW50w6kgY29uc3RhbnQgw6lzIGVsIHF1b2NpZW50IGVudHJlIHRlcm1lcyBjb25zZWN1dGl1cyAoJHI9MiQpLCBubyBsYSBkaWZlcsOobmNpYS4iLCAiTGEgZsOzcm11bGEgdmFsIHBlciBhIFRPVFMgZWxzIHRlcm1lcywgbm8gbm9tw6lzIGVscyBxdWF0cmUgcHJpbWVyczogdW4gY29wIGNvbXByb3ZhZGEgbGEgcmHDsyBjb25zdGFudCwgZWwgdGVybWUgZ2VuZXJhbCAkYV9uPWFfMVxcY2RvdCByXntcXCxuLTF9JCBlcyBjb21wbGVpeCBzZW1wcmUuIl0sICJlcnIiOiBbIkRFU1BMQUNBTUVOVF9JTkRFWCIsICIiLCAiVkVSRURJQ1RFX0lOVkVSVElUIiwgIlZFUkVESUNURV9JTlZFUlRJVCJdLCAicmVzIjogWyIkNjozPTIkLCAkMTI6Nj0yJCwgJDI0OjEyPTIkOiByYcOzIGNvbnN0YW50LCAkcj0yJCIsICIkYV9uPWFfMVxcY2RvdCByXntcXCxuLTF9PTNcXGNkb3QyXntcXCxuLTF9JDogY29pbmNpZGVpeCBhbWIgYXF1ZXN0YSBleHByZXNzacOzIl19"
  },
  {
   "id": "59d",
   "ex": 59,
   "ap": "d",
   "bloc": "aplicacions",
   "tipus": "B",
   "dif": 4,
   "encapcalament": "Donada la progressió $3,\\;6,\\;12,\\;24,\\dots$, digues si cada expressió n'és o no el terme general (o si l'afirmació és certa), i per què.",
   "enunciat": "Algú afirma: «d'aquesta successió no se'n pot calcular el terme general». És cert?",
   "opcions": [
    "Cert: calen més de quatre termes per determinar el terme general amb seguretat.",
    "Fals: sí que es pot calcular, perquè la successió té raó constant $r=2$; és una progressió geomètrica amb terme general $a_n=3\\cdot2^{\\,n-1}$.",
    "Fals: es pot calcular, però només aproximadament.",
    "Cert: com que $3,6,12,24$ no és ni una progressió aritmètica ni geomètrica, no té terme general."
   ],
   "pistes": [
    "Comprova si la successió té una diferència o un quocient constant entre termes consecutius.",
    "$6:3=2$, $12:6=2$, $24:12=2$: raó constant, $r=2$, sí que es pot calcular el terme general."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBbWIgcXVhdHJlIHRlcm1lcyBqYSBuJ2hpIGhhIHByb3UgcGVyIGNvbXByb3ZhciBxdWUgbGEgcmHDsyDDqXMgY29uc3RhbnQgbGVzIHRyZXMgdmVnYWRlcyBwb3NzaWJsZXM6IG5vIGNhbGVuIG3DqXMgZGFkZXMuIiwgIiIsICJFcyBwb3QgY2FsY3VsYXIgZGUgbWFuZXJhIEVYQUNUQSwgbm8gYXByb3hpbWFkYTogZWwgdGVybWUgZ2VuZXJhbCAkYV9uPTNcXGNkb3QyXntcXCxuLTF9JCByZXByb2R1ZWl4IHRvdHMgZWxzIHRlcm1lcyBhbWIgcHJlY2lzacOzLiIsICJTw60gcXVlIMOpcyB1bmEgcHJvZ3Jlc3Npw7MgZ2VvbcOodHJpY2E6IGVsIHF1b2NpZW50IGVudHJlIHRlcm1lcyBjb25zZWN1dGl1cyDDqXMgY29uc3RhbnQsICRyPTIkICgkNjozPTIkLCAkMTI6Nj0yJCwgJDEyOjI0PTIkKS4iXSwgImVyciI6IFsiVkVSRURJQ1RFX0lOVkVSVElUIiwgIiIsICJWRVJFRElDVEVfSU5WRVJUSVQiLCAiVkVSRURJQ1RFX0lOVkVSVElUIl0sICJyZXMiOiBbIiQ2OjM9MiQsICQxMjo2PTIkLCAkMjQ6MTI9MiQ6IHJhw7MgY29uc3RhbnQsICRyPTIkIiwgIiRhX249YV8xXFxjZG90IHJee1xcLG4tMX09M1xcY2RvdDJee1xcLG4tMX0kOiBzw60gcXVlIGVzIHBvdCBjYWxjdWxhciJdfQ=="
  },
  {
   "id": "60",
   "ex": 60,
   "ap": "",
   "bloc": "aplicacions",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Un terme d'una progressió geomètrica val $3\\,720\\,087$. Si el primer terme és $7$ i la raó és $3$, de quin terme estem parlant?",
   "enunciat": "Terme d'una progressió geomètrica amb $a_1=7$, $r=3$ que val $3\\,720\\,087$",
   "opcions": [
    "$531441$",
    "$13$",
    "$12$",
    "$18$"
   ],
   "pistes": [
    "Iguala $a_n=7\\cdot3^{\\,n-1}$ a $3\\,720\\,087$ i aïlla la potència de $3$.",
    "$3^{\\,n-1}=3\\,720\\,087:7=531\\,441$. Comprova quina potència de $3$ dona aquest valor."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3Qgw6lzIGVsIHZhbG9yIGRlICRyXntuLTF9PTNeezEyfSQsIHVuIHBhcyBpbnRlcm1lZGkgZGVsIGPDoGxjdWw7IGVsIHF1ZSBlcyBkZW1hbmEgw6lzIGxhIHBvc2ljacOzICRuJCBxdWUgb2N1cGEgZWwgdGVybWUsIG5vIGFxdWVzdCB2YWxvci4iLCAiIiwgIiQzXnsxMn09NTMxXFwsNDQxJCAoZWwgcmVzdWx0YXQgZGUgZGl2aWRpciAkM1xcLDcyMFxcLDA4NyQgZW50cmUgJDckKSwgcGVyw7IgbCdleHBvbmVudCAkMTIkIGNvcnJlc3BvbiBhICRuLTEkLCBubyBhICRuJDogY2FsIHN1bWFyLWhpICQxJCBwZXIgdHJvYmFyICRuJC4iLCAiUmV2aXNhIGwnZXF1YWNpw7M6IGNhbCBhw69sbGFyICRuJCBkZSAkM157bi0xfT01MzFcXCw0NDEkIHRyb2JhbnQgcXVpbiBleHBvbmVudCBkb25hIGFxdWVzdCByZXN1bHRhdCwgbm8gc3VtYXIgZXhwb25lbnRzIGFyYml0cmFyaXMuIl0sICJlcnIiOiBbIkNPTVBBUkFfVEVSTUVTIiwgIiIsICJERVNQTEFDQU1FTlRfSU5ERVgiLCAiT1JEUkVfUkVTVEEiXSwgInJlcyI6IFsiJDdcXGNkb3QzXntcXCxuLTF9PTNcXCw3MjBcXCwwODdcXFJpZ2h0YXJyb3czXntcXCxuLTF9PTNcXCw3MjBcXCwwODc6Nz01MzFcXCw0NDEkIiwgIiQ1MzFcXCw0NDE9M157MTJ9JCwgcGVyIHRhbnQgJG4tMT0xMiQiLCAiJG49MTMkOiDDqXMgZWwgdHJldHrDqCB0ZXJtZSJdfQ=="
  },
  {
   "id": "61",
   "ex": 61,
   "ap": "",
   "bloc": "aplicacions",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Dos termes consecutius d'una progressió geomètrica valen $3$ i $4$. Esbrina quin lloc ocupen si $a_1=\\dfrac{27}{16}$.",
   "enunciat": "Posició de dos termes consecutius que valen $3$ i $4$, sabent que $a_1=\\dfrac{27}{16}$",
   "opcions": [
    "$a_1=3,\\;\\;a_2=4$",
    "$a_2=3,\\;\\;a_3=4$",
    "$a_3=3,\\;\\;a_4=4$",
    "$a_4=3,\\;\\;a_5=4$"
   ],
   "pistes": [
    "Primer troba la raó amb els dos termes coneguts, $3$ i $4$: $r=\\dfrac43$.",
    "Substitueix $a_n=\\dfrac{27}{16}\\cdot\\left(\\dfrac43\\right)^{n-1}$ per a $n=2,3,4\\dots$ fins trobar quan val $3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBwcmltZXIgdGVybWUgamEgw6lzIGNvbmVndXQsICRhXzE9XFxkZnJhY3syN317MTZ9JCwgcXVlIG5vIHZhbCAkMyQ6IGNhbCBidXNjYXIgZW4gUVVJTkEgcG9zaWNpw7MgYXBhcmVpeGVuIGVscyB2YWxvcnMgJDMkIGkgJDQkLCBubyBhc3N1bWlyIHF1ZSDDqXMgYWwgcHJpbmNpcGkuIiwgIlJldmlzYSBlbCBjw6BsY3VsIHN1YnN0aXR1aW50ICRuPTIkOiAkYV8yPVxcZGZyYWN7Mjd9ezE2fVxcY2RvdFxcZGZyYWM0Mz1cXGRmcmFjOTQkLCBxdWUgbm8gw6lzICQzJC4iLCAiIiwgIlJldmlzYSBlbCBjw6BsY3VsIHN1YnN0aXR1aW50ICRuPTQkOiAkYV80PVxcZGZyYWN7Mjd9ezE2fVxcY2RvdFxcbGVmdChcXGRmcmFjNDNcXHJpZ2h0KV4zPTQkLCBxdWUgamEgw6lzIGVsIHZhbG9yICQ0JCwgbm8gJDMkOiB0J2hhcyBhdmFuw6dhdCB1bmEgcG9zaWNpw7MuIl0sICJlcnIiOiBbIkNPTVBBUkFfVEVSTUVTIiwgIkRFU1BMQUNBTUVOVF9JTkRFWCIsICIiLCAiREVTUExBQ0FNRU5UX0lOREVYIl0sICJyZXMiOiBbIkVscyBkb3MgdGVybWVzIGNvbnNlY3V0aXVzIHRlbmVuIHJhw7MgJHI9XFxkZnJhYzQzJCAoZWwgcXVvY2llbnQgZW50cmUgZWxscykiLCAiJGFfMj1cXGRmcmFjezI3fXsxNn1cXGNkb3RcXGRmcmFjNDM9XFxkZnJhYzk0JCIsICIkYV8zPVxcZGZyYWN7Mjd9ezE2fVxcY2RvdFxcbGVmdChcXGRmcmFjNDNcXHJpZ2h0KV4yPTMkIiwgIiRhXzQ9XFxkZnJhY3syN317MTZ9XFxjZG90XFxsZWZ0KFxcZGZyYWM0M1xccmlnaHQpXjM9NCQiLCAiRWxzIHRlcm1lcyBxdWUgdmFsZW4gJDMkIGkgJDQkIG9jdXBlbiBsZXMgcG9zaWNpb25zICQzJCBpICQ0JCJdfQ=="
  }
 ]
};
