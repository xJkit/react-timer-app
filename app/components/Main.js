import React, { Component } from 'react'
//components
import Nav from 'Nav'
import Timer from 'Timer'

class Main extends Component {
  constructor(props){
    super(props)

    this.state = {
      isPlaying: false
    }

  }

  render(){
    return(
      <div>
        <Nav />
        <Timer {...this.state} onIsPlay={ (cond) => this.handleIsPlay(cond) } />
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

}

export default Main
