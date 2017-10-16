import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Badge, Glyphicon } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <div>
          <Navbar >
            <Nav >
              <NavItem eventKey={1} href="documents">Docs <Badge>42</Badge></NavItem>
              <NavItem eventKey={2} href="event">Events <Badge>854</Badge></NavItem>
              <NavItem eventKey={3} href="chef">Chefs <Badge>3</Badge></NavItem>
              <NavDropdown eventKey={3} title="Additional Documents" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1} href="insurance">Insurance</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.2} href="equipment">Equipment</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3} href="invoice">Invoices</MenuItem>               
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="settings"><Glyphicon glyph="glyphicon glyphicon-user" /> Settings</NavItem>
            </Nav>
          </Navbar>
      </div>
    );
  }
}

export default NavBar;
