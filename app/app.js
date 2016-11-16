import React from 'react'
import ReactDOM from 'react-dom'
import routes from 'routes'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';

// Load foundation
$(document).foundation();

// Load custom css: app.scss
import 'style!css!sass!applicationStyles'
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
  ,document.getElementById('app')
);
