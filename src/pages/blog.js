import { graphql } from "gatsby"
import React from "react"
import { Row, Col } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Image from "react-bootstrap/Image"
import "../sass/components/card-hover.scss"
import "../sass/components/_blog.scss"
import "../sass/components/card-hover.scss"

const Blog = ({ data }) => {
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <Seo title="Blog" />

      <Container>
        <Row>
          <Col>
            <h1>BLOG</h1>
          </Col>
        </Row>

        <Row>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <Col md={4}>
                <div className="card card-hover" key={post.slug}>
                  <Image
                    src={post.frontmatter.thumbnail}
                    className="blog__thumbnail"
                    alt={post.frontmatter.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{post.frontmatter.date}</p>
                    <p className="card-text">{post.frontmatter.description}</p>
                    <a href={post.slug} className="btn btn-primary">
                      Tovább a bejegyzésre
                    </a>
                  </div>
                </div>
                <br />
              </Col>
            )
          })}
        </Row>
      </Container>
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
          date(formatString: "YYYY. MM. DD.")
          description
          title
          thumbnail
        }
      }
    }
  }
`
