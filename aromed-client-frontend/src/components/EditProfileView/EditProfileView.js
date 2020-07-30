import React, { Component } from 'react'
import { Label, InputGroup, InputGroupAddon, InputGroupText, Col, Row, Button, Form, FormGroup, Input } from 'reactstrap';

import SideBar from '../../components/Sidebar/Sidebar';

export class EditProfileView extends Component {
    render() {
        return (
            <div className="col-lg-12">
                <SideBar />
                <div className="container col-lg-5 py-5">
                    <Form className="bg-light px-5 py-3">
                        <h3 className="text-center">Profile Settings</h3>
                        <hr className="mb-5" />
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

                        <FormGroup className="mt-3">
                            <Button className="btn-block">Save Changes</Button>
                        </FormGroup>
                    </Form>
                </div>
            </div >
        )
    }
}

export default EditProfileView;
