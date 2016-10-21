import React from 'react'
import {expect} from 'chai'
import {shallow, mount, render} from 'enzyme'


//Components
import Clock from 'Clock'

describe('Component Test: <Clock />', () => {
  it('should exist', () => {
    expect(Clock).to.exist
  })

  it('should render seconds', () => {
    const wrapper = shallow(<Clock />)
    expect(wrapper.find('.sec').length).to.equal(1)
  })

  it('allows us to set props', () => {
    const wrapper = mount(<Clock sec={999999999}/>)
    expect(wrapper.props().sec).to.equal(999999999)
  })

  it('check the sec rendered equals the props', () => {
    const wrapper = mount(<Clock totalSec={61} />)
    expect(wrapper.find('.sec').text()).to.equal('01:01')
  })
})
