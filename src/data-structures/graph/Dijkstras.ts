import { PriorityQueue } from '../PriorityQueue'
import { Graph } from './WeightedGraph'

export const shortestPath = (source: string, destination: string) => {
  const graph = new Graph()
  graph.addVertex('A')
  graph.addVertex('B')
  graph.addVertex('C')
  graph.addVertex('D')
  graph.addVertex('E')
  graph.addVertex('F')

  graph.addEdge('A', 'B', 4)
  graph.addEdge('A', 'C', 2)
  graph.addEdge('B', 'E', 3)
  graph.addEdge('E', 'F', 1)
  graph.addEdge('C', 'D', 2)
  graph.addEdge('C', 'F', 4)
  graph.addEdge('D', 'F', 1)
  graph.addEdge('D', 'E', 3)

  const distances: { [key: string]: number } = {}
  const previous: { [key: string]: string | null } = {}
  const q = new PriorityQueue()

  Object.keys(graph._adjecencyList).forEach(vertex => {
    q.enqueue(vertex, vertex === source ? 0 : Infinity)
    distances[vertex] = vertex === source ? 0 : Infinity
    previous[vertex] = null
  })

  const path = []
  while (q.size()) {
    const current = q.dequeue()?.value as string
    if (current === destination) {
      // we are done
      let startPath = current
      while (previous[startPath]) {
        path.push(startPath)
        startPath = previous[startPath] as string
      }
      path.push(source)
      break
    }
    for (const neighbor of graph._adjecencyList[current]) {
      const candidate = distances[current] + neighbor.weight
      if (candidate < distances[neighbor.node]) {
        distances[neighbor.node] = candidate
        previous[neighbor.node] = current
        q.enqueue(neighbor.node as string, candidate)
      }
    }
  }
  return path.reverse()
}

const ans = shortestPath('A', 'E')

console.log('`````````````````ANSWER`````````````````')
console.log(ans)
