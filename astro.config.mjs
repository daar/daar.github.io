import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://daar.github.io/',
	integrations: [mdx(), sitemap(), tailwind()],
    i18n: {
        defaultLocale: "nl",
        locales: ["es", "en", "nl"],
      }    
});
