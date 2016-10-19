const React = require('react')
const ReactDOM = require('react-dom')
const TestUtils = require('react-addons-test-utils')
const {expect} = require('chai')

//Components
const Clock = require('Clock')

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).to.exist
  })
})
