import React from 'react';
import _ from 'lodash';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    navItems = [
        {
            link: '/',
            active: false,
            display: 'Patients'
        },
        {
            link: '/',
            active: true,
            display: 'Appointments'
        },
        {
            link: '/',
            active: false,
            display: 'Doctors'
        },
        {
            link: '/',
            active: false,
            display: 'Admins'
        },
        {
            link: '/',
            active: false,
            display: 'Settings'
        }
    ]

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    renderNavItems = () => {
        return (
            _.map(this.navItems, (navItem) => {
                return (
                    <NavItem>
                        <NavLink href={navItem.link} className="ml-3 text-uppercase">{navItem.display}</NavLink>
                    </NavItem>
                )
            })
        )
    }

    render() {
        return (
            <div className="nav-bar">
                <Navbar className="p-3" color="dark" dark expand="md">
                    <NavbarBrand href="/" className="ml-3">AromedMedical</NavbarBrand>
                    <NavbarToggler onClick={() => this.toggle()} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" pills navbar>
                            {this.renderNavItems()}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div >
        );
    }
}

export default NavBar;