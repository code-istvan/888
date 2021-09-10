import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { Row, Col } from "react-bootstrap"
import Container from "react-bootstrap/Container"

const blogPosts = ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx
  const { previous, next } = pageContext

  return (
    <Container>
      <Row>
        <Col>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>

          <article>
            <MDXRenderer>{body}</MDXRenderer>
          </article>

          {previous === false ? null : (
            <>
              {previous && (
                <Link to={previous.fields.slug}>
                  <button>{previous.frontmatter.title}</button>
                </Link>
              )}
            </>
          )}
          {next === false ? null : (
            <>
              {next && (
                <Link to={next.fields.slug}>
                  <button>{next.frontmatter.title}</button>
                </Link>
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
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
      }
    }
  }
`
