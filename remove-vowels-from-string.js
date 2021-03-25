// Given a string S, remove the vowels ‘a’, ‘e’, ‘i’, ‘o’, and ‘u’ from it, and return the new string.

// Example 1:
// Input: "leetcodeisacommunityforcoders"
// Output: "ltcdscmmntyfrcdrs"

// Example 2:
// Input: "aeiou"
// Output: ""

// given string we remove vowels
// create newStringArr where we push letters
// turn the string into an array
// loop through the array
    // pick out non vowels
    // push those into new array
// return new array as a string


let removeVowels = (string => {
    let newStringArr = [];
    let stringArr = string.split("");
    stringArr.forEach(letter =>{
        if (letter !== "a" && letter !== "e" && letter !== "i" && letter !== "o" && letter !== "u") {
            newStringArr.push(letter);
        }
    });
    return newStringArr.join("");
});

removeVowels("leetcodeisacommunityforcoders")
removeVowels("aeiou")

// create object with aeiou as properties
// create new string variable
// loop through string
// if object.value !== string[i]
    // then push into new string
// return new string

let removeVowels2 = (string => {
    let vowels = {
        "a": true,
        "e": true,
        "i": true,
        "o": true,
        "u": true,
    };
    let noVowelString ="";
    for(let i=0; i < string.length; i++) {
        if (!vowels[string[i]]) {
            noVowelString += string[i]; 
        }
    }
    return noVowelString;
});

removeVowels2("beeeeiiiiiioooouuuur")
removeVowels2("aeiou")