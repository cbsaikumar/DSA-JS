export class HashTable {
  // eslint-disable-next-line
  _keysMap: [string?, any?][] = []
  constructor(size = 31) {
    // 31 prime number, some default size
    this._keysMap = new Array(size)
  }
  private hashCode = (key: string, arrayLen: number) => {
    let hash = 0
    const WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key.charCodeAt(i) - 96
      hash = (hash * WEIRD_PRIME + char) % arrayLen
    }
    return hash
  }

  // eslint-disable-next-line
  set(key: string, value: any) {
    const index = this.hashCode(key, this._keysMap.length)
    if (!this._keysMap[index]) {
      this._keysMap[index] = []
    }
    this._keysMap[index].push([key, value])
    return value
  }

  get(key: string) {
    const index = this.hashCode(key, this._keysMap.length)

    if (this._keysMap[index]) {
      return this._keysMap[index].find(element => element[0] === key)[1]
    }

    return undefined
  }

  keys() {
    return this._keysMap
      .filter(index => index)
      .map(element => element.map(key => key[0]))
      .flat()
  }

  values() {
    return this._keysMap
      .filter(index => index)
      .map(element => element.map(key => key[1]))
      .flat()
  }

  size() {
    return this.keys().length
  }
}

// @ts-ignore
// eslint-disable-next-line
function test() {
  const ht = new HashTable(5)
  ht.set('hello', 'hi there')
  ht.set('bye', 'bye!!')
  console.log(ht.get('hello'))
  console.log(ht.get('bye'))
  console.log(ht.get('something'))
  console.log(ht.keys())
  console.log(ht.values())
}

// test()
