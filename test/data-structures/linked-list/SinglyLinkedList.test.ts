import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { LinkedList } from '../../../src/data-structures/linked-list/SinglyLinkedList'

describe('SinglyLinkedList', () => {
  let ll: LinkedList
  beforeEach(() => {
    ll = new LinkedList()
  })

  afterEach(() => {
    ll.clearAll()
  })

  it('Should create an empty linked list', () => {
    expect(ll.size()).toBe(0)
  })

  it('Should test push method', () => {
    ll.push(1)
    ll.push(2)
    expect(ll.size()).toBe(2)
  })

  it('Should test pop method', () => {
    ll.push(1)
    ll.push(2)
    ll.push(3)
    expect(ll.pop()?.value).toBe(3)
  })
})
