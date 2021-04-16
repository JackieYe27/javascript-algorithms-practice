/*
    Write a function called sameFrequency. Given two posivie integers, find out if the two numbers have the same frequency of digits
*/

// input 2 integers
// output boolean true if the two numbers have same frequency for each digit in the two numbers

// create 2 objects where each object has key as a single digit and property as count
// loop through one object to compare the key and count to see if its true or false

let sameFrequency = (int1, int2) => {
    let obj1 = {};
    let obj2 = {};
    let string1 = int1.toString();
    let string2 = int2.toString();
    if (int1.length !== int2.length) {
        return false;
    }
    for (let i = 0; i < string1.length; i++) {
        obj1[string1[i]] = (obj1[string1[i]] || 0) + 1;
    }
    for (let j = 0; j < string2.length; j++) {
        obj2[string2[j]] = (obj2[string2[j]] || 0) + 1;
    }
    for (val in obj1) {
        if (!(val in obj2)) {
            return false;
        }
        if (obj2[val] !== obj1[val]) {
            return false;
        }
    }
    console.log(obj1)
    return true;
}

sameFrequency(182, 281)
sameFrequency(34, 14)
sameFrequency(3589578, 5879385)
sameFrequency(22, 2222)