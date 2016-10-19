const React = require('react')
const ReactDOM = require('react-dom')
const {expect} = require('chai')

//Components
const Clock = require('Clock')

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).to.exist
  })
  //
  // describe('formatSeconds', () => {
  //   it('should format seconds', () => {
  //     let clock = TestUtils.renderIntoDocument(<Clock />)
  //     const sec = 615
  //     const expected = '10:15'
  //     const actual = clock.formatSeconds(sec)
  //
  //     expect(actual).to.equal(expected)
  //   })
  // })
})
