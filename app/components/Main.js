import React from 'react'

//components
import Nav from 'Nav'

//Routing Root
const ROOT = '/'

const Main = ({children}) => (
  <div>
    <Nav />
    {children}
  </div>
)

export default Main
