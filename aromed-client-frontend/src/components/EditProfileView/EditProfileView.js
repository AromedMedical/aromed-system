import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Label, InputGroup, InputGroupAddon, InputGroupText, Col, Row, Button, Form, FormGroup, Input } from 'reactstrap';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import { withAuthorization } from '../Session';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import SideBar from '../../components/Sidebar/Sidebar';

const INITIAL_STATE = {
    profile: [],
    firstname: '',
    lastname: '',
    dob: '',
    gender: '',
    address: '',
    phone: '',
    height: '',
    weight: '',
    error: null,
};
export class EditProFileBase extends Component {
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

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ error: '' });
        const { firstname, lastname, dob, gender, address, phone, height, weight, } = this.state;

        if (firstname === '' || lastname === '' || dob === '' || gender === '' || address === '' || phone === '' || height === '' || weight === '') {
            this.setState({ error: 'All Fields are required' });
        }
        else {
            try {
                await this.props.firebase
                    .profile().push({
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        dob: this.state.dob,
                        gender: this.state.gender,
                        address: this.state.address,
                        phone: this.state.phone,
                        height: this.state.height,
                        weight: this.state.weight,
                    });
                this.props.history.push(ROUTES.HOME);
            } catch (error) {
                this.setState({ error: error.message });
            }
        }
    }
    render() {

        const {
            firstname,
            lastname,
            dob,
            gender,
            address,
            phone,
            height,
            weight,
            error,
        } = this.state.profile;

        return (
            <div className="col-lg-12">
                <SideBar />
                <div className="container col-lg-5 py-5">
                    <Form className="bg-light px-5 py-3" onSubmit={this.handleSubmit}>
                        <h3 className="text-center">Profile Settings</h3>
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

                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <Label for="height">Height</Label>
                                    <InputGroup>
                                        <Input type="number" name="height" id="height" onChange={this.handleChange} placeholder="Height" value={height} />
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText>cm</InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup>
                                    <Label for="weight">Weight</Label>
                                    <InputGroup>
                                        <Input type="number" name="weight" id="weight" onChange={this.handleChange} placeholder="Weight" value={weight} />
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText>Kg</InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>

                        <FormGroup className="mt-3">
                            <Button className="btn-block">Save Changes</Button>
                        </FormGroup>

                        {error ? <FormGroup className="mt-2 text-center text-danger">{error}</FormGroup> : null}

                    </Form>
                </div>
            </div >
        )
    }
}

const condition = authUser =>
    authUser && !!authUser.roles[ROLES.PATIENT]

const EditProfileView = compose(withRouter, withFirebase, withAuthorization(condition))(EditProFileBase);

export default EditProfileView;
