import React from 'react'

const Nav = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">React Timer App</li>
        <li><a href="#">Timer</a></li>
        <li><a href="#">Countdown</a></li>
      </ul>
    </div>
    <div className="top-bar-right">
      <ul className="menu authors">
        <li>Created by</li>
        <li><a href="#">Jay Chung</a></li>
      </ul>
    </div>
  </div>
)

export default Nav
