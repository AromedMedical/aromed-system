import React, { Component } from 'react'
import { ListGroup, Label, Col, Row, Button, Form, FormGroup, Input } from 'reactstrap';

import SideBar from '../../components/Sidebar/Sidebar';

export class AdminView extends Component {
    render() {
        return (
            <div className="col-lg-12">
                <SideBar />
                <div className="container py-5">
                    <h3>Administrators</h3>
                    <hr />
                    <div className="py-2">
                        <Row>
                            <Col md="4" >
                                <Form>
                                    <Row>
                                        <Col md="8">
                                            <FormGroup>
                                                <Input type="email" name="email" id="email" placeholder="Search by Email Address" />
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
                                    <ListGroup>
                                    </ListGroup>
                                </section>

                                <Form className="m-3">
                                    <Row>
                                        <Button color="secondary" size="md" block>Delete Account</Button>
                                    </Row>
                                </Form>
                            </Col>

                            <Col md="8">
                                <Form className="bg-light px-5 py-3">
                                    <FormGroup>
                                        <Label for="owner">Admin ID</Label>
                                        <Input type="text" name="owneremail" id="owneremail" />
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
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminView