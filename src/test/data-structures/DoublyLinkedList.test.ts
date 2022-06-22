import { describe, expect, it } from 'vitest'
import { DoublyLinkedList } from '../../data-structures/DoublyLinkedList'

describe('Doubly Linked List', () => {
  it('Should create an empty doublyLinkedList', () => {
    const ll = new DoublyLinkedList()
    expect(ll.length).toBe(0)
  })
})
