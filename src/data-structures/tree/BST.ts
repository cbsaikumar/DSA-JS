export class Node<T = number> {
  value: T
  left: Node<T> | null
  right: Node<T> | null

  constructor(value: T) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST<T = number> {
  private root: Node<T> | null
  constructor() {
    this.root = null
  }

  insert(value: T): boolean {
    const newNode = new Node(value)

    if (!this.root) {
      this.root = newNode
      return true
    }
    let root = this.root
    // eslint-disable-next-line
    while (true) {
      if (root.value === value) return false
      if (value > root.value) {
        if (!root.right) {
          root.right = newNode
          return true
        }
        root = root.right
      } else {
        if (!root.left) {
          root.left = newNode
          return true
        }
        root = root.left
      }
    }
  }

  exists(value: T): boolean {
    let root = this.root
    // eslint-disable-next-line
    while (true) {
      if (!root) return false
      if (root.value === value) return true
      else if (value > root.value) {
        root = root.right
      } else {
        root = root.left
      }
    }
  }

  inOrder(root: Node<T> | null = this.root): T[] {
    if (!root) return []

    return [...this.inOrder(root.left), root.value, ...this.inOrder(root.right)]
  }

  preOrder(root: Node<T> | null = this.root): T[] {
    if (!root) return []

    return [
      root.value,
      ...this.preOrder(root.left),
      ...this.preOrder(root.right),
    ]
  }

  postOder(root: Node<T> | null = this.root): T[] {
    if (!root) return []

    return [
      ...this.postOder(root.left),
      ...this.postOder(root.right),
      root.value,
    ]
  }

  breadthFirst(root: Node<T> | null = this.root): T[] {
    if (!root) return []
    const ans: T[] = []
    const q = [root]
    while (q.length) {
      const node = q.pop()
      if (node) {
        ans.push(node.value)
        const { right, left }: Node<T> = node
        if (left) {
          q.unshift(left)
        }
        if (right) {
          q.unshift(right)
        }
      }
    }
    return ans
  }
}

// @ts-ignore
// eslint-disable-next-line
function test() {
  const bst = new BST()
  bst.insert(15)
  bst.insert(9)
  bst.insert(99)
  bst.insert(18)
  bst.insert(5)
  bst.insert(55)
  bst.insert(43)
  bst.insert(101)
  bst.insert(17)

  /*
            15
          /   \
         9     99
        /      / \
       5      18  101
             /  \
            17  55
               /
              43      
    */
  console.dir(bst, { depth: null })
  console.log(bst.exists(50)) // false
  console.log(bst.exists(99)) // true

  console.log(bst.inOrder())
  console.log(bst.preOrder())
  console.log(bst.postOder())
  console.log(bst.breadthFirst())
}
