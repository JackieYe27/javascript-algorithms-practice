// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// Example 3:
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// have a sum variable
// new runningSumArr
// loop through the array while adding to the sum for every i
    // push value into the new array
    // then reset sum on the next index
// return runningSumArr

let runningSum = (arr => {
    let sum = 0;
    let runningSumArr = [];
    arr.forEach(num => { // 1, 2, 3, 4
        sum += num; // sum = 1, 1+2, 1+2+3, 1+2+3+4
        runningSumArr.push(sum); // [1,3,6,10]
    });
    return runningSumArr;
});