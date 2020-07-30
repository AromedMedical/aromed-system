import React, { Component } from 'react'
import _ from 'lodash';
import {Card, CardTitle, CardBody, Button, CardImg, Row, Col} from 'reactstrap';
import { withRouter } from 'react-router-dom'
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { db } from "../Firebase/Firebase"
import { auth } from "../Firebase/Firebase";


 export class PatientsDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: auth().currentUser,
            profiles:[],
            Name:"",
            error:null
        };
    this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleDocNameChange(event){
        this.setState({PatientName:event.target.value})
    }

    async componentDidMount() {
        try {
          db.ref("profiles").on("value", snapshot => {
            let profiles = [];
            snapshot.forEach((snap) => {
              profiles.push(snap.val());
            });
            this.setState({ profiles});
          });
        } catch (error) {
          this.setState({ error: error.message });
        }
      }
    

    Profiles = []

    renderProfiles = () => {
        return (
            _.map(this.Profiles, (profile) => {
            
                return (
                    <Col lg="3" sm="6" className="mb-4">
                        <Card className="h-100 shadow" style={{ 'background': '#FFF', 'color': '#000' }}>
                            <CardImg src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png" style={{ objectFit: 'cover' }} />
                            <CardBody>
                                <CardTitle className="text-center" >{profile.name}</CardTitle>
                                <hr />
                                <Button className="btn-block">Select Profile</Button>
                                <Button className="btn-block">Delete</Button>
                            </CardBody>
                        </Card>
                    </Col>
                )
            })
        )
    }

    render() {
       
        return (
            <div className="p-5">
                <container>
                    <div className="d-flex justify-content-between mb-5">
                        <h3>Profiles</h3>
                        <Button>Add Profile</Button>
                    </div>
                    <div>
                        <Row>
                            {this.renderProfiles()}
                        </Row>
                    </div>
                </container>
            </div>
        )
    }
}



export default PatientsDashboard