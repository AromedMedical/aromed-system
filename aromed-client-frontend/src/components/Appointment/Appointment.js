import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'

export class Appointment extends Component {
    render() {
        return (
            <div className="container" style={{ height: 600 }}>
                <Form className="bg-light px-5 py-3">
                    <FormGroup>
                        <Label for="patientName">Patient</Label>
                        <Input type="text" name="patientName" id="patientName" placeholder="Patient Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="doctorName">Doctor</Label>
                        <Input type="select" name="doctorName" id="doctorName" placeholder="Select Doctor" >
                            <option className="d-none">Select Doctor</option>
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
                        <Label for="appDate">Date</Label>
                        <Input type="date" name="appDate" id="appDate" placeholder="Select Date" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="appTime">Time</Label>
                        <Input type="select" name="appTime" id="appTime" placeholder="Select Time" >
                            <option className="d-none">Select Time</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="RoomNo">Room Number</Label>
                        <Input type="select" name="RoomNo" id="RoomNo" placeholder="Select Room No" >
                            <option className="d-none">Select Room No</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="token">Token Number</Label>
                        <Input type="number" name="token" id="token" placeholder="Token Number" >
                            <option className="d-none">Select Time</option>
                        </Input>
                    </FormGroup>
                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <Button className="btn-block">Save</Button>
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Button className="btn-block">Delete</Button>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

export default Appointment
