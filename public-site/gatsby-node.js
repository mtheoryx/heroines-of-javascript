const path = require("path")
const fs = require("fs")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: `/heroines${slug}`,
    })
    createNodeField({
      node,
      name: `portrait`,
      value: fs.readFileSync(
        path.resolve(
          `./src/content${slug}${node.frontmatter.thumbnail.substr(2)}`
        ),
        { encoding: "base64" }
      ),
    })
    createNodeField({
      node,
      name: `background`,
      value: fs.readFileSync(
        path.resolve(
          `./src/images/og-backgrounds/${node.frontmatter.ogcolor}.jpg`
        ),
        { encoding: "base64" }
      ),
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/heroine.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
