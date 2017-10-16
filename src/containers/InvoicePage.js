import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import styles from './eventPage.less';

class Invoice extends Component {
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
        <div className={'{styles.codeStyleLineBreaks}'}>
          <NavBar />
          <div className={'{styles.App-header} fixedTop'}>
            <p className={'{styles.codeStyleLineBreaks}'}>
                <code className={styles.codeStyleLineBreaks}>Invoice </code>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  children: PropTypes.node,
};

export default Invoice;
