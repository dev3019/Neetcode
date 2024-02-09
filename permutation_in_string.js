// function permute(str){
  
// }
String.prototype.permute = function(){
  const str = this
  if(str.length<=1) return str
  const result=[]
  for(let i=0;i<str.length;i++){
    const currChar = str[i]
    const remainChars = str.slice(0, i)+str.slice(i+1)
    const permutationsOfRemainChars = remainChars.permute(); // Recursively get permutations
    for (const perm of permutationsOfRemainChars) {
      result.push(currChar + perm); // Concatenate current character with permutations of remaining characters
    }
  }
  return result
}
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let windowStart=0, windowEnd=0, answer=''
    const combi=s1.permute()
    while(windowStart<s2.length){
      answer+=s2[windowStart]
      if(answer.length===s1.length){
        if(combi.includes(answer))return true
        answer=answer.slice(1)
      } 
      windowStart++
    }
    return false
};

console.log(checkInclusion('ab','eidbaooo'))
console.log(checkInclusion('ab','eidoaboo'))