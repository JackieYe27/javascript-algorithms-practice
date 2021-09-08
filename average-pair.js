/*
    Write a function called averagePair. Given a sorted array of integers and a target average,
    determine if there is a pair of values in the array where the average of the pair equals the target
    average. 
*/

// use two pointers for O(n)
// input is an array and a target
// output is if the target can be met in the array which is the average of 2 numbers in the array

// start 2 pointers one from the beginning and the 2nd element
// loop through the array 
// check pairs with the pointers
// average can be found by adding the two then dividing by 2

let averagePair = (array, average) => {
    let start = 0;
    let end = array.length - 1;
    let result = [];
    while (start < end) {
        if (((array[start] + array[end]) / 2) < average) {
            start++;
        } else if (((array[start] + array[end]) / 2) > average) {
            end--;
        } else if (((array[start] + array[end]) / 2) === average) {
            result.push(array[start], array[end]);
            break;
        }
    }
    return result;
}

console.log(averagePair([1,2,2,3,4,5], 2)) // [1,3]
console.log(averagePair([1,4,5,6,7,7,8,8,10,15], 5)) // [4,6]