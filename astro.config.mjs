// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sofacleaninglondon.co',
  trailingSlash: 'always',
  // Inlining the ~44kB stylesheet was measurably worse: it pushed the homepage
  // HTML to 144kB and cost 3 Lighthouse points on a simulated slow connection.
  // A separate, cacheable stylesheet wins.
  build: { format: 'directory', inlineStylesheets: 'auto' },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      filter: (page) => !/\/(privacy|terms|thank-you)\//.test(page),
      serialize(item) {
        const p = new URL(item.url).pathname;
        if (p === '/') item.priority = 1.0;
        else if (/^\/(services|areas)\/$/.test(p)) item.priority = 0.9;
        else if (/^\/services\//.test(p)) item.priority = 0.8;
        else if (/^\/areas\//.test(p)) item.priority = 0.7;
        else if (/^\/guides\//.test(p)) item.priority = 0.6;
        else item.priority = 0.7;
        return item;
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  image: { responsiveStyles: true },
});
