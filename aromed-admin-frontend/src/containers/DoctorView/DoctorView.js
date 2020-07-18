import React, { Component } from 'react'
import { Col, Row, ListGroup, ListGroupItem, FormGroup, Input, Button, Form, Label } from 'reactstrap';

import SideBar from '../../components/Sidebar/Sidebar';

export class DoctorView extends Component {
    render() {
        return (
            <div>
                <SideBar />

                <div className="bg-light row">
                    <div className="col-lg-6" style={{ 'height': '800px' }}>
                        <h3 className="text-left mb-3" style={{ marginLeft: 90 }}>Search</h3>
                        <Form inline>
                            <div className="d-flex justify-content-between mb-8" style={{ marginLeft: 90 }}>
                                <FormGroup className="mb-2 mr-sm-20 mb-sm-20">
                                    <Input type="name" name="docName" id="docName" placeholder="Search by Doctor's Name"/>
                                </FormGroup>
                                <Button className="mb-2 mr-sm-20 mb-sm-20" style={{ marginLeft: 20 }}>Search</Button>
                            </div>
                        </Form>

                        <div style={{ maxWidth: 250, maxHeight: 500, 'overflow-y': 'scroll', 'overflow-x': 'hidden', marginLeft: 90 }}>
                            <ListGroup>
                                <ListGroupItem>Dr.001</ListGroupItem>
                                <ListGroupItem>Dr.002</ListGroupItem>
                                <ListGroupItem>Dr.003</ListGroupItem>
                                <ListGroupItem>Dr.004</ListGroupItem>
                                <ListGroupItem>Dr.005</ListGroupItem>
                                <ListGroupItem>Dr.006</ListGroupItem>
                                <ListGroupItem>Dr.007</ListGroupItem>
                                <ListGroupItem>Dr.008</ListGroupItem>
                                <ListGroupItem>Dr.009</ListGroupItem>
                                <ListGroupItem>Dr.010</ListGroupItem>
                                <ListGroupItem>Dr.011</ListGroupItem>
                                <ListGroupItem>Dr.012</ListGroupItem>
                                <ListGroupItem>Dr.013</ListGroupItem>
                                <ListGroupItem>Dr.014</ListGroupItem>
                                <ListGroupItem>Dr.015</ListGroupItem>
                            </ListGroup>
                        </div>

                        <Button style={{ width: 70, marginLeft: 90, marginRight: 10, marginTop: 20 }}> Create</Button>
                        <Button style={{ width: 70, marginTop: 20 }}> Delete</Button>
                    </div>

                    <div class="col-lg-5">
                        <div className="row">
                            <div class="col-lg-5">
                                <h4>Appointments</h4>
                                <ListGroup>
                                    <ListGroupItem>App No. 12345</ListGroupItem>
                                    <ListGroupItem>App No. 12345</ListGroupItem>
                                    <ListGroupItem>App No. 12345</ListGroupItem>
                                    <ListGroupItem>App No. 12345</ListGroupItem>
                                    <ListGroupItem>App No. 12345</ListGroupItem>
                                </ListGroup>
                            </div>

                            <div class="col-lg-6">
                                <Form>
                                    <FormGroup >
                                        <Label>Name</Label>
                                        <Input type="text" placeholder="Name" />
                                    </FormGroup>

                                    <FormGroup >
                                        <Label>ID</Label>
                                        <Input type="text" placeholder="ID" />
                                    </FormGroup>

                                    <FormGroup >
                                        <Label>Address </Label>
                                        <Input type="text" placeholder="Address" />
                                    </FormGroup>

                                    <FormGroup >
                                        <Label>Phone Number </Label>
                                        <Input type="text" placeholder="Phone Number" />
                                    </FormGroup>

                                    <FormGroup >
                                        <Label>Qualifications</Label>
                                        <Input type="text" placeholder="Qualifications" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label style={{ marginLeft: 50 }} for="specialization">Specialization</Label>
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

                                    <Button variant="primary" type="submit">Submit</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DoctorView