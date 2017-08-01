import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Badge, Glyphicon } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar className="staticTop" inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Chef Ready</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav >
              <NavItem eventKey={1} href="#">Chat <Badge>42</Badge></NavItem>
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
        <div className="App-header fixedTop">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hi Kevin</h2>
        </div>
        <p className="App-intro">
          This page needs to: 
          <br /><code>Iniate Chats</code>
          <br /><code>Event Object (location, equipment)</code>
          <br /><code>Event Object Lists</code>
          <br /><code>Chef Object (Name, location, equipment)</code>
          <br /><code>Chef Object lists</code>
          <br /><code>Cool Component to view menus! accept, send back, etc.. </code>
          <br /><code>Cool Component to push files! drag from list</code>
          <br /><code>...</code>
          <br /><code>...</code> 
          <br /><code>...</code> 
          <br /><code>...</code> 
          <br /><code>...</code> 
          <br /><code>...</code> 
          <br /><code>...</code> 
        </p>
      </div>
    );
  }
}

export default App;
