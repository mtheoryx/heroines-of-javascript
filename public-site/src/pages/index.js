import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SideBySide = styled.div`
  display: flex;
  flex-direction: row;
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
        Scholarship Fund. The set is currently sold-out.
      </p>
      <Img
        fluid={data.giveaway.childImageSharp.fluid}
        alt="Five shrink-wrapped packages of printed cards from the Heroines of JavaScript project displayed in a fan on a desk with packages of resistors in the background."
        loading="eager"
      />
    </SideBySide>

    <h3>We took it a littler further...</h3>
    <p>
      In addition to wanting a set for myself, I got 5 additional sets. These
      became a stream giveaway on Twitch (roberttables). The winners were
      viewers all over the world. One such winner was a fellow tech streamer on
      twitch, Mike Jolley (theMichaelJolley).
    </p>
    <h3>...And it had amazing results</h3>
    <p>
      Mike also purchased additional sets. (I suspect they bought up the entire
      existing supply, but that's just between us!) This led to not only
      additional givaways on their streams, but something even more amazing.
    </p>
    <p>
      Mike set up a series of remote interviews with each of the Heroines of
      JavaScript. They were interviewed by both of his daughters, also intereste
      in learning from women in tech about their backgrounds, challenges faced,
      and advice for becoming a future woman in tech. And they were some amazing
      interviews!
    </p>
    <p>
      That series is currently paused for the season and will resume in the
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
      If you're curious about this project, see the
      <a
        href="https://github.com/mtheoryx/heroines-of-javascript"
        target="_blank"
        rel="noopener noreferrer"
      >
        Readme for more info, or to help out! PR's are always welcome!
      </a>
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
  }
`
