/*
    Graphs: Collections of Nodes and connections
    VERTEXT = node
    EDGE = connection between nodes
        Good for What?
        - Social networking: Connections between friends
        - Maps
        - the internet: pages that link to each other
        - Recommendations: people also watched, you might like
        No Patterns Just relations to each other
    Types:
        - A tree where a vertex can only have 2 edges max
        - Undirected Graphs: no connection to edges. Basically 2 way connections. Can go from A to B and B to A.
            - FB friend request 2 way relationship.
        - Directed Graphs: Represented with arrows. One way direction.
            - Instagram followers graph. Following someone but not getting followed back.
        - Weighted Graph: when edges have values. Theres info on the connections itself
            - Mapping distance. The edges in miles are weighted. Need to know value
    Adjacency List: Take up less space, faster to iterate over all edges but slower look up on specific edges
        - REAL WORLD DATA TEND TO BE SPARSE. MANY NODES not so many CONNECTIoNS. We take up less space
    Adjacency Matrix: More space, slower iteration, but fast lookup for specific edge
*/

// Undirected Graph : adding a vertex
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    // adding nodes aka vertices
    addVertex(vertex) {
        if(!this.adjacencyList) {
            this.adjacencyList[vertex] = [];
        }
    }
    // adding edges: should accept 2 vertices we can call them v1 and v2
    // the function should find in the adjacency list the key of v1 and push v2 to the array
    // then function should find in the adjacency list the key of v2 and push v1 to the array
    addEdge(v1,v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    // Removing an edge: what is the actual edge we want to remove
    // function should reassign the key of v1 to be an array that does not contain v2
    // function should reassign the ky of v2 to be an array that does not contain v1
    removeEdge(v1,v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(edge => edge !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(edge => edge !== v1);
    }
}  
