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