import React, { Component } from 'react'
import { Container, Row, Col, Form, FormGroup, Input, Button, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

import SideBar from '../../components/Sidebar/Sidebar';

export class ProfilesView extends Component {

    render() {
        return (  
            <div className="col-lg-12">
            <SideBar />
                <div className="container col-lg- py-5"><div className="px-5 py-2">
                    <Row>
                        <Col sm="12" md={{ size: 5, offset: 4 }}>
                            <h3>Profiles</h3>
                                <Form>
                                    <Row>
                                        <Col md="8">
                                            <FormGroup>
                                                <Input type="text" name="Patient_ID" id="Patient_ID" placeholder="Search by Patient ID" />
                                            </FormGroup>
                                        </Col>
                                        <Col md="4">
                                            <FormGroup>
                                                <Button color="secondary" size="md" block>Search</Button>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>

                            <section class="bg-light col-12 col-md-3 col-lg -3 overflow-auto border mb-sm-2 m-lg-0" style={{ padding: 5, height: 550 }}>     
                            <div class="card">
                                    <div class="card-body">
                                        
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                            
                                    </div>
                                </div>
                            </section>

                            <Form style={{ padding: 10}}>
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
                    </Row>
                </div></div>
            </div>
        )
    }
}

export default ProfilesView