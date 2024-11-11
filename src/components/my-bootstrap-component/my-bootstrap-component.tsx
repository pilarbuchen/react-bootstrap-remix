import React from 'react';
import { Button, Card, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyBootstrapComponent = () => {
  return (
    <Container style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Welcome to Codux with React Bootstrap!</h2>

      <Row className="justify-content-center" style={{ marginTop: '20px' }}>
        <Col md="auto">
          <Button variant="primary" size="lg">
            Click Me
          </Button>
        </Col>
        <Col md="auto">
          <Button variant="secondary" size="lg">
            Another Button
          </Button>
        </Col>
      </Row>

      <Row className="justify-content-center" style={{ marginTop: '20px' }}>
        <Col md={4}>
          <Form.Control type="text" placeholder="Enter your text here" />
        </Col>
      </Row>

      <Card style={{ width: '18rem', margin: '20px auto', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Card.Body>
          <Card.Title>Card Header</Card.Title>
          <Card.Text>
            This is some content inside the card. React Bootstrap provides easy-to-use, responsive components.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MyBootstrapComponent;

