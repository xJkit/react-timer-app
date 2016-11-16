import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
//components
import Clock from 'Clock'
import Controls from 'Controls'

class Timer extends Component {

  // static propTypes = {
  //   totalSec: PropTypes.number.isRequired,
  //   countStatus: PropTypes.string.isRequired,
  //   setTimerStatus: PropTypes.func.isRequired,
  //   setTimerSec: PropTypes.func.isRequired,
  // }

  shouldComponentUpdate(nextProps, nextState) {

    switch (nextProps.countStatus) {
      case 'paused':
        clearTimeout(this.timer)
        return true
      case 'stopped':
        // nextProps.totalSec = 0
        this.props.setTimerSec(0)
        return true
      default:
        return true
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if(this.props.countStatus == 'counting') {
      this.timer = setTimeout(() => {
        // this.setState({
        //   totalSec: this.state.totalSec + 1
        // })
        this.props.setTimerSec(this.props.totalSec + 1)
      }, 1000)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }


  setCountStatus(status) {
    this.props.setTimerStatus(status)
  }

  render() {
    const {totalSec, countStatus} = this.props

    return(
      <div className="timer">
        <h1>Timer</h1>
        <Clock totalSec={totalSec} countStatus={countStatus}/>
        <Controls countStatus={countStatus} setCountStatus={(status) => this.setCountStatus(status)}/>
      </div>
    )
  }
}

Timer.propTypes = {
  totalSec: PropTypes.number.isRequired,
  countStatus: PropTypes.string.isRequired,
  setTimerStatus: PropTypes.func.isRequired,
  setTimerSec: PropTypes.func.isRequired,
}

export default connect( state => ({
  totalSec: state.sec,
  countStatus: state.status
}), {
  setTimerStatus: actions.setTimerStatus,
  setTimerSec: actions.setTimerSec
})(Timer)
