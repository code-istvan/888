import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Row, Col } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import { graphql, Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Accordion from "react-bootstrap/Accordion"
import { StaticImage } from "gatsby-plugin-image"
import "../sass/components/_projektjeink.scss"

export default function Projektjeink() {
  return (
    <Layout>
      <Seo title="Projektjeink" />

      <Container>
        <h1>Projektjeink</h1>
        <Row>
          <Col>
            <p>Jelenleg az alábbi projektjeink vannak előkészítés alatt.</p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Accordion>
              <Card className="projektjeink__cardHover">
                <StaticImage
                  src="../images/Eddie_book.jpg"
                  width={300}
                  layout="fullWidth"
                  loading="eager"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Jóga és vegánság"
                  placeholder="blurred"
                />
                <Card.Body className="bodyColor">
                  <Card.Title>
                    <h5>Egy Egyszerű Dolog - könyv</h5>
                  </Card.Title>
                  <br />
                  <Card.Text>
                    <Accordion.Toggle
                      as={Button}
                      variant="primary"
                      eventKey="0"
                    >
                      Bővebben
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <p className="text_align_justify margin-top20">
                        Eddie Stern legújabb{" "}
                        <Link
                          href="https://eddiestern.com/one-simple-thing/"
                          target="_blank"
                        >
                          könyve
                        </Link>{" "}
                        pragmatikus és tömör bevezetés a jóga céljaihoz és
                        előnyeihez. Filozófiai, fiziológiai, mentális és
                        spirituális. Részlet a könyvből:{" "}
                        <Link
                          href="https://bandhaworks.hu/eddie-stern-hol-van-az-elmem/"
                          target="_blank"
                        >
                          Hol van az elmém?
                        </Link>{" "}
                        <Link
                          href="https://bandhaworks.hu/eddie-stern-a-joga-csupan-az-addikcio-egy-mas-formaja/"
                          target="_blank"
                        >
                          A jóga csupán az addikció egy más formája?
                        </Link>
                      </p>
                    </Accordion.Collapse>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion>
            <br />
          </Col>
          <br />
          <Col md={4}>
            <Accordion>
              <Card className="projektjeink__cardHover">
                <StaticImage
                  src="../images/yo_ve_book.jpg"
                  width={300}
                  layout="fullWidth"
                  loading="eager"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Jóga és vegánság"
                  placeholder="blurred"
                />

                <Card.Body className="bodyColor">
                  <Card.Title>Jóga és Vegánság - könyv</Card.Title>
                  <br />
                  <Card.Text>
                    <Accordion.Toggle
                      as={Button}
                      variant="primary"
                      eventKey="0"
                    >
                      Bővebben
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <p className="text_align_justify margin-top20">
                        A Jóga és a Vegánság könyvében{" "}
                        <Link
                          href="https://jivamuktiyoga.com/about-sharon-david/about-sharon-david/"
                          target="_blank"
                        >
                          Sharon Gannon
                        </Link>
                        , a híres Jivamukti Jóga rendszer megalkotója
                        összefoglalja a jóga, a fizikai egészség, a
                        környezetvédelem és az állatvédelem metszéspontjait.
                      </p>
                    </Accordion.Collapse>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion>
            <br />
          </Col>
          <br />
          <Col md={4}>
            <Accordion>
              <Card className="projektjeink__cardHover">
                <StaticImage
                  src="../images/how_to_know.jpg"
                  width={300}
                  layout="fullWidth"
                  loading="eager"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Jóga és vegánság"
                  placeholder="blurred"
                />
                <Card.Body className="bodyColor">
                  <Card.Title>Isten megismerése - könyv</Card.Title>
                  <br />
                  <Card.Text>
                    <Accordion.Toggle
                      as={Button}
                      variant="primary"
                      eventKey="0"
                    >
                      Bővebben
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <p className="text_align_justify margin-top20">
                        Patandzsali Jóga Aforizmái a jóga és a meditáció
                        gyakorlásának egyik fő munkája. Ezeken az ősi
                        aforizmákon keresztül megtudhatja, hogyan irányíthatja
                        elméjét, és hogyan érheti el a belső békét és
                        szabadságot.
                      </p>
                    </Accordion.Collapse>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion>
            <br />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "Eddie_book.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
