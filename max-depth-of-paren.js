// A string is a valid parentheses string (denoted VPS) if it meets one of the following:
// It is an empty string "", or a single character not equal to "(" or ")",
// It can be written as AB (A concatenated with B), where A and B are VPS's, or
// It can be written as (A), where A is a VPS.
// We can similarly define the nesting depth depth(S) of any VPS S as follows:

// depth("") = 0
// depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
// depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
// depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
// For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

// Given a VPS represented as string s, return the nesting depth of s.

 

// Example 1:

// Input: s = "(1+(2*3)+((8)/4))+1"
// Output: 3
// Explanation: Digit 8 is inside of 3 nested parentheses in the string.

// Example 2:
// Input: s = "(1)+((2))+(((3)))"
// Output: 3

// Example 3:
// Input: s = "1+(2*3)/(2-1)"
// Output: 1

// Example 4:
// Input: s = "1"
// Output: 0

// input is a string
// output is number of times the string is nested with "()"

// count goes up for every "(" and goes down for every "("
// need to keep track of each start and end of a "()" with num
// and if num > count then we set count to equal the num of nests
// each time we come across a "(" that signals a nest and then we close with ")" to cancel out the count


var maxDepth = function(s) {
    let sArr = s.split("");
    console.log(sArr);
    let count = 0
    let num = 0
    for (i= 0; i < sArr.length; i++) {
        if (sArr[i] === "(") {
            num++;
        } 
        if (sArr[i] === ")") {
            num--;
        }
        if (num > count) {
            count = num;
        }
    }
    return count;
};

maxDepth("1+(2*3)/(2-1)")

