
import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
    error: null,
    currpassword: '',
    newpassword: '',
    renewpassword: '',
};

class AccountSettings extends Component {
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
        const { currpassword, newpassword, renewpassword } = this.state;

        if (newpassword !== renewpassword) {
            this.setState({ error: 'Passwords does not match' });
        }
        else {
            this.props.firebase
                .doCreateUserWithEmailAndPassword(email, newpassword)
                .then(authUser => {
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
            currpassword,
            newpassword,
            renewpassword,
        } = this.state;


        return (
            <div className="container col-lg-5 my-3 min-vh-100 d-flex flex-column justify-content-center">
                <Form className="bg-light p-5">
                    <h3 className="text-center">Account Settings</h3>
                    <hr className="mb-5" />

                    <FormGroup>
                        <Label for="currpassword">Current Password</Label>
                        <Input type="text" name="currpassword" id="currpassword" placeholder="Enter Current Password" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="newpassword">New Password</Label>
                        <Input type="text" name="newpassword" id="newpassword" placeholder="Enter New Password" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="renewpassword">Re-Enter New Password</Label>
                        <Input type="text" name="renewpassword" id="renewpassword" placeholder="Re-enter New Password" />
                    </FormGroup>

                    <FormGroup className="mt-5">
                        <Button className="btn-block">Proceed</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}
const AccountSettingsView = compose(withRouter, withFirebase)(AccountSettingsBase);

export default AccountSettings;