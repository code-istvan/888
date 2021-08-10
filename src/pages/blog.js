import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Blog({ data }) {
  return (
    <Layout>
      <Seo title="Blog" />
      <h1>BLOG</h1>
    </Layout>
  )
}
