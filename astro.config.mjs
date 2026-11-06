import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://valpine.net',
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
  markdown: {
    syntaxHighlight: false,
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: ['400', '500'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-plex-mono',
      weights: ['400'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self'",
        "font-src 'self'",

        "base-uri 'none'",
        "object-src 'none'",
        'upgrade-insecure-requests',
      ],
    },
  },
});
