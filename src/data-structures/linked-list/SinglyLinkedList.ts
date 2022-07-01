class Node<T = number> {
  value: T
  next: Node<T> | null
  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

export class LinkedList<T = number> {
  private head: Node<T> | null
  private tail: Node<T> | null
  private length: number
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(value: T): Node<T> {
    const node = new Node(value)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail!.next = node
      this.tail = this.tail!.next
    }
    this.length++
    return node
  }

  pop(): Node<T> | undefined {
    if (!this.head) return undefined
    if (this.length === 1) {
      const node = this.head
      this.head = null
      this.tail = null
      this.length--
      return node
    }
    let current = this.head
    while (current.next) {
      current = current.next
    }
    this.tail = current.next
    current.next = null
    this.length--
    return current
  }

  shift(value: T): Node<T> {
    if (this.length === 0) return this.push(value)
    const node = new Node(value)
    node.next = this.head
    this.head = node
    this.length++
    return node
  }

  unshift(): Node<T> | undefined {
    if (this.length === 0) return undefined
    if (this.length === 1) return this.pop()
    const node = this.head
    this.head = this.head!.next
    this.length--

    node!.next = null
    return node!
  }

  get(index: number): Node<T> | undefined {
    if (index >= this.length || index < 0) return undefined
    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current!.next
    }
    return current!
  }

  set(index: number, value: T): boolean {
    if (index < 0 || index >= this.length) return false
    const node = this.get(index)
    node!.value = value
    return true
  }

  insertAt(index: number, value: T): Node<T> | undefined {
    if (index < 0 || index > this.length) return undefined

    if (index === this.length) return this.push(value)

    if (index === 0) return this.shift(value)

    const newNode = new Node(value)
    const node = this.get(index - 1)
    const next = node?.next
    node!.next = newNode
    newNode.next = next!
    this.length++

    return newNode
  }

  removeAt(index: number): Node<T> | undefined {
    if (index < 0 || index > this.length) return undefined

    if (index === this.length) return this.pop()

    if (index === 0) return this.unshift()

    const node = this.get(index - 1)
    const next = node!.next
    node!.next = next!.next
    this.length--

    return next!
  }

  reverse(): LinkedList<T> | undefined {
    if (this.length === 0) return undefined

    let current = this.head
    let prev = null
    let next = null
    this.head = this.tail
    this.tail = current

    for (let i = 0; i < this.length; i++) {
      next = current!.next
      current!.next = prev
      prev = current
      current = next
    }

    return this!
  }

  clearAll() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  size() {
    return this.length
  }

  getItemsAsArray(): T[] {
    const arr = []
    let current = this.head
    while (current) {
      arr.push(current.value)
      current = current.next
    }
    return arr
  }

  print() {
    console.log(this.getItemsAsArray())
  }
}
// @ts-ignore
function test() {
  const ll = new LinkedList()
  ll.push(10)
  ll.push(20)
  ll.push(30)
  ll.print()
  ll.unshift()
  ll.print()
  ll.shift(10)
  ll.push(40)
  console.log(ll.size())
  ll.print()
  console.log(ll.get(3))
  console.log(ll.get(1))
  console.log(ll.set(1, 200))
  ll.print()
  ll.removeAt(1)
  ll.print()

  ll.reverse()
  ll.print()
  ll.set(0, 4000)
  ll.print()
}
