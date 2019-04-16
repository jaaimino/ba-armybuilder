import React from 'react';
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

export default class MainNav extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand tag={RRNavLink} exact to="/" activeClassName="active">BA Armybuilder</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink tag={RRNavLink} exact to="/factions" activeClassName="active">Factions</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={RRNavLink} exact to="/list" activeClassName="active">List</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }