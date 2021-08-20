/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
*/

const moveZeroes = (arr) => {
  let index = 0;
  let counter = arr.length;
  while (index <= counter)  {
    if (arr[index] === 0) {
      arr.splice(index, 1);
      arr.push(0);
    } else {
      index++;
    }
    counter--
  }
  return arr;
}
console.log(moveZeroes([0,0,1,5,4,0]));
