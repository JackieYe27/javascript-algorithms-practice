/*
    Write bubbleSort function. 
*/

// Start looping from i to end of array towards the beginning
// start an iner loop with a variable j from the beggining unti i -1
// if arr[i} > arr[j+1] swap those two values
// return sorted array

// forced dumb way of implementing bubble sort
let bubbleSort = (arr) => {
    for (let i =0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            } 
        }
    }
    return arr;
}

// Optimized with no swaps for nearly sorted array
let bubbleSort = (arr) => {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            } 
        }
        if (noSwaps) {
            break;
        }
    }
    return arr;
}

bubbleSort([1,2,3,4,4,1,10,7,6,1])