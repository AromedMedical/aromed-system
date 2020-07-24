import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { signup } from '../../helpers/auth';
import { withRouter, Link } from 'react-router-dom'

export class SignupView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: '',
            password: '',
            confirmpassword: '',
        };

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
        console.log(this.state.email);
        if (this.state.password !== this.state.confirmpassword) {
            this.setState({ error: 'Passwords does not match' });
        }
        else {
            try {
                await signup(this.state.email, this.state.password);
                this.props.history.push('/login');
            } catch (error) {
                this.setState({ error: error.message });
            }
        }
    }

    render() {
        return (
            <div className="container col-lg-5 my-3 min-vh-100 d-flex flex-column justify-content-center">
                <Form className="bg-light p-5" onSubmit={this.handleSubmit}>
                    <h3 className="text-center">Sign Up</h3>
                    <hr className="mb-5" />

                    <FormGroup>
                        <Label for="email">Email Address</Label>
                        <Input type="email" name="email" id="email" onChange={this.handleChange} placeholder="Enter your email address" value={this.state.email} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" onChange={this.handleChange} placeholder="Enter your password" value={this.state.password} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="confirmpassword">Confirm Password</Label>
                        <Input type="password" name="confirmpassword" id="confirmpassword" onChange={this.handleChange} placeholder="Enter your password again" value={this.state.confirmpassword} />
                    </FormGroup>

                    <FormGroup className="mt-5">
                        <Button className="btn-block">Sign up</Button>
                    </FormGroup>

                    {this.state.error ? <FormGroup className="mt-2 text-center text-danger">{this.state.error}</FormGroup> : null}

                    <FormGroup className="text-center">
                        <Label>Already have an account? <Link to="/login">Login here</Link></Label>
                    </FormGroup>
                </Form>
            </div >
        )
    }
}

export default withRouter(SignupView)
