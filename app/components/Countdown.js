import React, {Component} from 'react'
//Components
import Clock from 'Clock'
import CountdownForm from 'CountdownForm'
import Controls from 'Controls'

class Countdown extends Component {
  constructor(props){
    super(props)

    this.state = {
      totalSec: 0,
      countStatus: 'stopped'
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.countStatus == 'paused') {
      clearTimeout(this.timer)
      return true
    } else  if (nextState.countStatus == 'stopped'){
      nextState.totalSec = 0
      return true
    } else {
      return true
    }
  }

  render() {
    const {totalSec, countStatus} = this.state
    return (
      <div className="countdown">
        <h1>Countdown</h1>
        <Clock totalSec={totalSec} countStatus={countStatus}/>
        {this.renderControlArea(countStatus)}
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState) {
    const {totalSec, countStatus} = this.state
    if (totalSec > 0 && countStatus == 'counting'){
      //keep ticking
      this.timer = setTimeout( () => {
        this.setTotalSec(totalSec - 1)
      }, 1000)
    } else if(this.state.countStatus == 'counting'){
      this.setCountStatus('stopped')
    }
  }
  // componentWillMount() {
  //   console.log('countdown component will mount')
  // }
  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  //---helper functions
  setTotalSec(sec) {
    this.setState({
      totalSec: sec
    })
  }
  setCountStatus(status) {
    this.setState({
      countStatus: status
    })
  }

  renderControlArea(status) {
    if (status !== 'stopped') {
      return (
        <Controls
          countStatus={this.state.countStatus}
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


  //----
}

export default Countdown
