import { validAnagrams } from '../../../patterns/frequency-pattern/Anagram'
import { describe, it, expect } from 'vitest'

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
