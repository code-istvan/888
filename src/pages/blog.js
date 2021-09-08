import { graphql } from "gatsby"
import React from "react"
import { Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Image from "react-bootstrap/Image"

const Blog = ({ data }) => {
  const posts = data.allMdx.nodes
  return (
    <Layout>
      <Seo title="Blog" />
      <Row>
        <Col>
          <h1>BLOG</h1>
        </Col>
      </Row>

      {posts.map(post => {
        const title = post.frontmatter.title
        const thumbnail = post.frontmatter.thumbnail

        return (
          <Row>
            <Col>
              <div className="card">
                <Image
                  src="{thumbnail}/171x180"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{post.frontmatter.description}</p>
                  <a href="#" className="btn btn-primary">
                    Tovább a bejegyzésre
                  </a>
                </div>
                <div className="card-footer text-muted">
                  {post.frontmatter.date}
                </div>
              </div>
              <br />
            </Col>
          </Row>
        )
      })}
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
          thumbnail
        }
      }
    }
  }
`
