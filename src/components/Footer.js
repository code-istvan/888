import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import "../sass/components/_footer.scss"
import telegram from "..//images/telegram.svg"
import messenger from "..//images/messenger.svg"
import instagram from "..//images/instagram.svg"
import facebook from "..//images/facebook.svg"
import facebook_blue from "..//images/facebook_blue.svg"
import instagram_blue from "..//images/instagram_blue.svg"
import messenger_blue from "..//images/messenger_blue.svg"
import telegram_blue from "..//images/telegram_blue.svg"

const Footer = () => {
  const HoverEventsHandler = e => {
    if (e.target.alt === "facebook") {
      e.target.src = e.type === "mouseenter" ? facebook_blue : facebook
    } else if (e.target.alt === "instagram") {
      e.target.src = e.type === "mouseenter" ? instagram_blue : instagram
    } else if (e.target.alt === "messenger") {
      e.target.src = e.type === "mouseenter" ? messenger_blue : messenger
    } else if (e.target.alt === "telegram") {
      e.target.src = e.type === "mouseenter" ? telegram_blue : telegram
    }
  }

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Container fluid>
      <Row>
        <Col className="footer__first_block">
          <p>
            “A test nehézkes, az elme vibráló, a lélek sugárzó. A jóga
            gyakorlása kibontakoztatja a testben rejlő lehetőséget és a vibráló
            elme szintjére emelik, hogy mindkettő - a vibrálóvá vált test és
            elme - a lélek fénye felé fordulhasson.”
          </p>
          <br />
        </Col>
      </Row>
      <Row className="footer__second_block">
        <Col sm>
          <h6>LEGYÉL A BARÁTUNK</h6>
          <Icons
            url="https://www.facebook.com/nyolcag"
            src={facebook}
            alt="facebook"
            eventHandler={HoverEventsHandler}
          />
          <Icons
            url="https://www.instagram.com/bandhaworks/"
            src={instagram}
            alt="instagram"
            eventHandler={HoverEventsHandler}
          />
          <Icons
            url="http://m.me/nyolcag"
            src={messenger}
            alt="messenger"
            eventHandler={HoverEventsHandler}
          />
          <Icons
            url="https://t.me/@istvan108"
            src={telegram}
            alt="telegram"
            eventHandler={HoverEventsHandler}
          />
        </Col>
        <Col sm>
          <h6>IRATKOZZ FEL HÍRLEVELÜNKRE</h6>

          <>
            <Button className="footer__button" onClick={handleShow}>
              Feliratkozás
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Feliratkozás hírlevélre</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Iratkozz fel hírlevelünkre, hogy elsőként értesülj az
                  alapítványt érintő történésekről. Havonta max. egy hírlevelet
                  küldünk. Harmadik fél számára nem adjuk ki a feliratkozók
                  e-mail címét.
                </p>
                <br />

                <form
                  onSubmit="submit"
                  name="newsletter"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="newsletter" />
                  <div hidden>
                    <input name="bot-field" />
                  </div>
                  <div class="d-grid gap-2">
                    <input
                      className="feliratkozas__inputfield"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="E-mail címed"
                      required
                    />{" "}
                  </div>

                  <div className="d-grid gap-2">
                    <Button
                      className="footer__button-feliratkozas__modal__button"
                      type="submit"
                    >
                      Feliratkozás
                    </Button>
                  </div>
                  <br />
                  <label>
                    <input type="checkbox" required /> Megismertem és elfogadom
                    az
                    <Link href="/adatvedelem"> Adatvédelmi tájékoztatót</Link>,
                    hozzájárulok e-mail címem kezeléséhez.
                  </label>
                </form>
              </Modal.Body>
            </Modal>
          </>
        </Col>
        <Col sm>
          <h6>ADATVÉDELEM</h6>
          <p>
            <Link className="footer__link" href="/adatvedelem">
              Adatvédelmi tájékoztató
            </Link>
            <br />
            Oldaltérkép
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="footer__third_block">
          <p>
            Copyright© 2015-{new Date().getFullYear()} Nyolcágú Jóga Alapítvány
            | Designed by{" "}
            <Link
              className="footer__link"
              href="https://omworks.hu"
              target="_blank"
            >
              OM_Works_Yoga_Creatives
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

const Icons = ({ src, alt, url, eventHandler }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <img
        src={src}
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt={alt}
        onMouseEnter={e => eventHandler(e)}
        onMouseLeave={e => eventHandler(e)}
      />
    </a>
  )
}

export default Footer
