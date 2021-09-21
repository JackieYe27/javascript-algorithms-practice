/*

You are given a string s of even length. Split this string into two halves of equal lengths,
 and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). 
Notice that s contains uppercase and lowercase letters.
Return true if a and b are alike. Otherwise, return false.

*/

const halvesAreAlike = (s) => {
  let vowels = ["a","e","i","o","u"];
  let middle = Math.floor(s.length / 2);
  let a = s.slice(0, middle);
  let b = s.slice(middle);
  console.log(a)
  console.log(b)

  let countA = 0;
  let countB = 0;

  for (let i = 0; i < a.length; i++) {
    let char = a[i];
    if (vowels.includes(char.toLowerCase())) {
      countA++;
    }
  }

  for (let j = 0; j < b.length; j++) {
    let char = b[j];
    if (vowels.includes(char.toLowerCase())) {
      countB++;
    }
  }

  if (countA !== countB) {
    return false;
  }

  return true;
}

console.log(halvesAreAlike("book")) // true
console.log(halvesAreAlike("AbcDEfg")) // true
console.log(halvesAreAlike("bokk")) // false
