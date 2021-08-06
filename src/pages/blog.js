import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Blog({ data }) {
  return (
    <Layout>
      <Seo title="Blog" />
      <Img fluid={data.file.childImageSharp.fluid} alt="astanga jóga mysore" />
      <h1>BLOG</h1>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "landing.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
