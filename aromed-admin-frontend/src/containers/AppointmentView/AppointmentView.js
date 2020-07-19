import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

export class AppointmentView extends Component {
    render() {
        return (
            <Form>
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
            </Form>
        )
    }
}

export default AppointmentView
