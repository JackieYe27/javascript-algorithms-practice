/*
    Write a funtion that accepts an aray and a value. Loop through the array and check if the current array
    element is equal t othe value. If it is return the index at which element is found.
    If not found return -1
*/

let linearSearch = (array, val) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === val) {
            return i;
        } 
    }
    return - 1;
}

linearSearch([10,15,25,30], 15)