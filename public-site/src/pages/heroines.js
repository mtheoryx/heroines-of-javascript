import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

const Card = styled.div`
  border: 10px solid;
  border-color: ${props => props.color};
  border-radius: 15px;
  margin: 5px;
  padding: 10px;
`

const CardColor = style.p`
  background-color: ${props.color}
`

const HeroinesPage = ({ data }) => (
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
          <Card color={node.frontmatter.color}>
            <h2>{node.frontmatter.heroine}</h2>
            <Img
              fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
              alt={`${node.frontmatter.heroine}'s Thumbnail Illustration`}
            />
            <p>Title: {node.frontmatter.title}</p>
            <p>{node.excerpt}</p>
            <CardColor color={node.frontmatter.color}>
              Card Color: {node.frontmatter.color}
            </CardColor>
          </Card>
          <hr />
        </React.Fragment>
      ))}
    </div>
  </Layout>
)

export default HeroinesPage

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
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt(truncate: true, pruneLength: 80)
        }
      }
    }
  }
`
