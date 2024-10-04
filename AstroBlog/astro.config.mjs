import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://astro-blog-zeta-gules.vercel.app/",
  integrations: [preact()]
});