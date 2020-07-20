import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Label, InputGroup, InputGroupAddon, InputGroupText, Col, Row, Button, Form, FormGroup, Input } from 'reactstrap';

export class ProfileView extends Component {
    render() {
        return (
            <div className="container ProView" style={{ height: 600 }}>
                <Row>
                    <Col md="8">
                        <Form className="bg-light px-5 py-3">
                            <FormGroup>
                                <Label for="owner">Account</Label>
                                <Input type="text" name="owneremail" id="owneremail" placeholder="Enter Account Email" />
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
                    </Col>
                    <Col md="4" className="my-3">
                        <Form>
                            <Row>
                                <Col md="8">
                                    <FormGroup>
                                        <Input type="text" name="AppID" id="AppID" placeholder="Search by App ID" />
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                        <Button color="secondary" size="md" block>Search</Button>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>

                        <section className="border" style={{ 'overflow-y': 'scroll', 'overflow-x': 'hidden', height: 550 }}>
                            <ListGroup></ListGroup>
                        </section>

                        <Form className="mt-3">
                            <Row>
                                <Col md="6">
                                    <FormGroup>
                                        <Button color="secondary" size="md" block>Create</Button>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Button color="secondary" size="md" block>Delete</Button>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ProfileView
