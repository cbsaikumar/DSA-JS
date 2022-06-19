export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))

  return merge(left, right)
}

function merge(arr1: number[], arr2: number[]): number[] {
  const ans: number[] = []

  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      ans.push(arr1[i])
      i++
    } else {
      ans.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    ans.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    ans.push(arr2[j])
    j++
  }
  return ans
}

console.log(mergeSort([199, 10, 166, 49, 600, 4, -5, 94, 102, -99, 23, 56, 0]))
