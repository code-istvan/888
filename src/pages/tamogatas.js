import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { Link } from "gatsby"
import MyPDF from "../pdfs/8ag_egyszazalek.pdf"
import MyPDF2 from "../pdfs/8ag_szamlaszam.pdf"
import Accordion from "react-bootstrap/Accordion"
// import facebook from "..//images/facebook.svg"
import "../sass/components/_tamogatas.scss"

export default function Tamogatas() {
  return (
    <Layout>
      <Seo title="Támogátas" />

      <Container className="maincontainer">
        <h1>Támogatás</h1>
        <Row>
          <Col>
            <p>
              Amennyiben szimpatikus számodra tevékenységünk és szeretnéd
              támogatni munkánk, a jóga népszerűsítését, az alábbi módokon tudsz
              részt vállalni küldetésünkben.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Adó 1%</h4>
                <p class="card-text">
                  Támogasd adód 1%-ával munkánkat, a jóga magyarországi
                  népszerűsítését.
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
        <br />
        <Row>
          <Col>
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Projektámogatás</h4>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
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
        <br />
        <Row>
          <Col>
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Jelentkezz önkéntesnek</h4>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
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

        {/* <Row>
          <div className="accordion accordion-flush" id="accordionFlushExample">
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
                  <h4>Adó 1%</h4>
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
                    Köszönjük mindenkinek, aki úgy dönt, hogy az adója 1%-ával a
                    Nyolcágú Jóga Alapítvány munkáját támogatja. Soha ennyire
                    nem volt még ekkora szükség a jógára a legtöbb ember
                    életében, mint most. Támogasd munkánkat, hogy minnél több
                    emberhez eljuttathassuk ezt a nagyszerű tudomány. Ha az 1%
                    százalékodat a Nyolcágú Jóga Alapítványnak működtetésére
                    vagy projektjeinek támogatására kívánod felajánlani (lásd a
                    <Link href="/projektjeink"> projektjeink</Link>{" "}
                    menüpontban), a személyi jövedelemadó bevallásodban a
                    Nyolcágú Jóga Alapítvány adószámát tüntesd fel.
                  </p>
                  <br />
                  <Card className="taxnumber">
                    <Card.Header as="h3">Nyolcágú Jóga Alapítvány</Card.Header>
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
                  <h4>Projektámogatás</h4>
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    Ha valamelyik <Link href="/projektjeink">projektünket</Link>{" "}
                    szeretnéd támogatni az alábbi finanszírozási lehetőségek
                    közűl válaszhatsz.
                  </p>
                  <div className="alert alert-primary" role="alert">
                    Amennyiben szeretnéd, hogy a támogatás (adomány) beérkezését
                    követően a nevedet és a támogatás összegét, vagy csak a
                    nevedet az Alapítvány honlapján nyilvánosságra hozzuk, ehhez
                    hozzájárulásod az
                    <Link href="/adatvedelem"> Adatvédelmi Tájékoztató </Link>
                    II. pontjában foglaltak szerint adhatod meg.
                  </div>
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
                        <hr /> Kérjük, hogy a közleménybe írjátok be a támogatni
                        kívánt <Link href="/projektjeink">projekt</Link> nevét.
                        Vagy ha az általános működésünket szeretnéd támogatni
                        írd be a közleménybe: “általános”. A közlemény nélkül
                        beérkező összegeket alapítványunk alaptevékenységére
                        fordítjuk. Példa: ha a{" "}
                        <Link href="/projektjeink">ONE SIMPLE THING</Link>{" "}
                        projektet szeretné támogatni, a közleménybe ezt írd:
                        “one simple thing”.
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
                      <b>Köszönjük!</b>
                    </Card.Footer>
                  </Card>
                  <br />
                  <Card className="taxnumber">
                    <Card.Header as="h3">Postai befizetés</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <p>
                          Szeretsz postára járni? Postai befizetéssel is tudsz
                          minket támogatni, amihez “sárga csekket” küldünk. Add
                          meg a postacímedet, és már megy is a csekk. Az
                          adományozásra vonatkozóan érdemes tudni, hogy
                          készpénzzel történő csekkbefizetés kapcsán 2018.
                          január 1-től változtak a szabályok. Az esetlegesen
                          elkért személyes adatokat kizárólag a posta kezeli!
                          Ezen a
                          <Link
                            href="https://www.posta.hu/csekkbefizetes_keszpenzzel_valtozo_szabalyok_2018"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {" "}
                            linken
                          </Link>{" "}
                          tájékozódhatsz erről.
                        </p>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Csekk igénylés
                        </button>
                        <div
                          className="modal fade"
                          id="exampleModal"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="exampleModalLabel"
                                >
                                  Postai csekk igénylése
                                </h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <form
                                  className="kapcsolat__inputfield"
                                  name="csekk"
                                  method="post"
                                  data-netlify="true"
                                  onSubmit="submit"
                                  data-netlify-honeypot="bot-field"
                                >
                                  <input
                                    type="hidden"
                                    name="form-name"
                                    value="csekk"
                                  />
                                  <div hidden>
                                    <input name="bot-field" />
                                  </div>{" "}
                                  <input
                                    type="text"
                                    placeholder="Ide írd a családneved*"
                                    name="csaladnev"
                                    // className="InputMassage"
                                    required
                                  />{" "}
                                  <input
                                    type="text"
                                    placeholder="Ide írd a keresztneved*"
                                    name="keresztnev"
                                    required
                                  />{" "}
                                  <input
                                    type="text"
                                    placeholder="Pontos cím, emelet ajtó ha van*"
                                    name="utca"
                                    required
                                  />{" "}
                                  <input
                                    type="text"
                                    placeholder="Irányítószám*"
                                    name="iranyitoszam"
                                    pattern="[0-9]{4}"
                                    maxLength="4"
                                    required
                                  />{" "}
                                  <input
                                    type="text"
                                    placeholder="Város*"
                                    name="varos"
                                    required
                                  />
                                  <textarea
                                    name="message"
                                    className="InputMassage"
                                    placeholder="Kézbesítési információ. Kitöltése nem kötelező."
                                  ></textarea>
                                  <br />
                                  <br />
                                  <div className="d-grid gap-2">
                                    <Button type="submit">Küldés</Button>
                                  </div>
                                  <br />
                                  <label>
                                    <input type="checkbox" required></input>{" "}
                                    Megismertem és elfogadom az{" "}
                                    <Link href="/adatvedelem">
                                      {" "}
                                      Adatvédelmi tájékoztatót
                                    </Link>
                                    , hozzájárulok személyes adataim kezeléséhez
                                  </label>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                      <b>Köszönjük!</b>
                    </Card.Footer>
                  </Card>
                  <br />
                  <Card className="taxnumber">
                    <Card.Header as="h3">PayPal</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        Van PayPal számlád? Adakozz gondtalanul! A{" "}
                        <Link
                          href="https://www.paypal.com/hu/home"
                          target="_blank"
                          rel="noreferrer"
                        >
                          PayPal
                        </Link>{" "}
                        pénzügyi adataid nem osztjuk meg a címzettel. Egyszerű,
                        biztonságos, nyomkövethető és gyors. Ez a funkció
                        jelenleg fejlesztés alatt van.
                      </Card.Text>

                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Fejlesztés alatt"
                        disabled
                      >
                        PayPal adomány
                      </button>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                      <b>Köszönjük!</b>
                    </Card.Footer>
                  </Card>
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
                  <h4>Jelentkezz önkéntesnek</h4>
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>Hamarosan!</p>
                </div>
              </div>
            </div>
          </div>
        </Row>*/}
        <br />
        <br />
        <Row>
          <Col>
            <div class="alert alert-primary" role="alert">
              <h3>Üvegzseb program</h3>
              <p>
                A Nyolcágú Jóga Alapítvány a bizalom és átláthatóság céljából
                létrehozta az üvegzseb oldalt. Projektjeink, működésünk{" "}
                <a href="/uvegzseb" class="alert-link">
                  cashfloja itt tekinthető
                </a>{" "}
                meg.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
