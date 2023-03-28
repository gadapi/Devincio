// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://devincio.co",
    title: "Corporación Devincio",
    author: `Gary Pinto`,
    description: "Inteligencia Colectiva",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Corporación Devincio",
        short_name: "Devincio",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#eb3237",
        theme_color: "#959495",
        icon: "src/favicon.png",
      },
    },
  ],
}
