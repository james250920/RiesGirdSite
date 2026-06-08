// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css',
          crossorigin: 'anonymous'
        }
      ]
    }
  },
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