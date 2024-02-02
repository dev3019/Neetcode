/**
 * 
 * @param {number []} nums 
 * @returns {boolean}
 */
var containsDuplicate = function(nums){
  const set = new Set(nums)
  return set.size === nums.length
}