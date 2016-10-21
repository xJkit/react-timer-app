import React from 'react'
import {shallow, mount, render} from 'enzyme'
import expect from 'expect'


//component
import CountdownForm from 'CountdownForm'

describe('Component Test: <CountdownForm />', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist
  })

  it('should input field and submit button exist', () => {
    const wrapper = shallow(<CountdownForm />)
    expect(wrapper.find('input')).toExist
    expect(wrapper.find('button')).toExist
  })

  it('should call setTotalSec if valid seconds entered', () => {
    const spy = expect.createSpy()
    const countdownForm = mount(<CountdownForm setTotalSec={spy} />)
    countdownForm.find('input').get(0).value='109'
    countdownForm.simulate('submit')
    expect(spy).toHaveBeenCalledWith(109)
  })

  it('should not call setTotalSec if invalid input entered', () => {
    const spy = expect.createSpy()
    const countdownForm = mount(<CountdownForm secTotalSec={spy} />)
    countdownForm.find('input').get(0).value="abc" //invalid input
    countdownForm.simulate('submit')
    expect(spy).toNotHaveBeenCalled()
  })

})
