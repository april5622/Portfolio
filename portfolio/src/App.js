import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Container className="container">
        <Row className="rows">
          <Col className="columns col-one">About</Col>
          <Col xs={8} className="columns col-two">Projects</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
