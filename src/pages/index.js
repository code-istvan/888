import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "react-bootstrap/Container"
import { Row, Col } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import "../sass/components/_index.scss"
import "../sass/components/card-hover.scss"
import { graphql, useStaticQuery } from "gatsby"
import BlogRoll from "../components/BlogRoll"
import ActiveProjectOne from "../components/ActiveProjectOne"
import ActiveProjectTwo from "../components/ActiveProjectTwo"
// import { navigate } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            siteUrl
          }
        }
      }
    `
  )

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nyolcágú jóga alapítvány",
    description: site.siteMetadata.description,
    url: site.siteMetadata.siteUrl,
    logo: "https://nyolcag.hu/images/nyolcag_logo.png",
    sameAs: "https://www.facebook.com/nyolcag",
  }

  return (
    <Layout>
      <Seo title="Főoldal" schemaMarkup={schema} />
      <br />
      <Container>
        <Row>
          <Col md>
            <h1 align="left">Nyolcágú jóga alapítvány</h1>
            <p className="index__text_background index__leadText" align="left">
              Alapítványunk célja, hogy a jóga elméletét és gyakorlatát minél
              szélesebb körben népszerűsítse Magyarországon. Az Indiából
              eredeztethető jóga már évezredek óta segíti az embereket a testi
              és lelki egészség elérésében és megőrzésében, áldásos hatásai ma
              már minden kétségen felül bizonyítottak.
            </p>{" "}
            <br /> <br />
            <Button variant="primary" href="/rolunk">
              Tudj meg többet rólunk
            </Button>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <h3 align="left">Aktív projektjeink</h3>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md>
            <ActiveProjectOne />
          </Col>
          <Col md>
            <ActiveProjectTwo />
          </Col>
        </Row>

        <br />
        <br />
        <Row>
          <Col className="index__same-line">
            <h3 align="left">Blogunk</h3>
            <p> /legújabb bejegyzések/</p>
          </Col>
        </Row>
        <br />
        <BlogRoll count={3} />
      </Container>
    </Layout>
  )
}

export default IndexPage
