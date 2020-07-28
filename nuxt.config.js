import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';

export default {
  // mode: "universal",
  target: 'static',
  router: {
    base: '/test/'
  },
  /*
** Headers of the page
*/
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    {
      src: "@/assets/css/antd.less",
      lang: "less"
    },
    {
      src: "@/assets/css/main.css",
      lang: "css"
    }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  // buildDir: 'dist',
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    'nuxt-webfontloader'
  ],
  // Give apollo module options
  apollo: {
    cookieAttributes: {
      expires: 7, // optional, default: 7 (days)
    },
    includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
    authenticationType: 'Bearer', // optional, default: 'Bearer'
    // optional
    // errorHandler: '~/plugins/apollo-error-handler.js',
    // required
    clientConfigs: {
      default: '~/apollo/clientConfig.js'
    }
  },
  webfontloader: {
    google: {
      families: ['Roboto:400,500,700'] //Loads Lato font with weights 400 and 700
    }
  },
  /*
** Axios module configuration
** See https://axios.nuxtjs.org/options
*/
  axios: {
  },
  router: {
    linkExactActiveClass: 'exact-active-link'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    analyze: false,
    extractCSS: false,
    extend(config, ctx) {
      // ctx.loaders.less.javascriptEnabled = true;
      config.resolve.alias['@ant-design/icons/lib/dist$'] = '~/icons.js'
    },
    loaders: {
      less: {
        javascriptEnabled: true
      },
      'html-loader': 'html-loader'
    },
    plugins: [
      // global modules
      new AntdDayjsWebpackPlugin({
        replaceMoment: true
      })
    ]
  }
}
