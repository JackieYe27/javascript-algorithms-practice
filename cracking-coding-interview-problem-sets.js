const isUnique = (string) => {
  for (let i = 0; i < string.length; i++) {
    for (let j = i+1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
}

const permutation = (str1, str2) => {
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i< str1.length; i++) {
    obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
  }

  for (let j = 0; j < str2.length; j++) {
    obj2[str2[j]] = (obj2[str2[j]] || 0) + 1;
  }

  for(let key in obj1) {
    if (!(key in obj2)) {
      return false;
    }
    if (obj2[key] !== obj1[key]) {
      return false;
    }
  }
  return true;
}

const urlify = (str) => {
  let arrStr = str.split("")
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === " ") {
      arrStr[i] = "%20";
    }
  }
  return arrStr.join("");
}

// St4ring permuation
  // if string is even then we need an even amount if letters for each letter
  // if string is odd then we know that there is only 1 letter that will be odd
  // use object to store letters
    // if letter is already in the object we delete it
  // at the end if the s is even - have empty object, is odd - have 1 unique value

  const isPalindrome = (s) => {
    let sCount = {};
    let charCount = 0;
    for (let i = 0; i < s.length; i++) {
      let c = s[i].toLowerCase();
      if (c === " ") continue;
      if (sCount[c]) {
        delete sCount[c];
      } else {
        sCount[c] = true;
      }
      charCount++
    }
    console.log(charCount);
    console.log(Object.keys(sCount).length)
    if (charCount % 2 === 0) {
      return Object.keys(sCount).length === 0;
    } else {
      return Object.keys(sCount).length === 1
    }
  }