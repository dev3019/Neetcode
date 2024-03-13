class TreeNode{
  constructor(val){
    this.val = (val===undefined ? 0 : val)
    this.left = null
    this.right = null
  }
}

/**
 * wrapper of @function create_min_bst that only focuses on some part of the array
 * @param {number[]} arr 
 * @param {number} left 
 * @param {number} right 
 */
const _create_min_bst = function(arr, left, right){
  if(right<left) return null
  const mid = Math.floor((left+right)/2)
  const rootNode = new TreeNode(arr[mid])
  rootNode.left = _create_min_bst(arr, left, mid-1)
  rootNode.right = _create_min_bst(arr, mid+1, right)
  return rootNode
}


/**
 * 
 * @param {number[]} arr arr to be inserted needs to be sorted
 * @returns {TreeNode}
 */
const create_min_bst = function(arr){
  return _create_min_bst(arr, 0, arr.length-1)
}

console.log(create_min_bst([1,2,3,4,5,6,7,8,9,10]))