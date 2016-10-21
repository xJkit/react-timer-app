import React, {Component} from 'react'
//Components
import Clock from 'Clock'
import CountdownForm from 'CountdownForm'

class Countdown extends Component {
  constructor(props){
    super(props)

    this.state = {
      totalSec: 0
    }
  }

  render() {
    const {totalSec} = this.state
    return (
      <div className="container">
        <h1>Countdown</h1>
        <Clock totalSec={totalSec} />
        <CountdownForm setTotalSec={(sec) => this.setTotalSec(sec)} />
      </div>
    )
  }

  //---helper functions
  setTotalSec(sec) {
    this.setState({
      totalSec: sec
    })
  }


  //----
}

export default Countdown
