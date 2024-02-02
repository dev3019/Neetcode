function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map()
  let array: number[] = []
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