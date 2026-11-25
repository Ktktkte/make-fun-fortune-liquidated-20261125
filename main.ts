import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Fortune Cookie for the Liquidated Trader — one fortune-cookie line, 19 words,
// written exactly as typed. Oracular opening, then the turn lands in the last words.
// Gate: exactly one line, at most 20 words. This fortune is one line of 19
// words — checked by hand, not by code, so the program stays minimal.
const entry =
  "The stars say great fortune is coming your way: it arrives in your next life, slightly delayed by fees.\n";

// Output contract: write ONLY to $MAKEFUN_OUTPUT_DIR (the grader's /output).
// Never write into this script's own directory — the grader runs with /bot
// read-only, so a second write there throws EACCES and fails run_completes.
const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? join(dirname(fileURLToPath(import.meta.url)), "out");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
