import { describe, expect, it } from 'vitest'
import { MaxBinaryHeap } from '../../../data-structures/tree/Heap'

describe('Heap', () => {
  it('should initialize new heap with 0 size', () => {
    const heap = new MaxBinaryHeap()
    expect(heap.size()).toBe(0)
  })

  it('should test insert method', () => {
    const heap = new MaxBinaryHeap()
    heap.insert(10)
    heap.insert(15)
    heap.insert(25)
    heap.insert(5)

    expect(heap.size()).toBe(4)
  })

  it('should test extractMax method', () => {
    const heap = new MaxBinaryHeap()
    heap.insert(10)
    heap.insert(15)
    heap.insert(25)
    heap.insert(5)

    expect(heap.size()).toBe(4)
    expect(heap.extractMax()).toBe(25)
    expect(heap.size()).toBe(3)
  })
})
