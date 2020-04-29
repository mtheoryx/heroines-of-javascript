import React from "react"
import SmartSocialLink from "./smart-social-link"

const mergeLinksToArray = links => {
  return links.map(link => {
    Object.keys(link).forEach(key => link[key] === null && delete link[key])
    return link
  })
}

const Social = ({ links }) => {
  const socialLinks = mergeLinksToArray(links)
  return (
    <ul style={{ fontSize: `1.2rem`, listStyle: `none` }}>
      {socialLinks.map(link => (
        <li key={Object.keys(link)}>
          <SmartSocialLink
            link={link}
            linkType={Object.keys(link)}
            linkUser={link[Object.keys(link)]}
          />
        </li>
      ))}
    </ul>
  )
}

export default Social
