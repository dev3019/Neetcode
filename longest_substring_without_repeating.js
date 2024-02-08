/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let answer=''
  let windowStart=0
  answer+=s[windowStart]
  const set = new Set()
  set.add(answer)
  let temp=0
  for(let i=1;i<s.length;i++){
    if (!set.has(s[i])){
      answer+=s[i]
      set.add(s[i])
    }else{
      if(answer.length>temp) temp=answer.length
      set.clear(answer[windowStart])
      i=windowStart
      windowStart++
      answer=''
    }
  }
  if(answer.length>temp) temp=answer.length
  return temp
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
