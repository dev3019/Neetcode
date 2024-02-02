/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const map = new Map();
  for(const letter of s){
    map.set(letter,(map.get(letter)??0)+1)
  }
  for(const letter of t){
    map.set(letter, (map.get(letter)??0)-1)
  }
  for (const key of map.keys()){
    if(map.get(key)!==0)return false
  }
  return true
}

function main(){
  console.log(isAnagram('anagram', 'nagaram'))
  console.log(isAnagram('rat','cat'))
}
main()