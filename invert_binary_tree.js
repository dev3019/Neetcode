class TreeNode{
  constructor(val){
    this.val = (val===undefined ? 0 : val)
    this.left = null
    this.right = null
  }
}
var invertTree = function(root){

  // recursive
  // if(!root) return root
  // invertTree(root.left)
  // invertTree(root.right)
  // const curr = root.left
  // root.left = root.right
  // root.right = curr
  // return root
  
  // incremental
  const queue = []
  queue.push(root)
  while(queue.length){
    const levelSize = queue.length

    for(let i=0;i<levelSize;i++){
      const currentNode = queue.shift()
      if(currentNode.left) queue.push(currentNode.left)
      if(currentNode.right) queue.push(currentNode.right)
      const tempNode = currentNode.left
      currentNode.left = currentNode.right
      currentNode.right = tempNode
    }
  }
  return root
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)
console.log(invertTree(root)) //[1,3,2,7,6,5,4]