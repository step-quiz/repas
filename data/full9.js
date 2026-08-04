/* Generat per tools/build.py — no editeu aquest fitxer a mà. */
window.FULL = {
 "full": 9,
 "titol": "Full 9 — Cossos geomètrics. Àrea i volum",
 "subtitol": "Àrea total de prismes, piràmides, cilindres, cons i l'esfera, i càlcul de volums en problemes aplicats.",
 "blocs": [
  {
   "id": "prismes",
   "titol": "Prismes i el cub",
   "descripcio": "Àrea total de prismes rectes i del cub, incloent-hi la diagonal a partir de l'àrea.",
   "items": [
    "170a",
    "170b",
    "170c",
    "170d",
    "170e",
    "171",
    "172",
    "173",
    "174",
    "175",
    "176a",
    "176b"
   ]
  },
  {
   "id": "piramides",
   "titol": "Piràmides i tetraedres",
   "descripcio": "Àrea total de piràmides regulars i tetraedres, amb Pitàgores per trobar l'apotema quan cal.",
   "items": [
    "177",
    "179a",
    "179b",
    "180a",
    "180b",
    "180c",
    "180d",
    "181a",
    "181b",
    "182",
    "183"
   ]
  },
  {
   "id": "cossos_rodons",
   "titol": "Cilindres, cons i l'esfera",
   "descripcio": "Àrea total de cossos de revolució i problemes inversos per trobar radi, altura o generatriu.",
   "items": [
    "184",
    "185a",
    "185b",
    "186",
    "187",
    "188",
    "189",
    "190",
    "191",
    "193a",
    "193b"
   ]
  },
  {
   "id": "volums_aplicacions",
   "titol": "Volums i problemes aplicats",
   "descripcio": "Volum de prismes, piràmides, cilindres, cons, l'esfera i el cub, i problemes de la vida real.",
   "items": [
    "195a",
    "195c",
    "195e",
    "195f",
    "196a",
    "196b",
    "197",
    "198",
    "199"
   ]
  }
 ],
 "errors": {
  "ARREL_MAL_APLICADA": "L'arrel no s'ha aplicat on tocava. Aïlla primer la quantitat que va sota l'arrel i fes-la al final, sobre el valor ja aïllat.",
  "ARREL_OBLIDADA": "T'has quedat amb el quadrat (o el cub) de la incògnita. De $x^2=k$ encara falta l'arrel per arribar a $x$: comprova sempre quina de les dues quantitats et demanen.",
  "ARRODONIMENT_CONTEXT": "El resultat exacte és aquest, però el context demana un nombre enter. Pensa si cal arrodonir cap amunt (pots de pintura, autocars, caixes) o cap avall (quantes peces senceres en surten).",
  "DIMENSIO_EXPONENT_MAL": "L'exponent no correspon a la dimensió: les àrees van al quadrat i els volums, al cub. Comprova també les unitats del resultat.",
  "DIVISIO_REPETIDA": "Has dividit dues vegades pel mateix nombre. Sol passar quan la fórmula ja porta la divisió incorporada i se li torna a aplicar al final: escriu la fórmula sencera i substitueix-hi els valors d'un sol cop.",
  "FACTOR_OBLIDAT": "T'has deixat pel camí un dels factors en combinar els exponents.",
  "FACTOR_TRES_VOLUM": "El terç del volum va només amb piràmides i cons. Prismes, cilindres i cubs són base per altura, sense dividir.",
  "ORDRE_MULTIPLICACIO_DIVISIO": "La divisió i la multiplicació tenen la mateixa prioritat i es fan d'esquerra a dreta: no es pot agrupar la multiplicació primer perquè \"queda més bé\".",
  "PAPERS_INTERCANVIATS": "Has intercanviat les dues magnituds: torna a llegir quina depèn de quina a l'enunciat.",
  "PAS_INTERMEDI_PER_RESPOSTA": "El valor que has triat és correcte, però és un pas intermedi, no el que et demanen. Torna a llegir la pregunta i mira quina magnitud has d'acabar donant: sovint només falta una operació més.",
  "PI_OBLIDAT": "Falta $\\pi$: qualsevol longitud, àrea o volum que surti d'un cercle en porta. La circumferència és $2\\pi r$ i el cercle, $\\pi r^2$.",
  "POTENCIA_PRODUCTE_UN_FACTOR": "L'exponent afecta TOTS els factors del producte, no només un: $(a\\cdot b)^n=a^n\\cdot b^n$.",
  "PRODUCTE_MAL": "Has multiplicat els dos nombres que et donaven en comptes d'aïllar la incògnita amb els productes creuats.",
  "SIGNE_TERME_INDEPENDENT": "Revisa el signe del terme independent (el que no porta $x$): és fàcil perdre'l en sumar o restar.",
  "SUMA_DE_PARTS_INCOMPLETA": "L'àrea total d'un cos és la suma de TOTES les seves cares. Has calculat bé una part (la base, o la lateral) però encara falta sumar-hi l'altra.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau."
 },
 "items": [
  {
   "id": "170a",
   "ex": 170,
   "ap": "a",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula l'àrea total d'aquest prisma recte:",
   "enunciat": "Calcula l'àrea total d'aquest prisma recte: un ortoedre (prisma recte de base rectangular) d'arestes $7$ cm, $2$ cm i $4$ cm.",
   "opcions": [
    "$50$ cm$^2$",
    "$56$ cm$^2$",
    "$100$ cm$^2$",
    "$112$ cm$^2$"
   ],
   "pistes": [
    "L'àrea total d'un ortoedre és la suma de les seves $6$ cares: $3$ parelles de rectangles iguals.",
    "$A=2(a\\cdot b+a\\cdot c+b\\cdot c)$, amb $a=7$, $b=2$, $c=4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3Qgw6lzIGVsIHJlc3VsdGF0IGRlICQ3XFxjZG90Mis3XFxjZG90NCsyXFxjZG90NCQgc2Vuc2UgbXVsdGlwbGljYXIgcGVyICQyJDogY2FkYSBjYXJhIGQndW4gb3J0b2VkcmUgw6lzIGlndWFsIGEgbGEgc2V2YSBvcG9zYWRhLCBhaXjDrSBxdWUgY2FsIGNvbXB0YXItbGVzIHRvdGVzIGR1ZXMuIiwgIlQnaGFzIGRlaXhhdCB1bmEgcGFyZWxsYSBkZSBjYXJlcyBwZWwgY2Ftw606IHVuIG9ydG9lZHJlIGVuIHTDqSBUUkVTIHBhcmVsbGVzIGRpZmVyZW50cyAoJDdcXHRpbWVzMiQsICQ3XFx0aW1lczQkIGkgJDJcXHRpbWVzNCQpLCBubyBub23DqXMgZHVlcy4iLCAiIiwgIk5vIGNvaW5jaWRlaXggYW1iICQyKDdcXGNkb3QyKzdcXGNkb3Q0KzJcXGNkb3Q0KSQ6IHJldmlzYSBlbCBwcm9kdWN0ZSBkZSBjYWRhIHBhcmVsbGEgZGUgY2FyZXMgcGVyIHNlcGFyYXQgYWJhbnMgZGUgc3VtYXItbGVzLiJdLCAiZXJyIjogWyJQT1RFTkNJQV9QUk9EVUNURV9VTl9GQUNUT1IiLCAiRkFDVE9SX09CTElEQVQiLCAiIiwgIlBST0RVQ1RFX01BTCJdLCAicmVzIjogWyIkQT0yKDdcXGNkb3QyKzdcXGNkb3Q0KzJcXGNkb3Q0KT0yKDE0KzI4KzgpJCIsICIkQT0yXFxjZG90NTA9MTAwJCBjbSReMiQiXX0="
  },
  {
   "id": "170b",
   "ex": 170,
   "ap": "b",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula l'àrea total d'aquest prisma recte:",
   "enunciat": "Calcula l'àrea total d'aquest prisma recte: un prisma de base triangular equilàtera de $5$ cm de costat i $9$ cm d'altura.",
   "opcions": [
    "$\\approx67{,}5$ cm$^2$",
    "$\\approx175{,}95$ cm$^2$",
    "$\\approx146{,}25$ cm$^2$",
    "$\\approx156{,}65$ cm$^2$"
   ],
   "pistes": [
    "L'àrea d'un triangle equilàter de costat $c$ és $A_{\\text{base}}=\\dfrac{c^2\\sqrt3}{4}$; amb $c=5$, $A_{\\text{base}}\\approx10{,}83$ cm$^2$.",
    "El perímetre de la base és $3\\cdot5=15$ cm; l'àrea lateral és $15\\cdot9=135$ cm$^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igbm9tw6lzIMOpcyBsJ8OgcmVhIGxhdGVyYWwgKCQxNVxcY2RvdDk6MiQsIGEgbcOpcyBhbWIgdW5hIGRpdmlzacOzIGRlIG3DqXMpOyBsJ8OgcmVhIGxhdGVyYWwgZCd1biBwcmlzbWEgbm8gZXMgZGl2aWRlaXggZW50cmUgJDIkLCBpIGVuY2FyYSBjYWwgc3VtYXItaGkgbGVzIGR1ZXMgYmFzZXMuIiwgIk5vIGNvaW5jaWRlaXggYW1iICQyXFxjZG90IEFfe1xcdGV4dHtiYXNlfX0rMTVcXGNkb3Q5JDogcmV2aXNhIHBlciBzZXBhcmF0IGwnw6ByZWEgZGVsIHRyaWFuZ2xlIGVxdWlsw6B0ZXIgaSBsJ8OgcmVhIGxhdGVyYWwuIiwgIkZhbHRhIGNvbXB0YXIgbGVzIERVRVMgYmFzZXMgdHJpYW5ndWxhcnMsIG5vIG5vbcOpcyB1bmE6IGwnw6ByZWEgdG90YWwgaW5jbG91ICQyXFxjZG90IEFfe1xcdGV4dHtiYXNlfX0kLCBubyAkMSQgc29sYS4iLCAiIl0sICJlcnIiOiBbIkRJVklTSU9fUkVQRVRJREEiLCAiUFJPRFVDVEVfTUFMIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiIl0sICJyZXMiOiBbIiRBX3tcXHRleHR7YmFzZX19PVxcZGZyYWN7NV4yXFxzcXJ0M317NH1cXGFwcHJveDEweyx9ODMkIGNtJF4yJCIsICIkQV97XFx0ZXh0e2xhdGVyYWx9fT0xNVxcY2RvdDk9MTM1JCBjbSReMiQiLCAiJEFfe1xcdGV4dHt0b3RhbH19PTJcXGNkb3QxMHssfTgzKzEzNVxcYXBwcm94MTU2eyx9NjUkIGNtJF4yJCJdfQ=="
  },
  {
   "id": "170c",
   "ex": 170,
   "ap": "c",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula l'àrea total d'aquest prisma recte:",
   "enunciat": "Calcula l'àrea total d'aquest prisma recte: un prisma de base hexagonal regular de $8$ cm de costat i $5{,}2$ cm d'apotema, amb $6$ cm d'altura.",
   "opcions": [
    "$374{,}4$ cm$^2$",
    "$288$ cm$^2$",
    "$537{,}6$ cm$^2$",
    "$662{,}4$ cm$^2$"
   ],
   "pistes": [
    "L'àrea d'un polígon regular és $A_{\\text{base}}=\\dfrac{\\text{perímetre}\\cdot\\text{apotema}}{2}$; amb perímetre $6\\cdot8=48$ cm i apotema $5{,}2$ cm, $A_{\\text{base}}=124{,}8$ cm$^2$.",
    "L'àrea lateral és $48\\cdot6=288$ cm$^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJTZW1ibGEgcXVlIG5vbcOpcyBoYXMgY29tcHRhdCBVTkEgYmFzZSBoZXhhZ29uYWwgZW4gbGxvYyBkZSBkdWVzOiB1biBwcmlzbWEgc2VtcHJlIGVuIHTDqSBkdWVzLCB1bmEgYSBjYWRhIGV4dHJlbS4iLCAiQXF1ZXN0IHZhbG9yIMOpcyBub23DqXMgbCfDoHJlYSBsYXRlcmFsICgkNDhcXGNkb3Q2JCk6IGVuY2FyYSBmYWx0YSBzdW1hci1oaSBsZXMgZHVlcyBiYXNlcyBoZXhhZ29uYWxzLiIsICIiLCAiTm8gY29pbmNpZGVpeCBhbWIgJDJcXGNkb3QxMjR7LH04KzQ4XFxjZG90NiQ6IHJldmlzYSBwZXIgc2VwYXJhdCBsJ8OgcmVhIGRlIGxhIGJhc2UgaGV4YWdvbmFsIGkgbCfDoHJlYSBsYXRlcmFsLiJdLCAiZXJyIjogWyJGQUNUT1JfT0JMSURBVCIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIiIsICJQUk9EVUNURV9NQUwiXSwgInJlcyI6IFsiJEFfe1xcdGV4dHtiYXNlfX09XFxkZnJhY3s0OFxcY2RvdDV7LH0yfXsyfT0xMjR7LH04JCBjbSReMiQiLCAiJEFfe1xcdGV4dHtsYXRlcmFsfX09NDhcXGNkb3Q2PTI4OCQgY20kXjIkIiwgIiRBX3tcXHRleHR7dG90YWx9fT0yXFxjZG90MTI0eyx9OCsyODg9NTM3eyx9NiQgY20kXjIkIl19"
  },
  {
   "id": "170d",
   "ex": 170,
   "ap": "d",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula l'àrea total d'aquest prisma recte:",
   "enunciat": "Calcula l'àrea total d'aquest prisma recte: un prisma de base pentagonal regular de $5$ cm de costat i $3{,}44$ cm d'apotema, amb $12$ cm d'altura.",
   "opcions": [
    "$300$ cm$^2$",
    "$343$ cm$^2$",
    "$472$ cm$^2$",
    "$386$ cm$^2$"
   ],
   "pistes": [
    "Perímetre de la base: $5\\cdot5=25$ cm; $A_{\\text{base}}=\\dfrac{25\\cdot3{,}44}{2}=43$ cm$^2$.",
    "Àrea lateral: $25\\cdot12=300$ cm$^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igw6lzIG5vbcOpcyBsJ8OgcmVhIGxhdGVyYWwgKCQyNVxcY2RvdDEyJCk6IGVuY2FyYSBmYWx0YSBzdW1hci1oaSBsZXMgZHVlcyBiYXNlcyBwZW50YWdvbmFscy4iLCAiU2VtYmxhIHF1ZSBub23DqXMgaGFzIGNvbXB0YXQgVU5BIGJhc2UgcGVudGFnb25hbCBlbiBsbG9jIGRlIGR1ZXMuIiwgIk5vIGNvaW5jaWRlaXggYW1iICQyXFxjZG90NDMrMjVcXGNkb3QxMiQ6IHJldmlzYSBwZXIgc2VwYXJhdCBsJ8OgcmVhIGRlIGxhIGJhc2UgaSBsJ8OgcmVhIGxhdGVyYWwuIiwgIiJdLCAiZXJyIjogWyJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIkZBQ1RPUl9PQkxJREFUIiwgIlBST0RVQ1RFX01BTCIsICIiXSwgInJlcyI6IFsiJEFfe1xcdGV4dHtiYXNlfX09XFxkZnJhY3syNVxcY2RvdDN7LH00NH17Mn09NDMkIGNtJF4yJCIsICIkQV97XFx0ZXh0e2xhdGVyYWx9fT0yNVxcY2RvdDEyPTMwMCQgY20kXjIkIiwgIiRBX3tcXHRleHR7dG90YWx9fT0yXFxjZG90NDMrMzAwPTM4NiQgY20kXjIkIl19"
  },
  {
   "id": "170e",
   "ex": 170,
   "ap": "e",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula l'àrea total d'aquest prisma recte:",
   "enunciat": "Calcula l'àrea total d'aquest prisma recte: un prisma de $5$ cm d'altura amb la base en forma de triangle rectangle de catets $6$ cm i $8$ cm.",
   "opcions": [
    "$168$ cm$^2$",
    "$158$ cm$^2$",
    "$216$ cm$^2$",
    "$120$ cm$^2$"
   ],
   "pistes": [
    "L'àrea de la base (triangle rectangle) és $A_{\\text{base}}=\\dfrac{6\\cdot8}{2}=24$ cm$^2$.",
    "La hipotenusa, per Pitàgores, és $\\sqrt{6^2+8^2}=10$ cm, així que el perímetre és $6+8+10=24$ cm i l'àrea lateral, $24\\cdot5=120$ cm$^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiTm8gaGFzIGZldCBzZXJ2aXIgbGEgaGlwb3RlbnVzYSAoJDEwJCBjbSwgcGVyIFBpdMOgZ29yZXMpIGVuIGVsIHBlcsOtbWV0cmUgZGUgbGEgYmFzZTogZWwgcGVyw61tZXRyZSBkZWwgdHJpYW5nbGUgcmVjdGFuZ2xlIMOpcyAkNis4KzEwPTI0JCBjbSwgbm8gJDYrOD0xNCQgY20uIiwgIk5vIGNvaW5jaWRlaXggYW1iICQyXFxjZG90MjQrMjRcXGNkb3Q1JDogcmV2aXNhIHBlciBzZXBhcmF0IGwnw6ByZWEgZGUgbGEgYmFzZSBpIGwnw6ByZWEgbGF0ZXJhbC4iLCAiQXF1ZXN0IHZhbG9yIMOpcyBub23DqXMgbCfDoHJlYSBsYXRlcmFsICgkMjRcXGNkb3Q1JCk6IGVuY2FyYSBmYWx0YSBzdW1hci1oaSBsZXMgZHVlcyBiYXNlcyB0cmlhbmd1bGFycy4iXSwgImVyciI6IFsiIiwgIlNJR05FX1RFUk1FX0lOREVQRU5ERU5UIiwgIlBST0RVQ1RFX01BTCIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIl0sICJyZXMiOiBbIiRBX3tcXHRleHR7YmFzZX19PVxcZGZyYWN7NlxcY2RvdDh9ezJ9PTI0JCBjbSReMiQiLCAiSGlwb3RlbnVzYTogJFxcc3FydHs2XjIrOF4yfT0xMCQgY207IHBlcsOtbWV0cmUgJD0yNCQgY20iLCAiJEFfe1xcdGV4dHt0b3RhbH19PTJcXGNkb3QyNCsyNFxcY2RvdDU9NDgrMTIwPTE2OCQgY20kXjIkIl19"
  },
  {
   "id": "171",
   "ex": 171,
   "ap": "",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "Calcula l'àrea total d'un prisma recte de base triangular equilàtera de costat $2$ cm i altura $3$ cm.",
   "opcions": [
    "$\\approx19{,}73$ cm$^2$",
    "$\\approx18$ cm$^2$",
    "$\\approx24{,}93$ cm$^2$",
    "$\\approx21{,}46$ cm$^2$"
   ],
   "pistes": [
    "Àrea de la base: $A_{\\text{base}}=\\dfrac{2^2\\sqrt3}{4}\\approx1{,}73$ cm$^2$.",
    "Perímetre de la base: $3\\cdot2=6$ cm; àrea lateral $=6\\cdot3=18$ cm$^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJTZW1ibGEgcXVlIG5vbcOpcyBoYXMgY29tcHRhdCBVTkEgYmFzZSB0cmlhbmd1bGFyIGVuIGxsb2MgZGUgZHVlczogdW4gcHJpc21hIHNlbXByZSBlbiB0w6kgZHVlcy4iLCAiQXF1ZXN0IHZhbG9yIMOpcyBub23DqXMgbCfDoHJlYSBsYXRlcmFsICgkNlxcY2RvdDMkKTogZW5jYXJhIGZhbHRhIHN1bWFyLWhpIGxlcyBkdWVzIGJhc2VzIHRyaWFuZ3VsYXJzLiIsICJObyBjb2luY2lkZWl4IGFtYiAkMlxcY2RvdDF7LH03Mys2XFxjZG90MyQ6IHJldmlzYSBwZXIgc2VwYXJhdCBsJ8OgcmVhIGRlIGxhIGJhc2UgaSBsJ8OgcmVhIGxhdGVyYWwuIiwgIiJdLCAiZXJyIjogWyJGQUNUT1JfT0JMSURBVCIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIlBST0RVQ1RFX01BTCIsICIiXSwgInJlcyI6IFsiJEFfe1xcdGV4dHtiYXNlfX09XFxkZnJhY3syXjJcXHNxcnQzfXs0fVxcYXBwcm94MXssfTczJCBjbSReMiQiLCAiJEFfe1xcdGV4dHtsYXRlcmFsfX09NlxcY2RvdDM9MTgkIGNtJF4yJCIsICIkQV97XFx0ZXh0e3RvdGFsfX1cXGFwcHJveDJcXGNkb3Qxeyx9NzMrMThcXGFwcHJveDIxeyx9NDYkIGNtJF4yJCJdfQ=="
  },
  {
   "id": "172",
   "ex": 172,
   "ap": "",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "Calcula l'àrea total d'un prisma hexagonal regular de costat $8$ cm i altura $10$ cm.",
   "opcions": [
    "$\\approx646{,}28$ cm$^2$",
    "$\\approx1042{,}11$ cm$^2$",
    "$\\approx812{,}55$ cm$^2$",
    "$\\approx480$ cm$^2$"
   ],
   "pistes": [
    "L'apotema d'un hexàgon regular de costat $c$ és $a=\\dfrac{c\\sqrt3}{2}$; amb $c=8$, $a\\approx6{,}93$ cm.",
    "Perímetre $=6\\cdot8=48$ cm; $A_{\\text{base}}=\\dfrac{48\\cdot6{,}93}{2}\\approx166{,}28$ cm$^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJTZW1ibGEgcXVlIG5vbcOpcyBoYXMgY29tcHRhdCBVTkEgYmFzZSBoZXhhZ29uYWwgZW4gbGxvYyBkZSBkdWVzLiIsICJMJ2Fwb3RlbWEgZCd1biBoZXjDoGdvbiByZWd1bGFyIGRlIGNvc3RhdCAkOCQgY20gw6lzICQ0XFxzcXJ0M1xcYXBwcm94NnssfTkzJCBjbSwgbm8gJDgkIGNtOiBhcG90ZW1hIGkgY29zdGF0IG5vbcOpcyBjb2luY2lkZWl4ZW4gZW4gZWwgY2FzIGRlbCBxdWFkcmF0LiIsICIiLCAiQXF1ZXN0IHZhbG9yIMOpcyBub23DqXMgbCfDoHJlYSBsYXRlcmFsICgkNDhcXGNkb3QxMCQpOiBlbmNhcmEgZmFsdGEgc3VtYXItaGkgbGVzIGR1ZXMgYmFzZXMgaGV4YWdvbmFscy4iXSwgImVyciI6IFsiRkFDVE9SX09CTElEQVQiLCAiU0lHTkVfVEVSTUVfSU5ERVBFTkRFTlQiLCAiIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iXSwgInJlcyI6IFsiJGE9XFxkZnJhY3s4XFxzcXJ0M317Mn1cXGFwcHJveDZ7LH05MyQgY20iLCAiJEFfe1xcdGV4dHtiYXNlfX09XFxkZnJhY3s0OFxcY2RvdDZ7LH05M317Mn1cXGFwcHJveDE2NnssfTI4JCBjbSReMiQiLCAiJEFfe1xcdGV4dHtsYXRlcmFsfX09NDhcXGNkb3QxMD00ODAkIGNtJF4yJCIsICIkQV97XFx0ZXh0e3RvdGFsfX1cXGFwcHJveDJcXGNkb3QxNjZ7LH0yOCs0ODBcXGFwcHJveDgxMnssfTU1JCBjbSReMiQiXX0="
  },
  {
   "id": "173",
   "ex": 173,
   "ap": "",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "Calcula l'àrea total d'un prisma hexagonal regular de costat $6$ cm i altura $10$ cm.",
   "opcions": [
    "$\\approx576$ cm$^2$",
    "$\\approx360$ cm$^2$",
    "$\\approx453{,}53$ cm$^2$",
    "$\\approx547{,}06$ cm$^2$"
   ],
   "pistes": [
    "L'apotema és $a=\\dfrac{6\\sqrt3}{2}\\approx5{,}2$ cm.",
    "Perímetre $=6\\cdot6=36$ cm; $A_{\\text{base}}=\\dfrac{36\\cdot5{,}2}{2}\\approx93{,}53$ cm$^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMJ2Fwb3RlbWEgZCd1biBoZXjDoGdvbiByZWd1bGFyIGRlIGNvc3RhdCAkNiQgY20gw6lzICQzXFxzcXJ0M1xcYXBwcm94NXssfTIkIGNtLCBubyAkNiQgY20uIiwgIkFxdWVzdCB2YWxvciDDqXMgbm9tw6lzIGwnw6ByZWEgbGF0ZXJhbCAoJDM2XFxjZG90MTAkKTogZW5jYXJhIGZhbHRhIHN1bWFyLWhpIGxlcyBkdWVzIGJhc2VzIGhleGFnb25hbHMuIiwgIlNlbWJsYSBxdWUgbm9tw6lzIGhhcyBjb21wdGF0IFVOQSBiYXNlIGhleGFnb25hbCBlbiBsbG9jIGRlIGR1ZXMuIiwgIiJdLCAiZXJyIjogWyJTSUdORV9URVJNRV9JTkRFUEVOREVOVCIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIkZBQ1RPUl9PQkxJREFUIiwgIiJdLCAicmVzIjogWyIkYT1cXGRmcmFjezZcXHNxcnQzfXsyfVxcYXBwcm94NXssfTIkIGNtIiwgIiRBX3tcXHRleHR7YmFzZX19PVxcZGZyYWN7MzZcXGNkb3Q1eyx9Mn17Mn1cXGFwcHJveDkzeyx9NTMkIGNtJF4yJCIsICIkQV97XFx0ZXh0e2xhdGVyYWx9fT0zNlxcY2RvdDEwPTM2MCQgY20kXjIkIiwgIiRBX3tcXHRleHR7dG90YWx9fVxcYXBwcm94MlxcY2RvdDkzeyx9NTMrMzYwXFxhcHByb3g1NDd7LH0wNiQgY20kXjIkIl19"
  },
  {
   "id": "174",
   "ex": 174,
   "ap": "",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "L'àrea total d'un cub és $24$ cm$^2$. Calcula la longitud de la seva diagonal.",
   "opcions": [
    "$\\approx2{,}83$ cm",
    "$\\approx3{,}46$ cm",
    "$2$ cm",
    "$4$ cm"
   ],
   "pistes": [
    "Un cub té $6$ cares iguals, així que l'aresta compleix $6L^2=24 \\Rightarrow L^2=4 \\Rightarrow L=2$ cm.",
    "La diagonal del cub és $d=L\\sqrt3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3RhIMOpcyBsYSBkaWFnb25hbCBkJ3VuYSBDQVJBIGRlbCBjdWIgKCRMXFxzcXJ0MiQpLCBubyBsYSBkaWFnb25hbCBkZWwgY3ViIHNlbmNlciwgcXVlIHRyYXZlc3NhIGwnaW50ZXJpb3IgaSDDqXMgbcOpcyBsbGFyZ2E6ICRkPUxcXHNxcnQzJC4iLCAiIiwgIkFxdWVzdGEgw6lzIGwnYXJlc3RhIGRlbCBjdWIsIG5vIGxhIGRpYWdvbmFsOiBlbmNhcmEgZmFsdGEgbXVsdGlwbGljYXIgcGVyICRcXHNxcnQzJC4iLCAiU2VtYmxhIHF1ZSBoYXMgY29uZsOzcyBsYSBkaWFnb25hbCBkZWwgY3ViIGFtYiBsJ2FyZXN0YSBkZSBjYXJhIGFsIHF1YWRyYXQsIG8gaGFzIGZldCB1bmEgYXJyZWwgbWFsYW1lbnQ6IGNvbXByb3ZhIHByaW1lciAkTD1cXHNxcnR7MjQ6Nn09MiQgY20gaSBkZXNwcsOpcyBhcGxpY2EgJGQ9TFxcc3FydDMkLiJdLCAiZXJyIjogWyJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIiIsICJQQVNfSU5URVJNRURJX1BFUl9SRVNQT1NUQSIsICJBUlJFTF9NQUxfQVBMSUNBREEiXSwgInJlcyI6IFsiJEw9XFxzcXJ0ezI0OjZ9PVxcc3FydDQ9MiQgY20iLCAiJGQ9TFxcc3FydDM9Mlxcc3FydDNcXGFwcHJveDN7LH00NiQgY20iXX0="
  },
  {
   "id": "175",
   "ex": 175,
   "ap": "",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "L'àrea total d'un cub és $150$ m$^2$. Calcula la longitud de la seva diagonal.",
   "opcions": [
    "$\\approx7{,}07$ m",
    "$\\approx8{,}66$ m",
    "$25$ m",
    "$5$ m"
   ],
   "pistes": [
    "Aresta: $6L^2=150 \\Rightarrow L^2=25 \\Rightarrow L=5$ m.",
    "Diagonal: $d=L\\sqrt3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3RhIMOpcyBsYSBkaWFnb25hbCBkJ3VuYSBDQVJBIGRlbCBjdWIgKCRMXFxzcXJ0MiQpLCBubyBsYSBkaWFnb25hbCBkZWwgY3ViIHNlbmNlcjogY2FsICRkPUxcXHNxcnQzJC4iLCAiIiwgIk5vIGhhcyBmZXQgbCdhcnJlbCBxdWFkcmFkYSBkZSAkMTUwOjY9MjUkOiBsJ2FyZXN0YSDDqXMgJEw9XFxzcXJ0ezI1fT01JCBtLCBubyAkMjUkIG0uIiwgIkFxdWVzdGEgw6lzIGwnYXJlc3RhIGRlbCBjdWIsIG5vIGxhIGRpYWdvbmFsOiBlbmNhcmEgZmFsdGEgbXVsdGlwbGljYXIgcGVyICRcXHNxcnQzJC4iXSwgImVyciI6IFsiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiLCAiQVJSRUxfTUFMX0FQTElDQURBIiwgIlBBU19JTlRFUk1FRElfUEVSX1JFU1BPU1RBIl0sICJyZXMiOiBbIiRMPVxcc3FydHsxNTA6Nn09XFxzcXJ0ezI1fT01JCBtIiwgIiRkPUxcXHNxcnQzPTVcXHNxcnQzXFxhcHByb3g4eyx9NjYkIG0iXX0="
  },
  {
   "id": "176a",
   "ex": 176,
   "ap": "a",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "En un estudi d'arquitectura s'ha dissenyat un edifici que té forma de prisma recte, de $20$ m d'altura, amb una base triangular equilàtera de $6$ m de costat.",
   "enunciat": "En un estudi d'arquitectura s'ha dissenyat un edifici que té forma de prisma recte, de $20$ m d'altura, amb una base triangular equilàtera de $6$ m de costat. Quant mesura l'àrea lateral de l'edifici?",
   "opcions": [
    "$240$ m$^2$",
    "$\\approx15{,}59$ m$^2$",
    "$360$ m$^2$",
    "$\\approx391{,}18$ m$^2$"
   ],
   "pistes": [
    "El perímetre de la base triangular és $3\\cdot6=18$ m.",
    "Àrea lateral d'un prisma: perímetre de la base per l'altura."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJObyBjb2luY2lkZWl4IGFtYiAkMThcXGNkb3QyMCQ6IGNvbXByb3ZhIHF1ZSBlbCBwZXLDrW1ldHJlIGRlIGxhIGJhc2UgKCQzXFxjZG90Nj0xOCQgbSkgw6lzIGNvcnJlY3RlIGFiYW5zIGRlIG11bHRpcGxpY2FyLWxvIHBlciBsJ2FsdHVyYS4iLCAiQXF1ZXN0YSDDqXMgbCfDoHJlYSBkJ3VuYSBiYXNlIHRyaWFuZ3VsYXIsIG5vIGwnw6ByZWEgbGF0ZXJhbDogbCfDoHJlYSBsYXRlcmFsIMOpcyBwZXLDrW1ldHJlIHBlciBhbHR1cmEsIG5vIGRlcMOobiBkZSBsYSBmw7NybXVsYSBkZWwgdHJpYW5nbGUgZXF1aWzDoHRlci4iLCAiIiwgIkFxdWVzdCB2YWxvciBqYSBpbmNsb3UgbGVzIGR1ZXMgYmFzZXMgdHJpYW5ndWxhcnM6IGFxdcOtIG5vbcOpcyBlcyBkZW1hbmEgbCfDoHJlYSBMQVRFUkFMLCBzZW5zZSBsZXMgYmFzZXMuIl0sICJlcnIiOiBbIkZBQ1RPUl9PQkxJREFUIiwgIlBBU19JTlRFUk1FRElfUEVSX1JFU1BPU1RBIiwgIiIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIl0sICJyZXMiOiBbIiRBX3tcXHRleHR7bGF0ZXJhbH19PTE4XFxjZG90MjAkIiwgIiRBX3tcXHRleHR7bGF0ZXJhbH19PTM2MCQgbSReMiQiXX0="
  },
  {
   "id": "176b",
   "ex": 176,
   "ap": "b",
   "bloc": "prismes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "En un estudi d'arquitectura s'ha dissenyat un edifici que té forma de prisma recte, de $20$ m d'altura, amb una base triangular equilàtera de $6$ m de costat.",
   "enunciat": "En un estudi d'arquitectura s'ha dissenyat un edifici que té forma de prisma recte, de $20$ m d'altura, amb una base triangular equilàtera de $6$ m de costat. Quant mesura l'àrea total de l'edifici?",
   "opcions": [
    "$\\approx406{,}59$ m$^2$",
    "$\\approx375{,}59$ m$^2$",
    "$360$ m$^2$",
    "$\\approx391{,}18$ m$^2$"
   ],
   "pistes": [
    "Àrea de la base: $A_{\\text{base}}=\\dfrac{6^2\\sqrt3}{4}\\approx15{,}59$ m$^2$.",
    "Àrea total $=$ àrea lateral (calculada abans, $360$ m$^2$) més les dues bases."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJObyBjb2luY2lkZWl4IGFtYiAkMzYwKzJcXGNkb3QxNXssfTU5JDogcmV2aXNhIGVsIHByb2R1Y3RlIGRlIGwnw6ByZWEgZGVsIHRyaWFuZ2xlIGVxdWlsw6B0ZXIgYWJhbnMgZGUgc3VtYXItbGEgZHVlcyB2ZWdhZGVzLiIsICJTZW1ibGEgcXVlIG5vbcOpcyBoYXMgY29tcHRhdCBVTkEgYmFzZSB0cmlhbmd1bGFyIGVuIGxsb2MgZGUgZHVlcy4iLCAiQXF1ZXN0IHZhbG9yIMOpcyBub23DqXMgbCfDoHJlYSBsYXRlcmFsIChsJ2FwYXJ0YXQgYW50ZXJpb3IpOiBlbmNhcmEgZmFsdGEgc3VtYXItaGkgbGVzIGR1ZXMgYmFzZXMgdHJpYW5ndWxhcnMuIiwgIiJdLCAiZXJyIjogWyJQUk9EVUNURV9NQUwiLCAiRkFDVE9SX09CTElEQVQiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiXSwgInJlcyI6IFsiJEFfe1xcdGV4dHtiYXNlfX09XFxkZnJhY3s2XjJcXHNxcnQzfXs0fVxcYXBwcm94MTV7LH01OSQgbSReMiQiLCAiJEFfe1xcdGV4dHt0b3RhbH19PTM2MCsyXFxjZG90MTV7LH01OVxcYXBwcm94Mzkxeyx9MTgkIG0kXjIkIl19"
  },
  {
   "id": "177",
   "ex": 177,
   "ap": "",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "Una piràmide pentagonal regular té la base de costat $4$ cm i apotema $2{,}75$ cm; l'apotema de la piràmide és $11{,}83$ cm. Calcula la seva àrea total.",
   "opcions": [
    "$118{,}3$ cm$^2$",
    "$145{,}8$ cm$^2$",
    "$27{,}5$ cm$^2$",
    "$236{,}6$ cm$^2$"
   ],
   "pistes": [
    "Perímetre de la base: $5\\cdot4=20$ cm; $A_{\\text{base}}=\\dfrac{20\\cdot2{,}75}{2}=27{,}5$ cm$^2$.",
    "$A_{\\text{lateral}}=\\dfrac{20\\cdot11{,}83}{2}=118{,}3$ cm$^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igw6lzIG5vbcOpcyBsJ8OgcmVhIGxhdGVyYWw6IGVuY2FyYSBmYWx0YSBzdW1hci1oaSBsJ8OgcmVhIGRlIGxhIGJhc2UgcGVudGFnb25hbC4iLCAiIiwgIkFxdWVzdGEgw6lzIG5vbcOpcyBsJ8OgcmVhIGRlIGxhIGJhc2U6IGVuY2FyYSBmYWx0YSBzdW1hci1oaSBsJ8OgcmVhIGxhdGVyYWwuIiwgIlNlbWJsYSBxdWUgbm8gaGFzIGRpdmlkaXQgcGVyICQyJCBsJ8OgcmVhIGxhdGVyYWw6ICRBX3tcXHRleHR7bGF0ZXJhbH19PVxcZGZyYWN7XFx0ZXh0e3BlcsOtbWV0cmV9XFxjZG90XFx0ZXh0e2Fwb3RlbWEgcGlyw6BtaWRlfX17Mn0kLCBubyBzZW5zZSBkaXZpZGlyLiJdLCAiZXJyIjogWyJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIiIsICJTVU1BX0RFX1BBUlRTX0lOQ09NUExFVEEiLCAiU0lHTkVfVEVSTUVfSU5ERVBFTkRFTlQiXSwgInJlcyI6IFsiJEFfe1xcdGV4dHtiYXNlfX09XFxkZnJhY3syMFxcY2RvdDJ7LH03NX17Mn09Mjd7LH01JCBjbSReMiQiLCAiJEFfe1xcdGV4dHtsYXRlcmFsfX09XFxkZnJhY3syMFxcY2RvdDExeyx9ODN9ezJ9PTExOHssfTMkIGNtJF4yJCIsICIkQV97XFx0ZXh0e3RvdGFsfX09Mjd7LH01KzExOHssfTM9MTQ1eyx9OCQgY20kXjIkIl19"
  },
  {
   "id": "179a",
   "ex": 179,
   "ap": "a",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Dues piràmides regulars.",
   "enunciat": "Una piràmide quadrangular regular té la base de costat $25$ m i l'apotema de la piràmide fa $34$ m. Calcula la seva àrea total.",
   "opcions": [
    "$3400$ m$^2$",
    "$2325$ m$^2$",
    "$1700$ m$^2$",
    "$625$ m$^2$"
   ],
   "pistes": [
    "Àrea de la base: $A_{\\text{base}}=25^2=625$ m$^2$.",
    "Perímetre $=4\\cdot25=100$ m; $A_{\\text{lateral}}=\\dfrac{100\\cdot34}{2}=1700$ m$^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJTZW1ibGEgcXVlIG5vIGhhcyBkaXZpZGl0IHBlciAkMiQgbCfDoHJlYSBsYXRlcmFsLiIsICIiLCAiQXF1ZXN0YSDDqXMgbm9tw6lzIGwnw6ByZWEgbGF0ZXJhbDogZW5jYXJhIGZhbHRhIHN1bWFyLWhpIGwnw6ByZWEgZGUgbGEgYmFzZSBxdWFkcmFkYS4iLCAiQXF1ZXN0YSDDqXMgbm9tw6lzIGwnw6ByZWEgZGUgbGEgYmFzZTogZW5jYXJhIGZhbHRhIHN1bWFyLWhpIGwnw6ByZWEgbGF0ZXJhbC4iXSwgImVyciI6IFsiU0lHTkVfVEVSTUVfSU5ERVBFTkRFTlQiLCAiIiwgIlNVTUFfREVfUEFSVFNfSU5DT01QTEVUQSIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIl0sICJyZXMiOiBbIiRBX3tcXHRleHR7YmFzZX19PTI1XjI9NjI1JCBtJF4yJCIsICIkQV97XFx0ZXh0e2xhdGVyYWx9fT1cXGRmcmFjezEwMFxcY2RvdDM0fXsyfT0xNzAwJCBtJF4yJCIsICIkQV97XFx0ZXh0e3RvdGFsfX09NjI1KzE3MDA9MjMyNSQgbSReMiQiXX0="
  },
  {
   "id": "179b",
   "ex": 179,
   "ap": "b",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Dues piràmides regulars.",
   "enunciat": "Una piràmide hexagonal regular té la base de costat $6$ m i l'altura de la piràmide (no l'apotema) fa $9$ m. Calcula la seva àrea total.",
   "opcions": [
    "$\\approx254{,}53$ m$^2$",
    "$\\approx187{,}06$ m$^2$",
    "$\\approx280{,}59$ m$^2$",
    "$\\approx93{,}53$ m$^2$"
   ],
   "pistes": [
    "Apotema de la base: $a_{\\text{base}}=\\dfrac{6\\sqrt3}{2}\\approx5{,}2$ m.",
    "Apotema de la piràmide (Pitàgores, amb l'altura $9$ m i $a_{\\text{base}}$): $\\sqrt{9^2+5{,}2^2}\\approx10{,}39$ m."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJTZW1ibGEgcXVlIGhhcyBmZXQgc2VydmlyIGRpcmVjdGFtZW50IGwnYWx0dXJhIGRlIGxhIHBpcsOgbWlkZSAoJDkkIG0pIGNvbSBzaSBmb3MgbCdhcG90ZW1hIGRlIGxhIHBpcsOgbWlkZSBlbiBjb21wdGVzIGRlIGNhbGN1bGFyLWxhIGFtYiBQaXTDoGdvcmVzIGEgcGFydGlyIGRlIGwnYWx0dXJhIGkgbCdhcG90ZW1hIGRlIGxhIGJhc2UuIiwgIkFxdWVzdCB2YWxvciDDqXMgbm9tw6lzIGwnw6ByZWEgbGF0ZXJhbDogZW5jYXJhIGZhbHRhIHN1bWFyLWhpIGwnw6ByZWEgZGUgbGEgYmFzZSBoZXhhZ29uYWwuIiwgIiIsICJBcXVlc3RhIMOpcyBub23DqXMgbCfDoHJlYSBkZSBsYSBiYXNlOiBlbmNhcmEgZmFsdGEgc3VtYXItaGkgbCfDoHJlYSBsYXRlcmFsLiJdLCAiZXJyIjogWyJBUlJFTF9NQUxfQVBMSUNBREEiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiLCAiU1VNQV9ERV9QQVJUU19JTkNPTVBMRVRBIl0sICJyZXMiOiBbIiRhX3tcXHRleHR7YmFzZX19XFxhcHByb3g1eyx9MiQgbSIsICIkQV97XFx0ZXh0e2Jhc2V9fT1cXGRmcmFjezM2XFxjZG90NXssfTJ9ezJ9XFxhcHByb3g5M3ssfTUzJCBtJF4yJCIsICIkYV97XFx0ZXh0e3BpcsOgbWlkZX19PVxcc3FydHs5XjIrNXssfTJeMn1cXGFwcHJveDEweyx9MzkkIG0iLCAiJEFfe1xcdGV4dHtsYXRlcmFsfX09XFxkZnJhY3szNlxcY2RvdDEweyx9Mzl9ezJ9XFxhcHByb3gxODd7LH0wNiQgbSReMiQiLCAiJEFfe1xcdGV4dHt0b3RhbH19XFxhcHByb3g5M3ssfTUzKzE4N3ssfTA2XFxhcHByb3gyODB7LH01OSQgbSReMiQiXX0="
  },
  {
   "id": "180a",
   "ex": 180,
   "ap": "a",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula l'àrea total d'un tetraedre regular d'aresta:",
   "enunciat": "Calcula l'àrea total d'un tetraedre regular d'aresta: $3$ cm.",
   "opcions": [
    "$\\approx15{,}59$ cm$^2$",
    "$\\approx3{,}9$ cm$^2$",
    "$\\approx9$ cm$^2$",
    "$\\approx31{,}18$ cm$^2$"
   ],
   "pistes": [
    "Cada cara és un triangle equilàter d'àrea $\\dfrac{L^2\\sqrt3}{4}$, i n'hi ha $4$ d'iguals.",
    "Àrea total: $A=4\\cdot\\dfrac{L^2\\sqrt3}{4}=L^2\\sqrt3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiVW4gdGV0cmFlZHJlIHJlZ3VsYXIgdMOpICQ0JCBjYXJlcyB0cmlhbmd1bGFycyBpZ3VhbHMsIG5vICQxJDogYXF1ZXN0IHZhbG9yIG5vbcOpcyDDqXMgbCfDoHJlYSBkJ1VOQSBjYXJhLiIsICJUJ2hhcyBkZWl4YXQgZWwgZmFjdG9yICRcXHNxcnQzJCBkZSBsJ8OgcmVhIGRlbCB0cmlhbmdsZSBlcXVpbMOgdGVyOiBsJ8OgcmVhIHRvdGFsIMOpcyAkTF4yXFxzcXJ0MyQsIG5vICRMXjIkLiIsICJBcXVlc3QgdmFsb3IgZHVwbGljYSBlbCByZXN1bHRhdCBjb3JyZWN0ZTogdW4gdGV0cmFlZHJlIHTDqSAkNCQgY2FyZXMgKGZhY3RvciAkNCQpLCBubyAkOCQuIl0sICJlcnIiOiBbIiIsICJGQUNUT1JfT0JMSURBVCIsICJBUlJFTF9NQUxfQVBMSUNBREEiLCAiUFJPRFVDVEVfTUFMIl0sICJyZXMiOiBbIiRBPUxeMlxcc3FydDM9M14yXFxjZG90XFxzcXJ0MyQiLCAiJEFcXGFwcHJveDE1eyx9NTkkIGNtJF4yJCJdfQ=="
  },
  {
   "id": "180b",
   "ex": 180,
   "ap": "b",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula l'àrea total d'un tetraedre regular d'aresta:",
   "enunciat": "Calcula l'àrea total d'un tetraedre regular d'aresta: $5$ cm.",
   "opcions": [
    "$\\approx10{,}82$ cm$^2$",
    "$\\approx43{,}3$ cm$^2$",
    "$\\approx25$ cm$^2$",
    "$\\approx86{,}6$ cm$^2$"
   ],
   "pistes": [
    "Cada cara és un triangle equilàter d'àrea $\\dfrac{L^2\\sqrt3}{4}$, i n'hi ha $4$ d'iguals.",
    "Àrea total: $A=4\\cdot\\dfrac{L^2\\sqrt3}{4}=L^2\\sqrt3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJVbiB0ZXRyYWVkcmUgcmVndWxhciB0w6kgJDQkIGNhcmVzIHRyaWFuZ3VsYXJzIGlndWFscywgbm8gJDEkOiBhcXVlc3QgdmFsb3Igbm9tw6lzIMOpcyBsJ8OgcmVhIGQnVU5BIGNhcmEuIiwgIiIsICJUJ2hhcyBkZWl4YXQgZWwgZmFjdG9yICRcXHNxcnQzJCBkZSBsJ8OgcmVhIGRlbCB0cmlhbmdsZSBlcXVpbMOgdGVyOiBsJ8OgcmVhIHRvdGFsIMOpcyAkTF4yXFxzcXJ0MyQsIG5vICRMXjIkLiIsICJBcXVlc3QgdmFsb3IgZHVwbGljYSBlbCByZXN1bHRhdCBjb3JyZWN0ZTogdW4gdGV0cmFlZHJlIHTDqSAkNCQgY2FyZXMgKGZhY3RvciAkNCQpLCBubyAkOCQuIl0sICJlcnIiOiBbIkZBQ1RPUl9PQkxJREFUIiwgIiIsICJBUlJFTF9NQUxfQVBMSUNBREEiLCAiUFJPRFVDVEVfTUFMIl0sICJyZXMiOiBbIiRBPUxeMlxcc3FydDM9NV4yXFxjZG90XFxzcXJ0MyQiLCAiJEFcXGFwcHJveDQzeyx9MyQgY20kXjIkIl19"
  },
  {
   "id": "180c",
   "ex": 180,
   "ap": "c",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula l'àrea total d'un tetraedre regular d'aresta:",
   "enunciat": "Calcula l'àrea total d'un tetraedre regular d'aresta: $9$ cm.",
   "opcions": [
    "$\\approx35{,}08$ cm$^2$",
    "$\\approx140{,}3$ cm$^2$",
    "$\\approx280{,}59$ cm$^2$",
    "$\\approx81$ cm$^2$"
   ],
   "pistes": [
    "Cada cara és un triangle equilàter d'àrea $\\dfrac{L^2\\sqrt3}{4}$, i n'hi ha $4$ d'iguals.",
    "Àrea total: $A=4\\cdot\\dfrac{L^2\\sqrt3}{4}=L^2\\sqrt3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJVbiB0ZXRyYWVkcmUgcmVndWxhciB0w6kgJDQkIGNhcmVzIHRyaWFuZ3VsYXJzIGlndWFscywgbm8gJDEkOiBhcXVlc3QgdmFsb3Igbm9tw6lzIMOpcyBsJ8OgcmVhIGQnVU5BIGNhcmEuIiwgIiIsICJBcXVlc3QgdmFsb3IgZHVwbGljYSBlbCByZXN1bHRhdCBjb3JyZWN0ZTogdW4gdGV0cmFlZHJlIHTDqSAkNCQgY2FyZXMgKGZhY3RvciAkNCQpLCBubyAkOCQuIiwgIlQnaGFzIGRlaXhhdCBlbCBmYWN0b3IgJFxcc3FydDMkIGRlIGwnw6ByZWEgZGVsIHRyaWFuZ2xlIGVxdWlsw6B0ZXI6IGwnw6ByZWEgdG90YWwgw6lzICRMXjJcXHNxcnQzJCwgbm8gJExeMiQuIl0sICJlcnIiOiBbIkZBQ1RPUl9PQkxJREFUIiwgIiIsICJQUk9EVUNURV9NQUwiLCAiQVJSRUxfTUFMX0FQTElDQURBIl0sICJyZXMiOiBbIiRBPUxeMlxcc3FydDM9OV4yXFxjZG90XFxzcXJ0MyQiLCAiJEFcXGFwcHJveDE0MHssfTMkIGNtJF4yJCJdfQ=="
  },
  {
   "id": "180d",
   "ex": 180,
   "ap": "d",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula l'àrea total d'un tetraedre regular d'aresta:",
   "enunciat": "Calcula l'àrea total d'un tetraedre regular d'aresta: $6{,}2$ cm.",
   "opcions": [
    "$\\approx133{,}16$ cm$^2$",
    "$\\approx38{,}44$ cm$^2$",
    "$\\approx66{,}58$ cm$^2$",
    "$\\approx16{,}64$ cm$^2$"
   ],
   "pistes": [
    "Cada cara és un triangle equilàter d'àrea $\\dfrac{L^2\\sqrt3}{4}$, i n'hi ha $4$ d'iguals.",
    "Àrea total: $A=4\\cdot\\dfrac{L^2\\sqrt3}{4}=L^2\\sqrt3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3QgdmFsb3IgZHVwbGljYSBlbCByZXN1bHRhdCBjb3JyZWN0ZTogdW4gdGV0cmFlZHJlIHTDqSAkNCQgY2FyZXMgKGZhY3RvciAkNCQpLCBubyAkOCQuIiwgIlQnaGFzIGRlaXhhdCBlbCBmYWN0b3IgJFxcc3FydDMkIGRlIGwnw6ByZWEgZGVsIHRyaWFuZ2xlIGVxdWlsw6B0ZXI6IGwnw6ByZWEgdG90YWwgw6lzICRMXjJcXHNxcnQzJCwgbm8gJExeMiQuIiwgIiIsICJVbiB0ZXRyYWVkcmUgcmVndWxhciB0w6kgJDQkIGNhcmVzIHRyaWFuZ3VsYXJzIGlndWFscywgbm8gJDEkOiBhcXVlc3QgdmFsb3Igbm9tw6lzIMOpcyBsJ8OgcmVhIGQnVU5BIGNhcmEuIl0sICJlcnIiOiBbIlBST0RVQ1RFX01BTCIsICJBUlJFTF9NQUxfQVBMSUNBREEiLCAiIiwgIkZBQ1RPUl9PQkxJREFUIl0sICJyZXMiOiBbIiRBPUxeMlxcc3FydDM9NnssfTJeMlxcY2RvdFxcc3FydDMkIiwgIiRBXFxhcHByb3g2NnssfTU4JCBjbSReMiQiXX0="
  },
  {
   "id": "181a",
   "ex": 181,
   "ap": "a",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Dues piràmides regulars.",
   "enunciat": "Una piràmide quadrangular regular té la base de costat $8$ m i l'altura (no l'apotema) fa $10$ m. Calcula la seva àrea total.",
   "opcions": [
    "$\\approx64$ m$^2$",
    "$\\approx236{,}33$ m$^2$",
    "$\\approx384$ m$^2$",
    "$\\approx172{,}33$ m$^2$"
   ],
   "pistes": [
    "Apotema de la piràmide (Pitàgores): amb altura $10$ m i apotema de la base $4$ m, $\\sqrt{10^2+4^2}\\approx10{,}77$ m.",
    "$A_{\\text{base}}=8^2=64$ m$^2$; $A_{\\text{lateral}}=\\dfrac{32\\cdot10{,}77}{2}\\approx172{,}33$ m$^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3RhIMOpcyBub23DqXMgbCfDoHJlYSBkZSBsYSBiYXNlOiBlbmNhcmEgZmFsdGEgc3VtYXItaGkgbCfDoHJlYSBsYXRlcmFsLiIsICIiLCAiU2VtYmxhIHF1ZSBoYXMgZmV0IHNlcnZpciBkaXJlY3RhbWVudCBsJ2FsdHVyYSBkZSBsYSBwaXLDoG1pZGUgKCQxMCQgbSkgY29tIGEgYXBvdGVtYSBkZSBsYSBwaXLDoG1pZGUsIHNlbnNlIGFwbGljYXIgUGl0w6Bnb3JlcyBhbWIgbCdhcG90ZW1hIGRlIGxhIGJhc2UuIiwgIkFxdWVzdCB2YWxvciDDqXMgbm9tw6lzIGwnw6ByZWEgbGF0ZXJhbDogZW5jYXJhIGZhbHRhIHN1bWFyLWhpIGwnw6ByZWEgZGUgbGEgYmFzZSBxdWFkcmFkYS4iXSwgImVyciI6IFsiU1VNQV9ERV9QQVJUU19JTkNPTVBMRVRBIiwgIiIsICJBUlJFTF9NQUxfQVBMSUNBREEiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyJdLCAicmVzIjogWyIkYV97XFx0ZXh0e3BpcsOgbWlkZX19PVxcc3FydHsxMF4yKzReMn1cXGFwcHJveDEweyx9NzckIG0iLCAiJEFfe1xcdGV4dHtsYXRlcmFsfX09XFxkZnJhY3szMlxcY2RvdDEweyx9Nzd9ezJ9XFxhcHByb3gxNzJ7LH0zMyQgbSReMiQiLCAiJEFfe1xcdGV4dHt0b3RhbH19XFxhcHByb3g2NCsxNzJ7LH0zM1xcYXBwcm94MjM2eyx9MzMkIG0kXjIkIl19"
  },
  {
   "id": "181b",
   "ex": 181,
   "ap": "b",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Dues piràmides regulars.",
   "enunciat": "Una piràmide hexagonal regular té la base de costat $6$ m i l'altura (no l'apotema) fa $8$ m. Calcula la seva àrea total.",
   "opcions": [
    "$\\approx265{,}24$ m$^2$",
    "$\\approx93{,}53$ m$^2$",
    "$\\approx388$ m$^2$",
    "$\\approx171{,}71$ m$^2$"
   ],
   "pistes": [
    "Apotema de la base: $\\approx5{,}2$ m; apotema de la piràmide (Pitàgores amb l'altura $8$ m): $\\sqrt{8^2+5{,}2^2}\\approx9{,}54$ m.",
    "$A_{\\text{base}}\\approx93{,}53$ m$^2$; $A_{\\text{lateral}}\\approx\\dfrac{36\\cdot9{,}54}{2}\\approx171{,}71$ m$^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0YSDDqXMgbm9tw6lzIGwnw6ByZWEgZGUgbGEgYmFzZTogZW5jYXJhIGZhbHRhIHN1bWFyLWhpIGwnw6ByZWEgbGF0ZXJhbC4iLCAiU2VtYmxhIHF1ZSBoYXMgZmV0IHNlcnZpciBkaXJlY3RhbWVudCBsJ2FsdHVyYSBkZSBsYSBwaXLDoG1pZGUgKCQ4JCBtKSBjb20gYSBhcG90ZW1hIGRlIGxhIHBpcsOgbWlkZSwgc2Vuc2UgYXBsaWNhciBQaXTDoGdvcmVzIGFtYiBsJ2Fwb3RlbWEgZGUgbGEgYmFzZS4iLCAiQXF1ZXN0IHZhbG9yIMOpcyBub23DqXMgbCfDoHJlYSBsYXRlcmFsOiBlbmNhcmEgZmFsdGEgc3VtYXItaGkgbCfDoHJlYSBkZSBsYSBiYXNlIGhleGFnb25hbC4iXSwgImVyciI6IFsiIiwgIlNVTUFfREVfUEFSVFNfSU5DT01QTEVUQSIsICJBUlJFTF9NQUxfQVBMSUNBREEiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyJdLCAicmVzIjogWyIkYV97XFx0ZXh0e2Jhc2V9fVxcYXBwcm94NXssfTIkIG0iLCAiJGFfe1xcdGV4dHtwaXLDoG1pZGV9fT1cXHNxcnR7OF4yKzV7LH0yXjJ9XFxhcHByb3g5eyx9NTQkIG0iLCAiJEFfe1xcdGV4dHtsYXRlcmFsfX1cXGFwcHJveFxcZGZyYWN7MzZcXGNkb3Q5eyx9NTR9ezJ9XFxhcHByb3gxNzF7LH03MSQgbSReMiQiLCAiJEFfe1xcdGV4dHt0b3RhbH19XFxhcHByb3g5M3ssfTUzKzE3MXssfTcxXFxhcHByb3gyNjV7LH0yNCQgbSReMiQiXX0="
  },
  {
   "id": "182",
   "ex": 182,
   "ap": "",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Quina aresta té un cub que té la mateixa àrea total que una piràmide d'àrea total $4$ cm$^2$?",
   "opcions": [
    "$\\approx0{,}82$ cm",
    "$4$ cm",
    "$\\approx0{,}67$ cm",
    "$24$ cm"
   ],
   "pistes": [
    "Un cub d'aresta $L$ té àrea total $6L^2$; iguala-la a $4$ cm$^2$.",
    "Aïlla $L$: $L^2=4:6$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiTCfDoHJlYSB0b3RhbCBkZWwgY3ViIG5vIMOpcyBkaXJlY3RhbWVudCBsJ2FyZXN0YTogY2FsIGHDr2xsYXIgJEwkIGRlICQ2TF4yPTQkLCBubyBmZXIgc2VydmlyICQ0JCBkaXJlY3RhbWVudCBjb20gYSBhcmVzdGEuIiwgIk5vIGNvaW5jaWRlaXggYW1iICRcXHNxcnR7NDo2fSQ6IGNvbXByb3ZhIHF1ZSBkaXZpZGVpeGVzIGwnw6ByZWEgZW50cmUgJDYkIGNhcmVzIGFiYW5zIGRlIGZlciBsJ2FycmVsIHF1YWRyYWRhLiIsICJTZW1ibGEgcXVlIGhhcyBtdWx0aXBsaWNhdCAkNFxcY2RvdDYkIGVuIGxsb2MgZGUgZGl2aWRpciAkNDo2JDogbGEgcmVsYWNpw7Mgw6lzICQ2TF4yPTQkLCBwZXIgdGFudCAkTF4yPTQ6NiQuIl0sICJlcnIiOiBbIiIsICJBUlJFTF9PQkxJREFEQSIsICJBUlJFTF9NQUxfQVBMSUNBREEiLCAiT1JEUkVfTVVMVElQTElDQUNJT19ESVZJU0lPIl0sICJyZXMiOiBbIiQ2TF4yPTQgXFxSaWdodGFycm93IExeMj00OjZcXGFwcHJveDB7LH02NyQiLCAiJEw9XFxzcXJ0ezB7LH02N31cXGFwcHJveDB7LH04MiQgY20iXX0="
  },
  {
   "id": "183",
   "ex": 183,
   "ap": "",
   "bloc": "piramides",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "Una piràmide hexagonal regular té la base de costat $3$ cm i l'apotema de la piràmide fa $10$ cm. Quina aresta ha de tenir un tetraedre regular perquè la seva àrea total sigui la mateixa?",
   "opcions": [
    "$\\approx6{,}53$ cm",
    "$\\approx113{,}38$ cm",
    "$\\approx8{,}09$ cm",
    "$\\approx65{,}46$ cm"
   ],
   "pistes": [
    "Apotema de la base: $\\dfrac{3\\sqrt3}{2}\\approx2{,}6$ cm; $A_{\\text{base}}=\\dfrac{18\\cdot2{,}6}{2}\\approx23{,}38$ cm$^2$.",
    "$A_{\\text{lateral}}=\\dfrac{18\\cdot10}{2}=90$ cm$^2$, així que $A_{\\text{total,piràmide}}\\approx23{,}38+90\\approx113{,}38$ cm$^2$.",
    "Iguala aquesta àrea a la del tetraedre, $L^2\\sqrt3$, i aïlla $L$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJObyBjb2luY2lkZWl4IGFtYiAkXFxzcXJ0ezExM3ssfTM4Olxcc3FydDN9JDogY29tcHJvdmEgcXVlIGRpdmlkZWl4ZXMgcGVyICRcXHNxcnQzJCAobm8gcGVyICQzJCkgYWJhbnMgZGUgZmVyIGwnYXJyZWwuIiwgIkFxdWVzdGEgw6lzIGwnw6ByZWEgdG90YWwgZGUgbGEgcGlyw6BtaWRlIChlbiBjbSReMiQpLCBubyBsJ2FyZXN0YSBkZWwgdGV0cmFlZHJlOiBlbmNhcmEgZmFsdGEgYcOvbGxhciAkTCQgZGUgJExeMlxcc3FydDNcXGFwcHJveDExM3ssfTM4JC4iLCAiIiwgIkFxdWVzdCDDqXMgZWwgdmFsb3IgZGUgJExeMiQgKCQxMTN7LH0zODpcXHNxcnQzJCksIG5vIGRlICRMJDogZW5jYXJhIGZhbHRhIGZlciBsJ2FycmVsIHF1YWRyYWRhLiJdLCAiZXJyIjogWyJPUkRSRV9NVUxUSVBMSUNBQ0lPX0RJVklTSU8iLCAiQVJSRUxfT0JMSURBREEiLCAiIiwgIkFSUkVMX01BTF9BUExJQ0FEQSJdLCAicmVzIjogWyIkYV97XFx0ZXh0e2Jhc2V9fVxcYXBwcm94MnssfTYkIGNtOyAkQV97XFx0ZXh0e2Jhc2V9fVxcYXBwcm94MjN7LH0zOCQgY20kXjIkIiwgIiRBX3tcXHRleHR7bGF0ZXJhbH19PVxcZGZyYWN7MThcXGNkb3QxMH17Mn09OTAkIGNtJF4yJCIsICIkQV97XFx0ZXh0e3RvdGFsLHBpcsOgbWlkZX19XFxhcHByb3gyM3ssfTM4KzkwXFxhcHByb3gxMTN7LH0zOCQgY20kXjIkIiwgIiRMXjJcXHNxcnQzXFxhcHByb3gxMTN7LH0zOCBcXFJpZ2h0YXJyb3cgTF4yXFxhcHByb3g2NXssfTQ2JCIsICIkTFxcYXBwcm94OHssfTA5JCBjbSJdfQ=="
  },
  {
   "id": "184",
   "ex": 184,
   "ap": "",
   "bloc": "cossos_rodons",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "Un cilindre té $9$ cm d'altura i $6$ cm de diàmetre de la base. En dibuixar-ne el desenvolupament pla, el rectangle lateral té una amplada igual a la longitud de la circumferència de la base. Calcula aquesta longitud.",
   "opcions": [
    "$54$ cm",
    "$\\approx9{,}42$ cm",
    "$\\approx28{,}26$ cm",
    "$\\approx18{,}84$ cm"
   ],
   "pistes": [
    "El diàmetre és $6$ cm, així que el radi és $3$ cm.",
    "La longitud de la circumferència és $L=2\\pi r$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igbm8gZmEgc2VydmlyICRcXHBpJDogbGEgbG9uZ2l0dWQgZCd1bmEgY2lyY3VtZmVyw6huY2lhIHNlbXByZSDDqXMgJDJcXHBpIHIkLCBubyB1biBzaW1wbGUgcHJvZHVjdGUgZGUgbm9tYnJlcyBlbnRlcnMuIiwgIkhhcyBmZXQgc2VydmlyIGVsIHJhZGkgKCQzJCBjbSkgZW4gbGxvYyBkZWwgZGnDoG1ldHJlIGEgbGEgZsOzcm11bGE6IGxhIGxvbmdpdHVkIMOpcyAkTD0yXFxwaSByPVxccGkgZCQsIGNvbXByb3ZhIHF1ZSBtdWx0aXBsaXF1ZXMgcGVyICQyJCBlbCByYWRpLCBvIGRpcmVjdGFtZW50IHBlbCBkacOgbWV0cmUuIiwgIk5vIGNvaW5jaWRlaXggYW1iICQyXFxwaVxcY2RvdDMkOiByZXZpc2EgZWwgcHJvZHVjdGUgcGFzIGEgcGFzIGFtYiAkXFxwaVxcYXBwcm94M3ssfTE0JC4iLCAiIl0sICJlcnIiOiBbIlBJX09CTElEQVQiLCAiRkFDVE9SX09CTElEQVQiLCAiUFJPRFVDVEVfTUFMIiwgIiJdLCAicmVzIjogWyIkTD0yXFxwaSByPTJcXGNkb3Qzeyx9MTRcXGNkb3QzJCIsICIkTFxcYXBwcm94MTh7LH04NCQgY20iXX0="
  },
  {
   "id": "185a",
   "ex": 185,
   "ap": "a",
   "bloc": "cossos_rodons",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "",
   "enunciat": "Calcula l'àrea total d'un cilindre de radi $7$ m i altura $10$ m.",
   "opcions": [
    "$\\approx439{,}6$ m$^2$",
    "$\\approx747{,}32$ m$^2$",
    "$\\approx593{,}46$ m$^2$",
    "$\\approx373{,}66$ m$^2$"
   ],
   "pistes": [
    "Àrea de la base: $A_{\\text{base}}=\\pi r^2\\approx153{,}86$ m$^2$.",
    "Àrea lateral: $A_{\\text{lateral}}=2\\pi rh\\approx439{,}6$ m$^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igw6lzIG5vbcOpcyBsJ8OgcmVhIGxhdGVyYWw6IGVuY2FyYSBmYWx0YSBzdW1hci1oaSBsZXMgZHVlcyBiYXNlcyBjaXJjdWxhcnMuIiwgIiIsICJTZW1ibGEgcXVlIG5vbcOpcyBoYXMgY29tcHRhdCBVTkEgYmFzZSBjaXJjdWxhciBlbiBsbG9jIGRlIGR1ZXMuIiwgIk5vIGNvaW5jaWRlaXggYW1iICQyXFxwaVxcY2RvdDdeMisyXFxwaVxcY2RvdDdcXGNkb3QxMCQ6IHNlbWJsYSBxdWUgdCdoYXMgZGVpeGF0IHVuIGZhY3RvciAkMiQgZW4gYWxndW4gZGVscyBkb3MgdGVybWVzLiJdLCAiZXJyIjogWyJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIiIsICJGQUNUT1JfT0JMSURBVCIsICJPUkRSRV9NVUxUSVBMSUNBQ0lPX0RJVklTSU8iXSwgInJlcyI6IFsiJEFfe1xcdGV4dHtiYXNlfX09XFxwaVxcY2RvdDdeMlxcYXBwcm94MTUzeyx9ODYkIG0kXjIkIiwgIiRBX3tcXHRleHR7bGF0ZXJhbH19PTJcXHBpXFxjZG90N1xcY2RvdDEwXFxhcHByb3g0Mzl7LH02JCBtJF4yJCIsICIkQV97XFx0ZXh0e3RvdGFsfX1cXGFwcHJveDJcXGNkb3QxNTN7LH04Nis0Mzl7LH02XFxhcHByb3g3NDd7LH0zMiQgbSReMiQiXX0="
  },
  {
   "id": "185b",
   "ex": 185,
   "ap": "b",
   "bloc": "cossos_rodons",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "",
   "enunciat": "Calcula l'àrea total d'un cilindre de diàmetre de la base $12$ m i altura $5$ m.",
   "opcions": [
    "$\\approx188{,}4$ m$^2$",
    "$\\approx414{,}48$ m$^2$",
    "$\\approx301{,}44$ m$^2$",
    "$\\approx583{,}36$ m$^2$"
   ],
   "pistes": [
    "El radi és la meitat del diàmetre: $12:2=6$ m.",
    "Àrea de la base: $A_{\\text{base}}=\\pi r^2\\approx113{,}04$ m$^2$.",
    "Àrea lateral: $A_{\\text{lateral}}=2\\pi rh\\approx188{,}4$ m$^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igw6lzIG5vbcOpcyBsJ8OgcmVhIGxhdGVyYWw6IGVuY2FyYSBmYWx0YSBzdW1hci1oaSBsZXMgZHVlcyBiYXNlcyBjaXJjdWxhcnMuIiwgIiIsICJTZW1ibGEgcXVlIG5vbcOpcyBoYXMgY29tcHRhdCBVTkEgYmFzZSBjaXJjdWxhciBlbiBsbG9jIGRlIGR1ZXMuIiwgIlNlbWJsYSBxdWUgaGFzIGZldCBzZXJ2aXIgZWwgZGnDoG1ldHJlICgkMTIkIG0pIGRpcmVjdGFtZW50IGNvbSBhIHJhZGk6IGVsIHJhZGkgw6lzIGxhIG1laXRhdCBkZWwgZGnDoG1ldHJlLCAkNiQgbS4iXSwgImVyciI6IFsiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiLCAiRkFDVE9SX09CTElEQVQiLCAiU0lHTkVfVEVSTUVfSU5ERVBFTkRFTlQiXSwgInJlcyI6IFsiJHI9MTI6Mj02JCBtIiwgIiRBX3tcXHRleHR7YmFzZX19PVxccGlcXGNkb3Q2XjJcXGFwcHJveDExM3ssfTA0JCBtJF4yJCIsICIkQV97XFx0ZXh0e2xhdGVyYWx9fT0yXFxwaVxcY2RvdDZcXGNkb3Q1XFxhcHByb3gxODh7LH00JCBtJF4yJCIsICIkQV97XFx0ZXh0e3RvdGFsfX1cXGFwcHJveDJcXGNkb3QxMTN7LH0wNCsxODh7LH00XFxhcHByb3g0MTR7LH00OCQgbSReMiQiXX0="
  },
  {
   "id": "186",
   "ex": 186,
   "ap": "",
   "bloc": "cossos_rodons",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "L'àrea lateral d'un cilindre de radi $10$ cm és $756{,}6$ cm$^2$. Calcula la seva altura.",
   "opcions": [
    "$75{,}66$ cm",
    "$\\approx240{,}95$ cm",
    "$\\approx12{,}05$ cm",
    "$\\approx24{,}09$ cm"
   ],
   "pistes": [
    "L'àrea lateral d'un cilindre és $A_{\\text{lateral}}=2\\pi rh$.",
    "Aïlla $h$: $h=\\dfrac{A_{\\text{lateral}}}{2\\pi r}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJObyBoYXMgZGl2aWRpdCBwZWwgcHJvZHVjdGUgY29tcGxldCAkMlxccGkgciQ6IGNhbCBkaXZpZGlyICQ3NTZ7LH02JCBlbnRyZSAkMlxcY2RvdDN7LH0xNFxcY2RvdDEwJCwgbm8gbm9tw6lzIGVudHJlICQxMCQuIiwgIk5vIGNvaW5jaWRlaXggYW1iICQ3NTZ7LH02OigyXFxwaVxcY2RvdDEwKSQ6IHJldmlzYSBlbCBkZW5vbWluYWRvciBjb21wbGV0IGFiYW5zIGRlIGRpdmlkaXIuIiwgIiIsICJBcXVlc3QgdmFsb3Igc3VydCBkZSBkaXZpZGlyIG5vbcOpcyBlbnRyZSAkXFxwaSByJCBlbiBsbG9jIGRlICQyXFxwaSByJDogcmVjb3JkYSBlbCBmYWN0b3IgJDIkIGRlIGwnw6ByZWEgbGF0ZXJhbCBkZWwgY2lsaW5kcmUuIl0sICJlcnIiOiBbIk9SRFJFX01VTFRJUExJQ0FDSU9fRElWSVNJTyIsICJBUlJFTF9NQUxfQVBMSUNBREEiLCAiIiwgIkZBQ1RPUl9PQkxJREFUIl0sICJyZXMiOiBbIiRoPVxcZGZyYWN7NzU2eyx9Nn17MlxcY2RvdDN7LH0xNFxcY2RvdDEwfSQiLCAiJGhcXGFwcHJveDEyeyx9MDUkIGNtIl19"
  },
  {
   "id": "187",
   "ex": 187,
   "ap": "",
   "bloc": "cossos_rodons",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "L'àrea total d'un cilindre és $471$ cm$^2$ i la seva altura és el doble del radi. Calcula el radi i l'altura del cilindre.",
   "opcions": [
    "$r=2{,}5$ cm, $h=5$ cm",
    "$r=5$ cm, $h=10$ cm",
    "$r=15{,}7$ cm, $h=31{,}4$ cm",
    "$r=10$ cm, $h=5$ cm"
   ],
   "pistes": [
    "Amb $h=2r$: $A_{\\text{total}}=2\\pi r^2+2\\pi r\\cdot2r=6\\pi r^2$.",
    "Aïlla $r^2=\\dfrac{471}{6\\pi}$ i fes l'arrel quadrada."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJTZW1ibGEgcXVlIHQnaGFzIGRlaXhhdCBhbGd1biBmYWN0b3IgZW4gc3Vic3RpdHVpciAkaD0yciQgZGlucyAkQV97XFx0ZXh0e3RvdGFsfX09MlxccGkgcl4yKzJcXHBpIHJoJDogcmV2aXNhIHF1ZSBxdWVkaSAkQV97XFx0ZXh0e3RvdGFsfX09NlxccGkgcl4yJC4iLCAiIiwgIk5vIGNvaW5jaWRlaXggYW1iIGHDr2xsYXIgJHIkIGRlICQ2XFxwaSByXjI9NDcxJDogY29tcHJvdmEgcXVlIGRpdmlkZWl4ZXMgcGVyICQ2XFxwaSQgKG5vIHBlciB1biBhbHRyZSBmYWN0b3IpIGFiYW5zIGRlIGZlciBsJ2FycmVsIHF1YWRyYWRhLiIsICJIYXMgaW50ZXJjYW52aWF0IGVscyBwYXBlcnMgZGVsIHJhZGkgaSBsJ2FsdHVyYTogbCdlbnVuY2lhdCBkaXUgcXVlIGwnYWx0dXJhIMOpcyBlbCBET0JMRSBkZWwgcmFkaSwgbm8gYWwgcmV2w6lzLiJdLCAiZXJyIjogWyJBUlJFTF9NQUxfQVBMSUNBREEiLCAiIiwgIk9SRFJFX01VTFRJUExJQ0FDSU9fRElWSVNJTyIsICJQQVBFUlNfSU5URVJDQU5WSUFUUyJdLCAicmVzIjogWyIkNlxccGkgcl4yPTQ3MSBcXFJpZ2h0YXJyb3cgcl4yPVxcZGZyYWN7NDcxfXs2XFxjZG90M3ssfTE0fT0yNSQiLCAiJHI9XFxzcXJ0ezI1fT01JCBjbSAkXFxSaWdodGFycm93IGg9MlxcY2RvdDU9MTAkIGNtIl19"
  },
  {
   "id": "188",
   "ex": 188,
   "ap": "",
   "bloc": "cossos_rodons",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "",
   "enunciat": "Un con té $4$ cm de radi de la base i $15$ cm de generatriu. Calcula la longitud de l'arc que descriu la base en desplegar la superfície lateral del con (és a dir, la longitud de la circumferència de la base).",
   "opcions": [
    "$\\approx94{,}2$ cm",
    "$19$ cm",
    "$\\approx25{,}12$ cm",
    "$\\approx12{,}56$ cm"
   ],
   "pistes": [
    "La circumferència de la base d'un con té radi igual al radi del con, $4$ cm (la generatriu no hi intervé).",
    "Longitud: $L=2\\pi r$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3QgdmFsb3IgZmEgc2VydmlyIGxhIGdlbmVyYXRyaXUgKCQxNSQgY20pIGNvbSBhIHJhZGk6IGxhIGxvbmdpdHVkIGRlIGxhIGNpcmN1bWZlcsOobmNpYSBkZSBsYSBiYXNlIGRlcMOobiBkZWwgcmFkaSBkZSBsYSBiYXNlICgkNCQgY20pLCBubyBkZSBsYSBnZW5lcmF0cml1LiIsICJBcXVlc3QgdmFsb3Igbm8gZmEgc2VydmlyICRcXHBpJDogbGEgbG9uZ2l0dWQgZCd1bmEgY2lyY3VtZmVyw6huY2lhIHNlbXByZSDDqXMgJDJcXHBpIHIkLiIsICIiLCAiTm8gY29pbmNpZGVpeCBhbWIgJDJcXHBpXFxjZG90NCQ6IHJldmlzYSBlbCBwcm9kdWN0ZSBhbWIgJFxccGlcXGFwcHJveDN7LH0xNCQuIl0sICJlcnIiOiBbIkZBQ1RPUl9PQkxJREFUIiwgIlBJX09CTElEQVQiLCAiIiwgIlBST0RVQ1RFX01BTCJdLCAicmVzIjogWyIkTD0yXFxwaSByPTJcXGNkb3Qzeyx9MTRcXGNkb3Q0JCIsICIkTFxcYXBwcm94MjV7LH0xMiQgY20iXX0="
  },
  {
   "id": "189",
   "ex": 189,
   "ap": "",
   "bloc": "cossos_rodons",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "Calcula l'àrea total d'un con de $8$ cm de diàmetre de la base i $12$ cm de generatriu.",
   "opcions": [
    "$\\approx200{,}96$ cm$^2$",
    "$\\approx50{,}24$ cm$^2$",
    "$\\approx552{,}64$ cm$^2$",
    "$\\approx150{,}72$ cm$^2$"
   ],
   "pistes": [
    "El radi de la base és la meitat del diàmetre: $4$ cm.",
    "$A_{\\text{base}}=\\pi r^2\\approx50{,}24$ cm$^2$; $A_{\\text{lateral}}=\\pi rg\\approx150{,}72$ cm$^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0YSDDqXMgbm9tw6lzIGwnw6ByZWEgZGUgbGEgYmFzZTogZW5jYXJhIGZhbHRhIHN1bWFyLWhpIGwnw6ByZWEgbGF0ZXJhbC4iLCAiU2VtYmxhIHF1ZSBoYXMgZmV0IHNlcnZpciBlbCBkacOgbWV0cmUgKCQ4JCBjbSkgZGlyZWN0YW1lbnQgY29tIGEgcmFkaTogZWwgcmFkaSBkZSBsYSBiYXNlIMOpcyBsYSBtZWl0YXQgZGVsIGRpw6BtZXRyZSwgJDQkIGNtLiIsICJBcXVlc3QgdmFsb3Igw6lzIG5vbcOpcyBsJ8OgcmVhIGxhdGVyYWw6IGVuY2FyYSBmYWx0YSBzdW1hci1oaSBsJ8OgcmVhIGRlIGxhIGJhc2UgY2lyY3VsYXIuIl0sICJlcnIiOiBbIiIsICJTVU1BX0RFX1BBUlRTX0lOQ09NUExFVEEiLCAiRkFDVE9SX09CTElEQVQiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyJdLCAicmVzIjogWyIkcj04OjI9NCQgY20iLCAiJEFfe1xcdGV4dHtiYXNlfX09XFxwaVxcY2RvdDReMlxcYXBwcm94NTB7LH0yNCQgY20kXjIkIiwgIiRBX3tcXHRleHR7bGF0ZXJhbH19PVxccGlcXGNkb3Q0XFxjZG90MTJcXGFwcHJveDE1MHssfTcyJCBjbSReMiQiLCAiJEFfe1xcdGV4dHt0b3RhbH19XFxhcHByb3g1MHssfTI0KzE1MHssfTcyXFxhcHByb3gyMDB7LH05NiQgY20kXjIkIl19"
  },
  {
   "id": "190",
   "ex": 190,
   "ap": "",
   "bloc": "cossos_rodons",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "Un con té $13$ cm de generatriu i $5$ cm de radi de la base. Calcula la seva altura.",
   "opcions": [
    "$\\approx13{,}93$ cm",
    "$8$ cm",
    "$12$ cm",
    "$18$ cm"
   ],
   "pistes": [
    "En un con, la generatriu $g$, el radi $r$ i l'altura $h$ compleixen $g^2=r^2+h^2$ (Pitàgores).",
    "Aïlla $h$: $h=\\sqrt{g^2-r^2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJObyBjb2luY2lkZWl4IGFtYiAkXFxzcXJ0ezEzXjItNV4yfSQ6IGNvbXByb3ZhIHF1ZSByZXN0ZXMgJHJeMiQgZGUgJGdeMiQgKG5vIHF1ZSBlbHMgc3VtaXMpIGFiYW5zIGRlIGZlciBsJ2FycmVsLiIsICJBcXVlc3QgdmFsb3Igc3VydCBkZSAkMTMtNSQ6IGxhIHJlbGFjacOzIGNvcnJlY3RhIGVudHJlIGFsdHVyYSwgcmFkaSBpIGdlbmVyYXRyaXUgw6lzIHBpdGFnw7JyaWNhLCAkZ14yPXJeMitoXjIkLCBubyB1bmEgc2ltcGxlIHJlc3RhLiIsICIiLCAiSGFzIHN1bWF0IGdlbmVyYXRyaXUgaSByYWRpICgkMTMrNSQpIGVuIGxsb2MgZCdhcGxpY2FyIFBpdMOgZ29yZXM6IGwnYWx0dXJhLCBlbCByYWRpIGkgbGEgZ2VuZXJhdHJpdSBmb3JtZW4gdW4gdHJpYW5nbGUgcmVjdGFuZ2xlIGFtYiBsYSBnZW5lcmF0cml1IGNvbSBhIGhpcG90ZW51c2EuIl0sICJlcnIiOiBbIkFSUkVMX01BTF9BUExJQ0FEQSIsICJTSUdORV9URVJNRV9JTkRFUEVOREVOVCIsICIiLCAiU0lHTkVfVEVSTUVfSU5ERVBFTkRFTlQiXSwgInJlcyI6IFsiJGg9XFxzcXJ0ezEzXjItNV4yfT1cXHNxcnR7MTY5LTI1fT1cXHNxcnR7MTQ0fSQiLCAiJGg9MTIkIGNtIl19"
  },
  {
   "id": "191",
   "ex": 191,
   "ap": "",
   "bloc": "cossos_rodons",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "L'àrea d'una esfera és $803{,}84$ cm$^2$. Calcula el seu radi.",
   "opcions": [
    "$\\approx15{,}98$ cm",
    "$8$ cm",
    "$64$ cm",
    "$\\approx200{,}96$ cm"
   ],
   "pistes": [
    "L'àrea d'una esfera és $A=4\\pi r^2$.",
    "Aïlla $r^2=\\dfrac{A}{4\\pi}$ i fes l'arrel quadrada."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJObyBjb2luY2lkZWl4IGFtYiBkaXZpZGlyIGVudHJlICQ0XFxwaSQ6IHNlbWJsYSBxdWUgbm9tw6lzIGhhcyBkaXZpZGl0IGVudHJlICRcXHBpJCwgc2Vuc2UgZWwgZmFjdG9yICQ0JCBkZSBsYSBmw7NybXVsYSBkZSBsJ8OgcmVhIGRlIGwnZXNmZXJhLiIsICIiLCAiQXF1ZXN0IMOpcyBlbCB2YWxvciBkZSAkcl4yJCAoJDgwM3ssfTg0OjRcXHBpJCksIG5vIGRlICRyJDogZW5jYXJhIGZhbHRhIGZlciBsJ2FycmVsIHF1YWRyYWRhLiIsICJObyBjb2luY2lkZWl4IGFtYiBhw69sbGFyICRyJCBkZSAkNFxccGkgcl4yPTgwM3ssfTg0JDogY29tcHJvdmEgcXVlIGRpdmlkZWl4ZXMgKG5vIG11bHRpcGxpcXVlcykgcGVyICQ0XFxwaSQuIl0sICJlcnIiOiBbIkZBQ1RPUl9PQkxJREFUIiwgIiIsICJBUlJFTF9PQkxJREFEQSIsICJPUkRSRV9NVUxUSVBMSUNBQ0lPX0RJVklTSU8iXSwgInJlcyI6IFsiJHJeMj1cXGRmcmFjezgwM3ssfTg0fXs0XFxjZG90M3ssfTE0fT02NCQiLCAiJHI9XFxzcXJ0ezY0fT04JCBjbSJdfQ=="
  },
  {
   "id": "193a",
   "ex": 193,
   "ap": "a",
   "bloc": "cossos_rodons",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Un cilindre té radi $10$ cm i altura $10$ cm. Es vol construir un con amb el mateix radi de base.",
   "enunciat": "Un cilindre té radi $10$ cm i altura $10$ cm. Es vol construir un con amb el mateix radi de base. Quina generatriu ha de tenir el con perquè la seva àrea lateral coincideixi amb l'àrea lateral del cilindre?",
   "opcions": [
    "$20$ cm",
    "$40$ cm",
    "$\\approx31{,}85$ cm",
    "$10$ cm"
   ],
   "pistes": [
    "Àrea lateral del cilindre: $A_{\\text{lateral,cil}}=2\\pi rh\\approx628$ cm$^2$.",
    "Iguala-la a l'àrea lateral del con, $\\pi rg$, i aïlla $g$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRHVwbGljYSBlbCByZXN1bHRhdCBjb3JyZWN0ZTogcmV2aXNhIHF1ZSwgZW4gaWd1YWxhciAkMlxccGlcXGNkb3QxMFxcY2RvdDEwPVxccGlcXGNkb3QxMFxcY2RvdCBnJCwgZWwgZmFjdG9yICQyJCBkJ3VuIGNvc3RhdCBlcyBjYW5jZWzCt2xhIGNvcnJlY3RhbWVudCBhbWIgbCdhbHRyZS4iLCAiQXF1ZXN0IGV4ZXJjaWNpIG5vIG5lY2Vzc2l0YSBjYXAgYXJyZWwgcXVhZHJhZGE6IGwnw6ByZWEgbGF0ZXJhbCBkZWwgY29uIMOpcyBsaW5lYWwgZW4gJGckLCBubyBoaSBpbnRlcnbDqSBjYXAgUGl0w6Bnb3JlcyBlbiBhcXVlc3QgYXBhcnRhdC4iLCAiQXF1ZXN0IHZhbG9yIMOpcyBlbCByYWRpLCBubyBsYSBnZW5lcmF0cml1IHF1ZSBmYSBxdWUgY29pbmNpZGVpeGluIGxlcyDDoHJlZXMgbGF0ZXJhbHM6IGNhbCBpZ3VhbGFyICQyXFxwaSByaF97XFx0ZXh0e2NpbH19PVxccGkgcmckIGkgYcOvbGxhciAkZyQuIl0sICJlcnIiOiBbIiIsICJQUk9EVUNURV9NQUwiLCAiQVJSRUxfTUFMX0FQTElDQURBIiwgIlBBU19JTlRFUk1FRElfUEVSX1JFU1BPU1RBIl0sICJyZXMiOiBbIiQyXFxwaVxcY2RvdDEwXFxjZG90MTA9XFxwaVxcY2RvdDEwXFxjZG90IGckIiwgIiRnPVxcZGZyYWN7MlxcY2RvdDEwXFxjZG90MTB9ezEwfT0yMCQgY20iXX0="
  },
  {
   "id": "193b",
   "ex": 193,
   "ap": "b",
   "bloc": "cossos_rodons",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Un cilindre té radi $10$ cm i altura $10$ cm. Es vol construir un con amb el mateix radi de base.",
   "enunciat": "Un cilindre té radi $10$ cm i altura $10$ cm. Es vol construir un con amb el mateix radi de base. Quina generatriu ha de tenir el con perquè la seva àrea total coincideixi amb l'àrea total del cilindre?",
   "opcions": [
    "$30$ cm",
    "$60$ cm",
    "$\\approx9{,}55$ cm",
    "$20$ cm"
   ],
   "pistes": [
    "Àrea total del cilindre: $A_{\\text{total,cil}}=2\\pi r^2+2\\pi rh\\approx1256$ cm$^2$.",
    "Iguala-la a l'àrea total del con, $\\pi r^2+\\pi rg$, i aïlla $g$: com que les dues tenen una base $\\pi r^2$ igual, es simplifica a $\\pi rg=2\\pi r^2+2\\pi rh-\\pi r^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRHVwbGljYSBlbCByZXN1bHRhdCBjb3JyZWN0ZTogcmV2aXNhIGVsIHBhcyBkJ2HDr2xsYXIgJGckIGRlc3Byw6lzIGRlIHNpbXBsaWZpY2FyICRyJCBhIGJhbmRhIGkgYmFuZGEgZGUgbCdlcXVhY2nDsy4iLCAiQ29tcHJvdmEgZWwgc2lnbmUgZW4gYcOvbGxhciAkZyQgZGUgJFxccGkgcl4yK1xccGkgcmc9MlxccGkgcl4yKzJcXHBpIHJoJDogbGEgYmFzZSBkZWwgY29uICgkXFxwaSByXjIkKSByZXN0YSBhIGJhbmRhIGkgYmFuZGEsIG5vIHNlIHN1bWEgZHVlcyB2ZWdhZGVzLiIsICJBcXVlc3Qgw6lzIGVsIHZhbG9yIGRlIGwnYXBhcnRhdCBhbnRlcmlvciAoaWd1YWxhbnQgbm9tw6lzIGxlcyDDoHJlZXMgbGF0ZXJhbHMpOiBhcXXDrSBjYWwgaWd1YWxhciBsZXMgw6ByZWVzIFRPVEFMUywgcXVlIHRhbWLDqSBpbmNsb3VlbiBsZXMgYmFzZXMgY2lyY3VsYXJzLiJdLCAiZXJyIjogWyIiLCAiUFJPRFVDVEVfTUFMIiwgIlNJR05FX1RFUk1FX0lOREVQRU5ERU5UIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iXSwgInJlcyI6IFsiJFxccGlcXGNkb3QxMF4yK1xccGlcXGNkb3QxMFxcY2RvdCBnPTJcXHBpXFxjZG90MTBeMisyXFxwaVxcY2RvdDEwXFxjZG90MTAkIiwgIiQxMGc9MlxcY2RvdDEwXjIrMlxcY2RvdDEwXFxjZG90MTAtMTBeMj0zMDAkIiwgIiRnPTMwJCBjbSJdfQ=="
  },
  {
   "id": "195a",
   "ex": 195,
   "ap": "a",
   "bloc": "volums_aplicacions",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el volum d'aquest cos geomètric:",
   "enunciat": "Calcula el volum d'aquest cos geomètric: una piràmide quadrangular regular de costat de base $4$ cm i altura $2$ cm.",
   "opcions": [
    "$\\approx21{,}33$ cm$^3$",
    "$32$ cm$^3$",
    "$8$ cm$^3$",
    "$\\approx10{,}67$ cm$^3$"
   ],
   "pistes": [
    "Àrea de la base: $A_{\\text{base}}=4^2=16$ cm$^2$.",
    "Volum d'una piràmide: $V=\\dfrac{A_{\\text{base}}\\cdot h}{3}$."
   ],
   "nota": "D'aquest exercici hi ha els apartats a, c, e i f: els altres eren cossos que no es poden identificar amb seguretat sense la figura.",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJObyBjb2luY2lkZWl4IGFtYiAkXFxkZnJhY3sxNlxcY2RvdDJ9ezN9JDogc2VtYmxhIHF1ZSBoYXMgZGl2aWRpdCBwZXIgJDF7LH01JCBlbiBsbG9jIGRlIHBlciAkMyQuIiwgIk5vIGhhcyBkaXZpZGl0IGVudHJlICQzJDogZWwgdm9sdW0gZCd1bmEgcGlyw6BtaWRlIMOpcyAkVj1cXGRmcmFje0Ffe1xcdGV4dHtiYXNlfX1cXGNkb3QgaH17M30kLCBubyAkQV97XFx0ZXh0e2Jhc2V9fVxcY2RvdCBoJCBzZW5zZSBkaXZpZGlyLiIsICJMJ8OgcmVhIGRlIGxhIGJhc2UgZCd1biBxdWFkcmF0IGRlIGNvc3RhdCAkNCQgY20gw6lzICQxNiQgY20kXjIkLCBubyAkNCQgY20kXjIkOiBjb21wcm92YSBxdWUgaGFzIGVsZXZhdCBlbCBjb3N0YXQgYWwgcXVhZHJhdC4iLCAiIl0sICJlcnIiOiBbIk9SRFJFX01VTFRJUExJQ0FDSU9fRElWSVNJTyIsICJGQUNUT1JfVFJFU19WT0xVTSIsICJGQUNUT1JfT0JMSURBVCIsICIiXSwgInJlcyI6IFsiJFY9XFxkZnJhY3sxNlxcY2RvdDJ9ezN9JCIsICIkVlxcYXBwcm94MTB7LH02NyQgY20kXjMkIl19"
  },
  {
   "id": "195c",
   "ex": 195,
   "ap": "c",
   "bloc": "volums_aplicacions",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el volum d'aquest cos geomètric:",
   "enunciat": "Calcula el volum d'aquest cos geomètric: un cilindre de radi $4$ cm i altura $4$ cm.",
   "opcions": [
    "$\\approx200{,}96$ cm$^3$",
    "$\\approx401{,}92$ cm$^3$",
    "$\\approx66{,}99$ cm$^3$",
    "$\\approx50{,}24$ cm$^3$"
   ],
   "pistes": [
    "Àrea de la base: $A_{\\text{base}}=\\pi r^2\\approx50{,}24$ cm$^2$.",
    "Volum d'un cilindre: $V=A_{\\text{base}}\\cdot h$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRHVwbGljYSBlbCByZXN1bHRhdCBjb3JyZWN0ZTogcmV2aXNhIGVsIHByb2R1Y3RlICRcXHBpXFxjZG90NF4yXFxjZG90NCQgcGFzIGEgcGFzLiIsICJIYXMgZGl2aWRpdCBlbnRyZSAkMyQ6IGVsIHZvbHVtIGQndW4gQ0lMSU5EUkUgbm8gZXMgZGl2aWRlaXggZW50cmUgJDMkIChhaXjDsiBub23DqXMgcGFzc2EgYW1iIHBpcsOgbWlkZXMgaSBjb25zKS4iLCAiQXF1ZXN0IHZhbG9yIMOpcyBsJ8OgcmVhIGRlIGxhIGJhc2UsIG5vIGVsIHZvbHVtOiBlbmNhcmEgZmFsdGEgbXVsdGlwbGljYXItbGEgcGVyIGwnYWx0dXJhLiJdLCAiZXJyIjogWyIiLCAiUFJPRFVDVEVfTUFMIiwgIkZBQ1RPUl9UUkVTX1ZPTFVNIiwgIkZBQ1RPUl9PQkxJREFUIl0sICJyZXMiOiBbIiRWPVxccGlcXGNkb3Q0XjJcXGNkb3Q0JCIsICIkVlxcYXBwcm94MjAweyx9OTYkIGNtJF4zJCJdfQ=="
  },
  {
   "id": "195e",
   "ex": 195,
   "ap": "e",
   "bloc": "volums_aplicacions",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el volum d'aquest cos geomètric:",
   "enunciat": "Calcula el volum d'aquest cos geomètric: un con de radi $1{,}5$ cm i altura $5$ cm.",
   "opcions": [
    "$\\approx23{,}55$ cm$^3$",
    "$\\approx7{,}85$ cm$^3$",
    "$\\approx35{,}33$ cm$^3$",
    "$\\approx11{,}78$ cm$^3$"
   ],
   "pistes": [
    "Àrea de la base: $A_{\\text{base}}=\\pi r^2\\approx7{,}07$ cm$^2$.",
    "Volum d'un con: $V=\\dfrac{A_{\\text{base}}\\cdot h}{3}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJObyBjb2luY2lkZWl4IGFtYiAkXFxkZnJhY3tcXHBpXFxjZG90MXssfTVeMlxcY2RvdDV9ezN9JDogc2VtYmxhIHF1ZSB0J2hhcyBkZWl4YXQgZWwgZmFjdG9yICQzJCBkZWwgZGVub21pbmFkb3IgYSBtaXRnZXMuIiwgIkwnw6ByZWEgZGUgbGEgYmFzZSDDqXMgJFxccGlcXGNkb3Qxeyx9NV4yXFxhcHByb3g3eyx9MDckIGNtJF4yJCwgbm8gJFxccGlcXGNkb3Qxeyx9NVxcYXBwcm94NHssfTcxJCBjbSReMiQ6IGNvbXByb3ZhIHF1ZSBoYXMgZWxldmF0IGVsIHJhZGkgYWwgcXVhZHJhdC4iLCAiTm8gaGFzIGRpdmlkaXQgZW50cmUgJDMkOiBlbCB2b2x1bSBkJ3VuIGNvbiDDqXMgJFY9XFxkZnJhY3tBX3tcXHRleHR7YmFzZX19XFxjZG90IGh9ezN9JCwgbm8gJEFfe1xcdGV4dHtiYXNlfX1cXGNkb3QgaCQgc2Vuc2UgZGl2aWRpci4iLCAiIl0sICJlcnIiOiBbIk9SRFJFX01VTFRJUExJQ0FDSU9fRElWSVNJTyIsICJGQUNUT1JfT0JMSURBVCIsICJGQUNUT1JfVFJFU19WT0xVTSIsICIiXSwgInJlcyI6IFsiJFY9XFxkZnJhY3tcXHBpXFxjZG90MXssfTVeMlxcY2RvdDV9ezN9JCIsICIkVlxcYXBwcm94MTF7LH03OCQgY20kXjMkIl19"
  },
  {
   "id": "195f",
   "ex": 195,
   "ap": "f",
   "bloc": "volums_aplicacions",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el volum d'aquest cos geomètric:",
   "enunciat": "Calcula el volum d'aquest cos geomètric: un cub d'aresta $4$ cm.",
   "opcions": [
    "$96$ cm$^3$",
    "$64$ cm$^3$",
    "$48$ cm$^3$",
    "$16$ cm$^3$"
   ],
   "pistes": [
    "El volum d'un cub d'aresta $L$ és $V=L^3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJObyBjb2luY2lkZWl4IGFtYiAkNF4zJDogY29tcHJvdmEgZWwgY8OgbGN1bCBkZSBsYSBwb3TDqG5jaWEgcGFzIGEgcGFzLiIsICIiLCAiTm8gY29pbmNpZGVpeCBhbWIgJDRcXGNkb3Q0XFxjZG90NCQ6IHJldmlzYSBlbCBwcm9kdWN0ZSBkZWxzIHRyZXMgZmFjdG9ycy4iLCAiQXF1ZXN0IHZhbG9yIMOpcyAkNF4yJCwgbm8gJDReMyQ6IGVsIHZvbHVtIGQndW4gY3ViIMOpcyAkVj1MXjMkLCBubyAkTF4yJC4iXSwgImVyciI6IFsiUFJPRFVDVEVfTUFMIiwgIiIsICJPUkRSRV9NVUxUSVBMSUNBQ0lPX0RJVklTSU8iLCAiRElNRU5TSU9fRVhQT05FTlRfTUFMIl0sICJyZXMiOiBbIiRWPTReMz00XFxjZG90NFxcY2RvdDQkIiwgIiRWPTY0JCBjbSReMyQiXX0="
  },
  {
   "id": "196a",
   "ex": 196,
   "ap": "a",
   "bloc": "volums_aplicacions",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Es vol pintar una habitació de $4$ m per $6$ m i $3$ m d'altura, incloent-hi el sostre (però no el terra). Un pot de pintura cobreix $30$ m$^2$.",
   "enunciat": "Es vol pintar una habitació de $4$ m per $6$ m i $3$ m d'altura, incloent-hi el sostre (però no el terra). Un pot de pintura cobreix $30$ m$^2$. Quants pots de pintura calen com a mínim?",
   "opcions": [
    "$2{,}8$ pots",
    "$3$ pots",
    "$2$ pots",
    "$4$ pots"
   ],
   "pistes": [
    "Superfície de les parets: $2(4\\cdot3)+2(6\\cdot3)=60$ m$^2$.",
    "Superfície del sostre: $4\\cdot6=24$ m$^2$; total $84$ m$^2$ (el terra no es pinta).",
    "Nombre de pots: $84:30=2{,}8$, i com que amb $2$ pots no n'hi ha prou, cal arrodonir cap amunt."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBub21icmUgZGUgcG90cyBoYSBkZSBzZXIgdW4gbm9tYnJlIGVudGVyOiBjb20gcXVlICQyeyx9OCQgcG90cyBubyBiYXN0ZW4gcGVyIGNvYnJpciB0b3RhIGxhIHN1cGVyZsOtY2llLCBjYWwgYXJyb2RvbmlyIGNhcCBBTVVOVCwgYSAkMyQuIiwgIiIsICJBbWIgJDIkIHBvdHMgbm9tw6lzIGVzIGNvYnJlaXhlbiAkNjAkIG0kXjIkLCBpIGxhIHN1cGVyZsOtY2llIGEgcGludGFyIMOpcyBtw6lzIGdyYW4gcXVlIGFpeMOyOiB0b3JuYSBhIGNhbGN1bGFyIGwnw6ByZWEgdG90YWwgYWJhbnMgZGUgZGl2aWRpciBlbnRyZSAkMzAkLiIsICJTZW1ibGEgcXVlIGhhcyBjb21wdGF0IGFsZ3VuYSBzdXBlcmbDrWNpZSBkZSBtw6lzIChwZXIgZXhlbXBsZSwgZWwgdGVycmEsIHF1ZSBsJ2VudW5jaWF0IGV4Y2xvdSBleHBsw61jaXRhbWVudCk6IHJldmlzYSBxdWluZXMgY2FyZXMgcydoYW4gZGUgcGludGFyLiJdLCAiZXJyIjogWyJBUlJPRE9OSU1FTlRfQ09OVEVYVCIsICIiLCAiQVJSRUxfTUFMX0FQTElDQURBIiwgIkZBQ1RPUl9PQkxJREFUIl0sICJyZXMiOiBbIiRBX3tcXHRleHR7cGFyZXRzfX09Mig0XFxjZG90MykrMig2XFxjZG90Myk9NjAkIG0kXjIkIiwgIiRBX3tcXHRleHR7c29zdHJlfX09NFxcY2RvdDY9MjQkIG0kXjIkIiwgIiRBX3tcXHRleHR7dG90YWx9fT02MCsyND04NCQgbSReMiQiLCAiJDg0OjMwPTJ7LH04IFxcUmlnaHRhcnJvdyQgY2FsZW4gJDMkIHBvdHMiXX0="
  },
  {
   "id": "196b",
   "ex": 196,
   "ap": "b",
   "bloc": "volums_aplicacions",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Es vol pintar una habitació de $4$ m per $6$ m i $3$ m d'altura, incloent-hi el sostre (però no el terra). Un pot de pintura cobreix $30$ m$^2$.",
   "enunciat": "Es vol pintar una habitació de $4$ m per $6$ m i $3$ m d'altura, incloent-hi el sostre (però no el terra). Un pot de pintura cobreix $30$ m$^2$. Si finalment es fan servir $4$ pots per repartir-hi tota la superfície a parts iguals, quants metres quadrats cobrirà cada pot?",
   "opcions": [
    "$\\approx28$ m$^2$",
    "$6$ m$^2$",
    "$21$ m$^2$",
    "$30$ m$^2$"
   ],
   "pistes": [
    "La superfície total a pintar és $84$ m$^2$ (calculada a l'apartat anterior).",
    "Reparteix-la entre els $4$ pots: $84:4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJObyBjb2luY2lkZWl4IGFtYiAkODQ6NCQ6IGNvbXByb3ZhIHF1ZSBmYXMgc2VydmlyIGxhIHN1cGVyZsOtY2llIHRvdGFsICgkODQkIG0kXjIkKSwgbm8gbm9tw6lzIGxhIGRlIGxlcyBwYXJldHMgKCQ2MCQgbSReMiQpLiIsICJObyBjb2luY2lkZWl4IGFtYiAkODQ6NCQ6IHJldmlzYSBsYSBkaXZpc2nDsyBwYXMgYSBwYXMuIiwgIiIsICJBcXVlc3RhIMOpcyBsYSBjb2JlcnR1cmEgZXN0w6BuZGFyZCBkJ3VuIHBvdCAoJDMwJCBtJF4yJCksIG5vIGVsIHJlc3VsdGF0IGRlIHJlcGFydGlyIGVscyAkODQkIG0kXjIkIHRvdGFscyBlbnRyZSAkNCQgcG90cy4iXSwgImVyciI6IFsiRkFDVE9SX09CTElEQVQiLCAiT1JEUkVfTVVMVElQTElDQUNJT19ESVZJU0lPIiwgIiIsICJQQVNfSU5URVJNRURJX1BFUl9SRVNQT1NUQSJdLCAicmVzIjogWyIkODQ6ND0yMSQiLCAiJDIxJCBtJF4yJCBwZXIgcG90Il19"
  },
  {
   "id": "197",
   "ex": 197,
   "ap": "",
   "bloc": "volums_aplicacions",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "La piràmide de Kheops té una base quadrada d'aresta $215{,}25$ m i una apotema (de la piràmide) de $179{,}37$ m. Calcula la seva altura.",
   "opcions": [
    "$\\approx143{,}49$ m",
    "$71{,}75$ m",
    "$\\approx210{,}32$ m",
    "$\\approx122{,}85$ m"
   ],
   "pistes": [
    "L'apotema de la base és la meitat de l'aresta: $215{,}25:2=107{,}625$ m.",
    "L'altura, l'apotema de la base i l'apotema de la piràmide formen un triangle rectangle: $a_{\\text{piràmide}}^2=a_{\\text{base}}^2+h^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiTm8gaGFzIGZldCBzZXJ2aXIgbCdhcG90ZW1hIGRlIGxhIHBpcsOgbWlkZSAoJDE3OXssfTM3JCBtKSBlbiBlbCBjw6BsY3VsOiBhcXVlc3QgdmFsb3Igw6lzIG5vbcOpcyBsYSBtZWl0YXQgZGUgbCdhcmVzdGEgZGUgbGEgYmFzZS4iLCAiSGFzIHN1bWF0IGVuIGxsb2MgZGUgcmVzdGFyIGRpbnMgbCdhcnJlbDogbGEgcmVsYWNpw7MgcGl0YWfDsnJpY2EgZW50cmUgbCdhbHR1cmEsIGwnYXBvdGVtYSBkZSBsYSBiYXNlIGkgbCdhcG90ZW1hIGRlIGxhIHBpcsOgbWlkZSDDqXMgJGFfe1xcdGV4dHtwaXLDoG1pZGV9fV4yPWFfe1xcdGV4dHtiYXNlfX1eMitoXjIkLCBhaXjDrSBxdWUgY2FsIFJFU1RBUiAkYV97XFx0ZXh0e2Jhc2V9fV4yJCwgbm8gc3VtYXItbG8uIiwgIk5vIGNvaW5jaWRlaXggYW1iICRcXHNxcnR7MTc5eyx9MzdeMi0xMDd7LH02MjVeMn0kOiByZXZpc2EgcXVlIGwnYXBvdGVtYSBkZSBsYSBCQVNFIChsYSBtZWl0YXQgZGUgbCdhcmVzdGEsICQxMDd7LH02MjUkIG0pIMOpcyBlbCBjYXRldCBxdWUgZmFsdGEsIG5vIHVuIGFsdHJlIHZhbG9yLiJdLCAiZXJyIjogWyIiLCAiRkFDVE9SX09CTElEQVQiLCAiU0lHTkVfVEVSTUVfSU5ERVBFTkRFTlQiLCAiQVJSRUxfTUFMX0FQTElDQURBIl0sICJyZXMiOiBbIiRoPVxcc3FydHsxNzl7LH0zN14yLTEwN3ssfTYyNV4yfSQiLCAiJGhcXGFwcHJveDE0M3ssfTQ5JCBtIl19"
  },
  {
   "id": "198",
   "ex": 198,
   "ap": "",
   "bloc": "volums_aplicacions",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Una torre té la forma d'un cub de $10$ m d'aresta (sense la cara de dalt, que fa de base de la teulada) coronat per una teulada piramidal de base quadrada igual a la del cub i $12$ m d'altura. Calcula l'àrea total de la superfície exterior de la torre (parets del cub, terra del cub i teulada, sense la cara compartida entre cub i teulada).",
   "opcions": [
    "$760$ m$^2$",
    "$500$ m$^2$",
    "$1160$ m$^2$",
    "$\\approx660$ m$^2$"
   ],
   "pistes": [
    "Parets del cub (4 cares laterals): $4\\cdot10^2=400$ m$^2$; terra del cub: $10^2=100$ m$^2$.",
    "Apotema de la teulada (Pitàgores, amb altura $12$ m i apotema de la base $5$ m): $\\sqrt{12^2+5^2}=13$ m; àrea lateral de la teulada: $\\dfrac{40\\cdot13}{2}=260$ m$^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRmFsdGEgc3VtYXItaGkgbCfDoHJlYSBsYXRlcmFsIGRlbCBjdWIgKCQ0MDAkIG0kXjIkKSBvIGxhIGRlIGxhIHRldWxhZGEgKCQyNjAkIG0kXjIkKTogcmV2aXNhIHF1ZSBoaSBzaWd1aW4gbGVzIHRyZXMgcGVjZXMgKHBhcmV0cywgdGVycmEgaSB0ZXVsYWRhKS4iLCAiU2VtYmxhIHF1ZSBoYXMgY29tcHRhdCB0YW1iw6kgbGEgY2FyYSBkZSBkYWx0IGRlbCBjdWIgKHF1ZSBxdWVkYSB0YXBhZGEgcGVyIGxhIHRldWxhZGEgaSBubyBmb3JtYSBwYXJ0IGRlIGxhIHN1cGVyZsOtY2llIGV4dGVyaW9yKTogbCdlbnVuY2lhdCBkaXUgZXhwbMOtY2l0YW1lbnQgcXVlIG5vIHMnaGEgZGUgY29tcHRhci4iLCAiTm8gY29pbmNpZGVpeCBhbWIgbCfDoHJlYSBsYXRlcmFsIGRlIGxhIHRldWxhZGEgY2FsY3VsYWRhIGFtYiBQaXTDoGdvcmVzOiByZXZpc2EgcXVlIGwnYXBvdGVtYSBkZSBsYSBwaXLDoG1pZGUgc3VydCBkZSAkXFxzcXJ0ezEyXjIrNV4yfSQsIGFtYiBsJ2Fwb3RlbWEgZGUgbGEgYmFzZSAkNSQgbSAobGEgbWVpdGF0IGRlIGwnYXJlc3RhICQxMCQgbSkuIl0sICJlcnIiOiBbIiIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIkZBQ1RPUl9PQkxJREFUIiwgIkFSUkVMX01BTF9BUExJQ0FEQSJdLCAicmVzIjogWyIkQV97XFx0ZXh0e3BhcmV0c319PTRcXGNkb3QxMF4yPTQwMCQgbSReMiQiLCAiJEFfe1xcdGV4dHt0ZXJyYX19PTEwXjI9MTAwJCBtJF4yJCIsICIkYV97XFx0ZXh0e3RldWxhZGF9fT1cXHNxcnR7MTJeMis1XjJ9PTEzJCBtIiwgIiRBX3tcXHRleHR7dGV1bGFkYX19PVxcZGZyYWN7NDBcXGNkb3QxM317Mn09MjYwJCBtJF4yJCIsICIkQV97XFx0ZXh0e3RvdGFsfX09NDAwKzEwMCsyNjA9NzYwJCBtJF4yJCJdfQ=="
  },
  {
   "id": "199",
   "ex": 199,
   "ap": "",
   "bloc": "volums_aplicacions",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Un cub i una esfera tenen el mateix volum, $125$ cm$^3$. Es vol saber quin dels dos té l'àrea total més petita (és a dir, amb quina forma caldria menys material per construir un dipòsit d'aquest volum). Calcula l'àrea total del cub per començar a comparar-ho.",
   "opcions": [
    "$75$ cm$^2$",
    "$150$ cm$^2$",
    "$125$ cm$^2$",
    "$25$ cm$^2$"
   ],
   "pistes": [
    "Aresta del cub: $V=L^3=125 \\Rightarrow L=\\sqrt[3]{125}=5$ cm.",
    "Àrea total del cub: $A=6L^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJObyBjb2luY2lkZWl4IGFtYiAkNlxcY2RvdDVeMiQ6IHJldmlzYSBlbCBwcm9kdWN0ZSBwYXMgYSBwYXMuIiwgIiIsICJBcXVlc3Qgw6lzIGVsIHZvbHVtLCBubyBsJ8OgcmVhIHRvdGFsOiBwcmltZXIgY2FsIGHDr2xsYXIgbCdhcmVzdGEgJEw9XFxzcXJ0WzNdezEyNX09NSQgY20gaSBkZXNwcsOpcyBjYWxjdWxhciAkNkxeMiQuIiwgIkFxdWVzdGEgw6lzIGwnw6ByZWEgZCdVTkEgc29sYSBjYXJhICgkNV4yJCksIG5vIGRlIGxlcyAkNiQgY2FyZXMgZGVsIGN1Yi4iXSwgImVyciI6IFsiUFJPRFVDVEVfTUFMIiwgIiIsICJBUlJFTF9PQkxJREFEQSIsICJGQUNUT1JfT0JMSURBVCJdLCAicmVzIjogWyIkTD1cXHNxcnRbM117MTI1fT01JCBjbSIsICIkQT02XFxjZG90NV4yJCIsICIkQT0xNTAkIGNtJF4yJCIsICIoUGVyIGNvbXBhcmFyOiBsJ2VzZmVyYSBkZWwgbWF0ZWl4IHZvbHVtIHTDqSByYWRpICRyPVxcc3FydFszXXtcXGZyYWN7M1xcY2RvdDEyNX17NFxccGl9fVxcYXBwcm94M3ssfTEwJCBjbSBpIMOgcmVhICQ0XFxwaSByXjJcXGFwcHJveDEyMHssfTg4JCBjbSReMiQsIG1lbm9yIHF1ZSBsYSBkZWwgY3ViOiBhIGlndWFsdGF0IGRlIHZvbHVtLCBsJ2VzZmVyYSBuZWNlc3NpdGEgbWVueXMgbWF0ZXJpYWwuKSJdfQ=="
  }
 ]
};
