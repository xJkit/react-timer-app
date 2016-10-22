import React, {PropTypes} from 'react'

const Controls = (props) => {
  const {countStatus} = props
  const renderStartStopBtn = () => {
    if (countStatus == 'counting'){
      return(
        <div className="button-group">
          <button className="button alert ">Pause</button>
        </div>
      )
    } else if (countStatus == 'paused'){
      return (
        <div className="button-group">
          <button className="button primary ">Start</button>
        </div>
      )
    }
  }

  return (
    <div className="controls">
      {renderStartStopBtn()}
      <button className="button hollow primary">Clear</button>
    </div>
  )
}

Controls.propTypes = {
  countStatus: PropTypes.string.isRequired
}


export default Controls
