import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"

const Main = styled.div`
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #bbb;
  @media screen and (min-width: 700px) {
    display: flex;
    flex-direction: row;
  }
`

const Primary = styled.div`
  @media screen and (min-width: 700px) {
    width: 40%;
    padding-right: 20px;
  }
`

const Secondary = styled.div`
  @media screen and (min-width: 700px) {
    width: 60%;
  }
`

const HeroinePage = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.markdownRemark.frontmatter.heroine} />

      <Main>
        <Primary>
          <h1>{data.markdownRemark.frontmatter.heroine}</h1>
          <p style={{ marginTop: "10px", fontSize: `1.5rem` }}>
            {data.markdownRemark.frontmatter.title}
          </p>

          <Social links={data.markdownRemark.frontmatter.links} />

          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </Primary>
        <Secondary>
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
            fluid={
              data.markdownRemark.frontmatter.cardBack.childImageSharp.fluid
            }
          />
        </Secondary>
      </Main>
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
