import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
	// R2 incremental cache is optional.
	// See https://opennext.js.org/cloudflare/caching
});
