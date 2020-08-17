import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './app';
import store from './store';
import ErrorComponent from './components/ErrorComponent';
import './styles/index';
import './styles';

ReactDom.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route component={ErrorComponent} />
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

if (module.hot)
  // eslint-disable-line no-undef
  module.hot.accept(); // eslint-disable-line no-undef
