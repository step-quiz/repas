/* proves-inicials.js — les preguntes del test inicial.

   Aquestes preguntes NO surten del banc d'exercicis (data/fullN.js). Estan
   escrites expressament per a aquest test, i el criteri és diferent del d'un
   exercici de pràctica: aquí no volem que l'alumne s'entreni, volem saber en
   quin estat té cada destresa. Per això cada prova és una sola operació, la
   més curta que encara distingeix qui en sap de qui no en sap. Si algú no
   recorda què és el valor numèric d'un polinomi, no cal fer-li'n calcular
   vuit: amb un n'hi ha prou.

   Criteris amb què estan triades:

   - UNA destresa per prova, i la destresa PORTA a les altres del seu tema.
     Qui sap factoritzar $x^2-25$ sap fer el valor numèric d'un polinomi; al
     revés no. Escollim sempre la destresa pont, no la més elemental.
   - CURTES: enunciat d'una línia, sense context narratiu. El temps de
     lectura no ha de competir amb el temps de pensar.
   - DIAGNÒSTIQUES: allà on hi ha un malentès clàssic, la prova el toca de
     ple ($-3^2$ contra $(-3)^2$; pujar i baixar un 20 % no torna al preu de
     partida). Els distractors són el resultat d'aquell error concret, no
     números a l'atzar: qui el tria diu, amb la seva tria, quin error fa.
   - Cobreixen els 12 fulls: 15 proves, una per full i tres de més als dos
     fulls més amples i més prerequisit (Full 1 i Full 5).

   El que el test NO fa és cobrir els 46 blocs del lloc: amb 15 preguntes és
   impossible i seria deshonest fer-ho veure. Cada prova apunta als blocs que
   la destresa implica de veritat (34 dels 46), i la resta queden per a qui
   vulgui navegar pel seu compte. El test serveix per decidir per on
   començar, no per certificar res.

   ORDRE: les proves van en ordre de currículum, de més bàsic a més avançat.
   No es barregen ni roten: l'alumne ha de poder notar que va pujant, i que
   arriba a un punt on ja no ho reconeix. Aquest punt és, ell mateix, una
   dada.

   Cada prova declara `blocs`: els blocs del lloc on l'alumne anirà a parar
   si la prova surt malament. El primer és el principal (rep més exercicis a
   l'itinerari), els altres són el context que l'acompanya. */
window.RE_PROVES = (function () {
  "use strict";

  /* Les quatre respostes que l'alumne pot marcar a cada prova. L'ordre és
     deliberat: de més a menys domini, per llegir-se com una escala.

     Digui el que digui, tot seguit se li demana la resposta de la pregunta —
     tret de l'última opció, on no hi ha res a mesurar. Per això cada prova
     porta sempre les seves quatre opcions i el seu índex correcte. */
  var ESTATS = [
    { id: "domino",
      text: "Crec que sé resoldre aquesta qüestió força bé" },
    { id: "oblidat",
      text: "Recordo que m'ho van explicar i ho vaig entendre, però ara ho he oblidat" },
    { id: "no_entes",
      text: "Recordo que m'ho van explicar i no ho vaig entendre massa" },
    { id: "mai",
      text: "No recordo haver-ho fet mai, això" }
  ];

  var PROVES = [
    {
      id: "signes",
      tema: "Signes i potències de nombres negatius",
      encap: "Calcula:",
      enunciat: "$-3^2 + (-3)^2$",
      blocs: [{ full: 1, bloc: "enters" }],
      opcions: ["$0$", "$18$", "$-18$", "$9$"],
      ok: 0
    },
    {
      id: "fraccions",
      tema: "Sumar i restar fraccions",
      encap: "Calcula:",
      enunciat: "$\\dfrac{2}{3}-\\dfrac{1}{4}+\\dfrac{1}{2}$",
      blocs: [{ full: 1, bloc: "fraccions" }, { full: 1, bloc: "divisibilitat" }],
      opcions: ["$\\dfrac{11}{12}$", "$\\dfrac{5}{12}$", "$-\\dfrac{1}{12}$", "$\\dfrac{2}{9}$"],
      ok: 0
    },
    {
      id: "potencies",
      tema: "Propietats de les potències",
      encap: "Escriu-ho com una sola potència:",
      enunciat: "$2^5 \\cdot 2^{-3} : 2^2$",
      blocs: [{ full: 2, bloc: "negatiu" }, { full: 2, bloc: "basiques" },
              { full: 2, bloc: "combinades" }],
      opcions: ["$2^0 = 1$", "$2^4$", "$2^6$", "$2^{10}$"],
      ok: 0
    },
    {
      id: "progressions",
      tema: "Progressions aritmètiques",
      encap: "En la successió $3,\\ 7,\\ 11,\\ 15,\\ \\dots$",
      enunciat: "quant val el terme $a_{10}$?",
      blocs: [{ full: 3, bloc: "aritmetiques" }, { full: 3, bloc: "termes" },
              { full: 3, bloc: "geometriques" }],
      opcions: ["$39$", "$43$", "$40$", "$31$"],
      ok: 0
    },
    {
      id: "factoritzar",
      tema: "Factoritzar amb igualtats notables",
      encap: "Escriu-ho com un producte:",
      enunciat: "$x^2-25$",
      blocs: [{ full: 4, bloc: "notables" }, { full: 4, bloc: "factor_comu" },
              { full: 4, bloc: "divisio" }],
      opcions: ["$(x+5)(x-5)$", "$(x-5)^2$", "$(x+5)^2$", "No es pot factoritzar"],
      ok: 0
    },
    {
      id: "eq1grau",
      tema: "Equacions de primer grau amb denominadors",
      encap: "Resol l'equació:",
      enunciat: "$\\dfrac{x-1}{2}+\\dfrac{x}{3}=2$",
      blocs: [{ full: 5, bloc: "primer_grau" }],
      opcions: ["$x=3$", "$x=1$", "$x=\\dfrac{13}{5}$", "$x=5$"],
      ok: 0
    },
    {
      id: "eq2grau",
      tema: "Equacions de segon grau",
      encap: "Resol l'equació:",
      enunciat: "$x^2-5x+6=0$",
      blocs: [{ full: 5, bloc: "formula_general" }, { full: 5, bloc: "factoritzacio" }],
      opcions: ["$x=2$ i $x=3$", "$x=-2$ i $x=-3$", "$x=1$ i $x=6$", "$x=2$ i $x=-3$"],
      ok: 0
    },
    {
      id: "sistemes",
      tema: "Sistemes de dues equacions",
      encap: "Resol el sistema:",
      enunciat: "$x+y=7$ , $x-y=1$",
      blocs: [{ full: 5, bloc: "sistemes" }, { full: 5, bloc: "problemes" }],
      opcions: ["$x=4$ , $y=3$", "$x=3$ , $y=4$", "$x=4$ , $y=-3$", "$x=8$ , $y=-1$"],
      ok: 0
    },
    {
      id: "percentatges",
      tema: "Augments i descomptes percentuals",
      encap: "Un preu de 50 € puja un 20 % i tot seguit baixa un 20 %.",
      enunciat: "Quant val al final?",
      blocs: [{ full: 6, bloc: "encadenats" }, { full: 6, bloc: "percentatges" },
              { full: 6, bloc: "directa_inversa" }],
      opcions: ["48 €", "50 €", "52 €", "40 €"],
      ok: 0
    },
    {
      id: "pitagores",
      tema: "Teorema de Pitàgores",
      encap: "Un triangle rectangle té catets de 6 cm i 8 cm.",
      enunciat: "Quant fa la hipotenusa?",
      blocs: [{ full: 7, bloc: "triangles" }, { full: 7, bloc: "arees_pit" }],
      opcions: ["10 cm", "14 cm", "100 cm", "7 cm"],
      ok: 0
    },
    {
      id: "escales",
      tema: "Escales i semblança",
      encap: "En un mapa d'escala $1:50\\,000$,",
      enunciat: "a quants km equivalen 3 cm?",
      blocs: [{ full: 8, bloc: "escales" }, { full: 8, bloc: "semblanca" },
              { full: 8, bloc: "tales" }],
      opcions: ["1,5 km", "15 km", "150 km", "0,15 km"],
      ok: 0
    },
    {
      id: "volums",
      tema: "Volum dels cossos geomètrics",
      encap: "Un cilindre té 3 cm de radi i 4 cm d'altura.",
      enunciat: "Quin és el seu volum? ($\\pi \\approx 3{,}14$)",
      blocs: [{ full: 9, bloc: "cossos_rodons" }, { full: 9, bloc: "volums_aplicacions" },
              { full: 9, bloc: "prismes" }],
      opcions: ["113,04 cm$^3$", "75,36 cm$^3$", "37,68 cm$^3$", "226,08 cm$^3$"],
      ok: 0
    },
    {
      id: "parabola",
      tema: "Paràboles: vèrtex i talls",
      encap: "De la paràbola $y=x^2-4x+3$,",
      enunciat: "quines són les coordenades del vèrtex?",
      blocs: [{ full: 10, bloc: "funcions_quadratiques" },
              { full: 10, bloc: "concepte_funcio" }],
      opcions: ["$(2,-1)$", "$(-2,15)$", "$(2,3)$", "$(4,3)$"],
      ok: 0
    },
    {
      /* Destresa pont del Full 11: per fer la mitjana d'una taula cal
         entendre què és la freqüència (si no, es fa la mitjana dels valors i
         surt 2) i cal saber què és una mitjana. Una prova sobre freqüència
         relativa tota sola no arribava als blocs de centralització i
         dispersió, que són el que li fa més falta a qui va a batxillerat. */
      id: "frequencies",
      tema: "Taules de freqüències i mesures de centralització",
      encap: "En una taula, el valor $1$ surt $2$ vegades, el $2$ surt $5$ "
             + "vegades i el $3$ surt $3$ vegades.",
      enunciat: "Quina és la mitjana?",
      blocs: [{ full: 11, bloc: "centralitzacio" }, { full: 11, bloc: "frequencies" },
              { full: 11, bloc: "dispersio" }, { full: 11, bloc: "variables" }],
      opcions: ["$2,1$", "$2$", "$10$", "$21$"],
      ok: 0
    },
    {
      id: "laplace",
      tema: "Probabilitat: regla de Laplace",
      encap: "Traiem una carta d'una baralla de 40.",
      enunciat: "Quina és la probabilitat que sigui un as?",
      blocs: [{ full: 12, bloc: "laplace" }, { full: 12, bloc: "espais_mostrals" }],
      opcions: ["$\\dfrac{1}{10}$", "$\\dfrac{1}{40}$", "$\\dfrac{4}{10}$", "$\\dfrac{1}{4}$"],
      ok: 0
    }
  ];

  return { ESTATS: ESTATS, PROVES: PROVES };
})();
