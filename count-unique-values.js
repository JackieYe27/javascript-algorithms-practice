/*
    Implement a function called countUniqueValues, which accpets a sorted array and count the unique values 
    in the array. There can be negative numbers in the array, but it will always be sorted.
*/

// input array
// output is how many unique values

// create 2 pointers
    // one from the beginning the other +1
    // check if i === j
    // if its not move j
    // if it is move i and add 1 to counter
// return the count

let countUniqueValues = (arr) => {
    let i = 0;
    if (arr.length = 0) {
        return 0;
    }
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1
}

countUniqueValues([1,2,3,4,7,8,9,9,9,9])