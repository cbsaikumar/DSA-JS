// Binary trea where each node is greater than it's both children (should be true recursively - meaning for every node)
export class MaxBinaryHeap {
  private values: number[]

  constructor() {
    this.values = []
  }

  private swap = (arr: number[], firstIdx: number, secondIdx: number) => {
    const temp = arr[firstIdx]
    arr[firstIdx] = arr[secondIdx]
    arr[secondIdx] = temp
  }

  insert(value: number): number[] {
    this.values.push(value)

    let elementIdx = this.values.length - 1

    // bubble-up the element to place it at right index
    while (true) {
      const parentIdx = Math.floor(Math.abs(elementIdx - 1) / 2) // Math.abs just to handle the first element insert
      if (this.values[elementIdx] <= this.values[parentIdx]) break
      this.swap(this.values, elementIdx, parentIdx)
      elementIdx = parentIdx
    }

    return this.values
  }

  extractMax(): number | undefined {
    let max
    let elementIdx = 0
    let newIdx = this.values.length - 1

    this.swap(this.values, elementIdx, newIdx)
    max = this.values.pop()

    while (true) {
      const first = 2 * elementIdx + 1
      const second = 2 * elementIdx + 2

      if (first >= this.values.length || second >= this.values.length) break
      if (
        this.values[elementIdx] >= this.values[first] &&
        this.values[elementIdx] >= this.values[second]
      )
        break
      if (
        this.values[elementIdx] < this.values[first] &&
        this.values[elementIdx] < this.values[second]
      )
        if (this.values[first] > this.values[second]) newIdx = first
        else newIdx = second
      else if (this.values[first] > this.values[elementIdx]) newIdx = first
      else newIdx = second

      this.swap(this.values, newIdx, elementIdx)
      elementIdx = newIdx
    }

    return max
  }

  size() {
    return this.values.length
  }

  print() {
    console.log(this.values)
    return this.values
  }
}

// @ts-ignore
function test() {
  const heap = new MaxBinaryHeap()
  heap.insert(10)
  heap.insert(5)
  heap.insert(32)
  heap.insert(8)
  heap.insert(25)
  heap.insert(67)
  heap.insert(3)
  heap.insert(99)
  heap.insert(100)
  // heap.print()
  console.log(heap.extractMax())
  // console.dir(heap, { depth: 1 })
  heap.print()
}
