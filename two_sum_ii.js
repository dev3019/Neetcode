/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const map = new Map()
    for(let i=0;i<numbers.length;i++){
      const compliment=target-numbers[i]
      if(map.has(compliment)){
        return [map.get(compliment)+1, i+1]
      }
      map.set(numbers[i], i)
    }
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([2,3,4], 6))
console.log(twoSum([-1,0], -1))