// https://nuxt.com/docs/api/configuration/nuxt-configt
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ["~/assets/css/input.css"],

  modules: [
    "@nuxt/devtools",
    "@formkit/auto-animate",
    "@nuxtjs/i18n",
    "@nuxt/ui-pro",
    "@nuxt/image",
    "@nuxtjs/robots",
    "@tailwindcss/postcss",
    "@tailwindcss/vite",
  ],
});