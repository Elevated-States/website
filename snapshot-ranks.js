#!/usr/bin/env node
/* Rank-snapshot recorder for the Elevated States Atlas.
   Reads atlas-data.js, computes each state's openness rank, and appends a
   dated snapshot to rank-snapshots.json. Run monthly (via the scheduler).
   The site can diff the latest snapshot against an older one to show
   "climbed N spots" and to crown the annual Most Elevated State. */
const fs = require("fs");
const path = require("path");
const DIR = __dirname;

// --- load STATES from atlas-data.js without its module.exports tail ---
let code = fs.readFileSync(path.join(DIR, "atlas-data.js"), "utf8")
  .replace(/const\s+STATES\s*=/, "global.STATES=")
  .replace(/if\s*\(typeof module[^\n]*/, "");
eval(code);
const S = global.STATES, KS = Object.keys(S);

// --- competition ranking by openness (o); #1 = most open ---
const sorted = KS.slice().sort((a, b) => S[b].o - S[a].o);
const ranks = {}, openness = {};
let rank = 0, prev = null;
sorted.forEach((k, i) => {
  if (S[k].o !== prev) { rank = i + 1; prev = S[k].o; }
  ranks[k] = rank; openness[k] = S[k].o;
});

const now = new Date();
const label = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0");

const FILE = path.join(DIR, "rank-snapshots.json");
let snaps = [];
try { snaps = JSON.parse(fs.readFileSync(FILE, "utf8")); } catch (e) {}

const existing = snaps.findIndex(s => s.month === label);
const entry = { month: label, taken: now.toISOString().slice(0, 10), ranks, openness };
if (existing >= 0) snaps[existing] = entry; else snaps.push(entry);
snaps.sort((a, b) => a.month.localeCompare(b.month));

fs.writeFileSync(FILE, JSON.stringify(snaps, null, 0));
console.log("snapshot saved:", label, "| states:", KS.length, "| total snapshots:", snaps.length);

// --- if we have 2+ snapshots, report the biggest climbers since the earliest ---
if (snaps.length >= 2) {
  const base = snaps[0].ranks, cur = ranks;
  const moves = KS.filter(k => base[k] != null)
    .map(k => ({ k, delta: base[k] - cur[k] }))   // positive = climbed
    .sort((a, b) => b.delta - a.delta);
  console.log("Top climbers since " + snaps[0].month + ":",
    moves.slice(0, 5).map(m => m.k + " (" + (m.delta >= 0 ? "+" : "") + m.delta + ")").join(", "));
}
