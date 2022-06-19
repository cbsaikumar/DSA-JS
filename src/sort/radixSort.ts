export function radixSort(arr: number[]): number[] {
  const mostDigits = getMostDigits(arr)
  for (let i = 0; i < mostDigits; i++) {
    const digitBuckets = Array.from(Array(10), (): number[] => [])
    for (let k = 0; k < arr.length; k++) {
      digitBuckets[getDigitAt(arr[k], i)].push(arr[k])
    }
    // arr = digitBuckets.reduce((prev, current) => [...prev, ...current], [])
    arr = Array.prototype.concat.apply([], digitBuckets)
  }
  return arr
}

function getDigitAt(num: number, index: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10
}

function getDigits(num: number): number {
  return Math.floor(Math.log10(Math.abs(num)))
}

function getMostDigits(nums: number[]): number {
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    ans = Math.max(ans, getDigits(nums[i]))
  }
  return ans
}

console.log(radixSort([102, 232232, 10112, 99, 778, 10, 1000]))
