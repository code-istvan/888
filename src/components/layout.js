import * as React from "react"
// import PropTypes from "prop-types"
// import { graphql } from "gatsby"
// import Img from "gatsby-image"
import Navbar8 from "./Navbar8"
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css"
import "../sass/components/_layout.scss"
import Footer from "./Footer"
import "../sass/components/_layout.scss"
import Hero from "./Hero"
import { Row } from "react-bootstrap"

export default function Layout({ children }) {
  return (
    <>
      <Navbar8 />
      <Hero />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  )
}

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "landing.jpg" }) {
//       childImageSharp {
//         fluid {
//           src
//           sizes
//           srcSet
//         }
//       }
//     }
//   }
// `
