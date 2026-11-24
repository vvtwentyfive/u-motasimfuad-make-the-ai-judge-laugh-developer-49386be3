import { writeFileSync, mkdirSync } from "node:fs";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, "Prod isn't broken — my 2 a.m. 'temporary' fix just passed its probation and is now permanent infrastructure.");
