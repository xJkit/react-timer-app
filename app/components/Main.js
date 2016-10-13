import React, { Component } from 'react'
//components
import Nav from 'Nav'
import Timer from 'Timer'

class Main extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <Nav />
        <Timer />
      </div>
    )
  }
}

export default Main
