import './CreatePatient.css';
import React, { Component } from 'react'
import {Button} from 'reactstrap'


export class CreatePatient extends React.Component {
    state = {
        Name:'',
        dob:'',
        gender:'',
        address:'',
        contact:''
    }

    change = e =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }
    
    
    render() {
        return (
            <div className="CreatePatient">
                <form>
                    <h1><b>Create Profile</b></h1>
                    <img src="/images/arrow.png" alt='arrow' width="70" height="70"/>
                    <br />
                    <label for="Name" ><b>Name:</b></label>
                    <input name='Name' type="text" placeholder='Enter Your Name' value={this.state.Name} onChange={e => this.change(e)}/>
                    
                    <label for="dob"><b>Date of Birth:</b></label>
                    <input name='dob' type="date" placeholder='Enter Date of Birth' value={this.state.dob} onChange={e => this.change(e)}/>
                    
                    <label for="gender"><b>Gender:</b></label>
                    <select name='gender' placeholder='Select Gender' value={this.state.gender} onChange={e => this.change(e)}>
                        <option value="" disabled selected hidden>Select Gender</option>
                        <option value="Male">Male</option> 
                        <option value="Female">Female</option>  
                    </select>
                    
                    <label for="address"><b>Address:</b></label>
                    <input name='address' type="text" placeholder='Enter Home Address' value={this.state.address} onChange={e => this.change(e)}/>
                    
                    <label for="contact"><b>Contact Number:</b></label>
                    <input name='contact'  type="tel"  placeholder='Enter Your Contact Number' value={this.state.contact} onChange={e => this.change(e)}/>
                    
                    <Button color="primary" type='submit' onClick={e => this.onSubmit(e)}>Create Profile</Button>
                </form>
            </div>
        )
    }
}

export  default CreatePatient;
