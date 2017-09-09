import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import logo from '../logo.svg';
import './IndexPage.less';

class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    }

    

    render() {
        return (
            <div>
                <div className="App">
                    <NavBar />
                    <div className="App-header fixedTop">
                        <p className="App-intro">
                            This page needs to:
                      <br /><code>Iniate Chats</code>
                            <br /><code>Event Object (location, equipment)</code>
                            <br /><code>Event Object Lists</code>
                            <br /><code>Chef Object (Name, location, equipment)</code>
                            <br /><code>Chef Object lists</code>
                            <br /><code>Cool Component to view menus! accept, send back, etc.. </code>
                            <br /><code>Cool Component to push files! drag from list</code>
                        </p>
                        <button onClick={this.handleClick}>
                            {this.state.isToggleOn ? 'ON' : 'OFF'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

IndexPage.propTypes = {
    children: PropTypes.node,
};

export default IndexPage;
