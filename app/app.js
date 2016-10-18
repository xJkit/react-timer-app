import React from 'react'
import ReactDOM from 'react-dom'
import routes from 'routes'

// Load foundation
$(document).foundation();

// Load custom css: app.scss
import 'style!css!sass!applicationStyles'

ReactDOM.render(
  routes,
  document.getElementById('app')
);
