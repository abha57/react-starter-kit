import React from 'react';
import ReactDom, { hydrate } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import App from './app';
import ErrorComponent from './components/ErrorComponent';

import configureStore from './redux/store';
import './styles/index';
import './styles';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);
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

// hydrate();
// // <Provider store={store}>
// //   <App />
// // </Provider>,
// <Provider store={store}>
//   <BrowserRouter>
//     {/* <Switch>
//       <Route path="/" component={App} exact />
//       <Route component={ErrorComponent} />
//     </Switch> */}
//     <App />
//   </BrowserRouter>
// </Provider>,
// document.getElementById('root')

if (module.hot)
  // eslint-disable-line no-undef
  module.hot.accept(); // eslint-disable-line no-undef
