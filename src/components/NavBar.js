import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Badge, Glyphicon } from 'react-bootstrap';

class NavBar extends Component {
  constructor(props) {
      super(props);
        // This binding is necessary to make `this` work in the callback
      this.handleChatClick = this.handleChatClick.bind(this);
    }

  handleChatClick() {
      alert('yoyoyo');
    }

  render() {
      return (
          <div>
              <Navbar className="staticTop" inverse collapseOnSelect>
                  <Navbar.Header>
                      <Navbar.Brand>
                          <a href="#">Chef Ready</a>
                        </Navbar.Brand>
                      <Navbar.Toggle />
                    </Navbar.Header>
                  <Navbar.Collapse>
                      <Nav >
                          <NavItem eventKey={1} href="#" onClick={this.handleChatClick}>Chat <Badge>42</Badge></NavItem>
                          <NavItem eventKey={2} href="#">Events <Badge>854</Badge></NavItem>
                          <NavItem eventKey={3} href="#">Chefs <Badge>3</Badge></NavItem>
                          <NavDropdown eventKey={3} title="Additional Documents" id="basic-nav-dropdown">
                              <MenuItem eventKey={3.1}>Insurance</MenuItem>
                              <MenuItem eventKey={3.2}>Equipment</MenuItem>
                              <MenuItem eventKey={3.3}>Invoices</MenuItem>
                              <MenuItem divider />
                              <MenuItem eventKey={3.3}><Glyphicon glyph="glyphicon glyphicon-upload" /> Upload</MenuItem>
                            </NavDropdown>
                        </Nav>
                      <Nav pullRight>
                          <NavItem eventKey={1} href="#"><Glyphicon glyph="glyphicon glyphicon-user" /> Settings</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }

}

export default NavBar;
