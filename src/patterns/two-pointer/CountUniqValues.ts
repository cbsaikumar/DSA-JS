export function countUniqValues(input: Array<number>): number {
  if (input.length === 0) return 0
  let i = 0
  let j = 1
  while (j < input.length) {
    if (input[i] !== input[j]) {
      i++
      input[i] = input[j]
    }
    j++
  }
  return i + 1
}
