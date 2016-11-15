import React, {PropTypes} from 'react'

const Clock = (props) => {

  const {totalSec, countStatus} = props
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


  const renderClock = () => {
    if(countStatus == 'stopped'){
      return(
        <div className="clock primary">
          <span className="sec">{formatSeconds(totalSec)}</span>
        </div>
      )
    } else {
      return(
        <div className="clock alert">
          <span className="sec">{formatSeconds(totalSec)}</span>
        </div>
      )
    }
  }
  // --------

  return(
    renderClock()
  )
}

Clock.propTypes = {
  totalSec: PropTypes.number,
  countStatus: PropTypes.string
};

//checks
Clock.defaultProps = {
  totalSec: 0,
  countStatus: 'stopped'
}


export default Clock
