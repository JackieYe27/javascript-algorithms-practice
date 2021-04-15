/*
    Given two strings, write a function to determine if the second string is a nanagram of the first.
    An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, from iceman
*/

// input 2 strings
// output boolean true if second string is an anagram of the first

// check if str1 has same length as str2
    // if not return false
// empty strings?
    // true
// create 2 objects where the key is equal to each letter and property is equal to count of each letter
// loop through one object and then check if letter is inside the other object and has same count
// if all checks pass then return true

let validAnagram = (str1, str2) => {
    let obj1 = {};
    let obj2 = {};
    if (str1.length !== str2.length) {
        return false;
    }
    if (!str1.length && !str2.length) {
        return true;
    }
    for (let i = 0; i < str1.length; i++) {
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
    }
    for (let i = 0; i < str2.length; i++) {
        obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
    }
    for (let val in obj1) {
        if (!(val in obj2)) {
            return false;
        }
        if (obj2[val] !== obj1[val]) {
            return false;
        }
    }
    return true;
}

validAnagram("stringgb", "gnistrga")