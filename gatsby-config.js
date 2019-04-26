require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `DEV Real Life Events`,
    description: `There's nothing more awesome than meeting your internet friends IRL.`,
    author: `@gatsbyjs`,
  },
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
            baseId: `appbwbqpZdWrUpaL9`,
            tableName: `events`,
            tableView: `approved-events`,
          },
        ],
      },
    },
  ],
}
