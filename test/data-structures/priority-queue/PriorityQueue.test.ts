import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { PriorityQueue } from '../../../src/data-structures/PriorityQueue'

describe('Priority', () => {
  let q: PriorityQueue
  beforeEach(() => {
    q = new PriorityQueue()
  })

  afterEach(() => {
    q = new PriorityQueue()
  })
  it('Should test an empty priorityQueue', () => {
    expect(q.size()).toBe(0)
  })

  it('Should test enqueue method', () => {
    q.enqueue('High fever', 3)
    q.enqueue('Gun shot', 1)
    q.enqueue('Hair fall', 10)
    q.enqueue('Common cold', 8)
    q.enqueue('Cough', 7)
    q.enqueue('Low fever', 5)

    expect(q.size()).toBe(6)
  })

  it('Should test dequeue method', () => {
    q.enqueue('High fever', 3)
    q.enqueue('Gun shot', 1)
    q.enqueue('Hair fall', 10)
    q.enqueue('Common cold', 8)
    q.enqueue('Cough', 7)
    q.enqueue('Low fever', 5)

    expect(q.dequeue()?.value).toStrictEqual('Gun shot')
    expect(q.dequeue()?.value).toStrictEqual('High fever')

    q.dequeue()
    q.dequeue()
    q.dequeue()
    // expect(q.dequeue()?.value).toEqual('Hair fall')
    expect(q.size()).toBe(1)
  })
})
