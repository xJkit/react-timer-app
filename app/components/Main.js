import React, { Component } from 'react'
//components
import Nav from 'Nav'
import Timer from 'Timer'

class Main extends Component {
  constructor(props){
    super(props)

    this.state = {
      isPlaying: false,
      sec: 0,
      min: 0
    }

  }

  render(){
    return(
      <div>
        <Nav />
        <Timer
          {...this.state}
          onIsPlay={ (cond) => this.handleIsPlay(cond) }
          onTimeTicking={() => this.handleTimeTicking()}
        />
      </div>
    )
  }


  handleIsPlay(cond){
    if (cond){
      this.setState({isPlaying: true})
    } else {
      this.setState({isPlaying: false})
    }
  }

  handleTimeTicking(){
    const {sec, min} = this.state
    setInterval(this.setState({
      sec: sec + 1
    }), 1000)
    setInterval(console.log('setInterval executed!'), 1000)
  }

}

export default Main
