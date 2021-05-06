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
    enqueue(val, prioirty) {
        let newNode = new Node(val, prioirty);
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