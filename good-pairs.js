// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.

// Example 1:
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// Example 2:
// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.

// Example 3:
// Input: nums = [1,2,3]
// Output: 0

// we are given a list of numbers
// we want to find good pairs
// good pair is just as we loop through if the number is the same on the second loop then its good
// we want to return the index of the number not the actual num
// 

var numIdenticalPairs = function(nums) {
    // create good pair count
    let goodPair = 0;
    // loop through the nums array
    for (i = 0; i < nums.length; i++) { 
        // second loop to check if first number is equal to any numn in the list not including itself
        for (j = i + 1; j < nums.length; j++) { 
            // if it is then
            if (nums[i] == nums[j]) { 
                // count it
                goodPair++; 
            }
        }
    }
    return goodPair;
}

numIdenticalPairs([1,2,3,1,1,3]);