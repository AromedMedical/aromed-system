import React, { Component } from 'react'
import { Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import { AuthUserContext } from '../Session';
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

export class CreateProfileBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event, authUser) {
        event.preventDefault();
        this.setState({ error: '' });
        const { firstname, lastname, dob, gender, address, phone } = this.state;

        if (firstname !== "" && lastname !== "" && dob !== "" && gender !== "" && address !== "" && phone !== "") {
            this.props.firebase
                .profile(authUser.uid)
                .push({
                    firstname,
                    lastname,
                    dob,
                    gender,
                    address,
                    phone,
                }).then(() => {
                    this.setState({ ...INITIAL_STATE });
                    this.props.history.push(ROUTES.PATIENT_DASHBOARD);
                })
                .catch(error => {
                    this.setState({ error: error.message });
                });
        }
        else {
            window.alert("Form is incomplete. Please fill out all fields.");
        }
    }

    render() {
        const {
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
                <AuthUserContext.Consumer>
                    {authUser => (
                        <Form className="bg-light p-5" onSubmit={event => this.handleSubmit(event, authUser)}>
                            <h3 className="text-center">Create Profile</h3>
                            <hr className="mb-5" />
                            <Row>
                                <Col md="6">
                                    <FormGroup>
                                        <Label for="firstname">First Name</Label>
                                        <Input type="text" name="firstname" id="firstname" onChange={this.handleChange} placeholder="Enter First Name" value={firstname} />
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label for="lastname">Last Name</Label>
                                        <Input type="text" name="lastname" id="lastname" onChange={this.handleChange} placeholder="Enter Last Name" value={lastname} />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Label for="dob">Date of Birth</Label>
                                <Input type="date" name="dob" id="dob" onChange={this.handleChange} value={dob} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="gender">Gender</Label>
                                <Input type="select" name="gender" id="gender" onChange={this.handleChange} value={gender}>
                                    <option className="d-none">Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <Label for="address">Address</Label>
                                <Input type="text" name="address" id="address" onChange={this.handleChange} placeholder="Enter Address" value={address} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="phone">Phone Number</Label>
                                <Input type="tel" name="phone" id="phone" onChange={this.handleChange} placeholder="Enter Phone Number" value={phone} />
                            </FormGroup>

                            <FormGroup className="mt-5">
                                <Button className="btn-block">Create Profile</Button>
                            </FormGroup>

                            {error ? <FormGroup className="mt-2 text-center text-danger">{error}</FormGroup> : null}
                        </Form>
                    )}
                </AuthUserContext.Consumer>
            </div>
        )
    }
}
const CreateProfile = compose(withRouter, withFirebase)(CreateProfileBase);

export default CreateProfile;