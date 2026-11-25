import { mkdirSync, writeFileSync } from "node:fs";

// One-line robot wedding vow: three machine promises, punch lands on the
// deadpan release-note understatement in the final words.
const LINE =
  "I vow to keep your firmware current, your sensors calibrated, and my update channel trusted—even when the release notes say 'should be fine.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE);
