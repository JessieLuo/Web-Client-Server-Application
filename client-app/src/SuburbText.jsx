import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import './suburb.css'*/


const SuburbText = (props) => {

    return <div /*class="suburb"*/>
        <Row>
            <Col>
                <h3>Suburb</h3>
            </Col>
            <Col>
                <FloatingLabel controlId="floatingTextarea" label="Enter a suburb" className="mb-3">
                    <Form.Control as="textarea" placeholder="Enter a suburb" />
                </FloatingLabel>
            </Col>
        </Row>
    </div>

}

export default SuburbText;
