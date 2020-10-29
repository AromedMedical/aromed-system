import React, { Component } from 'react'
import { Container, Row, Col, Form, FormGroup, Input, Button, Card, CardImg, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
import _ from 'lodash';

import SideBar from '../../components/Sidebar/Sidebar';


export class PatientsView extends Component {
    render() {
        return (
            <div className="col-lg-12">
                <SideBar />
                <div className="container py-5">
                    <h3>Accounts</h3>
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

                                <section className="border h-75" style={{ 'overflow-y': 'scroll', 'overflow-x': 'hidden' }}>
                                    <ListGroup>
                                    </ListGroup>
                                </section>

                                <Form className="mt-3">
                                    <Row>
                                        <Col md="6">
                                            <FormGroup>
                                                <Button color="secondary" size="md" block>Create Account</Button>
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <Button color="secondary" size="md" block>Delete Account</Button>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>

                            <Col md="8">
                                <section class="bg-light overflow-auto border h-75">
                                    <div className="p-6">
                                        <Container>
                                            <div>
                                                <Row>
                                                </Row>
                                            </div>
                                        </Container>
                                    </div>
                                </section>

                                <Form className="mt-3">
                                    <Row>
                                        <Col md="6">
                                            <FormGroup>
                                                <Button color="secondary" size="md" block>Create Profile</Button>
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <Button color="secondary" size="md" block>Attach Profile</Button>
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

export default PatientsView