import { describe, it, expect } from 'vitest'
import { validAnagrams } from '../../../src/patterns/frequency-pattern/Anagram'

describe('Validate validAnagrams', () => {
  it('should return true for valid inputs', () => {
    expect(validAnagrams('cinema', 'iceman')).toBe(true)
    expect(validAnagrams('anagram', 'nagaram')).toBe(true)
  })

  it('should return false for invalid inputs', () => {
    expect(validAnagrams('apple', 'leaap')).toBe(false)
    expect(validAnagrams('anagrams', 'nagaramm')).toBe(false)
  })
})
