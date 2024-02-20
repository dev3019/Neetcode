/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  function binary_search(arr, tar, left, right){
    if(left>right){
      return -1
    }
    else{
      const mid = Math.floor((left+right)/2)
      if(tar===arr[mid]){
        return mid
      }else if (tar<arr[mid]){
        return binary_search(arr, tar, left, mid-1)
      }else{
        return binary_search(arr, tar, mid+1, right)
      }
    }
  }
  for(const row of matrix){
    const x = binary_search(row, target, 0,row.length-1)
    if(x!==-1) return true
  }
  return false
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3))
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],13))