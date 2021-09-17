import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import "../sass/components/card-hover.scss"
import "../sass/components/_blog.scss"
import "../sass/components/card-hover.scss"
import { useBlogRoll } from "../hooks/useBlogRollQuery"

function BlogRoll({ count }) {
  var posts = []
  const postsQueried = useBlogRoll()
  //This hardcopy operation is needed specifically because the component is being used w. different {count} parameters
  //Since the static query runs only once, we query all posts
  //and slice the array of posts on render time
  posts = [...postsQueried]
  if (count !== undefined) {
    posts.length = Math.min(posts.length, count)
  }

  return (
    <Row>
      {posts &&
        posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <Col md={6} lg={4}>
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
                  <Link to={post.slug} className={"btn btn-primary"}>
                    Olvasd tovább
                  </Link>
                </div>
              </div>
              <br />
            </Col>
          )
        })}
    </Row>
  )
}

export default BlogRoll
