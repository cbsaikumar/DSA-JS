import {describe, it, expect} from 'vitest'
import { countUniqValues } from '../../../patterns/two-pointer/CountUniqValues'

describe("Validate sumZero", () => {
    it("should return uniq values count", () => {
        expect(countUniqValues([2,2,3,4,5,5,5,5,5,10])).toBe(5)
        expect(countUniqValues([])).toBe(0)
        expect(countUniqValues([1,2,3])).toBe(3)
        // expect(countUniqValues([1,1,1])).toBe(1)
    })
})