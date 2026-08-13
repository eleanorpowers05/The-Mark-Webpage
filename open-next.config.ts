import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig();

// defineCloudflareConfig() only forwards a fixed whitelist of options and
// silently drops anything else passed to it (including buildCommand), so
// buildCommand has to be set on its returned object directly. Without this,
// opennextjs-cloudflare's internal Next.js build step defaults to running
// `npm run build`, which is this same command — causing infinite recursion.
config.buildCommand = "npm run build:next";

export default config;
