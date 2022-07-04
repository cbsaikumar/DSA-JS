import { afterEach, beforeEach, describe, expect, it, vitest } from 'vitest'
import { HashTable } from '../../../src/data-structures/hash-table/HashTable'

describe('SinglyLinkedList', () => {
  let ht: HashTable
  beforeEach(() => {
    ht = new HashTable()
  })

  afterEach(() => {
    ht = new HashTable(0)
  })

  it('Should create an empty hash table', () => {
    expect(ht.size()).toBe(0)
  })

  it('Should test set method', () => {
    ht.set('hello', 'hello there')
    ht.set('bye', 'good bye!')

    expect(ht.size()).toBe(2)
  })

  it('Should test get method', () => {
    ht.set('hello', 'hello there')
    ht.set('bye', 'good bye!')

    expect(ht.get('bye')).toStrictEqual('good bye!')
    expect(ht.get('unknown')).toBeUndefined()
  })

  it('Should test keys method', () => {
    ht.set('hello', 'hello there')
    ht.set('bye', 'good bye!')

    expect(ht.keys().sort()).toEqual(['hello', 'bye'].sort())
  })

  it('Should test valyes method', () => {
    ht.set('hello', 'hello there')
    ht.set('bye', 'good bye!')

    expect(ht.values().sort()).toStrictEqual(
      ['hello there', 'good bye!'].sort()
    )
  })
})
