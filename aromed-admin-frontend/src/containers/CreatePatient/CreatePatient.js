import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
export class CreatePatient extends Component {
    render() {
        return (
            <div className="container col-lg-4 my-3 min-vh-100 d-flex flex-column justify-content-center">
                <Form className="bg-light p-5">
                    

                    <FormGroup>
                        <Label for="email">Email Address</Label>
                        <Input type="email" name="email" id="email" placeholder="Enter your email address" />
                    </FormGroup>

                    

                    <FormGroup className="mt-5">
                        <Button className="btn-block">Create Account</Button>
                    </FormGroup>

                    
                </Form>
            </div>
        )
    }
}

export default CreatePatient
