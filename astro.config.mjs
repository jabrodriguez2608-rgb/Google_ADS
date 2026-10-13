import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { isProduction } from "./src/lib/publication.ts";
export default defineConfig({
  output: "static",
  integrations: [react()],
  vite: { plugins: [tailwindcss()], define: { "import.meta.env.PUBLIC_INDEXABLE": JSON.stringify(isProduction(process.env)) } },
  devToolbar: { enabled: false },
});
