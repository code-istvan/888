import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { Link } from "gatsby"
import MyPDF from "../images/8ag_egyszazalek.pdf"
import MyPDF2 from "../images/8ag_szamlaszam.pdf"

export default function Tamogatas() {
  return (
    <Layout>
      <Seo title="Támogátas" />
      <h1>Támogatás</h1>

      <Container className="maincontainer">
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
                    <Row>
                      <Col>
                        <p>
                          Ha valamelyik{" "}
                          <Link href="/projektjeink">projektünket</Link>{" "}
                          szeretnéd támogatni az alábbi finanszírozási
                          lehetőségek közűl válaszhatsz.
                        </p>
                      </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                      <Col className="justify">
                        <div className="alert alert-primary" role="alert">
                          Amennyiben szeretnéd, hogy a támogatás (adomány)
                          beérkezését követően a nevedet és a támogatás
                          összegét, vagy csak a nevedet az Alapítvány honlapján
                          nyilvánosságra hozzuk, ehhez hozzájárulásod az
                          <Link href="/adatvedelem">
                            {" "}
                            Adatvédelmi Tájékoztató{" "}
                          </Link>
                          II. pontjában foglaltak szerint adhatod meg.
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Card className="taxnumber">
                          <Card.Header as="h3">Banki átutalás</Card.Header>
                          <Card.Body>
                            <Card.Text>
                              Budapest Bank (forint alapú bankszámla)
                            </Card.Text>
                            <Card.Title as="h1">
                              10103104-54928200-01004009
                            </Card.Title>
                            <Card.Text>
                              Kedvezményezett neve: Nyolcágú jóga alapítvány
                              <hr /> Kérjük, hogy a közleménybe írjátok be a
                              támogatni kívánt{" "}
                              <Link href="/projektjeink">projekt</Link> nevét.
                              Vagy ha az általános működésünket szeretnéd
                              támogatni írd be a közleménybe: “általános”. A
                              közlemény nélkül beérkező összegeket alapítványunk
                              alaptevékenységére fordítjuk. Példa: ha a{" "}
                              <Link href="/projektjeink">ONE SIMPLE THING</Link>{" "}
                              projektet szeretné támogatni, a közleménybe ezt
                              írd: “one simple thing”.
                            </Card.Text>
                            <Button
                              variant="primary"
                              href={MyPDF2}
                              download="8ag_szamlaszam.pdf"
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
                      </Col>
                    </Row>
                    <br />
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
