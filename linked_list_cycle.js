// Definition for singly-linked list.
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if(!head || !head.next) return false
  let [slow, fast] = [head, head]
  while(fast.next && fast.next.next){
      slow = slow.next
      fast = fast.next.next
      if(slow===fast) return true
  }
  return false
};
