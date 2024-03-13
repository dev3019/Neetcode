class TreeNode{
  constructor(val){
    this.val = (val===undefined ? 0 : val)
    this.left = null
    this.right = null
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(!root) return 0
  const queue = [root]
  let maxLevels = 0
  while(queue.length){
      const levelSize = queue.length
      maxLevels++
      for(let i=0;i<levelSize;i++){
          const currentNode = queue.shift()
          if(currentNode.left) queue.push(currentNode.left)
          if(currentNode.right) queue.push(currentNode.right)
      }
  }
  return maxLevels
};

// TC1
let root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

console.log(maxDepth(root))

// TC2
root = new TreeNode(1)
root.right = new TreeNode(2)
console.log(maxDepth(root))