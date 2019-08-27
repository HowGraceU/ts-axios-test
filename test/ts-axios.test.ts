import tsAxios from '../src'

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })
})

describe('GET test', () => {
  it('get method no params', () => {
    tsAxios({
      method: 'get',
      url: '/simple/get',
      params: {
        a: 1,
        b: 2
      },
      cb: data => {
        expect(data).toEqual('/simple/get')
      }
    })
  })
})
