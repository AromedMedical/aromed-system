import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomeView from '../containers/HomeView/HomeView'
import LoginView from '../containers/LoginView/LoginView';
import SignupView from '../containers/SignupView/SignupView';
import PatientsDashboard from '../containers/PatientsDashboard/PatientsDashboard';
import DoctorsDashboard from '../containers/DoctorsDashboard/DoctorsDashboard';
import CreatePatient from '../containers/CreatePatient/CreatePatient';
import PatientsAppointments from '../containers/PatientsAppointments/PatientsAppointments';
import PatientsHistory from '../containers/PatientsHistory/PatientsHistory';
import ProfileView from '../containers/ProfileView/ProfileView';
import ResetView from '../containers/ResetView/ResetView';

import NavBar from '../components/NavBar/NavBar';
import AccountSettings from '../containers/AccountSettings/AccountSettings';

class NavRouter extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <HomeView />
                        </Route>
                        <Route path="/login">
                            <LoginView />
                        </Route>
                        <Route path="/signup">
                            <SignupView />
                        </Route>
                        <Route path="/reset">
                            <ResetView />
                        </Route>
                        <Route path="/patient/dashboard">
                            <PatientsDashboard />
                        </Route>
                        <Route path="/doctor/dashboard">
                            <DoctorsDashboard />
                        </Route>
                        <Route path="/patient/new">
                            <CreatePatient />
                        </Route>
                        <Route path="/patient/appointments">
                            <PatientsAppointments />
                        </Route>
                        <Route path="/patient/history">
                            <PatientsHistory />
                        </Route>
                        <Route path="/patient/edit">
                            <ProfileView />
                        </Route>
                        <Route path="/settings">
                            <AccountSettings />
                        </Route>
                    </Switch>
                </BrowserRouter >
            </div>
        )
    }
}

export default NavRouter;