import React, { Component } from 'react'
import { Col, Row, ListGroup, ListGroupItem } from 'reactstrap';

import SideBar from '../../components/Sidebar/Sidebar';

export class PatientsHistory extends Component {
    render() {
        return (
            <div className="col-lg-12" >
                <SideBar />
                <div className="container col-lg-10 py-5">
                    <div className="bg-light px-5 py-3" style={{ 'height': '800px' }}>
                        <h3 className="text-center">Appointment History</h3>
                        <hr className="mb-5" />
                        <Row>
                            <Col md="4">
                                <h4 className="text-center mb-3">Date and Time</h4>
                                <div style={{ 'overflow-y': 'scroll', 'overflow-x': 'hidden' }}>
                                    <ListGroup>
                                    </ListGroup>
                                </div>
                            </Col>
                            <Col md="8" className="pl-5">
                                <Row style={{ 'height': '400px' }} >
                                    <h4 className="text-center mb-3">Appointment Details</h4>
                                </Row>
                                <hr />
                                <Row >
                                    <h5 className="text-center mb-3">Attachments</h5>
                                    <ListGroup horizontal>
                                    </ListGroup>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default PatientsHistory