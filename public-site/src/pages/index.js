import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SideBySide = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  > * {
    width: 48%;
  }
  img {
    height: auto;
    width: 100%;
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Women in Tech Home" />

    <h2>It started off very small..</h2>

    <SideBySide>
      <p>
        Jen Looper and Mirlu collaborated to put together a printed card set
        featuring 20 women in tech. All proceeds went to the Vue Vixens
        Scholarship Fund.
      </p>
      <Img
        fluid={data.giveaway.childImageSharp.fluid}
        alt="Five shrink-wrapped packages of printed cards from the Heroines of JavaScript project displayed in a fan on a desk with packages of resistors in the background."
        loading="eager"
      />
    </SideBySide>

    <p style={{ fontStyle: "italic" }}>NOTE: The set is currently sold-out.</p>

    <h3>We took it a little further...</h3>

    <SideBySide>
      <Img
        fluid={data.mike.childImageSharp.fluid}
        alt="Mike Jolley on stream while holding up a card"
        loading="lazy"
      />
      <p style={{ paddingLeft: 10 }}>
        In addition to wanting a set for myself, I got 5 additional sets. These
        became a stream giveaway on Twitch (roberttables). The winners were
        viewers all over the world. One such winner was a fellow tech streamer
        on twitch, Mike Jolley (theMichaelJolley).
      </p>
    </SideBySide>

    <h3>...And it had amazing results</h3>
    <p>
      Mike also purchased additional sets. (I suspect they bought up the entire
      existing supply, but that's just between us!) This led to not only
      additional givaways on their streams, but something even more amazing.
    </p>

    <SideBySide>
      <p>
        Mike set up a series of remote interviews with each of the Heroines of
        JavaScript. They were interviewed by both of his daughters, also
        interested in learning from women in tech about their backgrounds,
        challenges faced, and advice for becoming a future woman in tech. And
        they were some amazing interviews!
      </p>
      <Img
        fluid={data.interview.childImageSharp.fluid}
        alt="Mike Jolley and daughters interviewing a Heroine of JavaScript"
        loading="lazy"
      />
    </SideBySide>

    <p style={{ fontStyle: "italic" }}>
      NOTE: That series is currently paused for the season and will resume in the
      future.
    </p>
    <h2>This site is dedicated to the project the impact it has made</h2>
    <p>
      Seeing that the cards were sold out, and that there was sill interest in
      the content of the cards, I reached out directly to Jen Looper and asked
      if I could make this site on stream. Jen was absolutely thrilled about the
      idea and was extremely supportive, providing the card art and her blessing
      to go ahead.
    </p>
    <h3>More info...</h3>
    <p>
      If you're curious about this project, see the &nbsp;
      <a
        href="https://github.com/mtheoryx/heroines-of-javascript"
        target="_blank"
        rel="noopener noreferrer"
      >
        Readme for more info
      </a>
      , or to help out! PR's are always welcome!
    </p>
    <hr />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    giveaway: file(relativePath: { eq: "giveaway.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 300, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mike: file(relativePath: { eq: "mike-jolley-card.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 300, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    interview: file(relativePath: { eq: "mike-jolley-interview.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 300, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
