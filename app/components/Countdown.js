import React, {Component} from 'react'
//Components
import Clock from 'Clock'
import CountdownForm from 'CountdownForm'

class Countdown extends Component {
  constructor(props){
    super(props)

    this.state = {
      totalSec: 0,
    }
  }

  render() {
    const {totalSec} = this.state
    return (
      <div className="container">
        <h1>Countdown</h1>
        <Clock totalSec={totalSec} />
        <CountdownForm
          setTotalSec={(sec) => this.setTotalSec(sec)}
          setCountStatus={(status) => this.setCountStatus(status)}
        />
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState) {
    const {totalSec, countStatus} = this.state
    if (totalSec > 0 && countStatus == 'counting'){
      //keep ticking
      setTimeout( () => {
        this.setTotalSec(totalSec - 1)
      }, 1000)
    } else if(this.state.countStatus == 'counting'){
      this.setCountStatus('stopped')
    }
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


  //----
}

export default Countdown
