/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums = nums.sort((a,b)=>a-b)
    let curr=nums[0]
    let count=1, maxCount=0
    for(let i=1;i<nums.length;i++){
      if(curr===nums[i]){
        count++
      } else{
        curr=nums[i]
        count=1
      }
      if(count>nums.length/2){
        return curr
      }
    }
    return 0
};

console.log(majorityElement([3,2,3])) //3
console.log(majorityElement([2,2,1,1,1,2,2])) //2