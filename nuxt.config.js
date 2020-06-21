import head from './config/head'
import scrollBehavior from './router.scrollBehavior.js'
require('dotenv').config()

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head,

  generate: {
    fallback: true
  },

  loading: { color: '#fff' },

  css: ['@/assets/scss/main.scss'],

  plugins: [
    '~plugins/vue-vee-validate.js',
    '~plugins/vue2-google-maps.js',
    '~/plugins/vue-click-outside.js',
    '~/plugins/vue-youtube.js',
    { src: '~/plugins/vue-infinite-scroll', ssr: false }
  ],

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth',
    '@nuxtjs/apollo'
  ],

  router: {
    // middleware: ['auth'],
    scrollBehavior
  },

  axios: {
    baseURL: process.env.API_URL,
    headers: {
      common: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: `${process.env.API_URL}graphql`
      }
    }
    // Doesn't work. Here: https://github.com/apollographql/apollo-client/issues/2555
    // defaultOptions: {
    //   $query: { fetchPolicy: 'no-cache', errorPolicy: 'all' },
    //   $mutate: { errorPolicy: 'all' }
    // }
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/c/login',
            method: 'post',
            propertyName: 'access_token'
          },
          logout: { url: '/api/c/logout', method: 'post' },
          user: { url: '/api/c/me', method: 'get', propertyName: 'data' }
        }
      }
    },
    redirect: {
      logout: '/login'
    }
  },

  build: {
    extend(config, ctx) {},
    vendor: ['vue2-google-maps']
  }
}
