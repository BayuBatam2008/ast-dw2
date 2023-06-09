import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  site: 'https://dw2.papale.my.id',
  // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  // Generate sitemap (set to "false" to disable)
  integrations: [mdx(), image(), lit()], // Add renderers to the config
  // This is for the astro-icon package. You can find more about the package here: https://www.npmjs.com/package/astro-icon
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
