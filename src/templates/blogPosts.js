import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { Row, Col } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Layout from "../components/layout"
import Seo from "../components/seo"

const blogPosts = ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx
  // const { previous, next } = pageContext

  return (
    <Layout>
      <Container>
        <Seo title="Blog" />
        <Row>
          <Col>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <img src={frontmatter.thumbnail} alt={frontmatter.title} />
            <article>
              <MDXRenderer>{body}</MDXRenderer>
            </article>
            <Button variant="primary" href="/blog">
              Vissza
            </Button>
            <br /> <br />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default blogPosts

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY. MM. DD.")
        thumbnail
      }
    }
  }
`
