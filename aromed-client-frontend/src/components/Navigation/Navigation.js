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
import { compose } from 'recompose';

import { AuthUserContext } from '../Session';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';


class NavigationBase extends React.Component {
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

    signOutUser = () => {
        this.props.firebase.doSignOut();
    }

    NavGuest() {
        return (
            <Navbar className="p-3" color="dark" dark expand="md">
                <NavbarBrand href={ROUTES.HOME} className="ml-3">AromedMedical</NavbarBrand>
                <NavbarToggler onClick={() => this.toggle()} />
                <Collapse isOpen={this.state.isOpen} navbar>
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
                </Collapse>
            </Navbar>
        );
    }

    NavDoctor() {
        return (
            <Navbar className="p-3" color="dark" dark expand="md">
                <NavbarBrand href={ROUTES.APPOINTMENT_UPCOMING} className="ml-3">AromedMedical</NavbarBrand>
                <NavbarToggler onClick={() => this.toggle()} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" pills navbar>
                        <NavItem>
                            <NavLink href={ROUTES.APPOINTMENT_UPCOMING} className="ml-3 text-uppercase">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={ROUTES.SEARCH_DOCTORS} className="ml-3 text-uppercase">Doctors</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={ROUTES.ACCOUNT_SETTINGS} className="ml-3 text-uppercase">Settings</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.signOutUser()} className="ml-3 text-uppercase">Logout</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }

    NavPatient() {
        return (
            <Navbar className="p-3" color="dark" dark expand="md">
                <NavbarBrand href={ROUTES.PATIENT_DASHBOARD} className="ml-3">AromedMedical</NavbarBrand>
                <NavbarToggler onClick={() => this.toggle()} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" pills navbar>
                        <NavItem>
                            <NavLink href={ROUTES.PATIENT_DASHBOARD} className="ml-3 text-uppercase">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={ROUTES.CREATE_APPOINTMENT} className="ml-3 text-uppercase">Appointment</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={ROUTES.SEARCH_DOCTORS} className="ml-3 text-uppercase">Doctors</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={ROUTES.ACCOUNT_SETTINGS} className="ml-3 text-uppercase">Settings</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.signOutUser()} className="ml-3 text-uppercase">Logout</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }

    render() {
        return (
            <AuthUserContext.Consumer>
                {authUser =>
                    authUser && !!authUser.roles[ROLES.PATIENT] ? this.NavPatient() :
                        (authUser && !!authUser.roles[ROLES.DOCTOR]) ? this.NavDoctor() : this.NavGuest()}
            </AuthUserContext.Consumer>
        );
    }
}

const Navigation = compose(withFirebase)(NavigationBase);

export default Navigation;