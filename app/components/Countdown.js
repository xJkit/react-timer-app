import React, {Component} from 'react'
//Components
import Clock from 'Clock'
import CountdownForm from 'CountdownForm'

class Countdown extends Component {
  constructor(props){
    super(props)

    this.state = {
      totalSec: 0,
      countStatus: 'stopped'
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

  componentDidUpdate(prevProps, prevState) {
    if (this.state.totalSec > 0){
      setTimeout( () => {
        this.setState({totalSec: this.state.totalSec - 1})
      }, 1000)
    } else {
      this.setState({
        countStatus: 'stopped'
      })
    }
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
