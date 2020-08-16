import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './app';
import ErrorComponent from './components/ErrorComponent';
import './styles/index';
import './styles';

ReactDom.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route component={ErrorComponent} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot)
  // eslint-disable-line no-undef
  module.hot.accept(); // eslint-disable-line no-undef
