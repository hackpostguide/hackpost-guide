import { defineNuxtConfig } from "nuxt/config"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  //enable nuxt devtools
  devtools: { enabled: true },

  //existing modules in use 
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxt/content',
  ],

  //colorMode module configurations
  colorMode: {
    classSuffix: ''
  },

  //tailwind css module configurations
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },

  //app metadata
  app: {
    head: {
      title: 'ImaginAI',
      meta: [
        { 
          name: 'description', 
          content: 'Coolest website ever'
        }
      ]
    }
  }
})
