import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomeView from '../containers/HomeView/HomeView'
import ResetView from '../containers/ResetView/ResetView'
import AdminView from '../containers/AdminView/AdminView'
import DoctorsView from '../containers/DoctorsView/DoctorsView'
import PatientView from '../containers/PatientView/PatientView'
import ProfilesView from '../containers/ProfilesView/ProfilesView'
import CreateProfile from '../containers/CreateProfile/CreateProfile'
import SettingsView from '../containers/AccountSettings/AccountSettings';
import AppointmentsView from '../containers/AppointmentsView/AppointmentsView'

class NavRouter extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <HomeView />
                        </Route>
                        <Route exact path="/reset">
                            <ResetView />
                        </Route>
                        <Route exact path="/patients">
                            <PatientView />
                        </Route>
                        <Route exact path="/profiles">
                            <ProfilesView />
                        </Route>
                        <Route exact path="/profiles/new">
                            <CreateProfile />
                        </Route>
                        <Route exact path="/appointments">
                            <AppointmentsView />
                        </Route>
                        <Route exact path="/doctors">
                            <DoctorsView />
                        </Route>
                        <Route exact path="/admins">
                            <AdminView />
                        </Route>
                        <Route exact path="/settings">
                            <SettingsView />
                        </Route>
                    </Switch>
                </BrowserRouter >
            </div>
        )
    }
}

export default NavRouter;