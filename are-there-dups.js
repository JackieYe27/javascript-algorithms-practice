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
    console.log(collection)
    for (let val in collection) {
        console.log(collection[val])
        if (collection[val] > 1) {
            return true;
        }
    }
    return false;
}

areThereDuplicates("a", 2, "b", 3, "a")
areThereDuplicates(1,2,3)
areThereDuplicates(1,2,2)