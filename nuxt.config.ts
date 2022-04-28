import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: "vue-pug-loader",
      },
      {
        test: /\.sass$/,
        loader: "sass-loader",
      },
    ],
  },
});
