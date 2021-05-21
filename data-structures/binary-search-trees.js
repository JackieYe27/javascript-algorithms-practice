/*
    Binary Search Trees: 
        Insertion: O(log n)
        Searching: O(log n)
*/

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        let newNode = new Node(val);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true) {
                if (val === current.val) {
                    return undefined;
                }
                if (val < current.val) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (val > current.val) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }   
                }
            }
        }
    }
    find(val) {
        if(this.root === null) return false;
        let current = this.root;
        let found = false;
        while(!found && current) {
            if (val < current.val) {
                current = current.left;
            } else if(val > current.val) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    // BREADTH FIRST SEARCH
/*
    1. Create a queue and a variable to store the values of nodes visited.
    2. Place the root node in the queue.
    3. Loop as long as there is anything in he queue;
        - dequeue a node from the queue and push the value of the node into the variable that stores the nodes
        - If there is a left property on the node dequeued - add it to the queue
        - If there is a right property on the node dequeued - add it to the queue
    4. Return the variable that stores the values
*/
    BFS() {
        let data = [];
        let queue = [];
        let node = this.root;

        queue.push(node);
        while(queue.length) {
           node = queue.shift();
           data.push(node.val);
           if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);
        }
        return data;
    }
/*
    1. Create a variable to store values visited
    2. Store the root of the BST into a variable called current
    3. Write a helper function that accepts a node
        - Push the value of the node to the variable that stores the values
        - If node has a left property called the helper function on the left property of the node
        - If the node has a right property called the helper function on the right poperty of the node
*/
    DFSPreOrder() {
        let data = [];
        let current = this.root;

        let traverse = (node) => {
            data.push(node.val);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }

        traverse(current);
        return data;
    }
/*
    1. Create a variable to store values visited
    2. Store the root of the BST into a variable called current
    3. Write a helper function that accepts a node
        - If node has a left property called the helper function on the left property of the node
        - If the node has a right property called the helper function on the right poperty of the node
        - Push the value of the node into the variable that stores the values
        - invoke helper function with the current value
    4. return array of values
*/
    DFSPostOrder() {
        let data = [];
        let current = this.root;

        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);

            data.push(node.val);
        }
        traverse(current);
        return data;
    }
    DFSInOrder() {
        let data = [];
        let current = this.root;

        let traverse = (node) => {
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
}



///////////////////////////////////////////////////////////////////////////////////////////
// Tree Problems

var maxDepth = function(root) {
    if (root === null) return 0;
    
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1;
};