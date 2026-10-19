import { readFileSync } from "node:fs";

const help = readFileSync(new URL("../HELP.md", import.meta.url), "utf8");
const required = [
  "Boot",
  "OPEN THE BOX",
  "Biscuit Compiler",
  "recompile",
  "lightbox",
  "Coming Soon",
  "lib/config.ts",
  "tokenConfig",
  "contractAddress",
  "filters",
  "prefers-reduced-motion",
  "PAGES_BASE_PATH",
  "gallery/01.png",
  "Ethereum",
  "npm run build"
];

const missing = required.filter((phrase) => !help.includes(phrase));
if (missing.length) {
  console.error("HELP.md is missing:");
  for (const phrase of missing) console.error(" - " + phrase);
  process.exit(1);
}
console.log("HELP.md covers " + required.length + " required topics.");
