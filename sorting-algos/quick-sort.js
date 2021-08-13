/*
    Quick sort needs a pivot or partition helper function
    1. It should rearrange elements in the array so that all values less than the pivot point
        are moved to the left of the pivot and all values greater are moved to the right.
    2. The oder does not matter.
    3. Should do it in place not make a new array
    4. returns the index of the pivot.
    5. Median value in data set
    6. Make pivot the first element

*/

// let arr = [5, 2, 1, 8, 4, 7, 6, 3]
// pivot(arr) // 4;
// arr looks like [2, 1, 4, 3, 5, 8, 7, 6] as a mutation
// function should accept 3 arguments: an array, a start index and an end index
// grab pivot from start
// store current pivot inex in a variable
// loop through the array
    // if pivot is greater than current element, increment pivot index variable and then swap the current element with the
        // element at the pivot index
// swap the starting element (pivot) with the pivot index
// return the pivot index

let swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let pivot = (arr, start=0, end=arr.length-1) => {
    let p = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
      if (p > arr[i]) {
          swapIdx++
          // swap function to swap
          // [4,8,2,1,5,7,6,3] -> [4,2,8,1,5,7,6,3] -> [4,2,1,8,5,7,6,3]
          swap(arr, swapIdx, i);
      }
    }
    swap(arr, start, swapIdx);
    console.log(arr);
    return swapIdx
}

pivot([4,8,2,1,5,7,6,3])


// call pivot helper for array
// recursively call the helper function on the left side and on the right side
// base case check sub array has any items in it
let quickSort = (arr, left = 0, right = arr.length-1) => {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right); // 3
        // left
        quickSort(arr, left, right = pivotIndex-1);
        //right
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;
}

quickSort([4,8,2,1,5,7,6,3]);