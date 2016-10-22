import React from 'react'
//components
import Clock from 'Clock'

const Timer = (props) => {
  return (
    <div className="container">
      <h1>Timer</h1>
      <Clock {...props} />
    </div>)

}



export default Timer
