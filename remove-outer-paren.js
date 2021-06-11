/*
A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  
For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A+B, with A and B nonempty valid parentheses strings.
Given a valid parentheses string s, consider its primitive decomposition: s = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.
Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of S.
*/

/*
Example 1:
Input: s = "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

Example 2:
Input: s = "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".

Example 3:
Input: s = "()()"
Output: ""
Explanation: 
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".
*/

// input: string containing a combination of parenthesis
// output: return a string where we remove perfect combos of the parenthesis

// make note of when we come across "(" as that indicates a start
    // keep a counter + 1
// keep going until we come across a ")"
    // counter - 1
// And if counter is greater than 1 we know that at the current value it is inside a perfect set
    // so keep track of that value
// note that we want to add the value in before subtracting as that could make final string not include current value

const removeOuterParentheses = (s) => {
    let counter = 0;
    let finalString = "";
    for(let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            counter++
        }
        if (counter > 1) {
            finalString += s[i];
        }
        if (s[i] === ")") {
            counter--;
        }
    }
    return finalString;
}