/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if(nums.length<1) return 0
  nums.sort((a,b) => a-b)
  let max=0
  let count=1
  for(let i=0;i<nums.length-1;i++){
    const curr=nums[i]
    const next=nums[i+1]
    if(curr!==next){
      if(curr+1===next){
        count++
      }else{
        max = Math.max(count, max)
        count=1
      }
    }
  }
  return Math.max(max, count)
};

console.log(longestConsecutive([100,4,200,1,3,2]))
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
console.log(longestConsecutive([1,2,0,1]))