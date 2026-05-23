// @lovable.dev/vite-tanstack-config bundles tanstackStart + cloudflare plugins.
// For GitHub Pages we disable Cloudflare and enable static prerendering so the
// build emits plain HTML/JS into .output/public.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
    pages: [
      { path: "/" },
      { path: "/about" },
      { path: "/services" },
      { path: "/contact" },
    ],
  },
});
