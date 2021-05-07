/*
    Hash Tables/Maps: Fast and commonly used
*/

// not constant, only hashes strings, little random
let hash = (key, arrayLen) => {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}

// improving the function
    // adding prime numbers to create better distribution

let hash = (key, arrayLen) => {
    let total = 0;
    let prime = 31;
    for (let i =0; i < key.length; i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * prime + value) % arrayLen;
    }
    return total;
}