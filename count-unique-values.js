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
    let count = 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            count++;
            arr[i] = arr[j];
        } 
    }
    return count + 1;
}

console.log(countUniqueValues([1,2,3,3,4,5,6,7,8,9,9,9,9])) // 7
console.log(countUniqueValues([1,2,3,3,4,5,6,6,6])) // 5