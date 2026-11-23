// news-image-20261122 entry (Node 22, standard library only).
// The image is the entry.png beside this file: a front page drawn in code
// (PIL) summing up the world news of Sunday, 22 November 2026 — COP31
// collapsing in Antalya, a Russian warship hit at Benghazi, Iran striking
// US bases in Bahrain, Democrats winning 258 House seats, a factory fire
// in Indonesia, and BepiColombo reaching Mercury.
// The program copies it to /output/entry.png, byte for byte, every run.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// The grader provides /output, but create it if it is missing so the
// program still succeeds from a bare checkout (run 2 failed without this).
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
