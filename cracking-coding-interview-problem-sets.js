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