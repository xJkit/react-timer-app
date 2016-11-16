import React from 'react'
import ReactDOM from 'react-dom'
import routes from 'routes'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { Router, browserHistory } from 'react-router'

// Load foundation
$(document).foundation();

// Load custom css: app.scss
import 'style!css!sass!applicationStyles'
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
  ,document.getElementById('app')
);
