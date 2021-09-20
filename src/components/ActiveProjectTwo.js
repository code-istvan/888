import React from "react"
import Button from "react-bootstrap/Button"

function ActiveProjectTwo() {
  return (
    <div className="card card-hover">
      <h5 className="card-header">
        Swami Prabhavananda: How to know God - könyv magyar kiadás
      </h5>
      <div className="card-body">
        <p className="card-text">
          {" "}
          Patandzsali Jóga Aforizmái a jóga és a meditáció gyakorlásának egyik
          fő munkája. Ezeken az ősi aforizmákon keresztül megtudhatja, hogyan
          irányíthatja elméjét, és hogyan érheti el a belső békét és
          szabadságot.
        </p>
        <Button variant="primary" href="/projektjeink">
          Bővebben
        </Button>{" "}
        <Button
          variant="outline-primary"
          href="/tamogatas"
          className="index__button__padding-top"
        >
          A projekt támogatása
        </Button>
      </div>
    </div>
  )
}

export default ActiveProjectTwo
