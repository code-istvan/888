import * as React from "react"
import Navbar8 from "./Navbar8"
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css"
import "../sass/components/_layout.scss"
import Footer from "./Footer"

export default function LayoutBlog({ children }) {
  return (
    <>
      <Navbar8 />
      <Container className="layout__container__margin">
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  )
}
