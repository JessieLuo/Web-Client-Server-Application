import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';
function Suggest() {
    return <div>
        <Navbar bg="light" expand="lg" variant="light">
            <Container>
                <Navbar.Brand>Suggest how much</Navbar.Brand>
            </Container>
        </Navbar>
        <br />
        <Container>
            <Row>
                <Col><p>What is your budget?(This is an esitmate)<br /></p></Col>
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
        <br />
    </div>
}
export default Suggest