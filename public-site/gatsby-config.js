const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Heroines of Javascript`,
    description: `The roberttables livestream project that presents and accessible form of
      the limited edition 'Heroines of Javascript' card project.`,
    author: `David Poindexter (roberttables)`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
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
            Github: `mtheoryx`,
            Twitter: `@drpoindexter`,
          },
          {
            Developer: `roberttables' livestream`,
            Site: `https://www.twitch.tv/roberttables`,
          },
        ],
        thanks: [`Gatsby`, `Node`, `Twitch`, `AWS Amplify`],
        site: {
          "Last update": `${new Date().getMonth()}/${new Date().getDate()}/${new Date().getFullYear()}`,
          Standards: `ECMAScript 6`,
          Components: `Gatsby`,
          Softwares: `VS Code`,
        },
        note: `Made in Indianapolis with <3`,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
