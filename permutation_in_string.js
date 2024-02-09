/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const charFrequency = Array(26).fill(0); // Array to record char frequency
  const aCharCode = 'a'.charCodeAt(0); // Default value to be used

  for (const c of s1) charFrequency[c.charCodeAt(0) - aCharCode]++; // record frequency of chars from s1

  let left = 0, right = 0;
  while (right < s2.length) {
    console.log('right-before', charFrequency[s2.charCodeAt(right) - aCharCode], s2[right])
    charFrequency[s2.charCodeAt(right) - aCharCode]--;
    console.log('right-after', charFrequency[s2.charCodeAt(right) - aCharCode], s2[right])
    while (charFrequency.every(a => a <= 0)) {
      if (right - left + 1 === s1.length) return true;
      console.log('left-before', charFrequency[s2.charCodeAt(left) - aCharCode], s2[left])
      charFrequency[s2.charCodeAt(left++) - aCharCode]++;
      console.log('left-after', charFrequency[s2.charCodeAt(left-1) - aCharCode], s2[left-1])
    }
    right++;
  }
  return false;

};

console.log(checkInclusion('ab','eidbaooo'))
console.log(checkInclusion('ab','eidaoboo'))