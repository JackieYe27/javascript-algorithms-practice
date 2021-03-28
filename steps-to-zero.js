// Given a non-negative integer num, return the number of steps to reduce it to zero. 
// If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

 // Example 1:
// Input: num = 14
// Output: 6
// Explanation: 
// Step 1) 14 is even; divide by 2 and obtain 7. 
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3. 
// Step 4) 3 is odd; subtract 1 and obtain 2. 
// Step 5) 2 is even; divide by 2 and obtain 1. 
// Step 6) 1 is odd; subtract 1 and obtain 0.

// Example 2:
// Input: num = 8
// Output: 4
// Explanation: 
// Step 1) 8 is even; divide by 2 and obtain 4. 
// Step 2) 4 is even; divide by 2 and obtain 2. 
// Step 3) 2 is even; divide by 2 and obtain 1. 
// Step 4) 1 is odd; subtract 1 and obtain 0.

// Example 3:
// Input: num = 123
// Output: 12

// given a number we can only use divid by 2 or subtract by 1 to get to zero
// output is how many steps it took

var numberOfSteps  = function(num) {
    // given the number if it can be divided by 2 or subracted by 1 we want to use the expressiion until we get 0
    let steps = 0;
    while (num > 0) {
        // if the number can be divided by 2 do it
        if (Number.isInteger(num / 2)) {
            // add 1 to step count
            steps++
            // apply action to number and set number as next starting number
            num/=2;
        } else {
            // it can be divided into an integer then just subtract by 1
            steps++
            num--;
        }
    }
    return steps;
};

numberOfSteps(14);