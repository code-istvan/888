import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Adatvedelem() {
  return (
    <Layout>
      <Seo title="Adatvédelmi tájékoztató" />
      <Container className="maincontainer">
        <Row>
          <Col>
            <h1>Adatvédelmi tájékoztató</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <PaddingP> */}
            <h4>Preambulum</h4>
            <p>
              A jelen tájékoztató („<strong>Adatvédelmi Tájékoztató</strong>”)
              célja, hogy rögzítse a <strong>Nyolcágú Jóga Alapítvány</strong>{" "}
              (székhely: 1132 Budapest, Visegrádi u. 80/A 8/2.; nyilvántartási
              szám: 01-09-879437; az „<strong>Alapítvány</strong>”), mint a
              www.nyolcag.hu honlap („Honlap”) tulajdonosa által alkalmazott
              adatvédelmi és adatkezelési elveket, amelyet az Alapítvány mint
              adatkezelő magára nézve kötelező erővel ismer el. Jelen
              Tájékoztató a Honlapon a felhasználók által megadott személyes
              adatok kezelésének elveit tartalmazza, egyben tájékoztatást nyújt
              az érintettek részére személyes adataik kezeléséről. Célja
              továbbá, hogy az Alapítvány részére juttatott pénzbeli támogatások
              adatkezelésével kapcsolatos tájékoztatást az érintettek
              rendelkezésére bocsássa.
            </p>
            <p>
              A Tájékoztató rendelkezései és tartalma az Európai Parlament és a
              Tanács 2016/679 Rendeletében („<strong>GDPR</strong>”)
              foglaltakon, valamint az információs önrendelkezési jogról és az
              információszabadságról szóló 2011. évi CXII. törvény („
              <strong>Infotv.</strong>”) rendelkezésein alapul.
            </p>
            <h4>Az adatkezelő adatai</h4>
            <p>
              Az Ön személyes adatainak kezelése szempontjából az Alapítvány az
              adatkezelő, azaz az Alapítvány felelős az Ön személyes adatainak
              jogszerű kezeléséért.
            </p>
            <p>
              Az alábbi elérhetőségeken veheti fel velünk a kapcsolatot:
              <br />
              <strong>Adatkezelő neve:</strong> Nyolcágú Jóga Alapítvány
              <br />
              <strong>Postacím:</strong> 1132 Budapest, Visegrádi u. 80/A 8/2.
              <br />
              <strong>Nyilvántartási szám:</strong> 01-09-879437
              <br />
              <strong>E-mail cím:</strong> namaste (kukac) nyolcag (pont) hu
              <br />
              <strong>Honlap:</strong>{" "}
              <Link href="https://nyolcag.hu">nyolcag.hu</Link>
              <br />
            </p>
            <h4 className="underline">I. Honlapra vonatkozó adatkezelés</h4>
            <br />
            <h4>
              1. Az adatkezelés rövid bemutatása az egyes adatkezelési
              folyamatok szintjén
            </h4>
            <br />
            <ul>
              <li>
                <h5>Cookie-k (Sütik)</h5>
              </li>
            </ul>
            <p>
              Az Alapítvány a testre szabott kiszolgálás érdekében a felhasználó
              számítógépén kis adatcsomagot (ún. „cookie”-t) helyez el. A cookie
              célja az adott oldal minél magasabb színvonalú működésének
              biztosítása, személyre szabott szolgáltatások biztosítása, a
              felhasználói élmény növelése. A cookie-t a felhasználó képes
              törölni saját számítógépéről, illetve beállíthatja böngészőjét,
              hogy a cookie-k alkalmazását tiltsa. A cookie-k alkalmazásának
              tiltásával a felhasználó tudomásul veszi, hogy cookie nélkül az
              adott oldal működése nem teljes értékű.
            </p>
            <ul>
              <li>
                <h5>Hírlevél</h5>
              </li>
            </ul>
            <p>
              A hírlevél-szolgáltatás nyújtása érdekében az Alapítvány személyes
              adatot (e-mail címet) vesz fel Öntől. Az e-mail cím rögzítése
              elektronikusan történik oly módon, hogy az erre szolgáló panelt a
              felhasználó kitölti, a megjelenő checkbox kipipálásával elfogadja
              az Adatvédelmi Tájékoztatót és egyúttal hozzájárulását adja ahhoz,
              hogy az Alapítvány az e-mail címét Hírlevél küldése céljából
              kezelje, majd a küldés gombra kattint.
            </p>
            <ul>
              <li>
                <h5>Kapcsolatfelvétel</h5>
              </li>
            </ul>
            <p>
              Az Alapítvány a Honlapon általános kapcsolatfelvétel, illetve
              esetlegesen felmerülő kérdések / kérések megválaszolása céljából
              „Kapcsolat” menüpont alatt üzenetküldési lehetőséget biztosít a
              felhasználók részére, amelynek során az érintett a
              kapcsolatfelvételhez szükséges személyes adatait (nevét, e-mail
              címét) köteles megadni. A név, e-mail cím rögzítése elektronikusan
              történik oly módon, hogy az erre szolgáló panelt a felhasználó
              kitölti, a megjelenő checkbox kipipálásával elfogadja az
              Adatvédelmi Tájékoztatót és egyúttal hozzájárulását adja ahhoz,
              hogy az Alapítvány nevét és e-mail címét kapcsolatfelvétel,
              valamint üzenet küldése céljából kezelje, majd a küldés gombra
              kattint.
            </p>
            <h4>2. Az adatkezelés jogalapja</h4>
            <br />
            <p>
              A Honlapon keresztül felvett, illetve ott közzétett személyes
              adatok kezelésének jogalapja minden esetben a GDPR 6. cikk (1)
              bekezdés a) pontjában meghatározottak szerint az Ön, mint érintett
              hozzájárulása. A hozzájárulás minden esetben önkéntes. Ön a
              hozzájárulását bármikor visszavonhatja az namaste (kukac) nyolcag
              (pont) hu e-mail címre küldött, ez irányú kérésével.
              <br />
              <br />
              Az Alapítvány felhívja a figyelmet arra, hogy 16 éven aluli
              személyek nem adhatnak meg magukról személyes adatot, kivéve, ha
              szülőktől, törvényes képviselőtől ehhez engedélyt / hozzájárulást
              kértek. Az ennek való megfelelést az érintett köteles biztosítani,
              és az Alapítványt ezzel összefüggésben felelősség nem terheli.
            </p>
            <h4>
              3. Az általunk gyűjtött személyes adatok, a jogalap, a cél és az
              adatmegőrzési idő megjelölésével <br />
            </h4>
            <br />
            {/* <AdatvedelemTable /> */}
            <br />
            <h4 className="underline">
              II. Támogatásra, adományozásra vonatkozó adatkezelés
            </h4>
            <br />
            <h4>
              1. A támogatásra (adományozásra) vonatkozó egyes adatkezelési
              esetek
            </h4>
            <br />
            <ul>
              <li>
                <h5>Banki átutalás</h5>
              </li>
            </ul>
            <p>
              Az Alapítvány a Honlapon feltüntette bankszámlaszámát annak
              érdekében, hogy a segíteni vágyók egyszeri vagy rendszeres utalás
              útján támogathassák az Alapítvány munkáját.
            </p>
            <ul>
              <li>
                <h5>Postai csekkes befizetés</h5>
              </li>
            </ul>
            <p>
              A segíteni vágyóknak postai csekkes befizetéssel is van
              lehetőségük adományozásra. A csekk igénylése a Honlapon a
              „Kapcsolat” menüpont alatt az üzenetküldési lehetőség
              igénybevételével történhet.{" "}
            </p>
            <ul>
              <li>
                <h5>Támogatók (adományozók) nevének nyilvánosságra hozatala</h5>
              </li>
            </ul>
            <p>
              Amennyiben Ön a namaste (kukac) nyolcag (pont) hu e-mail címre
              küldött levelében egy nyilatkozattalhozzájárul, nevét és a
              támogatás összegét vagy csak nevét feltüntetjük honlapunkon a
              támogatók között. Ön a hozzájárulását bármikor visszavonhatja az
              namaste (kukac) nyolcag (pont) hu e-mail címre küldött, ez irányú
              kérésével.
            </p>
            <br />
            <h4>
              2. Az általunk gyűjtött személyes adatok, és a jogalap és a cél és
              az adatmegőrzési idő megjelölésével
            </h4>
            <br />
            {/* <AdatvedelemTable1 /> */}
            <br />
            <h4 className="underline">
              III. Az Ön jogai és jogorvoslati lehetőségei
            </h4>
            <br />
            <h4>
              1. Milyen jogai vannak Önnek, mint Érintettnek az adataival
              kapcsolatban
            </h4>
            <br />
            <ul>
              <li>
                <h5>Tájékoztatáshoz és hozzáféréshez való jog</h5>
              </li>
            </ul>
            <p>
              Ön jogosult arra, hogy az Alapítványtól kérésére visszajelzést
              kapjon arra vonatkozóan, hogy személyes adatainak kezelése
              folyamatban van-e. Továbbá, ha ilyen adatkezelés folyamatban van,
              jogosult arra, hogy a személyes adatokhoz és a következő
              információkhoz hozzáférést kapjon:
            </p>
            <ul className="abc">
              <li>
                <p>adatkezelés céljai;</p>
              </li>
              <li>
                <p>érintett személyes adatok kategóriái;</p>
              </li>
              <li>
                <p>
                  azon címzettek, akikkel a személyes adatokat az Alapítvány
                  közli vagy közölni fogja (ide értve különösen az
                  adatfeldolgozókat);
                </p>
              </li>
              <li>
                <p>a személyes adatok tárolásának tervezett időtartama;</p>
              </li>
              <li>
                <p>az Ön jogai a személyes adatok kezelése körében;</p>
              </li>
              <li>
                <p>az adatok forrása, amennyiben nem Öntől gyűjtöttük őket;</p>
              </li>
              <li>
                <p>
                  az automatizált döntéshozatal (automata üzenetküldés) tényéről
                  - az alkalmazott logikára és arra vonatkozó érthető
                  információkról, hogy az ilyen adatkezelés milyen jelentőséggel
                  bír, és az érintettre nézve milyen várható következményekkel
                  jár.
                </p>
              </li>
            </ul>
            <p>
              A vonatkozó jogszabályok alapján az Ön személyes adatokról való
              tájékoztatását ingyenesen biztosítjuk. Kérésére egy hónapon belül
              írásban – e-mail útján - válaszolunk.
            </p>
            <ul>
              <li>
                <h5>Helyesbítéshez való jog</h5>
              </li>
            </ul>
            <p>
              Ha az általunk kezelt személyes adatok nem pontosak, akkor az Ön
              kérésére - indokolatlan késedelem nélkül - kijavítjuk őket. Ön
              jogosult arra is, hogy kérje a hiányos személyes adatai
              kiegészítését, az erre vonatkozó nyilatkozata útján.
            </p>
            <ul>
              <li>
                <h5>Törléshez való jog</h5>
              </li>
            </ul>
            <p>
              Az Alapítvány késedelem nélkül törli az érintett személyes
              adatokat, amennyiben:
            </p>
            <ul className="abc">
              <li>
                <p>
                  már nincs szükség a személyes adatokra a meghatározott
                  adatkezelési folyamatok lefolytatása céljából;
                </p>
              </li>
              <li>
                <p>a személyes adatok kezelése jogellenes;</p>
              </li>
              <li>
                <p>
                  Alapítványunkra vonatkozó jogi kötelezettség teljesítése okán
                  szükséges az adatok törlése;
                </p>
              </li>
              <li>
                <p>
                  a 16. életévét be nem töltött gyermek adatainak kezeléséhez a
                  hozzájárulást a gyermek feletti szülői felügyeletet gyakorló
                  személy nem adta meg, illetve nem engedélyezte; (Amennyiben az
                  Alapítvány tudomására jut, hogy 16 év alatti személlyel került
                  kapcsolatba, úgy ésszerű erőfeszítést tesz a szülői
                  felügyeleti jogot gyakorló beleegyezése meglétének
                  ellenőrzésére, illetve ha 16 év alatti személytől a törvényes
                  képviselő hozzájárulása nélkül hozzájárulás-köteles személyes
                  adatok kerültek hozzá, a lehető leghamarabb megteszi az adatok
                  törléséhez szükséges lépéseket.)
                </p>
              </li>
              <li>
                <p>
                  Ön visszavonja az adatkezelés alapját képező hozzájárulását és
                  az adatkezelésnek nincsen más jogalapja.
                </p>
              </li>
            </ul>
            <p>
              Ön is kérheti tőlünk a személyes adatainak törlését a részünkre
              korábban megadott adatkezelési hozzájárulás visszavonásával. Ebben
              az esetben ugyanakkor a szolgáltatásunk további nyújtását
              megtagad(hat)juk. A személyes adatokat törlés helyett zároljuk, ha
              Ön ezt kéri, vagy, ha feltételezhető, hogy a törlés
              befolyásolhatja az Ön jogos érdekeit.
            </p>
            <ul>
              <li>
                <h5>Korlátozáshoz való jog</h5>
              </li>
            </ul>
            <p>
              Az adatkezelés korlátozására abban az esetben kerülhet sor,
              amennyiben:
            </p>
            <ul className="abc">
              <li>
                <p>
                  Ön vitatja adatainak pontosságát; ebben az esetben az adatok
                  helyességének megállapításáig terjedő időtartamra az
                  Alapítvány korlátozza személyes adatainak kezelését;
                </p>
              </li>
              <li>
                <p>
                  az adatkezelés jogellenes és Ön törlés helyett a felhasználás
                  korlátozását kéri;
                </p>
              </li>
              <li>
                <p>
                  az Alapítványnak már nincs szüksége az adatokra, de Ön igényli
                  azokat jogi igények előterjesztéséhez.
                </p>
              </li>
            </ul>
            <p>
              Ha az adatkezelés korlátozás alá esik, az ilyen személyes adatokat
              a tárolás kivételével csak a következő esetekben lehet jogszerűen
              kezelni:
            </p>
            <ul className="abc">
              <li>
                <p>Ön hozzájárul az adatkezeléshez;</p>
              </li>
              <li>
                <p>
                  jogi igények érvényesítéséhez szükséges a személyes adatainak
                  kezelése;
                </p>
              </li>
              <li>
                <p>
                  más természetes vagy jogi személy jogainak védelme érdekében
                  szükségessé válik a személyes adatok kezelése; vagy
                </p>
              </li>
              <li>
                <p>jogszabály közérdekből elrendeli az adatkezelést.</p>
              </li>
            </ul>
            <p>
              Ha az adatkezelés korlátozását kérte, a korlátozás feloldásáról
              Önt az Alapítvány előzetesen tájékoztatja.
            </p>
            <ul>
              <li>
                <h5>Adathordozhatósághoz való jog</h5>
              </li>
            </ul>
            <p>
              Ön jogosult arra, hogy az Önre vonatkozó, az Alapítvány
              rendelkezésére bocsátott személyes adatokat tagolt, széles körben
              használt, géppel olvasható formátumban (pl. .doc vagy .pdf
              formátumban) megkapja. Továbbá jogosult arra, hogy ezeket az
              adatokat egy másik adatkezelőnek továbbítsa anélkül, hogy az
              Alapítvány ezt akadályozná.
            </p>
            <ul>
              <li>
                <h5>Mi történik, és mit tehet, ha elutasítjuk a kérelmét?</h5>
              </li>
            </ul>
            <p>
              Ha az Alapítvány elutasítja az Ön kijavításra, korlátozásra vagy
              törlésre irányuló kérelmét, a kérelem kézhezvételétől számított
              egy hónapon belül írásban tájékoztatjuk Önt arról, hogy miért nem
              tudtuk teljesíteni a kérését, a bírósági jogorvoslati
              lehetőségeiről, valamint arról, hogy bejelentést tehet a Nemzeti
              Adatvédelmi és Információszabadság Hatóságnál. Válaszunkat
              e-mailben küldjük el, ha Ön ebbe beleegyezik.
            </p>
            <h4>
              2. Milyen jogorvoslati lehetőségek állnak az Ön rendelkezésére
            </h4>
            <br />
            <p>
              Ha az Ön megítélése szerint személyes adatainak kezelése során
              Alapítványunk megsérti a GDPR rendelkezéseit, úgy Ön, mint
              érintett jogosult arra, hogy panaszt tegyen egy felügyeleti
              hatóságnál (azaz az EU bármely tagállama által a GDPR 51. cikke
              alapján létrehozott közhatalmi szervnél) – különösen az Ön
              szokásos tartózkodási helye, a munkahelye vagy a feltételezett
              jogsértés helye szerinti tagállamban. Magyarországon a GDPR 51.
              cikkében foglalt kritériumoknak megfelelően létrehozott
              felügyeleti szerv a Nemzeti Adatvédelmi és Információszabadság
              Hatóság (a továbbiakban: „<strong>NAIH</strong>” vagy „
              <strong>Hatóság</strong>”). Ennek megfelelően az alábbi pontban a
              NAIH részére történő panasztétel lehetőségének részleteiről
              tájékoztatjuk.
            </p>
            <ul>
              <li>
                <h5>
                  Bejelentés a Nemzeti Adatvédelmi és Információszabadság
                  Hatósághoz
                </h5>
              </li>
            </ul>
            <p>
              Az adatvédelmi jogszabályok betartását a Nemzeti Adatvédelmi és
              Információszabadság Hatóság felügyeli. Ha Ön úgy ítéli meg, hogy
              az adatkezelésünk nem felel meg a vonatkozó jogszabályoknak, vagy
              ha úgy ítéli meg, hogy ennek közvetlen veszélye fennáll, akkor
              bejelentést tehet a Hatóságnál a következő elérhetőségeken.
            </p>
            <p>
              <strong>Hatóság neve:</strong> Nemzeti Adatvédelmi és
              Információszabadság Hatóság
            </p>
            <p>
              <strong>Cím:</strong> 1055 Budapest, Falk Miksa utca 9-11.
            </p>
            <p>
              <strong>Levelezési cím:</strong> 1363 Budapest, Pf. 9.
            </p>
            <p>
              <strong>E-mail cím:</strong> ugyfelszolgalat (kukac) naih (pont)
              hu
            </p>
            <p>
              <strong>Telefonszám:</strong> +36 1 391 1400
            </p>
            <p>
              <strong>Fax szám: </strong> +36 1 391 1410
            </p>
            <p>
              Adatvédelmi kérdésekkel kapcsolatban további információ található
              a Hatóság honlapján:{" "}
              <Link href="http://naih.hu/">http://naih.hu/</Link>
            </p>
            <p>
              Felhívjuk továbbá a figyelmét arra, hogy Alapítványunk köteles a
              Honlappal kapcsolatos adatvédelmi incidenst (azaz személyes adatok
              véletlen vagy jogellenes megsemmisítését, elvesztését,
              megváltoztatását, jogosulatlan közlését vagy az azokhoz való
              jogosulatlan hozzáférést) indokolatlan késedelem nélkül, és ha
              lehetséges, legkésőbb 72 órával az után, hogy az adatvédelmi
              incidens a tudomására jutott, bejelenteni a Hatóságnak. Ha az
              adatvédelmi incidens valószínűsíthetően magas kockázattal jár az
              érintettek jogaira és szabadságaira nézve, Alapítványunk
              indokolatlan késedelem nélkül tájékoztatja Önt, mint érintettet az
              adatvédelmi incidensről.
            </p>
            <ul>
              <li>
                <h5>Bírósági jogérvényesítés</h5>
              </li>
            </ul>
            <p>
              Ön bírósági jogorvoslatra is jogosult, ha megítélése szerint a
              személyes adatai GDPR-nak nem megfelelő kezelése következtében
              megsértettük a GDPR szerinti jogait. Az Alapítvánnyal szembeni
              eljárást az Alapítvány tevékenységi helye szerinti tagállam
              bírósága előtt kell megindítani. Az ilyen eljárás megindítható az
              érintett szokásos tartózkodási helye szerinti tagállam bírósága
              előtt is. Az ilyen peres eljárás Magyarországon a törvényszék
              hatáskörébe tartozik. A pert az érintett - választása szerint - a
              lakóhelye vagy tartózkodási helye szerint illetékes törvényszék
              előtt is megindíthatja.{" "}
            </p>
            {/* </PaddingP> */}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
