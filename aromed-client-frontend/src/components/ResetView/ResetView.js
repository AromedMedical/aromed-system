import React, { Component } from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
    email: '',
    error: null,
};

class ResetViewBase extends Component {
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
        const { email } = this.state;

        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                window.alert("Password reset link has been sent. Please check your mailbox.")
            })
            .catch(error => {
                this.setState({ error });

            });
    };

    render() {
        const {
            email,
            error
        } = this.state;

        return (
            <div className="container col-md-6">
                <div className="min-vh-100 d-flex flex-column justify-content-center">
                    <Form className="bg-light px-5 py-4" onSubmit={this.handleSubmit}>
                        <h3 className="text-center">Forgot Password</h3>
                        <hr className="mb-5" />
                        <Input type="email" name="email" id="email" onChange={this.handleChange} placeholder="Enter your email address" value={email} />
                        <FormGroup className="mt-5">
                            <Button className="btn-block" disabled type="submit" >Reset Password</Button>
                        </FormGroup>
                        {error ? <FormGroup className="mt-2 text-center text-danger">{error}</FormGroup> : null}
                    </Form>
                </div>
            </div>
        )
    }
}

const ResetView = compose(withRouter, withFirebase)(ResetViewBase);

export default ResetView