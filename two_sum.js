/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
    let array = []
    for(const i in nums){
      const complement = target - nums[i]
      if(map.has(complement)){
        array = [map.get(complement) ?? 0, parseInt(i, 10)]
        break;
      }
      map.set(nums[i], parseInt(i, 10))
    }
    return array
  };
  console.log(twoSum([2,7,11,15], 9))