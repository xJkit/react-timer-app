import React from 'react'
import expect from 'expect'
import {shallow, render, mount} from 'enzyme'

import Controls from 'Controls'

describe('<Controls />', () => {
  it('should exist', () => {
    expect(Controls).toExist
  })

  describe('render', () => {
    it('should render start button when countStatus is paused', () => {
      const controlsWrapper = shallow(<Controls countStatus="paused" />)
      expect(controlsWrapper.find('button').length).toBe(2)
      expect(controlsWrapper.find('button').first().text()).toBe('Start')
    })
    it('should render pause button when countStatus is counting', () => {
      const controlsWrapper = shallow(<Controls countStatus="counting" />)
      expect(controlsWrapper.find('button').length).toBe(2)
      expect(controlsWrapper.find('button').first().text()).toBe('Pause')
    })
  })

})
