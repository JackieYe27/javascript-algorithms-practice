// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
// Given a balanced string s, split it in the maximum amount of balanced strings.
// Return the maximum amount of split balanced strings.

// Example 1:
// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

// Example 2:
// Input: s = "RLLLLRRRLR"
// Output: 3
// Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

// Example 3:
// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".

// Example 4:
// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'

// input is a string of Rs and Ls
// output is the number of balanced R and L combos that can be made

// make it easier to go through numbers make it int array
// keep count of Ls and Rs
// if L count = R count
// main count++


let balancedStringSplit = (s) => {
    let count = 0; 
    let rCount = 0;
    let lCount = 0;
    let sArr = s.split("");
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] === "L") { 
        lCount++
    } else {
        rCount++
    }
    if (lCount === rCount) {
        count++
    }
    }
    return count;
}

balancedStringSplit("RLLLLRRRLR");