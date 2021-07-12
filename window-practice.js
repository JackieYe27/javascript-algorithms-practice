/*
  Example: Given a smaller string s and a bigger string b, 
  design an algorithm to find all permutations of the shorter string within the longer one. 
  Print the location of each permutation.
*/

// create an object that holds all values of s and their count
// have a checker object and add to it as we loop through b
  // check the value and how many times it shows up within the window
  // if it does show up add it to a result
// show result

const smallStringsInBigString = (s, b) => {
  if (s.length === 0 || s.length > b.length) return null;
  let results = [];
  let sObj = {};
  let checker = {};

  let sArr = s.split("");
  for (let i = 0; i < sArr.length; i++) {
    sObj = (sArr[i] || 0) + 1;
  }
  console.log(sObj)
  return results
}