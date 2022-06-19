export function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr

  const pivot = findPivot(arr, 0, arr.length)

  return [
    ...quickSort(arr.slice(0, pivot)),
    arr[pivot],
    ...quickSort(arr.slice(pivot + 1, arr.length)),
  ]
}

function findPivot(arr: number[], start = 0, end: number = arr.length): number {
  const pivot = arr[start]
  let swapIdx = start
  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, i, swapIdx)
    }
  }
  swap(arr, swapIdx, start)

  return swapIdx
}
function swap(arr: number[], i: number, j: number) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

console.log(
  quickSort([199, 10, 166, 49, -186, 600, 4, -5, 94, 102, -99, 23, 56, 0])
)
console.log(quickSort([3, 2, 1]))
console.log(quickSort([1, 2, 3]))

Math.pow(10, 2)
