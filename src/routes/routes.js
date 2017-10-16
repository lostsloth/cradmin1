import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from '../store/store';
import IndexPage from '../containers/IndexPage';
import DocumentsPage from '../containers/DocumentsPage';
import EventPage from '../containers/EventPage';
import ChefPage from '../containers/ChefPage';
import InsurancePage from '../containers/InsurancePage';
import EquipmentPage from '../containers/EquipmentPage';
import InvoicePage from '../containers/InvoicePage';
import SettingsPage from '../containers/SettingsPage';
import NotFound from '../containers/NotFound';

export default (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/">
        <IndexRoute component={IndexPage} />
        <Route path="documents" component={DocumentsPage} />
        <Route path="event" component={EventPage} />
        <Route path="chef" component={ChefPage} />
        <Route path="insurance" component={InsurancePage} />
        <Route path="equipment" component={EquipmentPage} />
        <Route path="invoice" component={InvoicePage} />
        <Route path="settings" component={SettingsPage} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
);
