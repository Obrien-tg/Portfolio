import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://obrien-tg.netlify.app',
  integrations: [tailwind(), sitemap({ filter: (page) => !page.includes('/contact/thanks') && !page.includes('/404') })],
  output: 'static',
});
