import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import styles from './chatPage.less';

class Documents extends Component {
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
          <NavBar />
          <Glyphicon glyph="glyphicon glyphicon-upload" /> Upload Docs
      </div>
    );
  }
}

Documents.propTypes = {
  children: PropTypes.node,
};

export default Documents;
