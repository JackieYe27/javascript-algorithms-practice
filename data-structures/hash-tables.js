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

// approaching collisions
class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }
    hash(key) {
        let total = 0;
        let prime = 31;
        for (let i = 0; i < key.length; i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * prime + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, val) {
        let newHash = this.hash(key);
        if(!this.keyMap[newHash]) {
            this.keyMap[newHash] = [];
        }
        this.keyMap[newHash].push([key, val]);
    }
    get(key) {
        let newHash = this.hash(key);
        if(this.keyMap[newHash]) {
            for (let i = 0; i < this.keyMap[newHash].length; i++) {
                if(this.keyMap[newHash][i][0] === key) {
                    return this.keyMap[newHash][i][1];
                }
            }
        }
        return undefined;
    }
}
