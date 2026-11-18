// news-image-20261117 entry: "The World in One Day" — Tuesday 17 November 2026.
//
// The repository holds the finished front-page image in entry.png. This
// program's whole job is to place those exact bytes at /output/entry.png,
// which is the one file the grader reads and the judge sees. It runs with
// no network and no dependencies (Node 22, standard library only), and it
// is deterministic: the output is a byte-for-byte copy of entry.png.
//
// Locally, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
if (!existsSync(source)) {
  throw new Error('entry.png is missing beside main.ts; nothing to submit');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const target = join(outDir, 'entry.png');
copyFileSync(source, target);
console.log(`wrote ${target} (${statSync(target).size} bytes)`);
