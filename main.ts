import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "With this ring buffer, I thee wed \u2014 in sickness, in health, and in every forced restart.";

// Gate: the scorer accepts 1 to 160 characters.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry is ${LINE.length} characters, outside the 1-160 gate`);
}

const here = dirname(fileURLToPath(import.meta.url));
const targets = [join(here, "entry.txt")];
if (existsSync("/output")) {
  targets.push("/output/entry.txt");
}

for (const target of targets) {
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, LINE, "utf8");
}
