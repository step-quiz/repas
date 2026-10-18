/* Generat per tools/build.py — no editeu aquest fitxer a mà. */
window.FULL = {
 "full": 1,
 "titol": "Full 1 — Nombres enters, fraccions i decimals",
 "subtitol": "Operacions amb enters, divisibilitat, fraccions i pas de decimal a fracció generatriu.",
 "blocs": [
  {
   "id": "enters",
   "titol": "Nombres enters",
   "descripcio": "Operacions combinades, regla dels signes i jerarquia.",
   "items": [
    "341a",
    "341b",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "2a",
    "2b",
    "2c",
    "2d",
    "3a",
    "3b",
    "3c",
    "3d",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e"
   ]
  },
  {
   "id": "divisibilitat",
   "titol": "Divisibilitat",
   "descripcio": "Descomposició factorial, m.c.d., m.c.m. i problemes.",
   "items": [
    "340a",
    "340b",
    "340c",
    "340d",
    "5a",
    "5b",
    "5c",
    "6a",
    "6b",
    "6c",
    "7a",
    "7b",
    "7c",
    "9a",
    "9b",
    "9c",
    "9d",
    "10a",
    "10b",
    "10c",
    "10d",
    "8",
    "11",
    "12a",
    "12b",
    "13",
    "14",
    "15",
    "16",
    "17"
   ]
  },
  {
   "id": "fraccions",
   "titol": "Fraccions",
   "descripcio": "Equivalència, simplificació i operacions combinades.",
   "items": [
    "342a",
    "342b",
    "18a",
    "18b",
    "18c",
    "18d",
    "18e",
    "18f",
    "20a",
    "20b",
    "20c",
    "22a",
    "22b",
    "22c",
    "22d",
    "22e",
    "22f",
    "19a",
    "19b",
    "19c",
    "19d",
    "21a",
    "21b",
    "21c",
    "21d",
    "21e",
    "21f",
    "23a",
    "23b",
    "23c",
    "23d",
    "24a",
    "24b",
    "24c",
    "24d",
    "24e",
    "24f",
    "25a",
    "25b",
    "25c",
    "25d",
    "25e",
    "25f"
   ]
  },
  {
   "id": "decimals",
   "titol": "Decimals",
   "descripcio": "Tipus de decimal i fracció generatriu.",
   "items": [
    "343a",
    "343b",
    "26a",
    "26b",
    "26c",
    "26d",
    "26e",
    "26f",
    "27a",
    "27b",
    "27c",
    "27d",
    "27e",
    "27f",
    "27g",
    "27h",
    "28a",
    "28b",
    "28c",
    "28d",
    "28e",
    "28f",
    "28g",
    "28h",
    "28i",
    "28j",
    "28k",
    "28l",
    "29a",
    "29b",
    "29c",
    "29d",
    "29e",
    "29f",
    "30a",
    "30b",
    "30c",
    "30d",
    "30e",
    "30f",
    "31a",
    "31b",
    "31c",
    "31d",
    "31e",
    "31f",
    "32a",
    "32b",
    "32c",
    "32d",
    "33a",
    "33b",
    "33c",
    "33d",
    "33e",
    "34"
   ]
  }
 ],
 "errors": {
  "CAP_ERROR": "Has dit que la cadena és correcta, però hi ha un pas equivocat. Que el resultat final surti bé no ho garanteix: dos errors es poden compensar. Comprova cada igualtat per separat.",
  "FORMULA_INVERTIDA": "Has dividit on la fórmula multiplica (o al revés). Escriu la fórmula sencera abans de substituir-hi els valors.",
  "JERARQUIA": "Primer les multiplicacions i divisions; després, les sumes i restes.",
  "ORDRE_RESTA": "Has restat en l'ordre equivocat: revisa quin terme ha d'anar primer.",
  "PRODUCTE_PER_SUMA": "Has sumat on tocava multiplicar (o al revés). Torna a llegir quina operació es fa sobre les dades.",
  "RESTA_NEGATIU": "Restar un nombre negatiu és sumar-ne l'oposat: $a-(-b) = a+b$.",
  "SIGNE_PRODUCTE": "Revisa la regla dels signes del producte: signes diferents donen resultat negatiu.",
  "SIGNE_QUOCIENT": "Revisa la regla dels signes del quocient: signes diferents donen resultat negatiu.",
  "SIGNE_SUMA": "Revisa el signe del terme que se suma: sumar un negatiu fa disminuir."
 },
 "items": [
  {
   "id": "341a",
   "ex": 341,
   "ap": "a",
   "bloc": "enters",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula aquest producte o quocient de nombres enters aplicant-hi la regla dels signes.",
   "enunciat": "$(-4)\\cdot(+5)$",
   "opcions": [
    "$-\\dfrac{4}{5}$",
    "$1$",
    "$20$",
    "$-20$"
   ],
   "pistes": [
    "Primer el signe: menys per més, quin signe dona?",
    "Després el número: $4\\cdot5$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgZGl2aWRpdC4gRWwgcHVudCB2b2wgZGlyIG11bHRpcGxpY2FyOiAkNFxcY2RvdDU9MjAkLCBhbWIgZWwgc2lnbmUgcXVlIGRpdSBsYSByZWdsYS4iLCAiSGFzIHN1bWF0ICQoLTQpKygrNSkkLiBFbCBwdW50IHZvbCBkaXIgTVVMVElQTElDQVIuIiwgIk1lbnlzIHBlciBtw6lzIGRvbmEgTUVOWVM6IGVscyBkb3MgZmFjdG9ycyB0ZW5lbiBzaWduZXMgZGlmZXJlbnRzLiIsICIiXSwgImVyciI6IFsiRk9STVVMQV9JTlZFUlRJREEiLCAiUFJPRFVDVEVfUEVSX1NVTUEiLCAiU0lHTkVfUFJPRFVDVEUiLCAiIl0sICJyZXMiOiBbIlNpZ25lcyBkaWZlcmVudHM6IGVsIHJlc3VsdGF0IMOpcyBuZWdhdGl1LiAkNFxcY2RvdDU9MjAkLiIsICIkKC00KVxcY2RvdCgrNSk9LTIwJCJdfQ=="
  },
  {
   "id": "341b",
   "ex": 341,
   "ap": "b",
   "bloc": "enters",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula aquest producte o quocient de nombres enters aplicant-hi la regla dels signes.",
   "enunciat": "$(-18):(-3)$",
   "opcions": [
    "$6$",
    "$54$",
    "$-6$",
    "$-21$"
   ],
   "pistes": [
    "Primer el signe: menys entre menys, quin signe dona?",
    "Després el número: $18:3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIG11bHRpcGxpY2F0LiBFbHMgZG9zIHB1bnRzIHZvbGVuIGRpciBkaXZpZGlyOiAkMTg6MyQuIiwgIk1lbnlzIGVudHJlIG1lbnlzIGRvbmEgTcOJUzogZWxzIGRvcyBub21icmVzIHRlbmVuIGVsIG1hdGVpeCBzaWduZS4iLCAiSGFzIHN1bWF0ICQoLTE4KSsoLTMpJC4gRWxzIGRvcyBwdW50cyB2b2xlbiBkaXIgRElWSURJUi4iXSwgImVyciI6IFsiIiwgIkZPUk1VTEFfSU5WRVJUSURBIiwgIlNJR05FX1FVT0NJRU5UIiwgIlBST0RVQ1RFX1BFUl9TVU1BIl0sICJyZXMiOiBbIlNpZ25lcyBpZ3VhbHM6IGVsIHJlc3VsdGF0IMOpcyBwb3NpdGl1LiAkMTg6Mz02JC4iLCAiJCgtMTgpOigtMyk9KzYkIl19"
  },
  {
   "id": "1a",
   "ex": 1,
   "ap": "a",
   "bloc": "enters",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les operacions següents.",
   "enunciat": "$(-13) \\cdot (+3) - (-12) \\cdot (+7)$",
   "opcions": [
    "$123$",
    "$45$",
    "$-45$",
    "$-123$"
   ],
   "pistes": [
    "Fes primer els dos productes per separat i escriu-los amb el seu signe.",
    "Et queda $-39 - (-84)$. Restar un nombre negatiu és sumar el seu oposat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyIkKC0xMylcXGNkb3QoKzMpJCBubyDDqXMgJCszOSQ6IGVsIHByb2R1Y3RlIGQndW4gbmVnYXRpdSBwZXIgdW4gcG9zaXRpdSDDqXMgbmVnYXRpdS4iLCAiIiwgIkhhcyBhcGxpY2F0IGxhIHJlZ2xhIGRlbHMgc2lnbmVzIGEgbCdpbnJldsOpcyBhbHMgZG9zIHByb2R1Y3RlcyBhbGhvcmEuIiwgIkhhcyByZXN0YXQgJDg0JCBlbiBjb21wdGVzIGRlIHN1bWFyLWxvLiBFbCBzZWdvbiBwcm9kdWN0ZSDDqXMgJC04NCQsIGkgcmVzdGFyLWxvLCAkLSgtODQpJCwgdm9sIGRpciBzdW1hciAkODQkLiJdLCAiZXJyIjogWyJTSUdORV9QUk9EVUNURSIsICIiLCAiU0lHTkVTX0lOVkVSVElUUyIsICJSRVNUQV9QUk9EVUNURV9ORUdBVElVIl0sICJyZXMiOiBbIiQoLTEzKVxcY2RvdCgrMykgPSAtMzkkIFxccXVhZCBpIFxccXVhZCAkKC0xMilcXGNkb3QoKzcpID0gLTg0JCIsICIkLTM5IC0gKC04NCkgPSAtMzkgKyA4NCQiLCAiJD0gNDUkIl19"
  },
  {
   "id": "1b",
   "ex": 1,
   "ap": "b",
   "bloc": "enters",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les operacions següents.",
   "enunciat": "$(-3) \\cdot (-12) - (-15) \\cdot (-4)$",
   "opcions": [
    "$-96$",
    "$24$",
    "$-24$",
    "$96$"
   ],
   "pistes": [
    "Els dos productes tenen els dos factors negatius: quin signe tindran?",
    "Queda $36 - 60$, i $60$ és més gran que $36$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyIkKC0zKVxcY2RvdCgtMTIpJCDDqXMgJCszNiQsIG5vICQtMzYkOiBlbHMgZG9zIGZhY3RvcnMgc8OzbiBuZWdhdGl1cy4iLCAiSGFzIHJlc3RhdCBhIGwnaW5yZXbDqXMgKCQ2MCAtIDM2JCkuIExhIHJlc3RhIG5vIMOpcyBjb21tdXRhdGl2YS4iLCAiIiwgIkhhcyBmZXQgJCgtMTUpXFxjZG90KC00KSA9IC02MCQuIE1lbnlzIHBlciBtZW55cyBkw7NuYSBtw6lzOiDDqXMgJCs2MCQsIGkgY2FsIHJlc3Rhci1sby4iXSwgImVyciI6IFsiTUVOWVNfUEVSX01FTllTX1BSSU1FUiIsICJPUkRSRV9SRVNUQSIsICIiLCAiTUVOWVNfUEVSX01FTllTIl0sICJyZXMiOiBbIiQoLTMpXFxjZG90KC0xMikgPSArMzYkIFxccXVhZCBpIFxccXVhZCAkKC0xNSlcXGNkb3QoLTQpID0gKzYwJCIsICIkMzYgLSA2MCA9IC0yNCQiXX0="
  },
  {
   "id": "1c",
   "ex": 1,
   "ap": "c",
   "bloc": "enters",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les operacions següents.",
   "enunciat": "$(-35) : (-7) + (-54) : (+9)$",
   "opcions": [
    "$11$",
    "$-11$",
    "$-1$",
    "$1$"
   ],
   "pistes": [
    "La regla dels signes val igual per a la divisió que per al producte.",
    "Et queda $5 + (-6)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyIkKC01NCk6KCs5KSQgw6lzICQtNiQ6IHNpZ25lcyBkaWZlcmVudHMgZG9uZW4gcXVvY2llbnQgbmVnYXRpdS4iLCAiJCgtMzUpOigtNykkIMOpcyAkKzUkOiBkb3MgbmVnYXRpdXMgZG9uZW4gcXVvY2llbnQgcG9zaXRpdS4iLCAiIiwgIkhhcyBjYWxjdWxhdCAkNi01JC4gU3VtYSAkNSArICgtNikkOiBxdWFuIGVsIG5lZ2F0aXUgw6lzIG3DqXMgZ3JhbiBlbiB2YWxvciBhYnNvbHV0LCBlbCByZXN1bHRhdCDDqXMgbmVnYXRpdS4iXSwgImVyciI6IFsiU0lHTkVfUVVPQ0lFTlQiLCAiTUVOWVNfRU5UUkVfTUVOWVMiLCAiIiwgIlNVTUFfVkFMT1JTX0FCU09MVVRTIl0sICJyZXMiOiBbIiQoLTM1KTooLTcpID0gKzUkIFxccXVhZCBpIFxccXVhZCAkKC01NCk6KCs5KSA9IC02JCIsICIkNSArICgtNikgPSAtMSQiXX0="
  },
  {
   "id": "1d",
   "ex": 1,
   "ap": "d",
   "bloc": "enters",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les operacions següents.",
   "enunciat": "$[(-25) + 5 - (-4)] : (-8)$",
   "opcions": [
    "$3$",
    "$2$",
    "$-2$",
    "$-3$"
   ],
   "pistes": [
    "Resol primer tot el que hi ha dins del claudàtor.",
    "Dins queda $-25 + 5 + 4 = -16$, i després divideix entre $-8$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJEaW5zIGRlbCBjbGF1ZMOgdG9yLCAkLSgtNCkkIMOpcyAkKzQkLCBubyAkLTQkLiIsICIiLCAiJC0xNiQgZGl2aWRpdCBlbnRyZSAkLTgkIGTDs25hICQrMiQ6IGRvcyBuZWdhdGl1cywgcXVvY2llbnQgcG9zaXRpdS4iLCAiRG9zIGVycm9ycyBhbGhvcmE6ICQtKC00KSQgw6lzICQrNCQsIGkgdW4gbmVnYXRpdSBlbnRyZSB1biBuZWdhdGl1IGTDs25hIHBvc2l0aXUuIl0sICJlcnIiOiBbIlJFU1RBX05FR0FUSVUiLCAiIiwgIk1FTllTX0VOVFJFX01FTllTIiwgIlJFU1RBX05FR0FUSVVfSV9RVU9DSUVOVCJdLCAicmVzIjogWyIkWygtMjUpICsgNSAtICgtNCldID0gLTI1ICsgNSArIDQgPSAtMTYkIiwgIiQoLTE2KSA6ICgtOCkgPSAyJCJdfQ=="
  },
  {
   "id": "1e",
   "ex": 1,
   "ap": "e",
   "bloc": "enters",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les operacions següents.",
   "enunciat": "$[(-16) + (-9) + 5] : (-4)$",
   "opcions": [
    "$5$",
    "$-5$",
    "$\\dfrac{15}{2}$",
    "$\\dfrac{1}{2}$"
   ],
   "pistes": [
    "Suma primer els tres nombres del claudàtor respectant-ne els signes.",
    "Dins queda $-20$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJC0yMCQgZW50cmUgJC00JCBkw7NuYSAkKzUkLCBubyAkLTUkLiIsICJFbCAkKzUkIG5vIMOpcyBuZWdhdGl1OiBub23DqXMgaG8gc8OzbiBlbCAkLTE2JCBpIGVsICQtOSQuIiwgIiQrKC05KSQgdm9sIGRpciByZXN0YXIgJDkkLCBubyBzdW1hci1sby4iXSwgImVyciI6IFsiIiwgIk1FTllTX0VOVFJFX01FTllTIiwgIlNJR05FX0VOR0xPQkFUIiwgIlNVTUFfTkVHQVRJVSJdLCAicmVzIjogWyIkWygtMTYpICsgKC05KSArIDVdID0gLTIwJCIsICIkKC0yMCkgOiAoLTQpID0gNSQiXX0="
  },
  {
   "id": "1f",
   "ex": 1,
   "ap": "f",
   "bloc": "enters",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les operacions següents.",
   "enunciat": "$[(-4) + (-3) \\cdot (-6)] : 7$",
   "opcions": [
    "$6$",
    "$2$",
    "$-\\dfrac{22}{7}$",
    "$\\dfrac{22}{7}$"
   ],
   "pistes": [
    "Dins del claudàtor, primer la multiplicació.",
    "$(-3)\\cdot(-6) = 18$, i després $-4 + 18$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJEaW5zIGRlbCBjbGF1ZMOgdG9yLCBsYSBtdWx0aXBsaWNhY2nDsyB2YSBhYmFucyBxdWUgbGEgc3VtYTogbm8gZXMgZmEgJCgtNCkrKC0zKSQgcHJpbWVyLiIsICIiLCAiJCgtMylcXGNkb3QoLTYpJCDDqXMgJCsxOCQ6IG1lbnlzIHBlciBtZW55cyBkw7NuYSBtw6lzLiIsICJFbCBwcmltZXIgdGVybWUgZGVsIGNsYXVkw6B0b3Igw6lzICQtNCQsIG5vICQrNCQuIl0sICJlcnIiOiBbIkpFUkFSUVVJQSIsICIiLCAiTUVOWVNfUEVSX01FTllTIiwgIlNJR05FX1BSSU1FUl9URVJNRSJdLCAicmVzIjogWyIkKC0zKVxcY2RvdCgtNikgPSArMTgkIiwgIiRbLTQgKyAxOF0gPSAxNCQiLCAiJDE0IDogNyA9IDIkIl19"
  },
  {
   "id": "2a",
   "ex": 2,
   "ap": "a",
   "bloc": "enters",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol les operacions.",
   "enunciat": "$(-11) \\cdot (10 + (-7)) + 36 \\cdot [(-1) - (-10)]$",
   "opcions": [
    "$291$",
    "$357$",
    "$137$",
    "$-429$"
   ],
   "pistes": [
    "Resol primer els dos parèntesis; després, les dues multiplicacions.",
    "$10 + (-7) = 3$ i $(-1) - (-10) = 9$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJCgtMTEpXFxjZG90IDMkIMOpcyAkLTMzJDogZWwgcHJpbWVyIGZhY3RvciDDqXMgbmVnYXRpdS4iLCAiQWwgcHJpbWVyIHBhcsOobnRlc2ksICQxMCArICgtNykkIMOpcyAkMyQsIG5vICQxNyQuIiwgIkFsIHNlZ29uIGNsYXVkw6B0b3IsICQtKC0xMCkkIMOpcyAkKzEwJDogcXVlZGEgJC0xKzEwID0gOSQuIl0sICJlcnIiOiBbIiIsICJTSUdORV9QUk9EVUNURSIsICJTVU1BX05FR0FUSVUiLCAiUkVTVEFfTkVHQVRJVSJdLCAicmVzIjogWyIkKDEwICsgKC03KSkgPSAzJCBcXHF1YWQgaSBcXHF1YWQgJFsoLTEpIC0gKC0xMCldID0gOSQiLCAiJCgtMTEpXFxjZG90IDMgKyAzNiBcXGNkb3QgOSA9IC0zMyArIDMyNCQiLCAiJD0gMjkxJCJdfQ=="
  },
  {
   "id": "2b",
   "ex": 2,
   "ap": "b",
   "bloc": "enters",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol les operacions.",
   "enunciat": "$(-8) \\cdot [5 - (-2)] - 48 : [6 + (-14)]$",
   "opcions": [
    "$-50$",
    "$62$",
    "$-62$",
    "$-18$"
   ],
   "pistes": [
    "Resol els dos claudàtors abans de multiplicar i dividir.",
    "$[5-(-2)] = 7$ i $[6+(-14)] = -8$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJCgtOClcXGNkb3QgNyQgw6lzICQtNTYkOiBubyBwZXJkaXMgZWwgc2lnbmUgZGVsICQtOCQuIiwgIiQ0OCA6ICgtOCkkIMOpcyAkLTYkLCBpIHJlc3RhciAkLTYkIMOpcyBzdW1hciAkNiQuIiwgIiQ1IC0gKC0yKSQgw6lzICQ3JCwgbm8gJDMkOiByZXN0YXIgdW4gbmVnYXRpdSDDqXMgc3VtYXIuIl0sICJlcnIiOiBbIiIsICJTSUdORV9QUk9EVUNURSIsICJTSUdORV9RVU9DSUVOVCIsICJSRVNUQV9ORUdBVElVIl0sICJyZXMiOiBbIiRbNSAtICgtMildID0gNyQgXFxxdWFkIGkgXFxxdWFkICRbNiArICgtMTQpXSA9IC04JCIsICIkKC04KVxcY2RvdCA3IC0gNDggOiAoLTgpID0gLTU2IC0gKC02KSQiLCAiJD0gLTU2ICsgNiA9IC01MCQiXX0="
  },
  {
   "id": "2c",
   "ex": 2,
   "ap": "c",
   "bloc": "enters",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol les operacions.",
   "enunciat": "$42 : [(-6) - (-3)] + 28 : [-6 - (-8)]$",
   "opcions": [
    "$-16$",
    "$0$",
    "$28$",
    "$\\dfrac{28}{3}$"
   ],
   "pistes": [
    "Cada claudàtor primer: fixa't que hi ha dues restes de nombres negatius.",
    "$[(-6)-(-3)] = -3$ i $[-6-(-8)] = 2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBbCBzZWdvbiBjbGF1ZMOgdG9yLCAkLTYgLSAoLTgpJCDDqXMgJCsyJCwgbm8gJC0xNCQuIiwgIiIsICIkNDIgOiAoLTMpJCDDqXMgJC0xNCQ6IHNpZ25lcyBkaWZlcmVudHMsIHF1b2NpZW50IG5lZ2F0aXUuIiwgIkFsIHByaW1lciBjbGF1ZMOgdG9yLCAkKC02KS0oLTMpJCDDqXMgJC0zJCwgbm8gJC05JC4iXSwgImVyciI6IFsiUkVTVEFfTkVHQVRJVSIsICIiLCAiU0lHTkVfUVVPQ0lFTlQiLCAiUkVTVEFfTkVHQVRJVV9QUklNRVIiXSwgInJlcyI6IFsiJFsoLTYpIC0gKC0zKV0gPSAtMyQgXFxxdWFkIGkgXFxxdWFkICRbLTYgLSAoLTgpXSA9IDIkIiwgIiQ0MiA6ICgtMykgKyAyOCA6IDIgPSAtMTQgKyAxNCQiLCAiJD0gMCQiXX0="
  },
  {
   "id": "2d",
   "ex": 2,
   "ap": "d",
   "bloc": "enters",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol les operacions.",
   "enunciat": "$32 \\cdot [(-19) + 3] - 24 : [(-11) - (-5)]$",
   "opcions": [
    "$516$",
    "$-700$",
    "$-508$",
    "$-516$"
   ],
   "pistes": [
    "Resol els dos claudàtors i vigila el signe del quocient.",
    "$[(-19)+3] = -16$ i $[(-11)-(-5)] = -6$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyIkMzIgXFxjZG90ICgtMTYpJCDDqXMgJC01MTIkOiB1biBwb3NpdGl1IHBlciB1biBuZWdhdGl1IGTDs25hIG5lZ2F0aXUuIiwgIiQoLTE5KSArIDMkIMOpcyAkLTE2JDogc3VtYXIgJDMkIGEgdW4gbmVnYXRpdSBsJ2Fwcm9wYSBhIHplcm8uIiwgIiIsICIkMjQgOiAoLTYpJCDDqXMgJC00JCwgaSByZXN0YXIgJC00JCDDqXMgc3VtYXIgJDQkLiJdLCAiZXJyIjogWyJTSUdORV9QUk9EVUNURSIsICJTSUdORV9FTkdMT0JBVCIsICIiLCAiU0lHTkVfUVVPQ0lFTlQiXSwgInJlcyI6IFsiJFsoLTE5KSArIDNdID0gLTE2JCBcXHF1YWQgaSBcXHF1YWQgJFsoLTExKSAtICgtNSldID0gLTYkIiwgIiQzMiBcXGNkb3QgKC0xNikgLSAyNCA6ICgtNikgPSAtNTEyIC0gKC00KSQiLCAiJD0gLTUxMiArIDQgPSAtNTA4JCJdfQ=="
  },
  {
   "id": "3a",
   "ex": 3,
   "ap": "a",
   "bloc": "enters",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Efectua aquestes operacions combinades.",
   "enunciat": "$(-5)^2 \\cdot [3 + 28 \\cdot (-4)]$",
   "opcions": [
    "$-3100$",
    "$2725$",
    "$-2725$",
    "$-2875$"
   ],
   "pistes": [
    "Comença per la potència i per la multiplicació de dins del claudàtor.",
    "$(-5)^2 = 25$ i dins queda $3 - 112$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJEaW5zIGRlbCBjbGF1ZMOgdG9yIHZhIHByaW1lciBsYSBtdWx0aXBsaWNhY2nDszogJDI4XFxjZG90KC00KSQsIG5vICQzKzI4JC4iLCAiJCgtNSleMiA9ICsyNSQ6IGwnZXhwb25lbnQgcGFyZWxsIGZhIGRlc2FwYXLDqGl4ZXIgZWwgc2lnbmUuICQtNV4yJCAoc2Vuc2UgcGFyw6hudGVzaXMpIHPDrSBxdWUgc2VyaWEgJC0yNSQuIiwgIiIsICIkMyArICgtMTEyKSQgw6lzICQtMTA5JCwgbm8gJC0xMTUkOiBlbHMgc2lnbmVzIHPDs24gZGlmZXJlbnRzLCBjYWwgcmVzdGFyLiJdLCAiZXJyIjogWyJKRVJBUlFVSUEiLCAiUE9URU5DSUFfQkFTRV9ORUdBVElWQSIsICIiLCAiU1VNQV9WQUxPUlNfQUJTT0xVVFMiXSwgInJlcyI6IFsiJCgtNSleMiA9IDI1JCBcXHF1YWQgaSBcXHF1YWQgJDI4XFxjZG90KC00KSA9IC0xMTIkIiwgIiRbMyArICgtMTEyKV0gPSAtMTA5JCIsICIkMjUgXFxjZG90ICgtMTA5KSA9IC0yNzI1JCJdfQ=="
  },
  {
   "id": "3b",
   "ex": 3,
   "ap": "b",
   "bloc": "enters",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Efectua aquestes operacions combinades.",
   "enunciat": "$(+2)^2 \\cdot [-5 \\cdot 2 - 32 : (-8)]$",
   "opcions": [
    "$21$",
    "$-24$",
    "$-56$",
    "$24$"
   ],
   "pistes": [
    "Dins del claudàtor: primer el producte i el quocient, després la resta.",
    "$-5\\cdot 2 = -10$ i $32:(-8) = -4$, o sigui $-10 - (-4)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCAkLTMyOigtOCkkIG5vbcOpcyBhZmVjdGEgZWwgJDMyJCwgbm8gdG90IGVsIHF1ZSBoaSBoYSBkYXZhbnQuIiwgIiIsICIkMzIgOiAoLTgpJCDDqXMgJC00JCwgaSByZXN0YXIgJC00JCDDqXMgc3VtYXIgJDQkLiIsICIkLTEwICsgNCQgw6lzICQtNiQsIG5vICQrNiQuIl0sICJlcnIiOiBbIkpFUkFSUVVJQSIsICIiLCAiU0lHTkVfUVVPQ0lFTlQiLCAiU0lHTkVfU1VNQSJdLCAicmVzIjogWyIkLTVcXGNkb3QgMiA9IC0xMCQgXFxxdWFkIGkgXFxxdWFkICQzMiA6ICgtOCkgPSAtNCQiLCAiJFstMTAgLSAoLTQpXSA9IC0xMCArIDQgPSAtNiQiLCAiJDQgXFxjZG90ICgtNikgPSAtMjQkIl19"
  },
  {
   "id": "3c",
   "ex": 3,
   "ap": "c",
   "bloc": "enters",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Efectua aquestes operacions combinades.",
   "enunciat": "$(+3)^3 : [-5 + (-7) \\cdot (-2)]$",
   "opcions": [
    "$1$",
    "$3$",
    "$\\dfrac{1}{3}$",
    "$-3$"
   ],
   "pistes": [
    "Recorda que $(-7)\\cdot(-2)$ és positiu.",
    "Dins del claudàtor queda $-5 + 14$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyIkM14zJCDDqXMgJDNcXGNkb3QgM1xcY2RvdCAzID0gMjckLCBubyAkM1xcY2RvdCAzID0gOSQgbmkgJDNcXGNkb3QgMyQgdmVnYWRlcyBsJ2V4cG9uZW50LiIsICIiLCAiSGFzIGRpdmlkaXQgYWwgcmV2w6lzOiDDqXMgJDI3IDogOSQsIG5vICQ5IDogMjckLiIsICIkLTUgKyAxNCQgw6lzICQrOSQ6IGVsIHBvc2l0aXUgw6lzIG3DqXMgZ3JhbiBlbiB2YWxvciBhYnNvbHV0LiJdLCAiZXJyIjogWyJQT1RFTkNJQV9NVUxUSVBMSUNBIiwgIiIsICJESVZJU0lPX0lOVkVSVElEQSIsICJTSUdORV9TVU1BIl0sICJyZXMiOiBbIiQoKzMpXjMgPSAyNyQgXFxxdWFkIGkgXFxxdWFkICQoLTcpXFxjZG90KC0yKSA9ICsxNCQiLCAiJFstNSArIDE0XSA9IDkkIiwgIiQyNyA6IDkgPSAzJCJdfQ=="
  },
  {
   "id": "3d",
   "ex": 3,
   "ap": "d",
   "bloc": "enters",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Efectua aquestes operacions combinades.",
   "enunciat": "$(-4)^3 : [(-15) : 5 - (-45) \\cdot (-9)]$",
   "opcions": [
    "$\\dfrac{8}{51}$",
    "$-\\dfrac{8}{51}$",
    "$\\dfrac{32}{201}$",
    "$-\\dfrac{32}{201}$"
   ],
   "pistes": [
    "Calcula la potència i, dins del claudàtor, el quocient i el producte.",
    "$(-4)^3 = -64$ i dins queda $-3 - 405$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJCgtNCleMyA9IC02NCQ6IGFtYiBleHBvbmVudCBzZW5hciwgZWwgc2lnbmUgbmVnYXRpdSBlcyBtYW50w6kuIiwgIiQoLTE1KTo1JCDDqXMgJC0zJCwgbm8gJCszJC4iLCAiJCgtNDUpXFxjZG90KC05KSA9ICs0MDUkLCBpIHJlc3Rhci1sbyBkw7NuYSAkLTMgLSA0MDUkLiJdLCAiZXJyIjogWyIiLCAiUE9URU5DSUFfQkFTRV9ORUdBVElWQSIsICJTSUdORV9RVU9DSUVOVCIsICJNRU5ZU19QRVJfTUVOWVMiXSwgInJlcyI6IFsiJCgtNCleMyA9IC02NCQiLCAiJCgtMTUpOjUgPSAtMyQgXFxxdWFkIGkgXFxxdWFkICQoLTQ1KVxcY2RvdCgtOSkgPSArNDA1JCIsICIkWy0zIC0gNDA1XSA9IC00MDgkIiwgIiQoLTY0KSA6ICgtNDA4KSA9IFxcZGZyYWN7OH17NTF9JCJdfQ=="
  },
  {
   "id": "4a",
   "ex": 4,
   "ap": "a",
   "bloc": "enters",
   "tipus": "B",
   "dif": 4,
   "encapcalament": "Troba l'error. En cada cadena d'igualtats hi ha un pas equivocat: tria quin és.",
   "enunciat": "$(-3) + (-5) - (-8) = -3 - 5 - 8 = -8 - 8 = -(8-8) = 0$",
   "opcions": [
    "No hi ha cap error: el resultat és $0$.",
    "A l'últim pas: $-(8-8)$ hauria de ser $-(8+8) = -16$.",
    "En treure els parèntesis: $+(-5)$ s'ha escrit $-5$ i hauria de ser $+5$.",
    "En treure els parèntesis: $-(-8)$ s'ha escrit $-8$ i hauria de ser $+8$."
   ],
   "pistes": [
    "Escriu tu l'expressió sense parèntesis i compara-la amb la del full.",
    "Restar un nombre negatiu és sumar-lo: $-(-8) = +8$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCByZXN1bHRhdCAkMCQgc8OtIHF1ZSDDqXMgY29ycmVjdGUsIHBlcsOyIHMnaGkgaGEgYXJyaWJhdCBwZXIgY2FzdWFsaXRhdDogaGkgaGEgdW4gcGFzIGVxdWl2b2NhdCBwZWwgY2Ftw60uIiwgIkwnw7psdGltIHBhcyBqYSBhcnJvc3NlZ2EgbCdlcnJvciBhbnRlcmlvci4gRWwgcHJpbWVyIHBhcyBlcXVpdm9jYXQgw6lzIGFiYW5zLCBxdWFuIGVzIHRyZXVlbiBlbHMgcGFyw6hudGVzaXMuIiwgIiQrKC01KSQgc8OtIHF1ZSDDqXMgJC01JDogc3VtYXIgdW4gbmVnYXRpdSDDqXMgcmVzdGFyLiBBcXVlc3QgcGFzIMOpcyBjb3JyZWN0ZS4iLCAiIl0sICJlcnIiOiBbIkNBUF9FUlJPUiIsICJFUlJPUl9UQVJEQSIsICJQQVJFTlRFU0lfU1VNQSIsICIiXSwgInJlcyI6IFsiJCgtMykgKyAoLTUpIC0gKC04KSA9IC0zIC0gNSArIDgkIiwgIiQ9IC04ICsgOCA9IDAkIiwgIkVsIHJlc3VsdGF0IGZpbmFsIGNvaW5jaWRlaXgsIHBlcsOyIGVsIGRlc2Vudm9sdXBhbWVudCBkZWwgZnVsbCDDqXMgaW5jb3JyZWN0ZTogZXNjcml1ICQtOCQgb24gaGkgaGEgZCdhbmFyICQrOCQuIl19"
  },
  {
   "id": "4b",
   "ex": 4,
   "ap": "b",
   "bloc": "enters",
   "tipus": "B",
   "dif": 4,
   "encapcalament": "Troba l'error. En cada cadena d'igualtats hi ha un pas equivocat: tria quin és.",
   "enunciat": "$-9 - (-8) - (-7 - 2) = -9 + 8 + 7 - 2 = -1 + 7 - 2 = -6 - 2 = -8$",
   "opcions": [
    "En canviar el signe del parèntesi, el $-2$ ha de passar a $+2$.",
    "Calia calcular primer $(-7-2) = -5$.",
    "No hi ha cap error: el resultat és $-8$.",
    "$-(-8)$ hauria de ser $-8$."
   ],
   "pistes": [
    "El signe $-$ davant d'un parèntesi canvia el signe de tots els termes de dins.",
    "$-(-7-2)$ és $+7+2$, no $+7-2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJC03LTIkIMOpcyAkLTkkLCBubyAkLTUkOiBlbHMgZG9zIHRlcm1lcyBzw7NuIG5lZ2F0aXVzIGkgc2Ugc3VtZW4gZW4gdmFsb3IgYWJzb2x1dC4iLCAiRWwgY2FudmkgZGUgc2lnbmUgZGVsIHBhcsOobnRlc2kgw6lzIGluY29tcGxldCwgaSBhaXjDsiBjYW52aWEgZWwgcmVzdWx0YXQuIiwgIiQtKC04KSA9ICs4JCDDqXMgY29ycmVjdGU6IHJlc3RhciB1biBuZWdhdGl1IMOpcyBzdW1hci4iXSwgImVyciI6IFsiIiwgIlNVTUFfTkVHQVRJVVMiLCAiQ0FQX0VSUk9SIiwgIlJFU1RBX05FR0FUSVUiXSwgInJlcyI6IFsiJC0oLTcgLSAyKSA9ICs3ICsgMiQiLCAiJC05ICsgOCArIDcgKyAyID0gOCQiLCAiRWwgcmVzdWx0YXQgY29ycmVjdGUgw6lzICQ4JCwgbm8gJC04JC4iXX0="
  },
  {
   "id": "4c",
   "ex": 4,
   "ap": "c",
   "bloc": "enters",
   "tipus": "B",
   "dif": 4,
   "encapcalament": "Troba l'error. En cada cadena d'igualtats hi ha un pas equivocat: tria quin és.",
   "enunciat": "$5 - [-6 + 7 - (-2)] = 5 + 6 - 7 + 2 = 11 - 5 = 6$",
   "opcions": [
    "Calia calcular primer $7 - (-2) = 5$.",
    "$-(-6)$ hauria de ser $-6$.",
    "No hi ha cap error: el resultat és $6$.",
    "En treure el claudàtor, el $-(-2)$ de dins es converteix en $-2$ fora, no en $+2$."
   ],
   "pistes": [
    "Resol primer el claudàtor sencer i després resta'l a $5$.",
    "Dins: $-6 + 7 + 2 = 3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyIkNy0oLTIpJCDDqXMgJDkkLCBubyAkNSQuIiwgIiQ1IC0gWy02ICsgXFxkb3RzXSQgZMOzbmEgJCs2JDogZWwgc2lnbmUgZGUgZm9yYSBjYW52aWEgZWwgJC02JCBhICQrNiQuIiwgIlVuIGRlbHMgdGVybWVzIGNhbnZpYSBkZSBzaWduZSBtYWxhbWVudCwgaSBlbCByZXN1bHRhdCBjb3JyZWN0ZSDDqXMgJDIkLiIsICIiXSwgImVyciI6IFsiUkVTVEFfTkVHQVRJVV8yIiwgIlJFU1RBX05FR0FUSVUiLCAiQ0FQX0VSUk9SIiwgIiJdLCAicmVzIjogWyIkWy02ICsgNyAtICgtMildID0gLTYgKyA3ICsgMiA9IDMkIiwgIiQ1IC0gMyA9IDIkIiwgIlRyYWllbnQgZWwgY2xhdWTDoHRvcjogJDUgKyA2IC0gNyAtIDIgPSAyJC4gRWwgdGVybWUgJC0oLTIpJCBwYXNzYSBhICQtMiQuIl19"
  },
  {
   "id": "4d",
   "ex": 4,
   "ap": "d",
   "bloc": "enters",
   "tipus": "B",
   "dif": 4,
   "encapcalament": "Troba l'error. En cada cadena d'igualtats hi ha un pas equivocat: tria quin és.",
   "enunciat": "$4 \\cdot (-3) + (-5) \\cdot (-2) = -12 - 10 = -22$",
   "opcions": [
    "Calia sumar $4 + (-3)$ abans de multiplicar.",
    "$(-5)\\cdot(-2)$ és $+10$: menys per menys dóna més.",
    "No hi ha cap error: el resultat és $-22$.",
    "$4\\cdot(-3)$ hauria de ser $+12$."
   ],
   "pistes": [
    "Mira el signe de cada un dels dos productes per separat.",
    "$(-5)\\cdot(-2) = +10$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMYSBtdWx0aXBsaWNhY2nDsyBzZW1wcmUgdmEgYWJhbnMgcXVlIGxhIHN1bWEuIiwgIiIsICJFbCBzZWdvbiBwcm9kdWN0ZSB0w6kgZWwgc2lnbmUgY2FudmlhdDsgZWwgcmVzdWx0YXQgY29ycmVjdGUgw6lzICQtMiQuIiwgIiQ0XFxjZG90KC0zKSA9IC0xMiQgw6lzIGNvcnJlY3RlOiBzaWduZXMgZGlmZXJlbnRzLCBwcm9kdWN0ZSBuZWdhdGl1LiJdLCAiZXJyIjogWyJKRVJBUlFVSUEiLCAiIiwgIkNBUF9FUlJPUiIsICJTSUdORV9QUk9EVUNURSJdLCAicmVzIjogWyIkNFxcY2RvdCgtMykgPSAtMTIkIFxccXVhZCBpIFxccXVhZCAkKC01KVxcY2RvdCgtMikgPSArMTAkIiwgIiQtMTIgKyAxMCA9IC0yJCJdfQ=="
  },
  {
   "id": "4e",
   "ex": 4,
   "ap": "e",
   "bloc": "enters",
   "tipus": "B",
   "dif": 4,
   "encapcalament": "Troba l'error. En cada cadena d'igualtats hi ha un pas equivocat: tria quin és.",
   "enunciat": "$4 - 5 \\cdot (-2) = (-1) \\cdot (-2) = 2$",
   "opcions": [
    "$5\\cdot(-2) = -10$ i després $4 - (-10) = -6$.",
    "S'ha fet $4-5$ abans de multiplicar; la multiplicació va primer.",
    "No hi ha cap error: el resultat és $2$.",
    "$(-1)\\cdot(-2)$ hauria de ser $-2$."
   ],
   "pistes": [
    "Quina operació s'ha de fer primer en $4 - 5\\cdot(-2)$?",
    "Primer $5\\cdot(-2) = -10$; després la resta."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBwcm9kdWN0ZSBlc3TDoCBiw6ksIHBlcsOyICQ0LSgtMTApJCDDqXMgJDQrMTAgPSAxNCQuIiwgIiIsICJTJ2hhIGFsdGVyYXQgbCdvcmRyZSBkZSBsZXMgb3BlcmFjaW9uczsgZWwgcmVzdWx0YXQgY29ycmVjdGUgw6lzICQxNCQuIiwgIiQoLTEpXFxjZG90KC0yKSA9ICsyJCBlc3TDoCBiZW4gY2FsY3VsYXQ7IGVsIHByb2JsZW1hIMOpcyBkJ29uIHN1cnQgYXF1ZXN0ICQtMSQuIl0sICJlcnIiOiBbIlJFU1RBX05FR0FUSVUiLCAiIiwgIkNBUF9FUlJPUiIsICJNRU5ZU19QRVJfTUVOWVMiXSwgInJlcyI6IFsiJDVcXGNkb3QoLTIpID0gLTEwJCIsICIkNCAtICgtMTApID0gNCArIDEwID0gMTQkIl19"
  }
 ]
};
