import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Card = styled.div`
  width: 32%;
  max-width: 32%;
  min-width: 200px;
  border: 10px solid;
  border-color: ${props => props.color};
  border-radius: 15px;
  margin: 5px;
  padding: 10px;
  a {
    text-decoration: none;
  }
`

const CardColor = styled.p`
  background-color: ${props => props.color};
`

const HeroinesPage = ({ data }) => (
  <Layout>
    <SEO title="Heroines Gallery Home" />
    <h1>The Heroines of Javascript</h1>
    <p>
      If you are curious who each of the heroines are, you are in the right
      place!
    </p>
    <p>
      Each of these are full-color, printed cards, issued in a set of 20. All
      proceeds go to The Vue Vixens Scholarship Foundation. They are currently
      sold out, but we have created this site so that you can enjoy them as
      well!
    </p>
    <p>
      Click each one to visit a page featuring photos of the front and back of
      the physical cards in the set, social media links, and more detailed
      information about each Heroine.
    </p>
    <hr />
    <CardContainer>
      {data.Heroines.edges.map(({ node }) => (
        <Card color={node.frontmatter.color} key={node.id}>
          <Link to={node.fields.slug}>
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
          </Link>
        </Card>
      ))}
    </CardContainer>
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
          fields {
            slug
          }
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
