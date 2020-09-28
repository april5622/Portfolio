import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col className="columns">About</Col>
            <Col className="columns">Projects</Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
