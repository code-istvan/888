import * as React from "react"
import Table from "react-bootstrap/Table"

export default function UvegzsebKiadas() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr className="firstLineColor">
          <th></th>
          <th>Dátum</th>
          <th>Megnevezés</th>
          <th>Összeg</th>
        </tr>
      </thead>
      <tbody>
        <tr className="secondLineColor">
          <td>1</td>
          <td>2021.09.07</td>
          <td>Jogdíj</td>
          <td>154.479.-</td>
        </tr>
        <tr className="firstLineColor">
          <td>2</td>
          <td>2021.10.29</td>
          <td>Bírósági illeték</td>
          <td>10.500.-</td>
        </tr>
        <tr className="secondLineColor">
          <td>3</td>
          <td>2021.11.16</td>
          <td>Jogdíj bankköltség térítés</td>
          <td>5.900.-</td>
        </tr>
        <tr className="firstLineColor">
          <td>4</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="secondLineColor">
          <td>5</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="firstLineColor">
          <td>6</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="secondLineColor">
          <td>7</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="firstLineColor">
          <td>8</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="secondLineColor">
          <td>9</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="firstLineColor">
          <td>10</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  )
}
