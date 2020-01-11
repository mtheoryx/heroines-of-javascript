import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Navigation from "./navigation"

const StyledHeader = styled.header`
  background-color: rebeccapurple;
  margin-bottom: 1.45rem;
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

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderWrapper>
      <h1 style={{ margin: 0, marginBottom: 20 }}>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
      <Navigation />
    </HeaderWrapper>
  </StyledHeader>
)

export default Header
