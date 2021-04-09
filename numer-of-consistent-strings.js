// You are given a string allowed consisting of distinct characters and an array of strings words. 
// A string is consistent if all characters in the string appear in the string allowed.
// Return the number of consistent strings in the array words.

// Example 1:
// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

// Example 2:
// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.

// Example 3:
// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.

// given string and an array or strings
// output is a number

// we only want to return words in the words array where only the letters from allowed are in
// even single letters returned are true
// create a count variable
// loop through the words array and get each word
// then check the individual word with what is allowed 
// and within each word check each letter if it is included in the allowed string
    // if each letter is included then count it

let countConsistentStrings = (allowed, words) => {
    let count = 0;
    words.forEach(word => { // a b
        let isAllowed = true;
        for (let i = 0; i < word.length; i++) { // a 
            let character = word[i];  // word[0] = a
            if (!allowed.includes(character)) { 
                isAllowed = false;
            } 
        }
        if (isAllowed) {
            count++ // +1
        }
    });
    return count;
}

countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"]);