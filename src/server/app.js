import path from 'path';
import fetch from 'node-fetch';
import express from 'express';
import qs from 'querystring';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import webpack from 'webpack';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import rootReducer from '../client/redux/reducer';
import App from '../client/app';
import clientWebpackConfig from '../../webpack-client.config';
import configureStore from '../client/redux/store';

const app = express();
const distPath = path.join(__dirname, '/static');
var expressStaticGzip = require('express-static-gzip');

// //Serve static files
// app.use('/static', express.static(path.join(__dirname, './static')));
// app.use(express.static(path.join(__dirname)));
app.use(
  expressStaticGzip(path.join(__dirname), {
    enableBrotli: true
  })
);

// This is fired every time the server side receives a request
app.use(handleRender);
// We are going to fill these out in the sections to follow
const url = 'https://api.spacexdata.com/v3/launches';
const makeApiCall = async (cb, filters) => {
  const urlFilters = qs.stringify(filters);
  const response = await fetch(`${url}?${urlFilters}`);
  const data = await response.json();
  cb(data);
};

function handleRender(req, res) {
  const initialFilters = {
    limit: 100
  };
  try {
    makeApiCall(data => {
      const preloadedState = {
        filters: {
          ...initialFilters
        },
        data
      };

      const store = configureStore(preloadedState);

      // Render the component to a string
      const html = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={{}}>
            <App />
          </StaticRouter>
        </Provider>
      );

      // Grab the initial state from our Redux store
      // const preloadedState = store.getState();

      // Send the rendered page back to the client
      res.send(renderFullPage(html, preloadedState));
    }, initialFilters);
  } catch (error) {
    const html = renderToString(
      <div>
        There was some error from server.
        <div>{error}</div>
      </div>
    );
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(renderErrorTemplate(html));
  }
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Sapient Assignment</title>
        <link href="./static/main.css" rel="stylesheet">
      </head>
      <body>
       <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script>
        <div id="root">${html}</div>
        <script src="./static/bundle.js"></script>
      </body>
    </html>
    `;
  /* ..... */
}

function renderErrorTemplate(html) {
  return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Sapient Assignment</title>
        </head>

        <body>
            <div id="app">${html}</div>
        </body>
        </html>
    `;
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log('Press Ctrl+C to quit.');
});
