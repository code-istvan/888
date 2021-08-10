import React from "react"
import Table from "react-bootstrap/Table"

export default function AdatvedelemTable() {
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
            Cookie-k révén a honlap működőképességének biztosítása, a
            rendszerbiztonság, illetőleg a felhasználói élmény növelése
          </td>
          <td>
            A GDPR 6. Cikk (1) bekezdés a) pontja - az érintett önkéntes,
            konkrét, tájékoztatáson alapuló és egyértelmű hozzájárulása
          </td>
          <td>IP cím</td>
          <td>
            Munkamenet cookie-k esetén a cookie-k a böngésző bezárásával
            automatikusan törlődnek. Minden egyéb esetben az Alapítvány az Ön
            személyes adatait az adott típusú cookie használatával megvalósított
            cél eléréséig kezeli
          </td>
        </tr>
        <tr>
          <td>Hírlevél küldése</td>
          <td>
            GDPR 6. Cikk (1) bekezdés a) pontja - az érintett önkéntes, konkrét,
            tájékoztatáson alapuló és egyértelmű hozzájárulása
          </td>
          <td>e-mail cím</td>
          <td>
            Az Ön hozzájárulásának visszavonásáig (azaz a Hírlevélről történő
            leiratkozásig), illetve adatai törlésére irányuló kérelme
            kézhezvételéig, vagy a Hírlevél-szolgáltatás megszüntetéséig
          </td>
        </tr>
        <tr>
          <td>Üzenet küldése, kapcsolatfelvétel</td>
          <td>
            GDPR 6. Cikk (1) bekezdés a) pontja - az érintett önkéntes, konkrét,
            tájékoztatáson alapuló és egyértelmű hozzájárulása
          </td>
          <td>név, e-mail cím</td>
          <td>
            Az Ön hozzájárulásának visszavonásáig, illetve adatai törlésére
            irányuló kérelme kézhezvételéig
          </td>
        </tr>
      </tbody>
    </Table>
  )
}
