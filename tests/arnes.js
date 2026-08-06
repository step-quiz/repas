/* tests/arnes.js — l'arnès de proves més petit que fa la feina.

   No es fa servir cap biblioteca de proves a propòsit: el projecte no té
   dependències i afegir-ne una perquè `assert.equal` sigui més bonic seria
   canviar una propietat que val la pena per comoditat. Node ja porta
   `assert`; això només hi posa el compte i els colors. */
"use strict";
const assert = require("assert");

let totals = 0, fallades = 0, grup = "";
const VERD = "\x1b[32m", VERMELL = "\x1b[31m", GRIS = "\x1b[90m", ZERO = "\x1b[0m";

function seccio(nom) {
  grup = nom;
  console.log("\n" + GRIS + nom + ZERO);
}

function prova(nom, fn) {
  totals++;
  try {
    fn();
    console.log("  " + VERD + "✓" + ZERO + " " + nom);
  } catch (e) {
    fallades++;
    console.log("  " + VERMELL + "✗ " + nom + ZERO);
    console.log("      " + String(e.message).split("\n").slice(0, 4).join("\n      "));
  }
}

function resum() {
  const l = totals + " comprovacions, " + fallades + " fallades";
  console.log("\n" + (fallades ? VERMELL + "✗ " : VERD + "✓ ") + l + ZERO);
  return fallades === 0;
}

module.exports = { assert, seccio, prova, resum, get fallades() { return fallades; } };
