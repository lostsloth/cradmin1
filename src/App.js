import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import routes from './routes';

export default class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    );
  }
}
App.propTypes = {
  store: PropTypes.shape.isRequired,
  history: PropTypes.shape.isRequired,
};
