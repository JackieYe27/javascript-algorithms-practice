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
}

let heap = new MaxBinaryHeap();
// [41, 39, 33, 18, 27, 12, 55]
heap.insert(55);
// [41, 39, 55, 18, 27, 12, 33]
// [55, 39, 41, 18, 27, 12, 33]