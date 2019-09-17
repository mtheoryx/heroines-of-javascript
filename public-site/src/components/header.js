import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const navLinks = [
  { destination: "/heroines", readable: "The Heroines" },
  { destination: "/vuevixens", readable: "Vue Vixens" },
  { destination: "/contact", readable: "Contact" },
]

const Nav = ({ className }) => (
  <nav className={className}>
    {navLinks.map((item, index) => (
      <Link to={item.destination} key={index} activeClassName="active">
        {item.readable}
      </Link>
    ))}
  </nav>
)

const StyledNav = styled(Nav)`
  a {
    color: white;
    text-decoration: none;
    margin-right: 20px;
  }
  a:hover,
  a.active {
    text-decoration: underline;
  }
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, marginBottom: 20 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <StyledNav />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
