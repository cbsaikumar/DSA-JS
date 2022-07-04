class Node {
  value: string
  priority: number
  constructor(value: string, priority: number) {
    this.value = value
    this.priority = priority
  }
}

// Implement priority queue by min binary heap
export class PriorityQueue {
  private values: Node[]

  constructor() {
    this.values = []
  }

  private swap = (arr: Node[], firstIdx: number, secondIdx: number) => {
    const temp = arr[firstIdx]
    arr[firstIdx] = arr[secondIdx]
    arr[secondIdx] = temp
  }

  enqueue(value: string, priority: number): Node[] {
    const node = new Node(value, priority)
    this.values.push(node)

    let elementIdx = this.values.length - 1

    // bubble-up the element to place it at right index
    // eslint-disable-next-line
    while (true) {
      const parentIdx = Math.floor(Math.abs(elementIdx - 1) / 2) // Math.abs just to handle the first element enqueue
      if (this.values[elementIdx].priority >= this.values[parentIdx].priority)
        break
      this.swap(this.values, parentIdx, elementIdx)
      elementIdx = parentIdx
    }

    return this.values
  }

  dequeue(): Node | undefined {
    let elementIdx = 0
    let newIdx = this.values.length - 1

    this.swap(this.values, elementIdx, newIdx)
    const min = this.values.pop()

    // eslint-disable-next-line
    while (true) {
      const first = 2 * elementIdx + 1
      const second = 2 * elementIdx + 2

      if (first >= this.values.length || second >= this.values.length) break
      if (
        this.values[elementIdx].priority <= this.values[first].priority &&
        this.values[elementIdx].priority <= this.values[second].priority
      )
        break
      if (
        this.values[elementIdx].priority > this.values[first].priority &&
        this.values[elementIdx].priority > this.values[second].priority
      )
        if (this.values[first].priority < this.values[second].priority)
          newIdx = first
        else newIdx = second
      else if (this.values[first].priority < this.values[elementIdx].priority)
        newIdx = first
      else newIdx = second

      this.swap(this.values, newIdx, elementIdx)
      elementIdx = newIdx
    }

    return min
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
// eslint-disable-next-line
function test() {
  const q = new PriorityQueue()
  q.enqueue('High fever', 3)
  q.enqueue('Gun shot', 1)
  q.enqueue('Hair fall', 10)
  q.enqueue('Common cold', 8)
  q.enqueue('Cough', 7)
  q.enqueue('Low fever', 5)

  console.log(q.dequeue())
  console.log(q.dequeue())
  console.log(q.dequeue())
  console.log(q.dequeue())
  console.log(q.dequeue())
  console.log(q.dequeue())
  console.log(q.dequeue())
}

// test()
