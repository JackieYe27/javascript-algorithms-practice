/*
    Write a function called same, which accpest stwo arrays. The function should 
    return true if every value in the array has it's corresponging value squared in the same array.
    The frequency of values must be the same as well.
*/

// input 2 arrays
// output boolean true if arrays match and one is squared, false if not

// checks need to be same length and then go through each element in the array to check
// O(n) create objects where key is equal to element and property is equal to how many times that element is in each array
// then compare each object to one another to see if element2 is element1 ** 2

let same = (arr1, arr2) => {
    let obj1 = {};
    let obj2 = {};

    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
       obj1[arr1[i]] = (obj1[arr1[i]] || 0) + 1
    }
    for (let val of arr2) {
        obj2[val] = (obj2[val] || 0) + 1
    }
    console.log(obj1)
}
same([1,2,3,4,1], [1,4,9,16,1])