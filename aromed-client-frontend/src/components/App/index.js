import React from 'react';
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

import * as ROUTES from '../../constants/routes';

import './App.css'

const App = () => (
    <div>
        <Navigation />
        <Router>
            <Switch>
                <Route exact path={ROUTES.HOME}>
                    <HomePage />
                </Route>
                <Route path={ROUTES.SIGN_UP}>
                    <SignupPage />
                </Route>
                <Route path={ROUTES.LOGIN}>
                    <LoginPage />
                </Route>
                <Route path={ROUTES.RESET}>
                    <ResetPage />
                </Route>
                <Route path={ROUTES.SEARCH_DOCTORS}>
                    <DoctorsPage />
                </Route>
                <Route path={ROUTES.ACCOUNT_SETTINGS}>
                    <SettingsPage />
                </Route>
                <Route path={ROUTES.CREATE_APPOINTMENT}>
                    <CreateAppointment />
                </Route>
                <Route path={ROUTES.PATIENT_DASHBOARD}>
                    <PatientsDashboard />
                </Route>
                <Route path={ROUTES.PROFILE_CREATE}>
                    <CreateProfile />
                </Route>
                <Route path={ROUTES.PROFILE_EDIT}>
                    <EditProfile />
                </Route>
            </Switch>
        </Router>
    </div >
);

export default App;