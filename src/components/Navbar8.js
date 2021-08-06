import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import AnimeLogo from "./AnimeLogo"
import "../sass/components/_navbar8.scss"

export default function Navbar8() {
  return (
    <header className="color-nav">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="color-nav navbarpad"
        variant="light"
        sticky="top"
      >
        <Navbar.Brand href="/">
          <AnimeLogo alt="nyolcág logo" />
        </Navbar.Brand>
        <Navbar.Brand id="BrandNameFont">NYOLCÁGÚ JÓGA ALAPÍTVÁNY</Navbar.Brand>
        <Navbar.Brand id="nyolcag">NYOLCÁG</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav as="ul">
            <Nav.Item as="li">
              <Link to="/">FŐOLDAL</Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Link to="/rolunk">RÓLUNK</Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Link to="/projektjeink">PROJEKTJEINK</Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Link to="/blog">BLOG</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/kapcsolat">KAPCSOLAT</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="btn btn-primary __button-color" to="/tamogatas">
                TÁMOGATÁS
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}
