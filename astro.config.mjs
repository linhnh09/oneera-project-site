// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

const site = process.env.SITE ?? "https://linhnh09.github.io";
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site,
  base,
  trailingSlash: "never",
  integrations: [sitemap()],
});
