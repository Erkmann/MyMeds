export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MyMeds',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    //firebase
    '@nuxtjs/firebase',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  auth: {
    persistence: 'local', // default
    initialize: {
      onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
      onAuthStateChangedAction: 'onAuthStateChangedAction',
      subscribeManually: false
    },
    ssr: false, // default
    emulatorPort: 9099,
    emulatorHost: 'http://localhost',
  },

  firebase: {
    config: {
      apiKey: "AIzaSyBZW7OL94O2f-zaseqQHGTPz9t95nSl5zA",
      authDomain: "mymeds-russo.firebaseapp.com",
      projectId: "mymeds-russo",
      storageBucket: "mymeds-russo.appspot.com",
      messagingSenderId: "254292697182",
      appId: "1:254292697182:web:d714ed26a1921888bb94cf"
    },
    services: {
      auth: true,
      firestore: true,
    },
  },

  firestore: {
    memoryOnly: false,
    chunkName: process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]',
    enablePersistence: true,
    emulatorPort: 8080,
    emulatorHost: 'localhost',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
