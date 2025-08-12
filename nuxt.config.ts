// https://nuxt.com/docs/api/configuration/nuxt-configt
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  runtimeConfig: {
    easyDonateApiKey: process.env.EASY_DONATE_API_KEY, // только на сервере
  },

  tailwindcss: {
    viewer: { endpoint: "/_tailwind", exportViewer: true },
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.ts", // путь к твоему конфигу
  },

  modules: [
    "@nuxt/devtools",
    "@formkit/auto-animate",
    "@nuxtjs/i18n",
    "@nuxt/ui-pro",
    "@nuxt/image",
    "@nuxtjs/robots",
    "@nuxtjs/tailwindcss",
  ],
});
