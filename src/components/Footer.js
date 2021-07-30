import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"
import Container from "react-bootstrap/Container"
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

  return (
    <Container fluid>
      <Row>
        <Col className="backgroundColorTop">
          <p>
            “A test nehézkes, az elme vibráló, a lélek sugárzó. A jóga
            gyakorlása kibontakoztatja a testben rejlő lehetőséget és a vibráló
            elme szintjére emelik, hogy mindkettő - a vibrálóvá vált test és
            elme - a lélek fénye felé fordulhasson.”
          </p>
          <br />
        </Col>
      </Row>
      <Row className="backgroundColor">
        {/* <Row xs={1} md={2} lg={3} className='backgroundColor'> */}
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
          <h6>HÍRLEVÉL</h6>
          <p>Ide jön majd a form</p>
        </Col>
        <Col sm>
          <h6>ADATVÉDELEM</h6>
          <p>
            <Link className="omworks" href="/adatvedelem">
              Adatvédelmi tájékoztató
            </Link>
            <br />
            Oldaltérkép
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="backgroundColor2">
          <p>
            Copyright© 2015-{new Date().getFullYear()} Nyolcágú Jóga Alapítvány
            | Designed by{" "}
            <Link className="omworks" href="https://omworks.hu" target="_blank">
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
