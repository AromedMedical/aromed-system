import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import HomePage from '../HomeView/HomeView';
import SignupPage from '../SignupView/SignupView';
import LoginPage from '../LoginView/LoginView';
import ResetPage from '../ResetView/ResetView';
import DoctorsPage from '../SearchDoctor/SearchDoctor';
import SettingsPage from '../AccountSettings/AccountSettings';
import CreateAppointment from '../CreateAppointment/CreateAppointment';
import PatientsDashboard from '../PatientsDashboard/PatientsDashboard';
import CreateProfile from '../CreateProfile/CreateProfile';
import EditProfile from '../EditProfileView/EditProfileView';

import { withAuthentication } from '../Session';
import * as ROUTES from '../../constants/routes';

import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Router>
                    <Switch>
                        <Route exact path={ROUTES.HOME}>
                            <HomePage />
                        </Route>
                        <Route exact path={ROUTES.SIGN_UP}>
                            <SignupPage />
                        </Route>
                        <Route exact path={ROUTES.LOGIN}>
                            <LoginPage />
                        </Route>
                        <Route exact path={ROUTES.RESET}>
                            <ResetPage />
                        </Route>
                        <Route exact path={ROUTES.SEARCH_DOCTORS}>
                            <DoctorsPage />
                        </Route>
                        <Route exact path={ROUTES.ACCOUNT_SETTINGS}>
                            <SettingsPage />
                        </Route>
                        <Route exact path={ROUTES.CREATE_APPOINTMENT}>
                            <CreateAppointment />
                        </Route>
                        <Route exact path={ROUTES.PATIENT_DASHBOARD}>
                            <PatientsDashboard />
                        </Route>
                        <Route exact path={ROUTES.PROFILE_CREATE}>
                            <CreateProfile />
                        </Route>
                        <Route exact path={ROUTES.PROFILE_EDIT}>
                            <EditProfile />
                        </Route>
                    </Switch>
                </Router>
            </div >
        );
    }
}

export default withAuthentication(App);