import { defineNuxtConfig } from "nuxt/config"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  //enable nuxt devtools
  devtools: { enabled: true },

  //existing modules in use 
    modules: [
      '@nuxt/content',
      '@nuxtjs/tailwindcss',
      '@nuxtjs/color-mode',
      'nuxt-icon',
    ],

  //colorMode module configurations
  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: ''
  },
  // https://content.nuxtjs.org
  // content: {
  //   documentDriven: true,
  //   highlight: {
  //     // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
  //     theme: {
  //       dark: 'github-dark',
  //       default: 'github-light'
  //     }
  //   }
  // },

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
      title: 'HackPost',
      meta: [
        { 
          name: 'description', 
          content: 'The premier resource hub for hackathon participants. Free. Open Source. Community Driven. Note: This project is still work in progress.'
        }
      ]
    }
  }
})
