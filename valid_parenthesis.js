/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  const stack=[]
  for (const c of s){
    if(c in map){
      const popEle = stack.pop() || '#'
      if(popEle !== map[c]) return false
    }else{
      stack.push(c)
    }
  }
  return stack.length === 0
};

var isValid1 = function(s){
  const map=[]
  for(const c of s){
    if(c === '(') map.push(')')
    else if(c === '{') map.push('}')
    else if(c === '[') map.push(']')
    else if(map.pop() !== c) return false
  }
  return !map.length
}

console.log(isValid('()))'))
console.log(isValid('(){}[]'))
console.log(isValid('}}'))
console.log(isValid1('()))'))
console.log(isValid1('(){}[]'))
console.log(isValid1('}}'))