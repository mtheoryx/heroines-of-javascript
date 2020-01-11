import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
  faMastodon,
  faYoutube,
  faMedium,
} from "@fortawesome/free-brands-svg-icons"
import { faHome } from "@fortawesome/free-solid-svg-icons"

const socialColorLookup = linkType => {
  const socialToColor = {
    github: "#333",
    instagram: "#000",
    twitter: "#1DA1F2",
    linkedin: "#2867B2",
    mastodon: "#2b90d9",
    youtube: "#FF0000",
    medium: "#00ab6c",
    web: "#000",
  }

  return socialToColor[linkType]
}

const socialIconLookup = linkType => {
  const socialToLink = {
    github: faGithub,
    instagram: faInstagram,
    twitter: faTwitter,
    linkedin: faLinkedin,
    mastadon: faMastodon,
    youtube: faYoutube,
    medium: faMedium,
    web: faHome,
  }

  return socialToLink[linkType]
}

const socialLinkLookup = link => {
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

const SmartSocialLink = ({ link, linkType, linkUser }) => {
  return (
    <a
      target="_blank"
      href={socialLinkLookup(link)}
      rel="noopener noreferrer"
      style={{ textDecoration: `none`, color: socialColorLookup(linkType) }}
    >
      <FontAwesomeIcon
        icon={socialIconLookup(linkType)}
        size="1x"
        color={socialColorLookup(linkType)}
      />{" "}
      {linkUser}
    </a>
  )
}

export default SmartSocialLink
