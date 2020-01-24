import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const navLinks = [
  { destination: "/heroines", readable: "The Heroines" },
  { destination: "/about", readable: "About These Cards" },
  // { destination: "/contact", readable: "Contact" },
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

const Navigation = styled(Nav)`
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

export default Navigation
