import React from 'react'

const Controls = (props) => {
  const {isPlaying, onIsPlay} = props

  const renderButton = (cond) => {
    if (cond){
      return(
        <div className="button-group controls">
          <button onClick={() => onIsPlay(false)} className="button alert left">Pause</button>
          <button  className="button alert hollow right">Loop</button>
        </div>
      )
    } else {
      return (
        <div className="button-group controls">
          <button onClick={() => onIsPlay(true)} className="button primary left">Start</button>
          <button className="button primary hollow right">Clear</button>
        </div>
      )
    }
  }

  return (
    <div>
      {renderButton(isPlaying)}
    </div>
  )
}


export default Controls
