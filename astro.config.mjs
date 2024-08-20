import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://daar.github.io/',
	integrations: [mdx(), sitemap()],
    i18n: {
        defaultLocale: "nl",
        locales: ["es", "en", "nl"],
      }    
});
