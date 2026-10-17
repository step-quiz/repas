/* nucli.js — estat compartit entre pàgines: progrés per full (localStorage),
   pintat del mapa de llacunes i renderitzat de matemàtiques amb KaTeX.

   El progrés de cada full es desa amb la seva pròpia clau
   ("repas-eso:full1", "repas-eso:full2"... fins a "repas-eso:full12") perquè
   cada full té el seu propi recorregut. Per això totes les funcions de
   progrés reben el número de full com a primer argument.

   ── EL REGISTRE ÉS D'UNA SOLA DIRECCIÓ ────────────────────────────────────

   Un exercici es tanca la primera vegada que arriba a un desenllaç (encert o
   segon error) i el seu estat ja no torna a canviar mai més. Tornar-hi
   després és repàs —bo, i el registre el compta a `rep`— però no reescriu com
   va anar. Això tanca de cop tres forats que hi havia i que no costaven res
   d'explotar:

     · fallar, mirar la resolució i refer l'exercici per sortir «net»;
     · fallar el primer intent i recarregar la pàgina abans del segon
       (l'estat es desa AL PRIMER error, no al segon: refrescar ja no neteja);
     · demanar pistes, recarregar i respondre «sense pistes».

   Els comptadors `nint` (intents) i `npis` (pistes) són acumulats de totes
   les visites, no de la sessió, i són ells els que decideixen l'estat:
   encertar amb `nint > 1` és "segon" (amb pistes o sense), i encertar a la
   primera amb `npis > 0` és "pista",
   encara que els intents anteriors fossin d'una altra sessió o d'abans d'un
   F5. La sessió ja no és una pissarra que s'esborri sola.

   Res d'això impedeix que algú editi el localStorage a mà o es fabriqui un
   codi des de la consola: sense servidor això és impossible i el projecte ho
   diu obertament. El que fa és que la trampa deixi de ser gratuïta i
   accidental —refrescar, repetir— i passi a demanar intenció i consola, que
   és una frontera que la majoria d'alumnes no travessa. */
window.RE = (function () {
  "use strict";

  function clauLS(full) { return "repas-eso:full" + full; }

  function llegeix(full) {
    var p;
    try {
      p = JSON.parse(localStorage.getItem(clauLS(full)));
    } catch (e) {
      return { v: 1, items: {} };
    }
    if (!p) return { v: 1, items: {} };
    if (!p.tfv) migraDates(full, p);
    return p;
  }

  /* ── la data del primer intent ───────────────────────────────────────────

     Cada exercici guarda `tf`: el moment en què es va respondre per primer
     cop. És el que decideix a quin tram de 3 setmanes pertany, i en quin
     ordre es va fer (només compten els 20 últims de cada tram). No canvia
     mai més: ni en encertar al segon intent ni en repassar-lo.

     Els exercicis fets abans que existís `tf` no en tenen. Se'ls posa una
     sola vegada la data de l'última escriptura (`ts`), que és la millor
     aproximació que hi ha, i es marca amb `tfa`. No es fa amb els importats
     d'un codi (`imp`): la seva data real no és la de la importació. */
  function migraDates(full, p) {
    Object.keys(p.items || {}).forEach(function (id) {
      var it = p.items[id];
      if (it && it.estat && it.estat !== "vist" && !it.tf && !it.imp && it.ts) {
        it.tf = it.ts;
        it.tfa = 1;
      }
    });
    p.tfv = 1;
    desa(full, p);
  }

  function desa(full, p) {
    try { localStorage.setItem(clauLS(full), JSON.stringify(p)); } catch (e) { /* ple o bloquejat: no fem res */ }
  }

  function estat(full, id) { return (llegeix(full).items[id] || {}).estat || ""; }

  function apunta(full, id, dades) {
    var p = llegeix(full);
    p.items[id] = Object.assign({}, p.items[id], dades, { ts: Date.now() });
    desa(full, p);
  }

  /* Acumula una etiqueta d'error a l'historial de l'ítem.

     `err` (l'últim error) es conserva pel format antic, però la llista `errs`
     és la que compta: abans l'error del primer intent s'esborrava en encertar
     al segon, i el resultat era que l'error més interessant de tots -- el que
     l'alumne repeteix però acaba corregint -- no arribava mai al panell "els
     errors que repeteixes". Un error comès és un error comès, encara que
     després es rectifiqui. */
  function apuntaError(full, id, etiqueta) {
    if (!etiqueta) return;
    var p = llegeix(full), it = p.items[id] || {};
    var errs = (it.errs || []).slice();
    errs.push(etiqueta);
    if (errs.length > 12) errs = errs.slice(-12);   /* prou per a l'anàlisi */
    apunta(full, id, { err: etiqueta, errs: errs });
  }

  /* ── metadades globals ───────────────────────────────────────────────────

     Viuen en una clau A PART de les dels fulls ("repas-eso:meta") a posta:
     el botó de reiniciar un full no les ha de poder esborrar, perquè
     justament una de les coses que compten és quantes vegades s'ha reiniciat
     un full. Qui vulgui netejar això ha de buidar tot el localStorage, que ja
     és una acció deliberada i que l'analitzador veu com a pèrdua de dades. */
  var CLAU_META = "repas-eso:meta";

  function meta() {
    try { return JSON.parse(localStorage.getItem(CLAU_META)) || {}; }
    catch (e) { return {}; }
  }

  function desaMeta(m) {
    try { localStorage.setItem(CLAU_META, JSON.stringify(m)); } catch (e) { /* ple o bloquejat */ }
  }

  function sumaMeta(camp, quant) {
    var m = meta();
    m[camp] = (m[camp] || 0) + (quant === undefined ? 1 : quant);
    desaMeta(m);
    return m[camp];
  }

  /* ── un intent i una pista ───────────────────────────────────────────────

     `estatDe` és tota la política en tres línies, i és deliberadament cega a
     la sessió: només mira els comptadors acumulats de l'ítem. */
  function estatDe(nint, npis, encert) {
    if (!encert) return "fallat";
    /* El segon intent mana sobre les pistes. Si no fos així, obrir una pista
       just després d'equivocar-se convertiria un segon intent (7) en un
       encert amb pista (9,5) i esborraria gairebé tot l'error. Així, després
       d'un error la pista no costa res, però tampoc no maquilla la nota. */
    if (nint > 1) return "segon";
    if (npis > 0) return "pista";
    return "net";
  }

  /* Registra un intent. Retorna { estat, repas, tancat }:
       · repas=true  -> l'exercici ja estava tancat; això és pràctica, i el
                        registre no es toca (només puja `rep`).
       · tancat=true -> a partir d'ara l'estat és definitiu. */
  function intent(full, id, encert) {
    var it = llegeix(full).items[id] || {};
    var nint = (it.nint || 0) + 1;
    var npis = it.npis || 0;

    if (it.tancat) {
      apunta(full, id, { nint: nint, intents: nint, rep: (it.rep || 0) + 1 });
      sumaMeta("rep");
      return { estat: it.estat || "", repas: true, tancat: true };
    }

    var estat = estatDe(nint, npis, encert);
    /* Es tanca en encertar o al segon intent. L'estat es desa igualment al
       PRIMER error: si l'alumne se'n va ara, se'n va amb un "fallat" desat,
       no amb un "vist" que no compta enlloc. */
    var tancat = encert || nint >= 2;
    var dades = {
      estat: estat, nint: nint, npis: npis,
      intents: nint, pistes: npis, tancat: tancat ? 1 : 0
    };
    if (!it.tf && (!it.estat || it.estat === "vist")) dades.tf = Date.now();
    apunta(full, id, dades);
    return { estat: estat, repas: false, tancat: tancat };
  }

  /* Una pista demanada queda desada immediatament i per sempre: no depèn de
     si després es respon, ni de si es recarrega la pàgina. */
  function pista(full, id, quantes) {
    var it = llegeix(full).items[id] || {};
    /* `quantes` és el nombre de pistes OBERTES en total en aquest exercici,
       no un increment: qui ja n'havia obert dues i recarrega la pàgina pot
       tornar-les a llegir sense que el comptador pugi a quatre, però tampoc
       no baixa a zero. El màxim mana. */
    var npis = Math.max(it.npis || 0, quantes === undefined ? (it.npis || 0) + 1 : quantes);
    apunta(full, id, { npis: npis, pistes: npis });
    return npis;
  }

  function item(full, id) { return llegeix(full).items[id] || {}; }

  /* Rellotge de feina activa. No mesura temps de pantalla oberta: només suma
     mentre la pestanya és visible, i es para sola. Serveix per a una sola
     cosa, que ara mateix és invisible: distingir 60 exercicis fets en dues
     setmanes de 60 exercicis "fets" en nou minuts.

     El temps de CADA exercici no es compta aquí: vegeu `cronoExercici`. */
  function rellotge(interval) {
    var pas = interval || 15;
    var id = setInterval(function () {
      if (document.hidden) return;
      var m = meta();
      m.seg = (m.seg || 0) + pas;
      m.min = Math.floor(m.seg / 60);
      desaMeta(m);
    }, pas * 1000);
    return function () { clearInterval(id); };
  }

  /* Temps que un exercici ha estat obert (`tact`, en segons, acumulat de
     totes les visites). És el que permet saber, l'endemà, quin exercici es va
     treballar a la llibreta i es va deixar sense respondre.

     Es compta PEL RELLOTGE (ara − quan es va obrir), no sumant tocs només
     amb la pantalla visible. La primera versió ho feia així i en un mòbil
     no funcionava: qui resol a la llibreta no toca la pantalla, el mòbil
     l'apaga sola al cap de 30 s, la pàgina passa a «amagada» i el comptador
     s'aturava abans d'arribar al llindar. Precisament el cas que es volia
     detectar.

     Perquè una pestanya oblidada no compti hores, cada visita aporta com a
     màxim MAX_VISITA segons. Retorna `desa()`, que la pàgina crida abans de
     decidir res (per no dependre de quan ha saltat l'últim interval: amb la
     pantalla apagada el navegador els congela). */
  var MAX_VISITA = 15 * 60;

  function cronoExercici(full, id) {
    var inici = Date.now(), base = (item(full, id).tact) || 0;
    function desa() {
      var seg = Math.max(0, Math.min(MAX_VISITA, Math.round((Date.now() - inici) / 1000)));
      toca(full, id, function (it) {
        it.tact = base + seg;
        it.tvis = inici + seg * 1000;
      });
    }
    var t = setInterval(desa, 5000);
    if (document.addEventListener) document.addEventListener("visibilitychange", desa);
    if (window.addEventListener) window.addEventListener("pagehide", desa);
    return { desa: desa, para: function () { clearInterval(t); } };
  }

  /* Escriu camps d'un ítem SENSE tocar `ts`. `ts` vol dir «l'última vegada
     que va canviar el registre» i el fa servir la migració de dates; el
     rellotge, que escriu cada pocs segons, no l'ha de moure. */
  function toca(full, id, fn) {
    var p = llegeix(full);
    var it = p.items[id] = Object.assign({}, p.items[id]);
    fn(it);
    desa(full, p);
    return it;
  }

  /* ── exercicis «a mitges» ────────────────────────────────────────────────

     El cas que es vol resoldre: l'alumne obre un exercici, el resol a la
     llibreta i passa al següent sense mostrar les opcions o sense confirmar
     la resposta. L'endemà no sap quin era. L'estat "vist" no ho pot dir: es
     posa només per carregar la pàgina, i qui passa deu exercicis amb
     «Següent» en té deu de "vistos".

     Un exercici és A MITGES si encara no té cap desenllaç i hi ha senyal de
     feina de debò:
       · ha estat obert LLINDAR segons o més (`tact`), encara que la
         pantalla s'hagi apagat mentre l'alumne escrivia (vegeu `cronoExercici`);
       · s'hi ha obert alguna pista (`npis`);
       · s'han mostrat les opcions (`opc`).
     També ho és el que es va fallar al primer intent i encara té el segon:
     el registre ja hi diu "fallat", però l'alumne hi pot tornar.

     Res d'això entra al codi de verificació (codi.js només llegeix `estat`,
     `npis`, `tf`, `rep`, `errs` i `imp`): són ajudes per a l'alumne, no
     dades per al professorat.

     L'alumne pot treure un exercici de la llista («No el vull fer ara»):
     es desa `amd` (quan) i `amt` (el temps que hi portava). Hi torna a sortir
     només si després hi torna a treballar LLINDAR segons més. */
  var LLINDAR = 40;

  function esAMitges(it) {
    if (!it || it.tancat) return false;
    if (it.amd && (it.tact || 0) - (it.amt || 0) < LLINDAR) return false;
    var e = it.estat || "";
    if (e === "fallat") return (it.nint || 0) < 2;
    if (e && e !== "vist") return false;
    return (it.tact || 0) >= LLINDAR || (it.npis || 0) > 0 || !!it.opc;
  }

  /* Ids que existeixen de debò al banc actual. Si un exercici s'ha retirat,
     el registre antic el pot portar encara, i no s'ha d'oferir un enllaç que
     porta a «aquest exercici no és en aquest full». */
  function existeix(full, id) {
    var t = window.RE_TAULES && window.RE_TAULES.fulls
          && (window.RE_TAULES.fulls[full] || window.RE_TAULES.fulls[String(full)]);
    if (window.FULL && +window.FULL.full === +full && window.FULL.items) {
      return window.FULL.items.some(function (i) { return i.id === id; });
    }
    return t && t.items ? t.items.indexOf(id) >= 0 : true;
  }

  function quanVa(it) { return it.tvis || it.ts || 0; }

  /* Els exercicis a mitges d'un full (o de tots, sense `full`), del més
     recent al més antic. */
  function aMitges(full) {
    var fulls = full ? [full] : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var r = [];
    fulls.forEach(function (n) {
      var p = llegeix(n).items;
      Object.keys(p).forEach(function (id) {
        if (esAMitges(p[id]) && existeix(n, id)) {
          r.push({ full: n, id: id, it: p[id], quan: quanVa(p[id]) });
        }
      });
    });
    return r.sort(function (a, b) { return b.quan - a.quan; });
  }

  /* Els que només s'han obert (cap senyal de feina). Serveix per al
     desplegable «oberts sense respondre» de la pàgina del full: és l'única
     manera de trobar els que es van deixar abans que existís `tact`. */
  function nomesOberts(full) {
    var p = llegeix(full).items, r = [];
    Object.keys(p).forEach(function (id) {
      var it = p[id];
      if (it.estat === "vist" && !it.tancat && !esAMitges(it) && existeix(full, id)) {
        r.push({ full: full, id: id, it: it, quan: quanVa(it) });
      }
    });
    return r.sort(function (a, b) { return b.quan - a.quan; });
  }

  function visita(full, id) {
    return toca(full, id, function (it) {
      if (!it.estat) { it.estat = "vist"; it.ts = Date.now(); }
      it.tvis = Date.now();
    });
  }

  function marcaOpcions(full, id) {
    toca(full, id, function (it) { it.opc = 1; it.tvis = Date.now(); });
  }

  function descartaAMitges(full, id) {
    toca(full, id, function (it) { it.amd = Date.now(); it.amt = it.tact || 0; });
  }

  /* El «Desfés» de la llista: un toc de més en una tauleta no ha de fer
     desaparèixer l'exercici que es buscava. */
  function recuperaAMitges(full, id) {
    toca(full, id, function (it) { delete it.amd; delete it.amt; });
  }

  function esborra(full) {
    sumaMeta("esb");
    desa(full, { v: 1, items: {} });
  }

  /* Desxifra el bloc de solucions (base64 de JSON en UTF-8).
     És un dissuasiu contra el «veure codi font», no una mesura de seguretat. */
  function clau(item) {
    var bin = atob(item.clau), b = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) b[i] = bin.charCodeAt(i);
    return JSON.parse(new TextDecoder().decode(b));
  }

  var ETIQ = {
    net: "encertat a la primera",
    pista: "encertat amb pista",
    segon: "encertat al segon intent",
    fallat: "fallat",
    vist: "només obert",
    amitges: "a mitges, sense respondre",
    "": "per fer"
  };

  /* Pinta el mapa de llacunes d'UN full dins de `contenidor`, agrupat per bloc.
     `dades` és l'objecte window.FULL sencer (calen dades.full i dades.blocs). */
  function mapa(contenidor, dades, onClic) {
    var p = llegeix(dades.full).items;
    contenidor.innerHTML = "";
    dades.blocs.forEach(function (bloc) {
      var grup = document.createElement("div");
      grup.className = "grup";
      grup.innerHTML = "<h3>" + bloc.titol + " · " + bloc.items.length + "</h3>";
      var fila = document.createElement("div");
      fila.className = "mapa";
      bloc.items.forEach(function (id) {
        var e = (p[id] || {}).estat || "";
        /* Un "vist" amb feina a dins no és el mateix que un "vist" de passada:
           té casella pròpia (½), perquè és el que l'alumne busca l'endemà. */
        var clase = e === "vist" && esAMitges(p[id]) ? "vist mig" : e;
        var txt = ETIQ[clase === "vist mig" ? "amitges" : e];
        var b = document.createElement("button");
        b.className = "cel " + clase;
        b.type = "button";
        b.title = id + " — " + txt;
        b.setAttribute("aria-label", "Pregunta " + id + ": " + txt);
        b.onclick = function () { onClic(id); };
        fila.appendChild(b);
      });
      grup.appendChild(fila);
      contenidor.appendChild(grup);
    });
  }

  function mat(node) {
    if (window.renderMathInElement) {
      try {
        renderMathInElement(node, {
          delimiters: [{ left: "$", right: "$", display: false }],
          throwOnError: false
        });
      } catch (e) { /* KaTeX no ha carregat (sense connexió): es queda el LaTeX en cru, llegible igualment */ }
    }
  }
  window.addEventListener("load", function () { mat(document.body); });

  return {
    llegeix: llegeix, desa: desa, apunta: apunta, apuntaError: apuntaError,
    estat: estat, esborra: esborra, item: item,
    intent: intent, pista: pista, estatDe: estatDe,
    meta: meta, desaMeta: desaMeta, sumaMeta: sumaMeta, rellotge: rellotge,
    clau: clau, mapa: mapa, mat: mat, ETIQ: ETIQ,
    LLINDAR: LLINDAR, MAX_VISITA: MAX_VISITA, cronoExercici: cronoExercici, esAMitges: esAMitges, aMitges: aMitges, nomesOberts: nomesOberts,
    visita: visita, marcaOpcions: marcaOpcions,
    descartaAMitges: descartaAMitges, recuperaAMitges: recuperaAMitges
  };
})();
