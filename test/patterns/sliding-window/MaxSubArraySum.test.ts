import { describe, it, expect } from 'vitest'
import { maxSubArraySum } from '../../../src/patterns/sliding-window/MaxSubArraySum'

describe('Validate maxSubArraySum', () => {
  it('should return max sub array sum', () => {
    expect(maxSubArraySum([1, 2, 3, 4, 5, 6, 10], 3)).toBe(21)
    expect(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17)
    expect(maxSubArraySum([4, 2, 1, 6, 2], 4)).toBe(13)
  })
})
