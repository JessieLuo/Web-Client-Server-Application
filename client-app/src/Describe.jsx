import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form'
function Describe() {
    return <div>
        <Navbar bg="light" expand="lg" variant="light">
            <Container>
                <Navbar.Brand>Describe your task to Experts</Navbar.Brand>
            </Container>
        </Navbar>
        <br />
        <Container>
            <Row>
                <Col>
                    <h3>Task Title</h3>
                </Col>
                <Col>
                    <FloatingLabel controlId="floatingTextarea" label="Task Title" className="mb-3">
                        <Form.Control as="textarea" placeholder="Leave a comment here" />
                    </FloatingLabel>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <h3>Description</h3>
                </Col>
                <Col>
                    <FloatingLabel controlId="floatingTextarea2" label="Task Desciption">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </Col>
            </Row>
        </Container>


    </div>
}
export default Describe