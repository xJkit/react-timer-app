import React from 'react'
//components
import Clock from 'Clock'
import Controls from 'Controls'

const Timer = (props) => (
  <div className="container">
    <h1>Timer</h1>
    <Clock />
    <Controls />
  </div>
)

export default Timer
