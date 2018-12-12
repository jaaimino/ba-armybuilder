import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

export default () => (
    <Navbar fluid staticTop collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">Bolt Action Army Builder</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
            <LinkContainer to="/example">
                <NavItem eventKey={1}>Example</NavItem>
            </LinkContainer>
            {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown> */}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)