import { expect } from 'chai'
import ping from '../src'
import requiredPing = require('../src')

// TODO: Create temporary HTTP service for test

describe('ping tests', () => {
  it('will export module as default and as commonjs', () => {
    const isEqual = ping === requiredPing
    expect(isEqual).to.equal(true)
  })

  it('will ping google.com and return a response time', done => {
    ping('google.com')
      .then(time => {
        expect(time).to.be.above(0)
        done()
      })
      .catch(done)
  })

  it('will return -1 when a domain cannot be reached', done => {
    ping('some-domain-that-better-not-exist.fake')
      .then(done)
      .catch(error => {
        expect(error).to.equal(-1)
        done()
      })
  })

  it('will use https if protocol provided in url', done => {
    ping('https://google.com')
      .then(time => {
        expect(time).to.be.above(0)
        done()
      })
      .catch(done)
  })
})
