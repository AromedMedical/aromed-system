
import React, { Component } from 'react'
import { Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap'

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
    error: null,
    firstname: '',
    lastname: '',
    dob: '',
    gender: '', 
    address: '',
    phone: '',
};

export class CreateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value.trim()
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ error: '' });
        const { firstname, lastname, dob,gender, address,phone } = this.state;

        if(firstname!="" && lastname!="" && dob!="" && gender!="" && address!="" && phone!="")
	    {
            this.props.firebase
            .doCreateUserProfile(firstname, lastname, dob,gender, address,phone)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error: error.message });
            });

        }
        else
	    {
		window.alert("Form is incomplete. Please fill out all fields.");
	    }
        
    }


    render() {
        const{
            error,
            firstname,
            lastname, 
            dob,
            gender, 
            address,
            phone,
        } = this.state;

        return (
            <div className="container col-lg-5 my-3 min-vh-100 d-flex flex-column justify-content-center">
                <Form className="bg-light p-5">
                    <h3 className="text-center">Create Profile</h3>
                    <hr className="mb-5" />
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
                        <Label for="dob">Date of Birth</Label>
                        <Input type="date" name="dob" id="dob" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="gender">Gender</Label>
                        <Input type="select" name="gender" id="gender">
                            <option className="d-none">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="address">Address</Label>
                        <Input type="text" name="address" id="address" placeholder="Enter Address" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="phone">Phone Number</Label>
                        <Input type="tel" name="phone" id="phone" placeholder="Enter Phone Number" />
                    </FormGroup>

                    <FormGroup className="mt-5">
                        <Button className="btn-block" Link to={ROUTES.HOME}>Create Profile</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}
const CreateProfile = compose(withRouter, withFirebase)(CreateProfile);

export default CreateProfile;