// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

// Example 2:
// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

// takes in a string of numbers and "."
// create defangAdd variable 
// create an object where the property and value is just ".": true
// then loop through ip adress
    // if we find a . then change it to equal [.] and add to defangAdd
// return defangAdd

let defang = (ipAddress => {
    let dotObj = {
        ".":true
    }
    let defangAdd = "";
    for (let i=0; i < ipAddress.length; i++) {
        if (dotObj[ipAddress[i]]) {
            defangAdd += "[.]";
        } else {
            defangAdd += ipAddress[i];
        }
    }
    return defangAdd;
});

defang("255.100.50.0")

// split address at each "." since its a string to become array [1,2,3]...
// then join where we change the comma into [.];


let defang2 = (address => {
    return address.split(".").join("[.]");
});