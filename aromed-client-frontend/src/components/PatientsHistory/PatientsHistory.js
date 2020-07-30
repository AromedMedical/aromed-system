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
                            <Col md="4" className="text-center">
                                <h4 className="mb-3">Date and Time</h4>
                                <div style={{ 'overflow-y': 'scroll', 'overflow-x': 'hidden' }} className="mb-5">
                                    <ListGroup>
                                        <ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
                                        <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
                                        <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
                                    </ListGroup>
                                </div>
                            </Col>
                            <Col md="8" className="px-5">
                                <Row style={{ 'justify-content': 'center' }}>
                                    <h4 className="mb-3">Appointment Details</h4>
                                </Row>
                                <hr />
                                <Row>
                                    <h5 className="mb-3">Attachments</h5>
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