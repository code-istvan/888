import React from "react"
import Button from "react-bootstrap/Button"

function ActiveProjectOne() {
  return (
    <div className="card card-hover">
      <h5 className="card-header">
        Eddie Stern: One Simple Thing - könyv magyar kiadás
      </h5>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>
            Érezni lehet, hogy az együttérzés átragyogja ennek a könyvnek minden
            oldalát. Eddie Stern őszinte vágya, hogy mindannyian boldogabbak,
            egészségesebbek, erősebbek és békésebbek legyünk az életünkben, a
            jóga tudományának és az évezredes tapasztalat által.
          </p>
          <footer className="blockquote-footer">
            Sharon Salyberger,{" "}
            <cite title="Source Title">
              a Lovingkindness és a Real Happiness könyvek szerzője
            </cite>
            <br /> <br />
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
          </footer>
        </blockquote>
      </div>
    </div>
  )
}

export default ActiveProjectOne
