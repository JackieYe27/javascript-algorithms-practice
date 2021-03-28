// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. 
// Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

 // Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:
// Input: jewels = "z", stones = "ZZ"
// Output: 0

// we are given a string that is case sensitive
// we want to find out how many of a given letter combo is in the string

// seperate the string so we can check each individual letter
// then compare it to the given stones we have to see if there are any

let numJewelsInStones = ((j,s) => {
    // create a count of the number of stones we have
    let count = 0;
    // create the 2 lists
    let jewelsArr = j.split("");
    let stonesArr = s.split("");
    // compare each jewele to each stone
    jewelsArr.forEach(jewel => {
        stonesArr.forEach(stone => {
            if (stone === jewel) {
                count++
            }
        })
    })
    return count;
});

numJewelsInStones("aAAbbbb", "aA"); //3