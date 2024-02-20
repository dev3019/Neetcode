/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let temp=Infinity
    for(let i=nums.length-1;i>=0;i--){
      if(temp!==Math.max(temp, nums[i])){
        return temp
      }
      temp = nums.pop()
    }
    return temp
};

console.log(findMin([3,4,5,1,2]))
console.log(findMin([4,5,6,7,0,1,2]))
console.log(findMin([11,13,15,17]))