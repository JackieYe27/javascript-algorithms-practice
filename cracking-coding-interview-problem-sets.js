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
  return str.split(" ").join("%20");
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
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== " ") {
        if (hash[s[i]]) {
          delete hash[s[i]]
        } else {
          hash[s[i]] = true;
        }
        count++;
      }
    }
    if (count % 2 === 0) {
      return Object.keys(hash).length === 0;
    } else {
      return Object.keys(hash).length === 1;
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
// Check for different kinds of edits
  // Insert: s1's current char === s2's next char
  // remove: s1's next char === s2's current char
  // replace: s1's next char should match s2's next char

const oneEditAway = (s1, s2) => {
  let edits = 1;
  let maxLen = Math.max(s1.length, s2.length);
  let diff = Math.abs(s1.length - s2.length);

  if (diff > edits) {
    return false;
  }

  for (let i = 0, j =0; i < maxLen || j < maxLen; i++, j++) {
    let c1 = s1[i];
    let c2 = s2[j];

    if (c1 !== c2) {
      edits--;

      if (edits < 0) {
        return false;
      }

      if (c1 === s2[j + 1]) {
        j++;
      } else if (s1[i + 1] === c2) {
        i++;
      }
    }
  }
  return true;
}

/*

  Implement a method to perform basic string compression using the counts of repeated characters.
  For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string owuld not become smaller than the original
  your method should return the original string. You can assume the string has only uppercase or lowercase letters.

*/

const stringcompression = (str) => {
  let op = "";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    let next = str[i + 1]
    if (curr === next) {
      count++;
    } else {
      op += curr + String(count);
      count = 1;
    }
  }
  return op.length < str.length ? op : str;
}