import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Heroines Gallery Home" />
    <h1>Hi Heroines Fans!</h1>
    <p>
      The roberttables livestream project that presents and accessible form of
      the limited edition 'Heroines of Javascript' card project. Powered by
      GatsbyJS, AWS Amplify, and {"<3"} from a stream community.
    </p>
    <p>Now go build something great.</p>
    <p>
      If you're curious about the project, see some links here{" "}
      <a
        href="https://github.com/mtheoryx/heroines-of-javascript"
        target="_blank"
        rel="noopener noreferrer"
      >
        Readme for project info
      </a>
    </p>
    <hr />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {data.Heroines.edges.map(({ node }) => (
        <React.Fragment key={node.id}>
          <div className="card">
            <h2>Name: {node.frontmatter.heroine}</h2>
            <p>Title: {node.frontmatter.title}</p>
            <p>Card Color: {node.frontmatter.color}</p>
          </div>
          <hr />
        </React.Fragment>
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    Heroines: allMarkdownRemark(
      sort: { fields: frontmatter___heroine, order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            heroine
            title
            color
          }
        }
      }
    }
  }
`
