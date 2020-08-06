import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';

import { useAlert } from 'react-alert'

const INITIAL_STATE = {
    error: null,
    newpassword: '',
    renewpassword: '',
};

class AccountSettingsBase extends Component {
    alert = useAlert()

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
        const { newpassword, renewpassword } = this.state;

        if (newpassword !== renewpassword) {
            this.setState({ error: 'Passwords does not match' });
        }
        else {
            this.props.firebase
                .doPasswordUpdate(newpassword)
                .then(() => {
                    this.alert.show('Password Changed Successfully.')
                    this.setState({ ...INITIAL_STATE });
                })
                .catch(error => {
                    this.setState({ error: error.message });
                });
        }
    }

    render() {
        const {
            error,
            newpassword,
            renewpassword,
        } = this.state;

        return (
            <div className="container col-lg-5 my-3 min-vh-100 d-flex flex-column justify-content-center">
                <Form className="bg-light p-5" onSubmit={this.handleSubmit}>
                    <h3 className="text-center">Account Settings</h3>
                    <hr className="mb-5" />

                    <FormGroup>
                        <Label for="newpassword">New Password</Label>
                        <Input type="password" name="newpassword" id="newpassword" onChange={this.handleChange} placeholder="Enter New Password" value={newpassword} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="renewpassword">Re-Enter New Password</Label>
                        <Input type="password" name="renewpassword" id="renewpassword" onChange={this.handleChange} placeholder="Re-enter New Password" value={renewpassword} />
                    </FormGroup>

                    <FormGroup className="mt-5">
                        <Button className="btn-block">Proceed</Button>
                    </FormGroup>

                    {error ? <FormGroup className="mt-2 text-center text-danger">{error}</FormGroup> : null}
                </Form>
            </div>
        )
    }
}
const AccountSettings = compose(withRouter, withFirebase)(AccountSettingsBase);

export default AccountSettings;