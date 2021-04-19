/*
    Write a function called power which accepts a base and an exponent. The function should return
    the power of the base to the exponent. This function shoud mimic the functionality of Math.pow().
*/

let power = (base, pow) => {
    if (pow === 0) return 1
    return base * power(base, pow - 1)
}

power(2,2)

/*
    Write a function factorial which accepts a number and returns the factorial of that number.
    A factorial is the product of an integer and all the integers below it.
*/

let factorial = (integer) => {
    if (integer === 0) return 1;
    return integer * factorial(integer -1);
}
factorial(4)

/*
    Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/

let productOfArray = (array) => {
    if (!array.length) return 1;
    let product = array[0];
    array.shift()
    return product * productOfArray(array);
}

productOfArray([1,2,3,4,10])

/*
    Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number
    passed to the function
    */

let recursiveRange = (number) => {
    if (number <= 0) return 0;
    return number + recursiveRange(number-1)
}

recursiveRange(6)

/*
    Write a recursive function called fib which accepts a number and returns the nth number in the fibonacci sequence.
    Recall that the Fibbonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8. Starts with 1 and 1 but every num
    after is equal to the sume of the previous 2 nums
*/

function fib(num) {
    if (num <=2) return 1;
    return fib(num-1) + fib(num-2)
}

// 4
// return fib(3) + fib(2)
//     return fib(2) + fib(1) + 1
//         return 1 + 1 + 1

fib(4) // return 3