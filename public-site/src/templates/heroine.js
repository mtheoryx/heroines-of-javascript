import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const mergeLinks = links => {
  return links.map(link => {
    Object.keys(link).forEach(key => link[key] === null && delete link[key])
    return link
  })
}

const socialLinkFormater = link => {
  // Detect the link key
  // Switch on the key's name
  // Do decide the URL output for the platform
  // Including the link object's value (the username)
  const linkType = Object.keys(link)[0]

  switch (linkType) {
    case "github":
      return `https://github.com/${link[Object.keys(link)]}`
    case "instagram":
      return `https://instagram.com/${link[Object.keys(link)]}`
    case "twitter":
      return `https://twitter.com/${link[Object.keys(link)]}`
    case "linkedin":
      return `https://linkedin.com/in/${link[Object.keys(link)]}`
    case "mastadon":
      return `https://mastadon.technology/@${link[Object.keys(link)]}`
    case "youtube":
      return `https://youtube.com/user/${link[Object.keys(link)]}`
    case "medium":
      return `https://medium.com/@${link[Object.keys(link)]}`
    case "web":
      return `${link[Object.keys(link)]}`
    default:
      return "#"
  }
}

const HeroinePage = ({ data }) => {
  const socialLinks = mergeLinks(data.markdownRemark.frontmatter.links)
  return (
    <Layout>
      <SEO title={data.markdownRemark.frontmatter.heroine} />

      <div style={{ marginBottom: `1.45rem` }}>
        <h1>{data.markdownRemark.frontmatter.heroine}</h1>
        <p style={{ marginTop: "10px" }}>
          {data.markdownRemark.frontmatter.title}
        </p>
        <ul>
          {socialLinks.map(link => (
            <li>
              <a target="_blank" href={socialLinkFormater(link)}>
                {Object.keys(link)}: {link[Object.keys(link)]}
              </a>
            </li>
          ))}
        </ul>
        <Img
          fluid={
            data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid
          }
        />
        <div
          style={{ marginTop: "20px" }}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        <hr />
        <h3>Here are pictures of the cards</h3>
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
