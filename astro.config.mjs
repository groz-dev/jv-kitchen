import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// For GitHub Pages:
// - set `site` to your eventual Pages URL
// - set `base` to your repo name (or "" if using a custom domain/root)
export default defineConfig({
  site: "https://groz-dev.github.io",
  base: "/jv-kitchen",
  integrations: [tailwind()],
});

