import { describe, expect, it } from 'vitest'
import { Trie } from '../../../src/data-structures/tree/Trie'

describe('Trie', () => {
  it('should initialize new Trie', () => {
    const trie = new Trie()
    expect(trie.root.children.size).toBe(0)
  })

  it('should test insert, search, startsWith method', () => {
    const trie = new Trie()
    trie.insert('apple')
    trie.insert('app')
    trie.insert('google')

    expect(trie.search('apple')).toBe(true)
    expect(trie.search('ap')).toBe(false)
    expect(trie.search('app')).toBe(true)

    expect(trie.startsWith('appl')).toBe(true)
    expect(trie.startsWith('appp')).toBe(false)
  })
})
