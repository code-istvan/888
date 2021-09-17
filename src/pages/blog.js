import { graphql, Link } from "gatsby"
import React from "react"
import { Row, Col } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Image from "react-bootstrap/Image"
import BlogRoll from "../components/BlogRoll"
import "../sass/components/card-hover.scss"
import "../sass/components/_blog.scss"
import "../sass/components/card-hover.scss"

const Blog = ({ data }) => {
  return (
    <Layout>
      <Seo title="Blog" />

      <Container>
        <Row>
          <Col>
            <h1>BLOG</h1>
          </Col>
        </Row>

        <BlogRoll />
      </Container>
    </Layout>
  )
}

export default Blog
