// A data structure that contains a head, tail, and length property.
// consists of nodes that have a value and a pointer to another node or null.
// BEST AT ISERTION AND DELETEION
// FOUNDTAION FOR OTHER DATA STRUCTURES

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let node = new Node(val)
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length+=1;
        return this;
    }
    pop() {
        if(!this.head) {
            return undefined;
        }
        let current = this.head;
        let newTail = current;
        while (current.next) {
            // new tail will always be one node behind current HELLO -> GOOD -> BYE
            // newTail = GOOD, current = BYE
            newTail = current;
            current = current.next;
        }
        // Once we have gone to the end of the list set tail to new tail and disconnect last node
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val) {
       let newNode = new Node(val);
       if (!this.head) {
           this.head = newNode;
           this.tail = newNode;
       } else {
           newNode.next = this.head;
           this.head = newNode;
       }
       this.length++;
       return this;
    }
    get(i) {
        if (i < 0 || i >= this.length) {
            return null;
        }
        let count = 0
        let current = this.head;
        while(count !== i) {
            current = current.next;
            count++;
        }
        return current;
    }
    set(val, i) {
        let foundNode = this.get(i);
        if(foundNode) {
            foundNode.val = val;
            return true;
        } 
        return false;
    }
    insert(val, i) {
        if (i < 0 || i > this.length) {
            return false;
        }
        if (i === this.length) {
            return !!this.push(val);
        }
        if (i === 0) {
            return !!this.unshift(val);
        } 
        let prevNode = this.get(i-1);
        let currentNode = this.get(i);
        let newNode = new Node(val);
        prevNode.next = newNode;
        newNode.next = currentNode;
        this.length++;
        return true;
    }
    remove(i) {
        if(i < 0 || i >= this.length) return undefined;
        if (i === this.length-1) {
            return this.pop();
        }
        if (i === 0) {
            return this.shift();
        }
        let prevNode = this.get(i-1);
        let deletedNode = prevNode.next;
        prevNode.next = deletedNode.next;
        this.length--;
        return deletedNode;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let prev = null;
        let next;
        for(let i = 0; i < this.length; i++) { // 1 -> 2 -> 3 -> 4 -> 5 
            next = node.next; // we have the next node 1->2
            node.next = prev; // we are linking the node to previous node null <- 1
            prev = node; // moving the prev over one 
            node = next; // moving current node over one 
        }
        // 1 <- 2 <- 3 <- 4 <- 5
        return this;
    }
}

let list = new SinglyLinkedList();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Problems With SLL

var getDecimalValue = function(head) {
    let valuesArr = [];
    while(head) {
        valuesArr.push(head.val);
        head = head.next;
    };
    const parseArray = arr => {
    const binaryString = arr.join("");
        return parseInt(binaryString, 2);
    };
    return parseArray(valuesArr);
};

var deleteNode = function(node) {
    let newCurrent = node.next;
    let nextNode = node.next.next
    node.val = newCurrent.val;
    node.next = nextNode;
};