import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TipCard from './TipCard';
import BackSquares from './Squares'


function App() {
  return (
    <div className="App">
      <BackSquares/>
      <div class="title">
          <h1>Just the tip</h1>
      </div>
      <Container class="tip-container">
      <Row>
        <Col sm>
          <TipCard image="https://i.imgur.com/Cz2N2o0.png" name="DJ Aunt Joody" link="auntjoody"/>
        </Col>
        <Col sm>
          <TipCard image="https://i.imgur.com/XYneRn1.png" name="DJ Dark Wiley" link="keyes_w"/>
        </Col>
        <Col sm>
          <TipCard image="https://i.imgur.com/TWbWoR5.png" name="Betty Wetter" link="bettywetter"/>
        </Col>
        <Col sm>
          <TipCard image="https://i.imgur.com/0z2uvXA.png" name="Miss Texas 1988" link="misstexas1988"/>
        </Col>
        <Col sm>
          <TipCard image="https://i.imgur.com/h9gCnvu.png" name="Moscato Sky" link="moscatosky"/>
        </Col>
        <Col sm>
          <TipCard image="https://i.imgur.com/eSJUFQn.png" name="Queen Andrew Scott" link="queenandrew"/>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
