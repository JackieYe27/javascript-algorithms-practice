/*
    Write a function binarySearch that accepts a sorted array and a value.
    Create 2 variables one left and one right. Create a pointer. If value too small
    move pointer up, if value too big move pointer down. If never found return -1
*/

let binarySearch = (array, val) => {
    let left = 0;
    let right = array.length-1;
    let pointer = Math.floor((left + right) / 2);
    while(array[pointer] !== val && left <= right) {
        if (array[pointer] > val) {
            right = pointer - 1;
        } else {
            left = pointer + 1;
        }
        pointer = Math.floor((left + right) / 2);
    }
    if (array[pointer] === val) {
        return pointer;
    }
    return -1
}

binarySearch([1,2,3,4,5,6,7,8], 5)