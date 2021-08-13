// Question 2: Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, give the target number. 
// For example: answer([1,2,3], 4)should return [1,3]

// Given an array and a target number
// we want to find 2 numbers in the array when added together equals the target number

// loop through the array 
    // if 2 numbers summed equals the target 
    // push the two numbers into new array
    // return new array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let target = 10

let sum = ((arr, target) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i+1; j < arr.length; j++) {
          if (arr[i] + arr[j] === target) {
              result.push(arr[i], arr[j]);
          }
      }
    }
    return result;
});


sum(array, target);



