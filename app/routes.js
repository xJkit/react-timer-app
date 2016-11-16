import React from 'react'
import {Route, IndexRoute, browserHistory} from 'react-router'

// Load components
import Main from 'Main'
import Timer from 'Timer'
import Countdown from 'Countdown'
import About from 'About'
import NotFound from 'NotFound'

// root path
const ROOT = '/'

// main routes
const routes = (
  <Route path={ROOT} component={Main}>
    <IndexRoute component={Timer} />
    <Route path="timer" component={Timer} />
    <Route path="countdown" component={Countdown} />
    <Route path="about" component={About} />
    <Route path="*" component={NotFound} />
  </Route>
)

export default routes
