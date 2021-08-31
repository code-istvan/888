import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Row, Col } from "react-bootstrap"
// import Card from "react-bootstrap/Card"
import { graphql, Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Accordion from "react-bootstrap/Accordion"
// import { StaticImage } from "gatsby-plugin-image"
// import Image from "react-bootstrap/Image"
import "../sass/components/_projektjeink.scss"

export default function Projektjeink() {
  return (
    <Layout>
      <Seo title="Projektjeink" />

      <Container>
        <h1>Projektjeink</h1>
        <Row>
          <Col>
            <h3>Aktív projektjeink</h3>
          </Col>
        </Row>
        {/* <Row>
          <Col md={4}>
            <Accordion>
              <Card className="projektjeink__cardHover">
                <StaticImage
                  src="../images/Eddie_book.jpg"
                  width={220}
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
          <Col md={4}>
            <Accordion>
              <Card className="projektjeink__cardHover">
                <StaticImage
                  src="../images/yo_ve_book.jpg"
                  width={220}
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
          <Col md={4}>
            <Accordion>
              <Card className="projektjeink__cardHover">
                <StaticImage
                  src="../images/how_to_know.jpg"
                  width={220}
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
        </Row> */}
        <br />
        <Row>
          <Col></Col>
        </Row>

        <Row>
          <Col>
            <div class="card">
              <h5 class="card-header">
                Eddie Stern: One Simple Thing - könyv magyar kiadás
              </h5>
              <div class="card-body">
                <blockquote class="blockquote mb-0">
                  <p>
                    Érezni lehet, hogy az együttérzés átragyogja ennek a
                    könyvnek minden oldalát. Eddie Stern őszinte vágya, hogy
                    mindannyian boldogabbak, egészségesebbek, erősebbek és
                    békésebbek legyünk az életünkben, a jóga tudományának és az
                    évezredes tapasztalat által.
                  </p>
                  <footer class="blockquote-footer">
                    Sharon Salyberger,{" "}
                    <cite title="Source Title">
                      a Lovingkindness és a Real Happiness könyvek szerzője
                    </cite>
                    <br /> <br />
                    <Accordion>
                      <Accordion.Toggle
                        as={Button}
                        variant="primary"
                        eventKey="0"
                      >
                        Bővebben
                      </Accordion.Toggle>{" "}
                      <Button variant="outline-primary" href="/tamogatas">
                        A projekt támogatása
                      </Button>
                      <Accordion.Collapse eventKey="0">
                        <p className="text_align_justify margin-top20">
                          <p>
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
                        </p>
                      </Accordion.Collapse>
                    </Accordion>{" "}
                    <div class="collapse" id="collapseExample">
                      <div class="card card-body"></div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <div class="card">
              <h5 class="card-header">
                Swami Prabhavananda: How to know God - könyv magyar kiadás
              </h5>
              <div class="card-body">
                <p class="card-text">
                  {" "}
                  Patandzsali Jóga Aforizmái a jóga és a meditáció gyakorlásának
                  egyik fő munkája. Ezeken az ősi aforizmákon keresztül
                  megtudhatja, hogyan irányíthatja elméjét, és hogyan érheti el
                  a belső békét és szabadságot.
                </p>
                <Accordion>
                  <Accordion.Toggle as={Button} variant="primary" eventKey="0">
                    Bővebben
                  </Accordion.Toggle>{" "}
                  <Button variant="outline-primary" href="/tamogatas">
                    A projekt támogatása
                  </Button>
                  <Accordion.Collapse eventKey="0">
                    <p className="text_align_justify margin-top20">TESZT</p>
                  </Accordion.Collapse>
                </Accordion>
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <h3>Előkészítés alatt álló projektjeink</h3>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <div class="card">
              <h5 class="card-header">
                Sharon Gannon: Yoga and Veganism - könyv magyar kiadás
              </h5>
              <div class="card-body">
                <p class="card-text">
                  {" "}
                  Patandzsali Jóga Aforizmái a jóga és a meditáció gyakorlásának
                  egyik fő munkája. Ezeken az ősi aforizmákon keresztül
                  megtudhatja, hogyan irányíthatja elméjét, és hogyan érheti el
                  a belső békét és szabadságot.
                </p>
                <Accordion>
                  <Accordion.Toggle as={Button} variant="primary" eventKey="0">
                    Bővebben
                  </Accordion.Toggle>{" "}
                  <Accordion.Collapse eventKey="0">
                    <p className="text_align_justify margin-top20">TESZT</p>
                  </Accordion.Collapse>
                </Accordion>
              </div>
            </div>
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
