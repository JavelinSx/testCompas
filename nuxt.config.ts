export default defineNuxtConfig({
  ssr: false,
  css: ['@/styles/global.css'],
  modules: ['nuxt-swiper'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/variables.scss";`,
        },
      },
    },
  },
});
