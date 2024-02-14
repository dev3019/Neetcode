/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const stack=[]
  const answer=new Array(temperatures.length).fill(0)
  
  for(let i=temperatures.length-1;i>=0;i--){
    while(stack.length>0){
      const temp = stack[stack.length-1]
      if(temperatures[i]<temperatures[temp]){
        answer[i] = temp-i
        break
      }else{
        stack.pop()
      }
    }
    stack.push(i)
  }
  return answer
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73])) //[1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30,40,50,60]))  //[1,1,1,0]
console.log(dailyTemperatures([30,60,90]))  //[1,1,0]
console.log(dailyTemperatures([89,62,70,58,47,47,46,76,100,70]))  //[8,1,5,4,3,2,1,1,0,0]