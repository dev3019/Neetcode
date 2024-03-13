class TreeNode{
  constructor(val){
    this.val = (val===undefined ? 0 : val)
    this.left = null
    this.right = null
    this.next = null
  }
}

const connectNodes = function(root){
  const queue = []
  queue.push(root)
  while(queue.length){
    const levelSize = queue.length
    let prevNode = null
    for(let i=0;i<levelSize;i++){
      const currentNode = queue.shift()
      if(prevNode){
        prevNode.next = currentNode
      }
      prevNode = currentNode
      if(currentNode.left)queue.push(currentNode.left)
      if(currentNode.right)queue.push(currentNode.right)
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
console.log(connectNodes(root)) //[1,2->3,3,4->5,5->6,6->7,7