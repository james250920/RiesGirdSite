// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@ant-design-vue/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/tailwindcss'
  ]
})