/*
    Shortest Path Algo: Finding the fastest route.
*/

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values= [];
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp()
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        let value = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];
            if(value.priority >= parent.priority) break;
            this.values[parentIdx] = value;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue() {
        let min = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown() {
        let idx = 0;
        let length = this.values.length;
        let value = this.values[0];
        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < value.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priorty < value.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = value;
            idx = swap;
        }
    }
}

// Creating a weighted graph
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(v1,v2, weight) {
        this.adjacencyList[v1].push({node:v2, weight});
        this.adjacencyList[v2].push({node:v1, weight});
    }
    dijktras(start, end) {
        let nodes = new PriorityQueue();
        let distances = {};
        let previous = {};
        let smallest;
        let path = [];
        // build up initial state
        for(let vertex in this.adjacencyList) {
           if(vertex === start) {
               distances[vertex] = 0;
               nodes.enqueue(vertex, 0);
           } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
           }
           previous[vertex] = null;
       }
       // as long as there is something to visit
       while(nodes.values.length) {
            smallest = nodes.dequeue().val;
            if(smallest === end) {
                //we DONE BUILD PATH NOW
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for(let neighbor in this.adjacencyList[smallest]) {
                    // find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    // calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    if(candidate < distances[nextNode.node]) {
                        // updating new smallest distance to neighbor
                        distances[nextNode.node] = candidate;
                        // updating previous- How we got to neighbor
                        previous[nextNode.node] = smallest;
                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNode.node, candidate);
                    }
                }
            }
       }
       return path.concat(smallest).reverse();
    }
}
