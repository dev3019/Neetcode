/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  function binary_search(arr, tar, left, right){
    if(left>right){
      return -1
    }
    else{
      const mid = Math.floor((left+right)/2)
      if(tar===nums[mid]){
        return mid
      }else if (tar<nums[mid]){
        return binary_search(arr, tar, left, mid-1)
      }else{
        return binary_search(arr, tar, mid+1, right)
      }
    }
  }
  return binary_search(nums, target, 0, nums.length-1)
  // return nums.includes(target) ? nums.indexOf(target):-1
};

console.log(search([-1,0,3,5,9,12], 9))
console.log(search([-1,0,3,5,9,12], 2))