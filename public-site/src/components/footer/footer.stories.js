import React from "react"
import Footer from "./footer"

export default {
  title: "A footer",
  component: Footer,
}

export const defaultFooterStoryLight = () => (
  <>
    <Footer />
  </>
)

export const defaultFooterStoryDark = () => (
  <>
    <Footer night={true} />
  </>
)
