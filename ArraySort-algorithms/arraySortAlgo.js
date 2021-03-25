// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

// make a function that takes in an array and returns an array that contains individual arrays with like numbers
// sort the array first
// loop through sorted array
// make a note of same numbers and put them into an array
// if not the same then start over
// if no same number put into end array
// return final array

let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20, "20", "21"];

let cleanUp = (arr) => {
    let sortArr = arr.sort((a, b) => {
        return a - b;
    })

    let numArr = sortArr.filter(num => typeof num === "number");
    let stringArr = sortArr.filter(num => typeof num === "string");
    console.log(stringArr);
    let innerArr = [];
    let finalArr = [];

    numArr.forEach((num, i) => {
        if (num === numArr[i + 1]) {
            innerArr.push(num);
        } else if (num === numArr[i - 1]) {
            innerArr.push(num);
            finalArr.push(innerArr);
            innerArr = [];
        } else if (num !== numArr[i + 1]) {
            finalArr.push(num);
        }
    })
    return finalArr.concat([stringArr]);
}


cleanUp(array);









