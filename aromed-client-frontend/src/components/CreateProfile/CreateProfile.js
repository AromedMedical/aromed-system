import React, { Component } from 'react'
import { Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import { AuthUserContext } from '../Session';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
    error: null,
    errors: {},
    firstname: '',
    lastname: '',
    dob: '',
    gender: '',
    address: '',
    phone: '',
};

class CreateProfileBase extends Component {
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

    isValidDate(dateString) {
        var regEx = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateString.match(regEx)) return false;
        var d = new Date(dateString);
        var dNum = d.getTime();
        if (!dNum && dNum !== 0) return false;
        return d.toISOString().slice(0, 10) === dateString;
    }

    handleValidation(firstname, lastname, dob, gender, address, phone) {
        let formIsValid = true;
        let errors = {};

        if (firstname == null) {
            formIsValid = false;
            errors["firstname"] = "First name cannot be empty";
        }
        else if (typeof firstname !== "undefined") {
            if (!firstname.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["firstname"] = "First name can only contain letters";
            }
        }

        if (lastname == null) {
            formIsValid = false;
            errors["lastname"] = "Last name cannot be empty";
        }
        else if (typeof lastname !== "undefined") {
            if (!lastname.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["lastname"] = "Last name can only contain letters";
            }
        }

        if (dob == null) {
            formIsValid = false;
            errors["dob"] = "Date of birth cannot be empty";
        }
        else if (!this.isValidDate(dob)) {
            formIsValid = false;
            errors["dob"] = "Invalid date of birth";
        }

        if (address == null) {
            formIsValid = false;
            errors["address"] = "Address cannot be empty";
        }

        if (phone == null) {
            formIsValid = false;
            errors["phone"] = "Phone number cannot be empty";
        }
        else if (!phone.match(/\d{10}/)) {
            formIsValid = false;
            errors["phone"] = "Invalid phone number";
        }

        return formIsValid;
    }

    async handleSubmit(event, authUser) {
        event.preventDefault();
        this.setState({ error: '' });
        const { firstname, lastname, dob, gender, address, phone } = this.state;
        window.alert(firstname + lastname + dob + gender + address + phone);
        if (this.handleValidation(firstname, lastname, dob, gender, address, phone)) {
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

export { CreateProfileBase }

export default CreateProfile