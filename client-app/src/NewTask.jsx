import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';
function NewTask() {
    return <div>
        <Navbar bg="light" expand="lg" variant="light">
            <Container>
                <Navbar.Brand>New Task</Navbar.Brand>
            </Container>
        </Navbar>
        <br />
        <Container>
            <Row>
                <Col><h3>Select Task Type:</h3></Col>
                <Col>
                    <Container>
                        <Row>
                            <Col>
                                <InputGroup>
                                    <InputGroup.Radio />
                                </InputGroup>
                            </Col>
                            <Col>
                                <p>Inperson</p>
                            </Col>
                            <Col>
                                <InputGroup>
                                    <InputGroup.Radio />
                                </InputGroup>
                            </Col>
                            <Col>
                                <p>Online</p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

        </Container>
        <br/>
    </div>
}


export default NewTask