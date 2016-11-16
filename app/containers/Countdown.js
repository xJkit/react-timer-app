import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
//Components
import Clock from 'Clock'
import CountdownForm from 'CountdownForm'
import Controls from 'Controls'

class Countdown extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    // if (nextState.countStatus == 'paused') {
    //   clearTimeout(this.timer)
    //   return true
    // } else  if (nextState.countStatus == 'stopped'){
    //   nextState.totalSec = 0
    //   return true
    // } else {
    //   return true
    // }
    switch (nextProps.countStatus) {
      case 'paused':
        clearTimeout(this.timer)
        return true
      case 'stopped':
        this.props.setCountdownSec(0)
        return true
      default:
        return true
    }
  }

  render() {
    const {totalSec, countStatus} = this.props
    return (
      <div className="countdown">
        <h1>Countdown</h1>
        <Clock totalSec={totalSec} countStatus={countStatus}/>
        {this.renderControlArea(countStatus)}
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState) {
    const {totalSec, countStatus} = this.props
    if (totalSec > 0 && countStatus == 'counting'){
      //keep ticking
      this.timer = setTimeout( () => {
        this.setTotalSec(totalSec - 1)
      }, 1000)
    } else if(countStatus == 'counting'){
      this.setCountStatus('stopped')
    }
  }
  // componentWillMount() {
  //   console.log('countdown component will mount')
  // }
  componentWillUnmount() {
    clearTimeout(this.timer)
    this.props.setCountdownSec(0)
    this.props.setCountdownStatus('stopped')
  }

  //---helper functions
  setTotalSec(sec) {
    this.props.setCountdownSec(sec)
  }
  setCountStatus(status) {
    this.props.setCountdownStatus(status)
  }

  renderControlArea(status) {
    if (status !== 'stopped') {
      return (
        <Controls
          countStatus={status}
          setCountStatus={(status) => this.setCountStatus(status)}
        />
      )
    } else {
      return (
        <CountdownForm
          setTotalSec={(sec) => this.setTotalSec(sec)}
          setCountStatus={(status) => this.setCountStatus(status)}
        />
      )
    }
  }
}

Countdown.propTypes = {
  totalSec: PropTypes.number.isRequired,
  countStatus: PropTypes.string.isRequired,
  setCountdownSec: PropTypes.func.isRequired,
  setCountdownStatus: PropTypes.func.isRequired,
}

export default connect(state => ({
  countStatus: state.status,
  totalSec: state.sec,
}), {
  setCountdownSec: actions.setCountdownSec,
  setCountdownStatus: actions.setCountdownStatus
})(Countdown)
