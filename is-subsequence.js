/*
    Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string
    form a subsequence of the characters in the second string. In other words, the function should check whether the chracters 
    in the first string appear somewhere in the second string, without their order changing
*/

// input is 2 strings
// output is boolean true if string 1 has a subsequence in string 2 same letters in a row order matters

// two pointers
// one aiming at first string other at second
// as we loop through the first string we check if that value exists in the second string
// if it does then we move to the next value in first string
// if it doesnt we move on to the next value in the second string
// return true if all values in str1 match with string 2 
// return false if otherwise

let isSubsequence = (str1, str2) => {
    let start1 = 0
    let start2 = 0
    while(str1.length > 0) {
        if (str1[start1] !== str2[start2]) {
            start2++
        } else if (str1[start1] === str2[start2]) {
            start1++
            start2++
        }
        if (start1 === str1.length + 1) {
            return true;
        }
    }
    return false;
}

isSubsequence('hello', 'hello world')
isSubsequence('sing', 'sting')
isSubsequence('abc', 'abracadabra')
