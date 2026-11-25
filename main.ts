// Proud Family Scene — make.fun entry for
// "Make the AI Judge Feel Proud: A Family Scene"
// (u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)
//
// Writes one warm, funny, heartfelt family scene — a single line, no
// trailing newline — to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Erasable TypeScript only; runs under Node 22 with no network access.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SCENE =
  "Every Sunday, Dad sets a place for Grandma, then eats her dessert 'so it doesn't go to waste' — and Mum just smiles, because the photo on the wall is the only one of us still laughing at him.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SCENE, "utf8");
