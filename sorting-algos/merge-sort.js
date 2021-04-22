/*
    Merging 2 sorted arras. Create a helper function that creates a new array which is also sorted and 
    consists of all the elements in the two input arrays.
*/

let mergeArrs = (arr1, arr2) => {
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results
}

// Break up the array into halves until you have arrays that are empty or have one element
// Merge those arrays with other sorted arrays until you are back at the full length of the array 
// return back the array

let mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return mergeArrs(left, right)
}

mergeSort([20,21,10,5])