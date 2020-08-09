import React from 'react';
import ReactDom from 'react-dom';

import App from './app';
import './styles/index';
import './styles';

ReactDom.render(<App />, document.getElementById('root'));

if (module.hot)
  // eslint-disable-line no-undef
  module.hot.accept(); // eslint-disable-line no-undef
