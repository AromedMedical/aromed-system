import React, { Component } from 'react'
import _ from 'lodash';
import {
    Container, Card, CardTitle, CardBody, Button, CardImg, Row, Col
} from 'reactstrap';

export class PatientsDashboard extends Component {

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
                <Container>
                    <div className="d-flex justify-content-between mb-5">
                        <h3>Profiles</h3>
                        <Button>Add Profile</Button>
                    </div>
                    <div>
                        <Row>
                            {this.renderProfiles()}
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}

export default PatientsDashboard