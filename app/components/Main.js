import React from 'react'

//components
import Nav from 'Nav'

const Main = ({children}) => (
  <div>
    <Nav />
    {children}
  </div>
)

export default Main
