// given a sorted array, return the first pair, whose sum is 0
export function sumZero(input: Array<number>): [number, number] | undefined {
  let left = 0
  let right = input.length - 1

  while (left < right) {
    const sum = input[left] + input[right]
    if (sum === 0) return [input[left], input[right]]
    else if (sum > 0) {
      right--
    } else {
      left++
    }
  }

  return undefined
}
