import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Card = styled.div`
  width: 32%;
  min-width: 200px;
  border: 10px solid;
  border-color: ${(props) => props.color};
  border-radius: 15px;
  margin: 5px;
  padding: 10px;
  &:hover {
    box-shadow: 3px 3px 1px #8e8a8a;
  }
  &:active {
    box-shadow: inset 3px 3px 3px #663399;
  }
  .smol {
    font-size: 0.8em;
    color: #999;
  }
  a {
    text-decoration: none;
    color: #333;
  }
  p {
    margin-bottom: 5px;
  }
  h2 {
    margin-bottom: 0px;
  }
  img {
    max-height: 225px;
  }
`

const HeroinesPage = ({ data }) => (
  <Layout>
    <SEO title="The Heroines of Javascript" />
    <CardContainer>
      {data.Heroines.edges.map(({ node }) => (
        <Card color={node.frontmatter.color} key={node.id}>
          <Link to={node.fields.slug}>
            <h2>{node.frontmatter.heroine}</h2>
            <p className="smol">{node.frontmatter.title}</p>
            <Img
              fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
              alt={`${node.frontmatter.heroine}'s Thumbnail Illustration`}
            />
            <p>{node.excerpt}</p>
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
