import * as React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "react-bootstrap/Container"
import { Row, Col } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import "../sass/components/_index.scss"
// import { navigate } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <Seo title="Főoldal" />
    <br />
    {/* <h1>Főoldal</h1> */}
    <Container>
      <Row>
        <Col md>
          <h1 align="left">Nyolcágú jóga alapítvány</h1>
          <h4 className="index__text_background" align="left">
            Alapítványunk célja, hogy a jóga elméletét és gyakorlatát minél
            szélesebb körben népszerűsítse Magyarországon. Az Indiából
            eredeztethető jóga már évezredek óta segíti az embereket a testi és
            lelki egészség elérésében és megőrzésében, áldásos hatásai ma már
            minden kétségen felül bizonyítottak.
          </h4>{" "}
          {/* <div className="d-grid gap-2"> */}
          <br /> <br />
          <Button variant="primary" href="/rolunk">
            Tudj meg többet rólunk
          </Button>
          {/* </div> */}
        </Col>
        {/* <Col md> */}{" "}
        {/* <StaticImage
            src="../images/md2.jpg"
            width={220}
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Jóga és vegánság"
            placeholder="blurred"
          /> */}
        {/* </Col> */}
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
