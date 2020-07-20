import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Label, InputGroup, InputGroupAddon, InputGroupText, Col, Row, Button, Form, FormGroup, Input } from 'reactstrap';

import SideBar from '../../components/Sidebar/Sidebar';
import AppointmentView from '../AppointmentView/AppointmentView'

export class AdminView extends Component {
    render() {
        return (
            <div className="col-lg-12">
                <SideBar />
                <div className="container py-5">
                    <h3>Appointments</h3>
                    <hr />
                    <div className="py-2">
                        <Row>
                            <Col md="4" >
                                <Form>
                                    <Row>
                                        <Col md="8">
                                            <FormGroup>
                                                <Input type="email" name="email" id="email" placeholder="Search by App ID" />
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
                            <Col md="8">
                                <div className="px-3 py-3 border" style={{ 'overflow-y': 'scroll', 'overflow-x': 'scroll' }}>
                                    <AppointmentView />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminView