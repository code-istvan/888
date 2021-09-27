import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { Row, Col } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import LayoutBlog from "../components/layoutBlog"
import AuthorIcon from "../components/AuthorIcon"
import DateIcon from "../components/DateIcon"
import TagsIcon from "../components/TagsIcon"
import Seo from "../components/seo"
import { navigate } from "gatsby"
import "../sass/components/_blogposts.scss"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"

const blogPosts = ({ data }) => {
  const { frontmatter, body } = data.mdx
  const src = getSrc(frontmatter.thumbnail) || ""
  const image = getImage(frontmatter.thumbnail)

  return (
    <LayoutBlog>
      <Container>
        <Seo
          title={frontmatter.title}
          description={frontmatter.description}
          thumbnail={src}
        />
        <Row>
          {/* <Col xs={10}> */}
          <Col md={{ span: 8, offset: 2 }}>
            <h1>{frontmatter.title}</h1>
            <div className="blogPosts__same-line">
              <AuthorIcon />
              <p>{frontmatter.author}</p>
              <DateIcon />
              <p>{frontmatter.date}</p>
              <TagsIcon />
              <p>{frontmatter.tags}</p>
            </div>
            <GatsbyImage image={image} alt={frontmatter.title} />
            <br />
            <br />
            <article>
              <MDXRenderer>{body}</MDXRenderer>
            </article>
            {/* <Button variant="primary" href="/blog"> */}
            <Button variant="primary" onClick={() => navigate(-1)}>
              Vissza
            </Button>
            <br /> <br />
          </Col>
        </Row>
      </Container>
    </LayoutBlog>
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
        author
        tags
        date(formatString: "YYYY. MM. DD.")
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              blurredOptions: { width: 100 }
              transformOptions: { cropFocus: CENTER }
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`

// import { graphql } from "gatsby"
// import { MDXRenderer } from "gatsby-plugin-mdx"
// import React from "react"
// import { Row, Col } from "react-bootstrap"
// import Container from "react-bootstrap/Container"
// import Button from "react-bootstrap/Button"
// import Layout from "../components/layout"
// import AuthorIcon from "../components/AuthorIcon"
// import DateIcon from "../components/DateIcon"
// import TagsIcon from "../components/TagsIcon"
// import Seo from "../components/seo"
// import { navigate } from "gatsby"
// import "../sass/components/_blogposts.scss"

// const blogPosts = ({ data }) => {
//   const { frontmatter, body } = data.mdx
//   const image = frontmatter.thumbnail || ""
//   return (
//     <Layout>
//       <Container>
//         <Seo
//           title={frontmatter.title}
//           description={frontmatter.description}
//           thumbnail={image}
//         />
//         <Row>
//           <Col></Col>
//           <Col xs={10}>
//             <h1>{frontmatter.title}</h1>
//             <div className="blogPosts__same-line">
//               <AuthorIcon />
//               <p>{frontmatter.author}</p>
//               <DateIcon />
//               <p>{frontmatter.date}</p>
//               <TagsIcon />
//               <p>{frontmatter.tags}</p>
//             </div>
//             <img src={frontmatter.thumbnail} alt={frontmatter.title} />
//             <article>
//               <MDXRenderer>{body}</MDXRenderer>
//             </article>
//             {/* <Button variant="primary" href="/blog"> */}
//             <Button variant="primary" onClick={() => navigate(-1)}>
//               Vissza
//             </Button>
//             <br /> <br />
//           </Col>
//           <Col></Col>
//         </Row>
//       </Container>
//     </Layout>
//   )
// }

// export default blogPosts

// export const query = graphql`
//   query PostsBySlug($slug: String!) {
//     mdx(fields: { slug: { eq: $slug } }) {
//       body
//       frontmatter {
//         title
//         description
//         author
//         tags
//         date(formatString: "YYYY. MM. DD.")
//         thumbnail
//       }
//     }
//   }
// `
