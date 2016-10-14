import React from 'react'
//components
import Clock from 'Clock'
import Controls from 'Controls'

const Timer = (props) => {
  return (
    <div className="container">
      <h1>Timer</h1>
      <Clock />
      <Controls {...props} onIsPlay={(cond) => props.onIsPlay(cond) }/>
    </div>)

}



export default Timer
