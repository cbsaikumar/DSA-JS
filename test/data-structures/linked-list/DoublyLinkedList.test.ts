import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { DoublyLinkedList } from '../../../src/data-structures/linked-list/DoublyLinkedList'

describe('Doubly Linked List', () => {
  let ll: DoublyLinkedList
  beforeEach(() => {
    ll = new DoublyLinkedList()
  })

  afterEach(() => {
    ll = new DoublyLinkedList()
  })
  it('Should create an empty doublyLinkedList', () => {
    expect(ll.length).toBe(0)
  })

  it('Should test insert method', () => {
    ll.insertAt(0, 1)
    ll.insertAt(1, 2)
    ll.insertAt(0, 3)

    expect(ll.length).toBe(3)
    expect(ll.pop()?.value).toBe(2)
  })

  it('Should test reverse method', () => {
    ll.insertAt(0, 1)
    ll.insertAt(1, 2)
    ll.insertAt(0, 3)
    // 3, 1, 2

    expect(ll.reverse()).toStrictEqual([2, 1, 3])
  })

  it('Should test set method', () => {
    ll.insertAt(0, 1)
    ll.insertAt(1, 2)
    ll.insertAt(0, 3)
    // 3, 1, 2

    expect(ll.get(2)?.value).toBe(2)
    ll.set(2, 20)

    expect(ll.pop()?.value).toBe(20)
  })
})
