import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Without this, opennextjs-cloudflare's internal Next.js build step
  // defaults to running `npm run build`, which is this same command —
  // causing infinite recursion. Point it at the plain Next.js build instead.
  buildCommand: "npm run build:next",
});
