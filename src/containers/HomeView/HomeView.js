import React, { Component } from 'react'
import _ from 'lodash';
import {
    UncontrolledCarousel,
    Container, Row, Col, Card, CardImg, CardTitle, CardBody, CardText, CardSubtitle
} from 'reactstrap';

export class HomeView extends Component {
    items = [
        {
            src: 'https://anhlaptrinhvien.net/templates/medical/assets/img/slider/slider-1.jpg',
            altText: 'Slide 1',
            key: '1'
        },
        {
            src: 'https://anhlaptrinhvien.net/templates/medical/assets/img/slider/slider-1.jpg',
            altText: 'Slide 2',
            key: '2'
        }
    ];

    doctors = [
        {
            title: '',
            speciality: '',
            qualification: ''
        }
    ]

    details = {
        name: '',
        address: '',
        phone: ''
    }

    departments = [
        {
            title: 'Dental Care',
            description: 'We offer great dental care including cosmetic dental implants and emergency care.'
        },
        {
            title: 'Laboratory',
            description: 'All your analysis will be done in time and on the highest level in our laboratory.'
        },
        {
            title: 'Eye Unit',
            description: 'We have endeavoured to provide you with the best eye care treatment under one roof.'
        },
        {
            title: 'Gastroenterologist',
            description: 'Providing comprehensive care for the diagnosis and treatment of diseases of digestive tract.'
        },
        {
            title: 'Pharmacy',
            description: 'The pharmacy is the one place where all our patients converge at some point.'
        },
        {
            title: 'X-Ray',
            description: 'We assists you in the process of diagnosing health conditions by using the very latest Radiology.'
        },
        {
            title: 'Physiotherapy',
            description: 'Our professionals help people affected disability by providing them with manual therapy. '
        },
        {
            title: 'Ultra Sound Scanning',
            description: 'Ultrasound scans are now available at AromedMedical Center.'
        }
    ]

    services = [
        {
            title: 'Our Services',
            description: 'Patients of AromedMedical enjoy access to the collective expertise of health professionals across our wide range of health services'
        },
        {
            title: 'Vision',
            description: 'We should be concerned not only about the health of individual patients, but also the health of our entire society'
        },
        {
            title: 'Latest Technologies',
            description: 'AromedMedical has all the modern services and equipment necessary to provide all-inclusive health care.'
        }
    ]

    renderInfoCards = () => {
        return (
            <Row>
                <Col md="4" className="p-2">
                    <Card className="h-100" style={{ 'background': '#448AFF', 'color': '#FFF' }}>
                        <CardBody>
                            <CardTitle><p className="font-weight-bold">APPOINTMENTS</p></CardTitle>
                            <CardText>Make a reservation ahead of time to guarantee your spot. You can now make appointments through our website or give us a call.</CardText>
                            <CardText><p className="font-weight-bold">{this.details.phone}</p></CardText>
                        </CardBody>
                    </Card>
                </Col >
                <Col md="4" className="p-2">
                    <Card className="h-100" style={{ 'background': '#448AFF', 'color': '#FFF' }}>
                        <CardBody>
                            <CardTitle><p className="font-weight-bold">DOCTORS TIMETABLE</p></CardTitle>
                            <CardText>Our staff is always available at your service whenever you need us. In case of an emergency, our doctors are always at your service.</CardText>
                        </CardBody>
                    </Card>
                </Col >
                <Col md="4" className="p-2">
                    <Card className="h-100" style={{ 'background': '#448AFF', 'color': '#FFF' }}>
                        <CardBody>
                            <CardTitle><p className="font-weight-bold">OPENING HOURS</p></CardTitle>
                        </CardBody>
                    </Card>
                </Col >
            </Row>
        )
    }

    renderServices = () => {
        return (
            _.map(this.services, (service) => {
                return (
                    <Col md="4" className="p-2">
                        <Card className="h-100 shadow p-2" style={{ 'background': '#FFF', 'color': '#000' }}>
                            <CardBody>
                                <CardTitle className="text-center font-weight-bold">{service.title}</CardTitle>
                                <CardText className="text-justify">{service.description}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                )
            })
        )
    }

    renderDoctors = () => {
        return (
            _.map(this.doctors, (doctor) => {
                return (
                    <Col md="3" className="p-2">
                        <Card className="h-100 shadow" style={{ 'background': '#FFF', 'color': '#000' }}>
                            <CardImg top width="100%" src="https://i.pinimg.com/originals/df/58/9d/df589d8a50f9cc970ac5ef857cbcdebb.jpg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle><p className="font-weight-bold">{doctor.title}</p></CardTitle>
                                <hr />
                                <CardSubtitle>{doctor.speciality}</CardSubtitle>
                                <CardText>{doctor.qualification}</CardText>
                            </CardBody>
                        </Card>
                    </Col >
                )
            })
        )
    }

    renderDepartments = () => {
        return (
            _.map(this.departments, (department) => {
                return (
                    <Col md="3" className="p-2">
                        <Card className="h-100 shadow" style={{ 'background': '#FFF', 'color': '#000' }}>
                            <CardBody>
                                <CardTitle>{department.title}</CardTitle>
                                <CardText>{department.description}</CardText>
                            </CardBody>
                        </Card>
                    </Col >
                )
            })
        )
    }

    render() {
        return (
            <div>
                <div>
                    <UncontrolledCarousel items={this.items} />
                </div>
                <div>
                    <Container>
                        <div className="p-5">
                            {this.renderInfoCards()}
                        </div>
                        <div className="pt-3 pb-1">
                            <h3 className="text-center">Welcome to Aromed Medical and Channeled Consultation Center</h3>
                            <p className="text-center text-muted">We provide the best Health Treatment and Support to everyone</p>
                        </div>
                        <div className="p-5">
                            <Row>
                                {this.renderServices()}
                            </Row>
                        </div>
                    </Container>
                </div>
                <div className="bg-light pt-5 pb-5">
                    <Container>
                        <div className="pb-2">
                            <h3 className="text-center">Professional Team</h3>
                            <p className=" text-center text-muted text-break">With our qualified staff, every person could have the opportunity to receive qualitative medical help.</p>
                        </div>
                        <div className="p-3">
                            <Row>
                                {this.renderDoctors()}
                            </Row>
                        </div>
                    </Container>
                </div>
                <div className="p-5">
                    <Container>
                        <div className="pb-5">
                            <p className=" text-muted text-break">Departments</p>
                            <h3>We provide assistance in various spheres</h3>
                        </div>
                        <div>
                            <Row>
                                {this.renderDepartments()}
                            </Row>
                        </div>
                    </Container>
                </div>
                <footer className="pt-3 mt-5">
                    <div className="bg-dark pt-5">
                        <div className="p-3"></div>
                        <div className="container">
                            <div className="row ">
                                <div className="col-md-4 text-center text-md-left ">
                                    <div className="py-0">
                                        <h3 className="my-4 text-white">{this.details.name}</h3>
                                        <p className="footer-links font-weight-bold">
                                            <a className="text-white mr-2" href="/">Home</a>
                                            <a className="text-white mr-2" href="/">Appointment</a>
                                            <a className="text-white mr-2" href="/">Doctors</a>
                                        </p>
                                        <p className="text-light py-4 mb-4">&copy;2020 All rights reserved</p>
                                    </div>
                                </div>
                                <div className="col-md-4 text-white my-4 text-center text-md-left ">
                                    <span className=" font-weight-bold ">Address</span>
                                    <p className="text-white">{this.details.address}</p>
                                    <span className=" font-weight-bold ">Phone</span>
                                    <p>{this.details.phone}</p>
                                </div>
                                <div className="col-md-4 text-white my-4 text-center text-md-left ">
                                    <span className=" font-weight-bold ">About Us</span>
                                    <p className="text-light" >Our Channeling Centre facilitates in all necessary healthcare and we aim towards a healthy society which is our priority at all costs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default HomeView