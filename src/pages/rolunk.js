import React from "react"
import "../sass/components/_rolunk.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Row, Col } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import { Link } from "gatsby"

export default function Rolunk() {
  return (
    <Layout>
      <Seo title="Rólunk" />
      <h1>Nyolcágú jóga alapítvány</h1>
      <Row>
        <Col>
          <p>
            Alapítványunk célja, hogy a jóga elméletét és gyakorlatát minél
            szélesebb körben népszerűsítse Magyarországon. Az Indiából
            eredeztethető jóga már évezredek óta segíti az embereket a testi és
            lelki egészség elérésében és megőrzésében. Áldásos hatásai ma már
            minden kétségen felül bizonyítottak, gyakorlóinak nem csupán fizikai
            kondícióját és általános egészségi állapotát javítja, hanem egy
            komplex hatásmechanizmus révén segíti őket abban, hogy az élet többi
            területén is könnyen megállják a helyüket, boldogan és
            kiegyensúlyozottan éljenek. Technikái sikeresen beilleszthetők a
            mai, modern életvitelbe is. Számos kiváló könyvet írtak a témában,
            amelyek jelentős része sajnos magyar nyelven egyelőre nem
            hozzáférhető. Az Alapítvány a jóga gyakorlati és elméleti-filozófiai
            ismeretanyaga népszerűsítésének célkitűzését és abban való
            szerepvállalását az alábbi tevékenységekkel, módokon és eszközökkel
            kívánja megvalósítani:
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <li>
              a fő hangsúlyt a közvetlen, gyakorlati oktatásra helyezzük
              rendezvények, workshopok és tematikus tréningek tartásával;
            </li>
            <li>
              idegen nyelven megjelent szakirodalom fordítása és terjesztése;
            </li>
            <li>
              a jóga gyakorlásával, vagy elméletével összefüggő eredeti szerzői
              művek létrehozásának és terjesztésének támogatása;
            </li>
            <li>
              a jóga iránt érdeklődést és elkötelezettséget mutató, de anyagi
              körülményeik miatt a gyakorlás elmélyítésére, vagy a szakirodalom
              beszerzésére megfelelő lehetőségekkel nem bíró tanítványok
              segítése, számukra szisztematikus, ingyenes jógaoktatási rendszer
              kiépítése;
            </li>
            <li>
              konferenciák, előadások szervezése és megtartása neves hazai és
              külföldi szakemberek részvételével, egyéb eszmecserék tartása a
              védikus kultúra és a jóga elméleti-filozófiai aspektusainak
              megismertetésére, mely elősegíti a jógikus életmód kialakítását;
            </li>
            <li>jóga szakkönyvtár létrehozása;</li>
            <li>
              a jógikus életmód iránt érdeklődők számára rendszeres
              összejövetelek, eszmecserék lehetőségének kialakítása klubszerű
              működési formában;
            </li>
            <li>
              ösztöndíjak, külföldi tréningek és/vagy tanulmányok támogatása,
              és/vagy külföldi szaktekintélyek Magyarországra látogatásának
              megszervezése és finanszírozása a fentebb megfogalmazott célok
              megvalósításával összefüggésben.
            </li>
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col md={4}>
          <Card className="rolunk__cardHover">
            <Card.Header>
              <b>Alapítás éve</b>
            </Card.Header>
            <ListGroup variant="flush" className="rolunk__card__padding">
              <ListGroup.Item>2015.</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="rolunk__cardHover">
            <Card.Header>
              <b>Adószám</b>
            </Card.Header>
            <ListGroup variant="flush" className="rolunk__card__padding">
              <ListGroup.Item>18734373-1-41</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="rolunk__cardHover">
            <Card.Header>
              <b>Nyilvántartási szám</b>
            </Card.Header>
            <ListGroup variant="flush" className="rolunk__card__padding">
              <ListGroup.Item>01-09-879437</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <Card className="rolunk__cardHover">
            <Card.Header>
              <b>Székhely</b>
            </Card.Header>
            <ListGroup variant="flush" className="rolunk__card__padding">
              <ListGroup.Item>
                1132. Budapest <br /> Visegrádi u. 80/A 8/2.
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="rolunk__cardHover">
            <Card.Header>
              <b>IBAN / SWIFT</b>
            </Card.Header>
            <ListGroup variant="flush" className="rolunk__card__padding">
              <ListGroup.Item>
                HU81-10103104-54928200-01004009
                <br />
                BUDAHUHB
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="rolunk__cardHover">
            <Card.Header>
              <b>Bankszámlaszám</b>
            </Card.Header>
            <ListGroup variant="flush" className="rolunk__card__padding">
              <ListGroup.Item>
                Budapest Bank
                <br />
                10103104-54928200-01004009
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <Card className="rolunk__cardHover">
            <Card.Header>
              <b>A kuratórium elnöke</b>
            </Card.Header>
            <ListGroup variant="flush" className="rolunk__card__padding">
              <ListGroup.Item>
                <Link
                  href="https://bandhaworks.hu/pages/team/team-member/szalai-istvan/"
                  target="_blank"
                >
                  Szalai István
                </Link>
                <br />
                astanga jóga gyakorló/oktató
                <br />
                <Link href="https://bandhaworks.hu" target="_blank">
                  bandhaworks.hu
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="rolunk__cardHover">
            <Card.Header>
              <b>Kuratóriumi tag</b>
            </Card.Header>
            <ListGroup variant="flush" className="rolunk__card__padding">
              <ListGroup.Item>
                Krébesz Andrea
                <br />
                astanga jóga gyakorló/oktató
                <br />
                <Link href="https://bandhaworks.hu" target="_blank">
                  bandhaworks.hu
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="rolunk__cardHover">
            <Card.Header>
              <b>Kuratóriumi tag</b>
            </Card.Header>
            <ListGroup variant="flush" className="rolunk__card__padding">
              <ListGroup.Item>
                Bimba András Imre
                <br />
                astanga jóga gyakorló/oktató
                <br />
                <Link href="https://bandhaworks.hu" target="_blank">
                  bandhaworks.hu
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <br />
      <Row className="justify-content-md-center">
        <Col md={4}>
          <Card className="rolunk__cardHover">
            <Card.Header>
              <b>Alapítványunk jogásza</b>
            </Card.Header>
            <ListGroup variant="flush" className="rolunk__card__padding">
              <ListGroup.Item>
                Dr. Kővári Zsuzsa
                <br />
                astanga jóga gyakorló
                <br />
                <Link href="https://bandhaworks.hu" target="_blank">
                  bandhaworks.hu
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <br />
    </Layout>
  )
}
