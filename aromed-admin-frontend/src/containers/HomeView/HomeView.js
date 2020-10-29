import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

export class HomeView extends Component {
    render() {
        return (
            <div className="container col-lg-4 my-3 min-vh-100 d-flex flex-column justify-content-center">
                <Form className="bg-light p-5">
                    <h3 className="text-center">Login</h3>
                    <hr className="mb-5" />

                    <FormGroup>
                        <Label for="email">Email Address</Label>
                        <Input type="email" name="email" id="email" placeholder="Enter your email address" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Enter your password" />
                    </FormGroup>

                    <FormGroup className="mt-5">
                        <Link to='/profiles'><Button className="btn-block">Login</Button></Link>
                    </FormGroup>

                    <FormGroup className="text-center">
                        <Label><Link to='/reset'>Forgotten Password?</Link></Label>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default HomeView
