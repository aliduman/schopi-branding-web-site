#!/usr/bin/env node
// OPENNEXT_CLI_WRAPPER
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const cli = join(root, "node_modules/@opennextjs/cloudflare/dist/cli/index.js");
const cliSource = existsSync(cli) ? readFileSync(cli, "utf8") : "";
if (!cliSource || cliSource.includes("OPENNEXT_CLI_WRAPPER")) {
	console.error(
		"OpenNext CLI is missing or was overwritten. Reinstall @opennextjs/cloudflare.",
	);
	process.exit(1);
}
const args = process.argv.slice(2);
const command = args[0];
const needsBuild = command === "deploy" || command === "upload" || command === "preview";
const buildIsReady =
  existsSync(join(root, ".open-next/worker.js")) &&
  existsSync(join(root, ".open-next/.build/open-next.config.edge.mjs"));

if (needsBuild && !buildIsReady) {
  const build = spawnSync(process.execPath, [cli, "build"], {
    cwd: root,
    stdio: ["ignore", "inherit", "inherit"],
    env: process.env,
  });
  if (build.status !== 0) {
    process.exit(build.status ?? 1);
  }
}

const result = spawnSync(process.execPath, [cli, ...args], {
  cwd: root,
  stdio: ["ignore", "inherit", "inherit"],
  env: process.env,
});
process.exit(result.status ?? 1);
