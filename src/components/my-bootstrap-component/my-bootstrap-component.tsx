import React, { useState } from 'react';
import {
    Button,
    Card,
    Form,
    Container,
    Row,
    Col,
    Navbar,
    Nav,
    Alert,
    Modal,
    Badge,
    Accordion,
    ProgressBar,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './my-bootstrap-component.module.scss';

const MyBootstrapAppPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    return (
        <>
            <div className={styles.container}>
                <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
                    <Container>
                        <Navbar.Brand href="#home">My App</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <Container>
                {showAlert && (
                    <Alert variant="info" dismissible onClose={() => setShowAlert(false)}>
                        Welcome to our application! Check out our new features.
                    </Alert>
                )}

                <h2 className="text-center mb-4">Welcome to Our App</h2>

                <Row className="mb-4">
                    <Col md={8}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Get Started</Card.Title>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Check
                                            type="checkbox"
                                            label="Remember me"
                                            name="remember"
                                            checked={formData.remember}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Quick Stats</Accordion.Header>
                                <Accordion.Body>
                                    <p>Progress Overview</p>
                                    <ProgressBar>
                                        <ProgressBar striped variant="success" now={35} key={1} />
                                        <ProgressBar variant="warning" now={20} key={2} />
                                        <ProgressBar striped variant="danger" now={10} key={3} />
                                    </ProgressBar>
                                    <div className="mt-3">
                                        <Badge bg="primary" className="me-2">
                                            New
                                        </Badge>
                                        <Badge bg="secondary" className="me-2">
                                            Updated
                                        </Badge>
                                        <Badge bg="success">Complete</Badge>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Recent Activity</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list-unstyled">
                                        <li>✅ Task 1 completed</li>
                                        <li>🔄 Task 2 in progress</li>
                                        <li>⏳ Task 3 pending</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>

                <Row className="justify-content-center mb-4">
                    <Col md={6} className={styles.container}>
                        <Card className="text-center">
                            <Card.Header>Featured</Card.Header>
                            <Card.Body>
                                <Card.Title>Special Feature</Card.Title>
                                <Card.Text>
                                    Discover our amazing features and boost your productivity today!
                                </Card.Text>
                                <Button variant="outline-primary">Learn More</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                Last updated 3 mins ago
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>

                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Form Submitted</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Thank you for submitting the form! We'll process your information shortly.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>

            <footer className="bg-light text-center text-muted py-4 mt-4">
                <Container>
                    <p>&copy; 2024 My App. All rights reserved.</p>
                </Container>
            </footer>
        </>
    );
};

export default MyBootstrapAppPage;
