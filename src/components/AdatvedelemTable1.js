import React from "react"
import Table from "react-bootstrap/Table"

export default function Adatvedelem1() {
  return (
    <Table bordered hover>
      <tbody>
        <tr>
          <td>
            <strong>Az adatkezelés célja</strong>
          </td>
          <td>
            <strong>Az adatkezelés jogalapja</strong>
          </td>
          <td>
            <strong>Kezelt adatok köre</strong>
          </td>
          <td>
            <strong>Adatmegőrzési idő</strong>
          </td>
        </tr>

        <tr>
          <td>
            Magánszemélytől banki átutalással érkező támogatás (adomány)
            könyvviteli elszámolása
          </td>
          <td>
            GDPR 6. Cikk (1) bekezdés c) pontja – az adatkezelőre vonatkozó jogi
            kötelezettség teljesítése
          </td>
          <td>Név, bankszámlaszám</td>
          <td>
            A számviteli bizonylatok alátámasztásához szükséges adatokat a
            számvitelről szóló 2000. évi C. törvény 169. § (2) bekezdése alapján
            8 évig meg kell őrizni
          </td>
        </tr>

        <tr>
          <td>
            Postai csekk kiküldése támogatás (adomány) juttatásának lehetővé
            tétele céljából
          </td>
          <td>
            GDPR 6. Cikk (1) bekezdés a) pontja – az érintett önkéntes, konkrét,
            tájékoztatáson alapuló és egyértelmű hozzájárulása
          </td>
          <td>Név, lakcím, e-mail cím</td>
          <td>
            Az Ön hozzájárulásának visszavonásáig, illetve adatai törlésére
            irányuló kérelme kézhezvételéig{" "}
          </td>
        </tr>
        <tr>
          <td>
            Postai csekk útján érkező támogatás (adomány) könyvviteli
            elszámolása
          </td>
          <td>
            GDPR 6. Cikk (1) bekezdés c) pontja - az adatkezelőre vonatkozó jogi
            kötelezettség teljesítése
          </td>
          <td>Név, lakcím</td>
          <td>
            A számviteli bizonylatok alátámasztásához szükséges adatokat a
            számvitelről szóló 2000. évi C. törvény 169. § (2) bekezdése alapján
            8 évig meg kell őrizni.
          </td>
        </tr>
        <tr>
          <td>
            Támogató nevének és a támogatás összegének a nyilvánosságra hozatala
          </td>
          <td>
            GDPR 6. Cikk (1) bekezdés a) pontja - az érintett önkéntes, konkrét,
            tájékoztatáson alapuló és egyértelmű hozzájárulása
          </td>
          <td>Név</td>
          <td>
            Az Ön hozzájárulásának visszavonásáig, illetve adatai törlésére
            irányuló kérelme kézhezvételéig{" "}
          </td>
        </tr>
      </tbody>
    </Table>
  )
}
