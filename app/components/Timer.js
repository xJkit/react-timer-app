import React, {Component} from 'react'
//components
import Clock from 'Clock'
import Controls from 'Controls'

class Timer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      totalSec: 0,
      countStatus: 'stopped'
    }
  }

  render() {
    const {totalSec, countStatus} = this.state

    return(
      <div className="timer">
        <h1>Timer</h1>
        <Clock totalSec={totalSec} countStatus={countStatus}/>
        <Controls countStatus={countStatus} setCountStatus={(status) => this.setCountStatus(status)}/>
      </div>
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.countStatus == 'paused') {
      clearTimeout(this.timer)
      return true
    } else if (nextState.countStatus == 'stopped') {
      nextState.totalSec = 0
      return true
    } else {
      return true
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.countStatus == 'counting') {
      this.timer = setTimeout(() => {
        this.setState({
          totalSec: this.state.totalSec + 1
        })
      }, 1000)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }


  setCountStatus(status) {
    const newStatus = status
    this.setState({
      countStatus: newStatus
    })
  }


}

export default Timer
