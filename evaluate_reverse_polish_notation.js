const operators = new Set(['+', '-', '*', '/']);

const isNotNum = function(token) {
    return operators.has(token);
};

const getToken = function(tokens){
  return tokens.pop()
}

const compute = function(a,b,op){
  switch (op) {
        case '+':
          return a+b
        case '-':
          return a-b
        case '*':
          return a*b
        case '/':
          return parseInt(a/b)
      }
}

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const num_stack = []
  if(tokens.length<2) return parseInt(tokens[0]) || 0
  for(let i=0;i<tokens.length;i++){
    if(isNotNum(tokens[i])){
      const tempVal = num_stack.pop()
      num_stack.push(compute(num_stack.pop(),tempVal,tokens[i]))
    } else{
      num_stack.push(parseInt(tokens[i]))
    }
  }
  return num_stack.pop()
};

console.log(evalRPN(["4","13","5","/","+"]))  //6
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])) //22
console.log(evalRPN(["2","1","+","3","*"]))
console.log(evalRPN(['/']))