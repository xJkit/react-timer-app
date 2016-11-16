import React from 'react'
import ReactDOM from 'react-dom'
import routes from 'routes'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

// Load foundation
$(document).foundation();

// Load custom css: app.scss
import 'style!css!sass!applicationStyles'
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>
  ,document.getElementById('app')
);
