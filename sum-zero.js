/*
    Write a function called sumZero which accepts a sorted array of integers.
    The function should find the fist pair dhwere the sum is 0. Return an array that includes both vlaues
    that sum to zero or undefined if a pair does not exist. Also array is sorted

    ex. sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
    ex. sumZero([-2,0,1,3])  // undefined
    
*/

// O(n^2) brute force 2 loops
// instead use pointers
// one starting from the left of the array one from the right
// loop through the array 
// while left pointer is less than right keep going and checking values
// if sum is greater than 0 meains right value is too big so -1 to that
// if sum is less than 0 means left value too negative so move left

let sumZero = (arr => {
    let left = 0;
    let right = arr.length-1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++
        }
    }
    return undefined;
})
sumZero([-3,-2,-1,0,1,2,3])
