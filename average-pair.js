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
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let avg = (array[left] + array[right]) / 2;
        if (avg === average) {
            return true;
        } else if (avg > average) {
            right--
        } else {
            left++
        }
    }
    return false;
}

averagePair([1,2,3,4,5], 2)