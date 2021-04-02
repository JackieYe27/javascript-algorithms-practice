// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. 
// The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". 
// The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

// Example 1:
// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".

// Example 2:
// Input: command = "G()()()()(al)"
// Output: "Gooooal"

// Example 3:
// Input: command = "(al)G(al)()()G"
// Output: "alGalooG"

// input is a string thats either "G", "()", or "(al"
// output is the string that is parsed 
// given only 3 commands so we can just create variables equal to the commands

let interpet = (command) => {
    // have the final parsed string
    let final = '';
    // set a counter
    let i = 0
    // keep looping through until no more words so we will consider "()" as plus 2 "(al)" 4 and "G" as 1
    while(i < command.length) {
        if (command[i] === "(" && command[i +1] === ")") {
            final = final + "o";
            i = i + 2;
        } else if (command[i] === '(' && command[i + 1] === "a") {
            final = final + "al"
            i = i + 4;

        } else {
            final = final + "G"
            i++;
        }
    }
    return final;
};

interpet("G()()()()(al)")