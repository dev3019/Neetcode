/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length<2) return 0
    let maxWater=0
    let l=0, r=height.length-1, lMax=0, rMax=0
    while(l<r){
      if(height[l]<height[r]){
        if(height[l]<lMax){
          maxWater+=lMax - height[l]
        } else{
          lMax = height[l]
        }
        l++
      }else{
        if(height[r]<rMax){
          maxWater+=rMax - height[r]
        } else{
          rMax = height[r]
        }
        r--
      }
    }
    return maxWater
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(trap([4,2,0,3,2,5]))
