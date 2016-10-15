import React from 'react'

const Clock = (props) => {
  const {isPlaying, sec, min} = props
  const renderClock = (cond) => {
    if (cond){
      return(
        <div className="clock alert">
          <span className="sec">{`${min}:${sec}`}</span>
        </div>
      )
    } else {
      return(
        <div className="clock primary">
          <span className="sec">{`${min}:${sec}`}</span>
        </div>
      )
    }
  }
  return(
    <div>{renderClock(isPlaying)}</div>
  )
}

export default Clock
