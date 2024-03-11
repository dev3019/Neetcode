/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let [slow, fast] = [0, 0]
  do{
      slow = nums[slow]
      fast = nums[nums[fast]]
      if(slow === fast) break
  }while(true)
  let slow2 = 0
  do{
      slow = nums[slow]
      slow2 = nums[slow2]
      if(slow === slow2) return slow2
  }while(true)
};

console.log(findDuplicate([1,3,4,2,2]))
console.log(findDuplicate([3,1,3,4,2]))
console.log(findDuplicate([3,3,3,3,3]))