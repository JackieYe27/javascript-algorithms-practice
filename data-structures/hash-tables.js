/*
    Hash Tables/Maps: Fast and commonly used
*/

// not constant, only hashes strings, little random
let hash = (key, arrayLen) => {
    let total = 0;
    for (let char of key) {
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}

