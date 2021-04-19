/*
    Write a function called power which accepts a base and an exponent. The function should return
    the power of the base to the exponent. This function shoud mimic the functionality of Math.pow().
*/

let power = (base, pow) => {
    if (pow === 0) return 1
    return base * power(base, pow - 1)
}

power(2,2)

