class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.head) return undefined;
        let removedTail = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedTail.prev;
            this.tail.next = null;
            removedTail.prev = null;
        }
        this.length--;
        return removedTail;
    }
    shift() {
        let oldHead = this.head;
        if(!this.head) return undefined;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val) {
        let newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(i) {
        if (i < 0 || i >= this.length) return null;
        let middle = this.length/2;
        if(i <= middle) {
            let counter = 0;
            let start = this.head;
            while(counter !==i) {
                start = start.next;
                counter++;
            }
            return start;
        }
        if( i >= middle) {
            let counter = this.length-1;
            let start = this.tail;
            while(counter !== i) {
                start = start.prev;
                counter--;
            }
            return start;
        }
    }
    set(val, i) {
        let getResult = this.get(i);
        if(getResult !== null) {
            getResult.val = val;
            return true;
        }
        return false;
    }
    insert(val, i) {
        if(i < 0 || i > this.length) return false;
        if (i === 0) {
            return !!this.unshift(val);
        }
        if (i === this.length) {
           return !!this.push(val);
        } else {
            let newNode = new Node(val);
            let prevNode = this.get(i-1);
            let changedNode = prevNode.next;

            prevNode.next = newNode;
            newNode.prev = prevNode;
            
            newNode.next = changedNode;
            changedNode.prev = newNode;
        }
        this.length++;
        return true;
    }
}