/*
 Write a function that searchs for a substring within a longer string.
*/

let subString = (str, sub) => {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < sub.length; j++) {
            if (str[i]!== sub[j]) {
                break;
            }
            if(str[i] === sub[j]) {
                counter ++
            }
        }
    }
    return counter;
}

subString('i love you reb', 'e');