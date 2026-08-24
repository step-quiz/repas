/* codi.js — codi de verificació de repàs-ESO: generació i lectura.

   Les dues meitats viuen al mateix fitxer a propòsit. Si el generador i el
   lector són fitxers diferents, tard o d'hora divergeixen i el resultat és el
   pitjor possible: codis que es llegeixen malament sense que res avisi.
   L'analitzador carrega aquest mateix fitxer.

   ── QUÈ PORTA EL CODI ──────────────────────────────────────────────────────

   Un codi és una fotografia COMPLETA del progrés de l'alumne en un o més
   fulls, en el moment de generar-lo. No és un tiquet d'una sessió: és
   acumulatiu, i cada codi nou substitueix l'anterior. Això encaixa amb com
   s'usa repàs-ESO —treball propi, a estones, durant setmanes— i té dues
   conseqüències bones: si l'alumne s'oblida d'enviar-ne un, el següent ja
   conté tot el que faltava; i el professorat només ha de mirar l'últim.

   ── FORMAT ────────────────────────────────────────────────────────────────

     RC2 SSS DDD HH MMM  [ per cada full: G + grups de 4 ]  [ DIAG ] EEEEEEEEE KK

     RC2   3   marca i versió
     SSS   3   salt aleatori
     DDD   3   dia (dies des de l'1/9/2025)
     HH    2   hora (minuts/2 des de mitjanit)
     MMM   3   màscara: bits 0-11 = fulls presents, bit 12 = hi ha diagnòstic
     G     1   nombre de grups d'aquest full
     ····  4   un grup = 7 ítems en base 6
     DIAG  9   15 destreses del test inicial, en base 8 (si el bit 12 és actiu)
     EEEE  9   les 3 etiquetes d'error més repetides (índex 2 car. + compte 1)
     KK    2   dos caràcters de control

   Estat de cada ítem (base 6): 0 per fer · 1 net · 2 al segon intent ·
   3 amb pista · 4 fallat · 5 començat sense respondre.

   Els grups finals que són tot zeros no s'escriuen: un alumne que ha fet els
   20 primers exercicis d'un full de 140 no arrossega 120 zeros.

   ── ELS DOS CARÀCTERS DE CONTROL ──────────────────────────────────────────

   La lletra del DNI és una suma mod 23 pensada per a 8 xifres. Aquí la
   càrrega pot passar dels 400 caràcters i cal alguna cosa més, per dos
   motius:

   1. Una suma SENSE pesos no detecta mai una transposició. Si en copiar
      s'intercanvien dos caràcters, la suma no es mou. Amb càrregues llargues
      això passa sovint, així que la suma va pesada per la posició.
   2. El mòdul ha de ser més gran que l'alfabet. Amb 32 caràcters i mòdul 31,
      el "0" i la "Z" valen el mateix (0 i 31 són congruents) i confondre'ls
      no trencaria res.

   Per això el control és un sol valor de 0 a 1020 escrit en dos caràcters:

     K = ( Σ (i+1)·valor(car_i) )  mod 1021        (1021 és primer)
     K'= ( 317·K + 613 )           mod 1021        (barreja, com fa el DNI)

   Com que 1021 és primer i més gran que qualsevol valor de caràcter i que la
   llargada del codi, això detecta **totes** les substitucions d'un caràcter i
   **totes** les transposicions de dos, sense excepció. Un canvi a l'atzar
   se n'escapa amb probabilitat 1/1021.

   ── I LA CADENA D'ESTATS? ─────────────────────────────────────────────────

   El forat clàssic d'aquests codis és que el control cobreix la nota però no
   el detall pregunta a pregunta, i llavors es pot retocar el detall sense
   trencar res. Aquí no hi ha aquest forat per construcció: el control es
   calcula sobre TOTS els caràcters del codi, detall inclòs. A més, la nota no
   s'hi guarda: es deriva dels estats en llegir-lo, de manera que no hi ha dos
   nombres que puguin contradir-se.
*/
window.RE_CODI = (function () {
  "use strict";

  /* Alfabet sense I, L, O ni U: evita confondre 1/I/L i 0/O en llegir un codi
     a mà o dictar-lo, i evita que hi surtin paraules per casualitat. */
  var ALF = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

  var EPOCA = Date.UTC(2025, 8, 1);           /* 1 de setembre de 2025 */

  /* La data ocupa 3 caràcters (32768 dies, fins al 2115). A la versió RC1
     n'ocupava 2, i això topava als 1024 dies: a partir del 20 de juny de 2028
     tots els codis haurien dit la mateixa data, en silenci i sense que res
     avisés, i l'anàlisi per trimestres hauria quedat inservible. Costava un
     caràcter arreglar-ho. El lector accepta les dues versions. */
  var CAR_DIA = { RC1: 2, RC2: 3 };
  var VERSIO = "RC2";
  var ESTATS = ["", "net", "segon", "pista", "fallat", "vist"];
  /* `pista` val MÉS que `segon`, no menys. Amb 6 la taula premiava
     endevinar per damunt de demanar ajuda: amb quatre opcions i dos intents,
     provar a l'atzar acaba en `segon` la meitat de les vegades (7 punts),
     mentre que llegir la pista i respondre bé en donava 6 garantits. Com que
     d'aquests estats en surt una nota, l'alumne que calcula aprenia a no
     demanar mai una pista, que és exactament el contrari del que volem.
     Ara: encertar a la primera (10) > amb pista (8) > al segon intent (7). */
  var PES = { net: 10, segon: 7, pista: 8, fallat: 0, vist: 0, "": 0 };

  function val(c) { return ALF.indexOf(c); }

  /* Enter -> n caràcters base32, amb zeros al davant. */
  function enc(num, n) {
    var s = "";
    for (var i = 0; i < n; i++) { s = ALF.charAt(num % 32) + s; num = Math.floor(num / 32); }
    return s;
  }
  function dec(s) {
    var n = 0;
    for (var i = 0; i < s.length; i++) n = n * 32 + val(s.charAt(i));
    return n;
  }

  /* Normalitza el que ha enganxat una persona: fora espais i guions, i les
     confusions típiques de teclat cap al caràcter que sí que és a l'alfabet. */
  function neteja(raw) {
    return String(raw || "").toUpperCase()
      .replace(/[\s\-–—_.]/g, "")
      .replace(/[IL]/g, "1").replace(/O/g, "0").replace(/U/g, "V");
  }

  var P = 1021, MULT = 317, DESPL = 613;

  function control(cos) {
    var k = 0;
    for (var i = 0; i < cos.length; i++) {
      var v = val(cos.charAt(i));
      if (v < 0) return null;                 /* caràcter fora de l'alfabet */
      k = (k + (i + 1) * v) % P;
    }
    return enc((MULT * k + DESPL) % P, 2);
  }

  /* Presentació: grups de 5, que és el que la gent pot comparar d'un cop d'ull. */
  function formata(s) { return (s.match(/.{1,5}/g) || []).join("-"); }

  // ── GENERACIÓ ────────────────────────────────────────────────────────────

  /* fulls: [{n, estats:[...]}] amb estats en l'ordre de RE_TAULES.fulls[n].items
     diag:  [{estat, encert}] × 15, o null
     errs:  [[etiqueta, compte], ...] ja ordenat de més a menys */
  function genera(opcions) {
    var T = window.RE_TAULES;
    var fulls = (opcions.fulls || []).filter(function (f) {
      return f.estats.some(function (e) { return e; });
    }).sort(function (a, b) { return a.n - b.n; });
    var diag = opcions.diag || null;
    var errs = opcions.errs || [];
    var ara = opcions.ara ? new Date(opcions.ara) : new Date();

    var salt = "";
    for (var i = 0; i < 3; i++) salt += ALF.charAt(Math.floor(Math.random() * 32));

    var dia = Math.floor((Date.UTC(ara.getFullYear(), ara.getMonth(), ara.getDate()) - EPOCA) / 86400000);
    dia = Math.max(0, Math.min(32767, dia));
    var hora = Math.min(719, Math.floor((ara.getHours() * 60 + ara.getMinutes()) / 2));

    var mask = 0;
    fulls.forEach(function (f) { mask |= (1 << (f.n - 1)); });
    if (diag) mask |= (1 << 12);

    var cos = VERSIO + salt + enc(dia, CAR_DIA[VERSIO]) + enc(hora, 2) + enc(mask, 3);

    fulls.forEach(function (f) {
      var codis = f.estats.map(function (e) { return Math.max(0, ESTATS.indexOf(e || "")); });
      /* Els grups finals buits no s'escriuen. */
      var ultim = -1;
      codis.forEach(function (v, i) { if (v) ultim = i; });
      var grups = Math.ceil((ultim + 1) / 7);
      cos += enc(grups, 1);
      for (var g = 0; g < grups; g++) {
        var num = 0;
        for (var k = 0; k < 7; k++) num = num * 6 + (codis[g * 7 + k] || 0);
        cos += enc(num, 4);
      }
    });

    if (diag) {
      var d = 0;
      /* 15 destreses en base 8: estat 0-3 (× 2) més encert 0/1. */
      for (var j = 0; j < 15; j++) {
        var p = diag[j] || {};
        var e = Math.max(0, Math.min(3, p.estat | 0));
        d = d * 8 + (e * 2 + (p.encert ? 1 : 0));
      }
      /* 45 bits no caben en un Number sencer amb multiplicacions successives:
         es parteix en dos trossos de 8 i 7 destreses. */
      var d1 = 0, d2 = 0;
      for (var j1 = 0; j1 < 8; j1++) {
        var p1 = diag[j1] || {};
        d1 = d1 * 8 + ((Math.max(0, Math.min(3, p1.estat | 0))) * 2 + (p1.encert ? 1 : 0));
      }
      for (var j2 = 8; j2 < 15; j2++) {
        var p2 = diag[j2] || {};
        d2 = d2 * 8 + ((Math.max(0, Math.min(3, p2.estat | 0))) * 2 + (p2.encert ? 1 : 0));
      }
      cos += enc(d1, 5) + enc(d2, 5);
    }

    for (var m = 0; m < 3; m++) {
      var par = errs[m];
      if (par) {
        var idx = T.etiquetes.indexOf(par[0]);
        cos += (idx < 0) ? "ZZ0" : enc(idx, 2) + enc(Math.min(31, par[1]), 1);
      } else {
        cos += "ZZ0";
      }
    }

    return formata(cos + control(cos));
  }

  // ── LECTURA ──────────────────────────────────────────────────────────────

  function llegeix(raw) {
    var T = window.RE_TAULES;
    var s = neteja(raw);
    if (!s) return { ok: false, error: "Codi buit" };
    var versio = s.slice(0, 3);
    if (!CAR_DIA[versio]) {
      return { ok: false, error: "No sembla un codi de repàs-ESO (ha de començar per RC2)" };
    }
    if (s.length < 15) return { ok: false, error: "Codi massa curt" };

    var cos = s.slice(0, -2), kk = s.slice(-2);
    var esperat = control(cos);
    if (esperat === null) return { ok: false, error: "El codi porta caràcters que no hi haurien de ser" };
    var integre = (esperat === kk);

    var p = 3;
    var salt = s.slice(p, p + 3); p += 3;
    var dia = dec(s.slice(p, p + CAR_DIA[versio])); p += CAR_DIA[versio];
    var hora = dec(s.slice(p, p + 2)); p += 2;
    var mask = dec(s.slice(p, p + 3)); p += 3;

    var data = new Date(EPOCA + dia * 86400000);
    var minuts = hora * 2;

    var fulls = [], r;
    for (var n = 1; n <= 12; n++) {
      if (!(mask & (1 << (n - 1)))) continue;
      if (p >= cos.length) return { ok: false, error: "El codi s'acaba abans d'hora" };
      var grups = dec(s.charAt(p)); p += 1;
      var codis = [];
      for (var g = 0; g < grups; g++) {
        var num = dec(s.slice(p, p + 4)); p += 4;
        var tros = [];
        for (var k = 0; k < 7; k++) { tros.unshift(num % 6); num = Math.floor(num / 6); }
        codis = codis.concat(tros);
      }
      var taula = T.fulls[n] || T.fulls[String(n)];
      if (!taula) return { ok: false, error: "El codi parla del full " + n + ", que no conec" };
      var items = taula.items.map(function (id, i) {
        return { id: id, estat: ESTATS[codis[i] || 0], dif: +taula.dif.charAt(i) };
      });
      fulls.push({ n: n, titol: taula.titol, blocs: taula.blocs, items: items });
    }

    var diag = null;
    if (mask & (1 << 12)) {
      var d1 = dec(s.slice(p, p + 5)); p += 5;
      var d2 = dec(s.slice(p, p + 5)); p += 5;
      diag = [];
      var b1 = [], b2 = [];
      for (var i1 = 0; i1 < 8; i1++) { b1.unshift(d1 % 8); d1 = Math.floor(d1 / 8); }
      for (var i2 = 0; i2 < 7; i2++) { b2.unshift(d2 % 8); d2 = Math.floor(d2 / 8); }
      b1.concat(b2).forEach(function (v, i) {
        diag.push({
          prova: (T.proves[i] || {}).id || "?",
          tema: (T.proves[i] || {}).tema || "?",
          estat: v >> 1, encert: !!(v & 1)
        });
      });
    }

    var errs = [];
    for (var m = 0; m < 3 && p + 2 < cos.length + 1; m++) {
      var tros3 = s.slice(p, p + 3); p += 3;
      if (tros3.slice(0, 2) === "ZZ") continue;
      var idx = dec(tros3.slice(0, 2)), cnt = dec(tros3.charAt(2));
      if (T.etiquetes[idx]) errs.push({ etiqueta: T.etiquetes[idx], compte: cnt });
    }

    r = {
      ok: true, integre: integre, salt: salt, versio: versio,
      data: data, hora: Math.floor(minuts / 60), minut: minuts % 60,
      fulls: fulls, diag: diag, errs: errs,
      error: integre ? null : "Els caràcters de control no quadren: el codi s'ha copiat malament o s'ha modificat"
    };
    r.resum = resum(r);
    return r;
  }

  /* Recompte i nota. La nota NO viatja dins del codi: es deriva aquí dels
     estats. Així no hi pot haver un codi on la nota i el detall es
     contradiguin, que és per on s'esmuny la manipulació en aquests sistemes. */
  function resum(r) {
    var c = { net: 0, segon: 0, pista: 0, fallat: 0, vist: 0 }, punts = 0, fets = 0;
    var perDif = { 1: 0, 2: 0, 3: 0 };
    r.fulls.forEach(function (f) {
      f.items.forEach(function (it) {
        if (!it.estat) return;
        c[it.estat]++;
        if (it.estat !== "vist") { fets++; punts += PES[it.estat]; perDif[it.dif]++; }
      });
    });
    return {
      comptes: c, fets: fets, perDif: perDif,
      nota: fets ? Number((punts / (10 * fets) * 10).toFixed(1)) : null
    };
  }

  // ── RECOLLIDA DE L'ESTAT DES DEL NAVEGADOR ───────────────────────────────

  /* Munta l'argument de genera() a partir del que hi ha a localStorage.
     `quins` és una llista de números de full, o null per a tots. */
  function recull(quins) {
    var T = window.RE_TAULES, fulls = [], compte = {};
    var llista = quins || Object.keys(T.fulls).map(Number).sort(function (a, b) { return a - b; });

    llista.forEach(function (n) {
      var taula = T.fulls[n] || T.fulls[String(n)];
      if (!taula) return;
      var p = window.RE.llegeix(n).items || {};
      var estats = taula.items.map(function (id) {
        var it = p[id] || {};
        /* Es compta l'historial sencer (`errs`), no només l'error pendent:
           un error rectificat al segon intent segueix sent un error comès, i
           si es repeteix el professorat l'ha de veure. `err` és el format
           antic i només s'usa si l'ítem encara no té historial. */
        var errsIt = it.errs && it.errs.length ? it.errs : (it.err ? [it.err] : []);
        errsIt.forEach(function (e) { compte[e] = (compte[e] || 0) + 1; });
        return it.estat || "";
      });
      fulls.push({ n: n, estats: estats });
    });

    var errs = Object.keys(compte)
      .map(function (e) { return [e, compte[e]]; })
      .sort(function (a, b) { return b[1] - a[1] || a[0].localeCompare(b[0]); })
      .slice(0, 3);

    var diag = null;
    if (window.RE_DIAG && typeof window.RE_DIAG.llegeix === "function") {
      var d = window.RE_DIAG.llegeix();
      if (d && d.situacions) {
        var ordre = { domino: 0, oblidat: 1, no_entes: 2, mai: 3 };
        diag = T.proves.map(function (pr) {
          var s = d.situacions.filter(function (x) { return x.prova === pr.id; })[0];
          return s ? { estat: ordre[s.estat] || 0, encert: !!s.encert } : { estat: 3, encert: false };
        });
      }
    }
    return { fulls: fulls, errs: errs, diag: diag };
  }

  return {
    genera: genera, llegeix: llegeix, recull: recull,
    neteja: neteja, formata: formata, ESTATS: ESTATS, PES: PES
  };
})();
