import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const INITIAL_STATE = {
    error: null,
    email: '',
    password: '',
    confirmpassword: '',
};

class SignUpBase extends Component {
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
        const { email, password, confirmpassword } = this.state;
        const roles = {};

        roles[ROLES.PATIENT] = ROLES.PATIENT;

        if (password !== confirmpassword) {
            this.setState({ error: 'Passwords does not match' });
        }
        else {
            this.props.firebase
                .doCreateUserWithEmailAndPassword(email, password)
                .then(authUser => {
                    return this.props.firebase
                        .user(authUser.user.uid)
                        .set({
                            email,
                            roles,
                        });
                })
                .then(() => {
                    this.setState({ ...INITIAL_STATE });
                    this.props.history.push(ROUTES.LOGIN);
                })
                .catch(error => {
                    this.setState({ error: error.message });
                });
        }
    }

    render() {
        const {
            error,
            email,
            password,
            confirmpassword,
        } = this.state;

        return (
            <div className="container col-lg-5 my-3 min-vh-100 d-flex flex-column justify-content-center">
                <Form className="bg-light p-5" onSubmit={this.handleSubmit}>
                    <h3 className="text-center">Sign Up</h3>
                    <hr className="mb-5" />

                    <FormGroup>
                        <Label for="email">Email Address</Label>
                        <Input type="email" name="email" id="email" onChange={this.handleChange} placeholder="Enter your email address" value={email} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" onChange={this.handleChange} placeholder="Enter your password" value={password} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="confirmpassword">Confirm Password</Label>
                        <Input type="password" name="confirmpassword" id="confirmpassword" onChange={this.handleChange} placeholder="Enter your password again" value={confirmpassword} />
                    </FormGroup>

                    <FormGroup className="mt-5">
                        <Button className="btn-block">Sign up</Button>
                    </FormGroup>

                    {error ? <FormGroup className="mt-2 text-center text-danger">{error}</FormGroup> : null}

                    <FormGroup className="text-center">
                        <Label>Already have an account? <Link to={ROUTES.LOGIN}>Login here</Link></Label>
                    </FormGroup>
                </Form>
            </div >
        )
    }
}

const SignupView = compose(withRouter, withFirebase)(SignUpBase);

export default SignupView
