// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  modules: ['@nuxtjs/i18n', 'nuxt-lucide-icons'],
  css: ['~/assets/css/main.css'],

  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ar', name: 'Arabic', file: 'ar.json' },
    ],
    detectBrowserLanguage: false,
  },
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/LogoTap.svg',
        },
      ],
      title: 'Distretto Design',
      meta: [
        {
          name: 'description',
          content:
            'Distretto Design creates stylish interiors and offers luxury furniture from top European brands. Since 2015, we have been designing unique spaces with elegance and creativity.',
        },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        {
          property: 'og:image',
          content: 'https://distrettodesign.com/LogoTap.png',
        },
        {
          name: 'twitter:image',
          content: 'https://distrettodesign.com/LogoTap.png',
        },
      ],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
