/*
    Write a function called minSubArrayLen which accepts two parameters -
    an array of positive integers and a positive integer. This function should return the minimal length 
    of a contagious subarray of which the sum is greater than or equal to the integer passed to the function. If there isnt
    one return 0 instead
*/

// input is an array and an integer
// output is the length of an array where that array is sum is greater than or equal to the integer passed in

// create a window where you will be moving one digit at a time if the windo sum is not equal to sum
// if current window equals to the sum
    // we can return the minimum length of the array

let minSubArrayLen = (array, sum) => {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while(start < array.length) {
        if (total < sum && end < array.length) {
            total += array[end];
            end ++;
        }
        else if (total >= sum) {
            minLen = Math.min (minLen, end-start);
            total -= array[start];
            start ++;
        }
        else {
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}