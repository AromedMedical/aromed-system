import React, { Component } from 'react'
import { Container, Row, Col, Form, FormGroup, Input, Button, Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import _ from 'lodash';

import SideBar from '../../components/Sidebar/Sidebar';


export class PatientsView extends Component {

    Profiles = [
        {name:'Patient_1'},
        {name:'Patient_2'},
        {name:'Patient_3'}
    ]

    renderProfiles = () => {
        return (
            _.map(this.Profiles, (profile) => {
                return (
                    <Col md="6" className="p-2">
                        <Card className="h-100 shadow" style={{ 'background': '#FFF', 'color': '#000' }}>
                            <CardImg src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png" style={{ objectFit: 'cover' }} />
                            <CardBody>
                                <CardTitle className="text-center" >{profile.name}</CardTitle>
                                <hr />
                                <Button className="btn-block">View</Button>
                                <Button className="btn-block">Deatach</Button>
                            </CardBody>
                        </Card>
                    </Col>                   
                )
            })
        )
    }



    render() {
        return (  
            <div className="col-lg-12">
            <SideBar />
                <div className="container col-lg- py-5">
                    <Row>
                        <Col md="4">
                            <h3>Accounts</h3>
                                <Form>
                                    <Row>
                                        <Col md="8">
                                            <FormGroup>
                                                <Input type="text" name="email" id="email" placeholder="Search by Email" />
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
                                        <Button color="secondary" size="md" block>Create Account</Button>
                                    </Col>
                                    <Col md="6">
                                        <Button color="secondary" size="md" block>Delete Account</Button>
                                    </Col>
                                </Row>    
                            </Form>
                        </Col>

                        <Col md="6"> 
                            <section class="bg-light col-12 col-md-3 col-lg -3 overflow-auto border mb-sm-2 m-lg-0" style={{ padding: 5, height: 700 }}>
                                <Form style={{ padding: 10}}>
                                    <Row>
                                        <Col md="6">
                                            <Button color="secondary" size="md" block>Create</Button>
                                        </Col>
                                        <Col md="6">
                                            <Button color="secondary" size="md" block>Attach</Button>
                                        </Col>
                                    </Row>    
                                </Form>


                                <div className="p-6">
                                    <Container>
                                        <div>
                                            <Row>
                                                {this.renderProfiles()}
                                            </Row>
                                        </div>
                                    </Container>
                                </div>
            

                            </section>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default PatientsView