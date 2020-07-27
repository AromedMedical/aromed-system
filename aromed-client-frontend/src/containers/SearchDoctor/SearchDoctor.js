import React, { Component } from 'react'
import _ from 'lodash';
import {Card, CardTitle, CardBody, Button, CardImg, Row, Col,FormGroup,Input,Form} from 'reactstrap';

export class SearchDoctor extends Component {
    Doctors = [
    {   name:'name_1',
        Specialization: 'Specialization_1',
        Qualitifications: 'Qualitifications_1'
    }
    ]

   renderDoctors = () => {
        return (
            _.map(this.Doctors, (Doctor) => {
                return (
                    <Col md="3" className="p-3">
                        <Card className="h-100 shadow" style={{ 'background': '#FFF', 'color': '#000' }}>
                            <CardImg src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png" style={{ objectFit: 'cover' }} />
                            <CardBody>
                                <CardTitle className="text-center" >Dr.{Doctor.name}</CardTitle>
                                <CardTitle className="text-center" >{Doctor.Specialization}</CardTitle>
                                <CardTitle className="text-center" >{Doctor.Qualitifications}</CardTitle>
                                <hr />
                                <Button className="btn-block">Make an Appointment</Button>
                            </CardBody>
                        </Card>
                    </Col>
                )
            })
        )
    }

    render() {
        return (
            <div className="container py-5">
                <Row>
                    <Col xs="6">
                        <h3>Doctors</h3>
                    </Col>
                    <Col xs="auto">
                        <Form inline>
                            <FormGroup>
                                <Input type="select" name="specialization" id="specialization" >
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
                                <Input type="name" name="docName" id="docName" placeholder="Search Doctor"/> 
                            </FormGroup>
                            <FormGroup>
                                <Button color="secondary">Search</Button>{' '}
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <div className="py-4">
                    <Row>
                        {this.renderDoctors()}
                    </Row>
                </div>
            </div>
        )
    }
}  


export default SearchDoctor
