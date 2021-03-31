// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. 
// You are also given a rule represented by two strings, ruleKey and ruleValue.
// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

// Example 1:
// Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

// Example 2:
// Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
// Output: 2
// Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. 
//Note that the item ["computer","silver","phone"] does not match.

// items is an array with arrays
// ruleKey is basically the index of the inner array and ruleValue is the name
// return a number of how many inner arrays match the rules


var countMatches = function(items, ruleKey, ruleValue) {
    // loop through first array
    let count = 0;
    for(i = 0; i < items.length; i ++) { // 0
        console.log(items[i][2])
        // loop through inner arrays to check index and value
        if (ruleKey === "type") {
            if (items[i][0] === ruleValue) {
                count++;
            }
         } else if (ruleKey === "color") {
                if (items[i][1] === ruleValue) {
                count++;
            }
        } else if (ruleKey === "name") {
            if (items[i][2] == ruleValue) {
                count++;
        }
    }
    }
    return count;
};

var countMatches = function(items, ruleKey, ruleValue) {
    const RULE_KEYS = {
      type: 0,
      color: 1,
      name: 2,
    };
    const ruleInd = RULE_KEYS[ruleKey];
    return items.filter(item => item[ruleInd] === ruleValue).length;
  };

countMatches([["qqqq","qqqq","qqqq"],["qqqq","qqqq","qqqq"],["qqqq","qqqq","qqqq"],["qqqq","qqqq","qqqq"],["qqqq","qqqq","qqqq"],["qqqq","qqqq","qqqq"],["qqqq","qqqq","qqqq"]],
"name","qqqq")

// check