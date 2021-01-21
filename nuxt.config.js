import colors from 'vuetify/es5/util/colors'
import webpack from 'webpack'
require('dotenv').config()

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  loadingIndicator: {
    name: 'wandering-cubes',
    color: '#32DE8A',
    background:'linear-gradient(45deg, #343436, #34363d)'
  },
  
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - portfolio',
    title: 'Ryan Kwan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },


  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/css/main.css',
    'csshake'
  ],

  script: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{
    src:"~/plugins/aos",
    ssr:false
  },
  { src: '~plugins/ga.js', mode: 'client' }
  ],

  env: {
    JWT_SECRET: process.env.JWT_SECRET
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  router: {
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/vuetify', { iconfont: 'mdi' }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
  ],


  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    },
    defaultAssets: {
      icons: 'fa' //http://code.meta-platform.com/assets/mdi/preview.html
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        $: 'jquery',
        _: 'lodash'
      })
    ]
  }
}
