type Vertex = string | number

// Undirected graph
export class Graph {
  _adjecencyList: { [key: Vertex]: Vertex[] } = {}
  constructor() {
    this._adjecencyList = {}
  }

  addVertex(vertex: Vertex) {
    if (!this._adjecencyList[vertex]) this._adjecencyList[vertex] = []
  }

  addEdge(vertex1: Vertex, vertex2: Vertex) {
    // 2-side since its undirected
    this._adjecencyList[vertex1].push(vertex2)
    this._adjecencyList[vertex2].push(vertex1)
  }

  removeEdge(vertex1: Vertex, vertex2: Vertex) {
    this._adjecencyList[vertex1] = this._adjecencyList[vertex1].filter(
      vertex => vertex !== vertex2
    )
    this._adjecencyList[vertex2] = this._adjecencyList[vertex2].filter(
      vertex => vertex !== vertex1
    )
  }

  removeVertex(vertex: Vertex) {
    this._adjecencyList[vertex].forEach(v => this.removeEdge(vertex, v))
    delete this._adjecencyList[vertex]
  }

  dfsRecursive(start: Vertex) {
    const visited: { [key: Vertex]: boolean } = {}
    const dfsVertex = (vertex: Vertex) => {
      if (!visited[vertex]) {
        visited[vertex] = true
        for (const neighbor of this._adjecencyList[vertex]) {
          dfsVertex(neighbor)
        }
      }
    }
    dfsVertex(start)
    return visited
  }

  dfsIterative(start: Vertex) {
    const visited: { [key: Vertex]: boolean } = {}
    const stack = [start]

    while (stack.length) {
      const vertex = stack.pop() as Vertex
      visited[vertex] = true
      this._adjecencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) stack.push(neighbor)
      })
    }

    return visited
  }

  bfsIterative(start: Vertex) {
    const visited: { [key: Vertex]: boolean } = {}
    const q = [start]

    while (q.length) {
      const vertex = q.pop() as Vertex
      visited[vertex] = true
      this._adjecencyList[vertex].forEach(
        neighbor => !visited[neighbor] && q.unshift(neighbor)
      )
    }
    return visited
  }
}

// @ts-ignore
// eslint-ignore-next-line
function test() {
  const graph = new Graph()
  graph.addVertex('Tokyo')
  graph.addVertex('Dallas')
  graph.addVertex('Aspen')
  graph.addVertex('Hong Kong')
  graph.addVertex('Los Angeles')
  graph.addVertex('New Delhi')
  graph.addVertex('Madrid')

  graph.addEdge('Tokyo', 'Dallas')
  graph.addEdge('Tokyo', 'Hong Kong')
  graph.addEdge('Dallas', 'Aspen')
  graph.addEdge('Dallas', 'Hong Kong')
  graph.addEdge('Dallas', 'Los Angeles')
  graph.addEdge('Hong Kong', 'Los Angeles')
  graph.addEdge('Madrid', 'Dallas')

  console.log(graph._adjecencyList)

  graph.removeVertex('Hong Kong')

  console.log(graph._adjecencyList)

  console.log(graph.dfsRecursive('Dallas'))
  console.log(graph.dfsRecursive('Dallas'))
  console.log(graph.dfsRecursive('Dallas'))
}

test()
