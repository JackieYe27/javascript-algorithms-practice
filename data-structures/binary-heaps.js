/*
    Binary Heap: Very similar to trees
    Max Binary Heap: Root Biggest value, parents always bigger than the children
    Children of the Parent can be found by 2n+1 and 2n+2
    Parent = (n-1)/2
*/

class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }
    // Adding to a maxBinaryHeap
        // Add to the end, bubble up
    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length-1; // last index in the values array
        let value = this.values[idx]; // grabbing the index
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2);
            let parentValue = this.values[parentIdx];
            if(value <= parentValue) break;
            this.values[parentIdx] = value;
            this.values[idx] = parentValue;
            idx = parentIdx;
        }
    }
    extractMax() {
        let max = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
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
                if(leftChild > value) {
                    swap = leftChildIdx
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild > value) || 
                    (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();
// [41, 39, 33, 18, 27, 12, 55]
heap.insert(55);
// [41, 39, 55, 18, 27, 12, 33]
// [55, 39, 41, 18, 27, 12, 33]