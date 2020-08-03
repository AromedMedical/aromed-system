import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import { AuthUserContext } from '../Session';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    NavGuest() {
        return (
            <Nav className="ml-auto" pills navbar>
                <NavItem>
                    <NavLink href={ROUTES.HOME} className="ml-3 text-uppercase">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href={ROUTES.SEARCH_DOCTORS} className="ml-3 text-uppercase">Doctors</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href={ROUTES.CREATE_APPOINTMENT} className="ml-3 text-uppercase">Appointment</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href={ROUTES.SIGN_UP} className="ml-3 text-uppercase">Sign up</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href={ROUTES.LOGIN} className="ml-3 text-uppercase">Login</NavLink>
                </NavItem>
            </Nav>
        );
    }

    NavDoctor() {
        return (
            <Nav className="ml-auto" pills navbar>
                <NavItem>
                    <NavLink href={ROUTES.HOME} className="ml-3 text-uppercase">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href={ROUTES.SEARCH_DOCTORS} className="ml-3 text-uppercase">Doctors</NavLink>
                </NavItem>
            </Nav>
        );
    }

    NavPatient() {
        return (
            <Nav className="ml-auto" pills navbar>
                <NavItem>
                    <NavLink href={ROUTES.HOME} className="ml-3 text-uppercase">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href={ROUTES.CREATE_APPOINTMENT} className="ml-3 text-uppercase">Appointment</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href={ROUTES.SEARCH_DOCTORS} className="ml-3 text-uppercase">Doctors</NavLink>
                </NavItem>
            </Nav>
        );
    }

    render() {
        return (
            <div>
                <Navbar className="p-3" color="dark" dark expand="md">
                    <NavbarBrand href="/" className="ml-3">AromedMedical</NavbarBrand>
                    <NavbarToggler onClick={() => this.toggle()} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <AuthUserContext.Consumer>
                            {authUser =>
                                authUser && !!authUser.roles[ROLES.PATIENT] ? this.NavPatient() :
                                    (authUser && !!authUser.roles[ROLES.DOCTOR]) ? this.NavDoctor() : this.NavGuest()}
                        </AuthUserContext.Consumer>
                    </Collapse>
                </Navbar>
            </div >
        );
    }
}

export default Navigation;