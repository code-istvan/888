import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import UvegzsebBevetel from "../components/UvegzsebBevetel"
import UvegzsebKiadas from "../components/UvegzsebKiadas"

export default function Üvegzseb({ data }) {
  return (
    <Layout>
      <Seo title="Üvegzseb" />
      <Container>
        <h1>Üvegzseb</h1>
        <p>
          A Nyolcágú Jóga Alapítvány a bizalom és átláthatóság céljából
          létrehozta az üvegzseb oldalt. Projektjeink, működésünk cashfloja itt
          tekinthető meg.
        </p>
        <br />
        <Row>
          <Col>
            <h3>Bevételeink</h3>
            <UvegzsebBevetel />
          </Col>
          <Col>
            <h3>Kiadásaink</h3>
            <UvegzsebKiadas />
          </Col>
        </Row>

        <p>
          Az alapítvány fenttartási költségeit a kuratórium vezetősége, saját
          bevételeiből finanszírozza.
        </p>
      </Container>
    </Layout>
  )
}
