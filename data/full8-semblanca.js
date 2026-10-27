/* Generat per tools/build.py — no editeu aquest fitxer a mà. */
window.FULL = {
 "full": 8,
 "titol": "Full 8 — Teorema de Tales",
 "subtitol": "Teorema de Tales, triangles semblants, escales i aplicacions de la semblança a problemes d'altures i distàncies inaccessibles.",
 "blocs": [
  {
   "id": "tales",
   "titol": "Teorema de Tales",
   "descripcio": "Segments proporcionals entre rectes paral·leles i triangles en posició de Tales.",
   "items": [
    "358a",
    "358b",
    "152a",
    "152b",
    "152c",
    "152e",
    "152f",
    "153a",
    "153b",
    "153c"
   ]
  },
  {
   "id": "semblanca",
   "titol": "Semblança de triangles",
   "descripcio": "Raó de semblança i els tres criteris per determinar si dos triangles són semblants.",
   "items": [
    "359a",
    "359b",
    "154a",
    "154b",
    "154c",
    "154d",
    "155a",
    "155b",
    "155c",
    "155d",
    "155e"
   ]
  },
  {
   "id": "escales",
   "titol": "Escales",
   "descripcio": "Escala numèrica i problemes de mapes i plànols.",
   "items": [
    "360a",
    "360b",
    "156a",
    "156b",
    "158",
    "159",
    "160a",
    "160b"
   ]
  },
  {
   "id": "escales_calcul",
   "titol": "Càlcul amb escales",
   "descripcio": "Del plànol a la realitat i al revés, trobar l'escala, i escales amb canvi d'unitats.",
   "items": [
    "361a",
    "361b",
    "285a",
    "285b",
    "285c",
    "286a",
    "286b",
    "286c",
    "286d",
    "287a",
    "287b",
    "287c",
    "288a",
    "288b",
    "288c",
    "289"
   ]
  },
  {
   "id": "semblanca_arees",
   "titol": "Raó de semblança, àrees i volums",
   "descripcio": "Si les longituds es multipliquen per k, les àrees ho fan per k² i els volums per k³.",
   "items": [
    "362a",
    "362b",
    "290a",
    "290b",
    "290c",
    "291a",
    "291b",
    "291c",
    "292a",
    "292b",
    "293a",
    "293b",
    "294a",
    "294b",
    "294c"
   ]
  },
  {
   "id": "aplicacions",
   "titol": "Aplicacions de la semblança",
   "descripcio": "Ombres, reflexos i alçades o distàncies inaccessibles.",
   "items": [
    "161",
    "162",
    "163",
    "164",
    "165",
    "166",
    "167",
    "168",
    "169"
   ],
   "avancat": true
  }
 ],
 "errors": {
  "CREUAMENT_INVERTIT": "Has creuat els termes al revés en aïllar la incògnita.",
  "CRITERI_SEMBLANCA_INSUFICIENT": "Has dit que falten dades, però el criteri que toca ja es pot aplicar amb el que dona l'enunciat: tres costats, o dos costats i l'angle que formen, o dos angles.",
  "DADES_MAL_TRIADES": "Has fet servir una dada de l'enunciat que no és la que toca. Torna a llegir què representa cada número abans de col·locar-lo.",
  "FORMULA_INVERTIDA": "Has dividit on la fórmula multiplica (o al revés). Escriu la fórmula sencera abans de substituir-hi els valors.",
  "INVERTIDA": "Has invertit la fracció. Simplificar no canvia quin terme és a dalt i quin a baix.",
  "PRODUCTE_PER_SUMA": "Has sumat on tocava multiplicar (o al revés). Torna a llegir quina operació es fa sobre les dades.",
  "PROGRESSIO_INVENTADA": "El terme s'ha de calcular seguint estrictament la regla que defineix la successió (el terme general o la relació de recurrència), no un patró aproximat o inventat.",
  "RAO_AL_QUADRAT": "Has fet servir $k^2$ on tocava una altra potència. El quadrat és per a les àrees; les longituds van amb $k$ i els volums amb $k^3$.",
  "RAO_NOMES_UN_COSTAT": "Has comprovat la proporció amb un sol parell de costats. La semblança demana que TOTS els costats corresponents guardin la mateixa raó.",
  "RESTA_PER_QUOCIENT": "Has restat les dues quantitats. Un percentatge i una raó surten d'una DIVISIÓ: diuen quantes vegades, no quant més.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau."
 },
 "items": [
  {
   "id": "359a",
   "ex": 359,
   "ap": "a",
   "bloc": "semblanca",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Aquests dos triangles són semblants. Respon la pregunta fent servir la raó de semblança $k$, que va del triangle petit al gran.",
   "enunciat": "Triangle petit de costats $2$, $3$ i $4$ cm; triangle gran de costats $6$, $9$ i $12$ cm. Quina és la raó de semblança?",
   "opcions": [
    "$k=6$",
    "$k=\\dfrac{1}{3}$",
    "$k=4$",
    "$k=3$"
   ],
   "pistes": [
    "Agafa dos costats que es corresponen: el $2$ i el $6$.",
    "Divideix el del gran entre el del petit."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyIkNiQgw6lzIHVuIGNvc3RhdCBkZWwgZ3Jhbiwgbm8gbGEgcmHDsy4gTGEgcmHDsyBjb21wYXJhIGRvcyBjb3N0YXRzIGNvcnJlc3BvbmVudHM6ICQ2OjIkLiIsICJIYXMgZGl2aWRpdCBlbCBwZXRpdCBlbnRyZSBlbCBncmFuLiBEZWwgcGV0aXQgYWwgZ3JhbiDDqXMgZ3JhbiBlbnRyZSBwZXRpdDogJDY6MiQuIENvbSBxdWUgZWwgZ3JhbiDDqXMgbcOpcyBncmFuLCAkaz4xJC4iLCAiSGFzIHJlc3RhdCAkNi0yJC4gTGEgcmHDsyBzdXJ0IGRlIERJVklESVI6ICQ2OjIkLiBDb21wcm92YS1obyBhbWIgdW4gYWx0cmUgcGFyZWxsOiAkOS0zPTYkLCBubyAkNCQuIiwgIiJdLCAiZXJyIjogWyJEQURFU19NQUxfVFJJQURFUyIsICJJTlZFUlRJREEiLCAiUkVTVEFfUEVSX1FVT0NJRU5UIiwgIiJdLCAicmVzIjogWyIkaz1cXGRmcmFjezZ9ezJ9PVxcZGZyYWN7OX17M309XFxkZnJhY3sxMn17NH09MyQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 488 313\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles amb els costats corresponents marcats.</title><g transform=\"translate(14.0,282.3)\"><polygon points=\"0.0,0.0 90.0,0.0 10.0,-89.4\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"190.0,0.0 460.0,0.0 220.0,-268.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"45\" y=\"13.9\" text-anchor=\"middle\" class=\"fig-etq petita\">2 cm</text><text x=\"19.9\" y=\"-40.1\" text-anchor=\"middle\" class=\"fig-etq petita\">3 cm</text><text x=\"61.2\" y=\"-51.8\" text-anchor=\"middle\" class=\"fig-etq petita\">4 cm</text><text x=\"325\" y=\"13.9\" text-anchor=\"middle\" class=\"fig-etq petita\">6 cm</text><text x=\"219.9\" y=\"-129.6\" text-anchor=\"middle\" class=\"fig-etq petita\">9 cm</text><text x=\"357.6\" y=\"-89\" text-anchor=\"middle\" class=\"fig-etq petita\">12 cm</text></g></svg>"
  },
  {
   "id": "359b",
   "ex": 359,
   "ap": "b",
   "bloc": "semblanca",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Aquests dos triangles són semblants. Respon la pregunta fent servir la raó de semblança $k$, que va del triangle petit al gran.",
   "enunciat": "La raó de semblança és $k=2$. Un costat del triangle petit fa $5$ cm. Quant fa el costat corresponent del gran?",
   "opcions": [
    "$10$ cm",
    "$2{,}5$ cm",
    "$25$ cm",
    "$7$ cm"
   ],
   "pistes": [
    "$k=2$ vol dir que cada costat del gran és el doble del del petit.",
    "$5\\cdot2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGRpdmlkaXQgcGVyICQyJC4gRGVsIHBldGl0IGFsIGdyYW4gZXMgbXVsdGlwbGljYTogZWwgY29zdGF0IGhhIGRlIHNvcnRpciBNw4lTIGxsYXJnLiIsICJIYXMgZWxldmF0IGFsIHF1YWRyYXQuIEVscyBjb3N0YXRzIHPDs24gbG9uZ2l0dWRzOiB2YW4gYW1iICRrJCwgbm8gYW1iICRrXjIkLiIsICJIYXMgc3VtYXQgJDUrMiQuIExhIHJhw7MgZXMgTVVMVElQTElDQTogZWwgZ3JhbiDDqXMgZWwgZG9ibGUgZGVsIHBldGl0LiJdLCAiZXJyIjogWyIiLCAiRk9STVVMQV9JTlZFUlRJREEiLCAiUkFPX0FMX1FVQURSQVQiLCAiUFJPRFVDVEVfUEVSX1NVTUEiXSwgInJlcyI6IFsiJDVcXGNkb3QyPTEwJCBjbSJdfQ=="
  },
  {
   "id": "154a",
   "ex": 154,
   "ap": "a",
   "bloc": "semblanca",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula la longitud dels costats desconeguts en aquests parells de triangles semblants.",
   "enunciat": "Triangle petit de costats $3$ cm i $5$ cm; triangle gran de costats $4$ cm (correspon al de $3$ cm) i $x$ (correspon al de $5$ cm).",
   "opcions": [
    "$6$ cm",
    "$20$ cm",
    "$6{,}67$ cm (aproximadament)",
    "$3{,}75$ cm"
   ],
   "pistes": [
    "La raó de semblança és $k=\\dfrac{4}{3}$ (el costat de $4$ cm correspon al de $3$ cm).",
    "Aplica aquesta raó al costat de $5$ cm: $x=5\\cdot k$."
   ],
   "nota": "La correspondència entre costats del triangle petit i el gran s'ha establert seguint la indicació explícita del propi enunciat, que ja diu quins costats es corresponen entre si.",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igbm8gc3VydCBkZSBsYSBwcm9wb3JjacOzIGNvcnJlY3RhOiBjYWxjdWxhICQ1XFxjZG90XFxmcmFjezR9ezN9JCBwYXMgYSBwYXMgZW4gbGxvYyBkJ2Fycm9kb25pciAkXFxmcmFjezIwfXszfSQgYSB1biBub21icmUgZW50ZXIuIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGRlICQ1XFxjZG90NCQgc2Vuc2UgZGl2aWRpciBwZXIgJDMkOiBsYSByYcOzIGRlIHNlbWJsYW7Dp2Egw6lzICRcXGZyYWN7NH17M30kLCBpIGNhbCBtdWx0aXBsaWNhci1sYSBwZWwgY29zdGF0LCBubyBub23DqXMgbXVsdGlwbGljYXIgcGVsIG51bWVyYWRvci4iLCAiIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGQnYXBsaWNhciBsYSByYcOzIGludmVydGlkYSAkaz1cXGZyYWN7M317NH0kIGFsIGNvc3RhdCBkZSAkNSQgY207IGxhIHJhw7Mgw6lzICRrPVxcZnJhY3s0fXszfSQgKGRlbCBjb3N0YXQgZ3JhbiBjb25lZ3V0IGFsIHBldGl0IGNvbmVndXQpLCBubyBsYSBpbnZlcnNhLiJdLCAiZXJyIjogWyJQUk9HUkVTU0lPX0lOVkVOVEFEQSIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIiIsICJDUkVVQU1FTlRfSU5WRVJUSVQiXSwgInJlcyI6IFsiJGs9XFxkZnJhY3s0fXszfSQiLCAiJHg9NVxcY2RvdFxcZGZyYWN7NH17M309XFxkZnJhY3syMH17M31cXGFwcHJveDZ7LH02NyQgY20iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 281 115\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles amb els costats corresponents marcats.</title><g transform=\"translate(14.0,84.2)\"><polygon points=\"0.0,0.0 90.0,0.0 37.8,-70.2\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"163.0,0.0 253.0,0.0 200.8,-70.2\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"45\" y=\"13.9\" text-anchor=\"middle\" class=\"fig-etq petita\">3 cm</text><text x=\"36.5\" y=\"-22.7\" text-anchor=\"middle\" class=\"fig-etq petita\">5 cm</text><text x=\"208\" y=\"13.9\" text-anchor=\"middle\" class=\"fig-etq petita\">4 cm</text><text x=\"191.6\" y=\"-26.9\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text></g></svg>"
  },
  {
   "id": "154b",
   "ex": 154,
   "ap": "b",
   "bloc": "semblanca",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula la longitud dels costats desconeguts en aquests parells de triangles semblants.",
   "enunciat": "Triangle gran de costats $8$ cm, $10$ cm i $7$ cm; triangle petit de costat $6$ cm (correspon al de $8$ cm), amb els altres dos costats desconeguts. Quant valen?",
   "opcions": [
    "$8$ cm i $5$ cm",
    "$7{,}5$ cm i $5{,}25$ cm",
    "$60$ cm i $42$ cm",
    "$13{,}33$ cm i $9{,}33$ cm"
   ],
   "pistes": [
    "La raó de semblança és $k=\\dfrac{6}{8}=0{,}75$ (el costat de $6$ cm correspon al de $8$ cm).",
    "Aplica aquesta raó als costats de $10$ cm i $7$ cm."
   ],
   "nota": "La correspondència entre costats del triangle petit i el gran s'ha establert seguint la indicació explícita del propi enunciat, que ja diu quins costats es corresponen entre si.",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3RzIHZhbG9ycyBubyBzdXJ0ZW4gZGUgbGEgcHJvcG9yY2nDszogY2FsY3VsYSAkMTBcXGNkb3Qweyx9NzUkIGkgJDdcXGNkb3Qweyx9NzUkIHBhcyBhIHBhcyBlbiBsbG9jIGQnYXJyb2RvbmlyIGEgbm9tYnJlcyBlbnRlcnMgcHJvcGVycy4iLCAiIiwgIkFxdWVzdHMgdmFsb3JzIHN1cnRlbiBkZSAkMTBcXGNkb3Q2JCBpICQ3XFxjZG90NiQgc2Vuc2UgZGl2aWRpciBwZXIgJDgkOiBsYSByYcOzIGRlIHNlbWJsYW7Dp2Egw6lzICRcXGZyYWN7Nn17OH0kLCBubyBub23DqXMgZWwgJDYkLiIsICJBcXVlc3QgdmFsb3Igc3VydCBkJ2FwbGljYXIgbGEgcmHDsyBpbnZlcnRpZGEgJGs9XFxmcmFjezh9ezZ9JCBhbHMgY29zdGF0cyBkZSAkMTAkIGkgJDckIGNtOyBsYSByYcOzIMOpcyAkaz1cXGZyYWN7Nn17OH09MHssfTc1JCAoZGVsIGNvc3RhdCBwZXRpdCBjb25lZ3V0IGFsIGdyYW4gY29uZWd1dCksIG5vIGxhIGludmVyc2EuIl0sICJlcnIiOiBbIlBST0dSRVNTSU9fSU5WRU5UQURBIiwgIiIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIkNSRVVBTUVOVF9JTlZFUlRJVCJdLCAicmVzIjogWyIkaz1cXGRmcmFjezZ9ezh9PTB7LH03NSQiLCAiJDEwXFxjZG90MHssfTc1PTd7LH01JCBjbSRcXHFxdWFkIDdcXGNkb3Qweyx9NzU9NXssfTI1JCBjbSJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 253 119\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles amb els costats corresponents marcats.</title><g transform=\"translate(14.0,88.6)\"><polygon points=\"0.0,0.0 90.0,0.0 78.0,-74.6\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"159.2,0.0 224.0,0.0 186.4,-50.5\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"45\" y=\"13.9\" text-anchor=\"middle\" class=\"fig-etq petita\">8 cm</text><text x=\"52.8\" y=\"-19.9\" text-anchor=\"middle\" class=\"fig-etq petita\">10 cm</text><text x=\"103.8\" y=\"-37.5\" text-anchor=\"middle\" class=\"fig-etq petita\">7 cm</text><text x=\"191.6\" y=\"13.9\" text-anchor=\"middle\" class=\"fig-etq petita\">6 cm</text><text x=\"182.5\" y=\"-17.1\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text><text x=\"214.1\" y=\"-28.9\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text></g></svg>"
  },
  {
   "id": "154c",
   "ex": 154,
   "ap": "c",
   "bloc": "semblanca",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula la longitud dels costats desconeguts en aquests parells de triangles semblants.",
   "enunciat": "Triangle gran de costat $6$ cm (desconegut als altres dos); triangle petit de costats $3$ cm, $5$ cm i $4$ cm, on el de $5$ cm (el més llarg) correspon al de $6$ cm. Quant valen els altres dos costats del triangle gran?",
   "opcions": [
    "$3$ cm i $4$ cm",
    "$2{,}5$ cm i $3{,}33$ cm",
    "$18$ cm i $24$ cm",
    "$3{,}6$ cm i $4{,}8$ cm"
   ],
   "pistes": [
    "La raó de semblança és $k=\\dfrac{6}{5}=1{,}2$ (el costat de $6$ cm correspon al de $5$ cm, el més llarg del triangle petit).",
    "Aplica aquesta raó als altres dos costats del triangle petit ($3$ cm i $4$ cm)."
   ],
   "nota": "La correspondència entre costats del triangle petit i el gran s'ha establert seguint la indicació explícita del propi enunciat, que ja diu quins costats es corresponen entre si.",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3RzIHZhbG9ycyBzw7NuIGVscyBjb3N0YXRzIGRlbCB0cmlhbmdsZSBQRVRJVCwgbm8gZWxzIGRlbCB0cmlhbmdsZSBncmFuIHF1ZSBjYWxlbjogZW5jYXJhIGhhcyBkJ2FwbGljYXItaGkgbGEgcmHDsyBkZSBzZW1ibGFuw6dhLiIsICJBcXVlc3QgdmFsb3Igc3VydCBkJ2FwbGljYXIgbGEgcmHDsyBpbnZlcnRpZGEgJGs9XFxmcmFjezV9ezZ9JCBhbHMgY29zdGF0cyBkZSAkMyQgaSAkNCQgY207IGxhIHJhw7Mgw6lzICRrPVxcZnJhY3s2fXs1fT0xeyx9MiQgKGRlbCBjb3N0YXQgY29uZWd1dCBkZWwgdHJpYW5nbGUgZ3JhbiBhbCBkZWwgcGV0aXQpLCBubyBsYSBpbnZlcnNhLiIsICJBcXVlc3RzIHZhbG9ycyBzdXJ0ZW4gZGUgJDNcXGNkb3Q2JCBpICQ0XFxjZG90NiQgc2Vuc2UgZGl2aWRpciBwZXIgJDUkOiBsYSByYcOzIGRlIHNlbWJsYW7Dp2Egw6lzICRcXGZyYWN7Nn17NX0kLCBubyBub23DqXMgZWwgJDYkLiIsICIiXSwgImVyciI6IFsiUFJPR1JFU1NJT19JTlZFTlRBREEiLCAiQ1JFVUFNRU5UX0lOVkVSVElUIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiIl0sICJyZXMiOiBbIiRrPVxcZGZyYWN7Nn17NX09MXssfTIkIiwgIiQzXFxjZG90MXssfTI9M3ssfTYkIGNtJFxccXF1YWQgNFxcY2RvdDF7LH0yPTR7LH04JCBjbSJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 333 150\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles amb els costats corresponents marcats.</title><g transform=\"translate(14.0,119.3)\"><polygon points=\"0.0,0.0 90.0,0.0 25.3,-62.6\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"169.8,0.0 304.8,0.0 226.4,-105.3\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"45\" y=\"13.9\" text-anchor=\"middle\" class=\"fig-etq petita\">5 cm</text><text x=\"31.2\" y=\"-20.8\" text-anchor=\"middle\" class=\"fig-etq petita\">3 cm</text><text x=\"68.1\" y=\"-39.1\" text-anchor=\"middle\" class=\"fig-etq petita\">4 cm</text><text x=\"237.2\" y=\"13.9\" text-anchor=\"middle\" class=\"fig-etq petita\">6 cm</text><text x=\"207.8\" y=\"-44.5\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text><text x=\"274.4\" y=\"-56.3\" text-anchor=\"middle\" class=\"fig-etq petita\">x</text></g></svg>"
  },
  {
   "id": "154d",
   "ex": 154,
   "ap": "d",
   "bloc": "semblanca",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Calcula la longitud dels costats desconeguts en aquests parells de triangles semblants.",
   "enunciat": "Dos triangles isòsceles tenen els costats iguals de $5$ cm cadascun, amb bases respectives de $3{,}2$ cm i $2$ cm. Són semblants?",
   "opcions": [
    "No es pot saber sense conèixer els angles",
    "Sí, perquè els dos triangles són isòsceles",
    "No, perquè la raó entre els costats iguals ($1$) no coincideix amb la raó entre les bases ($1{,}6$)",
    "Sí, perquè els costats iguals mesuren el mateix ($5$ cm als dos triangles)"
   ],
   "pistes": [
    "Per ser semblants, TOTS els costats han de guardar la mateixa raó, no només alguns.",
    "Compara la raó dels costats iguals ($\\frac{5}{5}$) amb la raó de les bases ($\\frac{3{,}2}{2}$)."
   ],
   "nota": "La correspondència entre costats del triangle petit i el gran s'ha establert seguint la indicació explícita del propi enunciat, que ja diu quins costats es corresponen entre si.",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBbWIgZWxzIHRyZXMgY29zdGF0cyBkZSBjYWRhIHRyaWFuZ2xlIGphIG4naGkgaGEgcHJvdSBwZXIgYXBsaWNhciBlbCBjcml0ZXJpIGNvc3RhdC1jb3N0YXQtY29zdGF0OiBubyBjYWxlbiBlbHMgYW5nbGVzIHBlciBkZXNjYXJ0YXIgbGEgc2VtYmxhbsOnYS4iLCAiU2VyIGlzw7JzY2VsZXMgbm9tw6lzIGRpdSBxdWUgaGkgaGEgZG9zIGNvc3RhdHMgaWd1YWxzIGVudHJlIGVsbHMgZGlucyBkZSBDQURBIHRyaWFuZ2xlOyBubyBkaXUgcmVzIHNvYnJlIGxhIHByb3BvcmNpw7MgZW50cmUgZWxzIGRvcyB0cmlhbmdsZXMsIHF1ZSDDqXMgZWwgcXVlIGNhbCBjb21wcm92YXIuIiwgIiIsICJRdWUgdW4gcGFyZWxsIGRlIGNvc3RhdHMgY29pbmNpZGVpeGkgbm8gYmFzdGE6IGNhbCBxdWUgVE9UUyBlbHMgY29zdGF0cyBndWFyZGluIGxhIG1hdGVpeGEgcmHDsy4gQXF1w60gbGVzIGJhc2VzICgkM3ssfTIkIGNtIGkgJDIkIGNtKSBubyBndWFyZGVuIGxhIG1hdGVpeGEgcmHDsyBxdWUgZWxzIGNvc3RhdHMgaWd1YWxzLiJdLCAiZXJyIjogWyJDUklURVJJX1NFTUJMQU5DQV9JTlNVRklDSUVOVCIsICJDUklURVJJX1NFTUJMQU5DQV9JTlNVRklDSUVOVCIsICIiLCAiUkFPX05PTUVTX1VOX0NPU1RBVCJdLCAicmVzIjogWyJSYcOzIGRlbHMgY29zdGF0cyBpZ3VhbHM6ICRcXGRmcmFjezV9ezV9PTEkIiwgIlJhw7MgZGUgbGVzIGJhc2VzOiAkXFxkZnJhY3szeyx9Mn17Mn09MXssfTYkIiwgIkNvbSBxdWUgJDFcXG5lMXssfTYkLCBlbHMgdHJpYW5nbGVzIE5PIHPDs24gc2VtYmxhbnRzLiJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 298 148\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles amb els costats corresponents marcats.</title><g transform=\"translate(14.0,117.1)\"><polygon points=\"0.0,0.0 90.0,0.0 45.0,-103.1\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"164.3,0.0 263.3,0.0 213.8,-101.0\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"45\" y=\"13.9\" text-anchor=\"middle\" class=\"fig-etq petita\">2 cm</text><text x=\"40.8\" y=\"-40.6\" text-anchor=\"middle\" class=\"fig-etq petita\">5 cm</text><text x=\"85.8\" y=\"-56.6\" text-anchor=\"middle\" class=\"fig-etq petita\">5 cm</text><text x=\"213.8\" y=\"13.9\" text-anchor=\"middle\" class=\"fig-etq petita\">3,2 cm</text><text x=\"207.1\" y=\"-38.8\" text-anchor=\"middle\" class=\"fig-etq petita\">5 cm</text><text x=\"256.6\" y=\"-56.4\" text-anchor=\"middle\" class=\"fig-etq petita\">5 cm</text></g></svg>"
  },
  {
   "id": "155a",
   "ex": 155,
   "ap": "a",
   "bloc": "semblanca",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Determina si aquests parells de triangles són semblants, i quin criteri s'aplica en cada cas.",
   "enunciat": "Triangle de costats $4$ cm i $5$ cm amb angle comprès de $80^\\circ$; triangle de costats $5$ cm i $6$ cm amb angle comprès de $80^\\circ$. Són semblants?",
   "opcions": [
    "Sí, perquè els dos triangles tenen un angle de $80^\\circ$",
    "Sí, perquè tots dos triangles tenen un costat de $5$ cm",
    "No, perquè les raons $\\frac{5}{4}=1{,}25$ i $\\frac{6}{5}=1{,}2$ no coincideixen",
    "No es pot saber sense conèixer el tercer costat"
   ],
   "pistes": [
    "Amb dos costats i l'angle comprès conegut, aplica el criteri costat-angle-costat: compara les raons dels costats que envolten l'angle de $80^\\circ$.",
    "Calcula $\\frac{5}{4}$ i $\\frac{6}{5}$ i compara-les."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJRdWUgbCdhbmdsZSBjb21wcsOocyBjb2luY2lkZWl4aSBubyBiYXN0YSBwZWwgY3JpdGVyaSBjb3N0YXQtYW5nbGUtY29zdGF0OiBjYWwsIGEgbcOpcywgcXVlIGVscyBjb3N0YXRzIHF1ZSBsJ2Vudm9sdGVuIHNpZ3VpbiBwcm9wb3JjaW9uYWxzLCBpIGFxdcOtIG5vIGhvIHPDs24uIiwgIlF1ZSBjb2luY2lkZWl4aSB1biBzb2wgY29zdGF0IG5vIMOpcyBjYXAgZGVscyB0cmVzIGNyaXRlcmlzIGRlIHNlbWJsYW7Dp2EgZGUgdHJpYW5nbGVzOiBjYWwgY29tcGFyYXIgbGEgcHJvcG9yY2nDsyBlbnRyZSBlbHMgRE9TIGNvc3RhdHMgcXVlIGVudm9sdGVuIGwnYW5nbGUgaWd1YWwuIiwgIiIsICJBbWIgZG9zIGNvc3RhdHMgaSBsJ2FuZ2xlIGNvbXByw6hzIGphIG4naGkgaGEgcHJvdSBwZXIgYXBsaWNhciBlbCBjcml0ZXJpIGNvc3RhdC1hbmdsZS1jb3N0YXQ6IG5vIGNhbCBlbCB0ZXJjZXIgY29zdGF0IHBlciBkZXNjYXJ0YXIgbGEgc2VtYmxhbsOnYS4iXSwgImVyciI6IFsiQ1JJVEVSSV9TRU1CTEFOQ0FfSU5TVUZJQ0lFTlQiLCAiUkFPX05PTUVTX1VOX0NPU1RBVCIsICIiLCAiQ1JJVEVSSV9TRU1CTEFOQ0FfSU5TVUZJQ0lFTlQiXSwgInJlcyI6IFsiJFxcZGZyYWN7NX17NH09MXssfTI1IFxccXF1YWQgXFxkZnJhY3s2fXs1fT0xeyx9MiQiLCAiQ29tIHF1ZSAkMXssfTI1XFxuZTF7LH0yJCwgZWxzIHRyaWFuZ2xlcyBOTyBzw7NuIHNlbWJsYW50cy4iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 304 131\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles amb els costats corresponents marcats.</title><g transform=\"translate(14.0,99.8)\"><polygon points=\"0.0,0.0 90.0,0.0 37.8,-70.2\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"166.0,0.0 276.0,0.0 212.2,-85.8\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M 15.00 0.00 A 15.00 15.00 0 0 1 7.11 -13.21\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><path d=\"M 181.00 0.00 A 15.00 15.00 0 0 1 173.11 -13.21\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><text x=\"45\" y=\"13.9\" text-anchor=\"middle\" class=\"fig-etq petita\">4 cm</text><text x=\"36.5\" y=\"-22.7\" text-anchor=\"middle\" class=\"fig-etq petita\">5 cm</text><text x=\"221\" y=\"13.9\" text-anchor=\"middle\" class=\"fig-etq petita\">5 cm</text><text x=\"206.7\" y=\"-30.5\" text-anchor=\"middle\" class=\"fig-etq petita\">6 cm</text></g></svg>"
  },
  {
   "id": "155b",
   "ex": 155,
   "ap": "b",
   "bloc": "semblanca",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Determina si aquests parells de triangles són semblants, i quin criteri s'aplica en cada cas.",
   "enunciat": "Triangle de costats $11$ cm i $9{,}1$ cm amb angle comprès de $65^\\circ$; triangle de costats $9$ cm i $7$ cm amb angle comprès de $65^\\circ$. Són semblants?",
   "opcions": [
    "No, perquè les raons $\\frac{9}{11}\\approx0{,}818$ i $\\frac{7}{9{,}1}\\approx0{,}769$ no coincideixen",
    "No es pot saber sense conèixer el tercer costat",
    "Sí, perquè els costats es corresponen en ordre decreixent de mida",
    "Sí, perquè els dos triangles tenen un angle de $65^\\circ$"
   ],
   "pistes": [
    "Amb dos costats i l'angle comprès conegut, aplica el criteri costat-angle-costat: compara les raons dels costats que envolten l'angle de $65^\\circ$.",
    "Calcula $\\frac{9}{11}$ i $\\frac{7}{9{,}1}$ i compara-les."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQW1iIGRvcyBjb3N0YXRzIGkgbCdhbmdsZSBjb21wcsOocyBjb25lZ3V0IGphIG4naGkgaGEgcHJvdSBwZXIgYXBsaWNhciBlbCBjcml0ZXJpIGNvc3RhdC1hbmdsZS1jb3N0YXQ6IG5vIGNhbCBlbCB0ZXJjZXIgY29zdGF0IHBlciBkZXNjYXJ0YXIgbGEgc2VtYmxhbsOnYS4iLCAiTCdvcmRyZSBkZSBtaWRhIGRlbHMgY29zdGF0cyBubyDDqXMgY2FwIGNyaXRlcmkgZGUgc2VtYmxhbsOnYTogY2FsIGNvbXBhcmFyIGxlcyByYW9ucyBudW3DqHJpcXVlcyBleGFjdGVzIGRlbHMgY29zdGF0cyBjb3JyZXNwb25lbnRzLiIsICJRdWUgbCdhbmdsZSBjb21wcsOocyBjb2luY2lkZWl4aSBubyBiYXN0YSBwZWwgY3JpdGVyaSBjb3N0YXQtYW5nbGUtY29zdGF0OiBjYWwsIGEgbcOpcywgcXVlIGVscyBjb3N0YXRzIHF1ZSBsJ2Vudm9sdGVuIHNpZ3VpbiBwcm9wb3JjaW9uYWxzLCBpIGFxdcOtIG5vIGhvIHPDs24gcHJvdSBhcHJveGltYWRhbWVudC4iXSwgImVyciI6IFsiIiwgIkNSSVRFUklfU0VNQkxBTkNBX0lOU1VGSUNJRU5UIiwgIkNSSVRFUklfU0VNQkxBTkNBX0lOU1VGSUNJRU5UIiwgIkNSSVRFUklfU0VNQkxBTkNBX0lOU1VGSUNJRU5UIl0sICJyZXMiOiBbIiRcXGRmcmFjezl9ezExfVxcYXBwcm94MHssfTgxOCBcXHFxdWFkIFxcZGZyYWN7N317OXssfTF9XFxhcHByb3gweyx9NzY5JCIsICJDb20gcXVlICQweyx9ODE4XFxuZTB7LH03NjkkLCBlbHMgdHJpYW5nbGVzIE5PIHPDs24gc2VtYmxhbnRzIHBlbCBjcml0ZXJpIGNvc3RhdC1hbmdsZS1jb3N0YXQuIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 284 115\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles amb els costats corresponents marcats.</title><g transform=\"translate(37.2,84.2)\"><polygon points=\"0.0,0.0 90.0,0.0 37.8,-70.2\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"160.2,0.0 231.9,0.0 190.3,-55.9\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M 15.00 0.00 A 15.00 15.00 0 0 1 7.11 -13.21\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><path d=\"M 175.25 0.00 A 15.00 15.00 0 0 1 167.36 -13.21\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><text x=\"45\" y=\"13.9\" text-anchor=\"middle\" class=\"fig-etq petita\">11 cm</text><text x=\"-4\" y=\"-44.5\" text-anchor=\"middle\" class=\"fig-etq petita\">9,1 cm</text><text x=\"196.1\" y=\"13.9\" text-anchor=\"middle\" class=\"fig-etq petita\">9 cm</text><text x=\"157.7\" y=\"-34.5\" text-anchor=\"middle\" class=\"fig-etq petita\">7 cm</text></g></svg>"
  },
  {
   "id": "155c",
   "ex": 155,
   "ap": "c",
   "bloc": "semblanca",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Determina si aquests parells de triangles són semblants, i quin criteri s'aplica en cada cas.",
   "enunciat": "Triangle de costats $5$ cm i $7$ cm; triangle de costats $8$ cm i $12{,}8$ cm (sense conèixer cap angle). Es pot assegurar que són semblants?",
   "opcions": [
    "No, perquè les raons $1{,}6$ i $1{,}829$ no coincideixen",
    "Sí, perquè les raons $1{,}6$ i $1{,}829$ són semblants numèricament",
    "No es pot assegurar amb aquestes dades: les raons $\\frac{8}{5}=1{,}6$ i $\\frac{12{,}8}{7}\\approx1{,}829$ no coincideixen, però a més falta un angle o el tercer costat per aplicar un criteri amb seguretat",
    "Sí, perquè tots dos triangles tenen dos costats coneguts"
   ],
   "pistes": [
    "Amb només dos costats de cada triangle, sense conèixer l'angle comprès, no n'hi ha prou per aplicar cap dels tres criteris de semblança amb seguretat.",
    "Calcula igualment les raons $\\frac{8}{5}$ i $\\frac{12{,}8}{7}$ per veure si almenys descarten la semblança pel criteri costat-angle-costat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBbWIgbm9tw6lzIGRvcyBjb3N0YXRzIGRlIGNhZGEgdHJpYW5nbGUgaSBzZW5zZSBsJ2FuZ2xlIGNvbXByw6hzIG5vIGVzIHBvdCBhcGxpY2FyIGVsIGNyaXRlcmkgY29zdGF0LWFuZ2xlLWNvc3RhdCBhbWIgc2VndXJldGF0OiBmYWx0YSBpbmZvcm1hY2nDsyBwZXIgYWZpcm1hci1obyBPIG5lZ2FyLWhvIGFtYiBhcXVlc3QgY3JpdGVyaS4iLCAiJDF7LH02JCBpICQxeyx9ODI5JCBubyBjb2luY2lkZWl4ZW4sIGkgcGVyIGFwbGljYXIgdW4gY3JpdGVyaSBkZSBzZW1ibGFuw6dhIGNhbGVuIGRhZGVzIHF1ZSBhcXXDrSBmYWx0ZW4gKGwnYW5nbGUgY29tcHLDqHMgbyBlbCB0ZXJjZXIgY29zdGF0KS4iLCAiIiwgIkNvbsOoaXhlciBkb3MgY29zdGF0cyBkZSBjYWRhc2N1biBubyBiYXN0YSBwZXIgYXBsaWNhciBjYXAgZGVscyB0cmVzIGNyaXRlcmlzIGRlIHNlbWJsYW7Dp2E6IGNhbGVuIGVscyB0cmVzIGNvc3RhdHMgKGNyaXRlcmkgY29zdGF0LWNvc3RhdC1jb3N0YXQpIG8gbCdhbmdsZSBjb21wcsOocyAoY3JpdGVyaSBjb3N0YXQtYW5nbGUtY29zdGF0KS4iXSwgImVyciI6IFsiQ1JJVEVSSV9TRU1CTEFOQ0FfSU5TVUZJQ0lFTlQiLCAiQ1JJVEVSSV9TRU1CTEFOQ0FfSU5TVUZJQ0lFTlQiLCAiIiwgIkNSSVRFUklfU0VNQkxBTkNBX0lOU1VGSUNJRU5UIl0sICJyZXMiOiBbIiRcXGRmcmFjezh9ezV9PTF7LH02IFxccXF1YWQgXFxkZnJhY3sxMnssfTh9ezd9XFxhcHByb3gxeyx9ODI5JCIsICJMZXMgcmFvbnMgbm8gY29pbmNpZGVpeGVuLCBwZXLDsiBhbWIgbm9tw6lzIGFxdWVzdGEgaW5mb3JtYWNpw7Mgbm8gZXMgcG90IGFmaXJtYXIgcXVlIHNpZ3VpbiBzZW1ibGFudHM6IGNhbGVuIGVscyB0cmVzIGNvc3RhdHMgbyB1biBhbmdsZSBjb21wcsOocyBwZXIgYXBsaWNhciBhbWIgc2VndXJldGF0IHVuIGNyaXRlcmkgZGUgc2VtYmxhbsOnYS4iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 357 166\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles amb els costats corresponents marcats.</title><g transform=\"translate(14.0,135.7)\"><polygon points=\"0.0,0.0 90.0,0.0 37.8,-70.2\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"172.9,0.0 328.9,0.0 238.4,-121.7\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"45\" y=\"13.9\" text-anchor=\"middle\" class=\"fig-etq petita\">5 cm</text><text x=\"36.5\" y=\"-22.7\" text-anchor=\"middle\" class=\"fig-etq petita\">7 cm</text><text x=\"250.9\" y=\"13.9\" text-anchor=\"middle\" class=\"fig-etq petita\">8 cm</text><text x=\"228.6\" y=\"-45.6\" text-anchor=\"middle\" class=\"fig-etq petita\">12,8 cm</text></g></svg>"
  },
  {
   "id": "155d",
   "ex": 155,
   "ap": "d",
   "bloc": "semblanca",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Determina si aquests parells de triangles són semblants, i quin criteri s'aplica en cada cas.",
   "enunciat": "Triangle rectangle de catets $3$ cm i $5$ cm; triangle rectangle de catets $10$ cm i $13$ cm. Són semblants?",
   "opcions": [
    "No es pot saber sense calcular les hipotenuses",
    "No, perquè les raons $\\frac{10}{3}\\approx3{,}33$ i $\\frac{13}{5}=2{,}6$ no coincideixen",
    "Sí, perquè tots dos són triangles rectangles",
    "Sí, perquè la hipotenusa és més gran en tots dos casos"
   ],
   "pistes": [
    "En un triangle rectangle, els catets envolten l'angle recte, que és igual als dos triangles: aplica el criteri costat-angle-costat comparant la raó dels catets.",
    "Calcula $\\frac{10}{3}$ i $\\frac{13}{5}$ i compara-les."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbHMgY2F0ZXRzIGphIGVudm9sdGVuIGwnYW5nbGUgcmVjdGUgKGwnYW5nbGUgY29tcHLDqHMsIGlndWFsIGFscyBkb3MgdHJpYW5nbGVzKTogYW1iIGxhIHNldmEgcmHDsyBqYSBuJ2hpIGhhIHByb3UgcGVyIGFwbGljYXIgZWwgY3JpdGVyaSBjb3N0YXQtYW5nbGUtY29zdGF0LCBzZW5zZSBjYWxjdWxhciBjYXAgaGlwb3RlbnVzYS4iLCAiIiwgIlNlciByZWN0YW5nbGUgbm9tw6lzIGZpeGEgdW4gYW5nbGUgZGUgJDkwXlxcY2lyYyQgaWd1YWwgYWxzIGRvcyB0cmlhbmdsZXM7IHBlciBhc3NlZ3VyYXIgbGEgc2VtYmxhbsOnYSBjYWwsIGEgbcOpcywgcXVlIGVscyBjYXRldHMgKHF1ZSBlbnZvbHRlbiBhcXVlc3QgYW5nbGUgcmVjdGUpIHNpZ3VpbiBwcm9wb3JjaW9uYWxzLCBpIGFxdcOtIG5vIGhvIHPDs24uIiwgIlF1ZSBsYSBoaXBvdGVudXNhIHNpZ3VpIGVsIGNvc3RhdCBtw6lzIGdyYW4gw6lzIGNlcnQgZW4gcXVhbHNldm9sIHRyaWFuZ2xlIHJlY3RhbmdsZTsgbm8gZGl1IHJlcyBzb2JyZSBzaSBlbHMgZG9zIHRyaWFuZ2xlcyBjb25jcmV0cyBzw7NuIHByb3BvcmNpb25hbHMgZW50cmUgc2kuIl0sICJlcnIiOiBbIkNSSVRFUklfU0VNQkxBTkNBX0lOU1VGSUNJRU5UIiwgIiIsICJDUklURVJJX1NFTUJMQU5DQV9JTlNVRklDSUVOVCIsICJSQU9fTk9NRVNfVU5fQ09TVEFUIl0sICJyZXMiOiBbIiRcXGRmcmFjezEwfXszfVxcYXBwcm94M3ssfTMzIFxccXF1YWQgXFxkZnJhY3sxM317NX09MnssfTYkIiwgIkNvbSBxdWUgJDN7LH0zM1xcbmUyeyx9NiQsIGVscyB0cmlhbmdsZXMgTk8gc8OzbiBzZW1ibGFudHMgcGVsIGNyaXRlcmkgY29zdGF0LWFuZ2xlLWNvc3RhdCBhbWIgbCdhbmdsZSByZWN0ZSBjb20gYSBhbmdsZSBjb21wcsOocy4iXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 476 337\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dos triangles amb els costats corresponents marcats.</title><g transform=\"translate(14.0,306.5)\"><polygon points=\"0.0,0.0 90.0,0.0 0.0,-112.5\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"188.3,0.0 447.1,0.0 188.3,-292.5\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M 15.00 0.00 A 15.00 15.00 0 0 1 0.00 -15.00\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><path d=\"M 203.31 0.00 A 15.00 15.00 0 0 1 188.31 -15.00\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2\"/><text x=\"45\" y=\"13.9\" text-anchor=\"middle\" class=\"fig-etq petita\">3 cm</text><text x=\"15\" y=\"-53.3\" text-anchor=\"middle\" class=\"fig-etq petita\">5 cm</text><text x=\"317.7\" y=\"13.9\" text-anchor=\"middle\" class=\"fig-etq petita\">10 cm</text><text x=\"208.3\" y=\"-143.3\" text-anchor=\"middle\" class=\"fig-etq petita\">13 cm</text></g></svg>"
  },
  {
   "id": "155e",
   "ex": 155,
   "ap": "e",
   "bloc": "semblanca",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Determina si aquests parells de triangles són semblants, i quin criteri s'aplica en cada cas.",
   "enunciat": "Triangle rectangle amb un angle agut de $50^\\circ$; triangle rectangle amb un angle agut de $40^\\circ$. Són semblants?",
   "opcions": [
    "Sí, però només si a més els costats són proporcionals",
    "No es pot saber sense conèixer els costats",
    "No, perquè els angles aguts donats ($50^\\circ$ i $40^\\circ$) no coincideixen",
    "Sí, pel criteri angle-angle-angle: els dos triangles tenen els mateixos tres angles ($90^\\circ$, $50^\\circ$ i $40^\\circ$)"
   ],
   "pistes": [
    "Calcula el tercer angle de cada triangle: $180^\\circ-90^\\circ-50^\\circ$ i $180^\\circ-90^\\circ-40^\\circ$.",
    "Compara els tres angles de cada triangle un cop calculats tots dos tercers angles."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCBjcml0ZXJpIGFuZ2xlLWFuZ2xlLWFuZ2xlIMOpcyBzdWZpY2llbnQgcGVyIHNpIHNvbDogc2kgZWxzIHRyZXMgYW5nbGVzIGNvaW5jaWRlaXhlbiwgZWxzIHRyaWFuZ2xlcyBqYSBzw7NuIHNlbWJsYW50cywgc2Vuc2UgbmVjZXNzaXRhdCBkZSBjb21wcm92YXIgZWxzIGNvc3RhdHMgYSBwYXJ0LiIsICJBbWIgZWxzIHRyZXMgYW5nbGVzIGRlIGNhZGEgdHJpYW5nbGUgKHVuIGNvcCBjYWxjdWxhdCBlbCB0ZXJjZXIpIGphIG4naGkgaGEgcHJvdSBwZXIgYXBsaWNhciBlbCBjcml0ZXJpIGFuZ2xlLWFuZ2xlLWFuZ2xlOiBubyBjYWxlbiBlbHMgY29zdGF0cy4iLCAiQ2FsIGNhbGN1bGFyIGVsIFRFUkNFUiBhbmdsZSBkZSBjYWRhIHRyaWFuZ2xlIGFiYW5zIGRlIGNvbmNsb3VyZSByZXM6ICQxODBeXFxjaXJjLTkwXlxcY2lyYy01MF5cXGNpcmM9NDBeXFxjaXJjJCBpICQxODBeXFxjaXJjLTkwXlxcY2lyYy00MF5cXGNpcmM9NTBeXFxjaXJjJCwgYWl4w60gcXVlIGVuIHJlYWxpdGF0IGVscyBkb3MgdHJpYW5nbGVzIHRlbmVuIGVscyBtYXRlaXhvcyB0cmVzIGFuZ2xlcy4iLCAiIl0sICJlcnIiOiBbIkNSSVRFUklfU0VNQkxBTkNBX0lOU1VGSUNJRU5UIiwgIkNSSVRFUklfU0VNQkxBTkNBX0lOU1VGSUNJRU5UIiwgIkNSSVRFUklfU0VNQkxBTkNBX0lOU1VGSUNJRU5UIiwgIiJdLCAicmVzIjogWyJUcmlhbmdsZSBhbWIgYW5nbGUgYWd1dCBkZSAkNTBeXFxjaXJjJDogdMOpIGFuZ2xlcyAkOTBeXFxjaXJjJCwgJDUwXlxcY2lyYyQgaSAkMTgwXlxcY2lyYy05MF5cXGNpcmMtNTBeXFxjaXJjPTQwXlxcY2lyYyQuIiwgIlRyaWFuZ2xlIGFtYiBhbmdsZSBhZ3V0IGRlICQ0MF5cXGNpcmMkOiB0w6kgYW5nbGVzICQ5MF5cXGNpcmMkLCAkNDBeXFxjaXJjJCBpICQxODBeXFxjaXJjLTkwXlxcY2lyYy00MF5cXGNpcmM9NTBeXFxjaXJjJC4iLCAiRWxzIGRvcyB0cmlhbmdsZXMgdGVuZW4gZWxzIG1hdGVpeG9zIHRyZXMgYW5nbGVzOiBTw40gc8OzbiBzZW1ibGFudHMsIHBlbCBjcml0ZXJpIGFuZ2xlLWFuZ2xlLWFuZ2xlLiJdfQ=="
  }
 ]
};
