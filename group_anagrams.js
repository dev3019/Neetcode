/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map()
  for (const str of strs){
    const sortedStr = str.split('').sort().join('')
    if(map.has(sortedStr)){
      map.set(sortedStr, [str, ...map.get(sortedStr)])
    }else{
      map.set(sortedStr, [str])
    }
  }
  return Array.from(map.values())
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))