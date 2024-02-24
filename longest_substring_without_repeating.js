/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let windowStart = 0;
  const charIndexMap = new Map()

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const currentChar = s[windowEnd];

    // If the current character is seen before, move the window start
    // to the position after the last occurrence of the current character
    if (
      charIndexMap.has(currentChar) &&
      charIndexMap.get(currentChar) >= windowStart
    ) {
      windowStart = charIndexMap.get(currentChar) + 1;
    }

    // Update the index of the current character
    charIndexMap.set(currentChar, windowEnd);

    // Update the maximum length of the substring
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
