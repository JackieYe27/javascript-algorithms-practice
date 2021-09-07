/*
    Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are 
    any duplicates among the arguments passed in.
*/

// input is any number of arguments
// output is boolean true if there are any dupes

//

let areThereDuplicates = (...arguments) => {
    let collection = {};
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
    }
    console.log(collection);
    for (let val in collection) {
        if (collection[val] > 1) {
            return true;
        }
    }
    return false;
}

console.log(areThereDuplicates("a", 2, "b", 3, "a")) // True
console.log(areThereDuplicates(1,2,3)) // false
console.log(areThereDuplicates(1,2,2)) // true