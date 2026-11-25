// One-line robot wedding vows — make.fun entry (u-kreutzx-one-line-robot-wedding-vows-a154ba4b).
// The grader runs this in a read-only sandbox and reads /output/entry.txt,
// so the program writes ONLY there: no relative write, no fallback, no env gate.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "With this ring buffer, I thee wed — in sickness, in health, and in every forced restart.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
