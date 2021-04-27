// A data structure that contains a head, tail, and length property.
// consists of nodes that have a value and a pointer to another node or null.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// let first = new Node('hi');
// first.next = new Node('hi there');
// first.next.next = new Node('how');
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
        return currentHead;
    }
}

let list = new SinglyLinkedList();