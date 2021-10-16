import React from "react";
import InputGroup from 'react-bootstrap/InputGroup'
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";


const OnlineButton = (props) => {
    
    return <div>
        <Container>
            <Row>
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
    </div>
}
export default OnlineButton