/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  let minK = Math.max(...piles)
  let left=1, right=minK
  while (left<=right) {
    let hours = 0
    const mid = parseInt((left+right)/2)
    for(const pile of piles){
      hours+=Math.ceil(pile/mid)
    }
    if(hours<=h){
      right=mid-1
      minK=mid
    }else{
      left=mid+1
    }
  }
  return minK
};

console.log(minEatingSpeed([3,6,7,11], 8))
console.log(minEatingSpeed([30,11,23,4,20], 5))
console.log(minEatingSpeed([30,11,23,4,20], 6))