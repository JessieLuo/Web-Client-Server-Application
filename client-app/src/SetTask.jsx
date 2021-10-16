import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form'
import SuburbText from "./SuburbText";



const SetTask = (props) => {

    return <div>
        <onButton/>
        <Navbar bg="light" expand="lg" variant="light">
            <Container>
                <Navbar.Brand>Setting up your tasks</Navbar.Brand>
            </Container>
        </Navbar>
        <br />
        <Container>
            <p style={{ textAlign: "center" }}>This section is designed based on the type
                of the task. It could be developed by conditional rendering.
                For an in-person task, both suburb and date would be appeared.
                For an online task, only date would be appeared.</p>
        </Container>
        <Container>
            <SuburbText />
            <br />
            <Row>
                <Col>
                    <h3>Date</h3>
                </Col>
                <Col>
                    <FloatingLabel controlId="floatingTextarea2" label="Enter a date">
                        <Form.Control
                            as="textarea"
                            placeholder="Enter the date"
                        />
                    </FloatingLabel>
                </Col>
            </Row>
        </Container>
    </div>
}
export default SetTask