/*
  Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

  example:
  let words = ["practice", "makes", "perfect", "coding", "makes"]
  given word1 = "coding", word2 = "practice" return 3
  given word1 = "makes", word2 = "coding" return 1
*/

const shortestDistance = (arr, w1, w2) => {
  let i1 = -1;
  let i2 = -1;
  let shortest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === w1) {
      i1 = i
    };
    if (arr[i] === w2) {
      i2 = i
    }
    if (i1 !== -1 && i2 !== -1) {
      shortest = Math.min(shortest, (Math.abs(i1 - i2)));
    }
  }
  return shortest;
}