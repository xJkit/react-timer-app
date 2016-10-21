import React, {PropTypes} from 'react'

const Clock = (props) => {
  const {totalSec} = props
  //------- helper functions
  const formatSeconds = (totalSeconds) => {
    let sec = totalSeconds % 60
    let min = Math.floor(totalSeconds / 60)
    // check for less than 10
    if (sec < 10){
      sec = `0${sec}`
    }

    if (min < 10){
      min = `0${min}`
    }

    return `${min}:${sec}`
  }
  // --------

  return(
    <div className="clock primary">
      <span className="sec">{formatSeconds(totalSec)}</span>
    </div>
  )
}

//checks
Clock.defaultProps = {
  totalSec: 0
}

Clock.propTypes = {
  totalSec: PropTypes.number.isRequired
}

export default Clock
