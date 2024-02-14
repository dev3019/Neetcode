const subArr = function(nums){
  let maxLen = 0
  let tempCount=0
  nums = Array.from(new Set(nums))
  for(let i=0;i<nums.length;i++){
    if(Math.abs(nums[i])%2!=0){
      tempCount++
    }else{
      tempCount=0
    }
    maxLen = Math.max(maxLen, tempCount)
  }
  return maxLen
}

console.log(subArr([2,3,5,3,7,8,10,11,12,13]))
console.log(subArr([-3,2,4,-5,7,9,-11,13]))

const reverse_k_ele = function(nums,k){
  let left=2, right=nums.length-1
  while(left<nums.length-2){
    console.log(left,nums[right])
    const temp = nums[left]
    nums[left] = nums[right]
    nums[right] = temp
    left++
    right--
  }
  return nums
}

console.log(reverse_k_ele([1,2,3,4,5],2))
console.log(reverse_k_ele([10,20,30,40,50,60],4))
/**
 * 
 * @param {string} str 
 * @returns {string}
 */
const reverse_recurr = function(str){
  if(str.length===0) return '' // base case
  return str[str.length-1]+reverse_recurr(str.slice(0, str.length-1))  // recursion
  
}

console.log(reverse_recurr('hello'))