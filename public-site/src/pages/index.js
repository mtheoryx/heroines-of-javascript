import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Women in Tech Home" />
    <p>
      The roberttables livestream project that presents and accessible form of
      the limited edition 'Heroines of Javascript' card project. Powered by
      GatsbyJS, AWS Amplify, and {"<3"} from a stream community.
    </p>
    <p>Now go build something great.</p>
    <p>
      If you're curious about the project, see some links here{" "}
      <a
        href="https://github.com/mtheoryx/heroines-of-javascript"
        target="_blank"
        rel="noopener noreferrer"
      >
        Readme for project info
      </a>
    </p>
    <hr />
  </Layout>
)

export default IndexPage
