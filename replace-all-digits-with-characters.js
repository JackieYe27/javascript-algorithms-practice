// loop through the string
    // if current letter does not return a number
        // add the string to the final string
    // if current is a number then we look at the letter before and take the charCode of it 
        // THEN add whatever given number to the character code and and that to final string
    // return final string
    /*
    
Example 1:
    Input: s = "a1c1e1"
    Output: "abcdef"
    Explanation: The digits are replaced as follows:
    - s[1] -> shift('a',1) = 'b'
    - s[3] -> shift('c',1) = 'd'
    - s[5] -> shift('e',1) = 'f'

Example 2:
    Input: s = "a1b2c3d4e"
    Output: "abbdcfdhe"
    Explanation: The digits are replaced as follows:
    - s[1] -> shift('a',1) = 'b'
    - s[3] -> shift('b',2) = 'd'
    - s[5] -> shift('c',3) = 'f'
    - s[7] -> shift('d',4) = 'h'
*/

var replaceDigits = function(s) {
    let final = "";
    s.split("").forEach((letter, i) => {
        if (!parseInt(letter) && letter !== "0") {
            final += letter;
        } else {
            console.log(parseInt(letter));
            let charCode = String.fromCharCode(s[i-1].charCodeAt(0) + parseInt(letter));
            final += charCode;
        }
    });
    return final
};