import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
    error: null,
    email: '',
    password: '',
};

class LoginBase extends Component {
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
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error: error.message });
            });
    }

    render() {
        const {
            error,
            email,
            password,
        } = this.state;
        return (
            <div className="container col-lg-5 my-3 min-vh-100 d-flex flex-column justify-content-center">
                <Form className="bg-light p-5" onSubmit={this.handleSubmit}>
                    <h3 className="text-center">Login</h3>
                    <hr className="mb-5" />

                    <FormGroup>
                        <Label for="email">Email Address</Label>
                        <Input type="email" name="email" id="email" onChange={this.handleChange} placeholder="Enter your email address" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" onChange={this.handleChange} placeholder="Enter your password" />
                    </FormGroup>

                    <FormGroup className="mt-5">
                        <Button className="btn-block">Login</Button>
                    </FormGroup>

                    <FormGroup className="text-center">
                        <Label><a href="/reset">Forgotten Password?</a></Label>
                    </FormGroup>

                    {error ? <FormGroup className="mt-2 text-center text-danger">{error}</FormGroup> : null}

                    <FormGroup className="text-center">
                        <Label>Don't have an account? <Link to={ROUTES.SIGN_UP}>Signup here</Link></Label>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}
const LoginView = compose(withRouter, withFirebase)(LoginBase);

export default LoginView