/*
  Given an array nums of size n, return the majority element.
  The majority element is the element that appears more than ⌊n / 2⌋ times. 
  You may assume that the majority element always exists in the array.

  Example 1:
  Input: nums = [3,2,3]
  Output: 3

  Example 2:
  Input: nums = [2,2,1,1,1,2,2]
  Output: 2
*/

const majority = (nums) => {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    hash[current] = (hash[current] || 0) + 1;
  }
  let major = 0;
  let output;
  for (let key in hash) {
    if (hash[key] > major) {
      major = hash[key];
      output = key;
    }
  }
  return output
}

console.log(majority([3,2,3])) //3
console.log(majority([2,2,1,1,1,2,2])) //2
