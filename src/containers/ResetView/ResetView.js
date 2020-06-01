import React, { Component } from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'

export class ResetView extends Component {
    render() {
        return (
            <div className="container col-md-6">
                <div className="min-vh-100 d-flex flex-column justify-content-center">
                    <Form className="bg-light px-5 py-4">
                        <h3 className="text-center">Forgot Password</h3>
                        <hr className="mb-5" />
                        <Input type="email" name="email" id="email" placeholder="Enter You Email" />
                        <FormGroup className="mt-5">
                            <Button className="btn-block">Reset Password</Button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
}

export default ResetView
