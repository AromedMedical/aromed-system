import React, { Component } from 'react'
import { Card, CardTitle, CardText, CardBody, Button, CardImg, Row, Col, FormGroup, Input, Form } from 'reactstrap';
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose';
import _ from 'lodash';

import { withFirebase } from '../Firebase';
import Images from "../../assets/images";

const INITIAL_STATE = {
    searchName: '',
    searchSpecialization: '',
    doctors: [],
};

export class SearchDoctorBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async componentDidMount() {
        this.props.firebase
            .doctor()
            .on("value", snapshot => {
                if (snapshot.exists()) {
                    const doctorsList = Object.keys(snapshot.val()).map(key => ({
                        ...snapshot.val()[key],
                    }));
                    this.setState({ doctors: doctorsList });
                }
            })
    }

    componentWillUnmount() {
        this.props.firebase.doctor().off();
    }

    renderDoctors = () => {
        const {
            searchName,
            searchSpecialization,
            doctors,
        } = this.state;

        return (
            _.map(doctors, (doctor) => {
                return (
                    <Col md="3" className="p-3">
                        <Card className="h-100 shadow" style={{ 'background': '#FFF', 'color': '#000' }}>
                            <CardImg src={doctor.gender === 'Male' ? Images.MaleDoctor : Images.FemaleDoctor} style={{ objectFit: 'cover' }} />
                            <CardBody>
                                <CardTitle>Dr.{doctor.name}</CardTitle>
                                <CardText>{doctor.specialization}</CardText>
                                <CardText>{doctor.qualifications}</CardText>
                                <hr />
                                <Button className="btn-block">Appointment</Button>
                            </CardBody>
                        </Card>
                    </Col>
                )
            })
        )
    }

    render() {
        const {
            searchName,
            searchSpecialization,
        } = this.state.doctors;

        return (
            <div className="container py-5">
                <Row>
                    <Col xs="6">
                        <h3>Doctors</h3>
                    </Col>
                    <Col xs="auto">
                        <Form inline>
                            <FormGroup>
                                <Input type="select" name="searchSpecialization" id="searchSpecialization" className="mr-3" onChange={this.handlesearchSpecializationChange} valid={searchSpecialization} >
                                    <option className="d-none">Select Specialization</option>
                                    <option>All</option>
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
                                <Input type="name" name="searchName" id="searchName" className="mr-2" onChange={this.handlesearchDocNameChange} placeholder="Search Doctor" value={searchName} />
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

const SearchDoctor = compose(withRouter, withFirebase)(SearchDoctorBase);

export default SearchDoctor
