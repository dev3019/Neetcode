
//  Definition for singly-linked list.
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // if(head===null || head.next===null) return head
  // let ans = reverseList(head.next)
  // head.next.next = head
  // head.next = null
  // return ans
  // iterative

  let prev = null
  let current = head
  while(current!==null){
    const currentNext = current.next
    current.next = prev
    prev = current
    current = currentNext
  }
  return prev
};

let head
for(let i=5;i>0;i--){
  head = new ListNode(i,head)
}
console.log(reverseList(head))
head=null
for(let i=2;i>0;i--){
  head = new ListNode(i,head)
}
console.log(reverseList(head))