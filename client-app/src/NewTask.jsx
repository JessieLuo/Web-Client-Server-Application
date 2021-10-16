import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';
import InPersonButton from "./InPersonButton";
import OnlineButton from "./OnlineButton";
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
                        <InPersonButton/>
                        <OnlineButton/>
                    </Container>
                </Col>
            </Row>

        </Container>
        <br />
    </div>
}


export default NewTask