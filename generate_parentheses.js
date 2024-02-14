/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const sol =[]
  const ret = []

  function backtrack(num_open, num_close){
    if (num_open===num_close && num_close===n){
      ret.push(sol.join(''))
      return
    }

    if (num_open<n){
      sol.push('(')
      backtrack(num_open+1, num_close)
      sol.pop()
    }

    if(num_close<num_open){
      sol.push(')')
      backtrack(num_open, num_close+1)
      sol.pop()
    }
  }
  backtrack(0,0)
  return ret
};

console.log(generateParenthesis(1))
console.log(generateParenthesis(3))