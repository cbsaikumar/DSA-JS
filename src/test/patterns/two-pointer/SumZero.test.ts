import { describe, it, expect } from 'vitest'
import { sumZero } from '../../../patterns/two-pointer/SumZero'

describe('Validate sumZero', () => {
  it('should return pair whose sum is 0', () => {
    expect(sumZero([-3, -2, 0, 1, 2, 3])).toEqual([-3, 3])
    expect(sumZero([-3, -1, 0, 1, 5])).toEqual([-1, 1])
  })

  it('should return undefined when no pair sum is 0', () => {
    expect(sumZero([-3, -2, 0, 1, 4, 5])).toEqual(undefined)
  })
})
