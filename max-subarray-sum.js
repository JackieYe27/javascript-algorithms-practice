/*
    Given an array of integers and a number, write a function called maxSubarraySum which
    finds the maximum sum of a subarray with thge length of the number passed to the function.
*/

// input is an array and a number
// output is the greatest sum of a subarray within the array where the subarray length is equal to the number

// sliding window pattern for O(n)
// create a window where the window length is equal to the number
// move the window within the array while adding the next element and subtracting the most previous element
// compare the sum of each subarray that comes along and changing max sum if recent sum is greater
// return the max sum

let maxSubarraySum = (array, target) => {
    let maxSum = 0;
    for(let i = 0; i < target; i++) {
        maxSum += array[i];
    }
    let placeholder = maxSum;
    for (let i = target; i< array.length; i++) {
        placeholder = placeholder - array[i-target] + array[i];
        if (placeholder > maxSum) {
            maxSum = placeholder;
        }
    }
    return maxSum;
}

maxSubarraySum([1,2,3,4,5,6,7], 2);