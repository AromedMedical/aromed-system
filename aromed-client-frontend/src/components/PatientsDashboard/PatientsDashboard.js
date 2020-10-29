import React, { Component } from 'react'
import { Container, Card, CardTitle, CardBody, CardImg, Row, Col } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'recompose';
import _ from 'lodash';

import { withFirebase } from '../Firebase';
import { withAuthorization } from '../Session';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import Images from "../../assets/images";

const INITIAL_STATE = {
    profiles: [],
    authUser: null
};

export class PatientsDashboardBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    async componentDidMount() {
        this.listener = this.props.firebase.onAuthUserListener(
            authUser => {
                this.props.firebase
                    .profile(authUser.uid)
                    .on("value", snapshot => {
                        if (snapshot.exists()) {
                            const profilesList = Object.keys(snapshot.val()).map(key => ({
                                ...snapshot.val()[key],
                            }));
                            this.setState({ profiles: profilesList });
                        }
                    })
            }
        );
    }

    componentWillUnmount() {
        this.props.firebase.profile().off();
    }

    renderProfiles = (profiles) => {
        return (
            _.map(profiles, (profile) => {
                return (
                    <Col lg="3" sm="6" className="mb-4">
                        <Card className="h-100 shadow" style={{ 'background': '#FFF', 'color': '#000' }}>
                            <CardImg src={profile.gender === 'Male' ? Images.MalePatient : Images.FemalePatient} style={{ objectFit: 'cover' }} />
                            <CardBody>
                                <CardTitle className="text-center" >{profile.firstname + ' ' + profile.lastname}</CardTitle>
                                <hr />
                                <Link className="btn btn-block btn-secondary" to={ROUTES.APPOINTMENT_UPCOMING}>Select Profile</Link>
                                <Link className="btn btn-block btn-secondary" to={ROUTES.PROFILE_EDIT}>Edit Profile</Link>
                            </CardBody>
                        </Card>
                    </Col>
                )
            })
        )
    }

    render() {
        const profiles = this.state.profiles;
        return (
            <div className="p-5">
                <Container>
                    <div className="d-flex justify-content-between mb-5">
                        <h3>Profiles</h3>
                        <Link className="btn btn-secondary" to={ROUTES.CREATE_PROFILE}>Add Profile</Link>
                    </div>
                    <div>
                        <Row>
                            {this.renderProfiles(profiles)}
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}

const condition = authUser =>
    authUser && !!authUser.roles[ROLES.PATIENT]

const PatientsDashboard = compose(withRouter, withFirebase, withAuthorization(condition))(PatientsDashboardBase);

export default PatientsDashboard