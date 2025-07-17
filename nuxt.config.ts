// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  modules: ["@nuxtjs/i18n"],
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  components: [
    "~/components",
    // { path: "~/components/home/", extensions: ["vue"] },
    "~/utils",
  ],
  // i18n: {
  //   strategy: "prefix_except_default",
  //   locales: [
  //     { code: "en", iso: "en-US", name: "English" },
  //     { code: "ar", iso: "ar-EG", name: "Arabic" },
  //   ],
  //   defaultLocale: "en",
  //   vueI18n: "./i18n.config.ts",
  // },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/LogoTap.svg",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
        },
      ],
      title: "distrettodesign",
      meta: [
        {
          name: "description",
          content: "distrettodesign",
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
