// Definition for a Node.
class Node {
  constructor(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
};

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    const map = new Map()
    map.set(null, null)
    let current = head
    while(current){
      const node = new Node(current.val)
      map.set(current, node)
      current = current.next
    }

    current = head
    while(current){
      const node = map.get(current)
      node.next = map.get(current.next)
      node.random = map.get(current.random)
      current = current.next
    }
    
    return map.get(head)
};

// TC1
const n1 = new Node(7)
const n2 = new Node(13)
n1.next = n2
n2.random = n1
const n3 = new Node(11)
n2.next = n3
const n4 = new Node(10)
n3.next = n4
n4.random = n3
const n5 = new Node(1, null)
n1.random = n5.next
n3.random = n5
n4.next = n5
n5.random = n1

console.log(copyRandomList(n1))
