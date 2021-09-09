/*

  You are climbing a staircase. It takes n steps to reach the top.
  Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
  Input: n = 2
  Output: 2
  Explanation: There are two ways to climb to the top.
  1. 1 step + 1 step
  2. 2 steps

Example 2:
  Input: n = 3
  Output: 3
  Explanation: There are three ways to climb to the top.
  1. 1 step + 1 step + 1 step
  2. 1 step + 2 steps
  3. 2 steps + 1 step

*/

const climbStairs = (n) => {
  let memo = [1,1,2]; // 0 steps only 1 way to get up, 1 step only 1 way, 2 steps only 2 ways
  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
}

console.log(climbStairs(6)); // 13
console.log(climbStairs(5)); // 8
console.log(climbStairs(0)); // 1


