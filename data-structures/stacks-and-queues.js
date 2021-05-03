/*
    Stacks:
        LIFO: LAST IN FIRST OUT
*/

// implementation with a linked list
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
            this.size++;
            return this.size;
        }
        let current = this.first;
        this.first = newNode;
        newNode.next = current;
        this.size++;
        return this.size;
    }
}




