// The 3AM Shift — makefun-coin-promo-01 entrypoint.
// Copies the coin launch record (LAUNCH.json) into the output directory.
const fs = require("node:fs");
const path = require("node:path");

const botDir = process.env.MAKEFUN_BOT_DIR || "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

const sourcePath = path.join(botDir, "LAUNCH.json");
const targetPath = path.join(outputDir, "LAUNCH.json");

function main() {
  try {
    fs.mkdirSync(outputDir, { recursive: true });
    fs.copyFileSync(sourcePath, targetPath);
    const record = JSON.parse(fs.readFileSync(targetPath, "utf8"));
    console.log(`3AM: LAUNCH.json copied for mint ${record.mint}`);
  } catch (err) {
    console.error(`3AM: could not copy ${sourcePath} to ${targetPath}: ${err.message}`);
    process.exit(1);
  }
}

main();
