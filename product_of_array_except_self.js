/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const length = nums.length
  const output = new Array(length).fill(1)
  let leftProduct=1
  for(const i in nums){
    output[i]*=leftProduct
    leftProduct*=nums[i]
  }

  let rightProduct=1
  for(let i=nums.length-1;i>=0;i--){
    output[i]*=rightProduct
    rightProduct*=nums[i]
  }
  return output
}

console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1,1,0,-3,3]))