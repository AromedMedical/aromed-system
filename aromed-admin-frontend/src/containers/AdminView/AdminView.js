import React, { Component } from 'react'
import {ListGroup, ListGroupItem,Label, InputGroup, InputGroupAddon, InputGroupText, Col, Row, Button, Form, FormGroup, Input} from 'reactstrap';

import SideBar from '../../components/Sidebar/Sidebar';

export class AdminView extends Component {
    render() {
        return (
            <div className="col-lg-12" >
                <SideBar />
                <div className="container col-lg-10 py-5">
                    <div className="bg-light px-5 py-3" style={{ 'height': '800px' }}>
                        <Row>
                            <Col md="4">
                                <h4>Administrators</h4>
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
                            </Col>
                            <Col md="8" className="pl-5">
                                <Row style={{ 'height': '400px' }} >
                                    <Form className="bg-light px-5 py-3">
                                        <FormGroup>
                                            <Label for="owner">Admin ID</Label>
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
                                            <Label for="email">Email</Label>
                                            <Input type="email" name="email" id="email" placeholder="Enter Email" />
                                        </FormGroup>

                                        <Row>
                                            <Col md="6">
                                            </Col>
                                            <Col md="6">
                                                <FormGroup className="mt-3">
                                                    <Button className="btn-block">Save</Button>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <hr />
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
                                            <Label for="email">Email</Label>
                                            <Input type="email" name="email" id="email" placeholder="Enter Email" />
                                        </FormGroup>

                                        <Row>
                                            <Col md="6">
                                            </Col>
                                            <Col md="6">
                                                <FormGroup className="mt-3">
                                                    <Button className="btn-block">Create</Button>
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

export default AdminView
