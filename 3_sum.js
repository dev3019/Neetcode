/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a,b)=>a-b)
  const result=[]
  for(let i=0;i<nums.length;i++){
    if(nums[i]>0) break
    if(i>0 && nums[i]===nums[i-1]) continue
    let j=i+1
    let k=nums.length-1
    while(j<k){
      total=nums[i]+nums[j]+nums[k]
      if (total>0){
        k--
      }else if (total<0){
        j++
      }else {
        result.push([nums[i],nums[j],nums[k]])
        j++
        k--
        while(nums[j]===nums[j-1] && j<k){
          j++
        }
      }
    }
  }
  return result
};

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0,1,1]))
console.log(threeSum([0,0,0]))