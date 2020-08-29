import React from 'react';
<<<<<<< HEAD
import ReactDom from 'react-dom';
import './wdyr';
=======
import ReactDom, { hydrate } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

>>>>>>> 38a59041df9a5a1d9457f3dc750a0fa9a0c067b8
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
