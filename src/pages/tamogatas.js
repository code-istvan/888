import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Accordion from "react-bootstrap/Accordion"
import { Link } from "gatsby"
import MyPDF from "../images/8ag_egyszazalek.pdf"

export default function Tamogatas() {
  return (
    <Layout>
      <Seo title="Támogátas" />
      <h1>Támogatás</h1>

      <Container className="maincontainer">
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <h3>Adó 1%</h3>
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p>
                      Évente mintegy 10 milliárd forintról nem rendelkeznek az
                      adózók. Ne hagyd bent az 1 százalékot, inkább add oda a
                      Nyolcágú Jóga Alapítványnak és mi jobbá teszzük a világot.
                      Köszönjük mindenkinek, aki úgy dönt, hogy az adója 1%-ával
                      a Nyolcágú Jóga Alapítvány munkáját támogatja. Soha
                      ennyire nem volt még ekkora szükség a jógára a legtöbb
                      ember életében, mint most. Támogasd munkánkat, hogy minnél
                      több emberhez eljuttathassuk ezt a nagyszerű tudomány. Ha
                      az 1% százalékodat a Nyolcágú Jóga Alapítványnak
                      működtetésére vagy projektjeinek támogatására kívánod
                      felajánlani (lásd a
                      <Link href="/projektjeink"> projektjeink</Link>{" "}
                      menüpontban), a személyi jövedelemadó bevallásodban a
                      Nyolcágú Jóga Alapítvány adószámát tüntesd fel.
                    </p>
                    <br />
                    <Card className="taxnumber">
                      <Card.Header as="h3">
                        Nyolcágú Jóga Alapítvány
                      </Card.Header>
                      <Card.Body>
                        <Card.Title as="h1">18734373-1-41</Card.Title>
                        <Card.Text>
                          Ezt a számot írd be a bevallásodba ha szeretnél minket
                          támogatni.
                        </Card.Text>
                        <Button
                          variant="primary"
                          href={MyPDF}
                          download="8ag_egyszazalek.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Adatok letöltése .pdf-be
                        </Button>
                      </Card.Body>
                      <Card.Footer className="text-muted">
                        <b>Köszönjük :-)</b>
                      </Card.Footer>
                    </Card>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    <h3>Projektámogatás</h3>
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the second item's accordion body. Let's imagine this being
                    filled with some actual content.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    <h3>Működés</h3>
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
