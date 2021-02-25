export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "fashion-blog",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oxygen&display=swap"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // plugins: [
  //   { src: "~/plugins/bootstrap.js", ssr: false }
  // ],

  // ssr: true,

  loading: { color: "#fff" },

  script: [],

  plugins: [
    { src: `~/plugins/bootstrap.js`, mode: `client` },
    { src: "~/plugins/vue-flickity.js", ssr: false },
    { src: "~plugins/validate.js", ssr: false }
  ],
  ssr: true,

  preset: {
    // Change the postcss-preset-env settings
    autoprefixer: {
      grid: true
    }
  },

  components: true,

  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "nuxt-fontawesome",
    "@nuxtjs/google-fonts",
    "vue-sweetalert2/nuxt"
    // "nuxt-validate"
  ],

  googleFonts: {
    families: {
      Roboto: true,
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      }
    }
  },

  // nuxtValidate: {
  //   lang: "es",
  //   nuxti18n: {
  //     locale: {
  //       "zh-CN": "zh_CN"
  //     }
  //   }
  // },

  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"]
      }
    ]
  },

  axios: {
    // proxy: true
    baseURL: process.env.API_URL
  },
  tailwindcss: {
    config: {
      /* Extend the Tailwind config here */
      purge: {
        content: [
          "components/**/*.vue",
          "layouts/**/*.vue",
          "pages/**/*.vue",
          "plugins/**/*.js",
          "nuxt.config.js",

          // TypeScript
          "plugins/**/*.ts",
          "nuxt.config.ts"
        ]
      }
    }
  },

  build: {}
};
