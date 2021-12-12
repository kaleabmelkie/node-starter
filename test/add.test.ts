import { add } from '../src/lib/add'

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).resolves.toBe(3)
  })
})
