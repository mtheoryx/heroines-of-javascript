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
  // Formats a link based on the type of link
  const linkType = Object.keys(link)[0]
  const username = link[Object.keys(link)]

  const socialToLink = {
    github: "https://github.com/",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/in/",
    mastadon: "https://mastadon.technology/@",
    youtube: "https://youtube.com/user/",
    medium: "https://medium.com/@",
    web: "",
  }

  return `${socialToLink[linkType]}${username}`
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
              <a
                target="_blank"
                href={socialLinkFormater(link)}
                rel="noopener noreferrer"
              >
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
