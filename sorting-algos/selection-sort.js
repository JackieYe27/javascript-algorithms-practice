/*
    Write function selectionSort.
    1. Store the first element as the smallest value youve seen so far
    2. compare this item to the next item in the array until you find a smaller number
    3. if a smaller number is found, make smaller number be the new smallest value
    4. if the minimum is not the value you started with swap
    5. repeat  with net element until array is sorted
*/

let selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i+1 ; j < arr.length; j++) {
            console.log(i, j)
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if(i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

selectionSort([55,22,11,33,44])