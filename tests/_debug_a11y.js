const path = require("path"); const { JSDOM } = require("jsdom");
const ARREL = path.join(__dirname, "..");
const espera = ms => new Promise(r => setTimeout(r, ms));
const w_ = m => console.log("::warning::" + m);
(async () => {
  w_(`node ${process.version} · jsdom ${require("jsdom/package.json").version} · TZ ${Intl.DateTimeFormat().resolvedOptions().timeZone}`);
  const dom = await JSDOM.fromFile(path.join(ARREL, "practica.html"), { runScripts: "dangerously", resources: "usable", url: "file://" + path.join(ARREL, "practica.html") + "?full=1", pretendToBeVisual: false });
  await espera(1500);
  const w = dom.window, d = w.document, c = d.getElementById("opcions");
  const idx = () => Array.prototype.indexOf.call(c.children, d.activeElement);
  w_(`opcions: ${c.children.length} · ${[...c.children].map(b => b.tagName + "/ti" + b.tabIndex + (b.disabled ? "/dis" : "")).join(" ")} · hasFocus ${d.hasFocus()}`);
  c.children[0].focus(); w_(`després de focus(): activeElement=${d.activeElement.tagName}#${d.activeElement.id} idx=${idx()}`);
  c.dispatchEvent(new w.KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true })); w_(`després d'ArrowDown: idx=${idx()}`);
  c.children[0].focus(); c.dispatchEvent(new w.KeyboardEvent("keydown", { key: "End", bubbles: true })); w_(`després d'End: idx=${idx()}`);
  w_(`enunciat: ${(d.getElementById("enunciat") || {}).textContent?.slice(0, 80)}`);
  w.close();
})().catch(e => w_("ERROR " + e.message));
