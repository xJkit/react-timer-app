import React, { Component } from 'react'
import {Router, Route} from 'react-router'

//components
import Nav from 'Nav'
import Timer from 'Timer'

//Routing Root
const ROOT = '/'

class Main extends Component {
  constructor(props){
    super(props)

    this.state = {
      isPlaying: false
    }
  }
  // <Timer {...this.state} onIsPlay={ (cond) => this.handleIsPlay(cond) } />

  render(){
    return(
      <div>
        <Nav />
        {this.props.children}
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
