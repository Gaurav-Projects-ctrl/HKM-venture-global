// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Pages kept out of the sitemap: the 404 page and the Google Ads landing page (noindex)
const notInSitemap = ['/404', '/pharmaceutical-wholesale'];

// https://astro.build/config
export default defineConfig({
  site: 'https://hkmventureglobal.com',
  integrations: [
    sitemap({
      filter: (page) => !notInSitemap.some((p) => new URL(page).pathname.replace(/\/$/, '') === p),
    }),
  ],
});
