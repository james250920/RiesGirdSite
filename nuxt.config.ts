export default defineNuxtConfig({

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@ant-design-vue/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/tailwindcss'
  ],
  googleFonts: {
    families: {
      'Bricolage Grotesque': [400, 700],
      'Raleway': [300, 400, 600],
    },
    display: 'swap',
    download: true,
  },
  css: ['./app/assets/css/main.css'],
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
})