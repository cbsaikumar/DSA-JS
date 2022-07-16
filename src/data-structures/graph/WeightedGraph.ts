export type Vertex = string | number

export type WeightedVertex = { node: Vertex; weight: number }

// Undirected weighted graph
export class Graph {
  _adjecencyList: { [key: Vertex]: WeightedVertex[] } = {}
  constructor() {
    this._adjecencyList = {}
  }

  addVertex(vertex: Vertex) {
    if (!this._adjecencyList[vertex]) this._adjecencyList[vertex] = []
  }

  addEdge(vertex1: Vertex, vertex2: Vertex, weight: number) {
    // 2-side since its undirected
    this._adjecencyList[vertex1].push({ node: vertex2, weight })
    this._adjecencyList[vertex2].push({ node: vertex1, weight })
  }
}
