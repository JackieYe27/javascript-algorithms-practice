/*
    Write a function insertionSort.
    1. Start by picking the second element in the array
    2. Compare the second with the one before and swap if necessary
    3. Continue to the next element and if it is in the incorrect order, iterate through the sotred portion
    4. Repeat until the array is sorted
*/

let insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let check = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > check; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = check;
    }
    return arr;
}

insertionSort([22,11,33,55,44])
