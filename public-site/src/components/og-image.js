import React, { useState, useEffect } from "react"
import styled from "styled-components"
import fire from "../images/og-backgrounds/fire.png"
// import portrait from "../content/divya-sasidharan/divya-sasidharan.png"

const StyledOgImage = styled.div`
  height: 630px;
  width: 1200px;
  position: fixed;
  top: 0;
  left: 0;
`
const StyledOgPortrait = styled.div`
  position: absolute;
  top: 85px;
  left: 60px;
`

const StyledOgName = styled.div`
  position: absolute;
  top: 240px;
  right: 160px;
  font-size: 72px;
  width: 400px;
  text-align: center;
  line-height: 1em;
  color: #efefef;
`

const OGImage = ({
  heroine: {
    frontmatter: { heroine },
    fields: { portrait, background },
  },
}) => {
  console.log("HEROINE: ", heroine)

  return (
    <StyledOgImage>
      <img
        src={`data:image/jpg;base64,${background}`}
        alt=""
        width="1200"
        height="630"
      />
      <StyledOgPortrait>
        <img
          src={`data:image/jpg;base64,${portrait}`}
          alt=""
          width="461"
          height="461"
        />
      </StyledOgPortrait>
      <StyledOgName>
        <p>{heroine}</p>
      </StyledOgName>
    </StyledOgImage>
  )
}

export default OGImage
