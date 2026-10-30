import { chmodSync, copyFileSync, lstatSync, unlinkSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const cli = join(root, "node_modules/@opennextjs/cloudflare/dist/cli/index.js");
const bin = join(root, "node_modules/.bin/opennextjs-cloudflare");

try {
	lstatSync(cli);
} catch (error) {
	if (error && error.code === "ENOENT") {
		process.exit(0);
	}
	throw error;
}

// npm links this name to the real CLI. copyFile follows that symlink and
// would overwrite dist/cli/index.js, so remove the link first.
try {
	lstatSync(bin);
	unlinkSync(bin);
} catch (error) {
	if (!error || error.code !== "ENOENT") {
		throw error;
	}
}

copyFileSync(join(root, "scripts/opennext-cli.mjs"), bin);
chmodSync(bin, 0o755);
