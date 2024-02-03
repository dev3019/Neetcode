/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const regex = /[^a-z0-9]/g;
  s=s.toLowerCase().replace(regex, '')
  let j=s.length-1
  for(let i=0;i<s.length/2;i++){
    if(s[i]!==s[j]) return false
    j--
  }
  return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))