import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

// import styled from "styled-components"

const HeroinePage = ({ data }) => (
  <Layout>
    <SEO title={data.markdownRemark.frontmatter.heroine} />

    <hr />
    <div style={{ marginBottom: `1.45rem` }}>
      <h1>{data.markdownRemark.frontmatter.heroine}</h1>
      <p>{data.markdownRemark.frontmatter.title}</p>
      <Img
        fluid={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid}
      />
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
  </Layout>
)

export default HeroinePage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        heroine
        color
        title
        thumbnail {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        links {
          github
          instagram
          linkedin
          mastadon
          medium
          twitter
          web
          youtube
        }
        cardBack {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
        cardFront {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      html
    }
  }
`
