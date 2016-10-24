import React, {PropTypes} from 'react'

const Controls = (props) => {
  const {countStatus, setCountStatus} = props
  const renderStartStopBtn = () => {
    if (countStatus == 'counting'){
      return(
        <div className="button-group">
          <button className="button alert pause" onClick={(e) => setCountStatus('paused')}>
            Pause
          </button>
        </div>
      )
    } else {
      return (
        <div className="button-group">
          <button className="button primary start" onClick={(e) => setCountStatus('counting')}>
            Start
          </button>
        </div>
      )
    }
  }

  return (
    <div className="controls">
      {renderStartStopBtn()}
      <button className="button hollow primary clear" onClick={(e) => setCountStatus('stopped')}>Clear</button>
    </div>
  )
}

Controls.propTypes = {
  countStatus: PropTypes.string,
  setCountStatus: PropTypes.func
}


export default Controls
