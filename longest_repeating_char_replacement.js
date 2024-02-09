/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let windowStart=0, windowEnd=0, topCount=0, longestString=0
  const map = new Map()
  while(windowEnd<s.length){
    const char = s[windowEnd]
    map.set(char, (map.get(char)||0)+1)
    topCount = Math.max(topCount, map.get(char))
    while((windowEnd-windowStart+1)-topCount>k){
      const leftChar = s[windowStart]
      map.set(leftChar, (map.get(leftChar)||0)-1)
      windowStart++
    }
    longestString = Math.max(longestString, (windowEnd-windowStart+1))
    windowEnd++
  }
  return longestString
};

console.log(characterReplacement('ABAB',2))
console.log(characterReplacement('AABABBA',1))