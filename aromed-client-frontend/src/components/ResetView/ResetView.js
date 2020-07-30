import React, { Component } from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'


import { withFirebase } from '../Firebase';


const PasswordForgetPage = () => (
    <div>
      <PasswordForgetForm />
    </div>
  );

const INITIAL_STATE = {
    email: '',
    error: null,
  };



class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props);
     
        this.state = { ...INITIAL_STATE };
      }
     
      onSubmit = event => {
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
         
     
        event.preventDefault();
        
      };

      
     
      onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        
      };
     
      render() {
        const { email, error } = this.state;
     
        const isInvalid = email === ''; 

        return (
            <div className="container col-md-6">
                <div className="min-vh-100 d-flex flex-column justify-content-center">
                    <Form className="bg-light px-5 py-4" onSubmit={this.onSubmit}>
                        <h3 className="text-center">Forgot Password</h3>
                        <hr className="mb-5" />
                        <Input type="email" name="email" id="resetEmail" value={this.state.email} onChange={this.onChange} placeholder="Enter You Email" />
                        <FormGroup className="mt-5">
                            <Button className="btn-block" disabled={isInvalid} type="submit" >Reset Password</Button>
                        </FormGroup>
                        {error && <p>{error.message}</p>}
                    </Form>
                </div>
            </div>
        )
    }
}



export default PasswordForgetPage ;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
 
export { PasswordForgetForm };