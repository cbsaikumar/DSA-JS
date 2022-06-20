export class Node<T = number> {
  value: T
  next: Node<T> | null
  prev: Node<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList<T = number> {
  length: number
  head: Node<T> | null
  tail: Node<T> | null

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(value: T): Node<T> {
    const node = new Node<T>(value)
    if (this.length === 0) {
      this.head = node
      this.tail = node
    } else {
      const tail = this.tail

      this.tail!.next = node
      node.prev = tail
      this.tail = node
    }
    this.length++

    return node
  }

  pop(): Node<T> | undefined {
    if (!this.head) {
      return undefined
    }
    let currentTail: Node<T>
    if (this.length === 1) {
      currentTail = this.tail!
      this.head = null
      this.tail = null
    } else {
      currentTail = this.tail!
      const newTail = this.tail!.prev
      newTail!.next = null
      currentTail!.prev = null
      this.tail = newTail
    }
    this.length--
    return currentTail
  }

  shift(): Node<T> | undefined {
    if (!this.head) return undefined

    let currentTail: Node<T>
    currentTail = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      const newHead = this.head.next
      this.head.next = null
      newHead!.prev = null
      this.head = newHead
    }

    this.length--
    return currentTail
  }

  unshift(value: T): Node<T> | undefined {
    if (this.length === 0) return undefined

    if (this.length === 1) return this.push(value)

    const newNode = new Node<T>(value)

    newNode.next = this.head
    this.head!.prev = newNode

    this.head = newNode
    this.length++

    return newNode
  }

  get(index: number): Node<T> | undefined {
    if (index < 0 || index >= this.length || this.length === 0) return undefined

    // first-half
    if (index < this.length / 2) {
      let current = this.head!
      while (index !== 0) {
        current = current!.next!
        index--
      }
      return current
    } else {
      // second-half
      let current = this.tail!

      while (index !== 0) {
        current = current!.prev!
        index--
      }

      return current
    }
  }

  set(index: number, value: T): boolean {
    const node = this.get(index)
    if (!node) return false
    node.value = value
    return true
  }

  reverse(): DoublyLinkedList | undefined {
    if (this.length === 0) return undefined

    let tail = this.tail
    const arr = []
    while (tail) {
      arr.push(tail.value)
      tail = tail.prev
    }
    console.log(arr)
    return ll
  }

  insertAt(index: number, value: T): Node<T> | undefined {
    if (this.length === 0 || index < 0 || index > this.length) return undefined

    if (index === this.length) {
      return this.push(value)
    } else if (index === 0) {
      return this.unshift(value)
    } else {
      const newNode = new Node<T>(value)
      const node = this.get(index - 1)
      const next = node!.next
      node!.next = newNode
      newNode.prev = node!
      newNode.next = next
      next!.prev = newNode

      this.length++
      return newNode
    }
  }

  removeAt(index: number): Node<T> | undefined {
    if (this.length === 0 || index < 0 || index > this.length - 1)
      return undefined

    if (index === this.length - 1) {
      return this.pop()
    } else if (index === 0) {
      return this.shift()
    } else {
      const node = this.get(index - 1)
      const nodeToBeDeleted = node!.next

      node!.next = nodeToBeDeleted!.next
      nodeToBeDeleted!.next!.prev = node!

      this.length--
      return nodeToBeDeleted!
    }
  }

  print() {
    let current = this.head
    const arr: T[] = []
    while (current) {
      arr.push(current.value)
      current = current.next
    }

    console.log(arr)
  }
}

const ll = new DoublyLinkedList()
ll.push(1)
ll.push(2)
ll.push(3)
ll.push(4)

ll.print()
ll.pop()
ll.print()
ll.shift()
ll.print()
ll.unshift(1)
ll.print()
ll.reverse()
console.log(ll.get(1))
ll.set(1, 20)
ll.print()
ll.insertAt(2, 30)
ll.print()
ll.removeAt(1)
ll.print()
ll.removeAt(1)
ll.print()
