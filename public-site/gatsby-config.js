module.exports = {
  siteMetadata: {
    title: `Heroines of Javascript`,
    description: `The roberttables livestream project that presents and accessible form of
      the limited edition 'Heroines of Javascript' card project.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stream-heroines-pages`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-humans-txt`,
      options: {
        team: [
          {
            Developer: `David Poindexter`,
          },
          {
            Developer: `roberttable livestream`,
          },
        ],
        thanks: [`Gatsby`, `Node`, `Twitch`, `AWS Amplify`],
        note: `Made in Indianapolis with <3`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
