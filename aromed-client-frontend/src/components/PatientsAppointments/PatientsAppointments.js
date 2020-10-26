import React, { Component } from 'react'
import { Col, Row, ListGroup } from 'reactstrap';
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose';

import SideBar from '../../components/Sidebar/Sidebar';

import { withAuthorization } from '../Session';
import * as ROLES from '../../constants/roles';

export class PatientsAppointmentsBase extends Component {
    render() {
        return (
            <div className="col-lg-12" >
                <SideBar />
                <div className="container col-lg-10 py-5">
                    <div className="bg-light px-5 py-3" style={{ 'height': '800px' }}>
                        <h3 className="text-center">Upcoming Appointments</h3>
                        <hr className="mb-5" />
                        <Row>
                            <Col md="4" className="text-center">
                                <h4 className="mb-3">Date and Time</h4>
                                <div style={{ 'overflow-y': 'scroll', 'overflow-x': 'hidden' }} className="mb-5">
                                    <ListGroup>
                                    </ListGroup>
                                </div>
                            </Col>
                            <Col md="8" className="px-5">
                                <Row style={{ 'justify-content': 'center' }}>
                                    <h4 className="mb-3">Appointment Details</h4>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

const condition = authUser =>
    authUser && !!authUser.roles[ROLES.PATIENT]

const PatientsAppointments = compose(withRouter, withAuthorization(condition))(PatientsAppointmentsBase);

export default PatientsAppointments