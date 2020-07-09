import React, { Component } from 'react'
import {ListGroup, ListGroupItem,Label, InputGroup, InputGroupAddon, InputGroupText, Col, Row, Button, Form, FormGroup, Input} from 'reactstrap';

import SideBar from '../../components/Sidebar/Sidebar';

export class ProfileView extends Component {
    render() {
        return (
            <div className="col-lg-12" >
                <SideBar />
                <div className="container col-lg-10 py-5">
                    <div className="bg-light px-5 py-3" style={{ 'height': '800px' }}>
                        <Row>
                            <Col md="4">
                                <h4>Appointments</h4>
                                <hr />
                                <Row>
                                    <Col md="6">
                                        <FormGroup>
                                            <Input type="text" name="search" id="search" placeholder="Appointment ID" />
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                        <Button className="btn-block">Search</Button>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <div style={{ 'overflow-y': 'scroll', 'overflow-x': 'hidden' }}>
                                    <ListGroup>
                                    </ListGroup>
                                </div>
                                <Row>
                                    <Col md="6">
                                    <FormGroup className="mt-3">
                                        <Button className="btn-block">Create</Button>
                                    </FormGroup>
                                    </Col>
                                    <Col md="6">
                                    <FormGroup className="mt-3">
                                        <Button className="btn-block">Delete</Button>
                                    </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md="8" className="pl-5">
                                <Row style={{ 'height': '400px' }} >
                                    <Form className="bg-light px-5 py-3">
                                        <FormGroup>
                                            <Label for="owner">Owner</Label>
                                            <Input type="text" name="owneremail" id="owneremail" placeholder="Enter Email" />
                                        </FormGroup>
                                        <Row>
                                            <Col md="6">
                                                <FormGroup>
                                                    <Label for="firstname">First Name</Label>
                                                    <Input type="text" name="firstname" id="firstname" placeholder="Enter First Name" />
                                                </FormGroup>
                                            </Col>
                                            <Col md="6">
                                                <FormGroup>
                                                    <Label for="lastname">Last Name</Label>
                                                    <Input type="text" name="lastname" id="lastname" placeholder="Enter Last Name" />
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <FormGroup>
                                            <Label for="dob">Date of Birth</Label>
                                            <Input type="date" name="dob" id="dob" />
                                        </FormGroup>

                                        <FormGroup>
                                            <Label for="gender">Gender</Label>
                                            <Input type="select" name="gender" id="gender">
                                                <option className="d-none">Select Gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </Input>
                                        </FormGroup>

                                        <FormGroup>
                                            <Label for="address">Address</Label>
                                            <Input type="text" name="address" id="address" placeholder="Enter Address" />
                                        </FormGroup>

                                        <FormGroup>
                                            <Label for="phone">Phone Number</Label>
                                            <Input type="tel" name="phone" id="phone" placeholder="Enter Phone Number" />
                                        </FormGroup>

                                        <Row>
                                            <Col md="6">
                                                <FormGroup>
                                                    <Label for="height">Height</Label>
                                                    <InputGroup>
                                                        <Input type="number" name="height" id="height" placeholder="Height" />
                                                        <InputGroupAddon addonType="append">
                                                            <InputGroupText>cm</InputGroupText>
                                                        </InputGroupAddon>
                                                    </InputGroup>
                                                </FormGroup>
                                            </Col>
                                            <Col md="6">
                                                <FormGroup>
                                                    <Label for="weight">Weight</Label>
                                                    <InputGroup>
                                                        <Input type="number" name="weight" id="weight" placeholder="Weight" />
                                                        <InputGroupAddon addonType="append">
                                                            <InputGroupText>Kg</InputGroupText>
                                                        </InputGroupAddon>
                                                    </InputGroup>
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md="6">
                                            <FormGroup className="mt-3">
                                                <Button className="btn-block">Save</Button>
                                            </FormGroup>
                                            </Col>
                                            <Col md="6">
                                            <FormGroup className="mt-3">
                                                <Button className="btn-block">Delete</Button>
                                            </FormGroup>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileView
