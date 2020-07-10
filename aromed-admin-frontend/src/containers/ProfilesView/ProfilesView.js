import React, { Component } from 'react'
import { Col, Row, ListGroup, ListGroupItem,FormGroup,Input,Button, Form} from 'reactstrap';

import SideBar from '../../components/Sidebar/Sidebar';

export class SearchProfile extends Component {
    render() {
        return (
            
            <div className="col-lg-12" >
                
                    <SideBar/>
                
                <div className="container col-lg-8 py-5">
                    <div className="bg-light px-5 py-3" style={{ 'height': '800px' }}>
                        <Row>
                            <Col md="6">
                                <h3 className="text-left mb-3" style={{marginLeft:50}}>Profiles</h3>
                                <Form inline>
                                    <div className="d-flex justify-content-between mb-8" style={{marginLeft:50}}>
                                        <FormGroup className="mb-2 mr-sm-20 mb-sm-20">
                                            <Input type="name" name="docName" id="docName" placeholder="Search by Patient ID"  /> 
                                            </FormGroup>
                                            <Button className="mb-2 mr-sm-20 mb-sm-20" style={{marginLeft: 20}}>Search Patient</Button>                                                             
                                    </div>
                                </Form>
                                
                                 
                                <div style={{maxWidth:350, maxHeight:500 ,'overflow-y': 'scroll', 'overflow-x': 'hidden', marginLeft:50 }}>
                                    <ListGroup>
                                        <ListGroupItem>AA0001</ListGroupItem>
                                        <ListGroupItem>AA0002</ListGroupItem>
                                        <ListGroupItem>AA0003</ListGroupItem>
                                        <ListGroupItem>AA0004</ListGroupItem>
                                        <ListGroupItem>AA0005</ListGroupItem>
                                        <ListGroupItem>AA0006</ListGroupItem>
                                        <ListGroupItem>AA0007</ListGroupItem>
                                        <ListGroupItem>AA0008</ListGroupItem>
                                        <ListGroupItem>AA0009</ListGroupItem>
                                        <ListGroupItem>AA0010</ListGroupItem>
                                        <ListGroupItem>AA0011</ListGroupItem>
                                        <ListGroupItem>AA0012</ListGroupItem>
                                        <ListGroupItem>AA0013</ListGroupItem>
                                        <ListGroupItem>AA0014</ListGroupItem>
                                        <ListGroupItem>AA0015</ListGroupItem>
                                    </ListGroup>                                        
                                </div>

                                <Button style={{width:170, marginLeft:50, marginRight:10, marginTop : 20}}> Create Patient</Button>                               
                                <Button style={{width:170, marginTop : 20}}> Delete Patient</Button>

                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchProfile

