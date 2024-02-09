/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const s1Len = s1.length
  const s2Len = s2.length

  const charFrequency = new Array(26).fill(0) //define array to record char frequency
  const defaultCharVal = 'a'.charCodeAt(0)  //default value to be used
  
  //record char frequency from s1
  for(const c of s1){
    charFrequency[(c.charCodeAt(0)-defaultCharVal)]++
  }
  
  for(let left=0, right=0; right<s2Len;right++){
    if(right>=s1Len){
      const leftChar = s2.charCodeAt(left)-defaultCharVal
      console.log('left-before', charFrequency[leftChar], s2[left])
      charFrequency[leftChar]++
      console.log('left-after', charFrequency[leftChar], s2[left])
      left++
    }
    const rightChar = s2.charCodeAt(right)-defaultCharVal
    console.log('right-before', charFrequency[rightChar], s2[right])
    charFrequency[rightChar]--
    console.log('right-after', charFrequency[rightChar], s2[right])

    if(!charFrequency.some((a)=>a!==0)) return true
  }
  return false

};

console.log(checkInclusion('ab','eidbaooo'))
console.log(checkInclusion('ab','eidaoboo'))