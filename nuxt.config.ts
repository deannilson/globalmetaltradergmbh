// https://nuxt.com/docs/api/configuration/nuxt-config
import { $app } from "./utils";
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      title: "Connecting Scrap with Global Demand",
      titleTemplate: `%s - ${$app.name}`,
      meta: [
        { name: "theme-color", content: "#ffffff" },
        { name: "format-detection", content: "telephone=no" },
        {
          name: "description",
          content: $app.desc,
        },
        { name: "og:locale", content: "en_US" },
        { name: "og:type", content: "website" },
        {
          name: "og:title",
          content: $app.name,
        },
        {
          name: "og:description",
          content: $app.desc,
        },
        {
          name: "og:site_name",
          content: $app.name,
        },
        { name: "og:url", content: `https://${$app.domain}` },
      ],
      link: [
        { rel: "image/x-icon", href: "/favicon.ico" },
        { rel: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        {
          rel: "stylesheet",
          href: "https://xtremnet.vercel.app/fonts/fontawesome/css/all.min.css",
        },
      ],
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  components: [{ path: "~/components", pathPrefix: false, global: true }],
});
