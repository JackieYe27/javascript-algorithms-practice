/*
    Radix sort only works on numbers. Does not compare numbers to each other. Instead put the numbers into buckets from
    1-9. Integer sort that works due to the property of numbers and digits.
*/

// Radix sort helper functions
// getDigit - returns the digit in num at the given place value
// getDigit(12345, 0); // 5
// getDigit(12345, 1); // 4
// getDigit(12345, 2); // 3

let getDigit = ((num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
});

// digitCount - returns the number of digits in num
// digitCount(1); // 1
// digitCount(20); // 2
// digitCount(100); // 3

let digitCount = (num) => {
    if (num === 0) return 1;
    let numStr = num.toString();
    let count = 0;
    for (let i = 0; i < numStr.length; i++) {
        count++
    }
    return count;
}

digitCount(100)

// mostDigits - Given an array of numbers, returns the number of digits in the largest numbers in the list
// mostDigits([1234, 56, 7]); // 4
// mostDigits([1234, 56, 7, 12345]); // 5

let mostDigits = (arr => {
    let maxDigits = 0;
    for (let i=0; i < arr.length; i ++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
});

// Figure out how many digits the largest number has
// Loop from k = 0 up to this largest number of digits
// for each iteration
    // create a bucket for each digit from (0 to 9) (create an array each)
    // place each number in the corresponding bucket based on its kth digit
// replace our existing array with values in our buckets, starting with 0 and going up to 9
// return list at the end


let radixSort = (nums =>{
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++) {
            let digit = digitCount(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        console.log(digitBuckets);
        nums = [].concat(...digitBuckets);
    }
    return nums;
});

radixSort([123, 12344, 1234, 1,23,222,333,444,555])