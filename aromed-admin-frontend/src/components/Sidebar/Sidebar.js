import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'font-awesome/css/font-awesome.min.css';

export class Sidebar extends Component {
    navigate = (pathname) => () => {
        this.props.history.push(pathname);
    };

    render() {
        return (
            <SideNav className="Sidebar bg-dark">
                <SideNav.Toggle />
                <SideNav.Nav>
                    <NavItem eventKey="patients" onClick={this.navigate('/patients')}>
                        <NavIcon>
                            <i className="fa fa-fw fa-user" style={{ fontSize: "1.75em", 'color': 'white' }} />
                        </NavIcon>
                        <NavText style={{ 'color': 'white' }}>Patients</NavText>
                    </NavItem>
                    <NavItem eventKey="profiles" onClick={this.navigate('/profiles')}>
                        <NavIcon>
                            <i className="fa fa-fw fa-address-card-o" style={{ fontSize: "1.75em", 'color': 'white' }} />
                        </NavIcon>
                        <NavText style={{ 'color': 'white' }}>Profiles</NavText>
                    </NavItem>
                    <NavItem eventKey="appointments" onClick={this.navigate('/appointments')}>
                        <NavIcon>
                            <i className="fa fa-fw fa-calendar-check-o" style={{ fontSize: "1.75em", 'color': 'white' }} />
                        </NavIcon>
                        <NavText style={{ 'color': 'white' }}>Appointments</NavText>
                    </NavItem>
                    <NavItem eventKey="doctors" onClick={this.navigate('/doctors')}>
                        <NavIcon>
                            <i className="fa fa-fw fa-user-md" style={{ fontSize: "1.75em", 'color': 'white' }} />
                        </NavIcon>
                        <NavText style={{ 'color': 'white' }}>Doctors</NavText>
                    </NavItem>
                    <NavItem eventKey="admins" onClick={this.navigate('/admins')}>
                        <NavIcon>
                            <i className="fa fa-fw fa-lock" style={{ fontSize: "1.75em", 'color': 'white' }} />
                        </NavIcon>
                        <NavText style={{ 'color': 'white' }}>Admins</NavText>
                    </NavItem>
                    <NavItem eventKey="settings" onClick={this.navigate('/settings')}>
                        <NavIcon>
                            <i className="fa fa-fw fa-cogs" style={{ fontSize: "1.75em", 'color': 'white' }} />
                        </NavIcon>
                        <NavText style={{ 'color': 'white' }}>Settings</NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        );
    }
}

export default withRouter(Sidebar)