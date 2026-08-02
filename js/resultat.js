/* resultat.js — controlador de resultat.html: llegeix el diagnòstic desat,
   el compara amb l'autopercepció i mostra el recorregut recomanat. */
(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };

  var dades = RE_DIAG.llegeix();
  if (!dades) {
    $("#main").innerHTML =
      '<p class="cimera">Repàs per començar 1r de batxillerat</p>' +
      "<h1>Encara no has fet el test</h1>" +
      '<p class="apagat" style="margin:.6rem 0 1.4rem">Fes el test inicial per veure aquí quins blocs et convé repassar primer.</p>' +
      '<a class="btn" href="diagnostic.html">Fer el test inicial</a>';
    return;
  }

  var analisi = RE_DIAG.analitza(dades);
  var recomanats = RE_DIAG.recomanacio(analisi);

  /* ---- resum ---- */
  var totalOk = dades.respostes.filter(function (r) { return r.encert; }).length;
  $("#resum-linia").innerHTML = "<strong>" + totalOk + " de " + dades.respostes.length + "</strong> encertades al test";

  /* ---- desajustos: el que més val la pena que l'alumne vegi ---- */
  var sorpreses = analisi.filter(function (b) { return b.sorpresa; }).slice(0, RE_DIAG.MAX_DESAJUSTOS);
  var falsesAlarmes = analisi.filter(function (b) { return b.falsAlarma; }).slice(0, RE_DIAG.MAX_DESAJUSTOS);
  var contDesajust = $("#desajust");
  if (!sorpreses.length && !falsesAlarmes.length) {
    contDesajust.hidden = true;
  } else {
    var html = "<h2>El que el test diu que no esperaves</h2>";
    sorpreses.forEach(function (b) {
      html += '<div class="errada"><strong>' + b.titol + ':</strong> no l\'havies marcat com un bloc que et costa, ' +
        "però hi has encertat només un " + b.pct + "%. Val la pena que hi paris atenció.</div>";
    });
    falsesAlarmes.forEach(function (b) {
      html += '<div class="errada bona-noticia"><strong>' + b.titol + ':</strong> pensaves que et costaria, ' +
        "però hi has encertat un " + b.pct + "%. El domines més del que creies.</div>";
    });
    contDesajust.innerHTML = html;
  }

  /* ---- taula completa per bloc ---- */
  var contTaula = $("#taula-blocs");
  contTaula.innerHTML = "";
  analisi.forEach(function (b) {
    var el = document.createElement("a");
    el.className = "bloc";
    el.href = "full.html?full=" + b.full + "&bloc=" + encodeURIComponent(b.bloc);
    el.innerHTML =
      '<span class="num">' + b.pct + "%</span>" +
      '<span class="cos"><span class="tit">' + b.titol + '</span>' +
      '<div class="petit apagat">Full ' + b.full + " · " + b.ok + " de " + b.total + " encertades al test" +
        (b.percebut ? " · l'havies marcat com a difícil" : "") + "</div>" +
      '<div class="barra"><i style="width:' + b.pct + '%;background:' +
        (b.pct >= 80 ? "var(--verd)" : b.pct >= 50 ? "var(--ambre)" : "var(--vermell)") + '"></i></div>' +
      "</span>";
    contTaula.appendChild(el);
  });

  /* ---- recorregut recomanat ---- */
  var contReco = $("#recorregut");
  if (!recomanats.length) {
    contReco.innerHTML = "<p class='apagat'>Segons el test, dominaves prou bé tots els blocs que hem provat. " +
      "Pots repassar igualment el que vulguis des del llistat de fulls.</p>";
  } else {
    contReco.innerHTML = "";
    recomanats.forEach(function (b, i) {
      var el = document.createElement("a");
      el.className = "bloc";
      el.href = "full.html?full=" + b.full + "&bloc=" + encodeURIComponent(b.bloc);
      el.innerHTML =
        '<span class="num">' + (i + 1) + "</span>" +
        '<span class="cos"><span class="tit">' + b.titol + "</span>" +
        '<div class="petit apagat">' + b.pct + "% al test · Full " + b.full + "</div></span>";
      contReco.appendChild(el);
    });
  }

  $("#refes").onclick = function () {
    if (confirm("Vols refer el test inicial? El resultat anterior s'esborrarà.")) {
      RE_DIAG.esborra();
      location.href = "diagnostic.html";
    }
  };
})();
