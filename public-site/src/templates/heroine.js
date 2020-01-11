import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"

const HeroinePage = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.markdownRemark.frontmatter.heroine} />

      <div style={{ marginBottom: `1.45rem` }}>
        <h1>{data.markdownRemark.frontmatter.heroine}</h1>
        <p style={{ marginTop: "10px", fontSize: `1.5rem` }}>
          {data.markdownRemark.frontmatter.title}
        </p>

        <Social links={data.markdownRemark.frontmatter.links} />

        <div
          style={{ marginTop: "20px" }}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        <Img
          fluid={
            data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid
          }
        />

        <h3>Photos of the physical cards</h3>
        <h4>Front of Card</h4>
        <Img
          fluid={
            data.markdownRemark.frontmatter.cardFront.childImageSharp.fluid
          }
        />
        <hr />
        <h4>Back of Card</h4>
        <Img
          fluid={data.markdownRemark.frontmatter.cardBack.childImageSharp.fluid}
        />
      </div>
      <hr />
    </Layout>
  )
}

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
        cardFront {
          childImageSharp {
            fluid(maxWidth: 920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cardBack {
          childImageSharp {
            fluid(maxWidth: 920) {
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
      }
      html
    }
  }
`
