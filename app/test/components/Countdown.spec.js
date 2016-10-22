import React from 'react'
import expect from 'expect'
import {shallow, render, mount} from 'enzyme'
//Component
import Countdown from 'Countdown'

describe('<Countdown />', () => {
  it('should exist', () => {
    expect(Countdown).toExist
  })

  it('should set the total seconds of the state: setTotalSec()', (done) => {
    const countdown = shallow(<Countdown />)
    const countdownInst = countdown.instance()
    countdownInst.setTotalSec(10)
    countdownInst.setCountStatus('counting')
    expect(countdown.instance().state.totalSec).toBe(10)
    setTimeout( () => {
      expect(countdownInst.state.totalSec).toBe(9)
      expect(countdownInst.state.countStatus).toBe('counting')
      done()
    }, 1001)
  })

  it('should the seconds never be negative', (done) => {
    const countdownInst = shallow(<Countdown />).instance()
    countdownInst.setTotalSec(1)
    countdownInst.setCountStatus('counting')
    setTimeout( () => {
      expect(countdownInst.state.totalSec).toBe(0)
      done()
    }, 2001)
  })
})
