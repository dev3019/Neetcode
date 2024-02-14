/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let prev1=1, prev2=1, current
  for(let i=2;i<=n;i++){
      current=prev1+prev2
      prev1=prev2
      prev2=current
  }
  return prev2
};

console.log(climbStairs(2))
console.log(climbStairs(3))