import React, { Component } from 'react'
import _ from 'lodash';
import {Card, CardTitle, CardBody, Button, CardImg, Row, Col, FormGroup,Input,Form} from 'reactstrap';
import { withRouter } from 'react-router-dom'
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import { db } from "../Firebase/Firebase"
import { auth } from "../Firebase/Firebase";

export class SearchDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: auth().currentUser,
            doctors:[],
            searchSpecialization:"",
            searchDocName:"",
            error:null
        };
        this.handlesearchSpecializationChange = this.handlesearchSpecializationChange.bind(this);
        this.handlesearchDocNameChange = this.handlesearchDocNameChange.bind(this);
    }

    handlesearchSpecializationChange(event){
        this.setState({searchSpecialization:event.target.value})
    }
    handlesearchDocNameChange(event){
        this.setState({searchDocName:event.target.value})
    }

    async componentDidMount() {
        try {
          db.ref("docters").on("value", snapshot => {
            let doctors = [];
            snapshot.forEach((snap) => {
              doctors.push(snap.val());
            });
            this.setState({ doctors });
          });
        } catch (error) {
          this.setState({ error: error.message });
        }
      }

    /*Doctors = [
    {   docname: doctors.name,
        specialization: doctors.specialization,
        qualitifications: doctors.qualitifications
    }
    ]*/

   renderDoctors = () => {
        /*return (
            _.map(this.Doctors, (Doctor) => {*/
                const{searchDocName,searchSpecialization} =this.state;
                
                if(searchSpecialization !== "" && searchDocName!=="" && this.state.doctors.name.toLowecase().indexOf(searchDocName.toLocaleLowerCase())){
                    return null
                }

                return (
                    <Col md="3" className="p-3">
                        <Card className="h-100 shadow" style={{ 'background': '#FFF', 'color': '#000' }}>
                            <CardImg src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png" style={{ objectFit: 'cover' }} />
                            <CardBody>
                                <CardTitle className="text-center" >Dr.{this.state.doctors.doctors.name}</CardTitle>
                                <CardTitle className="text-center" >{this.state.doctors.doctors.specialization}</CardTitle>
                                <CardTitle className="text-center" >{this.state.doctors.doctors.qualitifications}</CardTitle>
                                <hr />
                                <Button className="btn-block">Make an Appointment</Button>
                            </CardBody>
                        </Card>
                    </Col>
                )
            /*}))*/
    }


    render() {
        return (
            <div className="container py-5">
                <Row>
                    <Col xs="6">
                        <h3>Doctors</h3>
                    </Col>
                    <Col xs="auto">
                        <Form inline>
                            <FormGroup>
                                <Input type="select" name="searchSpecialization" id="searchSpecialization" onChange={this.handlesearchSpecializationChange} >
                                    <option className="d-none">Select Specialization</option>
                                    <option>Podiatrist</option>
                                    <option>General Practitioner</option>
                                    <option>Pediatrician</option>
                                    <option>Endocrinologist</option>
                                    <option>Neurologist</option>
                                    <option>Rheumatologist</option>
                                    <option>Allergist/Immunologist</option>
                                    <option>Psychiatrist</option>
                                    <option>Nephrologist</option>
                                    <option>OB/GYN</option>
                                    <option>Pulmonologist</option>
                                    <option>Surgeon</option>
                                    <option>Emergency Physician</option>
                                    <option>Ophthalmologist</option>
                                    <option>Oncologist</option>
                                    <option>Urologist</option>
                                    <option>Otolaryngologist</option>
                                    <option>Anesthesiologist</option>
                                    <option>Dermatologist</option>
                                    <option>Radiologist</option>
                                    <option>Gastroenterologist</option>
                                    <option>Cardiologist</option>
                                    <option>Orthopedist</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type="name" name="searchDocName" id="searchDocName" onChange={this.handlesearchDocNameChange} placeholder="Search Doctor"/> 
                            </FormGroup>
                            <FormGroup>
                                <Button color="secondary">Search</Button>{' '}
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <div className="py-4">
                    <Row>
                        {this.renderDoctors()}
                    </Row>
                </div>
            </div>
        )
    }
}  


export default SearchDoctor
