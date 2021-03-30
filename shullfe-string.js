// Given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Return the shuffled string.

// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

// string and i
// turn the string into and array so that we stringArry and indices
// turn set string array into indicies array and then return string given indicies

var restoreString = function(s, indices) {
    let sArray = s.split("");
    let shuffleArray = [];
    // loofed through string array
    for (i = 0; i < sArray.length; i++) { // c, o
        debugger
        // understand each letter
        let letter = sArray[i]; // c, o
        // understand each indicies
        let index = indices[i]; // 4, 5
        console.log(index);
        // make the new array have the incides equal to the letter
        shuffleArray[index] = letter; //array[4] = c, array[5] = 0
    }
    return shuffleArray.join("");
}; 

restoreString("codeleet", [4,5,6,7,0,2,1,3])