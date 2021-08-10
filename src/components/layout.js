import * as React from "react"
import Navbar8 from "./Navbar8"
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css"
import "../sass/components/_layout.scss"
import Footer from "./Footer"
import Hero from "./Hero"

export default function Layout({ children }) {
  return (
    <>
      <Navbar8 />
      <Hero />
      <Container className="layout__container__margin">
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  )
}
