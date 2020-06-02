import React, { Component } from 'react'

import './Sidebar.css';

export class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li><a href="#">Upcoming Appointments</a></li>
                    <li><a href="#">Previous Appointments</a></li>
                    <li><a href="#">Profile Settings</a></li>
                </ul>
            </div>
        )
    }
}

export default Sidebar
