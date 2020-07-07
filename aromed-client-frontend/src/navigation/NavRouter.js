import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomeView from '../containers/HomeView/HomeView'
import LoginView from '../containers/LoginView/LoginView';
import SignupView from '../containers/SignupView/SignupView';
import ResetView from '../containers/ResetView/ResetView';
import AccountSettings from '../containers/AccountSettings/AccountSettings';
import SearchDoctor from '../containers/SearchDoctor/SearchDoctor';
import CreateAppointment from '../containers/CreateAppointment/CreateAppointment';
import PatientsDashboard from '../containers/PatientsDashboard/PatientsDashboard';
import CreatePatient from '../containers/CreatePatient/CreatePatient';
import ProfileView from '../containers/ProfileView/ProfileView';
import PatientsAppointments from '../containers/PatientsAppointments/PatientsAppointments';
import PatientsHistory from '../containers/PatientsHistory/PatientsHistory';
import DoctorsDashboard from '../containers/DoctorsDashboard/DoctorsDashboard';

import NavBar from '../components/NavBar/NavBar';

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
                        <Route path="/settings">
                            <AccountSettings />
                        </Route>
                        <Route path="/doctors">
                            <SearchDoctor />
                        </Route>
                        <Route path="/appointment">
                            <CreateAppointment />
                        </Route>
                        <Route path="/patient/dashboard">
                            <PatientsDashboard />
                        </Route>
                        <Route path="/patient/new">
                            <CreatePatient />
                        </Route>
                        <Route path="/patient/edit">
                            <ProfileView />
                        </Route>
                        <Route path="/patient/appointments">
                            <PatientsAppointments />
                        </Route>
                        <Route path="/patient/history">
                            <PatientsHistory />
                        </Route>
                        <Route path="/doctor/dashboard">
                            <DoctorsDashboard />
                        </Route>
                    </Switch>
                </BrowserRouter >
            </div>
        )
    }
}

export default NavRouter;