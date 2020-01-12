import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Navigation from "./navigation"

const StyledHeader = styled.header`
  background-color: rebeccapurple;
`

const HeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const HeaderColorBorder = styled.div`
  width: 100%;
  height: 15px;
  background: linear-gradient(
    124deg,
    #ff2400,
    #e8b71d,
    #e3e81d,
    #1de840,
    #1ddde8,
    #2b1de8,
    #dd00f3
  );
  background-size: 1800% 1800%;
  -webkit-animation: rainbow 10s ease infinite;
  -z-animation: rainbow 10s ease infinite;
  -o-animation: rainbow 10s ease infinite;
    animation: rainbow 10s ease infinite;}

  @-webkit-keyframes rainbow {
      0%{background-position:0% 82%}
      50%{background-position:100% 19%}
      100%{background-position:0% 82%}
  }
  @-moz-keyframes rainbow {
      0%{background-position:0% 82%}
      50%{background-position:100% 19%}
      100%{background-position:0% 82%}
  }
  @-o-keyframes rainbow {
      0%{background-position:0% 82%}
      50%{background-position:100% 19%}
      100%{background-position:0% 82%}
  }
  @keyframes rainbow {
      0%{background-position:0% 82%}
      50%{background-position:100% 19%}
      100%{background-position:0% 82%}
  }
  margin-bottom: 1.45rem;
`

const Header = ({ siteTitle }) => (
  <>
    <StyledHeader>
      <HeaderWrapper>
        <h1 style={{ margin: 0, marginBottom: 20 }}>
          <StyledLink to="/">{siteTitle}</StyledLink>
        </h1>
        <Navigation />
      </HeaderWrapper>
    </StyledHeader>
    <HeaderColorBorder />
  </>
)

export default Header
