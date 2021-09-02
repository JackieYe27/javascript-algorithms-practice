const isUnique = (string) => {
  for (let i = 0; i < string.length ; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
}

const permutation = (str1, str2) => {
  let hash1 = {};
  let hash2 = {};

  if (str1.length !== str2.length) return false

  for (let i = 0; i < str1.length; i++) {
    let curr = str1[i];
    hash1[curr] = (hash1[curr] || 0) + 1;
  }

  for (let j = 0; j < str2.length; j++) {
    let curr = str2[j];
    hash2[curr] = (hash2[curr] || 0) + 1;
  }

  for (let key in hash1) {
    if (!(key in hash2)) {
      return false;
    }
    if (hash2[key] !== hash1[key]) {
      return false;
    }
  }
  return true;
}

// Given an array of surveys and users, check which users fall into with survey
const surveys = [
  {
    name: "survey1",
    age: [24, 25, 26],
    gender: ["M", "F"],
    isMarried: false
  },
  {
    name: "survey2",
    age: [30],
    gender: ["M"],
    isMarried: true
  },
  {
    name: "survey3",
    age: [24, 25, 26, 30],
    gender: ["F"],
    isMarried: false
  },
  {
    name: "survey4",
    age: [25]
  }
]

const users = [
  {
    name: "jo",
    age: 25,
    gender: "M",
    isMarried: false
  },
  {
    name: "Jane",
    age: 25,
    gender: "F",
    isMarried: false
  },

]

const userCheck = (survey, users) => {
  let final = [];
  for (let i = 0; i < survey.length; i++) {
    let currentSurvey = survey[i];
    for (let j = 0; j < users.length; j++) {
      let currentUser = users[i];
      for (let key in currentSurvey) {
        if (key !== "name") {
          if(currentSurvey[key].includes(currentUser[key])) {
            final.push({currentUser, currentSurvey})
          }
        }
      }
    }
  }
  return final;
}


const urlify = (str) => {
  let arrStr = str.split("");
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === " ") {
      arrStr[i] = "%20";
    }
  }
  return arrStr.join("");
}

// St4ring permuation
  // if string is even then we need an even amount of letters for each letter
  // if string is odd then we know that there is only 1 letter that will be odd
  // use object to store letters
    // if letter is already in the object we delete it
  // at the end if the s is even - have empty object, is odd - have 1 unique value

  const isPalindrome = (s) => {
    let hash = {};
    let count = 0;
    for(let i = 0; i < s.length; i++) {
      if (hash[s[i]]) {
        delete hash[s[i]];
      } else {
        hash[s[i]] = true
      };
      count++;
    }
    if (count % 2 === 0) {
      return Object.keys(hash) === 0;
    } else {
      return Object.keys(hash) === 1;
    }
  }

  const validPalindrome = (s) => {
    let clean = s.toLowerCase().replace(/[^0-9a-z]/g, "");
    let left = 0;
    let right = clean.length-1;
    while (left < right) {
      if (clean[left] !== clean[right]) {
        return false;
      }
      left++;
      right--
    }
    return true;
  }

  console.log(validPalindrome("race car, race car, race. car")); // true

/*

  Given two strings write a funciton to check if they are one edits or zero edits away
  3 types of edits can be performed : Insert a char, remove a char, replace a char
  Examples: cake - ake, pale - ple

*/

const oneEditAway = (s1, s2) => {
  
}