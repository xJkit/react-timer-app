import React from 'react'
import {Link} from 'react-router'

const Nav = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">React Timer App</li>
        <li><Link activeClassName="active" to="timer">Timer</Link></li>
        <li><Link activeClassName="active" to="countdown">Countdown</Link></li>
        <li><Link activeClassName="active" to="about">About</Link></li>
      </ul>
    </div>
    <div className="top-bar-right">
      <ul className="menu authors">
        <li>Created by</li>
        <li><a href="https://github.com/xJkit">Jay Chung</a></li>
      </ul>
    </div>
  </div>
)

export default Nav
