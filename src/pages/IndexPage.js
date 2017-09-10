import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import logo from '../logo.svg';
import './IndexPage.less';
import ReactS3Uploader from 'react-s3-uploader';
import Input from '../components/Input';
import styles from './IndexPage.less';

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
                <div className={styles.App}>
                    <NavBar />
                    <div className={'{styles.App-header} fixedTop'}>
                        <p className={'{styles.App-intro}'}>
                            This page needs to:
                        <code className={`{styles.codeStyleLineBreaks}`}>Iniate Chats</code>
                            <code className={`{styles.codeStyleLineBreaks}`}>Event Object (location, equipment)</code>
                            <br /><code>Event Object Lists</code>
                            <br /><code>Chef Object (Name, location, equipment)</code>
                            <br /><code>Chef Object lists</code>
                            <br /><code>Cool Component to view menus! accept, send back, etc.. </code>
                            <br /><code>Cool Component to push files! drag from list</code>
                        </p>
                        <button onClick={this.handleClick}>
                            {this.state.isToggleOn ? 'ON' : 'OFF'}
                        </button>
                        <ReactS3Uploader />
                        <Input />
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
