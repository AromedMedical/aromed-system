import React, { Component } from 'react'
import _ from 'lodash';
import {
    Container, Card, CardTitle, CardBody, Button, CardImg, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,FormGroup,Input,Form
} from 'reactstrap';

export class SearchDoctor extends Component {
    Doctors = []

    renderProfiles = () => {
        return (
            _.map(this.Doctors, (dprofile) => {
                return (
                    <Col lg="3" sm="6" className="mb-4">
                        <Card className="h-100 shadow" style={{ 'background': '#FFF', 'color': '#000' }}>
                            <CardImg src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png" style={{ objectFit: 'cover' }} />
                            <CardBody>
                                <CardTitle className="text-center" >{dprofile}</CardTitle>
                                <hr />
                                <Button className="btn-block">Visit Profile</Button>
                                
                            </CardBody>
                        </Card>
                    </Col>
                )
            })
        )
    }

    render() {
        return (
            <div className="p-5">
                <Container>
                    <div className="d-flex justify-content-between mb-5">
                        <h3>Doctors</h3>
                        <Form inline>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <UncontrolledDropdown>
                                    <DropdownToggle caret>
                                        Select Specialization
                                    </DropdownToggle>
                                    <DropdownMenu className='spec-menu ' style={{ maxHeight:300 , overflow:'auto'}}>
                                        <DropdownItem>Podiatrist</DropdownItem>
                                        <DropdownItem>General Practitioner</DropdownItem>
                                        <DropdownItem>Pediatrician</DropdownItem>
                                        <DropdownItem>Endocrinologist</DropdownItem>
                                        <DropdownItem>Neurologist</DropdownItem>
                                        <DropdownItem>Rheumatologist</DropdownItem>
                                        <DropdownItem>Allergist/Immunologist</DropdownItem>
                                        <DropdownItem>Psychiatrist</DropdownItem>
                                        <DropdownItem>Nephrologist</DropdownItem>
                                        <DropdownItem>OB/GYN</DropdownItem>
                                        <DropdownItem>Pulmonologist</DropdownItem>
                                        <DropdownItem>Surgeon</DropdownItem>
                                        <DropdownItem>Emergency Physician</DropdownItem>
                                        <DropdownItem>Ophthalmologist</DropdownItem>
                                        <DropdownItem>Oncologist</DropdownItem>
                                        <DropdownItem>Urologist</DropdownItem>
                                        <DropdownItem>Otolaryngologist</DropdownItem>
                                        <DropdownItem>Anesthesiologist</DropdownItem>
                                        <DropdownItem>Dermatologist</DropdownItem>
                                        <DropdownItem>Radiologist</DropdownItem>
                                        <DropdownItem>Gastroenterologist</DropdownItem>
                                        <DropdownItem>Cardiologist</DropdownItem>
                                        <DropdownItem>Orthopedist</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>                                        
                            </FormGroup>
                            <div className="justify-content-between">
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Input type="name" name="docName" id="docName" placeholder="Search Doctor" /> 
                                    <Button>Search</Button>
                                </FormGroup>
                            </div>
                        </Form>
                            
    








                            
                        

                        
                    </div>
                    <div>
                        <Row>
                            {this.renderProfiles()}
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}  


export default SearchDoctor
