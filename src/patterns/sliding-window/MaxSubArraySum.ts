// given an array and sub array length, return the max sum of subarray of length n
export function maxSubArraySum(input: Array<number>, n: number): number {
  let maxSum = 0
  for (let i = 0; i < n; i++) {
    maxSum += input[i]
  }
  for (let i = n; i < input.length; i++) {
    const tempSum = maxSum - input[i - n] + input[i]
    maxSum = Math.max(tempSum, maxSum)
  }
  return maxSum
}
