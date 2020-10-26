import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import Calendar from 'react-calendar'
import { compose } from 'recompose';

import { withAuthorization } from '../Session';
import * as ROLES from '../../constants/roles';

import 'react-calendar/dist/Calendar.css';

export class CreateAppointmentBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    renderName = () => {
        return (
            <option></option>
        )
    }

    renderTime = () => {
        return (
            <option></option>
        )
    }

    render() {
        return (
            <div className="container col-lg-10 my-3 min-vh-100 d-flex flex-column justify-content-center">
                <Form className="bg-light p-5">
                    <h3 className="text-center">Create Appointment</h3>
                    <hr className="mb-5" />
                    <Row>
                        <Col md="5" className="p-1">
                            <div className="mt-1 d-flex justify-content-center">
                                <Calendar minDate={this.state.date} />
                            </div>
                        </Col>
                        <Col md="7">
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="select" name="name" id="name" placeholder="Name" >
                                    <option className="d-none">Select Doctor</option>
                                    {this.renderName()}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="specialization">Specialization</Label>
                                <Input type="select" name="specialization" id="specialization">
                                    <option className="d-none">Select Specialization</option>
                                    <option>Podiatrist</option>
                                    <option>General Practitioner</option>
                                    <option>Pediatrician</option>
                                    <option>Endocrinologist</option>
                                    <option>Neurologist</option>
                                    <option>Rheumatologist</option>
                                    <option>Allergist/Immunologist</option>
                                    <option>Psychiatrist</option>
                                    <option>Nephrologist</option>
                                    <option>OB/GYN</option>
                                    <option>Pulmonologist</option>
                                    <option>Surgeon</option>
                                    <option>Emergency Physician</option>
                                    <option>Ophthalmologist</option>
                                    <option>Oncologist</option>
                                    <option>Urologist</option>
                                    <option>Otolaryngologist</option>
                                    <option>Anesthesiologist</option>
                                    <option>Dermatologist</option>
                                    <option>Radiologist</option>
                                    <option>Gastroenterologist</option>
                                    <option>Cardiologist</option>
                                    <option>Orthopedist</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="availableTime">Available Time</Label>
                                <Input type="select" name="availableTime" id="availableTime" placeholder="Select Time" >
                                    <option className="d-none">Select Time</option>
                                    {this.renderTime()}
                                </Input>
                            </FormGroup>
                            <FormGroup className="mt-5">
                                <Button className="btn-block">Create Appointment</Button>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

const condition = authUser =>
    authUser && !!authUser.roles[ROLES.PATIENT]

const CreateAppointment = compose(withRouter, withAuthorization(condition))(CreateAppointmentBase);

export default CreateAppointment