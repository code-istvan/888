import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "react-bootstrap/Button"
import { Row, Col } from "react-bootstrap"

export default function Kapcsolat() {
  return (
    <Layout>
      <Seo title="Kapcsolat" />
      <h1>Kapcsolat</h1>
      <form
        name="contact 8ag"
        method="post"
        data-netlify="true"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact 8ag" />

        <Row>
          <Col>
            <input type="text" name="name" placeholder="Név*" required />
          </Col>
          <Col>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="*"
              placeholder="E-mail cím*"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <textarea name="comments" placeholder="Üzenet*" required></textarea>
          </Col>
        </Row>

        <Button type="submit">Küldés</Button>
      </form>
    </Layout>
  )
}
