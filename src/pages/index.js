import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "react-bootstrap/Container"
import { Row, Col } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import "../sass/components/_index.scss"
import "../sass/components/card-hover.scss"
import { graphql, useStaticQuery } from "gatsby"
import BlogRoll from "../components/BlogRoll"
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
            <div className="card card-hover">
              <h5 className="card-header">
                Eddie Stern: One Simple Thing - könyv magyar kiadás
              </h5>
              <div class="card-body">
                <blockquote className="blockquote mb-0">
                  <p>
                    Érezni lehet, hogy az együttérzés átragyogja ennek a
                    könyvnek minden oldalát. Eddie Stern őszinte vágya, hogy
                    mindannyian boldogabbak, egészségesebbek, erősebbek és
                    békésebbek legyünk az életünkben, a jóga tudományának és az
                    évezredes tapasztalat által.
                  </p>
                  <footer className="blockquote-footer">
                    Sharon Salyberger,{" "}
                    <cite title="Source Title">
                      a Lovingkindness és a Real Happiness könyvek szerzője
                    </cite>
                    <br /> <br />
                    <Button variant="primary" href="/projektjeink">
                      Bővebben
                    </Button>{" "}
                    <Button
                      variant="outline-primary"
                      href="/tamogatas"
                      className="index__button__padding-top"
                    >
                      A projekt támogatása
                    </Button>
                  </footer>
                </blockquote>
              </div>
            </div>
          </Col>
          <Col md>
            <div className="card card-hover">
              <h5 className="card-header">
                Swami Prabhavananda: How to know God - könyv magyar kiadás
              </h5>
              <div className="card-body">
                <p className="card-text">
                  {" "}
                  Patandzsali Jóga Aforizmái a jóga és a meditáció gyakorlásának
                  egyik fő munkája. Ezeken az ősi aforizmákon keresztül
                  megtudhatja, hogyan irányíthatja elméjét, és hogyan érheti el
                  a belső békét és szabadságot.
                </p>
                <Button variant="primary" href="/projektjeink">
                  Bővebben
                </Button>{" "}
                <Button
                  variant="outline-primary"
                  href="/tamogatas"
                  className="index__button__padding-top"
                >
                  A projekt támogatása
                </Button>
              </div>
            </div>
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
        <BlogRoll count={3} />
      </Container>
    </Layout>
  )
}

export default IndexPage
