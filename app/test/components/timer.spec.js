import React from 'react'
import {shallow} from 'enzyme'
import expect from 'expect'

//component
import Timer from 'Timer'

describe('<Timer />', () => {
  it('should exist', () => {
    expect(Timer).toExist
  })

  it('should start timer on started status', (done) => {
    const timerInst = shallow(<Timer />).instance()
    timerInst.setCountStatus('counting')
    expect(timerInst.state.totalSec).toBe(0)
    setTimeout( () => {
      expect(timerInst.state.countStatus).toBe('counting')
      expect(timerInst.state.totalSec).toBe(1)
      done()
    }, 1001)
  })

  it('should pause timer on paused status', (done) => {
    const timerWrapper = shallow(<Timer />)
    const timerInst = timerWrapper.instance()
    timerInst.setCountStatus('counting')
    timerWrapper.setState({totalSec: 9})
    timerInst.setCountStatus('paused')
    setTimeout( () => {
      expect(timerInst.state.countStatus).toBe('paused')
      done()
    }, 1001)
  })

  it('should clear count on stopped status', (done) => {
    const timerWrapper = shallow(<Timer />)
    timerWrapper.instance().setCountStatus('counting')
    timerWrapper.setState({totalSec: 10})
    setTimeout( () => {
      timerWrapper.instance().setCountStatus('stopped')
      expect(timerWrapper.state('totalSec')).toBe(0)
      done()
    }, 1001)
  })
})
