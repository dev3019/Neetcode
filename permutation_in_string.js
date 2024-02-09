/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const charFrequency = Array(26).fill(0); // Array to record char frequency
  const aCharCode = 'a'.charCodeAt(0); // Default value to be used

  for (const c of s1) charFrequency[c.charCodeAt(0) - aCharCode]++;

  let left = 0, right = 0;
  while (right < s2.length) {
    charFrequency[s2.charCodeAt(right) - aCharCode]--;
    while (charFrequency.every(a => a <= 0)) {
      if (right - left + 1 === s1.length) return true;
      charFrequency[s2.charCodeAt(left++) - aCharCode]++;
    }
    right++;
  }
  return false;

};

console.log(checkInclusion('ab','eidbaooo'))
console.log(checkInclusion('ab','eidaoboo'))