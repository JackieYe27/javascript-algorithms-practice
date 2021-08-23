const removeDupes = (nums) => {
  let start = 0;
  for (let i = 0; i < nums.length; i ++) {
    if (nums[i] !== nums[i + 1]) {
      nums[start] = nums[i];
      start++;
    }
  }
  return nums.slice(0, start);
}

console.log(removeDupes([1,1,2])); // [1,2]