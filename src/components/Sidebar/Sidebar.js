import React, { Component } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'font-awesome/css/font-awesome.min.css';

export class Sidebar extends Component {
    render() {
        return (
            <SideNav className="Sidebar bg-dark">
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="upcomming">
                    <NavItem eventKey="upcomming">
                        <NavIcon>
                            <i className="fa fa-fw fa-calendar-check-o" style={{ fontSize: "1.75em", 'color': 'white' }} />
                        </NavIcon>
                        <NavText style={{ 'color': 'white' }}>Appointments</NavText>
                    </NavItem>
                    <NavItem eventKey="history">
                        <NavIcon>
                            <i className="fa fa-fw fa-history" style={{ fontSize: "1.75em", 'color': 'white' }} />
                        </NavIcon>
                        <NavText style={{ 'color': 'white' }}>History</NavText>
                    </NavItem>
                    <NavItem eventKey="settings">
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

export default Sidebar