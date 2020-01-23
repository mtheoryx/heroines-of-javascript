import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  background-color: ${props => (props.dark ? "#333" : "#F4EDFF")}
  color: ${props => (props.dark ? "#fff" : "#333")}
  text-align: center;
  border-radius: 3px;
  padding: 20px;
  transition: 0.30s background-color;
  &:hover {
    background-color: ${props => (props.dark ? "#2F0B64" : "#DFD5EE")}
  }
  a {
    color: ${props => (props.dark ? "#fff" : "#663399")}
    text-decoration: none;

  }
  a:hover {
    text-decoration: ${props => (props.dark ? "none" : "underline")};
  }
`

const Footer = ({ night }) => (
  <FooterWrapper dark={night}>
    © {new Date().getFullYear()} | Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
    {` `} &amp;
    {` `}
    <a href="https://aws-amplify.github.io/">Amplify</a>
  </FooterWrapper>
)
export default Footer
