import { LinkedList } from './SinglyLinkedList'

export class Queue<T = number> {
  private items: LinkedList<T>
  private length: number
  constructor() {
    this.items = new LinkedList<T>()
    this.length = 0
  }

  enqueue(value: T) {
    this.length++
    return this.items.push(value)
  }

  dequeue() {
    this.length--
    return this.items.unshift()
  }

  size(): number {
    return this.length
  }

  isEmpty(): boolean {
    return this.size() === 0
  }

  print() {
    this.items.print()
  }
}

const q = new Queue()

q.enqueue(10)
q.enqueue(11)
q.enqueue(12)
q.print()
q.dequeue()
q.print()
