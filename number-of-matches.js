/* 
You are given an integer n, the number of teams in a tournament that has strange rules:

If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, 
and n / 2 teams advance to the next round.
If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. 
A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
Return the number of matches played in the tournament until a winner is decided.


*/

// input is n
// output is how many games are played

// if n is even then the brackets will equal (n/2) then (n/2) teams advance
//if n is odd then the brackets will equal (n-1) /2 and (n-1)/2 + 1 teams advance

// we will need to count the games to have a counter
// while n > 0
    // if n % 2 !== 0 meaning the games are odd
        // add counter to n - 1
        // we want to set n = (n-1)/2 + 1;
    // if n % 2 === 0 meaning teams are even
        // then we add to counter equal to just (n/2);

let numberOfMatches = (n) => {
    let counter = 0;
    if (n % 2 !== 0) {
        n = (n - 1) / 2 + 1;
        counter += n - 1;
    }
    while (n > 1) {
        n = n / 2;
        counter += n;
    }
    return counter;
}