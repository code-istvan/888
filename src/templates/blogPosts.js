import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { Row, Col } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../sass/components/_blogposts.scss"

const blogPosts = ({ data }) => {
  const { frontmatter, body } = data.mdx
  const image = frontmatter.thumbnail || '';
  return (
    <Layout>
      <Container>
        <Seo title={frontmatter.title} description={frontmatter.description} thumbnail={image} />
        <Row>
          <Col></Col>
          <Col xs={10}>
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
          <Col></Col>
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
        description
        date(formatString: "YYYY. MM. DD.")
        thumbnail
      }
    }
  }
`
