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
import Alert from "react-bootstrap/Alert"

export default function Tamogatas() {
  return (
    <Layout>
      <Seo title="Támogátas" />
      <h1>Támogatás</h1>

      <Container className="maincontainer">
        <Row>
          <Col>
            <h1>Adó 1%</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Évente mintegy 10 milliárd forintról nem rendelkeznek az adózók.
              Ne hagyd bent az 1 százalékot, inkább add oda a Nyolcágú Jóga
              Alapítványnak és mi jobbá teszzük a világot. Köszönjük
              mindenkinek, aki úgy dönt, hogy az adója 1%-ával a Nyolcágú Jóga
              Alapítvány munkáját támogatja. Soha ennyire nem volt még ekkora
              szükség a jógára a legtöbb ember életében, mint most. Támogasd
              munkánkat, hogy minnél több emberhez eljuttathassuk ezt a
              nagyszerű tudomány. Ha az 1% százalékodat a Nyolcágú Jóga
              Alapítványnak működtetésére vagy projektjeinek támogatására
              kívánod felajánlani (lásd a
              <Link href="/projektjeink"> projektjeink</Link> menüpontban), a
              személyi jövedelemadó bevallásodban a Nyolcágú Jóga Alapítvány
              adószámát tüntesd fel.
            </p>
          </Col>
        </Row>
        {/* <Row className="justify-content-md-center">
        <Col className="justify"> */}
        {/* <Row>
          <Col>
            <Alert variant="primary">
              <Alert.Heading>FONTOS INFORMÁCIÓ!</Alert.Heading>
              <PaddingP>
                <strong>2020-03-05.</strong> Többen jeleztétek, hogy gond van az
                1% felajánlásával. Utánanéztük és valóban sajnos egy technikai
                “malőr” miatt a <strong>2020</strong>-as évi bevallásban nem
                tudjátok felajánlani adótok 1%-át a Nyolcágú Jóga Alapítványak
                🙁 <strong>Hálás köszönet mindenkinek aki megpróbálta!</strong>{" "}
                Erről a{" "}
                <Link
                  href="https://nav.gov.hu/nav/szja1_1/regisztralt_civil_2021"
                  target="_blank"
                >
                  listáról
                </Link>{" "}
                tudtok választani mást helyettünk.
              </PaddingP>
            </Alert>
          </Col>
        </Row> */}
        <Row>
          <Col>
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
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
