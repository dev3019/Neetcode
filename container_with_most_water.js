/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let l=0
  let r=height.length-1
  let maxArea=-Infinity
  while(l<r){
      const width = Math.abs(r - l)
      const area = Math.min(height[l], height[r])*width
      maxArea = Math.max(maxArea, area)
      height[l]<height[r]?l++:r--
  }
  return maxArea
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([2,3,4,5,18,17,6]))
