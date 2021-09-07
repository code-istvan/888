import { graphql } from "gatsby"
import React from "react"
import { Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = ({ data }) => {
  const posts = data.allMdx.nodes
  return (
    <Layout>
      <Seo title="Blog" />
      <Row>
        <Col>
          <h1>BLOG</h1>
          {posts.map(post => {
            const title = post.frontmatter.title
            return (
              <Row>
                <h1>{title}</h1>
                <p>{post.frontmatter.date}</p>
                <p>{post.frontmatter.description}</p>
              </Row>
            )
          })}
        </Col>
      </Row>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        slug
        frontmatter {
          date(formatString: "YYYY MMMM DD")
          description
          title
        }
      }
    }
  }
`
