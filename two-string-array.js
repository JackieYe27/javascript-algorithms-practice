// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
// A string is represented by an array if the array elements concatenated in order forms the string.

// Example 1:
// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.

// Example 2:
// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false

// Example 3:
// Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
// Output: true

// input 2 arrays with strings inside
// output is boolean if string inside is same for both

// take both arrays make then into just one string and then split them back up to compare each element


let arrayStringsAreEqual = (word1, word2) => {
    let sWord1 = word1.join("").split("")
    let sWord2 = word2.join("").split("")
    let same = false;

    for (i = 0; i < sWord1.length; i++) {
        if (sWord1[i] === sWord2[i] && sWord1.length === sWord2.length) {
            same = true;
        } else {
            same = false;
        }
    }
    return same;
}

arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"])