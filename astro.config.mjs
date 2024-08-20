import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: "nl",
        locales: ["es", "en", "nl"],
      }    
});
