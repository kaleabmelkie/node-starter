// NOTE: imports should be from 'dist' (or the package root)
import { add } from '../dist/lib/add' // or from '..'

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).resolves.toBe(3)
  })
})
