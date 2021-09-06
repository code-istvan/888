import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Blog({ data }) {
  console.log(data.site)

  return (
    <Layout>
      <Seo title="Blog" />
      <h1>BLOG</h1>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
