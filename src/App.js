import './css/App.scss';
import {Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <Container>
      <Row>
        <Col xs={6}>test</Col>
        <Col xs={6}>test</Col>
      </Row>
      <Row>
        <Col xs={12}>test</Col>
      </Row>
    </Container>
  );
}

export default App;
