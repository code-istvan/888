import React, { useState } from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import "../sass/components/_footer.scss"
import FacebookIcon from "./FacebookIcon"
import InstagramIcon from "./InstagramIcon"
import MessengerIcon from "./MessengerIcon"
import TelegramIcon from "./TelegramIcon"

export default function Footer() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Container fluid className="footer">
      <Row>
        <Col className="footer__first_block">
          <p>
            “Az odaadással végzett astanga gyakorlás által elérhető a fizikai,
            mentális és lelki egészség, amely a szívünkben lévő boldogsághoz
            vezet.”
          </p>
          <br />
        </Col>
      </Row>
      <Row className="footer__second_block">
        <Col sm>
          <h6>LEGYÉL A BARÁTUNK</h6>
          <FacebookIcon url="https://www.facebook.com/nyolcag" />
          <InstagramIcon url="https://www.instagram.com/bandhaworks/" />
          <MessengerIcon url="http://m.me/nyolcag" />
          <TelegramIcon url="https://t.me/@istvan108" />
        </Col>
        <Col sm>
          <h6>IRATKOZZ FEL HÍRLEVELÜNKRE</h6>
          <Button className="footer__button" onClick={handleShow}>
            Feliratkozás
          </Button>
          <br />
          {/* <Modal show={show} onHide={handleClose}> */}
          <Modal show={show}>
            <Modal.Header>
              <Modal.Title>Feliratkozás hírlevélre</Modal.Title>
              <button className="btn-close" onClick={handleClose}></button>
            </Modal.Header>
            <Modal.Body>
              <p>
                Iratkozz fel hírlevelünkre, hogy elsőként értesülj az
                alapítványt érintő történésekről. Havonta max. egy hírlevelet
                küldünk. Harmadik fél számára nem adjuk ki a feliratkozók e-mail
                címét.
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
                  <input type="checkbox" required /> Megismertem és elfogadom az
                  <Link href="/adatvedelem"> Adatvédelmi tájékoztatót</Link>,
                  hozzájárulok e-mail címem kezeléséhez.
                </label>
              </form>
            </Modal.Body>
          </Modal>
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
