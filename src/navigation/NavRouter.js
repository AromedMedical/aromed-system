import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomeView from '../containers/HomeView/HomeView'
import LoginView from '../containers/LoginView/LoginView';
import SignupView from '../containers/SignupView/SignupView';
import PatientsDashboard from '../containers/PatientsDashboard/PatientsDashboard';
import DoctorsDashboard from '../containers/DoctorsDashboard/DoctorsDashboard';
import CreatePatient from '../containers/CreatePatient/CreatePatient';
import ProfileView from '../containers/ProfileView/ProfileView';

class NavRouter extends Component {

    render() {
        return (
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
                    <Route path="/signup">
                        <SignupView />
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
                    <Route path="/patient/edit">
                        <ProfileView/>
                    </Route>
                </Switch>
            </BrowserRouter >
        )
    }
}

export default NavRouter;