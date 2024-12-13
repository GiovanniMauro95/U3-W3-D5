import { Container, Row, Col } from "react-bootstrap"
import MyNavbar from "./component/MyNavbar"
import NewExit from "./component/RecentlyPlayed"
import TopPicks from "./component/TopPicks"

function App() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main>
        <TopPicks />
        <Container>
          <Row>
            <h1>Nuove uscite</h1>
            <Col xs={4} md={2} lg={2}>
              <NewExit artist="bellofigo" />
            </Col>
            <Col xs={4} md={2} lg={2}>
              <NewExit artist="Salmo" />
            </Col>
            <Col xs={4} md={2} lg={2}>
              <NewExit artist="Gigi D'Alessio" />
            </Col>
            <Col xs={4} md={2} lg={2}>
              <NewExit artist="Eminem" />
            </Col>
            <Col xs={4} md={2} lg={2}>
              <NewExit artist="Gorillaz" />
            </Col>
            <Col xs={4} md={2} lg={2}>
              <NewExit artist="Pino Daniele" />
            </Col>
          </Row>
        </Container>
      </main>
      <footer></footer>
    </>
  )
}

export default App
