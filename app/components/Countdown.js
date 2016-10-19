import React from 'react'
//Components
import Clock from 'Clock'

const Countdown = (props) => (
  <div className="container">
    <h1>Countdown</h1>
    <Clock sec={100}/>
  </div>
)

export default Countdown
