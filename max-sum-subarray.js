/*
    Write a function called maxSubarraySum which accepts an array of integers and a number called n.
    The function should calculate the maximum sum of n consecutive elements in the array.
*/

// input an array of integers and a number
// output is max sum of a range of numbers given the number

// create a sliding window of the sum where window size is equal to the num
// once window is created loop through the array and just add on one value and take off one value while adding sums together
// need max sum variable and a temp sum variable where we will be comparing sums
// return max sum


let maxSubarraySum = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3], 3)