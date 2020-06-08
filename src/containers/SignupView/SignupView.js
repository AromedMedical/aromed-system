import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

export class SignupView extends Component {
    render() {
        return (
            <div className="container col-lg-5 my-3 min-vh-100 d-flex flex-column justify-content-center">
                <Form className="bg-light p-5">
                    <h3 className="text-center">Sign Up</h3>
                    <hr className="mb-5" />

                    <FormGroup>
                        <Label for="email">Email Address</Label>
                        <Input type="email" name="email" id="email" placeholder="Enter your email address" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Enter your password" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="confirmpassword">Confirm Password</Label>
                        <Input type="confirmpassword" name="confirmpassword" id="confirmpassword" placeholder="Enter your password again" />
                    </FormGroup>

                    <FormGroup className="mt-5">
                        <Button className="btn-block">Sign up</Button>
                    </FormGroup>

                    <FormGroup className="text-center">
                        <Label>Already have an account? <a href="/login">Login here</a></Label>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default SignupView
