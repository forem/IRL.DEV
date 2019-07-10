require("dotenv").config()
const path = require(`path`)

const siteMetadata = {
  title: `DEV Real Life Events`,
  description: `There's nothing more awesome than meeting your internet friends IRL.`,
  author: `@thePracticalDev`,
  authorUrl: `https://dev.to`,
  siteName: `IRL.DEV`,
  socialImage: `https://thepracticaldev.s3.amazonaws.com/i/gvx1ze2tc7e3z912wdav.png`,
  faviconPng: `./src/img/dev-irl.png`,
  siteLanguage: `en-US`,
  background: `#bcbcbc`,
  themeColor: `#073449`,
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE,
            tableName: `events`,
            tableView: `approved-events`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: siteMetadata.faviconPng,
        // WebApp Manifest Configuration
        appName: siteMetadata.title,
        appDescription: siteMetadata.description,
        developerName: siteMetadata.author,
        developerURL: siteMetadata.authorUrl,
        dir: `auto`,
        lang: siteMetadata.siteLanguage,
        background: siteMetadata.background,
        theme_color: siteMetadata.themeColor,
        display: `standalone`,
        orientation: `any`,
        start_url: `/?homescreen=1`,
        version: `1.0`,

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: `/`,
        background_color: siteMetadata.background,
        theme_color: siteMetadata.themeColor,
        display: `minimal-ui`,
        // This path is relative to the root of the site.
        icon: siteMetadata.faviconPng,
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        defaultLayouts: { default: path.resolve("./src/components/layout.js") },
      },
    },
  ],
}
