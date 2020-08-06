import React, { Component } from 'react'
import { Col, Row, ListGroup, ListGroupItem } from 'reactstrap';

import SideBar from '../../components/Sidebar/Sidebar';

const INITIAL_STATE = {
    appointmets: [],
};


export class PatientsAppointments extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async componentDidMount() {
        this.props.firebase
            .appointment(authUser.uid)
            .on("value", snapshot => {
                if (snapshot.exists()) {
                    const AppointmentList = Object.keys(snapshot.val()).map(key => ({
                        ...snapshot.val()[key],
                    }));
                    this.setState({ appointmets: AppointmentList });
                }
            })
    }

    componentWillUnmount() {
        this.props.firebase.appointment().off();
    }

    renderAppointments = () => {
        const {
            appointmets,
        } = this.state;

        return (
            _.map(appointmets, (appointment) => {
                return (
                    <ListGroupItem tag="a" href="#" action>{appointment.date}</ListGroupItem>
                )
            })
        )
    }

    render() {
        const {
            appointmets,
        } = this.state.doctors;

        return (
            <div className="col-lg-12" >
                <SideBar />
                <div className="container col-lg-10 py-5">
                    <div className="bg-light px-5 py-3" style={{ 'height': '800px' }}>
                        <h3 className="text-center">Upcoming Appointments</h3>
                        <hr className="mb-5" />
                        <Row>
                            <Col md="4" className="text-center">
                                <h4 className="mb-3">Date and Time</h4>
                                <div style={{ 'overflow-y': 'scroll', 'overflow-x': 'hidden' }} className="mb-5">
                                    <ListGroup>
                                        {this.renderAppointments()}
                                    </ListGroup>
                                </div>
                            </Col>
                            <Col md="8" className="px-5">
                                <Row style={{ 'justify-content': 'center' }}>
                                    <h4 className="mb-3">Appointment Details</h4>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default PatientsAppointments