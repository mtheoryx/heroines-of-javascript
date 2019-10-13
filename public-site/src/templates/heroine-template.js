import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

// import styled from "styled-components"

const HeroinePage = ({ data }) => (
  <Layout>
    <SEO title={data.markdownRemark.frontmatter.heroine} />

    <hr />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <h1>{data.markdownRemark.frontmatter.heroine}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
  </Layout>
)

export default HeroinePage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        heroine
        color
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
        title
      }
    }
  }
`
