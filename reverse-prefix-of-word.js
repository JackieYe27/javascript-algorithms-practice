/*

  Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). 
  If the character ch does not exist in word, do nothing.

For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). 
The resulting string will be "dcbaefd".
Return the resulting string.

*/

const reversePrefix = (word, ch) => {
  if (!(word.includes(ch))) {
    return word;
  }

  let index = word.indexOf(ch);
  let ending = word.split("").splice(index + 1);
  let start = word.split("").splice(0, index + 1).reverse();
  return start.concat(ending).join("");

}

console.log(reversePrefix("abcdefd", "d"));