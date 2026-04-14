import { rmSync } from "node:fs";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, "..");
const nextBin = path.join(projectRoot, "node_modules", "next", "dist", "bin", "next");
const forwardedArgs = process.argv.slice(2);
const hasBundlerFlag = forwardedArgs.some(
  (arg) => arg === "--webpack" || arg === "--turbo" || arg === "--turbopack"
);

for (const dir of [".next", ".next-copy"]) {
  rmSync(path.join(projectRoot, dir), { recursive: true, force: true });
}

const args = [
  "dev",
  ...(hasBundlerFlag ? [] : ["--webpack"]),
  projectRoot,
  ...forwardedArgs,
];

const child = spawn(process.execPath, [nextBin, ...args], {
  cwd: projectRoot,
  stdio: "inherit",
  env: {
    ...process.env,
    NEXT_PRIVATE_DEV_DIR: projectRoot,
  },
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
