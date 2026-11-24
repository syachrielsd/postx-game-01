// main.ts — entrypoint for the post-x-the-agent-builds-a-game entry.
// Copies POST.json from the bot directory to the output directory.
// Node 22, standard library only, no network.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, "POST.json");
const target = join(outputDir, "POST.json");

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`main.ts: failed to copy ${source} to ${target}: ${err}`);
  process.exit(1);
}

console.log(`main.ts: copied ${source} to ${target}`);
