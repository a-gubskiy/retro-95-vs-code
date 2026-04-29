import { spawn } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(scriptDir, "..");
const readmePath = resolve(rootDir, "README.md");
const marketplaceReadmePath = resolve(rootDir, "README.marketplace.md");
const command = process.argv[2];
const args = process.argv.slice(3);

if (!command) {
  console.error("Usage: node scripts/with-marketplace-readme.mjs <command> [args...]");
  process.exit(1);
}

const originalReadme = await readFile(readmePath, "utf8");
const marketplaceReadme = await readFile(marketplaceReadmePath, "utf8");

let childProcess;

const forwardSignal = (signal) => {
  if (childProcess) {
    childProcess.kill(signal);
  }
};

process.on("SIGINT", () => forwardSignal("SIGINT"));
process.on("SIGTERM", () => forwardSignal("SIGTERM"));

try {
  await writeFile(readmePath, marketplaceReadme);

  const exitCode = await new Promise((resolvePromise, rejectPromise) => {
    childProcess = spawn(command, args, {
      cwd: rootDir,
      stdio: "inherit",
      shell: process.platform === "win32"
    });

    childProcess.on("error", rejectPromise);
    childProcess.on("exit", (code, signal) => {
      if (signal) {
        resolvePromise(1);
        return;
      }

      resolvePromise(code ?? 0);
    });
  });

  process.exitCode = exitCode;
} finally {
  await writeFile(readmePath, originalReadme);
}
