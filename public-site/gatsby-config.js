const path = require(`path`)
require("dotenv").config()

const siteURL = process.env.SITE_URL

module.exports = {
  siteMetadata: {
    title: `Heroines of Javascript`,
    description: `Online version of the limited-edition card series 'Heroines of Javascript' card project.`,
    author: `David Poindexter (roberttables)`,
    siteUrl: siteURL,
    url: `https://women-in-tech.online`,
    twitterUsername: "@vuevixens",
    image: "/ogimage/default.jpg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
      },
    },
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: `https://women-in-tech.online`,
        sitemap: `https://women-in-tech.online/sitemap.xml`,
        policy: [{ userAgent: "*", disallow: "" }],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
