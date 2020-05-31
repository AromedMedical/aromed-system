import './ProfileView.css';
import React, { Component } from 'react'
import {InputGroup, InputGroupAddon,Jumbotron, Container, InputGroupText, Col, Row, Button,Form,FormGroup, Input} from 'reactstrap';


export class ProfileView extends Component {
    render() {
        return (
          <div className="ProfileView">
        <Form>
      <Jumbotron fluid>
        <Container fluid>
        <FormGroup>
          <Col md={10}>
          <h1>Profile settings</h1>
            <Row form>
              <Col md={6}>
                 
              </Col>
            </Row>
                
          </Col>
        </FormGroup>
        </Container>
      </Jumbotron>

        <FormGroup className="mt-2">
          <Col md={10}>
             <Input type="Name" name="Name" id="exampleName" placeholder="Name" />
          </Col>
        </FormGroup>

      <Row className="mt-2">
        <Col md={3}>
          <FormGroup className="mt-2">
            <Col md={0}>
              <Input type="select" name="select" id="exampleSelect">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              </Input>
            </Col>
          </FormGroup>
        </Col>
        <Col>
          <Col md={4}>
          <FormGroup className="mt-2">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>Date of birth</InputGroupText>
            </InputGroupAddon>
              <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"/>
            </InputGroup>
          </FormGroup>
         </Col>
      </Col>
      </Row>
    
      <FormGroup className="mt-2">
        <Col md={10}>
          <Input type="Address" name="Address" id="exampleAddress" placeholder="Address" />
        </Col>
      </FormGroup>
          
      <FormGroup className="mt-2">
        <Col md={5}>
          <Input type="TPno" name="ContactNUM" id="exampleContactNUM" placeholder="ContactNumber" />
        </Col>
      </FormGroup>


      <Row>
        <Col md={3}>
          <FormGroup className="mt-2">
            <Col md={0}>
              <InputGroup>
                <Input
                  type="number"
                  name="number"
                  id="exampleNumber"
                  placeholder="Height"
                /> 
              <InputGroupAddon addonType="append">
              <InputGroupText>cm</InputGroupText>
              </InputGroupAddon>
              </InputGroup>
            </Col>
          </FormGroup>
        </Col>
        <Col>
        <Col md={4}>
          <FormGroup className="mt-2">
            <InputGroup>
              <Input
                type="number"
                name="number"
                id="exampleNumber"
                placeholder="Weight"/> 
            <InputGroupAddon addonType="append">
            <InputGroupText>Kg</InputGroupText>
            </InputGroupAddon>
            </InputGroup>
          </FormGroup>
        </Col>
        </Col>
      </Row>

      <FormGroup className="mt-2">
        <Col md={10}>
        <Button color="secondary" type='submit'>Save changes</Button>
        </Col>
      </FormGroup>
      
  
      </Form>
        </div>
            
        )
    }
}

export default ProfileView;
