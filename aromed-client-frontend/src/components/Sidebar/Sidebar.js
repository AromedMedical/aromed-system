import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { compose } from 'recompose';

import * as ROUTES from '../../constants/routes';

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
                    <NavItem eventKey="upcomming" onClick={this.navigate(ROUTES.APPOINTMENT_UPCOMING)}>
                        <NavIcon>
                            <i className="fa fa-fw fa-calendar-check-o" style={{ fontSize: "1.75em", 'color': 'white' }} />
                        </NavIcon>
                        <NavText style={{ 'color': 'white' }}>Appointments</NavText>
                    </NavItem>
                    <NavItem eventKey="history" onClick={this.navigate(ROUTES.APPOINTMENT_HISTORY)}>
                        <NavIcon>
                            <i className="fa fa-fw fa-history" style={{ fontSize: "1.75em", 'color': 'white' }} />
                        </NavIcon>
                        <NavText style={{ 'color': 'white' }}>History</NavText>
                    </NavItem>
                    <NavItem eventKey="settings" onClick={this.navigate(ROUTES.PROFILE_EDIT)}>
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

export default compose(withRouter)(Sidebar)