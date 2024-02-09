/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const map = new Map()
    for(const c of s1){
      map.set(c, (map.get(c)||0)+1)
    }

    for(let i=0;i<=s2.length-s1.length;i++){
      const tempMap = new Map(map)
      let j=0
      for(j=i;j<i+s1.length;j++){
        if(tempMap.has(s2[j]) && tempMap.get(s2[j])>0){
          tempMap.set(s2[j], tempMap.get(s2[j])-1)
        }else break
      }
      if(j===i+s1.length) return true
    }
    return false
};

console.log(checkInclusion('ab','eidbaooo'))
console.log(checkInclusion('ab','eidaoboo'))